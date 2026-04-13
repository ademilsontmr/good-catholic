import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";

export default function WhatIsPurgatory() {
  return (
    <>
      <Helmet>
        <title>What is Purgatory? Complete Guide to Catholic Teaching | Guide Catholic</title>
        <meta name="description" content="Understand the Catholic doctrine of Purgatory — what it is, what the Bible says, how we can help the Holy Souls, and why it is a sign of God's mercy." />
        <meta name="keywords" content="what is purgatory, catholic purgatory, purgatory bible, holy souls purgatory, prayers for the dead, purgatory doctrine" />
        <link rel="canonical" href="https://guidecatholic.com/blog/what-is-purgatory/" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <header className="bg-primary text-button-text py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Cross className="w-5 h-5 text-button-text" />
              </div>
              <span className="font-display text-xl font-bold">Guide Catholic</span>
            </Link>
            <Link to="/quiz-intro"><Button variant="secondary" size="sm">Take the Quiz</Button></Link>
          </div>
        </header>

        <div className="bg-background-muted/50 py-3">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog/page/1/" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">What is Purgatory?</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/page/1/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Doctrine</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 12, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                What is Purgatory? Understanding Catholic Teaching
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Purgatory is not a second chance or a place of punishment — it is the final act of God's mercy, a purifying love that prepares souls for the perfect joy of Heaven.
              </p>
            </header>

            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
              <Cloud className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Of all Catholic doctrines, Purgatory is perhaps the most misunderstood — and the most consoling. Far from being a gloomy doctrine of punishment, Purgatory reveals the depth of God's mercy: He desires every soul to reach Heaven, and He provides a means of final purification for those who die in His grace but are not yet fully ready for the beatific vision.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Catholic Definition of Purgatory</h2>
              <p className="text-text leading-relaxed mb-6">
                The Catechism of the Catholic Church defines Purgatory as follows: "All who die in God's grace and friendship, but still imperfectly purified, are indeed assured of their eternal salvation; but after death they undergo purification, so as to achieve the holiness necessary to enter the joy of heaven" (CCC 1030).
              </p>
              <p className="text-text leading-relaxed mb-6">
                Three key truths emerge from this definition: First, those in Purgatory are already saved — their eternal destiny is Heaven, not Hell. Second, they require purification because nothing impure can enter Heaven (Revelation 21:27). Third, this purification happens after death, before the soul enters the full joy of God's presence.
              </p>

              <QuizCTA
                title="How well do you know Catholic doctrine?"
                description="Take our Catholic life assessment and discover how to deepen your understanding of the faith."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Purgatory in Sacred Scripture</h2>
              <p className="text-text leading-relaxed mb-6">
                While the word "Purgatory" does not appear in the Bible, the concept is clearly present in both the Old and New Testaments:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>2 Maccabees 12:43-46:</strong> Judas Maccabeus collects money to offer sacrifice for fallen soldiers who had sinned, "for if he were not expecting that those who had fallen would rise again, it would have been superfluous and foolish to pray for the dead." This passage explicitly supports prayer for the dead and implies a state where such prayer is beneficial.</li>
                <li><strong>Matthew 12:32:</strong> Jesus speaks of sins that "will not be forgiven either in this age or in the age to come" — implying that some sins can be forgiven in the next life.</li>
                <li><strong>1 Corinthians 3:13-15:</strong> St. Paul describes a fire that tests each person's work: "If it is burned up, the builder will suffer loss but yet will be saved — even though only as one escaping through the flames."</li>
                <li><strong>Matthew 5:26:</strong> Jesus speaks of not getting out of prison "until you have paid the last penny" — a passage many Fathers of the Church interpreted as referring to Purgatory.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Purgatory in the Early Church</h2>
              <p className="text-text leading-relaxed mb-6">
                The practice of praying for the dead is one of the oldest traditions in Christianity. Archaeological evidence from the Roman catacombs shows inscriptions asking for prayers for the deceased dating back to the 2nd and 3rd centuries. The earliest Christian liturgies included prayers for the dead.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Tertullian (c. 200 AD) wrote of offering prayers and sacrifices for the dead on the anniversary of their death. St. Augustine (354-430 AD) prayed fervently for his mother Monica after her death and wrote extensively about the purification of souls after death. St. John Chrysostom (347-407 AD) encouraged the faithful to pray for the dead, saying it was "not in vain."
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What is the Nature of Purgatory's Purification?</h2>
              <p className="text-text leading-relaxed mb-6">
                The Church has defined that Purgatory exists and that souls there can be helped by our prayers, but has not defined the precise nature of the purification. Theologians have proposed various understandings:
              </p>
              <p className="text-text leading-relaxed mb-6">
                The traditional view, associated with St. Thomas Aquinas and many medieval theologians, speaks of a purifying fire — not the fire of Hell, but a cleansing fire of love. Pope Benedict XVI, in his encyclical Spe Salvi, offered a beautiful reflection: "The encounter with [Christ] is the decisive act of judgment. Before his gaze all falsehood melts away... His gaze, the touch of his heart heals us through an undeniably painful transformation 'as through fire.'"
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How Can We Help the Holy Souls?</h2>
              <p className="text-text leading-relaxed mb-6">
                The doctrine of Purgatory is inseparable from the doctrine of the Communion of Saints — the spiritual solidarity that unites the Church Militant (us on earth), the Church Suffering (souls in Purgatory), and the Church Triumphant (saints in Heaven). We can help the Holy Souls through:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Holy Mass:</strong> The most powerful help we can offer. Having Masses offered for deceased loved ones is the greatest act of charity we can perform for them.</li>
                <li><strong>Prayer:</strong> The Rosary, the Divine Mercy Chaplet, and the De Profundis (Psalm 130) are particularly recommended for the Holy Souls.</li>
                <li><strong>Indulgences:</strong> The Church grants indulgences that can be applied to the souls in Purgatory. The Portiuncula indulgence (August 2) and the All Souls' Day indulgence (November 2) are especially powerful.</li>
                <li><strong>Fasting and sacrifice:</strong> Offering our penances and sufferings for the Holy Souls is a beautiful act of charity.</li>
                <li><strong>Works of mercy:</strong> Performing corporal and spiritual works of mercy and offering them for the deceased.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">November: Month of the Holy Souls</h2>
              <p className="text-text leading-relaxed mb-6">
                The Church dedicates the month of November to prayer for the Holy Souls in Purgatory. All Souls' Day (November 2) is a day of special prayer and indulgences for the deceased. Visiting a cemetery and praying for the dead on this day, while fulfilling the usual conditions, gains a plenary indulgence applicable to the souls in Purgatory.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "The souls in Purgatory are certain of their salvation, and they wait with patience and love for the moment when they will see God face to face."
                </p>
                <p className="text-text-muted text-center mt-2">— St. Catherine of Genoa</p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "It is a holy and wholesome thought to pray for the dead, that they may be loosed from sins."
                </p>
                <p className="text-text-muted text-center mt-2">— 2 Maccabees 12:46</p>
              </div>
            </div>

            <RelatedArticles currentSlug="what-is-purgatory" />

            <BlogFAQ faqs={[
              { question: "What is Purgatory according to Catholic teaching?", answer: "Purgatory is a state of final purification after death for those who die in God's grace but are not yet fully purified. It is not a second chance at salvation, but a cleansing process for those already saved, preparing them for the full joy of Heaven." },
              { question: "Is Purgatory in the Bible?", answer: "Yes. 2 Maccabees 12:46 speaks of praying for the dead so they may be freed from sin. Matthew 12:32 mentions sins forgiven 'in the age to come.' 1 Corinthians 3:15 describes being 'saved, but only as through fire.' The early Church universally prayed for the dead." },
              { question: "How long does Purgatory last?", answer: "The Church does not specify a duration. Time in Purgatory may not correspond to earthly time. Our prayers, Masses, and indulgences offered for the souls in Purgatory can shorten their purification. The Church encourages praying for the dead, especially in November." },
              { question: "Can we help souls in Purgatory?", answer: "Yes! We can help the Holy Souls through: offering Mass for them, praying the Rosary, gaining indulgences on their behalf, fasting, and performing works of charity. November is traditionally dedicated to praying for the souls in Purgatory." },
              { question: "Do Protestants believe in Purgatory?", answer: "Most Protestant denominations reject Purgatory, as it was one of the doctrines disputed during the Reformation. However, some Anglican and Lutheran theologians have expressed openness to the concept. The Catholic and Eastern Orthodox churches both affirm a state of purification after death." }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Discover How Your Faith Life Is</h3>
              <p className="text-text-muted mb-6">Take our free quiz and receive a personalized assessment of your Catholic journey.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
