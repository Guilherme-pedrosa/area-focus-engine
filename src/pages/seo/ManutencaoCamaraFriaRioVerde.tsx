import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useCTASettings } from "@/hooks/useSiteSettings";


export default function ManutencaoCamaraFriaRioVerde() {
  const { ctaUrl, ctaText } = useCTASettings();
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Manutenção de Câmara Fria em Rio Verde | Assistência Técnica Especializada</title>
        <meta name="description" content="Manutenção de câmaras frias em Rio Verde: preventiva, corretiva, todas as marcas. Técnicos certificados, peças originais." />
        <link rel="canonical" href="https://wedocozinhas.com.br/servicos-local/manutencao-camara-fria-rio-verde" />
      </Helmet>

      <div className="container-wedo section-padding">
        <nav className="text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span>Serviços</span>
          <span className="mx-2">/</span>
          <span>Manutenção de Câmara Fria em Rio Verde</span>
        </nav>

        <h1 className="title-hero text-secondary mb-6">Manutenção de Câmara Fria em Rio Verde</h1>
        
        <div className="prose prose-lg max-w-4xl">
          <p className="text-lg text-muted-foreground mb-6">
            A WeDo oferece manutenção especializada em câmaras frias para empresas de Rio Verde. Atendemos restaurantes, supermercados, hotéis, hospitais e indústrias com assistência técnica preventiva e corretiva.
          </p>

          <h2 className="font-heading font-bold text-2xl mt-10 mb-4">Serviços disponíveis em Rio Verde:</h2>
          <ul className="space-y-2 mb-8">
            <li>Manutenção preventiva de câmaras frias</li>
            <li>Manutenção corretiva</li>
            <li>Diagnóstico de falhas</li>
            <li>Troca de compressores</li>
            <li>Recarga de gás refrigerante</li>
            <li>Contratos PCM</li>
          </ul>

          <p className="text-muted-foreground mb-8">
            <strong>Marcas atendidas:</strong> Refrimate, Gelopar, Metalfrio, Polar, True, Hoshizaki e todas as marcas.
          </p>

          <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="btn-wedo inline-flex items-center gap-2 mb-12">
            Solicitar Atendimento <ArrowRight className="w-5 h-5" />
          </a>

          <h3 className="font-heading font-bold text-xl mt-10 mb-4">Páginas relacionadas:</h3>
          <ul className="space-y-2">
            <li><Link to="/manutencao-camaras-frias" className="text-primary hover:underline">Manutenção de Câmaras Frias (página principal)</Link></li>
            <li><Link to="/contratos-pcm" className="text-primary hover:underline">Contratos PCM</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
