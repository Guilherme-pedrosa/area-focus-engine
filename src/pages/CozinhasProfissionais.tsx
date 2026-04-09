import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";


import { useSiteSettings } from "@/hooks/useSiteSettings";
const marcas = [
  "Rational", "Hobart", "Vulcan", "Robot Coupe", "Irinox", "Prática",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  "Tramontina", "Macon", "Hoshizaki", "Cozil", "Fornoflex", "Middleby", "Metalfrio"
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

const equipamentos = [
import { useSiteSettings } from "@/hooks/useSiteSettings";
  "Fornos combinados",
  "Lavadoras de louça",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  "Processadores de alimentos",
  "Cortadores e fatiadores",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  "Chapas e fritadeiras",
  "Fogões profissionais",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  "Refrigeradores e freezers",
  "Balcões refrigerados",
import { useSiteSettings } from "@/hooks/useSiteSettings";
];

import { useSiteSettings } from "@/hooks/useSiteSettings";
export default function CozinhasProfissionais() {
  return (
import { useSiteSettings } from "@/hooks/useSiteSettings";
    <Layout>
      <Helmet>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <title>Cozinhas Profissionais | Manutenção Multimarcas | WeDo</title>
        <meta name="description" content="Manutenção de equipamentos de cozinha profissional multimarcas. Hobart, Vulcan, Robot Coupe, Irinox e mais. Goiás e DF." />
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <link rel="canonical" href="https://wedocorp.com/cozinhas-profissionais" />
      </Helmet>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Hero */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="bg-secondary text-secondary-foreground section-padding">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="max-w-4xl">
            <nav className="text-sm text-secondary-foreground/60 mb-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <span>Cozinhas Profissionais</span>
            </nav>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <h1 className="title-hero text-primary-foreground mb-6">
              Cozinhas Profissionais — Manutenção Multimarcas
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-3xl">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Expertise técnica em todas as principais marcas de equipamentos para cozinhas profissionais. Um único parceiro para toda sua operação.
            </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </section>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* Marcas */}
      <section className="section-padding">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo">
          <h2 className="title-section text-center mb-8">Marcas Atendidas</h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-12">
            {marcas.map((marca) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <span key={marca} className="badge-wedo">{marca}</span>
            ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </section>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* Equipamentos */}
      <section className="section-padding bg-muted">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo">
          <h2 className="title-section text-center mb-12">Equipamentos Atendidos</h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {equipamentos.map((eq) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div key={eq} className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <span className="font-medium">{eq}</span>
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            ))}
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* CTA */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="section-padding bg-primary">
        <div className="container-wedo text-center">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Solicite um Orçamento
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </h2>
          <a
import { useSiteSettings } from "@/hooks/useSiteSettings";
            href={ctaUrl}
            target="_blank"
import { useSiteSettings } from "@/hooks/useSiteSettings";
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
import { useSiteSettings } from "@/hooks/useSiteSettings";
          >
            Acessar Atendimento
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <ArrowRight className="w-6 h-6" />
          </a>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";
    </Layout>
  );
import { useSiteSettings } from "@/hooks/useSiteSettings";
}
