#!/usr/bin/env python3
"""Generate the isometric car (#mercedes-eqs) and patch it into tools/house-generator.html.

The car is modelled in its own coordinates (l along the length from the rear,
w across from the far side, h up) and projected onto the scene's isometric
axes, so every edge stays parallel to the carport and the house.
"""
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
GEN = ROOT / "tools" / "house-generator.html"

# ground point of the rear, far-side corner; chosen so the wheels land on the
# existing wheel drawings at (299,385) and (389,333)
G = (222.8, 388.0)
LU = (0.866, -0.5)   # length axis (towards the front, up-right)
WU = (0.866, 0.5)    # width axis (towards the visible side, down-right)


H_SCALE = 1.08  # body heights below are written for a 54-unit roof


def P(l, w, h, raw=False):
    h = h if raw else h * H_SCALE
    return (G[0] + l * LU[0] + w * WU[0], G[1] + l * LU[1] + w * WU[1] - h)


def pts(*ps):
    return " ".join(f"{x:.1f},{y:.1f}" for x, y in (P(*p) for p in ps))


def poly(fill, *ps, extra=""):
    return f'<polygon points="{pts(*ps)}" fill="{fill}"{extra}/>'


def curve_d(ps, closed):
    """Catmull-Rom spline through the projected points, as cubic Béziers."""
    Q = [P(*p) for p in ps]
    n = len(Q)
    get = (lambda i: Q[i % n]) if closed else (lambda i: Q[max(0, min(n - 1, i))])
    d = f"M{Q[0][0]:.1f},{Q[0][1]:.1f}"
    for i in range(n if closed else n - 1):
        p0, p1, p2, p3 = get(i - 1), get(i), get(i + 1), get(i + 2)
        c1 = (p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6)
        c2 = (p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6)
        d += f" C{c1[0]:.1f},{c1[1]:.1f} {c2[0]:.1f},{c2[1]:.1f} {p2[0]:.1f},{p2[1]:.1f}"
    return d + (" Z" if closed else "")


def shape(fill, *ps, extra=""):
    return f'<path d="{curve_d(ps, True)}" fill="{fill}"{extra}/>'


def stroke(color, width, *ps, extra=""):
    return f'<path d="{curve_d(ps, False)}" fill="none" stroke="{color}" stroke-width="{width}" stroke-linecap="round"{extra}/>'


def line(stroke, width, *ps, extra=""):
    return f'<polyline points="{pts(*ps)}" fill="none" stroke="{stroke}" stroke-width="{width}" stroke-linecap="round" stroke-linejoin="round"{extra}/>'


# A circle of radius r in the car's side plane (spanned by LU and up) projects to an
# ellipse with semi-axes 0.707r and 1.225r, the long one tilted 30° from vertical.
WHEEL_R = 14.5


def wheel_ellipse(x, y, r, fill, extra=""):
    return (f'<ellipse cx="{x:.1f}" cy="{y:.1f}" rx="{0.7071 * r:.2f}" ry="{1.2247 * r:.2f}" '
            f'transform="rotate(30 {x:.1f} {y:.1f})" fill="{fill}"{extra}/>')


def side_point(l, w, h, r, theta):
    import math
    return P(l + r * math.cos(theta), w, h + r * math.sin(theta), raw=True)


def wheel(l, w=60):
    import math
    r = WHEEL_R
    out = []
    # tread: the tyre's far face shows behind the near one, offset across the car
    bx, by = P(l, w - 7, r, raw=True)
    fx, fy = P(l, w, r, raw=True)
    out.append(wheel_ellipse(bx, by, r, "#0d0f11"))
    out.append(f'<path d="M{bx:.1f},{by:.1f} L{fx:.1f},{fy:.1f}" stroke="#0d0f11" stroke-width="{2 * 0.7071 * r:.1f}" stroke-linecap="round"/>')
    out.append(wheel_ellipse(fx, fy, r, "#1c1f23", ' stroke="#0e1012" stroke-width="0.8"'))
    out.append(wheel_ellipse(fx, fy, r * 0.74, "#16191d", ' stroke="#c5cdd4" stroke-width="1.4"'))
    out.append(wheel_ellipse(fx, fy, r * 0.6, "none", ' stroke="#768089" stroke-width="1.2"'))
    spokes = []
    for k in range(5):
        t = math.pi * k / 5
        a = side_point(l, w, r, r * 0.68, t)
        b = side_point(l, w, r, r * 0.68, t + math.pi)
        spokes.append(f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}"/>')
    out.append('<g stroke="#d0d7de" stroke-width="1.05" opacity="0.92">' + "".join(spokes) + "</g>")
    out.append(wheel_ellipse(fx, fy, r * 0.2, "#22262b", ' stroke="#aeb6be" stroke-width="0.9"'))
    return "\n".join(out)


def wheel_well(l):
    x, y = P(l, 62, WHEEL_R, raw=True)
    return wheel_ellipse(x, y, WHEEL_R + 2.5, "#121417")


def far_wheel(l):
    x, y = P(l, 6, WHEEL_R, raw=True)
    return wheel_ellipse(x, y, WHEEL_R, "#0f1113")


html = GEN.read_text()
front_wheel = wheel(134)
rear_wheel = wheel(30)

# heights: sill 7, belt 36, roof 54; cabin narrower than the body (tumblehome)
parts = [
    # contact shadow strictly under the car
    shape("#121518", (6, 2, 0), (80, 0, 0), (152, 4, 0), (158, 31, 0), (152, 58, 0), (80, 62, 0), (6, 60, 0), (2, 31, 0),
          extra=' opacity="0.55"'),
    far_wheel(30), far_wheel(134),
    # body top (deck, shoulders, hood): rounded in plan, pointed nose
    shape("url(#eqsUpperBody)",
          (5, 1.5, 33), (40, 0, 35.5), (90, -0.5, 36.5), (128, 0.5, 35), (148, 5, 31), (158, 18, 28),
          (160, 31, 27.5), (158, 46, 28), (150, 58, 31), (130, 61.5, 35), (90, 62.5, 36.5), (40, 62.5, 35.5),
          (5, 60.5, 33), (0.5, 50, 31), (0, 31, 30.5), (0.5, 12, 31)),
    # rounded tail
    shape("#8e969e",
          (5, 1.5, 33), (0.5, 12, 31), (0, 31, 30.5), (0.5, 50, 31), (5, 60.5, 33),
          (3, 62, 20), (5, 61, 8), (1.5, 31, 6.5), (5, 1, 8), (3, 0, 20)),
    poly("#e9ecef", (0.6, 24, 12.5), (0.6, 38, 12.5), (0.6, 38, 17.5), (0.6, 24, 17.5), extra=' stroke="#495057" stroke-width="0.5"'),
    # visible flank: one continuous bow from tail to nose
    shape("url(#eqsFlankGrad)",
          (5, 60.5, 33), (40, 62.5, 35.5), (90, 62.5, 36.5), (130, 61.5, 35), (150, 58, 31), (158, 50, 26),
          (159, 52, 15), (152, 61, 8), (100, 62.5, 6.5), (30, 62.5, 6.5), (5, 61, 8), (2, 61.5, 20)),
    shape("url(#eqsLowerSculpt)", (42, 62.6, 10), (80, 62.7, 9), (116, 62.6, 10), (116, 62.6, 14), (80, 62.7, 15), (42, 62.6, 14),
          extra=' opacity="0.5"'),
    stroke("#f1f4f7", 1.1, (6, 61, 32), (40, 62.5, 34.5), (90, 62.5, 35.5), (130, 61.5, 34), (150, 58, 30.5), extra=' opacity="0.85"'),
    wheel_well(30), wheel_well(134),
    front_wheel, rear_wheel,
    # cabin: a single glass dome, rear window flowing into roof and windscreen
    shape("url(#eqsCanopyGlass)",
          (12, 8, 35.5), (28, 9.5, 46), (52, 10.5, 53.5), (76, 11, 55.5), (100, 10.5, 53), (118, 8, 45), (130, 5, 37),
          (132, 31, 36.5), (130, 57, 37), (118, 54, 45), (100, 51.5, 53), (76, 51, 55.5), (52, 51.5, 53.5),
          (28, 52.5, 46), (12, 54, 35.5), (9, 31, 34.5)),
    stroke("#ffffff", 3.5, (26, 22, 45), (52, 22, 53), (78, 22, 55), (98, 22, 53), extra=' opacity="0.13"'),
    stroke("#9aa3ac", 1.0, (40, 11, 50.5), (76, 11.5, 55.3), (106, 11, 51), extra=' opacity="0.7"'),
    # side glass following the roof arc, with chrome surround
    shape("url(#carSideGlass)",
          (16, 57.5, 37), (70, 58.5, 38), (124, 58, 37.5), (118, 54.5, 44.5), (100, 52, 52.5), (76, 51.5, 55),
          (52, 52, 53), (30, 53.5, 46), (20, 56, 40)),
    stroke("#101316", 3.0, (82, 58.5, 38), (82, 52.6, 54.2)),
    stroke("#101316", 2.4, (34, 57.6, 37.4), (40, 53.2, 49.2)),
    shape("#ffffff", (86, 58.5, 38.5), (96, 58.4, 38.5), (98, 52.6, 52), (90, 52.4, 54), extra=' opacity="0.1"'),
    stroke("#d0d7de", 1.4, (16, 57.5, 37), (30, 53.5, 46), (52, 52, 53), (76, 51.5, 55), (100, 52, 52.5), (118, 54.5, 44.5), (124, 58, 37.5)),
    stroke("#88919a", 0.9, (16, 57.5, 37), (70, 58.5, 38), (124, 58, 37.5)),
    # mirror and flush door handles
    shape("#4e555d", (116, 62, 39), (121, 62.5, 39.5), (121, 67, 38.5), (117, 67, 37.5), extra=' stroke="#1b1e22" stroke-width="0.6"'),
    line("#cbd2d9", 1.4, (62, 62.7, 30), (68, 62.7, 30.2)),
    line("#cbd2d9", 1.4, (98, 62.7, 31), (104, 62.6, 31)),
    # lights: rear light bar following the rounded tail, headlight on the visible corner
    stroke("url(#eqsTailGlow)", 3.4, (4, 1.5, 27.5), (0.6, 12, 27), (0.2, 31, 26.5), (0.6, 50, 27), (5, 60.5, 28.5), (9, 62, 29),
           extra=' filter="url(#glow)"'),
    stroke("#ffcccc", 1.0, (4, 2, 27.5), (0.6, 12, 27), (0.2, 31, 26.5), (0.6, 50, 27), (5, 60, 28.5)),
    stroke("#f0f7ff", 2.2, (144, 60, 31), (152, 56.5, 29.5), (157, 50, 27.5), extra=' filter="url(#glow)"'),
]
star_x, star_y = P(0.3, 31, 22.5)
parts.append(f'<circle cx="{star_x:.1f}" cy="{star_y:.1f}" r="2.4" fill="none" stroke="#d8dee4" stroke-width="0.8"/>')

defs = (
    '<defs>'
    '<linearGradient id="carSideGlass" x1="0%" y1="0%" x2="0%" y2="100%">'
    '<stop offset="0%" stop-color="#55606b"/><stop offset="100%" stop-color="#262d34"/></linearGradient>'
    '<linearGradient id="carRoofGlass" x1="0%" y1="0%" x2="100%" y2="100%">'
    '<stop offset="0%" stop-color="#4b5664"/><stop offset="55%" stop-color="#2a323c"/><stop offset="100%" stop-color="#1a2028"/></linearGradient>'
    '</defs>'
)
parts.insert(0, defs)

car = '<g id="mercedes-eqs">\n' + "\n".join("                    " + p for p in parts) + "\n                </g>\n\n                "

start = html.index('<g id="mercedes-eqs">')
end = html.index("<!-- Pilar Frontal Esquerdo do Telheiro")
GEN.write_text(html[:start] + car + html[end:])
print("car written:", len(parts), "parts")
