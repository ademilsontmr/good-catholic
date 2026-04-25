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

export default function CatholicTeachingOnSameSexMarriage() {
  return (
    <>
      <Helmet>
        <title>Catholic Teaching on Same-Sex Marriage: What the Church Teaches | Guide Catholic</title>
        <meta name="description" content="What does the Catholic Church teach about same-sex marriage? A clear explanation from the Catechism (CCC 2357-2359), natural law, and the Church's understanding of marriage." />
        <meta name="keywords" content="catholic teaching on same sex marriage, catholic church gay marriage, catechism homosexuality, fiducia supplicans, catholic marriage definition, natural law marriage" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-teaching-on-same-sex-marriage/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Catholic Teaching on Same-Sex Marriage: What the Church Teaches"
        description="What does the Catholic Church teach about same-sex marriage? A clear explanation from the Catechism (CCC 2357-2359), natural law, and the Church's understanding of marriage."
        url="https://guidecatholic.com/blog/catholic-teaching-on-same-sex-marriage/"
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
              <span className="text-text">Catholic Teaching on Same-Sex Marriage</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Doctrine & Morality</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />16 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholic Teaching on Same-Sex Marriage: What the Church Teaches
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Catholic Church's teaching on marriage and homosexuality is one of the most discussed — and most misrepresented — positions in contemporary culture. This article presents the authentic teaching of the Church, rooted in Scripture, natural law, and the Catechism.
              </p>
            </header>

            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-same-sex-marriage">
                The Catholic Church's position on same-sex marriage is clear and consistent: marriage, by its very nature, is the union of one man and one woman. This is not merely a religious preference or a cultural tradition — it is a truth rooted in the nature of the human person, in natural law, and in divine revelation. At the same time, the Church calls for genuine love and respect for every person, including those with same-sex attraction.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Catholic Definition of Marriage</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-same-sex-marriage">
                The Catechism of the Catholic Church defines marriage as "the matrimonial covenant, by which a man and a woman establish between themselves a partnership of the whole of life and which is ordered by its nature to the good of the spouses and the procreation and education of offspring" (CCC 1601).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-same-sex-marriage">
                This definition has three essential elements:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>A man and a woman:</strong> The sexual difference between husband and wife is not incidental but essential to marriage. It reflects the complementarity of the sexes — the way in which man and woman are ordered toward each other in a unique way.</li>
                <li><strong>A partnership of the whole of life:</strong> Marriage is permanent and exclusive — a total gift of self that cannot be divided or shared.</li>
                <li><strong>Ordered to the good of the spouses and procreation:</strong> Marriage has two inseparable ends — the mutual good of the spouses (their sanctification and happiness) and the procreation and education of children.</li>
              </ul>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-same-sex-marriage">
                A union between two persons of the same sex cannot fulfill this definition. It lacks the sexual complementarity that is essential to marriage, and it cannot by its nature be ordered to procreation. Therefore, the Church teaches that same-sex unions are not and cannot be marriages, regardless of what civil law may say.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Biblical Foundation</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-same-sex-marriage">
                The biblical foundation for the Church's teaching on marriage begins in Genesis: "Therefore a man leaves his father and his mother and clings to his wife, and they become one flesh" (Genesis 2:24). Jesus himself quotes this passage when asked about marriage: "Have you not read that he who created them from the beginning made them male and female, and said, 'Therefore a man shall leave his father and his mother and hold fast to his wife, and the two shall become one flesh'?" (Matthew 19:4-5).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-same-sex-marriage">
                The New Testament also addresses homosexual acts directly. St. Paul writes in Romans 1:26-27 that homosexual acts are "contrary to nature" — a phrase that connects to the natural law tradition. In 1 Corinthians 6:9-10, he lists those who practice homosexual acts among those who "will not inherit the kingdom of God" — a serious warning that the Church takes seriously.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Catechism Says About Homosexuality</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-same-sex-marriage">
                The Catechism addresses homosexuality in paragraphs 2357-2359. The key points:
              </LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <p className="text-text text-sm leading-relaxed">
                  <strong>CCC 2357:</strong> "Homosexuality refers to relations between men or between women who experience an exclusive or predominant sexual attraction toward persons of the same sex... Basing itself on Sacred Scripture, which presents homosexual acts as acts of grave depravity, tradition has always declared that 'homosexual acts are intrinsically disordered.' They are contrary to the natural law. They close the sexual act to the gift of life. They do not proceed from a genuine affective and sexual complementarity. Under no circumstances can they be approved."
                </p>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <p className="text-text text-sm leading-relaxed">
                  <strong>CCC 2358:</strong> "The number of men and women who have deep-seated homosexual tendencies is not negligible. This inclination, which is objectively disordered, constitutes for most of them a trial. They must be accepted with respect, compassion, and sensitivity. Every sign of unjust discrimination in their regard should be avoided. These persons are called to fulfill God's will in their lives and, if they are Christians, to unite to the sacrifice of the Lord's Cross the difficulties they may encounter from their condition."
                </p>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <p className="text-text text-sm leading-relaxed">
                  <strong>CCC 2359:</strong> "Homosexual persons are called to chastity. By the virtues of self-mastery that teach them inner freedom, at times by the support of disinterested friendship, by prayer and sacramental grace, they can and should gradually and resolutely approach Christian perfection."
                </p>
              </div>

              <QuizCTA
                title="How well do you know Catholic moral teaching?"
                description="Take our faith assessment and receive a personalized guide to understanding what the Church teaches."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Fiducia Supplicans (2023): What It Does and Does Not Say</h2>
              <p className="text-text leading-relaxed mb-6">
                In December 2023, the Vatican's Dicastery for the Doctrine of the Faith published <em>Fiducia Supplicans</em> ("Supplicating Trust"), which permitted priests to offer blessings to couples in "irregular situations," including same-sex couples. This document caused significant confusion and controversy.
              </p>
              <p className="text-text leading-relaxed mb-6">
                It is essential to understand what <em>Fiducia Supplicans</em> does and does not say:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>It does NOT change the Church's teaching on marriage.</strong> The document explicitly states: "The Church's doctrine on marriage has not changed" (§4).</li>
                <li><strong>It does NOT bless same-sex unions as such.</strong> The document states: "It is not intended to bless the union itself, but only the people who together have requested it" (§31).</li>
                <li><strong>It permits a spontaneous, non-liturgical blessing</strong> of individuals who approach a priest asking for God's grace — not a formal blessing of their relationship.</li>
                <li><strong>It explicitly prohibits</strong> any blessing that could be confused with a marriage blessing or that would imply approval of the union (§§29-31).</li>
              </ul>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-same-sex-marriage">
                The document was widely misreported as approving same-sex unions. It does not. The Church's teaching that marriage is exclusively between a man and a woman remains unchanged.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Natural Law: Why Marriage Is What It Is</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-same-sex-marriage">
                The Church's teaching on marriage is not based solely on Scripture or Church authority — it is also grounded in natural law, which is accessible to human reason. Natural law is the moral order written into human nature by God, discoverable by reason.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-same-sex-marriage">
                The natural law argument for marriage as the union of a man and a woman rests on several observations:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Human beings are sexually dimorphic — male and female are complementary in a way that makes procreation possible.</li>
                <li>Children benefit from being raised by their biological mother and father, who provide complementary forms of love and formation.</li>
                <li>The sexual union of a man and a woman is uniquely ordered toward the generation of new human life — a good that transcends the couple and benefits society.</li>
                <li>Marriage as the union of a man and a woman is a universal human institution found in virtually every culture throughout history.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Loving the Person, Upholding the Truth</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-same-sex-marriage">
                The Church's teaching on same-sex marriage is sometimes presented as hateful or discriminatory. This is a misrepresentation. The Church's position is rooted in love — love for the truth about the human person, and love for every individual person.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-same-sex-marriage">
                The Church distinguishes between the person and the act. It does not condemn persons who experience same-sex attraction — it calls them, as it calls all persons, to holiness and to the fullness of human flourishing. It does not approve of homosexual acts, because it believes these acts do not serve the genuine good of the persons involved.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                This is not a comfortable position in contemporary culture. But the Church believes that truth — even difficult truth — is ultimately more loving than comfortable falsehood. As St. John Paul II wrote: "The truth is not always the same as the majority opinion" (<em>Veritatis Splendor</em>, 96).
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "Man and woman have been created, which is to say, willed by God: on the one hand, in perfect equality as human persons; on the other, in their respective beings as man and woman."
                </p>
                <p className="text-text-muted text-center mt-2">— Catechism of the Catholic Church, 369</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "Does the Catholic Church recognize same-sex marriage?", answer: "No. The Catholic Church teaches that marriage is, by its very nature, the union of one man and one woman. This teaching is rooted in Scripture, natural law, and the consistent Tradition of the Church. The Church cannot recognize same-sex unions as marriages, regardless of what civil law may say." },
              { question: "What does the Catechism say about homosexuality?", answer: "The Catechism (CCC 2357-2359) teaches that homosexual acts are 'intrinsically disordered' and 'contrary to the natural law.' At the same time, it calls for persons with homosexual tendencies to be 'accepted with respect, compassion, and sensitivity,' and states that 'every sign of unjust discrimination in their regard should be avoided.' Persons with homosexual tendencies are called to chastity." },
              { question: "Did Fiducia Supplicans change the Church's teaching on same-sex marriage?", answer: "No. Fiducia Supplicans (2023) explicitly states that 'the Church's doctrine on marriage has not changed.' It permitted priests to offer spontaneous, non-liturgical blessings to individuals in irregular situations — not to bless same-sex unions as such. The document explicitly prohibits any blessing that could be confused with a marriage blessing." },
              { question: "Does the Church hate gay people?", answer: "No. The Church's teaching is rooted in love for every person and for the truth about the human person. The Catechism explicitly calls for respect, compassion, and sensitivity toward persons with homosexual tendencies, and condemns unjust discrimination. The Church distinguishes between the person (who is always to be loved) and acts (which may be morally wrong)." },
              { question: "Can a Catholic with same-sex attraction receive the sacraments?", answer: "Yes. A Catholic who experiences same-sex attraction but lives chastely — in accordance with the Church's teaching — can fully participate in the sacramental life of the Church. The Church calls all unmarried persons, regardless of their attractions, to chastity. The struggle to live chastely, united to Christ's cross, can itself be a path to holiness." },
            ]} />

            <RelatedArticles currentSlug="catholic-teaching-on-same-sex-marriage" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to understanding and living the Catholic faith.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
