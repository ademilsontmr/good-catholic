import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function VocationalDiscernment() {
    return (
        <>
            <Helmet>
                <title>How to Discern God's Will in Your Life | Guide Catholic</title>
                <meta name="description" content="Learn the principles of spiritual discernment to discover God's plan for you. Practical tips for making decisions in the light of faith." />
                <meta name="keywords" content="how to know my vocation, catholic vocational discernment, god's will for my life, how to discern, priestly religious matrimonial vocation" />
                <link rel="canonical" href="https://guidecatholic.com/blog/vocational-discernment/" />
            </Helmet>
        <ArticleSchema
          title="How to Discern God's Will in Your Life"
          description="Learn the principles of spiritual discernment to discover God's plan for you. Practical tips for making decisions in the light of faith."
          url="https://guidecatholic.com/blog/vocational-discernment/"
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

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Four Vocations in the Catholic Church</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Every baptized person has a vocation — a specific call from God to love and serve in a particular way. The Church recognizes four primary vocations:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-3 mb-6">
                                <li><strong>Marriage:</strong> The vocation of most Catholics, called to reflect the love of Christ for His Church through faithful, fruitful, and permanent union</li>
                                <li><strong>Holy Orders:</strong> The vocation to priesthood or diaconate, serving the Church through the sacraments and pastoral ministry</li>
                                <li><strong>Consecrated Life:</strong> Religious sisters, brothers, monks, and nuns who give their lives entirely to God through vows of poverty, chastity, and obedience</li>
                                <li><strong>Single Life:</strong> A vocation in itself for those called to serve God and neighbor without the specific commitments of marriage or religious life</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Ignatian Method of Discernment</h2>
                            <p className="text-text leading-relaxed mb-6">
                                St. Ignatius of Loyola, founder of the Jesuits and master of spiritual discernment, developed a systematic method for discovering God's will. His Spiritual Exercises remain one of the most powerful tools for discernment in the Church's history. The Ignatian method involves:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-3 mb-6">
                                <li><strong>Indifference:</strong> Cultivating interior freedom from attachments so that you can choose what God wills rather than what you prefer</li>
                                <li><strong>Consolation and Desolation:</strong> Learning to recognize the movements of the Holy Spirit (consolation — peace, joy, love) versus the movements of the enemy (desolation — anxiety, confusion, darkness)</li>
                                <li><strong>The Two Standards:</strong> Meditating on the contrast between Christ's way (humility, poverty, service) and the world's way (riches, honor, pride)</li>
                                <li><strong>The Three Times of Election:</strong> Recognizing whether God is calling you through clarity, through consolations and desolations, or through rational deliberation</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Signs of a Genuine Vocation</h2>
                            <p className="text-text leading-relaxed mb-6">
                                While God calls each person uniquely, spiritual directors and the Church's tradition identify several common signs of a genuine vocation:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-3 mb-6">
                                <li><strong>Persistent attraction:</strong> A consistent, recurring draw toward a particular way of life over time — not just a passing feeling</li>
                                <li><strong>Interior peace:</strong> When you imagine yourself in a particular vocation, do you experience deep peace or anxiety? Peace is generally a sign of God's will</li>
                                <li><strong>Fitness:</strong> Do you have the natural and spiritual qualities needed for this vocation? God generally calls people who have the capacity to live the vocation well</li>
                                <li><strong>External confirmation:</strong> Do others — especially a spiritual director, confessor, or community — affirm what you are sensing?</li>
                                <li><strong>Desire to serve:</strong> A genuine vocation is always oriented toward love and service, not personal fulfillment alone</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Role of a Spiritual Director</h2>
                            <p className="text-text leading-relaxed mb-6">
                                A spiritual director is perhaps the most important human resource in vocational discernment. This is a trained guide — usually a priest, deacon, or experienced religious — who helps you recognize God's movements in your soul, distinguish genuine calls from personal desires or fears, and make decisions with greater clarity and peace.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Finding a good spiritual director takes time and prayer. Ask your pastor for recommendations, contact your diocesan vocations office, or reach out to a religious community. Meet with several directors before committing to one. The relationship should be characterized by trust, honesty, and a shared commitment to seeking God's will.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Practical Steps for Discernment</h2>
                            <ul className="list-disc list-inside text-text space-y-3 mb-6">
                                <li><strong>Pray daily:</strong> You cannot hear God's voice if you never listen. Set aside time each day for silent prayer.</li>
                                <li><strong>Receive the sacraments frequently:</strong> Confession and Communion open the soul to God's grace and clarity.</li>
                                <li><strong>Make a retreat:</strong> A silent retreat — even a weekend — can provide the space needed to hear God's voice clearly.</li>
                                <li><strong>Visit communities:</strong> If discerning religious life, visit seminaries, monasteries, and convents. If discerning marriage, spend time with holy married couples.</li>
                                <li><strong>Keep a journal:</strong> Write down your prayers, feelings, and insights. Patterns often emerge over time.</li>
                                <li><strong>Be patient:</strong> Discernment takes time. Trust God's timing and resist the pressure to decide before you are ready.</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Lord, what do you want me to do?"</p>
                                <p className="text-text-muted text-center mt-2">— Saint Francis of Assisi</p>
                            </div>

                            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                                <p className="text-text italic text-center">"The will of God is not a burden to be carried but a path to be walked — and it always leads to joy."</p>
                                <p className="text-text-muted text-center mt-2">— St. John Paul II</p>
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
