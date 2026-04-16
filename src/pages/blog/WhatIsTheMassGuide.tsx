import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Church, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function WhatIsTheMassGuide() {
  return (
    <>
      <Helmet>
        <title>What Is the Catholic Mass? A Complete Guide for Beginners | Guide Catholic</title>
        <meta name="description" content="What is the Catholic Mass? Learn the two main parts of the Mass, what happens at each stage, what to do as a visitor, why Catholics go every Sunday, and the Real Presence of Christ." />
        <meta name="keywords" content="what is the catholic mass, catholic mass explained, parts of the mass, mass for beginners, understanding the mass" />
        <link rel="canonical" href="https://guidecatholic.com/blog/what-is-the-catholic-mass/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="What Is the Catholic Mass? The Master Guide to the Eucharist"
        description="Master the central act of Catholic worship. Learn about Transubstantiation, the Real Presence, and how the Mass is the re-presentation of Christ's sacrifice."
        url="https://guidecatholic.com/blog/what-is-the-catholic-mass/"
        author="Catholic Faith Guide Team"
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
              <span className="text-text">What Is the Catholic Mass?</span>
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
                <span className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-xs font-medium">
                  Liturgy & Sacraments
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
                What Is the Catholic Mass? A Master Guide to the Mystery
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                The Mass is the "Source and Summit" of the Christian life. It is not just a prayer; it is the moment where <strong>Heaven and Earth kiss</strong>.
              </p>
            </header>

            <div className="aspect-video bg-stone-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
               <Church className="w-24 h-24 text-stone-400/20 absolute -bottom-4 -right-4" />
               <Church className="w-32 h-32 text-stone-400 relative z-10" strokeWidth={1} />
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                To the outside observer, the Mass looks like a series of rituals. To the expert, it is an <strong>Entry into Eternity</strong>. In every Mass, time stands still. We are not "remembering" a past event; we are present at the single, eternal sacrifice of Jesus Christ on Calvary.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The Theology of Transubstantiation
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The core of the Mass is the belief in the <strong>Real Presence</strong>. Catholics do not believe the bread is a "symbol." Through <strong>Transubstantiation</strong>, the <em>substance</em> of bread and wine is changed into the Body, Blood, Soul, and Divinity of Jesus, while the <em>accidents</em> (look, taste, smell) remain.
              </p>

              <div className="bg-stone-50 border border-stone-200 rounded-xl p-8 mb-10">
                 <h4 className="font-bold text-text mb-4">Understanding the Miracle</h4>
                 <p className="text-sm text-text leading-relaxed italic mb-0">
                    "Christ is present in this sacrament not only in His divinity... but also in His true body." — St. Thomas Aquinas. 
                    This is the "Mystery of Faith." It is the reason Catholics kneel: they are in the physical presence of their Creator.
                 </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. Sacrifice vs. Memorial: The Anamnesis
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Is the Mass a sacrifice? Yes. But it is an <strong>unbloody sacrifice</strong>. The Church calls this <em>Anamnesis</em>—a Greek word that doesn't mean "memory," but "making present." The priest, acting <em>In Persona Christi</em>, offers the same sacrifice of the Cross, not a new one. This is why the Mass has infinite value.
              </p>

              <QuizCTA
                title="Are you entering the mystery?"
                description="The Mass is the most powerful hour of your week. Take our quiz to receive a custom guide on how to participate more actively in the Liturgy and receive more grace."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Two Main Parts of the Mass
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Mass is divided into two main parts: the <strong>Liturgy of the Word</strong> and the <strong>Liturgy of the Eucharist</strong>. These two parts are so intimately connected that they form one single act of worship. The early Christians called them the "Mass of the Catechumens" (those preparing for baptism could attend) and the "Mass of the Faithful" (only the baptized could remain).
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">Overview of the Mass Structure</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-text">Introductory Rites</p>
                    <p className="text-text-muted text-sm">Entrance Procession, Sign of the Cross, Greeting, Penitential Act, Gloria, Collect (Opening Prayer)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-text">Liturgy of the Word</p>
                    <p className="text-text-muted text-sm">First Reading, Responsorial Psalm, Second Reading, Gospel Acclamation, Gospel, Homily, Creed, Universal Prayer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-text">Liturgy of the Eucharist</p>
                    <p className="text-text-muted text-sm">Preparation of Gifts, Eucharistic Prayer, Communion Rite, Prayer After Communion</p>
                  </div>
                  <div>
                    <p className="font-semibold text-text">Concluding Rites</p>
                    <p className="text-text-muted text-sm">Announcements, Blessing, Dismissal</p>
                  </div>
                </div>
              </div>

              <QuizCTA
                title="How well do you understand the Mass?"
                description="The Mass is the source and summit of Catholic life. Take our quiz and discover how to participate more fully in this sacred mystery."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Introductory Rites
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Mass begins with the <strong>Entrance Procession</strong> — the priest and ministers process to the altar while the congregation sings an entrance hymn. This procession symbolizes the Church's journey toward God.
              </p>
              <p className="text-text leading-relaxed mb-6">
                After the Sign of the Cross and the priest's greeting ("The Lord be with you"), the congregation participates in the <strong>Penitential Act</strong> — acknowledging their sinfulness and asking for God's mercy. The most common form is the Confiteor: "I confess to Almighty God and to you, my brothers and sisters, that I have greatly sinned..."
              </p>
              <p className="text-text leading-relaxed mb-6">
                On Sundays and feast days, the <strong>Gloria</strong> is sung — a hymn of praise that echoes the angels' song at the birth of Christ (Luke 2:14). The Introductory Rites conclude with the <strong>Collect</strong> (Opening Prayer), in which the priest gathers the prayers of the congregation and offers them to God.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Liturgy of the Word
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Liturgy of the Word is the first major part of the Mass. On Sundays, it includes three Scripture readings:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>First Reading</strong> — Usually from the Old Testament, chosen to connect with the Gospel reading</li>
                <li><strong>Responsorial Psalm</strong> — A psalm sung or recited responsively, meditating on the First Reading</li>
                <li><strong>Second Reading</strong> — From the New Testament letters (epistles), read in a semi-continuous sequence</li>
                <li><strong>Gospel Acclamation (Alleluia)</strong> — The congregation stands and sings to welcome the Gospel</li>
                <li><strong>Gospel</strong> — Read by the deacon or priest; the congregation stands as a sign of respect for Christ's words</li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                The <strong>Homily</strong> follows the Gospel — the priest or deacon breaks open the Word of God and applies it to the lives of the faithful. A good homily connects Scripture to daily life and deepens the congregation's understanding of the faith.
              </p>
              <p className="text-text leading-relaxed mb-6">
                On Sundays, the congregation then professes the <strong>Nicene Creed</strong> — the summary of Catholic faith formulated at the Councils of Nicaea (325 AD) and Constantinople (381 AD). This is followed by the <strong>Universal Prayer</strong> (Prayer of the Faithful), in which the congregation prays for the Church, the world, the sick, and the dead.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Liturgy of the Eucharist
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Liturgy of the Eucharist is the heart of the Mass. It begins with the <strong>Preparation of the Gifts</strong> — bread and wine are brought to the altar, along with the collection. The priest offers these gifts to God, and the congregation responds with "Blessed be God forever."
              </p>
              <p className="text-text leading-relaxed mb-6">
                The <strong>Eucharistic Prayer</strong> is the central prayer of the Mass. It begins with the Preface — a prayer of thanksgiving that varies according to the liturgical season — and the <strong>Sanctus</strong> ("Holy, Holy, Holy"), sung by the congregation. The Eucharistic Prayer includes:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>The Epiclesis</strong> — The priest calls down the Holy Spirit upon the gifts</li>
                <li><strong>The Words of Institution</strong> — The priest repeats Jesus's words at the Last Supper: "This is my body... This is the chalice of my blood." At this moment, the bread and wine become the Body and Blood of Christ.</li>
                <li><strong>The Memorial Acclamation</strong> — The congregation proclaims: "We proclaim your death, O Lord, and profess your resurrection until you come again."</li>
                <li><strong>The Great Amen</strong> — The congregation affirms the entire Eucharistic Prayer with a solemn "Amen."</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Communion Rite
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Communion Rite begins with the <strong>Lord's Prayer</strong> (Our Father), prayed together by the entire congregation. This is followed by the <strong>Sign of Peace</strong> — a gesture of reconciliation and unity before receiving Communion.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The <strong>Lamb of God</strong> (Agnus Dei) is sung as the priest breaks the consecrated host — a gesture that recalls Jesus's breaking of bread at the Last Supper and at Emmaus (Luke 24:30-31). The priest then holds up the host and says: "Behold the Lamb of God, behold him who takes away the sins of the world. Blessed are those called to the supper of the Lamb." The congregation responds: "Lord, I am not worthy that you should enter under my roof, but only say the word and my soul shall be healed."
              </p>
              <p className="text-text leading-relaxed mb-6">
                Catholics who are properly disposed (in a state of grace, having fasted for one hour) then receive <strong>Holy Communion</strong> — the Body and Blood of Christ. This is the summit of the Mass and of the entire Christian life.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What to Do as a Visitor
              </h2>
              <p className="text-text leading-relaxed mb-6">
                If you are attending Mass for the first time or as a non-Catholic visitor, here is what you need to know:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>Dress modestly.</strong> There is no strict dress code, but modest, respectful attire is appropriate.</li>
                <li><strong>Follow the congregation's movements.</strong> Stand, sit, and kneel when others do. If you're unsure, sitting is always appropriate.</li>
                <li><strong>Feel free to participate in the prayers and responses.</strong> You can join in the Lord's Prayer, the responses, and the hymns.</li>
                <li><strong>Do not receive Communion</strong> unless you are a Catholic in a state of grace. The Eucharist is reserved for Catholics who are properly prepared. Non-Catholics are welcome to come forward with arms crossed over the chest to receive a blessing from the priest or deacon.</li>
                <li><strong>Use a missalette or follow along on your phone.</strong> Many parishes have worship aids in the pews. The entire Order of Mass is also available online.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Why Catholics Go to Mass Every Sunday
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Catholic Church requires Catholics to attend Mass on Sundays and holy days of obligation. This is not an arbitrary rule — it flows from the nature of the Mass itself. If the Mass is truly the re-presentation of Christ's sacrifice and the reception of His Body and Blood, then missing it without serious reason is a grave matter.
              </p>
              <p className="text-text leading-relaxed mb-6">
                But beyond the obligation, Catholics go to Mass because they want to. The Mass is the source and summit of the Christian life (Vatican II, <em>Lumen Gentium</em> 11). It is where we encounter Christ most fully — in His Word, in the community of believers, in the priest, and above all in the Eucharist. It is where we are nourished for the week ahead and united with the universal Church across time and space.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center text-lg">
                  "The Eucharist is the source and summit of the Christian life."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Second Vatican Council, Lumen Gentium 11
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="what-is-the-catholic-mass" />

            <BlogFAQ faqs={[
              {
                question: "What is the Catholic Mass?",
                answer: "The Catholic Mass is the central act of worship in the Catholic Church. It is simultaneously a sacrifice (making present Christ's sacrifice on the Cross) and a sacred meal (the Eucharist). The Mass has two main parts: the Liturgy of the Word (Scripture readings and homily) and the Liturgy of the Eucharist (the consecration and Communion)."
              },
              {
                question: "How long does a Catholic Mass last?",
                answer: "A typical Sunday Mass lasts about 45 to 60 minutes. Daily Masses (Monday through Saturday) are usually shorter, around 25 to 35 minutes, as they have fewer readings and often no music. Special Masses (Christmas, Easter, ordinations) may be longer."
              },
              {
                question: "Can non-Catholics attend Mass?",
                answer: "Yes, non-Catholics are welcome to attend Mass. However, they should not receive Holy Communion, which is reserved for Catholics who are properly prepared (in a state of grace and having observed the one-hour fast). Non-Catholics may come forward with arms crossed over the chest to receive a blessing from the priest or deacon."
              },
              {
                question: "What happens at the consecration during Mass?",
                answer: "At the consecration, the priest repeats the words Jesus spoke at the Last Supper: 'This is my body' and 'This is the chalice of my blood.' Catholics believe that at this moment, through the power of the Holy Spirit and the words of the priest acting in persona Christi, the bread and wine truly become the Body and Blood of Jesus Christ — a doctrine called transubstantiation."
              },
              {
                question: "Why do Catholics kneel during Mass?",
                answer: "Catholics kneel as a sign of adoration and humility before God. The most important moment of kneeling is after the consecration, when the bread and wine have become the Body and Blood of Christ. Kneeling expresses the belief that Christ is truly present on the altar. Standing is the traditional posture for prayer in the early Church and is used during the Gospel and the Eucharistic Prayer in many places."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Discover How Your Faith Life Is
              </h3>
              <p className="text-text-muted mb-6">
                Take our quiz and receive a personalized assessment of your Catholic journey.
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
