import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getPageBySlug, SeoSymptomPage } from "@/data/seoSymptomsData";
import { 
import { useSiteSettings } from "@/hooks/useSiteSettings";
  Phone, 
  Clock, 
import { useSiteSettings } from "@/hooks/useSiteSettings";
  Shield, 
  CheckCircle, 
import { useSiteSettings } from "@/hooks/useSiteSettings";
  AlertTriangle, 
  Wrench,
import { useSiteSettings } from "@/hooks/useSiteSettings";
  MapPin,
  ArrowRight,
import { useSiteSettings } from "@/hooks/useSiteSettings";
  MessageCircle
} from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const WHATSAPP_URL = "https://wa.me/5562993775711";
import { useSiteSettings } from "@/hooks/useSiteSettings";

// Conteúdo dinâmico baseado na categoria
import { useSiteSettings } from "@/hooks/useSiteSettings";
const getCategoryContent = (page: SeoSymptomPage) => {
  const categoryTexts: Record<string, { 
import { useSiteSettings } from "@/hooks/useSiteSettings";
    causas: string[]; 
    solucoes: string[]; 
import { useSiteSettings } from "@/hooks/useSiteSettings";
    urgencia: string;
    equipamentoRelacionado: string;
import { useSiteSettings } from "@/hooks/useSiteSettings";
  }> = {
    rational: {
import { useSiteSettings } from "@/hooks/useSiteSettings";
      causas: [
        "Gerador de vapor com calcário acumulado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Sensor de temperatura descalibrado",
        "Resistência de aquecimento danificada",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Placa eletrônica com defeito",
        "Falta de manutenção preventiva",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Vedação da porta comprometida"
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      solucoes: [
        "Diagnóstico com equipamento de fábrica",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Limpeza profissional do gerador de vapor",
        "Troca de peças originais Rational",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Calibração de sensores e termostatos",
        "Atualização de firmware quando necessário"
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      urgencia: "Forno parado significa produção parada. Cada hora sem o equipamento representa perdas significativas para sua operação.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      equipamentoRelacionado: "fornos combinados Rational"
    },
import { useSiteSettings } from "@/hooks/useSiteSettings";
    hobart: {
      causas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Bomba de água com defeito",
        "Braços de lavagem entupidos",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Resistência de aquecimento queimada",
        "Válvula solenóide travada",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Sensor de nível danificado",
        "Filtros obstruídos"
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      solucoes: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Diagnóstico completo do sistema hidráulico",
        "Limpeza e desobstrução de componentes",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Troca de peças originais Hobart",
        "Verificação do sistema elétrico",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Calibração de ciclos de lavagem"
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      urgencia: "Lava-louças parada compromete toda a operação da cozinha e pode gerar problemas de higiene e vigilância sanitária.",
      equipamentoRelacionado: "lava-louças industriais Hobart"
import { useSiteSettings } from "@/hooks/useSiteSettings";
    },
    "robot-coupe": {
import { useSiteSettings } from "@/hooks/useSiteSettings";
      causas: [
        "Motor com desgaste",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Lâminas cegas ou danificadas",
        "Acoplamento quebrado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Capacitor de partida queimado",
        "Chave de segurança com defeito"
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      solucoes: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Diagnóstico do motor e componentes",
        "Troca de lâminas e discos",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Verificação do sistema de segurança",
        "Substituição de peças desgastadas"
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      urgencia: "Processador parado atrasa todo o pré-preparo e impacta diretamente a produtividade da cozinha.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      equipamentoRelacionado: "processadores de alimentos Robot Coupe"
    },
import { useSiteSettings } from "@/hooks/useSiteSettings";
    irinox: {
      causas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Compressor com defeito",
        "Vazamento de gás refrigerante",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Controlador eletrônico danificado",
        "Evaporador congelado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Ventilador com problema"
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      solucoes: [
        "Diagnóstico do sistema de refrigeração",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Recarga de gás refrigerante",
        "Troca de compressor quando necessário",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Reparo de vazamentos",
        "Calibração do controlador"
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      urgencia: "Ultracongelador parado significa risco de perda de produtos e quebra da cadeia de frio.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      equipamentoRelacionado: "ultracongeladores Irinox"
    },
import { useSiteSettings } from "@/hooks/useSiteSettings";
    "camaras-frias": {
      causas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Compressor queimado ou com defeito",
        "Vazamento de gás refrigerante",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Evaporador congelado",
        "Termostato descalibrado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Vedação da porta danificada",
        "Condensador sujo"
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      solucoes: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Diagnóstico completo do sistema",
        "Recarga de gás refrigerante",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Troca de compressor",
        "Limpeza de evaporador e condensador",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Substituição de borrachas de vedação",
        "Calibração de termostato"
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      urgencia: "Câmara fria sem refrigeração adequada representa risco de perda total dos produtos armazenados e problemas com a vigilância sanitária.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      equipamentoRelacionado: "câmaras frias e sistemas de refrigeração"
    },
import { useSiteSettings } from "@/hooks/useSiteSettings";
    metalfrio: {
      causas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Compressor com defeito",
        "Gás refrigerante insuficiente",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Termostato danificado",
        "Motor do ventilador queimado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Condensador obstruído"
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      solucoes: [
        "Diagnóstico do sistema de refrigeração",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Recarga de gás",
        "Troca de compressor",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Limpeza geral do sistema",
        "Substituição de termostato"
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      urgencia: "Refrigerador comercial sem função adequada compromete a qualidade dos produtos e pode gerar perdas financeiras.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      equipamentoRelacionado: "refrigeradores e freezers Metalfrio"
    },
import { useSiteSettings } from "@/hooks/useSiteSettings";
    progas: {
      causas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Resistência queimada",
        "Termostato com defeito",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Ventilador parado",
        "Sensor de temperatura danificado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Placa eletrônica com problema"
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      solucoes: [
        "Diagnóstico elétrico completo",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Troca de resistências",
        "Substituição de termostato",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Reparo do motor do ventilador",
        "Calibração de sensores"
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      urgencia: "Forno ou fritadeira sem aquecimento paralisa a produção e impacta diretamente o faturamento.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      equipamentoRelacionado: "fornos e fritadeiras Progás"
    },
import { useSiteSettings } from "@/hooks/useSiteSettings";
    tramontina: {
      causas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Resistência de aquecimento queimada",
        "Termostato descalibrado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Vedação danificada",
        "Sensor de temperatura com defeito",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Conexões elétricas soltas"
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      solucoes: [
        "Diagnóstico do sistema de aquecimento",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Troca de resistências",
        "Calibração de termostato",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Verificação das conexões elétricas",
        "Substituição de vedações"
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      urgencia: "Equipamento de buffet sem aquecimento compromete a qualidade e segurança alimentar do serviço.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      equipamentoRelacionado: "banhos-maria e equipamentos Tramontina"
    },
import { useSiteSettings } from "@/hooks/useSiteSettings";
    cozil: {
      causas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Compressor com defeito",
        "Sistema de degelo com problema",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Gás refrigerante insuficiente",
        "Controlador eletrônico danificado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Ventilador do evaporador parado"
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      solucoes: [
        "Diagnóstico do sistema de refrigeração",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Reparo do sistema de degelo",
        "Recarga de gás refrigerante",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Troca de compressor",
        "Substituição de controlador"
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      urgencia: "Freezer industrial com problema compromete toda a cadeia de armazenamento e pode gerar perdas significativas.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      equipamentoRelacionado: "freezers e refrigeradores Cozil"
    },
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pecas: {
      causas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Desgaste natural do componente",
        "Sobrecarga elétrica",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Falta de manutenção preventiva",
        "Instalação inadequada",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Uso incorreto do equipamento"
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      solucoes: [
        "Diagnóstico preciso do problema",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Identificação da peça correta",
        "Substituição por peça original ou compatível",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Teste completo após instalação",
        "Orientação para evitar reincidência"
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      urgencia: "Componente crítico com defeito pode causar parada total do equipamento e danos maiores se não tratado rapidamente.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      equipamentoRelacionado: "equipamentos industriais de cozinha"
    }
import { useSiteSettings } from "@/hooks/useSiteSettings";
  };

import { useSiteSettings } from "@/hooks/useSiteSettings";
  return categoryTexts[page.categoria] || categoryTexts["camaras-frias"];
};
import { useSiteSettings } from "@/hooks/useSiteSettings";

export default function SeoSymptomTemplate() {
import { useSiteSettings } from "@/hooks/useSiteSettings";
  const { slug } = useParams<{ slug: string }>();
  
import { useSiteSettings } from "@/hooks/useSiteSettings";
  if (!slug) {
    return <Navigate to="/404" replace />;
import { useSiteSettings } from "@/hooks/useSiteSettings";
  }

import { useSiteSettings } from "@/hooks/useSiteSettings";
  const page = getPageBySlug(slug);

import { useSiteSettings } from "@/hooks/useSiteSettings";
  if (!page) {
    return <Navigate to="/404" replace />;
import { useSiteSettings } from "@/hooks/useSiteSettings";
  }

import { useSiteSettings } from "@/hooks/useSiteSettings";
  const content = getCategoryContent(page);
  const whatsappMessage = encodeURIComponent(
import { useSiteSettings } from "@/hooks/useSiteSettings";
    `Olá! Preciso de ajuda urgente. Meu ${page.equipamento} está com problema: ${page.sintoma}. Estou em ${page.cidade}.`
  );
import { useSiteSettings } from "@/hooks/useSiteSettings";

  // Schema.org LocalBusiness + Service
import { useSiteSettings } from "@/hooks/useSiteSettings";
  const schemaOrg = {
    "@context": "https://schema.org",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    "@type": "LocalBusiness",
    "name": "WeDo Manutenção de Cozinhas Profissionais",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    "description": page.metaDescription,
    "url": `https://wedocorp.com.br/${page.slug}`,
import { useSiteSettings } from "@/hooks/useSiteSettings";
    "telephone": "+55 62 99377-5711",
    "address": {
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "@type": "PostalAddress",
      "addressLocality": page.cidade,
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "addressRegion": page.cidade.includes("Brasília") ? "DF" : "GO",
      "addressCountry": "BR"
import { useSiteSettings } from "@/hooks/useSiteSettings";
    },
    "areaServed": {
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "@type": "City",
      "name": page.cidade
import { useSiteSettings } from "@/hooks/useSiteSettings";
    },
    "hasOfferCatalog": {
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "@type": "OfferCatalog",
      "name": `Conserto de ${page.equipamento}`,
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "itemListElement": [
        {
import { useSiteSettings } from "@/hooks/useSiteSettings";
          "@type": "Offer",
          "itemOffered": {
import { useSiteSettings } from "@/hooks/useSiteSettings";
            "@type": "Service",
            "name": `Conserto de ${page.equipamento} - ${page.sintoma}`,
import { useSiteSettings } from "@/hooks/useSiteSettings";
            "description": `Serviço especializado para ${page.equipamento} com problema de ${page.sintoma.toLowerCase()} em ${page.cidade}`
          }
import { useSiteSettings } from "@/hooks/useSiteSettings";
        }
      ]
import { useSiteSettings } from "@/hooks/useSiteSettings";
    }
  };
import { useSiteSettings } from "@/hooks/useSiteSettings";

  return (
import { useSiteSettings } from "@/hooks/useSiteSettings";
    <Layout>
      <Helmet>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <title>{page.title}</title>
        <meta name="description" content={page.metaDescription} />
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://wedocorp.com.br/${page.slug}`} />
import { useSiteSettings } from "@/hooks/useSiteSettings";
        
        {/* Open Graph */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.metaDescription} />
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://wedocorp.com.br/${page.slug}`} />
import { useSiteSettings } from "@/hooks/useSiteSettings";
        
        {/* Schema.org */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <script type="application/ld+json">
          {JSON.stringify(schemaOrg)}
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </script>
      </Helmet>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Breadcrumb */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <div className="bg-muted/50 py-3">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-accent">Início</Link>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <span className="mx-2">/</span>
            <Link to="/locais-atendimento" className="hover:text-accent">{page.cidade}</Link>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <span className="mx-2">/</span>
            <span className="text-foreground">{page.sintoma}</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </nav>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </div>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary py-16 lg:py-24">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo">
          <div className="max-w-4xl mx-auto text-center">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            {/* Badge de Urgência */}
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <AlertTriangle className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">Atendimento Emergencial Disponível</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </div>

import { useSiteSettings } from "@/hooks/useSiteSettings";
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              {page.h1}
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </h1>

import { useSiteSettings } from "@/hooks/useSiteSettings";
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Técnicos certificados com atendimento em até 4 horas. 
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Diagnóstico preciso e conserto com peças originais.
            </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";

            {/* CTAs */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
import { useSiteSettings } from "@/hooks/useSiteSettings";
                asChild
                size="lg"
import { useSiteSettings } from "@/hooks/useSiteSettings";
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
              >
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <a href={`${WHATSAPP_URL}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  Chamar no WhatsApp
                </a>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </Button>
              <Button
import { useSiteSettings } from "@/hooks/useSiteSettings";
                asChild
                size="lg"
import { useSiteSettings } from "@/hooks/useSiteSettings";
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
import { useSiteSettings } from "@/hooks/useSiteSettings";
              >
                <a href="tel:+5562993775711">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <Phone className="w-5 h-5 mr-2" />
                  (62) 99377-5711
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </a>
              </Button>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </div>

import { useSiteSettings } from "@/hooks/useSiteSettings";
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Clock className="w-5 h-5 text-accent" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <span>Atendimento em até 4h</span>
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Shield className="w-5 h-5 text-accent" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <span>Garantia de 90 dias no serviço</span>
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-accent" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <span>Atendemos {page.cidade}</span>
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </div>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Urgência Section */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="py-12 bg-destructive/10 border-y border-destructive/20">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="max-w-3xl mx-auto text-center">
            <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Por que você não deve esperar?
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </h2>
            <p className="text-lg text-muted-foreground">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              {content.urgencia}
            </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </section>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* Causas e Soluções */}
      <section className="py-16 lg:py-24">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo">
          <div className="grid md:grid-cols-2 gap-12">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            {/* Causas */}
            <div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Possíveis Causas do Problema
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </h2>
              <p className="text-muted-foreground mb-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                Quando seu {page.equipamento.toLowerCase()} apresenta o sintoma de "{page.sintoma.toLowerCase()}", 
                as causas mais comuns são:
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </p>
              <ul className="space-y-3">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                {content.causas.map((causa, index) => (
                  <li key={index} className="flex items-start gap-3">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{causa}</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  </li>
                ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </ul>
            </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

            {/* Soluções */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                Como a WeDo Resolve
              </h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <p className="text-muted-foreground mb-6">
                Nossa equipe técnica especializada em {content.equipamentoRelacionado} segue um processo rigoroso:
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </p>
              <ul className="space-y-3">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                {content.solucoes.map((solucao, index) => (
                  <li key={index} className="flex items-start gap-3">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{solucao}</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  </li>
                ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </ul>
            </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </section>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* Diferenciais */}
      <section className="py-16 lg:py-24 bg-muted/30">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-12">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            Por Que Escolher a WeDo em {page.cidade}?
          </h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";

          <div className="grid md:grid-cols-3 gap-8">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6 text-center">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Atendimento Rápido</h3>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <p className="text-muted-foreground">
                  Técnicos em {page.cidade} com chegada em até 4 horas para casos urgentes.
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </p>
              </CardContent>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </Card>

import { useSiteSettings } from "@/hooks/useSiteSettings";
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6 text-center">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-accent" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Técnicos Certificados</h3>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <p className="text-muted-foreground">
                  Equipe treinada pelos principais fabricantes com certificações atualizadas.
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </p>
              </CardContent>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </Card>

import { useSiteSettings } from "@/hooks/useSiteSettings";
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6 text-center">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </div>
                <h3 className="text-xl font-semibold mb-2">Garantia de Serviço</h3>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <p className="text-muted-foreground">
                  90 dias de garantia em todos os nossos serviços. Documentação completa para auditorias.
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </p>
              </CardContent>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </Card>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* CTA Final */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Não Deixe Seu {page.equipamento} Parado
            </h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <p className="text-lg text-primary-foreground/80 mb-8">
              Fale agora com um técnico especializado e resolva o problema de 
import { useSiteSettings } from "@/hooks/useSiteSettings";
              "{page.sintoma.toLowerCase()}" hoje mesmo.
            </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <Button
                asChild
import { useSiteSettings } from "@/hooks/useSiteSettings";
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
import { useSiteSettings } from "@/hooks/useSiteSettings";
              >
                <a href={`${WHATSAPP_URL}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicitar Orçamento Grátis
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </a>
              </Button>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <Button
                asChild
import { useSiteSettings } from "@/hooks/useSiteSettings";
                size="lg"
                variant="outline"
import { useSiteSettings } from "@/hooks/useSiteSettings";
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                  Ver Todos os Canais
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </Button>
            </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </section>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* Links Relacionados */}
      <section className="py-12 bg-muted/30">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo">
          <h3 className="text-lg font-semibold text-foreground mb-4">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            Outros Problemas Comuns em {page.cidade}:
          </h3>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="flex flex-wrap gap-2">
            {page.categoria === "rational" && (
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <>
                <Link to="/assistencia-tecnica-rational" className="text-sm text-accent hover:underline">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  Assistência Técnica Rational →
                </Link>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </>
            )}
import { useSiteSettings } from "@/hooks/useSiteSettings";
            {page.categoria === "camaras-frias" && (
              <>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <Link to="/manutencao-camaras-frias" className="text-sm text-accent hover:underline">
                  Manutenção de Câmaras Frias →
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </Link>
              </>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            )}
            <Link to="/contratos-pcm" className="text-sm text-accent hover:underline">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Contratos de Manutenção Preventiva →
            </Link>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <Link to="/locais-atendimento" className="text-sm text-accent hover:underline">
              Locais de Atendimento →
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </Link>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";
    </Layout>
  );
import { useSiteSettings } from "@/hooks/useSiteSettings";
}
