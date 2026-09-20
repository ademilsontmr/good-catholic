import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { MissionSection } from "@/components/landing/MissionSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { FeaturedArticles } from "@/components/landing/FeaturedArticles";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Guide Catholic | Free Catholic Faith Guides & Life Assessment</title>
        <meta
          name="description"
          content="Free Catholic guides on prayer, the Rosary, Confession, the sacraments, and daily faith—plus a 30-question Catholic life assessment for personalized next steps."
        />
        <meta
          name="keywords"
          content="catholic guides, catholic prayer, how to pray rosary, confession guide, catholic faith assessment, sacraments, lectio divina, spiritual growth"
        />
        <link rel="canonical" href="https://guidecatholic.com/" />
        <meta property="og:title" content="Guide Catholic | Free Catholic Faith Guides" />
        <meta
          property="og:description"
          content="Practical Catholic articles and a free faith assessment to help you grow in prayer, the sacraments, and daily discipleship."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://guidecatholic.com/" />
        <meta property="og:site_name" content="Guide Catholic" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Guide Catholic | Free Catholic Faith Guides" />
        <meta
          name="twitter:description"
          content="Practical Catholic articles and a free faith assessment for your spiritual journey."
        />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Guide Catholic",
          "url": "https://guidecatholic.com",
          "description": "Free Catholic faith guides, prayers, and a Catholic life assessment",
          "publisher": {
            "@type": "Organization",
            "name": "Guide Catholic",
            "url": "https://guidecatholic.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://guidecatholic.com/favicon-192.png",
              "width": 192,
              "height": 192
            }
          }
        })}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FeaturedArticles />
        <FinalCTASection />
      </main>
      <Footer />
      </div>
    </>
  );
};

export default Index;
