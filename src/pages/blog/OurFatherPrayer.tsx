import { Helmet } from "react-helmet-async";
import { DailyPrayersHubLink } from "@/components/blog/DailyPrayerExtras";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Calendar, Clock } from "lucide-react";
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

export default function OurFatherPrayer() {
  return (
    <>
      <Helmet>
        <title>Our Father Prayer: Full Text, Meaning & Latin (Pater Noster) | Guide Catholic</title>
        <meta name="description" content="The full Catholic text of the Our Father, where it is in the Bible (Matthew 6, Luke 11), the seven petitions, why Catholics say “trespasses,” and the Latin Pater Noster." />
        <meta name="keywords" content="our father prayer, lord's prayer, our father full text, catholic our father, how to pray the our father, our father meaning" />
        <link rel="canonical" href="https://guidecatholic.com/blog/our-father-prayer/" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <ArticleSchema
        title="Our Father Prayer: Full Text, Meaning & Latin (Pater Noster)"
        description="The full Catholic text of the Our Father, where it is in the Bible (Matthew 6, Luke 11), the seven petitions, why Catholics say “trespasses,” and the Latin Pater Noster."
        url="https://guidecatholic.com/blog/our-father-prayer/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Our Father Prayer", url: "https://guidecatholic.com/blog/our-father-prayer/" },
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
              <span className="text-text">Our Father Prayer</span>
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
                Our Father Prayer: Full Text, Meaning & Latin (Pater Noster)
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Our Father, also called the Lord's Prayer, is the prayer Jesus himself taught. It is the model of every Christian prayer and the heart of Catholic worship.
              </p>
            </header>

            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-blue-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Our Father (Lord&apos;s Prayer) is the prayer Christ taught his disciples in Matthew 6 — the model for all Christian prayer. Catholics pray it at every Mass, in the Rosary, and daily; each petition (hallowed be thy name, thy kingdom come, forgive us, lead us not into temptation) shapes Catholic spirituality.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Our Father Prayer Full Text</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.
                </p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-father-prayer">
                Catholics pray the Our Father at every Mass, in the Rosary, in the Liturgy of the Hours, and in daily personal prayer. It is called "the Lord's Prayer" because the Lord Jesus gave it to his disciples.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Where Is the Our Father in the Bible?</h2>
              <p className="text-text leading-relaxed mb-6">
                The Our Father appears in Matthew 6:9-13 and Luke 11:2-4. In Matthew, Jesus teaches it during the Sermon on the Mount. In Luke, the disciples ask him, "Lord, teach us to pray."
              </p>
              <p className="text-text leading-relaxed mb-6">
                The prayer is both simple and inexhaustible. It teaches us to approach God as Father, seek his glory, desire his kingdom, trust him for daily needs, forgive others, and ask for protection from sin and evil.
              </p>

              <QuizCTA
                title="Want to pray with more confidence?"
                description="Take the Catholic faith assessment and receive personalized next steps for your prayer life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Seven Petitions of the Our Father</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>Hallowed be thy name:</strong> may God's name be honored as holy.</li>
                <li><strong>Thy kingdom come:</strong> may God's reign grow in us and in the world.</li>
                <li><strong>Thy will be done:</strong> may we obey God with trust.</li>
                <li><strong>Give us this day our daily bread:</strong> provide what we need, above all the Eucharist.</li>
                <li><strong>Forgive us our trespasses, as we forgive those who trespass against us:</strong> pardon our sins and make us merciful toward others.</li>
                <li><strong>Lead us not into temptation:</strong> keep us from giving way when we are tested.</li>
                <li><strong>Deliver us from evil:</strong> protect us from sin and the evil one.</li>
              </ol>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-father-prayer">
                The Catechism notes the structure of these seven requests: the first three are centered on God (thy name, thy kingdom, thy will), and the last four present our own needs to him (CCC 2803–2806). Luke's shorter version has five petitions, while Matthew's fuller form, the one used in the liturgy, has all seven.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Catechism Teaches About the Our Father</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-father-prayer">
                The Catechism of the Catholic Church closes with an extended commentary on the Lord's Prayer (CCC 2759–2865). It cites Tertullian's description of the prayer as a summary of the whole Gospel (CCC 2761) and St. Thomas Aquinas's judgment that it is the most perfect of prayers, because it asks for everything we can rightly desire and in the right order (CCC 2763). It also explains that we dare to call God "Father" only because the Son has made us adopted children, which is why the Mass introduces the prayer with words of holy boldness.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Key Words in the Original Greek</h2>
              <ul className="list-disc list-inside text-text space-y-4 mb-6">
                <li><strong>"Father":</strong> Jesus prayed to God as "Abba" (Mark 14:36), and Paul teaches that the Spirit lets believers cry out the same word (Romans 8:15; Galatians 4:6).</li>
                <li><strong>"Daily bread":</strong> the Greek "epiousios" appears almost nowhere else in ancient writing. It can mean "daily," "for the coming day," or "super-substantial." St. Jerome's Latin Vulgate rendered it "supersubstantialem" in Matthew and "cotidianum" in Luke, and the Catechism reads it as both bread for the body and the Bread of Life in the Eucharist (CCC 2837).</li>
                <li><strong>"Trespasses":</strong> Matthew's Greek literally says "debts" (opheilemata), while Luke says "sins" in the first half of the line. Traditional English uses "trespasses," but the meaning is the same.</li>
                <li><strong>"Evil":</strong> the Greek can mean evil in general or "the evil one." The Catechism explains that the petition refers to Satan, the one who opposes God's plan (CCC 2851).</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">"Lead Us Not Into Temptation"</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-father-prayer">
                This line does not mean God pushes anyone toward sin; the Letter of James says plainly that God tempts no one (James 1:13). The Catechism explains that the Greek implies both "do not allow us to enter into temptation" and "do not let us yield to temptation" (CCC 2846). Because the phrase is easy to misunderstand, some bishops' conferences have revised their translations: the French version adopted in 2017 asks God not to let us enter into temptation, and the Italian Missal approved under Pope Francis asks God not to abandon us to temptation. The English text used in the United States has not changed.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Our Father at Mass and in the Hours</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-father-prayer">
                The Didache, a Christian manual from around the end of the first century, already told believers to pray the Lord's Prayer three times a day. The Church keeps a similar rhythm: it is prayed at Morning Prayer, at Evening Prayer, and at every Mass. At Mass the priest continues with a prayer called the embolism, "Deliver us, Lord, we pray, from every evil," and the people respond with the acclamation, "For the kingdom, the power and the glory are yours now and for ever." That doxology appears in the Didache and in some later manuscripts of Matthew but not in the oldest ones, which is why Catholics do not add it when praying the Our Father in the Rosary.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-father-prayer">
                Adults preparing for Baptism receive the Lord's Prayer in a special rite during Lent called the Presentation of the Lord's Prayer, and they pray it for the first time with the assembly after being baptized at the Easter Vigil. The prayer is treated as a treasure handed on by the Church, not merely a text to memorize.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Our Father in Latin: Pater Noster</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed">
                  Pater noster, qui es in caelis, sanctificetur nomen tuum. Adveniat regnum tuum. Fiat voluntas tua, sicut in caelo et in terra. Panem nostrum quotidianum da nobis hodie, et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in tentationem, sed libera nos a malo. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Catholics Say "Trespasses"</h2>
              <p className="text-text leading-relaxed mb-6">
                Different Christian traditions use "trespasses," "debts," or "sins." Catholics commonly use "trespasses" in liturgical and devotional English. The meaning is the same: we ask God to forgive our offenses and help us forgive those who have wronged us.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray the Our Father Slowly</h2>
              <p className="text-text leading-relaxed mb-6">
                Try praying one line at a time. Pause after "Our Father" and remember that God is not distant. Pause after "thy will be done" and surrender a concrete concern. Pause after "forgive us" and name where you need mercy.
              </p>
            </div>

            <DailyPrayersHubLink />
            <BlogFAQ faqs={[
              { question: "Who wrote the Our Father?", answer: "Jesus himself taught the Our Father to his disciples, which is why it is also called the Lord's Prayer." },
              { question: "Is the Our Father Catholic?", answer: "The Our Father belongs to all Christians, but it has a central place in Catholic Mass, the Rosary, the Liturgy of the Hours, and sacramental prayer." },
              { question: "Why is the Our Father prayed at Mass?", answer: "It prepares the faithful for Communion by asking for daily bread, forgiveness, unity, and deliverance from evil." },
              { question: "Can I pray the Our Father every day?", answer: "Yes. Catholics are encouraged to pray it daily, slowly and with attention, because it is the model prayer given by Christ." },
              { question: "Why don't Catholics add 'For thine is the kingdom' in the Rosary?", answer: "That doxology is not in the oldest manuscripts of Matthew's Gospel. At Mass, Catholics do say a form of it ('For the kingdom, the power and the glory are yours now and for ever') after the priest's prayer that follows the Our Father." },
              { question: "Does God lead us into temptation?", answer: "No. James 1:13 says God tempts no one. The Catechism explains the petition as asking God not to let us enter into or give way to temptation (CCC 2846)." },
              { question: "What is the Our Father in Latin?", answer: "It begins 'Pater noster, qui es in caelis, sanctificetur nomen tuum' and ends 'Et ne nos inducas in tentationem, sed libera nos a malo. Amen.'" },
            ]} />

            <RelatedArticles currentSlug="our-father-prayer" />

            <ArticleBottomCTA title="Build a Life of Prayer" description="Get a personalized plan for growing in Catholic prayer and discipleship." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
