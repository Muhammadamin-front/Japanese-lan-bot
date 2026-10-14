export default [
  {
    n: 21,
    title: "Fikr bildirish",
    intro: "～と おもいます (deb o'ylayman), ～と いいます (dedi), ～でしょう？ va tadbirlar haqida gapirish.",
    vocab: [
      "おもいます|思います|o'ylamoq",
      "いいます|言います|aytmoq, demoq",
      "かちます|勝ちます|yutmoq, g'alaba qilmoq",
      "まけます|負けます|yutqazmoq",
      "あります||(tadbir) bo'lmoq, o'tkazilmoq",
      "やくに たちます|役に立ちます|foydali bo'lmoq",
      "うごきます|動きます|harakatlanmoq, ishlamoq",
      "やめます||tashlab ketmoq (ishni)",
      "きを つけます|気をつけます|ehtiyot bo'lmoq",
      "りゅうがくします|留学します|chet elda o'qimoq",
      "むだ|むだ（な）|behuda",
      "ふべん|不便（な）|noqulay",
      "すごい||zo'r, ajoyib",
      "ほんとう|本当|haqiqat",
      "うそ||yolg'on",
      "じどうしゃ|自動車|avtomobil",
      "こうつう|交通|transport, qatnov",
      "ぶっか|物価|narx-navo",
      "ほうそう|放送|eshittirish",
      "ニュース||yangiliklar",
      "アニメ||anime (multfilm)",
      "マンガ||manga (komiks)",
      "デザイン||dizayn",
      "ゆめ|夢|orzu; tush",
      "てんさい|天才|daho",
      "しあい|試合|musobaqa, o'yin",
      "いけん|意見|fikr",
      "はなし|話|gap, hikoya",
      "ちきゅう|地球|Yer (sayyora)",
      "つき|月|Oy",
      "さいきん|最近|yaqinda, so'nggi paytlarda",
      "たぶん||ehtimol",
      "きっと||albatta, shubhasiz",
      "ほんとうに|本当に|rostdan ham",
      "そんなに||unchalik (+inkor)",
      "～に ついて||... haqida",
      "しかたが ありません|仕方がありません|iloji yo'q",
      "しばらくですね||ko'rishmaganimizga ancha bo'ldi",
      "もちろん||albatta",
    ],
    grammar: [
      {
        t: "«...deb o'ylayman»: ～と おもいます",
        p: "oddiy shakl + と おもいます",
        x: `Taxmin yoki fikrni bildirish: gap **oddiy shakl**da + **と おもいます**. と — o'zbekchadagi «deb» ga to'liq mos!
        - あした あめが ふる**と おもいます** — Ertaga yomg'ir yog'adi **deb o'ylayman**.

        Ot va な-sifatda **だ** qo'shiladi: にほんじん**だ**と おもいます.
        Inkor fikr: ～**ない**と おもいます (ふらないと おもいます).

        Fikr so'rash: **～に ついて どう おもいますか** — ... haqida qanday fikrdasiz?`,
        ex: [
          ["あした あめが ふると おもいます。", "Ertaga yomg'ir yog'adi deb o'ylayman."],
          ["ミラーさんは もう うちへ かえったと おもいます。", "Miller allaqachon uyga qaytgan deb o'ylayman."],
          ["にほんの ぶっかは たかいと おもいます。", "Yaponiyada narx-navo qimmat deb o'ylayman."],
          ["A：あたらしい くうこうに ついて どう おもいますか。 ／ B：きれいですが、ちょっと こうつうが ふべんだと おもいます。", "A: Yangi aeroport haqida fikringiz? / B: Chiroyli, lekin qatnovi biroz noqulay deb o'ylayman."],
        ],
      },
      {
        t: "Iqtibos: ～と いいます",
        p: "「...」と いいます ／ oddiy shakl + と いいました",
        x: `Kimningdir gapini keltirish:
        - **To'g'ridan-to'g'ri**: so'zlar 「 」 ichida + と いいます: 「おやすみなさい」と いいます
        - **Bilvosita**: oddiy shakl + と いいました: ミラーさんは しゅっちょうする と いいました`,
        ex: [
          ["ねる まえに「おやすみなさい」と いいます。", "Yotishdan oldin «oyasuminasai» deyiladi."],
          ["ミラーさんは らいしゅう とうきょうへ しゅっちょうすると いいました。", "Miller kelasi hafta Tokioga xizmat safariga borishini aytdi."],
        ],
      },
      {
        t: "Tasdiq kutish: ～でしょう？",
        p: "oddiy shakl + でしょう？",
        x: `Ohang ko'tarilgan **～でしょう？** — «...-ku, to'g'rimi?», «...siz-a?». Tinglovchi ham bilishi kerak bo'lgan narsani tasdiqlash uchun. Ot va な-sifatda だ tushib qoladi: ひまでしょう？`,
        ex: [
          ["あした パーティーに いくでしょう？", "Ertaga ziyofatga borasiz-a?"],
          ["A：ほっかいどうは さむかったでしょう？ ／ B：いいえ、そんなに さむくなかったです。", "A: Xokkaydo sovuq bo'lgandir-a? / B: Yo'q, unchalik sovuq emas edi."],
        ],
      },
      {
        t: "Tadbir bo'lib o'tishi: N1 で N2 が あります",
        p: "N1(joy) で N2(tadbir) が あります",
        x: `Tadbir (musobaqa, bayram, majlis) **bo'lib o'tishi** ham あります bilan aytiladi. Lekin joy **で** bilan belgilanadi (に emas), chunki bu harakat — voqea.`,
        ex: [
          ["タシケントで サッカーの しあいが あります。", "Toshkentda futbol o'yini bo'ladi."],
          ["こんばん ホテルで パーティーが あります。", "Bugun kechqurun mehmonxonada ziyofat bo'ladi."],
        ],
      },
      {
        t: "Vaziyat: N で ／ N でも",
        p: "N(tadbir) で ～ ／ N でも V ませんか",
        x: `- **N で** — biror tadbir, vaziyat davomida: かいぎで いけんを いいました (majlisda fikr aytdim)
        - **N でも** — taklifni yumshatadi: «... -poy», «masalan ...»: おちゃでも のみませんか (choy-poy ichmaymizmi?)`,
        ex: [
          ["かいぎで なにか いけんを いいましたか。", "Majlisda biror fikr aytdingizmi?"],
          ["ちょっと おちゃでも のみませんか。", "Bir piyola choy-poy ichmaymizmi?"],
        ],
      },
    ],
    quiz: [
      ["あした あめが ふる（　）おもいます。", ["と", "を", "に", "が"], "«...deb» — と."],
      ["«U odam yapon deb o'ylayman»", ["あの ひとは にほんじんだと おもいます。", "あの ひとは にほんじんと おもいます。", "あの ひとは にほんじんですと おもいます。", "あの ひとは にほんじんなと おもいます。"], "Ot + だ + と おもいます."],
      ["ミラーさんは「いってきます」（　）いいました。", ["と", "を", "が", "で"], "Iqtibos — と いいます."],
      ["タシケントで サッカーの しあい（　）あります。", ["が", "を", "に", "で"], "Tadbir — が あります."],
      ["あたらしい くうこう（　）どう おもいますか。", ["に ついて", "に とって", "で", "を"], "«...haqida» — に ついて."],
      ["A：あした パーティーに いく（　）？ B：ええ、いきます。 — «borasiz-a?»", ["でしょう", "ましょう", "ですか", "でした"], "Tasdiq kutish — ～でしょう？"],
      ["ちょっと おちゃ（　）のみませんか。 — «choy-poy»", ["でも", "しか", "だけ", "まで"], "Taklifni yumshatish — でも."],
      ["«Ertaga yomg'ir yog'maydi deb o'ylayman»", ["あしたは あめが ふらないと おもいます。", "あしたは あめが ふりませんと おもいます。", "あしたは あめが ふるないと おもいます。", "あしたは あめが ふらないを おもいます。"], "Oddiy inkor shakl + と おもいます."],
    ],
  },

  {
    n: 22,
    title: "Aniqlovchi gaplar",
    intro: "Otni butun gap bilan aniqlash: «men kecha sotib olgan kitob», «ko'zoynak taqqan odam».",
    vocab: [
      "きます|着ます|kiymoq (ko'ylak, kostyum)",
      "はきます||kiymoq (shim, poyabzal)",
      "かぶります||kiymoq (bosh kiyim)",
      "かけます||taqmoq (ko'zoynak)",
      "うまれます|生まれます|tug'ilmoq",
      "コート||palto",
      "セーター||sviter",
      "スーツ||kostyum",
      "ぼうし|帽子|bosh kiyim, shlyapa",
      "めがね|眼鏡|ko'zoynak",
      "ケーキ||tort",
      "おべんとう|お弁当|bento (tushlik qutisi)",
      "ロボット||robot",
      "ユーモア||hazil-mutoyiba",
      "つごう|都合|imkoniyat, qulaylik",
      "よく||ko'pincha, tez-tez",
      "おめでとう ございます||tabriklayman",
      "やちん|家賃|ijara haqi",
      "ダイニングキッチン||oshxona-ovqatxona",
      "わしつ|和室|yaponcha xona (tatami)",
      "おしいれ|押し入れ|devor shkafi",
      "ふとん|布団|futon (yerga to'shaladigan to'shak)",
      "アパート||kvartira",
      "ズボン||shim",
      "スカート||yubka",
      "くつした|靴下|paypoq",
    ],
    grammar: [
      {
        t: "Gap bilan aniqlash",
        p: "oddiy shakl + N",
        x: `Yapon tilida otni butun bir gap aniqlashi mumkin. Aniqlovchi gap **oddiy shakl**da bo'lib, **otdan oldin** turadi:
        - きのう **かった** ほん — kecha **sotib olgan** kitob(im)
        - タシケントで **うまれた** ひと — Toshkentda **tug'ilgan** odam

        ! Bu o'zbek tiliga juda o'xshaydi: «men kecha **o'qigan** kitob» — tartib aynan bir xil!

        Aniqlovchi gap ichidagi ega **が** bilan belgilanadi (は emas): わたし**が** かった ほん.`,
        ex: [
          ["これは わたしが きのう かった ほんです。", "Bu men kecha sotib olgan kitob."],
          ["これは ミラーさんが すんで いる うちです。", "Bu Miller yashayotgan uy."],
          ["タシケントで うまれた ひとは だれですか。", "Toshkentda tug'ilgan odam kim?"],
        ],
      },
      {
        t: "Aniqlangan ot gapda",
        p: "［aniqlovchi gap + N］ は／を／が ...",
        x: `Aniqlovchi gap bilan birga ot oddiy ot kabi gapning istalgan joyida kela oladi — ega, to'ldiruvchi va hokazo:
        - [ミラーさんが つくった ケーキ] **は** おいしいです — Miller tayyorlagan tort mazali.
        - わたしは [あにが とった しゃしん] **が** すきです — Akam olgan suratlarni yoqtiraman.`,
        ex: [
          ["ミラーさんが つくった ケーキは おいしいです。", "Miller tayyorlagan tort mazali."],
          ["わたしは あにが とった しゃしんが すきです。", "Men akam olgan suratlarni yoqtiraman."],
          ["きのう あった ひとの なまえを わすれました。", "Kecha uchrashgan odamning ismini unutdim."],
        ],
      },
      {
        t: "Kiyimlar bilan tasvirlash",
        p: "きて いる／はいて いる／かぶって いる／かけて いる ひと",
        x: `Odamni kiyimiga qarab tasvirlashda turli fe'llar ishlatiladi:
        - **きます** — tanaga (ko'ylak, sviter, palto): セーターを きて いる
        - **はきます** — beldan pastga (shim, yubka, poyabzal, paypoq): くつを はいて いる
        - **かぶります** — boshga: ぼうしを かぶって いる
        - **かけます** — ko'zoynak: めがねを かけて いる

        O'zbekchada hammasi «kiymoq», yapon tilida esa farqlanadi!`,
        ex: [
          ["めがねを かけて いる ひとは だれですか。", "Ko'zoynak taqqan odam kim?"],
          ["あかい セーターを きて いる ひとが マリカさんです。", "Qizil sviter kiygan odam — Malika."],
          ["あの ぼうしを かぶって いる おとこの こは だれですか。", "Anavi shlyapa kiygan o'g'il bola kim?"],
        ],
      },
      {
        t: "Vaqt, va'da, ish: V じかん／やくそく／ようじ",
        p: "V(lug'at) じかん／やくそく／ようじ",
        x: `Harakat otlari ham aniqlovchi gap bilan keladi:
        - あさごはんを たべる **じかん** — nonushta qilishga vaqt
        - ともだちと あう **やくそく** — do'stim bilan uchrashuv (kelishuvi)
        - ぎんこうへ いく **ようじ** — bankka borish ishi`,
        ex: [
          ["わたしは あさごはんを たべる じかんが ありません。", "Nonushta qilishga vaqtim yo'q."],
          ["きょうは ともだちと あう やくそくが あります。", "Bugun do'stim bilan uchrashuvim bor."],
        ],
      },
    ],
    quiz: [
      ["これは わたし（　）とった しゃしんです。", ["が", "は", "を", "で"], "Aniqlovchi gap ichidagi ega — が."],
      ["«Men kecha sotib olgan kitob»", ["わたしが きのう かった ほん", "わたしが きのう かいました ほん", "わたしは きのう かった ほん", "ほん わたしが きのう かった"], "Oddiy shakl + ot; ichki ega — が."],
      ["めがねを（　）いる ひとは だれですか。", ["かけて", "きて", "はいて", "かぶって"], "Ko'zoynak — かけます."],
      ["くつを（　）います。", ["はいて", "きて", "かけて", "かぶって"], "Poyabzal, shim — はきます."],
      ["ぼうしを（　）いる おとこの ひと", ["かぶって", "かけて", "きて", "はいて"], "Bosh kiyim — かぶります."],
      ["あさごはんを たべる（　）が ありません。 — «vaqtim yo'q»", ["じかん", "やくそく", "ようじ", "しゅみ"], "Vaqt — じかん."],
      ["«Toshkentda tug'ilgan odam»", ["タシケントで うまれた ひと", "タシケントで うまれましたの ひと", "タシケントで うまれたな ひと", "ひと タシケントで うまれた"], "Oddiy shakl to'g'ridan-to'g'ri otga qo'shiladi."],
      ["Qaysi gap XATO?", ["これは わたしは かいた えです。", "これは わたしが かいた えです。", "わたしが かいた えは これです。", "これは あにが かいた えです。"], "Aniqlovchi gap ichida は ishlatilmaydi."],
    ],
  },

  {
    n: 23,
    title: "Qachonki...",
    intro: "～とき (...ganda), ～と (...sa, doim), yo'nalish ko'rsatish: はしを わたります.",
    vocab: [
      "ききます|聞きます|so'ramoq (ustozdan)",
      "まわします|回します|aylantirmoq, burab qo'ymoq",
      "ひきます|引きます|tortmoq",
      "かえます|変えます|o'zgartirmoq",
      "さわります|触ります|tegmoq, ushlamoq",
      "でます|出ます|chiqmoq (qaytim)",
      "あるきます|歩きます|yurmoq",
      "わたります|渡ります|kesib o'tmoq (ko'prik, ko'cha)",
      "まがります|曲がります|burilmoq",
      "さびしい|寂しい|yolg'iz, zerikarli",
      "おゆ|お湯|issiq suv",
      "おと|音|tovush, ovoz",
      "サイズ||o'lcham",
      "こしょう|故障|buzilish, nosozlik",
      "みち|道|yo'l",
      "こうさてん|交差点|chorraha",
      "しんごう|信号|svetofor",
      "かど|角|burchak",
      "はし|橋|ko'prik",
      "ちゅうしゃじょう|駐車場|avtoturargoh",
      "たてもの|建物|bino",
      "なんかいも|何回も|necha marta, qayta-qayta",
      "～め|～目|...-chi (tartib)",
      "ただいま||men keldim",
      "いってきます||boraman, kelaman (uydan chiqishda)",
      "いってらっしゃい||yaxshi borib keling",
      "おやすみなさい||xayrli tun",
    ],
    grammar: [
      {
        t: "«...ganda»: ～とき",
        p: "V(lug'at／ない) ・ い-sifat ・ な-sifat な ・ N の + とき",
        x: `**とき** — «payt», «...ganda». Undan oldin so'zlar ot aniqlovchisi kabi bog'lanadi:
        - V: ほんを **かりる** とき
        - い-sifat: **さむい** とき
        - な-sifat: **ひまな** とき
        - Ot: **こどもの** とき (bolaligimda)`,
        ex: [
          ["としょかんで ほんを かりる とき、カードが いります。", "Kutubxonadan kitob olganda karta kerak bo'ladi."],
          ["ひまな とき、えいがを みます。", "Bo'sh vaqtimda kino ko'raman."],
          ["こどもの とき、よく かわで およぎました。", "Bolaligimda daryoda tez-tez suzardim."],
          ["さむい とき、あつい おちゃを のみます。", "Sovuq bo'lganda issiq choy ichaman."],
        ],
      },
      {
        t: "る とき va た とき",
        p: "V(lug'at) とき ／ V(た) とき",
        x: `とき dan oldingi fe'l shakli harakatlar tartibini bildiradi:
        - **V(lug'at) とき** — harakat hali tugamagan payt (oldin yoki yo'lda): うちへ かえる とき、ケーキを かいます (uyga qaytayotganda tort olaman)
        - **V(た) とき** — harakat tugagandan keyin: うちへ かえった とき、「ただいま」と いいます (uyga qaytganda «tadaima» deyman)`,
        ex: [
          ["にほんへ くる とき、くうこうで カメラを かいました。", "Yaponiyaga kelayotganda aeroportda fotoapparat oldim."],
          ["うちへ かえった とき、「ただいま」と いいます。", "Uyga qaytganda «tadaima» deyman."],
        ],
      },
      {
        t: "Doimiy natija: V(lug'at) と、～",
        p: "V(lug'at) と、S",
        x: `**V と、S** — V bajarilsa, doimo (muqarrar ravishda) S sodir bo'ladi. Qurilmalarni ishlatish, yo'l ko'rsatish, tabiat hodisalarida ishlatiladi:
        - この ボタンを おす**と**、おつりが でます — Bu tugmani bossangiz, qaytim chiqadi.

        ! Ikkinchi qismda istak, taklif, iltimos (～たい, ～ましょう, ～て ください) ishlatilmaydi.`,
        ex: [
          ["この ボタンを おすと、おつりが でます。", "Bu tugmani bossangiz, qaytim chiqadi."],
          ["みぎへ まがると、ゆうびんきょくが あります。", "O'ngga burilsangiz, pochta bor."],
          ["これを まわすと、おとが おおきく なります。", "Buni aylantirsangiz, ovoz balandlashadi."],
        ],
      },
      {
        t: "Harakat yo'li: N を V",
        p: "N(joy) を あるきます／わたります／まがります",
        x: `Harakat **orqali o'tadigan** joy **を** bilan belgilanadi:
        - はし**を** わたります — ko'prik**dan** o'taman
        - こうえん**を** さんぽします — park**da** sayr qilaman
        - かど**を** まがります — burchak**dan** buriluman

        Bu を to'ldiruvchi emas, balki «yo'l, masofa» ma'nosida.`,
        ex: [
          ["この はしを わたると、えきが あります。", "Bu ko'prikdan o'tsangiz, bekat bor."],
          ["つぎの かどを ひだりへ まがって ください。", "Keyingi burchakdan chapga buriling."],
          ["まいあさ こうえんを さんぽします。", "Har kuni ertalab parkda sayr qilaman."],
        ],
      },
    ],
    quiz: [
      ["としょかんで ほんを かりる（　）、カードが いります。", ["とき", "まえ", "から", "けど"], "«...ganda» — とき."],
      ["ひま（　）とき、えいがを みます。", ["な", "の", "だ", "に"], "な-sifat + な + とき."],
      ["こども（　）とき、よく およぎました。", ["の", "な", "だ", "が"], "Ot + の + とき."],
      ["この ボタンを おす（　）、おつりが でます。", ["と", "から", "けど", "が"], "Muqarrar natija — V と."],
      ["はし（　）わたります。", ["を", "に", "で", "へ"], "O'tiladigan joy — を."],
      ["うちへ かえった とき、「（　）」と いいます。", ["ただいま", "いってきます", "おやすみなさい", "いただきます"], "Uyga qaytganda — ただいま."],
      ["«Shu yo'ldan o'ngga burilsangiz, pochta bor»", ["この みちを みぎへ まがると、ゆうびんきょくが あります。", "この みちを みぎへ まがりと、ゆうびんきょくが あります。", "この みちで みぎへ まがると、ゆうびんきょくを あります。", "この みちを みぎへ まがったと、ゆうびんきょくが あります。"], "V(lug'at) + と."],
      ["さむい（　）、コートを きます。", ["とき", "な とき", "の とき", "だ とき"], "い-sifat + とき (o'zgarishsiz)."],
    ],
  },

  {
    n: 24,
    title: "Yordam berish va olish",
    intro: "くれます va harakat bilan yordam: ～て あげます, ～て もらいます, ～て くれます.",
    vocab: [
      "くれます||bermoq (menga)",
      "なおします|直します|tuzatmoq",
      "つれて いきます|連れて行きます|olib bormoq (odamni)",
      "つれて きます|連れて来ます|olib kelmoq (odamni)",
      "おくります|送ります|kuzatib qo'ymoq (odamni)",
      "しょうかいします|紹介します|tanishtirmoq",
      "あんないします|案内します|yo'l ko'rsatmoq, ekskursiya qilmoq",
      "せつめいします|説明します|tushuntirmoq",
      "おじいさん||bobo",
      "おばあさん||buvi",
      "じゅんび|準備|tayyorgarlik",
      "ひっこし|引っ越し|ko'chish (uy)",
      "おかし|お菓子|shirinlik",
      "ホームステイ||oilada yashash (talaba)",
      "ぜんぶ|全部|hammasi",
      "じぶんで|自分で|o'zim, mustaqil",
      "ほかに||boshqa yana",
      "ははの ひ|母の日|Onalar kuni",
      "せんしゅう|先週|o'tgan hafta",
    ],
    grammar: [
      {
        t: "Menga berish: くれます",
        p: "N(beruvchi) は／が わたしに N を くれます",
        x: `7-darsda あげます (boshqaga bermoq) ni o'rgandik. Agar kimdir **menga** (yoki mening oilam a'zosiga) bersa, **くれます** ishlatiladi:
        - ははは わたしに セーターを **くれました** — Onam menga sviter berdi.

        ! «ははは わたしに セーターを あげました» — XATO. あげます faqat «mendan boshqaga» yo'nalishda.`,
        ex: [
          ["ははは わたしに セーターを くれました。", "Onam menga sviter berdi."],
          ["ともだちが わたしに はなを くれました。", "Do'stim menga gul berdi."],
          ["カリモフせんせいは いもうとに じしょを くれました。", "Karimov ustoz singlimga lug'at berdi."],
        ],
      },
      {
        t: "Boshqaga yordam: V て あげます",
        p: "V て あげます",
        x: `**～て あげます** — boshqa odam uchun biror ishni qilib bermoq: «...ib bermoq».

        ! Kattalarga to'g'ridan-to'g'ri «～て あげます» deyish o'zini ustun qo'yishdek eshitilishi mumkin. Ularga **～ましょうか** (14-dars) bilan taklif qiling: にもつを もちましょうか.`,
        ex: [
          ["わたしは おばあさんに みちを おしえて あげました。", "Men buvijonga yo'l ko'rsatib qo'ydim."],
          ["わたしは いもうとに ほんを よんで あげました。", "Men singlimga kitob o'qib berdim."],
        ],
      },
      {
        t: "Yordam olish: V て もらいます",
        p: "N(odam) に V て もらいます",
        x: `**～て もらいます** — kimdandir menga biror ish qilib berilishi («...tirib oldim», «...ib berishdi»). Yordam ko'rsatgan odam **に** bilan belgilanadi. Minnatdorlik ohangi bor.`,
        ex: [
          ["わたしは ミラーさんに ひっこしを てつだって もらいました。", "Miller menga ko'chishda yordam berdi."],
          ["わたしは ともだちに パソコンを なおして もらいました。", "Do'stim kompyuterimni tuzatib berdi."],
        ],
      },
      {
        t: "Menga yordam: V て くれます",
        p: "N(odam) が V て くれます",
        x: `**～て くれます** — kimdir **menga** biror ish qilib berdi. Yordam ko'rsatgan odam — ega (**が**). ～て もらいます bilan ma'nosi o'xshash, faqat nuqtai nazar boshqa:
        - ミラーさん**に** てつだって **もらいました** — (Men) Millerdan yordam oldim.
        - ミラーさん**が** てつだって **くれました** — Miller (menga) yordam berdi.

        So'roqda yordam bergan odam so'ralsa: **だれが** ～て くれましたか.`,
        ex: [
          ["ははが わたしの へやを そうじして くれました。", "Onam mening xonamni tozalab berdi."],
          ["やまださんが えきまで おくって くれました。", "Yamada meni bekatgacha kuzatib qo'ydi."],
          ["A：だれが てつだって くれましたか。 ／ B：アジズさんです。", "A: Kim yordam berdi? / B: Aziz."],
        ],
      },
    ],
    quiz: [
      ["ははは わたしに セーターを（　）。", ["くれました", "あげました", "もらいました", "かしました"], "Menga berish — くれます."],
      ["わたしは ともだちに じしょを（　）。 — «Do'stimga berdim»", ["あげました", "くれました", "もらいました", "かりました"], "Boshqaga berish — あげます."],
      ["わたしは ミラーさんに ひっこしを てつだって（　）。", ["もらいました", "くれました", "あげました", "いました"], "N に ～て もらいます."],
      ["やまださんが わたしに かさを かして（　）。", ["くれました", "あげました", "もらいました", "ください"], "N が (menga) ～て くれます."],
      ["わたしは おばあさんの にもつを もって（　）。", ["あげました", "くれました", "もらいました", "ください"], "Boshqaga yordam — ～て あげます."],
      ["だれ（　）てつだって くれましたか。", ["が", "は", "を", "に"], "So'roq so'zi ega bo'lsa — が."],
      ["«Akam meni bekatgacha kuzatib qo'ydi»", ["あにが えきまで おくって くれました。", "あにが えきまで おくって あげました。", "あにを えきまで おくって もらいました。", "あには えきまで おくって もらいました。"], "Menga qilingan yaxshilik — ～て くれます."],
      ["Ustozga: «Yukingizni ko'tarishaymi?»", ["にもつを もちましょうか。", "にもつを もって あげます。", "にもつを もって くれます。", "にもつを もって もらいます。"], "Kattalarga ～ましょうか bilan taklif qilinadi."],
    ],
  },

  {
    n: 25,
    title: "Agar...",
    intro: "Shart: ～たら (agar ...sa), ～ても (...sa ham), もし va いくら.",
    vocab: [
      "かんがえます|考えます|o'ylamoq, mulohaza qilmoq",
      "つきます|着きます|yetib bormoq",
      "とります|取ります|(yoshi) qaramoq, ulg'aymoq",
      "たります|足ります|yetmoq, yetarli bo'lmoq",
      "いなか|田舎|qishloq; tug'ilgan joy",
      "たいしかん|大使館|elchixona",
      "グループ||guruh",
      "チャンス||imkoniyat",
      "おく|億|yuz million",
      "もし||agar",
      "いくら||qanchalik (...sa ham)",
      "てんきん|転勤|boshqa joyga ishga o'tkazilish",
      "こと|事|ish, narsa",
      "ひま|暇|bo'sh vaqt",
      "いろいろ おせわに なりました|いろいろお世話になりました|hamma narsa uchun rahmat",
      "がんばります|頑張ります|harakat qilmoq, tirishmoq",
      "どうぞ おげんきで|どうぞお元気で|sog' bo'ling (xayrlashganda)",
      "じしん|地震|zilzila",
      "しゅうしょくします|就職します|ishga joylashmoq",
    ],
    grammar: [
      {
        t: "Shart: ～たら",
        p: "oddiy o'tgan zamon + ら",
        x: `**～たら** — «agar ...sa». た-shaklga **ら** qo'shiladi:
        - Fe'l: ふった → ふった**ら** (yog'sa), あった → あった**ら**
        - い-sifat: やすかった → やすかった**ら** (arzon bo'lsa)
        - な-sifat/ot: ひまだった → ひまだった**ら** (bo'sh bo'lsa)
        - Inkor: ～なかったら (...masa)

        Ikkinchi qismda istak, taklif, iltimos ham ishlatilishi mumkin.`,
        ex: [
          ["あめが ふったら、でかけません。", "Yomg'ir yog'sa, chiqmayman."],
          ["おかねが あったら、りょこうしたいです。", "Pulim bo'lsa, sayohat qilgim keladi."],
          ["やすかったら、かいます。", "Arzon bo'lsa, olaman."],
          ["ひまだったら、あそびに きて ください。", "Bo'sh bo'lsangiz, mehmonga keling."],
        ],
      },
      {
        t: "«...gach»: V たら (aniq kelajak)",
        p: "V たら、～",
        x: `Agar V albatta sodir bo'lishi aniq bo'lsa, ～たら «...gach», «...ganimdan keyin» ma'nosini beradi:
        - １０じに なったら、でかけましょう — Soat 10 bo'lgach, chiqaylik.`,
        ex: [
          ["１０じに なったら、でかけましょう。", "Soat 10 bo'lgach, chiqaylik."],
          ["うちへ かえったら、すぐ シャワーを あびます。", "Uyga qaytgach, darhol dush qabul qilaman."],
        ],
      },
      {
        t: "«...sa ham»: ～ても",
        p: "V て も ／ い-sifat くても ／ な-sifat・N でも",
        x: `**～ても** — kutilgan natijaga zid: «...sa ham»:
        - Fe'l: て-shakl + も: ふって**も** (yog'sa ham)
        - い-sifat: くても: たか**くても** (qimmat bo'lsa ham)
        - な-sifat/ot: でも: ひま**でも**, にちようび**でも**`,
        ex: [
          ["あめが ふっても、でかけます。", "Yomg'ir yog'sa ham chiqaman."],
          ["たかくても、この カメラを かいたいです。", "Qimmat bo'lsa ham, bu fotoapparatni olgim keladi."],
          ["にちようびでも、はたらかなければ なりません。", "Yakshanba bo'lsa ham ishlashim kerak."],
        ],
      },
      {
        t: "もし va いくら",
        p: "もし ～たら ／ いくら ～ても",
        x: `- **もし** — «agar» ma'nosini kuchaytiradi, ～たら bilan keladi: もし １おくえん あったら...
        - **いくら** — «qanchalik ...sa ham», ～ても bilan keladi: いくら かんがえても...`,
        ex: [
          ["もし １おくえん あったら、なにを しますか。", "Agar yuz million iyenangiz bo'lsa, nima qilasiz?"],
          ["いくら かんがえても、わかりません。", "Qanchalik o'ylasam ham, tushunolmayman."],
        ],
      },
    ],
    quiz: [
      ["あめが ふっ（　）、でかけません。 — «yog'sa»", ["たら", "ても", "て", "たり"], "Shart — ～たら."],
      ["あめが ふっ（　）、でかけます。 — «yog'sa ham»", ["ても", "たら", "て", "たり"], "Zid shart — ～ても."],
      ["やす（　）、かいます。 — «arzon bo'lsa»", ["かったら", "いたら", "くたら", "かっても"], "い-sifat: かったら."],
      ["ひま（　）、あそびに きて ください。", ["だったら", "かったら", "くても", "でたら"], "な-sifat: だったら."],
      ["（　）１おくえん あったら、なにを しますか。", ["もし", "いくら", "たぶん", "きっと"], "«Agar» — もし ～たら."],
      ["（　）かんがえても、わかりません。", ["いくら", "もし", "たぶん", "なかなか"], "«Qanchalik ...sa ham» — いくら ～ても."],
      ["うちへ かえっ（　）、すぐ シャワーを あびます。 — «qaytgach»", ["たら", "ても", "たり", "た"], "Aniq kelajak — ～たら."],
      ["«Qimmat bo'lsa ham sotib olaman»", ["たかくても、かいます。", "たかいても、かいます。", "たかかったら、かいます。", "たかでも、かいます。"], "い-sifat: くても."],
    ],
  },
];
