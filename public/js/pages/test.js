// Test oynasi: kana testlari, dars mashqlari, dars tekshiruvi va xatolar ustida ishlash.
import { api } from "../api.js";
import { html, mount, icon, speakBtn, onKey, ring, confirmBox, toast } from "../dom.js";
import { romajiToHiragana } from "../kana.js";

const HINTS = {
  jp2uz: "Ma'nosini tanlang",
  uz2jp: "Yaponchasini tanlang",
  type: "Yaponcha yozing — kana yoki romaji",
  mc: "To'g'ri variantni tanlang",
  order: "Bo'laklarni bosib, gapni to'g'ri tartibda tuzing",
  kana2romaji: "Bu harf qanday o'qiladi? Romajida yozing",
  romaji2kana: "Shu tovushni bildiruvchi harfni tanlang",
};
const OPTION_KINDS = new Set(["jp2uz", "uz2jp", "mc", "romaji2kana"]);
const JP_OPTIONS = new Set(["uz2jp", "mc", "romaji2kana"]);
const HAS_JP = /[぀-ヿ一-龯]/;

/**
 * opts: { type: "kana"|"lesson"|"mistakes", target, mode: "practice"|"check", part }
 * onClose: test natijasi saqlangandan keyin oyna yopilganda chaqiriladi.
 */
export async function runTest(opts, { onClose } = {}) {
  let data;
  try {
    data = await api.post("/api/tests", opts);
  } catch (err) {
    toast(err.message, "error");
    return;
  }

  const el = document.createElement("div");
  el.className = "test-overlay";
  document.getElementById("overlay-root").append(el);
  document.body.classList.add("no-scroll");

  const qs = data.questions;
  const answers = new Array(qs.length).fill(null);
  let index = 0;
  let phase = "answer"; // answer | checking | feedback | submitting | result
  let selected = null;
  let picked = [];
  let saved = false;

  const q = () => qs[index];
  const isLast = () => index === qs.length - 1;

  function close({ silent = false } = {}) {
    el.remove();
    document.body.classList.remove("no-scroll");
    if (saved && !silent) onClose?.();
  }

  async function quit() {
    if (phase === "result" || answers.every((a) => a === null)) return close();
    const ok = await confirmBox("Testni to'xtatasizmi? Javoblaringiz saqlanmaydi.", { okText: "To'xtatish", danger: true });
    if (ok) close();
  }

  function currentAnswer() {
    const cur = q();
    if (OPTION_KINDS.has(cur.kind)) return selected;
    if (cur.kind === "order") return picked.map((i) => cur.chunks[i]);
    return el.querySelector(".type-input")?.value.trim() ?? "";
  }

  function isEmpty(given) {
    if (q().kind === "order") return given.length < q().chunks.length;
    return given === null || given === "";
  }

  function updatePrimary() {
    const btn = el.querySelector('[data-act="primary"]');
    if (!btn) return;
    if (phase === "feedback") {
      btn.disabled = false;
      btn.textContent = isLast() ? "Natijani ko'rish" : "Keyingi →";
      return;
    }
    btn.disabled = phase !== "answer" || isEmpty(currentAnswer());
    btn.textContent = data.mode === "practice" ? "Tekshirish" : isLast() ? "Yakunlash" : "Keyingi →";
  }

  function answerArea(cur) {
    if (OPTION_KINDS.has(cur.kind)) {
      return html`<div class="opt-grid ${JP_OPTIONS.has(cur.kind) ? "jp" : ""} ${cur.kind === "romaji2kana" ? "kana" : ""}">
        ${cur.options.map(
          (o, i) => html`<button type="button" class="opt" data-opt="${i}"><kbd>${i + 1}</kbd><span>${o}</span></button>`,
        )}
      </div>`;
    }
    if (cur.kind === "order") {
      return html`<div class="order-slot" data-slot></div>
        <div class="order-bank">
          ${cur.chunks.map((c, i) => html`<button type="button" class="chunk" data-chunk="${i}">${c}</button>`)}
        </div>`;
    }
    const romaji = cur.kind === "kana2romaji";
    return html`<div class="type-box ${romaji ? "centered" : ""}">
      <input class="type-input ${romaji ? "latin" : ""}" autocomplete="off" autocapitalize="none" autocorrect="off"
        spellcheck="false" lang="${romaji ? "en" : "ja"}" placeholder="${romaji ? "masalan: ka" : "masalan: watashi yoki わたし"}">
      ${romaji ? "" : html`<div class="type-preview" aria-live="polite"></div>`}
    </div>`;
  }

  function promptClass(cur) {
    if (cur.kind === "kana2romaji") return "is-kana";
    if (cur.prompt.latin) return "is-latin";
    return cur.prompt.uz ? "is-uz" : "is-jp";
  }

  function drawQuestion() {
    const cur = q();
    phase = "answer";
    selected = null;
    picked = [];
    mount(
      el,
      html`<div class="test-shell" role="dialog" aria-modal="true" aria-label="${data.title}">
        <header class="test-head">
          <button type="button" class="icon-btn" data-act="quit" aria-label="Testni yopish">${icon("x")}</button>
          <div class="test-title">
            ${data.title}
            <span class="badge ${data.mode === "check" ? "badge-accent" : ""}">${data.mode === "check" ? "Tekshiruv" : "Mashq"}</span>
          </div>
          <div class="test-count">${index + 1}<span> / ${qs.length}</span></div>
        </header>
        <div class="test-progress"><span style="width:${((index / qs.length) * 100).toFixed(1)}%"></span></div>
        <div class="test-body">
          <div class="q-meta">
            ${cur.section ? html`<span class="q-section">${cur.section}</span>` : ""}
            <span class="q-hint">${cur.hint || HINTS[cur.kind] || ""}</span>
          </div>
          <div class="q-prompt ${promptClass(cur)}">
            <span class="q-main">${cur.prompt.main}</span>
            ${cur.prompt.tts ? speakBtn(cur.prompt.tts) : ""}
          </div>
          ${cur.prompt.sub ? html`<div class="q-sub">${cur.prompt.sub}</div>` : ""}
          <div class="q-answer">${answerArea(cur)}</div>
          <div class="q-feedback" aria-live="polite"></div>
        </div>
        <footer class="test-foot">
          <button type="button" class="btn btn-primary btn-lg" data-act="primary" disabled></button>
        </footer>
      </div>`,
    );
    if (cur.kind === "order") drawOrder();
    updatePrimary();
    el.querySelector(".type-input")?.focus();
  }

  function drawOrder() {
    const cur = q();
    mount(
      el.querySelector("[data-slot]"),
      picked.length
        ? picked.map((ci, pos) => html`<button type="button" class="chunk placed" data-picked="${pos}">${cur.chunks[ci]}</button>`)
        : html`<span class="slot-hint">Gap shu yerda paydo bo'ladi</span>`,
    );
    el.querySelectorAll("[data-chunk]").forEach((b) => {
      b.disabled = phase !== "answer" || picked.includes(Number(b.dataset.chunk));
    });
    updatePrimary();
  }

  function chooseOption(i) {
    if (phase !== "answer") return;
    selected = q().options[i];
    el.querySelectorAll(".opt").forEach((b) => b.classList.toggle("is-selected", Number(b.dataset.opt) === i));
    if (data.mode === "practice") check();
    else updatePrimary();
  }

  function lockInputs() {
    el.querySelectorAll(".opt, .chunk, .type-input").forEach((b) => (b.disabled = true));
  }

  async function check() {
    const given = currentAnswer();
    if (phase !== "answer" || isEmpty(given)) return;
    phase = "checking";
    answers[index] = given;
    lockInputs();
    updatePrimary();
    try {
      const res = await api.post(`/api/tests/${data.id}/answer`, { index, answer: given });
      showFeedback(res);
    } catch (err) {
      phase = "answer";
      toast(err.message, "error");
      el.querySelectorAll(".opt, .type-input").forEach((b) => (b.disabled = false));
      if (q().kind === "order") drawOrder();
      updatePrimary();
    }
  }

  function showFeedback(res) {
    const cur = q();
    phase = "feedback";
    if (OPTION_KINDS.has(cur.kind)) {
      el.querySelectorAll(".opt").forEach((b) => {
        const value = cur.options[Number(b.dataset.opt)];
        b.classList.toggle("is-correct", value === res.answer);
        b.classList.toggle("is-wrong", value === selected && !res.correct);
      });
    } else if (cur.kind === "order") {
      el.querySelector("[data-slot]").classList.add(res.correct ? "is-correct" : "is-wrong");
    } else {
      el.querySelector(".type-input").classList.add(res.correct ? "is-correct" : "is-wrong");
    }
    const jp = res.reveal.split(" — ")[0];
    mount(
      el.querySelector(".q-feedback"),
      html`<div class="fb ${res.correct ? "fb-good" : "fb-bad"}">
        <div class="fb-head">${icon(res.correct ? "check" : "x")}<b>${res.correct ? "To'g'ri!" : "Noto'g'ri"}</b></div>
        <div class="fb-reveal">${res.correct ? "" : "To'g'ri javob: "}<span class="jp">${res.reveal}</span>
          ${HAS_JP.test(jp) ? speakBtn(jp) : ""}</div>
        ${res.explanation && !res.correct ? html`<p class="fb-expl">${res.explanation}</p>` : ""}
      </div>`,
    );
    updatePrimary();
    el.querySelector('[data-act="primary"]').focus();
  }

  function primary() {
    if (phase === "feedback") return next();
    if (phase !== "answer") return;
    const given = currentAnswer();
    if (isEmpty(given)) return;
    if (data.mode === "practice") return check();
    answers[index] = given;
    next();
  }

  function next() {
    if (isLast()) return submit();
    index++;
    drawQuestion();
  }

  async function submit() {
    phase = "submitting";
    mount(
      el,
      html`<div class="test-shell"><div class="test-body center"><div class="loader"></div><p class="muted">Natijalar hisoblanmoqda…</p></div></div>`,
    );
    try {
      const res = await api.post(`/api/tests/${data.id}/submit`, { answers });
      saved = true;
      drawResult(res);
    } catch (err) {
      mount(
        el,
        html`<div class="test-shell"><div class="test-body center">
          <h2>Natijani yuborib bo'lmadi</h2><p class="muted">${err.message}</p>
          <div class="result-actions">
            <button type="button" class="btn btn-primary" data-act="resubmit">Qayta yuborish</button>
            <button type="button" class="btn" data-act="close">Yopish</button>
          </div>
        </div></div>`,
      );
      phase = "result";
    }
  }

  function resultMessage(res) {
    if (res.mode !== "check") {
      return res.percent >= 80
        ? "Zo'r! Endi tekshiruvni topshirishingiz mumkin."
        : "Xatolaringizni ko'rib chiqing va yana mashq qiling.";
    }
    if (!res.passed) return `O'tish uchun kamida ${res.threshold}% kerak. Xatolarni ko'rib chiqing va qayta urinib ko'ring.`;
    if (res.type === "kana") {
      return res.kanaComplete
        ? "Ikkala alifbo ham o'tildi — 1-dars ochildi!"
        : "Endi ikkinchi alifbo testini ham topshiring.";
    }
    return res.nextLesson ? `${res.nextLesson}-dars ochildi. Oldinga!` : "Siz Minna no Nihongo kursining barcha darslarini tugatdingiz!";
  }

  function givenText(given) {
    if (given === null || given === undefined || given === "") return "—";
    return Array.isArray(given) ? given.join(" ") : String(given);
  }

  function drawResult(res) {
    phase = "result";
    const wrong = res.results
      .map((r, i) => ({ r, cur: qs[i], given: answers[i] }))
      .filter((x) => !x.r.correct);
    const good = res.mode === "check" ? res.passed : res.percent >= 80;
    const title = res.mode === "check" ? (res.passed ? "Tabriklaymiz!" : "Hali biroz mashq kerak") : good ? "Ajoyib!" : "Yaxshi harakat";
    mount(
      el,
      html`<div class="test-shell" role="dialog" aria-modal="true" aria-label="Natija">
        <header class="test-head">
          <button type="button" class="icon-btn" data-act="close" aria-label="Yopish">${icon("x")}</button>
          <div class="test-title">${data.title}</div>
          <div></div>
        </header>
        <div class="test-body result">
          <div class="result-top ${good ? "is-good" : "is-low"}">
            ${ring(res.percent, `${res.percent}%`, `${res.score} / ${res.total}`, 156)}
            <div>
              <h2>${title}</h2>
              <p class="lead">${resultMessage(res)}</p>
              <div class="result-actions">
                ${res.nextLesson
                  ? html`<button type="button" class="btn btn-primary btn-lg" data-act="goto" data-href="#/lesson/${res.nextLesson}">
                      ${res.nextLesson}-darsga o'tish ${icon("arrow")}</button>`
                  : ""}
                ${res.kanaComplete ? html`<button type="button" class="btn btn-primary btn-lg" data-act="goto" data-href="#/lesson/1">1-darsni boshlash ${icon("arrow")}</button>` : ""}
                <button type="button" class="btn ${res.nextLesson || res.kanaComplete ? "" : "btn-primary"}" data-act="retry">${icon("refresh")} Qayta topshirish</button>
                <button type="button" class="btn btn-ghost" data-act="close">Yopish</button>
              </div>
            </div>
          </div>
          ${wrong.length
            ? html`<section class="review">
                <h3>Xatolar tahlili <span class="badge">${wrong.length}</span></h3>
                ${wrong.map(
                  ({ r, cur, given }) => html`<div class="review-item">
                    <div class="ri-q">${cur.prompt.main}${cur.prompt.sub ? html` <span class="muted">(${cur.prompt.sub})</span>` : ""}</div>
                    <div class="ri-row"><span class="ri-label">Sizning javobingiz</span><span class="ri-given">${givenText(given)}</span></div>
                    <div class="ri-row"><span class="ri-label">To'g'ri javob</span><span class="ri-answer">${r.reveal}</span>
                      ${HAS_JP.test(r.reveal.split(" — ")[0]) ? speakBtn(r.reveal.split(" — ")[0]) : ""}</div>
                    ${r.explanation ? html`<p class="ri-expl">${r.explanation}</p>` : ""}
                  </div>`,
                )}
              </section>`
            : html`<p class="all-right">${icon("star")} Barcha javoblar to'g'ri!</p>`}
        </div>
      </div>`,
    );
  }

  el.addEventListener("click", (e) => {
    const t = e.target.closest("[data-act], [data-opt], [data-chunk], [data-picked]");
    if (!t || t.disabled) return;
    const act = t.dataset.act;
    if (act === "quit") return quit();
    if (act === "close") return close();
    if (act === "primary") return primary();
    if (act === "resubmit") return submit();
    if (act === "retry") {
      close();
      runTest(opts, { onClose });
      return;
    }
    if (act === "goto") {
      close({ silent: true });
      location.hash = t.dataset.href;
      return;
    }
    if (phase !== "answer") return;
    if (t.dataset.opt !== undefined) return chooseOption(Number(t.dataset.opt));
    if (t.dataset.chunk !== undefined) {
      picked.push(Number(t.dataset.chunk));
      return drawOrder();
    }
    if (t.dataset.picked !== undefined) {
      picked.splice(Number(t.dataset.picked), 1);
      drawOrder();
    }
  });

  el.addEventListener("input", (e) => {
    if (!e.target.matches(".type-input")) return;
    const preview = el.querySelector(".type-preview");
    if (preview) {
      const v = e.target.value.trim();
      preview.textContent = v && /[a-z]/i.test(v) ? `→ ${romajiToHiragana(v)}` : "";
    }
    updatePrimary();
  });

  onKey(el, (e) => {
    if (document.querySelector(".modal-backdrop")) return;
    if (e.key === "Escape") return phase === "result" ? close() : quit();
    if (phase === "result" || phase === "submitting") return;
    const typing = e.target.matches?.("input, textarea");
    if (e.key === "Enter") {
      e.preventDefault();
      return primary();
    }
    const cur = q();
    if (!typing && phase === "answer" && cur.options && /^[1-9]$/.test(e.key)) {
      const i = Number(e.key) - 1;
      if (i < cur.options.length) chooseOption(i);
    }
    if (!typing && phase === "answer" && cur.kind === "order" && e.key === "Backspace" && picked.length) {
      picked.pop();
      drawOrder();
    }
  });

  drawQuestion();
}
