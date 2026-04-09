import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useCTASettings } from "@/hooks/useSiteSettings";


export default function CamaraFriaPerdaTemperaturaRioVerde() {
  const { ctaUrl, ctaText } = useCTASettings();
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Câmara Fria com Perda de Temperatura em Rio Verde | Reparo Técnico</title>
        <meta name="description" content="Câmara fria perdendo temperatura em Rio Verde? Diagnóstico e reparo técnico especializado. Evite perdas de estoque." />
        <link rel="canonical" href="https://wedocorp.com/problemas/camara-fria-perda-temperatura-rio-verde" />
      </Helmet>

      <div className="container-wedo section-padding">
        <nav className="text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span>Problemas Técnicos</span>
          <span className="mx-2">/</span>
          <span>Câmara Fria com Perda de Temperatura em Rio Verde</span>
        </nav>

        <h1 className="title-hero text-secondary mb-6">Câmara Fria com Perda de Temperatura em Rio Verde</h1>
        
        <div className="prose prose-lg max-w-4xl">
          <p className="text-lg text-muted-foreground mb-6">
            Se sua câmara fria está perdendo temperatura em Rio Verde, nossa equipe técnica pode ajudar. Diagnóstico preciso e reparo com peças originais.
          </p>

          <p className="text-muted-foreground mb-8">
            Atendemos empresas em Rio Verde e região com manutenção especializada em refrigeração industrial.
          </p>

          <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="btn-wedo inline-flex items-center gap-2 mb-12">
            Solicitar Atendimento <ArrowRight className="w-5 h-5" />
          </a>

          <h3 className="font-heading font-bold text-xl mt-10 mb-4">Páginas relacionadas:</h3>
          <ul className="space-y-2">
            <li><Link to="/manutencao-camaras-frias" className="text-primary hover:underline">Manutenção de Câmaras Frias</Link></li>
            <li><Link to="/contratos-pcm" className="text-primary hover:underline">Contratos PCM</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
