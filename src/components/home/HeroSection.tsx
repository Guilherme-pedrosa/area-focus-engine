import { ArrowRight } from "lucide-react";

const LINKTREE_URL = "https://linktr.ee/wedocorp";
const HERO_IMAGE_URL = "https://www.genspark.ai/api/files/s/ohAjX5s5?token=Z0FBQUFBQnBoMUNPcnhlS1RQbE03ZnN1TUlsUUxnTWJrbUhLVVZiQXpkUm1XRjJuYkJUNFNWcnlrWU5iM2stN201eDNCMmM5c2dLSElhOVlvWjZ5VmdHeFZ1THRObjh5OUpDLWVmMFA3c25hTWhpLWRVaHptMkllbGFaNzBFYnhPSHFmQm81UUNab2lORWkzWXZPVEJWWGdWRGNNbkJfZ2VEV19TT3FQamlveXNPNVlqMnEtbGlGUmxLd0M2UU9ldjRsUXFTQVRqcjl3Ujdad0stX0RmWm1seFpDV1BRUzdPcWVzd2hkWlhZUk9PalViaEJVWkFSVHpYcXpRNTItSDlkNE56TkN6enVxbThqVHNadER6VUJuVks0WHZvX2FTQUE9PQ";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE_URL}
          alt="Técnico WeDo realizando manutenção em câmara fria"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>

      {/* Content */}
      <div className="container-wedo relative z-10 section-padding">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary-foreground rounded-full text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Parceiro Autorizado Rational
          </div>

          {/* H1 */}
          <h1 className="title-hero text-primary-foreground mb-6 animate-slide-up">
            Manutenção de Cozinhas Industriais em Goiás e Distrito Federal
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Assistência técnica multimarcas | Contratos de manutenção | Parceiro Autorizado Rational
          </p>

          {/* Texto principal */}
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
            A WeDo é especialista em manutenção completa de cozinhas profissionais: fornos combinados, lavadoras de louça, processadores, câmaras frias, balcões refrigerados e toda linha de equipamentos para food service.
          </p>

          <p className="text-base text-primary-foreground/70 leading-relaxed mb-10 max-w-2xl animate-slide-up" style={{ animationDelay: "0.3s" }}>
            Desde 2018, atendemos empresas em todo o estado de Goiás e Distrito Federal. Parceiro autorizado RATIONAL, especialistas em Hobart, Vulcan, Robot Coupe, Irinox, Prática, Tramontina e equipamentos de refrigeração de todas as marcas.
          </p>

          {/* CTA */}
          <a
            href={LINKTREE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wedo-hero animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            Fale Conosco
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
