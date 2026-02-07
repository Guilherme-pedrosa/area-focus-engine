import { Award, Settings, ClipboardList, Package, Truck, BarChart3 } from "lucide-react";

const diferenciais = [
  {
    icon: Award,
    title: "Parceiro Autorizado RATIONAL",
    description: "Distribuidor e assistência técnica certificada RATIONAL. Treinamento contínuo com a fábrica.",
  },
  {
    icon: Settings,
    title: "Expertise Multimarcas",
    description: "Domínio técnico em todas as principais marcas do mercado. Um único parceiro para toda sua cozinha.",
  },
  {
    icon: ClipboardList,
    title: "Compliance Total",
    description: "Laudos técnicos rastreáveis, certificações NR10/12/13, conformidade RDC 216 ANVISA.",
  },
  {
    icon: Package,
    title: "Estoque Estratégico",
    description: "Peças originais disponíveis para reposição. Redução de downtime operacional.",
  },
  {
    icon: Truck,
    title: "Frota Própria",
    description: "Atendimento ágil sem depender de terceiros. Maior controle de qualidade.",
  },
  {
    icon: BarChart3,
    title: "Gestão de Contratos",
    description: "Relatórios mensais, histórico completo de manutenções, indicadores de performance dos equipamentos.",
  },
];

export default function DiferenciaisSection() {
  return (
    <section className="section-padding">
      <div className="container-wedo">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="title-section">Por Que Escolher a WeDo?</h2>
          <p className="subtitle-section mx-auto">
            Diferenciais que fazem da WeDo a escolha certa para a manutenção da sua operação.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => (
            <div
              key={item.title}
              className="group text-center p-8 rounded-2xl bg-muted/50 hover:bg-card hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
