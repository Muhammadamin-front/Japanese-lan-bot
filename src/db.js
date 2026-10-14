import { DatabaseSync } from "node:sqlite";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { LESSONS } from "../data/lessons/index.js";
import { KANJI } from "../data/kanji/index.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DB_PATH = process.env.DB_PATH || path.join(ROOT, "storage", "nihongo.db");
if (DB_PATH !== ":memory:") mkdirSync(path.dirname(DB_PATH), { recursive: true });

export const db = new DatabaseSync(DB_PATH);
db.exec("PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON; PRAGMA busy_timeout = 3000;");

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id            INTEGER PRIMARY KEY,
  username      TEXT NOT NULL UNIQUE COLLATE NOCASE,
  name          TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  role          TEXT NOT NULL DEFAULT 'student',
  created_at    INTEGER NOT NULL,
  last_seen     INTEGER
);
CREATE TABLE IF NOT EXISTS sessions (
  token      TEXT PRIMARY KEY,
  user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS lessons (
  n     INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  intro TEXT NOT NULL DEFAULT ''
);
CREATE TABLE IF NOT EXISTS vocab (
  id      INTEGER PRIMARY KEY,
  lesson  INTEGER NOT NULL REFERENCES lessons(n) ON DELETE CASCADE,
  pos     INTEGER NOT NULL DEFAULT 0,
  kana    TEXT NOT NULL,
  kanji   TEXT NOT NULL DEFAULT '',
  meaning TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS grammar (
  id          INTEGER PRIMARY KEY,
  lesson      INTEGER NOT NULL REFERENCES lessons(n) ON DELETE CASCADE,
  pos         INTEGER NOT NULL DEFAULT 0,
  title       TEXT NOT NULL,
  pattern     TEXT NOT NULL DEFAULT '',
  explanation TEXT NOT NULL DEFAULT '',
  examples    TEXT NOT NULL DEFAULT '[]'
);
CREATE TABLE IF NOT EXISTS quiz (
  id          INTEGER PRIMARY KEY,
  lesson      INTEGER NOT NULL REFERENCES lessons(n) ON DELETE CASCADE,
  pos         INTEGER NOT NULL DEFAULT 0,
  prompt      TEXT NOT NULL,
  options     TEXT NOT NULL,            -- JSON massiv, birinchisi to'g'ri javob
  explanation TEXT NOT NULL DEFAULT ''
);
CREATE TABLE IF NOT EXISTS kanji (
  id       INTEGER PRIMARY KEY,
  lesson   INTEGER NOT NULL REFERENCES lessons(n) ON DELETE CASCADE,
  pos      INTEGER NOT NULL DEFAULT 0,
  char     TEXT NOT NULL,
  onyomi   TEXT NOT NULL DEFAULT '',
  kunyomi  TEXT NOT NULL DEFAULT '',
  meaning  TEXT NOT NULL,
  strokes  INTEGER NOT NULL DEFAULT 0,
  examples TEXT NOT NULL DEFAULT '[]'      -- [{ w: so'z, r: o'qilishi, m: ma'nosi }]
);
CREATE TABLE IF NOT EXISTS progress (
  user_id      INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  lesson       INTEGER NOT NULL,
  unlocked     INTEGER NOT NULL DEFAULT 0,   -- ustoz qo'lda ochgan
  passed       INTEGER NOT NULL DEFAULT 0,
  best         INTEGER NOT NULL DEFAULT 0,
  attempts     INTEGER NOT NULL DEFAULT 0,
  vocab_seen   INTEGER NOT NULL DEFAULT 0,
  grammar_seen INTEGER NOT NULL DEFAULT 0,
  passed_at    INTEGER,
  PRIMARY KEY (user_id, lesson)
);
CREATE TABLE IF NOT EXISTS kana_progress (
  user_id   INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  script    TEXT NOT NULL,                   -- hiragana | katakana
  best      INTEGER NOT NULL DEFAULT 0,
  attempts  INTEGER NOT NULL DEFAULT 0,
  passed    INTEGER NOT NULL DEFAULT 0,
  passed_at INTEGER,
  PRIMARY KEY (user_id, script)
);
CREATE TABLE IF NOT EXISTS attempts (
  id         INTEGER PRIMARY KEY,
  user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type       TEXT NOT NULL,                  -- kana | lesson | mistakes
  target     TEXT NOT NULL,                  -- hiragana | katakana | dars raqami
  mode       TEXT NOT NULL,                  -- practice | check
  score      INTEGER NOT NULL,
  total      INTEGER NOT NULL,
  percent    INTEGER NOT NULL,
  passed     INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS attempts_user ON attempts(user_id, id);
CREATE TABLE IF NOT EXISTS mistakes (
  user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  vocab_id    INTEGER NOT NULL REFERENCES vocab(id) ON DELETE CASCADE,
  wrong_count INTEGER NOT NULL DEFAULT 0,
  right_count INTEGER NOT NULL DEFAULT 0,
  streak      INTEGER NOT NULL DEFAULT 0,    -- ketma-ket to'g'ri javoblar
  updated_at  INTEGER NOT NULL,
  PRIMARY KEY (user_id, vocab_id)
);
CREATE TABLE IF NOT EXISTS kanji_mistakes (
  user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  kanji_id    INTEGER NOT NULL REFERENCES kanji(id) ON DELETE CASCADE,
  wrong_count INTEGER NOT NULL DEFAULT 0,
  right_count INTEGER NOT NULL DEFAULT 0,
  streak      INTEGER NOT NULL DEFAULT 0,
  updated_at  INTEGER NOT NULL,
  PRIMARY KEY (user_id, kanji_id)
);
CREATE TABLE IF NOT EXISTS test_sessions (
  id         TEXT PRIMARY KEY,
  user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type       TEXT NOT NULL,
  target     TEXT NOT NULL,
  mode       TEXT NOT NULL,
  questions  TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  finished   INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS settings (
  key   TEXT PRIMARY KEY,
  value TEXT NOT NULL
);
`);

// Eski bazalarni yangilash (kanji bosqichi keyinroq qo'shilgan).
if (!db.prepare("PRAGMA table_info(progress)").all().some((c) => c.name === "kanji_seen")) {
  db.exec("ALTER TABLE progress ADD COLUMN kanji_seen INTEGER NOT NULL DEFAULT 0");
}

const statements = new Map();
function stmt(sql) {
  let s = statements.get(sql);
  if (!s) statements.set(sql, (s = db.prepare(sql)));
  return s;
}

export const one = (sql, ...params) => stmt(sql).get(...params);
export const all = (sql, ...params) => stmt(sql).all(...params);
export const run = (sql, ...params) => stmt(sql).run(...params);
export const now = () => Date.now();

let txDepth = 0;
export function tx(fn) {
  if (txDepth > 0) return fn();
  txDepth++;
  db.exec("BEGIN");
  try {
    const out = fn();
    db.exec("COMMIT");
    return out;
  } catch (err) {
    db.exec("ROLLBACK");
    throw err;
  } finally {
    txDepth--;
  }
}

/* ---------------- Sozlamalar ---------------- */

export const SETTINGS_SPEC = {
  pass_percent: { type: "int", def: 70, min: 1, max: 100 },
  kana_pass_percent: { type: "int", def: 80, min: 1, max: 100 },
  kana_questions: { type: "int", def: 20, min: 5, max: 100 },
  kana_include_yoon: { type: "bool", def: true },
  check_vocab: { type: "int", def: 10, min: 0, max: 60 },
  check_grammar: { type: "int", def: 6, min: 0, max: 40 },
  check_review: { type: "int", def: 3, min: 0, max: 20 },
  check_kanji: { type: "int", def: 4, min: 0, max: 30 },
  require_kana: { type: "bool", def: true },
  sequential: { type: "bool", def: true },
  allow_register: { type: "bool", def: true },
  register_code: { type: "str", def: "", max: 64 },
};

export function getSettings() {
  const out = Object.fromEntries(Object.entries(SETTINGS_SPEC).map(([k, s]) => [k, s.def]));
  for (const row of all("SELECT key, value FROM settings")) {
    if (row.key in out) out[row.key] = JSON.parse(row.value);
  }
  return out;
}

export function saveSettings(patch) {
  tx(() => {
    for (const [key, spec] of Object.entries(SETTINGS_SPEC)) {
      if (!(key in patch)) continue;
      let v = patch[key];
      if (spec.type === "int") {
        v = Math.round(Number(v));
        if (!Number.isFinite(v)) continue;
        v = Math.min(spec.max, Math.max(spec.min, v));
      } else if (spec.type === "bool") {
        v = Boolean(v);
      } else {
        v = String(v ?? "").trim().slice(0, spec.max);
      }
      run(
        "INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value",
        key,
        JSON.stringify(v),
      );
    }
  });
  return getSettings();
}

/* ---------------- Dars kontenti ---------------- */

export const defaultLesson = (n) => LESSONS.find((l) => l.n === n);
export const defaultKanji = (n) => KANJI.get(n) ?? [];

function insertKanji(n, list) {
  list.forEach((k, i) =>
    run(
      "INSERT INTO kanji (lesson, pos, char, onyomi, kunyomi, meaning, strokes, examples) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      n, i, k.char, k.onyomi, k.kunyomi, k.meaning, k.strokes, JSON.stringify(k.examples),
    ),
  );
}

/** Darsni data/lessons dagi asl holatiga qaytaradi (so'z, grammatika, savollar). */
export function seedLesson(lesson) {
  tx(() => {
    run("DELETE FROM lessons WHERE n = ?", lesson.n);
    run("INSERT INTO lessons (n, title, intro) VALUES (?, ?, ?)", lesson.n, lesson.title, lesson.intro);
    lesson.vocab.forEach((w, i) =>
      run(
        "INSERT INTO vocab (lesson, pos, kana, kanji, meaning) VALUES (?, ?, ?, ?, ?)",
        lesson.n, i, w.kana, w.kanji, w.meaning,
      ),
    );
    lesson.grammar.forEach((g, i) =>
      run(
        "INSERT INTO grammar (lesson, pos, title, pattern, explanation, examples) VALUES (?, ?, ?, ?, ?, ?)",
        lesson.n, i, g.title, g.pattern, g.explanation, JSON.stringify(g.examples),
      ),
    );
    lesson.quiz.forEach((q, i) =>
      run(
        "INSERT INTO quiz (lesson, pos, prompt, options, explanation) VALUES (?, ?, ?, ?, ?)",
        lesson.n, i, q.prompt, JSON.stringify(q.options), q.explanation,
      ),
    );
    insertKanji(lesson.n, defaultKanji(lesson.n));
  });
}

export function seedMissingLessons() {
  let added = 0;
  for (const lesson of LESSONS) {
    if (one("SELECT 1 FROM lessons WHERE n = ?", lesson.n)) continue;
    seedLesson(lesson);
    added++;
  }
  if (added) console.log(`  ${added} ta dars bazaga yuklandi.`);
}

/** Kanji bo'limi qo'shilishidan oldin yaratilgan bazalarga kanjilarni bir marta yuklaydi. */
export function seedMissingKanji() {
  if (one("SELECT 1 FROM settings WHERE key = 'kanji_seeded'")) return;
  let added = 0;
  tx(() => {
    for (const { n } of all("SELECT n FROM lessons")) {
      if (one("SELECT 1 FROM kanji WHERE lesson = ?", n)) continue;
      const list = defaultKanji(n);
      insertKanji(n, list);
      added += list.length;
    }
    run("INSERT INTO settings (key, value) VALUES ('kanji_seeded', 'true')");
  });
  if (added) console.log(`  ${added} ta kanji bazaga yuklandi.`);
}

export function cleanup() {
  run("DELETE FROM sessions WHERE expires_at < ?", now());
  run("DELETE FROM test_sessions WHERE created_at < ?", now() - 2 * 86_400_000);
}
