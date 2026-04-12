import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Quiz: How is your Catholic life? | Good Catholic</title>
        <meta name="description" content="Discover how your faith journey is going through this simple and sincere quiz. Evaluate your participation in the sacramental life of the Catholic Church." />
        <meta name="keywords" content="catholic quiz, catholic faith, christian life, sacraments, mass, prayer, rosary, confession, faith test, spiritual assessment" />
        <link rel="canonical" href="https://bomcatolico.com.br/" />
        <meta property="og:title" content="Quiz: How is your Catholic life?" />
        <meta property="og:description" content="Discover how your faith journey is going through this simple and sincere quiz." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bomcatolico.com.br/" />
      </Helmet>
      <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
      </div>
    </>
  );
};

export default Index;
