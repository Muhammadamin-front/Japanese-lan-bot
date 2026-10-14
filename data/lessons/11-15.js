export default [
  {
    n: 11,
    title: "Nechta? Qancha vaqt?",
    intro: "Sanash: hisob so'zlari (～つ, ～にん, ～まい, ～だい), davomiylik va takroriylik.",
    vocab: [
      "います||bor (bolasi bor — こどもが います)",
      "かかります||(vaqt, pul) ketmoq",
      "やすみます|休みます|(ishga, maktabga) bormaslik",
      "ひとつ|1つ|bitta",
      "ふたつ|2つ|ikkita",
      "みっつ|3つ|uchta",
      "よっつ|4つ|to'rtta",
      "いつつ|5つ|beshta",
      "むっつ|6つ|oltita",
      "ななつ|7つ|yettita",
      "やっつ|8つ|sakkizta",
      "ここのつ|9つ|to'qqizta",
      "とお|10|o'nta",
      "いくつ||nechta",
      "ひとり|1人|bir kishi",
      "ふたり|2人|ikki kishi",
      "～にん|～人|... kishi",
      "～だい|～台|... dona (mashina, texnika)",
      "～まい|～枚|... varaq (yassi narsa)",
      "～かい|～回|... marta",
      "りんご||olma",
      "みかん||mandarin",
      "サンドイッチ||sendvich",
      "カレー||karri (taom)",
      "アイスクリーム||muzqaymoq",
      "きって|切手|marka",
      "はがき||otkritka",
      "ふうとう|封筒|konvert",
      "りょうしん|両親|ota-ona",
      "きょうだい|兄弟|aka-uka, opa-singillar",
      "あに|兄|akam",
      "おにいさん|お兄さん|aka (birovning)",
      "あね|姉|opam",
      "おねえさん|お姉さん|opa (birovning)",
      "おとうと|弟|ukam",
      "おとうとさん|弟さん|uka (birovning)",
      "いもうと|妹|singlim",
      "いもうとさん|妹さん|singil (birovning)",
      "がいこく|外国|chet el",
      "りゅうがくせい|留学生|chet ellik talaba",
      "クラス||sinf, guruh",
      "～じかん|～時間|... soat (davomiylik)",
      "～しゅうかん|～週間|... hafta",
      "～かげつ|～か月|... oy (davomiylik)",
      "～ねん|～年|... yil",
      "～ぐらい||taxminan ...",
      "どのくらい||qancha (vaqt)",
      "ぜんぶで|全部で|hammasi bo'lib",
      "みんな||hamma",
      "～だけ||faqat ...",
    ],
    grammar: [
      {
        t: "Sonlar va hisob so'zlari",
        p: "ひとつ・ふたつ… ／ ～にん・～まい・～だい・～かい",
        x: `Yapon tilida narsalarni sanashda songa **hisob so'zi** qo'shiladi (o'zbekchadagi «uch **dona**», «ikki **nafar**» kabi):
        - **～つ** — umumiy narsalar (1–10): ひとつ, ふたつ, みっつ ... とお. 11 dan boshlab oddiy son: じゅういち
        - **～にん** — odamlar: **ひとり** (1), **ふたり** (2), さんにん, **よにん** (4)...
        - **～まい** — yassi narsalar: qog'oz, marka, ko'ylak
        - **～だい** — mashina va texnika
        - **～かい** — marta (takror)

        So'rash: **いくつ** (nechta — ～つ uchun), **なん + hisob so'zi** (なんにん, なんまい, なんだい).`,
        ex: [
          ["かいしゃに がいこくじんが なんにん いますか。", "Kompaniyada nechta chet ellik bor?"],
          ["わたしの うちに くるまが ２だい あります。", "Uyimizda 2 ta mashina bor."],
          ["A：みかんを いくつ かいましたか。 ／ B：やっつ かいました。", "A: Nechta mandarin oldingiz? / B: Sakkizta oldim."],
        ],
      },
      {
        t: "Miqdor so'zining o'rni",
        p: "N を ［son+hisob so'zi］ V",
        x: `Miqdor odatda **yuklamadan keyin, fe'ldan oldin** turadi va undan keyin yuklama qo'yilmaydi:
        - りんごを **よっつ** かいました — 4 ta olma oldim
        - がくせいが **ふたり** います — ikki talaba bor

        O'zbek tilida «to'rtta olma» deymiz, yapon tilida esa «olmani to'rtta oldim» kabi tuziladi.`,
        ex: [
          ["りんごを よっつ かいました。", "To'rtta olma oldim."],
          ["１００えんの きってを ５まい ください。", "100 iyenalik markadan 5 ta bering."],
          ["がいこくじんの がくせいが ふたり います。", "Ikki chet ellik talaba bor."],
        ],
      },
      {
        t: "Davomiylik: ～じかん, ～しゅうかん...",
        p: "［muddat］ V ／ どのくらい かかりますか",
        x: `Muddat: ～ふん (daqiqa), ～じかん (soat), ～にち (kun), ～しゅうかん (hafta), ～かげつ (oy), ～ねん (yil).
        - **どのくらい** — qancha vaqt? (vaqt, masofa)
        - **～ぐらい** — taxminan: ３じかん**ぐらい**
        - **かかります** — (vaqt/pul) ketadi

        ! Muddatdan keyin に qo'yilmaydi: ８じかん はたらきます.`,
        ex: [
          ["まいにち ８じかん はたらきます。", "Har kuni 8 soat ishlayman."],
          ["タシケントから とうきょうまで ひこうきで どのくらい かかりますか。", "Toshkentdan Tokiogacha samolyotda qancha vaqt ketadi?"],
          ["３かげつ にほんごを べんきょうしました。", "Uch oy yapon tilini o'qidim."],
        ],
      },
      {
        t: "Takroriylik: ［davr］に ～かい",
        p: "［davr］ に ～かい V",
        x: `«Haftada ikki marta» — **いっしゅうかんに ２かい**. Davrdan keyin **に**, keyin marta soni.`,
        ex: [
          ["いっしゅうかんに ２かい テニスを します。", "Haftada ikki marta tennis o'ynayman."],
          ["１かげつに １かい りょうしんに でんわを かけます。", "Oyiga bir marta ota-onamga qo'ng'iroq qilaman."],
        ],
      },
      {
        t: "Faqat: ～だけ",
        p: "N(miqdor) だけ",
        x: `**だけ** — «faqat», «...gina»: やすみは にちようび**だけ**です — Dam olish faqat yakshanba.`,
        ex: [
          ["やすみは にちようびだけです。", "Dam olish kuni faqat yakshanba."],
          ["にほんじんの ともだちが ひとりだけ います。", "Yapon do'stim faqat bitta."],
        ],
      },
    ],
    quiz: [
      ["りんごを（　）かいました。 — «4 ta olma»", ["よっつ", "よんつ", "しつ", "よにん"], "4 ta narsa — よっつ."],
      ["«Ikki kishi»", ["ふたり", "ににん", "ふたつ", "にり"], "1 va 2 kishi maxsus: ひとり, ふたり."],
      ["きってを ５（　）ください。", ["まい", "だい", "にん", "かい"], "Yassi narsalar — ～まい."],
      ["くるまが ２（　）あります。", ["だい", "まい", "つ", "にん"], "Mashinalar — ～だい."],
      ["いっしゅうかん（　）２かい テニスを します。", ["に", "で", "を", "が"], "Davr + に + marta."],
      ["とうきょうから おおさかまで しんかんせんで（　）かかりますか。 …３じかんぐらいです。", ["どのくらい", "いくつ", "なんにん", "なんまい"], "Vaqt davomiyligi — どのくらい."],
      ["«Uchta olma oldim»", ["りんごを みっつ かいました。", "みっつを りんご かいました。", "りんごの みっつを かいました。", "みっつ りんごを かいました。"], "N を ［miqdor］ V."],
      ["やすみは にちようび（　）です。 — «faqat yakshanba»", ["だけ", "ぐらい", "ずつ", "も"], "«Faqat» — だけ."],
    ],
  },

  {
    n: 12,
    title: "Qiyoslash",
    intro: "Sifat va otlarning o'tgan zamoni, ikki narsani qiyoslash va «eng ...» shakli.",
    vocab: [
      "かんたん|簡単（な）|oson, sodda",
      "ちかい|近い|yaqin",
      "とおい|遠い|uzoq",
      "はやい|速い／早い|tez; erta",
      "おそい|遅い|sekin; kech",
      "おおい|多い|ko'p (odam...)",
      "すくない|少ない|kam",
      "あたたかい|暖かい|iliq",
      "すずしい|涼しい|salqin",
      "あまい|甘い|shirin",
      "からい|辛い|achchiq",
      "おもい|重い|og'ir",
      "かるい|軽い|yengil",
      "きせつ|季節|fasl",
      "はる|春|bahor",
      "なつ|夏|yoz",
      "あき|秋|kuz",
      "ふゆ|冬|qish",
      "てんき|天気|ob-havo",
      "あめ|雨|yomg'ir",
      "ゆき|雪|qor",
      "くもり|曇り|bulutli",
      "ホテル||mehmonxona",
      "くうこう|空港|aeroport",
      "うみ|海|dengiz",
      "せかい|世界|dunyo",
      "パーティー||ziyofat, kecha",
      "おまつり|お祭り|bayram, sayl",
      "すきやき|すき焼き|sukiyaki (taom)",
      "さしみ|刺身|sashimi (xom baliq)",
      "すし||sushi",
      "てんぷら||tempura",
      "ぶたにく|豚肉|cho'chqa go'shti",
      "とりにく|とり肉|tovuq go'shti",
      "ぎゅうにく|牛肉|mol go'shti",
      "レモン||limon",
      "いけばな|生け花|ikebana (gul terish san'ati)",
      "もみじ|紅葉|kuzgi qizil barglar",
      "どちら||qaysi biri (ikkitadan)",
      "どちらも||ikkalasi ham",
      "いちばん||eng",
      "ずっと||ancha, ko'p (qiyosda)",
      "はじめて|初めて|birinchi marta",
      "ただいま||men keldim (uyga qaytganda)",
      "おかえりなさい|お帰りなさい|xush kelibsiz (uyga qaytganga)",
      "すごいですね||zo'r-ku!",
      "つかれました|疲れました|charchadim",
    ],
    grammar: [
      {
        t: "Ot va な-sifatlarning o'tgan zamoni",
        p: "N／な-sifat でした ／ じゃ ありませんでした",
        x: `Ot va な-sifatlar o'tgan zamonda bir xil o'zgaradi:
        - です → **でした** (edi)
        - じゃ ありません → **じゃ ありませんでした** (emas edi)`,
        ex: [
          ["きのうは あめでした。", "Kecha yomg'ir edi."],
          ["きのうの しけんは かんたんでした。", "Kechagi imtihon oson edi."],
          ["せんしゅうは ひまじゃ ありませんでした。", "O'tgan hafta bo'sh emas edim."],
        ],
      },
      {
        t: "い-sifatlarning o'tgan zamoni",
        p: "い-sifat かったです ／ くなかったです",
        x: `い-sifatlarda oxirgi い o'zgaradi:
        - あつい → あつ**かったです** (issiq edi)
        - あつい → あつ**くなかったです** (issiq emas edi)

        ! **いい** → **よかったです** / **よくなかったです**.
        ! Xato: あついでした ✗ — い-sifatga でした qo'shilmaydi!`,
        ex: [
          ["きのうの パーティーは とても たのしかったです。", "Kechagi ziyofat juda maroqli o'tdi."],
          ["りょこうは あまり たのしくなかったです。", "Sayohat unchalik qiziq bo'lmadi."],
          ["A：てんきは どうでしたか。 ／ B：よかったです。", "A: Ob-havo qanday edi? / B: Yaxshi edi."],
        ],
      },
      {
        t: "Qiyoslash: N1 は N2 より ...",
        p: "N1 は N2 より adj です",
        x: `**より** — o'zbekchadagi **«-dan»** (qiyosiy daraja) ga to'liq mos:
        - タシケントは サマルカンド**より** おおきいです — Toshkent Samarqand**dan** katta.

        Yapon tilida sifat o'zgarmaydi («kattaroq» emas, oddiy «katta»).`,
        ex: [
          ["この くるまは あの くるまより おおきいです。", "Bu mashina anavi mashinadan katta."],
          ["タシケントは サマルカンドより おおきいです。", "Toshkent Samarqanddan katta."],
          ["きょうは きのうより ずっと さむいです。", "Bugun kechagidan ancha sovuq."],
        ],
      },
      {
        t: "Qaysi biri ...roq: どちら",
        p: "N1 と N2 と どちらが adj ですか ／ N の ほうが adj です",
        x: `Ikki narsadan qaysi biri ekanini so'rash: **N1 と N2 と どちらが ～ですか**.

        Javob: **N の ほうが ～です** (N ...roq). Ikkalasi bir xil bo'lsa: **どちらも ～です**.

        ! So'roq so'zi ega bo'lganda doim **が** oladi (どちらが, なにが, だれが) — は emas.`,
        ex: [
          ["サッカーと やきゅうと どちらが おもしろいですか。", "Futbol va beysboldan qaysi biri qiziqroq?"],
          ["A：コーヒーと こうちゃと どちらが すきですか。 ／ B：こうちゃの ほうが すきです。", "A: Qahva va qora choydan qaysi birini ko'proq yoqtirasiz? / B: Choyni ko'proq yoqtiraman."],
          ["A：ブハラと ヒヴァと どちらが ふるいですか。 ／ B：どちらも ふるいです。", "A: Buxoro va Xivadan qaysi biri qadimiyroq? / B: Ikkalasi ham qadimiy."],
        ],
      },
      {
        t: "Eng ...: いちばん",
        p: "N1(の なか)で なに／どこ／だれ／いつ が いちばん adj ですか",
        x: `Uch va undan ortiq narsa ichida «eng»ini so'rash. Doira **で** bilan belgilanadi:
        - にほんりょうり**で** なに**が** **いちばん** おいしいですか — Yapon taomlaridan qaysi biri eng mazali?

        Javob: N が いちばん ～です.`,
        ex: [
          ["にほんりょうりで なにが いちばん おいしいですか。", "Yapon taomlaridan qaysi biri eng mazali?"],
          ["１ねんで いつが いちばん さむいですか。", "Yil davomida qachon eng sovuq bo'ladi?"],
          ["A：かぞくで だれが いちばん いそがしいですか。 ／ B：ちちが いちばん いそがしいです。", "A: Oilada kim eng band? / B: Otam eng band."],
        ],
      },
    ],
    quiz: [
      ["きのうは あめ（　）。", ["でした", "かったです", "です", "くなかったです"], "Ot o'tgan zamoni — でした."],
      ["«Kecha issiq edi»", ["きのうは あつかったです。", "きのうは あついでした。", "きのうは あつくでした。", "きのうは あつかったでした。"], "い-sifat: い → かったです."],
      ["«Sayohat yaxshi bo'ldi»: りょこうは（　）。", ["よかったです", "いかったです", "いいでした", "よいでした"], "いい → よかったです."],
      ["タシケントは サマルカンド（　）おおきいです。", ["より", "から", "まで", "ほう"], "Qiyoslash — より (-dan)."],
      ["サッカーと やきゅうと（　）が おもしろいですか。", ["どちら", "どれ", "なに", "どこ"], "Ikkitadan biri — どちら."],
      ["にほんりょうりで なに（　）いちばん おいしいですか。", ["が", "は", "を", "で"], "So'roq so'zi ega bo'lsa — が."],
      ["A：コーヒーと こうちゃと どちらが すきですか。 B：コーヒーの（　）が すきです。", ["ほう", "より", "いちばん", "どちら"], "N の ほうが ..."],
      ["«Imtihon oson emas edi»", ["しけんは かんたんじゃ ありませんでした。", "しけんは かんたんくなかったです。", "しけんは かんたんでした。", "しけんは かんたんじゃ ありません。"], "な-sifat: じゃ ありませんでした."],
    ],
  },

  {
    n: 13,
    title: "Nimani xohlaysiz?",
    intro: "Istak bildirish: ～が ほしいです, ～たいです; maqsad bilan borish va «nimadir, qayergadir».",
    vocab: [
      "あそびます|遊びます|o'ynamoq, dam olib vaqt o'tkazmoq",
      "およぎます|泳ぎます|suzmoq",
      "むかえます|迎えます|kutib olmoq",
      "つかれます|疲れます|charchamoq",
      "けっこんします|結婚します|uylanmoq, turmushga chiqmoq",
      "かいものします|買い物します|xarid qilmoq",
      "しょくじします|食事します|ovqatlanmoq",
      "さんぽします|散歩します|sayr qilmoq",
      "たいへん|大変（な）|qiyin, og'ir",
      "ほしい|欲しい|xohlayman (narsani)",
      "ひろい|広い|keng",
      "せまい|狭い|tor",
      "プール||basseyn",
      "かわ|川|daryo",
      "びじゅつ|美術|tasviriy san'at",
      "つり|釣り|baliq ovi",
      "スキー||chang'i",
      "しゅうまつ|週末|dam olish kunlari",
      "おしょうがつ|お正月|Yangi yil",
      "～ごろ||... atrofida (vaqt)",
      "なにか|何か|nimadir",
      "どこか||qayergadir",
      "のどが かわきます|喉が渇きます|chanqamoq",
      "おなかが すきます||qorni ochmoq",
      "おなかが いっぱいです||qornim to'q",
      "そう しましょう||shunday qilaylik",
      "ごちゅうもんは？|ご注文は？|buyurtmangiz?",
      "ていしょく|定食|kompleks ovqat",
      "ぎゅうどん|牛丼|gyudon (go'shtli guruch)",
      "しょうしょう おまち ください|少々お待ちください|bir oz kuting",
      "べつべつに|別々に|alohida-alohida",
      "なつやすみ|夏休み|yozgi ta'til",
      "ふゆやすみ|冬休み|qishki ta'til",
      "こんど|今度|bu safar; keyingi safar",
    ],
    grammar: [
      {
        t: "Narsani xohlash: N が ほしいです",
        p: "N が ほしいです",
        x: `**ほしい** — «xohlayman, kerak» (narsa haqida). U い-sifat kabi o'zgaradi: ほしくないです, ほしかったです. Xohlanadigan narsa **が** bilan belgilanadi.

        ! ほしい faqat **gapiruvchining** (savolda — tinglovchining) istagi uchun. Uchinchi shaxs haqida «ミラーさんは くるまが ほしいです» deyilmaydi.`,
        ex: [
          ["わたしは あたらしい くるまが ほしいです。", "Men yangi mashina xohlayman."],
          ["いま なにが いちばん ほしいですか。", "Hozir eng ko'p nimani xohlaysiz?"],
          ["A：どんな うちが ほしいですか。 ／ B：ひろい うちが ほしいです。", "A: Qanday uy xohlaysiz? / B: Keng uy xohlayman."],
        ],
      },
      {
        t: "Harakatni xohlash: V たいです",
        p: "V(ます-asos) たいです",
        x: `Fe'lning ～ます shaklidan ます olib tashlanadi va **たい** qo'shiladi — «...gim keladi», «...moqchiman»:
        - いきます → いき**たいです** — borgim keladi
        - たべます → たべ**たいです** — yegim keladi

        たい い-sifat kabi o'zgaradi: たべ**たくないです** (yegim kelmaydi), たべ**たかったです** (yegim kelgan edi). To'ldiruvchi **を** yoki **が** bilan kelishi mumkin.

        ! ほしい kabi, uchinchi shaxs uchun ishlatilmaydi.`,
        ex: [
          ["わたしは にほんへ いきたいです。", "Men Yaponiyaga borgim keladi."],
          ["なにを たべたいですか。", "Nima yegingiz keladi?"],
          ["おなかが いたいですから、なにも たべたくないです。", "Qornim og'riyapti, hech narsa yegim kelmayapti."],
        ],
      },
      {
        t: "Maqsad bilan borish: ～に いきます",
        p: "N(joy) へ V(ます-asos)／N に いきます",
        x: `Qayergadir **nima maqsadda** borishni aytish: fe'lning ます-asosi (yoki harakat oti) + **に** + いきます／きます／かえります.
        - インドりょうりを たべ**に** いきます — hind taomini yegani boraman
        - かいもの**に** いきます — xaridga boraman

        O'zbekchadagi «yegani boraman», «xarid qilgani boraman» shakliga mos.`,
        ex: [
          ["こうべへ インドりょうりを たべに いきます。", "Kobega hind taomini yegani boraman."],
          ["デパートへ かいものに いきます。", "Univermagga xarid qilgani boraman."],
          ["くうこうへ ともだちを むかえに いきます。", "Aeroportga do'stimni kutib olgani boraman."],
        ],
      },
      {
        t: "Nimadir, qayergadir: なにか・どこか",
        p: "なにか ／ どこか",
        x: `So'roq so'zi + **か** = noaniqlik: **なにか** (nimadir), **どこか** (qayergadir), **だれか** (kimdir). Ulardan keyin を va へ tushib qolishi mumkin.

        Taqqoslang:
        - なに**か** たべましたか — Nimadir yedingizmi?
        - なに**も** たべませんでした — Hech narsa yemadim.`,
        ex: [
          ["ふゆやすみは どこか いきましたか。", "Qishki ta'tilda biror joyga bordingizmi?"],
          ["のどが かわきましたから、なにか のみたいです。", "Chanqadim, nimadir ichgim keladi."],
        ],
      },
    ],
    quiz: [
      ["わたしは あたらしい パソコン（　）ほしいです。", ["が", "を", "に", "で"], "ほしい bilan — が."],
      ["«Yaponiyaga borgim keladi»", ["にほんへ いきたいです。", "にほんへ いきほしいです。", "にほんへ いくたいです。", "にほんへ いきましたいです。"], "ます-asos + たい."],
      ["なにも たべ（　）。 — «Hech narsa yegim kelmayapti»", ["たくないです", "たいです", "たかったです", "たいじゃ ありません"], "たい い-sifat kabi: たくないです."],
      ["デパートへ かいもの（　）いきます。", ["に", "を", "で", "へ"], "Maqsad — に."],
      ["くうこうへ ともだちを むかえ（　）いきます。", ["に", "で", "を", "が"], "ます-asos + に + いきます."],
      ["のどが かわきました。（　）のみたいです。 — «nimadir»", ["なにか", "なにも", "なに", "なにが"], "Noaniq narsa — なにか."],
      ["なつやすみは（　）いきましたか。 — «biror joyga»", ["どこか", "どこも", "どこ", "どこが"], "Noaniq joy — どこか."],
      ["Qaysi gap XATO?", ["ミラーさんは くるまが ほしいです。", "わたしは くるまが ほしいです。", "わたしは くるまを かいたいです。", "なにが ほしいですか。"], "ほしい uchinchi shaxs uchun ishlatilmaydi."],
    ],
  },

  {
    n: 14,
    title: "Iltimos qilish: て-shakl",
    intro: "Fe'l guruhlari va て-shakl. Iltimos (～てください), davom etayotgan harakat (～ています), yordam taklifi.",
    vocab: [
      "つけます||yoqmoq (chiroq, konditsioner)",
      "けします|消します|o'chirmoq",
      "あけます|開けます|ochmoq",
      "しめます|閉めます|yopmoq",
      "いそぎます|急ぎます|shoshilmoq",
      "まちます|待ちます|kutmoq",
      "もちます|持ちます|ushlamoq, ko'tarmoq",
      "とります|取ります|olmoq, uzatmoq",
      "てつだいます|手伝います|yordam bermoq",
      "よびます|呼びます|chaqirmoq",
      "はなします|話します|gapirmoq",
      "つかいます|使います|ishlatmoq",
      "とめます|止めます|to'xtatmoq",
      "みせます|見せます|ko'rsatmoq",
      "すわります|座ります|o'tirmoq",
      "たちます|立ちます|turmoq (o'rnidan)",
      "はいります|入ります|kirmoq",
      "でます|出ます|chiqmoq",
      "ふります|降ります|(yomg'ir, qor) yog'moq",
      "コピーします||nusxa ko'chirmoq",
      "でんき|電気|chiroq; elektr",
      "エアコン||konditsioner",
      "パスポート||pasport",
      "なまえ|名前|ism",
      "じゅうしょ|住所|manzil",
      "ちず|地図|xarita",
      "しお|塩|tuz",
      "さとう|砂糖|shakar",
      "もんだい|問題|savol, masala",
      "こたえ|答え|javob",
      "よみかた|読み方|o'qilishi",
      "まっすぐ||to'g'ri (yo'nalish)",
      "ゆっくり||sekin, shoshmasdan",
      "すぐ||darhol",
      "また||yana",
      "あとで||keyinroq",
      "もう すこし|もう少し|yana ozgina",
      "さあ||qani, hay",
      "みぎへ まがって ください|右へ曲がってください|o'ngga buriling",
      "おつり|お釣り|qaytim",
    ],
    grammar: [
      {
        t: "Fe'l guruhlari",
        p: "I guruh ・ II guruh ・ III guruh",
        x: `Yapon fe'llari ～ます oldidagi tovushga qarab 3 guruhga bo'linadi:
        - **I guruh**: ます oldida **い-qator** tovushi — か**き**ます, の**み**ます, ま**ち**ます, かえ**り**ます
        - **II guruh**: ます oldida **え-qator** tovushi — たべます, あけます, みせます. Hamda ba'zi い-qatorlilar: **みます, おきます, かります, あびます, できます**...
        - **III guruh**: **します** (va ～します bilan tugaydiganlar) hamda **きます**.

        ! Asosiy qoida: ます oldi — い-tovush → I guruh, え-tovush → II guruh. Istisnolarni yodlab qo'ying.`,
        ex: [
          ["かきます・のみます・まちます・かえります", "I guruh fe'llari"],
          ["たべます・ねます・みます・おきます", "II guruh fe'llari"],
          ["します・きます・べんきょうします", "III guruh fe'llari"],
        ],
      },
      {
        t: "て-shaklni yasash",
        p: "V て",
        x: `**I guruh** — ます oldidagi tovushga qarab:
        - き → **いて**: かきます → かいて (! いきます → **いって** — istisno)
        - ぎ → **いで**: いそぎます → いそいで
        - い・ち・り → **って**: かいます → かって, まちます → まって, かえります → かえって
        - み・び・に → **んで**: のみます → のんで, よびます → よんで
        - し → **して**: はなします → はなして

        **II guruh**: ます → て — たべます → たべて, みます → みて
        **III guruh**: します → して, きます → きて

        ! Bu jadvalni qo'shiq qilib yodlashadi — ko'p takrorlang, keyingi barcha darslarda kerak bo'ladi!`,
        ex: [
          ["かいて・いそいで・かって・まって・のんで・はなして", "I guruh: て-shakllar"],
          ["たべて・みて・おきて・して・きて", "II va III guruh: て-shakllar"],
        ],
      },
      {
        t: "Iltimos: V て ください",
        p: "V て ください",
        x: `**～て ください** — «...ing, iltimos». Muloyim iltimos yoki ko'rsatma.

        Yanada muloyim qilish uchun boshida **すみませんが** (kechirasiz, lekin...) qo'shiladi.`,
        ex: [
          ["すみませんが、この かんじの よみかたを おしえて ください。", "Kechirasiz, bu kanjining o'qilishini o'rgatib yuboring."],
          ["ここに じゅうしょと なまえを かいて ください。", "Bu yerga manzil va ismingizni yozing."],
          ["もう すこし ゆっくり はなして ください。", "Yana biroz sekinroq gapiring, iltimos."],
        ],
      },
      {
        t: "Davom etayotgan harakat: V て います",
        p: "V て います",
        x: `**～て います** — hozir davom etayotgan harakat: «...yapti», «...moqda».
        - いま あめが ふって います — Hozir yomg'ir yog'yapti.

        O'tgan zamonda: ～て いました (...ayotgan edi).`,
        ex: [
          ["ミラーさんは いま でんわを かけて います。", "Miller hozir telefon qilyapti."],
          ["A：いま あめが ふって いますか。 ／ B：いいえ、ふって いません。", "A: Hozir yomg'ir yog'yaptimi? / B: Yo'q, yog'mayapti."],
        ],
      },
      {
        t: "Yordam taklifi: V ましょうか",
        p: "V ましょうか",
        x: `**～ましょうか** — «...ib beraymi?» Gapiruvchi tinglovchiga yordam taklif qiladi.

        Javob: ええ、おねがいします (Ha, iltimos) yoki いいえ、けっこうです (Yo'q, rahmat).`,
        ex: [
          ["A：にもつを もちましょうか。 ／ B：すみません。おねがいします。", "A: Yukingizni ko'tarishaymi? / B: Rahmat, iltimos."],
          ["タクシーを よびましょうか。", "Taksi chaqiraymi?"],
          ["さむいですね。まどを しめましょうか。", "Sovuq-a. Derazani yopaymi?"],
        ],
      },
    ],
    quiz: [
      ["かきます → て-shakl", ["かいて", "かきて", "かって", "かんで"], "き → いて."],
      ["のみます → て-shakl", ["のんで", "のみて", "のって", "のいで"], "み → んで."],
      ["まちます → て-shakl", ["まって", "まちて", "まんで", "まいて"], "ち → って."],
      ["いきます → て-shakl", ["いって", "いいて", "いきて", "いんで"], "Istisno: いきます → いって."],
      ["みます → て-shakl", ["みて", "みって", "みんで", "みいて"], "II guruh: ます → て."],
      ["ちょっと まって（　）。 — «Biroz kuting»", ["ください", "います", "ましょう", "ません"], "Iltimos — ～て ください."],
      ["ミラーさんは いま でんわを かけて（　）。 — «hozir qo'ng'iroq qilyapti»", ["います", "ください", "あります", "ました"], "Davom etayotgan harakat — ～て います."],
      ["A：にもつを もち（　）。 B：すみません。おねがいします。 — «Ko'tarishaymi?»", ["ましょうか", "ませんか", "てください", "たいです"], "Yordam taklifi — ～ましょうか."],
    ],
  },

  {
    n: 15,
    title: "Ruxsat va taqiq",
    intro: "～ても いいですか (mumkinmi?), ～ては いけません (mumkin emas), holat bildiruvchi ～て います.",
    vocab: [
      "おきます|置きます|qo'ymoq",
      "つくります|作ります|yasamoq, tayyorlamoq",
      "うります|売ります|sotmoq",
      "しります|知ります|bilib olmoq",
      "すみます|住みます|yashamoq",
      "けんきゅうします|研究します|tadqiq qilmoq",
      "しりょう|資料|material, hujjatlar",
      "カタログ||katalog",
      "じこくひょう|時刻表|jadval (transport)",
      "ふく|服|kiyim",
      "せいひん|製品|mahsulot",
      "ソフト||dasturiy ta'minot",
      "でんしじしょ|電子辞書|elektron lug'at",
      "けいざい|経済|iqtisodiyot",
      "しやくしょ|市役所|shahar hokimiyati",
      "こうこう|高校|o'rta maktab (litsey)",
      "はいしゃ|歯医者|tish shifokori",
      "どくしん|独身|bo'ydoq, turmush qurmagan",
      "ばんごう|番号|raqam",
      "でんわばんごう|電話番号|telefon raqami",
      "おもいだします|思い出します|eslamoq",
      "いらっしゃいます||bor, bo'lmoq (hurmat)",
      "とくに|特に|ayniqsa",
      "せんもん|専門|mutaxassislik",
      "しょうらい|将来|kelajak",
      "いいですよ||mayli, bo'ladi",
    ],
    grammar: [
      {
        t: "Ruxsat: V ても いいです",
        p: "V て も いいです(か)",
        x: `**～ても いいです** — «...sa bo'ladi», «...sangiz mumkin». So'roq shakli **～ても いいですか** — ruxsat so'rash: «...sam maylimi?»

        Javoblar:
        - ええ、いいですよ。／ どうぞ。 — Ha, mayli. / Marhamat.
        - すみません、ちょっと…。 — Kechirasiz, biroz... (muloyim rad)`,
        ex: [
          ["しゃしんを とっても いいですか。", "Surat olsam maylimi?"],
          ["A：この カタログを もらっても いいですか。 ／ B：ええ、いいですよ。どうぞ。", "A: Bu katalogni olsam bo'ladimi? / B: Ha, mayli. Marhamat."],
          ["ここに すわっても いいですか。", "Shu yerga o'tirsam maylimi?"],
        ],
      },
      {
        t: "Taqiq: V ては いけません",
        p: "V て は いけません",
        x: `**～ては いけません** — «...ish mumkin emas». Qat'iy taqiq, odatda qoida yoki yuqoridan pastga gapirganda ishlatiladi.

        Ruxsat so'roviga rad javobi sifatida: いいえ、いけません.`,
        ex: [
          ["ここで たばこを すっては いけません。", "Bu yerda sigaret chekish mumkin emas."],
          ["びじゅつかんで しゃしんを とっては いけません。", "Muzeyda surat olish mumkin emas."],
          ["A：ここに くるまを とめても いいですか。 ／ B：いいえ、いけません。", "A: Mashinani shu yerga qo'ysam bo'ladimi? / B: Yo'q, mumkin emas."],
        ],
      },
      {
        t: "Holat: V て います",
        p: "V て います (natija holati)",
        x: `14-darsda ～て います davom etayotgan harakatni bildirgan edi. Ba'zi fe'llarda u harakat natijasida **yuzaga kelgan holatni** bildiradi:
        - けっこんして います — uylangan (turmush qurgan holatda)
        - すんで います — yashaydi (yashab turibdi)
        - もって います — bor, egalik qiladi
        - しって います — biladi`,
        ex: [
          ["わたしは タシケントに すんで います。", "Men Toshkentda yashayman."],
          ["マリカさんは けっこんして います。", "Malika turmush qurgan."],
          ["わたしは カメラを もって います。", "Mening fotoapparatim bor."],
        ],
      },
      {
        t: "Bilaman / bilmayman",
        p: "しって います ／ しりません",
        x: `**しります** — «bilib olmoq». «Bilaman» — **しって います**.

        ! Inkor shakli **しりません** (しって いません emas!).`,
        ex: [
          ["A：やまださんの でんわばんごうを しって いますか。 ／ B：いいえ、しりません。", "A: Yamadaning telefon raqamini bilasizmi? / B: Yo'q, bilmayman."],
          ["わたしは その ひとを よく しって います。", "Men u odamni yaxshi bilaman."],
        ],
      },
      {
        t: "Odat va kasb: V て います",
        p: "V て います (doimiy faoliyat)",
        x: `～て います uzoq davom etadigan faoliyatni — **kasb**, **o'qish**, **mahsulot ishlab chiqarish**ni ham bildiradi:
        - だいがくで けいざいを べんきょうして います — universitetda iqtisodiyotni o'qiyapti (talaba)
        - IMCは コンピューターソフトを つくって います — IMC kompyuter dasturlarini ishlab chiqaradi`,
        ex: [
          ["いもうとは だいがくで けいざいを べんきょうして います。", "Singlim universitetda iqtisodiyotni o'qiydi."],
          ["この みせは いろいろな ふくを うって います。", "Bu do'kon turli kiyimlar sotadi."],
          ["あには びょういんで はたらいて います。", "Akam kasalxonada ishlaydi."],
        ],
      },
    ],
    quiz: [
      ["しゃしんを とって（　）いいですか。", ["も", "は", "を", "が"], "Ruxsat — ～ても いいですか."],
      ["ここで たばこを すって（　）いけません。", ["は", "も", "を", "が"], "Taqiq — ～ては いけません."],
      ["«Men Toshkentda yashayman»", ["わたしは タシケントに すんで います。", "わたしは タシケントで すんで います。", "わたしは タシケントに すみます いる。", "わたしは タシケントを すんで います。"], "すみます joy bilan — に."],
      ["A：やまださんを しって いますか。 B：いいえ、（　）。", ["しりません", "しって いません", "しりませんでした", "しって ないです"], "«Bilmayman» — しりません."],
      ["A：この ペンを つかっても いいですか。 B：ええ、（　）。", ["いいですよ", "いけません", "ちょっと…", "しりません"], "Ruxsat berish — いいですよ."],
      ["マリカさんは（　）。 — «Malika turmush qurgan»", ["けっこんして います", "けっこんします", "けっこんしましょう", "けっこんして ください"], "Natija holati — ～て います."],
      ["あには びょういんで（　）。 — «Akam kasalxonada ishlaydi»", ["はたらいて います", "はたらきて います", "はたらって います", "はたらいて あります"], "はたらきます → はたらいて; kasb — ～て います."],
      ["びじゅつかんで しゃしんを（　）いけません。", ["とっては", "とっても", "とりては", "とるは"], "とります → とって + は いけません."],
    ],
  },
];
