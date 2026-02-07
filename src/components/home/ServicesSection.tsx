import { Link } from "react-router-dom";
import { ArrowRight, Star, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Cozinhas Profissionais Completas",
    description: "Fornos, lavadoras, processadores, chapas, fritadeiras. Manutenção completa para sua operação. Goiás e DF.",
    href: "/cozinhas-profissionais",
    badge: "⭐ Especialidade #1",
    badgeColor: "bg-accent text-accent-foreground",
    featured: true,
  },
  {
    title: "Parceiro Autorizado Rational",
    description: "Combi Pro, iCombi Classic, iVario. Técnicos certificados pela fábrica. Peças originais.",
    href: "/assistencia-tecnica-rational",
    badge: "✓ Autorizado",
    badgeColor: "bg-destructive text-white",
  },
  {
    title: "Assistência Multimarcas",
    description: "Hobart, Vulcan, Robot Coupe, Irinox, Prática, Tramontina, Macon, Cozil, Unox, Middleby.",
    href: "/cozinhas-profissionais",
  },
  {
    title: "Contratos PCM",
    description: "Redução de 40% custos. Economia 25% energia. Aumento 50% vida útil. Zero paradas.",
    href: "/contratos-pcm",
  },
  {
    title: "Higienização de Coifas",
    description: "Limpeza técnica NR13. RDC 216. Dutos, filtros, exaustão. Laudo rastreável.",
    href: "/higienizacao-coifas",
  },
  {
    title: "Peças Originais",
    description: "Estoque próprio. Entrega rápida Goiás e DF.",
    href: "/sobre",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wedo">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="title-section">Serviços Técnicos</h2>
          <p className="subtitle-section mx-auto">
            Do forno combinado à câmara fria: manutenção completa para sua operação.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className={`group relative overflow-hidden rounded-xl bg-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-up ${
                service.featured ? "md:row-span-2" : ""
              }`}
              style={{ 
                animationDelay: `${index * 0.05}s`,
                minHeight: service.featured ? "400px" : "200px"
              }}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-secondary/60" />
              
              {/* Content */}
              <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                {/* Badge */}
                {service.badge && (
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded text-sm font-bold mb-4 w-fit ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                )}
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-accent font-bold text-sm group-hover:gap-3 transition-all">
                  Ver Detalhes
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
