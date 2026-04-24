import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function CorpusChristiCatholic() {
  return (
    <>
      <Helmet>
        <title>Corpus Christi: The Feast of the Body and Blood of Christ | Guide Catholic</title>
        <meta name="description" content="What is Corpus Christi? Learn about the feast of the Body and Blood of Christ — its history, the Eucharistic procession, the prayers of St. Thomas Aquinas, and how Catholics celebrate it." />
        <meta name="keywords" content="corpus christi catholic, feast of corpus christi, body and blood of christ, corpus christi procession, corpus christi 2026, eucharist feast day, thomas aquinas corpus christi" />
        <link rel="canonical" href="https://guidecatholic.com/blog/corpus-christi-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Corpus Christi: The Feast of the Body and Blood of Christ"
        description="What is Corpus Christi? Learn about the feast of the Body and Blood of Christ — its history, the Eucharistic procession, the prayers of St. Thomas Aquinas, and how Catholics celebrate it."
        url="https://guidecatholic.com/blog/corpus-christi-catholic/"
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
              <span className="text-text">Corpus Christi</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Liturgy & Worship</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />15 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Corpus Christi: The Feast of the Body and Blood of Christ
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Every year, Catholics around the world carry the Eucharist through the streets in solemn procession — a public declaration that Jesus Christ is truly present in the Blessed Sacrament. This is Corpus Christi: one of the most beautiful and theologically rich feasts in the Catholic calendar.
              </p>
            </header>

            <div className="aspect-video bg-yellow-50 rounded-2xl flex items-center justify-center mb-10">
              <Cross className="w-24 h-24 text-yellow-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Corpus Christi — Latin for "Body of Christ" — is the solemnity that celebrates the Real Presence of Jesus Christ in the Eucharist. It is celebrated on the Thursday after Trinity Sunday (or, in some countries, on the following Sunday), approximately 60 days after Easter. In 2026, Corpus Christi falls on June 4.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The feast is distinctive in the Catholic calendar because it is not primarily about a historical event (like Christmas or Easter) but about a present reality: the ongoing presence of Christ in the Blessed Sacrament. Every Mass, every tabernacle, every monstrance in every Catholic church in the world contains what the Church believes to be the Body, Blood, Soul, and Divinity of Jesus Christ. Corpus Christi is the feast that celebrates this extraordinary truth.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Origin of the Feast: St. Juliana of Liège</h2>
              <p className="text-text leading-relaxed mb-6">
                The feast of Corpus Christi originated in the 13th century, largely through the efforts of a Belgian mystic named Juliana of Liège (1193–1258). From her youth, Juliana had a deep devotion to the Eucharist and a recurring vision: she saw the full moon with a dark spot on it. She understood this to mean that the liturgical calendar was incomplete — it lacked a feast specifically dedicated to the Eucharist.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Juliana spent decades promoting the idea of such a feast, facing significant opposition. She finally found a sympathetic ear in Robert de Thorete, the Bishop of Liège, who instituted the feast locally in 1246. But it was not until after Juliana's death that the feast became universal.
              </p>
              <p className="text-text leading-relaxed mb-6">
                In 1263, a German priest named Peter of Prague was making a pilgrimage to Rome, troubled by doubts about the Real Presence. While celebrating Mass at the Church of Santa Cristina in Bolsena, Italy, he saw blood seeping from the consecrated Host and staining the corporal (the white cloth on the altar). This miracle — the Miracle of Bolsena — was reported to Pope Urban IV, who was staying nearby in Orvieto.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Moved by the miracle and by the longstanding request for a universal feast of the Eucharist, Pope Urban IV instituted the feast of Corpus Christi for the universal Church in 1264, with the papal bull Transiturus de hoc mundo. He commissioned the greatest theologian of the age — Thomas Aquinas — to compose the liturgy for the new feast.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Thomas Aquinas and the Corpus Christi Liturgy</h2>
              <p className="text-text leading-relaxed mb-6">
                The liturgy that Thomas Aquinas composed for Corpus Christi is considered one of the greatest achievements of medieval Latin poetry and theology. It includes two of the most beloved hymns in the Catholic tradition:
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Pange Lingua (Sing, My Tongue)</h3>
              <p className="text-text leading-relaxed mb-6">
                The Pange Lingua is a six-stanza hymn that tells the story of the Eucharist — from the Last Supper to the present moment. The last two stanzas, known as the Tantum Ergo, are sung at Benediction of the Blessed Sacrament throughout the year:
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-sm">
                  Tantum ergo Sacramentum<br />
                  Veneremur cernui:<br />
                  Et antiquum documentum<br />
                  Novo cedat ritui:<br />
                  Praestet fides supplementum<br />
                  Sensuum defectui.<br /><br />
                  <em>(Down in adoration falling,<br />
                  Lo! the sacred Host we hail,<br />
                  Lo! o'er ancient forms departing<br />
                  Newer rites of grace prevail;<br />
                  Faith for all defects supplying,<br />
                  Where the feeble senses fail.)</em>
                </p>
              </div>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Lauda Sion (Praise, O Zion)</h3>
              <p className="text-text leading-relaxed mb-6">
                The Lauda Sion is the sequence (a special hymn sung before the Gospel) for the Corpus Christi Mass. It is a theological masterpiece — a precise and beautiful exposition of Catholic Eucharistic doctrine in verse. It teaches that Christ is wholly present under each species (bread and wine), that the accidents (appearances) of bread and wine remain while the substance changes, and that the Eucharist is the same sacrifice as Calvary.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Eucharistic Procession</h2>
              <p className="text-text leading-relaxed mb-6">
                The most distinctive feature of Corpus Christi is the Eucharistic procession — a public procession through the streets in which the consecrated Host is carried in a monstrance (a golden vessel designed to display the Host) under a canopy, accompanied by the faithful singing hymns and strewing flowers.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The procession is a public act of faith — a declaration to the world that Jesus Christ is truly present in the Eucharist and that Catholics are not ashamed to honor Him publicly. In many countries, the streets are decorated with flower carpets, altars are set up at intervals along the route, and the entire community participates.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The procession typically stops at four outdoor altars, where the priest blesses the four directions of the compass with the monstrance — a symbolic blessing of the entire world with the Body of Christ.
              </p>
              <p className="text-text leading-relaxed mb-6">
                In some countries — particularly in Latin America, Spain, Portugal, and parts of Africa — the Corpus Christi procession is one of the most important public events of the year, drawing thousands of participants and lasting for hours.
              </p>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your Eucharistic devotion and Catholic life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Church Teaches About the Eucharist</h2>
              <p className="text-text leading-relaxed mb-6">
                Corpus Christi is an opportunity to reflect on the Church's teaching about the Eucharist — one of the most distinctive and challenging doctrines of Catholicism.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Catholic Church teaches that at the words of consecration in the Mass, the bread and wine are truly transformed into the Body and Blood of Christ. This transformation is called transubstantiation: the substance (the underlying reality) of the bread and wine becomes the Body and Blood of Christ, while the accidents (the appearances — color, taste, texture) remain those of bread and wine.
              </p>
              <p className="text-text leading-relaxed mb-6">
                This is not a symbolic presence or a spiritual presence — it is a real, substantial presence. The Catechism states: "In the most blessed sacrament of the Eucharist 'the body and blood, together with the soul and divinity, of our Lord Jesus Christ and, therefore, the whole Christ is truly, really, and substantially contained'" (CCC 1374).
              </p>
              <p className="text-text leading-relaxed mb-6">
                This teaching is based on the words of Jesus himself at the Last Supper ("This is my body... This is my blood") and in the Bread of Life discourse in John 6, where Jesus says: "My flesh is real food and my blood is real drink. Whoever eats my flesh and drinks my blood remains in me, and I in them" (John 6:55-56).
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Corpus Christi 2026: When and How to Celebrate</h2>
              <p className="text-text leading-relaxed mb-6">
                In 2026, the solemnity of Corpus Christi falls on Thursday, June 4 (or Sunday, June 7, in countries where it is transferred to Sunday). It is a Holy Day of Obligation in some countries (including parts of Europe and Latin America) but not in the United States, where it is celebrated on the Sunday after Trinity Sunday.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Ways to celebrate Corpus Christi:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Attend Mass.</strong> The Corpus Christi Mass is one of the most beautiful in the liturgical year, with the Lauda Sion sequence and the Tantum Ergo at the end.</li>
                <li><strong>Participate in the procession.</strong> If your parish holds a Corpus Christi procession, participate. It is a powerful act of public faith.</li>
                <li><strong>Make a Holy Hour.</strong> Spend an hour in Eucharistic adoration before the Blessed Sacrament, meditating on the Real Presence.</li>
                <li><strong>Read about the Eucharist.</strong> Deepen your understanding of the Real Presence by reading the Bread of Life discourse (John 6), the Catechism's section on the Eucharist (CCC 1322-1419), or a book on Eucharistic theology.</li>
                <li><strong>Make a spiritual communion.</strong> If you cannot receive Communion at Mass, make a spiritual communion — a prayer of desire to receive Christ.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Eucharistic Revival</h2>
              <p className="text-text leading-relaxed mb-6">
                In recent years, the Catholic Church in the United States has launched a National Eucharistic Revival — a multi-year initiative to renew Catholics' faith in and devotion to the Real Presence of Christ in the Eucharist. Studies have shown that a significant percentage of Catholics do not believe in the Real Presence — a crisis that the bishops have sought to address through catechesis, adoration, and renewed Eucharistic devotion.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Corpus Christi is the feast that stands at the heart of this revival. It is the Church's annual declaration that the Eucharist is not a symbol, not a memorial, not a spiritual metaphor — but the living Body and Blood of Jesus Christ, present in every tabernacle, offered at every Mass, received by every communicant who approaches with faith and love.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "O sacred banquet, in which Christ is received, the memory of His passion is renewed, the mind is filled with grace, and a pledge of future glory is given to us."
                </p>
                <p className="text-text-muted text-center mt-2">— Antiphon of Corpus Christi, attributed to St. Thomas Aquinas</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "What is Corpus Christi?", answer: "Corpus Christi (Latin for 'Body of Christ') is a Catholic solemnity that celebrates the Real Presence of Jesus Christ in the Eucharist. It is celebrated on the Thursday after Trinity Sunday (or the following Sunday in some countries), approximately 60 days after Easter. In 2026, it falls on June 4." },
              { question: "Who started the feast of Corpus Christi?", answer: "The feast was largely promoted by St. Juliana of Liège (1193–1258), a Belgian mystic who had a vision that the liturgical calendar lacked a feast dedicated to the Eucharist. Pope Urban IV instituted it for the universal Church in 1264, after the Miracle of Bolsena. He commissioned St. Thomas Aquinas to compose the liturgy." },
              { question: "What is the Corpus Christi procession?", answer: "The Corpus Christi procession is a public procession in which the consecrated Host is carried through the streets in a monstrance under a canopy, accompanied by the faithful singing hymns. It is a public act of faith in the Real Presence of Christ in the Eucharist. The procession typically stops at four outdoor altars, where the priest blesses the four directions of the compass." },
              { question: "What hymns are sung at Corpus Christi?", answer: "The two most famous hymns of Corpus Christi were composed by St. Thomas Aquinas: the Pange Lingua (whose last two stanzas, the Tantum Ergo, are sung at Benediction throughout the year) and the Lauda Sion (the sequence sung before the Gospel at the Corpus Christi Mass). Both are masterpieces of medieval Latin poetry and Eucharistic theology." },
              { question: "Is Corpus Christi a Holy Day of Obligation?", answer: "In some countries (parts of Europe and Latin America), Corpus Christi is a Holy Day of Obligation. In the United States, it is not a Holy Day of Obligation, but it is celebrated on the Sunday after Trinity Sunday. Catholics are encouraged to attend Mass and participate in Eucharistic processions on this day." },
            ]} />

            <RelatedArticles currentSlug="corpus-christi-catholic" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your Eucharistic devotion and Catholic life.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
