import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function CanCatholicsDonateOrgans() {
  return (
    <>
      <Helmet>
        <title>Can Catholics Donate Organs? What the Church Teaches | Guide Catholic</title>
        <meta name="description" content="Can Catholics donate organs? Church teaching on organ donation, end-of-life ethics, and Catholic moral principles." />
        <meta name="keywords" content="can catholics donate organs, catholic church organ donation, organ donation catholic teaching" />
        <link rel="canonical" href="https://guidecatholic.com/blog/can-catholics-donate-organs/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Can Catholics Donate Organs? What the Church Teaches" description="Can Catholics donate organs? Church teaching on organ donation, end-of-life ethics, and Catholic moral principles." url="https://guidecatholic.com/blog/can-catholics-donate-organs/" datePublished="2026-06-02" />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Can Catholics Donate Organs? What the...</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Catholic Living</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />June 2, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />13 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Can Catholics Donate Organs? What the Church Teaches</h1>
              <p className="text-xl text-text-muted leading-relaxed">Organ donation saves lives — and the Catholic Church not only permits it but calls it a noble act of charity when done ethically. Understanding Church teaching helps Catholics register as donors with a clear conscience.</p>
            </header>
            <div className="aspect-video bg-red-100 rounded-2xl flex items-center justify-center mb-10"><HeartPulse className="w-24 h-24 text-red-600" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="can-catholics-donate-organs">
                Yes — Catholics may donate organs and tissues. Pope St. John Paul II, Pope Benedict XVI, and Pope Francis have all affirmed that donating one&apos;s organs after death can be a genuine act of love, echoing Christ&apos;s gift of self. The Catechism teaches that organ donation after death is &quot;noble and meritorious&quot; when done freely and without commercial exploitation (CCC 2296). The key is that donation must respect the dignity of the donor and never treat the body as mere property.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why the Church Supports Organ Donation</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="can-catholics-donate-organs">
                Catholic moral theology rests on the principle that we may never do evil that good may come — but we may accept foreseen harm when the good outweighs it and the harm is not intended. Donating a kidney to a sibling, or organs after death to strangers on a transplant list, directly saves lives. The Church sees this as participating in the corporal work of mercy. In the United States, where over 100,000 people wait for transplants, Catholic health systems and bishops consistently encourage registration through state donor registries.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Living vs. Deceased Donation</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Deceased donation:</strong> Organs (heart, lungs, liver, kidneys, pancreas, intestines) and tissues (corneas, skin, bone) may be donated after death when ethical criteria for determining death are met.</li>
                <li><strong>Living donation:</strong> A healthy person may donate one kidney or part of a liver to a specific recipient. This is permitted when the donor&apos;s health and freedom are safeguarded and no undue pressure is applied.</li>
                <li><strong>Not permitted:</strong> Donation that mutilates the body for non-therapeutic reasons, or sale of organs — which the Church condemns as a violation of human dignity.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Critical Issue: Determining Death</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="can-catholics-donate-organs">
                Catholic ethics requires moral certainty that a person is dead before vital organs are removed. The Church accepts neurological criteria (whole brain death) as a valid standard when properly diagnosed — the standard used in most U.S. hospitals. Some Catholics worry about &quot;organ harvesting&quot; before true death; reputable transplant teams follow strict protocols, and Catholic hospitals apply the Ethical and Religious Directives for Catholic Health Care. If you have concerns, discuss them with a Catholic bioethicist or your pastor when making advance directives.
              </LinkedText>

              <QuizCTA title="Thinking about end-of-life decisions?" description="Take the Catholic life assessment for guidance on living your faith through prayer, charity, and moral choices." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Organ Donation and Catholic Funerals</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="can-catholics-donate-organs">
                Donating organs does not prevent a Catholic funeral. The body may still be present at the Vigil and Funeral Mass — often with an honor guard or empty casket, or after organs are recovered the remains are returned to the family for burial. Full Catholic funeral rites remain appropriate. Cremation after donation is also permitted, provided ashes are interred in sacred ground. Many families find comfort knowing their loved one&apos;s death gave others the gift of life.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Practical Steps for Catholics in the USA</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li>Register as an organ donor on your state driver&apos;s license or at organdonor.gov.</li>
                <li>Discuss your decision with family so they honor your wishes at a difficult moment.</li>
                <li>Include organ donation preference in your advance healthcare directive.</li>
                <li>Consult your parish if you want a funeral Mass scheduled alongside donation logistics.</li>
                <li>For living donation, work through a transplant center and ensure free, informed consent.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Church Rejects</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="can-catholics-donate-organs">
                The Church rejects organ trafficking, coerced donation, and treating the body as a commodity. Experimental practices that destroy embryos for organ growth, or proposals to euthanize patients solely to harvest organs, are morally unacceptable. Catholics should also reject utilitarian pressure to shorten end-of-life care in order to obtain organs. Love for the dying person and love for the recipient must both be honored — never one at the expense of the other.
              </LinkedText>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="can-catholics-donate-organs">
                Registering as an organ donor can be one of the most concrete ways to live out &quot;Greater love has no one than this: to lay down one&apos;s life for one&apos;s friends&quot; (John 15:13). Speak with your pastor if personal circumstances — health, family objections, or moral uncertainty — require further discernment.
              </LinkedText>
            </div>
            <BlogFAQ faqs={[
              { question: "Does organ donation prevent an open-casket funeral?", answer: "Not necessarily. After organ recovery, the body is respectfully prepared and returned to the family. Open-casket viewing is often still possible, though this varies by which organs are donated and funeral home practices." },
              { question: "Can I donate organs if I choose cremation?", answer: "Yes. Organ donation and cremation are both permitted. After donation, cremated remains must still be buried or entombed in a sacred place, such as a Catholic cemetery." },
              { question: "Is it a sin to refuse organ donation?", answer: "No. Organ donation is a voluntary act of charity, not a moral obligation. Catholics may decline for personal, health, or conscientious reasons without sin." },
              { question: "What about donating my body to medical science?", answer: "Whole-body donation for research or medical education is permitted when done freely and remains are eventually given proper burial or cremation in a sacred place. Check that the program aligns with Catholic respect for the body." },
            ]} />
            <RelatedArticles currentSlug="can-catholics-donate-organs" />
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
