import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getPageBySlug, SeoSymptomPage } from "@/data/seoSymptomsData";
import { 
  Phone, 
  Clock, 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  Wrench,
  MapPin,
  ArrowRight,
  MessageCircle
} from "lucide-react";
import { useCTASettings } from "@/hooks/useSiteSettings";

const CONTACT_URL = "https://contatoswedo.lovable.app/";

// Conteúdo dinâmico baseado na categoria
const getCategoryContent = (page: SeoSymptomPage) => {
  const categoryTexts: Record<string, { 
    causas: string[]; 
    solucoes: string[]; 
    urgencia: string;
    equipamentoRelacionado: string;
  }> = {
    rational: {
      causas: [
        "Gerador de vapor com calcário acumulado",
        "Sensor de temperatura descalibrado",
        "Resistência de aquecimento danificada",
        "Placa eletrônica com defeito",
        "Falta de manutenção preventiva",
        "Vedação da porta comprometida"
      ],
      solucoes: [
        "Diagnóstico com equipamento de fábrica",
        "Limpeza profissional do gerador de vapor",
        "Troca de peças originais Rational",
        "Calibração de sensores e termostatos",
        "Atualização de firmware quando necessário"
      ],
      urgencia: "Forno parado significa produção parada. Cada hora sem o equipamento representa perdas significativas para sua operação.",
      equipamentoRelacionado: "fornos combinados Rational"
    },
    hobart: {
      causas: [
        "Bomba de água com defeito",
        "Braços de lavagem entupidos",
        "Resistência de aquecimento queimada",
        "Válvula solenóide travada",
        "Sensor de nível danificado",
        "Filtros obstruídos"
      ],
      solucoes: [
        "Diagnóstico completo do sistema hidráulico",
        "Limpeza e desobstrução de componentes",
        "Troca de peças originais Hobart",
        "Verificação do sistema elétrico",
        "Calibração de ciclos de lavagem"
      ],
      urgencia: "Lava-louças parada compromete toda a operação da cozinha e pode gerar problemas de higiene e vigilância sanitária.",
      equipamentoRelacionado: "lava-louças industriais Hobart"
    },
    "robot-coupe": {
      causas: [
        "Motor com desgaste",
        "Lâminas cegas ou danificadas",
        "Acoplamento quebrado",
        "Capacitor de partida queimado",
        "Chave de segurança com defeito"
      ],
      solucoes: [
        "Diagnóstico do motor e componentes",
        "Troca de lâminas e discos",
        "Verificação do sistema de segurança",
        "Substituição de peças desgastadas"
      ],
      urgencia: "Processador parado atrasa todo o pré-preparo e impacta diretamente a produtividade da cozinha.",
      equipamentoRelacionado: "processadores de alimentos Robot Coupe"
    },
    irinox: {
      causas: [
        "Compressor com defeito",
        "Vazamento de gás refrigerante",
        "Controlador eletrônico danificado",
        "Evaporador congelado",
        "Ventilador com problema"
      ],
      solucoes: [
        "Diagnóstico do sistema de refrigeração",
        "Recarga de gás refrigerante",
        "Troca de compressor quando necessário",
        "Reparo de vazamentos",
        "Calibração do controlador"
      ],
      urgencia: "Ultracongelador parado significa risco de perda de produtos e quebra da cadeia de frio.",
      equipamentoRelacionado: "ultracongeladores Irinox"
    },
    "camaras-frias": {
      causas: [
        "Compressor queimado ou com defeito",
        "Vazamento de gás refrigerante",
        "Evaporador congelado",
        "Termostato descalibrado",
        "Vedação da porta danificada",
        "Condensador sujo"
      ],
      solucoes: [
        "Diagnóstico completo do sistema",
        "Recarga de gás refrigerante",
        "Troca de compressor",
        "Limpeza de evaporador e condensador",
        "Substituição de borrachas de vedação",
        "Calibração de termostato"
      ],
      urgencia: "Câmara fria sem refrigeração adequada representa risco de perda total dos produtos armazenados e problemas com a vigilância sanitária.",
      equipamentoRelacionado: "câmaras frias e sistemas de refrigeração"
    },
    metalfrio: {
      causas: [
        "Compressor com defeito",
        "Gás refrigerante insuficiente",
        "Termostato danificado",
        "Motor do ventilador queimado",
        "Condensador obstruído"
      ],
      solucoes: [
        "Diagnóstico do sistema de refrigeração",
        "Recarga de gás",
        "Troca de compressor",
        "Limpeza geral do sistema",
        "Substituição de termostato"
      ],
      urgencia: "Refrigerador comercial sem função adequada compromete a qualidade dos produtos e pode gerar perdas financeiras.",
      equipamentoRelacionado: "refrigeradores e freezers Metalfrio"
    },
    progas: {
      causas: [
        "Resistência queimada",
        "Termostato com defeito",
        "Ventilador parado",
        "Sensor de temperatura danificado",
        "Placa eletrônica com problema"
      ],
      solucoes: [
        "Diagnóstico elétrico completo",
        "Troca de resistências",
        "Substituição de termostato",
        "Reparo do motor do ventilador",
        "Calibração de sensores"
      ],
      urgencia: "Forno ou fritadeira sem aquecimento paralisa a produção e impacta diretamente o faturamento.",
      equipamentoRelacionado: "fornos e fritadeiras Progás"
    },
    tramontina: {
      causas: [
        "Resistência de aquecimento queimada",
        "Termostato descalibrado",
        "Vedação danificada",
        "Sensor de temperatura com defeito",
        "Conexões elétricas soltas"
      ],
      solucoes: [
        "Diagnóstico do sistema de aquecimento",
        "Troca de resistências",
        "Calibração de termostato",
        "Verificação das conexões elétricas",
        "Substituição de vedações"
      ],
      urgencia: "Equipamento de buffet sem aquecimento compromete a qualidade e segurança alimentar do serviço.",
      equipamentoRelacionado: "banhos-maria e equipamentos Tramontina"
    },
    cozil: {
      causas: [
        "Compressor com defeito",
        "Sistema de degelo com problema",
        "Gás refrigerante insuficiente",
        "Controlador eletrônico danificado",
        "Ventilador do evaporador parado"
      ],
      solucoes: [
        "Diagnóstico do sistema de refrigeração",
        "Reparo do sistema de degelo",
        "Recarga de gás refrigerante",
        "Troca de compressor",
        "Substituição de controlador"
      ],
      urgencia: "Freezer industrial com problema compromete toda a cadeia de armazenamento e pode gerar perdas significativas.",
      equipamentoRelacionado: "freezers e refrigeradores Cozil"
    },
    pecas: {
      causas: [
        "Desgaste natural do componente",
        "Sobrecarga elétrica",
        "Falta de manutenção preventiva",
        "Instalação inadequada",
        "Uso incorreto do equipamento"
      ],
      solucoes: [
        "Diagnóstico preciso do problema",
        "Identificação da peça correta",
        "Substituição por peça original ou compatível",
        "Teste completo após instalação",
        "Orientação para evitar reincidência"
      ],
      urgencia: "Componente crítico com defeito pode causar parada total do equipamento e danos maiores se não tratado rapidamente.",
      equipamentoRelacionado: "equipamentos industriais de cozinha"
    }
  };

  return categoryTexts[page.categoria] || categoryTexts["camaras-frias"];
};

export default function SeoSymptomTemplate() {
  const { ctaUrl, ctaText } = useCTASettings();
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/404" replace />;
  }

  const page = getPageBySlug(slug);

  if (!page) {
    return <Navigate to="/404" replace />;
  }

  const content = getCategoryContent(page);

  // Schema.org LocalBusiness + Service
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "WeDo Manutenção de Cozinhas Profissionais",
    "description": page.metaDescription,
    "url": `https://wedocozinhas.com.br/${page.slug}`,
    "telephone": "https://contatoswedo.lovable.app/",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": page.cidade,
      "addressRegion": page.cidade.includes("Brasília") ? "DF" : "GO",
      "addressCountry": "BR"
    },
    "areaServed": {
      "@type": "City",
      "name": page.cidade
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Conserto de ${page.equipamento}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Conserto de ${page.equipamento} - ${page.sintoma}`,
            "description": `Serviço especializado para ${page.equipamento} com problema de ${page.sintoma.toLowerCase()} em ${page.cidade}`
          }
        }
      ]
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>{page.title}</title>
        <meta name="description" content={page.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://wedocozinhas.com.br/${page.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://wedocozinhas.com.br/${page.slug}`} />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrg)}
        </script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-muted/50 py-3">
        <div className="container-wedo">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-accent">Início</Link>
            <span className="mx-2">/</span>
            <Link to="/locais-atendimento" className="hover:text-accent">{page.cidade}</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{page.sintoma}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary py-16 lg:py-24">
        <div className="container-wedo">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge de Urgência */}
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <AlertTriangle className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">Atendimento Emergencial Disponível</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              {page.h1}
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Técnicos certificados com atendimento em até 4 horas. 
              Diagnóstico preciso e conserto com peças originais.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
              >
                <a href={`${CONTACT_URL}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chamar no WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
              >
                <a href="https://contatoswedo.lovable.app/" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Canais de Contato
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Clock className="w-5 h-5 text-accent" />
                <span>Atendimento em até 4h</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Shield className="w-5 h-5 text-accent" />
                <span>Garantia de 90 dias no serviço</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Atendemos {page.cidade}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgência Section */}
      <section className="py-12 bg-destructive/10 border-y border-destructive/20">
        <div className="container-wedo">
          <div className="max-w-3xl mx-auto text-center">
            <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Por que você não deve esperar?
            </h2>
            <p className="text-lg text-muted-foreground">
              {content.urgencia}
            </p>
          </div>
        </div>
      </section>

      {/* Causas e Soluções */}
      <section className="py-16 lg:py-24">
        <div className="container-wedo">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Causas */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Possíveis Causas do Problema
              </h2>
              <p className="text-muted-foreground mb-6">
                Quando seu {page.equipamento.toLowerCase()} apresenta o sintoma de "{page.sintoma.toLowerCase()}", 
                as causas mais comuns são:
              </p>
              <ul className="space-y-3">
                {content.causas.map((causa, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{causa}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soluções */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Como a WeDo Resolve
              </h2>
              <p className="text-muted-foreground mb-6">
                Nossa equipe técnica especializada em {content.equipamentoRelacionado} segue um processo rigoroso:
              </p>
              <ul className="space-y-3">
                {content.solucoes.map((solucao, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{solucao}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container-wedo">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-12">
            Por Que Escolher a WeDo em {page.cidade}?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Atendimento Rápido</h3>
                <p className="text-muted-foreground">
                  Técnicos em {page.cidade} com chegada em até 4 horas para casos urgentes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Técnicos Certificados</h3>
                <p className="text-muted-foreground">
                  Equipe treinada pelos principais fabricantes com certificações atualizadas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Garantia de Serviço</h3>
                <p className="text-muted-foreground">
                  90 dias de garantia em todos os nossos serviços. Documentação completa para auditorias.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container-wedo">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-6">
              Não Deixe Seu {page.equipamento} Parado
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Fale agora com um técnico especializado e resolva o problema de 
              "{page.sintoma.toLowerCase()}" hoje mesmo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
              >
                <a href={`${CONTACT_URL}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicitar Orçamento Grátis
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                  Ver Todos os Canais
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Links Relacionados */}
      <section className="py-12 bg-muted/30">
        <div className="container-wedo">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Outros Problemas Comuns em {page.cidade}:
          </h3>
          <div className="flex flex-wrap gap-2">
            {page.categoria === "rational" && (
              <>
                <Link to="/assistencia-tecnica-rational" className="text-sm text-accent hover:underline">
                  Assistência Técnica Rational →
                </Link>
              </>
            )}
            {page.categoria === "camaras-frias" && (
              <>
                <Link to="/manutencao-camaras-frias" className="text-sm text-accent hover:underline">
                  Manutenção de Câmaras Frias →
                </Link>
              </>
            )}
            <Link to="/contratos-pcm" className="text-sm text-accent hover:underline">
              Contratos de Manutenção Preventiva →
            </Link>
            <Link to="/locais-atendimento" className="text-sm text-accent hover:underline">
              Locais de Atendimento →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
