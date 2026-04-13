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
  Award,
} from "lucide-react";
import { useCTASettings } from "@/hooks/useSiteSettings";

const CONTACT_URL = "https://contatoswedo.lovable.app/";

const equipamentos = [
  {
    id: "frontal",
    titulo: "Lavadoras de Abertura Frontal (UC Series)",
    conteudo: {
      descricao: "Lavadoras undercounter Winterhalter para operações de médio porte, com tecnologia de lavagem superior e baixo consumo de água e energia.",
      modelos: [
        { nome: "UC-S", specs: "Compacta • Copos e xícaras • Bares" },
        { nome: "UC-M", specs: "Média • Pratos e talheres • Restaurantes" },
        { nome: "UC-L", specs: "Grande • Uso intensivo • Cozinhas profissionais" },
        { nome: "UC-XL", specs: "Extra grande • Alta capacidade • Hotels" },
      ],
      tecnologias: [
        "Sistema de filtração integrado",
        "Booster de temperatura (85°C)",
        "Braços aspersão de alta pressão",
        "Dosagem automática de químicos",
        "Painel digital intuitivo",
        "Sistema de tratamento de água",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Limpeza e desobstrução braços aspersão",
        "Calibração dosadores químicos",
        "Troca de resistências e sondas",
        "Reparo bomba de lavagem",
        "Descalcificação sistema hidráulico",
      ],
      pecas: [
        "Resistências (lavagem e booster)",
        "Bombas de lavagem",
        "Braços aspersão",
        "Eletroválvulas",
        "Sondas NTC",
        "Vedações de porta",
      ],
    },
  },
  {
    id: "capota",
    titulo: "Lavadoras Capota / Hood Type (PT Series)",
    conteudo: {
      descricao: "Lavadoras hood type Winterhalter para operações de alto volume, com abertura por capota para carga rápida e ciclos eficientes.",
      modelos: [
        { nome: "PT-M", specs: "Média • Ciclo rápido • Restaurantes" },
        { nome: "PT-L", specs: "Grande • Alta produção • Hotels" },
        { nome: "PT-XL", specs: "Extra grande • Máxima capacidade • Catering" },
      ],
      tecnologias: [
        "Abertura por capota ergonômica",
        "Sistema de condensação de vapor",
        "Recuperação de calor integrada",
        "Múltiplos programas de lavagem",
        "Auto-limpeza programável",
        "Conectividade IoT (modelos recentes)",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Reparo sistema de capota (amortecedores/molas)",
        "Troca bomba de lavagem e enxágue",
        "Calibração sistema de dosagem",
        "Substituição resistências booster",
        "Diagnóstico e reparo placa eletrônica",
      ],
      pecas: [
        "Bombas de lavagem",
        "Resistências booster",
        "Amortecedores capota",
        "Pressostatos",
        "Placas eletrônicas",
        "Filtros e vedações",
      ],
    },
  },
  {
    id: "esteira",
    titulo: "Lavadoras de Esteira (STR Series)",
    conteudo: {
      descricao: "Lavadoras de esteira Winterhalter para operações de altíssimo volume em hotéis, hospitais e catering de grande porte.",
      modelos: [
        { nome: "STR Series", specs: "Esteira contínua • Modular • Industrial" },
      ],
      tecnologias: [
        "Esteira contínua modular",
        "Múltiplas zonas de lavagem",
        "Secagem integrada",
        "Recuperação de calor",
        "Sistemas de pré-lavagem",
        "Monitoramento remoto",
      ],
      servicos: [
        "Manutenção preventiva mensal/trimestral",
        "Reparo e ajuste esteira",
        "Troca de cortinas e vedações",
        "Manutenção sistema de secagem",
        "Calibração zonas de temperatura",
        "Reparo motores e transmissão",
      ],
      pecas: [
        "Esteiras e correntes",
        "Cortinas de separação",
        "Motores",
        "Resistências",
        "Bombas",
        "Sensores e controles",
      ],
    },
  },
  {
    id: "utensilios",
    titulo: "Lavadoras de Utensílios (UF Series)",
    conteudo: {
      descricao: "Lavadoras de utensílios e panelas Winterhalter projetadas para itens grandes e pesados como GN, panelas e assadeiras.",
      modelos: [
        { nome: "UF Series", specs: "Utensílios grandes • Alta pressão • Heavy-duty" },
      ],
      tecnologias: [
        "Jatos de alta pressão rotativos",
        "Cuba grande para itens GN e panelas",
        "Ciclos especiais para gordura pesada",
        "Construção toda em aço inox",
        "Filtragem robusta",
        "Dosagem química reforçada",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Limpeza profunda sistema de jatos",
        "Troca de bombas de alta pressão",
        "Calibração dosagem química",
        "Substituição vedações e filtros",
        "Reparo sistema elétrico",
      ],
      pecas: [
        "Bombas de alta pressão",
        "Jatos rotativos",
        "Resistências",
        "Filtros",
        "Vedações",
        "Eletroválvulas",
      ],
    },
  },
];

const problemasComuns = [
  {
    titulo: "Louças Saem com Resíduos",
    sintomas: [
      "Restos de alimento após ciclo",
      "Manchas brancas nas louças",
      "Copos opacos ou com marcas",
    ],
    causas: [
      "Braços aspersão entupidos",
      "Pressão de lavagem baixa",
      "Dosador químico desregulado",
      "Calcário excessivo (sem tratamento)",
    ],
    solucoes: [
      "Desobstrução braços aspersão",
      "Verificação bomba de lavagem",
      "Calibração sistema de dosagem",
      "Instalação tratamento de água",
    ],
  },
  {
    titulo: "Não Aquece / Temperatura Baixa",
    sintomas: [
      "Água não atinge temperatura",
      "Ciclo de enxágue frio",
      "Higienização comprometida",
    ],
    causas: [
      "Resistência booster queimada",
      "Sonda NTC defeituosa",
      "Contator do booster travado",
      "Placa eletrônica com falha",
    ],
    solucoes: [
      "Teste e troca resistência booster",
      "Substituição sonda NTC",
      "Troca contator elétrico",
      "Diagnóstico placa eletrônica",
    ],
  },
  {
    titulo: "Vazamento / Bomba com Ruído",
    sintomas: [
      "Água no chão sob a máquina",
      "Barulho anormal da bomba",
      "Vibração excessiva durante ciclo",
    ],
    causas: [
      "Vedação da porta desgastada",
      "Rolamento da bomba danificado",
      "Mangueira furada ou solta",
      "Selo mecânico com desgaste",
    ],
    solucoes: [
      "Troca vedação de porta",
      "Substituição bomba de lavagem",
      "Reparo ou troca mangueiras",
      "Troca selo mecânico",
    ],
  },
];

const diferenciais = [
  {
    icon: Award,
    titulo: "Expertise Premium",
    descricao: "Técnicos com experiência em toda linha Winterhalter premium.",
  },
  {
    icon: Droplets,
    titulo: "Tratamento de Água",
    descricao: "Instalação e manutenção de sistemas de tratamento integrados.",
  },
  {
    icon: Shield,
    titulo: "Peças Originais",
    descricao: "Componentes originais Winterhalter para reposição imediata.",
  },
  {
    icon: FileCheck,
    titulo: "Contratos PCM",
    descricao: "Manutenção programada com atendimento prioritário.",
  },
];

const planosPCM = [
  {
    nome: "Essencial",
    beneficios: [
      "2 manutenções preventivas/ano",
      "Limpeza braços aspersão",
      "Desconto 20% peças",
      "Atendimento em horário comercial",
    ],
  },
  {
    nome: "Profissional",
    destaque: true,
    beneficios: [
      "4 manutenções preventivas/ano",
      "Descalcificação inclusa",
      "Desconto 30% peças",
      "1 corretiva inclusa/ano",
      "Atendimento prioritário",
    ],
  },
  {
    nome: "Corporativo",
    beneficios: [
      "6 manutenções preventivas/ano",
      "Tratamento de água incluso",
      "Desconto 40% peças",
      "Corretivas inclusas",
      "Atendimento express",
    ],
  },
];

const faqItems = [
  {
    pergunta: "Quais lavadoras Winterhalter vocês atendem?",
    resposta: "Atendemos toda a linha: lavadoras frontais (UC Series), capota (PT Series), esteira (STR Series) e utensílios (UF Series), incluindo modelos antigos e atuais.",
  },
  {
    pergunta: "Por que minhas louças saem com manchas brancas?",
    resposta: "Manchas brancas geralmente indicam excesso de calcário na água. A solução definitiva é a instalação de um sistema de tratamento de água Winterhalter, que também prolonga a vida útil da máquina.",
  },
  {
    pergunta: "Com que frequência devo fazer manutenção na lavadora?",
    resposta: "Recomendamos manutenção trimestral para uso intensivo. Inclui limpeza de braços aspersão, verificação de resistências, calibração de dosadores e inspeção geral de vedações.",
  },
  {
    pergunta: "Winterhalter é mais cara de manter que outras marcas?",
    resposta: "Embora o investimento inicial seja maior, a eficiência energética e durabilidade das Winterhalter resultam em menor custo total de propriedade. Manutenção preventiva adequada maximiza o retorno.",
  },
  {
    pergunta: "Vocês instalam tratamento de água Winterhalter?",
    resposta: "Sim, instalamos e fazemos manutenção de sistemas de tratamento de água Winterhalter, fundamentais para proteger a máquina e garantir resultado perfeito de lavagem.",
  },
  {
    pergunta: "A bomba da lavadora está fazendo barulho. É grave?",
    resposta: "Ruído na bomba indica desgaste do rolamento ou corpo estranho. Deve ser resolvido rapidamente para evitar falha total da bomba, que é uma peça de alto valor.",
  },
  {
    pergunta: "Vocês atendem contratos de manutenção para hotéis?",
    resposta: "Sim, temos contratos específicos para hotéis e hospitais com lavadoras Winterhalter, com atendimento prioritário e manutenção programada para não impactar a operação.",
  },
  {
    pergunta: "É possível converter minha lavadora para dosagem automática?",
    resposta: "Sim, podemos instalar sistemas de dosagem automática de detergente e secante em modelos compatíveis, garantindo economia de produto e resultado consistente.",
  },
];

export default function AssistenciaTecnicaWinterhalter() {
  const { ctaUrl, ctaText } = useCTASettings();

  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Winterhalter | Manutenção Lavadora Louças Profissional Premium | WeDo</title>
        <meta
          name="description"
          content="Assistência técnica especializada Winterhalter. Manutenção preventiva e corretiva para lavadoras de louças profissionais UC, PT, STR e UF Series. Tratamento de água e peças originais."
        />
        <meta
          name="keywords"
          content="assistência técnica winterhalter, manutenção lavadora winterhalter, lavadora louças profissional, winterhalter UC PT STR"
        />
        <link rel="canonical" href="https://wedocozinhas.com.br/assistencia-tecnica-winterhalter" />
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
              <span className="text-accent font-medium">Referência Mundial em Lavadoras Profissionais</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica Winterhalter
              <span className="block text-accent mt-2">Lavadoras de Louças Profissionais Premium</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em toda linha Winterhalter de lavadoras profissionais.
              Tratamento de água, dosagem química e peças originais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
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
                <Droplets className="w-5 h-5 text-accent" />
                <span>Tratamento de Água</span>
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
              Equipamentos Winterhalter Atendidos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manutenção especializada para toda linha de lavadoras profissionais Winterhalter.
            </p>
          </div>

          <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
            {equipamentos.map((equip) => (
              <AccordionItem key={equip.id} value={equip.id} className="border rounded-xl px-6 bg-card shadow-sm">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center gap-3">
                    <Droplets className="w-6 h-6 text-accent flex-shrink-0" />
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
                          <span key={idx} className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full">{peca}</span>
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
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Problemas Comuns que Resolvemos</h2>
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
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Contratos de Manutenção PCM</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {planosPCM.map((plano, index) => (
              <Card key={index} className={`relative ${plano.destaque ? "border-2 border-accent shadow-xl" : "border shadow-lg"}`}>
                {plano.destaque && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">Mais Popular</div>
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
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Perguntas Frequentes - Winterhalter</h2>
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
              Precisa de Assistência Técnica para sua Lavadora Winterhalter?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Entre em contato agora e receba atendimento especializado para lavadoras frontais, capota, esteira e utensílios.
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