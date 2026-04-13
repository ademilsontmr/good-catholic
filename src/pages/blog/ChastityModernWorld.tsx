import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function ChastityModernWorld() {
    return (
        <>
            <Helmet>
                <title>Living Chastity in the Modern World: Challenges and Graces | Guide Catholic</title>
                <meta name="description" content="Understand the true meaning of Christian chastity and how to live it in today's world. An invitation to freedom and authentic love according to the Gospel." />
                <meta name="keywords" content="how to live chastity, chastity in modern world, catholic sexual purity, why be chaste, chastity before marriage, true love" />
                <link rel="canonical" href="https://guidecatholic.com/blog/chastity-modern-world/" />
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
                            <Button variant="secondary" size="sm">Take the Quiz</Button>
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
                            <span className="text-text">Chastity in the Modern World</span>
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
                                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Formation</span>
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />December 29, 2024</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Living Chastity in the Modern World: Challenges and Graces
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Chastity is not a "no" to pleasure, but a "yes" to true love. Discover how this virtue frees the heart to love as Christ loved.
                            </p>
                        </header>

                        <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
                            <Users className="w-24 h-24 text-amber-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Speaking of chastity today seems, to many, an anachronism. In a culture that preaches immediate satisfaction of all impulses, the Christian proposal of purity is often ridiculed or misunderstood. However, chastity is the virtue that orders our affectivity and sexuality, integrating them into the human person for the good of authentic love.
                            </p>

                            <QuizCTA
                                title="How is your pursuit of purity of heart?"
                                description="Chastity is the freedom to truly love. Take our quiz and receive guidance on how to strengthen your virtues and live Christian love with integrity in today's world."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What is Chastity Really?</h2>
                            <p className="text-text leading-relaxed mb-6">
                                The Catechism of the Catholic Church teaches that chastity means the successful integration of sexuality within the person. It is not the denial of sexuality, but its self-mastery. A chaste heart is a free heart, which does not use the other as an object of pleasure, but respects them as the image and likeness of God.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Chastity is the flower of virtues."</p>
                                <p className="text-text-muted text-center mt-2">— Saint Francis de Sales</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="chastity-modern-world" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">How is your pursuit of holiness?</h3>
                            <p className="text-text-muted mb-6">Take our quiz and receive guidance on how to live Christian virtues and strengthen your character in following Jesus.</p>
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
