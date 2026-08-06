import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, MapPin, Church, Search } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function HowToFindMyCatholicParish() {
  return (
    <>
      <Helmet>
        <title>How Do I Find My Catholic Parish? (US Guide 2026) | Guide Catholic</title>
        <meta
          name="description"
          content="How to find your Catholic parish in the USA — by ZIP code, diocese, moving, or returning to Mass. Step-by-step guide with USCCB tools and what to expect."
        />
        <meta
          name="keywords"
          content="how do i find my catholic parish, find catholic church near me, catholic parish by zip code, what parish am i in catholic, register at catholic parish usa"
        />
        <link rel="canonical" href="https://guidecatholic.com/blog/how-to-find-my-catholic-parish/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="How Do I Find My Catholic Parish? (US Guide 2026)"
        description="How to find your Catholic parish in the USA — by ZIP code, diocese, moving, or returning to Mass. Step-by-step guide with USCCB tools and what to expect."
        url="https://guidecatholic.com/blog/how-to-find-my-catholic-parish/"
        datePublished="2026-08-06"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Find My Catholic Parish", url: "https://guidecatholic.com/blog/how-to-find-my-catholic-parish/" },
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
              <span className="text-text">Find My Catholic Parish</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Becoming Catholic</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />August 6, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                How Do I Find My Catholic Parish?
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Moving to a new city, coming back to Mass after years away, or preparing for a sacrament? Here is a clear step-by-step guide for finding and registering at your Catholic parish in the United States.
              </p>
            </header>

            <div className="aspect-video bg-emerald-50 rounded-2xl flex items-center justify-center mb-10">
              <MapPin className="w-28 h-28 text-emerald-700" strokeWidth={1.2} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">
                  To find your Catholic parish in the USA: (1) enter your ZIP code at{" "}
                  <a href="https://www.usccb.org/parishes" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">USCCB.org/parishes</a>{" "}
                  or your diocesan website; (2) identify which territorial parish covers your home address; (3) call the parish office to confirm Mass times and registration; (4) attend Mass and introduce yourself to the pastor or parish secretary. You may also worship at a nearby parish by choice, but sacramental records usually belong to your territorial parish.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                <Search className="w-6 h-6 text-accent" />
                Step 1: Search by ZIP Code or Address
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-find-my-catholic-parish">
                The USCCB maintains a parish finder covering U.S. dioceses. Most diocesan websites also offer &quot;find a parish&quot; tools with maps. Google Maps works for Mass times but may not show which parish is <em>yours</em> canonically — always verify on the diocesan site.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                <Church className="w-6 h-6 text-accent" />
                Step 2: Territorial Parish vs. Parish You Attend
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-find-my-catholic-parish">
                Every Catholic territory is assigned to a parish. Baptism, marriage, and Confirmation records are normally kept there. You may attend a different parish for convenience, language (Spanish, Vietnamese, etc.), or the Traditional Latin Mass — but for marriage paperwork or registering children for sacraments, your territorial parish or the one where you are registered matters.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Step 3: Register at the Parish</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-8">
                <li>Attend Mass — Sunday obligation is the starting point.</li>
                <li>Visit the parish office or fill out an online registration form.</li>
                <li>Provide contact information and family members for the directory (optional).</li>
                <li>Ask about RCIA if you are not yet Catholic or need Confirmation.</li>
                <li>Get bulletin, email list, and Confession schedule.</li>
              </ol>

              <QuizCTA title="Are you ready to live your Catholic faith?" description="Take our free assessment for personalized guidance on Mass, sacraments, and parish life." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Special Situations</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>Moving:</strong> Register at your new territorial parish within a few weeks.</li>
                <li><strong>College:</strong> Campus ministry serves students; home parish records remain at home unless you transfer formally.</li>
                <li><strong>Military:</strong> Use archdiocese for the armed forces (AMS) resources.</li>
                <li><strong>Returning after years away:</strong> Any parish welcome desk can help — start with Confession.</li>
                <li><strong>Eastern Catholic:</strong> Find your sui iuris Church through eparchy websites, not only Latin Rite dioceses.</li>
              </ul>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-find-my-catholic-parish">
                For converting to Catholicism, parish registration connects you to RCIA. See our{" "}
                <Link to="/blog/complete-guide-converting-to-catholicism/" className="text-accent underline underline-offset-2">complete guide to converting to Catholicism</Link>.
              </LinkedText>
              {/* data-expanded-depth */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What You Need to Know First</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-find-my-catholic-parish">How Do I Find My Catholic Parish? American Catholics navigate civil law, diocesan policies, and parish practice — three layers that do not always say the same thing in the same words. When in doubt, your pastor and diocesan website are authoritative for sacramental questions.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Step-by-Step for U.S. Catholics</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-find-my-catholic-parish">Start with Sunday Mass and an honest examination of conscience. Gather required documents or information early if the guide involves sacraments, marriage, or RCIA. Call the parish office with specific questions rather than relying only on internet forums.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Church Requires vs. Encourages</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-find-my-catholic-parish">Canon law and liturgical law bind in some matters; pious customs encourage in others. Confusion often comes from treating optional devotions as obligations, or vice versa. This guide distinguishes what you must do from what helps you grow.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When to Talk to Your Pastor</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-find-my-catholic-parish">Complex cases — irregular marriage, mixed religion, health crises, or moral dilemmas — deserve personal pastoral counsel. Priests hear similar questions weekly. You will not surprise them; you will receive the mercy and clarity the Church exists to give.</LinkedText>

              {/* data-expanded-depth-2 */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Questions Catholics Ask Today</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-find-my-catholic-parish">Readers often search for How Do I Find My Catholic Parish? during major life transitions — marriage, illness, conversion, or parenting. The Church&apos;s answer is meant to bring peace and clarity, not anxiety. Bring specific questions to Confession or a parish appointment when your situation has unusual details.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Teaching Children and Grandchildren</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-find-my-catholic-parish">Passing on the faith in the United States means competing with screens, sports schedules, and secular assumptions. Explain this topic in simple language over the dinner table, connect it to Sunday Mass, and let children see you pray — example teaches more than lectures alone.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Related Devotions and Next Steps</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-find-my-catholic-parish">Use the related articles at the bottom of this page to continue learning. Pair reading with action: one prayer this week, one conversation with a Catholic friend, or one visit to a parish you have been avoiding. Knowledge without practice remains incomplete.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Trust and Perseverance</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-find-my-catholic-parish">How Do I Find My Catholic Parish? — the Christian life is a marathon. Some days faith feels bright; other days dry. Persevere in small habits: Sign of the Cross, Our Father, attendance at Mass. Grace builds on faithfulness, not perfection.</LinkedText>

              {/* data-expanded-depth-3 */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Documents and Deadlines</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-find-my-catholic-parish">For sacramental guides, gather baptism certificates, marriage licenses, or annulment decrees early. U.S. parishes often need weeks to schedule weddings, baptisms, or RCIA interviews.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Online vs. In-Person</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-find-my-catholic-parish">Websites explain principles; pastors apply them to your case. Never let internet articles replace a personal conversation when the matter is serious.</LinkedText>

            </div>

            <BlogFAQ
              linkAnswersSlug="how-to-find-my-catholic-parish"
              faqs={[
                { question: "How do I find my Catholic parish by ZIP code?", answer: "Use the USCCB parish finder at usccb.org/parishes or your diocesan website's parish locator." },
                { question: "Can I go to any Catholic church?", answer: "Yes for Mass and most devotions. Sacramental registration and marriage prep usually involve your territorial or registered parish." },
                { question: "What if there are several churches nearby?", answer: "One is typically your territorial parish by address; others may be missions, ethnic parishes, or personal parishes with special charisms." },
                { question: "Do I need to register to go to Mass?", answer: "No — anyone may attend Mass. Registration helps the parish serve you with sacraments, bulletins, and pastoral care." },
                { question: "How do I find a Latin Mass parish?", answer: "Use the diocesan list or websites like Ecclesia Dei communities; call ahead for times and dress expectations." },
              ]}
            />
            <RelatedArticles currentSlug="how-to-find-my-catholic-parish" />
            <ArticleBottomCTA title="Take the next step in parish life" description="Take our free quiz for a personalized plan to grow in Mass, prayer, and Catholic community." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
