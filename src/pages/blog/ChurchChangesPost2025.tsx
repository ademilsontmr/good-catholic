import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";

export default function ChurchChangesPost2025() {
    return (
        <>
            <Helmet>
                <title>What Changes in the Church After the Holy Year of 2025? | Guide Catholic</title>
                <meta name="description" content="Analysis of perspectives and changes in the Catholic Church for 2026 after the closing of the Jubilee. What to expect from the pontificate and dioceses." />
                <meta name="keywords" content="Catholic church 2026, changes in church, pope francis, synodality, future of Catholic church, synod, laudato si, fratelli tutti, new bishops, digital Catholic evangelization" />
                <link rel="canonical" href="https://guidecatholic.com/blog/church-changes-post-2025/" />
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
                            <span className="text-text">Church Changes Post-2025</span>
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
                                    Current Affairs
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    January 5, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    9 min read
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                What Changes in the Church After the Holy Year of 2025?
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                The closing of the Jubilee is not a period, but a new breath for the mission. Understand the trends and challenges of the Church for 2026.
                            </p>
                        </header>

                        <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
                            <Church className="w-24 h-24 text-violet-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                With the closing of the Holy Doors in January 2026, the Catholic Church enters a new cycle. The Jubilee of 2025 left a deep mark on global spirituality, but now the challenge is the "pastoral of hope" — how to transform the enthusiasm of pilgrimages into lasting Christian commitment.
                            </p>

                            <QuizCTA
                                title="What is your place in the Church?"
                                description="The Church is always renewing itself and you are part of this mission. Take our quiz and discover how your gifts can help build a more vibrant and missionary community."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                The Consolidation of Synodality
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                One of the great legacies of the 2024-2025 period was the Synod on Synodality. In 2026, we will see the practical application of synodal guidelines in parishes: greater participation of the laity, active listening, and a more missionary and less bureaucratic Church.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Focus on Integral Ecology and Social Justice
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                Pope Francis will continue to promote the themes of *Laudato Si'* and *Fratelli Tutti*. In 2026, the Church should intensify its voice on climate issues and in defense of migrants, seeing in these causes a concrete way to live Christian charity in the contemporary world.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Renewal of the Episcopate
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                In many regions, 2026 will be a year of transition in several important dioceses. With the resignation of bishops who reach the age limit, the Pope will have the opportunity to appoint new shepherds aligned with the vision of a "Church going forth," focused on existential peripheries.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Digital Challenges and Evangelization
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                The Church will continue to explore digital frontiers. The use of Artificial Intelligence for formation and the presence of Catholic influencers will be central themes to reach new generations seeking meaning in a hyperconnected world.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "The Church does not grow by proselytism, but by attraction."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Benedict XVI, frequently quoted by Pope Francis
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="church-changes-post-2025" />

                        <BlogFAQ faqs={[
                          {
                            question: "What major changes has the Catholic Church made in recent years?",
                            answer: "Recent years have seen: the publication of Fiducia Supplicans (2023) on blessings, ongoing synodal processes, continued liturgical discussions about the Traditional Latin Mass, increased emphasis on synodality, and the Church's response to global challenges like climate change and migration."
                          },
                          {
                            question: "What is the Synod on Synodality?",
                            answer: "The Synod on Synodality (2021-2024) was a global consultation process initiated by Pope Francis to discern how the Church can better listen to all its members. It emphasized participation, communion, and mission, while reaffirming core Catholic doctrine."
                          },
                          {
                            question: "Has the Church changed any doctrines recently?",
                            answer: "No. Catholic doctrine on faith and morals is unchangeable. What develops is the Church's understanding and expression of doctrine (doctrinal development), not the doctrine itself. Disciplines (like liturgical practices) can change; dogmas cannot."
                          },
                          {
                            question: "What is the future of the Traditional Latin Mass?",
                            answer: "Pope Francis's Traditionis Custodes (2021) restricted the Traditional Latin Mass, requiring bishop approval. This remains a point of discussion. The Church continues to navigate the balance between liturgical unity and pastoral care for communities attached to the traditional form."
                          },
                          {
                            question: "How should Catholics respond to changes in the Church?",
                            answer: "With faith, prayer, and charity. Catholics are called to trust in Christ's promise that 'the gates of hell shall not prevail' against the Church (Matthew 16:18). Stay close to the sacraments, study the faith, and maintain unity with your bishop and the Pope."
                          }
                        ]} />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                How do you fit into the Church's mission?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Discover your gifts and how you can contribute to the renewal of your parish community through our vocational and talents quiz.
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
