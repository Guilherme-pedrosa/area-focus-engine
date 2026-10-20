/**
 * Produce indexable HTML for every existing public sitemap URL.
 * Uses the same App/Routes/components as the browser, without backend access.
 * Vite's JavaScript remains responsible for interactive navigation afterwards.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import Module, { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';

const repo = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(repo, 'dist');
const require = createRequire(import.meta.url);
// esbuild is Vite's installed dependency; no extra build service is needed.
const { build } = createRequire(require.resolve('vite/package.json'))('esbuild');
const origin = 'https://wedocozinhas.com.br';

function headKey(element) {
  const tag = element.tagName.toLowerCase();
  if (tag === 'title') return 'title';
  if (tag === 'meta') return `meta:${element.getAttribute('name') || element.getAttribute('property') || element.getAttribute('http-equiv') || ''}`;
  if (tag === 'link') return element.getAttribute('rel') === 'canonical' ? 'link:canonical' : `link:${element.getAttribute('rel')}:${element.getAttribute('href')}`;
  return null;
}

function htmlWithPage(template, page, route) {
  const document = new JSDOM(template).window.document;
  const root = document.getElementById('root');
  if (!root) throw new Error('Vite HTML does not contain #root.');
  root.innerHTML = page.html;
  root.setAttribute('data-prerendered-route', route);
  // The real content is available without JavaScript; avoid a second fallback h1.
  document.querySelectorAll('noscript').forEach(node => node.remove());
  const incoming = new JSDOM(`<head>${page.head}</head>`).window.document.head;
  const newJsonLd = incoming.querySelector('script[type="application/ld+json"]');
  if (newJsonLd) document.head.querySelectorAll('script[type="application/ld+json"]').forEach(node => node.remove());
  for (const element of Array.from(incoming.children)) {
    const key = headKey(element);
    if (key) for (const existing of Array.from(document.head.children)) {
      if (headKey(existing) === key) existing.remove();
    }
    document.head.appendChild(document.importNode(element, true));
  }
  // The shared HTML shell must not leave the home page's social preview on
  // another route. Reuse each component's own title/description/canonical.
  const description = document.head.querySelector('meta[name="description"]')?.content;
  const socialDefaults = {
    'og:title': document.title,
    'og:description': description,
    'og:url': origin + route,
    'twitter:title': document.title,
    'twitter:description': description,
  };
  for (const [key, content] of Object.entries(socialDefaults)) {
    const attribute = key.startsWith('og:') ? 'property' : 'name';
    if (incoming.querySelector(`meta[${attribute}="${key}"]`) || !content) continue;
    let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
    if (!element) { element = document.createElement('meta'); document.head.appendChild(element); }
    element.setAttribute(attribute, key);
    element.setAttribute('content', content);
    element.setAttribute('data-rh', 'true');
  }
  const canonical = document.head.querySelector('link[rel="canonical"]')?.getAttribute('href');
  if (!canonical || new URL(canonical).href !== origin + route) throw new Error(`${route}: canonical differs from its public URL (${canonical}).`);
  if (!document.title.trim() || !document.head.querySelector('meta[name="description"]')?.content) throw new Error(`${route}: missing title/description.`);
  if (root.querySelectorAll('h1').length !== 1) throw new Error(`${route}: expected exactly one page h1.`);
  if ((root.textContent || '').trim().length < 100) throw new Error(`${route}: empty or redirected page; refusing to publish a shell.`);
  const output = '<!doctype html>\n' + document.documentElement.outerHTML + '\n';
  document.defaultView.close();
  incoming.ownerDocument.defaultView.close();
  return output;
}

async function main() {
  const [template, sitemap, manifestText] = await Promise.all([
    fs.readFile(path.join(dist, 'index.html'), 'utf8'),
    fs.readFile(path.join(repo, 'public/sitemap.xml'), 'utf8'),
    fs.readFile(path.join(dist, '.vite/manifest.json'), 'utf8'),
  ]);
  const locations = [...sitemap.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(match => new URL(match[1]));
  for (const url of locations) if (url.origin !== origin || url.search || url.hash || url.pathname.includes('..')) throw new Error(`Invalid public sitemap location: ${url.href}`);
  const routes = [...new Set(locations.map(url => url.pathname))];
  if (!routes.includes('/') || routes.length !== locations.length) throw new Error('Sitemap requires one home URL and unique public URLs.');
  const manifest = JSON.parse(manifestText);

  const result = await build({
    stdin: {
      resolveDir: repo, sourcefile: 'prerender-entry.tsx', loader: 'tsx',
      contents: `
        import React from 'react';
        import { renderToStaticMarkup } from 'react-dom/server';
        import App from './src/App';
        export function renderRoute(route) {
          globalThis.__WEDO_PRERENDER_ROUTE__ = route;
          const context = {};
          globalThis.__WEDO_PRERENDER_HELMET__ = context;
          const html = renderToStaticMarkup(<App />);
          const helmet = context.helmet;
          const head = helmet ? ['title','meta','link','script'].map(key => helmet[key].toString()).join('') : '';
          return { html, head };
        }
      `,
    },
    bundle: true, write: false, platform: 'node', format: 'cjs', packages: 'external', jsx: 'automatic',
    alias: { '@': path.join(repo, 'src') }, loader: { '.css': 'empty' }, logLevel: 'warning',
    plugins: [{
      name: 'static-public-app',
      setup(builder) {
        builder.onLoad({ filter: /[/\\]src[/\\]App\.tsx$/ }, async ({ path: filename }) => {
          const source = await fs.readFile(filename, 'utf8');
          if (!source.includes('<BrowserRouter>') || !source.includes('<HelmetProvider>')) throw new Error('App provider structure changed; update prerender adapter.');
          return {
            loader: 'tsx',
            contents: source.replace(/\bBrowserRouter\b/g, 'MemoryRouter')
              .replace('<MemoryRouter>', '<MemoryRouter initialEntries={[globalThis.__WEDO_PRERENDER_ROUTE__]}>')
              .replace('<HelmetProvider>', '<HelmetProvider context={globalThis.__WEDO_PRERENDER_HELMET__}>'),
          };
        });
        builder.onLoad({ filter: /[/\\]integrations[/\\]supabase[/\\]client\.ts$/ }, () => ({
          loader: 'js',
          contents: 'export const supabase = new Proxy({}, { get() { throw new Error("Prerender must not access Supabase or user data."); } });',
        }));
        builder.onLoad({ filter: /\.(png|jpe?g|webp|svg|gif|avif)$/ }, ({ path: filename }) => {
          const key = path.relative(repo, filename).split(path.sep).join('/');
          const asset = manifest[key];
          if (!asset?.file) throw new Error(`Missing Vite asset manifest entry: ${key}`);
          return { loader: 'js', contents: `export default ${JSON.stringify('/' + asset.file)};` };
        });
      },
    }],
  });
  // SSR must remain independent from both credentials and network availability.
  process.env.NODE_ENV = 'production';
  globalThis.fetch = () => { throw new Error('Network is disabled during public prerender.'); };
  const filename = path.join(repo, '.prerender-memory.cjs');
  const rendered = new Module(filename);
  rendered.filename = filename;
  rendered.paths = Module._nodeModulePaths(repo);
  rendered._compile(result.outputFiles[0].text, filename);
  const failures = [];
  for (const route of routes) {
    try {
      const page = rendered.exports.renderRoute(route);
      const html = htmlWithPage(template, page, route);
      const target = path.join(dist, route.slice(1), 'index.html');
      await fs.mkdir(path.dirname(target), { recursive: true });
      await fs.writeFile(target, html);
    } catch (error) { failures.push(error.message); }
  }
  if (failures.length) throw new Error(`Prerender failed for ${failures.length} public URLs:\n${failures.join('\n')}`);
  console.log(`Prerender: ${routes.length} public URLs contain their real page HTML and metadata.`);
}

main().catch(error => { console.error(error); process.exitCode = 1; });
