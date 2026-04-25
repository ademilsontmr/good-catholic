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

export default function SaintAnneAndJoachim() {
  return (
    <>
      <Helmet>
        <title>Saints Anne and Joachim: The Grandparents of Jesus | Guide Catholic</title>
        <meta name="description" content="Discover Saints Anne and Joachim — the parents of the Virgin Mary and the grandparents of Jesus. Their story, their shrines, and why they are patrons of grandparents and families." />
        <meta name="keywords" content="saints anne and joachim, grandparents of jesus, saint anne patron saint, joachim and anne feast day, parents of mary, saint anne prayer" />
        <link rel="canonical" href="https://guidecatholic.com/blog/saints-anne-and-joachim/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Saints Anne and Joachim: The Grandparents of Jesus"
        description="Discover Saints Anne and Joachim — the parents of the Virgin Mary and the grandparents of Jesus. Their story, their shrines, and why they are patrons of grandparents and families."
        url="https://guidecatholic.com/blog/saints-anne-and-joachim/"
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
              <span className="text-text">Saints Anne and Joachim</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Saints & Intercession</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 25, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />13 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Saints Anne and Joachim: The Grandparents of Jesus
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                They are the most important grandparents in human history — the parents of the Virgin Mary and the grandparents of Jesus Christ. Though their names do not appear in the canonical Gospels, Saints Anne and Joachim have been venerated in the Church since the earliest centuries, and their story speaks powerfully to every family that has waited and prayed for a child.
              </p>
            </header>
            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saints-anne-and-joachim">
                In the great tapestry of salvation history, every thread matters. The story of Saints Anne and Joachim reminds us that God's greatest works often begin in hiddenness, in waiting, and in the faithfulness of ordinary people who trust him even when their prayers seem unanswered. Their daughter Mary would become the Mother of God — but first, they had to wait.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Scripture and Tradition Say</h2>
              <p className="text-text leading-relaxed mb-6">
                Saints Anne and Joachim are not mentioned by name in the canonical Gospels or the letters of the New Testament. Their story comes to us primarily through the <em>Protoevangelium of James</em>, an apocryphal text written around 150 AD. While this text is not part of the biblical canon, it preserves ancient traditions about Mary's origins that the Church has accepted as reliable in their broad outlines.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The <em>Protoevangelium</em> describes Joachim as a wealthy and devout man of the tribe of Judah, and Anne as his wife. They were elderly and childless — a condition that, in the ancient world, was considered a sign of divine disfavor and was a source of deep shame and sorrow. Joachim's offerings at the Temple were even rejected by a priest who told him that a man without children had no right to offer sacrifice.
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saints-anne-and-joachim">
                Devastated, Joachim withdrew into the desert to fast and pray. Anne, left alone at home, also prayed fervently, lamenting her barrenness. Then, in a moment that echoes the stories of Abraham and Sarah, Hannah and Elkanah, and Zechariah and Elizabeth, an angel appeared to each of them separately and announced that Anne would conceive and bear a child who would be spoken of throughout the world.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Birth of Mary and Her Presentation at the Temple</h2>
              <p className="text-text leading-relaxed mb-6">
                According to the tradition preserved in the <em>Protoevangelium</em>, Anne conceived and gave birth to a daughter, whom she named Mary. From the very beginning, Mary was set apart: Anne vowed that her child would be consecrated to God, and when Mary was three years old, Joachim and Anne brought her to the Temple in Jerusalem and presented her to the Lord.
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saints-anne-and-joachim">
                This event — the Presentation of Mary at the Temple — is celebrated as a feast in the Catholic Church on November 21. It is one of the oldest Marian feasts in the liturgical calendar, attested in the East from the 6th century and in the West from the 11th century.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saints-anne-and-joachim">
                The tradition holds that Mary lived in the Temple precincts, nourished by angels, until she was of marriageable age and was entrusted to Joseph. Whether this is to be understood literally or symbolically, it expresses a profound theological truth: Mary was entirely consecrated to God from her earliest years, prepared by divine providence to be the Mother of the Savior.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Immaculate Conception and Its Connection to Anne</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saints-anne-and-joachim">
                The Catholic doctrine of the Immaculate Conception — defined as a dogma by Pope Pius IX in 1854 — holds that Mary was conceived without original sin, preserved from the moment of her conception by a singular grace of God in view of the merits of Jesus Christ. This means that the very moment Anne conceived Mary, God acted in a unique and extraordinary way.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saints-anne-and-joachim">
                Saint Anne is thus intimately connected to one of the most profound mysteries of the faith. She was the human instrument through whom God prepared the vessel that would carry his Son. Her womb was the place where the Immaculate Conception occurred — where God's grace acted in a way it has never acted before or since.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saints-anne-and-joachim">
                This connection has made Saint Anne a particularly beloved figure in Catholic devotion, especially among mothers and grandmothers who see in her a model of faithful parenthood and a powerful intercessor for their families.
              </LinkedText>

              <QuizCTA
                title="How well do you know the saints?"
                description="Take our assessment and receive a personalized guide to growing in your knowledge of Catholic saints and tradition."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Veneration in the Church: Feast Day and Major Shrines</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saints-anne-and-joachim">
                The feast of Saints Anne and Joachim is celebrated on July 26 in the Roman Rite. This date has been observed since at least the 6th century in the East, and was extended to the universal Church in the 16th century. In the current Roman Calendar, they share a single feast day, reflecting their inseparable role as the parents of Mary.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saints-anne-and-joachim">
                The veneration of Saint Anne in particular has given rise to some of the most important pilgrimage sites in the Catholic world:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Sainte-Anne-de-Beaupré (Quebec, Canada).</strong> One of the most visited pilgrimage sites in North America, this basilica near Quebec City has been a place of pilgrimage since 1658. Countless miracles have been reported there, and the walls of the basilica are lined with crutches and braces left by those who were healed.</li>
                <li><strong>Sainte-Anne d'Auray (Brittany, France).</strong> The site of an apparition of Saint Anne to a Breton peasant in 1625, this shrine in Brittany is one of the most important pilgrimage sites in France, drawing hundreds of thousands of pilgrims each year.</li>
                <li><strong>Church of Saint Anne (Jerusalem).</strong> Located near the Pool of Bethesda, this Crusader-era church is traditionally identified as the site of the home of Joachim and Anne and the birthplace of the Virgin Mary.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Saint Anne as Patron Saint</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saints-anne-and-joachim">
                Saint Anne is the patron saint of a remarkably wide range of people and causes, reflecting the breadth of her intercession:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Mothers and grandmothers</li>
                <li>Pregnant women and women in labor</li>
                <li>Childless couples</li>
                <li>Miners and lacemakers (because of her association with the "hidden" work of bringing forth life)</li>
                <li>Canada (she is the patron of the province of Quebec)</li>
                <li>Brittany (France)</li>
              </ul>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saints-anne-and-joachim">
                Saint Joachim is the patron saint of fathers, grandfathers, and grandparents generally. Together, they are the patrons of all grandparents and of the family.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Prayers to Saint Anne</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Traditional Prayer to Saint Anne</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Good Saint Anne, you were especially favored by God to be the mother of the most holy Virgin Mary, the Mother of our Savior. By your power with your most pure daughter and with her divine Son, kindly obtain for us the grace and the favor we now seek. Please secure for us also forgiveness of our past sins, the strength to perform faithfully our daily duties and the help we need to persevere in the love of Jesus and Mary. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What They Teach Us About Faith and Family</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saints-anne-and-joachim">
                The story of Saints Anne and Joachim speaks to every family that has known waiting, disappointment, and unanswered prayer. They waited for a child for years — perhaps decades — and their prayer was finally answered in a way that exceeded anything they could have imagined. Their daughter became the Mother of God.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saints-anne-and-joachim">
                Their story teaches us that God's timing is not our timing, and that the most important things in salvation history often begin in hiddenness and waiting. It teaches us that faithful, persevering prayer is never wasted. And it teaches us that the holiness of ordinary family life — the love of husband and wife, the raising of children, the transmission of faith from one generation to the next — is not a lesser calling but a participation in God's own plan of salvation.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saints-anne-and-joachim">
                Grandparents in particular can find in Saints Anne and Joachim powerful models and intercessors. They remind us that grandparents play an irreplaceable role in the transmission of faith — that the prayers of a grandmother, the example of a grandfather, the stories told around the family table, are among the most powerful forces in the formation of the next generation of disciples.
              </LinkedText>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "The holiness of the family is the foundation of the holiness of the Church."
                </p>
                <p className="text-text-muted text-center mt-2">— Pope John Paul II</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "Who are Saints Anne and Joachim?", answer: "Saints Anne and Joachim are the parents of the Virgin Mary and the grandparents of Jesus Christ. Their names do not appear in the canonical Gospels but come from the Protoevangelium of James, a 2nd-century text that preserves ancient traditions about Mary's origins. They are venerated in the Catholic Church as models of faithful parenthood and powerful intercessors for families." },
              { question: "When is the feast day of Saints Anne and Joachim?", answer: "The feast of Saints Anne and Joachim is celebrated on July 26 in the Roman Rite. This feast has been observed since at least the 6th century in the Eastern Church and was extended to the universal Church in the 16th century. In the current Roman Calendar, they share a single feast day." },
              { question: "What is Saint Anne the patron saint of?", answer: "Saint Anne is the patron saint of mothers, grandmothers, pregnant women, childless couples, miners, and lacemakers. She is also the patron of Canada (particularly Quebec) and Brittany in France. Saint Joachim is the patron of fathers and grandfathers. Together, they are the patrons of all grandparents and of the family." },
              { question: "What is the connection between Saint Anne and the Immaculate Conception?", answer: "The Catholic doctrine of the Immaculate Conception holds that Mary was conceived without original sin at the very moment of her conception. Since Anne was Mary's mother, the Immaculate Conception occurred in Anne's womb — making Anne the human instrument through whom God prepared the vessel that would carry his Son. This connection makes Saint Anne a particularly beloved figure in Catholic devotion." },
              { question: "Where are the major shrines of Saint Anne?", answer: "The major shrines of Saint Anne include: Sainte-Anne-de-Beaupré in Quebec, Canada (one of the most visited pilgrimage sites in North America); Sainte-Anne d'Auray in Brittany, France (site of a 1625 apparition); and the Church of Saint Anne in Jerusalem, traditionally identified as the site of the home of Joachim and Anne and the birthplace of the Virgin Mary." },
            ]} />

            <RelatedArticles currentSlug="saints-anne-and-joachim" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your knowledge of Catholic saints and tradition.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
