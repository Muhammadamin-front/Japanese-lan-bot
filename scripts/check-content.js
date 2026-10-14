// Dars kontentini tekshiradi: npm run check
import { LESSONS } from "../data/lessons/index.js";
import { KANJI } from "../data/kanji/index.js";

const KANA = /^[぀-ヿー～〜・？！\s（）、。a-zA-Z0-9]+$/;
let problems = 0;
const warn = (n, msg) => {
  problems++;
  console.log(`  ${String(n).padStart(2)}-dars: ${msg}`);
};

const numbers = LESSONS.map((l) => l.n);
for (let n = 1; n <= 50; n++) if (!numbers.includes(n)) warn(n, "dars yo'q");

let totalWords = 0;
let totalGrammar = 0;
let totalQuiz = 0;
let totalOrder = 0;

for (const l of LESSONS) {
  totalWords += l.vocab.length;
  totalGrammar += l.grammar.length;
  totalQuiz += l.quiz.length;
  if (l.vocab.length < 15) warn(l.n, `so'zlar kam (${l.vocab.length})`);
  if (l.grammar.length < 3) warn(l.n, `grammatika kam (${l.grammar.length})`);
  if (l.quiz.length < 5) warn(l.n, `savollar kam (${l.quiz.length})`);

  const seen = new Set();
  for (const w of l.vocab) {
    if (!KANA.test(w.kana)) warn(l.n, `kana maydonida kana bo'lmagan belgi: ${w.kana}`);
    const key = `${w.kana}|${w.meaning}`;
    if (seen.has(key)) warn(l.n, `takroriy so'z: ${w.kana}`);
    seen.add(key);
  }

  for (const g of l.grammar) {
    if (!g.explanation) warn(l.n, `izohsiz grammatika: ${g.title}`);
    for (const ex of g.examples) {
      if (!ex.uz) warn(l.n, `tarjimasiz misol: ${ex.jp}`);
      if (/[：:／]/.test(ex.jp)) continue;
      const chunks = ex.jp.trim().split(/\s+/);
      if (chunks.length >= 3 && chunks.length <= 7 && new Set(chunks).size === chunks.length) totalOrder++;
    }
  }

  for (const q of l.quiz) {
    if (new Set(q.options).size !== q.options.length) warn(l.n, `takroriy variant: ${q.prompt}`);
    if (q.options.length < 3) warn(l.n, `variantlar kam: ${q.prompt}`);
  }
}

let totalKanji = 0;
const kanjiSeen = new Map();
for (const [n, list] of KANJI) {
  if (!numbers.includes(n)) warn(n, "kanji bor, lekin dars yo'q");
  if (list.length < 3) warn(n, `kanji kam (${list.length})`);
  totalKanji += list.length;
  for (const k of list) {
    if (kanjiSeen.has(k.char)) warn(n, `kanji ${k.char} ${kanjiSeen.get(k.char)}-darsda ham bor`);
    kanjiSeen.set(k.char, n);
    if (k.onyomi && !/^[\u30a0-\u30ffー・]+$/.test(k.onyomi)) warn(n, `${k.char}: on o'qilishi katakanada bo'lsin`);
    if (k.kunyomi && !/^[\u3040-\u309fー・()]+$/.test(k.kunyomi)) warn(n, `${k.char}: kun o'qilishi hiraganada bo'lsin`);
    if (k.examples.length < 2) warn(n, `${k.char}: misollar kam`);
    for (const e of k.examples) if (!/^[\u3040-\u30ffー]+$/.test(e.r)) warn(n, `${k.char}: o'qilish faqat kanada bo'lsin → ${e.r}`);
  }
}
for (const n of numbers) if (!KANJI.has(n)) warn(n, "kanji yo'q");

console.log(`\nDarslar: ${LESSONS.length}  So'zlar: ${totalWords}  Grammatika: ${totalGrammar}  Savollar: ${totalQuiz}  Gap tuzish: ${totalOrder}  Kanji: ${totalKanji}`);
console.log(problems ? `${problems} ta muammo topildi.` : "Muammo topilmadi ✓");
process.exitCode = problems ? 1 : 0;
