import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Utensils, Hotel, ShoppingCart, Factory, Heart } from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";


import { useSiteSettings } from "@/hooks/useSiteSettings";
const segmentos = [
  { icon: Utensils, title: "Restaurantes", desc: "Estabelecimentos de alimentação de todos os portes." },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  { icon: Hotel, title: "Hotéis", desc: "Redes hoteleiras e pousadas." },
  { icon: ShoppingCart, title: "Supermercados", desc: "Redes varejistas e atacadistas." },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  { icon: Factory, title: "Indústrias", desc: "Indústrias alimentícias e frigoríficos." },
  { icon: Heart, title: "Hospitais", desc: "Unidades de saúde e hospitais." },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  { icon: Building2, title: "Food Services", desc: "Catering, buffets e eventos." },
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

export default function Clientes() {
import { useSiteSettings } from "@/hooks/useSiteSettings";
  return (
    <Layout>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <Helmet>
        <title>Clientes | WeDo Manutenção de Equipamentos Industriais</title>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <meta name="description" content="Conheça os segmentos atendidos pela WeDo: restaurantes, hotéis, supermercados, indústrias, hospitais e food services." />
        <link rel="canonical" href="https://wedocorp.com/clientes" />
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
              <span>Clientes</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </nav>
            <h1 className="title-hero text-primary-foreground mb-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Nossos Clientes
            </h1>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <p className="text-xl text-secondary-foreground/80 max-w-3xl">
              Atendemos mais de 2.000 clientes em diversos segmentos. Restaurantes, hotéis, supermercados, indústrias e hospitais confiam na WeDo.
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </p>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Segmentos */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="section-padding">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <h2 className="title-section text-center mb-12">Segmentos Atendidos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            {segmentos.map((seg) => (
              <div key={seg.title} className="card-wedo-highlight text-center">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <seg.icon className="w-8 h-8 text-primary" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{seg.title}</h3>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <p className="text-sm text-muted-foreground">{seg.desc}</p>
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
            Faça Parte dos Nossos Clientes
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
