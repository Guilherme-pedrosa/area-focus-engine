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
  ThermometerSnowflake,
  Clock,
  Shield,
  CheckCircle,
  AlertTriangle,
  Phone,
  Wrench,
  Wifi,
  Zap,
  FileCheck,
  MessageCircle,
} from "lucide-react";

const LINKTREE_URL = "https://linktr.ee/wedocorp";
const WHATSAPP_URL = "https://wa.me/5562993775711";

const equipamentos = [
  {
    id: "multifresh-next",
    titulo: "MultiFresh Next - Abatedor Multifuncional",
    conteudo: {
      descricao: "O MultiFresh Next é o abatedor de temperatura multifuncional completo da Irinox, com até 15 funções: resfriamento, ultracongelamento, descongelamento controlado, fermentação lenta, conservação, regeneração.",
      modelos: [
        { nome: "MultiFresh Next L", specs: "15 kg resfriamento / 10 kg congelamento" },
        { nome: "MultiFresh Next M", specs: "25 kg resfriamento / 18 kg congelamento" },
        { nome: "MultiFresh Next XL", specs: "40 kg resfriamento / 30 kg congelamento" },
      ],
      tecnologias: [
        "Sanigen: Sistema sanitização UV interno automático",
        "Tela touchscreen 7\" intuitiva",
        "Conectividade Wi-Fi para gestão remota",
        "76+ ciclos pré-programados HACCP",
        "Multipoint: Sonda múltiplos pontos temperatura",
        "ECO Mode: Economia energética noturna",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Calibração sondas temperatura",
        "Atualização software e firmware",
        "Reparo/substituição placas eletrônicas MYA1/MYA2",
        "Manutenção sistema Sanigen UV",
        "Troca compressor (Embraco, Danfoss)",
        "Configuração conectividade Wi-Fi",
      ],
      pecas: [
        "Sondas temperatura núcleo",
        "Placas eletrônicas MYA1, MYA2",
        "Compressores Embraco linha",
        "Válvulas expansão eletrônica",
        "Lâmpadas UV Sanigen",
        "Vedações porta",
        "Cartão SD recovery",
      ],
    },
  },
  {
    id: "easyfresh-next",
    titulo: "EasyFresh Next - Abatedor Essencial",
    conteudo: {
      descricao: "O EasyFresh Next é a linha essencial de abatedores Irinox, focada em resfriamento e ultracongelamento com 76 ciclos pré-programados.",
      modelos: [
        { nome: "EasyFresh Next L", specs: "15 kg resfriamento / 10 kg congelamento" },
        { nome: "EasyFresh Next M", specs: "25 kg resfriamento / 18 kg congelamento" },
      ],
      tecnologias: [
        "Painel digital LCD intuitivo",
        "Sonda núcleo único ponto",
        "76 ciclos HACCP programados",
        "Modo manual temporizado",
        "Ciclo contínuo (conservação)",
        "Resfriamento: +90°C até +3°C em 90 minutos",
        "Ultracongelamento: +90°C até -18°C em 240 minutos",
      ],
      servicos: [
        "Manutenção preventiva semestral",
        "Calibração sonda núcleo",
        "Carga gás refrigerante R404A/R452A",
        "Limpeza evaporador",
        "Teste vazamento sistema frigorífico",
        "Substituição compressor",
        "Reparo painel LCD",
      ],
      pecas: [
        "Sondas temperatura",
        "Compressores",
        "Válvulas expansão",
        "Vedações porta",
        "Filtros ar/água",
        "Placas eletrônicas",
      ],
    },
  },
  {
    id: "simplyfresh",
    titulo: "SimplyFresh - Compacto 5 Bandejas",
    conteudo: {
      descricao: "O SimplyFresh é o abatedor compacto Irinox para 5 bandejas GN 1/1, ideal para restaurantes e cozinhas menores.",
      modelos: [
        { nome: "SimplyFresh", specs: "10 kg resfriamento / 7 kg congelamento" },
      ],
      tecnologias: [
        "Painel digital simples (4 botões)",
        "4 funções: Resfriamento hard, soft, congelamento hard, soft",
        "Sonda núcleo inclusa",
        "Compacto: 850mm altura",
        "5 bandejas GN 1/1",
      ],
      servicos: [
        "Manutenção corretiva rápida",
        "Troca compressor hermético",
        "Calibração temperatura",
        "Limpeza circuito frigorífico",
        "Substituição painel controle",
      ],
      pecas: [
        "Compressores herméticos",
        "Sondas temperatura",
        "Vedações porta",
        "Painéis controle",
      ],
    },
  },
];

const problemasComuns = [
  {
    titulo: "Alarme Pressostato",
    sintomas: [
      "Display exibe erro pressostato",
      "Equipamento não inicia ciclo",
      "Compressor desliga prematuramente",
    ],
    causas: [
      "Sensor pressão descalibrado/defeituoso",
      "Condensador sujo (bloqueio fluxo ar)",
      "Gás refrigerante insuficiente",
      "Válvula expansão travada",
    ],
    solucoes: [
      "Teste sensor pressão (continuidade)",
      "Limpeza profunda condensador",
      "Verificação carga gás (manifold)",
      "Substituição sensor pressostato original",
    ],
  },
  {
    titulo: "Erro Placa Display (MYA)",
    sintomas: [
      "Display não liga ou trava",
      "Perda de configurações",
      "Erro comunicação placas",
    ],
    causas: [
      "Corrupção software (micro SD)",
      "Falha placa mãe MYA1/MYA2",
      "Problemas alimentação elétrica",
    ],
    solucoes: [
      "Recovery sistema via micro SD Irinox oficial",
      "Teste placa mãe (voltagem, comunicação CAN)",
      "Substituição placa eletrônica original",
      "Atualização firmware última versão",
    ],
  },
  {
    titulo: "Porta Desalinhada",
    sintomas: [
      "Porta não fecha hermeticamente",
      "Perda de frio, condensação",
      "Aumento consumo energia",
    ],
    causas: [
      "Dobradiças desreguladas",
      "Vedação deformada/ressecada",
      "Estrutura porta empenada",
    ],
    solucoes: [
      "Ajuste dobradiças conforme manual técnico SB07",
      "Substituição vedação original",
      "Teste hermeticidade (papel)",
      "Alinhamento porta digital",
    ],
  },
];

const diferenciais = [
  {
    icon: ThermometerSnowflake,
    titulo: "Especialistas em Refrigeração",
    descricao: "Técnicos com certificação em sistemas frigoríficos comerciais e industriais.",
  },
  {
    icon: Wifi,
    titulo: "Diagnóstico Remoto",
    descricao: "Suporte técnico via conectividade Wi-Fi dos equipamentos MultiFresh.",
  },
  {
    icon: Shield,
    titulo: "Peças Originais Irinox",
    descricao: "Estoque de componentes originais: placas MYA, sondas, compressores.",
  },
  {
    icon: FileCheck,
    titulo: "Documentação HACCP",
    descricao: "Relatórios técnicos completos para auditorias e certificações.",
  },
];

const planosPCM = [
  {
    nome: "Essencial",
    cor: "border-muted",
    beneficios: [
      "4 manutenções preventivas/ano",
      "Limpeza evaporador/condensador",
      "Calibração sondas",
      "Desconto 20% peças",
      "SLA 8h horário comercial",
    ],
  },
  {
    nome: "Profissional",
    cor: "border-accent",
    destaque: true,
    beneficios: [
      "6 manutenções preventivas/ano",
      "Atualização software inclusa",
      "Desconto 30% peças",
      "2 corretivas inclusas/ano",
      "SLA 4h atendimento 24/7",
    ],
  },
  {
    nome: "Corporativo",
    cor: "border-primary",
    beneficios: [
      "Manutenção mensal personalizada",
      "Gestão HACCP digital",
      "Desconto 40% peças",
      "Mão de obra corretiva inclusa",
      "SLA 2h atendimento 24/7",
      "Spare parts in-loco",
    ],
  },
];

const faqItems = [
  {
    pergunta: "A WeDo é assistência técnica autorizada Irinox?",
    resposta: "Somos assistência técnica especializada em equipamentos Irinox com técnicos treinados em refrigeração comercial e eletrônica especializada. Utilizamos peças originais Irinox e seguimos protocolos técnicos do fabricante.",
  },
  {
    pergunta: "Qual a diferença entre MultiFresh e EasyFresh?",
    resposta: "MultiFresh é multifuncional com 15 funções (resfriamento, congelamento, descongelamento, fermentação, regeneração, conservação) e sistema Sanigen UV. EasyFresh é essencial focado em resfriamento e ultracongelamento (76 ciclos).",
  },
  {
    pergunta: "O que é o sistema Sanigen da Irinox?",
    resposta: "Sanigen é sistema sanitização por luz UV-C integrado ao MultiFresh que elimina 99,9% bactérias, vírus e mofo dentro da câmara, aumentando vida útil dos alimentos e higiene.",
  },
  {
    pergunta: "Qual frequência de manutenção preventiva para abatedores Irinox?",
    resposta: "Recomendamos trimestral para uso intensivo (hospitais, hotéis), semestral para uso padrão (restaurantes). Inclui limpeza evaporador/condensador, calibração sondas e análise sistema frigorífico.",
  },
  {
    pergunta: "Vocês fazem recovery de placa eletrônica MYA?",
    resposta: "Sim, temos procedimento recovery via micro SD com software Irinox oficial para restaurar placas MYA1 e MYA2 após falhas de sistema ou atualizações corrompidas.",
  },
  {
    pergunta: "Qual gás refrigerante usado em equipamentos Irinox?",
    resposta: "Modelos mais antigos: R404A. Modelos recentes (linha Next): R452A ou R290 (propano - ecológico). Identificamos modelo específico antes da carga.",
  },
  {
    pergunta: "Alarme pressostato Irinox. O que fazer?",
    resposta: "Alarme pressostato indica problema sistema frigorífico: condensador sujo, gás insuficiente ou sensor defeituoso. Requer diagnóstico técnico profissional imediato para evitar danos compressor.",
  },
  {
    pergunta: "Abatedor Irinox não congela. Quais as causas?",
    resposta: "Principais causas: gás refrigerante insuficiente (vazamento), compressor fraco, válvula expansão defeituosa, evaporador bloqueado por gelo excessivo, ou sonda núcleo descalibrada.",
  },
];

export default function AssistenciaTecnicaIrinox() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Preciso de assistência técnica para meu equipamento Irinox."
  );

  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Irinox | Manutenção Abatedor Temperatura MultiFresh EasyFresh | WeDo</title>
        <meta
          name="description"
          content="Assistência técnica especializada Irinox Brasil. Manutenção preventiva e corretiva para abatedores de temperatura MultiFresh, EasyFresh, ultracongeladores. Peças originais, técnicos certificados, atendimento 24h."
        />
        <meta
          name="keywords"
          content="assistência técnica irinox, manutenção irinox, abatedor temperatura irinox, multifresh manutenção, easyfresh assistência, ultracongelador irinox"
        />
        <link rel="canonical" href="https://wedocorp.com.br/assistencia-tecnica-irinox" />
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
              <Snowflake className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">Especialistas em Abatedores de Temperatura</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica Irinox
              <span className="block text-accent mt-2">MultiFresh, EasyFresh e Ultracongeladores</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada em abatedores de temperatura e ultracongeladores Irinox. 
              Técnicos certificados, peças originais e atendimento emergencial 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
              >
                <a href={`${WHATSAPP_URL}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
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
                <a href="tel:+5562993775711">
                  <Phone className="w-5 h-5 mr-2" />
                  (62) 99377-5711
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Clock className="w-5 h-5 text-accent" />
                <span>Atendimento em até 4h</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Shield className="w-5 h-5 text-accent" />
                <span>Peças Originais Irinox</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Zap className="w-5 h-5 text-accent" />
                <span>Diagnóstico Avançado</span>
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
              Equipamentos Irinox Atendidos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manutenção especializada para toda linha de abatedores de temperatura e ultracongeladores Irinox.
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
                    <ThermometerSnowflake className="w-6 h-6 text-accent flex-shrink-0" />
                    {equip.titulo}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6">
                    <p className="text-muted-foreground">{equip.conteudo.descricao}</p>

                    {/* Modelos */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Modelos Atendidos:</h4>
                      <div className="grid md:grid-cols-3 gap-3">
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
                      <h4 className="font-semibold text-foreground mb-3">Tecnologias:</h4>
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
                      <h4 className="font-semibold text-foreground mb-3">Peças Originais em Estoque:</h4>
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
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Diagnóstico preciso e soluções definitivas para os principais problemas em equipamentos Irinox.
            </p>
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
              Contratos de Manutenção PCM para Irinox
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Planos personalizados para manter seus abatedores Irinox sempre em perfeito funcionamento.
            </p>
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
                    <a href={LINKTREE_URL} target="_blank" rel="noopener noreferrer">
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
              Perguntas Frequentes - Irinox
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
              Precisa de Assistência Técnica para seu Irinox?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Entre em contato agora e receba atendimento especializado para abatedores de temperatura e ultracongeladores.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <a href={`${WHATSAPP_URL}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
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
                <a href={LINKTREE_URL} target="_blank" rel="noopener noreferrer">
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
