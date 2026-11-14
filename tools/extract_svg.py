#!/usr/bin/env python3
"""Extract the house drawing from tools/house-generator.html into src/house.svg."""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
src = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "tools" / "house-generator.html"
html = src.read_text()

start = html.index('<svg id="energy-home-svg"')
start = html.index(">", start) + 1
end = html.index("<!-- 9. CAMADA", start)  # the generator's own flow layer is replaced by the card's
end = html.rfind("<!-- ====", 0, end)
inner = html[start:end]

inner = re.sub(r'<rect id="bg-rect"[^>]*/>', "", inner)

# scale() on <use> also scales x/y; place each tuft at x,y and scale around it
inner = re.sub(
    r'<use href="([^"]+)" x="([-\d.]+)" y="([-\d.]+)" transform="scale\(([\d.]+)\)"\s*/>',
    lambda m: f'<use href="{m[1]}" transform="translate({m[2]},{m[3]}) scale({m[4]})"/>',
    inner,
)
inner = re.sub(r"<!--.*?-->", "", inner, flags=re.S)
inner = re.sub(r">\s+<", "><", inner)
inner = re.sub(r"\s+", " ", inner).strip()

out = ROOT / "src" / "house.svg"
out.write_text('<svg xmlns="http://www.w3.org/2000/svg" viewBox="170 40 960 590">' + inner + "</svg>\n")
print(f"{out.relative_to(ROOT)}: {len(inner)} chars")
