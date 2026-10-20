import type { ComponentProps, PropsWithChildren } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter, useLocation } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import MarcasEquipamentos from "./MarcasEquipamentos";
import { equipmentBrands, equipmentCategories, getBrandEquipment } from "@/data/equipmentCatalog";
import { WEDO_CONTACT } from "@/lib/institutional";

const PAGE_URL = "https://wedocozinhas.com.br/marcas-e-equipamentos";

function LocationProbe() {
  const location = useLocation();
  return <span aria-label="Endereço atual">{location.pathname}{location.search}{location.hash}</span>;
}

function Router({ children }: PropsWithChildren) {
  return <HelmetProvider><MemoryRouter initialEntries={["/marcas-e-equipamentos"]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>{children}<LocationProbe /></MemoryRouter></HelmetProvider>;
}

function changeSearch(value: string) {
  fireEvent.change(screen.getByRole("searchbox", { name: "Buscar marca ou equipamento" }), { target: { value } });
}

function changeCategory(value: string) {
  fireEvent.change(screen.getByRole("combobox", { name: "Categoria" }), { target: { value } });
}

function collectionSchema() {
  const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')].map((node) => JSON.parse(node.textContent!));
  return schemas.find((schema) => schema["@type"] === "CollectionPage");
}

beforeEach(() => { vi.spyOn(window, "scrollTo").mockImplementation(() => {}); });
afterEach(() => { cleanup(); vi.restoreAllMocks(); });

describe("Catálogo de marcas e equipamentos", () => {
  it("entrega todas as marcas, equipamentos e schema no HTML inicial sem precisar clicar ou executar efeitos", () => {
    const previousCanUseDOM = HelmetProvider.canUseDOM;
    const context: NonNullable<ComponentProps<typeof HelmetProvider>["context"]> = {};
    vi.spyOn(console, "error").mockImplementation(() => {}); // MemoryRouter reports its browser-only layout effect during SSR in jsdom.
    let html = "";
    HelmetProvider.canUseDOM = false;
    try {
      html = renderToStaticMarkup(<HelmetProvider context={context}><MemoryRouter initialEntries={["/marcas-e-equipamentos"]}><MarcasEquipamentos /></MemoryRouter></HelmetProvider>);
    } finally { HelmetProvider.canUseDOM = previousCanUseDOM; }

    const parsed = new DOMParser().parseFromString(html, "text/html");
    expect(parsed.querySelectorAll("article")).toHaveLength(equipmentBrands.length);
    expect(parsed.querySelectorAll("h1")).toHaveLength(1);
    expect(parsed.querySelector("h1")?.textContent).toBe("Marcas e equipamentos que atendemos.");
    for (const brand of equipmentBrands) {
      const heading = parsed.getElementById(`marca-${brand.id}`)!;
      expect(heading.textContent).toBe(brand.name);
      const items = [...heading.closest("article")!.querySelectorAll("li")].map((node) => node.textContent);
      expect(items).toEqual(getBrandEquipment(brand).map((item) => item.label));
    }
    const head = new DOMParser().parseFromString(context.helmet!.script.toString(), "text/html");
    const schema = JSON.parse(head.querySelector('script[type="application/ld+json"]')!.textContent!);
    expect(schema["@type"]).toBe("CollectionPage");
    expect(schema.mainEntity.numberOfItems).toBe(23);
    expect(schema.mainEntity.itemListElement).toHaveLength(23);
    expect(context.helmet!.link.toString()).toContain(PAGE_URL);
    expect(html).not.toContain("src/pages/");
    expect(html).not.toContain("praticabr.com");
  });

  it("mostra o catálogo completo com categorias nativas e links para o atendimento apropriado", () => {
    const { container } = render(<MarcasEquipamentos />, { wrapper: Router });
    expect(screen.getAllByRole("article")).toHaveLength(23);
    expect(screen.getByRole("status")).toHaveTextContent("23 marcas encontradas");
    expect(screen.getByRole("status")).toHaveAttribute("aria-live", "polite");
    expect(screen.getByRole("combobox", { name: "Categoria" }).tagName).toBe("SELECT");
    expect(screen.getAllByRole("option").map((option) => (option as HTMLOptionElement).value)).toEqual(["", ...equipmentCategories.map((item) => item.id)]);
    expect(screen.getByRole("link", { name: "Ver assistência técnica Rational" })).toHaveAttribute("href", "/assistencia-tecnica-rational");
    expect(screen.getByRole("link", { name: "Consultar atendimento Selovac" })).toHaveAttribute("href", WEDO_CONTACT.channelsHref);
    expect(screen.getByRole("link", { name: "Falar com a equipe" })).toHaveAttribute("href", WEDO_CONTACT.channelsHref);
    expect(container.querySelector('a[href^="tel:"],a[href*="wa.me/"]')).not.toBeInTheDocument();
    expect(container.textContent).not.toMatch(/src\/pages|modelo 200|autorizad[ao]|credenciad[ao]/i);
  });

  it("encontra marcas com acentos, nomes alternativos e o singular de equipamentos", () => {
    render(<MarcasEquipamentos />, { wrapper: Router });
    changeSearch("  PRATICA  ");
    expect(screen.getAllByRole("article")).toHaveLength(1);
    expect(screen.getByRole("article", { name: "Prática" })).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("1 marca encontrada");
    changeSearch("Gpaniz");
    expect(screen.getAllByRole("article")).toHaveLength(1);
    expect(screen.getByRole("article", { name: "G.Paniz" })).toBeInTheDocument();
    changeSearch("fogão");
    expect(screen.getAllByRole("article").map((article) => within(article).getByRole("heading", { level: 2 }).textContent)).toEqual(["Cozil", "Macom", "Middleby", "Progás", "Tramontina", "Vulcan"]);
    expect(screen.getByLabelText("Endereço atual")).toHaveTextContent("/marcas-e-equipamentos");
    expect(screen.getByLabelText("Endereço atual").textContent).not.toMatch(/[?#]/);
  });

  it("combina categoria e busca e apresenta somente os tipos da categoria escolhida", () => {
    render(<MarcasEquipamentos />, { wrapper: Router });
    changeCategory("lavagem");
    expect(screen.getAllByRole("article")).toHaveLength(4);
    expect(screen.queryByRole("article", { name: "Rational" })).not.toBeInTheDocument();
    changeSearch("pratica");
    const article = screen.getByRole("article", { name: "Prática" });
    expect(screen.getAllByRole("article")).toHaveLength(1);
    expect(within(article).getAllByRole("listitem").map((item) => item.textContent)).toEqual(["Lavadoras de louças de abertura frontal"]);
    expect(within(article).queryByText("Fornos combinados")).not.toBeInTheDocument();
    changeCategory("refrigeracao");
    expect(within(screen.getByRole("article", { name: "Prática" })).getAllByRole("listitem").map((item) => item.textContent)).toEqual(["Abatedores de temperatura", "Ultracongeladores"]);
    expect(screen.getByLabelText("Endereço atual").textContent).toBe("/marcas-e-equipamentos");
  });

  it("explica o resultado vazio e restaura as 23 marcas ao limpar ambos os filtros", () => {
    render(<MarcasEquipamentos />, { wrapper: Router });
    changeSearch("Selovac");
    changeCategory("lavagem");
    expect(screen.queryAllByRole("article")).toHaveLength(0);
    expect(screen.getByRole("status")).toHaveTextContent("0 marcas encontradas");
    expect(screen.getByRole("heading", { name: "Nenhuma marca encontrada." })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Mostrar todas as marcas" }));
    expect(screen.getAllByRole("article")).toHaveLength(23);
    expect(screen.getByRole("searchbox")).toHaveValue("");
    expect(screen.getByRole("searchbox")).toHaveFocus();
    expect(screen.getByRole("combobox")).toHaveValue("");
    expect(screen.getByRole("button", { name: "Limpar filtros" })).toBeDisabled();
    changeSearch("liquidificador");
    expect(screen.getAllByRole("article")).toHaveLength(1);
    expect(screen.getByRole("article", { name: "Skymsen" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Limpar filtros" }));
    expect(screen.getAllByRole("article")).toHaveLength(23);
  });

  it("mantém canonical fixo e JSON-LD coerente com marcas e tipos visíveis ao filtrar e limpar", async () => {
    render(<MarcasEquipamentos />, { wrapper: Router });
    await waitFor(() => expect(collectionSchema()?.mainEntity.numberOfItems).toBe(23));
    const initial = collectionSchema();
    expect(initial.url).toBe(PAGE_URL);
    expect(initial.mainEntity["@type"]).toBe("ItemList");
    expect(initial.mainEntity.itemListElement.map((entry: { item: { brand: { name: string } } }) => entry.item.brand.name)).toEqual(equipmentBrands.map((brand) => brand.name));
    expect(JSON.stringify(initial)).not.toMatch(/"@type":"(?:Product|Offer)"|src\/pages|manufacturer|autorizad|credenciad/i);
    changeSearch("seladora");
    changeCategory("vacuo");
    await waitFor(() => expect(collectionSchema()?.mainEntity.numberOfItems).toBe(1));
    const schema = collectionSchema();
    expect(schema.mainEntity.itemListElement).toHaveLength(1);
    expect(schema.mainEntity.itemListElement[0].position).toBe(1);
    expect(schema.mainEntity.itemListElement[0].item).toMatchObject({
      "@type": "Service", url: `${PAGE_URL}#marca-selovac`, brand: { "@type": "Brand", name: "Selovac" }, serviceType: ["Seladoras a vácuo de câmara"],
    });
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute("href", PAGE_URL);
    expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute("content", "index, follow");
    expect(document.title).toBe("Marcas e equipamentos atendidos em Goiás e DF | WeDo");
    fireEvent.click(screen.getByRole("button", { name: "Limpar filtros" }));
    await waitFor(() => expect(collectionSchema()?.mainEntity.numberOfItems).toBe(23));
  });
});
