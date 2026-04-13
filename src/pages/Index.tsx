import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProblemsSection from "@/components/home/ProblemsSection";
import ServicesSection from "@/components/home/ServicesSection";
import BrandsSection from "@/components/home/BrandsSection";
import NumbersSection from "@/components/home/NumbersSection";
import CTASection from "@/components/home/CTASection";
import SchemaOrg from "@/components/SchemaOrg";

export default function Index() {
  return (
    <Layout>
      <SchemaOrg
        pageTitle="WeDo | Manutenção para Cozinhas Profissionais em Goiás e DF"
        pageDescription="Manutenção especializada para cozinhas profissionais, refrigeração e equipamentos críticos em Goiás e DF. Atendimento técnico para operações que não podem parar."
      />
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <NumbersSection />
      <BrandsSection />
      <CTASection />
    </Layout>
  );
}
