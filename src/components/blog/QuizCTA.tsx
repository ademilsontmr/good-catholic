import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface QuizCTAProps {
    title?: string;
    description?: string;
}

export function QuizCTA({
    title = "How is your faith journey?",
    description = "Many Catholics feel they could live their faith more deeply, but don't know where to start. Take our quiz and receive personalized guidance for your spiritual life."
}: QuizCTAProps) {
    return (
        <div className="my-12 p-8 bg-gradient-to-br from-accent/15 via-accent/5 to-primary/10 rounded-2xl border border-accent/20 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sparkles className="w-24 h-24 text-accent" />
            </div>

            <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold text-text mb-3">
                    {title}
                </h3>
                <p className="text-text-muted mb-6 max-w-2xl">
                    {description}
                </p>
                <Link to="/quiz">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-button-text font-bold px-8 shadow-lg shadow-accent/20 transition-all hover:scale-105">
                        Take the Quiz Now
                    </Button>
                </Link>
            </div>
        </div>
    );
}
