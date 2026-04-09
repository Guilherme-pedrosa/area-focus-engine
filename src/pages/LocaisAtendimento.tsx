import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, CheckCircle } from "lucide-react";


const servicos = [
  "Manutenção de Câmaras Frias",
  "Assistência Técnica Rational (Parceiro Autorizado)",
  "Manutenção Multimarcas",
  "Contratos PCM",
  "Higienização de Coifas",
  "Venda e Locação de Equipamentos",
  "Peças Originais",
  "Treinamento Operacional",
  "Laudos Técnicos",
];

export default function LocaisAtendimento() {
  return (
    <Layout>
      <Helmet>
        <title>Locais de Atendimento WeDo | Goiás e Distrito Federal</title>
        <meta name="description" content="Atendemos todo o estado de Goiás e Distrito Federal. Manutenção de câmaras frias e equipamentos industriais com equipe especializada." />
        <link rel="canonical" href="https://wedocorp.com/locais-atendimento" />
      </Helmet>

      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding">
        <div className="container-wedo">
          <div className="max-w-4xl">
            <nav className="text-sm text-secondary-foreground/60 mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span>Locais de Atendimento</span>
            </nav>
            <h1 className="title-hero text-primary-foreground mb-6">
              Locais de Atendimento WeDo
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-3xl">
              Manutenção especializada em refrigeração industrial e equipamentos profissionais em Goiás e Distrito Federal.
            </p>
          </div>
        </div>
      </section>

      {/* Áreas de Atendimento */}
      <section className="section-padding">
        <div className="container-wedo">
          <h2 className="title-section text-center mb-12">Áreas de Atendimento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Goiás */}
            <div className="card-wedo-highlight text-center p-10">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4">Todo o Estado de Goiás</h3>
              <p className="text-muted-foreground leading-relaxed">
                Atendemos todas as cidades do estado de Goiás com equipe técnica especializada, frota própria e estoque estratégico de peças.
              </p>
            </div>

            {/* DF */}
            <div className="card-wedo-highlight text-center p-10">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4">Todo o Distrito Federal</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cobertura completa em todas as regiões administrativas do Distrito Federal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Disponíveis */}
      <section className="section-padding bg-muted">
        <div className="container-wedo">
          <h2 className="title-section text-center mb-4">Tipos de Serviço Disponíveis</h2>
          <p className="subtitle-section text-center mx-auto mb-12">
            Em todas as localidades atendidas
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {servicos.map((servico) => (
              <div key={servico} className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium">{servico}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wedo text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Entre em Contato
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Nossa equipe está pronta para atender sua empresa em Goiás e Distrito Federal.
          </p>
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
