import { api } from "../api.js";
import { html, mount, icon, storage } from "../dom.js";
import { refresh } from "../app.js";
import { romajiToHiragana, toHiragana } from "../kana.js";
import { kanjiTile, openKanjiModal } from "../kanjiView.js";
import { runTest } from "./test.js";

const BOOKS = [
  { id: "all", label: "Hammasi" },
  { id: "1", label: "1-kitob" },
  { id: "2", label: "2-kitob" },
];

function matches(k, q) {
  if (!q) return true;
  const kana = toHiragana(romajiToHiragana(q));
  const hay = [k.char, k.meaning.toLowerCase(), toHiragana(k.onyomi), k.kunyomi, ...k.examples.flatMap((e) => [e.w, e.r])].join(" ");
  return hay.includes(q) || (kana && hay.includes(kana));
}

export async function kanjiListPage(el) {
  const d = await api.get("/api/kanji");
  const byId = new Map(d.lessons.flatMap((l) => l.kanji.map((k) => [k.id, { k, n: l.n }])));
  const total = byId.size;
  const open = d.lessons.filter((l) => l.unlocked).reduce((s, l) => s + l.kanji.length, 0);
  const learned = d.lessons.filter((l) => l.passed).reduce((s, l) => s + l.kanji.length, 0);
  let book = storage.get("kanjiBook", "all");
  let query = "";

  const list = () => {
    const lessons = d.lessons.filter((l) => book === "all" || (book === "1" ? l.n <= 25 : l.n > 25));
    const sections = lessons
      .map((l) => ({ l, kanji: l.kanji.filter((k) => matches(k, query)) }))
      .filter((s) => s.kanji.length);
    if (!sections.length) return html`<p class="muted">Hech narsa topilmadi.</p>`;
    return sections.map(
      ({ l, kanji }) => html`<section class="kanji-section ${l.unlocked ? "" : "is-locked"}">
        <h3><a href="#/lesson/${l.n}/kanji">${l.n}-dars</a> <span class="muted">· ${l.title}</span>
          ${l.passed ? icon("check", "ok") : !l.unlocked ? icon("lock") : ""}</h3>
        <div class="kanji-tiles">${kanji.map((k) => kanjiTile(k, !l.unlocked))}</div>
      </section>`,
    );
  };

  mount(
    el,
    html`<header class="page-head">
        <p class="eyebrow">漢字 · Kanji</p>
        <h1>Kanji</h1>
        <p class="lead">Minna no Nihongo darslari bo'yicha ${total} ta kanji (JLPT N5–N4 darajasi). Kanjini bosing — yozilish tartibi,
          o'qilishlari va misol so'zlarni ko'rasiz.</p>
      </header>
      <div class="stat-tiles">
        <div class="stat-tile"><span class="st-value">${total}</span><span class="st-label">Jami kanji</span></div>
        <div class="stat-tile"><span class="st-value">${open}</span><span class="st-label">Ochiq darslarda</span></div>
        <div class="stat-tile"><span class="st-value">${learned}</span><span class="st-label">O'tilgan darslarda</span></div>
        <div class="stat-tile stat-action">
          <button type="button" class="btn btn-primary" data-practice ${open ? "" : "disabled"}>Kanji takrorlash ${icon("arrow")}</button>
          <small>Ochiq darslardan 15 ta tasodifiy kanji</small>
        </div>
      </div>
      <div class="toolbar">
        <input type="search" class="search" placeholder="Qidirish: kanji, ma'nosi yoki o'qilishi (masalan: hito, odam)" data-search aria-label="Qidirish">
        <div class="seg" role="tablist" aria-label="Kitob">
          ${BOOKS.map((b) => html`<button type="button" class="${b.id === book ? "active" : ""}" data-book="${b.id}">${b.label}</button>`)}
        </div>
      </div>
      <div data-list>${list()}</div>`,
  );

  const listEl = el.querySelector("[data-list]");
  el.querySelector("[data-search]").addEventListener("input", (e) => {
    query = e.target.value.trim().toLowerCase();
    mount(listEl, list());
  });
  el.addEventListener("click", (e) => {
    const tile = e.target.closest("[data-kanji]");
    if (tile) {
      const item = byId.get(Number(tile.dataset.kanji));
      if (item) openKanjiModal(item.k, { lesson: item.n });
      return;
    }
    const b = e.target.closest("[data-book]");
    if (b) {
      book = b.dataset.book;
      storage.set("kanjiBook", book);
      el.querySelectorAll("[data-book]").forEach((x) => x.classList.toggle("active", x === b));
      mount(listEl, list());
      return;
    }
    if (e.target.closest("[data-practice]")) runTest({ type: "kanji", mode: "practice" }, { onClose: refresh });
  });
}
