import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";

export default function MeaningOfCrucifix() {
    return (
        <>
            <Helmet>
                <title>The History and Meaning of the Crucifix | Guide Catholic</title>
                <meta name="description" content="Understand why the crucifix is the central symbol of Catholic faith. Learn about its history, symbolism, and the importance of having it in our homes." />
                <meta name="keywords" content="meaning of crucifix, difference between cross and crucifix, why Catholics use crucifix, crucifix at home, symbol of the cross, passion of Christ, INRI meaning, Catholic cross, having crucifix in bedroom, sign of the cross" />
                <link rel="canonical" href="https://guidecatholic.com/blog/meaning-of-crucifix/" />
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
                            <span className="text-text">Meaning of the Crucifix</span>
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
                                    December 29, 2024
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    6 min read
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                The History and Meaning of the Crucifix
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                The crucifix is not just an ornament, but the summary of our faith. Discover why this symbol is so central to Catholic life.
                            </p>
                        </header>

                        <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
                            <Church className="w-24 h-24 text-violet-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                To the world, the cross is foolishness or scandal; to us Catholics, it is the sign of victory and the supreme proof of God's love. The crucifix (the cross with the image of Jesus) constantly reminds us of the price paid for our salvation and Jesus' invitation: "Whoever wants to follow me, take up your cross and follow me."
                            </p>

                            <QuizCTA
                                title="Do you live the mystery of the Cross?"
                                description="The crucifix is the summary of our faith and God's love. Take our quiz and reflect on how you have been carrying your own cross in following Jesus Christ."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                The Difference Between Cross and Crucifix
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                While the empty cross emphasizes the Resurrection, the crucifix emphasizes the Sacrifice. The Catholic Church uses the crucifix to keep us focused on Christ's Passion, because there is no Resurrection without Calvary. Looking at the crucifix is looking at the Love that gave itself for us.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Symbolism of the Crucifix
                            </h2>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>The Title (INRI):</strong> "Jesus of Nazareth, King of the Jews," proclaiming His divine kingship.</li>
                                <li><strong>The Open Arms:</strong> God's desire to embrace all humanity and reconcile it to Himself.</li>
                                <li><strong>The Wounds:</strong> Signs of our healing; "by His wounds we were healed."</li>
                                <li><strong>The Vertical and Horizontal:</strong> The union between heaven and earth, between God and humanity.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Why Have a Crucifix at Home?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Having a crucifix in a prominent place in the home (an "oratory" or above the door) sanctifies the environment. It serves as a reminder to pray, a consolation in times of pain, and protection against the forces of evil. It is the sign that this house belongs to Christ.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Ave Crux, Spes Unica" (Hail the Cross, our only hope).
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Motto of the Order of the Holy Cross
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="meaning-of-crucifix" />

                        <BlogFAQ faqs={[
                          {
                            question: "What is the difference between a cross and a crucifix?",
                            answer: "A cross is an empty cross, symbolizing the Resurrection. A crucifix displays the body of Christ (corpus), emphasizing His sacrifice on Calvary. Catholics traditionally use crucifixes to keep the reality of Christ's suffering and redemption before their eyes."
                          },
                          {
                            question: "Why do Catholics display crucifixes in their homes?",
                            answer: "A crucifix in the home is a constant reminder of God's love, Christ's sacrifice, and our redemption. It sanctifies the home, invites God's blessing, and serves as a focal point for family prayer. The Church encourages having a crucifix in every room."
                          },
                          {
                            question: "What does INRI mean on the crucifix?",
                            answer: "INRI is an abbreviation of the Latin 'Iesus Nazarenus Rex Iudaeorum' — 'Jesus of Nazareth, King of the Jews.' This was the inscription Pontius Pilate ordered placed on the cross (John 19:19-20), written in Hebrew, Latin, and Greek."
                          },
                          {
                            question: "Is it superstitious to wear a crucifix?",
                            answer: "No. Wearing a crucifix is a sacramental — a sacred sign that disposes us to receive grace and sanctifies various occasions in life. It is an act of faith and a public witness to Christianity. The Church encourages wearing blessed crucifixes and religious medals."
                          },
                          {
                            question: "What is the San Damiano Cross?",
                            answer: "The San Damiano Cross is the Byzantine-style crucifix before which St. Francis of Assisi prayed when he heard Christ say 'Rebuild my Church.' It depicts Christ in glory even on the cross, surrounded by witnesses to the Resurrection. It is one of the most beloved crucifixes in Catholic history."
                          }
                        ]} />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Do you live the mystery of the Cross?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Take our quiz and reflect on how you have been carrying your own cross in following Jesus and how to strengthen your faith in times of trial.
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
