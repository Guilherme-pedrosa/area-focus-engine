import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import logoWedo from "@/assets/logo-wedo-full.jpg";

const LINKTREE_URL = "https://linktr.ee/wedocorp";

const quickLinks = [
  { label: "Refrigeração Industrial", href: "/manutencao-camaras-frias" },
  { label: "Assistência Rational", href: "/assistencia-tecnica-rational" },
  { label: "Sobre", href: "/sobre" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wedo section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Coluna 1 - Logo + Slogan */}
          <div>
            <img
              src={logoWedo}
              alt="WeDo Logo"
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-lg font-medium leading-relaxed mb-2">
              Refrigeração Industrial. Manutenção Técnica.
            </p>
            <p className="text-primary-foreground/60 text-base">
              Goiás e Distrito Federal
            </p>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-primary-foreground/80 hover:text-accent text-base transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={LINKTREE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent text-base transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato + Badges */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contato</h3>
            <a
              href={LINKTREE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-base font-medium transition-colors mb-4"
            >
              linktr.ee/wedocorp
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-primary-foreground/60 mb-8">
              Atendimento: Goiás e DF
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-primary-foreground/10 rounded text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-accent" />
                Parceiro Rational
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-primary-foreground/10 rounded text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-accent" />
                NR10/12/13
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wedo py-6">
          <p className="text-primary-foreground/50 text-sm text-center">
            © 2026 WeDo Comércio e Importação Ltda
          </p>
        </div>
      </div>
    </footer>
  );
}
