import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useCTASettings } from "@/hooks/useSiteSettings";


export default function ManutencaoRationalAnapolis() {
  const { ctaUrl, ctaText } = useCTASettings();
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Manutenção Rational Anápolis | Assistência Técnica Autorizada iCombi Pro</title>
        <meta name="description" content="Assistência técnica Rational autorizada em Anápolis. Manutenção iCombi Pro, iCombi Classic, iVario. Parceiro oficial, técnicos certificados." />
        <link rel="canonical" href="https://wedocozinhas.com.br/servicos-local/manutencao-rational-anapolis" />
      </Helmet>

      <div className="container-wedo section-padding">
        <nav className="text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span>Serviços</span>
          <span className="mx-2">/</span>
          <span>Manutenção Rational em Anápolis</span>
        </nav>

        <h1 className="title-hero text-secondary mb-6">Manutenção Rational em Anápolis — Parceiro Autorizado</h1>
        
        <div className="prose prose-lg max-w-4xl">
          <p className="text-lg text-muted-foreground mb-6">
            A WeDo é parceiro autorizado Rational em Anápolis, oferecendo assistência técnica especializada para equipamentos iCombi Pro, iCombi Classic e iVario. Nossa equipe é certificada pela fábrica e utiliza apenas peças originais.
          </p>

          <h2 className="font-heading font-bold text-2xl mt-10 mb-4">Equipamentos atendidos:</h2>
          <ul className="space-y-2 mb-8">
            <li>iCombi Pro (todas as versões)</li>
            <li>iCombi Classic</li>
            <li>iVario Pro</li>
            <li>Sistemas de cocção combinados</li>
          </ul>

          <h2 className="font-heading font-bold text-2xl mt-10 mb-4">Serviços especializados:</h2>
          <ul className="space-y-2 mb-8">
            <li>Manutenção preventiva programada</li>
            <li>Calibração de sensores</li>
            <li>Atualização de software</li>
            <li>Troca de componentes originais</li>
            <li>Limpeza técnica profunda</li>
          </ul>

          <p className="text-muted-foreground mb-8">
            <strong>Localização:</strong> Anápolis e região (Nerópolis, Petrolina de Goiás, Campo Limpo de Goiás).
          </p>

          <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="btn-wedo inline-flex items-center gap-2 mb-12">
            {ctaText} <ArrowRight className="w-5 h-5" />
          </a>

          <h3 className="font-heading font-bold text-xl mt-10 mb-4">Páginas relacionadas:</h3>
          <ul className="space-y-2">
            <li><Link to="/assistencia-tecnica-rational" className="text-primary hover:underline">Assistência Técnica Rational (página principal)</Link></li>
            <li><Link to="/sobre" className="text-primary hover:underline">Sobre a WeDo</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
