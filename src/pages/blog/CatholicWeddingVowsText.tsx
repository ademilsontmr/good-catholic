import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function CatholicWeddingVowsText() {
  return (
    <>
      <Helmet>
        <title>Catholic Wedding Vows: Official Consent USA | Guide Catholic</title>
        <meta name="description" content="Official Catholic wedding vows from the Order of Celebrating Matrimony (USA): consent text, priest questions, rings, and why vows are sacramental consent—not custom poetry." />
        <meta name="keywords" content="catholic wedding vows, catholic marriage vows text, order of celebrating matrimony vows" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-wedding-vows/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Catholic Wedding Vows: The Official Consent Text (USA)"
        description="Official Catholic wedding vows from the Order of Celebrating Matrimony (USA): consent text, priest questions, rings, and why vows are sacramental consent—not custom poetry."
        url="https://guidecatholic.com/blog/catholic-wedding-vows/"
        datePublished="2026-09-22"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Catholic Wedding Vows", url: "https://guidecatholic.com/blog/catholic-wedding-vows/" },
        ]}
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
              <span className="text-text">catholic wedding vows</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Sacraments</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />September 22, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />20 min</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                Catholic Wedding Vows: The Official Consent Text (USA)
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Pinterest boards overflow with custom vow poems, but sacramental marriage rests on consent defined by the Church, not by wedding planners. In the United States, the Order of Celebrating Matrimony provides the words that establish covenant—spoken freely, faithfully, permanently, and fruitfully.
              </p>
            </header>

            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">
                  <strong>Standard U.S. Catholic wedding consent:</strong> &quot;I, N., take you, N., to be my wife/husband. I promise to be true to you in good times and in bad, in sickness and in health. I will love you and honor you all the days of my life.&quot; The priest first asks whether you come freely, without reservation, to love and honor each other all the days of your life. These words are the <strong>essential form of consent</strong>, not optional poetry.
                </p>
              </div>

              <div className="mb-10 rounded-xl border border-accent/30 bg-accent/5 p-6">
                <p className="text-text leading-relaxed">
                  Practice the words of consent at home beside other Catholic prayers.{" "}
                  <a href="https://catholicbibleonline.com/prayers/" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic prayers on Catholic Bible Online</a>.
                </p>
              </div>

              <div className="mb-10 rounded-xl border border-accent/30 bg-accent/5 p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-text mb-3 flex items-center gap-2 mt-0">
                  <ExternalLink className="w-5 h-5 text-accent shrink-0" />
                  Ceremony context
                </h2>
                <p className="text-text leading-relaxed mb-4">
                  See the{" "}
                  <Link to="/blog/catholic-wedding-ceremony-guide/" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic wedding ceremony guide</Link>
                  {" "}and{" "}
                  <Link to="/blog/catholic-wedding-mass-vs-ceremony/" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic wedding Mass vs ceremony</Link>.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Consent is the heart of the sacrament</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                Marriage arises from the consent of the partners (CCC 1626, canon 1057). The minister of the sacrament between two baptized persons is not the priest alone but the couple who marry each other; the priest or deacon receives consent in the name of the Church. That is why precise vows matter more than floral arrangements. Invalid consent—coercion, conditions, or exclusion of essential properties—can render marriage null regardless of beautiful photography.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                Catholic wedding vows express four notes the Church must hear: freedom, fidelity, permanence, and openness to children (canon 1055, CCC 1643–1654). Ritual language encodes those notes so ordinary couples need not improvise theology under stress. Trust the form the Church has refined through centuries rather than treating vows as performance art.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Questions the priest asks first</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                Before the exchange of vows, the celebrant inquires whether the parties come freely and without reservation to give themselves to each other in marriage, and whether they will love and honor each other as husband and wife for all the days of their lives. Each responds &quot;I do&quot; or an equivalent affirmative. These questions surface last-minute coercion or doubt; answering under pressure invalidates consent.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                In mixed marriages or convalidations, the same structure applies with possible additions about faith and children for the Catholic party. Bilingual ceremonies may repeat questions in Spanish, Vietnamese, or other languages common in U.S. parishes, but meaning must remain intact. Translators assist when one party lacks English fluency; vows are not a time for improvised jokes from the aisle.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The standard formula in English (USA)</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                The bride and groom (or both spouses in any order permitted by the ritual) declare: I, N., take you, N., to be my wife—or husband. I promise to be true to you in good times and in bad, in sickness and in health. I will love you and honor you all the days of my life. Wording may vary slightly by ritual edition—some books say &quot;have and to hold&quot; in optional sections—but the consent above is what U.S. couples most commonly hear.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                Memorize the flow, not only the text. Nervous couples forget names; priests prompt quietly. Speaking loudly enough for witnesses satisfies canonical publicity without theatrical shouting. Video recordings are fine; altering vows for the camera is not.
              </LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text leading-relaxed italic mb-2">
                  I, N., take you, N., to be my wife (my husband). I promise to be true to you in good times and in bad, in sickness and in health. I will love you and honor you all the days of my life.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Edition variants and diocesan policies</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                The Order of Celebrating Matrimony (2nd edition, 2016) governs U.S. Latin-rite parishes. Older couples remember phrasing from the 1969 rite; convalidations may use current texts regardless of when civil marriage occurred. Some dioceses publish mandatory scripts in marriage handbooks—always follow the celebrant assigned to your wedding, not a blog quote alone.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                Eastern Catholic Churches use their own matrimonial rites; this article addresses Roman-rite practice dominant in the United States. If you marry in the Ukrainian or Maronite Church, vows and rituals differ while sacramental theology remains aligned. Clergy coordinate when one party is Eastern and the other Roman Catholic.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Personalized vows versus essential consent</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                Couples often ask to write personal vows. Catholic law requires that consent be unambiguous about permanence and fidelity. Many pastors allow brief personal statements after the official exchange, or during rehearsal dinners, but forbid replacing canonical words with poetry that omits indissolubility or sounds conditional (&quot;as long as we both shall love&quot;). Any custom text needs priestly approval to ensure validity.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                Secular culture treats vows as self-expression; Catholic culture treats them as liturgical action akin to Eucharistic consecration formulas. Humility before the rite protects you from vows you cannot keep because they were cute on paper. Save creativity for toasts; give Christ the precise promise the Church guards.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Exchange of rings after consent</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                After vows, the ritual includes blessing and giving of rings as signs of love and fidelity in the name of the Father, and of the Son, and of the Holy Spirit. Ring words are not the sacramental form but strengthen the visible sign. Some editions invite optional phrases like &quot;Take this ring as a sign of my love and fidelity&quot;—follow your priest&apos;s card exactly.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                Rings may be simple bands; extravagant jewelry does not increase grace. If rings are forgotten, consent still valid if exchanged properly; rings can be blessed later. Same-sex couples are not sacramentally married in Catholic rites; this guide assumes man-woman couples per Church teaching (CCC 1601).
              </LinkedText>

              <QuizCTA
                title="Sacraments and liturgy quiz"
                description="Test your knowledge of marriage, baptism, and Eucharist in the Catholic Church."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Witnesses and canonical publicity</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                Two witnesses observe consent so the community can later testify marriage occurred. They need not be Catholics but must understand they witness a binding covenant, not a photo prop. Witnesses sign the marriage register after Mass or ceremony. Elopement-style weddings with only a priest still require those two observers for validity under normal circumstances.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                Secret marriages without compelling cause are discouraged; the Church protects spouses and children through public record. Tribunals investigating nullity rely on witness testimony about demeanor during vows—whether fear, intoxication, or mockery was visible.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Consent in Nuptial Mass versus ceremony without Mass</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                Vows are identical whether marriage occurs within Mass or in a Liturgy of the Word. Mixed marriages often omit Mass when the non-Catholic party cannot receive Communion, reducing tension while preserving full consent. The vows do not shorten; only surrounding liturgy changes. Catholic wedding vows remain the anchor in both forms.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                Couples choosing Mass should prepare to sit, stand, and kneel at length and to invite guests to respect Eucharistic discipline. Ceremony-only celebrations still conclude with Nuptial Blessing and Lord&apos;s Prayer. Rehearsals walk through physical logistics so vows receive focus, not fumbling with missalettes.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Renewing vows versus repeating consent</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                Anniversary &quot;vow renewals&quot; in Catholic parishes are pastoral celebrations, not new sacramental consent—valid marriages cannot be re-contracted. Wording differs to avoid implying prior vows expired. Engaged couples should not confuse renewal events with the one-time exchange that creates marriage. Convalidation, by contrast, uses full consent because form was previously defective.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                Widowed persons marrying again use the same sacramental formula with a new partner. Divorce without annulment blocks new vows until freedom is established. Language of fidelity in the standard formula assumes no prior undissolved bond.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Preparing spiritually to speak the words</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                Practice vows during Pre-Cana by reading them aloud to each other in front of a crucifix. Discuss what &quot;all the days of my life&quot; means during unemployment, infertility, or chronic illness. Openness to children belongs to marriage consent even if biological children never come; adoption and openness to procreation fulfill the vow spiritually.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                Frequent Confession before the wedding clears grave sin that might cloud freedom. Spiritual direction helps when fear of commitment arises. The vows you speak become daily examination-of-conscience material for decades—choose them consciously, not as autopilot script.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Common mistakes with wedding vow text</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                Mistakes include adding humor that undermines permanence, letting guests shout objections as if at a movie wedding, or substituting gender-neutral language that obscures husband-wife reciprocity taught in Ephesians 5. Another error is assuming online &quot;Catholic vow samples&quot; from non-liturgical sources match the ritual—always verify with clergy.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                Recording vows for social media before the priest arrives can create confusion about when consent actually happened. Consent belongs in the rite, witnessed and received by the Church&apos;s minister. Save TikTok moments for the reception after sacramental reality is established.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Living the vows after the wedding day</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                Catholic wedding vows bind mornings of irritation and nights of tenderness alike. Honor means reverencing the spouse&apos;s dignity when you disagree. Love as action— washing dishes, forgiving debt, attending Mass together—outlasts emotion. When crisis hits, return to the words spoken at the altar as promise before God, not feelings alone.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-wedding-vows">
                The official consent text is short so every couple, literate or not, can mean it fully. Its brevity is pastoral genius: permanence, fidelity, and honor in one breath, repeated by millions across centuries, joining your marriage to a communion of saints who spoke the same promise under different roofs but one Lord.
              </LinkedText>
            </div>

            <BlogFAQ
              linkAnswersSlug="catholic-wedding-vows"
              faqs={[
                {
                  question: "What are the official Catholic wedding vows in the USA?",
                  answer: "The standard consent is: I, N., take you, N., to be my wife/husband. I promise to be true to you in good times and in bad, in sickness and in health. I will love you and honor you all the days of my life.",
                },
                {
                  question: "Can we write our own Catholic wedding vows?",
                  answer: "You may not replace the essential consent with custom poetry unless the approved text still clearly expresses free, faithful, permanent, and fruitful marriage; many pastors allow personal words only after the official exchange.",
                },
                {
                  question: "What questions does the priest ask before vows?",
                  answer: "He asks if you come freely and without reservation to marry and if you will love and honor each other all the days of your life, to which each responds affirmatively.",
                },
                {
                  question: "Are Catholic vows different from Protestant vows?",
                  answer: "Protestant ceremonies vary widely; Catholic consent follows the Order of Celebrating Matrimony with specific questions and formula required for sacramental validity in the Latin Church.",
                },
                {
                  question: "When are rings exchanged?",
                  answer: "Rings are blessed and exchanged after the consent, as a sign of love and fidelity, not as the words that constitute the sacramental form.",
                },
                {
                  question: "Do vows differ at Mass versus a ceremony without Mass?",
                  answer: "No. The consent formula is the same; only the surrounding liturgy changes between Nuptial Mass and Liturgy of the Word celebrations.",
                },
                {
                  question: "Is vow renewal the same as wedding vows?",
                  answer: "Anniversary renewals use pastoral wording and do not create a new marriage; sacramental consent happens once unless a prior union lacked valid form and is convalidated.",
                },
                {
                  question: "Where can I learn about the full ceremony?",
                  answer: "Read our Catholic wedding ceremony guide and Mass versus ceremony article for readings, processions, and Nuptial Blessing context.",
                },
              ]}
            />
            <RelatedArticles currentSlug="catholic-wedding-vows" />
            <ArticleBottomCTA />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
