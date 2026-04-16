import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft, Hand, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function SaintPeregrineNovena() {
  return (
    <>
      <Helmet>
        <title>Saint Peregrine Novena: The Patron Saint for Cancer Patients | Guide Catholic</title>
        <meta name="description" content="Pray the Saint Peregrine Novena for healing from cancer and other illnesses. Learn about the miraculous life of the 'Cancer Saint' and how to ask for his intercession." />
        <meta name="keywords" content="saint peregrine novena, patron saint of cancer, prayer for cancer patients, st peregrine healing, catholic prayer for healing" />
        <link rel="canonical" href="https://guidecatholic.com/blog/saint-peregrine-novena/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Saint Peregrine Novena: The Patron Saint for Cancer Patients"
        description="Pray the Saint Peregrine Novena for healing from cancer and other illnesses. Learn about the miraculous life of the 'Cancer Saint' and how to ask for his intercession."
        url="https://guidecatholic.com/blog/saint-peregrine-novena/"
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
              <span className="text-text">Saint Peregrine Novena</span>
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
                  Saints & Healing
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  12 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Saint Peregrine Novena: The Patron Saint for Cancer Patients
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                When a diagnosis of cancer or a serious illness strikes, the weight can feel unbearable. For over 600 years, Catholics have turned to Saint Peregrine, a man who knew the pain of a seemingly "incurable" disease and witnessed the miraculous touch of God.
              </p>
            </header>

            <div className="aspect-video bg-emerald-50 rounded-2xl flex items-center justify-center mb-10">
              <Hand className="w-24 h-24 text-emerald-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Saint Peregrine Laziosi is known worldwide as the <strong>"Patron Saint of those suffering from cancer."</strong> His life is a testament to the power of repentance, the importance of the internal struggle, and the possibility of miraculous healing through the intercession of the saints.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Miraculous Life of Saint Peregrine
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Born in 1260 in Forlì, Italy, Peregrine was not always a man of peace. In his youth, he was a political rebel who once even struck St. Philip Benizi in the face. St. Philip’s response—turning the other cheek and praying for his attacker—so moved Peregrine that he experienced a radical conversion.
              </p>
              <p className="text-text leading-relaxed mb-6">
                He eventually joined the Order of the Servants of Mary (Servites). As a penance for his earlier life, Peregrine vowed to stand whenever it was not necessary to sit. This extreme penance, over many years, led to varicose veins and eventually <strong>cancer in his right leg</strong>.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The doctors decided that the only way to save his life was to amputate the leg. The night before the surgery, Peregrine spent hours in prayer before a crucifix. He fell into a deep trance and saw Jesus reach out from the cross and touch his leg. When he woke up the next morning, the doctors found that his leg was <strong>completely healed</strong>—there was no trace of cancer.
              </p>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-text mb-4 text-center">How to Pray the Saint Peregrine Novena</h3>
                <p className="text-text mb-4">
                  A novena is a set of prayers said over nine consecutive days. This prayer can be offered for yourself or on behalf of a loved one struggling with cancer or any long-term illness.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-emerald-800 mb-2">The Main Novena Prayer:</h4>
                    <p className="text-text italic leading-relaxed">
                      "Glorious Saint Peregrine, because of your merits the Lord Jesus was pleased to heal you of cancer of the leg by the touch of His hand from the cross. Intercede for [Name of the person], that they may also find strength in their trial and, if it be the will of the Father, receive the gift of complete healing. Help us to endure our suffering with the same patience and trust that you showed. We ask this through Christ our Lord. Amen."
                    </p>
                  </div>
                  
                  <div className="border-t border-emerald-200 pt-4">
                    <p className="text-text font-medium text-center">
                      (Follow with 3 Glory Be's)
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Why Cross Intercession Matters
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Praying to a saint is not "worshipping" them. Rather, it is asking a "big brother" in the faith to join his prayers with ours before the throne of God. Just as you would ask a friend on earth to pray for you, we ask St. Peregrine—who has already crossed the finish line—to pray for us in our hour of need.
              </p>

              <QuizCTA
                title="Do you need spiritual encouragement today?"
                description="Take our quiz for a personalized reflection and discover the saints who can accompany you on your journey."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-accent" />
                Three Lessons from St. Peregrine's Healing
              </h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>God Hears the Silent Prayer:</strong> Peregrine didn't demand a miracle; he surrendered his pain to the Cross, and God responded to his humility.</li>
                <li><strong>Healing is Holistic:</strong> St. Peregrine's physical healing was preceded by a deep spiritual healing (his conversion). Sometimes, the soul needs a miracle even more than the body.</li>
                <li><strong>Hope is Never Lost:</strong> Even when the "surgeons have sharpened their knives," God remains the ultimate Physician.</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed">
                  "O God, who gave to Saint Peregrine an Angel for his companion, the Mother of God for his Teacher, and Jesus as the Physician of his malady; grant we beseech You through his merits that we may on earth intensely love our Holy Angel, the Blessed Virgin, and our Savior."
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="saint-peregrine-novena" />

            <BlogFAQ faqs={[
              {
                question: "Do miracles still happen today?",
                answer: "Yes. The Church receives thousands of reports of unexplained healings every year. While every case is carefully vetted, particularly those for canonization, many people in parishes worldwide testify to the power of intercessory prayer in their recovery from illness."
              },
              {
                question: "What if I pray the novena and the person isn't healed?",
                answer: "This is a difficult mystery of the faith. We must always pray 'Thy Will be done.' Sometimes God grants the miracle of physical healing; other times, He grants the miracle of 'Fortitude'—the strength to face the end with peace and dignity. Both are profound gifts of grace."
              },
              {
                question: "Who else can I pray to for health?",
                answer: "In addition to St. Peregrine, many turn to St. Luke (a physician), St. Raphael the Archangel (whose name means 'God Heals'), and St. Jude (the Patron of Impossible Causes)."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                You Are Not Alone
              </h3>
              <p className="text-text-muted mb-6">
                Find peace and strength through the community of faith. Take our quiz to discover resources for your journey.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Start the Faith Quiz
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
