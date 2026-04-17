import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sun, Calendar, Clock, ArrowLeft, MapPin, Footprints } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function JubileePilgrimageGuide() {
  return (
    <>
      <Helmet>
        <title>Jubilee 2025 Pilgrimage Guide: Continuing the Pilgrimage of Hope | Guide Catholic</title>
        <meta name="description" content="Discover how to continue the Jubilee 2025 spirit. Learn about indulgences, pilgrimage traditions, and carrying the grace of the Holy Year into daily life." />
        <meta name="keywords" content="Jubilee 2025, pilgrimage guide, holy year, jubilee indulgence, pilgrim of hope" />
        <link rel="canonical" href="https://guidecatholic.com/blog/jubilee-pilgrimage-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Jubilee 2025 Pilgrimage Guide: Continuing the Pilgrimage of Hope"
          description="Discover how to continue the Jubilee 2025 spirit. Learn about indulgences, pilgrimage traditions, and carrying the grace of the Holy Year into daily life."
          url="https://guidecatholic.com/blog/jubilee-pilgrimage-guide/"
        />

      <div className="min-h-screen bg-background">
        <Navbar />

        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <nav className="text-sm mb-6 text-text-muted">
            <Link to="/" className="hover:text-text transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog/" className="hover:text-text transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-text">Jubilee Pilgrimage Guide</span>
          </nav>

          <Link to="/blog/">
            <Button variant="outline" className="mb-6 border-primary text-primary hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-3">
              <Sun className="w-4 h-4" />
              <span>Jubilee 2025</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4 leading-tight">
              Jubilee 2025 Pilgrimage Guide: Continuing the Pilgrimage of Hope
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-text-muted text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>April 16, 2026</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>11 min read</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none text-text">
            <p className="text-xl leading-relaxed mb-8 text-text/90">
              The Holy Year 2025 has concluded, but the pilgrimage of hope continues. The graces of the Jubilee extend beyond the closing of the Holy Doors. Discover how to maintain the Jubilee spirit and continue your pilgrimage of faith.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Jubilee Year: A Time of Grace
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Pope Francis opened the Jubilee 2025 with the theme "Pilgrims of Hope," inviting the entire Church to journey toward greater faith, hope, and charity. The Holy Year featured the opening of Holy Doors in Rome and dioceses worldwide, symbolizing Christ as the door to salvation.
            </p>
            <p className="text-text leading-relaxed mb-6">
              But as Pope Francis reminds us, the closing of the Holy Doors in December 2025 is not an ending but a new beginning. The Christian pilgrimage never truly ends until we reach our heavenly home.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              What Is a Pilgrimage?
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Pilgrimage is an ancient Christian practice of journeying to a holy place. But more than physical travel, pilgrimage represents the spiritual journey of life itself. We are all pilgrims—strangers and sojourners on earth—heading toward our true home with God.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Physical Pilgrimages
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Traditional Catholic pilgrimages include journeys to:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li><strong>Rome:</strong> The Eternal City, tombs of St. Peter and St. Paul</li>
              <li><strong>Lourdes:</strong> Where Our Lady appeared to St. Bernadette</li>
              <li><strong>Fatima:</strong> Site of the 1917 apparitions</li>
              <li><strong>Santiago de Compostela:</strong> The Camino, tomb of St. James</li>
              <li><strong>Guadalupe:</strong> Where Our Lady appeared to St. Juan Diego</li>
              <li><strong>Local shrines:</strong> Diocesan pilgrimage sites in your region</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Spiritual Pilgrimage
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Even if you cannot travel far, every Catholic can be a pilgrim. Daily life becomes pilgrimage when lived with intention:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li>Walking to church for Mass</li>
              <li>Making a holy hour before the Blessed Sacrament</li>
              <li>Praying the Stations of the Cross</li>
              <li>Visiting local shrines and parishes</li>
              <li>Walking while praying the Rosary</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Continuing Jubilee Indulgences
            </h2>
            <p className="text-text leading-relaxed mb-6">
              While the special Jubilee indulgences have concluded, the Church offers indulgences year-round. These include:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li>Reading Sacred Scripture for at least 30 minutes</li>
              <li>Making the Way of the Cross</li>
              <li>Reciting the Rosary in church or as a family</li>
              <li>Adoration of the Blessed Sacrament for at least 30 minutes</li>
              <li>Participating in Eucharistic processions</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Living as a Pilgrim of Hope
            </h2>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Hope in Daily Life
            </h3>
            <p className="text-text leading-relaxed mb-6">
              The Christian virtue of hope is not optimism—it's confidence in God's promises despite circumstances. Pilgrims of hope:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li>Trust in God's providence during difficulties</li>
              <li>Maintain peace amid uncertainty</li>
              <li>See God's hand working in ordinary events</li>
              <li>Share hope with others through charity</li>
              <li>Keep their eyes fixed on heaven as their destination</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Pilgrim Practices
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Maintain Jubilee practices in daily life:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li>Weekly confession (if possible)</li>
              <li>Corporal and spiritual works of mercy</li>
              <li>Prayer for the intentions of the Holy Father</li>
              <li>Deepening Eucharistic devotion</li>
              <li>Simplicity of life and detachment from excess</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Planning Your Pilgrimage
            </h2>
            <p className="text-text leading-relaxed mb-6">
              If you can make a pilgrimage in 2026 or beyond, consider:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li><strong>Local options:</strong> Shrines within driving distance</li>
              <li><strong>Group pilgrimages:</strong> Parishes often organize trips</li>
              <li><strong>Virtual preparation:</strong> Study the site's history and spirituality</li>
              <li><strong>Physical preparation:</strong> For walking pilgrimages like the Camino</li>
              <li><strong>Spiritual preparation:</strong> Confession, fasting, and prayer before departure</li>
            </ul>

            <QuizCTA />

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Frequently Asked Questions
            </h2>
            <BlogFAQ
              faqs={[
                {
                  question: "Can I still receive indulgences after the Jubilee ends?",
                  answer: "Yes. While the special Jubilee indulgences ended with the Holy Year, the Church offers many indulgences year-round. These include reading Scripture for 30 minutes, praying the Rosary in church, making the Stations of the Cross, and visiting a cemetery to pray for the dead during November. Check the Enchiridion of Indulgences for the complete list."
                },
                {
                  question: "Do I have to travel far to make a pilgrimage?",
                  answer: "No. While famous shrines are wonderful, any church can be a pilgrimage destination. Many saints made pilgrimages to their local parish churches. The key elements are: journeying with intention, prayer during the journey, and visiting a sacred place. Even visiting multiple churches in your own city can be a meaningful pilgrimage."
                },
                {
                  question: "How can families make pilgrimages together?",
                  answer: "Family pilgrimages create lasting memories and faith formation. Choose age-appropriate destinations. Prepare children by explaining the site's significance. Keep the journey prayerful with Rosary or hymns. Bring home holy water or devotional items. Most importantly, emphasize that the family journeying together toward God is the true pilgrimage."
                },
                {
                  question: "What does it mean to be a pilgrim of hope?",
                  answer: "A pilgrim of hope trusts in God's promises even when the path is difficult. It means living with confidence that God guides our journey, that every step brings us closer to heaven, and that no suffering is wasted when united with Christ. It's about keeping our eyes fixed on our ultimate destination while serving others along the way."
                }
              ]}
            />

            <RelatedArticles currentSlug="jubilee-pilgrimage-guide" />
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
