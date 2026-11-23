import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, BookOpen } from "lucide-react";
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

export default function ActOfFaithHopeCharity() {
  return (
    <>
      <Helmet>
        <title>Act of Faith, Hope and Charity: Full Catholic Prayers and Meaning | Guide Catholic</title>
        <meta name="description" content="The Act of Faith, Act of Hope, and Act of Charity with full Catholic prayer texts, what each act means, and when to pray them for Confirmation and RCIA." />
        <meta name="keywords" content="act of faith catholic, act of hope prayer, act of charity prayer, catholic acts of faith hope charity, confirmation prayers" />
        <link rel="canonical" href="https://guidecatholic.com/blog/act-of-faith-hope-charity/" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <ArticleSchema
        title="Act of Faith, Hope and Charity: Full Catholic Prayers and Meaning"
        description="The Act of Faith, Act of Hope, and Act of Charity with full Catholic prayer texts, what each act means, and when to pray them for Confirmation and RCIA."
        url="https://guidecatholic.com/blog/act-of-faith-hope-charity/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Acts of Faith, Hope & Charity", url: "https://guidecatholic.com/blog/act-of-faith-hope-charity/" },
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
              <span className="text-text">Acts of Faith, Hope & Charity</span>
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
                Act of Faith, Hope and Charity: Full Catholic Prayers and Meaning
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                These three short prayers name the theological virtues. Catholics learn them for Confirmation, RCIA, and as a daily reset for the soul.
              </p>
            </header>

            <div className="aspect-video bg-indigo-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-indigo-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Acts of Faith, Hope, and Charity are traditional Catholic prayers — assent to revealed truth, trust in God&apos;s promises, and love of God above all and neighbor as self. They are often prayed after the Rosary or during morning devotion.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Act of Faith (Full Text)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed">
                  O my God, I firmly believe that you are one God in three Divine Persons, Father, Son, and Holy Spirit. I believe that your divine Son became Man and died for our sins, and that he will come to judge the living and the dead. I believe these and all the truths which the Holy Catholic Church teaches, because you have revealed them, who can neither deceive nor be deceived. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Act of Hope (Full Text)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed">
                  O my God, relying on your almighty power and infinite mercy and promises, I hope to obtain pardon of my sins, the help of your grace, and Life Everlasting, through the merits of Jesus Christ, my Lord and Redeemer. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Act of Charity (Full Text)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed">
                  O my God, I love you above all things, with my whole heart and soul and strength, because you are all-good and worthy of all love. I love my neighbor as myself for the love of you. I forgive all who have injured me, and ask pardon of all whom I have injured. Amen.
                </p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="act-of-faith-hope-charity">
                Faith believes God's revelation. Hope trusts God's mercy for the future. Charity loves God above all and loves neighbor for God's sake. Together they orient the whole Christian life toward God.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Theological Virtues Behind the Prayers</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="act-of-faith-hope-charity">
                St. Paul closes his great hymn to love with the words, So faith, hope, love abide, these three; but the greatest of these is love (1 Corinthians 13:13). The Church calls these the theological virtues because they come from God, are directed to God, and have God for their object (CCC 1812). They are not habits we build by willpower like patience or punctuality; God pours them into the soul at Baptism (CCC 1813). The three Acts are short formulas for exercising those gifts on purpose, the way an athlete exercises a muscle that is already there.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Reading the Act of Faith Closely</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="act-of-faith-hope-charity">
                The Act of Faith summarizes the Creed in three movements: the Trinity, the Incarnation and Redemption, and the Last Judgment. Then it widens to all the truths the Church teaches. Its final clause carries the whole weight of the prayer. We believe not because we have verified each doctrine ourselves, but because God has revealed it, and God can neither deceive nor be deceived. That phrase comes from the First Vatican Council, and the Catechism repeats it when it explains what moves a person to believe (CCC 156). Faith, in other words, is trust in a Person before it is agreement with propositions.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Reading the Act of Hope Closely</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="act-of-faith-hope-charity">
                The Act of Hope names three things we hope for — pardon, grace, and eternal life — and three reasons we dare to hope: God&apos;s almighty power, his infinite mercy, and his promises. Hebrews 10:23 puts the whole Act in one sentence: Let us hold fast the confession of our hope without wavering, for he who promised is faithful. The Catechism identifies two opposite sins against hope: despair, which gives up on God&apos;s mercy, and presumption, which expects salvation without conversion (CCC 2091-2092). The Act guards against both by resting everything on the merits of Jesus Christ rather than on our own record.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Reading the Act of Charity Closely</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="act-of-faith-hope-charity">
                The Act of Charity echoes the great commandment of Deuteronomy 6:5, which Jesus called the first and greatest (Matthew 22:37-38): heart, soul, and strength. It gives the right motive for loving God, because he is all-good and worthy of all love, not merely because he rewards us. It then grounds love of neighbor in love of God. The prayer ends with forgiveness in both directions, forgiving those who have hurt us and asking pardon of those we have hurt, recalling Jesus&apos; warning that our own forgiveness is bound up with how we forgive (Matthew 6:14-15). Many people find this last sentence the hardest to say honestly, which is exactly why it is worth saying daily.
              </LinkedText>

              <QuizCTA
                title="Grow in faith, hope, and love"
                description="Take the Catholic life assessment for a personalized guide to prayer and virtue."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When to Pray These Acts</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Evening examination of conscience or before sleep.</li>
                <li>Preparation for Confession or Holy Communion.</li>
                <li>RCIA and Confirmation classes.</li>
                <li>When doubt, discouragement, or resentment weighs on the heart.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Where These Formulas Came From</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="act-of-faith-hope-charity">
                Catholic moral theologians long taught that believers should make explicit acts of faith, hope, and charity at certain points in life, such as on reaching the use of reason, when tempted against a virtue, and when in danger of death. Short written formulas spread through catechisms and prayer books from the eighteenth century onward, and Pope Benedict XIV encouraged them with indulgences. In the United States, generations of Catholics memorized them from the Baltimore Catechism, which is why many older Catholics still pray them with Thou and Thee. The current Enchiridion of Indulgences attaches a partial indulgence to making these acts with devotion, and it does not insist on one fixed wording: any legitimate formula will do.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Matching Each Act to a Struggle</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Doubt or confusion about a teaching:</strong> pray the Act of Faith slowly, then look up the doctrine in the Catechism rather than in a comment section.</li>
                <li><strong>Discouragement after repeated sin:</strong> pray the Act of Hope, and then go to Confession, where the hope it expresses becomes concrete.</li>
                <li><strong>A grudge you cannot shake:</strong> pray the Act of Charity and name the person silently at the words I forgive all who have injured me.</li>
                <li><strong>Sitting with the dying:</strong> say all three aloud for or with a loved one; they are among the most fitting prayers for the last hours of life.</li>
              </ul>
            </div>

            <BlogFAQ faqs={[
              { question: "What is the Act of Faith?", answer: "It is a short Catholic prayer professing faith in the Holy Trinity, Christ's saving work, and all that the Catholic Church teaches because God has revealed it." },
              { question: "What is the Act of Hope?", answer: "It is a prayer expressing trust in God's power and mercy to forgive sins, give grace, and bring us to eternal life through Jesus Christ." },
              { question: "What is the Act of Charity?", answer: "It is a prayer of love for God above all things and for neighbor as oneself, with a spirit of forgiveness toward others." },
              { question: "Are the words always exactly the same?", answer: "Approved Catholic prayer books may use slightly different wording. The meaning remains: faith in God's revelation, hope in his mercy, and charity toward God and neighbor." },
              { question: "Why are faith, hope, and charity called theological virtues?", answer: "Because they have God as their origin, motive, and object. The Catechism (CCC 1812-1813) teaches that God infuses them into the soul at Baptism, and they are the foundation of all Christian moral life." },
              { question: "Do the Acts of Faith, Hope, and Charity carry an indulgence?", answer: "Yes. A partial indulgence is attached to devoutly making these three acts, and the Church accepts any legitimate wording, including the older Thou and Thee versions." },
              { question: "What does who can neither deceive nor be deceived mean?", answer: "It expresses the reason for faith taught by the First Vatican Council and quoted in CCC 156: we believe revealed truths because of the authority of God, who cannot err and cannot lie." },
            ]} />

            <RelatedArticles currentSlug="act-of-faith-hope-charity" />

            <ArticleBottomCTA title="Deepen your Catholic life" description="Receive a personalized spiritual growth plan." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
