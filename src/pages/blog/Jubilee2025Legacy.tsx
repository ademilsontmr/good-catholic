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

export default function Jubilee2025Legacy() {
    return (
        <>
            <Helmet>
                <title>The Legacy of Jubilee 2025: How to Continue Being a Pilgrim of Hope? | Guide Catholic</title>
                <meta name="description" content="The Holy Year of 2025 has ended, but its mission continues. Discover how to keep the flame of hope alive in your Christian life in 2026." />
                <meta name="keywords" content="jubilee 2025 what was it, pilgrims of hope, holy year 2025, holy door, pope francis jubilee, jubilee indulgence, how to live after jubilee, fruits of holy year, Christian hope, Catholic church 2026" />
                <link rel="canonical" href="https://guidecatholic.com/blog/jubilee-2025-legacy/" />
            </Helmet>
        <ArticleSchema
          title="The Legacy of Jubilee 2025: How to Continue Being a Pilgrim of Hope?"
          description="The Holy Year of 2025 has ended, but its mission continues. Discover how to keep the flame of hope alive in your Christian life in 2026."
          url="https://guidecatholic.com/blog/jubilee-2025-legacy/"
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
                            <span className="text-text">Jubilee 2025 Legacy</span>
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
                                    Jubilee 2025
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    January 1, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    8 min read
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                The Legacy of Jubilee 2025: How to Continue Being a Pilgrim of Hope?
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                The Holy Doors have closed, but the Christian's heart must remain open. Discover how to carry the fruits of the Holy Year into your daily life in 2026.
                            </p>
                        </header>

                        <div className="aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10">
                            <Sun className="w-24 h-24 text-yellow-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                The Jubilee of 2025, under the theme "Pilgrims of Hope," was a time of extraordinary grace for the universal Church. Millions of faithful crossed the Holy Doors, sought reconciliation, and renewed their faith. However, the end of the jubilee liturgical year does not mark the end of our journey, but the beginning of a new stage of witness.
                            </p>

                            <QuizCTA
                                title="Are you a pilgrim of hope?"
                                description="The Jubilee of 2025 left a call for each of us. Take our quiz and discover how to keep the flame of hope alive and the fruits of the Holy Year in your life."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Was the Jubilee of 2025?</h2>
                            <p className="text-text leading-relaxed mb-6">
                                The 2025 Jubilee was the 27th Ordinary Jubilee in the history of the Catholic Church, proclaimed by Pope Francis with the theme "Pilgrims of Hope." It officially opened on Christmas Eve 2024 with the opening of the Holy Door at St. Peter's Basilica in Rome and concluded on January 6, 2026, the Feast of the Epiphany.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                The theme "Pilgrims of Hope" was chosen to respond to the profound crises of our time — wars, climate change, economic inequality, and the spiritual emptiness of modern culture. Pope Francis called Catholics worldwide to be witnesses of hope: not a naive optimism, but the theological virtue rooted in Christ's Resurrection.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Holy Doors: A Symbol of Mercy</h2>
                            <p className="text-text leading-relaxed mb-6">
                                The Holy Doors at the four major basilicas in Rome — St. Peter's, St. John Lateran, St. Mary Major, and St. Paul Outside the Walls — were opened for the first time since 2000. Passing through a Holy Door while in a state of grace, having received Confession and Communion, and praying for the Pope's intentions, gains a plenary indulgence.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                For the first time in Jubilee history, Pope Francis also opened a Holy Door at a prison — the Rebibbia Prison in Rome — symbolizing that God's mercy reaches even those society has cast aside. This gesture embodied the Jubilee's call to encounter Christ in the marginalized.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Does It Mean to Be a Pilgrim in 2026?</h2>
                            <p className="text-text leading-relaxed mb-6">
                                Being a pilgrim is not limited to traveling to Rome or to a shrine. It is an interior attitude of one who knows they have no permanent dwelling here. St. Augustine wrote: "Our heart is restless until it rests in You." The pilgrim is someone who is always moving toward God, never settling for mediocrity, always seeking the face of Christ.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                In 2026, we are called to be "pilgrims in daily life" — bringing the light of hope to our workplaces, schools, and families. The Jubilee may have ended, but the mission continues.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">5 Fruits of the Jubilee to Cultivate Now</h2>
                            <ul className="list-disc list-inside text-text space-y-3 mb-6">
                                <li><strong>The Joy of Forgiveness:</strong> The experience of Plenary Indulgence should make us more merciful to others. If God has forgiven us so much, how can we withhold forgiveness from our brothers and sisters?</li>
                                <li><strong>The Centrality of Hope:</strong> In a world marked by uncertainties, the Christian is the one who points to the anchor that is Christ. Hope is not wishful thinking — it is certainty rooted in the Resurrection.</li>
                                <li><strong>The Culture of Encounter:</strong> The Jubilee taught us to walk together. This synodality must continue in our parishes — listening to one another, welcoming the stranger, building bridges rather than walls.</li>
                                <li><strong>Care for Creation:</strong> The Jubilee's ecological dimension, rooted in Laudato Si', calls us to live more simply and care for our common home as an act of justice and love.</li>
                                <li><strong>Missionary Outreach:</strong> The Jubilee renewed our sense of mission. Every Catholic is called to be an evangelist — not through aggressive proselytism, but through the witness of a joyful, transformed life.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Keep the Flame Burning</h2>
                            <p className="text-text leading-relaxed mb-6">
                                For the Jubilee not to be just a distant memory, spiritual discipline is needed. Here are concrete practices to carry the Jubilee spirit into 2026 and beyond:
                            </p>
                            <ul className="list-disc list-inside text-text space-y-2 mb-6">
                                <li>Go to Confession monthly — maintain the grace of reconciliation you received during the Jubilee</li>
                                <li>Perform one work of mercy each week — corporal or spiritual</li>
                                <li>Pray for peace daily — the Jubilee's call to peace is more urgent than ever</li>
                                <li>Read one papal document from the Jubilee period — Laudate Deum, Laudato Si', or Fratelli Tutti</li>
                                <li>Make a local pilgrimage — visit your diocesan shrine or cathedral with intention and prayer</li>
                                <li>Invite someone back to the Church — the Jubilee's spirit of welcome extends to those who have drifted away</li>
                            </ul>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Hope does not disappoint, because God's love has been poured into our hearts."
                                </p>
                                <p className="text-text-muted text-center mt-2">— Romans 5:5</p>
                            </div>

                            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                                <p className="text-text italic text-center">
                                    "A Christian is a person who has hope — not because they are optimistic by nature, but because they believe in the Resurrection."
                                </p>
                                <p className="text-text-muted text-center mt-2">— Pope Benedict XVI</p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="jubilee-2025-legacy" />

                        <BlogFAQ faqs={[
                          {
                            question: "What is a Catholic Jubilee Year?",
                            answer: "A Jubilee Year is a special year of grace proclaimed by the Pope, rooted in the Old Testament tradition (Leviticus 25). It is a time of special indulgences, pilgrimage, reconciliation, and renewal. Ordinary Jubilees occur every 25 years; Extraordinary Jubilees can be called at any time."
                          },
                          {
                            question: "What was the theme of the 2025 Jubilee?",
                            answer: "The 2025 Jubilee was proclaimed by Pope Francis with the theme 'Pilgrims of Hope.' It called Catholics worldwide to renew their hope in Christ amid the challenges of the modern world, emphasizing reconciliation, care for the poor, and ecological conversion."
                          },
                          {
                            question: "What is a Holy Door and why is it significant?",
                            answer: "Holy Doors are special doors at the four major basilicas in Rome (St. Peter's, St. John Lateran, St. Mary Major, St. Paul Outside the Walls) opened only during Jubilee Years. Passing through them while in a state of grace and fulfilling certain conditions gains a plenary indulgence."
                          },
                          {
                            question: "How can I continue living the Jubilee spirit after 2025?",
                            answer: "Continue the Jubilee spirit through: regular Confession and Communion, works of mercy, prayer for peace, care for the poor, ecological responsibility, and maintaining the pilgrim mindset — always journeying toward God. The Jubilee ends, but the call to holiness never does."
                          },
                          {
                            question: "When is the next Catholic Jubilee Year?",
                            answer: "Following the 2025 Ordinary Jubilee, the next Ordinary Jubilee would be in 2050. However, the Pope can call an Extraordinary Jubilee at any time for special occasions, as Pope Francis did in 2015-2016 with the Extraordinary Jubilee of Mercy."
                          }
                        ]} />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                How is your journey of hope?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Take our quiz and discover how you can strengthen your faith and continue living the fruits of the Jubilee in your daily life.
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
