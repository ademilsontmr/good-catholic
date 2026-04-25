import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function CatholicTeachingOnJustice() {
  return (
    <>
      <Helmet>
        <title>Catholic Teaching on Justice: What the Church Says About Social Justice | Guide Catholic</title>
        <meta name="description" content="What does the Catholic Church teach about justice? Learn about the four types of justice, Catholic social teaching, the preferential option for the poor, and how to live justly." />
        <meta name="keywords" content="catholic teaching on justice, social justice catholic, preferential option for the poor, catholic social teaching justice, what is justice catholic, four types of justice catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-teaching-on-justice/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Catholic Teaching on Justice: What the Church Says About Social Justice"
        description="What does the Catholic Church teach about justice? Learn about the four types of justice, Catholic social teaching, the preferential option for the poor, and how to live justly."
        url="https://guidecatholic.com/blog/catholic-teaching-on-justice/"
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
              <span className="text-text">Catholic Teaching on Justice</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Catholic Doctrine</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 25, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />15 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholic Teaching on Justice: What the Church Says About Social Justice
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Justice is one of the four cardinal virtues — and one of the most contested concepts in contemporary culture. The Catholic Church has a rich, coherent, and demanding teaching on justice that transcends both left and right, rooted in the dignity of the human person and the demands of the Gospel.
              </p>
            </header>
            <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
              <Shield className="w-24 h-24 text-blue-600" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Few words are more contested in contemporary American culture than "social justice." For some, it represents the heart of the Gospel — the call to care for the poor, defend the vulnerable, and transform unjust structures. For others, it has become a political slogan detached from its moral foundations. The Catholic Church's teaching on justice is neither of these — it is something far more demanding and far more coherent.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is Justice? The Catholic Definition</h2>
              <p className="text-text leading-relaxed mb-6">
                The Catechism of the Catholic Church defines justice as "the moral virtue that consists in the constant and firm will to give their due to God and neighbor" (CCC 1807). This classical definition — drawn from Aristotle and developed by St. Thomas Aquinas — has three key elements:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>It is a virtue</strong> — a stable disposition of the will, not just an occasional act or a political position.</li>
                <li><strong>It involves giving what is due</strong> — not charity (which gives more than is owed) but what is owed by right.</li>
                <li><strong>It extends to God and neighbor</strong> — justice is not only horizontal (between humans) but vertical (between humans and God).</li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                The Catechism continues: "Justice toward God is called the 'virtue of religion.' Justice toward men disposes one to respect the rights of each and to establish in human relationships the harmony that promotes equity with regard to persons and to the common good" (CCC 1807).
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Four Types of Justice</h2>
              <p className="text-text leading-relaxed mb-6">
                Catholic moral theology distinguishes four types of justice, each governing a different set of relationships:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Commutative justice</strong> governs exchanges between individuals — contracts, wages, debts. It requires that each party receive what they are owed in a transaction. Stealing, fraud, and failure to pay just wages are violations of commutative justice.</li>
                <li><strong>Distributive justice</strong> governs the relationship between the community (or state) and individuals — how the goods and burdens of society are distributed. It requires that the common goods of society be distributed fairly, with special attention to the needs of the poor and vulnerable.</li>
                <li><strong>Legal justice</strong> (or general justice) governs the relationship of individuals to the community — what citizens owe to the common good. It requires that individuals contribute to the community through taxes, civic participation, and obedience to just laws.</li>
                <li><strong>Social justice</strong> is a modern development in Catholic social teaching, referring to the obligation to organize social institutions — economic, political, and cultural — in ways that respect human dignity and promote the common good. It is not the same as distributive justice but encompasses the structural dimensions of justice.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Biblical Foundation of Justice</h2>
              <p className="text-text leading-relaxed mb-6">
                The call to justice runs through the entire Bible. In the Old Testament, the prophets are relentless in their condemnation of injustice — especially the exploitation of the poor, the widow, the orphan, and the stranger. Amos thunders: "Let justice roll down like waters, and righteousness like an ever-flowing stream" (Amos 5:24). Isaiah declares: "Learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead the widow's cause" (Isaiah 1:17).
              </p>
              <p className="text-text leading-relaxed mb-6">
                In the New Testament, Jesus identifies himself with the poor and vulnerable: "Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me" (Matthew 25:40). The Letter of James is particularly sharp: "What good is it, my brothers, if someone says he has faith but does not have works? Can that faith save him? If a brother or sister is poorly clothed and lacking in daily food, and one of you says to them, 'Go in peace, be warmed and filled,' without giving them the things needed for the body, what good is that?" (James 2:14–16).
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Catholic Social Teaching: 130 Years of Development</h2>
              <p className="text-text leading-relaxed mb-6">
                The Catholic Church's formal social teaching began with Pope Leo XIII's encyclical Rerum Novarum (1891), written in response to the Industrial Revolution and the exploitation of workers. Since then, a rich body of social teaching has developed, including:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Rerum Novarum (1891)</strong> — Leo XIII: the rights of workers, the right to private property, the limits of both capitalism and socialism.</li>
                <li><strong>Quadragesimo Anno (1931)</strong> — Pius XI: the principle of subsidiarity (decisions should be made at the lowest appropriate level), the critique of both unbridled capitalism and totalitarian socialism.</li>
                <li><strong>Pacem in Terris (1963)</strong> — John XXIII: human rights, the rights of nations, the need for international institutions to promote peace and justice.</li>
                <li><strong>Gaudium et Spes (1965)</strong> — Vatican II: the Church's engagement with the modern world, the dignity of the human person, the common good.</li>
                <li><strong>Populorum Progressio (1967)</strong> — Paul VI: development as the new name for peace, the obligations of wealthy nations to poor ones.</li>
                <li><strong>Laborem Exercens (1981)</strong> — John Paul II: the dignity of work, the rights of workers, the priority of labor over capital.</li>
                <li><strong>Centesimus Annus (1991)</strong> — John Paul II: the fall of communism, the moral limits of the market economy, the importance of civil society.</li>
                <li><strong>Laudato Si' (2015)</strong> — Francis: integral ecology, care for creation, the connection between environmental justice and social justice.</li>
              </ul>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your knowledge of Catholic social teaching and the virtues."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Preferential Option for the Poor</h2>
              <p className="text-text leading-relaxed mb-6">
                One of the most distinctive and challenging principles of Catholic social teaching is the "preferential option for the poor." This principle holds that in all decisions — personal, political, and economic — the needs of the poor must be given priority.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Catechism states: "God blesses those who come to the aid of the poor and rebukes those who turn away from them... Love for the poor is incompatible with immoderate love of riches or their selfish use" (CCC 2443–2445). The preferential option for the poor does not mean that the poor are morally superior or that the rich are automatically condemned. It means that the measure of a just society is how it treats its most vulnerable members.
              </p>
              <p className="text-text leading-relaxed mb-6">
                This principle has practical implications: when evaluating economic policies, tax structures, healthcare systems, and social programs, Catholics are called to ask: how does this affect the poor? Does it help them or harm them? Does it respect their dignity or exploit their vulnerability?
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Key Principles of Catholic Social Teaching</h2>
              <p className="text-text leading-relaxed mb-6">
                Catholic social teaching is built on several foundational principles that apply across all social, economic, and political questions:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Human dignity.</strong> Every human being, from conception to natural death, has inherent dignity as a person made in the image of God. No economic system, political ideology, or social arrangement may treat persons as mere means to an end.</li>
                <li><strong>The common good.</strong> Society exists for the benefit of all its members, not just the powerful or the majority. Every social institution must be evaluated by whether it promotes the common good.</li>
                <li><strong>Subsidiarity.</strong> Decisions should be made at the lowest appropriate level — by individuals, families, and local communities before turning to larger institutions or the state. The state should not do what smaller communities can do for themselves.</li>
                <li><strong>Solidarity.</strong> We are all responsible for one another. The suffering of any member of the human family is our concern. "No man is an island" — we are bound together in a common humanity.</li>
                <li><strong>The universal destination of goods.</strong> The goods of creation are meant for all of humanity, not just those who happen to own them. Private property is legitimate but always ordered toward the common good.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Justice and Charity: Not Opposites</h2>
              <p className="text-text leading-relaxed mb-6">
                A common misunderstanding is that justice and charity are alternatives — that we can choose between structural change (justice) and personal giving (charity). Catholic teaching rejects this false dichotomy.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Pope Benedict XVI, in his encyclical Deus Caritas Est (2005), wrote: "Love — caritas — will always prove necessary, even in the most just society. There is no ordering of the State so just that it can eliminate the need for a service of love." Justice creates the conditions for a just society; charity responds to the needs that justice cannot fully address. Both are necessary; neither is sufficient alone.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Catholic tradition calls for both: working to change unjust structures (justice) and personally serving those in need (charity). The corporal works of mercy — feeding the hungry, clothing the naked, sheltering the homeless — are not optional extras for Catholics who have already done their political duty. They are direct obligations of the Christian life.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "Justice is the minimum of love, and love is the fullness of justice."
                </p>
                <p className="text-text-muted text-center mt-2">— Paul Tillich (cited approvingly in Catholic social thought)</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "What does the Catholic Church teach about social justice?", answer: "The Catholic Church has a rich body of social teaching — developed over 130 years of papal documents — that addresses justice in economic, political, and social life. Key principles include human dignity, the common good, subsidiarity, solidarity, and the preferential option for the poor. Catholic social teaching rejects both unbridled capitalism and socialism, calling for an economy ordered to human dignity and the common good." },
              { question: "What are the four types of justice in Catholic teaching?", answer: "Catholic moral theology distinguishes four types of justice: commutative justice (governing exchanges between individuals), distributive justice (governing how society distributes goods and burdens), legal justice (governing what individuals owe to the community), and social justice (governing the organization of social institutions to respect human dignity and promote the common good)." },
              { question: "What is the preferential option for the poor?", answer: "The preferential option for the poor is a principle of Catholic social teaching that holds that in all decisions — personal, political, and economic — the needs of the poor must be given priority. It does not mean the poor are morally superior, but that the measure of a just society is how it treats its most vulnerable members. It is rooted in Scripture (Matthew 25:40) and developed in Catholic social teaching from Rerum Novarum to Laudato Si'." },
              { question: "Is social justice a Catholic concept?", answer: "Yes. The term 'social justice' was coined by the Jesuit philosopher Luigi Taparelli d'Azeglio in the 19th century and developed in Catholic social teaching. It refers to the obligation to organize social institutions in ways that respect human dignity and promote the common good. While the term has been adopted (and sometimes distorted) by secular political movements, its roots are Catholic." },
              { question: "What is the difference between justice and charity in Catholic teaching?", answer: "Justice gives what is owed by right; charity gives more than is owed, out of love. Catholic teaching holds that both are necessary — justice creates the conditions for a just society, while charity responds to needs that justice cannot fully address. Pope Benedict XVI wrote that 'love will always prove necessary, even in the most just society.' Catholics are called to both work for structural justice and personally serve those in need." },
            ]} />

            <RelatedArticles currentSlug="catholic-teaching-on-justice" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your knowledge of Catholic social teaching and the virtues.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
