import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CreditCard, HeartHandshake } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { PAYPAL_DONATE_URL, STRIPE_DONATE_URL } from "@/lib/donateLinks";

const faqs = [
  {
    q: "How will my donation help Guide Catholic?",
    a: "Donations help us maintain the website, cover hosting and technical costs, improve accessibility, and continue creating free Catholic guides, prayers, novenas, saint pages, and faith resources.",
  },
  {
    q: "Is Guide Catholic free to use?",
    a: "Yes. Our faith guides, prayers, novenas, saint pages, daily verses, and other resources are available free of charge. Donations help us keep this access open.",
  },
  {
    q: "Can I donate with Stripe or PayPal?",
    a: "Yes. You can choose either Stripe or PayPal using the secure donation buttons on this page. The payment is processed by the service you select.",
  },
];

export default function DonatePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://guidecatholic.com/" },
      { "@type": "ListItem", position: 2, name: "Donate", item: "https://guidecatholic.com/donate/" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Support Guide Catholic | Donate</title>
        <meta
          name="description"
          content="Support Guide Catholic with a donation. Help us keep free Catholic guides, prayers, novenas, and faith resources available for everyone."
        />
        <link rel="canonical" href="https://guidecatholic.com/donate/" />
        <meta property="og:title" content="Support Guide Catholic | Donate" />
        <meta
          property="og:description"
          content="Help keep free Catholic guides and faith resources available to people around the world."
        />
        <meta property="og:url" content="https://guidecatholic.com/donate/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-16">
          <div className="bg-gradient-to-br from-primary/[0.06] via-background to-accent/[0.08]">
            <div className="container mx-auto px-4 max-w-5xl py-12 md:py-16 flex flex-col">
              <header className="text-center max-w-3xl mx-auto mb-12">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                  Help keep Catholic resources free
                </p>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-6">
                  Support Guide Catholic
                </h1>
                <p className="text-lg md:text-xl text-text-muted leading-relaxed">
                  Your generosity helps us offer faith guides, prayers, and Catholic resources freely
                  to readers around the world.
                </p>
              </header>

              {/* Donation methods — first for conversion */}
              <div className="order-1">
                <section aria-labelledby="donation-options" className="mb-12">
                  <h2
                    id="donation-options"
                    className="font-display text-3xl font-bold text-text text-center mb-3"
                  >
                    Choose a secure donation method
                  </h2>
                  <p className="text-center text-text-muted mb-8">
                    Thank you for supporting this free Catholic resource.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    <div className="bg-surface rounded-2xl border border-indigo-100 shadow-lg p-8 text-center">
                      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                        <CreditCard className="w-7 h-7" aria-hidden="true" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-text mb-3">
                        Donate with Stripe
                      </h3>
                      <p className="text-text-muted leading-relaxed mb-6">
                        Make a donation using Stripe&apos;s secure checkout.
                      </p>
                      <a
                        href={STRIPE_DONATE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Donate with Stripe
                        <span aria-hidden="true" className="ml-2">
                          →
                        </span>
                      </a>
                    </div>

                    <div className="bg-surface rounded-2xl border border-sky-100 shadow-lg p-8 text-center">
                      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                        <HeartHandshake className="w-7 h-7" aria-hidden="true" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-text mb-3">
                        Donate with PayPal
                      </h3>
                      <p className="text-text-muted leading-relaxed mb-6">
                        Give through PayPal&apos;s secure donation page.
                      </p>
                      <a
                        href={PAYPAL_DONATE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                      >
                        Donate with PayPal
                        <span aria-hidden="true" className="ml-2">
                          →
                        </span>
                      </a>
                    </div>
                  </div>

                  <p className="text-center text-sm text-text-muted mt-6">
                    You choose the amount. Every gift is appreciated, and sharing this site is also a
                    meaningful way to help.
                  </p>
                  <p className="text-center text-xs text-text-muted/80 mt-3">
                    Donations are securely processed by SmartX Digital to support the Guide Catholic
                    project.
                  </p>
                </section>
              </div>

              {/* Why donations matter */}
              <section className="bg-surface rounded-2xl shadow-xl border border-border/40 p-6 sm:p-10 mb-10 order-2">
                <div className="max-w-3xl mx-auto">
                  <h2 className="font-display text-3xl font-bold text-text mb-5 text-center">
                    Why donations matter
                  </h2>
                  <p className="text-text-muted leading-relaxed mb-5">
                    Guide Catholic exists to make Catholic faith guides, prayers, and spiritual
                    resources available without a paywall. Keeping a growing website useful, secure,
                    and available every day requires ongoing hosting, maintenance, development, and
                    content work.
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    A donation is a practical way to participate in this mission. It helps us
                    preserve free access to our articles, prayer guides, novenas, saint pages,
                    devotionals, and the{" "}
                    <Link
                      to="/daily-verses/"
                      className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:text-primary/80"
                    >
                      Daily Bible Verse
                    </Link>{" "}
                    resource.
                  </p>
                </div>
              </section>

              {/* Benefit cards */}
              <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12 order-3">
                <div className="rounded-xl bg-surface border border-border/40 p-6 shadow-sm">
                  <h3 className="font-bold text-text mb-2">Free faith guides</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Help readers access clear Catholic teaching and practical guides without a
                    subscription.
                  </p>
                </div>
                <div className="rounded-xl bg-surface border border-border/40 p-6 shadow-sm">
                  <h3 className="font-bold text-text mb-2">Prayer resources</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Support the continued work behind prayers, novenas, saint pages, and reflections.
                  </p>
                </div>
                <div className="rounded-xl bg-surface border border-border/40 p-6 shadow-sm">
                  <h3 className="font-bold text-text mb-2">Daily encouragement</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Help keep daily Scripture and faith-building resources available worldwide.
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section className="bg-surface rounded-2xl border border-border/40 p-6 sm:p-10 mb-10 order-4 shadow-sm">
                <h2 className="font-display text-3xl font-bold text-text mb-7 text-center">
                  Frequently asked questions
                </h2>
                <div className="max-w-3xl mx-auto space-y-6">
                  {faqs.map((faq) => (
                    <div key={faq.q}>
                      <h3 className="text-lg font-bold text-text mb-2">{faq.q}</h3>
                      <p className="text-text-muted leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="text-center order-5">
                <p className="text-text-muted mb-5">
                  Prefer to pray or read Scripture today? Those resources remain free for everyone.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link
                    to="/daily-verses/"
                    className="inline-flex items-center rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-primary/90"
                  >
                    Read today&apos;s verse
                  </Link>
                  <Link
                    to="/blog/"
                    className="inline-flex items-center rounded-lg border border-border bg-surface px-5 py-3 font-semibold text-text hover:bg-background-muted/50"
                  >
                    Explore the blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
