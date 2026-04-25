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

export default function WhatIsTheCatechism() {
  return (
    <>
      <Helmet>
        <title>What Is the Catechism of the Catholic Church? Complete Guide | Guide Catholic</title>
        <meta name="description" content="Learn what the Catechism of the Catholic Church is, how it is organized, and how to use it. A complete guide to the CCC for Catholics and those curious about the faith." />
        <meta name="keywords" content="catechism of the catholic church, what is the catechism, CCC catholic, catechism guide, catholic catechism explained" />
        <link rel="canonical" href="https://guidecatholic.com/blog/what-is-the-catechism-of-the-catholic-church/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="What Is the Catechism of the Catholic Church? Complete Guide"
        description="Learn what the Catechism of the Catholic Church is, how it is organized, and how to use it. A complete guide to the CCC for Catholics and those curious about the faith."
        url="https://guidecatholic.com/blog/what-is-the-catechism-of-the-catholic-church/"
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
              <span className="text-text">What Is the Catechism of the Catholic Church?</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Bible & Faith</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />17 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                What Is the Catechism of the Catholic Church? Complete Guide
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Catechism of the Catholic Church is one of the most important documents in the history of the Church — a comprehensive summary of Catholic belief, morality, prayer, and sacramental life. Here is everything you need to know about it.
              </p>
            </header>

            <div className="aspect-video bg-indigo-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-indigo-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catechism-of-the-catholic-church">
                If you want to know what the Catholic Church teaches — on any subject — the Catechism of the Catholic Church (CCC) is the place to look. Published in 1992 under Pope John Paul II, it is the first comprehensive catechism of the universal Church in over 400 years. It is authoritative, accessible, and surprisingly readable.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catechism-of-the-catholic-church">
                Yet many Catholics have never opened it. They know it exists, but it seems intimidating — a thick book full of theological language. This guide will demystify the Catechism, explain how it is organized, and show you how to use it as a practical tool for your faith.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is a Catechism?</h2>
              <p className="text-text leading-relaxed mb-6">
                The word "catechism" comes from the Greek <em>katechein</em>, meaning "to instruct" or "to echo." A catechism is a systematic summary of Christian doctrine, usually organized in a question-and-answer format or as a series of explanations of key beliefs and practices.
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catechism-of-the-catholic-church">
                The Church has used catechisms for centuries to teach the faith. The most famous pre-modern catechism was the Roman Catechism (Catechism of the Council of Trent), published in 1566 in response to the Protestant Reformation. The current Catechism of the Catholic Church (1992) is the successor to this earlier work.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">History of the Current Catechism</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catechism-of-the-catholic-church">
                The idea for a new universal catechism emerged at the Extraordinary Synod of Bishops in 1985, called to evaluate the fruits of the Second Vatican Council (1962-1965). The bishops recognized that there was a need for a comprehensive, authoritative summary of Catholic teaching that incorporated the insights of Vatican II.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catechism-of-the-catholic-church">
                A commission of twelve cardinals and bishops, chaired by Cardinal Joseph Ratzinger (later Pope Benedict XVI), was appointed to draft the catechism. The process took six years and involved consultation with all the bishops of the world.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                The Catechism was promulgated by Pope John Paul II on October 11, 1992 — the 30th anniversary of the opening of the Second Vatican Council. In his apostolic constitution <em>Fidei Depositum</em>, John Paul II called it "a sure norm for teaching the faith" and "a valid and legitimate instrument for ecclesial communion."
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catechism-of-the-catholic-church">
                A revised edition was published in 1997, incorporating some corrections and clarifications. This is the current standard edition.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How Is the Catechism Organized?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catechism-of-the-catholic-church">
                The Catechism is organized around four "pillars" of Catholic life, corresponding to the traditional structure of catechetical instruction:
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Part One: The Profession of Faith (CCC 26-1065)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catechism-of-the-catholic-church">
                This section covers what Catholics believe — the content of the faith as expressed in the Apostles' Creed and the Nicene Creed. It covers:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>The nature of faith and revelation</li>
                <li>God: Father, Son, and Holy Spirit</li>
                <li>Creation, angels, and humanity</li>
                <li>The Fall and original sin</li>
                <li>Jesus Christ: His life, death, resurrection, and ascension</li>
                <li>The Holy Spirit and the Church</li>
                <li>The Communion of Saints, forgiveness of sins, resurrection of the body, and eternal life</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Part Two: The Celebration of the Christian Mystery (CCC 1066-1690)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catechism-of-the-catholic-church">
                This section covers how Catholics worship — the sacraments and the liturgy. It covers:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>The nature of liturgy and sacraments</li>
                <li>Each of the seven sacraments in detail: Baptism, Confirmation, Eucharist, Penance, Anointing of the Sick, Holy Orders, Matrimony</li>
                <li>Sacramentals, funerals, and Christian burial</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Part Three: Life in Christ (CCC 1691-2557)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catechism-of-the-catholic-church">
                This section covers how Catholics live — the moral life. It covers:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>The human vocation and beatitude</li>
                <li>Freedom, conscience, and sin</li>
                <li>The virtues (theological and cardinal)</li>
                <li>The Ten Commandments, explained in detail</li>
                <li>Social justice and Catholic social teaching</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Part Four: Christian Prayer (CCC 2558-2865)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catechism-of-the-catholic-church">
                This section covers how Catholics pray. It covers:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>The nature and forms of prayer</li>
                <li>The tradition of prayer in the Church</li>
                <li>A detailed commentary on the Lord's Prayer (Our Father)</li>
              </ul>

              <QuizCTA
                title="How well do you know your Catholic faith?"
                description="Take our assessment and discover how deeply you understand what the Church teaches."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Read the Catechism</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catechism-of-the-catholic-church">
                The Catechism is not meant to be read cover to cover like a novel (though you can). Here are several practical ways to use it:
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">1. Look Up Specific Topics</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catechism-of-the-catholic-church">
                The Catechism has a comprehensive index at the back. If you want to know what the Church teaches about a specific topic — abortion, homosexuality, the death penalty, angels, purgatory, divorce — look it up in the index and go directly to the relevant paragraphs.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">2. Read It Alongside the Bible</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catechism-of-the-catholic-church">
                The Catechism is richly footnoted with Scripture references. When you read a paragraph, look up the Scripture passages it cites. This helps you see how Catholic teaching is rooted in the Bible.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">3. Use It for Daily Reading</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catechism-of-the-catholic-church">
                The Catechism has 2,865 numbered paragraphs. If you read 8 paragraphs a day, you will finish it in one year. Many Catholics do this as a form of ongoing formation.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">4. Use the Compendium</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catechism-of-the-catholic-church">
                In 2005, Pope Benedict XVI published the Compendium of the Catechism — a shorter, question-and-answer version of the full Catechism. It is much more accessible for beginners and covers all the same material in a more digestible format.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Key Teachings in the Catechism</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catechism-of-the-catholic-church">
                Here are some of the most important and frequently referenced teachings in the Catechism:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>On the nature of God (CCC 200-231):</strong> God is one, eternal, all-knowing, all-powerful, and all-loving. He is Trinity: Father, Son, and Holy Spirit.</li>
                <li><strong>On the Real Presence (CCC 1373-1381):</strong> Jesus Christ is truly, really, and substantially present in the Eucharist — Body, Blood, Soul, and Divinity.</li>
                <li><strong>On salvation (CCC 1987-2005):</strong> Justification is the work of God's grace, received through faith and the sacraments. It is not earned by works alone.</li>
                <li><strong>On conscience (CCC 1776-1802):</strong> Every person has a conscience that must be formed according to truth. A well-formed conscience is not the same as personal opinion.</li>
                <li><strong>On human dignity (CCC 1700-1715):</strong> Every human being is created in the image of God and has inherent dignity that must be respected.</li>
                <li><strong>On marriage (CCC 1601-1666):</strong> Marriage is a sacrament between one man and one woman, ordered to the good of the spouses and the procreation and education of children.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Where to Get the Catechism</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catechism-of-the-catholic-church">
                The Catechism is available in many formats:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>Free online:</strong> The full text is available at the Vatican's website (vatican.va) and at USCCB.org</li>
                <li><strong>Print:</strong> Available from Catholic publishers like Ignatius Press, Our Sunday Visitor, and Libreria Editrice Vaticana</li>
                <li><strong>App:</strong> The Catechism is available as an app for iOS and Android</li>
                <li><strong>Compendium:</strong> The shorter Compendium is available in print and online</li>
              </ul>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "The Catechism of the Catholic Church... is a statement of the Church's faith and of catholic doctrine, attested to or illumined by Sacred Scripture, the Apostolic Tradition, and the Church's Magisterium."
                </p>
                <p className="text-text-muted text-center mt-2">— Pope John Paul II, Fidei Depositum (1992)</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "Is the Catechism the same as the Bible?", answer: "No. The Bible is the inspired Word of God — Sacred Scripture. The Catechism is a summary of Catholic teaching that draws on Scripture, Sacred Tradition, and the Magisterium (teaching authority) of the Church. The Catechism explains and applies the truths found in Scripture and Tradition." },
              { question: "Is the Catechism infallible?", answer: "The Catechism presents the definitive teaching of the Church on matters of faith and morals. While not every statement in the Catechism is technically 'infallible' in the strict theological sense, it is authoritative and binding on Catholics. It represents the ordinary Magisterium of the Church." },
              { question: "Has the Catechism ever been changed?", answer: "The Catechism was revised in 1997 to correct some errors in the first edition. In 2018, Pope Francis approved a change to paragraph 2267 on the death penalty, declaring it 'inadmissible' in all cases. This was the first substantive change to the text of the Catechism." },
              { question: "What is the difference between the Catechism and the Compendium?", answer: "The Catechism of the Catholic Church (1992) is the full, comprehensive document with 2,865 paragraphs. The Compendium of the Catechism (2005) is a shorter, question-and-answer version that covers the same material more concisely. The Compendium is a good starting point for those new to the Catechism." },
              { question: "Do I need to read the Catechism to be a good Catholic?", answer: "You don't need to read the entire Catechism to be a good Catholic. But knowing what the Church teaches — and why — is important for living your faith intelligently and defending it when challenged. Even reading a few paragraphs a day will significantly deepen your understanding of the faith." },
            ]} />

            <RelatedArticles currentSlug="what-is-the-catechism-of-the-catholic-church" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Well Do You Know Your Faith?</h3>
              <p className="text-text-muted mb-6">Take our Catholic faith assessment and receive a personalized guide to deepening your knowledge.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
