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
  Cog,
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
  Leaf,
} from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const WHATSAPP_URL = "https://wa.me/5562993775711";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const equipamentos = [
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    id: "linha-r",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Processadores Linha R - Versáteis e Potentes",
    conteudo: {
import { useSiteSettings } from "@/hooks/useSiteSettings";
      descricao: "Os processadores Robot Coupe Linha R são os mais versáteis do mercado profissional com centenas de acessórios opcionais. Ideais para picar, triturar, moer, emulsificar, ralar e fatiar.",
      modelos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "R2 (2L)", specs: "0,55 HP • Bancada • Cozinhas pequenas" },
        { nome: "R4 (4L)", specs: "1 HP • Bancada • Restaurantes e catering" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "R8 (8L)", specs: "1,5 HP • Bancada • Grande produção" },
        { nome: "R10 (10L)", specs: "2 HP • Vertical • Industrial" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "R30 (30L)", specs: "5,5 HP • Piso • Indústrias" },
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      tecnologias: [
        "Lâmina S inox ultra-afiada",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Cuba policarbonato ou inox",
        "Velocidade: 1500/3000 RPM",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Sistema segurança tampa",
        "Múltiplos discos opcionais",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Motor profissional reforçado",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      servicos: [
        "Manutenção preventiva semestral",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Troca lâminas/discos (afiação ou substituição)",
        "Reparo motor (rolamentos, escovas)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Substituição selo mecânico cuba",
        "Troca micro switches tampa",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Lubrificação eixo/engrenagens",
        "Calibração velocidades",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Teste segurança elétrica",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      pecas: [
        "Lâminas inox (S-blade)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Discos corte/ralador diversos",
        "Cubas policarbonato/inox",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Tampas com funil",
        "Selos mecânicos",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Micro switches segurança",
        "Rolamentos",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
    },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    id: "cutters",
    titulo: "Cutters - Processamento Ultra-Fino",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    conteudo: {
      descricao: "Os cutters Robot Coupe são equipamentos de alta rotação para processamento ultra-fino de alimentos (emulsão, pasta, creme). Ideais para molhos, patês e mousses.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      modelos: [
        { nome: "R4, R5, R8", specs: "Bancada • Cubas 4,5 a 8L • Molhos e patês" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "R15, R20", specs: "Piso • Cubas 15 a 20L • Média produção" },
        { nome: "R30", specs: "Piso • Cuba 30L • Produção industrial" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      tecnologias: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Lâmina S inox ultra-afiada",
        "Cuba inox polida (evita aderência)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Velocidade: 1500/3000 RPM",
        "Sistema segurança tampa",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Controle velocidade variável",
        "Alta potência (3 a 5,5 HP)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      servicos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Afiação profissional lâmina S",
        "Balanceamento lâmina (evita vibração)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Troca rolamentos eixo principal",
        "Reparo selo cuba",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Lubrificação sistema transmissão",
        "Teste segurança operacional",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      pecas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Lâminas S profissionais",
        "Selos mecânicos cuba",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Rolamentos eixo",
        "Correias motor",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Micro switches",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    },
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    id: "cortadores-cl",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Cortadores Vegetais Linha CL - Produtividade Máxima",
    conteudo: {
import { useSiteSettings } from "@/hooks/useSiteSettings";
      descricao: "Os cortadores vegetais Robot Coupe Linha CL são especializados em preparo rápido de vegetais com 28+ discos intercambiáveis para fatiamento, julienne, cubos e mais.",
      modelos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "CL30 (Bistro)", specs: "0,55 HP • Até 250 refeições • 5 discos" },
        { nome: "CL50/CL52", specs: "1 HP • Até 500 refeições • 28+ discos" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "CL55 (Pusher Duplo)", specs: "Sistema dual • Até 750 refeições" },
        { nome: "CL60 (Industrial)", specs: "1,5 HP • Até 1000 refeições • Boca XL" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      tecnologias: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "28+ tipos de discos disponíveis",
        "Fatiamento: 0,5mm a 10mm",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Julienne: 2x2mm a 8x8mm",
        "Cubos: 6x6mm a 25x25mm",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Ripple cut, waffles, chips",
        "Sistema ejetor automático",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      servicos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Manutenção preventiva trimestral",
        "Afiação/substituição discos",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Troca motor (queima por sobrecarga)",
        "Substituição sistema segurança",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Reparo ejetor vegetais",
        "Lubrificação partes móveis",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Treinamento operacional discos",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      pecas: [
        "Discos fatiamento diversos",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Discos julienne",
        "Discos cubos",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Motores",
        "Ejetores",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Micro switches",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    },
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    id: "blixer",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Blixer - Liquidificadores Profissionais",
    conteudo: {
import { useSiteSettings } from "@/hooks/useSiteSettings";
      descricao: "Os Blixer Robot Coupe combinam a função de liquidificador com cutter, ideais para sopas, purês, emulsões e preparações líquidas ou pastosas.",
      modelos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "Blixer 3", specs: "3,7L • Bancada • Uso geral" },
        { nome: "Blixer 5", specs: "5,5L • Bancada • Restaurantes" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "Blixer 6", specs: "7L • Bancada • Catering" },
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      tecnologias: [
        "Sistema híbrido liquidificador + cutter",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Cuba vedada para líquidos",
        "Lâmina especial emulsificação",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Velocidade variável",
        "Sistema segurança reforçado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      servicos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Manutenção preventiva",
        "Troca lâminas especiais",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Substituição vedações cuba",
        "Reparo motor",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Teste estanqueidade",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      pecas: [
        "Lâminas Blixer",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Vedações cuba",
        "Tampas",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Motores",
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
    titulo: "Motor Não Liga",
    sintomas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Equipamento não responde",
      "Motor não gira ao ligar",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Desliga durante uso",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    causas: [
      "Micro switch tampa desajustado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Sistema segurança acionado",
      "Capacitor de partida queimado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Motor sobrecarregado",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    solucoes: [
      "Verificação e ajuste micro switches",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Teste sistema segurança completo",
      "Substituição capacitor",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Avaliação motor (rolamentos, escovas)",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Vazamento na Cuba",
    sintomas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Líquido escorrendo pela base",
      "Cuba não veda corretamente",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Manchas de gordura na base",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    causas: [
      "Selo mecânico desgastado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Cuba trincada",
      "Eixo com folga",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    solucoes: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Substituição selo mecânico original",
      "Troca cuba (policarbonato ou inox)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Ajuste/troca rolamento eixo",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Vibração Excessiva",
    sintomas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Equipamento treme muito",
      "Barulho anormal durante uso",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Lâmina parece desbalanceada",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    causas: [
      "Rolamentos desgastados",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Lâmina mal posicionada",
      "Disco desbalanceado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Base solta",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    solucoes: [
      "Troca rolamentos eixo principal",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Reposicionamento/troca lâmina",
      "Balanceamento disco",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Fixação correta base",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

const diferenciais = [
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    icon: Cog,
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Especialistas Robot Coupe",
    descricao: "Técnicos com experiência em toda linha de processadores e cutters.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    icon: Leaf,
    titulo: "Afiação Profissional",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    descricao: "Serviço de afiação de lâminas S e discos com equipamento especializado.",
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    icon: Shield,
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Peças Originais",
    descricao: "Estoque de componentes originais Robot Coupe para reposição imediata.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    icon: FileCheck,
    titulo: "Treinamento Operacional",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    descricao: "Orientação para uso correto dos 28+ tipos de discos disponíveis.",
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
      "2 manutenções preventivas/ano",
      "Lubrificação e inspeção",
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
      "4 manutenções preventivas/ano",
      "Afiação lâminas inclusa",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Desconto 30% peças",
      "1 corretiva inclusa/ano",
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
      "6 manutenções preventivas/ano",
      "Afiação trimestral inclusa",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Desconto 40% peças",
      "Corretivas inclusas",
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
    pergunta: "Robot Coupe vale o investimento para restaurante pequeno?",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    resposta: "Sim, modelos compactos (R2, R4, CL30) pagam o investimento em 6-12 meses pela economia de mão de obra. Um R4 processa em 2 minutos o que levaria 20 minutos manualmente.",
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    pergunta: "Qual a diferença entre processador e cutter Robot Coupe?",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    resposta: "Processador (Linha R com discos): corta, fatia, rala, julienne (cortes definidos). Cutter (Linha R com lâmina S): tritura, emulsifica, faz pastas, patês, mousses (processamento fino homogêneo).",
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    pergunta: "Posso afiar lâminas Robot Coupe?",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    resposta: "Lâminas S de cutters: sim, afiação profissional. Discos de corte desgastados: substituição recomendada (afiação pode desbalancear). WeDo faz ambos serviços.",
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    pergunta: "Qual a frequência de manutenção Robot Coupe?",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    resposta: "Uso intensivo (>4h/dia): semestral. Uso padrão (2-4h/dia): anual. Manutenção inclui: lubrificação, inspeção segurança, teste motor, verificação lâminas.",
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    pergunta: "Motor Robot Coupe queima frequentemente. Por quê?",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    resposta: "Principais causas: sobrecarga (vegetais muito duros, cuba muito cheia), ventilação inadequada (motor superaquece), uso contínuo sem pausas. Respeitar capacidade e duty cycle do modelo.",
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
];

import { useSiteSettings } from "@/hooks/useSiteSettings";
export default function AssistenciaTecnicaRobotCoupe() {
  const whatsappMessage = encodeURIComponent(
import { useSiteSettings } from "@/hooks/useSiteSettings";
    "Olá! Preciso de assistência técnica para meu equipamento Robot Coupe."
  );
import { useSiteSettings } from "@/hooks/useSiteSettings";

  return (
import { useSiteSettings } from "@/hooks/useSiteSettings";
    <Layout>
      <Helmet>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <title>Assistência Técnica Robot Coupe | Manutenção Processador Cutter Liquidificador | WeDo</title>
        <meta
import { useSiteSettings } from "@/hooks/useSiteSettings";
          name="description"
          content="Assistência técnica especializada Robot Coupe Brasil. Manutenção preventiva e corretiva para processadores de alimentos, cutters, liquidificadores profissionais. Peças originais, técnicos certificados."
import { useSiteSettings } from "@/hooks/useSiteSettings";
        />
        <meta
import { useSiteSettings } from "@/hooks/useSiteSettings";
          name="keywords"
          content="assistência técnica robot coupe, manutenção robot coupe, processador alimentos robot coupe, cutter robot coupe, robot coupe brasil"
import { useSiteSettings } from "@/hooks/useSiteSettings";
        />
        <link rel="canonical" href="https://wedocorp.com.br/assistencia-tecnica-robot-coupe" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </Helmet>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary py-16 lg:py-24 overflow-hidden">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl" />
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

        <div className="container-wedo relative z-10">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <Cog className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">Líder Mundial em Processadores desde 1961</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </div>

import { useSiteSettings } from "@/hooks/useSiteSettings";
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica Robot Coupe
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <span className="block text-accent mt-2">Processadores, Cutters e Cortadores Vegetais</span>
            </h1>
import { useSiteSettings } from "@/hooks/useSiteSettings";

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Manutenção especializada em toda linha Robot Coupe. 
              Afiação de lâminas, troca de peças originais e atendimento técnico certificado.
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
                <span>Atendimento Rápido</span>
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Shield className="w-5 h-5 text-accent" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <span>Peças Originais</span>
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Zap className="w-5 h-5 text-accent" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <span>Afiação Profissional</span>
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
              Equipamentos Robot Coupe Atendidos
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Manutenção especializada para toda linha de processadores, cutters e cortadores vegetais.
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
                    <Cog className="w-6 h-6 text-accent flex-shrink-0" />
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
                      <h4 className="font-semibold text-foreground mb-3">Características:</h4>
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
                      <h4 className="font-semibold text-foreground mb-3">Peças em Estoque:</h4>
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
              Contratos de Manutenção PCM
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </h2>
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
              Perguntas Frequentes - Robot Coupe
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
              Precisa de Assistência Técnica para seu Robot Coupe?
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Entre em contato agora e receba atendimento especializado para processadores, cutters e cortadores vegetais.
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
