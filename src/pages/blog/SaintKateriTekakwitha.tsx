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

export default function SaintKateriTekakwitha() {
  return (
    <>
      <Helmet>
        <title>Saint Kateri Tekakwitha: The Lily of the Mohawks & First Native American Saint | Guide Catholic</title>
        <meta name="description" content="Discover Saint Kateri Tekakwitha — the first Native American to be canonized. Her life, her faith, her miracles, and why she is beloved by Catholics across the United States." />
        <meta name="keywords" content="saint kateri tekakwitha, lily of the mohawks, first native american saint, kateri tekakwitha canonized, native american catholic saint, kateri feast day july 14" />
        <link rel="canonical" href="https://guidecatholic.com/blog/saint-kateri-tekakwitha/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Saint Kateri Tekakwitha: The Lily of the Mohawks & First Native American Saint"
        description="Discover Saint Kateri Tekakwitha — the first Native American to be canonized. Her life, her faith, her miracles, and why she is beloved by Catholics across the United States."
        url="https://guidecatholic.com/blog/saint-kateri-tekakwitha/"
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
              <span className="text-text">Saint Kateri Tekakwitha</span>
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
                Saint Kateri Tekakwitha: The Lily of the Mohawks & First Native American Saint
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                In 2012, Pope Benedict XVI canonized Kateri Tekakwitha — a 17th-century Mohawk woman who became the first Native American to be declared a saint. Her story is one of extraordinary faith, heroic suffering, and the universality of the Catholic Church.
              </p>
            </header>

            <div className="aspect-video bg-emerald-100 rounded-2xl flex items-center justify-center mb-10">
              <Sparkles className="w-24 h-24 text-emerald-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                Kateri Tekakwitha was born in 1656 in Ossernenon (present-day Auriesville, New York) — the same village where the Jesuit martyrs Isaac Jogues and his companions had been killed just a decade earlier. She died at the age of 24, having lived a life of extraordinary holiness in the most difficult of circumstances. Three centuries after her death, the Catholic Church declared her a saint — the first Native American to receive that honor.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                Her story is not just a story of personal holiness. It is a story of the encounter between the Catholic faith and the indigenous peoples of North America — an encounter that was often marked by violence and injustice, but that also produced, in Kateri, a flower of extraordinary beauty.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Early Life: Suffering and Survival</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                Kateri was born to a Mohawk father and a Christian Algonquin mother who had been captured by the Mohawks. Her mother had been baptized and raised as a Christian before her capture, and she passed on to her daughter a love of prayer and a sense of the sacred — even though Kateri herself was not baptized as a child.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                When Kateri was about four years old, a smallpox epidemic swept through her village. Both her parents and her infant brother died. Kateri survived, but the disease left her with severely weakened eyesight and a scarred face. She was taken in by her uncle, who became the chief of the village.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                Growing up in her uncle's household, Kateri was expected to work hard and to marry. But she showed no interest in marriage and spent much of her time in prayer and solitude. She was drawn to the Christian faith she had heard about from her mother and from the Jesuit missionaries who occasionally visited the village.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Encounter with the Jesuits</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                In 1667, three Jesuit missionaries — including Father Jacques de Lamberville — came to Kateri's village. They stayed in her uncle's longhouse, and Kateri had the opportunity to speak with them at length. She was deeply moved by their teaching about Jesus Christ and the Catholic faith.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                For several years, Kateri continued to learn about the faith while facing significant opposition from her family and community. Her uncle was hostile to Christianity, and Kateri was mocked and mistreated for her interest in the new religion. She was denied food on Sundays when she refused to work, and she was accused of immoral behavior — accusations that were entirely false.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                Despite these obstacles, Kateri's faith only grew stronger. On Easter Sunday, April 18, 1676 — when she was about 20 years old — she was baptized by Father de Lamberville and given the Christian name Kateri (Catherine), after St. Catherine of Siena.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Persecution and Flight</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                After her baptism, Kateri's situation became increasingly difficult. Her family and neighbors intensified their persecution. She was threatened, harassed, and accused of witchcraft. A man was sent to her with a tomahawk, threatening to kill her if she did not abandon her faith. She refused.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                In the autumn of 1677, Kateri fled her village with the help of two Christian Mohawks and a French trader. She made the dangerous journey of nearly 200 miles to the mission of Saint Francis Xavier at Kahnawake (near present-day Montreal, Canada) — a Christian village established by the Jesuits for Native American converts.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                At Kahnawake, Kateri finally found a community where she could live her faith freely. She threw herself into the life of the mission with extraordinary fervor — attending Mass daily, spending long hours in prayer before the Blessed Sacrament, caring for the sick and elderly, and practicing severe penances.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your faith and devotion to the saints."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Life at Kahnawake: Holiness in Community</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                At Kahnawake, Kateri made her First Communion on Christmas Day, 1677. She was deeply moved by the Eucharist and received Communion as often as the Jesuits permitted — which, in the 17th century, was not as frequently as we might expect.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                Kateri formed a close friendship with a widow named Marie-Thérèse Tegaiaguenta, and together they dreamed of founding a community of Native American women dedicated to God. The Jesuits discouraged this plan, fearing it was premature, but Kateri's desire for consecrated life was genuine and deep.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                On the feast of the Annunciation, March 25, 1679, Kateri made a vow of perpetual virginity — an extraordinary act for a young Mohawk woman in a culture where marriage and children were the expected path for every woman. She was the first Native American woman known to have made such a vow.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                Kateri's penances were severe — perhaps too severe. She fasted rigorously, walked barefoot in the snow, and practiced other mortifications that weakened her already fragile health. The Jesuits tried to moderate her penances, but her desire to unite herself to the suffering of Christ was irresistible.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Death and the Miracle of the Transformed Face</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                Kateri's health declined rapidly in the winter of 1679-1680. She died on April 17, 1680 — Wednesday of Holy Week — at the age of 24. Her last words were: "Jesus, I love you."
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                What happened immediately after her death became one of the most remarkable testimonies to her holiness. Within minutes of her death, the smallpox scars that had disfigured her face since childhood disappeared completely. Those present — including the Jesuit missionaries — reported that her face became radiant and beautiful, as if transformed by the glory of God.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                Father Claude Chauchetière, one of the Jesuits who knew her well, wrote: "This face, so marked and so swarthy, suddenly changed about a quarter of an hour after her death, and became in a moment so beautiful and so white that I immediately noticed it... and I cried out at once, so great was my surprise."
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                News of this miracle spread quickly, and Kateri's tomb at Kahnawake became a place of pilgrimage almost immediately. Reports of healings and miracles multiplied. Her reputation for holiness spread throughout New France and eventually to Europe.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Beatification and Canonization</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                The formal process for Kateri's canonization was long. She was declared Venerable in 1943 by Pope Pius XII. Pope John Paul II beatified her on June 22, 1980 — the 300th anniversary of her death — in a ceremony attended by thousands of Native Americans from across North America.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                The miracle required for her canonization involved the healing of a young boy named Jake Finkbonner, a member of the Lummi Nation in Washington State. In 2006, Jake contracted a flesh-eating bacterial infection (necrotizing fasciitis) that was rapidly destroying his face. His family prayed to Blessed Kateri, and his recovery — which doctors described as medically inexplicable — was accepted by the Vatican as the miracle required for canonization.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                Pope Benedict XVI canonized Kateri Tekakwitha on October 21, 2012, in St. Peter's Square in Rome. She was canonized alongside five others, including Marianne Cope — another American saint. Thousands of Native Americans attended the ceremony, many in traditional dress.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Patronages and Feast Day</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                Saint Kateri Tekakwitha is the patron saint of:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Native Americans and indigenous peoples</li>
                <li>Ecology and the environment</li>
                <li>People in exile</li>
                <li>People ridiculed for their piety</li>
                <li>Canada (co-patron)</li>
              </ul>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                Her feast day is July 14 in the United States and Canada (April 17 in the universal Roman Calendar — the date of her death).
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Kateri Matters for American Catholics</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-kateri-tekakwitha">
                Saint Kateri Tekakwitha is significant for American Catholics for several reasons:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>She is the first Native American saint.</strong> Her canonization was a historic moment for the indigenous peoples of North America and for the Catholic Church in the United States.</li>
                <li><strong>She shows the universality of holiness.</strong> Kateri was not a European missionary or a member of a religious order. She was a young Mohawk woman who found Christ in the most difficult of circumstances and responded with extraordinary love. Her holiness transcends culture and ethnicity.</li>
                <li><strong>She is a model of perseverance.</strong> Kateri faced persecution, illness, and social isolation — and she never wavered in her faith. Her example is an inspiration for all Catholics who face opposition for their beliefs.</li>
                <li><strong>She connects the Catholic faith to the land.</strong> As a patron of ecology, Kateri reminds American Catholics that the land they inhabit has a sacred history — that the Gospel has been lived and died for on this soil for centuries.</li>
              </ul>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "Who will teach me what is most pleasing to God, that I may do it?"
                </p>
                <p className="text-text-muted text-center mt-2">— Saint Kateri Tekakwitha</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "Who was Saint Kateri Tekakwitha?", answer: "Saint Kateri Tekakwitha (1656-1680) was a Mohawk woman born in present-day New York who converted to Catholicism and became the first Native American to be canonized. She is known as the 'Lily of the Mohawks' for her extraordinary purity and holiness. She was canonized by Pope Benedict XVI on October 21, 2012." },
              { question: "When is the feast day of Saint Kateri Tekakwitha?", answer: "In the United States and Canada, the feast day of Saint Kateri Tekakwitha is July 14. In the universal Roman Calendar, it is April 17 — the date of her death in 1680." },
              { question: "What is Saint Kateri the patron saint of?", answer: "Saint Kateri Tekakwitha is the patron saint of Native Americans and indigenous peoples, ecology and the environment, people in exile, and people ridiculed for their piety. She is also a co-patron of Canada." },
              { question: "What miracle led to Saint Kateri's canonization?", answer: "The miracle accepted for Kateri's canonization involved the healing of Jake Finkbonner, a young member of the Lummi Nation in Washington State. In 2006, Jake contracted a flesh-eating bacterial infection that was rapidly destroying his face. His family prayed to Blessed Kateri, and his recovery — which doctors described as medically inexplicable — was accepted by the Vatican as the required miracle." },
              { question: "Where can I visit a shrine to Saint Kateri?", answer: "The National Kateri Shrine is located in Fonda, New York — near the site of her birthplace in Ossernenon (now Auriesville). The Shrine of Kateri Tekakwitha is also located in Kahnawake, Quebec, Canada, where she lived and died. Both are major pilgrimage sites for Catholics, especially Native American Catholics." },
            ]} />

            <RelatedArticles currentSlug="saint-kateri-tekakwitha" />

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
