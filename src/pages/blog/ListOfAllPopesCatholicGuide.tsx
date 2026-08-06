import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { PopesTable } from "@/components/blog/PopesTable";
import { TOTAL_POPES } from "@/data/catholicPopes";
import { POPE_TABLE_SOURCE, POPE_TABLE_UPDATED } from "@/lib/popeTableData";

export default function ListOfAllPopesCatholicGuide() {
  return (
    <>
      <Helmet>
        <title>List of All Popes: Complete Guide from St. Peter to Pope Leo XIV | Guide Catholic</title>
        <meta name="description" content="Complete list of all Catholic popes from St. Peter to Pope Leo XIV — 267 successors of Peter, historical eras, notable pontiffs, and searchable chronological table." />
        <meta name="keywords" content="list of all popes, complete list of popes, catholic popes from st peter, pope list chronological, how many popes, pope leo xiv list" />
        <link rel="canonical" href="https://guidecatholic.com/blog/list-of-all-popes-catholic-complete-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="List of All Popes: Complete Guide from St. Peter to Pope Leo XIV"
        description="Complete list of all Catholic popes from St. Peter to Pope Leo XIV — 267 successors of Peter, historical eras, notable pontiffs, and searchable chronological table."
        url="https://guidecatholic.com/blog/list-of-all-popes-catholic-complete-guide/"
        datePublished="2026-05-30"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "List of All Popes", url: "https://guidecatholic.com/blog/list-of-all-popes-catholic-complete-guide/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">List of All Popes</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Catholic History</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />25 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                List of All Popes: Complete Guide from St. Peter to Pope Leo XIV
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                From the fisherman apostle in Rome to the Bishop of Rome today, the Catholic Church has recognized {TOTAL_POPES} legitimate successors of St. Peter. This guide explains the papacy, walks through 2,000 years of history, and provides the full searchable list.
              </p>
            </header>
            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
              <Crown className="w-24 h-24 text-amber-700" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Catholic Church has had 267 popes from St. Peter to Pope Leo XIV — each Bishop of Rome and successor of Peter with authority to teach and govern the universal Church. This guide lists every pope with dates, eras, and links to individual biographies for SEO and catechesis.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why the Pope Matters in Catholic Faith</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="list-of-all-popes-catholic-complete-guide">
                Catholics believe Jesus entrusted unique authority to Peter — &quot;Upon this rock I will build my Church&quot; (Matthew 16:18) — and that this office continues in an unbroken line of bishops of Rome. The pope is not a CEO elected by popularity; he is the visible head of the universal Church, guardian of apostolic teaching, and servant of the servants of God (<em>Servus servorum Dei</em>). Every name on the list below represents a link in that chain, however imperfectly each man carried the office.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">St. Peter: The First Pope</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="list-of-all-popes-catholic-complete-guide">
                St. Peter (Pontiff 1º) was martyred in Rome under Nero, traditionally crucified upside down. Early Christians preserved his memory at the Vatican Hill, where St. Peter&apos;s Basilica now stands. Peter did not live in a palace; he died as bishop of a persecuted minority. Yet the Church remembers him as the foundation stone — not because he was flawless (he denied Christ three times), but because Christ chose him and prayed that his faith would not fail (Luke 22:32).
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How Many Popes Have There Been?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="list-of-all-popes-catholic-complete-guide">
                The official list in the <em>Annuario Pontificio</em> (Vatican yearbook) recognizes <strong>{TOTAL_POPES} popes</strong> from St. Peter through Pope Leo XIV, elected in May 2025. This count excludes antipopes — rival claimants during schisms — and reflects corrections made by historians in the 20th century (for example, removing duplicate entries and clarifying the Western Schism). Dates for the earliest popes are approximate; precise records begin around the 3rd century.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Historical Eras of the Papacy</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Apostolic &amp; Patristic (1st–5th centuries):</strong> Martyrdom, persecution, legalization under Constantine, councils of Nicaea and Chalcedon. Popes like Clement, Leo the Great, and Gregory the Great shaped doctrine.</li>
                <li><strong>Medieval (6th–14th centuries):</strong> Collapse of Rome, rise of monasticism, investiture controversies, Crusades, Avignon Papacy (1309–1377).</li>
                <li><strong>Renaissance &amp; Reformation (15th–16th centuries):</strong> Artistic patronage, Lateran Council V, Protestant Reformation, Council of Trent, missionary expansion to the Americas.</li>
                <li><strong>Early Modern (17th–18th centuries):</strong> Baroque Rome, Enlightenment tensions, suppression and restoration of the Jesuits, growing global Church.</li>
                <li><strong>Revolution to Vatican II (19th–20th centuries):</strong> Loss of Papal States, First Vatican Council (papal infallibility), two World Wars, John XXIII and the Second Vatican Council (1962–1965).</li>
                <li><strong>Contemporary (1965–present):</strong> Paul VI, John Paul I, John Paul II, Benedict XVI, Francis, and Leo XIV — popes facing secularization, globalization, and a Church present on every continent.</li>
              </ul>

              <QuizCTA
                title="How well do you know Catholic history?"
                description="Take the Catholic life assessment for a personalized guide to doctrine, the saints, and Church tradition."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Most Influential Popes in History</h2>
              <LinkedText className="text-text leading-relaxed mb-4" currentSlug="list-of-all-popes-catholic-complete-guide">
                Every pope is equal in office but not in historical impact. These pontiffs especially shaped Catholicism and the wider world:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>St. Leo I the Great (45º):</strong> Met Attila the Hun; defined Christological doctrine at Chalcedon.</li>
                <li><strong>St. Gregory I the Great (64º):</strong> Sent missionaries to England; shaped medieval liturgy and pastoral care.</li>
                <li><strong>St. Gregory VII (157º):</strong> Investiture Controversy; affirmed Church independence from secular rulers.</li>
                <li><strong>Innocent III (176º):</strong> Peak of medieval papal influence; Fourth Lateran Council (1215).</li>
                <li><strong>St. Pius V (225º):</strong> Council of Trent implementation; standardized the Roman Missal.</li>
                <li><strong>St. John Paul II (264º):</strong> Cold War era; first Slavic pope; World Youth Days; Catechism of the Catholic Church.</li>
                <li><strong>Francis (266º):</strong> First Latin American pope; emphasis on mercy, simplicity, and the peripheries.</li>
                <li><strong>Leo XIV (267º):</strong> First American pope; Augustinian background; elected May 2025.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Antipopes: What They Are (and Why They Are Not on This List)</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="list-of-all-popes-catholic-complete-guide">
                An antipope is a rival claimant during a schism — not merely a bad pope, but someone the Church ultimately judged not to hold the legitimate succession. The Western Schism (1378–1417) saw multiple claimants; the Council of Constance healed the division. The list below follows the <em>Annuario Pontificio</em> and excludes antipopes. Studying them helps explain why numbering occasionally skips or repeats (e.g., Felix II vs. Felix III).
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Complete List of All {TOTAL_POPES} Popes (Searchable Table)</h2>
              <LinkedText className="text-text leading-relaxed mb-4" currentSlug="list-of-all-popes-catholic-complete-guide">
                The table below lists every pope in chronological order from St. Peter (1º) to Pope Leo XIV (267º), with pontificate dates, birthplace, duration of reign, and portrait when available. Data is synchronized from the{" "}
                <a href={POPE_TABLE_SOURCE} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
                  Wikipedia list of popes (Portuguese)
                </a>
                {" "}(updated {POPE_TABLE_UPDATED}) and merged with our English biographies. Click any name to open a full article with highlights, legacy, and FAQs.
              </LinkedText>
              <PopesTable />
              <p className="text-xs text-text-muted mt-2 mb-6">
                Source:{" "}
                <a href={POPE_TABLE_SOURCE} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  pt.wikipedia.org/wiki/Lista_de_papas
                </a>
                . Images via Wikimedia Commons. Papal names and article links are in English.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How a Pope Is Elected Today</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="list-of-all-popes-catholic-complete-guide">
                When a pope dies or resigns (as Benedict XVI did in 2013), cardinals under age 80 gather in conclave in the Sistine Chapel. Secrecy, prayer, and ballots continue until a two-thirds majority elects a new pope. White smoke from the chimney announces a choice; the senior cardinal deacon proclaims <em>Habemus Papam</em> — &quot;We have a pope.&quot; The new pope chooses his regnal name (Francis, Leo, John Paul, etc.), often signaling his vision for the pontificate.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Saints, Doctors, and Martyrs Among the Popes</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="list-of-all-popes-catholic-complete-guide">
                Roughly half of the first 50 popes are venerated as saints; many early bishops of Rome died as martyrs. Thirty-seven popes have been declared Doctors of the Church — including Leo the Great, Gregory the Great, and John Paul II. Not every holy pope was canonized; not every capable administrator was a saint. Catholics honor the office while acknowledging human weakness in those who held it.
              </LinkedText>
            </div>

            <BlogFAQ faqs={[
              { question: "Who was the first pope?", answer: "St. Peter the Apostle is recognized as the first pope, appointed by Christ and martyred in Rome. Catholics trace the papacy to him through apostolic succession." },
              { question: "How many popes have there been?", answer: `The Catholic Church recognizes ${TOTAL_POPES} legitimate popes from St. Peter through Pope Leo XIV, excluding antipopes.` },
              { question: "Who is the current pope?", answer: "Pope Leo XIV (Robert Francis Prevost) is the 267th pope, elected on May 8, 2025. He is the first pope born in the United States." },
              { question: "What is an antipope?", answer: "An antipope is a rival claimant to the papacy during a schism who is not counted in the official succession. The Western Schism (1378–1417) is the most famous example." },
              { question: "Can a pope resign?", answer: "Yes. Pope Benedict XVI resigned in 2013, the first to do so since Gregory XII in 1415. Resignation is permitted under canon law when freely made for a grave reason." },
            ]} />
            <RelatedArticles currentSlug="list-of-all-popes-catholic-complete-guide" />
            <ArticleBottomCTA />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
