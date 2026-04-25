import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sparkles, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function BlessedCarloAcutis() {
  return (
    <>
      <Helmet>
        <title>Blessed Carlo Acutis: The Millennial Saint and Patron of the Internet | Guide Catholic</title>
        <meta name="description" content="Discover the life of Blessed Carlo Acutis — his Eucharistic devotion, his website cataloguing Eucharistic miracles, his death from leukemia at 15, his beatification in 2020, and canonization in 2025." />
        <meta name="keywords" content="blessed carlo acutis, carlo acutis saint, carlo acutis internet, carlo acutis eucharist, millennial saint" />
        <link rel="canonical" href="https://guidecatholic.com/blog/blessed-carlo-acutis/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Blessed Carlo Acutis: The Millennial Saint and Patron of the Internet"
          description="Discover the life of Blessed Carlo Acutis — his Eucharistic devotion, his website cataloguing Eucharistic miracles, his death from leukemia at 15, his beatification in 2020, and canonization in 2025."
          url="https://guidecatholic.com/blog/blessed-carlo-acutis/"
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
              <span className="text-text">Blessed Carlo Acutis</span>
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
                  Saints
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 14, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  10 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Blessed Carlo Acutis: The Millennial Saint and Patron of the Internet
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Carlo Acutis was a teenager who loved video games, soccer, and computers — and who also went to daily Mass, prayed the Rosary, and built a website cataloguing Eucharistic miracles. He died of leukemia at 15 and was canonized in 2025, becoming the first millennial saint.
              </p>
            </header>

            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
              <Sparkles className="w-24 h-24 text-amber-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="blessed-carlo-acutis">
                In an age when the Church is often accused of being out of touch with young people, Carlo Acutis stands as a powerful counterwitness. He was born in 1991, grew up with the internet, loved video games and soccer, had a gift for computer programming — and was also one of the most devout Catholics of his generation. His life proves that holiness is not reserved for another era or another kind of person. It is available to every teenager, every gamer, every ordinary young person who chooses to put God first.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Life in Milan (1991–2006)
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="blessed-carlo-acutis">
                Carlo Acutis was born on May 3, 1991, in London, England, to Italian parents — Andrea Acutis and Antonia Salzano. The family soon moved to Milan, Italy, where Carlo grew up. His parents were not particularly devout Catholics at the time of his birth; it was Carlo himself who, from a very young age, showed an intense attraction to the faith. He began asking to go to Mass daily when he was just seven years old, and he received his First Communion at age seven — a year earlier than his classmates, because his desire for the Eucharist was so evident.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="blessed-carlo-acutis">
                Carlo was a normal, joyful teenager in many ways. He loved soccer, playing with his pets (he had dogs, cats, rabbits, and goldfish), watching anime, and playing video games — particularly on his PlayStation. He was known for his humor, his kindness to classmates who were bullied, and his ability to connect with people from all walks of life. He was also deeply concerned for the poor and homeless, and regularly brought food and clothing to people living on the streets of Milan.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="blessed-carlo-acutis">
                What set Carlo apart was the depth of his interior life. He went to daily Mass, prayed the Rosary every day, spent time in Eucharistic Adoration, and went to Confession regularly. He said that the Eucharist was his "highway to Heaven" — the source of everything in his life. He also had a gift for explaining the faith to others, and he used his computer skills to create resources that would help people encounter Christ.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                His Deep Eucharistic Devotion
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="blessed-carlo-acutis">
                The center of Carlo's life was the Eucharist. He attended daily Mass from the age of seven, and he described the Eucharist as the most important thing in his life — more important than school, friends, or any of his hobbies. He once said: "All the sadness in the world comes from not knowing Jesus in the Eucharist." This was not a pious platitude for Carlo; it was a conviction that shaped every decision he made.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="blessed-carlo-acutis">
                He also had a deep devotion to Eucharistic Adoration. He would spend time before the Blessed Sacrament in silence, simply being present to Jesus. He encouraged his friends and classmates to visit Jesus in the tabernacle, explaining that Jesus was truly present there — not symbolically, but really and substantially. His enthusiasm for the Eucharist was contagious, and several of his friends began attending Mass more regularly because of his influence.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text italic text-center text-lg">
                  "The Eucharist is my highway to Heaven."
                </p>
                <p className="text-text-muted text-center mt-2">— Blessed Carlo Acutis</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                His Website Cataloguing Eucharistic Miracles
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="blessed-carlo-acutis">
                Carlo's most remarkable project was a website — and later a traveling exhibition — cataloguing Eucharistic miracles from around the world. Beginning at age eleven, he spent years researching, documenting, and presenting cases of Eucharistic miracles: instances where the consecrated Host had visibly transformed into human flesh and blood, or where miraculous events had occurred in connection with the Eucharist.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="blessed-carlo-acutis">
                The website, which Carlo built himself using his programming skills, documented over 150 Eucharistic miracles from different countries and centuries. He included photographs, historical documentation, and scientific analyses. The project was not just an academic exercise — it was an act of evangelization. Carlo wanted people to know that the Real Presence of Christ in the Eucharist was not just a theological claim but a historical reality confirmed by miracles.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="blessed-carlo-acutis">
                After his death, the exhibition was printed and has traveled to hundreds of cities around the world, including many in the United States. Millions of people have seen it, and countless conversions and returns to the faith have been attributed to it. Carlo's mother, Antonia, has continued to promote the exhibition as part of her son's legacy.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                His Love of Video Games and Computers
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="blessed-carlo-acutis">
                Carlo's love of technology was not separate from his faith — it was an expression of it. He saw computers and the internet as tools that could be used for good or for evil, and he chose to use them for good. He was a skilled programmer who taught himself multiple programming languages, and he used these skills to build websites, create presentations, and produce materials that helped spread the faith.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="blessed-carlo-acutis">
                He was also aware of the dangers of technology. He limited his own video game playing to one hour per week, not because he didn't enjoy it, but because he wanted to maintain his priorities. He once said: "We have been given a unique gift — the internet. We can use it to go to God or to go away from God." This wisdom, coming from a teenager in the early 2000s, seems remarkably prescient today.
              </LinkedText>

              <QuizCTA
                title="Is your faith as alive as Carlo's?"
                description="Carlo Acutis showed that holiness is possible for young people today. Take our quiz and discover how to deepen your Catholic faith in the digital age."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                His Death from Leukemia at 15
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="blessed-carlo-acutis">
                In October 2006, Carlo was diagnosed with fulminant leukemia — an aggressive form of blood cancer. He was 15 years old. He accepted the diagnosis with remarkable peace, offering his suffering for the Pope and for the Church. He said: "I offer all the suffering I will have to suffer for the Lord, for the Pope, and for the Catholic Church." He died on October 12, 2006, just a few days after his diagnosis.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="blessed-carlo-acutis">
                His last request was to be buried in Assisi — the city of St. Francis, whom he deeply admired. His wish was granted, and he is buried in the Sanctuary of the Renunciation in Assisi. His tomb has become a major pilgrimage site, drawing hundreds of thousands of visitors each year, particularly young people who see in Carlo a saint for their own generation.
              </LinkedText>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
                <p className="text-text italic text-center text-lg">
                  "To always be close to Jesus, that's my life plan."
                </p>
                <p className="text-text-muted text-center mt-2">— Blessed Carlo Acutis</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Beatification (2020) and Canonization (2025)
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="blessed-carlo-acutis">
                Carlo was beatified by Pope Francis on October 10, 2020, in Assisi — the first millennial to be beatified by the Catholic Church. The miracle approved for his beatification was the healing of a Brazilian child from a rare pancreatic disease after the child's family prayed to Carlo. The beatification ceremony was attended by thousands of young people from around the world.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="blessed-carlo-acutis">
                He was canonized by Pope Francis on April 27, 2025, becoming the first millennial saint. His feast day is October 12, the anniversary of his death. His canonization was celebrated with particular joy by young Catholics around the world, who see in him proof that holiness is not just for another age — it is possible here and now, in the digital world, for ordinary young people who choose to put God first.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Prayer to Blessed Carlo Acutis
              </h2>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4 text-center">Prayer to Carlo Acutis</h3>
                <p className="text-text leading-relaxed mb-3">
                  Dear Carlo Acutis, you showed us that holiness is possible for young people in the modern world — that a teenager can love video games and also love Jesus in the Eucharist, that the internet can be used for God's glory, and that a short life lived with great love is worth more than a long life lived without it.
                </p>
                <p className="text-text leading-relaxed mb-3">
                  I ask for your intercession for my intentions: <em>[mention your intentions here]</em>. Help me to find my own "highway to Heaven" — to make the Eucharist the center of my life, to use the gifts God has given me for His glory, and to offer my sufferings with peace and trust.
                </p>
                <p className="text-text leading-relaxed mb-3">
                  Pray for all young people, that they may find in Jesus the joy and meaning they are searching for. And pray for me, that I may live and die in the love of God.
                </p>
                <p className="text-text leading-relaxed font-medium">
                  Blessed Carlo Acutis, pray for us. Amen.
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Who is Carlo Acutis?",
                answer: "Carlo Acutis (1991–2006) was an Italian teenager who died of leukemia at age 15. He was known for his deep Eucharistic devotion, his website cataloguing Eucharistic miracles, and his use of technology for evangelization. He was beatified in 2020 and canonized in 2025, becoming the first millennial saint."
              },
              {
                question: "Why is Carlo Acutis called the patron of the internet?",
                answer: "Carlo Acutis is informally called the patron of the internet because he used his computer skills to build a website cataloguing Eucharistic miracles from around the world, and because he saw the internet as a tool for evangelization. He is often proposed as a patron for young people and internet users."
              },
              {
                question: "What is Carlo Acutis's famous quote about the Eucharist?",
                answer: "Carlo Acutis's most famous quote is: 'The Eucharist is my highway to Heaven.' He also said: 'All the sadness in the world comes from not knowing Jesus in the Eucharist.' These quotes reflect his deep conviction that the Eucharist was the center and source of his entire life."
              },
              {
                question: "When was Carlo Acutis canonized?",
                answer: "Carlo Acutis was canonized by Pope Francis on April 27, 2025, becoming the first millennial to be declared a saint by the Catholic Church. He had been beatified on October 10, 2020. His feast day is October 12, the anniversary of his death."
              },
              {
                question: "Where is Carlo Acutis buried?",
                answer: "Carlo Acutis is buried in the Sanctuary of the Renunciation in Assisi, Italy — the city of St. Francis, whom he deeply admired. His tomb has become a major pilgrimage site, drawing hundreds of thousands of visitors each year, particularly young people."
              }
            ]} />

<RelatedArticles currentSlug="blessed-carlo-acutis" />

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
