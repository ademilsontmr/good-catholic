import { Helmet } from "react-helmet-async";
import { DailyPrayersHubLink } from "@/components/blog/DailyPrayerExtras";
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

export default function GuardianAngelPrayer() {
  return (
    <>
      <Helmet>
        <title>Guardian Angel Prayer: Full Text, Meaning and Catholic Guide | Guide Catholic</title>
        <meta name="description" content="The Guardian Angel Prayer with full Catholic text, meaning, biblical background, and how to teach it to children or pray it daily for protection." />
        <meta name="keywords" content="guardian angel prayer, angel of god prayer, catholic guardian angel prayer, guardian angel prayer full text, prayer for protection" />
        <link rel="canonical" href="https://guidecatholic.com/blog/guardian-angel-prayer/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Guardian Angel Prayer: Full Text, Meaning and Catholic Guide"
        description="The Guardian Angel Prayer with full Catholic text, meaning, biblical background, and how to teach it to children or pray it daily for protection."
        url="https://guidecatholic.com/blog/guardian-angel-prayer/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Guardian Angel Prayer", url: "https://guidecatholic.com/blog/guardian-angel-prayer/" },
        ]}
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
              <span className="text-text">Guardian Angel Prayer</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers & Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 11, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Guardian Angel Prayer: Full Text, Meaning and Catholic Guide
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Guardian Angel Prayer is a simple Catholic prayer for protection, guidance, and trust in God's personal care.
              </p>
            </header>

            <div className="aspect-video bg-sky-100 rounded-2xl flex items-center justify-center mb-10">
              <Shield className="w-24 h-24 text-sky-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Guardian Angel prayer asks one&apos;s personal angel — assigned at birth per Catholic tradition — to light, guard, rule, and guide. Children learn it at bedtime; adults pray it for protection against evil and guidance in daily choices (cf. Matthew 18:10, Psalm 91).</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Guardian Angel Prayer Full Text</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  Angel of God, my guardian dear, to whom God's love commits me here, ever this day be at my side, to light and guard, to rule and guide. Amen.
                </p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="guardian-angel-prayer">
                Many Catholics first learn this prayer as children, but it is not only for children. It is a lifelong reminder that God protects, guides, and accompanies each person through the ministry of the angels.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Are Guardian Angels?</h2>
              <p className="text-text leading-relaxed mb-6">
                Catholic teaching holds that angels are real spiritual beings created by God. Guardian angels are entrusted with the care of human persons. They do not replace God, and Catholics do not worship them. They serve God by helping us toward holiness and protecting us according to God's providence.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Jesus speaks of angels who behold the face of the Father, and Scripture repeatedly shows angels guiding, protecting, warning, and strengthening God's people.
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="guardian-angel-prayer">
                The Catechism treats the existence of angels as a truth of faith (CCC 328) and, quoting St. Basil the Great, says that beside each believer stands an angel as protector and shepherd leading him to life (CCC 336). It adds that human life is surrounded by their watchful care and intercession from its beginning until death.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Prayer in Latin: Angele Dei</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  Angele Dei, qui custos es mei, me tibi commissum pietate superna, hodie illumina, custodi, rege, et guberna. Amen.
                </p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="guardian-angel-prayer">
                The English rhyme is a free poetic rendering of this Latin original, and minor variations of the Latin circulate in older prayer books. Its medieval origin is often traced to the Benedictine monk Reginald of Canterbury in the late eleventh or early twelfth century, though scholars treat that attribution with caution. The four Latin verbs at the end carry the heart of the request: illumina (enlighten), custodi (guard), rege (rule), and guberna (steer or govern, the word used for piloting a ship).
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Line-by-Line Meaning</h2>
              <ul className="list-disc list-inside text-text space-y-4 mb-6">
                <li><strong>"Angel of God, my guardian dear":</strong> the angel belongs to God first. We address a servant of the Lord, not an independent spirit or a lucky charm.</li>
                <li><strong>"To whom God's love commits me here":</strong> the guardianship is a gift of divine love. The Latin "pietate superna" means by heavenly kindness.</li>
                <li><strong>"Ever this day be at my side":</strong> the prayer asks for help today, which is why it fits so naturally into morning prayer.</li>
                <li><strong>"To light and guard":</strong> light for the mind to see what is right; protection from spiritual and bodily harm.</li>
                <li><strong>"To rule and guide":</strong> help for the will to follow God's path once we know it.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Where Guardian Angels Appear in Scripture</h2>
              <ul className="list-disc list-inside text-text space-y-4 mb-6">
                <li><strong>Matthew 18:10:</strong> Jesus warns against despising the little ones, because their angels in heaven always behold the face of his Father.</li>
                <li><strong>Psalm 91:11:</strong> God commands his angels to guard the faithful in all their ways.</li>
                <li><strong>Exodus 23:20:</strong> God sends an angel before Israel to guard the people on the way to the promised land.</li>
                <li><strong>Tobit 5–12:</strong> the archangel Raphael accompanies young Tobias on his journey, protects him, and brings healing to his family.</li>
                <li><strong>Acts 12:15:</strong> when Peter knocks at the door after his escape from prison, the disciples at first assume it is "his angel."</li>
                <li><strong>Hebrews 1:14:</strong> angels are called spirits sent out in service for the sake of those who are to receive salvation.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Saints and Doctors Taught</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="guardian-angel-prayer">
                St. Jerome, commenting on Matthew 18:10, marveled at the dignity of the human soul, since each person has an angel assigned from birth. St. Thomas Aquinas devoted a question of the Summa Theologiae (I, q. 113) to the guarding of humans by angels and held that every person has one throughout earthly life. On the Memorial of October 2, the Office of Readings uses a sermon by St. Bernard of Clairvaux on Psalm 91, which asks the faithful to respond to their angel with reverence for its presence, devotion for its love, and trust in its care.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="guardian-angel-prayer">
                Devotion to guardian angels spread widely in the late Middle Ages and early modern period. Pope Clement X extended the feast of the Holy Guardian Angels to the whole Latin Church in 1670 and fixed it on October 2, where it remains in the current calendar as an obligatory memorial.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Should You Give Your Guardian Angel a Name?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="guardian-angel-prayer">
                The Vatican's Directory on Popular Piety and the Liturgy (2001) discourages assigning personal names to angels, except Michael, Gabriel, and Raphael, whose names appear in Scripture. Addressing your angel simply as "my guardian angel" or "Angel of God," as this prayer does, keeps the devotion humble and avoids treating the angel as a figure we invent.
              </LinkedText>

              <QuizCTA
                title="Do you want to grow in trust?"
                description="Take the Catholic life assessment and receive practical steps for prayer, protection, and spiritual growth."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray the Guardian Angel Prayer</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li>Begin with the Sign of the Cross.</li>
                <li>Pray the words slowly and personally.</li>
                <li>Ask God for protection from sin, fear, and danger.</li>
                <li>End by choosing one concrete act of obedience to God's will.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Should You Pray It?</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>In the morning before beginning the day.</li>
                <li>Before travel or a difficult conversation.</li>
                <li>With children before school or bedtime.</li>
                <li>During fear, temptation, or spiritual discouragement.</li>
                <li>On October 2, the Memorial of the Holy Guardian Angels.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Teaching the Prayer to Children</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="guardian-angel-prayer">
                The Guardian Angel Prayer is one of the best first prayers for children because it is short, memorable, and comforting. Teach children that their guardian angel helps them follow Jesus, choose good, and trust God's care.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Short Prayer to Your Guardian Angel</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed">
                  Holy Guardian Angel, help me listen to God today. Protect me from sin, guide my choices, and lead me closer to Jesus. Amen.
                </p>
            </div>

              </div>

            <DailyPrayersHubLink />
            <BlogFAQ faqs={[
              { question: "Is the Guardian Angel Prayer Catholic?", answer: "Yes. It is a traditional Catholic prayer asking one's guardian angel for light, protection, rule, and guidance." },
              { question: "Do Catholics worship guardian angels?", answer: "No. Worship belongs to God alone. Catholics honor angels as God's servants and ask for their help according to God's will." },
              { question: "Does everyone have a guardian angel?", answer: "Catholic tradition teaches that each person is entrusted to the care of a guardian angel, a sign of God's personal providence." },
              { question: "When is the feast of the Guardian Angels?", answer: "The Memorial of the Holy Guardian Angels is celebrated on October 2." },
              { question: "What is the Guardian Angel Prayer in Latin?", answer: "A common form is: Angele Dei, qui custos es mei, me tibi commissum pietate superna, hodie illumina, custodi, rege, et guberna. Amen." },
              { question: "Where does the Bible mention guardian angels?", answer: "Key passages include Matthew 18:10, Psalm 91:11, Exodus 23:20, the Book of Tobit, Acts 12:15, and Hebrews 1:14." },
              { question: "Can I give my guardian angel a name?", answer: "The Directory on Popular Piety and the Liturgy (2001) discourages naming angels other than Michael, Gabriel, and Raphael, whose names come from Scripture." },
            ]} />

            <RelatedArticles currentSlug="guardian-angel-prayer" />

            <ArticleBottomCTA title="Build a Daily Prayer Habit" description="Get a personalized Catholic growth plan for prayer and spiritual discipline." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
