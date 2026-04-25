import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sun, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function HowToPrayAngelus() {
  return (
    <>
      <Helmet>
        <title>How to Pray the Angelus: The Catholic Prayer for 6am, Noon, and 6pm | Guide Catholic</title>
        <meta name="description" content="Learn how to pray the Angelus, the ancient Catholic prayer prayed three times a day. Full text, history, the Regina Caeli, and tips for families." />
        <meta name="keywords" content="how to pray the angelus, angelus prayer, angelus catholic, angelus prayer noon, angelus prayer text" />
        <link rel="canonical" href="https://guidecatholic.com/blog/how-to-pray-the-angelus/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="How to Pray the Angelus: The Catholic Prayer for 6am, Noon, and 6pm"
          description="Learn how to pray the Angelus, the ancient Catholic prayer prayed three times a day. Full text, history, the Regina Caeli, and tips for families."
          url="https://guidecatholic.com/blog/how-to-pray-the-angelus/"
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
              <span className="text-text">How to Pray the Angelus</span>
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
                  Prayers
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 14, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  10 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                How to Pray the Angelus: The Catholic Prayer for 6am, Noon, and 6pm
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Three times a day — at 6am, noon, and 6pm — Catholics around the world pause to pray the Angelus, a brief but profound prayer that commemorates the Incarnation of Jesus Christ. Here is everything you need to know about this timeless devotion.
              </p>
            </header>

            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
              <Sun className="w-24 h-24 text-amber-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-angelus">
                In the 19th century, the French painter Jean-François Millet captured a scene that has become one of the most recognized images in Western art: two peasant farmers standing in a field at dusk, heads bowed in prayer, a church bell tower visible in the distant horizon. The painting is called "The Angelus," and it depicts exactly what millions of Catholics have done for centuries — stopping whatever they are doing to pray this ancient prayer when the church bells ring.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-angelus">
                The Angelus is not a long prayer. It takes only about two minutes to recite. But its brevity belies its depth. In those two minutes, Catholics recall the most important event in human history: the moment the Angel Gabriel appeared to the Virgin Mary, she said yes to God, and the eternal Son of God took on human flesh in her womb. The Angelus is, at its heart, a meditation on the Incarnation — and a reminder that God entered our world, our time, our daily routine.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The History of the Angelus: Medieval Origins and the Bells
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-angelus">
                The Angelus developed gradually over several centuries, beginning in the medieval period. Its roots can be traced to the practice of ringing a bell in the evening and reciting three Hail Marys — a custom that appears in Franciscan communities as early as the 13th century. St. Bonaventure, the great Franciscan theologian, is often credited with encouraging this evening bell practice.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-angelus">
                By the 14th and 15th centuries, the practice had spread widely across Europe. The morning bell was added, and eventually the noon bell as well, creating the three-times-daily rhythm we know today. Pope Calixtus III (1455–1458) formally encouraged the noon Angelus as a prayer for protection against the Turkish threat to Christian Europe. Pope Leo XIII, in 1884, granted indulgences to those who prayed the Angelus faithfully, cementing its place in Catholic devotional life.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-angelus">
                The ringing of church bells to signal the Angelus was once a defining feature of Catholic village life across Europe and the Americas. Even today, many parishes ring their bells at noon, and the Vatican broadcasts the Pope's Sunday Angelus address to millions of faithful worldwide. Every Sunday at noon, the Pope appears at his window overlooking St. Peter's Square to lead the Angelus — a tradition that draws thousands of pilgrims and is watched by millions more on television and online.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Full Text of the Angelus Prayer
              </h2>
              <p className="text-text leading-relaxed mb-4">
                The Angelus is a versicle-and-response prayer, traditionally prayed with a leader and a congregation, though it can also be prayed alone. Here is the complete text:
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">The Angelus</h3>
                <p className="text-text leading-relaxed mb-3">
                  <strong>V.</strong> The Angel of the Lord declared unto Mary,<br />
                  <strong>R.</strong> And she conceived of the Holy Spirit.
                </p>
                <p className="text-text italic mb-3">Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.</p>
                <p className="text-text leading-relaxed mb-3">
                  <strong>V.</strong> Behold the handmaid of the Lord,<br />
                  <strong>R.</strong> Be it done unto me according to thy word.
                </p>
                <p className="text-text italic mb-3">Hail Mary...</p>
                <p className="text-text leading-relaxed mb-3">
                  <strong>V.</strong> And the Word was made flesh,<br />
                  <strong>R.</strong> And dwelt among us.
                </p>
                <p className="text-text italic mb-3">Hail Mary...</p>
                <p className="text-text leading-relaxed mb-3">
                  <strong>V.</strong> Pray for us, O holy Mother of God,<br />
                  <strong>R.</strong> That we may be made worthy of the promises of Christ.
                </p>
                <h3 className="font-display text-lg font-bold text-text mb-3 mt-4">Let us pray:</h3>
                <p className="text-text leading-relaxed">
                  Pour forth, we beseech Thee, O Lord, Thy grace into our hearts; that we, to whom the Incarnation of Christ, Thy Son, was made known by the message of an Angel, may by His Passion and Cross be brought to the glory of His Resurrection. Through the same Christ our Lord. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Theology Behind the Angelus: Meditating on the Incarnation
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-angelus">
                Each of the three versicles of the Angelus corresponds to a moment in the Annunciation narrative from Luke 1:26–38. The first — "The Angel of the Lord declared unto Mary" — recalls the arrival of Gabriel and his greeting. The second — "Behold the handmaid of the Lord" — captures Mary's humble and total surrender to God's will. The third — "And the Word was made flesh" — is the climax: the moment of the Incarnation itself, when the eternal Son of God took on human nature in Mary's womb.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-angelus">
                This third versicle is drawn directly from the prologue of John's Gospel (John 1:14), one of the most theologically dense sentences in all of Scripture. When Catholics pray "And the Word was made flesh," they are affirming the central mystery of Christianity: that God became man. This is not a metaphor or a symbol — it is the literal truth of the faith. The Angelus invites us to pause three times a day and let that truth sink in.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-angelus">
                The concluding prayer beautifully ties together the Annunciation and the Passion: we ask that the same grace that came to us through the Incarnation might bring us through the Cross to the Resurrection. The Angelus is thus not merely a Marian prayer — it is a prayer about the entire mystery of salvation, from the "yes" of Mary to the empty tomb of Easter morning.
              </LinkedText>

              <QuizCTA
                title="How well do you know your Catholic prayers?"
                description="The Angelus is one of the great treasures of Catholic devotion. Take our quiz and discover how to deepen your prayer life and grow in your Catholic faith."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Why Catholics Pray It Three Times a Day
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-angelus">
                The three-times-daily rhythm of the Angelus is not arbitrary. It mirrors the ancient Christian practice of praying at fixed hours — a tradition inherited from Judaism (the hours of prayer in the Temple) and formalized in the Liturgy of the Hours. Morning, noon, and evening correspond to the natural divisions of the day, and praying at these moments sanctifies the entire arc of daily life.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-angelus">
                There is also a symbolic dimension. Morning prayer dedicates the day to God before it begins. The noon Angelus interrupts the busyness of work and reminds us that our labor has a higher purpose. The evening Angelus closes the day with gratitude and recollection. Together, they create a rhythm of prayer that transforms ordinary time into sacred time — which is precisely what the Incarnation itself did. When God became man, He entered time and made it holy.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Regina Caeli: The Easter Season Alternative
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-angelus">
                During the Easter season — from Easter Sunday through Pentecost — the Angelus is replaced by the Regina Caeli (Queen of Heaven), an ancient antiphon that celebrates the Resurrection. This substitution reflects the liturgical character of the season: during Eastertide, the Church's joy is so great that even the Angelus gives way to a more exuberant expression of faith.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">Regina Caeli (Easter Season)</h3>
                <p className="text-text leading-relaxed mb-3">
                  Queen of Heaven, rejoice, alleluia.<br />
                  For He whom you did merit to bear, alleluia.<br />
                  Has risen, as He said, alleluia.<br />
                  Pray for us to God, alleluia.
                </p>
                <p className="text-text leading-relaxed mb-3">
                  <strong>V.</strong> Rejoice and be glad, O Virgin Mary, alleluia.<br />
                  <strong>R.</strong> For the Lord has truly risen, alleluia.
                </p>
                <p className="text-text leading-relaxed">
                  <strong>Let us pray:</strong> O God, who gave joy to the world through the resurrection of Thy Son, our Lord Jesus Christ, grant we beseech Thee, that through the intercession of the Virgin Mary, His Mother, we may obtain the joys of everlasting life. Through the same Christ our Lord. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Millet's Famous Painting and the Angelus in Culture
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-angelus">
                Jean-François Millet painted "The Angelus" between 1857 and 1859. It depicts two peasants in a potato field near Barbizon, France, pausing their work as the distant church bell rings the noon Angelus. The man holds his hat in his hands; the woman bows her head. A basket of potatoes sits at their feet. The painting became one of the most reproduced images in the world, appearing on everything from postcards to chocolate boxes.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-angelus">
                What makes the painting so powerful is its simplicity. These are not wealthy patrons or noble saints — they are ordinary working people, pausing in the middle of their labor to pray. The Angelus, Millet seems to say, belongs to everyone. It is the prayer of the farmer and the factory worker, the mother and the student, the young and the old. It requires no special preparation, no rosary beads, no book — just a moment of recollection and a willingness to remember God.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                How to Incorporate the Angelus into Daily Life
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-angelus">
                For American Catholics, incorporating the Angelus into daily life requires some intentionality, since church bells are not as ubiquitous as they once were in Catholic Europe. Here are some practical suggestions:
              </LinkedText>
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Set a Phone Reminder</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-angelus">
                The simplest approach is to set three daily alarms on your phone — at 6am, noon, and 6pm — labeled "Angelus." When the alarm sounds, take two minutes to pray. Many Catholic apps also include Angelus reminders with the full text of the prayer.
              </LinkedText>
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Pray It as a Family</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-angelus">
                The Angelus is an ideal family prayer because it is short, structured, and deeply meaningful. Families can pray it together at meals (especially the noon prayer), before school, or at bedtime. Children who grow up praying the Angelus carry a profound sense of the Incarnation with them throughout their lives.
              </LinkedText>
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Connect It to the Liturgy of the Hours</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-angelus">
                If you already pray the Liturgy of the Hours (the Divine Office), you can integrate the Angelus naturally: pray it before Lauds (morning prayer), before the midday prayer, and before Vespers (evening prayer). This creates a beautiful rhythm of prayer that structures the entire day around God.
              </LinkedText>
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Watch the Pope's Sunday Angelus</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-angelus">
                Every Sunday at noon Rome time, the Pope leads the Angelus from his window at the Vatican. This is broadcast live on EWTN, Vatican News, and YouTube. Watching the Sunday Angelus is a wonderful way to feel connected to the universal Church and to hear the Pope's brief reflection on the day's Gospel.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "The Angelus is a prayer that reminds us, three times a day, that God became one of us — and that changes everything."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — A reflection on the Angelus tradition
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "What is the Angelus prayer?",
                answer: "The Angelus is a Catholic devotional prayer that commemorates the Annunciation — the moment the Angel Gabriel told Mary she would conceive the Son of God. It consists of three versicles with responses, three Hail Marys, and a concluding prayer. It is traditionally prayed three times a day: at 6am, noon, and 6pm."
              },
              {
                question: "When do Catholics pray the Angelus?",
                answer: "The Angelus is prayed three times daily: in the morning (6am), at noon, and in the evening (6pm). These times correspond to the ringing of church bells, which historically signaled the prayer. During the Easter season (Easter Sunday through Pentecost), the Angelus is replaced by the Regina Caeli."
              },
              {
                question: "What is the Regina Caeli and when is it prayed?",
                answer: "The Regina Caeli (Queen of Heaven) is an ancient Easter antiphon that replaces the Angelus during the Easter season, from Easter Sunday through Pentecost Sunday. It celebrates the Resurrection of Christ and Mary's joy as the Mother of the Risen Lord. It is prayed at the same three times as the Angelus."
              },
              {
                question: "Why does the Pope pray the Angelus publicly?",
                answer: "Every Sunday at noon (Rome time), the Pope appears at his window overlooking St. Peter's Square to lead the Angelus with the faithful gathered below. He typically offers a brief reflection on the day's Gospel reading before the prayer. This tradition connects the universal Church to the Pope and to the mystery of the Incarnation."
              },
              {
                question: "How can families pray the Angelus together?",
                answer: "Families can pray the Angelus together by setting a shared alarm at noon (or another convenient time), gathering briefly to recite the prayer, and alternating the versicles between a leader and the rest of the family. Even young children can participate by responding 'And she conceived of the Holy Spirit' and praying the Hail Marys. It takes only about two minutes and is a beautiful way to sanctify family life."
              }
            ]} />

<RelatedArticles currentSlug="how-to-pray-the-angelus" />

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
