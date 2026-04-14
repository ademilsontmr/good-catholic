import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";

export default function EucharistRealPresence() {
    return (
        <>
            <Helmet>
                <title>The Eucharist: Real Presence of Jesus in Bread and Wine | Guide Catholic</title>
                <meta name="description" content="Understand the dogma of Transubstantiation and the importance of the Eucharist as source and summit of Christian life. Discover why Jesus is truly present in the Holy Host." />
                <meta name="keywords" content="real presence of jesus in eucharist, what is transubstantiation, body and blood of christ, host is jesus, blessed sacrament, catholic communion" />
                <link rel="canonical" href="https://guidecatholic.com/blog/eucharist-real-presence/" />
            </Helmet>

            <div className="min-h-screen bg-background">
                <Navbar />

        <div className="bg-background-muted/50 py-3 mt-16">
                    <div className="container mx-auto px-4">
                        <nav className="flex items-center gap-2 text-sm text-text-muted">
                            <Link to="/" className="hover:text-accent">Home</Link>
                            <span>/</span>
                            <Link to="/blog" className="hover:text-accent">Blog</Link>
                            <span>/</span>
                            <span className="text-text">The Eucharist</span>
                        </nav>
                    </div>
                </div>

                <article className="py-12">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
                            <ArrowLeft className="w-4 h-4" />Back to Blog
                        </Link>

                        <header className="mb-8">
                            <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Sacraments</span>
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />December 29, 2024</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />10 min read</span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                The Eucharist: Real Presence of Jesus in Bread and Wine
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                "This is my body." The Eucharist is not a symbol, but the living and substantial presence of Jesus Christ. Understand the mystery that has sustained the Church for two millennia.
                            </p>
                        </header>

                        <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
                            <Church className="w-24 h-24 text-violet-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                The Eucharist is the beating heart of the Catholic Church, the "sun" around which all Christian life revolves. While in other sacraments we receive God's grace, in the Eucharist we receive the Author of grace Himself – Jesus Christ in Person, with His Body, Blood, Soul, and Divinity. It is the mystery of faith par excellence, so sublime that angels prostrate themselves in adoration before the altar.
                            </p>

                            <QuizCTA
                                title="Do you believe in the Real Presence?"
                                description="The Eucharist is the heart of our faith. Take our quiz and discover how to deepen your adoration and love for Jesus in the Sacrament, living the mystery of Transubstantiation with more faith."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What is Transubstantiation?</h2>
                            <p className="text-text leading-relaxed mb-6">
                                This theological term, defined by the Council of Trent, explains the miracle that occurs at every Mass: the change of the entire substance of bread into the substance of Christ's Body and the entire substance of wine into the substance of His Blood. The "appearances" or "accidents" (taste, color, smell, form) remain the same, but the deep reality – the substance – has changed completely.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                The Catechism of the Catholic Church states: "The Council of Trent summarizes the Catholic faith by declaring: 'Because Christ our Redeemer said that it was truly his body that he was offering under the species of bread, it has always been the conviction of the Church of God, and this holy Council now declares again, that by the consecration of the bread and wine there takes place a change of the whole substance of the bread into the substance of the body of Christ our Lord and of the whole substance of the wine into the substance of his blood'" (CCC 1376).
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Biblical Foundation of the Real Presence</h2>
                            <p className="text-text leading-relaxed mb-6">
                                The Real Presence is not a medieval invention — it is rooted in the explicit words of Jesus Himself:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-3 mb-6">
                                <li><strong>John 6:51-58 (The Bread of Life Discourse):</strong> "I am the living bread that came down from heaven... Whoever eats my flesh and drinks my blood has eternal life." When many disciples left because of this teaching, Jesus did not soften His words — He let them go.</li>
                                <li><strong>Matthew 26:26-28 (The Last Supper):</strong> "This IS my body... This IS my blood." Jesus used the present tense, not "this represents" or "this symbolizes."</li>
                                <li><strong>1 Corinthians 11:27-29:</strong> St. Paul warns that eating the Eucharist unworthily is "sinning against the Body and Blood of the Lord" — language that makes no sense if the Eucharist were merely symbolic.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Eucharistic Miracles</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Throughout history, the Church has documented numerous Eucharistic miracles — extraordinary events in which the Real Presence became visible to human senses. The most famous is the Miracle of Lanciano (8th century, Italy), where the consecrated Host transformed into visible flesh and the wine into visible blood. Scientific analysis in 1970 confirmed that the flesh is human cardiac muscle tissue and the blood is type AB — the same blood type found on the Shroud of Turin.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Blessed Carlo Acutis, the young Italian who died in 2006 and was beatified in 2020, created a website cataloguing Eucharistic miracles from around the world. He said: "The Eucharist is my highway to Heaven."
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Receive Communion Worthily</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Because the Eucharist is truly Jesus Christ, the Church requires that Catholics receive Communion with proper dispositions:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-3 mb-6">
                                <li><strong>State of grace:</strong> You must not be conscious of any unconfessed mortal sin. If you are, go to Confession before receiving Communion.</li>
                                <li><strong>Eucharistic fast:</strong> Abstain from food and drink (except water and medicine) for one hour before receiving Communion.</li>
                                <li><strong>Catholic faith:</strong> You must believe in the Real Presence. Non-Catholics generally should not receive Catholic Communion.</li>
                                <li><strong>Right intention:</strong> Receive Communion to unite yourself with Christ, not out of habit or social pressure.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Effects of Holy Communion</h2>
                            <ul className="list-disc list-inside text-text space-y-3 mb-6">
                                <li><strong>Intimate union with Christ:</strong> Communion incorporates us into Jesus in a real way — "He who eats my flesh and drinks my blood abides in me, and I in him" (John 6:56)</li>
                                <li><strong>Increase of Sanctifying Grace:</strong> The Eucharist strengthens and increases divine life in the soul</li>
                                <li><strong>Remission of Venial Sins:</strong> The fire of Christ's love purifies our light faults</li>
                                <li><strong>Preservation against Mortal Sins:</strong> Frequent Communion gives us strength to resist grave temptations</li>
                                <li><strong>Pledge of eternal life:</strong> "Whoever eats my flesh and drinks my blood has eternal life, and I will raise him up at the last day" (John 6:54)</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">"The Eucharist is the shortest path to Heaven."</p>
                                <p className="text-text-muted text-center mt-2">— Saint Pius X</p>
                            </div>

                            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                                <p className="text-text italic text-center">"It would be easier for the world to survive without the sun than to do without Holy Mass."</p>
                                <p className="text-text-muted text-center mt-2">— Saint Padre Pio</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="eucharist-real-presence" />

                        <BlogFAQ faqs={[
                          {
                            question: "What is the Real Presence of Christ in the Eucharist?",
                            answer: "The Real Presence means that Jesus Christ is truly, really, and substantially present — Body, Blood, Soul, and Divinity — under the appearances of bread and wine after the Consecration at Mass. This is not symbolic; it is a literal transformation called transubstantiation."
                          },
                          {
                            question: "What is transubstantiation?",
                            answer: "Transubstantiation is the term the Church uses to describe how the bread and wine become the Body and Blood of Christ at the Consecration. The outward appearances (accidents) remain the same, but the substance is entirely changed into Christ's Body and Blood."
                          },
                          {
                            question: "How long is Jesus present in the Eucharist after Mass?",
                            answer: "Jesus remains truly present in the consecrated hosts reserved in the tabernacle for as long as the appearances of bread remain. This is why Catholics genuflect before the tabernacle and why Eucharistic Adoration is possible outside of Mass."
                          },
                          {
                            question: "What does the Bible say about the Real Presence?",
                            answer: "Jesus said clearly: 'My flesh is real food and my blood is real drink' (John 6:55). At the Last Supper He said: 'This IS my body' (Matthew 26:26). St. Paul warns that eating unworthily is 'sinning against the Body and Blood of the Lord' (1 Corinthians 11:27)."
                          },
                          {
                            question: "Why do some Christians not believe in the Real Presence?",
                            answer: "Most Protestant denominations interpret Jesus's words symbolically, a view that emerged during the Reformation in the 16th century. Catholics, Eastern Orthodox, and some Lutherans maintain the ancient Christian belief in the Real Presence, which was universal in the early Church."
                          }
                        ]} />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">Do you value the Bread of Life?</h3>
                            <p className="text-text-muted mb-6">Take our quiz and discover how your sacramental life and love for the Eucharist, the center of Christian life, are going.</p>
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
