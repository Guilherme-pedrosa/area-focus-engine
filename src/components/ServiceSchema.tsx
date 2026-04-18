import { Helmet } from "react-helmet-async";

interface ServiceSchemaProps {
  serviceType: string;
  description: string;
  slug: string;
}

const BASE_URL = "https://wedocozinhas.com.br";

export default function ServiceSchema({ serviceType, description, slug }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    provider: {
      "@type": "LocalBusiness",
      name: "WeDo Comércio e Importação Ltda",
      url: BASE_URL,
    },
    areaServed: ["Goiás", "Distrito Federal"],
    description,
    url: `${BASE_URL}/${slug.replace(/^\//, "")}`,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
