import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function SaintsPeterAndPaulFeastGuide() {
  return (
    <>
      <Helmet>
        <title>Saints Peter and Paul: Feast Day Guide for Catholics (June 29) | Guide Catholic</title>
        <meta name="description" content="Saints Peter and Paul feast day — who they were, why the Church celebrates them together, and Mass obligations in the USA." />
        <meta name="keywords" content="saints peter and paul feast, june 29 catholic feast, st peter st paul day" />
        <link rel="canonical" href="https://guidecatholic.com/blog/saints-peter-and-paul-feast-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Saints Peter and Paul: Feast Day Guide for Catholics (June 29)" description="Saints Peter and Paul feast day — who they were, why the Church celebrates them together, and Mass obligations in the USA." url="https://guidecatholic.com/blog/saints-peter-and-paul-feast-guide/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Saints Peter and Paul", url: "https://guidecatholic.com/blog/saints-peter-and-paul-feast-guide/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Saints Peter and Paul</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Liturgy &amp; Worship</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />17 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Saints Peter and Paul: Feast Day Guide for Catholics (June 29)</h1>
              <p className="text-xl text-text-muted leading-relaxed">On June 29 the Church honors the two pillars of the early Church — Peter the Rock and Paul the Apostle to the Gentiles — whose martyrdom in Rome shaped Catholic identity for two millennia.</p>
            </header>
            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10"><Crown className="w-24 h-24 text-amber-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The feast of Saints Peter and Paul on June 29 honors the two pillars of the Church — pope and apostle to the Gentiles, both martyred in Rome. It is a solemnity but not a separate weekday Holy Day of Obligation in the United States.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saints-peter-and-paul-feast-guide">The Solemnity of Saints Peter and Paul is one of the oldest feasts in Rome. Both apostles died as martyrs under Nero around the mid-first century. The Church celebrates them together because Peter and Paul, though different in background and mission, together laid the foundation of the Church in unity with Christ.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Saint Peter: The Rock and First Pope</h2>
              <p className="text-text leading-relaxed mb-6">Simon, a fisherman from Galilee, received the name Peter — &quot;Rock&quot; — when Jesus declared, &quot;You are Peter, and on this rock I will build my church&quot; (Matthew 16:18). Peter denied Christ during the Passion but was restored after the Resurrection (&quot;Feed my sheep,&quot; John 21). He preached at Pentecost and led the Jerusalem community.</p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saints-peter-and-paul-feast-guide">Tradition holds Peter came to Rome, where he was crucified upside down around A.D. 64–67. St. Peter&apos;s Basilica in Vatican City marks his burial site. Catholics believe Peter&apos;s office continues in the Pope — the Bishop of Rome and successor of Peter.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Saint Paul: Apostle to the Gentiles</h2>
              <p className="text-text leading-relaxed mb-6">Paul (Saul of Tarsus) was a Pharisee who persecuted Christians until his conversion on the road to Damascus. He became the great missionary to the Gentile world, planting churches across the Roman Empire and writing epistles that form much of the New Testament.</p>
              <p className="text-text leading-relaxed mb-6">Paul was beheaded in Rome as a Roman citizen. His tomb lies under the Basilica of St. Paul Outside the Walls. His theology of grace, the Body of Christ, and faith working through love remains central to Catholic preaching and RCIA programs in the United States.</p>

              <QuizCTA title="Grow in Catholic faith" description="Take the Catholic life assessment for guidance on Scripture, the sacraments, and parish life." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why One Feast for Two Apostles</h2>
              <p className="text-text leading-relaxed mb-6">Peter and Paul were not always allies — Paul rebuked Peter at Antioch (Galatians 2). Yet both served the one Gospel. Celebrating them together symbolizes the unity of the Church: Jew and Gentile, pastor and missionary, Rome and the world. The feast closes the extended Pentecost season in the liturgical calendar.</p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Mass and Liturgy on June 29</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Solemnity with Gloria, Creed, and proper readings on Peter and Paul.</li>
                <li>Red vestments for martyrdom.</li>
                <li>First reading often from Acts (Peter) or Galatians (Paul).</li>
                <li>Gospel on Peter&apos;s confession or Paul&apos;s charge to Timothy.</li>
                <li>In Rome, the Pope may confer the pallium on new archbishops.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Holy Day of Obligation in the USA?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saints-peter-and-paul-feast-guide">In the United States, June 29 is not a Holy Day of Obligation on the general calendar. Catholics should still attend Mass if possible — it is a solemnity with full liturgical rank. When June 29 falls on a Sunday, the solemnity replaces the Ordinary Time Sunday. In 2026, June 29 is a Monday, so the feast is observed on Monday with Sunday Mass obligations separate.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Key Scripture for June 29</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text text-sm leading-relaxed space-y-3">
                <p><strong>Peter:</strong> &quot;You are Peter, and on this rock I will build my church&quot; (Matthew 16:18). &quot;Feed my sheep&quot; (John 21:17).</p>
                <p><strong>Paul:</strong> &quot;I have fought the good fight, I have finished the race, I have kept the faith&quot; (2 Timothy 4:7).</p>
                <p><strong>Unity:</strong> &quot;Built upon the foundation of the apostles and prophets, with Christ Jesus himself as the cornerstone&quot; (Ephesians 2:20).</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How American Catholics Can Honor the Day</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Attend Mass on June 29 or the nearest vigil.</li>
                <li>Read Acts 12 (Peter&apos;s imprisonment) or 2 Timothy 4 (Paul&apos;s final testimony).</li>
                <li>Pray for the Pope and bishops — successors of the apostles.</li>
                <li>Support missionaries through your diocese or groups like the Propagation of the Faith.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Peter and Paul in U.S. Parish Life</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saints-peter-and-paul-feast-guide">Thousands of American parishes bear the names St. Peter or St. Paul — from St. Peter&apos;s in Manhattan to St. Paul Cathedral in Minnesota. Immigrant communities often chose these patrons as symbols of fidelity to Rome and missionary zeal. On June 29, many parishes hold special collections for the missions or invite testimonies from recent converts — echoing Paul&apos;s outreach to the Gentiles.</LinkedText>
              <p className="text-text leading-relaxed mb-6">In 2026, June 29 falls on a Monday. Catholics who attended Sunday Mass on June 28 still benefit from honoring the solemnity at a weekday Mass if work schedules allow. Schools named after these saints often celebrate with red vestments, apostle-themed crafts, and prayers for the Holy Father.</p>
            </div>
            <BlogFAQ faqs={[
              { question: "When is the feast of Saints Peter and Paul?", answer: "June 29 every year. In 2026 it falls on a Monday. It is a solemnity in the Roman calendar." },
              { question: "Is June 29 a Holy Day of Obligation in the United States?", answer: "No. Saints Peter and Paul is not on the U.S. list of Holy Days of Obligation, though Catholics are encouraged to celebrate the solemnity at Mass." },
              { question: "Why are Peter and Paul celebrated on the same day?", answer: "Both were martyred in Rome and together represent the foundation of the Church — Peter as head of the apostles and Paul as apostle to the Gentiles. One feast honors their united witness." },
              { question: "What is the pallium?", answer: "A wool band the Pope confers on metropolitan archbishops as a sign of communion with the See of Peter. The conferral often occurs on the feast of Saints Peter and Paul in Rome." },
              { question: "Why are Peter and Paul celebrated together?", answer: "Both were martyred in Rome under Nero and together represent the unity of Jewish and Gentile Christianity in the one Church." },
              { question: "Where are Peter and Paul buried?", answer: "Tradition holds both are buried at St. Peter&apos;s Basilica and the Basilica of St. Paul Outside the Walls in Rome." }
            ]} />
            <RelatedArticles currentSlug="saints-peter-and-paul-feast-guide" />
            <ArticleBottomCTA title="Deepen your Catholic faith" description="Get a personalized guide for prayer and spiritual growth." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
