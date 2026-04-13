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
    id: "processadores",
    titulo: "Processadores de Alimentos Industriais",
    conteudo: {
      descricao: "Processadores Skymsen de alta capacidade para preparo e processamento em cozinhas profissionais de alto volume, açougues e restaurantes.",
      modelos: [
        { nome: "PA-7SE / PA-7LE", specs: "7 litros • Cutter • Processamento rápido" },
        { nome: "PAIE-S / PAIE-N", specs: "Inox • Alta potência • Uso contínuo" },
        { nome: "Combinados", specs: "Multi-função • Discos intercambiáveis • Versatilidade" },
      ],
      tecnologias: [
        "Motor de alta potência para uso contínuo",
        "Discos intercambiáveis (fatiar, ralar, picar)",
        "Cuba em aço inox resistente",
        "Sistema de segurança com micro switch",
        "Construção heavy-duty para alto volume",
        "Lâminas em aço inox temperado",
      ],
      servicos: [
        "Manutenção preventiva semestral",
        "Afiação e troca de lâminas/discos",
        "Troca de rolamentos e correias",
        "Substituição de capacitores e motores",
        "Verificação sistema de segurança",
        "Limpeza profunda e higienização",
      ],
      pecas: [
        "Lâminas e discos de corte",
        "Correias de transmissão",
        "Capacitores",
        "Rolamentos",
        "Cubas inox",
        "Micro switches de segurança",
      ],
    },
  },
  {
    id: "liquidificadores",
    titulo: "Liquidificadores Industriais",
    conteudo: {
      descricao: "Liquidificadores industriais Skymsen para preparo de molhos, sopas, sucos e processamento de grandes volumes em cozinhas profissionais.",
      modelos: [
        { nome: "LI-2,0", specs: "2 litros • Bancada • Alta rotação" },
        { nome: "LI-3,5 / LI-4,0", specs: "3,5-4 litros • Inox • Uso intensivo" },
        { nome: "LI-8,0 / LI-10", specs: "8-10 litros • Industrial • Grande volume" },
        { nome: "LI-25", specs: "25 litros • Basculante • Produção" },
      ],
      tecnologias: [
        "Motor de alta potência blindado",
        "Copo em aço inox 304",
        "Lâminas temperadas de alta durabilidade",
        "Sistema anti-respingo",
        "Base antivibração",
        "Selo mecânico de vedação",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Troca de selo mecânico",
        "Substituição de lâminas",
        "Troca de rolamentos e capacitor",
        "Rebobinamento de motor",
        "Verificação sistema elétrico",
      ],
      pecas: [
        "Selos mecânicos",
        "Lâminas/facas",
        "Capacitores",
        "Rolamentos",
        "Engrenagens",
        "Copos/cubas inox",
      ],
    },
  },
  {
    id: "outros",
    titulo: "Cortadores, Moedores, Descascadores e Raladores",
    conteudo: {
      descricao: "Linha completa de equipamentos de preparo Skymsen: cortadores de frios, moedores de carne, descascadores de batata, raladores e extratores.",
      modelos: [
        { nome: "Cortadores de Frios", specs: "Lâmina 250-300mm • Manual/semi-auto" },
        { nome: "Moedores de Carne", specs: "Boca 22-98 • Alta produção • Inox" },
        { nome: "Descascadores de Batata", specs: "6-25 kg • Abrasivo • Automático" },
        { nome: "Extratores de Suco", specs: "Cítricos • Industrial • Inox" },
      ],
      tecnologias: [
        "Lâminas em aço carbono temperado",
        "Sistemas de segurança múltiplos",
        "Construção em alumínio/inox",
        "Motores blindados de alta potência",
        "Peças intercambiáveis padronizadas",
        "Operação simplificada e segura",
      ],
      servicos: [
        "Manutenção preventiva programada",
        "Afiação profissional de lâminas",
        "Troca de correias e engrenagens",
        "Substituição de abrasivos (descascador)",
        "Reparo elétrico e mecânico",
        "Adequação normas de segurança",
      ],
      pecas: [
        "Lâminas e facas",
        "Correias",
        "Engrenagens",
        "Discos abrasivos",
        "Rolamentos",
        "Capacitores e motores",
      ],
    },
  },
];

const problemasComuns = [
  {
    titulo: "Motor Não Liga",
    sintomas: [
      "Equipamento não responde",
      "Zumbido sem girar",
      "Liga e desliga sozinho",
    ],
    causas: [
      "Capacitor de partida defeituoso",
      "Enrolamento do motor queimado",
      "Micro switch de segurança travado",
      "Fiação interna com mau contato",
    ],
    solucoes: [
      "Troca do capacitor",
      "Rebobinamento ou troca do motor",
      "Ajuste/troca micro switch",
      "Revisão completa fiação",
    ],
  },
  {
    titulo: "Lâmina Desgastada ou Vibração",
    sintomas: [
      "Corte irregular ou grosseiro",
      "Vibração excessiva durante uso",
      "Ruído metálico anormal",
    ],
    causas: [
      "Lâmina/faca desgastada ou empenada",
      "Rolamento com folga",
      "Eixo desalinhado",
      "Correia frouxa ou partida",
    ],
    solucoes: [
      "Afiação ou troca de lâminas",
      "Substituição de rolamentos",
      "Realinhamento do eixo",
      "Troca de correias",
    ],
  },
  {
    titulo: "Vazamento no Selo Mecânico",
    sintomas: [
      "Líquido vazando pela base",
      "Motor molhando",
      "Oxidação na base do equipamento",
    ],
    causas: [
      "Selo mecânico desgastado",
      "Vedação danificada",
      "Eixo com desgaste",
      "Uso incorreto (excesso de líquido)",
    ],
    solucoes: [
      "Troca do selo mecânico",
      "Substituição de vedações",
      "Retífica ou troca do eixo",
      "Orientação de uso correto",
    ],
  },
];

const diferenciais = [
  {
    icon: Flame,
    titulo: "Especialistas Skymsen",
    descricao: "Técnicos com experiência em toda linha de processamento.",
  },
  {
    icon: Zap,
    titulo: "Atendimento Ágil",
    descricao: "Diagnóstico rápido para não parar sua produção.",
  },
  {
    icon: Shield,
    titulo: "Peças Originais",
    descricao: "Componentes originais Skymsen para máxima durabilidade.",
  },
  {
    icon: FileCheck,
    titulo: "Laudo Técnico",
    descricao: "Documentação completa de cada manutenção realizada.",
  },
];

const planosPCM = [
  {
    nome: "Essencial",
    beneficios: [
      "2 manutenções preventivas/ano",
      "Afiação de lâminas inclusa",
      "Desconto 20% peças",
      "Atendimento em horário comercial",
    ],
  },
  {
    nome: "Profissional",
    destaque: true,
    beneficios: [
      "4 manutenções preventivas/ano",
      "Afiação + lubrificação inclusos",
      "Desconto 30% peças",
      "1 corretiva inclusa/ano",
      "Atendimento prioritário",
    ],
  },
  {
    nome: "Corporativo",
    beneficios: [
      "6 manutenções preventivas/ano",
      "Revisão completa incluída",
      "Desconto 40% peças",
      "Corretivas inclusas",
      "Atendimento express",
    ],
  },
];

const faqItems = [
  {
    pergunta: "A Skymsen pertence a qual grupo?",
    resposta: "A Skymsen faz parte do grupo Metalfrio/Siemsen, sendo uma das marcas mais tradicionais do Brasil em equipamentos de processamento de alimentos para cozinhas profissionais.",
  },
  {
    pergunta: "Com que frequência devo afiar as lâminas do processador?",
    resposta: "Uso intensivo (>8h/dia): mensal. Uso padrão: trimestral. Lâminas desgastadas forçam o motor e comprometem a qualidade do corte. Oferecemos serviço profissional de afiação.",
  },
  {
    pergunta: "Meu liquidificador industrial está vazando pela base. O que pode ser?",
    resposta: "Na maioria dos casos é o selo mecânico desgastado. É uma peça de desgaste natural que deve ser trocada preventivamente a cada 6-12 meses em uso intensivo.",
  },
  {
    pergunta: "O motor do meu processador Skymsen está fazendo barulho. É grave?",
    resposta: "Pode indicar rolamento desgastado, correia frouxa ou eixo desalinhado. Recomendamos parar o uso e solicitar diagnóstico técnico para evitar danos maiores ao motor.",
  },
  {
    pergunta: "Vocês fazem rebobinamento de motores Skymsen?",
    resposta: "Sim, realizamos rebobinamento profissional de motores quando viável. Em alguns casos, a substituição por motor novo é mais vantajosa. Nossos técnicos orientam a melhor opção.",
  },
  {
    pergunta: "Qual a vida útil de equipamentos Skymsen?",
    resposta: "Com manutenção adequada, equipamentos Skymsen duram 10-15 anos. Peças de desgaste (lâminas, selos, correias) devem ser trocadas periodicamente conforme uso.",
  },
  {
    pergunta: "Vocês atendem cortadores de frios Skymsen?",
    resposta: "Sim! Atendemos toda a linha Skymsen: processadores, liquidificadores, cortadores de frios, moedores de carne, descascadores, raladores e extratores de suco.",
  },
  {
    pergunta: "A WeDo atende em todo Goiás?",
    resposta: "Sim, atendemos em todo Goiás e Distrito Federal, com base em Goiânia. Para cidades mais distantes, atuamos com agendamento programado.",
  },
];

export default function AssistenciaTecnicaSkymsen() {
  const { ctaUrl, ctaText } = useCTASettings();

  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Skymsen | Manutenção Processador Liquidificador Industrial | WeDo</title>
        <meta
          name="description"
          content="Assistência técnica especializada Skymsen. Manutenção de processadores de alimentos, liquidificadores industriais, cortadores de frios e moedores. Peças originais."
        />
        <meta
          name="keywords"
          content="assistência técnica skymsen, manutenção skymsen, processador skymsen, liquidificador industrial skymsen"
        />
        <link rel="canonical" href="https://wedocozinhas.com.br/assistencia-tecnica-skymsen" />
      </Helmet>

      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
        </div>
        <div className="container-wedo relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Flame className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">Fabricante Brasileiro de Equipamentos de Processamento</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica Skymsen
              <span className="block text-accent mt-2">Processadores, Liquidificadores e Equipamentos de Preparo</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em toda linha Skymsen de equipamentos de processamento. Afiação, troca de peças e assistência completa.
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
              <div className="flex items-center gap-2 text-primary-foreground/70"><Clock className="w-5 h-5 text-accent" /><span>Atendimento Rápido</span></div>
              <div className="flex items-center gap-2 text-primary-foreground/70"><Shield className="w-5 h-5 text-accent" /><span>Peças Originais</span></div>
              <div className="flex items-center gap-2 text-primary-foreground/70"><Zap className="w-5 h-5 text-accent" /><span>Técnicos Certificados</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container-wedo">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {diferenciais.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3"><item.icon className="w-7 h-7 text-accent" /></div>
                <h3 className="font-semibold text-foreground mb-1">{item.titulo}</h3>
                <p className="text-sm text-muted-foreground">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-wedo">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Equipamentos Skymsen Atendidos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Manutenção especializada para toda linha de equipamentos de processamento Skymsen.</p>
          </div>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
            {equipamentos.map((equip) => (
              <AccordionItem key={equip.id} value={equip.id} className="border rounded-xl px-6 bg-card shadow-sm">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center gap-3"><Flame className="w-6 h-6 text-accent flex-shrink-0" />{equip.titulo}</div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6">
                    <p className="text-muted-foreground">{equip.conteudo.descricao}</p>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Modelos Atendidos:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {equip.conteudo.modelos.map((m, idx) => (<div key={idx} className="bg-muted/50 rounded-lg p-3"><p className="font-medium text-foreground">{m.nome}</p><p className="text-sm text-muted-foreground">{m.specs}</p></div>))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Características:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {equip.conteudo.tecnologias.map((t, idx) => (<li key={idx} className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{t}</span></li>))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Serviços WeDo:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {equip.conteudo.servicos.map((s, idx) => (<li key={idx} className="flex items-start gap-2 text-sm"><Wrench className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{s}</span></li>))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Peças em Estoque:</h4>
                      <div className="flex flex-wrap gap-2">
                        {equip.conteudo.pecas.map((p, idx) => (<span key={idx} className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full">{p}</span>))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container-wedo">
          <div className="text-center mb-12"><h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Problemas Comuns que Resolvemos</h2></div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problemasComuns.map((problema, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader><CardTitle className="flex items-center gap-2 text-lg"><AlertTriangle className="w-5 h-5 text-amber-500" />{problema.titulo}</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div><p className="text-sm font-medium text-foreground mb-2">Sintomas:</p><ul className="space-y-1">{problema.sintomas.map((s, idx) => (<li key={idx} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-destructive">•</span>{s}</li>))}</ul></div>
                  <div><p className="text-sm font-medium text-foreground mb-2">Solução WeDo:</p><ul className="space-y-1">{problema.solucoes.slice(0, 3).map((s, idx) => (<li key={idx} className="text-sm text-muted-foreground flex items-start gap-2"><CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />{s}</li>))}</ul></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-wedo">
          <div className="text-center mb-12"><h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Contratos de Manutenção PCM</h2></div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {planosPCM.map((plano, index) => (
              <Card key={index} className={`relative ${plano.destaque ? "border-2 border-accent shadow-xl" : "border shadow-lg"}`}>
                {plano.destaque && (<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">Mais Popular</div>)}
                <CardHeader className="text-center"><CardTitle className="text-xl">{plano.nome}</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-3">{plano.beneficios.map((b, idx) => (<li key={idx} className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{b}</span></li>))}</ul>
                  <Button asChild className={`w-full mt-6 ${plano.destaque ? "bg-accent hover:bg-accent/90" : ""}`} variant={plano.destaque ? "default" : "outline"}>
                    <a href={ctaUrl} target="_blank" rel="noopener noreferrer">Solicitar Proposta</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container-wedo">
          <div className="text-center mb-12"><h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Perguntas Frequentes - Skymsen</h2></div>
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

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container-wedo">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-6">Precisa de Assistência Técnica para seu Equipamento Skymsen?</h2>
            <p className="text-lg text-primary-foreground/80 mb-8">Entre em contato agora e receba atendimento especializado para processadores, liquidificadores e equipamentos de preparo.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href={`${CONTACT_URL}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5 mr-2" />Falar com Especialista</a>
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
