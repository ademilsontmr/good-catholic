import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, BookOpen, ShieldCheck, Sparkles, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function MeaningOfMass() {
    return (
        <>
            <Helmet>
                <title>The Meaning of Holy Mass: The Expert Guide to the Liturgy | Guide Catholic</title>
                <meta name="description" content="Discover the deep theological meaning of the Holy Mass. Learn about Transubstantiation, the Unbloody Sacrifice, and why the Mass is Heaven on Earth." />
                <meta name="keywords" content="meaning of catholic mass, transubstantiation explained, liturgy of the word vs eucharist, in persona christi definition, why go to mass" />
                <link rel="canonical" href="https://guidecatholic.com/blog/meaning-mass/" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <ArticleSchema
                title="The Meaning of Holy Mass: Understanding Each Part of the Liturgy"
                description="Learn the profound meaning of each moment of Holy Mass. A complete guide to the liturgy to participate with more awareness and devotion."
                url="https://guidecatholic.com/blog/meaning-mass/"
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
                            <span className="text-text">The Meaning of Holy Mass</span>
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
                                    Liturgy & Sacraments
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    April 16, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    30 min read
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                The Holy Mass: Where Heaven and Earth Kiss
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                "If we knew the value of the Mass, we would die of joy." These words of St. John Vianney capture the reality of the Liturgy. The Mass is not a "show" or a "community meeting"—it is the <strong>eternal sacrifice of Calvary</strong> made present in our time.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
                           <Sparkles className="w-24 h-24 text-blue-400/20 absolute -bottom-4 -right-4" />
                           <BookOpen className="w-32 h-32 text-blue-400 relative z-10" strokeWidth={1} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                The Mass is the "Source and Summit" of the Christian life. To understand the Mass is to understand the very DNA of the Catholic faith. It is divided into two main parts: the <strong>Liturgy of the Word</strong> and the <strong>Liturgy of the Eucharist</strong>. Together, they form "one single act of worship."
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                1. The Unbloody Sacrifice
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Critics often ask: "Are you re-sacrificing Jesus?" The answer is an emphatic NO. We are <strong>participating</strong> in the one, once-for-all sacrifice of 2,000 years ago. God is outside of time. In the Mass, the veil between our time and eternity is torn, and we are standing at the foot of the Cross on Calvary.
                            </p>

                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-10">
                                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                                    <ShieldCheck className="w-6 h-6 text-blue-600" />
                                    Transubstantiation: The Core Mystery
                                </h3>
                                <p className="text-sm text-text-muted mb-4 text-center">What happens at the Consecration?</p>
                                <p className="text-sm leading-relaxed">
                                    Using Aristotelian terms, the Church explains that while the <strong>accidents</strong> (taste, look, feel) of bread and wine remain, the <strong>substance</strong> (the what-ness) is completely changed into the Body, Blood, Soul, and Divinity of Jesus Christ. It is a biological and physical reality hidden under sacramental signs.
                                </p>
                            </div>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                2. The Four Parts of the Single Act
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-4 mb-8">
                                <li><strong>Introductory Rites:</strong> We acknowledge our sins (Kyrie) and praise God (Gloria), preparing our soil.</li>
                                <li><strong>Liturgy of the Word:</strong> God speaks to us through the breath of Scripture. The Gospel is the climax of this part.</li>
                                <li><strong>Liturgy of the Eucharist:</strong> The Offertory, the Consecration, and the Communion. We offer ourselves <em>with</em> Christ to the Father.</li>
                                <li><strong>Concluding Rites:</strong> We are "sent forth" (Ite, Missa est) to live what we have received.</li>
                            </ul>

                            <QuizCTA
                                title="Are you just a spectator or a participant?"
                                description="Real 'active participation' happens in the heart. Take our quiz to learn how to prepare your interior life for the next time the bells ring."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                               <Flame className="w-6 h-6 text-accent" />
                               In Persona Christi Capitis
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Why do we need a priest? Because at the altar, the man "disappears" and Christ the Head takes over. This is why the priest says "This is MY body," not "This is Jesus' body." He is acting in the very person of the High Priest.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                                <p className="text-text italic text-center leading-relaxed font-semibold">
                                    "The Mass is the most perfect form of prayer." — Pope Paul VI
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="meaning-mass" />

                        <BlogFAQ faqs={[
                          {
                            question: "Why do we kneel during the Mass?",
                            answer: "Kneeling is a sign of adoration and humility. We kneel when we are in the presence of the King. It is the appropriate posture for the moments when God becomes physically present on the altar."
                          },
                          {
                            question: "Is it a sin to miss Sunday Mass?",
                            answer: "Yes. The Third Commandment (Keep holy the Sabbath) is binding. Deliberately missing Mass on a Sunday or Holy Day of Obligation without a grave reason (like illness or impossibility) is a mortal sin."
                          },
                          {
                            question: "What is 'Active Participation'?",
                            answer: "It is not just singing or reading; it is primarily the internal union of your soul with the sacrifice of Christ. It means offering your life's works and sufferings on the altar along with the bread and wine."
                          }
                        ]} />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Experience the Wedding Feast
                            </h3>
                            <p className="text-text-muted mb-6">
                                Every Mass is a preview of Heaven. Take our quiz to receive a custom guide to the hidden meanings of the Liturgy.
                            </p>
                            <Link to="/quiz-intro">
                                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                                    Take the Faith Quiz
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
