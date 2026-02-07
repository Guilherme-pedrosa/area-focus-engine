import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LINKTREE_URL = "https://linktr.ee/wedocorp";

export default function CamaraFriaNaoGelaAnapolis() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Câmara Fria Não Gela em Anápolis | Diagnóstico e Reparo Técnico</title>
        <meta name="description" content="Sua câmara fria não está gelando em Anápolis? Diagnóstico técnico especializado. Identificamos e corrigimos problemas de refrigeração." />
        <link rel="canonical" href="https://wedocorp.com/problemas/camara-fria-nao-gela-anapolis" />
      </Helmet>

      <div className="container-wedo section-padding">
        <nav className="text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span>Problemas Técnicos</span>
          <span className="mx-2">/</span>
          <span>Câmara Fria Não Gela em Anápolis</span>
        </nav>

        <h1 className="title-hero text-secondary mb-6">Câmara Fria Não Gela em Anápolis — Causas e Soluções</h1>
        
        <div className="prose prose-lg max-w-4xl">
          <h2 className="font-heading font-bold text-2xl mt-6 mb-4">Por que sua câmara fria não está gelando?</h2>
          
          <p className="text-muted-foreground mb-4">As principais causas de perda de refrigeração:</p>
          <ol className="space-y-3 mb-8 list-decimal pl-6">
            <li><strong>Vazamento de gás refrigerante</strong> — Pequenos vazamentos reduzem gradualmente a capacidade.</li>
            <li><strong>Condensador sujo ou bloqueado</strong> — Acúmulo de sujeira impede a dissipação de calor.</li>
            <li><strong>Compressor com falha</strong> — Desgaste mecânico ou problemas elétricos.</li>
            <li><strong>Termostato descalibrado</strong> — Sensor de temperatura com leitura incorreta.</li>
          </ol>

          <p className="text-muted-foreground mb-8">
            Nossa equipe técnica realiza diagnóstico completo, identifica a causa raiz e executa o reparo com peças originais. Atendemos Anápolis e região.
          </p>

          <a href={LINKTREE_URL} target="_blank" rel="noopener noreferrer" className="btn-wedo inline-flex items-center gap-2 mb-12">
            Solicitar Diagnóstico <ArrowRight className="w-5 h-5" />
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
