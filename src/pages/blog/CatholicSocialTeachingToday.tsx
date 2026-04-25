import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Globe, Calendar, Clock, ArrowLeft, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function CatholicSocialTeachingToday() {
  return (
    <>
      <Helmet>
        <title>Catholic Social Teaching Today: Applying Doctrine to Current Issues | Guide Catholic</title>
        <meta name="description" content="Discover how Catholic social teaching applies to today's challenges. Learn about poverty, immigration, ecology, and economic justice from a Catholic perspective." />
        <meta name="keywords" content="Catholic social teaching, current issues, social doctrine, poverty, immigration, ecology" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-social-teaching-today/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Catholic Social Teaching Today: Applying Doctrine to Current Issues"
          description="Discover how Catholic social teaching applies to today's challenges. Learn about poverty, immigration, ecology, and economic justice from a Catholic perspective."
          url="https://guidecatholic.com/blog/catholic-social-teaching-today/"
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
              <span className="text-text">Catholic Social Teaching Today</span>
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
                  Current Affairs
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  15 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholic Social Teaching Today: Applying Doctrine to Current Issues
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Catholic social teaching offers timeless principles for addressing contemporary challenges. From Pope Leo XIII's Rerum Novarum to Pope Francis's Laudato Si', the Church provides wisdom for navigating poverty, migration, economic inequality, and environmental crisis.
              </p>
            </header>

            <div className="aspect-video bg-green-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
              <Globe className="w-24 h-24 text-green-400/20 absolute top-4 right-4" />
              <Users className="w-32 h-32 text-green-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-social-teaching-today">
                Catholic social teaching offers timeless principles for addressing contemporary challenges. From Pope Leo XIII's Rerum Novarum to Pope Francis's Laudato Si', the Church provides wisdom for navigating poverty, migration, economic inequality, and environmental crisis.
              </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Foundations of Catholic Social Teaching
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-social-teaching-today">
              Catholic social teaching rests on several key principles: the dignity of the human person, the common good, solidarity, subsidiarity, and preferential option for the poor. These principles, developed over more than a century of papal teaching, provide a framework for evaluating political and economic systems.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Poverty and Economic Justice
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-social-teaching-today">
              Despite global economic growth, billions remain in poverty. Catholic teaching insists that economic systems exist to serve human persons, not vice versa. Pope Francis has been particularly vocal about an "economy of exclusion" that leaves the poor on the margins.
            </LinkedText>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-social-teaching-today">
              The Church does not endorse any particular economic system—neither unrestricted capitalism nor state socialism. Instead, it insists on moral limits: just wages, fair distribution of resources, and the universal destination of goods. As St. John Paul II taught, the free market must be circumscribed within a strong juridical framework that serves human dignity.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Migration and the Human Family
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-social-teaching-today">
              Global displacement has reached unprecedented levels—over 100 million people are forcibly displaced. Catholic teaching on migration begins with the recognition that all people share a common humanity and have a right to seek conditions worthy of human life.
            </LinkedText>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-social-teaching-today">
              Nations have a right to secure borders, but also an obligation to welcome strangers. Pope Francis has emphasized that migrants are not statistics but persons created in God's image. The parable of the Good Samaritan provides the model: seeing the stranger as neighbor.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Care for Our Common Home
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-social-teaching-today">
              Pope Francis's encyclical Laudato Si' (2015) placed ecological concerns firmly within Catholic social teaching. The environmental crisis is not merely technical or political—it is moral and spiritual, reflecting a broken relationship between humanity and creation.
            </LinkedText>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-social-teaching-today">
              The Church calls for an "integral ecology" that connects environmental protection with human development. The poor suffer most from environmental degradation, making ecology a justice issue. Catholics are called to live more simply and advocate for policies that protect both the poor and the planet.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Life Issues and the Seamless Garment
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-social-teaching-today">
              Cardinal Bernardin taught that Catholic moral teaching forms a "seamless garment"—consistent respect for life from conception to natural death. This includes opposition to abortion, euthanasia, the death penalty, and unjust war, alongside advocacy for the poor, migrants, and marginalized.
            </LinkedText>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-social-teaching-today">
              Some seek to prioritize certain issues over others, but Catholic teaching insists on consistency. A politician cannot claim to be "pro-life" while ignoring poverty, nor "pro-justice" while supporting abortion. The Church's moral vision is integrated and demands coherence.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Religious Freedom and the Common Good
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-social-teaching-today">
              Religious freedom is not merely freedom of worship but freedom to live faith publicly. As societies become more secular, Catholics face pressure to compartmentalize religion. The Church resists this, insisting that faith has public implications for law, culture, and policy.
            </LinkedText>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-social-teaching-today">
              At the same time, religious freedom applies to all—not just Catholics. The Church defends the right of Muslims, Jews, and others to practice their faith freely, even as she seeks to evangelize. True religious freedom includes the right to change one's religion.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Technology and Human Flourishing
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-social-teaching-today">
              Rapid technological change raises ethical questions: artificial intelligence, genetic engineering, digital surveillance. Catholic teaching evaluates technology not by capability but by contribution to human flourishing. What serves dignity and communion is good; what degrades or isolates is problematic.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Role of the Laity
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-social-teaching-today">
              Catholic social teaching is primarily the vocation of the laity, who inhabit the worlds of politics, business, and culture. The Church provides principles, but lay Catholics must apply them prudently in concrete circumstances, respecting legitimate pluralism in prudential judgments.
            </LinkedText>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-social-teaching-today">
              This means Catholics can disagree in good faith about specific policies while remaining faithful to the Church's moral framework. The challenge is to think with the Church while navigating complex political realities.
            </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Whatever you did for one of the least of these, you did for me." - Matthew 25:40
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "The Spirit of the Lord has anointed me to bring good news to the poor." - Luke 4:18
                </p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Care for God's creation is a moral obligation." - Laudato Si'
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Is Catholic social teaching conservative or liberal?",
                answer: "Neither and both. Catholic teaching defies simple political categorization. It opposes abortion and euthanasia (typically conservative positions) while supporting immigration, environmental protection, and economic redistribution (typically liberal positions). Catholics should be uncomfortable in any partisan camp, challenging both left and right when they depart from human dignity."
              },
              {
                question: "How should I vote as a Catholic?",
                answer: "The Church does not endorse candidates or parties. Form your conscience by studying Catholic social teaching, praying for wisdom, considering all issues (not just one), and voting according to well-formed conscience. No party perfectly aligns with Catholic teaching, so prudential judgment is necessary. The USCCB's Faithful Citizenship guide offers principles without partisan alignment."
              },
              {
                question: "Does the Church support capitalism or socialism?",
                answer: "Neither uncritically. The Church critiques both systems when they violate human dignity. Pure capitalism often produces unacceptable inequality; state socialism typically violates subsidiarity and personal initiative. The Church supports a market economy circumscribed by ethical limits, with strong social safety nets and respect for property rights. Economic life must serve persons, not the reverse."
              },
              {
                question: "What is the preferential option for the poor?",
                answer: "This principle, articulated by Latin American bishops and affirmed by the universal Church, means that the needs of the poor and vulnerable receive priority in economic life and policy decisions. It does not mean the poor are morally superior, but that their material needs are urgent and their voices often excluded. This option challenges Catholics to examine whom their choices serve."
              }
            ]} />

<RelatedArticles currentSlug="catholic-social-teaching-today" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Live Your Catholic Faith
              </h3>
              <p className="text-text-muted mb-6">
                Take our assessment and receive a personalized faith action guide.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Start Assessment
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
