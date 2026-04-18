import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SchemaOrgProps {
  type?: "LocalBusiness" | "Service";
  pageTitle?: string;
  pageDescription?: string;
}

const BASE_URL = "https://wedocozinhas.com.br";

export default function SchemaOrg({ 
  type = "LocalBusiness",
  pageTitle = "Manutenção de Câmaras Frias e Cozinhas Profissionais | Goiás e DF | WeDo",
  pageDescription = "Manutenção preventiva e corretiva de câmaras frias, refrigeração e equipamentos profissionais. Parceiro Rational. Atendemos Goiás e Distrito Federal."
}: SchemaOrgProps) {
  const location = useLocation();
  const canonicalUrl = `${BASE_URL}${location.pathname === "/" ? "" : location.pathname}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "WeDo Comércio e Importação Ltda",
    "description": "Assistência técnica especializada em equipamentos para cozinhas profissionais",
    "url": BASE_URL,
    "image": `${BASE_URL}/images/logo-wedo-full.jpg`,
    "telephone": "+55-62-99377-5711",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua 5",
      "addressLocality": "Anápolis",
      "addressRegion": "GO",
      "postalCode": "75000-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -16.3281,
      "longitude": -48.9530
    },
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
    "openingHours": ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "knowsAbout": [
      "Manutenção de Câmaras Frias",
      "Refrigeração Profissional",
      "Assistência Técnica Rational",
      "Assistência Técnica Autorizada Becker",
      "Equipamentos de Cozinha Profissional",
      "Manutenção Preventiva",
      "Manutenção Corretiva",
      "Higienização de Coifas",
      "Contratos PCM"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Manutenção de Equipamentos para Cozinhas Profissionais",
    "provider": {
      "@type": "LocalBusiness",
      "name": "WeDo Comércio e Importação Ltda",
      "url": BASE_URL
    },
    "areaServed": ["Goiás", "Distrito Federal"],
    "description": pageDescription
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="WeDo Cozinhas Profissionais" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(type === "LocalBusiness" ? localBusinessSchema : serviceSchema)}
      </script>
    </Helmet>
  );
}
