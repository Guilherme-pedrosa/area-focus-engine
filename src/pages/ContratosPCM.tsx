import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingDown, 
  Zap, 
  Clock, 
  Flame, 
  Thermometer, 
  ChefHat,
  Snowflake,
  UtensilsCrossed,
  ShieldCheck
} from "lucide-react";
import { useCTASettings } from "@/hooks/useSiteSettings";


const categorias = [
  {
    icon: Flame,
    titulo: "Fogões Profissionais",
    items: [
      "Inspeção de mangueiras, regulador e válvulas",
      "Limpeza e descarbonização de queimadores",
      "Calibração de bicos injetores",
      "Tratamento antiferrugem",
    ],
  },
  {
    icon: Snowflake,
    titulo: "Refrigeração",
    items: [
      "Balcões refrigerados, freezers e refrigeradores",
      "Ajuste de portas, dobradiças e vedação",
      "Limpeza de condensador e evaporador",
      "Verificação de controlador digital e sensores",
    ],
  },
  {
    icon: Thermometer,
    titulo: "Câmaras Frias",
    items: [
      "Manutenção do sistema de refrigeração",
      "Verificação de pressostatos e degelo automático",
      "Detecção de vazamentos de fluido",
      "Revisão de vedação e cortinas plásticas",
    ],
  },
  {
    icon: ChefHat,
    titulo: "Caldeiras e Basculantes",
    items: [
      "Testes de estanqueidade (água e gás)",
      "Regulagem de queimadores e combustão",
      "Verificação de manômetros e válvulas de segurança",
      "Lubrificação de sistemas mecânicos",
    ],
  },
  {
    icon: UtensilsCrossed,
    titulo: "Lava-Louças Profissionais",
    items: [
      "Inspeção visual e testes elétricos",
      "Limpeza de braços de lavagem e filtros",
      "Verificação de bombas, pressão e temperaturas",
      "Teste de sensores e dispositivos de segurança",
    ],
  },
  {
    icon: Zap,
    titulo: "Equipamentos de Aquecimento",
    items: [
      "Fornos, estufas e pass-through",
      "Teste de resistências e termostatos",
      "Inspeção elétrica e isolamento",
      "Ajuste de boiler e sistemas de segurança",
    ],
  },
];

const equipamentosBancada = [
  "Batedeiras",
  "Processadores",
  "Liquidificadores",
  "Cortadores de frios",
  "Moedores",
  "Amassadeiras",
];

const beneficios = [
  { icon: TrendingDown, valor: "Até 76%", label: "de redução em custos de manutenção" },
  { icon: Zap, valor: "Até 25%", label: "de economia de energia elétrica" },
  { icon: Clock, valor: "+35%", label: "de aumento na vida útil dos equipamentos" },
];

const resultados = [
  { valor: "118+", label: "Serviços contratuais executados" },
  { valor: "68%", label: "Redução em chamadas emergenciais" },
  { valor: "R$9.604", label: "Economia mensal média por rede" },
];

export default function ContratosPCM() {
  const { ctaUrl, ctaText } = useCTASettings();
  return (
    <Layout>
      <Helmet>
        <title>Contratos PCM | Manutenção Preventiva Cozinha Profissional | WeDo</title>
        <meta name="description" content="Contratos de manutenção preventiva para cozinhas profissionais completas. Fogões, refrigeração, câmaras frias, lava-louças e mais. Reduza até 76% dos custos." />
        <link rel="canonical" href="https://wedocorp.com/contratos-pcm" />
      </Helmet>

      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding">
        <div className="container-wedo">
          <div className="max-w-4xl">
            <nav className="text-sm text-secondary-foreground/60 mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span>Contratos PCM</span>
            </nav>
            <h1 className="title-hero text-primary-foreground mb-6">
              Contratos PCM — Manutenção Preventiva para Cozinha Profissional Completa
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-3xl">
              Cuidado completo para todos os equipamentos da sua cozinha. Checklists técnicos específicos, equipe certificada em NR10, NR12, NR13 e NBR 5410, e resultados comprovados com até 76% de redução de custos.
            </p>
          </div>
        </div>
      </section>

      {/* Resultados Comprovados */}
      <section className="section-padding bg-primary">
        <div className="container-wedo">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground text-center mb-10">
            Resultados Comprovados em Redes de Restaurantes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {resultados.map((r) => (
              <div key={r.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{r.valor}</div>
                <p className="text-primary-foreground/80">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="section-padding">
        <div className="container-wedo">
          <h2 className="title-section text-center mb-12">Benefícios Mensuráveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {beneficios.map((b) => (
              <div key={b.label} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{b.valor}</div>
                <p className="text-muted-foreground">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorias de Equipamentos */}
      <section className="section-padding bg-muted">
        <div className="container-wedo">
          <h2 className="title-section text-center mb-4">Equipamentos Atendidos</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Desenvolvemos protocolos específicos para cada categoria de equipamento, garantindo que nenhum detalhe seja negligenciado.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorias.map((cat) => (
              <div
                key={cat.titulo}
                className="bg-card rounded-2xl p-6 shadow hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <cat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-4">{cat.titulo}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipamentos de Bancada */}
      <section className="section-padding">
        <div className="container-wedo">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="title-section mb-6">Equipamentos de Bancada</h2>
              <p className="text-muted-foreground mb-8">
                Batedeiras, processadores, liquidificadores e outros equipamentos de bancada são fundamentais no dia a dia da sua cozinha. Nossa manutenção garante que funcionem perfeitamente quando você precisar.
              </p>
              <div className="flex flex-wrap gap-3">
                {equipamentosBancada.map((eq) => (
                  <span
                    key={eq}
                    className="px-4 py-2 bg-muted rounded-full text-sm font-medium"
                  >
                    {eq}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl mb-6">O que incluímos</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Verificação elétrica e segurança</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Higienização técnica especializada</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Lubrificação de partes móveis</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Ajuste de correias e retentores</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Revisão de botões e botoeiras de emergência</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bancadas e Carrinhos Inox */}
      <section className="section-padding bg-muted">
        <div className="container-wedo">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="title-section mb-6">Bancadas e Carrinhos em Aço Inox</h2>
            <p className="text-muted-foreground mb-8">
              Estruturas em aço inox também precisam de manutenção preventiva para garantir durabilidade, higiene e segurança no ambiente de trabalho.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-card rounded-xl p-4 text-center">
                <ShieldCheck className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-sm font-medium">Tratamento Antiferrugem</span>
              </div>
              <div className="bg-card rounded-xl p-4 text-center">
                <ShieldCheck className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-sm font-medium">Limpeza Técnica</span>
              </div>
              <div className="bg-card rounded-xl p-4 text-center">
                <ShieldCheck className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-sm font-medium">Manutenção de Rodízios</span>
              </div>
              <div className="bg-card rounded-xl p-4 text-center">
                <ShieldCheck className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-sm font-medium">Verificação Estrutural</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-padding">
        <div className="container-wedo">
          <h2 className="title-section text-center mb-12">Por que Escolher a WeDo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Protocolos Específicos</h3>
              <p className="text-muted-foreground text-sm">
                Checklists detalhados para cada tipo de equipamento, garantindo inspeção completa e padronizada.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Equipe Certificada</h3>
              <p className="text-muted-foreground text-sm">
                Técnicos com certificações em NR10, NR12, NR13, NBR 5410 e treinamento contínuo.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Relatórios Detalhados</h3>
              <p className="text-muted-foreground text-sm">
                Documentação completa com fotos e parâmetros técnicos. Histórico digital acessível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wedo text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Solicitar Proposta PCM
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Entre em contato para uma avaliação personalizada da sua cozinha profissional. Atendemos todo o estado de Goiás e Distrito Federal.
          </p>
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Acessar Atendimento
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
