import { Helmet } from "react-helmet-async";

interface SchemaOrgProps {
  type?: "LocalBusiness" | "Service";
  pageTitle?: string;
  pageDescription?: string;
}

export default function SchemaOrg({ 
  type = "LocalBusiness",
  pageTitle = "Manutenção de Câmaras Frias e Equipamentos Industriais | Goiás e DF | WeDo",
  pageDescription = "Manutenção preventiva e corretiva de câmaras frias, refrigeração industrial e equipamentos profissionais. Parceiro Rational. Atendemos Goiás e Distrito Federal."
}: SchemaOrgProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "WeDo Comércio e Importação Ltda",
    "description": "Assistência técnica especializada em equipamentos para cozinhas industriais",
    "url": "https://wedocorp.com",
    "image": "https://www.genspark.ai/api/files/s/0neoBBK6?token=Z0FBQUFBQnBoMUQ0SkJfNm1adHROYS00RU45VDVmcFRMenVRendrUnFpNE55bGU5ZEhzWHBkRUFLcW9wb05CX2tiOGw3a3VXYllGZC05QjJrY25Fc2FCbnpMVFd5SS04TUNfTjlVRzRkVVZrbHVob3pyaHdBYkJBajVRZlVYcUMwQUd1MktzTm4zRkZjV3QxU2Q1YlFtOGlpNEVnc2NYT2JsaEVQZkY5N2JSTTlXdEtOVU5ZREduU0VMeUQwZzhGdVhkRFZOUXpfbXF4QTZtMlRsZndNa0VhS2hZWjZ5Y0Z3eHlhTnhKaHU2cThDbGhPM19PVkI4ZVVCTVcwckFiNUxzZ01zX3Y3OERXYUZ5WnE5V2dFbG4yWXFtZkJ0ZlBrQ1E9PQ",
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
      "Refrigeração Industrial",
      "Assistência Técnica Rational",
      "Equipamentos de Cozinha Industrial",
      "Manutenção Preventiva",
      "Manutenção Corretiva"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Manutenção de Equipamentos Industriais",
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
      <link rel="canonical" href="https://wedocorp.com" />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://wedocorp.com" />
      
      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(type === "LocalBusiness" ? localBusinessSchema : serviceSchema)}
      </script>
    </Helmet>
  );
}
