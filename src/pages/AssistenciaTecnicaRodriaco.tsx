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
    id: "bancadas",
    titulo: "Bancadas e Mesas Refrigeradas",
    conteudo: {
      descricao: "Bancadas e mesas refrigeradas Rodriaço para conservação e preparo em cozinhas profissionais, com fabricação sob medida e alto padrão de acabamento em inox.",
      modelos: [
        { nome: "Bancada Refrigerada Standard", specs: "2 a 4 portas • Inox 304 • Cozinhas profissionais" },
        { nome: "Mesa Refrigerada Compacta", specs: "Compacta • Preparo • Restaurantes" },
        { nome: "Bancada Sob Medida", specs: "Customizada • Projetos especiais • Hotels" },
      ],
      tecnologias: [
        "Fabricação sob medida em inox 304",
        "Sistema de refrigeração estática ou forçada",
        "Controladora digital de temperatura",
        "Isolamento em poliuretano injetado",
        "Portas com vedação magnética",
        "Pés reguláveis em inox",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Recarga e teste de gás refrigerante",
        "Troca de compressor e motor ventilador",
        "Substituição borrachas magnéticas",
        "Reparo controladora digital",
        "Limpeza condensador e evaporador",
      ],
      pecas: [
        "Compressores",
        "Controladoras digitais",
        "Ventiladores",
        "Borrachas magnéticas",
        "Termostatos",
        "Resistências degelo",
      ],
    },
  },
  {
    id: "passthrough",
    titulo: "Pass-Through Refrigerados",
    conteudo: {
      descricao: "Pass-through refrigerados Rodriaço para fluxo contínuo entre cozinha e salão, mantendo alimentos na temperatura ideal durante o serviço.",
      modelos: [
        { nome: "Pass-Through Refrigerado", specs: "Dupla abertura • Inox • Restaurantes" },
        { nome: "Pass-Through Aquecido", specs: "Resistência • Pratos quentes • Buffets" },
      ],
      tecnologias: [
        "Abertura dupla (cozinha/salão)",
        "Refrigeração forçada uniforme",
        "Controladora digital com alarme",
        "Iluminação interna LED",
        "Portas com vidro duplo",
        "Isolamento térmico reforçado",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Reparo sistema de refrigeração",
        "Troca de resistências (aquecido)",
        "Substituição controladora",
        "Troca vedações e dobradiças",
        "Limpeza e higienização profunda",
      ],
      pecas: [
        "Compressores",
        "Resistências",
        "Controladoras",
        "Vedações de porta",
        "Dobradiças",
        "Lâmpadas LED",
      ],
    },
  },
  {
    id: "vitrines",
    titulo: "Vitrines Refrigeradas e Open Coolers",
    conteudo: {
      descricao: "Vitrines refrigeradas e open coolers Rodriaço para exposição e venda de produtos refrigerados em supermercados, padarias e conveniências.",
      modelos: [
        { nome: "Vitrine Refrigerada", specs: "Exposição • Vidro curvo • Padarias" },
        { nome: "Open Cooler", specs: "Acesso livre • Conveniências • Supermercados" },
      ],
      tecnologias: [
        "Vidro curvo ou reto temperado",
        "Cortina de ar (open cooler)",
        "Iluminação LED integrada",
        "Controladora digital Full Gauge",
        "Degelo automático programável",
        "Prateleiras reguláveis",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Reparo sistema de cortina de ar",
        "Troca ventiladores e motores",
        "Calibração controladora",
        "Substituição resistências degelo",
        "Troca borrachas e vedações",
      ],
      pecas: [
        "Ventiladores",
        "Motores",
        "Controladoras Full Gauge",
        "Resistências degelo",
        "Sensores NTC",
        "Lâmpadas LED",
      ],
    },
  },
  {
    id: "camaras",
    titulo: "Câmaras Modulares e Mobiliário Inox",
    conteudo: {
      descricao: "Câmaras frias modulares e mobiliário profissional em inox Rodriaço, projetados sob medida para cozinhas industriais.",
      modelos: [
        { nome: "Câmara Modular Fria", specs: "Modular • Desmontável • Cozinhas industriais" },
        { nome: "Mobiliário Inox", specs: "Sob medida • Mesas • Estantes • Prateleiras" },
      ],
      tecnologias: [
        "Painéis modulares encaixáveis",
        "Isolamento em poliuretano",
        "Porta com fechadura e puxador ergonômico",
        "Sistema de alarme de temperatura",
        "Piso antiderrapante",
        "Fabricação sob medida",
      ],
      servicos: [
        "Manutenção preventiva semestral",
        "Troca de unidade condensadora",
        "Substituição borrachas de porta",
        "Reparo sistema de alarme",
        "Troca resistência de moldura",
        "Ajuste e nivelamento painéis",
      ],
      pecas: [
        "Unidades condensadoras",
        "Borrachas de porta",
        "Resistências moldura",
        "Termostatos",
        "Fechaduras",
        "Dobradiças",
      ],
    },
  },
];

const problemasComuns = [
  {
    titulo: "Bancada Não Atinge Temperatura",
    sintomas: [
      "Temperatura acima do setpoint",
      "Evaporador congelado/bloqueado",
      "Compressor trabalha sem parar",
    ],
    causas: [
      "Gás refrigerante insuficiente",
      "Evaporador com gelo excessivo",
      "Condensador sujo",
      "Controladora descalibrada",
    ],
    solucoes: [
      "Recarga de gás refrigerante",
      "Limpeza e degelo do evaporador",
      "Limpeza do condensador",
      "Calibração da controladora",
    ],
  },
  {
    titulo: "Vitrine com Condensação Excessiva",
    sintomas: [
      "Vidro embaçado permanentemente",
      "Água acumulando na base",
      "Produtos com umidade",
    ],
    causas: [
      "Vedação da porta comprometida",
      "Resistência anti-embaçamento queimada",
      "Degelo com defeito",
      "Ambiente com umidade muito alta",
    ],
    solucoes: [
      "Troca vedação de porta",
      "Substituição resistência anti-embaçamento",
      "Reparo sistema de degelo",
      "Orientação sobre ambiente ideal",
    ],
  },
  {
    titulo: "Compressor Não Liga",
    sintomas: [
      "Equipamento não refrigera",
      "Compressor tenta ligar e desliga",
      "Estalo no relé de partida",
    ],
    causas: [
      "Relé de partida defeituoso",
      "Capacitor de partida queimado",
      "Protetor térmico atuando",
      "Compressor travado mecanicamente",
    ],
    solucoes: [
      "Troca relé de partida",
      "Substituição capacitor",
      "Teste e troca protetor térmico",
      "Avaliação e troca compressor",
    ],
  },
];

const diferenciais = [
  {
    icon: Thermometer,
    titulo: "Refrigeração Especializada",
    descricao: "Técnicos com experiência em bancadas, vitrines e câmaras modulares.",
  },
  {
    icon: Zap,
    titulo: "Atendimento Ágil",
    descricao: "Diagnóstico rápido com peças nacionais disponíveis.",
  },
  {
    icon: Shield,
    titulo: "Peças Originais",
    descricao: "Componentes originais Rodriaço para máxima durabilidade.",
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
    pergunta: "Quais equipamentos Rodriaço vocês atendem?",
    resposta: "Atendemos toda a linha Rodriaço: bancadas refrigeradas, mesas refrigeradas, pass-through, vitrines, open coolers, câmaras modulares e mobiliário profissional em inox.",
  },
  {
    pergunta: "Rodriaço fabrica equipamentos sob medida?",
    resposta: "Sim, a Rodriaço é conhecida por fabricar mobiliário e equipamentos refrigerados sob medida. Atendemos manutenção tanto de equipamentos de linha quanto projetos especiais.",
  },
  {
    pergunta: "Com que frequência devo fazer manutenção na bancada refrigerada?",
    resposta: "Recomendamos manutenção trimestral para uso intensivo. Inclui limpeza de condensador e evaporador, verificação de gás, teste de controladora e inspeção de vedações.",
  },
  {
    pergunta: "A vitrine Rodriaço está embaçando. O que pode ser?",
    resposta: "Embaçamento constante geralmente indica falha na resistência anti-embaçamento ou vedação comprometida. Também pode ser excesso de umidade no ambiente. Diagnóstico técnico identifica a causa exata.",
  },
  {
    pergunta: "Vocês fazem recarga de gás em equipamentos Rodriaço?",
    resposta: "Sim, realizamos recarga de gás refrigerante (R134a, R290, R404A) com detecção prévia de vazamento para garantir reparo definitivo.",
  },
  {
    pergunta: "É possível trocar o compressor de uma bancada Rodriaço?",
    resposta: "Sim, realizamos troca de compressor com peças compatíveis de alta qualidade. O serviço inclui vácuo, recarga de gás e teste completo do sistema.",
  },
  {
    pergunta: "Vocês atendem no interior de Goiás?",
    resposta: "Sim, atendemos em todo o estado de Goiás e Distrito Federal. Entre em contato para verificar disponibilidade na sua região.",
  },
];

export default function AssistenciaTecnicaRodriaco() {
  const { ctaUrl, ctaText } = useCTASettings();

  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Rodriaço | Manutenção Bancada Refrigerada Vitrine Pass-Through | WeDo</title>
        <meta
          name="description"
          content="Assistência técnica especializada Rodriaço. Manutenção preventiva e corretiva para bancadas refrigeradas, vitrines, pass-through, open coolers e câmaras modulares. Peças originais e atendimento ágil."
        />
        <meta
          name="keywords"
          content="assistência técnica rodriaço, manutenção bancada refrigerada rodriaço, vitrine refrigerada rodriaço, pass-through rodriaço"
        />
        <link rel="canonical" href="https://wedocozinhas.com.br/assistencia-tecnica-rodriaco" />
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
              <span className="text-accent font-medium">Mobiliário e Refrigeração Profissional — +25 Anos</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica Rodriaço
              <span className="block text-accent mt-2">Bancadas Refrigeradas, Vitrines e Pass-Through</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em toda linha Rodriaço de refrigeração comercial e mobiliário profissional em inox.
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
                <Shield className="w-5 h-5 text-accent" /><span>Peças Originais</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Thermometer className="w-5 h-5 text-accent" /><span>Refrigeração Comercial</span>
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
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Equipamentos Rodriaço Atendidos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Manutenção especializada para toda linha de refrigeração e mobiliário Rodriaço.</p>
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
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Perguntas Frequentes - Rodriaço</h2>
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
              Precisa de Assistência Técnica para seu Equipamento Rodriaço?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Entre em contato agora e receba atendimento especializado para bancadas refrigeradas, vitrines, pass-through e câmaras modulares.
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
