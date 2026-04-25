import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function ChurchChangesPost2025() {
    return (
        <>
            <Helmet>
                <title>What Changes in the Church After the Holy Year of 2025? | Guide Catholic</title>
                <meta name="description" content="Analysis of perspectives and changes in the Catholic Church for 2026 after the closing of the Jubilee. What to expect from the pontificate and dioceses." />
                <meta name="keywords" content="Catholic church 2026, changes in church, pope francis, synodality, future of Catholic church, synod, laudato si, fratelli tutti, new bishops, digital Catholic evangelization" />
                <link rel="canonical" href="https://guidecatholic.com/blog/church-changes-post-2025/" />
            </Helmet>
        <ArticleSchema
          title="What Changes in the Church After the Holy Year of 2025?"
          description="Analysis of perspectives and changes in the Catholic Church for 2026 after the closing of the Jubilee. What to expect from the pontificate and dioceses."
          url="https://guidecatholic.com/blog/church-changes-post-2025/"
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
                            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="church-changes-post-2025">
                                With the closing of the Holy Doors in January 2026, the Catholic Church enters a new cycle. The Jubilee of 2025 left a deep mark on global spirituality, but now the challenge is the "pastoral of hope" — how to transform the enthusiasm of pilgrimages into lasting Christian commitment.
                            </LinkedText>

                            <QuizCTA
                                title="What is your place in the Church?"
                                description="The Church is always renewing itself and you are part of this mission. Take our quiz and discover how your gifts can help build a more vibrant and missionary community."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Church's Unchanging Foundation</h2>
                            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="church-changes-post-2025">
                                Before discussing changes, it is essential to affirm what never changes: Catholic doctrine on faith and morals is immutable. The deposit of faith — Scripture and Sacred Tradition — cannot be altered. What develops is the Church's understanding and expression of doctrine (doctrinal development), not the doctrine itself. Disciplines can change; dogmas cannot.
                            </LinkedText>
                            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="church-changes-post-2025">
                                Christ promised: "The gates of hell shall not prevail against it" (Matthew 16:18). This is not a guarantee of human perfection in the Church, but of divine protection of the truth. Catholics can navigate change with confidence because the Church's foundation is Christ, not any particular pope, bishop, or theological trend.
                            </LinkedText>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Consolidation of Synodality</h2>
                            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="church-changes-post-2025">
                                One of the great legacies of the 2021-2025 period was the Synod on Synodality — a global consultation process that asked Catholics worldwide: "How is God calling us to be a more missionary, listening Church?" In 2026, we will see the practical application of synodal guidelines in parishes: greater participation of the laity, active listening, and a more missionary and less bureaucratic Church.
                            </LinkedText>
                            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="church-changes-post-2025">
                                Synodality does not mean changing doctrine by popular vote. It means the Church listening more carefully to the Holy Spirit speaking through all the faithful — clergy, religious, and laity — while maintaining the hierarchical structure Christ established.
                            </LinkedText>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Focus on Integral Ecology and Social Justice</h2>
                            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="church-changes-post-2025">
                                Pope Francis will continue to promote the themes of Laudato Si' (2015) and Fratelli Tutti (2020). The Church's engagement with ecological and social justice issues is not a departure from the Gospel but an expression of it. Care for creation is care for the poor — those most affected by environmental degradation are always the most vulnerable.
                            </LinkedText>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Digital Evangelization and New Media</h2>
                            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="church-changes-post-2025">
                                The Church will continue to explore digital frontiers. Blessed Carlo Acutis, beatified in 2020 and canonized in 2025, is the patron of the internet — a sign that the Church embraces digital culture as a field of evangelization. Catholic podcasts, YouTube channels, social media accounts, and apps are reaching millions who would never enter a church building.
                            </LinkedText>
                            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="church-changes-post-2025">
                                The challenge is maintaining depth and authenticity in a medium that rewards superficiality. The most effective Catholic digital evangelists are those who combine genuine holiness with digital fluency — not those who simply replicate secular content with a religious veneer.
                            </LinkedText>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How Catholics Should Respond to Change</h2>
                            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="church-changes-post-2025">
                                Change in the Church can be unsettling, especially for those who love the tradition. Here is a framework for navigating change with faith and charity:
                            </LinkedText>
                            <ul className="list-disc list-inside text-text space-y-3 mb-6">
                                <li><strong>Distinguish doctrine from discipline:</strong> Doctrines (what we believe) are unchangeable. Disciplines (how we practice) can change. Know the difference.</li>
                                <li><strong>Stay close to the sacraments:</strong> Whatever changes in the Church's external life, the sacraments remain the channels of grace. Mass, Confession, and Eucharistic Adoration are your anchors.</li>
                                <li><strong>Study the faith:</strong> The Catechism of the Catholic Church is your reference point. Know what the Church actually teaches, not what media reports say it teaches.</li>
                                <li><strong>Maintain unity:</strong> Disagreement with specific decisions is possible while maintaining communion with the Church. Schism — breaking from the Church — is never the answer.</li>
                                <li><strong>Pray for the Pope and bishops:</strong> They carry an enormous burden. Pray for them daily, even when you disagree with them.</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "The Church does not grow by proselytism, but by attraction."
                                </p>
                                <p className="text-text-muted text-center mt-2">— Benedict XVI, frequently quoted by Pope Francis</p>
                            </div>

                            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                                <p className="text-text italic text-center">
                                    "The gates of hell shall not prevail against it."
                                </p>
                                <p className="text-text-muted text-center mt-2">— Jesus Christ (Matthew 16:18)</p>
                            </div>
                        </div>

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

<RelatedArticles currentSlug="church-changes-post-2025" />

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
