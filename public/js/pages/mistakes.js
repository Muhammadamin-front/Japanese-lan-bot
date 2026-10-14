import { api } from "../api.js";
import { html, raw, mount, icon, speakBtn } from "../dom.js";
import { refresh } from "../app.js";
import { runTest } from "./test.js";

export async function mistakesPage(el) {
  const d = await api.get("/api/mistakes");
  const count = d.words.length + d.kanji.length;
  mount(
    el,
    html`<header class="page-head">
        <p class="eyebrow">復習 · Takrorlash</p>
        <h1>Xatolarim</h1>
        <p class="lead">Mashq va tekshiruvlarda xato qilgan so'z va kanjilaringiz shu yerda yig'iladi. Ketma-ket 2 marta to'g'ri
          javob bersangiz, u ro'yxatdan chiqadi.</p>
      </header>
      ${count
        ? html`<div class="card mistakes-cta">
            <div>
              <h2>${count} ta element takrorlashni kutmoqda</h2>
              <p class="muted">${d.mastered ? `${d.mastered} tasini allaqachon o'zlashtirdingiz.` : "Har bir mashqda 15 tagacha savol beriladi."}</p>
            </div>
            <button type="button" class="btn btn-primary btn-lg" data-start>Mashqni boshlash ${icon("arrow")}</button>
          </div>
          ${d.kanji.length
            ? html`<section class="card">
                <h3>Kanji <span class="badge">${d.kanji.length}</span></h3>
                <div class="kanji-tiles">
                  ${d.kanji.map(
                    (k) => html`<a class="kanji-tile" href="#/lesson/${k.lesson}/kanji" title="${k.lesson}-dars">
                      <span class="kt-char">${k.char}</span><span class="kt-meaning">${k.meaning}</span>
                      <span class="kt-count">${k.wrong_count} xato</span></a>`,
                  )}
                </div>
              </section>`
            : ""}
          <div class="table-wrap" ${d.words.length ? "" : raw("hidden")}>
            <table class="table">
              <thead><tr><th>So'z</th><th>Ma'nosi</th><th>Dars</th><th class="num">Xato</th><th class="num">To'g'ri</th><th></th></tr></thead>
              <tbody>
                ${d.words.map(
                  (w) => html`<tr>
                    <td><span class="jp strong">${w.kana}</span>${w.kanji ? html` <span class="muted jp">${w.kanji}</span>` : ""}</td>
                    <td>${w.meaning}</td>
                    <td><a href="#/lesson/${w.lesson}/vocab">${w.lesson}-dars</a></td>
                    <td class="num"><span class="score low">${w.wrong_count}</span></td>
                    <td class="num">${w.right_count}</td>
                    <td class="num">${speakBtn(w.kana)}</td>
                  </tr>`,
                )}
              </tbody>
            </table>
          </div>`
        : html`<div class="empty-state">
            <div class="empty-mark jp">完璧</div>
            <h2>Takrorlash uchun so'z yo'q</h2>
            <p class="muted">${d.mastered ? `Barcha xatolar tuzatildi — ${d.mastered} ta so'z o'zlashtirildi.` : "Mashq va tekshiruvlarda xato qilgan so'zlaringiz shu yerda paydo bo'ladi."}</p>
            <a class="btn" href="#/">Darslarga qaytish</a>
          </div>`}`,
  );
  el.querySelector("[data-start]")?.addEventListener("click", () =>
    runTest({ type: "mistakes", mode: "practice" }, { onClose: refresh }),
  );
}
