import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function Jubilee2025Legacy() {
    return (
        <>
            <Helmet>
                <title>The Legacy of Jubilee 2025: How to Continue Being a Pilgrim of Hope? | Good Catholic</title>
                <meta name="description" content="The Holy Year of 2025 has ended, but its mission continues. Discover how to keep the flame of hope alive in your Christian life in 2026." />
                <meta name="keywords" content="jubilee 2025 what was it, pilgrims of hope, holy year 2025, holy door, pope francis jubilee, jubilee indulgence, how to live after jubilee, fruits of holy year, Christian hope, Catholic church 2026" />
                <link rel="canonical" href="https://goodcatholic.com/blog/jubilee-2025-legacy" />
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
                        <Link to="/quiz">
                            <Button variant="secondary" size="sm">
                                Take the Quiz
                            </Button>
                        </Link>
                    </div>
                </header>

                <div className="bg-background-muted/50 py-3">
                    <div className="container mx-auto px-4">
                        <nav className="flex items-center gap-2 text-sm text-text-muted">
                            <Link to="/" className="hover:text-accent">Home</Link>
                            <span>/</span>
                            <Link to="/blog" className="hover:text-accent">Blog</Link>
                            <span>/</span>
                            <span className="text-text">Jubilee 2025 Legacy</span>
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
                                    Jubilee 2025
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    January 1, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    8 min read
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                The Legacy of Jubilee 2025: How to Continue Being a Pilgrim of Hope?
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                The Holy Doors have closed, but the Christian's heart must remain open. Discover how to carry the fruits of the Holy Year into your daily life in 2026.
                            </p>
                        </header>

                        <div className="aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10">
                            <Sun className="w-24 h-24 text-yellow-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                The Jubilee of 2025, under the theme "Pilgrims of Hope," was a time of extraordinary grace for the universal Church. Millions of faithful crossed the Holy Doors, sought reconciliation, and renewed their faith. However, the end of the jubilee liturgical year does not mark the end of our journey, but the beginning of a new stage of witness.
                            </p>

                            <QuizCTA
                                title="Are you a pilgrim of hope?"
                                description="The Jubilee of 2025 left a call for each of us. Take our quiz and discover how to keep the flame of hope alive and the fruits of the Holy Year in your life."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                What Does It Mean to Be a Pilgrim in 2026?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Being a pilgrim is not limited to traveling to Rome or to a shrine. It is an interior attitude of one who knows they have no permanent dwelling here. In 2026, we are called to be "pilgrims in daily life," bringing the light of hope to our work, study, and family environments.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                3 Fruits of the Jubilee to Cultivate Now
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>The Joy of Forgiveness:</strong> The experience of Plenary Indulgence should make us more merciful to others.</li>
                                <li><strong>The Centrality of Hope:</strong> In a world marked by uncertainties, the Christian is the one who points to the anchor that is Christ.</li>
                                <li><strong>The Culture of Encounter:</strong> The Jubilee taught us to walk together; this synodality must continue in our parishes.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                How to Keep the Flame Burning?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                For the Jubilee not to be just a distant memory, spiritual discipline is needed. Resume the readings proposed by Pope Francis, actively participate in sacramental life, and above all, be a sign of contradiction through concrete charity.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Hope does not disappoint, because God's love has been poured into our hearts."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Romans 5:5
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="jubilee-2025-legacy" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                How is your journey of hope?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Take our quiz and discover how you can strengthen your faith and continue living the fruits of the Jubilee in your daily life.
                            </p>
                            <Link to="/quiz">
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
