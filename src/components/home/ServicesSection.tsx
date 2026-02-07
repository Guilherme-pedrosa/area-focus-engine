import { Link } from "react-router-dom";
import { ArrowRight, Snowflake, ChefHat, Wrench, FileText, Shield, Settings, Sparkles, ShoppingCart, Calendar } from "lucide-react";

const services = [
  {
    icon: Snowflake,
    title: "Manutenção de Câmaras Frias",
    description: "Manutenção preventiva e corretiva especializada. Atendemos todo o estado de Goiás e Distrito Federal.",
    href: "/manutencao-camaras-frias",
  },
  {
    icon: ChefHat,
    title: "Assistência Técnica Rational",
    description: "Manutenção especializada em iCombi Pro, iCombi Classic e iVario. Parceiro autorizado com técnicos certificados pela fábrica.",
    href: "/assistencia-tecnica-rational",
  },
  {
    icon: Wrench,
    title: "Manutenção Multimarcas",
    description: "Hobart, Vulcan, Robot Coupe, Irinox, Prática, Tramontina, Macon, Hoshizaki, Cozil, Fornoflex, Middleby.",
    href: "/cozinhas-industriais",
  },
  {
    icon: FileText,
    title: "Contratos PCM",
    description: "Plano de Controle de Manutenção preventiva. Reduza custos operacionais e aumente a vida útil dos equipamentos.",
    href: "/contratos-pcm",
  },
  {
    icon: Shield,
    title: "Manutenção Preventiva",
    description: "Inspeções programadas, limpezas técnicas, calibrações e troca preventiva de componentes.",
    href: "/manutencao-camaras-frias#preventiva",
  },
  {
    icon: Settings,
    title: "Manutenção Corretiva",
    description: "Assistência técnica para correção de falhas com peças originais e técnicos especializados.",
    href: "/manutencao-camaras-frias#corretiva",
  },
  {
    icon: Sparkles,
    title: "Higienização de Coifas",
    description: "Limpeza técnica de coifas e dutos conforme RDC 216 ANVISA. Compliance total com laudos técnicos rastreáveis.",
    href: "/higienizacao-coifas",
  },
  {
    icon: ShoppingCart,
    title: "Venda de Equipamentos",
    description: "Distribuidor autorizado Rational e fornecedor de equipamentos premium para cozinhas industriais.",
    href: "/sobre",
  },
  {
    icon: Calendar,
    title: "Locação de Equipamentos",
    description: "Locação de lavadoras, fornos, processadores para eventos e operações temporárias.",
    href: "/sobre",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding">
      <div className="container-wedo">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="title-section">Manutenção Completa para Cozinhas Profissionais</h2>
          <p className="subtitle-section mx-auto">
            Do forno combinado à câmara fria: expertise técnica multimarcas para manter sua operação funcionando sem paradas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid-services">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="card-wedo-highlight group animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Saiba Mais
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
