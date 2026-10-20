import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { INSTITUTIONAL_NAV, WEDO_CONTACT } from "@/lib/institutional";

export default function InstitutionalHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const previousPathRef = useRef<string | null>(null);

  useEffect(() => { setMenuOpen(false); }, [location.pathname, location.hash]);

  useEffect(() => {
    if (previousPathRef.current === location.pathname) return;
    previousPathRef.current = location.pathname;
    let anchor = location.hash.slice(1);
    try { anchor = decodeURIComponent(anchor); } catch { /* Preserve malformed anchors as literal IDs. */ }
    const destination = anchor ? document.getElementById(anchor) : null;
    if (destination) {
      destination.scrollIntoView({ block: "start", behavior: "auto" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="wd-header">
      <div className="wd-utility">
        <div className="wd-container wd-utility-inner">
          <span>Cozinhas profissionais · Goiás e Distrito Federal</span>
          <a href={WEDO_CONTACT.channelsHref} target="_blank" rel="noopener noreferrer">{WEDO_CONTACT.channelsLabel} <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="wd-container wd-header-inner">
        <Link className="wd-logo-link" to="/" aria-label="WeDo — página inicial" onClick={() => setMenuOpen(false)}>
          <img src="/images/institucional/logo-wedo.png" alt="WeDo" width="160" height="81" />
        </Link>
        <button
          ref={toggleRef}
          type="button"
          className="wd-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="wd-navigation"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Fechar" : "Menu"}</span>
          <span className="wd-menu-symbol" aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
        <nav id="wd-navigation" className={`wd-navigation${menuOpen ? " wd-navigation-open" : ""}`} aria-label="Navegação principal">
          {INSTITUTIONAL_NAV.map((item) => (
            <NavLink key={item.href} to={item.href} onClick={() => setMenuOpen(false)}>{item.label}</NavLink>
          ))}
          <NavLink className="wd-mobile-coifas" to="/limpeza-de-coifas" onClick={() => setMenuOpen(false)}>Higienização de coifas</NavLink>
          <a className="wd-button wd-header-cta" href={WEDO_CONTACT.channelsHref} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Fale com a equipe <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}
