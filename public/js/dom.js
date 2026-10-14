// Kichik DOM yordamchilari: xavfsiz html`` shablon, modal oynalar, xabarlar, ovoz.

export class Raw {
  constructor(s) {
    this.s = s;
  }
}
export const raw = (s) => new Raw(String(s));

const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
export const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ESC[c]);

function render(v) {
  if (v === null || v === undefined || v === false || v === true) return "";
  if (v instanceof Raw) return v.s;
  if (Array.isArray(v)) return v.map(render).join("");
  return esc(v);
}

/** Qiymatlar avtomatik escape qilinadi; ichma-ich html`` va raw() bundan mustasno. */
export function html(strings, ...values) {
  let out = strings[0];
  for (let i = 0; i < values.length; i++) out += render(values[i]) + strings[i + 1];
  return new Raw(out);
}

export function mount(el, tpl) {
  el.innerHTML = render(tpl);
  return el;
}

/** Element DOM'dan olib tashlanganda o'zi o'chadigan klaviatura tinglovchisi. */
export function onKey(el, handler) {
  const listener = (e) => {
    if (!el.isConnected) return document.removeEventListener("keydown", listener);
    handler(e);
  };
  document.addEventListener("keydown", listener);
}

/* ---------------- Ikonkalar ---------------- */

const ICONS = {
  speaker:
    '<path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  check: '<path d="m5 12 5 5L20 7"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  refresh: '<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',
  settings:
    '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
  shuffle: '<path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
  flip: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
};

export const icon = (name, cls = "") =>
  raw(
    `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`,
  );

/* ---------------- Ovoz (Web Speech API) ---------------- */

let jaVoice = null;
function pickVoice() {
  const voices = window.speechSynthesis?.getVoices() ?? [];
  jaVoice =
    voices.find((v) => v.lang === "ja-JP" && /Kyoko|Otoya|Google|Microsoft/i.test(v.name)) ||
    voices.find((v) => v.lang?.toLowerCase().startsWith("ja")) ||
    null;
}
if ("speechSynthesis" in window) {
  pickVoice();
  window.speechSynthesis.addEventListener?.("voiceschanged", pickVoice);
}

export function speak(text) {
  if (!("speechSynthesis" in window)) return toast("Brauzeringiz ovozli o'qishni qo'llab-quvvatlamaydi");
  const clean = String(text)
    .replace(/（[^）]*）/g, "")
    .replace(/[A-ZＡ-Ｚ][：:]/g, "")
    .replace(/／/g, "。")
    .replace(/[\s～〜]/g, "");
  if (!clean) return;
  const u = new SpeechSynthesisUtterance(clean);
  u.lang = "ja-JP";
  if (jaVoice) u.voice = jaVoice;
  u.rate = 0.85;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

export const speakBtn = (text, label = "Tinglash") =>
  html`<button type="button" class="speak" data-speak="${text}" title="${label}" aria-label="${label}">${icon("speaker")}</button>`;

/* ---------------- Xabarlar va modal oynalar ---------------- */

let toastTimer;
export function toast(message, type = "info") {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.className = `toast show toast-${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (el.className = "toast"), 2600);
}

export function openModal(content, { wide = false, onClose } = {}) {
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  const box = document.createElement("div");
  box.className = `modal${wide ? " modal-wide" : ""}`;
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  mount(box, content);
  backdrop.append(box);
  document.body.append(backdrop);
  const keyHandler = (e) => {
    if (e.key === "Escape") close();
  };
  function close() {
    backdrop.remove();
    document.removeEventListener("keydown", keyHandler);
    onClose?.();
  }
  document.addEventListener("keydown", keyHandler);
  backdrop.addEventListener("mousedown", (e) => {
    if (e.target === backdrop) close();
  });
  (box.querySelector("[autofocus]") || box.querySelector("input, textarea, select, .btn-primary"))?.focus();
  return { box, close };
}

export function confirmBox(message, { okText = "Ha", danger = false, title = "" } = {}) {
  return new Promise((resolve) => {
    const { box, close } = openModal(
      html`${title ? html`<h3 class="modal-title">${title}</h3>` : ""}
        <p class="modal-text">${message}</p>
        <div class="modal-actions">
          <button type="button" class="btn" data-v="0">Bekor qilish</button>
          <button type="button" class="btn ${danger ? "btn-danger" : "btn-primary"}" data-v="1">${okText}</button>
        </div>`,
      { onClose: () => resolve(false) },
    );
    box.addEventListener("click", (e) => {
      const b = e.target.closest("[data-v]");
      if (!b) return;
      resolve(b.dataset.v === "1");
      close();
    });
  });
}

function fieldHtml(f) {
  const help = f.help ? html`<small class="help">${f.help}</small>` : "";
  if (f.type === "select") {
    return html`<label class="field">${f.label}
      <select name="${f.name}">${f.options.map(
        (o) => html`<option value="${o.value}" ${String(o.value) === String(f.value) ? raw("selected") : ""}>${o.label}</option>`,
      )}</select>${help}</label>`;
  }
  if (f.type === "textarea") {
    return html`<label class="field">${f.label}
      <textarea name="${f.name}" rows="${f.rows || 4}" placeholder="${f.placeholder || ""}">${f.value ?? ""}</textarea>${help}</label>`;
  }
  return html`<label class="field">${f.label}
    <input name="${f.name}" type="${f.type || "text"}" value="${f.value ?? ""}" placeholder="${f.placeholder || ""}"
      autocomplete="${f.autocomplete || "off"}" ${f.required ? raw("required") : ""} ${f.autofocus ? raw("autofocus") : ""}>${help}</label>`;
}

/**
 * Forma oynasi. onSubmit xato tashlasa, xabar oynada ko'rsatiladi va oyna yopilmaydi.
 * Natija: onSubmit qaytargan qiymat (yoki forma qiymatlari), bekor qilinsa null.
 */
export function formModal({ title, intro, fields, submitText = "Saqlash", onSubmit }) {
  return new Promise((resolve) => {
    let done = false;
    const { box, close } = openModal(
      html`<h3 class="modal-title">${title}</h3>
        ${intro ? html`<p class="modal-text">${intro}</p>` : ""}
        <form class="form" novalidate>
          ${fields.map(fieldHtml)}
          <p class="form-error" hidden></p>
          <div class="modal-actions">
            <button type="button" class="btn" data-cancel>Bekor qilish</button>
            <button type="submit" class="btn btn-primary">${submitText}</button>
          </div>
        </form>`,
      { onClose: () => !done && resolve(null) },
    );
    const form = box.querySelector("form");
    const error = form.querySelector(".form-error");
    box.querySelector("[data-cancel]").addEventListener("click", close);
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const values = Object.fromEntries(new FormData(form));
      const btn = form.querySelector("[type=submit]");
      btn.disabled = true;
      try {
        const result = onSubmit ? await onSubmit(values) : values;
        done = true;
        close();
        resolve(result ?? values);
      } catch (err) {
        error.textContent = err.message;
        error.hidden = false;
      } finally {
        btn.disabled = false;
      }
    });
  });
}

/* ---------------- Matn formatlash ---------------- */

const inline = (s) => s.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");

/** Grammatika izohlari uchun mini-markdown: paragraflar, "- " ro'yxat, "! " eslatma, **qalin**. */
export function md(src = "") {
  const out = [];
  let para = [];
  let list = null;
  const flushPara = () => {
    if (para.length) out.push(`<p>${inline(para.join("<br>"))}</p>`);
    para = [];
  };
  const flushList = () => {
    if (list) out.push(`<ul>${list.map((li) => `<li>${inline(li)}</li>`).join("")}</ul>`);
    list = null;
  };
  for (const line of esc(src).split("\n")) {
    const t = line.trim();
    if (!t) {
      flushPara();
      flushList();
    } else if (/^[-•] /.test(t)) {
      flushPara();
      (list ??= []).push(t.slice(2));
    } else if (t.startsWith("! ")) {
      flushPara();
      flushList();
      out.push(`<div class="note">${inline(t.slice(2))}</div>`);
    } else {
      flushList();
      para.push(t);
    }
  }
  flushPara();
  flushList();
  return raw(out.join(""));
}

const pad = (n) => String(n).padStart(2, "0");
export function fmtDate(ts, withTime = true) {
  if (!ts) return "—";
  const d = new Date(ts);
  const date = `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`;
  return withTime ? `${date} ${pad(d.getHours())}:${pad(d.getMinutes())}` : date;
}

export function timeAgo(ts) {
  if (!ts) return "hali kirmagan";
  const s = (Date.now() - ts) / 1000;
  if (s < 60) return "hozirgina";
  if (s < 3600) return `${Math.floor(s / 60)} daqiqa oldin`;
  if (s < 86400) return `${Math.floor(s / 3600)} soat oldin`;
  if (s < 172800) return "kecha";
  if (s < 30 * 86400) return `${Math.floor(s / 86400)} kun oldin`;
  return fmtDate(ts, false);
}

export const initials = (name) =>
  String(name)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

export const scoreClass = (p, threshold = 70) => (p >= threshold ? "good" : p >= threshold - 20 ? "mid" : "low");

/** Doira shaklidagi progress. */
export function ring(percent, label, sub = "", size = 120) {
  const r = 52;
  const c = 2 * Math.PI * r;
  const off = c * (1 - Math.max(0, Math.min(100, percent)) / 100);
  return html`<div class="ring" style="width:${size}px;height:${size}px">
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="${r}" class="ring-track"/>
      <circle cx="60" cy="60" r="${r}" class="ring-fill" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}"/>
    </svg>
    <div class="ring-label"><b>${label}</b>${sub ? html`<span>${sub}</span>` : ""}</div>
  </div>`;
}

export const storage = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      return v === null ? fallback : JSON.parse(v);
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* brauzer xotirasi yopiq bo'lishi mumkin */
    }
  },
};
