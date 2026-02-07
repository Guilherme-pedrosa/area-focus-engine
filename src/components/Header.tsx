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
    label: "Soluções",
    children: [
      { label: "Manutenção Preventiva", href: "/contratos-pcm" },
      { label: "Manutenção Corretiva", href: "/contratos-pcm" },
      { label: "Contratos PCM", href: "/contratos-pcm" },
      { label: "Refrigeração Comercial", href: "/manutencao-camaras-frias" },
      { label: "Câmaras Frias", href: "/manutencao-camaras-frias" },
      { label: "Instalação Técnica", href: "/cozinhas-profissionais" },
      { label: "Higienização Industrial", href: "/higienizacao-coifas" },
      { label: "Locação Técnica", href: "/cozinhas-profissionais" },
    ],
  },
  {
    label: "Principais Fabricantes",
    children: [
      { label: "Rational", href: "/assistencia-tecnica-rational" },
      { label: "Hobart", href: "/assistencia-tecnica-hobart" },
      { label: "Robot Coupe", href: "/assistencia-tecnica-robot-coupe" },
      { label: "Vulcan", href: "/assistencia-tecnica-vulcan" },
      { label: "Irinox", href: "/assistencia-tecnica-irinox" },
      { label: "Prática", href: "/assistencia-tecnica-pratica" },
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
    <header className="header-wedo">
      <div className="container-wedo">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logoWedo}
              alt="WeDo - Sim, nós fazemos!"
              className="h-14 w-auto"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
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
                      className="nav-link-wedo flex items-center gap-1.5"
                    >
                      {item.label}
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`} 
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="dropdown-wedo">
                        <div className="dropdown-wedo-content">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="dropdown-wedo-item"
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
                    className={`nav-link-wedo ${isActive(item.href!) ? "active" : ""}`}
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
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6 text-accent" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-primary z-50 animate-fade-in">
            <nav className="py-6 px-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full px-4 py-4 text-base font-medium text-primary-foreground hover:text-accent rounded-lg"
                      >
                        {item.label}
                        <ChevronDown 
                          className={`w-5 h-5 transition-transform duration-200 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`} 
                        />
                      </button>
                      {openDropdown === item.label && (
                        <div className="pl-4 py-2 space-y-1 bg-secondary/50 rounded-lg mx-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-4 py-3 text-sm text-primary-foreground/80 hover:text-accent"
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
                      className="block px-4 py-4 text-base font-medium text-primary-foreground hover:text-accent rounded-lg"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            {/* CTA Mobile fixo no bottom */}
            <div className="absolute bottom-8 left-4 right-4">
              <a
                href={LINKTREE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wedo w-full justify-center text-lg py-4"
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
