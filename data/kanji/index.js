// Darslar bo'yicha kanjilar. Har bir fayl { darsRaqami: [qator, ...] } eksport qiladi.
// Qator formati:
//   "字|on o'qilishi|kun o'qilishi|ma'nosi|chiziqlar soni|so'z:o'qilishi:ma'nosi;so'z:o'qilishi:ma'nosi"
// On o'qilishi katakanada, kun — hiraganada, okurigana qavsda: おお(きい). Bo'lmasa — "—".

import { readdirSync } from "node:fs";

const dir = new URL(".", import.meta.url);
const files = readdirSync(dir)
  .filter((f) => /^\d{2}-\d{2}\.js$/.test(f))
  .sort();
const modules = await Promise.all(files.map((f) => import(new URL(f, dir))));

function parseKanji(line, n) {
  const [char, on, kun, meaning, strokes, examples = ""] = line.split("|").map((x) => x.trim());
  if (!char || !meaning || !Number(strokes)) throw new Error(`${n}-dars kanjisi noto'g'ri yozilgan → "${line}"`);
  return {
    char,
    onyomi: on === "—" ? "" : on,
    kunyomi: kun === "—" ? "" : kun,
    meaning,
    strokes: Number(strokes),
    examples: examples
      .split(";")
      .filter(Boolean)
      .map((e) => {
        const [w, r, m] = e.split(":").map((x) => x.trim());
        if (!w || !r || !m) throw new Error(`${n}-dars, ${char}: misol noto'g'ri → "${e}"`);
        return { w, r, m };
      }),
  };
}

/** Map: dars raqami → kanjilar ro'yxati */
export const KANJI = new Map();
for (const m of modules) {
  for (const [n, lines] of Object.entries(m.default)) {
    KANJI.set(Number(n), lines.map((line) => parseKanji(line, n)));
  }
}
