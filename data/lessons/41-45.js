export default [
  {
    n: 41,
    title: "Hurmat bilan berish va olish",
    intro: "Kattalar bilan: いただきます, くださいます; kichiklarga: やります. ～て いただきます, ～て くださいませんか.",
    vocab: [
      "いただきます||olmoq (kattadan, kamtarlik)",
      "くださいます||bermoq (katta menga, hurmat)",
      "やります||bermoq (kichikka, hayvonga)",
      "あげます|上げます|ko'tarmoq",
      "さげます|下げます|tushirmoq",
      "しんせつに します|親切にします|mehribonlik qilmoq",
      "かわいい||yoqimtoy, shirin",
      "めずらしい|珍しい|noyob, kamyob",
      "おいわい|お祝い|tabrik, sovg'a",
      "おとしだま|お年玉|Yangi yil pul sovg'asi (bolalarga)",
      "おみまい|お見舞い|kasal ko'rgani borish",
      "きょうみ|興味|qiziqish",
      "じょうほう|情報|ma'lumot",
      "ぶんぽう|文法|grammatika",
      "はつおん|発音|talaffuz",
      "さる|猿|maymun",
      "えさ||yem",
      "おもちゃ||o'yinchoq",
      "えほん|絵本|rasmli kitob",
      "えはがき|絵はがき|rasmli otkritka",
      "ドライバー||otvertka",
      "ハンカチ||dastro'mol",
      "てぶくろ|手袋|qo'lqop",
      "ようちえん|幼稚園|bog'cha",
      "だんぼう|暖房|isitish",
      "れいぼう|冷房|sovutish",
      "おんど|温度|harorat",
      "そふ|祖父|bobom",
      "そぼ|祖母|buvim",
      "まご|孫|nevara",
      "おじ||amakim, tog'am",
      "おば||ammam, xolam",
      "もうしわけ ありません|申し訳ありません|juda uzr so'rayman",
      "あずかります|預かります|saqlashga olmoq",
      "せんじつ|先日|yaqinda, o'tgan kuni",
      "たすかります|助かります|katta yordam bo'ladi",
      "むかしばなし|昔話|ertak",
    ],
    grammar: [
      {
        t: "Hurmat bilan berish-olish",
        p: "いただきます ／ くださいます ／ やります",
        x: `7- va 24-darslarda berish-olish fe'llarini o'rgandik. Kattalar (ustoz, boshliq) ishtirok etsa, ularning odobli shakllari ishlatiladi:
        - **いただきます** (← もらいます) — kattadan olmoq: しゃちょう**に** いただきました
        - **くださいます** (← くれます) — katta menga bermoq: しゃちょう**が** くださいました
        - **やります** (← あげます) — kichikka, hayvon yoki o'simlikka bermoq: いぬに えさを やります

        ! Hozirgi yapon tilida o'z bolalariga ham ko'pincha あげます ishlatiladi.`,
        ex: [
          ["わたしは しゃちょうに おみやげを いただきました。", "Men direktordan sovg'a oldim."],
          ["しゃちょうが わたしに おみやげを くださいました。", "Direktor menga sovg'a berdi."],
          ["わたしは まいにち はなに みずを やります。", "Men har kuni gullarga suv quyaman."],
        ],
      },
      {
        t: "Hurmat bilan yordam: ～て いただきます／くださいます／やります",
        p: "V て いただきます／くださいます／やります",
        x: `24-darsdagi ～て もらいます／くれます／あげます ning odobli shakllari:
        - せんせい**に** なおして **いただきました** — ustoz tuzatib berdilar (men oldim)
        - せんせい**が** おしえて **くださいました** — ustoz o'rgatib berdilar
        - むすこ**に** よんで **やりました** — o'g'limga o'qib berdim`,
        ex: [
          ["わたしは せんせいに てがみの まちがいを なおして いただきました。", "Ustoz xatimdagi xatolarni tuzatib berdilar."],
          ["せんせいが にほんの うたを おしえて くださいました。", "Ustoz bizga yapon qo'shig'ini o'rgatdilar."],
          ["わたしは むすこに えほんを よんで やりました。", "O'g'limga rasmli kitob o'qib berdim."],
        ],
      },
      {
        t: "Juda muloyim iltimos: ～て くださいませんか",
        p: "V て くださいませんか",
        x: `**～て くださいませんか** — ～て ください dan ancha odobli: «...ib bera olmaysizmi?». ～て いただけませんか (26-dars) bilan deyarli bir xil daraja.`,
        ex: [
          ["すみませんが、しゃしんを とって くださいませんか。", "Kechirasiz, suratga olib bera olmaysizmi?"],
          ["もう すこし ゆっくり はなして くださいませんか。", "Biroz sekinroq gapira olmaysizmi?"],
        ],
      },
      {
        t: "Sifatida: N に",
        p: "N に V",
        x: `**N に** — «... sifatida», «... uchun» (maqsad, munosabat): おいわい**に** — tabrik sifatida, おみやげ**に** — sovg'a sifatida.`,
        ex: [
          ["けっこんの おいわいに とけいを あげました。", "To'y sovg'asi sifatida soat berdim."],
          ["にほんの おみやげに なにを かったら いいですか。", "Yaponiyadan sovg'a sifatida nima olsam bo'ladi?"],
        ],
      },
    ],
    quiz: [
      ["わたしは せんせいに ほんを（　）。 — «ustozdan oldim»", ["いただきました", "くださいました", "やりました", "くれました"], "Kattadan olish — いただきます."],
      ["せんせいが わたしに ほんを（　）。", ["くださいました", "いただきました", "やりました", "あげました"], "Katta menga beradi — くださいます."],
      ["わたしは まいにち はなに みずを（　）。", ["やります", "くださいます", "いただきます", "くれます"], "O'simlikka — やります."],
      ["せんせいに まちがいを なおして（　）。", ["いただきました", "くださいました", "やりました", "あげました"], "N に ～て いただきます."],
      ["すみませんが、しゃしんを とって（　）。 — «juda muloyim»", ["くださいませんか", "やりませんか", "いただきませんか", "くれましょうか"], "～て くださいませんか."],
      ["せんせいが にほんの うたを おしえて（　）。", ["くださいました", "いただきました", "やりました", "もらいました"], "N が ～て くださいます."],
      ["けっこんの おいわい（　）とけいを あげました。", ["に", "で", "を", "が"], "«...sifatida» — に."],
      ["わたしは おとうとに じしょを かして（　）。", ["やりました", "くださいました", "いただきました", "くれました"], "Kichikka — ～て やります."],
    ],
  },

  {
    n: 42,
    title: "Maqsad: ～ために",
    intro: "～ために (...ish uchun; ...ning foydasi uchun), ～のに つかいます (... uchun ishlatiladi).",
    vocab: [
      "つつみます|包みます|o'ramoq",
      "わかします|沸かします|qaynatmoq",
      "まぜます|混ぜます|aralashtirmoq",
      "けいさんします|計算します|hisoblamoq",
      "ならびます|並びます|navbatda turmoq",
      "じょうぶ|丈夫（な）|mustahkam, chidamli",
      "べんごし|弁護士|advokat",
      "おんがくか|音楽家|musiqachi",
      "こどもたち|子どもたち|bolalar",
      "ふたり|二人|ikkovi, juftlik",
      "きょういく|教育|ta'lim",
      "ぶんか|文化|madaniyat",
      "しゃかい|社会|jamiyat",
      "せいじ|政治|siyosat",
      "ほうりつ|法律|qonun",
      "せんそう|戦争|urush",
      "へいわ|平和|tinchlik",
      "もくてき|目的|maqsad",
      "ろんぶん|論文|ilmiy maqola, dissertatsiya",
      "たのしみ|楽しみ|zavq; intizorlik",
      "ミキサー||mikser",
      "やかん||choynak (qaynatish uchun)",
      "ふた||qopqoq",
      "せんぬき|栓抜き|ochqich",
      "かんきり|缶切り|konserva ochqich",
      "かんづめ|缶詰|konserva",
      "ふろしき||furoshiki (o'rash matosi)",
      "そろばん||cho'tlar",
      "たいおんけい|体温計|termometr",
      "ざいりょう|材料|masalliq, material",
      "ある～||qandaydir bir ...",
      "いっしょうけんめい|一生懸命|astoydil",
      "なぜ||nega",
      "こくれん|国連|BMT",
      "はんぶん|半分|yarmi",
      "ローン||kredit",
    ],
    grammar: [
      {
        t: "Maqsad: ～ために",
        p: "V(lug'at)／N の ために、V2",
        x: `**～ために** — «...ish uchun» (maqsad). Birinchi qismdagi fe'l **irodali** (o'z xohishi bilan qilinadigan) bo'ladi:
        - じぶんの みせを もつ**ために**、ちょきんして います — o'z do'konimni ochish uchun pul yig'yapman

        ! 36-darsdagi ～ように bilan farqi:
        - **ために** — irodali fe'l: もつ, かう, べんきょうする
        - **ように** — irodasiz fe'l: できる, わかる, なる, ～ない`,
        ex: [
          ["じぶんの みせを もつ ために、ちょきんして います。", "O'z do'konimni ochish uchun pul yig'yapman."],
          ["にほんごを べんきょうする ために、にほんへ きました。", "Yapon tilini o'rganish uchun Yaponiyaga keldim."],
          ["けんこうの ために、まいあさ はしって います。", "Sog'lig'im uchun har kuni ertalab yuguraman."],
        ],
      },
      {
        t: "Foydasi uchun: N の ために",
        p: "N(odam／tashkilot) の ために",
        x: `**N の ために** — «N uchun», «N ning manfaati uchun»: かぞくの ために はたらきます — oilam uchun ishlayman.`,
        ex: [
          ["かぞくの ために、うちを たてます。", "Oilam uchun uy quraman."],
          ["こどもたちの ために、ほんを かきました。", "Bolalar uchun kitob yozdim."],
        ],
      },
      {
        t: "Vazifasi: ～のに つかいます",
        p: "V(lug'at) の ／ N に つかいます／いいです／べんりです／かかります",
        x: `Narsaning **nima uchun ishlatilishini** yoki biror ishga **nima kerakligini** aytish:
        - この はさみは はなを きる**のに** つかいます — bu qaychi gul kesish uchun ishlatiladi
        - この かばんは りょこう**に** べんりです — bu sumka sayohat uchun qulay
        - うちを たてる**のに** おかねが かかります — uy qurishga pul ketadi`,
        ex: [
          ["この はさみは はなを きるのに つかいます。", "Bu qaychi gul kesish uchun ishlatiladi."],
          ["この かばんは りょこうに べんりです。", "Bu sumka sayohat uchun qulay."],
          ["うちを たてるのに ３,０００まんえん かかりました。", "Uy qurishga 30 million iyena ketdi."],
          ["この ソフトは にほんごを べんきょうするのに いいです。", "Bu dastur yapon tilini o'rganish uchun yaxshi."],
        ],
      },
    ],
    quiz: [
      ["じぶんの みせを もつ（　）、ちょきんして います。", ["ために", "ように", "のに", "まえに"], "Irodali fe'l bilan maqsad — ために."],
      ["かぞく（　）ために、はたらきます。", ["の", "に", "が", "を"], "N の ために."],
      ["この はさみは はなを きる（　）つかいます。", ["のに", "ので", "のを", "のは"], "Vazifa — ～のに つかいます."],
      ["この かばんは りょこう（　）べんりです。", ["に", "で", "を", "が"], "N に べんりです."],
      ["けんこうの ために、（　）。", ["まいあさ はしって います", "かぜを ひきました", "あめが ふりました", "びょうきに なりました"], "ために dan keyin irodali harakat keladi."],
      ["うちを たてるのに ３,０００まんえん（　）。", ["かかります", "つかいます", "あります", "します"], "Pul/vaqt ketishi — かかります."],
      ["«Yapon tilini o'rganish uchun Yaponiyaga keldim»", ["にほんごを べんきょうする ために、にほんへ きました。", "にほんごを べんきょうするのに、にほんへ きました。", "にほんごを べんきょうした ために、にほんへ きました。", "にほんごを べんきょうの ように、にほんへ きました。"], "V(lug'at) ために."],
      ["この ソフトは にほんごを べんきょうする（　）いいです。", ["のに", "ので", "のは", "のを"], "～のに いいです."],
    ],
  },

  {
    n: 43,
    title: "Ko'rinishidan...: ～そうです",
    intro: "～そうです (...ga o'xshaydi, ...ay deb turibdi) va ～て きます (borib kelmoq).",
    vocab: [
      "ふえます|増えます|ko'paymoq",
      "へります|減ります|kamaymoq",
      "あがります|上がります|ko'tarilmoq (narx)",
      "さがります|下がります|tushmoq (narx)",
      "きれます|切れます|uzilmoq",
      "とれます||chiqib ketmoq (tugma)",
      "おちます|落ちます|tushmoq, yiqilmoq",
      "なくなります||tugamoq, yo'qolmoq",
      "へん|変（な）|g'alati",
      "しあわせ|幸せ（な）|baxtli",
      "らく|楽（な）|oson, yengil",
      "うまい||mazali; usta (norasmiy)",
      "まずい||bemaza",
      "つまらない||zerikarli",
      "やさしい|優しい|mehribon",
      "ガソリン||benzin",
      "ひ|火|olov",
      "パンフレット||buklet",
      "いまにも|今にも|hozir-hozir, sal qolsa",
      "わあ||voy!",
      "ばら||atirgul",
      "ドライブ||mashinada sayr",
      "りゆう|理由|sabab",
      "あやまります|謝ります|kechirim so'ramoq",
      "しりあいます|知り合います|tanishmoq",
    ],
    grammar: [
      {
        t: "«...ay deb turibdi»: V そうです",
        p: "V(ます-asos) そうです",
        x: `Fe'lning ます-asosi + **そうです** — biror narsa **sodir bo'lish arafasida** ekanini ko'rib aytish: «...ay deb turibdi», «...adiganga o'xshaydi»:
        - いまにも あめが ふり**そうです** — hozir-hozir yomg'ir yog'adiganga o'xshaydi
        - ボタンが とれ**そうです** — tugma tushib ketay deb turibdi`,
        ex: [
          ["いまにも あめが ふりそうです。", "Hozir-hozir yomg'ir yog'adiganga o'xshaydi."],
          ["シャツの ボタンが とれそうです。", "Ko'ylakning tugmasi tushib ketay deb turibdi."],
          ["これから ねだんが あがりそうです。", "Bundan keyin narxlar ko'tariladiganga o'xshaydi."],
        ],
      },
      {
        t: "«...ga o'xshaydi» (tashqi ko'rinish): adj そうです",
        p: "い-sifat (い tushadi) ／ な-sifat + そうです",
        x: `Sifat + **そうです** — tashqi ko'rinishdan taxmin: «...ga o'xshaydi», «...dek ko'rinadi»:
        - おいしい → おいし**そうです** (mazali ko'rinadi)
        - げんき → げんき**そうです** (sog'lom ko'rinadi)

        ! Istisnolar: いい → **よさそうです**, ない → **なさそうです**.

        Otdan oldin: ～そう**な** N (おいしそうな ケーキ); fe'ldan oldin: ～そう**に** (たのしそうに あそぶ).

        ! かわいい, きれい kabi ko'rinib turgan sifatlarga そうです qo'shilmaydi.`,
        ex: [
          ["この ケーキは おいしそうです。", "Bu tort mazali ko'rinadi."],
          ["マリカさんは うれしそうです。", "Malika xursand ko'rinadi."],
          ["こどもたちが たのしそうに あそんで います。", "Bolalar maroq bilan o'ynashyapti."],
          ["この かばんは じょうぶそうですね。", "Bu sumka mustahkamga o'xshaydi."],
        ],
      },
      {
        t: "Borib kelmoq: V て きます",
        p: "V て きます",
        x: `**～て きます** — biror joyga borib, ishni qilib, qaytib kelmoq:
        - ジュースを かって きます — sharbat olib kelaman (borib olib, qaytib kelaman)

        Uydan chiqishda aytiladigan «いって きます» ham shu qolipdan.`,
        ex: [
          ["ちょっと ジュースを かって きます。", "Sharbat olib kelaman."],
          ["すみません、ちょっと トイレに いって きます。", "Kechirasiz, hojatxonaga borib kelaman."],
          ["ゆうびんきょくへ いって、きってを かって きます。", "Pochtaga borib, marka olib kelaman."],
        ],
      },
    ],
    quiz: [
      ["いまにも あめが ふり（　）です。", ["そう", "よう", "らしい", "の"], "ます-asos + そうです."],
      ["この ケーキは おいし（　）です。", ["そう", "さ", "く", "い"], "い-sifat: い tushadi + そうです."],
      ["いい → «yaxshiga o'xshaydi»", ["よさそうです", "いいそうです", "いそうです", "よそうです"], "Istisno: よさそうです."],
      ["げんき（　）な あかちゃんですね。", ["そう", "さ", "よう", "の"], "～そうな N."],
      ["ちょっと ジュースを かって（　）。 — «olib kelaman»", ["きます", "いきます", "みます", "おきます"], "Borib kelish — ～て きます."],
      ["シャツの ボタンが（　）そうです。 — «tushib ketay deb turibdi»", ["とれ", "とる", "とれる", "とった"], "ます-asos: とれます → とれ."],
      ["«Malika xursand ko'rinadi»", ["マリカさんは うれしそうです。", "マリカさんは うれしいそうです。", "マリカさんは うれしくそうです。", "マリカさんは うれしそうに です。"], "うれしい → うれしそうです."],
      ["こどもたちが たのし（　）あそんで います。", ["そうに", "そうな", "そうで", "そう"], "Fe'ldan oldin — ～そうに."],
    ],
  },

  {
    n: 44,
    title: "Haddan ortiq",
    intro: "～すぎます (haddan ortiq), ～やすい／～にくい (oson/qiyin), ～く／～に します, N に します.",
    vocab: [
      "なきます|泣きます|yig'lamoq",
      "わらいます|笑います|kulmoq",
      "ねむります|眠ります|uxlamoq",
      "かわきます|乾きます|qurimoq",
      "ぬれます||ho'l bo'lmoq",
      "すべります|滑ります|sirpanmoq",
      "おきます|起きます|sodir bo'lmoq (avariya)",
      "ちょうせつします|調節します|sozlamoq",
      "あんぜん|安全（な）|xavfsiz",
      "きけん|危険（な）|xavfli",
      "こい|濃い|quyuq, to'q",
      "うすい|薄い|yupqa, suyuq",
      "あつい|厚い|qalin",
      "ふとい|太い|yo'g'on",
      "ほそい|細い|ingichka",
      "くうき|空気|havo",
      "なみだ|涙|ko'z yosh",
      "わしょく|和食|yapon taomi",
      "ようしょく|洋食|g'arb taomi",
      "おかず||gazak, garnir",
      "りょう|量|miqdor",
      "～ばい|～倍|... barobar",
      "シングル||bir kishilik (xona)",
      "ツイン||ikki kishilik (xona)",
      "せんたくもの|洗濯物|kir (yuviladigan)",
      "カット||soch kesish",
      "シャンプー||shampun",
      "かしこまりました||tushunarli, bajaraman (xizmatda)",
      "どういうふうに なさいますか||qanday qilaylik? (sartaroshda)",
      "あじ|味|ta'm",
    ],
    grammar: [
      {
        t: "Haddan ortiq: ～すぎます",
        p: "V(ます-asos) ／ い-sifat (い tushadi) ／ な-sifat + すぎます",
        x: `**～すぎます** — «haddan ortiq», «juda ham ...»:
        - Fe'l: のみ**すぎました** — ortiqcha ichib yubordim
        - い-sifat: おおき**すぎます** — juda katta (mos emas)
        - な-sifat: かんたん**すぎます** — haddan tashqari oson

        すぎます II guruh fe'li kabi o'zgaradi: すぎて, すぎた...`,
        ex: [
          ["ゆうべ おさけを のみすぎました。", "Kecha kechqurun ortiqcha ichib yuboribman."],
          ["この セーターは おおきすぎます。", "Bu sviter juda katta."],
          ["この もんだいは かんたんすぎます。", "Bu masala haddan tashqari oson."],
        ],
      },
      {
        t: "Oson / qiyin: ～やすい・～にくい",
        p: "V(ます-asos) やすいです／にくいです",
        x: `- **～やすいです** — «...ish oson», «qulay»: つかい**やすい** — ishlatishga qulay
        - **～にくいです** — «...ish qiyin»: のみ**にくい** — ichish qiyin

        Ular い-sifat kabi o'zgaradi.`,
        ex: [
          ["この パソコンは つかいやすいです。", "Bu kompyuterni ishlatish qulay."],
          ["この くすりは にがくて、のみにくいです。", "Bu dori achchiq, ichish qiyin."],
          ["しろい シャツは よごれやすいです。", "Oq ko'ylak tez kirlanadi."],
        ],
      },
      {
        t: "O'zgartirish: ～く／～に します",
        p: "い-sifat く ／ な-sifat・N に します",
        x: `19-darsdagi ～く／～に なります — o'z-o'zidan o'zgarish. **～く／～に します** esa — biror narsani **ataylab o'zgartirish**:
        - おとを ちいさ**く** します — ovozni pasaytiraman
        - へやを きれい**に** します — xonani tozalayman`,
        ex: [
          ["おとを ちいさく して ください。", "Ovozni pasaytiring."],
          ["へやを きれいに します。", "Xonani tozalayman."],
          ["かみを みじかく して ください。", "Sochimni qisqa qiling."],
        ],
      },
      {
        t: "Tanlash: N に します",
        p: "N に します",
        x: `**N に します** — tanlov yoki qaror: «...ni tanlayman», «... bo'lsin».
        - わたしは コーヒー**に** します — men qahva ichaman (tanlayman)`,
        ex: [
          ["わたしは コーヒーに します。", "Men qahva tanlayman."],
          ["A：へやは シングルに しますか、ツインに しますか。 ／ B：シングルに します。", "A: Xona bir kishilikmi yoki ikki kishilikmi? / B: Bir kishilik bo'lsin."],
        ],
      },
    ],
    quiz: [
      ["ゆうべ おさけを のみ（　）。 — «ortiqcha ichibman»", ["すぎました", "やすかったです", "にくかったです", "そうでした"], "Haddan ortiq — ～すぎます."],
      ["この セーターは おおき（　）。 — «juda katta»", ["すぎます", "すぎです", "さすぎます", "いすぎます"], "い-sifat: い tushadi + すぎます."],
      ["この パソコンは つかい（　）です。 — «ishlatishga qulay»", ["やすい", "にくい", "すぎ", "そう"], "Oson — ～やすい."],
      ["おとを ちいさ（　）して ください。", ["く", "に", "な", "い"], "い-sifat: く します."],
      ["へやを きれい（　）します。", ["に", "く", "な", "で"], "な-sifat: に します."],
      ["A：なにに しますか。 B：わたしは コーヒー（　）します。", ["に", "を", "が", "で"], "Tanlov — N に します."],
      ["この くすりは のみ（　）です。 — «ichish qiyin»", ["にくい", "やすい", "すぎる", "たい"], "Qiyin — ～にくい."],
      ["«Sochimni qisqa qiling»", ["かみを みじかく して ください。", "かみを みじかいに して ください。", "かみを みじかく なって ください。", "かみが みじかく して ください。"], "い-sifat く + して ください."],
    ],
  },

  {
    n: 45,
    title: "Agar shunday bo'lsa / ...ga qaramay",
    intro: "～ばあいは (agar ... holatda), ～のに (...ga qaramay, afsuski).",
    vocab: [
      "しんじます|信じます|ishonmoq",
      "キャンセルします||bekor qilmoq",
      "しらせます|知らせます|xabar bermoq",
      "ほしょうしょ|保証書|kafolat varaqasi",
      "りょうしゅうしょ|領収書|kvitansiya",
      "キャンプ||lager (chodir)",
      "ちゅうし|中止|bekor qilinish",
      "てん|点|ball, nuqta",
      "うめ|梅|olxo'ri (gul)",
      "ひゃくとおばん|110番|politsiyaga qo'ng'iroq raqami (110)",
      "ひゃくじゅうきゅうばん|119番|tez yordam va o't o'chiruvchilar raqami (119)",
      "きゅうに|急に|birdaniga",
      "むりに|無理に|zo'rlab",
      "たのしみに して います|楽しみにしています|intiqlik bilan kutyapman",
      "いじょうです|以上です|shu bilan tamom",
      "かかりいん|係員|mas'ul xodim",
      "コース||yo'nalish, kurs",
      "スタート||start",
      "～い|～位|...-o'rin",
      "ゆうしょうします|優勝します|g'olib bo'lmoq",
      "なやみ|悩み|tashvish, muammo",
      "めざましどけい|目覚まし時計|budilnik",
      "めが さめます|目が覚めます|uyg'onmoq",
      "だいがくせい|大学生|talaba",
      "なります|鳴ります|jiringlamoq",
      "セットします||sozlamoq (budilnik)",
      "それでも||shunga qaramay",
      "いっしょうけんめい|一生懸命|astoydil",
    ],
    grammar: [
      {
        t: "Agar shunday holat bo'lsa: ～ばあいは",
        p: "V(lug'at／ない／た) ／ い-sifat ／ な-sifat な ／ N の + ばあいは、～",
        x: `**～ばあいは** — «agar ... holat yuz bersa», «... bo'lgan taqdirda». Ko'proq rasmiy ko'rsatma va qoidalarda ishlatiladi:
        - かじ**の** ばあいは — yong'in bo'lgan taqdirda
        - おくれる ばあいは — kechikadigan bo'lsangiz`,
        ex: [
          ["かいぎに おくれる ばあいは、れんらくして ください。", "Majlisga kechikadigan bo'lsangiz, xabar bering."],
          ["かじの ばあいは、エレベーターを つかわないで ください。", "Yong'in bo'lgan taqdirda liftdan foydalanmang."],
          ["ほしょうしょが ない ばあいは、しゅうりは ゆうりょうです。", "Kafolat varaqasi bo'lmasa, ta'mir pullik."],
        ],
      },
      {
        t: "...ga qaramay: ～のに",
        p: "oddiy shakl + のに (N／な-sifat + なのに)",
        x: `**～のに** — «...ga qaramay», «...ku, lekin». Kutilgan natija bo'lmaganda **norozilik, afsus yoki hayrat** bildiradi:
        - やくそくを した**のに**、かのじょは きませんでした — va'da qilgan edi-ku, lekin u kelmadi (afsus).

        ! ～が／～けど dan farqi — のに da his-tuyg'u kuchli. Ikkinchi qismda istak, taklif, buyruq bo'lmaydi.

        Ot va な-sifatda: だ → **な**: にちようび**なのに**.`,
        ex: [
          ["やくそくを したのに、かのじょは きませんでした。", "Va'da qilgan edi, lekin u kelmadi."],
          ["きょうは にちようびなのに、はたらかなければ なりません。", "Bugun yakshanba bo'lsa ham, ishlashim kerak."],
          ["いっしょうけんめい べんきょうしたのに、しけんに ごうかくできませんでした。", "Astoydil o'qidim, lekin imtihondan o'ta olmadim."],
          ["この みせは やすいのに、きゃくが すくないです。", "Bu do'kon arzon, lekin xaridorlar kam."],
        ],
      },
      {
        t: "のに va ので farqi",
        p: "～のに ⇔ ～ので",
        x: `Ikkalasi bir xil bog'lanadi, lekin ma'nosi qarama-qarshi:
        - **～ので** — kutilgan natija (sabab → natija): あめが ふった**ので**、でかけませんでした — yomg'ir yoqqani uchun chiqmadim
        - **～のに** — kutilmagan natija (... ga qaramay): あめが ふった**のに**、でかけました — yomg'ir yoqqaniga qaramay chiqdim

        **それでも** — «shunga qaramay» (gap boshida): あめが ふりました。**それでも**、しあいは ありました.`,
        ex: [
          ["あめが ふったので、しあいは ちゅうしに なりました。", "Yomg'ir yoqqani uchun o'yin bekor qilindi."],
          ["あめが ふったのに、しあいは ちゅうしに なりませんでした。", "Yomg'ir yoqqaniga qaramay, o'yin bekor qilinmadi."],
          ["めざましどけいを セットしました。それでも、めが さめませんでした。", "Budilnikni qo'ydim. Shunga qaramay, uyg'onmadim."],
        ],
      },
    ],
    quiz: [
      ["かじ（　）ばあいは、エレベーターを つかわないで ください。", ["の", "な", "が", "で"], "N + の + ばあいは."],
      ["かいぎに おくれる（　）、れんらくして ください。", ["ばあいは", "のに", "ので", "ために"], "«...holatda» — ばあいは."],
      ["やくそくを した（　）、かのじょは きませんでした。", ["のに", "ので", "から", "ために"], "Kutilmagan natija — のに."],
      ["きょうは にちようび（　）のに、はたらかなければ なりません。", ["な", "だ", "の", "で"], "Ot + な + のに."],
      ["«Ko'p o'qidim, lekin imtihondan o'ta olmadim (afsus)»", ["たくさん べんきょうしたのに、しけんに ごうかくできませんでした。", "たくさん べんきょうしたので、しけんに ごうかくできませんでした。", "たくさん べんきょうしたから、しけんに ごうかくできませんでした。", "たくさん べんきょうしたのに、しけんに ごうかくしましょう。"], "Afsus — のに."],
      ["ほしょうしょが ない（　）は、しゅうりは ゆうりょうです。", ["ばあい", "のに", "ため", "ので"], "～ばあいは."],
      ["この みせは やすい（　）、きゃくが すくないです。", ["のに", "ので", "から", "ために"], "Kutilganga zid — のに."],
      ["Qaysi gap XATO?", ["あめが ふって いるのに、でかけましょう。", "あめが ふって いるのに、でかけました。", "やすいのに、だれも かいません。", "にちようびなのに、はたらきます。"], "のに dan keyin taklif (～ましょう) kelmaydi."],
    ],
  },
];
