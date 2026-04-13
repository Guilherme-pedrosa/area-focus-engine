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
    id: "cheftop",
    titulo: "Fornos Combinados CHEFTOP MIND.Maps™",
    conteudo: {
      descricao: "Linha principal de fornos combinados Unox com tecnologia AI cooking, painel touchscreen intuitivo e conectividade digital. Referência mundial em cozinhas profissionais modernas.",
      modelos: [
        { nome: "CHEFTOP MIND.Maps™ PLUS", specs: "5-20 GN • Touchscreen • AI cooking • Conectividade" },
        { nome: "CHEFTOP MIND.Maps™ ONE", specs: "Compacto • 3-5 GN • Entry-level inteligente" },
        { nome: "CHEFTOP MIND.Maps™ ZERO", specs: "Básico • Manual • Custo-benefício" },
      ],
      tecnologias: [
        "Tecnologia ADAPTIVE.Cooking™ (AI)",
        "Painel touchscreen HD intuitivo",
        "Sistema DRY.Maxi™ (secagem otimizada)",
        "STEAM.Maxi™ (vapor de alta precisão)",
        "Conectividade DIGITAL.id™",
        "Lavagem automática integrada",
      ],
      servicos: [
        "Manutenção preventiva trimestral/semestral",
        "Calibração sondas de temperatura",
        "Reparo sistema de vapor (caldeira)",
        "Substituição vedações de porta",
        "Diagnóstico placas eletrônicas",
        "Atualização firmware painel",
        "Limpeza e manutenção sistema de lavagem",
      ],
      pecas: [
        "Sondas de temperatura",
        "Vedações de porta",
        "Resistências (seco e vapor)",
        "Placas eletrônicas",
        "Caldeiras/geradores de vapor",
        "Válvulas solenoides",
        "Vidros de porta",
      ],
    },
  },
  {
    id: "bakertop",
    titulo: "Fornos de Panificação BAKERTOP MIND.Maps™",
    conteudo: {
      descricao: "Fornos específicos para panificação e confeitaria com controle preciso de temperatura, vapor e umidade. Resultados profissionais consistentes.",
      modelos: [
        { nome: "BAKERTOP MIND.Maps™ PLUS", specs: "4-16 telas • Panificação • AI baking" },
        { nome: "BAKERTOP MIND.Maps™ ONE", specs: "Compacto • Padarias artesanais • Eficiente" },
      ],
      tecnologias: [
        "Sistema AIR.Maxi™ (ventilação otimizada)",
        "Injeção de vapor programável",
        "Controle preciso de umidade",
        "Receitas pré-programadas para pães",
        "Painel touchscreen específico panificação",
        "Sistema de exaustão controlado",
      ],
      servicos: [
        "Manutenção preventiva semestral",
        "Calibração sistema de vapor",
        "Troca de vedações e vidros",
        "Reparo sistema de ventilação",
        "Diagnóstico eletrônico completo",
        "Manutenção câmara de cocção",
      ],
      pecas: [
        "Motores de ventilação",
        "Resistências de vapor",
        "Vedações de porta",
        "Injetores de vapor",
        "Placas de controle",
        "Vidros temperados",
      ],
    },
  },
  {
    id: "speed-evereo",
    titulo: "Speed-X Oven e Evereo™",
    conteudo: {
      descricao: "Equipamentos especiais Unox: Speed-X para cocção ultra-rápida e Evereo™ para conservação quente com qualidade superior.",
      modelos: [
        { nome: "Speed-X™", specs: "Ultra-rápido • Combinação micro-ondas + convecção" },
        { nome: "Evereo™", specs: "Conservação quente • Manter qualidade • Serviço" },
      ],
      tecnologias: [
        "Combinação micro-ondas + ar quente + infravermelho",
        "Cocção até 10x mais rápida",
        "Tecnologia de conservação inteligente",
        "Controle preciso de umidade na conservação",
        "Design compacto para bancada",
        "Operação simplificada",
      ],
      servicos: [
        "Manutenção preventiva semestral",
        "Diagnóstico sistema micro-ondas",
        "Calibração controles de temperatura",
        "Troca de componentes especiais",
        "Teste de segurança completo",
        "Limpeza e higienização",
      ],
      pecas: [
        "Magnetrons",
        "Resistências infravermelho",
        "Componentes eletrônicos",
        "Vedações especiais",
        "Bandejas e acessórios",
      ],
    },
  },
];

const problemasComuns = [
  {
    titulo: "Erro no Painel Touchscreen",
    sintomas: [
      "Tela não responde ao toque",
      "Display com linhas ou manchas",
      "Códigos de erro persistentes",
    ],
    causas: [
      "Placa eletrônica com defeito",
      "Conector do display solto",
      "Umidade interna excessiva",
      "Firmware desatualizado",
    ],
    solucoes: [
      "Diagnóstico eletrônico completo",
      "Troca/reparo placa eletrônica",
      "Reaperto de conectores internos",
      "Atualização de firmware",
    ],
  },
  {
    titulo: "Falha de Vapor (Caldeira)",
    sintomas: [
      "Forno não gera vapor",
      "Vapor insuficiente ou irregular",
      "Alarme de caldeira",
    ],
    causas: [
      "Calcificação da caldeira",
      "Resistência de vapor queimada",
      "Válvula solenoide travada",
      "Sensor de nível com defeito",
    ],
    solucoes: [
      "Descalcificação da caldeira",
      "Troca da resistência de vapor",
      "Substituição válvula solenoide",
      "Troca do sensor de nível",
    ],
  },
  {
    titulo: "Porta Não Veda Corretamente",
    sintomas: [
      "Vapor escapando pela porta",
      "Temperatura interna oscilando",
      "Condensação externa excessiva",
    ],
    causas: [
      "Borracha de vedação desgastada",
      "Dobradiça desregulada",
      "Vidro interno trincado",
      "Trava da porta com defeito",
    ],
    solucoes: [
      "Troca da borracha de vedação",
      "Ajuste/troca de dobradiças",
      "Substituição vidro interno",
      "Reparo no sistema de trava",
    ],
  },
];

const diferenciais = [
  {
    icon: Flame,
    titulo: "Especialistas Unox",
    descricao: "Técnicos capacitados em fornos combinados de alta tecnologia.",
  },
  {
    icon: Zap,
    titulo: "Diagnóstico Digital",
    descricao: "Ferramentas avançadas para diagnóstico preciso de falhas.",
  },
  {
    icon: Shield,
    titulo: "Peças Originais",
    descricao: "Componentes originais Unox para máxima performance.",
  },
  {
    icon: FileCheck,
    titulo: "Relatório Completo",
    descricao: "Documentação detalhada de cada intervenção técnica.",
  },
];

const planosPCM = [
  {
    nome: "Essencial",
    beneficios: [
      "2 manutenções preventivas/ano",
      "Descalcificação inclusa",
      "Desconto 20% peças",
      "Atendimento em horário comercial",
    ],
  },
  {
    nome: "Profissional",
    destaque: true,
    beneficios: [
      "4 manutenções preventivas/ano",
      "Calibração sondas e vapor",
      "Desconto 30% peças",
      "1 corretiva inclusa/ano",
      "Atendimento prioritário",
    ],
  },
  {
    nome: "Corporativo",
    beneficios: [
      "6 manutenções preventivas/ano",
      "Diagnóstico eletrônico completo",
      "Desconto 40% peças",
      "Corretivas inclusas",
      "Atendimento express",
    ],
  },
];

const faqItems = [
  {
    pergunta: "Qual a diferença entre CHEFTOP PLUS, ONE e ZERO?",
    resposta: "PLUS é a linha top com AI cooking, touchscreen HD e conectividade completa. ONE é a versão inteligente compacta com recursos essenciais. ZERO é a linha manual básica com excelente custo-benefício.",
  },
  {
    pergunta: "Com que frequência devo descalcificar meu forno Unox?",
    resposta: "Depende da dureza da água local. Em geral, trimestral para uso intensivo e semestral para uso moderado. A descalcificação previne falhas na caldeira e mantém a qualidade do vapor.",
  },
  {
    pergunta: "Meu forno Unox mostra código de erro. O que fazer?",
    resposta: "Anote o código exato e entre em contato conosco. Muitos erros requerem diagnóstico técnico. Não tente resetar repetidamente, pois pode mascarar um problema real.",
  },
  {
    pergunta: "A sonda de temperatura do meu forno está com leitura errada. É grave?",
    resposta: "Sonda com leitura incorreta compromete a cocção e a segurança alimentar. Recomendamos calibração ou troca imediata. Nossas equipes realizam esse serviço com peças originais.",
  },
  {
    pergunta: "Vocês fazem manutenção em Speed-X Oven?",
    resposta: "Sim! Atendemos toda a linha Unox, incluindo Speed-X e Evereo. Nossos técnicos são capacitados para trabalhar com sistemas combinados de micro-ondas, convecção e infravermelho.",
  },
  {
    pergunta: "É possível atualizar o firmware do meu forno Unox?",
    resposta: "Sim, realizamos atualização de firmware durante a manutenção preventiva. Atualizações podem corrigir bugs, melhorar performance e adicionar novas receitas.",
  },
  {
    pergunta: "Qual a vida útil de um forno combinado Unox?",
    resposta: "Com manutenção adequada, fornos Unox duram 10-15 anos. A chave é manutenção preventiva regular, especialmente descalcificação da caldeira e troca de vedações.",
  },
  {
    pergunta: "A WeDo atende em todo Goiás?",
    resposta: "Sim, atendemos em todo Goiás e Distrito Federal, com base em Goiânia. Para cidades mais distantes, atuamos com agendamento programado.",
  },
];

export default function AssistenciaTecnicaUnox() {
  const { ctaUrl, ctaText } = useCTASettings();

  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Unox | Manutenção Forno Combinado CHEFTOP BAKERTOP | WeDo</title>
        <meta
          name="description"
          content="Assistência técnica especializada Unox Brasil. Manutenção preventiva e corretiva para fornos combinados CHEFTOP, BAKERTOP e Speed-X. Peças originais, técnicos certificados."
        />
        <meta
          name="keywords"
          content="assistência técnica unox, manutenção unox, forno combinado unox, cheftop manutenção, bakertop manutenção"
        />
        <link rel="canonical" href="https://wedocozinhas.com.br/assistencia-tecnica-unox" />
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
              <span className="text-accent font-medium">Fabricante Italiano de Fornos Combinados</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica Unox
              <span className="block text-accent mt-2">Fornos Combinados CHEFTOP e BAKERTOP</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em fornos combinados Unox com tecnologia AI cooking. Calibração, diagnóstico digital e peças originais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                <a href={`${CONTACT_URL}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />Solicitar Orçamento
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="https://contatoswedo.lovable.app/" target="_blank" rel="noopener noreferrer"><Phone className="w-5 h-5 mr-2" />Canais de Contato</a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Clock className="w-5 h-5 text-accent" /><span>Atendimento Rápido</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Shield className="w-5 h-5 text-accent" /><span>Peças Originais</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Zap className="w-5 h-5 text-accent" /><span>Diagnóstico Digital</span>
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

      {/* Equipamentos */}
      <section className="py-16 lg:py-24">
        <div className="container-wedo">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Equipamentos Unox Atendidos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Manutenção especializada para toda linha de fornos combinados Unox.</p>
          </div>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
            {equipamentos.map((equip) => (
              <AccordionItem key={equip.id} value={equip.id} className="border rounded-xl px-6 bg-card shadow-sm">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center gap-3">
                    <Flame className="w-6 h-6 text-accent flex-shrink-0" />{equip.titulo}
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
                    <AlertTriangle className="w-5 h-5 text-amber-500" />{problema.titulo}
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
                <CardHeader className="text-center"><CardTitle className="text-xl">{plano.nome}</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plano.beneficios.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{b}</span>
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
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Perguntas Frequentes - Unox</h2>
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
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-6">Precisa de Assistência Técnica para seu Forno Unox?</h2>
            <p className="text-lg text-primary-foreground/80 mb-8">Entre em contato agora e receba atendimento especializado para fornos combinados CHEFTOP, BAKERTOP e Speed-X.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href={`${CONTACT_URL}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />Falar com Especialista
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
