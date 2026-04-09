import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logoWedo from "@/assets/logo-wedo-full.jpg";
import { useSiteSettings } from "@/hooks/useSiteSettings";


import { useSiteSettings } from "@/hooks/useSiteSettings";
interface NavItem {
  label: string;
import { useSiteSettings } from "@/hooks/useSiteSettings";
  href?: string;
  children?: { label: string; href: string }[];
import { useSiteSettings } from "@/hooks/useSiteSettings";
}

import { useSiteSettings } from "@/hooks/useSiteSettings";
const navItems: NavItem[] = [
  {
import { useSiteSettings } from "@/hooks/useSiteSettings";
    label: "Soluções",
    children: [
import { useSiteSettings } from "@/hooks/useSiteSettings";
      { label: "Manutenção Preventiva", href: "/contratos-pcm" },
      { label: "Manutenção Corretiva", href: "/contratos-pcm" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
      { label: "Contratos PCM", href: "/contratos-pcm" },
      { label: "Refrigeração Comercial", href: "/manutencao-camaras-frias" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
      { label: "Câmaras Frias", href: "/manutencao-camaras-frias" },
      { label: "Instalação Técnica", href: "/cozinhas-profissionais" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
      { label: "Higienização Industrial", href: "/higienizacao-coifas" },
      { label: "Locação Técnica", href: "/cozinhas-profissionais" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  {
    label: "Principais Fabricantes",
import { useSiteSettings } from "@/hooks/useSiteSettings";
    children: [
      { label: "Rational", href: "/assistencia-tecnica-rational" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
      { label: "Hobart", href: "/assistencia-tecnica-hobart" },
      { label: "Robot Coupe", href: "/assistencia-tecnica-robot-coupe" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
      { label: "Vulcan", href: "/assistencia-tecnica-vulcan" },
      { label: "Irinox", href: "/assistencia-tecnica-irinox" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
      { label: "Prática", href: "/assistencia-tecnica-pratica" },
      { label: "Tramontina", href: "/assistencia-tecnica-tramontina" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
    ],
  },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  { label: "Clientes", href: "/clientes" },
  { label: "Sobre", href: "/sobre" },
import { useSiteSettings } from "@/hooks/useSiteSettings";
  { label: "Locais de Atendimento", href: "/locais-atendimento" },
];
import { useSiteSettings } from "@/hooks/useSiteSettings";

export default function Header() {
import { useSiteSettings } from "@/hooks/useSiteSettings";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
import { useSiteSettings } from "@/hooks/useSiteSettings";
  const location = useLocation();

import { useSiteSettings } from "@/hooks/useSiteSettings";
  const isActive = (href: string) => location.pathname === href;

import { useSiteSettings } from "@/hooks/useSiteSettings";
  return (
    <header className="header-wedo">
import { useSiteSettings } from "@/hooks/useSiteSettings";
      <div className="container-wedo">
        <div className="flex items-center justify-between h-20">
import { useSiteSettings } from "@/hooks/useSiteSettings";
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <img
              src={logoWedo}
import { useSiteSettings } from "@/hooks/useSiteSettings";
              alt="WeDo - Sim, nós fazemos!"
              className="h-14 w-auto"
import { useSiteSettings } from "@/hooks/useSiteSettings";
              loading="eager"
            />
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </Link>

import { useSiteSettings } from "@/hooks/useSiteSettings";
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            {navItems.map((item) => (
              <div
import { useSiteSettings } from "@/hooks/useSiteSettings";
                key={item.label}
                className="relative"
import { useSiteSettings } from "@/hooks/useSiteSettings";
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
import { useSiteSettings } from "@/hooks/useSiteSettings";
              >
                {item.children ? (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <>
                    <button
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      className="nav-link-wedo flex items-center gap-1.5"
                    >
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      {item.label}
                      <ChevronDown 
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === item.label ? "rotate-180" : ""
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        }`} 
                      />
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    </button>
                    {openDropdown === item.label && (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      <div className="dropdown-wedo">
                        <div className="dropdown-wedo-content">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          {item.children.map((child) => (
                            <Link
import { useSiteSettings } from "@/hooks/useSiteSettings";
                              key={child.href}
                              to={child.href}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                              className="dropdown-wedo-item"
                            >
import { useSiteSettings } from "@/hooks/useSiteSettings";
                              {child.label}
                            </Link>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          ))}
                        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      </div>
                    )}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  </>
                ) : (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                  <Link
                    to={item.href!}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    className={`nav-link-wedo ${isActive(item.href!) ? "active" : ""}`}
                  >
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    {item.label}
                  </Link>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                )}
              </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
            ))}
          </nav>
import { useSiteSettings } from "@/hooks/useSiteSettings";

          {/* CTA Desktop */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <a
            href={ctaUrl}
import { useSiteSettings } from "@/hooks/useSiteSettings";
            target="_blank"
            rel="noopener noreferrer"
import { useSiteSettings } from "@/hooks/useSiteSettings";
            className="hidden lg:inline-flex btn-wedo"
          >
import { useSiteSettings } from "@/hooks/useSiteSettings";
            Acessar Atendimento
          </a>
import { useSiteSettings } from "@/hooks/useSiteSettings";

          {/* Mobile Menu Button */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
          <button
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted"
import { useSiteSettings } from "@/hooks/useSiteSettings";
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
import { useSiteSettings } from "@/hooks/useSiteSettings";
          >
            {mobileMenuOpen ? (
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <X className="w-6 h-6" />
            ) : (
import { useSiteSettings } from "@/hooks/useSiteSettings";
              <Menu className="w-6 h-6 text-accent" />
            )}
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </button>
        </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";

        {/* Mobile Navigation */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-primary z-50 animate-fade-in">
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <nav className="py-6 px-4 space-y-2">
              {navItems.map((item) => (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                <div key={item.label}>
                  {item.children ? (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <div>
                      <button
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full px-4 py-4 text-base font-medium text-primary-foreground hover:text-accent rounded-lg"
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      >
                        {item.label}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        <ChevronDown 
                          className={`w-5 h-5 transition-transform duration-200 ${
import { useSiteSettings } from "@/hooks/useSiteSettings";
                            openDropdown === item.label ? "rotate-180" : ""
                          }`} 
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        />
                      </button>
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      {openDropdown === item.label && (
                        <div className="pl-4 py-2 space-y-1 bg-secondary/50 rounded-lg mx-2">
import { useSiteSettings } from "@/hooks/useSiteSettings";
                          {item.children.map((child) => (
                            <Link
import { useSiteSettings } from "@/hooks/useSiteSettings";
                              key={child.href}
                              to={child.href}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-4 py-3 text-sm text-primary-foreground/80 hover:text-accent"
import { useSiteSettings } from "@/hooks/useSiteSettings";
                            >
                              {child.label}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                            </Link>
                          ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                        </div>
                      )}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    </div>
                  ) : (
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    <Link
                      to={item.href!}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-4 text-base font-medium text-primary-foreground hover:text-accent rounded-lg"
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    >
                      {item.label}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                    </Link>
                  )}
import { useSiteSettings } from "@/hooks/useSiteSettings";
                </div>
              ))}
import { useSiteSettings } from "@/hooks/useSiteSettings";
            </nav>
            {/* CTA Mobile fixo no bottom */}
import { useSiteSettings } from "@/hooks/useSiteSettings";
            <div className="absolute bottom-8 left-4 right-4">
              <a
import { useSiteSettings } from "@/hooks/useSiteSettings";
                href={ctaUrl}
                target="_blank"
import { useSiteSettings } from "@/hooks/useSiteSettings";
                rel="noopener noreferrer"
                className="btn-wedo w-full justify-center text-lg py-4"
import { useSiteSettings } from "@/hooks/useSiteSettings";
              >
                Acessar Atendimento
import { useSiteSettings } from "@/hooks/useSiteSettings";
              </a>
            </div>
import { useSiteSettings } from "@/hooks/useSiteSettings";
          </div>
        )}
import { useSiteSettings } from "@/hooks/useSiteSettings";
      </div>
    </header>
import { useSiteSettings } from "@/hooks/useSiteSettings";
  );
}
