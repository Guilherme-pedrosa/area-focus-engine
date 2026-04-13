import { Helmet } from "react-helmet-async";

interface SchemaOrgProps {
  type?: "LocalBusiness" | "Service";
  pageTitle?: string;
  pageDescription?: string;
}

export default function SchemaOrg({ 
  type = "LocalBusiness",
  pageTitle = "Manutenção de Câmaras Frias e Cozinhas Profissionais | Goiás e DF | WeDo",
  pageDescription = "Manutenção preventiva e corretiva de câmaras frias, refrigeração e equipamentos profissionais. Parceiro Rational. Atendemos Goiás e Distrito Federal."
}: SchemaOrgProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "WeDo Comércio e Importação Ltda",
    "description": "Assistência técnica especializada em equipamentos para cozinhas profissionais",
    "url": "https://wedocozinhas.com.br",
    "image": "https://wedocozinhas.com.br/assets/logo-wedo-full-BQUUEgvy.jpg",
    "areaServed": [
      {
        "@type": "State",
        "name": "Goiás",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "GO",
          "addressCountry": "BR"
        }
      },
      {
        "@type": "State",
        "name": "Distrito Federal",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "DF",
          "addressCountry": "BR"
        }
      }
    ],
    "priceRange": "$$",
    "knowsAbout": [
      "Manutenção de Câmaras Frias",
      "Refrigeração Profissional",
      "Assistência Técnica Rational",
      "Equipamentos de Cozinha Profissional",
      "Manutenção Preventiva",
      "Manutenção Corretiva"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Manutenção de Equipamentos para Cozinhas Profissionais",
    "provider": {
      "@type": "LocalBusiness",
      "name": "WeDo Comércio e Importação Ltda"
    },
    "areaServed": ["Goiás", "Distrito Federal"],
    "description": pageDescription
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://wedocozinhas.com.br" />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://wedocozinhas.com.br" />
      
      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(type === "LocalBusiness" ? localBusinessSchema : serviceSchema)}
      </script>
    </Helmet>
  );
}
