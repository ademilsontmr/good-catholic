import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Search, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function StAnthonyPrayer() {
  return (
    <>
      <Helmet>
        <title>St. Anthony Prayer: For Lost Things, Lost People & Impossible Causes | Guide Catholic</title>
        <meta name="description" content="Prayers to St. Anthony of Padua — patron of lost things. The traditional prayer, the Responsory, novena, and how to ask St. Anthony to help you find what is lost." />
        <meta name="keywords" content="st anthony prayer, saint anthony prayer, prayer to st anthony for lost things, st anthony lost things, tony tony look around prayer, st anthony novena" />
        <link rel="canonical" href="https://guidecatholic.com/blog/st-anthony-prayer/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="St. Anthony Prayer: For Lost Things, Lost People & Impossible Causes"
        description="Prayers to St. Anthony of Padua — patron of lost things. The traditional prayer, the Responsory, novena, and how to ask St. Anthony to help you find what is lost."
        url="https://guidecatholic.com/blog/st-anthony-prayer/"
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
              <span className="text-text">St. Anthony Prayer</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Saints & Intercession</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />13 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                St. Anthony Prayer: For Lost Things, Lost People & Impossible Causes
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Lost your keys? Lost something precious? Lost your way? Catholics around the world turn to St. Anthony of Padua — the patron of lost things — and find what they were looking for. Here are the prayers that work.
              </p>
            </header>

            <div className="aspect-video bg-orange-100 rounded-2xl flex items-center justify-center mb-10">
              <Search className="w-24 h-24 text-orange-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                St. Anthony of Padua (1195-1231) is one of the most beloved saints in the Catholic Church — and one of the most invoked. His feast day (June 13) draws millions of pilgrims to his basilica in Padua, Italy. His intercession is sought for lost objects, lost people, lost faith, and impossible causes.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The connection between St. Anthony and lost things comes from a story in his life: a novice who had borrowed Anthony's psalter (a book of psalms) without permission decided to leave the monastery and took the book with him. Anthony prayed for its return, and the novice was compelled to come back and return the book. From this story grew the tradition of asking St. Anthony to help find lost things.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Traditional Prayer to St. Anthony</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text font-semibold text-center mb-4">Traditional Prayer to St. Anthony</p>
                <p className="text-text italic leading-relaxed text-sm">
                  O Holy St. Anthony, gentlest of Saints, your love for God and charity for His creatures made you worthy, when on earth, to possess miraculous powers. Miracles waited on your word, which you were ever ready to speak for those in trouble or anxiety. Encouraged by this thought, I implore you to obtain for me [mention your request]. The answer to my prayer may require a miracle; even so, you are the Saint of Miracles. O gentle and loving St. Anthony, whose heart was ever full of human sympathy, whisper my petition into the ears of the sweet Infant Jesus, who loved to be folded in your arms; and the gratitude of my heart will ever be yours. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Simple Prayer for Lost Things</h2>
              <p className="text-text leading-relaxed mb-6">
                The most widely used prayer to St. Anthony for lost things is simple and direct:
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text italic leading-relaxed text-sm text-center">
                  "Tony, Tony, look around — something's lost and must be found!"
                </p>
              </div>
              <p className="text-text leading-relaxed mb-6">
                This popular rhyme is not an official Catholic prayer, but it reflects the warm, familiar relationship Catholics have with St. Anthony. A more formal version:
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text italic leading-relaxed text-sm">
                  Dear St. Anthony, please come around — [name the lost item] is lost and cannot be found. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Responsory of St. Anthony (Si Quaeris Miracula)</h2>
              <p className="text-text leading-relaxed mb-6">
                The most ancient and powerful prayer associated with St. Anthony is the <em>Responsory</em> — a Latin hymn composed shortly after his death that lists his miracles. It is traditionally prayed when seeking his intercession for any need.
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text font-semibold text-center mb-3">Si Quaeris Miracula (If You Seek Miracles)</p>
                <p className="text-text italic leading-relaxed text-sm">
                  If you seek miracles, death, error, all calamities, the leprosy and demons fly, and health succeeds infirmities.<br /><br />
                  The sea obeys and fetters break; lost things are found; the young and old find help; and countless blessings freely flow from Anthony's thaumaturgic hand.<br /><br />
                  Let those who know say thanks to God. Let those who seek say: Praise to thee! O Anthony, all marvels are thy gift alone from God above.<br /><br />
                  V. Pray for us, blessed Anthony.<br />
                  R. That we may be made worthy of the promises of Christ.<br /><br />
                  Let us pray: O God, let the votive commemoration of blessed Anthony, thy Confessor and Doctor, be a source of joy to thy Church, that she may always be fortified with spiritual assistance and deserve to possess eternal joy. Through Christ our Lord. Amen.
                </p>
              </div>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your prayer life and devotion to the saints."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Novena to St. Anthony</h2>
              <p className="text-text leading-relaxed mb-6">
                The Novena to St. Anthony is prayed for nine consecutive days for a specific intention. The traditional novena begins on June 4 and ends on June 12, the day before his feast day (June 13). It can also be prayed at any time.
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text font-semibold text-center mb-3">Novena to St. Anthony (Daily Prayer)</p>
                <p className="text-text italic leading-relaxed text-sm">
                  Blessed be God in His Angels and in His Saints.<br /><br />
                  O Holy St. Anthony, I come to you with faith and confidence. You are the patron of the poor and the helper of all who seek your aid with humility and trust. You have helped countless souls in need; help me now in my necessity.<br /><br />
                  I ask you to intercede for me before God for the following intention: [mention your request].<br /><br />
                  I know that God can grant my request if it is His holy will. I trust in your powerful intercession and in God's infinite mercy. May His will be done in all things.<br /><br />
                  St. Anthony, you who are so close to God, pray for me that I may receive what I ask, if it is for the good of my soul. Amen.<br /><br />
                  <em>Say 1 Our Father, 1 Hail Mary, 1 Glory Be.</em>
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Prayer to St. Anthony for a Lost Person</h2>
              <p className="text-text leading-relaxed mb-6">
                St. Anthony is also invoked for people who are "lost" — spiritually, emotionally, or physically. This prayer is for someone who has drifted from the faith or from their family:
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text italic leading-relaxed text-sm">
                  Dear St. Anthony, you who found the lost psalter and brought back the wandering novice, I ask you to intercede for [name], who has lost their way. May God's grace reach them wherever they are. May they feel the love of God drawing them home. May the Holy Spirit open their heart to truth and healing. St. Anthony, patron of the lost, bring [name] back to God and to those who love them. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Was St. Anthony of Padua?</h2>
              <p className="text-text leading-relaxed mb-6">
                St. Anthony was born Fernando Martins de Bulhões in Lisbon, Portugal, in 1195. He joined the Augustinian Canons as a young man, then transferred to the Franciscans after being inspired by the martyrdom of five Franciscan friars in Morocco.
              </p>
              <p className="text-text leading-relaxed mb-6">
                He became one of the greatest preachers of the Middle Ages — so powerful that fish reportedly came to the surface of the water to hear him preach (a story that gave rise to his patronage of fish and fishermen). He was a brilliant theologian, appointed by St. Francis of Assisi himself to teach theology to the Franciscan friars.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Anthony died in Padua, Italy, on June 13, 1231, at the age of 35. He was canonized just one year later — one of the fastest canonizations in Church history. He was declared a Doctor of the Church in 1946.
              </p>
              <p className="text-text leading-relaxed mb-6">
                His feast day is June 13. He is the patron of lost articles, the poor, travelers, pregnant women, and many other causes.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Bread of St. Anthony</h2>
              <p className="text-text leading-relaxed mb-6">
                A beautiful tradition associated with St. Anthony is the "Bread of St. Anthony" — the practice of donating bread (or money for bread) to the poor in thanksgiving for his intercession. When you ask St. Anthony for help, you promise to give bread to the poor if your prayer is answered. This tradition began in 1890 and continues today through the "St. Anthony's Bread" charitable programs run by Franciscan communities worldwide.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "If miracles you seek, Anthony's help entreat."
                </p>
                <p className="text-text-muted text-center mt-2">— From the Responsory of St. Anthony</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "Why is St. Anthony the patron of lost things?", answer: "The tradition comes from a story in St. Anthony's life: a novice borrowed his psalter without permission and left the monastery. Anthony prayed for its return, and the novice was compelled to come back and return the book. From this story grew the tradition of asking St. Anthony to help find lost things." },
              { question: "What is the prayer to St. Anthony for lost things?", answer: "The most popular prayer is the simple rhyme: 'Tony, Tony, look around — something's lost and must be found!' A more formal prayer: 'Dear St. Anthony, please come around — [name the lost item] is lost and cannot be found. Amen.' The traditional prayer is the Responsory (Si Quaeris Miracula), which lists his miracles." },
              { question: "When is the feast day of St. Anthony?", answer: "The feast day of St. Anthony of Padua is June 13. It is one of the most celebrated feast days in the Catholic Church, drawing millions of pilgrims to his basilica in Padua, Italy." },
              { question: "What is St. Anthony the patron saint of?", answer: "St. Anthony is the patron saint of lost articles, the poor, travelers, pregnant women, fishermen, and many other causes. He is also invoked for people who are spiritually lost or have drifted from the faith." },
              { question: "What is the Bread of St. Anthony?", answer: "The Bread of St. Anthony is a tradition of donating bread (or money for bread) to the poor in thanksgiving for St. Anthony's intercession. When you ask St. Anthony for help, you promise to give bread to the poor if your prayer is answered. This tradition began in 1890 and continues today through Franciscan charitable programs." },
            ]} />

            <RelatedArticles currentSlug="st-anthony-prayer" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your prayer life and devotion to the saints.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
