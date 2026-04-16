import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Calendar, Clock, ArrowLeft, Heart, Star, Sparkles, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function BrownScapularGuide() {
  return (
    <>
      <Helmet>
        <title>The Brown Scapular: The Expert Guide to the Garment of Grace | Guide Catholic</title>
        <meta name="description" content="Discover the deep history of the Brown Scapular. From St. Simon Stock to the Sabbatine Privilege, learn the requirements and promises of this Carmelite habit." />
        <meta name="keywords" content="brown scapular guide, sabbatine privilege, st simon stock 1251, wearing the scapular requirements, our lady of mount carmel promises" />
        <link rel="canonical" href="https://guidecatholic.com/blog/brown-scapular-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="The Brown Scapular: A Complete Guide to the Garment of Grace"
        description="What is the Brown Scapular? Learn about the apparition to St. Simon Stock, the Sabbatine Privilege, and the requirements to wear this powerful Catholic sacramental."
        url="https://guidecatholic.com/blog/brown-scapular-guide/"
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
              <span className="text-text">Brown Scapular Guide</span>
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
                  Devotions
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  28 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Brown Scapular: More Than a Medal, It's an Armor of Light
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                "Whosoever dies wearing this Scapular shall not suffer eternal fire." In 1251, these words changed the spiritual life of the Church forever. But the Scapular is not a lucky charm—it is a religious habit in miniature, a sign of belonging to the family of Carmel.
              </p>
            </header>

            <div className="aspect-video bg-amber-900/5 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
               <Star className="w-24 h-24 text-amber-900/10 absolute -bottom-4 -right-4" />
               <ScrollText className="w-32 h-32 text-amber-900 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The Brown Scapular is the most distinctive sacramental of the Catholic faith. It represents a <strong>Covenant</strong> with the Blessed Virgin Mary. To wear it is to say: "Mother, I am yours."
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The Apparition of 1251: Cambridge, England
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Carmelite Order was in crisis. After fleeing the Holy Land, they were being treated as outsiders in Europe. <strong>Saint Simon Stock</strong>, the Prior General, prayed the <em>Flos Carmeli</em> (Flower of Carmel) seeking a sign of protection. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                On July 16, 1251, Our Lady appeared holding the brown habit and gave the "Great Promise." From that day on, the Scapular became the "livery" of the Queen of Heaven.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Sparkles className="w-6 h-6 text-amber-600" />
                  The Sabbatine Privilege
                </h3>
                <p className="text-sm text-text-muted mb-4 text-center">Hope beyond the grave</p>
                <div className="text-sm leading-relaxed space-y-4">
                  <p>In 1322, Pope John XXII reported a vision where Mary promised to descend into Purgatory on the <strong>first Saturday after death</strong> to retrieve those who wore the Scapular with devotion.</p>
                  <p><strong>The Conditions:</strong> 1) Be invested by a priest. 2) Wear the Scapular (100% brown wool). 3) Perfect Chastity (according to state of life). 4) Recite the Little Office or 5 decades of the Rosary daily.</p>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. Enrollment: The Invisible "Click"
              </h2>
              <p className="text-text leading-relaxed mb-6">
                You cannot just "buy and wear" a Scapular and receive the full spiritual benefits. You must be <strong>Invested/Enrolled</strong> by a priest using the official Latin or vernacular rite. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                Once enrolled, you are a "confrere" of the Carmelite Order. Every prayer said by a monk in a monastery, every Mass offered by a Carmelite priest, you share in those spiritual merits. It is a lifelong membership in a global family of prayer.
              </p>

              <QuizCTA
                title="Is your soul's armor ready?"
                description="The Scapular is a serious commitment to Mary. Take our quiz to see if you understand the weight of this sacramental and how to wear it worthily."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <Heart className="w-6 h-6 text-accent" />
                 The Fatima Connection
              </h2>
              <p className="text-text leading-relaxed mb-6">
                On October 13, 1917, during the "Miracle of the Sun," Sister Lucia of Fatima saw Mary appear as <strong>Our Lady of Mount Carmel</strong>, holding the Scapular. Lucia later explained: "The Rosary and the Scapular are inseparable." 
              </p>
              <p className="text-text leading-relaxed mb-6">
                If the Rosary is the "Sword" of Mary, the Scapular is her "Shield." One is for active prayer, the other is for constant protection.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "The Scapular is a silent prayer that says: 'Mother, I belong to you.'" — St. Claude de la Colombière
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="brown-scapular-guide" />

            <BlogFAQ faqs={[
              {
                question: "Does it have to be wool?",
                answer: "Yes. To be a valid Carmelite habit, it must be made of wool. Modern 'scapular medals' are only authorized to replace the wool one in cases of extreme heat, allergy, or specific physical hardship, and only after the user was first invested in the wool one."
              },
              {
                question: "What if it breaks?",
                answer: "If your Scapular breaks, you don't need a new blessing! The blessing is on the *person* after enrollment. Simply buy or make a new one and put it on. The old one should be burned or buried as it is a blessed object."
              },
              {
                question: "Can I take it off to shower?",
                answer: "Yes, you can take it off for hygiene or medical procedures. The requirement to 'wear it continuously' applies to our lifestyle and identity, not to a literal 24/7 rule that would prevent cleanliness."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Dress Your Soul in Mary's Uniform
              </h3>
              <p className="text-text-muted mb-6">
                The Scapular is the sign of a child who never leaves their mother's side. Take our quiz to take the next step in your consecration.
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
