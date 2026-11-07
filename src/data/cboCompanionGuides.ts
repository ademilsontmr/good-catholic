import type { LiturgicalFeastGuide } from "./liturgicalFeastGuides";
import {
  CBO_COMPANION_ADVENT_CHRISTMAS,
  cboCompanionAdventChristmasBySlug,
} from "./cboCompanionGuidesAdventChristmas";
import {
  CBO_COMPANION_JANUARY,
  cboCompanionJanuaryBySlug,
} from "./cboCompanionGuidesJanuary";
import {
  CBO_COMPANION_FEBRUARY_LENT,
  cboCompanionFebruaryLentBySlug,
} from "./cboCompanionGuidesFebruaryLent";

export const CBO_COMPANION_GUIDES: LiturgicalFeastGuide[] = [
  ...CBO_COMPANION_ADVENT_CHRISTMAS,
  ...CBO_COMPANION_JANUARY,
  ...CBO_COMPANION_FEBRUARY_LENT,
];

export function cboCompanionGuideBySlug(slug: string): LiturgicalFeastGuide | undefined {
  return (
    cboCompanionAdventChristmasBySlug(slug) ??
    cboCompanionJanuaryBySlug(slug) ??
    cboCompanionFebruaryLentBySlug(slug)
  );
}

export const CBO_COMPANION_SLUGS = CBO_COMPANION_GUIDES.map((g) => g.slug);
