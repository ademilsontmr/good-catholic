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

export default function SaintBernadetteSoubirous() {
  return (
    <>
      <Helmet>
        <title>Saint Bernadette Soubirous: The Visionary of Lourdes | Guide Catholic</title>
        <meta name="description" content="Discover Saint Bernadette Soubirous — the young French girl who saw Our Lady 18 times at Lourdes in 1858, whose body remains incorrupt to this day." />
        <meta name="keywords" content="saint bernadette soubirous, bernadette lourdes visions, our lady lourdes bernadette, bernadette soubirous life, lourdes apparitions 1858, feast day april 16" />
        <link rel="canonical" href="https://guidecatholic.com/blog/saint-bernadette-soubirous/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Saint Bernadette Soubirous: The Visionary of Lourdes"
        description="Discover Saint Bernadette Soubirous — the young French girl who saw Our Lady 18 times at Lourdes in 1858, whose body remains incorrupt to this day."
        url="https://guidecatholic.com/blog/saint-bernadette-soubirous/"
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
              <span className="text-text">Saint Bernadette Soubirous</span>
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
                Saint Bernadette Soubirous: The Visionary of Lourdes
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                She was a poor, sickly, uneducated fourteen-year-old girl from one of the most destitute families in a small French town. Yet in 1858, the Virgin Mary appeared to her eighteen times in a rocky grotto by a river — and the world has never been the same. This is the story of Saint Bernadette Soubirous.
              </p>
            </header>
            <div className="aspect-video bg-sky-50 rounded-2xl flex items-center justify-center mb-10">
              <Sparkles className="w-24 h-24 text-sky-500" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-bernadette-soubirous">
                Saint Bernadette Soubirous (1844–1879) is one of the most beloved saints in the Catholic Church — not because of great intellectual achievements or heroic deeds, but because of her extraordinary simplicity, her fidelity to what she had seen, and her willingness to suffer in silence. She was chosen by God not despite her poverty and weakness, but because of it. Her life is a living illustration of the Magnificat: God has lifted up the lowly.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Life of Poverty in Lourdes</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-bernadette-soubirous">
                Marie-Bernarde Soubirous was born on January 7, 1844, in Lourdes, a small market town at the foot of the Pyrenees in southwestern France. She was the eldest of nine children (six of whom survived infancy) born to François Soubirous, a miller, and Louise Casterot. The family had once been reasonably comfortable, but a series of misfortunes — illness, debt, and the decline of the local milling trade — had reduced them to desperate poverty.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-bernadette-soubirous">
                By 1858, the Soubirous family was living in a single room in a former jail called the cachot — a dark, damp, airless cell that had been condemned as unfit for prisoners. François could find only occasional work; the family sometimes went without food. Bernadette, the eldest, was small for her age, chronically ill with asthma, and had never learned to read or write. She had not yet made her First Communion because she did not know her catechism well enough.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-bernadette-soubirous">
                She was, by every worldly measure, the least likely person to be chosen as a messenger of heaven. That, of course, is precisely the point.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The First Apparition: February 11, 1858</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-bernadette-soubirous">
                On the morning of February 11, 1858, Bernadette went with her sister Toinette and a friend to gather firewood near the Gave de Pau river. They came to a rocky grotto called Massabielle — a wild, damp place used as a shelter for pigs. As Bernadette was removing her stockings to cross a small stream, she heard a sound like a rushing wind. She looked up and saw, in a niche in the rock, a beautiful young woman dressed in white with a blue sash, a white veil, and a yellow rose on each foot. She was holding a rosary.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-bernadette-soubirous">
                Bernadette was frightened. She reached for her rosary and tried to make the Sign of the Cross — but her hand would not move until the Lady made the Sign of the Cross first. Then Bernadette knelt and prayed the rosary while the Lady passed the beads through her fingers without moving her lips. When the rosary was finished, the Lady disappeared.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-bernadette-soubirous">
                Bernadette told her sister what she had seen. Toinette told their mother, who forbade Bernadette to return to the grotto. But Bernadette could not stay away. She returned on February 14, and again on February 18 — when the Lady spoke to her for the first time, asking her to come to the grotto for fifteen days and promising to make her happy "not in this world, but in the next."
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Eighteen Apparitions</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-bernadette-soubirous">
                Between February 11 and July 16, 1858, Bernadette saw the Lady eighteen times. The apparitions drew enormous crowds — thousands of people came to watch, though only Bernadette could see and hear the Lady. During the apparitions, Bernadette was observed to be in a state of ecstasy: her face was transformed, she was insensible to pain (a doctor held a candle flame under her hand during one apparition without her noticing), and she moved with a grace and dignity that seemed entirely unlike her ordinary self.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-bernadette-soubirous">
                The Lady gave Bernadette several messages: she asked for prayer and penance for sinners, she asked that a chapel be built at the grotto, and she asked that processions come to the site. On February 25, she told Bernadette to "go drink at the spring and wash yourself there." There was no spring visible — but Bernadette scratched at the ground, and water began to seep up. Within days, the spring was flowing freely. It has never stopped. Today it produces approximately 32,000 gallons of water per day, and millions of pilgrims have drunk from it or bathed in it, many reporting miraculous healings.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-bernadette-soubirous">
                The most theologically significant moment came on March 25 — the feast of the Annunciation — when Bernadette asked the Lady her name. The Lady smiled, looked up to heaven, and replied: "I am the Immaculate Conception." Bernadette did not understand the words — she had to repeat them over and over to herself so she would not forget them on the way to tell her confessor. But the words were electrifying: just four years earlier, in 1854, Pope Pius IX had defined the Immaculate Conception as a dogma of the Catholic faith. The Lady was confirming the Church's teaching by identifying herself with it.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Interrogations and Persecution</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-bernadette-soubirous">
                From the beginning, Bernadette faced intense scrutiny and pressure. The local police commissioner interrogated her repeatedly, trying to catch her in a contradiction or force her to recant. The imperial prosecutor threatened her father with arrest. The prefect of the department ordered the grotto closed and the spring covered. Local authorities were embarrassed by the crowds and suspicious of what they saw as superstition.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-bernadette-soubirous">
                Bernadette faced all of this with remarkable calm and consistency. She never changed her story, never embellished it, and never claimed more than she had actually seen and heard. When asked to describe the Lady, she gave the same description every time. When pressed about miracles, she was careful to say only what she knew: she had seen a beautiful lady, the lady had told her certain things, and she had done what the lady asked. What happened after that was God's business, not hers.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-bernadette-soubirous">
                The Church itself was initially cautious. The local bishop, Bertrand-Sévère Laurence, appointed a commission to investigate the apparitions. After four years of careful study, on January 18, 1862, he issued a pastoral letter declaring that "the Immaculate Mary, Mother of God, really appeared to Bernadette Soubirous" and authorizing the cult of Our Lady of Lourdes.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Life After the Apparitions</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-bernadette-soubirous">
                After the apparitions ended, Bernadette's life became increasingly difficult. She was a celebrity she never wanted to be — constantly sought out by pilgrims, journalists, and the curious, all wanting to see the girl who had seen the Virgin. She found the attention exhausting and humiliating. She once said: "The Virgin used me as a broom to sweep the floor. When the work is done, the broom is put behind the door."
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-bernadette-soubirous">
                In 1866, at age twenty-two, Bernadette entered the convent of the Sisters of Notre Dame of Nevers, in Nevers — far from Lourdes. She would never return to the grotto. She spent the rest of her life there, working as a nurse and sacristan, suffering from severe asthma and tuberculosis of the bone, and living in obscurity. She was not treated with special deference by her superiors — in fact, she was sometimes treated harshly, as a test of her humility. She accepted it all without complaint.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-bernadette-soubirous">
                She died on April 16, 1879, at the age of thirty-five, after months of intense suffering. Her last words were: "Holy Mary, Mother of God, pray for me, a poor sinner." She was buried in the chapel of Saint Gildard at Nevers.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in Marian devotion and the spiritual life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Incorrupt Body</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-bernadette-soubirous">
                One of the most remarkable facts about Bernadette is the state of her body after death. When her body was exhumed for the first time in 1909 — thirty years after her death — it was found to be perfectly preserved: no decomposition, no odor, the flesh still supple. The same was found at the second exhumation in 1919 and the third in 1925. Today, Bernadette's body lies in a glass reliquary in the chapel of Saint Gildard in Nevers, where it can be seen by pilgrims. Her face and hands are covered with a light wax mask (applied because the skin had darkened slightly over the decades), but the body itself remains incorrupt — a sign that the Church has always associated with holiness.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Canonization and Legacy</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-bernadette-soubirous">
                Bernadette was beatified by Pope Pius XI on June 14, 1925, and canonized by the same pope on December 8, 1933 — the feast of the Immaculate Conception. Her feast day is April 16, the anniversary of her death.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-bernadette-soubirous">
                Lourdes has become one of the most visited pilgrimage sites in the world, receiving between four and six million pilgrims each year. The Lourdes Medical Bureau, established in 1882, has investigated thousands of claimed miraculous healings at the shrine; to date, seventy have been officially recognized as miraculous by the Church after rigorous medical and theological investigation. The spring that Bernadette uncovered continues to flow, and the grotto where she saw the Lady remains a place of extraordinary grace.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-bernadette-soubirous">
                Bernadette's legacy is not primarily about miracles or apparitions — it is about simplicity, fidelity, and suffering accepted in love. She saw the most beautiful thing a human being can see, and she spent the rest of her life in poverty, illness, and obscurity, asking for nothing except to be forgotten. She is a model for all who suffer, all who feel overlooked, and all who wonder whether God could possibly choose someone as small and weak as themselves.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Words of Saint Bernadette</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  "The more I am crucified, the more I rejoice." — Saint Bernadette Soubirous
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "I am the Immaculate Conception."
                </p>
                <p className="text-text-muted text-center mt-2">— Our Lady to Saint Bernadette, March 25, 1858</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "Who was Saint Bernadette Soubirous?", answer: "Saint Bernadette Soubirous (1844–1879) was a French peasant girl from Lourdes who, at age fourteen, received eighteen apparitions of the Virgin Mary at the grotto of Massabielle between February and July 1858. She later entered religious life with the Sisters of Notre Dame of Nevers, where she died at age thirty-five. She was canonized in 1933 and her feast day is April 16." },
              { question: "How many times did Our Lady appear to Bernadette?", answer: "Our Lady appeared to Bernadette eighteen times, from February 11 to July 16, 1858. The apparitions took place at the grotto of Massabielle near the Gave de Pau river in Lourdes, France. During the apparitions, Bernadette received messages about prayer, penance, and the building of a chapel, and was directed to uncover a spring that has flowed ever since." },
              { question: "What did Our Lady say to Bernadette at Lourdes?", answer: "Our Lady gave Bernadette several messages: she asked for prayer and penance for sinners, requested that a chapel be built at the grotto, and asked for processions to the site. Most significantly, on March 25, 1858 — the feast of the Annunciation — she revealed her identity to Bernadette with the words: 'I am the Immaculate Conception,' confirming the dogma defined by Pope Pius IX just four years earlier." },
              { question: "Is Bernadette's body really incorrupt?", answer: "Yes. When Bernadette's body was exhumed in 1909, 1919, and 1925, it was found to be remarkably well preserved — no decomposition and no odor. Her body currently lies in a glass reliquary in the chapel of Saint Gildard in Nevers, France, where it can be venerated by pilgrims. The face and hands are covered with a light wax mask, but the body itself remains incorrupt." },
              { question: "When is the feast day of Saint Bernadette?", answer: "The feast day of Saint Bernadette Soubirous is April 16, the anniversary of her death in 1879. She was canonized by Pope Pius XI on December 8, 1933 — the feast of the Immaculate Conception. The feast of Our Lady of Lourdes is celebrated on February 11, the anniversary of the first apparition." },
            ]} />

            <RelatedArticles currentSlug="saint-bernadette-soubirous" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in Marian devotion and the spiritual life.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
