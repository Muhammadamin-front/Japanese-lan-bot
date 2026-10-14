import { one, all, run, now, tx, saveSettings, getSettings, seedLesson, defaultLesson, SETTINGS_SPEC } from "../db.js";
import { hashPassword } from "../auth.js";
import { lessonStates } from "../progress.js";
import { fail } from "../http.js";
import { cleanName, cleanUsername, cleanPassword, toInt, text } from "../validate.js";

const WEEK = 7 * 86_400_000;
const idOf = (v) => toInt(v, { min: 1, name: "ID" });
const lessonNo = (v) => toInt(v, { min: 1, max: 50, name: "Dars raqami" });

function getUser(id) {
  const u = one("SELECT id, username, name, role, created_at, last_seen FROM users WHERE id = ?", id);
  if (!u) fail(404, "Foydalanuvchi topilmadi");
  return u;
}

function requireLesson(n) {
  if (!one("SELECT 1 FROM lessons WHERE n = ?", n)) fail(404, "Dars topilmadi");
}

function nextPos(table, n) {
  return one(`SELECT COALESCE(MAX(pos), -1) + 1 AS p FROM ${table} WHERE lesson = ?`, n).p;
}

function vocabInput(body) {
  return {
    kana: text(body.kana, { max: 80, required: true, name: "Kana" }),
    kanji: text(body.kanji, { max: 80, name: "Kanji" }),
    meaning: text(body.meaning, { max: 200, required: true, name: "Ma'nosi" }),
  };
}

function grammarInput(body) {
  const examples = Array.isArray(body.examples) ? body.examples : [];
  if (examples.length > 30) fail(400, "Misollar juda ko'p");
  return {
    title: text(body.title, { max: 200, required: true, name: "Sarlavha" }),
    pattern: text(body.pattern, { max: 200, name: "Qolip" }),
    explanation: text(body.explanation, { max: 8000, name: "Izoh" }),
    examples: JSON.stringify(
      examples
        .map((e) => ({ jp: text(e?.jp, { max: 300, name: "Misol" }), uz: text(e?.uz, { max: 300, name: "Tarjima" }) }))
        .filter((e) => e.jp),
    ),
  };
}

function quizInput(body) {
  const options = [...new Set((Array.isArray(body.options) ? body.options : []).map((o) => String(o ?? "").trim()))]
    .filter(Boolean)
    .slice(0, 6);
  if (options.length < 2) fail(400, "Kamida 2 ta har xil variant kerak (birinchisi — to'g'ri javob)");
  return {
    prompt: text(body.prompt, { max: 400, required: true, name: "Savol" }),
    options: JSON.stringify(options),
    explanation: text(body.explanation, { max: 1000, name: "Izoh" }),
  };
}

function kanjiInput(body) {
  const examples = Array.isArray(body.examples) ? body.examples : [];
  if (examples.length > 12) fail(400, "Misollar juda ko'p");
  const char = text(body.char, { max: 2, required: true, name: "Kanji" });
  if ([...char].length !== 1) fail(400, "Bitta kanji kiriting");
  return {
    char,
    onyomi: text(body.onyomi, { max: 60, name: "On o'qilishi" }),
    kunyomi: text(body.kunyomi, { max: 80, name: "Kun o'qilishi" }),
    meaning: text(body.meaning, { max: 120, required: true, name: "Ma'nosi" }),
    strokes: toInt(body.strokes || 0, { min: 0, max: 40, name: "Chiziqlar soni" }),
    examples: JSON.stringify(
      examples
        .map((e) => ({
          w: text(e?.w, { max: 40, name: "So'z" }),
          r: text(e?.r, { max: 60, name: "O'qilishi" }),
          m: text(e?.m, { max: 120, name: "Ma'nosi" }),
        }))
        .filter((e) => e.w && e.r),
    ),
  };
}

function setProgress(userId, n, fields) {
  run("INSERT INTO progress (user_id, lesson) VALUES (?, ?) ON CONFLICT DO NOTHING", userId, n);
  const keys = Object.keys(fields);
  run(
    `UPDATE progress SET ${keys.map((k) => `${k} = ?`).join(", ")} WHERE user_id = ? AND lesson = ?`,
    ...keys.map((k) => fields[k]),
    userId,
    n,
  );
}

export default function adminRoutes(r) {
  /* ---------- O'quvchilar ---------- */

  r.get("/api/admin/overview", "admin", () => {
    const since = now() - WEEK;
    const users = all(
      `SELECT u.id, u.username, u.name, u.role, u.created_at, u.last_seen,
        (SELECT COUNT(*) FROM progress p WHERE p.user_id = u.id AND p.passed = 1) AS passed,
        (SELECT MAX(lesson) FROM progress p WHERE p.user_id = u.id AND p.passed = 1) AS last_passed,
        (SELECT passed FROM kana_progress k WHERE k.user_id = u.id AND k.script = 'hiragana') AS hira,
        (SELECT passed FROM kana_progress k WHERE k.user_id = u.id AND k.script = 'katakana') AS kata,
        (SELECT ROUND(AVG(percent)) FROM attempts a WHERE a.user_id = u.id AND a.mode = 'check' AND a.type = 'lesson') AS avg_check,
        (SELECT COUNT(*) FROM attempts a WHERE a.user_id = u.id AND a.created_at > ?) AS week_attempts,
        (SELECT COUNT(*) FROM mistakes m WHERE m.user_id = u.id AND m.streak < 2)
          + (SELECT COUNT(*) FROM kanji_mistakes m WHERE m.user_id = u.id AND m.streak < 2) AS weak
       FROM users u
       ORDER BY u.name COLLATE NOCASE`,
      since,
    );
    const activity = all(
      `SELECT a.id, a.type, a.target, a.mode, a.score, a.total, a.percent, a.passed, a.created_at, u.id AS user_id, u.name
         FROM attempts a JOIN users u ON u.id = a.user_id
        ORDER BY a.id DESC LIMIT 30`,
    );
    return { users, activity };
  });

  r.post("/api/admin/users", "admin", ({ body }) => {
    const name = cleanName(body.name);
    const username = cleanUsername(body.username);
    const password = cleanPassword(body.password);
    const role = body.role === "admin" ? "admin" : "student";
    if (one("SELECT 1 FROM users WHERE username = ?", username)) fail(409, "Bu login allaqachon band");
    const { lastInsertRowid } = run(
      "INSERT INTO users (username, name, password_hash, role, created_at) VALUES (?, ?, ?, ?, ?)",
      username, name, hashPassword(password), role, now(),
    );
    return { id: Number(lastInsertRowid) };
  });

  r.get("/api/admin/users/:id", "admin", ({ params }) => {
    const user = getUser(idOf(params.id));
    const st = lessonStates(user);
    const attempts = all(
      `SELECT id, type, target, mode, score, total, percent, passed, created_at
         FROM attempts WHERE user_id = ? ORDER BY id DESC LIMIT 100`,
      user.id,
    );
    const weak = all(
      `SELECT v.id, v.lesson, v.kana, v.kanji, v.meaning, m.wrong_count, m.right_count, m.streak
         FROM mistakes m JOIN vocab v ON v.id = m.vocab_id
        WHERE m.user_id = ? AND m.streak < 2
        ORDER BY m.wrong_count DESC LIMIT 50`,
      user.id,
    );
    const weakKanji = all(
      `SELECT k.id, k.lesson, k.char, k.meaning, m.wrong_count
         FROM kanji_mistakes m JOIN kanji k ON k.id = m.kanji_id
        WHERE m.user_id = ? AND m.streak < 2
        ORDER BY m.wrong_count DESC LIMIT 30`,
      user.id,
    );
    return { user, kana: st.kana, kanaOk: st.kanaOk, lessons: st.lessons, attempts, weak, weakKanji, settings: st.settings };
  });

  r.patch("/api/admin/users/:id", "admin", ({ params, body, user: me }) => {
    const u = getUser(idOf(params.id));
    tx(() => {
      if ("name" in body) run("UPDATE users SET name = ? WHERE id = ?", cleanName(body.name), u.id);
      if (body.password) {
        run("UPDATE users SET password_hash = ? WHERE id = ?", hashPassword(cleanPassword(body.password)), u.id);
        if (u.id !== me.id) run("DELETE FROM sessions WHERE user_id = ?", u.id);
      }
      if ("role" in body) {
        const role = body.role === "admin" ? "admin" : "student";
        if (u.role === "admin" && role !== "admin" && u.id === me.id) fail(400, "O'zingizni ustozlikdan chiqara olmaysiz");
        run("UPDATE users SET role = ? WHERE id = ?", role, u.id);
      }
    });
    return { ok: true };
  });

  r.delete("/api/admin/users/:id", "admin", ({ params, user: me }) => {
    const u = getUser(idOf(params.id));
    if (u.id === me.id) fail(400, "O'zingizni o'chira olmaysiz");
    run("DELETE FROM users WHERE id = ?", u.id);
    return { ok: true };
  });

  r.post("/api/admin/users/:id/reset", "admin", ({ params }) => {
    const u = getUser(idOf(params.id));
    tx(() => {
      for (const t of ["progress", "kana_progress", "attempts", "mistakes", "kanji_mistakes", "test_sessions"]) {
        run(`DELETE FROM ${t} WHERE user_id = ?`, u.id);
      }
    });
    return { ok: true };
  });

  r.post("/api/admin/users/:id/kana", "admin", ({ params, body }) => {
    const u = getUser(idOf(params.id));
    const passed = body.passed ? 1 : 0;
    tx(() => {
      for (const script of ["hiragana", "katakana"]) {
        run("INSERT INTO kana_progress (user_id, script) VALUES (?, ?) ON CONFLICT DO NOTHING", u.id, script);
        run(
          "UPDATE kana_progress SET passed = ?, passed_at = ? WHERE user_id = ? AND script = ?",
          passed, passed ? now() : null, u.id, script,
        );
      }
    });
    return { ok: true };
  });

  r.post("/api/admin/users/:id/lessons", "admin", ({ params, body }) => {
    const u = getUser(idOf(params.id));
    const n = lessonNo(body.lesson);
    tx(() => {
      switch (body.action) {
        case "unlock-upto":
          for (let i = 1; i <= n; i++) setProgress(u.id, i, { unlocked: 1 });
          break;
        case "unlock":
          setProgress(u.id, n, { unlocked: 1 });
          break;
        case "lock":
          setProgress(u.id, n, { unlocked: 0 });
          break;
        case "pass":
          setProgress(u.id, n, { unlocked: 1, passed: 1, passed_at: now() });
          break;
        case "unpass":
          setProgress(u.id, n, { passed: 0, passed_at: null });
          break;
        default:
          fail(400, "Noma'lum amal");
      }
    });
    return { ok: true };
  });

  /* ---------- Kontent ---------- */

  r.get("/api/admin/lessons", "admin", () => ({
    lessons: all(
      `SELECT l.n, l.title,
        (SELECT COUNT(*) FROM vocab v WHERE v.lesson = l.n) AS vocab,
        (SELECT COUNT(*) FROM grammar g WHERE g.lesson = l.n) AS grammar,
        (SELECT COUNT(*) FROM quiz q WHERE q.lesson = l.n) AS quiz,
        (SELECT COUNT(*) FROM kanji k WHERE k.lesson = l.n) AS kanji,
        (SELECT COUNT(*) FROM progress p WHERE p.lesson = l.n AND p.passed = 1) AS passed_by
       FROM lessons l ORDER BY l.n`,
    ),
  }));

  r.get("/api/admin/lessons/:n", "admin", ({ params }) => {
    const n = lessonNo(params.n);
    const lesson = one("SELECT n, title, intro FROM lessons WHERE n = ?", n);
    if (!lesson) fail(404, "Dars topilmadi");
    return {
      lesson,
      vocab: all("SELECT id, kana, kanji, meaning FROM vocab WHERE lesson = ? ORDER BY pos, id", n),
      grammar: all("SELECT id, title, pattern, explanation, examples FROM grammar WHERE lesson = ? ORDER BY pos, id", n).map(
        (g) => ({ ...g, examples: JSON.parse(g.examples) }),
      ),
      quiz: all("SELECT id, prompt, options, explanation FROM quiz WHERE lesson = ? ORDER BY pos, id", n).map((q) => ({
        ...q,
        options: JSON.parse(q.options),
      })),
      kanji: all(
        "SELECT id, char, onyomi, kunyomi, meaning, strokes, examples FROM kanji WHERE lesson = ? ORDER BY pos, id",
        n,
      ).map((k) => ({ ...k, examples: JSON.parse(k.examples) })),
      hasDefault: !!defaultLesson(n),
    };
  });

  r.put("/api/admin/lessons/:n", "admin", ({ params, body }) => {
    const n = lessonNo(params.n);
    requireLesson(n);
    run(
      "UPDATE lessons SET title = ?, intro = ? WHERE n = ?",
      text(body.title, { max: 120, required: true, name: "Mavzu" }),
      text(body.intro, { max: 1000, name: "Kirish matni" }),
      n,
    );
    return { ok: true };
  });

  r.post("/api/admin/lessons/:n/restore", "admin", ({ params }) => {
    const lesson = defaultLesson(lessonNo(params.n));
    if (!lesson) fail(404, "Bu dars uchun asl kontent yo'q");
    seedLesson(lesson);
    return { ok: true };
  });

  r.post("/api/admin/lessons/:n/vocab", "admin", ({ params, body }) => {
    const n = lessonNo(params.n);
    requireLesson(n);
    const v = vocabInput(body);
    const { lastInsertRowid } = run(
      "INSERT INTO vocab (lesson, pos, kana, kanji, meaning) VALUES (?, ?, ?, ?, ?)",
      n, nextPos("vocab", n), v.kana, v.kanji, v.meaning,
    );
    return { id: Number(lastInsertRowid) };
  });

  r.put("/api/admin/vocab/:id", "admin", ({ params, body }) => {
    const v = vocabInput(body);
    const { changes } = run("UPDATE vocab SET kana = ?, kanji = ?, meaning = ? WHERE id = ?", v.kana, v.kanji, v.meaning, idOf(params.id));
    if (!changes) fail(404, "So'z topilmadi");
    return { ok: true };
  });

  r.delete("/api/admin/vocab/:id", "admin", ({ params }) => {
    run("DELETE FROM vocab WHERE id = ?", idOf(params.id));
    return { ok: true };
  });

  r.post("/api/admin/lessons/:n/grammar", "admin", ({ params, body }) => {
    const n = lessonNo(params.n);
    requireLesson(n);
    const g = grammarInput(body);
    const { lastInsertRowid } = run(
      "INSERT INTO grammar (lesson, pos, title, pattern, explanation, examples) VALUES (?, ?, ?, ?, ?, ?)",
      n, nextPos("grammar", n), g.title, g.pattern, g.explanation, g.examples,
    );
    return { id: Number(lastInsertRowid) };
  });

  r.put("/api/admin/grammar/:id", "admin", ({ params, body }) => {
    const g = grammarInput(body);
    const { changes } = run(
      "UPDATE grammar SET title = ?, pattern = ?, explanation = ?, examples = ? WHERE id = ?",
      g.title, g.pattern, g.explanation, g.examples, idOf(params.id),
    );
    if (!changes) fail(404, "Grammatika topilmadi");
    return { ok: true };
  });

  r.delete("/api/admin/grammar/:id", "admin", ({ params }) => {
    run("DELETE FROM grammar WHERE id = ?", idOf(params.id));
    return { ok: true };
  });

  r.post("/api/admin/lessons/:n/quiz", "admin", ({ params, body }) => {
    const n = lessonNo(params.n);
    requireLesson(n);
    const q = quizInput(body);
    const { lastInsertRowid } = run(
      "INSERT INTO quiz (lesson, pos, prompt, options, explanation) VALUES (?, ?, ?, ?, ?)",
      n, nextPos("quiz", n), q.prompt, q.options, q.explanation,
    );
    return { id: Number(lastInsertRowid) };
  });

  r.put("/api/admin/quiz/:id", "admin", ({ params, body }) => {
    const q = quizInput(body);
    const { changes } = run(
      "UPDATE quiz SET prompt = ?, options = ?, explanation = ? WHERE id = ?",
      q.prompt, q.options, q.explanation, idOf(params.id),
    );
    if (!changes) fail(404, "Savol topilmadi");
    return { ok: true };
  });

  r.delete("/api/admin/quiz/:id", "admin", ({ params }) => {
    run("DELETE FROM quiz WHERE id = ?", idOf(params.id));
    return { ok: true };
  });

  r.post("/api/admin/lessons/:n/kanji", "admin", ({ params, body }) => {
    const n = lessonNo(params.n);
    requireLesson(n);
    const k = kanjiInput(body);
    const { lastInsertRowid } = run(
      "INSERT INTO kanji (lesson, pos, char, onyomi, kunyomi, meaning, strokes, examples) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      n, nextPos("kanji", n), k.char, k.onyomi, k.kunyomi, k.meaning, k.strokes, k.examples,
    );
    return { id: Number(lastInsertRowid) };
  });

  r.put("/api/admin/kanji/:id", "admin", ({ params, body }) => {
    const k = kanjiInput(body);
    const { changes } = run(
      "UPDATE kanji SET char = ?, onyomi = ?, kunyomi = ?, meaning = ?, strokes = ?, examples = ? WHERE id = ?",
      k.char, k.onyomi, k.kunyomi, k.meaning, k.strokes, k.examples, idOf(params.id),
    );
    if (!changes) fail(404, "Kanji topilmadi");
    return { ok: true };
  });

  r.delete("/api/admin/kanji/:id", "admin", ({ params }) => {
    run("DELETE FROM kanji WHERE id = ?", idOf(params.id));
    return { ok: true };
  });

  /* ---------- Sozlamalar ---------- */

  r.get("/api/admin/settings", "admin", () => ({ settings: getSettings(), spec: SETTINGS_SPEC }));
  r.put("/api/admin/settings", "admin", ({ body }) => ({ settings: saveSettings(body) }));
}
