import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, HeartPulse } from "lucide-react";
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

export default function AnimaChristiPrayer() {
  return (
    <>
      <Helmet>
        <title>Anima Christi Prayer: Full Catholic Text, Meaning & When to Say It | Guide Catholic</title>
        <meta name="description" content="The Anima Christi (Soul of Christ) prayer in English and Latin, what each line means, and when to pray it before Communion or after Confession." />
        <meta name="keywords" content="anima christi prayer, soul of christ prayer, anima christi full text, anima christi latin, catholic prayer before communion" />
        <link rel="canonical" href="https://guidecatholic.com/blog/anima-christi-prayer/" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <ArticleSchema
        title="Anima Christi Prayer: Full Catholic Text, Meaning & When to Say It"
        description="The Anima Christi (Soul of Christ) prayer in English and Latin, what each line means, and when to pray it before Communion or after Confession."
        url="https://guidecatholic.com/blog/anima-christi-prayer/"
        datePublished="2026-05-30"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Anima Christi", url: "https://guidecatholic.com/blog/anima-christi-prayer/" },
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
              <span className="text-text">Anima Christi</span>
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
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Anima Christi Prayer: Full Catholic Text, Meaning & When to Say It
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Anima Christi — Soul of Christ — is one of the most beloved prayers in Catholic life. Catholics pray it before Holy Communion, after Confession, and in moments of spiritual need.
              </p>
            </header>

            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <HeartPulse className="w-24 h-24 text-rose-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Anima Christi (Soul of Christ) is an Eucharistic prayer — &quot;Soul of Christ, sanctify me; Body of Christ, save me...&quot; — prayed after Communion or during adoration. Though often linked to St. Ignatius, it predates him; it asks Christ&apos;s Passion to transform the soul.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Anima Christi (English)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 space-y-3 text-text italic leading-relaxed">
                <p>Soul of Christ, sanctify me.</p>
                <p>Body of Christ, save me.</p>
                <p>Blood of Christ, inebriate me.</p>
                <p>Water from the side of Christ, wash me.</p>
                <p>Passion of Christ, strengthen me.</p>
                <p>O good Jesus, hear me.</p>
                <p>Within your wounds hide me.</p>
                <p>Permit me not to be separated from you.</p>
                <p>From the wicked foe, defend me.</p>
                <p>At the hour of my death, call me and bid me come to you,</p>
                <p>That with your saints I may praise you forever and ever. Amen.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Anima Christi (Latin)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text italic leading-relaxed text-sm space-y-2">
                <p>Anima Christi, sanctifica me. Corpus Christi, salva me. Sanguis Christi, inebria me. Aqua lateris Christi, lava me. Passio Christi, conforta me.</p>
                <p>O bone Iesu, exaudi me. Intra tua vulnera absconde me. Ne permittas me separari a te. Ab hoste maligno defende me. In hora mortis meae voca me. Et iube me venire ad te, ut cum Sanctis tuis laudem te in saecula saeculorum. Amen.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="anima-christi-prayer">
                Each line of the Anima Christi asks Christ to act on the soul through his Passion — sanctifying, saving, washing, and defending. It is a prayer of total trust in the Person of Jesus, not merely a formula.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Wrote the Anima Christi?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="anima-christi-prayer">
                Nobody knows the author. The prayer was already in circulation in the early fourteenth century, almost two hundred years before St. Ignatius of Loyola was born in 1491. Manuscripts and prayer books from the 1300s contain it, and it was commonly linked to Pope John XXII, who reigned from 1316 to 1334 and is said to have attached an indulgence to it, though his authorship is not proven. It was also reported in older reference works as being inscribed on one of the gates of the Alcázar of Seville in the fourteenth century. Whoever composed it, the prayer belongs to the late medieval flowering of devotion to the Passion and the Eucharist that also produced the feast of Corpus Christi.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="anima-christi-prayer">
                Ignatius gave the prayer its worldwide reach. He placed it in his Spiritual Exercises, where the retreatant is directed in the triple colloquy of the First Week to speak with Mary, then with Christ, then with the Father, and to close the conversation with Christ by praying the Anima Christi. Because the Exercises were printed with the prayer near the front, many readers assumed Ignatius wrote it, and the mistake stuck. Jesuit retreat houses still teach it as one of the first prayers a retreatant memorizes.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Meaning, Line by Line</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Soul of Christ, sanctify me:</strong> the human soul of Jesus, perfectly united to God, is asked to make the one praying holy.</li>
                <li><strong>Body of Christ, save me:</strong> spoken by someone who has just received, or is about to receive, that Body in Communion (John 6:54).</li>
                <li><strong>Blood of Christ, inebriate me:</strong> the boldest line. It asks to be overwhelmed by Christ&apos;s love the way wine overwhelms the senses. The Church Fathers spoke of a sober intoxication given by the Spirit, and the Song of Songs invites the beloved to drink deeply of love (Song of Songs 5:1).</li>
                <li><strong>Water from the side of Christ, wash me:</strong> recalls the soldier&apos;s lance (John 19:34). The Catechism teaches that the blood and water flowing from the pierced side are types of Baptism and the Eucharist (CCC 1225).</li>
                <li><strong>Passion of Christ, strengthen me:</strong> the sufferings of Jesus are not only to be pitied but to be drawn on as a source of courage.</li>
                <li><strong>Within your wounds hide me:</strong> medieval writers, St. Bernard of Clairvaux among them, read the clefts of the rock where the dove shelters (Song of Songs 2:14) as the wounds of Christ, a safe hiding place for the soul.</li>
                <li><strong>From the wicked foe, defend me:</strong> a recognition that the devil prowls like a roaring lion (1 Peter 5:8), and that the safest defense is closeness to Jesus.</li>
                <li><strong>At the hour of my death, call me:</strong> like the last line of the Hail Mary, it looks ahead to the final moment and asks Christ himself to call us by name (John 10:3).</li>
              </ul>

              <QuizCTA
                title="Deepen your sacramental life"
                description="Take the Catholic life assessment for a personalized guide to prayer, Confession, and Holy Communion."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Catholics Pray the Anima Christi</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Before receiving Holy Communion (after the Agnus Dei at Mass).</li>
                <li>After the Sacrament of Reconciliation.</li>
                <li>During Eucharistic adoration or a holy hour.</li>
                <li>At the bedside of the dying, asking Christ to call the soul home.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray It After Communion</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="anima-christi-prayer">
                The Anima Christi was written for the minutes right after receiving the Eucharist, when Christ is sacramentally present within the person who has received him. Return to your pew, kneel or sit, and pray it slowly, pausing after each line rather than reciting it in one breath. The first five lines each name a different aspect of Christ — soul, body, blood, water, passion — so a simple method is to linger on whichever one strikes you that day. If the line about the wounds stays with you, stay there; there is no need to finish quickly. The prayer can also be broken up across the week, taking one line as the focus of each day&apos;s visit to the Blessed Sacrament.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="anima-christi-prayer">
                Because translations differ, you will meet versions that say sanctify me or make me holy, hide me within your wounds or within thy wounds, and call me at the hour of my death and bid me come to thee. St. John Henry Newman made his own English rendering, and the prayer is also sung in a well-known hymn, Soul of My Saviour, found in many Catholic hymnals. All of these are faithful to the Latin; choose the one you can pray from memory.
              </LinkedText>
            </div>

            <BlogFAQ faqs={[
              { question: "What does Anima Christi mean?", answer: "Anima Christi means Soul of Christ. The prayer asks the Risen Christ to sanctify, save, and protect the one who prays through the power of his Passion and Resurrection." },
              { question: "Did St. Ignatius of Loyola write the Anima Christi?", answer: "The prayer was long attributed to St. Ignatius, but historians now trace it to the 14th century. Ignatius popularized it in the Spiritual Exercises and Catholic devotional life." },
              { question: "Is the Anima Christi in the Roman Missal?", answer: "It is not one of the fixed Mass prayers, but it is widely used in private devotion and is printed in most Catholic prayer books and missalettes." },
              { question: "Can I pray the Anima Christi if I cannot receive Communion?", answer: "Yes. It is an excellent prayer before spiritual communion or whenever you desire union with Christ in his Body and Blood." },
              { question: "What does inebriate me mean in the Anima Christi?", answer: "It translates the Latin inebria me, asking the Blood of Christ to fill the soul so completely that it is overwhelmed with his love, a spiritual intoxication, not a literal one." },
              { question: "Where does St. Ignatius use the Anima Christi?", answer: "In the Spiritual Exercises, the triple colloquy of the First Week has the retreatant speak with Mary, then with Christ, then with the Father; the conversation with Christ closes with the Anima Christi." },
              { question: "Is there a sung version of the Anima Christi?", answer: "Yes. The hymn Soul of My Saviour is a sung English paraphrase found in many Catholic hymnals, and the Latin text has been set by numerous composers." },
            ]} />

            <RelatedArticles currentSlug="anima-christi-prayer" />

            <ArticleBottomCTA title="Grow closer to Christ in the sacraments" description="Receive a personalized Catholic spiritual growth plan." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
