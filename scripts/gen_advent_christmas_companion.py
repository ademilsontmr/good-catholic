#!/usr/bin/env python3
"""Generate scripts/advent-christmas-guides.json for build-cbo-advent-christmas.mjs"""
import json
import pathlib

from advent_christmas_common import DATE  # noqa: F401 — re-export for tests


from advent_christmas_guides_content import build_guides

GUIDES = build_guides()

if __name__ == "__main__":
    out = pathlib.Path(__file__).parent / "advent-christmas-guides.json"
    out.write_text(json.dumps(GUIDES, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"wrote {len(GUIDES)} guides to {out}")

