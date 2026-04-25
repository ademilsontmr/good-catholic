import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Flame, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function FruitsOfHolySpirit() {
  return (
    <>
      <Helmet>
        <title>The 12 Fruits of the Holy Spirit: Complete Catholic Guide | Guide Catholic</title>
        <meta name="description" content="What are the 12 Fruits of the Holy Spirit? Learn the complete list from Galatians 5, what each fruit means, how they differ from the 7 Gifts, and how to cultivate them in daily life." />
        <meta name="keywords" content="fruits of the holy spirit, 12 fruits of the holy spirit, fruits of holy spirit catholic, galatians 5 fruits, gifts vs fruits holy spirit" />
        <link rel="canonical" href="https://guidecatholic.com/blog/fruits-of-the-holy-spirit/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="The 12 Fruits of the Holy Spirit: Complete Catholic Guide"
        description="What are the 12 Fruits of the Holy Spirit? Learn the complete list from Galatians 5, what each fruit means, how they differ from the 7 Gifts, and how to cultivate them in daily life."
        url="https://guidecatholic.com/blog/fruits-of-the-holy-spirit/"
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
              <span className="text-text">Fruits of the Holy Spirit</span>
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
                  Spirituality
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
                The 12 Fruits of the Holy Spirit: Complete Catholic Guide
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                If the 7 Gifts of the Holy Spirit are the tools the Spirit gives us, the 12 Fruits are the visible results — the harvest of a life lived in union with God. Here is a complete guide to understanding and cultivating every one of them.
              </p>
            </header>

            <div className="aspect-video bg-emerald-100 rounded-2xl flex items-center justify-center mb-10">
              <Flame className="w-24 h-24 text-emerald-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Most Catholics who have been through Confirmation preparation can list the Seven Gifts of the Holy Spirit. Far fewer can name the Twelve Fruits. Yet the fruits may be the more practically important of the two, because they are the <em>visible evidence</em> of the Holy Spirit's presence in a person's life — not just spiritual capacities, but actual qualities of character that others can see and experience.
              </p>
              <p className="text-text leading-relaxed mb-6">
                St. Paul lists the fruits of the Spirit in Galatians 5:22-23: <em>"But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control."</em> St. Paul lists nine in the original Greek. The Latin Vulgate translation by St. Jerome expanded this to twelve — the number recognized by the Catholic Church and confirmed in CCC 1832 — by dividing several of the Greek terms and adding modesty/chastity and continence.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Gifts vs. Fruits — What Is the Difference?
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="fruits-of-the-holy-spirit">
                Understanding the difference between the Gifts and Fruits of the Holy Spirit is essential before exploring each fruit.
              </LinkedText>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-accent/10">
                      <th className="border border-border p-3 text-left font-semibold"></th>
                      <th className="border border-border p-3 text-left font-semibold">7 Gifts of the Holy Spirit</th>
                      <th className="border border-border p-3 text-left font-semibold">12 Fruits of the Holy Spirit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-border p-3 font-semibold">Nature</td><td className="border border-border p-3">Supernatural dispositions / capacities</td><td className="border border-border p-3">Perfections produced by those capacities</td></tr>
                    <tr className="bg-background-muted/30"><td className="border border-border p-3 font-semibold">Role</td><td className="border border-border p-3">Enable the soul to respond promptly to the Spirit</td><td className="border border-border p-3">The visible holiness that results</td></tr>
                    <tr><td className="border border-border p-3 font-semibold">Source text</td><td className="border border-border p-3">Isaiah 11:2-3 (Catholic: 7 gifts listed)</td><td className="border border-border p-3">Galatians 5:22-23 (9 in Greek → 12 in Latin)</td></tr>
                    <tr className="bg-background-muted/30"><td className="border border-border p-3 font-semibold">Analogy</td><td className="border border-border p-3">Seeds planted in soil</td><td className="border border-border p-3">The fruit those seeds produce</td></tr>
                    <tr><td className="border border-border p-3 font-semibold">Visibility</td><td className="border border-border p-3">Interior dispositions</td><td className="border border-border p-3">Often visible to others</td></tr>
                  </tbody>
                </table>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="fruits-of-the-holy-spirit">
                Think of the Gifts as the spiritual root system and the Fruits as the visible harvest. A tree does not produce fruit simply by having good roots — it must be watered, cultivated, and given time to grow. Similarly, the Fruits of the Holy Spirit grow in souls that are nourished by the sacraments, prayer, and cooperation with grace.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-6">
                The 12 Fruits Explained
              </h2>

              {/* 1. Charity */}
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 mb-5">
                <h3 className="font-display text-lg font-bold text-text mb-2">1. Charity (Love — <em>Caritas</em>)</h3>
                <p className="text-text leading-relaxed mb-2">
                  Charity is the queen of all the fruits — and the source from which all others flow. It is not primarily a feeling but a free, deliberate act of the will: choosing the good of another for their own sake, not for what we get in return. St. Paul describes it in 1 Corinthians 13 as the greatest of all gifts, without which every other spiritual achievement is worthless.
                </p>
                <p className="text-text leading-relaxed">
                  This is love ordered in the proper hierarchy: God first, neighbor as self. It manifests as warmth toward enemies, generosity without expectation, and the willingness to sacrifice one's own comfort for another's genuine good.
                </p>
              </div>

              {/* 2. Joy */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-5">
                <h3 className="font-display text-lg font-bold text-text mb-2">2. Joy (<em>Gaudium</em>)</h3>
                <p className="text-text leading-relaxed mb-2">
                  Christian joy is distinct from happiness. Happiness is an emotion that fluctuates with circumstances; joy is a stable disposition of the soul rooted in the certainty of God's love and the hope of eternal life. It exists alongside suffering — even within it. St. Paul wrote from prison: <em>"Rejoice in the Lord always; again I will say, rejoice"</em> (Phil 4:4).
                </p>
                <p className="text-text leading-relaxed">
                  The saints who suffered most — Teresa of Ávila, Padre Pio, Mother Teresa — radiated this joy precisely because it was not circumstantial. It is the fruit of knowing that nothing can separate us from the love of God (Rom 8:38-39).
                </p>
              </div>

              {/* 3. Peace */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-5">
                <h3 className="font-display text-lg font-bold text-text mb-2">3. Peace (<em>Pax</em>)</h3>
                <p className="text-text leading-relaxed mb-2">
                  The biblical concept of peace — <em>shalom</em> in Hebrew, <em>eirene</em> in Greek — is far richer than the absence of conflict. It is a state of interior harmony, of right order within the soul and in relationship with God and neighbor. Jesus gives "a peace the world cannot give" (Jn 14:27) — not the temporary calm of resolved problems, but the deep tranquility of a soul aligned with God's will.
                </p>
                <p className="text-text leading-relaxed">
                  This fruit manifests as freedom from anxiety, the ability to rest in God's providence, and the capacity to be a peacemaker in conflicted environments.
                </p>
              </div>

              {/* 4. Patience */}
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-5">
                <h3 className="font-display text-lg font-bold text-text mb-2">4. Patience (<em>Patientia</em>)</h3>
                <p className="text-text leading-relaxed mb-2">
                  Patience (or longanimity) is the capacity to endure difficulty, suffering, and the failings of others without complaint or loss of peace. It is the virtue of the long game — the willingness to wait for God's timing and to bear with imperfect people and situations without becoming bitter.
                </p>
                <p className="text-text leading-relaxed">
                  St. James writes: <em>"Be patient, therefore, brothers, until the coming of the Lord. See how the farmer waits for the precious fruit of the earth, being patient about it..."</em> (Jas 5:7). Patience is the fruit of souls who have truly surrendered their timeline to God.
                </p>
              </div>

              {/* 5. Kindness */}
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mb-5">
                <h3 className="font-display text-lg font-bold text-text mb-2">5. Kindness (<em>Benignitas</em>)</h3>
                <p className="text-text leading-relaxed mb-2">
                  Kindness is the gentle, warm disposition toward others that expresses itself in thoughtful words and generous actions. It is charity made visible in the small, daily encounters of life — the encouraging word, the attentive listening, the unexpected act of service. It does not require grand gestures; it transforms ordinary moments.
                </p>
                <p className="text-text leading-relaxed">
                  St. Paul includes kindness in his description of love in 1 Cor 13: <em>"Love is patient, love is kind."</em> Bl. Mother Teresa observed: <em>"Kind words can be short and easy to speak, but their echoes are truly endless."</em>
                </p>
              </div>

              {/* 6. Goodness */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-5">
                <h3 className="font-display text-lg font-bold text-text mb-2">6. Goodness (<em>Bonitas</em>)</h3>
                <p className="text-text leading-relaxed mb-2">
                  Goodness goes beyond kindness — it refers to moral integrity, an authentic rectitude of character that permeates all of a person's choices and relationships. A "good" person in the full Christian sense does not merely avoid evil; they are positively, actively oriented toward the good in every dimension of their life.
                </p>
                <p className="text-text leading-relaxed">
                  Jesus identified goodness with God Himself: <em>"No one is good but God alone"</em> (Mk 10:18). The fruit of goodness in a human soul is therefore a participation in divine goodness — a deep character transformation that makes a person increasingly like God.
                </p>
              </div>

              {/* 7. Faithfulness */}
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-5">
                <h3 className="font-display text-lg font-bold text-text mb-2">7. Faithfulness (<em>Fides</em>)</h3>
                <p className="text-text leading-relaxed mb-2">
                  Faithfulness (or fidelity) is reliability, trustworthiness, and perseverance in commitments. A faithful person does what they say, keeps their promises, and can be counted on in times of difficulty. It is the fruit of souls who have fully committed themselves to God and to the duties of their vocation — marriage, priesthood, religious life, or single life.
                </p>
                <p className="text-text leading-relaxed">
                  In the Parable of the Talents, the Master praises his servants with the most beautiful words in Scripture: <em>"Well done, good and faithful servant"</em> (Mt 25:21). Faithfulness is the crown of the Christian life.
                </p>
              </div>

              {/* 8. Gentleness */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-5">
                <h3 className="font-display text-lg font-bold text-text mb-2">8. Gentleness / Meekness (<em>Modestia</em>)</h3>
                <p className="text-text leading-relaxed mb-2">
                  Gentleness is not weakness — it is strength under control. The Greek word <em>prautes</em> (translated "meekness" or "gentleness") describes a wild horse that has been tamed — full power, fully directed. Jesus described Himself as "gentle and lowly in heart" (Mt 11:29), and pronounced "the meek" as those who will "inherit the earth" (Mt 5:5).
                </p>
                <p className="text-text leading-relaxed">
                  This fruit makes a person approachable, non-threatening, and easy to confide in. It is the natural posture of someone who is at peace with themselves because they are at peace with God.
                </p>
              </div>

              {/* 9. Self-Control */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-5">
                <h3 className="font-display text-lg font-bold text-text mb-2">9. Self-Control (<em>Continentia</em>)</h3>
                <p className="text-text leading-relaxed mb-2">
                  Self-control (or continence) is the fruit that governs the appetites and passions — ensuring that desires for pleasure, comfort, and gratification remain ordered servants rather than masters. St. Paul uses the image of an athletic contest: <em>"Every athlete exercises self-control in all things. They do it to receive a perishable wreath, but we an imperishable"</em> (1 Cor 9:25).
                </p>
                <p className="text-text leading-relaxed">
                  This fruit is closely related to temperance (a cardinal virtue) and chastity. It grows directly from regular fasting, custody of the senses, and the deliberate, daily choice to prefer God over comfort.
                </p>
              </div>

              {/* 10. Modesty */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-5">
                <h3 className="font-display text-lg font-bold text-text mb-2">10. Modesty (<em>Pudicitia</em>)</h3>
                <p className="text-text leading-relaxed mb-2">
                  Modesty governs the way we present ourselves to others — in dress, speech, posture, and behavior — with an awareness of human dignity. It resists the culture's pressure to exhibit, display, and perform, choosing instead the quiet integrity of a person who does not need external validation. The CCC teaches: <em>"Modesty protects the intimate center of the person."</em> (CCC 2521)
                </p>
                <p className="text-text leading-relaxed">
                  Modesty in dress is one application, but the fruit encompasses all of life: humility in speech (not bragging), restraint in manner (not drawing unnecessary attention), and discretion in sharing.
                </p>
              </div>

              {/* 11. Chastity */}
              <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 mb-5">
                <h3 className="font-display text-lg font-bold text-text mb-2">11. Chastity (<em>Castitas</em>)</h3>
                <p className="text-text leading-relaxed mb-2">
                  Chastity is the successful integration of sexuality within personhood. It is not the suppression of sexuality but its proper ordering — expressed differently according to one's state in life (within marriage as generous, faithful self-gift; in celibacy as total consecration to God). John Paul II's Theology of the Body presents chastity not as restriction but as the fullest expression of what spousal love is meant to be.
                </p>
                <p className="text-text leading-relaxed">
                  Chastity is a fruit that requires sustained cultivation through prayer, the sacraments, custody of the eyes and heart, and the deliberate avoidance of near occasions of sin.
                </p>
              </div>

              {/* 12. Generosity/Goodness */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-5">
                <h3 className="font-display text-lg font-bold text-text mb-2">12. Generosity / Long-suffering (<em>Longanimitas</em>)</h3>
                <p className="text-text leading-relaxed mb-2">
                  The twelfth fruit (sometimes rendered as "long-suffering" or "generosity" depending on the translation) refers to the capacity to bear sustained suffering, disappointment, or trials without losing hope or turning bitter. It is the fruit of souls who have identified their suffering with Christ's Cross and found in it a source of meaning and love.
                </p>
                <p className="text-text leading-relaxed">
                  This is the fruit that made the martyrs sing, St. Paul rejoice in prison, and countless saints embrace their suffering as a participation in Christ's redemptive work for the world.
                </p>
              </div>

              <QuizCTA
                title="How much of the Holy Spirit's fruit can you see in your life?"
                description="Take our Catholic faith quiz for a personalized look at your spiritual life and how to grow closer to God."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                How to Cultivate the Fruits of the Holy Spirit
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="fruits-of-the-holy-spirit">
                The fruits of the Spirit are not achieved by self-improvement programs. They are supernatural perfections that grow when we create the right conditions and cooperate with grace. Five practical approaches:
              </LinkedText>
              <ul className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>Receive the sacraments frequently.</strong> The Eucharist is the principal source of spiritual growth. Frequent Confession removes the obstacles that prevent the Spirit's fruits from growing. The fruits increase with sanctifying grace — and the sacraments are the privileged channels of that grace.</li>
                <li><strong>Pray with the Holy Spirit each day.</strong> Begin each morning with the Morning Offering and a simple prayer to the Holy Spirit: "Come, Holy Spirit." At night, review which fruits you showed — and which you failed to show — using the Ignatian Examen.</li>
                <li><strong>Practice the opposing virtue of your dominant failing.</strong> If you struggle with patience, deliberately practice waiting. If you struggle with self-control, deliberately fast. Virtue grows by exercise.</li>
                <li><strong>Study the saints who embody each fruit.</strong> Look for role models: St. Francis de Sales for gentleness, Bl. Mother Teresa for kindness and charity, St. Thomas More for faithfulness, St. Thérèse for joy in suffering.</li>
                <li><strong>Ask the Holy Spirit directly.</strong> Pray daily: "Holy Spirit, produce in me the fruit of [charity / peace / patience]." The Spirit is infinitely generous to souls who sincerely ask.</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed">
                  "The fruit of the Spirit is the result of the Spirit filling us. We can't produce it on our own. We can only get out of the way and let God produce it through us."
                </p>
                <p className="text-text-muted text-center mt-2">— Attributed to various spiritual directors</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Why are there 12 Fruits if St. Paul only lists 9?",
                answer: "St. Paul lists 9 in the original Greek of Galatians 5:22-23. St. Jerome's Latin Vulgate translation expanded some of these terms, resulting in a list of 12. The Catholic Church officially recognizes the 12-fruit list in the Catechism (CCC 1832), following the Latin tradition. The additional fruits (modesty, chastity, and long-suffering) are developments of concepts implicit in Paul's original nine."
              },
              {
                question: "What is the difference between the 7 Gifts and the 12 Fruits of the Holy Spirit?",
                answer: "The 7 Gifts (wisdom, understanding, counsel, fortitude, knowledge, piety, fear of the Lord) are supernatural dispositions given by the Holy Spirit at Baptism and strengthened at Confirmation. They are tools that prepare us to respond to God's grace. The 12 Fruits are the results produced when we cooperate with those tools — the visible holiness, charity, peace, and joy that others can observe in a soul living in union with the Spirit."
              },
              {
                question: "Can someone have the fruits of the Spirit without being Catholic?",
                answer: "The Holy Spirit moves where He wills (Jn 3:8), and the Church recognizes that good fruits can be found in individuals of other faiths and even no formal faith. However, theologically speaking, the fruits of the Spirit as supernatural perfections accompanying sanctifying grace are proper to souls in a state of friendship with God. The Church does not limit God's grace to her visible boundaries."
              },
              {
                question: "What is the most important fruit of the Holy Spirit?",
                answer: "Charity (love) is considered the greatest fruit, just as it is the greatest commandment and the greatest of the theological virtues. St. Paul teaches in 1 Corinthians 13 that without love, all other spiritual gifts and fruits are worthless. All the other fruits flow from charity or are ordered toward it."
              }
            ]} />

<RelatedArticles currentSlug="fruits-of-the-holy-spirit" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Where Are You on Your Spiritual Journey?
              </h3>
              <p className="text-text-muted mb-6">
                Take our free Catholic faith quiz and receive a personalized assessment of your spiritual life.
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
