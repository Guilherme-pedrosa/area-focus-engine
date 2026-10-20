import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SchemaOrg from "@/components/SchemaOrg";
import ContactSection from "@/components/institutional/ContactSection";
import "@/components/institutional/about.css";

const principles = [
  {
    title: "Diagnóstico registrado",
    description: "A condição encontrada no equipamento orienta a proposta de manutenção e fica documentada no atendimento.",
  },
  {
    title: "Execução após aprovação",
    description: "Serviços, materiais e condições são apresentados para aprovação antes da execução do escopo.",
  },
  {
    title: "Histórico por equipamento",
    description: "Os registros do trabalho ajudam a acompanhar o que foi realizado e as necessidades de manutenção.",
  },
];

const services = [
  { to: "/assistencia-multimarcas", title: "Assistência técnica", description: "Avaliação e manutenção de equipamentos de cocção, refrigeração, lavagem e preparo." },
  { to: "/contratos-pcm", title: "Contratos de manutenção", description: "Inventário, prioridades e programação de visitas conforme a rotina de cada unidade." },
  { to: "/pecas-originais", title: "Peças e componentes", description: "Identificação, consulta de aplicação e cotação de componentes para equipamentos profissionais." },
  { to: "/limpeza-de-coifas", title: "Limpeza de coifas", description: "Avaliação e higienização dos componentes de exaustão previstos no escopo do serviço." },
];

export default function Sobre() {
  return (
    <Layout variant="institutional">
      <SchemaOrg
        pageTitle="Sobre a WeDo | Manutenção de Equipamentos Industriais | Goiás e DF"
        pageDescription="Conheça a WeDo: assistência técnica e manutenção de equipamentos de cozinhas profissionais em Goiás e Distrito Federal. Diagnóstico, planejamento e registro dos serviços."
      />

      <section className="wd-about-hero">
        <div className="wd-container">
          <nav className="wd-about-breadcrumb" aria-label="Caminho da página">
            <Link to="/">Início</Link><span aria-hidden="true">/</span><span aria-current="page">A WeDo</span>
          </nav>
          <div className="wd-about-hero-grid">
            <div className="wd-about-introduction">
              <p className="wd-kicker">A WeDo</p>
              <h1>Manutenção de cozinhas profissionais é o nosso trabalho.</h1>
              <p className="wd-about-lead">Atendemos operações em Goiás e no Distrito Federal, com assistência técnica, manutenção planejada e fornecimento de peças para os equipamentos da cozinha.</p>
              <a href="#contato" className="wd-button">Falar com a WeDo <span aria-hidden="true">↗</span></a>
            </div>
            <figure className="wd-about-photo wd-about-photo-landscape">
              <img src="/images/institucional/portfolio-equipe-v2.webp" alt="Equipe administrativa da WeDo acompanhando os atendimentos" width="1000" height="750" {...{ fetchpriority: "high" }} decoding="async" />
              <figcaption>Atendimento e acompanhamento administrativo.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="wd-about-work">
        <div className="wd-container wd-about-work-grid">
          <div><p className="wd-kicker">Nosso trabalho</p><h2>Suporte para os equipamentos que mantêm a cozinha em operação.</h2></div>
          <div className="wd-about-work-copy">
            <p>Fornos, fogões, câmaras frias, lavadoras e equipamentos de preparo têm necessidades diferentes. O atendimento começa pela identificação do equipamento e pela avaliação da condição encontrada.</p>
            <p>A partir do diagnóstico, apresentamos o orçamento para aprovação, organizamos os recursos necessários e registramos o serviço realizado. Nos contratos, esse trabalho segue um planejamento definido para a unidade e seus equipamentos.</p>
          </div>
        </div>
      </section>

      <section className="wd-about-principles">
        <div className="wd-container">
          <p className="wd-kicker">Como conduzimos o atendimento</p>
          <h2>Informação clara em cada etapa.</h2>
          <div className="wd-about-principle-grid">
            {principles.map(principle => <article key={principle.title}><h3>{principle.title}</h3><p>{principle.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="wd-about-training" aria-labelledby="wd-training-title">
        <div className="wd-container wd-about-training-grid">
          <div className="wd-about-training-copy">
            <p className="wd-kicker">Desenvolvimento da equipe</p>
            <h2 id="wd-training-title">Treinamento técnico da equipe.</h2>
            <p>O estudo dos componentes e do funcionamento dos equipamentos faz parte do desenvolvimento da nossa equipe técnica.</p>
            <p>Nos encontros presenciais na oficina, compartilhamos conhecimento e revisamos a rotina de diagnóstico aplicada aos atendimentos.</p>
          </div>
          <figure className="wd-about-training-photo">
            <img src="/images/institucional/treinamento-equipe-wedo-real.webp" alt="Equipe técnica da WeDo em treinamento presencial na oficina" width="1440" height="810" loading="lazy" decoding="async" />
            <figcaption>Capacitação técnica da equipe WeDo.</figcaption>
          </figure>
        </div>
      </section>

      <section className="wd-about-services">
        <div className="wd-container wd-about-work-grid">
          <div><p className="wd-kicker">O que fazemos</p><h2>Conheça os serviços da WeDo.</h2><p className="wd-about-services-intro">Consulte o serviço e fale com a nossa equipe sobre a necessidade da sua operação.</p></div>
          <div className="wd-about-service-list">
            {services.map(service => <Link to={service.to} key={service.to}><div><h3>{service.title}</h3><p>{service.description}</p></div><span aria-hidden="true">↗</span></Link>)}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
