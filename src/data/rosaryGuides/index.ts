import type { LiturgicalFeastGuide } from "../liturgicalFeastGuides";
import joyfulMysteriesOfTheRosary from "./joyful-mysteries-of-the-rosary";
import sorrowfulMysteriesOfTheRosary from "./sorrowful-mysteries-of-the-rosary";
import gloriousMysteriesOfTheRosary from "./glorious-mysteries-of-the-rosary";
import luminousMysteriesOfTheRosary from "./luminous-mysteries-of-the-rosary";
import scripturalRosary from "./scriptural-rosary";
import rosaryInLatin from "./rosary-in-latin";
import g54DayRosaryNovena from "./54-day-rosary-novena";
import historyOfTheRosary from "./history-of-the-rosary";
import isTheRosaryBiblical from "./is-the-rosary-biblical";
import howManyBeadsOnARosary from "./how-many-beads-on-a-rosary";
import canYouWearARosary from "./can-you-wear-a-rosary";
import familyRosaryWithChildren from "./family-rosary-with-children";

/**
 * Rosary articles rendered by LiturgicalFeastGuidePage, one file per article;
 * every article links to the /rosary/ hub.
 */
export const ROSARY_GUIDES: LiturgicalFeastGuide[] = [
  joyfulMysteriesOfTheRosary,
  sorrowfulMysteriesOfTheRosary,
  gloriousMysteriesOfTheRosary,
  luminousMysteriesOfTheRosary,
  scripturalRosary,
  rosaryInLatin,
  g54DayRosaryNovena,
  historyOfTheRosary,
  isTheRosaryBiblical,
  howManyBeadsOnARosary,
  canYouWearARosary,
  familyRosaryWithChildren,
];

export function rosaryGuideBySlug(slug: string): LiturgicalFeastGuide | undefined {
  return ROSARY_GUIDES.find((g) => g.slug === slug);
}
