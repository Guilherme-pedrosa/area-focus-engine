import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, MapPin, Calendar } from "lucide-react";
import { useCTASettings } from "@/hooks/useSiteSettings";


const valores = [
  { icon: Award, title: "Excelência Técnica", desc: "Compromisso com a qualidade em cada serviço prestado." },
  { icon: Users, title: "Equipe Especializada", desc: "Técnicos certificados com treinamento contínuo." },
  { icon: MapPin, title: "Presença Regional", desc: "Atendimento em todo o estado de Goiás e Distrito Federal." },
  { icon: Calendar, title: "Desde 2018", desc: "Anos de experiência consolidada no mercado." },
];

export default function Sobre() {
  const { ctaUrl, ctaText } = useCTASettings();
  return (
    <Layout>
      <Helmet>
        <title>Sobre a WeDo | Manutenção de Equipamentos Industriais | Goiás e DF</title>
        <meta name="description" content="Conheça a WeDo: desde 2018 oferecendo assistência técnica especializada em câmaras frias e equipamentos industriais em Goiás e DF." />
        <link rel="canonical" href="https://wedocozinhas.com.br/sobre" />
      </Helmet>

      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding">
        <div className="container-wedo">
          <div className="max-w-4xl">
            <nav className="text-sm text-secondary-foreground/60 mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span>Sobre</span>
            </nav>
            <h1 className="title-hero text-primary-foreground mb-6">
              Sobre a WeDo
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-3xl">
              Desde 2018, a WeDo oferece assistência técnica especializada em câmaras frias, refrigeração industrial e equipamentos para cozinhas profissionais em Goiás e Distrito Federal.
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="section-padding">
        <div className="container-wedo">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="title-section mb-6">Nossa História</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A WeDo nasceu da necessidade de oferecer um serviço técnico de excelência para cozinhas profissionais. Com mais de 2.000 clientes atendidos e mais de 15.000 soluções entregues, consolidamos nossa posição como referência em manutenção de equipamentos industriais.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Como parceiro autorizado Rational, oferecemos assistência técnica certificada com técnicos treinados diretamente pela fábrica. Nossa expertise abrange todas as principais marcas do mercado, permitindo que sejamos o único parceiro para toda a sua operação.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding bg-muted">
        <div className="container-wedo">
          <h2 className="title-section text-center mb-12">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor) => (
              <div key={valor.title} className="card-wedo text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <valor.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{valor.title}</h3>
                <p className="text-sm text-muted-foreground">{valor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wedo text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Conheça Nossos Serviços
          </h2>
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            {ctaText}
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
