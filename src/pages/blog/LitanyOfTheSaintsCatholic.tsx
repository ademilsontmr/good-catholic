import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ListOrdered } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function LitanyOfTheSaintsCatholic() {
  return (
    <>
      <Helmet>
        <title>Litany of the Saints: How to Pray It, When It Is Used & Meaning | Guide Catholic</title>
        <meta name="description" content="Catholic guide to the Litany of the Saints — how the responses work, when the Church prays it (Easter Vigil, ordinations, confirmations), and why we invoke the saints together." />
        <meta name="keywords" content="litany of the saints, how to pray litany of saints, catholic litany of saints, easter vigil litany, ordination litany" />
        <link rel="canonical" href="https://guidecatholic.com/blog/litany-of-the-saints-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Litany of the Saints: How to Pray It, When It Is Used & Meaning"
        description="Catholic guide to the Litany of the Saints — how the responses work, when the Church prays it (Easter Vigil, ordinations, confirmations), and why we invoke the saints together."
        url="https://guidecatholic.com/blog/litany-of-the-saints-catholic/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Litany of the Saints", url: "https://guidecatholic.com/blog/litany-of-the-saints-catholic/" },
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
              <span className="text-text">Litany of the Saints</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />10 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Litany of the Saints: How to Pray It, When It Is Used & Meaning
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Litany of the Saints is one of the Church's great public prayers — a procession of names calling heaven to help earth.
              </p>
            </header>

            <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
              <ListOrdered className="w-24 h-24 text-violet-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How the Litany Works</h2>
              <p className="text-text leading-relaxed mb-6">
                A leader names Christ, the Blessed Virgin Mary, angels, and many saints. After each invocation, everyone answers: <em>Pray for us</em> (or <em>Have mercy on us</em> for the Kyrie-style invocations at the beginning). The rhythm is simple: petition, response — over and over — building a cloud of intercessors.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Opening Pattern (Example)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text text-sm leading-relaxed space-y-2">
                <p>Lord, have mercy. <em>R. Lord, have mercy.</em></p>
                <p>Christ, have mercy. <em>R. Christ, have mercy.</em></p>
                <p>Lord, have mercy. <em>R. Lord, have mercy.</em></p>
                <p className="pt-2">Holy Mary, Mother of God. <em>R. Pray for us.</em></p>
                <p>Holy Mother of God. <em>R. Pray for us.</em></p>
                <p className="text-text-muted text-xs pt-2">The full litany continues with apostles, martyrs, pastors, virgins, and other categories of saints, concluding with liturgical collects.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="litany-of-the-saints-catholic">
                Catholics do not worship saints. We ask them to pray with us, as we might ask a friend on earth — except the saints in heaven are perfectly alive in Christ and closer to God than we are.
              </LinkedText>

              <QuizCTA
                title="Want stronger Catholic foundations?"
                description="Take the Catholic life assessment for a personalized guide to doctrine, prayer, and the saints."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When the Church Prays the Litany of the Saints</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Easter Vigil — before the blessing of the baptismal water.</li>
                <li>Ordinations of bishops, priests, and deacons.</li>
                <li>Many confirmations and dedications of churches.</li>
                <li>Rogation processions and some pilgrimages.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Praying It at Home</h2>
              <p className="text-text leading-relaxed mb-6">
                Families can pray a shorter form or use a printed litany from a trusted Catholic prayer book. The goal is the same: to unite our needs with the whole communion of saints and to ask God's mercy through their intercession.
              </p>
            </div>

            <BlogFAQ faqs={[
              { question: "What is the Litany of the Saints?", answer: "It is a litany in which the Church invokes many saints by name, responding Pray for us after each title, asking for their heavenly intercession." },
              { question: "Why does the Easter Vigil include the Litany of the Saints?", answer: "It expresses the communion of saints and asks the whole company of heaven to support those about to be baptized or received into full communion." },
              { question: "Do I need a priest to lead the litany?", answer: "The full litany in the liturgy is led by ministers in official rites. At home, lay people may pray from an approved prayer book for private or family devotion." },
              { question: "Is the Litany of the Saints the same as the Litany of Loreto?", answer: "No. The Litany of Loreto (Litany of the Blessed Virgin Mary) honors titles of Mary. The Litany of the Saints invokes many saints across the history of the Church." },
            ]} />

            <RelatedArticles currentSlug="litany-of-the-saints-catholic" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Walk with the saints</h3>
              <p className="text-text-muted mb-6">Receive a personalized Catholic growth plan.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
