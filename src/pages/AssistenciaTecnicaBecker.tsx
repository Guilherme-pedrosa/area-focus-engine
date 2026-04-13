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
  Award,
} from "lucide-react";
import { useCTASettings } from "@/hooks/useSiteSettings";

const CONTACT_URL = "https://contatoswedo.lovable.app/";

const equipamentos = [
  {
    id: "amassadeiras",
    titulo: "Amassadeiras Espirais Becker",
    conteudo: {
      descricao: "Amassadeiras espirais Becker são referência no mercado brasileiro de panificação. Construção robusta, motor potente e design pensado para produção contínua.",
      modelos: [
        { nome: "AE-12 / AE-15", specs: "Espiral • 12-15 kg • Padaria artesanal" },
        { nome: "AE-25 / AE-40", specs: "Espiral • 25-40 kg • Produção média" },
        { nome: "AE-60 / AE-80", specs: "Espiral • 60-80 kg • Industrial" },
        { nome: "AE-100 / AE-130 / AE-200", specs: "Espiral • Alta capacidade • Indústria" },
      ],
      tecnologias: [
        "Motor com inversor de frequência",
        "Cuba basculante em aço inox",
        "Sistema espiral de alta eficiência",
        "Proteção de segurança com micro switch",
        "2 velocidades (lenta e rápida)",
        "Timer digital com alarme",
      ],
      servicos: [
        "Manutenção preventiva semestral",
        "Troca de correias e engrenagens",
        "Substituição de rolamentos",
        "Reparo/troca inversor de frequência",
        "Alinhamento do espiral e cuba",
        "Verificação sistema de segurança NR-12",
        "Lubrificação programada",
      ],
      pecas: [
        "Correias de transmissão",
        "Engrenagens",
        "Rolamentos",
        "Inversores de frequência",
        "Espirais",
        "Eixos e mancais",
        "Micro switches",
      ],
    },
  },
  {
    id: "divisoras",
    titulo: "Divisoras Boleadoras Becker",
    conteudo: {
      descricao: "Divisoras boleadoras Becker para corte e boleamento preciso de massas. Produtividade e uniformidade para padarias de todos os portes.",
      modelos: [
        { nome: "DB-30", specs: "30 partes • Semi-automática • Padaria" },
        { nome: "DB-36", specs: "36 partes • Automática • Maior produção" },
        { nome: "Divisora Volumétrica", specs: "Contínua • Industrial • Alto volume" },
      ],
      tecnologias: [
        "Sistema de corte por pressão uniforme",
        "Boleamento automático integrado",
        "Operação por pedal ou automática",
        "Facas em aço inox temperado",
        "Construção em ferro fundido/inox",
        "Pratos intercambiáveis",
      ],
      servicos: [
        "Manutenção preventiva semestral",
        "Troca de facas",
        "Ajuste de pressão e uniformidade",
        "Troca de molas e pistões",
        "Substituição de rolamentos",
        "Adequação NR-12",
      ],
      pecas: [
        "Facas/lâminas",
        "Molas e pistões",
        "Rolamentos",
        "Pratos de divisão",
        "Vedações",
        "Engrenagens",
      ],
    },
  },
  {
    id: "modeladoras-cilindros",
    titulo: "Modeladoras, Cilindros e Câmaras de Fermentação",
    conteudo: {
      descricao: "Linha complementar Becker: modeladoras para pães, cilindros laminadores, câmaras de fermentação e fornos turbo para panificação completa.",
      modelos: [
        { nome: "Modeladora MDB", specs: "Pães francês e similares • Contínua" },
        { nome: "Cilindro Laminador", specs: "300-500mm • Massas • Regulável" },
        { nome: "Câmara de Fermentação", specs: "Controle temperatura e umidade" },
        { nome: "Forno Turbo", specs: "8-20 telas • Convecção • Vapor" },
        { nome: "Resfriador de Massas", specs: "Controle temperatura da massa" },
      ],
      tecnologias: [
        "Cilindros reguláveis para diferentes espessuras",
        "Esteira transportadora de entrada/saída",
        "Controle digital de temperatura e umidade",
        "Sistema de refrigeração por trocador de calor",
        "Convecção forçada com turbina",
        "Injeção de vapor programável",
      ],
      servicos: [
        "Manutenção preventiva programada",
        "Ajuste de cilindros e rolos",
        "Calibração controle clima (câmara)",
        "Troca de resistências e turbinas (forno)",
        "Reparo sistema refrigeração (resfriador)",
        "Limpeza e higienização profunda",
      ],
      pecas: [
        "Rolos/cilindros cromados",
        "Correias transportadoras",
        "Resistências",
        "Umidificadores",
        "Termostatos/controladores",
        "Turbinas/ventiladores",
      ],
    },
  },
];

const problemasComuns = [
  {
    titulo: "Amassadeira com Ruído Anormal",
    sintomas: [
      "Barulho de batida ou rangido",
      "Vibração excessiva durante uso",
      "Espiral oscilando ou desalinhado",
    ],
    causas: [
      "Rolamento principal desgastado",
      "Engrenagem com dentes quebrados",
      "Espiral desalinhado do eixo",
      "Correia frouxa ou ressecada",
    ],
    solucoes: [
      "Troca de rolamentos",
      "Substituição de engrenagens",
      "Realinhamento do espiral",
      "Troca e tensionamento de correia",
    ],
  },
  {
    titulo: "Divisora Não Corta Uniforme",
    sintomas: [
      "Pedaços de tamanhos diferentes",
      "Massa grudando nas facas",
      "Pressão insuficiente no corte",
    ],
    causas: [
      "Facas desgastadas ou tortas",
      "Molas fatigadas",
      "Pistão com perda de pressão",
      "Prato de divisão gasto",
    ],
    solucoes: [
      "Troca de facas",
      "Substituição de molas",
      "Reparo do sistema de pressão",
      "Troca do prato de divisão",
    ],
  },
  {
    titulo: "Câmara de Fermentação sem Controle",
    sintomas: [
      "Temperatura oscila demais",
      "Umidade insuficiente ou excessiva",
      "Massas não fermentam uniformemente",
    ],
    causas: [
      "Sensor de temperatura defeituoso",
      "Umidificador entupido ou queimado",
      "Vedação da porta danificada",
      "Controlador eletrônico com falha",
    ],
    solucoes: [
      "Troca do sensor de temperatura",
      "Limpeza/troca do umidificador",
      "Substituição de vedações",
      "Reparo/troca do controlador",
    ],
  },
];

const diferenciais = [
  {
    icon: Award,
    titulo: "Autorizada Becker",
    descricao: "WeDo é assistência técnica autorizada Becker em Goiás.",
  },
  {
    icon: Zap,
    titulo: "Atendimento Prioritário",
    descricao: "Canal direto com a fábrica para suporte técnico e peças.",
  },
  {
    icon: Shield,
    titulo: "Peças Originais",
    descricao: "Acesso direto a peças originais Becker de fábrica.",
  },
  {
    icon: FileCheck,
    titulo: "Garantia de Fábrica",
    descricao: "Manutenção que preserva a garantia do fabricante.",
  },
];

const planosPCM = [
  {
    nome: "Essencial",
    beneficios: [
      "2 manutenções preventivas/ano",
      "Lubrificação incluída",
      "Desconto 20% peças originais",
      "Atendimento em horário comercial",
    ],
  },
  {
    nome: "Profissional",
    destaque: true,
    beneficios: [
      "4 manutenções preventivas/ano",
      "Ajuste e calibração inclusos",
      "Desconto 30% peças originais",
      "1 corretiva inclusa/ano",
      "Atendimento prioritário",
    ],
  },
  {
    nome: "Corporativo",
    beneficios: [
      "6 manutenções preventivas/ano",
      "Revisão completa incluída",
      "Desconto 40% peças originais",
      "Corretivas inclusas",
      "Atendimento express",
    ],
  },
];

const faqItems = [
  {
    pergunta: "A WeDo é realmente autorizada Becker?",
    resposta: "Sim! A WeDo é assistência técnica oficialmente autorizada pela Becker no estado de Goiás. Isso significa acesso direto a peças originais, suporte técnico da fábrica e manutenções que preservam a garantia do equipamento.",
  },
  {
    pergunta: "Quais equipamentos Becker vocês atendem?",
    resposta: "Atendemos toda a linha Becker: amassadeiras espirais (AE), divisoras boleadoras (DB), modeladoras (MDB), cilindros laminadores, câmaras de fermentação, fornos turbo e resfriadores de massas.",
  },
  {
    pergunta: "A manutenção feita pela WeDo mantém a garantia Becker?",
    resposta: "Sim! Como assistência autorizada, nossas manutenções são realizadas dentro dos padrões Becker, utilizando peças originais e procedimentos homologados, mantendo a garantia de fábrica intacta.",
  },
  {
    pergunta: "Com que frequência devo fazer manutenção na amassadeira Becker?",
    resposta: "Uso intensivo (>12h/dia): semestral. Uso padrão: anual. Inclui lubrificação, verificação de correias e engrenagens, inspeção de rolamentos e teste do sistema de segurança.",
  },
  {
    pergunta: "Minha divisora Becker DB-30 não está boleando direito. O que pode ser?",
    resposta: "Boleamento irregular pode indicar desgaste nos pratos de divisão, facas desalinhadas ou molas fatigadas. Como autorizada, realizamos ajuste completo com peças originais.",
  },
  {
    pergunta: "Vocês fazem adequação NR-12 em equipamentos Becker?",
    resposta: "Sim, realizamos adequação NR-12 em toda linha Becker, incluindo proteções de segurança, micro switches, botões de emergência e documentação técnica exigida pela norma.",
  },
  {
    pergunta: "Qual a vida útil de equipamentos Becker?",
    resposta: "Com manutenção adequada, equipamentos Becker duram 15-25 anos. A construção robusta e a qualidade dos materiais, aliadas a manutenção preventiva regular, garantem excelente durabilidade.",
  },
  {
    pergunta: "A WeDo atende em todo Goiás?",
    resposta: "Sim, como autorizada Becker, atendemos em todo Goiás e Distrito Federal, com base em Goiânia. Para cidades mais distantes, atuamos com agendamento programado.",
  },
];

export default function AssistenciaTecnicaBecker() {
  const { ctaUrl, ctaText } = useCTASettings();

  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Autorizada Becker | Manutenção Amassadeira Divisora Panificação | WeDo</title>
        <meta name="description" content="Assistência técnica autorizada Becker em Goiás. Manutenção de amassadeiras espirais, divisoras boleadoras, modeladoras, cilindros e fornos turbo. Peças originais de fábrica." />
        <meta name="keywords" content="assistência técnica becker, autorizada becker, manutenção becker, amassadeira becker, divisora becker goiás" />
        <link rel="canonical" href="https://wedocozinhas.com.br/assistencia-tecnica-becker" />
      </Helmet>

      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
        </div>
        <div className="container-wedo relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge Autorizada */}
            <div className="inline-flex items-center gap-2 bg-destructive/20 border border-destructive/30 rounded-full px-4 py-2 mb-6">
              <Award className="w-5 h-5 text-destructive" />
              <span className="text-destructive font-bold">✓ Assistência Técnica Autorizada Becker em Goiás</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica Autorizada Becker
              <span className="block text-accent mt-2">Amassadeiras, Divisoras e Equipamentos de Panificação</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              WeDo é assistência técnica oficialmente autorizada pela Becker em Goiás. Peças originais de fábrica, suporte técnico direto e garantia preservada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                <a href={`${CONTACT_URL}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5 mr-2" />Solicitar Orçamento</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="https://contatoswedo.lovable.app/" target="_blank" rel="noopener noreferrer"><Phone className="w-5 h-5 mr-2" />Canais de Contato</a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 text-primary-foreground/70"><Award className="w-5 h-5 text-accent" /><span>Autorizada Oficial</span></div>
              <div className="flex items-center gap-2 text-primary-foreground/70"><Shield className="w-5 h-5 text-accent" /><span>Peças de Fábrica</span></div>
              <div className="flex items-center gap-2 text-primary-foreground/70"><Clock className="w-5 h-5 text-accent" /><span>Garantia Preservada</span></div>
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
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Equipamentos Becker Atendidos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Como autorizada, atendemos toda a linha de equipamentos de panificação Becker.</p>
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
                    <div><h4 className="font-semibold text-foreground mb-3">Modelos Atendidos:</h4><div className="grid md:grid-cols-2 gap-3">{equip.conteudo.modelos.map((m, idx) => (<div key={idx} className="bg-muted/50 rounded-lg p-3"><p className="font-medium text-foreground">{m.nome}</p><p className="text-sm text-muted-foreground">{m.specs}</p></div>))}</div></div>
                    <div><h4 className="font-semibold text-foreground mb-3">Características:</h4><ul className="grid md:grid-cols-2 gap-2">{equip.conteudo.tecnologias.map((t, idx) => (<li key={idx} className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{t}</span></li>))}</ul></div>
                    <div><h4 className="font-semibold text-foreground mb-3">Serviços WeDo:</h4><ul className="grid md:grid-cols-2 gap-2">{equip.conteudo.servicos.map((s, idx) => (<li key={idx} className="flex items-start gap-2 text-sm"><Wrench className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{s}</span></li>))}</ul></div>
                    <div><h4 className="font-semibold text-foreground mb-3">Peças em Estoque:</h4><div className="flex flex-wrap gap-2">{equip.conteudo.pecas.map((p, idx) => (<span key={idx} className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full">{p}</span>))}</div></div>
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
          <div className="text-center mb-12"><h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Perguntas Frequentes - Becker</h2></div>
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
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-6">Precisa de Assistência Técnica Autorizada Becker?</h2>
            <p className="text-lg text-primary-foreground/80 mb-8">Como autorizada oficial, garantimos peças originais, suporte de fábrica e preservação da garantia do seu equipamento.</p>
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
