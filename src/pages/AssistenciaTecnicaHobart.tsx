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
  ThermometerSun,
} from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const WHATSAPP_URL = "https://wa.me/5562993775711";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const equipamentos = [
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    id: "ecomax",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Linha Ecomax - Lavadoras Compactas",
    conteudo: {
import { useSiteSettings } from "@/hooks/useSiteSettings";
      descricao: "As lavadoras Hobart Ecomax são a linha de entrada para cozinhas profissionais, oferecendo alta performance com baixo consumo de água e energia.",
      modelos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "Ecomax 402", specs: "Compacta • Copos e utensílios • 40 cestos/h" },
        { nome: "Ecomax 502", specs: "Cesto 500x500mm • Pratos e panelas • 60 cestos/h" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "Ecomax 602", specs: "Alta produção • 70 cestos/h" },
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      tecnologias: [
        "Sistema Energy Save (baixo consumo)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Ciclos de lavagem otimizados",
        "Painel digital intuitivo",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Booster integrado 82°C",
        "Construção inox reforçada",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Porta dupla parede isolada",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      servicos: [
        "Manutenção preventiva mensal/trimestral",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Limpeza técnica (descalcificação)",
        "Calibração temperatura lavagem/booster",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Troca resistências",
        "Substituição bombas",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Reparo sistema dosador",
        "Teste pressão e vazão",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      pecas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Resistências lavagem/booster",
        "Bombas de lavagem",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Eletroválvulas",
        "Braços aspersão",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Placas eletrônicas",
        "Vedações porta",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
    },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    id: "fx-series",
    titulo: "Linha FX - Alta Performance",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    conteudo: {
      descricao: "As lavadoras Hobart série FX representam o topo da linha em tecnologia de lavagem industrial, com sistemas avançados de economia e higienização.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      modelos: [
        { nome: "FX-10B", specs: "Cesto 500mm • Break tank • 60 cestos/h" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "FX-30", specs: "Cesto 500mm • Alta produção • 80 cestos/h" },
        { nome: "FX-40", specs: "Premium • Energy Recovery • 80+ cestos/h" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      tecnologias: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Energy Recovery System (economia 50%+)",
        "Vapor condensation (recuperação calor)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Painel touchscreen colorido",
        "Sistema SMART conectado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Dosagem química automática",
        "Ciclos HACCP registrados",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Break tank integrado",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      servicos: [
        "Manutenção preventiva especializada",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Calibração sistema Energy Recovery",
        "Atualização software",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Diagnóstico sistema SMART",
        "Reparo painéis touchscreen",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Configuração dosagem química",
        "Relatórios HACCP",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
      pecas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Placas eletrônicas FX",
        "Painéis touchscreen",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Bombas alta pressão",
        "Sistemas dosadores",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Sensores temperatura",
        "Componentes Energy Recovery",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      ],
    },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    id: "passagem",
    titulo: "Lavadoras de Passagem (Túnel)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    conteudo: {
      descricao: "Lavadoras Hobart de passagem para alta produção contínua, ideais para hospitais, hotéis e catering de grande porte.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      modelos: [
        { nome: "CN Series", specs: "Passagem contínua • 100+ cestos/h" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
        { nome: "CP Series", specs: "Linha premium • 150+ cestos/h" },
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      tecnologias: [
        "Sistema de passagem contínua",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Múltiplas zonas de lavagem",
        "Secagem por ar quente",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Automação completa",
        "Monitoramento IoT",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Ultra alta capacidade",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      servicos: [
        "Manutenção preventiva mensal",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Calibração zonas de temperatura",
        "Limpeza sistema de esteira",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Reparo sistema de secagem",
        "Diagnóstico automação",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Teste performance completo",
      ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
      pecas: [
        "Esteiras e correntes",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Resistências múltiplas zonas",
        "Motores e redutores",
import { useSiteSettings } from "@/hooks/useSiteSettings";
        "Sensores e controladores",
        "Componentes automação",
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
    titulo: "Louças Não Secam Corretamente",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    sintomas: [
      "Louças saem molhadas",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Manchas d'água após ciclo",
      "Temperatura booster baixa",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    causas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Resistência booster queimada",
      "Temperatura abaixo de 82°C",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Falta de abrilhantador",
      "Dosadora com defeito",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    solucoes: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Teste e troca resistência booster",
      "Calibração temperatura enxágue",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Ajuste sistema dosador",
      "Verificação bomba abrilhantador",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    titulo: "Lavagem Insuficiente",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    sintomas: [
      "Resíduos permanecem nas louças",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Gordura não é removida",
      "Manchas brancas (calcário)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    causas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Braços aspersão entupidos",
      "Pressão bomba insuficiente",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Temperatura lavagem baixa",
      "Detergente inadequado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    solucoes: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Limpeza e desobstrução braços",
      "Teste pressão bomba lavagem",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Calibração temperatura",
      "Ajuste concentração química",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    titulo: "Alarmes e Erros Display",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    sintomas: [
      "Códigos de erro no painel",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Máquina não inicia ciclo",
      "Alarme sonoro constante",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    causas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Sensor temperatura defeituoso",
      "Nível água incorreto",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Porta não fechada corretamente",
      "Falha comunicação placas",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    solucoes: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Diagnóstico códigos de erro",
      "Teste sensores (NTC, pressostato)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Verificação micro switch porta",
      "Reparo/troca placa eletrônica",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
];

import { useSiteSettings } from "@/hooks/useSiteSettings";
const diferenciais = [
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    icon: Droplets,
    titulo: "Especialistas Hobart",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    descricao: "Técnicos com experiência em toda linha de lavadoras industriais.",
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    icon: ThermometerSun,
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Calibração HACCP",
    descricao: "Garantia de temperaturas corretas para higienização certificada.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    icon: Shield,
    titulo: "Peças Originais",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    descricao: "Estoque de componentes originais Hobart para reposição imediata.",
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    icon: FileCheck,
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Documentação Técnica",
    descricao: "Relatórios completos para auditorias ANVISA e certificações.",
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
      "4 manutenções preventivas/ano",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Limpeza técnica profunda",
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
      "6 manutenções preventivas/ano",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Descalcificação trimestral",
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
    beneficios: [
      "Manutenção mensal personalizada",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Análise qualidade água inclusa",
      "Desconto 40% peças",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Mão de obra corretiva inclusa",
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
    pergunta: "Qual a diferença entre Ecomax e FX?",
    resposta: "Ecomax é a linha de entrada, ideal para operações de médio porte. FX é a linha premium com Energy Recovery, painel touchscreen e sistema SMART para máxima economia e controle.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "Qual temperatura ideal para higienização HACCP?",
    resposta: "Lavagem: mínimo 60°C. Enxágue (booster): mínimo 82°C por 10 segundos. Essas temperaturas garantem eliminação de 99,9% dos microorganismos conforme normas sanitárias.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "Com que frequência devo fazer descalcificação?",
    resposta: "Depende da dureza da água. Água dura (>200ppm CaCO3): semanal. Água média: quinzenal. Água tratada: mensal. Recomendamos análise de água para definir frequência ideal.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "A lavadora está consumindo muito detergente. O que fazer?",
    resposta: "Causas comuns: bomba dosadora descalibrada, vazamento na linha química, ou concentração errada. WeDo realiza calibração precisa do sistema dosador com medição de concentração.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "Vocês atendem lavadoras de passagem (túnel)?",
    resposta: "Sim, atendemos toda linha Hobart incluindo lavadoras de passagem CN e CP Series. Manutenção especializada com calibração de múltiplas zonas e sistema de esteira.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

export default function AssistenciaTecnicaHobart() {
import { useSiteSettings } from "@/hooks/useSiteSettings";
  const whatsappMessage = encodeURIComponent(
    "Olá! Preciso de assistência técnica para minha lava-louças Hobart."
import { useSiteSettings } from "@/hooks/useSiteSettings";
  );

import { useSiteSettings } from "@/hooks/useSiteSettings";
  return (
    <Layout>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <Helmet>
        <title>Assistência Técnica Hobart | Manutenção Lava-Louças Industrial Ecomax FX | WeDo</title>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <meta
          name="description"
import { useSiteSettings } from "@/hooks/useSiteSettings";
          content="Assistência técnica especializada Hobart Brasil. Manutenção preventiva e corretiva para lava-louças industriais Ecomax, FX, lavadoras de passagem. Peças originais, técnicos certificados."
        />
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <meta
          name="keywords"
import { useSiteSettings } from "@/hooks/useSiteSettings";
          content="assistência técnica hobart, manutenção hobart, lava-louças hobart, ecomax manutenção, fx40 hobart"
        />
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <link rel="canonical" href="https://wedocorp.com.br/assistencia-tecnica-hobart" />
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
              <Droplets className="w-5 h-5 text-accent" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <span className="text-accent font-medium">Líder Mundial em Lava-Louças Industriais</span>
            </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Assistência Técnica Hobart
              <span className="block text-accent mt-2">Lava-Louças Industriais Ecomax e FX</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </h1>

import { useSiteSettings } from "@/hooks/useSiteSettings";
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em toda linha Hobart de lava-louças industriais. 
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Calibração HACCP, peças originais e atendimento emergencial.
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
                <span>Peças Originais Hobart</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <Zap className="w-5 h-5 text-accent" />
                <span>Calibração HACCP</span>
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
              Equipamentos Hobart Atendidos
            </h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manutenção especializada para toda linha de lava-louças industriais Hobart.
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
                    <Droplets className="w-6 h-6 text-accent flex-shrink-0" />
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
              Perguntas Frequentes - Hobart
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
              Precisa de Assistência Técnica para sua Lava-Louças Hobart?
            </h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <p className="text-lg text-primary-foreground/80 mb-8">
              Entre em contato agora e receba atendimento especializado para toda linha Ecomax e FX.
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
