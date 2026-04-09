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
  Droplets,
  Snowflake,
import { useSiteSettings } from "@/hooks/useSiteSettings";
  Clock,
  Shield,
import { useSiteSettings } from "@/hooks/useSiteSettings";
  CheckCircle,
  AlertTriangle,
import { useSiteSettings } from "@/hooks/useSiteSettings";
  Phone,
  Wrench,
import { useSiteSettings } from "@/hooks/useSiteSettings";
  Zap,
  FileCheck,
import { useSiteSettings } from "@/hooks/useSiteSettings";
  MessageCircle,
  ThermometerSnowflake,
import { useSiteSettings } from "@/hooks/useSiteSettings";
} from "lucide-react";

import { useSiteSettings } from "@/hooks/useSiteSettings";
const WHATSAPP_URL = "https://wa.me/5562993775711";

import { useSiteSettings } from "@/hooks/useSiteSettings";
const equipamentos = [
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    id: "forst",
    titulo: "Fornos Combinados FORST - Combi Ovens Prática",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    conteudo: {
      descricao: "Os Fornos Combinados FORST são a linha principal da Prática, oferecendo tecnologia de vapor, ar quente e combinado para cocção profissional com máxima eficiência e versatilidade.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      modelos: [
        { nome: "FORST 6 GN's", specs: "Compacto • Elétrico/Gás • Restaurantes pequenos" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "FORST 10 GN's", specs: "Médio • Elétrico/Gás • Restaurantes e hotéis" },
        { nome: "FORST 20 GN's", specs: "Grande • Elétrico/Gás • Produção industrial" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "FORST Advanced", specs: "Touchscreen • Receitas programáveis • HACCP" },
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      tecnologias: [
        "3 modos de cocção: Vapor, Ar Quente, Combinado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Injeção direta de vapor (boiler integrado)",
        "Painel digital/touchscreen programável",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Sonda núcleo multipontos",
        "Sistema de limpeza automática",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Controle de umidade preciso",
        "Registro HACCP automático",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Receitas programáveis (até 99 programas)",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      servicos: [
        "Manutenção preventiva trimestral",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Limpeza e descalcificação do boiler",
        "Calibração de sondas e sensores",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Reparo sistema de vapor",
        "Substituição de resistências",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Troca de válvulas solenoides",
        "Reparo/troca de painel eletrônico",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Manutenção motor turbina",
        "Troca de vedações de porta",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      pecas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Resistências de aquecimento",
        "Sondas de temperatura núcleo",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Válvulas solenoides vapor/água",
        "Bombas boiler",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Turbinas/motores ventilação",
        "Placas eletrônicas",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Vedações de porta (silicone)",
        "Sensores de nível",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Controladores de temperatura",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    },
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    id: "prcop",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Lavadoras PRCOP - Copeiras Profissionais",
    conteudo: {
import { useSiteSettings } from "@/hooks/useSiteSettings";
      descricao: "As Lavadoras PRCOP são as copeiras profissionais mais vendidas no Brasil, com ciclos rápidos (55 a 90 segundos) e baixíssimo consumo de água (2,4 litros/ciclo).",
      modelos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "PRCOP 404", specs: "9 pratos/ciclo • Compacta • Ideal para bares e cafeterias" },
        { nome: "PRCOP 504", specs: "18 pratos/ciclo • Mais Vendida • Restaurantes e hotéis" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "PRCOP 604", specs: "22 pratos/ciclo • Alta Produção • Hospitais e catering" },
        { nome: "PRCOP 704", specs: "30+ pratos/ciclo • Industrial • Grande produção" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      tecnologias: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Display LED digital temperatura e ciclos",
        "Sistema booster (aquecimento rápido 85°C enxágue)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Dosadora detergente/abrilhantador automática",
        "Filtro autolimpante cilíndrico",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Construção inox 304",
        "Consumo ultra-baixo: 2,4 litros/ciclo",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      servicos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Manutenção preventiva mensal/trimestral",
        "Limpeza técnica profunda (remoção calcário)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Calibração temperatura booster",
        "Reparo/substituição bomba lavagem",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Troca resistências (lavagem/booster)",
        "Substituição eletroválvulas",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Reparo sistema dosador químico",
        "Análise qualidade água (TDS, dureza)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      pecas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Resistências lavagem e booster",
        "Bombas lavagem (motores)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Eletroválvulas entrada água",
        "Braços aspersão",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Filtros cilíndricos",
        "Bombas dosadoras químicas",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Placas eletrônicas",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    },
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    id: "ultracongeladores",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Ultracongeladores Prática - Abatimento de Temperatura",
    conteudo: {
import { useSiteSettings } from "@/hooks/useSiteSettings";
      descricao: "Os Ultracongeladores Prática são abatedores rápidos de temperatura para conservação, resfriamento e congelamento profissional com registro HACCP automático.",
      modelos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "5 Bandejas", specs: "Compacto • Restaurantes menores" },
        { nome: "10 Bandejas", specs: "Padrão • Cozinhas médias" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "20 Bandejas", specs: "Industrial • Grande produção" },
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      tecnologias: [
        "Resfriamento: +90°C até +3°C",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Ultracongelamento: +90°C até -18°C",
        "Conservação programada",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Descongelamento controlado",
        "Painel touchscreen digital",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Registro HACCP automático",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      servicos: [
        "Manutenção sistema frigorífico",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Calibração sondas temperatura",
        "Carga gás refrigerante",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Troca compressor",
        "Limpeza evaporador/condensador",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Reparo painel touchscreen",
        "Configuração ciclos personalizados",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      pecas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Compressores",
        "Sondas temperatura",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Válvulas expansão",
        "Evaporadores",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Placas eletrônicas",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    },
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    id: "speed-oven",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Fornos Speed Oven - Micro-ondas + Convecção",
    conteudo: {
import { useSiteSettings } from "@/hooks/useSiteSettings";
      descricao: "Os Speed Oven Prática combinam micro-ondas profissional + convecção forçada para cocção ultra-rápida mantendo qualidade. Cocção até 10x mais rápida.",
      modelos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "Speed Oven Compacto", specs: "Cafeterias e conveniências" },
        { nome: "Speed Oven Profissional", specs: "Fast food e padarias express" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      tecnologias: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Sistema combinado micro + ar quente",
        "Cocção até 10x mais rápida",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Painel digital programável",
        "Múltiplos programas pré-set",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Construção robusta inox",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      servicos: [
        "Manutenção magnetron micro-ondas",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Calibração potência",
        "Teste isolamento RF",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Troca turbina convecção",
        "Reparo painel eletrônico",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Substituição porta (vedação)",
        "Certificação segurança radiação",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      pecas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Magnetron",
        "Turbinas convecção",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Placas eletrônicas",
        "Vedações porta",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Componentes RF",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    },
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
];

import { useSiteSettings } from "@/hooks/useSiteSettings";
const problemasComuns = [
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Louças Saem Sujas/Manchadas",
    sintomas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Resíduos de alimentos",
      "Manchas brancas (calcário)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Gordura não sai",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    causas: [
      "Braços aspersão entupidos",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Pressão água insuficiente (< 2 bar)",
      "Temperatura baixa (< 60°C)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Dosagem detergente inadequada",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    solucoes: [
      "Desmontagem e limpeza braços aspersão",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Teste pressão entrada água",
      "Calibração temperatura lavagem/booster",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Ajuste bomba dosadora química",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Não Aquece Água",
    sintomas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Louças saem frias",
      "Ciclo completa mas sem aquecimento",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Display não mostra temperatura",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    causas: [
      "Resistência lavagem/booster queimada",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Sonda temperatura defeituosa",
      "Contator resistência com falha",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Placa eletrônica",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    solucoes: [
      "Teste resistências (multímetro)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Verificação sondas temperatura (NTC)",
      "Teste contatores (voltagem/continuidade)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Substituição componentes defeituosos",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Não Enche Água",
    sintomas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Máquina não inicia ciclo",
      "Alarme falta água",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Enche muito devagar",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    causas: [
      "Eletroválvula entrada defeituosa",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Pressostato nível água",
      "Filtro entrada entupido",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Pressão rede insuficiente",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    solucoes: [
      "Teste eletroválvula (voltagem/solenoide)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Verificação pressostato",
      "Limpeza filtro tela entrada",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Medição pressão rede (mínimo 2 bar)",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

const diferenciais = [
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    icon: Droplets,
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Especialistas PRCOP",
    descricao: "Técnicos treinados nas linhas de lavadoras mais vendidas do Brasil.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    icon: ThermometerSnowflake,
    titulo: "Refrigeração Profissional",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    descricao: "Expertise em ultracongeladores e sistemas de abatimento de temperatura.",
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    icon: Shield,
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Peças Originais Prática",
    descricao: "Estoque completo de componentes originais para reposição imediata.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    icon: FileCheck,
    titulo: "Documentação Completa",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    descricao: "Relatórios técnicos para auditorias ANVISA e certificações.",
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
];

import { useSiteSettings } from "@/hooks/useSiteSettings";
const planosPCM = [
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    nome: "Essencial",
    beneficios: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "4 manutenções preventivas/ano",
      "Limpeza técnica profunda mensal",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Desconto 20% peças",
      "Atendimento em horário comercial",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    nome: "Profissional",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    destaque: true,
    beneficios: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "6 manutenções preventivas/ano",
      "Descalcificação trimestral",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Desconto 30% peças",
      "2 corretivas inclusas/ano",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Atendimento prioritário",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    nome: "Corporativo",
    beneficios: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Manutenção mensal personalizada",
      "Análise qualidade água inclusa",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Desconto 40% peças",
      "Mão de obra corretiva inclusa",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Atendimento express",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

const faqItems = [
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    pergunta: "Qual lavadora PRCOP escolher para meu restaurante?",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    resposta: "PRCOP 504 é a mais indicada para restaurantes padrão (até 100 refeições/dia). Para bares/cafeterias menores: PRCOP 404. Para grande produção (hospitais, catering 200+ refeições): PRCOP 604.",
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    pergunta: "Consumo de água PRCOP é realmente baixo?",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    resposta: "Sim, 2,4 litros por ciclo (PRCOP 504). Lavagem manual gasta 40-50L para mesma quantidade de louças. Economia de até 95% no consumo de água certificada.",
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    pergunta: "Qual frequência de limpeza técnica lavadora PRCOP?",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    resposta: "Mensal obrigatório para remoção de calcário e resíduos. Uso intensivo (>80 ciclos/dia) recomendamos quinzenal. Água dura exige descalcificação semanal.",
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    pergunta: "PRCOP não seca louças. É normal?",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    resposta: "Louças devem sair úmidas (não encharcadas) se temperatura booster atingir 85°C. Secagem completa depende de deixar louças no cesto após ciclo (calor residual evapora). Não é defeito.",
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    pergunta: "Vocês instalam sistema descalcificador para PRCOP?",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    resposta: "Sim, instalamos sistemas de descalcificação por resina ou osmose reversa. Fundamental para durabilidade de resistências e braços aspersão em águas com dureza > 50ppm CaCO3.",
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
];

import { useSiteSettings } from "@/hooks/useSiteSettings";
export default function AssistenciaTecnicaPratica() {
  const whatsappMessage = encodeURIComponent(
import { useSiteSettings } from "@/hooks/useSiteSettings";
    "Olá! Preciso de assistência técnica para meu equipamento Prática."
  );
import { useSiteSettings } from "@/hooks/useSiteSettings";

  return (
import { useSiteSettings } from "@/hooks/useSiteSettings";
    <Layout>
      <Helmet>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <title>Assistência Técnica Prática | Manutenção Lavadora PRCOP Ultracongelador | WeDo</title>
        <meta
import { useSiteSettings } from "@/hooks/useSiteSettings";
          name="description"
          content="Assistência técnica especializada Prática Brasil. Manutenção preventiva e corretiva para lavadoras louças PRCOP, ultracongeladores, fornos speed oven. Peças originais, técnicos certificados."
import { useSiteSettings } from "@/hooks/useSiteSettings";
        />
        <meta
import { useSiteSettings } from "@/hooks/useSiteSettings";
          name="keywords"
          content="assistência técnica prática, manutenção prática, lavadora louças prcop, prcop 504 manutenção, ultracongelador prática"
import { useSiteSettings } from "@/hooks/useSiteSettings";
        />
        <link rel="canonical" href="https://wedocorp.com.br/assistencia-tecnica-pratica" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </Helmet>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary py-16 lg:py-24 overflow-hidden">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

        <div className="container-wedo relative z-10">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <Droplets className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">Especialistas em Lavadoras PRCOP</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </div>

import { useSiteSettings } from "@/hooks/useSiteSettings";
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica Prática
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <span className="block text-accent mt-2">PRCOP, Ultracongeladores e Speed Oven</span>
            </h1>
import { useSiteSettings } from "@/hooks/useSiteSettings";

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Manutenção especializada nas lavadoras de louças mais vendidas do Brasil. 
              Técnicos certificados, peças originais e atendimento emergencial.
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </p>

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
                  Solicitar Orçamento
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
                <span>Peças Originais Prática</span>
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Zap className="w-5 h-5 text-accent" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <span>Diagnóstico Preciso</span>
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </div>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Diferenciais */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="py-12 bg-muted/30">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {diferenciais.map((item, index) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <h3 className="font-semibold text-foreground mb-1">{item.titulo}</h3>
                <p className="text-sm text-muted-foreground">{item.descricao}</p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </div>
            ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </section>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* Equipamentos Accordion */}
      <section className="py-16 lg:py-24">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo">
          <div className="text-center mb-12">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Equipamentos Prática Atendidos
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Manutenção especializada para toda linha de lavadoras, ultracongeladores e fornos Prática.
            </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>

import { useSiteSettings } from "@/hooks/useSiteSettings";
          <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
            {equipamentos.map((equip) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <AccordionItem
                key={equip.id}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                value={equip.id}
                className="border rounded-xl px-6 bg-card shadow-sm"
import { useSiteSettings } from "@/hooks/useSiteSettings";
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <div className="flex items-center gap-3">
                    {equip.id === "prcop" ? (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      <Droplets className="w-6 h-6 text-accent flex-shrink-0" />
                    ) : equip.id === "ultracongeladores" ? (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      <Snowflake className="w-6 h-6 text-accent flex-shrink-0" />
                    ) : (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      <Zap className="w-6 h-6 text-accent flex-shrink-0" />
                    )}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    {equip.titulo}
                  </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </AccordionTrigger>
                <AccordionContent className="pb-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <div className="space-y-6">
                    <p className="text-muted-foreground">{equip.conteudo.descricao}</p>
import { useSiteSettings } from "@/hooks/useSiteSettings";

                    {/* Modelos */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Modelos Atendidos:</h4>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      <div className="grid md:grid-cols-2 gap-3">
                        {equip.conteudo.modelos.map((modelo, idx) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          <div key={idx} className="bg-muted/50 rounded-lg p-3">
                            <p className="font-medium text-foreground">{modelo.nome}</p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                            <p className="text-sm text-muted-foreground">{modelo.specs}</p>
                          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        ))}
                      </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    </div>

import { useSiteSettings } from "@/hooks/useSiteSettings";
                    {/* Tecnologias */}
                    <div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      <h4 className="font-semibold text-foreground mb-3">Tecnologias:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        {equip.conteudo.tecnologias.map((tec, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{tec}</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          </li>
                        ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      </ul>
                    </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

                    {/* Serviços */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Serviços WeDo:</h4>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      <ul className="grid md:grid-cols-2 gap-2">
                        {equip.conteudo.servicos.map((serv, idx) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Wrench className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                            <span className="text-muted-foreground">{serv}</span>
                          </li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        ))}
                      </ul>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    </div>

import { useSiteSettings } from "@/hooks/useSiteSettings";
                    {/* Peças */}
                    <div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      <h4 className="font-semibold text-foreground mb-3">Peças Originais em Estoque:</h4>
                      <div className="flex flex-wrap gap-2">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        {equip.conteudo.pecas.map((peca, idx) => (
                          <span
import { useSiteSettings } from "@/hooks/useSiteSettings";
                            key={idx}
                            className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full"
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          >
                            {peca}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          </span>
                        ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      </div>
                    </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  </div>
                </AccordionContent>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </AccordionItem>
            ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </Accordion>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </section>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* Problemas Comuns */}
      <section className="py-16 lg:py-24 bg-muted/30">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo">
          <div className="text-center mb-12">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Problemas Comuns que Resolvemos
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Diagnóstico preciso e soluções definitivas para os principais problemas em equipamentos Prática.
            </p>
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
              Contratos de Manutenção PCM para Prática
            </h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Planos personalizados para manter seus equipamentos Prática sempre em perfeito funcionamento.
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </p>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            {planosPCM.map((plano, index) => (
              <Card
import { useSiteSettings } from "@/hooks/useSiteSettings";
                key={index}
                className={`relative ${plano.destaque ? "border-2 border-accent shadow-xl" : "border shadow-lg"}`}
import { useSiteSettings } from "@/hooks/useSiteSettings";
              >
                {plano.destaque && (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Mais Popular
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  </div>
                )}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plano.nome}</CardTitle>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </CardHeader>
                <CardContent>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <ul className="space-y-3">
                    {plano.beneficios.map((beneficio, idx) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        <span className="text-muted-foreground">{beneficio}</span>
                      </li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    ))}
                  </ul>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <Button
                    asChild
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    className={`w-full mt-6 ${plano.destaque ? "bg-accent hover:bg-accent/90" : ""}`}
                    variant={plano.destaque ? "default" : "outline"}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  >
                    <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      Solicitar Proposta
                    </a>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  </Button>
                </CardContent>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </Card>
            ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </section>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted/30">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo">
          <div className="text-center mb-12">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Perguntas Frequentes - Prática
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </h2>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

          <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-3">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            {faqItems.map((item, index) => (
              <AccordionItem
import { useSiteSettings } from "@/hooks/useSiteSettings";
                key={index}
                value={`faq-${index}`}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                className="border rounded-lg px-4 bg-card"
              >
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.pergunta}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  {item.resposta}
                </AccordionContent>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </AccordionItem>
            ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </Accordion>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </section>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* CTA Final */}
      <section className="py-16 lg:py-24 bg-primary">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo">
          <div className="max-w-3xl mx-auto text-center">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-6">
              Precisa de Assistência Técnica para seu Equipamento Prática?
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Entre em contato agora e receba atendimento especializado para lavadoras PRCOP, ultracongeladores e fornos.
            </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <Button
                asChild
import { useSiteSettings } from "@/hooks/useSiteSettings";
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
import { useSiteSettings } from "@/hooks/useSiteSettings";
              >
                <a href={`${WHATSAPP_URL}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar com Especialista
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
                  Todos os Canais de Atendimento
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </a>
              </Button>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </div>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";
    </Layout>
  );
import { useSiteSettings } from "@/hooks/useSiteSettings";
}
