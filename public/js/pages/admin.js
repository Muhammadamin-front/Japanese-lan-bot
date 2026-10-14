// Ustoz paneli: o'quvchilar, o'quvchi tafsilotlari, dars kontenti muharriri, sozlamalar.
import { api } from "../api.js";
import { html, raw, mount, icon, toast, confirmBox, formModal, fmtDate, timeAgo, initials, scoreClass, speakBtn } from "../dom.js";
import { go, refresh, state } from "../app.js";

const SUBNAV = [
  { id: "students", href: "#/admin", label: "O'quvchilar" },
  { id: "lessons", href: "#/admin/lessons", label: "Darslar kontenti" },
  { id: "settings", href: "#/admin/settings", label: "Sozlamalar" },
];

function adminHeader(active) {
  return html`<div class="admin-head">
    <p class="eyebrow">先生 · Ustoz paneli</p>
    <nav class="subnav">
      ${SUBNAV.map((s) => html`<a href="${s.href}" class="${s.id === active ? "active" : ""}">${s.label}</a>`)}
    </nav>
  </div>`;
}

const tile = (label, value, hint = "") =>
  html`<div class="stat-tile"><span class="st-value">${value}</span><span class="st-label">${label}</span>${hint ? html`<small>${hint}</small>` : ""}</div>`;

function attemptLabel(a) {
  if (a.type === "kana") return `${a.target === "hiragana" ? "Hiragana" : "Katakana"} ${a.mode === "check" ? "testi" : "mashqi"}`;
  if (a.type === "lesson") return `${a.target}-dars ${a.mode === "check" ? "tekshiruvi" : "mashqi"}`;
  return "Xatolar ustida ishlash";
}

function attemptResult(a, passPercent = 70) {
  return html`<span class="score ${scoreClass(a.percent, a.mode === "check" ? passPercent : 80)}">${a.percent}%</span>
    <span class="muted small">${a.score}/${a.total}</span>
    ${a.mode === "check" ? (a.passed ? html`<span class="badge badge-ok">O'tdi</span>` : html`<span class="badge">O'tmadi</span>`) : ""}`;
}

const kanaMark = (v, label) => html`<span class="kana-mark ${v ? "ok" : ""}" title="${label}: ${v ? "o'tilgan" : "o'tilmagan"}">${label[0]}</span>`;

async function addUser() {
  const res = await formModal({
    title: "Yangi foydalanuvchi",
    intro: "O'quvchi shu login va parol bilan tizimga kiradi. Parolni unga o'zingiz yetkazing.",
    submitText: "Qo'shish",
    fields: [
      { name: "name", label: "Ism va familiya", autofocus: true },
      { name: "username", label: "Login", help: "Lotin harflari, raqamlar, _ . -" },
      { name: "password", label: "Parol", help: "Kamida 6 belgi" },
      {
        name: "role",
        label: "Roli",
        type: "select",
        value: "student",
        options: [
          { value: "student", label: "O'quvchi" },
          { value: "admin", label: "Ustoz (admin)" },
        ],
      },
    ],
    onSubmit: (v) => api.post("/api/admin/users", v),
  });
  if (res) {
    toast("Foydalanuvchi qo'shildi", "ok");
    go(`/admin/student/${res.id}`);
  }
}

/* ================= O'quvchilar ro'yxati ================= */

export async function adminStudentsPage(el) {
  const d = await api.get("/api/admin/overview");
  const students = d.users.filter((u) => u.role === "student");
  const teachers = d.users.filter((u) => u.role === "admin");
  const weekAgo = Date.now() - 7 * 86_400_000;
  const active = students.filter((s) => s.last_seen > weekAgo).length;
  const kanaDone = students.filter((s) => s.hira && s.kata).length;
  const avgPassed = students.length ? (students.reduce((a, s) => a + s.passed, 0) / students.length).toFixed(1) : "0";

  const rows = (list) =>
    list.length
      ? list.map(
          (s) => html`<tr class="clickable" data-href="#/admin/student/${s.id}">
            <td><div class="person"><span class="avatar sm">${initials(s.name)}</span><div><b>${s.name}</b><small class="muted">@${s.username}</small></div></div></td>
            <td>${kanaMark(s.hira, "Hiragana")}${kanaMark(s.kata, "Katakana")}</td>
            <td><div class="mini-progress"><div class="bar"><span style="width:${(s.passed / 50) * 100}%"></span></div><span>${s.passed}/50</span></div></td>
            <td>${s.hira && s.kata ? `${Math.min(50, (s.last_passed ?? 0) + 1)}-dars` : html`<span class="muted">Kana</span>`}</td>
            <td class="num">${s.avg_check !== null ? html`<span class="score ${scoreClass(s.avg_check)}">${s.avg_check}%</span>` : html`<span class="muted">—</span>`}</td>
            <td class="num">${s.weak || html`<span class="muted">0</span>`}</td>
            <td><span class="${s.last_seen > weekAgo ? "" : "muted"}">${timeAgo(s.last_seen)}</span></td>
          </tr>`,
        )
      : html`<tr><td colspan="7" class="muted">Hech kim topilmadi</td></tr>`;

  mount(
    el,
    html`${adminHeader("students")}
      <div class="stat-tiles">
        ${tile("O'quvchilar", students.length)}
        ${tile("So'nggi 7 kunda faol", active)}
        ${tile("Kana testlaridan o'tgan", kanaDone)}
        ${tile("O'rtacha o'tilgan dars", avgPassed)}
      </div>

      <section class="card">
        <div class="toolbar">
          <input type="search" class="search" placeholder="Ism yoki login bo'yicha qidirish" data-search aria-label="Qidirish">
          <button type="button" class="btn btn-primary" data-act="add">${icon("plus")} Foydalanuvchi qo'shish</button>
        </div>
        ${students.length
          ? ""
          : html`<div class="note">Hali o'quvchilar yo'q. O'quvchilar kirish sahifasidagi «Ro'yxatdan o'ting» havolasi orqali o'zlari
              hisob ochishlari yoki siz «Foydalanuvchi qo'shish» tugmasi bilan qo'shishingiz mumkin. Bir Wi-Fi tarmog'idagi o'quvchilar
              server terminalda ko'rsatgan manzil orqali kiradi.</div>`}
        <div class="table-wrap" ${students.length ? "" : raw("hidden")}>
          <table class="table table-hover">
            <thead><tr>
              <th>O'quvchi</th><th>Kana</th><th>O'tilgan darslar</th><th>Joriy</th>
              <th class="num">O'rtacha tekshiruv</th><th class="num">Zaif so'zlar</th><th>Oxirgi faollik</th>
            </tr></thead>
            <tbody data-rows>${rows(students)}</tbody>
          </table>
        </div>
        ${teachers.length
          ? html`<p class="muted small teachers">Ustozlar: ${teachers.map(
              (t, i) => html`${i ? ", " : ""}<a href="#/admin/student/${t.id}">${t.name}</a> (@${t.username})`,
            )}</p>`
          : ""}
      </section>

      <section class="card">
        <h3>So'nggi faollik</h3>
        ${d.activity.length
          ? html`<div class="activity">
              ${d.activity.map(
                (a) => html`<a class="activity-row" href="#/admin/student/${a.user_id}">
                  <span class="avatar sm">${initials(a.name)}</span>
                  <span class="act-text"><b>${a.name}</b> — ${attemptLabel(a)}</span>
                  <span class="act-score">${attemptResult(a)}</span>
                  <span class="muted small">${timeAgo(a.created_at)}</span>
                </a>`,
              )}
            </div>`
          : html`<p class="muted">Hali hech kim test topshirmagan.</p>`}
      </section>`,
  );

  const tbody = el.querySelector("[data-rows]");
  el.querySelector("[data-search]").addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    mount(tbody, rows(students.filter((s) => !q || s.name.toLowerCase().includes(q) || s.username.includes(q))));
  });
  el.addEventListener("click", (e) => {
    if (e.target.closest("[data-act=add]")) return addUser();
    const row = e.target.closest("tr[data-href]");
    if (row) location.hash = row.dataset.href;
  });
}

/* ================= O'quvchi tafsilotlari ================= */

const selectedLesson = new Map();

function lessonStateText(l) {
  if (l.passed) return `O'tilgan · eng yaxshi natija ${l.best}%`;
  if (l.unlocked) return l.manual ? "Ochiq (ustoz qo'lda ochgan)" : l.attempts ? `Ochiq · ${l.attempts} ta urinish, eng yaxshi ${l.best}%` : "Ochiq";
  return "Yopiq";
}

export async function adminStudentPage(el, [idStr]) {
  const id = Number(idStr);
  const d = await api.get(`/api/admin/users/${id}`);
  const u = d.user;
  const isSelf = u.id === state.user.id;
  const passed = d.lessons.filter((l) => l.passed).length;
  const checks = d.attempts.filter((a) => a.mode === "check" && a.type === "lesson");
  const avg = checks.length ? Math.round(checks.reduce((s, a) => s + a.percent, 0) / checks.length) : null;
  const sel = selectedLesson.get(id) ?? d.lessons.find((l) => l.unlocked && !l.passed)?.n ?? 1;
  const L = d.lessons.find((l) => l.n === sel) ?? d.lessons[0];
  const touched = d.lessons.filter((l) => l.passed || l.attempts || l.vocabSeen || l.grammarSeen || l.kanjiSeen || l.manual);
  const kanaBoth = d.kana.hiragana.passed && d.kana.katakana.passed;

  mount(
    el,
    html`${adminHeader("students")}
      <nav class="crumbs"><a href="#/admin">O'quvchilar</a><span>/</span>${u.name}</nav>

      <header class="card profile-head">
        <span class="avatar lg">${initials(u.name)}</span>
        <div class="profile-info">
          <h1>${u.name} ${u.role === "admin" ? html`<span class="badge badge-accent">Ustoz</span>` : ""}</h1>
          <p class="muted">@${u.username} · Ro'yxatdan o'tgan: ${fmtDate(u.created_at, false)} · Oxirgi faollik: ${timeAgo(u.last_seen)}</p>
        </div>
        <div class="profile-actions">
          <button type="button" class="btn" data-act="edit">${icon("edit")} Tahrirlash</button>
          <button type="button" class="btn" data-act="password">Parolni tiklash</button>
          <button type="button" class="btn" data-act="reset">${icon("refresh")} Progressni tozalash</button>
          ${isSelf ? "" : html`<button type="button" class="btn btn-danger" data-act="delete">${icon("trash")} O'chirish</button>`}
        </div>
      </header>

      <div class="stat-tiles">
        ${tile("O'tilgan darslar", `${passed} / ${d.lessons.length}`)}
        ${tile("O'rtacha tekshiruv natijasi", avg === null ? "—" : `${avg}%`)}
        ${tile("Jami urinishlar", d.attempts.length, d.attempts.length >= 100 ? "so'nggi 100 tasi" : "")}
        ${tile("Zaif so'z va kanjilar", d.weak.length + d.weakKanji.length)}
      </div>

      <div class="grid-2">
        <section class="card">
          <h3>Kana testlari</h3>
          ${["hiragana", "katakana"].map((s) => {
            const k = d.kana[s];
            return html`<div class="kana-status">
              <span class="jp big">${s === "hiragana" ? "あ" : "ア"}</span>
              <div><b>${s === "hiragana" ? "Hiragana" : "Katakana"}</b>
                <small class="muted">${k.attempts ? `${k.attempts} ta urinish · eng yaxshi ${k.best}%` : "Topshirilmagan"}</small></div>
              ${k.passed ? html`<span class="badge badge-ok">${icon("check")} O'tgan</span>` : html`<span class="badge">O'tmagan</span>`}
            </div>`;
          })}
          <p class="muted small">Agar o'quvchi kanani allaqachon bilsa, testni o'tkazib yuborishga ruxsat bering.</p>
          <button type="button" class="btn" data-act="${kanaBoth ? "kana-unpass" : "kana-pass"}">
            ${kanaBoth ? "Kana belgisini bekor qilish" : "Kanani o'tgan deb belgilash"}</button>
        </section>

        <section class="card">
          <h3>Darslarni boshqarish</h3>
          <div class="mini-grid" role="group" aria-label="Darslar">
            ${d.lessons.map(
              (l) => html`<button type="button" data-lesson="${l.n}" title="${l.n}-dars: ${l.title}"
                class="mini ${l.passed ? "is-passed" : l.unlocked ? "is-open" : ""} ${l.n === sel ? "is-sel" : ""}">${l.n}</button>`,
            )}
          </div>
          <div class="legend small muted"><span class="lg-dot passed"></span> o'tilgan <span class="lg-dot open"></span> ochiq <span class="lg-dot"></span> yopiq</div>
          <div class="lesson-control">
            <div><b>${L.n}-dars. ${L.title}</b><small class="muted">${lessonStateText(L)}</small></div>
            <div class="btn-row">
              ${L.manual
                ? html`<button type="button" class="btn btn-sm" data-lesson-act="lock">${icon("lock")} Qo'lda ochishni bekor qilish</button>`
                : L.unlocked
                  ? ""
                  : html`<button type="button" class="btn btn-sm" data-lesson-act="unlock">Ochish</button>`}
              ${L.passed
                ? html`<button type="button" class="btn btn-sm" data-lesson-act="unpass">O'tmagan deb belgilash</button>`
                : html`<button type="button" class="btn btn-sm" data-lesson-act="pass">${icon("check")} O'tgan deb belgilash</button>`}
              ${L.n > 1 ? html`<button type="button" class="btn btn-sm" data-lesson-act="unlock-upto">1–${L.n}-darslarni ochish</button>` : ""}
            </div>
          </div>
        </section>
      </div>

      <section class="card">
        <h3>Darslar bo'yicha progress</h3>
        ${touched.length
          ? html`<div class="table-wrap"><table class="table">
              <thead><tr><th>Dars</th><th>So'zlar</th><th>Grammatika</th><th>Kanji</th><th class="num">Tekshiruvlar</th><th class="num">Eng yaxshi</th><th>Holat</th></tr></thead>
              <tbody>${touched.map(
                (l) => html`<tr>
                  <td><b>${l.n}.</b> ${l.title}</td>
                  <td>${l.vocabSeen ? icon("check", "ok") : html`<span class="muted">—</span>`}</td>
                  <td>${l.grammarSeen ? icon("check", "ok") : html`<span class="muted">—</span>`}</td>
                  <td>${l.kanjiSeen ? icon("check", "ok") : html`<span class="muted">—</span>`}</td>
                  <td class="num">${l.attempts}</td>
                  <td class="num">${l.attempts || l.passed ? html`<span class="score ${scoreClass(l.best, d.settings.pass_percent)}">${l.best}%</span>` : "—"}</td>
                  <td>${l.passed ? html`<span class="badge badge-ok">O'tgan${l.passedAt ? ` · ${fmtDate(l.passedAt, false)}` : ""}</span>` : l.unlocked ? html`<span class="badge">Jarayonda</span>` : html`<span class="badge">Yopiq</span>`}</td>
                </tr>`,
              )}</tbody>
            </table></div>`
          : html`<p class="muted">Hali birorta darsni boshlamagan.</p>`}
      </section>

      <div class="grid-2 align-start">
        <section class="card">
          <h3>Urinishlar tarixi</h3>
          ${d.attempts.length
            ? html`<div class="activity">${d.attempts.map(
                (a) => html`<div class="activity-row">
                  <span class="act-text">${attemptLabel(a)}</span>
                  <span class="act-score">${attemptResult(a, d.settings.pass_percent)}</span>
                  <span class="muted small">${fmtDate(a.created_at)}</span>
                </div>`,
              )}</div>`
            : html`<p class="muted">Urinishlar yo'q.</p>`}
        </section>
        <section class="card">
          <h3>Zaif so'zlar</h3>
          ${d.weak.length
            ? html`<div class="table-wrap"><table class="table compact">
                <thead><tr><th>So'z</th><th>Ma'nosi</th><th class="num">Dars</th><th class="num">Xato</th></tr></thead>
                <tbody>${d.weak.map(
                  (w) => html`<tr><td><span class="jp">${w.kana}</span>${w.kanji ? html` <span class="muted jp">${w.kanji}</span>` : ""}</td>
                    <td>${w.meaning}</td><td class="num">${w.lesson}</td><td class="num"><span class="score low">${w.wrong_count}</span></td></tr>`,
                )}</tbody>
              </table></div>`
            : html`<p class="muted">Zaif so'zlar yo'q.</p>`}
          ${d.weakKanji.length
            ? html`<h3 class="mt">Zaif kanjilar</h3>
                <div class="kanji-tiles">
                  ${d.weakKanji.map(
                    (k) => html`<span class="kanji-tile" title="${k.lesson}-dars"><span class="kt-char">${k.char}</span>
                      <span class="kt-meaning">${k.meaning}</span><span class="kt-count">${k.wrong_count} xato</span></span>`,
                  )}
                </div>`
            : ""}
        </section>
      </div>`,
  );

  const lessonAction = async (action) => {
    await api.post(`/api/admin/users/${id}/lessons`, { lesson: sel, action });
    toast("Saqlandi", "ok");
    refresh();
  };

  el.addEventListener("click", async (e) => {
    const lessonBtn = e.target.closest("[data-lesson]");
    if (lessonBtn) {
      selectedLesson.set(id, Number(lessonBtn.dataset.lesson));
      return refresh();
    }
    const la = e.target.closest("[data-lesson-act]");
    if (la) return lessonAction(la.dataset.lessonAct).catch((err) => toast(err.message, "error"));
    const act = e.target.closest("[data-act]")?.dataset.act;
    try {
      if (act === "edit") {
        const ok = await formModal({
          title: "Foydalanuvchini tahrirlash",
          fields: [
            { name: "name", label: "Ism va familiya", value: u.name },
            {
              name: "role",
              label: "Roli",
              type: "select",
              value: u.role,
              options: [
                { value: "student", label: "O'quvchi" },
                { value: "admin", label: "Ustoz (admin)" },
              ],
            },
          ],
          onSubmit: (v) => api.patch(`/api/admin/users/${id}`, v),
        });
        if (ok) (toast("Saqlandi", "ok"), refresh());
      } else if (act === "password") {
        const ok = await formModal({
          title: "Parolni tiklash",
          intro: `${u.name} uchun yangi parol o'rnating. Uning barcha qurilmalardagi seanslari yopiladi.`,
          submitText: "O'rnatish",
          fields: [{ name: "password", label: "Yangi parol", autofocus: true, help: "Kamida 6 belgi" }],
          onSubmit: (v) => api.patch(`/api/admin/users/${id}`, { password: v.password }),
        });
        if (ok) toast("Parol yangilandi", "ok");
      } else if (act === "reset") {
        if (!(await confirmBox(`${u.name}ning barcha natijalari, progressi va xatolari o'chiriladi. Davom etasizmi?`, { okText: "Tozalash", danger: true }))) return;
        await api.post(`/api/admin/users/${id}/reset`);
        toast("Progress tozalandi", "ok");
        refresh();
      } else if (act === "delete") {
        if (!(await confirmBox(`${u.name} hisobi butunlay o'chiriladi. Bu amalni qaytarib bo'lmaydi.`, { okText: "O'chirish", danger: true }))) return;
        await api.del(`/api/admin/users/${id}`);
        toast("Foydalanuvchi o'chirildi", "ok");
        go("/admin");
      } else if (act === "kana-pass" || act === "kana-unpass") {
        await api.post(`/api/admin/users/${id}/kana`, { passed: act === "kana-pass" });
        toast("Saqlandi", "ok");
        refresh();
      }
    } catch (err) {
      toast(err.message, "error");
    }
  });
}

/* ================= Darslar kontenti ================= */

export async function adminLessonsPage(el) {
  const d = await api.get("/api/admin/lessons");
  mount(
    el,
    html`${adminHeader("lessons")}
      <section class="card">
        <div class="section-head">
          <div>
            <h3>Darslar kontenti</h3>
            <p class="muted small">So'zlar, grammatika izohlari va savollarni tahrirlang. O'zgarishlar o'quvchilarga darhol ko'rinadi.</p>
          </div>
        </div>
        <div class="table-wrap">
          <table class="table table-hover">
            <thead><tr><th class="num">№</th><th>Mavzu</th><th class="num">So'zlar</th><th class="num">Grammatika</th><th class="num">Kanji</th><th class="num">Savollar</th><th class="num">O'tganlar</th><th></th></tr></thead>
            <tbody>
              ${d.lessons.map(
                (l) => html`<tr class="clickable" data-href="#/admin/lesson/${l.n}">
                  <td class="num"><b>${l.n}</b></td>
                  <td>${l.title}${l.n === 1 || l.n === 26 ? html` <span class="badge">${l.n === 1 ? "1-kitob" : "2-kitob"}</span>` : ""}</td>
                  <td class="num">${l.vocab}</td>
                  <td class="num">${l.grammar}</td>
                  <td class="num">${l.kanji}</td>
                  <td class="num">${l.quiz}</td>
                  <td class="num">${l.passed_by}</td>
                  <td class="num"><span class="link">Tahrirlash ${icon("arrow")}</span></td>
                </tr>`,
              )}
            </tbody>
          </table>
        </div>
      </section>`,
  );
  el.addEventListener("click", (e) => {
    const row = e.target.closest("tr[data-href]");
    if (row) location.hash = row.dataset.href;
  });
}

const parseExamples = (text) =>
  text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const i = line.indexOf("|");
      return i < 0 ? { jp: line, uz: "" } : { jp: line.slice(0, i).trim(), uz: line.slice(i + 1).trim() };
    });

function grammarForm(g, i) {
  return html`<form class="edit-block" data-form="grammar" data-id="${g.id}">
    <div class="edit-block-head"><span class="g-num">${i + 1}</span><b>${g.title}</b></div>
    <div class="form-grid">
      <label class="field">Sarlavha <input name="title" value="${g.title}" required></label>
      <label class="field">Qolip (yaponcha) <input name="pattern" value="${g.pattern}" class="jp"></label>
    </div>
    <label class="field">Izoh
      <textarea name="explanation" rows="9">${g.explanation}</textarea>
      <small class="help">Formatlash: **qalin matn**, "- " bilan boshlangan qator — ro'yxat, "! " bilan boshlangan qator — eslatma bloki. Bo'sh qator — yangi paragraf.</small>
    </label>
    <label class="field">Misollar
      <textarea name="examples" rows="${Math.max(3, g.examples.length + 1)}" class="jp">${g.examples.map((e) => `${e.jp} | ${e.uz}`).join("\n")}</textarea>
      <small class="help">Har qatorda: yaponcha gap | o'zbekcha tarjima. Yaponcha bo'laklar bo'sh joy bilan ajratilsa (3–7 bo'lak), ulardan "gap tuzish" mashqi avtomatik yasaladi.</small>
    </label>
    <div class="edit-actions">
      <button type="submit" class="btn btn-primary">Saqlash</button>
      <button type="button" class="btn btn-danger-ghost" data-del="grammar" data-id="${g.id}">${icon("trash")} O'chirish</button>
    </div>
  </form>`;
}

const parseKanjiExamples = (text) =>
  text
    .split("\n")
    .map((line) => line.split("|").map((x) => x.trim()))
    .filter(([w, r]) => w && r)
    .map(([w, r, m = ""]) => ({ w, r, m }));

function kanjiForm(k, i) {
  return html`<form class="edit-block" data-form="kanji" data-id="${k.id}">
    <div class="edit-block-head"><span class="g-num">${i + 1}</span><span class="kanji-inline">${k.char}</span><b>${k.meaning}</b></div>
    <div class="form-grid form-grid-4">
      <label class="field">Kanji <input name="char" value="${k.char}" class="jp kanji-input" maxlength="2" required></label>
      <label class="field">Chiziqlar soni <input name="strokes" type="number" min="1" max="40" value="${k.strokes}"></label>
      <label class="field">On o'qilishi <input name="onyomi" value="${k.onyomi}" class="jp" placeholder="yo'q"></label>
      <label class="field">Kun o'qilishi <input name="kunyomi" value="${k.kunyomi}" class="jp" placeholder="yo'q"></label>
    </div>
    <label class="field">Ma'nosi (o'zbekcha) <input name="meaning" value="${k.meaning}" required></label>
    <label class="field">Misol so'zlar
      <textarea name="examples" rows="${Math.max(3, k.examples.length + 1)}" class="jp">${k.examples.map((e) => `${e.w} | ${e.r} | ${e.m}`).join("\n")}</textarea>
      <small class="help">Har qatorda: so'z | o'qilishi (kana) | ma'nosi. Masalan: 日本人 | にほんじん | yapon</small>
    </label>
    <div class="edit-actions">
      <button type="submit" class="btn btn-primary">Saqlash</button>
      <button type="button" class="btn btn-danger-ghost" data-del="kanji" data-id="${k.id}">${icon("trash")} O'chirish</button>
    </div>
  </form>`;
}

function quizForm(q, i) {
  return html`<form class="edit-block" data-form="quiz" data-id="${q.id}">
    <div class="edit-block-head"><span class="g-num">${i + 1}</span><span class="jp">${q.prompt}</span></div>
    <label class="field">Savol <input name="prompt" value="${q.prompt}" class="jp" required></label>
    <div class="form-grid">
      <label class="field">Variantlar
        <textarea name="options" rows="4" class="jp">${q.options.join("\n")}</textarea>
        <small class="help">Har biri alohida qatorda. <b>Birinchisi — to'g'ri javob.</b></small>
      </label>
      <label class="field">Izoh (xato javobdan keyin ko'rsatiladi)
        <textarea name="explanation" rows="4">${q.explanation}</textarea>
      </label>
    </div>
    <div class="edit-actions">
      <button type="submit" class="btn btn-primary">Saqlash</button>
      <button type="button" class="btn btn-danger-ghost" data-del="quiz" data-id="${q.id}">${icon("trash")} O'chirish</button>
    </div>
  </form>`;
}

export async function adminLessonPage(el, [nStr]) {
  const n = Number(nStr);
  const d = await api.get(`/api/admin/lessons/${n}`);

  mount(
    el,
    html`${adminHeader("lessons")}
      <nav class="crumbs"><a href="#/admin/lessons">Darslar kontenti</a><span>/</span>${n}-dars</nav>
      <header class="page-head with-actions">
        <div>
          <p class="eyebrow">第${n}課 · Kontent muharriri</p>
          <h1>${n}-dars. ${d.lesson.title}</h1>
        </div>
        <div class="btn-row">
          <a class="btn" href="#/lesson/${n}">O'quvchi ko'rinishi</a>
          ${d.hasDefault ? html`<button type="button" class="btn btn-danger-ghost" data-act="restore">${icon("refresh")} Asl holiga qaytarish</button>` : ""}
        </div>
      </header>

      <section class="card">
        <h3>Umumiy ma'lumot</h3>
        <form class="form" data-form="lesson">
          <label class="field">Mavzu <input name="title" value="${d.lesson.title}" required></label>
          <label class="field">Kirish matni <textarea name="intro" rows="2">${d.lesson.intro}</textarea></label>
          <div class="edit-actions"><button type="submit" class="btn btn-primary">Saqlash</button></div>
        </form>
      </section>

      <section class="card">
        <div class="section-head">
          <h3>So'zlar <span class="badge">${d.vocab.length}</span></h3>
          <p class="muted small">Katakka o'zgartirish kiritib, boshqa joyni bossangiz — avtomatik saqlanadi.</p>
        </div>
        <div class="edit-table">
          <div class="et-head"><span>#</span><span>Kana</span><span>Kanji</span><span>Ma'nosi (o'zbekcha)</span><span></span></div>
          ${d.vocab.map(
            (w, i) => html`<div class="et-row" data-vocab="${w.id}">
              <span class="muted">${i + 1}</span>
              <input name="kana" value="${w.kana}" class="jp" aria-label="Kana">
              <input name="kanji" value="${w.kanji}" class="jp" aria-label="Kanji">
              <input name="meaning" value="${w.meaning}" aria-label="Ma'nosi">
              <span class="et-actions">${speakBtn(w.kana)}<button type="button" class="icon-btn danger" data-del="vocab" data-id="${w.id}" aria-label="O'chirish">${icon("trash")}</button></span>
            </div>`,
          )}
          <form class="et-row et-new" data-form="vocab-new">
            <span>${icon("plus")}</span>
            <input name="kana" placeholder="かな" class="jp" required aria-label="Kana">
            <input name="kanji" placeholder="漢字 (ixtiyoriy)" class="jp" aria-label="Kanji">
            <input name="meaning" placeholder="ma'nosi" required aria-label="Ma'nosi">
            <button type="submit" class="btn btn-primary btn-sm">Qo'shish</button>
          </form>
        </div>
      </section>

      <section class="card">
        <div class="section-head">
          <h3>Grammatika <span class="badge">${d.grammar.length}</span></h3>
          <button type="button" class="btn" data-act="add-grammar">${icon("plus")} Grammatika qo'shish</button>
        </div>
        ${d.grammar.map(grammarForm)}
      </section>

      <section class="card">
        <div class="section-head">
          <div>
            <h3>Kanji <span class="badge">${d.kanji.length}</span></h3>
            <p class="muted small">On o'qilishi katakanada, kun o'qilishi hiraganada; bir nechta o'qilish «・» bilan ajratiladi.</p>
          </div>
          <button type="button" class="btn" data-act="add-kanji">${icon("plus")} Kanji qo'shish</button>
        </div>
        ${d.kanji.map(kanjiForm)}
      </section>

      <section class="card">
        <div class="section-head">
          <div>
            <h3>Grammatika savollari <span class="badge">${d.quiz.length}</span></h3>
            <p class="muted small">O'quvchiga variantlar aralashtirib ko'rsatiladi. Bo'sh joyni （　） bilan belgilang.</p>
          </div>
          <button type="button" class="btn" data-act="add-quiz">${icon("plus")} Savol qo'shish</button>
        </div>
        ${d.quiz.map(quizForm)}
      </section>`,
  );

  const lines = (s) =>
    String(s)
      .split("\n")
      .map((x) => x.trim())
      .filter(Boolean);

  el.addEventListener("change", async (e) => {
    const row = e.target.closest("[data-vocab]");
    if (!row) return;
    const values = Object.fromEntries([...row.querySelectorAll("input")].map((i) => [i.name, i.value]));
    try {
      await api.put(`/api/admin/vocab/${row.dataset.vocab}`, values);
      toast("Saqlandi", "ok");
    } catch (err) {
      toast(err.message, "error");
    }
  });

  el.addEventListener("submit", async (e) => {
    const form = e.target.closest("[data-form]");
    if (!form) return;
    e.preventDefault();
    const v = Object.fromEntries(new FormData(form));
    try {
      switch (form.dataset.form) {
        case "lesson":
          await api.put(`/api/admin/lessons/${n}`, v);
          break;
        case "vocab-new":
          await api.post(`/api/admin/lessons/${n}/vocab`, v);
          break;
        case "grammar":
          await api.put(`/api/admin/grammar/${form.dataset.id}`, { ...v, examples: parseExamples(v.examples) });
          break;
        case "quiz":
          await api.put(`/api/admin/quiz/${form.dataset.id}`, { ...v, options: lines(v.options) });
          break;
        case "kanji":
          await api.put(`/api/admin/kanji/${form.dataset.id}`, { ...v, examples: parseKanjiExamples(v.examples) });
          break;
      }
      toast("Saqlandi", "ok");
      if (!["grammar", "quiz", "kanji"].includes(form.dataset.form)) refresh();
    } catch (err) {
      toast(err.message, "error");
    }
  });

  el.addEventListener("click", async (e) => {
    const del = e.target.closest("[data-del]");
    const act = e.target.closest("[data-act]")?.dataset.act;
    try {
      if (del) {
        const what = { vocab: "so'z", grammar: "grammatika bo'limi", quiz: "savol", kanji: "kanji" }[del.dataset.del];
        if (!(await confirmBox(`Bu ${what} o'chirilsinmi?`, { okText: "O'chirish", danger: true }))) return;
        await api.del(`/api/admin/${del.dataset.del}/${del.dataset.id}`);
        toast("O'chirildi", "ok");
        refresh();
      } else if (act === "restore") {
        const ok = await confirmBox(
          "Darsning barcha so'zlari, grammatikasi va savollari dastlabki holatiga qaytariladi. Siz kiritgan o'zgarishlar va shu dars so'zlari bo'yicha o'quvchilarning xatolar ro'yxati o'chadi.",
          { okText: "Qaytarish", danger: true, title: "Asl holiga qaytarish" },
        );
        if (!ok) return;
        await api.post(`/api/admin/lessons/${n}/restore`);
        toast("Dars asl holiga qaytarildi", "ok");
        refresh();
      } else if (act === "add-grammar") {
        const res = await formModal({
          title: "Yangi grammatika",
          submitText: "Qo'shish",
          fields: [
            { name: "title", label: "Sarlavha", autofocus: true, placeholder: "Masalan: Sifatlarning o'tgan zamoni" },
            { name: "pattern", label: "Qolip", placeholder: "い-adj → ～かったです" },
          ],
          onSubmit: (v) => api.post(`/api/admin/lessons/${n}/grammar`, { ...v, explanation: "", examples: [] }),
        });
        if (res) refresh();
      } else if (act === "add-kanji") {
        const res = await formModal({
          title: "Yangi kanji",
          submitText: "Qo'shish",
          fields: [
            { name: "char", label: "Kanji", autofocus: true, placeholder: "日" },
            { name: "meaning", label: "Ma'nosi (o'zbekcha)", placeholder: "kun; quyosh" },
            { name: "onyomi", label: "On o'qilishi (katakana)", placeholder: "ニチ・ジツ" },
            { name: "kunyomi", label: "Kun o'qilishi (hiragana)", placeholder: "ひ・か" },
            { name: "strokes", label: "Chiziqlar soni", type: "number", placeholder: "4" },
            { name: "examples", label: "Misollar (so'z | o'qilishi | ma'nosi)", type: "textarea", rows: 3, placeholder: "日本 | にほん | Yaponiya" },
          ],
          onSubmit: (v) => api.post(`/api/admin/lessons/${n}/kanji`, { ...v, examples: parseKanjiExamples(v.examples) }),
        });
        if (res) refresh();
      } else if (act === "add-quiz") {
        const res = await formModal({
          title: "Yangi savol",
          submitText: "Qo'shish",
          fields: [
            { name: "prompt", label: "Savol", autofocus: true, placeholder: "わたしは がくせい（　）。" },
            { name: "options", label: "Variantlar (har biri yangi qatorda, birinchisi — to'g'ri)", type: "textarea", rows: 4, placeholder: "です\nでした\nじゃ ありません" },
            { name: "explanation", label: "Izoh", type: "textarea", rows: 2 },
          ],
          onSubmit: (v) => api.post(`/api/admin/lessons/${n}/quiz`, { ...v, options: lines(v.options) }),
        });
        if (res) refresh();
      }
    } catch (err) {
      toast(err.message, "error");
    }
  });
}

/* ================= Sozlamalar ================= */

const SETTING_GROUPS = [
  {
    title: "O'tish ballari",
    items: [
      ["pass_percent", "Dars tekshiruvidan o'tish bali (%)", "Keyingi dars ochilishi uchun kerakli natija."],
      ["kana_pass_percent", "Kana testidan o'tish bali (%)", ""],
      ["kana_questions", "Kana testidagi savollar soni", ""],
      ["kana_include_yoon", "Kana testiga yōon (きゃ, しゅ…) ham kirsin", ""],
    ],
  },
  {
    title: "Dars tekshiruvi tarkibi",
    items: [
      ["check_vocab", "So'z savollari soni", "Shu darsning lug'atidan."],
      ["check_grammar", "Grammatika savollari soni", "Variantli savollar va gap tuzish."],
      ["check_kanji", "Kanji savollari soni", "Shu darsning kanjilaridan (0 — kanji savollarisiz)."],
      ["check_review", "Takrorlash savollari soni", "Oldingi darslar so'zlaridan tasodifiy."],
    ],
  },
  {
    title: "Darslarga kirish tartibi",
    items: [
      ["require_kana", "1-darsdan oldin kana testlari majburiy", ""],
      ["sequential", "Darslar ketma-ket ochilsin", "O'chirilsa, kanadan o'tgan o'quvchiga barcha darslar ochiq bo'ladi."],
    ],
  },
  {
    title: "Ro'yxatdan o'tish",
    items: [
      ["allow_register", "O'quvchilar o'zi ro'yxatdan o'ta olsin", "O'chirilsa, hisoblarni faqat siz yaratasiz."],
      ["register_code", "Taklif kodi", "Bo'sh bo'lsa — kod so'ralmaydi. Kod bo'lsa, faqat kodni bilganlar ro'yxatdan o'ta oladi."],
    ],
  },
];

export async function adminSettingsPage(el) {
  const { settings, spec } = await api.get("/api/admin/settings");

  const input = (key) => {
    const s = spec[key];
    const v = settings[key];
    if (s.type === "bool") return html`<label class="switch"><input type="checkbox" name="${key}" ${v ? "checked" : ""}><span></span></label>`;
    if (s.type === "int") return html`<input type="number" name="${key}" value="${v}" min="${s.min}" max="${s.max}" class="num-input">`;
    return html`<input type="text" name="${key}" value="${v}" maxlength="${s.max}" placeholder="kod yo'q">`;
  };

  mount(
    el,
    html`${adminHeader("settings")}
      <form class="settings" data-settings>
        ${SETTING_GROUPS.map(
          (g) => html`<section class="card">
            <h3>${g.title}</h3>
            ${g.items.map(
              ([key, label, help]) => html`<div class="setting-row">
                <div><b>${label}</b>${help ? html`<small class="muted">${help}</small>` : ""}</div>
                ${input(key)}
              </div>`,
            )}
          </section>`,
        )}
        <div class="sticky-actions"><button type="submit" class="btn btn-primary btn-lg">Sozlamalarni saqlash</button></div>
      </form>`,
  );

  el.querySelector("[data-settings]").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const values = {};
    for (const [key, s] of Object.entries(spec)) {
      const field = form.elements[key];
      if (!field) continue;
      values[key] = s.type === "bool" ? field.checked : s.type === "int" ? Number(field.value) : field.value;
    }
    try {
      await api.put("/api/admin/settings", values);
      toast("Sozlamalar saqlandi", "ok");
      refresh();
    } catch (err) {
      toast(err.message, "error");
    }
  });
}
