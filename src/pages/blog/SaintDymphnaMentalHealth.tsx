import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Brain, Calendar, Clock, ArrowLeft, Heart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function SaintDymphnaMentalHealth() {
  return (
    <>
      <Helmet>
        <title>Saint Dymphna: Patron Saint of Mental Health and Anxiety | Guide Catholic</title>
        <meta name="description" content="Discover the life of Saint Dymphna, the patron saint of those suffering from anxiety, depression, and mental illness. Learn how to ask for her intercession." />
        <meta name="keywords" content="saint dymphna, patron saint of mental health, saint for anxiety, saint for depression, st dymphna prayer, catholic mental health" />
        <link rel="canonical" href="https://guidecatholic.com/blog/saint-dymphna-mental-health/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Saint Dymphna: Patron Saint of Mental Health and Anxiety"
        description="Discover the life of Saint Dymphna, the patron saint of those suffering from anxiety, depression, and mental illness. Learn how to ask for her intercession."
        url="https://guidecatholic.com/blog/saint-dymphna-mental-health/"
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
              <span className="text-text">Saint Dymphna</span>
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
                Saint Dymphna: The Patron Saint of Mental Health and Anxiety
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                In a world where anxiety and depression are at an all-time high, many Catholics are finding comfort in a 7th-century Irish princess. Saint Dymphna is the patron saint of those suffering from mental, emotional, and neurological disorders. Her story is one of tragic beauty and enduring peace.
              </p>
            </header>

            <div className="aspect-video bg-indigo-50 rounded-2xl flex items-center justify-center mb-10">
              <Brain className="w-24 h-24 text-indigo-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                For centuries, the shrine of Saint Dymphna in Gheel, Belgium, has been a place of pilgrimage for those seeking relief from "illnesses of the mind." Unlike many medieval shrines that were fearful of mental illness, the community of Gheel developed a revolutionary model of "boarding" patients with local families—a tradition that continues to this day, inspired by St. Dymphna's charity.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Story of Saint Dymphna
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Dymphna was the daughter of a pagan Irish king named Damon and a beautiful Christian mother. After her mother died, King Damon was driven to madness by his grief. His advisors suggest he marry his own daughter because she resembled her mother. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                Dymphna fled with her confessor, Father Gerebernus, to Belgium. They settled in Gheel, where Dymphna used her wealth to build a hospital for the poor and the ill. However, her father eventually found them. When Dymphna refused his demands, he ordered the execution of Father Gerebernus and, in a final fit of rage, beheaded Dymphna himself. She was only 15 years old.
              </p>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-text mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  A Prayer to Saint Dymphna
                </h3>
                <p className="text-text italic mb-4">
                  "Good Saint Dymphna, you who experienced the weight of mental anguish and family brokenness, intercede for me before the throne of God. Be a source of peace for my troubled mind [mention your specific intention]. Help me to trust in God's love even when the shadows are dark, and lead me to the light of Christ's healing mercy. Amen."
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Why Catholics Turn to Her for Anxiety
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Mental illness is not a sign of a "lack of faith." Just as a person can have a broken leg, a person can have a struggle within their brain or emotions. Saint Dymphna is a reminder that God the Church sees the suffering of the mind as deeply worthy of care and spiritual attention.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Many find that asking for St. Dymphna's intercession helps to:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-8">
                <li><strong>Remove the Stigma:</strong> Knowing a saint shared this patronate validates the struggle.</li>
                <li><strong>Provide a Focusing Point:</strong> In the chaos of an anxiety attack, a short prayer to St. Dymphna can be a grounding exercise.</li>
                <li><strong>Invoke Supernatural Peace:</strong> She is a channel for the "peace that surpasses all understanding" (Phil 4:7).</li>
              </ul>

              <QuizCTA
                title="Are you seeking peace in your life?"
                description="Take our quiz to reflect on your journey and discover the spiritual resources that can help you find balance and joy."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-accent" />
                The Heritage of Gheel: A Model of Care
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The town of Gheel, where Dymphna was martyred, is unique in Europe. For 800 years, the residents have taken mentally ill patients into their own homes as "boarders." This model of radical inclusion and love is seen as the direct fruit of St. Dymphna's intercession, showing that the best medicine for the mind is often a loving community.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed">
                  "St. Dymphna, pray for us that we may find light in the darkness."
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="saint-dymphna-mental-health" />

            <BlogFAQ faqs={[
              {
                question: "Is it a sin to take medication for mental health?",
                answer: "No! The Catholic Church teaches that we should use both spiritual and medical means for health. Just as you would take medicine for diabetes, it is a good and holy thing to use medical science to balance the chemistry of the brain. St. Dymphna is a patron of both spiritual peace and medical care."
              },
              {
                question: "When is the Feast Day of Saint Dymphna?",
                answer: "Her feast day is celebrated on May 15th. This is an excellent time to begin a novena or to pray specifically for those struggling with mental illness."
              },
              {
                question: "What are her symbols in art?",
                answer: "She is often shown with a sword (the instrument of her martyrdom) and crown (as a princess), and often holding an oil lamp or a shackled figure, representing her power over mental captivity."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                You Are Not Alone in the Shadows
              </h3>
              <p className="text-text-muted mb-6">
                God's love is closer than your next breath. Take our quiz to find guidance and peace.
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
