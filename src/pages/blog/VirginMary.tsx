import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function VirginMary() {
    return (
        <>
            <Helmet>
                <title>The Virgin Mary in Catholic Doctrine: Dogmas and Devotion | Guide Catholic</title>
                <meta name="description" content="Learn about the four Marian dogmas and the importance of Our Lady in salvation history. Understand why Catholics honor the Mother of God." />
                <meta name="keywords" content="virgin mary in catholic church, marian dogmas, why catholics venerate mary, our lady mother of god, immaculate conception, assumption of mary" />
                <link rel="canonical" href="https://guidecatholic.com/blog/virgin-mary/" />
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
                            <span className="text-text">The Virgin Mary</span>
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
                                    9 min read
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                The Virgin Mary in Catholic Doctrine: Dogmas and Devotion
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed">
                                "All generations will call me blessed." Understand Mary's fundamental role in God's plan and the pillars of Marian faith.
                            </p>
                        </header>

                        <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
                            <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">
                                "All generations will call me blessed" (Lk 1:48). These prophetic words of Mary in the Magnificat have been fulfilled for two thousand years. On all continents, in all languages, in all ages, the children of the Church raise their hearts to the Mother of God, finding in her refuge, consolation, and the surest path to Jesus.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Devotion to the Blessed Virgin Mary is not an optional "accessory" of Catholic faith – it is a logical and necessary consequence of the Incarnation. When God chose Mary to be the Mother of His Son, He placed her at the heart of salvation history. To ignore Mary would be to ignore God's plan. To honor her is, ultimately, to glorify the Lord for the wonders He accomplished in her.
                            </p>

                            <QuizCTA
                                title="How is your Marian devotion?"
                                description="Mary is the Mother of God and our intercessor in Heaven. Take our spiritual quiz and discover how Our Lady's presence can transform your journey of faith and love for Jesus."
                            />

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                The Four Marian Dogmas
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                The Catholic Church professes four fundamental truths about Mary, solemnly defined over the centuries. These are not human "inventions," but explications of the faith the Church has always professed since the Apostles:
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                1. Divine Motherhood (Theotokos)
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Defined at the Council of Ephesus (431), this is the fundamental dogma from which all others derive. Mary is truly the Mother of God – not because she is prior to God or generated the divine nature, but because the One she conceived by the Holy Spirit is truly God. Jesus is not two persons (one divine and one human), but a single divine Person with two natures. And Mary is the Mother of that Person.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                2. Perpetual Virginity
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                The Church professes that Mary was a virgin before childbirth (conceiving Jesus by the power of the Holy Spirit), during childbirth (giving birth miraculously), and after childbirth (remaining a virgin throughout her life). This virginity is not a limitation, but a sign of her total surrender to God and of divine initiative in the Incarnation.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                3. Immaculate Conception
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Proclaimed by Pope Pius IX in 1854, this dogma affirms that Mary, from the first instant of her conception, was preserved immune from all stain of original sin, by a singular grace and privilege of God, in view of the merits of Jesus Christ, Savior of the human race.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Four years after the definition of the dogma, Our Lady appeared in Lourdes to Saint Bernadette and confirmed: "I am the Immaculate Conception."
                            </p>

                            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                                4. Assumption into Heaven
                            </h3>
                            <p className="text-text leading-relaxed mb-6">
                                Defined by Pope Pius XII in 1950, this dogma teaches that the Immaculate Mother of God, the ever Virgin Mary, having completed the course of her earthly life, was assumed body and soul into heavenly glory. Mary did not have to wait for the final resurrection – she already enjoys, in glorified body, eternal blessedness.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Veneration, not Adoration
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                It is fundamental to distinguish: we adore only God (latria). To Mary and the saints, we give veneration (dulia). In Mary's case, because of her unique dignity as Mother of God, we give a special veneration called hyperdulia – superior to that of other saints, but infinitely inferior to the adoration due only to God.
                            </p>
                            <p className="text-text leading-relaxed mb-6">
                                Mary is not a "goddess" nor an intermediary who distances us from Jesus. On the contrary, she is the shortest path to reach Him. At the Wedding at Cana, she told the servants: "Do whatever He tells you" (Jn 2:5). This is Mary's mission: to point to Jesus, to lead us to Jesus, to form Jesus in us.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                                Mary, Our Mother
                            </h2>
                            <p className="text-text leading-relaxed mb-6">
                                From the height of the Cross, Jesus gave us Mary as Mother. To the beloved disciple – who represents each of us – He said: "Behold, your mother" (Jn 19:27). And to Mary: "Woman, behold, your son." From that hour, the disciple took her into his home. And we, do we welcome Mary into our life?
                            </p>

                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                                <p className="text-text italic text-center">
                                    "Of Mary, one can never say enough."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Saint Bernard of Clairvaux
                                </p>
                            </div>

                            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                                <p className="text-text italic text-center">
                                    "He who does not have Mary for Mother, does not have God for Father."
                                </p>
                                <p className="text-text-muted text-center mt-2">
                                    — Saint Cyprian of Carthage
                                </p>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="virgin-mary" />

                        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
                            <h3 className="font-display text-2xl font-bold text-text mb-4">
                                How is your Marian devotion?
                            </h3>
                            <p className="text-text-muted mb-6">
                                Discover how Mary's presence can transform your faith journey through our spiritual quiz.
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
