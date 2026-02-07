import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import BadgesSection from "@/components/home/BadgesSection";
import ServicesSection from "@/components/home/ServicesSection";
import BrandsSection from "@/components/home/BrandsSection";
import NumbersSection from "@/components/home/NumbersSection";
import DiferenciaisSection from "@/components/home/DiferenciaisSection";
import CTASection from "@/components/home/CTASection";
import SchemaOrg from "@/components/SchemaOrg";

export default function Index() {
  return (
    <Layout>
      <SchemaOrg />
      <HeroSection />
      <BadgesSection />
      <ServicesSection />
      <BrandsSection />
      <NumbersSection />
      <DiferenciaisSection />
      <CTASection />
    </Layout>
  );
}
