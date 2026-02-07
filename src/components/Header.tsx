import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logoWedo from "@/assets/logo-wedo-full.jpg";

const LINKTREE_URL = "https://linktr.ee/wedocorp";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Serviços",
    children: [
      { label: "Manutenção de Câmaras Frias", href: "/manutencao-camaras-frias" },
      { label: "Assistência Técnica Rational", href: "/assistencia-tecnica-rational" },
      { label: "Manutenção Multimarcas", href: "/cozinhas-industriais" },
      { label: "Contratos de Manutenção (PCM)", href: "/contratos-pcm" },
      { label: "Higienização de Coifas", href: "/higienizacao-coifas" },
    ],
  },
  {
    label: "Especialidades",
    children: [
      { label: "Refrigeração Industrial", href: "/manutencao-camaras-frias" },
      { label: "Cozinhas Profissionais", href: "/cozinhas-industriais" },
      { label: "Manutenção Preventiva", href: "/manutencao-camaras-frias#preventiva" },
      { label: "Manutenção Corretiva", href: "/manutencao-camaras-frias#corretiva" },
    ],
  },
  { label: "Clientes", href: "/clientes" },
  { label: "Sobre", href: "/sobre" },
  { label: "Locais de Atendimento", href: "/locais-atendimento" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-wedo">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logoWedo}
              alt="WeDo - Sim, nós fazemos!"
              className="h-12 w-auto"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <>
                    <button
                      className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors
                        text-foreground hover:text-primary hover:bg-muted`}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-2 z-50">
                        <div className="bg-card rounded-xl shadow-xl border border-border py-2 min-w-[260px]">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block px-5 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href!}
                    className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors
                      ${isActive(item.href!) ? "text-primary" : "text-foreground hover:text-primary hover:bg-muted"}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Desktop */}
          <a
            href={LINKTREE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex btn-wedo"
          >
            Acessar Atendimento
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background animate-slide-down">
            <nav className="py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="pl-4 py-2 space-y-1 bg-muted/50 rounded-lg mx-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href!}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="px-4 pb-4">
              <a
                href={LINKTREE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wedo w-full justify-center"
              >
                Acessar Atendimento
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
