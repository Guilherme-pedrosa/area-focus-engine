import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";


import { useSiteSettings } from "@/hooks/useSiteSettings";
export default function CamaraFriaNaoGelaAnapolis() {
  return (
import { useSiteSettings } from "@/hooks/useSiteSettings";
    <div className="min-h-screen bg-background">
      <Helmet>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <title>Câmara Fria Não Gela em Anápolis | Diagnóstico e Reparo Técnico</title>
        <meta name="description" content="Sua câmara fria não está gelando em Anápolis? Diagnóstico técnico especializado. Identificamos e corrigimos problemas de refrigeração." />
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <link rel="canonical" href="https://wedocorp.com/problemas/camara-fria-nao-gela-anapolis" />
      </Helmet>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      <div className="container-wedo section-padding">
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <nav className="text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <span className="mx-2">/</span>
          <span>Problemas Técnicos</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <span className="mx-2">/</span>
          <span>Câmara Fria Não Gela em Anápolis</span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </nav>

import { useSiteSettings } from "@/hooks/useSiteSettings";
        <h1 className="title-hero text-secondary mb-6">Câmara Fria Não Gela em Anápolis — Causas e Soluções</h1>
        
import { useSiteSettings } from "@/hooks/useSiteSettings";
        <div className="prose prose-lg max-w-4xl">
          <h2 className="font-heading font-bold text-2xl mt-6 mb-4">Por que sua câmara fria não está gelando?</h2>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          
          <p className="text-muted-foreground mb-4">As principais causas de perda de refrigeração:</p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <ol className="space-y-3 mb-8 list-decimal pl-6">
            <li><strong>Vazamento de gás refrigerante</strong> — Pequenos vazamentos reduzem gradualmente a capacidade.</li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <li><strong>Condensador sujo ou bloqueado</strong> — Acúmulo de sujeira impede a dissipação de calor.</li>
            <li><strong>Compressor com falha</strong> — Desgaste mecânico ou problemas elétricos.</li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <li><strong>Termostato descalibrado</strong> — Sensor de temperatura com leitura incorreta.</li>
          </ol>
import { useSiteSettings } from "@/hooks/useSiteSettings";

          <p className="text-muted-foreground mb-8">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            Nossa equipe técnica realiza diagnóstico completo, identifica a causa raiz e executa o reparo com peças originais. Atendemos Anápolis e região.
          </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";

          <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="btn-wedo inline-flex items-center gap-2 mb-12">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            Solicitar Diagnóstico <ArrowRight className="w-5 h-5" />
          </a>
import { useSiteSettings } from "@/hooks/useSiteSettings";

          <h3 className="font-heading font-bold text-xl mt-10 mb-4">Páginas relacionadas:</h3>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <ul className="space-y-2">
            <li><Link to="/manutencao-camaras-frias" className="text-primary hover:underline">Manutenção de Câmaras Frias</Link></li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <li><Link to="/contratos-pcm" className="text-primary hover:underline">Contratos PCM</Link></li>
          </ul>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
    </div>
  );
import { useSiteSettings } from "@/hooks/useSiteSettings";
}
