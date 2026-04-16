import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function SevenDeadlySins() {
  return (
    <>
      <Helmet>
        <title>The 7 Deadly Sins: What They Are and How to Overcome Them | Guide Catholic</title>
        <meta name="description" content="What are the 7 deadly sins? Learn what pride, greed, lust, envy, gluttony, wrath, and sloth really mean in Catholic teaching and how to overcome each one with virtue." />
        <meta name="keywords" content="seven deadly sins, 7 deadly sins catholic, what are the deadly sins, pride greed lust envy gluttony wrath sloth, capital sins" />
        <link rel="canonical" href="https://guidecatholic.com/blog/seven-deadly-sins/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="The 7 Deadly Sins: What They Are and How to Overcome Them"
        description="What are the 7 deadly sins? Learn what pride, greed, lust, envy, gluttony, wrath, and sloth really mean in Catholic teaching and how to overcome each one with virtue."
        url="https://guidecatholic.com/blog/seven-deadly-sins/"
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
              <span className="text-text">The Seven Deadly Sins</span>
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
                  Morality & Life
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  18 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The 7 Deadly Sins: A Complete Catholic Guide
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                The seven deadly sins are not just a list of bad behaviors — they are the root vices that poison the soul and generate every other sin. Understanding them deeply is the first essential step toward lasting spiritual freedom.
              </p>
            </header>

            <div className="aspect-video bg-red-100 rounded-2xl flex items-center justify-center mb-10">
              <Flame className="w-24 h-24 text-red-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Every Catholic learns about the seven deadly sins at some point — but far fewer understand what makes them truly "deadly." They are not called deadly because they are automatically mortal sins. They are called deadly (or "capital," from the Latin <em>caput</em>, meaning "head") because they are root vices — the deep interior dispositions of the soul that, if left unchecked, give birth to a multitude of other sins and drag the soul toward spiritual death.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Catechism of the Catholic Church (CCC 1866) teaches: <em>"Vices can be catalogued in connection with the capital sins which Christian experience has distinguished, following St. John Cassian and St. Gregory the Great. They are called 'capital' because they engender other sins, other vices."</em>
              </p>
              <p className="text-text leading-relaxed mb-6">
                The traditional list was compiled by Pope St. Gregory the Great in the 6th century, drawing on the earlier work of the desert monk Evagrius Ponticus (who had identified eight passions). St. Thomas Aquinas later gave them their definitive theological treatment in the <em>Summa Theologica</em> (I-II, Q. 84), pairing each deadly sin with its opposing virtue and its "daughters" — the specific sins it generates. This structure is what we will follow throughout this guide.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Seven Deadly Sins at a Glance
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-accent/10">
                      <th className="border border-border p-3 text-left font-semibold">Sin</th>
                      <th className="border border-border p-3 text-left font-semibold">Latin Name</th>
                      <th className="border border-border p-3 text-left font-semibold">Opposing Virtue</th>
                      <th className="border border-border p-3 text-left font-semibold">Patron Saint Against It</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-border p-3">Pride</td><td className="border border-border p-3">Superbia</td><td className="border border-border p-3">Humility</td><td className="border border-border p-3">St. Michael the Archangel</td></tr>
                    <tr className="bg-background-muted/30"><td className="border border-border p-3">Greed</td><td className="border border-border p-3">Avaritia</td><td className="border border-border p-3">Generosity</td><td className="border border-border p-3">St. Lawrence</td></tr>
                    <tr><td className="border border-border p-3">Lust</td><td className="border border-border p-3">Luxuria</td><td className="border border-border p-3">Chastity</td><td className="border border-border p-3">St. Joseph</td></tr>
                    <tr className="bg-background-muted/30"><td className="border border-border p-3">Envy</td><td className="border border-border p-3">Invidia</td><td className="border border-border p-3">Charity</td><td className="border border-border p-3">St. John the Apostle</td></tr>
                    <tr><td className="border border-border p-3">Gluttony</td><td className="border border-border p-3">Gula</td><td className="border border-border p-3">Temperance</td><td className="border border-border p-3">St. Charles Borromeo</td></tr>
                    <tr className="bg-background-muted/30"><td className="border border-border p-3">Wrath</td><td className="border border-border p-3">Ira</td><td className="border border-border p-3">Patience / Meekness</td><td className="border border-border p-3">St. Francis de Sales</td></tr>
                    <tr><td className="border border-border p-3">Sloth</td><td className="border border-border p-3">Acedia</td><td className="border border-border p-3">Diligence / Zeal</td><td className="border border-border p-3">St. Bernard of Clairvaux</td></tr>
                  </tbody>
                </table>
              </div>

              {/* 1. Pride */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                <h3 className="font-display text-xl font-bold text-text mb-3">1. Pride (Superbia) — The Root of All Sin</h3>
                <p className="text-text leading-relaxed mb-3">
                  Pride is not merely excessive self-confidence or vanity — it is the disordered love of one's own excellence, the desire to be superior to others and even to God Himself. St. Augustine called it <em>"the love of one's own excellence"</em>, and St. Thomas Aquinas identified it as the most dangerous of all the capital sins because it is the one that first turned a creature against its Creator.
                </p>
                <p className="text-text leading-relaxed mb-3">
                  The sin of pride was the sin of Lucifer: <em>"I will ascend above the heights of the clouds; I will make myself like the Most High"</em> (Isaiah 14:14). It was the sin of Adam and Eve in the Garden, who desired to be "like gods." Pride lies at the origin of every subsequent sin in human history because it enthrones the self in the place that belongs only to God.
                </p>
                <p className="text-text leading-relaxed mb-3">
                  Its "daughters," according to the tradition of Aquinas, include: vainglory, boasting, hypocrisy, ambition, disobedience, and contempt of others.
                </p>
                <p className="text-text leading-relaxed">
                  <strong>Remedy:</strong> <em>Humility</em> — not the false humility of self-deprecation, but the truthful recognition of who we are before God. We are creatures entirely dependent on God for our existence, our gifts, and our goodness. Regular meditation on our mortality, frequent Confession, and daily submission in small things are the practical remedies the saints prescribed.
                </p>
              </div>

              {/* 2. Greed */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                <h3 className="font-display text-xl font-bold text-text mb-3">2. Greed / Avarice (Avaritia)</h3>
                <p className="text-text leading-relaxed mb-3">
                  Greed is the inordinate love of money and material possessions — not the possession of them, but the disordered attachment to them as supreme goods. St. Paul does not say that money is the root of evil; he says <em>"the love of money is a root of all kinds of evils"</em> (1 Tim 6:10). The problem is not wealth itself, but the heart that clings to wealth above all else.
                </p>
                <p className="text-text leading-relaxed mb-3">
                  Greedy persons do not simply have more than they need; they are constitutionally incapable of generosity. They are also prone to injustice — obtaining wealth through dishonest means, underpaying workers, exploiting the vulnerable, or simply refusing to share while others suffer. The Catechism identifies the "desire to amass earthly goods without limit" as one of the chief forms of avarice (CCC 2536).
                </p>
                <p className="text-text leading-relaxed mb-3">
                  Its daughters include: treachery, fraud, falsehood, perjury, violence, hardheartedness toward the poor, and restlessness of soul.
                </p>
                <p className="text-text leading-relaxed">
                  <strong>Remedy:</strong> <em>Generosity and liberality</em> — actively practicing almsgiving, tithing, and sharing. Also the spiritual exercise of detachment: learning to hold created goods lightly, as stewards rather than owners.
                </p>
              </div>

              {/* 3. Lust */}
              <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 mb-6">
                <h3 className="font-display text-xl font-bold text-text mb-3">3. Lust (Luxuria)</h3>
                <p className="text-text leading-relaxed mb-3">
                  Lust is disordered sexual desire — the use of another person (or oneself) as an object of physical pleasure, divorced from the totality of love and the gift of self. The Catechism defines it as a "disordered desire for or inordinate enjoyment of sexual pleasure" (CCC 2351). This disorder attacks the very heart of what human sexuality is meant to be: a total, faithful, free, and fruitful self-gift between a husband and wife in the covenant of marriage.
                </p>
                <p className="text-text leading-relaxed mb-3">
                  Lust is not limited to acts; Jesus specifically taught that <em>"anyone who looks at a woman to lust after her has already committed adultery with her in his heart"</em> (Mt 5:28). This extends the battle against lust to the interior life — the imagination, the will, and the patterns of thought that we cultivate or permit.
                </p>
                <p className="text-text leading-relaxed mb-3">
                  Its daughters include: spiritual blindness (an inability to perceize spiritual goods clearly), rash judgment, inconstancy, self-love, hatred of God (when He is seen as an obstacle to pleasure), attachment to this world, and horror of the next.
                </p>
                <p className="text-text leading-relaxed">
                  <strong>Remedy:</strong> <em>Chastity</em> — a virtue that properly integrates sexuality with love according to one's state in life. Concrete remedies include: guarding the eyes and imagination, avoiding near occasions of sin, regular frequency of the sacraments, physical mortification (particularly fasting), and fostering Marian devotion. St. John Paul II's Theology of the Body is the greatest modern resource on this topic.
                </p>
              </div>

              {/* 4. Envy */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <h3 className="font-display text-xl font-bold text-text mb-3">4. Envy (Invidia)</h3>
                <p className="text-text leading-relaxed mb-3">
                  Envy is distinct from jealousy. Jealousy desires to have what another possesses. Envy goes further: it feels sadness, resentment, or even hatred at another person's good fortune — and may secretly (or actively) wish to see that good diminished or destroyed. The Catechism calls it "a capital sin" and notes that it "can lead to the worst crimes" (CCC 2539).
                </p>
                <p className="text-text leading-relaxed mb-3">
                The book of Wisdom teaches: <em>"By the envy of the devil, death entered the world"</em> (Wis 2:24). It was envy that drove Cain to murder Abel, that moved Joseph's brothers to sell him into slavery, and that ultimately motivated the Pharisees to hand Jesus over to be crucified (Mt 27:18).
                </p>
                <p className="text-text leading-relaxed mb-3">
                  Its daughters include: hatred, detraction (damaging another's reputation without necessity), calumny (lying about another), joy over another's misfortune, and grief over another's prosperity.
                </p>
                <p className="text-text leading-relaxed">
                  <strong>Remedy:</strong> <em>Fraternal charity and gratitude</em> — actively practicing gratitude for one's own blessings and learning to genuinely rejoice in the blessings of others. Meditating on the unique vocation God has given each person (we are not in competition with one another) is particularly powerful.
                </p>
              </div>

              {/* 5. Gluttony */}
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
                <h3 className="font-display text-xl font-bold text-text mb-3">5. Gluttony (Gula)</h3>
                <p className="text-text leading-relaxed mb-3">
                  Gluttony is the excessive indulgence in food, drink, or both, beyond what the body needs for health and reasonable pleasure. It is not simply "eating too much." Medieval theologians identified five distinct forms of gluttony (from the mnemonic <em>Praepropere, Laute, Nimis, Ardenter, Studiose</em>):
                </p>
                <ul className="list-disc list-inside text-text space-y-1 mb-3">
                  <li><strong>Too soon</strong> (eating before the proper time)</li>
                  <li><strong>Too expensively</strong> (demanding overly fine or luxurious food)</li>
                  <li><strong>Too much</strong> (eating beyond what satisfies)</li>
                  <li><strong>Too eagerly</strong> (with excessive focus and emotional investment in eating)</li>
                  <li><strong>Too daintily</strong> (obsessing over the exact preparation or presentation)</li>
                </ul>
                <p className="text-text leading-relaxed mb-3">
                  Note that gluttony also applies to excessive use of alcohol (drunkenness) and, in modern application, to any addictive overindulgence in created pleasures that dulls the spiritual senses. St. Paul warns: <em>"Their god is their belly"</em> (Phil 3:19).
                </p>
                <p className="text-text leading-relaxed">
                  <strong>Remedy:</strong> <em>Temperance and sobriety</em> — practicing fasting and abstinence not merely as obligations but as spiritual exercises that re-order our appetites toward God. Even small daily mortifications at mealtimes train the soul in self-dominion.
                </p>
              </div>

              {/* 6. Wrath */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                <h3 className="font-display text-xl font-bold text-text mb-3">6. Wrath (Ira)</h3>
                <p className="text-text leading-relaxed mb-3">
                  Wrath is disordered, excessive anger — particularly the desire for vengeance or the wish that harm befall those who have offended us. It is crucial to distinguish sinful wrath from righteous anger. Jesus displayed righteous anger when he cleansed the Temple (Jn 2:13-17); God Himself is described throughout Scripture as having righteous anger against sin. Righteous anger is a legitimate emotional response to genuine injustice and is ordered toward correction and justice.
                </p>
                <p className="text-text leading-relaxed mb-3">
                  Sinful wrath, by contrast, is disproportionate, misdirected, persisted in (nurtured into resentment and grudges), or expressed through violence, cruelty, or verbal abuse. St. James warns: <em>"The anger of man does not produce the righteousness of God"</em> (Jas 1:20).
                </p>
                <p className="text-text leading-relaxed mb-3">
                  Its daughters include: quarreling, swelling of the mind, indignation, blasphemy, contumely (insulting others), and clamor (verbal explosions of anger).
                </p>
                <p className="text-text leading-relaxed">
                  <strong>Remedy:</strong> <em>Meekness and patience</em> — learning to pause before reacting, to pray for those who have offended us, and to release grudges in the confessional. St. Francis de Sales, who struggled greatly with anger, is the patron of those battling this vice. He recommended counting to ten, speaking quietly when angry, and not making decisions in the heat of emotion.
                </p>
              </div>

              {/* 7. Sloth */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="font-display text-xl font-bold text-text mb-3">7. Sloth / Acedia (Acedia) — The Most Misunderstood Sin</h3>
                <p className="text-text leading-relaxed mb-3">
                  Sloth is the most misunderstood of the seven deadly sins because it is so often reduced to mere laziness or inactivity. The classical concept of <em>acedia</em> is far more profound and troubling. The Catechism describes it as "sorrow in the face of a spiritual good" (CCC 2094) — a deep spiritual torpor, an interior reluctance and distaste for the things of God because they make demands on us.
                </p>
                <p className="text-text leading-relaxed mb-3">
                  A person suffering from acedia does not simply neglect their prayers out of fatigue. They feel a deep resistance — almost a repugnance — toward prayer, toward growth in virtue, toward their duties as a Christian. The desert fathers, who wrote extensively about acedia, described it as a "noonday demon" — an oppressive spiritual flatness that descends in the middle of the day and drains all motivation for holy things.
                </p>
                <p className="text-text leading-relaxed mb-3">
                  In the modern world, acedia often appears as an endless seeking of distraction and entertainment — streaming, scrolling, gaming — specifically to avoid the interior silence where God speaks. It is not the desire for rest (which is legitimate); it is the flight from the demands of love.
                </p>
                <p className="text-text leading-relaxed mb-3">
                  Its daughters include: wandering of the mind, unease, malice, despair, faint-heartedness, and rancor against spiritual guides.
                </p>
                <p className="text-text leading-relaxed">
                  <strong>Remedy:</strong> <em>Diligence, perseverance, and holy zeal</em> — the commitment to fidelity in small things, especially when feeling no consolation. The saints consistently taught that fidelity must be maintained in spiritual dryness as much as in consolation. A fixed daily prayer schedule (regardless of how one feels) is one of the most powerful antidotes.
                </p>
              </div>

              <QuizCTA
                title="Which of these capital sins do you most struggle with?"
                description="Take our Catholic faith quiz for a deeper look at where you stand and how to grow in virtue through God's grace."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Seven Deadly Sins in Scripture
              </h2>
              <p className="text-text leading-relaxed mb-6">
                While the specific "list of seven" does not appear verbatim in Scripture, every capital sin is thoroughly addressed throughout the Bible. Proverbs 6:16-19 comes closest to a similar list: <em>"There are six things the Lord hates, seven that are an abomination to him: haughty eyes (pride), a lying tongue (deceit proceeding from greed or envy), hands that shed innocent blood (wrath), a heart that devises wicked plans, feet that make haste to run to evil, a false witness who breathes out lies, and one who sows discord among brothers (envy)."</em>
              </p>
              <p className="text-text leading-relaxed mb-6">
                St. Paul's list of works of the flesh in Galatians 5:19-21 also maps closely: <em>"sexual immorality (lust), impurity (lust), debauchery (gluttony/lust), idolatry (pride/greed), sorcery, enmity (wrath), strife (wrath/envy), jealousy (envy), fits of anger (wrath), rivalries, dissensions, divisions, envy (envy), drunkenness (gluttony), orgies (lust), and things like these."</em>
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                How to Actually Overcome the Deadly Sins
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Church has always taught that vices are not overcome by willpower alone — they are conquered by the theological and cardinal virtues, which are themselves gifts of grace. Here is a practical pathway:
              </p>
              <ul className="list-decimal list-inside text-text space-y-4 mb-6">
                <li>
                  <strong>Identify your dominant fault.</strong> Most people have one or two capital sins that are their particular weakness — the one that feeds most of their other sins. Ask your confessor to help you identify it. Knowing your enemy is essential.
                </li>
                <li>
                  <strong>Use the sacraments regularly.</strong> The grace of frequent Confession specifically weakens the hold of habitual sin over time. The Eucharist strengthens the will and inflames charity. Do not wait until you have "cleaned up" to go to Confession — go first.
                </li>
                <li>
                  <strong>Pray for the opposing virtue.</strong> If you struggle with pride, pray daily for humility. Ask the God who is humble of heart (Mt 11:29) to fashion your heart after His own. If you struggle with lust, ask St. Joseph to pray for you.
                </li>
                <li>
                  <strong>Practice small mortifications.</strong> The saints consistently found that small, voluntary penances — refusing a second helping, choosing a less comfortable seat, fasting — train the will in the habit of self-denial and weaken the power of disordered appetites.
                </li>
                <li>
                  <strong>Make a daily examination of conscience.</strong> The Ignatian Examen (a 15-minute daily review of your interior movements and actions) is one of the most powerful tools for detecting and uprooting the capital sins as they appear in daily life.
                </li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10 mb-6">
                <p className="text-text italic text-center leading-relaxed">
                  "Take care of your body as if you were going to live forever, and take care of your soul as if you were going to die tomorrow."
                </p>
                <p className="text-text-muted text-center mt-2">— St. Augustine</p>
              </div>
            </div>

            <RelatedArticles currentSlug="seven-deadly-sins" />

            <BlogFAQ faqs={[
              {
                question: "Are the 7 deadly sins in the Bible?",
                answer: "The specific list is not found verbatim in a single Bible passage, but each sin is thoroughly addressed throughout Scripture. Proverbs 6:16-19 lists 'six things the Lord hates, seven that are an abomination to him,' which closely overlaps. The theological list of seven was developed and refined by the Church Fathers, particularly Evagrius Ponticus, John Cassian, and Pope St. Gregory the Great."
              },
              {
                question: "Are all seven deadly sins mortal sins?",
                answer: "Not automatically. The seven deadly sins are capital vices — root dispositions that lead to sin. Any individual act stemming from them may be mortal or venial depending on the gravity of the matter, the degree of knowledge, and the degree of consent. However, many acts they generate (e.g., adultery from lust, theft from greed) are indeed objectively mortal sins."
              },
              {
                question: "What is the worst of the seven deadly sins?",
                answer: "According to St. Thomas Aquinas, pride is the queen of all vices and the worst of the seven. It is the foundational disorder — the first sin of Lucifer — from which all others ultimately flow. Aquinas writes that pride is the beginning of all sin because it leads a creature to turn away from God as its ultimate end."
              },
              {
                question: "Is anger always a sin?",
                answer: "No. The Catechism distinguishes between righteous anger (a just response to genuine injustice) and sinful wrath (disordered, disproportionate anger aimed at revenge). Jesus showed righteous anger when he cleansed the Temple (John 2:15). St. Paul also says, 'Be angry but do not sin; do not let the sun go down on your anger' (Eph 4:26)."
              },
              {
                question: "What is the difference between sloth and being lazy?",
                answer: "Classical acedia (sloth) is far deeper than ordinary laziness or tiredness. It is specifically a spiritual torpor — a sorrow or resistance in the face of spiritual goods, particularly one's relationship with God and the demands of the spiritual life. A person can be highly productive and energetic in worldly pursuits while simultaneously suffering from mortal acedia in their soul."
              },
              {
                question: "Who compiled the list of seven deadly sins?",
                answer: "The tradition is rooted in the 4th-century desert monk Evagrius Ponticus, who listed eight 'evil thoughts.' St. John Cassian brought his work West. Pope St. Gregory the Great reorganized the list into seven, substituting envy for vainglory and adding sloth. St. Thomas Aquinas provided the definitive theological synthesis in the 13th century."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Where Are You on Your Faith Journey?
              </h3>
              <p className="text-text-muted mb-6">
                Take our free quiz to receive a personalized assessment and practical steps to grow in virtue and overcome sin.
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
