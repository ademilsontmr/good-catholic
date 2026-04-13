import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";

export default function EucharisticAdoration() {
    return (
        <>
            <Helmet>
                <title>The Importance of Eucharistic Adoration | Guide Catholic</title>
                <meta name="description" content="Discover the spiritual benefits of spending time before the Blessed Sacrament. A guide on how to make a good holy hour." />
                <link rel="canonical" href="https://guidecatholic.com/blog/eucharistic-adoration/" />
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
                        <header className="mb-8">
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">The Importance of Eucharistic Adoration</h1>
                        </header>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">Eucharistic Adoration is the prolongation of the mystery celebrated at Holy Mass.</p>
                            <QuizCTA title="How is your life of adoration?" description="Being before the Blessed Sacrament is transforming. Take our quiz." />
                        </div>
                        <RelatedArticles currentSlug="eucharistic-adoration" />

                        <BlogFAQ faqs={[
                          {
                            question: "What is Eucharistic Adoration?",
                            answer: "Eucharistic Adoration is the practice of praying before the Blessed Sacrament — the consecrated Host — exposed in a monstrance or reserved in the tabernacle. Since Jesus is truly present, adoration is literally spending time with Him."
                          },
                          {
                            question: "What is Perpetual Adoration?",
                            answer: "Perpetual Adoration is when a parish or religious community maintains continuous adoration 24 hours a day, 7 days a week. Parishioners sign up for one-hour slots to ensure Jesus is never left alone. There are thousands of perpetual adoration chapels worldwide."
                          },
                          {
                            question: "What should I do during Eucharistic Adoration?",
                            answer: "You can pray the Rosary, read Scripture, use a prayer book, journal, or simply sit in silence. St. John Vianney described a parishioner who spent hours in adoration: 'I look at Him and He looks at me.' Simply being present with love is enough."
                          },
                          {
                            question: "How long should I spend in Eucharistic Adoration?",
                            answer: "Even 15–30 minutes is spiritually powerful. Many saints recommend at least one hour per week. Jesus asked His disciples: 'Could you not watch one hour with me?' (Matthew 26:40). Start with whatever time you can commit to consistently."
                          },
                          {
                            question: "What are the spiritual benefits of Eucharistic Adoration?",
                            answer: "Regular adorers report: deeper peace, clarity in decision-making, healing of emotional wounds, stronger prayer life, and greater love for others. St. Peter Julian Eymard said: 'The Eucharist is the summary of all God's love.' Many conversions and vocations have been born in adoration."
                          }
                        ]} />
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}
