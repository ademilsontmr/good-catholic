import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowLeft, Landmark, Sparkles, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";

export default function WhatIsTheNiceneCreed() {
  return (
    <>
      <Helmet>
        <title>Nicene Creed: Full Text, History & Meaning (Catholic) | Guide Catholic</title>
        <meta name="description" content="The Nicene Creed Catholics recite at Mass — full text, Council of Nicaea history, what each line means, and why the Creed still matters in 2026." />
        <meta name="keywords" content="nicene creed, the nicene creed, nicene creed text, council of nicaea 325, homoousios meaning, filioque controversy, history of the creed" />
        <link rel="canonical" href="https://guidecatholic.com/blog/what-is-the-nicene-creed/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Nicene Creed: Full Text, History & Meaning (Catholic)"
        description="The Nicene Creed Catholics recite at Mass — full text, Council of Nicaea history, what each line means, and why the Creed still matters in 2026."
        url="https://guidecatholic.com/blog/what-is-the-nicene-creed/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "What Is the Nicene Creed?", url: "https://guidecatholic.com/blog/what-is-the-nicene-creed/" },
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
              <ArticleByline />
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
                  25 min read
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Nicene Creed: Full Text, History & Meaning (Catholic)
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Every Sunday, we stand and recite the Creed. But behind these ancient words lies a story of political exile, street riots, and a theological battle over a single "iota" that determined whether we worship Jesus as God or merely as a "super-hero."
              </p>
            </header>

            <div className="aspect-video bg-indigo-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
               <Landmark className="w-24 h-24 text-indigo-400/20 absolute -bottom-4 -right-4" />
               <ScrollText className="w-32 h-32 text-indigo-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Nicene Creed is the Church&apos;s profession of faith at Mass — formulated at Nicaea (325) and Constantinople (381), defining belief in one God, Trinity, Incarnation, Resurrection, one baptism, and life everlasting. Catholics stand and recite it on Sundays.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <p className="text-text leading-relaxed mb-6">
                The Nicene Creed (properly the <em>Niceno-Constantinopolitan Creed</em>) was born at the <strong>Council of Nicaea in 325 AD</strong>. It wasn't written to be a general prayer, but a "border control" to keep out the heresy of <strong>Arianism</strong>—the belief that Jesus was a created being rather than the eternal God.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The "Iota" that Changed Everything
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In the 4th century, the battle was over a single Greek word: <strong>Homoousios</strong>. It means "of the same substance." The Arians wanted to add one tiny letter, an "i" (iota), to make it <em>Homoiousios</em>, meaning "of *similar* substance." 
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-nicene-creed">
                One letter would have made the difference between Jesus being the Creator or just the greatest creature. The Church stood firm. By professing "consubstantial with the Father," we declare that the Son is exactly as much God as the Father is.
              </LinkedText>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Sparkles className="w-6 h-6 text-indigo-600" />
                  Interpreting the Phrases
                </h3>
                <ul className="list-disc list-inside text-text space-y-3 text-sm">
                  <li><strong>"Light from Light":</strong> This is a physical analogy used by the Church Fathers. Just as a beam of sunlight is distinct from the sun but shared the exact same nature and heat, so is the Son distinct from the Father but shared the same divinity.</li>
                  <li><strong>"Begotten, not made":</strong> To "make" is to create something of a different nature (a man makes a table). To "beget" is to produce something of the *same* nature (a man begets a son). Jesus is begotten, not a "made" creature.</li>
                  <li><strong>"Maker of things... invisible":</strong> A direct strike against the Gnostics, who believed the spiritual world was good but the "stinky" physical world was created by an evil second god.</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">From Nicaea (325) to Constantinople (381)</h2>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-nicene-creed">Emperor Constantine summoned the bishops to Nicaea, in what is now İznik, Turkey, in 325 to settle the controversy stirred up by Arius, a priest of Alexandria who taught that the Son had a beginning. The creed the council issued focused almost entirely on the Son. Its article on the Spirit was a single line, And in the Holy Spirit, followed by condemnations of Arian slogans such as there was a time when he was not.</LinkedText>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-nicene-creed">The fight did not end in 325. Arian and semi-Arian bishops gained imperial support for decades, and St. Athanasius of Alexandria was exiled five times for defending Nicaea. When the Council of Constantinople met in 381 under Emperor Theodosius I, it reaffirmed Nicaea and expanded the article on the Holy Spirit against those who denied the Spirit&apos;s divinity: the Lord, the giver of life, who proceeds from the Father, who with the Father and the Son is adored and glorified, who has spoken through the prophets. It also added the lines on the Church, Baptism, the resurrection, and the life of the world to come. The Council of Chalcedon in 451 read both texts aloud, and the combined creed became the common profession of East and West. In 2025 Christians marked the 1,700th anniversary of Nicaea.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. Filioque: The Word that Split East and West
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The most controversial word in the Creed's history is the Latin <strong>Filioque</strong> ("and the Son"). In the section on the Holy Spirit, Catholics say he proceeds from the Father *and the Son*. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                Eastern Orthodox theologians hold that the Holy Spirit proceeds from the Father, and some Greek Fathers spoke of the Spirit proceeding from the Father *through* the Son. The dispute became one of the main theological issues behind the <strong>Great Schism</strong>, traditionally dated to 1054. For Catholics, the inclusion of the *Filioque* protects the unique relationship between the Son and the Spirit as one unified Godhead.
              </p>

              <QuizCTA
                title="Do you stand for the truth?"
                description="The Creed is a battle cry of the Church. Take our quiz to see if you truly understand the weight of the words you profess every Sunday."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How the Filioque Entered the Creed</h2>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-nicene-creed">The Latin word was not in the text approved at Constantinople. It appears in Spain, where the Third Council of Toledo in 589 used it while receiving the Visigothic king into the Catholic faith from Arianism, and from there it spread through the Frankish churches. Around 809 Pope Leo III affirmed the doctrine but declined to add the word to the Creed sung in Rome. Rome adopted it in the liturgy in 1014 under Pope Benedict VIII. Greek theologians objected both to the theology and to a change made to an ecumenical creed without an ecumenical council.</LinkedText>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-nicene-creed">The Catechism presents the Eastern and Western formulas as complementary when neither is held rigidly: the East stresses the Father as the first origin of the Spirit, while the West stresses the communion of Father and Son from whom the Spirit proceeds (CCC 246 to 248). Eastern Catholic Churches in full communion with Rome profess the Creed without the filioque, and in 1995 the Pontifical Council for Promoting Christian Unity published a clarification on the Greek and Latin traditions to help that dialogue.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why the Words Changed in 2011</h2>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-nicene-creed">On the First Sunday of Advent, November 27, 2011, U.S. parishes began using the third edition of the Roman Missal in a new English translation that follows the Latin more closely. The Creed changed in several places. We believe became I believe, matching the Latin Credo and making the profession a personal act of each worshiper. One in being with the Father became consubstantial with the Father, from the Latin consubstantialem, which renders the Greek homoousios of Nicaea. Seen and unseen became visible and invisible; eternally begotten became born of the Father before all ages; and born of the Virgin Mary became incarnate of the Virgin Mary, stressing that the Son took flesh rather than only that he was born.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <BookOpen className="w-6 h-6 text-accent" />
                 The "Amen": Looking Toward the Future
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Creed doesn't end with what God did in the past. It ends with an explosive hope: <strong>"I look forward to the resurrection of the dead."</strong> 
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-nicene-creed">
                Catholics do not believe in a "disembodied ghost" eternity. We believe our literal bodies will be resurrected, perfected, and rejoined with our souls. The "Life of the world to come" is a physical and spiritual renewal of the entire cosmos.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Whoever says 'I believe' says 'I pledge myself to what we believe.'" — Catechism of the Catholic Church, 185
                </p>
            </div>

              </div>

            <BlogFAQ faqs={[
              {
                question: "Why do we bow during the Creed?",
                answer: "Catholics bow at the words 'and by the Holy Spirit was incarnate of the Virgin Mary, and became man.' This is to honor the moment the Infinite God became a tiny, vulnerable human being. On the feasts of the Annunciation and Christmas, we genuflect instead of bowing."
              },
              {
                question: "What is the Athanasian Creed?",
                answer: "It is a longer, even more rhythmic creed written later to explain the Trinity in great detail. While not used at Mass, it is a magnificent pillar of Catholic orthodoxy."
              },
              {
                question: "Wait, so is the Creed in the Bible?",
                answer: "The *sentences* of the Creed are all in the Bible. The *structure* was put together by the Church to summarize the Bible. Just as a map summarizes a landscape, the Creed summarizes the Gospel so we don't get lost."
              },
              { question: "Why did the Creed's wording change in 2011?", answer: "The third edition of the Roman Missal brought a new English translation that follows the Latin text more closely. That is why Catholics now say 'I believe' and 'consubstantial with the Father.'" },
              { question: "Do Eastern Catholics say the filioque?", answer: "Eastern Catholic Churches in full communion with Rome generally profess the Creed without it, as the Council of Constantinople wrote it. The Catechism treats the Eastern and Western formulas as complementary (CCC 248)." },
              { question: "Which council wrote the part about the Holy Spirit?", answer: "The Council of Constantinople in 381 expanded Nicaea's one-line article on the Spirit, adding that he is Lord and giver of life, proceeds from the Father, is worshiped with the Father and the Son, and spoke through the prophets." },
            ]} />

<RelatedArticles currentSlug="what-is-the-nicene-creed" />

            <ArticleBottomCTA title="Strengthen Your Doctrimal Foundation" description="Don't just recite—believe. Take our quiz to receive a personalized guide to growing in your knowledge of Catholic theology." />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
