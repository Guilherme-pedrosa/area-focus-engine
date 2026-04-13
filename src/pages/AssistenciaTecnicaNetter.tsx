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
  Droplets,
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
    id: "lavadoras-frontal",
    titulo: "Lavadoras de Louças Frontal Netter",
    conteudo: {
      descricao: "Lavadoras de louças profissionais Netter de abertura frontal, fabricação 100% nacional com excelente custo-benefício para operações de médio porte.",
      modelos: [
        { nome: "Netter Frontal Compacta", specs: "Bancada • Compacta • Bares e cafeterias" },
        { nome: "Netter Frontal Standard", specs: "Piso • Uso intensivo • Restaurantes" },
        { nome: "Netter Frontal Plus", specs: "Alta capacidade • Cozinhas industriais" },
      ],
      tecnologias: [
        "Fabricação 100% nacional",
        "Braços aspersão em aço inox",
        "Sistema de dosagem química",
        "Booster de temperatura",
        "Painel de controle simples",
        "Cuba com filtro removível",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Limpeza e desobstrução braços aspersão",
        "Troca de resistências",
        "Reparo bomba de lavagem",
        "Substituição eletroválvulas",
        "Calibração dosadores",
      ],
      pecas: [
        "Resistências",
        "Bombas de lavagem",
        "Eletroválvulas",
        "Braços aspersão",
        "Pressostatos",
        "Vedações de porta",
      ],
    },
  },
  {
    id: "lavadoras-utensilios",
    titulo: "Lavadoras de Utensílios Netter",
    conteudo: {
      descricao: "Lavadoras de utensílios e panelas Netter para limpeza de itens grandes como GN, assadeiras e panelas industriais.",
      modelos: [
        { nome: "Netter Utensílios", specs: "Alta pressão • Panelas e GN • Heavy-duty" },
      ],
      tecnologias: [
        "Jatos de alta pressão",
        "Cuba grande para itens volumosos",
        "Ciclos para gordura pesada",
        "Construção robusta em inox",
        "Filtragem eficiente",
        "Baixo consumo de água",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Limpeza sistema de jatos",
        "Troca bomba de pressão",
        "Substituição vedações",
        "Calibração dosagem química",
        "Reparo sistema elétrico",
      ],
      pecas: [
        "Bombas de pressão",
        "Jatos e bicos",
        "Resistências",
        "Vedações",
        "Filtros",
        "Micro switches",
      ],
    },
  },
  {
    id: "gavetas",
    titulo: "Gavetas Organizadoras Netter",
    conteudo: {
      descricao: "Gavetas organizadoras Netter para louças e utensílios, projetadas para otimizar o fluxo de trabalho e proteger os itens.",
      modelos: [
        { nome: "Gaveta Louças", specs: "Organização • Proteção • Ergonomia" },
        { nome: "Gaveta Utensílios", specs: "Modular • Customizável • Inox" },
      ],
      tecnologias: [
        "Trilhos de alta durabilidade",
        "Divisórias ajustáveis",
        "Construção em aço inox",
        "Sistema modular empilhável",
        "Amortecedores de fechamento",
        "Ergonomia para alto fluxo",
      ],
      servicos: [
        "Manutenção preventiva anual",
        "Troca de trilhos e corrediças",
        "Substituição de amortecedores",
        "Ajuste e nivelamento",
        "Reparo estrutural",
        "Troca de divisórias",
      ],
      pecas: [
        "Trilhos e corrediças",
        "Amortecedores",
        "Divisórias",
        "Rodízios",
        "Parafusos e fixadores",
      ],
    },
  },
];

const problemasComuns = [
  {
    titulo: "Não Enche Água",
    sintomas: [
      "Máquina não inicia ciclo",
      "Ciclo começa sem água suficiente",
      "Alarme de falta de água",
    ],
    causas: [
      "Eletroválvula de entrada travada",
      "Pressostato com defeito",
      "Filtro de entrada entupido",
      "Mangueira de entrada obstruída",
    ],
    solucoes: [
      "Teste e troca eletroválvula",
      "Substituição pressostato",
      "Limpeza filtro de entrada",
      "Desobstrução mangueira",
    ],
  },
  {
    titulo: "Louças Saem Sujas",
    sintomas: [
      "Resíduos após lavagem",
      "Louças com gordura",
      "Resultado inconsistente",
    ],
    causas: [
      "Braços aspersão entupidos",
      "Dosador químico desregulado",
      "Temperatura de lavagem baixa",
      "Bomba de lavagem com baixa pressão",
    ],
    solucoes: [
      "Desobstrução braços aspersão",
      "Calibração dosadores",
      "Verificação resistências",
      "Reparo/troca bomba lavagem",
    ],
  },
  {
    titulo: "Vazamento / Porta Não Trava",
    sintomas: [
      "Água escorrendo pela porta",
      "Porta não fecha completamente",
      "Micro switch não atua",
    ],
    causas: [
      "Vedação de porta desgastada",
      "Micro switch defeituoso",
      "Dobradiça desalinhada",
      "Mangueira interna furada",
    ],
    solucoes: [
      "Troca vedação de porta",
      "Substituição micro switch",
      "Ajuste dobradiças",
      "Reparo mangueiras internas",
    ],
  },
];

const diferenciais = [
  {
    icon: Droplets,
    titulo: "Especialistas Netter",
    descricao: "Técnicos com experiência em lavadoras profissionais nacionais.",
  },
  {
    icon: Zap,
    titulo: "Atendimento Ágil",
    descricao: "Peças nacionais com disponibilidade imediata.",
  },
  {
    icon: Shield,
    titulo: "Peças Originais",
    descricao: "Componentes originais Netter para reposição rápida.",
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
      "Limpeza braços aspersão",
      "Desconto 20% peças",
      "Atendimento em horário comercial",
    ],
  },
  {
    nome: "Profissional",
    destaque: true,
    beneficios: [
      "4 manutenções preventivas/ano",
      "Descalcificação inclusa",
      "Desconto 30% peças",
      "1 corretiva inclusa/ano",
      "Atendimento prioritário",
    ],
  },
  {
    nome: "Corporativo",
    beneficios: [
      "6 manutenções preventivas/ano",
      "Inspeção completa sistema",
      "Desconto 40% peças",
      "Corretivas inclusas",
      "Atendimento express",
    ],
  },
];

const faqItems = [
  {
    pergunta: "Quais equipamentos Netter vocês atendem?",
    resposta: "Atendemos toda a linha Netter: lavadoras de louças frontais, lavadoras de utensílios, gavetas organizadoras e sistemas de dosagem química.",
  },
  {
    pergunta: "Netter é uma boa marca de lavadora?",
    resposta: "Sim, a Netter é fabricante 100% nacional com excelente custo-benefício. Suas lavadoras são robustas, de fácil manutenção e com peças de reposição acessíveis e disponíveis no Brasil.",
  },
  {
    pergunta: "Com que frequência devo fazer manutenção na lavadora Netter?",
    resposta: "Recomendamos manutenção trimestral para uso intensivo. Inclui limpeza de braços aspersão, verificação de resistências, teste de eletroválvulas e inspeção de vedações.",
  },
  {
    pergunta: "Peças Netter são fáceis de encontrar?",
    resposta: "Sim, por ser fabricante nacional, as peças Netter são facilmente acessíveis. Mantemos em estoque as peças de maior giro para atendimento imediato.",
  },
  {
    pergunta: "A lavadora Netter é adequada para restaurantes de alto volume?",
    resposta: "A Netter é ideal para operações de médio porte. Para operações de altíssimo volume (>500 refeições/dia), recomendamos avaliar lavadoras de maior capacidade.",
  },
  {
    pergunta: "Vocês fazem instalação de lavadoras Netter?",
    resposta: "Sim, realizamos instalação completa incluindo conexões hidráulicas, elétricas e configuração do sistema de dosagem química.",
  },
  {
    pergunta: "A dosagem automática de detergente é necessária?",
    resposta: "Altamente recomendada. A dosagem automática garante economia de produto, resultado consistente e protege a máquina contra uso excessivo de químicos.",
  },
  {
    pergunta: "Vocês atendem no interior de Goiás?",
    resposta: "Sim, atendemos em todo o estado de Goiás e Distrito Federal. Entre em contato para verificar disponibilidade na sua região.",
  },
];

export default function AssistenciaTecnicaNetter() {
  const { ctaUrl, ctaText } = useCTASettings();

  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Netter | Manutenção Lavadora Louças Profissional Nacional | WeDo</title>
        <meta
          name="description"
          content="Assistência técnica especializada Netter. Manutenção preventiva e corretiva para lavadoras de louças profissionais, lavadoras de utensílios e gavetas organizadoras. Fabricação nacional, peças originais."
        />
        <meta
          name="keywords"
          content="assistência técnica netter, manutenção lavadora netter, lavadora louças profissional netter, gaveta organizadora netter"
        />
        <link rel="canonical" href="https://wedocozinhas.com.br/assistencia-tecnica-netter" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>

        <div className="container-wedo relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Droplets className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">Fabricação 100% Nacional</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica Netter
              <span className="block text-accent mt-2">Lavadoras Profissionais e Gavetas Organizadoras</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em toda linha Netter de lavadoras profissionais e gavetas.
              Peças nacionais, atendimento ágil e custo acessível.
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
                <Clock className="w-5 h-5 text-accent" />
                <span>Atendimento Rápido</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Shield className="w-5 h-5 text-accent" />
                <span>Peças Originais</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Zap className="w-5 h-5 text-accent" />
                <span>Fabricante Nacional</span>
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
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Equipamentos Netter Atendidos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manutenção especializada para toda linha de lavadoras e gavetas Netter.
            </p>
          </div>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
            {equipamentos.map((equip) => (
              <AccordionItem key={equip.id} value={equip.id} className="border rounded-xl px-6 bg-card shadow-sm">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center gap-3">
                    <Droplets className="w-6 h-6 text-accent flex-shrink-0" />
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
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Contratos de Manutenção PCM</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {planosPCM.map((plano, index) => (
              <Card key={index} className={`relative ${plano.destaque ? "border-2 border-accent shadow-xl" : "border shadow-lg"}`}>
                {plano.destaque && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">Mais Popular</div>
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
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Perguntas Frequentes - Netter</h2>
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
              Precisa de Assistência Técnica para sua Lavadora Netter?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Entre em contato agora e receba atendimento especializado para lavadoras de louças, utensílios e gavetas organizadoras.
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