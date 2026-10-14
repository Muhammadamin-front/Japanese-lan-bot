// Kanji kartochkalari va batafsil oyna (yozilish tartibi animatsiyasi bilan).
// Yozilish tartibi ma'lumotlari: KanjiVG (Ulrich Apel, CC BY-SA 3.0) — internet orqali yuklanadi.
import { api } from "./api.js";
import { html, mount, icon, speakBtn, openModal } from "./dom.js";

const SOURCES = [
  (hex) => `https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/${hex}.svg`,
  (hex) => `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${hex}.svg`,
];
const NS = "http://www.w3.org/2000/svg";
const cache = new Map();

/** KanjiVG fayldan faqat chiziq yo'llari (d) va raqam joylashuvini oladi — tashqi SVG sahifaga qo'yilmaydi. */
async function fetchStrokes(char) {
  const hex = char.codePointAt(0).toString(16).padStart(5, "0");
  for (const source of SOURCES) {
    try {
      const res = await fetch(source(hex));
      if (!res.ok) continue;
      const doc = new DOMParser().parseFromString(await res.text(), "image/svg+xml");
      const paths = [...doc.querySelectorAll("path")].map((p) => p.getAttribute("d")).filter(Boolean);
      const numbers = [...doc.querySelectorAll("text")]
        .map((t) => {
          const m = /matrix\(1 0 0 1 ([\d.]+) ([\d.]+)\)/.exec(t.getAttribute("transform") || "");
          return m ? { x: Number(m[1]), y: Number(m[2]), n: t.textContent.trim() } : null;
        })
        .filter(Boolean);
      if (paths.length) return { paths, numbers };
    } catch {
      /* keyingi manbani sinab ko'ramiz */
    }
  }
  return null;
}

export function loadStrokes(char) {
  if (!cache.has(char)) {
    const p = fetchStrokes(char).then((data) => {
      if (!data) cache.delete(char); // keyinroq qayta urinish uchun
      return data;
    });
    cache.set(char, p);
  }
  return cache.get(char);
}

function el(name, attrs = {}) {
  const node = document.createElementNS(NS, name);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
  return node;
}

function buildStrokeSvg({ paths, numbers }) {
  const svg = el("svg", { viewBox: "0 0 109 109", class: "stroke-svg", role: "img" });
  svg.append(
    el("line", { x1: 54.5, y1: 2, x2: 54.5, y2: 107, class: "sg-grid" }),
    el("line", { x1: 2, y1: 54.5, x2: 107, y2: 54.5, class: "sg-grid" }),
  );
  const ghost = el("g", { class: "sg-ghost" });
  const ink = el("g", { class: "sg-ink" });
  const nums = el("g", { class: "sg-nums" });
  for (const d of paths) {
    ghost.append(el("path", { d }));
    ink.append(el("path", { d }));
  }
  for (const { x, y, n } of numbers) {
    const t = el("text", { x, y });
    t.textContent = n;
    nums.append(t);
  }
  svg.append(ghost, ink, nums);
  return { svg, inks: [...ink.children] };
}

function animate(inks) {
  let delay = 200;
  return inks.map((p) => {
    const len = p.getTotalLength();
    p.style.strokeDasharray = `${len} ${len}`;
    p.style.strokeDashoffset = String(len);
    const duration = Math.max(280, len * 9);
    const anim = p.animate([{ strokeDashoffset: len }, { strokeDashoffset: 0 }], {
      duration,
      delay,
      fill: "forwards",
      easing: "ease-in-out",
    });
    delay += duration + 140;
    return anim;
  });
}

const readingChips = (text) =>
  text ? text.split("・").map((r) => html`<span class="reading">${r}</span>`) : html`<span class="muted">—</span>`;

/** Darsdagi kanji uchun batafsil kartochka (bosilganda oyna ochiladi). */
export function kanjiCard(k) {
  const ex = k.examples[0];
  return html`<button type="button" class="kanji-card" data-kanji="${k.id}">
    <span class="kc-big">${k.char}</span>
    <span class="kc-info">
      <span class="kc-meaning">${k.meaning}</span>
      <span class="kc-line"><small>On</small> ${k.onyomi || "—"}</span>
      <span class="kc-line"><small>Kun</small> ${k.kunyomi || "—"}</span>
      ${ex ? html`<span class="kc-ex">${ex.w}<small>${ex.r}</small></span>` : ""}
    </span>
  </button>`;
}

/** Ixcham kanji katagi (umumiy ro'yxat uchun). */
export function kanjiTile(k, locked = false) {
  return html`<button type="button" class="kanji-tile ${locked ? "is-locked" : ""}" data-kanji="${k.id}" title="${k.meaning}">
    <span class="kt-char">${k.char}</span>
    <span class="kt-meaning">${k.meaning}</span>
  </button>`;
}

export function openKanjiModal(k, { lesson } = {}) {
  const { box, close } = openModal(
    html`<div class="kanji-modal">
      <button type="button" class="icon-btn km-close" data-close aria-label="Yopish" autofocus>${icon("x")}</button>
      <div class="km-stroke-col">
        <div class="km-stroke" data-stroke><span class="km-fallback">${k.char}</span><div class="loader small"></div></div>
        <div class="km-stroke-actions">
          <button type="button" class="btn btn-sm" data-replay disabled>${icon("refresh")} Qayta chizish</button>
          <label class="switch small"><input type="checkbox" data-nums checked><span></span> Raqamlar</label>
        </div>
        <p class="km-credit">Yozilish tartibi: <a href="https://kanjivg.tagaini.net/" target="_blank" rel="noopener">KanjiVG</a> (CC BY-SA 3.0)</p>
      </div>
      <div class="km-info">
        <div class="km-head">
          <span class="km-char">${k.char}</span>
          <div>
            <h3>${k.meaning}</h3>
            <div class="km-badges">
              <span class="badge">${k.strokes} ta chiziq</span>
              ${lesson ? html`<span class="badge badge-accent">${lesson}-dars</span>` : ""}
            </div>
          </div>
        </div>
        <dl class="km-readings">
          <div><dt>On o'qilishi <span class="jp">音</span></dt><dd>${readingChips(k.onyomi)}</dd></div>
          <div><dt>Kun o'qilishi <span class="jp">訓</span></dt><dd>${readingChips(k.kunyomi)}</dd></div>
        </dl>
        <h4>Misollar</h4>
        <div class="km-examples">
          ${k.examples.map(
            (e) => html`<div class="km-ex">
              ${speakBtn(e.r)}
              <span class="km-ex-w">${e.w}</span>
              <span class="km-ex-r">${e.r}</span>
              <span class="km-ex-m">${e.m}</span>
            </div>`,
          )}
        </div>
        <div data-words></div>
      </div>
    </div>`,
    { wide: true },
  );

  box.querySelector("[data-close]").addEventListener("click", close);
  const holder = box.querySelector("[data-stroke]");
  const replay = box.querySelector("[data-replay]");
  let inks = [];
  let anims = [];

  loadStrokes(k.char).then((data) => {
    if (!box.isConnected) return;
    if (!data) {
      mount(
        holder,
        html`<span class="km-fallback">${k.char}</span>
          <p class="km-offline">Yozilish tartibini ko'rish uchun internet kerak</p>`,
      );
      return;
    }
    const built = buildStrokeSvg(data);
    holder.replaceChildren(built.svg);
    inks = built.inks;
    anims = animate(inks);
    replay.disabled = false;
  });

  replay.addEventListener("click", () => {
    anims.forEach((a) => a.cancel());
    anims = animate(inks);
  });
  box.querySelector("[data-nums]").addEventListener("change", (e) => {
    holder.classList.toggle("hide-nums", !e.target.checked);
  });

  if (k.id) {
    api
      .get(`/api/kanji/${k.id}`)
      .then(({ words }) => {
        if (!words.length || !box.isConnected) return;
        mount(
          box.querySelector("[data-words]"),
          html`<h4>Darslardagi so'zlar</h4>
            <div class="km-words">
              ${words.map(
                (w) => html`<div class="km-word"><span class="jp">${w.kanji}</span><small>${w.kana} · ${w.meaning}</small><span class="muted small">${w.lesson}-dars</span></div>`,
              )}
            </div>`,
        );
      })
      .catch(() => {});
  }
}
