import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";

export default function PrivacyPolicy() {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | Guide Catholic</title>
                <meta name="description" content="Read the Privacy Policy for Guide Catholic. Learn how we collect, use, and protect your personal information." />
                <link rel="canonical" href="https://guidecatholic.com/privacy/" />
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
                        <Link to="/quiz-intro">
                            <Button variant="secondary" size="sm">Take the Quiz</Button>
                        </Link>
                    </div>
                </header>

                <div className="bg-background-muted/50 py-3">
                    <div className="container mx-auto px-4">
                        <nav className="flex items-center gap-2 text-sm text-text-muted">
                            <Link to="/" className="hover:text-accent">Home</Link>
                            <span>/</span>
                            <span className="text-text">Privacy Policy</span>
                        </nav>
                    </div>
                </div>

                <article className="py-12">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>

                        <header className="mb-8">
                            <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Legal</span>
                                <span className="flex items-center gap-1">
                                    <ShieldCheck className="w-4 h-4" />
                                    Updated April 12, 2026
                                </span>
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Privacy Policy
                            </h1>
                        </header>

                        <div className="prose prose-lg max-w-none text-text">
                            <p className="leading-relaxed mb-6">
                                At Guide Catholic, your privacy is extremely important to us. This Privacy Policy describes the types of personal information we collect, how we use it, and the measures we take to protect it.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">1. Information We Collect</h2>
                            <p className="leading-relaxed mb-6">
                                We collect information you voluntarily provide when participating in our quiz or contacting us. This may include your name and quiz responses. We do not require account creation or email registration to use our services.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">2. How We Use Your Information</h2>
                            <p className="leading-relaxed mb-6">
                                The information collected is used to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Provide personalized quiz results and spiritual guidance.</li>
                                <li>Generate your personalized Catholic Life Guide PDF.</li>
                                <li>Respond to your questions and contact requests.</li>
                                <li>Improve user experience and website content.</li>
                            </ul>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">3. Data Storage</h2>
                            <p className="leading-relaxed mb-6">
                                Guide Catholic stores quiz data locally in your browser (localStorage). We do not transmit your quiz answers or personal information to external servers. Your data remains on your device and is not shared with third parties.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">4. Third-Party Sharing</h2>
                            <p className="leading-relaxed mb-6">
                                We do not sell, trade, or transfer your personally identifiable information to third parties. We may use trusted third-party services to help operate our website, provided those parties agree to keep this information confidential.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">5. Cookies</h2>
                            <p className="leading-relaxed mb-6">
                                We may use cookies to enhance your browsing experience. Cookies are small files that a website transfers to your device through your browser (if you allow) that enable the website's systems to recognize your browser and remember certain information. You can choose to disable cookies through your browser settings.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">6. Your Rights</h2>
                            <p className="leading-relaxed mb-6">
                                You have the right to access, correct, or delete your personal information. Since we store data locally in your browser, you can clear your browser's localStorage at any time to remove all stored data. If you have additional questions, please <Link to="/contact/" className="text-accent hover:underline">contact us</Link>.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">7. Children's Privacy</h2>
                            <p className="leading-relaxed mb-6">
                                Our website is intended for general audiences. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will promptly remove it.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">8. Changes to This Policy</h2>
                            <p className="leading-relaxed mb-6">
                                We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with a revised update date. We encourage you to review this policy periodically.
                            </p>

                            <p className="mt-12 text-sm text-text-muted italic">
                                Last updated: April 12, 2026
                            </p>
                        </div>
                    </div>
                </article>

                <Footer />
            </div>
        </>
    );
}
