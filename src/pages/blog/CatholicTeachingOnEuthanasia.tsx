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

export default function CatholicTeachingOnEuthanasia() {
  return (
    <>
      <Helmet>
        <title>Catholic Teaching on Euthanasia & Assisted Suicide | Guide Catholic</title>
        <meta name="description" content="What does the Catholic Church teach about euthanasia and assisted suicide? A complete guide from the Catechism (CCC 2276-2279), Evangelium Vitae, and the theology of suffering." />
        <meta name="keywords" content="catholic teaching on euthanasia, catholic church assisted suicide, euthanasia catechism, evangelium vitae, right to die catholic, end of life catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-teaching-on-euthanasia/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Catholic Teaching on Euthanasia & Assisted Suicide"
        description="What does the Catholic Church teach about euthanasia and assisted suicide? A complete guide from the Catechism (CCC 2276-2279), Evangelium Vitae, and the theology of suffering."
        url="https://guidecatholic.com/blog/catholic-teaching-on-euthanasia/"
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
              <span className="text-text">Catholic Teaching on Euthanasia</span>
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
                Catholic Teaching on Euthanasia & Assisted Suicide
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                As euthanasia and assisted suicide become legal in more US states, Catholics need to understand what the Church teaches — and why. The answer is rooted in the dignity of every human life and the meaning of suffering.
              </p>
            </header>

            <div className="aspect-video bg-slate-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-slate-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-euthanasia">
                Euthanasia and assisted suicide are among the most pressing moral issues of our time. As these practices become legal in more states and countries, Catholics are increasingly asked — by family members, by healthcare workers, by society — to take a position. The Catholic Church's position is clear, consistent, and rooted in a profound respect for human life and dignity.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Definitions: What We Are Talking About</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-euthanasia">
                It is important to distinguish between several related but distinct concepts:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Euthanasia:</strong> The deliberate killing of a person by a physician or other party, with the intention of ending suffering. This includes both voluntary euthanasia (at the patient's request) and involuntary euthanasia (without the patient's consent).</li>
                <li><strong>Assisted suicide (physician-assisted suicide):</strong> A physician provides the means (usually a lethal prescription) for a patient to end their own life. The patient administers the lethal dose themselves.</li>
                <li><strong>Palliative care:</strong> Medical care focused on relieving pain and improving quality of life for patients with serious illness. This is morally acceptable and encouraged by the Church.</li>
                <li><strong>Withdrawal of extraordinary means:</strong> Allowing a patient to die naturally by withdrawing burdensome or disproportionate medical treatment. This is morally acceptable under certain conditions.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Catechism Teaches</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-euthanasia">
                The Catechism of the Catholic Church addresses euthanasia directly in paragraphs 2276-2279:
              </LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <p className="text-text text-sm leading-relaxed">
                  <strong>CCC 2277:</strong> "Whatever its motives and means, direct euthanasia consists in putting an end to the lives of handicapped, sick, or dying persons. It is morally unacceptable. Thus an act or omission which, of itself or by intention, causes death in order to eliminate suffering constitutes a murder gravely contrary to the dignity of the human person and to the respect due to the living God, his Creator. The error of judgment into which one can fall in good faith does not change the nature of this murderous act, which must always be forbidden and excluded."
                </p>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <p className="text-text text-sm leading-relaxed">
                  <strong>CCC 2278:</strong> "Discontinuing medical procedures that are burdensome, dangerous, extraordinary, or disproportionate to the expected outcome can be legitimate; it is the refusal of 'over-zealous' treatment. Here one does not will to cause death; one's inability to impede it is merely accepted. The decisions should be made by the patient if he is competent and able or, if not, by those legally entitled to act for the patient, whose reasonable wishes and legitimate interests must always be respected."
                </p>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <p className="text-text text-sm leading-relaxed">
                  <strong>CCC 2279:</strong> "Even if death is thought imminent, the ordinary care owed to a sick person cannot be legitimately interrupted. The use of painkillers to alleviate the sufferings of the dying, even at the risk of shortening their days, can be morally in conformity with human dignity if death is not willed as either an end or a means, but only foreseen and tolerated as inevitable."
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Evangelium Vitae: The Gospel of Life</h2>
              <p className="text-text leading-relaxed mb-6">
                In 1995, Pope John Paul II published <em>Evangelium Vitae</em> ("The Gospel of Life") — one of the most important papal documents of the 20th century. It addresses euthanasia with particular clarity:
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-euthanasia">
                "Euthanasia is a grave violation of the law of God, since it is the deliberate and morally unacceptable killing of a human person. This doctrine is based upon the natural law and upon the written word of God, is transmitted by the Church's Tradition and taught by the ordinary and universal Magisterium" (§65).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-euthanasia">
                John Paul II also addressed the cultural context: "We are facing what can be called a 'culture of death'... a veritable structure of sin" (§12). He called Catholics to resist this culture and to build a "culture of life" — one that affirms the dignity of every human person from conception to natural death.
              </LinkedText>

              <QuizCTA
                title="How well do you know Catholic moral teaching?"
                description="Take our faith assessment and receive a personalized guide to understanding what the Church teaches."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Euthanasia Is Wrong: The Moral Arguments</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">1. Human Life Is Sacred</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-euthanasia">
                The fundamental reason the Church opposes euthanasia is that human life is sacred — it is a gift from God, not a possession that we can dispose of at will. "Human life is sacred because from its beginning it involves the creative action of God and it remains for ever in a special relationship with the Creator, who is its sole end" (CCC 2258).
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">2. Only God Is Lord of Life and Death</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-euthanasia">
                The Church teaches that God alone is the Lord of life and death. "No one can under any circumstance claim for himself the right directly to destroy an innocent human being" (CCC 2258). Euthanasia — even when motivated by compassion — usurps a prerogative that belongs to God alone.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">3. The Meaning of Suffering</h3>
              <p className="text-text leading-relaxed mb-6">
                The Church does not glorify suffering for its own sake. But it does teach that suffering, when united to Christ's cross, can have redemptive value. St. John Paul II wrote in <em>Salvifici Doloris</em>: "In the Cross of Christ not only is the Redemption accomplished through suffering, but also human suffering itself has been redeemed" (§19).
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-euthanasia">
                This does not mean that we should not relieve suffering — the Church strongly supports palliative care and pain management. But it does mean that suffering is not the ultimate evil, and that eliminating a person to eliminate their suffering is not the answer.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">4. The Slippery Slope</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-euthanasia">
                Experience in countries where euthanasia has been legalized (Netherlands, Belgium, Canada) shows a consistent pattern of expansion: from terminal illness to chronic illness, from physical suffering to psychological suffering, from voluntary to involuntary. The Church's concern is not merely theoretical — it is confirmed by the historical record.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is Morally Acceptable at End of Life</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-euthanasia">
                The Church's opposition to euthanasia does not mean that every possible medical intervention must be used to prolong life. The Catechism distinguishes between:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Ordinary means:</strong> Basic care that must always be provided — nutrition, hydration, hygiene, pain relief, human presence and companionship.</li>
                <li><strong>Extraordinary means:</strong> Burdensome, disproportionate, or futile treatments that may be refused or withdrawn without moral fault. The decision must be made by the patient (if competent) or their legitimate representatives.</li>
                <li><strong>Palliative care:</strong> Fully supported by the Church. Pain management, hospice care, and comfort measures are not only permitted but encouraged.</li>
                <li><strong>The principle of double effect:</strong> Administering pain medication that may hasten death as a side effect (not as the intended means) is morally acceptable, provided the intention is to relieve pain, not to cause death (CCC 2279).</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">For Catholics in Healthcare</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-euthanasia">
                Catholic healthcare workers face increasing pressure to participate in euthanasia and assisted suicide in jurisdictions where these are legal. The Church is clear: no Catholic healthcare worker is obligated to participate in euthanasia or assisted suicide, and doing so would be gravely wrong. The right to conscientious objection is a fundamental right that the Church strongly defends.
              </LinkedText>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "Euthanasia is a grave violation of the law of God, since it is the deliberate and morally unacceptable killing of a human person."
                </p>
                <p className="text-text-muted text-center mt-2">— Pope John Paul II, Evangelium Vitae §65</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "What does the Catholic Church teach about euthanasia?", answer: "The Church teaches that euthanasia — the deliberate killing of a person to end their suffering — is 'morally unacceptable' and 'gravely contrary to the dignity of the human person' (CCC 2277). This applies to both voluntary euthanasia (at the patient's request) and assisted suicide. The Church's opposition is rooted in the sacredness of human life and the belief that only God is Lord of life and death." },
              { question: "Is it okay to withdraw life support?", answer: "Yes, under certain conditions. The Catechism (CCC 2278) permits the withdrawal of 'burdensome, dangerous, extraordinary, or disproportionate' medical treatment. This is not euthanasia — it is allowing a person to die naturally. The decision should be made by the patient (if competent) or their legitimate representatives, respecting the patient's reasonable wishes." },
              { question: "Can Catholics use pain medication that might shorten life?", answer: "Yes. The principle of double effect permits the use of pain medication that may hasten death as a side effect, provided the intention is to relieve pain, not to cause death (CCC 2279). This is morally acceptable and is standard practice in Catholic palliative care." },
              { question: "What is the Catholic position on hospice care?", answer: "The Church strongly supports hospice and palliative care. These approaches focus on relieving pain, maintaining dignity, and providing compassionate accompaniment to the dying — without either hastening death (euthanasia) or prolonging dying through futile treatment. Hospice care is fully consistent with Catholic moral teaching." },
              { question: "Can a Catholic healthcare worker participate in assisted suicide?", answer: "No. A Catholic healthcare worker cannot participate in euthanasia or assisted suicide without grave moral fault. The Church strongly defends the right to conscientious objection for healthcare workers who refuse to participate in these procedures." },
            ]} />

            <RelatedArticles currentSlug="catholic-teaching-on-euthanasia" />

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
