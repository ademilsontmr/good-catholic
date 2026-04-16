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

export default function WhatIsTheNiceneCreed() {
  return (
    <>
      <Helmet>
        <title>What Is the Nicene Creed? Full Text, History & Meaning | Guide Catholic</title>
        <meta name="description" content="What is the Nicene Creed? Learn the full text Catholics profess at Mass, its history at the Council of Nicaea (325 AD), what each line means, and why it still matters today." />
        <meta name="keywords" content="nicene creed, nicene creed text, what is the nicene creed, nicene creed meaning, apostles creed vs nicene creed" />
        <link rel="canonical" href="https://guidecatholic.com/blog/what-is-the-nicene-creed/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="What Is the Nicene Creed? Full Text, History & Meaning"
        description="What is the Nicene Creed? Learn the full text Catholics profess at Mass, its history at the Council of Nicaea (325 AD), what each line means, and why it still matters today."
        url="https://guidecatholic.com/blog/what-is-the-nicene-creed/"
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
              <span className="text-text">What Is the Nicene Creed?</span>
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
                  Formation & Doctrine
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  16 min read
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                What Is the Nicene Creed? Full Text, History & Meaning
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Every Sunday at Mass, Catholics stand and profess the Nicene Creed. But how many understand what each line means, or the dramatic church council crisis behind its composition? Here is the complete story.
              </p>
            </header>

            <div className="aspect-video bg-indigo-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-indigo-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Every Sunday at Mass, Catholics around the world rise to their feet and, in unison, proclaim the Nicene Creed — a statement of faith that connects each local congregation to 1,700 years of Christian history. It is the most universally shared profession of faith in Christianity, used by Catholic, Orthodox, Anglican, and many Protestant communities worldwide.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Yet for many Catholics, the Creed has become familiar to the point of invisibility — recited from memory without much reflection on its astonishing content. Each line the Church professes at Mass was forged in the heat of fierce theological controversy, hammered out by bishops under imperial pressure, and carefully crafted to express the essential mysteries of the Christian faith against specific heresies that threatened to destroy it.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Full Text of the Nicene Creed</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text leading-relaxed italic">
                  I believe in one God,<br />
                  the Father almighty,<br />
                  maker of heaven and earth,<br />
                  of all things visible and invisible.<br /><br />

                  I believe in one Lord Jesus Christ,<br />
                  the Only Begotten Son of God,<br />
                  born of the Father before all ages.<br />
                  God from God, Light from Light,<br />
                  true God from true God,<br />
                  begotten, not made, consubstantial with the Father;<br />
                  through him all things were made.<br />
                  For us men and for our salvation<br />
                  he came down from heaven,<br />
                  and by the Holy Spirit was incarnate of the Virgin Mary,<br />
                  and became man.<br />
                  For our sake he was crucified under Pontius Pilate,<br />
                  he suffered death and was buried,<br />
                  and rose again on the third day<br />
                  in accordance with the Scriptures.<br />
                  He ascended into heaven<br />
                  and is seated at the right hand of the Father.<br />
                  He will come again in glory<br />
                  to judge the living and the dead<br />
                  and his kingdom will have no end.<br /><br />

                  I believe in the Holy Spirit, the Lord, the giver of life,<br />
                  who proceeds from the Father and the Son,<br />
                  who with the Father and the Son is adored and glorified,<br />
                  who has spoken through the prophets.<br /><br />

                  I believe in one, holy, catholic and apostolic Church.<br />
                  I confess one Baptism for the forgiveness of sins<br />
                  and I look forward to the resurrection of the dead<br />
                  and the life of the world to come. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Historical Crisis That Produced the Creed</h2>
              <p className="text-text leading-relaxed mb-6">
                To understand the Nicene Creed, you must understand the Arian Crisis — one of the most dangerous theological controversies in Church history.
              </p>
              <p className="text-text leading-relaxed mb-6">
                In the early 4th century, a presbyter from Alexandria named Arius began teaching that Jesus Christ, while a supernatural being, was <em>not</em> fully divine — that He was a creature, the first and greatest of God's creations, but <em>not</em> eternal and <em>not</em> of the same divine nature as the Father. His slogan was: <em>"There was a time when He was not."</em>
              </p>
              <p className="text-text leading-relaxed mb-6">
                This teaching spread with remarkable speed across the Eastern Roman Empire and caused a theological civil war within the Church. It was not merely an academic dispute: if Jesus is not truly God, then His death cannot save us (only God can atone for the infinite offense of sin). The entire foundation of Christian salvation was at stake.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Emperor Constantine I, who had recently legalized Christianity in the Empire, saw the controversy threatening the unity of his realm. In 325 AD, he convened the first ecumenical council at <strong>Nicaea</strong> (modern Turkey) — gathering approximately 300 bishops from across the Christian world to settle the matter definitively.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The great hero of the Council of Nicaea was <strong>Athanasius of Alexandria</strong> — a young deacon at the time who, despite not yet being a bishop, argued so brilliantly and tenaciously for the full divinity of Christ that he effectively carried the day. The Council produced the original Nicene Creed and condemned Arianism. A second council at <strong>Constantinople in 381 AD</strong> added the section on the Holy Spirit, producing the final form we use today — properly called the Niceno-Constantinopolitan Creed.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Athanasius spent the rest of his life defending the Council's definitions against ongoing Arian pressure — exiled five times by emperors sympathetic to Arianism. His motto became famous: <em>Athanasius contra mundum</em> — "Athanasius against the world."
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Every Line of the Creed Explained</h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"I believe in one God, the Father almighty, maker of heaven and earth, of all things visible and invisible."</h3>
              <p className="text-text leading-relaxed mb-6">
                The Creed opens with the foundational monotheistic confession: there is one God, not many. He is "almighty" — <em>pantokrator</em> in Greek, meaning "ruler over all things." He is the Creator of everything: <em>visible</em> (the material universe) and <em>invisible</em> (the angels and spiritual realities). This directly countered Gnostic and Manichaean heresies that viewed the material world as evil or as the creation of a lesser deity.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"I believe in one Lord Jesus Christ, the Only Begotten Son of God..."</h3>
              <p className="text-text leading-relaxed mb-6">
                This is the anti-Arian heart of the Creed. Every phrase here was deliberately chosen to exclude Arianism:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>"Only Begotten Son"</strong> — not one among many divine sons, but the unique eternal Son.</li>
                <li><strong>"Born of the Father before all ages"</strong> — directly countering Arius's claim that "there was a time when He was not."</li>
                <li><strong>"God from God, Light from Light, true God from true God"</strong> — Jesus shares the same divine nature as the Father.</li>
                <li><strong>"Begotten, not made"</strong> — the most technically precise phrase: the Son is eternally generated from the Father's divine nature, not created out of nothing like creatures are.</li>
                <li><strong>"Consubstantial with the Father"</strong> — Greek <em>homoousios</em>: literally "of the same substance/nature" as the Father. This was the decisive, controversial word of the Council that Arius's followers refused to accept.</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"For us men and for our salvation he came down from heaven..."</h3>
              <p className="text-text leading-relaxed mb-6">
                This section confesses the Incarnation — God becoming flesh — and its purpose: <em>for our salvation</em>. It affirms both the divine initiative (He "came down") and the full humanity of Christ (He "became man"). The phrase "by the Holy Spirit was incarnate of the Virgin Mary" is the basis for the Catholic dogma of the Virgin Birth.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Note that worshippers bow (genuflect at solemn occasions) at these words — "and by the Holy Spirit was incarnate of the Virgin Mary, and became man" — a sign of profound reverence for the moment of the Incarnation.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"For our sake he was crucified under Pontius Pilate..."</h3>
              <p className="text-text leading-relaxed mb-6">
                The inclusion of "under Pontius Pilate" anchors the Incarnation and Passion firmly in history — Christianity is not mythology but historical fact. The Creed confesses the Passion (crucifixion), Death (he "suffered death and was buried"), Resurrection ("rose again on the third day in accordance with the Scriptures"), Ascension ("ascended into heaven"), and the Second Coming ("he will come again in glory to judge the living and the dead").
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"I believe in the Holy Spirit, the Lord, the giver of life..."</h3>
              <p className="text-text leading-relaxed mb-6">
                The Council of Constantinople (381 AD) added this third article to combat a different heresy: Pneumatomachism, whose adherents accepted the full divinity of the Son but denied the full divinity of the Holy Spirit. The Creed affirms the Spirit as "Lord" (divine) and "giver of life" (the one who imparts divine life through Baptism and the sacraments). The phrase "who with the Father and the Son is adored and glorified" places the Spirit in the same order of worship as the Father and Son — an implicit affirmation of the Spirit's full divinity.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">"I believe in one, holy, catholic and apostolic Church."</h3>
              <p className="text-text leading-relaxed mb-6">
                The four marks of the Church are the key to identifying the true Church of Christ. <em>One</em> (unified in faith, worship, and governance), <em>Holy</em> (because Christ is holy and sanctifies her members), <em>Catholic</em> (from <em>kata holos</em>: "according to the whole" — universal, not limited to one nation or culture), and <em>Apostolic</em> (founded on the Apostles and maintaining continuity with them through apostolic succession). Catholics believe that the Church of Rome — in communion with all Catholic bishops worldwide — is the fullest expression of this Church.
              </p>

              <QuizCTA
                title="How well do you know the core of your faith?"
                description="Take our Catholic quiz for a personalized look at your doctrinal knowledge and spiritual growth."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Nicene Creed vs. Apostles' Creed — What Is the Difference?</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-accent/10">
                      <th className="border border-border p-3 text-left font-semibold"></th>
                      <th className="border border-border p-3 text-left font-semibold">Nicene Creed</th>
                      <th className="border border-border p-3 text-left font-semibold">Apostles' Creed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-border p-3 font-semibold">Origin</td><td className="border border-border p-3">Councils of Nicaea (325) & Constantinople (381)</td><td className="border border-border p-3">Evolved from early baptismal formulas (2nd–4th c.)</td></tr>
                    <tr className="bg-background-muted/30"><td className="border border-border p-3 font-semibold">Length</td><td className="border border-border p-3">Longer, more doctrinally detailed</td><td className="border border-border p-3">Shorter, simpler</td></tr>
                    <tr><td className="border border-border p-3 font-semibold">Used at Mass</td><td className="border border-border p-3">Yes — on Sundays and solemnities</td><td className="border border-border p-3">Yes — permitted as alternative</td></tr>
                    <tr className="bg-background-muted/30"><td className="border border-border p-3 font-semibold">Used in Rosary</td><td className="border border-border p-3">No</td><td className="border border-border p-3">Yes — at the beginning</td></tr>
                    <tr><td className="border border-border p-3 font-semibold">Key emphasis</td><td className="border border-border p-3">Full divinity of Christ and the Holy Spirit</td><td className="border border-border p-3">Core mysteries of Christ's life</td></tr>
                    <tr className="bg-background-muted/30"><td className="border border-border p-3 font-semibold">Shared with</td><td className="border border-border p-3">Orthodox, Anglican, Lutheran, many Protestants</td><td className="border border-border p-3">Most Western Christians</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The <em>Filioque</em> Controversy</h2>
              <p className="text-text leading-relaxed mb-6">
                One of the most significant historical-theological disputes concerning the Nicene Creed is the <em>Filioque</em> — a Latin word meaning "and from the Son." The Western (Catholic) Church added this phrase to the Creed in the 6th century: "who proceeds from the Father <em>and the Son</em>." The Eastern (Orthodox) Church has never accepted this addition, arguing that (a) the original Creed does not include it, and (b) theologically, the Spirit proceeds from the Father alone (citing John 15:26).
              </p>
              <p className="text-text leading-relaxed mb-6">
                The <em>Filioque</em> controversy is one of the primary theological issues behind the Great Schism of 1054 between Rome and Constantinople, and remains an ongoing point of ecumenical dialogue between the Catholic and Orthodox churches.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed">
                  "To pray the Creed is not to recite an ancient formula — it is to make a living act of faith that unites us with every Christian who has confessed the same truth across twenty centuries."
                </p>
                <p className="text-text-muted text-center mt-2">— Catechesis on the Creed, Catholic Tradition</p>
              </div>
            </div>

            <RelatedArticles currentSlug="what-is-the-nicene-creed" />

            <BlogFAQ faqs={[
              {
                question: "Why do Catholics stand to recite the Creed?",
                answer: "Standing is the traditional posture of the Resurrection — it signifies that we are risen with Christ. In ancient liturgical practice, Christians knelt on penitential days but stood on Sundays (the day of Resurrection) as a sign of paschal joy and the dignity of the baptized. Standing to profess the Creed also expresses the bold public nature of the profession of faith."
              },
              {
                question: "What does 'consubstantial with the Father' mean?",
                answer: "It comes from the Greek homoousios, meaning 'of the same substance or nature.' It means that Jesus Christ is fully divine — not a lesser god or a super-creature, but sharing the exact same divine nature as God the Father. This was the decisive theological word of the Council of Nicaea (325 AD), inserted specifically to exclude Arianism, which held that Jesus was 'similar to' but not 'the same as' the Father in nature."
              },
              {
                question: "What is the difference between the Nicene Creed and the Apostles' Creed?",
                answer: "Both are valid professions of Catholic faith. The Apostles' Creed is older and simpler, traditionally associated with baptismal preparation. The Nicene Creed is longer, more doctrinally detailed (particularly about the divinity of Christ and the Holy Spirit), and is the standard Creed for Sunday Mass in the Roman Rite. Either may be used at Mass."
              },
              {
                question: "Why does the Nicene Creed say 'I believe' instead of 'We believe'?",
                answer: "The 2011 English translation of the Roman Missal restored 'I believe' (Latin: Credo) from earlier translations that used 'We believe.' The singular 'I' reflects both the original Latin and the personal nature of the act of faith — even when professed communally in the liturgy, each individual makes their own personal act of faith."
              },
              {
                question: "Is the Nicene Creed used in other Christian denominations?",
                answer: "Yes. The Nicene Creed is one of the most widely shared texts in all of Christianity. It is professed by Roman Catholics, Eastern Orthodox, Oriental Orthodox (with minor variations), Anglicans, and many Lutheran and other Protestant denominations. The Filioque ('and the Son') remains the principal difference between Western (Catholic) and Eastern (Orthodox) versions."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Discover How Your Faith Life Is</h3>
              <p className="text-text-muted mb-6">Take our quiz and receive a personalized assessment of your Catholic journey and understanding of the faith.</p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button>
              </Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
