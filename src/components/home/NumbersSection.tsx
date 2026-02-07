const numbers = [
  {
    value: "+2.000",
    label: "Clientes Atendidos",
    description: "Restaurantes, hotéis, indústrias e food services",
  },
  {
    value: "+15.000",
    label: "Soluções Entregues",
    description: "Manutenções, instalações e higienizações realizadas",
  },
  {
    value: "6 Anos",
    label: "De Experiência",
    description: "Consolidados no mercado desde 2018",
  },
  {
    value: "+22",
    label: "Colaboradores",
    description: "Técnicos certificados e especializados",
  },
  {
    value: "Regional",
    label: "Goiás e DF",
    description: "Cobertura completa em duas unidades federativas",
  },
];

export default function NumbersSection() {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-wedo">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Resultado que Transforma Operações
          </h2>
          <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-3xl mx-auto">
            Números que refletem nosso compromisso com a excelência técnica e satisfação dos clientes.
          </p>
        </div>

        {/* Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {numbers.map((item, index) => (
            <div
              key={item.label}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                {item.value}
              </div>
              <div className="font-heading font-bold text-lg mb-1">
                {item.label}
              </div>
              <p className="text-sm text-secondary-foreground/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
