import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function CorporalWorksOfMercyCatholic() {
  return (
    <>
      <Helmet>
        <title>Corporal Works of Mercy: Catholic List & How to Live Them (USA) | Guide Catholic</title>
        <meta name="description" content="The seven corporal works of mercy explained — feed the hungry, visit the sick, bury the dead, and more. Practical ways Catholics in the United States live mercy today." />
        <meta name="keywords" content="corporal works of mercy, 7 corporal works of mercy catholic, works of mercy list, feed the hungry catholic, visit the sick" />
        <link rel="canonical" href="https://guidecatholic.com/blog/corporal-works-of-mercy-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Corporal Works of Mercy: Catholic List & How to Live Them (USA)" description="The seven corporal works of mercy explained — feed the hungry, visit the sick, bury the dead, and more. Practical ways Catholics in the United States live mercy today." url="https://guidecatholic.com/blog/corporal-works-of-mercy-catholic/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Corporal Works of Mercy", url: "https://guidecatholic.com/blog/corporal-works-of-mercy-catholic/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Corporal Works of Mercy</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Spiritual Life</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />11 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Corporal Works of Mercy: Catholic List & How to Live Them (USA)</h1>
              <p className="text-xl text-text-muted leading-relaxed">Jesus identifies himself with the hungry, the stranger, the sick, and the imprisoned (Matthew 25). The Church names seven corporal works of mercy so believers can meet Christ in concrete human need.</p>
            </header>
            <div className="aspect-video bg-orange-100 rounded-2xl flex items-center justify-center mb-10"><HandHeart className="w-24 h-24 text-orange-600" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Seven Corporal Works of Mercy</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-8">
                <li>Feed the hungry</li>
                <li>Give drink to the thirsty</li>
                <li>Clothe the naked</li>
                <li>Shelter the homeless</li>
                <li>Visit the sick</li>
                <li>Visit the imprisoned</li>
                <li>Bury the dead</li>
              </ol>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="corporal-works-of-mercy-catholic">Lent, Thanksgiving food drives, St. Vincent de Paul pantries, prison ministry, and parish funeral teams are everyday American expressions of these works. Mercy is not optional decoration on Catholic life — it is how faith becomes flesh.</LinkedText>
              <QuizCTA title="Put mercy into action" description="Take the Catholic life assessment for practical steps on charity, parish life, and spiritual growth." />
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Ideas for Parishes & Families in the U.S.</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Volunteer at a Catholic Charities or local food pantry.</li>
                <li>Join a parish ministry to homebound or nursing-home residents.</li>
                <li>Support refugee resettlement or shelter networks in your diocese.</li>
                <li>Attend funerals and assist grieving families with meals and prayer.</li>
              </ul>
            </div>
            <BlogFAQ faqs={[
              { question: "What are the corporal works of mercy?", answer: "They are seven charitable actions toward the bodily needs of others, drawn from Matthew 25 and centuries of Catholic tradition." },
              { question: "How are they different from spiritual works of mercy?", answer: "Corporal works address physical needs (food, clothing, shelter, etc.). Spiritual works address the soul (counsel, teach, bear wrongs patiently, etc.)." },
              { question: "Are corporal works of mercy required?", answer: "They flow from love of neighbor and are strongly encouraged; caring for the poor is a constitutive part of the Gospel." },
              { question: "Can I fulfill them without joining a ministry?", answer: "Yes. Family generosity, helping a neighbor, donating goods, and visiting a sick relative are genuine works of mercy." },
            ]} />
            <RelatedArticles currentSlug="corporal-works-of-mercy-catholic" />
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Live the Gospel actively</h3>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
