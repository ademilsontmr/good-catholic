import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function ChastityModernWorld() {
    return (
        <>
            <Helmet>
                <title>Living Chastity in the Modern World: Challenges and Graces | Guide Catholic</title>
                <meta name="description" content="Understand the true meaning of Christian chastity and how to live it in today's world. An invitation to freedom and authentic love according to the Gospel." />
                <meta name="keywords" content="how to live chastity, chastity in modern world, catholic sexual purity, why be chaste, chastity before marriage, true love" />
                <link rel="canonical" href="https://guidecatholic.com/blog/chastity-modern-world/" />
            </Helmet>
        <ArticleSchema
          title="Living Chastity in the Modern World: Challenges and Graces"
          description="Understand the true meaning of Christian chastity and how to live it in today's world. An invitation to freedom and authentic love according to the Gospel."
          url="https://guidecatholic.com/blog/chastity-modern-world/"
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

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Chastity According to Your State in Life</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Chastity is not a one-size-fits-all virtue. The Church teaches that it is lived differently according to one's state in life:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-3 mb-6">
                                <li><strong>For the unmarried:</strong> Chastity means abstaining from sexual activity and cultivating purity of heart, mind, and body while preparing for marriage or discerning a vocation.</li>
                                <li><strong>For the married:</strong> Chastity means faithful, exclusive, and open-to-life love between spouses. It excludes adultery, contraception, and the use of one's spouse as a mere object of pleasure.</li>
                                <li><strong>For the consecrated:</strong> Priests, religious sisters, and brothers live chastity as celibacy — a total gift of self to God and His people, a sign of the Kingdom of Heaven.</li>
                                <li><strong>For widows and widowers:</strong> Chastity means living faithfully to the memory of their spouse while remaining open to God's will for their future.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Theology of the Body</h2>
                            <p className="text-text leading-relaxed mb-6">
                                St. John Paul II's "Theology of the Body" — a series of 129 Wednesday audiences delivered between 1979 and 1984 — is the most profound Catholic reflection on human sexuality ever written. He argued that the human body is not a prison for the soul but a sacrament — a visible sign of invisible spiritual realities. The body reveals the person, and the sexual union of husband and wife is meant to be an image of the Trinitarian love of God.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                This vision transforms how we understand chastity. It is not a negative prohibition but a positive vision: the body is made for love, and chastity protects the body's capacity to express genuine, self-giving love rather than selfish use.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Practical Steps for Living Chastity</h2>
                            <ul className="list-disc list-inside text-text space-y-3 mb-6">
                                <li><strong>Frequent Confession:</strong> The Sacrament of Penance restores grace and gives strength to resist temptation. Many saints went to Confession weekly.</li>
                                <li><strong>Daily prayer and Rosary:</strong> Our Lady is the model of purity. Ask her intercession daily.</li>
                                <li><strong>Custody of the eyes:</strong> Be intentional about what you watch, read, and look at. "The eye is the lamp of the body" (Matthew 6:22).</li>
                                <li><strong>Avoid near occasions of sin:</strong> Identify the situations, places, and relationships that lead you toward unchastity and avoid them.</li>
                                <li><strong>Internet accountability:</strong> Use filters and accountability software. Tell a trusted friend about your struggles.</li>
                                <li><strong>Cultivate deep friendships:</strong> Loneliness is one of the greatest drivers of sexual sin. Build genuine, non-romantic friendships.</li>
                                <li><strong>Physical exercise and healthy habits:</strong> A disciplined body is more easily a chaste body.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When You Fall: Starting Over</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Chastity is a virtue that must be cultivated over time, and falls are part of the journey for most people. The concept of "secondary virginity" — a renewed commitment to chastity after failure — is recognized and encouraged by the Church. God's mercy is always greater than our failures. The Sacrament of Confession is not just for forgiveness but for healing and strengthening.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                St. Augustine, who struggled deeply with sexual sin before his conversion, wrote: "Our heart is restless until it rests in You." The restlessness that drives people to sexual sin is ultimately a hunger for God — and only God can satisfy it.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"Chastity is the flower of virtues."</p>
                                <p className="text-text-muted text-center mt-2">— Saint Francis de Sales</p>
                            </div>

                            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                                <p className="text-text italic text-center">"Our heart is restless until it rests in You."</p>
                                <p className="text-text-muted text-center mt-2">— Saint Augustine</p>
                            </div>
                        </div>

                        <BlogFAQ faqs={[
                          {
                            question: "What does chastity mean in Catholic teaching?",
                            answer: "Chastity is the virtue that integrates sexuality according to one's state in life. For married couples, it means faithful, open-to-life love. For single people, it means abstinence. For consecrated religious, it means celibacy. It is not the absence of sexuality but its proper ordering."
                          },
                          {
                            question: "Is chastity only about avoiding sex?",
                            answer: "No. Chastity encompasses all aspects of sexuality — thoughts, words, and actions. It includes modesty in dress and behavior, purity of heart, custody of the eyes, and avoiding pornography. The Catechism calls chastity 'the successful integration of sexuality within the person' (CCC 2337)."
                          },
                          {
                            question: "How can I practice chastity in today's culture?",
                            answer: "Practical steps include: frequent Confession and Communion, daily prayer and Rosary, avoiding near occasions of sin, using internet filters, cultivating deep friendships, practicing custody of the eyes, and reading about the theology of the body (St. John Paul II)."
                          },
                          {
                            question: "What is the Church's teaching on pornography?",
                            answer: "The Church teaches that pornography is gravely immoral. It offends against chastity, degrades human dignity, and can create serious addiction. The Catechism states it 'does grave injury to the dignity of its participants' (CCC 2354). Confession and professional help are recommended for those struggling."
                          },
                          {
                            question: "Can someone who has failed in chastity start over?",
                            answer: "Absolutely. The virtue of chastity can always be recovered through sincere repentance and the Sacrament of Confession. The concept of 'secondary virginity' — a renewed commitment to chastity — is recognized and encouraged. God's mercy is always greater than our failures."
                          }
                        ]} />

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
