import { CATHOLIC_POPES, type PopeEntry } from "@/data/catholicPopes";
import popeWikiTable from "@/data/popeWikiTable.json";

export interface PopeTableRow extends PopeEntry {
  personalName: string;
  image: string;
  pontificate: string;
  birthPlace: string;
  duration: string;
}

const wikiByNum = Object.fromEntries(
  popeWikiTable.popes.map((p) => [p.num, p])
);

export const POPE_TABLE_ROWS: PopeTableRow[] = CATHOLIC_POPES.map((pope) => {
  const wiki = wikiByNum[pope.num];
  return {
    ...pope,
    personalName: wiki?.personalName ?? "",
    image: wiki?.image ?? "",
    pontificate: wiki?.pontificate ?? pope.reign,
    birthPlace: wiki?.birthPlace ?? "",
    duration: wiki?.duration ?? "",
  };
});

export const POPE_TABLE_SOURCE = popeWikiTable.source;
export const POPE_TABLE_UPDATED = popeWikiTable.updated;
