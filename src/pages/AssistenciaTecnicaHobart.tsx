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
  Droplets,
  Clock,
  Shield,
  CheckCircle,
  AlertTriangle,
  Phone,
  Wrench,
  Zap,
  FileCheck,
  MessageCircle,
  ThermometerSun,
} from "lucide-react";

const LINKTREE_URL = "https://linktr.ee/wedocorp";
const WHATSAPP_URL = "https://wa.me/5562993775711";

const equipamentos = [
  {
    id: "ecomax",
    titulo: "Linha Ecomax - Lavadoras Compactas",
    conteudo: {
      descricao: "As lavadoras Hobart Ecomax são a linha de entrada para cozinhas profissionais, oferecendo alta performance com baixo consumo de água e energia.",
      modelos: [
        { nome: "Ecomax 402", specs: "Compacta • Copos e utensílios • 40 cestos/h" },
        { nome: "Ecomax 502", specs: "Cesto 500x500mm • Pratos e panelas • 60 cestos/h" },
        { nome: "Ecomax 602", specs: "Alta produção • 70 cestos/h" },
      ],
      tecnologias: [
        "Sistema Energy Save (baixo consumo)",
        "Ciclos de lavagem otimizados",
        "Painel digital intuitivo",
        "Booster integrado 82°C",
        "Construção inox reforçada",
        "Porta dupla parede isolada",
      ],
      servicos: [
        "Manutenção preventiva mensal/trimestral",
        "Limpeza técnica (descalcificação)",
        "Calibração temperatura lavagem/booster",
        "Troca resistências",
        "Substituição bombas",
        "Reparo sistema dosador",
        "Teste pressão e vazão",
      ],
      pecas: [
        "Resistências lavagem/booster",
        "Bombas de lavagem",
        "Eletroválvulas",
        "Braços aspersão",
        "Placas eletrônicas",
        "Vedações porta",
      ],
    },
  },
  {
    id: "fx-series",
    titulo: "Linha FX - Alta Performance",
    conteudo: {
      descricao: "As lavadoras Hobart série FX representam o topo da linha em tecnologia de lavagem industrial, com sistemas avançados de economia e higienização.",
      modelos: [
        { nome: "FX-10B", specs: "Cesto 500mm • Break tank • 60 cestos/h" },
        { nome: "FX-30", specs: "Cesto 500mm • Alta produção • 80 cestos/h" },
        { nome: "FX-40", specs: "Premium • Energy Recovery • 80+ cestos/h" },
      ],
      tecnologias: [
        "Energy Recovery System (economia 50%+)",
        "Vapor condensation (recuperação calor)",
        "Painel touchscreen colorido",
        "Sistema SMART conectado",
        "Dosagem química automática",
        "Ciclos HACCP registrados",
        "Break tank integrado",
      ],
      servicos: [
        "Manutenção preventiva especializada",
        "Calibração sistema Energy Recovery",
        "Atualização software",
        "Diagnóstico sistema SMART",
        "Reparo painéis touchscreen",
        "Configuração dosagem química",
        "Relatórios HACCP",
      ],
      pecas: [
        "Placas eletrônicas FX",
        "Painéis touchscreen",
        "Bombas alta pressão",
        "Sistemas dosadores",
        "Sensores temperatura",
        "Componentes Energy Recovery",
      ],
    },
  },
  {
    id: "passagem",
    titulo: "Lavadoras de Passagem (Túnel)",
    conteudo: {
      descricao: "Lavadoras Hobart de passagem para alta produção contínua, ideais para hospitais, hotéis e catering de grande porte.",
      modelos: [
        { nome: "CN Series", specs: "Passagem contínua • 100+ cestos/h" },
        { nome: "CP Series", specs: "Linha premium • 150+ cestos/h" },
      ],
      tecnologias: [
        "Sistema de passagem contínua",
        "Múltiplas zonas de lavagem",
        "Secagem por ar quente",
        "Automação completa",
        "Monitoramento IoT",
        "Ultra alta capacidade",
      ],
      servicos: [
        "Manutenção preventiva mensal",
        "Calibração zonas de temperatura",
        "Limpeza sistema de esteira",
        "Reparo sistema de secagem",
        "Diagnóstico automação",
        "Teste performance completo",
      ],
      pecas: [
        "Esteiras e correntes",
        "Resistências múltiplas zonas",
        "Motores e redutores",
        "Sensores e controladores",
        "Componentes automação",
      ],
    },
  },
];

const problemasComuns = [
  {
    titulo: "Louças Não Secam Corretamente",
    sintomas: [
      "Louças saem molhadas",
      "Manchas d'água após ciclo",
      "Temperatura booster baixa",
    ],
    causas: [
      "Resistência booster queimada",
      "Temperatura abaixo de 82°C",
      "Falta de abrilhantador",
      "Dosadora com defeito",
    ],
    solucoes: [
      "Teste e troca resistência booster",
      "Calibração temperatura enxágue",
      "Ajuste sistema dosador",
      "Verificação bomba abrilhantador",
    ],
  },
  {
    titulo: "Lavagem Insuficiente",
    sintomas: [
      "Resíduos permanecem nas louças",
      "Gordura não é removida",
      "Manchas brancas (calcário)",
    ],
    causas: [
      "Braços aspersão entupidos",
      "Pressão bomba insuficiente",
      "Temperatura lavagem baixa",
      "Detergente inadequado",
    ],
    solucoes: [
      "Limpeza e desobstrução braços",
      "Teste pressão bomba lavagem",
      "Calibração temperatura",
      "Ajuste concentração química",
    ],
  },
  {
    titulo: "Alarmes e Erros Display",
    sintomas: [
      "Códigos de erro no painel",
      "Máquina não inicia ciclo",
      "Alarme sonoro constante",
    ],
    causas: [
      "Sensor temperatura defeituoso",
      "Nível água incorreto",
      "Porta não fechada corretamente",
      "Falha comunicação placas",
    ],
    solucoes: [
      "Diagnóstico códigos de erro",
      "Teste sensores (NTC, pressostato)",
      "Verificação micro switch porta",
      "Reparo/troca placa eletrônica",
    ],
  },
];

const diferenciais = [
  {
    icon: Droplets,
    titulo: "Especialistas Hobart",
    descricao: "Técnicos com experiência em toda linha de lavadoras industriais.",
  },
  {
    icon: ThermometerSun,
    titulo: "Calibração HACCP",
    descricao: "Garantia de temperaturas corretas para higienização certificada.",
  },
  {
    icon: Shield,
    titulo: "Peças Originais",
    descricao: "Estoque de componentes originais Hobart para reposição imediata.",
  },
  {
    icon: FileCheck,
    titulo: "Documentação Técnica",
    descricao: "Relatórios completos para auditorias ANVISA e certificações.",
  },
];

const planosPCM = [
  {
    nome: "Essencial",
    beneficios: [
      "4 manutenções preventivas/ano",
      "Limpeza técnica profunda",
      "Desconto 20% peças",
      "SLA 8h horário comercial",
    ],
  },
  {
    nome: "Profissional",
    destaque: true,
    beneficios: [
      "6 manutenções preventivas/ano",
      "Descalcificação trimestral",
      "Desconto 30% peças",
      "2 corretivas inclusas/ano",
      "SLA 4h atendimento 24/7",
    ],
  },
  {
    nome: "Corporativo",
    beneficios: [
      "Manutenção mensal personalizada",
      "Análise qualidade água inclusa",
      "Desconto 40% peças",
      "Mão de obra corretiva inclusa",
      "SLA 2h atendimento 24/7",
    ],
  },
];

const faqItems = [
  {
    pergunta: "Qual a diferença entre Ecomax e FX?",
    resposta: "Ecomax é a linha de entrada, ideal para operações de médio porte. FX é a linha premium com Energy Recovery, painel touchscreen e sistema SMART para máxima economia e controle.",
  },
  {
    pergunta: "Qual temperatura ideal para higienização HACCP?",
    resposta: "Lavagem: mínimo 60°C. Enxágue (booster): mínimo 82°C por 10 segundos. Essas temperaturas garantem eliminação de 99,9% dos microorganismos conforme normas sanitárias.",
  },
  {
    pergunta: "Com que frequência devo fazer descalcificação?",
    resposta: "Depende da dureza da água. Água dura (>200ppm CaCO3): semanal. Água média: quinzenal. Água tratada: mensal. Recomendamos análise de água para definir frequência ideal.",
  },
  {
    pergunta: "A lavadora está consumindo muito detergente. O que fazer?",
    resposta: "Causas comuns: bomba dosadora descalibrada, vazamento na linha química, ou concentração errada. WeDo realiza calibração precisa do sistema dosador com medição de concentração.",
  },
  {
    pergunta: "Vocês atendem lavadoras de passagem (túnel)?",
    resposta: "Sim, atendemos toda linha Hobart incluindo lavadoras de passagem CN e CP Series. Manutenção especializada com calibração de múltiplas zonas e sistema de esteira.",
  },
];

export default function AssistenciaTecnicaHobart() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Preciso de assistência técnica para minha lava-louças Hobart."
  );

  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Hobart | Manutenção Lava-Louças Industrial Ecomax FX | WeDo</title>
        <meta
          name="description"
          content="Assistência técnica especializada Hobart Brasil. Manutenção preventiva e corretiva para lava-louças industriais Ecomax, FX, lavadoras de passagem. Peças originais, técnicos certificados."
        />
        <meta
          name="keywords"
          content="assistência técnica hobart, manutenção hobart, lava-louças hobart, ecomax manutenção, fx40 hobart"
        />
        <link rel="canonical" href="https://wedocorp.com.br/assistencia-tecnica-hobart" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>

        <div className="container-wedo relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Droplets className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">Líder Mundial em Lava-Louças Industriais</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica Hobart
              <span className="block text-accent mt-2">Lava-Louças Industriais Ecomax e FX</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em toda linha Hobart de lava-louças industriais. 
              Calibração HACCP, peças originais e atendimento emergencial.
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
                <span>Atendimento em até 4h</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Shield className="w-5 h-5 text-accent" />
                <span>Peças Originais Hobart</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Zap className="w-5 h-5 text-accent" />
                <span>Calibração HACCP</span>
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
              Equipamentos Hobart Atendidos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manutenção especializada para toda linha de lava-louças industriais Hobart.
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
                    <Droplets className="w-6 h-6 text-accent flex-shrink-0" />
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
                      <h4 className="font-semibold text-foreground mb-3">Tecnologias:</h4>
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
                      <h4 className="font-semibold text-foreground mb-3">Peças Originais em Estoque:</h4>
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
                    <a href={LINKTREE_URL} target="_blank" rel="noopener noreferrer">
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
              Perguntas Frequentes - Hobart
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
              Precisa de Assistência Técnica para sua Lava-Louças Hobart?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Entre em contato agora e receba atendimento especializado para toda linha Ecomax e FX.
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
                <a href={LINKTREE_URL} target="_blank" rel="noopener noreferrer">
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
