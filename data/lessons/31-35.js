export default [
  {
    n: 31,
    title: "Rejalar va niyatlar",
    intro: "Irodali shakl (いこう), ～と おもって います, ～つもりです, ～よていです.",
    vocab: [
      "つづけます|続けます|davom ettirmoq",
      "みつけます|見つけます|topmoq",
      "とります|取ります|(ta'til) olmoq",
      "うけます|受けます|(imtihon) topshirmoq",
      "もうしこみます|申し込みます|ariza bermoq, yozilmoq",
      "きゅうけいします|休憩します|tanaffus qilmoq",
      "れんきゅう|連休|ketma-ket dam olish kunlari",
      "さくぶん|作文|insho",
      "はっぴょう|発表|taqdimot, ma'ruza",
      "てんらんかい|展覧会|ko'rgazma",
      "けっこんしき|結婚式|to'y marosimi",
      "おそうしき|お葬式|dafn marosimi",
      "しき|式|marosim",
      "ほんしゃ|本社|bosh ofis",
      "してん|支店|filial",
      "きょうかい|教会|cherkov",
      "だいがくいん|大学院|magistratura",
      "どうぶつえん|動物園|hayvonot bog'i",
      "おんせん|温泉|issiq buloq (onsen)",
      "おきゃくさん|お客さん|mehmon, mijoz",
      "だれか||kimdir",
      "～の ほう||... tomon",
      "ずっと||doimo, uzoq vaqt",
      "のこります|残ります|qolmoq",
      "にゅうがくしけん|入学試験|kirish imtihoni",
      "つきに|月に|oyiga",
      "むら|村|qishloq",
      "そつぎょうします|卒業します|bitirmoq",
      "えいがかん|映画館|kinoteatr",
      "いや|嫌（な）|yoqimsiz",
      "そら|空|osmon",
      "とじます|閉じます|yopmoq (ko'z, kitob)",
      "とかい|都会|katta shahar",
      "じゆうに|自由に|erkin",
    ],
    grammar: [
      {
        t: "Irodali shakl",
        p: "V(irodali): いこう・たべよう・しよう",
        x: `Irodali shakl — ～ましょう ning **oddiy uslubdagi** shakli («...aylik», «...ay»):

        - **I guruh**: い-tovush → **お-tovush + う**: いきます → い**こう**, のみます → の**もう**, かいます → か**おう**, まちます → ま**とう**
        - **II guruh**: ます → **よう**: たべます → たべ**よう**, みます → み**よう**
        - **III guruh**: します → **しよう**, きます → **こよう**

        Do'stlar orasida: ちょっと やすもう — Biroz dam olaylik.`,
        ex: [
          ["A：ちょっと やすまない？ ／ B：うん、やすもう。", "A: Biroz dam olmaymizmi? / B: Ha, dam olaylik."],
          ["いっしょに かえろう。", "Birga qaytaylik."],
          ["A：てつだおうか。 ／ B：ありがとう。", "A: Yordam beraymi? / B: Rahmat."],
        ],
      },
      {
        t: "Niyat: ～(よ)うと おもって います",
        p: "V(irodali) と おもって います",
        x: `**V(irodali) + と おもって います** — «...moqchiman», «...ish niyatidaman». Bir muddatdan beri o'ylab yurgan niyat.

        ～と おもいます ham bo'ladi, lekin u shu daqiqada tug'ilgan fikr. ～と おもって います esa uchinchi shaxs uchun ham ishlatiladi.`,
        ex: [
          ["しゅうまつは うみへ いこうと おもって います。", "Dam olish kunlari dengizga bormoqchiman."],
          ["らいねん けっこんしようと おもって います。", "Kelasi yil turmush qurish niyatidaman."],
          ["A：なつやすみは なにを しますか。 ／ B：くにへ かえろうと おもって います。", "A: Yozgi ta'tilda nima qilasiz? / B: Vatanimga qaytmoqchiman."],
        ],
      },
      {
        t: "Qat'iy niyat: ～つもりです",
        p: "V(lug'at)／V ない つもりです",
        x: `**～つもりです** — qat'iy niyat yoki qaror: «...moqchiman», «...ishga qaror qildim».
        - Inkor niyat: V **ない** つもりです — «...maslikka qaror qildim»`,
        ex: [
          ["くにへ かえっても、にほんごの べんきょうを つづける つもりです。", "Vatanimga qaytsam ham, yapon tilini o'rganishni davom ettiraman."],
          ["あしたからは たばこを すわない つもりです。", "Ertadan boshlab sigaret chekmaslikka qaror qildim."],
        ],
      },
      {
        t: "Reja, jadval: ～よていです",
        p: "V(lug'at)／N の よていです",
        x: `**～よていです** — jadvalda belgilangan reja (shaxsiy niyat emas, rasmiy reja): «...ishi rejalashtirilgan».`,
        ex: [
          ["７がつの おわりに ドイツへ しゅっちょうする よていです。", "Iyul oxirida Germaniyaga xizmat safari rejalashtirilgan."],
          ["りょこうは いっしゅうかんぐらいの よていです。", "Sayohat taxminan bir haftaga rejalashtirilgan."],
        ],
      },
      {
        t: "Hali qilmadim: まだ ～て いません",
        p: "まだ V て いません",
        x: `«Hali ...madim» (lekin qilish kutilmoqda) — **まだ ～て いません**. 7-darsdagi qisqa javob «まだです» ning to'liq shakli.`,
        ex: [
          ["ぎんこうは まだ あいて いません。", "Bank hali ochilmagan."],
          ["A：レポートは もう かきましたか。 ／ B：いいえ、まだ かいて いません。", "A: Hisobotni yozdingizmi? / B: Yo'q, hali yozmadim."],
        ],
      },
    ],
    quiz: [
      ["いきます → irodali shakl", ["いこう", "いきよう", "いくう", "いけよう"], "I guruh: き → こう."],
      ["たべます → irodali shakl", ["たべよう", "たべろう", "たぼう", "たべこう"], "II guruh: ます → よう."],
      ["します → irodali shakl", ["しよう", "すろう", "しろう", "さよう"], "III guruh: しよう."],
      ["しゅうまつは うみへ いこう（　）おもって います。", ["と", "を", "が", "に"], "V(irodali) と おもって います."],
      ["あしたから たばこを すわない（　）です。 — «chekmaslikka qaror qildim»", ["つもり", "よてい", "ため", "ほう"], "Qat'iy niyat — つもり."],
      ["７がつに ドイツへ しゅっちょうする（　）です。 — «jadval bo'yicha»", ["よてい", "つもり", "こと", "ため"], "Rasmiy reja — よてい."],
      ["A：レポートは もう かきましたか。 B：いいえ、まだ（　）。", ["かいて いません", "かきませんでした", "かきません", "かいて しまいました"], "まだ ～て いません."],
      ["かいます (sotib olmoq) → irodali shakl", ["かおう", "かいよう", "かうよう", "かわう"], "い → おう."],
    ],
  },

  {
    n: 32,
    title: "Maslahat va taxmin",
    intro: "～た ほうが いいです (yaxshisi...), ～でしょう (bo'lsa kerak), ～かも しれません (bo'lishi mumkin).",
    vocab: [
      "うんどうします|運動します|jismoniy mashq qilmoq",
      "せいこうします|成功します|muvaffaqiyat qozonmoq",
      "しっぱいします|失敗します|muvaffaqiyatsizlikka uchramoq",
      "ごうかくします|合格します|(imtihondan) o'tmoq",
      "やみます|止みます|to'xtamoq (yomg'ir)",
      "はれます|晴れます|ochilmoq (havo)",
      "くもります|曇ります|bulut bo'lmoq",
      "つづきます|続きます|davom etmoq",
      "ひきます||(shamollash) tegmoq",
      "ひやします|冷やします|sovutmoq",
      "こみます|込みます|gavjum bo'lmoq",
      "すきます||bo'shamoq (yo'l)",
      "でます|出ます|qatnashmoq (musobaqada)",
      "むりを します|無理をします|o'zini haddan ziyod qiynamoq",
      "じゅうぶん|十分（な）|yetarli",
      "おかしい||g'alati; kulgili",
      "うるさい||shovqinli",
      "やけど||kuyish (jarohat)",
      "けが||jarohat",
      "せき||yo'tal",
      "インフルエンザ||gripp",
      "たいよう|太陽|quyosh",
      "ほし|星|yulduz",
      "かぜ|風|shamol",
      "ひがし|東|sharq",
      "にし|西|g'arb",
      "みなみ|南|janub",
      "きた|北|shimol",
      "こくさい|国際|xalqaro",
      "すいどう|水道|vodoprovod",
      "エンジン||dvigatel",
      "チーム||jamoa",
      "こんや|今夜|bugun kechasi",
      "ゆうがた|夕方|kechqurun (shom)",
      "おそく|遅く|kech",
      "こんなに||bunchalik",
      "もしかしたら||ehtimol, balki",
      "それは いけませんね||voy, yomon bo'libdi",
      "オリンピック||Olimpiada",
    ],
    grammar: [
      {
        t: "Maslahat: ～た ほうが いいです",
        p: "V た／V ない ほうが いいです",
        x: `Maslahat berish:
        - **V た ほうが いいです** — «...ganingiz ma'qul», «yaxshisi ...ing»
        - **V ない ほうが いいです** — «...maganingiz ma'qul»

        ! Bo'lishli maslahatda fe'l **た-shakl**da (o'tgan zamon emas!), inkorda esa **ない-shakl**da.`,
        ex: [
          ["まいにち うんどうした ほうが いいです。", "Har kuni jismoniy mashq qilganingiz ma'qul."],
          ["ねつが ありますから、おふろに はいらない ほうが いいです。", "Isitmangiz bor, vannaga tushmaganingiz ma'qul."],
          ["A：かぜを ひいたんです。 ／ B：それは いけませんね。はやく ねた ほうが いいですよ。", "A: Shamollab qoldim. / B: Voy, yomon bo'libdi. Ertaroq yotganingiz ma'qul."],
        ],
      },
      {
        t: "Taxmin: ～でしょう",
        p: "oddiy shakl + でしょう",
        x: `**～でしょう** (ohang pasayadi) — gapiruvchining taxmini: «...bo'lsa kerak», «ehtimol ...». Ob-havo ma'lumotlarida ko'p ishlatiladi.

        Ot va な-sifatda だ tushib qoladi: あしたは はれ**でしょう**.
        Savolda ～でしょうか — «...rmikin?»`,
        ex: [
          ["あしたは ゆきが ふるでしょう。", "Ertaga qor yog'sa kerak."],
          ["ミラーさんは しけんに ごうかくするでしょうか。", "Miller imtihondan o'tarmikin?"],
          ["A：こんや ほしが みえるでしょうか。 ／ B：たぶん みえるでしょう。", "A: Bugun kechasi yulduzlar ko'rinarmikin? / B: Ehtimol ko'rinadi."],
        ],
      },
      {
        t: "Ehtimol: ～かも しれません",
        p: "oddiy shakl + かも しれません",
        x: `**～かも しれません** — «...bo'lishi mumkin», «balki ...». でしょう ga qaraganda ehtimoli pastroq.

        Ot va な-sifatda だ tushadi: びょうき**かも しれません**.`,
        ex: [
          ["やくそくの じかんに おくれるかも しれません。", "Uchrashuvga kechikishim mumkin."],
          ["もしかしたら、あしたは ゆきが ふるかも しれません。", "Balki ertaga qor yog'ishi mumkin."],
          ["エンジンの こしょうかも しれません。", "Dvigatel nosozligi bo'lishi mumkin."],
        ],
      },
      {
        t: "Ishonch darajasi",
        p: "きっと ＞ たぶん ＞ もしかしたら",
        x: `- **きっと** — «albatta, shubhasiz» (～でしょう / ～と おもいます bilan)
        - **たぶん** — «ehtimol» (～でしょう bilan)
        - **もしかしたら** — «balki» (～かも しれません bilan)`,
        ex: [
          ["きっと せいこうすると おもいます。", "Albatta muvaffaqiyat qozonasiz deb o'ylayman."],
          ["あしたは たぶん はれるでしょう。", "Ertaga havo ehtimol ochiq bo'ladi."],
        ],
      },
    ],
    quiz: [
      ["まいにち うんどうした（　）が いいです。", ["ほう", "こと", "もの", "ため"], "Maslahat — ～た ほうが いいです."],
      ["ねつが ありますから、おふろに はいら（　）ほうが いいです。", ["ない", "なかった", "ないで", "なくて"], "Inkor maslahat — ～ない ほうが いいです."],
      ["あしたは ゆきが ふる（　）。 — «yog'sa kerak»", ["でしょう", "ましょう", "です", "ません"], "Taxmin — ～でしょう."],
      ["やくそくの じかんに おくれる（　）しれません。", ["かも", "でしょう", "と", "から"], "～かも しれません."],
      ["«Ertaga yomg'ir yog'ishi mumkin»", ["あしたは あめが ふるかも しれません。", "あしたは あめが ふりますかも しれません。", "あしたは あめが ふったかも しれます。", "あしたは あめが ふるかも しりません。"], "Oddiy shakl + かも しれません."],
      ["A：のどが いたいんです。 B：それは（　）ね。", ["いけません", "いいです", "よかったです", "おめでとうございます"], "Hamdardlik — それは いけませんね."],
      ["あしたは（　）はれるでしょう。 — «ehtimol»", ["たぶん", "もし", "いくら", "なかなか"], "たぶん ～でしょう."],
      ["«Ko'p ichmaganingiz ma'qul»", ["あまり のまない ほうが いいです。", "あまり のんだ ほうが いいです。", "あまり のまない ほうが いけません。", "あまり のまなかった ほうが いいです。"], "V ない ほうが いいです."],
    ],
  },

  {
    n: 33,
    title: "Belgilar va buyruqlar",
    intro: "Buyruq (いけ) va taqiq (いくな) shakllari, belgilarni o'qish, gap yetkazish.",
    vocab: [
      "にげます|逃げます|qochmoq",
      "さわぎます|騒ぎます|shovqin qilmoq",
      "あきらめます||voz kechmoq",
      "なげます|投げます|otmoq, uloqtirmoq",
      "まもります|守ります|rioya qilmoq; himoya qilmoq",
      "はじまります|始まります|boshlanmoq",
      "しゅっせきします|出席します|qatnashmoq",
      "つたえます|伝えます|yetkazmoq (xabar)",
      "ちゅういします|注意します|ehtiyot bo'lmoq; tanbeh bermoq",
      "はずします|外します|(joyidan) chiqmoq",
      "もどります|戻ります|qaytmoq",
      "リサイクルします||qayta ishlamoq",
      "だめ|だめ（な）|mumkin emas, yaramaydi",
      "おなじ|同じ|bir xil",
      "けいさつ|警察|politsiya",
      "せき|席|o'rindiq",
      "マーク||belgi",
      "ボール||to'p",
      "せんたくき|洗濯機|kir yuvish mashinasi",
      "～き|～機|... mashinasi",
      "きそく|規則|qoida",
      "しようきんし|使用禁止|foydalanish taqiqlanadi",
      "たちいりきんし|立入禁止|kirish taqiqlanadi",
      "いりぐち|入口|kirish",
      "でぐち|出口|chiqish",
      "ひじょうぐち|非常口|favqulodda chiqish",
      "むりょう|無料|bepul",
      "わりびき|割引|chegirma",
      "のみほうだい|飲み放題|cheksiz ichimlik",
      "しようちゅう|使用中|band (foydalanilmoqda)",
      "ぼしゅうちゅう|募集中|qabul qilinmoqda",
      "～ちゅう|～中|... jarayonida",
      "どういう～||qanday ...",
      "あと～||yana ... (qoldi)",
      "とまれ|止まれ|to'xta!",
      "しめきり|締め切り|muddat (oxirgi)",
    ],
    grammar: [
      {
        t: "Buyruq shakli",
        p: "V(buyruq): いけ・たべろ・しろ・こい",
        x: `Buyruq shakli juda qo'pol eshitiladi. U asosan quyidagi holatlarda ishlatiladi:
        - erkaklar orasida yoki kattadan kichikka
        - sport musobaqalarida qo'llab-quvvatlash: がんばれ！ (Bo'sh kelma!)
        - favqulodda holatlarda: にげろ！ (Qoching!)
        - yo'l belgilarida: とまれ (To'xta)

        Yasalishi:
        - **I guruh**: い-tovush → **え-tovush**: いきます → い**け**, のみます → の**め**
        - **II guruh**: ます → **ろ**: たべ**ろ**, み**ろ**
        - **III guruh**: します → **しろ**, きます → **こい**`,
        ex: [
          ["はやく ねろ。", "Tezroq yot."],
          ["がんばれ！ まけるな！", "Bo'sh kelma! Yutqazma!"],
        ],
      },
      {
        t: "Taqiq shakli",
        p: "V(lug'at) + な",
        x: `Taqiq shakli juda oddiy: **lug'at shakli + な** — «...ma!»:
        - いく → いく**な** (borma!), さわる → さわる**な** (tegma!)

        Buyruq kabi qo'pol — belgilar va favqulodda holatlarda ishlatiladi.`,
        ex: [
          ["ここに くるまを とめるな。", "Bu yerga mashina qo'yma."],
          ["あぶないから、さわるな。", "Xavfli, tegma."],
        ],
      },
      {
        t: "Belgilarni o'qish va ma'nosi",
        p: "～と よみます／～と かいて あります／X は Y と いう いみです",
        x: `Belgi yoki yozuv haqida so'rash:
        - あれは なんと よむんですか — Anavi qanday o'qiladi?
        - あそこに「とまれ」と かいて あります — U yerda «to'xta» deb yozilgan
        - X は **Y と いう いみです** — X «Y» degan ma'noni bildiradi
        - どういう いみですか — Qanday ma'noni bildiradi?`,
        ex: [
          ["あの かんじは なんと よむんですか。", "Anavi kanji qanday o'qiladi?"],
          ["A：あれは どういう いみですか。 ／ B：「たちいりきんし」です。はいるなと いう いみです。", "A: Anavi nima degani? / B: «Kirish taqiqlanadi». Kirma degan ma'noni bildiradi."],
          ["この マークは せんたくきで あらえると いう いみです。", "Bu belgi kir yuvish mashinasida yuvish mumkin degan ma'noni bildiradi."],
        ],
      },
      {
        t: "Gapni yetkazish",
        p: "～と いって いました ／ ～と つたえて いただけませんか",
        x: `- **～と いって いました** — birovning gapini uchinchi shaxsga yetkazish: «...deb aytgan edi»
        - **～と つたえて いただけませんか** — biror xabarni yetkazishni iltimos qilish: «...deb aytib qo'ya olmaysizmi?»`,
        ex: [
          ["たなかさんは あした やすむと いって いました。", "Tanaka ertaga dam olishini aytgan edi."],
          ["ミラーさんに かいぎは ３じからだと つたえて いただけませんか。", "Millerga majlis soat 3 dan deb yetkazib qo'ya olmaysizmi?"],
        ],
      },
    ],
    quiz: [
      ["いきます → buyruq shakli", ["いけ", "いけろ", "いこ", "いきろ"], "I guruh: き → け."],
      ["たべます → buyruq shakli", ["たべろ", "たべれ", "たべよ", "たべな"], "II guruh: ます → ろ."],
      ["します → buyruq shakli", ["しろ", "すれ", "しれ", "せろ"], "III guruh: しろ."],
      ["きます (kelmoq) → buyruq shakli", ["こい", "きろ", "くれ", "こよ"], "III guruh: こい."],
      ["«Bu yerga mashina qo'yma!»", ["ここに くるまを とめるな。", "ここに くるまを とめな。", "ここに くるまを とめろな。", "ここに くるまを とめないな。"], "Taqiq: lug'at shakli + な."],
      ["「たちいりきんし」は はいるな（　）いう いみです。", ["と", "を", "が", "の"], "X は Y と いう いみです."],
      ["たなかさんは あした やすむと いって（　）。 — «deb aytgan edi»", ["いました", "あります", "おきました", "しまいました"], "Gapni yetkazish — ～と いって いました."],
      ["あそこに「とまれ」と かいて（　）。", ["あります", "います", "おきます", "みます"], "Yozilgan — ～と かいて あります."],
    ],
  },

  {
    n: 34,
    title: "Ko'rsatma bo'yicha",
    intro: "～とおりに (...gandek), ～あとで (...gandan keyin), ～て／～ないで (qanday holatda).",
    vocab: [
      "みがきます|磨きます|tozalamoq (tish)",
      "くみたてます|組み立てます|yig'moq (qismlardan)",
      "おります|折ります|buklamoq",
      "きが つきます|気がつきます|payqamoq",
      "つけます||botirmoq (sousga)",
      "みつかります|見つかります|topilmoq",
      "しつもんします|質問します|savol bermoq",
      "さします||ochmoq (soyabon)",
      "スポーツクラブ||sport klubi",
      "おしろ|お城|qasr",
      "せつめいしょ|説明書|qo'llanma",
      "ず|図|chizma, rasm",
      "せん|線|chiziq",
      "やじるし|矢印|strelka",
      "くろ|黒|qora (rang)",
      "しろ|白|oq (rang)",
      "あか|赤|qizil (rang)",
      "あお|青|ko'k (rang)",
      "きいろ|黄色|sariq",
      "ちゃいろ|茶色|jigarrang",
      "しょうゆ||soya sousi",
      "ソース||sous",
      "ゆうべ||kecha kechqurun",
      "さっき||hozirgina",
      "さどう|茶道|choy marosimi san'ati",
      "にがい|苦い|achchiq (ta'm)",
      "ざいりょう|材料|masalliq",
      "～ぶん|～分|... kishilik",
      "たまねぎ|玉ねぎ|piyoz",
      "にます|煮ます|qaynatib pishirmoq",
      "これで いいですか||shunday bo'ladimi?",
      "はし|箸|cho'p tayoqcha",
    ],
    grammar: [
      {
        t: "«...gandek»: ～とおりに",
        p: "V(lug'at／た) ／ N の とおりに、V",
        x: `**とおりに** — «...gandek», «...ga muvofiq». Biror namuna yoki ko'rsatmaga qarab harakat qilish:
        - わたしが **やる** とおりに — men qilgandek (hozir ko'rsataman)
        - **みた** とおりに — ko'rganingizdek
        - せつめいしょ**の** とおりに — qo'llanmaga muvofiq`,
        ex: [
          ["わたしが やる とおりに、やって ください。", "Men qilgandek qiling."],
          ["せつめいしょの とおりに、くみたてました。", "Qo'llanmaga muvofiq yig'dim."],
          ["みた とおりに はなして ください。", "Ko'rganingizdek gapirib bering."],
        ],
      },
      {
        t: "«...dan keyin»: ～あとで",
        p: "V(た) ／ N の あとで、V",
        x: `**あとで** — «...gandan keyin». Fe'l doim **た-shakl**da:
        - しごとが おわった あとで — ish tugagandan keyin
        - じゅぎょう**の** あとで — darsdan keyin

        16-darsdagi ～てから bilan o'xshash, lekin あとで vaqt tartibini oddiy ko'rsatadi, てから esa «avval V1 tugashi shart» degan ma'noni kuchaytiradi.`,
        ex: [
          ["しごとが おわった あとで、のみに いきませんか。", "Ish tugagandan keyin ichgani bormaymizmi?"],
          ["じゅぎょうの あとで、テニスを します。", "Darsdan keyin tennis o'ynayman."],
          ["しょくじの あとで、この くすりを のんで ください。", "Ovqatdan keyin bu dorini iching."],
        ],
      },
      {
        t: "Qanday holatda: ～て／～ないで",
        p: "V1 て／V1 ないで V2",
        x: `V1 asosiy harakat V2 qanday holatda bajarilishini bildiradi:
        - しょうゆを **つけて** たべます — soya sousiga botirib yeyman
        - しょうゆを **つけないで** たべます — soya sousisiz (botirmasdan) yeyman

        O'zbekchadagi «...ib» va «...masdan» ga to'liq mos!`,
        ex: [
          ["しょうゆを つけて たべます。", "Soya sousiga botirib yeyman."],
          ["かさを ささないで でかけました。", "Soyabon ochmasdan chiqib ketdim."],
          ["じしょを つかわないで よんで ください。", "Lug'atdan foydalanmasdan o'qing."],
        ],
      },
      {
        t: "O'rniga: V1 ないで、V2",
        p: "V1 ないで、V2",
        x: `**V1 ないで、V2** — V1 o'rniga V2 qilinadi: «...masdan, (aksincha) ...»:
        - どこも いかないで、うちで やすみます — hech qayerga bormasdan, uyda dam olaman.`,
        ex: [
          ["にちようびは どこも いかないで、うちで ゆっくり やすみます。", "Yakshanba kuni hech qayerga bormasdan, uyda yaxshilab dam olaman."],
          ["エレベーターに のらないで、かいだんを つかいます。", "Liftga chiqmasdan, zinadan foydalanaman."],
        ],
      },
    ],
    quiz: [
      ["せつめいしょ（　）とおりに くみたてました。", ["の", "が", "を", "な"], "Ot + の + とおりに."],
      ["わたしが やる（　）、やって ください。 — «men qilgandek»", ["とおりに", "あとで", "まえに", "ながら"], "«...gandek» — とおりに."],
      ["しごとが おわった（　）、のみに いきます。", ["あとで", "まえに", "とおりに", "ながら"], "«...dan keyin» — た + あとで."],
      ["じゅぎょう（　）あとで、テニスを します。", ["の", "が", "を", "に"], "Ot + の + あとで."],
      ["しょうゆを（　）たべます。 — «botirib»", ["つけて", "つけないで", "つけた", "つける"], "Holat — ～て."],
      ["かさを（　）でかけました。 — «soyabonsiz»", ["ささないで", "さして", "さした", "さす"], "«...masdan» — ～ないで."],
      ["にちようびは どこも いか（　）、うちで やすみます。", ["ないで", "なくて", "なければ", "なくても"], "O'rniga — ～ないで."],
      ["«Ovqatdan keyin dori iching»", ["しょくじの あとで、くすりを のんで ください。", "しょくじを あとで、くすりを のんで ください。", "しょくじした あとで、くすりを のみて ください。", "しょくじの まえで、くすりを のんで ください。"], "N の あとで; のみます → のんで."],
    ],
  },

  {
    n: 35,
    title: "Shart: ～ば",
    intro: "Shart shakli (～ば), ～なら, «nima qilsam bo'ladi?» va ～ば ～ほど.",
    vocab: [
      "さきます|咲きます|gullamoq",
      "かわります|変わります|o'zgarmoq",
      "こまります|困ります|qiynalmoq, muammoga duch kelmoq",
      "つけます||belgi qo'ymoq (doira)",
      "なおります|治ります／直ります|tuzalmoq; tuzatilmoq",
      "クリックします||bosmoq (sichqoncha)",
      "にゅうりょくします|入力します|kiritmoq (ma'lumot)",
      "ただしい|正しい|to'g'ri",
      "むこう|向こう|narigi tomon",
      "しま|島|orol",
      "みなと|港|port",
      "きんじょ|近所|qo'shnilar, atrof",
      "おくじょう|屋上|tom (usti)",
      "かいがい|海外|chet el (dengiz orti)",
      "やまのぼり|山登り|tog'ga chiqish",
      "れきし|歴史|tarix",
      "きかい|機会|imkoniyat",
      "きょか|許可|ruxsat",
      "まる|丸|doira",
      "ふりがな||furigana (kanji ustidagi o'qilish)",
      "せつび|設備|jihozlar",
      "レバー||richag",
      "キー||tugma (klaviatura)",
      "カーテン||parda",
      "ひも||ip, bog'ich",
      "すいはんき|炊飯器|guruch pishirgich",
      "は|葉|barg",
      "もっと||yana, ko'proq",
      "それなら||unday bo'lsa",
      "ツアー||tur (sayohat)",
      "スキーじょう|スキー場|chang'i maydoni",
    ],
    grammar: [
      {
        t: "Shart shakli: ～ば",
        p: "V(ば) ／ い-sifat ければ ／ な-sifat・N なら",
        x: `**～ば** — «agar ...sa». Shart (sabab) va uning natijasini bog'laydi.

        Yasalishi:
        - **I guruh**: い-tovush → **え-tovush + ば**: いきます → いけ**ば**, のみます → のめ**ば**
        - **II guruh**: ます → **れば**: たべ**れば**, み**れば**
        - **III guruh**: **すれば**, **くれば**
        - **い-sifat**: い → **ければ**: やす**ければ**
        - **な-sifat va ot**: **なら**: ひま**なら**, あめ**なら**
        - **Inkor**: ない → **なければ**: いか**なければ**`,
        ex: [
          ["ボタンを おせば、まどが あきます。", "Tugmani bossangiz, deraza ochiladi."],
          ["やすければ、かいます。", "Arzon bo'lsa, sotib olaman."],
          ["ひまなら、てつだって ください。", "Bo'sh bo'lsangiz, yordam bering."],
          ["いそがなければ、まに あいませんよ。", "Shoshilmasangiz, ulgurmaysiz."],
        ],
      },
      {
        t: "Mavzu bo'yicha maslahat: N なら",
        p: "N なら、～",
        x: `**N なら** — suhbatdosh aytgan mavzuni olib, u haqida tavsiya berish: «...ga kelsak», «agar gap ... haqida bo'lsa».`,
        ex: [
          ["A：おんせんに いきたいんですが…。 ／ B：おんせんなら、はくばが いいですよ。", "A: Onsenga borgim keladi... / B: Onsen bo'lsa, Hakuba yaxshi."],
          ["A：にほんごの じしょを かいたいんですが。 ／ B：じしょなら、この みせが やすいですよ。", "A: Yaponcha lug'at olmoqchiman. / B: Lug'at bo'lsa, bu do'kon arzon."],
        ],
      },
      {
        t: "Nima qilsam bo'ladi: ～ば いいですか",
        p: "so'roq so'zi + V(ば) いいですか",
        x: `26-darsdagi ～たら いいですか bilan bir xil ma'no: «qanday qilsam bo'ladi?»`,
        ex: [
          ["どう すれば いいですか。", "Nima qilsam bo'ladi?"],
          ["ビザを とりたいんですが、どこへ いけば いいですか。", "Viza olmoqchiman, qayerga borsam bo'ladi?"],
        ],
      },
      {
        t: "Qancha ...sa, shuncha ...: ～ば ～ほど",
        p: "V(ば) V(lug'at) ほど ／ い-sifat ければ い-sifat ほど",
        x: `**～ば ～ほど** — «qancha ko'p ...sa, shuncha ...»: bir narsa ortgan sari boshqasi ham o'zgaradi.`,
        ex: [
          ["にほんごは べんきょうすれば するほど おもしろく なります。", "Yapon tilini qancha ko'p o'rgansangiz, shuncha qiziq bo'ladi."],
          ["パソコンは かるければ かるいほど べんりです。", "Noutbuk qancha yengil bo'lsa, shuncha qulay."],
        ],
      },
    ],
    quiz: [
      ["いきます → ば-shakl", ["いけば", "いきば", "いくば", "いかば"], "I guruh: き → け + ば."],
      ["たべます → ば-shakl", ["たべれば", "たべば", "たぶれば", "たべけば"], "II guruh: ます → れば."],
      ["します → ば-shakl", ["すれば", "しれば", "しば", "されば"], "III guruh: すれば."],
      ["やすい → ば-shakl", ["やすければ", "やすいば", "やすくば", "やすれば"], "い-sifat: い → ければ."],
      ["ひま → shart shakli", ["ひまなら", "ひまければ", "ひまれば", "ひまだば"], "な-sifat: なら."],
      ["A：おんせんに いきたいんですが…。 B：おんせん（　）、はくばが いいですよ。", ["なら", "ば", "と", "でも"], "Mavzu bo'yicha tavsiya — N なら."],
      ["どう（　）いいですか。 — «nima qilsam bo'ladi?»", ["すれば", "しれば", "するば", "しば"], "します → すれば."],
      ["にほんごは べんきょうすれば する（　）おもしろく なります。", ["ほど", "より", "だけ", "しか"], "～ば ～ほど."],
    ],
  },
];
