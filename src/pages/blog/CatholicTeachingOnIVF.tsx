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

export default function CatholicTeachingOnIVF() {
  return (
    <>
      <Helmet>
        <title>Catholic Teaching on IVF: What the Church Says About In Vitro Fertilization | Guide Catholic</title>
        <meta name="description" content="What does the Catholic Church teach about IVF (in vitro fertilization)? A clear explanation from the Catechism, Donum Vitae, and Dignitas Personae — and what alternatives the Church supports." />
        <meta name="keywords" content="catholic teaching on ivf, catholic church ivf, in vitro fertilization catholic, donum vitae, dignitas personae, catholic infertility, natural family planning infertility" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-teaching-on-ivf/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Catholic Teaching on IVF: What the Church Says About In Vitro Fertilization"
        description="What does the Catholic Church teach about IVF (in vitro fertilization)? A clear explanation from the Catechism, Donum Vitae, and Dignitas Personae — and what alternatives the Church supports."
        url="https://guidecatholic.com/blog/catholic-teaching-on-ivf/"
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
              <span className="text-text">Catholic Teaching on IVF</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />17 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholic Teaching on IVF: What the Church Says About In Vitro Fertilization
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                IVF is one of the most emotionally charged topics in Catholic moral teaching. Many faithful Catholics struggling with infertility have turned to IVF. This guide presents the Church's teaching with clarity and compassion — and explains the alternatives the Church supports.
              </p>
            </header>

            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-ivf">
                The desire for a child is one of the most profound human longings. When a couple struggles with infertility, the pain is real and deep. The Catholic Church acknowledges this suffering with compassion. At the same time, the Church teaches that not every means of achieving a good end is morally acceptable — and that IVF, despite its good intention, involves serious moral problems that cannot be overlooked.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is IVF?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-ivf">
                In vitro fertilization (IVF) is a procedure in which eggs are retrieved from a woman's ovaries and fertilized with sperm in a laboratory. The resulting embryos are then transferred to the woman's uterus. Typically, multiple embryos are created, and those not transferred are either frozen, discarded, or used for research.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Church's Position: IVF Is Not Morally Acceptable</h2>
              <p className="text-text leading-relaxed mb-6">
                The Catholic Church teaches that IVF is morally unacceptable. This position is set out in the Catechism (CCC 2376-2377), the 1987 Vatican instruction <em>Donum Vitae</em> ("The Gift of Life"), and the 2008 instruction <em>Dignitas Personae</em> ("The Dignity of a Person").
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <p className="text-text text-sm leading-relaxed">
                  <strong>CCC 2376:</strong> "Techniques that entail the dissociation of husband and wife, by the intrusion of a person other than the couple (donation of sperm or ovum, surrogate uterus), are gravely immoral. These techniques (heterologous artificial insemination and fertilization) infringe the child's right to be born of a father and mother known to him and bound to each other by marriage; they betray the spouses' 'right to become a father and a mother only through each other.'"
                </p>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <p className="text-text text-sm leading-relaxed">
                  <strong>CCC 2377:</strong> "Techniques involving only the married couple (homologous artificial insemination and fertilization) are perhaps less reprehensible, yet remain morally unacceptable. They dissociate the sexual act from the procreative act. The act which brings the child into existence is no longer an act by which two persons give themselves to one another, but one that 'entrusts the life and identity of the embryo into the power of doctors and biologists and establishes the domination of technology over the origin and destiny of the human person.'"
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Three Core Moral Problems with IVF</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">1. The Destruction of Human Embryos</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-ivf">
                The most serious moral problem with IVF is the routine creation and destruction of human embryos. The Catholic Church teaches that human life begins at fertilization — the moment a new human being comes into existence. An embryo is a human person with full human dignity, not a "potential person" or a "clump of cells."
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                In standard IVF practice, multiple embryos are created. Those not transferred are typically frozen indefinitely, discarded, or used for research. Each of these outcomes involves the death of a human being. <em>Dignitas Personae</em> states: "The freezing of embryos, even when carried out in order to preserve the life of an embryo — cryopreservation — constitutes an offence against the respect due to human beings by exposing them to grave risks of death or harm to their physical integrity" (§18).
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">2. The Separation of Procreation from the Conjugal Act</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-ivf">
                The Church teaches that the generation of new human life must occur within the conjugal act — the sexual union of husband and wife. This is not an arbitrary rule but reflects the profound truth that a child is a gift that flows from the total self-giving of husband and wife, not a product manufactured in a laboratory.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                <em>Donum Vitae</em> states: "The origin of a human person is the result of an act of giving. The one conceived must be the fruit of his parents' love. He cannot be desired or conceived as the product of an intervention of medical or biological techniques; that would be equivalent to reducing him to an object of scientific technology" (II, B, 4).
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">3. The Domination of Technology Over Human Life</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-ivf">
                IVF places the origin of human life in the hands of technicians and laboratories, subjecting it to quality control, selection, and disposal. The Church sees this as a fundamental violation of the dignity of the human person, who is not a product to be manufactured but a gift to be received.
              </LinkedText>

              <QuizCTA
                title="How well do you know Catholic moral teaching?"
                description="Take our faith assessment and receive a personalized guide to understanding what the Church teaches."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What About Couples Who Have Already Used IVF?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-ivf">
                Many faithful Catholics have used IVF before learning of the Church's teaching, or have used it while struggling with the teaching. The Church's response is not condemnation but mercy.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-ivf">
                If you have used IVF, the appropriate response is to bring this to Confession with sincere contrition. God's mercy is infinite, and the Sacrament of Reconciliation is available to all who approach it with a sincere heart.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                A particularly difficult situation arises for couples who have frozen embryos. <em>Dignitas Personae</em> acknowledges this as a "situation of suffering" and states that the Church does not have a simple solution to offer. The document suggests that "prenatal adoption" — having the embryos transferred and carried to term — may be a compassionate response, though it notes this raises its own moral questions. What is clear is that the embryos cannot be discarded or used for research.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Morally Acceptable Alternatives to IVF</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-ivf">
                The Church does not simply say "no" to infertile couples — it proposes morally acceptable alternatives:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>NaProTechnology (Natural Procreative Technology):</strong> A medical approach developed by Dr. Thomas Hilgers that works with the natural cycle to identify and treat the underlying causes of infertility. It has success rates comparable to IVF for many conditions, without the moral problems.</li>
                <li><strong>CREIGHTON Model FertilityCare System:</strong> A method of charting the woman's cycle that can identify fertility problems and guide treatment.</li>
                <li><strong>Medical treatment of underlying conditions:</strong> Many causes of infertility (endometriosis, PCOS, hormonal imbalances, etc.) can be treated medically in ways that are morally acceptable.</li>
                <li><strong>Adoption:</strong> The Church strongly supports adoption as a beautiful way to give a child a family and a family a child. It is not a "second best" option but a genuine vocation.</li>
                <li><strong>Accepting childlessness:</strong> The Church acknowledges that some couples are called to accept childlessness as a cross, and to channel their parental love in other ways — through adoption, foster care, or service to children in need.</li>
              </ul>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "The origin of a human person is the result of an act of giving. The one conceived must be the fruit of his parents' love."
                </p>
                <p className="text-text-muted text-center mt-2">— Donum Vitae, II, B, 4</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "Why does the Catholic Church oppose IVF?", answer: "The Church opposes IVF for three main reasons: (1) It routinely involves the creation and destruction of human embryos, which are human persons with full dignity; (2) It separates procreation from the conjugal act, treating a child as a product rather than a gift; (3) It places the origin of human life under the domination of technology. These concerns are set out in the Catechism (CCC 2376-2377), Donum Vitae (1987), and Dignitas Personae (2008)." },
              { question: "What should a Catholic do if they have already used IVF?", answer: "If you have used IVF before learning of the Church's teaching, or while struggling with it, the appropriate response is to bring this to Confession with sincere contrition. God's mercy is infinite. If you have frozen embryos, speak with a priest about the morally appropriate options — the Church does not have a simple answer but is clear that the embryos cannot be discarded or used for research." },
              { question: "What is NaProTechnology?", answer: "NaProTechnology (Natural Procreative Technology) is a medical approach developed by Dr. Thomas Hilgers that works with the natural cycle to identify and treat the underlying causes of infertility. It has success rates comparable to IVF for many conditions, without the moral problems. It is fully consistent with Catholic moral teaching." },
              { question: "Is surrogacy acceptable for Catholics?", answer: "No. The Church teaches that surrogacy is morally unacceptable. It involves a third party in the generation of new life, separates the child from their biological mother, and treats the child as a product. Dignitas Personae states that surrogacy 'is contrary to the unity of marriage and to the dignity of the procreation of the human person' (§13)." },
              { question: "What does the Church say about frozen embryos?", answer: "The Church teaches that frozen embryos are human persons with full dignity and cannot be discarded or used for research. Dignitas Personae acknowledges this as a 'situation of suffering' without a simple solution. It suggests that 'prenatal adoption' — having the embryos transferred and carried to term — may be a compassionate response, though it notes this raises its own moral questions." },
            ]} />

            <RelatedArticles currentSlug="catholic-teaching-on-ivf" />

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
