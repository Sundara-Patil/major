import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { PhasesSection } from "@/components/home/PhasesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PhasesSection />
      <StatsSection />
      {/* <TestimonialsSection /> */}
      <CTASection />
    </Layout>
  );
};

export default Index;