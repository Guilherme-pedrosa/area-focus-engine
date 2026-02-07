import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-tecnico-wedo.jpg";

const LINKTREE_URL = "https://linktr.ee/wedocorp";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Técnico WeDo realizando manutenção em cozinha industrial"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Overlay azul industrial */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Badge Parceiro Autorizado - canto superior direito */}
      <div className="absolute top-8 right-8 z-20 hidden md:block">
        <div className="badge-authorized">
          <CheckCircle className="w-5 h-5 text-destructive" />
          <span>Parceiro Autorizado <span className="text-destructive">Rational</span></span>
        </div>
      </div>

      {/* Content */}
      <div className="container-wedo relative z-10 section-padding">
        <div className="max-w-3xl">
          {/* H1 Industrial Direto */}
          <h1 className="title-hero mb-6 animate-slide-up">
            Manutenção de Cozinhas Industriais<br />
            para Operações que Não Podem Parar.<br />
            Goiás e DF.
          </h1>

          {/* Subtítulo técnico direto */}
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Falhas em câmaras frias, fornos e equipamentos críticos impactam produção, segurança e custos.<br />
            A WeDo atua com técnicos certificados, processos auditáveis e manutenção estruturada.
          </p>

          {/* Badge mobile */}
          <div className="md:hidden mb-8 animate-slide-up" style={{ animationDelay: "0.15s" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-md text-sm font-medium">
              <CheckCircle className="w-4 h-4 text-accent" />
              Parceiro Autorizado Rational
            </div>
          </div>

          {/* CTA Verde Limão */}
          <a
            href={LINKTREE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wedo-hero animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Acessar Atendimento
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
