import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function SaintElizabethAnnSeton() {
  return (
    <>
      <Helmet>
        <title>Saint Elizabeth Ann Seton: First American-Born Saint | Guide Catholic</title>
        <meta name="description" content="Discover Saint Elizabeth Ann Seton — the first person born in the United States to be canonized. Her conversion, her founding of Catholic education in America, and her enduring legacy." />
        <meta name="keywords" content="saint elizabeth ann seton, first american born saint, elizabeth seton conversion, sisters of charity, catholic education america, feast day january 4" />
        <link rel="canonical" href="https://guidecatholic.com/blog/saint-elizabeth-ann-seton/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Saint Elizabeth Ann Seton: First American-Born Saint"
        description="Discover Saint Elizabeth Ann Seton — the first person born in the United States to be canonized. Her conversion, her founding of Catholic education in America, and her enduring legacy."
        url="https://guidecatholic.com/blog/saint-elizabeth-ann-seton/"
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
              <span className="text-text">Saint Elizabeth Ann Seton</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Saints & Intercession</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />15 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Saint Elizabeth Ann Seton: First American-Born Saint
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                She was born into a prominent Episcopalian family in New York City, married a wealthy merchant, raised five children, was widowed at 29, and converted to Catholicism — a scandalous act in early 19th-century America. Then she founded the first free Catholic school in the United States and established the first American religious community. She is the first person born in the United States to be canonized.
              </p>
            </header>
            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-elizabeth-ann-seton">
                Saint Elizabeth Ann Seton (1774–1821) is one of the most remarkable figures in American Catholic history. In a life of only 46 years, she experienced extraordinary joy and devastating loss, made a courageous religious conversion that cost her her social standing and many of her friendships, and built institutions that would shape Catholic education in America for generations. She is the mother of the American parochial school system.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Early Life: A Privileged New Yorker</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-elizabeth-ann-seton">
                Elizabeth Ann Bayley was born on August 28, 1774, in New York City — just two years before the Declaration of Independence. Her father, Richard Bayley, was a prominent physician and the first professor of anatomy at Columbia University. Her mother died when Elizabeth was three, and her father remarried; Elizabeth had a complicated relationship with her stepmother.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-elizabeth-ann-seton">
                Elizabeth grew up in the Episcopal Church and was deeply devout from childhood. She had a natural gift for prayer and a sensitivity to the presence of God that would mark her entire life. In 1794, at age 19, she married William Magee Seton, a wealthy New York merchant. They had five children and were, by all accounts, deeply happy together.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-elizabeth-ann-seton">
                But the happiness did not last. William's business failed in the economic crisis of the late 1790s, and his health declined rapidly. In 1803, hoping that the Italian climate would restore his health, Elizabeth and William sailed to Italy with their eldest daughter, Anna. William died in Pisa on December 27, 1803, leaving Elizabeth a widow at 29 with five children and no money.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Conversion: Italy and the Eucharist</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-elizabeth-ann-seton">
                While in Italy, Elizabeth stayed with the Filicchi family — Italian Catholic merchants who had been business partners of her husband. The Filicchis were devout Catholics, and Elizabeth was deeply moved by their faith, especially their devotion to the Eucharist.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-elizabeth-ann-seton">
                Elizabeth had always believed in the Real Presence of Christ in the Eucharist — a belief she had held intuitively even as an Episcopalian. When she attended Mass with the Filicchis and saw the elevation of the Host, she was overwhelmed. She wrote: "How happy would we be if we believed what these dear souls believe, that they possess God in the Sacrament and that He remains in their churches and is carried to them when they are sick."
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-elizabeth-ann-seton">
                After returning to New York, Elizabeth spent two years in agonizing discernment. Conversion to Catholicism in early 19th-century America was a serious social step — Catholics were a despised minority, associated with Irish immigrants and foreign influence. Her family and friends were horrified. Her sister-in-law wrote that she would rather see Elizabeth "in her coffin" than become a Catholic.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-elizabeth-ann-seton">
                But Elizabeth could not resist the pull of the Eucharist. On March 14, 1805, she was received into the Catholic Church at St. Peter's Church in New York City — the oldest Catholic church in the state. She was 30 years old.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Founding Catholic Education in America</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-elizabeth-ann-seton">
                After her conversion, Elizabeth struggled to support her five children. She tried running a school in Boston, but anti-Catholic prejudice made it impossible. In 1808, Bishop John Carroll of Baltimore — the first Catholic bishop in the United States — invited her to open a school in Baltimore.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-elizabeth-ann-seton">
                In 1809, Elizabeth moved to Emmitsburg, Maryland, where she founded St. Joseph's Academy and Free School — the first free Catholic school for girls in the United States. This was the beginning of the American parochial school system. Elizabeth's school was free for poor children — a revolutionary concept at the time.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-elizabeth-ann-seton">
                Also in 1809, Elizabeth founded the Sisters of Charity of St. Joseph — the first religious community founded in the United States. The Sisters of Charity would go on to found schools, orphanages, and hospitals across the country. Today, the various branches of the Sisters of Charity trace their origins to Elizabeth's community at Emmitsburg.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your faith and knowledge of American Catholic history."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Suffering and Death</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-elizabeth-ann-seton">
                Elizabeth's years at Emmitsburg were marked by both fruitful ministry and devastating personal loss. Two of her daughters — Anna and Rebecca — died of tuberculosis, as did two of her sisters-in-law who had joined her community. Elizabeth herself suffered from tuberculosis for years.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-elizabeth-ann-seton">
                Through all her suffering, Elizabeth maintained a remarkable serenity rooted in her faith. She wrote: "The will of God — nothing more, nothing less, nothing else." She died on January 4, 1821, at the age of 46. Her last words were: "Be children of the Church."
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Canonization and Legacy</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-elizabeth-ann-seton">
                Elizabeth Ann Seton was beatified by Pope John XXIII in 1963 and canonized by Pope Paul VI on September 14, 1975 — the first person born in the United States to be canonized. Her feast day is January 4.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-elizabeth-ann-seton">
                Her legacy is immense. The parochial school system she helped found now educates millions of American children. The religious communities she inspired have served the poor, the sick, and the uneducated across the country for two centuries. She is the patron saint of Catholic schools, widows, and people who have lost children.
              </LinkedText>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "The will of God — nothing more, nothing less, nothing else."
                </p>
                <p className="text-text-muted text-center mt-2">— Saint Elizabeth Ann Seton</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "Who was Saint Elizabeth Ann Seton?", answer: "Saint Elizabeth Ann Seton (1774–1821) was the first person born in the United States to be canonized. Born into a prominent Episcopalian family in New York City, she converted to Catholicism after being widowed at 29, founded the first free Catholic school in the United States, and established the first American religious community — the Sisters of Charity. Her feast day is January 4." },
              { question: "Why did Elizabeth Ann Seton convert to Catholicism?", answer: "Elizabeth converted to Catholicism primarily because of her belief in the Real Presence of Christ in the Eucharist. While in Italy after her husband's death, she was deeply moved by the Catholic devotion to the Eucharist. After two years of discernment, she was received into the Catholic Church on March 14, 1805, despite the social cost of conversion in early 19th-century America." },
              { question: "What did Saint Elizabeth Ann Seton found?", answer: "Elizabeth Ann Seton founded St. Joseph's Academy and Free School in Emmitsburg, Maryland — the first free Catholic school for girls in the United States and the beginning of the American parochial school system. She also founded the Sisters of Charity of St. Joseph — the first religious community founded in the United States." },
              { question: "When was Elizabeth Ann Seton canonized?", answer: "Elizabeth Ann Seton was beatified by Pope John XXIII in 1963 and canonized by Pope Paul VI on September 14, 1975 — the first person born in the United States to be canonized. Her feast day is January 4." },
              { question: "What is Saint Elizabeth Ann Seton the patron saint of?", answer: "Saint Elizabeth Ann Seton is the patron saint of Catholic schools, widows, and people who have lost children. She is also considered the mother of the American parochial school system." },
            ]} />

            <RelatedArticles currentSlug="saint-elizabeth-ann-seton" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your faith and knowledge of the saints.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
