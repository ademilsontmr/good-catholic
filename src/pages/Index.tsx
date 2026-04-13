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
        <title>Catholic Life Assessment Quiz | Guide Catholic</title>
        <meta name="description" content="Discover how your Catholic faith journey is going. Take our 30-question assessment and receive a personalized 10-page spiritual growth guide." />
        <meta name="keywords" content="catholic quiz, catholic faith assessment, christian life, sacraments, mass, prayer, rosary, confession, faith test, spiritual assessment, catholic life guide" />
        <link rel="canonical" href="https://guidecatholic.com/" />
        <meta property="og:title" content="Catholic Life Assessment | Guide Catholic" />
        <meta property="og:description" content="Take our 30-question Catholic life assessment and receive a personalized spiritual growth guide tailored to your journey." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://guidecatholic.com/" />
        <meta property="og:site_name" content="Guide Catholic" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Catholic Life Assessment | Guide Catholic" />
        <meta name="twitter:description" content="Take our 30-question Catholic life assessment and receive a personalized spiritual growth guide." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Guide Catholic",
          "url": "https://guidecatholic.com",
          "description": "Catholic life assessment and spiritual growth guides",
          "publisher": {
            "@type": "Organization",
            "name": "Guide Catholic",
            "url": "https://guidecatholic.com"
          }
        })}</script>
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
