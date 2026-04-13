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
    id: "fornos-esteira",
    titulo: "Fornos Industriais de Esteira (Conveyor)",
    conteudo: {
      descricao: "Fornos de esteira Middleby são referência mundial em pizzarias de alto volume, redes fast-food e padarias industriais. Cocção contínua com velocidade e uniformidade excepcionais.",
      modelos: [
        { nome: "Marshall Series", specs: "Esteira • Pizza • Alto volume • Gás/Elétrico" },
        { nome: "CTX Series", specs: "Conveyor • Multi-produto • Compacto • Speed" },
        { nome: "WOW! Series", specs: "Impingement • Ultra-rápido • Alta eficiência" },
      ],
      tecnologias: [
        "Tecnologia Impingement (jatos de ar quente)",
        "Controle digital de velocidade da esteira",
        "Câmaras múltiplas independentes",
        "Recuperação ultra-rápida de temperatura",
        "Esteira em malha metálica de alta durabilidade",
        "Sistema de exaustão integrado",
      ],
      servicos: [
        "Manutenção preventiva trimestral/semestral",
        "Calibração velocidade e temperatura",
        "Troca de resistências e queimadores",
        "Reparo sistema de esteira e motor",
        "Substituição placas eletrônicas",
        "Limpeza profunda câmara de cocção",
        "Ajuste sistema Impingement",
      ],
      pecas: [
        "Resistências tubulares",
        "Motores de esteira",
        "Correias transportadoras",
        "Placas eletrônicas",
        "Termostatos digitais",
        "Queimadores",
      ],
    },
  },
  {
    id: "fornos-conveccao",
    titulo: "Fornos de Convecção Middleby",
    conteudo: {
      descricao: "Fornos de convecção Middleby para padarias, confeitarias e restaurantes de grande volume. Distribuição uniforme de calor para resultados consistentes.",
      modelos: [
        { nome: "Blodgett Mark V", specs: "Full-size • Gás • Heavy-duty • Empilhável" },
        { nome: "Blodgett DFG", specs: "Dual flow • Premium • Alta produção" },
        { nome: "Blodgett SHO", specs: "Super heat • Pizza • Deck oven" },
      ],
      tecnologias: [
        "Convecção forçada uniforme",
        "Portas de vidro duplo temperado",
        "Controle termostático preciso",
        "Câmara em aço inox resistente",
        "Sistema empilhável (stackable)",
        "Ignição eletrônica automática",
      ],
      servicos: [
        "Manutenção preventiva semestral",
        "Calibração temperatura e timer",
        "Troca vedações e vidros de porta",
        "Reparo sistema convecção (motor/ventilador)",
        "Substituição queimadores e resistências",
        "Teste segurança gás",
      ],
      pecas: [
        "Motores de convecção",
        "Vedações de porta",
        "Vidros temperados",
        "Queimadores",
        "Termostatos",
        "Peças de ignição",
      ],
    },
  },
  {
    id: "equipamentos-coccao",
    titulo: "Equipamentos de Cocção Profissional",
    conteudo: {
      descricao: "Linha completa de equipamentos de cocção do grupo Middleby, incluindo chapas, fritadeiras e salamandras para cozinhas de alta demanda.",
      modelos: [
        { nome: "Star Manufacturing", specs: "Chapas • Griddles • Salamandras" },
        { nome: "Pitco Fryers", specs: "Fritadeiras • Alta eficiência • Filtragem" },
        { nome: "Southbend Range", specs: "Fogões • Heavy-duty • Restaurantes" },
      ],
      tecnologias: [
        "Tecnologia de recuperação rápida",
        "Sistemas de filtragem de óleo",
        "Controles digitais avançados",
        "Construção heavy-duty em inox",
        "Eficiência energética otimizada",
        "Zonas de aquecimento independentes",
      ],
      servicos: [
        "Manutenção preventiva programada",
        "Calibração termostatos e controles",
        "Troca componentes de aquecimento",
        "Reparo sistema de filtragem",
        "Limpeza profunda e higienização",
        "Conversão GLP/GN",
      ],
      pecas: [
        "Resistências e queimadores",
        "Termostatos e controles",
        "Filtros e componentes",
        "Válvulas de gás",
        "Cestos e acessórios",
      ],
    },
  },
];

const problemasComuns = [
  {
    titulo: "Esteira Não Avança",
    sintomas: [
      "Esteira travada ou lenta",
      "Motor com ruído anormal",
      "Velocidade irregular",
    ],
    causas: [
      "Motor queimado ou com capacitor",
      "Correia transportadora desgastada",
      "Rolamentos travados",
      "Placa de controle com defeito",
    ],
    solucoes: [
      "Substituição motor/capacitor",
      "Troca correia transportadora",
      "Lubrificação/troca rolamentos",
      "Reparo placa eletrônica",
    ],
  },
  {
    titulo: "Temperatura Desigual",
    sintomas: [
      "Produto cru de um lado",
      "Queimado em pontos específicos",
      "Tempo de cocção irregular",
    ],
    causas: [
      "Resistências queimadas parcialmente",
      "Sistema Impingement desalinhado",
      "Ventilador com falha",
      "Sensor de temperatura defeituoso",
    ],
    solucoes: [
      "Troca resistências danificadas",
      "Realinhamento jatos Impingement",
      "Reparo/troca ventilador",
      "Substituição sensor/sonda",
    ],
  },
  {
    titulo: "Painel Eletrônico com Erro",
    sintomas: [
      "Display apagado ou piscando",
      "Códigos de erro no painel",
      "Botões não respondem",
    ],
    causas: [
      "Placa eletrônica queimada",
      "Fusível interno queimado",
      "Conector solto ou oxidado",
      "Sobrecarga elétrica",
    ],
    solucoes: [
      "Diagnóstico e reparo da placa",
      "Troca de fusíveis",
      "Limpeza e reaperto conectores",
      "Instalação proteção elétrica",
    ],
  },
];

const diferenciais = [
  {
    icon: Flame,
    titulo: "Especialistas Middleby",
    descricao: "Técnicos capacitados em toda linha de fornos e equipamentos do grupo.",
  },
  {
    icon: Zap,
    titulo: "Atendimento Rápido",
    descricao: "Diagnóstico ágil para minimizar parada de produção.",
  },
  {
    icon: Shield,
    titulo: "Peças Originais",
    descricao: "Componentes originais Middleby para máxima durabilidade.",
  },
  {
    icon: FileCheck,
    titulo: "Relatório Técnico",
    descricao: "Documentação completa de cada intervenção realizada.",
  },
];

const planosPCM = [
  {
    nome: "Essencial",
    beneficios: [
      "2 manutenções preventivas/ano",
      "Limpeza e inspeção completa",
      "Desconto 20% peças",
      "Atendimento em horário comercial",
    ],
  },
  {
    nome: "Profissional",
    destaque: true,
    beneficios: [
      "4 manutenções preventivas/ano",
      "Calibração temperatura e esteira",
      "Desconto 30% peças",
      "1 corretiva inclusa/ano",
      "Atendimento prioritário",
    ],
  },
  {
    nome: "Corporativo",
    beneficios: [
      "6 manutenções preventivas/ano",
      "Diagnóstico eletrônico incluso",
      "Desconto 40% peças",
      "Corretivas inclusas",
      "Atendimento express",
    ],
  },
];

const faqItems = [
  {
    pergunta: "Quais marcas fazem parte do grupo Middleby?",
    resposta: "O grupo Middleby engloba diversas marcas premium como Blodgett, Marshall, CTX, Pitco, Star Manufacturing, Southbend, TurboChef, entre outras. A WeDo atende equipamentos de todas essas marcas do grupo.",
  },
  {
    pergunta: "Qual a frequência ideal de manutenção em forno de esteira?",
    resposta: "Para uso intensivo (>12h/dia), recomendamos manutenção trimestral. Uso padrão: semestral. Inclui limpeza da câmara, verificação da esteira, calibração de temperatura e inspeção elétrica completa.",
  },
  {
    pergunta: "O que é tecnologia Impingement nos fornos Middleby?",
    resposta: "Impingement é um sistema de jatos de ar quente direcionados que acelera a cocção e garante uniformidade. É a tecnologia que permite pizzarias de alto volume assar pizzas em poucos minutos com qualidade consistente.",
  },
  {
    pergunta: "Meu forno de esteira está queimando a pizza de um lado. O que pode ser?",
    resposta: "Geralmente indica desalinhamento dos jatos Impingement, resistência parcialmente queimada ou ventilador com defeito. Nossos técnicos fazem diagnóstico completo e ajuste para uniformidade de cocção.",
  },
  {
    pergunta: "Vocês atendem fornos Blodgett?",
    resposta: "Sim! Blodgett faz parte do grupo Middleby. Atendemos toda a linha de fornos de convecção, deck ovens e equipamentos Blodgett com peças originais.",
  },
  {
    pergunta: "Quanto tempo leva o reparo de uma placa eletrônica?",
    resposta: "O diagnóstico é feito em até 24h. Reparos simples (fusível, conector) são resolvidos no local. Troca de placa depende da disponibilidade da peça, geralmente 3-5 dias úteis.",
  },
  {
    pergunta: "Vocês fazem conversão de gás em equipamentos Middleby?",
    resposta: "Sim, realizamos conversão GLP para Gás Natural e vice-versa em fogões, fornos e fritadeiras do grupo Middleby. Serviço inclui troca de injetores e calibração completa.",
  },
  {
    pergunta: "A WeDo atende em todo estado de Goiás?",
    resposta: "Sim, atendemos em todo Goiás e Distrito Federal, com base em Goiânia. Para cidades mais distantes, atuamos com agendamento programado para otimizar o deslocamento.",
  },
];

export default function AssistenciaTecnicaMiddleby() {
  const { ctaUrl, ctaText } = useCTASettings();
  const whatsappMessage = encodeURIComponent(
    "Olá! Preciso de assistência técnica para meu equipamento Middleby."
  );

  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Middleby | Manutenção Fornos Industriais Esteira e Convecção | WeDo</title>
        <meta
          name="description"
          content="Assistência técnica especializada Middleby Brasil. Manutenção preventiva e corretiva para fornos de esteira, convecção, Blodgett, Marshall e CTX. Peças originais, técnicos certificados."
        />
        <meta
          name="keywords"
          content="assistência técnica middleby, manutenção middleby, forno esteira middleby, forno conveyor, blodgett manutenção"
        />
        <link rel="canonical" href="https://wedocozinhas.com.br/assistencia-tecnica-middleby" />
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
              <Flame className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">Grupo Global de Equipamentos Food Service</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica Middleby
              <span className="block text-accent mt-2">Fornos de Esteira, Convecção e Cocção Profissional</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em toda linha Middleby: Marshall, CTX, Blodgett, Pitco, Star e Southbend. 
              Peças originais e técnicos capacitados.
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
              Equipamentos Middleby Atendidos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manutenção especializada para toda linha de equipamentos do grupo Middleby.
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
                    <Flame className="w-6 h-6 text-accent flex-shrink-0" />
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
                  <Button
                    asChild
                    className={`w-full mt-6 ${plano.destaque ? "bg-accent hover:bg-accent/90" : ""}`}
                    variant={plano.destaque ? "default" : "outline"}
                  >
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
              Perguntas Frequentes - Middleby
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
              Precisa de Assistência Técnica para seu Equipamento Middleby?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Entre em contato agora e receba atendimento especializado para fornos de esteira, convecção e equipamentos de cocção.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href={`${WHATSAPP_URL}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar com Especialista
                </a>
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
