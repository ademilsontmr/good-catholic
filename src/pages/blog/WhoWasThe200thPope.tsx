import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Crown } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function WhoWasThe200thPope() {
  return (
    <>
      <Helmet>
        <title>Who Was the 200th Pope? Bl. Urban V (1362–1370) | Guide Catholic</title>
        <meta
          name="description"
          content="The 200th pope was Blessed Urban V (1362–1370). He tried to return the papacy from Avignon to Rome, reformed universities, and sent missionaries. Full Catholic guide."
        />
        <meta
          name="keywords"
          content="200th pope, who was the 200th pope, pope urban v, blessed urban v, list of popes number 200, avignon papacy urban v"
        />
        <link rel="canonical" href="https://guidecatholic.com/blog/200th-pope-who-was-it/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Who Was the 200th Pope? Bl. Urban V (1362–1370)"
        description="The 200th pope was Blessed Urban V (1362–1370). He tried to return the papacy from Avignon to Rome, reformed universities, and sent missionaries. Full Catholic guide."
        url="https://guidecatholic.com/blog/200th-pope-who-was-it/"
        datePublished="2026-08-06"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "200th Pope", url: "https://guidecatholic.com/blog/200th-pope-who-was-it/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">200th Pope</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Catholic History</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />August 6, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Who Was the 200th Pope?
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Trivia apps, catechism class, and search engines all ask: who was the 200th pope? The answer is Blessed Urban V — a Benedictine monk who left Avignon for Rome and fought to heal a divided Church.
              </p>
            </header>

            <div className="aspect-video bg-violet-50 rounded-2xl flex items-center justify-center mb-10">
              <Crown className="w-28 h-28 text-violet-700" strokeWidth={1.2} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">
                  The <strong>200th pope of the Catholic Church was Blessed Urban V</strong> (Guillaume de Grimoard), who reigned from <strong>28 September 1362 to 19 December 1370</strong>. A Benedictine monk and canon lawyer, he attempted to return the papacy from Avignon to Rome, reformed universities, and supported missions — though the Avignon exile would resume after his death until Gregory XI.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Quick Facts: Pope Urban V (200th Pope)</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <tbody className="text-text">
                    <tr className="bg-accent/5">
                      <td className="border border-border p-3 font-medium">Papal number</td>
                      <td className="border border-border p-3">200th pope</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Birth name</td>
                      <td className="border border-border p-3">Guillaume de Grimoard</td>
                    </tr>
                    <tr className="bg-background-muted/30">
                      <td className="border border-border p-3 font-medium">Reigned</td>
                      <td className="border border-border p-3">1362–1370</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Predecessor</td>
                      <td className="border border-border p-3">Blessed Innocent VI (199th)</td>
                    </tr>
                    <tr className="bg-background-muted/30">
                      <td className="border border-border p-3 font-medium">Successor</td>
                      <td className="border border-border p-3">Pope Gregory XI (201st)</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Beatification</td>
                      <td className="border border-border p-3">1893 by Pope Leo XIII</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Urban V Matters</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="200th-pope-who-was-it">
                Urban V reigned during the Avignon Papacy — when the popes resided in France (1309–1377, with interruptions). He was the first pope since Urban V&apos;s namesake to seriously attempt a permanent return to Rome. He arrived in 1367 but left again in 1370 due to political instability; Gregory XI finally settled in Rome in 1377. Urban also reformed Montpellier and Toulouse universities and encouraged missionary work in Eastern Europe and Asia.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Came Before and After?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="200th-pope-who-was-it">
                The 199th pope was Blessed Innocent VI; the 201st was Gregory XI. Urban V was followed eventually by the Western Schism (1378–1417) — a crisis with multiple claimants. For the full chronological list, see our{" "}
                <Link to="/blog/list-of-all-popes-catholic-complete-guide/" className="text-accent underline underline-offset-2">complete list of all popes</Link>{" "}
                or the full biography:{" "}
                <Link to="/blog/pope-bl-urban-v/" className="text-accent underline underline-offset-2">Pope Bl. Urban V — complete guide</Link>.
              </LinkedText>

              <QuizCTA title="How well do you know Church history?" description="Take our free Catholic quiz for personalized guidance on faith, doctrine, and history." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">From Monk to Pope: Early Life</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="200th-pope-who-was-it">
                                Guillaume de Grimoard was born around 1310 in Grizac, Languedoc (southern France), into a noble family. He entered the Benedictine abbey of Saint-Victor in Marseille, studied canon law at Montpellier and Toulouse, and became a respected abbot and papal legate. His reputation for learning, austerity, and peacemaking — not career ambition — led the cardinals to elect him unanimously in 1362 while he was on a diplomatic mission. He took the name Urban V in honor of Blessed Urban IV and wore his Benedictine habit at the coronation.
                            </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Avignon Papacy in Context</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="200th-pope-who-was-it">
                                Since Clement V (1309), popes had resided in Avignon under strong French political influence — the &quot;Babylonian Captivity&quot; lamented by Petrarch. Rome lay neglected, prey to warring factions. Urban V inherited this exile. Italians begged for the papacy&apos;s return; French cardinals and King Charles V preferred Avignon. Urban balanced reform at a distance with the longing of the Eternal City.
                            </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Return to Rome (1367) and Departure (1370)</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="200th-pope-who-was-it">
                                In January 1367 Urban sailed to Italy and entered Rome in October, restoring the Lateran and St. Peter&apos;s. He crowned Charles IV Holy Roman Emperor in 1368 — a symbol of unity. Yet chaos persisted: the Papal States remained unstable, and the French court pressed for his return. In September 1370 Urban left Rome for Avignon, dying there in December. His successor Gregory XI finally moved back to Rome in 1377 — only to be followed by the Western Schism (1378–1417).
                            </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Reforms, Missions, and Legacy</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="200th-pope-who-was-it">
                                Urban strengthened university statutes at Montpellier and Toulouse, promoted clerical education, and supported the missions of the newly formed Order of Friars Minor (Franciscans) in Armenia and the Near East. He opposed John Wycliffe&apos;s early errors and worked to heal the schism between Rome and the Byzantine Emperor. Pope Leo XIII beatified him in 1893. Catholics remember Urban V as a scholar-pope who tried to reunite the Church geographically and spiritually — even when politics defeated his final stay in Rome.
                            </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How Popes Are Numbered</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="200th-pope-who-was-it">
                                The Annuario Pontificio lists 267 popes from St. Peter to the present. Numbering counts legitimate successors in the apostolic line; antipopes during schisms are excluded. Urban V is the 200th because historians count every valid reign in sequence — trivia apps and catechism worksheets often use this milestone. If you are studying papal history, always cross-check dates with the full biography rather than memorizing numbers alone. For a printable timeline, bookmark our complete list of popes and the dedicated biography of Bl. Urban V linked above.
                            </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Prayer for Church Unity</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed">
                                  &quot;Blessed Urban V, you labored to bring the Church back to Rome and to heal divisions. Pray for Pope Francis, for bishops and priests, and for unity among all Christians. Through your intercession, may we love the Church not only when she is comfortable, but when she demands sacrifice.&quot;
                                </p>
                              </div>

            </div>

            <BlogFAQ
              linkAnswersSlug="200th-pope-who-was-it"
              faqs={[
                { question: "Who was the 200th pope?", answer: "Blessed Urban V (Guillaume de Grimoard), pope from 1362 to 1370." },
                { question: "Was Urban V a saint?", answer: "He is Blessed (beatified 1893), not canonized as a saint — though Catholics may honor him as a beatus." },
                { question: "What is Urban V known for?", answer: "Attempting to move the papacy from Avignon back to Rome, university reform, and missionary support." },
                { question: "Who was the 199th and 201st pope?", answer: "199th: Blessed Innocent VI. 201st: Gregory XI." },
                { question: "How many popes have there been?", answer: "267 popes in the official line from St. Peter through Pope Leo XIV (2025–present). See our full list for current count." },
              ]}
            />
            <RelatedArticles currentSlug="200th-pope-who-was-it" />
            <ArticleBottomCTA title="Explore Catholic history" description="Take our free assessment to deepen your knowledge of the Church, popes, and faith." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
