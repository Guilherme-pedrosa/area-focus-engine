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
  Thermometer,
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
    id: "expositores",
    titulo: "Expositores Verticais (GEVP / GPTU)",
    conteudo: {
      descricao: "Expositores verticais Gelopar para exposição refrigerada de bebidas, laticínios e frios em supermercados, padarias e conveniências.",
      modelos: [
        { nome: "GEVP Series", specs: "1 a 3 portas vidro • Bebidas e laticínios" },
        { nome: "GPTU Series", specs: "Porta cega • Uso profissional • Cozinhas" },
      ],
      tecnologias: [
        "Compressor Embraco de alta eficiência",
        "Porta de vidro duplo temperado",
        "Iluminação LED interna",
        "Controladora digital Full Gauge / Coel",
        "Degelo automático programável",
        "Ventilação forçada uniforme",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Troca de compressor Embraco",
        "Substituição controladora Full Gauge",
        "Reparo sistema de degelo",
        "Troca resistências e sensores NTC",
        "Substituição borrachas de porta",
      ],
      pecas: [
        "Compressores Embraco",
        "Controladoras Full Gauge/Coel",
        "Sensores NTC",
        "Resistências degelo",
        "Borrachas porta",
        "Lâmpadas LED",
      ],
    },
  },
  {
    id: "balcoes",
    titulo: "Balcões Refrigerados (GBSP / GGSR)",
    conteudo: {
      descricao: "Balcões refrigerados Gelopar para exposição e serviço em padarias, açougues e supermercados, com vidro curvo e iluminação LED.",
      modelos: [
        { nome: "GBSP Series", specs: "Vidro curvo • Padarias e confeitarias" },
        { nome: "GGSR Series", specs: "Seco/refrigerado • Açougues e frios" },
      ],
      tecnologias: [
        "Vidro curvo temperado",
        "Iluminação LED para exposição",
        "Evaporador de cobre/alumínio",
        "Pista fria em inox",
        "Controladora digital com alarme",
        "Bandeja de degelo acessível",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Reparo unidade condensadora",
        "Troca evaporador",
        "Calibração controladora",
        "Substituição vedações",
        "Limpeza profunda sistema",
      ],
      pecas: [
        "Unidades condensadoras",
        "Evaporadores",
        "Controladoras",
        "Ventiladores",
        "Vedações",
        "Resistências",
      ],
    },
  },
  {
    id: "cervejeiras",
    titulo: "Cervejeiras (GRBA)",
    conteudo: {
      descricao: "Cervejeiras Gelopar para bares, restaurantes e distribuidoras, com porta de vidro, iluminação LED e temperatura ideal para cervejas.",
      modelos: [
        { nome: "GRBA Series", specs: "1 a 3 portas • Vidro • Bares e distribuidoras" },
      ],
      tecnologias: [
        "Temperatura ideal (0°C a 4°C)",
        "Porta de vidro temperado",
        "LED interno para exposição",
        "Controladora digital",
        "Ventilação forçada",
        "Rodízios para movimentação",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Troca compressor",
        "Reparo sistema degelo",
        "Substituição ventiladores",
        "Troca borrachas porta",
        "Calibração temperatura",
      ],
      pecas: [
        "Compressores",
        "Ventiladores",
        "Termostatos",
        "Borrachas porta",
        "Resistências degelo",
        "Controladoras",
      ],
    },
  },
  {
    id: "camaras",
    titulo: "Câmaras Frias Modulares (GMCR) e Freezers",
    conteudo: {
      descricao: "Câmaras frias modulares e freezers horizontais Gelopar para conservação e congelamento em cozinhas industriais, supermercados e distribuidoras.",
      modelos: [
        { nome: "GMCR Series", specs: "Modular • Desmontável • Cozinhas industriais" },
        { nome: "Freezer Horizontal", specs: "Tampa vidro/cega • Congelados" },
        { nome: "Ilha de Congelados", specs: "Supermercados • Exposição" },
      ],
      tecnologias: [
        "Painéis modulares com encaixe",
        "Isolamento em poliuretano",
        "Unidade condensadora remota",
        "Controladora com alarme sonoro",
        "Porta com fechadura e resistência",
        "Piso antiderrapante (câmaras)",
      ],
      servicos: [
        "Manutenção preventiva semestral",
        "Troca unidade condensadora",
        "Reparo sistema de alarme",
        "Substituição borrachas porta",
        "Troca resistência moldura",
        "Recarga de gás refrigerante",
      ],
      pecas: [
        "Unidades condensadoras",
        "Borrachas porta",
        "Resistências moldura",
        "Controladoras",
        "Termostatos",
        "Fechaduras",
      ],
    },
  },
];

const problemasComuns = [
  {
    titulo: "Expositor Não Gela",
    sintomas: [
      "Temperatura acima do normal",
      "Produtos perdendo qualidade",
      "Compressor trabalhando sem parar",
    ],
    causas: [
      "Gás R134a/R290 insuficiente",
      "Compressor com baixo rendimento",
      "Evaporador bloqueado por gelo",
      "Condensador sujo",
    ],
    solucoes: [
      "Detecção vazamento + recarga gás",
      "Avaliação e troca compressor",
      "Degelo manual + reparo timer",
      "Limpeza profunda condensador",
    ],
  },
  {
    titulo: "Formação Excessiva de Gelo",
    sintomas: [
      "Camada grossa de gelo no evaporador",
      "Ventilador bloqueado pelo gelo",
      "Temperatura irregular",
    ],
    causas: [
      "Timer de degelo com defeito",
      "Resistência de degelo queimada",
      "Sensor NTC descalibrado",
      "Porta não vedando corretamente",
    ],
    solucoes: [
      "Troca timer de degelo",
      "Substituição resistência degelo",
      "Calibração/troca sensor NTC",
      "Troca borracha magnética",
    ],
  },
  {
    titulo: "Controladora com Erro",
    sintomas: [
      "Display piscando ou com código de erro",
      "Temperatura oscilando demais",
      "Equipamento não responde a comandos",
    ],
    causas: [
      "Sensor NTC defeituoso",
      "Controladora Full Gauge com falha",
      "Problema na fiação/conexões",
      "Pico de tensão danificou placa",
    ],
    solucoes: [
      "Troca sensor NTC",
      "Substituição controladora",
      "Revisão fiação e conexões",
      "Instalação de protetor de surto",
    ],
  },
];

const diferenciais = [
  {
    icon: Thermometer,
    titulo: "Especialistas Gelopar",
    descricao: "Técnicos com experiência em toda linha de refrigeração Gelopar.",
  },
  {
    icon: Zap,
    titulo: "Peças Nacionais",
    descricao: "Componentes nacionais com disponibilidade imediata.",
  },
  {
    icon: Shield,
    titulo: "Qualidade Garantida",
    descricao: "Peças originais e compatíveis de alta qualidade.",
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
      "Limpeza condensador/evaporador",
      "Desconto 20% peças",
      "Atendimento em horário comercial",
    ],
  },
  {
    nome: "Profissional",
    destaque: true,
    beneficios: [
      "4 manutenções preventivas/ano",
      "Recarga de gás inclusa",
      "Desconto 30% peças",
      "1 corretiva inclusa/ano",
      "Atendimento prioritário",
    ],
  },
  {
    nome: "Corporativo",
    beneficios: [
      "6 manutenções preventivas/ano",
      "Monitoramento de temperatura",
      "Desconto 40% peças",
      "Corretivas inclusas",
      "Atendimento express",
    ],
  },
];

const faqItems = [
  {
    pergunta: "Quais equipamentos Gelopar vocês atendem?",
    resposta: "Atendemos toda a linha Gelopar: expositores verticais (GEVP, GPTU), balcões refrigerados (GBSP, GGSR), cervejeiras (GRBA), câmaras frias modulares (GMCR), freezers horizontais, ilhas de congelados e open coolers.",
  },
  {
    pergunta: "Gelopar é uma boa marca?",
    resposta: "Sim, a Gelopar é líder nacional em refrigeração comercial com mais de 55 anos de mercado. Seus equipamentos são robustos, com peças acessíveis e ampla rede de suporte no Brasil.",
  },
  {
    pergunta: "O expositor Gelopar está formando muito gelo. O que pode ser?",
    resposta: "Formação excessiva de gelo geralmente indica falha no timer de degelo, resistência de degelo queimada ou sensor NTC com defeito. Também pode ser vedação de porta comprometida.",
  },
  {
    pergunta: "Vocês trabalham com controladoras Full Gauge para Gelopar?",
    resposta: "Sim, trabalhamos com controladoras Full Gauge e Coel, que são as marcas utilizadas pela Gelopar. Mantemos em estoque os modelos mais comuns para troca imediata.",
  },
  {
    pergunta: "Com que frequência devo fazer manutenção no expositor Gelopar?",
    resposta: "Recomendamos manutenção trimestral para uso intensivo. Inclui limpeza de condensador, verificação de ventiladores, teste de controladora, inspeção de vedações e verificação do sistema de degelo.",
  },
  {
    pergunta: "Vocês fazem manutenção em câmaras frias modulares Gelopar?",
    resposta: "Sim, realizamos manutenção completa em câmaras frias modulares GMCR, incluindo troca de unidade condensadora, reparo de alarme, substituição de borrachas e recarga de gás.",
  },
  {
    pergunta: "Vocês atendem supermercados com vários equipamentos Gelopar?",
    resposta: "Sim, oferecemos contratos especiais para supermercados e redes com múltiplos equipamentos, com atendimento programado e desconto progressivo em peças.",
  },
  {
    pergunta: "Vocês atendem no interior de Goiás?",
    resposta: "Sim, atendemos em todo o estado de Goiás e Distrito Federal. Entre em contato para verificar disponibilidade na sua região.",
  },
];

export default function AssistenciaTecnicaGelopar() {
  const { ctaUrl, ctaText } = useCTASettings();

  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Gelopar | Manutenção Expositor Balcão Refrigerado Câmara Fria | WeDo</title>
        <meta
          name="description"
          content="Assistência técnica especializada Gelopar. Manutenção preventiva e corretiva para expositores verticais, balcões refrigerados, cervejeiras, câmaras frias modulares e freezers. Líder nacional em refrigeração."
        />
        <meta
          name="keywords"
          content="assistência técnica gelopar, manutenção expositor gelopar, balcão refrigerado gelopar, câmara fria gelopar"
        />
        <link rel="canonical" href="https://wedocozinhas.com.br/assistencia-tecnica-gelopar" />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="container-wedo relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Thermometer className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">Líder Nacional em Refrigeração Comercial — +55 Anos</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica Gelopar
              <span className="block text-accent mt-2">Expositores, Balcões, Cervejeiras e Câmaras Frias</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em toda linha Gelopar de refrigeração comercial. Peças nacionais, atendimento ágil e expertise comprovada.
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
                <Clock className="w-5 h-5 text-accent" /><span>Atendimento Rápido</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Shield className="w-5 h-5 text-accent" /><span>Peças Nacionais</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Thermometer className="w-5 h-5 text-accent" /><span>Toda Linha Gelopar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-12 bg-muted/30">
        <div className="container-wedo">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {diferenciais.map((item, i) => (
              <div key={i} className="text-center">
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
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Equipamentos Gelopar Atendidos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Manutenção especializada para toda linha de refrigeração comercial Gelopar.</p>
          </div>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
            {equipamentos.map((equip) => (
              <AccordionItem key={equip.id} value={equip.id} className="border rounded-xl px-6 bg-card shadow-sm">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center gap-3">
                    <Thermometer className="w-6 h-6 text-accent flex-shrink-0" />
                    {equip.titulo}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6">
                    <p className="text-muted-foreground">{equip.conteudo.descricao}</p>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Modelos Atendidos:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {equip.conteudo.modelos.map((m, i) => (
                          <div key={i} className="bg-muted/50 rounded-lg p-3">
                            <p className="font-medium text-foreground">{m.nome}</p>
                            <p className="text-sm text-muted-foreground">{m.specs}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Características:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {equip.conteudo.tecnologias.map((t, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Serviços WeDo:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {equip.conteudo.servicos.map((s, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Wrench className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Peças em Estoque:</h4>
                      <div className="flex flex-wrap gap-2">
                        {equip.conteudo.pecas.map((p, i) => (
                          <span key={i} className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full">{p}</span>
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
            {problemasComuns.map((p, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />{p.titulo}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Sintomas:</p>
                    <ul className="space-y-1">
                      {p.sintomas.map((s, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-destructive">•</span>{s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Solução WeDo:</p>
                    <ul className="space-y-1">
                      {p.solucoes.slice(0, 3).map((s, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
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
            {planosPCM.map((plano, i) => (
              <Card key={i} className={`relative ${plano.destaque ? "border-2 border-accent shadow-xl" : "border shadow-lg"}`}>
                {plano.destaque && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">Mais Popular</div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plano.nome}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plano.beneficios.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
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
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Perguntas Frequentes - Gelopar</h2>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4 bg-card">
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
              Precisa de Assistência Técnica para seu Equipamento Gelopar?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Entre em contato agora e receba atendimento especializado para expositores, balcões, cervejeiras e câmaras frias Gelopar.
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
