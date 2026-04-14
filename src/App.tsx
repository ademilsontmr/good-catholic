import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import QuizIntro from "./pages/QuizIntro";
import DailyVersesPage from "./pages/DailyVersesPage";
import QuizPage from "./pages/QuizPage";
import CheckoutPage from "./pages/CheckoutPage";
import ResultadoPage from "./pages/ResultadoPage";
import GetResultPage from "./pages/GetResultPage";
import BlogPage from "./pages/BlogPage";
import HowToPrayRosary from "./pages/blog/HowToPrayRosary";
import SevenSacraments from "./pages/blog/SevenSacraments";
import ImportanceOfConfession from "./pages/blog/ImportanceOfConfession";
import PatronSaints from "./pages/blog/PatronSaints";
import FastingAndAbstinence from "./pages/blog/FastingAndAbstinence";
import SundayMass from "./pages/blog/SundayMass";
import PrayerLife from "./pages/blog/PrayerLife";
import MeaningOfMass from "./pages/blog/MeaningOfMass";
import ExaminationOfConscience from "./pages/blog/ExaminationOfConscience";
import VirginMary from "./pages/blog/VirginMary";
import GiftsOfHolySpirit from "./pages/blog/GiftsOfHolySpirit";
import LectioDivina from "./pages/blog/LectioDivina";
import ChastityModernWorld from "./pages/blog/ChastityModernWorld";
import SocialDoctrine from "./pages/blog/SocialDoctrine";
import VocationalDiscernment from "./pages/blog/VocationalDiscernment";
import EucharistRealPresence from "./pages/blog/EucharistRealPresence";
import EucharisticAdoration from "./pages/blog/EucharisticAdoration";
import WhatIsPurgatory from "./pages/blog/WhatIsPurgatory";
import HowToLiveLent from "./pages/blog/HowToLiveLent";
import GuardianAngels from "./pages/blog/GuardianAngels";
import MeaningOfCrucifix from "./pages/blog/MeaningOfCrucifix";
import Jubilee2025Legacy from "./pages/blog/Jubilee2025Legacy";
import PlenaryIndulgenceGuide from "./pages/blog/PlenaryIndulgenceGuide";
import ChurchChangesPost2025 from "./pages/blog/ChurchChangesPost2025";
import PrayersOfHope2026 from "./pages/blog/PrayersOfHope2026";
import LocalPilgrimage from "./pages/blog/LocalPilgrimage";
import FaithMentalHealth from "./pages/blog/FaithMentalHealth";
// Prayer Articles
// Novena Articles
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quiz-intro" element={<QuizIntro />} />
            <Route path="/daily-verses" element={<DailyVersesPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/get-result" element={<GetResultPage />} />
            <Route path="/result" element={<ResultadoPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/page/:page" element={<BlogPage />} />
            <Route path="/termos" element={<TermsOfUse />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/privacidade" element={<PrivacyPolicy />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/how-to-pray-rosary/" element={<HowToPrayRosary />} />
            <Route path="/blog/seven-sacraments/" element={<SevenSacraments />} />
            <Route path="/blog/importance-confession/" element={<ImportanceOfConfession />} />
            <Route path="/blog/patron-saints/" element={<PatronSaints />} />
            <Route path="/blog/fasting-abstinence/" element={<FastingAndAbstinence />} />
            <Route path="/blog/sunday-mass/" element={<SundayMass />} />
            <Route path="/blog/prayer-life/" element={<PrayerLife />} />
            <Route path="/blog/meaning-mass/" element={<MeaningOfMass />} />
            <Route path="/blog/examination-conscience/" element={<ExaminationOfConscience />} />
            <Route path="/blog/virgin-mary/" element={<VirginMary />} />
            <Route path="/blog/gifts-holy-spirit/" element={<GiftsOfHolySpirit />} />
            <Route path="/blog/lectio-divina/" element={<LectioDivina />} />
            <Route path="/blog/chastity-modern-world/" element={<ChastityModernWorld />} />
            <Route path="/blog/social-doctrine/" element={<SocialDoctrine />} />
            <Route path="/blog/vocational-discernment/" element={<VocationalDiscernment />} />
            <Route path="/blog/eucharist-real-presence/" element={<EucharistRealPresence />} />
            <Route path="/blog/eucharistic-adoration/" element={<EucharisticAdoration />} />
            <Route path="/blog/what-is-purgatory/" element={<WhatIsPurgatory />} />
            <Route path="/blog/how-to-live-lent/" element={<HowToLiveLent />} />
            <Route path="/blog/guardian-angels/" element={<GuardianAngels />} />
            <Route path="/blog/meaning-of-crucifix/" element={<MeaningOfCrucifix />} />
            <Route path="/blog/jubilee-2025-legacy/" element={<Jubilee2025Legacy />} />
            <Route path="/blog/plenary-indulgence-guide/" element={<PlenaryIndulgenceGuide />} />
            <Route path="/blog/church-changes-post-2025/" element={<ChurchChangesPost2025 />} />
            <Route path="/blog/prayers-of-hope-2026/" element={<PrayersOfHope2026 />} />
            <Route path="/blog/local-pilgrimage/" element={<LocalPilgrimage />} />
            <Route path="/blog/faith-mental-health/" element={<FaithMentalHealth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
