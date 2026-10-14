import { all, getSettings } from "./db.js";

export function kanaState(userId) {
  const empty = () => ({ best: 0, attempts: 0, passed: false });
  const out = { hiragana: empty(), katakana: empty() };
  for (const r of all("SELECT script, best, attempts, passed FROM kana_progress WHERE user_id = ?", userId)) {
    if (out[r.script]) out[r.script] = { best: r.best, attempts: r.attempts, passed: !!r.passed };
  }
  return out;
}

/**
 * Har bir dars uchun holat. Qoida:
 *  - 1-dars: kana testlari o'tilgan bo'lsa ochiladi (sozlamaga qarab);
 *  - N-dars: (N-1)-dars tekshiruvidan o'tilgan bo'lsa ochiladi;
 *  - ustoz qo'lda ochgan darslar va ustozning o'zi uchun hammasi ochiq.
 */
export function lessonStates(user) {
  const settings = getSettings();
  const kana = kanaState(user.id);
  const kanaOk = !settings.require_kana || (kana.hiragana.passed && kana.katakana.passed);
  const prog = new Map(all("SELECT * FROM progress WHERE user_id = ?", user.id).map((p) => [p.lesson, p]));

  const lessons = all("SELECT n, title FROM lessons ORDER BY n").map((l) => {
    const p = prog.get(l.n);
    const prevPassed = !!prog.get(l.n - 1)?.passed;
    const unlocked =
      user.role === "admin" ||
      !!p?.unlocked ||
      (l.n === 1 ? kanaOk : prevPassed || (!settings.sequential && kanaOk));
    return {
      n: l.n,
      title: l.title,
      unlocked,
      manual: !!p?.unlocked,
      passed: !!p?.passed,
      best: p?.best ?? 0,
      attempts: p?.attempts ?? 0,
      vocabSeen: !!p?.vocab_seen,
      grammarSeen: !!p?.grammar_seen,
      kanjiSeen: !!p?.kanji_seen,
      passedAt: p?.passed_at ?? null,
    };
  });

  const current = lessons.find((l) => l.unlocked && !l.passed) ?? null;
  return { settings, kana, kanaOk, lessons, current };
}
