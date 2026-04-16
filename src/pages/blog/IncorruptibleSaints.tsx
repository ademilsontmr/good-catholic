import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sparkles, Calendar, Clock, ArrowLeft, Heart, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function IncorruptibleSaints() {
  return (
    <>
      <Helmet>
        <title>Incorruptible Saints: The Miracle of Sacred Bodies | Guide Catholic</title>
        <meta name="description" content="What are Incorruptible Saints? Discover the miracle of Catholic saints whose bodies have not decomposed for centuries, the scientific studies, and what it means for our faith." />
        <meta name="keywords" content="incorruptible saints, incorrupt bodies of saints, st bernadette incorrupt, padre pio incorrupt, miracles of the body catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/incorruptible-saints-miracle/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Incorruptible Saints: The Miracle of Sacred Bodies"
        description="What are Incorruptible Saints? Discover the miracle of Catholic saints whose bodies have not decomposed for centuries, the scientific studies, and what it means for our faith."
        url="https://guidecatholic.com/blog/incorruptible-saints-miracle/"
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
              <span className="text-text">Incorruptible Saints</span>
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
                  Saints & Miracles
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  13 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Incorruptible Saints: The Miraculous Victory Over Death
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                In the crypts of ancient churches and the glass coffins of modern shrines, there lie bodies that have defied the laws of biology. Centuries after their death, these "Incorruptible Saints" appear as if they are merely sleeping. This is not a matter of mummification, but what the Church calls a "supernatural sign" of the Resurrection.
              </p>
            </header>

            <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10">
              <Sparkles className="w-24 h-24 text-amber-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The phenomenon of "incorruptibility" is one of the most visible and physically tangible miracles in the Catholic Church. It refers to a body that, after death, does not undergo the natural process of putrefaction and decay, even without the aid of embalming or salt.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What Makes a Saint "Incorruptible"?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Not every saint who is well-preserved is considered "incorruptible" in the miraculous sense. The Church distinguishes between:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>Mummification:</strong> A natural process caused by extreme dryness or freezing.</li>
                <li><strong>Adipocere:</strong> A chemical change where body fat turns into a soap-like waxy substance (common in damp environments).</li>
                <li><strong>Miraculous Incorruptibility:</strong> The body remains lifelike, flexible, and occasionally emits a sweet fragrance (the "odor of sanctity") in environments where decay should have occurred rapidly.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Famous Examples Through History
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h3 className="font-bold text-text mb-2 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    St. Bernadette Soubirous (d. 1879)
                  </h3>
                  <p className="text-text text-sm">
                    The visionary of Lourdes. Her body was exhumed three times over 46 years. Each time, she was found to be completely intact, with skin that was soft and moist. Today, she lies in a glass reliquary in Nevers, France. While a thin layer of wax was later applied to her face and hands to prevent discoloration, the body beneath remains miraculous.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-bold text-text mb-2 flex items-center gap-2">
                    <Microscope className="w-5 h-5 text-blue-500" />
                    St. Catherine of Bologna (d. 1463)
                  </h3>
                  <p className="text-text text-sm">
                    Her body was buried without a casket. When she was exhumed weeks later, her body was found to be flexible and emitting a sweet scent. For over 500 years, her body has been kept in a <strong>sitting position</strong> in a chair—an impossible feat for a decayed or mummified body.
                  </p>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                  <h3 className="font-bold text-text mb-2">St. Padre Pio (d. 1968)</h3>
                  <p className="text-text text-sm">
                    When his body was exhumed in 2008, his hands and chin were well-preserved in a way that surprised the examiners. Today, Millions of pilgrims visit his body in San Giovanni Rotondo, seeing him as a sign of God's victory over the grave.
                  </p>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Science and the Church's Investigation
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Catholic Church does not simply "declare" a body incorrupt. Since the time of Pope Benedict XIV in the 18th century, the process has involved <strong>medical doctors and forensic experts</strong>.
              </p>
              <p className="text-text leading-relaxed mb-6">
                In several cases, scientists have found that these bodies contain high levels of moisture despite being centuries old. In other cases, they have found the <strong>freshness of internal organs</strong> (like the heart of St. Teresa of Avila) that should have liquefied within days of death.
              </p>

              <QuizCTA
                title="Do you believe in the Resurrection?"
                description="Take our quiz to explore how the physical miracles of the saints point to the ultimate promise of eternal life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Theological Meaning: Why Does God Do This?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Church teaches that incorruptibility is a <strong>foretaste of the Resurrection</strong>. It is a sign that the body was so united to Christ's grace during life that even death cannot fully strip it of its dignity. It reminds the faithful that we are not just souls, but "temples of the Holy Spirit" (1 Cor 6:19).
              </p>
              <p className="text-text leading-relaxed mb-6">
                However, incorruptibility is <strong>not a requirement for sainthood</strong>. Many great saints, including St. Thérèse of Lisieux, decayed naturally. God chooses to give this particular sign to only a few, as He sees fit for the building up of our faith.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed">
                  "O Lord, who in the body of Your Saint have manifested the power of Your grace, grant that we may follow their example and one day share in the glory of the Resurrection."
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="incorruptible-saints-miracle" />

            <BlogFAQ faqs={[
              {
                question: "Is every saint's body incorrupt?",
                answer: "No. Most saints' bodies decay in the normal way. Incorruptibility is a rare and special grace granted by God as a sign. The absence of incorruptibility does not diminish the holiness of a saint."
              },
              {
                question: "Do they use wax on the bodies of saints?",
                answer: "In many cases, such as St. Bernadette or St. John Vianney, a thin layer of wax or a silver mask has been placed over the face and hands to prevent the darkening of the skin caused by exposure to light and air. This is a matter of aesthetics for the viewing of pilgrims, not an attempt to hide decay."
              },
              {
                question: "Is incorruptibility recognized by modern science?",
                answer: "Scientists often cannot find a natural explanation for these cases, especially when the body is found in a damp or humid environment where decay should be rapid. While science can describe the *state* of the body, it cannot explain the *cause* of its preservation in many of these historical cases."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Deepen Your Knowledge of the Faith
              </h3>
              <p className="text-text-muted mb-6">
                Miracles are windows into the power of God. Take our quiz for a personalized look at your Catholic journey.
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
