import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";

export default function FatimaPrayerOMyJesus() {
  return (
    <>
      <Helmet>
        <title>Fatima Prayer (O My Jesus): Full Text, Meaning and When to Pray It | Guide Catholic</title>
        <meta name="description" content="The Fatima Prayer (O My Jesus) with full text, meaning, when Our Lady asked for it in the Rosary, and how Catholics pray it after each decade." />
        <meta name="keywords" content="fatima prayer, o my jesus prayer, fatima rosary prayer, our lady of fatima prayer, pray after each decade fatima" />
        <link rel="canonical" href="https://guidecatholic.com/blog/fatima-prayer-o-my-jesus/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Fatima Prayer (O My Jesus): Full Text, Meaning and When to Pray It"
        description="The Fatima Prayer (O My Jesus) with full text, meaning, when Our Lady asked for it in the Rosary, and how Catholics pray it after each decade."
        url="https://guidecatholic.com/blog/fatima-prayer-o-my-jesus/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Fatima Prayer", url: "https://guidecatholic.com/blog/fatima-prayer-o-my-jesus/" },
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
              <span className="text-text">Fatima Prayer</span>
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
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers & Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 13, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Fatima Prayer (O My Jesus): Full Text, Meaning and When to Pray It
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Our Lady of Fatima asked the shepherd children to add this short prayer to the Rosary. Millions of Catholics still pray it today.
              </p>
            </header>

            <div className="aspect-video bg-sky-100 rounded-2xl flex items-center justify-center mb-10">
              <Star className="w-24 h-24 text-sky-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Fatima Prayer (&quot;O my Jesus, forgive us our sins...&quot;) was revealed at Fatima in 1917 — prayed after each Rosary decade for reparation and conversion of sinners. Our Lady asked for its spread; it is central to Fatima devotion and First Saturday communions.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Fatima Prayer Full Text</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those most in need of Thy mercy. Amen.
                </p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="fatima-prayer-o-my-jesus">
                The prayer is sometimes called the Decade Prayer because Our Lady requested that it be recited after each decade of the Rosary. It asks for mercy, conversion, and the salvation of souls — especially souls in greatest spiritual danger.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Does the Fatima Prayer Mean?</h2>
              <p className="text-text leading-relaxed mb-6">
                Each line has a clear intention: repentance ("forgive us our sins"), rescue from eternal loss ("save us from the fires of hell"), universal mission ("lead all souls to Heaven"), and special mercy for the weakest ("especially those most in need of Thy mercy").
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">July 13, 1917: When the Prayer Was Given</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="fatima-prayer-o-my-jesus">
                Three shepherd children in the parish of Fatima, Portugal — Lúcia dos Santos and her cousins Francisco and Jacinta Marto — reported six apparitions of a Lady from heaven between May 13 and October 13, 1917. According to the account Sister Lúcia later wrote in her memoirs, the prayer was taught during the third apparition, on July 13. That same day the children were shown a vision of hell, the first part of what became known as the secret of Fatima. Immediately afterward, Lúcia recorded, the Lady asked that when they prayed the Rosary they say this prayer after each mystery.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="fatima-prayer-o-my-jesus">
                The context explains the urgency of the words. The children had just seen what the loss of a soul means, so the prayer is not an abstract formula but a plea from people who understood the stakes. The local bishop of Leiria declared the apparitions worthy of belief in 1930, and a hundred years to the day after the first apparition, Pope Francis declared Francisco and Jacinta saints during a Mass at the shrine in 2017. Lúcia, who became a Carmelite nun, died in 2005.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Wording Differences You May Hear</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="fatima-prayer-o-my-jesus">
                English versions vary because they are translations of Lúcia's Portuguese. Some parishes say fire of hell, others fires of hell. The familiar ending, especially those most in need of Thy mercy, adds the words of Thy mercy, which are not in Lúcia's account; the original simply asks for those most in need. Some older booklets replaced the ending with a petition for the souls in purgatory; that variant is not the text Lúcia recorded. Any of the common English forms may be used in private prayer, but when praying in a group, follow the leader's wording so everyone speaks together.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Line by Line</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>O my Jesus:</strong> the prayer is addressed directly to Christ, even though it sits inside the Marian Rosary. Mary teaches the children to turn to her Son.</li>
                <li><strong>Forgive us our sins:</strong> the plural matters. We pray as members of one family of sinners, echoing the Our Father (Matthew 6:12).</li>
                <li><strong>Save us from the fires of hell:</strong> the Church teaches that hell is real and that it consists chiefly in eternal separation from God (CCC 1033-1035). It also teaches that God predestines no one to go there (CCC 1037).</li>
                <li><strong>Lead all souls to Heaven:</strong> this reflects God&apos;s own desire that all be saved and come to the knowledge of the truth (1 Timothy 2:4).</li>
                <li><strong>Especially those most in need:</strong> usually understood as sinners in greatest danger of being lost, including the dying who are far from God. It turns the Rosary outward into intercession for strangers.</li>
              </ul>

              <QuizCTA
                title="Deepen your Rosary and Marian devotion"
                description="Take the Catholic life assessment for a personalized plan for prayer and growth."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When to Pray the Fatima Prayer</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>After each decade of the Rosary (after the Glory Be), as Our Lady requested.</li>
                <li>During Fatima novenas or the months of May and October.</li>
                <li>When interceding for sinners, the dying, or loved ones far from God.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Where It Goes in Each Decade</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li>Announce the mystery (for example, the Agony in the Garden).</li>
                <li>Pray one Our Father on the large bead.</li>
                <li>Pray ten Hail Marys on the small beads while meditating on the mystery.</li>
                <li>Pray the Glory Be.</li>
                <li>Pray the Fatima Prayer, then move to the next mystery.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Other Fatima Prayers</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="fatima-prayer-o-my-jesus">
                The O My Jesus is one of several prayers associated with Fatima. Lúcia wrote that in 1916, before the Marian apparitions, an angel taught the children a prayer of faith and adoration beginning My God, I believe, I adore, I hope, and I love You, and a prayer of Eucharistic reparation addressed to the Most Holy Trinity. The Lady also taught a short offering to be made with every sacrifice, for love of Jesus, for the conversion of sinners, and in reparation for sins against the Immaculate Heart of Mary. The Decade Prayer is the only one of these that became part of how millions of Catholics pray the Rosary.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Is the Fatima Prayer Required?</h2>
              <p className="text-text leading-relaxed mb-6">
                The Church encourages the Rosary and the Fatima devotions, but private revelation never replaces the Gospel or the liturgy. In the Catechism's words, such revelations are not meant to improve or complete Christ's definitive Revelation but to help people live by it more fully in a certain period (CCC 67). No Catholic is obliged to add the Fatima Prayer to the Rosary. The Fatima Prayer is a beautiful ecclesial custom that unites millions of Catholics to Our Lady's call for penance, prayer, and reparation for sinners.
              </p>
            </div>

            <BlogFAQ faqs={[
              { question: "What is the O My Jesus prayer?", answer: "It is the prayer Our Lady of Fatima asked to be added after each decade of the Rosary: O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those most in need of Thy mercy. Amen." },
              { question: "When did Our Lady teach the Fatima Prayer?", answer: "According to the memoirs of Sister Lúcia, Our Lady taught this prayer during the Fatima apparitions in 1917 and asked that it be prayed after each decade of the Rosary." },
              { question: "Do you pray the Fatima prayer before or after the Glory Be?", answer: "The common Catholic practice is to pray the Glory Be at the end of each decade, then pray the Fatima Prayer (O My Jesus) before moving to the next decade." },
              { question: "Is the Fatima Prayer the same as the Divine Mercy Chaplet?", answer: "No. They are different devotions. The Fatima Prayer is a single short prayer after Rosary decades. The Divine Mercy Chaplet uses different prayers on different beads." },
              { question: "Are the words of Thy mercy part of the original Fatima Prayer?", answer: "No. Sister Lúcia's Portuguese account ends by asking for those most in need. The words of Thy mercy were added in common English usage to clarify the meaning, and both forms are widely prayed." },
              { question: "Has the Church approved the Fatima apparitions?", answer: "Yes. The bishop of Leiria declared them worthy of belief in 1930, and popes have visited the shrine. Like all private revelations, Fatima is approved for devotion but is not part of the deposit of faith that Catholics must believe." },
              { question: "Who were the Fatima visionaries?", answer: "Lúcia dos Santos and her cousins Francisco and Jacinta Marto. Francisco and Jacinta died as children, in 1919 and 1920, after contracting influenza during the 1918 pandemic, and were canonized in 2017; Lúcia became a Carmelite nun and died in 2005." },
            ]} />

            <RelatedArticles currentSlug="fatima-prayer-o-my-jesus" />

            <ArticleBottomCTA title="Grow in Catholic prayer" description="Receive a personalized spiritual growth guide." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
