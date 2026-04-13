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

const WHATSAPP_URL = "https://wa.me/5562993775711";

const equipamentos = [
  {
    id: "fogoes",
    titulo: "Fogões Industriais Cozil",
    conteudo: {
      descricao: "Fogões industriais Cozil em aço inox para cozinhas comerciais, hospitais, restaurantes industriais e refeitórios. Construção robusta e alta durabilidade.",
      modelos: [
        { nome: "Fogão 4 Bocas", specs: "Industrial • Inox 304 • Alta pressão" },
        { nome: "Fogão 6 Bocas", specs: "Heavy-duty • Forno integrado • Produção" },
        { nome: "Fogão 8 Bocas", specs: "Linha pesada • Dupla função • Grande volume" },
      ],
      tecnologias: [
        "Construção toda em aço inox 304",
        "Queimadores dupla coroa alta potência",
        "Grades em ferro fundido pesado",
        "Válvulas com controle preciso de chama",
        "Pés reguláveis com sapatas antiderrapantes",
        "Acabamento sanitário (sem cantos vivos)",
      ],
      servicos: [
        "Manutenção preventiva semestral/anual",
        "Conversão GLP ↔ Gás Natural",
        "Troca válvulas e injetores",
        "Calibração de chamas",
        "Teste de vazamentos com detector",
        "Reparo forno (resistências, termostato)",
      ],
      pecas: [
        "Queimadores completos",
        "Válvulas de gás",
        "Injetores GLP/GN",
        "Termostatos",
        "Grades ferro fundido",
        "Peças de ignição",
      ],
    },
  },
  {
    id: "refrigeracao",
    titulo: "Bancadas e Câmaras Refrigeradas Cozil",
    conteudo: {
      descricao: "Bancadas refrigeradas, câmaras frias modulares e balcões refrigerados Cozil para conservação segura de alimentos em cozinhas profissionais.",
      modelos: [
        { nome: "Bancada Refrigerada 1.5m", specs: "Inox • Compressor embutido • 2 portas" },
        { nome: "Bancada Refrigerada 2.0m", specs: "Inox • 3 portas • Tampo em granito" },
        { nome: "Câmara Fria Modular", specs: "Painel PU • Desmontável • Sob medida" },
      ],
      tecnologias: [
        "Isolamento em poliuretano injetado",
        "Compressor hermético de alta eficiência",
        "Controlador digital de temperatura",
        "Portas com vedação magnética",
        "Prateleiras em aço inox reguláveis",
        "Sistema de degelo automático",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Recarga e verificação de gás refrigerante",
        "Troca de compressor",
        "Substituição de borrachas magnéticas",
        "Calibração controlador digital",
        "Limpeza condensador e evaporador",
      ],
      pecas: [
        "Compressores herméticos",
        "Termostatos/controladores",
        "Borrachas magnéticas",
        "Resistências de degelo",
        "Ventiladores evaporador",
        "Válvulas de expansão",
      ],
    },
  },
  {
    id: "infraestrutura",
    titulo: "Infraestrutura Inox (Pias, Coifas, Estufas)",
    conteudo: {
      descricao: "Linha completa de infraestrutura em aço inox Cozil: pias, cubas, coifas, estufas, banho-maria e pass-through para montagem de cozinhas profissionais.",
      modelos: [
        { nome: "Pias e Cubas Industriais", specs: "1-3 cubas • Inox 304 • Sob medida" },
        { nome: "Coifas e Exaustão", specs: "Com filtros • Inox • Sob medida" },
        { nome: "Estufas e Pass-Through", specs: "Elétrica • Banho-maria • Aquecimento" },
      ],
      tecnologias: [
        "Aço inox AISI 304 certificado",
        "Soldas sanitárias (TIG)",
        "Acabamento escovado ou polido",
        "Dimensões sob medida",
        "Conformidade ANVISA/Vigilância",
        "Sistemas de exaustão com filtros laváveis",
      ],
      servicos: [
        "Instalação completa",
        "Manutenção de exaustão e coifas",
        "Reparo soldas e acabamentos",
        "Troca de resistências (estufas)",
        "Limpeza e higienização profunda",
        "Adequação às normas sanitárias",
      ],
      pecas: [
        "Resistências de estufa",
        "Termostatos",
        "Filtros de coifa",
        "Válvulas e torneiras",
        "Dobradiças e puxadores",
      ],
    },
  },
];

const problemasComuns = [
  {
    titulo: "Vazamento de Gás no Fogão",
    sintomas: [
      "Cheiro de gás ao redor do equipamento",
      "Chama irregular ou amarelada",
      "Dificuldade de acender o queimador",
    ],
    causas: [
      "Conexão de gás solta ou danificada",
      "Válvula com desgaste interno",
      "Injetor obstruído ou incompatível",
      "Mangueira ressecada",
    ],
    solucoes: [
      "Teste completo de estanqueidade",
      "Troca de válvulas e conexões",
      "Substituição de injetores",
      "Instalação de mangueira nova certificada",
    ],
  },
  {
    titulo: "Bancada Refrigerada Não Gela",
    sintomas: [
      "Temperatura acima do setpoint",
      "Compressor liga e desliga rápido",
      "Formação excessiva de gelo no evaporador",
    ],
    causas: [
      "Gás refrigerante insuficiente",
      "Condensador sujo",
      "Borracha magnética danificada",
      "Compressor com baixa eficiência",
    ],
    solucoes: [
      "Verificação e recarga de gás",
      "Limpeza do condensador",
      "Troca de borrachas magnéticas",
      "Substituição do compressor",
    ],
  },
  {
    titulo: "Estufa Não Mantém Temperatura",
    sintomas: [
      "Alimento esfria rapidamente",
      "Temperatura oscila demais",
      "Resistência não aquece",
    ],
    causas: [
      "Resistência queimada",
      "Termostato descalibrado",
      "Vedação da porta danificada",
      "Fiação interna com mau contato",
    ],
    solucoes: [
      "Troca de resistências",
      "Calibração/troca do termostato",
      "Substituição vedações",
      "Revisão completa da fiação",
    ],
  },
];

const diferenciais = [
  {
    icon: Flame,
    titulo: "Especialistas Cozil",
    descricao: "Técnicos com experiência em toda linha de equipamentos inox Cozil.",
  },
  {
    icon: Zap,
    titulo: "Atendimento Ágil",
    descricao: "Diagnóstico rápido para minimizar parada da sua cozinha.",
  },
  {
    icon: Shield,
    titulo: "Peças Originais",
    descricao: "Componentes originais Cozil para máxima durabilidade.",
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
      "Inspeção gás e refrigeração",
      "Desconto 20% peças",
      "Atendimento em horário comercial",
    ],
  },
  {
    nome: "Profissional",
    destaque: true,
    beneficios: [
      "4 manutenções preventivas/ano",
      "Calibração e ajustes inclusos",
      "Desconto 30% peças",
      "1 corretiva inclusa/ano",
      "Atendimento prioritário",
    ],
  },
  {
    nome: "Corporativo",
    beneficios: [
      "6 manutenções preventivas/ano",
      "Cobertura gás + refrigeração",
      "Desconto 40% peças",
      "Corretivas inclusas",
      "Atendimento express",
    ],
  },
];

const faqItems = [
  {
    pergunta: "A Cozil fabrica quais tipos de equipamentos?",
    resposta: "A Cozil é fabricante brasileira de equipamentos em aço inox para cozinhas industriais: fogões, bancadas refrigeradas, câmaras frias modulares, pias, cubas, coifas, estufas, pass-through e banho-maria.",
  },
  {
    pergunta: "Vocês fazem manutenção em câmara fria modular Cozil?",
    resposta: "Sim! Realizamos manutenção preventiva e corretiva em câmaras frias modulares Cozil, incluindo verificação do sistema de refrigeração, vedações, painéis e controladores digitais.",
  },
  {
    pergunta: "Qual a frequência de manutenção para fogão industrial Cozil?",
    resposta: "Uso intensivo (>12h/dia): semestral. Uso padrão: anual. Inclui limpeza de queimadores, teste de vazamentos, verificação de válvulas e calibração de chamas.",
  },
  {
    pergunta: "A bancada refrigerada está formando gelo excessivo. O que fazer?",
    resposta: "Excesso de gelo indica problema no sistema de degelo (resistência queimada ou timer defeituoso), borracha magnética danificada ou porta mal fechada. Nossos técnicos diagnosticam e resolvem rapidamente.",
  },
  {
    pergunta: "Vocês instalam equipamentos Cozil novos?",
    resposta: "Sim, realizamos instalação completa de todos os equipamentos Cozil, incluindo conexões de gás, elétrica, água e esgoto, seguindo normas técnicas e de segurança.",
  },
  {
    pergunta: "Vocês fazem conversão de gás em fogões Cozil?",
    resposta: "Sim, realizamos conversão GLP para Gás Natural e vice-versa com troca de injetores, ajuste de regulador e calibração completa das chamas.",
  },
  {
    pergunta: "Qual a vida útil de equipamentos Cozil?",
    resposta: "Com manutenção adequada, equipamentos Cozil em inox duram 15-25 anos. A qualidade do aço inox 304 e a construção robusta garantem excelente durabilidade.",
  },
  {
    pergunta: "A WeDo atende em todo Goiás?",
    resposta: "Sim, atendemos em todo Goiás e Distrito Federal, com base em Goiânia. Para cidades mais distantes, atuamos com agendamento programado.",
  },
];

export default function AssistenciaTecnicaCozil() {
  const { ctaUrl, ctaText } = useCTASettings();
  const whatsappMessage = encodeURIComponent(
    "Olá! Preciso de assistência técnica para meu equipamento Cozil."
  );

  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Cozil | Manutenção Equipamentos Cozinha Industrial Inox | WeDo</title>
        <meta
          name="description"
          content="Assistência técnica especializada Cozil. Manutenção de fogões industriais, bancadas refrigeradas, câmaras frias modulares, estufas e infraestrutura inox. Peças originais."
        />
        <meta
          name="keywords"
          content="assistência técnica cozil, manutenção cozil, fogão industrial cozil, bancada refrigerada cozil, câmara fria cozil"
        />
        <link rel="canonical" href="https://wedocozinhas.com.br/assistencia-tecnica-cozil" />
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
              <span className="text-accent font-medium">Fabricante Brasileiro de Equipamentos Inox</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica Cozil
              <span className="block text-accent mt-2">Equipamentos Inox para Cozinhas Industriais</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em fogões, bancadas refrigeradas, câmaras frias modulares e infraestrutura inox Cozil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                <a href={`${WHATSAPP_URL}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />Solicitar Orçamento
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:+5562993775711"><Phone className="w-5 h-5 mr-2" />(62) 99377-5711</a>
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
                <Zap className="w-5 h-5 text-accent" /><span>Técnicos Certificados</span>
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
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Equipamentos Cozil Atendidos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Manutenção especializada para toda linha de equipamentos Cozil.</p>
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
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Perguntas Frequentes - Cozil</h2>
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
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-6">Precisa de Assistência Técnica para seu Equipamento Cozil?</h2>
            <p className="text-lg text-primary-foreground/80 mb-8">Entre em contato agora e receba atendimento especializado para fogões, bancadas refrigeradas e infraestrutura inox.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href={`${WHATSAPP_URL}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
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
