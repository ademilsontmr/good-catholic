import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft, Church, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";

export default function SacramentOfMatrimony() {
  return (
    <>
      <Helmet>
        <title>The Sacrament of Matrimony: Catholic Marriage Theology | Guide Catholic</title>
        <meta name="description" content="Discover the theology of Catholic marriage. Learn about sacramental marriage, the vows, indissolubility, and how spouses participate in God's creative love." />
        <meta name="keywords" content="sacrament of matrimony, catholic marriage, sacramental marriage, marriage theology, catholic wedding" />
        <link rel="canonical" href="https://guidecatholic.com/blog/sacrament-of-matrimony/" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
        <ArticleSchema
          title="The Sacrament of Matrimony: Catholic Marriage Theology"
          description="Discover the theology of Catholic marriage. Learn about sacramental marriage, the vows, indissolubility, and how spouses participate in God's creative love."
          url="https://guidecatholic.com/blog/sacrament-of-matrimony/"
        />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Sacrament of Matrimony", url: "https://guidecatholic.com/blog/sacrament-of-matrimony/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog/" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Sacrament of Matrimony</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  Marriage & Family
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
                The Sacrament of Matrimony: Catholic Marriage Theology
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Marriage in the Catholic Church is not merely a contract but a sacrament—a visible sign of God's invisible grace. Understanding the theology of Catholic marriage illuminates why the Church takes this union so seriously and how spouses participate in the divine life.
              </p>
            </header>

            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
              <Heart className="w-24 h-24 text-rose-400/20 absolute top-4 right-4" />
              <Heart className="w-32 h-32 text-rose-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Matrimony is the sacrament uniting baptized man and woman in indissoluble covenant — the couple are ministers; the priest witnesses. Openness to children and fidelity are essential; valid marriage requires free consent, proper form, and no prior bond.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
                Marriage in the Catholic Church is not merely a contract but a sacrament—a visible sign of God's invisible grace. Understanding the theology of Catholic marriage illuminates why the Church takes this union so seriously and how spouses participate in the divine life.
              </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Consent: Making the Vows
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              In a sacramental marriage, the couple themselves are the ministers. The priest or deacon serves as the Church's witness, but the man and woman confer the sacrament upon each other through their free, mutual consent. This consent is expressed in the vows—the promises that establish the marriage covenant.
            </LinkedText>
            <p className="text-text leading-relaxed mb-6 italic bg-accent/10 p-4 rounded-lg">
              "I, [name], take you, [name], to be my wife/husband. I promise to be faithful to you, in good times and in bad, in sickness and in health, to love you and to honor you all the days of my life."
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Two Ends of Marriage
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              Catholic theology identifies two purposes (ends) of marriage, which are equally important and inseparable:
            </LinkedText>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Good of the Spouses (Unitive)
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              Marriage exists for the mutual sanctification and fulfillment of the husband and wife. Through their life together, they support each other's journey toward holiness. The marital embrace itself, when open to life, expresses and strengthens this union.
            </LinkedText>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Transmission of Life (Procreative)
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              Marriage is ordered toward the procreation and education of children. Spouses participate in God's creative work by cooperating with Him in bringing new life into the world and raising children in faith.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Indissolubility: Until Death Do Us Part
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              The Catholic Church teaches that a valid, consummated sacramental marriage is indissoluble—no power on earth can dissolve it. This mirrors Christ's faithful, unbreakable love for His Church. Jesus taught: "What God has joined together, no human being must separate" (Matthew 19:6).
            </LinkedText>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              This teaching challenges modern assumptions but provides a foundation of security for spouses and children. The permanence of marriage enables the total gift of self that love requires.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Marriage in Scripture: From Eden to Cana
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              The Catechism opens its treatment of marriage (CCC 1601-1666) by noting that Scripture begins with the creation of man and woman in God's image and ends with the wedding feast of the Lamb in Revelation. Genesis 2:24 describes a man leaving father and mother to cling to his wife so that the two become one flesh, and Jesus quotes that verse when He is questioned about divorce in Matthew 19.
            </LinkedText>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              The Church also sees significance in the setting of Christ's first public sign, which took place at a wedding in Cana (John 2:1-11). The Catechism reads this as a confirmation of the goodness of marriage and a proclamation that marriage will now be an effective sign of Christ's presence (CCC 1613). St. Paul draws the deepest connection in Ephesians 5:25-32, where the love of husband and wife is a great mystery that refers to Christ and the Church.
            </LinkedText>
            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              What Canon Law Says About the Covenant
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              Canon 1055 describes marriage as a covenant by which a man and a woman establish a partnership of the whole of life, ordered by its nature to the good of the spouses and to the procreation and education of offspring. Between two baptized persons, Christ raised this covenant to the dignity of a sacrament, so a valid marriage contract between baptized people is by that very fact a sacrament.
            </LinkedText>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              Canon 1056 names the two essential properties of every marriage: unity and indissolubility, which acquire a particular firmness in Christian marriage because of the sacrament. Canon 1057 then states that marriage is brought about by the consent of the parties, lawfully expressed between persons who are capable in law, and that no human power can supply that consent. Consent is an act of the will by which each spouse gives and accepts the other in an irrevocable covenant.
            </LinkedText>
            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Canonical Form: Why the Wedding Happens Before a Priest or Deacon
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              For a Catholic, consent ordinarily has to be exchanged according to canonical form: before the local bishop, the pastor, or a priest or deacon delegated by either of them, and in the presence of two witnesses (canon 1108). The Catechism explains that this public form protects the couple's consent, makes the marriage part of the Church's life, and gives the spouses rights and duties recognized by the community (CCC 1631).
            </LinkedText>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              When a Catholic marries a baptized non-Catholic Christian, the diocese grants permission for the mixed marriage; when the other party is not baptized, a dispensation from the impediment of disparity of cult is needed. The bishop can also dispense from canonical form for a serious reason, for example so the wedding can take place in the non-Catholic spouse's church. A Catholic who marries without form or dispensation does not enter a valid marriage in the eyes of the Church.
            </LinkedText>
            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Common Impediments the Parish Checks For
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              Part of preparation is a prenuptial investigation to confirm that nothing in law prevents the marriage. Canons 1083-1094 list the diriment impediments, which make an attempted marriage invalid. The ones that come up most often in American parishes are:
            </LinkedText>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li>A prior marriage bond that has not been declared null (canon 1085)</li>
              <li>Disparity of cult, when one party is not baptized (canon 1086)</li>
              <li>Minimum age: 16 for men and 14 for women in universal law, though U.S. civil law and diocesan policy usually require more (canon 1083)</li>
              <li>Close blood relationship, such as first cousins, which requires a dispensation (canon 1091)</li>
              <li>Holy orders or a public perpetual vow of chastity in a religious institute (canons 1087-1088)</li>
            </ul>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              Couples are usually asked for a recently issued baptismal certificate, because the parish of baptism records any later marriage or annulment in the margin. Many dioceses also use witness affidavits confirming freedom to marry and a premarital inventory such as FOCCUS or PREPARE/ENRICH. Because timelines vary, contact your parish well before reserving a reception venue; many dioceses ask for at least six months of notice.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Domestic Church
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              The family is called the "domestic church" (Lumen Gentium 11). Parents are the primary educators of their children in faith. The home becomes a place of prayer, forgiveness, and growth in virtue. Family life itself is a path to holiness.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Marriage Preparation
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              The Church requires thorough preparation for marriage, including:
            </LinkedText>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li>Pre-Cana or engaged encounter programs</li>
              <li>Meetings with the parish priest or deacon</li>
              <li>Natural Family Planning instruction</li>
              <li>Assessment of freedom to marry (no prior bonds)</li>
              <li>Spiritual preparation and confession</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Living the Sacrament Daily
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              The grace of the sacrament is not received only on the wedding day—it flows continually throughout married life. Couples access this grace through:
            </LinkedText>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li>Prayer together</li>
              <li>Regular Mass attendance</li>
              <li>Frequent confession</li>
              <li>Study of Catholic marriage teaching</li>
              <li>Retreats and marriage enrichment</li>
              <li>Support from other Catholic couples</li>
            </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "What God has joined together, let no one separate." - Mark 10:9
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Husbands, love your wives." - Ephesians 5:25
                </p>
              </div>
              
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Love is patient, love is kind." - 1 Corinthians 13:4
                </p>
            </div>

              </div>

            <QuizCTA />
            <BlogFAQ faqs={[
              {
                question: "Why does the Church require marriage preparation?",
                answer: "Marriage is a lifelong commitment with profound implications. Preparation helps couples understand the theology of marriage, develop communication skills, learn Natural Family Planning, and address potential issues before vows are exchanged. This strengthens marriages and reduces divorce rates."
              },
              {
                question: "What makes a marriage sacramental?",
                answer: "A marriage between two baptized Christians is sacramental by nature. The sacrament is conferred by the spouses' consent, witnessed by the Church. This means God's grace is present to help the couple fulfill their vows. Between a baptized and unbaptized person, it is a valid natural marriage but not sacramental."
              },
              {
                question: "Can Catholic marriages be annulled?",
                answer: "Annulment is not Catholic divorce—it is a declaration that a valid marriage never existed due to some impediment or defect in consent at the time of the wedding. If a tribunal finds that essential requirements were lacking (like freedom, understanding, or openness to children), it may declare the marriage null."
              },
              {
                question: "How can we strengthen our marriage?",
                answer: "Pray together daily, attend Mass weekly, receive confession regularly, read about Catholic marriage, attend marriage enrichment programs, communicate openly about difficulties, serve together in ministry, and seek help early when problems arise. The sacramental grace is there—access it through these practices."
              },
              {
                question: "Can a Catholic get married outside a church building?",
                answer: "Ordinarily a Catholic wedding takes place in a parish church. A Catholic marrying a non-Catholic may request permission for another suitable place, or a dispensation from canonical form so the wedding can happen elsewhere, such as the other spouse's church. Ask your pastor early, since the bishop's office handles these requests."
              },
              {
                question: "Does a Catholic need permission to marry a non-Catholic?",
                answer: "Yes. Marrying a baptized non-Catholic requires permission for a mixed marriage, and marrying an unbaptized person requires a dispensation from disparity of cult. The Catholic party promises to remain faithful and to do all in his or her power to raise the children Catholic, and the other party is informed of that promise."
              },
              {
                question: "Why do we need a new copy of our baptismal certificate?",
                answer: "The parish of baptism records later sacraments, marriages, and declarations of nullity in the margin of the register. A recently issued copy lets the marrying parish confirm that you are free to marry."
              },
            ]} />

<RelatedArticles currentSlug="sacrament-of-matrimony" />

            <ArticleBottomCTA title="Prepare for Your Marriage" description="Take our assessment and receive a personalized marriage preparation guide." />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
