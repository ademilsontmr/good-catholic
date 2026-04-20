import { lazy, Suspense } from "react";
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
const SevenSacraments = lazy(() => import("./pages/blog/SevenSacraments"));
const ImportanceOfConfession = lazy(() => import("./pages/blog/ImportanceOfConfession"));
const PatronSaints = lazy(() => import("./pages/blog/PatronSaints"));
const FastingAndAbstinence = lazy(() => import("./pages/blog/FastingAndAbstinence"));
const SundayMass = lazy(() => import("./pages/blog/SundayMass"));
const PrayerLife = lazy(() => import("./pages/blog/PrayerLife"));
const MeaningOfMass = lazy(() => import("./pages/blog/MeaningOfMass"));
const ExaminationOfConscience = lazy(() => import("./pages/blog/ExaminationOfConscience"));
const VirginMary = lazy(() => import("./pages/blog/VirginMary"));
const GiftsOfHolySpirit = lazy(() => import("./pages/blog/GiftsOfHolySpirit"));
const LectioDivina = lazy(() => import("./pages/blog/LectioDivina"));
const ChastityModernWorld = lazy(() => import("./pages/blog/ChastityModernWorld"));
const SocialDoctrine = lazy(() => import("./pages/blog/SocialDoctrine"));
const VocationalDiscernment = lazy(() => import("./pages/blog/VocationalDiscernment"));
const EucharistRealPresence = lazy(() => import("./pages/blog/EucharistRealPresence"));
const EucharisticAdoration = lazy(() => import("./pages/blog/EucharisticAdoration"));
const WhatIsPurgatory = lazy(() => import("./pages/blog/WhatIsPurgatory"));
const HowToLiveLent = lazy(() => import("./pages/blog/HowToLiveLent"));
const GuardianAngels = lazy(() => import("./pages/blog/GuardianAngels"));
const MeaningOfCrucifix = lazy(() => import("./pages/blog/MeaningOfCrucifix"));
const Jubilee2025Legacy = lazy(() => import("./pages/blog/Jubilee2025Legacy"));
const PlenaryIndulgenceGuide = lazy(() => import("./pages/blog/PlenaryIndulgenceGuide"));
const ChurchChangesPost2025 = lazy(() => import("./pages/blog/ChurchChangesPost2025"));
const PrayersOfHope2026 = lazy(() => import("./pages/blog/PrayersOfHope2026"));
const LocalPilgrimage = lazy(() => import("./pages/blog/LocalPilgrimage"));
const FaithMentalHealth = lazy(() => import("./pages/blog/FaithMentalHealth"));
// Prayer Articles
const DivineMercyChaplet = lazy(() => import("./pages/blog/DivineMercyChaplet"));
const ActOfContrition = lazy(() => import("./pages/blog/ActOfContrition"));
const MorningOfferingPrayer = lazy(() => import("./pages/blog/MorningOfferingPrayer"));
const PrayerToStJoseph = lazy(() => import("./pages/blog/PrayerToStJoseph"));
const TheMemorarePrayer = lazy(() => import("./pages/blog/TheMemorarePrayer"));
// Sacraments Articles Batch 2
const HowToGoToConfession = lazy(() => import("./pages/blog/HowToGoToConfession"));
const HowToBecomeCatholic = lazy(() => import("./pages/blog/HowToBecomeCatholic"));
const CatholicBaptismGuide = lazy(() => import("./pages/blog/CatholicBaptismGuide"));
const CatholicConfirmationGuide = lazy(() => import("./pages/blog/CatholicConfirmationGuide"));
const CatholicMarriageGuide = lazy(() => import("./pages/blog/CatholicMarriageGuide"));
// FAQ Articles Batch 3
const WhyPrayToSaints = lazy(() => import("./pages/blog/WhyPrayToSaints"));
const DoCatholicsWorshipMary = lazy(() => import("./pages/blog/DoCatholicsWorshipMary"));
const CatholicVsProtestant = lazy(() => import("./pages/blog/CatholicVsProtestant"));
const WhatIsTheMassGuide = lazy(() => import("./pages/blog/WhatIsTheMassGuide"));
const IsTheCatholicChurchTrue = lazy(() => import("./pages/blog/IsTheCatholicChurchTrue"));
// Spiritual Life Articles Batch 4
const DailyPrayerRoutine = lazy(() => import("./pages/blog/DailyPrayerRoutine"));
const RosaryCompleteGuide = lazy(() => import("./pages/blog/RosaryCompleteGuide"));
const ExaminationOfConscienceGuide = lazy(() => import("./pages/blog/ExaminationOfConscienceGuide"));
const CatholicFastingRules = lazy(() => import("./pages/blog/CatholicFastingRules"));
// Saints Articles Batch 5
const SaintPadrePio = lazy(() => import("./pages/blog/SaintPadrePio"));
const SaintThereseOfLisieux = lazy(() => import("./pages/blog/SaintThereseOfLisieux"));
const BlessedCarloAcutis = lazy(() => import("./pages/blog/BlessedCarloAcutis"));
const SaintMichaelArchangel = lazy(() => import("./pages/blog/SaintMichaelArchangel"));
const SaintAnthonyOfPadua = lazy(() => import("./pages/blog/SaintAnthonyOfPadua"));
// Catholic Life Articles Batch 6
const HowToPrayAngelus = lazy(() => import("./pages/blog/HowToPrayAngelus"));
const WhatIsAdvent = lazy(() => import("./pages/blog/WhatIsAdvent"));
const WhatIsHolyWeek = lazy(() => import("./pages/blog/WhatIsHolyWeek"));
const CatholicGraceBeforeMeals = lazy(() => import("./pages/blog/CatholicGraceBeforeMeals"));
const SpiritualCommunion = lazy(() => import("./pages/blog/SpiritualCommunion"));
// Catholic Life Articles Batch 7
const StationsOfTheCross = lazy(() => import("./pages/blog/StationsOfTheCross"));
const WhatIsTheScapular = lazy(() => import("./pages/blog/WhatIsTheScapular"));
const CatholicPrayersForDying = lazy(() => import("./pages/blog/CatholicPrayersForDying"));
const ConsecratYourHome = lazy(() => import("./pages/blog/ConsecratYourHome"));
const WhatIsANovena = lazy(() => import("./pages/blog/WhatIsANovena"));
// Doctrine Articles Batch 10
const NaturalFamilyPlanning = lazy(() => import("./pages/blog/NaturalFamilyPlanning"));
const CatholicTeachingAbortion = lazy(() => import("./pages/blog/CatholicTeachingAbortion"));
const PopeRoleInChurch = lazy(() => import("./pages/blog/PopeRoleInChurch"));
const CatholicDeathPenalty = lazy(() => import("./pages/blog/CatholicDeathPenalty"));
const CatholicAnnulment = lazy(() => import("./pages/blog/CatholicAnnulment"));
// Spirituality Articles Batch 9
const ContemplativePrayer = lazy(() => import("./pages/blog/ContemplativePrayer"));
const SpiritualRetreatAtHome = lazy(() => import("./pages/blog/SpiritualRetreatAtHome"));
const SpiritualDirection = lazy(() => import("./pages/blog/SpiritualDirection"));
const DarkNightOfTheSoul = lazy(() => import("./pages/blog/DarkNightOfTheSoul"));
const GrowingInHumility = lazy(() => import("./pages/blog/GrowingInHumility"));
// How-To Articles
const HowToChooseConfirmationName = lazy(() => import("./pages/blog/HowToChooseConfirmationName"));
const HowToReturnToMass = lazy(() => import("./pages/blog/HowToReturnToMass"));
const HowToTeachChildrenToPray = lazy(() => import("./pages/blog/HowToTeachChildrenToPray"));
const HowToFindCatholicCommunity = lazy(() => import("./pages/blog/HowToFindCatholicCommunity"));
// Family & Youth Articles Batch 8
const CatholicParenting = lazy(() => import("./pages/blog/CatholicParenting"));
const FamilyPrayer = lazy(() => import("./pages/blog/FamilyPrayer"));
const CatholicDating = lazy(() => import("./pages/blog/CatholicDating"));
const WhatIsRCIA = lazy(() => import("./pages/blog/WhatIsRCIA"));
const CatholicHomeschooling = lazy(() => import("./pages/blog/CatholicHomeschooling"));
// SEO Articles Lote 1
const TattoosCatholicChurch = lazy(() => import("./pages/blog/TattoosCatholicChurch"));
const CatholicVsProtestantBible = lazy(() => import("./pages/blog/CatholicVsProtestantBible"));
const AshWednesdayGuide = lazy(() => import("./pages/blog/AshWednesdayGuide"));
// SEO Articles Lote 2
const SevenDeadlySins = lazy(() => import("./pages/blog/SevenDeadlySins"));
const ApparitionsOfOurLady = lazy(() => import("./pages/blog/ApparitionsOfOurLady"));
const SaintJudeThaddeus = lazy(() => import("./pages/blog/SaintJudeThaddeus"));
// SEO Articles Lote 3
const TenCommandmentsCatholic = lazy(() => import("./pages/blog/TenCommandmentsCatholic"));
const FruitsOfHolySpirit = lazy(() => import("./pages/blog/FruitsOfHolySpirit"));
const CatholicTeachingOnDivorce = lazy(() => import("./pages/blog/CatholicTeachingOnDivorce"));
// SEO Articles Lote 4
const SaintBenedictMedal = lazy(() => import("./pages/blog/SaintBenedictMedal"));
const WhatIsTheNiceneCreed = lazy(() => import("./pages/blog/WhatIsTheNiceneCreed"));
// SEO Articles Lote 5
const EucharisticMiraclesScience = lazy(() => import("./pages/blog/EucharisticMiraclesScience"));
const CatholicViewOnGhosts = lazy(() => import("./pages/blog/CatholicViewOnGhosts"));
const SaintPeregrineNovena = lazy(() => import("./pages/blog/SaintPeregrineNovena"));
// SEO Articles Lote 6
const ThreeDaysOfDarkness = lazy(() => import("./pages/blog/ThreeDaysOfDarkness"));
const IncorruptibleSaints = lazy(() => import("./pages/blog/IncorruptibleSaints"));
const MiraculousMedalGuide = lazy(() => import("./pages/blog/MiraculousMedalGuide"));
// SEO Articles Lote 7
const OurLadyUndoerOfKnots = lazy(() => import("./pages/blog/OurLadyUndoerOfKnots"));
const SaintDymphnaMentalHealth = lazy(() => import("./pages/blog/SaintDymphnaMentalHealth"));
const TheProblemOfSuffering = lazy(() => import("./pages/blog/TheProblemOfSuffering"));
// SEO Articles Lote 8
const OurLadyOfGuadalupeScience = lazy(() => import("./pages/blog/OurLadyOfGuadalupeScience"));
const TheCrusadesHistory = lazy(() => import("./pages/blog/TheCrusadesHistory"));
const CatholicismAndEvolution = lazy(() => import("./pages/blog/CatholicismAndEvolution"));
// SEO Articles Lote 9
const CatholicViewOnWealth = lazy(() => import("./pages/blog/CatholicViewOnWealth"));
const SaintJohnVianneyCureOfArs = lazy(() => import("./pages/blog/SaintJohnVianneyCureOfArs"));
// SEO Articles Lote 10
const BrownScapularGuide = lazy(() => import("./pages/blog/BrownScapularGuide"));
const SaintMichaelLent = lazy(() => import("./pages/blog/SaintMichaelLent"));
const SacredHeartPromises = lazy(() => import("./pages/blog/SacredHeartPromises"));

// New articles added to fulfill site-wide completeness
const StJosephNovenaHouse = lazy(() => import("./pages/blog/StJosephNovenaHouse"));
const CatholicInnerHealingGuide = lazy(() => import("./pages/blog/CatholicInnerHealingGuide"));
const OurLadyOfFatimaGuide = lazy(() => import("./pages/blog/OurLadyOfFatimaGuide"));
const LiturgicalSeasonsGuide = lazy(() => import("./pages/blog/LiturgicalSeasonsGuide"));
const VocationalDiscernmentGuide = lazy(() => import("./pages/blog/VocationalDiscernmentGuide"));
const CatholicMentalHealthGuide = lazy(() => import("./pages/blog/CatholicMentalHealthGuide"));
const OurLadyOfLourdesGuide = lazy(() => import("./pages/blog/OurLadyOfLourdesGuide"));
const CatholicSacramentalsGuide = lazy(() => import("./pages/blog/CatholicSacramentalsGuide"));
const LiturgyOfTheHoursGuide = lazy(() => import("./pages/blog/LiturgyOfTheHoursGuide"));
const CatholicDatingGuide = lazy(() => import("./pages/blog/CatholicDatingGuide"));
const CatholicParentingGuide = lazy(() => import("./pages/blog/CatholicParentingGuide"));
const SpiritualLifeBasics = lazy(() => import("./pages/blog/SpiritualLifeBasics"));
const HealingThroughFaith = lazy(() => import("./pages/blog/HealingThroughFaith"));
const DignityOfWork = lazy(() => import("./pages/blog/DignityOfWork"));
const SaintPadrePioMiracles = lazy(() => import("./pages/blog/SaintPadrePioMiracles"));
const PropheciesOfFatima = lazy(() => import("./pages/blog/PropheciesOfFatima"));
const NovenasExplained = lazy(() => import("./pages/blog/NovenasExplained"));
const DivineOfficeLaity = lazy(() => import("./pages/blog/DivineOfficeLaity"));
const FaithAndAnxiety = lazy(() => import("./pages/blog/FaithAndAnxiety"));
const ManagingDepression = lazy(() => import("./pages/blog/ManagingDepression"));
const SacramentOfMatrimony = lazy(() => import("./pages/blog/SacramentOfMatrimony"));
const EucharisticPrayers = lazy(() => import("./pages/blog/EucharisticPrayers"));
const LentPreparationGuide = lazy(() => import("./pages/blog/LentPreparationGuide"));
const JubileePilgrimageGuide = lazy(() => import("./pages/blog/JubileePilgrimageGuide"));
const CatholicChurchHistory = lazy(() => import("./pages/blog/CatholicChurchHistory"));
const HowToReadBible = lazy(() => import("./pages/blog/HowToReadBible"));
const CatholicFamilyTraditions = lazy(() => import("./pages/blog/CatholicFamilyTraditions"));
const HolyWaterSacramental = lazy(() => import("./pages/blog/HolyWaterSacramental"));
const CatholicSocialTeachingToday = lazy(() => import("./pages/blog/CatholicSocialTeachingToday"));
const LivingVirtue = lazy(() => import("./pages/blog/LivingVirtue"));
const RosaryMysteriesMeditation = lazy(() => import("./pages/blog/RosaryMysteriesMeditation"));
const CatholicMarriagePreparation = lazy(() => import("./pages/blog/CatholicMarriagePreparation"));

// High-Priority Articles
const PopeLeoXIV = lazy(() => import("./pages/blog/PopeLeoXIV"));
const PopeFrancisLegacy = lazy(() => import("./pages/blog/PopeFrancisLegacy"));
const BestCatholicBibleTranslations = lazy(() => import("./pages/blog/BestCatholicBibleTranslations"));
const CatholicTeachingOnSalvation = lazy(() => import("./pages/blog/CatholicTeachingOnSalvation"));
const CatholicWeddingCeremony = lazy(() => import("./pages/blog/CatholicWeddingCeremony"));

// Category Articles
const HowToPrayIntercessory = lazy(() => import("./pages/blog/HowToPrayIntercessory"));
const HowToDoHolyHour = lazy(() => import("./pages/blog/HowToDoHolyHour"));
const CatholicLivingSecularWorld = lazy(() => import("./pages/blog/CatholicLivingSecularWorld"));
const CatholicMorningRoutine = lazy(() => import("./pages/blog/CatholicMorningRoutine"));
const SaintFrancisOfAssisi = lazy(() => import("./pages/blog/SaintFrancisOfAssisi"));
const AllSaintsAllSoulsDay = lazy(() => import("./pages/blog/AllSaintsAllSoulsDay"));
const WhatIsTheCatechism = lazy(() => import("./pages/blog/WhatIsTheCatechism"));
const CatholicApologeticsGuide = lazy(() => import("./pages/blog/CatholicApologeticsGuide"));

// High-Priority Articles Batch 2
const CanCatholicsEatMeat = lazy(() => import("./pages/blog/CanCatholicsEatMeat"));
const CatholicFuneralRites = lazy(() => import("./pages/blog/CatholicFuneralRites"));
const AreNonCatholicsSaved = lazy(() => import("./pages/blog/AreNonCatholicsSaved"));
const DeuterocanonicalBooks = lazy(() => import("./pages/blog/DeuterocanonicalBooks"));
const WhyProtestantReformation = lazy(() => import("./pages/blog/WhyProtestantReformation"));

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
          <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" /></div>}>
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
            <Route path="/blog/divine-mercy-chaplet/" element={<DivineMercyChaplet />} />
            <Route path="/blog/act-of-contrition/" element={<ActOfContrition />} />
            <Route path="/blog/morning-offering-prayer/" element={<MorningOfferingPrayer />} />
            <Route path="/blog/prayer-to-st-joseph/" element={<PrayerToStJoseph />} />
            <Route path="/blog/the-memorare-prayer/" element={<TheMemorarePrayer />} />
            <Route path="/blog/how-to-go-to-confession/" element={<HowToGoToConfession />} />
            <Route path="/blog/how-to-become-catholic/" element={<HowToBecomeCatholic />} />
            <Route path="/blog/catholic-baptism-guide/" element={<CatholicBaptismGuide />} />
            <Route path="/blog/catholic-confirmation-guide/" element={<CatholicConfirmationGuide />} />
            <Route path="/blog/catholic-marriage-guide/" element={<CatholicMarriageGuide />} />
            <Route path="/blog/why-do-catholics-pray-to-saints/" element={<WhyPrayToSaints />} />
            <Route path="/blog/do-catholics-worship-mary/" element={<DoCatholicsWorshipMary />} />
            <Route path="/blog/catholic-vs-protestant-differences/" element={<CatholicVsProtestant />} />
            <Route path="/blog/what-is-the-catholic-mass/" element={<WhatIsTheMassGuide />} />
            <Route path="/blog/is-the-catholic-church-the-true-church/" element={<IsTheCatholicChurchTrue />} />
            <Route path="/blog/catholic-daily-prayer-routine/" element={<DailyPrayerRoutine />} />
            <Route path="/blog/lectio-divina-how-to-practice/" element={<LectioDivina />} />
            <Route path="/blog/rosary-complete-guide/" element={<RosaryCompleteGuide />} />
            <Route path="/blog/examination-of-conscience-guide/" element={<ExaminationOfConscienceGuide />} />
            <Route path="/blog/catholic-fasting-rules/" element={<CatholicFastingRules />} />
            <Route path="/blog/saint-padre-pio/" element={<SaintPadrePio />} />
            <Route path="/blog/saint-therese-of-lisieux/" element={<SaintThereseOfLisieux />} />
            <Route path="/blog/blessed-carlo-acutis/" element={<BlessedCarloAcutis />} />
            <Route path="/blog/saint-michael-archangel/" element={<SaintMichaelArchangel />} />
            <Route path="/blog/saint-anthony-of-padua/" element={<SaintAnthonyOfPadua />} />
            <Route path="/blog/how-to-pray-the-angelus/" element={<HowToPrayAngelus />} />
            <Route path="/blog/what-is-advent-catholic/" element={<WhatIsAdvent />} />
            <Route path="/blog/what-is-holy-week-catholic/" element={<WhatIsHolyWeek />} />
            <Route path="/blog/catholic-grace-before-meals/" element={<CatholicGraceBeforeMeals />} />
            <Route path="/blog/how-to-make-spiritual-communion/" element={<SpiritualCommunion />} />
            <Route path="/blog/stations-of-the-cross/" element={<StationsOfTheCross />} />
            <Route path="/blog/what-is-the-brown-scapular/" element={<WhatIsTheScapular />} />
            <Route path="/blog/catholic-prayers-for-the-dying/" element={<CatholicPrayersForDying />} />
            <Route path="/blog/how-to-consecrate-your-home-to-god/" element={<ConsecratYourHome />} />
            <Route path="/blog/what-is-a-novena/" element={<WhatIsANovena />} />
            <Route path="/blog/catholic-parenting-raising-children-in-faith/" element={<CatholicParenting />} />
            <Route path="/blog/how-to-pray-as-a-family/" element={<FamilyPrayer />} />
            <Route path="/blog/catholic-dating-and-courtship/" element={<CatholicDating />} />
            <Route path="/blog/what-is-rcia-for-adults/" element={<WhatIsRCIA />} />
            <Route path="/blog/catholic-homeschooling-guide/" element={<CatholicHomeschooling />} />
            <Route path="/blog/what-is-contemplative-prayer/" element={<ContemplativePrayer />} />
            <Route path="/blog/how-to-do-spiritual-retreat-at-home/" element={<SpiritualRetreatAtHome />} />
            <Route path="/blog/catholic-spiritual-direction/" element={<SpiritualDirection />} />
            <Route path="/blog/dark-night-of-the-soul-catholic/" element={<DarkNightOfTheSoul />} />
            <Route path="/blog/how-to-grow-in-humility-catholic/" element={<GrowingInHumility />} />
            <Route path="/blog/how-to-choose-confirmation-name/" element={<HowToChooseConfirmationName />} />
            <Route path="/blog/how-to-return-to-mass/" element={<HowToReturnToMass />} />
            <Route path="/blog/how-to-teach-children-to-pray/" element={<HowToTeachChildrenToPray />} />
            <Route path="/blog/how-to-find-catholic-community/" element={<HowToFindCatholicCommunity />} />
            {/* Doctrine Articles Batch 10 */}
            <Route path="/blog/natural-family-planning-catholic/" element={<NaturalFamilyPlanning />} />
            <Route path="/blog/catholic-teaching-on-abortion/" element={<CatholicTeachingAbortion />} />
            <Route path="/blog/what-is-the-popes-role-catholic-church/" element={<PopeRoleInChurch />} />
            <Route path="/blog/catholic-teaching-on-death-penalty/" element={<CatholicDeathPenalty />} />
            <Route path="/blog/what-is-annulment-catholic-church/" element={<CatholicAnnulment />} />
            {/* SEO Articles Lote 1 */}
            <Route path="/blog/are-tattoos-a-sin/" element={<TattoosCatholicChurch />} />
            <Route path="/blog/catholic-vs-protestant-bible/" element={<CatholicVsProtestantBible />} />
            <Route path="/blog/ash-wednesday-guide/" element={<AshWednesdayGuide />} />
            {/* SEO Articles Lote 2 */}
            <Route path="/blog/seven-deadly-sins/" element={<SevenDeadlySins />} />
            <Route path="/blog/apparitions-of-our-lady/" element={<ApparitionsOfOurLady />} />
            <Route path="/blog/saint-jude-thaddeus/" element={<SaintJudeThaddeus />} />
            {/* SEO Articles Lote 3 */}
            <Route path="/blog/ten-commandments-catholic/" element={<TenCommandmentsCatholic />} />
            <Route path="/blog/fruits-of-the-holy-spirit/" element={<FruitsOfHolySpirit />} />
            <Route path="/blog/catholic-teaching-on-divorce/" element={<CatholicTeachingOnDivorce />} />
            {/* SEO Articles Lote 4 */}
            <Route path="/blog/what-is-purgatory-guide/" element={<WhatIsPurgatory />} />
            <Route path="/blog/saint-benedict-medal/" element={<SaintBenedictMedal />} />
            <Route path="/blog/what-is-the-nicene-creed/" element={<WhatIsTheNiceneCreed />} />
            {/* SEO Articles Lote 5 */}
            <Route path="/blog/eucharistic-miracles-science/" element={<EucharisticMiraclesScience />} />
            <Route path="/blog/catholic-view-on-ghosts/" element={<CatholicViewOnGhosts />} />
            <Route path="/blog/saint-peregrine-novena/" element={<SaintPeregrineNovena />} />
            {/* SEO Articles Lote 6 */}
            <Route path="/blog/three-days-of-darkness-prophecy/" element={<ThreeDaysOfDarkness />} />
            <Route path="/blog/incorruptible-saints-miracle/" element={<IncorruptibleSaints />} />
            <Route path="/blog/miraculous-medal-guide/" element={<MiraculousMedalGuide />} />
            {/* SEO Articles Lote 7 */}
            <Route path="/blog/our-lady-undoer-of-knots/" element={<OurLadyUndoerOfKnots />} />
            <Route path="/blog/saint-dymphna-mental-health/" element={<SaintDymphnaMentalHealth />} />
            <Route path="/blog/why-does-god-allow-suffering/" element={<TheProblemOfSuffering />} />
            {/* SEO Articles Lote 8 */}
            <Route path="/blog/miracle-of-guadalupe-science/" element={<OurLadyOfGuadalupeScience />} />
            <Route path="/blog/the-crusades-fact-vs-fiction/" element={<TheCrusadesHistory />} />
            <Route path="/blog/catholicism-and-evolution-guide/" element={<CatholicismAndEvolution />} />
            {/* SEO Articles Lote 9 */}
            <Route path="/blog/guardian-angels-guide/" element={<GuardianAngels />} />
            <Route path="/blog/catholic-view-on-wealth/" element={<CatholicViewOnWealth />} />
            <Route path="/blog/saint-john-vianney-cure-of-ars/" element={<SaintJohnVianneyCureOfArs />} />
            {/* SEO Articles Lote 10 */}
            <Route path="/blog/brown-scapular-guide/" element={<BrownScapularGuide />} />
            <Route path="/blog/st-michael-lent-guide/" element={<SaintMichaelLent />} />
            <Route path="/blog/sacred-heart-promises/" element={<SacredHeartPromises />} />
            
            {/* Newly activated articles */}
            <Route path="/blog/st-joseph-novena-house/" element={<StJosephNovenaHouse />} />
            <Route path="/blog/catholic-inner-healing-guide/" element={<CatholicInnerHealingGuide />} />
            <Route path="/blog/our-lady-of-fatima-guide/" element={<OurLadyOfFatimaGuide />} />
            <Route path="/blog/liturgical-seasons-guide/" element={<LiturgicalSeasonsGuide />} />
            <Route path="/blog/vocational-discernment-guide/" element={<VocationalDiscernmentGuide />} />
            <Route path="/blog/catholic-mental-health-guide/" element={<CatholicMentalHealthGuide />} />
            <Route path="/blog/our-lady-of-lourdes-guide/" element={<OurLadyOfLourdesGuide />} />
            <Route path="/blog/catholic-sacramentals-guide/" element={<CatholicSacramentalsGuide />} />
            <Route path="/blog/liturgy-of-the-hours-guide/" element={<LiturgyOfTheHoursGuide />} />
            <Route path="/blog/catholic-dating-guide/" element={<CatholicDatingGuide />} />
            <Route path="/blog/catholic-parenting-guide/" element={<CatholicParentingGuide />} />
            <Route path="/blog/spiritual-life-basics/" element={<SpiritualLifeBasics />} />
            <Route path="/blog/healing-through-faith/" element={<HealingThroughFaith />} />
            <Route path="/blog/dignity-of-work/" element={<DignityOfWork />} />
            <Route path="/blog/saint-padre-pio-miracles/" element={<SaintPadrePioMiracles />} />
            <Route path="/blog/prophecies-of-fatima/" element={<PropheciesOfFatima />} />
            <Route path="/blog/novenas-explained/" element={<NovenasExplained />} />
            <Route path="/blog/divine-office-laity/" element={<DivineOfficeLaity />} />
            <Route path="/blog/faith-and-anxiety/" element={<FaithAndAnxiety />} />
            <Route path="/blog/managing-depression/" element={<ManagingDepression />} />
            <Route path="/blog/sacrament-of-matrimony/" element={<SacramentOfMatrimony />} />
            <Route path="/blog/eucharistic-prayers/" element={<EucharisticPrayers />} />
            <Route path="/blog/lent-preparation-guide/" element={<LentPreparationGuide />} />
            <Route path="/blog/jubilee-pilgrimage-guide/" element={<JubileePilgrimageGuide />} />
            <Route path="/blog/catholic-church-history/" element={<CatholicChurchHistory />} />
            <Route path="/blog/how-to-read-bible/" element={<HowToReadBible />} />
            <Route path="/blog/catholic-family-traditions/" element={<CatholicFamilyTraditions />} />
            <Route path="/blog/holy-water-sacramental/" element={<HolyWaterSacramental />} />
            <Route path="/blog/catholic-social-teaching-today/" element={<CatholicSocialTeachingToday />} />
            <Route path="/blog/living-virtue/" element={<LivingVirtue />} />
            <Route path="/blog/rosary-mysteries-meditation/" element={<RosaryMysteriesMeditation />} />
            <Route path="/blog/catholic-marriage-preparation/" element={<CatholicMarriagePreparation />} />

            {/* High-Priority Articles Batch */}
            <Route path="/blog/who-is-pope-leo-xiv/" element={<PopeLeoXIV />} />
            <Route path="/blog/pope-francis-legacy/" element={<PopeFrancisLegacy />} />
            <Route path="/blog/best-catholic-bible-translations/" element={<BestCatholicBibleTranslations />} />
            <Route path="/blog/catholic-teaching-on-salvation/" element={<CatholicTeachingOnSalvation />} />
            <Route path="/blog/catholic-wedding-ceremony-guide/" element={<CatholicWeddingCeremony />} />

            {/* High-Priority Articles Batch 2 */}
            <Route path="/blog/can-catholics-eat-meat-on-fridays/" element={<CanCatholicsEatMeat />} />
            <Route path="/blog/catholic-funeral-rites-explained/" element={<CatholicFuneralRites />} />
            <Route path="/blog/are-non-catholics-saved/" element={<AreNonCatholicsSaved />} />
            <Route path="/blog/deuterocanonical-books-catholic-bible/" element={<DeuterocanonicalBooks />} />
            <Route path="/blog/why-did-the-protestant-reformation-happen/" element={<WhyProtestantReformation />} />

            {/* Category Articles */}
            <Route path="/blog/how-to-pray-intercessory-prayer/" element={<HowToPrayIntercessory />} />
            <Route path="/blog/how-to-do-a-holy-hour/" element={<HowToDoHolyHour />} />
            <Route path="/blog/catholic-living-in-secular-world/" element={<CatholicLivingSecularWorld />} />
            <Route path="/blog/catholic-morning-routine/" element={<CatholicMorningRoutine />} />
            <Route path="/blog/saint-francis-of-assisi/" element={<SaintFrancisOfAssisi />} />
            <Route path="/blog/all-saints-day-all-souls-day/" element={<AllSaintsAllSoulsDay />} />
            <Route path="/blog/what-is-the-catechism-of-the-catholic-church/" element={<WhatIsTheCatechism />} />
            <Route path="/blog/catholic-apologetics-guide/" element={<CatholicApologeticsGuide />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}

            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
