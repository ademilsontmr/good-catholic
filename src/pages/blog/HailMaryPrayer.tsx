import { Helmet } from "react-helmet-async";
import { DailyPrayersHubLink } from "@/components/blog/DailyPrayerExtras";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Heart } from "lucide-react";
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

export default function HailMaryPrayer() {
  return (
    <>
      <Helmet>
        <title>Hail Mary Prayer: Full Text, Meaning & How to Pray | Guide Catholic</title>
        <meta name="description" content="Hail Mary prayer with full Catholic text, biblical roots in Luke, and how to pray it in the Rosary — clear meaning for every line." />
        <meta name="keywords" content="hail mary prayer, hail mary full text, hail mary catholic prayer, how to pray hail mary, hail mary meaning, ave maria prayer" />
        <link rel="canonical" href="https://guidecatholic.com/blog/hail-mary-prayer/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Hail Mary Prayer: Full Text, Meaning & How to Pray"
        description="Hail Mary prayer with full Catholic text, biblical roots in Luke, and how to pray it in the Rosary — clear meaning for every line."
        url="https://guidecatholic.com/blog/hail-mary-prayer/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Hail Mary Prayer", url: "https://guidecatholic.com/blog/hail-mary-prayer/" },
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
              <span className="text-text">Hail Mary Prayer</span>
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
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 11, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Hail Mary Prayer: Full Text, Meaning & How to Pray
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Hail Mary is one of the most beloved Catholic prayers. It is biblical, simple, and deeply centered on Jesus through the intercession of Mary.
              </p>
            </header>

            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Hail Mary is the central Catholic Marian prayer, built from Gabriel&apos;s greeting and Elizabeth&apos;s words in Luke 1, plus a petition for Mary&apos;s intercession at death. Catholics pray it in the Rosary, at the end of Compline, and in countless devotions — it is not worship of Mary but honor and request for her prayers.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Hail Mary Prayer Full Text</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.
                </p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="hail-mary-prayer">
                Catholics pray the Hail Mary in the Rosary, in the Angelus, in private devotion, and in moments of need. It is not worship of Mary. It is a request for the Mother of God to pray for us and lead us closer to her Son.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Where Does the Hail Mary Come From?</h2>
              <p className="text-text leading-relaxed mb-6">
                The first half of the Hail Mary comes directly from Scripture. "Hail, full of grace, the Lord is with you" echoes the angel Gabriel's greeting to Mary at the Annunciation. "Blessed are you among women, and blessed is the fruit of your womb" comes from Elizabeth's greeting at the Visitation.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The second half is the Church's prayerful response: "Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death." It asks Mary to intercede for us in the present moment and at life's final moment.
              </p>

              <QuizCTA
                title="Want to deepen your prayer life?"
                description="Take the Catholic faith assessment and receive practical next steps for prayer and devotion."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray the Hail Mary Well</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li>Pray slowly enough to notice the words.</li>
                <li>Pause at the name of Jesus, the center of the prayer.</li>
                <li>Ask Mary to help you trust God as she did.</li>
                <li>Use it in moments of temptation, fear, grief, or gratitude.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Catholics Pray the Hail Mary</h2>
              <p className="text-text leading-relaxed mb-6">
                Catholics believe Mary is the Mother of God because Jesus is truly God and truly man. Since Christians ask one another for prayer, Catholics also ask the saints in heaven to pray for us. Mary's intercession is powerful because she is closest to Christ and always points to him.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Hail Mary in the Rosary</h2>
              <p className="text-text leading-relaxed mb-6">
                In the Rosary, the Hail Mary is repeated while meditating on the mysteries of Christ's life, death, and resurrection. The repetition is not empty. It creates a rhythm of prayer that helps the heart remain with Jesus.
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="hail-mary-prayer">
                A full five-decade Rosary contains fifty-three Hail Marys: ten in each decade and three in the opening prayers. The Angelus, traditionally prayed at 6 AM, noon, and 6 PM, places one Hail Mary after each of its three verses about the Incarnation.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Hail Mary in Latin: Ave Maria</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  Ave Maria, gratia plena, Dominus tecum. Benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Phrase-by-Phrase Meaning</h2>
              <ul className="list-disc list-inside text-text space-y-4 mb-6">
                <li><strong>"Hail Mary":</strong> the Greek word in Luke 1:28, "chaire," is a greeting that also means "rejoice." Mary's name was added to the angel's words so the prayer addresses her directly.</li>
                <li><strong>"Full of grace":</strong> Luke uses "kecharitomene," a perfect passive participle meaning one who has been, and remains, filled with God's favor. Catholic theology sees here a sign of the grace that preserved Mary from sin.</li>
                <li><strong>"The Lord is with thee":</strong> the same assurance God gave to figures such as Gideon (Judges 6:12) when calling them to a mission.</li>
                <li><strong>"Blessed art thou among women":</strong> Elizabeth, filled with the Holy Spirit, says this at the Visitation (Luke 1:42).</li>
                <li><strong>"Blessed is the fruit of thy womb, Jesus":</strong> Elizabeth's words, with the holy name added. The Catechism calls Jesus the center of the prayer (CCC 2676).</li>
                <li><strong>"Holy Mary, Mother of God":</strong> the title Theotokos was solemnly affirmed at the Council of Ephesus in 431 to protect the truth that Mary's Son is one divine Person.</li>
                <li><strong>"Pray for us sinners, now and at the hour of our death":</strong> we ask for help in the present moment and at the moment that matters most. The Catechism notes that we entrust that hour to her as she stood by her Son's death on the Cross (CCC 2677).</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How the Prayer Took Its Present Form</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="hail-mary-prayer">
                The two Gospel greetings were joined in Christian prayer very early; they appear together in Eastern liturgical texts, and a similar Byzantine form is still sung today. In the Latin West, the scriptural half became a common devotion by the twelfth century, and diocesan synods around 1200, including one in Paris, told clergy to teach it to the faithful along with the Our Father and the Creed. At that stage the prayer ended with the words "the fruit of thy womb," and the name of Jesus was added during the Middle Ages.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="hail-mary-prayer">
                The petition "Holy Mary, Mother of God, pray for us sinners" appears in various forms during the fifteenth century, especially in Italy. Its final wording was fixed for the whole Latin Church when Pope St. Pius V published the reformed Roman Breviary in 1568, where the complete Hail Mary was printed in the form Catholics pray today.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Ave Maria in Music</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="hail-mary-prayer">
                Few prayers have been set to music as often. Gregorian chant has an Ave Maria offertory for Advent, and composers from the Renaissance onward wrote many polyphonic settings. In the Bach-Gounod Ave Maria, Charles Gounod set the Latin text to a new melody sung over the first prelude of Bach's Well-Tempered Clavier. Franz Schubert's famous melody was originally written for a German song based on Sir Walter Scott's poem "The Lady of the Lake" and only later adapted to the Latin words of the prayer.
              </LinkedText>
            </div>

            <DailyPrayersHubLink />
            <BlogFAQ faqs={[
              { question: "Is the Hail Mary biblical?", answer: "Yes. The first half draws from Luke 1:28 and Luke 1:42. The second half is the Church's petition asking Mary to pray for us." },
              { question: "Do Catholics worship Mary when they pray the Hail Mary?", answer: "No. Worship belongs to God alone. The Hail Mary asks Mary to intercede for us, just as Christians ask one another for prayer." },
              { question: "When should I pray the Hail Mary?", answer: "You can pray it anytime, especially in the Rosary, Angelus, moments of temptation, before sleep, or when asking for Mary's intercession." },
              { question: "Why does the prayer say Mother of God?", answer: "Because Jesus is one divine Person who is truly God and truly man. Mary is the mother of Jesus, so the Church rightly calls her Mother of God." },
              { question: "What is the Hail Mary in Latin?", answer: "Ave Maria, gratia plena, Dominus tecum. Benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen." },
              { question: "When was the second half of the Hail Mary added?", answer: "Forms of the petition appear in the 15th century. The complete wording was fixed for the Latin Church in the Roman Breviary of Pope St. Pius V in 1568." },
              { question: "What does 'full of grace' mean?", answer: "It translates the Greek 'kecharitomene' in Luke 1:28, describing Mary as one who has been and remains filled with God's favor. The Church sees this as pointing to her freedom from sin." },
            ]} />

            <RelatedArticles currentSlug="hail-mary-prayer" />

            <ArticleBottomCTA title="Grow in Catholic Prayer" description="Receive a personalized plan for deepening your prayer life." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
