// Kana jadvallari va romaji ↔ kana konvertori.
// Bu modul ham brauzerda, ham serverda (test baholash uchun) ishlatiladi.

const PAIRS = `
a あ i い u う e え o お
ka か ki き ku く ke け ko こ  sa さ shi し si し su す se せ so そ
ta た chi ち ti ち tsu つ tu つ te て to と  na な ni に nu ぬ ne ね no の
ha は hi ひ fu ふ hu ふ he へ ho ほ  ma ま mi み mu む me め mo も
ya や yu ゆ yo よ  ra ら ri り ru る re れ ro ろ  wa わ wo を n ん
ga が gi ぎ gu ぐ ge げ go ご  za ざ ji じ zi じ zu ず ze ぜ zo ぞ
da だ di ぢ du づ de で do ど  ba ば bi び bu ぶ be べ bo ぼ  pa ぱ pi ぴ pu ぷ pe ぺ po ぽ
kya きゃ kyu きゅ kyo きょ  sha しゃ shu しゅ sho しょ sya しゃ syu しゅ syo しょ
cha ちゃ chu ちゅ cho ちょ tya ちゃ tyu ちゅ tyo ちょ cya ちゃ cyu ちゅ cyo ちょ
nya にゃ nyu にゅ nyo にょ  hya ひゃ hyu ひゅ hyo ひょ  mya みゃ myu みゅ myo みょ
rya りゃ ryu りゅ ryo りょ  gya ぎゃ gyu ぎゅ gyo ぎょ
ja じゃ ju じゅ jo じょ jya じゃ jyu じゅ jyo じょ zya じゃ zyu じゅ zyo じょ
dya ぢゃ dyu ぢゅ dyo ぢょ  bya びゃ byu びゅ byo びょ  pya ぴゃ pyu ぴゅ pyo ぴょ
fa ふぁ fi ふぃ fe ふぇ fo ふぉ  she しぇ che ちぇ je じぇ ye いぇ
thi てぃ dhi でぃ thu てゅ dhu でゅ twu とぅ dwu どぅ wi うぃ we うぇ
va ゔぁ vi ゔぃ vu ゔ ve ゔぇ vo ゔぉ  tsa つぁ tsi つぃ tse つぇ tso つぉ
xa ぁ xi ぃ xu ぅ xe ぇ xo ぉ la ぁ li ぃ lu ぅ le ぇ lo ぉ
xya ゃ xyu ゅ xyo ょ lya ゃ lyu ゅ lyo ょ xtu っ ltu っ xtsu っ xwa ゎ
`;

const R2K = {};
const K2R = {};
{
  const tokens = PAIRS.trim().split(/\s+/);
  for (let i = 0; i < tokens.length; i += 2) {
    const [r, k] = [tokens[i], tokens[i + 1]];
    R2K[r] = k;
    if (!(k in K2R)) K2R[k] = r;
  }
  Object.assign(K2R, { ぢ: "ji", づ: "zu", てぃ: "ti", でぃ: "di" });
}

const isLatinConsonant = (c) => !!c && /[bcdfghjklmpqrstvwxyz]/.test(c);

export function toHiragana(s) {
  return String(s).replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
}

export function toKatakana(s) {
  return String(s).replace(/[ぁ-ゖ]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0x60));
}

/** "watashi" → "わたし", "ko-hi-" → "こーひー". Kana va boshqa belgilar o'zgarmaydi. */
export function romajiToHiragana(input) {
  const s = String(input).toLowerCase();
  let out = "";
  for (let i = 0; i < s.length; ) {
    const c = s[i];
    if (!/[a-z'-]/.test(c)) {
      out += c;
      i++;
      continue;
    }
    if (c === "-") {
      out += "ー";
      i++;
      continue;
    }
    if (c === "'") {
      i++;
      continue;
    }
    if (c === "n") {
      const n1 = s[i + 1];
      const n2 = s[i + 2];
      if (n1 === "'") {
        out += "ん";
        i += 2;
        continue;
      }
      if (n1 === "n") {
        out += "ん";
        i += n2 && /[aiueoy]/.test(n2) ? 1 : 2;
        continue;
      }
      if (!n1 || !/[aiueoy]/.test(n1)) {
        out += "ん";
        i++;
        continue;
      }
    }
    if (isLatinConsonant(c) && s[i + 1] === c) {
      out += "っ";
      i++;
      continue;
    }
    if (c === "t" && s[i + 1] === "c" && s[i + 2] === "h") {
      out += "っ";
      i++;
      continue;
    }
    let matched = false;
    for (let len = 4; len >= 1; len--) {
      const chunk = s.slice(i, i + len);
      if (chunk.length === len && R2K[chunk]) {
        out += R2K[chunk];
        i += len;
        matched = true;
        break;
      }
    }
    if (!matched) {
      out += c;
      i++;
    }
  }
  return out;
}

/** "わたし" → "watashi", "コーヒー" → "koohii". Yozish (wāpuro) uslubida. */
export function toRomaji(input) {
  const s = toHiragana(input);
  let out = "";
  for (let i = 0; i < s.length; ) {
    const two = s.slice(i, i + 2);
    if (two.length === 2 && K2R[two]) {
      out += K2R[two];
      i += 2;
      continue;
    }
    const c = s[i];
    if (c === "っ") {
      const next = K2R[s.slice(i + 1, i + 3)] || K2R[s[i + 1]] || "";
      out += next.startsWith("ch") ? "t" : isLatinConsonant(next[0]) ? next[0] : "";
      i++;
      continue;
    }
    if (c === "ん") {
      const next = K2R[s[i + 1]] || "";
      out += /^[aiueoy]/.test(next) ? "n'" : "n";
      i++;
      continue;
    }
    if (c === "ー") {
      const last = out.slice(-1);
      out += "aiueo".includes(last) && last ? last : "-";
      i++;
      continue;
    }
    out += K2R[c] ?? c;
    i++;
  }
  return out;
}

const VOWEL_OF = {};
for (const [v, chars] of [
  ["あ", "あかさたなはまやらわがざだばぱぁゃゎ"],
  ["い", "いきしちにひみりぎじぢびぴぃ"],
  ["う", "うくすつぬふむゆるぐずづぶぷぅゅゔ"],
  ["え", "えけせてねへめれげぜでべぺぇ"],
  ["お", "おこそとのほもよろをごぞどぼぽぉょ"],
]) {
  for (const ch of chars) VOWEL_OF[ch] = v;
}

/** Javoblarni solishtirish uchun: kana/romaji → hiragana, belgilar olib tashlanadi, ー cho'ziq unliga aylanadi. */
export function normalizeAnswer(value) {
  const h = toHiragana(romajiToHiragana(String(value ?? "").trim())).replace(
    /[\s～〜~・。、.,!?！？「」『』()（）［］\[\]…]/g,
    "",
  );
  let out = "";
  for (const ch of h) out += ch === "ー" ? VOWEL_OF[out.slice(-1)] || "" : ch;
  return out.replace(/は$/, "わ");
}

export function matchesKana(given, expected, alternatives = []) {
  const g = normalizeAnswer(given);
  if (!g) return false;
  return [expected, ...alternatives].some((e) => e && normalizeAnswer(e) === g);
}

/* ---------------- Kana jadvallari ---------------- */

export const KANA_GROUPS = [
  { id: "basic", title: "Asosiy harflar (gojūon)" },
  { id: "dakuten", title: "Dakuten va handakuten (が・ぱ)" },
  { id: "yoon", title: "Yōon — qo'shma bo'g'inlar" },
];

const LAYOUT = {
  basic: [
    ["a", "i", "u", "e", "o"],
    ["ka", "ki", "ku", "ke", "ko"],
    ["sa", "shi", "su", "se", "so"],
    ["ta", "chi", "tsu", "te", "to"],
    ["na", "ni", "nu", "ne", "no"],
    ["ha", "hi", "fu", "he", "ho"],
    ["ma", "mi", "mu", "me", "mo"],
    ["ya", null, "yu", null, "yo"],
    ["ra", "ri", "ru", "re", "ro"],
    ["wa", null, null, null, "wo"],
    ["n", null, null, null, null],
  ],
  dakuten: [
    ["ga", "gi", "gu", "ge", "go"],
    ["za", "ji", "zu", "ze", "zo"],
    ["da", "di", "du", "de", "do"],
    ["ba", "bi", "bu", "be", "bo"],
    ["pa", "pi", "pu", "pe", "po"],
  ],
  yoon: [
    ["kya", "kyu", "kyo"],
    ["sha", "shu", "sho"],
    ["cha", "chu", "cho"],
    ["nya", "nyu", "nyo"],
    ["hya", "hyu", "hyo"],
    ["mya", "myu", "myo"],
    ["rya", "ryu", "ryo"],
    ["gya", "gyu", "gyo"],
    ["ja", "ju", "jo"],
    ["bya", "byu", "byo"],
    ["pya", "pyu", "pyo"],
  ],
};

const DISPLAY = { di: "ji", du: "zu" };
const VARIANTS = {
  shi: ["si"], chi: ["ti"], tsu: ["tu"], fu: ["hu"], ji: ["zi", "di"], zu: ["du"], wo: ["o"],
  n: ["nn", "n'"], sha: ["sya"], shu: ["syu"], sho: ["syo"], cha: ["tya", "cya"], chu: ["tyu", "cyu"],
  cho: ["tyo", "cyo"], ja: ["zya", "jya"], ju: ["zyu", "jyu"], jo: ["zyo", "jyo"],
};

function makeCell(key, script, group) {
  if (!key) return null;
  const hira = R2K[key];
  const romaji = DISPLAY[key] ?? key;
  return {
    char: script === "katakana" ? toKatakana(hira) : hira,
    romaji,
    accept: [...new Set([romaji, key, ...(VARIANTS[romaji] ?? [])])],
    group,
  };
}

/** Jadval ko'rinishi uchun qatorlar (bo'sh kataklar null). */
export function kanaRows(script, group) {
  return LAYOUT[group].map((row) => row.map((key) => makeCell(key, script, group)));
}

/** Test uchun tekis ro'yxat. */
export function kanaCells(script, groups = ["basic", "dakuten", "yoon"]) {
  return groups.flatMap((g) => LAYOUT[g].flat().filter(Boolean).map((key) => makeCell(key, script, g)));
}
