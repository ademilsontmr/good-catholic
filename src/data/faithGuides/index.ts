import type { LiturgicalFeastGuide } from "../liturgicalFeastGuides";
import whatDoesCatholicMean from "./what-does-catholic-mean";
import catholicChurchHierarchy from "./catholic-church-hierarchy";

/** General Catholic-faith explainers rendered by LiturgicalFeastGuidePage, one file per article. */
export const FAITH_GUIDES: LiturgicalFeastGuide[] = [whatDoesCatholicMean, catholicChurchHierarchy];

export function faithGuideBySlug(slug: string): LiturgicalFeastGuide | undefined {
  return FAITH_GUIDES.find((g) => g.slug === slug);
}
