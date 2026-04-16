import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function TattoosCatholicChurch() {
  return (
    <>
      <Helmet>
        <title>Are Tattoos a Sin? What the Catholic Church Teaches | Guide Catholic</title>
        <meta name="description" content="Is getting a tattoo a sin in the Catholic Church? Learn what the Catechism says, understand Leviticus 19:28, and discover the Church's practical guidelines on tattoos." />
        <meta name="keywords" content="catholic tattoos, is getting a tattoo a sin, leviticus 19 28 tattoos, catholic teaching on tattoos" />
        <link rel="canonical" href="https://guidecatholic.com/blog/are-tattoos-a-sin/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Are Tattoos a Sin? What the Catholic Church Teaches"
        description="Is getting a tattoo a sin in the Catholic Church? Learn what the Catechism says, understand Leviticus 19:28, and discover the Church's practical guidelines on tattoos."
        url="https://guidecatholic.com/blog/are-tattoos-a-sin/"
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
              <span className="text-text">Tattoos and the Catholic Church</span>
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
                  Morality & Life
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  9 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Are Tattoos a Sin? What the Catholic Church Actually Teaches
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                It is one of the most common questions asked by young Catholics today. Let's look at what the Bible implies, what the Catechism says, and how to apply practical wisdom to body modifications.
              </p>
            </header>

            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
              <Shield className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                In a modern culture where tattoos are incredibly mainstream, Catholics often find themselves wondering: "Is it a sin to get a tattoo? Does it violate my body as a temple of the Holy Spirit?" 
              </p>
              <p className="text-text leading-relaxed mb-6">
                The short answer is <strong>no, getting a tattoo is not intrinsically evil or inherently sinful in the Catholic Church.</strong> There is no specific Church doctrine that outright bans tattoos. However, just because something is not strictly forbidden does not mean caution should not be exercised. The morality of a tattoo depends entirely on the intention behind it, the image depicted, and prudent judgment.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What About Leviticus 19:28?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Often, people looking to condemn tattoos will cite the Old Testament book of Leviticus: <em>"You shall not make any gashes in your flesh for the dead or tattoo any marks upon you: I am the Lord"</em> (Lev 19:28).
              </p>
              <p className="text-text leading-relaxed mb-6">
                But as Catholics, we must understand how to read Scripture in context. Leviticus 19 contains various laws given specifically to the Israelites to separate them from the pagan nations around them. The pagans of the ancient Near East often marked their bodies as signs of worship to false gods or in superstitious mourning rituals for the dead. The prohibition in Leviticus was about avoiding idolatry, not a universal moral condemnation of ink on skin. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                Under the New Covenant established by Jesus Christ, the ceremonial and ritual laws of the Old Testament are no longer binding on Christians (just as we are allowed to eat pork and mix fabrics). Therefore, Leviticus 19:28 does not strictly ban tattoos for Catholics today.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8 mt-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">A Note on the Coptic Catholics</h3>
                <p className="text-text leading-relaxed italic">
                  Interestingly, Coptic Christians in Egypt and Ethiopia have a centuries-old tradition of permanently tattooing a small cross on their inner wrists. It is a sign of immense courage and solidarity, marking them permanently as followers of Christ in regions where they could face intense persecution. This clearly demonstrates that the Church does not universally condemn tattooing.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Body as a Temple of the Holy Spirit
              </h2>
              <p className="text-text leading-relaxed mb-6">
                St. Paul reminds us: <em>"Do you not know that your body is a temple of the Holy Spirit within you...?"</em> (1 Cor 6:19). Some argue that tattoos deface this temple. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Catholic perspective is that modifying the body is not necessarily mutilating it. Think of how we decorate the walls of an actual church with beautiful stained glass and sacred art. In a similar vein, if a tattoo is beautiful and appropriately respects the dignity of the human body, it does not necessarily desecrate the temple. However, any modification of the body must be done with respect for its sacred nature.
              </p>

              <QuizCTA
                title="Are you making choices that align with your faith?"
                description="Discover how your daily life and moral decisions reflect your relationship with God by taking our spiritual journey quiz."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Three Guidelines: When Does a Tattoo Become a Sin?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                While the act of getting tattooed is morally neutral, a tattoo can become sinful if it fails on any of the following criteria:
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">1. The Content is Immoral or Demonic</h3>
              <p className="text-text leading-relaxed mb-6">
                A Catholic cannot get a tattoo that depicts something objectively evil. Tattoos of demonic imagery, satanic symbols, blasphemous themes, explicit sexual content, or anything promoting hatred, racism, or violence are inherently sinful because they scandalize others and glorify darkness.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">2. The Intention is Vain or Rebellious</h3>
              <p className="text-text leading-relaxed mb-6">
                If the sole intent of getting a tattoo is to rebel against parents, shock others, or feed an unhealthy obsession with vanity, the intent renders the act sinful. Modesty and humility should govern our choices about our bodies.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">3. Excessive Modification</h3>
              <p className="text-text leading-relaxed mb-6">
                The Catechism condemns the "mutilation" of the body. While a tattoo here or there is not mutilation, an extreme obsession with modifying the body to the point where one's natural human appearance is drastically altered crosses the line into disrespecting God's creation.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Matter of Prudence and Permanence
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Before getting a tattoo, a Catholic should exercise the virtue of prudence. Tattoos are permanent. A decision made at age 18 might not be one you appreciate at age 50. Considering the pain, the permanence, and the fact that you will carry this mark forever, it requires serious forethought.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Many modern Catholics choose tattoos of crosses, continuous Marian symbols, or favorite Bible verses as a reminder of their faith. If done modestly and with the right intention, this can be entirely permissible in the eyes of the Church.
              </p>
            </div>

            <RelatedArticles currentSlug="are-tattoos-a-sin" />

            <BlogFAQ faqs={[
              {
                question: "Is it a mortal sin to get a tattoo?",
                answer: "No, getting a standard tattoo is not a mortal sin. It is morally neutral. However, getting a tattoo of something explicitly demonic, blasphemous, or deeply hateful could constitute grave matter and thus be a mortal sin."
              },
              {
                question: "What does the Pope say about tattoos?",
                answer: "Pope Francis has actually encouraged youth ministers not to be afraid of young people with tattoos. In 2018, he said to seminarians: 'Don't be afraid of tattoos... For many young people, a tattoo is a symbol of belonging. It can be a starting point for dialogue.'"
              },
              {
                question: "Can I get a rosary tattoo?",
                answer: "Yes. Many Catholics get tattoos of rosaries, crosses, or patron saints to express their faith. Just be sure to treat the image with respect and place it modestly."
              },
              {
                question: "Will a tattoo prevent me from being buried in a Catholic cemetery?",
                answer: "Absolutely not. The Church does not deny Catholic burials to people with tattoos."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Discover How Your Faith Life Is
              </h3>
              <p className="text-text-muted mb-6">
                Take our quiz and receive a personalized assessment of your Catholic journey.
              </p>
              <Link to="/quiz-intro">
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
