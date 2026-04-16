import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Calendar, Clock, ArrowLeft, Heart, Star } from "lucide-react";
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
        <title>The Brown Scapular: Promises, History, and Requirements | Guide Catholic</title>
        <meta name="description" content="What is the Brown Scapular? Learn about the apparition to St. Simon Stock, the Sabbatine Privilege, and the requirements to wear this powerful Catholic sacramental." />
        <meta name="keywords" content="brown scapular promises, st simon stock apparition, sabbatine privilege, how to wear the scapular, catholic sacramentals, our lady of mount carmel" />
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
                  15 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Brown Scapular: A Complete Guide to the Garment of Grace
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                "Whosoever dies wearing this Scapular shall not suffer eternal fire." This is the staggering promise given by Our Lady of Mount Carmel to St. Simon Stock in 1251. For nearly 800 years, the Brown Scapular has been one of the most beloved sacramentals in the Church—a sign of salvation and a safeguard in danger.
              </p>
            </header>

            <div className="aspect-video bg-amber-900/10 rounded-2xl flex items-center justify-center mb-10">
              <Shield className="w-24 h-24 text-amber-900" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The Brown Scapular is not a magic charm. It is a <strong>habit</strong>. Just as a monk wears a full scapular as part of his religious clothing, a layperson wears a smaller version to show their special consecration to Mary and their desire to live according to the Gospel.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Apparition to Saint Simon Stock
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In the 13th century, the Carmelite Order was facing severe persecution. Their Superior General, <strong>Simon Stock</strong>, prayed fervently for a sign of protection. On July 16, 1251, the Virgin Mary appeared to him holding the Brown Scapular. She told him: 
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8 text-center italic">
                "Receive, my beloved son, this habit of thy Order... it shall be a sign of salvation, a protection in danger, and a pledge of peace."
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Sabbatine Privilege
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In addition to the promise of avoiding hell, there is a traditional belief known as the <strong>Sabbatine Privilege</strong>. Based on a papal bull from Pope John XXII, it suggests that Mary will descend into Purgatory on the Saturday (the Sabbath) after a person dies and release those who wore the Scapular faithfully.
              </p>
              <p className="text-text leading-relaxed mb-6">
                While the historical wording of the bull is debated, the Church has consistently authorized the Carmelites to preach this devotion—emphasizing Mary's maternal care for her children even after death.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-text mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent" />
                  Requirements to Receive the Graces:
                </h3>
                <ul className="list-disc list-inside text-text space-y-2">
                  <li><strong>Investiture:</strong> You must be enrolled in the Scapular by a priest (a simple prayer and blessing).</li>
                  <li><strong>Continuous Wearing:</strong> You must wear it around the neck, with one segment on the chest and the other on the back.</li>
                  <li><strong>Chastity:</strong> You must observe chastity according to your state in life.</li>
                  <li><strong>Daily Prayer:</strong> You must recite the Little Office of the Blessed Virgin OR pray five decades of the Rosary daily OR (with a priest's permission) abstain from meat on Wednesdays and Saturdays.</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What the Scapular is NOT
              </h2>
              <p className="text-text leading-relaxed mb-6">
                It is vital to understand that the Scapular is not a "free pass" to sin. A person who wears the Scapular while deliberately living in grave sin and refusing to repent cannot expect the miracle of salvation. The Scapular <strong>demands</strong> a holy life. It is a sign of our "Yes" to God, just like Mary's.
              </p>

              <QuizCTA
                title="Are you ready for your special consecration?"
                description="Take our quiz to learn more about the Brown Scapular and how to prepare for your enrollment."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Practical Advice for Wearers
              </h2>
              <ul className="list-decimal list-inside text-text space-y-3 mb-8">
                <li><strong>Material:</strong> It must be made of 100% wool (representing the Lamb of God).</li>
                <li><strong>Replacement:</strong> When your scapular wears out, do not throw it away. Burn it or bury it. A new scapular does not need to be blessed again—the blessing remains on the *wearer* from the first enrollment.</li>
                <li><strong>Scapular Medal:</strong> While a metal medal is permitted in extreme cases (like for swimmers or those with skin allergies), the cloth scapular is much preferred as it is a "habit."</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed">
                  "Let all of you, therefore, who wear the Scapular, see in it a sign of your dedication to the Blessed Virgin Mary." — Pope Pius XII
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="brown-scapular-guide" />

            <BlogFAQ faqs={[
              {
                question: "Do I have to go to a special church to get enrolled?",
                answer: "No. Any Catholic priest has the faculty to enroll a person in the Brown Scapular. You can simply ask your parish priest after Mass."
              },
              {
                question: "Can I take it off to shower or sleep?",
                answer: "Yes, you can take it off for a short time for hygiene. However, the spiritual meaning is to wear it 'continuously' as a garment of protection. To receive the Sabbatine Privilege, it should be your constant companion."
              },
              {
                question: "Is the Brown Scapular only for Carmelites?",
                answer: "It is the habit of the Carmelite Order, but Mary specifically gave it through St. Simon Stock as a gift to the *whole* Church. Today, it is the most popular sacramental in the world alongside the Rosary."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Clothe Yourself in Grace
              </h3>
              <p className="text-text-muted mb-6">
                The Scapular is a powerful step in your walk with God. Take our quiz to deepen your devotion.
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
