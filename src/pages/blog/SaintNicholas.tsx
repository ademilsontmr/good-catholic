import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Star, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function SaintNicholas() {
  return (
    <>
      <Helmet>
        <title>Saint Nicholas: The Real Santa Claus and Bishop of Myra | Guide Catholic</title>
        <meta name="description" content="Discover the real Saint Nicholas — the 4th-century bishop of Myra whose extraordinary generosity inspired the legend of Santa Claus. His life, miracles, and feast day." />
        <meta name="keywords" content="saint nicholas catholic, real santa claus, bishop of myra, saint nicholas feast day december 6, saint nicholas miracles, patron of children" />
        <link rel="canonical" href="https://guidecatholic.com/blog/saint-nicholas/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Saint Nicholas: The Real Santa Claus and Bishop of Myra"
        description="Discover the real Saint Nicholas — the 4th-century bishop of Myra whose extraordinary generosity inspired the legend of Santa Claus. His life, miracles, and feast day."
        url="https://guidecatholic.com/blog/saint-nicholas/"
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
              <span className="text-text">Saint Nicholas</span>
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
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 20, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />15 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Saint Nicholas: The Real Santa Claus and Bishop of Myra
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Before there was Santa Claus, there was Nicholas of Myra — a 4th-century bishop whose extraordinary generosity, fierce orthodoxy, and miraculous deeds made him one of the most beloved saints in Christian history.
              </p>
            </header>

            <div className="aspect-video bg-sky-100 rounded-2xl flex items-center justify-center mb-10">
              <Star className="w-24 h-24 text-sky-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Every December, billions of people celebrate a figure inspired by a real Catholic bishop who lived in what is now Turkey in the 4th century. The transformation of Nicholas of Myra into Santa Claus is one of the most remarkable stories in cultural history. But the real Nicholas is far more interesting — and far more inspiring — than his secular descendant.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Life of Saint Nicholas</h2>
              <p className="text-text leading-relaxed mb-6">
                Nicholas was born around 270-280 AD in Patara, a city in Lycia (modern-day Turkey). His parents were wealthy Christians who died in an epidemic when Nicholas was young, leaving him a substantial inheritance. Nicholas took seriously the words of Jesus: "Sell what you own and give the money to the poor" (Mark 10:21). He used his entire inheritance to help the poor, the sick, and those in need.
              </p>
              <p className="text-text leading-relaxed mb-6">
                He became a priest and eventually the Bishop of Myra — a city in Lycia. He served as bishop during one of the most turbulent periods in Church history, including the persecution of Emperor Diocletian (303-311 AD), during which Nicholas was imprisoned for his faith.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Three Daughters: The Origin of Gift-Giving</h2>
              <p className="text-text leading-relaxed mb-6">
                The most famous story about Nicholas — and the one that gave rise to the tradition of gift-giving — involves a poor man with three daughters. The man had no money for his daughters' dowries, which meant they could not marry and would likely be forced into slavery or prostitution.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Nicholas heard of their plight. On three separate nights, he secretly threw bags of gold coins through the window of their house (or, in some versions, down the chimney). The gold landed in the stockings the daughters had hung by the fire to dry — giving rise to the tradition of hanging stockings by the fireplace.
              </p>
              <p className="text-text leading-relaxed mb-6">
                When the father discovered the source of the gifts, he tried to thank Nicholas. But Nicholas insisted on anonymity — he did not want to be praised for his generosity. This story captures the essence of Nicholas's character: generous, secret, and motivated by love rather than recognition.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Nicholas at the Council of Nicaea (325 AD)</h2>
              <p className="text-text leading-relaxed mb-6">
                One of the most dramatic stories about Nicholas involves the Council of Nicaea — the great council called by Emperor Constantine to resolve the Arian controversy. Arius taught that Jesus was not truly God but a created being. Nicholas was among the bishops who attended the council.
              </p>
              <p className="text-text leading-relaxed mb-6">
                According to tradition, Nicholas was so outraged by Arius's heresy that he walked across the council chamber and slapped Arius in the face. This was a serious breach of protocol, and Nicholas was temporarily stripped of his episcopal insignia. But that night, Jesus and Mary appeared to the other bishops in a dream, restoring Nicholas's vestments — a sign that his zeal for orthodoxy was approved by heaven.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Whether or not this story is historically accurate, it reveals something important about Nicholas: he was not a soft, sentimental figure. He was a man of deep conviction who was willing to fight for the truth of the faith.
              </p>

              <QuizCTA
                title="How well do you know the saints?"
                description="Take our Catholic faith assessment and discover how to deepen your knowledge of the faith."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Miracles of Saint Nicholas</h2>
              <p className="text-text leading-relaxed mb-6">
                Nicholas is associated with numerous miracles, both during his life and after his death:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>The Three Boys:</strong> The most famous miracle involves three boys who were murdered by an innkeeper, pickled in a barrel, and later restored to life by Nicholas. This story made him the patron of children.</li>
                <li><strong>Calming the Storm:</strong> Nicholas is said to have calmed a violent storm at sea, saving the lives of sailors. This made him the patron of sailors and travelers.</li>
                <li><strong>Saving the Condemned:</strong> Nicholas is said to have stopped the execution of three innocent men by grabbing the executioner's sword at the last moment.</li>
                <li><strong>Providing Grain:</strong> During a famine, Nicholas persuaded sailors to give grain from their ships to feed the starving people of Myra, promising that the grain would be miraculously replenished — and it was.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">From Nicholas to Santa Claus</h2>
              <p className="text-text leading-relaxed mb-6">
                The transformation of Nicholas into Santa Claus happened gradually over many centuries:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Medieval Europe:</strong> Nicholas became one of the most popular saints in Europe. His feast day (December 6) was celebrated with gift-giving to children, especially in the Netherlands and Germany.</li>
                <li><strong>Dutch "Sinterklaas":</strong> Dutch settlers brought the tradition of "Sinterklaas" (a corruption of "Sint Nikolaas") to America. Sinterklaas was depicted as a bishop who rode a white horse and gave gifts to good children.</li>
                <li><strong>19th-century America:</strong> Washington Irving's satirical writings (1809) and Clement Clarke Moore's poem "A Visit from St. Nicholas" (1823) transformed Sinterklaas into the jolly, red-suited figure we know today.</li>
                <li><strong>Coca-Cola (1930s):</strong> The modern image of Santa Claus — red suit, white beard, rotund figure — was popularized by Coca-Cola's advertising campaigns in the 1930s.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Patronages of Saint Nicholas</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Children</li>
                <li>Sailors and travelers</li>
                <li>Merchants</li>
                <li>The falsely accused</li>
                <li>Repentant thieves</li>
                <li>Russia and Greece</li>
                <li>Pawnbrokers (the three golden balls of pawnshops derive from the three bags of gold he gave)</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Feast Day and Celebration</h2>
              <p className="text-text leading-relaxed mb-6">
                The feast day of Saint Nicholas is December 6. In many European countries, this is the day when children receive gifts — not December 25. Children leave their shoes or stockings out on the night of December 5, and Nicholas fills them with gifts, candy, and fruit.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Many Catholic families celebrate the feast of Saint Nicholas as a way of keeping the Christian roots of Christmas alive. It is a beautiful opportunity to teach children about the real Nicholas — his generosity, his faith, and his love for the poor.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "The giver of every good and perfect gift has called upon us to mimic His giving, by grace, through faith, and this is not of ourselves."
                </p>
                <p className="text-text-muted text-center mt-2">— Attributed to Saint Nicholas</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "When is the feast day of Saint Nicholas?", answer: "The feast day of Saint Nicholas is December 6. In many European countries, this is the traditional day for gift-giving to children, not December 25." },
              { question: "Is Santa Claus based on Saint Nicholas?", answer: "Yes. Santa Claus is derived from 'Sinterklaas,' the Dutch name for Saint Nicholas. The modern image of Santa Claus evolved from the Dutch tradition of Sinterklaas, combined with 19th-century American literary and artistic depictions." },
              { question: "What is Saint Nicholas the patron saint of?", answer: "Saint Nicholas is the patron saint of children, sailors, merchants, the falsely accused, and repentant thieves. He is also the patron of Russia, Greece, and many cities and professions." },
              { question: "Where are the relics of Saint Nicholas?", answer: "The relics of Saint Nicholas are primarily in the Basilica di San Nicola in Bari, Italy. In 1087, Italian merchants brought his bones from Myra (in modern Turkey) to Bari, where a magnificent basilica was built to house them. The basilica is a major pilgrimage site." },
              { question: "Did Saint Nicholas really attend the Council of Nicaea?", answer: "Historical records confirm that Nicholas of Myra was a bishop during the time of the Council of Nicaea (325 AD), and it is plausible that he attended. The story of him slapping Arius is a later tradition and is not found in the earliest sources, but it reflects the historical reality that Nicholas was a fierce defender of orthodox Christology." },
            ]} />

            <RelatedArticles currentSlug="saint-nicholas" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Discover Your Catholic Faith Journey</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your faith.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
