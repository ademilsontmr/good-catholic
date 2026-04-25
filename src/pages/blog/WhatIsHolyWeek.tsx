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
import { LinkedText } from "@/components/blog/LinkedText";

export default function WhatIsHolyWeek() {
  return (
    <>
      <Helmet>
        <title>What Is Holy Week? A Complete Guide to the Most Sacred Week of the Year | Guide Catholic</title>
        <meta name="description" content="What is Holy Week? Complete Catholic guide to Palm Sunday, Holy Thursday, Good Friday, Holy Saturday, and the Easter Vigil. Learn how to participate fully in each day." />
        <meta name="keywords" content="what is holy week, holy week catholic, palm sunday, holy thursday, good friday, holy saturday, easter vigil" />
        <link rel="canonical" href="https://guidecatholic.com/blog/what-is-holy-week-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="What Is Holy Week? A Complete Guide to the Most Sacred Week of the Year"
          description="What is Holy Week? Complete Catholic guide to Palm Sunday, Holy Thursday, Good Friday, Holy Saturday, and the Easter Vigil. Learn how to participate fully in each day."
          url="https://guidecatholic.com/blog/what-is-holy-week-catholic/"
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
              <span className="text-text">What Is Holy Week?</span>
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
                  Liturgy
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 14, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  13 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                What Is Holy Week? A Complete Guide to the Most Sacred Week of the Year
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Holy Week is the most sacred week in the Catholic liturgical year — seven days that walk us through the final events of Jesus Christ's earthly life, from His triumphant entry into Jerusalem to His death on the Cross and His glorious Resurrection. Here is a complete guide to every day.
              </p>
            </header>

            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
              <Cross className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-holy-week-catholic">
                There is no week like Holy Week in the entire Christian calendar. From Palm Sunday through the Easter Vigil, the Church relives — not merely remembers, but truly enters into — the Paschal Mystery: the suffering, death, and resurrection of Jesus Christ. The liturgies of Holy Week are among the oldest, most elaborate, and most theologically rich in the entire Catholic tradition. To participate in them fully is to be transformed.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-holy-week-catholic">
                For many American Catholics, Holy Week means attending Palm Sunday Mass and Easter Sunday Mass — and perhaps Good Friday services. But the full richness of Holy Week is available to those who participate in every day's liturgy. Each day has its own character, its own Scripture readings, its own rituals, and its own invitation to enter more deeply into the mystery of our salvation.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Palm Sunday: The Triumphal Entry and the Passion
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-holy-week-catholic">
                Holy Week begins with Palm Sunday, officially called "Palm Sunday of the Passion of the Lord." This double title captures the paradox of the day: it begins with triumph and ends with tragedy. The Mass opens with the blessing of palms and a procession commemorating Jesus' entry into Jerusalem, when the crowds waved palm branches and cried "Hosanna to the Son of David!" (Matthew 21:9). But the same Mass then proclaims the full Passion narrative — the arrest, trial, crucifixion, and death of Jesus.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-holy-week-catholic">
                The blessed palms that Catholics take home from Palm Sunday Mass are a sacramental — a sacred object that, when used with faith, can be a source of blessing. Many families keep their palms displayed in their homes throughout the year, often tucked behind a crucifix or a holy image. The following year, the old palms are burned to make the ashes used on Ash Wednesday — a beautiful symbol of the continuity of the liturgical year.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-holy-week-catholic">
                The Passion narrative on Palm Sunday is typically read in a dramatic form, with different readers taking the parts of the narrator, Jesus, and other characters. The congregation often reads the part of the crowd — including the chilling line "Crucify him!" This participatory reading is intentional: it reminds us that we, too, are implicated in the sin that sent Jesus to the Cross.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Holy Monday, Tuesday, and Wednesday: The Days of Teaching
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-holy-week-catholic">
                The first three days of Holy Week — Monday, Tuesday, and Wednesday — are sometimes called the "days of teaching" because the Gospel readings for these days feature Jesus teaching in the Temple, debating with the religious authorities, and preparing His disciples for what is to come.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-holy-week-catholic">
                Holy Wednesday is sometimes called "Spy Wednesday" because the Gospel reading for this day (Matthew 26:14–25) recounts Judas Iscariot's agreement to betray Jesus to the chief priests for thirty pieces of silver. The shadow of betrayal falls over the week, and the contrast between Judas' treachery and the devotion of the woman who anointed Jesus with costly perfume (Matthew 26:6–13) is stark and sobering.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-holy-week-catholic">
                These three days are not as liturgically elaborate as the Triduum (Holy Thursday through Easter Sunday), but they are valuable days for prayer, Scripture reading, and spiritual preparation. Many parishes offer daily Mass, Stations of the Cross, and Confession during these days.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Holy Thursday: The Mass of the Lord's Supper
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-holy-week-catholic">
                Holy Thursday evening marks the beginning of the Easter Triduum — the three holiest days of the year. The Mass of the Lord's Supper commemorates the Last Supper, at which Jesus instituted the Eucharist and the priesthood, and washed the feet of His disciples.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-holy-week-catholic">
                The Mass of the Lord's Supper has several distinctive features. The Gloria is sung for the first time since Ash Wednesday, and the church bells ring joyfully during the Gloria — then fall silent until the Easter Vigil. The washing of feet (the Mandatum) is performed by the priest, who washes the feet of twelve members of the congregation, imitating Jesus' act of humble service. The homily typically focuses on the Eucharist, the priesthood, and the commandment of love.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-holy-week-catholic">
                After Mass, the Blessed Sacrament is transferred in solemn procession to a place of repose — often called the "Altar of Repose" — where the faithful are invited to spend time in adoration throughout the night. This vigil of prayer recalls Jesus' agony in the Garden of Gethsemane, where He asked His disciples to "watch and pray" with Him (Matthew 26:41). Many Catholics spend an hour or more in adoration on Holy Thursday night, keeping watch with Jesus in His hour of suffering.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-holy-week-catholic">
                The Mass of the Lord's Supper ends without a final blessing or dismissal — the liturgy simply stops, as if suspended in time. The altar is stripped bare, and the tabernacle is left open and empty. The church is left in darkness and silence, a powerful symbol of the desolation of Good Friday.
              </LinkedText>

              <QuizCTA
                title="How deeply do you enter into the Paschal Mystery?"
                description="Holy Week is the heart of the Catholic faith. Take our quiz and discover how to participate more fully in the liturgies of the Church and grow in your relationship with Christ."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Good Friday: The Passion, the Cross, and the Silence
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-holy-week-catholic">
                Good Friday is the only day of the year on which Mass is not celebrated. Instead, the Church gathers for the Celebration of the Lord's Passion — a solemn liturgy in three parts: the Liturgy of the Word, the Veneration of the Cross, and Holy Communion.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-holy-week-catholic">
                The Liturgy of the Word includes the reading of the Passion according to John (John 18–19), the most detailed and theologically rich of the four Passion narratives. It also includes the Solemn Intercessions — a series of prayers for the Church, the Pope, the clergy, the faithful, catechumens, the unity of Christians, the Jewish people, those who do not believe in Christ, those who do not believe in God, those in public office, and those in tribulation. These intercessions, which date back to the early Church, express the universal scope of Christ's redemption.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-holy-week-catholic">
                The Veneration of the Cross is one of the most moving rituals in the entire liturgical year. A large crucifix is unveiled in three stages, with the priest singing "Behold the wood of the Cross, on which hung the salvation of the world" and the congregation responding "Come, let us adore." The faithful then come forward one by one to venerate the Cross — by kissing it, bowing before it, or touching it with their forehead. This act of veneration is not worship of the wood itself, but an expression of love and gratitude for the One who died upon it.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">The Seven Last Words of Christ</h3>
                <p className="text-text leading-relaxed mb-3">Many parishes hold a "Seven Last Words" service on Good Friday afternoon, meditating on the seven statements Jesus made from the Cross:</p>
                <p className="text-text leading-relaxed mb-2">1. "Father, forgive them, for they know not what they do." (Luke 23:34)</p>
                <p className="text-text leading-relaxed mb-2">2. "Truly, I say to you, today you will be with me in paradise." (Luke 23:43)</p>
                <p className="text-text leading-relaxed mb-2">3. "Woman, behold your son... Behold your mother." (John 19:26–27)</p>
                <p className="text-text leading-relaxed mb-2">4. "My God, my God, why have you forsaken me?" (Matthew 27:46)</p>
                <p className="text-text leading-relaxed mb-2">5. "I thirst." (John 19:28)</p>
                <p className="text-text leading-relaxed mb-2">6. "It is finished." (John 19:30)</p>
                <p className="text-text leading-relaxed">7. "Father, into your hands I commend my spirit." (Luke 23:46)</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Holy Saturday: The Great Silence
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-holy-week-catholic">
                Holy Saturday is the day of the Great Silence. There are no sacraments, no Mass, no liturgy during the day. The Church waits in stillness at the tomb of Christ. This silence is not emptiness — it is the silence of the womb, the silence before new life bursts forth. It is the silence of the disciples who did not yet understand, who sat in grief and confusion, not knowing that the story was not over.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-holy-week-catholic">
                Holy Saturday is a day for prayer, fasting, and quiet preparation. Many Catholics spend time in personal prayer, reading the Passion narratives, or visiting the church to pray before the empty tabernacle. It is also a day of practical preparation for the Easter Vigil — the greatest liturgy of the year.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Easter Vigil: The Night of Nights
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-holy-week-catholic">
                The Easter Vigil, celebrated after nightfall on Holy Saturday, is the most ancient and most solemn liturgy in the Catholic Church. It is the "mother of all vigils," as St. Augustine called it — the night on which the Church celebrates the Resurrection of Christ and welcomes new members through Baptism, Confirmation, and First Eucharist.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-holy-week-catholic">
                The Vigil has four parts. It begins with the Service of Light: a fire is kindled outside the church, the Paschal Candle is lit and carried into the darkened church, and the Exsultet — the ancient Easter proclamation — is sung. The Liturgy of the Word follows, with up to seven Old Testament readings tracing salvation history from creation to the Exodus. Then comes the Liturgy of Baptism, in which the elect (those who have been preparing through RCIA) receive the sacraments of initiation. Finally, the Liturgy of the Eucharist celebrates the first Mass of Easter.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-holy-week-catholic">
                The Easter Vigil is the most appropriate time to receive the sacraments of initiation, and it is the liturgy at which the Church's joy is most fully expressed. The Alleluia — which has been silent since Ash Wednesday — is sung again for the first time, and the church erupts in light and song. To attend the Easter Vigil is to experience the full depth of what it means to be Catholic.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Holy Week is not a commemoration of past events. It is a participation in the living mystery of our salvation."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — A reflection on the Paschal Triduum
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "What is Holy Week in the Catholic Church?",
                answer: "Holy Week is the final week of Lent, beginning with Palm Sunday and ending with the Easter Vigil on Holy Saturday night. It commemorates the final events of Jesus' earthly life: His entry into Jerusalem, the Last Supper, His arrest and trial, His crucifixion and death, and His resurrection. It is the most sacred week of the Catholic liturgical year."
              },
              {
                question: "What is the Easter Triduum?",
                answer: "The Easter Triduum (from the Latin for 'three days') refers to the three holiest days of the year: Holy Thursday evening, Good Friday, and Holy Saturday, culminating in the Easter Vigil. These three days form a single liturgical celebration of the Paschal Mystery — the suffering, death, and resurrection of Jesus Christ."
              },
              {
                question: "Why is there no Mass on Good Friday?",
                answer: "Good Friday is the only day of the year on which Mass is not celebrated, because it is the day of Christ's death on the Cross. Instead, the Church celebrates the Liturgy of the Lord's Passion, which includes the reading of the Passion, the Solemn Intercessions, the Veneration of the Cross, and the distribution of Holy Communion from hosts consecrated at the Holy Thursday Mass."
              },
              {
                question: "What happens at the Easter Vigil?",
                answer: "The Easter Vigil is the most solemn liturgy of the year, celebrated after nightfall on Holy Saturday. It has four parts: the Service of Light (blessing of fire, lighting of the Paschal Candle, and the Exsultet), the Liturgy of the Word (up to seven Old Testament readings), the Liturgy of Baptism (welcoming new Catholics through the sacraments of initiation), and the Liturgy of the Eucharist (the first Mass of Easter)."
              },
              {
                question: "What is the washing of feet on Holy Thursday?",
                answer: "The washing of feet (the Mandatum) is a ritual performed during the Mass of the Lord's Supper on Holy Thursday, in which the priest washes the feet of twelve members of the congregation. It imitates Jesus' act of washing His disciples' feet at the Last Supper (John 13:1–15) and symbolizes humble service. The name 'Mandatum' comes from Jesus' words: 'A new commandment (mandatum) I give you: love one another as I have loved you.'"
              }
            ]} />

<RelatedArticles currentSlug="what-is-holy-week-catholic" />

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
