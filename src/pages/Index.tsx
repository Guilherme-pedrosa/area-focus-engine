import Layout from "@/components/Layout";
import HomeContent from "@/components/institutional/HomeContent";
import ContactSection from "@/components/institutional/ContactSection";
import SchemaOrg from "@/components/SchemaOrg";

export default function Index() {
  return (
    <Layout variant="institutional">
      <SchemaOrg
        pageTitle="WeDo | Assistência Técnica para Cozinhas Profissionais em Goiás e DF"
        pageDescription="Assistência técnica, manutenção preventiva e peças para equipamentos de cozinhas profissionais em Goiás e no Distrito Federal. Conheça os serviços da WeDo."
      />
      <HomeContent />
      <ContactSection />
    </Layout>
  );
}
