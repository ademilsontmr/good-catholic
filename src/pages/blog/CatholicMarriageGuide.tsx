import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";

export default function CatholicMarriageGuide() {
  return (
    <>
      <Helmet>
        <title>Catholic Marriage: What the Church Teaches About Holy Matrimony | Guide Catholic</title>
        <meta name="description" content="Complete guide to Catholic marriage. Learn about marriage as a sacrament, unity and indissolubility, marriage preparation, natural family planning, annulment vs divorce, and mixed marriages." />
        <meta name="keywords" content="catholic marriage, catholic wedding, holy matrimony, marriage in catholic church, catholic marriage preparation" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-marriage-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Catholic Marriage Guide</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  Sacraments
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 14, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  12 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholic Marriage: What the Church Teaches About Holy Matrimony
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Catholic marriage is not simply a religious ceremony — it is a sacrament, a covenant, and a vocation. Understanding what the Church teaches about Holy Matrimony transforms how we see marriage, family, and love itself.
              </p>
            </header>

            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                In a culture that often treats marriage as a contract between two people — dissoluble when inconvenient — the Catholic Church stands as a bold witness to a radically different vision. Marriage, the Church teaches, is a covenant modeled on the love of Christ for His Church: total, faithful, fruitful, and permanent. It is one of the seven sacraments, a channel of grace that sanctifies the spouses and the family they build together.
              </p>

              <p className="text-text leading-relaxed mb-6">
                Whether you're preparing for marriage, already married and wanting to deepen your understanding, or simply curious about what the Church teaches, this guide covers the essential theology, the practical preparation, and the most common questions American Catholics have about Holy Matrimony.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Marriage as a Sacrament
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Catechism of the Catholic Church teaches that "the matrimonial covenant, by which a man and a woman establish between themselves a partnership of the whole of life, is by its nature ordered toward the good of the spouses and the procreation and education of offspring; this covenant between baptized persons has been raised by Christ the Lord to the dignity of a sacrament" (CCC 1601).
              </p>
              <p className="text-text leading-relaxed mb-6">
                What makes Catholic marriage unique is that the spouses themselves are the ministers of the sacrament. The priest or deacon is the Church's official witness, but the couple confers the sacrament on each other through their free consent. This is why the exchange of vows — not the blessing of the priest — is the essential act of the sacrament.
              </p>
              <p className="text-text leading-relaxed mb-6">
                As a sacrament, marriage is a channel of grace. The couple receives the grace they need to love each other as Christ loves the Church — sacrificially, faithfully, and fruitfully. This grace does not make marriage easy, but it makes it possible to live out the vows even in difficult times.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Two Properties of Marriage: Unity and Indissolubility
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Church teaches that marriage has two essential properties: unity (it is between one man and one woman) and indissolubility (it cannot be dissolved). These are not arbitrary rules — they flow from the very nature of the marital covenant and from Christ's explicit teaching.
              </p>
              <p className="text-text leading-relaxed mb-6">
                When the Pharisees asked Jesus about divorce, He replied: "What God has joined together, no human being must separate" (Matthew 19:6). He went further: "Whoever divorces his wife and marries another commits adultery against her; and if she divorces her husband and marries another, she commits adultery" (Mark 10:11–12). The Church takes these words seriously.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Indissolubility means that a valid, consummated sacramental marriage between two baptized persons cannot be dissolved by any human authority — not by the couple, not by the state, and not even by the Pope. This is not a burden but a gift: it means that the love spouses pledge to each other is real, permanent, and unconditional.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">The Four Marks of Conjugal Love (CCC 1643–1654)</h3>
                <ul className="list-none text-text space-y-3">
                  <li><strong>Totality</strong> — the spouses give themselves completely to each other, holding nothing back</li>
                  <li><strong>Fidelity</strong> — the spouses are exclusively devoted to each other for life</li>
                  <li><strong>Fruitfulness</strong> — the love of the spouses is open to the gift of children</li>
                  <li><strong>Indissolubility</strong> — the bond is permanent and cannot be broken</li>
                </ul>
              </div>

              <QuizCTA
                title="How is your understanding of Catholic marriage?"
                description="Marriage is a vocation and a sacrament. Take our quiz to discover how deeply you understand the Church's beautiful vision of love and family."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Catholic Marriage Preparation
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Catholic Church requires couples to complete a marriage preparation program before their wedding. This is not bureaucratic red tape — it is the Church's way of helping couples build a strong foundation for their marriage. Studies consistently show that couples who complete marriage preparation have lower divorce rates and higher marital satisfaction.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Marriage preparation typically includes: meeting with the parish priest or deacon several times, completing a pre-marital inventory (such as FOCCUS or PREPARE/ENRICH), attending a Pre-Cana program or marriage preparation weekend, and discussing key topics such as communication, finances, family of origin, children, and faith.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Couples should contact their parish at least six months to a year before their desired wedding date. Some parishes require even more lead time. The earlier you begin, the more time you have for thorough preparation.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Natural Family Planning
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Catholic Church teaches that each act of marital intercourse must remain open to the possibility of new life. This means that artificial contraception — which deliberately closes the marital act to procreation — is contrary to the nature of marriage and the teaching of the Church (Humanae Vitae, 1968).
              </p>
              <p className="text-text leading-relaxed mb-6">
                Natural Family Planning (NFP) is the Church-approved method for spacing or limiting pregnancies. NFP involves observing and charting the woman's natural fertility signs (such as basal body temperature, cervical mucus, and cycle length) to identify fertile and infertile periods. When couples have serious reasons to avoid pregnancy, they abstain from intercourse during the fertile window.
              </p>
              <p className="text-text leading-relaxed mb-6">
                NFP is not the "rhythm method" — modern methods are highly effective (over 99% when used correctly) and are recognized by the World Health Organization. More importantly, NFP respects the dignity of both spouses and the integrity of the marital act. Many couples report that practicing NFP deepens their communication, mutual respect, and intimacy.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Annulment vs. Divorce: What's the Difference?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Many Catholics confuse annulment with divorce. They are fundamentally different. Divorce is a civil declaration that a marriage has ended. The Catholic Church does not grant divorces, and a civil divorce does not dissolve a sacramental marriage in the eyes of the Church.
              </p>
              <p className="text-text leading-relaxed mb-6">
                An annulment (formally called a Declaration of Nullity) is a Church declaration that a valid sacramental marriage never existed — not that the marriage is being dissolved, but that it was never truly formed in the first place. This can happen for various reasons: lack of proper consent, a serious psychological incapacity, a hidden intention against permanence or fidelity, or other impediments.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A Catholic who is civilly divorced but has not received an annulment is still considered married in the eyes of the Church and cannot remarry in the Church. If they wish to remarry, they must first seek an annulment through the diocesan marriage tribunal. The process involves submitting a petition, providing testimony, and having the case reviewed by trained canonists.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Mixed Marriages and Interfaith Weddings
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A "mixed marriage" in Catholic terminology refers to a marriage between a Catholic and a baptized non-Catholic Christian. A "disparity of cult" refers to a marriage between a Catholic and an unbaptized person. Both require special permission from the bishop.
              </p>
              <p className="text-text leading-relaxed mb-6">
                In a mixed marriage, the Catholic party must promise to remain Catholic and to do all in their power to raise the children Catholic. The non-Catholic party must be informed of this promise. The marriage can take place in a Catholic church, and the Catholic party must follow the canonical form (the Church's requirements for a valid marriage).
              </p>
              <p className="text-text leading-relaxed mb-6">
                Interfaith marriages present unique challenges and require careful preparation. Couples should discuss their religious differences honestly before marriage, including how they will practice their faith, how they will raise their children, and how they will handle religious holidays and traditions. Pre-Cana programs often include specific sessions for interfaith couples.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "This is why a man leaves his father and mother and clings to his wife, and the two of them become one body."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Genesis 2:24
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="catholic-marriage-guide" />

            <BlogFAQ faqs={[
              {
                question: "Can a Catholic marry a non-Catholic in the Catholic Church?",
                answer: "Yes, with permission from the bishop. A marriage between a Catholic and a baptized non-Catholic (a mixed marriage) requires a dispensation from the bishop. A marriage between a Catholic and an unbaptized person (disparity of cult) also requires a dispensation. In both cases, the Catholic party must promise to remain Catholic and to raise the children Catholic. The non-Catholic party must be informed of this promise."
              },
              {
                question: "What is required for a valid Catholic marriage?",
                answer: "For a Catholic marriage to be valid, several conditions must be met: both parties must be free to marry (not already validly married), they must give free and full consent (without coercion or serious error), they must intend a permanent and exclusive union open to children, and the marriage must be celebrated in the proper canonical form (before a priest or deacon and two witnesses, unless a dispensation is granted)."
              },
              {
                question: "Can divorced Catholics receive Communion?",
                answer: "A Catholic who is civilly divorced but has not remarried can receive Communion. The act of divorce itself is not a sin, though it may be a serious matter. However, a Catholic who has divorced and remarried without an annulment is in an irregular situation and cannot receive Communion, as they are considered to be living in an objective state of adultery according to Church teaching."
              },
              {
                question: "How long does the annulment process take?",
                answer: "The length of the annulment process varies by diocese and the complexity of the case. In the United States, the process typically takes one to two years, though some cases are resolved more quickly. Pope Francis streamlined the process in 2015 with the document Mitis Iudex Dominus Iesus, which introduced a shorter process for cases where the nullity is evident."
              },
              {
                question: "Is it a sin to use artificial contraception?",
                answer: "Yes, according to Catholic teaching. The Church teaches that artificial contraception is intrinsically wrong because it deliberately separates the unitive and procreative dimensions of the marital act. This teaching is set forth in Pope Paul VI's encyclical Humanae Vitae (1968) and reaffirmed by subsequent popes. The Church proposes Natural Family Planning as a morally acceptable alternative for couples with serious reasons to space or limit pregnancies."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Discover How Your Faith Life Is
              </h3>
              <p className="text-text-muted mb-6">
                Take our quiz and receive a personalized assessment of your Catholic journey.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Take the Quiz Now
                </Button>
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
