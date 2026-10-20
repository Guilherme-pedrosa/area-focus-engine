import { Helmet } from "react-helmet-async";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ServiceSchema from "@/components/ServiceSchema";
import ContactSection from "./ContactSection";
import "./service.css";

type ServiceItem = { title: string; description: string };
type ServiceFAQ = { question: string; answer: string };

/** Editorial service page: content, actual photograph and search metadata are supplied by each route. */
export interface ServicePageProps {
  slug: string;
  title: string;
  description: string;
  breadcrumb: string;
  kicker: string;
  heading: string;
  introduction: string;
  image?: { src: string; alt: string; position?: string; caption: string; landscape?: boolean };
  heroMedia?: ReactNode;
  afterHero?: ReactNode;
  action: string;
  subject: string;
  overview: { title: string; description: string; items: ServiceItem[] };
  process: { title: string; description: string; steps: ServiceItem[] };
  faqs: ServiceFAQ[];
  related: { to: string; label: string }[];
}

export default function ServicePage(props: ServicePageProps) {
  const { slug, title, description, breadcrumb, kicker, heading, introduction, image, heroMedia, afterHero, action, subject, overview, process, faqs, related } = props;
  return (
    <Layout variant="institutional">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://wedocozinhas.com.br/${slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: faqs.map(({ question, answer }) => ({
            "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        })}</script>
      </Helmet>
      <ServiceSchema serviceType={breadcrumb} description={description} slug={slug} />
      <section className="wd-service-hero">
        <div className="wd-container">
          <nav className="wd-service-breadcrumb" aria-label="Caminho da página">
            <Link to="/">Início</Link><span aria-hidden="true">/</span><span aria-current="page">{breadcrumb}</span>
          </nav>
          <div className="wd-service-hero-grid">
            <div className="wd-service-introduction">
              <p className="wd-kicker">{kicker}</p>
              <h1>{heading}</h1>
              <p className="wd-service-lead">{introduction}</p>
              <a className="wd-button" href="#contato">{action}<span aria-hidden="true">↗</span></a>
              <p className="wd-service-region">Atendimento em Goiás e Distrito Federal</p>
            </div>
            {heroMedia ?? (image && <figure className={`wd-service-photo${image.landscape ? " wd-service-photo-landscape" : ""}`}>
              <img src={image.src} alt={image.alt} width="854" height="1280" decoding="async" {...{ fetchpriority: "high" }} style={{ objectPosition: image.position ?? "center" }} />
              <figcaption>{image.caption}</figcaption>
            </figure>)}
          </div>
        </div>
      </section>
      {afterHero}
      <section className="wd-service-overview">
        <div className="wd-container wd-service-overview-grid">
          <div className="wd-service-section-heading"><p className="wd-kicker">O serviço</p><h2>{overview.title}</h2><p>{overview.description}</p></div>
          <div className="wd-service-items">{overview.items.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
        </div>
      </section>
      <section className="wd-service-process">
        <div className="wd-container">
          <div className="wd-service-process-heading"><p className="wd-kicker">Como trabalhamos</p><h2>{process.title}</h2><p>{process.description}</p></div>
          <div className="wd-service-steps">{process.steps.map(step => <article key={step.title}><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
        </div>
      </section>
      <section className="wd-service-questions">
        <div className="wd-container wd-service-overview-grid">
          <div className="wd-service-section-heading"><p className="wd-kicker">Antes de solicitar</p><h2>Dúvidas frequentes</h2></div>
          <div className="wd-service-faqs">{faqs.map(faq => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>
        </div>
      </section>
      <ContactSection initialSubject={subject} />
      <nav className="wd-service-related wd-container" aria-label="Outros serviços">
        <span>Conheça também</span>
        {related.map(link => <Link className="wd-text-link" key={link.to} to={link.to}>{link.label}<span aria-hidden="true">↗</span></Link>)}
      </nav>
    </Layout>
  );
}
