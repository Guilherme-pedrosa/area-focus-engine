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
    titulo: "Fogões Industriais Vulcan",
    conteudo: {
      descricao: "Os fogões Vulcan são referência mundial em equipamentos de cocção profissional, com construção pesada e durabilidade excepcional para cozinhas de alta demanda.",
      modelos: [
        { nome: "V Series (Econômico)", specs: "4-10 queimadores • Uso padrão • Custo-benefício" },
        { nome: "Endurance Series", specs: "Heavy-duty • Alta produção • Durabilidade máxima" },
        { nome: "Restaurant Range", specs: "Premium • Forno convecção • Uso intensivo" },
      ],
      tecnologias: [
        "Queimadores duplo anel alta potência",
        "Grades ferro fundido pesadas",
        "Forno convecção ou standard",
        "Válvulas milimetradas precisas",
        "Acendimento piloto ou piezo",
        "Construção aço inox pesado",
      ],
      servicos: [
        "Manutenção preventiva semestral/anual",
        "Conversão GLP ↔ Gás Natural",
        "Troca válvulas e injetores",
        "Calibração chamas e temperatura",
        "Teste vazamentos (detector gás)",
        "Reparo forno (resistências, termostato)",
        "Certificação NR13 quando aplicável",
      ],
      pecas: [
        "Queimadores completos",
        "Válvulas (Robertshaw, Sabaf)",
        "Injetores GLP/GN",
        "Termostatos forno",
        "Grades ferro fundido",
        "Peças ignição",
      ],
    },
  },
  {
    id: "chapas",
    titulo: "Chapas e Griddles Vulcan",
    conteudo: {
      descricao: "Chapas Vulcan para cocção por contato direto, ideais para hambúrgueres, carnes, ovos e panquecas em cozinhas de alta demanda.",
      modelos: [
        { nome: "MSA Series", specs: "Manual • Aço carbono • Econômico" },
        { nome: "VACB Series", specs: "Termostato • Controle preciso • Produção" },
        { nome: "VHP Series", specs: "Alta potência • Inox • Heavy-duty" },
      ],
      tecnologias: [
        "Chapa 3/4\" aço polido",
        "Termostato até 550°F (287°C)",
        "Queimadores U-shape alta eficiência",
        "Zona fria para descarte gordura",
        "Construção toda em aço inox",
        "Recuperação rápida temperatura",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Temperagem/cura chapa (seasoning)",
        "Calibração termostato",
        "Troca queimadores tubulares",
        "Nivelamento e ajuste chapa",
        "Limpeza profunda sistema gás",
      ],
      pecas: [
        "Queimadores U-shape",
        "Termostatos",
        "Válvulas gás",
        "Peças ignição",
        "Knobs e controles",
      ],
    },
  },
  {
    id: "fritadeiras",
    titulo: "Fritadeiras Vulcan",
    conteudo: {
      descricao: "Fritadeiras Vulcan de alta performance para operações de grande volume, com sistemas de filtragem e controle preciso de temperatura.",
      modelos: [
        { nome: "LG Series", specs: "35-90 lbs • Gás • Floor model" },
        { nome: "EV Series", specs: "Elétrica • Bancada • Alta eficiência" },
        { nome: "PowerFry Series", specs: "Heavy-duty • Filtragem integrada • Premium" },
      ],
      tecnologias: [
        "Zona fria profunda (protege óleo)",
        "Termostato snap-action preciso",
        "Sistema filtragem óleo integrado",
        "Tubos de aquecimento articulados",
        "Construção toda inox 304",
        "Dreno rápido frontal",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Calibração termostato",
        "Troca tubos aquecimento",
        "Reparo sistema filtragem",
        "Limpeza profunda cuba e dreno",
        "Teste segurança high-limit",
      ],
      pecas: [
        "Tubos aquecimento",
        "Termostatos/high-limit",
        "Válvulas gás",
        "Cestos fritura",
        "Filtros e componentes",
      ],
    },
  },
  {
    id: "char-broilers",
    titulo: "Char Broilers e Grills",
    conteudo: {
      descricao: "Char broilers Vulcan para carnes grelhadas com sabor autêntico de brasa, essenciais em steakhouses e churrascarias.",
      modelos: [
        { nome: "VACB Series", specs: "Infrared • Alta temperatura • Carnes" },
        { nome: "VHP Series", specs: "Radiant • Versatil • Produção" },
      ],
      tecnologias: [
        "Queimadores infrared cerâmicos",
        "Temperatura até 900°F (482°C)",
        "Grades reversíveis (marca grelhado)",
        "Coletor gordura removível",
        "Radiantes cerâmicos duráveis",
        "Construção heavy-duty",
      ],
      servicos: [
        "Manutenção preventiva",
        "Troca radiantes cerâmicos",
        "Limpeza sistema gás",
        "Calibração temperatura",
        "Substituição grades",
        "Teste segurança",
      ],
      pecas: [
        "Radiantes cerâmicos",
        "Queimadores",
        "Grades reversíveis",
        "Válvulas e controles",
      ],
    },
  },
];

const problemasComuns = [
  {
    titulo: "Chama Amarela ou Irregular",
    sintomas: [
      "Chama amarelada ao invés de azul",
      "Chama oscilando",
      "Barulho na combustão",
    ],
    causas: [
      "Ar primário desregulado",
      "Queimador sujo/entupido",
      "Injetor obstruído",
      "Pressão gás incorreta",
    ],
    solucoes: [
      "Ajuste registro ar primário",
      "Limpeza profunda queimadores",
      "Desobstrução injetores",
      "Verificação pressão regulador",
    ],
  },
  {
    titulo: "Equipamento Não Acende",
    sintomas: [
      "Piloto não acende",
      "Piezoelétrico não funciona",
      "Chama apaga ao soltar botão",
    ],
    causas: [
      "Termopar defeituoso",
      "Piezoelétrico queimado",
      "Válvula piloto travada",
      "Termopar desposicionado",
    ],
    solucoes: [
      "Teste e troca termopar",
      "Substituição piezoelétrico",
      "Limpeza/troca válvula piloto",
      "Reposicionamento termopar",
    ],
  },
  {
    titulo: "Temperatura Incorreta",
    sintomas: [
      "Forno não atinge temperatura",
      "Chapa aquece demais",
      "Fritadeira não mantém temp",
    ],
    causas: [
      "Termostato descalibrado",
      "Sensor temperatura defeituoso",
      "Válvula moduladora com falha",
      "Isolamento danificado",
    ],
    solucoes: [
      "Calibração termostato",
      "Troca sensor/sonda",
      "Substituição válvula",
      "Reparo isolamento térmico",
    ],
  },
];

const diferenciais = [
  {
    icon: Flame,
    titulo: "Especialistas Vulcan",
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
    descricao: "Componentes originais Vulcan para reposição imediata.",
  },
  {
    icon: FileCheck,
    titulo: "Certificação NR13",
    descricao: "Documentação técnica para equipamentos sob pressão.",
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
    pergunta: "Qual a diferença entre fogões Vulcan V Series e Endurance?",
    resposta: "V Series é a linha de entrada com excelente custo-benefício para uso padrão. Endurance é heavy-duty, construída para uso intensivo 24/7 com maior durabilidade e potência dos queimadores.",
  },
  {
    pergunta: "Vocês fazem conversão de GLP para Gás Natural?",
    resposta: "Sim, realizamos conversão completa com troca de injetores, ajuste de regulador de pressão, calibração de chamas e emissão de ART. Serviço certificado conforme normas.",
  },
  {
    pergunta: "Com que frequência devo fazer manutenção em fogão industrial?",
    resposta: "Uso intensivo (>12h/dia): semestral. Uso padrão: anual. Inclui limpeza queimadores, teste válvulas, verificação vazamentos e calibração chamas.",
  },
  {
    pergunta: "Chapa Vulcan está empenando. O que fazer?",
    resposta: "Empenamento ocorre por superaquecimento ou choque térmico. Prevenção: aquecer gradualmente, não jogar água fria em chapa quente. WeDo verifica nivelamento e orienta uso correto.",
  },
  {
    pergunta: "Qual a vida útil de equipamentos Vulcan?",
    resposta: "Com manutenção adequada, fogões e chapas Vulcan duram 15-20 anos. Fritadeiras 10-15 anos. A qualidade de construção heavy-duty justifica o investimento inicial.",
  },
];

export default function AssistenciaTecnicaVulcan() {
  const { ctaUrl, ctaText } = useCTASettings();

  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Vulcan | Manutenção Fogões Chapas Fritadeiras Industriais | WeDo</title>
        <meta
          name="description"
          content="Assistência técnica especializada Vulcan Brasil. Manutenção preventiva e corretiva para fogões, chapas, fritadeiras e char broilers industriais. Peças originais, técnicos certificados."
        />
        <meta
          name="keywords"
          content="assistência técnica vulcan, manutenção vulcan, fogão vulcan, chapa vulcan, fritadeira vulcan industrial"
        />
        <link rel="canonical" href="https://wedocozinhas.com.br/assistencia-tecnica-vulcan" />
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
              <span className="text-accent font-medium">Líder em Equipamentos de Cocção Profissional</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica Vulcan
              <span className="block text-accent mt-2">Fogões, Chapas, Fritadeiras e Grills</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em toda linha Vulcan de equipamentos de cocção. 
              Conversão GLP/GN, calibração e peças originais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
              >
                <a href={`${CONTACT_URL}`} target="_blank" rel="noopener noreferrer">
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
                <a href="https://contatoswedo.lovable.app/" target="_blank" rel="noopener noreferrer">
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
              Equipamentos Vulcan Atendidos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manutenção especializada para toda linha de equipamentos de cocção Vulcan.
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
              Perguntas Frequentes - Vulcan
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
              Precisa de Assistência Técnica para seu Equipamento Vulcan?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Entre em contato agora e receba atendimento especializado para fogões, chapas, fritadeiras e grills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <a href={`${CONTACT_URL}`} target="_blank" rel="noopener noreferrer">
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
