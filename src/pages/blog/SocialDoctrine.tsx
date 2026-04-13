import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";

export default function SocialDoctrine() {
    return (
        <>
            <Helmet>
                <title>The Social Doctrine of the Church: The Catholic View on Society | Guide Catholic</title>
                <meta name="description" content="Learn the fundamental principles of the Church's Social Doctrine. Understand how Catholic faith proposes solutions to social, political, and economic challenges." />
                <meta name="keywords" content="what is church social doctrine, social doctrine principles, common good, solidarity, subsidiarity, human dignity, church and politics" />
                <link rel="canonical" href="https://guidecatholic.com/blog/social-doctrine/" />
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
                            <span className="text-text">Social Doctrine of the Church</span>
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
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />10 min read</span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                The Social Doctrine of the Church: The Catholic View on Society
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                Faith is not limited to sacristies. Discover how Catholic principles can illuminate the construction of a more just, human, and solidary society.
                            </p>
                        </header>

                        <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
                            <Users className="w-24 h-24 text-amber-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                The Social Doctrine of the Church (SDC) is the set of Church teachings on social, political, and economic realities. It is not a "third way" between capitalism and socialism, nor a political ideology, but a theological and ethical reflection that seeks to apply the Gospel message to the challenges of human coexistence.
                            </p>

                            <QuizCTA
                                title="Do you live your faith in public life?"
                                description="The Church's Social Doctrine illuminates the world's challenges. Take our quiz and discover how to apply principles of justice and solidarity in your work, family, and society."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Four Fundamental Principles</h2>
                            <p className="text-text leading-relaxed mb-6">All Social Doctrine rests on four essential pillars: Human Dignity, Common Good, Subsidiarity, and Solidarity.</p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">1. Human Dignity</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Every human being, from conception to natural death, possesses an inalienable dignity because they are created in the image and likeness of God (Genesis 1:27). This dignity is not earned by productivity, intelligence, or social status — it is inherent to every person. Catholic Social Teaching insists that no economic system, political ideology, or social arrangement may treat persons as mere means to an end.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">2. The Common Good</h3>
                            <p className="text-text leading-relaxed mb-6">
                                The common good is "the sum total of social conditions which allow people, either as groups or as individuals, to reach their fulfillment more fully and more easily" (Gaudium et Spes 26). It requires that individuals, families, associations, and the state all contribute to creating conditions where every person can flourish. The common good is not the same as the majority's preference — it includes the rights of minorities and the most vulnerable.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">3. Subsidiarity</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Subsidiarity holds that decisions should be made at the lowest appropriate level of society. What individuals can do, families should not take over. What families can do, local communities should not absorb. What local communities can do, the state should not control. This principle protects human freedom and initiative while recognizing that higher authorities must step in when lower ones cannot adequately address a need.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">4. Solidarity</h3>
                            <p className="text-text leading-relaxed mb-6">
                                Solidarity is the recognition that we are all responsible for one another. Pope John Paul II described it as "a firm and persevering determination to commit oneself to the common good." It is not mere sentiment but a moral virtue that moves us to share our goods, defend the rights of others, and work for a more just world. "We are all responsible for all" — this is the heart of solidarity.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The History of Catholic Social Teaching</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Catholic Social Teaching has a rich history of papal documents (encyclicals) addressing the social questions of each era:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li><strong>Rerum Novarum (1891) — Leo XIII:</strong> The founding document, addressing the rights of workers in the Industrial Revolution</li>
                                <li><strong>Quadragesimo Anno (1931) — Pius XI:</strong> Developed subsidiarity and critiqued both capitalism and socialism</li>
                                <li><strong>Mater et Magistra (1961) — John XXIII:</strong> Applied social principles to the modern world</li>
                                <li><strong>Pacem in Terris (1963) — John XXIII:</strong> On peace and human rights</li>
                                <li><strong>Gaudium et Spes (1965) — Vatican II:</strong> The Church in the modern world</li>
                                <li><strong>Laborem Exercens (1981) — John Paul II:</strong> On the dignity of human work</li>
                                <li><strong>Centesimus Annus (1991) — John Paul II:</strong> 100 years after Rerum Novarum</li>
                                <li><strong>Laudato Si' (2015) — Francis:</strong> Care for our common home</li>
                                <li><strong>Fratelli Tutti (2020) — Francis:</strong> On fraternity and social friendship</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Preferential Option for the Poor</h2>
                            <p className="text-text leading-relaxed mb-6">
                                One of the most distinctive elements of Catholic Social Teaching is the "preferential option for the poor." This does not mean that the poor are morally superior or that the Church ignores others. It means that in any social analysis or policy decision, the first question must be: "How does this affect the most vulnerable?" Jesus identified Himself with the poor: "Whatever you did for one of the least of these brothers and sisters of mine, you did for me" (Matthew 25:40).
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Live Catholic Social Teaching Today</h2>
                            <ul className="list-disc list-inside text-text space-y-3 mb-6">
                                <li><strong>In your workplace:</strong> Treat coworkers with dignity, pay fair wages if you are an employer, refuse to participate in unjust practices</li>
                                <li><strong>In your community:</strong> Volunteer at food banks, advocate for just housing policies, support local businesses</li>
                                <li><strong>In your politics:</strong> Vote according to Catholic principles, prioritizing life, dignity, and the common good over party loyalty</li>
                                <li><strong>In your consumption:</strong> Choose fair trade products, reduce waste, support companies with ethical practices</li>
                                <li><strong>In your family:</strong> Practice hospitality, share your resources, teach children to care for the poor</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Social and political charity is not a sentiment, but a virtue."</p>
                                <p className="text-text-muted text-center mt-2">— Pope Francis (Fratelli Tutti)</p>
                            </div>

                            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                                <p className="text-text italic text-center">"The Church's social teaching is a rich treasure of wisdom about building a just society and living lives of holiness amidst the challenges of modern society."</p>
                                <p className="text-text-muted text-center mt-2">— United States Conference of Catholic Bishops</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="social-doctrine" />

                        <BlogFAQ faqs={[
                          {
                            question: "What is Catholic Social Doctrine?",
                            answer: "Catholic Social Doctrine (CSD) is the body of Church teaching on social, economic, and political matters. It is rooted in Scripture and natural law, developed through papal encyclicals since Leo XIII's Rerum Novarum (1891). Its core principles include human dignity, solidarity, subsidiarity, and the common good."
                          },
                          {
                            question: "What are the main principles of Catholic Social Teaching?",
                            answer: "The key principles are: Human Dignity (every person has inherent worth), Common Good (society must serve all), Subsidiarity (decisions at the lowest appropriate level), Solidarity (we are responsible for one another), Preferential Option for the Poor, and Care for Creation."
                          },
                          {
                            question: "Does the Church support capitalism or socialism?",
                            answer: "Neither exclusively. The Church rejects both unbridled capitalism (which ignores the poor) and Marxist socialism (which denies private property and religious freedom). Catholic Social Teaching proposes a 'third way' centered on human dignity, just wages, and the universal destination of goods."
                          },
                          {
                            question: "What does the Church say about workers' rights?",
                            answer: "The Church strongly defends workers' rights: the right to a just wage, safe working conditions, rest, and the right to form unions. Leo XIII's Rerum Novarum (1891) was the first major social encyclical defending workers against exploitation by both capital and the state."
                          },
                          {
                            question: "How can ordinary Catholics live Catholic Social Teaching?",
                            answer: "Through: voting according to Catholic principles, supporting fair trade, volunteering at food banks and shelters, advocating for just laws, treating employees and coworkers with dignity, supporting Catholic charities, and living simply to share with those in need."
                          }
                        ]} />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Do you live your faith in society?</h3>
                            <p className="text-text-muted mb-6">Take our quiz and discover how you can be salt of the earth and light of the world in your work environment and community.</p>
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
