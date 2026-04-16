import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Church, Sparkles, Heart, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function EucharistRealPresence() {
    return (
        <>
            <Helmet>
                <title>The Eucharist: Real Presence, Transubstantiation & Science | Guide Catholic</title>
                <meta name="description" content="Is Jesus really in the bread? Explore the dogma of Transubstantiation, the John 6 discourse, and scientific findings of Eucharistic miracles." />
                <meta name="keywords" content="real presence of jesus in eucharist, what is transubstantiation, body and blood of christ, host is jesus, blessed sacrament, eucharistic miracles science, Lanciano miracle" />
                <link rel="canonical" href="https://guidecatholic.com/blog/eucharist-real-presence/" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <ArticleSchema
                title="The Eucharist: Real Presence, Transubstantiation & Scientific Evidence"
                description="Is Jesus really in the bread? Explore the dogma of Transubstantiation, the John 6 discourse, and scientific findings of Eucharistic miracles."
                url="https://guidecatholic.com/blog/eucharist-real-presence/"
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
                            <span className="text-text">The Eucharist</span>
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
                                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Sacraments</span>
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 16, 2026</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />28 min read</span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                The Eucharist: A Masterclass on the Real Presence and Transubstantiation
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                "This is my body." These four words are the architectural foundation of the Catholic faith. The Eucharist is not a symbol, a metaphor, or a memory—it is the living, substantial, and physical presence of God among us. This is the manual for understanding the Church's "Source and Summit."
                            </p>
                        </header>

                        <div className="aspect-video bg-violet-50 rounded-2xl flex items-center justify-center mb-10 relative overflow-hidden">
                            <Sparkles className="w-24 h-24 text-violet-400/30 absolute top-4 right-4" />
                            <Church className="w-32 h-32 text-violet-400 relative z-10" strokeWidth={1} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                The Catholic Church holds a conviction that is "foolishness to the Gentiles and a stumbling block to Jews": that a piece of unleavened bread and a cup of wine truly become the <strong>Body, Blood, Soul, and Divinity</strong> of Jesus Christ. This isn't just a pious belief; it is a dogmatic certainty defined by the <strong>Council of Trent (1551)</strong>.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                1. Transubstantiation: Substance vs. Accidents
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                To explain the miracle of the altar, the Church uses the philosophical framework of St. Thomas Aquinas. Every object has two parts:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-3 mb-8">
                                <li><strong>Accidents:</strong> The outward properties—color, taste, smell, texture, weight. (These remain "bread and wine" to our senses).</li>
                                <li><strong>Substance:</strong> The deep reality of what a thing *is*. (This is what changes entirely).</li>
                            </ul>
                            <p className="text-text leading-relaxed mb-6">
                                In <strong>Transubstantiation</strong>, the *substance* of bread is annihilated and replaced by the *substance* of Christ. Because the accidents remain, it does not taste like flesh, allowing us to receive our Lord in a way that is "unbloody" and "sacramental" rather than cannibalistic.
                            </p>

                            <div className="bg-violet-50 border border-violet-200 rounded-xl p-8 mb-10">
                                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                                    <Activity className="w-6 h-6 text-violet-600" />
                                    When Science Meets the Altar: Lanciano and Beyond
                                </h3>
                                <p className="text-text mb-4 text-sm">
                                    Throughout history, God has allowed the "accidents" to change into "substance" to confirm our faith. These are called <strong>Eucharistic Miracles</strong>.
                                </p>
                                <ul className="list-disc list-inside text-text space-y-3 text-sm">
                                    <li><strong>The Lanciano Miracle (8th Century):</strong> Analyzed in 1970 by Dr. Odoardo Linoli (WHO consultant). The results: The Host is 100% human <strong>cardiac muscle tissue</strong> (the myocardium). The Blood is type <strong>AB</strong>. </li>
                                    <li><strong>Sokółka, Poland (2008):</strong> Pathologists from the Medical University of Białystok found that the "clot" on the host was human heart tissue *intertwined* with the bread fibers—a biological impossibility for a hoax.</li>
                                    <li><strong>The common denominator:</strong> In all analyzed miracles (Lanciano, Buenos Aires, Tixtla), the tissue always shows signs of <strong>"stress" or "agony"</strong>—as if the heart were currently undergoing trauma.</li>
                                </ul>
                            </div>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                2. The Bread of Life Discourse (John 6)
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Critics claim Jesus was speaking metaphorically. However, the Greek text of John 6 argues otherwise. When the Jews questioned Him, Jesus switched from the common word for "eating" (<em>phagein</em>) to <strong>trogein</strong>, which literally means "to gnaw" or "to chew." 
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                He was making His point as physical as possible. When 70 of His disciples left because "this is a hard saying," Jesus didn't call them back to explain it was "just a symbol." He let them go. He would rather lose His followers than compromise the reality of the Bread of Life.
                            </p>

                            <QuizCTA
                                title="How is your interior silence?"
                                description="The Eucharist invites us to a mystery beyond words. Take our quiz to see if you are truly prepared to receive the King of Kings."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                                <Heart className="w-6 h-6 text-accent" />
                                Adoration: The "Tabor" of the Parish
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Because the Presence is substantial, it does not end when the Mass ends. It continues as long as the "accidents" of bread remain. This is why we have <strong>Eucharistic Adoration</strong>. The Monstrance (from the Latin <em>monstrare</em> - to show) allows us to gaze at the same Jesus who walked the shores of Galilee. It is the most powerful "radiography" for the soul.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                                <p className="text-text italic text-center leading-relaxed font-semibold">
                                    "When you look at the Crucifix, you see how much Jesus loved you then. When you look at the Sacred Host, you see how much Jesus loves you now." — St. Teresa of Calcutta
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="eucharist-real-presence" />

                        <BlogFAQ faqs={[
                            {
                                question: "Is it cannibalism to receive Communion?",
                                answer: "No. Cannibalism involves eating a dead body in its natural form. In the Eucharist, we receive the *living* and *risen* Christ under a 'sacramental mode of existence.' We are not cutting His flesh; we are receiving His entire person through a miracle of substance change."
                            },
                            {
                                question: "What if a piece of the host falls on the floor?",
                                answer: "Because every crumb is the entire Jesus Christ, Catholics treat the Eucharist with extreme reverence. If a host falls, it must be consumed or dissolved in water and poured into the sacrarium (a special sink that goes directly to the earth)."
                            },
                            {
                                question: "Why can't non-Catholics receive Communion?",
                                answer: "Receiving Communion is the ultimate sign of 'Communion'—meaning you share the same faith, the same laws, and the same Pope. To receive without believing in the Real Presence would be a 'lie' told with the body (cf. 1 Cor 11:27-29)."
                            }
                        ]} />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Enter the Mystery
                            </h3>
                            <p className="text-text-muted mb-6">
                                Your relationship with the Eucharist is the thermometer of your faith. Take our quiz to deepen your sacramental journey.
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
