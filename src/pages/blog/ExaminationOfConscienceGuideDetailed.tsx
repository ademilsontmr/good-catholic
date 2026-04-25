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

export default function ExaminationOfConscienceGuideDetailed() {
  return (
    <>
      <Helmet>
        <title>Examination of Conscience: Complete Catholic Guide Before Confession | Guide Catholic</title>
        <meta name="description" content="Complete Catholic examination of conscience for adults — organized by the Ten Commandments and the precepts of the Church. Use this guide to prepare for a thorough, honest Confession." />
        <meta name="keywords" content="examination of conscience catholic, examination of conscience before confession, catholic examination of conscience adults, how to examine conscience, confession preparation" />
        <link rel="canonical" href="https://guidecatholic.com/blog/examination-of-conscience-before-confession/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Examination of Conscience: Complete Catholic Guide Before Confession"
        description="Complete Catholic examination of conscience for adults — organized by the Ten Commandments and the precepts of the Church. Use this guide to prepare for a thorough, honest Confession."
        url="https://guidecatholic.com/blog/examination-of-conscience-before-confession/"
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
              <span className="text-text">Examination of Conscience</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Mass & Sacraments</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />20 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Examination of Conscience: Complete Catholic Guide Before Confession
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                A thorough examination of conscience is the foundation of a good Confession. This complete guide — organized by the Ten Commandments and the precepts of the Church — will help you prepare for an honest, healing encounter with God's mercy.
              </p>
            </header>

            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-amber-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-before-confession">
                Before going to Confession, the Church asks us to examine our conscience — to review our sins honestly in the light of God's truth. This is not meant to be a guilt-inducing exercise but a loving, honest conversation with God about the state of our soul.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-before-confession">
                A good examination of conscience takes 10-15 minutes of quiet prayer. Find a quiet place, ask the Holy Spirit for light and honesty, and work through the questions below. Note the sins you need to confess — their nature and approximately how many times (for serious sins).
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
                <p className="text-text font-semibold mb-2">Prayer Before Examination of Conscience</p>
                <p className="text-text italic text-sm leading-relaxed">
                  Come, Holy Spirit, enlighten my mind and heart. Help me to see myself as God sees me — with honesty and without self-deception. Show me the sins I have committed and the good I have failed to do. Give me true sorrow for my sins and a firm purpose to amend my life. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The First Commandment: I am the Lord your God; you shall have no other gods before me</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6 text-sm">
                <li>Have I doubted or denied my faith in God?</li>
                <li>Have I denied being Catholic out of human respect or fear?</li>
                <li>Have I been involved in the occult, fortune-telling, astrology, tarot cards, or New Age practices?</li>
                <li>Have I consulted psychics or mediums?</li>
                <li>Have I placed excessive trust in horoscopes or superstitions?</li>
                <li>Have I put anything — money, pleasure, career, relationships — before God in my life?</li>
                <li>Have I despaired of God's mercy or presumed on it?</li>
                <li>Have I neglected my faith through laziness or indifference?</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Second Commandment: You shall not take the name of the Lord your God in vain</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6 text-sm">
                <li>Have I used God's name, Jesus's name, or the names of the saints as a curse or exclamation?</li>
                <li>Have I blasphemed — spoken contemptuously of God, the Church, the saints, or sacred things?</li>
                <li>Have I broken a solemn oath or vow made to God?</li>
                <li>Have I made promises to God that I did not keep?</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Third Commandment: Remember to keep holy the Lord's Day</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6 text-sm">
                <li>Have I missed Mass on Sunday or a Holy Day of Obligation without a serious reason?</li>
                <li>Have I arrived late to Mass or left early without a serious reason?</li>
                <li>Have I been distracted or inattentive at Mass through my own fault?</li>
                <li>Have I done unnecessary work on Sunday that could have been done on another day?</li>
                <li>Have I failed to rest and give time to God and family on Sunday?</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Fourth Commandment: Honor your father and your mother</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6 text-sm">
                <li>Have I been disobedient, disrespectful, or unkind to my parents?</li>
                <li>Have I neglected my duty to care for elderly or sick parents?</li>
                <li>Have I been disrespectful to legitimate authority — employers, teachers, civil authorities?</li>
                <li>For parents: Have I neglected my children's physical, emotional, or spiritual needs?</li>
                <li>For parents: Have I failed to teach my children the faith or bring them to Mass?</li>
                <li>For parents: Have I been harsh, unjust, or abusive toward my children?</li>
                <li>Have I been a bad example to those under my care?</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Fifth Commandment: You shall not kill</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6 text-sm">
                <li>Have I physically harmed anyone?</li>
                <li>Have I had an abortion or encouraged someone to have one?</li>
                <li>Have I used contraception that acts as an abortifacient?</li>
                <li>Have I harbored hatred, resentment, or the desire for revenge against anyone?</li>
                <li>Have I refused to forgive someone who has wronged me?</li>
                <li>Have I been cruel or abusive — physically, emotionally, or verbally?</li>
                <li>Have I driven recklessly or under the influence of alcohol?</li>
                <li>Have I abused alcohol, drugs, or other substances?</li>
                <li>Have I had thoughts of suicide or self-harm?</li>
                <li>Have I scandalized others — led them into sin by my words or example?</li>
              </ul>

              <QuizCTA
                title="How is your Catholic life?"
                description="Confession is a fresh start. Take our quiz to discover where you are on your Catholic journey."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Sixth and Ninth Commandments: You shall not commit adultery / You shall not covet your neighbor's wife</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6 text-sm">
                <li>Have I engaged in sexual activity outside of marriage?</li>
                <li>Have I been unfaithful to my spouse in thought, word, or deed?</li>
                <li>Have I viewed pornography?</li>
                <li>Have I engaged in masturbation?</li>
                <li>Have I entertained impure thoughts or desires deliberately?</li>
                <li>Have I used contraception (artificial birth control)?</li>
                <li>Have I engaged in homosexual acts?</li>
                <li>Have I dressed immodestly or encouraged others to sin through my appearance?</li>
                <li>Have I engaged in inappropriate flirting or sexual conversation?</li>
                <li>Have I been involved in cohabitation (living with a partner outside of marriage)?</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Seventh and Tenth Commandments: You shall not steal / You shall not covet your neighbor's goods</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6 text-sm">
                <li>Have I stolen anything? Have I returned it or made restitution?</li>
                <li>Have I cheated — in business, on taxes, on exams, in games?</li>
                <li>Have I been dishonest in financial dealings?</li>
                <li>Have I failed to pay a just wage to employees?</li>
                <li>Have I wasted or misused the resources entrusted to me?</li>
                <li>Have I been excessively greedy or materialistic?</li>
                <li>Have I been envious of others' possessions, success, or gifts?</li>
                <li>Have I failed to give to the poor or to the Church according to my means?</li>
                <li>Have I gambled excessively?</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Eighth Commandment: You shall not bear false witness against your neighbor</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6 text-sm">
                <li>Have I lied — in serious matters or habitually?</li>
                <li>Have I gossiped — shared information about others that damaged their reputation?</li>
                <li>Have I revealed secrets that were entrusted to me?</li>
                <li>Have I made rash judgments — assumed the worst about others without evidence?</li>
                <li>Have I been hypocritical — presenting a false image of myself?</li>
                <li>Have I failed to correct false information about someone when I could have?</li>
                <li>Have I spread false information on social media?</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Precepts of the Church</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6 text-sm">
                <li>Have I gone more than a year without receiving the Sacrament of Confession?</li>
                <li>Have I received Holy Communion at least once during the Easter season?</li>
                <li>Have I observed the prescribed days of fasting and abstinence (Ash Wednesday, Good Friday, Fridays of Lent)?</li>
                <li>Have I contributed to the support of the Church according to my means?</li>
                <li>Have I observed the laws of the Church regarding marriage?</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Sins of Omission</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-before-confession">
                Don't forget sins of omission — the good you failed to do. The Confiteor acknowledges sins "in what I have done and in what I have failed to do." Ask yourself:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-6 text-sm">
                <li>Have I failed to pray regularly?</li>
                <li>Have I neglected to read Scripture or grow in my faith?</li>
                <li>Have I failed to help someone in need when I could have?</li>
                <li>Have I failed to speak up for the truth when I should have?</li>
                <li>Have I failed to correct someone who was doing wrong, when it was my duty to do so?</li>
                <li>Have I failed to be a good witness to my faith?</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">After Your Examination</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-before-confession">
                After completing your examination, make a brief Act of Contrition — expressing sorrow for your sins and a firm purpose of amendment. Then go to Confession as soon as possible. Don't let the examination become a substitute for the sacrament.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-before-confession">
                Remember: the purpose of the examination is not to make you feel guilty but to prepare you to receive God's mercy. The more honest your examination, the more complete your healing.
              </LinkedText>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "The examination of conscience is not a psychological exercise but a look of faith fixed on the Lord."
                </p>
                <p className="text-text-muted text-center mt-2">— Pope John Paul II</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "How long should an examination of conscience take?", answer: "A thorough examination of conscience takes about 10-15 minutes. You don't need to spend hours on it — the goal is honest, prayerful reflection, not exhaustive analysis. If you examine your conscience regularly (daily or weekly), each examination will be shorter because you are reviewing a shorter period of time." },
              { question: "Do I need to confess every sin I remember?", answer: "You must confess all mortal sins by kind and number. Venial sins should also be confessed, though this is not strictly required. If you are unsure whether something is a mortal sin, confess it anyway and let the priest help you discern. You do not need to confess sins you have already confessed in a previous Confession." },
              { question: "What if I can't remember how many times I committed a sin?", answer: "Give your best estimate — 'about five times' or 'many times' or 'habitually.' God does not require mathematical precision. What matters is honest effort. If you genuinely cannot remember the number, say so: 'I'm not sure how many times, but it was frequent.'" },
              { question: "Should I write down my sins before Confession?", answer: "Writing down your sins before Confession can be helpful, especially if you have many to confess or if you tend to forget things under pressure. You can bring the list into the confessional and read from it. After Confession, destroy the list — your sins are forgiven and there is no need to keep a record of them." },
              { question: "What is the difference between mortal and venial sin?", answer: "A mortal sin is a serious offense against God that completely breaks our relationship with Him. Three conditions must be met: serious matter, full knowledge that it is seriously wrong, and free consent. Venial sins are less serious offenses that weaken but do not destroy our relationship with God. Both should be confessed, but mortal sins must be confessed before receiving Communion." },
            ]} />

            <RelatedArticles currentSlug="examination-of-conscience-before-confession" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Is Your Catholic Life?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your sacramental life.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
