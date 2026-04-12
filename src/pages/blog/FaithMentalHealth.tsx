import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function FaithMentalHealth() {
    return (
        <>
            <Helmet>
                <title>Faith and Mental Health: How Catholic Spirituality Helps Overcome Anxiety? | Good Catholic</title>
                <meta name="description" content="Discover how Catholic faith and prayer life can be powerful allies in combating anxiety and seeking emotional balance." />
                <meta name="keywords" content="faith and anxiety, prayer for anxiety, Catholic with anxiety, spirituality and mental health, how to have inner peace, faith helps depression" />
                <link rel="canonical" href="https://goodcatholic.com/blog/faith-mental-health" />
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
                            <span className="text-text">Faith and Mental Health</span>
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
                                    Mental Health
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    January 20, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    12 min read
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Faith and Mental Health: How Catholic Spirituality Helps Overcome Anxiety?
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                In a hyperconnected and anxious world, the Catholic tradition offers ancient treasures for the balance of mind and soul.
                            </p>
                        </header>

                        <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
                            <HeartPulse className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Anxiety in the Modern World: A Challenge for Christians
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                We live in the age of haste. The demand for productivity, constant comparison on social media, and uncertainties about the future have created an epidemic of anxiety. For Catholics, this challenge is not only psychological but also spiritual. After all, how can we trust in Divine Providence when our heart is restless?
                            </p>
                            <h3 className="font-display text-xl font-bold text-text mt-6 mb-3">
                                What does the Bible say about excessive worry?
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Jesus was clear: "Do not worry about tomorrow" (Mt 6:34). However, He does not ignore our pains. The biblical invitation is not to deny problems, but to change focus: from the problem to the Provider.
                            </p>

                            <QuizCTA
                                title="How is your inner peace today?"
                                description="Faith is a balm for the tired mind. Take our quiz and discover how Catholic spirituality and abandonment to Providence can help you overcome anxiety and find balance."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                The Power of Abandonment to Divine Providence
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                The most powerful antidote against anxiety in the Catholic tradition is "Holy Abandonment." Saints like St. Francis de Sales and St. Thérèse of Lisieux taught us that real peace comes from surrendering control of our lives into God's hands.
                            </p>
                            <h3 className="font-display text-xl font-bold text-text mt-6 mb-3">
                                The prayer of surrender: "Jesus, I trust in You"
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Repeating simple ejaculations in moments of crisis helps anchor the mind in eternal truth. Trust is not a feeling, but a decision of the will supported by grace.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Catholic Practices that Promote Inner Peace
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>The Holy Rosary:</strong> Its repetitive and meditative structure acts as a natural stress regulator, focusing the mind on the mysteries of Christ.</li>
                                <li><strong>Eucharistic Adoration:</strong> Silence before the Blessed Sacrament is the place where God speaks to the restless heart, reordering our priorities.</li>
                                <li><strong>Examination of Conscience:</strong> At the end of the day, reviewing graces and failures helps unload the weight of the day and sleep under the Father's gaze.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                When Faith and Psychology Meet
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                It is essential to understand that seeking psychological help is not a lack of faith. God acts through science and health professionals. An integrated approach — caring for body, mind, and spirit — is the most effective path to healing and balance in 2026.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Let nothing disturb you, let nothing frighten you... God alone suffices."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — St. Teresa of Ávila
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="faith-mental-health" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                How is your inner peace today?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Take our quiz and discover how your spiritual life may be influencing your emotional well-being and receive personalized tips.
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
