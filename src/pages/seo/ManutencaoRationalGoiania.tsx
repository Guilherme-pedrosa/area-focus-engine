import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LINKTREE_URL = "https://linktr.ee/wedocorp";

export default function ManutencaoRationalGoiania() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Manutenção Rational Goiânia | Assistência Técnica Autorizada</title>
        <meta name="description" content="Assistência técnica Rational autorizada em Goiânia. Manutenção iCombi Pro, iCombi Classic, iVario. Técnicos certificados." />
        <link rel="canonical" href="https://wedocorp.com/servicos-local/manutencao-rational-goiania" />
      </Helmet>

      <div className="container-wedo section-padding">
        <nav className="text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span>Serviços</span>
          <span className="mx-2">/</span>
          <span>Manutenção Rational em Goiânia</span>
        </nav>

        <h1 className="title-hero text-secondary mb-6">Manutenção Rational em Goiânia — Parceiro Autorizado</h1>
        
        <div className="prose prose-lg max-w-4xl">
          <p className="text-lg text-muted-foreground mb-6">
            Parceiro autorizado Rational em Goiânia com técnicos certificados pela fábrica. Manutenção especializada em iCombi Pro, iCombi Classic e iVario.
          </p>

          <a href={LINKTREE_URL} target="_blank" rel="noopener noreferrer" className="btn-wedo inline-flex items-center gap-2 mb-12">
            Acessar Atendimento <ArrowRight className="w-5 h-5" />
          </a>

          <h3 className="font-heading font-bold text-xl mt-10 mb-4">Páginas relacionadas:</h3>
          <ul className="space-y-2">
            <li><Link to="/assistencia-tecnica-rational" className="text-primary hover:underline">Assistência Técnica Rational</Link></li>
            <li><Link to="/sobre" className="text-primary hover:underline">Sobre a WeDo</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
