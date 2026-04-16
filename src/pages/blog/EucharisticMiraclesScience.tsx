import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Microscope, Calendar, Clock, ArrowLeft, Beaker, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function EucharisticMiraclesScience() {
  return (
    <>
      <Helmet>
        <title>Eucharistic Miracles and Science: What Do the Labs Say? | Guide Catholic</title>
        <meta name="description" content="Explore the scientific evidence behind Eucharistic miracles like Lanciano and Buenos Aires. Learn about blood types, DNA, and the medical findings that defy natural explanation." />
        <meta name="keywords" content="eucharistic miracles science, lanciano miracle scientific study, buenos aires eucharist miracle, miracles and science, ab blood type eucharist" />
        <link rel="canonical" href="https://guidecatholic.com/blog/eucharistic-miracles-science/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Eucharistic Miracles and Science: What Do the Medical Labs Say?"
        description="Explore the scientific evidence behind Eucharistic miracles like Lanciano and Buenos Aires. Learn about blood types, DNA, and the medical findings that defy natural explanation."
        url="https://guidecatholic.com/blog/eucharistic-miracles-science/"
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
              <span className="text-text">Eucharistic Miracles & Science</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  Faith & Science
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  15 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Eucharistic Miracles and Science: What Do the Medical Labs Say?
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                For centuries, the Catholic Church has claimed that the bread and wine at Mass truly become the Body and Blood of Christ. While this is a matter of faith, several times in history, the physical appearance of the host has changed into visible flesh and blood. Today, modern forensic science has put these "miracles" under the microscope. The results are staggering.
              </p>
            </header>

            <div className="aspect-video bg-red-50 rounded-2xl flex items-center justify-center mb-10">
              <Microscope className="w-24 h-24 text-red-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The term "Eucharistic Miracle" refers to events where the Eucharist physically takes on the characteristics of human tissue or blood. While the Church does not require the faithful to believe in every reported miracle (as they fall under "private revelation"), several have undergone rigorous scientific investigation by independent laboratories, pathologists, and hematologists.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Miracle of Lanciano (8th Century)
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The most famous investigation occurred in Lanciano, Italy. In the 700s, a monk who doubted the Real Presence saw the host turn into a circle of flesh and the wine into five clots of blood. In 1970 and again in 1981, Dr. Odoardo Linoli, a professor of anatomy and pathological histology, conducted a series of tests.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-text mb-3 flex items-center gap-2">
                  <Beaker className="w-5 h-5 text-accent" />
                  Scientific Findings from Lanciano:
                </h3>
                <ul className="list-disc list-inside text-text space-y-2">
                  <li><strong>Human Tissue:</strong> The "flesh" is real human heart tissue (myocardium).</li>
                  <li><strong>Human Blood:</strong> The blood is real human blood, type <strong>AB</strong>.</li>
                  <li><strong>No Preservatives:</strong> The samples showed no evidence of salt or chemical agents used for mummification.</li>
                  <li><strong>Living Characteristics:</strong> Despite being 1,200 years old, the proteins in the blood were found to be in the same proportions as those in fresh human blood.</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Buenos Aires Miracle (1996)
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A more recent event occurred in Argentina while the future Pope Francis was Auxiliary Bishop. A discarded host was found to have turned into a bloody substance. After three years in a jar of water, the tissue had not decomposed.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Dr. Ricardo Castañon sent a sample to Dr. Frederic Zugibe, a world-renowned cardiologist and forensic pathologist at Columbia University. Dr. Zugibe was not told the source of the sample.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-text mb-3 flex items-center gap-2">
                  <HeartPulse className="w-5 h-5 text-red-600" />
                  The "Stressed Heart" Finding
                </h3>
                <p className="text-text">
                  Dr. Zugibe reported that the sample was heart muscle from the left ventricle. Crucially, he noted that the tissue showed <strong>white blood cells</strong> that had penetrated the tissue. This only happens when the heart is alive and has suffered severe trauma (such as being beaten or severely stressed). 
                </p>
                <p className="text-text mt-2 italic">
                  "How could you have taken out a piece of a living heart from someone who has suffered so much and bring it to me if that person is dead?" — Dr. Frederic Zugibe
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Consistent Pattern: The AB Blood Type
              </h2>
              <p className="text-text leading-relaxed mb-6">
                One of the most remarkable findings across multiple independent Eucharistic miracles (Lanciano, Bolsena, Buenos Aires, Sokolka, and Legnica) is the blood type: <strong>AB</strong>.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Type AB is known as the "universal recipient" but it is also one of the rarest blood types in the world (about 3-5% of the population). Interestingly, the blood found on the <strong>Shroud of Turin</strong> (the burial cloth believed to be Jesus') is also Type AB.
              </p>

              <QuizCTA
                title="Do you believe in the Real Presence?"
                description="Take our quiz to reflect on your faith and learn more about the mysteries of the Eucharist."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Could It Be a Fraud?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Skeptics often suggest that these are medieval forgeries. However, the Lanciano heart tissue contains nerves and complex structures that were impossible to "craft" or preserve in the 8th century. Furthermore, the Buenos Aires miracle was a contemporary event, documented from the moment of its discovery, and analyzed using the same DNA and pathological techniques used in modern criminal forensics.
              </p>
              <p className="text-text leading-relaxed mb-6">
                DNA testing on these samples has often been inconclusive or "failed" for a unique reason: forensic scientists report that the DNA seems "living" or "unstable," yet it does not match any human database, as if the source material has no human biological parents.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed">
                  "Science, when it is truly free from prejudice, can be a great ally of faith, confirming that which the heart already knows."
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="eucharistic-miracles-science" />

            <BlogFAQ faqs={[
              {
                question: "Do I have to believe in Eucharistic miracles as a Catholic?",
                answer: "No. The Church classifies these as 'private revelations.' While the Church may approve them as 'worthy of belief' after investigation, they are not part of the 'Deposit of Faith' required for salvation. However, they serve as powerful aids to faith and reminders of Christ's promise."
              },
              {
                question: "What is the most scientifically studied miracle?",
                answer: "The Miracle of Lanciano (Italy) is the most studied. It was investigated in 1970-71 and again in 1981 by Dr. Odoardo Linoli using modern medical equipment, confirming it as human heart tissue and AB blood without any chemical preservatives."
              },
              {
                question: "Why is the blood type always AB?",
                answer: "The AB blood type is found in almost all analyzed Eucharistic miracles and the Shroud of Turin. Theologically, some suggest this represents Christ as the 'Universal Recipient' of all human suffering, though scientifically, it simply provides a remarkable consistency across centuries and continents."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Strengthen Your Catholic Faith
              </h3>
              <p className="text-text-muted mb-6">
                Knowledge of the faith is the first step toward a deeper relationship with God.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Take the Faith Quiz
                </Button>
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
