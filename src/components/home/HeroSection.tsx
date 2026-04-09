import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-tecnico-wedo.jpg";
import { useSiteSettings } from "@/hooks/useSiteSettings";


import { useSiteSettings } from "@/hooks/useSiteSettings";
export default function HeroSection() {
  return (
import { useSiteSettings } from "@/hooks/useSiteSettings";
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <div className="absolute inset-0 z-0">
        <img
import { useSiteSettings } from "@/hooks/useSiteSettings";
          src={heroImage}
          alt="Técnico WeDo realizando manutenção em cozinha industrial"
import { useSiteSettings } from "@/hooks/useSiteSettings";
          className="w-full h-full object-cover"
          loading="eager"
import { useSiteSettings } from "@/hooks/useSiteSettings";
        />
        {/* Overlay azul industrial */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Badge Parceiro Autorizado - canto superior direito */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <div className="absolute top-8 right-8 z-20 hidden md:block">
        <div className="badge-authorized">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <CheckCircle className="w-5 h-5 text-destructive" />
          <span>Parceiro Autorizado <span className="text-destructive">Rational</span></span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Content */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <div className="container-wedo relative z-10 section-padding">
        <div className="max-w-3xl">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          {/* H1 Industrial Direto */}
          <h1 className="title-hero mb-6 animate-slide-up">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            Manutenção de Cozinhas Profissionais<br />
            para Operações que Não Podem Parar.<br />
import { useSiteSettings } from "@/hooks/useSiteSettings";
            Goiás e DF.
          </h1>
import { useSiteSettings } from "@/hooks/useSiteSettings";

          {/* Subtítulo técnico direto */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Falhas em câmaras frias, fornos e equipamentos críticos impactam produção, segurança e custos.<br />
import { useSiteSettings } from "@/hooks/useSiteSettings";
            A WeDo atua com técnicos certificados, processos auditáveis e manutenção estruturada.
          </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";

          {/* Badge mobile */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div className="md:hidden mb-8 animate-slide-up" style={{ animationDelay: "0.15s" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-md text-sm font-medium">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <CheckCircle className="w-4 h-4 text-accent" />
              Parceiro Autorizado Rational
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </div>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

          {/* CTA Verde Limão */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <a
            href={ctaUrl}
import { useSiteSettings } from "@/hooks/useSiteSettings";
            target="_blank"
            rel="noopener noreferrer"
import { useSiteSettings } from "@/hooks/useSiteSettings";
            className="btn-wedo-hero animate-slide-up"
            style={{ animationDelay: "0.2s" }}
import { useSiteSettings } from "@/hooks/useSiteSettings";
          >
            Acessar Atendimento
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <ArrowRight className="w-5 h-5" />
          </a>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
    </section>
  );
import { useSiteSettings } from "@/hooks/useSiteSettings";
}
