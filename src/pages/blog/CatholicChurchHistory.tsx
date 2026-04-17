import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowLeft, Church, Cross } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function CatholicChurchHistory() {
  return (
    <>
      <Helmet>
        <title>Catholic Church History: A Complete Timeline from Peter to Today | Guide Catholic</title>
        <meta name="description" content="Discover the history of the Catholic Church from St. Peter to Pope Francis. Learn about key figures, councils, and moments that shaped 2000 years of Catholic tradition." />
        <meta name="keywords" content="Catholic Church history, Church timeline, papal history, Vatican history, Church councils" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-church-history/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Catholic Church History: A Complete Timeline from Peter to Today"
          description="Discover the history of the Catholic Church from St. Peter to Pope Francis. Learn about key figures, councils, and moments that shaped 2000 years of Catholic tradition."
          url="https://guidecatholic.com/blog/catholic-church-history/"
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
              <span className="text-text">Catholic Church History</span>
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
                  History & Apologetics
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  16 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholic Church History: A Complete Timeline from Peter to Today
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                The Catholic Church is the longest continuously operating institution in human history. For 2,000 years, she has survived empires, weathered crises, and shaped civilization. Understanding Church history strengthens faith and provides perspective on today's challenges.
              </p>
            </header>

            <div className="aspect-video bg-indigo-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
              <BookOpen className="w-24 h-24 text-indigo-400/20 absolute top-4 right-4" />
              <Church className="w-32 h-32 text-indigo-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The Catholic Church is the longest continuously operating institution in human history. For 2,000 years, she has survived empires, weathered crises, and shaped civilization. Understanding Church history strengthens faith and provides perspective on today's challenges.
              </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Apostolic Foundation (30-100 AD)
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Jesus established His Church on the Apostle Peter, declaring: "You are Peter, and upon this rock I will build my church, and the gates of the netherworld shall not prevail against it" (Matthew 16:18). After Pentecost, the apostles spread the Gospel throughout the Roman Empire.
            </p>
            <p className="text-text leading-relaxed mb-6">
              St. Peter came to Rome and was martyred there around 64 AD. The early Church gathered in house churches, celebrated the Eucharist, and maintained communion with the bishop of Rome as Peter's successor. By 100 AD, Christian communities existed across the Mediterranean world.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Age of Martyrs (100-313 AD)
            </h2>
            <p className="text-text leading-relaxed mb-6">
              The early Church faced intermittent but brutal persecution. Christians refused to worship the emperor or Roman gods, resulting in waves of martyrdom. Yet persecution failed to destroy the Church—Tertullian observed that "the blood of the martyrs is the seed of the Church."
            </p>
            <p className="text-text leading-relaxed mb-6">
              Key figures included St. Ignatius of Antioch (martyred 107), St. Polycarp (martyred 156), and St. Perpetua and Felicity (martyred 203). Their courage inspired conversions. The Church developed sacraments, clergy structure, and theological responses to heresies during this period.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Imperial Church (313-476 AD)
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Emperor Constantine's Edict of Milan (313) legalized Christianity. The Council of Nicaea (325) defined Christ's divinity against Arianism. Under Theodosius I (379-395), Christianity became the empire's official religion.
            </p>
            <p className="text-text leading-relaxed mb-6">
              This era produced the Nicene Creed and the canon of Scripture. St. Augustine of Hippo (354-430) became the Church's most influential theologian. Meanwhile, monasticism emerged in Egypt and spread throughout the Christian world.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Early Middle Ages (476-1000 AD)
            </h2>
            <p className="text-text leading-relaxed mb-6">
              As the Western Roman Empire collapsed, the Church preserved classical learning and provided social stability. Monasteries became centers of agriculture, education, and evangelization. Irish monks re-evangelized Europe through missions.
            </p>
            <p className="text-text leading-relaxed mb-6">
              Pope Gregory the Great (590-604) sent missionaries to England and organized defense against Lombard invaders. Charlemagne's coronation as Holy Roman Emperor (800) represented a partnership between papacy and empire that shaped medieval Europe.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The High Middle Ages (1000-1300 AD)
            </h2>
            <p className="text-text leading-relaxed mb-6">
              This period saw extraordinary vitality: the Crusades (however controversial), the founding of universities, Gothic cathedrals, mendicant orders (Franciscans and Dominicans), and the soaring scholastic theology of St. Thomas Aquinas.
            </p>
            <p className="text-text leading-relaxed mb-6">
              The papacy reached its zenith of temporal power under Innocent III (1198-1216). Later medieval popes struggled with corruption and the Avignon papacy (1309-1377), leading to calls for reform.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Reformation and Counter-Reformation (1500-1700)
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Martin Luther's 95 Theses (1517) sparked the Protestant Reformation, fragmenting Western Christendom. The Council of Trent (1545-1563) clarified Catholic doctrine and launched the Counter-Reformation. New religious orders—Jesuits, Capuchins, Ursulines—energized the Church.
            </p>
            <p className="text-text leading-relaxed mb-6">
              The Church expanded globally through missions. Jesuits established colleges, Francis Xavier evangelized Asia, and missionaries accompanied European colonization (often with mixed results). The Church also confronted witch hunts, religious wars, and the Galileo controversy.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Modern Era (1700-1962)
            </h2>
            <p className="text-text leading-relaxed mb-6">
              The Enlightenment, French Revolution, and Napoleonic wars challenged the Church's traditional role. The Papal States were lost in 1870, making the Pope "prisoner of the Vatican" until 1929. Yet the Church grew through missionary expansion and Marian apparitions (Lourdes, Fatima).
            </p>
            <p className="text-text leading-relaxed mb-6">
              Pope Pius IX (1846-1878) defined the Immaculate Conception and papal infallibility. The Church faced challenges from liberalism, totalitarianism, and secularism. Two world wars devastated Europe but also produced heroes like St. Maximilian Kolbe.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Second Vatican Council to Today (1962-Present)
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Vatican II (1962-1965) brought aggiornamento (updating): vernacular liturgy, religious freedom, ecumenism, and lay engagement. Implementation proved challenging, with debates between "progressives" and "traditionalists."
            </p>
            <p className="text-text leading-relaxed mb-6">
              St. John Paul II (1978-2005), the most-traveled pope, defended human dignity against communism and the "culture of death." Pope Benedict XVI (2005-2013) emphasized reason and beauty. Pope Francis (2013-present) focuses on mercy, the poor, and ecological conversion.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Lessons from 2000 Years
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Church history reveals patterns: crises produce renewal, persecution strengthens faith, and the Holy Spirit guides through human weakness. The Church has survived because she is not merely human—she is Christ's Body, animated by His Spirit.
            </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "You are Peter, and upon this rock I will build my church." - Matthew 16:18
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "The gates of hell shall not prevail against it." - Matthew 16:18
                </p>
              </div>
              
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "I am with you always, to the end of the age." - Matthew 28:20
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Was the Catholic Church the first Christian Church?",
                answer: "The Catholic Church traces its lineage directly to the apostles, with documented succession of bishops from Peter to the present pope. While various Christian traditions claim apostolic roots, the Catholic Church maintains unbroken institutional continuity through the episcopacy, liturgy, and doctrine from the first century."
              },
              {
                question: "Why did the Church and state become so intertwined?",
                answer: "After Constantine's conversion, the Church gained legal status and gradually assumed social functions as Roman authority collapsed. The medieval partnership of 'church and state' served mutual interests but also created problems (investiture controversies, corruption). The modern separation of church and state, properly understood, protects both institutions."
              },
              {
                question: "How has the Church changed over 2000 years?",
                answer: "The Church develops in understanding while maintaining essential continuity. Vatican II described this as development of doctrine, not contradiction. Practices (liturgy, clerical celibacy, religious life) have evolved. Core teachings (Trinity, Incarnation, Eucharist, moral principles) remain unchanged. The Church is both ancient and ever-young."
              },
              {
                question: "What can history teach us about current Church challenges?",
                answer: "History shows the Church always faces crises—heresies, corruption, persecution, cultural changes—and survives through renewal, saints, and fidelity to the Gospel. Current challenges (secularization, abuse crisis, division) are serious but not unprecedented. History encourages hope: the Church endures not because of human strength but Christ's promise."
              }
            ]} />

<RelatedArticles currentSlug="catholic-church-history" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Explore Your Catholic Heritage
              </h3>
              <p className="text-text-muted mb-6">
                Take our assessment and receive a personalized faith journey guide.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Start Assessment
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
