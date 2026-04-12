import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function MeaningOfMass() {
    return (
        <>
            <Helmet>
                <title>The Meaning of Holy Mass: Understanding Each Part of the Liturgy | Good Catholic</title>
                <meta name="description" content="Learn the profound meaning of each moment of Holy Mass. A complete guide to the liturgy to participate with more awareness and devotion." />
                <meta name="keywords" content="parts of mass explained, meaning of catholic mass, mass liturgy, what happens at mass, mass rites, how to participate in mass" />
                <link rel="canonical" href="https://goodcatholic.com/blog/meaning-mass" />
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
                            <span className="text-text">The Meaning of Holy Mass</span>
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
                                    Liturgy
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    December 29, 2024
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min read
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                The Meaning of Holy Mass: Understanding Each Part of the Liturgy
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Mass is Christ's sacrifice made present on our altar. Understanding its rites is the key to full and fruitful participation.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
                            <BookOpen className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Many Catholics attend Sunday Mass out of habit or precept, but few understand the theological and spiritual richness contained in each gesture, word, and silence of the liturgy. Holy Mass is not an enactment of the Last Supper, but the actualization of the sacrifice of Calvary. It is heaven touching earth.
                            </p>

                            <QuizCTA
                                title="Do you participate in Mass with depth?"
                                description="Holy Mass is heaven touching earth. Take our quiz and discover how to participate in each rite with more awareness, love, and devotion to the Eucharistic mystery."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Introductory Rites: Preparing the Heart
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Mass begins with the sign of the cross, reminding us that we are there in the name of the Trinity. The Penitential Act is a crucial moment of humility, where we recognize our smallness before God's greatness, asking forgiveness to worthily celebrate the holy mysteries.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Liturgy of the Word: God Speaks to His People
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                In the biblical readings, it is God Himself who speaks. The first reading (usually from the Old Testament), the Psalm, the second reading, and finally the Gospel form a dialogue of love. The priest's homily should help us apply this Word in our daily life.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Liturgy of the Eucharist: The Summit of the Celebration
                            </h2>
                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                The Offertory
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                We bring to the altar bread and wine, fruits of the earth and human work, but we also bring our lives, joys, and sufferings to be transformed.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                The Consecration
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                This is the most sacred moment. Through the priest's words and the power of the Holy Spirit, the substance of bread and wine becomes the Body and Blood of Christ. It is the miracle of Transubstantiation.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Communion Rites and Dismissal
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                By receiving Communion, we unite intimately with Jesus and with our brothers and sisters. Mass ends with the blessing and dismissal: "Go in peace and the Lord be with you." The celebration continues in our life, in the witness we will give in the world.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "If we knew the value of the Holy Sacrifice of the Mass, what zeal we would have to attend it!"
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Saint John Vianney (Curé of Ars)
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="meaning-mass" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Do you live Mass with depth?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Discover how your liturgical knowledge and sacramental experience are through our personalized quiz.
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
