import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function CatholicTeachingOnDrugs() {
  return (
    <>
      <Helmet>
        <title>Catholic Teaching on Drugs: What the Church Says About Substance Abuse | Guide Catholic</title>
        <meta name="description" content="What does the Catholic Church teach about drugs and substance abuse? Learn the distinction between medicinal use and sinful abuse, and the Catholic path to recovery." />
        <meta name="keywords" content="catholic teaching on drugs, drug use sin catholic, substance abuse catholic, addiction catholic church, marijuana catholic, drug addiction recovery catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-teaching-on-drugs/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Catholic Teaching on Drugs: What the Church Says About Substance Abuse"
        description="What does the Catholic Church teach about drugs and substance abuse? Learn the distinction between medicinal use and sinful abuse, and the Catholic path to recovery."
        url="https://guidecatholic.com/blog/catholic-teaching-on-drugs/"
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
              <span className="text-text">Catholic Teaching on Drugs</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Catholic Doctrine</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />13 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholic Teaching on Drugs: What the Church Says About Substance Abuse
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Drug use and addiction are among the most painful realities of modern life. The Catholic Church addresses this issue with both moral clarity and profound compassion — distinguishing between legitimate medical use and sinful abuse, and offering a path of healing rooted in the dignity of the human person.
              </p>
            </header>
            <div className="aspect-video bg-teal-50 rounded-2xl flex items-center justify-center mb-10">
              <Shield className="w-24 h-24 text-teal-600" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The Catholic Church's teaching on drugs is grounded in a single, powerful principle: the human body is a temple of the Holy Spirit (1 Corinthians 6:19–20), and we are stewards — not owners — of our own lives. This means we have a moral obligation to care for our physical and mental health, and that deliberately harming ourselves through substance abuse is a sin against the dignity God has given us.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Catechism Says: CCC 2291</h2>
              <p className="text-text leading-relaxed mb-6">
                The Catechism of the Catholic Church addresses drug use directly in paragraph 2291:
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text italic leading-relaxed">
                  "The use of drugs inflicts very grave damage on human health and life. Their use, except on strictly therapeutic grounds, is a grave moral disorder. The clandestine production of and trafficking in drugs are scandalous practices; they constitute direct co-operation in evil, since they encourage people to practices gravely contrary to the moral law." (CCC 2291)
                </p>
              </div>
              <p className="text-text leading-relaxed mb-6">
                This paragraph is clear and unambiguous. The Church condemns the non-therapeutic use of drugs as a "grave moral disorder" — a serious sin. It also condemns the production and trafficking of drugs as a form of cooperation in evil. The language is strong because the harm is real: drug abuse destroys individuals, families, and communities.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Distinction: Medicinal Use vs. Recreational Abuse</h2>
              <p className="text-text leading-relaxed mb-6">
                The Catechism makes an important distinction: drug use is condemned "except on strictly therapeutic grounds." This means the Church does not condemn the use of medications — including powerful ones like opioids — when they are prescribed by a physician for legitimate medical purposes.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A cancer patient taking morphine for pain relief is not sinning. A person taking prescribed psychiatric medication for depression or anxiety is not sinning. The Church recognizes that medicine is a gift from God, and that caring for our health — including through medication — is a moral good.
              </p>
              <p className="text-text leading-relaxed mb-6">
                What the Church condemns is the use of substances for the purpose of intoxication, escape from reality, or the pursuit of artificial pleasure — especially when this use damages health, impairs reason, or leads to addiction. The key moral categories are:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Therapeutic use:</strong> Permitted and often morally required as part of caring for one's health.</li>
                <li><strong>Recreational use that impairs reason:</strong> Gravely sinful, because reason is the faculty by which we know and love God and make moral choices.</li>
                <li><strong>Use that leads to addiction:</strong> Gravely sinful, because addiction enslaves the will and destroys freedom.</li>
                <li><strong>Use that harms others:</strong> Gravely sinful, because we have obligations to our families and communities.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Drug Abuse Is a Sin: Three Reasons</h2>
              <p className="text-text leading-relaxed mb-6">
                The Church's condemnation of drug abuse is not arbitrary. It flows from three fundamental moral principles:
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>1. The dignity of the body.</strong> The human body is not a machine to be used and discarded. It is the temple of the Holy Spirit (1 Corinthians 6:19) and will be resurrected on the last day. We are obligated to care for it. Deliberately poisoning or degrading the body through drug abuse is a sin against the fifth commandment ("You shall not kill"), which includes the obligation not to harm oneself.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>2. The primacy of reason.</strong> God gave human beings the gift of reason — the capacity to know truth, make moral choices, and relate to God. Drugs that impair or destroy reason attack this fundamental human capacity. The Catechism notes that drunkenness and drug intoxication are sins precisely because they "deprive man of the use of reason" (CCC 2290). A person who is intoxicated cannot pray, cannot make moral decisions, cannot love God or neighbor as they ought.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>3. The danger of addiction.</strong> Addiction is a form of slavery — it enslaves the will, destroys freedom, and makes it nearly impossible to live a virtuous life. The Church teaches that we have an obligation to preserve our freedom, because freedom is the precondition for love and virtue. Deliberately using substances that are known to be addictive is a reckless disregard for one's own freedom and dignity.
              </p>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in virtue and living the Catholic moral life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Question of Marijuana</h2>
              <p className="text-text leading-relaxed mb-6">
                Marijuana (cannabis) is one of the most debated substances in contemporary culture, and many Catholics wonder what the Church teaches about it specifically. The Catechism does not mention marijuana by name, but the principles of CCC 2291 apply directly.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Medical marijuana — used under a physician's supervision for legitimate therapeutic purposes (pain management, nausea from chemotherapy, certain neurological conditions) — falls under the category of therapeutic use and is not condemned by the Church. The key is that it is used medicinally, not for intoxication.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Recreational marijuana use — used for the purpose of getting high, altering consciousness, or escaping reality — is a different matter. It impairs reason, can lead to psychological dependence, and is used precisely for the intoxication the Church condemns. Most moral theologians conclude that recreational marijuana use is at least a venial sin, and habitual use that leads to addiction or significant impairment of reason is a mortal sin.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The fact that marijuana is legal in many jurisdictions does not change its moral status. The Church teaches that legality and morality are not the same thing. Many things that are legal are still sinful; many things that are illegal are morally neutral or even good.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Addiction: Disease and Sin</h2>
              <p className="text-text leading-relaxed mb-6">
                The Church's approach to addiction is nuanced and compassionate. Addiction is recognized as both a disease and a moral condition — and these two dimensions are not contradictory.
              </p>
              <p className="text-text leading-relaxed mb-6">
                As a disease, addiction involves real neurological changes in the brain that impair the addict's ability to choose freely. The Church recognizes that diminished freedom reduces moral culpability. A person in the grip of severe addiction may not be fully responsible for their continued use — their freedom has been compromised by the disease.
              </p>
              <p className="text-text leading-relaxed mb-6">
                At the same time, addiction typically begins with free choices — the initial decision to use drugs, the decision to continue despite warning signs. These initial choices carry moral weight. And even in the midst of addiction, the person retains some degree of freedom and responsibility — the freedom to seek help, to pray, to reach out to the Church and to recovery programs.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Church does not condemn the addict. It condemns the sin of drug abuse while extending mercy and hope to those who suffer from addiction. Pope Francis has spoken movingly about the need for the Church to accompany those struggling with addiction, not to judge them from a distance.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Catholic Path to Recovery</h2>
              <p className="text-text leading-relaxed mb-6">
                For Catholics struggling with addiction, the Church offers a rich array of resources for healing and recovery:
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>The Sacraments.</strong> The Sacrament of Reconciliation (Confession) is a powerful source of healing for those struggling with addiction. Confessing the sin of drug abuse, receiving absolution, and committing to amendment of life is a genuine spiritual turning point. The Eucharist — received in a state of grace — nourishes the soul and strengthens the will. The Anointing of the Sick can be received by those whose addiction has become a serious illness.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Spiritual direction.</strong> A good spiritual director can help a person struggling with addiction understand the spiritual dimensions of their struggle, develop a prayer life, and grow in the virtues — especially temperance and fortitude — that are needed for recovery.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Catholic recovery programs.</strong> Organizations like Calix Society (for Catholics in AA), Courage (for those struggling with sexual addiction), and various Catholic retreat centers offer faith-based recovery programs that integrate the 12 steps with Catholic spirituality.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Narcotics Anonymous and AA.</strong> The 12-step programs, while not explicitly Catholic, are deeply compatible with Catholic spirituality. Their emphasis on surrender to a Higher Power, moral inventory, making amends, and ongoing spiritual growth resonates with Catholic teaching on conversion, penance, and virtue.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Community and prayer.</strong> The support of a faith community — a parish, a prayer group, a small faith-sharing group — is essential for recovery. Isolation feeds addiction; community heals it. Regular prayer, especially the Rosary and the Divine Mercy Chaplet, can be powerful weapons against the temptations of addiction.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "The body is not meant for immorality, but for the Lord, and the Lord for the body... Do you not know that your body is a temple of the Holy Spirit within you, which you have from God? You are not your own; you were bought with a price. So glorify God in your body."
                </p>
                <p className="text-text-muted text-center mt-2">— 1 Corinthians 6:13, 19–20</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "Is drug use always a sin in the Catholic Church?", answer: "No. The Catechism (CCC 2291) distinguishes between therapeutic use — which is permitted and often morally required as part of caring for one's health — and non-therapeutic use, which is condemned as a 'grave moral disorder.' A person taking prescribed medication for a medical condition is not sinning. What the Church condemns is the use of drugs for intoxication, escape, or artificial pleasure, especially when it damages health, impairs reason, or leads to addiction." },
              { question: "What does the Catholic Church say about marijuana?", answer: "The Church does not mention marijuana specifically, but the principles of CCC 2291 apply. Medical marijuana used under a physician's supervision for legitimate therapeutic purposes is not condemned. Recreational marijuana use — used for intoxication — is sinful because it impairs reason and can lead to dependence. The legality of marijuana in many places does not change its moral status; legality and morality are not the same thing." },
              { question: "Is addiction a sin or a disease?", answer: "The Church recognizes addiction as both a disease and a moral condition. As a disease, it involves neurological changes that impair freedom and reduce moral culpability. As a moral condition, it typically begins with free choices that carry moral weight. The Church does not condemn the addict — it condemns the sin of drug abuse while extending mercy and hope to those who suffer from addiction." },
              { question: "How can the sacraments help someone struggling with addiction?", answer: "The Sacrament of Reconciliation (Confession) offers genuine spiritual healing — confessing the sin, receiving absolution, and committing to amendment of life. The Eucharist nourishes the soul and strengthens the will. The Anointing of the Sick can be received when addiction has become a serious illness. Regular reception of the sacraments, combined with prayer and community support, is a powerful foundation for recovery." },
              { question: "Are 12-step programs like AA compatible with Catholic faith?", answer: "Yes. The 12-step programs, while not explicitly Catholic, are deeply compatible with Catholic spirituality. Their emphasis on surrender to a Higher Power, moral inventory, making amends, and ongoing spiritual growth resonates with Catholic teaching on conversion, penance, and virtue. Many Catholics have found that combining 12-step recovery with the sacraments, spiritual direction, and Catholic community provides a comprehensive path to healing." },
            ]} />

            <RelatedArticles currentSlug="catholic-teaching-on-drugs" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in virtue and living the Catholic moral life.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
