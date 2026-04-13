import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function LocalPilgrimage() {
    return (
        <>
            <Helmet>
                <title>How to Organize a Local Pilgrimage in Your Diocese | Guide Catholic</title>
                <meta name="description" content="Practical and spiritual guide to organizing pilgrimages to local shrines and jubilee churches, strengthening community faith in 2026." />
                <meta name="keywords" content="how to organize pilgrimage, Catholic pilgrimage, shrines, religious tourism Catholic, pilgrimage, how to make pilgrimage, jubilee churches, walking pilgrimage, pilgrimage route, Marian shrines" />
                <link rel="canonical" href="https://guidecatholic.com/blog/local-pilgrimage/" />
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
                            <span className="text-text">Local Pilgrimage</span>
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
                                    Devotions
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    January 15, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    8 min read
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                How to Organize a Local Pilgrimage in Your Diocese
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                You don't need to go to Rome to be a pilgrim. Discover how to organize a journey of faith to the shrines in your region.
                            </p>
                        </header>

                        <div className="aspect-video bg-emerald-100 rounded-2xl flex items-center justify-center mb-10">
                            <MapPin className="w-24 h-24 text-emerald-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Pilgrimage is a metaphor for Christian life: we are on our way to the Heavenly Homeland. Organizing a local pilgrimage is an excellent way to unite the community, rediscover the history of faith in your region, and obtain jubilee graces without great costs.
                            </p>

                            <QuizCTA
                                title="Are you ready to walk with faith?"
                                description="Pilgrimage is about leaving your comfort zone to encounter God. Take our quiz and discover which type of spiritual journey best suits your current life moment."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                1. Define the Objective and Destination
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Choose a place that has spiritual significance: the diocesan Cathedral, a Marian shrine, or the church of a local patron saint. The objective should be clear: is it a journey of penance, thanksgiving, or petition for graces?
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                2. Spiritual Planning
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                A pilgrimage is not a tourist outing. Prepare a prayer itinerary for the journey:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Opening Prayer:</strong> Blessing of sending by the parish priest.</li>
                                <li><strong>Holy Rosary:</strong> Meditated during the walk or journey.</li>
                                <li><strong>Songs:</strong> Hymns that help elevate the soul.</li>
                                <li><strong>Confession and Mass:</strong> The high point of arrival at the destination.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                3. Logistics and Organization
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Think about practical details so nothing disrupts the moment of faith: transportation (bus or walking), food, support points, and pilgrim kit (prayer booklet, water, identification).
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                4. Post-Pilgrimage
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Upon return, set aside a moment to share the fruits of the journey. How did this experience change the participants' vision of faith? What concrete commitments does the community assume from now on?
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "To pilgrimage is to leave your comfort zone to encounter God and your brothers and sisters."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Christian Popular Wisdom
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="local-pilgrimage" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                What is your pilgrim profile?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Take our quiz and discover which types of spiritual experiences and pilgrimage destinations best match your current faith moment.
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
