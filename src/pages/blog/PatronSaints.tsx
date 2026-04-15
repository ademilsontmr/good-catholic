import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function PatronSaints() {
  return (
    <>
      <Helmet>
        <title>Patron Saints: How to Choose and Honor Yours | Guide Catholic</title>
        <meta name="description" content="Learn about the tradition of patron saints in the Catholic Church. Discover how to choose your patron saint and how to honor them to receive their intercession." />
        <meta name="keywords" content="how to choose patron saint, patron saints, saint protector, intercession of saints, devotion to saints, saint of my name" />
        <link rel="canonical" href="https://guidecatholic.com/blog/patron-saints/" />
      </Helmet>
        <ArticleSchema
          title="Patron Saints: How to Choose and Honor Yours"
          description="Learn about the tradition of patron saints in the Catholic Church. Discover how to choose your patron saint and how to honor them to receive their intercession."
          url="https://guidecatholic.com/blog/patron-saints/"
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
              <span className="text-text">Patron Saints</span>
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
                  November 25, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  7 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Patron Saints: How to Choose and Honor Yours
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                The saints are our older brothers and sisters in faith, who have already reached heavenly glory and
                continue interceding for us before God.
              </p>
            </header>

            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
              <Users className="w-24 h-24 text-amber-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Devotion to the saints is one of the most beautiful traditions of the Catholic Church. Since the first centuries, Christians venerated those who gave heroic witness to faith, often with their own blood. Patron saints are special intercessors who accompany us on our earthly journey, protecting us and inspiring us with their example of holiness.
              </p>

              <QuizCTA
                title="Who is your friend in Heaven?"
                description="Patron saints are our protectors and models. Take our quiz and discover which saint has a story that connects with your faith journey."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What is a Patron Saint?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A patron saint is a saint recognized as a special protector of a person, place, profession, group, or cause. The word "patron" comes from the Latin "patronus," which means "protector" or "defender." When we choose or receive a patron saint, we establish a special spiritual relationship with them, entrusting ourselves to their intercession before God.
              </p>
              <p className="text-text leading-relaxed mb-6">
                This tradition dates back to the first centuries of the Church, when Christians began to invoke martyrs as intercessors. Over time, the practice expanded to include confessors, virgins, doctors of the Church, and all who were canonized. Today, each Catholic can have one or more patron saints who accompany them on their journey of faith.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                How Do We Receive a Patron Saint?
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                At Baptism
              </h3>
              <p className="text-text leading-relaxed mb-6">
                The most common time to receive a patron saint is at Baptism. Traditionally, parents choose for their child a saint's name, which becomes their baptismal patron. This saint will accompany the person throughout their life, interceding for them and serving as a model of virtue. Therefore, it is important to know the history and virtues of the saint whose name we bear.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                At Confirmation
              </h3>
              <p className="text-text leading-relaxed mb-6">
                In the Sacrament of Confirmation, the confirmand chooses a second patron saint. This choice, made more consciously and personally, represents a commitment to follow that saint's example in their adult life of faith. Many choose saints whose virtues they wish to imitate or who faced challenges similar to their own.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Through Personal Devotion
              </h3>
              <p className="text-text leading-relaxed mb-6">
                In addition to the saints of Baptism and Confirmation, we can develop devotion to other saints throughout life. Often, a saint "chooses us" – we feel a special attraction to their story, their words, or their charism. Others are adopted as patrons of professions, states of life, or specific needs.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                How to Choose a Patron Saint
              </h2>
              <p className="text-text leading-relaxed mb-6">
                If you are seeking a patron saint, consider these guidelines:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>Your name:</strong> Research the saint who bears your baptismal name</li>
                <li><strong>Your profession:</strong> Many professions have traditional patron saints</li>
                <li><strong>Your difficulties:</strong> Look for saints who faced similar challenges</li>
                <li><strong>Your virtues:</strong> Choose a saint whose virtues you wish to develop</li>
                <li><strong>Your birth date:</strong> The saint of the day can be a good patron</li>
                <li><strong>Spiritual intuition:</strong> Trust in grace – often the saint finds us</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Popular Patron Saints and Their Causes
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Saint Joseph
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Patron of the Universal Church, workers, families, and a happy death. Husband of Mary and foster father of Jesus, Saint Joseph is a model of silent faith, obedience to God, and dedication to family. He is especially invoked by fathers and those seeking employment.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Saint Thérèse of the Child Jesus
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Patroness of missions and florists. Her "little way" of love and trust in God inspires millions. She is invoked in impossible causes and often manifests her intercession by sending roses.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Saint Anthony of Padua
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Patron of lost objects, the poor, and popular matchmaker. Doctor of the Church, famous for his preaching and miracles, he is one of the most invoked saints in the world.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Saint Jude Thaddeus
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Patron of impossible and desperate causes. Apostle of Christ, he is invoked when all hopes seem lost.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                How to Honor Your Patron Saint
              </h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Study their life and writings</li>
                <li>Pray daily asking for their intercession</li>
                <li>Celebrate their liturgical feast in a special way</li>
                <li>Imitate their virtues in your daily life</li>
                <li>Have an image or medal of the saint</li>
                <li>Make promises and novenas in their honor</li>
                <li>Visit places associated with the saint, if possible</li>
                <li>Spread their devotion, especially among family members</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Intercession of Saints
              </h2>
              <p className="text-text leading-relaxed mb-6">
                When we invoke a saint, we are not worshiping them – worship is due only to God. We are asking for their intercession, just as we ask for prayers from friends and family on earth. The difference is that the saints are in God's presence and their intercession is particularly powerful. As the Book of Revelation teaches, the prayers of the saints rise like incense before God's throne (Rev 8:3-4).
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "The saints do not cease to intercede for us with the Father. Their fraternal concern greatly helps our weakness."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Catechism of the Catholic Church, 956
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="patron-saints" />

            <BlogFAQ faqs={[
              {
                question: "What is a patron saint?",
                answer: "A patron saint is a saint who is believed to have a special affinity for a particular person, place, profession, or cause. Catholics ask patron saints to intercede for them before God, similar to asking a holy friend to pray on your behalf."
              },
              {
                question: "How do I choose my patron saint?",
                answer: "You can choose a patron saint based on your baptismal or confirmation name, your profession, a cause you care about, or simply a saint whose life inspires you. You can also pray and ask God to guide you to the right patron."
              },
              {
                question: "Is praying to saints the same as worshipping them?",
                answer: "No. Catholics worship God alone. Asking saints to intercede is like asking a holy friend to pray for you. Saints are alive in Heaven and can present our prayers to God. This is called 'veneration,' which is entirely different from worship (latria)."
              },
              {
                question: "Who is the patron saint of the United States?",
                answer: "The Immaculate Conception of the Blessed Virgin Mary is the patroness of the United States, declared by Pope Pius IX in 1847. The National Shrine of the Immaculate Conception in Washington D.C. is dedicated to her."
              },
              {
                question: "Can I have more than one patron saint?",
                answer: "Yes! Catholics often have multiple patron saints — one from Baptism, one from Confirmation, a patron of their profession, and others they feel drawn to. There is no limit to the number of saints you can ask for intercession."
              }
            ]} />

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Discover How Your Faith Life Is Going
              </h3>
              <p className="text-text-muted mb-6">
                Take our quiz and receive a personalized diagnosis of your Catholic journey.
              </p>
              <Link to="/quiz">
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
