import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Package, Truck, ShieldCheck } from "lucide-react";
import { useCTASettings } from "@/hooks/useSiteSettings";
import FAQSection from "@/components/FAQSection";
import ServiceSchema from "@/components/ServiceSchema";

const marcas = [
  "Rational", "Hobart", "Robot Coupe", "Vulcan", "Unox", "Cozil",
  "Irinox", "Prática", "Tramontina", "Skymsen", "Middleby",
];

const categorias = [
  "Peças para fornos combinados",
  "Peças para câmaras frias",
  "Peças para lavadoras industriais",
  "Peças para processadores de alimentos",
  "Sensores, válvulas e SSRs",
  "Vedações e borrachas de porta",
  "Placas eletrônicas e controladores",
  "Filtros e kits de limpeza",
];

const cidades = ["Goiânia", "Anápolis", "Brasília", "Distrito Federal"];

const faqs = [
  {
    q: "Vocês têm peças originais Rational?",
    a: "Sim, mantemos estoque permanente de peças originais Rational, incluindo vedações, sensores B1/B2/B4/P1, válvulas solenoides, SSRs, filtros e kits de limpeza Care/Detergente.",
  },
  {
    q: "Qual o prazo de entrega das peças?",
    a: "Para itens em estoque, a entrega é imediata em Goiânia, Anápolis e Brasília. Para peças sob encomenda, o prazo varia conforme a marca e o componente.",
  },
  {
    q: "Atendem em Brasília e Distrito Federal?",
    a: "Sim, fornecemos peças originais para todo o Distrito Federal, incluindo Plano Piloto, regiões administrativas e Entorno do DF.",
  },
  {
    q: "As peças têm garantia?",
    a: "Sim. As peças originais possuem garantia do próprio fabricante. Quando aplicada por nossa equipe técnica, agregamos garantia de 90 dias sobre o serviço de instalação.",
  },
];

export default function PecasOriginais() {
  const { ctaUrl, ctaText } = useCTASettings();
  return (
    <Layout>
      <Helmet>
        <title>Peças Originais para Cozinhas Profissionais | Rational, Hobart e mais | WeDo</title>
        <meta
          name="description"
          content="Peças originais para Rational, Hobart, Vulcan, Robot Coupe e mais. Estoque próprio com entrega rápida em Goiás e DF. Forno combinado, câmara fria, lavadora industrial."
        />
        <link rel="canonical" href="https://wedocozinhas.com.br/pecas-originais" />
      </Helmet>

      <ServiceSchema
        serviceType="Fornecimento de Peças Originais para Equipamentos de Cozinha Profissional"
        description="Estoque próprio de peças originais para equipamentos de cozinha profissional Rational, Hobart, Robot Coupe, Vulcan, Unox, Cozil e outras marcas, com entrega rápida em Goiânia, Anápolis, Brasília e Distrito Federal."
        slug="pecas-originais"
      />

      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding">
        <div className="container-wedo">
          <div className="max-w-4xl">
            <nav className="text-sm text-secondary-foreground/60 mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span>Peças Originais</span>
            </nav>
            <h1 className="title-hero text-primary-foreground mb-6">
              Peças Originais para Equipamentos de Cozinha Profissional | Goiás e DF
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-3xl mb-8">
              Estoque próprio de peças originais para Rational, Hobart, Robot Coupe, Vulcan, Unox, Cozil e outras marcas. Entrega rápida em Goiânia, Anápolis, Brasília e Distrito Federal para fornos combinados, câmaras frias, lavadoras industriais e processadores.
            </p>
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              Cotar Peças
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Marcas */}
      <section className="section-padding">
        <div className="container-wedo">
          <h2 className="title-section text-center mb-4">Peças Originais por Marca</h2>
          <p className="subtitle-section text-center mx-auto mb-10">
            Trabalhamos com fornecedores oficiais para garantir originalidade, desempenho e durabilidade.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {marcas.map((m) => (
              <span key={m} className="badge-wedo">{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="section-padding bg-muted">
        <div className="container-wedo">
          <h2 className="title-section text-center mb-12">Categorias de Peças</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {categorias.map((c) => (
              <div key={c} className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium text-sm">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-padding">
        <div className="container-wedo">
          <h2 className="title-section text-center mb-12">Diferenciais do Estoque WeDo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Estoque Próprio</h3>
              <p className="text-muted-foreground text-sm">
                Peças críticas em estoque permanente, evitando paradas longas na sua operação.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Entrega Rápida</h3>
              <p className="text-muted-foreground text-sm">
                Logística estruturada para Goiânia, Anápolis, Brasília e demais cidades de Goiás e DF.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Originalidade Garantida</h3>
              <p className="text-muted-foreground text-sm">
                Apenas peças originais de fábrica, com rastreabilidade completa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cidades */}
      <section className="section-padding bg-muted">
        <div className="container-wedo text-center">
          <h2 className="title-section mb-6">Entrega em Goiás e DF</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {cidades.map((c) => (
              <span key={c} className="badge-wedo">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title="Perguntas Frequentes sobre Peças Originais"
        faqs={faqs}
      />

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wedo text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Solicite uma Cotação de Peças
          </h2>
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            {ctaText}
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
