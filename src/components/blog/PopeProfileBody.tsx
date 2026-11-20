import { lazy, type ComponentType } from "react";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { LinkedText } from "@/components/blog/LinkedText";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";

export interface PopeProfile {
  slug: string;
  directAnswer: string;
  sections: { h2: string; paras: string[] }[];
  keyFacts: string[];
  faqs: { question: string; answer: string }[];
}

interface Props {
  profile: PopeProfile;
  linkSlug: string;
}

/** The written profile of one pope: direct answer, its own sections, key facts and FAQs. */
function PopeProfileView({ profile, linkSlug }: Props) {
  return (
    <>
      <div className="prose prose-lg max-w-none">
        <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
          <p className="text-lg text-text leading-relaxed font-medium">{profile.directAnswer}</p>
        </div>
        <BlogArticleAd slot="1906776249" />
        {profile.sections.map((section, i) => (
          <section key={section.h2}>
            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">{section.h2}</h2>
            {section.paras.map((para) => (
              <LinkedText key={para.slice(0, 40)} className="text-text leading-relaxed mb-6" currentSlug={linkSlug}>
                {para}
              </LinkedText>
            ))}
            {i === 1 && (
              <QuizCTA
                title="Explore Catholic history"
                description="Take the Catholic life assessment for personalized guidance on doctrine, the papacy, and Church tradition."
              />
            )}
          </section>
        ))}
        {profile.keyFacts.length > 0 && (
          <>
            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Key Facts</h2>
            <ul className="list-disc pl-6 text-text space-y-2 mb-6">
              {profile.keyFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <BlogFAQ faqs={profile.faqs} linkAnswersSlug={linkSlug} />
    </>
  );
}

// One JSON file per pope, loaded only by that pope's page.
const profileLoaders = import.meta.glob<{ default: PopeProfile }>("../../data/popeProfiles/*.json");
const lazyBySlug = new Map<string, ComponentType<{ linkSlug: string }>>();

/** Lazy component rendering the profile for `slug`, or undefined when no profile has been written yet. */
export function popeProfileComponent(slug: string): ComponentType<{ linkSlug: string }> | undefined {
  const key = `../../data/popeProfiles/${slug}.json`;
  const load = profileLoaders[key];
  if (!load) return undefined;
  if (!lazyBySlug.has(slug)) {
    lazyBySlug.set(
      slug,
      lazy(() => load().then((m) => ({ default: ({ linkSlug }: { linkSlug: string }) => <PopeProfileView profile={m.default} linkSlug={linkSlug} /> })))
    );
  }
  return lazyBySlug.get(slug);
}
