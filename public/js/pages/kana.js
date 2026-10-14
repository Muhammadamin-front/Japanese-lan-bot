import { api } from "../api.js";
import { html, mount, icon, storage } from "../dom.js";
import { refresh } from "../app.js";
import { kanaRows, KANA_GROUPS } from "../kana.js";
import { runTest } from "./test.js";

const SCRIPTS = {
  hiragana: { label: "Hiragana", jp: "ひらがな", about: "Yapon so'zlari, qo'shimchalar va grammatik elementlar uchun asosiy alifbo." },
  katakana: { label: "Katakana", jp: "カタカナ", about: "Chet so'zlar (コーヒー — kofe), xorijiy ismlar va davlat nomlari uchun." },
};

const PRACTICE_PARTS = [
  { id: "basic", label: "Asosiy" },
  { id: "dakuten", label: "Dakuten" },
  { id: "yoon", label: "Yōon" },
  { id: "all", label: "Hammasi" },
];

function testCard(script, s, settings) {
  const meta = SCRIPTS[script];
  return html`<article class="card kana-test ${s.passed ? "is-done" : ""}">
    <div class="kana-test-head">
      <span class="kana-test-jp">${meta.jp}</span>
      ${s.passed ? html`<span class="badge badge-ok">${icon("check")} O'tildi</span>` : html`<span class="badge">Kerak: ${settings.kana_pass_percent}%</span>`}
    </div>
    <h3>${meta.label}</h3>
    <p class="muted small">${meta.about}</p>
    <p class="kana-test-score">${s.attempts ? html`Eng yaxshi natija: <b>${s.best}%</b> · ${s.attempts} ta urinish` : "Hali topshirilmagan"}</p>
    <div class="kana-test-actions">
      <button type="button" class="btn btn-primary" data-test="${script}">${s.passed ? "Qayta topshirish" : "Testni topshirish"}</button>
      <span class="muted small">Mashq:</span>
      <div class="seg seg-sm" role="group" aria-label="Mashq bo'limi">
        ${PRACTICE_PARTS.map((p) => html`<button type="button" data-practice="${script}" data-part="${p.id}">${p.label}</button>`)}
      </div>
    </div>
    <p class="muted small">Test: ${settings.kana_questions} ta savol. Mashq — javob darhol tekshiriladi.</p>
  </article>`;
}

function table(script) {
  return KANA_GROUPS.map(
    (g) => html`<section class="kana-group">
      <h3>${g.title}</h3>
      <div class="kana-table ${g.id === "yoon" ? "cols-3" : ""}">
        ${kanaRows(script, g.id).map((row) =>
          row.map((c) =>
            c
              ? html`<button type="button" class="kana-cell" data-speak="${c.char}" title="Tinglash">
                  <span class="kc-char">${c.char}</span><span class="kc-romaji">${c.romaji}</span>
                </button>`
              : html`<span class="kana-cell empty"></span>`,
          ),
        )}
      </div>
    </section>`,
  );
}

export async function kanaPage(el) {
  const d = await api.get("/api/dashboard");
  let script = storage.get("kanaScript", "hiragana");

  const draw = () =>
    mount(
      el,
      html`<header class="page-head">
          <p class="eyebrow">Alifbo · 仮名</p>
          <h1>Hiragana va Katakana</h1>
          <p class="lead">Yapon tilida ikki bo'g'inli alifbo bor. Darslarni boshlashdan oldin ikkalasini ham bilishingiz kerak —
            ${d.settings.require_kana ? html`<b>har bir testdan kamida ${d.settings.kana_pass_percent}% oling</b>, shundan keyin 1-dars ochiladi.` : "testlar ixtiyoriy, lekin juda foydali."}</p>
        </header>

        <div class="grid-2">
          ${testCard("hiragana", d.kana.hiragana, d.settings)}
          ${testCard("katakana", d.kana.katakana, d.settings)}
        </div>

        <section class="card">
          <div class="toolbar">
            <div class="seg" role="tablist" aria-label="Alifbo">
              ${Object.entries(SCRIPTS).map(
                ([id, m]) => html`<button type="button" role="tab" aria-selected="${id === script}" class="${id === script ? "active" : ""}" data-script="${id}">
                  <span class="jp">${m.jp}</span> ${m.label}</button>`,
              )}
            </div>
            <span class="muted small">Harfni bosing — talaffuzini eshitasiz</span>
          </div>
          ${table(script)}
        </section>`,
    );

  draw();
  el.addEventListener("click", (e) => {
    const t = e.target.closest("[data-script], [data-test], [data-practice]");
    if (!t) return;
    if (t.dataset.script) {
      script = t.dataset.script;
      storage.set("kanaScript", script);
      draw();
    } else if (t.dataset.test) {
      runTest({ type: "kana", target: t.dataset.test, mode: "check" }, { onClose: refresh });
    } else {
      runTest({ type: "kana", target: t.dataset.practice, mode: "practice", part: t.dataset.part }, { onClose: refresh });
    }
  });
}
