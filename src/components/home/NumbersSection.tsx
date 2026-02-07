import { CheckCircle } from "lucide-react";

const stats = [
  {
    number: "+2.000",
    label: "Clientes atendidos",
  },
  {
    number: "+22",
    label: "Técnicos NR10/12/13",
  },
  {
    number: "15",
    label: "Anos no mercado",
  },
  {
    number: "100%",
    label: "Cobertura Goiás+DF",
  },
];

export default function NumbersSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wedo">
        {/* Grid de números */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="number-impact">{stat.number}</div>
              <div className="number-impact-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Badge de autoridade */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-primary rounded-full font-medium">
            <CheckCircle className="w-5 h-5 text-accent" />
            Parceiro Autorizado Rational desde 2018
          </div>
        </div>
      </div>
    </section>
  );
}
