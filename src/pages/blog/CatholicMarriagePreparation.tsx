import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft, Church, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function CatholicMarriagePreparation() {
  return (
    <>
      <Helmet>
        <title>Catholic Marriage Preparation: A Complete Guide for Engaged Couples | Guide Catholic</title>
        <meta name="description" content="Prepare for Catholic marriage with this complete guide. Learn about Pre-Cana, marriage requirements, Natural Family Planning, and building a sacramental union." />
        <meta name="keywords" content="Catholic marriage preparation, engaged couples, Pre-Cana, marriage requirements, sacramental marriage" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-marriage-preparation/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Catholic Marriage Preparation: A Complete Guide for Engaged Couples"
          description="Prepare for Catholic marriage with this complete guide. Learn about Pre-Cana, marriage requirements, Natural Family Planning, and building a sacramental union."
          url="https://guidecatholic.com/blog/catholic-marriage-preparation/"
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
              <span className="text-text">Catholic Marriage Preparation</span>
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
                  Relationships & Family
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  15 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholic Marriage Preparation: A Complete Guide for Engaged Couples
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Preparing for marriage in the Catholic Church involves more than choosing flowers and venues. It requires spiritual formation, practical preparation, and understanding the sacramental nature of this lifelong commitment.
              </p>
            </header>

            <div className="aspect-video bg-pink-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
              <Heart className="w-24 h-24 text-pink-400/20 absolute top-4 right-4" />
              <Church className="w-32 h-32 text-pink-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Preparing for marriage in the Catholic Church involves more than choosing flowers and venues. It requires spiritual formation, practical preparation, and understanding the sacramental nature of this lifelong commitment.
              </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Starting the Process: Contact Your Parish
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Begin by contacting your parish at least six months before your desired wedding date—earlier if possible. The Church requires time for proper preparation, and popular dates book quickly. Your pastor or deacon will guide you through the required steps.
            </p>
            <p className="text-text leading-relaxed mb-6">
              If you and your fiancé belong to different parishes, you typically marry in the bride's parish (though this is flexible). If neither of you is Catholic, you may marry in the Catholic party's parish or another parish with permission.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Requirements for Valid Catholic Marriage
            </h2>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Freedom to Marry
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Both parties must be free to marry—neither previously married (unless an annulment has been granted), no prior vows of celibacy, and both must be capable of consenting. The Church investigates any previous marriages to ensure freedom.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Baptismal Status
            </h3>
            <p className="text-text leading-relaxed mb-6">
              For a sacramental marriage, both parties must be baptized Christians. If one party is unbaptized, the marriage is valid but not sacramental until the unbaptized person receives baptism. The Church may require baptismal certificates from both parties.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Openness to Children
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Couples must be open to children and willing to raise them in the Catholic faith. This doesn't mean you must have children (though the Church hopes you will), but you cannot actively exclude children from your marriage.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Pre-Cana or Marriage Preparation Program
            </h2>
            <p className="text-text leading-relaxed mb-6">
              All couples must complete a marriage preparation program. Options include:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li><strong>Pre-Cana:</strong> A one-day intensive course offered by many dioceses</li>
              <li><strong>Engaged Encounter:</strong> A weekend retreat experience with other couples</li>
              <li><strong>Sponsor couple programs:</strong> Meeting with an established Catholic couple</li>
              <li><strong>Online options:</strong> Some dioceses accept approved online programs</li>
            </ul>
            <p className="text-text leading-relaxed mb-6">
              These programs cover communication, conflict resolution, finances, sexuality, Natural Family Planning, and the spirituality of marriage. They're not just requirements—they provide valuable tools for married life.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Natural Family Planning (NFP)
            </h2>
            <p className="text-text leading-relaxed mb-6">
              The Church requires couples to learn NFP as part of marriage preparation. Unlike contraception, NFP cooperates with God's design while spacing children if needed. Modern NFP methods (Creighton, Sympto-Thermal, Marquette) are highly effective and scientifically based.
            </p>
            <p className="text-text leading-relaxed mb-6">
              NFP classes typically require 2-3 months to learn properly. Start early in your engagement. Even if you plan to conceive immediately, understanding fertility awareness benefits your marriage and health.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Meeting with the Priest or Deacon
            </h2>
            <p className="text-text leading-relaxed mb-6">
              You'll have several meetings with your officiant to:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li>Complete the prenuptial investigation (FOCCUS or similar assessment)</li>
              <li>Discuss the theology of marriage as sacrament</li>
              <li>Plan the liturgy (readings, music, rituals)</li>
              <li>Address any special circumstances (mixed marriages, previous marriages)</li>
              <li>Receive spiritual guidance for your engagement</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Planning the Wedding Liturgy
            </h2>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Ceremony Options
            </h3>
            <p className="text-text leading-relaxed mb-6">
              You may choose:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li><strong>Mass with Nuptial Blessing:</strong> When both parties are Catholic</li>
              <li><strong>Wedding ceremony without Mass:</strong> When one party is not Catholic, or for pastoral reasons</li>
              <li><strong>Readings:</strong> Choose from approved Scripture options for weddings</li>
              <li><strong>Music:</strong> Must be liturgically appropriate (no secular love songs)</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Decorations and Customs
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Different parishes have different rules about flowers, photography, videography, and decorations. Discuss these early with your officiant to avoid conflicts. Remember: the ceremony is worship, not merely a photo opportunity.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Special Circumstances
            </h2>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Mixed Marriages (Catholic and Non-Catholic)
            </h3>
            <p className="text-text leading-relaxed mb-6">
              The Church permits mixed marriages with a dispensation. The Catholic party must promise to remain Catholic and raise children Catholic. The non-Catholic is informed of these promises but is not required to make them. These marriages require pastoral sensitivity.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Previous Marriages
            </h3>
            <p className="text-text leading-relaxed mb-6">
              If either party was previously married, the Church must investigate whether that marriage was valid. If not, an annulment may be possible. This process takes time—sometimes a year or more—so begin immediately if this applies to you. Do not set a date until the annulment is granted.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Spiritual Preparation
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Beyond the practical requirements, prepare spiritually:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li>Attend Mass together regularly</li>
              <li>Go to confession before the wedding</li>
              <li>Pray together as a couple</li>
              <li>Discuss your shared faith and values</li>
              <li>Read about Catholic marriage (Theology of the Body, Three to Get Married)</li>
              <li>Meet with a spiritual director or mentor couple</li>
            </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "What God has joined together, let no one separate." - Mark 10:9
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Love is patient, love is kind." - 1 Corinthians 13:4
                </p>
              </div>
              
              <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Husbands, love your wives, as Christ loved the Church." - Ephesians 5:25
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="catholic-marriage-preparation" />

            <BlogFAQ faqs={[
              {
                question: "How long does Catholic marriage preparation take?",
                answer: "Typically 6-12 months. The Church requires at least six months to complete preparation programs, meetings, and paperwork. If annulments or other complications are involved, it may take longer. Start the process as soon as you're engaged—don't wait until you've booked the venue."
              },
              {
                question: "Can we get married in a garden or on a beach?",
                answer: "Generally no. The Church requires weddings to take place in a Catholic church or chapel (or another Catholic parish with permission). Outdoor weddings, garden ceremonies, and beach weddings are typically not permitted except in extraordinary circumstances requiring bishop's permission. This reflects the sacred nature of the sacrament."
              },
              {
                question: "What if we're already living together?",
                answer: "Many engaged couples live together before marriage. While this isn't the Church's ideal, it doesn't prevent you from marrying in the Church. Your priest may discuss this with you pastorally, encouraging separate living arrangements before marriage if possible, or at least refraining from sexual intimacy as you prepare for sacramental marriage."
              },
              {
                question: "Can we write our own vows?",
                answer: "The Church provides the essential vows that express the sacrament. You may be able to personalize vows slightly with your officiant's approval, but you cannot replace the canonical form that makes the marriage valid. The standard vows are beautiful and have sustained Catholic marriages for centuries."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Prepare for Your Catholic Marriage
              </h3>
              <p className="text-text-muted mb-6">
                Take our assessment and receive a personalized marriage preparation guide.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Start Assessment
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
