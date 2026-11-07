"""Rich LiturgicalFeastGuide content for Advent–Christmas CBO companions."""

from advent_guides.guide_01_nov_feb import guide as guide_01
from advent_guides.guide_02_st_andrew import guide as guide_02
from advent_guides.guide_03_o_antiphons import guide as guide_03
from advent_guides.guide_04_advent_wreath import guide as guide_04
from advent_guides.guide_05_advent_scripture import guide as guide_05
from advent_guides.guide_06_christmas_prayers import guide as guide_06
from advent_guides.guide_07_christmas_eve import guide as guide_07
from advent_guides.guide_08_christmas_grace import guide as guide_08
from advent_guides.guide_09_baby_jesus import guide as guide_09
from advent_guides.guide_10_st_stephen import guide as guide_10
from advent_guides.guide_11_st_john import guide as guide_11
from advent_guides.guide_12_holy_family import guide as guide_12
from advent_guides.guide_13_holy_innocents import guide as guide_13


def build_guides():
    return [
        guide_01(),
        guide_02(),
        guide_03(),
        guide_04(),
        guide_05(),
        guide_06(),
        guide_07(),
        guide_08(),
        guide_09(),
        guide_10(),
        guide_11(),
        guide_12(),
        guide_13(),
    ]
