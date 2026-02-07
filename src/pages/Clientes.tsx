import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Utensils, Hotel, ShoppingCart, Factory, Heart } from "lucide-react";

const LINKTREE_URL = "https://linktr.ee/wedocorp";

const segmentos = [
  { icon: Utensils, title: "Restaurantes", desc: "Estabelecimentos de alimentação de todos os portes." },
  { icon: Hotel, title: "Hotéis", desc: "Redes hoteleiras e pousadas." },
  { icon: ShoppingCart, title: "Supermercados", desc: "Redes varejistas e atacadistas." },
  { icon: Factory, title: "Indústrias", desc: "Indústrias alimentícias e frigoríficos." },
  { icon: Heart, title: "Hospitais", desc: "Unidades de saúde e hospitais." },
  { icon: Building2, title: "Food Services", desc: "Catering, buffets e eventos." },
];

export default function Clientes() {
  return (
    <Layout>
      <Helmet>
        <title>Clientes | WeDo Manutenção de Equipamentos Industriais</title>
        <meta name="description" content="Conheça os segmentos atendidos pela WeDo: restaurantes, hotéis, supermercados, indústrias, hospitais e food services." />
        <link rel="canonical" href="https://wedocorp.com/clientes" />
      </Helmet>

      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding">
        <div className="container-wedo">
          <div className="max-w-4xl">
            <nav className="text-sm text-secondary-foreground/60 mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span>Clientes</span>
            </nav>
            <h1 className="title-hero text-primary-foreground mb-6">
              Nossos Clientes
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-3xl">
              Atendemos mais de 2.000 clientes em diversos segmentos. Restaurantes, hotéis, supermercados, indústrias e hospitais confiam na WeDo.
            </p>
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <section className="section-padding">
        <div className="container-wedo">
          <h2 className="title-section text-center mb-12">Segmentos Atendidos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {segmentos.map((seg) => (
              <div key={seg.title} className="card-wedo-highlight text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <seg.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{seg.title}</h3>
                <p className="text-sm text-muted-foreground">{seg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wedo text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Faça Parte dos Nossos Clientes
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
