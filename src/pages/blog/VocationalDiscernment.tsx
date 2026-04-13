import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";

export default function VocationalDiscernment() {
    return (
        <>
            <Helmet>
                <title>How to Discern God's Will in Your Life | Guide Catholic</title>
                <meta name="description" content="Learn the principles of spiritual discernment to discover God's plan for you. Practical tips for making decisions in the light of faith." />
                <meta name="keywords" content="how to know my vocation, catholic vocational discernment, god's will for my life, how to discern, priestly religious matrimonial vocation" />
                <link rel="canonical" href="https://guidecatholic.com/blog/vocational-discernment/" />
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
                            <span className="text-text">Vocational Discernment</span>
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
                                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Spirituality</span>
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />December 29, 2024</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min read</span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                How to Discern God's Will in Your Life
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                God has a plan of love for each of us. Learn how to silence the noises of the world to hear the Lord's voice and make decisions with peace and security.
                            </p>
                        </header>

                        <div className="aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10">
                            <Sun className="w-24 h-24 text-yellow-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                Discernment is the art of discovering God's will amid the various options life presents us. It is not a magic formula, but a spiritual process that requires humility, patience, and above all, a life of sincere prayer. God does not play riddles with us; He desires that we be happy and fulfilled in our vocation.
                            </p>

                            <QuizCTA
                                title="Do you know what God's call is for you?"
                                description="Discernment is a path of listening and peace. Take our quiz and receive light on how to identify the signs of divine will in your life and make decisions with more spiritual security."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Three Pillars of Discernment</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Saint Ignatius of Loyola, master of discernment, teaches that we should look in three directions: Prayer (Dialogue), Reality (Signs), and Interior Peace (Confirmation).
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Lord, what do you want me to do?"</p>
                                <p className="text-text-muted text-center mt-2">— Saint Francis of Assisi</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="vocational-discernment" />

                        <BlogFAQ faqs={[
                          {
                            question: "What are the vocations in the Catholic Church?",
                            answer: "The Church recognizes four main vocations: Marriage, Holy Orders (priesthood/diaconate), Consecrated Life (religious sisters, brothers, monks), and Single Life lived in service to God. Every baptized person has a vocation — a specific call from God."
                          },
                          {
                            question: "How do I know if God is calling me to the priesthood or religious life?",
                            answer: "Signs of a religious vocation include: a persistent attraction to prayer and service, a desire to give your life entirely to God, peace when considering this path, and affirmation from a spiritual director. Spending time in prayer, retreats, and visiting communities helps clarify the call."
                          },
                          {
                            question: "What is the role of a spiritual director in discernment?",
                            answer: "A spiritual director is a trained guide who helps you recognize God's movements in your soul. They help you distinguish between genuine divine calls and personal desires or fears. Regular meetings with a spiritual director are essential for serious vocational discernment."
                          },
                          {
                            question: "Can I discern my vocation if I have a sinful past?",
                            answer: "Yes. God calls people from all backgrounds. Many saints had troubled pasts before their conversion. What matters is your current relationship with God and your openness to His will. The Sacrament of Confession restores grace and opens the door to any vocation."
                          },
                          {
                            question: "How long does vocational discernment take?",
                            answer: "There is no fixed timeline. Some people know their vocation early; others discern for years. The important thing is to remain open, pray consistently, seek spiritual direction, and take concrete steps (visiting seminaries, attending discernment retreats) rather than waiting for absolute certainty."
                          }
                        ]} />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Do you know God's purpose for you?</h3>
                            <p className="text-text-muted mb-6">Take our quiz and receive a reflection on your spiritual journey and how you can be more attentive to God's signs in your life.</p>
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
