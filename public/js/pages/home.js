import { api } from "../api.js";
import { html, mount, icon, ring } from "../dom.js";

function greeting() {
  const h = new Date().getHours();
  if (h < 11) return "Xayrli tong · おはようございます";
  if (h < 18) return "Xayrli kun · こんにちは";
  return "Xayrli kech · こんばんは";
}

function kanaChip(label, jp, s, pass) {
  const cls = s.passed ? "is-done" : s.attempts ? "is-tried" : "";
  return html`<a class="kana-chip ${cls}" href="#/kana">
    <span class="kana-chip-jp">${jp}</span>
    <span class="kana-chip-body">
      <b>${label}</b>
      <small>${s.passed ? `O'tildi · ${s.best}%` : s.attempts ? `Eng yaxshi: ${s.best}% (kerak ${pass}%)` : "Hali topshirilmagan"}</small>
    </span>
    ${s.passed ? icon("check", "ok") : icon("arrow")}
  </a>`;
}

function lessonCard(l, current) {
  const isCurrent = current?.n === l.n;
  const cls = l.passed ? "is-passed" : !l.unlocked ? "is-locked" : isCurrent ? "is-current" : "is-open";
  const meta = l.passed ? `${l.best}%` : !l.unlocked ? "Yopiq" : isCurrent ? "Joriy dars" : "Ochiq";
  return html`<a class="lesson-card ${cls}" href="#/lesson/${l.n}" aria-label="${l.n}-dars: ${l.title} (${meta})">
    <span class="lc-top">
      <span class="lc-num">${l.n}</span>
      ${l.passed ? icon("check") : !l.unlocked ? icon("lock") : ""}
    </span>
    <span class="lc-title">${l.title}</span>
    <span class="lc-meta">${meta}</span>
  </a>`;
}

function bookSection(jp, label, lessons, current) {
  const passed = lessons.filter((l) => l.passed).length;
  return html`<section class="book">
    <header class="book-head">
      <div>
        <h2><span class="jp">${jp}</span></h2>
        <p class="muted">${label}</p>
      </div>
      <div class="book-progress">
        <span>${passed} / ${lessons.length}</span>
        <div class="bar"><span style="width:${lessons.length ? (passed / lessons.length) * 100 : 0}%"></span></div>
      </div>
    </header>
    <div class="lesson-grid">${lessons.map((l) => lessonCard(l, current))}</div>
  </section>`;
}

export async function homePage(el) {
  const d = await api.get("/api/dashboard");
  const pct = d.stats.total ? Math.round((d.stats.passed / d.stats.total) * 100) : 0;
  const needKana = !d.kanaOk;

  let cta;
  if (needKana) {
    cta = html`<a class="btn btn-primary btn-lg" href="#/kana">Kana testini topshirish ${icon("arrow")}</a>`;
  } else if (d.current) {
    cta = html`<a class="btn btn-primary btn-lg" href="#/lesson/${d.current.n}">${d.current.n}-darsni davom ettirish ${icon("arrow")}</a>`;
  } else {
    cta = html`<span class="badge badge-ok">Barcha darslar tugatildi 🎉</span>`;
  }

  const lead = needKana
    ? "Darslarni boshlashdan oldin hiragana va katakana alifbolarini bilishingizni tekshiramiz."
    : d.current
      ? `Joriy dars: ${d.current.n}-dars — ${d.current.title}.`
      : "Siz kursni to'liq tugatdingiz. Endi xatolar ustida ishlab, bilimingizni mustahkamlang.";

  mount(
    el,
    html`<section class="hero">
        <div class="hero-text">
          <p class="eyebrow">${greeting()}</p>
          <h1>${d.user.name}</h1>
          <p class="lead">${lead}</p>
          <div class="hero-cta">${cta}</div>
        </div>
        <div class="hero-stats">
          ${ring(pct, `${d.stats.passed}`, `/ ${d.stats.total} dars`, 132)}
          <dl class="mini-stats">
            <div><dt>O'zlashtirilgan so'zlar</dt><dd>${d.stats.words}</dd></div>
            <div><dt>Kanjilar</dt><dd><a href="#/kanji">${d.stats.kanji}</a></dd></div>
            <div>
              <dt>Takrorlash kerak</dt>
              <dd>${d.stats.weak ? html`<a href="#/mistakes">${d.stats.weak}</a>` : "0"}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section class="kana-strip ${needKana ? "is-required" : ""}">
        <div class="kana-strip-text">
          <h2>${needKana ? "1-qadam: alifbo testi" : "Alifbo"}</h2>
          <p class="muted">${needKana
            ? `Har bir testdan kamida ${d.settings.kana_pass_percent}% to'plang — shundan keyin 1-dars ochiladi.`
            : "Hiragana va katakana jadvallarini istalgan payt takrorlashingiz mumkin."}</p>
        </div>
        <div class="kana-chips">
          ${kanaChip("Hiragana", "あ", d.kana.hiragana, d.settings.kana_pass_percent)}
          ${kanaChip("Katakana", "ア", d.kana.katakana, d.settings.kana_pass_percent)}
        </div>
      </section>

      ${bookSection("みんなの日本語 I", "1-kitob · 1–25-darslar", d.lessons.filter((l) => l.n <= 25), d.current)}
      ${bookSection("みんなの日本語 II", "2-kitob · 26–50-darslar", d.lessons.filter((l) => l.n > 25), d.current)}

      <p class="footnote">Har bir dars: so'zlar → grammatika → kanji → mashqlar → tekshiruv. Keyingi dars faqat oldingi dars
        tekshiruvidan (so'z + grammatika) kamida ${d.settings.pass_percent}% bilan o'tgandan keyin ochiladi.</p>`,
  );
}
