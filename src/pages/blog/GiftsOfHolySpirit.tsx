import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";

export default function GiftsOfHolySpirit() {
    return (
        <>
            <Helmet>
                <title>The Gifts of the Holy Spirit: How to Identify and Use Them | Guide Catholic</title>
                <meta name="description" content="Learn about the seven gifts of the Holy Spirit and how they work in your life to guide you on the path of holiness and service to others." />
                <meta name="keywords" content="what are the seven gifts of the holy spirit, gift of wisdom, gift of understanding, gift of counsel, gift of fortitude, gift of knowledge, gift of piety, gift of fear of the lord" />
                <link rel="canonical" href="https://guidecatholic.com/blog/gifts-holy-spirit/" />
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
                            <span className="text-text">The Gifts of the Holy Spirit</span>
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
                                    April 15, 2026
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    10 min read
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                The Gifts of the Holy Spirit and How They Work in Our Lives
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                The Holy Spirit is the "Sweet Guest of the Soul." Discover how His seven gifts transform our intelligence and will to live as true children of God.
                            </p>
                        </header>

                        <div className="aspect-video bg-orange-100 rounded-2xl flex items-center justify-center mb-10">
                            <Flame className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                On the day of our Baptism, and fully at Confirmation, we receive the Holy Spirit with His seven gifts. They are not natural talents, but supernatural dispositions that make man docile to follow divine inspirations. They are like the sails of a boat that, when opened, allow the breath of the Spirit to lead us to the high seas of holiness. Many Catholics receive these gifts and never use them – it is like having a treasure buried in the backyard and never digging to find it.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                The Seven Gifts Explained
                            </h2>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                1. Wisdom
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                It is not the accumulation of knowledge, but the "taste" for the things of God. The gift of Wisdom allows us to see the world, people, and events through God's eyes. When you have wisdom, you understand that riches pass, that fame is vain, that what really matters is friendship with God.
                            </p>

                            <QuizCTA
                                title="Do you know the gifts you received at Confirmation?"
                                description="The Holy Spirit empowers us with His seven gifts. Take our quiz and discover which of these gifts you most need to cultivate right now to grow in holiness and service."
                            />

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                2. Understanding (or Intelligence)
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Helps us penetrate the deep meaning of revealed truths and the mysteries of faith, going beyond appearances. When you have understanding, you can comprehend why the Church teaches what it teaches, why the sacraments are so important, why Catholic morality leads to true happiness.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                3. Counsel
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                It is the light the Spirit gives us to discern what is right to do in complex life situations, always choosing the path that most pleases God. When you are in doubt about an important decision, the gift of Counsel enlightens you to choose well.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                4. Fortitude
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Gives us the courage and perseverance necessary to face difficulties, persecutions, and temptations, keeping us faithful to Christ until the end. It is the gift that allows the martyr to face death with joy, the young person to resist peer pressure, the Christian to remain faithful in times of crisis.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                5. Knowledge
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Allows us to judge created things rightly, seeing in them the reflection of the Creator and not transforming them into idols. With the gift of Knowledge, you see the beauty of a flower and praise the Creator; you see technology and use it for good, not for evil.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                6. Piety
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Heals our heart from hardness and gives us a filial affection for God and sincere fraternity toward our neighbor. It is the gift that makes us love God as a child loves their father, and that makes us serve our neighbor with tenderness.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                7. Fear of the Lord
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                It is not fear of punishment, but the loving fear of offending God, who is our Father and loves us infinitely. It is the beginning of true wisdom. When you have fear of the Lord, you avoid sin not out of fear of hell, but because you do not want to hurt the One who loves you.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                How to Cultivate the Presence of the Spirit?
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                The Holy Spirit is a divine person with whom we can and should converse. Ask daily: "Come, Holy Spirit!" Remain in a state of grace through frequent confession and seek interior silence to hear His movements. The more you open yourself to the gifts of the Spirit, the more He acts in you, transforming you into an instrument of His will.
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "The Holy Spirit is the interior master who leads us to the full truth."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Saint John Paul II
                                </p>
                            </div>

                            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                                <p className="text-text italic text-center">
                                    "Come, Holy Spirit, fill the hearts of your faithful and kindle in them the fire of your love."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Pentecost Sequence
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="gifts-holy-spirit" />

                        <BlogFAQ faqs={[
                          {
                            question: "What are the 7 gifts of the Holy Spirit?",
                            answer: "The seven gifts are: Wisdom, Understanding, Counsel, Fortitude, Knowledge, Piety, and Fear of the Lord. They are given at Baptism and strengthened at Confirmation, enabling us to respond readily to God's grace."
                          },
                          {
                            question: "How are the gifts of the Holy Spirit different from the fruits?",
                            answer: "The gifts are supernatural dispositions that help us act according to God's will. The fruits (love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control) are the visible results of living by the gifts. Gifts are the roots; fruits are what grows from them."
                          },
                          {
                            question: "Can I lose the gifts of the Holy Spirit?",
                            answer: "Mortal sin causes the loss of sanctifying grace and weakens the gifts. The gifts are restored through sincere repentance and the Sacrament of Confession. Venial sin does not remove the gifts but can diminish their effectiveness in our lives."
                          },
                          {
                            question: "Which gift of the Holy Spirit is most important?",
                            answer: "Wisdom is considered the highest gift because it enables us to judge all things from God's perspective. However, all seven gifts work together and are equally necessary for a complete Christian life. Fear of the Lord is the beginning of wisdom (Proverbs 9:10)."
                          },
                          {
                            question: "How do I grow in the gifts of the Holy Spirit?",
                            answer: "Growth in the gifts comes through prayer, frequent reception of the sacraments, reading Scripture, practicing virtue, and openness to the Holy Spirit. Ask the Holy Spirit daily to activate His gifts in you. The Novena to the Holy Spirit before Pentecost is especially powerful."
                          }
                        ]} />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                Do you know the fruits of the Spirit in your life?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Take our quiz and discover how the gifts of the Holy Spirit are working in your faith journey and how you can open yourself more to His grace.
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
