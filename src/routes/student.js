import { one, all, run } from "../db.js";
import { publicUser } from "../auth.js";
import { fail } from "../http.js";
import { toInt } from "../validate.js";
import { lessonStates } from "../progress.js";
import { startTest, answerOne, submitTest } from "../quiz.js";

const lessonNo = (v) => toInt(v, { min: 1, max: 50, name: "Dars raqami" });
const KANJI_FIELDS = "id, lesson, char, onyomi, kunyomi, meaning, strokes, examples";
const parseKanji = (k) => ({ ...k, examples: JSON.parse(k.examples) });
const SEEN_COLUMN = { vocab: "vocab_seen", grammar: "grammar_seen", kanji: "kanji_seen" };

export default function studentRoutes(r) {
  r.get("/api/dashboard", "user", ({ user }) => {
    const st = lessonStates(user);
    const words = one(
      `SELECT COUNT(*) AS c FROM vocab v
         JOIN progress p ON p.lesson = v.lesson AND p.user_id = ? AND p.passed = 1`,
      user.id,
    ).c;
    const kanji = one(
      `SELECT COUNT(*) AS c FROM kanji k
         JOIN progress p ON p.lesson = k.lesson AND p.user_id = ? AND p.passed = 1`,
      user.id,
    ).c;
    const weak =
      one("SELECT COUNT(*) AS c FROM mistakes WHERE user_id = ? AND streak < 2", user.id).c +
      one("SELECT COUNT(*) AS c FROM kanji_mistakes WHERE user_id = ? AND streak < 2", user.id).c;
    return {
      user: publicUser(user),
      kana: st.kana,
      kanaOk: st.kanaOk,
      lessons: st.lessons,
      current: st.current,
      stats: { passed: st.lessons.filter((l) => l.passed).length, total: st.lessons.length, words, kanji, weak },
      settings: {
        pass_percent: st.settings.pass_percent,
        kana_pass_percent: st.settings.kana_pass_percent,
        kana_questions: st.settings.kana_questions,
        require_kana: st.settings.require_kana,
      },
    };
  });

  r.get("/api/lessons/:n", "user", ({ user, params }) => {
    const n = lessonNo(params.n);
    const lesson = one("SELECT n, title, intro FROM lessons WHERE n = ?", n);
    if (!lesson) fail(404, "Dars topilmadi");
    const st = lessonStates(user);
    const state = st.lessons.find((l) => l.n === n);
    const prev = st.lessons.find((l) => l.n === n - 1) ?? null;
    const next = st.lessons.find((l) => l.n === n + 1) ?? null;
    const settings = {
      pass_percent: st.settings.pass_percent,
      check_vocab: st.settings.check_vocab,
      check_grammar: st.settings.check_grammar,
      check_review: st.settings.check_review,
      check_kanji: st.settings.check_kanji,
    };

    if (!state.unlocked) {
      return { locked: true, lesson, state, prev, kanaOk: st.kanaOk, current: st.current, settings };
    }

    const vocab = all("SELECT id, kana, kanji, meaning FROM vocab WHERE lesson = ? ORDER BY pos, id", n);
    const grammar = all(
      "SELECT id, title, pattern, explanation, examples FROM grammar WHERE lesson = ? ORDER BY pos, id",
      n,
    ).map((g) => ({ ...g, examples: JSON.parse(g.examples) }));
    const kanji = all(`SELECT ${KANJI_FIELDS} FROM kanji WHERE lesson = ? ORDER BY pos, id`, n).map(parseKanji);
    const quizCount = one("SELECT COUNT(*) AS c FROM quiz WHERE lesson = ?", n).c;
    const attempts = all(
      `SELECT mode, score, total, percent, passed, created_at FROM attempts
        WHERE user_id = ? AND type = 'lesson' AND target = ? ORDER BY id DESC LIMIT 15`,
      user.id,
      String(n),
    );
    return { locked: false, lesson, state, prev, next, vocab, grammar, kanji, quizCount, attempts, settings };
  });

  r.post("/api/lessons/:n/seen", "user", ({ user, params, body }) => {
    const n = lessonNo(params.n);
    const column = SEEN_COLUMN[body.part] ?? "vocab_seen";
    run("INSERT INTO progress (user_id, lesson) VALUES (?, ?) ON CONFLICT DO NOTHING", user.id, n);
    run(`UPDATE progress SET ${column} = 1 WHERE user_id = ? AND lesson = ?`, user.id, n);
    return { ok: true };
  });

  r.get("/api/kanji", "user", ({ user }) => {
    const st = lessonStates(user);
    const byLesson = new Map(st.lessons.map((l) => [l.n, { n: l.n, title: l.title, unlocked: l.unlocked, passed: l.passed, kanji: [] }]));
    for (const k of all(`SELECT ${KANJI_FIELDS} FROM kanji ORDER BY lesson, pos, id`)) {
      byLesson.get(k.lesson)?.kanji.push(parseKanji(k));
    }
    return { lessons: [...byLesson.values()] };
  });

  r.get("/api/kanji/:id", "user", ({ params }) => {
    const k = one(`SELECT ${KANJI_FIELDS} FROM kanji WHERE id = ?`, toInt(params.id, { min: 1, name: "ID" }));
    if (!k) fail(404, "Kanji topilmadi");
    const words = all(
      "SELECT lesson, kana, kanji, meaning FROM vocab WHERE instr(kanji, ?) > 0 ORDER BY lesson, pos LIMIT 12",
      k.char,
    );
    return { kanji: parseKanji(k), words };
  });

  r.get("/api/mistakes", "user", ({ user }) => ({
    kanji: all(
      `SELECT k.id, k.lesson, k.char, k.onyomi, k.kunyomi, k.meaning, m.wrong_count, m.right_count
         FROM kanji_mistakes m JOIN kanji k ON k.id = m.kanji_id
        WHERE m.user_id = ? AND m.streak < 2
        ORDER BY m.wrong_count DESC, m.updated_at DESC`,
      user.id,
    ),
    words: all(
      `SELECT v.id, v.lesson, v.kana, v.kanji, v.meaning, m.wrong_count, m.right_count, m.streak, m.updated_at
         FROM mistakes m JOIN vocab v ON v.id = m.vocab_id
        WHERE m.user_id = ? AND m.streak < 2
        ORDER BY m.wrong_count DESC, m.updated_at DESC`,
      user.id,
    ),
    mastered:
      one("SELECT COUNT(*) AS c FROM mistakes WHERE user_id = ? AND streak >= 2", user.id).c +
      one("SELECT COUNT(*) AS c FROM kanji_mistakes WHERE user_id = ? AND streak >= 2", user.id).c,
  }));

  r.post("/api/tests", "user", ({ user, body }) => startTest(user, body));
  r.post("/api/tests/:id/answer", "user", ({ user, params, body }) => answerOne(user, params.id, body));
  r.post("/api/tests/:id/submit", "user", ({ user, params, body }) => submitTest(user, params.id, body));
}
