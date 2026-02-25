import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TechAdvisorsSection from "@/components/TechAdvisorsSection";
import MethodologySection from "@/components/MethodologySection";
import CaseSection from "@/components/CaseSection";
import CallToActionSection from "@/components/CallToActionSection";
import StatsAndContentSection from "@/components/StatsAndContentSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TechAdvisorsSection />
        <MethodologySection />
        <CaseSection />
        <CallToActionSection />
        <StatsAndContentSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
