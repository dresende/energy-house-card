#!/usr/bin/env python3
"""Build energy-house-card.js from src/card.js with src/house.svg inlined."""
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
svg = (ROOT / "src" / "house.svg").read_text().strip()
inner = re.sub(r"^<svg[^>]*>|</svg>$", "", svg)
card = (ROOT / "src" / "card.js").read_text()

placeholder = '"__HOUSE_SVG__"'
if placeholder not in card:
    raise SystemExit("src/card.js is missing the __HOUSE_SVG__ placeholder")

out = ROOT / "energy-house-card.js"
out.write_text(card.replace(placeholder, json.dumps(inner).replace("${", "\\${")))
print(f"{out.name}: {out.stat().st_size // 1024} KB")
