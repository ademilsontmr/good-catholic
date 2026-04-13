import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function ExaminationOfConscience() {
    return (
        <>
            <Helmet>
                <title>How to Make a Good Examination of Conscience for Confession | Guide Catholic</title>
                <meta name="description" content="Practical guide to perform a deep and sincere examination of conscience. Prepare for the sacrament of Reconciliation with this spiritual roadmap." />
                <meta name="keywords" content="complete examination of conscience, how to examine conscience, list of sins for confession, preparation for confession, mortal and venial sins" />
                <link rel="canonical" href="https://guidecatholic.com/blog/examination-conscience/" />
            </Helmet>

            <div className="min-h-screen bg-background">
                <header className="bg-primary text-button-text py-4">
                    <div className="container mx-auto px-4 flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                                <Cross className="w-5 h-5 text-button-text" />
                            </div>
                            <span className="font-display text-xl font-bold">Guide Catholic</span>
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
                            <span className="text-text">Examination of Conscience</span>
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
                                    Sacraments
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    December 29, 2024
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    8 min read
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                How to Make a Good Examination of Conscience for Confession
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Confession begins long before entering the confessional. The examination of conscience is the mirror that shows us where we need God's healing.
                            </p>
                        </header>

                        <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
                            <Church className="w-24 h-24 text-violet-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                The Sacrament of Reconciliation is one of the greatest gifts Jesus left to His Church. However, to fully receive the grace of forgiveness, a contrite heart and sincere preparation are necessary. The examination of conscience is not an exercise in guilt, but an act of love and truth before a God who is Father and Mercy.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                What is the Examination of Conscience?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                It is the effort to recall sins committed by thoughts, words, acts, and omissions since the last good confession. It is placing oneself under the light of the Holy Spirit to see the wounds that sin has caused in our relationship with God, with our neighbor, and with ourselves.
                            </p>

                            <QuizCTA
                                title="How is the health of your soul?"
                                description="A good examination of conscience is the first step to healing. Take our quiz and receive a practical roadmap to prepare your next confession, diving into God's mercy."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Step by Step for a Good Examination
                            </h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                1. Invoke the Holy Spirit
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Alone, we tend to justify our errors or despair. Ask the Holy Spirit to give you clarity, courage, and true repentance. "Come, Holy Spirit, enlighten my mind so I may see my sins and touch my heart so I may detest them."
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                2. Use a Guide (Commandments)
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                The most classic way is to follow the Ten Commandments. Ask yourself: Did I give God first place? Did I use His name in vain? Did I keep Sundays holy? Did I honor my parents? Was I violent or did I hold grudges? Was I pure in my thoughts and actions? Was I honest? Did I speak the truth?
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                The Three Dimensions of Sin
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Relationship with God:</strong> Omission of prayers, lack of trust, superstitions.</li>
                                <li><strong>Relationship with Neighbor:</strong> Judgments, gossip, lack of charity, dishonesty.</li>
                                <li><strong>Relationship with Oneself:</strong> Pride, laziness, gluttony, lack of care for one's own soul.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                The Sorrow of the Heart (Contrition)
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                More important than the list of sins is repentance. Contrition is the sorrow of the soul for having offended such a good God. Without the purpose of sinning no more, confession loses its transforming meaning.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Confession is the baptism of tears."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Saint John Chrysostom
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="examination-conscience" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                How is your spiritual health?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Take our quiz and receive guidance on how to strengthen your sacramental life and your journey of holiness.
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
