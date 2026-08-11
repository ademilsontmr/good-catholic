import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HeartPulse, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function BibleVersesAboutHealing() {
  return (
    <>
      <Helmet>
        <title>{"Bible Verses About Healing: Scriptures Catholics Turn To in Faith | Guide Catholic"}</title>
        <meta name="description" content={"Bible Verses About Healing for Catholics — James 5:14 and RSV-CE scriptures for prayer, comfort, and daily discipleship."} />
        <meta name="keywords" content={"bible verses about healing, catholic bible verses about healing, scripture healing"} />
        <link rel="canonical" href="https://guidecatholic.com/blog/bible-verses-about-healing/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={"Bible Verses About Healing: Scriptures Catholics Turn To in Faith"}
        description={"Bible Verses About Healing for Catholics — James 5:14 and RSV-CE scriptures for prayer, comfort, and daily discipleship."}
        url="https://guidecatholic.com/blog/bible-verses-about-healing/"
        datePublished="2026-08-11"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Bible Verses About Healing", url: "https://guidecatholic.com/blog/bible-verses-about-healing/" },
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
              <span className="text-text">Bible Verses About Healing</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Daily Discipleship</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />August 11, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                Bible Verses About Healing: Scriptures Catholics Turn To in Faith
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                These bible verses about healing help Catholics pray with the Church, find comfort in trials, and keep Scripture close in daily life.
              </p>
            </header>

            <div className="aspect-video bg-teal-100 rounded-2xl flex items-center justify-center mb-10">
              <HeartPulse className="w-24 h-24 text-teal-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-5 bg-background-muted/60 border border-border rounded-lg">
                <p className="text-lg text-text leading-relaxed font-medium">Key bible verses about healing include the passages below — pray them slowly, memorize one this week, and share them with someone who needs healing.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-healing">
                Healing in Catholic life is sacramental and practical: Anointing of the Sick, prayer of the faithful, and competent medical care. These verses walk with patients, caregivers, and anyone begging for restoration.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Healing in the New Testament</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">James 5:14-15</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Is any among you sick? Let him call for the elders of the church, and let them pray over him, anointing him with oil in the name of the Lord.&quot;</p>
                    <p className="text-text-muted text-xs mt-2 leading-relaxed">Save this reference on your phone before you continue scrolling the page.</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Mark 5:34</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Daughter, your faith has made you well; go in peace, and be healed of your disease.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Matthew 11:28</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Come to me, all who labor and are heavy laden, and I will give you rest.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">1 Peter 2:24</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;By his wounds you have been healed.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">3 John 1:2</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Beloved, I pray that all may go well with you and that you may be in health.&quot;</p>
                  </div>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-healing">
                James 5 is the biblical root of Anointing of the Sick. Ask your parish for the sacrament when illness is serious; do not wait until the last hour out of fear.
              </LinkedText>
              <QuizCTA
                title={"Ready to move from reading to living the Word?"}
                description={"Clarify which daily practices will help these verses take root."}
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Old Testament Prayers for Healing</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Psalm 103:2-3</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Bless the Lord, O my soul... who forgives all your iniquity, who heals all your diseases.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Isaiah 53:5</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;With his stripes we are healed.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Jeremiah 17:14</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Heal me, O Lord, and I shall be healed; save me, and I shall be saved.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Exodus 15:26</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;I am the Lord, your healer.&quot;</p>
                  </div>
              </div>


              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Keep Going after Healing</h2>
              <LinkedText className="text-text leading-relaxed mb-4" currentSlug="bible-verses-about-healing">
                These related guides help you live healing beyond a single article — through prayer, virtue, and Catholic practice.
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><Link to="/blog/how-to-pray-the-rosary-step-by-step/" className="text-accent underline underline-offset-2">How to Pray the Rosary</Link></li>
                <li><Link to="/blog/examination-of-conscience-guide/" className="text-accent underline underline-offset-2">Examination of Conscience</Link></li>
                <li><Link to="/quiz" className="text-accent underline underline-offset-2">Catholic Life Quiz</Link></li>
              </ul>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Carry These Verses on Healing</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-healing">
                Sit with the sick person if you can. Make the Sign of the Cross, read Psalm 103:2-3, and ask permission to pray for healing according to God's will.
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Concrete Next Steps on Healing</h2>
              <div className="grid gap-3 mb-6">
                <div className="border border-border rounded-lg p-4 text-text text-sm"><span className="font-semibold text-accent">Step 1.</span> Read your healing verse aloud while walking around the block.</div>
                <div className="border border-border rounded-lg p-4 text-text text-sm"><span className="font-semibold text-accent">Step 2.</span> Journal three sentences: what the verse asks, what resists, what you will do.</div>
                <div className="border border-border rounded-lg p-4 text-text text-sm"><span className="font-semibold text-accent">Step 3.</span> Invite a spouse, roommate, or friend to pray one verse on healing with you.</div>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  &quot;Is any among you sick? Let him call for the elders of the church, and let them pray over him, anointing him with oil in the name of the Lord.&quot;
                </p>
                <p className="text-text-muted text-center mt-2">— James 5:14-15</p>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="bible-verses-about-healing"
              faqs={[
                { question: "What are the best bible verses about healing?", answer: "Key bible verses about healing include the passages below — pray them slowly, memorize one this week, and share them with someone who needs healing." },
                { question: "Which Bible should Catholics use for these verses?", answer: "NABRE is used at Mass in the United States; RSV-CE is excellent for study and memorization. Both are approved." },
                { question: "How do I memorize verses about healing?", answer: "Start with the shortest line. Repeat morning and night for a week. Write it by hand once a day." },
                { question: "Can I share bible verses about healing with non-Catholics?", answer: "Yes. Invite them also to Mass or a parish Bible study so the Word is heard in community." },
                { question: "How do these verses relate to the sacraments?", answer: "Scripture prepares the heart for Confession and Eucharist, and the sacraments deepen our power to live the Word." }
              ]}
            />
            <RelatedArticles currentSlug="bible-verses-about-healing" />
            <ArticleBottomCTA
              title={"Build a prayer life that holds Healing"}
              description={"Clarify which daily practices will help these verses take root."}
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
