import { ArrowRight } from "lucide-react";

const LINKTREE_URL = "https://linktr.ee/wedocorp";

export default function CTASection() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-wedo text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Pronto para Profissionalizar a Manutenção?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-10 leading-relaxed">
          Entre em contato para uma avaliação técnica ou um orçamento personalizado para contratos de manutenção preventiva. Nossa equipe especializada está pronta para atender sua empresa em Goiás e Distrito Federal.
        </p>
        <a
          href={LINKTREE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:bg-secondary/90"
        >
          Acessar Atendimento
          <ArrowRight className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
