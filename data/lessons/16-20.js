export default [
  {
    n: 16,
    title: "Ketma-ket harakatlar",
    intro: "Bir nechta harakat va sifatlarni bog'lash, «...gandan keyin», tashqi ko'rinishni tasvirlash.",
    vocab: [
      "のります|乗ります|(transportga) chiqmoq, minmoq",
      "おります|降ります|(transportdan) tushmoq",
      "のりかえます|乗り換えます|(transportni) almashtirmoq",
      "あびます|浴びます|(dush) qabul qilmoq",
      "いれます|入れます|solmoq, kiritmoq",
      "だします|出します|chiqarmoq; topshirmoq",
      "おろします|下ろします|(pul) yechib olmoq",
      "はいります|入ります|(universitetga) kirmoq",
      "でます|出ます|(universitetni) tugatmoq",
      "おします|押します|bosmoq (tugmani)",
      "はじめます|始めます|boshlamoq",
      "けんがくします|見学します|tanishuv uchun ko'rmoq (ekskursiya)",
      "でんわします|電話します|qo'ng'iroq qilmoq",
      "わかい|若い|yosh",
      "ながい|長い|uzun",
      "みじかい|短い|qisqa",
      "あかるい|明るい|yorug'",
      "くらい|暗い|qorong'i",
      "からだ|体|tana",
      "あたま|頭|bosh",
      "かみ|髪|soch",
      "かお|顔|yuz",
      "め|目|ko'z",
      "みみ|耳|quloq",
      "はな|鼻|burun",
      "くち|口|og'iz",
      "は|歯|tish",
      "おなか||qorin",
      "あし|足|oyoq",
      "せ|背|bo'y (qomat)",
      "サービス||xizmat",
      "ジョギング||yugurish (jogging)",
      "シャワー||dush",
      "みどり|緑|yashil; ko'kalamzorlik",
      "おてら|お寺|ibodatxona (buddaviylik)",
      "じんじゃ|神社|sinto ibodatxonasi",
      "～ばん|～番|...-raqam",
      "どうやって||qanday qilib",
      "どの～||qaysi ... (uchtadan ko'p)",
      "すごいですね||zo'r ekan!",
      "まだまだです||hali uzoqman (kamtarlik)",
      "まず||avval",
      "つぎに|次に|keyin, so'ngra",
    ],
    grammar: [
      {
        t: "Harakatlarni bog'lash: V て、V て、V",
        p: "V1 て、V2 て、V3",
        x: `Bir necha harakatni ketma-ket aytishda oxirgisidan boshqa barcha fe'llar **て-shakl**da bo'ladi — o'zbekchadagi «-ib»ga o'xshaydi: «turib, yuvinib, ishga boraman».

        Gapning zamoni **oxirgi fe'l** bilan aniqlanadi:
        - デパートへ いって、かいものを **します** — boraman (kelasi)
        - デパートへ いって、かいものを **しました** — bordim (o'tgan)`,
        ex: [
          ["あさ ジョギングを して、シャワーを あびて、かいしゃへ いきます。", "Ertalab yugurib, dush qabul qilib, ishga boraman."],
          ["きのう デパートへ いって、かいものを しました。", "Kecha univermagga borib, xarid qildim."],
          ["えきで でんしゃを おりて、バスに のりかえます。", "Bekatda poyezddan tushib, avtobusga o'taman."],
        ],
      },
      {
        t: "Sifatlarni bog'lash: くて・で",
        p: "い-sifat くて ／ な-sifat・N で",
        x: `Bir nechta xususiyatni bog'lash:
        - **い-sifat**: い → **くて**: わかい → わか**くて** (yosh va ...)
        - **な-sifat** va **ot**: + **で**: にぎやか**で**, エンジニア**で**

        ! いい → **よくて**.`,
        ex: [
          ["ミラーさんは わかくて、げんきです。", "Miller yosh va baquvvat."],
          ["タシケントは にぎやかで、きれいな まちです。", "Toshkent gavjum va chiroyli shahar."],
          ["カリモフさんは ウズベキスタンじんで、エンジニアです。", "Karimov o'zbekistonlik, muhandis."],
        ],
      },
      {
        t: "«...gandan keyin»: V てから",
        p: "V1 て から、V2",
        x: `**～てから** — V1 tugagandan **keyin** V2 bajarilishini ta'kidlaydi: «...gach», «...gandan keyin».`,
        ex: [
          ["しごとが おわってから、プールへ いきます。", "Ish tugagach, basseynga boraman."],
          ["ごはんを たべてから、しゅくだいを します。", "Ovqatlangandan keyin uy vazifasini qilaman."],
          ["おかねを いれてから、ボタンを おして ください。", "Pulni solgandan keyin tugmani bosing."],
        ],
      },
      {
        t: "Xususiyatni tasvirlash: N1 は N2 が adj",
        p: "N1 は N2 が adj です",
        x: `Biror narsa yoki odamning **bir qismini** tasvirlash. N1 — mavzu, N2 — uning qismi:
        - マリアさんは かみが ながいです — Mariyaning sochi uzun (so'zma-so'z: Mariya — sochi uzun).

        O'zbekchada ham shunday deyish mumkin: «Mariya — sochi uzun qiz».`,
        ex: [
          ["マリアさんは かみが ながいです。", "Mariyaning sochi uzun."],
          ["サマルカンドは なつが あついです。", "Samarqandning yozi issiq."],
          ["あには せが たかいです。", "Akamning bo'yi baland."],
        ],
      },
      {
        t: "Qanday qilib / qaysi: どうやって・どの",
        p: "どうやって ～か ／ どの N",
        x: `- **どうやって** — usul, yo'lni so'rash: «qanday qilib?»
        - **どの + N** — uch va undan ortiq narsadan «qaysi N?» (どれ ning otdan oldingi shakli)`,
        ex: [
          ["だいがくまで どうやって いきますか。", "Universitetgacha qanday borasiz?"],
          ["どの ひとが ミラーさんですか。", "Qaysi odam Miller?"],
          ["A：ATMは どうやって つかいますか。 ／ B：まず カードを いれて、ばんごうを おして ください。", "A: Bankomat qanday ishlatiladi? / B: Avval kartani solib, raqamni tering."],
        ],
      },
    ],
    quiz: [
      ["あさ おきて、シャワーを（　）、がっこうへ いきます。", ["あびて", "あびます", "あびた", "あびって"], "Oxirgi fe'ldan oldin — て-shakl."],
      ["ミラーさんは わか（　）、げんきです。", ["くて", "いで", "くで", "いて"], "い-sifat: い → くて."],
      ["タシケントは にぎやか（　）、きれいです。", ["で", "くて", "な", "て"], "な-sifat + で."],
      ["しごとが おわって（　）、プールへ いきます。 — «tugagach»", ["から", "まで", "まえに", "より"], "～てから — ...gandan keyin."],
      ["マリアさんは かみ（　）ながいです。", ["が", "を", "に", "で"], "N1 は N2 が adj."],
      ["だいがくまで（　）いきますか。 …バスで いきます。", ["どうやって", "どう", "どの", "どれ"], "Usulni so'rash — どうやって."],
      ["（　）ひとが ミラーさんですか。 …あの せが たかい ひとです。", ["どの", "どれ", "どこ", "どう"], "Otdan oldin — どの."],
      ["«Kecha univermagga borib, xarid qildim»", ["きのう デパートへ いって、かいものを しました。", "きのう デパートへ いきて、かいものを しました。", "きのう デパートへ いって、かいものを します。", "きのう デパートへ いきます、かいものを しました。"], "いきます → いって; zamon oxirgi fe'lda."],
    ],
  },

  {
    n: 17,
    title: "Qilmang! Qilish kerak",
    intro: "ない-shakl: ～ないで ください, ～なければ なりません, ～なくても いいです.",
    vocab: [
      "おぼえます|覚えます|yodlamoq, eslab qolmoq",
      "わすれます|忘れます|unutmoq",
      "なくします||yo'qotmoq",
      "はらいます|払います|to'lamoq",
      "かえします|返します|qaytarmoq",
      "でかけます|出かけます|(uydan) chiqib ketmoq",
      "ぬぎます|脱ぎます|yechmoq (kiyim, poyabzal)",
      "もって いきます|持って行きます|olib ketmoq",
      "もって きます|持って来ます|olib kelmoq",
      "しんぱいします|心配します|xavotirlanmoq",
      "ざんぎょうします|残業します|ishda qolmoq (qo'shimcha ish)",
      "しゅっちょうします|出張します|xizmat safariga bormoq",
      "のみます|飲みます|(dori) ichmoq",
      "はいります|入ります|(vannaga) tushmoq",
      "たいせつ|大切（な）|muhim, qadrli",
      "だいじょうぶ|大丈夫（な）|hechqisi yo'q, yaxshi",
      "あぶない|危ない|xavfli",
      "きんえん|禁煙|chekish taqiqlangan",
      "けんこうほけんしょう|健康保険証|tibbiy sug'urta kartasi",
      "ねつ|熱|isitma",
      "びょうき|病気|kasallik",
      "くすり|薬|dori",
      "おふろ|お風呂|vanna",
      "うわぎ|上着|ustki kiyim",
      "したぎ|下着|ichki kiyim",
      "～までに||...gacha (muddat)",
      "ですから||shuning uchun",
      "どう しましたか||nima bo'ldi? (shifokor)",
      "のど|喉|tomoq",
      "いたい|痛い|og'riydi",
      "かぜ|風邪|shamollash",
      "それから||keyin",
      "おだいじに|お大事に|tuzalib keting",
    ],
    grammar: [
      {
        t: "ない-shaklni yasash",
        p: "V ない",
        x: `**I guruh**: ます oldidagi い-tovush → **あ-tovush** + ない:
        - かきます → か**か**ない, のみます → の**ま**ない, まちます → ま**た**ない, かえります → かえ**ら**ない
        - ! い → **わ**: かいます → か**わ**ない, つかいます → つか**わ**ない

        **II guruh**: ます → ない: たべます → たべない, みます → みない
        **III guruh**: します → **しない**, きます → **こない**`,
        ex: [
          ["かかない・のまない・またない・かわない", "I guruh: ない-shakl"],
          ["たべない・みない・しない・こない", "II va III guruh: ない-shakl"],
        ],
      },
      {
        t: "«Qilmang»: V ないで ください",
        p: "V ない で ください",
        x: `**～ないで ください** — «...mang, iltimos». Muloyim taqiq yoki maslahat.`,
        ex: [
          ["ここで しゃしんを とらないで ください。", "Bu yerda surat olmang, iltimos."],
          ["わたしは げんきですから、しんぱいしないで ください。", "Men yaxshiman, xavotir olmang."],
          ["じしょを みないで、こたえて ください。", "Lug'atga qaramasdan javob bering."],
        ],
      },
      {
        t: "«Qilish kerak»: V なければ なりません",
        p: "V ない → なければ なりません",
        x: `**～なければ なりません** — «...ishim kerak», «...shim shart». ない ning い si → **ければ**:
        - のまない → のま**なければ なりません** — ichishim kerak

        So'zma-so'z: «qilmasa bo'lmaydi» — o'zbekchadagi «...masam bo'lmaydi» bilan bir xil mantiq!`,
        ex: [
          ["くすりを のまなければ なりません。", "Dori ichishim kerak."],
          ["まいにち にほんごを べんきょうしなければ なりません。", "Har kuni yapon tilini o'qishim kerak."],
          ["パスポートを みせなければ なりませんか。", "Pasportni ko'rsatishim kerakmi?"],
        ],
      },
      {
        t: "«Shart emas»: V なくても いいです",
        p: "V ない → なくても いいです",
        x: `**～なくても いいです** — «...masa ham bo'ladi», «shart emas». ない → **なくても いいです**.

        ～なければ なりませんか savoliga «yo'q» javobi aynan shu shakl bilan beriladi.`,
        ex: [
          ["あした こなくても いいです。", "Ertaga kelmasangiz ham bo'ladi."],
          ["A：パスポートを みせなければ なりませんか。 ／ B：いいえ、みせなくても いいです。", "A: Pasportni ko'rsatishim kerakmi? / B: Yo'q, shart emas."],
        ],
      },
      {
        t: "To'ldiruvchini mavzuga aylantirish",
        p: "N(to'ldiruvchi) は ～",
        x: `To'ldiruvchini (を bilan keladigan otni) ta'kidlash yoki mavzu qilish uchun を o'rniga **は** qo'yiladi va u gap boshiga chiqadi:
        - ここに にもつを おかないで ください → **にもつは** ここに おかないで ください (Yukni esa bu yerga qo'ymang).`,
        ex: [
          ["にもつは ここに おかないで ください。", "Yukni bu yerga qo'ymang."],
          ["かいしゃの しょくどうで ひるごはんを たべます。 ／ ばんごはんは うちで たべます。", "Tushlikni ishxona oshxonasida yeyman. / Kechki ovqatni esa uyda yeyman."],
        ],
      },
      {
        t: "Muddat: までに",
        p: "N(vaqt) までに V",
        x: `- **まで** — harakat shu vaqtgacha **davom etadi**: ５じまで はたらきます (5 gacha ishlayman)
        - **までに** — harakat shu vaqtdan **kechikmay bir marta bajariladi** (deadline): ５じまでに かえります (5 dan kechikmay qaytaman)`,
        ex: [
          ["かいぎは ５じまでに おわります。", "Majlis soat 5 gacha tugaydi."],
          ["どようびまでに ほんを かえさなければ なりません。", "Shanbagacha kitobni qaytarishim kerak."],
        ],
      },
    ],
    quiz: [
      ["かきます → ない-shakl", ["かかない", "かきない", "かくない", "かけない"], "き → か + ない."],
      ["かいます → ない-shakl", ["かわない", "かあない", "かいない", "かかない"], "い → わ + ない."],
      ["たべます → ない-shakl", ["たべない", "たばない", "たべらない", "たべかない"], "II guruh: ます → ない."],
      ["きます (kelmoq) → ない-shakl", ["こない", "きない", "くない", "かない"], "Istisno: こない."],
      ["ここで たばこを すわ（　）ください。", ["ないで", "なくて", "なければ", "なくても"], "«Qilmang» — ～ないで ください."],
      ["くすりを のま（　）なりません。 — «ichishim kerak»", ["なければ", "ないで", "なくても", "ないと"], "Majburiyat — ～なければ なりません."],
      ["あした こ（　）いいです。 — «kelmasangiz ham bo'ladi»", ["なくても", "なければ", "ないで", "ても"], "«Shart emas» — ～なくても いいです."],
      ["レポートは きんようび（　）だして ください。 — «jumadan kechikmay»", ["までに", "まで", "から", "より"], "Muddat — までに."],
    ],
  },

  {
    n: 18,
    title: "Qila olaman: lug'at shakli",
    intro: "Fe'lning lug'at shakli. ～ことが できます (qila olaman), sevimli mashg'ulot, ～まえに.",
    vocab: [
      "できます||qila olmoq",
      "あらいます|洗います|yuvmoq",
      "ひきます|弾きます|chalmoq (musiqa asbobi)",
      "うたいます|歌います|kuylamoq",
      "あつめます|集めます|to'plamoq, yig'moq",
      "すてます|捨てます|tashlamoq",
      "かえます|換えます|almashtirmoq",
      "うんてんします|運転します|(mashina) haydamoq",
      "よやくします|予約します|band qilmoq (bron)",
      "ピアノ||pianino",
      "～メートル||... metr",
      "げんきん|現金|naqd pul",
      "しゅみ|趣味|sevimli mashg'ulot",
      "にっき|日記|kundalik",
      "おいのり|お祈り|ibodat, duo",
      "かちょう|課長|bo'lim boshlig'i",
      "ぶちょう|部長|departament boshlig'i",
      "しゃちょう|社長|kompaniya prezidenti, direktor",
      "どうぶつ|動物|hayvon",
      "うま|馬|ot",
      "インターネット||internet",
      "とくに|特に|ayniqsa",
      "へえ||voy, shundaymi?",
      "それは おもしろいですね||bu qiziq ekan",
      "なかなか||osonlikcha (+inkor)",
      "ほんとうですか|本当ですか|rostdanmi?",
      "ぜひ||albatta, nima qilib bo'lsa ham",
      "ゆびわ|指輪|uzuk",
    ],
    grammar: [
      {
        t: "Lug'at shakli",
        p: "V(lug'at shakli)",
        x: `Lug'atlarda fe'l shu shaklda beriladi. Yasalishi:

        **I guruh**: ます oldidagi い-tovush → **う-tovush**:
        - かきます → か**く**, のみます → の**む**, かいます → か**う**, まちます → ま**つ**, かえります → かえ**る**

        **II guruh**: ます → **る**: たべます → たべ**る**, みます → み**る**
        **III guruh**: します → **する**, きます → **くる**`,
        ex: [
          ["かく・のむ・かう・まつ・かえる・はなす", "I guruh: lug'at shakli"],
          ["たべる・みる・おきる・する・くる", "II va III guruh: lug'at shakli"],
        ],
      },
      {
        t: "Qila olish: ～ことが できます",
        p: "N ／ V(lug'at) こと が できます",
        x: `**できます** — «qila olaman», «mumkin». Bilim, mahorat yoki imkoniyatni bildiradi.
        - Ot bilan: にほんご**が** できます — yapon tilini bilaman
        - Fe'l bilan: fe'lni **こと** («...ish») orqali otga aylantiramiz: かんじを よむ**ことが** できます — kanji o'qiy olaman

        O'zbekcha qiyoslang: «o'qi**sh**ni bilaman» → よむ**こと**.`,
        ex: [
          ["ミラーさんは かんじを よむ ことが できます。", "Miller kanji o'qiy oladi."],
          ["わたしは ピアノを ひく ことが できます。", "Men pianino chala olaman."],
          ["この ホテルで りょうがえする ことが できますか。", "Bu mehmonxonada pul almashtirsa bo'ladimi?"],
        ],
      },
      {
        t: "Sevimli mashg'ulot",
        p: "わたしの しゅみは N ／ V(lug'at) こと です",
        x: `Sevimli mashg'ulotni aytishda ham こと ishlatiladi: しゅみは **えを かく こと**です — rasm chizish.

        Fe'l bilan aniqroq aytish mumkin: «しゅみは おんがくです» o'rniga «しゅみは ピアノを ひく ことです».`,
        ex: [
          ["わたしの しゅみは えを かく ことです。", "Mening sevimli mashg'ulotim — rasm chizish."],
          ["A：しゅみは なんですか。 ／ B：しゃしんを とる ことです。", "A: Sevimli mashg'ulotingiz nima? / B: Suratga olish."],
        ],
      },
      {
        t: "«...dan oldin»: まえに",
        p: "V(lug'at) ／ N の ／ ［muddat］ まえに、V2",
        x: `**まえに** — «...dan oldin»:
        - Fe'l (har doim lug'at shaklida!): **ねる** まえに — yotishdan oldin
        - Ot + の: しょくじ**の** まえに — ovqatdan oldin
        - Muddat (の siz): ３ねん まえに — 3 yil oldin

        ! Hatto o'tgan zamonda ham まえに dan oldingi fe'l lug'at shaklida qoladi.`,
        ex: [
          ["ねる まえに、ほんを よみます。", "Yotishdan oldin kitob o'qiyman."],
          ["しょくじの まえに、てを あらいます。", "Ovqatdan oldin qo'limni yuvaman."],
          ["わたしは ３ねん まえに にほんへ きました。", "Men 3 yil oldin Yaponiyaga keldim."],
        ],
      },
      {
        t: "なかなか va ぜひ",
        p: "なかなか ～ません ／ ぜひ ～",
        x: `- **なかなか + inkor** — «osonlikcha ...maydi», «hecham ...maydi»
        - **ぜひ** — «albatta», «nima bo'lsa ham» (kuchli istak bilan: ～たいです)`,
        ex: [
          ["にほんでは なかなか うまを みる ことが できません。", "Yaponiyada otni osonlikcha ko'ra olmaysiz."],
          ["ぜひ サマルカンドへ いきたいです。", "Albatta Samarqandga borgim keladi."],
        ],
      },
    ],
    quiz: [
      ["かきます → lug'at shakli", ["かく", "かける", "かき", "かかる"], "I guruh: き → く."],
      ["たべます → lug'at shakli", ["たべる", "たぶ", "たべく", "たべう"], "II guruh: ます → る."],
      ["します → lug'at shakli", ["する", "しる", "す", "しく"], "III guruh: する."],
      ["きます (kelmoq) → lug'at shakli", ["くる", "きる", "くう", "こる"], "III guruh: くる."],
      ["わたしは ピアノを ひく（　）が できます。", ["こと", "もの", "とき", "まえ"], "Fe'l + こと が できます."],
      ["わたしの しゅみは しゃしんを とる（　）です。", ["こと", "まえ", "ため", "から"], "しゅみは V こと です."],
      ["ねる（　）、ほんを よみます。 — «yotishdan oldin»", ["まえに", "てから", "まで", "までに"], "«...dan oldin» — まえに."],
      ["しょくじ（　）まえに、てを あらいます。", ["の", "が", "を", "に"], "Ot + の + まえに."],
    ],
  },

  {
    n: 19,
    title: "Tajriba va o'zgarish",
    intro: "た-shakl: ～た ことが あります (tajriba), ～たり ～たり, ～く／～に なります.",
    vocab: [
      "のぼります|登ります|(tog'ga) chiqmoq",
      "とまります|泊まります|(mehmonxonada) tunamoq",
      "そうじします|掃除します|tozalamoq (xonani)",
      "せんたくします|洗濯します|kir yuvmoq",
      "なります||bo'lmoq (o'zgarmoq)",
      "ねむい|眠い|uyqusiragan",
      "つよい|強い|kuchli",
      "よわい|弱い|kuchsiz",
      "れんしゅう|練習|mashq",
      "ゴルフ||golf",
      "すもう|相撲|sumo kurashi",
      "おちゃ|お茶|choy marosimi",
      "ひ|日|kun (sana)",
      "ちょうし|調子|holat, kayfiyat",
      "いちど|一度|bir marta",
      "いちども|一度も|hech qachon (+inkor)",
      "だんだん||asta-sekin",
      "もうすぐ||tez orada",
      "おかげさまで||xudoga shukur (sizning tufayli)",
      "でも||lekin",
      "かんぱい|乾杯|qadah ko'tarish",
      "ダイエット||parhez",
      "むり|無理（な）|imkonsiz, haddan oshgan",
      "からだに いい|体にいい|sog'liqqa foydali",
      "ケーキ||tort",
      "さくぶん|作文|insho",
    ],
    grammar: [
      {
        t: "た-shakl",
        p: "V た",
        x: `た-shakl **て-shakl bilan bir xil** yasaladi — faqat て → **た**, で → **だ**:
        - かいて → かい**た**, のんで → のん**だ**, いって → いっ**た**, たべて → たべ**た**, して → し**た**, きて → き**た**

        Bu shakl oddiy uslubdagi o'tgan zamon (20-dars) va ko'p qoliplarda ishlatiladi.`,
        ex: [
          ["かいた・のんだ・いった・まった・はなした", "I guruh: た-shakl"],
          ["たべた・みた・した・きた", "II va III guruh: た-shakl"],
        ],
      },
      {
        t: "Tajriba: V た ことが あります",
        p: "V た こと が あります",
        x: `**～た ことが あります** — «...ganman» (hayotda shunday tajriba bo'lgan):
        - ふじさんに のぼった ことが あります — Fuji tog'iga chiqqanman.

        Inkor: ～た ことが ありません — «...magan man». **いちども** bilan: «hech qachon ...maganman».

        ! Oddiy o'tgan zamon (きのう のぼりました) aniq bir voqeani bildiradi, ～た ことが あります esa umumiy tajribani.`,
        ex: [
          ["わたしは ふじさんに のぼった ことが あります。", "Men Fuji tog'iga chiqqanman."],
          ["すしを たべた ことが ありますか。", "Sushi yeganmisiz?"],
          ["すもうを いちども みた ことが ありません。", "Sumoni hech qachon ko'rmaganman."],
        ],
      },
      {
        t: "Bir necha harakatni sanash: ～たり ～たり",
        p: "V1 たり、V2 たり します",
        x: `**～たり、～たり します** — bir nechta harakatni **misol tariqasida** sanash: «...ib, ...ib yuraman», «... va shu kabilarni qilaman».

        ～て、～て (16-dars) dan farqi: たり da tartib muhim emas va bu to'liq ro'yxat emas. Oxirida doim **します** (yoki しました) keladi.`,
        ex: [
          ["にちようびは テニスを したり、えいがを みたり します。", "Yakshanba kuni tennis o'ynab, kino ko'rib yuraman."],
          ["きのう そうじを したり、せんたくを したり しました。", "Kecha uy tozalab, kir yuvib (va hokazo) qildim."],
        ],
      },
      {
        t: "O'zgarish: ～く／～に なります",
        p: "い-sifat く ／ な-sifat・N に なります",
        x: `**なります** — «bo'lmoq», o'zgarishni bildiradi:
        - **い-sifat**: い → **く** なります: さむい → さむ**く** なります (sovuq bo'ladi)
        - **な-sifat** va **ot**: + **に** なります: げんき**に** なります, ２０さい**に** なります

        ! いい → **よく** なります.`,
        ex: [
          ["そとは もう くらく なりました。", "Tashqari allaqachon qorong'i bo'ldi."],
          ["にほんごが じょうずに なりました。", "Yapon tilim yaxshi bo'ldi."],
          ["らいねん ２０さいに なります。", "Kelasi yil 20 yoshga to'laman."],
          ["だんだん あたたかく なります。", "Asta-sekin iliq bo'ladi."],
        ],
      },
    ],
    quiz: [
      ["のみます → た-shakl", ["のんだ", "のみた", "のった", "のんて"], "て-shakl kabi: のんで → のんだ."],
      ["かきます → た-shakl", ["かいた", "かった", "かきた", "かんだ"], "かいて → かいた."],
      ["わたしは ふじさんに のぼった（　）が あります。", ["こと", "もの", "とき", "まえ"], "Tajriba — ～た ことが あります."],
      ["にちようびは そうじを したり、せんたくを（　）します。", ["したり", "して", "します", "した"], "～たり、～たり します."],
      ["«Kun sovib ketdi»: さむ（　）なりました。", ["く", "に", "くて", "い"], "い-sifat: い → く なります."],
      ["にほんごが じょうず（　）なりました。", ["に", "く", "な", "で"], "な-sifat + に なります."],
      ["«Hech qachon ko'rmaganman»: すもうを（　）みた ことが ありません。", ["いちども", "いちど", "いつも", "ときどき"], "いちども + inkor."],
      ["«20 yoshga to'ldim»", ["２０さいに なりました。", "２０さいく なりました。", "２０さいが なりました。", "２０さいを なりました。"], "Ot + に なります."],
    ],
  },

  {
    n: 20,
    title: "Oddiy uslub",
    intro: "Do'stlar va oila bilan gaplashish uslubi (ふつうたい): fe'l, sifat va otlarning oddiy shakllari.",
    vocab: [
      "いります|要ります|kerak bo'lmoq",
      "しらべます|調べます|tekshirmoq, o'rganmoq",
      "しゅうりします|修理します|ta'mirlamoq",
      "ぼく|僕|men (erkaklar, norasmiy)",
      "きみ|君|sen (norasmiy)",
      "～くん|～君|(yigit ismiga qo'shiladi)",
      "うん||ha (norasmiy)",
      "ううん||yo'q (norasmiy)",
      "ことば|言葉|so'z; til",
      "きもの|着物|kimono",
      "ビザ||viza",
      "はじめ|初め|boshlanish",
      "おわり|終わり|oxir",
      "こっち||bu tomon (norasmiy)",
      "そっち||shu tomon (norasmiy)",
      "あっち||u tomon (norasmiy)",
      "どっち||qaysi tomon (norasmiy)",
      "みんなで||hammamiz birga",
      "～けど||..., lekin (norasmiy)",
      "おなかが いっぱい||qornim to'q",
      "よかったら||agar xohlasang",
      "いろいろ||turli-tuman",
      "あした ひま？|あした暇？|ertaga bo'shmisan?",
    ],
    grammar: [
      {
        t: "Odobli va oddiy uslub",
        p: "です・ます ⇔ ふつうたい",
        x: `Yapon tilida ikki nutq uslubi bor:
        - **Odobli uslub** (です・ます) — notanish odamlar, kattalar, ish joyida
        - **Oddiy uslub** (ふつうたい) — yaqin do'stlar, oila a'zolari, tengdoshlar bilan. Shuningdek kundalik yozuvlar, ilmiy matnlar va gazetalarda ham ishlatiladi.

        O'zbek tilidagi «siz» va «sen» farqiga o'xshaydi. Kattalarga oddiy uslubda gapirish — qo'pollik!`,
        ex: [
          ["A：あした どこへ いきますか。 ／ B：としょかんへ いきます。", "Odobli: A: Ertaga qayerga borasiz? / B: Kutubxonaga boraman."],
          ["A：あした どこ いく？ ／ B：としょかん いく。", "Oddiy: A: Ertaga qayerga borasan? / B: Kutubxonaga."],
        ],
      },
      {
        t: "Fe'llarning oddiy shakllari",
        p: "いく・いかない・いった・いかなかった",
        x: `Fe'llarning 4 asosiy shakli (siz ularni allaqachon bilasiz!):
        - いきます → **いく** (lug'at shakli)
        - いきません → **いかない** (ない-shakl)
        - いきました → **いった** (た-shakl)
        - いきませんでした → **いかなかった** (ない → なかった)

        ! あります → **ある**, inkori — **ない** (あらない emas!).`,
        ex: [
          ["ぼくは あした きょうとへ いく。", "Men ertaga Kiotoga boraman."],
          ["きのう なにも たべなかった。", "Kecha hech narsa yemadim."],
          ["じかんが ない。", "Vaqtim yo'q."],
        ],
      },
      {
        t: "Sifat va otlarning oddiy shakllari",
        p: "あつい／ひまだ／あめだ",
        x: `**い-sifatlar** — です shunchaki tushib qoladi:
        - あつい・あつくない・あつかった・あつくなかった

        **な-sifatlar va otlar** — です → **だ**:
        - ひまだ・ひまじゃ ない・ひまだった・ひまじゃ なかった
        - あめだ・あめじゃ ない・あめだった・あめじゃ なかった`,
        ex: [
          ["きょうは とても あつい。", "Bugun juda issiq."],
          ["きのうは ひまだった。", "Kecha bo'sh edim."],
          ["あの ひとは にほんじんじゃ ない。", "U odam yapon emas."],
        ],
      },
      {
        t: "Oddiy uslubdagi suhbat",
        p: "～？ ／ うん・ううん ／ ～けど",
        x: `Oddiy uslubdagi suhbatning xususiyatlari:
        - So'roq gapda **か qo'yilmaydi** — ohang ko'tariladi: のむ？
        - Ot va な-sifat so'roqda **だ tushadi**: ひま？ (ひまだ？ emas)
        - **は, を, へ** yuklamalari ko'pincha tushib qoladi: コーヒー のむ？
        - «Ha» — **うん**, «yo'q» — **ううん**
        - が (lekin) → **けど**
        - Erkaklar o'zini **ぼく**, do'stini **きみ** deb atashi mumkin`,
        ex: [
          ["A：コーヒー のむ？ ／ B：うん、のむ。", "A: Qahva ichasanmi? / B: Ha, ichaman."],
          ["A：あした ひま？ ／ B：ううん、ちょっと いそがしい。", "A: Ertaga bo'shmisan? / B: Yo'q, biroz bandman."],
          ["この ケーキ、おいしいけど、たかいね。", "Bu tort mazali, lekin qimmat-a."],
        ],
      },
    ],
    quiz: [
      ["いきません → oddiy uslub", ["いかない", "いきない", "いくない", "いかなかった"], "I guruh: き → か + ない."],
      ["たべました → oddiy uslub", ["たべた", "たべだ", "たべる", "たべった"], "た-shakl."],
      ["ひまです → oddiy uslub", ["ひまだ", "ひまい", "ひまな", "ひまだった"], "な-sifat: です → だ."],
      ["あつかったです → oddiy uslub", ["あつかった", "あつかっただ", "あつい", "あつだった"], "い-sifat: です tushadi."],
      ["A：コーヒー のむ？ B：（　）、のむ。 — «ha»", ["うん", "ううん", "いいえ", "ちがう"], "Norasmiy «ha» — うん."],
      ["げんきじゃ ありませんでした → oddiy uslub", ["げんきじゃ なかった", "げんきくなかった", "げんきじゃ ない", "げんきだった"], "な-sifat o'tgan inkor — じゃ なかった."],
      ["ありません → oddiy uslub", ["ない", "あらない", "ありない", "あるない"], "Istisno: ある → ない."],
      ["«Ertaga bo'shmisan?» (do'stga)", ["あした ひま？", "あした ひまだか。", "あした ひまな？", "あした ひまだ？か"], "Oddiy so'roqda だ va か tushadi."],
    ],
  },
];
