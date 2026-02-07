import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Award, CheckCircle } from "lucide-react";

const LINKTREE_URL = "https://linktr.ee/wedocorp";

const equipamentos = [
  "iCombi Pro (todas as versões)",
  "iCombi Classic",
  "iVario Pro",
  "Sistemas de cocção combinados",
  "SelfCookingCenter",
];

const servicos = [
  "Manutenção preventiva programada",
  "Calibração de sensores",
  "Atualização de software",
  "Troca de componentes originais",
  "Limpeza técnica profunda",
  "Diagnóstico completo",
  "Treinamento operacional",
];

export default function AssistenciaTecnicaRational() {
  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Rational | Parceiro Autorizado | Goiás e DF | WeDo</title>
        <meta name="description" content="Assistência técnica autorizada Rational em Goiás e DF. Manutenção iCombi Pro, iCombi Classic, iVario. Técnicos certificados pela fábrica." />
        <link rel="canonical" href="https://wedocorp.com/assistencia-tecnica-rational" />
      </Helmet>

      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding">
        <div className="container-wedo">
          <div className="max-w-4xl">
            <nav className="text-sm text-secondary-foreground/60 mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span>Assistência Técnica Rational</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Parceiro Autorizado
            </div>
            <h1 className="title-hero text-primary-foreground mb-6">
              Assistência Técnica Rational
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-3xl">
              Parceiro autorizado Rational em Goiás e Distrito Federal. Técnicos certificados pela fábrica, peças originais e expertise completa em toda linha de equipamentos.
            </p>
          </div>
        </div>
      </section>

      {/* Equipamentos */}
      <section className="section-padding">
        <div className="container-wedo">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="title-section mb-6">Equipamentos Atendidos</h2>
              <p className="text-muted-foreground mb-8">
                Manutenção especializada em toda a linha de equipamentos Rational, com técnicos treinados diretamente pela fábrica.
              </p>
              <ul className="space-y-4">
                {equipamentos.map((eq) => (
                  <li key={eq} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{eq}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl mb-6">Serviços Especializados</h3>
              <ul className="space-y-4">
                {servicos.map((servico) => (
                  <li key={servico} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{servico}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wedo text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Precisa de Assistência Técnica Rational?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Entre em contato com nossa equipe especializada. Atendemos todo o estado de Goiás e Distrito Federal.
          </p>
          <a
            href={LINKTREE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Fale Conosco
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
