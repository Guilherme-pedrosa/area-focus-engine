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
  Cog,
  Clock,
  Shield,
  CheckCircle,
  AlertTriangle,
  Phone,
  Wrench,
  Zap,
  FileCheck,
  MessageCircle,
  Leaf,
} from "lucide-react";
import { useCTASettings } from "@/hooks/useSiteSettings";

const WHATSAPP_URL = "https://wa.me/5562993775711";

const equipamentos = [
  {
    id: "linha-r",
    titulo: "Processadores Linha R - Versáteis e Potentes",
    conteudo: {
      descricao: "Os processadores Robot Coupe Linha R são os mais versáteis do mercado profissional com centenas de acessórios opcionais. Ideais para picar, triturar, moer, emulsificar, ralar e fatiar.",
      modelos: [
        { nome: "R2 (2L)", specs: "0,55 HP • Bancada • Cozinhas pequenas" },
        { nome: "R4 (4L)", specs: "1 HP • Bancada • Restaurantes e catering" },
        { nome: "R8 (8L)", specs: "1,5 HP • Bancada • Grande produção" },
        { nome: "R10 (10L)", specs: "2 HP • Vertical • Industrial" },
        { nome: "R30 (30L)", specs: "5,5 HP • Piso • Indústrias" },
      ],
      tecnologias: [
        "Lâmina S inox ultra-afiada",
        "Cuba policarbonato ou inox",
        "Velocidade: 1500/3000 RPM",
        "Sistema segurança tampa",
        "Múltiplos discos opcionais",
        "Motor profissional reforçado",
      ],
      servicos: [
        "Manutenção preventiva semestral",
        "Troca lâminas/discos (afiação ou substituição)",
        "Reparo motor (rolamentos, escovas)",
        "Substituição selo mecânico cuba",
        "Troca micro switches tampa",
        "Lubrificação eixo/engrenagens",
        "Calibração velocidades",
        "Teste segurança elétrica",
      ],
      pecas: [
        "Lâminas inox (S-blade)",
        "Discos corte/ralador diversos",
        "Cubas policarbonato/inox",
        "Tampas com funil",
        "Selos mecânicos",
        "Micro switches segurança",
        "Rolamentos",
      ],
    },
  },
  {
    id: "cutters",
    titulo: "Cutters - Processamento Ultra-Fino",
    conteudo: {
      descricao: "Os cutters Robot Coupe são equipamentos de alta rotação para processamento ultra-fino de alimentos (emulsão, pasta, creme). Ideais para molhos, patês e mousses.",
      modelos: [
        { nome: "R4, R5, R8", specs: "Bancada • Cubas 4,5 a 8L • Molhos e patês" },
        { nome: "R15, R20", specs: "Piso • Cubas 15 a 20L • Média produção" },
        { nome: "R30", specs: "Piso • Cuba 30L • Produção industrial" },
      ],
      tecnologias: [
        "Lâmina S inox ultra-afiada",
        "Cuba inox polida (evita aderência)",
        "Velocidade: 1500/3000 RPM",
        "Sistema segurança tampa",
        "Controle velocidade variável",
        "Alta potência (3 a 5,5 HP)",
      ],
      servicos: [
        "Afiação profissional lâmina S",
        "Balanceamento lâmina (evita vibração)",
        "Troca rolamentos eixo principal",
        "Reparo selo cuba",
        "Lubrificação sistema transmissão",
        "Teste segurança operacional",
      ],
      pecas: [
        "Lâminas S profissionais",
        "Selos mecânicos cuba",
        "Rolamentos eixo",
        "Correias motor",
        "Micro switches",
      ],
    },
  },
  {
    id: "cortadores-cl",
    titulo: "Cortadores Vegetais Linha CL - Produtividade Máxima",
    conteudo: {
      descricao: "Os cortadores vegetais Robot Coupe Linha CL são especializados em preparo rápido de vegetais com 28+ discos intercambiáveis para fatiamento, julienne, cubos e mais.",
      modelos: [
        { nome: "CL30 (Bistro)", specs: "0,55 HP • Até 250 refeições • 5 discos" },
        { nome: "CL50/CL52", specs: "1 HP • Até 500 refeições • 28+ discos" },
        { nome: "CL55 (Pusher Duplo)", specs: "Sistema dual • Até 750 refeições" },
        { nome: "CL60 (Industrial)", specs: "1,5 HP • Até 1000 refeições • Boca XL" },
      ],
      tecnologias: [
        "28+ tipos de discos disponíveis",
        "Fatiamento: 0,5mm a 10mm",
        "Julienne: 2x2mm a 8x8mm",
        "Cubos: 6x6mm a 25x25mm",
        "Ripple cut, waffles, chips",
        "Sistema ejetor automático",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Afiação/substituição discos",
        "Troca motor (queima por sobrecarga)",
        "Substituição sistema segurança",
        "Reparo ejetor vegetais",
        "Lubrificação partes móveis",
        "Treinamento operacional discos",
      ],
      pecas: [
        "Discos fatiamento diversos",
        "Discos julienne",
        "Discos cubos",
        "Motores",
        "Ejetores",
        "Micro switches",
      ],
    },
  },
  {
    id: "blixer",
    titulo: "Blixer - Liquidificadores Profissionais",
    conteudo: {
      descricao: "Os Blixer Robot Coupe combinam a função de liquidificador com cutter, ideais para sopas, purês, emulsões e preparações líquidas ou pastosas.",
      modelos: [
        { nome: "Blixer 3", specs: "3,7L • Bancada • Uso geral" },
        { nome: "Blixer 5", specs: "5,5L • Bancada • Restaurantes" },
        { nome: "Blixer 6", specs: "7L • Bancada • Catering" },
      ],
      tecnologias: [
        "Sistema híbrido liquidificador + cutter",
        "Cuba vedada para líquidos",
        "Lâmina especial emulsificação",
        "Velocidade variável",
        "Sistema segurança reforçado",
      ],
      servicos: [
        "Manutenção preventiva",
        "Troca lâminas especiais",
        "Substituição vedações cuba",
        "Reparo motor",
        "Teste estanqueidade",
      ],
      pecas: [
        "Lâminas Blixer",
        "Vedações cuba",
        "Tampas",
        "Motores",
      ],
    },
  },
];

const problemasComuns = [
  {
    titulo: "Motor Não Liga",
    sintomas: [
      "Equipamento não responde",
      "Motor não gira ao ligar",
      "Desliga durante uso",
    ],
    causas: [
      "Micro switch tampa desajustado",
      "Sistema segurança acionado",
      "Capacitor de partida queimado",
      "Motor sobrecarregado",
    ],
    solucoes: [
      "Verificação e ajuste micro switches",
      "Teste sistema segurança completo",
      "Substituição capacitor",
      "Avaliação motor (rolamentos, escovas)",
    ],
  },
  {
    titulo: "Vazamento na Cuba",
    sintomas: [
      "Líquido escorrendo pela base",
      "Cuba não veda corretamente",
      "Manchas de gordura na base",
    ],
    causas: [
      "Selo mecânico desgastado",
      "Cuba trincada",
      "Eixo com folga",
    ],
    solucoes: [
      "Substituição selo mecânico original",
      "Troca cuba (policarbonato ou inox)",
      "Ajuste/troca rolamento eixo",
    ],
  },
  {
    titulo: "Vibração Excessiva",
    sintomas: [
      "Equipamento treme muito",
      "Barulho anormal durante uso",
      "Lâmina parece desbalanceada",
    ],
    causas: [
      "Rolamentos desgastados",
      "Lâmina mal posicionada",
      "Disco desbalanceado",
      "Base solta",
    ],
    solucoes: [
      "Troca rolamentos eixo principal",
      "Reposicionamento/troca lâmina",
      "Balanceamento disco",
      "Fixação correta base",
    ],
  },
];

const diferenciais = [
  {
    icon: Cog,
    titulo: "Especialistas Robot Coupe",
    descricao: "Técnicos com experiência em toda linha de processadores e cutters.",
  },
  {
    icon: Leaf,
    titulo: "Afiação Profissional",
    descricao: "Serviço de afiação de lâminas S e discos com equipamento especializado.",
  },
  {
    icon: Shield,
    titulo: "Peças Originais",
    descricao: "Estoque de componentes originais Robot Coupe para reposição imediata.",
  },
  {
    icon: FileCheck,
    titulo: "Treinamento Operacional",
    descricao: "Orientação para uso correto dos 28+ tipos de discos disponíveis.",
  },
];

const planosPCM = [
  {
    nome: "Essencial",
    beneficios: [
      "2 manutenções preventivas/ano",
      "Lubrificação e inspeção",
      "Desconto 20% peças",
      "Atendimento em horário comercial",
    ],
  },
  {
    nome: "Profissional",
    destaque: true,
    beneficios: [
      "4 manutenções preventivas/ano",
      "Afiação lâminas inclusa",
      "Desconto 30% peças",
      "1 corretiva inclusa/ano",
      "Atendimento prioritário",
    ],
  },
  {
    nome: "Corporativo",
    beneficios: [
      "6 manutenções preventivas/ano",
      "Afiação trimestral inclusa",
      "Desconto 40% peças",
      "Corretivas inclusas",
      "Atendimento express",
    ],
  },
];

const faqItems = [
  {
    pergunta: "Robot Coupe vale o investimento para restaurante pequeno?",
    resposta: "Sim, modelos compactos (R2, R4, CL30) pagam o investimento em 6-12 meses pela economia de mão de obra. Um R4 processa em 2 minutos o que levaria 20 minutos manualmente.",
  },
  {
    pergunta: "Qual a diferença entre processador e cutter Robot Coupe?",
    resposta: "Processador (Linha R com discos): corta, fatia, rala, julienne (cortes definidos). Cutter (Linha R com lâmina S): tritura, emulsifica, faz pastas, patês, mousses (processamento fino homogêneo).",
  },
  {
    pergunta: "Posso afiar lâminas Robot Coupe?",
    resposta: "Lâminas S de cutters: sim, afiação profissional. Discos de corte desgastados: substituição recomendada (afiação pode desbalancear). WeDo faz ambos serviços.",
  },
  {
    pergunta: "Qual a frequência de manutenção Robot Coupe?",
    resposta: "Uso intensivo (>4h/dia): semestral. Uso padrão (2-4h/dia): anual. Manutenção inclui: lubrificação, inspeção segurança, teste motor, verificação lâminas.",
  },
  {
    pergunta: "Motor Robot Coupe queima frequentemente. Por quê?",
    resposta: "Principais causas: sobrecarga (vegetais muito duros, cuba muito cheia), ventilação inadequada (motor superaquece), uso contínuo sem pausas. Respeitar capacidade e duty cycle do modelo.",
  },
];

export default function AssistenciaTecnicaRobotCoupe() {
  const { ctaUrl, ctaText } = useCTASettings();
  const whatsappMessage = encodeURIComponent(
    "Olá! Preciso de assistência técnica para meu equipamento Robot Coupe."
  );

  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Robot Coupe | Manutenção Processador Cutter Liquidificador | WeDo</title>
        <meta
          name="description"
          content="Assistência técnica especializada Robot Coupe Brasil. Manutenção preventiva e corretiva para processadores de alimentos, cutters, liquidificadores profissionais. Peças originais, técnicos certificados."
        />
        <meta
          name="keywords"
          content="assistência técnica robot coupe, manutenção robot coupe, processador alimentos robot coupe, cutter robot coupe, robot coupe brasil"
        />
        <link rel="canonical" href="https://wedocorp.com.br/assistencia-tecnica-robot-coupe" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl" />
        </div>

        <div className="container-wedo relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Cog className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">Líder Mundial em Processadores desde 1961</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica Robot Coupe
              <span className="block text-accent mt-2">Processadores, Cutters e Cortadores Vegetais</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em toda linha Robot Coupe. 
              Afiação de lâminas, troca de peças originais e atendimento técnico certificado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
              >
                <a href={`${WHATSAPP_URL}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="tel:+5562993775711">
                  <Phone className="w-5 h-5 mr-2" />
                  (62) 99377-5711
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Clock className="w-5 h-5 text-accent" />
                <span>Atendimento Rápido</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Shield className="w-5 h-5 text-accent" />
                <span>Peças Originais</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Zap className="w-5 h-5 text-accent" />
                <span>Afiação Profissional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-12 bg-muted/30">
        <div className="container-wedo">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {diferenciais.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.titulo}</h3>
                <p className="text-sm text-muted-foreground">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipamentos Accordion */}
      <section className="py-16 lg:py-24">
        <div className="container-wedo">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Equipamentos Robot Coupe Atendidos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manutenção especializada para toda linha de processadores, cutters e cortadores vegetais.
            </p>
          </div>

          <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
            {equipamentos.map((equip) => (
              <AccordionItem
                key={equip.id}
                value={equip.id}
                className="border rounded-xl px-6 bg-card shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center gap-3">
                    <Cog className="w-6 h-6 text-accent flex-shrink-0" />
                    {equip.titulo}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6">
                    <p className="text-muted-foreground">{equip.conteudo.descricao}</p>

                    {/* Modelos */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Modelos Atendidos:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {equip.conteudo.modelos.map((modelo, idx) => (
                          <div key={idx} className="bg-muted/50 rounded-lg p-3">
                            <p className="font-medium text-foreground">{modelo.nome}</p>
                            <p className="text-sm text-muted-foreground">{modelo.specs}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tecnologias */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Características:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {equip.conteudo.tecnologias.map((tec, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{tec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Serviços */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Serviços WeDo:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {equip.conteudo.servicos.map((serv, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Wrench className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{serv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Peças */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Peças em Estoque:</h4>
                      <div className="flex flex-wrap gap-2">
                        {equip.conteudo.pecas.map((peca, idx) => (
                          <span
                            key={idx}
                            className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full"
                          >
                            {peca}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Problemas Comuns */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container-wedo">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Problemas Comuns que Resolvemos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problemasComuns.map((problema, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    {problema.titulo}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Sintomas:</p>
                    <ul className="space-y-1">
                      {problema.sintomas.map((s, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-destructive">•</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Solução WeDo:</p>
                    <ul className="space-y-1">
                      {problema.solucoes.slice(0, 3).map((s, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planos PCM */}
      <section className="py-16 lg:py-24">
        <div className="container-wedo">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Contratos de Manutenção PCM
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {planosPCM.map((plano, index) => (
              <Card
                key={index}
                className={`relative ${plano.destaque ? "border-2 border-accent shadow-xl" : "border shadow-lg"}`}
              >
                {plano.destaque && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Mais Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plano.nome}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plano.beneficios.map((beneficio, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full mt-6 ${plano.destaque ? "bg-accent hover:bg-accent/90" : ""}`}
                    variant={plano.destaque ? "default" : "outline"}
                  >
                    <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                      Solicitar Proposta
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container-wedo">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Perguntas Frequentes - Robot Coupe
            </h2>
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border rounded-lg px-4 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container-wedo">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-6">
              Precisa de Assistência Técnica para seu Robot Coupe?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Entre em contato agora e receba atendimento especializado para processadores, cutters e cortadores vegetais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <a href={`${WHATSAPP_URL}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar com Especialista
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                  Todos os Canais de Atendimento
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
