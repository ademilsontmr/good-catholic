import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Home, Calendar, Clock, ArrowLeft, Heart, Users, Cross } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function CatholicFamilyTraditions() {
  return (
    <>
      <Helmet>
        <title>Catholic Family Traditions: Building a Domestic Church | Guide Catholic</title>
        <meta name="description" content="Discover Catholic family traditions for building a domestic church. Learn about family prayers, liturgical year celebrations, and creating a Catholic home environment." />
        <meta name="keywords" content="Catholic family traditions, domestic church, Catholic home, family prayer, liturgical year" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-family-traditions/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Catholic Family Traditions: Building a Domestic Church"
          description="Discover Catholic family traditions for building a domestic church. Learn about family prayers, liturgical year celebrations, and creating a Catholic home environment."
          url="https://guidecatholic.com/blog/catholic-family-traditions/"
        />

      <div className="min-h-screen bg-background">
        <Navbar />

        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <nav className="text-sm mb-6 text-text-muted">
            <Link to="/" className="hover:text-text transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog/" className="hover:text-text transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-text">Catholic Family Traditions</span>
          </nav>

          <Link to="/blog/">
            <Button variant="outline" className="mb-6 border-primary text-primary hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-3">
              <Home className="w-4 h-4" />
              <span>Family & Parenting</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4 leading-tight">
              Catholic Family Traditions: Building a Domestic Church
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-text-muted text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>April 16, 2026</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>14 min read</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none text-text">
            <p className="text-xl leading-relaxed mb-8 text-text/90">
              The family is called the "domestic church"—the place where faith is first learned and lived. Catholic family traditions create an environment where children encounter Christ not just on Sunday, but daily in their own homes.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Vision: A Catholic Home
            </h2>
            <p className="text-text leading-relaxed mb-6">
              A Catholic home should be visibly different—not in a showy way, but in subtle signs that Christ dwells there. Sacred images, prayer spaces, and holy reminders transform a house from merely a dwelling into a sanctuary.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Daily Family Prayers
            </h2>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Morning Offering
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Begin each day by consecrating it to God. The traditional Morning Offering unites all the day's works, joys, and sufferings with Christ's sacrifice. Children can memorize a simplified version from an early age.
            </p>
            <p className="text-text leading-relaxed mb-6 italic bg-accent/10 p-4 rounded-lg">
              "O Jesus, through the Immaculate Heart of Mary, I offer You my prayers, works, joys, and sufferings of this day, in union with the Holy Sacrifice of the Mass throughout the world. I offer them for all the intentions of Your Sacred Heart."
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Grace Before Meals
            </h3>
            <p className="text-text leading-relaxed mb-6">
              The simple practice of blessing food sanctifies daily sustenance and teaches gratitude. The traditional "Bless us, O Lord" or the simple "Bless this food, Lord, and bless those who prepared it" become lifelong habits.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Family Rosary
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Pope St. John Paul II called the family that prays together "a witness and sign of faith." The family Rosary—even just a decade daily—creates a rhythm of prayer and meditation. Many families pray after dinner or before bedtime.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Night Prayers
            </h3>
            <p className="text-text leading-relaxed mb-6">
              End the day with the Sign of the Cross, a brief examination of conscience, the Our Father or Hail Mary, and a blessing. Children especially need this peaceful routine before sleep.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Liturgical Year Celebrations
            </h2>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Advent
            </h3>
            <p className="text-text leading-relaxed mb-6">
              The Advent wreath with four candles, Jesse Trees telling salvation history, and the O Antiphons during the final week prepare for Christmas. Keep Advent distinct from Christmas—save decorations until Christmas Eve.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Christmas
            </h3>
            <p className="text-text leading-relaxed mb-6">
              The Christmas crèche (nativity scene), blessing of the home on Epiphany, and celebrating all twelve days of Christmas (not just December 25) enrich the season. Consider giving religious gifts—Bibles, rosaries, saint books.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Lent and Easter
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Lenten sacrifice jars (collecting money for charity), Stations of the Cross at home, Lenten calendars counting down to Easter, and blessing Easter foods (baskets of bread, eggs, lamb cake) connect the family to the Paschal mystery.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Name Days and Baptismal Anniversaries
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Celebrating your patron saint's feast day (name day) and the anniversary of baptism reinforces identity as a Christian. Simple traditions: special meal, story of the saint, renewal of baptismal promises.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Creating Sacred Spaces
            </h2>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Home Altar or Prayer Corner
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Designate a visible spot for prayer: a crucifix, statue of Mary or a favorite saint, candles, Bible, and rosaries. This becomes the family's "church within the home" where prayers are offered and decisions discerned.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Holy Water Fonts
            </h3>
            <p className="text-text leading-relaxed mb-6">
          Placing holy water fonts at the home's entrances sanctifies coming and going. The ancient tradition of blessing oneself with holy water upon entering recalls baptism and protects against evil.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Sacred Images
            </h3>
            <p className="text-text leading-relaxed mb-6">
            Religious art in the home—crucifixes in bedrooms, Last Supper in dining rooms, Good Shepherd in children's rooms—surrounds the family with visual reminders of faith. These become talking points for catechesis.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Weekly Family Traditions
            </h2>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Sunday as the Lord's Day
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Guard Sunday from ordinary activities. Mass attendance is primary, but also rest from work, family time, special Sunday meals, and recreation that refreshes rather than distracts. Make Sunday feel different from other days.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Friday Abstinence and Fasting
            </h3>
            <p className="text-text leading-relaxed mb-6">
              The tradition of meatless Fridays (even outside Lent) honors Christ's passion. Simple meals, Stations of the Cross, or special acts of charity make Fridays distinct. Children learn that Catholics "do Fridays differently."
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Monthly and Annual Traditions
            </h2>
            <p className="text-text leading-relaxed mb-6">
              First Saturday devotions, monthly family confession, blessing of throats on St. Blaise's day (February 3), and annual household blessings (on Epiphany or moving into a new home) mark time with sacred significance.
            </p>

            <QuizCTA />

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Frequently Asked Questions
            </h2>
            <BlogFAQ
              faqs={[
                {
                  question: "What if my family isn't consistent with traditions?",
                  answer: "Start small and build gradually. Better to maintain one or two traditions well than to attempt many and abandon them. If you miss a day or week, simply begin again. Children remember the effort and love, not perfect execution."
                },
                {
                  question: "How do we start if we have no traditions?",
                  answer: "Choose one daily practice (grace before meals), one weekly (Sunday Mass attendance), and one seasonal (Advent wreath). Add others gradually as these become habitual. The key is beginning, not waiting until you can do everything."
                },
                {
                  question: "What about teenagers who resist family prayer?",
                  answer: "Don't force, but don't eliminate either. Invite rather than mandate. Explain why these practices matter. Sometimes teens resist precisely because they need it most. Continue praying whether they join visibly or not—your prayer covers them. Most adults eventually appreciate the foundation their parents laid."
                },
                {
                  question: "Can single people or empty nesters have domestic churches?",
                  answer: "Absolutely! The domestic church applies to any Catholic household, regardless of composition. Singles can create prayer corners, observe liturgical seasons, and invite others to share in their faith-filled homes. The vocation differs, but the principle remains: make your dwelling a place of prayer and Christian witness."
                }
              ]}
            />

            <RelatedArticles currentSlug="catholic-family-traditions" />
          </div>

          <div className="mt-12 pt-8 border-t border-primary/20">
            <Link to="/blog/">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
