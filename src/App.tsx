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
const WhatIsRCIA = lazy(() => import("./pages/blog/WhatIsRCIAGuide"));
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

// New Saints & Marian Articles
const OurLadyGuadalupePatronessAmericas = lazy(() => import("./pages/blog/OurLadyGuadalupePatronessAmericas"));
const SaintKateriTekakwitha = lazy(() => import("./pages/blog/SaintKateriTekakwitha"));
const OurLadyImmaculateConceptionUSA = lazy(() => import("./pages/blog/OurLadyImmaculateConceptionUSA"));

// New April 2026 Articles
const SaintAugustineOfHippo = lazy(() => import("./pages/blog/SaintAugustineOfHippo"));
const PrayingForSoulsInPurgatory = lazy(() => import("./pages/blog/PrayingForSoulsInPurgatory"));
const CorpusChristiCatholic = lazy(() => import("./pages/blog/CorpusChristiCatholic"));

// Lote 1
const SaintThomasAquinas = lazy(() => import("./pages/blog/SaintThomasAquinas"));
const SaintJoanOfArc = lazy(() => import("./pages/blog/SaintJoanOfArc"));
const WhatIsTheTrinity = lazy(() => import("./pages/blog/WhatIsTheTrinity"));

// Lote 2
const SaintElizabethAnnSeton = lazy(() => import("./pages/blog/SaintElizabethAnnSeton"));
const SaintMaximilianKolbe = lazy(() => import("./pages/blog/SaintMaximilianKolbe"));
const CatholicPrayerForProtection = lazy(() => import("./pages/blog/CatholicPrayerForProtection"));

// Lote 3
const HowToPrayNovena = lazy(() => import("./pages/blog/HowToPrayNovena"));
const IsItSinToMissMass = lazy(() => import("./pages/blog/IsItSinToMissMass"));
const WhatIsPentecost = lazy(() => import("./pages/blog/WhatIsPentecost"));

// Lote 4
const CatholicFirstCommunion = lazy(() => import("./pages/blog/CatholicFirstCommunion"));
const CatholicLastRites = lazy(() => import("./pages/blog/CatholicLastRites"));
const HowToOvercomeSin = lazy(() => import("./pages/blog/HowToOvercomeSin"));

// Lote 5
const CatholicTeachingOnPornography = lazy(() => import("./pages/blog/CatholicTeachingOnPornography"));
// Lote 7
const WhatIsGraceCatholic = lazy(() => import("./pages/blog/WhatIsGraceCatholic"));
// Lote 9
const SaintPeterApostle = lazy(() => import("./pages/blog/SaintPeterApostle"));
const SaintPaulApostle = lazy(() => import("./pages/blog/SaintPaulApostle"));
const CatholicTeachingOnGambling = lazy(() => import("./pages/blog/CatholicTeachingOnGambling"));
// Lote 10
const DidJesusFoundTheCatholicChurch = lazy(() => import("./pages/blog/DidJesusFoundTheCatholicChurch"));
const CatholicTeachingOnDrugs = lazy(() => import("./pages/blog/CatholicTeachingOnDrugs"));
const CatholicGriefAndLoss = lazy(() => import("./pages/blog/CatholicGriefAndLoss"));

// Super Artigos
const HowToPrayRosaryComplete = lazy(() => import("./pages/blog/HowToPrayRosaryComplete"));
const CatholicTeachingOnHeaven = lazy(() => import("./pages/blog/CatholicTeachingOnHeaven"));
const SignsOfVocation = lazy(() => import("./pages/blog/SignsOfVocation"));

// Articles May 2026
const CatholicTeachingOnSocialMedia = lazy(() => import("./pages/blog/CatholicTeachingOnSocialMedia"));
const CatholicTeachingOnEnvironment = lazy(() => import("./pages/blog/CatholicTeachingOnEnvironment"));
const HowToPrayForSomeone = lazy(() => import("./pages/blog/HowToPrayForSomeone"));

// Articles May 2026 Batch 2
const CatholicTeachingOnForgiveness = lazy(() => import("./pages/blog/CatholicTeachingOnForgiveness"));

// Articles May 2026 Batch 3
const CatholicTeachingOnDeath = lazy(() => import("./pages/blog/CatholicTeachingOnDeath"));
const SaintDominic = lazy(() => import("./pages/blog/SaintDominic"));
const CatholicTeachingOnPrayer = lazy(() => import("./pages/blog/CatholicTeachingOnPrayer"));

// Articles May 2026 Batch 4
const CatholicTeachingOnMarriage = lazy(() => import("./pages/blog/CatholicTeachingOnMarriage"));
const WhatIsTheCatholicMass = lazy(() => import("./pages/blog/WhatIsTheCatholicMass"));
const SaintCatherineOfSiena = lazy(() => import("./pages/blog/SaintCatherineOfSiena"));

// US Market & General Articles
const CatholicChurchNearMe = lazy(() => import("./pages/blog/CatholicChurchNearMe"));
const CatholicHolyDaysUSA = lazy(() => import("./pages/blog/CatholicHolyDaysUSA"));
const CatholicSchoolsAmerica = lazy(() => import("./pages/blog/CatholicSchoolsAmerica"));
const SaintJosephineBakhita = lazy(() => import("./pages/blog/SaintJosephineBAkhita"));
const CatholicTeachingOnJustice = lazy(() => import("./pages/blog/CatholicTeachingOnJustice"));

// Trending 2025-2026
const GenZAndCatholicism = lazy(() => import("./pages/blog/GenZAndCatholicism"));
const CatholicConversionsRising = lazy(() => import("./pages/blog/CatholicConversionsRising"));
const WhyMenReturnToCatholicChurch = lazy(() => import("./pages/blog/WhyMenReturnToCatholicChurch"));

// Virtue & Saints Articles
const CatholicTeachingOnHumility = lazy(() => import("./pages/blog/CatholicTeachingOnHumility"));
const CatholicTeachingOnHope = lazy(() => import("./pages/blog/CatholicTeachingOnHope"));
const SaintJohnOfTheCross = lazy(() => import("./pages/blog/SaintJohnOfTheCross"));

// To 300 - Batch 1
const CatholicPrayerForAnxiety = lazy(() => import("./pages/blog/CatholicPrayerForAnxiety"));
const WhatIsTheBibleCatholic = lazy(() => import("./pages/blog/WhatIsTheBibleCatholic"));
const CatholicTeachingOnCharity = lazy(() => import("./pages/blog/CatholicTeachingOnCharity"));

// To 300 - Batch 2
const CatholicTeachingOnBaptism = lazy(() => import("./pages/blog/CatholicTeachingOnBaptism"));

const SaintMaryMagdalene = lazy(() => import("./pages/blog/SaintMaryMagdalene"));
const CatholicTeachingOnConsciousness = lazy(() => import("./pages/blog/CatholicTeachingOnConsciousness"));

// To 300 - Batch 3
const CatholicTeachingOnPride = lazy(() => import("./pages/blog/CatholicTeachingOnPride"));

// To 300 - Final
const CatholicTeachingOnBeauty = lazy(() => import("./pages/blog/CatholicTeachingOnBeauty"));
const CatholicTeachingOnFreedom = lazy(() => import("./pages/blog/CatholicTeachingOnFreedom"));

// New Virtue Articles
const CatholicTeachingOnPeace = lazy(() => import("./pages/blog/CatholicTeachingOnPeace"));
const CatholicTeachingOnPatience = lazy(() => import("./pages/blog/CatholicTeachingOnPatience"));
const CatholicTeachingOnGratitude = lazy(() => import("./pages/blog/CatholicTeachingOnGratitude"));

const CatholicTeachingOnLove = lazy(() => import("./pages/blog/CatholicTeachingOnLove"));
const CatholicTeachingOnTruth = lazy(() => import("./pages/blog/CatholicTeachingOnTruth"));

// High-Volume Faith Articles
const CatholicSpiritualWarfare = lazy(() => import("./pages/blog/CatholicSpiritualWarfare"));
const FaithAndWorksCatholic = lazy(() => import("./pages/blog/FaithAndWorksCatholic"));
const CatholicTeachingOnEndTimes = lazy(() => import("./pages/blog/CatholicTeachingOnEndTimes"));

// New Doctrine & Saints Articles
const WhatIsCatholicFaith = lazy(() => import("./pages/blog/WhatIsCatholicFaith"));
const CatholicTeachingOnFreeMasonry = lazy(() => import("./pages/blog/CatholicTeachingOnFreeMasonry"));
const SaintAnneAndJoachim = lazy(() => import("./pages/blog/SaintAnneAndJoachim"));
const CatholicTeachingOnWar = lazy(() => import("./pages/blog/CatholicTeachingOnWar"));
const SaintRitaOfCascia = lazy(() => import("./pages/blog/SaintRitaOfCascia"));
const CatholicTeachingOnScience = lazy(() => import("./pages/blog/CatholicTeachingOnScience"));

const WhatIsCatholicSpirituality = lazy(() => import("./pages/blog/WhatIsCatholicSpirituality"));
const CatholicTeachingOnSuffering = lazy(() => import("./pages/blog/CatholicTeachingOnSuffering"));

// New Articles April 2026
const CatholicTeachingOnAngels = lazy(() => import("./pages/blog/CatholicTeachingOnAngels"));
const CatholicTeachingOnMoney = lazy(() => import("./pages/blog/CatholicTeachingOnMoney"));
const WhatIsHolyOrders = lazy(() => import("./pages/blog/WhatIsHolyOrders"));
// Lote 8
const PrayerForJobAndWork = lazy(() => import("./pages/blog/PrayerForJobAndWork"));
const PrayerForTheSick = lazy(() => import("./pages/blog/PrayerForTheSick"));
const CatholicAndOrthodoxDifferences = lazy(() => import("./pages/blog/CatholicAndOrthodoxDifferences"));
const WhatIsOriginalSin = lazy(() => import("./pages/blog/WhatIsOriginalSin"));
const CatholicTeachingOnHell = lazy(() => import("./pages/blog/CatholicTeachingOnHell"));
// Lote 6
const SaintTeresaOfAvila = lazy(() => import("./pages/blog/SaintTeresaOfAvila"));
const SaintIgnatiusOfLoyola = lazy(() => import("./pages/blog/SaintIgnatiusOfLoyola"));
const SaintBernadetteSoubirous = lazy(() => import("./pages/blog/SaintBernadetteSoubirous"));
const CatholicPrayerForMarriage = lazy(() => import("./pages/blog/CatholicPrayerForMarriage"));
const CatholicTeachingOnAlcohol = lazy(() => import("./pages/blog/CatholicTeachingOnAlcohol"));

// High-Priority Articles
const PopeLeoXIV = lazy(() => import("./pages/blog/PopeLeoXIV"));
const PopeFrancisLegacy = lazy(() => import("./pages/blog/PopeFrancisLegacy"));
const BestCatholicBibleTranslations = lazy(() => import("./pages/blog/BestCatholicBibleTranslations"));
const CatholicTeachingOnSalvation = lazy(() => import("./pages/blog/CatholicTeachingOnSalvation"));
const CatholicWeddingCeremony = lazy(() => import("./pages/blog/CatholicWeddingCeremony"));

// Doctrine & Social Issues Series
const CatholicTeachingOnTransgender = lazy(() => import("./pages/blog/CatholicTeachingOnTransgender"));
const CatholicTeachingOnSameSexMarriage = lazy(() => import("./pages/blog/CatholicTeachingOnSameSexMarriage"));
const CatholicTeachingOnEuthanasia = lazy(() => import("./pages/blog/CatholicTeachingOnEuthanasia"));
const CatholicTeachingOnIVF = lazy(() => import("./pages/blog/CatholicTeachingOnIVF"));
// Seasonal / Liturgical Year Series
const AshWednesday2026 = lazy(() => import("./pages/blog/AshWednesday2026"));
const LentPrayers = lazy(() => import("./pages/blog/LentPrayers"));
const EasterMassTimes = lazy(() => import("./pages/blog/EasterMassTimes"));
const AdventPrayers = lazy(() => import("./pages/blog/AdventPrayers"));
const ChristmasMassNearMe = lazy(() => import("./pages/blog/ChristmasMassNearMe"));
const GoodFridayPrayers = lazy(() => import("./pages/blog/GoodFridayPrayers"));

// Saints & Intercession Series
const StJudePrayer = lazy(() => import("./pages/blog/StJudePrayer"));
const StAnthonyPrayer = lazy(() => import("./pages/blog/StAnthonyPrayer"));
const CatholicSaintsList = lazy(() => import("./pages/blog/CatholicSaintsList"));
const PatronSaintsGuide = lazy(() => import("./pages/blog/PatronSaintsGuide"));

// Bible & Readings Series
const CatholicBibleGuide = lazy(() => import("./pages/blog/CatholicBibleGuide"));
const DailyMassReadings = lazy(() => import("./pages/blog/DailyMassReadings"));
const CatholicBibleVerses = lazy(() => import("./pages/blog/CatholicBibleVerses"));
const GospelReadingToday = lazy(() => import("./pages/blog/GospelReadingToday"));
const HowToStudyBibleCatholic = lazy(() => import("./pages/blog/HowToStudyBibleCatholic"));

// Conversion & RCIA Series
const HowToBecomeCatholicGuide = lazy(() => import("./pages/blog/HowToBecomeCatholicGuide"));
const WhatIsRCIAGuide = lazy(() => import("./pages/blog/WhatIsRCIAGuide"));
const ConvertingToCatholicism = lazy(() => import("./pages/blog/ConvertingToCatholicism"));
const ReasonsToBecomeCatholic = lazy(() => import("./pages/blog/ReasonsToBecomeCatholic"));

// Faith Questions Series
const WhatDoCatholicsBeliieve = lazy(() => import("./pages/blog/WhatDoCatholicsBeliieve"));
const IsCatholicismChristian = lazy(() => import("./pages/blog/IsCatholicismChristian"));
const WhyDoCatholics = lazy(() => import("./pages/blog/WhyDoCatholics"));
const WhatIsTheCatholicChurch = lazy(() => import("./pages/blog/WhatIsTheCatholicChurch"));
const WhatIsPurgatoryGuide = lazy(() => import("./pages/blog/WhatIsPurgatoryGuide"));

// Mass & Sacraments Series
const MassTimesNearMe = lazy(() => import("./pages/blog/MassTimesNearMe"));
const HowToGoToConfessionGuide = lazy(() => import("./pages/blog/HowToGoToConfessionGuide"));
const CatholicMassGuide = lazy(() => import("./pages/blog/CatholicMassGuide"));
const CatholicConfessionGuide = lazy(() => import("./pages/blog/CatholicConfessionGuide"));
const CatholicMassOnline = lazy(() => import("./pages/blog/CatholicMassOnline"));
const ExaminationOfConscienceGuideDetailed = lazy(() => import("./pages/blog/ExaminationOfConscienceGuideDetailed"));

// Prayer Articles Series
const CatholicPrayersGuide = lazy(() => import("./pages/blog/CatholicPrayersGuide"));
const NightPrayerCatholic = lazy(() => import("./pages/blog/NightPrayerCatholic"));
const MorningPrayerCatholic = lazy(() => import("./pages/blog/MorningPrayerCatholic"));
const SaintMichaelPrayer = lazy(() => import("./pages/blog/SaintMichaelPrayer"));
const PrayersForHealingCatholic = lazy(() => import("./pages/blog/PrayersForHealingCatholic"));
const RosaryForBeginners = lazy(() => import("./pages/blog/RosaryForBeginners"));
const PrayerBeforeMealsCatholic = lazy(() => import("./pages/blog/PrayerBeforeMealsCatholic"));

// Saints Series
const VirginMaryGuide = lazy(() => import("./pages/blog/VirginMaryGuide"));
const SaintJosephGuide = lazy(() => import("./pages/blog/SaintJosephGuide"));
const SaintPatrick = lazy(() => import("./pages/blog/SaintPatrick"));
const SaintNicholas = lazy(() => import("./pages/blog/SaintNicholas"));
const SaintChristopher = lazy(() => import("./pages/blog/SaintChristopher"));
const SaintVincentDePaul = lazy(() => import("./pages/blog/SaintVincentDePaul"));

// Category Articles
const HowToPrayIntercessory = lazy(() => import("./pages/blog/HowToPrayIntercessory"));
const HowToDoHolyHour = lazy(() => import("./pages/blog/HowToDoHolyHour"));
const CatholicLivingSecularWorld = lazy(() => import("./pages/blog/CatholicLivingSecularWorld"));
const CatholicMorningRoutine = lazy(() => import("./pages/blog/CatholicMorningRoutine"));
const SaintFrancisOfAssisi = lazy(() => import("./pages/blog/SaintFrancisOfAssisi"));
const AllSaintsAllSoulsDay = lazy(() => import("./pages/blog/AllSaintsAllSoulsDay"));
const WhatIsTheCatechism = lazy(() => import("./pages/blog/WhatIsTheCatechism"));
const CatholicApologeticsGuide = lazy(() => import("./pages/blog/CatholicApologeticsGuide"));

// Doctrine & Pastoral Articles Batch 11
const CatholicAnnulmentProcess = lazy(() => import("./pages/blog/CatholicAnnulmentProcess"));
const DivorcedCatholicCommunion = lazy(() => import("./pages/blog/DivorcedCatholicCommunion"));
const CatholicTeachingOnContraception = lazy(() => import("./pages/blog/CatholicTeachingOnContraception"));
const CatholicProLifeGuide = lazy(() => import("./pages/blog/CatholicProLifeGuide"));
const StayingCatholicInCollege = lazy(() => import("./pages/blog/StayingCatholicInCollege"));
const WhyYoungCatholicsLeave = lazy(() => import("./pages/blog/WhyYoungCatholicsLeave"));

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

            {/* Doctrine & Social Issues Series */}
            <Route path="/blog/catholic-teaching-on-transgender/" element={<CatholicTeachingOnTransgender />} />
            <Route path="/blog/catholic-teaching-on-same-sex-marriage/" element={<CatholicTeachingOnSameSexMarriage />} />
            <Route path="/blog/catholic-teaching-on-euthanasia/" element={<CatholicTeachingOnEuthanasia />} />
            <Route path="/blog/catholic-teaching-on-ivf/" element={<CatholicTeachingOnIVF />} />
            {/* Seasonal / Liturgical Year Series */}
            <Route path="/blog/ash-wednesday-2026/" element={<AshWednesday2026 />} />
            <Route path="/blog/lent-prayers/" element={<LentPrayers />} />
            <Route path="/blog/easter-mass-times-2026/" element={<EasterMassTimes />} />
            <Route path="/blog/advent-prayers/" element={<AdventPrayers />} />
            <Route path="/blog/christmas-mass-near-me/" element={<ChristmasMassNearMe />} />
            <Route path="/blog/good-friday-prayers/" element={<GoodFridayPrayers />} />

            {/* Saints & Intercession Series */}
            <Route path="/blog/st-jude-prayer/" element={<StJudePrayer />} />
            <Route path="/blog/st-anthony-prayer/" element={<StAnthonyPrayer />} />
            <Route path="/blog/catholic-saints-list/" element={<CatholicSaintsList />} />
            <Route path="/blog/patron-saints-guide/" element={<PatronSaintsGuide />} />

            {/* Bible & Readings Series */}
            <Route path="/blog/catholic-bible-guide/" element={<CatholicBibleGuide />} />
            <Route path="/blog/daily-mass-readings-catholic/" element={<DailyMassReadings />} />
            <Route path="/blog/catholic-bible-verses/" element={<CatholicBibleVerses />} />
            <Route path="/blog/gospel-reading-today-catholic/" element={<GospelReadingToday />} />
            <Route path="/blog/how-to-study-the-bible-catholic/" element={<HowToStudyBibleCatholic />} />

            {/* Conversion & RCIA Series */}
            <Route path="/blog/how-to-become-catholic/" element={<HowToBecomeCatholicGuide />} />
            <Route path="/blog/what-is-rcia-explained/" element={<WhatIsRCIAGuide />} />
            <Route path="/blog/converting-to-catholicism/" element={<ConvertingToCatholicism />} />
            <Route path="/blog/reasons-to-become-catholic/" element={<ReasonsToBecomeCatholic />} />

            {/* Faith Questions Series */}
            <Route path="/blog/what-do-catholics-believe/" element={<WhatDoCatholicsBeliieve />} />
            <Route path="/blog/is-catholicism-christian/" element={<IsCatholicismChristian />} />
            <Route path="/blog/why-do-catholics/" element={<WhyDoCatholics />} />
            <Route path="/blog/what-is-the-catholic-church/" element={<WhatIsTheCatholicChurch />} />
            <Route path="/blog/what-is-purgatory-explained/" element={<WhatIsPurgatoryGuide />} />

            {/* Mass & Sacraments Series */}
            <Route path="/blog/mass-times-near-me/" element={<MassTimesNearMe />} />
            <Route path="/blog/how-to-go-to-confession-guide/" element={<HowToGoToConfessionGuide />} />
            <Route path="/blog/catholic-mass-complete-guide/" element={<CatholicMassGuide />} />
            <Route path="/blog/catholic-confession-guide/" element={<CatholicConfessionGuide />} />
            <Route path="/blog/catholic-mass-online/" element={<CatholicMassOnline />} />
            <Route path="/blog/examination-of-conscience-before-confession/" element={<ExaminationOfConscienceGuideDetailed />} />

            {/* Prayer Articles Series */}
            <Route path="/blog/catholic-prayers-complete-guide/" element={<CatholicPrayersGuide />} />
            <Route path="/blog/night-prayer-catholic/" element={<NightPrayerCatholic />} />
            <Route path="/blog/morning-prayer-catholic/" element={<MorningPrayerCatholic />} />
            <Route path="/blog/saint-michael-prayer/" element={<SaintMichaelPrayer />} />
            <Route path="/blog/prayers-for-healing-catholic/" element={<PrayersForHealingCatholic />} />
            <Route path="/blog/how-to-pray-rosary/" element={<RosaryCompleteGuide />} />
            <Route path="/blog/how-to-pray-the-rosary-step-by-step/" element={<RosaryForBeginners />} />
            <Route path="/blog/prayer-before-meals-catholic/" element={<PrayerBeforeMealsCatholic />} />

            {/* Saints Series */}
            <Route path="/blog/virgin-mary-complete-guide/" element={<VirginMaryGuide />} />
            <Route path="/blog/saint-joseph-complete-guide/" element={<SaintJosephGuide />} />
            <Route path="/blog/saint-patrick/" element={<SaintPatrick />} />
            <Route path="/blog/saint-nicholas/" element={<SaintNicholas />} />
            <Route path="/blog/saint-christopher/" element={<SaintChristopher />} />
            <Route path="/blog/saint-vincent-de-paul/" element={<SaintVincentDePaul />} />

            {/* Category Articles */}
            <Route path="/blog/how-to-pray-intercessory-prayer/" element={<HowToPrayIntercessory />} />
            <Route path="/blog/how-to-do-a-holy-hour/" element={<HowToDoHolyHour />} />
            <Route path="/blog/catholic-living-in-secular-world/" element={<CatholicLivingSecularWorld />} />
            <Route path="/blog/catholic-morning-routine/" element={<CatholicMorningRoutine />} />
            <Route path="/blog/saint-francis-of-assisi/" element={<SaintFrancisOfAssisi />} />
            <Route path="/blog/all-saints-day-all-souls-day/" element={<AllSaintsAllSoulsDay />} />
            <Route path="/blog/what-is-the-catechism-of-the-catholic-church/" element={<WhatIsTheCatechism />} />
            <Route path="/blog/catholic-apologetics-guide/" element={<CatholicApologeticsGuide />} />

            {/* Doctrine & Pastoral Articles Batch 11 */}
            <Route path="/blog/catholic-annulment-process/" element={<CatholicAnnulmentProcess />} />
            <Route path="/blog/can-divorced-catholic-receive-communion/" element={<DivorcedCatholicCommunion />} />
            <Route path="/blog/catholic-teaching-on-contraception/" element={<CatholicTeachingOnContraception />} />
            <Route path="/blog/catholic-pro-life-guide/" element={<CatholicProLifeGuide />} />
            <Route path="/blog/staying-catholic-in-college/" element={<StayingCatholicInCollege />} />
            <Route path="/blog/why-young-catholics-leave-the-church/" element={<WhyYoungCatholicsLeave />} />

            {/* New Saints & Marian Articles */}
            <Route path="/blog/our-lady-of-guadalupe-patroness-americas/" element={<OurLadyGuadalupePatronessAmericas />} />
            <Route path="/blog/saint-kateri-tekakwitha/" element={<SaintKateriTekakwitha />} />
            <Route path="/blog/our-lady-immaculate-conception-patroness-usa/" element={<OurLadyImmaculateConceptionUSA />} />
            <Route path="/blog/saint-augustine-of-hippo/" element={<SaintAugustineOfHippo />} />
            <Route path="/blog/praying-for-souls-in-purgatory/" element={<PrayingForSoulsInPurgatory />} />
            <Route path="/blog/corpus-christi-catholic/" element={<CorpusChristiCatholic />} />
            <Route path="/blog/saint-thomas-aquinas/" element={<SaintThomasAquinas />} />
            <Route path="/blog/saint-joan-of-arc/" element={<SaintJoanOfArc />} />
            <Route path="/blog/what-is-the-holy-trinity/" element={<WhatIsTheTrinity />} />
            <Route path="/blog/saint-elizabeth-ann-seton/" element={<SaintElizabethAnnSeton />} />
            <Route path="/blog/saint-maximilian-kolbe/" element={<SaintMaximilianKolbe />} />
            <Route path="/blog/catholic-prayer-for-protection/" element={<CatholicPrayerForProtection />} />
            <Route path="/blog/how-to-pray-a-novena-guide/" element={<HowToPrayNovena />} />
            <Route path="/blog/is-it-a-sin-to-miss-mass/" element={<IsItSinToMissMass />} />
            <Route path="/blog/what-is-pentecost-catholic/" element={<WhatIsPentecost />} />
            <Route path="/blog/catholic-first-communion-guide/" element={<CatholicFirstCommunion />} />
            <Route path="/blog/catholic-last-rites-explained/" element={<CatholicLastRites />} />
            <Route path="/blog/how-to-overcome-sin-catholic/" element={<HowToOvercomeSin />} />
            <Route path="/blog/catholic-teaching-on-pornography/" element={<CatholicTeachingOnPornography />} />
            <Route path="/blog/catholic-prayer-for-marriage/" element={<CatholicPrayerForMarriage />} />
            <Route path="/blog/catholic-teaching-on-alcohol/" element={<CatholicTeachingOnAlcohol />} />

            <Route path="/blog/saint-teresa-of-avila/" element={<SaintTeresaOfAvila />} />
            <Route path="/blog/saint-ignatius-of-loyola/" element={<SaintIgnatiusOfLoyola />} />
            <Route path="/blog/saint-bernadette-soubirous/" element={<SaintBernadetteSoubirous />} />

            <Route path="/blog/what-is-grace-catholic/" element={<WhatIsGraceCatholic />} />
            <Route path="/blog/what-is-original-sin-catholic/" element={<WhatIsOriginalSin />} />
            <Route path="/blog/does-hell-exist-catholic/" element={<CatholicTeachingOnHell />} />

            {/* Lote 8 */}
            <Route path="/blog/catholic-prayer-for-job-and-work/" element={<PrayerForJobAndWork />} />
            <Route path="/blog/catholic-prayer-for-the-sick/" element={<PrayerForTheSick />} />
            <Route path="/blog/catholic-vs-orthodox-differences/" element={<CatholicAndOrthodoxDifferences />} />

            <Route path="/blog/catholic-teaching-on-social-media/" element={<CatholicTeachingOnSocialMedia />} />
            <Route path="/blog/catholic-teaching-on-environment/" element={<CatholicTeachingOnEnvironment />} />
            <Route path="/blog/how-to-pray-for-someone-catholic/" element={<HowToPrayForSomeone />} />
            <Route path="/blog/catholic-teaching-on-death/" element={<CatholicTeachingOnDeath />} />
            <Route path="/blog/saint-dominic-founder-dominicans/" element={<SaintDominic />} />
            <Route path="/blog/what-is-prayer-catholic/" element={<CatholicTeachingOnPrayer />} />

            <Route path="/blog/catholic-teaching-on-marriage/" element={<CatholicTeachingOnMarriage />} />
            <Route path="/blog/what-is-the-catholic-mass-guide/" element={<WhatIsTheCatholicMass />} />
            <Route path="/blog/saint-catherine-of-siena/" element={<SaintCatherineOfSiena />} />
            <Route path="/blog/how-to-find-catholic-church-near-me/" element={<CatholicChurchNearMe />} />
            <Route path="/blog/catholic-holy-days-of-obligation-usa/" element={<CatholicHolyDaysUSA />} />
            <Route path="/blog/catholic-schools-in-america/" element={<CatholicSchoolsAmerica />} />
            <Route path="/blog/saint-josephine-bakhita/" element={<SaintJosephineBakhita />} />
            <Route path="/blog/catholic-teaching-on-justice/" element={<CatholicTeachingOnJustice />} />
            <Route path="/blog/gen-z-and-catholicism/" element={<GenZAndCatholicism />} />
            <Route path="/blog/catholic-conversions-rising/" element={<CatholicConversionsRising />} />
            <Route path="/blog/why-young-men-return-to-catholic-church/" element={<WhyMenReturnToCatholicChurch />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}

            {/* Lote 9 */}
            <Route path="/blog/saint-peter-apostle/" element={<SaintPeterApostle />} />
            <Route path="/blog/saint-paul-apostle/" element={<SaintPaulApostle />} />
            <Route path="/blog/is-gambling-a-sin-catholic/" element={<CatholicTeachingOnGambling />} />

            {/* Lote 10 */}
            <Route path="/blog/did-jesus-found-the-catholic-church/" element={<DidJesusFoundTheCatholicChurch />} />
            <Route path="/blog/catholic-teaching-on-drugs/" element={<CatholicTeachingOnDrugs />} />
            <Route path="/blog/catholic-guide-to-grief-and-loss/" element={<CatholicGriefAndLoss />} />

            {/* Super Artigos */}
            <Route path="/blog/how-to-pray-the-rosary-complete-guide/" element={<HowToPrayRosaryComplete />} />
            <Route path="/blog/what-is-heaven-like-catholic/" element={<CatholicTeachingOnHeaven />} />
            <Route path="/blog/signs-of-a-vocation-priesthood-religious-life/" element={<SignsOfVocation />} />

            {/* New Articles April 2026 */}
            <Route path="/blog/catholic-teaching-on-angels/" element={<CatholicTeachingOnAngels />} />
            <Route path="/blog/catholic-teaching-on-money-and-wealth/" element={<CatholicTeachingOnMoney />} />
            <Route path="/blog/what-is-holy-orders-catholic/" element={<WhatIsHolyOrders />} />

            <Route path="/blog/catholic-teaching-on-forgiveness/" element={<CatholicTeachingOnForgiveness />} />
            <Route path="/blog/what-is-catholic-spirituality/" element={<WhatIsCatholicSpirituality />} />
            <Route path="/blog/why-does-god-allow-suffering-catholic/" element={<CatholicTeachingOnSuffering />} />

            <Route path="/blog/what-is-the-catholic-faith/" element={<WhatIsCatholicFaith />} />
            <Route path="/blog/catholic-teaching-on-freemasonry/" element={<CatholicTeachingOnFreeMasonry />} />
            <Route path="/blog/saints-anne-and-joachim/" element={<SaintAnneAndJoachim />} />
            <Route path="/blog/catholic-teaching-on-war-and-peace/" element={<CatholicTeachingOnWar />} />
            <Route path="/blog/saint-rita-of-cascia/" element={<SaintRitaOfCascia />} />
            <Route path="/blog/catholic-teaching-on-science/" element={<CatholicTeachingOnScience />} />

            <Route path="/blog/virtue-of-humility-catholic/" element={<CatholicTeachingOnHumility />} />
            <Route path="/blog/virtue-of-hope-catholic/" element={<CatholicTeachingOnHope />} />
            <Route path="/blog/saint-john-of-the-cross/" element={<SaintJohnOfTheCross />} />

            <Route path="/blog/spiritual-warfare-catholic/" element={<CatholicSpiritualWarfare />} />
            <Route path="/blog/faith-and-works-catholic/" element={<FaithAndWorksCatholic />} />
            <Route path="/blog/catholic-teaching-on-end-times/" element={<CatholicTeachingOnEndTimes />} />

            {/* To 300 - Batch 1 */}
            <Route path="/blog/catholic-prayer-for-anxiety/" element={<CatholicPrayerForAnxiety />} />
            <Route path="/blog/what-is-the-bible-catholic/" element={<WhatIsTheBibleCatholic />} />
            <Route path="/blog/what-is-charity-catholic/" element={<CatholicTeachingOnCharity />} />

            <Route path="/blog/catholic-baptism-explained/" element={<CatholicTeachingOnBaptism />} />
            <Route path="/blog/saint-mary-magdalene/" element={<SaintMaryMagdalene />} />
            <Route path="/blog/what-is-conscience-catholic/" element={<CatholicTeachingOnConsciousness />} />

            <Route path="/blog/pride-root-of-sin-catholic/" element={<CatholicTeachingOnPride />} />
            <Route path="/blog/what-is-love-catholic/" element={<CatholicTeachingOnLove />} />
            <Route path="/blog/what-is-truth-catholic/" element={<CatholicTeachingOnTruth />} />

            <Route path="/blog/beauty-and-the-catholic-faith/" element={<CatholicTeachingOnBeauty />} />
            <Route path="/blog/what-is-freedom-catholic/" element={<CatholicTeachingOnFreedom />} />

            <Route path="/blog/catholic-teaching-on-peace/" element={<CatholicTeachingOnPeace />} />
            <Route path="/blog/virtue-of-patience-catholic/" element={<CatholicTeachingOnPatience />} />
            <Route path="/blog/gratitude-catholic-virtue/" element={<CatholicTeachingOnGratitude />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
