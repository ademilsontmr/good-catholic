import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { cboLinkClass } from "@/lib/catholicBibleOnlineLinks";

const PAGE = "https://guidecatholic.com/blog/saint-frances-xavier-cabrini/";

export default function SaintFrancesXavierCabrini() {
  return (
    <>
      <Helmet>
        <title>Saint Frances Xavier Cabrini: Patron of Immigrants | Guide Catholic</title>
        <meta name="description" content="Saint Frances Xavier Cabrini, first U.S. citizen canonized: her life, the hospitals and schools she founded, her November 13 feast, and why immigrants still ask her help." />
        <link rel="canonical" href={PAGE} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Saint Frances Xavier Cabrini: Patron Saint of Immigrants"
        description="Saint Frances Xavier Cabrini, first U.S. citizen canonized: her life, the hospitals and schools she founded, her November 13 feast, and why immigrants still ask her help."
        url={PAGE}
        datePublished="2026-10-07"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Saint Frances Xavier Cabrini", url: PAGE },
        ]}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog/" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Saint Frances Xavier Cabrini</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>
            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Saints & Intercession</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />October 7, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Saint Frances Xavier Cabrini: Patron Saint of Immigrants
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                She wanted China. The pope sent her to New York. She became the first citizen of the United States to be canonized.
              </p>
            </header>
            <div className="aspect-video bg-sky-50 rounded-2xl flex items-center justify-center mb-10">
              <MapPin className="w-24 h-24 text-sky-600" strokeWidth={1.5} />
            </div>
            <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
              <p className="text-lg text-text leading-relaxed font-medium">
                Frances Xavier Cabrini (1850–1917) founded the Missionary Sisters of the Sacred Heart of Jesus and spent her American years building schools, orphanages, and hospitals for Italian immigrants. She became a U.S. citizen in 1909. Pope Pius XII canonized her in 1946. The United States keeps her optional memorial on November 13.
              </p>
            </div>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A fragile child who would not stay home</h2>
            <p className="text-text leading-relaxed mb-6">
              Maria Francesca Cabrini was born on July 15, 1850, in Sant’Angelo Lodigiano, in Lombardy. She was the youngest of a large family, often ill, and small enough that religious communities turned her away. She took the name Frances Xavier because she wanted the missionary life of the Jesuit who went to Asia. Poor health did not cancel the desire. It only delayed the road.
            </p>
            <p className="text-text leading-relaxed mb-6">
              In 1880 she founded the Missionary Sisters of the Sacred Heart of Jesus. The first work was in Italy: an orphanage, a school, a house for sisters who had nowhere else to be trained. She still spoke of China. The bishop of Piacenza and then Rome kept giving her the poor who were already in front of her.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">“Not to the East, but to the West”</h2>
            <p className="text-text leading-relaxed mb-6">
              Italian Catholics were pouring into the United States and dying in tenements without a priest who spoke their language, a school that would take their children, or a hospital that would take their sick. Pope Leo XIII heard Cabrini’s plan for the East and turned it around. The mission field was the West: New York, not China. She and six sisters landed in New York on March 31, 1889. The house that was supposed to be ready was not. She began anyway.
            </p>
            <p className="text-text leading-relaxed mb-6">
              That is the sentence American Catholics still repeat, because it is how so many parish stories start. The plan fails. The people are already here. Cabrini treated the missed arrangement as a detail, not as a sign to go home.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What she actually built</h2>
            <p className="text-text leading-relaxed mb-6">
              Over the next twenty-eight years she crossed the Atlantic again and again and opened houses across the United States, and also in Latin America and Europe. The American work was concrete: orphanages for children whose parents had died on the crossing or in the mills, schools taught in Italian and English, and hospitals — including Columbus Hospital in New York and Columbus Hospital in Chicago — where immigrant patients were not turned away for being poor or foreign. She begged from the rich, argued with contractors, and rode streetcars in a habit that marked her as not-from-here.
            </p>
            <p className="text-text leading-relaxed mb-6">
              She became a citizen of the United States in 1909. Citizenship did not make her less Italian. It made the work legally hers in the country where the immigrants had landed. She is the patron saint of immigrants because that was the people she refused to leave unnamed.
            </p>

            <QuizCTA
              title="How deep is your Catholic life?"
              description="A short look at prayer, the Eucharist, and the works of mercy — the same life Cabrini kept putting into buildings."
            />

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Death, canonization, and the American feast</h2>
            <p className="text-text leading-relaxed mb-6">
              She died on December 22, 1917, at Columbus Hospital in Chicago. She was sixty-seven. Pope Pius XII canonized her on July 7, 1946, the first citizen of the United States to be declared a saint. Because December 22 falls in late Advent, the Church in the United States keeps her optional memorial on November 13. A parish can use the proper readings and prayers of a holy woman that day. The national shrines in New York and Chicago still receive the petitions of people who have just arrived, or who cannot go home.
            </p>
            <p className="text-text leading-relaxed mb-6">
              She is not the first person born on American soil to be canonized. That is{" "}
              <Link to="/blog/saint-elizabeth-ann-seton/" className={cboLinkClass}>Saint Elizabeth Ann Seton</Link>.
              Cabrini is the first citizen. The distinction matters in a country of immigrants: one saint was born here and entered the Church; the other arrived already a sister and then became American.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Gospel she was living</h2>
            <p className="text-text leading-relaxed mb-6">
              Jesus names the works that will be recognized at the judgment: feeding the hungry, welcoming the stranger, caring for the sick. Read{" "}
              <a href="https://catholicbibleonline.com/bible/matthew/25" target="_blank" rel="noopener noreferrer" className={cboLinkClass}>Matthew 25 on Catholic Bible Online</a>.
              Cabrini did not treat that chapter as a metaphor. The stranger had a name, a language, and a fever. The Letter to the Hebrews says not to neglect hospitality, because some have entertained angels without knowing it. The line is in{" "}
              <a href="https://catholicbibleonline.com/bible/hebrews/13" target="_blank" rel="noopener noreferrer" className={cboLinkClass}>Hebrews 13</a>.
              A hospital bed is one way a parish keeps that verse.
            </p>
            <p className="text-text leading-relaxed mb-6">
              If you ask her intercession, be specific. Name the person who is between countries, the paper that has not come, the child in a new school, the parent who is sick far from home. Then do one concrete thing the same week: a meal, a ride, a translation, a visit. Devotion that never touches an immigrant is only a biography.
            </p>

            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
              <h3 className="font-display text-lg font-bold text-text mb-3">Key facts</h3>
              <ul className="text-text space-y-2 text-sm">
                <li>• <strong>Born:</strong> July 15, 1850, Sant’Angelo Lodigiano, Italy</li>
                <li>• <strong>Died:</strong> December 22, 1917, Chicago</li>
                <li>• <strong>Order:</strong> Missionary Sisters of the Sacred Heart of Jesus, founded 1880</li>
                <li>• <strong>Arrived in New York:</strong> March 31, 1889</li>
                <li>• <strong>U.S. citizen:</strong> 1909</li>
                <li>• <strong>Canonized:</strong> July 7, 1946, by Pope Pius XII</li>
                <li>• <strong>U.S. memorial:</strong> November 13</li>
                <li>• <strong>Patronage:</strong> immigrants</li>
              </ul>
            </div>

            <BlogFAQ
              htmlAnswers
              title="Questions about Saint Frances Xavier Cabrini"
              faqs={[
                {
                  question: "Who is Saint Frances Xavier Cabrini?",
                  answer: "She was an Italian sister who founded the Missionary Sisters of the Sacred Heart of Jesus and spent her life opening schools, orphanages, and hospitals for immigrants, especially in the United States. She became a U.S. citizen in 1909 and was canonized in 1946."
                },
                {
                  question: "Why is Cabrini the patron saint of immigrants?",
                  answer: "Pope Leo XIII sent her to Italian Catholics in the United States instead of to China. She stayed with people who had no school, no hospital, and often no priest who spoke their language. The Church names her patron of immigrants because that was the work."
                },
                {
                  question: "When is her feast day in the United States?",
                  answer: "November 13. She died on December 22, which falls in Advent, so the United States keeps her optional memorial on November 13."
                },
                {
                  question: "Was she the first American saint?",
                  answer: "She was the first United States citizen to be canonized. Saint Elizabeth Ann Seton, canonized in 1975, was the first saint born in what is now the United States. Cabrini was born in Italy and naturalized in 1909."
                },
                {
                  question: "Where can I read the Gospel she lived?",
                  answer: "Matthew 25, on welcoming the stranger and caring for the sick, and Hebrews 13, on hospitality. Both chapters are on Catholic Bible Online."
                }
              ]}
            />
            <RelatedArticles currentSlug="saint-frances-xavier-cabrini" />
            <ArticleBottomCTA
              title="Faith shows up in who you welcome"
              description="See where prayer and the works of mercy already meet in your week."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
