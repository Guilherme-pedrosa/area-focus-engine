import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import logoWedo from "@/assets/logo-wedo-full.jpg";
import { useSiteSettings } from "@/hooks/useSiteSettings";


import { useSiteSettings } from "@/hooks/useSiteSettings";
const quickLinks = [
  { label: "Refrigeração Industrial", href: "/manutencao-camaras-frias" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  { label: "Assistência Rational", href: "/assistencia-tecnica-rational" },
  { label: "Sobre", href: "/sobre" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
];

import { useSiteSettings } from "@/hooks/useSiteSettings";
export default function Footer() {
  return (
import { useSiteSettings } from "@/hooks/useSiteSettings";
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <div className="container-wedo section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          {/* Coluna 1 - Logo + Slogan */}
          <div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <img
              src={logoWedo}
import { useSiteSettings } from "@/hooks/useSiteSettings";
              alt="WeDo Logo"
              className="h-16 w-auto mb-6 brightness-0 invert"
import { useSiteSettings } from "@/hooks/useSiteSettings";
            />
            <p className="text-primary-foreground/80 text-lg font-medium leading-relaxed mb-2">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              Refrigeração Industrial. Manutenção Técnica.
            </p>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <p className="text-primary-foreground/60 text-base">
              Goiás e Distrito Federal
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </p>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

          {/* Coluna 2 - Links Rápidos */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <div>
            <h3 className="font-bold text-lg mb-6">Links Rápidos</h3>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <ul className="space-y-4">
              {quickLinks.map((item) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <li key={item.href}>
                  <Link
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    to={item.href}
                    className="text-primary-foreground/80 hover:text-accent text-base transition-colors"
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  >
                    {item.label}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  </Link>
                </li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              ))}
              <li>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <a
                  href={ctaUrl}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  target="_blank"
                  rel="noopener noreferrer"
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  className="text-primary-foreground/80 hover:text-accent text-base transition-colors"
                >
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  Contato
                </a>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </li>
            </ul>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>

import { useSiteSettings } from "@/hooks/useSiteSettings";
          {/* Coluna 3 - Contato + Badges */}
          <div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <h3 className="font-bold text-lg mb-6">Contato</h3>
            <a
import { useSiteSettings } from "@/hooks/useSiteSettings";
              href={ctaUrl}
              target="_blank"
import { useSiteSettings } from "@/hooks/useSiteSettings";
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-base font-medium transition-colors mb-4"
import { useSiteSettings } from "@/hooks/useSiteSettings";
            >
              linktr.ee/wedocorp
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <ArrowRight className="w-4 h-4" />
            </a>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <p className="text-primary-foreground/60 mb-8">
              Atendimento: Goiás e DF
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </p>

import { useSiteSettings } from "@/hooks/useSiteSettings";
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-primary-foreground/10 rounded text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-accent" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                Parceiro Rational
              </span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-primary-foreground/10 rounded text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-accent" />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                NR10/12/13
              </span>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </div>
          </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
        </div>
      </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

      {/* Bottom Bar */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <div className="border-t border-primary-foreground/10">
        <div className="container-wedo py-6">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <p className="text-primary-foreground/50 text-sm text-center">
            © 2026 WeDo Comércio e Importação Ltda
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </p>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </div>
    </footer>
import { useSiteSettings } from "@/hooks/useSiteSettings";
  );
}
