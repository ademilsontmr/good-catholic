import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function ActOfFaithHopeCharity() {
  return (
    <>
      <Helmet>
        <title>Act of Faith, Hope and Charity: Full Catholic Prayers and Meaning | Guide Catholic</title>
        <meta name="description" content="The Act of Faith, Act of Hope, and Act of Charity with full Catholic prayer texts in English, what each act means, and when to pray them for Confirmation, RCIA, and daily life." />
        <meta name="keywords" content="act of faith catholic, act of hope prayer, act of charity prayer, catholic acts of faith hope charity, confirmation prayers" />
        <link rel="canonical" href="https://guidecatholic.com/blog/act-of-faith-hope-charity/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Act of Faith, Hope and Charity: Full Catholic Prayers and Meaning"
        description="The Act of Faith, Act of Hope, and Act of Charity with full Catholic prayer texts in English, what each act means, and when to pray them for Confirmation, RCIA, and daily life."
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
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Acts of Faith, Hope & Charity</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers & Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 14, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</span>
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
            </div>

            <BlogFAQ faqs={[
              { question: "What is the Act of Faith?", answer: "It is a short Catholic prayer professing faith in the Holy Trinity, Christ's saving work, and all that the Catholic Church teaches because God has revealed it." },
              { question: "What is the Act of Hope?", answer: "It is a prayer expressing trust in God's power and mercy to forgive sins, give grace, and bring us to eternal life through Jesus Christ." },
              { question: "What is the Act of Charity?", answer: "It is a prayer of love for God above all things and for neighbor as oneself, with a spirit of forgiveness toward others." },
              { question: "Are the words always exactly the same?", answer: "Approved Catholic prayer books may use slightly different wording. The meaning remains: faith in God's revelation, hope in his mercy, and charity toward God and neighbor." },
            ]} />

            <RelatedArticles currentSlug="act-of-faith-hope-charity" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Deepen your Catholic life</h3>
              <p className="text-text-muted mb-6">Receive a personalized spiritual growth plan.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
