import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft, Sparkles, Star, Users, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function CatholicDatingGuide() {
  return (
    <>
      <Helmet>
        <title>Catholic Dating: Complete Guide to Courtship and Marriage Preparation | Guide Catholic</title>
        <meta name="description" content="Discover the Catholic approach to dating and courtship. Learn how to date with intention, prepare for marriage, and build relationships that honor God and each other." />
        <meta name="keywords" content="catholic dating, christian courtship, catholic marriage preparation, catholic relationships, dating with purpose, chaste dating, catholic dating rules, discerning marriage" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-dating-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Catholic Dating: Complete Guide to Courtship and Marriage Preparation"
          description="Discover the Catholic approach to dating and courtship. Learn how to date with intention, prepare for marriage, and build relationships that honor God and each other."
          url="https://guidecatholic.com/blog/catholic-dating-guide/"
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
              <span className="text-text">Catholic Dating Guide</span>
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
                  Relationships & Family
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  20 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholic Dating: Dating with Purpose and Intention
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                In a world of casual dating and swipe-right culture, Catholic dating stands apart with its focus on intention, discernment, and the ultimate goal of marriage. Dating isn't about entertainment - it's about discovering if God is calling you to spend your life with someone.
              </p>
            </header>

            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
              <Heart className="w-24 h-24 text-rose-400/20 absolute top-4 right-4" />
              <Users className="w-32 h-32 text-rose-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Catholic dating is fundamentally different from secular dating. While the world often focuses on physical attraction and temporary pleasure, Catholic dating centers on discernment, virtue, and the possibility of a lifelong vocation to marriage. It's a journey of discovering whether God has brought someone into your life for a sacred purpose.
              </p>
              
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Foundation: Understanding Catholic Dating
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Catholic Church teaches that marriage is a sacrament - a sacred sign that gives grace. Because marriage is so important, dating must be approached with reverence, prayer, and serious discernment.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Key Principles of Catholic Dating
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Purpose:</strong> Dating is for discerning marriage, not entertainment</li>
                <li><strong>Chastity:</strong> Physical intimacy is reserved for marriage</li>
                <li><strong>Prayer:</strong> Discernment requires prayer and spiritual guidance</li>
                <li><strong>Community:</strong> Dating should involve family and community</li>
                <li><strong>Virtue:</strong> Relationships should build character and holiness</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                When to Start Dating
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Church doesn't set a specific age for dating, but provides principles for readiness:
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Signs of Readiness
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Emotional Maturity:</strong> Ability to handle emotions responsibly</li>
                <li><strong>Spiritual Foundation:</strong> Strong prayer life and moral compass</li>
                <li><strong>Life Direction:</strong> Clear sense of life goals and vocation</li>
                <li><strong>Financial Independence:</strong> Ability to support oneself and potentially a family</li>
                <li><strong>Family Support:</strong> Good relationship with parents and family</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                When to Wait
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>If you're still in high school or early college</li>
                <li>If you're dealing with serious emotional issues</li>
                <li>If you're not spiritually ready</li>
                <li>If you lack emotional maturity</li>
                <li>If you're not financially stable</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Finding the Right Person
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Catholic dating isn't about finding the "perfect" person - it's about finding the right person for you in God's plan.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Essential Qualities to Look For
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Shared Faith:</strong> Similar commitment to Catholic faith and values</li>
                <li><strong>Moral Character:</strong> Virtue, integrity, and moral consistency</li>
                <li><strong>Emotional Health:</strong> Ability to handle conflict and stress</li>
                <li><strong>Life Goals:</strong> Compatible visions for life, family, and career</li>
                <li><strong>Respect:</strong> Treats you with dignity and respect</li>
                <li><strong>Growth:</strong> Desire for personal and spiritual growth</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Red Flags to Watch For
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Controlling Behavior:</strong> Tries to control your choices and relationships</li>
                <li><strong>Dishonesty:</strong> Lies about important matters</li>
                <li><strong>Disrespect:</strong> Treats you poorly or dismisses your feelings</li>
                <li><strong>Addiction Issues:</strong> Unaddressed substance abuse or behavioral problems</li>
                <li><strong>Anger Problems:</strong> Uncontrolled anger or violence</li>
                <li><strong>Financial Irresponsibility:</strong> Poor financial decisions or habits</li>
              </ul>

              <QuizCTA
                title="Are you ready for Catholic dating?"
                description="Take our assessment to evaluate your readiness for Catholic dating and courtship."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Dating Process: From First Date to Engagement
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Catholic dating follows a natural progression from getting to know someone to discerning marriage.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Phase 1: Initial Contact and First Dates
              </h3>
              <p className="text-text leading-relaxed mb-6">
                The beginning of dating is about getting to know someone in a safe, public environment:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Group Settings:</strong> Start with group activities or double dates</li>
                <li><strong>Public Places:</strong> Meet in public, safe locations</li>
                <li><strong>Short Dates:</strong> Keep first dates short (1-2 hours)</li>
                <li><strong>Conversation:</strong> Focus on getting to know the person</li>
                <li><strong>Prayer:</strong> Pray for discernment after each date</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Phase 2: Getting to Know Each Other
              </h3>
              <p className="text-text leading-relaxed mb-6">
                As you continue dating, you'll spend more time together and get to know each other more deeply:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Family Introduction:</strong> Introduce to family and friends</li>
                <li><strong>Shared Activities:</strong> Participate in each other's interests</li>
                <li><strong>Spiritual Activities:</strong> Attend Mass together, pray together</li>
                <li><strong>Life Experience:</strong> See how they handle stress and challenges</li>
                <li><strong>Values Discussion:</strong> Talk about important life issues</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Phase 3: Serious Discernment
              </h3>
              <p className="text-text leading-relaxed mb-6">
                When you're considering marriage, serious discernment begins:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Marriage Preparation:</strong> Take marriage prep classes</li>
                <li><strong>Spiritual Direction:</strong> Seek guidance from a priest or spiritual director</li>
                <li><strong>Family Blessing:</strong> Get blessing from both families</li>
                <li><strong>Practical Planning:</strong> Discuss finances, careers, living situations</li>
                <li><strong>Engagement:</strong> Formal commitment to marry</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Chastity in Dating: Honoring Each Other
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Chastity is central to Catholic dating. It's not about restrictions - it's about honoring each other as temples of the Holy Spirit.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Practical Guidelines for Chaste Dating
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>No Overnight Visits:</strong> Avoid situations that lead to temptation</li>
                <li><strong>Appropriate Physical Contact:</strong> Hand-holding, brief hugs, light kisses</li>
                <li><strong>Dress Modestly:</strong> Respect each other with modest dress</li>
                <li><strong>Avoid Temptation:</strong> Don't put yourselves in tempting situations</li>
                <li><strong>Accountability:</strong> Have friends who hold you accountable</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                The Beauty of Chastity
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Chastity isn't about saying "no" to physical intimacy - it's about saying "yes" to authentic love. Chaste dating builds relationships based on character, communication, and emotional intimacy rather than physical attraction alone.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Communication in Catholic Dating
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Good communication is essential for healthy Catholic dating relationships.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Important Conversations
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Faith and Prayer Life:</strong> How you each relate to God</li>
                <li><strong>Family Background:</strong> Family dynamics and expectations</li>
                <li><strong>Life Goals:</strong> Career, education, family plans</li>
                <li><strong>Past Experiences:</strong> Previous relationships and lessons learned</li>
                <li><strong>Struggles and Weaknesses:</strong> Personal challenges and growth areas</li>
                <li><strong>Expectations:</strong> What you each expect from marriage</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Communication Guidelines
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Be Honest:</strong> Share your true thoughts and feelings</li>
                <li><strong>Be Respectful:</strong> Listen without judgment</li>
                <li><strong>Be Patient:</strong> Give each other time to process</li>
                <li><strong>Be Clear:</strong> Express needs and boundaries clearly</li>
                <li><strong>Be Prayerful:</strong> Pray before difficult conversations</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Role of Family and Community
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Catholic dating doesn't happen in isolation. Family and community play important roles.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Family Involvement
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Parental Guidance:</strong> Parents should meet dating partners</li>
                <li><strong>Family Activities:</strong> Include partners in family life</li>
                <li><strong>Respect Boundaries:</strong> Parents should allow appropriate autonomy</li>
                <li><strong>Wisdom and Experience:</strong> Parents offer valuable perspective</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Community Support
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Parish Community:</strong> Catholic friends and groups</li>
                <li><strong>Mentor Couples:</strong> Married couples who can guide you</li>
                <li><strong>Spiritual Directors:</strong> Priests or religious for guidance</li>
                <li><strong>Accountability Groups:</strong> Friends who support your chastity</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Dealing with Common Challenges
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Catholic dating isn't always easy. Here are common challenges and how to handle them:
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                When Family Disapproves
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Family disapproval is difficult but not necessarily a deal-breaker:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Listen to Concerns:</strong> Understand their perspective</li>
                <li><strong>Provide Information:</strong> Help them know your partner</li>
                <li><strong>Seek Wisdom:</strong> Consult trusted mentors or priests</li>
                <li><strong>Pray Together:</strong> Ask for God's guidance</li>
                <li><strong>Respect Authority:</strong> Honor parents while seeking truth</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                When You're Not Sure
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Uncertainty is normal in dating:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Take Your Time:</strong> Don't rush decisions</li>
                <li><strong>Pray for Clarity:</strong> Ask God for guidance</li>
                <li><strong>Talk to Someone:</strong> Share concerns with trusted mentor</li>
                <li><strong>Step Back if Needed:</strong> Take a break to pray and reflect</li>
                <li><strong>Trust God's Timing:</strong> God's plan is always perfect</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                When Relationships End
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Breakups are painful but part of dating:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Be Kind:</strong> End with respect and charity</li>
                <li><strong>Be Clear:</strong> Communicate honestly about reasons</li>
                <li><strong>Take Time:</strong> Allow time for healing</li>
                <li><strong>Learn and Grow:</strong> Reflect on lessons learned</li>
                <li><strong>Trust God:</strong> God's plan includes your happiness</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Moving Toward Engagement
              </h2>
              <p className="text-text leading-relapsed mb-6">
                When you discern that God is calling you to marriage, engagement is the next step.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Signs You're Ready for Engagement
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Peace About the Decision:</strong> You feel at peace about marrying</li>
                <li><strong>Freedom to Choose:</strong> You're choosing freely, not under pressure</li>
                <li><strong>Readiness for Commitment:</strong> You're ready for lifelong commitment</li>
                <li><strong>Supportive Community:</strong> Family and friends support the relationship</li>
                <li><strong>Spiritual Unity:</strong> You share faith and prayer life</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                The Engagement Period
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Marriage Preparation:</strong> Take formal marriage prep classes</li>
                <li><strong>Practical Planning:</strong> Plan wedding, housing, finances</li>
                <li><strong>Deepening Intimacy:</strong> Grow in emotional and spiritual intimacy</li>
                <li><strong>Community Celebration:</strong> Share your joy with family and friends</li>
                <li><strong>Spiritual Preparation:</strong> Prepare spiritually for marriage</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Catholic Dating in the Modern World
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Catholic dating faces unique challenges in today's culture:
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Dating Apps and Online Dating
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Catholic Apps:</strong> Use Catholic-focused dating apps when possible</li>
                <li><strong>Clear Profiles:</strong> Be honest about your faith and values</li>
                <li><strong>Intentional Swiping:</strong> Only swipe if genuinely interested</li>
                <li><strong>Quick Meeting:</strong> Meet in person relatively quickly</li>
                <li><strong>Vet Carefully:</strong> Check profiles for red flags</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Navigating Secular Culture
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Be Counter-Cultural:</strong> Stand for Catholic values</li>
                <li><strong>Find Community:</strong> Connect with other Catholic singles</li>
                <li><strong>Set Boundaries:</strong> Clearly state your dating standards</li>
                <li><strong>Be Confident:</strong> Don't apologize for Catholic values</li>
                <li><strong>Be Patient:</strong> The right person will appreciate your values</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Building a Foundation for Marriage
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Catholic dating is ultimately about building a foundation for a sacramental marriage.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Spiritual Foundation
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Shared Prayer Life:</strong> Pray together regularly</li>
                <li><strong>Sacramental Life:</strong> Attend Mass and receive sacraments together</li>
                <li><strong>Saint Devotion:</strong> Develop devotion to patron saints</li>
                <li><strong>Service Together:</strong> Serve in your parish or community</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Emotional Foundation
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Emotional Intimacy:</strong> Share feelings and vulnerabilities</li>
                <li><strong>Conflict Resolution:</strong> Learn to fight fair and forgive</li>
                <li><strong>Support System:</strong> Be each other's biggest cheerleader</li>
                <li><strong>Growth Mindset:</strong> Commit to growing together</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Practical Foundation
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Financial Responsibility:</strong> Manage money wisely</li>
                <li><strong>Life Skills:</strong> Learn essential life skills together</li>
                <li><strong>Home Management:</strong> Share household responsibilities</li>
                <li><strong>Career Support:</strong> Support each other's careers</li>
              </ul>

              <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "The vocation to marriage is a call to love and serve one another as Christ loves and serves the Church."
                </p>
                <p className="text-text-muted text-center mt-2">
                  - United States Conference of Catholic Bishops
                </p>
              </div>
              
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "The family is the domestic Church. It is in the family that one first learns to pray and to live the faith."
                </p>
                <p className="text-text-muted text-center mt-2">
                  - Catechism of the Catholic Church 2226
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="catholic-dating-guide" />

            <BlogFAQ faqs={[
              {
                question: "How long should I date before getting engaged?",
                answer: "There's no set timeline, but most Catholic couples date 1-2 years before engagement. Take enough time to truly know each other and discern God's will for your relationship."
              },
              {
                question: "Is it okay to date non-Catholics?",
                answer: "Possible but challenging. The 'disparity of cult' (difference of faith) is a serious obstacle. Both partners must agree on how to raise children and practice faith. Requires serious discernment and often special permission for mixed marriages."
              },
              {
                question: "What physical contact is appropriate in Catholic dating?",
                answer: "Generally, hand-holding, brief hugs, and light kisses are appropriate. The focus should be on emotional and spiritual intimacy rather than physical. Avoid situations that lead to temptation to sin."
              },
              {
                question: "How do I know if someone is 'the one'?",
                answer: "There's no magical 'one.' Look for someone who helps you grow closer to God, shares your values, respects you, and with whom you can build a Catholic marriage. Peace about the decision is a good sign of God's will."
              },
              {
                question: "Should I date someone who has been married before?",
                answer: "Possible if they have an annulment (declaration that the first marriage was invalid). The Church requires freedom to marry. This requires serious discernment and often spiritual direction."
              },
              {
                question: "How do I handle dating when I'm busy with school/work?",
                answer: "Prioritize your time but don't eliminate dating. Even one date a week can help you discern. Be creative with scheduling - lunch dates, study dates, or activity dates."
              },
              {
                question: "What if I'm not physically attracted to someone?",
                answer: "Physical attraction can grow. Focus on character, values, and compatibility first. If the person has the qualities you want in a spouse, attraction may develop. Don't dismiss someone based solely on initial attraction."
              },
              {
                question: "How do I introduce Catholic dating values to a non-Catholic?",
                answer: "Be honest and clear about your values from the beginning. Explain why chastity and intention matter to you. Be patient but firm. Their response will tell you a lot about compatibility."
              },
              {
                question: "What if my friends think I'm too old-fashioned?",
                answer: "Catholic dating is counter-cultural but not old-fashioned. It's based on timeless wisdom about love and marriage. Don't apologize for having standards that honor God and each other."
              },
              {
                question: "How do I balance dating with my prayer life?",
                answer: "Integrate prayer into dating. Pray before dates, thank God after dates, pray for discernment, and pray together when appropriate. Dating should enhance your prayer life, not replace it."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Discover Your Vocation to Love
              </h3>
              <p className="text-text-muted mb-6">
                Take our assessment to evaluate your readiness for Catholic dating and discernment.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Take Dating Readiness Quiz
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
