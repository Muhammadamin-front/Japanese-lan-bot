export default [
  {
    n: 46,
    title: "Ayni paytda",
    intro: "～ところです (endi / hozir / hozirgina), ～た ばかりです (yaqinda), ～はずです (bo'lishi kerak).",
    vocab: [
      "わたします|渡します|topshirmoq, uzatmoq",
      "かえって きます|帰って来ます|qaytib kelmoq",
      "でます|出ます|jo'nab ketmoq (avtobus)",
      "とどきます|届きます|yetib kelmoq (posilka)",
      "にゅうがくします|入学します|o'qishga kirmoq",
      "やきます|焼きます|qovurmoq, pishirmoq",
      "やけます|焼けます|pishmoq",
      "るす|留守|uyda yo'qlik",
      "たくはいびん|宅配便|kuryer xizmati",
      "げんいん|原因|sabab",
      "こちら||bu tomon; men (telefonda)",
      "～の ところ|～の所|... atrofi",
      "はんとし|半年|yarim yil",
      "ちょうど||aynan, roppa-rosa",
      "たったいま|たった今|hozirgina",
      "いま いいですか|今いいですか|hozir gaplashsak bo'ladimi?",
      "ガスレンジ||gaz plitasi",
      "ぐあい|具合|holat",
      "どちらさまでしょうか||kim bo'lasiz? (odobli)",
      "むかいます|向かいます|tomon yo'l olmoq",
      "おまたせしました|お待たせしました|kuttirib qo'ydim",
      "とくい|得意（な）|kuchli, usta (o'zi haqida)",
      "まえに|前に|oldin",
    ],
    grammar: [
      {
        t: "Harakatning bosqichi: ～ところです",
        p: "V(lug'at) ／ V て いる ／ V た + ところです",
        x: `**ところ** — harakatning qaysi bosqichda ekanini aniq ko'rsatadi:
        - **V(lug'at) ところです** — endi boshlamoqchi: これから たべる ところです (endi ovqatlanmoqchiman)
        - **V て いる ところです** — aynan hozir jarayonda: いま たべて いる ところです (hozir ovqatlanyapman)
        - **V た ところです** — hozirgina tugadi: いま たべた ところです (hozirgina ovqatlanib bo'ldim)`,
        ex: [
          ["これから ひるごはんを たべる ところです。", "Endi tushlik qilmoqchiman."],
          ["いま ひるごはんを たべて いる ところです。", "Hozir tushlik qilyapman."],
          ["たったいま ひるごはんを たべた ところです。", "Hozirgina tushlik qilib bo'ldim."],
          ["A：もしもし、いま いいですか。 ／ B：すみません。いま でかける ところなんです。", "A: Allo, hozir gaplashsak bo'ladimi? / B: Kechirasiz, endi chiqmoqchi edim."],
        ],
      },
      {
        t: "Yaqinda: ～た ばかりです",
        p: "V た ばかりです",
        x: `**～た ばかりです** — «yaqinda ...dim», «...ganiga ko'p bo'lmadi». ～た ところです dan farqi: ばかり **gapiruvchining his qilishiga** ko'ra yaqin (bir oy oldin ham bo'lishi mumkin), ところ esa aynan hozir.`,
        ex: [
          ["ミラーさんは せんげつ にほんへ きた ばかりです。", "Miller o'tgan oy Yaponiyaga kelgan, hali yangi."],
          ["この パソコンは かった ばかりなのに、こわれて しまいました。", "Bu kompyuterni yaqinda olgan edim, buzilib qoldi."],
        ],
      },
      {
        t: "Bo'lishi kerak: ～はずです",
        p: "oddiy shakl + はずです (N の／な-sifat な + はずです)",
        x: `**～はずです** — mantiqiy asosga tayangan ishonchli taxmin: «...ishi kerak», «...bo'lsa kerak (aniq)».
        - ミラーさんは きょう くる はずです — Miller bugun kelishi kerak (shunday kelishilgan).`,
        ex: [
          ["ミラーさんは きょう くる はずです。", "Miller bugun kelishi kerak."],
          ["かれは えいごが できる はずです。アメリカに すんで いましたから。", "U ingliz tilini bilishi kerak. Axir Amerikada yashagan."],
          ["にもつは あした とどく はずです。", "Posilka ertaga yetib kelishi kerak."],
        ],
      },
    ],
    quiz: [
      ["これから でかける（　）です。 — «endi chiqmoqchiman»", ["ところ", "ばかり", "おわり", "よう"], "Boshlash arafasi — V(lug'at) ところです."],
      ["いま しゅくだいを して いる（　）です。", ["ところ", "ばかり", "はず", "つもり"], "Jarayon — V て いる ところです."],
      ["たったいま かえって きた（　）です。 — «hozirgina»", ["ところ", "はず", "つもり", "よてい"], "Hozirgina tugagan — V た ところです."],
      ["ミラーさんは せんげつ にほんへ きた（　）です。 — «yaqinda kelgan»", ["ばかり", "ところ", "はず", "よう"], "Yaqinda — ～た ばかりです."],
      ["ミラーさんは きょう くる（　）です。 — «kelishi kerak»", ["はず", "ところ", "ばかり", "つもり"], "Mantiqiy taxmin — はずです."],
      ["この パソコンは かった ばかり（　）、こわれて しまいました。", ["なのに", "のに", "だのに", "なので"], "ばかり + な + のに."],
      ["«Hozir ovqatlanyapman (aynan shu payt)»", ["いま しょくじを して いる ところです。", "いま しょくじを する ところです。", "いま しょくじを した ところです。", "いま しょくじを して いる ばかりです。"], "V て いる ところです."],
      ["かれは えいごが できる（　）です。アメリカに すんで いましたから。", ["はず", "ところ", "ばかり", "よてい"], "Asosli taxmin — はずです."],
    ],
  },

  {
    n: 47,
    title: "Eshitdimki...",
    intro: "Eshitilgan xabar (～そうです), taxmin (～ようです), his qilish (おとが します).",
    vocab: [
      "あつまります|集まります|yig'ilmoq",
      "わかれます|別れます|ajralishmoq",
      "ながいきします|長生きします|uzoq yashamoq",
      "します||(tovush, hid, ta'm) sezilmoq",
      "ひどい||dahshatli",
      "こわい|怖い|qo'rqinchli",
      "じっけん|実験|tajriba (ilmiy)",
      "じんこう|人口|aholi",
      "におい||hid",
      "かがく|科学|fan",
      "いがく|医学|tibbiyot",
      "ぶんがく|文学|adabiyot",
      "パトカー||politsiya mashinasi",
      "きゅうきゅうしゃ|救急車|tez yordam mashinasi",
      "さんせい|賛成|qo'shilish, rozilik",
      "はんたい|反対|qarshilik",
      "だんせい|男性|erkak",
      "じょせい|女性|ayol",
      "どうも||aftidan",
      "～に よると||...ga ko'ra",
      "こいびと|恋人|sevgili",
      "こんやくします|婚約します|unashtirilmoq",
      "あいて|相手|sherik, raqib",
      "てんきよほう|天気予報|ob-havo ma'lumoti",
    ],
    grammar: [
      {
        t: "Eshitilgan xabar: ～そうです",
        p: "oddiy shakl + そうです",
        x: `**Oddiy shakl + そうです** — boshqa manbadan **eshitgan** ma'lumotni yetkazish: «...ekan», «...mish». Manba **～に よると** bilan ko'rsatiladi.

        ! 43-darsdagi そうです bilan aralashtirmang:
        - あめが **ふりそうです** — yomg'ir yog'adiganga o'xshaydi (ko'rib turibman)
        - あめが **ふるそうです** — yomg'ir yog'arkan (eshitdim)
        - **おいしそうです** — mazali ko'rinadi / **おいしいそうです** — mazali ekan (deyishdi)`,
        ex: [
          ["てんきよほうに よると、あしたは さむく なるそうです。", "Ob-havo ma'lumotiga ko'ra, ertaga sovuq bo'larkan."],
          ["ミラーさんは らいねん けっこんするそうです。", "Miller kelasi yil uylanarkan."],
          ["あの みせの ラーメンは おいしいそうです。", "U do'konning ramenini mazali deyishadi."],
        ],
      },
      {
        t: "Taxmin: ～ようです",
        p: "oddiy shakl + ようです (N の／な-sifat な + ようです)",
        x: `**～ようです** — o'z kuzatishlari asosida xulosa: «...ga o'xshaydi», «aftidan ...». **どうも** bilan kuchaytiriladi.

        Ot bilan: じこ**の** ようです; な-sifat bilan: ひま**な** ようです.`,
        ex: [
          ["ひとが おおぜい あつまって いますね。じこの ようですね。", "Ko'p odam yig'ilibdi. Avariya bo'lganga o'xshaydi."],
          ["へやの でんきが きえて います。だれも いない ようです。", "Xonaning chirog'i o'chiq. Hech kim yo'qqa o'xshaydi."],
          ["どうも かぜを ひいた ようです。", "Aftidan shamollaganga o'xshayman."],
        ],
      },
      {
        t: "His qilish: おと／こえ／におい／あじ が します",
        p: "N が します",
        x: `Tovush, ovoz, hid, ta'm sezilganda **が します** ishlatiladi:
        - へんな おと**が します** — g'alati tovush eshitilyapti
        - いい におい**が します** — yoqimli hid kelyapti`,
        ex: [
          ["へんな おとが します。", "G'alati tovush eshitilyapti."],
          ["いい においが しますね。", "Yoqimli hid kelyapti-ya."],
          ["となりの へやで こえが します。", "Qo'shni xonadan ovoz kelyapti."],
        ],
      },
    ],
    quiz: [
      ["てんきよほう（　）よると、あしたは あめだそうです。", ["に", "で", "を", "が"], "Manba — ～に よると."],
      ["«Miller kelasi yil uylanarkan (eshitdim)»", ["ミラーさんは らいねん けっこんするそうです。", "ミラーさんは らいねん けっこんしそうです。", "ミラーさんは らいねん けっこんしますそうです。", "ミラーさんは らいねん けっこんするようそうです。"], "Eshitilgan xabar — oddiy shakl + そうです."],
      ["«Ertaga sovuq bo'larkan» (eshitgan gap)", ["あしたは さむいそうです。", "あしたは さむそうです。", "あしたは さむいようそうです。", "あしたは さむくそうです。"], "い-sifat to'liq + そうです = eshitdim."],
      ["へんな おとが（　）。", ["します", "あります", "なります", "いります"], "Sezgi — が します."],
      ["だれも いない（　）です。 — «hech kim yo'qqa o'xshaydi»", ["よう", "ばかり", "はず", "ところ"], "Kuzatuvdan xulosa — ようです."],
      ["じこ（　）ようです。", ["の", "な", "だ", "が"], "Ot + の + ようです."],
      ["いい におい（　）しますね。", ["が", "を", "に", "で"], "N が します."],
      ["かぜを ひいた（　）です。 — «shamollaganga o'xshayman»", ["よう", "そう", "はず", "ばかり"], "Taxmin — ようです."],
    ],
  },

  {
    n: 48,
    title: "Qildirish: orttirma nisbat",
    intro: "Orttirma fe'llar (いかせます, たべさせます) va ruxsat so'rash: ～させて いただけませんか.",
    vocab: [
      "おろします|降ろします|tushirmoq (yo'lovchini)",
      "とどけます|届けます|yetkazmoq",
      "せわを します|世話をします|g'amxo'rlik qilmoq",
      "ろくおんします|録音します|yozib olmoq (ovoz)",
      "いや|嫌（な）|yoqmaydigan",
      "じゅく|塾|repetitorlik maktabi",
      "せいと|生徒|o'quvchi (maktab)",
      "ファイル||papka, fayl",
      "じゆうに|自由に|erkin",
      "～かん|～間|... davomida",
      "いい ことですね||yaxshi ish ekan",
      "おいそがしいですか|お忙しいですか|bandmisiz? (hurmat)",
      "えいぎょう|営業|savdo (bo'limi)",
      "それまでに||ungacha",
      "かまいません||hechqisi yo'q, mayli",
      "たのしみます|楽しみます|zavqlanmoq",
      "もともと||asli",
      "～せいき|～世紀|...-asr",
      "かわりを します|代わりをします|o'rnini bosmoq",
      "スピード||tezlik",
      "きょうそうします|競争します|musobaqalashmoq",
      "サーカス||sirk",
      "げい|芸|san'at, nomer",
      "うつくしい|美しい|go'zal",
      "すがた|姿|qiyofa",
      "こころ|心|qalb",
      "～に とって||... uchun (nuqtai nazaridan)",
    ],
    grammar: [
      {
        t: "Orttirma fe'llarni yasash",
        p: "いかせます・たべさせます・させます",
        x: `Orttirma nisbat — boshqa odamni biror ish qilishga **majburlash** yoki unga **ruxsat berish**: «...dirmoq», «...tirmoq».

        - **I guruh**: い-tovush → **あ-tovush + せます**: いきます → い**か**せます, かきます → か**か**せます, かいます → か**わ**せます
        - **II guruh**: ます → **させます**: たべ**させ**ます
        - **III guruh**: します → **させます**, きます → **こさせます**

        O'zbek tilida ham bor: yoz → yoz**dir**, o'qi → o'qi**t**, ye → ye**dir**!`,
        ex: [
          ["いかせます・かかせます・よませます・かわせます", "I guruh orttirma fe'llari"],
          ["たべさせます・させます・こさせます", "II va III guruh orttirma fe'llari"],
        ],
      },
      {
        t: "O'timsiz fe'llar: N を V(orttirma)",
        p: "N(odam) を V(o'timsiz, orttirma)",
        x: `Asl fe'l o'timsiz bo'lsa (いきます, かえります, はしります), majburlangan odam **を** bilan belgilanadi:
        - わたしは むすこを じゅくへ いかせます — o'g'limni repetitorga yuboraman.`,
        ex: [
          ["わたしは むすこを じゅくへ いかせます。", "O'g'limni repetitorlik maktabiga yuboraman."],
          ["ぶちょうは ミラーさんを アメリカへ しゅっちょうさせます。", "Bo'lim boshlig'i Millerni Amerikaga xizmat safariga yuboradi."],
        ],
      },
      {
        t: "O'timli fe'llar: N に N を V(orttirma)",
        p: "N(odam) に N を V(o'timli, orttirma)",
        x: `Asl fe'l o'timli bo'lsa (たべます, かきます), majburlangan odam **に**, narsa **を** bilan belgilanadi:
        - ははは こども**に** やさい**を** たべさせます — Onam bolaga sabzavot yedirdi.

        Ruxsat ma'nosi ham bor: むすめが りゅうがくしたいと いったので、りゅうがくさせました — qizim chet elda o'qimoqchi bo'lgani uchun ruxsat berdim.`,
        ex: [
          ["ははは こどもに やさいを たべさせます。", "Onam bolaga sabzavot yediradi."],
          ["せんせいは がくせいに さくぶんを かかせました。", "Ustoz talabalarga insho yozdirdi."],
          ["ははは わたしに へやを そうじさせました。", "Onam menga xonani tozalatdi."],
        ],
      },
      {
        t: "Ruxsat so'rash: ～させて いただけませんか",
        p: "V(orttirma) て いただけませんか",
        x: `**～させて いただけませんか** — o'zingiz biror ish qilish uchun juda muloyim **ruxsat so'rash**: «...shimga ruxsat bera olmaysizmi?».
        - やすませて いただけませんか — dam olishimga ruxsat bera olmaysizmi?`,
        ex: [
          ["すみませんが、きょうは はやく かえらせて いただけませんか。", "Kechirasiz, bugun ertaroq ketishimga ruxsat bera olmaysizmi?"],
          ["ちょっと コピーさせて いただけませんか。", "Bir nusxa ko'chirib olsam bo'ladimi?"],
        ],
      },
    ],
    quiz: [
      ["いきます → orttirma shakl", ["いかせます", "いきさせます", "いけさせます", "いかされます"], "I guruh: き → か + せます."],
      ["たべます → orttirma shakl", ["たべさせます", "たべらせます", "たべかせます", "たばせます"], "II guruh: ます → させます."],
      ["します → orttirma shakl", ["させます", "しさせます", "しらせます", "されます"], "III guruh: させます."],
      ["ははは こども（　）やさいを たべさせます。", ["に", "を", "が", "で"], "O'timli fe'l: odam — に."],
      ["わたしは むすこ（　）じゅくへ いかせます。", ["を", "が", "で", "から"], "O'timsiz fe'l: odam — を."],
      ["すみませんが、ちょっと やすませて（　）。", ["いただけませんか", "やりませんか", "もらいましょうか", "あげませんか"], "Ruxsat so'rash — ～させて いただけませんか."],
      ["きます (kelmoq) → orttirma shakl", ["こさせます", "きさせます", "こらせます", "きかせます"], "III guruh: こさせます."],
      ["«Ustoz talabalarga insho yozdirdi»", ["せんせいは がくせいに さくぶんを かかせました。", "せんせいは がくせいを さくぶんに かかせました。", "せんせいは がくせいに さくぶんを かかれました。", "がくせいは せんせいに さくぶんを かかせました。"], "N に N を V(orttirma)."],
    ],
  },

  {
    n: 49,
    title: "Hurmat nutqi (そんけいご)",
    intro: "Kattalarning harakati haqida hurmat bilan gapirish: いらっしゃいます, めしあがります, お～に なります.",
    vocab: [
      "りようします|利用します|foydalanmoq",
      "つとめます|勤めます|ishlamoq (kompaniyada)",
      "かけます|掛けます|o'tirmoq (stulga)",
      "すごします|過ごします|vaqt o'tkazmoq",
      "いらっしゃいます||bormoq, kelmoq, bo'lmoq (hurmat)",
      "めしあがります|召し上がります|yemoq, ichmoq (hurmat)",
      "おっしゃいます||aytmoq (hurmat)",
      "なさいます||qilmoq (hurmat)",
      "ごらんに なります|ご覧になります|ko'rmoq (hurmat)",
      "ごぞんじです|ご存じです|bilmoq (hurmat)",
      "あいさつ||salomlashish, nutq",
      "はいざら|灰皿|kuldon",
      "りょかん|旅館|yaponcha mehmonxona",
      "バスてい|バス停|avtobus bekati",
      "おくさま|奥様|rafiqangiz (hurmat)",
      "～さま|～様|janob/xonim (yuqori hurmat)",
      "たまに||ahyon-ahyonda",
      "どなたでも||har kim (hurmat)",
      "～と いいます||... deb ataladi",
      "～ねんせい|～年生|...-sinf o'quvchisi, ...-kurs",
      "こうえん|講演|ma'ruza",
      "しょうしょう|少々|bir oz (odobli)",
      "おかけ ください||o'tiring (hurmat)",
    ],
    grammar: [
      {
        t: "Keigo — odobli nutq tizimi",
        p: "そんけいご ／ けんじょうご ／ ていねいご",
        x: `Yapon tilida **keigo** (敬語) — hurmat nutqi uch turga bo'linadi:
        - **そんけいご** (hurmat) — **suhbatdosh yoki uchinchi shaxsning** harakatini ko'tarib aytish (49-dars)
        - **けんじょうご** (kamtarlik) — **o'z** harakatini kamtarlik bilan pasaytirib aytish (50-dars)
        - **ていねいご** (odobli) — です・ます (siz allaqachon bilasiz)

        Kimga ishlatiladi: ustoz, boshliq, mijoz, notanish kattalar. O'zbek tilidagi «kelyaptilar», «aytdilar», «marhamat qilsinlar» shakllariga o'xshaydi.`,
        ex: [
          ["せんせいは なんじに いらっしゃいますか。", "Ustoz soat nechada keladilar?"],
          ["しゃちょうは いま かいぎしつに いらっしゃいます。", "Direktor hozir majlislar zalidalar."],
        ],
      },
      {
        t: "Majhul shakl orqali hurmat",
        p: "V(majhul shakl) = hurmat",
        x: `Eng oddiy usul — 37-darsdagi **majhul shakl**ni hurmat ma'nosida ishlatish:
        - かえります → **かえられます** (qaytadilar)
        - いきます → **いかれます** (boradilar)
        - よみます → **よまれます** (o'qiydilar)`,
        ex: [
          ["しゃちょうは もう かえられました。", "Direktor allaqachon ketdilar."],
          ["ぶちょうは あした ほっかいどうへ いかれます。", "Bo'lim boshlig'i ertaga Xokkaydoga boradilar."],
        ],
      },
      {
        t: "お～に なります",
        p: "お V(ます-asos) に なります",
        x: `Yanada hurmatli usul: **お + ます-asos + に なります**:
        - かえります → **おかえりに なります**
        - よみます → **およみに なります**

        ! みます, ねます kabi bir bo'g'inli asosli fe'llar va する fe'llari bu qolipga tushmaydi — ular uchun maxsus so'zlar bor.`,
        ex: [
          ["しゃちょうは もう おかえりに なりました。", "Direktor allaqachon ketdilar."],
          ["せんせいは この ほんを おかきに なりました。", "Ustoz bu kitobni yozganlar."],
        ],
      },
      {
        t: "Maxsus hurmat fe'llari",
        p: "いらっしゃいます・めしあがります・おっしゃいます...",
        x: `Ba'zi tez-tez ishlatiladigan fe'llarning maxsus hurmat shakli bor:
        - いきます／きます／います → **いらっしゃいます**
        - たべます／のみます → **めしあがります**
        - いいます → **おっしゃいます**
        - します → **なさいます**
        - みます → **ごらんに なります**
        - しって います → **ごぞんじです**
        - くれます → **くださいます**`,
        ex: [
          ["せんせいは なにを めしあがりますか。", "Ustoz nima tanovul qiladilar?"],
          ["しゃちょうは じむしょに いらっしゃいます。", "Direktor ofisdalar."],
          ["この ニュースを ごぞんじですか。", "Bu yangilikdan xabardormisiz?"],
          ["せんせいが そう おっしゃいました。", "Ustoz shunday dedilar."],
        ],
      },
      {
        t: "Hurmatli iltimos: お～ください",
        p: "お V(ます-asos) ください",
        x: `**お + ます-asos + ください** — mijoz yoki mehmonga juda hurmatli iltimos:
        - おかけ ください — o'tiring
        - おまち ください — kutib turing
        - おはいり ください — kiring`,
        ex: [
          ["どうぞ こちらに おかけ ください。", "Marhamat, bu yerga o'tiring."],
          ["しょうしょう おまち ください。", "Bir oz kutib turing."],
        ],
      },
    ],
    quiz: [
      ["いきます → hurmat (maxsus fe'l)", ["いらっしゃいます", "まいります", "うかがいます", "おります"], "Hurmat: いらっしゃいます."],
      ["たべます → hurmat", ["めしあがります", "いただきます", "おたべします", "たべさせます"], "Hurmat: めしあがります."],
      ["いいます → hurmat", ["おっしゃいます", "もうします", "いわせます", "おいいします"], "Hurmat: おっしゃいます."],
      ["みます → hurmat", ["ごらんに なります", "はいけんします", "みさせます", "おみします"], "Hurmat: ごらんに なります."],
      ["しゃちょうは もう お（　）に なりました。 — «ketdilar»", ["かえり", "かえる", "かえって", "かえった"], "お + ます-asos + に なります."],
      ["どうぞ こちらに おかけ（　）。", ["ください", "くださいます", "します", "いたします"], "お～ください."],
      ["この ニュースを（　）か。 — «bilasizmi» (hurmat)", ["ごぞんじです", "ぞんじます", "おしりします", "しらせます"], "Hurmat: ごぞんじです."],
      ["します → hurmat", ["なさいます", "いたします", "させます", "おします"], "Hurmat: なさいます."],
    ],
  },

  {
    n: 50,
    title: "Kamtarlik nutqi (けんじょうご)",
    intro: "O'z harakatini kamtarlik bilan aytish: まいります, おります, もうします, お～します, ございます.",
    vocab: [
      "まいります|参ります|bormoq, kelmoq (kamtarlik)",
      "おります||bo'lmoq, bor bo'lmoq (kamtarlik)",
      "いただきます||yemoq, ichmoq, olmoq (kamtarlik)",
      "もうします|申します|aytmoq, atalmoq (kamtarlik)",
      "いたします||qilmoq (kamtarlik)",
      "はいけんします|拝見します|ko'rmoq (kamtarlik)",
      "ぞんじます|存じます|bilmoq (kamtarlik)",
      "うかがいます|伺います|so'ramoq; bormoq (kamtarlik)",
      "おめに かかります|お目にかかります|uchrashmoq (kamtarlik)",
      "さしあげます|差し上げます|bermoq (kamtarlik)",
      "ございます||bor (juda odobli)",
      "～で ございます||...dir (juda odobli)",
      "いれます|入れます|damlamoq (qahva)",
      "よういします|用意します|tayyorlamoq",
      "わたくし|私|men (rasmiy)",
      "ガイド||gid",
      "メールアドレス||elektron pochta manzili",
      "スケジュール||jadval",
      "さらいしゅう|再来週|ikki haftadan keyin",
      "さらいげつ|再来月|ikki oydan keyin",
      "さらいねん|再来年|ikki yildan keyin",
      "はじめに|初めに|avvalo",
      "きんちょうします|緊張します|hayajonlanmoq",
      "しょうきん|賞金|mukofot puli",
      "しぜん|自然|tabiat",
      "かないます|叶います|amalga oshmoq (orzu)",
      "ひとこと よろしいでしょうか|一言よろしいでしょうか|bir og'iz gapirsam maylimi?",
      "きょうりょくします|協力します|hamkorlik qilmoq",
      "こころから|心から|chin qalbdan",
      "かんしゃします|感謝します|minnatdorchilik bildirmoq",
      "ただいま||hozir (rasmiy)",
      "さきほど|先ほど|hozirgina (rasmiy)",
    ],
    grammar: [
      {
        t: "お～します: kamtarlik bilan harakat",
        p: "お V(ます-asos) します ／ ご N します",
        x: `**Kamtarlik nutqi** — o'z harakatingizni pasaytirib, tinglovchini ko'tarish. Asosan siz **boshqa odam uchun** biror ish qilganingizda:
        - **お + ます-asos + します**: もちます → **おもちします** (ko'tarib beraman)
        - **ご + harakat oti + します**: あんないします → **ごあんないします** (yo'l ko'rsataman)`,
        ex: [
          ["にもつを おもちしましょうか。", "Yukingizni ko'tarib beraymi?"],
          ["わたしが きょうとを ごあんないします。", "Men sizga Kiotoni ko'rsatib chiqaman."],
          ["あとで おでんわします。", "Keyinroq qo'ng'iroq qilaman."],
        ],
      },
      {
        t: "Maxsus kamtarlik fe'llari",
        p: "まいります・おります・もうします・いたします...",
        x: `Ba'zi fe'llarning maxsus kamtarlik shakli bor:
        - いきます／きます → **まいります**
        - います → **おります**
        - たべます／のみます／もらいます → **いただきます**
        - いいます → **もうします**
        - します → **いたします**
        - みます → **はいけんします**
        - しって います → **ぞんじて おります**
        - ききます／（uyga）いきます → **うかがいます**
        - あいます → **おめに かかります**
        - あげます → **さしあげます**`,
        ex: [
          ["はじめまして。わたくしは ミラーと もうします。", "Tanishganimdan xursandman. Mening ismim Miller."],
          ["あした ３じに うかがいます。", "Ertaga soat 3 da huzuringizga boraman."],
          ["タシケントから まいりました。", "Toshkentdan keldim."],
          ["しゃしんを はいけんしても よろしいですか。", "Suratlarni ko'rsam maylimi?"],
        ],
      },
      {
        t: "Juda odobli: ございます",
        p: "あります → ございます ／ です → で ございます",
        x: `Do'kon, mehmonxona, rasmiy joylarda xodimlar juda odobli **ていねいご** ishlatadi:
        - あります → **ございます**
        - です → **で ございます**
        - いいですか → **よろしいでしょうか**`,
        ex: [
          ["でんわは かいだんの よこに ございます。", "Telefon zinapoya yonida."],
          ["おてあらいは あちらで ございます。", "Hojatxona u tomonda."],
          ["こちらで よろしいでしょうか。", "Shunisi ma'qulmi?"],
        ],
      },
      {
        t: "O'z jamoasi haqida begonalarga",
        p: "uchinchi shaxsga — o'z boshlig'ingiz ham «ichki» odam",
        x: `Yapon odob qoidasi: begona (mijoz, boshqa kompaniya) bilan gaplashganda **o'z kompaniyangiz a'zolari** — hatto boshlig'ingiz haqida ham — **kamtarlik** shaklida gapiriladi va **～さん qo'shilmaydi**:
        - たなか**は** ただいま でかけて **おります** — Tanaka hozir chiqib ketgan.

        Bu «biz — ichkari, siz — tashqari» (うち・そと) tushunchasi.`,
        ex: [
          ["たなかは ただいま でかけて おります。", "Tanaka hozir joyida yo'q."],
          ["しゃちょうの やまだは あした まいります。", "Direktorimiz Yamada ertaga keladi."],
        ],
      },
    ],
    quiz: [
      ["いきます → kamtarlik (maxsus fe'l)", ["まいります", "いらっしゃいます", "おいきします", "いかれます"], "Kamtarlik: まいります."],
      ["います → kamtarlik", ["おります", "いらっしゃいます", "ございます", "いられます"], "Kamtarlik: おります."],
      ["わたしは ミラーと（　）。", ["もうします", "おっしゃいます", "いわれます", "おいいします"], "Kamtarlik: もうします."],
      ["します → kamtarlik", ["いたします", "なさいます", "されます", "おします"], "Kamtarlik: いたします."],
      ["にもつを お（　）しましょうか。", ["もち", "もつ", "もって", "もった"], "お + ます-asos + します."],
      ["あいます → kamtarlik", ["おめに かかります", "おあいに なります", "ごらんに なります", "あわれます"], "Kamtarlik: おめに かかります."],
      ["おてあらいは あちらで（　）。 — juda odobli «...dir»", ["ございます", "おります", "いたします", "まいります"], "です → で ございます."],
      ["Mijozga o'z boshlig'ingiz haqida: «Tanaka hozir yo'q»", ["たなかは ただいま でかけて おります。", "たなかさんは ただいま でかけて いらっしゃいます。", "たなかさまは ただいま おでかけに なりました。", "たなかさんは ただいま でかけて おります。"], "Begonaga o'z jamoangiz haqida — kamtarlik, さん siz."],
    ],
  },
];
