import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HelpCircle, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function WhatIsOriginalSin() {
  return (
    <>
      <Helmet>
        <title>What Is Original Sin? The Catholic Teaching Explained | Guide Catholic</title>
        <meta name="description" content="What is original sin? Learn the Catholic teaching on the fall of Adam and Eve, the effects of original sin on human nature, and how baptism restores what was lost." />
        <meta name="keywords" content="what is original sin, original sin catholic, adam and eve original sin, effects of original sin, original sin baptism, catechism original sin" />
        <link rel="canonical" href="https://guidecatholic.com/blog/what-is-original-sin-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="What Is Original Sin? The Catholic Teaching Explained"
        description="What is original sin? Learn the Catholic teaching on the fall of Adam and Eve, the effects of original sin on human nature, and how baptism restores what was lost."
        url="https://guidecatholic.com/blog/what-is-original-sin-catholic/"
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
              <span className="text-text">What Is Original Sin?</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                What Is Original Sin? The Catholic Teaching Explained
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Why is there suffering in the world? Why do human beings tend toward selfishness even when they want to be good? Why does death exist? The Catholic Church's answer to these questions begins with the doctrine of original sin — one of the most important and most misunderstood teachings in all of Christianity.
              </p>
            </header>
            <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10">
              <HelpCircle className="w-24 h-24 text-amber-600" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-original-sin-catholic">
                Original sin is not simply the first sin ever committed — it is a condition inherited by every human being as a consequence of that first sin. The Catechism of the Catholic Church defines it as "the sin contracted, not committed — a condition rather than an act" (CCC 404). Understanding this distinction is essential to understanding what the Church actually teaches.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is Original Sin? (CCC 396–421)</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-original-sin-catholic">
                The Catechism teaches that God created the first human beings — Adam and Eve — in a state of original holiness and justice. They were endowed with sanctifying grace, with harmony between body and soul, with freedom from suffering and death, and with a special friendship with God. This original state is sometimes called "original justice" or "original integrity."
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-original-sin-catholic">
                God gave Adam and Eve one prohibition: they were not to eat from the tree of the knowledge of good and evil (Genesis 2:17). This command was not arbitrary — it was an invitation to trust God's wisdom rather than their own judgment, to acknowledge that God, not the creature, is the ultimate arbiter of good and evil.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-original-sin-catholic">
                When they disobeyed — tempted by the serpent's promise that they would "be like God, knowing good and evil" (Genesis 3:5) — they committed the first sin. The Catechism describes this sin as "a sin of pride" (CCC 397): the desire to be autonomous from God, to determine for themselves what is good and evil, to be their own gods.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-original-sin-catholic">
                The consequences were immediate and catastrophic. Adam and Eve lost sanctifying grace, the harmony of their nature was disrupted, they became subject to suffering and death, and their relationship with God was broken. This is what the Church calls "the Fall."
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Fall of Adam and Eve (Genesis 3)</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-original-sin-catholic">
                The account in Genesis 3 is rich with theological meaning. The serpent — identified in Christian tradition with Satan — does not simply tempt Eve to disobey. He first plants doubt: "Did God really say...?" (Genesis 3:1). Then he contradicts God directly: "You will not die" (Genesis 3:4). Finally, he offers a counterfeit promise: "You will be like God" (Genesis 3:5).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-original-sin-catholic">
                The Catechism notes that the temptation was to distrust God's goodness — to believe that God was withholding something good from them, that obedience to God was a limitation rather than a gift (CCC 397). This distrust is the root of all sin: the belief that we know better than God what is good for us.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-original-sin-catholic">
                After the Fall, God does not abandon Adam and Eve. He seeks them out ("Where are you?" — Genesis 3:9), pronounces judgment on the serpent, and gives the first promise of redemption: "I will put enmity between you and the woman, and between your offspring and hers; he will crush your head" (Genesis 3:15). This verse — the Protoevangelium, or "first gospel" — is understood by the Church as the first announcement of Christ and Mary.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Effects of Original Sin</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-original-sin-catholic">
                The Catechism lists the effects of original sin on human nature (CCC 405–409):
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Loss of sanctifying grace.</strong> The most fundamental effect: the soul is deprived of the divine life that God had given to Adam and Eve. Human beings are no longer in the state of friendship with God that was their original condition.</li>
                <li><strong>Concupiscence.</strong> The harmony between reason and the passions is disrupted. Human beings now experience a tendency toward sin — an inclination to prefer lower goods over higher ones, to choose pleasure over virtue, self over God. This tendency is called concupiscence. It is not itself a sin, but it is the source of temptation.</li>
                <li><strong>Suffering and death.</strong> Physical suffering and death, which were not part of God's original plan for humanity, enter the world as consequences of sin. "Through one man sin entered the world, and through sin, death" (Romans 5:12).</li>
                <li><strong>Darkening of the intellect.</strong> The human mind, while retaining its natural capacity for reason, is weakened in its ability to know truth clearly — especially moral and religious truth.</li>
                <li><strong>Weakening of the will.</strong> The human will, while retaining its freedom, is weakened in its ability to choose the good consistently. As Saint Paul writes: "I do not do the good I want, but the evil I do not want is what I do" (Romans 7:19).</li>
              </ul>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your knowledge of Catholic doctrine and salvation."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How Original Sin Is Transmitted</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-original-sin-catholic">
                The Catechism teaches that original sin is transmitted to all human beings "by propagation, not by imitation" (CCC 419). This means it is not transmitted by the bad example of Adam and Eve, but by the very fact of being born human — by belonging to the human family that Adam heads.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-original-sin-catholic">
                The Council of Trent (1546) defined that original sin is transmitted by generation — that is, by natural birth. Every human being, except Jesus Christ and the Virgin Mary, is born in a state of original sin. This is why the Church baptizes infants: not because they have committed personal sins, but because they are born in the condition of original sin and need to be freed from it.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-original-sin-catholic">
                The Catechism acknowledges that the transmission of original sin is a mystery that is difficult to understand, but it is confirmed by the universal experience of human weakness and the universal need for redemption (CCC 404).
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Baptism as the Remedy for Original Sin</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-original-sin-catholic">
                The primary remedy for original sin is Baptism. The Catechism teaches that "by Baptism all sins are forgiven, original sin and all personal sins, as well as all punishment for sin" (CCC 1263). Through Baptism, the soul receives sanctifying grace, is incorporated into Christ and His Church, and is freed from the dominion of original sin.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-original-sin-catholic">
                However, Baptism does not remove all the effects of original sin. Concupiscence — the tendency toward sin — remains after Baptism as a source of temptation and a field for spiritual combat. The Catechism notes that this remaining tendency is "left for us to wrestle with" and that it "cannot harm those who do not consent to it" (CCC 1264).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-original-sin-catholic">
                This is why the Christian life is not simply a matter of being baptized and then living as one pleases. Baptism begins a lifelong process of conversion, growth in virtue, and cooperation with grace — a process that the Church calls "sanctification."
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Immaculate Conception: The Exception</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-original-sin-catholic">
                The Catholic Church teaches that the Virgin Mary was preserved from original sin from the very first moment of her conception — a privilege known as the Immaculate Conception. This dogma was defined by Pope Pius IX in 1854.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-original-sin-catholic">
                The Immaculate Conception does not mean that Mary was conceived without a human father (that is the Virgin Birth of Jesus). It means that, by a singular grace of God and in view of the merits of Jesus Christ, Mary was preserved from the stain of original sin that affects all other human beings.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-original-sin-catholic">
                This privilege was fitting, the Church teaches, because Mary was to be the Mother of God — the vessel through which the Son of God would enter the world. It was appropriate that she who would carry the all-holy God should herself be holy from the first moment of her existence.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Original Sin and Evolution</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-original-sin-catholic">
                A common question today is how the doctrine of original sin relates to the scientific theory of evolution. The Church does not require Catholics to interpret Genesis 1–3 as a literal, scientific account of human origins. Pope Pius XII, in his 1950 encyclical Humani Generis, permitted Catholics to hold that the human body evolved from pre-existing matter, while insisting that the soul is directly created by God.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-original-sin-catholic">
                The doctrinal core that must be maintained is that all human beings descend from a common origin (monogenism), that the first human beings were in a state of original holiness, that they sinned and lost that state, and that this loss is transmitted to all their descendants. How exactly this is reconciled with evolutionary biology is a matter of ongoing theological discussion.
              </LinkedText>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "Our heart is restless until it rests in Thee."
                </p>
                <p className="text-text-muted text-center mt-2">— Saint Augustine, Confessions</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "What is original sin according to the Catholic Church?", answer: "Original sin is the condition of spiritual deprivation inherited by every human being as a consequence of the sin of Adam and Eve. It is not a personal sin we commit, but a state we are born into — the loss of sanctifying grace, the disruption of human nature, and the tendency toward sin (concupiscence). The Catechism defines it as 'a sin contracted, not committed' (CCC 404)." },
              { question: "What are the effects of original sin?", answer: "The effects of original sin include: the loss of sanctifying grace (separation from God's life), concupiscence (the tendency toward sin), physical suffering and death, darkening of the intellect, and weakening of the will. These effects are present in every human being from birth, except in Jesus Christ and the Virgin Mary." },
              { question: "How is original sin removed?", answer: "Original sin is removed through the Sacrament of Baptism. Baptism restores sanctifying grace, incorporates the person into Christ and the Church, and frees the soul from the dominion of original sin. However, concupiscence — the tendency toward sin — remains after Baptism as a source of temptation." },
              { question: "Why was Mary exempt from original sin?", answer: "The Catholic Church teaches that the Virgin Mary was preserved from original sin from the first moment of her conception — a privilege called the Immaculate Conception, defined as dogma by Pope Pius IX in 1854. This was a singular grace granted to Mary in view of the merits of Jesus Christ, fitting for the one who would be the Mother of God." },
              { question: "Is original sin compatible with evolution?", answer: "The Church permits Catholics to accept the scientific theory of evolution for the origin of the human body, while insisting that the soul is directly created by God. The doctrinal essentials — a common human origin, an original state of holiness, a real fall, and the transmission of original sin — must be maintained. How exactly these truths relate to evolutionary biology is a matter of ongoing theological discussion." },
            ]} />

            <RelatedArticles currentSlug="what-is-original-sin-catholic" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your knowledge of Catholic doctrine and salvation.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
