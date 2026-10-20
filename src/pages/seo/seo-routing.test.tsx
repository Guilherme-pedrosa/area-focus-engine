import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { PropsWithChildren } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "@/App";
import SeoSymptomTemplate from "./SeoSymptomTemplate";
import { getPageBySlug, seoSymptomsPages } from "@/data/seoSymptomsData";
import { cidadesCoifas } from "@/data/limpezaCoifasCidades";
import { WEDO_CONTACT } from "@/lib/institutional";

// Exercise the real App route table and page metadata, without CMS/network or shell UI.
vi.mock("@/components/Layout", () => ({ default: ({ children }: PropsWithChildren) => <main>{children}</main> }));
vi.mock("@/components/PageTracker", () => ({ default: () => null }));
vi.mock("@/pages/AdminLogin", () => ({ default: () => <h1>Acesso administrativo</h1> }));
vi.mock("@/hooks/useSiteSettings", () => ({
  SiteSettingsProvider: ({ children }: PropsWithChildren) => children,
  useSiteSettings: () => ({ settings: {}, loading: false, get: (_: string, fallback = "") => fallback }),
  useCTASettings: () => ({ ctaUrl: "https://contatoswedo.lovable.app", ctaText: "Canais de atendimento" }),
}));

afterEach(() => {
  cleanup();
  window.history.replaceState(null, "", "/");
  vi.restoreAllMocks();
});

const appSource = readFileSync(resolve(process.cwd(), "src/App.tsx"), "utf8");
const sitemap = readFileSync(resolve(process.cwd(), "public/sitemap.xml"), "utf8");
const robots = readFileSync(resolve(process.cwd(), "public/robots.txt"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

describe("Preservação das URLs indexáveis", () => {
  it("preserva 160 URLs únicas no domínio e cobre cada uma com uma rota real", () => {
    const literalPaths = [...appSource.matchAll(/<Route\s+path="([^"]+)"/g)].map((match) => match[1]);
    const knownPaths = new Set([...literalPaths, ...seoSymptomsPages.map((page) => `/${page.slug}`)]);
    expect(sitemapUrls).toHaveLength(160);
    expect(new Set(sitemapUrls).size).toBe(160);
    for (const value of sitemapUrls) {
      const url = new URL(value);
      expect(url.origin).toBe("https://wedocozinhas.com.br");
      expect(knownPaths.has(url.pathname), `rota ausente: ${url.pathname}`).toBe(true);
      expect(url.pathname).not.toMatch(/^\/admin(?:\/|$)/);
      expect(url.pathname).not.toBe("/higienizacao-coifas");
    }
    expect(new Set(seoSymptomsPages.map((page) => page.slug)).size).toBe(seoSymptomsPages.length);
    expect(seoSymptomsPages).toHaveLength(119);
  });

  it("permite rastreamento público e anuncia o sitemap de produção", () => {
    expect(robots).toContain("User-agent: *");
    expect(robots).toContain("Allow: /");
    expect(robots).not.toMatch(/^Disallow:\s*\/\s*$/m);
    expect(robots).toContain("Sitemap: https://wedocozinhas.com.br/sitemap.xml");
  });
});

describe("Rotas SEO de sintomas", () => {
  it.each(seoSymptomsPages)("abre /$slug sem redirecionar a 404 e mantém seus metadados", async (page) => {
    window.history.replaceState(null, "", `/${page.slug}`);
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: page.h1 })).toBeInTheDocument();
    expect(window.location.pathname).toBe(`/${page.slug}`);
    await waitFor(() => {
      expect(document.title).toBe(page.title);
      expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute("href", `https://wedocozinhas.com.br/${page.slug}`);
      expect(document.querySelector('meta[name="description"]')).toHaveAttribute("content", page.metaDescription);
      expect(document.querySelector('meta[name="robots"]')).toHaveAttribute("content", "index, follow");
    });
    const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')].map((script) => JSON.parse(script.textContent!));
    const schema = schemas.find((value) => value.url === `https://wedocozinhas.com.br/${page.slug}`);
    expect(schema).toBeDefined();
    expect(schema.telephone).toBeUndefined();
    expect(schema.contactPoint.url).toBe("https://contatoswedo.lovable.app/");
  });

  it("continua aceitando um parâmetro slug em rotas dinâmicas", () => {
    const page = seoSymptomsPages[0];
    render(<HelmetProvider><MemoryRouter initialEntries={[`/${page.slug}`]}><Routes><Route path="/:slug" element={<SeoSymptomTemplate />} /></Routes></MemoryRouter></HelmetProvider>);
    expect(screen.getByRole("heading", { level: 1, name: page.h1 })).toBeInTheDocument();
    expect(getPageBySlug("slug-que-nao-existe")).toBeUndefined();
  });
});

describe("Rotas sem indexação", () => {
  it("marca páginas inexistentes como noindex", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    window.history.replaceState(null, "", "/pagina-que-nao-existe");
    render(<App />);
    expect(screen.getByRole("heading", { name: "404" })).toBeInTheDocument();
    await waitFor(() => expect(document.querySelector('meta[name="robots"]')).toHaveAttribute("content", "noindex, follow"));
  });

  it("marca o acesso administrativo como noindex sem bloquear rastreamento público", async () => {
    window.history.replaceState(null, "", "/admin/login");
    render(<App />);
    expect(screen.getByRole("heading", { name: "Acesso administrativo" })).toBeInTheDocument();
    await waitFor(() => expect(document.querySelector('meta[name="robots"]')).toHaveAttribute("content", "noindex, nofollow"));
  });
});

describe("Contato nas páginas locais de coifas", () => {
  it.each(cidadesCoifas)("usa os canais da equipe no schema de /$slug", async (page) => {
    window.history.replaceState(null, "", `/${page.slug}`);
    render(<App />);
    await waitFor(() => {
      const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')].map((script) => JSON.parse(script.textContent!));
      const provider = schemas.find((schema) => schema["@type"] === "Service" && schema.provider)?.provider;
      expect(provider).toBeDefined();
      expect(provider.telephone).toBeUndefined();
      expect(provider.contactPoint.url).toBe(WEDO_CONTACT.channelsHref);
      expect(document.head.textContent).not.toMatch(/99377[-\s]?5711|99446[-\s]?6458/);
    });
  });
});

describe("Alias histórico de coifas", () => {
  it("preserva o endereço antigo e redireciona ao mesmo canonical de limpeza de coifas", async () => {
    window.history.replaceState(null, "", "/higienizacao-coifas");
    vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    render(<App />);
    await waitFor(() => expect(window.location.pathname).toBe("/limpeza-de-coifas"));
    expect(screen.getByRole("heading", { level: 1, name: "Limpeza de coifas e sistemas de exaustão." })).toBeInTheDocument();
    await waitFor(() => expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://wedocozinhas.com.br/limpeza-de-coifas"));
  });
});

describe("Canonical de marca", () => {
  it("aponta a assistência Tramontina ao domínio próprio", async () => {
    window.history.replaceState(null, "", "/assistencia-tecnica-tramontina");
    render(<App />);
    await waitFor(() => expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://wedocozinhas.com.br/assistencia-tecnica-tramontina"));
  });
});
