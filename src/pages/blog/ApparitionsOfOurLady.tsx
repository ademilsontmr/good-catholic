import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function ApparitionsOfOurLady() {
  return (
    <>
      <Helmet>
        <title>Apparitions of Our Lady: Fatima, Lourdes & Guadalupe Explained | Guide Catholic</title>
        <meta name="description" content="Learn about the three most important approved Marian apparitions: Our Lady of Guadalupe (1531), Lourdes (1858), and Fatima (1917). History, messages, miracles, and how to respond." />
        <meta name="keywords" content="apparitions of our lady, our lady of fatima, our lady of lourdes, our lady of guadalupe, marian apparitions catholic, fatima secrets" />
        <link rel="canonical" href="https://guidecatholic.com/blog/apparitions-of-our-lady/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Apparitions of Our Lady: Fatima, Lourdes & Guadalupe Explained"
        description="Learn about the three most important approved Marian apparitions: Our Lady of Guadalupe (1531), Lourdes (1858), and Fatima (1917). History, messages, miracles, and how to respond."
        url="https://guidecatholic.com/blog/apparitions-of-our-lady/"
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
              <span className="text-text">Apparitions of Our Lady</span>
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
                  20 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Apparitions of the Virgin Mary: Guadalupe, Lourdes & Fatima — Complete Guide
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                At critical moments in history, Heaven has broken through in a remarkable way. The Virgin Mary has appeared to chosen visionaries with urgent, loving messages for all humanity. Here is a complete account of the three most significant approved Marian apparitions.
              </p>
            </header>

            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Marian apparitions — occasions when the Virgin Mary is believed to appear physically to one or more individuals — have been part of Catholic experience since the early Church. However, not all claimed apparitions are equal. The Church has a rigorous, multi-stage process for investigating them, and very few receive official approbation.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                How Does the Church Approve Apparitions?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                It is essential to understand the Church's theological framework before exploring individual apparitions. The Church distinguishes between <strong>Public Revelation</strong> (all that God has definitively revealed through Scripture and Tradition, which ended with the death of the last Apostle) and <strong>Private Revelation</strong> (post-apostolic visions, locutions, or apparitions given to specific individuals).
              </p>
              <p className="text-text leading-relaxed mb-6">
                Crucially, Catholics are <em>not</em> required to believe in any approved Marian apparition as a matter of faith. The Catechism notes: "Throughout the ages, there have been so-called 'private' revelations, some of which have been recognized by the authority of the Church. They do not belong, however, to the deposit of faith. It is not their role to improve or complete Christ's definitive Revelation, but to help live more fully by it in a certain period of history." (CCC 67)
              </p>
              <p className="text-text leading-relaxed mb-6">
                When the Church officially approves an apparition as "worthy of belief" (<em>dignum fide humanae</em>), she is saying: (1) the apparition contains nothing contrary to Catholic faith or morals, (2) the witnesses are credible and show signs of genuine sanctity, and (3) authentic spiritual fruits (conversions, healings, lasting devotion) have accompanied it. This is a significant — though not infallible — endorsement.
              </p>

              <div className="overflow-x-auto mb-10">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-accent/10">
                      <th className="border border-border p-3 text-left font-semibold">Apparition</th>
                      <th className="border border-border p-3 text-left font-semibold">Location</th>
                      <th className="border border-border p-3 text-left font-semibold">Year</th>
                      <th className="border border-border p-3 text-left font-semibold">Visionary</th>
                      <th className="border border-border p-3 text-left font-semibold">Feast Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-border p-3">Our Lady of Guadalupe</td><td className="border border-border p-3">Mexico City, Mexico</td><td className="border border-border p-3">1531</td><td className="border border-border p-3">St. Juan Diego</td><td className="border border-border p-3">December 12</td></tr>
                    <tr className="bg-background-muted/30"><td className="border border-border p-3">Our Lady of Rue du Bac (Miraculous Medal)</td><td className="border border-border p-3">Paris, France</td><td className="border border-border p-3">1830</td><td className="border border-border p-3">St. Catherine Labouré</td><td className="border border-border p-3">November 27</td></tr>
                    <tr><td className="border border-border p-3">Our Lady of La Salette</td><td className="border border-border p-3">La Salette, France</td><td className="border border-border p-3">1846</td><td className="border border-border p-3">Mélanie & Maximin</td><td className="border border-border p-3">September 19</td></tr>
                    <tr className="bg-background-muted/30"><td className="border border-border p-3">Our Lady of Lourdes</td><td className="border border-border p-3">Lourdes, France</td><td className="border border-border p-3">1858</td><td className="border border-border p-3">St. Bernadette Soubirous</td><td className="border border-border p-3">February 11</td></tr>
                    <tr><td className="border border-border p-3">Our Lady of Fatima</td><td className="border border-border p-3">Fatima, Portugal</td><td className="border border-border p-3">1917</td><td className="border border-border p-3">Sts. Lúcia, Francisco & Jacinta</td><td className="border border-border p-3">May 13</td></tr>
                    <tr className="bg-background-muted/30"><td className="border border-border p-3">Our Lady of Kibeho</td><td className="border border-border p-3">Kibeho, Rwanda</td><td className="border border-border p-3">1981–1989</td><td className="border border-border p-3">Alphonsine Mumureke et al.</td><td className="border border-border p-3">November 28</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Guadalupe */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. Our Lady of Guadalupe — Mexico, 1531
              </h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 mb-6">
                <p className="text-text font-semibold">Feast Day: December 12 | Shrine: Basilica of Our Lady of Guadalupe, Mexico City</p>
                <p className="text-text-muted text-sm mt-1">Visionary: Juan Diego Cuauhtlatoatzin (canonized May 31, 2002 by Pope John Paul II)</p>
              </div>

              <h3 className="font-display text-xl font-semibold text-text mt-6 mb-3">Historical Context</h3>
              <p className="text-text leading-relaxed mb-6">
                In December 1531, Spain had completed its conquest of the Aztec Empire just ten years earlier. The indigenous peoples — reeling from military defeat, epidemic disease, and forced labor — had little reason to embrace the religion of their conquerors. The evangelization of New Spain had stalled and was marked by violence and cultural destruction.
              </p>
              <p className="text-text leading-relaxed mb-6">
                It was into this moment of extreme cultural and spiritual rupture that the Virgin Mary chose to act. On the morning of December 9, 1531, a 57-year-old indigenous convert named Juan Diego — a widower of humble origin from the Nahuatl people — was walking past Tepeyac Hill on his way to Mass. He heard beautiful music and a woman's voice calling to him tenderly in his native Nahuatl: <em>"Juanito, Juan Dieguito."</em>
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-6 mb-3">The Apparitions</h3>
              <p className="text-text leading-relaxed mb-6">
                A young woman appeared, surrounded by blinding, golden light. She identified herself as the Virgin Mary, and asked that a chapel be built on that spot so she could be close to her people, hear their cries, and heal their griefs and sorrows. She spoke to him as a mother to a beloved son — not as a conqueror to a subject.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Juan Diego brought the request to Bishop Juan de Zumárraga, who responded skeptically and asked for a sign. On December 12, Our Lady instructed Juan Diego to climb the rocky, frost-covered hill of Tepeyac and gather the flowers he would find there — Castilian roses, blooming impossibly in the middle of December in the high desert of Mexico. When he presented the roses to the bishop, opening his <em>tilma</em> (woven cloak), the flowers tumbled to the floor — and on the fabric, a perfect, full-color image of Our Lady was miraculously imprinted.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-6 mb-3">The Miraculous Image</h3>
              <p className="text-text leading-relaxed mb-6">
                The tilma of Juan Diego — a rough-woven ayate made of cactus fibers that would normally disintegrate within 20 years — now hangs in the Basilica of Our Lady of Guadalupe and is over 490 years old. Modern scientific investigations have raised extraordinary questions:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Infrared photography in 1979 revealed <strong>no brushstrokes, no underdrawing, and no primer coat.</strong></li>
                <li>The pigments used match no known paint or dye from 16th-century Mexico or Spain.</li>
                <li>The stars on the Virgin's mantle precisely correspond to the <strong>constellation patterns visible over Mexico City on December 12, 1531.</strong></li>
                <li>Digital magnification in 1979 revealed microscopic reflections in the Virgin's irises consistent with the scene at Juan Diego's feet when he opened the cloak — including figures that may be identified as Juan Diego, Bishop Zumárraga, and an interpreter.</li>
                <li>The image maintains <strong>a constant temperature of 36.6°C (98.6°F)</strong> — the normal temperature of a living human body.</li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                Within a decade of the apparition, approximately 9 million indigenous people converted to Christianity. Our Lady of Guadalupe is venerated as the <strong>Patroness of the Americas</strong> and <strong>Patroness of the Unborn.</strong>
              </p>

              {/* Lourdes */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. Our Lady of Lourdes — France, 1858
              </h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 mb-6">
                <p className="text-text font-semibold">Feast Day: February 11 | Shrine: Sanctuary of Our Lady of Lourdes, Lourdes, France</p>
                <p className="text-text-muted text-sm mt-1">Visionary: Bernadette Soubirous (canonized December 8, 1933 by Pope Pius XI)</p>
              </div>

              <h3 className="font-display text-xl font-semibold text-text mt-6 mb-3">The Visionary</h3>
              <p className="text-text leading-relaxed mb-6">
                Bernadette Soubirous was born in Lourdes on January 7, 1844, into extreme poverty. Her father was an unemployed miller; the family of six lived in a damp, dark room formerly used as a jail. Bernadette was chronically ill with severe asthma, and she had not yet made her First Communion because she had not been able to learn the catechism due to missed schooling.
              </p>
              <p className="text-text leading-relaxed mb-6">
                She was, in every human estimation, the least likely candidate for a mystical encounter with the Mother of God. This is precisely why she was chosen — the Gospel pattern of God choosing the weak to confound the strong (1 Cor 1:27).
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-6 mb-3">The 18 Apparitions</h3>
              <p className="text-text leading-relaxed mb-6">
                On February 11, 1858, Bernadette was gathering firewood near the Grotto of Massabielle with her sister and a friend. A gust of wind moved without the trees stirring, and a golden light appeared in a niche in the rock. In it stood a beautiful young woman in a white dress with a blue sash and a yellow rose on each foot, holding a rosary with golden links.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Over the next five months, the vision appeared to Bernadette 18 times. The key moments and messages:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>February 18:</strong> The Lady asked Bernadette to come to the grotto for 15 days and said she could not promise her happiness in this life, but in the next.</li>
                <li><strong>February 25:</strong> Our Lady instructed Bernadette to dig in the earth near the grotto and drink. A spring of water began to flow that has never ceased — and through whose water the Church has officially confirmed over 70 medically inexplicable miraculous cures.</li>
                <li><strong>March 2:</strong> Our Lady asked that a church be built and that processions come.</li>
                <li><strong>March 25 (Feast of the Annunciation):</strong> When Bernadette pressed the Lady for her name, she received the most theologically stunning response: <em>"Que soy era Immaculada Conception"</em> — "I am the Immaculate Conception." This doctrine had only been dogmatically defined by Pope Pius IX four years earlier in 1854, something the uneducated, French-speaking peasant girl could not have known or invented.</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-text mt-6 mb-3">The Miracles of Lourdes</h3>
              <p className="text-text leading-relaxed mb-6">
                The Medical Bureau of Lourdes, founded in 1883, operates as a rigorous scientific body that investigates all reported cures according to strict medical protocols. To date, 70 cures have been officially recognized as "miraculous" by the Catholic Church — meaning they are medically inexplicable, instantaneous, complete, and lasting, occurring after prayer and bathing in the Lourdes spring water.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Lourdes receives approximately 6 million pilgrims a year, making it one of the most visited pilgrimage sites in the world. Bernadette herself died in 1879 at age 35 after years of suffering. Her body, exhumed three times, was found incorrupt and is preserved in a glass reliquary in the convent chapel at Nevers, France.
              </p>

              <QuizCTA
                title="How deep is your Marian devotion?"
                description="Take our quiz to discover where you are on your spiritual journey and how Our Lady can lead you closer to Christ."
              />

              {/* Fatima */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                3. Our Lady of Fatima — Portugal, 1917
              </h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 mb-6">
                <p className="text-text font-semibold">Feast Day: May 13 | Shrine: Sanctuary of Our Lady of Fatima, Fatima, Portugal</p>
                <p className="text-text-muted text-sm mt-1">Visionaries: Lúcia Santos, Francisco Marto (canonized 2017), Jacinta Marto (canonized 2017)</p>
              </div>

              <h3 className="font-display text-xl font-semibold text-text mt-6 mb-3">Historical Context</h3>
              <p className="text-text leading-relaxed mb-6">
                The year 1917 was one of the darkest in modern history. World War I — the most destructive war humanity had ever seen — was still raging across Europe with millions dead. In October 1917, the Bolshevik Revolution would seize Russia and launch seven decades of officially atheistic Communist rule. Anti-Catholic sentiment was rampant. The secular world was systematically dismantling Christian civilization.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Into this context, the Virgin Mary appeared to three shepherd children in a small field called the Cova da Iria, near the village of Fatima in Portugal. Their names were Lúcia Santos (age 10), Francisco Marto (age 9), and Jacinta Marto (age 7). They were the poorest of the poor — illiterate, tending their families' sheep — and they would become witnesses to one of the most dramatic public supernatural events of modern times.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-6 mb-3">The Six Apparitions (May–October 1917)</h3>
              <p className="text-text leading-relaxed mb-6">
                Our Lady appeared six times on the 13th of each month from May to October. The crowds grew from a handful on May 13 to an estimated 70,000 on October 13. The core messages she delivered:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Daily recitation of the Rosary</strong> for world peace — she asked for this at every single apparition.</li>
                <li><strong>Penance and sacrifice</strong> for the conversion of sinners — the children were shown a vision of hell and asked to offer their sufferings for those in danger of damnation.</li>
                <li><strong>Consecration of Russia</strong> to the Immaculate Heart of Mary by the Pope and all bishops in union.</li>
                <li><strong>The Five First Saturdays devotion</strong> — receiving the sacraments and meditating on the Rosary on the first Saturday of five consecutive months, in reparation to the Immaculate Heart.</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-text mt-6 mb-3">The Miracle of the Sun — October 13, 1917</h3>
              <p className="text-text leading-relaxed mb-6">
                Our Lady had promised a miracle on October 13 so the people would believe. An estimated 70,000 people gathered in the rain-soaked field. At approximately noon, the rain suddenly stopped, the clouds parted, and multiple witnesses — including atheist and secular journalists present specifically to debunk the event — reported that the sun appeared to spin, change colors, and plunge toward the earth before returning to its position. The entire crowd of thousands, who had been completely soaked, found their clothes instantaneously dry.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Portuguese secular newspapers — including <em>O Século</em> and <em>Ordem</em>, which were anti-clerical publications — published eyewitness accounts the following day. The event was witnessed over a radius of approximately 40 kilometers.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-6 mb-3">The Three Secrets of Fatima</h3>
              <p className="text-text leading-relaxed mb-6">
                Our Lady entrusted three secrets to the children:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>First Secret:</strong> A vision of hell — a sea of fire filled with demons and souls, which Our Lady showed the children to motivate their prayers and sacrifices for sinners. Published in 1941 by Sister Lúcia.</li>
                <li><strong>Second Secret:</strong> A prophecy that World War I would end but a worse war would come if men did not stop offending God — and a specific prediction of Russia spreading its errors throughout the world. Also published in 1941. The accuracy of this prediction has been noted by historians given it was made in 1917, months before the Bolshevik Revolution.</li>
                <li><strong>Third Secret:</strong> Kept sealed in the Vatican until June 26, 2000, when it was released by Pope John Paul II. It contains a vision of a "bishop in white" being shot by soldiers amid a ruined city, widely interpreted as referring to the attempted assassination of Pope John Paul II on May 13, 1981 — the feast of Our Lady of Fatima — in St. Peter's Square.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What the Apparitions Ask of Us Today
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The messages of Guadalupe, Lourdes, and Fatima are strikingly consistent — and remarkably relevant to the present moment:
              </p>
              <ul className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>Pray the Rosary daily.</strong> This was the central, repeated request at both Lourdes and Fatima. Even a single decade of the Rosary daily is a powerful beginning.</li>
                <li><strong>Do penance.</strong> Small mortifications, Friday abstinence, fasting, and the offering of daily sufferings — particularly for the conversion of sinners.</li>
                <li><strong>Receive the sacraments frequently.</strong> Regular Confession and the Eucharist are the spiritual heartbeat of the Catholic life Our Lady consistently promotes.</li>
                <li><strong>Make a pilgrimage.</strong> Guadalupe, Lourdes, and Fatima remain among the most spiritually transforming pilgrimage destinations on earth. Even a local Marian shrine carries profound grace.</li>
                <li><strong>Consecrate yourself to the Immaculate Heart.</strong> Placing yourself under Our Lady's maternal protection and entrusting your spiritual life to her guidance is a response to the core invitation of Fatima.</li>
              </ul>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Is it a sin not to believe in Fatima or Lourdes?",
                answer: "No. Private revelations, even those officially approved by the Church, are not articles of faith that Catholics are required to believe. However, the Church's approval means they are 'worthy of belief' and contain nothing contrary to the faith, making them valuable spiritual resources."
              },
              {
                question: "How many Marian apparitions has the Church officially approved?",
                answer: "The Vatican's process has evolved. Historically, around 16–20 apparitions have received some form of official approbation. Recent examples include Kibeho (Rwanda, 2001) and Our Lady of Champion in Champion, Wisconsin (2010) — the first approved apparition in the United States."
              },
              {
                question: "Did the visionaries of Fatima become saints?",
                answer: "Yes. Francisco and Jacinta Marto were canonized by Pope Francis on May 13, 2017. Sister Lúcia Santos died on February 13, 2005, and her cause for beatification was formally opened in 2008 by the Diocese of Coimbra."
              },
              {
                question: "What is the miracle of the tilma of Guadalupe?",
                answer: "The tilma (woven cloak) of Juan Diego bears a full-color image of Our Lady that has survived over 490 years despite being made of material that normally disintegrates in 20 years. Scientific analysis has found no brushstrokes, no primer coat, and no identifiable pigments. Stars on her mantle match the constellation patterns of December 12, 1531. The image maintains a constant temperature of 36.6°C. Digital magnification reveals microscopic human figures reflected in her eyes."
              },
              {
                question: "What is the Spring at Lourdes?",
                answer: "The spring at Lourdes emerged on February 25, 1858, when Our Lady instructed Bernadette to dig in the ground of the grotto. The water has never stopped flowing. The Medical Bureau of Lourdes has formally recognized 70 medically inexplicable miraculous cures attributed to prayer and the Lourdes water. Millions of pilgrims bathe in the baths at the grotto each year."
              },
              {
                question: "What happened to the three secrets of Fatima?",
                answer: "The first two secrets (a vision of hell, and the prediction of WWII and Russia's errors) were published by Sister Lúcia in 1941. The third secret was sealed and kept in the Vatican. It was finally revealed by Pope John Paul II on June 26, 2000, and describes a vision of a bishop in white being killed, widely interpreted as the attempted assassination of Pope John Paul II on May 13, 1981."
              }
            ]} />

<RelatedArticles currentSlug="apparitions-of-our-lady" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Deepen Your Relationship with Our Lady
              </h3>
              <p className="text-text-muted mb-6">
                Take our faith quiz and discover practical steps to grow in your Catholic life under Mary's intercession.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Take the Quiz Now
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
