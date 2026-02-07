import { ArrowRight } from "lucide-react";

const LINKTREE_URL = "https://linktr.ee/wedocorp";

export default function CTASection() {
  return (
    <section className="section-padding bg-accent">
      <div className="container-wedo text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-accent-foreground mb-6">
          Equipamento parado? Fale com a gente.
        </h2>
        <p className="text-lg md:text-xl text-accent-foreground/80 max-w-2xl mx-auto mb-10">
          Atendimento técnico Goiás e Distrito Federal
        </p>
        <a
          href={LINKTREE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wedo-dark"
        >
          Acessar Atendimento
          <ArrowRight className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
