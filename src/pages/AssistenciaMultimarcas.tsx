import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Wrench, Shield, Clock } from "lucide-react";
import { useCTASettings } from "@/hooks/useSiteSettings";
import FAQSection from "@/components/FAQSection";
import ServiceSchema from "@/components/ServiceSchema";

const marcas = [
  "Hobart", "Vulcan", "Robot Coupe", "Irinox", "Prática Klimaquip",
  "Tramontina", "Macon", "Cozil", "Unox", "Middleby", "Skymsen",
];

const equipamentos = [
  "Fornos combinados",
  "Lavadoras industriais",
  "Processadores de alimentos",
  "Cortadores e fatiadores",
  "Câmaras frias e ultracongeladores",
  "Fogões e fritadeiras",
  "Batedeiras e amassadeiras",
  "Balcões refrigerados",
];

const cidades = ["Goiânia", "Anápolis", "Brasília", "Distrito Federal"];

const faqs = [
  {
    q: "Quais marcas de equipamentos vocês atendem?",
    a: "Atendemos as principais marcas do mercado: Hobart, Vulcan, Robot Coupe, Irinox, Prática Klimaquip, Tramontina, Macon, Cozil, Unox, Middleby e Skymsen. Nossos técnicos têm experiência multimarcas comprovada.",
  },
  {
    q: "Vocês atendem em Goiânia, Anápolis e Brasília?",
    a: "Sim. Atendemos toda a região de Goiás e Distrito Federal, incluindo Goiânia, Anápolis, Brasília e Entorno do DF, com equipe técnica própria.",
  },
  {
    q: "Usam peças originais nas manutenções?",
    a: "Sim, trabalhamos exclusivamente com peças originais dos fabricantes para garantir desempenho, segurança e a vida útil dos equipamentos.",
  },
  {
    q: "Fazem manutenção preventiva e corretiva?",
    a: "Atendemos os dois modelos: manutenção corretiva pontual quando o equipamento apresenta falha, e contratos de manutenção preventiva (PCM) com checklists técnicos por categoria de equipamento.",
  },
];

export default function AssistenciaMultimarcas() {
  const { ctaUrl, ctaText } = useCTASettings();
  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Multimarcas | Hobart, Vulcan, Robot Coupe e mais | Goiás e DF</title>
        <meta
          name="description"
          content="Assistência técnica para Hobart, Vulcan, Robot Coupe, Irinox, Unox, Middleby e mais em Goiás e DF. Técnicos certificados, peças originais e atendimento urgente."
        />
        <link rel="canonical" href="https://wedocozinhas.com.br/assistencia-multimarcas" />
      </Helmet>

      <ServiceSchema
        serviceType="Assistência Técnica Multimarcas para Cozinhas Profissionais"
        description="Manutenção e assistência técnica multimarcas para equipamentos de cozinha profissional: Hobart, Vulcan, Robot Coupe, Irinox, Prática, Tramontina, Macon, Cozil, Unox, Middleby e Skymsen em Goiás e Distrito Federal."
        slug="assistencia-multimarcas"
      />

      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding">
        <div className="container-wedo">
          <div className="max-w-4xl">
            <nav className="text-sm text-secondary-foreground/60 mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span>Assistência Multimarcas</span>
            </nav>
            <h1 className="title-hero text-primary-foreground mb-6">
              Assistência Técnica Multimarcas em Goiás e DF
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-3xl mb-8">
              Manutenção preventiva e corretiva para equipamentos de cozinha profissional das principais marcas do mercado. Um único parceiro técnico para toda a sua operação em Goiânia, Anápolis, Brasília e Distrito Federal.
            </p>
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              Solicitar Atendimento
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Marcas */}
      <section className="section-padding">
        <div className="container-wedo">
          <h2 className="title-section text-center mb-4">Marcas Atendidas</h2>
          <p className="subtitle-section text-center mx-auto mb-10">
            Técnicos com experiência comprovada nas principais marcas de equipamentos para cozinhas profissionais.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {marcas.map((m) => (
              <span key={m} className="badge-wedo">{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Equipamentos */}
      <section className="section-padding bg-muted">
        <div className="container-wedo">
          <h2 className="title-section text-center mb-12">Equipamentos Atendidos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {equipamentos.map((eq) => (
              <div key={eq} className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium">{eq}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-padding">
        <div className="container-wedo">
          <h2 className="title-section text-center mb-12">Por que escolher a WeDo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Técnicos Certificados</h3>
              <p className="text-muted-foreground text-sm">
                Equipe treinada nas principais marcas, com certificações em NR10, NR12 e NR13.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Peças Originais</h3>
              <p className="text-muted-foreground text-sm">
                Estoque próprio de peças originais para entrega rápida em Goiás e DF.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Atendimento Ágil</h3>
              <p className="text-muted-foreground text-sm">
                Diagnóstico técnico e atendimento programado em Goiânia, Anápolis, Brasília e DF.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cidades */}
      <section className="section-padding bg-muted">
        <div className="container-wedo text-center">
          <h2 className="title-section mb-6">Onde Atendemos</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {cidades.map((c) => (
              <span key={c} className="badge-wedo">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title="Perguntas Frequentes sobre Assistência Multimarcas"
        faqs={faqs}
      />

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wedo text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Solicite um Orçamento Multimarcas
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
