import { Award, MapPin, UserCheck, Package, ClipboardCheck, Truck } from "lucide-react";

const badges = [
  {
    icon: Award,
    title: "Parceiro Autorizado RATIONAL",
    description: "Assistência técnica certificada com técnicos treinados pela fábrica",
  },
  {
    icon: MapPin,
    title: "Atendimento Regional",
    description: "Goiás e Distrito Federal com equipe especializada",
  },
  {
    icon: UserCheck,
    title: "Técnicos Certificados",
    description: "Equipe capacitada com certificações NR10, NR12, NR13",
  },
  {
    icon: Package,
    title: "Peças Originais",
    description: "Estoque estratégico de peças genuínas multimarcas",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Total",
    description: "Laudos técnicos rastreáveis | RDC 216 | Processos auditáveis para fiscalização",
  },
  {
    icon: Truck,
    title: "Frota Própria",
    description: "Atendimento ágil em Goiás e Distrito Federal",
  },
];

export default function BadgesSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wedo">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="card-wedo flex items-start gap-4 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">
                  {badge.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
