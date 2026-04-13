import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import QuizIntro from "./pages/QuizIntro";
import QuizPage from "./pages/QuizPage";
import CheckoutPage from "./pages/CheckoutPage";
import ResultadoPage from "./pages/ResultadoPage";
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
import PeregrinacaoLocal from "./pages/blog/PeregrinacaoLocal";
import FeSaudeMental from "./pages/blog/FeSaudeMental";
import PoderDoSilencio from "./pages/blog/PoderDoSilencio";
import SantosEDepressao from "./pages/blog/SantosEDepressao";
import OracaoEMindfulness from "./pages/blog/OracaoEMindfulness";
import LidandoComLuto from "./pages/blog/LidandoComLuto";
import FeFilhosEraDigital from "./pages/blog/FeFilhosEraDigital";
import IgrejaDomestica from "./pages/blog/IgrejaDomestica";
import HomeschoolingCatolico from "./pages/blog/HomeschoolingCatolico";
import NamoroSanto2026 from "./pages/blog/NamoroSanto2026";
import PapelDosAvos from "./pages/blog/PapelDosAvos";
import PoderDaConfissao from "./pages/blog/PoderDaConfissao";
import EucaristiaDiaADia from "./pages/blog/EucaristiaDiaADia";
import TercoSemDistracao from "./pages/blog/TercoSemDistracao";
import OPecadoOriginalRedencao from "./pages/blog/OPecadoOriginalRedencao";
import OInfernoCeuPurgatorio from "./pages/blog/OInfernoCeuPurgatorio";
import AIgrejaCorpoDeCristo from "./pages/blog/AIgrejaCorpoDeCristo";
import SignificadoSacramentais from "./pages/blog/SignificadoSacramentais";
import LectioDivinaGuia from "./pages/blog/LectioDivinaGuia";
import GracaSantificante from "./pages/blog/GracaSantificante";
import VirtudesCardeais from "./pages/blog/VirtudesCardeais";
import DoutrinaPurgatorio from "./pages/blog/DoutrinaPurgatorio";
import DizimoECaridade from "./pages/blog/DizimoECaridade";
import SantosPaisEMaes from "./pages/blog/SantosPaisEMaes";
import CarloAcutisInternet from "./pages/blog/CarloAcutisInternet";
import SantaDulcePobres from "./pages/blog/SantaDulcePobres";
import EscolherSantoPadroeiro from "./pages/blog/EscolherSantoPadroeiro";
import SaoBentoProtecao from "./pages/blog/SaoBentoProtecao";
import PlanoLeituraBiblia2026 from "./pages/blog/PlanoLeituraBiblia2026";
import OsQuatroEvangelhos from "./pages/blog/OsQuatroEvangelhos";
import ParabolasDeJesus from "./pages/blog/ParabolasDeJesus";
import EvangelizarAmigos from "./pages/blog/EvangelizarAmigos";
import ComunidadeParoquial from "./pages/blog/ComunidadeParoquial";
import AnoLiturgicoGuia from "./pages/blog/AnoLiturgicoGuia";
import AdventoQuaresmaPreparacao from "./pages/blog/AdventoQuaresmaPreparacao";
import VigiliaPascalSignificado from "./pages/blog/VigiliaPascalSignificado";
import CorpusChristiPresencaReal from "./pages/blog/CorpusChristiPresencaReal";
import DomingoDiaDoSenhor from "./pages/blog/DomingoDiaDoSenhor";
import PorQueHonrarMaria from "./pages/blog/PorQueHonrarMaria";
import RosarioArmaEspiritual from "./pages/blog/RosarioArmaEspiritual";
import NossaSenhoraFatimaMensagem from "./pages/blog/NossaSenhoraFatimaMensagem";
import EscapularioCarmoSignificado from "./pages/blog/EscapularioCarmoSignificado";
import ConsagracaoMarianaGuia from "./pages/blog/ConsagracaoMarianaGuia";
import ProsperidadeEspiritualVsMaterial from "./pages/blog/ProsperidadeEspiritualVsMaterial";
import TrabalhoDignoVocacao from "./pages/blog/TrabalhoDignoVocacao";
import GenerosidadeDesprendimento from "./pages/blog/GenerosidadeDesprendimento";
import PorQueRezarParaSantos from "./pages/blog/PorQueRezarParaSantos";
import DiferencaCatolicosEvangelicos from "./pages/blog/DiferencaCatolicosEvangelicos";
import ComoSeConfessarGuia from "./pages/blog/ComoSeConfessarGuia";
import SacramentoBatismo from "./pages/blog/SacramentoBatismo";
import SacramentoCrisma from "./pages/blog/SacramentoCrisma";
import SacramentoEucaristia from "./pages/blog/SacramentoEucaristia";
import SacramentoConfissao from "./pages/blog/SacramentoConfissao";
import SacramentoUncaoEnfermos from "./pages/blog/SacramentoUncaoEnfermos";
import SacramentoOrdem from "./pages/blog/SacramentoOrdem";
import SacramentoMatrimonio from "./pages/blog/SacramentoMatrimonio";
import PrimeiroMandamento from "./pages/blog/PrimeiroMandamento";
import SegundoMandamento from "./pages/blog/SegundoMandamento";
import TerceiroMandamento from "./pages/blog/TerceiroMandamento";
import QuartoMandamento from "./pages/blog/QuartoMandamento";
import QuintoMandamento from "./pages/blog/QuintoMandamento";
import SextoMandamento from "./pages/blog/SextoMandamento";
import SetimoMandamento from "./pages/blog/SetimoMandamento";
import OitavoMandamento from "./pages/blog/OitavoMandamento";
import NonoMandamento from "./pages/blog/NonoMandamento";
import DecimoMandamento from "./pages/blog/DecimoMandamento";
import DomSabedoria from "./pages/blog/DomSabedoria";
import DomEntendimento from "./pages/blog/DomEntendimento";
import DomConselho from "./pages/blog/DomConselho";
import DomFortaleza from "./pages/blog/DomFortaleza";
import DomCiencia from "./pages/blog/DomCiencia";
import DomPiedade from "./pages/blog/DomPiedade";
import DomTemorDeus from "./pages/blog/DomTemorDeus";
import PecadoSoberba from "./pages/blog/PecadoSoberba";
import PecadoAvareza from "./pages/blog/PecadoAvareza";
import PecadoLuxuria from "./pages/blog/PecadoLuxuria";
import PecadoInveja from "./pages/blog/PecadoInveja";
import PecadoGula from "./pages/blog/PecadoGula";
import PecadoIra from "./pages/blog/PecadoIra";
import PecadoPreguica from "./pages/blog/PecadoPreguica";
import OQueAconteceDepoisMorte from "./pages/blog/OQueAconteceDepoisMorte";
import SegundaVindaCristoFimTempos from "./pages/blog/SegundaVindaCristoFimTempos";
import JuizoParticularEFinal from "./pages/blog/JuizoParticularEFinal";
import RessurreicaoDaCarneEsperanca from "./pages/blog/RessurreicaoDaCarneEsperanca";
import PrepararParaEternidade2026 from "./pages/blog/PrepararParaEternidade2026";
import SaoFranciscoEcologia from "./pages/blog/SaoFranciscoEcologia";
import RetiroEspiritualEmCasa from "./pages/blog/RetiroEspiritualEmCasa";
import DirecaoEspiritualImportancia from "./pages/blog/DirecaoEspiritualImportancia";
import SantaTeresinhaPequenaVia from "./pages/blog/SantaTeresinhaPequenaVia";
import PapelDosLeigosNaIgreja from "./pages/blog/PapelDosLeigosNaIgreja";
import BelezaDaLiturgia from "./pages/blog/BelezaDaLiturgia";
import BibliaECiencia from "./pages/blog/BibliaECiencia";
import CombateEspiritualVicios from "./pages/blog/CombateEspiritualVicios";
import SantaFaustinaMisericordia from "./pages/blog/SantaFaustinaMisericordia";
import SaoJoseModeloPai from "./pages/blog/SaoJoseModeloPai";
// Prayer Articles
import OracaoPaiNosso from "./pages/blog/OracaoPaiNosso";
import OracaoAveMaria from "./pages/blog/OracaoAveMaria";
import OracaoCredoApostolico from "./pages/blog/OracaoCredoApostolico";
import OracaoSinalDaCruz from "./pages/blog/OracaoSinalDaCruz";
import OracaoGloriaAoPai from "./pages/blog/OracaoGloriaAoPai";
import OracaoAtoContricao from "./pages/blog/OracaoAtoContricao";
import OracaoEspiritoSanto from "./pages/blog/OracaoEspiritoSanto";
import OracaoSalveRainha from "./pages/blog/OracaoSalveRainha";
import OracaoMagnificat from "./pages/blog/OracaoMagnificat";
import OracaoFatima from "./pages/blog/OracaoFatima";
import OracaoConfesso from "./pages/blog/OracaoConfesso";
import OracaoGloriaMissa from "./pages/blog/OracaoGloriaMissa";
import OracaoSanto from "./pages/blog/OracaoSanto";
import OracaoCordeiroDeDeus from "./pages/blog/OracaoCordeiroDeDeus";
import OracaoComunhaoEspiritual from "./pages/blog/OracaoComunhaoEspiritual";
import OracaoSaoFrancisco from "./pages/blog/OracaoSaoFrancisco";
import OracaoAlmaDeCristo from "./pages/blog/OracaoAlmaDeCristo";
import OracaoVindeEspiritoCriador from "./pages/blog/OracaoVindeEspiritoCriador";
import OracaoTeDeum from "./pages/blog/OracaoTeDeum";
import OracaoAnjoGuarda from "./pages/blog/OracaoAnjoGuarda";
// Novena Articles
import NovenaNossaSenhoraAparecida from "./pages/blog/NovenaNossaSenhoraAparecida";
import NovenaSagradoCoracao from "./pages/blog/NovenaSagradoCoracao";
import NovenaSaoJose from "./pages/blog/NovenaSaoJose";
import NovenaNossaSenhoraGracas from "./pages/blog/NovenaNossaSenhoraGracas";
import NovenaSantoAntonio from "./pages/blog/NovenaSantoAntonio";
import NovenaSaoJudasTadeu from "./pages/blog/NovenaSaoJudasTadeu";
import NovenaNossaSenhoraPerpetuoSocorro from "./pages/blog/NovenaNossaSenhoraPerpetuoSocorro";
import NovenaDivinoEspiritoSanto from "./pages/blog/NovenaDivinoEspiritoSanto";
import NovenaNossaSenhoraRosario from "./pages/blog/NovenaNossaSenhoraRosario";
import NovenaNatal from "./pages/blog/NovenaNatal";
import QuaresmaSaoMiguelArcanjo from "./pages/blog/QuaresmaSaoMiguelArcanjo";
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
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/result" element={<ResultadoPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/page/:page" element={<BlogPage />} />
            <Route path="/termos" element={<TermsOfUse />} />
            <Route path="/privacidade" element={<PrivacyPolicy />} />
            <Route path="/contato" element={<Contact />} />
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
