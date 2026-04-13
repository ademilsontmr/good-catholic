import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";

export default function HowToLiveLent() {
    return (
        <>
            <Helmet>
                <title>How to Live Lent with Spiritual Fruits | Guide Catholic</title>
                <link rel="canonical" href="https://guidecatholic.com/blog/how-to-live-lent/" />
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
                        <Link to="/quiz"><Button variant="secondary" size="sm">Take the Quiz</Button></Link>
                    </div>
                </header>
                <article className="py-12">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">How to Live Lent with Spiritual Fruits</h1>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">Lent is the liturgical season of forty days preceding Easter.</p>
                            <QuizCTA title="Is your Lent bearing fruit?" description="Take our quiz and receive guidance." />
                        </div>
                        <RelatedArticles currentSlug="how-to-live-lent" />

                        <BlogFAQ faqs={[
                          {
                            question: "What is Lent and when does it begin?",
                            answer: "Lent is a 40-day season of prayer, fasting, and almsgiving that prepares Catholics for Easter. It begins on Ash Wednesday and ends on Holy Thursday evening. The 40 days recall Jesus's 40 days of fasting in the desert (Matthew 4:1-11)."
                          },
                          {
                            question: "What are the three pillars of Lent?",
                            answer: "The three pillars are: Prayer (deepening your relationship with God), Fasting (self-denial that strengthens the will and expresses repentance), and Almsgiving (giving to the poor as an act of love). Jesus mentions all three in Matthew 6:1-18."
                          },
                          {
                            question: "What should I give up for Lent?",
                            answer: "Choose something that is genuinely sacrificial for you — social media, sweets, alcohol, TV, or a comfort habit. The purpose is not the sacrifice itself but what it opens up: more time for prayer, greater dependence on God, and solidarity with the poor."
                          },
                          {
                            question: "Are Sundays during Lent still penitential?",
                            answer: "Sundays are always celebrations of the Resurrection and are not counted among the 40 days of Lent. You are not obligated to fast on Sundays, though many Catholics maintain their Lenten practices. Sundays during Lent are 'in Lent' but not 'of Lent.'"
                          },
                          {
                            question: "What is the most important thing to do during Lent?",
                            answer: "Go to Confession. Lent is the Church's primary season for reconciliation. The Easter Duty (receiving Communion during the Easter season) presupposes being in a state of grace. Many parishes offer extra Confession times and communal penance services during Lent."
                          }
                        ]} />
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}
