import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function EucharisticAdoration() {
    return (
        <>
            <Helmet>
                <title>The Importance of Eucharistic Adoration | Good Catholic</title>
                <meta name="description" content="Discover the spiritual benefits of spending time before the Blessed Sacrament. A guide on how to make a good holy hour." />
                <link rel="canonical" href="https://goodcatholic.com/blog/eucharistic-adoration" />
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
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}
