import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";

export default function WhatIsPurgatory() {
    return (
        <>
            <Helmet>
                <title>What is Purgatory? Truths of Faith | Guide Catholic</title>
                <link rel="canonical" href="https://guidecatholic.com/blog/what-is-purgatory/" />
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
                        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">What is Purgatory?</h1>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-text leading-relaxed mb-6">Purgatory is the state of those who die in God's grace but need purification.</p>
                            <QuizCTA title="Do you know the mercy of Purgatory?" description="Take our quiz and deepen your knowledge." />
                        </div>
                        <RelatedArticles currentSlug="what-is-purgatory" />

                        <BlogFAQ faqs={[
                          {
                            question: "What is Purgatory according to Catholic teaching?",
                            answer: "Purgatory is a state of final purification after death for those who die in God's grace but are not yet fully purified. It is not a second chance at salvation, but a cleansing process for those already saved, preparing them for the full joy of Heaven."
                          },
                          {
                            question: "Is Purgatory in the Bible?",
                            answer: "Yes. 2 Maccabees 12:46 speaks of praying for the dead so they may be freed from sin. Matthew 12:32 mentions sins forgiven 'in the age to come.' 1 Corinthians 3:15 describes being 'saved, but only as through fire.' The early Church universally prayed for the dead."
                          },
                          {
                            question: "How long does Purgatory last?",
                            answer: "The Church does not specify a duration. Time in Purgatory may not correspond to earthly time. Our prayers, Masses, and indulgences offered for the souls in Purgatory can shorten their purification. The Church encourages praying for the dead, especially in November."
                          },
                          {
                            question: "Can we help souls in Purgatory?",
                            answer: "Yes! We can help the Holy Souls through: offering Mass for them, praying the Rosary, gaining indulgences on their behalf, fasting, and performing works of charity. November is traditionally dedicated to praying for the souls in Purgatory."
                          },
                          {
                            question: "Do Protestants believe in Purgatory?",
                            answer: "Most Protestant denominations reject Purgatory, as it was one of the doctrines disputed during the Reformation. However, some Anglican and Lutheran theologians have expressed openness to the concept. The Catholic and Eastern Orthodox churches both affirm a state of purification after death."
                          }
                        ]} />
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}
