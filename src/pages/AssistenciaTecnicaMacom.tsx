import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ServiceSchema from "@/components/ServiceSchema";
import { getBrandEquipment } from "@/data/equipmentCatalog";
import { WEDO_CONTACT } from "@/lib/institutional";
import "@/components/institutional/service.css";

const equipment = getBrandEquipment("macom");
const description = "Assistência técnica Macom para fogões, chapas, fritadeiras, refrigeradores horizontais e expositores refrigerados em Goiás e DF. Solicite uma avaliação à WeDo.";
const canonical = "https://wedocozinhas.com.br/assistencia-tecnica-macom";

export default function AssistenciaTecnicaMacom() {
  return (
    <Layout variant="institutional">
      <Helmet>
        <title>Assistência técnica Macom em Goiás e DF | WeDo</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Assistência técnica Macom em Goiás e DF | WeDo" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
      </Helmet>
      <ServiceSchema serviceType="Assistência técnica Macom" description={description} slug="assistencia-tecnica-macom" />

      <section className="wd-service-hero">
        <div className="wd-container">
          <nav className="wd-service-breadcrumb" aria-label="Caminho da página">
            <Link to="/">Início</Link><span aria-hidden="true">/</span>
            <Link to="/marcas-e-equipamentos">Marcas e equipamentos</Link><span aria-hidden="true">/</span>
            <span aria-current="page">Macom</span>
          </nav>
          <div className="wd-service-hero-grid">
            <div className="wd-service-introduction">
              <p className="wd-kicker">Manutenção de equipamentos profissionais</p>
              <h1>Assistência técnica Macom em Goiás e DF.</h1>
              <p className="wd-service-lead">Manutenção de equipamentos Macom de cocção e refrigeração. O atendimento começa pela identificação do equipamento e da falha, com avaliação técnica e orçamento para aprovação.</p>
              <a className="wd-button" href={WEDO_CONTACT.channelsHref} target="_blank" rel="noopener noreferrer">Solicitar assistência Macom<span aria-hidden="true">↗</span></a>
              <p className="wd-service-region">Atendimento em Goiás e Distrito Federal</p>
            </div>
            <aside aria-labelledby="macom-equipment-heading">
              <div className="wd-service-section-heading"><p className="wd-kicker">Equipamentos atendidos</p><h2 id="macom-equipment-heading">Cocção e refrigeração Macom.</h2></div>
              <ul className="m-0 list-none p-0">
                {equipment.map(item => <li key={item.id} id={`macom-${item.id}`} className="border-b border-slate-200 py-3 text-base">{item.label}</li>)}
              </ul>
              <Link className="wd-text-link mt-6" to="/marcas-e-equipamentos#marca-macom">Consultar a Macom no catálogo<span aria-hidden="true">↗</span></Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="wd-service-overview">
        <div className="wd-container wd-service-overview-grid">
          <div className="wd-service-section-heading"><p className="wd-kicker">Como solicitar</p><h2>Informações que ajudam a preparar a visita.</h2><p>Envie a localização, a marca, o modelo e uma descrição do problema. Fotos do equipamento e da etiqueta de identificação ajudam a equipe a entender a necessidade.</p></div>
          <div className="wd-service-items">
            <article><h3>Avaliação técnica</h3><p>Verificação da condição do equipamento e registro do que foi encontrado, conforme as condições de acesso e operação.</p></article>
            <article><h3>Orçamento e aprovação</h3><p>Apresentação do serviço e das peças necessárias. A execução é programada após a aprovação, considerando a disponibilidade dos materiais.</p></article>
            <article><h3>Manutenção e acompanhamento</h3><p>Execução do escopo aprovado e registro do atendimento. A manutenção preventiva também pode fazer parte de um plano para os equipamentos da cozinha.</p></article>
          </div>
        </div>
      </section>

      <nav className="wd-service-related wd-container" aria-label="Serviços e atendimento Macom">
        <span>Continue por aqui</span>
        <Link className="wd-text-link" to="/contratos-pcm">Contratos de manutenção<span aria-hidden="true">↗</span></Link>
        <Link className="wd-text-link" to="/marcas-e-equipamentos#marca-macom">Marcas e equipamentos<span aria-hidden="true">↗</span></Link>
        <a className="wd-text-link" href={WEDO_CONTACT.channelsHref} target="_blank" rel="noopener noreferrer">Canais de atendimento<span aria-hidden="true">↗</span></a>
      </nav>
    </Layout>
  );
}
