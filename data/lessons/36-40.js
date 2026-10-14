export default [
  {
    n: 36,
    title: "Maqsad va odat: ～ように",
    intro: "～ように (...ishi uchun), ～ように なります (...adigan bo'ldim), ～ように します (harakat qilaman).",
    vocab: [
      "あいます|遭います|duch kelmoq (avariyaga)",
      "ちょきんします|貯金します|pul yig'moq",
      "すぎます|過ぎます|o'tmoq (vaqt)",
      "なれます|慣れます|ko'nikmoq",
      "くさります|腐ります|aynimoq, chirimoq",
      "けんどう|剣道|kendo (qilichbozlik)",
      "じゅうどう|柔道|dzyudo",
      "ラッシュ||tig'iz payt (transport)",
      "うちゅう|宇宙|koinot",
      "きょく|曲|kuy, qo'shiq",
      "まいしゅう|毎週|har hafta",
      "まいつき|毎月|har oy",
      "まいとし|毎年|har yil",
      "やっと||nihoyat",
      "かなり||ancha",
      "かならず|必ず|albatta, shubhasiz",
      "ぜったいに|絶対に|aslo, hech qachon (+inkor)",
      "じょうずに|上手に|mohirona",
      "できるだけ||imkon qadar",
      "このごろ||shu kunlarda",
      "～ずつ||...dan (har biriga)",
      "そのほうが～||shunisi ...roq",
      "けんこう|健康|sog'liq",
      "ほとんど||deyarli",
      "はやく|早く|tezroq",
      "きをつけて|気をつけて|ehtiyot bo'ling",
    ],
    grammar: [
      {
        t: "Maqsad: ～ように",
        p: "V(lug'at)／V ない ように、V2",
        x: `**～ように** — «...ishi uchun», «...maslik uchun». Maqsad bildiradi, lekin birinchi qismdagi fe'l **irodaga bog'liq bo'lmagan** fe'l bo'ladi:
        - imkoniyat fe'llari: およ**げる**ように
        - わかります, みえます, きこえます, なります
        - inkor shakl: わすれ**ない**ように

        - はやく およげるように、まいにち れんしゅうして います — Tez suza olishim uchun har kuni mashq qilyapman.`,
        ex: [
          ["はやく およげるように、まいにち れんしゅうして います。", "Tez suza olishim uchun har kuni mashq qilyapman."],
          ["わすれないように、メモして ください。", "Unutmaslik uchun yozib oling."],
          ["うしろの せきの ひとにも きこえるように、おおきい こえで はなして ください。", "Orqa o'rindiqdagilarga ham eshitilishi uchun baland ovozda gapiring."],
        ],
      },
      {
        t: "O'zgarish: ～ように なります",
        p: "V(lug'at) ように なります ／ V ない → なく なります",
        x: `**～ように なります** — asta-sekin yangi qobiliyat yoki odat paydo bo'lishi: «...adigan bo'ldim»:
        - にほんごが はなせる**ように なりました** — yaponcha gapira oladigan bo'ldim

        Aksincha (endi ...maydi): **～なく なりました**:
        - たばこを すわ**なく なりました** — sigaret chekmay qo'ydim`,
        ex: [
          ["にほんごが はなせるように なりました。", "Yaponcha gapira oladigan bo'ldim."],
          ["まいにち れんしゅうすれば、およげるように なります。", "Har kuni mashq qilsangiz, suza oladigan bo'lasiz."],
          ["ちちは さいきん たばこを すわなく なりました。", "Otam yaqinda sigaret chekmay qo'ydi."],
        ],
      },
      {
        t: "Harakat qilish: ～ように します",
        p: "V(lug'at)／V ない ように します",
        x: `**～ように して います** — biror narsaga doimiy harakat qilish, odat qilib olish: «...ishga harakat qilyapman».

        **～ように して ください** — muloyim iltimos: «...ishga harakat qiling».`,
        ex: [
          ["まいにち うんどうするように して います。", "Har kuni jismoniy mashq qilishga harakat qilyapman."],
          ["あまい ものを たべないように して います。", "Shirinlik yemaslikka harakat qilyapman."],
          ["あしたは ９じまでに くるように して ください。", "Ertaga soat 9 gacha kelishga harakat qiling."],
        ],
      },
      {
        t: "Taqsimlash: ～ずつ",
        p: "［miqdor］ ずつ",
        x: `**ずつ** — «...dan», har biriga teng miqdor: ひとつずつ (bittadan), すこしずつ (ozdan-ozdan).`,
        ex: [
          ["ひとつずつ とって ください。", "Bittadan oling."],
          ["にほんごが すこしずつ わかるように なりました。", "Yapon tilini ozdan-ozdan tushunadigan bo'ldim."],
        ],
      },
    ],
    quiz: [
      ["わすれない（　）、メモして ください。", ["ように", "ほうが", "まえに", "あとで"], "Maqsad (inkor) — ～ないように."],
      ["にほんごが はなせる（　）なりました。", ["ように", "ために", "ほど", "とおりに"], "Yangi qobiliyat — ～ように なりました."],
      ["まいにち うんどうする（　）して います。 — «harakat qilyapman»", ["ように", "ために", "ほうが", "とおりに"], "Odat — ～ように して います."],
      ["«Endi sigaret chekmay qo'ydim»", ["たばこを すわなく なりました。", "たばこを すわないく なりました。", "たばこを すわなくて なりました。", "たばこを すわないに なりました。"], "ない → なく なります."],
      ["はやく およげる（　）、まいにち れんしゅうして います。", ["ように", "ために", "まえに", "だけ"], "Imkoniyat fe'li bilan maqsad — ように."],
      ["«Shirinlik yemaslikka harakat qilyapman»", ["あまい ものを たべないように して います。", "あまい ものを たべないように なって います。", "あまい ものを たべないために なります。", "あまい ものを たべなく して います。"], "V ない ように して います."],
      ["ひとつ（　）とって ください。 — «bittadan»", ["ずつ", "だけ", "しか", "も"], "Taqsimlash — ずつ."],
      ["あした ９じまでに くる（　）して ください。", ["ように", "ために", "ので", "ほうが"], "Muloyim iltimos — ～ように して ください."],
    ],
  },

  {
    n: 37,
    title: "Majhul nisbat",
    intro: "Majhul fe'llar: ほめられました (maqtaldim), とられました (o'g'irlatdim), つくられます (ishlab chiqariladi).",
    vocab: [
      "ほめます|褒めます|maqtamoq",
      "しかります||urishmoq, koyimoq",
      "さそいます|誘います|taklif qilmoq",
      "おこします|起こします|uyg'otmoq",
      "しょうたいします|招待します|taklif qilmoq (rasmiy)",
      "たのみます|頼みます|iltimos qilmoq",
      "ちゅういします|注意します|tanbeh bermoq",
      "とります|盗ります|o'g'irlamoq",
      "ふみます|踏みます|bosib olmoq (oyoqni)",
      "こわします|壊します|buzmoq",
      "よごします|汚します|kirlatmoq",
      "おこないます|行います|o'tkazmoq (tadbir)",
      "ゆしゅつします|輸出します|eksport qilmoq",
      "ゆにゅうします|輸入します|import qilmoq",
      "ほんやくします|翻訳します|tarjima qilmoq",
      "はつめいします|発明します|ixtiro qilmoq",
      "はっけんします|発見します|kashf qilmoq",
      "たてます|建てます|qurmoq",
      "こめ|米|guruch",
      "むぎ|麦|bug'doy, arpa",
      "せきゆ|石油|neft",
      "げんりょう|原料|xomashyo",
      "インスタントラーメン||tezpishar lag'mon",
      "デート||uchrashuv (sevgililar)",
      "どろぼう|泥棒|o'g'ri",
      "けいかん|警官|politsiyachi",
      "せかいじゅう|世界中|butun dunyoda",
      "～じゅう|～中|butun ... bo'ylab",
      "～に よって||... tomonidan",
      "よかったですね||yaxshi bo'libdi-ku",
      "わた|綿|paxta",
    ],
    grammar: [
      {
        t: "Majhul fe'llarni yasash",
        p: "よばれます・ほめられます・されます",
        x: `Majhul nisbat — harakatni bajaruvchi emas, harakat yo'naltirilgan tomon nuqtai nazaridan aytish («maqtaldim», «chaqirildim»).

        - **I guruh**: い-tovush → **あ-tovush + れます**: よびます → よ**ば**れます, かきます → か**か**れます, いいます → い**わ**れます (い → わ!)
        - **II guruh**: ます → **られます**: ほめます → ほめ**られ**ます (imkoniyat shakli bilan bir xil!)
        - **III guruh**: します → **されます**, きます → **こられます**

        ! O'zbek tilida ham majhul nisbat bor: «maqta**l**dim», «chaqiri**l**dim» — xuddi shu ma'no.`,
        ex: [
          ["よばれます・かかれます・いわれます・ふまれます", "I guruh majhul fe'llari"],
          ["ほめられます・たてられます・されます・こられます", "II va III guruh majhul fe'llari"],
        ],
      },
      {
        t: "To'g'ridan-to'g'ri majhul: N1 は N2 に V(majhul)",
        p: "N1 は N2(bajaruvchi) に V(majhul)",
        x: `Harakat yo'naltirilgan odam — mavzu (**は**), harakatni bajargan odam — **に**:
        - せんせいが わたしを ほめました → わたしは せんせい**に** ほめられました (Men ustoz tomonidan maqtaldim)`,
        ex: [
          ["わたしは せんせいに ほめられました。", "Ustoz meni maqtadi (men maqtaldim)."],
          ["わたしは ははに かいものを たのまれました。", "Onam mendan xarid qilishni iltimos qildi."],
          ["けさ ちちに おこされました。", "Bugun ertalab otam meni uyg'otdi."],
        ],
      },
      {
        t: "Ziyon ko'rish: N1 は N2 に N3 を V(majhul)",
        p: "わたしは N2 に N3(o'zimniki) を V(majhul)",
        x: `Agar kimdir **mening narsamga** biror ish qilsa va men bundan **ziyon ko'rsam**, yapon tilida «men» mavzu bo'ladi, narsa esa を bilan qoladi:
        - わたしは どろぼうに さいふを とられました — O'g'ri hamyonimni o'g'irladi (men jabr ko'rdim).

        ! «わたしの さいふは どろぼうに とられました» — g'ayritabiiy eshitiladi.`,
        ex: [
          ["わたしは どろぼうに さいふを とられました。", "O'g'ri hamyonimni o'g'irlab ketdi."],
          ["わたしは おとうとに パソコンを こわされました。", "Ukam kompyuterimni buzib qo'ydi."],
          ["でんしゃの なかで あしを ふまれました。", "Poyezdda oyog'imni bosib olishdi."],
        ],
      },
      {
        t: "Narsa va voqealar: N が／は V(majhul)",
        p: "N が／は V(majhul)",
        x: `Bajaruvchi muhim bo'lmaganda yoki noma'lum bo'lganda (tadbirlar, mahsulotlar, binolar) majhul nisbat ishlatiladi:
        - こくさいかいぎが きょうとで ひらかれます — Xalqaro konferensiya Kiotoda o'tkaziladi.

        Ixtirochi, muallif kabi yaratuvchi **～に よって** bilan belgilanadi.`,
        ex: [
          ["こくさいかいぎが きょうとで ひらかれます。", "Xalqaro konferensiya Kiotoda o'tkaziladi."],
          ["この ほんは せかいじゅうで よまれて います。", "Bu kitob butun dunyoda o'qiladi."],
          ["でんわは ベルに よって はつめいされました。", "Telefon Bell tomonidan ixtiro qilingan."],
          ["この おてらは ８００ねん まえに たてられました。", "Bu ibodatxona 800 yil oldin qurilgan."],
        ],
      },
      {
        t: "Nimadan yasalgan: から／で つくられます",
        p: "N(xomashyo) から ／ N(material) で つくられます",
        x: `- **から** — xomashyo shaklini o'zgartirgan bo'lsa: ビールは むぎ**から** つくられます (pivo arpadan)
        - **で** — material ko'rinib turgan bo'lsa: この いすは き**で** つくられて います (yog'ochdan)`,
        ex: [
          ["ビールは むぎから つくられます。", "Pivo arpadan tayyorlanadi."],
          ["この いすは きで つくられて います。", "Bu stul yog'ochdan yasalgan."],
          ["ウズベキスタンでは わたが たくさん つくられて います。", "O'zbekistonda ko'p paxta yetishtiriladi."],
        ],
      },
    ],
    quiz: [
      ["よびます → majhul shakl", ["よばれます", "よびられます", "よべます", "よぼれます"], "I guruh: び → ば + れます."],
      ["ほめます → majhul shakl", ["ほめられます", "ほめれます", "ほめさせます", "ほまれます"], "II guruh: ます → られます."],
      ["わたしは せんせい（　）ほめられました。", ["に", "を", "が", "で"], "Bajaruvchi — に."],
      ["わたしは どろぼうに さいふを（　）。 — «o'g'irlatdim»", ["とられました", "とりました", "とらせました", "とれました"], "Ziyon ko'rish majhul shakli."],
      ["ビールは むぎ（　）つくられます。", ["から", "に", "を", "と"], "Xomashyo — から."],
      ["こくさいかいぎが きょうとで（　）。 — «o'tkaziladi»", ["ひらかれます", "ひらきます", "ひらけます", "ひらかせます"], "Tadbir — majhul shakl."],
      ["でんわは ベル（　）はつめいされました。", ["に よって", "から", "で", "を"], "Yaratuvchi — ～に よって."],
      ["«Ukam kompyuterimni buzib qo'ydi» (men jabr ko'rdim)", ["わたしは おとうとに パソコンを こわされました。", "わたしの パソコンは おとうとに こわされました。", "わたしは おとうとを パソコンに こわされました。", "おとうとは わたしに パソコンを こわされました。"], "わたしは N に N を V(majhul)."],
    ],
  },

  {
    n: 38,
    title: "Harakatni otga aylantirish: の",
    intro: "～のは (...ish ...dir), ～のが すきです, ～のを わすれました, ～のは N です.",
    vocab: [
      "そだてます|育てます|o'stirmoq, tarbiyalamoq",
      "はこびます|運びます|tashimoq",
      "にゅういんします|入院します|kasalxonaga yotmoq",
      "たいいんします|退院します|kasalxonadan chiqmoq",
      "いれます|入れます|yoqmoq (tok)",
      "きります|切ります|o'chirmoq (tok)",
      "かけます|掛けます|qulflamoq",
      "つきます||(yolg'on) gapirmoq",
      "きもちが いい|気持ちがいい|yoqimli",
      "きもちが わるい|気持ちが悪い|yoqimsiz, ko'ngil aynigan",
      "おおきな|大きな|katta",
      "ちいさな|小さな|kichik",
      "あかちゃん|赤ちゃん|chaqaloq",
      "しょうがっこう|小学校|boshlang'ich maktab",
      "ちゅうがっこう|中学校|o'rta maktab",
      "えきまえ|駅前|bekat oldi",
      "かいがん|海岸|dengiz qirg'og'i",
      "こうじょう|工場|zavod",
      "かな|仮名|kana",
      "ゆびわ|指輪|uzuk",
      "でんげん|電源|elektr manbai",
      "しゅうかん|習慣|odat",
      "けんこう|健康|sog'liq",
      "～せい|～製|... ishlab chiqargan",
      "おととし||o'tgan yildan oldingi yil",
      "うっかりして いました||e'tiborsizlik qilibman",
      "あ||voy, a",
      "うそ||yolg'on",
    ],
    grammar: [
      {
        t: "«...ish — ...»: ～のは adj です",
        p: "V(oddiy) の は adj です",
        x: `**の** fe'lni otga aylantiradi («...ish»). Shunda u mavzu bo'la oladi:
        - テニスを する**のは** おもしろいです — Tennis o'ynash qiziq.

        O'zbekchada: «o'yna**sh**», «yur**ish**» — xuddi shu vazifa.`,
        ex: [
          ["テニスを するのは おもしろいです。", "Tennis o'ynash qiziq."],
          ["よる ひとりで あるくのは あぶないです。", "Kechasi yolg'iz yurish xavfli."],
          ["はやく おきるのは からだに いいです。", "Erta turish sog'liqqa foydali."],
        ],
      },
      {
        t: "Yoqtirish va mahorat: ～のが すきです",
        p: "V(lug'at) の が すきです／じょうずです／はやいです",
        x: `すき, きらい, じょうず, へた, はやい, おそい kabi so'zlar bilan fe'l **の が** orqali bog'lanadi:
        - えを かく**のが** すきです — rasm chizishni yoqtiraman
        - はしる**のが** はやいです — tez yuguradi`,
        ex: [
          ["わたしは えを かくのが すきです。", "Men rasm chizishni yoqtiraman."],
          ["ミラーさんは はしるのが はやいです。", "Miller tez yuguradi."],
          ["ちちは りょうりを つくるのが じょうずです。", "Otam ovqat pishirishga usta."],
        ],
      },
      {
        t: "Unutish: ～のを わすれました",
        p: "V(lug'at) の を わすれました",
        x: `**～のを わすれました** — «...ishni unutibman»:
        - かぎを かける**のを** わすれました — eshikni qulflashni unutibman`,
        ex: [
          ["かぎを かけるのを わすれました。", "Eshikni qulflashni unutibman."],
          ["でんきを けすのを わすれました。", "Chiroqni o'chirishni unutibman."],
        ],
      },
      {
        t: "Bilasizmi: ～のを しって いますか",
        p: "oddiy shakl + の を しって いますか",
        x: `Biror voqea haqida xabardorlikni so'rash: «...ishini bilasizmi?».

        ! «Bilmayman» — しりませんでした (bilmagan ekanman) — yangi ma'lumot olinganda.`,
        ex: [
          ["ミラーさんが らいげつ けっこんするのを しって いますか。", "Miller kelasi oy turmush qurishini bilasizmi?"],
          ["A：きむらさんに あかちゃんが うまれたのを しって いますか。 ／ B：いいえ、しりませんでした。", "A: Kimuraning chaqalog'i tug'ilganini bilasizmi? / B: Yo'q, bilmagan ekanman."],
        ],
      },
      {
        t: "Ta'kidlash: ～のは N です",
        p: "oddiy shakl + の は N です",
        x: `Gapning bir qismini ta'kidlash uchun uni oxiriga olib chiqish mumkin:
        - わたしは タシケントで うまれました → わたしが うまれた**のは** タシケント**です** (Men tug'ilgan joy — Toshkent).

        ! Bu qolipda ichki ega **が** bilan keladi.`,
        ex: [
          ["わたしが うまれたのは タシケントです。", "Men tug'ilgan joy — Toshkent."],
          ["にほんで いちばん たかいのは ふじさんです。", "Yaponiyadagi eng baland narsa — Fuji tog'i."],
          ["ちちが うまれたのは １９６５ねんです。", "Otam tug'ilgan yil — 1965."],
        ],
      },
    ],
    quiz: [
      ["わたしは えを かく（　）が すきです。", ["の", "と", "を", "で"], "Fe'l + の + が すきです."],
      ["テニスを する（　）は おもしろいです。", ["の", "を", "が", "と"], "Fe'lni otga aylantirish — の."],
      ["かぎを かける（　）を わすれました。", ["の", "と", "に", "で"], "～のを わすれました."],
      ["わたしが うまれた（　）は タシケントです。", ["の", "こと", "もの", "とき"], "Ta'kidlash — ～のは N です."],
      ["ミラーさんが けっこんする（　）を しって いますか。", ["の", "と", "が", "に"], "～のを しって いますか."],
      ["«Yolg'iz yurish xavfli»", ["ひとりで あるくのは あぶないです。", "ひとりで あるくは あぶないです。", "ひとりで あるいては あぶないです。", "ひとりで あるくのが あぶないでした。"], "Fe'l + のは."],
      ["でんきを けすのを（　）。 — «unutibman»", ["わすれました", "しりました", "おぼえました", "おもいだしました"], "わすれます."],
      ["ミラーさんは はしる（　）が はやいです。", ["の", "と", "を", "に"], "～のが はやいです."],
    ],
  },

  {
    n: 39,
    title: "Sabab va his-tuyg'u",
    intro: "～て／～くて／～で (...gani uchun his qilaman), N で (sabab), ～ので.",
    vocab: [
      "こたえます|答えます|javob bermoq",
      "たおれます|倒れます|qulamoq",
      "やけます|焼けます|yonib ketmoq; pishmoq",
      "とおります|通ります|o'tmoq",
      "しにます|死にます|o'lmoq",
      "びっくりします||hayratlanmoq",
      "がっかりします||hafsalasi pir bo'lmoq",
      "あんしんします|安心します|xotirjam bo'lmoq",
      "ちこくします|遅刻します|kechikmoq",
      "そうたいします|早退します|vaqtliroq ketmoq",
      "けんかします||urishmoq, janjallashmoq",
      "りこんします|離婚します|ajrashmoq",
      "ふくざつ|複雑（な）|murakkab",
      "じゃま|邪魔（な）|xalaqit beradigan",
      "きたない|汚い|iflos",
      "うれしい||xursand",
      "かなしい|悲しい|g'amgin",
      "はずかしい|恥ずかしい|uyatli",
      "じしん|地震|zilzila",
      "たいふう|台風|to'fon",
      "かじ|火事|yong'in",
      "じこ|事故|avariya",
      "おみあい|お見合い|sovchilik uchrashuvi",
      "でんわだい|電話代|telefon to'lovi",
      "～だい|～代|... to'lovi",
      "フロント||qabulxona (mehmonxona)",
      "～ごうしつ|～号室|...-xona",
      "あせ|汗|ter",
      "タオル||sochiq",
      "せっけん||sovun",
      "おおぜい|大勢|ko'p odam",
      "おつかれさまでした|お疲れ様でした|charchadingiz, rahmat",
      "うかがいます|伺います|boraman (kamtarlik)",
      "とちゅうで|途中で|yo'lda",
      "トラック||yuk mashinasi",
      "ぶつかります||urilmoq",
    ],
    grammar: [
      {
        t: "His-tuyg'u sababi: ～て／～くて／～で",
        p: "V て ／ い-sifat くて ／ な-sifat で、his-tuyg'u",
        x: `て-shakl sabab bildirib, ikkinchi qismda **his-tuyg'u yoki holat** keladi:
        - ニュースを きいて、びっくりしました — Yangilikni eshitib, hayratlandim.
        - かぞくに あえなくて、さびしいです — Oilam bilan ko'risha olmay, zerikaman.

        ! Ikkinchi qismda **iroda** (istak, buyruq, taklif) bo'lmaydi: びっくりしました, あんしんしました, こまりました, さびしいです...`,
        ex: [
          ["ニュースを きいて、びっくりしました。", "Yangilikni eshitib, hayratlanib qoldim."],
          ["かぞくに あえなくて、さびしいです。", "Oilam bilan ko'risha olmay, sog'indim."],
          ["はなしが ふくざつで、よく わかりませんでした。", "Gap murakkab bo'lib, yaxshi tushunmadim."],
          ["しけんに ごうかくして、あんしんしました。", "Imtihondan o'tib, xotirjam bo'ldim."],
        ],
      },
      {
        t: "Hodisa sababi: N で",
        p: "N(hodisa) で ～",
        x: `Hodisa yoki voqea (じこ, じしん, びょうき, かじ) sabab bo'lsa — **で**:
        - じしん**で** ビルが たおれました — Zilzila tufayli bino qulab tushdi.`,
        ex: [
          ["じしんで ビルが たおれました。", "Zilzila tufayli bino qulab tushdi."],
          ["びょうきで がっこうを やすみました。", "Kasallik sababli darsga bormadim."],
          ["じこで でんしゃが とまりました。", "Avariya sababli poyezd to'xtadi."],
        ],
      },
      {
        t: "Sabab: ～ので",
        p: "oddiy shakl + ので (N／な-sifat + なので)",
        x: `**～ので** — から kabi sabab bildiradi, lekin yumshoqroq va xolisroq eshitiladi. Shuning uchun ruxsat so'rash va uzr aytishda qulay.

        Ot va な-sifatda: だ → **な**: あめ**なので**, ひま**なので**.`,
        ex: [
          ["ようじが あるので、おさきに しつれいします。", "Ishim borligi uchun avvalroq ketaman."],
          ["にほんごが わからないので、えいごで はなして いただけませんか。", "Yaponchani tushunmaganim uchun inglizcha gapira olmaysizmi?"],
          ["きょうは あめなので、でかけません。", "Bugun yomg'ir bo'lgani uchun chiqmayman."],
        ],
      },
      {
        t: "Yo'lda: ～とちゅうで",
        p: "V(lug'at)／N の とちゅうで",
        x: `**とちゅうで** — «yo'lda», «...ayotganda»: うちへ かえる とちゅうで — uyga qaytayotib.`,
        ex: [
          ["うちへ かえる とちゅうで、ともだちに あいました。", "Uyga qaytayotib, do'stimni uchratdim."],
        ],
      },
    ],
    quiz: [
      ["ニュースを（　）、びっくりしました。", ["きいて", "きくて", "ききて", "きけば"], "Sabab — て-shakl."],
      ["かぞくに あえ（　）、さびしいです。", ["なくて", "ないで", "なければ", "ないと"], "Inkor sabab — ～なくて."],
      ["じしん（　）ビルが たおれました。", ["で", "に", "を", "が"], "Hodisa sababi — で."],
      ["はなしが ふくざつ（　）、よく わかりませんでした。", ["で", "くて", "な", "に"], "な-sifat + で."],
      ["ようじが ある（　）、おさきに しつれいします。", ["ので", "のに", "のは", "のを"], "Yumshoq sabab — ので."],
      ["«Kasallik sababli darsga bormadi»", ["びょうきで がっこうを やすみました。", "びょうきに がっこうを やすみました。", "びょうきを がっこうを やすみました。", "びょうきから がっこうを やすみました。"], "N(hodisa) で."],
      ["あめ（　）ので、でかけません。", ["な", "だ", "の", "で"], "Ot + な + ので."],
      ["しけんに ごうかくして、（　）。", ["あんしんしました", "あんしんして ください", "あんしんしましょう", "あんしんしたいです"], "Ikkinchi qismda his-tuyg'u, iroda emas."],
    ],
  },

  {
    n: 40,
    title: "Bilmayman, sinab ko'raman",
    intro: "Ichki so'roq (なんじに つくか), ～か どうか, ～て みます, sifatdan ot yasash (～さ).",
    vocab: [
      "かぞえます|数えます|sanamoq",
      "はかります|測ります|o'lchamoq",
      "たしかめます|確かめます|tekshirmoq, aniqlamoq",
      "あいます|合います|mos kelmoq (o'lcham)",
      "しゅっぱつします|出発します|jo'nab ketmoq",
      "とうちゃくします|到着します|yetib kelmoq",
      "よいます|酔います|mast bo'lmoq",
      "うまく いきます||yaxshi o'tmoq",
      "でます|出ます|chiqmoq (savol imtihonda)",
      "そうだんします|相談します|maslahatlashmoq",
      "ひつよう|必要（な）|zarur",
      "てんきよほう|天気予報|ob-havo ma'lumoti",
      "ぼうねんかい|忘年会|yil yakuni ziyofati",
      "しんねんかい|新年会|Yangi yil ziyofati",
      "にじかい|二次会|ikkinchi davra",
      "はっぴょうかい|発表会|taqdimot kechasi",
      "たいかい|大会|musobaqa, s'yezd",
      "マラソン||marafon",
      "コンテスト||tanlov",
      "おもて|表|old tomon",
      "うら|裏|orqa tomon",
      "まちがい||xato",
      "きず|傷|tirnalish, jarohat",
      "ズボン||shim",
      "おとしより|お年寄り|keksalar",
      "ながさ|長さ|uzunlik",
      "おもさ|重さ|og'irlik",
      "たかさ|高さ|balandlik",
      "おおきさ|大きさ|kattalik",
      "～びん|～便|...-reys",
      "～ごう|～号|...-raqam",
      "～こ|～個|... dona",
      "～ほん|～本|... dona (uzun narsa)",
      "～はい|～杯|... stakan, piyola",
      "～キロ||... kilogramm; kilometr",
      "～いじょう|～以上|... va undan ko'p",
      "～いか|～以下|... va undan kam",
      "さあ||hmm, bilmadim",
    ],
    grammar: [
      {
        t: "Ichki so'roq: so'roq so'zi + ～か",
        p: "so'roq so'zi + oddiy shakl + か、～",
        x: `So'roq so'zli savolni boshqa gap ichiga qo'yish: oddiy shakl + **か**:
        - かいぎは なんじに おわりますか → かいぎが なんじに おわる**か** わかりません (Majlis soat nechada tugashini bilmayman)

        Ot va な-sifatda **だ tushadi**: なん**か**, どこ**か**.

        O'zbekchada: «...shini bilmayman» — tuzilishi o'xshash.`,
        ex: [
          ["かいぎが なんじに おわるか わかりません。", "Majlis soat nechada tugashini bilmayman."],
          ["ミラーさんが どこに いるか しって いますか。", "Miller qayerdaligini bilasizmi?"],
          ["たんじょうびの プレゼントは なにが いいか かんがえて います。", "Tug'ilgan kunga qanday sovg'a yaxshi ekanini o'ylayapman."],
        ],
      },
      {
        t: "...mi yoki yo'qmi: ～か どうか",
        p: "oddiy shakl + か どうか、～",
        x: `So'roq so'zisiz (ha/yo'q) savolni gap ichiga qo'yish: **～か どうか** — «...mi yoki yo'qmi».`,
        ex: [
          ["まちがいが ないか どうか、しらべて ください。", "Xato bor-yo'qligini tekshiring."],
          ["あした パーティーに いけるか どうか、まだ わかりません。", "Ertaga ziyofatga bora olamanmi-yo'qmi, hali bilmayman."],
        ],
      },
      {
        t: "Sinab ko'rish: V て みます",
        p: "V て みます",
        x: `**～て みます** — «...ib ko'rmoq»: biror narsani sinab ko'rish. O'zbekcha «kiyib ko'raman», «yeb ko'raman» ga to'liq mos!`,
        ex: [
          ["この ふくを きて みても いいですか。", "Bu kiyimni kiyib ko'rsam maylimi?"],
          ["いちど ほっかいどうへ いって みたいです。", "Bir marta Xokkaydoga borib ko'rgim keladi."],
          ["わからない ことばは じしょで しらべて みて ください。", "Tushunmagan so'zlarni lug'atdan qarab ko'ring."],
        ],
      },
      {
        t: "Sifatdan ot: ～さ",
        p: "い-sifat: い → さ",
        x: `い-sifatning oxirgi い si **さ** ga almashsa, o'lchov oti hosil bo'ladi:
        - ながい → なが**さ** (uzunlik), たかい → たか**さ** (balandlik), おもい → おも**さ** (og'irlik), おおきい → おおき**さ** (kattalik)`,
        ex: [
          ["ふじさんの たかさは どのくらいですか。", "Fuji tog'ining balandligi qancha?"],
          ["この はしの ながさは ５００メートルです。", "Bu ko'prikning uzunligi 500 metr."],
        ],
      },
    ],
    quiz: [
      ["かいぎが なんじに おわる（　）わかりません。", ["か", "と", "の", "が"], "Ichki so'roq — ～か."],
      ["あした いける（　）どうか、まだ わかりません。", ["か", "と", "が", "の"], "～か どうか."],
      ["この ふくを きて（　）も いいですか。 — «kiyib ko'rsam»", ["みて", "おいて", "しまって", "あって"], "Sinash — ～て みます."],
      ["ながい → ot", ["ながさ", "ながく", "ながいさ", "ながいこと"], "い → さ."],
      ["«Miller qayerdaligini bilasizmi?»", ["ミラーさんが どこに いるか しって いますか。", "ミラーさんが どこに いるの しって いますか。", "ミラーさんが どこに いますか しって いますか。", "ミラーさんが どこに いると しって いますか。"], "Oddiy shakl + か."],
      ["まちがいが ない（　）、しらべて ください。", ["か どうか", "と どうか", "の どうか", "か なにか"], "Ha/yo'q ichki so'roq — ～か どうか."],
      ["いちど ほっかいどうへ いって（　）たいです。", ["み", "おき", "しまい", "あり"], "～て みたいです."],
      ["ふじさんの（　）は どのくらいですか。 — «balandligi»", ["たかさ", "たかい", "たかく", "たかいの"], "たかい → たかさ."],
    ],
  },
];
