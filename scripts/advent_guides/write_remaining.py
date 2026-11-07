#!/usr/bin/env python3
"""Emit guides 02–13 as Python modules (run once)."""
from pathlib import Path
from advent_christmas_common import DATE, GC, p, scb, sgc

ROOT = Path(__file__).parent


def block(meta, sections, prayer, prayer_heading, related, faqs, facts, timeline):
    """Return Python source for a guide module."""
    import pprint

    def esc(s):
        return pprint.pformat(s, width=120)

    lines = [
        "from advent_christmas_common import DATE, p, scb, sgc",
        "",
        "def guide():",
        "    return {",
        f'        "slug": {esc(meta["slug"])},',
        f'        "title": {esc(meta["title"])},',
        f'        "h1": {esc(meta["h1"])},',
        f'        "description": {esc(meta["description"])},',
        f'        "keywords": {esc(meta["keywords"])},',
        f'        "readTime": {esc(meta["readTime"])},',
        '        "datePublished": DATE,',
        f'        "crumb": {esc(meta["crumb"])},',
        f'        "category": {esc(meta["category"])},',
        f'        "lede": {esc(meta["lede"])},',
        f'        "answer": {esc(meta["answer"])},',
        f'        "facts": {esc(facts)},',
        f'        "timeline": {esc(timeline)},',
        f'        "sections": {esc(sections)},',
        f'        "prayer": {esc(prayer)},',
        f'        "prayerHeading": {esc(prayer_heading)},',
        f'        "related": {esc(related)},',
        f'        "faqs": {esc(faqs)},',
        "    }",
        "",
    ]
    return "\n".join(lines)


def para_block(*sentences):
    return p(*sentences)


def triple(topic, s1, s2, s3):
    return [
        para_block(*s1),
        para_block(*s2),
        para_block(*s3),
    ]


def sec(i, heading, paragraphs, **extra):
    s = {"id": i, "heading": heading, "paragraphs": paragraphs}
    s.update(extra)
    return s
