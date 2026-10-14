export default [
  {
    n: 26,
    title: "Tushuntirish: ～んです",
    intro: "Sabab va vaziyatni tushuntirish (～んです), muloyim iltimos va maslahat so'rash.",
    vocab: [
      "みます|診ます|ko'rikdan o'tkazmoq (shifokor)",
      "さがします|探します|qidirmoq",
      "おくれます|遅れます|kechikmoq",
      "まに あいます|間に合います|ulgurmoq",
      "やります||qilmoq (norasmiy)",
      "ひろいます|拾います|terib olmoq",
      "れんらくします|連絡します|bog'lanmoq, xabar bermoq",
      "きぶんが いい|気分がいい|kayfiyati yaxshi",
      "きぶんが わるい|気分が悪い|o'zini yomon his qilmoq",
      "うんどうかい|運動会|sport bayrami",
      "ぼんおどり|盆踊り|Bon raqsi (yozgi bayram)",
      "フリーマーケット||baraholka",
      "ばしょ|場所|joy",
      "ボランティア||ko'ngilli",
      "さいふ|財布|hamyon",
      "ごみ||chiqindi",
      "こっかいぎじどう|国会議事堂|parlament binosi",
      "へいじつ|平日|ish kunlari",
      "～べん|～弁|... shevasi",
      "こんど|今度|keyingi safar",
      "ずいぶん||ancha, juda",
      "ちょくせつ|直接|bevosita",
      "いつでも||istalgan vaqt",
      "どこでも||istalgan joyda",
      "だれでも||har kim",
      "なんでも|何でも|har qanday narsa",
      "こんな～||bunday ...",
      "そんな～||shunday ...",
      "あんな～||anaqa ...",
      "もえる ごみ|燃えるごみ|yonadigan chiqindi",
      "おきば|置き場|qo'yish joyi",
      "よこ|横|yon tomon",
      "びん|瓶|shisha idish",
      "かん|缶|banka",
      "ガス||gaz",
      "～がいしゃ|～会社|... kompaniyasi",
    ],
    grammar: [
      {
        t: "Tushuntirish: ～んです",
        p: "oddiy shakl + んです (N／な-sifat + なんです)",
        x: `**～んです** — gapga «tushuntirish» ohangini beradi. Og'zaki nutqda juda ko'p ishlatiladi:
        - **Ko'rgan narsangiz haqida so'rash**: どう した**んですか** — Nima bo'ldi? (ko'rinishingizdan nimadir bo'lgani sezilyapti)
        - **Sabab tushuntirish**: あたまが いたい**んです** — Boshim og'riyapti-da (shuning uchun...)
        - **Qiziqish bilan so'rash**: どこで かった**んですか** — Qayerdan olgansiz? (juda chiroyli ekan)

        Yasalishi: oddiy shakl + んです. Ot va な-sifatda: だ → **な**: びょうき**なんです**.

        ! Har gapda ishlatmang — ortiqcha ～んです tinglovchiga bosim kabi eshitiladi.`,
        ex: [
          ["A：どう したんですか。 ／ B：あたまが いたいんです。", "A: Nima bo'ldi? / B: Boshim og'riyapti."],
          ["きのう どうして やすんだんですか。", "Kecha nega kelmadingiz?"],
          ["A：その かばん、すてきですね。どこで かったんですか。 ／ B：タシケントで かったんです。", "A: Sumkangiz chiroyli-ku. Qayerdan olgansiz? / B: Toshkentdan olganman."],
          ["A：どうして たべないんですか。 ／ B：おなかが いっぱいなんです。", "A: Nega yemayapsiz? / B: Qornim to'q-da."],
        ],
      },
      {
        t: "Muloyim iltimos: ～んですが、～て いただけませんか",
        p: "～んですが、V て いただけませんか",
        x: `Iltimos qilishdan oldin vaziyatni ～んですが bilan tushuntirib, so'ng juda muloyim **～て いただけませんか** («...ib bera olmaysizmi?») ishlatiladi. ～て ください dan ancha odobli.`,
        ex: [
          ["にほんごで てがみを かいたんですが、ちょっと みて いただけませんか。", "Yaponcha xat yozgandim, bir ko'rib bera olmaysizmi?"],
          ["みちが わからないんですが、ちょっと おしえて いただけませんか。", "Yo'lni bilmayapman, ko'rsatib yubora olmaysizmi?"],
        ],
      },
      {
        t: "Maslahat so'rash: ～たら いいですか",
        p: "so'roq so'zi + V たら いいですか",
        x: `«Nima qilsam bo'ladi?», «Qayerda ...sam bo'ladi?» — maslahat yoki ko'rsatma so'rash:
        - どこで かったら いいですか — Qayerdan olsam bo'ladi?
        - どう したら いいですか — Nima qilsam bo'ladi?`,
        ex: [
          ["どこで カメラを かったら いいですか。", "Fotoapparatni qayerdan olsam bo'ladi?"],
          ["ごみは どこに だしたら いいですか。", "Chiqindini qayerga chiqarsam bo'ladi?"],
          ["A：だれに れんらくしたら いいですか。 ／ B：やまださんに れんらくして ください。", "A: Kim bilan bog'lansam bo'ladi? / B: Yamada bilan bog'laning."],
        ],
      },
      {
        t: "So'roq so'zi + でも",
        p: "いつでも／どこでも／だれでも／なんでも",
        x: `So'roq so'ziga **でも** qo'shilsa — «istalgan»:
        - いつ**でも** — istalgan vaqt, どこ**でも** — istalgan joyda
        - だれ**でも** — har kim, なん**でも** — har qanday narsa`,
        ex: [
          ["わからない ことが あったら、いつでも きいて ください。", "Tushunmagan narsangiz bo'lsa, istalgan payt so'rang."],
          ["この カードは どこでも つかえます。", "Bu kartani istalgan joyda ishlatsa bo'ladi."],
        ],
      },
    ],
    quiz: [
      ["A：どう した（　）か。 B：あたまが いたいんです。", ["んです", "です", "ます", "でした"], "Ko'rgan holat haqida so'rash — ～んですか."],
      ["«Kecha nega kelmadingiz?»", ["きのう どうして やすんだんですか。", "きのう どうして やすみましたんですか。", "きのう どうして やすむだんですか。", "きのう どうして やすんだですか。"], "た-shakl + んですか."],
      ["びょうき（　）んですか。", ["な", "だ", "の", "が"], "Ot + な + んです."],
      ["ごみは どこに だし（　）いいですか。", ["たら", "ても", "て", "ては"], "Maslahat — ～たら いいですか."],
      ["にほんごで てがみを かいたんですが、ちょっと みて（　）。", ["いただけませんか", "いただきますか", "もらいませんか", "あげませんか"], "Muloyim iltimos — ～て いただけませんか."],
      ["A：どうして たべないんですか。 B：おなかが いっぱい（　）。", ["なんです", "んです", "だんです", "のです"], "な-sifat + なんです."],
      ["わからない ことが あったら、（　）きいて ください。 — «istalgan vaqt»", ["いつでも", "いつも", "いつか", "いつ"], "So'roq so'zi + でも = istalgan."],
      ["«Qayerdan sotib olgansiz?» (chiroyli sumkani ko'rib)", ["どこで かったんですか。", "どこで かいますか。", "どこで かったら いいですか。", "どこで かって いただけませんか。"], "Qiziqish bilan so'rash — ～んですか."],
    ],
  },

  {
    n: 27,
    title: "Qila olaman: imkoniyat shakli",
    intro: "Imkoniyat fe'llari (かけます, たべられます), みえます・きこえます, ～しか ～ない.",
    vocab: [
      "かいます|飼います|(uy hayvoni) boqmoq",
      "はしります|走ります|yugurmoq",
      "みえます|見えます|ko'rinmoq",
      "きこえます|聞こえます|eshitilmoq",
      "できます||qurilmoq, paydo bo'lmoq",
      "ひらきます|開きます|ochmoq (kurs, dars)",
      "しんぱい|心配（な）|xavotirli",
      "ペット||uy hayvoni",
      "とり|鳥|qush",
      "こえ|声|ovoz (tirik mavjudot)",
      "なみ|波|to'lqin",
      "はなび|花火|mushakbozlik",
      "けしき|景色|manzara",
      "ひるま|昼間|kunduzi",
      "むかし|昔|qadim, ilgari",
      "どうぐ|道具|asbob",
      "じどうはんばいき|自動販売機|savdo avtomati",
      "つうしんはんばい|通信販売|onlayn savdo",
      "クリーニング||kimyoviy tozalash",
      "マンション||ko'p qavatli uy (kvartira)",
      "だいどころ|台所|oshxona (uyda)",
      "～きょうしつ|～教室|... kursi, to'garagi",
      "パーティールーム||ziyofat xonasi",
      "～ご|～後|...dan keyin",
      "～しか||faqat (+inkor)",
      "ほかの||boshqa",
      "はっきり||aniq, ravshan",
      "ほとんど||deyarli",
    ],
    grammar: [
      {
        t: "Imkoniyat fe'llari",
        p: "かけます・たべられます・できます・こられます",
        x: `«Qila olaman» degan ma'noni fe'lning o'zi bilan ham ifodalash mumkin (18-darsdagi ～ことが できます ga qaraganda qisqaroq):

        - **I guruh**: ます oldidagi い-tovush → **え-tovush**: かきます → か**け**ます, はなします → はな**せ**ます, のみます → の**め**ます
        - **II guruh**: ます → **られます**: たべます → たべ**られ**ます, みます → み**られ**ます
        - **III guruh**: します → **できます**, きます → **こられます**

        Imkoniyat fe'llari II guruh kabi o'zgaradi (かける, かけない...). To'ldiruvchi odatda **が** bilan keladi: にほんご**が** はなせます.`,
        ex: [
          ["わたしは にほんごが はなせます。", "Men yaponcha gapira olaman."],
          ["ミラーさんは かんじが よめます。", "Miller kanji o'qiy oladi."],
          ["この かわの みずは のめません。", "Bu daryoning suvini ichib bo'lmaydi."],
          ["あしたは こられますか。", "Ertaga kela olasizmi?"],
        ],
      },
      {
        t: "Ko'rinmoq va eshitilmoq: みえます・きこえます",
        p: "N が みえます／きこえます",
        x: `**みえます** va **きこえます** — narsa **o'z-o'zidan** ko'zga ko'rinadi yoki quloqqa eshitiladi (iroda bilan bog'liq emas):
        - ふじさんが みえます — Fuji tog'i ko'rinadi

        Imkoniyat shakllari みられます／きけます esa iroda bilan bog'liq: «ko'ra olaman (imkonim bor)»: しんかんせんで えいがが みられます.`,
        ex: [
          ["しんかんせんから ふじさんが みえます。", "Shinkansendan Fuji tog'i ko'rinadi."],
          ["ラジオの おとが きこえます。", "Radio ovozi eshitilyapti."],
          ["わたしの へやから うみが みえます。", "Xonamdan dengiz ko'rinadi."],
        ],
      },
      {
        t: "Paydo bo'lish: できます",
        p: "N が できます",
        x: `**できます** yana bir ma'noda — «qurilmoq», «ochilmoq», «tayyor bo'lmoq»:
        - えきの まえに スーパーが できました — Bekat oldida supermarket ochildi.`,
        ex: [
          ["えきの まえに おおきい スーパーが できました。", "Bekat oldida katta supermarket qurildi."],
          ["とけいの しゅうりは いつ できますか。", "Soat ta'miri qachon tayyor bo'ladi?"],
        ],
      },
      {
        t: "Faqat: ～しか ～ない",
        p: "N しか V ない",
        x: `**しか + inkor** — «faqat», «...dan boshqa ...maydi». Kamlikni, yetishmovchilikni ta'kidlaydi:
        - ひらがな**しか** かけ**ません** — Faqat hiraganani yoza olaman (boshqasini yo'q).

        だけ (11-dars) neytral, しか esa «oz, yetarli emas» ohangiga ega. しか dan keyin fe'l doim **inkor**da!`,
        ex: [
          ["わたしは ひらがなしか かけません。", "Men faqat hiraganani yoza olaman."],
          ["さいふに ５００えんしか ありません。", "Hamyonimda faqat 500 iyena bor."],
        ],
      },
      {
        t: "Qarama-qarshilik: N は",
        p: "N1 は ～が、N2 は ～",
        x: `**は** ikki narsani qarama-qarshi qo'yishda ham ishlatiladi:
        - ひらがな**は** かけますが、かんじ**は** かけません — Hiraganani yoza olaman, kanjini esa yo'q.

        は boshqa yuklamalarga ham qo'shilishi mumkin: にほん**では**, ここ**には**.`,
        ex: [
          ["ひらがなは かけますが、かんじは かけません。", "Hiraganani yoza olaman, lekin kanjini yo'q."],
          ["きのうは やまが みえましたが、きょうは みえません。", "Kecha tog' ko'rinardi, bugun esa ko'rinmayapti."],
        ],
      },
    ],
    quiz: [
      ["かきます → imkoniyat shakli", ["かけます", "かかれます", "かきられます", "かけれます"], "I guruh: き → け."],
      ["たべます → imkoniyat shakli", ["たべられます", "たべれます", "たべけます", "たべります"], "II guruh: ます → られます."],
      ["します → imkoniyat shakli", ["できます", "しれます", "されます", "しられます"], "III guruh: できます."],
      ["わたしは にほんご（　）はなせます。", ["が", "に", "で", "へ"], "Imkoniyat fe'li bilan — が."],
      ["しんかんせんから ふじさんが（　）。 — «ko'rinadi»", ["みえます", "みられます", "みます", "みせます"], "O'z-o'zidan ko'rinish — みえます."],
      ["わたしは ひらがな（　）かけません。 — «faqat hiragana»", ["しか", "だけ", "も", "で"], "しか + inkor."],
      ["えきの まえに おおきい スーパーが（　）。 — «qurildi»", ["できました", "みえました", "きこえました", "つくりました"], "Paydo bo'lish — できます."],
      ["きます (kelmoq) → imkoniyat shakli", ["こられます", "きられます", "きれます", "こらます"], "III guruh: こられます."],
    ],
  },

  {
    n: 28,
    title: "Bir vaqtda ikki ish",
    intro: "～ながら (...gan holda), odat bildiruvchi ～て います, sabablarni sanash: ～し、～し.",
    vocab: [
      "うれます|売れます|sotilmoq",
      "おどります|踊ります|raqs tushmoq",
      "かみます||chaynamoq",
      "えらびます|選びます|tanlamoq",
      "かよいます|通います|qatnamoq",
      "メモします||yozib olmoq",
      "まじめ|まじめ（な）|jiddiy, vijdonli",
      "ねっしん|熱心（な）|g'ayratli",
      "えらい|偉い|buyuk, hurmatli",
      "ちょうど いい||aynan mos",
      "しゅうかん|習慣|odat",
      "けいけん|経験|tajriba",
      "ちから|力|kuch",
      "にんき|人気|mashhurlik",
      "かたち|形|shakl",
      "いろ|色|rang",
      "あじ|味|ta'm",
      "ガム||saqich",
      "しなもの|品物|mahsulot, tovar",
      "ねだん|値段|narx",
      "きゅうりょう|給料|maosh",
      "ボーナス||mukofot puli",
      "ばんぐみ|番組|ko'rsatuv (TV)",
      "ドラマ||serial, drama",
      "しょうせつ|小説|roman",
      "しょうせつか|小説家|yozuvchi",
      "かしゅ|歌手|xonanda",
      "かんりにん|管理人|boshqaruvchi (uy)",
      "むすこ|息子|o'g'lim",
      "むすめ|娘|qizim",
      "じぶん|自分|o'zi",
      "しょうらい|将来|kelajak",
      "しばらく||bir muddat",
      "たいてい||odatda",
      "それに||ustiga-ustak",
      "それで||shuning uchun",
    ],
    grammar: [
      {
        t: "Bir vaqtda: V ながら",
        p: "V1(ます-asos) ながら V2",
        x: `**ながら** — ikki harakat **bir vaqtda** bajariladi: «...gan holda», «...b turib». ます-asosiga qo'shiladi:
        - おんがくを きき**ながら** しょくじします — musiqa tinglab ovqatlanaman

        ! **Asosiy harakat — ikkinchi fe'l** (V2). Birinchisi qo'shimcha holat.

        Uzoq muddatli parallel faoliyat uchun ham: はたらき**ながら** だいがくで べんきょうして います — ishlab turib universitetda o'qiyapman.`,
        ex: [
          ["おんがくを ききながら しょくじします。", "Musiqa tinglab ovqatlanaman."],
          ["はたらきながら だいがくで べんきょうして います。", "Ishlab turib universitetda o'qiyapman."],
          ["ガムを かみながら うんてんしないで ください。", "Saqich chaynab mashina haydamang."],
        ],
      },
      {
        t: "Odat: V て います",
        p: "V て います (doimiy odat)",
        x: `～て います doimiy takrorlanadigan **odatni** ham bildiradi: まいあさ ジョギングを して います — har kuni ertalab yuguraman (odatim shunaqa).

        O'tgan davrdagi odat: こどもの とき、まいばん ８じに ねて いました — Bolaligimda har kuni soat 8 da yotardim.`,
        ex: [
          ["まいあさ ジョギングを して います。", "Har kuni ertalab yuguraman."],
          ["むすこは まいにち ピアノを れんしゅうして います。", "O'g'lim har kuni pianino mashq qiladi."],
          ["こどもの とき、まいばん ８じに ねて いました。", "Bolaligimda har kuni soat 8 da yotardim."],
        ],
      },
      {
        t: "Sabablarni sanash: ～し、～し",
        p: "oddiy shakl + し、～し、～",
        x: `**～し** bir nechta sabab yoki xususiyatni sanab o'tadi: «...ham, ...ham», «bir tomondan..., boshqa tomondan...». Ko'pincha **も** bilan birga keladi:
        - この みせは ねだん**も** やすい**し**、あじ**も** いい**し**... — narxi ham arzon, ta'mi ham yaxshi...

        Ot va な-sifatda **だ** qo'shiladi: ねっしん**だし**.`,
        ex: [
          ["ワットせんせいは ねっしんだし、まじめだし、けいけんも あります。", "Uott ustoz g'ayratli ham, jiddiy ham, tajribasi ham bor."],
          ["この みせは やすいし、おいしいし、いつも こんで います。", "Bu do'kon arzon ham, mazali ham — doim gavjum."],
          ["A：どうして この だいがくを えらんだんですか。 ／ B：ゆうめいだし、うちから ちかいし…。", "A: Nega bu universitetni tanladingiz? / B: Mashhur, uyimga ham yaqin..."],
        ],
      },
      {
        t: "それで va それに",
        p: "それで ／ それに",
        x: `- **それで** — «shuning uchun», «shu sababli» (natija)
        - **それに** — «ustiga-ustak», «yana» (qo'shimcha)`,
        ex: [
          ["きのう ねつが ありました。それで、がっこうを やすみました。", "Kecha isitmam bor edi. Shuning uchun darsga bormadim."],
          ["この へやは ひろいです。それに、えきから ちかいです。", "Bu xona keng. Ustiga-ustak, bekatga yaqin."],
        ],
      },
    ],
    quiz: [
      ["おんがくを きき（　）しょくじします。", ["ながら", "て", "たり", "ても"], "Bir vaqtda — ～ながら."],
      ["«Ishlab turib o'qiyapman»", ["はたらきながら べんきょうして います。", "はたらくながら べんきょうして います。", "はたらいてながら べんきょうして います。", "はたらきながら べんきょうしながら。"], "ます-asos + ながら."],
      ["まいあさ ジョギングを して（　）。 — «odatim»", ["います", "あります", "おきます", "しまいます"], "Odat — ～て います."],
      ["この みせは やすい（　）、おいしいし、いつも こんで います。", ["し", "が", "て", "の"], "Sabablarni sanash — ～し."],
      ["ワットせんせいは ねっしん（　）し、まじめだし…", ["だ", "な", "で", "の"], "な-sifat + だ + し."],
      ["ガムを かみ（　）うんてんしないで ください。", ["ながら", "たり", "ても", "たら"], "～ながら."],
      ["ねつが ありました。（　）、がっこうを やすみました。 — «shuning uchun»", ["それで", "それに", "でも", "しかし"], "Natija — それで."],
      ["«Musiqa tinglab dars qilaman» (asosiy ish — dars)", ["おんがくを ききながら べんきょうします。", "べんきょうしながら おんがくを ききます。", "おんがくを きいて ながら べんきょうします。", "おんがくを ききながら べんきょうしながら。"], "Asosiy harakat — ikkinchi fe'l."],
    ],
  },

  {
    n: 29,
    title: "Holat va afsus",
    intro: "Narsalarning holati (まどが あいて います), ～て しまいました (afsuski / butunlay).",
    vocab: [
      "あきます|開きます|ochilmoq",
      "しまります|閉まります|yopilmoq",
      "つきます||yonmoq (chiroq)",
      "きえます|消えます|o'chmoq",
      "こわれます|壊れます|buzilmoq, sinmoq",
      "われます|割れます|sinmoq (shisha, idish)",
      "おれます|折れます|sinmoq (shox, suyak)",
      "やぶれます|破れます|yirtilmoq",
      "よごれます|汚れます|kirlanmoq",
      "つきます|付きます|yopishmoq, bor bo'lmoq",
      "はずれます|外れます|chiqib ketmoq (tugma)",
      "とまります|止まります|to'xtamoq",
      "まちがえます|間違えます|adashmoq, xato qilmoq",
      "おとします|落とします|tushirib yubormoq",
      "かかります|掛かります|qulflanmoq",
      "ふきます|拭きます|artmoq",
      "とりかえます|取り替えます|almashtirmoq",
      "かたづけます|片付けます|yig'ishtirmoq",
      "おさら|お皿|likopcha",
      "おちゃわん|お茶碗|piyola, kosa",
      "コップ||stakan",
      "ガラス||oyna (shisha)",
      "ふくろ|袋|xalta, paket",
      "しょるい|書類|hujjatlar",
      "えだ|枝|shox",
      "えきいん|駅員|bekat xodimi",
      "こうばん|交番|politsiya posti",
      "スピーチ||nutq",
      "へんじ|返事|javob",
      "おさきに どうぞ|お先にどうぞ|marhamat, avval siz",
      "わすれもの|忘れ物|unutilgan narsa",
      "ポケット||cho'ntak",
      "～へん|～辺|... atrofi",
      "たしか|確か|aftidan, menimcha",
      "あみだな|網棚|yuk javoni (poyezdda)",
    ],
    grammar: [
      {
        t: "Natija holati: N が V て います",
        p: "N が V(o'timsiz) て います",
        x: `Ba'zi fe'llar **o'timsiz** — ular o'z-o'zidan bo'ladigan o'zgarishni bildiradi (あきます — ochilmoq, こわれます — buzilmoq). Ularning **～て います** shakli o'zgarishdan keyingi **holatni** ko'rsatadi:
        - まどが あいて います — Deraza ochiq (turibdi)
        - この いすは こわれて います — Bu stul singan

        O'timli/o'timsiz juftlar: あけます/あきます, しめます/しまります, つけます/つきます, けします/きえます, こわします/こわれます.`,
        ex: [
          ["まどが あいて います。", "Deraza ochiq."],
          ["この いすは こわれて います。", "Bu stul singan."],
          ["でんきが ついて います。", "Chiroq yoniq."],
          ["A：この かばん、ポケットが やぶれて いますよ。 ／ B：あ、ほんとうだ。", "A: Bu sumkaning cho'ntagi yirtilgan-ku. / B: Voy, rostdan."],
        ],
      },
      {
        t: "Butunlay bajarish: V て しまいました",
        p: "V て しまいました／しまいます",
        x: `**～て しまいます** ikki ma'noga ega:
        - **To'liq tugatish**: しゅくだいは もう やって しまいました — uy vazifasini allaqachon qilib bo'ldim
        - **Afsus, kutilmagan holat**: かさを わすれて しまいました — soyabonni unutib qo'yibman (attang)

        O'zbekchadagi «...ib qo'ydim», «...ib yubordim» shakliga juda o'xshaydi!`,
        ex: [
          ["しゅくだいは もう やって しまいました。", "Uy vazifasini allaqachon qilib bo'ldim."],
          ["でんしゃに かさを わすれて しまいました。", "Poyezdda soyabonni unutib qoldiribman."],
          ["パスポートを なくして しまったんです。", "Pasportimni yo'qotib qo'ydim."],
          ["ひるごはんまでに レポートを かいて しまいます。", "Tushlikkacha hisobotni yozib tugataman."],
        ],
      },
      {
        t: "Topilma: ありました",
        p: "N が ありました",
        x: `Qidirgan narsangiz topilganda **ありました** — «topildi!», «mana bor ekan!». Bu o'tgan zamon emas, balki kashfiyot ma'nosida.`,
        ex: [
          ["A：さいふ、ありましたか。 ／ B：ええ、ありました。かばんの なかに。", "A: Hamyon topildimi? / B: Ha, topildi. Sumkaning ichida ekan."],
        ],
      },
    ],
    quiz: [
      ["まどが（　）います。 — «Deraza ochiq»", ["あいて", "あけて", "あく", "あいた"], "O'timsiz あきます → あいて います."],
      ["でんきが（　）います。 — «Chiroq yoniq»", ["ついて", "つけて", "つく", "つけた"], "O'timsiz つきます."],
      ["でんしゃに かさを わすれて（　）。 — «afsuski unutib qo'ydim»", ["しまいました", "おきました", "ありました", "みました"], "Afsus — ～て しまいました."],
      ["この いすは（　）います。 — «singan»", ["こわれて", "こわして", "こわれた", "こわす"], "O'timsiz こわれます."],
      ["しゅくだいは もう やって（　）。 — «qilib bo'ldim»", ["しまいました", "いました", "あげました", "ください"], "To'liq tugatish — ～て しまいました."],
      ["«Hamyonimni yo'qotib qo'ydim»", ["さいふを なくして しまいました。", "さいふが なくして しまいました。", "さいふを なくなって しまいました。", "さいふを なくしで しまいました。"], "なくします (o'timli) + を."],
      ["かぎが（　）います。 — «qulflangan»", ["かかって", "かけて", "かかる", "かけた"], "O'timsiz かかります."],
      ["«Piyola singan»", ["おちゃわんが われて います。", "おちゃわんを われて います。", "おちゃわんが わって います。", "おちゃわんが われて あります。"], "O'timsiz われます + が."],
    ],
  },

  {
    n: 30,
    title: "Oldindan tayyorgarlik",
    intro: "～て あります (qo'yib qo'yilgan), ～て おきます (oldindan qilib qo'yish), まだ ～て います.",
    vocab: [
      "はります|貼ります|yopishtirmoq",
      "かけます|掛けます|osmoq",
      "かざります|飾ります|bezamoq",
      "ならべます|並べます|terib qo'ymoq",
      "うえます|植えます|ekmoq",
      "もどします|戻します|joyiga qaytarmoq",
      "まとめます||jamlamoq, yig'moq",
      "しまいます||yig'ishtirib qo'ymoq",
      "きめます|決めます|qaror qilmoq",
      "よしゅうします|予習します|darsga tayyorlanmoq",
      "ふくしゅうします|復習します|takrorlamoq",
      "そのままに します||o'z holicha qoldirmoq",
      "じゅぎょう|授業|dars",
      "こうぎ|講義|ma'ruza",
      "ミーティング||yig'ilish",
      "よてい|予定|reja",
      "おしらせ|お知らせ|e'lon, xabar",
      "ガイドブック||yo'lko'rsatkich kitob",
      "カレンダー||taqvim",
      "ポスター||plakat",
      "ごみばこ|ごみ箱|chiqindi qutisi",
      "にんぎょう|人形|qo'g'irchoq",
      "かびん|花瓶|guldon",
      "かがみ|鏡|ko'zgu",
      "ひきだし|引き出し|tortma",
      "げんかん|玄関|dahliz, kirish joyi",
      "ろうか|廊下|yo'lak",
      "かべ|壁|devor",
      "いけ|池|hovuz",
      "もとの ところ|元の所|asl joy",
      "まわり|周り|atrof",
      "まんなか|真ん中|o'rta",
      "すみ|隅|burchak (ichki)",
      "まだ||hali",
      "メモ||eslatma (qog'oz)",
      "リュック||ryukzak",
      "ひじょうぶくろ|非常袋|favqulodda holat sumkasi",
      "かいちゅうでんとう|懐中電灯|qo'l chiroq",
    ],
    grammar: [
      {
        t: "Kimdir qilib qo'ygan holat: N が V て あります",
        p: "N が V(o'timli) て あります",
        x: `**O'timli fe'l + て あります** — kimdir **ataylab** qilgan harakat natijasida yuzaga kelgan holat:
        - かべに ちずが はって あります — Devorga xarita yopishtirilgan (kimdir yopishtirib qo'ygan).

        Taqqoslang:
        - まどが **あいて います** — deraza ochiq (shunchaki holat, 29-dars)
        - まどが **あけて あります** — deraza ochib qo'yilgan (kimdir ataylab ochgan, masalan shamollatish uchun)`,
        ex: [
          ["つくえの うえに メモが おいて あります。", "Stol ustiga eslatma qo'yilgan."],
          ["かべに ちずが はって あります。", "Devorga xarita yopishtirilgan."],
          ["はさみは ひきだしに しまって あります。", "Qaychi tortmaga solib qo'yilgan."],
          ["カレンダーに こんげつの よていが かいて あります。", "Taqvimda shu oyning rejalari yozib qo'yilgan."],
        ],
      },
      {
        t: "Oldindan qilib qo'yish: V て おきます",
        p: "V て おきます",
        x: `**～て おきます** uch ma'noda:
        - **Oldindan tayyorgarlik**: りょこうの まえに きっぷを かって おきます — sayohatdan oldin chiptani olib qo'yaman
        - **Keyingi foydalanish uchun tartibga keltirish**: つかったら、もとの ところに もどして おいて ください — ishlatgach, joyiga qaytarib qo'ying
        - **O'z holicha qoldirish**: そのままに して おいて ください — shundayligicha qoldiring

        O'zbekchadagi «...ib qo'ymoq» bilan juda mos!`,
        ex: [
          ["りょこうの まえに きっぷを かって おきます。", "Sayohatdan oldin chiptani olib qo'yaman."],
          ["じゅぎょうの まえに よしゅうして おきます。", "Darsdan oldin tayyorlanib qo'yaman."],
          ["はさみを つかったら、もとの ところに もどして おいて ください。", "Qaychini ishlatsangiz, joyiga qaytarib qo'ying."],
          ["A：まどを しめましょうか。 ／ B：いいえ、そのままに して おいて ください。", "A: Derazani yopaymi? / B: Yo'q, shundayligicha qoldiring."],
        ],
      },
      {
        t: "Hali ham: まだ V て います",
        p: "まだ V て います",
        x: `**まだ + ～て います** — harakat yoki holat **hali davom etyapti**: «hali ham ...yapti».

        ! Qiyoslang: もう — allaqachon, まだ — hali.`,
        ex: [
          ["まだ あめが ふって います。", "Hali ham yomg'ir yog'yapti."],
          ["かれは まだ ねて います。", "U hali uxlayapti."],
        ],
      },
    ],
    quiz: [
      ["かべに ちずが はって（　）。", ["あります", "おきます", "しまいます", "いきます"], "Kimdir qilib qo'ygan holat — ～て あります."],
      ["まどが（　）あります。 — «(kimdir) ochib qo'ygan»", ["あけて", "あいて", "あく", "あいた"], "～て あります faqat o'timli fe'l bilan: あけます."],
      ["りょこうの まえに きっぷを かって（　）。 — «oldindan olib qo'yaman»", ["おきます", "あります", "しまいます", "みます"], "Oldindan tayyorgarlik — ～て おきます."],
      ["まだ あめが ふって（　）。", ["います", "あります", "おきます", "しまいます"], "Davom etish — まだ ～て います."],
      ["つかったら、もとの ところに もどして（　）ください。", ["おいて", "あって", "しまって", "みて"], "Keyingi foydalanish uchun — ～て おいて ください."],
      ["«Stol ustiga eslatma qo'yilgan»", ["つくえの うえに メモが おいて あります。", "つくえの うえに メモを おいて います。", "つくえの うえに メモが おいて います。", "つくえの うえに メモが おきて あります。"], "N が V(o'timli) て あります."],
      ["A：パーティーの じゅんびは？ B：のみものは もう かって（　）。 — «oldindan olib qo'ydim»", ["おきました", "ありました", "いました", "みました"], "Oldindan tayyorgarlik — ～て おきました."],
      ["«U hali uxlayapti»", ["かれは まだ ねて います。", "かれは まだ ねて あります。", "かれは もう ねて います。", "かれは まだ ねて おきます。"], "まだ ～て います."],
    ],
  },
];
