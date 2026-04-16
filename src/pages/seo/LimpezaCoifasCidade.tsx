import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, MapPin } from "lucide-react";
import { useCTASettings } from "@/hooks/useSiteSettings";
import { cidadesCoifas, type CidadeCoifasData } from "@/data/limpezaCoifasCidades";

function CidadeContent({ data }: { data: CidadeCoifasData }) {
  const { ctaUrl, ctaText } = useCTASettings();

  return (
    <Layout>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={data.canonical} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `Limpeza de Coifas em ${data.cidade}`,
            "serviceType": "Limpeza de Coifas",
            "description": data.metaDescription,
            "provider": {
              "@type": "LocalBusiness",
              "name": "WeDo Comércio e Importação Ltda",
              "url": "https://wedocozinhas.com.br",
              "telephone": "+55-62-99377-5711",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Anápolis",
                "addressRegion": "GO",
                "postalCode": "75000-000",
                "addressCountry": "BR"
              }
            },
            "areaServed": {
              "@type": data.estado === "DF" ? "State" : "City",
              "name": data.cidade
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": data.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding">
        <div className="container-wedo">
          <div className="max-w-4xl">
            <nav className="text-sm text-secondary-foreground/60 mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/limpeza-de-coifas" className="hover:text-primary">Limpeza de Coifas</Link>
              <span className="mx-2">/</span>
              <span>{data.cidade}</span>
            </nav>
            <h1 className="title-hero text-primary-foreground mb-6">
              Limpeza de Coifas em {data.cidade}
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-3xl mb-8">
              {data.heroSubtitle}
            </p>
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Solicitar Orçamento em {data.cidade}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contexto Local */}
      <section className="section-padding">
        <div className="container-wedo">
          <div className="max-w-4xl mx-auto">
            <h2 className="title-section mb-6">
              Por Que a Limpeza de Coifas é Essencial em {data.cidade}
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              {data.introTexto.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operação local */}
      <section className="section-padding bg-muted">
        <div className="container-wedo">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="title-section mb-6">
                Como Funciona em {data.cidade}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {data.operacaoLocal}
              </p>
              <ul className="space-y-3">
                {[
                  "Limpeza completa de coifas e dutos",
                  "Limpeza e troca de filtros",
                  "Limpeza de exaustores",
                  "Desengordurante profissional",
                  "Laudo técnico rastreável",
                  "Registro fotográfico (antes e depois)",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 text-center border border-border">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4">Laudo para Fiscalização</h3>
              <p className="text-muted-foreground leading-relaxed">
                Documentação completa e rastreável para apresentação em fiscalizações sanitárias em {data.cidade} e {data.estado === "DF" ? "Distrito Federal" : "Goiás"}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regiões atendidas */}
      <section className="section-padding">
        <div className="container-wedo">
          <div className="max-w-4xl mx-auto">
            <h2 className="title-section mb-6 text-center">
              Regiões Atendidas em {data.cidade}
            </h2>
            <p className="subtitle-section mx-auto text-center mb-8">
              Levamos nosso serviço de limpeza de coifas profissional para toda a região.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {data.regioes.map((regiao) => (
                <div
                  key={regiao}
                  className="flex items-center gap-2 bg-muted rounded-xl px-4 py-3"
                >
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{regiao}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="container-wedo">
          <div className="max-w-4xl mx-auto">
            <h2 className="title-section mb-8 text-center">
              Perguntas Frequentes sobre Limpeza de Coifas em {data.cidade}
            </h2>
            <div className="space-y-6">
              {data.faqs.map((faq) => (
                <details key={faq.q} className="group bg-card border border-border rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-bold text-lg hover:text-primary transition-colors">
                    {faq.q}
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Página principal link */}
      <section className="section-padding">
        <div className="container-wedo text-center">
          <p className="text-muted-foreground mb-4">
            Saiba mais sobre nosso serviço completo de limpeza de coifas, etapas do processo e vantagens:
          </p>
          <Link
            to="/limpeza-de-coifas"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            Ver página principal de Limpeza de Coifas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wedo text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Solicite um Orçamento de Limpeza de Coifas em {data.cidade}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Garanta a segurança e conformidade da sua cozinha profissional em {data.cidade}. Entre em contato e receba um orçamento personalizado.
          </p>
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

export default function LimpezaCoifasCidade() {
  const params = useParams<{ slug: string }>();
  const data = cidadesCoifas.find(c => c.slug === params.slug);
  
  if (!data) {
    return <Navigate to="/limpeza-de-coifas" replace />;
  }

  return <CidadeContent data={data} />;
}
