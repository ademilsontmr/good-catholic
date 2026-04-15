import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function PlenaryIndulgenceGuide() {
    return (
        <>
            <Helmet>
                <title>Plenary Indulgence: Complete Guide for the Final Days of the Jubilee | Guide Catholic</title>
                <meta name="description" content="There's still time! Learn how to obtain plenary indulgence at the closing of Jubilee 2025 and understand the spiritual value of this grace." />
                <meta name="keywords" content="what is plenary indulgence, how to gain indulgence, jubilee 2025, conditions for indulgence, indulgence for souls in purgatory, holy door, Catholic holy year, forgiveness of penalties, partial and plenary indulgence, jubilee works of mercy" />
                <link rel="canonical" href="https://guidecatholic.com/blog/plenary-indulgence-guide/" />
            </Helmet>
        <ArticleSchema
          title="Plenary Indulgence: Complete Guide for the Final Days of the Jubilee"
          description="There's still time! Learn how to obtain plenary indulgence at the closing of Jubilee 2025 and understand the spiritual value of this grace."
          url="https://guidecatholic.com/blog/plenary-indulgence-guide/"
        />

            <div className="min-h-screen bg-background">
                <Navbar />

        <div className="bg-background-muted/50 py-3 mt-16">
                    <div className="container mx-auto px-4">
                        <nav className="flex items-center gap-2 text-sm text-text-muted">
                            <Link to="/" className="hover:text-accent">Home</Link>
                            <span>/</span>
                            <Link to="/blog" className="hover:text-accent">Blog</Link>
                            <span>/</span>
                            <span className="text-text">Plenary Indulgence Guide</span>
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
                                    Formation
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    December 28, 2025
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min read
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Plenary Indulgence: Complete Guide for the Final Days of the Jubilee
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                The Church opens its treasures of grace in a special way during the Jubilee. Understand how to receive total remission of the penalties due for your sins.
                            </p>
                        </header>

                        <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
                            <BookOpen className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Many Catholics confuse Indulgence with Confession. While Confession forgives the guilt of sin, plenary indulgence erases the "temporal punishment" — the mark or disorder that sin leaves on our soul. In Jubilee 2025, Pope Francis facilitated access to this immense grace.
                            </p>

                            <QuizCTA
                                title="Do you want to start a new life today?"
                                description="The Church opens its treasures of mercy for you. Take our quiz and understand how to obtain plenary indulgence, cleansing the marks of sin and renewing your spiritual journey."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                The 4 Usual Conditions
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                For any plenary indulgence, four fundamental acts are necessary:
                            </p>
                            <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                                <li><strong>Sacramental Confession:</strong> Can be done a few days before or after.</li>
                                <li><strong>Eucharistic Communion:</strong> Preferably on the day the indulgenced work is performed.</li>
                                <li><strong>Prayer for the Pope's Intentions:</strong> Usually an Our Father and a Hail Mary.</li>
                                <li><strong>Total Detachment from Sin:</strong> Including venial sins.</li>
                            </ol>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Specific Works of Jubilee 2025
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                In addition to the above conditions, the faithful must perform one of the following works:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Pilgrimage:</strong> Visit one of the Papal Basilicas in Rome or the Cathedral of your diocese.</li>
                                <li><strong>Pious Visit:</strong> Spend time in adoration or prayer in designated jubilee churches.</li>
                                <li><strong>Works of Mercy:</strong> Visit the sick, prisoners, or lonely elderly.</li>
                                <li><strong>Penance:</strong> Abstain from distractions (social media, TV) or fast for a day.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Why Seek Indulgence Now?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                The Jubilee is a "favorable time." It is the opportunity to start the year 2026 with a completely renewed soul, as if we had just come out of Baptism. Additionally, you can apply the indulgence for a soul in Purgatory.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Indulgence is the manifestation of the fullness of the Father's mercy, who comes to meet everyone with His face of love."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Pope Francis
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="plenary-indulgence-guide" />

                        <BlogFAQ faqs={[
                          {
                            question: "What is a plenary indulgence?",
                            answer: "A plenary indulgence is the full remission of the temporal punishment due to sins already forgiven. It does not forgive sins (that requires Confession) but removes the punishment that remains after forgiveness. It can be applied to oneself or to a soul in Purgatory."
                          },
                          {
                            question: "What are the conditions for gaining a plenary indulgence?",
                            answer: "To gain a plenary indulgence you must: (1) be in a state of grace, (2) perform the prescribed indulgenced work, (3) receive sacramental Confession within 20 days, (4) receive Holy Communion, and (5) pray for the Pope's intentions. All attachment to sin must be absent."
                          },
                          {
                            question: "What is the difference between a plenary and partial indulgence?",
                            answer: "A plenary indulgence removes all temporal punishment due to sin. A partial indulgence removes some of the temporal punishment. The Church grants partial indulgences for many pious acts, prayers, and works of mercy performed with a contrite heart."
                          },
                          {
                            question: "Can I gain a plenary indulgence for a deceased person?",
                            answer: "Yes. Indulgences can be applied to the souls in Purgatory by way of suffrage (intercession), not by jurisdiction. The Church encourages gaining indulgences for the Holy Souls, especially during November and on All Souls' Day (November 2)."
                          },
                          {
                            question: "Are indulgences the same as buying forgiveness?",
                            answer: "No. The Church has never taught that indulgences can be purchased. The abuses of selling indulgences in the Middle Ages were condemned by the Council of Trent. An indulgence is a spiritual benefit gained through prayer and good works, never through money."
                          }
                        ]} />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Are you in a state of grace?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Take our conscience quiz and prepare your heart to receive the graces that God has reserved for you at the end of this Holy Year.
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
