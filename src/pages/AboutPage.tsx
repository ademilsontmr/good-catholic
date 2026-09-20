import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Cross, Heart, Mail, Shield } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function AboutPage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Guide Catholic",
    url: "https://guidecatholic.com",
    email: "contact@guidecatholic.com",
    description:
      "Guide Catholic publishes free Catholic faith guides, prayers, and a life assessment to help Catholics grow in prayer, the sacraments, and daily discipleship.",
    logo: "https://guidecatholic.com/favicon-192.png",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://guidecatholic.com/" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://guidecatholic.com/about/" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>About Guide Catholic | Our Mission & Editorial Standards</title>
        <meta
          name="description"
          content="Learn who Guide Catholic is, our mission to keep free Catholic guides and prayers accessible, and how we create and review our faith resources."
        />
        <link rel="canonical" href="https://guidecatholic.com/about/" />
        <meta property="og:title" content="About Guide Catholic" />
        <meta
          property="og:description"
          content="Our mission, editorial approach, and commitment to free Catholic faith resources."
        />
        <meta property="og:url" content="https://guidecatholic.com/about/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-16">
          <div className="bg-background-muted/40 py-3 border-b border-border/40">
            <div className="container mx-auto px-4">
              <nav className="flex items-center gap-2 text-sm text-text-muted" aria-label="Breadcrumb">
                <Link to="/" className="hover:text-accent">
                  Home
                </Link>
                <span>/</span>
                <span className="text-text">About</span>
              </nav>
            </div>
          </div>

          <article className="py-12 md:py-16">
            <div className="container mx-auto px-4 max-w-3xl">
              <header className="mb-12 text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                  About Guide Catholic
                </p>
                <h1 className="font-display text-3xl md:text-5xl font-bold text-text mb-5 leading-tight">
                  Free Catholic guides for a deeper faith life
                </h1>
                <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
                  Guide Catholic exists to help Catholics understand Church teaching and live it
                  practically—through clear articles, prayers, and a free faith assessment.
                </p>
              </header>

              <section className="mb-12 prose-none">
                <h2 className="font-display text-2xl font-bold text-text mb-4">Our mission</h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  Many Catholics want to pray more, go to Mass with more intention, and grow in the
                  sacraments—but they do not always know where to begin. We publish practical,
                  readable guides so that Scripture, prayer, and Catholic tradition feel accessible
                  in ordinary life.
                </p>
                <p className="text-text-muted leading-relaxed mb-4">
                  Alongside our articles, we offer a{" "}
                  <Link to="/quiz-intro/" className="text-primary font-semibold hover:underline">
                    Catholic Life Assessment
                  </Link>{" "}
                  — a short reflection tool that helps readers see strengths and next steps in
                  prayer, sacramental life, and daily habits. The quiz is a doorway; the library of
                  guides is the heart of the site.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Our goal is simple: keep high-quality Catholic resources free, useful, and
                  available without a paywall.
                </p>
              </section>

              <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                <div className="rounded-xl border border-border/50 bg-surface p-5">
                  <BookOpen className="w-6 h-6 text-primary mb-3" aria-hidden="true" />
                  <h3 className="font-semibold text-text mb-2">Practical guides</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Clear articles on prayer, the sacraments, saints, and Catholic living.
                  </p>
                </div>
                <div className="rounded-xl border border-border/50 bg-surface p-5">
                  <Heart className="w-6 h-6 text-primary mb-3" aria-hidden="true" />
                  <h3 className="font-semibold text-text mb-2">Free access</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Core resources stay free so families and seekers can grow without barriers.
                  </p>
                </div>
                <div className="rounded-xl border border-border/50 bg-surface p-5">
                  <Shield className="w-6 h-6 text-primary mb-3" aria-hidden="true" />
                  <h3 className="font-semibold text-text mb-2">Faithful tone</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    We aim for accuracy, charity, and alignment with the Catechism and Sacred
                    Scripture.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-bold text-text mb-4">
                  How we create content
                </h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  Editorial priorities focus on questions Catholics actually search for: how to
                  pray the Rosary, how to go to Confession, what the Church teaches on the
                  Eucharist, how to begin Lectio Divina, and how to live the liturgical year at
                  home.
                </p>
                <ul className="space-y-3 text-text-muted leading-relaxed list-disc pl-5 mb-4">
                  <li>
                    We ground explanations in Scripture and the{" "}
                    <em>Catechism of the Catholic Church</em> when doctrine is involved.
                  </li>
                  <li>
                    We prefer concrete steps (how to pray, prepare, or practice) over vague
                    inspiration alone.
                  </li>
                  <li>
                    We revise guides over time for clarity, accuracy, and usefulness to new
                    readers.
                  </li>
                  <li>
                    We are not a substitute for a parish, priest, or spiritual director—local
                    pastoral care always comes first.
                  </li>
                </ul>
                <p className="text-text-muted leading-relaxed">
                  Explore featured guides on the{" "}
                  <Link to="/blog/" className="text-primary font-semibold hover:underline">
                    blog
                  </Link>
                  , pray with the{" "}
                  <Link to="/daily-verses/" className="text-primary font-semibold hover:underline">
                    daily verse
                  </Link>
                  , or{" "}
                  <Link to="/donate/" className="text-primary font-semibold hover:underline">
                    support the mission
                  </Link>{" "}
                  if these resources help you.
                </p>
              </section>

              <section className="mb-12 rounded-2xl border border-border/50 bg-surface p-6 md:p-8">
                <div className="flex items-start gap-3 mb-4">
                  <Cross className="w-6 h-6 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <h2 className="font-display text-2xl font-bold text-text">Important note</h2>
                </div>
                <p className="text-text-muted leading-relaxed mb-3">
                  Guide Catholic is an independent educational project. We are not an official
                  website of the Vatican, a diocese, or any particular parish. For sacramental
                  questions, moral counsel, or personal pastoral guidance, please speak with a
                  Catholic priest or trusted pastoral minister in your community.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Content is offered for spiritual formation and general catechesis. It should not
                  be treated as formal canonical, legal, or medical advice.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="font-display text-2xl font-bold text-text mb-4">Contact</h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  Questions, corrections, or suggestions are welcome. Reach us at{" "}
                  <a
                    href="mailto:contact@guidecatholic.com"
                    className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    contact@guidecatholic.com
                  </a>{" "}
                  or through our{" "}
                  <Link to="/contact/" className="text-primary font-semibold hover:underline">
                    contact page
                  </Link>
                  .
                </p>
                <p className="text-sm text-text-muted">
                  Instagram: @guidecatholic
                </p>
              </section>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
