import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Calendar, Clock, ArrowLeft, Heart, Star, Sparkles } from "lucide-react";
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
                  25 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Brown Scapular: An Expert Guide to the Garment of Salvation
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                "Whosoever dies wearing this Scapular shall not suffer eternal fire." This staggering promise, given by Our Lady of Mount Carmel to St. Simon Stock in 1251, has made the Brown Scapular the most popular sacramental in Catholic history. But it is far more than a "ticket to heaven"—it is a silent prayer and a religious habit for the laity.
              </p>
            </header>

            <div className="aspect-video bg-amber-900/10 rounded-2xl flex items-center justify-center mb-10">
              <Shield className="w-24 h-24 text-amber-900" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The Brown Scapular is a "miniature habit" of the Carmelite Order. By wearing it, a layperson is spiritually affiliated with the Carmelites, sharing in their prayers and spiritual merits. It is an outward sign of an interior consecration to the Blessed Virgin Mary.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Spiritual Roots: Mount Carmel and Elijah
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The story of the Scapular begins not in 1251, but on Mount Carmel in Israel, centuries before Christ. The prophet <strong>Elijah</strong> lived there as a hermit, defending the faith against the prophets of Baal. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                Catholic tradition sees in the "little cloud" Elijah saw rising from the sea (1 Kings 18:44) a precursor to the Virgin Mary. The first Carmelites were hermits who followed Elijah's spirit of silence and prayer. When they were forced to flee to Europe due to the Crusades, the Order faced an identity crisis—until the Virgin intervened.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Miracle of 1251: St. Simon Stock
              </h2>
              <p className="text-text leading-relaxed mb-6">
                On July 16, 1251, the Superior General of the Carmelites, <strong>Saint Simon Stock</strong>, received a vision of the Virgin holding the Scapular. She said: *"Receive, my beloved son, this habit... it shall be a sign of salvation, a protection in danger, and a pledge of peace."*
              </p>
              <p className="text-text leading-relaxed mb-6">
                This was not just a promise for the monks. Mary invited all her faithful children to wear this "apron" of service as a sign that they belong to her household.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Star className="w-6 h-6 text-amber-600" />
                  The Sabbatine Privilege: Hope Beyond Death
                </h3>
                <p className="text-text mb-4">
                  The "Sabbatine Privilege" is a traditional belief that the Virgin Mary will personally descend into Purgatory on the Saturday (the Sabbath) following a soul's death to release those who wore the Scapular.
                </p>
                <p className="text-text text-sm italic">
                  While modern historians debate the specific wording of the original Papal Bull, the Church has consistently authorized the faithful to hope in this special assistance from Mary, as long as they fulfill the conditions of prayer and chastity.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Rules of Engagement: Enrollment and Use
              </h2>
              <p className="text-text leading-relaxed mb-6">
                To receive the promises, a person must be **Invested/Enrolled** by a priest. This is a one-time rite that places the person under the mantle of Our Lady of Mount Carmel.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>The Conditions to be met:</strong>
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>Wear the Scapular continuously:</strong> Day and night, except for hygiene or medical reasons.</li>
                <li><strong>Observe Chastity:</strong> Living according to your state in life (married, single, or religious).</li>
                <li><strong>Recite the Daily Prayer:</strong> Either the Little Office of the BVM, or (more commonly) 5 decades of the Rosary daily, as assigned by the priest during enrollment.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-accent" />
                The Scapular of Saints: John Paul II
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The most famous modern wearer was **Pope John Paul II**. He was invested in the Scapular as a boy and wore it his entire life. On the day he was shot in St. Peter's Square (May 13, 1981), he insisted on being rushed to the hospital with his Scapular still on.
              </p>
              <p className="text-text leading-relaxed mb-6">
                He later said that it was the hand of the Virgin that diverted the bullet, and his lifelong devotion to the Scapular was his way of "hiding" in her heart. He famously refused to let surgeons remove it during his operation.
              </p>

              <QuizCTA
                title="Are you called to the Carmelite way?"
                description="The Scapular is a commitment to a life of prayer. Take our quiz to see if you are ready for this special spiritual covenant."
              />

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-4 text-center">A Traditional Blessing Excerpt</h3>
                <p className="text-text italic text-sm leading-relaxed">
                  "Receive this blessed Scapular and ask the most holy Virgin that, by her merits, it may be worn with no stain of sin and may protect thee from all harm and lead thee to everlasting life. Amen."
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Common Misconceptions
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>"I can't wear it if it's dirty or torn."</strong> <br/>
                Actually, a worn-out scapular is a sign of a life of prayer. When it breaks, you should burn or bury it and simply put on a new one. The new one does not need to be blessed; the blessing remains on the *person* after the first investiture.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>"It's just for old people."</strong> <br/>
                On the contrary! The Scapular is a "shield of protection" (Armour of God). It is especially powerful for young people facing the temptations of the modern world.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "The Scapular is a silent prayer... it says: 'Mother, I am yours.'"
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="brown-scapular-guide" />

            <BlogFAQ faqs={[
              {
                question: "Can children be enrolled in the Brown Scapular?",
                answer: "Yes! Many families choose to have their children enrolled at the time of their First Holy Communion. It is a wonderful way to place them under Mary's protection from an early age."
              },
              {
                question: "What happens if I lose my Scapular?",
                answer: "Nothing happens to the promise. You are still enrolled. Simply purchase or make a new one (100% wool) and put it on. The enrollment is a spiritual contract that lasts your entire life."
              },
              {
                question: "Can a non-Catholic wear it?",
                answer: "A non-Catholic can wear it as a sign of their desire for Mary's intercession and God's grace. However, they cannot be 'enrolled' in the Carmelite affiliation until they enter the Church. It remains a powerful sacramental even for them."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Begin Your Consecration Today
              </h3>
              <p className="text-text-muted mb-6">
                Step into a 800-year tradition of grace. Take our quiz to learn more about how to live a holy life through the sacramentals of the Church.
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
