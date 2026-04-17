import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function WhatIsTheScapular() {
  return (
    <>
      <Helmet>
        <title>What Is the Brown Scapular? History, Promises, and How to Wear It | Guide Catholic</title>
        <meta name="description" content="Learn what the Brown Scapular is, the history of Our Lady of Mount Carmel's apparition to St. Simon Stock, the promises of Our Lady, how to be enrolled, and how to wear it." />
        <meta name="keywords" content="brown scapular, what is the scapular, scapular catholic, our lady of mount carmel scapular, scapular promises" />
        <link rel="canonical" href="https://guidecatholic.com/blog/what-is-the-brown-scapular/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="What Is the Brown Scapular? History, Promises, and How to Wear It"
          description="Learn what the Brown Scapular is, the history of Our Lady of Mount Carmel's apparition to St. Simon Stock, the promises of Our Lady, how to be enrolled, and how to wear it."
          url="https://guidecatholic.com/blog/what-is-the-brown-scapular/"
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
              <span className="text-text">What Is the Brown Scapular</span>
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
                  Devotions
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
                What Is the Brown Scapular? History, Promises, and How to Wear It
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                The Brown Scapular of Our Lady of Mount Carmel is one of the most cherished sacramentals in the Catholic Church. Worn by popes, saints, and millions of ordinary Catholics for nearly 800 years, it is a tangible sign of consecration to Mary and a powerful expression of trust in her maternal protection.
              </p>
            </header>

            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
              <Shield className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                If you've ever seen a Catholic wearing what appears to be two small brown cloth squares connected by strings around their neck, you've seen the Brown Scapular. Simple in appearance, profound in meaning — this small sacramental has been worn by saints like St. Thérèse of Lisieux, St. John Paul II, and countless others who entrusted themselves to Our Lady of Mount Carmel. But what exactly is it, where did it come from, and what does it mean to wear one?
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What Is a Scapular?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The word "scapular" comes from the Latin scapulae, meaning "shoulders." In its original form, a scapular was a long piece of cloth worn over the shoulders as part of a religious habit — a practical garment that protected the monk's or nun's clothing while working. Over time, a miniaturized version was created for laypeople as a way of participating in the spirituality of a religious order without taking vows.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The lay scapular consists of two small rectangular pieces of cloth (usually about 2 inches square) connected by two strings or cords. One panel rests on the chest, the other on the back, with the strings passing over the shoulders. This design symbolizes the yoke of Christ and the protection of Mary. The Brown Scapular specifically is made of brown wool, the color of the Carmelite habit.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The History: Our Lady of Mount Carmel and St. Simon Stock
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The story of the Brown Scapular begins in 13th-century England. The Carmelite Order, which had originated on Mount Carmel in the Holy Land, was struggling to establish itself in Europe. St. Simon Stock, the Superior General of the Carmelites, was a deeply devout man with a special love for the Virgin Mary. According to Carmelite tradition, on July 16, 1251, Our Lady appeared to St. Simon Stock in Cambridge, England.
              </p>
              <p className="text-text leading-relaxed mb-6">
                In this apparition, Mary held out the Brown Scapular to St. Simon and spoke the words that have echoed through Catholic history ever since: "Take, beloved son, this scapular of your Order as a badge of my confraternity and for you and all Carmelites a special sign of grace; whoever dies in this will not suffer everlasting fire. It is the sign of salvation, a safeguard in dangers, a pledge of peace and of the covenant."
              </p>
              <p className="text-text leading-relaxed mb-6">
                This promise — that whoever dies wearing the Brown Scapular will not suffer eternal fire — became known as the Scapular Promise, and it has been the foundation of this devotion for nearly eight centuries. The feast of Our Lady of Mount Carmel is celebrated on July 16, the anniversary of this apparition.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Sabbatine Privilege
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A second promise associated with the Brown Scapular is known as the Sabbatine Privilege. According to this tradition, Our Lady promised that those who wear the scapular, observe chastity according to their state in life, and recite certain prayers (or have them commuted by a confessor) will be freed from purgatory on the Saturday after their death through Mary's intercession.
              </p>
              <p className="text-text leading-relaxed mb-6">
                While the historical documentation of the Sabbatine Privilege is debated among theologians, the Church has approved devotion to it and many popes have encouraged it. The key spiritual insight is the same: Mary's maternal care extends even to the souls in purgatory, and she intercedes powerfully for those who have entrusted themselves to her.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">The Promises of Our Lady of the Brown Scapular</h3>
                <ul className="space-y-3 text-text">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">✦</span>
                    <span>"Whoever dies clothed in this shall not suffer everlasting fire." — The Scapular Promise to St. Simon Stock</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">✦</span>
                    <span>The Sabbatine Privilege: Liberation from purgatory on the Saturday after death for those who fulfill the conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">✦</span>
                    <span>Mary's special maternal protection throughout life for those enrolled in the scapular</span>
                  </li>
                </ul>
                <p className="text-text-muted text-sm mt-4 italic">Note: The Church teaches that the scapular is a sign of consecration and trust in Mary, not a magical guarantee. It must be worn with genuine devotion and a sincere effort to live a Christian life.</p>
              </div>

              <QuizCTA
                title="How deep is your Marian devotion?"
                description="The Brown Scapular is a sign of consecration to Mary. Take our quiz and discover how to grow in your Catholic faith and love for Our Lady."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                How to Be Enrolled in the Brown Scapular
              </h2>
              <p className="text-text leading-relaxed mb-6">
                To receive the full benefits of the Brown Scapular, a Catholic must be formally enrolled by a priest or deacon who has the faculty to do so. The enrollment is a brief ceremony in which the priest blesses the scapular and places it around the person's neck while reciting the prescribed formula. This enrollment is done only once — after that, if a scapular wears out, you simply replace it with a new one without needing to be re-enrolled.
              </p>
              <p className="text-text leading-relaxed mb-6">
                To be enrolled, simply ask your parish priest. Many priests are happy to enroll parishioners in the Brown Scapular, especially during Marian feast days or the month of May. Some parishes offer group enrollments. The Carmelite Order also has confraternities specifically dedicated to the Brown Scapular, and enrollment through a Carmelite priest or community is particularly meaningful.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                How to Wear the Brown Scapular
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Brown Scapular is worn around the neck, with one panel resting on the chest and the other on the back. It should be worn continuously — day and night — as a sign of your consecration to Mary. The traditional scapular is made of brown wool, but a scapular medal (a medal bearing the image of Our Lady of Mount Carmel on one side and the Sacred Heart on the other) may be substituted with the permission of a confessor.
              </p>
              <p className="text-text leading-relaxed mb-6">
                If your scapular wears out, tears, or becomes damaged, simply replace it with a new one. You do not need to be re-enrolled. Many Catholics keep a spare scapular on hand for this reason. The scapular can be worn under clothing — in fact, most people wear it under their shirt, close to the skin, as a private sign of their devotion.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Other Types of Scapulars
              </h2>
              <p className="text-text leading-relaxed mb-4">
                The Brown Scapular is the most well-known, but the Church has approved several other scapulars, each associated with a different religious order or Marian devotion:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>Green Scapular:</strong> Associated with Our Lady of the Immaculate Heart; used for conversions and healing</li>
                <li><strong>Red Scapular:</strong> Associated with the Passion of Christ; promotes devotion to the Precious Blood</li>
                <li><strong>Blue Scapular:</strong> Associated with the Immaculate Conception; worn by members of the Confraternity of Our Lady of Good Counsel</li>
                <li><strong>White Scapular:</strong> Associated with Our Lady of Good Counsel and the Servite Order</li>
                <li><strong>Black Scapular:</strong> Associated with the Seven Sorrows of Mary and the Servite Order</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Scapular as a Sign of Consecration to Mary
              </h2>
              <p className="text-text leading-relaxed mb-6">
                At its deepest level, the Brown Scapular is not merely a lucky charm or a piece of religious jewelry. It is a sign of total consecration to Mary — a visible expression of the commitment to live under her mantle, to imitate her virtues, and to entrust oneself completely to her maternal care. St. John Paul II, who wore the Brown Scapular from his youth, described it as "a sign of the covenant with Mary."
              </p>
              <p className="text-text leading-relaxed mb-6">
                Many spiritual directors recommend combining the wearing of the Brown Scapular with a formal consecration to Mary — such as the 33-day preparation developed by St. Louis de Montfort or the more recent Total Consecration to Jesus through Mary. The scapular then becomes the outward sign of an interior commitment: "I belong to Mary, and through Mary, to Jesus."
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Prayer Upon Putting on the Brown Scapular</h3>
                <p className="text-text leading-relaxed italic">
                  "O my Queen and my Mother, I give myself entirely to you, and to show my devotion to you, I consecrate to you this day my eyes, my ears, my mouth, my heart, my whole being without reserve. Wherefore, good Mother, as I am your own, keep me, guard me, as your property and possession. Amen."
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "What is the Brown Scapular?",
                answer: "The Brown Scapular is a sacramental of the Catholic Church consisting of two small pieces of brown wool cloth connected by strings, worn around the neck. It is associated with Our Lady of Mount Carmel and the Carmelite Order. According to tradition, Our Lady appeared to St. Simon Stock in 1251 and promised special protection to those who wear it with devotion."
              },
              {
                question: "Do I need a priest to get a Brown Scapular?",
                answer: "Yes, to receive the full benefits of the Brown Scapular, you should be formally enrolled by a priest or deacon who has the faculty to do so. The enrollment ceremony is brief and done only once. After enrollment, if your scapular wears out, you simply replace it without needing to be re-enrolled. Ask your parish priest about enrollment."
              },
              {
                question: "Can I wear a scapular medal instead of the cloth scapular?",
                answer: "Yes. With the permission of a confessor, a scapular medal (bearing the image of Our Lady of Mount Carmel on one side and the Sacred Heart on the other) may be substituted for the cloth scapular. However, many spiritual directors recommend the cloth scapular as the more traditional form, as it more closely resembles the original garment."
              },
              {
                question: "What happens if my Brown Scapular wears out?",
                answer: "If your Brown Scapular wears out, tears, or becomes damaged, simply replace it with a new one. You do not need to be re-enrolled. The enrollment is a one-time ceremony. Many Catholics keep a spare scapular on hand for this reason. The new scapular does not need to be blessed, though you may have it blessed if you wish."
              },
              {
                question: "Is the Brown Scapular a guarantee of salvation?",
                answer: "No. The Church teaches that the Brown Scapular is a sign of consecration and trust in Mary, not a magical guarantee of salvation. It must be worn with genuine devotion and a sincere effort to live a Christian life. The promise of Our Lady is understood in the context of a life of faith, repentance, and love — not as an automatic protection regardless of one's spiritual state."
              }
            ]} />

<RelatedArticles currentSlug="what-is-the-brown-scapular" />

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
