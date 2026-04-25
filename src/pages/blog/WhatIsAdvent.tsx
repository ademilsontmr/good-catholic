import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Wind, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function WhatIsAdvent() {
  return (
    <>
      <Helmet>
        <title>What Is Advent? The Catholic Season of Waiting and Preparation | Guide Catholic</title>
        <meta name="description" content="What is Advent? Learn about the Catholic Advent season, when it starts, the Advent wreath and candles, the O Antiphons, and how to observe Advent spiritually as a family." />
        <meta name="keywords" content="what is advent catholic, advent season, advent wreath, advent calendar catholic, advent meaning, when does advent start" />
        <link rel="canonical" href="https://guidecatholic.com/blog/what-is-advent-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="What Is Advent? The Catholic Season of Waiting and Preparation"
          description="What is Advent? Learn about the Catholic Advent season, when it starts, the Advent wreath and candles, the O Antiphons, and how to observe Advent spiritually as a family."
          url="https://guidecatholic.com/blog/what-is-advent-catholic/"
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
              <span className="text-text">What Is Advent?</span>
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
                  11 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                What Is Advent? The Catholic Season of Waiting and Preparation
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Advent is the season of holy waiting — four weeks of preparation before Christmas that invite Catholics to slow down, pray, and prepare their hearts for the coming of Christ. But Advent is far more than a religious countdown to Christmas. It is one of the richest seasons of the liturgical year.
              </p>
            </header>

            <div className="aspect-video bg-purple-100 rounded-2xl flex items-center justify-center mb-10">
              <Wind className="w-24 h-24 text-purple-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                Every year, as the days grow shorter and the holiday season ramps up around them, American Catholics are called to something countercultural: to wait. Not passively, not impatiently, but with the active, expectant waiting of a people who know that something — Someone — is coming. That is the spirit of Advent, and it is one of the most distinctive gifts the Catholic liturgical tradition offers to a culture that has largely forgotten how to wait for anything.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                The word "Advent" comes from the Latin adventus, meaning "coming" or "arrival." It is the season of the Church year dedicated to preparing for the coming of Christ — not just His historical birth in Bethlehem two thousand years ago, but also His coming into our hearts today and His final coming at the end of time. Advent holds all three of these "comings" in tension, and that is what gives it its unique spiritual depth.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                When Does Advent Start? The Four Sundays Before Christmas
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                Advent begins on the Sunday closest to November 30 (the feast of St. Andrew the Apostle) and always includes four Sundays. This means Advent can begin as early as November 27 or as late as December 3. It ends on Christmas Eve, December 24, at the beginning of the Christmas Vigil Mass.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                The four weeks of Advent are not equal in character. The first three weeks focus primarily on the eschatological coming of Christ — His return at the end of time — while the final days (December 17–24) shift to a more immediate preparation for the celebration of His birth. This shift is marked by the O Antiphons, which we will discuss below.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                Advent also marks the beginning of the new liturgical year. The Church's calendar does not begin on January 1 — it begins on the First Sunday of Advent. This is a beautiful reminder that the Christian understanding of time is shaped not by the secular calendar but by the mystery of Christ's coming.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Advent Wreath: Candles, Colors, and Meaning
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                The Advent wreath is one of the most beloved symbols of the season. It consists of a circular wreath of evergreen branches holding four candles — three purple (or violet) and one rose (or pink) — with a fifth white candle sometimes placed in the center to be lit on Christmas Day.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                The circular shape of the wreath symbolizes eternity — God's eternal love with no beginning and no end. The evergreen branches represent life and hope in the midst of winter's darkness. Each Sunday of Advent, one additional candle is lit, so that by the fourth Sunday, all four candles are burning — a growing light in the darkness that anticipates the Light of the World.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">The Four Advent Candles</h3>
                <p className="text-text leading-relaxed mb-3">
                  <strong>First Sunday (Purple):</strong> The Candle of Hope (or Prophecy). It recalls the prophets, especially Isaiah, who foretold the coming of the Messiah.
                </p>
                <p className="text-text leading-relaxed mb-3">
                  <strong>Second Sunday (Purple):</strong> The Candle of Peace (or Bethlehem). It recalls the journey of Mary and Joseph to Bethlehem and the peace that Christ brings.
                </p>
                <p className="text-text leading-relaxed mb-3">
                  <strong>Third Sunday (Rose/Pink):</strong> The Candle of Joy (Gaudete Sunday). The rose color reflects the joy of Gaudete Sunday — a brief pause in the penitential character of Advent to rejoice that Christmas is near.
                </p>
                <p className="text-text leading-relaxed mb-3">
                  <strong>Fourth Sunday (Purple):</strong> The Candle of Love (or the Angels). It recalls the angels' announcement to the shepherds and the love of God made manifest in the Incarnation.
                </p>
                <p className="text-text leading-relaxed">
                  <strong>Christmas Day (White, optional):</strong> The Christ Candle, placed in the center of the wreath, is lit on Christmas Day to celebrate the birth of Jesus, the Light of the World.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Gaudete Sunday: The Rose Candle and the Joy of Advent
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                The Third Sunday of Advent is called Gaudete Sunday, from the Latin word gaudete, meaning "rejoice." The name comes from the entrance antiphon of the Mass: "Rejoice in the Lord always; again I say, rejoice" (Philippians 4:4). On this Sunday, the priest may wear rose vestments instead of purple, and the rose candle on the Advent wreath is lit.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                Gaudete Sunday is a moment of joy within a season of waiting. It reminds us that Advent is not a gloomy or purely penitential season — it is a season of joyful anticipation. The waiting is not empty; it is full of hope. Christmas is near, and the Church cannot help but rejoice.
              </LinkedText>

              <QuizCTA
                title="How well do you know the Catholic liturgical year?"
                description="Advent is just one of the rich seasons of the Church's year. Take our quiz and discover how to live the liturgical calendar more deeply in your daily life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The O Antiphons: The Great Advent Prayers of December 17–23
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                From December 17 to December 23, the Church prays the O Antiphons — seven ancient antiphons that are among the most beautiful prayers in the entire liturgical tradition. Each antiphon addresses Christ by one of His messianic titles drawn from the Old Testament, and each ends with a plea for His coming.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                The O Antiphons are sung at Vespers (Evening Prayer) in the Liturgy of the Hours, and they also form the basis of the beloved Advent hymn "O Come, O Come, Emmanuel." The seven titles are: O Sapientia (O Wisdom), O Adonai (O Lord), O Radix Jesse (O Root of Jesse), O Clavis David (O Key of David), O Oriens (O Dayspring), O Rex Gentium (O King of the Nations), and O Emmanuel (O God with Us).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                These antiphons intensify the longing of Advent in its final days. They are a reminder that the Church has been waiting for Christ not just for four weeks, but for thousands of years — since the first promise of a Redeemer in the Garden of Eden. When we pray the O Antiphons, we join our voices to the great chorus of all who have longed for God's salvation.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Two Comings of Christ: Historical and Eschatological
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                One of the most important things to understand about Advent is that it looks in two directions at once. It looks backward, to the historical birth of Jesus in Bethlehem. And it looks forward, to His final coming at the end of time — what theologians call the Parousia.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                The early weeks of Advent emphasize this eschatological dimension. The Gospel readings for the First and Second Sundays of Advent typically feature Jesus speaking about the end times, the coming of the Son of Man, and the need for watchfulness. "Stay awake," Jesus says in Matthew 24:42, "for you do not know on what day your Lord is coming." This is the spirit of Advent: not passive waiting, but active, alert, prayerful readiness.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                Some spiritual writers speak of a third coming of Christ — His coming into the soul through grace, prayer, and the sacraments. St. Bernard of Clairvaux wrote beautifully about this "middle coming" of Christ, which connects His historical birth and His final return. Advent invites us to prepare for all three comings: to remember Bethlehem, to welcome Christ into our hearts today, and to await His return in glory.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Advent vs. Christmas: The Difference Matters
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                One of the most countercultural aspects of the Catholic liturgical calendar is that Christmas does not begin until December 25 — and it lasts for twelve days, ending on the Feast of the Epiphany (January 6). Advent, by contrast, is a season of preparation, not celebration.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                This means that the secular world's "Christmas season" — which typically begins in November and ends on December 26 — is almost the exact opposite of the Catholic liturgical calendar. Catholics are called to observe Advent as a season of waiting, prayer, and some degree of fasting or penance, and then to celebrate Christmas with joy for the full twelve days.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                This does not mean Catholics cannot enjoy Christmas music, decorations, or family gatherings during Advent. But it does mean that the spiritual emphasis of the season should be on preparation, not premature celebration. The joy of Christmas is sweeter when it has been preceded by genuine waiting.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Advent Traditions for American Catholic Families
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                There are many beautiful ways to observe Advent as a family. Here are some of the most popular traditions among American Catholics:
              </LinkedText>
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">The Advent Wreath at Home</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                Place an Advent wreath on the dinner table and light the appropriate candles each Sunday evening. Pray a brief blessing together and sing an Advent hymn such as "O Come, O Come, Emmanuel." This simple ritual creates a powerful sense of the season's rhythm.
              </LinkedText>
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">The Jesse Tree</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                The Jesse Tree is an Advent tradition in which families hang ornaments representing figures from salvation history — from Adam and Eve to the prophets to Mary and Joseph — on a small tree or branch. Each day, a new ornament is added and the corresponding Scripture passage is read. By Christmas Eve, the tree tells the entire story of God's plan of salvation.
              </LinkedText>
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Advent Confession</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                Many parishes offer special Advent penance services or extended Confession hours. Going to Confession during Advent is a beautiful way to prepare your heart for Christmas — to clear away the spiritual clutter so that Christ can truly be born anew in your soul.
              </LinkedText>
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">Acts of Charity</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-advent-catholic">
                Advent is a wonderful time to practice the corporal works of mercy. Many families choose a charity to support during Advent, donate to a food bank, or participate in an Angel Tree program for children in need. These acts of charity prepare us to receive the Christ Child by serving Him in the poor.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Advent is a time of waiting, but not empty waiting. It is waiting full of hope, full of longing, full of love."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — A reflection on the Advent season
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "When does Advent start in 2026?",
                answer: "Advent always begins on the Sunday closest to November 30. In 2026, Advent begins on November 29. It ends on Christmas Eve, December 24, at the beginning of the Christmas Vigil Mass. Advent always includes four Sundays."
              },
              {
                question: "What do the colors of the Advent wreath candles mean?",
                answer: "The Advent wreath has three purple candles and one rose (pink) candle. The purple candles represent hope, peace, and love — the penitential and expectant character of Advent. The rose candle is lit on the Third Sunday of Advent (Gaudete Sunday) and represents joy. Some wreaths also include a white Christ candle in the center, lit on Christmas Day."
              },
              {
                question: "What are the O Antiphons?",
                answer: "The O Antiphons are seven ancient prayers prayed from December 17 to December 23, each addressing Christ by a different messianic title from the Old Testament: O Wisdom, O Lord, O Root of Jesse, O Key of David, O Dayspring, O King of the Nations, and O Emmanuel. They form the basis of the hymn 'O Come, O Come, Emmanuel' and intensify the longing of Advent in its final days."
              },
              {
                question: "Is Advent a penitential season like Lent?",
                answer: "Advent has a penitential character, but it is less severe than Lent. The liturgical color is purple (a color of penance and preparation), the Gloria is omitted at Mass, and Catholics are encouraged to pray more, fast, and give alms. However, Advent is primarily a season of joyful anticipation rather than mourning. The Third Sunday (Gaudete Sunday) even features rose vestments as a sign of joy."
              },
              {
                question: "What is the difference between Advent and Christmas?",
                answer: "Advent is the four-week season of preparation before Christmas. Christmas is the feast itself, which begins on December 25 and lasts for twelve days, ending on the Feast of the Epiphany (January 6). The secular 'Christmas season' that begins in November is actually the Advent season in the Catholic liturgical calendar. Catholics are called to observe Advent as a time of waiting and preparation, and then to celebrate Christmas with full joy for the entire twelve days."
              }
            ]} />

<RelatedArticles currentSlug="what-is-advent-catholic" />

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
