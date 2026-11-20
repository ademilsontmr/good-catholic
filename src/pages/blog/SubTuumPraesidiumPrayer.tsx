import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Shield } from "lucide-react";
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

export default function SubTuumPraesidiumPrayer() {
  return (
    <>
      <Helmet>
        <title>Sub Tuum Praesidium: Oldest Marian Prayer (Full Text & Latin) | Guide Catholic</title>
        <meta name="description" content="Sub Tuum Praesidium — the oldest known Marian prayer — with full Catholic text in English and Latin, history from the 3rd century, and when to pray it today." />
        <meta name="keywords" content="sub tuum praesidium prayer, oldest marian prayer, under your protection we fly, sub tuum praesidium latin, catholic marian prayers" />
        <link rel="canonical" href="https://guidecatholic.com/blog/sub-tuum-praesidium-prayer/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Sub Tuum Praesidium: Oldest Marian Prayer (Full Text & Latin)"
        description="Sub Tuum Praesidium — the oldest known Marian prayer — with full Catholic text in English and Latin, history from the 3rd century, and when to pray it today."
        url="https://guidecatholic.com/blog/sub-tuum-praesidium-prayer/"
        datePublished="2026-05-30"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Sub Tuum Praesidium", url: "https://guidecatholic.com/blog/sub-tuum-praesidium-prayer/" },
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
              <span className="text-text">Sub Tuum Praesidium</span>
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
                Sub Tuum Praesidium: Oldest Marian Prayer (Full Text & Latin)
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Under your protection we fly, O holy Mother of God — Sub Tuum Praesidium is the earliest Marian prayer preserved in Greek, dating to around the year 250. Catholics still pray it for refuge in danger and trust in Mary's intercession.
              </p>
            </header>

            <div className="aspect-video bg-indigo-100 rounded-2xl flex items-center justify-center mb-10">
              <Shield className="w-24 h-24 text-indigo-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Sub Tuum Praesidium is among the oldest Marian prayers — &quot;We fly to thy patronage, O holy Mother of God&quot; — preserved on a Greek papyrus usually dated to the 3rd or 4th century. Catholics pray it for protection in danger, and it is used in both Eastern and Western liturgies.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Sub Tuum Praesidium (English)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text italic leading-relaxed">
                <p>We fly to thy protection, O holy Mother of God; despise not our petitions in our necessities, but deliver us always from all dangers, O glorious and blessed Virgin. Amen.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Sub Tuum Praesidium (Latin)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text italic leading-relaxed text-sm">
                <p>Sub tuum praesidium confugimus, Sancta Dei Genitrix. Nostras deprecationes ne despicias in necessitatibus nostris, sed a periculis cunctis libera nos semper, Virgo gloriosa et benedicta. Amen.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sub-tuum-praesidium-prayer">
                The prayer does not worship Mary; it asks the Mother of God to shelter the Church as she sheltered the infant Christ. To flee to her protection is to flee to Christ, whom she always leads us toward.
              </LinkedText>

              <QuizCTA
                title="Grow in Marian devotion with confidence"
                description="Take the Catholic life assessment for practical guidance on prayer and Catholic faith."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Papyrus That Preserves It</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sub-tuum-praesidium-prayer">
                The oldest surviving copy of this prayer is a small, damaged scrap of papyrus from Egypt, now held by the John Rylands Library in Manchester, England, and catalogued as Papyrus Rylands 470. It was acquired in 1917 and published by the papyrologist C. H. Roberts in 1938. Roberts first assigned it to the fourth century; other scholars have argued for the third century, and some for a later date. Most place it somewhere in the third or fourth century, which still makes it the oldest known prayer addressed to Mary.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sub-tuum-praesidium-prayer">
                What makes the fragment remarkable is a single word: Theotokos, God-bearer or Mother of God. The Council of Ephesus solemnly defended that title in 431 against those who wanted to call Mary only the mother of Christ. If the papyrus is as early as most scholars think, ordinary Egyptian Christians were already calling on Mary as Theotokos in their prayers before the council met, showing that the council confirmed an existing faith rather than inventing a new one.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Greek and Latin: What Changed in Translation</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sub-tuum-praesidium-prayer">
                The Greek prayer begins by saying that we flee for refuge under Mary's eusplanchnia, a word meaning compassion or tender mercy, rooted in the image of a mother's heart. The Latin version settled on praesidium, protection or garrison, which gives the familiar English We fly to thy patronage or protection. The Greek also ends differently, calling Mary the only pure and only blessed one, while the Latin addresses her as glorious and blessed Virgin. Both versions keep the same three movements: we run to her, we ask her not to ignore our requests, and we ask to be delivered from danger.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Phrase by Phrase</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>We fly to thy protection:</strong> the language of refugees seeking a fortress. It recalls the psalmist taking refuge in the shadow of God&apos;s wings (Psalm 57:1), now through the intercession of the one who sheltered the Son of God.</li>
                <li><strong>O holy Mother of God:</strong> the title defended at Ephesus, the basis of every other Marian honor (CCC 495).</li>
                <li><strong>Despise not our petitions in our necessities:</strong> a frank admission that we come because we need help, like the wine running out at Cana, where Mary noticed the need before anyone asked (John 2:3).</li>
                <li><strong>Deliver us always from all dangers:</strong> bodily and spiritual danger alike. The prayer was born in an era of persecution and plague.</li>
                <li><strong>O glorious and blessed Virgin:</strong> the closing praise recalls Elizabeth&apos;s greeting, Blessed are you among women (Luke 1:42).</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Short Routine With This Prayer</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li>Name the danger or need plainly, in one sentence, before you begin.</li>
                <li>Pray the Sub tuum praesidium once in English, slowly, then once in Latin if you know it.</li>
                <li>Add a Hail Mary, the scriptural prayer that grew from the same early instinct to greet the Mother of the Lord.</li>
                <li>Close with an act of trust addressed to Jesus, since every Marian prayer ends by leading to her Son.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Where It Is Prayed Today</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sub-tuum-praesidium-prayer">
                The prayer is shared by many ancient Christian traditions. Coptic, Byzantine, Ambrosian, and Roman liturgical traditions all use it in some form, which is unusual for a Marian prayer and a sign of how early it spread. In the Roman Rite it is one of the Marian antiphons that may conclude Night Prayer in the Liturgy of the Hours. In late September 2018, Pope Francis asked Catholics around the world to pray the Rosary daily throughout October and to end it with the Sub tuum praesidium and the Prayer to St. Michael, asking protection for the Church in a time of trial.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sub-tuum-praesidium-prayer">
                Because it is short, the prayer suits sudden moments of need: before surgery, during a storm, when a child is out late, or when temptation strikes without warning. Many Catholics add it after the Hail Holy Queen at the end of the Rosary, or pray it each night at Compline. It is easy to memorize in Latin as well as in English, and learning the Latin connects your prayer with the same words Catholics have used for well over a thousand years.
              </LinkedText>

            </div>

            <BlogFAQ faqs={[
              { question: "What does Sub Tuum Praesidium mean?", answer: "It means Under your protection — the opening words of the prayer in Latin: Sub tuum praesidium confugimus (We fly to thy protection)." },
              { question: "Is Sub Tuum Praesidium the oldest Marian prayer?", answer: "It is the oldest known prayer addressed to Mary that survives in writing. The Greek papyrus that preserves it is usually dated to the third or fourth century, though scholars still debate the exact date." },
              { question: "When should I pray Sub Tuum Praesidium?", answer: "Whenever you need Mary's intercession — in danger, anxiety, before travel, during persecution, or as a daily act of trust in her maternal care." },
              { question: "Is Sub Tuum Praesidium different from the Memorare?", answer: "Yes. The Memorare is a later prayer emphasizing Mary's never-failing help. Sub Tuum Praesidium is shorter and focuses on taking refuge under her protection." },
              { question: "Where is the Sub Tuum Praesidium papyrus kept?", answer: "It is Papyrus Rylands 470, held by the John Rylands Library at the University of Manchester in England. It was acquired in Egypt in 1917 and first published in 1938." },
              { question: "Why does the Greek version say mercy instead of protection?", answer: "The Greek word eusplanchnia means compassion or tender mercy. The Latin tradition rendered the idea with praesidium, protection, which shaped the English We fly to thy protection." },
              { question: "Did Pope Francis recommend this prayer?", answer: "Yes. In September 2018 he asked the faithful to pray the Rosary every day in October and to conclude it with the Sub tuum praesidium and the Prayer to St. Michael the Archangel for the protection of the Church." },
            ]} />

            <RelatedArticles currentSlug="sub-tuum-praesidium-prayer" />

            <ArticleBottomCTA title="Deepen your Catholic prayer life" description="Receive a personalized spiritual growth plan." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
