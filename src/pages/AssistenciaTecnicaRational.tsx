import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Award, 
  CheckCircle, 
  Shield, 
  Clock, 
  Wrench, 
  Settings, 
  Phone, 
  Flame,
  Thermometer,
  Droplets,
  Wind,
  Zap,
  FileText,
  Users,
  MapPin,
  ChevronDown
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCTASettings } from "@/hooks/useSiteSettings";


// Trust Bar Items
const trustItems = [
  "Assistência Técnica Homologada Rational",
  "Peças Originais Rational",
  "Técnicos Treinados pela Fábrica Rational",
  "Contratos PCM Personalizados",
  "Estoque Permanente de Peças",
  "Conectividade ConnectedCooking",
  "Diagnóstico Remoto Avançado",
  "Diagnóstico Remoto Avançado",
];

// Equipamentos com detalhes técnicos completos
const equipamentos = [
  {
    id: "icombi-pro",
    titulo: "iCombi Pro",
    subtitulo: "Forno Combinado Inteligente Rational",
    descricao: "O iCombi Pro é o forno combinado mais avançado da Rational, com tecnologia ConnectedCooking, sistema inteligente de controle climático e limpeza automática Efficient CareControl.",
    modelos: [
      "iCombi Pro 6-2/3 GN (XS) - Compacto",
      "iCombi Pro 6-1/1 GN - Padrão 6 níveis",
      "iCombi Pro 10-1/1 GN - Médio porte 10 níveis",
      "iCombi Pro 10-2/1 GN - Alta capacidade 10 níveis",
      "iCombi Pro 20-1/1 GN - Industrial 20 níveis",
      "iCombi Pro 20-2/1 GN - Grande produção 20 níveis",
      "Versões: Elétricas e a Gás",
    ],
    tecnologias: [
      "ICC (Intelligent Cooking Control): Sensores climáticos de umidade/temperatura",
      "ConnectedCooking: Gestão remota via nuvem, HACCP digital, upload/download de receitas",
      "Efficient CareControl: Limpeza automática com detecção de sujidade",
      "iCookingControl: Controle automático de cocção",
    ],
    servicos: [
      "Manutenção preventiva trimestral/semestral/anual",
      "Calibração de sensores de temperatura, umidade e pressão",
      "Limpeza técnica do sistema de água e vapor",
      "Atualização de software via ConnectedCooking",
      "Substituição de peças originais (vedações, sensores, válvulas)",
      "Diagnóstico remoto via rede",
      "Configuração HACCP e conectividade",
      "Treinamento operacional para equipe",
    ],
    problemas: [
      "Erro de aquecimento (SSR queimado, sensor B1/B2/B4 defeituoso)",
      "Falha de umidade (bloqueio mangueiras, sensor P1)",
      "Problemas de limpeza automática (bomba care, sensor fluxo)",
      "Falha ConnectedCooking (configuração rede, recovery SD card)",
      "Erro de ignição (modelos a gás)",
      "Motor turbina (Serviço 34)",
      "Vedação de porta comprometida",
    ],
    pecas: [
      "Vedações de porta todas as medidas",
      "Sensores B1, B2, B4, P1",
      "Válvulas solenoides água/vapor",
      "SSR (relés estado sólido)",
      "Filtros de ar",
      "Kit limpeza (pastilhas Care/Detergente)",
      "Placas eletrônicas PCB",
    ],
  },
  {
    id: "icombi-classic",
    titulo: "iCombi Classic",
    subtitulo: "Eficiência e Confiabilidade Rational",
    descricao: "O iCombi Classic oferece o melhor custo-benefício da linha Rational, com operação manual/semi-automática e sistema de limpeza CleanJet integrado.",
    modelos: [
      "iCombi Classic 6-2/3 GN (XS)",
      "iCombi Classic 6-1/1 GN",
      "iCombi Classic 10-1/1 GN",
      "iCombi Classic 10-2/1 GN",
      "iCombi Classic 20-1/1 GN",
      "iCombi Classic 20-2/1 GN",
      "Versões elétricas e a gás",
    ],
    tecnologias: [
      "Controle manual com timer digital",
      "Sistema CleanJet de limpeza automática",
      "Construção robusta IPX5",
      "Mesma qualidade de cocção dos modelos Pro",
      "Operação simplificada",
    ],
    servicos: [
      "Manutenção preventiva mensal/trimestral",
      "Conversão de gás (LP/GN) quando aplicável",
      "Retrofit de componentes",
      "Calibração manual de sensores",
      "Limpeza química profunda",
      "Substituição de elementos aquecedores",
      "Reparo sistema hidráulico",
    ],
    problemas: [],
    pecas: [],
  },
  {
    id: "scc",
    titulo: "SelfCookingCenter SCC",
    subtitulo: "Linha Clássica Rational",
    descricao: "O SelfCookingCenter (SCC) é a linha sofisticada tradicional da Rational, com painel touchscreen TFT, sistema de autoteste integrado e função Show/Demo.",
    modelos: [
      "SCC XS (6 x 2/3 GN) - Ultra compacto 62 kg",
      "SCC 60 / SCC 61 / SCC 62",
      "SCC 101 / SCC 102 (99 kg versão elétrica)",
      "SCC 201 / SCC 202",
      "CombiMaster Plus (CM_P) 61, 101, 201, 202",
    ],
    tecnologias: [
      "Autoteste obrigatório: Calibra sensores, determina ponto ebulição",
      "Controle automático vapor/sujidade",
      "Painel TFT touchscreen",
      "Download HACCP via USB",
      "Função Show/Demo para treinamento",
      "CleanJet+Care limpeza automática",
    ],
    servicos: [
      "Diagnóstico códigos de erro específicos SCC (Serviço 10-120)",
      "Reparo/substituição painel TFT touchscreen",
      "Calibração altitude e ponto de ebulição",
      "Atualização firmware via USB",
      "Recuperação dados HACCP",
      "Retrofit Ethernet (kit conectividade)",
      "Manutenção bomba dosadora química",
      "Reparo sistema CleanJet",
    ],
    problemas: [
      "Serviço 10, 11, 12: Problemas sensor temperatura",
      "Serviço 17, 19, 20: Falhas aquecimento",
      "Serviço 25, 26, 27: Erros vapor/água",
      "Serviço 32, 33, 34: Motor/turbina",
      "Serviço 40, 41, 42: Sistema limpeza",
      "Serviço 52, 55, 56: Comunicação/eletrônica",
      "Serviço 60, 63: Gás (modelos a gás)",
      "Serviço 110, 120: Calibração/configuração",
    ],
    pecas: [
      "Painel TFT touchscreen completo",
      "Kit retrofit Ethernet",
      "Bomba dosadora CleanJet",
      "Sensores temperatura/pressão",
      "Válvula vapor proporcional",
      "Filtros ar específicos SCC",
      "Placas controladoras",
    ],
  },
  {
    id: "ivario",
    titulo: "iVario Pro",
    subtitulo: "Sistema Multifuncional de Cocção Rational",
    descricao: "O iVario Pro é o sistema de cocção multifuncional inteligente que substitui panelas basculantes, frigideiras, caldeirões e marmitas com tecnologia de aquecimento iVarioBoost.",
    modelos: [
      "iVario 2-XS: 2 x 17 litros | 117 kg",
      "iVario Pro 2-S: 2 x 25 litros | 134 kg",
      "iVario Pro L: 100 litros | 216 kg",
      "iVario Pro XL: 150 litros | 256 kg",
    ],
    tecnologias: [
      "iVarioBoost: Aquecimento por contato direto, resposta ultra-rápida",
      "Controle temperatura ultra-preciso: ±1°C",
      "Elevação automática cestos",
      "Basculamento automático para escoamento",
      "Autolavagem de cuba integrada",
      "Sensores nível/temperatura inteligentes",
      "ConnectedCooking (Ethernet/WLAN)",
      "HACCP digital rastreável",
    ],
    servicos: [
      "Manutenção preventiva semestral (Pro L/XL)",
      "Calibração sensores temperatura e pressão",
      "Revisão sistema basculamento",
      "Manutenção motor elevação cestos",
      "Limpeza circuito hidráulico autolavagem",
      "Configuração ConnectedCooking",
      "Atualização software remota",
      "Treinamento operacional avançado",
      "Diagnóstico erro S_1_412_05 (motor descida)",
      "Reparo sensor pressão",
      "Substituição potenciômetros",
    ],
    problemas: [
      "Motor elevação não desce (S_1_412_05)",
      "Falha sensor pressão",
      "Erro leitura potenciômetro",
      "Umidade chassi (corrosão/curto)",
      "Erro placa I/O A10",
      "Basculamento travado",
      "Autolavagem não funciona",
      "Erro calibração temperatura",
    ],
    pecas: [
      "Sensores temperatura/pressão",
      "Motor basculamento",
      "Motor elevação cestos",
      "Potenciômetros posição",
      "Placa I/O A10",
      "Válvulas água/vapor",
      "Kit vedação cuba",
    ],
  },
  {
    id: "ultravent",
    titulo: "UltraVent Plus",
    subtitulo: "Sistema Exaustão e Filtragem Rational",
    descricao: "O UltraVent Plus é o sistema de exaustão e filtragem integrado aos equipamentos Rational, eliminando necessidade de coifa externa.",
    modelos: [
      "Compatível com iCombi Pro XS",
      "Compatível com iCombi Classic XS",
      "Compatível com SelfCookingCenter XS",
      "Compatível com CombiMaster Plus",
    ],
    tecnologias: [
      "Capacidade extração: até 560 m³/h",
      "Alimentação: 1NAC 230V",
      "Potência: 140-170W",
      "Peso: 30-35 kg",
      "Filtros HEPA integrados",
    ],
    servicos: [
      "Limpeza periódica filtros",
      "Substituição filtros HEPA",
      "Verificação sensores bloqueio",
      "Teste extração vazão",
      "Limpeza dutos internos",
      "Calibração sensores",
      "Manutenção motor exaustor",
    ],
    problemas: [],
    pecas: [],
  },
];

// Diferenciais
const diferenciais = [
  {
    icon: Award,
    titulo: "Assistência Técnica Homologada Rational",
    descricao: "Somos homologados pela Rational como assistência técnica autorizada, com técnicos certificados pela fábrica através de treinamentos intensivos presenciais e online.",
    items: [
      "Certificação técnica Rational válida",
      "Treinamentos anuais obrigatórios",
      "Acesso portal técnico Rational Toolbox 2.0",
      "Suporte direto engenharia Rational Brasil",
      "+1.200 equipamentos Rational atendidos",
    ],
  },
  {
    icon: Wrench,
    titulo: "Ferramental e Diagnóstico de Última Geração",
    descricao: "Nossa estrutura operacional é dimensionada para atendimento técnico de altíssimo nível.",
    items: [
      "Software diagnóstico Rational original",
      "Laptop configuração ConnectedCooking",
      "Multímetros precisão industrial Fluke",
      "Câmera termográfica FLIR",
      "Analisador combustão Testo (modelos gás)",
      "Medidor qualidade água TDS",
      "Ferramental especializado completo",
      "Veículos equipados com estoque móvel",
      "EPIs certificados (NR6, NR10, NR35)",
    ],
  },
  {
    icon: Settings,
    titulo: "Gestão Remota ConnectedCooking",
    descricao: "Somos especializados em configuração e suporte ConnectedCooking, a plataforma de gestão remota Rational.",
    items: [
      "Diagnóstico remoto em tempo real",
      "Atualização software automática OTA",
      "Download/upload receitas padronizadas",
      "HACCP digital automatizado",
      "Alertas preventivos",
    ],
  },
  {
    icon: FileText,
    titulo: "Documentação Técnica Auditável",
    descricao: "Toda manutenção WeDo gera documentação técnica completa rastreável.",
    items: [
      "Ordem serviço digital (CIGAM/Auvo)",
      "Checklist manutenção fotografado",
      "Relatório técnico detalhado",
      "Registro HACCP preservado",
      "ART quando aplicável",
      "Laudo elétrico NR10",
      "Certificado calibração rastreável",
      "Histórico completo equipamento",
    ],
  },
  {
    icon: Clock,
    titulo: "Atendimento Ágil",
    descricao: "Resposta rápida para equipamentos Rational.",
    items: [
      "Clientes contrato PCM: Atendimento prioritário",
      "Diagnóstico remoto via ConnectedCooking",
      "Equipe técnica especializada",
      "Clientes avulsos: agendamento programado",
    ],
  },
];

// Problemas comuns e soluções
const problemasComuns = [
  {
    titulo: "Erro de Aquecimento",
    subtitulo: "Equipamento não aquece",
    sintomas: [
      "Display exibe erro aquecimento",
      "Temperatura não atinge setpoint",
      "Códigos: Serviço 17, 19, 20",
    ],
    causas: [
      "SSR (relé estado sólido) queimado",
      "Sensor temperatura (B1, B2) defeituoso",
      "Resistências elétricas rompidas",
      "Falha placa potência",
      "Tensão elétrica instável",
    ],
    solucao: [
      "Diagnóstico multímetro + termografia",
      "Teste isolamento elétrico",
      "Substituição SSR/sensores/resistências",
      "Calibração pós-reparo",
      "Validação curva aquecimento",
    ],
  },
  {
    titulo: "Problema de Umidade",
    subtitulo: "Vapor excessivo ou insuficiente",
    sintomas: [
      "Excesso vapor (alimentos encharcados)",
      "Falta vapor (alimentos ressecados)",
      "Códigos: Serviço 25, 26, 27",
    ],
    causas: [
      "Sensor umidade P1 descalibrado/obstruído",
      "Mangueiras vapor bloqueadas por calcário",
      "Válvula vapor defeituosa",
      "Qualidade água inadequada",
      "Dreno entupido",
    ],
    solucao: [
      "Análise qualidade água",
      "Descalcificação sistema hidráulico",
      "Calibração/substituição sensor P1",
      "Limpeza/substituição mangueiras",
      "Teste válvulas vapor",
      "Instalação sistema tratamento água (se necessário)",
    ],
  },
  {
    titulo: "Falha Limpeza Automática",
    subtitulo: "CleanJet não funciona",
    sintomas: [
      "Limpeza não inicia",
      "Erro limpeza incompleta",
      "Falta dosagem química",
      "Códigos: Serviço 40, 41, 42",
    ],
    causas: [
      "Falta pastilhas Care/Detergente",
      "Bomba dosadora defeituosa",
      "Sensor fluxo bloqueado",
      "Braços aspersão entupidos",
      "Filtro água obstruído",
    ],
    solucao: [
      "Verificação estoque químicos",
      "Teste/substituição bomba dosadora",
      "Limpeza sensor fluxo",
      "Desmontagem e limpeza braços",
      "Substituição filtros",
      "Ciclo limpeza teste",
    ],
  },
  {
    titulo: "Erro ConnectedCooking",
    subtitulo: "Equipamento não conecta",
    sintomas: [
      "Falha registro portal",
      "Desconexões frequentes",
      "Impossível atualizar software",
      "HACCP não sincroniza",
    ],
    causas: [
      "Configuração rede incorreta",
      "Portas firewall bloqueadas (443, 8883)",
      "Data/hora incorretas equipamento",
      "Certificado digital expirado",
      "Falha SD card",
    ],
    solucao: [
      "Diagnóstico infraestrutura rede",
      "Configuração DHCP/IP fixo",
      "Liberação portas firewall",
      "Sincronização data/hora",
      "Recovery/substituição SD card",
      "Teste conectividade completo",
    ],
  },
  {
    titulo: "Falha Ignição Gás",
    subtitulo: "Queimador não acende",
    sintomas: [
      "Equipamento gás não igniza",
      "Ignição intermitente",
      "Chama irregular",
      "Códigos: Serviço 60, 63",
    ],
    causas: [
      "Eletrodo ignição posicionado errado",
      "Válvula gás defeituosa",
      "Pressão gás inadequada",
      "CO/CO2 fora do nominal",
      "Queimador sujo/obstruído",
    ],
    solucao: [
      "Análise combustão completa (obrigatória)",
      "Ajuste posição eletrodo",
      "Teste/substituição válvula gás",
      "Verificação pressão",
      "Limpeza/regulagem queimador",
    ],
  },
  {
    titulo: "Motor Turbina",
    subtitulo: "Erro ventilação interna",
    sintomas: [
      "Ruído anormal motor",
      "Ventilação fraca",
      "Código: Serviço 34",
      "Aquecimento irregular alimentos",
    ],
    causas: [
      "Motor turbina defeituoso",
      "Rolamento travado/desgastado",
      "Erro comunicação motor",
      "Hélice turbina danificada",
    ],
    solucao: [
      "Diagnóstico elétrico motor",
      "Teste rotação e vibração",
      "Substituição motor turbina",
      "Calibração velocidade",
      "Teste distribuição ar",
    ],
  },
];

// Planos PCM
const planosPCM = [
  {
    nome: "ESSENCIAL",
    ideal: "1 a 2 equipamentos Rational • Operação padrão",
    beneficios: [
      "4 manutenções preventivas/ano (trimestral)",
      "Atendimento em horário comercial",
      "Desconto 20% em peças",
      "Desconto 15% mão de obra corretiva",
      "Relatório técnico digital",
      "HACCP básico",
    ],
    destaque: false,
  },
  {
    nome: "PROFISSIONAL",
    ideal: "3 a 5 equipamentos • Operação intensiva",
    beneficios: [
      "6 manutenções preventivas/ano (bimestral)",
      "Atendimento prioritário",
      "Desconto 30% em peças",
      "Desconto 25% mão de obra corretiva",
      "2 corretivas inclusas/ano",
      "Calibração anual sensores",
      "Gestão digital ARGUS",
      "HACCP completo + relatórios gerenciais",
      "Treinamento semestral equipe",
    ],
    destaque: true,
  },
  {
    nome: "CORPORATIVO",
    ideal: "6+ equipamentos • Múltiplas unidades • Rede food service",
    beneficios: [
      "Manutenções preventivas customizadas (até mensal)",
      "Atendimento express prioritário",
      "Desconto 40% em peças",
      "Mão de obra corretiva inclusa (ilimitada)",
      "Calibração semestral todos equipamentos",
      "ConnectedCooking configurado e gerenciado",
      "Gestão digital ARGUS completa",
      "HACCP + Business Intelligence",
      "Consultor técnico dedicado",
      "Treinamento trimestral equipes",
      "Spare parts estratégico in-loco",
      "Relatórios C-level mensais",
    ],
    destaque: false,
  },
];

// FAQ
const faqItems = [
  {
    pergunta: "A WeDo é assistência técnica autorizada Rational?",
    resposta: "Sim, somos assistência técnica homologada pela Rational Brasil, com técnicos certificados através de treinamentos presenciais e online pela fábrica.",
  },
  {
    pergunta: "Qual a garantia dos serviços da WeDo?",
    resposta: "Todos os nossos serviços possuem garantia de 90 dias.",
  },
  {
    pergunta: "Quanto tempo demora um atendimento?",
    resposta: "Para clientes com contrato PCM em Goiás e Distrito Federal, o atendimento é prioritário. Para atendimentos avulsos, fazemos agendamento programado.",
  },
  {
    pergunta: "Qual a frequência recomendada de manutenção preventiva em equipamentos Rational?",
    resposta: "Para equipamentos iCombi Pro e Classic elétricos, recomendamos manutenção trimestral. Para modelos a gás, semestral. Para iVario Pro L e XL, semestral. O ideal é avaliar intensidade de uso - cozinhas com operação contínua podem necessitar manutenção mensal.",
  },
  {
    pergunta: "Meu equipamento Rational parou de funcionar. O que fazer?",
    resposta: "Entre em contato imediatamente pelo nosso canal de atendimento. Nossa equipe fará diagnóstico remoto (quando possível via ConnectedCooking) e agendará visita técnica.",
  },
  {
    pergunta: "Vocês instalam e fazem startup de equipamentos Rational novos?",
    resposta: "Sim, realizamos instalação completa seguindo normas Rational e legislação brasileira (NR10, NR12, RDC 216). O serviço inclui análise prévia infraestrutura, instalação física, conexões, startup, calibração, configuração ConnectedCooking, treinamento equipe e documentação técnica + ART.",
  },
  {
    pergunta: "É possível fazer diagnóstico remoto dos equipamentos Rational?",
    resposta: "Sim, para equipamentos conectados ao ConnectedCooking podemos fazer diagnóstico remoto via acesso portal Rational, visualizando códigos de erro, histórico operacional e dados HACCP. Em muitos casos, conseguimos orientar soluções simples remotamente.",
  },
  {
    pergunta: "Vocês fornecem peças originais Rational?",
    resposta: "Sim, fornecemos peças originais Rational com nota fiscal. Recomendamos fortemente instalação por técnico certificado para garantir funcionamento correto.",
  },
  {
    pergunta: "É necessário sistema de tratamento de água para equipamentos Rational?",
    resposta: "Depende da qualidade da água local. A Rational recomenda dureza máxima de 3°dH. Águas mais duras requerem descalcificador ou sistema osmose reversa. Fazemos análise gratuita da água na instalação.",
  },
  {
    pergunta: "Vocês atendem em quais regiões?",
    resposta: "Atendemos diretamente Goiás, Distrito Federal e principais cidades da região Centro-Oeste. Para outros estados, podemos acionar nossa rede de parceiros técnicos Rational ou deslocar equipe mediante viabilidade técnica/comercial.",
  },
  {
    pergunta: "O que está incluso no contrato PCM?",
    resposta: "Depende do plano contratado. Geralmente inclui: manutenções preventivas programadas, atendimento prioritário, descontos em peças e serviços, gestão digital, relatórios, treinamentos. Veja detalhes na seção Contratos PCM.",
  },
];

export default function AssistenciaTecnicaRational() {
  const { ctaUrl, ctaText } = useCTASettings();
  return (
    <Layout>
      <Helmet>
        <title>Assistência Técnica Rational | Parceiro Autorizado | Goiás e DF | WeDo</title>
        <meta name="description" content="Assistência técnica autorizada Rational em Goiás e DF. Manutenção iCombi Pro, iCombi Classic, SelfCookingCenter, iVario Pro. Técnicos certificados pela fábrica, peças originais, atendimento 24/7." />
        <link rel="canonical" href="https://wedocorp.com/assistencia-tecnica-rational" />
        <meta name="keywords" content="assistência técnica rational, manutenção rational, manutenção icombi pro, selfcookingcenter scc, ivario pro manutenção, rational brasil, peças rational originais, conserto forno rational, técnico rational certificado" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground section-padding">
        <div className="container-wedo">
          <div className="max-w-4xl">
            <nav className="text-sm text-secondary-foreground/60 mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span>Assistência Técnica Rational</span>
            </nav>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                Parceiro Autorizado
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
                Peças Originais
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium">
                <Clock className="w-4 h-4" />
                Atendimento 24h
              </span>
            </div>

            <h1 className="title-hero text-primary-foreground mb-6">
              Assistência Técnica Autorizada Rational
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-3xl mb-8">
              A WeDo é assistência técnica especializada e autorizada em equipamentos Rational no Brasil, oferecendo manutenção preventiva e corretiva, instalação, calibração, fornecimento de peças originais e contratos de manutenção (PCM) para toda linha Rational: <strong>iCombi Pro, iCombi Classic, SelfCookingCenter (SCC), CombiMaster Plus, iVario Pro</strong> e <strong>UltraVent Plus</strong>.
            </p>
            <p className="text-secondary-foreground/70 max-w-3xl mb-8">
              Atendemos cozinhas industriais, restaurantes, hotéis, hospitais, panificações, catering e indústrias em todo território nacional com equipe técnica treinada pela fábrica, ferramentas de diagnóstico avançado, estoque de peças originais Rational e atendimento emergencial 24/7.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wedo inline-flex items-center gap-2"
              >
                Solicitar Atendimento Urgente
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                to="/contratos-pcm"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-xl hover:bg-primary-foreground/10 transition-colors"
              >
                Contratar Manutenção Preventiva
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary py-6 overflow-hidden">
        <div className="container-wedo">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {trustItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-primary-foreground text-sm font-medium whitespace-nowrap">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipamentos Section */}
      <section className="section-padding">
        <div className="container-wedo">
          <div className="text-center mb-12">
            <h2 className="title-section mb-4">Equipamentos Rational que Atendemos</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Linha Completa de Cocção Profissional — Manutenção especializada em toda a linha de equipamentos Rational, com técnicos treinados diretamente pela fábrica.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {equipamentos.map((equip) => (
              <AccordionItem key={equip.id} value={equip.id} className="border rounded-xl px-6 bg-card">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Flame className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground">{equip.titulo}</h3>
                      <p className="text-muted-foreground text-sm">{equip.subtitulo}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6 pt-4 border-t">
                    <p className="text-muted-foreground">{equip.descricao}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Modelos */}
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Settings className="w-4 h-4 text-primary" />
                          Modelos Atendidos
                        </h4>
                        <ul className="space-y-1.5">
                          {equip.modelos.map((modelo, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {modelo}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tecnologias */}
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-primary" />
                          Tecnologias
                        </h4>
                        <ul className="space-y-1.5">
                          {equip.tecnologias.map((tec, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {tec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Serviços */}
                    <div className="bg-primary/5 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-primary" />
                        Serviços WeDo para {equip.titulo}
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {equip.servicos.map((serv, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{serv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Problemas e Peças */}
                    {(equip.problemas.length > 0 || equip.pecas.length > 0) && (
                      <div className="grid md:grid-cols-2 gap-6">
                        {equip.problemas.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Problemas comuns resolvidos:</h4>
                            <ul className="space-y-1.5">
                              {equip.problemas.map((prob, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-destructive mt-1">•</span>
                                  {prob}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {equip.pecas.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Peças originais em estoque:</h4>
                            <ul className="space-y-1.5">
                              {equip.pecas.map((peca, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  {peca}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wedo">
          <div className="text-center mb-12">
            <h2 className="title-section mb-4">Por Que Escolher a WeDo para Manutenção Rational?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Diferenciais técnicos e operacionais que garantem a máxima disponibilidade dos seus equipamentos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((dif, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <dif.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{dif.titulo}</h3>
                <p className="text-muted-foreground text-sm mb-4">{dif.descricao}</p>
                <ul className="space-y-2">
                  {dif.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problemas e Soluções */}
      <section className="section-padding">
        <div className="container-wedo">
          <div className="text-center mb-12">
            <h2 className="title-section mb-4">Problemas Frequentes em Equipamentos Rational</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Diagnóstico e soluções especializadas para os problemas mais comuns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemasComuns.map((problema, index) => (
              <div key={index} className="bg-card rounded-2xl border overflow-hidden">
                <div className="bg-destructive/10 p-4 border-b">
                  <h3 className="font-heading font-bold text-lg text-foreground">{problema.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{problema.subtitulo}</p>
                </div>
                <div className="p-4 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Sintomas:</h4>
                    <ul className="space-y-1">
                      {problema.sintomas.map((s, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                          <span className="text-destructive">•</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Causas comuns:</h4>
                    <ul className="space-y-1">
                      {problema.causas.slice(0, 3).map((c, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                          <span className="text-amber-500">•</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-3">
                    <h4 className="text-sm font-semibold text-primary mb-2">Solução WeDo:</h4>
                    <ul className="space-y-1">
                      {problema.solucao.slice(0, 4).map((s, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                          <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contratos PCM */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-wedo">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Contratos PCM Personalizados para Equipamentos Rational
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-3xl mx-auto">
              Proteja seu investimento em equipamentos Rational com nossos planos de manutenção preventiva e corretiva (PCM) desenhados para máxima disponibilidade operacional e previsibilidade financeira.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {planosPCM.map((plano, index) => (
              <div 
                key={index} 
                className={`rounded-2xl p-6 ${
                  plano.destaque 
                    ? 'bg-primary text-primary-foreground ring-4 ring-primary/50' 
                    : 'bg-card text-foreground'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Plano {plano.nome}</h3>
                  <p className={`text-sm ${plano.destaque ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {plano.ideal}
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plano.beneficios.map((ben, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        plano.destaque ? 'text-primary-foreground' : 'text-primary'
                      }`} />
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
                <div className={`rounded-lg p-3 text-center text-sm ${
                  plano.destaque ? 'bg-primary-foreground/20' : 'bg-muted'
                }`}>
                  <strong>Garantia de 90 dias em todos os serviços</strong>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Solicitar Proposta PCM Personalizada
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-wedo">
          <div className="text-center mb-12">
            <h2 className="title-section mb-4">Perguntas Frequentes sobre Manutenção Rational</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tire suas dúvidas sobre nossos serviços de assistência técnica
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border rounded-xl px-6 bg-card">
                  <AccordionTrigger className="hover:no-underline text-left py-5">
                    <span className="font-semibold text-foreground pr-4">{faq.pergunta}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground">
                    {faq.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-primary">
        <div className="container-wedo text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Precisa de Assistência Técnica Rational?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Entre em contato com nossa equipe especializada. Atendemos todo o estado de Goiás, Distrito Federal e região Centro-Oeste com atendimento prioritário para clientes PCM.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Acessar Atendimento
                <ArrowRight className="w-6 h-6" />
              </a>
              <Link
                to="/contratos-pcm"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-primary-foreground/30 text-primary-foreground font-bold text-lg rounded-xl hover:bg-primary-foreground/10 transition-colors"
              >
                Ver Contratos PCM
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Links Relacionados */}
      <section className="section-padding bg-muted/30">
        <div className="container-wedo">
          <h3 className="font-heading font-bold text-xl mb-6 text-center">Páginas Relacionadas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contratos-pcm" className="px-4 py-2 bg-card border rounded-lg text-sm hover:border-primary transition-colors">
              Contratos PCM
            </Link>
            <Link to="/cozinhas-profissionais" className="px-4 py-2 bg-card border rounded-lg text-sm hover:border-primary transition-colors">
              Cozinhas Profissionais
            </Link>
            <Link to="/manutencao-camaras-frias" className="px-4 py-2 bg-card border rounded-lg text-sm hover:border-primary transition-colors">
              Manutenção Câmaras Frias
            </Link>
            <Link to="/sobre" className="px-4 py-2 bg-card border rounded-lg text-sm hover:border-primary transition-colors">
              Sobre a WeDo
            </Link>
            <Link to="/locais-atendimento" className="px-4 py-2 bg-card border rounded-lg text-sm hover:border-primary transition-colors">
              Locais de Atendimento
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
