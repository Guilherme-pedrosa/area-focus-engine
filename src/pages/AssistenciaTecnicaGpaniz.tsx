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
  Settings,
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

const CONTACT_URL = "https://contatoswedo.lovable.app/";

const equipamentos = [
  {
    id: "amassadeiras",
    titulo: "Amassadeiras G.Paniz",
    conteudo: {
      descricao: "Amassadeiras espirais e rápidas G.Paniz para panificação profissional, reconhecidas pela robustez e durabilidade em produção intensiva.",
      modelos: [
        { nome: "Espiral AE", specs: "15-80 kg • Espiral • Alta produção" },
        { nome: "Rápida AR", specs: "15-50 kg • Braço mergulhador • Versatilidade" },
        { nome: "Semi-Rápida", specs: "25-50 kg • Compacta • Custo-benefício" },
      ],
      tecnologias: [
        "Motor trifásico de alta potência",
        "Espiral em aço inox",
        "Cuba em aço inox removível",
        "Sistema de segurança (tampa/micro switch)",
        "2 velocidades (lenta e rápida)",
        "Transmissão por correias e engrenagens",
      ],
      servicos: [
        "Manutenção preventiva semestral",
        "Troca de correias e engrenagens",
        "Substituição de rolamentos",
        "Reparo motor elétrico",
        "Alinhamento espiral",
        "Troca capacitor/inversor de frequência",
      ],
      pecas: [
        "Correias",
        "Engrenagens",
        "Rolamentos",
        "Capacitores",
        "Espirais inox",
        "Micro switches",
      ],
    },
  },
  {
    id: "batedeiras",
    titulo: "Batedeiras Planetárias G.Paniz",
    conteudo: {
      descricao: "Batedeiras planetárias G.Paniz para confeitarias e padarias, com movimento planetário que garante mistura homogênea.",
      modelos: [
        { nome: "BP 12-20", specs: "12-20 litros • Bancada • Confeitaria" },
        { nome: "BP 30-40", specs: "30-40 litros • Piso • Produção média" },
        { nome: "BP 60-80", specs: "60-80 litros • Industrial • Alta produção" },
      ],
      tecnologias: [
        "Movimento planetário verdadeiro",
        "3 velocidades + pulsar",
        "Cuba e acessórios em inox",
        "Batedor, gancho e globo inclusos",
        "Protetor de respingos",
        "Motor blindado de alta potência",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Troca engrenagens planetárias",
        "Substituição rolamentos",
        "Reparo sistema de velocidades",
        "Troca de correias",
        "Lubrificação sistema mecânico",
      ],
      pecas: [
        "Engrenagens planetárias",
        "Correias",
        "Rolamentos",
        "Cubas inox",
        "Batedores e ganchos",
        "Capacitores",
      ],
    },
  },
  {
    id: "cilindros",
    titulo: "Cilindros Laminadores G.Paniz",
    conteudo: {
      descricao: "Cilindros laminadores G.Paniz para abertura uniforme de massas, essenciais em padarias, pizzarias e indústrias de massas.",
      modelos: [
        { nome: "CLI 300-390", specs: "30-39 cm • Bancada • Compacto" },
        { nome: "CLI 500-600", specs: "50-60 cm • Piso • Produção" },
        { nome: "CLI 900", specs: "90 cm • Industrial • Alta capacidade" },
      ],
      tecnologias: [
        "Rolos em aço carbono cromado",
        "Ajuste fino de espessura",
        "Esteiras de lona ou silicone",
        "Motor com redutor",
        "Sistema de segurança NR12",
        "Raspadores removíveis",
      ],
      servicos: [
        "Manutenção preventiva semestral",
        "Retífica e cromagem de rolos",
        "Troca esteiras",
        "Substituição correias e engrenagens",
        "Ajuste e calibração espessura",
        "Adequação NR12",
      ],
      pecas: [
        "Esteiras",
        "Correias",
        "Rolamentos",
        "Raspadores",
        "Engrenagens",
        "Rolos",
      ],
    },
  },
  {
    id: "cortadores-moedores",
    titulo: "Cortadores de Frios e Moedores",
    conteudo: {
      descricao: "Cortadores de frios e moedores de carne G.Paniz para açougues, supermercados e food service em geral.",
      modelos: [
        { nome: "Cortador CS 200-300", specs: "Disco 200-300mm • Semi/Automático • Frios" },
        { nome: "Moedor MCR", specs: "Boca 10-22 • Carne • Produção variada" },
        { nome: "Misturador", specs: "Carne e temperos • Industrial • Inox" },
      ],
      tecnologias: [
        "Lâmina em aço inox temperado",
        "Ajuste de espessura milimétrico",
        "Motor blindado",
        "Sistema de segurança NR12",
        "Corpo em alumínio fundido ou inox",
        "Afiador de lâmina integrado",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Afiação e troca de lâminas/discos",
        "Troca rolamentos e correias",
        "Reparo motor elétrico",
        "Adequação NR12",
        "Lubrificação e ajuste geral",
      ],
      pecas: [
        "Lâminas de corte",
        "Discos moedores",
        "Correias",
        "Rolamentos",
        "Engrenagens",
        "Eixos",
      ],
    },
  },
];

const problemasComuns = [
  {
    titulo: "Motor Não Liga",
    sintomas: [
      "Equipamento não responde ao ligar",
      "Motor faz barulho mas não gira",
      "Disjuntor desarma ao ligar",
    ],
    causas: [
      "Capacitor queimado",
      "Enrolamento do motor danificado",
      "Micro switch de segurança atuado",
      "Disjuntor subdimensionado",
    ],
    solucoes: [
      "Teste e troca de capacitor",
      "Rebobinagem ou troca do motor",
      "Ajuste/troca micro switch",
      "Dimensionamento correto disjuntor",
    ],
  },
  {
    titulo: "Vibração Excessiva / Ruído",
    sintomas: [
      "Equipamento treme ao operar",
      "Barulho metálico anormal",
      "Ruído de rangido constante",
    ],
    causas: [
      "Rolamento desgastado",
      "Correia frouxa ou partida",
      "Engrenagem desgastada",
      "Espiral/braço desalinhado",
    ],
    solucoes: [
      "Substituição de rolamentos",
      "Troca e tensionamento de correia",
      "Substituição engrenagens",
      "Realinhamento e balanceamento",
    ],
  },
  {
    titulo: "Lâmina Cega / Corte Irregular",
    sintomas: [
      "Frios saem rasgados ao invés de cortados",
      "Necessidade de força excessiva",
      "Espessura irregular de corte",
    ],
    causas: [
      "Lâmina sem fio (desgaste natural)",
      "Afiador desalinhado",
      "Guia de espessura descalibrado",
      "Rolamento do disco desgastado",
    ],
    solucoes: [
      "Afiação profissional da lâmina",
      "Ajuste do afiador integrado",
      "Calibração guia de espessura",
      "Troca rolamento do disco",
    ],
  },
];

const diferenciais = [
  {
    icon: Settings,
    titulo: "Especialistas G.Paniz",
    descricao: "Técnicos com experiência em equipamentos mecânicos de panificação.",
  },
  {
    icon: Zap,
    titulo: "Atendimento Ágil",
    descricao: "Resposta rápida para minimizar parada na produção.",
  },
  {
    icon: Shield,
    titulo: "Peças Originais",
    descricao: "Componentes originais G.Paniz para reposição imediata.",
  },
  {
    icon: FileCheck,
    titulo: "Adequação NR12",
    descricao: "Adequação de segurança conforme norma regulamentadora.",
  },
];

const planosPCM = [
  {
    nome: "Essencial",
    beneficios: [
      "2 manutenções preventivas/ano",
      "Lubrificação e inspeção geral",
      "Desconto 20% peças",
      "Atendimento em horário comercial",
    ],
  },
  {
    nome: "Profissional",
    destaque: true,
    beneficios: [
      "4 manutenções preventivas/ano",
      "Troca preventiva de correias",
      "Desconto 30% peças",
      "1 corretiva inclusa/ano",
      "Atendimento prioritário",
    ],
  },
  {
    nome: "Corporativo",
    beneficios: [
      "6 manutenções preventivas/ano",
      "Adequação NR12 inclusa",
      "Desconto 40% peças",
      "Corretivas inclusas",
      "Atendimento express",
    ],
  },
];

const faqItems = [
  {
    pergunta: "Quais equipamentos G.Paniz vocês atendem?",
    resposta: "Atendemos toda a linha: amassadeiras espirais e rápidas, batedeiras planetárias, cilindros laminadores, cortadores de frios, moedores de carne, divisoras, modeladoras e fornos convector.",
  },
  {
    pergunta: "Com que frequência devo trocar correias da amassadeira?",
    resposta: "A vida útil das correias varia de 1-3 anos dependendo da intensidade de uso. Na manutenção preventiva verificamos desgaste e tensionamento. Recomendamos troca preventiva antes da ruptura.",
  },
  {
    pergunta: "Minha amassadeira está fazendo barulho. O que pode ser?",
    resposta: "Causas comuns: rolamento desgastado, correia frouxa, engrenagem com desgaste ou espiral desalinhado. Diagnóstico no local identifica a causa exata e evita dano maior.",
  },
  {
    pergunta: "Vocês fazem adequação NR12 em equipamentos G.Paniz?",
    resposta: "Sim, realizamos adequação completa à NR12 incluindo instalação de micro switches de segurança, proteções mecânicas e documentação técnica para fiscalização.",
  },
  {
    pergunta: "Qual a diferença entre amassadeira espiral e rápida?",
    resposta: "A espiral tem braço fixo e cuba giratória, ideal para massas pesadas (pães). A rápida tem braço mergulhador (tipo garfo), mais versátil para diferentes tipos de massa.",
  },
  {
    pergunta: "Quanto tempo leva uma manutenção preventiva?",
    resposta: "Em média 1-3 horas por equipamento, dependendo do modelo. Inclui lubrificação, verificação de correias, rolamentos, alinhamento e teste de segurança.",
  },
  {
    pergunta: "Vocês têm peças originais G.Paniz em estoque?",
    resposta: "Mantemos em estoque as peças de maior giro: correias, engrenagens, rolamentos, capacitores e micro switches. Peças especiais são encomendadas com prazo reduzido.",
  },
  {
    pergunta: "Atendem padarias no interior de Goiás?",
    resposta: "Sim, atendemos em todo o estado de Goiás e Distrito Federal. Entre em contato para verificar disponibilidade na sua região.",
  },
];

export default function AssistenciaTecnicaGpaniz() {
  const { ctaUrl, ctaText } = useCTASettings();

  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica G.Paniz | Manutenção Amassadeira Batedeira Cilindro | WeDo</title>
        <meta
          name="description"
          content="Assistência técnica especializada G.Paniz. Manutenção preventiva e corretiva para amassadeiras, batedeiras planetárias, cilindros laminadores, cortadores e moedores. Peças originais."
        />
        <meta
          name="keywords"
          content="assistência técnica gpaniz, manutenção gpaniz, amassadeira gpaniz, batedeira gpaniz, cilindro gpaniz, cortador frios gpaniz"
        />
        <link rel="canonical" href="https://wedocozinhas.com.br/assistencia-tecnica-gpaniz" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
        </div>

        <div className="container-wedo relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Settings className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">+40 Anos Líder em Panificação e Food Service</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica G.Paniz
              <span className="block text-accent mt-2">Amassadeiras, Batedeiras, Cilindros e Mais</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em toda linha G.Paniz de equipamentos mecânicos para panificação e food service.
              Correias, engrenagens, rolamentos e peças originais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
              >
                <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
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
                <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Canais de Contato
                </a>
              </Button>
            </div>

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
                <span>Técnicos Certificados</span>
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
              Equipamentos G.Paniz Atendidos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manutenção especializada para toda linha de equipamentos mecânicos G.Paniz.
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
                    <Settings className="w-6 h-6 text-accent flex-shrink-0" />
                    {equip.titulo}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6">
                    <p className="text-muted-foreground">{equip.conteudo.descricao}</p>
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
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Peças em Estoque:</h4>
                      <div className="flex flex-wrap gap-2">
                        {equip.conteudo.pecas.map((peca, idx) => (
                          <span key={idx} className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full">
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
                          <span className="text-destructive">•</span>{s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Solução WeDo:</p>
                    <ul className="space-y-1">
                      {problema.solucoes.slice(0, 3).map((s, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />{s}
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
              <Card key={index} className={`relative ${plano.destaque ? "border-2 border-accent shadow-xl" : "border shadow-lg"}`}>
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
                  <Button asChild className={`w-full mt-6 ${plano.destaque ? "bg-accent hover:bg-accent/90" : ""}`} variant={plano.destaque ? "default" : "outline"}>
                    <a href={ctaUrl} target="_blank" rel="noopener noreferrer">Solicitar Proposta</a>
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
              Perguntas Frequentes - G.Paniz
            </h2>
          </div>
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

      {/* CTA Final */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container-wedo">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-6">
              Precisa de Assistência Técnica para seu Equipamento G.Paniz?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Entre em contato agora e receba atendimento especializado para amassadeiras, batedeiras, cilindros e mais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar com Especialista
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
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