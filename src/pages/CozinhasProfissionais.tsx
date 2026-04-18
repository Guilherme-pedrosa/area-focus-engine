import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useCTASettings } from "@/hooks/useSiteSettings";
import FAQSection from "@/components/FAQSection";
import ServiceSchema from "@/components/ServiceSchema";

const faqs = [
  {
    q: "Quais equipamentos de cozinha profissional vocês mantêm?",
    a: "Atendemos toda a linha: fornos combinados, lavadoras de louça, processadores, cortadores, chapas, fritadeiras, fogões profissionais, refrigeradores, freezers e balcões refrigerados — multimarcas.",
  },
  {
    q: "Atendem urgência com equipamento parado?",
    a: "Sim, fazemos atendimento programado prioritário para equipamentos parados, com diagnóstico técnico e estoque próprio de peças originais para reduzir o tempo de inatividade.",
  },
  {
    q: "Atendem restaurantes, hospitais e indústrias?",
    a: "Sim. Atendemos restaurantes, redes de food service, hotéis, supermercados, frigoríficos, hospitais e indústrias alimentícias em Goiás e Distrito Federal.",
  },
  {
    q: "Qual a área de cobertura?",
    a: "Atendemos Goiânia, Anápolis, Aparecida de Goiânia, Brasília, Entorno do DF e demais cidades de Goiás com equipe técnica própria.",
  },
];

const marcas = [
  "Rational", "Hobart", "Vulcan", "Robot Coupe", "Irinox", "Prática",
  "Tramontina", "Macon", "Hoshizaki", "Cozil", "Fornoflex", "Middleby", "Metalfrio"
];

const equipamentos = [
  "Fornos combinados",
  "Lavadoras de louça",
  "Processadores de alimentos",
  "Cortadores e fatiadores",
  "Chapas e fritadeiras",
  "Fogões profissionais",
  "Refrigeradores e freezers",
  "Balcões refrigerados",
];

export default function CozinhasProfissionais() {
  const { ctaUrl, ctaText } = useCTASettings();
  return (
    <Layout>
      <Helmet>
        <title>Cozinhas Profissionais | Manutenção Multimarcas | WeDo</title>
        <meta name="description" content="Manutenção de equipamentos de cozinha profissional multimarcas. Hobart, Vulcan, Robot Coupe, Irinox e mais. Goiás e DF." />
        <link rel="canonical" href="https://wedocozinhas.com.br/cozinhas-profissionais" />
      </Helmet>

      <ServiceSchema
        serviceType="Manutenção de Cozinhas Profissionais Multimarcas"
        description="Manutenção preventiva e corretiva de equipamentos de cozinha profissional multimarcas para restaurantes, hotéis, hospitais e indústrias em Goiás e Distrito Federal."
        slug="cozinhas-profissionais"
      />

      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding">
        <div className="container-wedo">
          <div className="max-w-4xl">
            <nav className="text-sm text-secondary-foreground/60 mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span>Cozinhas Profissionais</span>
            </nav>
            <h1 className="title-hero text-primary-foreground mb-6">
              Cozinhas Profissionais — Manutenção Multimarcas
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-3xl">
              Expertise técnica em todas as principais marcas de equipamentos para cozinhas profissionais. Um único parceiro para toda sua operação.
            </p>
          </div>
        </div>
      </section>

      {/* Marcas */}
      <section className="section-padding">
        <div className="container-wedo">
          <h2 className="title-section text-center mb-8">Marcas Atendidas</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-12">
            {marcas.map((marca) => (
              <span key={marca} className="badge-wedo">{marca}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Equipamentos */}
      <section className="section-padding bg-muted">
        <div className="container-wedo">
          <h2 className="title-section text-center mb-12">Equipamentos Atendidos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {equipamentos.map((eq) => (
              <div key={eq} className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium">{eq}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title="Perguntas Frequentes sobre Cozinhas Profissionais"
        faqs={faqs}
        className="bg-background"
      />

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wedo text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Solicite um Orçamento
          </h2>
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            {ctaText}
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
