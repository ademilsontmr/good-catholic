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

export default function WhatDoCatholicsBeliieve() {
  return (
    <>
      <Helmet>
        <title>What Do Catholics Believe? Core Beliefs Explained | Guide Catholic</title>
        <meta name="description" content="What do Catholics believe? A clear, complete guide to the core beliefs of the Catholic Church — God, Jesus, salvation, Mary, the sacraments, the afterlife, and more." />
        <meta name="keywords" content="what do catholics believe, catholic beliefs, core beliefs of catholicism, catholic faith explained, what is catholicism, catholic doctrine basics" />
        <link rel="canonical" href="https://guidecatholic.com/blog/what-do-catholics-believe/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="What Do Catholics Believe? Core Beliefs Explained"
        description="What do Catholics believe? A clear, complete guide to the core beliefs of the Catholic Church — God, Jesus, salvation, Mary, the sacraments, the afterlife, and more."
        url="https://guidecatholic.com/blog/what-do-catholics-believe/"
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
              <span className="text-text">What Do Catholics Believe?</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Faith Questions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />22 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                What Do Catholics Believe? Core Beliefs Explained
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                With over 1.3 billion members worldwide, the Catholic Church is the largest Christian denomination on earth. But what do Catholics actually believe? This guide presents the core beliefs of Catholicism clearly, honestly, and completely.
              </p>
            </header>

            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-blue-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-do-catholics-believe">
                Catholicism is the oldest and largest branch of Christianity, tracing its origins directly to Jesus Christ and the apostles. Its beliefs are summarized in the Nicene Creed — a statement of faith formulated at the Council of Nicaea in 325 AD and still professed by Catholics at every Sunday Mass. But the Creed is just the beginning. Catholic belief is rich, deep, and comprehensive — touching every aspect of human life and destiny.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">1. God: One God in Three Persons</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-do-catholics-believe">
                Catholics believe in one God who exists as three distinct Persons: the Father, the Son (Jesus Christ), and the Holy Spirit. This is the doctrine of the Trinity — not three gods, but one God in three Persons. Each Person is fully God; together they are one God.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-do-catholics-believe">
                God is eternal, all-knowing, all-powerful, and all-loving. He created the universe out of nothing and sustains it in existence at every moment. He is not a distant deity but a personal God who knows each person by name and desires a relationship with every human being.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">2. Jesus Christ: True God and True Man</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-do-catholics-believe">
                Catholics believe that Jesus Christ is the Second Person of the Trinity — fully divine and fully human. He was conceived by the Holy Spirit, born of the Virgin Mary, lived a fully human life, was crucified under Pontius Pilate, died, was buried, and rose from the dead on the third day. He ascended into heaven and will come again to judge the living and the dead.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-do-catholics-believe">
                The Incarnation — God becoming human in Jesus — is the central event of all history. Through His death and resurrection, Jesus redeemed humanity from sin and opened the way to eternal life. He is not merely a great teacher or moral example; He is the Son of God, the Savior of the world.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">3. The Bible and Sacred Tradition</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-do-catholics-believe">
                Catholics believe that God reveals Himself through two sources: Sacred Scripture (the Bible) and Sacred Tradition (the living transmission of the faith through the Church). Both are equally authoritative and must be interpreted together.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-do-catholics-believe">
                The Catholic Bible contains 73 books — 46 in the Old Testament and 27 in the New Testament. The seven books not found in Protestant Bibles (Tobit, Judith, 1 and 2 Maccabees, Sirach, Wisdom, and Baruch) are called the deuterocanonical books. They were part of the Greek Septuagint used by the early Church.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-do-catholics-believe">
                The Magisterium — the teaching authority of the Church, exercised by the Pope and bishops in union with him — interprets Scripture and Tradition authentically. Catholics believe the Holy Spirit guides the Church to teach without error on matters of faith and morals.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">4. The Church: One, Holy, Catholic, and Apostolic</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-do-catholics-believe">
                Catholics believe that Jesus founded one Church — the Catholic Church — and that this Church is the fullness of the means of salvation. The four marks of the Church (from the Nicene Creed) are:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>One:</strong> The Church is one in faith, sacraments, and governance under the Pope.</li>
                <li><strong>Holy:</strong> The Church is holy because Christ is holy and the Holy Spirit dwells in her — even though her members are sinners.</li>
                <li><strong>Catholic:</strong> The Church is universal — for all people, in all times, in all places.</li>
                <li><strong>Apostolic:</strong> The Church was founded on the apostles and their successors (the bishops) maintain an unbroken line of authority from the apostles to today.</li>
              </ul>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-do-catholics-believe">
                The Pope — the Bishop of Rome — is the successor of St. Peter and the visible head of the Church on earth. Catholics believe the Pope has the charism of infallibility when he defines a doctrine of faith or morals to be held by the whole Church (this has happened only twice in modern history: the Immaculate Conception in 1854 and the Assumption in 1950).
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">5. The Seven Sacraments</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-do-catholics-believe">
                Catholics believe that Jesus instituted seven sacraments — visible signs that convey invisible grace. The sacraments are not merely symbols; they actually accomplish what they signify.
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Baptism:</strong> Forgives original sin, makes one a child of God and member of the Church. Necessary for salvation.</li>
                <li><strong>Confirmation:</strong> Strengthens the gifts of the Holy Spirit received at Baptism; completes Christian initiation.</li>
                <li><strong>Eucharist:</strong> The Body and Blood of Christ, truly present under the appearances of bread and wine. The source and summit of Catholic life.</li>
                <li><strong>Confession (Reconciliation):</strong> Forgives sins committed after Baptism through the ministry of a priest.</li>
                <li><strong>Anointing of the Sick:</strong> Brings healing and strength to those who are seriously ill or dying.</li>
                <li><strong>Holy Orders:</strong> Ordains men as deacons, priests, or bishops for the service of the Church.</li>
                <li><strong>Matrimony:</strong> Unites a man and a woman in a lifelong, exclusive, faithful, and fruitful covenant.</li>
              </ul>

              <QuizCTA
                title="How well do you know your Catholic faith?"
                description="Take our assessment and receive a personalized guide to the beliefs and practices of Catholicism."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">6. Salvation: Faith, Grace, and Works</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-do-catholics-believe">
                Catholics believe that salvation is a gift of God's grace — it cannot be earned. But they also believe that genuine faith produces good works, and that we must cooperate with God's grace throughout our lives. Salvation is not a one-time event but a process — justification (being made right with God), sanctification (growing in holiness), and glorification (entering eternal life).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-do-catholics-believe">
                Catholics reject both the idea that we can earn salvation by our own efforts (Pelagianism) and the idea that faith alone, without any cooperation or works, is sufficient (sola fide). The Catholic position is that we are saved by grace through faith — a living faith that expresses itself in love and good works (Galatians 5:6; James 2:24).
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">7. Mary and the Saints</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-do-catholics-believe">
                Catholics honor Mary as the Mother of God (Theotokos) — the greatest of all the saints. They believe she was conceived without original sin (the Immaculate Conception), remained a virgin throughout her life, and was assumed body and soul into heaven (the Assumption). They ask her to intercede for them, just as they ask any saint to pray for them.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-do-catholics-believe">
                Catholics do not worship Mary or the saints — worship (latria) is given to God alone. They give Mary special veneration (hyperdulia) and the other saints ordinary veneration (dulia). The saints are alive in God and can intercede for us; asking them to pray for us is an extension of the Christian practice of asking others to pray for us.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">8. The Afterlife: Heaven, Purgatory, and Hell</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-do-catholics-believe">
                Catholics believe in the resurrection of the body and life everlasting. After death, each person faces the particular judgment — an immediate accounting before God. The possible outcomes are:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Heaven:</strong> Eternal life in the presence of God — the beatific vision. This is the destiny God created us for.</li>
                <li><strong>Purgatory:</strong> A state of purification for those who die in God's grace but are not yet fully purified. Purgatory is not a second chance at salvation — it is the final cleansing of those who are already saved.</li>
                <li><strong>Hell:</strong> Eternal separation from God, chosen by those who die in a state of mortal sin and refuse God's mercy. Hell is real and possible, but the Church has never declared any specific person to be in hell.</li>
              </ul>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-do-catholics-believe">
                At the end of time, there will be a general resurrection and a Last Judgment, in which all people will be judged and the full truth of history will be revealed.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">9. Moral Teaching</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-do-catholics-believe">
                Catholic moral teaching is based on natural law (the moral order written into human nature by God), divine revelation (Scripture and Tradition), and the teaching authority of the Church. Key moral positions include:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>The sanctity of human life from conception to natural death</li>
                <li>The definition of marriage as a lifelong covenant between one man and one woman</li>
                <li>The importance of social justice and care for the poor</li>
                <li>The call to chastity — living one's sexuality according to one's state in life</li>
                <li>The dignity of work and the rights of workers</li>
                <li>The responsibility to care for creation</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">10. Prayer and Worship</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-do-catholics-believe">
                Catholics believe that prayer is essential to the Christian life. The highest form of prayer is the Mass — the re-presentation of Christ's sacrifice on Calvary. Catholics also pray the Rosary, the Liturgy of the Hours, novenas, and personal prayer. They believe in the power of intercessory prayer — asking God for the needs of others.
              </LinkedText>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "The Catholic Church is the only institution in the world that can forgive sins, offer the Body and Blood of Christ, and guarantee the truth of the Gospel. That is why I am Catholic."
                </p>
                <p className="text-text-muted text-center mt-2">— G.K. Chesterton (paraphrase)</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "Is Catholicism the same as Christianity?", answer: "Yes — Catholicism is a form of Christianity. Catholics are Christians. The Catholic Church is the oldest and largest Christian denomination, tracing its origins to Jesus Christ and the apostles. All Catholics are Christians, though not all Christians are Catholic." },
              { question: "What makes Catholicism different from Protestantism?", answer: "The main differences are: (1) Authority — Catholics accept the authority of the Pope and the Magisterium; Protestants rely on Scripture alone (sola scriptura). (2) Sacraments — Catholics believe in seven sacraments that convey real grace; most Protestants recognize only two (Baptism and Communion) as symbolic. (3) The Eucharist — Catholics believe in the Real Presence of Christ in the Eucharist; most Protestants see it as symbolic. (4) Mary and the saints — Catholics venerate Mary and ask saints to intercede; most Protestants do not." },
              { question: "Do Catholics believe the Bible is the Word of God?", answer: "Yes, absolutely. Catholics believe the Bible is the inspired Word of God — written by human authors under the guidance of the Holy Spirit. However, Catholics also believe that the Bible must be interpreted within the living Tradition of the Church, not by each individual alone. The Church gave us the Bible (defining the canon at the Councils of Hippo and Carthage), and the Church interprets it authentically." },
              { question: "Do Catholics believe in heaven and hell?", answer: "Yes. Catholics believe in heaven (eternal life with God), hell (eternal separation from God, for those who freely choose it), and purgatory (a state of purification for those who die in God's grace but are not yet fully purified). The Church teaches that hell is real and possible, but has never declared any specific person to be there." },
              { question: "How many Catholics are there in the world?", answer: "As of 2024, there are approximately 1.3 billion Catholics worldwide — about 17% of the world's population. The largest Catholic populations are in Brazil, Mexico, the Philippines, the United States, and Italy. The Catholic Church is present in virtually every country on earth." },
            ]} />

            <RelatedArticles currentSlug="what-do-catholics-believe" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your knowledge and practice of the faith.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
