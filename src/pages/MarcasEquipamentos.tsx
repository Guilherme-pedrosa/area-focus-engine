import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  equipmentBrands,
  equipmentCategories,
  getBrandCategories,
  getBrandEquipment,
  searchEquipmentBrands,
  type EquipmentCategoryId,
} from "@/data/equipmentCatalog";
import { WEDO_CONTACT } from "@/lib/institutional";
import "@/components/institutional/catalog.css";

const PAGE_URL = "https://wedocozinhas.com.br/marcas-e-equipamentos";
const PAGE_TITLE = "Marcas e equipamentos atendidos em Goiás e DF | WeDo";
const PAGE_DESCRIPTION = "Conheça as marcas e os tipos de equipamentos atendidos pela WeDo em Goiás e no Distrito Federal: cocção, refrigeração, lavagem, preparo e seladoras a vácuo.";

export default function MarcasEquipamentos() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<EquipmentCategoryId | "">("");
  const searchRef = useRef<HTMLInputElement>(null);
  const brands = searchEquipmentBrands(query, category || undefined);
  const hasFilters = query.length > 0 || category !== "";
  const equipmentFor = (brand: (typeof equipmentBrands)[number]) => getBrandEquipment(brand).filter((item) => !category || item.category === category);

  function resetFilters() {
    setQuery("");
    setCategory("");
    searchRef.current?.focus();
  }

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${PAGE_URL}#pagina`,
    url: PAGE_URL,
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    inLanguage: "pt-BR",
    mainEntity: {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#marcas`,
      name: "Marcas e equipamentos atendidos pela WeDo",
      numberOfItems: brands.length,
      itemListElement: brands.map((brand, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          "@id": `${PAGE_URL}#marca-${brand.id}`,
          url: `${PAGE_URL}#marca-${brand.id}`,
          name: `Assistência técnica para equipamentos ${brand.name}`,
          brand: { "@type": "Brand", name: brand.name },
          serviceType: equipmentFor(brand).map((item) => item.label),
          provider: { "@type": "Organization", name: "WeDo", url: "https://wedocozinhas.com.br" },
          areaServed: [{ "@type": "State", name: "Goiás" }, { "@type": "State", name: "Distrito Federal" }],
        },
      })),
    },
  };

  return (
    <Layout variant="institutional">
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
      </Helmet>

      <section className="wd-catalog-hero">
        <div className="wd-container">
          <nav className="wd-catalog-breadcrumb" aria-label="Caminho da página">
            <Link to="/">Início</Link><span aria-hidden="true">/</span><span aria-current="page">Marcas e equipamentos</span>
          </nav>
          <p className="wd-kicker">Assistência técnica multimarcas</p>
          <h1>Marcas e equipamentos que atendemos.</h1>
          <p className="wd-catalog-lead">Consulte as marcas e os tipos de equipamentos para os quais prestamos assistência técnica em Goiás e no Distrito Federal.</p>
        </div>
      </section>

      <section className="wd-catalog-directory wd-container" aria-label="Catálogo de marcas e equipamentos">
        <form className="wd-catalog-filters" role="search" aria-label="Filtrar marcas e equipamentos" onSubmit={(event) => event.preventDefault()}>
          <div className="wd-catalog-field wd-catalog-search-field">
            <label htmlFor="wd-catalog-search">Buscar marca ou equipamento</label>
            <input ref={searchRef} id="wd-catalog-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex.: Rational, fogão ou seladora" autoComplete="off" />
          </div>
          <div className="wd-catalog-field">
            <label htmlFor="wd-catalog-category">Categoria</label>
            <select id="wd-catalog-category" value={category} onChange={(event) => setCategory(event.target.value as EquipmentCategoryId | "")}>
              <option value="">Todas as categorias</option>
              {equipmentCategories.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
            </select>
          </div>
          <button className="wd-catalog-reset" type="button" onClick={resetFilters} disabled={!hasFilters}>Limpar filtros</button>
        </form>

        <p className="wd-catalog-count" role="status" aria-live="polite" aria-atomic="true">
          {brands.length === 1 ? "1 marca encontrada" : `${brands.length} marcas encontradas`}
        </p>

        {brands.length > 0 ? <div className="wd-catalog-grid">
          {brands.map((brand) => <article className="wd-catalog-brand" key={brand.id} aria-labelledby={`marca-${brand.id}`}>
            <div className="wd-catalog-brand-heading">
              <h2 id={`marca-${brand.id}`}>{brand.name}</h2>
              <p className="wd-catalog-brand-categories">{equipmentCategories.filter((item) => getBrandCategories(brand).includes(item.id) && (!category || item.id === category)).map((item) => item.label).join(" · ")}</p>
              {brand.pageHref ? <Link className="wd-catalog-brand-link" to={brand.pageHref} aria-label={`Ver assistência técnica ${brand.name}`}>Assistência técnica <span aria-hidden="true">↗</span></Link>
                : <a className="wd-catalog-brand-link" href={WEDO_CONTACT.channelsHref} target="_blank" rel="noopener noreferrer" aria-label={`Consultar atendimento ${brand.name}`}>Consultar atendimento <span aria-hidden="true">↗</span></a>}
            </div>
            <ul aria-label={`Equipamentos ${brand.name}`}>
              {equipmentFor(brand).map((item) => <li key={item.id}>{item.label}</li>)}
            </ul>
          </article>)}
        </div> : <div className="wd-catalog-empty">
          <h2>Nenhuma marca encontrada.</h2>
          <p>Tente outra marca ou equipamento, ou remova os filtros.</p>
          <button className="wd-button wd-button-outline" type="button" onClick={resetFilters}>Mostrar todas as marcas</button>
        </div>}
      </section>

      <section className="wd-catalog-contact">
        <div className="wd-container wd-catalog-contact-inner">
          <div><h2>Vamos identificar o seu equipamento.</h2><p>Envie a marca, o modelo e uma foto da etiqueta. Nossa equipe orienta o atendimento e a avaliação do equipamento.</p></div>
          <a className="wd-button" href={WEDO_CONTACT.channelsHref} target="_blank" rel="noopener noreferrer">Falar com a equipe <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </Layout>
  );
}
