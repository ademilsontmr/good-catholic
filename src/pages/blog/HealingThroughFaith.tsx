import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HeartPulse, Calendar, Clock, ArrowLeft, Heart, Cross, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function HealingThroughFaith() {
  return (
    <>
      <Helmet>
        <title>Healing Through Faith: Catholic Prayers for Physical and Emotional Recovery | Guide Catholic</title>
        <meta name="description" content="Discover how faith brings healing. Learn Catholic prayers for healing, the ministry of the sick, sacraments of healing, and biblical foundations for divine healing." />
        <meta name="keywords" content="healing through faith, catholic healing prayers, divine healing, sacrament of anointing, prayer for healing, faith and healing" />
        <link rel="canonical" href="https://guidecatholic.com/blog/healing-through-faith/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Healing Through Faith: Catholic Prayers for Physical and Emotional Recovery"
          description="Discover how faith brings healing. Learn Catholic prayers for healing, the ministry of the sick, sacraments of healing, and biblical foundations for divine healing."
          url="https://guidecatholic.com/blog/healing-through-faith/"
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
              <span className="text-text">Healing Through Faith</span>
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
                  Spiritual Healing
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  13 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Healing Through Faith: Catholic Prayers for Physical and Emotional Recovery
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Faith has always been a source of healing. From Jesus' miracles in the Gospels to the sacraments of the Church today, discover how Catholic faith offers profound healing for body, mind, and soul.
              </p>
            </header>

            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
              <Sparkles className="w-24 h-24 text-rose-400/20 absolute top-4 right-4" />
              <HeartPulse className="w-32 h-32 text-rose-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="healing-through-faith">
                Faith has always been a source of healing. From Jesus' miracles in the Gospels to the sacraments of the Church today, discover how Catholic faith offers profound healing for body, mind, and soul.
              </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Biblical Foundation of Healing
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="healing-through-faith">
              Throughout Scripture, God reveals Himself as the Divine Healer. The name "Jehovah Rapha" (The Lord Who Heals) appears in Exodus 15:26. Jesus' ministry was marked by healing: "He healed all who were sick, to fulfill what was spoken through Isaiah the prophet: 'He took up our infirmities and bore our diseases'" (Matthew 8:16-17).
            </LinkedText>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="healing-through-faith">
              The Gospels record 37 distinct healing miracles of Jesus, demonstrating His compassion and power. Yet Jesus taught that physical healing points to the greater healing of salvation: "Your sins are forgiven" (Mark 2:5).
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Church's Ministry of Healing
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="healing-through-faith">
              Jesus commissioned His disciples: "Heal the sick, raise the dead, cleanse those who have leprosy, drive out demons" (Matthew 10:8). The Church continues this healing ministry through:
            </LinkedText>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Sacrament of Anointing of the Sick
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="healing-through-faith">
              This sacrament, described in James 5:14-15, offers spiritual and sometimes physical healing. The priest anoints with oil, prays over the sick person, and offers the grace to unite suffering with Christ's redemptive sacrifice.
            </LinkedText>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Sacrament of Reconciliation
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="healing-through-faith">
              Sin wounds the soul, and Confession brings healing. Many saints experienced physical healing after receiving absolution, showing the connection between spiritual and bodily health.
            </LinkedText>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Eucharist: Bread of Life
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="healing-through-faith">
              Receiving Holy Communion brings the healing presence of Christ. "Whoever eats my flesh and drinks my blood has eternal life, and I will raise them up at the last day" (John 6:54).
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Powerful Prayers for Healing
            </h2>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Prayer to St. Raphael the Archangel
            </h3>
            <p className="text-text leading-relaxed mb-6 italic bg-accent/10 p-4 rounded-lg">
              "Glorious Archangel St. Raphael, great prince of the heavenly court, you are illustrious for your gifts of wisdom and grace. You are a guide of those who journey by land or sea or air, console the afflicted and those who suffer. I ask you to intercede on behalf of [name] who is sick. Ask God to heal them if it be His will, or give them grace to accept their cross with faith. Amen."
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Novena to Our Lady of Lourdes for Healing
            </h3>
            <p className="text-text leading-relaxed mb-6 italic bg-accent/10 p-4 rounded-lg">
              "Ever immaculate Virgin Mary, Mother of Mercy, Health of the Sick, Refuge of Sinners, Comforter of the Afflicted, you know my wants, my troubles, my sufferings. Look upon me with mercy. Obtain for me, I beseech you, through your powerful intercession, healing of body and soul. Amen."
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Healing Saints and Their Intercession
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="healing-through-faith">
              The Church has raised up many saints known for healing intercession:
            </LinkedText>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li><strong>St. Padre Pio:</strong> Known for miraculous healings and the stigmata</li>
              <li><strong>St. Peregrine Laziosi:</strong> Patron saint of cancer patients</li>
              <li><strong>St. Dymphna:</strong> Patron of mental health and anxiety</li>
              <li><strong>St. Blaise:</strong> Patron of throat ailments</li>
              <li><strong>St. Rita of Cascia:</strong> Patron of impossible causes and healing</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Emotional and Mental Healing
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="healing-through-faith">
              The Church recognizes that healing extends beyond physical illness. Anxiety, depression, trauma, and emotional wounds require healing too. The Catholic approach integrates:
            </LinkedText>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li><strong>Prayer and Sacraments:</strong> Spiritual resources for peace</li>
              <li><strong>Professional Help:</strong> Catholic therapists and counselors</li>
              <li><strong>Community Support:</strong> Prayer groups and faith communities</li>
              <li><strong>Holistic Care:</strong> Addressing body, mind, and spirit</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Redemptive Suffering
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="healing-through-faith">
              Not all physical illnesses are healed in this life. The Catholic understanding of redemptive suffering, powerfully taught by St. John Paul II, teaches that we can unite our sufferings with Christ's passion for the salvation of souls.
            </LinkedText>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="healing-through-faith">
              St. Paul wrote: "Now I rejoice in my sufferings for your sake, and in my flesh I am filling up what is lacking in the afflictions of Christ on behalf of his body, which is the church" (Colossians 1:24).
            </LinkedText>

            <QuizCTA />

            <BlogFAQ
              faqs={[
                {
                  question: "Does God always heal when we pray?",
                  answer: "Not always in the way we expect. God answers prayers according to His will and wisdom. Sometimes healing comes through medical treatment, sometimes through miracles, and sometimes God gives grace to endure suffering with faith. Physical healing in this life is not guaranteed, but spiritual healing and eternal life are promised to all who believe."
                },
                {
                  question: "Should I stop medical treatment and just pray?",
                  answer: "No. The Church encourages both prayer and appropriate medical care. Medicine is a gift from God, and doctors participate in God's healing work. Seek the best medical care while also praying fervently and receiving the sacraments."
                },
                {
                  question: "How do I pray for healing for someone else?",
                  answer: "Ask saints known for healing (like St. Raphael, St. Peregrine, or Our Lady of Lourdes) to intercede. Pray with faith but also surrender to God's will. Offer Masses for the sick person, visit them with prayer and love, and encourage them to receive the Anointing of the Sick if seriously ill."
                },
                {
                  question: "Is it a lack of faith if I'm not healed?",
                  answer: "Absolutely not. Many saints lived with chronic illness and disabilities while having extraordinary faith. Lack of healing is never a sign of personal sin or insufficient faith. Trust that God works all things for good, even through suffering."
                }
              ]} />

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "He heals the brokenhearted and binds up their wounds." - Psalm 147:3
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "By his wounds we are healed." - Isaiah 53:5
                </p>
              </div>
              
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Ask and it will be given to you; seek and you will find." - Matthew 7:7
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="healing-through-faith" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Begin Your Healing Journey Today
              </h3>
              <p className="text-text-muted mb-6">
                Take our assessment and receive a personalized healing prayer guide.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Start Healing Assessment
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
