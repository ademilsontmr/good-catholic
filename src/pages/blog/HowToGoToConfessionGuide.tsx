import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Church, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, HowToSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function HowToGoToConfessionGuide() {
  return (
    <>
      <Helmet>
        <title>How to Go to Confession: Complete Step-by-Step Catholic Guide | Guide Catholic</title>
        <meta name="description" content="Complete guide to Catholic Confession — how to prepare, what to say, the Act of Contrition, what happens inside the confessional, and how to make a good confession after years away." />
        <meta name="keywords" content="how to go to confession, catholic confession guide, what to say in confession, act of contrition, confession near me, first confession, returning to confession" />
        <link rel="canonical" href="https://guidecatholic.com/blog/how-to-go-to-confession-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="How to Go to Confession: Complete Step-by-Step Catholic Guide"
        description="Complete guide to Catholic Confession — how to prepare, what to say, the Act of Contrition, what happens inside the confessional, and how to make a good confession after years away."
        url="https://guidecatholic.com/blog/how-to-go-to-confession-guide/"
      />
      <HowToSchema
        name="How to Go to Confession"
        description="A step-by-step guide to making a good Catholic Confession."
        url="https://guidecatholic.com/blog/how-to-go-to-confession-guide/"
        totalTime="PT30M"
        steps={[
          { name: "Examine your conscience", text: "Before going to Confession, spend time reviewing your sins since your last Confession. Use an examination of conscience guide to help you remember sins you may have forgotten." },
          { name: "Have true contrition", text: "Be genuinely sorry for your sins — not just because of fear of punishment, but because sin offends God who loves you. This is called contrition." },
          { name: "Enter the confessional", text: "Enter the confessional and greet the priest. You may confess face-to-face or behind a screen — both are valid." },
          { name: "Make the Sign of the Cross and begin", text: "Say: 'Bless me, Father, for I have sinned. It has been [time] since my last Confession. These are my sins:'" },
          { name: "Confess your sins", text: "Tell the priest your sins clearly and honestly. You do not need to give every detail — just the nature and number of serious sins." },
          { name: "Listen to the priest", text: "The priest may offer advice or ask a question. Listen attentively." },
          { name: "Pray the Act of Contrition", text: "When the priest asks, pray the Act of Contrition aloud." },
          { name: "Receive absolution", text: "The priest pronounces the words of absolution. Your sins are forgiven." },
          { name: "Complete your penance", text: "After leaving the confessional, complete the penance the priest assigned as soon as possible." },
        ]}
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
              <span className="text-text">How to Go to Confession</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />18 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                How to Go to Confession: Complete Step-by-Step Catholic Guide
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Confession is one of the greatest gifts Jesus gave His Church. In the confessional, you encounter not a judge but a physician — and you leave not condemned but healed. This guide will walk you through every step, whether it's your first time or your first time back in years.
              </p>
            </header>

            <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
              <Church className="w-24 h-24 text-violet-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-go-to-confession-guide">
                Many Catholics feel nervous about going to Confession — especially if it has been a long time. This is completely normal. But the nervousness is worth pushing through, because what awaits you on the other side is one of the most profound experiences of God's mercy available to us in this life.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-go-to-confession-guide">
                Jesus gave His apostles the power to forgive sins on the night of His resurrection: "Receive the Holy Spirit. If you forgive the sins of any, they are forgiven them" (John 20:22-23). When a priest pronounces the words of absolution, it is Christ Himself who forgives. The priest is the instrument; Christ is the physician.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Before You Go: Examination of Conscience</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-go-to-confession-guide">
                The first step in making a good Confession is examining your conscience — reviewing your sins since your last Confession. This is not meant to be an exercise in guilt but an honest, loving look at your life in the light of God's truth.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-go-to-confession-guide">
                A good examination of conscience covers the Ten Commandments, the precepts of the Church, and the seven deadly sins. Here are key questions to ask yourself:
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Toward God</h3>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Have I missed Mass on Sunday or a Holy Day of Obligation without a serious reason?</li>
                <li>Have I received Communion in a state of mortal sin?</li>
                <li>Have I gone more than a year without Confession?</li>
                <li>Have I used God's name in vain or blasphemed?</li>
                <li>Have I been involved in the occult, fortune-telling, or New Age practices?</li>
                <li>Have I doubted or denied my faith out of human respect?</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Toward Others</h3>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Have I been disobedient or disrespectful to parents or legitimate authority?</li>
                <li>Have I harmed anyone physically, emotionally, or financially?</li>
                <li>Have I stolen, cheated, or been dishonest?</li>
                <li>Have I lied, gossiped, or damaged someone's reputation?</li>
                <li>Have I harbored hatred, resentment, or refused to forgive?</li>
                <li>Have I failed to help someone in serious need when I could have?</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Toward Myself</h3>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Have I sinned against chastity — in thought, word, or deed?</li>
                <li>Have I viewed pornography?</li>
                <li>Have I abused alcohol, drugs, or other substances?</li>
                <li>Have I been guilty of pride, vanity, or self-centeredness?</li>
                <li>Have I been lazy in my spiritual duties — prayer, Mass, Confession?</li>
              </ul>

              <QuizCTA
                title="How is your Catholic life?"
                description="Confession is a fresh start. Take our quiz to discover where you are on your Catholic journey and how to grow."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Four Conditions for a Good Confession</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-go-to-confession-guide">
                For a Confession to be valid and fruitful, four conditions must be met:
              </LinkedText>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>Examination of conscience</strong> — reviewing your sins honestly before God</li>
                <li><strong>Contrition</strong> — genuine sorrow for your sins, motivated by love of God (perfect contrition) or at least fear of God's just punishment (imperfect contrition)</li>
                <li><strong>Firm purpose of amendment</strong> — a sincere intention to avoid sin and the occasions of sin in the future. This does not mean you will never sin again — it means you genuinely intend to try.</li>
                <li><strong>Confession of sins</strong> — telling your sins to the priest clearly and honestly. You must confess all mortal sins by kind and number. Venial sins should also be confessed, though this is not strictly required.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Step-by-Step: What Happens in the Confessional</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Step 1: Enter and Greet the Priest</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-go-to-confession-guide">
                You may confess face-to-face (sitting across from the priest) or anonymously behind a screen — both are valid and both are available in most confessionals. Choose whichever makes you more comfortable.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-go-to-confession-guide">
                The priest will greet you and may say a brief prayer or Scripture verse to help you enter into the spirit of the sacrament.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Step 2: Begin Your Confession</h3>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <p className="text-text font-semibold mb-2">What to say:</p>
                <p className="text-text italic text-sm">
                  "Bless me, Father, for I have sinned. It has been [time period] since my last Confession. These are my sins: [list your sins]."
                </p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-go-to-confession-guide">
                If it has been a very long time, you can simply say: "Bless me, Father, for I have sinned. It has been many years since my last Confession." The priest will help you from there.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Step 3: Confess Your Sins</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-go-to-confession-guide">
                Tell the priest your sins clearly and honestly. For mortal sins, you need to state the nature of the sin and approximately how many times (e.g., "I missed Mass three times without a good reason"). For venial sins, you can be less precise.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-go-to-confession-guide">
                You do not need to give every detail — just enough for the priest to understand the nature of the sin. You do not need to name other people involved. When you have finished, say: "I am sorry for these and all the sins of my past life."
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Step 4: Listen to the Priest</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-go-to-confession-guide">
                The priest may offer a brief word of counsel, ask a clarifying question, or simply assign your penance. Listen attentively. The priest is acting in persona Christi — in the person of Christ — and his words carry spiritual weight.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Step 5: Pray the Act of Contrition</h3>
              <p className="text-text leading-relaxed mb-4">
                When the priest asks, pray the Act of Contrition aloud:
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <p className="text-text font-semibold mb-2">Act of Contrition</p>
                <p className="text-text italic text-sm leading-relaxed">
                  O my God, I am heartily sorry for having offended Thee, and I detest all my sins because of Thy just punishments, but most of all because they offend Thee, my God, who art all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to sin no more and to avoid the near occasions of sin. Amen.
                </p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-go-to-confession-guide">
                If you don't remember the exact words, you can pray in your own words: "Lord, I am sorry for my sins. I love You and I don't want to offend You. Help me to do better." The sincerity matters more than the exact formula.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Step 6: Receive Absolution</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-go-to-confession-guide">
                The priest will extend his hand over you and pronounce the words of absolution:
              </LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <p className="text-text italic text-sm leading-relaxed">
                  "God, the Father of mercies, through the death and resurrection of his Son has reconciled the world to himself and sent the Holy Spirit among us for the forgiveness of sins; through the ministry of the Church may God give you pardon and peace, and I absolve you from your sins in the name of the Father, and of the Son, and of the Holy Spirit."
                </p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-go-to-confession-guide">
                Respond: "Amen." At this moment, your sins are truly and completely forgiven. The slate is wiped clean. You are reconciled with God and with the Church.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Step 7: Complete Your Penance</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-go-to-confession-guide">
                After leaving the confessional, complete the penance the priest assigned as soon as possible — ideally before leaving the church. The penance is usually a few prayers (Our Father, Hail Mary, etc.) or a small act of charity. It is not a punishment but a medicine — a way of repairing the damage sin has done to your soul and your relationship with God.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Returning After a Long Absence</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-go-to-confession-guide">
                If you have been away from Confession for years — or even decades — do not be afraid. The priest has heard everything. He is not there to judge you but to bring you God's mercy. Many priests say that hearing the Confession of someone returning after a long absence is one of the most moving experiences of their priesthood.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-go-to-confession-guide">
                Simply tell the priest at the beginning: "Father, I have been away from the Church for [time period] and I want to come back." He will guide you through the rest. You do not need to remember every sin from the past years — do your best to recall serious sins, and trust God's mercy for the rest.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-go-to-confession-guide">
                The parable of the Prodigal Son (Luke 15:11-32) is the image of every Confession. The father sees his son "while he was still a long way off" and runs to meet him. God does not wait for you to be perfect before He welcomes you back. He runs.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How Often Should Catholics Go to Confession?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-go-to-confession-guide">
                The Church requires Catholics to confess serious sins at least once a year (the Easter duty). But the saints and spiritual directors recommend much more frequent Confession — monthly at minimum, and weekly for those striving for holiness.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-go-to-confession-guide">
                St. John Paul II went to Confession every week. St. Padre Pio heard Confessions for up to 16 hours a day. The saints understood that Confession is not just for serious sinners — it is a powerful source of grace for everyone, including those who are already trying to live holy lives.
              </LinkedText>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "Go to Confession. Even if you have not committed serious sins, go. Confession is not just for sinners — it is for those who want to become saints."
                </p>
                <p className="text-text-muted text-center mt-2">— St. John Paul II (paraphrase)</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "What if I forget a sin in Confession?", answer: "If you forget a sin in Confession, it is forgiven along with the sins you did confess — as long as you made a sincere effort to examine your conscience. You should mention the forgotten sin in your next Confession. If you deliberately withheld a serious sin, the Confession is invalid and you must confess it (along with the fact that you withheld it) in your next Confession." },
              { question: "Can the priest tell anyone what I confessed?", answer: "Absolutely not. The seal of Confession is absolute and inviolable. A priest who reveals the contents of a Confession is automatically excommunicated. No civil law can compel a priest to break the seal. This is one of the most sacred obligations in the Catholic Church." },
              { question: "Do I have to go to my own parish for Confession?", answer: "No. You can go to Confession at any Catholic parish, with any Catholic priest. You do not need to be registered at the parish. Many Catholics prefer to go to a parish where they are not known, for greater anonymity." },
              { question: "What is the difference between mortal and venial sin?", answer: "A mortal sin is a serious offense against God that completely breaks our relationship with Him. For a sin to be mortal, three conditions must be met: it must be a serious matter, you must know it is seriously wrong, and you must freely choose to do it. Venial sins are less serious offenses that weaken but do not destroy our relationship with God. Mortal sins must be confessed in Confession; venial sins should be confessed but can also be forgiven through other acts of contrition." },
              { question: "What if I am too embarrassed to confess a particular sin?", answer: "This is one of the most common obstacles to Confession. Remember: the priest has heard everything. He is not shocked by your sins. He is there to bring you God's mercy, not to judge you. The embarrassment of confessing a sin is itself a form of penance and humility. Push through it — the peace you will feel afterward is worth it." },
            ]} />

            <RelatedArticles currentSlug="how-to-go-to-confession-guide" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Is Your Catholic Faith?</h3>
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
