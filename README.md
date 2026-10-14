# 日本語 Nihongo Ustoz

**Minna no Nihongo 1–2** (みんなの日本語 初級 I・II) kitoblari tartibida tuzilgan yapon tili o'quv platformasi. O'quvchilar uchun darslar, mashqlar va tekshiruvlar, ustoz uchun boshqaruv paneli bor.

## Ishga tushirish

Faqat **Node.js 22.13 yoki undan yangisi** kerak. Qo'shimcha paket o'rnatish shart emas.

```bash
npm start
```

Brauzerda oching: **http://localhost:3000**

Birinchi ishga tushirishda ustoz hisobi yaratiladi:

| Login   | Parol      |
|---------|------------|
| `ustoz` | `ustoz123` |

**Kirgandan keyin parolni o'zgartiring** (o'ng yuqoridagi menyu → «Parolni o'zgartirish»).

Boshqa login/parol bilan boshlash uchun:

```bash
ADMIN_USERNAME=sensei ADMIN_PASSWORD=maxfiyparol npm start
```

Port o'zgartirish: `PORT=8080 npm start`. Server ishga tushganda terminalda bir xil Wi-Fi tarmog'idagi o'quvchilar ochishi mumkin bo'lgan manzil ham ko'rsatiladi (masalan `http://192.168.0.12:3000`).

## O'quvchi uchun

1. **Ro'yxatdan o'tish / kirish.**
2. **Kana testi** — hiragana va katakana bo'yicha (sukut bo'yicha 20 savol, o'tish bali 80%). Ikkalasidan o'tgach 1-dars ochiladi. Kana jadvallari (bosilganda talaffuzi eshitiladi) va bo'limlar bo'yicha mashq bor.
3. **Har bir dars 5 bosqichdan iborat:**
   - **So'zlar** — ro'yxat (kana, kanji, romaji, o'zbekcha ma'nosi, ovoz) va kartochkalar.
   - **Grammatika** — har bir qolipning o'zbekcha izohi va misollari (ovozli).
   - **Kanji** — darsning kanjilari: on/kun o'qilishi, ma'nosi, chiziqlar soni, misol so'zlar va **yozilish tartibi animatsiyasi**.
   - **Mashqlar** — so'zlar, grammatika, kanji yoki aralash. Har javob darhol tekshiriladi va izoh beriladi.
   - **Tekshiruv** — so'z + grammatika + kanji + oldingi darslardan takrorlash. Kamida 70% to'plansa **keyingi dars ochiladi**.
4. **Kanji sahifasi** — barcha 349 kanji darslar bo'yicha, qidiruv (kanji, ma'no yoki o'qilish — `hito` ham ishlaydi) va ochiq darslardan «Kanji takrorlash».
5. **Xatolarim** — xato qilingan so'z va kanjilar avtomatik yig'iladi; ketma-ket 2 marta to'g'ri javob berilsa ro'yxatdan chiqadi.

Savol turlari: ma'nosini tanlash, yaponchasini tanlash, yaponcha yozish (kana yoki romaji — `watashi` → わたし), bo'sh joyni to'ldirish, gap tuzish (yapon tilining erkin so'z tartibi hisobga olinadi), kanji ma'nosi, kanjili so'zning o'qilishi (tanlash yoki yozish), ma'nosiga mos kanjini topish.

## Ustoz paneli

- **O'quvchilar** — umumiy statistika, har bir o'quvchining kana holati, o'tgan darslari, o'rtacha natijasi, zaif so'zlari, oxirgi faolligi; so'nggi faollik lentasi.
- **O'quvchi sahifasi** — barcha urinishlar tarixi, darslar bo'yicha progress (so'z/grammatika ko'rilganmi, urinishlar, eng yaxshi natija), zaif so'zlar. Amallar: darsni qo'lda ochish/yopish, «o'tgan» deb belgilash, 1–N darslarni ochish, kanani o'tgan deb belgilash, parolni tiklash, progressni tozalash, o'chirish.
- **Darslar kontenti** — har bir darsning so'zlari, grammatika izohlari, misollari, kanjilari va savollarini tahrirlash, qo'shish, o'chirish. «Asl holiga qaytarish» tugmasi darsni dastlabki holatiga qaytaradi.
- **Sozlamalar** — o'tish ballari, savollar soni, kana testining majburiyligi, darslar ketma-ket ochilishi, ro'yxatdan o'tishni yopish yoki **taklif kodi** bilan cheklash.

## Kontent

`data/lessons/` papkasida 50 dars: **1726 so'z, 223 grammatika bandi, 400 variantli savol** va misollardan avtomatik yasaladigan 465 ta gap tuzish mashqi. `data/kanji/` papkasida **349 kanji** (JLPT N5–N4), har biri dars so'zlariga bog'langan. Mavzular va grammatika tartibi Minna no Nihongo darslariga mos; izohlar va misollar o'zbek o'quvchisi uchun yangidan yozilgan (yapon va o'zbek tillarining o'xshashliklari — SOV tartib, qo'shimchalar — alohida ta'kidlangan).

> So'zlar ro'yxati kitobdagi bilan 1:1 bir xil bo'lmasligi mumkin. Ustoz panelida istalgan so'z yoki izohni tuzatish mumkin.

Kontent fayllarini tahrirlagandan keyin tekshirish:

```bash
npm run check
```

Fayllar faqat bazada hali yo'q darslarni yuklaydi. Fayldagi o'zgarishni mavjud darsga qo'llash uchun ustoz panelida o'sha darsni «Asl holiga qaytarish» qiling.

## Tuzilishi

```
server.js              HTTP server (tashqi kutubxonalarsiz)
src/db.js              SQLite baza (node:sqlite), sozlamalar, kontent yuklash
src/auth.js            parollar (scrypt), sessiyalar
src/quiz.js            savollar yaratish va baholash (javoblar serverda tekshiriladi)
src/progress.js        darslar ochilish qoidalari
src/routes/            API: auth, student, admin
public/                brauzer ilovasi (index.html, css, js/pages/*)
public/js/kana.js      kana jadvallari va romaji ↔ kana konvertori (server bilan umumiy)
data/lessons/          50 dars kontenti
data/kanji/            darslar bo'yicha 349 kanji
public/js/kanjiView.js kanji kartochkasi va yozilish tartibi animatsiyasi
storage/nihongo.db     ma'lumotlar bazasi (avtomatik yaratiladi)
```

**Zaxira nusxa:** serverni to'xtatib, `storage/nihongo.db` faylini nusxalang.

Ovozli o'qish brauzerning yaponcha ovozidan foydalanadi (macOS/iOS'da «Kyoko», Chrome'da Google ovozi).

Kanjilarning yozilish tartibi [KanjiVG](https://kanjivg.tagaini.net/) loyihasidan (Ulrich Apel, CC BY-SA 3.0) internet orqali yuklanadi. Internet bo'lmasa, qolgan barcha qismlar ishlaydi — faqat animatsiya ko'rinmaydi.
# Japanese-lan-bot
