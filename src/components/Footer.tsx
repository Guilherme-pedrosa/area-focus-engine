import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LINKTREE_URL = "https://linktr.ee/wedocorp";
const LOGO_URL = "https://www.genspark.ai/api/files/s/0neoBBK6?token=Z0FBQUFBQnBoMUQ0SkJfNm1adHROYS00RU45VDVmcFRMenVRendrUnFpNE55bGU5ZEhzWHBkRUFLcW9wb05CX2tiOGw3a3VXYllGZC05QjJrY25Fc2FCbnpMVFd5SS04TUNfTjlVRzRkVVZrbHVob3pyaHdBYkJBajVRZlVYcUMwQUd1MktzTm4zRkZjV3QxU2Q1YlFtOGlpNEVnc2NYT2JsaEVQZkY5N2JSTTlXdEtOVU5ZREduU0VMeUQwZzhGdVhkRFZOUXpfbXF4QTZtMlRsZndNa0VhS2hZWjZ5Y0Z3eHlhTnhKaHU2cThDbGhPM19PVkI4ZVVCTVcwckFiNUxzZ01zX3Y3OERXYUZ5WnE5V2dFbG4yWXFtZkJ0ZlBrQ1E9PQ";

const services = [
  { label: "Manutenção de Câmaras Frias", href: "/manutencao-camaras-frias" },
  { label: "Assistência Técnica Rational", href: "/assistencia-tecnica-rational" },
  { label: "Contratos PCM", href: "/contratos-pcm" },
  { label: "Higienização de Coifas", href: "/higienizacao-coifas" },
];

const brands = [
  "Rational",
  "Hobart",
  "Vulcan",
  "Robot Coupe",
  "Irinox",
  "Prática",
];

const institutional = [
  { label: "Sobre", href: "/sobre" },
  { label: "Clientes", href: "/clientes" },
  { label: "Locais de Atendimento", href: "/locais-atendimento" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container-wedo section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Coluna 1 - Sobre */}
          <div>
            <img
              src={LOGO_URL}
              alt="WeDo Logo"
              className="h-10 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-secondary-foreground/80 text-sm leading-relaxed mb-6">
              Assistência técnica especializada em câmaras frias, refrigeração industrial e equipamentos para cozinhas profissionais. Parceiro autorizado Rational. Atendemos Goiás e Distrito Federal.
            </p>
            <a
              href={LINKTREE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground bg-primary/90 hover:bg-primary px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Acessar Atendimento
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Coluna 2 - Serviços */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-secondary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Marcas */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Marcas Atendidas</h3>
            <ul className="space-y-3">
              {brands.map((brand) => (
                <li key={brand}>
                  <span className="text-secondary-foreground/80 text-sm">{brand}</span>
                </li>
              ))}
              <li>
                <Link
                  to="/"
                  className="text-primary hover:text-primary/80 text-sm font-medium transition-colors inline-flex items-center gap-1"
                >
                  Ver todas
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Institucional + Contato */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Institucional</h3>
            <ul className="space-y-3 mb-8">
              {institutional.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-secondary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-heading font-bold text-base mb-4">Contato</h4>
            <a
              href={LINKTREE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
            >
              linktr.ee/wedocorp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container-wedo py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/60 text-sm text-center md:text-left">
            © 2026 WeDo Comércio e Importação Ltda. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/politica-privacidade"
              className="text-secondary-foreground/60 hover:text-secondary-foreground text-sm transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/termos-uso"
              className="text-secondary-foreground/60 hover:text-secondary-foreground text-sm transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
