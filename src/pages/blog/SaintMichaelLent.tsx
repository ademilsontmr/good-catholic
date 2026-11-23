import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sword, Calendar, Clock, ArrowLeft, ShieldCheck, Flame, Sparkles, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { StMichaelCboCTA } from "@/components/blog/StMichaelCboCTA";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";
import { TopicSeriesNav } from "@/components/blog/TopicSeriesNav";

export default function SaintMichaelLent() {
  return (
    <>
      <Helmet>
        <title>St. Michael&apos;s Lent Origins: St. Francis at La Verna | Guide Catholic</title>
        <meta name="description" content="Where St. Michael's Lent comes from: St. Francis's 1224 fast on Mount La Verna, the seraph and the stigmata, his devotion to angels, and the nine choirs." />
        <meta name="keywords" content="st michael's lent origin, st francis la verna 1224, st francis stigmata st michael, history of st michael's lent, nine choirs of angels, quaresma de sao miguel" />
        <link rel="canonical" href="https://guidecatholic.com/blog/st-michael-lent-guide/" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <ArticleSchema
        title="The Origins of St. Michael's Lent: St. Francis, La Verna, and the Nine Choirs of Angels"
        description="Where St. Michael's Lent comes from: St. Francis's 1224 fast on Mount La Verna, the seraph and the stigmata, his devotion to angels, and the nine choirs."
        url="https://guidecatholic.com/blog/st-michael-lent-guide/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Origins of St. Michael's Lent", url: "https://guidecatholic.com/blog/st-michael-lent-guide/" },
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
              <span className="text-text">Origins of St. Michael&apos;s Lent</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  History &amp; Devotion
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  August 15 – Sept 29
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  12 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Origins of St. Michael&apos;s Lent: St. Francis, La Verna, and the Nine Choirs of Angels
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Every St. Michael&apos;s Lent goes back to one man on one mountain: Francis of Assisi, fasting in honor of the archangel in the late summer of 1224. This is the story of that fast, what happened at its end, and the world of angels Francis was praying to.
              </p>
            </header>

            <div className="aspect-video bg-orange-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
               <ShieldCheck className="w-24 h-24 text-orange-400/20 absolute -bottom-4 -right-4" />
               <Sword className="w-32 h-32 text-orange-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">St. Michael&apos;s Lent began as a personal fast of St. Francis of Assisi, kept from the Assumption (August 15) to the feast of St. Michael (September 29). In 1224 he kept it on Mount La Verna in Tuscany, and around September 14 he received the stigmata after a vision of a seraph, the highest of the nine traditional choirs of angels.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <StMichaelCboCTA />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Francis and the angels
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-michael-lent-guide">
                St. Francis of Assisi (1181/82–1226) is remembered for poverty, for peace, and for his love of creation. Less often remembered is his devotion to the angels. St. Bonaventure, whose Major Legend became the official life of Francis, writes that he was bound to the angels by a deep love and honored St. Michael with special devotion, because Michael&apos;s office is to present souls to God. Bonaventure adds that Francis fasted in Michael&apos;s honor from the feast of the Assumption until the feast of St. Michael.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-michael-lent-guide">
                That is the root of St. Michael&apos;s Lent. It was not a law Francis gave his brothers, and it does not appear in his Rule. It was a personal discipline, kept out of love for an angel he believed was close to the dying and to the Church, and later remembered and imitated by those who loved Francis.
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The many Lents of St. Francis
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-michael-lent-guide">
                Francis kept several forty-day fasts during the year, and the word Lent was used for each of them. The Rule he wrote for his friars, approved in 1223, asks them to fast from the feast of All Saints until Christmas, and of course during the Lent before Easter. It also mentions a voluntary forty-day fast beginning at Epiphany, calling those who keep it blessed by the Lord while leaving the friars free not to.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-michael-lent-guide">
                The fast from the Assumption to St. Michael&apos;s feast belonged to this pattern of seasons set apart for prayer. Seeing it this way explains its name: a Lent was any season of forty days of penance, not only the one before Easter. It also explains why the devotion has always been voluntary. Francis bound his brothers to some fasts and invited them to others; St. Michael&apos;s Lent was his own.
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Mount La Verna
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-michael-lent-guide">
                La Verna is a rocky, forested mountain in the Apennines of Tuscany, in the province of Arezzo, Italy. In 1213 a nobleman, Count Orlando of Chiusi, offered it to Francis as a place of solitude for prayer. Francis went there several times, and the friars built simple shelters among the rocks. Today a Franciscan sanctuary stands on the site, including the Chapel of the Stigmata, built over the place where tradition locates the event of 1224.
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The fast of 1224
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-michael-lent-guide">
                In the summer of 1224, two years before his death, Francis went up to La Verna with a few companions, among them Brother Leo, his confessor and secretary, to keep his fast in honor of St. Michael. He withdrew to a more isolated spot and asked to be left largely alone. Bonaventure tells that Francis, wanting to know how to please God, had the Gospel book opened three times, and each time it opened at an account of the Passion. He took this as a sign that he was to be conformed to Christ crucified before he died.
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The seraph and the stigmata
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-michael-lent-guide">
                According to Bonaventure, on a morning around the feast of the Exaltation of the Holy Cross, September 14, Francis saw a seraph with six fiery wings descending from heaven. Between the wings appeared the figure of a man crucified. When the vision passed, Francis bore in his hands and feet the marks of nails, and in his side a wound. He tried to hide them for the rest of his life, though his companions saw them, and many witnesses examined them after his death on October 3, 1226.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-michael-lent-guide">
                The Franciscan family still keeps the feast of the Stigmata of St. Francis on September 17. The date falls in the last two weeks of St. Michael&apos;s Lent, which is why the devotion has always carried a strong link to the Cross. The fast in honor of an angel ended with the saint marked by the wounds of Christ. Whatever else St. Michael&apos;s Lent is, it is not meant to stop at the angels.
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A blessing written on the mountain
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-michael-lent-guide">
                Before he came down from La Verna, Francis wrote a small parchment for Brother Leo. On one side are the Praises of God, a litany of names for God; on the other, the blessing from the Book of Numbers, &quot;The Lord bless you and keep you,&quot; with Francis&apos;s own signature, a tau cross. Leo kept it for the rest of his life, and the original is preserved in the Basilica of St. Francis in Assisi. It is one of very few writings in Francis&apos;s own hand, and it came out of this very Lent.
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                <Flame className="w-6 h-6 text-accent" />
                Why a seraph? The nine choirs of angels
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-michael-lent-guide">
                The angel of La Verna was a seraph, the highest rank in the traditional ordering of angels. That ordering, usually called the nine choirs, groups the angels in three triads. From highest to lowest they are listed below, each with a Scripture passage where the name appears.
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>Seraphim:</strong> the burning ones who cry &quot;Holy, holy, holy&quot; (Isaiah 6:2-3)</li>
                <li><strong>Cherubim:</strong> guardians of the way to the tree of life (Genesis 3:24; Ezekiel 10)</li>
                <li><strong>Thrones:</strong> named among the invisible powers created in Christ (Colossians 1:16)</li>
                <li><strong>Dominions:</strong> also in Colossians 1:16 and Ephesians 1:21</li>
                <li><strong>Virtues:</strong> &quot;virtue&quot; in older translations of Ephesians 1:21, often rendered &quot;might&quot; today</li>
                <li><strong>Powers:</strong> Colossians 1:16; Ephesians 1:21</li>
                <li><strong>Principalities:</strong> Colossians 1:16; Ephesians 1:21</li>
                <li><strong>Archangels:</strong> the title given to Michael in Jude 9; see also 1 Thessalonians 4:16</li>
                <li><strong>Angels:</strong> the messengers closest to human affairs, including the guardian angels (Matthew 18:10)</li>
              </ul>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Where the nine-choir order comes from
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-michael-lent-guide">
                Scripture uses these names but never arranges them in a single list. The ordering into nine choirs comes from a Greek writer of around the year 500 who wrote under the name of Dionysius the Areopagite, in a work called The Celestial Hierarchy. Pope St. Gregory the Great used a nine-fold list with a slightly different order, and St. Thomas Aquinas discussed the hierarchy at length in the Summa Theologiae. Through them it became the standard picture in Western theology and art.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-michael-lent-guide">
                It is important to keep the levels of teaching straight. The Catechism states that the existence of angels is a truth of faith (CCC 328). The precise ranking into nine choirs is a venerable theological tradition, not a defined dogma. Catholics are free to find it helpful, as Francis&apos;s age did, without treating it as a map of heaven drawn to scale.
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Where St. Michael fits
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-michael-lent-guide">
                Scripture calls Michael an archangel, and the liturgy celebrates him with the archangels Gabriel and Raphael on September 29. Tradition also calls him the prince of the heavenly host, the leader of the angels who stayed faithful in the battle of Revelation 12. Some medieval theologians argued about whether a leader of all the angels could belong to one of the lower choirs; the Church has never settled the question, and the devotion does not depend on it.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-michael-lent-guide">
                What matters for St. Michael&apos;s Lent is the role Bonaventure named: Michael as the one who presents souls to God. That is why the season has always been associated with preparation for death, protection in temptation, and fidelity to Christ, rather than with curiosity about angelic ranks.
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                From Francis to today
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-michael-lent-guide">
                For centuries St. Michael&apos;s Lent was kept mostly by Franciscans and by lay people close to them. In recent years it has spread widely among English-speaking Catholics, helped by parish bulletins, books, and online novenas. It remains what it was in 1224: a private devotion, not a liturgical season, with no prescribed texts and no obligation. That freedom is a strength. It lets each person enter Francis&apos;s fast at the level of prayer and penance that fits their life.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-michael-lent-guide">
                If this history has made you want to keep the season, the other pages in this series explain the calendar, the daily prayers, and how to choose a penance. Francis himself would point past all of it to the Crucified, which is where his own St. Michael&apos;s Lent led.
              </LinkedText>

              <QuizCTA
                title="How well do you know the saints and angels?"
                description="Take our short quiz on Catholic tradition and get a personal plan for growing in prayer."
              />

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-4 text-center flex items-center justify-center gap-2 text-xl">
                  <ShieldAlert className="w-6 h-6 text-orange-600" />
                  Key dates in the story
                </h3>
                <ul className="list-disc list-inside text-text space-y-2 text-sm">
                  <li><strong>1213:</strong> Count Orlando of Chiusi offers Mount La Verna to Francis.</li>
                  <li><strong>1223:</strong> Pope Honorius III approves the Rule of the Friars Minor.</li>
                  <li><strong>August 1224:</strong> Francis begins his fast on La Verna in honor of St. Michael.</li>
                  <li><strong>Around September 14, 1224:</strong> the vision of the seraph and the stigmata.</li>
                  <li><strong>October 3, 1226:</strong> Francis dies at the Portiuncula, near Assisi.</li>
                  <li><strong>1228:</strong> Pope Gregory IX canonizes him.</li>
                </ul>
              </div>

            </div>

            <TopicSeriesNav currentSlug="st-michael-lent-guide" />
            <BlogFAQ faqs={[
              {
                question: "Did St. Francis receive the stigmata during St. Michael's Lent?",
                answer: "Yes, according to St. Bonaventure. Francis was keeping his fast in honor of St. Michael on Mount La Verna in 1224 when, around the feast of the Holy Cross on September 14, he saw a seraph and received the wounds of Christ."
              },
              {
                question: "Where is Mount La Verna?",
                answer: "In the Apennine mountains of Tuscany, Italy, in the province of Arezzo. A Franciscan sanctuary there includes the Chapel of the Stigmata."
              },
              {
                question: "Why did St. Francis honor St. Michael?",
                answer: "Bonaventure writes that Francis held Michael in special honor because his office is to present souls to God."
              },
              {
                question: "What are the nine choirs of angels?",
                answer: "Seraphim, Cherubim, Thrones, Dominions, Virtues, Powers, Principalities, Archangels, and Angels, in the order most often given in Western tradition."
              },
              {
                question: "Is the nine-choir hierarchy Church dogma?",
                answer: "No. The existence of angels is a truth of faith (CCC 328), but the arrangement into nine choirs is a theological tradition from around AD 500, developed by Gregory the Great and Thomas Aquinas, not a defined dogma."
              },
              {
                question: "When is the feast of the Stigmata of St. Francis?",
                answer: "September 17, kept by the Franciscan family. It falls near the end of St. Michael's Lent."
              }
            ]} />

<RelatedArticles currentSlug="st-michael-lent-guide" />

            <ArticleBottomCTA title="Enlist the General of the Heavenly Host" description="Take our quiz to receive a custom plan for prayer and penance in honor of St. Michael." />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
