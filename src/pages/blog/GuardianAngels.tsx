import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";

export default function GuardianAngels() {
    return (
        <>
            <Helmet>
                <title>The Role of Guardian Angels in Our Life | Guide Catholic</title>
                <link rel="canonical" href="https://guidecatholic.com/blog/guardian-angels/" />
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
                        <Link to="/quiz"><Button variant="secondary" size="sm">Take the Quiz</Button></Link>
                    </div>
                </header>
                <article className="py-12">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">The Role of Guardian Angels in Our Life</h1>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">You are never alone. God has entrusted each of us with a heavenly companion.</p>
                            <QuizCTA title="Do you hear your Guardian Angel's voice?" description="Take our quiz." />
                        </div>
                        <RelatedArticles currentSlug="guardian-angels" />

                        <BlogFAQ faqs={[
                          {
                            question: "Does everyone have a guardian angel?",
                            answer: "Yes. The Church teaches that every human being has a guardian angel assigned by God from birth. Jesus said: 'See that you do not despise one of these little ones, for I say to you that their angels in heaven always look upon the face of my heavenly Father' (Matthew 18:10)."
                          },
                          {
                            question: "What do guardian angels do?",
                            answer: "Guardian angels protect us from physical and spiritual harm, inspire good thoughts, present our prayers to God, and accompany us at the moment of death. St. Thomas Aquinas taught that angels can influence our imagination and senses to guide us toward good."
                          },
                          {
                            question: "Can I communicate with my guardian angel?",
                            answer: "Yes, through prayer. The traditional Guardian Angel Prayer ('Angel of God, my guardian dear...') is a beautiful way to invoke your angel's protection. You can also simply speak to your angel in your own words, asking for guidance, protection, and intercession."
                          },
                          {
                            question: "When is the Feast of the Guardian Angels?",
                            answer: "The Feast of the Guardian Angels is celebrated on October 2nd. The Feast of the Archangels Michael, Gabriel, and Raphael is September 29th (Michaelmas). October is traditionally a month of special devotion to the angels."
                          },
                          {
                            question: "Are guardian angels the same as the archangels Michael, Gabriel, and Raphael?",
                            answer: "No. Michael, Gabriel, and Raphael are archangels — a higher order of angels with specific missions in salvation history. Guardian angels are personal angels assigned to each human being. The Church recognizes nine choirs of angels in the heavenly hierarchy."
                          }
                        ]} />
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}
