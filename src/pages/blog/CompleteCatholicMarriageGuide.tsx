import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function CompleteCatholicMarriageGuide() {
  return (
    <>
      <Helmet>
        <title>The Complete Catholic Marriage Guide: From Engagement to Holy Matrimony | Guide Catholic</title>
        <meta name="description" content="Everything engaged Catholic couples need to know — Pre-Cana, required documents, the wedding ceremony explained, the exchange of vows, NFP, and how to build a holy marriage." />
        <meta name="keywords" content="complete catholic marriage guide, catholic wedding preparation, pre-cana guide, catholic marriage requirements, sacrament of matrimony guide, catholic engagement guide" />
        <link rel="canonical" href="https://guidecatholic.com/blog/complete-catholic-marriage-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="The Complete Catholic Marriage Guide: From Engagement to Holy Matrimony"
        description="Everything engaged Catholic couples need to know — Pre-Cana, required documents, the wedding ceremony explained, the exchange of vows, NFP, and how to build a holy marriage."
        url="https://guidecatholic.com/blog/complete-catholic-marriage-guide/"
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
              <span className="text-text">Complete Catholic Marriage Guide</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Sacraments</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 1, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />22 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Complete Catholic Marriage Guide: From Engagement to Holy Matrimony
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Catholic marriage is not just a ceremony — it is a sacrament, a vocation, and a covenant. This complete guide walks engaged couples through every step of Catholic wedding preparation and lays the foundation for a holy, lasting marriage.
              </p>
            </header>
            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-500" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Catholic Marriage Is</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-marriage-guide">
                The Sacrament of Matrimony is one of the seven sacraments of the Catholic Church. Unlike most sacraments, where the priest or deacon is the minister, in Catholic marriage the spouses themselves are the ministers of the sacrament to each other. The priest or deacon serves as the Church's official witness. This means that the couple's free exchange of consent — their vows — is the sacramental act itself.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-marriage-guide">
                The Church teaches that marriage has three essential goods, articulated by St. Augustine and confirmed by the Catechism (CCC 1601–1666): fidelity (fides) — exclusive and permanent commitment to one spouse; children (proles) — openness to the gift of new life; and the sacramental bond (sacramentum) — the indissoluble covenant that images Christ's love for the Church. These three goods are not optional features of Catholic marriage but its very essence.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-marriage-guide">
                Catholic marriage is indissoluble — "what God has joined together, let no one separate" (Matthew 19:6). This is not a harsh rule but a profound truth about the nature of the covenant: it is permanent because it images the permanent, faithful love of Christ for his Church. The Church's teaching on indissolubility is one of the most countercultural and most beautiful aspects of Catholic marriage.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Step-by-Step: From Engagement to Wedding</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Step 1: Notify Your Parish</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-marriage-guide">
                Contact your parish as soon as possible after becoming engaged — ideally 9 to 12 months before the desired wedding date. Many parishes require at least six months' notice, and popular dates fill up quickly. You will meet with the pastor or a designated staff member to begin the preparation process. If you are not registered in a parish, you will need to register or obtain permission to marry in another parish.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Step 2: Pre-Cana Marriage Preparation</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-marriage-guide">
                Pre-Cana is the Church's required marriage preparation program. The name comes from the wedding at Cana in Galilee, where Jesus performed his first miracle. Pre-Cana is not a test you can fail — it is a gift to help couples build a strong foundation for marriage. It covers communication, conflict resolution, finances, sexuality, Natural Family Planning, faith, and the theology of marriage.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-marriage-guide">
                Pre-Cana is offered in several formats: weekend retreats (Engaged Encounter), multi-week parish programs, online programs (such as FOCCUS or Prepare/Enrich), and one-on-one mentoring with a married couple. Your parish will direct you to the appropriate program. Most couples find Pre-Cana genuinely valuable — it surfaces important conversations that many couples have never had.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Step 3: The Marriage Interview with the Priest</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-marriage-guide">
                The priest or deacon will conduct a prenuptial investigation — a formal interview with each partner, usually separately. This is required by canon law to ensure that both parties are free to marry in the Church. The questions cover your understanding of marriage, your freedom to marry (no prior marriages, no impediments), your intention to have children, and your commitment to raise children Catholic. This is not an interrogation but a pastoral conversation.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Step 4: Required Documents</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-marriage-guide">
                You will need to gather several documents for the prenuptial file. These typically include: a recent baptismal certificate (issued within the last six months, showing no record of a prior marriage), a confirmation certificate, a certificate of freedom to marry (a declaration that you have never been married), and civil documents such as a birth certificate. If either party has been previously married, additional documentation and possibly a declaration of nullity (annulment) will be required.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Step 5: Planning the Wedding Mass</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-marriage-guide">
                Catholic weddings are typically celebrated within Mass (the Nuptial Mass), though a wedding outside of Mass is also valid. You will work with the priest to choose Scripture readings from the approved list, select music (which must be sacred and appropriate for liturgy), and plan the details of the ceremony. You may also choose the form of the exchange of consent (vows) from the approved options.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Step 6: The Rite of Marriage</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-marriage-guide">
                The wedding ceremony itself follows the Rite of Marriage. After the Liturgy of the Word, the priest questions the couple about their freedom, fidelity, and openness to children. The couple then exchanges consent (vows), the rings are blessed and exchanged, and the Nuptial Blessing is given. If celebrated within Mass, the couple receives Holy Communion together for the first time as husband and wife.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your faith and sacramental life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Catholic Wedding Ceremony Explained</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-marriage-guide">
                The Rite of Marriage within Mass follows this order: the Entrance Rite and Liturgy of the Word (readings, homily); the Rite of Marriage (questions before consent, exchange of consent, blessing and giving of rings, optional unity candle or other symbols); the Liturgy of the Eucharist; the Nuptial Blessing (a solemn blessing over the couple); and the Concluding Rite.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-marriage-guide">
                The Nuptial Blessing is one of the most beautiful prayers in the entire Roman Rite. It invokes God's blessing on the couple, prays for their fidelity and fruitfulness, and asks that they may one day reach the eternal wedding feast of heaven. It is given only once in a lifetime — at the wedding Mass — and is a unique grace of the sacrament.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Exchange of Vows — Full Text</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Traditional Catholic Wedding Vows</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  I, [Name], take you, [Name], to be my wife/husband. I promise to be faithful to you, in good times and in bad, in sickness and in health, to love you and to honor you all the days of my life.
                </p>
                <p className="text-text leading-relaxed text-sm mt-4">
                  Or the longer traditional form:
                </p>
                <p className="text-text italic leading-relaxed text-sm mt-2">
                  I, [Name], take you, [Name], for my lawful wife/husband, to have and to hold, from this day forward, for better, for worse, for richer, for poorer, in sickness and in health, until death do us part.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Mixed Marriages: Catholic + Non-Catholic</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-marriage-guide">
                A mixed marriage is a marriage between a Catholic and a baptized non-Catholic (Protestant, Orthodox, etc.). A disparity of cult is a marriage between a Catholic and an unbaptized person. Both require special permission from the bishop (a dispensation). The Catholic party must promise to remain Catholic and to do all in their power to raise the children Catholic. The non-Catholic party must be informed of this promise.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-marriage-guide">
                Mixed marriages can be celebrated in a Catholic church with or without Mass (Mass is generally not recommended when the non-Catholic cannot receive Communion, to avoid confusion). With a dispensation, a mixed marriage can also be celebrated in the non-Catholic's church. The Church supports mixed marriages but acknowledges the unique challenges they present for the faith life of the family.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Natural Family Planning</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-marriage-guide">
                Natural Family Planning (NFP) is the Church-approved method of regulating births. Unlike artificial contraception, NFP works with the natural cycles of the woman's body to identify fertile and infertile periods. It is not the "rhythm method" — modern NFP methods (Creighton, Billings, Sympto-Thermal) are highly effective when used correctly, with effectiveness rates comparable to artificial contraception.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-marriage-guide">
                The Church teaches NFP not merely as a technique but as an expression of the theology of the body. Artificial contraception separates the unitive and procreative dimensions of the marital act, which the Church teaches are inseparable. NFP respects both dimensions and requires communication, self-discipline, and mutual respect — virtues that strengthen marriage. Couples who practice NFP have significantly lower divorce rates than the general population.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Building a Holy Catholic Marriage</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-marriage-guide">
                The wedding day is the beginning, not the destination. Building a holy Catholic marriage requires daily choices to love, forgive, and grow together in faith. The most important practices are: praying together daily (even briefly), attending Mass together every Sunday, going to Confession regularly, reading Scripture or spiritual books together, and making your home a "domestic church" — a place where faith is lived, not just professed.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-marriage-guide">
                The domestic church is a concept from the Second Vatican Council: the family is the smallest unit of the Church, and the home is the first school of faith. Family prayer, the blessing of meals, the celebration of feast days, and the teaching of the faith to children are all ways of making the home a place where God is present and loved.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Marriages Struggle</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-marriage-guide">
                Every marriage faces difficulties. The Church offers several resources for struggling couples. Catholic marriage counselors and therapists can provide professional support rooted in Catholic values. Retrouvaille (French for "rediscovery") is a program specifically designed for marriages in serious crisis — it has helped tens of thousands of couples on the brink of divorce. Marriage Encounter is a weekend retreat for couples who want to deepen their relationship.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-marriage-guide">
                If a marriage has irretrievably broken down and civil divorce has occurred, the Church offers the annulment process — a formal investigation into whether a valid sacramental marriage ever existed. An annulment is not a "Catholic divorce" — it is a declaration that the marriage was invalid from the beginning due to some defect of consent, capacity, or form. The process typically takes one to two years and is available to any Catholic.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Catholic Wedding Preparation Checklist</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Contact your parish 9–12 months before the wedding date</li>
                <li>Register in a parish if not already registered</li>
                <li>Complete the Pre-Cana marriage preparation program</li>
                <li>Complete the prenuptial investigation with the priest or deacon</li>
                <li>Gather required documents: baptismal certificate (recent), confirmation certificate, freedom to marry declaration, birth certificate</li>
                <li>If previously married: obtain declaration of nullity (annulment) if required</li>
                <li>If mixed marriage: obtain dispensation from the bishop</li>
                <li>Plan the wedding Mass: choose readings, music, and vow form</li>
                <li>Arrange for a rehearsal with the priest and wedding party</li>
                <li>Obtain the civil marriage license (requirements vary by state/country)</li>
                <li>Learn about Natural Family Planning</li>
                <li>Make a plan for regular Mass attendance, prayer, and Confession as a couple</li>
              </ul>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "Love is patient, love is kind. It is not jealous, it is not pompous, it is not inflated, it is not rude, it does not seek its own interests, it is not quick-tempered, it does not brood over injury."
                </p>
                <p className="text-text-muted text-center mt-2">— 1 Corinthians 13:4–5</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "How far in advance do I need to contact my parish for a Catholic wedding?", answer: "Most parishes require at least six months' notice, and many recommend 9 to 12 months, especially for popular dates. Contact your parish as soon as possible after becoming engaged to secure your date and begin the preparation process." },
              { question: "What is Pre-Cana and is it required?", answer: "Pre-Cana is the Catholic Church's required marriage preparation program. It is mandatory for all couples marrying in the Catholic Church. It covers communication, finances, sexuality, Natural Family Planning, faith, and the theology of marriage. It is offered in various formats including weekend retreats, parish programs, and online courses." },
              { question: "Can a Catholic marry a non-Catholic in the Catholic Church?", answer: "Yes, with permission. A marriage between a Catholic and a baptized non-Catholic requires a dispensation for mixed religion. A marriage between a Catholic and an unbaptized person requires a dispensation for disparity of cult. The Catholic party must promise to remain Catholic and to raise children Catholic. The non-Catholic must be informed of this promise." },
              { question: "What documents do I need for a Catholic wedding?", answer: "Typically: a recent baptismal certificate (issued within the last six months), a confirmation certificate, a freedom to marry declaration, and a civil birth certificate. If either party has been previously married, additional documentation and possibly a declaration of nullity (annulment) will be required. Your parish will provide a complete list." },
              { question: "What is the difference between a Catholic wedding with Mass and without Mass?", answer: "A Catholic wedding within Mass (Nuptial Mass) includes the full celebration of the Eucharist, and the couple receives Holy Communion together. A Catholic wedding outside of Mass (Rite of Marriage outside Mass) includes the Liturgy of the Word and the Rite of Marriage but not the Eucharist. Both are valid sacramental marriages. A wedding outside of Mass is often chosen when the non-Catholic party cannot receive Communion, to avoid confusion." },
            ]} />

            <RelatedArticles currentSlug="complete-catholic-marriage-guide" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your faith and building a holy Catholic family.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
