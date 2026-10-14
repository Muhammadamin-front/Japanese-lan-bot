export default [
  {
    n: 1,
    title: "Tanishuv",
    intro: "O'zingizni tanishtirish: ism, kasb, millat va yosh haqida gapirish.",
    vocab: [
      "わたし|私|men",
      "わたしたち|私たち|biz",
      "あなた||siz, sen",
      "あのひと|あの人|anavi kishi, u",
      "あのかた|あの方|u kishi (hurmat bilan)",
      "みなさん|皆さん|hammangiz, hurmatli yig'ilganlar",
      "～さん||janob / xonim (ismga qo'shiladi)",
      "～ちゃん||(bolalar ismiga qo'shiladigan erkalash qo'shimchasi)",
      "～じん|～人|... millatli kishi",
      "せんせい|先生|o'qituvchi, ustoz (murojaatda)",
      "きょうし|教師|o'qituvchi (o'z kasbi haqida)",
      "がくせい|学生|talaba, o'quvchi",
      "かいしゃいん|会社員|kompaniya xodimi",
      "しゃいん|社員|(... kompaniyasining) xodimi",
      "ぎんこういん|銀行員|bank xodimi",
      "いしゃ|医者|shifokor",
      "けんきゅうしゃ|研究者|tadqiqotchi, olim",
      "エンジニア||muhandis",
      "だいがく|大学|universitet",
      "びょういん|病院|kasalxona",
      "だれ||kim",
      "どなた||kim (hurmat bilan)",
      "～さい|～歳|... yosh",
      "なんさい|何歳|necha yosh",
      "おいくつ||necha yoshdasiz (hurmat bilan)",
      "はい||ha",
      "いいえ||yo'q",
      "はじめまして||tanishganimdan xursandman (ilk uchrashuvda)",
      "～から きました|～から来ました|...dan keldim",
      "どうぞ よろしく おねがいします|どうぞよろしくお願いします|yaqindan tanishaylik (tanishuv oxirida)",
      "しつれいですが|失礼ですが|kechirasiz, lekin... (shaxsiy savoldan oldin)",
      "おなまえは？|お名前は？|ismingiz nima?",
      "こちらは ～さんです||bu kishi — ... (tanishtirganda)",
      "アメリカ||Amerika",
      "イギリス||Angliya",
      "インド||Hindiston",
      "かんこく|韓国|Koreya",
      "ちゅうごく|中国|Xitoy",
      "にほん|日本|Yaponiya",
      "ドイツ||Germaniya",
      "ブラジル||Braziliya",
      "ロシア||Rossiya",
      "ウズベキスタン||O'zbekiston",
    ],
    grammar: [
      {
        t: "Ot-kesimli gap: «N1 — N2»",
        p: "N1 は N2 です",
        x: `**は** — gapning mavzusini (nima haqida gapirayotganimizni) ko'rsatuvchi yuklama. Yozilishi «ha», lekin bu vazifada **«wa»** deb o'qiladi.

        **です** gapni odobli tugatadi va «...dir / ...man / ...siz» ma'nosini beradi. O'zbek tilidan farqli ravishda, です shaxsga qarab o'zgarmaydi: «men talabaman», «u talaba» — ikkalasi ham がくせいです.

        - わたしは がくせいです。 — Men talabaman.
        - アジズさんは エンジニアです。 — Aziz muhandis.

        ! Yapon tili ham o'zbek tili kabi kesimni gap oxiriga qo'yadi (ega — ... — kesim). Bu sizga katta ustunlik!`,
        ex: [
          ["わたしは マイク・ミラーです。", "Men Mayk Millerman."],
          ["アジズさんは エンジニアです。", "Aziz muhandis."],
          ["わたしは ウズベキスタンじんの がくせいです。", "Men o'zbekistonlik talabaman."],
          ["やまださんは ぎんこういんです。", "Yamada janob bank xodimi."],
        ],
      },
      {
        t: "Inkor: «N1 — N2 emas»",
        p: "N1 は N2 じゃ（では） ありません",
        x: `Ot-kesimning inkor shakli **じゃ ありません**. Rasmiy nutqda va yozuvda **では ありません** ishlatiladi (では — «dewa» deb o'qiladi).

        - がくせいです → がくせいじゃ ありません (talaba emas)
        - いしゃです → いしゃでは ありません (shifokor emas)`,
        ex: [
          ["サントスさんは がくせいじゃ ありません。", "Santos talaba emas."],
          ["わたしは いしゃでは ありません。", "Men shifokor emasman."],
          ["マリカさんは せんせいじゃ ありません。", "Malika o'qituvchi emas."],
        ],
      },
      {
        t: "So'roq gap: «...mi?»",
        p: "S か",
        x: `Gap oxiriga **か** qo'shilsa, u so'roq gapga aylanadi — xuddi o'zbekchadagi «-mi» kabi. Gapning tartibi o'zgarmaydi, ohang oxirida biroz ko'tariladi.

        Javob: **はい** (ha) yoki **いいえ** (yo'q).

        So'roq so'zli savollarda (だれ — kim, なん — nima) so'roq so'z javob turadigan joyga qo'yiladi va oxiriga yana か qo'shiladi:
        - あの ひとは だれですか。 — Anavi kishi kim?`,
        ex: [
          ["ミラーさんは アメリカじんですか。", "Miller amerikalikmi?"],
          ["A：ミラーさんは かいしゃいんですか。 ／ B：はい、かいしゃいんです。", "A: Miller kompaniya xodimimi? / B: Ha, kompaniya xodimi."],
          ["A：サントスさんは がくせいですか。 ／ B：いいえ、がくせいじゃ ありません。", "A: Santos talabami? / B: Yo'q, talaba emas."],
          ["あの かたは どなたですか。", "U kishi kim?"],
        ],
      },
      {
        t: "«Ham» ma'nosidagi も",
        p: "N も ～",
        x: `**も** — «ham» degani. U **は** o'rniga qo'yiladi (は も emas, faqat も).

        - ミラーさんは かいしゃいんです。グプタさんも かいしゃいんです。 — Miller kompaniya xodimi. Gupta ham kompaniya xodimi.`,
        ex: [
          ["アジズさんも IMCの しゃいんですか。", "Aziz ham IMC xodimimi?"],
          ["A：わたしは ウズベキスタンじんです。 ／ B：わたしも ウズベキスタンじんです。", "A: Men o'zbekman. / B: Men ham o'zbekman."],
          ["マリカさんも がくせいじゃ ありません。", "Malika ham talaba emas."],
        ],
      },
      {
        t: "Qaratqich の: «N1ning N2si»",
        p: "N1 の N2",
        x: `**の** ikki otni bog'laydi: birinchi ot ikkinchisini aniqlaydi. Bu darsda — **qayerga tegishli ekanini** bildiradi (qaysi kompaniya xodimi, qaysi universitet talabasi).

        O'zbekchadagi «-ning» ga o'xshaydi: さくらだいがくの がくせい — Sakura universitetining talabasi.`,
        ex: [
          ["わたしは さくらだいがくの がくせいです。", "Men Sakura universiteti talabasiman."],
          ["ミラーさんは IMCの しゃいんです。", "Miller IMC kompaniyasi xodimi."],
          ["カリモフさんは タシケントだいがくの せんせいです。", "Karimov Toshkent universiteti o'qituvchisi."],
        ],
      },
      {
        t: "～さん va yosh so'rash",
        p: "～さん ／ なんさい ／ おいくつ",
        x: `**～さん** boshqa odamning ismi yoki familiyasiga qo'shiladi va hurmat bildiradi (janob/xonim). **O'zingizning ismingizga hech qachon さん qo'shilmaydi!** Bolalarga **～ちゃん** ishlatiladi.

        Suhbatdoshga uning ismini aytib murojaat qilish odatiy hol: «あなた» so'zi juda ko'p ishlatilmaydi, chunki biroz qo'pol eshitilishi mumkin.

        Yoshni so'rash: **なんさいですか** (necha yoshdasiz), hurmat bilan — **おいくつですか**. Javob: ～さいです.`,
        ex: [
          ["A：テレサちゃんは なんさいですか。 ／ B：９さいです。", "A: Tereza necha yoshda? / B: 9 yoshda."],
          ["A：しつれいですが、おいくつですか。 ／ B：４２さいです。", "A: Kechirasiz, necha yoshdasiz? / B: 42 yoshdaman."],
        ],
      },
    ],
    quiz: [
      ["わたし（　）マリカです。", ["は", "も", "の", "か"], "Mavzuni ko'rsatish uchun は ishlatiladi."],
      ["A：がくせいですか。 B：いいえ、がくせい（　）。", ["じゃ ありません", "です", "ですか", "も"], "«Yo'q» deganda inkor shakli — じゃ ありません."],
      ["わたし（　）エンジニアです。 — «Men ham muhandisman»", ["も", "は", "の", "か"], "«Ham» ma'nosi uchun は o'rniga も qo'yiladi."],
      ["わたしは さくらだいがく（　）がくせいです。", ["の", "は", "も", "か"], "Qaysi universitet talabasi ekanini の bildiradi."],
      ["あの かたは（　）ですか。 …ワットせんせいです。", ["どなた", "なんさい", "なん", "はい"], "Odam haqida hurmat bilan so'rash — どなた (kim)."],
      ["«Men o'qituvchi emasman» — to'g'ri tarjima:", ["わたしは きょうしじゃ ありません。", "わたしは きょうしです。", "わたしは きょうしですか。", "わたしも きょうしです。"], "Inkor: N じゃ ありません."],
      ["A：アメリカじんですか。 B：（　）、アメリカじんです。", ["はい", "いいえ", "どなた", "なんさい"], "Tasdiqlovchi javob — はい."],
      ["Qaysi gapda XATO bor?", ["わたしは アジズさんです。", "こちらは アジズさんです。", "あの ひとは アジズさんです。", "アジズさんは がくせいです。"], "O'zingizning ismingizga ～さん qo'shilmaydi."],
    ],
  },

  {
    n: 2,
    title: "Bu nima?",
    intro: "Narsalarni ko'rsatib gapirish: これ・それ・あれ, kimga tegishli ekanini aytish.",
    vocab: [
      "これ||bu (menga yaqin narsa)",
      "それ||shu (suhbatdoshga yaqin narsa)",
      "あれ||anavi (ikkalamizdan uzoq narsa)",
      "この～||bu ...",
      "その～||shu ...",
      "あの～||anavi ...",
      "ほん|本|kitob",
      "じしょ|辞書|lug'at",
      "ざっし|雑誌|jurnal",
      "しんぶん|新聞|gazeta",
      "ノート||daftar",
      "てちょう|手帳|yon daftarcha",
      "めいし|名刺|vizitka",
      "カード||karta",
      "えんぴつ|鉛筆|qalam",
      "ボールペン||sharikli ruchka",
      "シャープペンシル||mexanik qalam",
      "かぎ||kalit",
      "とけい|時計|soat",
      "かさ|傘|soyabon",
      "かばん||sumka",
      "テレビ||televizor",
      "ラジオ||radio",
      "カメラ||fotoapparat",
      "コンピューター||kompyuter",
      "くるま|車|mashina, avtomobil",
      "つくえ|机|stol (yozuv stoli)",
      "いす||stul",
      "チョコレート||shokolad",
      "コーヒー||qahva",
      "おみやげ|お土産|sovg'a (safardan keltirilgan)",
      "えいご|英語|ingliz tili",
      "にほんご|日本語|yapon tili",
      "～ご|～語|... tili",
      "なん|何|nima",
      "そう||shunday",
      "ちがいます|違います|yo'q, unday emas",
      "そうですか||shundaymi? (tushundim)",
      "あのう||hmm..., kechirasiz... (ikkilanganda)",
      "えっ||a? nima? (hayratlanganda)",
      "どうぞ||marhamat",
      "ありがとう ございます||rahmat",
      "これから おせわに なります|これからお世話になります|bundan buyon sizlarga suyanaman (yangi joyda)",
      "こちらこそ よろしく||men ham tanishganimdan xursandman",
    ],
    grammar: [
      {
        t: "Ko'rsatish olmoshlari: これ・それ・あれ",
        p: "これ／それ／あれ は N です",
        x: `Bu so'zlar o'zi alohida ot vazifasida keladi:
        - **これ** — gapiruvchiga yaqin narsa (bu)
        - **それ** — tinglovchiga yaqin narsa (shu)
        - **あれ** — ikkalasidan ham uzoq narsa (anavi)

        ! Diqqat: yaponlar masofani «men — sen — u» bo'yicha ajratadi. Suhbatdoshingiz qo'lidagi narsa — それ.`,
        ex: [
          ["これは じしょです。", "Bu lug'at."],
          ["それは わたしの かさです。", "Shu mening soyabonim."],
          ["あれは だれの かばんですか。", "Anavi kimning sumkasi?"],
        ],
      },
      {
        t: "Otdan oldingi この・その・あの",
        p: "この／その／あの N",
        x: `**この, その, あの** yolg'iz ishlatilmaydi — ulardan keyin albatta ot keladi.

        - これは ほんです。 — Bu (narsa) kitob.
        - この ほんは わたしのです。 — Bu kitob meniki.

        Ya'ni これ = «bu narsa», この = «bu ...» (keyingi otga bog'lanadi).`,
        ex: [
          ["この ほんは わたしのです。", "Bu kitob meniki."],
          ["あの ひとは だれですか。", "Anavi kishi kim?"],
          ["その かばんは アジズさんのです。", "Shu sumka Azizniki."],
        ],
      },
      {
        t: "そうです ／ ちがいます",
        p: "はい、そうです ／ いいえ、ちがいます",
        x: `Ot-kesimli savolga qisqa javob berish uchun **そう** («shunday») ishlatiladi:
        - はい、**そうです**。 — Ha, shunday.
        - いいえ、**そうじゃ ありません** yoki **ちがいます**。 — Yo'q, unday emas.

        **そうですか** esa yangi ma'lumotni qabul qilganingizni bildiradi: «Shundaymi, tushundim».`,
        ex: [
          ["A：それは めいしですか。 ／ B：はい、そうです。", "A: Shu vizitkami? / B: Ha, shunday."],
          ["A：それは ノートですか。 ／ B：いいえ、ちがいます。てちょうです。", "A: Shu daftarmi? / B: Yo'q. Yon daftarcha."],
          ["A：これは にほんの カメラです。 ／ B：そうですか。", "A: Bu yapon fotoapparati. / B: Shundaymi."],
        ],
      },
      {
        t: "Tanlov so'rog'i: «...mi yoki ...mi?»",
        p: "S1 か、S2 か",
        x: `Ikki variantdan birini tanlashni so'rash uchun ikkala gap ham か bilan tugaydi. Javobda はい／いいえ ishlatilmaydi — to'g'ri variantning o'zi aytiladi.`,
        ex: [
          ["A：これは「９」ですか、「７」ですか。 ／ B：「９」です。", "A: Bu «9»mi yoki «7»mi? / B: «9»."],
          ["それは ボールペンですか、シャープペンシルですか。", "Shu sharikli ruchkami yoki mexanik qalammi?"],
        ],
      },
      {
        t: "の: tegishlilik va mazmun",
        p: "N1 の N2 ／ N1 の",
        x: `**の** bu darsda ikki ma'noda:
        - **tegishlilik**: わたしの ほん — mening kitobim
        - **mazmun**: コンピューターの ほん — kompyuter haqidagi kitob

        Agar N2 ma'lum bo'lsa, uni tushirib qoldirish mumkin: あれは わたしの**です** — anavi meniki. Bu o'zbekchadagi «meniki», «Azizniki» shakliga to'liq mos.

        Mazmunni so'rash: **なんの** N ですか — «nima haqidagi N?»`,
        ex: [
          ["これは わたしの ほんです。", "Bu mening kitobim."],
          ["これは コンピューターの ほんです。", "Bu kompyuter haqidagi kitob."],
          ["これは なんの ざっしですか。", "Bu qanday (nima haqidagi) jurnal?"],
          ["この かさは だれのですか。", "Bu soyabon kimniki?"],
        ],
      },
    ],
    quiz: [
      ["（　）は わたしの かさです。 — «Bu (qo'limdagi) mening soyabonim»", ["これ", "この", "それ", "あの"], "O'zingizga yaqin narsa — これ; yolg'iz keladi."],
      ["（　）ほんは だれのですか。", ["その", "それ", "なん", "だれ"], "Otdan oldin その ishlatiladi; それ yolg'iz keladi."],
      ["これは（　）の ざっしですか。 …カメラの ざっしです。", ["なん", "だれ", "どなた", "なんさい"], "Mazmunini so'rash — なんの N."],
      ["それは わたし（　）です。 — «U meniki»", ["の", "は", "も", "か"], "«Meniki» — わたしの."],
      ["A：これは ボールペンですか。 B：いいえ、（　）。シャープペンシルです。", ["ちがいます", "そうです", "そうですか", "どうぞ"], "Rad etish — ちがいます."],
      ["これは「あ」ですか、「お」（　）。", ["ですか", "です", "じゃ ありません", "も"], "Tanlov so'rog'ida ikkala qism ham か bilan tugaydi."],
      ["«Bu yapon tili kitobi»", ["これは にほんごの ほんです。", "これは ほんの にほんごです。", "この ほんは にほんごです。", "これは にほんごです ほん。"], "N1 の N2: aniqlovchi oldin, asosiy ot keyin."],
      ["あれは（　）の かばんですか。 …カリモフさんのです。", ["だれ", "なん", "どなた", "この"], "Kimga tegishli — だれの."],
    ],
  },

  {
    n: 3,
    title: "Bu yer qayer?",
    intro: "Joylarni so'rash va ko'rsatish, narxni bilish: ここ・そこ・あそこ・どこ, いくら.",
    vocab: [
      "ここ||bu yer",
      "そこ||shu yer",
      "あそこ||anavi yer, u yer",
      "どこ||qayer",
      "こちら||bu tomon, bu yer (odobli)",
      "そちら||shu tomon (odobli)",
      "あちら||u tomon (odobli)",
      "どちら||qaysi tomon, qayer (odobli)",
      "きょうしつ|教室|sinf xonasi",
      "しょくどう|食堂|oshxona (yemakxona)",
      "じむしょ|事務所|ofis",
      "かいぎしつ|会議室|majlislar zali",
      "うけつけ|受付|qabulxona",
      "ロビー||vestibyul, foye",
      "へや|部屋|xona",
      "トイレ||hojatxona",
      "おてあらい|お手洗い|hojatxona (odobli)",
      "かいだん|階段|zinapoya",
      "エレベーター||lift",
      "エスカレーター||eskalator",
      "じどうはんばいき|自動販売機|savdo avtomati",
      "でんわ|電話|telefon",
      "おくに|お国|mamlakat, vatan (sizning)",
      "かいしゃ|会社|kompaniya",
      "うち||uy",
      "くつ|靴|poyabzal",
      "ネクタイ||galstuk",
      "うりば|売り場|savdo bo'limi (do'konda)",
      "ちか|地下|yerto'la, yer osti qavati",
      "～かい|～階|...-qavat",
      "なんがい|何階|nechanchi qavat",
      "～えん|～円|... iyena",
      "いくら||qancha (narx)",
      "ひゃく|百|yuz",
      "せん|千|ming",
      "まん|万|o'n ming",
      "すみません||kechirasiz",
      "みせて ください|見せてください|ko'rsating",
      "ください||bering",
      "じゃ||unda, xo'sh",
      "イタリア||Italiya",
      "スイス||Shveytsariya",
      "フランス||Fransiya",
    ],
    grammar: [
      {
        t: "Joy olmoshlari: ここ・そこ・あそこ",
        p: "ここ／そこ／あそこ は N(joy) です",
        x: `これ・それ・あれ narsalarni ko'rsatsa, **ここ・そこ・あそこ** joylarni ko'rsatadi:
        - **ここ** — gapiruvchi turgan joy (bu yer)
        - **そこ** — tinglovchi turgan joy (shu yer)
        - **あそこ** — ikkalasidan uzoq joy (anavi yer)

        Ikki xil tartibda gapirish mumkin:
        - ここは しょくどうです。 — Bu yer oshxona.
        - しょくどうは ここです。 — Oshxona shu yerda.`,
        ex: [
          ["ここは きょうしつです。", "Bu yer sinf xonasi."],
          ["ミラーさんの へやは あそこです。", "Millerning xonasi anavi yerda."],
          ["すみません、トイレは どこですか。", "Kechirasiz, hojatxona qayerda?"],
        ],
      },
      {
        t: "Odobli shakl: こちら・そちら・あちら・どちら",
        p: "N は どちらですか",
        x: `**こちら・そちら・あちら・どちら** asli yo'nalishni bildiradi, ammo ここ・そこ・あそこ・どこ ning **odobli** shakli sifatida ham ishlatiladi (do'kon, mehmonxona, ish joyida).

        **どちら** bilan mamlakat, kompaniya, maktab nomini ham so'rash mumkin:
        - おくには どちらですか。 — Qaysi mamlakatdansiz?
        - かいしゃは どちらですか。 — Qaysi kompaniyada ishlaysiz?`,
        ex: [
          ["エレベーターは あちらです。", "Lift u tomonda."],
          ["A：おくには どちらですか。 ／ B：ウズベキスタンです。", "A: Mamlakatingiz qayer? / B: O'zbekiston."],
          ["A：かいしゃは どちらですか。 ／ B：IMCです。", "A: Kompaniyangiz qaysi? / B: IMC."],
        ],
      },
      {
        t: "の: ishlab chiqarilgan joy",
        p: "N1(mamlakat／firma) の N2",
        x: `N1 の N2 qolipida N1 mamlakat yoki kompaniya bo'lsa — mahsulot **qayerda ishlab chiqarilganini** bildiradi. So'rash: **どこの** N ですか.

        ! Diqqat: どこの — «qayerning», だれの — «kimning». Javobga qarab tanlang.`,
        ex: [
          ["これは にほんの くるまです。", "Bu yapon mashinasi."],
          ["A：これは どこの とけいですか。 ／ B：スイスの とけいです。", "A: Bu qayerning soati? / B: Shveytsariya soati."],
          ["それは どこの コンピューターですか。", "Shu qaysi (davlat/firma) kompyuteri?"],
        ],
      },
      {
        t: "こ・そ・あ・ど tizimi",
        p: "これ・この・ここ・こちら",
        x: `Yapon tilida ko'rsatish so'zlari bitta tizimni tashkil qiladi:
        - **こ-** (gapiruvchiga yaqin): これ, この, ここ, こちら
        - **そ-** (tinglovchiga yaqin): それ, その, そこ, そちら
        - **あ-** (ikkalasidan uzoq): あれ, あの, あそこ, あちら
        - **ど-** (so'roq): どれ, どの, どこ, どちら

        Ko'rinib turibdiki, qatorni bilsangiz, butun jadvalni eslab qolish oson!`,
        ex: [
          ["くつうりばは ちか１かいです。", "Poyabzal bo'limi yer ostidagi 1-qavatda."],
          ["A：ネクタイうりばは なんがいですか。 ／ B：５かいです。", "A: Galstuk bo'limi nechanchi qavatda? / B: 5-qavatda."],
        ],
      },
      {
        t: "Narx: いくら va katta sonlar",
        p: "N は いくらですか",
        x: `Narxni so'rash: **いくらですか**. Javob: ～えんです.

        Sonlarda tovush o'zgarishlariga e'tibor bering:
        - 100 ひゃく, 300 さん**び**ゃく, 600 ろ**っぴ**ゃく, 800 は**っぴ**ゃく
        - 1000 せん, 3000 さん**ぜ**ん, 8000 は**っせ**ん
        - 10 000 いちまん (yaponlar 4 xonadan guruhlaydi: 1まん = 10 000)

        Masalan: 15 000 = いちまん ごせん.`,
        ex: [
          ["この とけいは いくらですか。", "Bu soat qancha turadi?"],
          ["A：この ネクタイは いくらですか。 ／ B：３,５００えんです。", "A: Bu galstuk qancha? / B: 3500 iyena."],
          ["じゃ、これを ください。", "Unda, mana buni bering."],
        ],
      },
    ],
    quiz: [
      ["トイレは（　）ですか。 …あそこです。", ["どこ", "なん", "だれ", "いくら"], "Joyni so'rash — どこ."],
      ["«Oshxona shu yerda (siz turgan joyda)»", ["しょくどうは そこです。", "しょくどうは ここです。", "しょくどうは あそこです。", "しょくどうは どこですか。"], "Tinglovchiga yaqin joy — そこ."],
      ["おくには（　）ですか。 …ウズベキスタンです。", ["どちら", "どれ", "だれ", "なん"], "Mamlakatni odobli so'rash — どちら."],
      ["これは（　）の くるまですか。 …にほんの くるまです。", ["どこ", "なん", "いくら", "どなた"], "Ishlab chiqarilgan joyni so'rash — どこの."],
      ["300 iyena", ["さんびゃくえん", "さんひゃくえん", "さんぴゃくえん", "みっつひゃくえん"], "3 + ひゃく → さんびゃく."],
      ["8000", ["はっせん", "はちせん", "はっぜん", "はちぜん"], "8 + せん → はっせん."],
      ["この ネクタイは（　）ですか。 …３,０００えんです。", ["いくら", "どこ", "なん", "どちら"], "Narx — いくら."],
      ["エレベーターは（　）ですか。 — odobli so'rash", ["どちら", "どれ", "どの", "だれ"], "Joyni odobli so'rash — どちら."],
    ],
  },

  {
    n: 4,
    title: "Soat nechada?",
    intro: "Vaqtni aytish, fe'llarning ～ます shakli: hozirgi-kelasi va o'tgan zamon.",
    vocab: [
      "おきます|起きます|turmoq, uyg'onmoq",
      "ねます|寝ます|uxlamoq, yotmoq",
      "はたらきます|働きます|ishlamoq",
      "やすみます|休みます|dam olmoq",
      "べんきょうします|勉強します|o'qimoq, dars qilmoq",
      "おわります|終わります|tugamoq",
      "デパート||univermag",
      "ぎんこう|銀行|bank",
      "ゆうびんきょく|郵便局|pochta",
      "としょかん|図書館|kutubxona",
      "びじゅつかん|美術館|san'at muzeyi",
      "いま|今|hozir",
      "～じ|～時|soat ...",
      "～ふん|～分|... daqiqa",
      "はん|半|yarim",
      "なんじ|何時|soat necha",
      "なんぷん|何分|necha daqiqa",
      "ごぜん|午前|tushgacha (a.m.)",
      "ごご|午後|tushdan keyin (p.m.)",
      "あさ|朝|ertalab",
      "ひる|昼|kunduz, tush payti",
      "ばん|晩|kechqurun",
      "よる|夜|tun, kechasi",
      "おととい||o'tgan kuni",
      "きのう||kecha",
      "きょう||bugun",
      "あした||ertaga",
      "あさって||indinga",
      "けさ||bugun ertalab",
      "こんばん|今晩|bugun kechqurun",
      "やすみ|休み|dam olish kuni, tanaffus",
      "ひるやすみ|昼休み|tushlik tanaffusi",
      "しけん|試験|imtihon",
      "かいぎ|会議|majlis",
      "まいあさ|毎朝|har kuni ertalab",
      "まいばん|毎晩|har kuni kechqurun",
      "まいにち|毎日|har kuni",
      "げつようび|月曜日|dushanba",
      "かようび|火曜日|seshanba",
      "すいようび|水曜日|chorshanba",
      "もくようび|木曜日|payshanba",
      "きんようび|金曜日|juma",
      "どようび|土曜日|shanba",
      "にちようび|日曜日|yakshanba",
      "なんようび|何曜日|haftaning qaysi kuni",
      "～から||...dan",
      "～まで||...gacha",
      "～と～||... va ...",
      "たいへんですね|大変ですね|qiyin ekan-a",
    ],
    grammar: [
      {
        t: "Vaqtni aytish",
        p: "いま ～じ ～ふん です",
        x: `Soat: **～じ**, daqiqa: **～ふん / ～ぷん**. Yarim — **はん**.

        Soatlarda istisnolar: 4じ — **よじ**, 7じ — **しちじ**, 9じ — **くじ**.

        Daqiqalarda tovush o'zgaradi:
        - 1 いっ**ぷん**, 3 さん**ぷん**, 4 よん**ぷん**, 6 ろっ**ぷん**, 8 はっ**ぷん**, 10 じゅっ**ぷん**
        - 2 に**ふん**, 5 ご**ふん**, 7 なな**ふん**, 9 きゅう**ふん**

        So'rash: なんじですか (soat necha?), なんぷんですか (necha daqiqa?).`,
        ex: [
          ["いま ４じ５ふんです。", "Hozir soat 4 dan 5 daqiqa o'tdi."],
          ["タシケントは いま なんじですか。", "Toshkentda hozir soat necha?"],
          ["A：いま なんじですか。 ／ B：７じはんです。", "A: Hozir soat necha? / B: Yetti yarim."],
        ],
      },
      {
        t: "Fe'lning ～ます shakli",
        p: "V ます／ません／ました／ませんでした",
        x: `Yapon fe'li shaxs va songa qarab o'zgarmaydi — faqat **zamon** va **bo'lishli/bo'lishsiz**likka qarab o'zgaradi:

        - **～ます** — hozirgi-kelasi zamon (odat yoki kelajak): おきます — turaman / turadi
        - **～ません** — inkori: おきません — turmayman
        - **～ました** — o'tgan zamon: おきました — turdim
        - **～ませんでした** — o'tgan zamon inkori: おきませんでした — turmadim

        ! Ega ko'pincha tushirib qoldiriladi: «きのう べんきょうしました» — (Men) kecha dars qildim.`,
        ex: [
          ["わたしは まいあさ ６じに おきます。", "Men har kuni ertalab soat 6 da turaman."],
          ["あしたは はたらきません。", "Ertaga ishlamayman."],
          ["きのう べんきょうしました。", "Kecha dars qildim."],
          ["おととい やすみませんでした。", "O'tgan kuni dam olmadim."],
        ],
      },
      {
        t: "Aniq vaqt: N に V",
        p: "N(vaqt) に V",
        x: `Harakatning **aniq vaqtini** ko'rsatishda vaqtdan keyin **に** qo'yiladi (o'zbekcha «soat 6 **da**»).

        - Raqamli vaqtlar bilan に **shart**: ６じに, ３がつ２１にちに
        - Hafta kunlari bilan に ixtiyoriy: にちようび（に）
        - Nisbiy vaqt so'zlari bilan に **qo'yilmaydi**: きょう, あした, きのう, まいあさ, らいしゅう...`,
        ex: [
          ["わたしは ６じはんに おきます。", "Men olti yarimda turaman."],
          ["まいばん １１じに ねます。", "Har kuni kechqurun soat 11 da yotaman."],
          ["にちようびに やすみます。", "Yakshanba kuni dam olaman."],
        ],
      },
      {
        t: "«...dan ...gacha»",
        p: "N1 から N2 まで",
        x: `**から** — boshlanish nuqtasi («-dan»), **まで** — tugash nuqtasi («-gacha»). Vaqt uchun ham, joy uchun ham ishlatiladi. O'zbek tilidagi qo'shimchalarga to'liq mos!

        Ular です bilan ham to'g'ridan-to'g'ri ishlatiladi: ぎんこうは ９じから ３じまでです。`,
        ex: [
          ["ぎんこうは ９じから ３じまでです。", "Bank soat 9 dan 3 gacha ishlaydi."],
          ["わたしは ９じから ５じまで はたらきます。", "Men soat 9 dan 5 gacha ishlayman."],
          ["ひるやすみは １２じから １じまでです。", "Tushlik tanaffusi 12 dan 1 gacha."],
        ],
      },
      {
        t: "Otlarni bog'lash: N1 と N2",
        p: "N1 と N2",
        x: `**と** ikki otni «va» ma'nosida bog'laydi. Faqat otlar orasida ishlatiladi (gaplarni bog'lamaydi).`,
        ex: [
          ["ぎんこうの やすみは どようびと にちようびです。", "Bankning dam olish kunlari — shanba va yakshanba."],
          ["しけんは げつようびと もくようびです。", "Imtihonlar dushanba va payshanba kuni."],
        ],
      },
      {
        t: "Hamdardlik yuklamasi ね",
        p: "S ね",
        x: `Gap oxiridagi **ね** suhbatdoshning fikriga qo'shilish, hamdardlik yoki tasdiq kutishni bildiradi — o'zbekchadagi «-a», «shunaqa-ku» kabi.

        - たいへんですね。 — Qiyin ekan-a.`,
        ex: [
          ["A：まいばん １２じまで べんきょうします。 ／ B：たいへんですね。", "A: Har kuni kechasi soat 12 gacha dars qilaman. / B: Qiyin ekan-a."],
        ],
      },
    ],
    quiz: [
      ["わたしは まいあさ ６じ（　）おきます。", ["に", "から", "まで", "と"], "Aniq vaqt — に."],
      ["ぎんこうは ９じ（　）３じまでです。", ["から", "に", "と", "の"], "«...dan» — から."],
      ["きのう べんきょう（　）。 — «Kecha dars qilmadim»", ["しませんでした", "しません", "しました", "します"], "O'tgan zamon inkori — ～ませんでした."],
      ["あした はたらき（　）。 — «Ertaga ishlayman»", ["ます", "ました", "ませんでした", "ません"], "Kelasi zamon ham ～ます bilan ifodalanadi."],
      ["Soat 4", ["よじ", "よんじ", "しじ", "よっじ"], "4 soat — istisno: よじ."],
      ["10 daqiqa", ["じゅっぷん", "じゅうふん", "じゅうぶん", "とおぷん"], "10 + ふん → じゅっぷん."],
      ["やすみは どようび（　）にちようびです。", ["と", "も", "の", "から"], "Otlarni «va» bilan bog'lash — と."],
      ["Qaysi gapda XATO bor?", ["きのうに べんきょうしました。", "きのう べんきょうしました。", "９じに ねました。", "にちようびに やすみました。"], "きのう, あした kabi so'zlardan keyin に qo'yilmaydi."],
    ],
  },

  {
    n: 5,
    title: "Qayerga borasiz?",
    intro: "Borish-kelish fe'llari, transport, kim bilan va qachon borishni aytish.",
    vocab: [
      "いきます|行きます|bormoq",
      "きます|来ます|kelmoq",
      "かえります|帰ります|qaytmoq (uyga, vatanga)",
      "がっこう|学校|maktab",
      "スーパー||supermarket",
      "えき|駅|bekat, stansiya",
      "ひこうき|飛行機|samolyot",
      "ふね|船|kema",
      "でんしゃ|電車|elektropoyezd",
      "ちかてつ|地下鉄|metro",
      "しんかんせん|新幹線|Shinkansen (tezyurar poyezd)",
      "バス||avtobus",
      "タクシー||taksi",
      "じてんしゃ|自転車|velosiped",
      "あるいて|歩いて|piyoda",
      "ひと|人|odam, kishi",
      "ともだち|友達|do'st",
      "かれ|彼|u (erkak); yigiti",
      "かのじょ|彼女|u (ayol); qiz do'sti",
      "かぞく|家族|oila",
      "ひとりで|一人で|yolg'iz, bir o'zi",
      "せんしゅう|先週|o'tgan hafta",
      "こんしゅう|今週|shu hafta",
      "らいしゅう|来週|keyingi hafta",
      "せんげつ|先月|o'tgan oy",
      "こんげつ|今月|shu oy",
      "らいげつ|来月|keyingi oy",
      "きょねん|去年|o'tgan yil",
      "ことし|今年|bu yil",
      "らいねん|来年|kelasi yil",
      "～がつ|～月|...-oy",
      "なんがつ|何月|qaysi oy",
      "ついたち|1日|oyning 1-kuni",
      "ふつか|2日|2-kun; ikki kun",
      "みっか|3日|3-kun",
      "よっか|4日|4-kun",
      "いつか|5日|5-kun",
      "とおか|10日|10-kun",
      "はつか|20日|20-kun",
      "なんにち|何日|nechanchi kun",
      "いつ||qachon",
      "たんじょうび|誕生日|tug'ilgan kun",
      "ふつう|普通|oddiy (poyezd)",
      "きゅうこう|急行|tezkor (poyezd)",
      "とっきゅう|特急|ekspress",
      "つぎの|次の|keyingi",
      "～ばんせん|～番線|...-platforma (yo'l)",
      "どう いたしまして||arzimaydi",
    ],
    grammar: [
      {
        t: "Yo'nalish: N へ いきます",
        p: "N(joy) へ いきます／きます／かえります",
        x: `Harakat yo'nalishini **へ** bildiradi. Bu yuklama **«e»** deb o'qiladi! O'zbekchadagi «-ga» qo'shimchasiga mos: タシケントへ いきます — Toshkentga boraman.

        - **いきます** — bormoq (gapiruvchidan uzoqlashish)
        - **きます** — kelmoq (gapiruvchi tomonga)
        - **かえります** — qaytmoq (o'z uyiga, vataniga)

        ! へ o'rniga に ham ishlatilishi mumkin — keyingi darslarda ko'rasiz.`,
        ex: [
          ["わたしは あした タシケントへ いきます。", "Men ertaga Toshkentga boraman."],
          ["きのう どこへ いきましたか。", "Kecha qayerga bordingiz?"],
          ["ミラーさんは らいねん アメリカへ かえります。", "Miller kelasi yil Amerikaga qaytadi."],
        ],
      },
      {
        t: "Hech qayerga: どこも ～ません",
        p: "どこ(へ)も いきません",
        x: `So'roq so'zi + **も** + inkor fe'l = «hech ... ». O'zbekchadagi «hech qayerga bormadim» qurilishiga juda o'xshaydi.

        - どこ(へ)も いきません — hech qayerga bormayman
        - なにも ～ません — hech narsa ... (6-darsda)`,
        ex: [
          ["にちようびは どこも いきませんでした。", "Yakshanba kuni hech qayerga bormadim."],
          ["A：あした どこへ いきますか。 ／ B：どこも いきません。", "A: Ertaga qayerga borasiz? / B: Hech qayerga bormayman."],
        ],
      },
      {
        t: "Transport vositasi: N で",
        p: "N(transport) で いきます",
        x: `**で** bu yerda vosita (qurol)ni bildiradi — o'zbekcha «avtobus**da**», «poyezd **bilan**».

        ! Piyoda yurish — **あるいて** (で qo'shilmaydi): えきから あるいて かえりました.`,
        ex: [
          ["わたしは でんしゃで かいしゃへ いきます。", "Men ishga elektropoyezdda boraman."],
          ["えきから あるいて かえりました。", "Bekatdan piyoda qaytdim."],
          ["なんで サマルカンドへ いきますか。", "Samarqandga nima bilan borasiz?"],
        ],
      },
      {
        t: "Kim bilan: N と",
        p: "N(odam) と V",
        x: `**と** odam yoki hayvon bilan birga harakat qilishni bildiradi (o'zbekcha «... bilan»). Yolg'iz bo'lsa — **ひとりで** (と emas).`,
        ex: [
          ["かぞくと にほんへ きました。", "Oilam bilan Yaponiyaga keldim."],
          ["ひとりで とうきょうへ いきます。", "Tokioga yolg'iz boraman."],
          ["きのう ともだちと デパートへ いきました。", "Kecha do'stim bilan univermagga bordim."],
        ],
      },
      {
        t: "Qachon: いつ va sanalar",
        p: "いつ ～か ／ ～がつ ～にち",
        x: `**いつ** — «qachon». Undan keyin に qo'yilmaydi.

        Sanalar: oy — **～がつ** (しがつ — aprel, しちがつ — iyul, くがつ — sentyabr). Oyning kunlari 1–10 va 14, 20, 24 maxsus o'qiladi:
        - ついたち, ふつか, みっか, よっか, いつか, むいか, なのか, ようか, ここのか, とおか
        - じゅうよっか (14), はつか (20), にじゅうよっか (24)
        - Qolganlari: ～にち (じゅういちにち — 11).`,
        ex: [
          ["いつ にほんへ きましたか。", "Yaponiyaga qachon keldingiz?"],
          ["A：たんじょうびは いつですか。 ／ B：３がつ１７にちです。", "A: Tug'ilgan kuningiz qachon? / B: 17-mart."],
        ],
      },
      {
        t: "Ta'kid yuklamasi よ",
        p: "S よ",
        x: `Gap oxiridagi **よ** tinglovchi bilmagan yangi ma'lumotni ta'kidlab beradi: «bilib qo'ying», «-da». ね dan farqli: ね — umumiy fikrga tayanadi, よ — yangi ma'lumot beradi.`,
        ex: [
          ["A：この でんしゃは こうしえんへ いきますか。 ／ B：いいえ、いきません。つぎの ふつうですよ。", "A: Bu poyezd Koshiyenga boradimi? / B: Yo'q. Keyingi oddiy poyezd boradi."],
        ],
      },
    ],
    quiz: [
      ["あした ともだち（　）ぎんこうへ いきます。 — «do'stim bilan»", ["と", "で", "へ", "に"], "Birga harakat qiladigan odam — と."],
      ["わたしは バス（　）がっこうへ いきます。", ["で", "と", "へ", "に"], "Transport vositasi — で."],
      ["らいしゅう サマルカンド（　）いきます。", ["へ", "で", "と", "の"], "Yo'nalish — へ («e» deb o'qiladi)."],
      ["えきから（　）かえりました。 — «piyoda»", ["あるいて", "あるいてで", "ひとりで", "じてんしゃ"], "あるいて dan keyin で qo'yilmaydi."],
      ["にちようびは どこ（　）いきませんでした。", ["も", "で", "と", "の"], "So'roq so'zi + も + inkor = «hech qayerga»."],
      ["«Yaponiyaga qachon keldingiz?»", ["いつ にほんへ きましたか。", "いつに にほんへ きましたか。", "なんじ にほんへ きますか。", "いつ にほんで きましたか。"], "いつ dan keyin に qo'yilmaydi; yo'nalish — へ."],
      ["3-aprel", ["しがつ みっか", "しがつ さんにち", "よんがつ みっか", "よがつ みっか"], "Aprel — しがつ, 3-kun — みっか."],
      ["Oyning 1-kuni", ["ついたち", "いちにち", "ひとつ", "いっか"], "1-kun maxsus o'qiladi: ついたち."],
    ],
  },
];
