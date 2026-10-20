/** Validate the generated release rather than only the source components. */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { JSDOM } from 'jsdom';

const repo = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(repo, 'dist');
const origin = 'https://wedocozinhas.com.br';
const sitemap = await fs.readFile(path.join(dist, 'sitemap.xml'), 'utf8');
const routes = [...sitemap.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(match => new URL(match[1]).pathname);
const failures = [];
const pages = [];
const hashes = new Map();
const checkedAssets = new Set();
const redirects = [];
for (const route of routes) {
  try {
    const filename = path.join(dist, route.slice(1), 'index.html');
    const html = await fs.readFile(filename, 'utf8');
    const document = new JSDOM(html).window.document;
    const root = document.getElementById('root');
    const title = document.title;
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
    if (document.querySelectorAll('title').length !== 1) failures.push(`${route}: duplicate or missing title`);
    if (document.querySelectorAll('meta[name="description"]').length !== 1) failures.push(`${route}: duplicate or missing description`);
    if (document.querySelectorAll('link[rel="canonical"]').length !== 1 || !canonical || new URL(canonical).href !== origin + route) failures.push(`${route}: wrong canonical`);
    if (!root || root.getAttribute('data-prerendered-route') !== route) failures.push(`${route}: missing prerendered route`);
    if (root?.querySelectorAll('h1').length !== 1) failures.push(`${route}: missing or duplicate h1`);
    if ([...document.querySelectorAll('meta[name="robots"]')].some(meta => /noindex/i.test(meta.content))) failures.push(`${route}: sitemap URL is noindex`);
    for (const element of document.querySelectorAll('script[type="application/ld+json"]')) {
      try { JSON.parse(element.textContent); } catch { failures.push(`${route}: invalid JSON-LD`); }
    }
    const moduleScript = document.querySelector('script[type="module"][src]');
    if (!moduleScript) failures.push(`${route}: missing interactive Vite entry`);
    const sources = [...document.querySelectorAll('script[src],link[rel="stylesheet"][href],img[src],video[src],video[poster],source[src]')]
      .flatMap(element => ['src', 'href', 'poster'].map(attribute => element.getAttribute(attribute)).filter(Boolean));
    for (const source of sources) {
      if (!source?.startsWith('/') || source.startsWith('//') || checkedAssets.has(source)) continue;
      checkedAssets.add(source);
      try { await fs.access(path.join(dist, decodeURIComponent(source.split('?')[0]))); }
      catch { failures.push(`${route}: missing local asset ${source}`); }
    }
    const hash = createHash('sha256').update(root?.innerHTML || '').digest('hex');
    if (hashes.has(hash)) failures.push(`${route}: content duplicates ${hashes.get(hash)}`);
    hashes.set(hash, route);
    pages.push({ route, title, canonical, h1: root?.querySelector('h1')?.textContent, contentHash: hash });
    document.defaultView.close();
  } catch (error) { failures.push(`${route}: ${error.message}`); }
}
for (const [route, destination] of [['/higienizacao-coifas', '/limpeza-de-coifas']]) {
  try {
    if (routes.includes(route)) failures.push(`${route}: legacy alias must not appear in the sitemap`);
    const html = await fs.readFile(path.join(dist, route.slice(1), 'index.html'), 'utf8');
    const document = new JSDOM(html).window.document;
    const targetUrl = origin + destination;
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
    const refresh = [...document.querySelectorAll('meta[http-equiv]')].filter(meta => meta.getAttribute('http-equiv').toLowerCase() === 'refresh');
    if (document.querySelectorAll('link[rel="canonical"]').length !== 1 || canonical !== targetUrl) failures.push(`${route}: redirect canonical must point to ${destination}`);
    if (refresh.length !== 1 || refresh[0].content !== `0;url=${targetUrl}`) failures.push(`${route}: missing immediate redirect without JavaScript`);
    if (![...document.querySelectorAll('#root a[href]')].some(link => link.getAttribute('href') === targetUrl && link.textContent.trim())) failures.push(`${route}: missing accessible fallback link`);
    if (!document.querySelector('script[type="module"][src]')) failures.push(`${route}: missing interactive Vite entry`);
    redirects.push({ route, destination, canonical, refresh: refresh[0]?.content });
    document.defaultView.close();
  } catch (error) { failures.push(`${route}: ${error.message}`); }
}
const report = { publicRoutes: routes.length, verifiedAssets: checkedAssets.size, failures, pages, redirects };
await fs.writeFile(path.join(dist, 'prerender-report.json'), JSON.stringify(report, null, 2) + '\n');
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else console.log(`Prerender validation: ${routes.length} unique pages; metadata, canonicals, JSON-LD and ${checkedAssets.size} local assets checked; ${redirects.length} legacy redirect checked.`);
