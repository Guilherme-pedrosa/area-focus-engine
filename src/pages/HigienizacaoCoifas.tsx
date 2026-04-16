import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, Flame, Wind, FileText, AlertTriangle, Sparkles, Heart } from "lucide-react";
import { useCTASettings } from "@/hooks/useSiteSettings";

const etapas = [
  {
    icon: AlertTriangle,
    title: "1. Inspeção Técnica",
    description: "Avaliação completa do sistema de exaustão: coifas, dutos, filtros e exaustores. Identificação de pontos críticos de acúmulo de gordura.",
  },
  {
    icon: Sparkles,
    title: "2. Limpeza Profissional",
    description: "Remoção completa de gordura e resíduos com produtos e equipamentos específicos. Profissionais capacitados seguindo normas de segurança.",
  },
  {
    icon: FileText,
    title: "3. Laudo e Documentação",
    description: "Emissão de laudo técnico rastreável com registro fotográfico antes e depois. Documentação completa para auditorias e fiscalização.",
  },
];

const vantagens = [
  {
    icon: Flame,
    title: "Prevenção de Incêndios",
    description: "O acúmulo de gordura nos dutos é uma das principais causas de incêndios em cozinhas profissionais. A limpeza regular elimina esse risco.",
  },
  {
    icon: Wind,
    title: "Qualidade do Ar",
    description: "Redução de odores desagradáveis e melhoria da qualidade do ar no ambiente de trabalho, protegendo a saúde da equipe.",
  },
  {
    icon: Shield,
    title: "Conformidade Legal",
    description: "Atendimento às exigências da RDC 216 da ANVISA e demais normas sanitárias. Evite multas e interdições.",
  },
  {
    icon: Heart,
    title: "Vida Útil dos Equipamentos",
    description: "Equipamentos limpos funcionam melhor e duram mais. Reduza custos com manutenção corretiva e trocas antecipadas.",
  },
];

const servicos = [
  "Limpeza técnica de coifas",
  "Limpeza de dutos de exaustão",
  "Limpeza e troca de filtros",
  "Limpeza de exaustores e ventiladores",
  "Desengordurante profissional",
  "Laudo técnico rastreável",
  "Registro fotográfico completo (antes e depois)",
  "Conformidade RDC 216 / ANVISA",
];

export default function HigienizacaoCoifas() {
  const { ctaUrl, ctaText } = useCTASettings();
  return (
    <Layout>
      <Helmet>
        <title>Limpeza de Coifas Anápolis e Goiânia | RDC 216 | WeDo</title>
        <meta name="description" content="Limpeza de coifas, dutos e exaustores em Anápolis, Goiânia e DF. Conformidade RDC 216 ANVISA. Laudos técnicos, prevenção de incêndios. Solicite orçamento." />
        <link rel="canonical" href="https://wedocozinhas.com.br/limpeza-de-coifas" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Limpeza de Coifas e Dutos de Exaustão",
            "serviceType": "Limpeza de Coifas",
            "description": "Limpeza profissional de coifas, dutos e exaustores para cozinhas profissionais conforme RDC 216 da ANVISA. Laudos técnicos rastreáveis.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "WeDo Comércio e Importação Ltda",
              "url": "https://wedocozinhas.com.br",
              "telephone": "+55-62-99377-5711",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua 5",
                "addressLocality": "Anápolis",
                "addressRegion": "GO",
                "postalCode": "75000-000",
                "addressCountry": "BR"
              }
            },
            "areaServed": [
              { "@type": "City", "name": "Anápolis" },
              { "@type": "City", "name": "Goiânia" },
              { "@type": "City", "name": "Brasília" },
              { "@type": "State", "name": "Goiás" },
              { "@type": "State", "name": "Distrito Federal" }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Qual o valor da limpeza de uma coifa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O valor da limpeza de coifa varia conforme o tamanho do sistema de exaustão, extensão dos dutos e quantidade de coifas. Entre em contato com a WeDo para um orçamento personalizado."
                }
              },
              {
                "@type": "Question",
                "name": "O que é feito na limpeza de coifa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A limpeza de coifa inclui inspeção técnica do sistema de exaustão, remoção completa de gordura dos dutos, filtros e exaustores, e emissão de laudo técnico rastreável com registro fotográfico conforme RDC 216 da ANVISA."
                }
              },
              {
                "@type": "Question",
                "name": "De quanto em quanto tempo deve ser feita a limpeza da coifa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A frequência recomendada depende do volume de uso da cozinha. Em geral, cozinhas profissionais de alto volume devem realizar a limpeza a cada 3 a 6 meses. A RDC 216 da ANVISA exige manutenção periódica documentada."
                }
              },
              {
                "@type": "Question",
                "name": "Por que a limpeza de coifa é obrigatória?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A limpeza de coifa é obrigatória por questões de segurança (prevenção de incêndios), saúde (qualidade do ar) e conformidade sanitária. A RDC 216 da ANVISA exige que estabelecimentos mantenham o sistema de exaustão limpo e documentado."
                }
              }
            ]
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
              <span>Limpeza de Coifas</span>
            </nav>
            <h1 className="title-hero text-primary-foreground mb-6">
              Limpeza de Coifas e Dutos de Exaustão
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-3xl mb-8">
              Serviço técnico essencial para a segurança, eficiência e qualidade do ar em cozinhas profissionais. Conformidade total com RDC 216 da ANVISA.
            </p>
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Importância */}
      <section className="section-padding">
        <div className="container-wedo">
          <div className="max-w-4xl mx-auto">
            <h2 className="title-section mb-6">
              A Importância da Limpeza de Coifas em Cozinhas Profissionais
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                A <strong className="text-foreground">limpeza de coifas e dutos de exaustão</strong> é um serviço técnico essencial para promover a segurança, a eficiência e a qualidade do ar em cozinhas profissionais.
              </p>
              <p>
                A acumulação de gordura, fumaça e outros resíduos nos dutos, coifas e exaustores pode representar riscos significativos, como <strong className="text-foreground">incêndios, mau funcionamento dos equipamentos e contaminação dos alimentos</strong>.
              </p>
              <p>
                Por isso, manter o sistema de exaustão limpo e em perfeito estado é fundamental para o bom funcionamento de toda a operação e para atender às exigências da <strong className="text-foreground">RDC 216 da ANVISA</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vídeo */}
      <section className="section-padding bg-muted">
        <div className="container-wedo">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="title-section mb-4">Veja Nosso Trabalho</h2>
            <p className="text-muted-foreground mb-8">
              Acompanhe o processo de limpeza profissional realizado pela nossa equipe técnica.
            </p>
            <div className="relative w-full max-w-[360px] mx-auto rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '9/16' }}>
              <iframe
                src="https://www.youtube.com/embed/fWxttV9DHTY"
                title="Limpeza de Coifas - WeDo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="section-padding">
        <div className="container-wedo">
          <div className="text-center mb-12">
            <h2 className="title-section">Como Funciona</h2>
            <p className="subtitle-section mx-auto">
              Nosso processo segue normas rigorosas de segurança e qualidade para garantir resultados duradouros.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {etapas.map((etapa) => (
              <div key={etapa.title} className="bg-card rounded-2xl p-8 shadow-sm border border-border text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <etapa.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{etapa.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{etapa.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="section-padding bg-secondary">
        <div className="container-wedo">
          <div className="text-center mb-12">
            <h2 className="title-section text-primary-foreground">Vantagens da Limpeza Profissional</h2>
            <p className="subtitle-section mx-auto text-secondary-foreground/70">
              Investir na limpeza regular de coifas traz benefícios diretos para a segurança e economia da sua operação.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vantagens.map((v) => (
              <div key={v.title} className="flex gap-5 bg-secondary-foreground/5 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-primary-foreground mb-2">{v.title}</h3>
                  <p className="text-secondary-foreground/80 leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços inclusos */}
      <section className="section-padding">
        <div className="container-wedo">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="title-section mb-6">O Que Está Incluso</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Nosso serviço de limpeza de coifas é completo. Garantimos a conformidade da sua cozinha com as normas sanitárias vigentes.
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
              <p className="text-muted-foreground leading-relaxed">
                Conformidade com RDC 216 da ANVISA e demais normas sanitárias. Laudos técnicos rastreáveis para auditorias e fiscalização. Documentação completa para seu estabelecimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes */}
      <section className="section-padding">
        <div className="container-wedo">
          <div className="max-w-4xl mx-auto">
            <h2 className="title-section mb-8 text-center">Perguntas Frequentes sobre Limpeza de Coifas</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Qual o valor da limpeza de uma coifa?",
                  a: "O valor da limpeza de coifa varia conforme o tamanho do sistema de exaustão, extensão dos dutos e quantidade de coifas. Entre em contato com a WeDo para um orçamento personalizado para sua cozinha profissional."
                },
                {
                  q: "O que é feito na limpeza de coifa?",
                  a: "A limpeza de coifa inclui inspeção técnica do sistema de exaustão, remoção completa de gordura dos dutos, filtros e exaustores, e emissão de laudo técnico rastreável com registro fotográfico conforme RDC 216 da ANVISA."
                },
                {
                  q: "De quanto em quanto tempo deve ser feita a limpeza da coifa?",
                  a: "A frequência recomendada depende do volume de uso da cozinha. Em geral, cozinhas profissionais de alto volume devem realizar a limpeza a cada 3 a 6 meses. A RDC 216 da ANVISA exige manutenção periódica documentada."
                },
                {
                  q: "Por que a limpeza de coifa é obrigatória?",
                  a: "A limpeza de coifa é obrigatória por questões de segurança (prevenção de incêndios), saúde (qualidade do ar) e conformidade sanitária. A RDC 216 da ANVISA exige que estabelecimentos mantenham o sistema de exaustão limpo e documentado."
                }
              ].map((faq) => (
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

      {/* Links por cidade */}
      <section className="section-padding bg-muted">
        <div className="container-wedo">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="title-section mb-6">Limpeza de Coifas por Cidade</h2>
            <p className="text-muted-foreground mb-8">
              Atendemos as principais cidades de Goiás e Distrito Federal com equipe especializada.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { to: "/limpeza-de-coifas-goiania", label: "Limpeza de Coifas em Goiânia", desc: "Capital e região metropolitana" },
                { to: "/limpeza-de-coifas-anapolis", label: "Limpeza de Coifas em Anápolis", desc: "DAIA e região" },
                { to: "/limpeza-de-coifas-brasilia", label: "Limpeza de Coifas em Brasília", desc: "Plano Piloto e Entorno do DF" },
              ].map((c) => (
                <Link
                  key={c.to}
                  to={c.to}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors text-left"
                >
                  <h3 className="font-heading font-bold text-lg mb-2">{c.label}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="section-padding bg-primary">
        <div className="container-wedo text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Solicite um Orçamento de Limpeza de Coifas
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Invista na segurança e na conformidade da sua cozinha profissional. Entre em contato e receba um orçamento personalizado.
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
