// Darslar kontentini yuklaydi. Har bir fayl ("01-05.js" kabi) darslar massivini eksport qiladi:
//
// {
//   n: 1, title: "Mavzu", intro: "Qisqa kirish",
//   vocab:   ["kana|kanji|ma'nosi", ...],                       // kanji ixtiyoriy
//   grammar: [{ t: "Sarlavha", p: "Qolip", x: `Izoh`, ex: [["yaponcha gap", "tarjima"], ...] }],
//   quiz:    [["Savol （　）", ["to'g'ri", "xato", "xato"], "izoh"], ...],
// }
//
// Misollardagi bo'sh joylar gap bo'laklarini ajratadi — "gap tuzish" mashqlari shulardan yasaladi.

import { readdirSync } from "node:fs";

const dir = new URL(".", import.meta.url);
const files = readdirSync(dir)
  .filter((f) => /^\d{2}-\d{2}\.js$/.test(f))
  .sort();
const raw = (await Promise.all(files.map((f) => import(new URL(f, dir))))).flatMap((m) => m.default);

const dedent = (s) =>
  String(s ?? "")
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

function parseLesson(l) {
  const where = `${l.n}-dars`;
  return {
    n: l.n,
    title: l.title,
    intro: l.intro ?? "",
    vocab: l.vocab.map((line) => {
      const [kana, kanji = "", meaning = ""] = line.split("|").map((x) => x.trim());
      if (!kana || !meaning) throw new Error(`${where}: so'z noto'g'ri yozilgan → "${line}"`);
      return { kana, kanji, meaning };
    }),
    grammar: l.grammar.map((g) => ({
      title: g.t,
      pattern: g.p ?? "",
      explanation: dedent(g.x),
      examples: (g.ex ?? []).map(([jp, uz]) => ({ jp, uz })),
    })),
    quiz: (l.quiz ?? []).map(([prompt, options, explanation = ""]) => {
      if (!Array.isArray(options) || options.length < 2) throw new Error(`${where}: savol variantlari yetarli emas → "${prompt}"`);
      return { prompt, options, explanation };
    }),
  };
}

export const LESSONS = raw.map(parseLesson).sort((a, b) => a.n - b.n);
