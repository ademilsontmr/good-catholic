import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft, Sparkles, Shield, Users, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function CatholicMentalHealthGuide() {
  return (
    <>
      <Helmet>
        <title>Catholic Mental Health: Faith-Based Guide to Depression, Anxiety & Healing | Guide Catholic</title>
        <meta name="description" content="Discover the Catholic approach to mental health. Learn how faith integrates with psychology, find Catholic therapists, and access spiritual resources for depression, anxiety, and trauma recovery." />
        <meta name="keywords" content="catholic mental health, christian depression anxiety, catholic therapist, faith and psychology, spiritual depression treatment, catholic counseling, mental health prayer, catholic approach to therapy" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-mental-health-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Catholic Mental Health: Faith-Based Guide to Depression, Anxiety & Healing"
          description="Discover the Catholic approach to mental health. Learn how faith integrates with psychology, find Catholic therapists, and access spiritual resources for depression, anxiety, and trauma recovery."
          url="https://guidecatholic.com/blog/catholic-mental-health-guide/"
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
              <span className="text-text">Catholic Mental Health Guide</span>
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
                  Mental Health & Faith
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  25 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholic Mental Health: Finding Healing Through Faith and Psychology
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                In a world where mental health crises are escalating, the Catholic Church offers a unique integration of faith and psychology that addresses both body and soul. Mental illness is not a lack of faith - it's a human condition that calls for compassion, professional help, and spiritual support.
              </p>
            </header>

            <div className="aspect-video bg-teal-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
              <Brain className="w-24 h-24 text-teal-400/20 absolute top-4 right-4" />
              <Heart className="w-32 h-32 text-teal-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The Catholic approach to mental health recognizes that we are integrated beings - body, mind, and spirit. When mental health challenges arise, they affect every part of us. The Church doesn't replace professional mental health care; it complements it with spiritual resources that address the deepest human needs for meaning, purpose, and connection.
              </p>
              
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Catholic Understanding of Mental Health
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Catholic Church teaches that mental health is part of our overall health and well-being. Mental illness is not a moral failing or lack of faith - it's a medical condition that requires proper treatment, just like physical illness. The Church's approach includes:
              </p>
              
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Dignity of the Person:</strong> Every person has inherent dignity regardless of mental health status</li>
                <li><strong>Integration of Faith and Science:</strong> Faith and psychology are complementary, not contradictory</li>
                <li><strong>Community Support:</strong> The Church community provides essential support and belonging</li>
                <li><strong>Spiritual Resources:</strong> Prayer, sacraments, and spiritual direction aid healing</li>
                <li><strong>Professional Care:</strong> When needed, professional mental health treatment is encouraged</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Common Mental Health Challenges and Catholic Responses
              </h2>
              
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Shield className="w-6 h-6 text-teal-600" />
                  Understanding Depression Through Faith
                </h3>
                <p className="text-sm text-text-muted mb-4 text-center">Depression affects faith, but faith can help with depression</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-text mb-2">The Spiritual Dimension of Depression</h4>
                    <p className="text-sm text-text-muted">Depression often includes spiritual symptoms: feeling abandoned by God, questioning faith, inability to pray, loss of spiritual consolation. These are normal responses to suffering, not signs of weak faith.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">Catholic Resources for Depression</h4>
                    <p className="text-sm text-text-muted">The Eucharist provides spiritual nourishment when prayer feels empty. The Psalms give voice to suffering. Confession removes guilt that often accompanies depression. Spiritual direction provides guidance.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">Finding Hope in Suffering</h4>
                    <p className="text-sm text-text-muted">Christ's suffering gives meaning to our own. The saints who struggled with depression show us that holiness is possible even with mental illness.</p>
                  </div>
                </div>
              </div>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Anxiety and Faith
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Anxiety disorders affect millions of Catholics. The Catholic faith offers both comfort and practical tools for managing anxiety:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Trust in God's Providence:</strong> "Be not afraid" appears 365 times in Scripture</li>
                <li><strong>The Peace of Christ:</strong> Jesus offers us His peace, not as the world gives</li>
                <li><strong>Sacramental Peace:</strong> Confession brings peace through reconciliation</li>
                <li><strong>Mindfulness and Prayer:</strong> Catholic contemplative practices calm anxiety</li>
                <li><strong>Community Support:</strong> The Church provides belonging that reduces isolation</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Trauma and Spiritual Healing
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Trauma affects our relationship with God, others, and ourselves. The Catholic approach to trauma healing includes:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Sacramental Healing:</strong> The Eucharist and Reconciliation bring grace for healing</li>
                <li><strong>Inner Healing Prayer:</strong> Specific prayers for emotional and spiritual wounds</li>
                <li><strong>Safe Community:</strong> The Church should be a place of safety and support</li>
                <li><strong>Professional Help:</strong> Catholic therapists trained in trauma-informed care</li>
                <li><strong>The Cross as Meaning:</strong> Finding meaning in suffering through Christ's example</li>
              </ul>

              <QuizCTA
                title="How is your mental health affecting your faith life?"
                description="Take our assessment to identify areas where your mental and spiritual health might need attention."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Finding Catholic Mental Health Support
              </h2>
              <p className="text-text leading-relapsed mb-6">
                When facing mental health challenges, Catholics have several resources available:
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Professional Help
              </h3>
              <p className="text-text leading-relaxed mb-6">
                The Church encourages seeking professional mental health care when needed:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Catholic Therapists:</strong> Mental health professionals who integrate faith into treatment</li>
                <li><strong>Catholic Counseling Centers:</strong> Many dioceses have counseling services</li>
                <li><strong>Catholic Hospitals:</strong> Many offer mental health departments with chaplains</li>
                <li><strong>Insurance Coverage:</strong> Many Catholic therapists accept insurance</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Spiritual Support
              </h3>
              <p className="text-text leading-relaxed mb-6">
                The Church provides spiritual resources specifically for mental health:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Spiritual Direction:</strong> Trained guides for spiritual and emotional support</li>
                <li><strong>Support Groups:</strong> Groups for depression, anxiety, addiction, grief</li>
                <li><strong>Prayer Ministries:</strong> Teams that pray for those struggling</li>
                <li><strong>Pastoral Counseling:</strong> Priests and deacons provide spiritual guidance</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Practical Spiritual Practices for Mental Health
              </h2>
              <p className="text-text leading-relaxed mb-6">
                These spiritual practices can complement professional treatment and support mental health:
              </p>
              
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">Daily Mental Health Prayer</h3>
                <p className="text-text leading-relaxed italic">
                  "Lord Jesus, you know my mind and my struggles. You understand my anxiety, my depression, my fears. I place my mental health in your loving hands. Heal my mind, calm my spirit, and give me the courage to seek the help I need. Through the intercession of St. Dymphna, patron saint of mental health, grant me peace and healing. Amen."
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">The Serenity Prayer Adapted</h3>
                <p className="text-text leading-relaxed italic">
                  "God, grant me the serenity to accept the things I cannot change, courage to change the things I can, and wisdom to know the difference - especially when it comes to my mental health. Help me accept my limitations while working for healing. Amen."
                </p>
              </div>
              
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">Anxiety-Calm Prayer</h3>
                <p className="text-text leading-relaxed italic">
                  "Lord Jesus, Prince of Peace, calm my anxious heart. When my mind races with worry, bring me your peace. When my body tenses with fear, relax my muscles. When my spirit doubts, strengthen my faith. You are the Lord of peace, and you give your peace to those who ask. I ask for your peace now. Amen."
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Role of Sacraments in Mental Health
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The sacraments provide unique graces for mental and emotional healing:
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Eucharist: Spiritual Nourishment
              </h3>
              <p className="text-text leading-relaxed mb-6">
                When prayer feels empty and God seems distant, the Eucharist provides spiritual nourishment. Christ's real presence sustains us even when we can't feel His presence. Regular reception of the Eucharist is essential for mental health maintenance.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Reconciliation: Healing Guilt and Shame
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Mental illness often comes with inappropriate guilt and shame. The Sacrament of Reconciliation brings God's mercy and peace, healing the spiritual wounds that often accompany mental health challenges.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Anointing of the Sick: Grace for Suffering
              </h3>
              <p className="text-text leading-relaxed mb-6">
                This sacrament brings special graces for those suffering from physical or mental illness. It can bring peace, strength, and even physical healing when it's God's will.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Confirmation: Strength for the Journey
              </h3>
              <p className="text-text leading-relaxed mb-6">
                The gifts of the Holy Spirit, especially fortitude and understanding, provide strength for the mental health journey. The Holy Spirit is called the Divine Counselor and Comforter.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Saints Who Struggled with Mental Health
              </h2>
              <p className="text-text leading-relapsed mb-6">
                Many saints experienced mental health challenges, showing that holiness is possible with mental illness:
              </p>
              
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>St. Dymphna:</strong> Patron saint of mental and emotional disorders</li>
                <li><strong>St. John of the Cross:</strong> Experienced the "dark night of the soul"</li>
                <li><strong>St. Therese of Lisieux:</strong> Experienced spiritual depression and doubt</li>
                <li><strong>St. Padre Pio:</strong> Served others while experiencing physical suffering</li>
                <li><strong>St. Francis de Sales:</strong> Wrote about depression and anxiety</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Supporting Others with Mental Health Challenges
              </h2>
              <p className="text-text leading-relaxed mb-6">
                As Catholics, we're called to support those struggling with mental health:
              </p>
              
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Educate Yourself:</strong> Learn about mental health conditions to reduce stigma</li>
                <li><strong>Listen Without Judgment:</strong> Create safe spaces for honest sharing</li>
                <li><strong>Encourage Professional Help:</strong> Support friends and family in seeking care</li>
                <li><strong>Pray Consistently:</strong> Remember people in your daily prayers</li>
                <li><strong>Offer Practical Support:</strong> Help with daily tasks when someone is struggling</li>
                <li><strong>Respect Boundaries:</strong> You can't be someone's therapist, but you can be their friend</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                When Professional Help Is Needed
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Seek professional help immediately if you or someone you know experiences:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Suicidal Thoughts:</strong> Call 988 or text HOME to 741741 (Crisis Text Line)</li>
                <li><strong>Severe Depression:</strong> Inability to function in daily life</li>
                <li><strong>Panic Attacks:</strong> Overwhelming anxiety attacks</li>
                <li><strong>Self-Harm Urges:</strong> Thoughts of hurting yourself</li>
                <li><strong>Psychosis:</strong> Losing touch with reality</li>
                <li><strong>Addiction:</strong> Substance abuse that's out of control</li>
                <li><strong>Trauma:</strong> Recent traumatic event causing distress</li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                Remember: seeking help is a sign of strength, not weakness. God works through therapists and doctors just as He works through priests and spiritual directors.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Building Mental Resilience Through Faith
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Catholic faith builds resilience through several key principles:
              </p>
              
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Redemptive Suffering:</strong> Finding meaning in hardship through Christ's example</li>
                <li><strong>Community Support:</strong> The Church provides belonging and practical help</li>
                <li><strong>Eternal Perspective:</strong> This life is not all there is</li>
                <li><strong>Sacramental Grace:</strong> God's grace sustains us through difficulties</li>
                <li><strong>Saintly Intercession:</strong> The saints pray for us in heaven</li>
                <li><strong>Scripture Wisdom:</strong> The Bible provides guidance for every struggle</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Cast all your anxiety on him, because he cares for you." - 1 Peter 5:7
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "The Lord is close to the brokenhearted and saves those who are crushed in spirit." - Psalm 34:18
                </p>
              </div>
              
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Come to me, all who labor and are heavy laden, and I will give you rest." - Matthew 11:28
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="catholic-mental-health-guide" />

            <BlogFAQ faqs={[
              {
                question: "Is it a sin to take medication for mental health?",
                answer: "No. The Catholic Church encourages seeking appropriate medical treatment for mental health conditions. Medication is a legitimate means of healing when used properly under medical supervision."
              },
              {
                question: "Can depression be a sign of weak faith?",
                answer: "Absolutely not. Many saints experienced depression. Mental illness is a medical condition, not a spiritual failing. Even St. Teresa of Calcutta experienced spiritual darkness."
              },
              {
                question: "How do I find a Catholic therapist?",
                answer: "Look for therapists who integrate faith and psychology. Many dioceses have referral lists. CatholicTherapists.com and the Catholic Psychotherapy Association are good resources. Always verify credentials and approach."
              },
              {
                question: "Should I stop therapy if I'm feeling spiritually dry?",
                answer: "No. Spiritual dryness is normal during healing. Continue both therapy and prayer. The dryness doesn't mean therapy isn't working or that God has abandoned you."
              },
              {
                question: "Can prayer alone cure mental illness?",
                answer: "Prayer is essential but usually not sufficient alone for serious mental health conditions. God works through doctors and therapists. Think of prayer as complementary to, not a replacement for, professional care."
              },
              {
                question: "How do I know if I need therapy or just spiritual direction?",
                answer: "If your condition affects daily functioning, relationships, or work, seek professional help. Spiritual direction is for spiritual growth; therapy is for mental health treatment. Many people benefit from both."
              },
              {
                question: "Is it okay to take antidepressants and receive Communion?",
                answer: "Yes. The Church teaches that taking necessary medication is not a barrier to receiving sacraments. Mental health medication is morally permissible when needed."
              },
              {
                question: "How can I support a family member with mental illness?",
                answer: "Encourage professional help, listen without judgment, pray for them, help with practical needs, respect their treatment plan, and maintain boundaries. You're their supporter, not their therapist."
              },
              {
                question: "What does the Church say about suicide?",
                answer: "The Church teaches that suicide is gravely wrong because it rejects God's gift of life. However, the Church also recognizes that mental illness can impair judgment. Those with suicidal thoughts need immediate help and compassion."
              },
              {
                question: "Can I be a good Catholic if I have mental illness?",
                answer: "Absolutely. Mental illness doesn't diminish your dignity or worth as a Catholic. Many saints struggled with mental health issues. Your suffering can even become a source of grace for yourself and others."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Find Hope and Healing
              </h3>
              <p className="text-text-muted mb-6">
                Take our assessment to identify mental health resources and support for your journey.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Take Mental Health Assessment
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
