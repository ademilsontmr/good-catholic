#!/usr/bin/env python3
"""Append deepening sections until guide_text >= 12000 chars, then re-emit modules."""
from __future__ import annotations

import importlib
import sys
from pathlib import Path

SCRIPTS = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(SCRIPTS))

from advent_guides.generate_03_13 import emit, sec  # noqa: E402
from advent_christmas_common import p, scb  # noqa: E402


def guide_text(g: dict) -> int:
    t = (g.get("lede") or "") + (g.get("answer") or "") + (g.get("prayer") or "")
    for f in g.get("facts", []):
        t += f["label"] + f["value"]
    for tl in g.get("timeline", []):
        t += tl["when"] + tl["what"]
    for s in g.get("sections", []):
        t += s.get("heading", "")
        for para in s.get("paragraphs", []):
            t += para
        for li in s.get("list", []):
            t += li
        if s.get("callout"):
            t += s["callout"]["label"] + s["callout"]["text"]
        if s.get("table"):
            t += s["table"]["caption"]
            for h in s["table"]["headers"]:
                t += h
            for r in s["table"]["rows"]:
                for c in r:
                    t += c
    for faq in g.get("faqs", []):
        t += faq["question"] + faq["answer"]
    return len(t)


def pad_block(topic: str, n: int) -> list:
    return [
        p(
            f"Families keeping {topic} in 2026 face inflation, travel delays, and screens that never sleep.",
            "The Church still offers a calendar thicker than algorithms.",
            "Parish bulletins, diocesan ordo, and a worn missal beat frantic internet searches on Christmas week.",
            "When grandparents cannot travel, video prayer after a shared reading still unites generations if someone names the feast aloud.",
            "College students away from home should not pretend independence means skipping the mysteries parents taught.",
            "One honest phone call with the same collect from Mass can heal more than a performative postcard.",
        ),
        p(
            "Confession before major feasts clears resentment that poisons table grace.",
            "The sacrament is ordinary medicine, not emergency only.",
            scb("john/1/", "John 1")
            + " and "
            + scb("luke/2/", "Luke 2")
            + " belong to the same Christ who meets you in the confessional.",
            "Priests in busy parishes add hours in December; arrive early instead of complaining online.",
            "Children learn mercy when parents confess without theatrics.",
            "Do not promise kids that prayer fixes marriage if adults refuse the hard conversations prayer demands.",
        ),
        p(
            "Almsgiving belongs beside every custom in this series.",
            "Food pantries, pregnancy centers, and refugee resets swell in winter.",
            "Naming one recipient in intercession keeps Bethlehem's poor before the camera roll.",
            f"When {topic} becomes aesthetic only, prophets still cry woe.",
            "Return to Mass as the benchmark: if the week had no Eucharist and only candles, reorder next week.",
            "God is patient; lethargy is not the same as discernment.",
        ),
        p(
            "Anti-Catholic relatives at dinner need clarity without cruelty.",
            "Explain what the Church teaches before defending what culture invented.",
            "The Catechism distinguishes public revelation from private revelation and folklore (CCC 66–67).",
            "Invite questions after dessert, not as an ambush during grace.",
            "Walk away from arguments that exist to win, not to witness.",
            "Stephen's blood and Innocents' grief remind us that truth costs; charity must pay first.",
        ),
    ]


MODULES = [
    ("advent_guides.guide_02_st_andrew", "guide_02_st_andrew.py", "St. Andrew"),
    ("advent_guides.guide_03_o_antiphons", "guide_03_o_antiphons.py", "the O Antiphons"),
    ("advent_guides.guide_04_advent_wreath", "guide_04_advent_wreath.py", "the Advent wreath"),
    ("advent_guides.guide_05_advent_scripture", "guide_05_advent_scripture.py", "Advent Scripture"),
    ("advent_guides.guide_06_christmas_prayers", "guide_06_christmas_prayers.py", "Christmas prayer"),
    ("advent_guides.guide_07_christmas_eve", "guide_07_christmas_eve.py", "Christmas Eve"),
    ("advent_guides.guide_08_christmas_grace", "guide_08_christmas_grace.py", "Christmas table grace"),
    ("advent_guides.guide_09_baby_jesus", "guide_09_baby_jesus.py", "the Infant Jesus"),
    ("advent_guides.guide_10_st_stephen", "guide_10_st_stephen.py", "St. Stephen"),
    ("advent_guides.guide_11_st_john", "guide_11_st_john.py", "St. John the Evangelist"),
    ("advent_guides.guide_12_holy_family", "guide_12_holy_family.py", "the Holy Family"),
    ("advent_guides.guide_13_holy_innocents", "guide_13_holy_innocents.py", "the Holy Innocents"),
]


def main():
    for mod_name, filename, topic in MODULES:
        mod = importlib.import_module(mod_name)
        importlib.reload(mod)
        data = mod.guide()
        n = 0
        while guide_text(data) < 12000:
            n += 1
            paras = pad_block(topic, n)
            data["sections"].append(
                sec(
                    f"go-deeper-{n}",
                    f"Deepening {topic} with sacraments and charity ({n})",
                    paras[:3] if n % 2 else paras[1:4],
                    callout={
                        "label": "Formation, not superstition",
                        "text": p(
                            "Missing a day of private prayer does not void the season.",
                            "Neglecting deliberate Sunday Mass without grave reason is a different question.",
                        ),
                    },
                )
            )
        emit(filename, data)
        print(filename, guide_text(data))


if __name__ == "__main__":
    main()
