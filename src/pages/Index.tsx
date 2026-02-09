import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import MethodologySection from "@/components/MethodologySection";


import CaseSection from "@/components/CaseSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <MethodologySection />
        
        
        <CaseSection />
        <WhyChooseSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;