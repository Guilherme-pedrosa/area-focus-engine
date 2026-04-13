import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Flame,
  Clock,
  Shield,
  CheckCircle,
  AlertTriangle,
  Phone,
  Wrench,
  Zap,
  FileCheck,
  MessageCircle,
} from "lucide-react";
import { useCTASettings } from "@/hooks/useSiteSettings";

const WHATSAPP_URL = "https://wa.me/5562993775711";

const equipamentos = [
  {
    id: "amassadeiras",
    titulo: "Amassadeiras Espirais e Rápidas",
    conteudo: {
      descricao: "Amassadeiras Macom de alta capacidade para panificação profissional. Linha completa de espirais e rápidas para padarias artesanais e industriais.",
      modelos: [
        { nome: "AE-15 / AE-25", specs: "Espiral • 15-25 kg • Padarias artesanais" },
        { nome: "AE-40 / AE-60", specs: "Espiral • 40-60 kg • Produção média" },
        { nome: "AE-100 / AE-160", specs: "Espiral • 100-160 kg • Industrial" },
        { nome: "Amassadeiras Rápidas", specs: "Alta velocidade • Grande volume • Automatizada" },
      ],
      tecnologias: [
        "Sistema espiral de mistura eficiente",
        "Motor com inversor de frequência",
        "Cuba em aço inox basculante",
        "Protetor de segurança com micro switch",
        "Velocidade variável (lenta e rápida)",
        "Timer digital programável",
      ],
      servicos: [
        "Manutenção preventiva semestral",
        "Troca de correias e engrenagens",
        "Substituição de rolamentos",
        "Reparo/troca inversor de frequência",
        "Alinhamento do espiral",
        "Verificação sistema de segurança",
        "Lubrificação de componentes",
      ],
      pecas: [
        "Correias de transmissão",
        "Engrenagens",
        "Rolamentos",
        "Inversores de frequência",
        "Espirais",
        "Eixos e mancais",
      ],
    },
  },
  {
    id: "divisoras",
    titulo: "Divisoras e Modeladoras de Massas",
    conteudo: {
      descricao: "Divisoras boleadoras e modeladoras Macom para padarias e indústrias de massas. Corte preciso e modelagem uniforme para produção eficiente.",
      modelos: [
        { nome: "Divisora Boleadora Semi-Auto", specs: "30 partes • Pedal • Padaria" },
        { nome: "Divisora Volumétrica", specs: "Automática • Contínua • Industrial" },
        { nome: "Modeladora de Pães", specs: "Cilindros reguláveis • Contínua" },
      ],
      tecnologias: [
        "Sistema de corte por pressão uniforme",
        "Cilindros reguláveis para diferentes tamanhos",
        "Esteira transportadora integrada",
        "Operação por pedal ou automática",
        "Construção em aço carbono/inox",
        "Sistema de segurança NR-12",
      ],
      servicos: [
        "Manutenção preventiva semestral",
        "Afiação e troca de facas/lâminas",
        "Ajuste de cilindros e rolos",
        "Troca de correias transportadoras",
        "Calibração de divisão/peso",
        "Adequação NR-12",
      ],
      pecas: [
        "Facas/lâminas de divisora",
        "Rolos e cilindros",
        "Correias transportadoras",
        "Rolamentos",
        "Engrenagens",
        "Molas e pistões",
      ],
    },
  },
  {
    id: "fornos-cilindros",
    titulo: "Fornos, Cilindros e Batedeiras",
    conteudo: {
      descricao: "Linha complementar Macom: fornos turbo e de lastro para panificação, cilindros laminadores e batedeiras planetárias para confeitaria.",
      modelos: [
        { nome: "Forno Turbo", specs: "8-20 telas • Convecção • Vapor" },
        { nome: "Forno de Lastro", specs: "Pedra refratária • Pães artesanais" },
        { nome: "Cilindro Laminador", specs: "300-500mm • Massas • Regulável" },
        { nome: "Batedeira Planetária", specs: "20-80 litros • Confeitaria • Multi-velocidade" },
      ],
      tecnologias: [
        "Convecção forçada com turbina",
        "Injeção de vapor programável",
        "Lastro em pedra refratária",
        "Cilindros em aço cromado de precisão",
        "Sistema planetário de batimento",
        "Controles digitais com timer",
      ],
      servicos: [
        "Manutenção preventiva programada",
        "Calibração temperatura e vapor",
        "Troca de resistências e turbinas",
        "Ajuste de cilindros laminadores",
        "Reparo sistema elétrico/eletrônico",
        "Limpeza e higienização profunda",
      ],
      pecas: [
        "Resistências de forno",
        "Turbinas/ventiladores",
        "Termostatos digitais",
        "Rolos de cilindro cromado",
        "Batedores (gancho, globo, pá)",
        "Correias e engrenagens",
      ],
    },
  },
];

const problemasComuns = [
  {
    titulo: "Motor Aquece ou Não Liga",
    sintomas: [
      "Motor esquenta excessivamente",
      "Amassadeira não parte",
      "Disjuntor desarma ao ligar",
    ],
    causas: [
      "Sobrecarga (massa acima da capacidade)",
      "Rolamento travado",
      "Inversor de frequência com defeito",
      "Capacitor de partida queimado",
    ],
    solucoes: [
      "Orientação sobre carga correta",
      "Troca de rolamentos",
      "Reparo/troca do inversor",
      "Substituição do capacitor",
    ],
  },
  {
    titulo: "Correia Partida ou Engrenagem Desgastada",
    sintomas: [
      "Espiral não gira ou gira lento",
      "Ruído de estalo ou rangido",
      "Cheiro de borracha queimada",
    ],
    causas: [
      "Correia ressecada ou desgastada",
      "Tensão incorreta da correia",
      "Engrenagem com dentes quebrados",
      "Falta de lubrificação",
    ],
    solucoes: [
      "Troca de correias",
      "Ajuste de tensão",
      "Substituição de engrenagens",
      "Lubrificação programada",
    ],
  },
  {
    titulo: "Forno sem Aquecimento Uniforme",
    sintomas: [
      "Pães queimam de um lado",
      "Tempo de forneamento irregular",
      "Vapor insuficiente",
    ],
    causas: [
      "Resistência parcialmente queimada",
      "Turbina com falha",
      "Termostato descalibrado",
      "Sistema de vapor entupido",
    ],
    solucoes: [
      "Troca de resistências danificadas",
      "Reparo/troca de turbina",
      "Calibração do termostato",
      "Limpeza do sistema de vapor",
    ],
  },
];

const diferenciais = [
  {
    icon: Flame,
    titulo: "Especialistas Macom",
    descricao: "Técnicos com experiência em toda linha de panificação.",
  },
  {
    icon: Zap,
    titulo: "Atendimento Ágil",
    descricao: "Diagnóstico rápido para não parar sua produção.",
  },
  {
    icon: Shield,
    titulo: "Peças Originais",
    descricao: "Componentes originais Macom para máxima durabilidade.",
  },
  {
    icon: FileCheck,
    titulo: "Laudo Técnico",
    descricao: "Documentação completa de cada manutenção realizada.",
  },
];

const planosPCM = [
  {
    nome: "Essencial",
    beneficios: [
      "2 manutenções preventivas/ano",
      "Lubrificação incluída",
      "Desconto 20% peças",
      "Atendimento em horário comercial",
    ],
  },
  {
    nome: "Profissional",
    destaque: true,
    beneficios: [
      "4 manutenções preventivas/ano",
      "Ajuste e calibração inclusos",
      "Desconto 30% peças",
      "1 corretiva inclusa/ano",
      "Atendimento prioritário",
    ],
  },
  {
    nome: "Corporativo",
    beneficios: [
      "6 manutenções preventivas/ano",
      "Revisão completa incluída",
      "Desconto 40% peças",
      "Corretivas inclusas",
      "Atendimento express",
    ],
  },
];

const faqItems = [
  {
    pergunta: "Quais equipamentos a Macom fabrica?",
    resposta: "A Macom é fabricante brasileira especializada em equipamentos para panificação: amassadeiras espirais e rápidas, divisoras de massas, modeladoras, cilindros laminadores, batedeiras planetárias, fornos turbo e de lastro.",
  },
  {
    pergunta: "Com que frequência devo trocar as correias da amassadeira?",
    resposta: "Uso intensivo (>12h/dia): a cada 6-8 meses. Uso padrão: anualmente. Correias desgastadas causam perda de torque e podem danificar engrenagens. Inspeção visual mensal é recomendada.",
  },
  {
    pergunta: "Minha amassadeira está fazendo barulho anormal. O que pode ser?",
    resposta: "Pode indicar rolamento desgastado, engrenagem com dente quebrado, correia frouxa ou espiral desalinhado. Recomendamos parar o uso e solicitar diagnóstico técnico imediatamente.",
  },
  {
    pergunta: "O inversor de frequência da amassadeira queimou. Vocês reparam?",
    resposta: "Sim, realizamos diagnóstico e reparo de inversores de frequência. Em caso de queima total, substituímos por inversor compatível com configuração adequada para o motor.",
  },
  {
    pergunta: "A divisora não está cortando uniforme. O que fazer?",
    resposta: "Corte irregular indica facas desgastadas, pistão com perda de pressão ou molas fatigadas. Nossos técnicos fazem ajuste completo com afiação de facas e calibração de pressão.",
  },
  {
    pergunta: "Vocês fazem adequação NR-12 em equipamentos Macom?",
    resposta: "Sim, realizamos adequação NR-12 em amassadeiras, divisoras, modeladoras e cilindros, incluindo instalação de proteções, micro switches de segurança e botões de emergência.",
  },
  {
    pergunta: "Qual a vida útil de uma amassadeira Macom?",
    resposta: "Com manutenção adequada, amassadeiras Macom duram 15-20 anos. A chave é manutenção preventiva regular: lubrificação, troca de correias e verificação de rolamentos.",
  },
  {
    pergunta: "A WeDo atende em todo Goiás?",
    resposta: "Sim, atendemos em todo Goiás e Distrito Federal, com base em Goiânia. Para cidades mais distantes, atuamos com agendamento programado.",
  },
];

export default function AssistenciaTecnicaMacom() {
  const { ctaUrl, ctaText } = useCTASettings();
  const whatsappMessage = encodeURIComponent(
    "Olá! Preciso de assistência técnica para meu equipamento Macom."
  );

  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Macom | Manutenção Amassadeira Divisora Forno Panificação | WeDo</title>
        <meta name="description" content="Assistência técnica especializada Macom. Manutenção de amassadeiras espirais, divisoras de massas, modeladoras, cilindros e fornos de panificação. Peças originais." />
        <meta name="keywords" content="assistência técnica macom, manutenção macom, amassadeira macom, divisora macom, forno panificação macom" />
        <link rel="canonical" href="https://wedocozinhas.com.br/assistencia-tecnica-macom" />
      </Helmet>

      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
        </div>
        <div className="container-wedo relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Flame className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">Fabricante Brasileiro de Equipamentos de Panificação</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica Macom
              <span className="block text-accent mt-2">Amassadeiras, Divisoras e Equipamentos de Panificação</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em toda linha Macom de panificação. Amassadeiras, divisoras, modeladoras, cilindros e fornos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                <a href={`${WHATSAPP_URL}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5 mr-2" />Solicitar Orçamento</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:+5562993775711"><Phone className="w-5 h-5 mr-2" />(62) 99377-5711</a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 text-primary-foreground/70"><Clock className="w-5 h-5 text-accent" /><span>Atendimento Rápido</span></div>
              <div className="flex items-center gap-2 text-primary-foreground/70"><Shield className="w-5 h-5 text-accent" /><span>Peças Originais</span></div>
              <div className="flex items-center gap-2 text-primary-foreground/70"><Zap className="w-5 h-5 text-accent" /><span>Técnicos Certificados</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container-wedo">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {diferenciais.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3"><item.icon className="w-7 h-7 text-accent" /></div>
                <h3 className="font-semibold text-foreground mb-1">{item.titulo}</h3>
                <p className="text-sm text-muted-foreground">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-wedo">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Equipamentos Macom Atendidos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Manutenção especializada para toda linha de equipamentos de panificação Macom.</p>
          </div>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
            {equipamentos.map((equip) => (
              <AccordionItem key={equip.id} value={equip.id} className="border rounded-xl px-6 bg-card shadow-sm">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center gap-3"><Flame className="w-6 h-6 text-accent flex-shrink-0" />{equip.titulo}</div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6">
                    <p className="text-muted-foreground">{equip.conteudo.descricao}</p>
                    <div><h4 className="font-semibold text-foreground mb-3">Modelos Atendidos:</h4><div className="grid md:grid-cols-2 gap-3">{equip.conteudo.modelos.map((m, idx) => (<div key={idx} className="bg-muted/50 rounded-lg p-3"><p className="font-medium text-foreground">{m.nome}</p><p className="text-sm text-muted-foreground">{m.specs}</p></div>))}</div></div>
                    <div><h4 className="font-semibold text-foreground mb-3">Características:</h4><ul className="grid md:grid-cols-2 gap-2">{equip.conteudo.tecnologias.map((t, idx) => (<li key={idx} className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{t}</span></li>))}</ul></div>
                    <div><h4 className="font-semibold text-foreground mb-3">Serviços WeDo:</h4><ul className="grid md:grid-cols-2 gap-2">{equip.conteudo.servicos.map((s, idx) => (<li key={idx} className="flex items-start gap-2 text-sm"><Wrench className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{s}</span></li>))}</ul></div>
                    <div><h4 className="font-semibold text-foreground mb-3">Peças em Estoque:</h4><div className="flex flex-wrap gap-2">{equip.conteudo.pecas.map((p, idx) => (<span key={idx} className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full">{p}</span>))}</div></div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container-wedo">
          <div className="text-center mb-12"><h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Problemas Comuns que Resolvemos</h2></div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problemasComuns.map((problema, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader><CardTitle className="flex items-center gap-2 text-lg"><AlertTriangle className="w-5 h-5 text-amber-500" />{problema.titulo}</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div><p className="text-sm font-medium text-foreground mb-2">Sintomas:</p><ul className="space-y-1">{problema.sintomas.map((s, idx) => (<li key={idx} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-destructive">•</span>{s}</li>))}</ul></div>
                  <div><p className="text-sm font-medium text-foreground mb-2">Solução WeDo:</p><ul className="space-y-1">{problema.solucoes.slice(0, 3).map((s, idx) => (<li key={idx} className="text-sm text-muted-foreground flex items-start gap-2"><CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />{s}</li>))}</ul></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-wedo">
          <div className="text-center mb-12"><h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Contratos de Manutenção PCM</h2></div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {planosPCM.map((plano, index) => (
              <Card key={index} className={`relative ${plano.destaque ? "border-2 border-accent shadow-xl" : "border shadow-lg"}`}>
                {plano.destaque && (<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">Mais Popular</div>)}
                <CardHeader className="text-center"><CardTitle className="text-xl">{plano.nome}</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-3">{plano.beneficios.map((b, idx) => (<li key={idx} className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{b}</span></li>))}</ul>
                  <Button asChild className={`w-full mt-6 ${plano.destaque ? "bg-accent hover:bg-accent/90" : ""}`} variant={plano.destaque ? "default" : "outline"}>
                    <a href={ctaUrl} target="_blank" rel="noopener noreferrer">Solicitar Proposta</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container-wedo">
          <div className="text-center mb-12"><h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Perguntas Frequentes - Macom</h2></div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-4 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">{item.pergunta}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.resposta}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container-wedo">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-6">Precisa de Assistência Técnica para seu Equipamento Macom?</h2>
            <p className="text-lg text-primary-foreground/80 mb-8">Entre em contato agora e receba atendimento especializado para amassadeiras, divisoras, modeladoras e fornos.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href={`${WHATSAPP_URL}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5 mr-2" />Falar com Especialista</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href={ctaUrl} target="_blank" rel="noopener noreferrer">Todos os Canais de Atendimento</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
