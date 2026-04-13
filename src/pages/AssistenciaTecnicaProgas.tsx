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
    id: "fogoes",
    titulo: "Fogões Industriais Progás/Braesi",
    conteudo: {
      descricao: "Fogões industriais Progás para cozinhas profissionais de todos os portes, com opções econômicas até linhas gourmet premium.",
      modelos: [
        { nome: "Linha Industrial", specs: "4-8 queimadores • Alta potência • Uso pesado" },
        { nome: "Linha Gourmet", specs: "Premium • Acabamento refinado • Restaurantes" },
        { nome: "Linha Econômica", specs: "Custo-benefício • Compacto • Lanchonetes" },
      ],
      tecnologias: [
        "Queimadores duplo anel alta potência",
        "Grades ferro fundido pesadas",
        "Forno acoplado (convecção ou standard)",
        "Válvulas de segurança",
        "Acabamento em aço inox",
        "Opções GLP e Gás Natural",
      ],
      servicos: [
        "Manutenção preventiva semestral/anual",
        "Conversão GLP ↔ Gás Natural",
        "Troca válvulas e injetores",
        "Calibração chamas e temperatura",
        "Teste vazamentos (detector gás)",
        "Reparo forno (resistências, termostato)",
      ],
      pecas: [
        "Queimadores completos",
        "Válvulas de segurança",
        "Injetores GLP/GN",
        "Piezoelétricos",
        "Termostatos",
        "Grades ferro fundido",
      ],
    },
  },
  {
    id: "chapas",
    titulo: "Chapas e Fritadeiras Progás",
    conteudo: {
      descricao: "Chapas para sanduíches e fritadeiras industriais Progás com controle de temperatura para operações de alto volume.",
      modelos: [
        { nome: "Chapa a Gás", specs: "Lisa ou ranhurada • Alta potência • Profissional" },
        { nome: "Chapa Elétrica", specs: "Controle digital • Bancada • Precisão" },
        { nome: "Fritadeira a Gás", specs: "15-30 litros • Alta produção • Econômica" },
        { nome: "Fritadeira Elétrica", specs: "5-15 litros • Bancada • Compacta" },
      ],
      tecnologias: [
        "Chapa em aço carbono ou inox",
        "Termostato regulável",
        "Queimadores infrared (chapa gás)",
        "Zona fria para óleo (fritadeira)",
        "Cesto removível em inox",
        "Dreno de gordura frontal",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Calibração termostato",
        "Troca queimadores",
        "Temperagem/cura chapa",
        "Limpeza profunda sistema gás",
        "Substituição resistências elétricas",
      ],
      pecas: [
        "Queimadores",
        "Termostatos",
        "Resistências",
        "Válvulas gás",
        "Piezoelétricos",
        "Cestos fritura",
      ],
    },
  },
  {
    id: "char-broiler",
    titulo: "Char Broilers e Banho-Maria",
    conteudo: {
      descricao: "Char broilers para grelhados autênticos e banho-marias para conservação de alimentos prontos, equipamentos essenciais em cozinhas de grande volume.",
      modelos: [
        { nome: "Char Broiler a Gás", specs: "Radiantes cerâmicos • Alta temperatura • Carnes" },
        { nome: "Banho-Maria a Gás", specs: "2-6 cubas • GN padrão • Buffet" },
        { nome: "Banho-Maria Elétrico", specs: "2-4 cubas • Bancada • Compacto" },
      ],
      tecnologias: [
        "Radiantes cerâmicos de alta temperatura",
        "Grades ajustáveis em altura",
        "Cubas GN padrão (banho-maria)",
        "Controle de temperatura independente",
        "Construção em aço inox",
        "Válvulas de segurança",
      ],
      servicos: [
        "Manutenção preventiva",
        "Troca radiantes cerâmicos",
        "Calibração temperatura",
        "Substituição válvulas",
        "Limpeza sistema de gás",
        "Teste de segurança",
      ],
      pecas: [
        "Radiantes cerâmicos",
        "Queimadores",
        "Válvulas",
        "Grades",
        "Cubas GN inox",
        "Resistências",
      ],
    },
  },
  {
    id: "estufas-fornos",
    titulo: "Estufas e Fornos de Pizza",
    conteudo: {
      descricao: "Estufas para conservação quente e fornos de pizza Progás para pizzarias e estabelecimentos que precisam de equipamentos confiáveis.",
      modelos: [
        { nome: "Estufa Vertical", specs: "12-24 bandejas • Umidade controlada • Buffet" },
        { nome: "Forno de Pizza a Gás", specs: "Lastro refratário • Alta temperatura • Pizzarias" },
        { nome: "Rechaud", specs: "Aquecimento contínuo • Eventos • Buffet" },
      ],
      tecnologias: [
        "Aquecimento por convecção (estufas)",
        "Lastro refratário (forno pizza)",
        "Controle de umidade",
        "Portas com vidro temperado",
        "Termostato regulável",
        "Isolamento térmico",
      ],
      servicos: [
        "Manutenção preventiva",
        "Calibração temperatura",
        "Troca resistências/queimadores",
        "Substituição vidros e vedações",
        "Reparo sistema umidificação",
        "Ajuste portas e dobradiças",
      ],
      pecas: [
        "Resistências",
        "Termostatos",
        "Vidros temperados",
        "Vedações de porta",
        "Queimadores",
        "Dobradiças",
      ],
    },
  },
];

const problemasComuns = [
  {
    titulo: "Chama Amarela ou Irregular",
    sintomas: [
      "Chama amarelada ao invés de azul",
      "Chama oscilando ou instável",
      "Fuligem acumulando na panela",
    ],
    causas: [
      "Ar primário desregulado",
      "Injetor obstruído ou errado",
      "Queimador sujo/entupido",
      "Pressão gás incorreta",
    ],
    solucoes: [
      "Ajuste registro ar primário",
      "Desobstrução/troca injetores",
      "Limpeza profunda queimadores",
      "Verificação pressão regulador",
    ],
  },
  {
    titulo: "Válvula Travada / Piezo Não Acende",
    sintomas: [
      "Botão do fogão travado",
      "Piezoelétrico não gera faísca",
      "Chama apaga ao soltar botão",
    ],
    causas: [
      "Válvula com resíduo de gordura",
      "Piezoelétrico queimado",
      "Termopar defeituoso",
      "Conexão elétrica oxidada",
    ],
    solucoes: [
      "Limpeza ou troca da válvula",
      "Substituição piezoelétrico",
      "Teste e troca termopar",
      "Limpeza conexões elétricas",
    ],
  },
  {
    titulo: "Fritadeira Não Aquece",
    sintomas: [
      "Óleo não atinge temperatura",
      "Aquecimento muito lento",
      "Fritadeira desliga sozinha",
    ],
    causas: [
      "Resistência queimada",
      "Termostato defeituoso",
      "High-limit atuado",
      "Conexão elétrica solta",
    ],
    solucoes: [
      "Teste e troca resistência",
      "Calibração/troca termostato",
      "Reset high-limit e diagnóstico",
      "Reaperto conexões elétricas",
    ],
  },
];

const diferenciais = [
  {
    icon: Flame,
    titulo: "Especialistas Progás",
    descricao: "Técnicos com experiência em toda linha de cocção profissional.",
  },
  {
    icon: Zap,
    titulo: "Conversão GLP/GN",
    descricao: "Serviço certificado de conversão entre tipos de gás.",
  },
  {
    icon: Shield,
    titulo: "Peças Originais",
    descricao: "Componentes originais Progás para reposição imediata.",
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
      "Limpeza e inspeção gás",
      "Desconto 20% peças",
      "Atendimento em horário comercial",
    ],
  },
  {
    nome: "Profissional",
    destaque: true,
    beneficios: [
      "4 manutenções preventivas/ano",
      "Calibração temperatura",
      "Desconto 30% peças",
      "1 corretiva inclusa/ano",
      "Atendimento prioritário",
    ],
  },
  {
    nome: "Corporativo",
    beneficios: [
      "6 manutenções preventivas/ano",
      "Teste vazamentos incluso",
      "Desconto 40% peças",
      "Corretivas inclusas",
      "Atendimento express",
    ],
  },
];

const faqItems = [
  {
    pergunta: "Qual a diferença entre Progás e Braesi?",
    resposta: "Progás e Braesi pertencem ao mesmo grupo. A Braesi é a marca de equipamentos de panificação (amassadeiras, batedeiras), enquanto Progás é focada em cocção (fogões, chapas, fritadeiras). Atendemos ambas.",
  },
  {
    pergunta: "Vocês fazem conversão de GLP para Gás Natural?",
    resposta: "Sim, realizamos conversão completa com troca de injetores, ajuste de regulador, calibração de chamas e teste de vazamentos. Serviço certificado conforme normas.",
  },
  {
    pergunta: "Com que frequência devo fazer manutenção em fogão industrial?",
    resposta: "Uso intensivo (>12h/dia): semestral. Uso padrão: anual. Inclui limpeza queimadores, teste válvulas, verificação vazamentos e calibração chamas.",
  },
  {
    pergunta: "Minha fritadeira Progás está com cheiro de queimado. O que fazer?",
    resposta: "Pode ser óleo degradado (troque se escuro/espesso), resíduo de alimento na resistência ou high-limit atuando. WeDo faz diagnóstico completo e limpeza profunda.",
  },
  {
    pergunta: "Vocês atendem food trucks?",
    resposta: "Sim! Atendemos equipamentos Progás instalados em food trucks, incluindo fogões, chapas e fritadeiras compactas. Fazemos manutenção no local.",
  },
  {
    pergunta: "Chapa Progás está com aquecimento desigual. O que pode ser?",
    resposta: "Causas comuns: queimador parcialmente entupido, termostato descalibrado ou chapa empenada por choque térmico. Diagnóstico no local identifica a causa.",
  },
  {
    pergunta: "Qual a vida útil de equipamentos Progás?",
    resposta: "Com manutenção adequada, fogões duram 10-15 anos, chapas e fritadeiras 8-12 anos. A manutenção preventiva é fundamental para atingir essa longevidade.",
  },
  {
    pergunta: "Vocês têm peças originais Progás em estoque?",
    resposta: "Mantemos em estoque as peças mais comuns: queimadores, válvulas, injetores, termostatos e piezoelétricos. Peças especiais são encomendadas com prazo reduzido.",
  },
];

export default function AssistenciaTecnicaProgas() {
  const { ctaUrl, ctaText } = useCTASettings();

  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Progás | Manutenção Fogão Chapa Fritadeira Industrial | WeDo</title>
        <meta
          name="description"
          content="Assistência técnica especializada Progás e Braesi. Manutenção preventiva e corretiva para fogões, chapas, fritadeiras, char broilers e banho-marias industriais. Peças originais."
        />
        <meta
          name="keywords"
          content="assistência técnica progás, manutenção progás, fogão progás, chapa progás, fritadeira progás, braesi"
        />
        <link rel="canonical" href="https://wedocozinhas.com.br/assistencia-tecnica-progas" />
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
              <span className="text-accent font-medium">Equipamentos de Cocção Profissional</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica Progás
              <span className="block text-accent mt-2">Fogões, Chapas, Fritadeiras e Mais</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em toda linha Progás/Braesi de equipamentos de cocção.
              Conversão GLP/GN, calibração e peças originais.
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
                <span>Conversão GLP/GN</span>
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
              Equipamentos Progás Atendidos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manutenção especializada para toda linha de equipamentos de cocção Progás e Braesi.
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
              Perguntas Frequentes - Progás
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
              Precisa de Assistência Técnica para seu Equipamento Progás?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Entre em contato agora e receba atendimento especializado para fogões, chapas, fritadeiras e mais.
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