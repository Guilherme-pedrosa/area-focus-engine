import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, TrendingDown, Zap, Clock } from "lucide-react";

const LINKTREE_URL = "https://linktr.ee/wedocorp";

const planos = [
  {
    nome: "PCM Refrigeração Básico",
    items: ["Visitas trimestrais", "Inspeção visual e funcional", "Limpeza básica de condensador", "Relatório simplificado"],
    ideal: "Ideal para: pequenas operações com 1-2 câmaras",
  },
  {
    nome: "PCM Refrigeração Standard",
    items: ["Visitas bimestrais", "Inspeção técnica completa", "Limpeza especializada (condensador + evaporador)", "Calibrações inclusas", "Relatórios detalhados"],
    ideal: "Ideal para: restaurantes, hotéis, supermercados",
    destaque: true,
  },
  {
    nome: "PCM Refrigeração Premium",
    items: ["Visitas mensais", "Inspeção técnica avançada", "Todas as limpezas inclusas", "Peças preventivas inclusas", "Gestor técnico dedicado"],
    ideal: "Ideal para: frigoríficos, indústrias, operações críticas",
  },
];

const beneficios = [
  { icon: TrendingDown, valor: "Até 40%", label: "de redução em custos de manutenção" },
  { icon: Zap, valor: "Até 25%", label: "de economia de energia elétrica" },
  { icon: Clock, valor: "+50%", label: "de aumento na vida útil dos equipamentos" },
];

export default function ContratosPCM() {
  return (
    <Layout>
      <Helmet>
        <title>Contratos PCM | Plano de Controle de Manutenção | WeDo</title>
        <meta name="description" content="Contratos de manutenção preventiva PCM. Reduza custos operacionais e aumente a vida útil dos seus equipamentos. Goiás e DF." />
        <link rel="canonical" href="https://wedocorp.com/contratos-pcm" />
      </Helmet>

      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding">
        <div className="container-wedo">
          <div className="max-w-4xl">
            <nav className="text-sm text-secondary-foreground/60 mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span>Contratos PCM</span>
            </nav>
            <h1 className="title-hero text-primary-foreground mb-6">
              Contratos PCM — Plano de Controle de Manutenção
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-3xl">
              Manutenção preventiva programada para garantir a continuidade da sua operação. Reduza custos e aumente a vida útil dos equipamentos.
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="section-padding">
        <div className="container-wedo">
          <h2 className="title-section text-center mb-12">Benefícios Mensuráveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {beneficios.map((b) => (
              <div key={b.label} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{b.valor}</div>
                <p className="text-muted-foreground">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="section-padding bg-muted">
        <div className="container-wedo">
          <h2 className="title-section text-center mb-12">Planos Personalizados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planos.map((plano) => (
              <div
                key={plano.nome}
                className={`bg-card rounded-2xl p-8 ${plano.destaque ? "ring-2 ring-primary shadow-lg scale-105" : "shadow"}`}
              >
                <h3 className="font-heading font-bold text-xl mb-6">{plano.nome}</h3>
                <ul className="space-y-3 mb-6">
                  {plano.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground">{plano.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wedo text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Solicitar Proposta PCM
          </h2>
          <a
            href={LINKTREE_URL}
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
