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

const CONTACT_URL = "https://contatoswedo.lovable.app/";

const equipamentos = [
  {
    id: "lastro",
    titulo: "Fornos de Lastro Ramalhos",
    conteudo: {
      descricao: "Os fornos de lastro Ramalhos são referência na panificação artesanal e industrial, com pedras refratárias que garantem cozimento uniforme e crostas perfeitas.",
      modelos: [
        { nome: "Modulram", specs: "Modular • Multi-câmaras • Alta produção" },
        { nome: "MOP CA", specs: "Compacto • Câmara Alta • Versatilidade" },
        { nome: "Euro Line", specs: "Design europeu • Eficiência energética • Premium" },
      ],
      tecnologias: [
        "Pedras refratárias de alta densidade",
        "Aquecimento por resistências (lastro e teto)",
        "Controle independente por câmara",
        "Injeção de vapor programável",
        "Isolamento térmico reforçado",
        "Painel digital com programas",
      ],
      servicos: [
        "Manutenção preventiva semestral/anual",
        "Troca de pedras de lastro trincadas",
        "Substituição de resistências",
        "Reparo gerador de vapor",
        "Calibração termostatos e sensores",
        "Ajuste e vedação de portas",
        "Reparo painel eletrônico",
      ],
      pecas: [
        "Pedras de lastro refratárias",
        "Resistências (lastro e teto)",
        "Geradores de vapor",
        "Vedações de porta",
        "Painéis eletrônicos",
        "Termostatos",
      ],
    },
  },
  {
    id: "turbo",
    titulo: "Fornos Turbo Ramalhos",
    conteudo: {
      descricao: "Fornos turbo Ramalhos com ventilação forçada para cozimento rápido e uniforme, ideais para padarias e confeitarias de alta produção.",
      modelos: [
        { nome: "Turboram", specs: "Convecção forçada • Multi-bandeja • Profissional" },
        { nome: "Euroram", specs: "Design compacto • Alta eficiência • Versátil" },
      ],
      tecnologias: [
        "Ventilação turbo forçada",
        "Distribuição uniforme de calor",
        "Injeção de vapor integrada",
        "Controle digital programável",
        "Portas com vidro duplo",
        "Timer automático",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Troca motor do ventilador",
        "Reparo sistema de vapor",
        "Substituição de resistências",
        "Calibração painel de controle",
        "Limpeza profunda sistema convecção",
      ],
      pecas: [
        "Motores ventilador",
        "Turbinas",
        "Resistências",
        "Válvulas vapor",
        "Vedações porta",
        "Vidros de porta",
      ],
    },
  },
  {
    id: "rotativo",
    titulo: "Fornos Rotativos Ramalhos",
    conteudo: {
      descricao: "Fornos rotativos Ramalhos para panificação industrial com alta capacidade e cozimento uniforme por rotação contínua do carro de bandejas.",
      modelos: [
        { nome: "Rotaram", specs: "Rotativo • Alta capacidade • Industrial" },
        { nome: "Rotaram Compact", specs: "Compacto • Rotativo • Padarias médias" },
      ],
      tecnologias: [
        "Rotação contínua do carro",
        "Aquecimento a gás ou elétrico",
        "Injeção de vapor programável",
        "Painel digital com receitas",
        "Isolamento térmico pesado",
        "Sistema de exaustão integrado",
      ],
      servicos: [
        "Manutenção preventiva semestral",
        "Reparo mecanismo de rotação",
        "Troca rolamentos e engrenagens",
        "Calibração sistema de vapor",
        "Manutenção queimadores a gás",
        "Reparo painel eletrônico",
      ],
      pecas: [
        "Rolamentos",
        "Engrenagens de rotação",
        "Queimadores",
        "Geradores de vapor",
        "Motores",
        "Painéis eletrônicos",
      ],
    },
  },
  {
    id: "fermentacao",
    titulo: "Câmaras de Fermentação",
    conteudo: {
      descricao: "Câmaras de fermentação controlada Ramalhos para controle preciso de temperatura e umidade, essenciais para panificação de qualidade.",
      modelos: [
        { nome: "Fermentação Controlada", specs: "Temperatura + Umidade • Programável • Automatizada" },
        { nome: "Retardadora", specs: "Retardo fermentação • Programação noturna • Economia" },
      ],
      tecnologias: [
        "Controle preciso temperatura (0-40°C)",
        "Controle umidade relativa",
        "Programação horária automática",
        "Refrigeração para retardo",
        "Isolamento térmico eficiente",
        "Sistema de umidificação",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Calibração sensores temperatura/umidade",
        "Reparo sistema refrigeração",
        "Manutenção umidificador",
        "Reparo painel de controle",
        "Substituição vedações",
      ],
      pecas: [
        "Sensores temperatura",
        "Sensores umidade",
        "Compressores",
        "Umidificadores",
        "Vedações",
        "Painéis eletrônicos",
      ],
    },
  },
];

const problemasComuns = [
  {
    titulo: "Aquecimento Irregular",
    sintomas: [
      "Pães queimam embaixo e crus em cima",
      "Temperatura não atinge o setpoint",
      "Cozimento desigual entre bandejas",
    ],
    causas: [
      "Resistência queimada (lastro ou teto)",
      "Termostato descalibrado",
      "Isolamento térmico danificado",
      "Ventilador com defeito (fornos turbo)",
    ],
    solucoes: [
      "Teste e troca de resistências",
      "Calibração de termostatos",
      "Reparo isolamento térmico",
      "Substituição motor ventilador",
    ],
  },
  {
    titulo: "Falha na Injeção de Vapor",
    sintomas: [
      "Pães sem brilho na crosta",
      "Vapor insuficiente ou ausente",
      "Água acumula no forno",
    ],
    causas: [
      "Gerador de vapor com calcificação",
      "Válvula solenóide travada",
      "Bomba de água defeituosa",
      "Sensor de nível com falha",
    ],
    solucoes: [
      "Descalcificação gerador de vapor",
      "Troca válvula solenóide",
      "Substituição bomba de água",
      "Calibração sensor de nível",
    ],
  },
  {
    titulo: "Painel de Controle com Erro",
    sintomas: [
      "Display apagado ou com erro",
      "Programas não salvam",
      "Botões não respondem",
    ],
    causas: [
      "Placa eletrônica queimada",
      "Conector oxidado",
      "Membrana do teclado danificada",
      "Fusível queimado",
    ],
    solucoes: [
      "Diagnóstico e reparo da placa",
      "Limpeza e reaperto conectores",
      "Troca membrana teclado",
      "Substituição fusíveis",
    ],
  },
];

const diferenciais = [
  {
    icon: Flame,
    titulo: "Especialistas Ramalhos",
    descricao: "Técnicos com experiência em toda linha de fornos de panificação.",
  },
  {
    icon: Zap,
    titulo: "Atendimento Ágil",
    descricao: "Resposta rápida para minimizar parada na produção.",
  },
  {
    icon: Shield,
    titulo: "Peças Originais",
    descricao: "Componentes originais Ramalhos para reposição imediata.",
  },
  {
    icon: FileCheck,
    titulo: "Contratos PCM",
    descricao: "Manutenção programada para máxima vida útil dos fornos.",
  },
];

const planosPCM = [
  {
    nome: "Essencial",
    beneficios: [
      "2 manutenções preventivas/ano",
      "Limpeza e inspeção geral",
      "Desconto 20% peças",
      "Atendimento em horário comercial",
    ],
  },
  {
    nome: "Profissional",
    destaque: true,
    beneficios: [
      "4 manutenções preventivas/ano",
      "Calibração sensores e termostatos",
      "Desconto 30% peças",
      "1 corretiva inclusa/ano",
      "Atendimento prioritário",
    ],
  },
  {
    nome: "Corporativo",
    beneficios: [
      "6 manutenções preventivas/ano",
      "Descalcificação vapor inclusa",
      "Desconto 40% peças",
      "Corretivas inclusas",
      "Atendimento express",
    ],
  },
];

const faqItems = [
  {
    pergunta: "Quais fornos Ramalhos vocês atendem?",
    resposta: "Atendemos toda a linha: fornos de lastro (Modulram, MOP CA), fornos turbo (Turboram, Euroram), fornos rotativos (Rotaram) e câmaras de fermentação controlada.",
  },
  {
    pergunta: "Com que frequência devo fazer manutenção no forno de lastro?",
    resposta: "Recomendamos manutenção semestral para uso intensivo (>12h/dia) e anual para uso padrão. Inclui verificação de resistências, calibração, limpeza e inspeção do sistema de vapor.",
  },
  {
    pergunta: "Quando devo trocar a pedra de lastro?",
    resposta: "Pedras trincadas ou com perda de capacidade térmica devem ser substituídas imediatamente. A vida útil média é de 3-5 anos dependendo do uso. Trincas comprometem o cozimento.",
  },
  {
    pergunta: "O vapor do forno está fraco. O que pode ser?",
    resposta: "As causas mais comuns são calcificação do gerador de vapor (água dura), válvula solenóide travada ou bomba de água defeituosa. A descalcificação periódica previne o problema.",
  },
  {
    pergunta: "Vocês fazem reparo em painéis eletrônicos Ramalhos?",
    resposta: "Sim, realizamos diagnóstico e reparo de painéis eletrônicos, incluindo troca de placas, membranas de teclado e componentes. Também atualizamos firmware quando necessário.",
  },
  {
    pergunta: "Qual a importância da câmara de fermentação controlada?",
    resposta: "A fermentação controlada garante padronização da massa, permite programar a produção (retardo noturno) e melhora significativamente a qualidade final do pão.",
  },
  {
    pergunta: "Vocês atendem padarias no interior de Goiás?",
    resposta: "Sim, atendemos em todo o estado de Goiás e Distrito Federal, incluindo cidades do interior. Entre em contato para verificar disponibilidade na sua região.",
  },
  {
    pergunta: "Quanto tempo dura uma manutenção preventiva?",
    resposta: "A manutenção preventiva em fornos Ramalhos leva em média 2-4 horas, dependendo do modelo e quantidade de câmaras. Realizamos preferencialmente fora do horário de produção.",
  },
];

export default function AssistenciaTecnicaRamalhos() {
  const { ctaUrl, ctaText } = useCTASettings();

  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Ramalhos | Manutenção Forno Lastro Turbo Rotativo Panificação | WeDo</title>
        <meta
          name="description"
          content="Assistência técnica especializada Ramalhos. Manutenção preventiva e corretiva para fornos de lastro, turbo, rotativos e câmaras de fermentação. Peças originais, técnicos certificados."
        />
        <meta
          name="keywords"
          content="assistência técnica ramalhos, manutenção forno ramalhos, forno lastro ramalhos, forno turbo ramalhos, forno rotativo ramalhos, panificação"
        />
        <link rel="canonical" href="https://wedocozinhas.com.br/assistencia-tecnica-ramalhos" />
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
              <span className="text-accent font-medium">+50 Anos de Tradição em Panificação</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica Ramalhos
              <span className="block text-accent mt-2">Fornos de Lastro, Turbo e Rotativos</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em toda linha Ramalhos de fornos para panificação.
              Pedras de lastro, geradores de vapor, painéis e peças originais.
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
              Equipamentos Ramalhos Atendidos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manutenção especializada para toda linha de fornos e câmaras de fermentação Ramalhos.
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
              Perguntas Frequentes - Ramalhos
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
              Precisa de Assistência Técnica para seu Forno Ramalhos?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Entre em contato agora e receba atendimento especializado para fornos de lastro, turbo, rotativos e câmaras de fermentação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
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