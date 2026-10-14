import { randomBytes } from "node:crypto";
import { one, all, run, now, tx, getSettings } from "./db.js";
import { fail } from "./http.js";
import { toInt } from "./validate.js";
import { lessonStates } from "./progress.js";
import { kanaCells, matchesKana } from "../public/js/kana.js";

const SECTION = {
  vocab: "So'zlar",
  grammar: "Grammatika",
  kanji: "Kanji",
  review: "Takrorlash",
  mistakes: "Xatolar ustida ishlash",
};
const PART_TITLE = { vocab: "so'zlar mashqi", grammar: "grammatika mashqi", kanji: "kanji mashqi", mixed: "aralash mashq" };
const VOCAB_FIELDS = "id, lesson, kana, kanji, meaning";
const KANJI_FIELDS = "id, lesson, char, onyomi, kunyomi, meaning, examples";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const take = (arr, n) => shuffle(arr).slice(0, Math.max(0, n));

/* ---------------- So'z savollari ---------------- */

function distractors(word, pool, key, count = 3) {
  const seen = new Set([word[key]]);
  const out = [];
  for (const w of shuffle(pool)) {
    if (out.length >= count) break;
    if (w.id === word.id || !w[key] || seen.has(w[key])) continue;
    if (w.kana === word.kana || w.meaning === word.meaning) continue;
    seen.add(w[key]);
    out.push(w[key]);
  }
  return out;
}

const typeable = (w) => /^[぀-ヿー]{1,10}$/.test(w.kana.replace(/[～〜\s]/g, ""));

function vocabQuestion(w, pool, kind, section) {
  if (kind === "type" && !typeable(w)) kind = "uz2jp";
  const base = { section, ref: w.id, reveal: `${w.kana}${w.kanji ? `（${w.kanji}）` : ""} — ${w.meaning}` };
  if (kind === "type") {
    return { ...base, kind, prompt: { main: w.meaning, uz: true }, answer: w.kana, alt: w.kanji ? [w.kanji] : [] };
  }
  if (kind === "uz2jp") {
    return {
      ...base,
      kind,
      prompt: { main: w.meaning, uz: true },
      options: shuffle([w.kana, ...distractors(w, pool, "kana")]),
      answer: w.kana,
    };
  }
  return {
    ...base,
    kind: "jp2uz",
    prompt: { main: w.kanji || w.kana, sub: w.kanji ? w.kana : "", tts: w.kana },
    options: shuffle([w.meaning, ...distractors(w, pool, "meaning")]),
    answer: w.meaning,
  };
}

const KIND_CYCLE = ["jp2uz", "uz2jp", "type", "jp2uz", "uz2jp", "type"];

function vocabQuestions(words, pool, section) {
  return shuffle(words).map((w, i) => vocabQuestion(w, pool, KIND_CYCLE[i % KIND_CYCLE.length], section));
}

/* ---------------- Grammatika savollari ---------------- */

function quizQuestion(row) {
  const options = [...new Set(JSON.parse(row.options).map(String))];
  return {
    kind: "mc",
    section: SECTION.grammar,
    prompt: { main: row.prompt },
    options: shuffle(options),
    answer: options[0],
    reveal: options[0],
    explanation: row.explanation,
  };
}

function shuffledDifferent(chunks) {
  for (let i = 0; i < 12; i++) {
    const s = shuffle(chunks);
    if (s.join(" ") !== chunks.join(" ")) return s;
  }
  return [...chunks].reverse();
}

/** Grammatika misollaridan "gap tuzish" savollari (bo'laklar bo'sh joy bilan ajratilgan). */
function orderQuestions(grammarRows) {
  const out = [];
  for (const g of grammarRows) {
    for (const ex of JSON.parse(g.examples)) {
      if (!ex.jp || !ex.uz || /[：:／]/.test(ex.jp)) continue;
      const chunks = ex.jp.trim().split(/\s+/);
      if (chunks.length < 3 || chunks.length > 7 || new Set(chunks).size !== chunks.length) continue;
      out.push({
        kind: "order",
        section: SECTION.grammar,
        prompt: { main: ex.uz, uz: true },
        chunks: shuffledDifferent(chunks),
        answer: chunks.join(" "),
        reveal: ex.jp,
        explanation: g.title,
      });
    }
  }
  return out;
}

/* ---------------- Kanji savollari ---------------- */

const parseKanji = (row) => ({ ...row, examples: JSON.parse(row.examples) });

function kanjiIn(lessons) {
  if (!lessons.length) return [];
  return all(
    `SELECT ${KANJI_FIELDS} FROM kanji WHERE lesson IN (${lessons.map(() => "?").join(",")})`,
    ...lessons,
  ).map(parseKanji);
}

function withDistractors(correct, candidates, count = 3) {
  const seen = new Set([correct]);
  const out = [];
  for (const c of shuffle(candidates)) {
    if (out.length >= count) break;
    if (!c || seen.has(c)) continue;
    seen.add(c);
    out.push(c);
  }
  return shuffle([correct, ...out]);
}

const KANJI_KINDS = ["meaning", "reading", "char", "type"];

function kanjiQuestion(k, pool, kind, section) {
  const ex = k.examples.length ? k.examples[Math.floor(Math.random() * k.examples.length)] : null;
  if ((kind === "reading" || kind === "type") && !ex) kind = "meaning";
  const base = { section, kref: k.id };
  const readings = [k.onyomi, k.kunyomi].filter(Boolean).join(" ／ ");
  const charReveal = `${k.char}（${readings}） — ${k.meaning}`;

  if (kind === "char") {
    return {
      ...base,
      kind: "uz2jp",
      hint: "Mos kanjini tanlang",
      prompt: { main: k.meaning, uz: true },
      options: withDistractors(k.char, pool.filter((p) => p.meaning !== k.meaning).map((p) => p.char)),
      answer: k.char,
      reveal: charReveal,
    };
  }
  if (kind === "reading" || kind === "type") {
    const reveal = `${ex.w}（${ex.r}） — ${ex.m}`;
    if (kind === "type") {
      return {
        ...base,
        kind: "type",
        hint: "So'zning o'qilishini yozing — kana yoki romaji",
        prompt: { main: ex.w, sub: ex.m },
        answer: ex.r,
        alt: [],
        reveal,
      };
    }
    return {
      ...base,
      kind: "mc",
      hint: "So'zning o'qilishini tanlang",
      prompt: { main: ex.w },
      options: withDistractors(ex.r, pool.flatMap((p) => p.examples.map((e) => e.r))),
      answer: ex.r,
      reveal,
    };
  }
  return {
    ...base,
    kind: "jp2uz",
    hint: "Kanjining ma'nosini tanlang",
    prompt: { main: k.char },
    options: withDistractors(k.meaning, pool.filter((p) => p.char !== k.char).map((p) => p.meaning)),
    answer: k.meaning,
    reveal: charReveal,
  };
}

/** perKanji — har bir kanji uchun nechta (har xil turdagi) savol. */
function kanjiQuestions(list, pool, section, perKanji = 1) {
  const out = [];
  shuffle(list).forEach((k, i) => {
    const kinds = perKanji === 1 ? [KANJI_KINDS[i % KANJI_KINDS.length]] : take(KANJI_KINDS, perKanji);
    for (const kind of kinds) out.push(kanjiQuestion(k, pool, kind, section));
  });
  return shuffle(out);
}

/* ---------------- Test turlari ---------------- */

function lessonQuestions(n, mode, part, settings) {
  const words = all(`SELECT ${VOCAB_FIELDS} FROM vocab WHERE lesson = ?`, n);
  const pool =
    words.length >= 8 ? words : all(`SELECT ${VOCAB_FIELDS} FROM vocab WHERE lesson BETWEEN ? AND ?`, n - 3, n + 3);
  const quiz = all("SELECT prompt, options, explanation FROM quiz WHERE lesson = ?", n).map(quizQuestion);
  const order = orderQuestions(all("SELECT title, examples FROM grammar WHERE lesson = ?", n));
  const kanji = kanjiIn([n]);
  const kanjiPool = kanji.length >= 6 ? kanji : kanjiIn([n - 2, n - 1, n, n + 1, n + 2]);

  if (mode === "practice") {
    if (part === "vocab") return vocabQuestions(take(words, 15), pool, SECTION.vocab);
    if (part === "grammar") return [...shuffle(quiz), ...take(order, 4)];
    if (part === "kanji") return kanjiQuestions(kanji, kanjiPool, SECTION.kanji, 2).slice(0, 16);
    return shuffle([
      ...vocabQuestions(take(words, 8), pool, SECTION.vocab),
      ...take(quiz, 4),
      ...take(order, 2),
      ...kanjiQuestions(take(kanji, 2), kanjiPool, SECTION.kanji),
    ]);
  }

  // Tekshiruv: shu dars so'zlari + grammatika + oldingi darslardan takrorlash.
  const g = settings.check_grammar;
  const nOrder = Math.min(order.length, Math.round(g / 3));
  const nMc = Math.min(quiz.length, g - nOrder);
  const grammar = [...take(quiz, nMc), ...take(order, g - nMc)];

  let review = [];
  if (n > 1 && settings.check_review > 0) {
    const prev = all(`SELECT ${VOCAB_FIELDS} FROM vocab WHERE lesson < ?`, n);
    review = vocabQuestions(take(prev, settings.check_review), prev, SECTION.review);
  }
  return [
    ...vocabQuestions(take(words, settings.check_vocab), pool, SECTION.vocab),
    ...grammar,
    ...kanjiQuestions(take(kanji, settings.check_kanji), kanjiPool, SECTION.kanji),
    ...review,
  ];
}

function kanaQuestions(script, mode, part, settings) {
  const groups =
    mode === "practice" && ["basic", "dakuten", "yoon"].includes(part)
      ? [part]
      : settings.kana_include_yoon
        ? ["basic", "dakuten", "yoon"]
        : ["basic", "dakuten"];
  const cells = kanaCells(script, groups);
  const count = Math.min(mode === "practice" ? 20 : settings.kana_questions, cells.length);
  return take(cells, count).map((c, i) => {
    const reveal = `${c.char} — ${c.romaji}`;
    if (i % 2 === 0) {
      return { kind: "kana2romaji", prompt: { main: c.char }, answer: c.romaji, accept: c.accept, reveal };
    }
    const others = shuffle(cells.filter((o) => o.romaji !== c.romaji && o.char !== c.char)).slice(0, 3);
    return {
      kind: "romaji2kana",
      prompt: { main: c.romaji, latin: true },
      options: shuffle([c.char, ...others.map((o) => o.char)]),
      answer: c.char,
      reveal,
    };
  });
}

function weakWords(userId, limit) {
  return all(
    `SELECT v.id, v.lesson, v.kana, v.kanji, v.meaning
       FROM mistakes m JOIN vocab v ON v.id = m.vocab_id
      WHERE m.user_id = ? AND m.streak < 2
      ORDER BY m.wrong_count DESC, m.updated_at DESC
      LIMIT ?`,
    userId,
    limit,
  );
}

function weakKanji(userId, limit) {
  return all(
    `SELECT k.id, k.lesson, k.char, k.onyomi, k.kunyomi, k.meaning, k.examples
       FROM kanji_mistakes m JOIN kanji k ON k.id = m.kanji_id
      WHERE m.user_id = ? AND m.streak < 2
      ORDER BY m.wrong_count DESC, m.updated_at DESC
      LIMIT ?`,
    userId,
    limit,
  ).map(parseKanji);
}

/* ---------------- Sessiyalar ---------------- */

const CLIENT_FIELDS = ["kind", "section", "hint", "prompt", "options", "chunks"];
const toClient = (q) => Object.fromEntries(CLIENT_FIELDS.filter((k) => q[k] !== undefined).map((k) => [k, q[k]]));

function thresholdFor(type, mode, settings) {
  if (mode !== "check") return null;
  return type === "kana" ? settings.kana_pass_percent : settings.pass_percent;
}

export function startTest(user, body) {
  const settings = getSettings();
  const type = String(body.type || "");
  let mode = body.mode === "check" ? "check" : "practice";
  const part = String(body.part || "mixed");
  let questions;
  let target;
  let title;

  if (type === "kana") {
    target = body.target === "katakana" ? "katakana" : "hiragana";
    questions = kanaQuestions(target, mode, part, settings);
    title = `${target === "hiragana" ? "Hiragana" : "Katakana"} ${mode === "check" ? "testi" : "mashqi"}`;
  } else if (type === "lesson") {
    const n = toInt(body.target, { min: 1, max: 50, name: "Dars raqami" });
    const state = lessonStates(user).lessons.find((l) => l.n === n);
    if (!state) fail(404, "Dars topilmadi");
    if (!state.unlocked) fail(403, "Bu dars hali yopiq");
    target = String(n);
    questions = lessonQuestions(n, mode, part, settings);
    title = mode === "check" ? `${n}-dars · tekshiruv` : `${n}-dars · ${PART_TITLE[part] || PART_TITLE.mixed}`;
  } else if (type === "kanji") {
    mode = "practice";
    target = "";
    const open = lessonStates(user).lessons.filter((l) => l.unlocked).map((l) => l.n);
    const list = kanjiIn(open);
    if (!list.length) fail(400, "Hali ochiq darslarda kanji yo'q");
    questions = kanjiQuestions(take(list, 15), list, SECTION.kanji);
    title = "Kanji takrorlash";
  } else if (type === "mistakes") {
    mode = "practice";
    target = "";
    const kanjiWeak = take(weakKanji(user.id, 20), 5);
    const words = take(weakWords(user.id, 40), 15 - kanjiWeak.length);
    if (!words.length && !kanjiWeak.length) fail(400, "Hozircha takrorlash kerak bo'lgan so'zlar yo'q");
    const lessonsUsed = [...new Set(words.map((w) => w.lesson))];
    const pool = lessonsUsed.length
      ? all(`SELECT ${VOCAB_FIELDS} FROM vocab WHERE lesson IN (${lessonsUsed.map(() => "?").join(",")})`, ...lessonsUsed)
      : [];
    const kanjiPool = kanjiIn([...new Set(kanjiWeak.map((k) => k.lesson))]);
    questions = shuffle([
      ...vocabQuestions(words, pool, SECTION.mistakes),
      ...kanjiQuestions(kanjiWeak, kanjiPool.length >= 4 ? kanjiPool : kanjiIn([1, 2, 3, 4, 5]), SECTION.mistakes),
    ]);
    title = "Xatolar ustida ishlash";
  } else {
    fail(400, "Noma'lum test turi");
  }

  if (!questions.length) fail(400, "Bu bo'lim uchun savollar topilmadi");
  const id = randomBytes(12).toString("base64url");
  run(
    "INSERT INTO test_sessions (id, user_id, type, target, mode, questions, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
    id, user.id, type, target, mode, JSON.stringify(questions), now(),
  );
  return {
    id,
    title,
    type,
    target,
    mode,
    threshold: thresholdFor(type, mode, settings),
    questions: questions.map(toClient),
  };
}

/*
 * Gap tuzishda yapon tilining erkin so'z tartibini hisobga olamiz: yuklama bilan tugaydigan
 * bo'laklar (～が, ～を, ～で...) o'zaro o'rin almashishi mumkin. Shartlar: kesim oxirida qoladi,
 * mavzu (～は) o'z joyida, aniqlovchilar (この, ～の, fe'l) o'zi aniqlagan so'z bilan birga,
 * vergul bilan ajratilgan qismlar tartibi o'zgarmaydi.
 */
const PHRASE_END = /(?:は|が|を|に|で|へ|から|まで|も|より)$/;
const TE_FORM = /(?:んで|いで)$/;

function phraseSegments(chunks) {
  const segments = [];
  let segment = [];
  let phrase = [];
  for (const chunk of chunks) {
    phrase.push(chunk);
    const clauseEnd = /[、，]$/.test(chunk);
    if (clauseEnd || (PHRASE_END.test(chunk) && !TE_FORM.test(chunk))) {
      segment.push(phrase.join(" "));
      phrase = [];
    }
    if (clauseEnd) {
      segments.push(segment);
      segment = [];
    }
  }
  if (phrase.length) segment.push(phrase.join(" "));
  if (segment.length) segments.push(segment);
  return segments;
}

export function acceptableOrder(expected, given) {
  if (expected.length !== given.length) return false;
  const a = phraseSegments(expected);
  const b = phraseSegments(given);
  if (a.length !== b.length) return false;
  return a.every((seg, i) => {
    const other = b[i];
    if (seg.length !== other.length || seg.at(-1) !== other.at(-1)) return false;
    const topicMoved = seg.some((p, j) => (p.endsWith("は") || other[j].endsWith("は")) && p !== other[j]);
    return !topicMoved && [...seg].sort().join("|") === [...other].sort().join("|");
  });
}

function grade(q, given) {
  if (given === null || given === undefined || given === "") return false;
  switch (q.kind) {
    case "order":
      return Array.isArray(given) && acceptableOrder(q.answer.split(" "), given.map(String));
    case "type":
      return matchesKana(String(given), q.answer, q.alt);
    case "kana2romaji":
      return q.accept.includes(String(given).trim().toLowerCase().replace(/\s+/g, ""));
    default:
      return String(given) === q.answer;
  }
}

function loadSession(user, id) {
  const s = one("SELECT * FROM test_sessions WHERE id = ? AND user_id = ?", String(id), user.id);
  if (!s) fail(404, "Test topilmadi yoki muddati o'tgan");
  if (s.finished) fail(409, "Bu test allaqachon yakunlangan");
  return { ...s, questions: JSON.parse(s.questions) };
}

/** Mashq rejimida bitta savolni darhol tekshirish. */
export function answerOne(user, id, body) {
  const s = loadSession(user, id);
  if (s.mode !== "practice") fail(403, "Tekshiruv paytida to'g'ri javoblar ko'rsatilmaydi");
  const q = s.questions[toInt(body.index, { min: 0, max: s.questions.length - 1, name: "Savol raqami" })];
  return { correct: grade(q, body.answer), answer: q.answer, reveal: q.reveal, explanation: q.explanation || "" };
}

function recordKanji(userId, kanjiId, correct) {
  if (correct) {
    run(
      "UPDATE kanji_mistakes SET right_count = right_count + 1, streak = streak + 1, updated_at = ? WHERE user_id = ? AND kanji_id = ?",
      now(), userId, kanjiId,
    );
    return;
  }
  run(
    `INSERT INTO kanji_mistakes (user_id, kanji_id, wrong_count, right_count, streak, updated_at)
     SELECT ?, id, 1, 0, 0, ? FROM kanji WHERE id = ?
     ON CONFLICT(user_id, kanji_id) DO UPDATE SET wrong_count = wrong_count + 1, streak = 0, updated_at = excluded.updated_at`,
    userId, now(), kanjiId,
  );
}

function recordWord(userId, vocabId, correct) {
  if (correct) {
    run(
      "UPDATE mistakes SET right_count = right_count + 1, streak = streak + 1, updated_at = ? WHERE user_id = ? AND vocab_id = ?",
      now(), userId, vocabId,
    );
    return;
  }
  run(
    `INSERT INTO mistakes (user_id, vocab_id, wrong_count, right_count, streak, updated_at)
     SELECT ?, id, 1, 0, 0, ? FROM vocab WHERE id = ?
     ON CONFLICT(user_id, vocab_id) DO UPDATE SET wrong_count = wrong_count + 1, streak = 0, updated_at = excluded.updated_at`,
    userId, now(), vocabId,
  );
}

const UPSERT_LESSON = `
  INSERT INTO progress (user_id, lesson, attempts, best, passed, passed_at) VALUES (?, ?, 1, ?, ?, ?)
  ON CONFLICT(user_id, lesson) DO UPDATE SET
    attempts = attempts + 1,
    best = MAX(best, excluded.best),
    passed = MAX(passed, excluded.passed),
    passed_at = COALESCE(passed_at, excluded.passed_at)`;

const UPSERT_KANA = `
  INSERT INTO kana_progress (user_id, script, attempts, best, passed, passed_at) VALUES (?, ?, 1, ?, ?, ?)
  ON CONFLICT(user_id, script) DO UPDATE SET
    attempts = attempts + 1,
    best = MAX(best, excluded.best),
    passed = MAX(passed, excluded.passed),
    passed_at = COALESCE(passed_at, excluded.passed_at)`;

export function submitTest(user, id, body) {
  const s = loadSession(user, id);
  const settings = getSettings();
  const answers = Array.isArray(body.answers) ? body.answers : [];
  const results = s.questions.map((q, i) => ({
    correct: grade(q, answers[i]),
    answer: q.answer,
    reveal: q.reveal,
    explanation: q.explanation || "",
  }));
  const total = results.length;
  const score = results.filter((r) => r.correct).length;
  const percent = Math.round((score / total) * 100);
  const threshold = thresholdFor(s.type, s.mode, settings);
  const passed = threshold !== null && percent >= threshold;
  const passedAt = passed ? now() : null;

  tx(() => {
    run("UPDATE test_sessions SET finished = 1 WHERE id = ?", s.id);
    run(
      "INSERT INTO attempts (user_id, type, target, mode, score, total, percent, passed, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      user.id, s.type, s.target, s.mode, score, total, percent, passed ? 1 : 0, now(),
    );
    s.questions.forEach((q, i) => {
      if (q.ref) recordWord(user.id, q.ref, results[i].correct);
      if (q.kref) recordKanji(user.id, q.kref, results[i].correct);
    });
    if (s.mode === "check" && s.type === "kana") run(UPSERT_KANA, user.id, s.target, percent, passed ? 1 : 0, passedAt);
    if (s.mode === "check" && s.type === "lesson") run(UPSERT_LESSON, user.id, Number(s.target), percent, passed ? 1 : 0, passedAt);
  });

  const out = { score, total, percent, threshold, passed, mode: s.mode, type: s.type, target: s.target, results };
  if (passed && s.type === "lesson") {
    const next = Number(s.target) + 1;
    if (one("SELECT 1 FROM lessons WHERE n = ?", next)) out.nextLesson = next;
  }
  if (passed && s.type === "kana") out.kanaComplete = lessonStates(user).kanaOk;
  return out;
}
