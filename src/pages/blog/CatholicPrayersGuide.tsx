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

export default function CatholicPrayersGuide() {
  return (
    <>
      <Helmet>
        <title>Catholic Prayers: The Complete Guide to Essential Catholic Prayers | Guide Catholic</title>
        <meta name="description" content="The complete guide to essential Catholic prayers — the Our Father, Hail Mary, Glory Be, Apostles' Creed, Act of Contrition, Rosary, and more. Full texts and explanations." />
        <meta name="keywords" content="catholic prayers, essential catholic prayers, list of catholic prayers, our father prayer, hail mary prayer, apostles creed, act of contrition, glory be" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-prayers-complete-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Catholic Prayers: The Complete Guide to Essential Catholic Prayers"
        description="The complete guide to essential Catholic prayers — the Our Father, Hail Mary, Glory Be, Apostles' Creed, Act of Contrition, Rosary, and more. Full texts and explanations."
        url="https://guidecatholic.com/blog/catholic-prayers-complete-guide/"
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
              <span className="text-text">Catholic Prayers: Complete Guide</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers & Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />22 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholic Prayers: The Complete Guide to Essential Catholic Prayers
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Prayer is the breath of the soul. This complete guide gathers the most important Catholic prayers — with full texts, explanations, and the history behind each one — so you can pray with understanding and devotion.
              </p>
            </header>

            <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-violet-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                The Catholic tradition is one of the richest prayer traditions in the world. Over two thousand years, the Church has developed a treasury of prayers — from the simple Sign of the Cross to the complex Liturgy of the Hours — that cover every moment of the day, every season of life, and every need of the human heart.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                This guide presents the most essential Catholic prayers with their full texts, their history, and their meaning. Whether you are a lifelong Catholic refreshing your knowledge, a new Catholic learning the basics, or someone curious about Catholic prayer, this is your reference.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Sign of the Cross</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-4">
                <p className="text-text italic leading-relaxed">
                  In the name of the Father, and of the Son, and of the Holy Spirit. Amen.
                </p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                The Sign of the Cross is the most fundamental Catholic prayer and gesture. It is a profession of faith in the Trinity and a reminder of our Baptism. Catholics make the Sign of the Cross at the beginning and end of prayer, when entering a church, when passing a Catholic church, and at many other moments throughout the day.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                The gesture: touch the forehead ("In the name of the Father"), the chest ("and of the Son"), the left shoulder ("and of the Holy"), the right shoulder ("Spirit"), then fold the hands ("Amen"). In the Eastern Catholic tradition, the right shoulder is touched before the left.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Our Father (Lord's Prayer)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-4">
                <p className="text-text italic leading-relaxed text-sm">
                  Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.
                </p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                The Our Father is the prayer Jesus himself taught his disciples (Matthew 6:9-13; Luke 11:2-4). It is the most perfect prayer in existence — given to us by God himself. The Catechism calls it "the summary of the whole Gospel" (CCC 2761).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                The Our Father has seven petitions: three that glorify God (hallowed be thy name, thy kingdom come, thy will be done) and four that express our needs (daily bread, forgiveness, protection from temptation, deliverance from evil). It is prayed at every Mass, in the Rosary, and in the Liturgy of the Hours.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Hail Mary</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-4">
                <p className="text-text italic leading-relaxed text-sm">
                  Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.
                </p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                The Hail Mary is composed of three parts: the angel Gabriel's greeting at the Annunciation ("Hail Mary, full of grace, the Lord is with thee" — Luke 1:28), Elizabeth's greeting at the Visitation ("Blessed art thou among women, and blessed is the fruit of thy womb" — Luke 1:42), and the Church's petition added in the Middle Ages ("Holy Mary, Mother of God, pray for us sinners...").
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                The Hail Mary is prayed 53 times in a full Rosary. It is the most distinctively Catholic prayer and the one most associated with Marian devotion.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Glory Be (Doxology)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-4">
                <p className="text-text italic leading-relaxed text-sm">
                  Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.
                </p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                The Glory Be is a short prayer of praise to the Trinity. It is prayed at the end of each decade of the Rosary, at the end of each Psalm in the Liturgy of the Hours, and at many other moments in Catholic prayer. It is one of the oldest prayers in the Church, dating to the early centuries of Christianity.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Apostles' Creed</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-4">
                <p className="text-text italic leading-relaxed text-sm">
                  I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.
                </p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                The Apostles' Creed is a summary of the Christian faith, traditionally attributed to the twelve apostles. It is prayed at the beginning of the Rosary and in the Liturgy of the Hours. It covers the essential truths of the faith: the Trinity, the Incarnation, the Passion, Death, Resurrection, and Ascension of Christ, and the gifts of the Holy Spirit.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic prayer life?"
                description="Take our faith assessment and receive a personalized guide to growing in prayer."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Nicene Creed</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-4">
                <p className="text-text italic leading-relaxed text-sm">
                  I believe in one God, the Father almighty, maker of heaven and earth, of all things visible and invisible. I believe in one Lord Jesus Christ, the Only Begotten Son of God, born of the Father before all ages. God from God, Light from Light, true God from true God, begotten, not made, consubstantial with the Father; through him all things were made. For us men and for our salvation he came down from heaven, and by the Holy Spirit was incarnate of the Virgin Mary, and became man. For our sake he was crucified under Pontius Pilate, he suffered death and was buried, and rose again on the third day in accordance with the Scriptures. He ascended into heaven and is seated at the right hand of the Father. He will come again in glory to judge the living and the dead and his kingdom will have no end. I believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father and the Son, who with the Father and the Son is adored and glorified, who has spoken through the prophets. I believe in one, holy, catholic and apostolic Church. I confess one Baptism for the forgiveness of sins and I look forward to the resurrection of the dead and the life of the world to come. Amen.
                </p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                The Nicene Creed is the profession of faith prayed at Sunday Mass. It was formulated at the Council of Nicaea (325 AD) and expanded at the Council of Constantinople (381 AD) to combat the Arian heresy. It is more detailed than the Apostles' Creed, especially regarding the divinity of Christ and the Holy Spirit.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Act of Contrition</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-4">
                <p className="text-text italic leading-relaxed text-sm">
                  O my God, I am heartily sorry for having offended Thee, and I detest all my sins because of Thy just punishments, but most of all because they offend Thee, my God, who art all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to sin no more and to avoid the near occasions of sin. Amen.
                </p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                The Act of Contrition is the prayer of sorrow for sin, prayed during the Sacrament of Confession. It expresses three essential elements of true contrition: sorrow for sin, the reason for that sorrow (love of God, not just fear of punishment), and a firm purpose of amendment (the resolve to sin no more).
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Morning Offering</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-4">
                <p className="text-text italic leading-relaxed text-sm">
                  O Jesus, through the Immaculate Heart of Mary, I offer You my prayers, works, joys, and sufferings of this day in union with the Holy Sacrifice of the Mass throughout the world. I offer them for all the intentions of Your Sacred Heart: the salvation of souls, reparation for sin, and the reunion of all Christians. Amen.
                </p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                The Morning Offering consecrates the entire day to God. When prayed sincerely each morning, it transforms every action of the day — work, meals, conversations, even suffering — into an act of worship united to the Mass.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Prayer to Saint Michael</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-4">
                <p className="text-text italic leading-relaxed text-sm">
                  Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do thou, O Prince of the Heavenly Host, by the power of God, cast into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen.
                </p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                This prayer was composed by Pope Leo XIII in 1886 after he reportedly had a vision of Satan boasting that he could destroy the Church. Leo ordered it to be prayed after every Low Mass. Though this practice was discontinued after the Second Vatican Council, the prayer remains one of the most powerful in the Catholic tradition and is widely used for spiritual protection.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Memorare</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-4">
                <p className="text-text italic leading-relaxed text-sm">
                  Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thy intercession was left unaided. Inspired by this confidence, I fly unto thee, O Virgin of virgins, my mother; to thee do I come, before thee I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me. Amen.
                </p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                The Memorare is attributed to St. Bernard of Clairvaux (12th century), though its current form dates to the 15th century. It is a prayer of confident petition to Mary, based on the conviction that she never abandons those who seek her help. St. Francis de Sales recommended praying it daily.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Angelus</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-4">
                <p className="text-text italic leading-relaxed text-sm">
                  V. The Angel of the Lord declared unto Mary.<br />
                  R. And she conceived of the Holy Spirit.<br />
                  Hail Mary...<br /><br />
                  V. Behold the handmaid of the Lord.<br />
                  R. Be it done unto me according to thy word.<br />
                  Hail Mary...<br /><br />
                  V. And the Word was made flesh.<br />
                  R. And dwelt among us.<br />
                  Hail Mary...<br /><br />
                  V. Pray for us, O holy Mother of God.<br />
                  R. That we may be made worthy of the promises of Christ.<br /><br />
                  Let us pray: Pour forth, we beseech Thee, O Lord, Thy grace into our hearts; that we, to whom the Incarnation of Christ, Thy Son, was made known by the message of an angel, may by His Passion and Cross be brought to the glory of His Resurrection, through the same Christ Our Lord. Amen.
                </p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                The Angelus is prayed three times a day — at 6am, noon, and 6pm — traditionally at the sound of church bells. It meditates on the Annunciation and the Incarnation. During Eastertide (from Easter to Pentecost), the Angelus is replaced by the Regina Caeli.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Divine Mercy Chaplet</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                The Divine Mercy Chaplet was given to St. Faustina Kowalska by Jesus in a vision in 1935. It is prayed on Rosary beads and takes about 15 minutes. Jesus promised extraordinary graces to those who pray it, especially at the Hour of Mercy (3pm) — the hour of His death.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                The chaplet begins with the Our Father, Hail Mary, and Apostles' Creed. On the large beads: "Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, Our Lord Jesus Christ, in atonement for our sins and those of the whole world." On the small beads: "For the sake of His sorrowful Passion, have mercy on us and on the whole world." It concludes: "Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world" (three times).
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Rosary</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                The Rosary is the most beloved Catholic devotional prayer. It combines vocal prayer (the Our Father, Hail Mary, Glory Be) with meditation on the 20 mysteries of the life of Jesus and Mary. A full Rosary consists of four sets of five decades each: the Joyful, Sorrowful, Glorious, and Luminous Mysteries.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                Our Lady of Fatima asked the three shepherd children to pray the Rosary every day. Pope John Paul II called it "my favorite prayer" and prayed it daily. The Rosary is one of the most powerful weapons against evil and one of the most effective means of growing in holiness.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Examination of Conscience</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                The Examination of Conscience (Examen) is a daily prayer practice recommended by St. Ignatius of Loyola. It involves reviewing the day in God's presence, giving thanks for blessings, identifying moments of sin or failure, asking for forgiveness, and resolving to do better tomorrow. It takes about 10-15 minutes and is best done in the evening.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Grace Before and After Meals</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-4">
                <p className="text-text italic leading-relaxed text-sm">
                  <strong>Before meals:</strong> Bless us, O Lord, and these Thy gifts, which we are about to receive from Thy bounty, through Christ our Lord. Amen.<br /><br />
                  <strong>After meals:</strong> We give Thee thanks for all Thy benefits, O Almighty God, who livest and reignest forever; and may the souls of the faithful departed, through the mercy of God, rest in peace. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Confiteor</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-4">
                <p className="text-text italic leading-relaxed text-sm">
                  I confess to almighty God and to you, my brothers and sisters, that I have greatly sinned in my thoughts and in my words, in what I have done and in what I have failed to do, through my fault, through my fault, through my most grievous fault; therefore I ask blessed Mary ever-Virgin, all the Angels and Saints, and you, my brothers and sisters, to pray for me to the Lord our God.
                </p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-complete-guide">
                The Confiteor ("I confess") is prayed at the beginning of Mass during the Penitential Act. It is a public acknowledgment of sinfulness and a request for the intercession of Mary, the angels, and the saints.
              </LinkedText>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "Prayer is the raising of one's mind and heart to God or the requesting of good things from God."
                </p>
                <p className="text-text-muted text-center mt-2">— St. John Damascene (CCC 2559)</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "What are the most important Catholic prayers to know?", answer: "The most essential Catholic prayers are: the Sign of the Cross, the Our Father, the Hail Mary, the Glory Be, the Apostles' Creed, and the Act of Contrition. These are the foundation of Catholic prayer life and are used in the Rosary, the Mass, and daily devotions." },
              { question: "What is the difference between the Apostles' Creed and the Nicene Creed?", answer: "Both are professions of faith, but the Nicene Creed is longer and more theologically precise. The Apostles' Creed is used in the Rosary and the Liturgy of the Hours. The Nicene Creed is prayed at Sunday Mass. The Nicene Creed was formulated at the Councils of Nicaea (325) and Constantinople (381) to combat specific heresies." },
              { question: "How often should Catholics pray?", answer: "The Church recommends daily prayer — at minimum, morning and evening prayer. The ideal is to pray throughout the day: morning prayer, grace before meals, the Angelus at noon, evening prayer, and the Examen before bed. The Liturgy of the Hours structures prayer at seven times throughout the day." },
              { question: "Can Catholics pray in their own words?", answer: "Absolutely. While the Church has a rich treasury of traditional prayers, personal prayer — speaking to God in your own words — is equally important and encouraged. The Catechism describes prayer as 'a vital and personal relationship with the living and true God' (CCC 2558). Traditional prayers and personal prayer complement each other." },
              { question: "What is the best Catholic prayer for protection?", answer: "The Prayer to Saint Michael is widely used for spiritual protection. The Rosary is also considered a powerful weapon against evil. The Memorare is a prayer of confident petition to Mary. For daily protection, many Catholics pray the Morning Offering and the Breastplate of Saint Patrick." },
            ]} />

            <RelatedArticles currentSlug="catholic-prayers-complete-guide" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Prayer Life?</h3>
              <p className="text-text-muted mb-6">Take our faith assessment and receive a personalized guide to growing in prayer.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
