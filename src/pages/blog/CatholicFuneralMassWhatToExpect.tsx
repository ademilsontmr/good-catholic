import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function CatholicFuneralMassWhatToExpect() {
  return (
    <>
      <Helmet>
        <title>Catholic Funeral Mass: What to Expect (Complete USA Guide) | Guide Catholic</title>
        <meta name="description" content="Catholic funeral Mass explained — Vigil, Mass of Christian Burial, committal, etiquette, and what happens step by step." />
        <meta name="keywords" content="catholic funeral mass what to expect, catholic funeral rites order, mass of christian burial" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-funeral-mass-what-to-expect/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Catholic Funeral Mass: What to Expect (Complete USA Guide)" description="Catholic funeral Mass explained — Vigil, Mass of Christian Burial, committal, etiquette, and what happens step by step." url="https://guidecatholic.com/blog/catholic-funeral-mass-what-to-expect/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Catholic Funeral Mass: What to Expect...", url: "https://guidecatholic.com/blog/catholic-funeral-mass-what-to-expect/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Catholic Funeral Mass: What to Expect...</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Catholic Living</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Catholic Funeral Mass: What to Expect (Complete USA Guide)</h1>
              <p className="text-xl text-text-muted leading-relaxed">A Catholic funeral is not a celebration of life party — it is prayer for the dead, comfort for the living, and proclamation of resurrection hope. Here is what happens at each stage, from the Vigil through the Mass of Christian Burial to the committal.</p>
            </header>
            <div className="aspect-video bg-slate-100 rounded-2xl flex items-center justify-center mb-10"><Church className="w-24 h-24 text-slate-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">A Catholic Funeral Mass (Mass of Christian Burial) offers the Eucharist for the deceased&apos;s soul with Scripture, prayers, and final commendation — often after a Vigil wake. Eulogies belong at the Vigil, not usually during Mass per diocesan norms.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-funeral-mass-what-to-expect">
                The Order of Christian Funerals structures Catholic burial in three main rites: the Vigil (often called a wake or viewing), the Funeral Mass (Mass of Christian Burial), and the Rite of Committal at the cemetery. Each serves a distinct purpose — remembering the deceased, offering the Sacrifice of the Mass for their soul, and committing the body to its resting place until the resurrection. American parishes typically coordinate all three within two to four days of death.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Three Rites: Overview</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Vigil (Wake):</strong> Usually the evening before the funeral, at the funeral home or church. Scripture, a brief homily or eulogy, and the Rosary or other prayers. Family and friends gather to remember and pray.</li>
                <li><strong>Funeral Mass:</strong> The central liturgy — typically at the parish church, with the casket or urn present. A priest celebrates Mass offered for the repose of the deceased&apos;s soul.</li>
                <li><strong>Committal:</strong> At the graveside or mausoleum. Final prayers, sprinkling with holy water, and entrusting the body to the earth — &quot;earth to earth, ashes to ashes.&quot;</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Step-by-Step: The Funeral Mass</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-funeral-mass-what-to-expect">
                When you arrive, the casket is usually near the sanctuary, draped with a white pall symbolizing baptism. Family sits in the front pews. The Mass follows the ordinary structure: Introductory Rites (including a sprinkling with holy water), Liturgy of the Word (readings chosen by the family from approved options), homily focused on Christ&apos;s resurrection and the deceased&apos;s faith, General Intercessions, Liturgy of the Eucharist, and Final Commendation. The priest incenses the casket during the Final Commendation — a solemn, beautiful moment. The entire Mass typically lasts 45–60 minutes.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What to Wear and How to Participate</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-funeral-mass-what-to-expect">
                Modest, respectful attire is expected — dark or muted colors are traditional in the U.S., though white is common in some cultures for baptised infants. Non-Catholics are welcome to attend; you may stand and sit with the congregation. Only Catholics in a state of grace should receive Communion. Others may remain seated or come forward with arms crossed for a blessing. Sign the guest book at the Vigil or reception, but avoid lengthy conversations during the Mass itself.
              </LinkedText>

              <QuizCTA title="Supporting a grieving Catholic family?" description="Take the Catholic life assessment for guidance on prayer, sacraments, and walking with others through loss." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Eulogies, Music, and Readings</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-funeral-mass-what-to-expect">
                The Church distinguishes the homily (given only by the priest or deacon, focused on faith and hope) from a eulogy (personal remembrance). Many U.S. parishes allow one brief eulogy at the Vigil or after Communion at Mass — not replacing the homily. Music must be sacred and liturgically appropriate; popular secular songs are discouraged at Mass though they may appear at a reception. Scripture readings come from the Order of Christian Funerals — your parish will provide a list. Common choices include John 14:1–6, Romans 8:31–39, and Revelation 21:1–7.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Planning With Your Parish</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li>Contact the parish immediately after a death — the funeral director often coordinates, but the family confirms dates with the church.</li>
                <li>Meet with the priest or bereavement minister to choose readings, music, and pallbearers.</li>
                <li>Confirm whether a Funeral Mass or Liturgy of the Word without Mass is appropriate (Mass is preferred for practicing Catholics).</li>
                <li>Arrange the cemetery committal — Catholic cemeteries require consecrated ground.</li>
                <li>Plan a reception if desired; this is separate from the liturgy and may include remembrances not suited to Mass.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Special Situations: Cremation, Suicide, and Non-Catholics</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-funeral-mass-what-to-expect">
                A Funeral Mass may be celebrated with cremated remains present — the urn receives the same pall and incense as a casket. The Church offers Funeral Mass for baptized Catholics who died by suicide, trusting God&apos;s mercy rather than judging the person&apos;s final act. Non-Catholics may receive a funeral liturgy at the discretion of the bishop and pastor, especially when they had some connection to the Catholic faith or a Catholic spouse requests it. Each situation deserves pastoral consultation, not assumptions.
              </LinkedText>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-funeral-mass-what-to-expect">
                The Funeral Mass is the greatest prayer the Church can offer for the dead — the same Sacrifice of Calvary applied to your loved one&apos;s soul. Attending with faith, praying the responses, and continuing to have Masses offered afterward (month&apos;s mind, anniversaries) are enduring gifts of love.
              </LinkedText>
            </div>
            <BlogFAQ faqs={[
              { question: "How soon after death is the Funeral Mass celebrated?", answer: "Typically within three to five days in the United States, though timing depends on parish availability, family travel, and funeral home scheduling. There is no strict canonical deadline." },
              { question: "Can a Funeral Mass be held at a funeral home?", answer: "The Funeral Mass is normally celebrated in a Catholic church. A Liturgy of the Word without Mass may occasionally be permitted elsewhere; the full Mass requires a sacred space with an altar." },
              { question: "Should children attend a Catholic funeral?", answer: "Yes, when age-appropriate. Children benefit from seeing the Church&apos;s prayer for the dead. Prepare them briefly for what they will see — the casket, incense, and quiet moments." },
              { question: "Can we schedule a Funeral Mass during Lent?", answer: "Yes. Funeral Masses are permitted during Lent, though music and decorations are more subdued. A Funeral Mass takes liturgical precedence over most Lenten observances." },
              { question: "Can non-Catholics receive Communion at a funeral?", answer: "No. Only Catholics in a state of grace may receive the Eucharist; others may come forward for a blessing with arms crossed." },
              { question: "Are eulogies allowed at a Catholic funeral Mass?", answer: "Personal eulogies belong at the Vigil or reception, not usually during the Mass itself per diocesan norms." }
            ]} />
            <RelatedArticles currentSlug="catholic-funeral-mass-what-to-expect" />
            <ArticleBottomCTA />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
