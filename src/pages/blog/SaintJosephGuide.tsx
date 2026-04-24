import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Home, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function SaintJosephGuide() {
  return (
    <>
      <Helmet>
        <title>Saint Joseph: Patron of the Church, Families & Workers | Guide Catholic</title>
        <meta name="description" content="Complete guide to Saint Joseph — foster father of Jesus, patron of the universal Church, families, workers, and a happy death. His life, prayers, feast days, and devotions." />
        <meta name="keywords" content="saint joseph catholic, st joseph patron saint, prayer to saint joseph, feast day saint joseph, saint joseph devotion, patron of workers" />
        <link rel="canonical" href="https://guidecatholic.com/blog/saint-joseph-complete-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Saint Joseph: Patron of the Church, Families & Workers"
        description="Complete guide to Saint Joseph — foster father of Jesus, patron of the universal Church, families, workers, and a happy death. His life, prayers, feast days, and devotions."
        url="https://guidecatholic.com/blog/saint-joseph-complete-guide/"
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
              <span className="text-text">Saint Joseph</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Saints & Feast Days</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />17 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Saint Joseph: Patron of the Church, Families & Workers
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Saint Joseph never speaks a single word in the Gospels. Yet he is the patron of the universal Church, the model of fatherhood, the protector of families, and one of the most powerful intercessors in heaven. His silence speaks volumes.
              </p>
            </header>

            <div className="aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10">
              <Home className="w-24 h-24 text-yellow-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                In an age that desperately needs models of authentic fatherhood, Saint Joseph stands as the supreme example. He was a just man, a faithful husband, a devoted father, a skilled craftsman, and a man of deep prayer. He protected the Holy Family from danger, provided for their needs, and raised the Son of God with love and wisdom. And he did all of this in silence.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Joseph in Scripture</h2>
              <p className="text-text leading-relaxed mb-6">
                Joseph appears primarily in the infancy narratives of Matthew and Luke. Matthew's Gospel focuses on Joseph's perspective, presenting him as a new Moses who receives divine messages in dreams and leads his family to safety.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Key moments in Joseph's life:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>The Annunciation to Joseph (Matthew 1:18-25):</strong> When Joseph discovers Mary is pregnant, he plans to divorce her quietly rather than expose her to public shame. An angel appears to him in a dream and reveals that the child is conceived by the Holy Spirit. Joseph obeys immediately — he takes Mary as his wife.</li>
                <li><strong>The Flight to Egypt (Matthew 2:13-15):</strong> An angel warns Joseph in a dream that Herod wants to kill the child. Joseph rises in the night and leads his family to Egypt — a dangerous journey of hundreds of miles — to protect Jesus.</li>
                <li><strong>The Return to Nazareth (Matthew 2:19-23):</strong> After Herod's death, an angel again appears to Joseph in a dream, directing him to return to Israel. Joseph obeys and settles in Nazareth.</li>
                <li><strong>The Finding in the Temple (Luke 2:41-52):</strong> When the twelve-year-old Jesus is lost in Jerusalem, Joseph and Mary search for him anxiously for three days. This is the last time Joseph appears in the Gospels.</li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                Joseph is described as a "just man" (Matthew 1:19) — the highest praise the Bible can give. In Hebrew thought, a "just man" is one who is righteous before God, faithful to the covenant, and upright in all his dealings.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Joseph's Vocation: The Hidden Life</h2>
              <p className="text-text leading-relaxed mb-6">
                Joseph was a carpenter (or craftsman — the Greek word <em>tekton</em> can mean a worker in wood, stone, or metal). He worked with his hands to provide for his family. Jesus grew up in Joseph's workshop, learning the trade. The Son of God spent thirty of his thirty-three years in the hidden life of Nazareth — working, praying, and living in the ordinary rhythms of family life.
              </p>
              <p className="text-text leading-relaxed mb-6">
                This hidden life is Joseph's great gift to the Church. He shows us that holiness is not reserved for the dramatic and the spectacular. It is found in the faithful, loving, daily performance of ordinary duties — work, family, prayer, service.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Pope Francis, in his apostolic exhortation <em>Patris Corde</em> (With a Father's Heart, 2020), wrote: "Joseph is the patron of the ordinary, the patron of those who do the quiet, hidden work that makes the world go round."
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Joseph as Model of Fatherhood</h2>
              <p className="text-text leading-relaxed mb-6">
                Joseph was not the biological father of Jesus, but he was his true father in every other sense. He gave Jesus his name, his lineage (the line of David), his trade, his language, his culture, and his love. He was present, protective, and faithful.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Church sees in Joseph the model of authentic fatherhood:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>A father who listens to God.</strong> Joseph received his most important instructions in dreams — in the silence of the night. He was a man of prayer who listened for God's voice.</li>
                <li><strong>A father who acts decisively.</strong> Every time Joseph received a divine message, he acted immediately. He did not delay, debate, or make excuses.</li>
                <li><strong>A father who protects.</strong> Joseph's primary role was to protect Mary and Jesus. He risked his own life to lead them to safety in Egypt.</li>
                <li><strong>A father who provides.</strong> Joseph worked to provide for his family's material needs. He did not consider this beneath his dignity.</li>
                <li><strong>A father who teaches.</strong> Joseph taught Jesus the Torah, the prayers, the traditions of Israel. He took Jesus to the Temple. He formed his son in the faith.</li>
              </ul>

              <QuizCTA
                title="How is your faith as a Catholic?"
                description="Take our assessment and receive a personalized guide inspired by the saints."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Joseph's Patronages</h2>
              <p className="text-text leading-relaxed mb-6">
                Saint Joseph is the patron of an extraordinary range of people and causes:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>The Universal Church</strong> — declared by Pope Pius IX in 1870. Joseph protected the Holy Family; he protects the whole Church.</li>
                <li><strong>Fathers and families</strong> — the model of fatherhood and family life.</li>
                <li><strong>Workers and craftsmen</strong> — celebrated on May 1 (St. Joseph the Worker), a feast established by Pope Pius XII in 1955.</li>
                <li><strong>A happy death</strong> — tradition holds that Joseph died in the arms of Jesus and Mary. He is the patron of those who desire a holy death.</li>
                <li><strong>Unborn children</strong> — Joseph protected the infant Jesus; he protects all unborn children.</li>
                <li><strong>Home buyers and sellers</strong> — a popular devotion involves burying a statue of St. Joseph when selling a home.</li>
                <li><strong>Canada, Peru, Belgium, and many other nations.</strong></li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Feast Days of Saint Joseph</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>March 19 — Solemnity of Saint Joseph, Spouse of the Blessed Virgin Mary.</strong> This is the principal feast of St. Joseph, a solemnity in the universal Church. In many countries it is a Holy Day of Obligation.</li>
                <li><strong>May 1 — Saint Joseph the Worker.</strong> Established by Pope Pius XII in 1955 to honor Joseph as the patron of workers and to provide a Catholic alternative to the secular May Day celebrations.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Prayers to Saint Joseph</h2>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">Traditional Prayer to Saint Joseph</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  O Saint Joseph, whose protection is so great, so strong, so prompt before the throne of God, I place in you all my interests and desires. O Saint Joseph, do assist me by your powerful intercession and obtain for me from your divine Son all spiritual blessings through Jesus Christ, Our Lord; so that having engaged here below your heavenly power, I may offer my thanksgiving and homage to the most loving of Fathers. O Saint Joseph, I never weary contemplating you and Jesus asleep in your arms. I dare not approach while He reposes near your heart. Press Him in my name and kiss His fine head for me, and ask Him to return the kiss when I draw my dying breath. Saint Joseph, patron of departing souls, pray for us. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Prayer to Saint Joseph for Families</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Blessed Saint Joseph, tender and faithful guardian of the Holy Family, to you I entrust my family. Watch over us as you watched over Jesus and Mary. Protect us from all harm, guide us in all our decisions, and help us to love one another as you loved them. May our home be a place of peace, prayer, and joy. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Year of Saint Joseph (2020-2021)</h2>
              <p className="text-text leading-relaxed mb-6">
                On December 8, 2020 — the 150th anniversary of Pope Pius IX's declaration of Joseph as patron of the universal Church — Pope Francis proclaimed a special Year of Saint Joseph. He also published the apostolic exhortation <em>Patris Corde</em> (With a Father's Heart), a beautiful meditation on Joseph's role in salvation history and his relevance for the Church today.
              </p>
              <p className="text-text leading-relaxed mb-6">
                In <em>Patris Corde</em>, Pope Francis describes Joseph as a beloved father, a tender and loving father, an obedient father, an accepting father, a creatively courageous father, a working father, and a father in the shadows. Each of these aspects offers a model for fathers, for the Church, and for every Christian.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "Go to Joseph" — the words of Pharaoh to the Egyptians in Genesis 41:55 have become the Church's motto for devotion to Saint Joseph. When you need help, go to Joseph.
                </p>
                <p className="text-text-muted text-center mt-2">— Traditional Catholic saying</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "When is the feast day of Saint Joseph?", answer: "Saint Joseph has two feast days: March 19 (Solemnity of Saint Joseph, Spouse of the Blessed Virgin Mary) and May 1 (Saint Joseph the Worker). March 19 is the principal feast and is a Holy Day of Obligation in some countries." },
              { question: "Why is Saint Joseph the patron of the universal Church?", answer: "Pope Pius IX declared Saint Joseph patron of the universal Church in 1870. Just as Joseph protected and provided for the Holy Family, he protects and intercedes for the whole Church. He is the model of faithful service to Christ." },
              { question: "What is the St. Joseph novena?", answer: "The St. Joseph Novena is nine days of prayer to Saint Joseph for a specific intention. It is traditionally prayed from March 10-18, ending on the eve of his feast day (March 19). It can also be prayed at any time for urgent needs." },
              { question: "Why do people bury a statue of Saint Joseph when selling a house?", answer: "This popular devotion involves burying a statue of Saint Joseph in the yard of a home being sold, asking for his intercession. The practice has no official Church endorsement but reflects popular devotion to Joseph as patron of home and family. After the sale, the statue should be dug up and given a place of honor in the new home." },
              { question: "Did Saint Joseph die before Jesus's public ministry?", answer: "The Gospels do not record Joseph's death, but he is absent from the accounts of Jesus's public ministry, the crucifixion, and the resurrection. This suggests he died before Jesus began his ministry — probably while Jesus was still in Nazareth. Tradition holds that he died in the arms of Jesus and Mary, which is why he is the patron of a happy death." },
            ]} />

            <RelatedArticles currentSlug="saint-joseph-complete-guide" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Discover Your Catholic Faith Journey</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your Catholic life.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
