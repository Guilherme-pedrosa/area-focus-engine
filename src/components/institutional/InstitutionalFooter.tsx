import { Link } from "react-router-dom";
import { INSTITUTIONAL_NAV, WEDO_CONTACT } from "@/lib/institutional";

export default function InstitutionalFooter() {
  return (
    <footer className="wd-footer">
      <div className="wd-container wd-footer-grid">
        <div className="wd-footer-company">
          <Link to="/" aria-label="WeDo — página inicial"><img src="/images/institucional/logo-wedo.png" alt="WeDo" width="148" height="75" loading="lazy" /></Link>
          <p>Manutenção, peças e acompanhamento técnico para cozinhas profissionais.</p>
        </div>
        <nav aria-label="Serviços e empresa" className="wd-footer-links">
          <p className="wd-footer-label">Conheça a WeDo</p>
          {INSTITUTIONAL_NAV.map((item) => <Link key={item.href} to={item.href}>{item.label}</Link>)}
          <Link to="/limpeza-de-coifas">Higienização de coifas</Link>
        </nav>
        <div className="wd-footer-contact">
          <p className="wd-footer-label">Vamos conversar</p>
          <a className="wd-text-link" href={WEDO_CONTACT.channelsHref} target="_blank" rel="noopener noreferrer">{WEDO_CONTACT.channelsLabel} <span aria-hidden="true">↗</span></a>
          <p>Atendimento em Goiás e no Distrito Federal.</p>
        </div>
      </div>
      <div className="wd-container wd-footer-bottom">
        <span>© {new Date().getFullYear()} WeDo. Todos os direitos reservados.</span>
        <span>CNPJ 43.572.954/0001-81</span>
      </div>
    </footer>
  );
}
