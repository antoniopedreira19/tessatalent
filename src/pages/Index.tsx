import { useEffect } from "react";
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

import advisorPhoto from "@/assets/advisor-photo.png";
import ceoMarcelo from "@/assets/ceo-marcelo.png";
import teamWorking from "@/assets/team-working.jpg";
import blogTechAdvisor from "@/assets/blog-tech-advisor.png";
import blogOnboarding from "@/assets/blog-onboarding.png";
import blogIforense from "@/assets/blog-iforense.png";

const Index = () => {
  useEffect(() => {
    const images = [advisorPhoto, ceoMarcelo, teamWorking, blogTechAdvisor, blogOnboarding, blogIforense];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

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
