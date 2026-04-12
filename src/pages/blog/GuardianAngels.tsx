import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function GuardianAngels() {
    return (
        <>
            <Helmet>
                <title>The Role of Guardian Angels in Our Life | Good Catholic</title>
                <link rel="canonical" href="https://goodcatholic.com/blog/guardian-angels/" />
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
                        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">The Role of Guardian Angels in Our Life</h1>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">You are never alone. God has entrusted each of us with a heavenly companion.</p>
                            <QuizCTA title="Do you hear your Guardian Angel's voice?" description="Take our quiz." />
                        </div>
                        <RelatedArticles currentSlug="guardian-angels" />
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}
