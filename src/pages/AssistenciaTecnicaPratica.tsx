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
  ThermometerSnowflake,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5562993775711";

const equipamentos = [
  {
    id: "forst",
    titulo: "Fornos Combinados FORST - Combi Ovens Prática",
    conteudo: {
      descricao: "Os Fornos Combinados FORST são a linha principal da Prática, oferecendo tecnologia de vapor, ar quente e combinado para cocção profissional com máxima eficiência e versatilidade.",
      modelos: [
        { nome: "FORST 6 GN's", specs: "Compacto • Elétrico/Gás • Restaurantes pequenos" },
        { nome: "FORST 10 GN's", specs: "Médio • Elétrico/Gás • Restaurantes e hotéis" },
        { nome: "FORST 20 GN's", specs: "Grande • Elétrico/Gás • Produção industrial" },
        { nome: "FORST Advanced", specs: "Touchscreen • Receitas programáveis • HACCP" },
      ],
      tecnologias: [
        "3 modos de cocção: Vapor, Ar Quente, Combinado",
        "Injeção direta de vapor (boiler integrado)",
        "Painel digital/touchscreen programável",
        "Sonda núcleo multipontos",
        "Sistema de limpeza automática",
        "Controle de umidade preciso",
        "Registro HACCP automático",
        "Receitas programáveis (até 99 programas)",
      ],
      servicos: [
        "Manutenção preventiva trimestral",
        "Limpeza e descalcificação do boiler",
        "Calibração de sondas e sensores",
        "Reparo sistema de vapor",
        "Substituição de resistências",
        "Troca de válvulas solenoides",
        "Reparo/troca de painel eletrônico",
        "Manutenção motor turbina",
        "Troca de vedações de porta",
      ],
      pecas: [
        "Resistências de aquecimento",
        "Sondas de temperatura núcleo",
        "Válvulas solenoides vapor/água",
        "Bombas boiler",
        "Turbinas/motores ventilação",
        "Placas eletrônicas",
        "Vedações de porta (silicone)",
        "Sensores de nível",
        "Controladores de temperatura",
      ],
    },
  },
  {
    id: "prcop",
    titulo: "Lavadoras PRCOP - Copeiras Profissionais",
    conteudo: {
      descricao: "As Lavadoras PRCOP são as copeiras profissionais mais vendidas no Brasil, com ciclos rápidos (55 a 90 segundos) e baixíssimo consumo de água (2,4 litros/ciclo).",
      modelos: [
        { nome: "PRCOP 404", specs: "9 pratos/ciclo • Compacta • Ideal para bares e cafeterias" },
        { nome: "PRCOP 504", specs: "18 pratos/ciclo • Mais Vendida • Restaurantes e hotéis" },
        { nome: "PRCOP 604", specs: "22 pratos/ciclo • Alta Produção • Hospitais e catering" },
        { nome: "PRCOP 704", specs: "30+ pratos/ciclo • Industrial • Grande produção" },
      ],
      tecnologias: [
        "Display LED digital temperatura e ciclos",
        "Sistema booster (aquecimento rápido 85°C enxágue)",
        "Dosadora detergente/abrilhantador automática",
        "Filtro autolimpante cilíndrico",
        "Construção inox 304",
        "Consumo ultra-baixo: 2,4 litros/ciclo",
      ],
      servicos: [
        "Manutenção preventiva mensal/trimestral",
        "Limpeza técnica profunda (remoção calcário)",
        "Calibração temperatura booster",
        "Reparo/substituição bomba lavagem",
        "Troca resistências (lavagem/booster)",
        "Substituição eletroválvulas",
        "Reparo sistema dosador químico",
        "Análise qualidade água (TDS, dureza)",
      ],
      pecas: [
        "Resistências lavagem e booster",
        "Bombas lavagem (motores)",
        "Eletroválvulas entrada água",
        "Braços aspersão",
        "Filtros cilíndricos",
        "Bombas dosadoras químicas",
        "Placas eletrônicas",
      ],
    },
  },
  {
    id: "ultracongeladores",
    titulo: "Ultracongeladores Prática - Abatimento de Temperatura",
    conteudo: {
      descricao: "Os Ultracongeladores Prática são abatedores rápidos de temperatura para conservação, resfriamento e congelamento profissional com registro HACCP automático.",
      modelos: [
        { nome: "5 Bandejas", specs: "Compacto • Restaurantes menores" },
        { nome: "10 Bandejas", specs: "Padrão • Cozinhas médias" },
        { nome: "20 Bandejas", specs: "Industrial • Grande produção" },
      ],
      tecnologias: [
        "Resfriamento: +90°C até +3°C",
        "Ultracongelamento: +90°C até -18°C",
        "Conservação programada",
        "Descongelamento controlado",
        "Painel touchscreen digital",
        "Registro HACCP automático",
      ],
      servicos: [
        "Manutenção sistema frigorífico",
        "Calibração sondas temperatura",
        "Carga gás refrigerante",
        "Troca compressor",
        "Limpeza evaporador/condensador",
        "Reparo painel touchscreen",
        "Configuração ciclos personalizados",
      ],
      pecas: [
        "Compressores",
        "Sondas temperatura",
        "Válvulas expansão",
        "Evaporadores",
        "Placas eletrônicas",
      ],
    },
  },
  {
    id: "speed-oven",
    titulo: "Fornos Speed Oven - Micro-ondas + Convecção",
    conteudo: {
      descricao: "Os Speed Oven Prática combinam micro-ondas profissional + convecção forçada para cocção ultra-rápida mantendo qualidade. Cocção até 10x mais rápida.",
      modelos: [
        { nome: "Speed Oven Compacto", specs: "Cafeterias e conveniências" },
        { nome: "Speed Oven Profissional", specs: "Fast food e padarias express" },
      ],
      tecnologias: [
        "Sistema combinado micro + ar quente",
        "Cocção até 10x mais rápida",
        "Painel digital programável",
        "Múltiplos programas pré-set",
        "Construção robusta inox",
      ],
      servicos: [
        "Manutenção magnetron micro-ondas",
        "Calibração potência",
        "Teste isolamento RF",
        "Troca turbina convecção",
        "Reparo painel eletrônico",
        "Substituição porta (vedação)",
        "Certificação segurança radiação",
      ],
      pecas: [
        "Magnetron",
        "Turbinas convecção",
        "Placas eletrônicas",
        "Vedações porta",
        "Componentes RF",
      ],
    },
  },
];

const problemasComuns = [
  {
    titulo: "Louças Saem Sujas/Manchadas",
    sintomas: [
      "Resíduos de alimentos",
      "Manchas brancas (calcário)",
      "Gordura não sai",
    ],
    causas: [
      "Braços aspersão entupidos",
      "Pressão água insuficiente (< 2 bar)",
      "Temperatura baixa (< 60°C)",
      "Dosagem detergente inadequada",
    ],
    solucoes: [
      "Desmontagem e limpeza braços aspersão",
      "Teste pressão entrada água",
      "Calibração temperatura lavagem/booster",
      "Ajuste bomba dosadora química",
    ],
  },
  {
    titulo: "Não Aquece Água",
    sintomas: [
      "Louças saem frias",
      "Ciclo completa mas sem aquecimento",
      "Display não mostra temperatura",
    ],
    causas: [
      "Resistência lavagem/booster queimada",
      "Sonda temperatura defeituosa",
      "Contator resistência com falha",
      "Placa eletrônica",
    ],
    solucoes: [
      "Teste resistências (multímetro)",
      "Verificação sondas temperatura (NTC)",
      "Teste contatores (voltagem/continuidade)",
      "Substituição componentes defeituosos",
    ],
  },
  {
    titulo: "Não Enche Água",
    sintomas: [
      "Máquina não inicia ciclo",
      "Alarme falta água",
      "Enche muito devagar",
    ],
    causas: [
      "Eletroválvula entrada defeituosa",
      "Pressostato nível água",
      "Filtro entrada entupido",
      "Pressão rede insuficiente",
    ],
    solucoes: [
      "Teste eletroválvula (voltagem/solenoide)",
      "Verificação pressostato",
      "Limpeza filtro tela entrada",
      "Medição pressão rede (mínimo 2 bar)",
    ],
  },
];

const diferenciais = [
  {
    icon: Droplets,
    titulo: "Especialistas PRCOP",
    descricao: "Técnicos treinados nas linhas de lavadoras mais vendidas do Brasil.",
  },
  {
    icon: ThermometerSnowflake,
    titulo: "Refrigeração Profissional",
    descricao: "Expertise em ultracongeladores e sistemas de abatimento de temperatura.",
  },
  {
    icon: Shield,
    titulo: "Peças Originais Prática",
    descricao: "Estoque completo de componentes originais para reposição imediata.",
  },
  {
    icon: FileCheck,
    titulo: "Documentação Completa",
    descricao: "Relatórios técnicos para auditorias ANVISA e certificações.",
  },
];

const planosPCM = [
  {
    nome: "Essencial",
    beneficios: [
      "4 manutenções preventivas/ano",
      "Limpeza técnica profunda mensal",
      "Desconto 20% peças",
      "Atendimento em horário comercial",
    ],
  },
  {
    nome: "Profissional",
    destaque: true,
    beneficios: [
      "6 manutenções preventivas/ano",
      "Descalcificação trimestral",
      "Desconto 30% peças",
      "2 corretivas inclusas/ano",
      "Atendimento prioritário",
    ],
  },
  {
    nome: "Corporativo",
    beneficios: [
      "Manutenção mensal personalizada",
      "Análise qualidade água inclusa",
      "Desconto 40% peças",
      "Mão de obra corretiva inclusa",
      "Atendimento express",
    ],
  },
];

const faqItems = [
  {
    pergunta: "Qual lavadora PRCOP escolher para meu restaurante?",
    resposta: "PRCOP 504 é a mais indicada para restaurantes padrão (até 100 refeições/dia). Para bares/cafeterias menores: PRCOP 404. Para grande produção (hospitais, catering 200+ refeições): PRCOP 604.",
  },
  {
    pergunta: "Consumo de água PRCOP é realmente baixo?",
    resposta: "Sim, 2,4 litros por ciclo (PRCOP 504). Lavagem manual gasta 40-50L para mesma quantidade de louças. Economia de até 95% no consumo de água certificada.",
  },
  {
    pergunta: "Qual frequência de limpeza técnica lavadora PRCOP?",
    resposta: "Mensal obrigatório para remoção de calcário e resíduos. Uso intensivo (>80 ciclos/dia) recomendamos quinzenal. Água dura exige descalcificação semanal.",
  },
  {
    pergunta: "PRCOP não seca louças. É normal?",
    resposta: "Louças devem sair úmidas (não encharcadas) se temperatura booster atingir 85°C. Secagem completa depende de deixar louças no cesto após ciclo (calor residual evapora). Não é defeito.",
  },
  {
    pergunta: "Vocês instalam sistema descalcificador para PRCOP?",
    resposta: "Sim, instalamos sistemas de descalcificação por resina ou osmose reversa. Fundamental para durabilidade de resistências e braços aspersão em águas com dureza > 50ppm CaCO3.",
  },
];

export default function AssistenciaTecnicaPratica() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Preciso de assistência técnica para meu equipamento Prática."
  );

  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Prática | Manutenção Lavadora PRCOP Ultracongelador | WeDo</title>
        <meta
          name="description"
          content="Assistência técnica especializada Prática Brasil. Manutenção preventiva e corretiva para lavadoras louças PRCOP, ultracongeladores, fornos speed oven. Peças originais, técnicos certificados."
        />
        <meta
          name="keywords"
          content="assistência técnica prática, manutenção prática, lavadora louças prcop, prcop 504 manutenção, ultracongelador prática"
        />
        <link rel="canonical" href="https://wedocorp.com.br/assistencia-tecnica-pratica" />
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
              <span className="text-accent font-medium">Especialistas em Lavadoras PRCOP</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Assistência Técnica Prática
              <span className="block text-accent mt-2">PRCOP, Ultracongeladores e Speed Oven</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Manutenção especializada nas lavadoras de louças mais vendidas do Brasil. 
              Técnicos certificados, peças originais e atendimento emergencial.
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
                <span>Peças Originais Prática</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Zap className="w-5 h-5 text-accent" />
                <span>Diagnóstico Preciso</span>
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
              Equipamentos Prática Atendidos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manutenção especializada para toda linha de lavadoras, ultracongeladores e fornos Prática.
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
                    {equip.id === "prcop" ? (
                      <Droplets className="w-6 h-6 text-accent flex-shrink-0" />
                    ) : equip.id === "ultracongeladores" ? (
                      <Snowflake className="w-6 h-6 text-accent flex-shrink-0" />
                    ) : (
                      <Zap className="w-6 h-6 text-accent flex-shrink-0" />
                    )}
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
              Diagnóstico preciso e soluções definitivas para os principais problemas em equipamentos Prática.
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
              Contratos de Manutenção PCM para Prática
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Planos personalizados para manter seus equipamentos Prática sempre em perfeito funcionamento.
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
              Perguntas Frequentes - Prática
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
              Precisa de Assistência Técnica para seu Equipamento Prática?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Entre em contato agora e receba atendimento especializado para lavadoras PRCOP, ultracongeladores e fornos.
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
