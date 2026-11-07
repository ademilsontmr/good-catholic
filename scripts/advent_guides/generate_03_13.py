#!/usr/bin/env python3
"""One-shot emitter for guide_03 through guide_13. Run from scripts/: python3 advent_guides/generate_03_13.py"""
from __future__ import annotations

import pprint
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SCRIPTS = ROOT.parent
sys.path.insert(0, str(SCRIPTS))

from advent_christmas_common import CBO_ADVENT, DATE, p, scb, sgc  # noqa: E402


def emit(filename: str, data: dict) -> None:
    body = pprint.pformat(data, width=100, sort_dicts=False)
    src = (
        "from advent_christmas_common import CBO_ADVENT, DATE, p, scb, sgc\n\n\n"
        "def guide():\n"
        f"    return {body}\n"
    )
    (ROOT / filename).write_text(src, encoding="utf-8")
    print("wrote", filename)


def block(
    slug,
    title,
    h1,
    description,
    keywords,
    read_time,
    crumb,
    category,
    lede_parts,
    answer_parts,
    gc_key,
    gc_label,
    facts,
    timeline,
    sections,
    prayer,
    prayer_heading,
    related,
    faqs,
):
    lede = p(*lede_parts)
    answer = p(*answer_parts)
    return {
        "slug": slug,
        "title": title,
        "h1": h1,
        "description": description,
        "keywords": keywords,
        "readTime": read_time,
        "datePublished": DATE,
        "crumb": crumb,
        "category": category,
        "lede": lede,
        "answer": answer,
        "facts": facts,
        "timeline": timeline,
        "sections": sections,
        "prayer": prayer,
        "prayerHeading": prayer_heading,
        "related": related,
        "faqs": faqs,
    }


def sec(sid, heading, paragraphs, **kw):
    s = {"id": sid, "heading": heading, "paragraphs": paragraphs}
    s.update(kw)
    return s


REL_ADVENT = {"href": "/blog/advent/", "label": "Advent 2026"}
REL_XMAS = {"href": "/blog/christmas-day/", "label": "Christmas Day"}
REL_FEASTS = {"href": "/blog/catholic-feast-days/", "label": "Feast days calendar"}
REL_HUB = {
    "href": "/blog/catholic-saint-feast-prayers-nov-dec-jan-feb-guide/",
    "label": "Winter feast hub",
}
REL_NOVENA = {"href": "/blog/how-to-pray-a-novena-guide/", "label": "How to pray a novena"}


def doctrine_callout(extra: str = "") -> dict:
    text = p(
        "Liturgy is public prayer of the Church; household customs are devotion.",
        "Legends may adorn culture without becoming articles of faith.",
        extra,
    )
    return {"label": "Doctrine, devotion, and legend", "text": text}


def guide_o_antiphons_data():
    return block(
        slug="o-antiphons-advent-prayer-guide",
        title="O Antiphons: Advent Prayer Guide (Dec 17–23)",
        h1="The O Antiphons: Advent Evening Prayer from December 17 to 23",
        description="The seven O Antiphons of Advent (December 17–23): Latin titles, Isaiah roots, Magnificat antiphons at Vespers, and Catholic home prayer for the Advent climax.",
        keywords="o antiphons advent, o antiphons prayer, december 17 23 antiphons, advent vespers antiphons catholic, o come o come emmanuel antiphons",
        read_time="17 min",
        crumb="O Antiphons",
        category="Prayers & Devotions",
        lede_parts=(
            "For seven days before Christmas Eve, the Church sings seven ancient titles of Christ at Evening Prayer.",
            "Each antiphon begins with O and ends on a cry for the Messiah to come.",
            "Singing or reading them at home extends the liturgy; it does not replace Mass or the parish schedule.",
        ),
        answer_parts=(
            "The O Antiphons are sung at Magnificat antiphon from December 17 through December 23, 2026, in the Roman Rite.",
            "They draw on "
            + scb("isaiah/", "Isaiah")
            + " and later tradition, naming Wisdom, Lord, Root of Jesse, Key of David, Dawn, King, and Emmanuel.",
            "The hymn O Come, O Come, Emmanuel paraphrases them in English.",
            "See "
            + sgc("O_ANTIPHONS", "Catholic Bible Online's O Antiphons Advent guide")
            + " for the same texts and dates.",
            "They climax Advent longing before the Vigil; they are not charms that force Christmas peace in families.",
        ),
        gc_key="O_ANTIPHONS",
        gc_label="",
        facts=[
            {"label": "Dates 2026", "value": "December 17–23, 2026 (seven evenings before Christmas Eve)"},
            {"label": "Liturgical hour", "value": "Evening Prayer (Vespers); Magnificat antiphon"},
            {"label": "Classic hymn", "value": "O Come, O Come, Emmanuel (English paraphrase)"},
            {"label": "Acrostic devotion", "value": "Latin titles ERO CRAS spell tomorrow in reverse (popular note, not dogma)"},
            {"label": "Scripture root", "value": "Mostly Isaiah prophecies of the coming Messiah"},
            {"label": "Home use", "value": "Read antiphon, Magnificat or canticle, short collect"},
            {"label": "Wreath link", "value": "Often paired with Advent wreath on final week"},
        ],
        timeline=[
            {"when": "8th century onward", "what": "Antiphons attested in Frankish and Roman liturgical books for the days before Christmas."},
            {"when": "December 17, 2026", "what": "O Wisdom — Christ who orders creation."},
            {"when": "December 18, 2026", "what": "O Lord — God of Sinai coming to teach."},
            {"when": "December 19, 2026", "what": "O Root of Jesse — shoot from David's line."},
            {"when": "December 20, 2026", "what": "O Key of David — opens the prison of sin."},
            {"when": "December 21, 2026", "what": "O Radiant Dawn — light for those in darkness."},
            {"when": "December 22, 2026", "what": "O King of Nations — desire of the nations."},
            {"when": "December 23, 2026", "what": "O Emmanuel — God with us before the Vigil."},
        ],
        sections=[
            sec(
                "what-they-are",
                "What the O Antiphons are in Catholic worship",
                [
                    p(
                        "Each evening from December 17 the Roman Liturgy of the Hours places an antiphon before and after the Magnificat.",
                        "The community names Christ with a title drawn from prophecy, then Mary’s song answers with the God who has already begun to overturn the proud.",
                        "That pairing is the theological heart: longing and fulfillment held in one hour.",
                        "Parishes that celebrate Solemn Vespers in Advent let the assembly hear what monasteries have sung for centuries.",
                    ),
                    p(
                        "The antiphons are not private spells.",
                        "They belong to the Church’s official prayer.",
                        "Apps that dump Latin text without rubrics help; a missalette or "
                        + f"{{{{{CBO_ADVENT}|Catholic Bible Online's Advent calendar}}}}"
                        + " situates the week inside the 2026 season.",
                        "Home use should sound like a shortened Vespers—candle, antiphon, canticle, intercession—not a race to check boxes.",
                    ),
                    p(
                        "Children can learn one title per night.",
                        "Teens studying "
                        + scb("isaiah/11/", "Isaiah 11")
                        + " recognize Jesse’s root on December 19.",
                        "College students away from home can pray the same antiphon as parents lighting the wreath.",
                        "Unity across distance is one gift of a fixed calendar.",
                    ),
                ],
                callout=doctrine_callout(
                    "The ERO CRAS acrostic reading the Latin initials backward is pious curiosity, not a creedal claim."
                ),
            ),
            sec(
                "seven-titles",
                "The seven titles day by day",
                [
                    p(
                        "December 17 addresses Wisdom ordering creation.",
                        "December 18 calls the Lord who gave the Law on Sinai.",
                        "December 19 pleads with the Root of Jesse standing as a sign.",
                        "Each title is Christ read through the prophets.",
                    ),
                    p(
                        "December 20 names the Key of David.",
                        "December 21 begs the Rising Sun for those seated in shadow and death.",
                        "December 22 acclaims the King of Nations who rebuilds peace.",
                        "December 23 whispers Emmanuel before the Vigil.",
                        "Missing one night does not void the week; resume the calendar without superstition.",
                    ),
                    p(
                        "Bilingual households may alternate Latin and English from a hymnal.",
                        "The Church does not require Latin for laity.",
                        "Substance matters more than accent.",
                    ),
                ],
                table={
                    "caption": "O Antiphons 2026 at a glance",
                    "headers": ["Date", "Title", "Home prompt"],
                    "rows": [
                        ["Dec 17", "O Wisdom", "Ask Christ to order our work and words."],
                        ["Dec 18", "O Lord", "Confess one stubborn habit before dinner."],
                        ["Dec 19", "O Root of Jesse", "Read " + scb("isaiah/11/1", "Isaiah 11:1") + " aloud."],
                        ["Dec 20", "O Key of David", "Pray for someone locked in addiction or fear."],
                        ["Dec 21", "O Radiant Dawn", "Light wreath or one candle at dusk."],
                        ["Dec 22", "O King of Nations", "Intercede for migrants and diplomats."],
                        ["Dec 23", "O Emmanuel", "Sit five minutes in silence before wrapping gifts."],
                    ],
                },
            ),
            sec(
                "scripture-roots",
                "Isaiah, David, and the longing of Israel",
                [
                    p(
                        "The antiphons stitch together "
                        + scb("isaiah/7/", "Isaiah 7")
                        + ", "
                        + scb("isaiah/9/", "Isaiah 9")
                        + ", "
                        + scb("isaiah/11/", "Isaiah 11")
                        + ", and "
                        + scb("isaiah/22/", "Isaiah 22")
                        + " with other texts.",
                        "Israel waited for a king who would not betray, a teacher who would not lie, a healer who would not fade.",
                        "Christians confess that waiting ends in Jesus while still awaiting his glory.",
                        "Advent holds both movements.",
                    ),
                    p(
                        "Preachers who skip the Old Testament in December starve the antiphons of context.",
                        "Families can read the cited verse before singing the stanza that matches.",
                        "Scripture in order beats a meme with snowflakes.",
                    ),
                    p(
                        "When geopolitics grow loud, O King of Nations reminds the Church that nations are not ultimate.",
                        "Prayer trains desire toward the peace only the Incarnate Word can give.",
                        "That is doctrine, not sentiment.",
                    ),
                ],
                list=[
                    "Pair each antiphon with one corporal work of mercy that week.",
                    "Print texts from a licensed breviary or parish handout; avoid random PDFs with errors.",
                    "Link [[/blog/advent-wreath-prayers-blessing-catholic-guide/|wreath prayers]] when lighting candles.",
                ],
            ),
            sec(
                "emmanuel-hymn",
                "O Come, O Come, Emmanuel at home and in the pew",
                [
                    p(
                        "The familiar hymn compresses all seven titles into stanzas congregations know by heart.",
                        "Singing it after Evening Prayer on December 23 is a legitimate domestic custom.",
                        "It is not a substitute for Mass on the Fourth Sunday of Advent when that Sunday falls on December 20, 2026.",
                    ),
                    p(
                        "Musicians should respect copyright on modern settings.",
                        "Public domain plainchant recordings help households without organists.",
                        "Silence after the last stanza is also prayer.",
                    ),
                    p(
                        "If someone grieves this December, Emmanuel lands differently.",
                        "God-with-us does not erase sorrow; it promises company inside it.",
                        "Pastoral prayer names that truth without fake cheer.",
                    ),
                ],
            ),
            sec(
                "vespers-pattern",
                "A simple Vespers pattern for families",
                [
                    p(
                        "Light the wreath or a single candle.",
                        "Sign of the cross.",
                        "Sing or say the day’s O antiphon.",
                        "Pray the Magnificat from "
                        + scb("luke/1/", "Luke 1:46–55")
                        + " or use a spoken summary for young children.",
                    ),
                    p(
                        "Add intercessions: pope, bishop, parish, sick, dead, one personal need.",
                        "Close with Our Father.",
                        "Total time fifteen minutes is enough.",
                        "Longer is fine; scruples over length betray a magical mindset.",
                    ),
                ],
                table={
                    "caption": "Minimal O Antiphon week",
                    "headers": ["Step", "What"],
                    "rows": [
                        ["Open", "Hymn or antiphon for the calendar day"],
                        ["Canticle", "Magnificat or one Marian verse"],
                        ["Intercession", "Three spoken petitions"],
                        ["Close", "Our Father; optional Advent collect from Missal"],
                    ],
                },
            ),
            sec(
                "link-series",
                "Where the O Antiphons fit this Advent series",
                [
                    p(
                        "Andrew’s optional chain in late November starts longing; the antiphons finish it.",
                        "Wreath blessings gave weekly rhythm; this week gives daily speech.",
                        "Christmas Eve and Day guides carry what the antiphons anticipated.",
                    ),
                    p(
                        "Use the winter feast hub when you need dates across months.",
                        "Use Advent Scripture guide when you want readings beyond Isaiah snippets.",
                        "Each sibling page shares a slug on Guide Catholic and Catholic Bible Online.",
                    ),
                ],
                list=[
                    "[[/blog/st-andrew-prayer-catholic-guide/|St. Andrew]] — optional novena before Advent deepens.",
                    "[[/blog/advent-bible-verses-catholic-scripture-guide/|Advent Scripture]] — Gospel weeks in parallel.",
                    "[[/blog/christmas-eve-prayer-vigil-creche-guide/|Christmas Eve]] — Vigil after December 23.",
                ],
            ),
            sec(
                "choir-and-parish",
                "Parishes, choirs, and school programs",
                [
                    p(
                        "Music directors often schedule O Come, O Come, Emmanuel across December without explaining the antiphons behind it.",
                        "A thirty-second announcement before rehearsal catechizes adults who sang the hymn as children but never heard the titles explained.",
                        "Parochial school teachers can post one antiphon per day on a hallway board with the Isaiah reference in large print.",
                        "Youth groups comparing Advent to cultural holiday noise need this week as proof that the Church already has a voice louder than algorithms.",
                    ),
                    p(
                        "Recording choirs for social media is fine when it invites prayer, not vanity.",
                        "Liturgy belongs to God before it belongs to engagement metrics.",
                        "If livestreaming Vespers, include captions for the hard of hearing and post the text in the bulletin.",
                        "Accessibility is part of evangelization, not an afterthought.",
                    ),
                    p(
                        "Rural missions without a resident choir can still pray antiphons from a phone speaker after a decade of the rosary.",
                        "Monks and nuns on every continent keep the same calendar night.",
                        "Laity join that communion with or without perfect pitch.",
                    ),
                ],
            ),
            sec(
                "pastoral-notes",
                "Pastoral notes for busy Catholics",
                [
                    p(
                        "Shift workers may pray the antiphon at breakfast if dusk is impossible.",
                        "God hears prayer in the present moment; he is not a shift foreman with a punch card.",
                    ),
                    p(
                        "Rectors planning Solemn Vespers should announce dates early.",
                        "One well-led parish Vespers teaches more than seven solo internet attempts.",
                    ),
                    p(
                        "Anti-Catholic relatives at dinner need charity, not debate victory as an antiphon.",
                        "The titles describe Christ, not your rhetoric.",
                    ),
                ],
                callout={
                    "label": "No guaranteed outcome",
                    "text": "Praying the O Antiphons does not guarantee family harmony or financial relief. They tune desire toward Christ; answers remain divine wisdom.",
                },
            ),
        ],
        prayer=(
            "O Wisdom, ordering all things with strength and gentleness,\n"
            "come to teach us the way of prudence.\n"
            "O Emmanuel, God-with-us in Bethlehem and in our kitchens,\n"
            "dissolve the pride that blocks peace and the fear that blocks hope.\n"
            "Make our homes echo the Church's Evening Prayer this week.\n"
            "Through Christ our Lord. Amen."
        ),
        prayer_heading="Prayer for the O Antiphons week",
        related=[
            REL_ADVENT,
            {"href": "/blog/advent-wreath-prayers-blessing-catholic-guide/", "label": "Advent wreath blessing"},
            {"href": "/blog/advent-bible-verses-catholic-scripture-guide/", "label": "Advent Bible verses"},
            {"href": "/blog/st-andrew-prayer-catholic-guide/", "label": "St. Andrew novena"},
            REL_HUB,
            {"href": "/blog/catholic-christmas-prayers-complete-guide/", "label": "Christmas prayers"},
            REL_NOVENA,
        ],
        faqs=[
            {
                "question": "When are the O Antiphons in 2026?",
                "answer": "December 17 through December 23, 2026, at Evening Prayer each day.",
            },
            {
                "question": "Must I pray them in Latin?",
                "answer": "No. Vernacular liturgical books and hymns are fully valid for laity.",
            },
            {
                "question": "What if I miss a day?",
                "answer": "Continue with today's antiphon. The week is formation, not superstition.",
            },
            {
                "question": "Are they the same as the Advent wreath?",
                "answer": "Different customs. Many families combine wreath lighting with the antiphon on its day.",
            },
            {
                "question": "Is ERO CRAS Church teaching?",
                "answer": "It is a popular observation on Latin initials, not doctrine.",
            },
            {
                "question": "Which Gospel pairs with this week?",
                "answer": "Luke 1 dominates Marian themes; John 1 fits later in the octave. See the Advent Scripture guide.",
            },
            {
                "question": "Can children learn them?",
                "answer": "Yes. One title and one simple petition per night is enough.",
            },
            {
                "question": "Do they replace Mass?",
                "answer": "Never. They extend the Liturgy of the Hours, not Sunday or holy day obligation.",
            },
            {
                "question": "Where is the Catholic Bible Online twin?",
                "answer": "https://catholicbibleonline.com/blog/o-antiphons-advent-prayer-guide/",
            },
        ],
    )


def main():
    emit("guide_03_o_antiphons.py", guide_o_antiphons_data())


if __name__ == "__main__":
    main()
