import { ArrowRight } from "lucide-react";
import { useCTASettings } from "@/hooks/useSiteSettings";

export default function CTASection() {
  const { ctaUrl, ctaText } = useCTASettings();
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
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wedo-dark"
        >
          {ctaText}
          <ArrowRight className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
