import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";

export default function TermsOfUse() {
    return (
        <>
            <Helmet>
                <title>Terms of Use | Guide Catholic</title>
                <meta name="description" content="Read the Terms of Use for Guide Catholic. Understand the rules and guidelines for using our content and services." />
                <link rel="canonical" href="https://guidecatholic.com/terms/" />
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
                            <span className="text-text">Terms of Use</span>
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
                                    <FileText className="w-4 h-4" />
                                    Updated April 12, 2026
                                </span>
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                                Terms of Use
                            </h1>
                        </header>

                        <div className="prose prose-lg max-w-none text-text">
                            <p className="leading-relaxed mb-6">
                                Welcome to Guide Catholic. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use. If you do not agree with any part of these terms, please do not use our website.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">1. Acceptance of Terms</h2>
                            <p className="leading-relaxed mb-6">
                                Use of this website constitutes full and unreserved acceptance of all terms and conditions set forth herein. We reserve the right to modify these terms at any time without prior notice. We recommend periodic review of this page.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">2. Intellectual Property</h2>
                            <p className="leading-relaxed mb-6">
                                All content on this website, including texts, graphics, logos, icons, images, and software, is the property of Guide Catholic or its content providers and is protected by applicable copyright laws. Reproduction, distribution, or modification of any content without prior written authorization is strictly prohibited.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">3. Use of Content</h2>
                            <p className="leading-relaxed mb-6">
                                The content of this website is provided for informational and spiritual formation purposes only. You may view, download, and print portions of the content for your personal, non-commercial use, provided you keep intact all copyright notices and other proprietary notices.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">4. Disclaimer of Warranties</h2>
                            <p className="leading-relaxed mb-6">
                                While we strive to provide accurate and up-to-date information, Guide Catholic makes no warranties regarding the accuracy, completeness, or suitability of the information contained on this website. Use of the information is at your own risk. We are not responsible for any direct or indirect damages arising from the use or inability to use this website.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">5. Third-Party Links</h2>
                            <p className="leading-relaxed mb-6">
                                Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those websites and assume no responsibility for them or for any loss or damage that may arise from your use of them.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">6. Privacy</h2>
                            <p className="leading-relaxed mb-6">
                                Use of this website is also governed by our <Link to="/privacy/" className="text-accent hover:underline">Privacy Policy</Link>, which describes how we collect, use, and protect your personal information.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">7. Governing Law</h2>
                            <p className="leading-relaxed mb-6">
                                These terms are governed by and construed in accordance with applicable laws. Any dispute arising from these terms will be subject to the exclusive jurisdiction of the competent courts.
                            </p>

                            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">8. Contact</h2>
                            <p className="leading-relaxed mb-6">
                                If you have any questions about these Terms of Use, please <Link to="/contact/" className="text-accent hover:underline">contact us</Link>.
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
