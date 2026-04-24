import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sword, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function SaintJoanOfArc() {
  return (
    <>
      <Helmet>
        <title>Saint Joan of Arc: The Maid of Orléans, Her Life, Trial & Legacy | Guide Catholic</title>
        <meta name="description" content="Discover Saint Joan of Arc — the teenage peasant girl who led France to victory, was burned at the stake at 19, and was canonized 500 years later. Her life, voices, trial, and enduring legacy." />
        <meta name="keywords" content="saint joan of arc, maid of orleans, joan of arc life, joan of arc trial, joan of arc burned at stake, patron saint of france, feast day may 30" />
        <link rel="canonical" href="https://guidecatholic.com/blog/saint-joan-of-arc/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Saint Joan of Arc: The Maid of Orléans, Her Life, Trial & Legacy"
        description="Discover Saint Joan of Arc — the teenage peasant girl who led France to victory, was burned at the stake at 19, and was canonized 500 years later. Her life, voices, trial, and enduring legacy."
        url="https://guidecatholic.com/blog/saint-joan-of-arc/"
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
              <span className="text-text">Saint Joan of Arc</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />17 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Saint Joan of Arc: The Maid of Orléans, Her Life, Trial & Legacy
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                She was an illiterate peasant girl from a small village in northeastern France. She had never held a sword. She was 17 years old. And she turned the tide of the Hundred Years' War, saving France from English conquest — guided, she said, by the voices of saints.
              </p>
            </header>
            <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
              <Sword className="w-24 h-24 text-blue-500" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Saint Joan of Arc (c. 1412–1431) is one of the most extraordinary figures in the history of Christianity — and in the history of the world. In less than two years, she transformed the course of the Hundred Years' War, led the French army to a series of stunning victories, and secured the coronation of the French king. Then she was captured, tried for heresy by a court of French bishops collaborating with the English, and burned at the stake at the age of 19. Twenty-five years later, a retrial declared her innocent. Five centuries later, the Catholic Church declared her a saint.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Her story is one of the most remarkable in human history — a story of faith, courage, and the power of God working through the most unlikely of instruments.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Early Life: The Voices Begin</h2>
              <p className="text-text leading-relaxed mb-6">
                Joan was born around 1412 in Domrémy, a small village in the Duchy of Bar (present-day northeastern France). Her father, Jacques d'Arc, was a prosperous peasant farmer; her mother, Isabelle Romée, was a devout woman who taught Joan her prayers. Joan grew up in a deeply Catholic household, attending Mass regularly and showing an unusual piety from childhood.
              </p>
              <p className="text-text leading-relaxed mb-6">
                When Joan was about 13, she began to hear voices — which she identified as Saint Michael the Archangel, Saint Catherine of Alexandria, and Saint Margaret of Antioch. The voices told her to be good, to go to church, and to help the Dauphin (the uncrowned French king, Charles VII) reclaim his kingdom from the English and their Burgundian allies.
              </p>
              <p className="text-text leading-relaxed mb-6">
                France in the 1420s was in desperate straits. The Hundred Years' War had been going on for nearly a century. The English, allied with the powerful Duke of Burgundy, controlled much of northern France, including Paris. The Dauphin Charles held only a small territory in the south and center of the country, and his claim to the throne was disputed. The city of Orléans — the key to the Loire Valley and the heart of France — was under English siege.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Mission: From Peasant Girl to Military Commander</h2>
              <p className="text-text leading-relaxed mb-6">
                In 1429, at age 17, Joan traveled to the court of the Dauphin at Chinon. She had to convince a series of skeptical officials and theologians that her mission was genuine before she was granted an audience with Charles. When she finally met him, she reportedly identified him immediately despite his attempt to disguise himself among his courtiers — a detail that impressed the court.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Charles had Joan examined by a commission of theologians at Poitiers, who found nothing heretical in her claims and recommended that she be given a chance to prove herself. She was given armor, a horse, and command of a relief force for Orléans.
              </p>
              <p className="text-text leading-relaxed mb-6">
                What happened next astonished everyone. Joan arrived at Orléans on April 29, 1429. Within nine days — nine days — the English siege that had lasted seven months was broken. Joan was wounded by an arrow during the fighting but refused to leave the field. The English, who had been winning the war for decades, were routed.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Over the following weeks, Joan led the French army in a series of rapid victories along the Loire Valley, capturing English-held towns one after another. On July 17, 1429, Charles VII was crowned King of France at Reims Cathedral — the traditional coronation site — with Joan standing beside him, her banner in hand.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Capture and Trial</h2>
              <p className="text-text leading-relaxed mb-6">
                Joan's military success continued through the summer of 1429, but the political situation was complicated. Charles VII, now crowned, was more interested in negotiating than fighting. Joan pushed for an assault on Paris, which failed. In the spring of 1430, she was captured by Burgundian forces at Compiègne and sold to the English.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The English were determined to discredit Joan — and, by extension, the legitimacy of Charles VII's coronation. They arranged for her to be tried for heresy by an ecclesiastical court at Rouen, presided over by Bishop Pierre Cauchon, a French bishop who was a partisan of the English cause.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The trial was a travesty of justice. Joan was denied legal counsel, held in a military prison (rather than an ecclesiastical one, as canon law required), and subjected to months of interrogation by trained theologians. Yet she held her own with remarkable intelligence and courage. When asked whether she was in God's grace — a trick question, since claiming to be in God's grace was presumptuous, but denying it would be an admission of sin — she replied: "If I am not, may God put me there; and if I am, may God so keep me."
              </p>
              <p className="text-text leading-relaxed mb-6">
                Joan was convicted of heresy, primarily on the charge of wearing men's clothing (which she wore for practical reasons in the field and in prison, to protect herself from assault). She was burned at the stake in the marketplace of Rouen on May 30, 1431. She was 19 years old. Her last word, repeated several times as the flames rose, was "Jesus."
              </p>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your faith and devotion to the saints."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Rehabilitation and Canonization</h2>
              <p className="text-text leading-relaxed mb-6">
                Twenty-five years after Joan's execution, Pope Callixtus III ordered a retrial. In 1456, the original verdict was annulled — Joan was declared innocent of all charges, and the trial was condemned as fraudulent and corrupt. Her rehabilitation was complete.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The formal process for Joan's canonization began in the 19th century. She was beatified by Pope Pius X in 1909 and canonized by Pope Benedict XV on May 16, 1920 — nearly 500 years after her death. Her feast day is May 30, the anniversary of her martyrdom.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Joan is the patron saint of France, of soldiers, of prisoners, and of people ridiculed for their piety. She is one of the patron saints of the United States (along with the Immaculate Conception) and is venerated throughout the Catholic world.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Joan of Arc Matters</h2>
              <p className="text-text leading-relaxed mb-6">
                Joan of Arc is significant for Catholics for several reasons. She is a powerful example of God working through the most unlikely instruments — an illiterate teenage girl with no military training, no political connections, and no social standing. She shows that God's call does not depend on human qualifications.
              </p>
              <p className="text-text leading-relaxed mb-6">
                She is also a model of courage in the face of unjust authority. Joan was condemned by bishops — men who should have been her protectors — and she maintained her faith and her integrity to the end. Her example is an inspiration for all Catholics who face opposition, persecution, or unjust treatment.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Finally, Joan is a reminder that the Church can err — and that the Church has the humility to correct its errors. The rehabilitation of Joan of Arc is one of the most remarkable acts of institutional self-correction in history.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "I am not afraid. I was born to do this."
                </p>
                <p className="text-text-muted text-center mt-2">— Saint Joan of Arc</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "Who was Saint Joan of Arc?", answer: "Saint Joan of Arc (c. 1412–1431) was a French peasant girl who, guided by heavenly voices, led the French army to a series of victories in the Hundred Years' War and secured the coronation of King Charles VII. She was captured by the English, tried for heresy by a corrupt ecclesiastical court, and burned at the stake at age 19. She was canonized by Pope Benedict XV in 1920. Her feast day is May 30." },
              { question: "What voices did Joan of Arc hear?", answer: "Joan reported hearing the voices of Saint Michael the Archangel, Saint Catherine of Alexandria, and Saint Margaret of Antioch, beginning when she was about 13 years old. The voices instructed her to help the Dauphin Charles reclaim his kingdom and to be faithful to God. The authenticity of her visions was examined by theologians both during her lifetime and at her rehabilitation trial." },
              { question: "Why was Joan of Arc burned at the stake?", answer: "Joan was burned at the stake on May 30, 1431, after being convicted of heresy by an ecclesiastical court at Rouen presided over by Bishop Pierre Cauchon, a partisan of the English cause. The trial was widely recognized as a travesty of justice. Twenty-five years later, a retrial ordered by Pope Callixtus III annulled the verdict and declared Joan innocent of all charges." },
              { question: "When was Joan of Arc canonized?", answer: "Joan of Arc was beatified by Pope Pius X in 1909 and canonized by Pope Benedict XV on May 16, 1920 — nearly 500 years after her death. Her feast day is May 30, the anniversary of her martyrdom." },
              { question: "What is Saint Joan of Arc the patron saint of?", answer: "Saint Joan of Arc is the patron saint of France, soldiers, prisoners, and people ridiculed for their piety. She is also one of the patron saints of the United States." },
            ]} />

            <RelatedArticles currentSlug="saint-joan-of-arc" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your faith and devotion to the saints.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
