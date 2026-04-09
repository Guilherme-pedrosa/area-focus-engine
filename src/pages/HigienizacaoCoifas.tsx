import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";


import { useSiteSettings } from "@/hooks/useSiteSettings";
const servicos = [
  "Limpeza técnica de coifas",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  "Limpeza de dutos de exaustão",
  "Limpeza de filtros",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  "Laudo técnico rastreável",
  "Conformidade RDC 216 fiscalização",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  "Registro fotográfico completo",
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

export default function HigienizacaoCoifas() {
import { useSiteSettings } from "@/hooks/useSiteSettings";
  return (
    <Layout>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <Helmet>
        <title>Higienização de Coifas | RDC 216 | Goiás e DF | WeDo</title>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <meta name="description" content="Limpeza técnica de coifas e dutos conforme RDC 216. Compliance total com laudos técnicos rastreáveis para fiscalização. Goiás e DF." />
        <link rel="canonical" href="https://wedocorp.com/higienizacao-coifas" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </Helmet>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo">
          <div className="max-w-4xl">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <nav className="text-sm text-secondary-foreground/60 mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <span className="mx-2">/</span>
              <span>Higienização de Coifas</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </nav>
            <h1 className="title-hero text-primary-foreground mb-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Higienização de Coifas
            </h1>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <p className="text-xl text-secondary-foreground/80 max-w-3xl">
              Limpeza técnica de coifas e dutos conforme RDC 216. Compliance total com laudos técnicos rastreáveis para fiscalização.
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </p>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Serviços */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="section-padding">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <h2 className="title-section mb-6">Serviços de Higienização</h2>
              <p className="text-muted-foreground mb-8">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                Garantimos a conformidade da sua cozinha com as normas sanitárias vigentes, documentando todo o processo com laudos técnicos.
              </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <ul className="space-y-4">
                {servicos.map((servico) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <li key={servico} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <span className="font-medium">{servico}</span>
                  </li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                ))}
              </ul>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </div>
            <div className="bg-muted rounded-2xl p-8 text-center">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-primary" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4">Compliance Total</h3>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <p className="text-muted-foreground">
                Conformidade com RDC 216 e demais normas sanitárias. Laudos técnicos rastreáveis para auditorias e fiscalização.
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </p>
            </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </section>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* CTA */}
      <section className="section-padding bg-primary">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            Solicite um Orçamento
          </h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <a
            href={ctaUrl}
import { useSiteSettings } from "@/hooks/useSiteSettings";
            target="_blank"
            rel="noopener noreferrer"
import { useSiteSettings } from "@/hooks/useSiteSettings";
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
import { useSiteSettings } from "@/hooks/useSiteSettings";
            Acessar Atendimento
            <ArrowRight className="w-6 h-6" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </a>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </section>
    </Layout>
import { useSiteSettings } from "@/hooks/useSiteSettings";
  );
}
