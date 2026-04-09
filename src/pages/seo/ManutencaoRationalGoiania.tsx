import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";


import { useSiteSettings } from "@/hooks/useSiteSettings";
export default function ManutencaoRationalGoiania() {
  return (
import { useSiteSettings } from "@/hooks/useSiteSettings";
    <div className="min-h-screen bg-background">
      <Helmet>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <title>Manutenção Rational Goiânia | Assistência Técnica Autorizada</title>
        <meta name="description" content="Assistência técnica Rational autorizada em Goiânia. Manutenção iCombi Pro, iCombi Classic, iVario. Técnicos certificados." />
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <link rel="canonical" href="https://wedocorp.com/servicos-local/manutencao-rational-goiania" />
      </Helmet>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      <div className="container-wedo section-padding">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <nav className="text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <span className="mx-2">/</span>
          <span>Serviços</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <span className="mx-2">/</span>
          <span>Manutenção Rational em Goiânia</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </nav>

import { useSiteSettings } from "@/hooks/useSiteSettings";
        <h1 className="title-hero text-secondary mb-6">Manutenção Rational em Goiânia — Parceiro Autorizado</h1>
        
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="prose prose-lg max-w-4xl">
          <p className="text-lg text-muted-foreground mb-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            Parceiro autorizado Rational em Goiânia com técnicos certificados pela fábrica. Manutenção especializada em iCombi Pro, iCombi Classic e iVario.
          </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";

          <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="btn-wedo inline-flex items-center gap-2 mb-12">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            Acessar Atendimento <ArrowRight className="w-5 h-5" />
          </a>
import { useSiteSettings } from "@/hooks/useSiteSettings";

          <h3 className="font-heading font-bold text-xl mt-10 mb-4">Páginas relacionadas:</h3>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <ul className="space-y-2">
            <li><Link to="/assistencia-tecnica-rational" className="text-primary hover:underline">Assistência Técnica Rational</Link></li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <li><Link to="/sobre" className="text-primary hover:underline">Sobre a WeDo</Link></li>
          </ul>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
    </div>
  );
import { useSiteSettings } from "@/hooks/useSiteSettings";
}
