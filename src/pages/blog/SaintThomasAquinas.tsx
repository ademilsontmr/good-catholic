import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function SaintThomasAquinas() {
  return (
    <>
      <Helmet>
        <title>Saint Thomas Aquinas: The Angelic Doctor, Summa Theologica & Legacy | Guide Catholic</title>
        <meta name="description" content="Discover Saint Thomas Aquinas — the Angelic Doctor, his life, the Summa Theologica, his five proofs for God's existence, and why he is the greatest theologian in Catholic history." />
        <meta name="keywords" content="saint thomas aquinas, angelic doctor, summa theologica, five proofs god existence, thomas aquinas philosophy, doctor of the church, feast day january 28" />
        <link rel="canonical" href="https://guidecatholic.com/blog/saint-thomas-aquinas/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Saint Thomas Aquinas: The Angelic Doctor, Summa Theologica & Legacy"
        description="Discover Saint Thomas Aquinas — the Angelic Doctor, his life, the Summa Theologica, his five proofs for God's existence, and why he is the greatest theologian in Catholic history."
        url="https://guidecatholic.com/blog/saint-thomas-aquinas/"
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
              <span className="text-text">Saint Thomas Aquinas</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />18 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Saint Thomas Aquinas: The Angelic Doctor, Summa Theologica & Legacy
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                He was called the "Dumb Ox" by his classmates — a slow, silent student who said little. His teacher, Albert the Great, replied: "You call him a dumb ox, but his bellowing in doctrine will one day resound throughout the world." He was right. Saint Thomas Aquinas is the greatest theologian and philosopher in Catholic history.
              </p>
            </header>
            <div className="aspect-video bg-indigo-50 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-indigo-600" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Saint Thomas Aquinas (1225–1274) is one of the most important intellectual figures in the history of Western civilization. His synthesis of Christian theology and Aristotelian philosophy — known as Thomism — became the official philosophical framework of the Catholic Church and shaped Western thought for centuries. His masterwork, the Summa Theologica, is one of the greatest intellectual achievements in human history: a systematic exposition of the whole of Christian theology, organized with breathtaking logical precision.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Early Life and the Battle Over His Vocation</h2>
              <p className="text-text leading-relaxed mb-6">
                Thomas was born around 1225 at Roccasecca, near Aquino, in the Kingdom of Sicily (present-day Italy). He was the youngest son of a noble family — his father was a count, and his family had connections to the Holy Roman Emperor and the King of France. From childhood, Thomas was destined for a distinguished ecclesiastical career: his family planned for him to become the abbot of the prestigious Benedictine monastery of Monte Cassino, which would have brought wealth and influence to the family.
              </p>
              <p className="text-text leading-relaxed mb-6">
                But Thomas had other ideas. At the University of Naples, he encountered the newly founded Dominican Order — the Order of Preachers, founded by St. Dominic — and was drawn to their combination of intellectual rigor, poverty, and preaching. In 1244, at about age 19, he joined the Dominicans.
              </p>
              <p className="text-text leading-relaxed mb-6">
                His family was furious. The Dominicans were mendicant friars — they owned nothing and begged for their food. This was not the career they had planned for their son. His brothers kidnapped him and held him prisoner in the family castle for over a year, trying to break his resolve. According to tradition, they even sent a prostitute to his room to tempt him; Thomas drove her away with a burning brand from the fireplace and then knelt in prayer, after which he reportedly received from angels a girdle of chastity that he wore for the rest of his life.
              </p>
              <p className="text-text leading-relaxed mb-6">
                His family eventually relented, and Thomas returned to the Dominicans. He was sent to study under Albert the Great — the greatest scholar of the age — first in Paris and then in Cologne. It was Albert who recognized Thomas's extraordinary gifts beneath his quiet exterior.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Summa Theologica</h2>
              <p className="text-text leading-relaxed mb-6">
                Thomas's greatest work, the Summa Theologica (or Summa Theologiae), was begun around 1265 and left unfinished at his death in 1274. It was intended as a textbook for theology students — a comprehensive, systematic treatment of the whole of Christian theology, organized in a question-and-answer format.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Summa is divided into three parts: the First Part (on God and creation), the Second Part (on human action, virtue, and the moral life), and the Third Part (on Christ and the sacraments). Each question is treated in a standard format: Thomas states the question, lists objections to his position, gives his answer, and then responds to each objection in turn. This method — the scholastic method — was designed to take opposing views seriously and respond to them with precision.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Summa contains 512 questions, 2,669 articles, and approximately 1.5 million words. It covers everything from the existence and nature of God to the morality of lying, from the theology of the Eucharist to the nature of angels. It is, quite simply, the most comprehensive theological work ever written.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Five Ways: Proofs for God's Existence</h2>
              <p className="text-text leading-relaxed mb-6">
                One of the most famous sections of the Summa is Thomas's "Five Ways" — five arguments for the existence of God, drawn from observation of the natural world. These are not proofs in the mathematical sense, but philosophical arguments that Thomas believed any reasonable person could follow:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>The Argument from Motion.</strong> Everything that moves is moved by something else. There cannot be an infinite chain of movers. Therefore, there must be a First Mover — unmoved — which everyone calls God.</li>
                <li><strong>The Argument from Efficient Causation.</strong> Everything has a cause. There cannot be an infinite chain of causes. Therefore, there must be a First Cause — uncaused — which everyone calls God.</li>
                <li><strong>The Argument from Contingency.</strong> Everything that exists could possibly not exist. If everything could possibly not exist, then at some point nothing would have existed. But something exists now. Therefore, there must be a necessary being — one that cannot not exist — which everyone calls God.</li>
                <li><strong>The Argument from Gradation.</strong> We observe degrees of goodness, truth, and nobility in things. These degrees imply a maximum — a being that is most good, most true, most noble. This maximum is God.</li>
                <li><strong>The Argument from Design (Teleology).</strong> Natural things that lack intelligence act toward ends — they behave in regular, purposeful ways. This purposefulness implies a directing intelligence. This intelligence is God.</li>
              </ul>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your knowledge of Catholic theology and the great saints."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Faith and Reason: Thomas's Great Synthesis</h2>
              <p className="text-text leading-relaxed mb-6">
                Thomas's greatest contribution to Catholic thought was his synthesis of faith and reason — his demonstration that Christian theology and Greek philosophy (especially Aristotle) are not enemies but allies. Where earlier thinkers had been suspicious of pagan philosophy, Thomas embraced it: truth is truth, wherever it is found, and all truth ultimately comes from God.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Thomas distinguished between truths that can be known by reason alone (such as God's existence and some of His attributes) and truths that can only be known by faith (such as the Trinity and the Incarnation). These two realms do not contradict each other — they complement each other. Reason prepares the way for faith; faith elevates and perfects reason.
              </p>
              <p className="text-text leading-relaxed mb-6">
                This synthesis — Thomism — became the official philosophy of the Catholic Church. Pope Leo XIII, in his 1879 encyclical Aeterni Patris, declared Thomas's philosophy the model for Catholic intellectual life. The Second Vatican Council called Thomas "the master" of Catholic theology. Pope John Paul II, in his encyclical Fides et Ratio (1998), cited Thomas as the supreme example of the harmony between faith and reason.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Mystical Experience and "All Straw"</h2>
              <p className="text-text leading-relaxed mb-6">
                On December 6, 1273 — the feast of St. Nicholas — Thomas was celebrating Mass when he had a profound mystical experience. After that day, he never wrote or dictated another word. When his secretary Reginald urged him to continue his work, Thomas replied: "Reginald, I cannot, because all that I have written seems like straw to me compared to what I have seen and what has been revealed to me."
              </p>
              <p className="text-text leading-relaxed mb-6">
                Three months later, on March 7, 1274, Thomas died at the Cistercian monastery of Fossanova, on his way to the Second Council of Lyon. He was about 49 years old. His last words, receiving Viaticum (Communion for the dying), were: "I receive Thee, the price of my soul's redemption, I receive Thee, the Viaticum of my pilgrimage, for love of Whom I have studied, watched, and labored. I have preached Thee, I have taught Thee. Never have I said anything against Thee."
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Canonization and Legacy</h2>
              <p className="text-text leading-relaxed mb-6">
                Thomas was canonized by Pope John XXII in 1323 — less than 50 years after his death. He was declared a Doctor of the Church in 1567 by Pope Pius V, who gave him the title "Angelic Doctor." His feast day is January 28.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Thomas is the patron saint of students, scholars, universities, and all who seek wisdom. His prayer before study — "Creator of all things, true source of light and wisdom, origin of all being, graciously let a ray of your light penetrate the darkness of my understanding" — is prayed by Catholic students around the world.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Prayer of Saint Thomas Aquinas Before Study</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Creator of all things, true source of light and wisdom, origin of all being, graciously let a ray of your light penetrate the darkness of my understanding. Take from me the double darkness in which I have been born, an obscurity of sin and ignorance. Give me a keen understanding, a retentive memory, and the ability to grasp things correctly and fundamentally. Grant me the talent of being exact in my explanations and the ability to express myself with thoroughness and charm. Point out the beginning, direct the progress, and help in the completion. I ask this through Jesus Christ our Lord. Amen.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "The things that we love tell us what we are."
                </p>
                <p className="text-text-muted text-center mt-2">— Saint Thomas Aquinas</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "Who was Saint Thomas Aquinas?", answer: "Saint Thomas Aquinas (1225–1274) was an Italian Dominican friar, philosopher, and theologian who became the greatest intellectual figure in Catholic history. Known as the 'Angelic Doctor,' he synthesized Christian theology with Aristotelian philosophy in his masterwork, the Summa Theologica. He is a Doctor of the Church and his feast day is January 28." },
              { question: "What is the Summa Theologica?", answer: "The Summa Theologica (or Summa Theologiae) is Thomas Aquinas's masterwork — a comprehensive, systematic treatment of the whole of Christian theology, begun around 1265 and left unfinished at his death. It contains 512 questions, 2,669 articles, and approximately 1.5 million words, covering everything from God's existence to the morality of human acts to the theology of the sacraments." },
              { question: "What are the Five Ways of Thomas Aquinas?", answer: "The Five Ways are Thomas Aquinas's five philosophical arguments for the existence of God: the Argument from Motion, the Argument from Efficient Causation, the Argument from Contingency, the Argument from Gradation, and the Argument from Design (Teleology). Each begins from an observable feature of the natural world and argues to the existence of God as the ultimate explanation." },
              { question: "What is Thomism?", answer: "Thomism is the philosophical and theological system developed by Thomas Aquinas, characterized by the synthesis of Christian faith and Aristotelian philosophy. It holds that faith and reason are complementary, not contradictory — that truths known by reason and truths known by faith both come from God and cannot ultimately contradict each other. Thomism is the official philosophy of the Catholic Church." },
              { question: "When is the feast day of Saint Thomas Aquinas?", answer: "The feast day of Saint Thomas Aquinas is January 28. He is the patron saint of students, scholars, universities, and all who seek wisdom." },
            ]} />

            <RelatedArticles currentSlug="saint-thomas-aquinas" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your knowledge of Catholic theology and tradition.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
