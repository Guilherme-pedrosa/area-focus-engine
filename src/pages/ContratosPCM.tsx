import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { 
import { useSiteSettings } from "@/hooks/useSiteSettings";
  ArrowRight, 
  CheckCircle, 
import { useSiteSettings } from "@/hooks/useSiteSettings";
  TrendingDown, 
  Zap, 
import { useSiteSettings } from "@/hooks/useSiteSettings";
  Clock, 
  Flame, 
import { useSiteSettings } from "@/hooks/useSiteSettings";
  Thermometer, 
  ChefHat,
import { useSiteSettings } from "@/hooks/useSiteSettings";
  Snowflake,
  UtensilsCrossed,
import { useSiteSettings } from "@/hooks/useSiteSettings";
  ShieldCheck
} from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";


import { useSiteSettings } from "@/hooks/useSiteSettings";
const categorias = [
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    icon: Flame,
    titulo: "Fogões Profissionais",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    items: [
      "Inspeção de mangueiras, regulador e válvulas",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Limpeza e descarbonização de queimadores",
      "Calibração de bicos injetores",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Tratamento antiferrugem",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    icon: Snowflake,
    titulo: "Refrigeração",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    items: [
      "Balcões refrigerados, freezers e refrigeradores",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Ajuste de portas, dobradiças e vedação",
      "Limpeza de condensador e evaporador",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Verificação de controlador digital e sensores",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    icon: Thermometer,
    titulo: "Câmaras Frias",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    items: [
      "Manutenção do sistema de refrigeração",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Verificação de pressostatos e degelo automático",
      "Detecção de vazamentos de fluido",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Revisão de vedação e cortinas plásticas",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    icon: ChefHat,
    titulo: "Caldeiras e Basculantes",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    items: [
      "Testes de estanqueidade (água e gás)",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Regulagem de queimadores e combustão",
      "Verificação de manômetros e válvulas de segurança",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Lubrificação de sistemas mecânicos",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    icon: UtensilsCrossed,
    titulo: "Lava-Louças Profissionais",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    items: [
      "Inspeção visual e testes elétricos",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Limpeza de braços de lavagem e filtros",
      "Verificação de bombas, pressão e temperaturas",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Teste de sensores e dispositivos de segurança",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    icon: Zap,
    titulo: "Equipamentos de Aquecimento",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    items: [
      "Fornos, estufas e pass-through",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Teste de resistências e termostatos",
      "Inspeção elétrica e isolamento",
import { useSiteSettings } from "@/hooks/useSiteSettings";
      "Ajuste de boiler e sistemas de segurança",
    ],
import { useSiteSettings } from "@/hooks/useSiteSettings";
  },
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

const equipamentosBancada = [
import { useSiteSettings } from "@/hooks/useSiteSettings";
  "Batedeiras",
  "Processadores",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  "Liquidificadores",
  "Cortadores de frios",
import { useSiteSettings } from "@/hooks/useSiteSettings";
  "Moedores",
  "Amassadeiras",
import { useSiteSettings } from "@/hooks/useSiteSettings";
];

import { useSiteSettings } from "@/hooks/useSiteSettings";
const beneficios = [
  { icon: TrendingDown, valor: "Até 76%", label: "de redução em custos de manutenção" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  { icon: Zap, valor: "Até 25%", label: "de economia de energia elétrica" },
  { icon: Clock, valor: "+35%", label: "de aumento na vida útil dos equipamentos" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
];

import { useSiteSettings } from "@/hooks/useSiteSettings";
const resultados = [
  { valor: "118+", label: "Serviços contratuais executados" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  { valor: "68%", label: "Redução em chamadas emergenciais" },
  { valor: "R$9.604", label: "Economia mensal média por rede" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
];

import { useSiteSettings } from "@/hooks/useSiteSettings";
export default function ContratosPCM() {
  return (
import { useSiteSettings } from "@/hooks/useSiteSettings";
    <Layout>
      <Helmet>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <title>Contratos PCM | Manutenção Preventiva Cozinha Profissional | WeDo</title>
        <meta name="description" content="Contratos de manutenção preventiva para cozinhas profissionais completas. Fogões, refrigeração, câmaras frias, lava-louças e mais. Reduza até 76% dos custos." />
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <link rel="canonical" href="https://wedocorp.com/contratos-pcm" />
      </Helmet>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Hero */}
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
              <span>Contratos PCM</span>
            </nav>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <h1 className="title-hero text-primary-foreground mb-6">
              Contratos PCM — Manutenção Preventiva para Cozinha Profissional Completa
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-3xl">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Cuidado completo para todos os equipamentos da sua cozinha. Checklists técnicos específicos, equipe certificada em NR10, NR12, NR13 e NBR 5410, e resultados comprovados com até 76% de redução de custos.
            </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </section>

import { useSiteSettings } from "@/hooks/useSiteSettings";
      {/* Resultados Comprovados */}
      <section className="section-padding bg-primary">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground text-center mb-10">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            Resultados Comprovados em Redes de Restaurantes
          </h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {resultados.map((r) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div key={r.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{r.valor}</div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <p className="text-primary-foreground/80">{r.label}</p>
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            ))}
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Benefícios */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="section-padding">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <h2 className="title-section text-center mb-12">Benefícios Mensuráveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            {beneficios.map((b) => (
              <div key={b.label} className="text-center">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-8 h-8 text-primary" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{b.valor}</div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <p className="text-muted-foreground">{b.label}</p>
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            ))}
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Categorias de Equipamentos */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="section-padding bg-muted">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <h2 className="title-section text-center mb-4">Equipamentos Atendidos</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            Desenvolvemos protocolos específicos para cada categoria de equipamento, garantindo que nenhum detalhe seja negligenciado.
          </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorias.map((cat) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div
                key={cat.titulo}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                className="bg-card rounded-2xl p-6 shadow hover:shadow-lg transition-shadow"
              >
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <cat.icon className="w-6 h-6 text-primary" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </div>
                <h3 className="font-heading font-bold text-lg mb-4">{cat.titulo}</h3>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <ul className="space-y-2">
                  {cat.items.map((item) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      {item}
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
      {/* Equipamentos de Bancada */}
      <section className="section-padding">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="container-wedo">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <div>
              <h2 className="title-section mb-6">Equipamentos de Bancada</h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <p className="text-muted-foreground mb-8">
                Batedeiras, processadores, liquidificadores e outros equipamentos de bancada são fundamentais no dia a dia da sua cozinha. Nossa manutenção garante que funcionem perfeitamente quando você precisar.
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </p>
              <div className="flex flex-wrap gap-3">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                {equipamentosBancada.map((eq) => (
                  <span
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    key={eq}
                    className="px-4 py-2 bg-muted rounded-full text-sm font-medium"
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  >
                    {eq}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  </span>
                ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </div>
            </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl mb-6">O que incluímos</h3>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Verificação elétrica e segurança</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </li>
                <li className="flex items-center gap-3">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Higienização técnica especializada</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </li>
                <li className="flex items-center gap-3">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Lubrificação de partes móveis</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </li>
                <li className="flex items-center gap-3">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Ajuste de correias e retentores</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </li>
                <li className="flex items-center gap-3">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Revisão de botões e botoeiras de emergência</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </li>
              </ul>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </div>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Bancadas e Carrinhos Inox */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="section-padding bg-muted">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="title-section mb-6">Bancadas e Carrinhos em Aço Inox</h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <p className="text-muted-foreground mb-8">
              Estruturas em aço inox também precisam de manutenção preventiva para garantir durabilidade, higiene e segurança no ambiente de trabalho.
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div className="bg-card rounded-xl p-4 text-center">
                <ShieldCheck className="w-6 h-6 text-primary mx-auto mb-2" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <span className="text-sm font-medium">Tratamento Antiferrugem</span>
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div className="bg-card rounded-xl p-4 text-center">
                <ShieldCheck className="w-6 h-6 text-primary mx-auto mb-2" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <span className="text-sm font-medium">Limpeza Técnica</span>
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div className="bg-card rounded-xl p-4 text-center">
                <ShieldCheck className="w-6 h-6 text-primary mx-auto mb-2" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <span className="text-sm font-medium">Manutenção de Rodízios</span>
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div className="bg-card rounded-xl p-4 text-center">
                <ShieldCheck className="w-6 h-6 text-primary mx-auto mb-2" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <span className="text-sm font-medium">Verificação Estrutural</span>
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </div>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Diferenciais */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="section-padding">
        <div className="container-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <h2 className="title-section text-center mb-12">Por que Escolher a WeDo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <h3 className="font-heading font-bold text-lg mb-2">Protocolos Específicos</h3>
              <p className="text-muted-foreground text-sm">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                Checklists detalhados para cada tipo de equipamento, garantindo inspeção completa e padronizada.
              </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </div>
            <div className="text-center">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-primary" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Equipe Certificada</h3>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <p className="text-muted-foreground text-sm">
                Técnicos com certificações em NR10, NR12, NR13, NBR 5410 e treinamento contínuo.
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </p>
            </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <TrendingDown className="w-8 h-8 text-primary" />
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <h3 className="font-heading font-bold text-lg mb-2">Relatórios Detalhados</h3>
              <p className="text-muted-foreground text-sm">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                Documentação completa com fotos e parâmetros técnicos. Histórico digital acessível.
              </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </div>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </section>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* CTA */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <section className="section-padding bg-primary">
        <div className="container-wedo text-center">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Solicitar Proposta PCM
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            Entre em contato para uma avaliação personalizada da sua cozinha profissional. Atendemos todo o estado de Goiás e Distrito Federal.
          </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <a
            href={ctaUrl}
import { useSiteSettings } from "@/hooks/useSiteSettings";
            target="_blank"
            rel="noopener noreferrer"
import { useSiteSettings } from "@/hooks/useSiteSettings";
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
import { useSiteSettings } from "@/hooks/useSiteSettings";
            Acessar Atendimento
            <ArrowRight className="w-6 h-6" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </a>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </section>
    </Layout>
import { useSiteSettings } from "@/hooks/useSiteSettings";
  );
}
