const problems = [
  {
    number: "01",
    title: "Equipamento Parado",
    description: "Forno combinado, lavadora, processador ou câmara fria. Qualquer parada compromete sua operação. Atendemos urgente.",
  },
  {
    number: "02",
    title: "ANVISA na Porta",
    description: "Equipamento sem laudo? Temperatura fora do padrão? Emitimos laudos técnicos rastreáveis NR13 + RDC 216.",
  },
  {
    number: "03",
    title: "Custo Alto de Manutenção",
    description: "Manutenção corretiva cara demais? Contratos PCM reduzem até 40% dos custos com preventiva programada.",
  },
  {
    number: "04",
    title: "Equipamento Sem Peças",
    description: "Peças originais Rational, Hobart, Robot Coupe, Vulcan. Estoque próprio para entrega rápida.",
  },
];

export default function ProblemsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wedo">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="title-section">Problemas que Resolvemos</h2>
          <p className="subtitle-section mx-auto">
            15 anos resolvendo os problemas mais críticos de refrigeração e cozinhas industriais.
          </p>
        </div>

        {/* Grid de Problemas */}
        <div className="grid-problems max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={problem.number}
              className="relative bg-muted rounded-xl p-10 transition-all duration-300 hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Número grande vermelho */}
              <span className="absolute top-6 left-6 text-7xl font-bold text-destructive/20">
                {problem.number}
              </span>
              
              {/* Conteúdo */}
              <div className="relative z-10 pt-12">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
