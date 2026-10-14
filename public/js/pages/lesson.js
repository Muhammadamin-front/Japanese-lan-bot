import { api } from "../api.js";
import { html, mount, icon, md, speakBtn, onKey, storage, fmtDate, scoreClass } from "../dom.js";
import { refresh } from "../app.js";
import { toRomaji } from "../kana.js";
import { runTest } from "./test.js";
import { kanjiCard, openKanjiModal } from "../kanjiView.js";

const TABS = [
  { id: "vocab", label: "So'zlar" },
  { id: "grammar", label: "Grammatika" },
  { id: "kanji", label: "Kanji" },
  { id: "practice", label: "Mashqlar" },
  { id: "check", label: "Tekshiruv" },
];

const bookOf = (n) => (n <= 25 ? "1-kitob" : "2-kitob");

/* ---------------- Yopiq dars ---------------- */

function lockedView(d) {
  const n = d.lesson.n;
  let body;
  if (n === 1 && !d.kanaOk) {
    body = html`<p class="lead">Darslarni boshlash uchun avval <b>hiragana</b> va <b>katakana</b> testlaridan o'ting.</p>
      <div class="hero-cta"><a class="btn btn-primary btn-lg" href="#/kana">Kana bo'limiga o'tish ${icon("arrow")}</a></div>`;
  } else if (d.prev && d.prev.unlocked) {
    body = html`<p class="lead">Bu darsga o'tishdan oldin <b>${d.prev.n}-dars</b> bo'yicha so'z va grammatika tekshiruvidan
        kamida <b>${d.settings.pass_percent}%</b> bilan o'ting.</p>
      ${d.prev.attempts ? html`<p class="muted">Oldingi urinishlardagi eng yaxshi natija: ${d.prev.best}%</p>` : ""}
      <div class="hero-cta">
        <button type="button" class="btn btn-primary btn-lg" data-check="${d.prev.n}">${d.prev.n}-dars tekshiruvini boshlash</button>
        <a class="btn btn-lg" href="#/lesson/${d.prev.n}">${d.prev.n}-darsni takrorlash</a>
      </div>`;
  } else {
    body = html`<p class="lead">Darslar ketma-ket ochiladi.${d.current ? html` Hozirgi darsingiz — <b>${d.current.n}-dars</b>.` : ""}</p>
      <div class="hero-cta">
        ${d.current ? html`<a class="btn btn-primary btn-lg" href="#/lesson/${d.current.n}">${d.current.n}-darsga o'tish</a>` : ""}
        <a class="btn btn-lg" href="#/">Barcha darslar</a>
      </div>`;
  }
  return html`<nav class="crumbs"><a href="#/">Darslar</a><span>/</span>${bookOf(n)}</nav>
    <section class="locked">
      <div class="locked-icon">${icon("lock")}</div>
      <p class="eyebrow">第${n}課</p>
      <h1>${n}-dars. ${d.lesson.title}</h1>
      ${body}
    </section>`;
}

/* ---------------- So'zlar ---------------- */

function vocabList(vocab, showRomaji) {
  return html`<div class="vocab-list ${showRomaji ? "" : "hide-romaji"}">
    ${vocab.map(
      (w, i) => html`<div class="vocab-row">
        <span class="v-num">${i + 1}</span>
        <span class="v-jp">
          <span class="v-kana">${w.kana}</span>
          ${w.kanji ? html`<span class="v-kanji">${w.kanji}</span>` : ""}
        </span>
        <span class="v-romaji">${toRomaji(w.kana)}</span>
        <span class="v-meaning">${w.meaning}</span>
        ${speakBtn(w.kana)}
      </div>`,
    )}
  </div>`;
}

function renderVocab(body, d) {
  if (!d.state.vocabSeen) api.post(`/api/lessons/${d.lesson.n}/seen`, { part: "vocab" }).catch(() => {});
  let mode = storage.get("vocabMode", "list");
  let showRomaji = storage.get("showRomaji", true);
  let cards = d.vocab;
  let idx = 0;
  let flipped = false;

  const flashcard = () => {
    const w = cards[idx];
    return html`<div class="flash-wrap">
      <button type="button" class="flashcard ${flipped ? "is-flipped" : ""}" data-act="flip" aria-label="Kartochkani aylantirish">
        <span class="flash-face flash-front">
          <span class="flash-jp">${w.kanji || w.kana}</span>
          ${w.kanji ? html`<span class="flash-sub">${w.kana}</span>` : ""}
          <span class="flash-tip">Bosing — ma'nosini ko'rish</span>
        </span>
        <span class="flash-face flash-back">
          <span class="flash-meaning">${w.meaning}</span>
          <span class="flash-sub">${w.kana}${w.kanji ? ` · ${w.kanji}` : ""} · ${toRomaji(w.kana)}</span>
        </span>
      </button>
      <div class="flash-controls">
        <button type="button" class="btn" data-act="prev" ${idx === 0 ? "disabled" : ""}>${icon("back")} Oldingi</button>
        <span class="flash-count">${idx + 1} / ${cards.length}</span>
        ${speakBtn(w.kana)}
        <button type="button" class="btn" data-act="shuffle" title="Aralashtirish">${icon("shuffle")}</button>
        <button type="button" class="btn" data-act="next" ${idx === cards.length - 1 ? "disabled" : ""}>Keyingi ${icon("arrow")}</button>
      </div>
      <p class="muted small center">Klaviatura: ← → — o'tish, probel — aylantirish</p>
    </div>`;
  };

  const draw = () =>
    mount(
      body,
      html`<div class="toolbar">
          <div class="seg" role="tablist" aria-label="Ko'rinish">
            <button type="button" class="${mode === "list" ? "active" : ""}" data-mode="list">Ro'yxat</button>
            <button type="button" class="${mode === "cards" ? "active" : ""}" data-mode="cards">Kartochkalar</button>
          </div>
          ${mode === "list"
            ? html`<label class="switch"><input type="checkbox" data-act="romaji" ${showRomaji ? "checked" : ""}><span></span> Romaji</label>`
            : ""}
          <span class="muted small">${d.vocab.length} ta so'z</span>
        </div>
        ${d.vocab.length ? (mode === "list" ? vocabList(d.vocab, showRomaji) : flashcard()) : html`<p class="muted">Bu darsga hali so'z qo'shilmagan.</p>`}
        <div class="next-step">
          <a class="btn btn-primary" href="#/lesson/${d.lesson.n}/grammar">Grammatikaga o'tish ${icon("arrow")}</a>
        </div>`,
    );

  body.addEventListener("click", (e) => {
    const t = e.target.closest("[data-mode], [data-act]");
    if (!t || t.matches("[data-speak]")) return;
    if (t.dataset.mode) {
      mode = t.dataset.mode;
      storage.set("vocabMode", mode);
      return draw();
    }
    switch (t.dataset.act) {
      case "flip":
        flipped = !flipped;
        body.querySelector(".flashcard")?.classList.toggle("is-flipped", flipped);
        return;
      case "prev":
        idx = Math.max(0, idx - 1);
        break;
      case "next":
        idx = Math.min(cards.length - 1, idx + 1);
        break;
      case "shuffle":
        cards = [...cards].sort(() => Math.random() - 0.5);
        idx = 0;
        break;
      default:
        return;
    }
    flipped = false;
    draw();
  });
  body.addEventListener("change", (e) => {
    if (e.target.dataset.act !== "romaji") return;
    showRomaji = e.target.checked;
    storage.set("showRomaji", showRomaji);
    body.querySelector(".vocab-list")?.classList.toggle("hide-romaji", !showRomaji);
  });
  onKey(body, (e) => {
    if (mode !== "cards" || document.querySelector(".test-overlay, .modal-backdrop")) return;
    if (e.target.matches?.("input, textarea")) return;
    if (e.key === "ArrowRight" && idx < cards.length - 1) (idx++, (flipped = false), draw());
    else if (e.key === "ArrowLeft" && idx > 0) (idx--, (flipped = false), draw());
    else if (e.key === " ") {
      e.preventDefault();
      flipped = !flipped;
      body.querySelector(".flashcard")?.classList.toggle("is-flipped", flipped);
    }
  });
  draw();
}

/* ---------------- Grammatika ---------------- */

function renderGrammar(body, d) {
  if (!d.state.grammarSeen) api.post(`/api/lessons/${d.lesson.n}/seen`, { part: "grammar" }).catch(() => {});
  mount(
    body,
    html`${d.grammar.length
        ? html`<nav class="g-toc" aria-label="Grammatika mavzulari">
            ${d.grammar.map((g, i) => html`<a href="#g-${g.id}" data-jump="g-${g.id}"><span>${i + 1}</span>${g.pattern || g.title}</a>`)}
          </nav>`
        : html`<p class="muted">Bu darsga hali grammatika qo'shilmagan.</p>`}
      ${d.grammar.map(
        (g, i) => html`<article class="grammar-card" id="g-${g.id}">
          <header>
            <span class="g-num">${i + 1}</span>
            <h3>${g.title}</h3>
          </header>
          ${g.pattern ? html`<div class="g-pattern">${g.pattern}</div>` : ""}
          <div class="prose">${md(g.explanation)}</div>
          ${g.examples.length
            ? html`<div class="examples">
                <div class="examples-title">Misollar · 例文</div>
                ${g.examples.map(
                  (ex) => html`<div class="example">
                    ${speakBtn(ex.jp)}
                    <div>
                      <div class="ex-jp">${ex.jp}</div>
                      <div class="ex-uz">${ex.uz}</div>
                    </div>
                  </div>`,
                )}
              </div>`
            : ""}
        </article>`,
      )}
      <div class="next-step">
        <a class="btn" href="#/lesson/${d.lesson.n}/vocab">${icon("back")} So'zlar</a>
        <a class="btn btn-primary" href="#/lesson/${d.lesson.n}/kanji">Kanjiga o'tish ${icon("arrow")}</a>
      </div>`,
  );
  // Ichki havolalar hash-routerni buzmasligi uchun skroll qo'lda qilinadi.
  body.addEventListener("click", (e) => {
    const a = e.target.closest("[data-jump]");
    if (!a) return;
    e.preventDefault();
    document.getElementById(a.dataset.jump)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

/* ---------------- Kanji ---------------- */

function renderKanji(body, d) {
  const n = d.lesson.n;
  if (!d.state.kanjiSeen) api.post(`/api/lessons/${n}/seen`, { part: "kanji" }).catch(() => {});
  mount(
    body,
    html`${d.kanji.length
        ? html`<p class="lead">Bu darsda <b>${d.kanji.length} ta kanji</b>. Kartochkani bosing — yozilish tartibi animatsiyasi,
              o'qilishlari va misol so'zlar ochiladi.</p>
            <div class="kanji-cards">${d.kanji.map(kanjiCard)}</div>
            <div class="note">On o'qilishi (音読み) — xitoycha kelib chiqqan o'qilish, odatda qo'shma so'zlarda: 日本 (にほん).
              Kun o'qilishi (訓読み) — sof yaponcha o'qilish, ko'pincha kanji yolg'iz yoki qo'shimcha bilan kelganda: 日 (ひ).</div>`
        : html`<p class="muted">Bu darsga hali kanji qo'shilmagan.</p>`}
      <div class="next-step">
        <a class="btn" href="#/lesson/${n}/grammar">${icon("back")} Grammatika</a>
        <a class="btn btn-primary" href="#/lesson/${n}/practice">Mashqlarga o'tish ${icon("arrow")}</a>
      </div>`,
  );
  body.addEventListener("click", (e) => {
    const card = e.target.closest("[data-kanji]");
    if (!card) return;
    const k = d.kanji.find((x) => x.id === Number(card.dataset.kanji));
    if (k) openKanjiModal(k, { lesson: n });
  });
}

/* ---------------- Mashqlar ---------------- */

function renderPractice(body, d) {
  const n = d.lesson.n;
  const practices = d.attempts.filter((a) => a.mode === "practice");
  const items = [
    {
      part: "vocab",
      jp: "ことば",
      title: "So'zlar mashqi",
      text: `Ma'nosini topish, yaponchasini tanlash va yozish. ${Math.min(15, d.vocab.length)} ta savol.`,
    },
    {
      part: "grammar",
      jp: "ぶんぽう",
      title: "Grammatika mashqi",
      text: "Bo'sh joyni to'ldirish, to'g'ri shaklni tanlash va gap tuzish.",
    },
    d.kanji.length && {
      part: "kanji",
      jp: "かんじ",
      title: "Kanji mashqi",
      text: "Kanjining ma'nosi, so'zlarning o'qilishi va mos kanjini topish.",
    },
    { part: "mixed", jp: "まとめ", title: "Aralash mashq", text: "So'z, grammatika va kanji birgalikda — tekshiruvdan oldin sinab ko'ring." },
  ].filter(Boolean);
  mount(
    body,
    html`<p class="lead">Mashqlarda har bir javob darhol tekshiriladi va izoh beriladi. Xohlagancha takrorlashingiz mumkin —
        natija keyingi darsni ochmaydi, lekin ustozingiz faolligingizni ko'radi.</p>
      <div class="practice-grid">
        ${items.map(
          (it) => html`<button type="button" class="practice-card" data-part="${it.part}">
            <span class="pc-jp">${it.jp}</span>
            <span class="pc-title">${it.title}</span>
            <span class="pc-text">${it.text}</span>
            <span class="pc-go">Boshlash ${icon("arrow")}</span>
          </button>`,
        )}
      </div>
      ${practices.length
        ? html`<section class="history">
            <h3>So'nggi mashqlar</h3>
            <div class="history-list">
              ${practices.slice(0, 6).map(
                (a) => html`<div class="history-row"><span>${fmtDate(a.created_at)}</span>
                  <span class="score ${scoreClass(a.percent, 80)}">${a.percent}%</span><span class="muted">${a.score}/${a.total}</span></div>`,
              )}
            </div>
          </section>`
        : ""}
      <div class="next-step">
        <a class="btn" href="#/lesson/${n}/kanji">${icon("back")} Kanji</a>
        <a class="btn btn-primary" href="#/lesson/${n}/check">Tekshiruvga o'tish ${icon("arrow")}</a>
      </div>`,
  );
  body.addEventListener("click", (e) => {
    const t = e.target.closest("[data-part]");
    if (t) runTest({ type: "lesson", target: n, mode: "practice", part: t.dataset.part }, { onClose: refresh });
  });
}

/* ---------------- Tekshiruv ---------------- */

function renderCheck(body, d) {
  const n = d.lesson.n;
  const s = d.settings;
  const checks = d.attempts.filter((a) => a.mode === "check");
  const reviewCount = n > 1 ? s.check_review : 0;
  const nextTitle = d.next ? `${d.next.n}-dars` : "kursni yakunlash";
  mount(
    body,
    html`<section class="check-panel ${d.state.passed ? "is-passed" : ""}">
        <div class="check-main">
          <p class="eyebrow">確認テスト · Dars tekshiruvi</p>
          <h2>${d.state.passed ? "Bu dars o'tilgan" : `${nextTitle}ga o'tish uchun tekshiruv`}</h2>
          <p class="lead">${d.state.passed
            ? html`Eng yaxshi natijangiz: <b>${d.state.best}%</b>. Bilimingizni mustahkamlash uchun qayta topshirishingiz mumkin.`
            : html`Bu darsning so'zlari va grammatikasi bo'yicha tekshiruv. Kamida <b>${s.pass_percent}%</b> to'plasangiz, ${nextTitle} ochiladi.`}</p>
          <ul class="check-list">
            <li><b>${Math.min(s.check_vocab, d.vocab.length)}</b> ta so'z savoli</li>
            <li><b>${s.check_grammar}</b> ta grammatika savoli (variant tanlash va gap tuzish)</li>
            ${Math.min(s.check_kanji, d.kanji.length) ? html`<li><b>${Math.min(s.check_kanji, d.kanji.length)}</b> ta kanji savoli</li>` : ""}
            ${reviewCount ? html`<li><b>${reviewCount}</b> ta oldingi darslardan takrorlash</li>` : ""}
            <li>Javoblar oxirida ko'rsatiladi</li>
          </ul>
          <div class="hero-cta">
            <button type="button" class="btn btn-primary btn-lg" data-start>${d.state.passed ? "Qayta topshirish" : "Tekshiruvni boshlash"}</button>
            ${d.state.passed && d.next ? html`<a class="btn btn-lg" href="#/lesson/${d.next.n}">${d.next.n}-darsga o'tish ${icon("arrow")}</a>` : ""}
          </div>
        </div>
        ${d.state.passed ? html`<div class="check-seal" aria-hidden="true">合格</div>` : ""}
      </section>
      ${checks.length
        ? html`<section class="history">
            <h3>Urinishlar</h3>
            <div class="history-list">
              ${checks.map(
                (a) => html`<div class="history-row">
                  <span>${fmtDate(a.created_at)}</span>
                  <span class="score ${scoreClass(a.percent, s.pass_percent)}">${a.percent}%</span>
                  <span class="muted">${a.score}/${a.total}</span>
                  ${a.passed ? html`<span class="badge badge-ok">O'tdi</span>` : html`<span class="badge">O'tmadi</span>`}
                </div>`,
              )}
            </div>
          </section>`
        : ""}`,
  );
  body.querySelector("[data-start]").addEventListener("click", () =>
    runTest({ type: "lesson", target: n, mode: "check" }, { onClose: refresh }),
  );
}

/* ---------------- Sahifa ---------------- */

export async function lessonPage(el, [nStr, tab = "vocab"]) {
  const n = Number(nStr);
  const d = await api.get(`/api/lessons/${n}`);

  if (d.locked) {
    mount(el, lockedView(d));
    el.addEventListener("click", (e) => {
      const t = e.target.closest("[data-check]");
      if (t) runTest({ type: "lesson", target: Number(t.dataset.check), mode: "check" }, { onClose: refresh });
    });
    return;
  }

  const done = {
    vocab: d.state.vocabSeen || tab === "vocab",
    grammar: d.state.grammarSeen || tab === "grammar",
    kanji: d.state.kanjiSeen || tab === "kanji",
    practice: d.attempts.some((a) => a.mode === "practice"),
    check: d.state.passed,
  };

  mount(
    el,
    html`<nav class="crumbs"><a href="#/">Darslar</a><span>/</span>${bookOf(n)}<span>/</span>${n}-dars</nav>
      <header class="lesson-head">
        <div class="lesson-badge"><span>第</span>${n}<span>課</span></div>
        <div class="lesson-title">
          <h1>${d.lesson.title}</h1>
          ${d.lesson.intro ? html`<p class="lead">${d.lesson.intro}</p>` : ""}
        </div>
        ${d.state.passed ? html`<span class="badge badge-ok lesson-state">${icon("check")} O'tilgan · ${d.state.best}%</span>` : ""}
      </header>
      <nav class="steps" aria-label="Dars bosqichlari">
        ${TABS.map(
          (t, i) => html`<a href="#/lesson/${n}/${t.id}" class="step ${t.id === tab ? "active" : ""} ${done[t.id] ? "done" : ""}"
            aria-current="${t.id === tab ? "page" : "false"}">
            <span class="step-num">${done[t.id] && t.id !== tab ? icon("check") : i + 1}</span>
            <span class="step-label">${t.label}</span>
          </a>`,
        )}
      </nav>
      <div class="tab-body"></div>
      <nav class="lesson-pager">
        ${d.prev ? html`<a href="#/lesson/${d.prev.n}" class="pager-link">${icon("back")} ${d.prev.n}-dars</a>` : html`<span></span>`}
        ${d.next
          ? html`<a href="#/lesson/${d.next.n}" class="pager-link ${d.next.unlocked ? "" : "is-locked"}">
              ${d.next.n}-dars ${d.next.unlocked ? icon("arrow") : icon("lock")}</a>`
          : ""}
      </nav>`,
  );

  const body = el.querySelector(".tab-body");
  ({ vocab: renderVocab, grammar: renderGrammar, kanji: renderKanji, practice: renderPractice, check: renderCheck })[tab](body, d);
}
