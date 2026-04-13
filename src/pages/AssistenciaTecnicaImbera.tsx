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
  Award,
} from "lucide-react";
import { useCTASettings } from "@/hooks/useSiteSettings";

const CONTACT_URL = "https://contatoswedo.lovable.app/";

const equipamentos = [
  {
    id: "verticais",
    titulo: "Refrigeradores Verticais (VRS Series)",
    conteudo: {
      descricao: "Refrigeradores verticais Imbera para exposição e conservação de bebidas e alimentos em estabelecimentos comerciais. Linha VRS com portas de vidro e alta eficiência energética.",
      modelos: [
        { nome: "VRS-16", specs: "454L • 1 porta vidro • Conveniências" },
        { nome: "VRS-19", specs: "531L • 1 porta vidro • Restaurantes" },
        { nome: "VRS-26", specs: "729L • 2 portas vidro • Supermercados" },
      ],
      tecnologias: [
        "Compressor Embraco de alta eficiência",
        "Porta de vidro duplo temperado",
        "Iluminação LED interna",
        "Controladora digital de temperatura",
        "Degelo automático programável",
        "Ventilação forçada uniforme",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Troca de compressor Embraco",
        "Substituição ventilador evaporador",
        "Reparo controladora digital",
        "Troca resistências de degelo",
        "Substituição borrachas de porta",
      ],
      pecas: [
        "Compressores Embraco",
        "Ventiladores evaporador",
        "Resistências degelo",
        "Controladoras",
        "Borrachas porta",
        "Lâmpadas LED",
      ],
    },
  },
  {
    id: "cervejeiras",
    titulo: "Cervejeiras (CCV Series)",
    conteudo: {
      descricao: "Cervejeiras Imbera para exposição refrigerada de bebidas com portas de vidro, design atrativo e temperatura ideal para cervejas.",
      modelos: [
        { nome: "CCV-144", specs: "Compacta • 1 porta • Bares" },
        { nome: "CCV-315", specs: "Grande • 2 portas • Distribuidoras" },
      ],
      tecnologias: [
        "Temperatura ideal para cerveja (0°C a 4°C)",
        "Porta de vidro com low-e coating",
        "Iluminação LED para exposição",
        "Sistema de ventilação forçada",
        "Rodízios para fácil movimentação",
        "Controladora com display digital",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Troca compressor",
        "Reparo sistema de degelo",
        "Substituição ventiladores",
        "Troca borrachas e vedações",
        "Calibração de temperatura",
      ],
      pecas: [
        "Compressores",
        "Ventiladores",
        "Termostatos",
        "Resistências degelo",
        "Borrachas porta",
        "Controladoras",
      ],
    },
  },
  {
    id: "congeladores",
    titulo: "Congeladores Verticais (VFS Series)",
    conteudo: {
      descricao: "Congeladores verticais Imbera para conservação de produtos congelados com portas de vidro e temperatura até -18°C.",
      modelos: [
        { nome: "VFS Series", specs: "Congelamento • Porta vidro • Supermercados" },
      ],
      tecnologias: [
        "Temperatura até -18°C",
        "Porta de vidro com aquecimento anti-embaçamento",
        "Compressor de alta potência",
        "Degelo automático por resistência",
        "Controladora digital com alarme",
        "Prateleiras aramadas reguláveis",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Troca compressor de congelamento",
        "Reparo resistências de degelo",
        "Substituição resistência anti-embaçamento",
        "Troca timer degelo",
        "Calibração controladora",
      ],
      pecas: [
        "Compressores",
        "Resistências degelo",
        "Timers degelo",
        "Resistências anti-embaçamento",
        "Sensores NTC",
        "Controladoras",
      ],
    },
  },
  {
    id: "expositores",
    titulo: "Expositores Horizontais e Visa Coolers",
    conteudo: {
      descricao: "Expositores horizontais e visa coolers Imbera para exposição de produtos em supermercados, padarias e conveniências.",
      modelos: [
        { nome: "Expositor Horizontal", specs: "Tampa de vidro • Sorvetes e congelados" },
        { nome: "Visa Cooler", specs: "Porta de vidro • Bebidas e laticínios" },
      ],
      tecnologias: [
        "Tampa/porta de vidro curvo temperado",
        "Iluminação interna LED",
        "Sistema estático ou forçado",
        "Dreno de degelo",
        "Rodízios para movimentação",
        "Acabamento em aço pintado ou inox",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Troca compressor",
        "Reparo sistema de degelo",
        "Substituição borrachas",
        "Troca ventiladores",
        "Limpeza condensador",
      ],
      pecas: [
        "Compressores",
        "Borrachas tampa",
        "Ventiladores",
        "Termostatos",
        "Resistências",
        "Lâmpadas LED",
      ],
    },
  },
];

const problemasComuns = [
  {
    titulo: "Não Gela Adequadamente",
    sintomas: [
      "Temperatura acima do normal",
      "Bebidas mornas",
      "Compressor trabalha sem parar",
    ],
    causas: [
      "Gás refrigerante insuficiente",
      "Compressor com baixo rendimento",
      "Ventilador evaporador parado",
      "Condensador sujo",
    ],
    solucoes: [
      "Detecção e reparo de vazamento + recarga",
      "Avaliação e troca do compressor",
      "Substituição ventilador evaporador",
      "Limpeza profunda do condensador",
    ],
  },
  {
    titulo: "Condensação na Porta de Vidro",
    sintomas: [
      "Vidro embaçado permanentemente",
      "Gotas de água na porta",
      "Visibilidade comprometida",
    ],
    causas: [
      "Resistência anti-embaçamento queimada",
      "Vedação da porta comprometida",
      "Ambiente com umidade excessiva",
      "Porta desalinhada",
    ],
    solucoes: [
      "Troca resistência anti-embaçamento",
      "Substituição borracha de porta",
      "Alinhamento e ajuste da porta",
      "Orientação sobre ambiente ideal",
    ],
  },
  {
    titulo: "Compressor Liga e Desliga (Short Cycling)",
    sintomas: [
      "Compressor liga por poucos segundos",
      "Estalo repetitivo do relé",
      "Equipamento não mantém temperatura",
    ],
    causas: [
      "Relé de partida defeituoso",
      "Capacitor de partida queimado",
      "Termostato com defeito",
      "Compressor com problema mecânico",
    ],
    solucoes: [
      "Troca relé de partida",
      "Substituição capacitor",
      "Teste e troca termostato",
      "Avaliação completa do compressor",
    ],
  },
];

const diferenciais = [
  {
    icon: Award,
    titulo: "Pós-Garantia Especializado",
    descricao: "Continuidade técnica após os 3 anos de garantia Imbera.",
  },
  {
    icon: Zap,
    titulo: "Diagnóstico Rápido",
    descricao: "Técnicos com experiência em toda linha Imbera.",
  },
  {
    icon: Shield,
    titulo: "Peças Compatíveis",
    descricao: "Compressores Embraco e componentes de alta qualidade.",
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
    pergunta: "Quais equipamentos Imbera vocês atendem?",
    resposta: "Atendemos toda a linha Imbera: refrigeradores verticais (VRS-16, VRS-19, VRS-26), cervejeiras (CCV-144, CCV-315), congeladores verticais (VFS Series), expositores horizontais e visa coolers.",
  },
  {
    pergunta: "A Imbera oferece 3 anos de garantia. E depois?",
    resposta: "Após o período de garantia de 3 anos da Imbera, a WeDo oferece continuidade técnica com a mesma qualidade de atendimento. Nossos contratos PCM garantem manutenção preventiva e corretiva contínua.",
  },
  {
    pergunta: "O refrigerador Imbera não está gelando bem. O que pode ser?",
    resposta: "As causas mais comuns são: gás refrigerante insuficiente, ventilador do evaporador parado, condensador sujo ou compressor com baixo rendimento. Um diagnóstico técnico identifica a causa exata.",
  },
  {
    pergunta: "Vocês trabalham com compressores Embraco para Imbera?",
    resposta: "Sim, utilizamos compressores Embraco originais e compatíveis, que são os mesmos utilizados pela Imbera em seus equipamentos de fábrica.",
  },
  {
    pergunta: "A porta de vidro da cervejeira está embaçando. O que fazer?",
    resposta: "Embaçamento na porta de vidro geralmente indica falha na resistência anti-embaçamento ou vedação comprometida. Realizamos diagnóstico e reparo com peças compatíveis.",
  },
  {
    pergunta: "Com que frequência devo fazer manutenção no refrigerador Imbera?",
    resposta: "Recomendamos manutenção trimestral para uso intensivo. Inclui limpeza de condensador, verificação de ventiladores, teste de temperatura e inspeção de vedações.",
  },
  {
    pergunta: "Vocês atendem distribuidoras de bebidas com vários equipamentos Imbera?",
    resposta: "Sim, oferecemos contratos especiais para distribuidoras e redes com múltiplos equipamentos, com atendimento programado e desconto progressivo em peças.",
  },
  {
    pergunta: "Vocês atendem no interior de Goiás?",
    resposta: "Sim, atendemos em todo o estado de Goiás e Distrito Federal. Entre em contato para verificar disponibilidade na sua região.",
  },
];

export default function AssistenciaTecnicaImbera() {
  const { ctaUrl, ctaText } = useCTASettings();

  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Imbera | Manutenção Refrigerador Cervejeira Expositor Comercial | WeDo</title>
        <meta
          name="description"
          content="Assistência técnica especializada Imbera. Manutenção preventiva e corretiva para refrigeradores verticais VRS, cervejeiras CCV, congeladores VFS e expositores. Pós-garantia com qualidade."
        />
        <meta
          name="keywords"
          content="assistência técnica imbera, manutenção refrigerador imbera, cervejeira imbera, imbera VRS CCV"
        />
        <link rel="canonical" href="https://wedocozinhas.com.br/assistencia-tecnica-imbera" />
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
              <span className="text-accent font-medium">Líder Global em Refrigeração Comercial — +80 Anos</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica Imbera
              <span className="block text-accent mt-2">Refrigeradores, Cervejeiras e Expositores Comerciais</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em toda linha Imbera. Atendimento pós-garantia com a mesma qualidade e agilidade que seu equipamento merece.
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
                <Clock className="w-5 h-5 text-accent" /><span>Pós-Garantia Especializado</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Shield className="w-5 h-5 text-accent" /><span>Compressores Embraco</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Thermometer className="w-5 h-5 text-accent" /><span>Toda Linha Imbera</span>
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
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Equipamentos Imbera Atendidos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Manutenção especializada para toda linha de refrigeração comercial Imbera.</p>
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
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Perguntas Frequentes - Imbera</h2>
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
              Precisa de Assistência Técnica para seu Equipamento Imbera?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Garantia Imbera acabou? A WeDo continua o atendimento com a mesma qualidade. Fale conosco agora.
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
