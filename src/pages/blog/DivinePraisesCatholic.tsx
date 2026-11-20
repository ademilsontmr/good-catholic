import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Sparkles } from "lucide-react";
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

export default function DivinePraisesCatholic() {
  return (
    <>
      <Helmet>
        <title>Divine Praises: Full Catholic Text, Meaning & When to Pray Them | Guide Catholic</title>
        <meta name="description" content="The Divine Praises with full Catholic text in English, what each praise means, and when Catholics pray them, especially after Benediction." />
        <meta name="keywords" content="divine praises catholic, divine praises prayer text, blessed be god, benediction prayers, eucharistic adoration prayers" />
        <link rel="canonical" href="https://guidecatholic.com/blog/divine-praises-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Divine Praises: Full Catholic Text, Meaning & When to Pray Them"
        description="The Divine Praises with full Catholic text in English, what each praise means, and when Catholics pray them, especially after Benediction."
        url="https://guidecatholic.com/blog/divine-praises-catholic/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Divine Praises", url: "https://guidecatholic.com/blog/divine-praises-catholic/" },
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
              <span className="text-text">Divine Praises</span>
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
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 14, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Divine Praises: Full Catholic Text, Meaning & When to Pray Them
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Divine Praises are short acclamations of blessing — a burst of Eucharistic praise often sung after Benediction.
              </p>
            </header>

            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
              <Sparkles className="w-24 h-24 text-amber-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Divine Praises are a Catholic litany of adoration — Blessed be God, Blessed be His Holy Name, etc. — prayed after Benediction of the Blessed Sacrament and at Eucharistic adoration. Composed in 1797 as an act of reparation, they are prayed by the leader one line at a time, with the people repeating each line.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Divine Praises (Full Text)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 space-y-3 text-text leading-relaxed">
                <p className="font-medium">Blessed be God.</p>
                <p className="font-medium">Blessed be his Holy Name.</p>
                <p className="font-medium">Blessed be Jesus Christ, true God and true Man.</p>
                <p className="font-medium">Blessed be the name of Jesus.</p>
                <p className="font-medium">Blessed be his most Sacred Heart.</p>
                <p className="font-medium">Blessed be his most Precious Blood.</p>
                <p className="font-medium">Blessed be Jesus in the most Holy Sacrament of the Altar.</p>
                <p className="font-medium">Blessed be the Holy Spirit, the Paraclete.</p>
                <p className="font-medium">Blessed be the great Mother of God, Mary most Holy.</p>
                <p className="font-medium">Blessed be her holy and Immaculate Conception.</p>
                <p className="font-medium">Blessed be her glorious Assumption.</p>
                <p className="font-medium">Blessed be the name of Mary, Virgin and Mother.</p>
                <p className="font-medium">Blessed be St. Joseph, her most chaste Spouse.</p>
                <p className="font-medium">Blessed be God in his Angels and in his Saints.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="divine-praises-catholic">
                Each line blesses God for who he is and what he has done — especially in the Eucharist — and honors Mary and Joseph as part of God's saving plan. The prayer repairs sins of blasphemy and trains the heart to speak well of holy things.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Laudes Divinae (Latin Text)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text italic leading-relaxed text-sm space-y-2">
                <p>Benedictus Deus. Benedictum Nomen Sanctum eius. Benedictus Iesus Christus, verus Deus et verus homo. Benedictum Nomen Iesu. Benedictum Cor eius sacratissimum. Benedictus Sanguis eius pretiosissimus. Benedictus Iesus in sanctissimo altaris Sacramento.</p>
                <p>Benedictus Sanctus Spiritus, Paraclitus. Benedicta excelsa Mater Dei, Maria sanctissima. Benedicta sancta eius et immaculata Conceptio. Benedicta eius gloriosa Assumptio. Benedictum nomen Mariae, Virginis et Matris. Benedictus sanctus Ioseph, eius castissimus Sponsus. Benedictus Deus in Angelis suis, et in Sanctis suis.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Wrote the Divine Praises?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="divine-praises-catholic">
                The Divine Praises are generally credited to Fr. Luigi Felici, an Italian Jesuit, who composed them in 1797 so that Catholics could make public reparation for blasphemy and profane speech. The idea was simple: where God's name had been dragged through the mud, his people would answer with a chain of blessings spoken aloud. The prayer was soon enriched with an indulgence by Pope Pius VII, and from Italy it spread to the rest of the Catholic world through parish missions and Eucharistic devotions.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="divine-praises-catholic">
                The text you pray today is longer than Fr. Felici's original. Popes added lines as the Church solemnly defined or promoted particular truths. The praise of Mary's Immaculate Conception followed the 1854 definition of that dogma, and the Sacred Heart was added in the late nineteenth century. Benedict XV added St. Joseph in 1921, Pius XII added the Assumption after defining it in 1950, St. John XXIII added the Precious Blood, and St. Paul VI added the Holy Spirit, the Paraclete, in the 1960s. The prayer is a small record of how Catholic devotion has grown over two centuries.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Each Praise Means</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Blessed be God / his Holy Name:</strong> the opening echoes Psalm 113:2 and the hymn of Ephesians 1:3. To bless God is to give back to him in words what he has first given us in gifts.</li>
                <li><strong>Jesus Christ, true God and true Man:</strong> a compact profession of the Incarnation as defined at the Council of Chalcedon (451) — one Person, two natures.</li>
                <li><strong>The name of Jesus:</strong> recalls Philippians 2:9-10, where every knee bends at that name. It directly answers the misuse of the Lord's name in anger or jest.</li>
                <li><strong>Sacred Heart and Precious Blood:</strong> point to the pierced side of Christ (John 19:34) and to our redemption by blood &quot;like that of a lamb without blemish&quot; (1 Peter 1:19).</li>
                <li><strong>Jesus in the most Holy Sacrament of the Altar:</strong> the line that makes this a Eucharistic prayer, spoken while the Host is still present on the altar after Benediction.</li>
                <li><strong>The Holy Spirit, the Paraclete:</strong> the Advocate Jesus promised in John 14:16 and 14:26, completing the praise of the Trinity.</li>
                <li><strong>Mary, her Immaculate Conception, Assumption, and name:</strong> Mary is praised for what God did in her, fulfilling her own words that all generations would call her blessed (Luke 1:48).</li>
                <li><strong>St. Joseph and the Angels and Saints:</strong> the prayer closes by blessing God in his whole household — the guardian of the Holy Family and the entire court of heaven.</li>
              </ul>

              <QuizCTA
                title="Deepen Eucharistic devotion"
                description="Take the Catholic life assessment for a personalized path to prayer and the sacraments."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Catholics Pray the Divine Praises</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>After Benediction when the Blessed Sacrament is reposed.</li>
                <li>During Holy Hours or parish adoration.</li>
                <li>Privately after receiving Communion or visiting a tabernacle.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Divine Praises at Benediction</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="divine-praises-catholic">
                In most U.S. parishes, Benediction follows a familiar order: exposition of the Host in the monstrance, a period of adoration, the Tantum Ergo, the priest or deacon blessing the people with the Blessed Sacrament, and then the Divine Praises before the Host is returned to the tabernacle. The official rite for worship of the Eucharist outside Mass does not require the Divine Praises, so their place there is a deeply rooted custom rather than a rubric. A hymn such as Holy God, We Praise Thy Name often follows as the Sacrament is reposed.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="divine-praises-catholic">
                The call-and-response pattern matters. The celebrant says each line and the congregation repeats it word for word, so that the whole church speaks the blessing together. Kneeling is the usual posture, since the Lord remains present on the altar while the praises are said.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Praying the Divine Praises as Reparation</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="divine-praises-catholic">
                The Catechism teaches that blasphemy, speaking against God in hatred, reproach, or defiance, is directly opposed to the second commandment (CCC 2148). The Divine Praises were written as the remedy. A practical habit is to pray even one line silently — Blessed be the name of Jesus — whenever you hear the Lord's name used carelessly at work, on the news, or in your own mouth. Families can memorize the fourteen lines by learning two a week, and the whole prayer takes less than a minute to say slowly in front of a tabernacle.
              </LinkedText>
            </div>

            <BlogFAQ faqs={[
              { question: "What are the Divine Praises?", answer: "They are a series of acclamations beginning Blessed be… honoring the Trinity, the Eucharist, Mary, Joseph, and the angels and saints." },
              { question: "Where do the Divine Praises come from?", answer: "They developed in Italy in the late 18th century as a prayer of praise and reparation for blasphemy and spread widely through Eucharistic devotions such as Benediction." },
              { question: "Can you pray the Divine Praises outside Benediction?", answer: "Yes. They are appropriate in adoration, after Mass, or in private prayer whenever you want to offer praise and reparation." },
              { question: "Is there a Latin version?", answer: "Yes. Parish hymnals and Latin prayer books often include Laudes divinae; the English text above is widely used in English-speaking parishes." },
              { question: "Who wrote the Divine Praises?", answer: "They are credited to Fr. Luigi Felici, SJ, who composed them in 1797 in reparation for blasphemy. Several lines, such as those on St. Joseph, the Assumption, the Precious Blood, and the Holy Spirit, were added by popes in the 19th and 20th centuries." },
              { question: "Do the people repeat each line?", answer: "Yes. In parish use the priest, deacon, or leader says each praise and everyone repeats it. When praying alone, simply say each line slowly." },
              { question: "Are the Divine Praises required at Benediction?", answer: "No. The Church's rite for Eucharistic exposition and Benediction does not require them, but saying them after the blessing and before reposition is a long-standing custom in English-speaking parishes." },
            ]} />

            <RelatedArticles currentSlug="divine-praises-catholic" />

            <ArticleBottomCTA title="Grow closer to Christ" description="Get a personalized Catholic spiritual growth plan." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
