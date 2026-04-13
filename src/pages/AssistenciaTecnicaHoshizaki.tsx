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
  Snowflake,
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
    id: "cubo",
    titulo: "Máquinas de Gelo em Cubo (KM Series)",
    conteudo: {
      descricao: "Máquinas de gelo em cubo Hoshizaki com tecnologia japonesa de harvest patenteada. Produzem cubos cristalinos, uniformes e de derretimento lento — ideais para bares, restaurantes e hotéis premium.",
      modelos: [
        { nome: "KM-30", specs: "30kg/dia • Compacta • Bares e cafés" },
        { nome: "KM-55", specs: "55kg/dia • Média • Restaurantes" },
        { nome: "KM-100", specs: "100kg/dia • Grande • Hotéis" },
        { nome: "KM-230", specs: "230kg/dia • Industrial • Eventos e buffets" },
      ],
      tecnologias: [
        "Sistema de harvest patenteado Hoshizaki",
        "Evaporador em aço inox (não alumínio)",
        "Cubos cristalinos de derretimento lento",
        "Compressor de alta eficiência",
        "Circuito de água com filtro",
        "Painel com diagnóstico de erros",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Limpeza e descalcificação circuito de água",
        "Reparo sistema de harvest",
        "Troca compressor e válvulas",
        "Substituição bomba de circulação",
        "Diagnóstico placa eletrônica",
      ],
      pecas: [
        "Compressores",
        "Válvulas solenoides de água",
        "Bombas de circulação",
        "Sensores de temperatura",
        "Placas eletrônicas",
        "Filtros de água",
      ],
    },
  },
  {
    id: "escama",
    titulo: "Máquinas de Gelo em Escama/Flake (FM Series)",
    conteudo: {
      descricao: "Máquinas de gelo em escama Hoshizaki para conservação de pescados, buffets, hospitais e indústria alimentícia. Gelo macio e moldável ideal para exposição.",
      modelos: [
        { nome: "FM Series Compacta", specs: "Até 100kg/dia • Peixarias • Buffets" },
        { nome: "FM Series Industrial", specs: "+200kg/dia • Indústria • Hospitais" },
      ],
      tecnologias: [
        "Gelo em escama macio e moldável",
        "Produção contínua sem ciclo de harvest",
        "Evaporador cilíndrico rotativo",
        "Baixa temperatura do gelo (-7°C)",
        "Ideal para conservação de pescados",
        "Sistema de distribuição uniforme",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Limpeza evaporador cilíndrico",
        "Troca compressor",
        "Reparo sistema de distribuição",
        "Substituição vedações e rolamentos",
        "Calibração produção",
      ],
      pecas: [
        "Compressores",
        "Evaporadores cilíndricos",
        "Rolamentos",
        "Vedações",
        "Motores",
        "Sensores",
      ],
    },
  },
  {
    id: "compactas",
    titulo: "Máquinas Compactas (SRM Series)",
    conteudo: {
      descricao: "Máquinas de gelo compactas Hoshizaki SRM para operações de menor volume, com design compacto e bin de armazenamento integrado.",
      modelos: [
        { nome: "SRM-45A", specs: "45kg/dia • Compacta • Bares e cafés" },
      ],
      tecnologias: [
        "Design compacto all-in-one",
        "Bin de armazenamento integrado",
        "Operação silenciosa",
        "Sistema de harvest simplificado",
        "Fácil instalação (plug & play)",
        "Painel de controle intuitivo",
      ],
      servicos: [
        "Manutenção preventiva semestral",
        "Limpeza e sanitização completa",
        "Troca filtro de água",
        "Reparo sistema de harvest",
        "Troca compressor",
        "Verificação circuito elétrico",
      ],
      pecas: [
        "Compressores",
        "Filtros de água",
        "Válvulas",
        "Sensores",
        "Bombas",
        "Placas de controle",
      ],
    },
  },
  {
    id: "dispensers",
    titulo: "Dispensers e Bins de Armazenamento",
    conteudo: {
      descricao: "Dispensers de gelo e bins de armazenamento Hoshizaki para grandes volumes, utilizados em hotéis, hospitais e operações de catering.",
      modelos: [
        { nome: "Dispenser Automático", specs: "Self-service • Hotéis • Hospitais" },
        { nome: "Bin de Armazenamento", specs: "200 a 700kg • Modular • Industrial" },
      ],
      tecnologias: [
        "Dispensação automática por sensor",
        "Isolamento térmico reforçado",
        "Construção em aço inox",
        "Sistema anti-contaminação",
        "Drenagem automática",
        "Compatível com todas máquinas KM/FM",
      ],
      servicos: [
        "Manutenção preventiva semestral",
        "Sanitização profunda",
        "Reparo sistema dispensador",
        "Troca isolamento térmico",
        "Substituição sensores",
        "Reparo drenagem",
      ],
      pecas: [
        "Sensores dispensador",
        "Isolamento térmico",
        "Motores",
        "Vedações",
        "Válvulas drenagem",
        "Componentes elétricos",
      ],
    },
  },
];

const problemasComuns = [
  {
    titulo: "Não Produz Gelo",
    sintomas: [
      "Máquina ligada mas sem produção",
      "Ciclo inicia mas não completa",
      "Apenas água no bin",
    ],
    causas: [
      "Compressor com defeito",
      "Gás refrigerante insuficiente (R404A/R134a)",
      "Válvula de água fechada/travada",
      "Mecanismo harvest com falha",
    ],
    solucoes: [
      "Diagnóstico e reparo compressor",
      "Detecção vazamento + recarga gás",
      "Troca válvula solenoide de água",
      "Reparo sistema de harvest",
    ],
  },
  {
    titulo: "Gelo com Formato Irregular ou Oco",
    sintomas: [
      "Cubos ocos ou muito finos",
      "Formato irregular/quebrado",
      "Produção reduzida",
    ],
    causas: [
      "Pressão de água inadequada",
      "Válvula de água com restrição",
      "Filtro de água saturado",
      "Temperatura ambiente muito alta",
    ],
    solucoes: [
      "Verificação e ajuste pressão água",
      "Troca válvula de água",
      "Substituição filtro de água",
      "Orientação sobre ambiente ideal",
    ],
  },
  {
    titulo: "Ciclo de Produção Muito Longo",
    sintomas: [
      "Produção abaixo da capacidade nominal",
      "Ciclos demorados demais",
      "Consumo de energia elevado",
    ],
    causas: [
      "Condensador sujo/obstruído",
      "Temperatura ambiente acima de 35°C",
      "Ventilador condensador parado",
      "Gás insuficiente",
    ],
    solucoes: [
      "Limpeza profunda condensador",
      "Verificação ventilação do ambiente",
      "Troca ventilador condensador",
      "Recarga gás refrigerante",
    ],
  },
];

const diferenciais = [
  {
    icon: Award,
    titulo: "Tecnologia Japonesa",
    descricao: "Expertise em diagnóstico avançado do sistema harvest Hoshizaki.",
  },
  {
    icon: Snowflake,
    titulo: "Circuito de Água",
    descricao: "Manutenção completa do circuito de água e filtração.",
  },
  {
    icon: Shield,
    titulo: "Peças Originais",
    descricao: "Componentes originais Hoshizaki para máxima durabilidade.",
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
      "Limpeza e sanitização circuito de água",
      "Desconto 20% peças",
      "Atendimento em horário comercial",
    ],
  },
  {
    nome: "Profissional",
    destaque: true,
    beneficios: [
      "4 manutenções preventivas/ano",
      "Troca filtro de água inclusa",
      "Desconto 30% peças",
      "1 corretiva inclusa/ano",
      "Atendimento prioritário",
    ],
  },
  {
    nome: "Corporativo",
    beneficios: [
      "6 manutenções preventivas/ano",
      "Descalcificação completa inclusa",
      "Desconto 40% peças",
      "Corretivas inclusas",
      "Atendimento express",
    ],
  },
];

const faqItems = [
  {
    pergunta: "Quais máquinas Hoshizaki vocês atendem?",
    resposta: "Atendemos toda a linha Hoshizaki: máquinas de gelo em cubo (KM Series: KM-30, KM-55, KM-100, KM-230), gelo em escama (FM Series), compactas (SRM-45A), dispensers e bins de armazenamento.",
  },
  {
    pergunta: "O que é o sistema de harvest da Hoshizaki?",
    resposta: "O harvest é o processo patenteado de liberação dos cubos de gelo do evaporador. É o diferencial da Hoshizaki que produz cubos cristalinos e uniformes. Problemas no harvest afetam diretamente a qualidade e quantidade de gelo.",
  },
  {
    pergunta: "Por que minha máquina Hoshizaki está produzindo gelo oco?",
    resposta: "Gelo oco geralmente indica problema na pressão ou fluxo de água: filtro saturado, válvula solenoide com restrição ou pressão de entrada inadequada. Também pode ser causado por temperatura ambiente muito alta.",
  },
  {
    pergunta: "Com que frequência devo trocar o filtro de água?",
    resposta: "Recomendamos troca a cada 6 meses para uso intensivo, ou conforme indicação do fabricante. Filtro saturado reduz a qualidade do gelo e pode danificar o sistema. Nossos contratos PCM incluem troca programada.",
  },
  {
    pergunta: "Hoshizaki é distribuída pela Macom no Brasil?",
    resposta: "Sim, a Hoshizaki é distribuída no Brasil pela Macom. A WeDo atende ambas as marcas com expertise técnica especializada em máquinas de gelo.",
  },
  {
    pergunta: "A máquina de gelo está fazendo barulho anormal. É grave?",
    resposta: "Barulho anormal pode indicar problema no compressor, ventilador do condensador ou bomba de circulação. Recomendamos diagnóstico técnico imediato para evitar falha completa.",
  },
  {
    pergunta: "Vocês fazem descalcificação da máquina de gelo?",
    resposta: "Sim, realizamos descalcificação completa do circuito de água, fundamental para manter a qualidade do gelo e a vida útil do equipamento. Especialmente importante em regiões com água calcária.",
  },
  {
    pergunta: "Vocês atendem hotéis e hospitais com máquinas Hoshizaki?",
    resposta: "Sim, oferecemos contratos especiais para hotéis e hospitais com atendimento prioritário, manutenção programada e troca de filtros inclusa para garantir operação contínua.",
  },
];

export default function AssistenciaTecnicaHoshizaki() {
  const { ctaUrl, ctaText } = useCTASettings();

  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Hoshizaki | Manutenção Máquina de Gelo Cubo Escama | WeDo</title>
        <meta
          name="description"
          content="Assistência técnica especializada Hoshizaki. Manutenção preventiva e corretiva para máquinas de gelo em cubo KM Series, escama FM Series e compactas SRM. Tecnologia japonesa, sistema harvest e circuito de água."
        />
        <meta
          name="keywords"
          content="assistência técnica hoshizaki, manutenção máquina de gelo hoshizaki, hoshizaki KM FM SRM, máquina gelo cubo escama"
        />
        <link rel="canonical" href="https://wedocozinhas.com.br/assistencia-tecnica-hoshizaki" />
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
              <Snowflake className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">Tecnologia Japonesa Premium — Líder Mundial em Máquinas de Gelo</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica Hoshizaki
              <span className="block text-accent mt-2">Máquinas de Gelo em Cubo e Escama</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em toda linha Hoshizaki. Expertise em sistema harvest, circuito de água e diagnóstico avançado de máquinas de gelo premium.
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
                <Award className="w-5 h-5 text-accent" /><span>Tecnologia Japonesa</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Shield className="w-5 h-5 text-accent" /><span>Sistema Harvest</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Snowflake className="w-5 h-5 text-accent" /><span>Gelo Premium</span>
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
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Equipamentos Hoshizaki Atendidos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Manutenção especializada para toda linha de máquinas de gelo Hoshizaki.</p>
          </div>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
            {equipamentos.map((equip) => (
              <AccordionItem key={equip.id} value={equip.id} className="border rounded-xl px-6 bg-card shadow-sm">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center gap-3">
                    <Snowflake className="w-6 h-6 text-accent flex-shrink-0" />
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
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Perguntas Frequentes - Hoshizaki</h2>
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
              Precisa de Assistência Técnica para sua Máquina de Gelo Hoshizaki?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Diagnóstico avançado do sistema harvest, circuito de água e componentes premium. Fale com nossos especialistas agora.
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
