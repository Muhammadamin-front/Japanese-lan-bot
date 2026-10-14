export default [
  {
    n: 6,
    title: "Birga boramizmi?",
    intro: "Kundalik harakatlar: ovqatlanish, o'qish, sotib olish. Taklif qilish va rozilik bildirish.",
    vocab: [
      "たべます|食べます|yemoq",
      "のみます|飲みます|ichmoq",
      "すいます|吸います|chekmoq (sigaret)",
      "みます|見ます|ko'rmoq",
      "ききます|聞きます|eshitmoq, tinglamoq",
      "よみます|読みます|o'qimoq",
      "かきます|書きます|yozmoq",
      "かいます|買います|sotib olmoq",
      "とります|撮ります|(surat) olmoq",
      "します||qilmoq",
      "あいます|会います|uchrashmoq (... bilan — に)",
      "ごはん||ovqat; guruch (pishgan)",
      "あさごはん|朝ごはん|nonushta",
      "ひるごはん|昼ごはん|tushlik",
      "ばんごはん|晩ごはん|kechki ovqat",
      "パン||non",
      "たまご|卵|tuxum",
      "にく|肉|go'sht",
      "さかな|魚|baliq",
      "やさい|野菜|sabzavot",
      "くだもの|果物|meva",
      "みず|水|suv",
      "おちゃ|お茶|choy (yashil choy)",
      "こうちゃ|紅茶|qora choy",
      "ぎゅうにゅう|牛乳|sut",
      "ジュース||sharbat",
      "たばこ||sigaret",
      "てがみ|手紙|xat",
      "レポート||hisobot, referat",
      "しゃしん|写真|surat, foto",
      "ビデオ||video",
      "みせ|店|do'kon",
      "にわ|庭|hovli, bog'",
      "しゅくだい|宿題|uy vazifasi",
      "テニス||tennis",
      "サッカー||futbol",
      "えいが|映画|kino, film",
      "おはなみ|お花見|gul sayli (sakura tomoshasi)",
      "なに|何|nima",
      "いっしょに|一緒に|birga",
      "ちょっと||biroz, ozgina",
      "いつも||doim",
      "ときどき|時々|ba'zan",
      "それから||keyin, so'ngra",
      "ええ||ha (norasmiy)",
      "いいですね||yaxshi fikr, zo'r",
      "わかりました||tushundim",
      "なんですか||nima edi? (chaqirganda)",
      "じゃ、また あした||unda, ertagacha",
    ],
    grammar: [
      {
        t: "To'ldiruvchi: N を V",
        p: "N を V",
        x: `**を** — harakat yo'naltirilgan narsani (to'ldiruvchini) bildiradi. U **«o»** deb o'qiladi. Bu o'zbek tilidagi **«-ni»** (tushum kelishigi) qo'shimchasiga mos:
        - パンを たべます — nonni yeyman (non yeyman)
        - ジュースを のみます — sharbat ichaman

        ! O'zbek tilida noaniq to'ldiruvchida «-ni» tushib qoladi («non yedim»), yapon tilida esa を **har doim** qo'yiladi.`,
        ex: [
          ["わたしは まいあさ パンを たべます。", "Men har kuni ertalab non yeyman."],
          ["きのう ははに てがみを かきました。", "Kecha onamga xat yozdim."],
          ["まいばん ニュースを ききます。", "Har kuni kechqurun yangiliklarni tinglayman."],
        ],
      },
      {
        t: "N を します",
        p: "N を します",
        x: `**します** («qilmoq») juda ko'p otlar bilan ishlatiladi:
        - **sport, o'yin**: サッカーを します — futbol o'ynayman, テニスを します
        - **tadbir**: パーティーを します — ziyofat qilaman, かいぎを します
        - **ish**: しゅくだいを します — uy vazifasini qilaman, しごとを します

        Nima qilishini so'rash: **なにを しますか**.`,
        ex: [
          ["ともだちと テニスを します。", "Do'stim bilan tennis o'ynayman."],
          ["にちようび なにを しますか。", "Yakshanba kuni nima qilasiz?"],
          ["こんばん しゅくだいを します。", "Bugun kechqurun uy vazifasini qilaman."],
        ],
      },
      {
        t: "なん va なに",
        p: "なん ／ なに",
        x: `Ikkalasi ham «nima» degani. Qachon qaysi biri ishlatiladi:
        - **なん** — keyingi so'z **d, t, n** tovushlari bilan boshlansa (なんですか, なんの), hisob so'zlari bilan (なんさい, なんじ, なんようび)
        - **なに** — boshqa hollarda (なにを, なにが, なにも)`,
        ex: [
          ["それは なんですか。", "Shu nima?"],
          ["あさ なにを たべますか。", "Ertalab nima yeysiz?"],
        ],
      },
      {
        t: "Harakat joyi: N で V",
        p: "N(joy) で V",
        x: `Harakat **qayerda sodir bo'lishini** **で** bildiradi — o'zbekcha **«-da»**:
        - えきで しんぶんを かいます — bekat**da** gazeta sotib olaman

        ! Farqi: に — narsa qayerda **mavjudligini** (10-dars), で — harakat qayerda **bajarilishini** bildiradi.`,
        ex: [
          ["えきで しんぶんを かいます。", "Bekatda gazeta sotib olaman."],
          ["としょかんで ほんを よみました。", "Kutubxonada kitob o'qidim."],
          ["どこで その かばんを かいましたか。", "Shu sumkani qayerda sotib oldingiz?"],
        ],
      },
      {
        t: "Taklif: V ませんか",
        p: "V ませんか",
        x: `Fe'lning inkor-so'roq shakli **～ませんか** — muloyim taklif: «...maymizmi?», «...masangiz-chi?».

        Javob:
        - ええ、いいですね。 — Ha, zo'r fikr.
        - すみません。ちょっと…。 — Kechirasiz, biroz... (muloyim rad etish)`,
        ex: [
          ["いっしょに サマルカンドへ いきませんか。", "Birga Samarqandga bormaymizmi?"],
          ["A：いっしょに ひるごはんを たべませんか。 ／ B：ええ、いいですね。", "A: Birga tushlik qilmaymizmi? / B: Ha, zo'r."],
        ],
      },
      {
        t: "«Qani, ...aylik!»: V ましょう",
        p: "V ましょう",
        x: `**～ましょう** — gapiruvchining birga harakat qilishga undashi: «...aylik», «qani, ...».

        ～ませんか tinglovchining xohishini hurmat qiladi, ～ましょう esa faolroq taklif. Taklifga rozi bo'lganda ham ishlatiladi: ええ、いきましょう。`,
        ex: [
          ["ちょっと やすみましょう。", "Biroz dam olaylik."],
          ["A：いっしょに いきませんか。 ／ B：ええ、いきましょう。", "A: Birga bormaymizmi? / B: Ha, boraylik."],
          ["ろくじに えきで あいましょう。", "Soat oltida bekatda uchrashaylik."],
        ],
      },
      {
        t: "Hech narsa: なにも ～ません",
        p: "なにも V ません",
        x: `5-darsdagi どこも kabi: **なにも + inkor** = «hech narsa ... -ma». を tushib qoladi: なにを も emas, **なにも**.`,
        ex: [
          ["きのう なにも たべませんでした。", "Kecha hech narsa yemadim."],
          ["A：にちようび なにを しましたか。 ／ B：なにも しませんでした。", "A: Yakshanba nima qildingiz? / B: Hech narsa qilmadim."],
        ],
      },
    ],
    quiz: [
      ["まいあさ パン（　）たべます。", ["を", "で", "に", "へ"], "To'ldiruvchi — を."],
      ["としょかん（　）ほんを よみます。", ["で", "を", "へ", "に"], "Harakat sodir bo'ladigan joy — で."],
      ["いっしょに えいがを み（　）。 — «Birga kino ko'rmaymizmi?»", ["ませんか", "ましょう", "ます", "ました"], "Muloyim taklif — ～ませんか."],
      ["A：いっしょに ひるごはんを たべませんか。 B：ええ、（　）。", ["いいですね", "そうですか", "ちがいます", "わかりません"], "Taklifga rozilik — いいですね."],
      ["にちようび（　）を しますか。 …テニスを します。", ["なに", "なん", "どこ", "だれ"], "を dan oldin なに ishlatiladi."],
      ["きのう なに（　）たべませんでした。", ["も", "を", "で", "か"], "なにも + inkor = hech narsa."],
      ["«Bekatda gazeta sotib olaman»", ["えきで しんぶんを かいます。", "えきに しんぶんを かいます。", "えきを しんぶんで かいます。", "えきへ しんぶんを かいます。"], "Joy — で, to'ldiruvchi — を."],
      ["しゅくだい（　）します。", ["を", "で", "に", "と"], "N を します."],
    ],
  },

  {
    n: 7,
    title: "Sovg'a berish va olish",
    intro: "Vosita bilan harakat, berish-olish fe'llari va «allaqachon» ma'nosidagi もう.",
    vocab: [
      "きります|切ります|kesmoq",
      "おくります|送ります|jo'natmoq",
      "あげます||bermoq (boshqaga)",
      "もらいます||olmoq (birovdan)",
      "かします|貸します|qarzga bermoq",
      "かります|借ります|qarzga olmoq",
      "おしえます|教えます|o'rgatmoq",
      "ならいます|習います|o'rganmoq (kimdandir)",
      "かけます||(telefon) qilmoq",
      "て|手|qo'l",
      "はし||cho'p tayoqchalar",
      "スプーン||qoshiq",
      "ナイフ||pichoq",
      "フォーク||sanchqi",
      "はさみ||qaychi",
      "パソコン||kompyuter (shaxsiy)",
      "ケータイ||mobil telefon",
      "メール||elektron xat",
      "ねんがじょう|年賀状|Yangi yil tabrik otkritkasi",
      "けしゴム|消しゴム|o'chirg'ich",
      "かみ|紙|qog'oz",
      "はな|花|gul",
      "シャツ||ko'ylak",
      "プレゼント||sovg'a",
      "にもつ|荷物|yuk, posilka",
      "おかね|お金|pul",
      "きっぷ|切符|chipta",
      "クリスマス||Rojdestvo",
      "ちち|父|otam (o'zimning)",
      "はは|母|onam (o'zimning)",
      "おとうさん|お父さん|ota (birovning; murojaat)",
      "おかあさん|お母さん|ona (birovning; murojaat)",
      "もう||allaqachon",
      "まだ||hali",
      "これから||endi, hozir (...moqchiman)",
      "すてきですね|素敵ですね|ajoyib-a!",
      "いらっしゃい||xush kelibsiz",
      "どうぞ おあがり ください|どうぞお上がりください|marhamat, kiring",
      "しつれいします|失礼します|uzr, kirsam bo'ladimi / ketdim",
      "いかがですか||qalay? (taklif qilganda)",
      "いただきます||yoqimli ishtaha (ovqat oldidan)",
      "ごちそうさまでした||rahmat, mazali bo'ldi (ovqatdan keyin)",
    ],
    grammar: [
      {
        t: "Vosita: N で V",
        p: "N(vosita／til) で V",
        x: `**で** harakat qanday vosita yordamida bajarilishini bildiradi — o'zbekcha **«... bilan»**, **«-da»**:
        - はしで たべます — cho'p **bilan** yeyman
        - にほんごで かきます — yapon tili**da** yozaman

        5-darsdagi transport (バスで) ham shu ma'noning bir ko'rinishi.`,
        ex: [
          ["はしで ごはんを たべます。", "Cho'p bilan ovqat yeyman."],
          ["にほんごで レポートを かきます。", "Hisobotni yapon tilida yozaman."],
          ["パソコンで メールを おくります。", "Kompyuter orqali elektron xat jo'nataman."],
        ],
      },
      {
        t: "«...» yaponcha nima?",
        p: "「so'z」は ～ご で なんですか",
        x: `Biror so'zning boshqa tildagi tarjimasini so'rash uchun juda foydali ibora. Dars paytida ko'p ishlatasiz!`,
        ex: [
          ["「Thank you」は にほんごで なんですか。", "«Thank you» yaponcha nima bo'ladi?"],
          ["A：「ありがとう」は ウズベクごで なんですか。 ／ B：「rahmat」です。", "A: «Arigatou» o'zbekcha nima? / B: «Rahmat»."],
        ],
      },
      {
        t: "Berish: N に あげます",
        p: "N(odam) に N を あげます／かします／おしえます",
        x: `Narsa yoki bilim **kimga** berilsa, o'sha odam **に** bilan belgilanadi — o'zbekcha **«-ga»**:
        - ともだち**に** プレゼントを あげます — do'stim**ga** sovg'a beraman

        Shu qolipdagi fe'llar: あげます (bermoq), かします (qarzga bermoq), おしえます (o'rgatmoq), おくります (jo'natmoq), かけます (telefon qilmoq).`,
        ex: [
          ["わたしは ともだちに プレゼントを あげました。", "Men do'stimga sovg'a berdim."],
          ["やまださんに ほんを かしました。", "Yamadaga kitob berib turdim."],
          ["ははに でんわを かけます。", "Onamga telefon qilaman."],
        ],
      },
      {
        t: "Olish: N に／から もらいます",
        p: "N(odam) に／から N を もらいます／かります／ならいます",
        x: `Narsa **kimdan** olinsa, o'sha odam **に** yoki **から** bilan belgilanadi — o'zbekcha **«-dan»**:
        - ははに とけいを もらいました — onam**dan** soat oldim

        Fe'llar: もらいます (olmoq), かります (qarzga olmoq), ならいます (o'rganmoq).

        ! Agar beruvchi tashkilot bo'lsa (maktab, bank), faqat **から** ishlatiladi: ぎんこうから おかねを かりました.`,
        ex: [
          ["わたしは ははに とけいを もらいました。", "Men onamdan soat oldim."],
          ["カリモフせんせいに にほんごを ならいます。", "Karimov ustozdan yapon tilini o'rganaman."],
          ["ともだちから メールを もらいました。", "Do'stimdan elektron xat oldim."],
        ],
      },
      {
        t: "«Allaqachon»: もう V ました",
        p: "もう V ました ／ いいえ、まだです",
        x: `**もう** + o'tgan zamon — harakat **allaqachon** bajarilganini bildiradi.

        Savolga javob:
        - はい、もう ～ました。 — Ha, allaqachon ...dim.
        - いいえ、**まだです**。 — Yo'q, hali emas.

        ! «Hali qilmadim» deganda ～ませんでした emas, **まだです** ishlatiladi — chunki harakat hali kutilmoqda.`,
        ex: [
          ["もう にもつを おくりましたか。", "Posilkani allaqachon jo'natdingizmi?"],
          ["A：もう ひるごはんを たべましたか。 ／ B：いいえ、まだです。これから たべます。", "A: Tushlik qildingizmi? / B: Yo'q, hali. Endi qilaman."],
        ],
      },
    ],
    quiz: [
      ["はし（　）ごはんを たべます。", ["で", "を", "に", "と"], "Vosita — で."],
      ["わたしは ともだち（　）はなを あげました。", ["に", "を", "で", "から"], "Kimga berilsa — に."],
      ["わたしは ははに とけいを（　）。 — «Onamdan soat oldim»", ["もらいました", "あげました", "かしました", "おしえました"], "Olish — もらいます."],
      ["A：もう しゅくだいを しましたか。 B：いいえ、（　）。", ["まだです", "もうです", "しました", "そうです"], "«Hali emas» — まだです."],
      ["「Thank you」は にほんご（　）なんですか。", ["で", "に", "を", "の"], "Til ham vosita — で."],
      ["«Do'stimga lug'atni qarzga berdim»", ["ともだちに じしょを かしました。", "ともだちに じしょを かりました。", "ともだちで じしょを かしました。", "ともだちを じしょに かしました。"], "Qarzga bermoq — かします; kimga — に."],
      ["やまださん（　）にほんごを ならいます。 — «Yamadadan»", ["に", "で", "を", "へ"], "Kimdan o'rganilsa — に (yoki から)."],
      ["«Onamga xat jo'natdim»", ["ははに てがみを おくりました。", "ははで てがみを おくりました。", "ははを てがみに おくりました。", "ははへ てがみで おくりました。"], "Kimga — に, nimani — を."],
    ],
  },

  {
    n: 8,
    title: "Sifatlar",
    intro: "Narsa, joy va odamlarni tasvirlash: い-sifatlar va な-sifatlar.",
    vocab: [
      "ハンサム|ハンサム（な）|kelishgan, chiroyli (erkak)",
      "きれい|きれい（な）|chiroyli; toza",
      "しずか|静か（な）|tinch, jim",
      "にぎやか|にぎやか（な）|gavjum, shovqinli-quvnoq",
      "ゆうめい|有名（な）|mashhur",
      "しんせつ|親切（な）|mehribon, xushmuomala",
      "げんき|元気（な）|sog'lom, tetik",
      "ひま|暇（な）|bo'sh (vaqt)",
      "べんり|便利（な）|qulay",
      "すてき|素敵（な）|ajoyib",
      "おおきい|大きい|katta",
      "ちいさい|小さい|kichik",
      "あたらしい|新しい|yangi",
      "ふるい|古い|eski",
      "いい||yaxshi",
      "わるい|悪い|yomon",
      "あつい|暑い|issiq (havo)",
      "さむい|寒い|sovuq (havo)",
      "つめたい|冷たい|sovuq (narsa)",
      "むずかしい|難しい|qiyin",
      "やさしい|易しい|oson",
      "たかい|高い|baland; qimmat",
      "やすい|安い|arzon",
      "ひくい|低い|past",
      "おもしろい|面白い|qiziqarli",
      "おいしい||mazali",
      "いそがしい|忙しい|band",
      "たのしい|楽しい|quvnoq, maroqli",
      "しろい|白い|oq",
      "くろい|黒い|qora",
      "あかい|赤い|qizil",
      "あおい|青い|ko'k",
      "さくら|桜|sakura (olcha guli)",
      "やま|山|tog'",
      "まち|町|shahar",
      "たべもの|食べ物|taom, ovqat",
      "ところ|所|joy",
      "りょう|寮|yotoqxona",
      "せいかつ|生活|turmush, hayot",
      "しごと|仕事|ish",
      "どう||qanday",
      "どんな～||qanday ...",
      "どれ||qaysi biri (uch va undan ortiqdan)",
      "とても||juda",
      "あまり||unchalik (+inkor)",
      "そして||va, hamda",
      "～が、～||..., lekin ...",
      "おげんきですか|お元気ですか|yaxshimisiz?",
      "そうですね||ha, shunday-a / hmm (o'ylanib)",
    ],
    grammar: [
      {
        t: "Ikki xil sifat: い va な",
        p: "N は い-sifat です ／ N は な-sifat です",
        x: `Yapon tilida sifatlar ikki guruhga bo'linadi:
        - **い-sifatlar** — い bilan tugaydi: おおきい, たかい, おいしい
        - **な-sifatlar** — lug'atda (な) bilan beriladi: きれい, しずか, ゆうめい

        Kesim vazifasida ikkalasi ham です bilan tugaydi: ふじさんは たかいです / さくらは きれいです.

        ! きれい va ゆうめい い bilan tugasa ham — **な-sifat**! Ularni alohida eslab qoling.`,
        ex: [
          ["さくらは きれいです。", "Sakura chiroyli."],
          ["この へやは とても しずかです。", "Bu xona juda tinch."],
          ["にほんの たべものは おいしいです。", "Yapon taomlari mazali."],
        ],
      },
      {
        t: "Sifatlarning inkori",
        p: "な-sifat じゃ ありません ／ い-sifat くないです",
        x: `Inkor shakllari turlicha:
        - **な-sifat**: ot kabi — しずか**じゃ ありません**
        - **い-sifat**: oxirgi い → **くないです** — たかい → たか**くないです**

        ! Istisno: **いい** → **よくないです** (いくないです emas!).`,
        ex: [
          ["あの こうえんは きれいじゃ ありません。", "U park chiroyli emas."],
          ["この ほんは おもしろくないです。", "Bu kitob qiziq emas."],
          ["きょうは あまり さむくないです。", "Bugun unchalik sovuq emas."],
          ["A：てんきは いいですか。 ／ B：いいえ、よくないです。", "A: Ob-havo yaxshimi? / B: Yo'q, yaxshi emas."],
        ],
      },
      {
        t: "Sifat + ot",
        p: "な-sifat な N ／ い-sifat N",
        x: `Sifat otdan oldin kelganda:
        - **な-sifat** + **な** + ot: しずか**な** まち — tinch shahar
        - **い-sifat** + ot (o'zgarishsiz): たかい やま — baland tog'

        Ya'ni な-sifatlar nomini aynan shu otdan oldingi な dan olgan.`,
        ex: [
          ["タシケントは にぎやかな まちです。", "Toshkent gavjum shahar."],
          ["ふじさんは たかい やまです。", "Fuji — baland tog'."],
          ["やまださんは しんせつな ひとです。", "Yamada mehribon odam."],
        ],
      },
      {
        t: "とても va あまり",
        p: "とても + sifat ／ あまり + inkor",
        x: `Daraja ravishlari:
        - **とても** — «juda» (bo'lishli gapda)
        - **あまり** — «unchalik» (faqat **inkor** bilan!)`,
        ex: [
          ["ペキンは とても さむいです。", "Pekin juda sovuq."],
          ["えいごは あまり むずかしくないです。", "Ingliz tili unchalik qiyin emas."],
        ],
      },
      {
        t: "Taassurot va tavsifni so'rash",
        p: "N は どうですか ／ N は どんな N ですか",
        x: `- **どうですか** — «qanday?», taassurot yoki fikr so'raladi: にほんの せいかつは どうですか — Yaponiyadagi hayot qanday?
        - **どんな N** — «qanday N?», narsaning xususiyati so'raladi: サマルカンドは どんな まちですか — Samarqand qanday shahar?`,
        ex: [
          ["にほんの せいかつは どうですか。", "Yaponiyadagi hayotingiz qanday?"],
          ["サマルカンドは どんな まちですか。", "Samarqand qanday shahar?"],
          ["A：にほんごの べんきょうは どうですか。 ／ B：むずかしいですが、おもしろいです。", "A: Yapon tilini o'rganish qalay? / B: Qiyin, lekin qiziq."],
        ],
      },
      {
        t: "«Lekin» va «hamda»: が／そして",
        p: "S1 が、S2 ／ S1。そして、S2",
        x: `- **～が、～** — ikki gapni zid ma'noda bog'laydi: «..., lekin ...»
        - **そして** — ikki gapni qo'shimcha ma'noda bog'laydi: «va, hamda»

        ! が bu yerda ega yuklamasi emas — gap oxiridagi «lekin» bog'lovchisi.`,
        ex: [
          ["にほんの たべものは おいしいですが、たかいです。", "Yapon taomlari mazali, lekin qimmat."],
          ["タシケントは きれいです。そして、にぎやかです。", "Toshkent chiroyli. Hamda gavjum."],
        ],
      },
      {
        t: "Qaysi biri: どれ",
        p: "N は どれですか",
        x: `**どれ** — uch va undan ortiq narsa ichidan «qaysi biri?» deb so'rash. これ・それ・あれ ning so'roq shakli.`,
        ex: [
          ["ミラーさんの かさは どれですか。", "Millerning soyaboni qaysi biri?"],
          ["A：アジズさんの かばんは どれですか。 ／ B：あの くろい かばんです。", "A: Azizning sumkasi qaysi? / B: Anavi qora sumka."],
        ],
      },
    ],
    quiz: [
      ["«Bu xona tinch emas»: この へやは しずか（　）。", ["じゃ ありません", "くないです", "です", "な"], "な-sifat inkori — じゃ ありません."],
      ["«Bugun sovuq emas»", ["きょうは さむくないです。", "きょうは さむいじゃ ありません。", "きょうは さむくじゃ ありません。", "きょうは さむいないです。"], "い-sifat inkori: い → くないです."],
      ["タシケントは にぎやか（　）まちです。", ["な", "の", "い", "です"], "な-sifat + な + ot."],
      ["«Baland tog'»", ["たかい やま", "たかいな やま", "たかいの やま", "たかく やま"], "い-sifat otga to'g'ridan-to'g'ri qo'shiladi."],
      ["えいごは（　）むずかしくないです。", ["あまり", "とても", "いつも", "もう"], "Inkor bilan — あまり (unchalik)."],
      ["にほんの せいかつは（　）ですか。 …たのしいです。", ["どう", "どんな", "なん", "どれ"], "Taassurot so'rash — どうですか."],
      ["サマルカンドは（　）まちですか。 …ふるい まちです。", ["どんな", "どう", "どれ", "なんの"], "Otdan oldin — どんな N."],
      ["«Yaxshi emas»", ["よくないです", "いくないです", "いいじゃ ありません", "よいないです"], "いい → よくないです (istisno)."],
    ],
  },

  {
    n: 9,
    title: "Yoqtirish va tushunish",
    intro: "Yoqtirish, uddalash, tushunish va ega bo'lishni が bilan ifodalash; sabab — から.",
    vocab: [
      "わかります|分かります|tushunmoq",
      "あります||bor (ega bo'lmoq)",
      "すき|好き（な）|yoqtiradigan",
      "きらい|嫌い（な）|yoqtirmaydigan",
      "じょうず|上手（な）|usta, yaxshi qila oladigan",
      "へた|下手（な）|uquvsiz, yomon qiladigan",
      "のみもの|飲み物|ichimlik",
      "りょうり|料理|taom; ovqat pishirish",
      "スポーツ||sport",
      "やきゅう|野球|beysbol",
      "ダンス||raqs",
      "りょこう|旅行|sayohat",
      "おんがく|音楽|musiqa",
      "うた|歌|qo'shiq",
      "クラシック||klassik musiqa",
      "コンサート||konsert",
      "カラオケ||karaoke",
      "かぶき|歌舞伎|kabuki (yapon teatri)",
      "え|絵|rasm",
      "じ|字|harf, yozuv",
      "かんじ|漢字|kanji (iyerogliflar)",
      "ひらがな||hiragana",
      "かたかな||katakana",
      "ローマじ|ローマ字|romaji (lotin harflari)",
      "こまかい おかね|細かいお金|mayda pul",
      "チケット||chipta",
      "じかん|時間|vaqt",
      "ようじ|用事|ish, yumush",
      "やくそく|約束|va'da; uchrashuv kelishuvi",
      "アルバイト||yarim kunlik ish",
      "ごしゅじん|ご主人|eringiz (birovning)",
      "おっと|夫|erim",
      "おくさん|奥さん|xotiningiz (birovning)",
      "つま|妻|xotinim",
      "こども|子ども|bola",
      "よく||yaxshi; tez-tez",
      "だいたい||taxminan, asosan",
      "たくさん||ko'p",
      "すこし|少し|ozgina",
      "ぜんぜん|全然|umuman (+inkor)",
      "はやく|早く／速く|erta; tez",
      "～から||..., chunki / ...gani uchun",
      "どうして||nega",
      "ざんねんですね|残念ですね|attang-a, afsus",
      "だめですか||bo'lmaydimi?",
      "また こんど おねがいします|また今度お願いします|keyingi safar, iltimos",
    ],
    grammar: [
      {
        t: "が bilan ifodalanadigan to'ldiruvchi",
        p: "N が あります／わかります",
        x: `Ba'zi fe'l va sifatlarda narsa **を** emas, **が** bilan belgilanadi. Bular — holat bildiruvchi so'zlar:
        - **わかります** — えいご**が** わかります (ingliz tilini tushunaman)
        - **あります** (ega bo'lmoq) — くるま**が** あります (mashinam bor)

        O'zbek tiliga qiyoslang: «Men**da** mashina bor» — mashina «ega» kabi turadi. Yapon tilida ham xuddi shunday!`,
        ex: [
          ["わたしは えいごが わかります。", "Men ingliz tilini tushunaman."],
          ["わたしは くるまが あります。", "Mening mashinam bor."],
          ["こまかい おかねが ありますか。", "Mayda pulingiz bormi?"],
        ],
      },
      {
        t: "Yoqtirish va mahorat",
        p: "N が すきです／きらいです／じょうずです／へたです",
        x: `**すき, きらい, じょうず, へた** — な-sifatlar, va ular ham **が** talab qiladi:
        - イタリアりょうり**が** すきです — italyan taomlarini yoqtiraman
        - うた**が** じょうずです — qo'shiqni yaxshi aytadi

        ! じょうず odatda boshqalarni maqtashda ishlatiladi. O'zingiz haqida kamtarlik bilan: すこし できます yoki まだまだです.`,
        ex: [
          ["わたしは イタリアりょうりが すきです。", "Men italyan taomlarini yoqtiraman."],
          ["マリカさんは うたが じょうずです。", "Malika qo'shiqni yaxshi aytadi."],
          ["わたしは スポーツが へたです。", "Men sportda zaifman."],
          ["どんな スポーツが すきですか。", "Qanday sportni yoqtirasiz?"],
        ],
      },
      {
        t: "Daraja va miqdor ravishlari",
        p: "よく／だいたい／すこし／あまり／ぜんぜん",
        x: `Darajani bildiradi (わかります bilan):
        - **よく** わかります — yaxshi tushunaman
        - **だいたい** わかります — taxminan tushunaman
        - **すこし** わかります — ozgina tushunaman
        - **あまり** わかりません — unchalik tushunmayman
        - **ぜんぜん** わかりません — umuman tushunmayman

        Miqdorni bildiradi (あります bilan): **たくさん** (ko'p), **すこし** (oz), **あまり / ぜんぜん** + inkor.`,
        ex: [
          ["えいごが よく わかります。", "Ingliz tilini yaxshi tushunaman."],
          ["にほんごが すこし わかります。", "Yapon tilini ozgina tushunaman."],
          ["おかねが ぜんぜん ありません。", "Pulim umuman yo'q."],
        ],
      },
      {
        t: "Sabab: ～から",
        p: "S1 から、S2",
        x: `**から** gap oxirida kelib **sabab**ni bildiradi: «...gani uchun», «chunki». Sabab birinchi, natija ikkinchi keladi — o'zbek tilidagi tartibga o'xshaydi:
        - じかんが ありません**から**、しんぶんを よみません — Vaqtim yo'q**ligi uchun** gazeta o'qimayman.

        Sababni so'rash: **どうして** (nega). Javob ～から bilan tugaydi.`,
        ex: [
          ["じかんが ありませんから、しんぶんを よみません。", "Vaqtim yo'qligi uchun gazeta o'qimayman."],
          ["A：どうして きのう はやく かえりましたか。 ／ B：ようじが ありましたから。", "A: Kecha nega erta qaytdingiz? / B: Ishim bor edi."],
        ],
      },
    ],
    quiz: [
      ["わたしは にほんりょうり（　）すきです。", ["が", "を", "で", "に"], "すき bilan — が."],
      ["マリカさんは うたが（　）です。 — «Malika qo'shiqni yaxshi aytadi»", ["じょうず", "へた", "すき", "きらい"], "Uddalash — じょうず."],
      ["かんじが（　）わかりません。 — «umuman»", ["ぜんぜん", "よく", "たくさん", "だいたい"], "«Umuman» — ぜんぜん + inkor."],
      ["（　）スポーツが すきですか。 …サッカーが すきです。", ["どんな", "どう", "なに", "どれ"], "Turini so'rash — どんな N."],
      ["じかんが ありません（　）、しんぶんを よみません。", ["から", "と", "まで", "へ"], "Sabab — から."],
      ["A：（　）きのう がっこうへ いきませんでしたか。 B：ようじが ありましたから。", ["どうして", "どう", "どんな", "いつ"], "Sababni so'rash — どうして."],
      ["«Mening mashinam bor»", ["わたしは くるまが あります。", "わたしは くるまを あります。", "わたしは くるまに あります。", "わたしの くるまが います。"], "Ega bo'lish — N が あります."],
      ["えいごが（　）わかります。 — «taxminan»", ["だいたい", "ぜんぜん", "あまり", "たくさん"], "«Taxminan, asosan» — だいたい."],
    ],
  },

  {
    n: 10,
    title: "Qayerda nima bor?",
    intro: "Narsa va jonzotlarning mavjudligi va joylashuvi: あります・います, うえ・した・となり.",
    vocab: [
      "あります||bor (jonsiz narsa)",
      "います||bor (jonli: odam, hayvon)",
      "いろいろ|いろいろ（な）|turli xil",
      "おとこのひと|男の人|erkak kishi",
      "おんなのひと|女の人|ayol kishi",
      "おとこのこ|男の子|o'g'il bola",
      "おんなのこ|女の子|qiz bola",
      "いぬ|犬|it",
      "ねこ|猫|mushuk",
      "パンダ||panda",
      "ぞう|象|fil",
      "き|木|daraxt",
      "もの|物|narsa",
      "でんち|電池|batareya",
      "はこ|箱|quti",
      "スイッチ||o'chirgich (svitch)",
      "れいぞうこ|冷蔵庫|muzlatkich",
      "テーブル||stol",
      "ベッド||karavot",
      "たな|棚|javon",
      "ドア||eshik",
      "まど|窓|deraza",
      "ポスト||pochta qutisi",
      "ビル||bino (ko'p qavatli)",
      "コンビニ||kichik do'kon (24 soat)",
      "こうえん|公園|park",
      "きっさてん|喫茶店|qahvaxona",
      "～や|～屋|... do'koni",
      "のりば|乗り場|bekat (taksi, avtobus)",
      "けん|県|prefektura (viloyat)",
      "うえ|上|ust, tepa",
      "した|下|ost, past",
      "まえ|前|old",
      "うしろ||orqa",
      "みぎ|右|o'ng",
      "ひだり|左|chap",
      "なか|中|ich",
      "そと|外|tashqari",
      "となり|隣|yon (qo'shni)",
      "ちかく|近く|yaqin atrof",
      "あいだ|間|orasi",
      "～や ～（など）||... va ... (va boshqalar)",
      "いちばん うえ|いちばん上|eng tepa",
      "ありがとう ございました||rahmat (bajarilgan ish uchun)",
    ],
    grammar: [
      {
        t: "あります va います",
        p: "N が あります ／ N が います",
        x: `Ikkalasi ham «bor» degani, lekin:
        - **あります** — jonsiz narsalar va o'simliklar uchun: ほん, き, こうえん
        - **います** — jonli mavjudotlar uchun: ひと, いぬ, ねこ

        Yangi ma'lumot (nima borligi) **が** bilan belgilanadi.`,
        ex: [
          ["あそこに おとこのひとが います。", "U yerda bir erkak kishi bor."],
          ["こうえんに おおきい きが あります。", "Parkda katta daraxt bor."],
        ],
      },
      {
        t: "Joyda nima bor: N1 に N2 が あります",
        p: "N1(joy) に N2 が あります／います",
        x: `Biror joyda nima borligini aytish: joy + **に** + narsa + **が** + あります/います.

        O'zbek tilidagi tartibga e'tibor bering — bir xil!
        - へや**に** つくえ**が** あります — Xona**da** stol bor.

        ! Mavjudlik joyi — **に**, harakat joyi — **で** (6-dars).`,
        ex: [
          ["へやに つくえが あります。", "Xonada stol bor."],
          ["にわに ねこが います。", "Hovlida mushuk bor."],
          ["ちかに コンビニが あります。", "Yerto'la qavatida do'kon bor."],
        ],
      },
      {
        t: "Narsa qayerda: N2 は N1 に あります",
        p: "N2 は N1(joy) に あります／います",
        x: `Agar ma'lum bir narsa yoki odam **qayerda** ekanini aytmoqchi bo'lsak, u mavzu (**は**) bo'ladi:
        - ミラーさん**は** じむしょ**に** います — Miller ofisda.

        So'rash: N は どこに ありますか / いますか. Qisqacha N は どこですか (3-dars) ham bo'ladi.`,
        ex: [
          ["ミラーさんは じむしょに います。", "Miller ofisda."],
          ["サマルカンドは ウズベキスタンに あります。", "Samarqand O'zbekistonda joylashgan."],
          ["A：でんちは どこに ありますか。 ／ B：たなの なかに あります。", "A: Batareya qayerda? / B: Javonning ichida."],
        ],
      },
      {
        t: "Joylashuv so'zlari: うえ・した・なか...",
        p: "N1 の うえ／した／なか／となり／あいだ",
        x: `Joylashuv bu yerda o'zbek tilidagi kabi quriladi: **N1 の + joy so'zi** = «N1ning ustida, ostida...»
        - つくえ**の うえ** — stol**ning ustida**
        - ぎんこう**の となり** — bank**ning yonida**
        - AとBの **あいだ** — A va B **orasida**

        Joy so'zlari: うえ (ust), した (ost), まえ (old), うしろ (orqa), みぎ (o'ng), ひだり (chap), なか (ich), そと (tashqari), となり (yon), ちかく (yaqin), あいだ (orasi).`,
        ex: [
          ["つくえの うえに しゃしんが あります。", "Stol ustida surat bor."],
          ["ゆうびんきょくは ぎんこうの となりに あります。", "Pochta bankning yonida."],
          ["はこの なかに なにが ありますか。", "Qutining ichida nima bor?"],
          ["ほんやは はなやと スーパーの あいだに あります。", "Kitob do'koni gul do'koni bilan supermarket orasida."],
        ],
      },
      {
        t: "Sanab o'tish: N1 や N2",
        p: "N1 や N2 (など)",
        x: `- **と** — hammasini sanab o'tadi (faqat shular)
        - **や** — bir nechtasini misol tariqasida sanaydi (va boshqalar). Oxirida **など** («va hokazo») qo'shilishi mumkin.`,
        ex: [
          ["はこの なかに てがみや しゃしんが あります。", "Qutida xatlar, suratlar va boshqalar bor."],
          ["れいぞうこに ジュースや たまごなどが あります。", "Muzlatkichda sharbat, tuxum va hokazolar bor."],
        ],
      },
    ],
    quiz: [
      ["にわに ねこが（　）。", ["います", "あります", "です", "いきます"], "Jonli mavjudot — います."],
      ["へやに つくえが（　）。", ["あります", "います", "いきます", "です"], "Jonsiz narsa — あります."],
      ["ミラーさんは じむしょ（　）います。", ["に", "で", "を", "へ"], "Mavjudlik joyi — に."],
      ["つくえの（　）に ほんが あります。 — «stolning ustida»", ["うえ", "した", "なか", "となり"], "Ust — うえ."],
      ["はこの なかに てがみ（　）しゃしんが あります。 — «...va boshqalar»", ["や", "も", "の", "を"], "Misol tariqasida sanash — や."],
      ["«Bank pochtaning yonida»", ["ぎんこうは ゆうびんきょくの となりに あります。", "ゆうびんきょくは ぎんこうの となりに あります。", "ぎんこうは ゆうびんきょくに となりが あります。", "ぎんこうの となりは ゆうびんきょくで あります。"], "N2 は N1 の となりに あります."],
      ["A：はこの なかに なにが ありますか。 B：（　）。", ["なにも ありません", "なにが ありません", "なにを ありません", "なにも いません"], "Hech narsa — なにも + inkor; jonsiz — あります."],
      ["あそこに（　）が いますか。 — «Kim bor?»", ["だれ", "なに", "どこ", "どれ"], "Odam haqida — だれ."],
    ],
  },
];
