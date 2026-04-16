import { Flame, Wind, Shield, Heart, AlertTriangle, Sparkles, FileText } from "lucide-react";

export interface CidadeCoifasData {
  slug: string;
  cidade: string;
  estado: string;
  canonical: string;
  title: string;
  metaDescription: string;
  heroSubtitle: string;
  introTexto: string[];
  /** Perguntas FAQ únicas por cidade */
  faqs: { q: string; a: string }[];
  /** Bairros/regiões atendidas */
  regioes: string[];
  /** Texto específico sobre a operação naquela cidade */
  operacaoLocal: string;
}

export const cidadesCoifas: CidadeCoifasData[] = [
  {
    slug: "limpeza-de-coifas-goiania",
    cidade: "Goiânia",
    estado: "GO",
    canonical: "https://wedocozinhas.com.br/limpeza-de-coifas-goiania",
    title: "Limpeza de Coifas em Goiânia | Dutos e Exaustores | WeDo",
    metaDescription: "Limpeza profissional de coifas, dutos e exaustores em Goiânia e região metropolitana. Laudos técnicos rastreáveis, conformidade com normas sanitárias. Solicite orçamento.",
    heroSubtitle: "Atendimento técnico especializado em limpeza de coifas para restaurantes, hotéis, hospitais e refeitórios em Goiânia e região metropolitana.",
    introTexto: [
      "Goiânia concentra uma das maiores densidades de estabelecimentos gastronômicos do Centro-Oeste. Restaurantes, redes de fast food, hotéis, buffets e refeitórios industriais operam com cozinhas de alto volume que exigem sistemas de exaustão em pleno funcionamento.",
      "A gordura acumulada nos dutos e coifas é um risco silencioso: além de comprometer a qualidade do ar na cozinha, pode provocar incêndios e resultar em interdições durante fiscalizações sanitárias. Em Goiânia, onde o clima quente intensifica o desconforto em ambientes mal ventilados, a limpeza periódica é ainda mais crítica.",
      "A WeDo atende toda Goiânia e região metropolitana — incluindo Aparecida de Goiânia, Trindade e Senador Canedo — com equipe própria, equipamentos profissionais e emissão de laudos técnicos rastreáveis exigidos pela fiscalização."
    ],
    regioes: [
      "Setor Bueno", "Setor Marista", "Jardim Goiás", "Setor Oeste",
      "Campinas", "Setor Central", "Aparecida de Goiânia", "Trindade",
      "Senador Canedo", "Goianira"
    ],
    operacaoLocal: "Nossa equipe em Goiânia realiza atendimentos programados em horário comercial, com agendamento prévio para minimizar o impacto na operação da sua cozinha. Atendemos desde pequenos restaurantes até grandes redes com múltiplas unidades na capital e região metropolitana.",
    faqs: [
      {
        q: "Vocês atendem restaurantes em shoppings de Goiânia?",
        a: "Sim, atendemos cozinhas profissionais em shoppings, galerias e centros comerciais de Goiânia. O serviço é agendado conforme as regras de acesso de cada estabelecimento, podendo ser realizado em horários alternativos."
      },
      {
        q: "Qual a frequência ideal de limpeza de coifas em Goiânia?",
        a: "Para cozinhas de alto volume em Goiânia, recomendamos a limpeza a cada 3 meses. Estabelecimentos com menor volume de fritura podem realizar a cada 6 meses. O clima quente da região acelera a degradação da gordura acumulada nos dutos."
      },
      {
        q: "A limpeza de coifas gera laudo válido para fiscalização em Goiânia?",
        a: "Sim. Emitimos laudo técnico rastreável com registro fotográfico (antes e depois), válido para apresentação em fiscalizações sanitárias municipais e estaduais."
      },
      {
        q: "Atendem Aparecida de Goiânia e região metropolitana?",
        a: "Sim, atendemos toda a região metropolitana de Goiânia, incluindo Aparecida de Goiânia, Trindade, Senador Canedo e Goianira."
      }
    ],
  },
  {
    slug: "limpeza-de-coifas-anapolis",
    cidade: "Anápolis",
    estado: "GO",
    canonical: "https://wedocozinhas.com.br/limpeza-de-coifas-anapolis",
    title: "Limpeza de Coifas em Anápolis | Dutos e Exaustores | WeDo",
    metaDescription: "Limpeza de coifas e dutos de exaustão em Anápolis e região. Equipe local, laudos técnicos rastreáveis, conformidade sanitária. Solicite orçamento.",
    heroSubtitle: "Equipe local em Anápolis para limpeza técnica de coifas, dutos e exaustores em cozinhas profissionais do DAIA e região.",
    introTexto: [
      "Anápolis é o terceiro maior município de Goiás e abriga o DAIA — Distrito Agroindustrial de Anápolis — um dos maiores polos industriais do Centro-Oeste. Com centenas de indústrias em operação, a demanda por refeitórios industriais com cozinhas profissionais é constante, e cada uma delas precisa manter seu sistema de exaustão em conformidade.",
      "Além do setor industrial, Anápolis possui um setor gastronômico crescente, com restaurantes, lanchonetes e redes que atendem tanto a população local quanto os profissionais que transitam pelo eixo Goiânia-Brasília.",
      "A WeDo tem base operacional em Anápolis, o que nos permite atender a cidade e municípios vizinhos com agilidade. Realizamos a limpeza completa de coifas, dutos, filtros e exaustores, com emissão de laudos técnicos exigidos pela fiscalização sanitária."
    ],
    regioes: [
      "DAIA", "Centro", "Jundiaí", "Vila Jaiara", "Cidade Jardim",
      "Setor Sul", "Setor Central", "Vila União", "Calixtolândia", "Nerópolis"
    ],
    operacaoLocal: "Com base em Anápolis, nossa equipe atende a cidade e municípios próximos sem custo adicional de deslocamento. Isso nos permite oferecer preços competitivos e agendamento flexível para refeitórios industriais do DAIA e restaurantes do centro da cidade.",
    faqs: [
      {
        q: "Atendem refeitórios industriais no DAIA em Anápolis?",
        a: "Sim, atendemos refeitórios industriais em todo o DAIA. Temos experiência com cozinhas de alto volume que servem centenas de refeições diárias e precisam manter o sistema de exaustão sempre em conformidade."
      },
      {
        q: "Qual o prazo para agendamento de limpeza de coifas em Anápolis?",
        a: "Por termos base em Anápolis, conseguimos agendar atendimentos com maior flexibilidade. O prazo médio entre o contato e a execução depende da demanda, mas priorizamos atendimentos na cidade."
      },
      {
        q: "A limpeza de coifas em Anápolis inclui os dutos internos?",
        a: "Sim. O serviço completo inclui a limpeza das coifas, dos dutos internos de exaustão, dos filtros e dos exaustores. Tudo documentado com registro fotográfico e laudo técnico."
      },
      {
        q: "Vocês atendem cidades próximas a Anápolis?",
        a: "Sim, além de Anápolis atendemos municípios vizinhos como Nerópolis, Calixtolândia, Pirenópolis e outras cidades da região."
      }
    ],
  },
  {
    slug: "limpeza-de-coifas-brasilia",
    cidade: "Brasília",
    estado: "DF",
    canonical: "https://wedocozinhas.com.br/limpeza-de-coifas-brasilia",
    title: "Limpeza de Coifas em Brasília DF | Dutos e Exaustores | WeDo",
    metaDescription: "Limpeza profissional de coifas e dutos de exaustão em Brasília e Entorno do DF. Laudos técnicos rastreáveis, conformidade sanitária. Solicite orçamento.",
    heroSubtitle: "Limpeza técnica de coifas, dutos e exaustores para restaurantes, hotéis e cozinhas profissionais em Brasília e Entorno do DF.",
    introTexto: [
      "Brasília possui uma das cenas gastronômicas mais diversificadas do Brasil. Restaurantes internacionais, redes hoteleiras, hospitais federais e refeitórios de órgãos públicos — todos operam com cozinhas profissionais que dependem de sistemas de exaustão eficientes.",
      "No Distrito Federal, a fiscalização sanitária é rigorosa e exige documentação comprobatória da manutenção periódica do sistema de exaustão. Estabelecimentos que não comprovam a limpeza regular de coifas e dutos ficam sujeitos a notificações, multas e até interdição.",
      "A WeDo atende Brasília e o Entorno do DF com o mesmo padrão técnico aplicado em Goiás: limpeza completa do sistema de exaustão, equipamentos profissionais e emissão de laudos técnicos rastreáveis com registro fotográfico."
    ],
    regioes: [
      "Asa Sul", "Asa Norte", "Lago Sul", "Lago Norte", "Sudoeste",
      "Águas Claras", "Taguatinga", "Ceilândia", "Guará", "Valparaíso de Goiás",
      "Luziânia", "Novo Gama", "Cidade Ocidental"
    ],
    operacaoLocal: "Nosso atendimento em Brasília é realizado por equipe que se desloca a partir de Goiás, com agendamento prévio. Atendemos o Plano Piloto, regiões administrativas e cidades do Entorno do DF como Valparaíso, Luziânia e Novo Gama.",
    faqs: [
      {
        q: "Vocês atendem hotéis e restaurantes na Asa Sul e Asa Norte?",
        a: "Sim, atendemos toda a região do Plano Piloto, incluindo Asa Sul, Asa Norte, Setor Hoteleiro e Setor Comercial. O agendamento é feito com antecedência para garantir atendimento no horário mais conveniente."
      },
      {
        q: "A limpeza de coifas em Brasília atende às exigências da vigilância sanitária do DF?",
        a: "Sim. Nossos laudos técnicos são rastreáveis e incluem registro fotográfico completo (antes e depois), atendendo às exigências de fiscalização sanitária do Distrito Federal."
      },
      {
        q: "Atendem o Entorno do DF?",
        a: "Sim, além de Brasília atendemos Valparaíso de Goiás, Luziânia, Novo Gama, Cidade Ocidental e demais municípios do Entorno."
      },
      {
        q: "Qual a diferença entre limpeza de coifa residencial e profissional?",
        a: "A WeDo é especializada em cozinhas profissionais. O serviço envolve limpeza completa de coifas industriais, dutos de exaustão de grande porte, filtros e exaustores — com laudo técnico. Não realizamos limpeza de coifas residenciais."
      }
    ],
  },
];
