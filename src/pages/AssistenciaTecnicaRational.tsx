import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { 
import { useSiteSettings } from "@/hooks/useSiteSettings";
  ArrowRight, 
  Award, 
import { useSiteSettings } from "@/hooks/useSiteSettings";
  CheckCircle, 
  Shield, 
import { useSiteSettings } from "@/hooks/useSiteSettings";
  Clock, 
  Wrench, 
import { useSiteSettings } from "@/hooks/useSiteSettings";
  Settings, 
  Phone, 
import { useSiteSettings } from "@/hooks/useSiteSettings";
  Flame,
  Thermometer,
import { useSiteSettings } from "@/hooks/useSiteSettings";
  Droplets,
  Wind,
import { useSiteSettings } from "@/hooks/useSiteSettings";
  Zap,
  FileText,
import { useSiteSettings } from "@/hooks/useSiteSettings";
  Users,
  MapPin,
import { useSiteSettings } from "@/hooks/useSiteSettings";
  ChevronDown
} from "lucide-react";
import {
import { useSiteSettings } from "@/hooks/useSiteSettings";
  Accordion,
  AccordionContent,
import { useSiteSettings } from "@/hooks/useSiteSettings";
  AccordionItem,
  AccordionTrigger,
import { useSiteSettings } from "@/hooks/useSiteSettings";
} from "@/components/ui/accordion";

import { useSiteSettings } from "@/hooks/useSiteSettings";

// Trust Bar Items
import { useSiteSettings } from "@/hooks/useSiteSettings";
const trustItems = [
  "Assistência Técnica Homologada Rational",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  "Peças Originais Rational",
  "Técnicos Treinados pela Fábrica Rational",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  "Contratos PCM Personalizados",
  "Estoque Permanente de Peças",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  "Conectividade ConnectedCooking",
  "Diagnóstico Remoto Avançado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  "Diagnóstico Remoto Avançado",
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

// Equipamentos com detalhes técnicos completos
import { useSiteSettings } from "@/hooks/useSiteSettings";
const equipamentos = [
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    id: "icombi-pro",
    titulo: "iCombi Pro",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    subtitulo: "Forno Combinado Inteligente Rational",
    descricao: "O iCombi Pro é o forno combinado mais avançado da Rational, com tecnologia ConnectedCooking, sistema inteligente de controle climático e limpeza automática Efficient CareControl.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    modelos: [
      "iCombi Pro 6-2/3 GN (XS) - Compacto",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "iCombi Pro 6-1/1 GN - Padrão 6 níveis",
      "iCombi Pro 10-1/1 GN - Médio porte 10 níveis",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "iCombi Pro 10-2/1 GN - Alta capacidade 10 níveis",
      "iCombi Pro 20-1/1 GN - Industrial 20 níveis",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "iCombi Pro 20-2/1 GN - Grande produção 20 níveis",
      "Versões: Elétricas e a Gás",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    tecnologias: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "ICC (Intelligent Cooking Control): Sensores climáticos de umidade/temperatura",
      "ConnectedCooking: Gestão remota via nuvem, HACCP digital, upload/download de receitas",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Efficient CareControl: Limpeza automática com detecção de sujidade",
      "iCookingControl: Controle automático de cocção",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    servicos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Manutenção preventiva trimestral/semestral/anual",
      "Calibração de sensores de temperatura, umidade e pressão",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Limpeza técnica do sistema de água e vapor",
      "Atualização de software via ConnectedCooking",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Substituição de peças originais (vedações, sensores, válvulas)",
      "Diagnóstico remoto via rede",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Configuração HACCP e conectividade",
      "Treinamento operacional para equipe",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    problemas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Erro de aquecimento (SSR queimado, sensor B1/B2/B4 defeituoso)",
      "Falha de umidade (bloqueio mangueiras, sensor P1)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Problemas de limpeza automática (bomba care, sensor fluxo)",
      "Falha ConnectedCooking (configuração rede, recovery SD card)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Erro de ignição (modelos a gás)",
      "Motor turbina (Serviço 34)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Vedação de porta comprometida",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pecas: [
      "Vedações de porta todas as medidas",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Sensores B1, B2, B4, P1",
      "Válvulas solenoides água/vapor",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "SSR (relés estado sólido)",
      "Filtros de ar",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Kit limpeza (pastilhas Care/Detergente)",
      "Placas eletrônicas PCB",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    id: "icombi-classic",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "iCombi Classic",
    subtitulo: "Eficiência e Confiabilidade Rational",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    descricao: "O iCombi Classic oferece o melhor custo-benefício da linha Rational, com operação manual/semi-automática e sistema de limpeza CleanJet integrado.",
    modelos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "iCombi Classic 6-2/3 GN (XS)",
      "iCombi Classic 6-1/1 GN",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "iCombi Classic 10-1/1 GN",
      "iCombi Classic 10-2/1 GN",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "iCombi Classic 20-1/1 GN",
      "iCombi Classic 20-2/1 GN",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Versões elétricas e a gás",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    tecnologias: [
      "Controle manual com timer digital",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Sistema CleanJet de limpeza automática",
      "Construção robusta IPX5",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Mesma qualidade de cocção dos modelos Pro",
      "Operação simplificada",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    servicos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Manutenção preventiva mensal/trimestral",
      "Conversão de gás (LP/GN) quando aplicável",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Retrofit de componentes",
      "Calibração manual de sensores",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Limpeza química profunda",
      "Substituição de elementos aquecedores",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Reparo sistema hidráulico",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    problemas: [],
    pecas: [],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    id: "scc",
    titulo: "SelfCookingCenter SCC",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    subtitulo: "Linha Clássica Rational",
    descricao: "O SelfCookingCenter (SCC) é a linha sofisticada tradicional da Rational, com painel touchscreen TFT, sistema de autoteste integrado e função Show/Demo.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    modelos: [
      "SCC XS (6 x 2/3 GN) - Ultra compacto 62 kg",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "SCC 60 / SCC 61 / SCC 62",
      "SCC 101 / SCC 102 (99 kg versão elétrica)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "SCC 201 / SCC 202",
      "CombiMaster Plus (CM_P) 61, 101, 201, 202",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    tecnologias: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Autoteste obrigatório: Calibra sensores, determina ponto ebulição",
      "Controle automático vapor/sujidade",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Painel TFT touchscreen",
      "Download HACCP via USB",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Função Show/Demo para treinamento",
      "CleanJet+Care limpeza automática",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    servicos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Diagnóstico códigos de erro específicos SCC (Serviço 10-120)",
      "Reparo/substituição painel TFT touchscreen",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Calibração altitude e ponto de ebulição",
      "Atualização firmware via USB",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Recuperação dados HACCP",
      "Retrofit Ethernet (kit conectividade)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Manutenção bomba dosadora química",
      "Reparo sistema CleanJet",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    problemas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Serviço 10, 11, 12: Problemas sensor temperatura",
      "Serviço 17, 19, 20: Falhas aquecimento",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Serviço 25, 26, 27: Erros vapor/água",
      "Serviço 32, 33, 34: Motor/turbina",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Serviço 40, 41, 42: Sistema limpeza",
      "Serviço 52, 55, 56: Comunicação/eletrônica",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Serviço 60, 63: Gás (modelos a gás)",
      "Serviço 110, 120: Calibração/configuração",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    pecas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Painel TFT touchscreen completo",
      "Kit retrofit Ethernet",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Bomba dosadora CleanJet",
      "Sensores temperatura/pressão",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Válvula vapor proporcional",
      "Filtros ar específicos SCC",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Placas controladoras",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    id: "ivario",
    titulo: "iVario Pro",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    subtitulo: "Sistema Multifuncional de Cocção Rational",
    descricao: "O iVario Pro é o sistema de cocção multifuncional inteligente que substitui panelas basculantes, frigideiras, caldeirões e marmitas com tecnologia de aquecimento iVarioBoost.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    modelos: [
      "iVario 2-XS: 2 x 17 litros | 117 kg",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "iVario Pro 2-S: 2 x 25 litros | 134 kg",
      "iVario Pro L: 100 litros | 216 kg",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "iVario Pro XL: 150 litros | 256 kg",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    tecnologias: [
      "iVarioBoost: Aquecimento por contato direto, resposta ultra-rápida",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Controle temperatura ultra-preciso: ±1°C",
      "Elevação automática cestos",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Basculamento automático para escoamento",
      "Autolavagem de cuba integrada",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Sensores nível/temperatura inteligentes",
      "ConnectedCooking (Ethernet/WLAN)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "HACCP digital rastreável",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    servicos: [
      "Manutenção preventiva semestral (Pro L/XL)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Calibração sensores temperatura e pressão",
      "Revisão sistema basculamento",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Manutenção motor elevação cestos",
      "Limpeza circuito hidráulico autolavagem",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Configuração ConnectedCooking",
      "Atualização software remota",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Treinamento operacional avançado",
      "Diagnóstico erro S_1_412_05 (motor descida)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Reparo sensor pressão",
      "Substituição potenciômetros",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    problemas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Motor elevação não desce (S_1_412_05)",
      "Falha sensor pressão",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Erro leitura potenciômetro",
      "Umidade chassi (corrosão/curto)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Erro placa I/O A10",
      "Basculamento travado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Autolavagem não funciona",
      "Erro calibração temperatura",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    pecas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Sensores temperatura/pressão",
      "Motor basculamento",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Motor elevação cestos",
      "Potenciômetros posição",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Placa I/O A10",
      "Válvulas água/vapor",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Kit vedação cuba",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    id: "ultravent",
    titulo: "UltraVent Plus",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    subtitulo: "Sistema Exaustão e Filtragem Rational",
    descricao: "O UltraVent Plus é o sistema de exaustão e filtragem integrado aos equipamentos Rational, eliminando necessidade de coifa externa.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    modelos: [
      "Compatível com iCombi Pro XS",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Compatível com iCombi Classic XS",
      "Compatível com SelfCookingCenter XS",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Compatível com CombiMaster Plus",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    tecnologias: [
      "Capacidade extração: até 560 m³/h",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Alimentação: 1NAC 230V",
      "Potência: 140-170W",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Peso: 30-35 kg",
      "Filtros HEPA integrados",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    servicos: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Limpeza periódica filtros",
      "Substituição filtros HEPA",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Verificação sensores bloqueio",
      "Teste extração vazão",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Limpeza dutos internos",
      "Calibração sensores",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Manutenção motor exaustor",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    problemas: [],
    pecas: [],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

// Diferenciais
import { useSiteSettings } from "@/hooks/useSiteSettings";
const diferenciais = [
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    icon: Award,
    titulo: "Assistência Técnica Homologada Rational",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    descricao: "Somos homologados pela Rational como assistência técnica autorizada, com técnicos certificados pela fábrica através de treinamentos intensivos presenciais e online.",
    items: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Certificação técnica Rational válida",
      "Treinamentos anuais obrigatórios",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Acesso portal técnico Rational Toolbox 2.0",
      "Suporte direto engenharia Rational Brasil",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "+1.200 equipamentos Rational atendidos",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    icon: Wrench,
    titulo: "Ferramental e Diagnóstico de Última Geração",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    descricao: "Nossa estrutura operacional é dimensionada para atendimento técnico de altíssimo nível.",
    items: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Software diagnóstico Rational original",
      "Laptop configuração ConnectedCooking",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Multímetros precisão industrial Fluke",
      "Câmera termográfica FLIR",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Analisador combustão Testo (modelos gás)",
      "Medidor qualidade água TDS",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Ferramental especializado completo",
      "Veículos equipados com estoque móvel",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "EPIs certificados (NR6, NR10, NR35)",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    icon: Settings,
    titulo: "Gestão Remota ConnectedCooking",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    descricao: "Somos especializados em configuração e suporte ConnectedCooking, a plataforma de gestão remota Rational.",
    items: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Diagnóstico remoto em tempo real",
      "Atualização software automática OTA",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Download/upload receitas padronizadas",
      "HACCP digital automatizado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Alertas preventivos",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    icon: FileText,
    titulo: "Documentação Técnica Auditável",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    descricao: "Toda manutenção WeDo gera documentação técnica completa rastreável.",
    items: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Ordem serviço digital (CIGAM/Auvo)",
      "Checklist manutenção fotografado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Relatório técnico detalhado",
      "Registro HACCP preservado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "ART quando aplicável",
      "Laudo elétrico NR10",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Certificado calibração rastreável",
      "Histórico completo equipamento",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    icon: Clock,
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Atendimento Ágil",
    descricao: "Resposta rápida para equipamentos Rational.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    items: [
      "Clientes contrato PCM: Atendimento prioritário",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Diagnóstico remoto via ConnectedCooking",
      "Equipe técnica especializada",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Clientes avulsos: agendamento programado",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

// Problemas comuns e soluções
import { useSiteSettings } from "@/hooks/useSiteSettings";
const problemasComuns = [
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Erro de Aquecimento",
    subtitulo: "Equipamento não aquece",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    sintomas: [
      "Display exibe erro aquecimento",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Temperatura não atinge setpoint",
      "Códigos: Serviço 17, 19, 20",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    causas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "SSR (relé estado sólido) queimado",
      "Sensor temperatura (B1, B2) defeituoso",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Resistências elétricas rompidas",
      "Falha placa potência",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Tensão elétrica instável",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    solucao: [
      "Diagnóstico multímetro + termografia",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Teste isolamento elétrico",
      "Substituição SSR/sensores/resistências",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Calibração pós-reparo",
      "Validação curva aquecimento",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    titulo: "Problema de Umidade",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    subtitulo: "Vapor excessivo ou insuficiente",
    sintomas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Excesso vapor (alimentos encharcados)",
      "Falta vapor (alimentos ressecados)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Códigos: Serviço 25, 26, 27",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    causas: [
      "Sensor umidade P1 descalibrado/obstruído",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Mangueiras vapor bloqueadas por calcário",
      "Válvula vapor defeituosa",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Qualidade água inadequada",
      "Dreno entupido",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    solucao: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Análise qualidade água",
      "Descalcificação sistema hidráulico",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Calibração/substituição sensor P1",
      "Limpeza/substituição mangueiras",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Teste válvulas vapor",
      "Instalação sistema tratamento água (se necessário)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    titulo: "Falha Limpeza Automática",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    subtitulo: "CleanJet não funciona",
    sintomas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Limpeza não inicia",
      "Erro limpeza incompleta",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Falta dosagem química",
      "Códigos: Serviço 40, 41, 42",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    causas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Falta pastilhas Care/Detergente",
      "Bomba dosadora defeituosa",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Sensor fluxo bloqueado",
      "Braços aspersão entupidos",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Filtro água obstruído",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    solucao: [
      "Verificação estoque químicos",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Teste/substituição bomba dosadora",
      "Limpeza sensor fluxo",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Desmontagem e limpeza braços",
      "Substituição filtros",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Ciclo limpeza teste",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    titulo: "Erro ConnectedCooking",
    subtitulo: "Equipamento não conecta",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    sintomas: [
      "Falha registro portal",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Desconexões frequentes",
      "Impossível atualizar software",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "HACCP não sincroniza",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    causas: [
      "Configuração rede incorreta",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Portas firewall bloqueadas (443, 8883)",
      "Data/hora incorretas equipamento",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Certificado digital expirado",
      "Falha SD card",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    solucao: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Diagnóstico infraestrutura rede",
      "Configuração DHCP/IP fixo",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Liberação portas firewall",
      "Sincronização data/hora",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Recovery/substituição SD card",
      "Teste conectividade completo",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    titulo: "Falha Ignição Gás",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    subtitulo: "Queimador não acende",
    sintomas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Equipamento gás não igniza",
      "Ignição intermitente",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Chama irregular",
      "Códigos: Serviço 60, 63",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    causas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Eletrodo ignição posicionado errado",
      "Válvula gás defeituosa",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Pressão gás inadequada",
      "CO/CO2 fora do nominal",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Queimador sujo/obstruído",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    solucao: [
      "Análise combustão completa (obrigatória)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Ajuste posição eletrodo",
      "Teste/substituição válvula gás",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Verificação pressão",
      "Limpeza/regulagem queimador",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    titulo: "Motor Turbina",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    subtitulo: "Erro ventilação interna",
    sintomas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Ruído anormal motor",
      "Ventilação fraca",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Código: Serviço 34",
      "Aquecimento irregular alimentos",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    causas: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Motor turbina defeituoso",
      "Rolamento travado/desgastado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Erro comunicação motor",
      "Hélice turbina danificada",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    solucao: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Diagnóstico elétrico motor",
      "Teste rotação e vibração",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Substituição motor turbina",
      "Calibração velocidade",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Teste distribuição ar",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

// Planos PCM
import { useSiteSettings } from "@/hooks/useSiteSettings";
const planosPCM = [
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    nome: "ESSENCIAL",
    ideal: "1 a 2 equipamentos Rational • Operação padrão",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    beneficios: [
      "4 manutenções preventivas/ano (trimestral)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Atendimento em horário comercial",
      "Desconto 20% em peças",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Desconto 15% mão de obra corretiva",
      "Relatório técnico digital",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "HACCP básico",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    destaque: false,
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    nome: "PROFISSIONAL",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ideal: "3 a 5 equipamentos • Operação intensiva",
    beneficios: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "6 manutenções preventivas/ano (bimestral)",
      "Atendimento prioritário",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Desconto 30% em peças",
      "Desconto 25% mão de obra corretiva",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "2 corretivas inclusas/ano",
      "Calibração anual sensores",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Gestão digital ARGUS",
      "HACCP completo + relatórios gerenciais",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Treinamento semestral equipe",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
    destaque: true,
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    nome: "CORPORATIVO",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ideal: "6+ equipamentos • Múltiplas unidades • Rede food service",
    beneficios: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Manutenções preventivas customizadas (até mensal)",
      "Atendimento express prioritário",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Desconto 40% em peças",
      "Mão de obra corretiva inclusa (ilimitada)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Calibração semestral todos equipamentos",
      "ConnectedCooking configurado e gerenciado",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Gestão digital ARGUS completa",
      "HACCP + Business Intelligence",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Consultor técnico dedicado",
      "Treinamento trimestral equipes",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Spare parts estratégico in-loco",
      "Relatórios C-level mensais",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
    destaque: false,
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

// FAQ
import { useSiteSettings } from "@/hooks/useSiteSettings";
const faqItems = [
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "A WeDo é assistência técnica autorizada Rational?",
    resposta: "Sim, somos assistência técnica homologada pela Rational Brasil, com técnicos certificados através de treinamentos presenciais e online pela fábrica.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "Qual a garantia dos serviços da WeDo?",
    resposta: "Todos os nossos serviços possuem garantia de 90 dias.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "Quanto tempo demora um atendimento?",
    resposta: "Para clientes com contrato PCM em Goiás e Distrito Federal, o atendimento é prioritário. Para atendimentos avulsos, fazemos agendamento programado.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "Qual a frequência recomendada de manutenção preventiva em equipamentos Rational?",
    resposta: "Para equipamentos iCombi Pro e Classic elétricos, recomendamos manutenção trimestral. Para modelos a gás, semestral. Para iVario Pro L e XL, semestral. O ideal é avaliar intensidade de uso - cozinhas com operação contínua podem necessitar manutenção mensal.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "Meu equipamento Rational parou de funcionar. O que fazer?",
    resposta: "Entre em contato imediatamente pelo nosso canal de atendimento. Nossa equipe fará diagnóstico remoto (quando possível via ConnectedCooking) e agendará visita técnica.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "Vocês instalam e fazem startup de equipamentos Rational novos?",
    resposta: "Sim, realizamos instalação completa seguindo normas Rational e legislação brasileira (NR10, NR12, RDC 216). O serviço inclui análise prévia infraestrutura, instalação física, conexões, startup, calibração, configuração ConnectedCooking, treinamento equipe e documentação técnica + ART.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "É possível fazer diagnóstico remoto dos equipamentos Rational?",
    resposta: "Sim, para equipamentos conectados ao ConnectedCooking podemos fazer diagnóstico remoto via acesso portal Rational, visualizando códigos de erro, histórico operacional e dados HACCP. Em muitos casos, conseguimos orientar soluções simples remotamente.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "Vocês fornecem peças originais Rational?",
    resposta: "Sim, fornecemos peças originais Rational com nota fiscal. Recomendamos fortemente instalação por técnico certificado para garantir funcionamento correto.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "É necessário sistema de tratamento de água para equipamentos Rational?",
    resposta: "Depende da qualidade da água local. A Rational recomenda dureza máxima de 3°dH. Águas mais duras requerem descalcificador ou sistema osmose reversa. Fazemos análise gratuita da água na instalação.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "Vocês atendem em quais regiões?",
    resposta: "Atendemos diretamente Goiás, Distrito Federal e principais cidades da região Centro-Oeste. Para outros estados, podemos acionar nossa rede de parceiros técnicos Rational ou deslocar equipe mediante viabilidade técnica/comercial.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    pergunta: "O que está incluso no contrato PCM?",
    resposta: "Depende do plano contratado. Geralmente inclui: manutenções preventivas programadas, atendimento prioritário, descontos em peças e serviços, gestão digital, relatórios, treinamentos. Veja detalhes na seção Contratos PCM.",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

export default function AssistenciaTecnicaRational() {
import { useSiteSettings } from "@/hooks/useSiteSettings";
  return (
    <Layout>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <Helmet>
        <title>Assistência Técnica Rational | Parceiro Autorizado | Goiás e DF | WeDo</title>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <meta name="description" content="Assistência técnica autorizada Rational em Goiás e DF. Manutenção iCombi Pro, iCombi Classic, SelfCookingCenter, iVario Pro. Técnicos certificados pela fábrica, peças originais, atendimento 24/7." />
        <link rel="canonical" href="https://wedocorp.com/assistencia-tecnica-rational" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <meta name="keywords" content="assistência técnica rational, manutenção rational, manutenção icombi pro, selfcookingcenter scc, ivario pro manutenção, rational brasil, peças rational originais, conserto forno rational, técnico rational certificado" />
      </Helmet>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Hero Section */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="bg-secondary text-secondary-foreground section-padding">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="max-w-4xl">
            <nav className="text-sm text-secondary-foreground/60 mb-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <span>Assistência Técnica Rational</span>
            </nav>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            
            <div className="flex flex-wrap gap-3 mb-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                Parceiro Autorizado
              </span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                Peças Originais
              </span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium">
                <Clock className="w-4 h-4" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                Atendimento 24h
              </span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </div>

import { useSiteSettings } from "@/hooks/useSiteSettings";
            <h1 className="title-hero text-primary-foreground mb-6">
              Assistência Técnica Autorizada Rational
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-3xl mb-8">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              A WeDo é assistência técnica especializada e autorizada em equipamentos Rational no Brasil, oferecendo manutenção preventiva e corretiva, instalação, calibração, fornecimento de peças originais e contratos de manutenção (PCM) para toda linha Rational: <strong>iCombi Pro, iCombi Classic, SelfCookingCenter (SCC), CombiMaster Plus, iVario Pro</strong> e <strong>UltraVent Plus</strong>.
            </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <p className="text-secondary-foreground/70 max-w-3xl mb-8">
              Atendemos cozinhas industriais, restaurantes, hotéis, hospitais, panificações, catering e indústrias em todo território nacional com equipe técnica treinada pela fábrica, ferramentas de diagnóstico avançado, estoque de peças originais Rational e atendimento emergencial 24/7.
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </p>

import { useSiteSettings } from "@/hooks/useSiteSettings";
            <div className="flex flex-wrap gap-4">
              <a
import { useSiteSettings } from "@/hooks/useSiteSettings";
                href={ctaUrl}
                target="_blank"
import { useSiteSettings } from "@/hooks/useSiteSettings";
                rel="noopener noreferrer"
                className="btn-wedo inline-flex items-center gap-2"
import { useSiteSettings } from "@/hooks/useSiteSettings";
              >
                Solicitar Atendimento Urgente
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <ArrowRight className="w-5 h-5" />
              </a>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <Link
                to="/contratos-pcm"
import { useSiteSettings } from "@/hooks/useSiteSettings";
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-xl hover:bg-primary-foreground/10 transition-colors"
              >
import { useSiteSettings } from "@/hooks/useSiteSettings";
                Contratar Manutenção Preventiva
              </Link>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </div>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Trust Bar */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="bg-primary py-6 overflow-hidden">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {trustItems.map((item, index) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div key={index} className="flex items-center gap-2 text-primary-foreground text-sm font-medium whitespace-nowrap">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <span>{item}</span>
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            ))}
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Equipamentos Section */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="section-padding">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="text-center mb-12">
            <h2 className="title-section mb-4">Equipamentos Rational que Atendemos</h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Linha Completa de Cocção Profissional — Manutenção especializada em toda a linha de equipamentos Rational, com técnicos treinados diretamente pela fábrica.
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </p>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

          <Accordion type="single" collapsible className="space-y-4">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            {equipamentos.map((equip) => (
              <AccordionItem key={equip.id} value={equip.id} className="border rounded-xl px-6 bg-card">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Flame className="w-6 h-6 text-primary" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    </div>
                    <div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      <h3 className="font-heading font-bold text-xl text-foreground">{equip.titulo}</h3>
                      <p className="text-muted-foreground text-sm">{equip.subtitulo}</p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    </div>
                  </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </AccordionTrigger>
                <AccordionContent className="pb-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <div className="space-y-6 pt-4 border-t">
                    <p className="text-muted-foreground">{equip.descricao}</p>
import { useSiteSettings } from "@/hooks/useSiteSettings";

                    <div className="grid md:grid-cols-2 gap-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      {/* Modelos */}
                      <div className="bg-muted/50 rounded-lg p-4">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Settings className="w-4 h-4 text-primary" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          Modelos Atendidos
                        </h4>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        <ul className="space-y-1.5">
                          {equip.modelos.map((modelo, i) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                              {modelo}
                            </li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          ))}
                        </ul>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      </div>

import { useSiteSettings } from "@/hooks/useSiteSettings";
                      {/* Tecnologias */}
                      <div className="bg-muted/50 rounded-lg p-4">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-primary" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          Tecnologias
                        </h4>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        <ul className="space-y-1.5">
                          {equip.tecnologias.map((tec, i) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                              {tec}
                            </li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          ))}
                        </ul>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      </div>
                    </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

                    {/* Serviços */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <div className="bg-primary/5 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        <Wrench className="w-4 h-4 text-primary" />
                        Serviços WeDo para {equip.titulo}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        {equip.servicos.map((serv, i) => (
                          <div key={i} className="flex items-start gap-2">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{serv}</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          </div>
                        ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      </div>
                    </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

                    {/* Problemas e Peças */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    {(equip.problemas.length > 0 || equip.pecas.length > 0) && (
                      <div className="grid md:grid-cols-2 gap-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        {equip.problemas.length > 0 && (
                          <div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                            <h4 className="font-semibold text-foreground mb-3">Problemas comuns resolvidos:</h4>
                            <ul className="space-y-1.5">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                              {equip.problemas.map((prob, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                                  <span className="text-destructive mt-1">•</span>
                                  {prob}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                                </li>
                              ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                            </ul>
                          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        )}
                        {equip.pecas.length > 0 && (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Peças originais em estoque:</h4>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                            <ul className="space-y-1.5">
                              {equip.pecas.map((peca, i) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                                  {peca}
                                </li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                              ))}
                            </ul>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          </div>
                        )}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      </div>
                    )}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  </div>
                </AccordionContent>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </AccordionItem>
            ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </Accordion>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </section>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* Diferenciais Section */}
      <section className="section-padding bg-muted/30">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo">
          <div className="text-center mb-12">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <h2 className="title-section mb-4">Por Que Escolher a WeDo para Manutenção Rational?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Diferenciais técnicos e operacionais que garantem a máxima disponibilidade dos seus equipamentos
            </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>

import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((dif, index) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div key={index} className="bg-card rounded-2xl p-6 border hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <dif.icon className="w-7 h-7 text-primary" />
                </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <h3 className="font-heading font-bold text-lg mb-2">{dif.titulo}</h3>
                <p className="text-muted-foreground text-sm mb-4">{dif.descricao}</p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <ul className="space-y-2">
                  {dif.items.map((item, i) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      <span className="text-muted-foreground">{item}</span>
                    </li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  ))}
                </ul>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </div>
            ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </section>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* Problemas e Soluções */}
      <section className="section-padding">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo">
          <div className="text-center mb-12">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <h2 className="title-section mb-4">Problemas Frequentes em Equipamentos Rational</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Diagnóstico e soluções especializadas para os problemas mais comuns
            </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>

import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemasComuns.map((problema, index) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div key={index} className="bg-card rounded-2xl border overflow-hidden">
                <div className="bg-destructive/10 p-4 border-b">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <h3 className="font-heading font-bold text-lg text-foreground">{problema.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{problema.subtitulo}</p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </div>
                <div className="p-4 space-y-4">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Sintomas:</h4>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <ul className="space-y-1">
                      {problema.sintomas.map((s, i) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                          <span className="text-destructive">•</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          {s}
                        </li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      ))}
                    </ul>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  </div>
                  <div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <h4 className="text-sm font-semibold text-foreground mb-2">Causas comuns:</h4>
                    <ul className="space-y-1">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      {problema.causas.slice(0, 3).map((c, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          <span className="text-amber-500">•</span>
                          {c}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        </li>
                      ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    </ul>
                  </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <div className="bg-primary/5 rounded-lg p-3">
                    <h4 className="text-sm font-semibold text-primary mb-2">Solução WeDo:</h4>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <ul className="space-y-1">
                      {problema.solucao.slice(0, 4).map((s, i) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                          <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          {s}
                        </li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      ))}
                    </ul>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  </div>
                </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </div>
            ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </section>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* Contratos PCM */}
      <section className="section-padding bg-secondary text-secondary-foreground">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo">
          <div className="text-center mb-12">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Contratos PCM Personalizados para Equipamentos Rational
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-3xl mx-auto">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Proteja seu investimento em equipamentos Rational com nossos planos de manutenção preventiva e corretiva (PCM) desenhados para máxima disponibilidade operacional e previsibilidade financeira.
            </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>

import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="grid md:grid-cols-3 gap-6">
            {planosPCM.map((plano, index) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div 
                key={index} 
import { useSiteSettings } from "@/hooks/useSiteSettings";
                className={`rounded-2xl p-6 ${
                  plano.destaque 
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    ? 'bg-primary text-primary-foreground ring-4 ring-primary/50' 
                    : 'bg-card text-foreground'
import { useSiteSettings } from "@/hooks/useSiteSettings";
                }`}
              >
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Plano {plano.nome}</h3>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <p className={`text-sm ${plano.destaque ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {plano.ideal}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  </p>
                </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <ul className="space-y-3 mb-6">
                  {plano.beneficios.map((ben, i) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        plano.destaque ? 'text-primary-foreground' : 'text-primary'
                      }`} />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      <span>{ben}</span>
                    </li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  ))}
                </ul>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <div className={`rounded-lg p-3 text-center text-sm ${
                  plano.destaque ? 'bg-primary-foreground/20' : 'bg-muted'
import { useSiteSettings } from "@/hooks/useSiteSettings";
                }`}>
                  <strong>Garantia de 90 dias em todos os serviços</strong>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </div>
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            ))}
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

          <div className="text-center mt-10">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <a
              href={ctaUrl}
import { useSiteSettings } from "@/hooks/useSiteSettings";
              target="_blank"
              rel="noopener noreferrer"
import { useSiteSettings } from "@/hooks/useSiteSettings";
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Solicitar Proposta PCM Personalizada
              <ArrowRight className="w-6 h-6" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </a>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* FAQ */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="section-padding">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="text-center mb-12">
            <h2 className="title-section mb-4">Perguntas Frequentes sobre Manutenção Rational</h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tire suas dúvidas sobre nossos serviços de assistência técnica
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </p>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

          <div className="max-w-3xl mx-auto">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((faq, index) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <AccordionItem key={index} value={`faq-${index}`} className="border rounded-xl px-6 bg-card">
                  <AccordionTrigger className="hover:no-underline text-left py-5">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <span className="font-semibold text-foreground pr-4">{faq.pergunta}</span>
                  </AccordionTrigger>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <AccordionContent className="pb-5 text-muted-foreground">
                    {faq.resposta}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  </AccordionContent>
                </AccordionItem>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              ))}
            </Accordion>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </section>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* CTA Final */}
      <section className="section-padding bg-primary">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo text-center">
          <div className="max-w-3xl mx-auto">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Precisa de Assistência Técnica Rational?
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Entre em contato com nossa equipe especializada. Atendemos todo o estado de Goiás, Distrito Federal e região Centro-Oeste com atendimento prioritário para clientes PCM.
            </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <div className="flex flex-wrap justify-center gap-4">
              <a
import { useSiteSettings } from "@/hooks/useSiteSettings";
                href={ctaUrl}
                target="_blank"
import { useSiteSettings } from "@/hooks/useSiteSettings";
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
import { useSiteSettings } from "@/hooks/useSiteSettings";
              >
                Acessar Atendimento
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <ArrowRight className="w-6 h-6" />
              </a>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <Link
                to="/contratos-pcm"
import { useSiteSettings } from "@/hooks/useSiteSettings";
                className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-primary-foreground/30 text-primary-foreground font-bold text-lg rounded-xl hover:bg-primary-foreground/10 transition-colors"
              >
import { useSiteSettings } from "@/hooks/useSiteSettings";
                Ver Contratos PCM
              </Link>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </div>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Links Relacionados */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="section-padding bg-muted/30">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <h3 className="font-heading font-bold text-xl mb-6 text-center">Páginas Relacionadas</h3>
          <div className="flex flex-wrap justify-center gap-4">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <Link to="/contratos-pcm" className="px-4 py-2 bg-card border rounded-lg text-sm hover:border-primary transition-colors">
              Contratos PCM
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </Link>
            <Link to="/cozinhas-profissionais" className="px-4 py-2 bg-card border rounded-lg text-sm hover:border-primary transition-colors">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Cozinhas Profissionais
            </Link>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <Link to="/manutencao-camaras-frias" className="px-4 py-2 bg-card border rounded-lg text-sm hover:border-primary transition-colors">
              Manutenção Câmaras Frias
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </Link>
            <Link to="/sobre" className="px-4 py-2 bg-card border rounded-lg text-sm hover:border-primary transition-colors">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Sobre a WeDo
            </Link>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <Link to="/locais-atendimento" className="px-4 py-2 bg-card border rounded-lg text-sm hover:border-primary transition-colors">
              Locais de Atendimento
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </Link>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";
    </Layout>
  );
import { useSiteSettings } from "@/hooks/useSiteSettings";
}
