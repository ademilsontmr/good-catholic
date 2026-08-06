import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function BeatitudesCatholicExplained() {
  return (
    <>
      <Helmet>
        <title>What Are the Beatitudes? Catholic Meaning of All 8 (Matthew 5) | Guide Catholic</title>
        <meta name="description" content="The Beatitudes from Matthew 5 explained for Catholics — all eight blessings, what poor in spirit and peacemakers mean, and how to live the Beatitudes in American life today." />
        <meta name="keywords" content="beatitudes catholic, what are the beatitudes, beatitudes meaning, matthew 5 beatitudes, blessed are the poor in spirit" />
        <link rel="canonical" href="https://guidecatholic.com/blog/beatitudes-catholic-explained/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="What Are the Beatitudes? Catholic Meaning of All 8 (Matthew 5)" description="The Beatitudes from Matthew 5 explained for Catholics — all eight blessings, what poor in spirit and peacemakers mean, and how to live the Beatitudes in American life today." url="https://guidecatholic.com/blog/beatitudes-catholic-explained/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "The Beatitudes", url: "https://guidecatholic.com/blog/beatitudes-catholic-explained/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">The Beatitudes</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Catholic Doctrine</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />18 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">What Are the Beatitudes? Catholic Meaning of All 8 (Matthew 5)</h1>
              <p className="text-xl text-text-muted leading-relaxed">In the Sermon on the Mount, Jesus names eight ways of being that open the kingdom of heaven. Catholics hear the Beatitudes at Mass, in RCIA, and in every call to discipleship.</p>
            </header>
            <div className="aspect-video bg-emerald-100 rounded-2xl flex items-center justify-center mb-10"><Mountain className="w-24 h-24 text-emerald-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Beatitudes (Matthew 5:3-12) are Jesus&apos; blueprint for happiness — poor in spirit, meek, merciful, peacemakers, persecuted for righteousness. Catholics see them as attitudes of the Kingdom, not optional ethics; they describe Christ and call disciples to counter-cultural holiness.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Eight Beatitudes (Matthew 5:3–10)</h2>
              <ol className="list-decimal list-inside text-text space-y-4 mb-8">
                <li><strong>Blessed are the poor in spirit</strong>, for theirs is the kingdom of heaven.</li>
                <li><strong>Blessed are they who mourn</strong>, for they will be comforted.</li>
                <li><strong>Blessed are the meek</strong>, for they will inherit the land.</li>
                <li><strong>Blessed are they who hunger and thirst for righteousness</strong>, for they will be satisfied.</li>
                <li><strong>Blessed are the merciful</strong>, for they will be shown mercy.</li>
                <li><strong>Blessed are the clean of heart</strong>, for they will see God.</li>
                <li><strong>Blessed are the peacemakers</strong>, for they will be called children of God.</li>
                <li><strong>Blessed are they who are persecuted for the sake of righteousness</strong>, for theirs is the kingdom of heaven.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Each Beatitude Explained (Catholic Reading)</h2>
              <p className="text-text leading-relaxed mb-4"><strong>1. Poor in spirit</strong> — Spiritual poverty: knowing you need God. Not mere material poverty, though solidarity with the poor flows from this beatitude. The Catechism links it to humility and detachment (CCC 2546).</p>
              <p className="text-text leading-relaxed mb-4"><strong>2. They who mourn</strong> — Grief over sin and the suffering of the world, not self-pity. God comforts those who weep with hope in the resurrection.</p>
              <p className="text-text leading-relaxed mb-4"><strong>3. The meek</strong> — Strength under control; gentleness rooted in trust in God&apos;s providence. Moses was called the meekest man on earth (Numbers 12:3).</p>
              <p className="text-text leading-relaxed mb-4"><strong>4. Hunger and thirst for righteousness</strong> — Passion for justice and holiness — personal and social. Saints who fought slavery and abortion embodied this hunger.</p>
              <p className="text-text leading-relaxed mb-4"><strong>5. The merciful</strong> — Forgiving as you have been forgiven. Mercy is not weakness; it is the heart of the Gospel (Matthew 18:21–35).</p>
              <p className="text-text leading-relaxed mb-4"><strong>6. Clean of heart</strong> — Purity of intention and body; single-hearted love of God. &quot;Blessed are the pure in heart, for they shall see God&quot; (Matthew 5:8).</p>
              <p className="text-text leading-relaxed mb-4"><strong>7. Peacemakers</strong> — Building reconciliation, not avoiding conflict at any cost. Christ is our peace (Ephesians 2:14); peacemakers share his work.</p>
              <p className="text-text leading-relaxed mb-6"><strong>8. Persecuted for righteousness</strong> — Suffering for faith and moral truth. The American martyrs and modern Christians facing job loss or ridicule for the Gospel live this beatitude.</p>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="beatitudes-catholic-explained">The Beatitudes are not a checklist of feelings but a portrait of Christ — and of the Christian life shaped by grace. The Catechism teaches that they &quot;express the vocation of the faithful associated with the glory of his Passion and Resurrection&quot; (CCC 1717).</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Beatitudes vs. Woes (Luke 6)</h2>
              <p className="text-text leading-relaxed mb-6">Luke 6:20–26 presents four blessings and four &quot;woes&quot; (to the rich, the full, the laughing, the praised). Matthew&apos;s version on the mount emphasizes the new law of the kingdom. Catholic exegesis reads both as complementary: Luke sharpens social contrast; Matthew teaches the beatitudes as the heart of discipleship. Neither contradicts Church teaching on wealth — the issue is where the heart rests.</p>

              <QuizCTA title="How is your discipleship going?" description="Take the Catholic life assessment for a personalized guide to Scripture, virtue, and daily prayer." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Living the Beatitudes in North America Today</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Poor in spirit</strong> — Begin the day with &quot;Without me you can do nothing&quot; (John 15:5) instead of scrolling for validation.</li>
                <li><strong>Meek</strong> — Respond to online outrage with facts and charity rather than matching contempt.</li>
                <li><strong>Merciful</strong> — Go to Confession regularly; forgive debts and grudges in family life.</li>
                <li><strong>Clean of heart</strong> — Use filters and accountability for media; pursue purity as freedom, not repression.</li>
                <li><strong>Peacemakers</strong> — Mediate in parish conflicts; support Catholic refugee and prison ministries.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Catholics Hear the Beatitudes</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="beatitudes-catholic-explained">All Saints Day, funerals of the faithful, RCIA sessions, and Confirmation preparation regularly feature Matthew 5. Many U.S. dioceses use the Beatitudes as a framework for social teaching — linking hunger for righteousness to care for immigrants, the unborn, and the poor. Memorizing all eight is a traditional Catholic school exercise still worth doing as an adult.</LinkedText>
              {/* data-expanded-depth */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Catholic Church Teaches</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="beatitudes-catholic-explained">The Beatitudes from Matthew 5 explained for Catholics — all eight blessings, what poor in spirit and peacemakers mean, and how to live the Beatitudes in American life today. The Catechism of the Catholic Church gathers this teaching for the whole People of God. Catholics look to Scripture, Tradition, and the Magisterium together — not private opinion or trending ideologies — when forming conscience.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Common Misunderstandings</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="beatitudes-catholic-explained">Secular media and social debate often distort Catholic doctrine. Non-Catholics may assume the Church teaches what it does not; Catholics may not have heard clear catechesis since childhood. This article states the Church&apos;s position plainly so you can discuss it charitably with family, coworkers, or friends who ask honest questions.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why This Doctrine Matters for Daily Life</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="beatitudes-catholic-explained">Faith is not an abstract exam to pass. What the Church teaches about What Are the Beatitudes? Catholic Meanin shapes how Catholics worship, raise children, vote, work, and confess sin. Truth frees — even when it challenges comfort.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Living the Faith With Courage</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="beatitudes-catholic-explained">If this teaching calls you to change, begin with prayer and Confession, not guilt alone. Speak with a priest or trusted catechist if you are wrestling with a hard moral question. The Church exists to lead souls to Christ, not to win arguments.</LinkedText>

            </div>
            <BlogFAQ faqs={[
              { question: "Where are the Beatitudes in the Bible?", answer: "They are in Matthew 5:3–10, at the beginning of the Sermon on the Mount. Luke 6:20–26 presents a similar list with some differences (the 'Woes')." },
              { question: "Are the Beatitudes commandments?", answer: "They are blessings that describe attitudes and actions flowing from grace. They reveal the new law of the kingdom and the perfection of the Ten Commandments." },
              { question: "When do Catholics hear the Beatitudes?", answer: "They appear in the Lectionary, especially on All Saints Day and related feasts, and are studied in RCIA, Confirmation prep, and Bible study." },
              { question: "What does poor in spirit mean?", answer: "It is not poverty alone but spiritual humility — recognizing that we need God for everything and cannot save ourselves." },
              { question: "How many Beatitudes are there?", answer: "Matthew lists eight. Some traditions also note a ninth beatitude in Matthew 5:11–12 about persecution for Jesus' name." },
              { question: "Did Jesus live the Beatitudes?", answer: "Yes. The Church teaches that Jesus is the perfect embodiment of every beatitude — meek, merciful, pure of heart, and persecuted for righteousness." },,
              { question: "Is this article official Church teaching?", answer: "Guide Catholic explains Catholic faith in accessible language. For binding doctrinal or sacramental questions, consult the Catechism, your bishop, or parish priest." },
              { question: "How can I go deeper after reading this?", answer: "Attend Sunday Mass, pray daily, read Scripture, and explore related articles linked below. Consider spiritual direction or parish formation programs for ongoing growth." }
            ]} />
            <RelatedArticles currentSlug="beatitudes-catholic-explained" />
            <ArticleBottomCTA title="Grow in Catholic faith" description="Receive a personalized spiritual growth plan." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
