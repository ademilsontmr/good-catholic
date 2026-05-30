import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, HeartCrack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function NovenaForBrokenHeartCatholic() {
  return (
    <>
      <Helmet>
        <title>Novena for a Broken Heart: 9-Day Catholic Prayer After Breakup | Guide Catholic</title>
        <meta name="description" content="Novena for a broken heart — 9-day Catholic prayer after breakup, divorce, or lost love. Full prayer text and step-by-step healing guide." />
        <meta name="keywords" content="novena broken heart, catholic prayer after breakup, novena healing heart, prayer after divorce catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/novena-for-broken-heart-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Novena for a Broken Heart: 9-Day Catholic Prayer After Breakup" description="Novena for a broken heart — 9-day Catholic prayer after breakup, divorce, or lost love. Full prayer text and step-by-step healing guide." url="https://guidecatholic.com/blog/novena-for-broken-heart-catholic/" datePublished="2026-06-02" />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Novena for a Broken Heart</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayer &amp; Devotion</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />June 2, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Novena for a Broken Heart: 9-Day Catholic Prayer After Breakup</h1>
              <p className="text-xl text-text-muted leading-relaxed">Heartbreak is a form of grief — and the Sacred Heart of Jesus enters that wound. This nine-day novena invites Christ&apos;s healing after breakup, divorce, or lost love.</p>
            </header>
            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10"><HeartCrack className="w-24 h-24 text-rose-600" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Do Catholics Pray To for a Broken Heart?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-for-broken-heart-catholic">
                Catholics bring heartbreak first to the Sacred Heart of Jesus — pierced on the cross out of love for humanity. Mary under the title Mother of Sorrows (Our Lady of Sorrows) stood at the foot of the cross and understands grief at the deepest level. Saint Rita of Cascia, who endured a difficult marriage and widowhood, is patron of impossible causes and wounded hearts. The Church teaches that suffering united to Christ has redemptive value (Colossians 1:24). You are not weak for grieving — you are human, and Christ grieved too (John 11:35).
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is a Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-for-broken-heart-catholic">
                A novena is a nine-day prayer modeled on the apostles&apos; waiting for the Holy Spirit (Acts 1:14). Heartbreak does not heal in a day — a novena gives you nine consecutive days to bring the same wound before God, rather than carrying it alone. Each day you return to prayer, you practice a small act of trust that healing is possible. The novena is not about forgetting the person or the pain; it is about letting Christ into the pain.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Pray a Novena for a Broken Heart?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-for-broken-heart-catholic">
                Breakups, divorce, and unrequited love leave millions of Americans in spiritual and emotional crisis — even active Catholics who feel abandoned by God along with their partner. A novena creates structure when everything feels chaotic. It invites forgiveness (when you are ready), hope for the future, and acceptance of God&apos;s will — which may include reconciliation or a new path forward. Prayer does not replace therapy or the support of friends; it adds grace to the healing process.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your prayer life and healing after loss."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray the Novena for a Broken Heart — Step by Step</h2>
              <ol className="list-decimal list-inside text-text space-y-4 mb-6">
                <li>
                  <strong>Name your grief on day one.</strong> Be honest with God — anger, sadness, betrayal, or numbness. You need not pretend to feel fine.
                </li>
                <li>
                  <strong>Pray at the same time each day.</strong> Evening is common when loneliness feels heaviest, but choose whatever time you can sustain.
                </li>
                <li>
                  <strong>Pray for nine consecutive days.</strong> Make the Sign of the Cross, pray the novena prayer, and sit in silence for a minute afterward if you can.
                </li>
                <li>
                  <strong>Seek human support alongside prayer.</strong> Talk to a trusted friend, priest, or counselor. The Church encourages both spiritual and psychological healing.
                </li>
                <li>
                  <strong>Offer forgiveness when ready — not before.</strong> Forgiveness is a process, not a single act. Ask God for the grace to forgive, even if you cannot yet.
                </li>
              </ol>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Daily Novena Prayer for a Broken Heart</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Sacred Heart of Jesus, I bring my wounded heart to you. You know the pain of rejection, betrayal, and loss. I offer you my brokenness over [name the situation — breakup, divorce, or lost relationship].
                </p>
                <p className="text-text italic leading-relaxed text-sm mt-4">
                  Heal what is torn. Teach me to forgive those who have hurt me, and help me forgive myself. Show me the path forward according to your will — whether that means reconciliation, new beginnings, or simply peace in the present moment.
                </p>
                <p className="text-text italic leading-relaxed text-sm mt-4">
                  Mary, Mother of Sorrows, you stood at the foot of the cross when love seemed lost. Walk with me these nine days. Saint Rita of Cascia, patron of the wounded, intercede for me. I place all my trust in the Sacred Heart of Jesus. Amen.
                </p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-for-broken-heart-catholic">
                If heartbreak has caused family division, consider a novena for family peace. When anxiety keeps you awake at night, a novena for anxiety can help. For discernment about whether to reconcile or move forward, a novena for clarity may guide your next steps. Christ&apos;s heart was pierced for love — he will not abandon yours.
              </LinkedText>

            </div>
            <BlogFAQ faqs={[
              { question: "Can I pray this novena hoping my ex will come back?", answer: "You may pray for reconciliation if the relationship was just and marriage is involved, but Catholic prayer also includes surrender to God&apos;s will. Ask for what is truly best — which may be healing apart rather than reunion. Trust that God desires your ultimate good." },
              { question: "Is it appropriate to pray a novena after divorce?", answer: "Yes. Divorce is often deeply painful even when necessary. The Church recognizes that divorced Catholics remain full members of the community. This novena is appropriate for grief, forgiveness, and rebuilding life after marriage ends." },
              { question: "How is a novena for a broken heart different from therapy?", answer: "They serve different purposes. Therapy addresses psychological healing with professional tools; a novena invites God&apos;s grace into the wound. Many Catholics use both. The Church encourages responsible care alongside prayer." },
              { question: "Which saints help with heartbreak in Catholic tradition?", answer: "The Sacred Heart of Jesus and Mary, Mother of Sorrows, are primary. Saint Rita of Cascia, Saint Dymphna (emotional suffering), and Saint Valentine (authentic love) are also invoked. This novena centers on the Sacred Heart and Mary." },
              { question: "What if I still feel pain after nine days?", answer: "Healing rarely follows a fixed timeline. Continue praying, extend the novena if helpful, and seek ongoing support. Nine days is a beginning, not a deadline. God&apos;s healing often unfolds over months and years." },
            ]} />
            <RelatedArticles currentSlug="novena-for-broken-heart-catholic" />
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your knowledge of Catholic prayer and devotion.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
