import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
import { useSiteSettings } from "@/hooks/useSiteSettings";
  Accordion,
  AccordionContent,
import { useSiteSettings } from "@/hooks/useSiteSettings";
  AccordionItem,
  AccordionTrigger,
import { useSiteSettings } from "@/hooks/useSiteSettings";
} from "@/components/ui/accordion";
import {
import { useSiteSettings } from "@/hooks/useSiteSettings";
  Flame,
  Clock,
import { useSiteSettings } from "@/hooks/useSiteSettings";
  Shield,
  CheckCircle,
import { useSiteSettings } from "@/hooks/useSiteSettings";
  AlertTriangle,
  Phone,
import { useSiteSettings } from "@/hooks/useSiteSettings";
  Wrench,
  Zap,
import { useSiteSettings } from "@/hooks/useSiteSettings";
  FileCheck,
  MessageCircle,
import { useSiteSettings } from "@/hooks/useSiteSettings";
} from "lucide-react";

import { useSiteSettings } from "@/hooks/useSiteSettings";
const WHATSAPP_URL = "https://wa.me/5562993775711";

import { useSiteSettings } from "@/hooks/useSiteSettings";
const equipamentos = [
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    id: "fogoes",
    titulo: "Fogões Industriais Vulcan",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    conteudo: {
      descricao: "Os fogões Vulcan são referência mundial em equipamentos de cocção profissional, com construção pesada e durabilidade excepcional para cozinhas de alta demanda.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      modelos: [
        { nome: "V Series (Econômico)", specs: "4-10 queimadores • Uso padrão • Custo-benefício" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "Endurance Series", specs: "Heavy-duty • Alta produção • Durabilidade máxima" },
        { nome: "Restaurant Range", specs: "Premium • Forno convecção • Uso intensivo" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      tecnologias: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Queimadores duplo anel alta potência",
        "Grades ferro fundido pesadas",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Forno convecção ou standard",
        "Válvulas milimetradas precisas",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Acendimento piloto ou piezo",
        "Construção aço inox pesado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      servicos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Manutenção preventiva semestral/anual",
        "Conversão GLP ↔ Gás Natural",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Troca válvulas e injetores",
        "Calibração chamas e temperatura",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Teste vazamentos (detector gás)",
        "Reparo forno (resistências, termostato)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Certificação NR13 quando aplicável",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      pecas: [
        "Queimadores completos",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Válvulas (Robertshaw, Sabaf)",
        "Injetores GLP/GN",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Termostatos forno",
        "Grades ferro fundido",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Peças ignição",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    },
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    id: "chapas",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Chapas e Griddles Vulcan",
    conteudo: {
import { useSiteSettings } from "@/hooks/useSiteSettings";
      descricao: "Chapas Vulcan para cocção por contato direto, ideais para hambúrgueres, carnes, ovos e panquecas em cozinhas de alta demanda.",
      modelos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "MSA Series", specs: "Manual • Aço carbono • Econômico" },
        { nome: "VACB Series", specs: "Termostato • Controle preciso • Produção" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "VHP Series", specs: "Alta potência • Inox • Heavy-duty" },
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      tecnologias: [
        "Chapa 3/4\" aço polido",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Termostato até 550°F (287°C)",
        "Queimadores U-shape alta eficiência",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Zona fria para descarte gordura",
        "Construção toda em aço inox",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Recuperação rápida temperatura",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      servicos: [
        "Manutenção preventiva trimestral",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Temperagem/cura chapa (seasoning)",
        "Calibração termostato",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Troca queimadores tubulares",
        "Nivelamento e ajuste chapa",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Limpeza profunda sistema gás",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      pecas: [
        "Queimadores U-shape",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Termostatos",
        "Válvulas gás",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Peças ignição",
        "Knobs e controles",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
    },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    id: "fritadeiras",
    titulo: "Fritadeiras Vulcan",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    conteudo: {
      descricao: "Fritadeiras Vulcan de alta performance para operações de grande volume, com sistemas de filtragem e controle preciso de temperatura.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      modelos: [
        { nome: "LG Series", specs: "35-90 lbs • Gás • Floor model" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "EV Series", specs: "Elétrica • Bancada • Alta eficiência" },
        { nome: "PowerFry Series", specs: "Heavy-duty • Filtragem integrada • Premium" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      tecnologias: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Zona fria profunda (protege óleo)",
        "Termostato snap-action preciso",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Sistema filtragem óleo integrado",
        "Tubos de aquecimento articulados",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Construção toda inox 304",
        "Dreno rápido frontal",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      servicos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Manutenção preventiva trimestral",
        "Calibração termostato",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Troca tubos aquecimento",
        "Reparo sistema filtragem",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Limpeza profunda cuba e dreno",
        "Teste segurança high-limit",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      pecas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Tubos aquecimento",
        "Termostatos/high-limit",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Válvulas gás",
        "Cestos fritura",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Filtros e componentes",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    },
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    id: "char-broilers",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Char Broilers e Grills",
    conteudo: {
import { useSiteSettings } from "@/hooks/useSiteSettings";
      descricao: "Char broilers Vulcan para carnes grelhadas com sabor autêntico de brasa, essenciais em steakhouses e churrascarias.",
      modelos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "VACB Series", specs: "Infrared • Alta temperatura • Carnes" },
        { nome: "VHP Series", specs: "Radiant • Versatil • Produção" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      tecnologias: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Queimadores infrared cerâmicos",
        "Temperatura até 900°F (482°C)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Grades reversíveis (marca grelhado)",
        "Coletor gordura removível",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Radiantes cerâmicos duráveis",
        "Construção heavy-duty",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      servicos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Manutenção preventiva",
        "Troca radiantes cerâmicos",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Limpeza sistema gás",
        "Calibração temperatura",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Substituição grades",
        "Teste segurança",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      pecas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Radiantes cerâmicos",
        "Queimadores",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Grades reversíveis",
        "Válvulas e controles",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
    },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

const problemasComuns = [
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    titulo: "Chama Amarela ou Irregular",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    sintomas: [
      "Chama amarelada ao invés de azul",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Chama oscilando",
      "Barulho na combustão",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    causas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Ar primário desregulado",
      "Queimador sujo/entupido",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Injetor obstruído",
      "Pressão gás incorreta",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    solucoes: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Ajuste registro ar primário",
      "Limpeza profunda queimadores",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Desobstrução injetores",
      "Verificação pressão regulador",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    titulo: "Equipamento Não Acende",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    sintomas: [
      "Piloto não acende",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Piezoelétrico não funciona",
      "Chama apaga ao soltar botão",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    causas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Termopar defeituoso",
      "Piezoelétrico queimado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Válvula piloto travada",
      "Termopar desposicionado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    solucoes: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Teste e troca termopar",
      "Substituição piezoelétrico",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Limpeza/troca válvula piloto",
      "Reposicionamento termopar",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    titulo: "Temperatura Incorreta",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    sintomas: [
      "Forno não atinge temperatura",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Chapa aquece demais",
      "Fritadeira não mantém temp",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    causas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Termostato descalibrado",
      "Sensor temperatura defeituoso",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Válvula moduladora com falha",
      "Isolamento danificado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    solucoes: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Calibração termostato",
      "Troca sensor/sonda",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Substituição válvula",
      "Reparo isolamento térmico",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
];

import { useSiteSettings } from "@/hooks/useSiteSettings";
const diferenciais = [
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    icon: Flame,
    titulo: "Especialistas Vulcan",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    descricao: "Técnicos com experiência em toda linha de cocção profissional.",
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    icon: Zap,
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Conversão GLP/GN",
    descricao: "Serviço certificado de conversão entre tipos de gás.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    icon: Shield,
    titulo: "Peças Originais",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    descricao: "Componentes originais Vulcan para reposição imediata.",
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    icon: FileCheck,
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Certificação NR13",
    descricao: "Documentação técnica para equipamentos sob pressão.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

const planosPCM = [
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    nome: "Essencial",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    beneficios: [
      "2 manutenções preventivas/ano",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Limpeza e inspeção gás",
      "Desconto 20% peças",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Atendimento em horário comercial",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    nome: "Profissional",
    destaque: true,
import { useSiteSettings } from "@/hooks/useSiteSettings";
    beneficios: [
      "4 manutenções preventivas/ano",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Calibração temperatura",
      "Desconto 30% peças",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "1 corretiva inclusa/ano",
      "Atendimento prioritário",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    nome: "Corporativo",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    beneficios: [
      "6 manutenções preventivas/ano",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Teste vazamentos incluso",
      "Desconto 40% peças",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Corretivas inclusas",
      "Atendimento express",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
];

import { useSiteSettings } from "@/hooks/useSiteSettings";
const faqItems = [
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "Qual a diferença entre fogões Vulcan V Series e Endurance?",
    resposta: "V Series é a linha de entrada com excelente custo-benefício para uso padrão. Endurance é heavy-duty, construída para uso intensivo 24/7 com maior durabilidade e potência dos queimadores.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "Vocês fazem conversão de GLP para Gás Natural?",
    resposta: "Sim, realizamos conversão completa com troca de injetores, ajuste de regulador de pressão, calibração de chamas e emissão de ART. Serviço certificado conforme normas.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "Com que frequência devo fazer manutenção em fogão industrial?",
    resposta: "Uso intensivo (>12h/dia): semestral. Uso padrão: anual. Inclui limpeza queimadores, teste válvulas, verificação vazamentos e calibração chamas.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "Chapa Vulcan está empenando. O que fazer?",
    resposta: "Empenamento ocorre por superaquecimento ou choque térmico. Prevenção: aquecer gradualmente, não jogar água fria em chapa quente. WeDo verifica nivelamento e orienta uso correto.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "Qual a vida útil de equipamentos Vulcan?",
    resposta: "Com manutenção adequada, fogões e chapas Vulcan duram 15-20 anos. Fritadeiras 10-15 anos. A qualidade de construção heavy-duty justifica o investimento inicial.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

export default function AssistenciaTecnicaVulcan() {
import { useSiteSettings } from "@/hooks/useSiteSettings";
  const whatsappMessage = encodeURIComponent(
    "Olá! Preciso de assistência técnica para meu equipamento Vulcan."
import { useSiteSettings } from "@/hooks/useSiteSettings";
  );

import { useSiteSettings } from "@/hooks/useSiteSettings";
  return (
    <Layout>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <Helmet>
        <title>Assistência Técnica Vulcan | Manutenção Fogões Chapas Fritadeiras Industriais | WeDo</title>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <meta
          name="description"
import { useSiteSettings } from "@/hooks/useSiteSettings";
          content="Assistência técnica especializada Vulcan Brasil. Manutenção preventiva e corretiva para fogões, chapas, fritadeiras e char broilers industriais. Peças originais, técnicos certificados."
        />
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <meta
          name="keywords"
import { useSiteSettings } from "@/hooks/useSiteSettings";
          content="assistência técnica vulcan, manutenção vulcan, fogão vulcan, chapa vulcan, fritadeira vulcan industrial"
        />
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <link rel="canonical" href="https://wedocorp.com.br/assistencia-tecnica-vulcan" />
      </Helmet>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Hero Section */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>

import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo relative z-10">
          <div className="max-w-4xl mx-auto text-center">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Flame className="w-5 h-5 text-accent" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <span className="text-accent font-medium">Líder em Equipamentos de Cocção Profissional</span>
            </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Assistência Técnica Vulcan
              <span className="block text-accent mt-2">Fogões, Chapas, Fritadeiras e Grills</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </h1>

import { useSiteSettings } from "@/hooks/useSiteSettings";
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em toda linha Vulcan de equipamentos de cocção. 
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Conversão GLP/GN, calibração e peças originais.
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
                  Solicitar Orçamento
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
                <a href="tel:+5562993775711">
                  <Phone className="w-5 h-5 mr-2" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  (62) 99377-5711
                </a>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </Button>
            </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

            {/* Trust badges */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 text-primary-foreground/70">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <Clock className="w-5 h-5 text-accent" />
                <span>Atendimento Rápido</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <Shield className="w-5 h-5 text-accent" />
                <span>Peças Originais</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <Zap className="w-5 h-5 text-accent" />
                <span>Conversão GLP/GN</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </div>
            </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </section>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* Diferenciais */}
      <section className="py-12 bg-muted/30">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            {diferenciais.map((item, index) => (
              <div key={index} className="text-center">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-7 h-7 text-accent" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.titulo}</h3>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <p className="text-sm text-muted-foreground">{item.descricao}</p>
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            ))}
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Equipamentos Accordion */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="py-16 lg:py-24">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Equipamentos Vulcan Atendidos
            </h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manutenção especializada para toda linha de equipamentos de cocção Vulcan.
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </p>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

          <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            {equipamentos.map((equip) => (
              <AccordionItem
import { useSiteSettings } from "@/hooks/useSiteSettings";
                key={equip.id}
                value={equip.id}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                className="border rounded-xl px-6 bg-card shadow-sm"
              >
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center gap-3">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <Flame className="w-6 h-6 text-accent flex-shrink-0" />
                    {equip.titulo}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  </div>
                </AccordionTrigger>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <AccordionContent className="pb-6">
                  <div className="space-y-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <p className="text-muted-foreground">{equip.conteudo.descricao}</p>

import { useSiteSettings } from "@/hooks/useSiteSettings";
                    {/* Modelos */}
                    <div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      <h4 className="font-semibold text-foreground mb-3">Modelos Atendidos:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        {equip.conteudo.modelos.map((modelo, idx) => (
                          <div key={idx} className="bg-muted/50 rounded-lg p-3">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                            <p className="font-medium text-foreground">{modelo.nome}</p>
                            <p className="text-sm text-muted-foreground">{modelo.specs}</p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          </div>
                        ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      </div>
                    </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

                    {/* Tecnologias */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Características:</h4>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      <ul className="grid md:grid-cols-2 gap-2">
                        {equip.conteudo.tecnologias.map((tec, idx) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                            <span className="text-muted-foreground">{tec}</span>
                          </li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        ))}
                      </ul>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    </div>

import { useSiteSettings } from "@/hooks/useSiteSettings";
                    {/* Serviços */}
                    <div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      <h4 className="font-semibold text-foreground mb-3">Serviços WeDo:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        {equip.conteudo.servicos.map((serv, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                            <Wrench className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{serv}</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          </li>
                        ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      </ul>
                    </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

                    {/* Peças */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Peças em Estoque:</h4>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      <div className="flex flex-wrap gap-2">
                        {equip.conteudo.pecas.map((peca, idx) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          <span
                            key={idx}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                            className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full"
                          >
import { useSiteSettings } from "@/hooks/useSiteSettings";
                            {peca}
                          </span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        ))}
                      </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    </div>
                  </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </AccordionContent>
              </AccordionItem>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            ))}
          </Accordion>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Problemas Comuns */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Problemas Comuns que Resolvemos
            </h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>

import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problemasComuns.map((problema, index) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    {problema.titulo}
                  </CardTitle>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </CardHeader>
                <CardContent className="space-y-4">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Sintomas:</p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <ul className="space-y-1">
                      {problema.sintomas.map((s, idx) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-destructive">•</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          {s}
                        </li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      ))}
                    </ul>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  </div>
                  <div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <p className="text-sm font-medium text-foreground mb-2">Solução WeDo:</p>
                    <ul className="space-y-1">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      {problema.solucoes.slice(0, 3).map((s, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                          {s}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        </li>
                      ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    </ul>
                  </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </CardContent>
              </Card>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            ))}
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Planos PCM */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="py-16 lg:py-24">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Contratos de Manutenção PCM
            </h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>

import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {planosPCM.map((plano, index) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <Card
                key={index}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                className={`relative ${plano.destaque ? "border-2 border-accent shadow-xl" : "border shadow-lg"}`}
              >
import { useSiteSettings } from "@/hooks/useSiteSettings";
                {plano.destaque && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    Mais Popular
                  </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                )}
                <CardHeader className="text-center">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <CardTitle className="text-xl">{plano.nome}</CardTitle>
                </CardHeader>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <CardContent>
                  <ul className="space-y-3">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    {plano.beneficios.map((beneficio, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{beneficio}</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      </li>
                    ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  </ul>
                  <Button
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    asChild
                    className={`w-full mt-6 ${plano.destaque ? "bg-accent hover:bg-accent/90" : ""}`}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    variant={plano.destaque ? "default" : "outline"}
                  >
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                      Solicitar Proposta
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    </a>
                  </Button>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </CardContent>
              </Card>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            ))}
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* FAQ */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Perguntas Frequentes - Vulcan
            </h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>

import { useSiteSettings } from "@/hooks/useSiteSettings";
          <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-3">
            {faqItems.map((item, index) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <AccordionItem
                key={index}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                value={`faq-${index}`}
                className="border rounded-lg px-4 bg-card"
import { useSiteSettings } from "@/hooks/useSiteSettings";
              >
                <AccordionTrigger className="text-left hover:no-underline">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  {item.pergunta}
                </AccordionTrigger>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <AccordionContent className="text-muted-foreground">
                  {item.resposta}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </AccordionContent>
              </AccordionItem>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            ))}
          </Accordion>
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
              Precisa de Assistência Técnica para seu Equipamento Vulcan?
            </h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <p className="text-lg text-primary-foreground/80 mb-8">
              Entre em contato agora e receba atendimento especializado para fogões, chapas, fritadeiras e grills.
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </p>

import { useSiteSettings } from "@/hooks/useSiteSettings";
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
import { useSiteSettings } from "@/hooks/useSiteSettings";
                asChild
                size="lg"
import { useSiteSettings } from "@/hooks/useSiteSettings";
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <a href={`${WHATSAPP_URL}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  Falar com Especialista
                </a>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </Button>
              <Button
import { useSiteSettings } from "@/hooks/useSiteSettings";
                asChild
                size="lg"
import { useSiteSettings } from "@/hooks/useSiteSettings";
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
import { useSiteSettings } from "@/hooks/useSiteSettings";
              >
                <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  Todos os Canais de Atendimento
                </a>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </Button>
            </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </section>
    </Layout>
import { useSiteSettings } from "@/hooks/useSiteSettings";
  );
}
