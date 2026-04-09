import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";


import { useSiteSettings } from "@/hooks/useSiteSettings";
export default function ManutencaoRationalAnapolis() {
  return (
import { useSiteSettings } from "@/hooks/useSiteSettings";
    <div className="min-h-screen bg-background">
      <Helmet>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <title>Manutenção Rational Anápolis | Assistência Técnica Autorizada iCombi Pro</title>
        <meta name="description" content="Assistência técnica Rational autorizada em Anápolis. Manutenção iCombi Pro, iCombi Classic, iVario. Parceiro oficial, técnicos certificados." />
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <link rel="canonical" href="https://wedocorp.com/servicos-local/manutencao-rational-anapolis" />
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
          <span>Manutenção Rational em Anápolis</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </nav>

import { useSiteSettings } from "@/hooks/useSiteSettings";
        <h1 className="title-hero text-secondary mb-6">Manutenção Rational em Anápolis — Parceiro Autorizado</h1>
        
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="prose prose-lg max-w-4xl">
          <p className="text-lg text-muted-foreground mb-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            A WeDo é parceiro autorizado Rational em Anápolis, oferecendo assistência técnica especializada para equipamentos iCombi Pro, iCombi Classic e iVario. Nossa equipe é certificada pela fábrica e utiliza apenas peças originais.
          </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";

          <h2 className="font-heading font-bold text-2xl mt-10 mb-4">Equipamentos atendidos:</h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <ul className="space-y-2 mb-8">
            <li>iCombi Pro (todas as versões)</li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <li>iCombi Classic</li>
            <li>iVario Pro</li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <li>Sistemas de cocção combinados</li>
          </ul>
import { useSiteSettings } from "@/hooks/useSiteSettings";

          <h2 className="font-heading font-bold text-2xl mt-10 mb-4">Serviços especializados:</h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <ul className="space-y-2 mb-8">
            <li>Manutenção preventiva programada</li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <li>Calibração de sensores</li>
            <li>Atualização de software</li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <li>Troca de componentes originais</li>
            <li>Limpeza técnica profunda</li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </ul>

import { useSiteSettings } from "@/hooks/useSiteSettings";
          <p className="text-muted-foreground mb-8">
            <strong>Localização:</strong> Anápolis e região (Nerópolis, Petrolina de Goiás, Campo Limpo de Goiás).
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </p>

import { useSiteSettings } from "@/hooks/useSiteSettings";
          <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="btn-wedo inline-flex items-center gap-2 mb-12">
            Acessar Atendimento <ArrowRight className="w-5 h-5" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </a>

import { useSiteSettings } from "@/hooks/useSiteSettings";
          <h3 className="font-heading font-bold text-xl mt-10 mb-4">Páginas relacionadas:</h3>
          <ul className="space-y-2">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <li><Link to="/assistencia-tecnica-rational" className="text-primary hover:underline">Assistência Técnica Rational (página principal)</Link></li>
            <li><Link to="/sobre" className="text-primary hover:underline">Sobre a WeDo</Link></li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </ul>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </div>
    </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
  );
}
