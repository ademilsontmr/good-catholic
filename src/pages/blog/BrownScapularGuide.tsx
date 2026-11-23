import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Calendar, Clock, ArrowLeft, Heart, Star, Sparkles, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";

export default function BrownScapularGuide() {
  return (
    <>
      <Helmet>
        <title>The Brown Scapular: The Expert Guide to the Garment of Grace | Guide Catholic</title>
        <meta name="description" content="Discover the deep history of the Brown Scapular. From St. Simon Stock to the Sabbatine Privilege, learn the requirements and promises of this Carmelite habit." />
        <meta name="keywords" content="brown scapular guide, sabbatine privilege, st simon stock 1251, wearing the scapular requirements, our lady of mount carmel promises" />
        <link rel="canonical" href="https://guidecatholic.com/blog/brown-scapular-guide/" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <ArticleSchema
        title="The Brown Scapular: A Complete Guide to the Garment of Grace"
        description="What is the Brown Scapular? Learn about the apparition to St. Simon Stock, the Sabbatine Privilege, and the requirements to wear this powerful Catholic sacramental."
        url="https://guidecatholic.com/blog/brown-scapular-guide/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Brown Scapular Guide", url: "https://guidecatholic.com/blog/brown-scapular-guide/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog/" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Brown Scapular Guide</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  Devotions
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  28 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Brown Scapular: More Than a Medal, It's an Armor of Light
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                "Whosoever dies wearing this Scapular shall not suffer eternal fire." In 1251, these words changed the spiritual life of the Church forever. But the Scapular is not a lucky charm—it is a religious habit in miniature, a sign of belonging to the family of Carmel.
              </p>
            </header>

            <div className="aspect-video bg-amber-900/5 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
               <Star className="w-24 h-24 text-amber-900/10 absolute -bottom-4 -right-4" />
               <ScrollText className="w-32 h-32 text-amber-900 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Brown Scapular of Our Lady of Mount Carmel is a sacramental — two wool cloths worn over the shoulders, signifying devotion to Mary and her protection. Enrollment by a priest includes promises of prayer; the Sabbatine privilege requires chastity and daily prayer.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <p className="text-text leading-relaxed mb-6">
                The Brown Scapular is one of the best-known sacramentals of the Catholic faith. It is a sign of consecration to the Blessed Virgin Mary and of belonging to the family of Carmel. To wear it is to say: "Mother, I am yours."
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. From Mount Carmel to Europe
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="brown-scapular-guide">
                The Carmelites take their name from Mount Carmel in northern Israel, where the prophet Elijah confronted the prophets of Baal (1 Kings 18). In the late twelfth or early thirteenth century, a group of Latin hermits settled there and received a short rule of life from Albert, the Latin Patriarch of Jerusalem. As the Crusader states collapsed, the hermits moved to Europe, including England, where they had to adapt to life as mendicant friars in towns and universities.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="brown-scapular-guide">
                A scapular was originally part of a monastic or religious habit: a long strip of cloth worn over the shoulders and hanging front and back, often used as a work apron. The small Brown Scapular worn by lay Catholics today is a miniature form of the Carmelite habit, two small pieces of brown wool joined by cords, one resting on the chest and one on the back.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. The Tradition of St. Simon Stock
              </h2>
              <p className="text-text leading-relaxed mb-6">
                According to Carmelite tradition, <strong>Saint Simon Stock</strong>, an English prior general of the Order, prayed to Mary for help during a time of hardship for the friars. The prayer <em>Flos Carmeli</em> (Flower of Carmel) is traditionally associated with him.
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="brown-scapular-guide">
                The tradition holds that Our Lady appeared to him in 1251, often placed at Cambridge or Aylesford, holding the scapular of the Order and promising that whoever dies clothed in it will not suffer eternal fire. Historians note that the earliest written accounts of this vision come from the late fourteenth century, more than a hundred years later, so its details cannot be verified. The Church has never required belief in it, as with all private revelations, but it has approved and encouraged the devotion that grew from it.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="brown-scapular-guide">
                The promise is not a guarantee that works automatically. Popes and the Carmelite Order have consistently explained it as Mary's maternal help for those who wear the Scapular with faith and try to live as Christians, not as a charm that excuses unrepentant sin. Pope Pius XII, writing for the seven-hundredth anniversary in 1950, described the Scapular as a sign of consecration to the Immaculate Heart of Mary.
              </LinkedText>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Sparkles className="w-6 h-6 text-amber-600" />
                  The Sabbatine Privilege
                </h3>
                <p className="text-sm text-text-muted mb-4 text-center">A tradition handled carefully by the Church</p>
                <div className="text-sm leading-relaxed space-y-4">
                  <p>The Sabbatine Privilege comes from a document known as the "Sabbatine Bull," attributed to Pope John XXII in 1322, which describes Mary promising to free scapular wearers from Purgatory on the Saturday after death. Most historians regard that bull as not authentic.</p>
                  <p>In 1613, under Pope Paul V, the Holy See allowed the Carmelites to preach a more modest teaching: that the faithful may believe the Blessed Virgin will help the souls of Carmelite brothers and sisters and confraternity members after death by her continual intercession, especially on Saturday, the day the Church dedicates to her.</p>
                  <p><strong>The traditional conditions:</strong> 1) Be enrolled in the Scapular. 2) Wear it faithfully. 3) Observe chastity according to your state in life. 4) Pray the Little Office of the Blessed Virgin Mary daily, or another practice, today often the Rosary, assigned by a priest with the faculty to substitute it.</p>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                3. Enrollment: How to Receive the Scapular
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The first Brown Scapular is blessed and given in a short rite of enrollment, normally by a priest. After that, you receive the benefits attached to the devotion by wearing it, and replacement scapulars do not need a new enrollment.
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="brown-scapular-guide">
                Enrollment joins you spiritually to the Carmelite family, and the Order teaches that those enrolled share in the prayers and good works of Carmelite friars, nuns, and lay members around the world. Any priest can usually perform the rite in a few minutes, so simply ask after Mass. Some U.S. parishes enroll children after their first Holy Communion, and Carmelite churches often hold enrollments on July 16, the Memorial of Our Lady of Mount Carmel.
              </LinkedText>

              <QuizCTA
                title="Is your soul's armor ready?"
                description="The Scapular is a serious commitment to Mary. Take our quiz to see if you understand the weight of this sacramental and how to wear it worthily."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                4. How to Wear It
              </h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Wear it over the shoulders, one panel on the chest and one on the back, usually under your clothing.</li>
                <li>The panels should be woven wool; images on them are customary but not required.</li>
                <li>Replace it when it wears out; dispose of the old one respectfully by burning or burying it.</li>
                <li>In 1910, Pope St. Pius X permitted a blessed scapular medal, with the Sacred Heart on one side and Mary on the other, to be worn in place of the cloth by those already enrolled, though he expressed a wish that the cloth scapular continue to be worn.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <Heart className="w-6 h-6 text-accent" />
                 The Fatima Connection
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="brown-scapular-guide">
                Sister Lucia, one of the three Fatima visionaries, reported that during the final apparition on October 13, 1917, she saw a series of images while the crowd witnessed the solar phenomenon, including Our Lady as Our Lady of Mount Carmel. Lucia is also reported to have said in a later interview that the Rosary and the Scapular belong together. Fatima is an approved private revelation, so Catholics may draw on it with confidence, though it does not add to the deposit of faith.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="brown-scapular-guide">
                The pairing makes sense: the Rosary is an active prayer you take up each day, while the Scapular is a quiet, constant reminder that you have entrusted your life to Mary's care.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  The Scapular is a sacramental, not a sacrament: it disposes us to grace through faith and devotion, and it calls the wearer to imitate Mary's trust in God every day.
                </p>
              </div>

            </div>

            <BlogFAQ faqs={[
              {
                question: "Does it have to be wool?",
                answer: "Yes. The cloth scapular is traditionally made of woven wool. In 1910, Pope St. Pius X permitted a blessed scapular medal to be worn instead by those already enrolled in the cloth scapular, though he expressed a wish that the cloth continue to be worn."
              },
              {
                question: "Is the vision of St. Simon Stock historically proven?",
                answer: "No. It is a Carmelite tradition; the earliest written accounts date from the late 14th century. The Church does not require belief in it, but it has approved the Scapular devotion that grew from it."
              },
              {
                question: "Who can enroll me in the Brown Scapular?",
                answer: "Ordinarily a priest, using a short rite of blessing and enrollment. You are enrolled only once; later scapulars can simply be put on as replacements."
              },
              {
                question: "When is the feast of Our Lady of Mount Carmel?",
                answer: "July 16. Many Carmelite parishes and communities hold Scapular enrollments on or around that day."
              },
              {
                question: "What if it breaks?",
                answer: "If your Scapular breaks, you don't need a new blessing! The blessing is on the *person* after enrollment. Simply buy or make a new one and put it on. The old one should be burned or buried as it is a blessed object."
              },
              {
                question: "Can I take it off to shower?",
                answer: "Yes, you can take it off for hygiene or medical procedures. The requirement to 'wear it continuously' applies to our lifestyle and identity, not to a literal 24/7 rule that would prevent cleanliness."
              },
            ]} />

<RelatedArticles currentSlug="brown-scapular-guide" />

            <ArticleBottomCTA title="Dress Your Soul in Mary's Uniform" description="The Scapular is the sign of a child who never leaves their mother's side. Take our quiz to take the next step in your consecration." />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
