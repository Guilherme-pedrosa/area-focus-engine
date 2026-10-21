import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroKitchen from "@/assets/cozinha-tramontina-rational.webp";
import "./home.css";

const services = [
  {
    title: "Assistência técnica",
    description: "Diagnóstico e manutenção de equipamentos de cocção, refrigeração, lavagem e preparo.",
    detail: "Manutenção corretiva e preventiva",
    href: "/assistencia-multimarcas",
  },
  {
    title: "Contratos de manutenção",
    description: "Planejamento das visitas, prioridades por equipamento e acompanhamento do histórico técnico.",
    detail: "Cuidado contínuo com a operação",
    href: "/contratos-pcm",
  },
  {
    title: "Peças e componentes",
    description: "Identificação da peça conforme a marca, o modelo e a necessidade do equipamento.",
    detail: "Suporte para a reposição correta",
    href: "/pecas-originais",
  },
  {
    title: "Limpeza de coifas",
    description: "Avaliação e higienização do sistema de exaustão, com escopo definido para cada cozinha.",
    detail: "Coifas, filtros e exaustão",
    href: "/limpeza-de-coifas",
  },
];

const brands = [
  { name: "Rational", file: "rational.png" },
  { name: "Hobart", file: "hobart.png" },
  { name: "Prática", file: "pratica.png" },
  { name: "Unox", file: "unox.png" },
  { name: "Irinox", file: "irinox.png" },
];

const equipmentGroups = [
  { name: "Cocção", detail: "Fornos, fogões e caldeirões" },
  { name: "Refrigeração", detail: "Câmaras frias, balcões e refrigeradores" },
  { name: "Lavagem", detail: "Lavadoras de louças e utensílios" },
  { name: "Preparo", detail: "Misturadores, processadores e liquidificadores" },
];

const serviceSteps = [
  { title: "Diagnóstico", detail: "Avaliação técnica e registro das condições do equipamento." },
  { title: "Orçamento e aprovação", detail: "Apresentação dos serviços e das peças necessários para sua decisão." },
  { title: "Execução", detail: "Separação das peças e realização do serviço conforme o escopo aprovado." },
  { title: "Registro do atendimento", detail: "Relatório técnico com os serviços realizados e orientações para a operação." },
];

export default function HomeContent() {
  return (
    <>
      <section className="wd-home-hero" aria-labelledby="wd-home-title">
        <div className="wd-container wd-home-hero-grid">
          <div className="wd-home-hero-heading">
            <p className="wd-kicker">WeDo · Goiás e Distrito Federal</p>
            <h1 id="wd-home-title">Assistência técnica para cozinhas profissionais.</h1>
          </div>
          <div className="wd-home-hero-copy">
            <p className="wd-home-hero-description">
              Manutenção, contratos preventivos e peças para os equipamentos que fazem parte da sua operação.
            </p>
            <div className="wd-home-actions">
              <a className="wd-button" href="#contato">Solicitar atendimento <ArrowUpRight size={18} aria-hidden="true" /></a>
              <a className="wd-text-link" href="#servicos">Conhecer os serviços <ArrowRight size={18} aria-hidden="true" /></a>
            </div>
            <p className="wd-home-coverage">Atendimento a restaurantes, hotéis e cozinhas institucionais.</p>
          </div>
          <figure className="wd-home-hero-photo wd-home-hero-photo-wide">
            <img
              src={heroKitchen}
              alt="Linha de cocção Tramontina e forno combinado Rational iCombi Pro sob coifa de exaustão"
              width="1599"
              height="900"
              {...{ fetchpriority: "high" }}
              decoding="async"
            />
            <figcaption>Imagem ilustrativa dos equipamentos atendidos.</figcaption>
          </figure>
        </div>
      </section>

      <section className="wd-home-brands wd-container" aria-label="Atendimento multimarcas">
        <p>Assistência<br /><strong>multimarcas</strong><br /><Link className="wd-home-all-brands" to="/marcas-e-equipamentos">Ver todas as marcas ↗</Link></p>
        <ul>
          {brands.map((brand) => (
            <li key={brand.name}>
              <img src={`/images/institucional/${brand.file}`} alt={brand.name} width="140" height="64" decoding="async" />
            </li>
          ))}
        </ul>
      </section>

      <section id="servicos" className="wd-home-services wd-container" aria-labelledby="wd-home-services-title">
        <div className="wd-home-section-heading">
          <div>
            <p className="wd-kicker">Nossos serviços</p>
            <h2 id="wd-home-services-title">O suporte que sua<br className="wd-home-desktop-break" /> cozinha precisa.</h2>
          </div>
          <p>Da manutenção pontual ao acompanhamento preventivo, cada serviço começa pelo entendimento da sua operação.</p>
        </div>
        <div className="wd-home-service-list">
          {services.map((service) => (
            <Link className="wd-home-service" key={service.href} to={service.href}>
              <div className="wd-home-service-name">
                <h3>{service.title}</h3>
                <span>{service.detail}</span>
              </div>
              <p>{service.description}</p>
              <ArrowUpRight size={26} strokeWidth={1.4} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="wd-home-equipment" aria-labelledby="wd-home-equipment-title">
        <div className="wd-container">
          <div className="wd-home-equipment-heading">
            <p className="wd-kicker">Equipamentos</p>
            <h2 id="wd-home-equipment-title">Suporte nas diferentes etapas da cozinha.</h2>
          </div>
          <ul className="wd-home-equipment-list">
            {equipmentGroups.map((equipment) => (
              <li key={equipment.name}>
                <h3>{equipment.name}</h3>
                <p>{equipment.detail}</p>
              </li>
            ))}
          </ul>
          <Link className="wd-text-link" to="/assistencia-multimarcas">Consultar atendimento para meu equipamento <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="wd-home-process wd-container" aria-labelledby="wd-home-process-title">
        <figure className="wd-home-process-photo">
          <img
            src="/images/institucional/equipe-administrativa-original.webp"
            alt="Equipe administrativa da WeDo acompanhando os atendimentos"
            width="1440"
            height="1080"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Acompanhamento dos atendimentos pela equipe WeDo.</figcaption>
        </figure>
        <div className="wd-home-process-copy">
          <p className="wd-kicker">Como trabalhamos</p>
          <h2 id="wd-home-process-title">Manutenção com acompanhamento do início ao fim.</h2>
          <p className="wd-home-process-intro">Você acompanha o que precisa ser feito, aprova o orçamento e recebe o registro do atendimento.</p>
          <ol>
            {serviceSteps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </li>
            ))}
          </ol>
          <Link className="wd-text-link" to="/sobre">Conheça a WeDo <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}
