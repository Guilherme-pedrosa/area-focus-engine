import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQItem[];
  /** Quando true, injeta o schema FAQPage JSON-LD via Helmet. Default: true */
  injectSchema?: boolean;
  className?: string;
}

export default function FAQSection({
  title = "Perguntas Frequentes",
  faqs,
  injectSchema = true,
  className = "",
}: FAQSectionProps) {
  return (
    <section className={`section-padding ${className}`}>
      {injectSchema && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            })}
          </script>
        </Helmet>
      )}
      <div className="container-wedo">
        <div className="max-w-4xl mx-auto">
          <h2 className="title-section mb-8 text-center">{title}</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-card border border-border rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-bold text-lg hover:text-primary transition-colors">
                  {faq.q}
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
