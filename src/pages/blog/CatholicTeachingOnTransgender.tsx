import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function CatholicTeachingOnTransgender() {
  return (
    <>
      <Helmet>
        <title>Catholic Teaching on Transgender: What the Church Really Says | Guide Catholic</title>
        <meta name="description" content="What does the Catholic Church teach about transgender identity and gender ideology? A clear explanation rooted in the Catechism, Dignitas Infinita (2024), and the theology of the body." />
        <meta name="keywords" content="catholic teaching on transgender, catholic church transgender, gender ideology catholic, dignitas infinita, catechism gender, theology of the body gender" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-teaching-on-transgender/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Catholic Teaching on Transgender: What the Church Really Says"
        description="What does the Catholic Church teach about transgender identity and gender ideology? A clear explanation rooted in the Catechism, Dignitas Infinita (2024), and the theology of the body."
        url="https://guidecatholic.com/blog/catholic-teaching-on-transgender/"
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
              <span className="text-text">Catholic Teaching on Transgender</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />18 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholic Teaching on Transgender: What the Church Really Says
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Few topics generate more confusion today than gender identity. The Catholic Church's position is clear, compassionate, and rooted in a profound vision of the human person — one that affirms both the dignity of every individual and the truth about human nature.
              </p>
            </header>

            <div className="aspect-video bg-indigo-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-indigo-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                This article presents the authentic teaching of the Catholic Church on gender identity and transgender ideology, drawing from the Catechism of the Catholic Church, the 2024 Vatican Declaration <em>Dignitas Infinita</em>, St. John Paul II's Theology of the Body, and the consistent Tradition of the Church. It is written with charity toward all persons while maintaining fidelity to the truth.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Foundation: Human Dignity and the Body</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-transgender">
                The Catholic Church begins with an affirmation: every human being possesses an inalienable dignity as a person created in the image and likeness of God (Genesis 1:27; CCC 1700-1706). This dignity is not earned, not conditional, and cannot be taken away. It belongs to every person — including those who experience gender dysphoria or identify as transgender.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-transgender">
                At the same time, the Church teaches that the human body is not an accident or a prison for the soul. The body is an integral part of the human person. The Catechism states: "The human body shares in the dignity of 'the image of God': it is a human body precisely because it is animated by a spiritual soul, and it is the whole human person that is intended to become, in the body of Christ, a temple of the Spirit" (CCC 364).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-transgender">
                This is the foundation of the Church's position: the body is not something external to the person that can be arbitrarily modified or redefined. The body — including biological sex — is part of who we are as persons.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Theology of the Body: Sex as Gift</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-transgender">
                St. John Paul II's Theology of the Body (1979-1984) provides the richest Catholic framework for understanding human sexuality and gender. John Paul II taught that the human body, in its masculinity and femininity, is a "theology" — it reveals something about God and about the human person's vocation to love.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-transgender">
                The sexual difference between man and woman is not merely biological but is written into the very structure of the human person. It is a gift — a call to a particular way of being in the world and in relationship. The Catechism states: "Man and woman have been created, which is to say, willed by God: on the one hand, in perfect equality as human persons; on the other, in their respective beings as man and woman" (CCC 369).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-transgender">
                This does not mean that men and women are identical in all respects, or that gender roles are rigidly defined. But it does mean that biological sex — the fact of being male or female — is a fundamental aspect of the human person that cannot be changed by surgery, hormones, or self-identification.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Dignitas Infinita (2024): The Vatican's Clear Statement</h2>
              <p className="text-text leading-relaxed mb-6">
                In April 2024, the Dicastery for the Doctrine of the Faith published <em>Dignitas Infinita</em> ("Infinite Dignity") — a declaration on human dignity approved by Pope Francis. It directly addresses gender ideology and transgender issues.
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-transgender">
                The declaration states: "The Church affirms that human life in all its dimensions, both physical and spiritual, is a gift from God. This gift is to be accepted with gratitude and placed at the service of the good. Desiring a personal self-determination, as gender theory prescribes, apart from this fundamental truth that human life is a gift, amounts to a concession to the age-old temptation to make oneself God, entering into competition with the true God of love revealed to us by Jesus Christ" (§37).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-transgender">
                The document explicitly states that "any sex change intervention" — meaning surgical or hormonal procedures to alter one's biological sex — "risks threatening the unique dignity the person has received from the moment of conception" (§60). It also states that gender theory, "which denies the difference and reciprocity in nature of a man and a woman and envisages a society without sexual differences, thereby eliminating the anthropological basis of the family," is a "grave violation of human dignity" (§55-56).
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Catechism Says</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-transgender">
                The Catechism of the Catholic Church addresses the relevant principles in several places:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>CCC 2333:</strong> "Everyone, man and woman, should acknowledge and accept his sexual identity. Physical, moral, and spiritual difference and complementarity are oriented toward the goods of marriage and the flourishing of family life."</li>
                <li><strong>CCC 2297:</strong> Except for strictly therapeutic medical reasons, "directly intended amputations, mutilations, and sterilizations performed on innocent persons are against the moral law." This principle applies to surgical procedures that alter healthy biological sex characteristics.</li>
                <li><strong>CCC 2393:</strong> "By creating the human being man and woman, God gives personal dignity equally to the one and the other. Each of them, man and woman, should acknowledge and accept his sexual identity."</li>
              </ul>

              <QuizCTA
                title="How well do you know Catholic moral teaching?"
                description="Take our faith assessment and receive a personalized guide to understanding what the Church teaches."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Compassion Without Compromise</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-transgender">
                The Church's rejection of gender ideology does not mean rejection of persons who experience gender dysphoria. The Catechism is explicit: persons who experience same-sex attraction or gender confusion "must be accepted with respect, compassion, and sensitivity. Every sign of unjust discrimination in their regard should be avoided" (CCC 2358, applied by analogy).
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                <em>Dignitas Infinita</em> itself emphasizes: "The Church wishes to offer a word of welcome and accompaniment to all those who, in the course of their lives, find themselves in situations of suffering and confusion regarding their own identity" (§60). The Church does not condemn persons — it proposes a vision of the human person that it believes leads to genuine flourishing.
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-transgender">
                Practically, this means:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Persons experiencing gender dysphoria deserve pastoral care, compassion, and accompaniment — not rejection or mockery.</li>
                <li>The Church does not support bullying, violence, or discrimination against any person.</li>
                <li>At the same time, the Church cannot affirm gender transition procedures or the use of pronouns that deny biological reality, as this would be a form of untruth that does not serve the person's genuine good.</li>
                <li>The Church encourages those experiencing gender dysphoria to seek appropriate psychological and spiritual support, while remaining open to the truth about their God-given identity.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">On Baptism and Sacraments</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-transgender">
                In 2023, the Vatican's Dicastery for the Doctrine of the Faith issued a response to questions about the sacramental status of transgender persons. The key points:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>A transgender person may be baptized if they are not in a situation that creates "scandal or disorientation" in the community.</li>
                <li>A transgender person may serve as a godparent or witness at a wedding only if they do not create "public scandal or disorientation."</li>
                <li>The Church does not change a person's sex in its records based on civil gender changes.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Deeper Question: Who Am I?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-transgender">
                The Catholic Church's response to gender ideology is ultimately not primarily a political or social position — it is a theological one. The Church proposes that the deepest answer to the question "Who am I?" is not found in feelings, self-identification, or social construction, but in the truth of who God created us to be.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-transgender">
                The Church teaches that every person is created male or female, in the image of God, with a body and soul that together constitute the human person. This identity is a gift — not a burden, not a mistake, not something to be overcome. It is the starting point for a life of love, service, and holiness.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-transgender">
                This does not mean that living with gender dysphoria is easy. The Church acknowledges the real suffering that many people experience. But it proposes that the path to healing and wholeness lies not in denying one's biological reality but in integrating it — with God's grace — into a life of authentic human flourishing.
              </LinkedText>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "The human body shares in the dignity of 'the image of God': it is a human body precisely because it is animated by a spiritual soul, and it is the whole human person that is intended to become, in the body of Christ, a temple of the Spirit."
                </p>
                <p className="text-text-muted text-center mt-2">— Catechism of the Catholic Church, 364</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "What does the Catholic Church teach about transgender identity?", answer: "The Church teaches that biological sex — being male or female — is a fundamental aspect of the human person created by God and cannot be changed. The 2024 Vatican declaration Dignitas Infinita states that gender ideology, which denies the difference between man and woman, is a 'grave violation of human dignity.' At the same time, the Church calls for compassion and pastoral care for all persons, including those experiencing gender dysphoria." },
              { question: "What is Dignitas Infinita?", answer: "Dignitas Infinita ('Infinite Dignity') is a declaration on human dignity published by the Vatican's Dicastery for the Doctrine of the Faith in April 2024, approved by Pope Francis. It addresses multiple threats to human dignity, including gender ideology and sex change interventions, stating that these 'risk threatening the unique dignity the person has received from the moment of conception.'" },
              { question: "Can a transgender person receive Catholic sacraments?", answer: "A transgender person can be baptized and receive the sacraments if they are not in a situation that creates public scandal or disorientation in the community. The Church does not change a person's sex in its records based on civil gender changes. Each situation requires pastoral discernment with a priest." },
              { question: "Does the Church condemn people who identify as transgender?", answer: "No. The Church condemns gender ideology as a false understanding of the human person, but it does not condemn individuals. The Catechism calls for 'respect, compassion, and sensitivity' toward all persons. The Church opposes bullying, violence, and unjust discrimination against any person, while maintaining that it cannot affirm gender transition procedures as genuinely beneficial." },
              { question: "What is the Theology of the Body?", answer: "The Theology of the Body is a series of 129 catechetical addresses given by Pope John Paul II between 1979 and 1984. It presents a comprehensive Catholic vision of human sexuality, the body, and love, rooted in Scripture and the Christian tradition. It teaches that the body — including biological sex — is a gift that reveals something about God and about the human person's vocation to love." },
            ]} />

            <RelatedArticles currentSlug="catholic-teaching-on-transgender" />

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
