/*! energy-house-card v2.3.1 */
const VERSION = "2.3.1";
const HOUSE_SVG = "__HOUSE_SVG__";
const VB = { x: 170, y: 40, w: 960, h: 590 };
const HUB = [43.2, 51.7];

// svg layers per part; the wallbox lives inside #battery but belongs to the car
const PARTS = {
  solar: ["solar"],
  grid: ["grid"],
  car: ["ev", "house-wallbox"],
  vegetation: ["vegetation", "vegetation-foreground", "planter-left", "planter-center", "planter-back"],
};
const FLOW_PARTS = {
  solar_home: ["solar"],
  solar_battery: ["solar", "battery"],
  battery_home: ["battery"],
  home_car: ["car"],
  grid_home: ["grid"],
};

const ROLES = {
  solar:   { icon: "mdi:solar-power-variant", color: "var(--ehc-solar)" },
  home:    { icon: "mdi:home-lightning-bolt", color: "var(--ehc-home)" },
  grid:    { icon: "mdi:transmission-tower",  color: "var(--ehc-grid)" },
  battery: { icon: "mdi:home-battery",        color: "var(--ehc-battery)" },
  car:     { icon: "mdi:car-electric",        color: "var(--ehc-car)" },
};

// card texts; English unless Home Assistant (or `language:`) says Portuguese
const I18N = {
  en: {
    roles: { solar: "Solar", home: "Home", grid: "Grid", battery: "Battery", car: "Car" },
    importing: "importing", exporting: "exporting", discharging: "discharging", charging: "charging",
    no_production: "no production", plugged: "plugged in", unplugged: "unplugged",
    today: "Today", produced: "Produced", consumed: "Consumed", imported: "Imported", exported: "Exported",
    car_today: "Car", self_consumption: "Self-consumption",
    aria: "House and energy flows",
    edit_hint: "Positioning mode: drag the values and the flow points",
    copy: "Copy YAML", copied: "Copied", select_copy: "Select and copy",
  },
  pt: {
    roles: { solar: "Solar", home: "Casa", grid: "Rede", battery: "Bateria", car: "Carro" },
    importing: "a importar", exporting: "a exportar", discharging: "a descarregar", charging: "a carregar",
    no_production: "sem produção", plugged: "ligado", unplugged: "desligado",
    today: "Hoje", produced: "Produzido", consumed: "Consumido", imported: "Importado", exported: "Exportado",
    car_today: "Carro", self_consumption: "Autoconsumo",
    aria: "Casa e fluxos de energia",
    edit_hint: "Modo de posicionamento: arrasta os valores e os pontos dos fluxos",
    copy: "Copiar YAML", copied: "Copiado", select_copy: "Seleciona e copia",
  },
};

function pickLang(config, hass) {
  const want = config?.language && config.language !== "auto" ? config.language : hass?.locale?.language || hass?.language || "en";
  return String(want).toLowerCase().startsWith("pt") ? "pt" : "en";
}

const DEFAULT_PLACES = {
  solar:   { x: 49, y: 0,  align: "center", valign: "top" },
  home:    { x: 62, y: 70, align: "center" },
  grid:    { x: 86, y: 40, align: "center" },
  battery: { x: 25, y: 66, align: "center" },
  car:     { x: 15, y: 33, align: "center" },
};

const DEFAULT_FLOWS = {
  solar_home:    [[49.5, 23.7], [47.7, 39], [43.2, 51.7]],
  solar_battery: [[46.9, 25.4], [38.5, 30.8], [29.4, 34.1], [29.4, 37.6], [31.6, 39.8], [31.6, 44.4]],
  battery_home:  [[30.4, 50.5], [36.8, 56.3], [43.2, 51.7]],
  home_car:      [[43.2, 51.7], [34.4, 47.1], [25.9, 45.1], [16.5, 50]],
  grid_home:     [[94.3, 12.7], [85.4, 22], [73.1, 27.5], [58.3, 35.6], [43.2, 51.7]],
};

// recolourable parts: gradients and flat colours drawn as shades of `base`
const PALETTE = {
  walls: {
    base: "#c9a986",
    gradients: ["woodRight", "woodLeft"],
    colors: ["#856546", "#a6825c", "#6e543b"],
  },
  deck: {
    base: "#b89b7c",
    gradients: ["deckGrad"],
    colors: ["#8c6f52", "#7c6248", "#5e4934", "#9c8062", "#634d38", "#8c7054", "#4f3d2b", "#6e563e"],
  },
  car: {
    base: "#b9c0c6",
    gradients: ["eqsUpperBody", "eqsFlankGrad", "eqsLowerSculpt"],
    colors: ["#8e969e"],
  },
};
const DEFAULT_COLORS = { walls: "#f2f0eb" };
const defaultColor = (part) => DEFAULT_COLORS[part] ?? PALETTE[part].base;

function toRgb(c) {
  if (Array.isArray(c) && c.length === 3) return c.map(Number);
  const m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(String(c ?? "").trim());
  if (!m) return null;
  const h = m[1].length === 3 ? m[1].replace(/./g, "$&$&") : m[1];
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
}

const toHex = (rgb) => "#" + rgb.map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0")).join("");
const lum = ([r, g, b]) => 0.2126 * r + 0.7152 * g + 0.0722 * b;

// the original colour's brightness relative to the part's base, applied to the new base
function shade(target, orig, base) {
  const f = lum(toRgb(orig)) / lum(toRgb(base));
  if (f <= 1) return toHex(target.map((v) => v * f));
  const t = Math.min(1, (f - 1) * 1.5);
  return toHex(target.map((v) => v + (255 - v) * t));
}

const toSvg = ([x, y]) => [VB.x + (x / 100) * VB.w, VB.y + (y / 100) * VB.h];

const ENTITY_KEYS = {
  solar: "solar_power", home: "home_power", grid: "grid_power",
  battery: "battery_power", car: "car_power",
};
const SECONDARY_KEYS = { battery: "battery_soc", car: "car_soc" };

const SOURCE_COLOR = { solar: "var(--ehc-solar)", battery: "var(--ehc-battery)", grid: "var(--ehc-grid)" };

function toWatts(stateObj) {
  if (!stateObj) return null;
  const v = parseFloat(stateObj.state);
  if (!isFinite(v)) return null;
  const u = (stateObj.attributes?.unit_of_measurement || "W").trim();
  if (u === "kW") return v * 1000;
  if (u === "MW") return v * 1e6;
  return v;
}

function toKwh(stateObj) {
  if (!stateObj) return null;
  const v = parseFloat(stateObj.state);
  if (!isFinite(v)) return null;
  const u = (stateObj.attributes?.unit_of_measurement || "kWh").trim();
  if (u === "Wh") return v / 1000;
  if (u === "MWh") return v * 1000;
  return v;
}

function fmtPower(w) {
  if (w == null) return "—";
  const a = Math.abs(w);
  if (Math.round(a) === 0) return "—";
  if (a >= 1000) return `${(a / 1000).toFixed(a >= 10000 ? 1 : 2)} kW`;
  return `${Math.round(a)} W`;
}

function fmtEnergy(k) {
  if (k == null) return "—";
  return `${k.toFixed(k >= 100 ? 0 : 1)} kWh`;
}

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function routeEnergy(p) {
  const S = Math.max(0, p.solar ?? 0);
  const G = p.grid ?? 0;
  const B = p.battery ?? 0;
  const C = Math.max(0, p.car ?? 0);
  const L = p.home != null ? Math.max(0, p.home) : Math.max(0, S + B + G);

  const battDis = Math.max(0, B);
  const battChg = Math.max(0, -B);
  const gridImp = Math.max(0, G);
  const gridExp = Math.max(0, -G);

  // a charging battery takes solar first (as hybrid inverters do), so the
  // house→battery path only lights up when the sun can't cover the charge
  const solarToBatt = Math.min(S, battChg);
  const solarToLoad = Math.min(S - solarToBatt, L);
  let rem = S - solarToBatt - solarToLoad;
  const solarToGrid = Math.min(rem, gridExp);
  const battToLoad = Math.min(battDis, Math.max(0, L - solarToLoad));
  const battToGrid = Math.max(0, gridExp - solarToGrid);
  const gridToBatt = Math.max(0, battChg - solarToBatt);

  const shares = { solar: solarToLoad, battery: battToLoad, grid: Math.max(0, L - solarToLoad - battToLoad) };
  const carSource = Object.entries(shares).sort((a, b) => b[1] - a[1])[0][0];

  return {
    load: L,
    flows: {
      solar_home:    { w: solarToLoad, dir: 1, color: SOURCE_COLOR.solar },
      solar_battery: { w: solarToBatt, dir: 1, color: SOURCE_COLOR.solar },
      battery_home:  battToLoad >= gridToBatt
        ? { w: battToLoad, dir: 1, color: SOURCE_COLOR.battery }
        : { w: gridToBatt, dir: -1, color: SOURCE_COLOR.grid },
      home_car:      { w: C, dir: 1, color: SOURCE_COLOR[carSource] },
      grid_home:     gridImp > 0
        ? { w: gridImp, dir: 1, color: SOURCE_COLOR.grid }
        : { w: gridExp, dir: -1, color: battToGrid > solarToGrid ? SOURCE_COLOR.battery : SOURCE_COLOR.solar },
    },
  };
}

const WORDS = {
  solar: ["solar", "pv", "photovoltaic", "fotovoltaico", "inverter", "inversor", "producao", "production"],
  grid: ["grid", "rede", "net", "meter", "contador", "utility"],
  battery: ["battery", "bateria", "batt", "powerwall", "storage"],
  home: ["home", "house", "casa", "load", "consumo", "consumption"],
  car: ["car", "ev", "charger", "wallbox", "carregador", "carro", "vehicle", "tesla", "zappi", "easee"],
  gadget: ["phone", "iphone", "pixel", "galaxy", "watch", "tablet", "ipad", "remote", "comando", "door", "porta", "motion", "movimento", "contact", "button", "botao"],
};

function tokens(id, stateObj) {
  const name = stateObj?.attributes?.friendly_name || "";
  return `${id} ${name}`.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").split(/[^a-z0-9]+/).filter(Boolean);
}

function hits(toks, words) {
  return toks.filter((t) => words.some((w) => t === w || (w.length > 3 && t.startsWith(w)))).length;
}

// best entity of a kind whose name mentions `want` and none of `avoid`
function guessEntity(hass, used, { domain = "sensor", deviceClass, units, want, avoid = [] }) {
  let best = null;
  let bestScore = 0;
  for (const [id, s] of Object.entries(hass?.states || {})) {
    if (!id.startsWith(`${domain}.`) || used.has(id)) continue;
    const dc = s.attributes?.device_class;
    const unit = s.attributes?.unit_of_measurement;
    const kindOk = dc ? dc === deviceClass : !!units?.includes(unit);
    if (!kindOk) continue;
    const toks = tokens(id, s);
    if (avoid.some((words) => hits(toks, words))) continue;
    const score = want.reduce((sum, words) => sum + (hits(toks, words) ? 1 : 0), 0);
    if (score === want.length && score > bestScore) {
      best = id;
      bestScore = score;
    }
  }
  if (best) used.add(best);
  return best;
}

function guessEntities(hass) {
  const used = new Set();
  const power = { deviceClass: "power", units: ["W", "kW"] };
  const soc = { deviceClass: "battery", units: ["%"] };
  const found = {
    solar_power: guessEntity(hass, used, { ...power, want: [WORDS.solar], avoid: [WORDS.car, WORDS.battery] }),
    battery_power: guessEntity(hass, used, { ...power, want: [WORDS.battery], avoid: [WORDS.car, WORDS.gadget] }),
    car_power: guessEntity(hass, used, { ...power, want: [WORDS.car] }),
    grid_power: guessEntity(hass, used, { ...power, want: [WORDS.grid], avoid: [WORDS.car] }),
    home_power: guessEntity(hass, used, { ...power, want: [WORDS.home], avoid: [WORDS.car, WORDS.solar] }),
    car_soc: guessEntity(hass, used, { ...soc, want: [WORDS.car], avoid: [WORDS.gadget] }),
    battery_soc: guessEntity(hass, used, { ...soc, want: [WORDS.battery], avoid: [WORDS.car, WORDS.gadget] }),
    car_plugged: guessEntity(hass, used, { domain: "binary_sensor", deviceClass: "plug", want: [WORDS.car] }),
  };
  return Object.fromEntries(Object.entries(found).filter(([, v]) => v));
}

async function ensureHaForm() {
  if (customElements.get("ha-form") && customElements.get("ha-entity-picker")) return;
  try {
    const helpers = await window.loadCardHelpers?.();
    const card = await helpers?.createCardElement({ type: "entities", entities: [] });
    await card?.constructor?.getConfigElement?.();
  } catch (e) {
    // the YAML editor still works if HA's form components can't be preloaded
  }
}

class EnergyHouseCard extends HTMLElement {
  static getStubConfig(hass) {
    return { entities: guessEntities(hass) };
  }

  static async getConfigElement() {
    await ensureHaForm();
    return document.createElement("energy-house-card-editor");
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._flowState = {};
    this._raf = null;
    this._visible = true;
    this._last = 0;
    this._drag = null;
  }

  setConfig(config) {
    if (!config || typeof config !== "object") throw new Error("Invalid configuration");
    this._config = {
      flow_threshold: 10,
      invert_grid: false,
      invert_battery: false,
      edit_positions: false,
      ...config,
      entities: { ...(config.entities || {}) },
    };
    const ents = this._config.entities;
    const hasRole = (r) => !!ents[ENTITY_KEYS[r]] || (config.places || []).some((p) => p.role === r && p.entity);
    this._show = {
      solar: hasRole("solar"),
      battery: hasRole("battery"),
      car: hasRole("car"),
      grid: hasRole("grid"),
      vegetation: true,
      ...(config.show || {}),
    };
    this._lang = pickLang(this._config, this._hass);
    this._places = this._buildPlaces();
    this._flows = {};
    for (const [k, pts] of Object.entries(DEFAULT_FLOWS)) {
      const custom = config.flows?.[k];
      this._flows[k] = (Array.isArray(custom) && custom.length >= 2 ? custom : pts).map((p) => [Number(p[0]), Number(p[1])]);
    }
    this._render();
    if (this._hass) this._update();
  }

  _buildPlaces() {
    const ents = this._config.entities;
    const list = [];
    const userPlaces = Array.isArray(this._config.places) ? this._config.places : [];
    const rolesInUser = new Set(userPlaces.filter((p) => p.role).map((p) => p.role));
    for (const role of Object.keys(ROLES)) {
      if (rolesInUser.has(role)) continue;
      if (role !== "home" && this._show[role] === false) continue;
      const entity = ents[ENTITY_KEYS[role]];
      if (!entity && role !== "home") continue;
      list.push({ role, entity, secondary: ents[SECONDARY_KEYS[role]], ...DEFAULT_PLACES[role] });
    }
    for (const p of userPlaces) {
      if (p.role && p.role !== "home" && this._show[p.role] === false) continue;
      const base = p.role ? DEFAULT_PLACES[p.role] || {} : { align: "center" };
      list.push({
        ...base,
        ...p,
        entity: p.entity ?? (p.role ? ents[ENTITY_KEYS[p.role]] : undefined),
        secondary: p.secondary ?? (p.role ? ents[SECONDARY_KEYS[p.role]] : undefined),
      });
    }
    return list.map((p, i) => ({ ...p, id: i, x: Number(p.x ?? 50), y: Number(p.y ?? 50) }));
  }

  get _t() {
    return I18N[this._lang || "en"];
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    const lang = pickLang(this._config, hass);
    if (lang !== this._lang) {
      this._lang = lang;
      this._render();
    }
    this._update();
  }

  getCardSize() {
    return 7;
  }

  getGridOptions() {
    return { columns: 12, min_columns: 6, rows: "auto" };
  }

  connectedCallback() {
    this._io = new IntersectionObserver((entries) => {
      this._visible = entries.some((e) => e.isIntersecting);
      this._loop();
    });
    this._io.observe(this);
    this._onVis = () => this._loop();
    document.addEventListener("visibilitychange", this._onVis);
    this._loop();
  }

  disconnectedCallback() {
    this._io?.disconnect();
    document.removeEventListener("visibilitychange", this._onVis);
    cancelAnimationFrame(this._raf);
    this._raf = null;
  }

  _state(id) {
    return id ? this._hass?.states?.[id] : undefined;
  }

  _power(role) {
    const place = this._places.find((p) => p.role === role);
    const id = place?.entity ?? this._config.entities[ENTITY_KEYS[role]];
    let w = toWatts(this._state(id));
    if (w == null) return null;
    if (role === "grid" && this._config.invert_grid) w = -w;
    if (role === "battery" && this._config.invert_battery) w = -w;
    return w;
  }

  _render() {
    const c = this._config;
    const height = c.full_screen ? "calc(100vh - var(--header-height, 56px) - 16px)" : c.height;
    this.toggleAttribute("sized", !!height);
    this.style.setProperty("--ehc-height", height || "auto");
    this.style.setProperty("--ehc-ar", String(VB.w / VB.h));
    const [hx, hy] = toSvg(c.hub || HUB);
    this.shadowRoot.innerHTML = `
      <style>${STYLE}</style>
      <ha-card>
        <div class="stage-wrap">
        <div class="stage" id="stage">
          <svg class="scene" viewBox="${VB.x} ${VB.y} ${VB.w} ${VB.h}" preserveAspectRatio="xMidYMid meet" id="svg" role="img" aria-label="${this._t.aria}">
            <g class="art">${HOUSE_SVG}</g>
            <g id="trails"></g>
            <g id="dots" filter="url(#glow)"></g>
            <g id="hub" class="hub">
              <circle cx="${hx}" cy="${hy}" r="12" class="hub-halo" filter="url(#glow)"/>
              <circle cx="${hx}" cy="${hy}" r="8.5" class="hub-core"/>
              <path d="M${hx + 1},${hy - 5} l-4,5.5 h3.5 l-1.5,4.5 l4,-5.5 h-3.5 z" class="hub-bolt"/>
            </g>
            <g id="handles"></g>
          </svg>
          <div id="places"></div>
        </div>
        </div>
        <div class="foot" id="foot"></div>
        ${c.edit_positions ? `
        <div class="editor">
          <div class="editor-head">
            <span>${this._t.edit_hint}</span>
            <button type="button" id="copy">${this._t.copy}</button>
          </div>
          <textarea id="yaml" readonly spellcheck="false"></textarea>
        </div>` : ""}
      </ha-card>`;

    const root = this.shadowRoot;
    this._els = {
      stage: root.getElementById("stage"),
      svg: root.getElementById("svg"),
      trails: root.getElementById("trails"),
      dots: root.getElementById("dots"),
      handles: root.getElementById("handles"),
      places: root.getElementById("places"),
      foot: root.getElementById("foot"),
      yaml: root.getElementById("yaml"),
      hub: root.getElementById("hub"),
    };
    this._applyParts();
    this._applyColors();
    this._buildFlows();
    this._buildPlacesDom();
    if (c.edit_positions) {
      this._buildHandles();
      this._writeYaml();
      root.getElementById("copy").addEventListener("click", () => this._copyYaml());
    }
  }

  _applyParts() {
    const svg = this._els.svg;
    const s = this._show;
    for (const [part, ids] of Object.entries(PARTS)) {
      for (const id of ids) {
        const el = svg.querySelector(`#${id}`);
        if (el) el.style.display = s[part] === false ? "none" : "";
      }
    }
    const battery = svg.querySelector("#battery");
    if (battery) {
      for (const child of battery.children) {
        if (child.id === "house-wallbox") continue;
        child.style.display = s.battery === false ? "none" : "";
      }
    }
  }

  _applyColors() {
    const svg = this._els.svg;
    const chosen = { ...DEFAULT_COLORS, ...(this._config.colors || {}) };
    for (const [part, pal] of Object.entries(PALETTE)) {
      const target = toRgb(chosen[part]);
      if (!target) continue;
      for (const id of pal.gradients) {
        svg.querySelectorAll(`#${id} stop`).forEach((s) => s.setAttribute("stop-color", shade(target, s.getAttribute("stop-color"), pal.base)));
      }
      for (const c of pal.colors) {
        const nc = shade(target, c, pal.base);
        svg.querySelectorAll(`[fill="${c}"]`).forEach((el) => el.setAttribute("fill", nc));
        svg.querySelectorAll(`[stroke="${c}"]`).forEach((el) => el.setAttribute("stroke", nc));
      }
    }
  }

  _flowVisible(key) {
    return (FLOW_PARTS[key] || []).every((p) => this._show[p] !== false);
  }

  // Catmull-Rom through the control points, as cubic Béziers
  _pathD(points) {
    const P = points.map(toSvg);
    if (P.length === 2) return `M${P[0]} L${P[1]}`;
    let d = `M${P[0][0].toFixed(1)},${P[0][1].toFixed(1)}`;
    for (let i = 0; i < P.length - 1; i++) {
      const p0 = P[i - 1] || P[i];
      const p1 = P[i];
      const p2 = P[i + 1];
      const p3 = P[i + 2] || p2;
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
    }
    return d;
  }

  _buildFlows() {
    const ns = "http://www.w3.org/2000/svg";
    this._els.trails.innerHTML = "";
    this._els.dots.innerHTML = "";
    const prevAll = this._flowState;
    this._flowState = {};
    for (const key of Object.keys(this._flows)) {
      if (!this._flowVisible(key)) continue;
      const trail = document.createElementNS(ns, "path");
      trail.setAttribute("class", "trail");
      trail.setAttribute("d", this._pathD(this._flows[key]));
      this._els.trails.appendChild(trail);
      const g = document.createElementNS(ns, "g");
      this._els.dots.appendChild(g);
      const prev = prevAll[key];
      this._flowState[key] = {
        trail, g, dots: [],
        len: 0,
        phase: prev?.phase ?? Math.random(),
        speed: prev?.speed ?? 0,
        target: prev?.target ?? 0,
        n: 0, dir: prev?.dir ?? 1, color: prev?.color ?? "currentColor", w: prev?.w ?? 0,
      };
      this._flowState[key].len = trail.getTotalLength?.() || 0;
    }
  }

  _setDots(st, n) {
    if (st.n === n) return;
    const ns = "http://www.w3.org/2000/svg";
    st.g.innerHTML = "";
    st.dots = [];
    for (let i = 0; i < n; i++) {
      const tail = [];
      for (let t = 0; t < 3; t++) {
        const c = document.createElementNS(ns, "circle");
        c.setAttribute("r", String([4.6, 3.2, 2.1][t]));
        c.setAttribute("opacity", String([1, 0.55, 0.28][t]));
        st.g.appendChild(c);
        tail.push(c);
      }
      st.dots.push(tail);
    }
    st.n = n;
  }

  _buildPlacesDom() {
    this._els.places.innerHTML = this._places.map((p) => {
      const meta = ROLES[p.role] || {};
      const color = p.color || meta.color || "var(--ehc-accent)";
      const icon = p.icon || meta.icon || "mdi:information-outline";
      const name = p.name ?? (p.role ? this._config.names?.[p.role] || this._t.roles[p.role] : "");
      const ring = p.role === "battery" || p.role === "car";
      return `
        <button type="button" class="place align-${esc(p.align || "center")} valign-${esc(p.valign || "center")} ${this._config.edit_positions ? "editable" : ""}"
          data-id="${p.id}" style="left:${p.x}%;top:${p.y}%;--c:${esc(color)}">
          <span class="ico">
            ${ring ? `<svg class="ring" viewBox="0 0 36 36"><circle class="ring-bg" cx="18" cy="18" r="16"/><circle class="ring-fg" cx="18" cy="18" r="16" pathLength="100" stroke-dasharray="0 100"/></svg>` : ""}
            <ha-icon icon="${esc(icon)}"></ha-icon>
          </span>
          <span class="txt">
            <span class="name">${esc(name)}</span>
            <span class="val">—</span>
            <span class="sub"></span>
          </span>
        </button>`;
    }).join("");
    this._els.places.querySelectorAll(".place").forEach((el) => {
      const place = this._places[Number(el.dataset.id)];
      if (this._config.edit_positions) {
        el.addEventListener("pointerdown", (e) => this._startDrag(e, { type: "place", place, el }));
      } else {
        el.addEventListener("click", () => this._moreInfo(place.entity));
      }
    });
  }

  _moreInfo(entityId) {
    if (!entityId) return;
    this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId }, bubbles: true, composed: true }));
  }

  _update() {
    if (!this._els) return;
    const powers = {};
    for (const role of Object.keys(ROLES)) powers[role] = this._power(role);
    const routed = routeEnergy(powers);
    if (powers.home == null && (powers.solar != null || powers.grid != null)) powers.home = routed.load;

    const dark = !!this._hass?.themes?.darkMode;
    this.toggleAttribute("dark", dark);

    this._els.places.querySelectorAll(".place").forEach((el) => {
      const p = this._places[Number(el.dataset.id)];
      const valEl = el.querySelector(".val");
      const subEl = el.querySelector(".sub");
      let val = "—";
      let sub = "";
      let active = false;
      if (p.role) {
        const w = powers[p.role];
        val = fmtPower(w);
        active = w != null && Math.abs(w) >= this._config.flow_threshold;
        const t = this._t;
        if (p.role === "grid" && w != null && active) sub = w > 0 ? t.importing : t.exporting;
        if (p.role === "battery" && w != null && active) sub = w > 0 ? t.discharging : t.charging;
        if (p.role === "solar" && w != null && !active) sub = t.no_production;
      } else {
        const s = this._state(p.entity);
        if (s && !["unavailable", "unknown"].includes(s.state)) {
          const n = parseFloat(s.state);
          const unit = s.attributes?.unit_of_measurement || "";
          val = isFinite(n) && p.decimals != null ? `${n.toFixed(p.decimals)} ${unit}`.trim()
            : this._hass.formatEntityState ? this._hass.formatEntityState(s) : `${s.state} ${unit}`.trim();
        }
      }
      if (p.secondary) {
        const s2 = this._state(p.secondary);
        const n2 = s2 ? parseFloat(s2.state) : NaN;
        const ring = el.querySelector(".ring-fg");
        if (isFinite(n2)) {
          const unit = s2.attributes?.unit_of_measurement ?? "%";
          const secTxt = `${Math.round(n2)}${unit === "%" ? "%" : " " + unit}`;
          sub = sub ? `${secTxt} · ${sub}` : secTxt;
          if (ring && unit === "%") ring.setAttribute("stroke-dasharray", `${Math.max(0, Math.min(100, n2))} 100`);
        } else if (ring) {
          ring.setAttribute("stroke-dasharray", "0 100");
        }
      }
      if (p.role === "car") {
        const plug = this._state(this._config.entities.car_plugged);
        if (plug) {
          const on = plug.state === "on";
          const txt = on ? this._t.plugged : this._t.unplugged;
          sub = sub ? `${sub} · ${txt}` : txt;
        }
      }
      valEl.textContent = val;
      subEl.textContent = sub;
      subEl.hidden = !sub;
      el.classList.toggle("active", active);
      el.classList.toggle("missing", val === "—");
      el.title = p.entity || "";
    });

    const th = this._config.flow_threshold;
    for (const [key, f] of Object.entries(routed.flows)) {
      const st = this._flowState[key];
      if (!st) continue;
      const roleA = key.split("_");
      const has = roleA.every((r) => r === "home" || powers[r] != null);
      const w = has ? f.w : 0;
      st.w = w;
      st.dir = f.dir;
      st.color = f.color;
      st.target = w >= th ? 0.12 + 0.38 * Math.min(1, Math.log10(1 + w / 50) / Math.log10(101)) : 0;
      const n = w < th ? 0 : w < 400 ? 1 : w < 1500 ? 2 : w < 4000 ? 3 : 4;
      this._setDots(st, n);
      st.g.style.color = f.color;
      st.trail.style.color = f.color;
      st.trail.classList.toggle("on", w >= th);
      st.trail.style.opacity = w >= th ? String(0.35 + 0.45 * Math.min(1, w / 5000)) : "";
    }
    this._els.hub.classList.toggle("on", Object.values(this._flowState).some((s) => s.w >= th));

    this._renderFoot();
    if (this._reduced()) this._drawFrame(0);
    this._loop();
  }

  _renderFoot() {
    const e = this._config.entities;
    const t = this._t;
    const items = [
      ["produced", e.solar_energy_today, "var(--ehc-solar)"],
      ["consumed", e.home_energy_today, "var(--ehc-home)"],
      ["imported", e.grid_import_today, "var(--ehc-grid)"],
      ["exported", e.grid_export_today, "var(--ehc-grid)"],
      ["car_today", e.car_energy_today, "var(--ehc-car)"],
    ].filter(([, id]) => id);
    if (!items.length) {
      this._els.foot.hidden = true;
      return;
    }
    const vals = items.map(([label, id, color]) => [label, toKwh(this._state(id)), color, id]);
    const prod = vals.find((v) => v[0] === "produced")?.[1];
    const exp = vals.find((v) => v[0] === "exported")?.[1];
    let extra = "";
    if (prod != null && exp != null && prod > 0) {
      extra = `<div class="stat"><span class="k">${t.self_consumption}</span><span class="v">${Math.round(Math.max(0, 1 - exp / prod) * 100)}%</span></div>`;
    }
    this._els.foot.hidden = false;
    this._els.foot.innerHTML = `<div class="foot-label">${t.today}</div><div class="stats">` + vals.map(([label, v, color, id]) =>
      `<button type="button" class="stat" data-entity="${esc(id)}"><span class="k"><i style="background:${color}"></i>${t[label]}</span><span class="v">${fmtEnergy(v)}</span></button>`
    ).join("") + extra + `</div>`;
    this._els.foot.querySelectorAll("[data-entity]").forEach((b) => b.addEventListener("click", () => this._moreInfo(b.dataset.entity)));
  }

  _reduced() {
    return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  }

  _loop() {
    const running = this.isConnected && this._visible && !document.hidden && !this._reduced();
    if (!running) {
      cancelAnimationFrame(this._raf);
      this._raf = null;
      return;
    }
    if (this._raf) return;
    this._last = performance.now();
    const tick = (now) => {
      const dt = Math.min(0.1, (now - this._last) / 1000);
      this._last = now;
      this._drawFrame(dt);
      this._raf = requestAnimationFrame(tick);
    };
    this._raf = requestAnimationFrame(tick);
  }

  _drawFrame(dt) {
    for (const st of Object.values(this._flowState)) {
      if (!st.n) continue;
      if (!st.len) st.len = st.trail.getTotalLength?.() || 0;
      if (!st.len) continue;
      st.speed += (st.target - st.speed) * Math.min(1, dt * 2.5);
      const pxPerSec = st.speed * 340;
      st.phase = (st.phase + (pxPerSec * dt) / st.len) % 1;
      for (let i = 0; i < st.n; i++) {
        const base = (st.phase + i / st.n) % 1;
        st.dots[i].forEach((c, t) => {
          let f = base - (t * 9) / st.len;
          f = ((f % 1) + 1) % 1;
          const pos = st.dir > 0 ? f : 1 - f;
          const pt = st.trail.getPointAtLength(pos * st.len);
          c.setAttribute("cx", pt.x.toFixed(1));
          c.setAttribute("cy", pt.y.toFixed(1));
          const edge = Math.min(f, 1 - f);
          c.style.opacity = String(Math.min(1, edge * 12));
        });
      }
    }
  }

  _buildHandles() {
    const ns = "http://www.w3.org/2000/svg";
    this._els.handles.innerHTML = "";
    for (const [key, pts] of Object.entries(this._flows)) {
      if (!this._flowVisible(key)) continue;
      pts.forEach((pt, i) => {
        const c = document.createElementNS(ns, "circle");
        const [sx, sy] = toSvg(pt);
        c.setAttribute("class", "handle");
        c.setAttribute("r", "6");
        c.setAttribute("cx", String(sx));
        c.setAttribute("cy", String(sy));
        c.innerHTML = `<title>${key} · ponto ${i + 1}</title>`;
        c.addEventListener("pointerdown", (e) => this._startDrag(e, { type: "handle", key, i, el: c }));
        this._els.handles.appendChild(c);
      });
    }
  }

  _startDrag(e, d) {
    e.preventDefault();
    const rect = this._els.stage.getBoundingClientRect();
    d.rect = rect;
    this._drag = d;
    d.el.setPointerCapture?.(e.pointerId);
    d.el.classList?.add("dragging");
    const move = (ev) => {
      const x = Math.max(0, Math.min(100, ((ev.clientX - rect.left) / rect.width) * 100));
      const y = Math.max(0, Math.min(100, ((ev.clientY - rect.top) / rect.height) * 100));
      const rx = Math.round(x * 10) / 10;
      const ry = Math.round(y * 10) / 10;
      if (d.type === "place") {
        d.place.x = rx;
        d.place.y = ry;
        d.el.style.left = `${rx}%`;
        d.el.style.top = `${ry}%`;
      } else {
        this._flows[d.key][d.i] = [rx, ry];
        const [sx, sy] = toSvg([rx, ry]);
        d.el.setAttribute("cx", String(sx));
        d.el.setAttribute("cy", String(sy));
        const st = this._flowState[d.key];
        st.trail.setAttribute("d", this._pathD(this._flows[d.key]));
        st.len = st.trail.getTotalLength();
        if (this._reduced()) this._drawFrame(0);
      }
      this._writeYaml();
    };
    const up = () => {
      d.el.classList?.remove("dragging");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      this._drag = null;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
  }

  _writeYaml() {
    if (!this._els.yaml) return;
    const q = (s) => (/^[\w.:-]+$/.test(String(s)) ? String(s) : JSON.stringify(String(s)));
    const lines = ["places:"];
    for (const p of this._places) {
      lines.push(p.role ? `  - role: ${p.role}` : `  - name: ${q(p.name ?? "")}`);
      if (p.role && p.name) lines.push(`    name: ${q(p.name)}`);
      if (p.entity) lines.push(`    entity: ${q(p.entity)}`);
      if (p.secondary) lines.push(`    secondary: ${q(p.secondary)}`);
      if (p.icon) lines.push(`    icon: ${q(p.icon)}`);
      if (p.color) lines.push(`    color: ${q(p.color)}`);
      if (p.decimals != null) lines.push(`    decimals: ${p.decimals}`);
      if (p.align && p.align !== "center") lines.push(`    align: ${p.align}`);
      if (p.valign && p.valign !== "center") lines.push(`    valign: ${p.valign}`);
      lines.push(`    x: ${p.x}`, `    y: ${p.y}`);
    }
    lines.push("flows:");
    for (const [k, pts] of Object.entries(this._flows)) {
      lines.push(`  ${k}: [${pts.map(([x, y]) => `[${x}, ${y}]`).join(", ")}]`);
    }
    this._els.yaml.value = lines.join("\n");
  }

  async _copyYaml() {
    const btn = this.shadowRoot.getElementById("copy");
    try {
      await navigator.clipboard.writeText(this._els.yaml.value);
      btn.textContent = this._t.copied;
    } catch {
      this._els.yaml.select();
      btn.textContent = this._t.select_copy;
    }
    setTimeout(() => (btn.textContent = this._t.copy), 1600);
  }
}

const STYLE = `
:host {
  --ehc-solar: #f2a516;
  --ehc-battery: #2fb36d;
  --ehc-grid: #e5484d;
  --ehc-car: #3d8bfd;
  --ehc-home: #9a6cf0;
  --ehc-accent: var(--primary-color, #03a9f4);
  --ehc-text: var(--primary-text-color, #1c1f24);
  --ehc-muted: var(--secondary-text-color, #66707d);
  --ehc-badge-bg: color-mix(in srgb, var(--card-background-color, #fff) 82%, transparent);
  --ehc-badge-border: color-mix(in srgb, var(--ehc-text) 10%, transparent);
  --ehc-trail: color-mix(in srgb, var(--ehc-text) 22%, transparent);
  display: block;
}
:host([dark]) {
  --ehc-solar: #ffbe3d;
  --ehc-battery: #3fd18a;
  --ehc-grid: #ff6b6f;
  --ehc-car: #5fa2ff;
  --ehc-home: #b391ff;
  --ehc-badge-bg: color-mix(in srgb, var(--card-background-color, #1c1c1c) 78%, transparent);
  --ehc-badge-border: color-mix(in srgb, #fff 12%, transparent);
}
[hidden] { display: none !important; }
ha-card { overflow: hidden; padding: 14px 14px 12px; display: flex; flex-direction: column; gap: 6px; color: var(--ehc-text); }

.stage-wrap { display: flex; justify-content: center; align-items: center; min-width: 0; }
:host([sized]) ha-card { height: var(--ehc-height); box-sizing: border-box; }
:host([sized]) .stage-wrap { flex: 1; min-height: 0; container-type: size; }
:host([sized]) .stage { width: min(100cqw, 100cqh * var(--ehc-ar)); }
.stage { position: relative; width: 100%; aspect-ratio: var(--ehc-ar); container-type: inline-size; user-select: none; -webkit-user-select: none; touch-action: manipulation; }
.scene { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; pointer-events: none; }
.art { transition: filter .3s; }
:host([dark]) .art { filter: brightness(.92) saturate(.95); }
.trail { fill: none; stroke: var(--ehc-trail); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 2 6; transition: opacity .4s; }
.trail.on { stroke: currentColor; stroke-dasharray: none; stroke-width: 2.6; }
.hub { opacity: 0; transition: opacity .4s; }
.hub.on { opacity: 1; }
.hub-halo { fill: #fff; opacity: .85; }
.hub-core { fill: #1e293b; stroke: #fff; stroke-width: 2.2; }
.hub-bolt { fill: #f8fafc; }
#dots circle { fill: currentColor; }
#dots g { transition: color .4s; }
.handle { fill: #fff; stroke: var(--ehc-accent); stroke-width: 2.5; cursor: grab; pointer-events: all; }
.handle.dragging { cursor: grabbing; fill: var(--ehc-accent); }

.place {
  all: unset; box-sizing: border-box; position: absolute;
  display: flex; align-items: center; gap: .45em; padding: .3em .7em .3em .3em;
  font-size: clamp(10px, 1.9cqw, 24px); line-height: 1.15;
  background: var(--ehc-badge-bg); border: 1px solid var(--ehc-badge-border); border-radius: 999px;
  -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px);
  box-shadow: 0 2px 10px rgba(0,0,0,.12); cursor: pointer; white-space: nowrap; color: var(--ehc-text);
  transition: box-shadow .2s, opacity .3s;
}
.place { --tx: -50%; --ty: -50%; transform: translate(var(--tx), var(--ty)); }
.place.align-left { --tx: 0; }
.place.align-right { --tx: -100%; }
.place.valign-top { --ty: 0; }
.place.valign-bottom { --ty: -100%; }
.place:focus-visible { outline: 2px solid var(--ehc-accent); outline-offset: 2px; }
.place:hover { box-shadow: 0 3px 14px rgba(0,0,0,.2); }
.place.editable { cursor: grab; outline: 1.5px dashed var(--ehc-accent); outline-offset: 2px; touch-action: none; }
.place.editable.dragging { cursor: grabbing; }
.place.missing .val { color: var(--ehc-muted); }
.ico { position: relative; display: grid; place-items: center; width: 2.3em; height: 2.3em; border-radius: 50%; flex: none;
  background: color-mix(in srgb, var(--c) 16%, transparent); color: var(--c); }
.place.active .ico { background: color-mix(in srgb, var(--c) 26%, transparent); }
.ico ha-icon { --mdc-icon-size: 1.3em; display: inline-flex; }
.ring { position: absolute; inset: -2px; width: calc(100% + 4px); height: calc(100% + 4px); transform: rotate(-90deg); }
.ring-bg { fill: none; stroke: color-mix(in srgb, var(--c) 18%, transparent); stroke-width: 3; }
.ring-fg { fill: none; stroke: var(--c); stroke-width: 3; stroke-linecap: round; transition: stroke-dasharray .6s; }
.txt { display: flex; flex-direction: column; min-width: 0; }
.name { font-size: .72em; text-transform: uppercase; letter-spacing: .06em; color: var(--ehc-muted); }
.val { font-size: 1.12em; font-weight: 600; font-variant-numeric: tabular-nums; }
.sub { font-size: .74em; color: var(--ehc-muted); font-variant-numeric: tabular-nums; }

.foot { display: flex; flex-direction: column; gap: 6px; padding-top: 8px; border-top: 1px solid var(--divider-color, var(--ehc-badge-border)); }
.foot-label { font-size: .7rem; text-transform: uppercase; letter-spacing: .08em; color: var(--ehc-muted); }
.stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(84px, 1fr)); gap: 4px 10px; }
.stat { all: unset; display: flex; flex-direction: column; gap: 1px; cursor: pointer; border-radius: 6px; padding: 2px 4px; margin: 0 -4px; }
.stat:focus-visible { outline: 2px solid var(--ehc-accent); }
.stat .k { font-size: .72rem; color: var(--ehc-muted); display: flex; align-items: center; gap: 5px; }
.stat .k i { width: 7px; height: 7px; border-radius: 50%; display: inline-block; }
.stat .v { font-size: .95rem; font-weight: 600; font-variant-numeric: tabular-nums; }

.editor { display: flex; flex-direction: column; gap: 6px; margin-top: 6px; }
.editor-head { display: flex; justify-content: space-between; align-items: center; gap: 8px; font-size: .78rem; color: var(--ehc-muted); flex-wrap: wrap; }
.editor button { font: inherit; font-size: .8rem; padding: 5px 12px; border-radius: 8px; border: 1px solid var(--ehc-accent); background: transparent; color: var(--ehc-accent); cursor: pointer; }
.editor textarea { width: 100%; box-sizing: border-box; min-height: 180px; font: 12px/1.45 ui-monospace, SFMono-Regular, Menlo, monospace; padding: 8px; border-radius: 8px;
  border: 1px solid var(--ehc-badge-border); background: color-mix(in srgb, var(--ehc-text) 4%, transparent); color: var(--ehc-text); resize: vertical; }
@media (prefers-reduced-motion: reduce) { .ring-fg, .trail, .art, .hub { transition: none; } }
`;

const POWER = { entity: { filter: [{ domain: "sensor", device_class: "power" }] } };
const SOC = { entity: { filter: [{ domain: "sensor", device_class: "battery" }] } };
const ENERGY = { entity: { filter: [{ domain: "sensor", device_class: "energy" }] } };

const EDITOR_ENTITY_KEYS = [
  "solar_power", "home_power", "grid_power", "battery_power", "battery_soc",
  "car_power", "car_soc", "car_plugged",
  "solar_energy_today", "home_energy_today", "grid_import_today", "grid_export_today", "car_energy_today",
];

const NAME_ROLES = ["solar", "home", "grid", "battery", "car"];

const EDITOR_TEXT = {
  en: {
    groups: { power: "Power now", soc: "Battery charge", today: "Today's totals (optional)", names: "Names", colors: "House colours", options: "Options" },
    labels: {
      solar_power: "Solar production", home_power: "Home consumption", grid_power: "Grid", battery_power: "Home battery",
      car_power: "Car charging", battery_soc: "Home battery charge (SOC)", car_soc: "Car charge (SOC)", car_plugged: "Car plugged in",
      solar_energy_today: "Produced today", home_energy_today: "Consumed today", grid_import_today: "Imported today",
      grid_export_today: "Exported today", car_energy_today: "Car today",
      walls_color: "Walls", deck_color: "Deck", car_color: "Car",
      invert_grid: "Invert grid sign", invert_battery: "Invert battery sign", show_vegetation: "Show garden",
      full_screen: "Fill the screen", height: "Card height", flow_threshold: "Minimum to animate a flow",
      edit_positions: "Positioning mode", language: "Language",
    },
    helpers: {
      home_power: "Total consumption, including the car. Leave empty to calculate it from solar, battery and grid.",
      grid_power: "Positive when importing, negative when exporting. If yours is the other way round, turn on \"Invert grid sign\".",
      battery_power: "Positive when discharging, negative when charging. If yours is the other way round, turn on \"Invert battery sign\".",
      car_power: "Without this entity, the car and the carport are hidden.",
      height: "E.g. 600px or 80vh. Empty = automatic height.",
      edit_positions: "Drag the values and flows on the card, then copy the generated YAML.",
      names: "Leave empty to use the default name.",
    },
    languages: { auto: "Same as Home Assistant", en: "English", pt: "Português" },
  },
  pt: {
    groups: { power: "Potência agora", soc: "Carga das baterias", today: "Totais de hoje (opcional)", names: "Nomes", colors: "Cores da casa", options: "Opções" },
    labels: {
      solar_power: "Produção solar", home_power: "Consumo da casa", grid_power: "Rede elétrica", battery_power: "Bateria da casa",
      car_power: "Carregamento do carro", battery_soc: "Carga da bateria da casa (SOC)", car_soc: "Carga do carro (SOC)", car_plugged: "Carro ligado à tomada",
      solar_energy_today: "Produzido hoje", home_energy_today: "Consumido hoje", grid_import_today: "Importado hoje",
      grid_export_today: "Exportado hoje", car_energy_today: "Carro hoje",
      walls_color: "Paredes", deck_color: "Alpendre", car_color: "Carro",
      invert_grid: "Inverter sinal da rede", invert_battery: "Inverter sinal da bateria", show_vegetation: "Mostrar jardim",
      full_screen: "Ocupar o ecrã todo", height: "Altura do card", flow_threshold: "Mínimo para animar o fluxo",
      edit_positions: "Modo de posicionamento", language: "Língua",
    },
    helpers: {
      home_power: "Consumo total, incluindo o carro. Se ficar vazio, é calculado a partir de solar, bateria e rede.",
      grid_power: "Positivo a importar, negativo a exportar. Se o teu for ao contrário, liga \"Inverter sinal da rede\".",
      battery_power: "Positivo a descarregar, negativo a carregar. Se o teu for ao contrário, liga \"Inverter sinal da bateria\".",
      car_power: "Sem esta entidade, o carro e o telheiro não aparecem.",
      height: "Ex.: 600px ou 80vh. Vazio = altura automática.",
      edit_positions: "Arrasta os valores e os fluxos no card e copia o YAML gerado.",
      names: "Se ficar vazio, usa o nome por defeito.",
    },
    languages: { auto: "Igual ao Home Assistant", en: "English", pt: "Português" },
  },
};

function editorSchema(et) {
  return [
    {
      type: "expandable", flatten: true, expanded: true, title: et.groups.power, icon: "mdi:flash",
      schema: [
        { name: "solar_power", selector: POWER },
        { name: "home_power", selector: POWER },
        { name: "grid_power", selector: POWER },
        { name: "battery_power", selector: POWER },
        { name: "car_power", selector: POWER },
      ],
    },
    {
      type: "expandable", flatten: true, expanded: true, title: et.groups.soc, icon: "mdi:battery-charging-60",
      schema: [
        { name: "battery_soc", selector: SOC },
        { name: "car_soc", selector: SOC },
        { name: "car_plugged", selector: { entity: { filter: [{ domain: "binary_sensor" }] } } },
      ],
    },
    {
      type: "expandable", flatten: true, title: et.groups.today, icon: "mdi:calendar-today",
      schema: [
        { name: "solar_energy_today", selector: ENERGY },
        { name: "home_energy_today", selector: ENERGY },
        { name: "grid_import_today", selector: ENERGY },
        { name: "grid_export_today", selector: ENERGY },
        { name: "car_energy_today", selector: ENERGY },
      ],
    },
    {
      type: "expandable", flatten: true, title: et.groups.names, icon: "mdi:form-textbox",
      schema: NAME_ROLES.map((r) => ({ name: `${r}_name`, selector: { text: {} } })),
    },
    {
      type: "expandable", flatten: true, title: et.groups.colors, icon: "mdi:palette",
      schema: [
        { name: "walls_color", selector: { color_rgb: {} } },
        { name: "deck_color", selector: { color_rgb: {} } },
        { name: "car_color", selector: { color_rgb: {} } },
      ],
    },
    {
      type: "expandable", flatten: true, title: et.groups.options, icon: "mdi:cog",
      schema: [
        { name: "language", selector: { select: { mode: "dropdown", options: ["auto", "en", "pt"].map((v) => ({ value: v, label: et.languages[v] })) } } },
        { name: "invert_grid", selector: { boolean: {} } },
        { name: "invert_battery", selector: { boolean: {} } },
        { name: "show_vegetation", selector: { boolean: {} } },
        { name: "full_screen", selector: { boolean: {} } },
        { name: "height", selector: { text: {} } },
        { name: "flow_threshold", selector: { number: { min: 0, max: 500, step: 5, mode: "box", unit_of_measurement: "W" } } },
        { name: "edit_positions", selector: { boolean: {} } },
      ],
    },
  ];
}

class EnergyHouseCardEditor extends HTMLElement {
  set hass(hass) {
    const before = this._hass;
    this._hass = hass;
    if (!this._form) return;
    this._form.hass = hass;
    if (!before || pickLang(this._config, before) !== pickLang(this._config, hass)) this._render();
  }

  setConfig(config) {
    this._config = config || {};
    this._render();
  }

  _data() {
    const c = this._config;
    return {
      ...(c.entities || {}),
      ...Object.fromEntries(NAME_ROLES.map((r) => [`${r}_name`, c.names?.[r] ?? ""])),
      language: c.language || "auto",
      ...Object.fromEntries(Object.keys(PALETTE).map((p) => [`${p}_color`, toRgb(c.colors?.[p] ?? defaultColor(p))])),
      invert_grid: !!c.invert_grid,
      invert_battery: !!c.invert_battery,
      show_vegetation: c.show?.vegetation !== false,
      full_screen: !!c.full_screen,
      height: c.height ?? "",
      flow_threshold: c.flow_threshold ?? 10,
      edit_positions: !!c.edit_positions,
    };
  }

  _render() {
    if (!this._form) {
      this._form = document.createElement("ha-form");
      // expandable groups reach these too, and have no name
      const role = (s) => (s.name?.endsWith("_name") && I18N.en.roles[s.name.slice(0, -5)] ? s.name.slice(0, -5) : null);
      this._form.computeLabel = (s) => (role(s) ? I18N[this._lang].roles[role(s)] : this._et.labels[s.name] ?? s.name);
      this._form.computeHelper = (s) => (role(s) ? this._et.helpers.names : this._et.helpers[s.name]);
      this._form.addEventListener("value-changed", (e) => this._changed(e.detail.value));
      this.appendChild(this._form);
    }
    this._lang = pickLang(this._config, this._hass);
    this._et = EDITOR_TEXT[this._lang];
    this._form.hass = this._hass;
    this._form.schema = editorSchema(this._et);
    this._form.data = this._data();
  }

  _changed(v) {
    const config = { ...this._config };
    delete config.title;
    const entities = { ...(this._config.entities || {}) };
    for (const k of EDITOR_ENTITY_KEYS) {
      if (v[k]) entities[k] = v[k];
      else delete entities[k];
    }
    config.entities = entities;
    for (const k of ["invert_grid", "invert_battery", "full_screen", "edit_positions"]) {
      if (v[k]) config[k] = true;
      else delete config[k];
    }
    if (v.height) config.height = v.height;
    else delete config.height;
    if (v.flow_threshold != null && v.flow_threshold !== 10) config.flow_threshold = v.flow_threshold;
    else delete config.flow_threshold;
    const names = { ...(this._config.names || {}) };
    for (const r of NAME_ROLES) {
      const n = (v[`${r}_name`] || "").trim();
      if (n) names[r] = n;
      else delete names[r];
    }
    if (Object.keys(names).length) config.names = names;
    else delete config.names;
    if (v.language && v.language !== "auto") config.language = v.language;
    else delete config.language;

    const colors = { ...(this._config.colors || {}) };
    for (const p of Object.keys(PALETTE)) {
      const rgb = toRgb(v[`${p}_color`]);
      const hex = rgb && toHex(rgb);
      if (!hex || hex === toHex(toRgb(defaultColor(p)))) delete colors[p];
      else colors[p] = hex;
    }
    if (Object.keys(colors).length) config.colors = colors;
    else delete config.colors;

    const show = { ...(this._config.show || {}) };
    if (v.show_vegetation === false) show.vegetation = false;
    else delete show.vegetation;
    if (Object.keys(show).length) config.show = show;
    else delete config.show;

    const langChanged = pickLang(this._config, this._hass) !== pickLang(config, this._hass);
    this._config = config;
    if (langChanged) this._render();
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config }, bubbles: true, composed: true }));
  }
}

if (!customElements.get("energy-house-card-editor")) {
  customElements.define("energy-house-card-editor", EnergyHouseCardEditor);
}

if (!customElements.get("energy-house-card")) {
  customElements.define("energy-house-card", EnergyHouseCard);
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: "energy-house-card",
    name: "Energy House Card",
    description: "Isometric house with animated energy flows: solar, battery, grid and EV.",
    preview: true,
    documentationURL: "https://github.com/dresende/energy-house-card",
  });
  console.info(`%c ENERGY-HOUSE-CARD %c v${VERSION} `, "color:#fff;background:#2fb36d;font-weight:600", "color:#2fb36d;background:transparent");
}
