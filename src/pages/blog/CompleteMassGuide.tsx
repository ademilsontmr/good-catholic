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
import { LinkedText } from "@/components/blog/LinkedText";

export default function CompleteMassGuide() {
  return (
    <>
      <Helmet>
        <title>The Complete Guide to the Catholic Mass: Every Part Explained | Guide Catholic</title>
        <meta name="description" content="The most comprehensive guide to the Catholic Mass — every part explained from the Introductory Rites to the Dismissal, with full prayer texts, posture guide, and tips for active participation." />
        <meta name="keywords" content="complete guide catholic mass, how to follow the mass, parts of the mass explained, catholic mass for beginners, what happens at mass, mass guide catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/complete-guide-to-the-catholic-mass/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="The Complete Guide to the Catholic Mass: Every Part Explained"
        description="The most comprehensive guide to the Catholic Mass — every part explained from the Introductory Rites to the Dismissal, with full prayer texts, posture guide, and tips for active participation."
        url="https://guidecatholic.com/blog/complete-guide-to-the-catholic-mass/"
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
              <span className="text-text">Complete Guide to the Catholic Mass</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Liturgy &amp; Worship</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 1, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />22 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Complete Guide to the Catholic Mass: Every Part Explained
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Mass is the source and summit of the Christian life. Whether you are attending for the first time or have been going for decades, this is the only guide you will ever need — every part explained, every prayer in full, and everything you need to participate actively and fruitfully.
              </p>
            </header>
            <div className="aspect-video bg-violet-50 rounded-2xl flex items-center justify-center mb-10">
              <Church className="w-24 h-24 text-violet-600" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-guide-to-the-catholic-mass">
                The Second Vatican Council called the Eucharist "the source and summit of the Christian life" (Lumen Gentium 11). The Catechism of the Catholic Church echoes this: "The Eucharist is 'the source and summit of the Christian life'" (CCC 1324). Everything in the Church flows from the Mass and leads back to it. Understanding what happens at Mass — and why — transforms attendance from a passive obligation into an encounter with the living God.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Mass Is</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-guide-to-the-catholic-mass">
                The Mass is not a mere memorial or symbolic re-enactment of the Last Supper. It is the re-presentation — made present again — of Christ's one sacrifice on Calvary. "The Eucharist is thus a sacrifice because it re-presents (makes present) the sacrifice of the cross" (CCC 1366). At every Mass, the same Christ who died on Good Friday offers Himself to the Father through the ministry of the priest. Time collapses: Calvary and the altar are one.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-guide-to-the-catholic-mass">
                This is why Catholics treat the Mass with such reverence. We are not attending a religious service — we are standing at the foot of the Cross, and then receiving the Risen Lord into our bodies in Holy Communion.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Two Main Parts of the Mass</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-guide-to-the-catholic-mass">
                The Mass has two great parts that form a single act of worship: the Liturgy of the Word and the Liturgy of the Eucharist. In the Liturgy of the Word, God speaks to us through Scripture and the Church's teaching. In the Liturgy of the Eucharist, we respond by offering ourselves with Christ to the Father, and receive Him back in Communion. These two parts are inseparable — the Word prepares us for the Eucharist, and the Eucharist fulfills the Word.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Complete Walkthrough: Every Part of the Mass</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Part 1: Introductory Rites</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-guide-to-the-catholic-mass">
                The Introductory Rites prepare us to hear God's Word and celebrate the Eucharist. They gather the assembly, establish communion, and dispose us for worship.
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Entrance Procession.</strong> The priest and ministers process to the altar while the Entrance Antiphon or a hymn is sung. The priest venerates the altar with a kiss — the altar represents Christ.</li>
                <li><strong>Sign of the Cross.</strong> "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." We begin as we were baptized — in the name of the Trinity.</li>
                <li><strong>Greeting.</strong> The priest greets the assembly: "The Lord be with you." The people respond: "And with your spirit." This ancient exchange (from Ruth 2:4) acknowledges the presence of Christ in the gathered community and in the ordained minister.</li>
                <li><strong>Penitential Act.</strong> We acknowledge our sinfulness before approaching the holy mysteries. The most common form is the Confiteor:</li>
              </ul>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Confiteor (I Confess)</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  I confess to almighty God and to you, my brothers and sisters, that I have greatly sinned, in my thoughts and in my words, in what I have done and in what I have failed to do, through my fault, through my fault, through my most grievous fault; therefore I ask blessed Mary ever-Virgin, all the Angels and Saints, and you, my brothers and sisters, to pray for me to the Lord our God.
                </p>
              </div>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Kyrie.</strong> "Lord, have mercy. Christ, have mercy. Lord, have mercy." (Or in Greek: Kyrie eleison, Christe eleison, Kyrie eleison.) This ancient litany is addressed to Christ, not the Father — it is a cry of trust, not despair.</li>
                <li><strong>Gloria.</strong> On Sundays and feast days, the Gloria is sung or recited — a hymn of praise that echoes the angels' song at Bethlehem:</li>
              </ul>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Gloria</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Glory to God in the highest, and on earth peace to people of good will. We praise you, we bless you, we adore you, we glorify you, we give you thanks for your great glory, Lord God, heavenly King, O God, almighty Father. Lord Jesus Christ, Only Begotten Son, Lord God, Lamb of God, Son of the Father, you take away the sins of the world, have mercy on us; you take away the sins of the world, receive our prayer; you are seated at the right hand of the Father, have mercy on us. For you alone are the Holy One, you alone are the Lord, you alone are the Most High, Jesus Christ, with the Holy Spirit, in the glory of God the Father. Amen.
                </p>
              </div>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Collect (Opening Prayer).</strong> The priest "collects" the prayers of the assembly into one prayer addressed to the Father, through Christ, in the Holy Spirit. The people respond "Amen" — their ratification of the prayer.</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Part 2: Liturgy of the Word</h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>First Reading.</strong> Usually from the Old Testament (or Acts during Easter season). We sit to listen — a posture of receptive attention.</li>
                <li><strong>Responsorial Psalm.</strong> A psalm sung or recited in response to the First Reading. The cantor sings the verses; the assembly sings the refrain. The psalms are the prayer book of the Bible.</li>
                <li><strong>Second Reading.</strong> From the New Testament letters (epistles). On weekdays there is only one reading before the Gospel.</li>
                <li><strong>Gospel Acclamation (Alleluia).</strong> We stand to welcome Christ present in the Gospel. "Alleluia" means "Praise the Lord." During Lent, a different acclamation replaces it.</li>
                <li><strong>Gospel.</strong> The deacon or priest proclaims the Gospel. Before reading, he says: "The Lord be with you" — "And with your spirit." Then: "A reading from the holy Gospel according to N." — "Glory to you, O Lord." We make a small Sign of the Cross on our forehead, lips, and heart: may this Gospel be in my mind, on my lips, and in my heart. After: "The Gospel of the Lord" — "Praise to you, Lord Jesus Christ."</li>
                <li><strong>Homily.</strong> The priest or deacon breaks open the Word of God, applying it to the life of the assembly. We sit to listen.</li>
                <li><strong>Nicene Creed.</strong> On Sundays and solemnities, we profess our faith together:</li>
              </ul>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Nicene Creed</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  I believe in one God, the Father almighty, maker of heaven and earth, of all things visible and invisible. I believe in one Lord Jesus Christ, the Only Begotten Son of God, born of the Father before all ages. God from God, Light from Light, true God from true God, begotten, not made, consubstantial with the Father; through him all things were made. For us men and for our salvation he came down from heaven, and by the Holy Spirit was incarnate of the Virgin Mary, and became man. For our sake he was crucified under Pontius Pilate, he suffered death and was buried, and rose again on the third day in accordance with the Scriptures. He ascended into heaven and is seated at the right hand of the Father. He will come again in glory to judge the living and the dead and his kingdom will have no end. I believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father and the Son, who with the Father and the Son is adored and glorified, who has spoken through the prophets. I believe in one, holy, catholic and apostolic Church. I confess one Baptism for the forgiveness of sins and I look forward to the resurrection of the dead and the life of the world to come. Amen.
                </p>
              </div>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Prayer of the Faithful (Universal Prayer).</strong> We pray for the Church, the world, those in need, and the local community. The deacon or lector reads the intentions; the assembly responds: "Lord, hear our prayer."</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Part 3: Liturgy of the Eucharist</h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Offertory (Preparation of the Gifts).</strong> Bread and wine are brought to the altar — often by members of the assembly. The priest offers them to God with quiet prayers. A collection is taken up: our material gifts represent our whole selves offered to God.</li>
                <li><strong>Eucharistic Prayer.</strong> The great prayer of thanksgiving and consecration. There are four main Eucharistic Prayers in the Roman Rite (plus several for special occasions). All follow the same structure: Preface, Sanctus, Epiclesis (calling down the Holy Spirit), Institution Narrative (Consecration), Anamnesis (memorial), Offering, Intercessions, and Doxology.</li>
                <li><strong>Preface and Sanctus.</strong> The priest leads the assembly in a dialogue: "Lift up your hearts" — "We lift them up to the Lord." Then the Sanctus:</li>
              </ul>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Sanctus (Holy, Holy, Holy)</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Holy, Holy, Holy Lord God of hosts. Heaven and earth are full of your glory. Hosanna in the highest. Blessed is he who comes in the name of the Lord. Hosanna in the highest.
                </p>
              </div>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Consecration (Words of Institution).</strong> The most sacred moment of the Mass. The priest, acting in the person of Christ (in persona Christi), speaks the words Jesus spoke at the Last Supper: "This is my Body... This is the chalice of my Blood." At these words, the bread and wine become the Body and Blood of Christ — transubstantiation. The priest elevates the Host and the Chalice; we adore in silence.</li>
                <li><strong>Memorial Acclamation.</strong> After the Consecration, the priest says: "The mystery of faith." The assembly responds with one of three acclamations, such as: "We proclaim your Death, O Lord, and profess your Resurrection until you come again."</li>
                <li><strong>Great Amen.</strong> At the end of the Eucharistic Prayer, the priest raises the Host and Chalice and says: "Through him, and with him, and in him, O God, almighty Father, in the unity of the Holy Spirit, all glory and honor is yours, for ever and ever." The assembly responds with the Great Amen — the most important "Amen" of the Mass, ratifying the entire Eucharistic Prayer.</li>
              </ul>

              <QuizCTA
                title="How well do you know the Catholic Mass?"
                description="Take our faith assessment and receive a personalized guide to deepening your understanding of the liturgy and the sacraments."
              />

              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Our Father (Lord's Prayer).</strong> We pray together as children of God:</li>
              </ul>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Our Father</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.
                </p>
              </div>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Sign of Peace.</strong> We offer each other a sign of peace — a handshake or bow — as a sign of reconciliation and unity before receiving Communion. This is not a social greeting but a liturgical act.</li>
                <li><strong>Agnus Dei (Lamb of God).</strong> As the priest breaks the Host (the Fraction), the assembly sings or recites:</li>
              </ul>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Agnus Dei</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Lamb of God, you take away the sins of the world, have mercy on us. Lamb of God, you take away the sins of the world, have mercy on us. Lamb of God, you take away the sins of the world, grant us peace.
                </p>
              </div>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Communion.</strong> The priest receives Communion first, then distributes it to the faithful. Catholics in a state of grace receive the Body of Christ (and optionally the Blood) with reverence — either on the tongue or in the hand. Non-Catholics and Catholics not in a state of grace do not receive; they may come forward with arms crossed for a blessing.</li>
                <li><strong>Communion Prayer (Prayer After Communion).</strong> After a period of silent thanksgiving, the priest prays the Post-Communion Prayer, asking that the Eucharist bear fruit in our lives.</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Part 4: Concluding Rites</h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Final Blessing.</strong> The priest blesses the assembly in the name of the Trinity. We bow our heads to receive it.</li>
                <li><strong>Dismissal.</strong> The deacon or priest dismisses the assembly with one of four formulas, the most famous being: "Go forth, the Mass is ended." The Latin original — "Ite, missa est" — is the origin of the word "Mass." The dismissal is not an ending but a sending: go and live what you have celebrated.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Postures at Mass: When to Stand, Sit, and Kneel</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-guide-to-the-catholic-mass">
                Posture is not mere etiquette — it is prayer with the body. The General Instruction of the Roman Missal (GIRM) specifies the postures for each part of the Mass, and they carry meaning.
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Standing</strong> is the posture of the Resurrection — of those who have been raised with Christ. We stand for the Entrance Procession, the Gospel, the Creed, the Prayer of the Faithful, and the Eucharistic Prayer (in some countries).</li>
                <li><strong>Sitting</strong> is the posture of attentive listening and receptivity. We sit for the readings, the Responsorial Psalm, and the Homily.</li>
                <li><strong>Kneeling</strong> is the posture of adoration and penitence. In the Roman Rite, we kneel from the Sanctus through the Great Amen (the Consecration), and for the reception of Communion (in some traditions). Kneeling says: "You are God and I am not."</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Participate Actively at Mass</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-guide-to-the-catholic-mass">
                Vatican II called for the "full, conscious, and active participation" of the faithful (Sacrosanctum Concilium 14). This does not mean doing more things — it means engaging your mind, heart, and will in what is happening at the altar.
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Respond to the priest's greetings and prayers clearly and with conviction.</li>
                <li>Sing the hymns and acclamations — singing is praying twice (St. Augustine).</li>
                <li>Listen to the readings as if God is speaking directly to you — because He is.</li>
                <li>During the Consecration, unite your heart with the priest's offering: offer yourself with Christ to the Father.</li>
                <li>Receive Communion with faith and reverence, saying "Amen" as if you mean it — because you are affirming that this is truly the Body of Christ.</li>
                <li>Spend time in silent thanksgiving after Communion — this is one of the most precious moments of the Mass.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">For Non-Catholics and Visitors</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-guide-to-the-catholic-mass">
                Non-Catholics are warmly welcome to attend Mass. You may participate in all the prayers and responses, stand and sit with the assembly, and observe the Consecration with reverence. However, only Catholics who are in a state of grace (free from mortal sin) and who have observed the Eucharistic fast may receive Holy Communion. This is not a sign of exclusion — it reflects the Catholic belief that Communion is a sign of full unity in faith, which has not yet been achieved between Catholics and other Christians. Non-Catholics may come forward with arms crossed over the chest to receive a blessing from the priest or deacon.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Prepare for Mass</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>The Eucharistic fast.</strong> Catholics must fast from food and drink (except water and medicine) for at least one hour before receiving Communion. This physical fast is a sign of spiritual hunger for Christ.</li>
                <li><strong>Arrive early.</strong> Arrive 5–10 minutes before Mass begins. Use this time for silent prayer, reading the day's readings, or simply quieting your mind.</li>
                <li><strong>Examination of conscience.</strong> If you are aware of any mortal sin, go to Confession before receiving Communion. If you cannot get to Confession, make an Act of Perfect Contrition and resolve to go as soon as possible — but do not receive Communion in a state of mortal sin.</li>
                <li><strong>Read the readings in advance.</strong> Many Catholics read the day's Scripture readings the night before. This allows the Word to take root before Mass.</li>
                <li><strong>Dress appropriately.</strong> Modest, respectful dress honors the sacred nature of what you are about to do.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">After Mass: Thanksgiving and Mission</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-guide-to-the-catholic-mass">
                The Mass does not end at the Dismissal — it continues in your life. The word "Mass" comes from the Latin "missa" (sending). You are sent to bring Christ to the world. After Mass, spend a few minutes in thanksgiving — either in the church or at home. Many saints recommend at least 15 minutes of thanksgiving after receiving Communion. You have just received the Body, Blood, Soul, and Divinity of Jesus Christ. Let that sink in.
              </LinkedText>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "The Mass is the most perfect form of prayer."
                </p>
                <p className="text-text-muted text-center mt-2">— Pope Paul VI</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "Do I have to go to Mass every Sunday?", answer: "Yes. Attending Mass on Sundays and holy days of obligation is one of the precepts of the Catholic Church (CCC 2042). Missing Mass on Sunday without a serious reason (illness, caring for a sick person, no Mass available) is a mortal sin. This is not a burden but a gift — the Church is protecting your access to the greatest prayer on earth." },
              { question: "What if I arrive late to Mass?", answer: "If you arrive after the Gospel, you have missed the Liturgy of the Word and should not receive Communion — you have not fulfilled your Sunday obligation. If you arrive before the Gospel, you may receive Communion. If you are regularly late, examine why and make arriving on time a priority." },
              { question: "Can I receive Communion at every Mass?", answer: "You may receive Communion up to twice per day, provided you are in a state of grace (no unconfessed mortal sin), have observed the one-hour Eucharistic fast, and are a baptized Catholic who has made their First Communion. If you are aware of a mortal sin, go to Confession first." },
              { question: "What is the difference between the Ordinary Form and the Extraordinary Form of the Mass?", answer: "The Ordinary Form (Novus Ordo) is the Mass promulgated by Pope Paul VI in 1969, celebrated in the vernacular (local language). The Extraordinary Form (Traditional Latin Mass or Tridentine Mass) is the older form of the Roman Rite, celebrated in Latin. Both are valid forms of the Roman Rite. The Extraordinary Form is now more restricted following Pope Francis's Traditionis Custodes (2021)." },
              { question: "Why does the priest face away from the people sometimes?", answer: "In the Extraordinary Form and in some celebrations of the Ordinary Form, the priest faces the same direction as the people (ad orientem — toward the East, toward the rising sun, symbol of Christ's return). This is not the priest turning his back on the people — it is the priest and people together facing God. In the more common arrangement (versus populum), the priest faces the people across the altar." },
            ]} />

            <RelatedArticles currentSlug="complete-guide-to-the-catholic-mass" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your knowledge of the Mass and the sacraments.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
