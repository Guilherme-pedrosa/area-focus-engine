import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useCTASettings } from "@/hooks/useSiteSettings";


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
        <link rel="canonical" href="https://wedocorp.com/cozinhas-profissionais" />
      </Helmet>

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
            Acessar Atendimento
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
