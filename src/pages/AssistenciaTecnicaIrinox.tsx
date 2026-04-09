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
  Snowflake,
  ThermometerSnowflake,
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
  Wifi,
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
    id: "multifresh-next",
    titulo: "MultiFresh Next - Abatedor Multifuncional",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    conteudo: {
      descricao: "O MultiFresh Next é o abatedor de temperatura multifuncional completo da Irinox, com até 15 funções: resfriamento, ultracongelamento, descongelamento controlado, fermentação lenta, conservação, regeneração.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      modelos: [
        { nome: "MultiFresh Next L", specs: "15 kg resfriamento / 10 kg congelamento" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "MultiFresh Next M", specs: "25 kg resfriamento / 18 kg congelamento" },
        { nome: "MultiFresh Next XL", specs: "40 kg resfriamento / 30 kg congelamento" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      tecnologias: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Sanigen: Sistema sanitização UV interno automático",
        "Tela touchscreen 7\" intuitiva",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Conectividade Wi-Fi para gestão remota",
        "76+ ciclos pré-programados HACCP",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Multipoint: Sonda múltiplos pontos temperatura",
        "ECO Mode: Economia energética noturna",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      servicos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Manutenção preventiva trimestral",
        "Calibração sondas temperatura",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Atualização software e firmware",
        "Reparo/substituição placas eletrônicas MYA1/MYA2",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Manutenção sistema Sanigen UV",
        "Troca compressor (Embraco, Danfoss)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Configuração conectividade Wi-Fi",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      pecas: [
        "Sondas temperatura núcleo",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Placas eletrônicas MYA1, MYA2",
        "Compressores Embraco linha",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Válvulas expansão eletrônica",
        "Lâmpadas UV Sanigen",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Vedações porta",
        "Cartão SD recovery",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
    },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    id: "easyfresh-next",
    titulo: "EasyFresh Next - Abatedor Essencial",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    conteudo: {
      descricao: "O EasyFresh Next é a linha essencial de abatedores Irinox, focada em resfriamento e ultracongelamento com 76 ciclos pré-programados.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      modelos: [
        { nome: "EasyFresh Next L", specs: "15 kg resfriamento / 10 kg congelamento" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "EasyFresh Next M", specs: "25 kg resfriamento / 18 kg congelamento" },
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      tecnologias: [
        "Painel digital LCD intuitivo",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Sonda núcleo único ponto",
        "76 ciclos HACCP programados",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Modo manual temporizado",
        "Ciclo contínuo (conservação)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Resfriamento: +90°C até +3°C em 90 minutos",
        "Ultracongelamento: +90°C até -18°C em 240 minutos",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      servicos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Manutenção preventiva semestral",
        "Calibração sonda núcleo",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Carga gás refrigerante R404A/R452A",
        "Limpeza evaporador",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Teste vazamento sistema frigorífico",
        "Substituição compressor",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Reparo painel LCD",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      pecas: [
        "Sondas temperatura",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Compressores",
        "Válvulas expansão",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Vedações porta",
        "Filtros ar/água",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Placas eletrônicas",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    },
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    id: "simplyfresh",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "SimplyFresh - Compacto 5 Bandejas",
    conteudo: {
import { useSiteSettings } from "@/hooks/useSiteSettings";
      descricao: "O SimplyFresh é o abatedor compacto Irinox para 5 bandejas GN 1/1, ideal para restaurantes e cozinhas menores.",
      modelos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "SimplyFresh", specs: "10 kg resfriamento / 7 kg congelamento" },
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      tecnologias: [
        "Painel digital simples (4 botões)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "4 funções: Resfriamento hard, soft, congelamento hard, soft",
        "Sonda núcleo inclusa",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Compacto: 850mm altura",
        "5 bandejas GN 1/1",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      servicos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Manutenção corretiva rápida",
        "Troca compressor hermético",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Calibração temperatura",
        "Limpeza circuito frigorífico",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Substituição painel controle",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      pecas: [
        "Compressores herméticos",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Sondas temperatura",
        "Vedações porta",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Painéis controle",
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
    titulo: "Alarme Pressostato",
    sintomas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Display exibe erro pressostato",
      "Equipamento não inicia ciclo",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Compressor desliga prematuramente",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    causas: [
      "Sensor pressão descalibrado/defeituoso",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Condensador sujo (bloqueio fluxo ar)",
      "Gás refrigerante insuficiente",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Válvula expansão travada",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    solucoes: [
      "Teste sensor pressão (continuidade)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Limpeza profunda condensador",
      "Verificação carga gás (manifold)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Substituição sensor pressostato original",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Erro Placa Display (MYA)",
    sintomas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Display não liga ou trava",
      "Perda de configurações",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Erro comunicação placas",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    causas: [
      "Corrupção software (micro SD)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Falha placa mãe MYA1/MYA2",
      "Problemas alimentação elétrica",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    solucoes: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Recovery sistema via micro SD Irinox oficial",
      "Teste placa mãe (voltagem, comunicação CAN)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Substituição placa eletrônica original",
      "Atualização firmware última versão",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    titulo: "Porta Desalinhada",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    sintomas: [
      "Porta não fecha hermeticamente",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Perda de frio, condensação",
      "Aumento consumo energia",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    causas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Dobradiças desreguladas",
      "Vedação deformada/ressecada",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Estrutura porta empenada",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    solucoes: [
      "Ajuste dobradiças conforme manual técnico SB07",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Substituição vedação original",
      "Teste hermeticidade (papel)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Alinhamento porta digital",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

const diferenciais = [
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    icon: ThermometerSnowflake,
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Especialistas em Refrigeração",
    descricao: "Técnicos com certificação em sistemas frigoríficos comerciais e industriais.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    icon: Wifi,
    titulo: "Diagnóstico Remoto",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    descricao: "Suporte técnico via conectividade Wi-Fi dos equipamentos MultiFresh.",
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    icon: Shield,
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Peças Originais Irinox",
    descricao: "Estoque de componentes originais: placas MYA, sondas, compressores.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    icon: FileCheck,
    titulo: "Documentação HACCP",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    descricao: "Relatórios técnicos completos para auditorias e certificações.",
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
];

import { useSiteSettings } from "@/hooks/useSiteSettings";
const planosPCM = [
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    nome: "Essencial",
    cor: "border-muted",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    beneficios: [
      "4 manutenções preventivas/ano",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Limpeza evaporador/condensador",
      "Calibração sondas",
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
    cor: "border-accent",
    destaque: true,
import { useSiteSettings } from "@/hooks/useSiteSettings";
    beneficios: [
      "6 manutenções preventivas/ano",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Atualização software inclusa",
      "Desconto 30% peças",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "2 corretivas inclusas/ano",
      "Atendimento prioritário",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    nome: "Corporativo",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    cor: "border-primary",
    beneficios: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Manutenção mensal personalizada",
      "Gestão HACCP digital",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Desconto 40% peças",
      "Mão de obra corretiva inclusa",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Atendimento express",
      "Spare parts in-loco",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
];

import { useSiteSettings } from "@/hooks/useSiteSettings";
const faqItems = [
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "A WeDo é assistência técnica autorizada Irinox?",
    resposta: "Somos assistência técnica especializada em equipamentos Irinox com técnicos treinados em refrigeração comercial e eletrônica especializada. Utilizamos peças originais Irinox e seguimos protocolos técnicos do fabricante.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "Qual a diferença entre MultiFresh e EasyFresh?",
    resposta: "MultiFresh é multifuncional com 15 funções (resfriamento, congelamento, descongelamento, fermentação, regeneração, conservação) e sistema Sanigen UV. EasyFresh é essencial focado em resfriamento e ultracongelamento (76 ciclos).",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "O que é o sistema Sanigen da Irinox?",
    resposta: "Sanigen é sistema sanitização por luz UV-C integrado ao MultiFresh que elimina 99,9% bactérias, vírus e mofo dentro da câmara, aumentando vida útil dos alimentos e higiene.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "Qual frequência de manutenção preventiva para abatedores Irinox?",
    resposta: "Recomendamos trimestral para uso intensivo (hospitais, hotéis), semestral para uso padrão (restaurantes). Inclui limpeza evaporador/condensador, calibração sondas e análise sistema frigorífico.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "Vocês fazem recovery de placa eletrônica MYA?",
    resposta: "Sim, temos procedimento recovery via micro SD com software Irinox oficial para restaurar placas MYA1 e MYA2 após falhas de sistema ou atualizações corrompidas.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "Qual gás refrigerante usado em equipamentos Irinox?",
    resposta: "Modelos mais antigos: R404A. Modelos recentes (linha Next): R452A ou R290 (propano - ecológico). Identificamos modelo específico antes da carga.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "Alarme pressostato Irinox. O que fazer?",
    resposta: "Alarme pressostato indica problema sistema frigorífico: condensador sujo, gás insuficiente ou sensor defeituoso. Requer diagnóstico técnico profissional imediato para evitar danos compressor.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "Abatedor Irinox não congela. Quais as causas?",
    resposta: "Principais causas: gás refrigerante insuficiente (vazamento), compressor fraco, válvula expansão defeituosa, evaporador bloqueado por gelo excessivo, ou sonda núcleo descalibrada.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

export default function AssistenciaTecnicaIrinox() {
import { useSiteSettings } from "@/hooks/useSiteSettings";
  const whatsappMessage = encodeURIComponent(
    "Olá! Preciso de assistência técnica para meu equipamento Irinox."
import { useSiteSettings } from "@/hooks/useSiteSettings";
  );

import { useSiteSettings } from "@/hooks/useSiteSettings";
  return (
    <Layout>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <Helmet>
        <title>Assistência Técnica Irinox | Manutenção Abatedor Temperatura MultiFresh EasyFresh | WeDo</title>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <meta
          name="description"
import { useSiteSettings } from "@/hooks/useSiteSettings";
          content="Assistência técnica especializada Irinox Brasil. Manutenção preventiva e corretiva para abatedores de temperatura MultiFresh, EasyFresh, ultracongeladores. Peças originais, técnicos certificados, atendimento 24h."
        />
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <meta
          name="keywords"
import { useSiteSettings } from "@/hooks/useSiteSettings";
          content="assistência técnica irinox, manutenção irinox, abatedor temperatura irinox, multifresh manutenção, easyfresh assistência, ultracongelador irinox"
        />
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <link rel="canonical" href="https://wedocorp.com.br/assistencia-tecnica-irinox" />
      </Helmet>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Hero Section */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>

import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo relative z-10">
          <div className="max-w-4xl mx-auto text-center">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Snowflake className="w-5 h-5 text-accent" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <span className="text-accent font-medium">Especialistas em Abatedores de Temperatura</span>
            </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Assistência Técnica Irinox
              <span className="block text-accent mt-2">MultiFresh, EasyFresh e Ultracongeladores</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </h1>

import { useSiteSettings } from "@/hooks/useSiteSettings";
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em abatedores de temperatura e ultracongeladores Irinox. 
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Técnicos certificados, peças originais e atendimento emergencial 24/7.
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
                <span>Atendimento em até 4h</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <Shield className="w-5 h-5 text-accent" />
                <span>Peças Originais Irinox</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <Zap className="w-5 h-5 text-accent" />
                <span>Diagnóstico Avançado</span>
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
              Equipamentos Irinox Atendidos
            </h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manutenção especializada para toda linha de abatedores de temperatura e ultracongeladores Irinox.
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
                    <ThermometerSnowflake className="w-6 h-6 text-accent flex-shrink-0" />
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
                      <div className="grid md:grid-cols-3 gap-3">
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
                      <h4 className="font-semibold text-foreground mb-3">Tecnologias:</h4>
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
                      <h4 className="font-semibold text-foreground mb-3">Peças Originais em Estoque:</h4>
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
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Diagnóstico preciso e soluções definitivas para os principais problemas em equipamentos Irinox.
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </p>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            {problemasComuns.map((problema, index) => (
              <Card key={index} className="border-0 shadow-lg">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    {problema.titulo}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  </CardTitle>
                </CardHeader>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <CardContent className="space-y-4">
                  <div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <p className="text-sm font-medium text-foreground mb-2">Sintomas:</p>
                    <ul className="space-y-1">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      {problema.sintomas.map((s, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          <span className="text-destructive">•</span>
                          {s}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        </li>
                      ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    </ul>
                  </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Solução WeDo:</p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <ul className="space-y-1">
                      {problema.solucoes.slice(0, 3).map((s, idx) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          {s}
                        </li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      ))}
                    </ul>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  </div>
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
      {/* Planos PCM */}
      <section className="py-16 lg:py-24">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo">
          <div className="text-center mb-12">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Contratos de Manutenção PCM para Irinox
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Planos personalizados para manter seus abatedores Irinox sempre em perfeito funcionamento.
            </p>
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
              Perguntas Frequentes - Irinox
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
              Precisa de Assistência Técnica para seu Irinox?
            </h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <p className="text-lg text-primary-foreground/80 mb-8">
              Entre em contato agora e receba atendimento especializado para abatedores de temperatura e ultracongeladores.
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
