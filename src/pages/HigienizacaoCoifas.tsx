import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import { useCTASettings } from "@/hooks/useSiteSettings";


const servicos = [
  "Limpeza técnica de coifas",
  "Limpeza de dutos de exaustão",
  "Limpeza de filtros",
  "Laudo técnico rastreável",
  "Conformidade RDC 216 fiscalização",
  "Registro fotográfico completo",
];

export default function HigienizacaoCoifas() {
  const { ctaUrl, ctaText } = useCTASettings();
  return (
    <Layout>
      <Helmet>
        <title>Higienização de Coifas | RDC 216 | Goiás e DF | WeDo</title>
        <meta name="description" content="Limpeza técnica de coifas e dutos conforme RDC 216. Compliance total com laudos técnicos rastreáveis para fiscalização. Goiás e DF." />
        <link rel="canonical" href="https://wedocozinhas.com.br/higienizacao-coifas" />
      </Helmet>

      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding">
        <div className="container-wedo">
          <div className="max-w-4xl">
            <nav className="text-sm text-secondary-foreground/60 mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span>Higienização de Coifas</span>
            </nav>
            <h1 className="title-hero text-primary-foreground mb-6">
              Higienização de Coifas
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-3xl">
              Limpeza técnica de coifas e dutos conforme RDC 216. Compliance total com laudos técnicos rastreáveis para fiscalização.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section-padding">
        <div className="container-wedo">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="title-section mb-6">Serviços de Higienização</h2>
              <p className="text-muted-foreground mb-8">
                Garantimos a conformidade da sua cozinha com as normas sanitárias vigentes, documentando todo o processo com laudos técnicos.
              </p>
              <ul className="space-y-4">
                {servicos.map((servico) => (
                  <li key={servico} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{servico}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4">Compliance Total</h3>
              <p className="text-muted-foreground">
                Conformidade com RDC 216 e demais normas sanitárias. Laudos técnicos rastreáveis para auditorias e fiscalização.
              </p>
            </div>
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
