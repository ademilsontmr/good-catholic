import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function EucharistRealPresence() {
    return (
        <>
            <Helmet>
                <title>The Eucharist: Real Presence of Jesus in Bread and Wine | Good Catholic</title>
                <meta name="description" content="Understand the dogma of Transubstantiation and the importance of the Eucharist as source and summit of Christian life. Discover why Jesus is truly present in the Holy Host." />
                <meta name="keywords" content="real presence of jesus in eucharist, what is transubstantiation, body and blood of christ, host is jesus, blessed sacrament, catholic communion" />
                <link rel="canonical" href="https://goodcatholic.com/blog/eucharist-real-presence" />
            </Helmet>

            <div className="min-h-screen bg-background">
                <header className="bg-primary text-button-text py-4">
                    <div className="container mx-auto px-4 flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                                <Cross className="w-5 h-5 text-button-text" />
                            </div>
                            <span className="font-display text-xl font-bold">Good Catholic</span>
                        </Link>
                        <Link to="/quiz"><Button variant="secondary" size="sm">Take the Quiz</Button></Link>
                    </div>
                </header>

                <div className="bg-background-muted/50 py-3">
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
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />December 29, 2024</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />10 min read</span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                The Eucharist: Real Presence of Jesus in Bread and Wine
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                "This is my body." The Eucharist is not a symbol, but the living and substantial presence of Jesus Christ. Understand the mystery that has sustained the Church for two millennia.
                            </p>
                        </header>

                        <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
                            <Church className="w-24 h-24 text-violet-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                The Eucharist is the beating heart of the Catholic Church, the "sun" around which all Christian life revolves. While in other sacraments we receive God's grace, in the Eucharist we receive the Author of grace Himself – Jesus Christ in Person, with His Body, Blood, Soul, and Divinity. It is the mystery of faith par excellence, so sublime that angels prostrate themselves in adoration before the altar.
                            </p>

                            <QuizCTA
                                title="Do you believe in the Real Presence?"
                                description="The Eucharist is the heart of our faith. Take our quiz and discover how to deepen your adoration and love for Jesus in the Sacrament, living the mystery of Transubstantiation with more faith."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What is Transubstantiation?</h2>
                            <p className="text-text leading-relaxed mb-6">
                                This theological term, defined by the Council of Trent, explains the miracle that occurs at every Mass: the change of the entire substance of bread into the substance of Christ's Body and the entire substance of wine into the substance of His Blood. The "appearances" or "accidents" (taste, color, smell, form) remain the same, but the deep reality – the substance – has changed completely.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Effects of Holy Communion</h2>
                            <ul className="list-disc list-inside text-text space-y-3 mb-6">
                                <li><strong>Intimate union with Christ:</strong> Communion incorporates us into Jesus in a real way.</li>
                                <li><strong>Increase of Sanctifying Grace:</strong> The Eucharist strengthens and increases divine life in us.</li>
                                <li><strong>Remission of Venial Sins:</strong> The fire of Christ's love purifies our light faults.</li>
                                <li><strong>Preservation against Mortal Sins:</strong> Frequent communion gives us strength to resist grave temptations.</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"The Eucharist is the shortest path to Heaven."</p>
                                <p className="text-text-muted text-center mt-2">— Saint Pius X</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="eucharist-real-presence" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Do you value the Bread of Life?</h3>
                            <p className="text-text-muted mb-6">Take our quiz and discover how your sacramental life and love for the Eucharist, the center of Christian life, are going.</p>
                            <Link to="/quiz">
                                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button>
                            </Link>
                        </div>
                    </div>
                </article>

                <Footer />
            </div>
        </>
    );
}
