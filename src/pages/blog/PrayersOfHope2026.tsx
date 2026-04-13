import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";

export default function PrayersOfHope2026() {
    return (
        <>
            <Helmet>
                <title>Prayers of Hope for Times of Crisis in 2026 | Guide Catholic</title>
                <meta name="description" content="Find consolation and strength in traditional and contemporary Catholic prayers focused on the virtue of hope to face the challenges of 2026." />
                <meta name="keywords" content="prayers of hope, prayer for difficult times, prayer of abandonment, psalm 23, saint teresa of avila nothing disturb you, prayer in times of crisis, how to have hope, Catholic prayer, trust in God, pope francis prayer" />
                <link rel="canonical" href="https://guidecatholic.com/blog/prayers-of-hope-2026/" />
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
                            <span className="text-text">Prayers of Hope</span>
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
                                    Prayers
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    January 10, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    6 min read
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Prayers of Hope for Times of Crisis in 2026
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                When strength seems exhausted, prayer is our refuge. Discover powerful prayers to renew your trust in God.
                            </p>
                        </header>

                        <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Hope is a theological virtue, which means it is a gift from God. In times of personal, family, or social crisis, hope prevents us from falling into despair. Praying does not necessarily change the external situation immediately, but it changes our heart to face the storm with serenity.
                            </p>

                            <QuizCTA
                                title="How is your trust in God?"
                                description="Hope is the anchor of the soul amid storms. Take our quiz and discover which prayer method can strengthen your faith in times of difficulty."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Prayer of Abandonment (St. Charles de Foucauld)
                            </h2>
                            <p className="text-text leading-relaxed mb-4 italic bg-surface p-6 rounded-xl border border-border">
                                "Father, I abandon myself into Your hands; do with me what You will. Whatever You may do, I thank You: I am ready for all, I accept all. Let only Your will be done in me, and in all Your creatures. I wish no more than this, O Lord."
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Prayer for Hope (Pope Francis)
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                This prayer was widely spread during the Jubilee and continues to be a balm for the soul:
                                <br /><br />
                                "Lord, give us the grace to be pilgrims of hope. May we be light amid the darkness of the world. May we be consolation amid despair. Do not allow them to steal our hope, for it is the anchor of our soul in You."
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Psalm 23: The Lord is My Shepherd
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Psalm 23 is the prayer of trust par excellence. Reciting it slowly, meditating on each verse, brings deep peace: "Even though I walk through the valley of the shadow of death, I will fear no evil, for You are with me."
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Tips for Effective Prayer
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Constancy:</strong> Pray even when you don't feel like it. Prayer is a commitment, not just a feeling.</li>
                                <li><strong>Sincerity:</strong> Tell God exactly how you feel. He already knows, but wants to hear it from you.</li>
                                <li><strong>Silence:</strong> After speaking, be silent. Let God's peace fill the emptiness of your soul.</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Let nothing disturb you, let nothing frighten you, all things pass away: God never changes. Patience obtains all things; whoever has God lacks nothing: God alone suffices."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — St. Teresa of Ávila
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="prayers-of-hope-2026" />

                        <BlogFAQ faqs={[
                          {
                            question: "What does the Catholic Church teach about hope?",
                            answer: "Hope is one of the three theological virtues (along with faith and charity). The Catechism defines it as 'the theological virtue by which we desire the Kingdom of Heaven and eternal life as our happiness, placing our trust in Christ's promises and relying not on our own strength, but on the help of the Holy Spirit' (CCC 1817)."
                          },
                          {
                            question: "What prayers are most powerful in times of crisis?",
                            answer: "The most powerful prayers in times of crisis include: the Rosary, the Divine Mercy Chaplet, the Litany of the Saints, the Prayer to St. Michael, the Memorare, and the Anima Christi. Regular Mass attendance and Confession are also essential spiritual weapons."
                          },
                          {
                            question: "How do I pray when I feel God is not listening?",
                            answer: "Persevere in prayer even in dryness. Jesus taught the parable of the persistent widow (Luke 18:1-8) to show we must pray without losing heart. Spiritual dryness is not a sign of God's absence but often a sign of spiritual growth. Trust His timing, not your feelings."
                          },
                          {
                            question: "What is the Divine Mercy Chaplet?",
                            answer: "The Divine Mercy Chaplet is a prayer revealed by Jesus to St. Faustina Kowalska in the 1930s. It is prayed on rosary beads and focuses on God's infinite mercy. Jesus promised extraordinary graces to those who pray it, especially at the 3 PM 'Hour of Mercy.'"
                          },
                          {
                            question: "How can prayer help with anxiety and fear?",
                            answer: "St. Paul wrote: 'Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts' (Philippians 4:6-7). Prayer redirects our focus from problems to God's power."
                          }
                        ]} />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                How is your dialogue with God?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Take our quiz and discover which prayer method best suits your current life moment and how to strengthen your intimacy with the Father.
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
