// ===== O2 OXYGEN — VERİ TABANI =====
// Dahili arama motoru için İngilizce A2 seviye gramer, kelime ve deyim veritabanı.
// Hiçbir harici kaynağa bağlı değildir.

const O2_DATABASE = [

  // ============================================================
  // BÖLÜM: GRAMMAR — Pronouns
  // ============================================================
  {
    id: "gram-subject-pronouns",
    category: "grammar",
    title: "Subject Pronouns (Kişi Zamirleri)",
    keywords: ["subject pronouns", "kişi zamirleri", "he", "she", "it", "they", "we", "I", "you", "zamir", "pronoun"],
    content: "Cümlede işi yapan kişinin/nesnenin adını söylemek yerine kullanılırlar. Özne pozisyonunda dururlar.",
    details: [
      "I — Ben",
      "You — Sen / Siz",
      "He — O (Erkekler için)",
      "She — O (Kadınlar için)",
      "It — O (Cansız varlıklar, hayvanlar, şehirler, şirketler)",
      "We — Biz",
      "They — Onlar (Çoğul kişiler, nesneler veya yerler)"
    ],
    examples: [],
    related_word_ids: [5002, 5009, 5015, 5023, 5028, 5033, 5039, 5045]
  },
  {
    id: "gram-possessive-pronouns",
    category: "grammar",
    title: "Possessive Pronouns (İyelik Zamirleri)",
    keywords: ["possessive pronouns", "iyelik zamirleri", "mine", "yours", "his", "hers", "ours", "theirs", "benimki", "seninki"],
    content: "Kendisinden sonra İSİM ALMAYAN, Türkçedeki \"-ki\" (benimki, seninki) ekini karşılayan kelimelerdir. Sahiplik belirtirler ve tek başına kullanılırlar.",
    details: [
      "Mine — Benimki",
      "Yours — Seninki / Sizinki",
      "His — Onunki (Erkek)",
      "Hers — Onunki (Kadın)",
      "Ours — Bizimki",
      "Theirs — Onlarınki"
    ],
    examples: [],
    related_word_ids: [5001, 5005, 5008, 5014, 5016, 5020, 5034, 5038, 5043, 5048]
  },
  {
    id: "gram-possessive-adjectives",
    category: "grammar",
    title: "Possessive Adjectives (İyelik Sıfatları)",
    keywords: ["possessive adjectives", "iyelik sıfatları", "my", "your", "his", "her", "its", "our", "their", "sahiplik"],
    content: "Kendisinden sonra mutlaka İSİM ALIR. Kimin neyi olduğunu belirtmek için kullanılır. Possessive Pronouns ile karıştırmayın — bunlar isimden önce gelir.",
    details: [
      "My — Benim (my book)",
      "Your — Senin / Sizin (your phone)",
      "His — Onun - Erkek (his car)",
      "Her — Onun - Kadın (her bag)",
      "Its — Onun - Cansız/Hayvan (its tail)",
      "Our — Bizim (our house)",
      "Their — Onların (their hands)"
    ],
    examples: [],
    related_word_ids: [5004, 5011, 5019, 5021, 5027, 5031, 5036, 5041, 5046, 5050]
  },
  {
    id: "gram-reflexive-pronouns",
    category: "grammar",
    title: "Reflexive Pronouns (Dönüşlü Zamirler)",
    keywords: ["reflexive pronouns", "dönüşlü zamirler", "myself", "yourself", "himself", "herself", "itself", "ourselves", "themselves", "kendim", "kendisi"],
    content: "Eylemi yapan ile eylemden etkilenen kişi AYNI olduğunda kullanılır (kendim, kendin, kendisi). \"by + reflexive\" yapısı \"tek başına\" anlamına gelir.",
    details: [
      "Myself — Kendim (I)",
      "Yourself — Kendin (You - Tekil)",
      "Himself — Kendisi (He)",
      "Herself — Kendisi (She)",
      "Itself — Kendisi (It)",
      "Ourselves — Kendimiz (We)",
      "Yourselves — Kendiniz (You - Çoğul, birden fazla kişiye seslenirken)",
      "Themselves — Kendileri (They)"
    ],
    examples: [],
    related_word_ids: [5003, 5007, 5010, 5013, 5017, 5022, 5026, 5032, 5037, 5042, 5047]
  },
  {
    id: "gram-object-pronouns",
    category: "grammar",
    title: "Object Pronouns (Nesne Zamirleri)",
    keywords: ["object pronouns", "nesne zamirleri", "me", "you", "him", "her", "it", "us", "them", "bana", "ona"],
    content: "Fiilden veya edattan sonra gelen zamirlerdir. Eylemi yapan değil, eylemden etkilenen kişiyi belirtirler.",
    details: [
      "Me — Bana / Beni",
      "You — Sana / Seni",
      "Him — Ona / Onu (Erkek)",
      "Her — Ona / Onu (Kadın)",
      "It — Ona / Onu (Cansız/Hayvan)",
      "Us — Bize / Bizi",
      "Them — Onlara / Onları"
    ],
    examples: [],
    related_word_ids: [5006, 5012, 5018, 5025, 5030, 5035, 5040, 5044, 5049]
  },

  // ============================================================
  // BÖLÜM: GRAMMAR — Confusing Pairs
  // ============================================================
  {
    id: "gram-its-vs-its",
    category: "grammar",
    title: "It's vs. Its (Sık Karıştırılan İkili)",
    keywords: ["it's", "its", "karıştırılan", "apostrophe", "kesme işareti", "it is", "sahiplik"],
    content: "İngilizcede en sık yapılan hatalardan biri. It's = It is/It has kısaltması. Its = sahiplik (onun). Kesme işareti fark yaratır!",
    details: [
      "It's = \"It is\" veya \"It has\" kısaltmasıdır. \"O ...dır\" anlamına gelir.",
      "Its = Sahiplik bildirir, \"onun\" demektir. Kesme işareti YOKTUR.",
      "İpucu: Boşluğa \"it is\" koyduğunda cümle anlamlı oluyorsa it's kullanılır."
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-there-vs-their",
    category: "grammar",
    title: "There vs. Their (Sık Karıştırılan İkili)",
    keywords: ["there", "their", "they're", "orada", "onların", "karıştırılan"],
    content: "There = Orada / Vardır. Their = Onların (sahiplik). They're = They are kısaltması. Üçü de aynı okunur ama anlamları tamamen farklıdır!",
    details: [
      "There = Orada. Ayrıca \"is/are\" ile birleşip \"vardır\" anlamı katar.",
      "Their = Onların. Sahiplik bildirir, kendinden sonra isim alır.",
      "They're = \"They are\" kısaltması. \"Onlar ...dır\" anlamına gelir."
    ],
    examples: [],
    related_word_ids: []
  },

  // ============================================================
  // BÖLÜM: GRAMMAR — Apostrophe
  // ============================================================
  {
    id: "gram-possessive-apostrophe",
    category: "grammar",
    title: "Possessive Apostrophe ('s Sahiplik Kesme İşareti)",
    keywords: ["apostrophe", "kesme işareti", "'s", "sahiplik", "possessive", "-nın", "-nin", "genitif"],
    content: "Kelimelere \"-nın, -nin\" (sahiplik) anlamı katar. Tekil ve çoğul isimlerdeki kullanımı farklıdır.",
    details: [
      "Kural 1: Tekil kelimelere veya isme 's eklenir.",
      "Kural 2: Çoğul olup sonu \"s\" ile biten kelimelere sadece kesme işareti (') konur.",
      "Tuzak: Sadece çoğul olan (sahiplik içermeyen) kelimelere kesme işareti konmaz!"
    ],
    examples: [],
    related_word_ids: []
  },

  // ============================================================
  // BÖLÜM: GRAMMAR — Conjunctions
  // ============================================================
  {
    id: "gram-conjunctions",
    category: "grammar",
    title: "Conjunctions (Bağlaçlar)",
    keywords: ["conjunctions", "bağlaçlar", "so", "because", "but", "however", "and", "çünkü", "ama", "ve", "bu yüzden"],
    content: "Cümleleri birbirine bağlamak için kullanılan kelimelerdir. Her birinin farklı bir mantıksal ilişkisi vardır.",
    details: [
      "So — Bu yüzden, dolayısıyla. (Sebep → Sonuç bağlar)",
      "Because — Çünkü. (Neden belirtir)",
      "But — Ama, fakat. (Zıtlık belirtir)",
      "However — Ancak. (Zıtlık, genellikle cümle başı veya noktadan sonra)",
      "And — Ve. (Benzer fikirleri veya art arda eylemleri bağlar)"
    ],
    examples: [],
    related_word_ids: []
  },

  // ============================================================
  // BÖLÜM: GRAMMAR — Tenses
  // ============================================================
  {
    id: "gram-present-simple",
    category: "grammar",
    title: "Present Simple Tense (Geniş Zaman)",
    keywords: ["present simple", "geniş zaman", "do", "does", "every", "always", "never", "sometimes", "usually", "tense", "zaman"],
    content: "Tekrar eden alışkanlıklar, genel gerçekler ve rutin eylemler için kullanılır. Üçüncü tekil şahısta (he/she/it) fiile -s/-es eklenir.",
    details: [
      "Olumlu: I/You/We/They + fiil | He/She/It + fiil+s",
      "Olumsuz: I/You/We/They + don't + fiil | He/She/It + doesn't + fiil",
      "Soru: Do + I/you/we/they + fiil? | Does + he/she/it + fiil?",
      "Zaman belirteçleri: always, usually, often, sometimes, rarely, never, every day/week/month"
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-present-continuous",
    category: "grammar",
    title: "Present Continuous Tense (Şimdiki Zaman)",
    keywords: ["present continuous", "şimdiki zaman", "am", "is", "are", "-ing", "right now", "at the moment", "tense"],
    content: "Konuşma anında devam eden eylemler veya yakın gelecekteki planlar için kullanılır. am/is/are + fiil+ing yapısıyla kurulur.",
    details: [
      "Olumlu: I am + fiil+ing | He/She/It is + fiil+ing | We/You/They are + fiil+ing",
      "Olumsuz: am/is/are + not + fiil+ing",
      "Soru: Am/Is/Are + özne + fiil+ing?",
      "Zaman belirteçleri: now, right now, at the moment, currently, today"
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-past-simple",
    category: "grammar",
    title: "Past Simple Tense (Geçmiş Zaman)",
    keywords: ["past simple", "geçmiş zaman", "did", "-ed", "yesterday", "ago", "last", "tense", "düzensiz fiil", "irregular"],
    content: "Geçmişte tamamlanmış eylemler için kullanılır. Düzenli fiillere -ed eklenir, düzensiz fiillerin 2. hali kullanılır.",
    details: [
      "Olumlu: Özne + fiil+ed (düzenli) veya fiil 2. hal (düzensiz)",
      "Olumsuz: Özne + didn't + fiilin yalın hali",
      "Soru: Did + özne + fiilin yalın hali?",
      "Zaman belirteçleri: yesterday, last week/month/year, ago, in 2020"
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-future-will-going",
    category: "grammar",
    title: "Future Tense — Will vs. Going to",
    keywords: ["future", "gelecek zaman", "will", "going to", "tomorrow", "next", "plan", "prediction", "tahmin"],
    content: "İkisi de gelecekten bahseder ama kullanım farkı vardır. Will = anlık kararlar ve tahminler. Going to = planlar ve kesin niyetler.",
    details: [
      "Will — Anlık kararlar, kesin olmayan tahminler, vaatler",
      "Going to — Önceden planlanmış niyetler, kanıta dayalı tahminler",
      "Will yapısı: Özne + will + fiil yalın hali",
      "Going to yapısı: Özne + am/is/are + going to + fiil yalın hali"
    ],
    examples: [],
    related_word_ids: []
  },

  // ============================================================
  // BÖLÜM: GRAMMAR — Articles & Prepositions
  // ============================================================
  {
    id: "gram-articles",
    category: "grammar",
    title: "Articles (a / an / the Kullanımı)",
    keywords: ["articles", "a", "an", "the", "tanımlık", "belirsiz", "article"],
    content: "a/an = belirsiz (herhangi bir). the = belirli (bilinen, daha önce bahsedilen). Sessiz harfle başlayan kelimeler \"a\", sesli harfle başlayanlar \"an\" alır.",
    details: [
      "a — Sessiz harfle başlayan tekil, belirsiz isimlerden önce: a book, a car",
      "an — Sesli harfle başlayan tekil, belirsiz isimlerden önce: an apple, an engineer",
      "the — Belirli, bilinen veya daha önce bahsedilen isimlerden önce: the sun, the book (we talked about)",
      "İstisna: Ülke adları, şehirler ve diller genelde article almaz: Turkey, Istanbul, English"
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-prepositions-time",
    category: "grammar",
    title: "Prepositions of Time (Zaman Edatları: in, on, at)",
    keywords: ["prepositions", "edatlar", "in", "on", "at", "zaman", "time", "ay", "gün", "saat"],
    content: "in = aylar, yıllar, mevsimler, günün bölümleri. on = günler, tarihler. at = saatler, belirli anlar.",
    details: [
      "in — Ay, yıl, mevsim, günün bölümü: in January, in 2024, in summer, in the morning",
      "on — Gün, tarih: on Monday, on 15th April, on my birthday",
      "at — Saat, belirli an: at 5 o'clock, at night, at the weekend, at noon"
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-prepositions-place",
    category: "grammar",
    title: "Prepositions of Place (Yer Edatları: in, on, at)",
    keywords: ["prepositions", "edatlar", "in", "on", "at", "yer", "place", "konum", "nerede"],
    content: "in = kapalı alan, şehir, ülke içinde. on = yüzey üzerinde. at = belirli bir noktada.",
    details: [
      "in — Kapalı alan, şehir, ülke: in the room, in Istanbul, in Turkey",
      "on — Yüzey: on the table, on the wall, on the second floor",
      "at — Belirli nokta: at the bus stop, at school, at home, at the door"
    ],
    examples: [],
    related_word_ids: []
  },

  // ============================================================
  // BÖLÜM: GRAMMAR — Modals & Comparatives
  // ============================================================
  {
    id: "gram-modal-verbs",
    category: "grammar",
    title: "Modal Verbs (Yardımcı Fiiller)",
    keywords: ["modal verbs", "yardımcı fiiller", "can", "could", "should", "must", "may", "might", "yapabilir", "yapmalı"],
    content: "Yetenek, izin, zorunluluk, olasılık gibi anlamları ifade eden yardımcı fiillerdir. Modaller'den sonra fiil yalın hali gelir (-s, -ed, -ing almaz).",
    details: [
      "Can — Yapabilir (yetenek/izin): I can swim.",
      "Could — Yapabilirdi / Yapabilir mi (geçmiş yetenek / kibarca istek)",
      "Should — Yapmalı (tavsiye): You should study more.",
      "Must — Yapmalı (zorunluluk): You must wear a helmet.",
      "May — Yapabilir (izin / olasılık): May I come in?",
      "Might — Yapabilir (düşük olasılık): It might rain tomorrow."
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-comparatives-superlatives",
    category: "grammar",
    title: "Comparatives & Superlatives (Karşılaştırma & Üstünlük)",
    keywords: ["comparative", "superlative", "karşılaştırma", "üstünlük", "-er", "-est", "more", "most", "than", "daha", "en"],
    content: "Kısa sıfatlar (1-2 hece): -er/-est eklenir. Uzun sıfatlar (3+ hece): more/most kullanılır. Düzensiz örnekler: good→better→best, bad→worse→worst.",
    details: [
      "Comparative (Karşılaştırma): sıfat+er + than / more + sıfat + than",
      "Superlative (Üstünlük): the + sıfat+est / the most + sıfat",
      "Kısa: tall → taller → tallest",
      "Uzun: beautiful → more beautiful → most beautiful",
      "Düzensiz: good → better → best | bad → worse → worst | far → farther → farthest"
    ],
    examples: [],
    related_word_ids: []
  },

  // ============================================================
  // BÖLÜM: GRAMMAR — Describing Places
  // ============================================================
  {
    id: "gram-describing-adjectives",
    category: "grammar",
    title: "Describing Places — Sıfatlar (Yerleri Tanımlama)",
    keywords: ["modern", "historical", "ancient", "exciting", "famous", "natural", "sıfat", "adjective", "yer", "tanımlama", "describing"],
    content: "Yerleri ve mekanları tanımlamak için kullanılan temel sıfatlar ve aralarındaki farklar.",
    details: [
      "Modern — Modern, çağdaş. Yeni tasarımlı binalar için.",
      "Historical — Tarihi. Tarihte yeri olan, eski dönemlerden kalma önemli yapılar için.",
      "Ancient — Antik, çok eski. Binlerce yıl öncesinden kalma harabeler veya piramitler gibi.",
      "Exciting — Heyecan verici. Rafting, lunapark gibi aksiyon içeren durumlar veya yerler.",
      "Famous — Ünlü, meşhur. Herkes tarafından bilinen yerler.",
      "Natural — Doğal. Şelale, nehir, orman gibi insan eli değmemiş yerler."
    ],
    examples: [],
    related_word_ids: []
  },

  // ============================================================
  // BÖLÜM: GRAMMAR — Offers & Preferences
  // ============================================================
  {
    id: "gram-do-you-like-vs-would",
    category: "grammar",
    title: "Do you like vs. Would you like (Teklif ve Tercihler)",
    keywords: ["do you like", "would you like", "teklif", "tercih", "offer", "preference", "sever misin", "ister misin"],
    content: "\"Do you like\" genel tercih sorar, \"Would you like\" o an için kibarca teklif eder. Çok sık karıştırılır!",
    details: [
      "Do you like...? — Genel olarak sevip sevmediğini sormak için",
      "Would you like...? — O an için kibarca bir şey teklif etmek, davet etmek veya ikram etmek için"
    ],
    examples: [],
    related_word_ids: []
  },

  // ============================================================
  // BÖLÜM: GRAMMAR — Restaurant English
  // ============================================================
  {
    id: "gram-restaurant-english",
    category: "grammar",
    title: "Restaurant English (Restoran İfadeleri)",
    keywords: ["restaurant", "restoran", "order", "sipariş", "menu", "bill", "hesap", "waiter", "garson", "would you like", "starter", "main course"],
    content: "Restoranda kullanılan temel İngilizce kalıplar ve yemek ile ilgili kelimeler.",
    details: [
      "Hello. Can I help you? — Merhaba. Yardımcı olabilir miyim?",
      "Would you like to have a starter? — Başlangıç yemeği ister misiniz?",
      "What would you like for the main course? — Ana yemek olarak ne alırdınız?",
      "Would you like anything to drink? — İçecek bir şey ister misiniz?",
      "I'd like to have... — ... almak / yemek / içmek istiyorum.",
      "Can I bring you anything else? — Başka bir şey getirebilir miyim?",
      "I'd like to have the bill, please. — Hesabı alabilir miyim, lütfen.",
      "Here you are. — Buyurun (parayı/eşyayı uzatırken).",
      "You're welcome. — Rica ederim."
    ],
    examples: [],
    related_word_ids: [323]
  },

  {
    id: "gram-present-perfect",
    category: "grammar",
    title: "Present Perfect Tense (Yakın Geçmiş Zaman)",
    keywords: ["present perfect", "have", "has", "v3", "since", "for", "just", "already", "yet", "tense", "zaman"],
    content: "Geçmişte olmuş ama etkisi veya sonucu şu an devam eden eylemler için kullanılır. Olayın ne zaman olduğu değil, kendisi veya sonucu önemlidir; kesin bir zaman (dün, geçen yıl) verilmez.",
    details: [
      "Olumlu: I/You/We/They + have + V3 | He/She/It + has + V3",
      "Olumsuz: have not (haven't) + V3 | has not (hasn't) + V3",
      "Soru: Have/Has + özne + V3?",
      "Anahtar Kelimeler: just (henüz), already (zaten), yet (henüz - olumsuz ve sorularda), since (-den beri), for (-dır/-dir)."
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-past-continuous",
    category: "grammar",
    title: "Past Continuous Tense (Geçmişte Devam Eden Zaman)",
    keywords: ["past continuous", "was", "were", "-ing", "while", "when", "as", "tense", "geçmiş zaman"],
    content: "Geçmişte belirli bir noktada devam etmekte olan eylemleri anlatır. Genellikle \"when\" (dığında) ve \"while\" (iken) bağlaçlarıyla birlikte kullanılır.",
    details: [
      "Olumlu: I/He/She/It + was + fiil+ing | We/You/They + were + fiil+ing",
      "Olumsuz: was not (wasn't) / were not (weren't) + fiil+ing",
      "Soru: Was/Were + özne + fiil+ing?",
      "Kullanım: Genelde aniden olan kısa bir olay (Past Simple), devam eden uzun bir olayı (Past Continuous) böler."
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-countable-uncountable",
    category: "grammar",
    title: "Countable & Uncountable Nouns (Sayılabilen ve Sayılamayan İsimler)",
    keywords: ["countable", "uncountable", "sayılabilen", "sayılamayan", "nouns", "isimler", "a", "an", "s takısı"],
    content: "İngilizcede isimler sayılabilen (elma, kitap) ve sayılamayan (su, para, bilgi) olarak ikiye ayrılır. Sayılamayan isimler hiçbir zaman çoğul eki (-s) almazlar.",
    details: [
      "Countable (Sayılabilen): Tekil veya çoğul olabilirler. Rakamla sayılabilirler (1 apple, 2 cars). Tekil hallerinde başlarına \"a/an\" alırlar.",
      "Uncountable (Sayılamayan): Her zaman tekil kabul edilirler (water, money, information). Rakamla sayılamazlar ve \"-s\" takısı almazlar.",
      "Dikkat: \"Money\" (para), \"Hair\" (saç) ve \"News\" (haber) kelimeleri İngilizcede sayılamaz kabul edilir."
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-quantifiers-some-any",
    category: "grammar",
    title: "Quantifiers (Miktar Belirteçleri: Some, Any, Much, Many, A lot of)",
    keywords: ["quantifiers", "miktar", "some", "any", "much", "many", "a lot of", "sayılabilen", "sayılamayan"],
    content: "İsimlerin miktarını belirtmek için kullanılır. İsmin sayılabilen veya sayılamayan olmasına göre seçilen kelime değişir.",
    details: [
      "Some: Biraz / Birkaç. Olumlu cümlelerde kullanılır (hem sayılabilen hem sayılamayan). Sadece teklif/rica sorularında soru cümlesinde yer alabilir.",
      "Any: Hiç. Sadece olumsuz cümlelerde ve normal sorularda kullanılır.",
      "Much: Çok. SAYILAMAYAN isimlerle (genelde soru ve olumsuz cümlelerde) kullanılır.",
      "Many: Çok. SAYILABİLEN isimlerle kullanılır.",
      "A lot of: Çok. Hem sayılabilen hem sayılamayan isimlerle, genellikle olumlu cümlelerde kullanılır."
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-demonstratives",
    category: "grammar",
    title: "Demonstratives (İşaret Zamirleri: This, That, These, Those)",
    keywords: ["demonstratives", "this", "that", "these", "those", "işaret", "bu", "şu", "bunlar", "şunlar"],
    content: "Nesnelerin yerini (yakın/uzak) ve miktarını (tekil/çoğul) işaret etmek için kullanılırlar.",
    details: [
      "This (Bu): Konuşana YAKIN ve TEKİL olan nesneler için.",
      "That (Şu/O): Konuşana UZAK ve TEKİL olan nesneler için.",
      "These (Bunlar): Konuşana YAKIN ve ÇOĞUL olan nesneler için.",
      "Those (Şunlar/Onlar): Konuşana UZAK ve ÇOĞUL olan nesneler için."
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-conditionals-type-0-1",
    category: "grammar",
    title: "Conditionals (Koşul Cümleleri: Type 0 ve Type 1)",
    keywords: ["conditionals", "if clauses", "koşul", "type 0", "type 1", "if", "eğer"],
    content: "\"Eğer böyle olursa, şöyle olur\" anlamı taşıyan şart cümleleridir. Type 0 doğa kanunları ve genel gerçekleri, Type 1 ise gelecekteki olası durumları anlatır.",
    details: [
      "Type 0 Kuralı: If + Present Simple, Present Simple. (Gerçekler için)",
      "Type 1 Kuralı: If + Present Simple, Will / Can / May + V1. (Gelecek ihtimalleri için)",
      "Not: \"If\" cümlesi cümlenin başında veya ortasında olabilir. Eğer baştaysa, iki cümleciğin arasına mutlaka virgül konur."
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-passive-voice",
    category: "grammar",
    title: "Passive Voice (Edilgen Çatı)",
    keywords: ["passive voice", "edilgen", "by", "be", "v3", "past participle"],
    content: "Eylemi KİMİN yaptığının değil, EYLEMİN KENDİSİNİN (ne olduğunun) önemli olduğu durumlarda veya yapan kişi bilinmiyorsa kullanılır.",
    details: [
      "Temel Formül: \"To be\" fiili (zamanın gerektirdiği çekimde) + V3 (Fiilin 3. hali).",
      "Present Simple Passive: am/is/are + V3 (Örn: Arabalar burada üretilir.)",
      "Past Simple Passive: was/were + V3 (Örn: Cüzdanım çalındı.)",
      "İşi yapanı belirtmek istersek cümlenin sonuna \"by + kişi/nesne\" (tarafından) ekleriz."
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-used-to-would",
    category: "grammar",
    title: "Used to vs. Would (Geçmiş Alışkanlıklar)",
    keywords: ["used to", "would", "geçmiş", "alışkanlık", "eskiden"],
    content: "Geçmişte düzenli olarak yaptığımız ama artık yapmadığımız alışkanlıkları ve durumları anlatmak için kullanılırlar.",
    details: [
      "Used to: Hem geçmişteki eylemler hem de geçmişteki \"durumlar\" (sahip olmak, sevmek, orada olmak vb.) için kullanılır.",
      "Would: Sadece geçmişteki tekrar eden \"eylemler\" için kullanılır, \"durum\" bildiren fiillerle (be, have, like, know) kesinlikle kullanılmaz.",
      "Olumsuz Yapı: didn't use to + V1 (use kelimesinden 'd' düşer).",
      "Soru Yapısı: Did + özne + use to + V1?"
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-gerunds-infinitives",
    category: "grammar",
    title: "Gerunds & Infinitives (Fiilimsiler: -ing vs. to)",
    keywords: ["gerunds", "infinitives", "fiilimsi", "-ing", "to", "fiil", "isim-fiil"],
    content: "Bir fiilin cümle içinde isim görevinde (özne veya nesne olarak) kullanılabilmesi için aldığı eklerdir. İngilizcede bazı fiillerden sonra \"-ing\", bazılarından sonra \"to\" gelir.",
    details: [
      "Gerund (Fiil + ing): Edatlardan (in, on, at, about) sonra ve belirli fiillerden (enjoy, avoid, mind, finish) sonra mutlaka kullanılır.",
      "Infinitive (to + Fiil): Amaç bildirirken (için anlamında) ve belirli fiillerden (want, decide, hope, need) sonra kullanılır.",
      "İstisna: Bazı fiiller (stop, remember, forget) her ikisini de alabilir ama cümledeki anlamı tamamen değiştirirler."
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-adjectives-adverbs",
    category: "grammar",
    title: "Adjectives vs. Adverbs (Sıfatlar ve Zarflar)",
    keywords: ["adjectives", "adverbs", "sıfat", "zarf", "-ly", "niteleme"],
    content: "Sıfatlar İSİMLERİ niteler (Nasıl bir araba?), zarflar ise FİİLLERİ niteler (Nasıl sürüyor?). Zarflar genellikle sıfatın sonuna \"-ly\" eki getirilerek oluşturulur.",
    details: [
      "Adjective (Sıfat): İsmin önüne gelir veya \"to be\" (am/is/are) fiilinden sonra kullanılır.",
      "Adverb (Zarf): Genelde fiilden (eylemden) hemen sonra gelir ve eylemin nasıl yapıldığını açıklar.",
      "Düzensizler: \"Good\" (Sıfat) -> \"Well\" (Zarf) olarak değişir. \"Fast, hard, late\" kelimeleri hem sıfat hem zarf olarak aynıdır (asla -ly almazlar)."
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-past-perfect",
    category: "grammar",
    title: "Past Perfect Tense (Miş'li Geçmiş Zaman)",
    keywords: ["past perfect", "had", "v3", "before", "after", "by the time", "geçmişin geçmişi"],
    content: "Geçmişte yaşanmış iki olaydan, hangisinin daha önce gerçekleştiğini vurgulamak için kullanılır. İngilizcede \"geçmişin geçmişi\" olarak da bilinir.",
    details: [
      "Yapı: Özne + had + V3. (Tüm kişi zamirleri için 'had' kullanılır).",
      "Olumsuz: had not (hadn't) + V3.",
      "Soru: Had + özne + V3?",
      "Kullanım: Daha önce olan olay Past Perfect (had V3) ile, ona kıyasla daha yakın geçmişte (sonra) olan olay Past Simple (V2) ile anlatılır.",
      "Anahtar Kelimeler: after (sonra), before (önce), by the time (-dığı zamana kadar), until (-e kadar), because."
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-future-continuous-perfect",
    category: "grammar",
    title: "Future Continuous & Perfect (Gelecek Zamanın İleri Halleri)",
    keywords: ["future continuous", "future perfect", "will be doing", "will have done", "by", "gelecekte"],
    content: "Gelecekte belirli bir anda devam ediyor olacak (Continuous) veya gelecekte belirli bir zamana kadar çoktan bitmiş olacak (Perfect) eylemleri ifade eder.",
    details: [
      "Future Continuous (will be + V-ing): \"Yarın bu saatlerde uçuyor olacağım\" gibi, gelecekte o an sürecek eylemler için.",
      "Future Perfect (will have + V3): \"Sen gelene kadar ben işi bitirmiş olacağım\" gibi, gelecekte tamamlanmış olacak eylemler için.",
      "Anahtar Kelime: Future Perfect yapısında \"by\" (by tomorrow, by 2030 - yarına kadar, 2030'a kadar) edatı çok sık kullanılır."
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-few-little",
    category: "grammar",
    title: "A few / A little vs. Few / Little (Azlık Belirteçleri)",
    keywords: ["a few", "few", "a little", "little", "quantifiers", "az", "yeterli", "yetersiz", "miktar"],
    content: "Her ikisi de \"az\" anlamına gelse de, başlarındaki \"a\" harfi cümlenin anlamını tamamen değiştirir. \"a\" harfi olanlar olumlu (yeterli), olmayanlar olumsuz (yetersiz) anlam taşır.",
    details: [
      "Sayılabilen isimlerle: Few ve A few kullanılır (Örn: apples, cars).",
      "Sayılamayan isimlerle: Little ve A little kullanılır (Örn: water, time).",
      "A few / A little: \"Az ama yeterli\" anlamı katar. (Biraz var, işimi görür).",
      "Few / Little: \"Neredeyse hiç yok, yok denecek kadar az\" anlamı katar. Olumsuz bir durumu ifade eder."
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-conditionals-type-2-3",
    category: "grammar",
    title: "Conditionals (Koşul Cümleleri: Type 2 ve Type 3)",
    keywords: ["conditionals", "if clauses", "type 2", "type 3", "would", "had v3", "hayali durumlar", "pişmanlık"],
    content: "Gerçek dışı ve hayali durumları (Type 2) ya da geçmişte kalmış, değiştirilemez olaylar için duyulan pişmanlıkları (Type 3) ifade etmek için kullanılır.",
    details: [
      "Type 2 Kuralı: If + Past Simple, would/could + V1. (Şu anki hayali durumlar. Örn: Param olsaydı, o arabayı alırdım - ama param yok).",
      "Type 2 İstisnası: \"To be\" fiili Type 2'de tüm özneler (I/He/She/It dahil) için \"were\" olarak kullanılır (If I were you - Senin yerinde olsaydım).",
      "Type 3 Kuralı: If + Past Perfect (had V3), would have + V3. (Geçmişe dair pişmanlıklar. Örn: Çalışsaydın, sınavı geçerdin - ama çalışmadın ve kaldın)."
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-relative-clauses",
    category: "grammar",
    title: "Relative Clauses (Sıfat Cümlecikleri)",
    keywords: ["relative clauses", "who", "which", "that", "whose", "where", "sıfat", "tanımlama"],
    content: "İki ayrı cümleyi birleştirmek ve bir ismi daha detaylı tanımlamak (hangi adam? hangi araba?) için kullanılır. Türkçedeki \"-an, -en, -dığı\" eklerinin görevini görür.",
    details: [
      "Who: İnsanları tanımlarken kullanılır (The man who called me... - Beni arayan adam).",
      "Which: Hayvanları ve cansız nesneleri tanımlarken kullanılır.",
      "That: Hem insanlar hem de nesneler için (Who ve Which yerine) kullanılabilir (Ancak her virgüllü yapıda kullanılamaz).",
      "Whose: Sahiplik bildirir (...-nın). Kendisinden sonra mutlaka kime ait olduğu belirtilen isim gelir (The girl whose car was stolen... - Arabası çalınan kız).",
      "Where: Yer ve mekanları tanımlarken kullanılır."
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-reported-speech",
    category: "grammar",
    title: "Reported Speech (Dolaylı Anlatım)",
    keywords: ["reported speech", "indirect speech", "aktarma", "said", "told", "dolaylı anlatım"],
    content: "Başkasının söylediği bir sözü, üçüncü bir kişiye aktarırken kullanılan yapıdır. Sözü aktarırken genellikle bir derece \"geçmiş zamana\" (tense shift) gidilir.",
    details: [
      "Zaman Kayması (Tense Shift): Tırnak içindeki orijinal söz aktarılırken, zaman bir adım geriye gider. (Am/is/are -> was/were, Present Simple -> Past Simple).",
      "Fiil Kullanımı: \"say\" (demek) tek başına kullanılabilir (He said that...), \"tell\" (söylemek) ise kime söylendiğini belirtmek zorundadır (He told me that...).",
      "Zaman Zarfları: Zaman ifadeleri de aktarılırken değişir (today -> that day, tomorrow -> the next day, now -> then).",
      "Modallar: \"Will\" -> \"Would\" olur. \"Can\" -> \"Could\" olur."
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-too-enough",
    category: "grammar",
    title: "Too and Enough (Aşırılık ve Yeterlilik)",
    keywords: ["too", "enough", "aşırı", "yeterli", "sıfat", "zarf"],
    content: "Bir şeyin gereğinden fazla (too) veya tam gerektiği kadar (enough) olduğunu belirtmek için kullanılırlar. Cümledeki konumları birbirine zıttır.",
    details: [
      "Too (Aşırı): Sıfatlardan ve zarflardan ÖNCE gelir. Cümleye yapısal olarak değil ama anlamsal olarak olumsuzluk katar. (too cold - çıkılamayacak kadar soğuk).",
      "Enough (Yeterli): Sıfatlardan ve zarflardan SONRA gelir (tall enough - yeterince uzun). İsimlerden ise ÖNCE gelir (enough money - yeterli para).",
      "Kullanım: Genellikle arkalarından \"to + V1\" (yapmak için) mastar yapısı gelir (Too tired to walk - Yürüyemeyecek kadar yorgun)."
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "gram-question-tags",
    category: "grammar",
    title: "Question Tags (Eklenti Soruları)",
    keywords: ["question tags", "isn't it", "don't you", "değil mi", "onaylama", "tag questions"],
    content: "Konuşma dilinde karşımızdakinden onay almak için cümlenin sonuna eklenen kısa sorulardır. Türkçedeki \"değil mi?\" ifadesini karşılar.",
    details: [
      "Zıtlık Kuralı: Ana cümle OLUMLU ise eklenti sorusu OLUMSUZ (You are a student, aren't you?), ana cümle OLUMSUZ ise eklenti sorusu OLUMLU olur.",
      "Soru Yapısı: Soru kısmında sadece ana cümlenin yardımcı fiili (am/is/are, do/does, did, will vb.) ve kişi zamiri (I, you, he...) kullanılır. Kesinlikle özel isim kullanılmaz.",
      "İstisnalar: \"I am\" ile başlayan cümlelerin sorusu \"aren't I?\" olur. \"Let's\" ile başlayanların eklentisi \"shall we?\", emir cümlelerinin ise \"will you?\" olur."
    ],
    examples: [],
    related_word_ids: []
  },

  // ============================================================
  // BÖLÜM: İPUÇLARI (Tips)
  // ============================================================
  {
    id: "tip-common-mistakes",
    category: "tip",
    title: "Yaygın Türk Öğrenci Hataları",
    keywords: ["hata", "mistake", "yanlış", "türk", "common", "yaygın", "ipucu", "tip"],
    content: "Türk öğrencilerin İngilizce öğrenirken en sık yaptığı hatalar ve doğruları.",
    details: [
      "❌ \"I am agree\" → ✅ \"I agree\" (agree fiildir, am/is/are ile kullanılmaz)",
      "❌ \"I am very like\" → ✅ \"I really like\" (like fiildir, very ile değil really ile)",
      "❌ \"He can to swim\" → ✅ \"He can swim\" (modallerden sonra 'to' gelmez)",
      "❌ \"informations\" → ✅ \"information\" (information sayılamaz isimdir, çoğul olmaz)",
      "❌ \"I'm boring\" → ✅ \"I'm bored\" (-ing yapan, -ed olan durumu yaşayan)",
      "❌ \"It depends from\" → ✅ \"It depends on\" (doğru edat: on)"
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "tip-word-memorization",
    category: "tip",
    title: "Kelime Ezberleme Teknikleri",
    keywords: ["ezber", "teknik", "memorization", "vocabulary", "kelime", "hafıza", "öğrenme", "tip", "ipucu"],
    content: "Etkili kelime öğrenme stratejileri. Tekrar, bağlam ve aktif kullanım en önemli unsurlardır.",
    details: [
      "📌 Spaced Repetition: Kelimeleri artan aralıklarla tekrar edin. İlk gün, 3. gün, 7. gün, 14. gün.",
      "📌 Cümle içinde öğrenin: Kelimeyi tek başına değil, cümle içinde ezberleyin.",
      "📌 Görsel ilişkilendirme: Kelimeyi bir görüntü ile eşleştirin (zihinsel resim).",
      "📌 Kelime grupları: Benzer konudaki kelimeleri birlikte çalışın (ev eşyaları, meslekler vb.).",
      "📌 Aktif kullanım: Öğrendiğiniz kelimeleri günlük konuşmada veya yazıda kullanmaya çalışın.",
      "📌 Quiz çözün: English Time quizleri tam bunun için tasarlandı! ⚡"
    ],
    examples: [],
    related_word_ids: []
  },
  {
    id: "tip-pronunciation",
    category: "tip",
    title: "Telaffuz İpuçları",
    keywords: ["telaffuz", "pronunciation", "söyleniş", "ses", "okuma", "tip", "ipucu"],
    content: "İngilizce telaffuzla ilgili temel kurallar ve Türk öğrencilerin dikkat etmesi gerekenler.",
    details: [
      "\"th\" sesi: Dilini dişlerinin arasından çıkar. think = /θɪŋk/, this = /ðɪs/",
      "\"w\" sesi: Dudaklarını yuvarlayarak söyle. water = /ˈwɔːtər/ (v gibi değil!)",
      "\"r\" sesi: İngilizce r Türkçe r'den farklıdır — dil damağa değmez.",
      "Vurgu: İngilizce'de kelime vurgusu çok önemlidir. REcord (kayıt) vs. reCORD (kaydetmek)",
      "Silent letters: know (k sessiz), write (w sessiz), island (s sessiz)"
    ],
    examples: [],
    related_word_ids: []
  },

  // ============================================================
  // BÖLÜM: DEYİMLER (Idioms) — Detaylı Açıklamalar
  // ============================================================
  {
    id: "idiom-piece-of-cake",
    category: "idiom",
    title: "A piece of cake",
    keywords: ["piece of cake", "kolay", "easy", "çocuk oyuncağı", "deyim", "idiom"],
    content: "Bir şeyin çok kolay olduğunu ifade eder. Türkçe karşılığı: \"Çocuk oyuncağı\".",
    details: ["Literal anlam: Bir dilim kek", "Gerçek anlam: Çok kolay, zahmetsiz", "Ne zaman kullanılır: Bir işin kolaylıkla yapılabileceğini söylerken"],
    examples: [],
    related_word_ids: [6001]
  },
  {
    id: "idiom-break-a-leg",
    category: "idiom",
    title: "Break a leg",
    keywords: ["break a leg", "iyi şanslar", "good luck", "gösteri", "sınav", "deyim", "idiom"],
    content: "Birine performans veya sınav öncesi şans dilemek için kullanılır. Türkçe karşılığı: \"İyi şanslar!\"",
    details: ["Literal anlam: Bacağını kır", "Gerçek anlam: İyi şanslar (Genelde bir gösteri veya sınav öncesi)", "Neden: Tiyatro geleneğinden gelir — doğrudan 'iyi şanslar' demek uğursuz sayılırdı."],
    examples: [],
    related_word_ids: [6002]
  },
  {
    id: "idiom-under-the-weather",
    category: "idiom",
    title: "Under the weather",
    keywords: ["under the weather", "hasta", "keyifsiz", "sick", "ill", "deyim", "idiom"],
    content: "Hafif hasta veya keyifsiz hissettiğini ifade eder.",
    details: ["Literal anlam: Havanın altında", "Gerçek anlam: Hafif hasta hissetmek, keyifsiz olmak", "Ne zaman kullanılır: Ciddi bir hastalık değil, genel keyifsizlik için"],
    examples: [],
    related_word_ids: [6003]
  },
  {
    id: "idiom-once-blue-moon",
    category: "idiom",
    title: "Once in a blue moon",
    keywords: ["once in a blue moon", "nadir", "rarely", "ayda yılda bir", "deyim", "idiom"],
    content: "Bir şeyin çok nadir gerçekleştiğini ifade eder. Türkçe karşılığı: \"Ayda yılda bir\".",
    details: ["Literal anlam: Mavi bir ayda bir kez", "Gerçek anlam: Çok nadir, neredeyse hiç", "Neden: \"Blue moon\" astronomik olarak nadir bir olaydır."],
    examples: [],
    related_word_ids: [6004]
  },
  {
    id: "idiom-call-it-a-day",
    category: "idiom",
    title: "Call it a day",
    keywords: ["call it a day", "paydos", "bitirmek", "yeter", "durmak", "deyim", "idiom"],
    content: "Bugünlük yeterli olduğunu ve işi bırakma zamanının geldiğini ifade eder.",
    details: ["Literal anlam: Buna bir gün de", "Gerçek anlam: Bugünlük bu kadar yeter, paydos etmek"],
    examples: [],
    related_word_ids: [6005]
  },
  {
    id: "idiom-so-far-so-good",
    category: "idiom",
    title: "So far, so good",
    keywords: ["so far so good", "şimdiye kadar", "her şey yolunda", "deyim", "idiom"],
    content: "Şu ana kadar her şeyin yolunda gittiğini belirtir.",
    details: ["Literal anlam: O kadar uzak, o kadar iyi", "Gerçek anlam: Şu ana kadar her şey yolunda"],
    examples: [],
    related_word_ids: [6006]
  },
  {
    id: "idiom-time-flies",
    category: "idiom",
    title: "Time flies",
    keywords: ["time flies", "zaman", "hızlı", "geçmek", "uçmak", "deyim", "idiom"],
    content: "Zamanın su gibi akıp çok hızlı geçtiğini ifade eder.",
    details: ["Literal anlam: Zaman uçar", "Gerçek anlam: Zaman su gibi akıp geçiyor"],
    examples: [],
    related_word_ids: [6007]
  },
  {
    id: "idiom-better-late-than-never",
    category: "idiom",
    title: "Better late than never",
    keywords: ["better late than never", "geç olsun güç olmasın", "gecikmek", "deyim", "idiom"],
    content: "Bir işi geç yapmanın, hiç yapmamaktan daha iyi olduğunu belirtir.",
    details: ["Literal anlam: Geç olması, hiç olmamasından iyidir", "Gerçek anlam: Geç olsun güç olmasın"],
    examples: [],
    related_word_ids: [6008]
  },
  {
    id: "idiom-keep-an-eye-on",
    category: "idiom",
    title: "Keep an eye on",
    keywords: ["keep an eye on", "göz kulak olmak", "dikkat etmek", "gözetmek", "deyim", "idiom"],
    content: "Bir şeye sahip çıkmak veya onu gözetim altında tutmak.",
    details: ["Literal anlam: Üstünde bir göz tutmak", "Gerçek anlam: Göz kulak olmak, dikkat etmek"],
    examples: [],
    related_word_ids: [6009]
  },
  {
    id: "idiom-out-of-the-blue",
    category: "idiom",
    title: "Out of the blue",
    keywords: ["out of the blue", "aniden", "durup dururken", "beklenmedik", "deyim", "idiom"],
    content: "Hiç beklenmedik bir anda, aniden ortaya çıkan durumlar için kullanılır.",
    details: ["Literal anlam: Mavinin içinden (gökyüzünden)", "Gerçek anlam: Durup dururken, aniden"],
    examples: [],
    related_word_ids: [6010]
  },
  {
    id: "idiom-cost-arm-leg",
    category: "idiom",
    title: "Cost an arm and a leg",
    keywords: ["cost an arm and a leg", "pahalı", "expensive", "ateş pahası", "deyim", "idiom"],
    content: "Bir şeyin aşırı derecede pahalı olduğunu ifade eder.",
    details: ["Literal anlam: Bir kol ve bir bacağa mal olmak", "Gerçek anlam: Çok pahalı olmak, ateş pahası"],
    examples: [],
    related_word_ids: [6011]
  },
  {
    id: "idiom-bite-the-bullet",
    category: "idiom",
    title: "Bite the bullet",
    keywords: ["bite the bullet", "dişini sıkmak", "katlanmak", "zor durum", "deyim", "idiom"],
    content: "Verilmesi zor veya acı verici, ama mecburi olan bir karara boyun eğmek. Dişini sıkmak.",
    details: ["Literal anlam: Kurşunu ısırmak", "Gerçek anlam: İstemediğin ama mecburi olan bir duruma katlanmak, dişini sıkmak"],
    examples: [],
    related_word_ids: [6012]
  },
  {
    id: "idiom-spill-the-beans",
    category: "idiom",
    title: "Spill the beans",
    keywords: ["spill the beans", "sır", "secret", "söylemek", "ağzından kaçırmak", "deyim", "idiom"],
    content: "Gizli kalması gereken bir şeyi birine söylemek.",
    details: ["Literal anlam: Fasulyeleri dökmek", "Gerçek anlam: Ağzındaki baklayı çıkarmak, sırrı vermek"],
    examples: [],
    related_word_ids: [6013]
  },
  {
    id: "idiom-hit-the-sack",
    category: "idiom",
    title: "Hit the sack / Hit the bed",
    keywords: ["hit the sack", "hit the bed", "uyumak", "yatmak", "sleep", "bed", "deyim", "idiom"],
    content: "Gün sonunda çok yorgun olup yatmaya, uyumaya gitmek.",
    details: ["Literal anlam: Çuvala (yatağa) vurmak", "Gerçek anlam: Kafayı vurup yatmak, uyumaya gitmek"],
    examples: [],
    related_word_ids: [6014]
  },
  {
    id: "idiom-raining-cats-dogs",
    category: "idiom",
    title: "Raining cats and dogs",
    keywords: ["raining cats and dogs", "yağmur", "rain", "şiddetli", "bardaktan boşanırcasına", "deyim", "idiom"],
    content: "Yağmurun çok şiddetli, yoğun bir şekilde yağması.",
    details: ["Literal anlam: Kediler ve köpekler yağıyor", "Gerçek anlam: Bardaktan boşanırcasına yağmur yağması"],
    examples: [],
    related_word_ids: [6015]
  },
  {
    id: "idiom-pull-someones-leg",
    category: "idiom",
    title: "Pull someone's leg",
    keywords: ["pull leg", "şaka yapmak", "işletmek", "kafa bulmak", "deyim", "idiom", "joke"],
    content: "Birine inandırıcı bir şekilde şaka yapmak, kafa bulmak.",
    details: ["Literal anlam: Birinin bacağını çekmek", "Gerçek anlam: Biriyle kafa bulmak, dalga geçmek, işletmek"],
    examples: [],
    related_word_ids: [6016]
  },
  {
    id: "idiom-miss-the-boat",
    category: "idiom",
    title: "Miss the boat",
    keywords: ["miss the boat", "fırsat", "kaçırmak", "opportunity", "geç kalmak", "deyim", "idiom"],
    content: "Güzel bir şansı elden kaçırmak ya da bir şeye geç kalmak.",
    details: ["Literal anlam: Tekneyi kaçırmak", "Gerçek anlam: Fırsatı kaçırmak"],
    examples: [],
    related_word_ids: [6017]
  },
  {
    id: "idiom-same-page",
    category: "idiom",
    title: "To be on the same page",
    keywords: ["on the same page", "aynı fikirde", "aynı nokta", "anlaşmak", "deyim", "idiom"],
    content: "Bir durumu aynı şekilde anlamak ve aynı görüşü paylaşmak.",
    details: ["Literal anlam: Aynı sayfada olmak", "Gerçek anlam: Aynı fikirde olmak, aynı noktada buluşmak"],
    examples: [],
    related_word_ids: [6018]
  },
  {
    id: "idiom-let-cat-out-of-bag",
    category: "idiom",
    title: "Let the cat out of the bag",
    keywords: ["let the cat out of the bag", "sır", "açığa vurmak", "secret", "deyim", "idiom"],
    content: "Tutulması gereken bir sırrı yanlışlıkla ya da dikkatsizce açığa çıkarmak.",
    details: ["Literal anlam: Kediyi çuvaldan çıkarmak", "Gerçek anlam: Sırrı yanlışlıkla ağzından kaçırmak"],
    examples: [],
    related_word_ids: [6019]
  },
  {
    id: "idiom-beat-around-the-bush",
    category: "idiom",
    title: "Beat around the bush",
    keywords: ["beat around the bush", "lafı dolandırmak", "sadede gelmemek", "uzatmak", "deyim", "idiom"],
    content: "Asıl konudan kaçınarak lafı gereğinden fazla dolandırmak.",
    details: ["Literal anlam: Çalının etrafına vurmak", "Gerçek anlam: Lafı dolandırmak, sadede gelmemek"],
    examples: [],
    related_word_ids: [6020]
  },
  {
    id: "idiom-no-pain-no-gain",
    category: "idiom",
    title: "No pain, no gain",
    keywords: ["no pain no gain", "emek", "çaba", "effort", "başarı", "success", "deyim", "idiom"],
    content: "Zorluklara katlanmadan, acı çekmeden veya çalışmadan başarı sağlanamayacağı.",
    details: ["Literal anlam: Acı yoksa kazanç da yok", "Gerçek anlam: Emek olmadan yemek olmaz, zahmetsiz rahmet olmaz"],
    examples: [],
    related_word_ids: [6021]
  },
  {
    id: "idiom-rule-of-thumb",
    category: "idiom",
    title: "Rule of thumb",
    keywords: ["rule of thumb", "genel kural", "pratik kural", "deneyim", "deyim", "idiom"],
    content: "Kesin bir formüle değil ancak deneyimlere dayanan, yaygın kabul görmüş kural.",
    details: ["Literal anlam: Başparmak kuralı", "Gerçek anlam: Genel kural, deneyimlere dayanan pratik kural"],
    examples: [],
    related_word_ids: [6022]
  },
  {
    id: "idiom-give-a-hand",
    category: "idiom",
    title: "Give a hand",
    keywords: ["give a hand", "yardım etmek", "help", "destek", "deyim", "idiom"],
    content: "Birine yapmaya çalıştığı fiziksel veya zor bir eylemde yardımcı olmak.",
    details: ["Literal anlam: El vermek", "Gerçek anlam: Yardım eli uzatmak, yardım etmek"],
    examples: [],
    related_word_ids: [6023]
  },
  {
    id: "idiom-hold-your-horses",
    category: "idiom",
    title: "Hold your horses",
    keywords: ["hold your horses", "sabır", "acele etme", "bekle", "sakin", "deyim", "idiom"],
    content: "Birine yavaşlamasını, aceleci karar vermemesini ve beklemesini öğütlemek.",
    details: ["Literal anlam: Atlarını tut", "Gerçek anlam: Acele etme, sabırlı ol"],
    examples: [],
    related_word_ids: [6024]
  },
  {
    id: "idiom-in-the-same-boat",
    category: "idiom",
    title: "In the same boat",
    keywords: ["in the same boat", "aynı gemide", "zor durum", "ortak sorun", "deyim", "idiom"],
    content: "Birden fazla kişinin ortak olarak kötü veya talihsiz bir durumda bulunması.",
    details: ["Literal anlam: Aynı teknede olmak", "Gerçek anlam: Aynı gemide olmak, aynı zor durumu paylaşmak"],
    examples: [],
    related_word_ids: [6025]
  },
  {
    id: "idiom-make-up-your-mind",
    category: "idiom",
    title: "Make up your mind",
    keywords: ["make up your mind", "karar vermek", "seçmek", "decide", "deyim", "idiom"],
    content: "İki veya daha fazla seçenek arasında seçim yapmak veya bir sonuca varmak.",
    details: ["Literal anlam: Zihnini oluştur", "Gerçek anlam: Karar vermek"],
    examples: [],
    related_word_ids: [6026]
  },
  {
    id: "idiom-take-it-easy",
    category: "idiom",
    title: "Take it easy",
    keywords: ["take it easy", "sakin ol", "rahatla", "relax", "kafanı yorma", "deyim", "idiom"],
    content: "Stres yapmamak, dinlenmek veya bir olayı çok ciddiye almamak.",
    details: ["Literal anlam: Kolay al", "Gerçek anlam: Sakin ol, kafana takma"],
    examples: [],
    related_word_ids: [6027]
  },
  {
    id: "idiom-catch-red-handed",
    category: "idiom",
    title: "Catch someone red-handed",
    keywords: ["catch red-handed", "suçüstü", "yakalamak", "gizli iş", "deyim", "idiom"],
    content: "Birisini tam da kural ihlali yaparken, gizli bir şeyle uğraşırken yakalamak.",
    details: ["Literal anlam: Kırmızı ellerle yakalamak", "Gerçek anlam: Birini suç işlerken suçüstü yakalamak"],
    examples: [],
    related_word_ids: [6028]
  },
  {
    id: "idiom-see-eye-to-eye",
    category: "idiom",
    title: "See eye to eye",
    keywords: ["see eye to eye", "aynı fikirde", "anlaşmak", "agree", "deyim", "idiom"],
    content: "İki kişinin bir konuda birbirini tamamen onaylaması ve hemfikir olması.",
    details: ["Literal anlam: Göz göze görmek", "Gerçek anlam: Biriyle tamamen aynı görüşte olmak"],
    examples: [],
    related_word_ids: [6029]
  },
  {
    id: "idiom-add-fuel-fire",
    category: "idiom",
    title: "Add fuel to the fire",
    keywords: ["add fuel to the fire", "yangına körükle gitmek", "kötüleştirmek", "kışkırtmak", "deyim", "idiom"],
    content: "Zaten sinirli olan veya kötü giden bir durumu söz veya eylemle daha da vahimleştirmek.",
    details: ["Literal anlam: Ateşe yakıt (odun) eklemek", "Gerçek anlam: Yangına körükle gitmek"],
    examples: [],
    related_word_ids: [6030]
  }
,

  // ============================================================
  // BÖLÜM: VOCABULARY KELİMELERİ (A2 & Genel)
  // ============================================================
  {
    id: "vocab-1",
    category: "vocabulary",
    title: "Sky — Gökyüzü",
    keywords: ["sky","gökyüzü","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The blue space above us.",
      "🇹🇷 Üstümüzdeki mavi boşluk."
    ],
    examples: [],
    related_word_ids: [1]
  },
  {
    id: "vocab-2",
    category: "vocabulary",
    title: "Wood — Ağaçlık",
    keywords: ["wood","ağaçlık","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A small area with many trees.",
      "🇹🇷 Çok sayıda ağacın olduğu küçük alan."
    ],
    examples: [],
    related_word_ids: [2]
  },
  {
    id: "vocab-3",
    category: "vocabulary",
    title: "Hill — Tepe",
    keywords: ["hill","tepe","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A small mountain.",
      "🇹🇷 Küçük bir dağ."
    ],
    examples: [],
    related_word_ids: [3]
  },
  {
    id: "vocab-4",
    category: "vocabulary",
    title: "Farmer — Çiftçi",
    keywords: ["farmer","çiftçi","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who works on a farm and grows food.",
      "🇹🇷 Çiftlikte çalışan ve yiyecek yetiştiren kişi."
    ],
    examples: [],
    related_word_ids: [4]
  },
  {
    id: "vocab-5",
    category: "vocabulary",
    title: "Valley — Vadi",
    keywords: ["valley","vadi","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The low place between two mountains.",
      "🇹🇷 İki dağ arasındaki alçak yer."
    ],
    examples: [],
    related_word_ids: [5]
  },
  {
    id: "vocab-6",
    category: "vocabulary",
    title: "Tree — Ağaç",
    keywords: ["tree","ağaç","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A tall green plant with leaves.",
      "🇹🇷 Yaprakları olan uzun yeşil bitki."
    ],
    examples: [],
    related_word_ids: [6]
  },
  {
    id: "vocab-7",
    category: "vocabulary",
    title: "Field — Alan / Tarla",
    keywords: ["field","alan / tarla","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A large open land for plants or animals.",
      "🇹🇷 Bitkiler veya hayvanlar için büyük açık arazi."
    ],
    examples: [],
    related_word_ids: [7]
  },
  {
    id: "vocab-8",
    category: "vocabulary",
    title: "Farm — Çiftlik",
    keywords: ["farm","çiftlik","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A place where farmers work and keep animals.",
      "🇹🇷 Çiftçilerin çalıştığı ve hayvan beslediği yer."
    ],
    examples: [],
    related_word_ids: [8]
  },
  {
    id: "vocab-9",
    category: "vocabulary",
    title: "Lake — Göl",
    keywords: ["lake","göl","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A large area of water.",
      "🇹🇷 Büyük bir su alanı."
    ],
    examples: [],
    related_word_ids: [9]
  },
  {
    id: "vocab-10",
    category: "vocabulary",
    title: "Horse — At",
    keywords: ["horse","at","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A big animal you can ride.",
      "🇹🇷 Üzerine binebileceğin büyük bir hayvan."
    ],
    examples: [],
    related_word_ids: [10]
  },
  {
    id: "vocab-11",
    category: "vocabulary",
    title: "Boat — Kayık",
    keywords: ["boat","kayık","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A small ship to travel on water.",
      "🇹🇷 Suda seyahat etmek için küçük gemi."
    ],
    examples: [],
    related_word_ids: [11]
  },
  {
    id: "vocab-12",
    category: "vocabulary",
    title: "Grass — Çimen",
    keywords: ["grass","çimen","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Short green plants on the ground.",
      "🇹🇷 Yerdeki kısa yeşil bitkiler."
    ],
    examples: [],
    related_word_ids: [12]
  },
  {
    id: "vocab-13",
    category: "vocabulary",
    title: "Dog — Köpek",
    keywords: ["dog","köpek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A friendly pet animal that barks.",
      "🇹🇷 \"Havlayan, arkadaş canlısı evcil hayvan.\""
    ],
    examples: [],
    related_word_ids: [13]
  },
  {
    id: "vocab-14",
    category: "vocabulary",
    title: "Path — Patika / Keçi Yolu",
    keywords: ["path","patika / keçi yolu","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A small road for walking.",
      "🇹🇷 Yürümek için küçük bir yol."
    ],
    examples: [],
    related_word_ids: [14]
  },
  {
    id: "vocab-15",
    category: "vocabulary",
    title: "Grow — Büyü(t)mek / Yetiş(tir)mek",
    keywords: ["grow","büyü(t)mek / yetiş(tir)mek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To get bigger over time.",
      "🇹🇷 Zamanla daha büyük hale gelmek."
    ],
    examples: [],
    related_word_ids: [15]
  },
  {
    id: "vocab-16",
    category: "vocabulary",
    title: "Own — Sahip Olmak",
    keywords: ["own","sahip olmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To have something that is yours.",
      "🇹🇷 Sana ait olan bir şeye sahip olmak."
    ],
    examples: [],
    related_word_ids: [16]
  },
  {
    id: "vocab-17",
    category: "vocabulary",
    title: "Crop — Mahsul",
    keywords: ["crop","mahsul","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 \"Plants grown on a farm, like wheat or corn.\"",
      "🇹🇷 \"Çiftlikte yetiştirilen buğday, mısır gibi bitkiler.\""
    ],
    examples: [],
    related_word_ids: [17]
  },
  {
    id: "vocab-18",
    category: "vocabulary",
    title: "Area — Alan / Bölge",
    keywords: ["area","alan / bölge","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A part of a place.",
      "🇹🇷 Bir yerin bir kısmı veya bölümü."
    ],
    examples: [],
    related_word_ids: [18]
  },
  {
    id: "vocab-19",
    category: "vocabulary",
    title: "Countryside — Kırsal Bölge",
    keywords: ["countryside","kırsal bölge","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Land outside towns and cities.",
      "🇹🇷 Şehirlerin ve kasabaların dışındaki arazi."
    ],
    examples: [],
    related_word_ids: [19]
  },
  {
    id: "vocab-20",
    category: "vocabulary",
    title: "Bird — Kuş",
    keywords: ["bird","kuş","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 An animal with wings that can fly.",
      "🇹🇷 Kanatları olan ve uçabilen bir hayvan."
    ],
    examples: [],
    related_word_ids: [20]
  },
  {
    id: "vocab-21",
    category: "vocabulary",
    title: "Wonderful — Harika",
    keywords: ["wonderful","harika","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Very good or beautiful.",
      "🇹🇷 Çok iyi veya çok güzel."
    ],
    examples: [],
    related_word_ids: [21]
  },
  {
    id: "vocab-22",
    category: "vocabulary",
    title: "Fresh Food — Taze Yiyecek",
    keywords: ["fresh food","taze yiyecek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 \"Food that is new and not in a can.\"",
      "🇹🇷 \"Konservede olmayan, yeni yiyecek.\""
    ],
    examples: [],
    related_word_ids: [22]
  },
  {
    id: "vocab-23",
    category: "vocabulary",
    title: "Healthy — Sağlıklı",
    keywords: ["healthy","sağlıklı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Good for your body.",
      "🇹🇷 Vücudun için iyi ve yararlı olan."
    ],
    examples: [],
    related_word_ids: [23]
  },
  {
    id: "vocab-24",
    category: "vocabulary",
    title: "Public Transport — Toplu Taşıma",
    keywords: ["public transport","toplu taşıma","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Buses and trains for everyone to use.",
      "🇹🇷 Herkesin kullanması için olan otobüsler ve trenler."
    ],
    examples: [],
    related_word_ids: [24]
  },
  {
    id: "vocab-25",
    category: "vocabulary",
    title: "Terrible — Korkunç",
    keywords: ["terrible","korkunç","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Very bad.",
      "🇹🇷 Çok kötü."
    ],
    examples: [],
    related_word_ids: [25]
  },
  {
    id: "vocab-26",
    category: "vocabulary",
    title: "Ride a Bike — Bisiklete Binmek",
    keywords: ["ride a bike","bisiklete binmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To travel on a bicycle.",
      "🇹🇷 Bir bisikletin üzerinde gitmek."
    ],
    examples: [],
    related_word_ids: [26]
  },
  {
    id: "vocab-27",
    category: "vocabulary",
    title: "Alone — Yalnız",
    keywords: ["alone","yalnız","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 \"Without other people, single.\"",
      "🇹🇷 \"Başka insanlar olmadan, tek başına.\""
    ],
    examples: [],
    related_word_ids: [27]
  },
  {
    id: "vocab-28",
    category: "vocabulary",
    title: "Lonely — Yalnız Bir Şekilde",
    keywords: ["lonely","yalnız bir şekilde","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Feeling sad because you are alone.",
      "🇹🇷 Tek başına olduğun için üzgün hissetmek."
    ],
    examples: [],
    related_word_ids: [28]
  },
  {
    id: "vocab-29",
    category: "vocabulary",
    title: "Look After — İlgilenmek",
    keywords: ["look after","i̇lgilenmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To take care of someone or something.",
      "🇹🇷 Birine veya bir şeye iyi bakmak."
    ],
    examples: [],
    related_word_ids: [29]
  },
  {
    id: "vocab-30",
    category: "vocabulary",
    title: "Market — Market",
    keywords: ["market","market","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A place to buy fresh food and things.",
      "🇹🇷 Taze yiyecek ve eşyalar satın alınan yer."
    ],
    examples: [],
    related_word_ids: [30]
  },
  {
    id: "vocab-31",
    category: "vocabulary",
    title: "Outdoor — Açık Hava / Dış Mekan",
    keywords: ["outdoor","açık hava / dış mekan","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Outside a building.",
      "🇹🇷 Bir binanın dışı."
    ],
    examples: [],
    related_word_ids: [31]
  },
  {
    id: "vocab-32",
    category: "vocabulary",
    title: "Indoor — Kapalı / İç Mekan",
    keywords: ["indoor","kapalı / i̇ç mekan","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Inside a building.",
      "🇹🇷 Bir binanın içi."
    ],
    examples: [],
    related_word_ids: [32]
  },
  {
    id: "vocab-33",
    category: "vocabulary",
    title: "Shopping Centre — Alışveriş Merkezi",
    keywords: ["shopping centre","alışveriş merkezi","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A big building with many shops.",
      "🇹🇷 İçinde çok sayıda mağaza olan büyük bina."
    ],
    examples: [],
    related_word_ids: [33]
  },
  {
    id: "vocab-34",
    category: "vocabulary",
    title: "Department Store — Büyük Mağaza",
    keywords: ["department store","büyük mağaza","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A large shop with different sections.",
      "🇹🇷 Farklı bölümleri olan büyük dükkan."
    ],
    examples: [],
    related_word_ids: [34]
  },
  {
    id: "vocab-35",
    category: "vocabulary",
    title: "Hypermarket — Hipermarket",
    keywords: ["hypermarket","hipermarket","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A very big supermarket.",
      "🇹🇷 Çok büyük bir süpermarket."
    ],
    examples: [],
    related_word_ids: [35]
  },
  {
    id: "vocab-36",
    category: "vocabulary",
    title: "Butcher's — Kasap",
    keywords: ["butcher's","kasap","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A shop where you buy meat.",
      "🇹🇷 Et satın aldığın dükkan."
    ],
    examples: [],
    related_word_ids: [36]
  },
  {
    id: "vocab-37",
    category: "vocabulary",
    title: "Chemist's — Eczane",
    keywords: ["chemist's","eczane","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A shop where you buy medicine.",
      "🇹🇷 İlaç satın aldığın dükkan."
    ],
    examples: [],
    related_word_ids: [37]
  },
  {
    id: "vocab-38",
    category: "vocabulary",
    title: "Paper Shop / Newsagent — Gazete Bayii",
    keywords: ["paper shop / newsagent","gazete bayii","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A shop where you buy newspapers and magazines.",
      "🇹🇷 Gazete ve dergi satın aldığın dükkan."
    ],
    examples: [],
    related_word_ids: [38]
  },
  {
    id: "vocab-39",
    category: "vocabulary",
    title: "Convenient — Uygun",
    keywords: ["convenient","uygun","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Easy to use or easy to do.",
      "🇹🇷 Kullanması veya yapması kolay olan."
    ],
    examples: [],
    related_word_ids: [39]
  },
  {
    id: "vocab-40",
    category: "vocabulary",
    title: "Get — Edinmek / Almak",
    keywords: ["get","edinmek / almak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To take or receive something.",
      "🇹🇷 Bir şeyi almak veya elde etmek."
    ],
    examples: [],
    related_word_ids: [40]
  },
  {
    id: "vocab-41",
    category: "vocabulary",
    title: "Do The Shopping — Alışveriş Yapmak",
    keywords: ["do the shopping","alışveriş yapmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To go to shops to buy things.",
      "🇹🇷 Bir şeyler satın almak için dükkanlara gitmek."
    ],
    examples: [],
    related_word_ids: [41]
  },
  {
    id: "vocab-42",
    category: "vocabulary",
    title: "Queue — Sıra / Kuyruk",
    keywords: ["queue","sıra / kuyruk","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A line of people waiting for something.",
      "🇹🇷 Bir şey için bekleyen insan sırası."
    ],
    examples: [],
    related_word_ids: [42]
  },
  {
    id: "vocab-43",
    category: "vocabulary",
    title: "Check Out — Kasa",
    keywords: ["check out","kasa","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The place where you pay in a shop.",
      "🇹🇷 Bir mağazada aldıklarını ödediğin yer."
    ],
    examples: [],
    related_word_ids: [43]
  },
  {
    id: "vocab-44",
    category: "vocabulary",
    title: "Choose — Seçmek",
    keywords: ["choose","seçmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To pick one thing from many.",
      "🇹🇷 Birçok şey arasından bir tanesini almak."
    ],
    examples: [],
    related_word_ids: [44]
  },
  {
    id: "vocab-45",
    category: "vocabulary",
    title: "Prefer — Tercih Etmek",
    keywords: ["prefer","tercih etmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To like one thing more than another.",
      "🇹🇷 Bir şeyi diğerinden daha çok sevmek."
    ],
    examples: [],
    related_word_ids: [45]
  },
  {
    id: "vocab-46",
    category: "vocabulary",
    title: "Fill — Doldurmak",
    keywords: ["fill","doldurmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To make something full.",
      "🇹🇷 Bir şeyi tam dolu hale getirmek."
    ],
    examples: [],
    related_word_ids: [46]
  },
  {
    id: "vocab-47",
    category: "vocabulary",
    title: "Full — Dolu",
    keywords: ["full","dolu","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Having no empty space.",
      "🇹🇷 Hiç boş yeri olmayan."
    ],
    examples: [],
    related_word_ids: [47]
  },
  {
    id: "vocab-48",
    category: "vocabulary",
    title: "Trolley — Alışveriş Arabası",
    keywords: ["trolley","alışveriş arabası","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A big basket on wheels for shopping.",
      "🇹🇷 Alışveriş yapmak için tekerlekli büyük sepet."
    ],
    examples: [],
    related_word_ids: [48]
  },
  {
    id: "vocab-49",
    category: "vocabulary",
    title: "Deliver — İletmek / Ulaştırmak",
    keywords: ["deliver","i̇letmek / ulaştırmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To take things to a person's house.",
      "🇹🇷 Eşyaları bir kişinin evine götürmek."
    ],
    examples: [],
    related_word_ids: [49]
  },
  {
    id: "vocab-50",
    category: "vocabulary",
    title: "(on) The Top Floor — Üst Katta",
    keywords: ["(on) the top floor","üst katta","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The highest level of a building.",
      "🇹🇷 Bir binanın en yüksek katı."
    ],
    examples: [],
    related_word_ids: [50]
  },
  {
    id: "vocab-51",
    category: "vocabulary",
    title: "(on) The Second Floor — İkinci Katta",
    keywords: ["(on) the second floor","i̇kinci katta","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The level above the first floor.",
      "🇹🇷 Birinci katın üstündeki kat."
    ],
    examples: [],
    related_word_ids: [51]
  },
  {
    id: "vocab-52",
    category: "vocabulary",
    title: "(on) The First Floor — Birinci Katta",
    keywords: ["(on) the first floor","birinci katta","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The level above the ground floor.",
      "🇹🇷 Zemin katın üstündeki kat."
    ],
    examples: [],
    related_word_ids: [52]
  },
  {
    id: "vocab-53",
    category: "vocabulary",
    title: "(on) The Ground Floor — Zemin Katta",
    keywords: ["(on) the ground floor","zemin katta","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The level of a building at street level.",
      "🇹🇷 Bir binanın sokak seviyesindeki giriş katı."
    ],
    examples: [],
    related_word_ids: [53]
  },
  {
    id: "vocab-54",
    category: "vocabulary",
    title: "Garden — Bahçe",
    keywords: ["garden","bahçe","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The green area outside a house.",
      "🇹🇷 Bir evin dışındaki çiçekli yeşil alan."
    ],
    examples: [],
    related_word_ids: [54]
  },
  {
    id: "vocab-55",
    category: "vocabulary",
    title: "Steps — Merdivenler / Basamaklar",
    keywords: ["steps","merdivenler / basamaklar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Things you walk up or down outside.",
      "🇹🇷 İnip çıkarken yürüdüğün basamaklar."
    ],
    examples: [],
    related_word_ids: [55]
  },
  {
    id: "vocab-56",
    category: "vocabulary",
    title: "(in) The Basement — Bodrumda",
    keywords: ["(in) the basement","bodrumda","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The room under a house.",
      "🇹🇷 Bir evin altındaki yeraltı odası."
    ],
    examples: [],
    related_word_ids: [56]
  },
  {
    id: "vocab-57",
    category: "vocabulary",
    title: "Rubbish — Çöp",
    keywords: ["rubbish","çöp","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Things you do not need and throw away.",
      "🇹🇷 İhtiyacın olmayan ve çöpe attığın şeyler."
    ],
    examples: [],
    related_word_ids: [57]
  },
  {
    id: "vocab-58",
    category: "vocabulary",
    title: "Front Door — Sokak Kapısı / Ön Kapı",
    keywords: ["front door","sokak kapısı / ön kapı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The main door to enter a house.",
      "🇹🇷 Bir eve girmek için kullanılan ana kapı."
    ],
    examples: [],
    related_word_ids: [58]
  },
  {
    id: "vocab-59",
    category: "vocabulary",
    title: "Stairs — Merdivenler",
    keywords: ["stairs","merdivenler","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A set of steps inside a building.",
      "🇹🇷 Bina içindeki basamaklar dizisi."
    ],
    examples: [],
    related_word_ids: [59]
  },
  {
    id: "vocab-60",
    category: "vocabulary",
    title: "Lift — Asansör",
    keywords: ["lift","asansör","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A machine that takes you up and down in a building.",
      "🇹🇷 Binada seni katlar arası aşağı yukarı taşıyan makine."
    ],
    examples: [],
    related_word_ids: [60]
  },
  {
    id: "vocab-61",
    category: "vocabulary",
    title: "Flat — Daire",
    keywords: ["flat","daire","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A home that is part of a larger building.",
      "🇹🇷 Büyük bir binanın içinde yer alan ev."
    ],
    examples: [],
    related_word_ids: [61]
  },
  {
    id: "vocab-62",
    category: "vocabulary",
    title: "Balcony — Balkon",
    keywords: ["balcony","balkon","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 An open area outside an upstairs window.",
      "🇹🇷 Üst kat penceresinin dışındaki açık alan."
    ],
    examples: [],
    related_word_ids: [62]
  },
  {
    id: "vocab-63",
    category: "vocabulary",
    title: "Modern — Modern",
    keywords: ["modern","modern","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 New and completely different from old styles.",
      "🇹🇷 Yeni olan ve eski stillerden farklı olan."
    ],
    examples: [],
    related_word_ids: [63]
  },
  {
    id: "vocab-64",
    category: "vocabulary",
    title: "Old — Eski",
    keywords: ["old","eski","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Not new.",
      "🇹🇷 Yeni olmayan."
    ],
    examples: [],
    related_word_ids: [64]
  },
  {
    id: "vocab-65",
    category: "vocabulary",
    title: "View — Görüntü / Manzara",
    keywords: ["view","görüntü / manzara","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 What you can see from a window or high place.",
      "🇹🇷 Bir pencereden veya yüksekten görebildiğin şey."
    ],
    examples: [],
    related_word_ids: [65]
  },
  {
    id: "vocab-66",
    category: "vocabulary",
    title: "Upstairs — Üst Kat",
    keywords: ["upstairs","üst kat","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To or on a higher floor.",
      "🇹🇷 Daha yüksek bir kata veya katta."
    ],
    examples: [],
    related_word_ids: [66]
  },
  {
    id: "vocab-67",
    category: "vocabulary",
    title: "Downstairs — Alt Kat",
    keywords: ["downstairs","alt kat","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To or on a lower floor.",
      "🇹🇷 Daha alt bir kata veya katta."
    ],
    examples: [],
    related_word_ids: [67]
  },
  {
    id: "vocab-68",
    category: "vocabulary",
    title: "Outside — Dışarısı",
    keywords: ["outside","dışarısı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Not inside a building.",
      "🇹🇷 Binanın içi olmayan yer."
    ],
    examples: [],
    related_word_ids: [68]
  },
  {
    id: "vocab-69",
    category: "vocabulary",
    title: "Inside — İçerisi",
    keywords: ["inside","i̇çerisi","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 In a building or room.",
      "🇹🇷 Bir binanın veya odanın içi."
    ],
    examples: [],
    related_word_ids: [69]
  },
  {
    id: "vocab-70",
    category: "vocabulary",
    title: "Garage — Garaj",
    keywords: ["garage","garaj","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A building to keep a car safe.",
      "🇹🇷 Arabayı güvende tutmak için yapılan kapalı yer."
    ],
    examples: [],
    related_word_ids: [70]
  },
  {
    id: "vocab-71",
    category: "vocabulary",
    title: "Parking — Park Yeri",
    keywords: ["parking","park yeri","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A place to leave your car.",
      "🇹🇷 Arabanı bırakacağın yer."
    ],
    examples: [],
    related_word_ids: [71]
  },
  {
    id: "vocab-72",
    category: "vocabulary",
    title: "Living Room — Oturma Odası",
    keywords: ["living room","oturma odası","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A room where people sit and watch TV.",
      "🇹🇷 İnsanların oturup TV izlediği ana oda."
    ],
    examples: [],
    related_word_ids: [72]
  },
  {
    id: "vocab-73",
    category: "vocabulary",
    title: "Dining Room — Yemek Odası",
    keywords: ["dining room","yemek odası","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A room where you eat meals with your family.",
      "🇹🇷 Ailenle birlikte yemek yediğin oda."
    ],
    examples: [],
    related_word_ids: [73]
  },
  {
    id: "vocab-74",
    category: "vocabulary",
    title: "Study Room — Çalışma Odası",
    keywords: ["study room","çalışma odası","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A quiet room for reading and working.",
      "🇹🇷 Okumak ve çalışmak için sessiz oda."
    ],
    examples: [],
    related_word_ids: [74]
  },
  {
    id: "vocab-75",
    category: "vocabulary",
    title: "Kitchen — Mutfak",
    keywords: ["kitchen","mutfak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A room where you cook food.",
      "🇹🇷 Yemek pişirdiğin oda."
    ],
    examples: [],
    related_word_ids: [75]
  },
  {
    id: "vocab-76",
    category: "vocabulary",
    title: "Home — Ev",
    keywords: ["home","ev","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The place where you live and feel safe.",
      "🇹🇷 Yaşadığın ve güvende hissettiğin yer."
    ],
    examples: [],
    related_word_ids: [76]
  },
  {
    id: "vocab-77",
    category: "vocabulary",
    title: "House — Bina",
    keywords: ["house","bina","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A building for a family to live in.",
      "🇹🇷 Bir ailenin yaşaması için yapılmış bina."
    ],
    examples: [],
    related_word_ids: [77]
  },
  {
    id: "vocab-78",
    category: "vocabulary",
    title: "Shelf — Raf",
    keywords: ["shelf","raf","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A flat piece of wood on a wall to put books.",
      "🇹🇷 Kitap koymak için duvardaki düz tahta."
    ],
    examples: [],
    related_word_ids: [78]
  },
  {
    id: "vocab-79",
    category: "vocabulary",
    title: "Tap (turn the Tap on-off) — Musluk",
    keywords: ["tap (turn the tap on-off)","musluk","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A thing you turn to get water.",
      "🇹🇷 Su almak için açıp kapattığın şey."
    ],
    examples: [],
    related_word_ids: [79]
  },
  {
    id: "vocab-80",
    category: "vocabulary",
    title: "Cup — Fincan",
    keywords: ["cup","fincan","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A small container with a handle to drink tea.",
      "🇹🇷 Çay içmek için kulplu küçük kap."
    ],
    examples: [],
    related_word_ids: [80]
  },
  {
    id: "vocab-81",
    category: "vocabulary",
    title: "Microwave — Mikrodalga",
    keywords: ["microwave","mikrodalga","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A machine that cooks food very fast.",
      "🇹🇷 Yiyecekleri çok hızlı ısıtan küçük makine."
    ],
    examples: [],
    related_word_ids: [81]
  },
  {
    id: "vocab-82",
    category: "vocabulary",
    title: "Frying Pan — Kızartma Tavası",
    keywords: ["frying pan","kızartma tavası","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A flat pan used for cooking food in oil.",
      "🇹🇷 Yağda yemek pişirmek için kullanılan düz tava."
    ],
    examples: [],
    related_word_ids: [82]
  },
  {
    id: "vocab-83",
    category: "vocabulary",
    title: "Freezer — Dondurucu",
    keywords: ["freezer","dondurucu","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A very cold machine to make ice.",
      "🇹🇷 Buz yapmak için kullanılan çok soğuk makine."
    ],
    examples: [],
    related_word_ids: [83]
  },
  {
    id: "vocab-84",
    category: "vocabulary",
    title: "Sink — Lavabo",
    keywords: ["sink","lavabo","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A place in the kitchen to wash dishes.",
      "🇹🇷 Mutfakta bulaşık yıkamak için olan yer."
    ],
    examples: [],
    related_word_ids: [84]
  },
  {
    id: "vocab-85",
    category: "vocabulary",
    title: "Saucer — Çay Tabağı / Fincan Tabağı",
    keywords: ["saucer","çay tabağı / fincan tabağı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A small plate under a cup.",
      "🇹🇷 Fincanın altına konulan küçük tabak."
    ],
    examples: [],
    related_word_ids: [85]
  },
  {
    id: "vocab-86",
    category: "vocabulary",
    title: "Hob — Set Üstü Ocak",
    keywords: ["hob","set üstü ocak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The top part of a cooker where you cook.",
      "🇹🇷 Ocağın üzerinde yemek pişirilen üst kısmı."
    ],
    examples: [],
    related_word_ids: [86]
  },
  {
    id: "vocab-87",
    category: "vocabulary",
    title: "Saucepan — Sos Tavası",
    keywords: ["saucepan","sos tavası","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A deep pan for boiling food.",
      "🇹🇷 Yemek kaynatmak için kullanılan derin kap."
    ],
    examples: [],
    related_word_ids: [87]
  },
  {
    id: "vocab-88",
    category: "vocabulary",
    title: "(rubbish) Bin — Çöp Kovası",
    keywords: ["(rubbish) bin","çöp kovası","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A container for things you throw away.",
      "🇹🇷 Çöpe atacağın şeyler için kullandığın kutu."
    ],
    examples: [],
    related_word_ids: [88]
  },
  {
    id: "vocab-89",
    category: "vocabulary",
    title: "Full — Dolu",
    keywords: ["full","dolu","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Having no space for more things.",
      "🇹🇷 İçine daha fazla şey alacak yeri olmayan."
    ],
    examples: [],
    related_word_ids: [89]
  },
  {
    id: "vocab-90",
    category: "vocabulary",
    title: "Empty — Boş",
    keywords: ["empty","boş","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Having nothing inside.",
      "🇹🇷 İçinde hiçbir şey olmayan."
    ],
    examples: [],
    related_word_ids: [90]
  },
  {
    id: "vocab-91",
    category: "vocabulary",
    title: "Oven — Fırın",
    keywords: ["oven","fırın","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A machine used for baking food like pizza.",
      "🇹🇷 Pizza veya kek pişirmek için kullanılan makine."
    ],
    examples: [],
    related_word_ids: [91]
  },
  {
    id: "vocab-92",
    category: "vocabulary",
    title: "Fridge — Buzdolabı",
    keywords: ["fridge","buzdolabı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A cold machine to keep food fresh.",
      "🇹🇷 Yiyecekleri taze tutmak için kullanılan soğuk makine."
    ],
    examples: [],
    related_word_ids: [92]
  },
  {
    id: "vocab-93",
    category: "vocabulary",
    title: "Washing Machine — Çamaşır Makinası",
    keywords: ["washing machine","çamaşır makinası","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A machine that cleans dirty clothes.",
      "🇹🇷 Kirli kıyafetleri temizleyen makine."
    ],
    examples: [],
    related_word_ids: [93]
  },
  {
    id: "vocab-94",
    category: "vocabulary",
    title: "Cupboard — Dolap",
    keywords: ["cupboard","dolap","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A place with doors to keep things inside.",
      "🇹🇷 İçinde eşyaları tutmak için kapakları olan yer."
    ],
    examples: [],
    related_word_ids: [94]
  },
  {
    id: "vocab-95",
    category: "vocabulary",
    title: "Dishwasher — Bulaşık Makinası",
    keywords: ["dishwasher","bulaşık makinası","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A machine that cleans cups and plates.",
      "🇹🇷 Fincan ve tabakları yıkayan makine."
    ],
    examples: [],
    related_word_ids: [95]
  },
  {
    id: "vocab-96",
    category: "vocabulary",
    title: "Cooker — Ocak",
    keywords: ["cooker","ocak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A machine used to cook hot food.",
      "🇹🇷 Sıcak yemek pişirmek için kullanılan ana makine."
    ],
    examples: [],
    related_word_ids: [96]
  },
  {
    id: "vocab-97",
    category: "vocabulary",
    title: "Do The Shopping — Alışveriş Yapmak",
    keywords: ["do the shopping","alışveriş yapmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To buy food and things from shops.",
      "🇹🇷 Mağazalardan yiyecek ve eşya satın almak."
    ],
    examples: [],
    related_word_ids: [97]
  },
  {
    id: "vocab-98",
    category: "vocabulary",
    title: "Clean — Temizlemek",
    keywords: ["clean","temizlemek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To wash something so it is not dirty.",
      "🇹🇷 Kirli olmaması için bir şeyi yıkamak/silmek."
    ],
    examples: [],
    related_word_ids: [98]
  },
  {
    id: "vocab-99",
    category: "vocabulary",
    title: "Take — Almak",
    keywords: ["take","almak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To move something from one place to another.",
      "🇹🇷 Bir şeyi bir yerden başka bir yere götürmek."
    ],
    examples: [],
    related_word_ids: [99]
  },
  {
    id: "vocab-100",
    category: "vocabulary",
    title: "Make — Yapmak",
    keywords: ["make","yapmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To create or build something new.",
      "🇹🇷 Yeni bir şey yaratmak veya inşa etmek."
    ],
    examples: [],
    related_word_ids: [100]
  },
  {
    id: "vocab-101",
    category: "vocabulary",
    title: "Do the Ironing — Ütü Yapmak",
    keywords: ["do the ironing","ütü yapmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To make clothes flat and smooth.",
      "🇹🇷 Kıyafetleri düz ve pürüzsüz yapmak."
    ],
    examples: [],
    related_word_ids: [101]
  },
  {
    id: "vocab-102",
    category: "vocabulary",
    title: "Do the Washing Up — Bulaşıkları Yıkamak",
    keywords: ["do the washing up","bulaşıkları yıkamak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To clean plates and cups after eating.",
      "🇹🇷 Yemekten sonra tabak ve fincanları yıkamak."
    ],
    examples: [],
    related_word_ids: [102]
  },
  {
    id: "vocab-103",
    category: "vocabulary",
    title: "Housework — Ev İşi",
    keywords: ["housework","ev i̇şi","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The work you do to keep a house clean.",
      "🇹🇷 Evi temiz tutmak için yapılan işler."
    ],
    examples: [],
    related_word_ids: [103]
  },
  {
    id: "vocab-104",
    category: "vocabulary",
    title: "Homework — Ev Ödevi",
    keywords: ["homework","ev ödevi","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 School work you do at home.",
      "🇹🇷 Evde yaptığın okul işi."
    ],
    examples: [],
    related_word_ids: [104]
  },
  {
    id: "vocab-105",
    category: "vocabulary",
    title: "Bedroom — Yatak Odası",
    keywords: ["bedroom","yatak odası","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A room where you sleep.",
      "🇹🇷 Uyuduğun oda."
    ],
    examples: [],
    related_word_ids: [105]
  },
  {
    id: "vocab-106",
    category: "vocabulary",
    title: "Single Bed — Tekli Yatak",
    keywords: ["single bed","tekli yatak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A bed for one person.",
      "🇹🇷 Bir kişi için olan yatak."
    ],
    examples: [],
    related_word_ids: [106]
  },
  {
    id: "vocab-107",
    category: "vocabulary",
    title: "Bedside Table — Komodin",
    keywords: ["bedside table","komodin","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A small table next to a bed.",
      "🇹🇷 Yatağın yanındaki küçük masa."
    ],
    examples: [],
    related_word_ids: [107]
  },
  {
    id: "vocab-108",
    category: "vocabulary",
    title: "Desk — Sıra / Masa",
    keywords: ["desk","sıra / masa","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A table for studying or working.",
      "🇹🇷 Ders çalışmak veya çalışmak için masa."
    ],
    examples: [],
    related_word_ids: [108]
  },
  {
    id: "vocab-109",
    category: "vocabulary",
    title: "Chest of Drawers — Çekmeceler",
    keywords: ["chest of drawers","çekmeceler","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A piece of furniture to keep clothes.",
      "🇹🇷 Kıyafetleri koymak için çekmeceli mobilya."
    ],
    examples: [],
    related_word_ids: [109]
  },
  {
    id: "vocab-110",
    category: "vocabulary",
    title: "Wardrobe — Gardırop",
    keywords: ["wardrobe","gardırop","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A tall cupboard for hanging clothes.",
      "🇹🇷 Kıyafetleri asmak için uzun dolap."
    ],
    examples: [],
    related_word_ids: [110]
  },
  {
    id: "vocab-111",
    category: "vocabulary",
    title: "Bath — Banyo",
    keywords: ["bath","banyo","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A large tub to wash your body in.",
      "🇹🇷 Vücudunu yıkamak için büyük küvet."
    ],
    examples: [],
    related_word_ids: [111]
  },
  {
    id: "vocab-112",
    category: "vocabulary",
    title: "Shower — Duş",
    keywords: ["shower","duş","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Washing your body under falling water.",
      "🇹🇷 Akan suyun altında vücudunu yıkamak."
    ],
    examples: [],
    related_word_ids: [112]
  },
  {
    id: "vocab-113",
    category: "vocabulary",
    title: "Wash Basin — Lavabo",
    keywords: ["wash basin","lavabo","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A place in the bathroom to wash hands.",
      "🇹🇷 Banyoda el yıkamak için olan yer."
    ],
    examples: [],
    related_word_ids: [113]
  },
  {
    id: "vocab-114",
    category: "vocabulary",
    title: "Mirror — Ayna",
    keywords: ["mirror","ayna","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A glass where you can see yourself.",
      "🇹🇷 Kendini görebildiğin cam."
    ],
    examples: [],
    related_word_ids: [114]
  },
  {
    id: "vocab-115",
    category: "vocabulary",
    title: "Blanket — Battaniye",
    keywords: ["blanket","battaniye","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A warm cover for a bed.",
      "🇹🇷 Yatak için sıcak tutan örtü."
    ],
    examples: [],
    related_word_ids: [115]
  },
  {
    id: "vocab-116",
    category: "vocabulary",
    title: "Sheets — Çarşaflar",
    keywords: ["sheets","çarşaflar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Thin cotton covers for a bed.",
      "🇹🇷 Yatak için ince pamuklu örtüler."
    ],
    examples: [],
    related_word_ids: [116]
  },
  {
    id: "vocab-117",
    category: "vocabulary",
    title: "Towels — Havlular",
    keywords: ["towels","havlular","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Soft pieces of cloth to dry your body.",
      "🇹🇷 Vücudunu kurulamak için yumuşak kumaşlar."
    ],
    examples: [],
    related_word_ids: [117]
  },
  {
    id: "vocab-118",
    category: "vocabulary",
    title: "Soap — Sabun",
    keywords: ["soap","sabun","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Something you use with water to wash.",
      "🇹🇷 Yıkanmak için suyla kullandığın şey."
    ],
    examples: [],
    related_word_ids: [118]
  },
  {
    id: "vocab-119",
    category: "vocabulary",
    title: "Have a Wash — Yıkanmak",
    keywords: ["have a wash","yıkanmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To clean your body.",
      "🇹🇷 Vücudunu temizlemek."
    ],
    examples: [],
    related_word_ids: [119]
  },
  {
    id: "vocab-120",
    category: "vocabulary",
    title: "Clean Your Teeth — Dişlerini Temizlemek",
    keywords: ["clean your teeth","dişlerini temizlemek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To brush your teeth.",
      "🇹🇷 Dişlerini fırçalamak."
    ],
    examples: [],
    related_word_ids: [120]
  },
  {
    id: "vocab-121",
    category: "vocabulary",
    title: "Wash Your Hair — Saçlarını Yıkamak",
    keywords: ["wash your hair","saçlarını yıkamak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To clean the hair on your head.",
      "🇹🇷 Başındaki saçları temizlemek."
    ],
    examples: [],
    related_word_ids: [121]
  },
  {
    id: "vocab-122",
    category: "vocabulary",
    title: "Have a Shave — Tıraş Olmak",
    keywords: ["have a shave","tıraş olmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To cut hair from the face.",
      "🇹🇷 Yüzdeki kılları kesmek."
    ],
    examples: [],
    related_word_ids: [122]
  },
  {
    id: "vocab-123",
    category: "vocabulary",
    title: "Put On Make Up — Makyaj Yapmak",
    keywords: ["put on make up","makyaj yapmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To use color on your face to look nice.",
      "🇹🇷 Güzel görünmek için yüze renk sürmek."
    ],
    examples: [],
    related_word_ids: [123]
  },
  {
    id: "vocab-124",
    category: "vocabulary",
    title: "Take Off Make Up — Makyajı Çıkarmak / Silmek",
    keywords: ["take off make up","makyajı çıkarmak / silmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To clean color from your face.",
      "🇹🇷 Yüzündeki boyayı temizlemek."
    ],
    examples: [],
    related_word_ids: [124]
  },
  {
    id: "vocab-125",
    category: "vocabulary",
    title: "Tissue — Mendil",
    keywords: ["tissue","mendil","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Soft paper to clean your nose or face.",
      "🇹🇷 Burnunu veya yüzünü temizlemek için yumuşak kağıt."
    ],
    examples: [],
    related_word_ids: [125]
  },
  {
    id: "vocab-126",
    category: "vocabulary",
    title: "Put On Perfume — Parfüm Sıkmak",
    keywords: ["put on perfume","parfüm sıkmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To put sweet-smelling liquid on yourself.",
      "🇹🇷 Üzerine güzel kokulu sıvı sıkmak."
    ],
    examples: [],
    related_word_ids: [126]
  },
  {
    id: "vocab-127",
    category: "vocabulary",
    title: "Wear Perfume — Parfüm Sıkmak",
    keywords: ["wear perfume","parfüm sıkmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To have a nice smell on your body.",
      "🇹🇷 Vücudunda güzel bir koku olması."
    ],
    examples: [],
    related_word_ids: [127]
  },
  {
    id: "vocab-128",
    category: "vocabulary",
    title: "A Razor — Jilet",
    keywords: ["a razor","jilet","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A sharp tool for shaving.",
      "🇹🇷 Tıraş olmak için keskin alet."
    ],
    examples: [],
    related_word_ids: [128]
  },
  {
    id: "vocab-129",
    category: "vocabulary",
    title: "Toothpaste — Diş Macunu",
    keywords: ["toothpaste","diş macunu","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The paste you use to clean your teeth.",
      "🇹🇷 Dişlerini temizlemek için kullandığın macun."
    ],
    examples: [],
    related_word_ids: [129]
  },
  {
    id: "vocab-130",
    category: "vocabulary",
    title: "Toothbrush — Diş Fırçası",
    keywords: ["toothbrush","diş fırçası","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A small brush for your teeth.",
      "🇹🇷 Dişlerin için küçük fırça."
    ],
    examples: [],
    related_word_ids: [130]
  },
  {
    id: "vocab-131",
    category: "vocabulary",
    title: "Window — Pencere",
    keywords: ["window","pencere","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A glass hole in a wall to look outside.",
      "🇹🇷 Dışarı bakmak için duvardaki camlı boşluk."
    ],
    examples: [],
    related_word_ids: [131]
  },
  {
    id: "vocab-132",
    category: "vocabulary",
    title: "Light — Işık",
    keywords: ["light","işık","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Something that helps you see in the dark.",
      "🇹🇷 Karanlıkta görmene yardım eden şey."
    ],
    examples: [],
    related_word_ids: [132]
  },
  {
    id: "vocab-133",
    category: "vocabulary",
    title: "Ceiling — Tavan",
    keywords: ["ceiling","tavan","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The top part of a room.",
      "🇹🇷 Bir odanın üst kısmı."
    ],
    examples: [],
    related_word_ids: [133]
  },
  {
    id: "vocab-134",
    category: "vocabulary",
    title: "Wall — Duvar",
    keywords: ["wall","duvar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The side of a room or building.",
      "🇹🇷 Bir odanın veya binanın yanı."
    ],
    examples: [],
    related_word_ids: [134]
  },
  {
    id: "vocab-135",
    category: "vocabulary",
    title: "Curtains — Perdeler",
    keywords: ["curtains","perdeler","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Pieces of cloth to cover a window.",
      "🇹🇷 Bir pencereyi kapatmak için kumaş parçaları."
    ],
    examples: [],
    related_word_ids: [135]
  },
  {
    id: "vocab-136",
    category: "vocabulary",
    title: "Cushion — Minder / Yastık",
    keywords: ["cushion","minder / yastık","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A soft bag to sit on or put on a sofa.",
      "🇹🇷 Üzerine oturmak veya koltuğa koymak için yumuşak yastık."
    ],
    examples: [],
    related_word_ids: [136]
  },
  {
    id: "vocab-137",
    category: "vocabulary",
    title: "Lamp — Lamba",
    keywords: ["lamp","lamba","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 An object that makes light.",
      "🇹🇷 Işık veren nesne."
    ],
    examples: [],
    related_word_ids: [137]
  },
  {
    id: "vocab-138",
    category: "vocabulary",
    title: "Armchair — Tekli Koltuk",
    keywords: ["armchair","tekli koltuk","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A comfortable chair for one person.",
      "🇹🇷 Bir kişi için rahat koltuk."
    ],
    examples: [],
    related_word_ids: [138]
  },
  {
    id: "vocab-139",
    category: "vocabulary",
    title: "Coffee Table — Orta Sehpa",
    keywords: ["coffee table","orta sehpa","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A low table for the living room.",
      "🇹🇷 Oturma odası için alçak masa."
    ],
    examples: [],
    related_word_ids: [139]
  },
  {
    id: "vocab-140",
    category: "vocabulary",
    title: "Floor — Yer / Kat",
    keywords: ["floor","yer / kat","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The part of a room where you walk.",
      "🇹🇷 Odanın yürüdüğün kısmı."
    ],
    examples: [],
    related_word_ids: [140]
  },
  {
    id: "vocab-141",
    category: "vocabulary",
    title: "Sofa — Çekyat",
    keywords: ["sofa","çekyat","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A long comfortable seat for 2 or 3 people.",
      "🇹🇷 2 veya 3 kişi için uzun rahat koltuk."
    ],
    examples: [],
    related_word_ids: [141]
  },
  {
    id: "vocab-142",
    category: "vocabulary",
    title: "Rug — Kilim",
    keywords: ["rug","kilim","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A small carpet for the floor.",
      "🇹🇷 Yer için küçük halı."
    ],
    examples: [],
    related_word_ids: [142]
  },
  {
    id: "vocab-143",
    category: "vocabulary",
    title: "Carpet — Halı",
    keywords: ["carpet","halı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A thick cover for the floor.",
      "🇹🇷 Yer için kalın örtü."
    ],
    examples: [],
    related_word_ids: [143]
  },
  {
    id: "vocab-144",
    category: "vocabulary",
    title: "Chemistry — Kimya",
    keywords: ["chemistry","kimya","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The science of what things are made of.",
      "🇹🇷 Şeylerin nelerden yapıldığını inceleyen bilim."
    ],
    examples: [],
    related_word_ids: [144]
  },
  {
    id: "vocab-145",
    category: "vocabulary",
    title: "Physics — Fizik",
    keywords: ["physics","fizik","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The science of energy and moving things.",
      "🇹🇷 Enerji ve hareket eden şeylerin bilimi."
    ],
    examples: [],
    related_word_ids: [145]
  },
  {
    id: "vocab-146",
    category: "vocabulary",
    title: "Biology — Biyoloji",
    keywords: ["biology","biyoloji","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The science of living things.",
      "🇹🇷 Canlıların bilimi."
    ],
    examples: [],
    related_word_ids: [146]
  },
  {
    id: "vocab-147",
    category: "vocabulary",
    title: "Maths — Matematik",
    keywords: ["maths","matematik","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The study of numbers.",
      "🇹🇷 Sayıların bilimi."
    ],
    examples: [],
    related_word_ids: [147]
  },
  {
    id: "vocab-148",
    category: "vocabulary",
    title: "Geography — Coğrafya",
    keywords: ["geography","coğrafya","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The study of the world and places.",
      "🇹🇷 Dünyanın ve yerlerin bilimi."
    ],
    examples: [],
    related_word_ids: [148]
  },
  {
    id: "vocab-149",
    category: "vocabulary",
    title: "History — Tarih",
    keywords: ["history","tarih","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The study of things in the past.",
      "🇹🇷 Geçmişteki şeylerin incelenmesi."
    ],
    examples: [],
    related_word_ids: [149]
  },
  {
    id: "vocab-150",
    category: "vocabulary",
    title: "Literature — Edebiyat",
    keywords: ["literature","edebiyat","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The study of written books and poems.",
      "🇹🇷 Yazılmış kitapların ve şiirlerin incelenmesi."
    ],
    examples: [],
    related_word_ids: [150]
  },
  {
    id: "vocab-151",
    category: "vocabulary",
    title: "Art — Resim / Sanat",
    keywords: ["art","resim / sanat","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Making beautiful things like drawings.",
      "🇹🇷 Çizim gibi güzel şeyler yapma."
    ],
    examples: [],
    related_word_ids: [151]
  },
  {
    id: "vocab-152",
    category: "vocabulary",
    title: "Subjects — Konular / Dersler",
    keywords: ["subjects","konular / dersler","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The things you learn at school.",
      "🇹🇷 Okulda öğrendiğin şeyler."
    ],
    examples: [],
    related_word_ids: [152]
  },
  {
    id: "vocab-153",
    category: "vocabulary",
    title: "Good at Something — Bir Şeyde İyi Olmak",
    keywords: ["good at something","bir şeyde i̇yi olmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To do something very well.",
      "🇹🇷 Bir şeyi çok iyi yapmak."
    ],
    examples: [],
    related_word_ids: [153]
  },
  {
    id: "vocab-154",
    category: "vocabulary",
    title: "Bad at Something — Bir Şeyde Kötü Olmak",
    keywords: ["bad at something","bir şeyde kötü olmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To not do something well.",
      "🇹🇷 Bir şeyi iyi yapamamak."
    ],
    examples: [],
    related_word_ids: [154]
  },
  {
    id: "vocab-155",
    category: "vocabulary",
    title: "Terrible At — Bir Şeyde Çok Kötü Olmak",
    keywords: ["terrible at","bir şeyde çok kötü olmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 \"To do something very, very badly.\"",
      "🇹🇷 Bir şeyi çok ama çok kötü yapmak."
    ],
    examples: [],
    related_word_ids: [155]
  },
  {
    id: "vocab-156",
    category: "vocabulary",
    title: "Kindergarten — Anaokulu / Kreş",
    keywords: ["kindergarten","anaokulu / kreş","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A school for very young children.",
      "🇹🇷 Çok küçük çocuklar için okul."
    ],
    examples: [],
    related_word_ids: [156]
  },
  {
    id: "vocab-157",
    category: "vocabulary",
    title: "Primary School — İlkokul",
    keywords: ["primary school","i̇lkokul","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A school for young children.",
      "🇹🇷 Küçük çocuklar için okul."
    ],
    examples: [],
    related_word_ids: [157]
  },
  {
    id: "vocab-158",
    category: "vocabulary",
    title: "Secondary School — Ortaokul",
    keywords: ["secondary school","ortaokul","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A school for older children.",
      "🇹🇷 Daha büyük çocuklar için okul."
    ],
    examples: [],
    related_word_ids: [158]
  },
  {
    id: "vocab-159",
    category: "vocabulary",
    title: "State School — Devlet Okulu",
    keywords: ["state school","devlet okulu","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A free school paid for by the government.",
      "🇹🇷 Hükümetin ödediği ücretsiz okul."
    ],
    examples: [],
    related_word_ids: [159]
  },
  {
    id: "vocab-160",
    category: "vocabulary",
    title: "Private School — Özel Okul",
    keywords: ["private school","özel okul","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A school where parents pay money.",
      "🇹🇷 Ailelerin para ödediği okul."
    ],
    examples: [],
    related_word_ids: [160]
  },
  {
    id: "vocab-161",
    category: "vocabulary",
    title: "Start at School — Okula Başlamak",
    keywords: ["start at school","okula başlamak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To begin going to school.",
      "🇹🇷 Okula gitmeye başlamak."
    ],
    examples: [],
    related_word_ids: [161]
  },
  {
    id: "vocab-162",
    category: "vocabulary",
    title: "Leave School — Okuldan Ayrılmak",
    keywords: ["leave school","okuldan ayrılmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To finish your time at school.",
      "🇹🇷 Okuldaki zamanını bitirmek."
    ],
    examples: [],
    related_word_ids: [162]
  },
  {
    id: "vocab-163",
    category: "vocabulary",
    title: "Get a Job — İşe Girmek / İş Bulmak",
    keywords: ["get a job","i̇şe girmek / i̇ş bulmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To find work to earn money.",
      "🇹🇷 Para kazanmak için iş bulmak."
    ],
    examples: [],
    related_word_ids: [163]
  },
  {
    id: "vocab-164",
    category: "vocabulary",
    title: "Take Exam — Sınav Olmak",
    keywords: ["take exam","sınav olmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To answer questions to show what you know.",
      "🇹🇷 Ne bildiğini göstermek için soruları cevaplamak."
    ],
    examples: [],
    related_word_ids: [164]
  },
  {
    id: "vocab-165",
    category: "vocabulary",
    title: "Pass an Exam — Bir Sınavı Geçmek",
    keywords: ["pass an exam","bir sınavı geçmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To get a good mark in a test.",
      "🇹🇷 Bir testte iyi bir not almak."
    ],
    examples: [],
    related_word_ids: [165]
  },
  {
    id: "vocab-166",
    category: "vocabulary",
    title: "Fail an Exam — Bir Sınavdan Kalmak",
    keywords: ["fail an exam","bir sınavdan kalmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To get a bad mark in a test.",
      "🇹🇷 Bir testte kötü bir not almak."
    ],
    examples: [],
    related_word_ids: [166]
  },
  {
    id: "vocab-167",
    category: "vocabulary",
    title: "Result — Sonuç",
    keywords: ["result","sonuç","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The mark you get at the end of a test.",
      "🇹🇷 Bir testin sonunda aldığın not."
    ],
    examples: [],
    related_word_ids: [167]
  },
  {
    id: "vocab-168",
    category: "vocabulary",
    title: "Grade — Not / Sınav Sonucu",
    keywords: ["grade","not / sınav sonucu","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A letter or number showing how well you did.",
      "🇹🇷 Ne kadar iyi yaptığını gösteren harf veya sayı."
    ],
    examples: [],
    related_word_ids: [168]
  },
  {
    id: "vocab-169",
    category: "vocabulary",
    title: "Get a Grade — Sınav Sonucu Almak",
    keywords: ["get a grade","sınav sonucu almak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To receive your mark for a test.",
      "🇹🇷 Bir test için notunu almak."
    ],
    examples: [],
    related_word_ids: [169]
  },
  {
    id: "vocab-170",
    category: "vocabulary",
    title: "Do Well — İyi Yapmak",
    keywords: ["do well","i̇yi yapmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To be successful at something.",
      "🇹🇷 Bir şeyde başarılı olmak."
    ],
    examples: [],
    related_word_ids: [170]
  },
  {
    id: "vocab-171",
    category: "vocabulary",
    title: "Do Badly — Kötü Bir Şekilde Yapmak",
    keywords: ["do badly","kötü bir şekilde yapmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To not be successful at something.",
      "🇹🇷 Bir şeyde başarılı olamamak."
    ],
    examples: [],
    related_word_ids: [171]
  },
  {
    id: "vocab-172",
    category: "vocabulary",
    title: "Do a Degree — Derece Yapmak",
    keywords: ["do a degree","derece yapmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To study at a university.",
      "🇹🇷 Üniversitede okumak."
    ],
    examples: [],
    related_word_ids: [172]
  },
  {
    id: "vocab-173",
    category: "vocabulary",
    title: "Term — Dönem",
    keywords: ["term","dönem","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A part of the school year.",
      "🇹🇷 Okul yılının bir bölümü."
    ],
    examples: [],
    related_word_ids: [173]
  },
  {
    id: "vocab-174",
    category: "vocabulary",
    title: "Library — Kütüphane",
    keywords: ["library","kütüphane","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A quiet place with many books to read.",
      "🇹🇷 Okumak için çok sayıda kitabın olduğu sessiz yer."
    ],
    examples: [],
    related_word_ids: [174]
  },
  {
    id: "vocab-175",
    category: "vocabulary",
    title: "Undergraduate — Lisans Öğrencisi",
    keywords: ["undergraduate","lisans öğrencisi","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A university student studying for their first degree.",
      "🇹🇷 İlk derecesi için okuyan üniversite öğrencisi."
    ],
    examples: [],
    related_word_ids: [175]
  },
  {
    id: "vocab-176",
    category: "vocabulary",
    title: "Write an Essay — Bir Deneme Yazısı Yazmak",
    keywords: ["write an essay","bir deneme yazısı yazmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To write a short text on a subject.",
      "🇹🇷 Bir konu hakkında kısa bir metin yazmak."
    ],
    examples: [],
    related_word_ids: [176]
  },
  {
    id: "vocab-177",
    category: "vocabulary",
    title: "Again — Yeniden",
    keywords: ["again","yeniden","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 One more time.",
      "🇹🇷 Bir kez daha."
    ],
    examples: [],
    related_word_ids: [177]
  },
  {
    id: "vocab-178",
    category: "vocabulary",
    title: "Psychology — Psikoloji",
    keywords: ["psychology","psikoloji","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The study of the mind.",
      "🇹🇷 Zihin bilimi."
    ],
    examples: [],
    related_word_ids: [178]
  },
  {
    id: "vocab-179",
    category: "vocabulary",
    title: "A Psychologist — Psikolog",
    keywords: ["a psychologist","psikolog","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A doctor for the mind.",
      "🇹🇷 Zihin doktoru."
    ],
    examples: [],
    related_word_ids: [179]
  },
  {
    id: "vocab-180",
    category: "vocabulary",
    title: "Economics — Ekonomi",
    keywords: ["economics","ekonomi","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The study of money and business.",
      "🇹🇷 Para ve iş dünyasının bilimi."
    ],
    examples: [],
    related_word_ids: [180]
  },
  {
    id: "vocab-181",
    category: "vocabulary",
    title: "Economist — Ekonomist",
    keywords: ["economist","ekonomist","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 An expert in money and business.",
      "🇹🇷 Para ve iş dünyasında uzman."
    ],
    examples: [],
    related_word_ids: [181]
  },
  {
    id: "vocab-182",
    category: "vocabulary",
    title: "Law — Hukuk",
    keywords: ["law","hukuk","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The rules of a country.",
      "🇹🇷 Bir ülkenin kuralları."
    ],
    examples: [],
    related_word_ids: [182]
  },
  {
    id: "vocab-183",
    category: "vocabulary",
    title: "Lawyer — Avukat",
    keywords: ["lawyer","avukat","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who helps people with the law.",
      "🇹🇷 İnsanlara hukuk konusunda yardım eden kişi."
    ],
    examples: [],
    related_word_ids: [183]
  },
  {
    id: "vocab-184",
    category: "vocabulary",
    title: "Politics — Siyaset",
    keywords: ["politics","siyaset","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The work of running a country.",
      "🇹🇷 Bir ülkeyi yönetme işi."
    ],
    examples: [],
    related_word_ids: [184]
  },
  {
    id: "vocab-185",
    category: "vocabulary",
    title: "A Politician — Siyasetçi",
    keywords: ["a politician","siyasetçi","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who works in the government.",
      "🇹🇷 Hükümette çalışan kişi."
    ],
    examples: [],
    related_word_ids: [185]
  },
  {
    id: "vocab-186",
    category: "vocabulary",
    title: "Engineering — Mühendislik",
    keywords: ["engineering","mühendislik","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The work of designing roads or machines.",
      "🇹🇷 Yollar veya makineler tasarlama işi."
    ],
    examples: [],
    related_word_ids: [186]
  },
  {
    id: "vocab-187",
    category: "vocabulary",
    title: "An Engineer — Mühendis",
    keywords: ["an engineer","mühendis","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who designs machines or buildings.",
      "🇹🇷 Makineler veya binalar tasarlayan kişi."
    ],
    examples: [],
    related_word_ids: [187]
  },
  {
    id: "vocab-188",
    category: "vocabulary",
    title: "Architecture — Mimarlık",
    keywords: ["architecture","mimarlık","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The art of designing buildings.",
      "🇹🇷 Binalar tasarlama sanatı."
    ],
    examples: [],
    related_word_ids: [188]
  },
  {
    id: "vocab-189",
    category: "vocabulary",
    title: "An Architect — Mimar",
    keywords: ["an architect","mimar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who draws plans for houses.",
      "🇹🇷 Evler için planlar çizen kişi."
    ],
    examples: [],
    related_word_ids: [189]
  },
  {
    id: "vocab-190",
    category: "vocabulary",
    title: "A Builder — İnşaatçı",
    keywords: ["a builder","i̇nşaatçı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who makes buildings.",
      "🇹🇷 Binalar yapan kişi."
    ],
    examples: [],
    related_word_ids: [190]
  },
  {
    id: "vocab-191",
    category: "vocabulary",
    title: "A Teacher — Öğretmen",
    keywords: ["a teacher","öğretmen","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who helps students learn.",
      "🇹🇷 Öğrencilerin öğrenmesine yardım eden kişi."
    ],
    examples: [],
    related_word_ids: [191]
  },
  {
    id: "vocab-192",
    category: "vocabulary",
    title: "A Shop Assistant — Satıcı",
    keywords: ["a shop assistant","satıcı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who works in a shop.",
      "🇹🇷 Bir dükkanda çalışan kişi."
    ],
    examples: [],
    related_word_ids: [192]
  },
  {
    id: "vocab-193",
    category: "vocabulary",
    title: "A Nurse — Hemşire",
    keywords: ["a nurse","hemşire","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who helps doctors in a hospital.",
      "🇹🇷 Hastanede doktorlara yardım eden kişi."
    ],
    examples: [],
    related_word_ids: [193]
  },
  {
    id: "vocab-194",
    category: "vocabulary",
    title: "A Secretary — Sekreter",
    keywords: ["a secretary","sekreter","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who works in an office and answers phones.",
      "🇹🇷 Ofiste çalışan ve telefonlara bakan kişi."
    ],
    examples: [],
    related_word_ids: [194]
  },
  {
    id: "vocab-195",
    category: "vocabulary",
    title: "A Hairdresser — Kuaför",
    keywords: ["a hairdresser","kuaför","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who cuts and styles hair.",
      "🇹🇷 Saçları kesen ve şekil veren kişi."
    ],
    examples: [],
    related_word_ids: [195]
  },
  {
    id: "vocab-196",
    category: "vocabulary",
    title: "A Chef — Şef",
    keywords: ["a chef","şef","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who cooks food in a restaurant.",
      "🇹🇷 Restoranda yemek pişiren kişi."
    ],
    examples: [],
    related_word_ids: [196]
  },
  {
    id: "vocab-197",
    category: "vocabulary",
    title: "A Dentist — Dişçi",
    keywords: ["a dentist","dişçi","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A doctor for your teeth.",
      "🇹🇷 Dişleriniz için doktor."
    ],
    examples: [],
    related_word_ids: [197]
  },
  {
    id: "vocab-198",
    category: "vocabulary",
    title: "A Soldier — Asker",
    keywords: ["a soldier","asker","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person in the army.",
      "🇹🇷 Ordudaki kişi."
    ],
    examples: [],
    related_word_ids: [198]
  },
  {
    id: "vocab-199",
    category: "vocabulary",
    title: "A Cleaner — Temizlikçi",
    keywords: ["a cleaner","temizlikçi","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person whose job is to clean places.",
      "🇹🇷 İşi yerleri temizlemek olan kişi."
    ],
    examples: [],
    related_word_ids: [199]
  },
  {
    id: "vocab-200",
    category: "vocabulary",
    title: "A Vet — Veteriner",
    keywords: ["a vet","veteriner","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A doctor for animals.",
      "🇹🇷 Hayvanlar için doktor."
    ],
    examples: [],
    related_word_ids: [200]
  },
  {
    id: "vocab-201",
    category: "vocabulary",
    title: "A Pilot — Pilot",
    keywords: ["a pilot","pilot","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who flies planes.",
      "🇹🇷 Uçak uçuran kişi."
    ],
    examples: [],
    related_word_ids: [201]
  },
  {
    id: "vocab-202",
    category: "vocabulary",
    title: "A Lorry Driver — Kamyonet Sürücüsü",
    keywords: ["a lorry driver","kamyonet sürücüsü","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who drives big trucks.",
      "🇹🇷 Büyük kamyonları süren kişi."
    ],
    examples: [],
    related_word_ids: [202]
  },
  {
    id: "vocab-203",
    category: "vocabulary",
    title: "Self-Employed — Kendi İşinin Sahibi",
    keywords: ["self-employed","kendi i̇şinin sahibi","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 \"Working for yourself, not for a boss.\"",
      "🇹🇷 \"Bir patron için değil, kendi için çalışan.\""
    ],
    examples: [],
    related_word_ids: [203]
  },
  {
    id: "vocab-204",
    category: "vocabulary",
    title: "Unemployed — İşsiz",
    keywords: ["unemployed","i̇şsiz","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Not having a job.",
      "🇹🇷 Bir işi olmayan."
    ],
    examples: [],
    related_word_ids: [204]
  },
  {
    id: "vocab-205",
    category: "vocabulary",
    title: "Retired — Emekli",
    keywords: ["retired","emekli","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Stopped working because you are older.",
      "🇹🇷 Yaşlı olduğun için çalışmayı bırakmış."
    ],
    examples: [],
    related_word_ids: [205]
  },
  {
    id: "vocab-206",
    category: "vocabulary",
    title: "Housewife — Ev Hanımı",
    keywords: ["housewife","ev hanımı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A woman who works at home looking after her family.",
      "🇹🇷 Evde çalışıp ailesine bakan kadın."
    ],
    examples: [],
    related_word_ids: [206]
  },
  {
    id: "vocab-207",
    category: "vocabulary",
    title: "Boss — Patron",
    keywords: ["boss","patron","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The person you work for.",
      "🇹🇷 Kendisi için çalıştığın kişi."
    ],
    examples: [],
    related_word_ids: [207]
  },
  {
    id: "vocab-208",
    category: "vocabulary",
    title: "An Office — Ofis",
    keywords: ["an office","ofis","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A room where people work at desks.",
      "🇹🇷 İnsanların masalarda çalıştığı oda."
    ],
    examples: [],
    related_word_ids: [208]
  },
  {
    id: "vocab-209",
    category: "vocabulary",
    title: "A Factory — Fabrika",
    keywords: ["a factory","fabrika","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A big building where things are made.",
      "🇹🇷 Eşyaların yapıldığı büyük bina."
    ],
    examples: [],
    related_word_ids: [209]
  },
  {
    id: "vocab-210",
    category: "vocabulary",
    title: "Company — Şirket",
    keywords: ["company","şirket","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A business that sells things or services.",
      "🇹🇷 Bir şeyler veya hizmetler satan işletme."
    ],
    examples: [],
    related_word_ids: [210]
  },
  {
    id: "vocab-211",
    category: "vocabulary",
    title: "Full-Time — Tam Zamanlı",
    keywords: ["full-time","tam zamanlı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Working all the days of a week.",
      "🇹🇷 Haftanın tüm günleri çalışmak."
    ],
    examples: [],
    related_word_ids: [211]
  },
  {
    id: "vocab-212",
    category: "vocabulary",
    title: "Part-Time — Yarı Zamanlı",
    keywords: ["part-time","yarı zamanlı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Working only some days or hours.",
      "🇹🇷 Sadece bazı günler veya saatler çalışmak."
    ],
    examples: [],
    related_word_ids: [212]
  },
  {
    id: "vocab-213",
    category: "vocabulary",
    title: "Long Hours — Uzun Saatler",
    keywords: ["long hours","uzun saatler","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Working for a very long time every day.",
      "🇹🇷 Her gün çok uzun süre çalışmak."
    ],
    examples: [],
    related_word_ids: [213]
  },
  {
    id: "vocab-214",
    category: "vocabulary",
    title: "Earn — Kazanmak (Para)",
    keywords: ["earn","kazanmak (para)","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To get money for your work.",
      "🇹🇷 Yaptığın iş için para almak."
    ],
    examples: [],
    related_word_ids: [214]
  },
  {
    id: "vocab-215",
    category: "vocabulary",
    title: "Salary — Maaş",
    keywords: ["salary","maaş","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Money you get every month for your job.",
      "🇹🇷 İşin için her ay aldığın para."
    ],
    examples: [],
    related_word_ids: [215]
  },
  {
    id: "vocab-216",
    category: "vocabulary",
    title: "Wages — Günlük Ücret",
    keywords: ["wages","günlük ücret","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Money you get every day or week for work.",
      "🇹🇷 İş için her gün veya her hafta aldığın para."
    ],
    examples: [],
    related_word_ids: [216]
  },
  {
    id: "vocab-217",
    category: "vocabulary",
    title: "Low — Düşük",
    keywords: ["low","düşük","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Not high.",
      "🇹🇷 Yüksek değil."
    ],
    examples: [],
    related_word_ids: [217]
  },
  {
    id: "vocab-218",
    category: "vocabulary",
    title: "High — Yüksek",
    keywords: ["high","yüksek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Not low.",
      "🇹🇷 Düşük değil."
    ],
    examples: [],
    related_word_ids: [218]
  },
  {
    id: "vocab-219",
    category: "vocabulary",
    title: "Design Building — Bina Tasarlamak",
    keywords: ["design building","bina tasarlamak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To draw plans for a new house.",
      "🇹🇷 Yeni bir ev için planlar çizmek."
    ],
    examples: [],
    related_word_ids: [219]
  },
  {
    id: "vocab-220",
    category: "vocabulary",
    title: "Discuss Something — Bir Şeyi Tartışmak",
    keywords: ["discuss something","bir şeyi tartışmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To talk about a subject with other people.",
      "🇹🇷 Başka insanlarla bir konu hakkında konuşmak."
    ],
    examples: [],
    related_word_ids: [220]
  },
  {
    id: "vocab-221",
    category: "vocabulary",
    title: "To Go To Meeting — Bir Toplantıya Gitmek",
    keywords: ["to go to meeting","bir toplantıya gitmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To go to a room to talk with people from work.",
      "🇹🇷 İş yerindeki insanlarla konuşmak için odaya gitmek."
    ],
    examples: [],
    related_word_ids: [221]
  },
  {
    id: "vocab-222",
    category: "vocabulary",
    title: "Write a Report — Bir Rapor Yazmak",
    keywords: ["write a report","bir rapor yazmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To write information on paper for work.",
      "🇹🇷 İş için kağıda bilgi yazmak."
    ],
    examples: [],
    related_word_ids: [222]
  },
  {
    id: "vocab-223",
    category: "vocabulary",
    title: "Organize Meeting — Toplantı Organize Etmek",
    keywords: ["organize meeting","toplantı organize etmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To plan a time for people to talk at work.",
      "🇹🇷 İş yerinde insanların konuşması için zaman planlamak."
    ],
    examples: [],
    related_word_ids: [223]
  },
  {
    id: "vocab-224",
    category: "vocabulary",
    title: "Colleague — İş Arkadaşı / Meslektaş",
    keywords: ["colleague","i̇ş arkadaşı / meslektaş","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person you work with.",
      "🇹🇷 Birlikte çalıştığın kişi."
    ],
    examples: [],
    related_word_ids: [224]
  },
  {
    id: "vocab-225",
    category: "vocabulary",
    title: "Webcam — Video Kamera / İnternet Kamerası",
    keywords: ["webcam","video kamera / i̇nternet kamerası","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A small camera on a computer.",
      "🇹🇷 Bilgisayardaki küçük kamera."
    ],
    examples: [],
    related_word_ids: [225]
  },
  {
    id: "vocab-226",
    category: "vocabulary",
    title: "Printer — Yazıcı",
    keywords: ["printer","yazıcı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A machine that prints words on paper.",
      "🇹🇷 Kelimeleri kağıda yazdıran makine."
    ],
    examples: [],
    related_word_ids: [226]
  },
  {
    id: "vocab-227",
    category: "vocabulary",
    title: "Laptop — Dizüstü Bilgisayar",
    keywords: ["laptop","dizüstü bilgisayar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A computer you can carry with you.",
      "🇹🇷 Yanında taşıyabileceğin bilgisayar."
    ],
    examples: [],
    related_word_ids: [227]
  },
  {
    id: "vocab-228",
    category: "vocabulary",
    title: "Hard Drive — Sabit Disk",
    keywords: ["hard drive","sabit disk","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The part of a computer that saves files.",
      "🇹🇷 Bilgisayarın dosyaları kaydeden kısmı."
    ],
    examples: [],
    related_word_ids: [228]
  },
  {
    id: "vocab-229",
    category: "vocabulary",
    title: "Monitor — Monitör",
    keywords: ["monitor","monitör","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The screen of a computer.",
      "🇹🇷 Bilgisayarın ekranı."
    ],
    examples: [],
    related_word_ids: [229]
  },
  {
    id: "vocab-230",
    category: "vocabulary",
    title: "Disc — Disk",
    keywords: ["disc","disk","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A round flat thing used to save music or files.",
      "🇹🇷 Müzik veya dosya kaydetmek için yuvarlak düz şey."
    ],
    examples: [],
    related_word_ids: [230]
  },
  {
    id: "vocab-231",
    category: "vocabulary",
    title: "Mouse — Fare",
    keywords: ["mouse","fare","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A small tool you move to use a computer.",
      "🇹🇷 Bilgisayarı kullanmak için hareket ettirdiğin küçük alet."
    ],
    examples: [],
    related_word_ids: [231]
  },
  {
    id: "vocab-232",
    category: "vocabulary",
    title: "Memory Stick — Taşınabilir Bellek",
    keywords: ["memory stick","taşınabilir bellek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A very small thing to save computer files.",
      "🇹🇷 Bilgisayar dosyalarını kaydetmek için çok küçük şey."
    ],
    examples: [],
    related_word_ids: [232]
  },
  {
    id: "vocab-233",
    category: "vocabulary",
    title: "Screen — Ekran",
    keywords: ["screen","ekran","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The part of a TV or computer where you see pictures.",
      "🇹🇷 TV veya bilgisayarın resimleri gördüğün kısmı."
    ],
    examples: [],
    related_word_ids: [233]
  },
  {
    id: "vocab-234",
    category: "vocabulary",
    title: "Cut — Kesmek",
    keywords: ["cut","kesmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To take a piece of text away.",
      "🇹🇷 Bir metin parçasını almak/çıkarmak."
    ],
    examples: [],
    related_word_ids: [234]
  },
  {
    id: "vocab-235",
    category: "vocabulary",
    title: "Paste — Yapıştırmak",
    keywords: ["paste","yapıştırmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To put a piece of text in a new place.",
      "🇹🇷 Bir metin parçasını yeni bir yere koymak."
    ],
    examples: [],
    related_word_ids: [235]
  },
  {
    id: "vocab-236",
    category: "vocabulary",
    title: "Save — Kaydetmek",
    keywords: ["save","kaydetmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To keep a document on a computer.",
      "🇹🇷 Bir belgeyi bilgisayarda tutmak/saklamak."
    ],
    examples: [],
    related_word_ids: [236]
  },
  {
    id: "vocab-237",
    category: "vocabulary",
    title: "Print — Yazdırmak",
    keywords: ["print","yazdırmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To put a document from a computer onto paper.",
      "🇹🇷 Bilgisayardaki bir belgeyi kağıda dökmek."
    ],
    examples: [],
    related_word_ids: [237]
  },
  {
    id: "vocab-238",
    category: "vocabulary",
    title: "Copy — Kopyasını Almak / Kopyalamak",
    keywords: ["copy","kopyasını almak / kopyalamak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To make the same text again.",
      "🇹🇷 Aynı metni tekrar oluşturmak."
    ],
    examples: [],
    related_word_ids: [238]
  },
  {
    id: "vocab-239",
    category: "vocabulary",
    title: "Check Your Email — E-Posta Kontrol Etmek",
    keywords: ["check your email","e-posta kontrol etmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To look on your computer for new messages.",
      "🇹🇷 Yeni mesajlar için bilgisayarına bakmak."
    ],
    examples: [],
    related_word_ids: [239]
  },
  {
    id: "vocab-240",
    category: "vocabulary",
    title: "Get an Email — Bir E-Posta Almak",
    keywords: ["get an email","bir e-posta almak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To receive a message on your computer.",
      "🇹🇷 Bilgisayarından bir mesaj almak."
    ],
    examples: [],
    related_word_ids: [240]
  },
  {
    id: "vocab-241",
    category: "vocabulary",
    title: "Reply To An Email — Bir E-Postaya Cevap Vermek",
    keywords: ["reply to an email","bir e-postaya cevap vermek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To send a message back.",
      "🇹🇷 Geriye mesaj göndermek."
    ],
    examples: [],
    related_word_ids: [241]
  },
  {
    id: "vocab-242",
    category: "vocabulary",
    title: "On The Internet — İnternette",
    keywords: ["on the internet","i̇nternette","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Connected to the web.",
      "🇹🇷 Web'e bağlı olmak."
    ],
    examples: [],
    related_word_ids: [242]
  },
  {
    id: "vocab-243",
    category: "vocabulary",
    title: "Search — Araştırmak",
    keywords: ["search","araştırmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To look for something online.",
      "🇹🇷 İnternette bir şey aramak."
    ],
    examples: [],
    related_word_ids: [243]
  },
  {
    id: "vocab-244",
    category: "vocabulary",
    title: "Wonderful / Fantastic — Harika / Büyüleyici",
    keywords: ["wonderful / fantastic","harika / büyüleyici","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Really really good.",
      "🇹🇷 Gerçekten çok çok iyi."
    ],
    examples: [],
    related_word_ids: [244]
  },
  {
    id: "vocab-245",
    category: "vocabulary",
    title: "Favourite — Favori",
    keywords: ["favourite","favori","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The one you like the most.",
      "🇹🇷 En çok sevdiğin şey."
    ],
    examples: [],
    related_word_ids: [245]
  },
  {
    id: "vocab-246",
    category: "vocabulary",
    title: "Enjoy Doing Something — Bir Şeyi Yapmaktan Keyif Almak",
    keywords: ["enjoy doing something","bir şeyi yapmaktan keyif almak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To be happy doing an activity.",
      "🇹🇷 Bir aktiviteyi yaparken mutlu olmak."
    ],
    examples: [],
    related_word_ids: [246]
  },
  {
    id: "vocab-247",
    category: "vocabulary",
    title: "Boring — Sıkıcı",
    keywords: ["boring","sıkıcı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Not interesting.",
      "🇹🇷 İlgi çekici değil."
    ],
    examples: [],
    related_word_ids: [247]
  },
  {
    id: "vocab-248",
    category: "vocabulary",
    title: "Be Keen On Something — Bir Şeye Çok İstekli Olmak",
    keywords: ["be keen on something","bir şeye çok i̇stekli olmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To really like doing something.",
      "🇹🇷 Bir şeyi yapmayı gerçekten çok sevmek."
    ],
    examples: [],
    related_word_ids: [248]
  },
  {
    id: "vocab-249",
    category: "vocabulary",
    title: "To Be Interested In — Bir Şeye İlgili Olmak",
    keywords: ["to be interested in","bir şeye i̇lgili olmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Wanting to know more about a subject.",
      "🇹🇷 Bir konu hakkında daha çok şey bilmek istemek."
    ],
    examples: [],
    related_word_ids: [249]
  },
  {
    id: "vocab-250",
    category: "vocabulary",
    title: "Prefer — Tercih Etmek",
    keywords: ["prefer","tercih etmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To like something better.",
      "🇹🇷 Bir şeyi daha iyi/çok sevmek."
    ],
    examples: [],
    related_word_ids: [250]
  },
  {
    id: "vocab-251",
    category: "vocabulary",
    title: "Camping — Kamp Yapma / Kamp",
    keywords: ["camping","kamp yapma / kamp","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Sleeping outside in a tent.",
      "🇹🇷 Dışarıda bir çadırda uyumak."
    ],
    examples: [],
    related_word_ids: [251]
  },
  {
    id: "vocab-252",
    category: "vocabulary",
    title: "Travelling — Seyahat Etme / Seyahat",
    keywords: ["travelling","seyahat etme / seyahat","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Going to different places.",
      "🇹🇷 Farklı yerlere gitmek."
    ],
    examples: [],
    related_word_ids: [252]
  },
  {
    id: "vocab-253",
    category: "vocabulary",
    title: "Collect Things — Bir Şeyler Toplamak",
    keywords: ["collect things","bir şeyler toplamak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To keep many things of the same kind.",
      "🇹🇷 Aynı türden birçok şeyi saklamak/toplamak."
    ],
    examples: [],
    related_word_ids: [253]
  },
  {
    id: "vocab-254",
    category: "vocabulary",
    title: "Skiing — Kayak Yapma / Kayak",
    keywords: ["skiing","kayak yapma / kayak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Moving over snow on long flat boards.",
      "🇹🇷 Uzun düz tahtalar üzerinde karda hareket etmek."
    ],
    examples: [],
    related_word_ids: [254]
  },
  {
    id: "vocab-255",
    category: "vocabulary",
    title: "Fishing — Balık Tutma",
    keywords: ["fishing","balık tutma","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Trying to catch fish.",
      "🇹🇷 Balık yakalamaya çalışmak."
    ],
    examples: [],
    related_word_ids: [255]
  },
  {
    id: "vocab-256",
    category: "vocabulary",
    title: "Spend Time — Zaman Geçirmek / Harcamak",
    keywords: ["spend time","zaman geçirmek / harcamak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To use your time doing something.",
      "🇹🇷 Zamanını bir şey yaparak kullanmak."
    ],
    examples: [],
    related_word_ids: [256]
  },
  {
    id: "vocab-257",
    category: "vocabulary",
    title: "Gym — Spor / Spor Salonu",
    keywords: ["gym","spor / spor salonu","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A place to exercise and get strong.",
      "🇹🇷 Egzersiz yapmak ve güçlenmek için bir yer."
    ],
    examples: [],
    related_word_ids: [257]
  },
  {
    id: "vocab-258",
    category: "vocabulary",
    title: "Drawing — Çizim Yapma / Çizim",
    keywords: ["drawing","çizim yapma / çizim","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Making pictures with a pencil.",
      "🇹🇷 Bir kalemle resimler yapmak."
    ],
    examples: [],
    related_word_ids: [258]
  },
  {
    id: "vocab-259",
    category: "vocabulary",
    title: "Painting — Resim Yapma / Resim / Tablo",
    keywords: ["painting","resim yapma / resim / tablo","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Making pictures with colors.",
      "🇹🇷 Renklerle resimler yapmak."
    ],
    examples: [],
    related_word_ids: [259]
  },
  {
    id: "vocab-260",
    category: "vocabulary",
    title: "Gardening — Bahçecilik",
    keywords: ["gardening","bahçecilik","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Growing plants and flowers outside.",
      "🇹🇷 Dışarıda bitki ve çiçek yetiştirmek."
    ],
    examples: [],
    related_word_ids: [260]
  },
  {
    id: "vocab-261",
    category: "vocabulary",
    title: "Repair Cars — Arabaları Tamir Etmek",
    keywords: ["repair cars","arabaları tamir etmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To fix broken cars.",
      "🇹🇷 Bozuk arabaları düzeltmek."
    ],
    examples: [],
    related_word_ids: [261]
  },
  {
    id: "vocab-262",
    category: "vocabulary",
    title: "Listen to Something — Bir Şeyi Dinlemek",
    keywords: ["listen to something","bir şeyi dinlemek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To hear music or words.",
      "🇹🇷 Müzik veya kelimeleri duymaya çalışmak."
    ],
    examples: [],
    related_word_ids: [262]
  },
  {
    id: "vocab-263",
    category: "vocabulary",
    title: "Shooting — Atış Yapma / Atış",
    keywords: ["shooting","atış yapma / atış","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Firing a gun for sport.",
      "🇹🇷 Spor için silah ateşlemek."
    ],
    examples: [],
    related_word_ids: [263]
  },
  {
    id: "vocab-264",
    category: "vocabulary",
    title: "Singing — Şarkı Söyleme",
    keywords: ["singing","şarkı söyleme","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Making musical sounds with your voice.",
      "🇹🇷 Sesinle müzikal sesler çıkarmak."
    ],
    examples: [],
    related_word_ids: [264]
  },
  {
    id: "vocab-265",
    category: "vocabulary",
    title: "Band — Müzik Grubu",
    keywords: ["band","müzik grubu","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A group of people playing music together.",
      "🇹🇷 Birlikte müzik çalan bir grup insan."
    ],
    examples: [],
    related_word_ids: [265]
  },
  {
    id: "vocab-266",
    category: "vocabulary",
    title: "Well-Known — İyi Bilinen",
    keywords: ["well-known","i̇yi bilinen","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 \"Famous, known by many people.\"",
      "🇹🇷 \"Ünlü, birçok insan tarafından bilinen.\""
    ],
    examples: [],
    related_word_ids: [266]
  },
  {
    id: "vocab-267",
    category: "vocabulary",
    title: "Lead Singer — Solist (Müzik Grubunun)",
    keywords: ["lead singer","solist (müzik grubunun)","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The main person who sings in a band.",
      "🇹🇷 Müzik grubunda şarkı söyleyen ana kişi."
    ],
    examples: [],
    related_word_ids: [267]
  },
  {
    id: "vocab-268",
    category: "vocabulary",
    title: "Concert — Konser",
    keywords: ["concert","konser","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A show where people play live music.",
      "🇹🇷 İnsanların canlı müzik çaldığı gösteri."
    ],
    examples: [],
    related_word_ids: [268]
  },
  {
    id: "vocab-269",
    category: "vocabulary",
    title: "Conductor — Orkestra Şefi",
    keywords: ["conductor","orkestra şefi","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The person who leads an orchestra.",
      "🇹🇷 Bir orkestrayı yöneten kişi."
    ],
    examples: [],
    related_word_ids: [269]
  },
  {
    id: "vocab-270",
    category: "vocabulary",
    title: "Violinist — Kemancı",
    keywords: ["violinist","kemancı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who plays the violin.",
      "🇹🇷 Keman çalan kişi."
    ],
    examples: [],
    related_word_ids: [270]
  },
  {
    id: "vocab-271",
    category: "vocabulary",
    title: "Violin — Keman",
    keywords: ["violin","keman","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A wooden instrument you play under your chin.",
      "🇹🇷 Çeneni altında çaldığın ahşap enstrüman."
    ],
    examples: [],
    related_word_ids: [271]
  },
  {
    id: "vocab-272",
    category: "vocabulary",
    title: "Composer — Bestekar",
    keywords: ["composer","bestekar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who writes music.",
      "🇹🇷 Müzik yazan kişi."
    ],
    examples: [],
    related_word_ids: [272]
  },
  {
    id: "vocab-273",
    category: "vocabulary",
    title: "Perform — İcra Etmek",
    keywords: ["perform","i̇cra etmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To sing or act in front of people.",
      "🇹🇷 İnsanların önünde şarkı söylemek veya oynamak."
    ],
    examples: [],
    related_word_ids: [273]
  },
  {
    id: "vocab-274",
    category: "vocabulary",
    title: "Thriller — Gerilim",
    keywords: ["thriller","gerilim","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 An exciting and scary movie or book.",
      "🇹🇷 Heyecan verici ve korkutucu film veya kitap."
    ],
    examples: [],
    related_word_ids: [274]
  },
  {
    id: "vocab-275",
    category: "vocabulary",
    title: "Exciting — Heyecan Verici",
    keywords: ["exciting","heyecan verici","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Making you feel very happy and active.",
      "🇹🇷 Seni çok mutlu ve aktif hissettiren."
    ],
    examples: [],
    related_word_ids: [275]
  },
  {
    id: "vocab-276",
    category: "vocabulary",
    title: "Comedy — Komedi",
    keywords: ["comedy","komedi","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A funny movie that makes you laugh.",
      "🇹🇷 Seni güldüren eğlenceli film."
    ],
    examples: [],
    related_word_ids: [276]
  },
  {
    id: "vocab-277",
    category: "vocabulary",
    title: "Funny — Eğlenceli",
    keywords: ["funny","eğlenceli","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Making you smile and laugh.",
      "🇹🇷 Seni gülümseten ve güldüren."
    ],
    examples: [],
    related_word_ids: [277]
  },
  {
    id: "vocab-278",
    category: "vocabulary",
    title: "Violent — Şiddetli / Şiddet İçerikli",
    keywords: ["violent","şiddetli / şiddet i̇çerikli","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Having fighting and hurting people.",
      "🇹🇷 Dövüşme ve insanları incitme içeren."
    ],
    examples: [],
    related_word_ids: [278]
  },
  {
    id: "vocab-279",
    category: "vocabulary",
    title: "Love Story — Aşk Hikayesi",
    keywords: ["love story","aşk hikayesi","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A movie about two people in love.",
      "🇹🇷 Aşık iki insan hakkında bir film."
    ],
    examples: [],
    related_word_ids: [279]
  },
  {
    id: "vocab-280",
    category: "vocabulary",
    title: "Cinema — Sinema",
    keywords: ["cinema","sinema","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A place where you watch movies on a big screen.",
      "🇹🇷 Büyük ekranda film izlediğin yer."
    ],
    examples: [],
    related_word_ids: [280]
  },
  {
    id: "vocab-281",
    category: "vocabulary",
    title: "Movie — Film",
    keywords: ["movie","film","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A moving picture you watch on TV or at the cinema.",
      "🇹🇷 TV'de veya sinemada izlediğin hareketli resim."
    ],
    examples: [],
    related_word_ids: [281]
  },
  {
    id: "vocab-282",
    category: "vocabulary",
    title: "Review — İnceleme",
    keywords: ["review","i̇nceleme","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Writing what you think about a book or movie.",
      "🇹🇷 Bir kitap veya film hakkında ne düşündüğünü yazmak."
    ],
    examples: [],
    related_word_ids: [282]
  },
  {
    id: "vocab-283",
    category: "vocabulary",
    title: "Star — Yıldız",
    keywords: ["star","yıldız","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A very famous actor or singer.",
      "🇹🇷 Çok ünlü bir aktör veya şarkıcı."
    ],
    examples: [],
    related_word_ids: [283]
  },
  {
    id: "vocab-284",
    category: "vocabulary",
    title: "Actor — Aktör",
    keywords: ["actor","aktör","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who plays a character in a movie.",
      "🇹🇷 Bir filmde bir karakteri oynayan kişi."
    ],
    examples: [],
    related_word_ids: [284]
  },
  {
    id: "vocab-285",
    category: "vocabulary",
    title: "See a Film At the Cinema — Sinemada Bir Film İzlemek",
    keywords: ["see a film at the cinema","sinemada bir film i̇zlemek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To go out and watch a movie.",
      "🇹🇷 Dışarı çıkıp bir film izlemek."
    ],
    examples: [],
    related_word_ids: [285]
  },
  {
    id: "vocab-286",
    category: "vocabulary",
    title: "Media — Medya",
    keywords: ["media","medya","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 \"TV, radio, and newspapers.\"",
      "🇹🇷 \"TV, radyo ve gazeteler.\""
    ],
    examples: [],
    related_word_ids: [286]
  },
  {
    id: "vocab-287",
    category: "vocabulary",
    title: "Magazine — Dergi",
    keywords: ["magazine","dergi","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A thin book with pictures and stories you buy every week.",
      "🇹🇷 Her hafta aldığın resimli ve hikayeli ince kitap."
    ],
    examples: [],
    related_word_ids: [287]
  },
  {
    id: "vocab-288",
    category: "vocabulary",
    title: "Report — Rapor",
    keywords: ["report","rapor","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A news story on TV or in a paper.",
      "🇹🇷 TV'de veya gazetede bir haber."
    ],
    examples: [],
    related_word_ids: [288]
  },
  {
    id: "vocab-289",
    category: "vocabulary",
    title: "Event — Olay",
    keywords: ["event","olay","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Something important that happens.",
      "🇹🇷 Gerçekleşen önemli bir şey."
    ],
    examples: [],
    related_word_ids: [289]
  },
  {
    id: "vocab-290",
    category: "vocabulary",
    title: "Die — Ölmek",
    keywords: ["die","ölmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To stop living.",
      "🇹🇷 Yaşamayı bırakmak."
    ],
    examples: [],
    related_word_ids: [290]
  },
  {
    id: "vocab-291",
    category: "vocabulary",
    title: "War — Savaş",
    keywords: ["war","savaş","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Fighting between countries.",
      "🇹🇷 Ülkeler arasındaki savaş/çatışma."
    ],
    examples: [],
    related_word_ids: [291]
  },
  {
    id: "vocab-292",
    category: "vocabulary",
    title: "Peace — Barış / Huzur",
    keywords: ["peace","barış / huzur","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 No war; quiet and calm.",
      "🇹🇷 Savaş olmaması; sessiz ve sakin."
    ],
    examples: [],
    related_word_ids: [292]
  },
  {
    id: "vocab-293",
    category: "vocabulary",
    title: "Disaster — Felaket",
    keywords: ["disaster","felaket","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A very bad event like a big fire.",
      "🇹🇷 Büyük bir yangın gibi çok kötü bir olay."
    ],
    examples: [],
    related_word_ids: [293]
  },
  {
    id: "vocab-294",
    category: "vocabulary",
    title: "Celebrity — Ünlü (Kişi)",
    keywords: ["celebrity","ünlü (kişi)","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A famous person.",
      "🇹🇷 Ünlü bir insan."
    ],
    examples: [],
    related_word_ids: [294]
  },
  {
    id: "vocab-295",
    category: "vocabulary",
    title: "Advert / Advertisement — İlan / Reklam",
    keywords: ["advert / advertisement","i̇lan / reklam","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A picture or video selling something.",
      "🇹🇷 Bir şey satan bir resim veya video."
    ],
    examples: [],
    related_word_ids: [295]
  },
  {
    id: "vocab-296",
    category: "vocabulary",
    title: "Newspaper / Paper — Gazete",
    keywords: ["newspaper / paper","gazete","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Large paper with daily news.",
      "🇹🇷 Günlük haberleri olan büyük kağıt."
    ],
    examples: [],
    related_word_ids: [296]
  },
  {
    id: "vocab-297",
    category: "vocabulary",
    title: "Find Out — Bulmak",
    keywords: ["find out","bulmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To learn information.",
      "🇹🇷 Bilgi öğrenmek."
    ],
    examples: [],
    related_word_ids: [297]
  },
  {
    id: "vocab-298",
    category: "vocabulary",
    title: "Happen — Olmak / Meydana Gelmek",
    keywords: ["happen","olmak / meydana gelmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To take place.",
      "🇹🇷 Gerçekleşmek."
    ],
    examples: [],
    related_word_ids: [298]
  },
  {
    id: "vocab-299",
    category: "vocabulary",
    title: "Article — Makale",
    keywords: ["article","makale","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A piece of writing in a newspaper.",
      "🇹🇷 Gazetedeki bir yazı parçası."
    ],
    examples: [],
    related_word_ids: [299]
  },
  {
    id: "vocab-300",
    category: "vocabulary",
    title: "On TV — Televizyonda",
    keywords: ["on tv","televizyonda","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Showing on television.",
      "🇹🇷 Televizyonda gösterilen."
    ],
    examples: [],
    related_word_ids: [300]
  },
  {
    id: "vocab-301",
    category: "vocabulary",
    title: "On the Radio — Radyoda",
    keywords: ["on the radio","radyoda","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Playing on the radio.",
      "🇹🇷 Radyoda çalan."
    ],
    examples: [],
    related_word_ids: [301]
  },
  {
    id: "vocab-302",
    category: "vocabulary",
    title: "Nothing Much / Nothing Important — Önemli Bir Şey Değil",
    keywords: ["nothing much / nothing important","önemli bir şey değil","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Not anything big or special.",
      "🇹🇷 Büyük veya özel bir şey değil."
    ],
    examples: [],
    related_word_ids: [302]
  },
  {
    id: "vocab-303",
    category: "vocabulary",
    title: "Weather Forecast — Hava Durumu / Tahmini",
    keywords: ["weather forecast","hava durumu / tahmini","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 News about if it will rain or be sunny.",
      "🇹🇷 Yağmur yağıp güneşli olacağı hakkındaki haber."
    ],
    examples: [],
    related_word_ids: [303]
  },
  {
    id: "vocab-304",
    category: "vocabulary",
    title: "Believe — İnanmak",
    keywords: ["believe","i̇nanmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To think something is true.",
      "🇹🇷 Bir şeyin doğru olduğunu düşünmek."
    ],
    examples: [],
    related_word_ids: [304]
  },
  {
    id: "vocab-305",
    category: "vocabulary",
    title: "To Go Abroad — Yurtdışına Gitmek",
    keywords: ["to go abroad","yurtdışına gitmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To go to another country.",
      "🇹🇷 Başka bir ülkeye gitmek."
    ],
    examples: [],
    related_word_ids: [305]
  },
  {
    id: "vocab-306",
    category: "vocabulary",
    title: "To Book a Flight — Bir Uçuş Rezervasyonu Yapmak",
    keywords: ["to book a flight","bir uçuş rezervasyonu yapmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To buy a ticket for a plane.",
      "🇹🇷 Bir uçak için bilet almak."
    ],
    examples: [],
    related_word_ids: [306]
  },
  {
    id: "vocab-307",
    category: "vocabulary",
    title: "Find Your Passport — Pasaportunu Bulmak",
    keywords: ["find your passport","pasaportunu bulmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To look for your travel document.",
      "🇹🇷 Seyahat belgeni aramak/bulmak."
    ],
    examples: [],
    related_word_ids: [307]
  },
  {
    id: "vocab-308",
    category: "vocabulary",
    title: "To Get a Visa — Vize Almak",
    keywords: ["to get a visa","vize almak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To get permission to enter a country.",
      "🇹🇷 Bir ülkeye girmek için izin almak."
    ],
    examples: [],
    related_word_ids: [308]
  },
  {
    id: "vocab-309",
    category: "vocabulary",
    title: "To Get Travel Insurance — Seyahat Sigortası Almak",
    keywords: ["to get travel insurance","seyahat sigortası almak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To pay for help if you get sick on holiday.",
      "🇹🇷 Tatilde hastalanırsan yardım almak için para ödemek."
    ],
    examples: [],
    related_word_ids: [309]
  },
  {
    id: "vocab-310",
    category: "vocabulary",
    title: "To Get Foreign Currency — Yabancı Ülke Parası Almak",
    keywords: ["to get foreign currency","yabancı ülke parası almak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To buy the money used in another country.",
      "🇹🇷 Başka bir ülkede kullanılan parayı almak."
    ],
    examples: [],
    related_word_ids: [310]
  },
  {
    id: "vocab-311",
    category: "vocabulary",
    title: "To Pack Your Suitcase — Valizini Toplamak",
    keywords: ["to pack your suitcase","valizini toplamak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To put clothes in your bag for a trip.",
      "🇹🇷 Bir gezi için kıyafetleri çantana koymak."
    ],
    examples: [],
    related_word_ids: [311]
  },
  {
    id: "vocab-312",
    category: "vocabulary",
    title: "To Hire a Car — Araba Kiralamak",
    keywords: ["to hire a car","araba kiralamak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To pay to use a car for a few days.",
      "🇹🇷 Bir arabayı birkaç gün kullanmak için para ödemek."
    ],
    examples: [],
    related_word_ids: [312]
  },
  {
    id: "vocab-313",
    category: "vocabulary",
    title: "To Arrange Something — Bir Şey Ayarlamak",
    keywords: ["to arrange something","bir şey ayarlamak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To plan and prepare for something.",
      "🇹🇷 Bir şey için plan yapmak ve hazırlanmak."
    ],
    examples: [],
    related_word_ids: [313]
  },
  {
    id: "vocab-314",
    category: "vocabulary",
    title: "On Holiday — Tatilde",
    keywords: ["on holiday","tatilde","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Away from work or school to rest.",
      "🇹🇷 Dinlenmek için işten veya okuldan uzakta olmak."
    ],
    examples: [],
    related_word_ids: [314]
  },
  {
    id: "vocab-315",
    category: "vocabulary",
    title: "Currency — Döviz",
    keywords: ["currency","döviz","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The money a country uses.",
      "🇹🇷 Bir ülkenin kullandığı para."
    ],
    examples: [],
    related_word_ids: [315]
  },
  {
    id: "vocab-316",
    category: "vocabulary",
    title: "To Stay in a Hotel — Bir Otelde Kalmak",
    keywords: ["to stay in a hotel","bir otelde kalmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To sleep in a hotel during a trip.",
      "🇹🇷 Bir gezi sırasında otelde uyumak."
    ],
    examples: [],
    related_word_ids: [316]
  },
  {
    id: "vocab-317",
    category: "vocabulary",
    title: "Facilities — Özellikler",
    keywords: ["facilities","özellikler","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 \"Things a hotel has, like a pool or gym.\"",
      "🇹🇷 Havuz veya spor salonu gibi otelin sahip olduğu şeyler."
    ],
    examples: [],
    related_word_ids: [317]
  },
  {
    id: "vocab-318",
    category: "vocabulary",
    title: "Air Conditioning — Klima",
    keywords: ["air conditioning","klima","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A machine that makes the air cold.",
      "🇹🇷 Havayı soğuk yapan makine."
    ],
    examples: [],
    related_word_ids: [318]
  },
  {
    id: "vocab-319",
    category: "vocabulary",
    title: "Central Heating — Merkezi Isıtma",
    keywords: ["central heating","merkezi isıtma","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A system that makes a building warm.",
      "🇹🇷 Bir binayı sıcak yapan sistem."
    ],
    examples: [],
    related_word_ids: [319]
  },
  {
    id: "vocab-320",
    category: "vocabulary",
    title: "Staff — Personel / Kadro",
    keywords: ["staff","personel / kadro","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The people who work in a place.",
      "🇹🇷 Bir yerde çalışan insanlar."
    ],
    examples: [],
    related_word_ids: [320]
  },
  {
    id: "vocab-321",
    category: "vocabulary",
    title: "Helpful — Yardımcı / Yardımsever",
    keywords: ["helpful","yardımcı / yardımsever","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Happy to help you.",
      "🇹🇷 Sana yardım etmekten mutlu olan."
    ],
    examples: [],
    related_word_ids: [321]
  },
  {
    id: "vocab-322",
    category: "vocabulary",
    title: "Tourist — Turist",
    keywords: ["tourist","turist","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person visiting a place on holiday.",
      "🇹🇷 Tatilde bir yeri ziyaret eden kişi."
    ],
    examples: [],
    related_word_ids: [322]
  },
  {
    id: "vocab-323",
    category: "vocabulary",
    title: "Delicious — Lezzetli",
    keywords: ["delicious","lezzetli","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Tasting very good.",
      "🇹🇷 Tadı çok güzel olan."
    ],
    examples: [],
    related_word_ids: [323]
  },
  {
    id: "vocab-324",
    category: "vocabulary",
    title: "Recommend — Önermek",
    keywords: ["recommend","önermek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To say something is good to try.",
      "🇹🇷 Bir şeyi denemenin iyi olduğunu söylemek."
    ],
    examples: [],
    related_word_ids: [324]
  },
  {
    id: "vocab-325",
    category: "vocabulary",
    title: "To Book A Room — Bir Oda Rezervasyonu Yapmak",
    keywords: ["to book a room","bir oda rezervasyonu yapmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To save a room in a hotel for yourself.",
      "🇹🇷 Kendin için bir otelde oda ayırtmak."
    ],
    examples: [],
    related_word_ids: [325]
  },
  {
    id: "vocab-326",
    category: "vocabulary",
    title: "Included — İçeren",
    keywords: ["included","i̇çeren","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Part of the price.",
      "🇹🇷 Fiyata dahil olan kısım."
    ],
    examples: [],
    related_word_ids: [326]
  },
  {
    id: "vocab-327",
    category: "vocabulary",
    title: "Never Mind — Dert Etme / Boşver",
    keywords: ["never mind","dert etme / boşver","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is not a problem.",
      "🇹🇷 Bu bir problem değil."
    ],
    examples: [],
    related_word_ids: [327]
  },
  {
    id: "vocab-328",
    category: "vocabulary",
    title: "Details — Detaylar",
    keywords: ["details","detaylar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The small pieces of information.",
      "🇹🇷 Küçük bilgi parçaları."
    ],
    examples: [],
    related_word_ids: [328]
  },
  {
    id: "vocab-329",
    category: "vocabulary",
    title: "Double Room — Çift Kişilik Oda",
    keywords: ["double room","çift kişilik oda","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A room with one big bed for two people.",
      "🇹🇷 İki kişi için büyük bir yatağı olan oda."
    ],
    examples: [],
    related_word_ids: [329]
  },
  {
    id: "vocab-330",
    category: "vocabulary",
    title: "Single Room — Tek Kişilik Oda",
    keywords: ["single room","tek kişilik oda","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A room for one person to sleep in.",
      "🇹🇷 Bir kişinin uyuması için olan oda."
    ],
    examples: [],
    related_word_ids: [330]
  },
  {
    id: "vocab-331",
    category: "vocabulary",
    title: "Twin Room — Çift Yataklı Oda",
    keywords: ["twin room","çift yataklı oda","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A room with two single beds.",
      "🇹🇷 İki tekli yatağı olan oda."
    ],
    examples: [],
    related_word_ids: [331]
  },
  {
    id: "vocab-332",
    category: "vocabulary",
    title: "That's a Shame — Bu Bir Utanç",
    keywords: ["that's a shame","bu bir utanç","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 That is sad or unlucky.",
      "🇹🇷 Bu üzücü veya şanssız bir durum."
    ],
    examples: [],
    related_word_ids: [332]
  },
  {
    id: "vocab-333",
    category: "vocabulary",
    title: "What a Shame — Ne Utanç Verici",
    keywords: ["what a shame","ne utanç verici","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Used when something is disappointing.",
      "🇹🇷 Bir şey hayal kırıklığı yarattığında söylenir."
    ],
    examples: [],
    related_word_ids: [333]
  },
  {
    id: "vocab-334",
    category: "vocabulary",
    title: "Passengers — Yolcular",
    keywords: ["passengers","yolcular","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 \"People travelling on a bus, train, or plane.\"",
      "🇹🇷 \"Otobüs, tren veya uçakta seyahat eden insanlar.\""
    ],
    examples: [],
    related_word_ids: [334]
  },
  {
    id: "vocab-335",
    category: "vocabulary",
    title: "Airport — Havaalanı",
    keywords: ["airport","havaalanı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The place where planes fly from.",
      "🇹🇷 Uçakların kalktığı yer."
    ],
    examples: [],
    related_word_ids: [335]
  },
  {
    id: "vocab-336",
    category: "vocabulary",
    title: "Luggage / Suitcase / Bag — Bagaj / Valiz / Çanta",
    keywords: ["luggage / suitcase / bag","bagaj / valiz / çanta","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Bags you carry when you travel.",
      "🇹🇷 Seyahat ederken taşıdığın çantalar."
    ],
    examples: [],
    related_word_ids: [336]
  },
  {
    id: "vocab-337",
    category: "vocabulary",
    title: "Ticket — Bilet",
    keywords: ["ticket","bilet","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A piece of paper that lets you travel.",
      "🇹🇷 Seyahat etmeni sağlayan kağıt parçası."
    ],
    examples: [],
    related_word_ids: [337]
  },
  {
    id: "vocab-338",
    category: "vocabulary",
    title: "Hand Luggage — El Bagajı",
    keywords: ["hand luggage","el bagajı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A small bag you take on the plane with you.",
      "🇹🇷 \"Yanına, uçağa aldığın küçük çanta.\""
    ],
    examples: [],
    related_word_ids: [338]
  },
  {
    id: "vocab-339",
    category: "vocabulary",
    title: "Window Seat — Pencere Koltuğu",
    keywords: ["window seat","pencere koltuğu","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A seat next to the window.",
      "🇹🇷 Pencerenin yanındaki koltuk."
    ],
    examples: [],
    related_word_ids: [339]
  },
  {
    id: "vocab-340",
    category: "vocabulary",
    title: "Aisle — Koridor",
    keywords: ["aisle","koridor","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The walking space between seats.",
      "🇹🇷 Koltuklar arasındaki yürüme alanı."
    ],
    examples: [],
    related_word_ids: [340]
  },
  {
    id: "vocab-341",
    category: "vocabulary",
    title: "Have a Good Flight — İyi Uçuşlar",
    keywords: ["have a good flight","i̇yi uçuşlar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 I hope your plane trip is nice.",
      "🇹🇷 Umarım uçak gezin güzel geçer."
    ],
    examples: [],
    related_word_ids: [341]
  },
  {
    id: "vocab-342",
    category: "vocabulary",
    title: "Departed — Ayrılmış",
    keywords: ["departed","ayrılmış","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Already left.",
      "🇹🇷 Çoktan ayrılmış."
    ],
    examples: [],
    related_word_ids: [342]
  },
  {
    id: "vocab-343",
    category: "vocabulary",
    title: "Departure — Havalanma / Kalkış",
    keywords: ["departure","havalanma / kalkış","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The time the plane leaves.",
      "🇹🇷 Uçağın ayrıldığı zaman."
    ],
    examples: [],
    related_word_ids: [343]
  },
  {
    id: "vocab-344",
    category: "vocabulary",
    title: "Gate — Kapı",
    keywords: ["gate","kapı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The door you go through to get on the plane.",
      "🇹🇷 Uçağa binmek için geçtiğin kapı."
    ],
    examples: [],
    related_word_ids: [344]
  },
  {
    id: "vocab-345",
    category: "vocabulary",
    title: "Delay — Gecikme",
    keywords: ["delay","gecikme","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Being late.",
      "🇹🇷 Geç kalmak / Gecikmek."
    ],
    examples: [],
    related_word_ids: [345]
  },
  {
    id: "vocab-346",
    category: "vocabulary",
    title: "Fasten Seat Belt — Emniyet Kemeri Takmak",
    keywords: ["fasten seat belt","emniyet kemeri takmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To click your belt closed in a plane or car.",
      "🇹🇷 Uçakta veya arabada kemerini kapatmak."
    ],
    examples: [],
    related_word_ids: [346]
  },
  {
    id: "vocab-347",
    category: "vocabulary",
    title: "Plane Takes Off — Uçak Kalkar",
    keywords: ["plane takes off","uçak kalkar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The plane goes up into the air.",
      "🇹🇷 Uçak havaya yükselir."
    ],
    examples: [],
    related_word_ids: [347]
  },
  {
    id: "vocab-348",
    category: "vocabulary",
    title: "Plane Lands — Uçak İner",
    keywords: ["plane lands","uçak i̇ner","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The plane comes down to the ground.",
      "🇹🇷 Uçak yere iner."
    ],
    examples: [],
    related_word_ids: [348]
  },
  {
    id: "vocab-349",
    category: "vocabulary",
    title: "Baggage Reclaim — Bagaj Teslim",
    keywords: ["baggage reclaim","bagaj teslim","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Where you pick up your bags after a flight.",
      "🇹🇷 Uçuştan sonra çantalarını aldığın yer."
    ],
    examples: [],
    related_word_ids: [349]
  },
  {
    id: "vocab-350",
    category: "vocabulary",
    title: "To Go Through Customs — Gümrükten Geçmek",
    keywords: ["to go through customs","gümrükten geçmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To have your bags checked at an airport.",
      "🇹🇷 Havaalanında çantalarını kontrol ettirmek."
    ],
    examples: [],
    related_word_ids: [350]
  },
  {
    id: "vocab-351",
    category: "vocabulary",
    title: "Resort — Tatil Yeri",
    keywords: ["resort","tatil yeri","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A place with hotels where people go for holidays.",
      "🇹🇷 İnsanların tatil için gittiği otelleri olan yer."
    ],
    examples: [],
    related_word_ids: [351]
  },
  {
    id: "vocab-352",
    category: "vocabulary",
    title: "Fly — Uçuş Yapmak",
    keywords: ["fly","uçuş yapmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To travel by plane.",
      "🇹🇷 Uçakla seyahat etmek."
    ],
    examples: [],
    related_word_ids: [352]
  },
  {
    id: "vocab-353",
    category: "vocabulary",
    title: "Rent an Apartment — Apartman Dairesi Kiralamak",
    keywords: ["rent an apartment","apartman dairesi kiralamak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To pay to live in a flat for a short time.",
      "🇹🇷 Kısa bir süre bir dairede yaşamak için para ödemek."
    ],
    examples: [],
    related_word_ids: [353]
  },
  {
    id: "vocab-354",
    category: "vocabulary",
    title: "Sunbathe — Güneşlenmek",
    keywords: ["sunbathe","güneşlenmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To sit in the sun to get brown.",
      "🇹🇷 Esmerleşmek için güneşte oturmak."
    ],
    examples: [],
    related_word_ids: [354]
  },
  {
    id: "vocab-355",
    category: "vocabulary",
    title: "Relax — Rahatlamak",
    keywords: ["relax","rahatlamak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To rest and be calm.",
      "🇹🇷 Dinlenmek ve sakin olmak."
    ],
    examples: [],
    related_word_ids: [355]
  },
  {
    id: "vocab-356",
    category: "vocabulary",
    title: "An Hour or So — Bir Saate Kadar",
    keywords: ["an hour or so","bir saate kadar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Around 60 minutes.",
      "🇹🇷 Yaklaşık 60 dakika."
    ],
    examples: [],
    related_word_ids: [356]
  },
  {
    id: "vocab-357",
    category: "vocabulary",
    title: "To Go For a Walk — Yürüyüşe Çıkmak",
    keywords: ["to go for a walk","yürüyüşe çıkmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To walk outside for fun.",
      "🇹🇷 Eğlence için dışarıda yürümek."
    ],
    examples: [],
    related_word_ids: [357]
  },
  {
    id: "vocab-358",
    category: "vocabulary",
    title: "Perfect — Mükemmel",
    keywords: ["perfect","mükemmel","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 \"Very good, with no problems.\"",
      "🇹🇷 \"Çok iyi, hiçbir sorunu yok.\""
    ],
    examples: [],
    related_word_ids: [358]
  },
  {
    id: "vocab-359",
    category: "vocabulary",
    title: "Map — Harita",
    keywords: ["map","harita","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A paper showing roads and towns.",
      "🇹🇷 Yolları ve kasabaları gösteren kağıt."
    ],
    examples: [],
    related_word_ids: [359]
  },
  {
    id: "vocab-360",
    category: "vocabulary",
    title: "Guide — Rehber",
    keywords: ["guide","rehber","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who shows you places.",
      "🇹🇷 Sana yerleri gösteren kişi."
    ],
    examples: [],
    related_word_ids: [360]
  },
  {
    id: "vocab-361",
    category: "vocabulary",
    title: "Guide Book — Rehber Kitap",
    keywords: ["guide book","rehber kitap","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A book with information for tourists.",
      "🇹🇷 Turistler için bilgi içeren kitap."
    ],
    examples: [],
    related_word_ids: [361]
  },
  {
    id: "vocab-362",
    category: "vocabulary",
    title: "To Go Sightseeing — Geziye Çıkmak / Bölge Turuna Çıkmak",
    keywords: ["to go sightseeing","geziye çıkmak / bölge turuna çıkmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To visit famous places in a city.",
      "🇹🇷 Bir şehirdeki ünlü yerleri ziyaret etmek."
    ],
    examples: [],
    related_word_ids: [362]
  },
  {
    id: "vocab-363",
    category: "vocabulary",
    title: "Art Gallery — Sanat Galerisi",
    keywords: ["art gallery","sanat galerisi","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A building to see beautiful paintings.",
      "🇹🇷 Güzel tabloları görmek için bir bina."
    ],
    examples: [],
    related_word_ids: [363]
  },
  {
    id: "vocab-364",
    category: "vocabulary",
    title: "To Visit Museum — Müze Ziyaret Etmek",
    keywords: ["to visit museum","müze ziyaret etmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To go see old and important things.",
      "🇹🇷 Eski ve önemli şeyleri görmeye gitmek."
    ],
    examples: [],
    related_word_ids: [364]
  },
  {
    id: "vocab-365",
    category: "vocabulary",
    title: "To Look Around — Bakınmak / Etrafı Seyretmek",
    keywords: ["to look around","bakınmak / etrafı seyretmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To walk around and see what is there.",
      "🇹🇷 Etrafta yürümek ve ne olduğuna bakmak."
    ],
    examples: [],
    related_word_ids: [365]
  },
  {
    id: "vocab-366",
    category: "vocabulary",
    title: "To Get Lost — Kaybolmak",
    keywords: ["to get lost","kaybolmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Not knowing where you are.",
      "🇹🇷 Nerede olduğunu bilmemek."
    ],
    examples: [],
    related_word_ids: [366]
  },
  {
    id: "vocab-367",
    category: "vocabulary",
    title: "To Take Photos — Fotoğraf Çekmek",
    keywords: ["to take photos","fotoğraf çekmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To use a camera to make pictures.",
      "🇹🇷 Resim yapmak için bir kamera kullanmak."
    ],
    examples: [],
    related_word_ids: [367]
  },
  {
    id: "vocab-368",
    category: "vocabulary",
    title: "Cash Machine — Para Çekme Makinesi",
    keywords: ["cash machine","para çekme makinesi","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A machine in the street that gives money.",
      "🇹🇷 Sokakta para veren makine (ATM)."
    ],
    examples: [],
    related_word_ids: [368]
  },
  {
    id: "vocab-369",
    category: "vocabulary",
    title: "Change Dollars into Euro — Doları Avroya Çevirmek",
    keywords: ["change dollars into euro","doları avroya çevirmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To swap one money for another.",
      "🇹🇷 Bir parayı diğeriyle takas etmek."
    ],
    examples: [],
    related_word_ids: [369]
  },
  {
    id: "vocab-370",
    category: "vocabulary",
    title: "Exchange Rate — Döviz Kuru",
    keywords: ["exchange rate","döviz kuru","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 How much one currency is worth in another.",
      "🇹🇷 Bir para biriminin diğerinde ne kadar ettiği."
    ],
    examples: [],
    related_word_ids: [370]
  },
  {
    id: "vocab-371",
    category: "vocabulary",
    title: "Commission — Komisyon",
    keywords: ["commission","komisyon","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Extra money you pay for a service.",
      "🇹🇷 Bir hizmet için ödediğin ekstra para."
    ],
    examples: [],
    related_word_ids: [371]
  },
  {
    id: "vocab-372",
    category: "vocabulary",
    title: "To Charge Someone — Birini Suçlamak",
    keywords: ["to charge someone","birini suçlamak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To say someone did a bad thing.",
      "🇹🇷 Birinin kötü bir şey yaptığını söylemek."
    ],
    examples: [],
    related_word_ids: [372]
  },
  {
    id: "vocab-373",
    category: "vocabulary",
    title: "Envelope — Zarf",
    keywords: ["envelope","zarf","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The paper cover for a letter.",
      "🇹🇷 Bir mektup için kağıt kılıf."
    ],
    examples: [],
    related_word_ids: [373]
  },
  {
    id: "vocab-374",
    category: "vocabulary",
    title: "Put a Stamp — Posta Pulu Koymak",
    keywords: ["put a stamp","posta pulu koymak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To put a small sticker on a letter to send it.",
      "🇹🇷 Göndermek için mektuba küçük bir etiket yapıştırmak."
    ],
    examples: [],
    related_word_ids: [374]
  },
  {
    id: "vocab-375",
    category: "vocabulary",
    title: "Postman — Postacı (Erkek)",
    keywords: ["postman","postacı (erkek)","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A man who brings letters to your house.",
      "🇹🇷 Evinize mektupları getiren adam."
    ],
    examples: [],
    related_word_ids: [375]
  },
  {
    id: "vocab-376",
    category: "vocabulary",
    title: "Postwoman — Postacı (Kadın)",
    keywords: ["postwoman","postacı (kadın)","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A woman who brings letters to your house.",
      "🇹🇷 Evinize mektupları getiren kadın."
    ],
    examples: [],
    related_word_ids: [376]
  },
  {
    id: "vocab-377",
    category: "vocabulary",
    title: "A Parcel — Posta / Parsel / Koli",
    keywords: ["a parcel","posta / parsel / koli","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A box you send in the mail.",
      "🇹🇷 Postada gönderdiğin kutu."
    ],
    examples: [],
    related_word_ids: [377]
  },
  {
    id: "vocab-378",
    category: "vocabulary",
    title: "Have a Nice Day — İyi Günler",
    keywords: ["have a nice day","i̇yi günler","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A nice way to say goodbye.",
      "🇹🇷 Hoşçakal demenin güzel bir yolu."
    ],
    examples: [],
    related_word_ids: [378]
  },
  {
    id: "vocab-379",
    category: "vocabulary",
    title: "Have a Good Day — İyi Günler",
    keywords: ["have a good day","i̇yi günler","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A friendly goodbye.",
      "🇹🇷 Arkadaşça bir veda."
    ],
    examples: [],
    related_word_ids: [379]
  },
  {
    id: "vocab-380",
    category: "vocabulary",
    title: "Well Done — Aferin",
    keywords: ["well done","aferin","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Good job.",
      "🇹🇷 İyi iş / Tebrikler."
    ],
    examples: [],
    related_word_ids: [380]
  },
  {
    id: "vocab-381",
    category: "vocabulary",
    title: "Congratulations — Tebrikler",
    keywords: ["congratulations","tebrikler","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 What you say when someone does something great.",
      "🇹🇷 Biri harika bir şey yaptığında söylediğin şey."
    ],
    examples: [],
    related_word_ids: [381]
  },
  {
    id: "vocab-382",
    category: "vocabulary",
    title: "Good Luck — İyi Şanslar",
    keywords: ["good luck","i̇yi şanslar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Wishing good things for someone.",
      "🇹🇷 Biri için iyi şeyler dilemek."
    ],
    examples: [],
    related_word_ids: [382]
  },
  {
    id: "vocab-383",
    category: "vocabulary",
    title: "Cheers — Şerefe",
    keywords: ["cheers","şerefe","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Said before drinking with friends.",
      "🇹🇷 Arkadaşlarla içki içmeden önce söylenir."
    ],
    examples: [],
    related_word_ids: [383]
  },
  {
    id: "vocab-384",
    category: "vocabulary",
    title: "To Go Out For — Dışarı Çıkmak",
    keywords: ["to go out for","dışarı çıkmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To leave the house to do something fun.",
      "🇹🇷 Eğlenceli bir şey yapmak için evden çıkmak."
    ],
    examples: [],
    related_word_ids: [384]
  },
  {
    id: "vocab-385",
    category: "vocabulary",
    title: "Come Around For (a Drink) — İçmek İçin Dışarıda Buluşmak",
    keywords: ["come around for (a drink)","i̇çmek i̇çin dışarıda buluşmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To visit someone at their house or outside.",
      "🇹🇷 Birini evinde veya dışarıda ziyaret etmek."
    ],
    examples: [],
    related_word_ids: [385]
  },
  {
    id: "vocab-386",
    category: "vocabulary",
    title: "Invite — Davet Etmek",
    keywords: ["invite","davet etmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To ask someone to come to your party.",
      "🇹🇷 Birinden partine gelmesini istemek."
    ],
    examples: [],
    related_word_ids: [386]
  },
  {
    id: "vocab-387",
    category: "vocabulary",
    title: "Party — Parti",
    keywords: ["party","parti","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 \"A fun meeting with friends, music, and food.\"",
      "🇹🇷 \"Arkadaşlarla, müzik ve yemek olan eğlenceli buluşma.\""
    ],
    examples: [],
    related_word_ids: [387]
  },
  {
    id: "vocab-388",
    category: "vocabulary",
    title: "Great — Harika",
    keywords: ["great","harika","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Very good.",
      "🇹🇷 Çok iyi."
    ],
    examples: [],
    related_word_ids: [388]
  },
  {
    id: "vocab-389",
    category: "vocabulary",
    title: "I'd Love To — Çok İsterim",
    keywords: ["i'd love to","çok i̇sterim","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 \"Saying 'yes' to an invitation happily.\"",
      "🇹🇷 \"Bir davete mutlu bir şekilde 'evet' demek.\""
    ],
    examples: [],
    related_word_ids: [389]
  },
  {
    id: "vocab-390",
    category: "vocabulary",
    title: "That Sounds Lovely — Kulağa Hoş Geliyor",
    keywords: ["that sounds lovely","kulağa hoş geliyor","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 That seems like a very nice idea.",
      "🇹🇷 Bu çok güzel bir fikir gibi görünüyor."
    ],
    examples: [],
    related_word_ids: [390]
  },
  {
    id: "vocab-391",
    category: "vocabulary",
    title: "I'm Afraid I Can't — Korkarım Yapamam",
    keywords: ["i'm afraid i can't","korkarım yapamam","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 \"A polite way to say 'no'.\"",
      "🇹🇷 \"Hayır' demenin kibar bir yolu.\""
    ],
    examples: [],
    related_word_ids: [391]
  },
  {
    id: "vocab-392",
    category: "vocabulary",
    title: "Suggest — Önermek",
    keywords: ["suggest","önermek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To give an idea.",
      "🇹🇷 Bir fikir vermek."
    ],
    examples: [],
    related_word_ids: [392]
  },
  {
    id: "vocab-393",
    category: "vocabulary",
    title: "Offer — Ismarlamak",
    keywords: ["offer","ismarlamak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To ask if someone wants something.",
      "🇹🇷 Birinin bir şey isteyip istemediğini sormak."
    ],
    examples: [],
    related_word_ids: [393]
  },
  {
    id: "vocab-394",
    category: "vocabulary",
    title: "Accept — Kabul Etmek",
    keywords: ["accept","kabul etmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 \"To say 'yes'.\"",
      "🇹🇷 \"'Evet' demek.\""
    ],
    examples: [],
    related_word_ids: [394]
  },
  {
    id: "vocab-395",
    category: "vocabulary",
    title: "Refuse — Geri Çevirmek",
    keywords: ["refuse","geri çevirmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 \"To say 'no'.\"",
      "🇹🇷 \"'Hayır' demek.\""
    ],
    examples: [],
    related_word_ids: [395]
  },
  {
    id: "vocab-396",
    category: "vocabulary",
    title: "Let Me Pay — Bırak Ben Ödeyeyim",
    keywords: ["let me pay","bırak ben ödeyeyim","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 I will give the money for this.",
      "🇹🇷 Bunun için parayı ben vereceğim."
    ],
    examples: [],
    related_word_ids: [396]
  },
  {
    id: "vocab-397",
    category: "vocabulary",
    title: "Let Me Give You a Lift — Ben Seni Bırakayım",
    keywords: ["let me give you a lift","ben seni bırakayım","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 I will drive you in my car.",
      "🇹🇷 Seni arabamla götüreceğim."
    ],
    examples: [],
    related_word_ids: [397]
  },
  {
    id: "vocab-398",
    category: "vocabulary",
    title: "Apologize To Something — Bir Şey İçin Özür Dilemek",
    keywords: ["apologize to something","bir şey i̇çin özür dilemek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To say sorry for doing something wrong.",
      "🇹🇷 Yanlış bir şey yaptığın için üzgün olduğunu söylemek."
    ],
    examples: [],
    related_word_ids: [398]
  },
  {
    id: "vocab-399",
    category: "vocabulary",
    title: "Rude — Kaba",
    keywords: ["rude","kaba","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Not polite; speaking badly.",
      "🇹🇷 Kibar olmayan; kötü konuşan."
    ],
    examples: [],
    related_word_ids: [399]
  },
  {
    id: "vocab-400",
    category: "vocabulary",
    title: "Lose — Kaybetmek",
    keywords: ["lose","kaybetmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Not knowing where your thing is.",
      "🇹🇷 Eşyanın nerede olduğunu bilmemek."
    ],
    examples: [],
    related_word_ids: [400]
  },
  {
    id: "vocab-401",
    category: "vocabulary",
    title: "Excellent — Harika",
    keywords: ["excellent","harika","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Really perfect.",
      "🇹🇷 Gerçekten mükemmel."
    ],
    examples: [],
    related_word_ids: [401]
  },
  {
    id: "vocab-402",
    category: "vocabulary",
    title: "Think — Düşünmek",
    keywords: ["think","düşünmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To use your mind.",
      "🇹🇷 Zihnini kullanmak."
    ],
    examples: [],
    related_word_ids: [402]
  },
  {
    id: "vocab-403",
    category: "vocabulary",
    title: "Thought — Düşünce",
    keywords: ["thought","düşünce","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 An idea in your head.",
      "🇹🇷 Kafandaki bir fikir."
    ],
    examples: [],
    related_word_ids: [403]
  },
  {
    id: "vocab-404",
    category: "vocabulary",
    title: "Agree With Someone — Biriyle Aynı Fikirde Olmak",
    keywords: ["agree with someone","biriyle aynı fikirde olmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To have the same idea as another person.",
      "🇹🇷 Başka bir kişiyle aynı fikre sahip olmak."
    ],
    examples: [],
    related_word_ids: [404]
  },
  {
    id: "vocab-405",
    category: "vocabulary",
    title: "Personally — Kişisel Olarak",
    keywords: ["personally","kişisel olarak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 My own opinion is...",
      "🇹🇷 Benim kendi fikrim..."
    ],
    examples: [],
    related_word_ids: [405]
  },
  {
    id: "vocab-406",
    category: "vocabulary",
    title: "A Waste of Money / Time — Para İsrafı / Zaman Kaybı",
    keywords: ["a waste of money / time","para i̇srafı / zaman kaybı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Using time for no good reason.",
      "🇹🇷 Zamanı iyi bir neden olmadan kullanmak."
    ],
    examples: [],
    related_word_ids: [406]
  },
  {
    id: "vocab-407",
    category: "vocabulary",
    title: "Take a Message — Mesaj / Not Almak",
    keywords: ["take a message","mesaj / not almak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To write down words from someone on the phone.",
      "🇹🇷 Telefondaki birinden gelen sözleri yazmak."
    ],
    examples: [],
    related_word_ids: [407]
  },
  {
    id: "vocab-408",
    category: "vocabulary",
    title: "Leave a Message — Mesaj Bırakmak",
    keywords: ["leave a message","mesaj bırakmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To say words for someone who is not there.",
      "🇹🇷 Orada olmayan biri için sözler söylemek."
    ],
    examples: [],
    related_word_ids: [408]
  },
  {
    id: "vocab-409",
    category: "vocabulary",
    title: "Line is Busy / Engaged — Hat Meşgul",
    keywords: ["line is busy / engaged","hat meşgul","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The person is already talking on the phone.",
      "🇹🇷 Kişi zaten telefonda konuşuyor."
    ],
    examples: [],
    related_word_ids: [409]
  },
  {
    id: "vocab-410",
    category: "vocabulary",
    title: "Wrong Number — Yanlış Numara",
    keywords: ["wrong number","yanlış numara","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Calling a person you did not want to call.",
      "🇹🇷 Aramak istemediğin bir kişiyi aramak."
    ],
    examples: [],
    related_word_ids: [410]
  },
  {
    id: "vocab-1001",
    category: "vocabulary",
    title: "Anniversaries — Yıl dönümleri",
    keywords: ["anniversaries","yıl dönümleri","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Special dates we remember every year.",
      "🇹🇷 Her yıl hatırladığımız özel tarihler."
    ],
    examples: [],
    related_word_ids: [1001]
  },
  {
    id: "vocab-1002",
    category: "vocabulary",
    title: "Architecture — Mimari",
    keywords: ["architecture","mimari","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The art of planning and making buildings.",
      "🇹🇷 Bina planlama ve inşa etme sanatı."
    ],
    examples: [],
    related_word_ids: [1002]
  },
  {
    id: "vocab-1003",
    category: "vocabulary",
    title: "Beach — Plaj / Kumsal",
    keywords: ["beach","plaj / kumsal","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A sandy place next to the sea.",
      "🇹🇷 Deniz kenarındaki kumlu yer."
    ],
    examples: [],
    related_word_ids: [1003]
  },
  {
    id: "vocab-1004",
    category: "vocabulary",
    title: "Beautiful — Güzel",
    keywords: ["beautiful","güzel","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Very nice to look at.",
      "🇹🇷 Bakması çok hoş olan."
    ],
    examples: [],
    related_word_ids: [1004]
  },
  {
    id: "vocab-1005",
    category: "vocabulary",
    title: "Believe — İnanmak",
    keywords: ["believe","i̇nanmak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To think that something is true.",
      "🇹🇷 Bir şeyin doğru olduğunu düşünmek."
    ],
    examples: [],
    related_word_ids: [1005]
  },
  {
    id: "vocab-1006",
    category: "vocabulary",
    title: "Border — Sınır",
    keywords: ["border","sınır","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The line between two countries.",
      "🇹🇷 İki ülke arasındaki çizgi."
    ],
    examples: [],
    related_word_ids: [1006]
  },
  {
    id: "vocab-1007",
    category: "vocabulary",
    title: "Both — İkisi de / Her ikisi",
    keywords: ["both","i̇kisi de / her ikisi","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The two things together.",
      "🇹🇷 İki şeyin birden olması."
    ],
    examples: [],
    related_word_ids: [1007]
  },
  {
    id: "vocab-1008",
    category: "vocabulary",
    title: "Bowl — Kase",
    keywords: ["bowl","kase","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A deep, round dish for food like soup.",
      "🇹🇷 Çorba gibi yiyecekler için derin, yuvarlak kap."
    ],
    examples: [],
    related_word_ids: [1008]
  },
  {
    id: "vocab-1009",
    category: "vocabulary",
    title: "Cheap — Ucuz",
    keywords: ["cheap","ucuz","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Not costing a lot of money.",
      "🇹🇷 Çok para gerektirmeyen."
    ],
    examples: [],
    related_word_ids: [1009]
  },
  {
    id: "vocab-1010",
    category: "vocabulary",
    title: "Cliffs — Uçurumlar / Kayalıklar",
    keywords: ["cliffs","uçurumlar / kayalıklar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 High, steep rocks next to the sea.",
      "🇹🇷 Deniz kenarındaki yüksek, dik kayalar."
    ],
    examples: [],
    related_word_ids: [1010]
  },
  {
    id: "vocab-1011",
    category: "vocabulary",
    title: "Climate — İklim",
    keywords: ["climate","i̇klim","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The normal weather in a place.",
      "🇹🇷 Bir yerdeki normal hava durumu."
    ],
    examples: [],
    related_word_ids: [1011]
  },
  {
    id: "vocab-1012",
    category: "vocabulary",
    title: "Coast — Sahil / Kıyı",
    keywords: ["coast","sahil / kıyı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The land next to the sea.",
      "🇹🇷 Denizin yanındaki kara parçası."
    ],
    examples: [],
    related_word_ids: [1012]
  },
  {
    id: "vocab-1013",
    category: "vocabulary",
    title: "Continent — Kıta",
    keywords: ["continent","kıta","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 One of the very large land areas on Earth.",
      "🇹🇷 Dünyadaki çok büyük kara parçalarından biri."
    ],
    examples: [],
    related_word_ids: [1013]
  },
  {
    id: "vocab-1014",
    category: "vocabulary",
    title: "Cook Lunch — Öğle Yemeği Pişirmek",
    keywords: ["cook lunch","öğle yemeği pişirmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To prepare the middle-of-the-day meal.",
      "🇹🇷 Gün ortası yemeğini hazırlamak."
    ],
    examples: [],
    related_word_ids: [1014]
  },
  {
    id: "vocab-1015",
    category: "vocabulary",
    title: "Customers — Müşteriler",
    keywords: ["customers","müşteriler","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 People who buy things in a shop.",
      "🇹🇷 Bir dükkandan bir şeyler satın alan insanlar."
    ],
    examples: [],
    related_word_ids: [1015]
  },
  {
    id: "vocab-1016",
    category: "vocabulary",
    title: "Delicious — Lezzetli",
    keywords: ["delicious","lezzetli","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Tasting really good.",
      "🇹🇷 Tadı gerçekten çok güzel olan."
    ],
    examples: [],
    related_word_ids: [1016]
  },
  {
    id: "vocab-1017",
    category: "vocabulary",
    title: "Discuss — Tartışmak / Görüşmek",
    keywords: ["discuss","tartışmak / görüşmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To talk about something with someone.",
      "🇹🇷 Biriyle bir konu hakkında konuşmak."
    ],
    examples: [],
    related_word_ids: [1017]
  },
  {
    id: "vocab-1018",
    category: "vocabulary",
    title: "Domestic — Yerli / Evcil",
    keywords: ["domestic","yerli / evcil","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 About the home or the inside of a country.",
      "🇹🇷 Evle veya bir ülkenin içiyle ilgili."
    ],
    examples: [],
    related_word_ids: [1018]
  },
  {
    id: "vocab-1019",
    category: "vocabulary",
    title: "Dozens — Düzinelerce",
    keywords: ["dozens","düzinelerce","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Groups of twelve things, or just many things.",
      "🇹🇷 On ikili gruplar veya çok sayıda olan şeyler."
    ],
    examples: [],
    related_word_ids: [1019]
  },
  {
    id: "vocab-1020",
    category: "vocabulary",
    title: "Driest — En kurak",
    keywords: ["driest","en kurak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Having the least rain or water.",
      "🇹🇷 En az yağmuru veya suyu olan."
    ],
    examples: [],
    related_word_ids: [1020]
  },
  {
    id: "vocab-1021",
    category: "vocabulary",
    title: "Dystopic — Distopik",
    keywords: ["dystopic","distopik","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 About a very bad future world.",
      "🇹🇷 Gelecekteki çok kötü bir dünya ile ilgili."
    ],
    examples: [],
    related_word_ids: [1021]
  },
  {
    id: "vocab-1022",
    category: "vocabulary",
    title: "East — Doğu",
    keywords: ["east","doğu","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The direction where the sun comes up.",
      "🇹🇷 Güneşin doğduğu yön."
    ],
    examples: [],
    related_word_ids: [1022]
  },
  {
    id: "vocab-1023",
    category: "vocabulary",
    title: "Excitement — Heyecan",
    keywords: ["excitement","heyecan","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A feeling of being very happy and active.",
      "🇹🇷 Çok mutlu ve aktif hissetme durumu."
    ],
    examples: [],
    related_word_ids: [1023]
  },
  {
    id: "vocab-1024",
    category: "vocabulary",
    title: "Extensive — Kapsamlı / Geniş çaplı",
    keywords: ["extensive","kapsamlı / geniş çaplı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Very large and having many details.",
      "🇹🇷 Çok büyük ve birçok detayı olan."
    ],
    examples: [],
    related_word_ids: [1024]
  },
  {
    id: "vocab-1025",
    category: "vocabulary",
    title: "Extremes — Uç noktalar / Aşırılıklar",
    keywords: ["extremes","uç noktalar / aşırılıklar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The highest and lowest levels of something.",
      "🇹🇷 Bir şeyin en yüksek ve en düşük seviyeleri."
    ],
    examples: [],
    related_word_ids: [1025]
  },
  {
    id: "vocab-1026",
    category: "vocabulary",
    title: "Features — Özellikler",
    keywords: ["features","özellikler","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Important or interesting parts of something.",
      "🇹🇷 Bir şeyin önemli veya ilginç kısımları."
    ],
    examples: [],
    related_word_ids: [1026]
  },
  {
    id: "vocab-1027",
    category: "vocabulary",
    title: "Fjords — Fiyortlar",
    keywords: ["fjords","fiyortlar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Long, narrow areas of sea between high rocks.",
      "🇹🇷 Yüksek kayalar arasındaki uzun, dar deniz alanları."
    ],
    examples: [],
    related_word_ids: [1027]
  },
  {
    id: "vocab-1028",
    category: "vocabulary",
    title: "Forest — Orman",
    keywords: ["forest","orman","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A large place with many trees.",
      "🇹🇷 Çok sayıda ağacın olduğu büyük yer."
    ],
    examples: [],
    related_word_ids: [1028]
  },
  {
    id: "vocab-1029",
    category: "vocabulary",
    title: "Form — Biçim / Şekillendirmek",
    keywords: ["form","biçim / şekillendirmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To make the shape of something.",
      "🇹🇷 Bir şeyin şeklini oluşturmak."
    ],
    examples: [],
    related_word_ids: [1029]
  },
  {
    id: "vocab-1030",
    category: "vocabulary",
    title: "Gaze — Gözünü dikip bakmak / Bakış",
    keywords: ["gaze","gözünü dikip bakmak / bakış","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To look at something for a long time.",
      "🇹🇷 Bir şeye uzun süre bakmak."
    ],
    examples: [],
    related_word_ids: [1030]
  },
  {
    id: "vocab-1031",
    category: "vocabulary",
    title: "Geysers — Gayzerler",
    keywords: ["geysers","gayzerler","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Holes in the ground that shoot hot water.",
      "🇹🇷 Yerden sıcak su fırlatan delikler."
    ],
    examples: [],
    related_word_ids: [1031]
  },
  {
    id: "vocab-1032",
    category: "vocabulary",
    title: "Glad — Memnun",
    keywords: ["glad","memnun","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Happy and pleased.",
      "🇹🇷 Mutlu ve hoşnut olan."
    ],
    examples: [],
    related_word_ids: [1032]
  },
  {
    id: "vocab-1033",
    category: "vocabulary",
    title: "Gold — Altın",
    keywords: ["gold","altın","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A yellow, expensive metal.",
      "🇹🇷 Sarı, pahalı bir metal."
    ],
    examples: [],
    related_word_ids: [1033]
  },
  {
    id: "vocab-1034",
    category: "vocabulary",
    title: "Gravy — Et suyu sosu",
    keywords: ["gravy","et suyu sosu","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A brown sauce made from meat juices.",
      "🇹🇷 Et suyundan yapılan kahverengi sos."
    ],
    examples: [],
    related_word_ids: [1034]
  },
  {
    id: "vocab-1035",
    category: "vocabulary",
    title: "Guide — Rehber / Rehberlik etmek",
    keywords: ["guide","rehber / rehberlik etmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To show people the way.",
      "🇹🇷 İnsanlara yolu göstermek."
    ],
    examples: [],
    related_word_ids: [1035]
  },
  {
    id: "vocab-1036",
    category: "vocabulary",
    title: "Herb — Bitki / Baharat otu",
    keywords: ["herb","bitki / baharat otu","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A plant used to give food more flavor.",
      "🇹🇷 Yemeğe tat vermek için kullanılan bitki."
    ],
    examples: [],
    related_word_ids: [1036]
  },
  {
    id: "vocab-1037",
    category: "vocabulary",
    title: "High — Yüksek",
    keywords: ["high","yüksek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Tall or far up.",
      "🇹🇷 Uzun veya çok yukarıda olan."
    ],
    examples: [],
    related_word_ids: [1037]
  },
  {
    id: "vocab-1038",
    category: "vocabulary",
    title: "Hill — Tepe",
    keywords: ["hill","tepe","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A small mountain.",
      "🇹🇷 Küçük bir dağ."
    ],
    examples: [],
    related_word_ids: [1038]
  },
  {
    id: "vocab-1039",
    category: "vocabulary",
    title: "Hospitality — Misafirperverlik",
    keywords: ["hospitality","misafirperverlik","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Being friendly and welcoming to guests.",
      "🇹🇷 Misafirlere karşı dost canlısı ve sıcakkanlı olmak."
    ],
    examples: [],
    related_word_ids: [1039]
  },
  {
    id: "vocab-1040",
    category: "vocabulary",
    title: "Idea — Fikir",
    keywords: ["idea","fikir","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A thought or a plan.",
      "🇹🇷 Bir düşünce veya plan."
    ],
    examples: [],
    related_word_ids: [1040]
  },
  {
    id: "vocab-1041",
    category: "vocabulary",
    title: "Impressive — Etkileyici",
    keywords: ["impressive","etkileyici","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Making you say 'wow' because it is so good.",
      "🇹🇷 Çok iyi olduğu için sana 'vay canına' dedirten."
    ],
    examples: [],
    related_word_ids: [1041]
  },
  {
    id: "vocab-1042",
    category: "vocabulary",
    title: "Include — İçermek / Dahil etmek",
    keywords: ["include","i̇çermek / dahil etmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To have something as a part.",
      "🇹🇷 Bir şeyi kendi içinde parça olarak bulundurmak."
    ],
    examples: [],
    related_word_ids: [1042]
  },
  {
    id: "vocab-1043",
    category: "vocabulary",
    title: "Incredible — İnanılmaz",
    keywords: ["incredible","i̇nanılmaz","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Hard to believe because it is so great.",
      "🇹🇷 Çok harika olduğu için inanması zor olan."
    ],
    examples: [],
    related_word_ids: [1043]
  },
  {
    id: "vocab-1044",
    category: "vocabulary",
    title: "Internship — Staj",
    keywords: ["internship","staj","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A short job to learn how to work.",
      "🇹🇷 Nasıl çalışılacağını öğrenmek için kısa süreli iş."
    ],
    examples: [],
    related_word_ids: [1044]
  },
  {
    id: "vocab-1045",
    category: "vocabulary",
    title: "Island — Ada",
    keywords: ["island","ada","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Land with water all around it.",
      "🇹🇷 Etrafı tamamen suyla çevrili kara parçası."
    ],
    examples: [],
    related_word_ids: [1045]
  },
  {
    id: "vocab-1046",
    category: "vocabulary",
    title: "Jewelry — Mücevher / Takı",
    keywords: ["jewelry","mücevher / takı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Rings and necklaces you wear to look nice.",
      "🇹🇷 Güzel görünmek için taktığın yüzükler ve kolyeler."
    ],
    examples: [],
    related_word_ids: [1046]
  },
  {
    id: "vocab-1047",
    category: "vocabulary",
    title: "Lake — Göl",
    keywords: ["lake","göl","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A large body of water with land around it.",
      "🇹🇷 Etrafında kara olan büyük su birikintisi."
    ],
    examples: [],
    related_word_ids: [1047]
  },
  {
    id: "vocab-1048",
    category: "vocabulary",
    title: "Landscape — Manzara / Peyzaj",
    keywords: ["landscape","manzara / peyzaj","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 All the things you see when you look across an area.",
      "🇹🇷 Bir alana baktığında gördüğün her şey."
    ],
    examples: [],
    related_word_ids: [1048]
  },
  {
    id: "vocab-1049",
    category: "vocabulary",
    title: "Long — Uzun",
    keywords: ["long","uzun","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Not short.",
      "🇹🇷 Kısa olmayan."
    ],
    examples: [],
    related_word_ids: [1049]
  },
  {
    id: "vocab-1050",
    category: "vocabulary",
    title: "Magnificent — Muhteşem / Görkemli",
    keywords: ["magnificent","muhteşem / görkemli","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Extremely beautiful or great.",
      "🇹🇷 Son derece güzel veya harika."
    ],
    examples: [],
    related_word_ids: [1050]
  },
  {
    id: "vocab-1051",
    category: "vocabulary",
    title: "Manager — Yönetici / Müdür",
    keywords: ["manager","yönetici / müdür","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The boss of a shop or an office.",
      "🇹🇷 Bir dükkanın veya ofisin yöneticisi/patronu."
    ],
    examples: [],
    related_word_ids: [1051]
  },
  {
    id: "vocab-1052",
    category: "vocabulary",
    title: "Mash — Püre / Ezmek",
    keywords: ["mash","püre / ezmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To crush food until it is soft.",
      "🇹🇷 Yiyecekleri yumuşayana kadar ezmek."
    ],
    examples: [],
    related_word_ids: [1052]
  },
  {
    id: "vocab-1053",
    category: "vocabulary",
    title: "Mountains — Dağlar",
    keywords: ["mountains","dağlar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Very high and big hills.",
      "🇹🇷 Çok yüksek ve büyük tepeler."
    ],
    examples: [],
    related_word_ids: [1053]
  },
  {
    id: "vocab-1054",
    category: "vocabulary",
    title: "Narrow — Dar",
    keywords: ["narrow","dar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Not wide.",
      "🇹🇷 Geniş olmayan."
    ],
    examples: [],
    related_word_ids: [1054]
  },
  {
    id: "vocab-1055",
    category: "vocabulary",
    title: "Neighbor — Komşu",
    keywords: ["neighbor","komşu","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who lives near you.",
      "🇹🇷 Senin yakınında/yanında yaşayan kişi."
    ],
    examples: [],
    related_word_ids: [1055]
  },
  {
    id: "vocab-1056",
    category: "vocabulary",
    title: "North — Kuzey",
    keywords: ["north","kuzey","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The direction at the top of a map.",
      "🇹🇷 Haritanın en üst tarafındaki yön."
    ],
    examples: [],
    related_word_ids: [1056]
  },
  {
    id: "vocab-1057",
    category: "vocabulary",
    title: "Opportunity — Fırsat",
    keywords: ["opportunity","fırsat","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A chance to do something good.",
      "🇹🇷 İyi bir şey yapmak için bir şans."
    ],
    examples: [],
    related_word_ids: [1057]
  },
  {
    id: "vocab-1058",
    category: "vocabulary",
    title: "Peak — Zirve / Doruk",
    keywords: ["peak","zirve / doruk","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The top part of a mountain.",
      "🇹🇷 Bir dağın en üst kısmı."
    ],
    examples: [],
    related_word_ids: [1058]
  },
  {
    id: "vocab-1059",
    category: "vocabulary",
    title: "Prepare — Hazırlamak",
    keywords: ["prepare","hazırlamak","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To get something ready.",
      "🇹🇷 Bir şeyi hazır hale getirmek."
    ],
    examples: [],
    related_word_ids: [1059]
  },
  {
    id: "vocab-1060",
    category: "vocabulary",
    title: "Rise — Yükselmek / Artış",
    keywords: ["rise","yükselmek / artış","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To go up.",
      "🇹🇷 Yukarı doğru çıkmak."
    ],
    examples: [],
    related_word_ids: [1060]
  },
  {
    id: "vocab-1061",
    category: "vocabulary",
    title: "Sensational — Sansasyonel / Çarpıcı",
    keywords: ["sensational","sansasyonel / çarpıcı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Very exciting or surprising.",
      "🇹🇷 Çok heyecan verici veya şaşırtıcı."
    ],
    examples: [],
    related_word_ids: [1061]
  },
  {
    id: "vocab-1062",
    category: "vocabulary",
    title: "Shape — Şekil",
    keywords: ["shape","şekil","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The outer form of something.",
      "🇹🇷 Bir şeyin dış görünüşü veya formu."
    ],
    examples: [],
    related_word_ids: [1062]
  },
  {
    id: "vocab-1063",
    category: "vocabulary",
    title: "Shares — Paylaşır / Paylar",
    keywords: ["shares","paylaşır / paylar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Gives a part of something to others.",
      "🇹🇷 Bir şeyin bir kısmını başkalarına verir."
    ],
    examples: [],
    related_word_ids: [1063]
  },
  {
    id: "vocab-1064",
    category: "vocabulary",
    title: "Short — Kısa",
    keywords: ["short","kısa","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Not long or not tall.",
      "🇹🇷 Uzun veya boylu olmayan."
    ],
    examples: [],
    related_word_ids: [1064]
  },
  {
    id: "vocab-1065",
    category: "vocabulary",
    title: "Silver — Gümüş",
    keywords: ["silver","gümüş","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A grey and white, expensive metal.",
      "🇹🇷 Gri ve beyaz renkli, pahalı bir metal."
    ],
    examples: [],
    related_word_ids: [1065]
  },
  {
    id: "vocab-1066",
    category: "vocabulary",
    title: "Slang — Argo",
    keywords: ["slang","argo","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Informal words used by people.",
      "🇹🇷 İnsanların kullandığı resmi olmayan günlük kelimeler."
    ],
    examples: [],
    related_word_ids: [1066]
  },
  {
    id: "vocab-1067",
    category: "vocabulary",
    title: "Sophisticated — Sofistike / Çok yönlü",
    keywords: ["sophisticated","sofistike / çok yönlü","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Knowing a lot about culture and style.",
      "🇹🇷 Kültür ve stil hakkında çok şey bilen."
    ],
    examples: [],
    related_word_ids: [1067]
  },
  {
    id: "vocab-1068",
    category: "vocabulary",
    title: "South — Güney",
    keywords: ["south","güney","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The direction at the bottom of a map.",
      "🇹🇷 Haritanın en alt tarafındaki yön."
    ],
    examples: [],
    related_word_ids: [1068]
  },
  {
    id: "vocab-1069",
    category: "vocabulary",
    title: "Special — Özel",
    keywords: ["special","özel","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Different from what is normal; important.",
      "🇹🇷 Normalden farklı olan; önemli."
    ],
    examples: [],
    related_word_ids: [1069]
  },
  {
    id: "vocab-1070",
    category: "vocabulary",
    title: "Suggest — Önermek",
    keywords: ["suggest","önermek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To give an idea for someone to think about.",
      "🇹🇷 Birinin düşünmesi için ona bir fikir vermek."
    ],
    examples: [],
    related_word_ids: [1070]
  },
  {
    id: "vocab-1071",
    category: "vocabulary",
    title: "Surrounding — Çevreleyen / Civar",
    keywords: ["surrounding","çevreleyen / civar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Being everywhere around something.",
      "🇹🇷 Bir şeyin her tarafında olan."
    ],
    examples: [],
    related_word_ids: [1071]
  },
  {
    id: "vocab-1072",
    category: "vocabulary",
    title: "Take-Away — Al-götür (Paket servis)",
    keywords: ["take-away","al-götür (paket servis)","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Food you buy at a restaurant and eat at home.",
      "🇹🇷 Restorandan satın alıp evde yediğin yemek."
    ],
    examples: [],
    related_word_ids: [1072]
  },
  {
    id: "vocab-1073",
    category: "vocabulary",
    title: "Think — Düşünmek",
    keywords: ["think","düşünmek","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To use your brain to have an idea.",
      "🇹🇷 Bir fikre sahip olmak için beynini kullanmak."
    ],
    examples: [],
    related_word_ids: [1073]
  },
  {
    id: "vocab-1074",
    category: "vocabulary",
    title: "Topic — Konu / Başlık",
    keywords: ["topic","konu / başlık","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The subject you are talking or writing about.",
      "🇹🇷 Hakkında konuştuğun veya yazdığın şey."
    ],
    examples: [],
    related_word_ids: [1074]
  },
  {
    id: "vocab-1075",
    category: "vocabulary",
    title: "Tourist Guide — Turist Rehberi",
    keywords: ["tourist guide","turist rehberi","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who shows interesting places to visitors.",
      "🇹🇷 Ziyaretçilere ilginç yerleri gösteren kişi."
    ],
    examples: [],
    related_word_ids: [1075]
  },
  {
    id: "vocab-1076",
    category: "vocabulary",
    title: "Trail — Patika / İz",
    keywords: ["trail","patika / i̇z","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A path in the countryside.",
      "🇹🇷 Kırsal alandaki doğal yol."
    ],
    examples: [],
    related_word_ids: [1076]
  },
  {
    id: "vocab-1077",
    category: "vocabulary",
    title: "Valley — Vadi",
    keywords: ["valley","vadi","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The low land between mountains.",
      "🇹🇷 Dağların arasındaki alçak arazi."
    ],
    examples: [],
    related_word_ids: [1077]
  },
  {
    id: "vocab-1078",
    category: "vocabulary",
    title: "Vast — Uçsuz bucaksız / Çok geniş",
    keywords: ["vast","uçsuz bucaksız / çok geniş","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Very, very large.",
      "🇹🇷 Çok ama çok büyük."
    ],
    examples: [],
    related_word_ids: [1078]
  },
  {
    id: "vocab-1079",
    category: "vocabulary",
    title: "Very Beautiful — Çok Güzel",
    keywords: ["very beautiful","çok güzel","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Looking extremely nice.",
      "🇹🇷 Son derece hoş/güzel görünen."
    ],
    examples: [],
    related_word_ids: [1079]
  },
  {
    id: "vocab-1080",
    category: "vocabulary",
    title: "Vinegar — Sirke",
    keywords: ["vinegar","sirke","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A sour liquid used with food.",
      "🇹🇷 Yiyeceklerle birlikte kullanılan ekşi sıvı."
    ],
    examples: [],
    related_word_ids: [1080]
  },
  {
    id: "vocab-1081",
    category: "vocabulary",
    title: "Volcanoes — Volkanlar / Yanardağlar",
    keywords: ["volcanoes","volkanlar / yanardağlar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Mountains that can blow hot fire and rocks.",
      "🇹🇷 Sıcak ateş ve taşlar püskürtebilen dağlar."
    ],
    examples: [],
    related_word_ids: [1081]
  },
  {
    id: "vocab-1082",
    category: "vocabulary",
    title: "Waterfalls — Şelaleler",
    keywords: ["waterfalls","şelaleler","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Places where water falls down from a high rock.",
      "🇹🇷 Suyun yüksek bir kayadan aşağı düştüğü yerler."
    ],
    examples: [],
    related_word_ids: [1082]
  },
  {
    id: "vocab-1083",
    category: "vocabulary",
    title: "Wave — Dalga",
    keywords: ["wave","dalga","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Water moving up and down in the sea.",
      "🇹🇷 Denizde aşağı yukarı hareket eden su."
    ],
    examples: [],
    related_word_ids: [1083]
  },
  {
    id: "vocab-1084",
    category: "vocabulary",
    title: "West — Batı",
    keywords: ["west","batı","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The direction where the sun goes down.",
      "🇹🇷 Güneşin battığı yön."
    ],
    examples: [],
    related_word_ids: [1084]
  },
  {
    id: "vocab-1085",
    category: "vocabulary",
    title: "Western — Batılı / Batıya ait",
    keywords: ["western","batılı / batıya ait","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 From the west part of the world.",
      "🇹🇷 Dünyanın batı kısmından olan."
    ],
    examples: [],
    related_word_ids: [1085]
  },
  {
    id: "vocab-1086",
    category: "vocabulary",
    title: "Wide — Geniş",
    keywords: ["wide","geniş","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Large from one side to the other.",
      "🇹🇷 Bir taraftan diğer tarafa büyük/açık olan."
    ],
    examples: [],
    related_word_ids: [1086]
  },
  {
    id: "vocab-1087",
    category: "vocabulary",
    title: "Wonderful — Harika / Mükemmel",
    keywords: ["wonderful","harika / mükemmel","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Making you feel very happy, great.",
      "🇹🇷 Seni çok mutlu hissettiren, harika."
    ],
    examples: [],
    related_word_ids: [1087]
  },
  {
    id: "vocab-1088",
    category: "vocabulary",
    title: "Woods — Ormanlık alan / Koruluk",
    keywords: ["woods","ormanlık alan / koruluk","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A small forest with many trees.",
      "🇹🇷 Çok sayıda ağacın olduğu küçük orman."
    ],
    examples: [],
    related_word_ids: [1088]
  },
  {
    id: "vocab-1089",
    category: "vocabulary",
    title: "Yelling — Bağırma / Haykırma",
    keywords: ["yelling","bağırma / haykırma","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Shouting very loudly.",
      "🇹🇷 Çok yüksek sesle bağırmak."
    ],
    examples: [],
    related_word_ids: [1089]
  },
  {
    id: "vocab-1090",
    category: "vocabulary",
    title: "Beaches — Plajlar / Kumsallar",
    keywords: ["beaches","plajlar / kumsallar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Sandy places next to the sea.",
      "🇹🇷 Deniz kenarındaki kumlu yerler."
    ],
    examples: [],
    related_word_ids: [1090]
  },
  {
    id: "vocab-1091",
    category: "vocabulary",
    title: "Borders — Sınırlar",
    keywords: ["borders","sınırlar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Lines between countries.",
      "🇹🇷 Ülkeler arasındaki çizgiler."
    ],
    examples: [],
    related_word_ids: [1091]
  },
  {
    id: "vocab-1092",
    category: "vocabulary",
    title: "Bowls — Kaseler",
    keywords: ["bowls","kaseler","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Deep, round dishes for food.",
      "🇹🇷 Yemek için derin, yuvarlak kaplar."
    ],
    examples: [],
    related_word_ids: [1092]
  },
  {
    id: "vocab-1093",
    category: "vocabulary",
    title: "Climates — İklimler",
    keywords: ["climates","i̇klimler","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The normal weather in different places.",
      "🇹🇷 Farklı yerlerdeki normal hava durumları."
    ],
    examples: [],
    related_word_ids: [1093]
  },
  {
    id: "vocab-1094",
    category: "vocabulary",
    title: "Coasts — Sahiller / Kıyılar",
    keywords: ["coasts","sahiller / kıyılar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Lands next to the sea.",
      "🇹🇷 Deniz kenarındaki kara parçaları."
    ],
    examples: [],
    related_word_ids: [1094]
  },
  {
    id: "vocab-1095",
    category: "vocabulary",
    title: "Continents — Kıtalar",
    keywords: ["continents","kıtalar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The large land areas on Earth.",
      "🇹🇷 Dünyadaki büyük kara parçaları."
    ],
    examples: [],
    related_word_ids: [1095]
  },
  {
    id: "vocab-1096",
    category: "vocabulary",
    title: "Forests — Ormanlar",
    keywords: ["forests","ormanlar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Large places with many trees.",
      "🇹🇷 Çok ağacın olduğu büyük yerler."
    ],
    examples: [],
    related_word_ids: [1096]
  },
  {
    id: "vocab-1097",
    category: "vocabulary",
    title: "Forms — Biçimler / Şekiller",
    keywords: ["forms","biçimler / şekiller","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Different shapes of things.",
      "🇹🇷 Şeylerin farklı şekilleri."
    ],
    examples: [],
    related_word_ids: [1097]
  },
  {
    id: "vocab-1098",
    category: "vocabulary",
    title: "Gazes — Bakışlar",
    keywords: ["gazes","bakışlar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Long looks at something.",
      "🇹🇷 Bir şeye atılan uzun bakışlar."
    ],
    examples: [],
    related_word_ids: [1098]
  },
  {
    id: "vocab-1099",
    category: "vocabulary",
    title: "Guides — Rehberler",
    keywords: ["guides","rehberler","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 People who show you places.",
      "🇹🇷 Sana yerleri gösteren kişiler."
    ],
    examples: [],
    related_word_ids: [1099]
  },
  {
    id: "vocab-1100",
    category: "vocabulary",
    title: "Herbs — Bitkiler / Baharat otları",
    keywords: ["herbs","bitkiler / baharat otları","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Plants used to give food more flavor.",
      "🇹🇷 Yemeğe tat vermek için kullanılan bitkiler."
    ],
    examples: [],
    related_word_ids: [1100]
  },
  {
    id: "vocab-1101",
    category: "vocabulary",
    title: "Hills — Tepeler",
    keywords: ["hills","tepeler","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Small mountains.",
      "🇹🇷 Küçük dağlar."
    ],
    examples: [],
    related_word_ids: [1101]
  },
  {
    id: "vocab-1102",
    category: "vocabulary",
    title: "Ideas — Fikirler",
    keywords: ["ideas","fikirler","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Thoughts or plans.",
      "🇹🇷 Düşünceler veya planlar."
    ],
    examples: [],
    related_word_ids: [1102]
  },
  {
    id: "vocab-1103",
    category: "vocabulary",
    title: "Internships — Stajlar",
    keywords: ["internships","stajlar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Short jobs to learn how to work.",
      "🇹🇷 Nasıl çalışılacağını öğrenmek için kısa işler."
    ],
    examples: [],
    related_word_ids: [1103]
  },
  {
    id: "vocab-1104",
    category: "vocabulary",
    title: "Islands — Adalar",
    keywords: ["islands","adalar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Lands with water all around them.",
      "🇹🇷 Etrafları tamamen suyla çevrili karalar."
    ],
    examples: [],
    related_word_ids: [1104]
  },
  {
    id: "vocab-1105",
    category: "vocabulary",
    title: "Lakes — Göller",
    keywords: ["lakes","göller","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Large areas of water with land around them.",
      "🇹🇷 Etraflarında kara olan büyük su alanları."
    ],
    examples: [],
    related_word_ids: [1105]
  },
  {
    id: "vocab-1106",
    category: "vocabulary",
    title: "Landscapes — Manzaralar / Peyzajlar",
    keywords: ["landscapes","manzaralar / peyzajlar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The looks of the lands.",
      "🇹🇷 Geniş arazilerin görünümleri."
    ],
    examples: [],
    related_word_ids: [1106]
  },
  {
    id: "vocab-1107",
    category: "vocabulary",
    title: "Managers — Yöneticiler / Müdürler",
    keywords: ["managers","yöneticiler / müdürler","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Bosses of shops or offices.",
      "🇹🇷 Dükkanların veya ofislerin patronları."
    ],
    examples: [],
    related_word_ids: [1107]
  },
  {
    id: "vocab-1108",
    category: "vocabulary",
    title: "Neighbors — Komşular",
    keywords: ["neighbors","komşular","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 People who live near you.",
      "🇹🇷 Yakınında yaşayan insanlar."
    ],
    examples: [],
    related_word_ids: [1108]
  },
  {
    id: "vocab-1109",
    category: "vocabulary",
    title: "Opportunities — Fırsatlar",
    keywords: ["opportunities","fırsatlar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Chances to do something good.",
      "🇹🇷 İyi şeyler yapmak için eline geçen şanslar."
    ],
    examples: [],
    related_word_ids: [1109]
  },
  {
    id: "vocab-1110",
    category: "vocabulary",
    title: "Peaks — Zirveler / Doruklar",
    keywords: ["peaks","zirveler / doruklar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The top parts of mountains.",
      "🇹🇷 Dağların en üst kısımları."
    ],
    examples: [],
    related_word_ids: [1110]
  },
  {
    id: "vocab-1111",
    category: "vocabulary",
    title: "Shapes — Şekiller",
    keywords: ["shapes","şekiller","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The outer forms of things.",
      "🇹🇷 Nesnelerin dış formları."
    ],
    examples: [],
    related_word_ids: [1111]
  },
  {
    id: "vocab-1112",
    category: "vocabulary",
    title: "Topics — Konular / Başlıklar",
    keywords: ["topics","konular / başlıklar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Subjects you talk or write about.",
      "🇹🇷 Hakkında konuştuğun veya yazdığın şeyler."
    ],
    examples: [],
    related_word_ids: [1112]
  },
  {
    id: "vocab-1113",
    category: "vocabulary",
    title: "Tourist Guides — Turist Rehberleri",
    keywords: ["tourist guides","turist rehberleri","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 People who show places to visitors.",
      "🇹🇷 Ziyaretçilere ilginç yerleri gösteren kişiler."
    ],
    examples: [],
    related_word_ids: [1113]
  },
  {
    id: "vocab-1114",
    category: "vocabulary",
    title: "Trails — Patikalar / İzler",
    keywords: ["trails","patikalar / i̇zler","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Paths in the countryside.",
      "🇹🇷 Kırsal alanlardaki doğal yollar."
    ],
    examples: [],
    related_word_ids: [1114]
  },
  {
    id: "vocab-1115",
    category: "vocabulary",
    title: "Valleys — Vadiler",
    keywords: ["valleys","vadiler","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Low lands between mountains.",
      "🇹🇷 Dağların arasındaki alçak araziler."
    ],
    examples: [],
    related_word_ids: [1115]
  },
  {
    id: "vocab-1116",
    category: "vocabulary",
    title: "Waves — Dalgalar",
    keywords: ["waves","dalgalar","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Moving waters in the sea.",
      "🇹🇷 Denizdeki hareketli sular."
    ],
    examples: [],
    related_word_ids: [1116]
  },
  {
    id: "vocab-1117",
    category: "vocabulary",
    title: "Anniversary — Yıl dönümü",
    keywords: ["anniversary","yıl dönümü","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A special date we remember every year.",
      "🇹🇷 Her yıl hatırladığımız özel gün."
    ],
    examples: [],
    related_word_ids: [1117]
  },
  {
    id: "vocab-1118",
    category: "vocabulary",
    title: "Cliff — Uçurum / Kayalık",
    keywords: ["cliff","uçurum / kayalık","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A high, steep rock next to the sea.",
      "🇹🇷 Deniz kenarındaki yüksek, dik kaya."
    ],
    examples: [],
    related_word_ids: [1118]
  },
  {
    id: "vocab-1119",
    category: "vocabulary",
    title: "Customer — Müşteri",
    keywords: ["customer","müşteri","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who buys things in a shop.",
      "🇹🇷 Bir dükkandan bir şeyler satın alan kişi."
    ],
    examples: [],
    related_word_ids: [1119]
  },
  {
    id: "vocab-1120",
    category: "vocabulary",
    title: "Dozen — Düzine",
    keywords: ["dozen","düzine","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A group of twelve things.",
      "🇹🇷 On iki şeyden oluşan grup."
    ],
    examples: [],
    related_word_ids: [1120]
  },
  {
    id: "vocab-1121",
    category: "vocabulary",
    title: "Extreme — Uç nokta / Aşırılık",
    keywords: ["extreme","uç nokta / aşırılık","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The highest or lowest level of something.",
      "🇹🇷 Bir şeyin en yüksek veya en düşük seviyesi."
    ],
    examples: [],
    related_word_ids: [1121]
  },
  {
    id: "vocab-1122",
    category: "vocabulary",
    title: "Feature — Özellik",
    keywords: ["feature","özellik","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 An important part of something.",
      "🇹🇷 Bir şeyin önemli bir kısmı."
    ],
    examples: [],
    related_word_ids: [1122]
  },
  {
    id: "vocab-1123",
    category: "vocabulary",
    title: "Fjord — Fiyort",
    keywords: ["fjord","fiyort","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A long, narrow area of sea between high rocks.",
      "🇹🇷 Yüksek kayalar arasındaki uzun, dar deniz alanı."
    ],
    examples: [],
    related_word_ids: [1123]
  },
  {
    id: "vocab-1124",
    category: "vocabulary",
    title: "Geyser — Gayzer",
    keywords: ["geyser","gayzer","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A hole in the ground that shoots hot water.",
      "🇹🇷 Yerden sıcak su fırlatan delik."
    ],
    examples: [],
    related_word_ids: [1124]
  },
  {
    id: "vocab-1125",
    category: "vocabulary",
    title: "Mountain — Dağ",
    keywords: ["mountain","dağ","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A very high and big hill.",
      "🇹🇷 Çok yüksek ve büyük tepe."
    ],
    examples: [],
    related_word_ids: [1125]
  },
  {
    id: "vocab-1126",
    category: "vocabulary",
    title: "Share — Paylaşmak / Pay",
    keywords: ["share","paylaşmak / pay","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To give a part of something to someone.",
      "🇹🇷 Birine bir şeyin bir parçasını vermek."
    ],
    examples: [],
    related_word_ids: [1126]
  },
  {
    id: "vocab-1127",
    category: "vocabulary",
    title: "Volcano — Volkan / Yanardağ",
    keywords: ["volcano","volkan / yanardağ","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A mountain that can blow hot fire and rocks.",
      "🇹🇷 Sıcak ateş ve taş fırlatan dağ."
    ],
    examples: [],
    related_word_ids: [1127]
  },
  {
    id: "vocab-1128",
    category: "vocabulary",
    title: "Waterfall — Şelale",
    keywords: ["waterfall","şelale","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A place where water falls down from high up.",
      "🇹🇷 Suyun yüksekten aşağı düştüğü yer."
    ],
    examples: [],
    related_word_ids: [1128]
  },
  {
    id: "vocab-1129",
    category: "vocabulary",
    title: "Wood — Ormanlık alan / Tahta",
    keywords: ["wood","ormanlık alan / tahta","kelime","vocabulary","ipucu"],
    content: "Bu kelime A2 seviye kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The material that comes from trees.",
      "🇹🇷 Ağaçlardan gelen malzeme (veya küçük orman)."
    ],
    examples: [],
    related_word_ids: [1129]
  },

  // A2 GENEL OTO-EKLENEN KELİMELER
  {
    id: "vocab-genel-1130",
    category: "vocabulary",
    title: "Architect — Mimar",
    keywords: ["architect", "mimar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who draws plans for buildings.",
      "🇹🇷 Binalar için plan çizen kişi."
    ],
    examples: [],
    related_word_ids: [1130]
  },
  {
    id: "vocab-genel-1131",
    category: "vocabulary",
    title: "Quiet — Sessiz / Sakin",
    keywords: ["quiet", "sessiz / sakin", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Making very little noise.",
      "🇹🇷 Çok az ses çıkaran."
    ],
    examples: [],
    related_word_ids: [1131]
  },
  {
    id: "vocab-genel-1132",
    category: "vocabulary",
    title: "Peaceful — Huzurlu",
    keywords: ["peaceful", "huzurlu", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Calm, quiet and without problems.",
      "🇹🇷 Sakin, sessiz ve sorunsuz."
    ],
    examples: [],
    related_word_ids: [1132]
  },
  {
    id: "vocab-genel-1133",
    category: "vocabulary",
    title: "Country — Ülke",
    keywords: ["country", "ülke", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A nation with its own land and rules.",
      "🇹🇷 Kendi toprağı ve kuralları olan ulus."
    ],
    examples: [],
    related_word_ids: [1133]
  },
  {
    id: "vocab-genel-1134",
    category: "vocabulary",
    title: "Countries — Ülkeler",
    keywords: ["countries", "ülkeler", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Nations with their own lands and rules.",
      "🇹🇷 Kendi toprakları ve kuralları olan uluslar."
    ],
    examples: [],
    related_word_ids: [1134]
  },
  {
    id: "vocab-genel-1135",
    category: "vocabulary",
    title: "Holiday — Tatil",
    keywords: ["holiday", "tatil", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A day when you don't work or go to school.",
      "🇹🇷 Çalışmadığın veya okula gitmediğin bir gün."
    ],
    examples: [],
    related_word_ids: [1135]
  },
  {
    id: "vocab-genel-1136",
    category: "vocabulary",
    title: "Holidays — Tatiller",
    keywords: ["holidays", "tatiller", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Days when you don't work or go to school.",
      "🇹🇷 Çalışmadığın veya okula gitmediğin günler."
    ],
    examples: [],
    related_word_ids: [1136]
  },
  {
    id: "vocab-genel-1137",
    category: "vocabulary",
    title: "Elderly — Yaşlı / İhtiyar",
    keywords: ["elderly", "yaşlı / i̇htiyar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Older people.",
      "🇹🇷 Yaşça daha büyük olan kişiler."
    ],
    examples: [],
    related_word_ids: [1137]
  },
  {
    id: "vocab-genel-1138",
    category: "vocabulary",
    title: "Reason — Sebep / Neden",
    keywords: ["reason", "sebep / neden", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Why something happens.",
      "🇹🇷 Bir şeyin neden olduğu, sebebi."
    ],
    examples: [],
    related_word_ids: [1138]
  },
  {
    id: "vocab-genel-1139",
    category: "vocabulary",
    title: "Reasons — Sebepler / Nedenler",
    keywords: ["reasons", "sebepler / nedenler", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Why things happen.",
      "🇹🇷 Olayların neden olduğu, sebepleri."
    ],
    examples: [],
    related_word_ids: [1139]
  },
  {
    id: "vocab-genel-1140",
    category: "vocabulary",
    title: "Addictive — Bağımlılık yapan",
    keywords: ["addictive", "bağımlılık yapan", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Making you want to do it more and more.",
      "🇹🇷 Sana onu daha da çok yapma isteği veren."
    ],
    examples: [],
    related_word_ids: [1140]
  },
  {
    id: "vocab-genel-1141",
    category: "vocabulary",
    title: "Worse — Daha kötü",
    keywords: ["worse", "daha kötü", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 More bad than something else.",
      "🇹🇷 Başka bir şeyden daha fena olan."
    ],
    examples: [],
    related_word_ids: [1141]
  },
  {
    id: "vocab-genel-1142",
    category: "vocabulary",
    title: "Whether — Olup olmadığı / İster...",
    keywords: ["whether", "olup olmadığı / i̇ster...", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Used to talk about two choices.",
      "🇹🇷 İki seçenek hakkında konuşurken kullanılır."
    ],
    examples: [],
    related_word_ids: [1142]
  },
  {
    id: "vocab-genel-1143",
    category: "vocabulary",
    title: "Exhausted — Çok yorgun / Tükenmiş",
    keywords: ["exhausted", "çok yorgun / tükenmiş", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Very, very tired.",
      "🇹🇷 Çok ama çok yorgun hissetme."
    ],
    examples: [],
    related_word_ids: [1143]
  },
  {
    id: "vocab-genel-1144",
    category: "vocabulary",
    title: "Tinsel — Süs şeridi / Simli süs",
    keywords: ["tinsel", "süs şeridi / simli süs", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Shiny string used for decoration on a tree.",
      "🇹🇷 Ağaç vb. süslemek için kullanılan parlak ipler."
    ],
    examples: [],
    related_word_ids: [1144]
  },
  {
    id: "vocab-genel-1145",
    category: "vocabulary",
    title: "Scary Face — Korkutucu yüz",
    keywords: ["scary face", "korkutucu yüz", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A look that makes you feel afraid.",
      "🇹🇷 Seni korkutan bir ifade, görünüm."
    ],
    examples: [],
    related_word_ids: [1145]
  },
  {
    id: "vocab-genel-1146",
    category: "vocabulary",
    title: "Scary Faces — Korkutucu yüzler",
    keywords: ["scary faces", "korkutucu yüzler", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Looks that make you feel afraid.",
      "🇹🇷 Seni korkutan ifadeler."
    ],
    examples: [],
    related_word_ids: [1146]
  },
  {
    id: "vocab-genel-1147",
    category: "vocabulary",
    title: "Scary — Korkunç / Korkutucu",
    keywords: ["scary", "korkunç / korkutucu", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Making you feel afraid.",
      "🇹🇷 Seni korkutan, ürküten."
    ],
    examples: [],
    related_word_ids: [1147]
  },
  {
    id: "vocab-genel-1148",
    category: "vocabulary",
    title: "Carve — Oymak / Keserek şekil vermek",
    keywords: ["carve", "oymak / keserek şekil vermek", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To cut into wood or a pumpkin to make a shape.",
      "🇹🇷 Şekil vermek için tahtayı veya balkabağını kesmek."
    ],
    examples: [],
    related_word_ids: [1148]
  },
  {
    id: "vocab-genel-1149",
    category: "vocabulary",
    title: "Pumpkin — Balkabağı",
    keywords: ["pumpkin", "balkabağı", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A large, round, orange vegetable.",
      "🇹🇷 Büyük, yuvarlak, turuncu bir sebze."
    ],
    examples: [],
    related_word_ids: [1149]
  },
  {
    id: "vocab-genel-1150",
    category: "vocabulary",
    title: "Pumpkins — Balkabakları",
    keywords: ["pumpkins", "balkabakları", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Large, round, orange vegetables.",
      "🇹🇷 Büyük, yuvarlak, turuncu sebzeler."
    ],
    examples: [],
    related_word_ids: [1150]
  },
  {
    id: "vocab-genel-1151",
    category: "vocabulary",
    title: "Child — Çocuk",
    keywords: ["child", "çocuk", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A young boy or girl.",
      "🇹🇷 Genç bir erkek veya kız."
    ],
    examples: [],
    related_word_ids: [1151]
  },
  {
    id: "vocab-genel-1152",
    category: "vocabulary",
    title: "Children — Çocuklar",
    keywords: ["children", "çocuklar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Young boys and girls.",
      "🇹🇷 Genç erkekler ve kızlar."
    ],
    examples: [],
    related_word_ids: [1152]
  },
  {
    id: "vocab-genel-1153",
    category: "vocabulary",
    title: "Halloween — Cadılar Bayramı",
    keywords: ["halloween", "cadılar bayramı", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A spooky holiday in October.",
      "🇹🇷 Ekim ayında kutlanan ürkütücü tatil."
    ],
    examples: [],
    related_word_ids: [1153]
  },
  {
    id: "vocab-genel-1154",
    category: "vocabulary",
    title: "Candle — Mum",
    keywords: ["candle", "mum", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A stick of wax that gives light.",
      "🇹🇷 Yanarak ışık veren balmumu çubuğu."
    ],
    examples: [],
    related_word_ids: [1154]
  },
  {
    id: "vocab-genel-1155",
    category: "vocabulary",
    title: "Candles — Mumlar",
    keywords: ["candles", "mumlar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Sticks of wax that give light.",
      "🇹🇷 Yanarak ışık veren balmumu çubukları."
    ],
    examples: [],
    related_word_ids: [1155]
  },
  {
    id: "vocab-genel-1156",
    category: "vocabulary",
    title: "Inside — İçinde / İçeri",
    keywords: ["inside", "i̇çinde / i̇çeri", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 In a room or a building.",
      "🇹🇷 Bir odanın veya binanın içinde olma durumu."
    ],
    examples: [],
    related_word_ids: [1156]
  },
  {
    id: "vocab-genel-1157",
    category: "vocabulary",
    title: "Celebrate — Kutlamak",
    keywords: ["celebrate", "kutlamak", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To have a party for a special day.",
      "🇹🇷 Özel bir gün için parti yapmak veya eğlenmek."
    ],
    examples: [],
    related_word_ids: [1157]
  },
  {
    id: "vocab-genel-1158",
    category: "vocabulary",
    title: "Piece — Parça / Tane",
    keywords: ["piece", "parça / tane", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A part of something.",
      "🇹🇷 Bir şeyin bir kısmı."
    ],
    examples: [],
    related_word_ids: [1158]
  },
  {
    id: "vocab-genel-1159",
    category: "vocabulary",
    title: "Pieces — Parçalar / Taneler",
    keywords: ["pieces", "parçalar / taneler", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Parts of something.",
      "🇹🇷 Bir şeyin kısımları."
    ],
    examples: [],
    related_word_ids: [1159]
  },
  {
    id: "vocab-genel-1160",
    category: "vocabulary",
    title: "Tremendous — Muazzam / Kocaman",
    keywords: ["tremendous", "muazzam / kocaman", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Very big or very great.",
      "🇹🇷 Çok büyük veya çok harika."
    ],
    examples: [],
    related_word_ids: [1160]
  },
  {
    id: "vocab-genel-1161",
    category: "vocabulary",
    title: "Religious — Dini",
    keywords: ["religious", "dini", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 About God or beliefs.",
      "🇹🇷 Tanrı veya inançlarla ilgili."
    ],
    examples: [],
    related_word_ids: [1161]
  },
  {
    id: "vocab-genel-1162",
    category: "vocabulary",
    title: "Street — Sokak",
    keywords: ["street", "sokak", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A road in a city or town.",
      "🇹🇷 Şehir veya kasabadaki binaların arasındaki yol."
    ],
    examples: [],
    related_word_ids: [1162]
  },
  {
    id: "vocab-genel-1163",
    category: "vocabulary",
    title: "Streets — Sokaklar",
    keywords: ["streets", "sokaklar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Roads in a city or town.",
      "🇹🇷 Şehir veya kasabadaki yollar."
    ],
    examples: [],
    related_word_ids: [1163]
  },
  {
    id: "vocab-genel-1164",
    category: "vocabulary",
    title: "Endlessly — Sonsuzca / Durmaksızın",
    keywords: ["endlessly", "sonsuzca / durmaksızın", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Never stopping.",
      "🇹🇷 Hiç durmadan devam etme durumu."
    ],
    examples: [],
    related_word_ids: [1164]
  },
  {
    id: "vocab-genel-1165",
    category: "vocabulary",
    title: "Need — İhtiyaç / İhtiyaç duymak",
    keywords: ["need", "i̇htiyaç / i̇htiyaç duymak", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Something you must have.",
      "🇹🇷 Kesinlikle sahip olman gereken şey."
    ],
    examples: [],
    related_word_ids: [1165]
  },
  {
    id: "vocab-genel-1166",
    category: "vocabulary",
    title: "Needs — İhtiyaçlar",
    keywords: ["needs", "i̇htiyaçlar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Things you must have.",
      "🇹🇷 Kesinlikle sahip olman gereken şeyler."
    ],
    examples: [],
    related_word_ids: [1166]
  },
  {
    id: "vocab-genel-1167",
    category: "vocabulary",
    title: "Firstly — İlk olarak / Öncelikle",
    keywords: ["firstly", "i̇lk olarak / öncelikle", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The first thing to say or do.",
      "🇹🇷 Söylenecek veya yapılacak ilk şey."
    ],
    examples: [],
    related_word_ids: [1167]
  },
  {
    id: "vocab-genel-1168",
    category: "vocabulary",
    title: "Relaxed — Rahatlamış",
    keywords: ["relaxed", "rahatlamış", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Feeling calm and not stressed.",
      "🇹🇷 Sakin ve stressiz hissetmek."
    ],
    examples: [],
    related_word_ids: [1168]
  },
  {
    id: "vocab-genel-1169",
    category: "vocabulary",
    title: "Companionship — Arkadaşlık / Yoldaşlık",
    keywords: ["companionship", "arkadaşlık / yoldaşlık", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The good feeling of being with someone.",
      "🇹🇷 Biriyle birlikte olmanın verdiği iyi his."
    ],
    examples: [],
    related_word_ids: [1169]
  },
  {
    id: "vocab-genel-1170",
    category: "vocabulary",
    title: "Harmony — Uyum / Ahenk",
    keywords: ["harmony", "uyum / ahenk", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 People or things living together happily.",
      "🇹🇷 Birlikte mutlu yaşayan insanlar veya şeyler."
    ],
    examples: [],
    related_word_ids: [1170]
  },
  {
    id: "vocab-genel-1171",
    category: "vocabulary",
    title: "Peace — Barış / Huzur",
    keywords: ["peace", "barış / huzur", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 No war or no fighting.",
      "🇹🇷 Savaş veya kavga olmaması."
    ],
    examples: [],
    related_word_ids: [1171]
  },
  {
    id: "vocab-genel-1172",
    category: "vocabulary",
    title: "Maximize — En üst düzeye çıkarmak",
    keywords: ["maximize", "en üst düzeye çıkarmak", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To make something as big as possible.",
      "🇹🇷 Bir şeyi olabildiğince büyük veya çok yapmak."
    ],
    examples: [],
    related_word_ids: [1172]
  },
  {
    id: "vocab-genel-1173",
    category: "vocabulary",
    title: "Totally — Tamamen / Bütünüyle",
    keywords: ["totally", "tamamen / bütünüyle", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Completely, 100 percent.",
      "🇹🇷 Yüzde yüz, eksiksiz olarak."
    ],
    examples: [],
    related_word_ids: [1173]
  },
  {
    id: "vocab-genel-1174",
    category: "vocabulary",
    title: "Clarify — Açıklığa kavuşturmak",
    keywords: ["clarify", "açıklığa kavuşturmak", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To make something easy to understand.",
      "🇹🇷 Bir şeyi anlaşılması kolay hale getirmek."
    ],
    examples: [],
    related_word_ids: [1174]
  },
  {
    id: "vocab-genel-1175",
    category: "vocabulary",
    title: "Justify — Haklı çıkarmak / Gerekçelendirmek",
    keywords: ["justify", "haklı çıkarmak / gerekçelendirmek", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To give a good reason for something.",
      "🇹🇷 Bir şey için iyi bir neden veya mazeret sunmak."
    ],
    examples: [],
    related_word_ids: [1175]
  },
  {
    id: "vocab-genel-1176",
    category: "vocabulary",
    title: "Competition — Yarışma / Rekabet",
    keywords: ["competition", "yarışma / rekabet", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A game to see who is the best.",
      "🇹🇷 Kimin en iyi olduğunu görmek için yapılan oyun."
    ],
    examples: [],
    related_word_ids: [1176]
  },
  {
    id: "vocab-genel-1177",
    category: "vocabulary",
    title: "Competitions — Yarışmalar",
    keywords: ["competitions", "yarışmalar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Games to see who is the best.",
      "🇹🇷 Kimin en iyi olduğunu görmek için yapılan oyunlar."
    ],
    examples: [],
    related_word_ids: [1177]
  },
  {
    id: "vocab-genel-1178",
    category: "vocabulary",
    title: "Friendship — Arkadaşlık / Dostluk",
    keywords: ["friendship", "arkadaşlık / dostluk", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The relationship between friends.",
      "🇹🇷 Arkadaşlar arasındaki ilişki bağı."
    ],
    examples: [],
    related_word_ids: [1178]
  },
  {
    id: "vocab-genel-1179",
    category: "vocabulary",
    title: "Friendships — Arkadaşlıklar / Dostluklar",
    keywords: ["friendships", "arkadaşlıklar / dostluklar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The relationships between friends.",
      "🇹🇷 Arkadaşlar arasındaki ilişki bağları."
    ],
    examples: [],
    related_word_ids: [1179]
  },
  {
    id: "vocab-genel-1180",
    category: "vocabulary",
    title: "Dimension — Boyut / Ebat",
    keywords: ["dimension", "boyut / ebat", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The size of something, like length or width.",
      "🇹🇷 Bir şeyin uzunluk veya genişlik gibi ölçüsü."
    ],
    examples: [],
    related_word_ids: [1180]
  },
  {
    id: "vocab-genel-1181",
    category: "vocabulary",
    title: "Dimensions — Boyutlar / Ebatlar",
    keywords: ["dimensions", "boyutlar / ebatlar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The sizes of something.",
      "🇹🇷 Bir şeyin ölçüleri."
    ],
    examples: [],
    related_word_ids: [1181]
  },
  {
    id: "vocab-genel-1182",
    category: "vocabulary",
    title: "Adjective — Sıfat",
    keywords: ["adjective", "sıfat", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A word that describes a noun (like 'big' or 'red').",
      "🇹🇷 Bir ismi tanımlayan kelime ('büyük' vb.)."
    ],
    examples: [],
    related_word_ids: [1182]
  },
  {
    id: "vocab-genel-1183",
    category: "vocabulary",
    title: "Adjectives — Sıfatlar",
    keywords: ["adjectives", "sıfatlar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Words that describe nouns.",
      "🇹🇷 İsimleri tanımlayan kelimeler."
    ],
    examples: [],
    related_word_ids: [1183]
  },
  {
    id: "vocab-genel-1184",
    category: "vocabulary",
    title: "Careful — Dikkatli",
    keywords: ["careful", "dikkatli", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Thinking about what you do so you don't make a mistake.",
      "🇹🇷 Hata yapmamak için ne yaptığına odaklanan."
    ],
    examples: [],
    related_word_ids: [1184]
  },
  {
    id: "vocab-genel-1185",
    category: "vocabulary",
    title: "Slow — Yavaş",
    keywords: ["slow", "yavaş", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Not fast.",
      "🇹🇷 Hızlı hareket etmeyen."
    ],
    examples: [],
    related_word_ids: [1185]
  },
  {
    id: "vocab-genel-1186",
    category: "vocabulary",
    title: "Fast — Hızlı",
    keywords: ["fast", "hızlı", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Moving very quickly.",
      "🇹🇷 Çok çabuk hareket eden."
    ],
    examples: [],
    related_word_ids: [1186]
  },
  {
    id: "vocab-genel-1187",
    category: "vocabulary",
    title: "Carnival — Karnaval",
    keywords: ["carnival", "karnaval", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A big public party with music and dancing in the streets.",
      "🇹🇷 Sokaklarda müzik ve dans olan büyük halk partisi."
    ],
    examples: [],
    related_word_ids: [1187]
  },
  {
    id: "vocab-genel-1188",
    category: "vocabulary",
    title: "Carnivals — Karnavallar",
    keywords: ["carnivals", "karnavallar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Big public parties in the streets.",
      "🇹🇷 Sokaklardaki büyük halk partileri."
    ],
    examples: [],
    related_word_ids: [1188]
  },
  {
    id: "vocab-genel-1189",
    category: "vocabulary",
    title: "Custom — Gelenek / Görenek",
    keywords: ["custom", "gelenek / görenek", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A traditional way of acting in a society.",
      "🇹🇷 Bir toplumdaki geleneksel davranış biçimi."
    ],
    examples: [],
    related_word_ids: [1189]
  },
  {
    id: "vocab-genel-1190",
    category: "vocabulary",
    title: "Customs — Gelenekler / Görenekler",
    keywords: ["customs", "gelenekler / görenekler", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Traditional ways of acting in a society.",
      "🇹🇷 Bir toplumdaki geleneksel davranış biçimleri."
    ],
    examples: [],
    related_word_ids: [1190]
  },
  {
    id: "vocab-genel-1191",
    category: "vocabulary",
    title: "Dance — Dans / Dans etmek",
    keywords: ["dance", "dans / dans etmek", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Moving your body to music.",
      "🇹🇷 Vücudunu müziğe göre hareket ettirmek."
    ],
    examples: [],
    related_word_ids: [1191]
  },
  {
    id: "vocab-genel-1192",
    category: "vocabulary",
    title: "Dances — Danslar",
    keywords: ["dances", "danslar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Different styles of moving to music.",
      "🇹🇷 Müziğe göre hareket etmenin farklı stilleri."
    ],
    examples: [],
    related_word_ids: [1192]
  },
  {
    id: "vocab-genel-1193",
    category: "vocabulary",
    title: "Myself — Kendim",
    keywords: ["myself", "kendim", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Used by the person speaking to talk about themself.",
      "🇹🇷 Konuşan kişinin kendinden bahsetmesi."
    ],
    examples: [],
    related_word_ids: [1193]
  },
  {
    id: "vocab-genel-1194",
    category: "vocabulary",
    title: "Yourself — Kendin",
    keywords: ["yourself", "kendin", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Used to talk about the person you are speaking to.",
      "🇹🇷 Konuştuğun tekil kişi hakkında kullanılır."
    ],
    examples: [],
    related_word_ids: [1194]
  },
  {
    id: "vocab-genel-1195",
    category: "vocabulary",
    title: "Himself — Kendisi (Erkek)",
    keywords: ["himself", "kendisi (erkek)", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Used to talk about a man or boy.",
      "🇹🇷 Bir adam veya erkek çocuğu hakkında konuşulur."
    ],
    examples: [],
    related_word_ids: [1195]
  },
  {
    id: "vocab-genel-1196",
    category: "vocabulary",
    title: "Herself — Kendisi (Kadın)",
    keywords: ["herself", "kendisi (kadın)", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Used to talk about a woman or girl.",
      "🇹🇷 Bir kadın veya kız çocuğu hakkında konuşulur."
    ],
    examples: [],
    related_word_ids: [1196]
  },
  {
    id: "vocab-genel-1197",
    category: "vocabulary",
    title: "Itself — Kendisi (Hayvan/Eşya)",
    keywords: ["itself", "kendisi (hayvan/eşya)", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Used to talk about a thing or animal.",
      "🇹🇷 Bir nesne veya hayvan hakkında konuşulur."
    ],
    examples: [],
    related_word_ids: [1197]
  },
  {
    id: "vocab-genel-1198",
    category: "vocabulary",
    title: "Ourselves — Kendimiz",
    keywords: ["ourselves", "kendimiz", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Used by a group to talk about their own group.",
      "🇹🇷 Bir grubun (biz) kendinden bahsetmesi."
    ],
    examples: [],
    related_word_ids: [1198]
  },
  {
    id: "vocab-genel-1199",
    category: "vocabulary",
    title: "Yourselves — Kendiniz",
    keywords: ["yourselves", "kendiniz", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Used to talk about a group of people you are speaking to.",
      "🇹🇷 Konuştuğunuz bir grup insandan (siz) bahseder."
    ],
    examples: [],
    related_word_ids: [1199]
  },
  {
    id: "vocab-genel-1200",
    category: "vocabulary",
    title: "Themselves — Kendileri",
    keywords: ["themselves", "kendileri", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Used to talk about other people (they).",
      "🇹🇷 Başka insanlardan (onlar) bahsederken kullanılır."
    ],
    examples: [],
    related_word_ids: [1200]
  },
  {
    id: "vocab-genel-1201",
    category: "vocabulary",
    title: "Participate — Katılmak / İştirak etmek",
    keywords: ["participate", "katılmak / i̇ştirak etmek", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To join in an activity or event.",
      "🇹🇷 Bir etkinliğe veya olaya dahil olmak."
    ],
    examples: [],
    related_word_ids: [1201]
  },
  {
    id: "vocab-genel-1202",
    category: "vocabulary",
    title: "Occasion — Fırsat / Özel durum",
    keywords: ["occasion", "fırsat / özel durum", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A special event or time.",
      "🇹🇷 Özel bir etkinlik veya zaman."
    ],
    examples: [],
    related_word_ids: [1202]
  },
  {
    id: "vocab-genel-1203",
    category: "vocabulary",
    title: "Occasions — Fırsatlar / Özel durumlar",
    keywords: ["occasions", "fırsatlar / özel durumlar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Special events or times.",
      "🇹🇷 Özel etkinlikler veya zamanlar."
    ],
    examples: [],
    related_word_ids: [1203]
  },
  {
    id: "vocab-genel-1204",
    category: "vocabulary",
    title: "Culture — Kültür",
    keywords: ["culture", "kültür", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The art, beliefs, and ways of a group of people.",
      "🇹🇷 Bir grup insanın sanatı, inançları ve yaşam tarzı."
    ],
    examples: [],
    related_word_ids: [1204]
  },
  {
    id: "vocab-genel-1205",
    category: "vocabulary",
    title: "Cultures — Kültürler",
    keywords: ["cultures", "kültürler", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Different ways of life around the world.",
      "🇹🇷 Dünyadaki farklı yaşam tarzları."
    ],
    examples: [],
    related_word_ids: [1205]
  },
  {
    id: "vocab-genel-1206",
    category: "vocabulary",
    title: "Preparation — Hazırlık",
    keywords: ["preparation", "hazırlık", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Getting ready for something.",
      "🇹🇷 Bir şey için hazır olma işlemi."
    ],
    examples: [],
    related_word_ids: [1206]
  },
  {
    id: "vocab-genel-1207",
    category: "vocabulary",
    title: "Preparations — Hazırlıklar",
    keywords: ["preparations", "hazırlıklar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Things you do to get ready.",
      "🇹🇷 Hazır olmak için yaptığın şeyler."
    ],
    examples: [],
    related_word_ids: [1207]
  },
  {
    id: "vocab-genel-1208",
    category: "vocabulary",
    title: "Miss — Özlemek / Kaçırmak",
    keywords: ["miss", "özlemek / kaçırmak", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To feel sad because someone is not there, or to not catch.",
      "🇹🇷 Biri olmadığı için üzülmek veya bir şeyi yakalayamamak."
    ],
    examples: [],
    related_word_ids: [1208]
  },
  {
    id: "vocab-genel-1209",
    category: "vocabulary",
    title: "Throw — Fırlatmak / Atmak",
    keywords: ["throw", "fırlatmak / atmak", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To send something through the air with your hand.",
      "🇹🇷 Bir şeyi elinle havaya doğru yollamak."
    ],
    examples: [],
    related_word_ids: [1209]
  },
  {
    id: "vocab-genel-1210",
    category: "vocabulary",
    title: "Admiration — Hayranlık",
    keywords: ["admiration", "hayranlık", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A feeling of respecting or liking someone very much.",
      "🇹🇷 Birine çok saygı duyma veya onu çok beğenme hissi."
    ],
    examples: [],
    related_word_ids: [1210]
  },
  {
    id: "vocab-genel-1211",
    category: "vocabulary",
    title: "Wrestling — Güreş",
    keywords: ["wrestling", "güreş", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A sport where two people try to throw each other to the ground.",
      "🇹🇷 İki kişinin birbirini yere atmaya çalıştığı bir spor."
    ],
    examples: [],
    related_word_ids: [1211]
  },
  {
    id: "vocab-genel-1212",
    category: "vocabulary",
    title: "Entertain — Eğlendirmek",
    keywords: ["entertain", "eğlendirmek", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To make people have fun.",
      "🇹🇷 İnsanların eğlenmesini sağlamak."
    ],
    examples: [],
    related_word_ids: [1212]
  },
  {
    id: "vocab-genel-1213",
    category: "vocabulary",
    title: "Time — Zaman / Defa",
    keywords: ["time", "zaman / defa", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Minutes, hours, days, or occasions.",
      "🇹🇷 Dakikalar, saatler, günler veya durumlar."
    ],
    examples: [],
    related_word_ids: [1213]
  },
  {
    id: "vocab-genel-1214",
    category: "vocabulary",
    title: "Times — Zamanlar / Defalar",
    keywords: ["times", "zamanlar / defalar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Occasions or history periods.",
      "🇹🇷 Durumlar, kere, defa veya geçmişteki dönemler."
    ],
    examples: [],
    related_word_ids: [1214]
  },
  {
    id: "vocab-genel-1215",
    category: "vocabulary",
    title: "Expression — İfade",
    keywords: ["expression", "i̇fade", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Words used to show a feeling or idea.",
      "🇹🇷 Bir hissi veya fikri göstermek için kullanılan söz."
    ],
    examples: [],
    related_word_ids: [1215]
  },
  {
    id: "vocab-genel-1216",
    category: "vocabulary",
    title: "Expressions — İfadeler",
    keywords: ["expressions", "i̇fadeler", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Many words used to show feelings or ideas.",
      "🇹🇷 Hisleri veya fikirleri gösteren sözler."
    ],
    examples: [],
    related_word_ids: [1216]
  },
  {
    id: "vocab-genel-1217",
    category: "vocabulary",
    title: "Month — Ay",
    keywords: ["month", "ay", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 One of the 12 parts of a year.",
      "🇹🇷 Bir yılın 12 bölümünden biri."
    ],
    examples: [],
    related_word_ids: [1217]
  },
  {
    id: "vocab-genel-1218",
    category: "vocabulary",
    title: "Months — Aylar",
    keywords: ["months", "aylar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The 12 parts of a year.",
      "🇹🇷 Bir yılın 12 bölümleri."
    ],
    examples: [],
    related_word_ids: [1218]
  },
  {
    id: "vocab-genel-1219",
    category: "vocabulary",
    title: "Before — Önce / Öncesinde",
    keywords: ["before", "önce / öncesinde", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Earlier than a time.",
      "🇹🇷 Belirli bir zamandan daha erken."
    ],
    examples: [],
    related_word_ids: [1219]
  },
  {
    id: "vocab-genel-1220",
    category: "vocabulary",
    title: "After — Sonra / Sonrasında",
    keywords: ["after", "sonra / sonrasında", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Later than a time.",
      "🇹🇷 Belirli bir zamandan daha geç."
    ],
    examples: [],
    related_word_ids: [1220]
  },
  {
    id: "vocab-genel-1221",
    category: "vocabulary",
    title: "Now — Şimdi / Şu an",
    keywords: ["now", "şimdi / şu an", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 At this very moment.",
      "🇹🇷 Tam olarak içinde bulunduğumuz an."
    ],
    examples: [],
    related_word_ids: [1221]
  },
  {
    id: "vocab-genel-1222",
    category: "vocabulary",
    title: "While — İken / Sırasında",
    keywords: ["while", "i̇ken / sırasında", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 At the same time as something else.",
      "🇹🇷 Başka bir şeyle aynı anda olduğu vakit."
    ],
    examples: [],
    related_word_ids: [1222]
  },
  {
    id: "vocab-genel-1223",
    category: "vocabulary",
    title: "Every Year — Her yıl / Her sene",
    keywords: ["every year", "her yıl / her sene", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Happening all years.",
      "🇹🇷 Bütün yıllarda olan şey."
    ],
    examples: [],
    related_word_ids: [1223]
  },
  {
    id: "vocab-genel-1224",
    category: "vocabulary",
    title: "Year — Yıl / Sene",
    keywords: ["year", "yıl / sene", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 365 days.",
      "🇹🇷 365 gün süren zaman."
    ],
    examples: [],
    related_word_ids: [1224]
  },
  {
    id: "vocab-genel-1225",
    category: "vocabulary",
    title: "Years — Yıllar / Seneler",
    keywords: ["years", "yıllar / seneler", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Many groups of 365 days.",
      "🇹🇷 365 günden oluşan grupların çoğu."
    ],
    examples: [],
    related_word_ids: [1225]
  },
  {
    id: "vocab-genel-1226",
    category: "vocabulary",
    title: "Hopelessly — Umutsuzca",
    keywords: ["hopelessly", "umutsuzca", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Without any hope.",
      "🇹🇷 Hiç umut olmadan."
    ],
    examples: [],
    related_word_ids: [1226]
  },
  {
    id: "vocab-genel-1227",
    category: "vocabulary",
    title: "Appointment — Randevu",
    keywords: ["appointment", "randevu", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A time you agree to meet someone.",
      "🇹🇷 Biriyle buluşmak için anlaştığın zaman."
    ],
    examples: [],
    related_word_ids: [1227]
  },
  {
    id: "vocab-genel-1228",
    category: "vocabulary",
    title: "Appointments — Randevular",
    keywords: ["appointments", "randevular", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Times you agree to meet people.",
      "🇹🇷 İnsanlarla buluşmak için anlaştığın zamanlar."
    ],
    examples: [],
    related_word_ids: [1228]
  },
  {
    id: "vocab-genel-1229",
    category: "vocabulary",
    title: "Client — Müşteri / Müvekkil",
    keywords: ["client", "müşteri / müvekkil", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who pays for a service.",
      "🇹🇷 Bir hizmet için ödeme yapan kişi."
    ],
    examples: [],
    related_word_ids: [1229]
  },
  {
    id: "vocab-genel-1230",
    category: "vocabulary",
    title: "Clients — Müşteriler / Müvekkiller",
    keywords: ["clients", "müşteriler / müvekkiller", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 People who pay for services.",
      "🇹🇷 Hizmetler için ödeme yapan kişiler."
    ],
    examples: [],
    related_word_ids: [1230]
  },
  {
    id: "vocab-genel-1231",
    category: "vocabulary",
    title: "Colleague — İş arkadaşı",
    keywords: ["colleague", "i̇ş arkadaşı", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person you work with.",
      "🇹🇷 Birlikte çalıştığın kişi."
    ],
    examples: [],
    related_word_ids: [1231]
  },
  {
    id: "vocab-genel-1232",
    category: "vocabulary",
    title: "Colleagues — İş arkadaşları",
    keywords: ["colleagues", "i̇ş arkadaşları", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 People you work with.",
      "🇹🇷 Birlikte çalıştığın kişiler."
    ],
    examples: [],
    related_word_ids: [1232]
  },
  {
    id: "vocab-genel-1233",
    category: "vocabulary",
    title: "Terrace — Teras",
    keywords: ["terrace", "teras", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A flat area outside a building.",
      "🇹🇷 Bir binanın dışındaki düz alan."
    ],
    examples: [],
    related_word_ids: [1233]
  },
  {
    id: "vocab-genel-1234",
    category: "vocabulary",
    title: "Terraces — Teraslar",
    keywords: ["terraces", "teraslar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Flat areas outside buildings.",
      "🇹🇷 Binaların dışındaki düz alanlar."
    ],
    examples: [],
    related_word_ids: [1234]
  },
  {
    id: "vocab-genel-1235",
    category: "vocabulary",
    title: "Exchange — Takas / Değişim",
    keywords: ["exchange", "takas / değişim", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Giving something to get something else.",
      "🇹🇷 Başka bir şey almak için bir şey vermek."
    ],
    examples: [],
    related_word_ids: [1235]
  },
  {
    id: "vocab-genel-1236",
    category: "vocabulary",
    title: "Gossip — Dedikodu",
    keywords: ["gossip", "dedikodu", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Talking about other people's private lives.",
      "🇹🇷 Başka insanların özel hayatları hakkında konuşmak."
    ],
    examples: [],
    related_word_ids: [1236]
  },
  {
    id: "vocab-genel-1237",
    category: "vocabulary",
    title: "Curious — Meraklı",
    keywords: ["curious", "meraklı", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Wanting to know or learn something.",
      "🇹🇷 Bir şeyi bilmek veya öğrenmek istemek."
    ],
    examples: [],
    related_word_ids: [1237]
  },
  {
    id: "vocab-genel-1238",
    category: "vocabulary",
    title: "Jealous — Kıskanç",
    keywords: ["jealous", "kıskanç", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Feeling angry or sad because you want what someone else has.",
      "🇹🇷 Başkasının sahip olduğu şeyi istediğin için üzgün hissetmek."
    ],
    examples: [],
    related_word_ids: [1238]
  },
  {
    id: "vocab-genel-1239",
    category: "vocabulary",
    title: "Jealousy — Kıskançlık",
    keywords: ["jealousy", "kıskançlık", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The feeling of being jealous.",
      "🇹🇷 Kıskanç olma hissi."
    ],
    examples: [],
    related_word_ids: [1239]
  },
  {
    id: "vocab-genel-1240",
    category: "vocabulary",
    title: "Life — Hayat / Yaşam",
    keywords: ["life", "hayat / yaşam", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The time a person is alive.",
      "🇹🇷 Bir insanın hayatta olduğu zaman."
    ],
    examples: [],
    related_word_ids: [1240]
  },
  {
    id: "vocab-genel-1241",
    category: "vocabulary",
    title: "Lives — Hayatlar / Yaşamlar",
    keywords: ["lives", "hayatlar / yaşamlar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The times people are alive.",
      "🇹🇷 İnsanların hayatta olduğu zamanlar."
    ],
    examples: [],
    related_word_ids: [1241]
  },
  {
    id: "vocab-genel-1242",
    category: "vocabulary",
    title: "Live — Yaşamak / Canlı",
    keywords: ["live", "yaşamak / canlı", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To be alive or have a home somewhere.",
      "🇹🇷 Hayatta olmak veya bir yerde evi olmak."
    ],
    examples: [],
    related_word_ids: [1242]
  },
  {
    id: "vocab-genel-1243",
    category: "vocabulary",
    title: "Shine — Parlamak",
    keywords: ["shine", "parlamak", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To give out bright light.",
      "🇹🇷 Parlak ışık yaymak."
    ],
    examples: [],
    related_word_ids: [1243]
  },
  {
    id: "vocab-genel-1244",
    category: "vocabulary",
    title: "Mostly — Çoğunlukla",
    keywords: ["mostly", "çoğunlukla", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Almost all or most of the time.",
      "🇹🇷 Neredeyse hepsi veya zamanın çoğu."
    ],
    examples: [],
    related_word_ids: [1244]
  },
  {
    id: "vocab-genel-1245",
    category: "vocabulary",
    title: "Cruelty — Zulüm / Acımasızlık",
    keywords: ["cruelty", "zulüm / acımasızlık", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Doing bad things to hurt others.",
      "🇹🇷 Başkalarını incitmek için kötü şeyler yapmak."
    ],
    examples: [],
    related_word_ids: [1245]
  },
  {
    id: "vocab-genel-1246",
    category: "vocabulary",
    title: "Violence — Şiddet",
    keywords: ["violence", "şiddet", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Action that hurts people or things.",
      "🇹🇷 İnsanlara veya eşyalara zarar veren eylem."
    ],
    examples: [],
    related_word_ids: [1246]
  },
  {
    id: "vocab-genel-1247",
    category: "vocabulary",
    title: "Co-founder — Kurucu ortak",
    keywords: ["co-founder", "kurucu ortak", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A person who starts a business with someone else.",
      "🇹🇷 Başka biriyle iş kuran kişi."
    ],
    examples: [],
    related_word_ids: [1247]
  },
  {
    id: "vocab-genel-1248",
    category: "vocabulary",
    title: "Co-founders — Kurucu ortaklar",
    keywords: ["co-founders", "kurucu ortaklar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 People who start a business together.",
      "🇹🇷 Birlikte iş kuran kişiler."
    ],
    examples: [],
    related_word_ids: [1248]
  },
  {
    id: "vocab-genel-1249",
    category: "vocabulary",
    title: "Canvas — Tuval / Kanvas",
    keywords: ["canvas", "tuval / kanvas", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A strong cloth used for painting.",
      "🇹🇷 Resim yapmak için kullanılan güçlü kumaş."
    ],
    examples: [],
    related_word_ids: [1249]
  },
  {
    id: "vocab-genel-1250",
    category: "vocabulary",
    title: "Canvases — Tuvaller",
    keywords: ["canvases", "tuvaller", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Strong cloths used for painting.",
      "🇹🇷 Resim yapmak için kullanılan güçlü kumaşlar."
    ],
    examples: [],
    related_word_ids: [1250]
  },
  {
    id: "vocab-genel-1251",
    category: "vocabulary",
    title: "Sculpture — Heykel",
    keywords: ["sculpture", "heykel", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Art made from stone, wood, or metal.",
      "🇹🇷 Taş, ahşap veya metalden yapılan sanat."
    ],
    examples: [],
    related_word_ids: [1251]
  },
  {
    id: "vocab-genel-1252",
    category: "vocabulary",
    title: "Sculptures — Heykeller",
    keywords: ["sculptures", "heykeller", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Art pieces made from stone, wood, or metal.",
      "🇹🇷 Taş, ahşap veya metalden yapılan sanat eserleri."
    ],
    examples: [],
    related_word_ids: [1252]
  },
  {
    id: "vocab-genel-1253",
    category: "vocabulary",
    title: "Collage — Kolaj",
    keywords: ["collage", "kolaj", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Art made by putting pictures and paper together.",
      "🇹🇷 Resim ve kağıtları bir araya getirerek yapılan sanat."
    ],
    examples: [],
    related_word_ids: [1253]
  },
  {
    id: "vocab-genel-1254",
    category: "vocabulary",
    title: "Collages — Kolajlar",
    keywords: ["collages", "kolajlar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Art pieces made by putting pictures and paper together.",
      "🇹🇷 Resim ve kağıtları bir araya getirerek yapılan sanat eserleri."
    ],
    examples: [],
    related_word_ids: [1254]
  },
  {
    id: "vocab-genel-1255",
    category: "vocabulary",
    title: "Engraving — Oyma / Gravür",
    keywords: ["engraving", "oyma / gravür", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A picture made by cutting lines into metal or wood.",
      "🇹🇷 Metal veya ahşaba çizgiler kesilerek yapılan resim."
    ],
    examples: [],
    related_word_ids: [1255]
  },
  {
    id: "vocab-genel-1256",
    category: "vocabulary",
    title: "Engravings — Oymalar / Gravürler",
    keywords: ["engravings", "oymalar / gravürler", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Pictures made by cutting lines into metal or wood.",
      "🇹🇷 Metal veya ahşaba çizgiler kesilerek yapılan resimler."
    ],
    examples: [],
    related_word_ids: [1256]
  },
  {
    id: "vocab-genel-1257",
    category: "vocabulary",
    title: "Inhumanity — İnsanlık dışı olma / Vahşet",
    keywords: ["inhumanity", "i̇nsanlık dışı olma / vahşet", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Very cruel acting without feeling sorry.",
      "🇹🇷 Üzülmeden yapılan çok acımasız davranış."
    ],
    examples: [],
    related_word_ids: [1257]
  },
  {
    id: "vocab-genel-1258",
    category: "vocabulary",
    title: "Brutality — Gaddarlık / Vahşet",
    keywords: ["brutality", "gaddarlık / vahşet", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Cruel and violent behavior.",
      "🇹🇷 Acımasız ve şiddet içeren davranış."
    ],
    examples: [],
    related_word_ids: [1258]
  },
  {
    id: "vocab-genel-1259",
    category: "vocabulary",
    title: "Talented — Yetenekli",
    keywords: ["talented", "yetenekli", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Having a natural ability to do something well.",
      "🇹🇷 Bir şeyi iyi yapmak için doğal bir yeteneğe sahip olmak."
    ],
    examples: [],
    related_word_ids: [1259]
  },
  {
    id: "vocab-genel-1260",
    category: "vocabulary",
    title: "Mainly — Esasen / Çoğunlukla",
    keywords: ["mainly", "esasen / çoğunlukla", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 More than anything else.",
      "🇹🇷 Başka her şeyden daha fazla."
    ],
    examples: [],
    related_word_ids: [1260]
  },
  {
    id: "vocab-genel-1261",
    category: "vocabulary",
    title: "Draw — Çizmek",
    keywords: ["draw", "çizmek", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To make a picture with a pen or pencil.",
      "🇹🇷 Kalemle resim yapmak."
    ],
    examples: [],
    related_word_ids: [1261]
  },
  {
    id: "vocab-genel-1262",
    category: "vocabulary",
    title: "Drew — Çizdi",
    keywords: ["drew", "çizdi", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Past tense of draw.",
      "🇹🇷 Çizmek fiilinin geçmiş zamanı."
    ],
    examples: [],
    related_word_ids: [1262]
  },
  {
    id: "vocab-genel-1263",
    category: "vocabulary",
    title: "Make — Yapmak",
    keywords: ["make", "yapmak", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To create or produce something.",
      "🇹🇷 Bir şey yaratmak veya üretmek."
    ],
    examples: [],
    related_word_ids: [1263]
  },
  {
    id: "vocab-genel-1264",
    category: "vocabulary",
    title: "Made — Yaptı / Yapılmış",
    keywords: ["made", "yaptı / yapılmış", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Past tense of make.",
      "🇹🇷 Yapmak fiilinin geçmiş zamanı."
    ],
    examples: [],
    related_word_ids: [1264]
  },
  {
    id: "vocab-genel-1265",
    category: "vocabulary",
    title: "Well-known — Tanınmış / Ünlü",
    keywords: ["well-known", "tanınmış / ünlü", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Known by many people.",
      "🇹🇷 Birçok insan tarafından bilinen."
    ],
    examples: [],
    related_word_ids: [1265]
  },
  {
    id: "vocab-genel-1266",
    category: "vocabulary",
    title: "Extremely — Son derece / Aşırı",
    keywords: ["extremely", "son derece / aşırı", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Very, very much.",
      "🇹🇷 Çok, çok fazla."
    ],
    examples: [],
    related_word_ids: [1266]
  },
  {
    id: "vocab-genel-1267",
    category: "vocabulary",
    title: "Express — İfade etmek",
    keywords: ["express", "i̇fade etmek", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To show your feelings or thoughts.",
      "🇹🇷 Hislerini veya düşüncelerini göstermek."
    ],
    examples: [],
    related_word_ids: [1267]
  },
  {
    id: "vocab-genel-1268",
    category: "vocabulary",
    title: "Expressed — İfade etti",
    keywords: ["expressed", "i̇fade etti", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Past tense of express.",
      "🇹🇷 İfade etmek fiilinin geçmiş zamanı."
    ],
    examples: [],
    related_word_ids: [1268]
  },
  {
    id: "vocab-genel-1269",
    category: "vocabulary",
    title: "Earthquake — Deprem",
    keywords: ["earthquake", "deprem", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A sudden, violent shaking of the ground.",
      "🇹🇷 Yerin ani, şiddetli bir şekilde sallanması."
    ],
    examples: [],
    related_word_ids: [1269]
  },
  {
    id: "vocab-genel-1270",
    category: "vocabulary",
    title: "Earthquakes — Depremler",
    keywords: ["earthquakes", "depremler", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Sudden, violent shakings of the ground.",
      "🇹🇷 Yerin ani, şiddetli sallantıları."
    ],
    examples: [],
    related_word_ids: [1270]
  },
  {
    id: "vocab-genel-1271",
    category: "vocabulary",
    title: "Avalanche — Çığ",
    keywords: ["avalanche", "çığ", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A large amount of snow falling down a mountain.",
      "🇹🇷 Dağdan aşağı düşen büyük miktarda kar."
    ],
    examples: [],
    related_word_ids: [1271]
  },
  {
    id: "vocab-genel-1272",
    category: "vocabulary",
    title: "Avalanches — Çığlar",
    keywords: ["avalanches", "çığlar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Large amounts of snow falling down a mountain.",
      "🇹🇷 Dağdan aşağı düşen büyük miktarda karlar."
    ],
    examples: [],
    related_word_ids: [1272]
  },
  {
    id: "vocab-genel-1273",
    category: "vocabulary",
    title: "Industry — Endüstri / Sanayi",
    keywords: ["industry", "endüstri / sanayi", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The making of goods in factories.",
      "🇹🇷 Fabrikalarda mal yapımı."
    ],
    examples: [],
    related_word_ids: [1273]
  },
  {
    id: "vocab-genel-1274",
    category: "vocabulary",
    title: "Industries — Endüstriler / Sanayiler",
    keywords: ["industries", "endüstriler / sanayiler", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Different types of businesses making goods.",
      "🇹🇷 Mal yapan farklı iş türleri."
    ],
    examples: [],
    related_word_ids: [1274]
  },
  {
    id: "vocab-genel-1275",
    category: "vocabulary",
    title: "Release — Serbest bırakmak / Yayınlamak",
    keywords: ["release", "serbest bırakmak / yayınlamak", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To let something go or make it ready for people.",
      "🇹🇷 Bir şeyi bırakmak veya insanlar için hazır hale getirmek."
    ],
    examples: [],
    related_word_ids: [1275]
  },
  {
    id: "vocab-genel-1276",
    category: "vocabulary",
    title: "Leading — Lider / Önde gelen",
    keywords: ["leading", "lider / önde gelen", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Most important or best.",
      "🇹🇷 En önemli veya en iyi olan."
    ],
    examples: [],
    related_word_ids: [1276]
  },
  {
    id: "vocab-genel-1277",
    category: "vocabulary",
    title: "Audience — Seyirci / Dinleyici",
    keywords: ["audience", "seyirci / dinleyici", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 People who watch or listen to a show.",
      "🇹🇷 Bir gösteriyi izleyen veya dinleyen insanlar."
    ],
    examples: [],
    related_word_ids: [1277]
  },
  {
    id: "vocab-genel-1278",
    category: "vocabulary",
    title: "Audiences — Seyirciler / Dinleyiciler",
    keywords: ["audiences", "seyirciler / dinleyiciler", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Groups of people who watch or listen to a show.",
      "🇹🇷 Bir gösteriyi izleyen veya dinleyen insan grupları."
    ],
    examples: [],
    related_word_ids: [1278]
  },
  {
    id: "vocab-genel-1279",
    category: "vocabulary",
    title: "Drum — Davul",
    keywords: ["drum", "davul", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A musical instrument you hit to make a sound.",
      "🇹🇷 Ses çıkarmak için vurduğun müzik aleti."
    ],
    examples: [],
    related_word_ids: [1279]
  },
  {
    id: "vocab-genel-1280",
    category: "vocabulary",
    title: "Drums — Davullar",
    keywords: ["drums", "davullar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Musical instruments you hit to make sounds.",
      "🇹🇷 Ses çıkarmak için vurduğun müzik aletleri."
    ],
    examples: [],
    related_word_ids: [1280]
  },
  {
    id: "vocab-genel-1281",
    category: "vocabulary",
    title: "Beatles — Beatles (Müzik Grubu)",
    keywords: ["beatles", "beatles (müzik grubu)", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A very famous English rock band.",
      "🇹🇷 Çok ünlü bir İngiliz rock grubu."
    ],
    examples: [],
    related_word_ids: [1281]
  },
  {
    id: "vocab-genel-1282",
    category: "vocabulary",
    title: "Authority — Yetkili / Otorite",
    keywords: ["authority", "yetkili / otorite", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 The power to make rules or decisions.",
      "🇹🇷 Kural veya karar verme gücü."
    ],
    examples: [],
    related_word_ids: [1282]
  },
  {
    id: "vocab-genel-1283",
    category: "vocabulary",
    title: "Authorities — Yetkililer",
    keywords: ["authorities", "yetkililer", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 People who have the power to make decisions.",
      "🇹🇷 Karar verme gücüne sahip olan insanlar."
    ],
    examples: [],
    related_word_ids: [1283]
  },
  {
    id: "vocab-genel-1284",
    category: "vocabulary",
    title: "Consider — Dikkate almak / Düşünmek",
    keywords: ["consider", "dikkate almak / düşünmek", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To think about something carefully.",
      "🇹🇷 Bir şey hakkında dikkatlice düşünmek."
    ],
    examples: [],
    related_word_ids: [1284]
  },
  {
    id: "vocab-genel-1285",
    category: "vocabulary",
    title: "Exceed — Aşmak / Geçmek",
    keywords: ["exceed", "aşmak / geçmek", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To be more than a number or limit.",
      "🇹🇷 Bir sayıdan veya sınırdan fazla olmak."
    ],
    examples: [],
    related_word_ids: [1285]
  },
  {
    id: "vocab-genel-1286",
    category: "vocabulary",
    title: "Exceeding — Aşan / Geçen",
    keywords: ["exceeding", "aşan / geçen", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Being more than a limit.",
      "🇹🇷 Bir sınırı aşma durumu."
    ],
    examples: [],
    related_word_ids: [1286]
  },
  {
    id: "vocab-genel-1287",
    category: "vocabulary",
    title: "Combination — Birleşim / Kombinasyon",
    keywords: ["combination", "birleşim / kombinasyon", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Two or more things joined together.",
      "🇹🇷 İki veya daha fazla şeyin birleşmesi."
    ],
    examples: [],
    related_word_ids: [1287]
  },
  {
    id: "vocab-genel-1288",
    category: "vocabulary",
    title: "Combinations — Birleşimler",
    keywords: ["combinations", "birleşimler", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Different groups of things joined together.",
      "🇹🇷 Birlikte katılmış farklı şey grupları."
    ],
    examples: [],
    related_word_ids: [1288]
  },
  {
    id: "vocab-genel-1289",
    category: "vocabulary",
    title: "Dark — Karanlık / Koyu",
    keywords: ["dark", "karanlık / koyu", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Having very little light.",
      "🇹🇷 Çok az ışığı olan."
    ],
    examples: [],
    related_word_ids: [1289]
  },
  {
    id: "vocab-genel-1290",
    category: "vocabulary",
    title: "Hysterical — Histerik / Çok komik",
    keywords: ["hysterical", "histerik / çok komik", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Extremely funny or losing control of feelings.",
      "🇹🇷 Aşırı komik veya hislerin kontrolünü kaybetme."
    ],
    examples: [],
    related_word_ids: [1290]
  },
  {
    id: "vocab-genel-1291",
    category: "vocabulary",
    title: "Band — Müzik grubu",
    keywords: ["band", "müzik grubu", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A group of people who play music together.",
      "🇹🇷 Birlikte müzik çalan bir grup insan."
    ],
    examples: [],
    related_word_ids: [1291]
  },
  {
    id: "vocab-genel-1292",
    category: "vocabulary",
    title: "Bands — Müzik grupları",
    keywords: ["bands", "müzik grupları", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Groups of people who play music together.",
      "🇹🇷 Birlikte müzik çalan insan grupları."
    ],
    examples: [],
    related_word_ids: [1292]
  },
  {
    id: "vocab-genel-1293",
    category: "vocabulary",
    title: "Famous — Ünlü / Meşhur",
    keywords: ["famous", "ünlü / meşhur", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Known by a lot of people.",
      "🇹🇷 Birçok insan tarafından bilinen."
    ],
    examples: [],
    related_word_ids: [1293]
  },
  {
    id: "vocab-genel-1294",
    category: "vocabulary",
    title: "Church — Kilise",
    keywords: ["church", "kilise", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A building for Christian religious events.",
      "🇹🇷 Hristiyan dini etkinlikleri için bir bina."
    ],
    examples: [],
    related_word_ids: [1294]
  },
  {
    id: "vocab-genel-1295",
    category: "vocabulary",
    title: "Churches — Kiliseler",
    keywords: ["churches", "kiliseler", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Buildings for Christian religious events.",
      "🇹🇷 Hristiyan dini etkinlikleri için binalar."
    ],
    examples: [],
    related_word_ids: [1295]
  },
  {
    id: "vocab-genel-1296",
    category: "vocabulary",
    title: "Masterpiece — Başyapıt / Şaheser",
    keywords: ["masterpiece", "başyapıt / şaheser", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A very great piece of art.",
      "🇹🇷 Çok harika bir sanat eseri."
    ],
    examples: [],
    related_word_ids: [1296]
  },
  {
    id: "vocab-genel-1297",
    category: "vocabulary",
    title: "Masterpieces — Başyapıtlar / Şaheserler",
    keywords: ["masterpieces", "başyapıtlar / şaheserler", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Very great pieces of art.",
      "🇹🇷 Çok harika sanat eserleri."
    ],
    examples: [],
    related_word_ids: [1297]
  },
  {
    id: "vocab-genel-1298",
    category: "vocabulary",
    title: "Fashion — Moda",
    keywords: ["fashion", "moda", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A popular style of clothes.",
      "🇹🇷 Popüler bir giyim tarzı."
    ],
    examples: [],
    related_word_ids: [1298]
  },
  {
    id: "vocab-genel-1299",
    category: "vocabulary",
    title: "Building — Bina / Yapı",
    keywords: ["building", "bina / yapı", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A place with a roof and walls, like a house.",
      "🇹🇷 Ev gibi çatısı ve duvarları olan bir yer."
    ],
    examples: [],
    related_word_ids: [1299]
  },
  {
    id: "vocab-genel-1300",
    category: "vocabulary",
    title: "Buildings — Binalar",
    keywords: ["buildings", "binalar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Places with roofs and walls.",
      "🇹🇷 Çatıları ve duvarları olan yerler."
    ],
    examples: [],
    related_word_ids: [1300]
  },
  {
    id: "vocab-genel-1301",
    category: "vocabulary",
    title: "Museum — Müze",
    keywords: ["museum", "müze", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A building where you look at old or interesting things.",
      "🇹🇷 Eski veya ilginç şeylere baktığın bina."
    ],
    examples: [],
    related_word_ids: [1301]
  },
  {
    id: "vocab-genel-1302",
    category: "vocabulary",
    title: "Museums — Müzeler",
    keywords: ["museums", "müzeler", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Buildings where you look at old or interesting things.",
      "🇹🇷 Eski veya ilginç şeylere baktığın binalar."
    ],
    examples: [],
    related_word_ids: [1302]
  },
  {
    id: "vocab-genel-1303",
    category: "vocabulary",
    title: "Gallery — Galeri",
    keywords: ["gallery", "galeri", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A room or building for showing art.",
      "🇹🇷 Sanatı göstermek için bir oda veya bina."
    ],
    examples: [],
    related_word_ids: [1303]
  },
  {
    id: "vocab-genel-1304",
    category: "vocabulary",
    title: "Galleries — Galeriler",
    keywords: ["galleries", "galeriler", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Rooms or buildings for showing art.",
      "🇹🇷 Sanatı göstermek için odalar veya binalar."
    ],
    examples: [],
    related_word_ids: [1304]
  },
  {
    id: "vocab-genel-1305",
    category: "vocabulary",
    title: "Therefore — Bu nedenle / Dolayısıyla",
    keywords: ["therefore", "bu nedenle / dolayısıyla", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 For that reason.",
      "🇹🇷 O sebepten dolayı."
    ],
    examples: [],
    related_word_ids: [1305]
  },
  {
    id: "vocab-genel-1306",
    category: "vocabulary",
    title: "Contribute — Katkıda bulunmak",
    keywords: ["contribute", "katkıda bulunmak", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To give money, help, or an idea.",
      "🇹🇷 Para, yardım veya bir fikir vermek."
    ],
    examples: [],
    related_word_ids: [1306]
  },
  {
    id: "vocab-genel-1307",
    category: "vocabulary",
    title: "Contributing — Katkıda bulunan",
    keywords: ["contributing", "katkıda bulunan", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Giving money, help, or an idea.",
      "🇹🇷 Para, yardım veya bir fikir verme durumu."
    ],
    examples: [],
    related_word_ids: [1307]
  },
  {
    id: "vocab-genel-1308",
    category: "vocabulary",
    title: "Safe — Güvenli",
    keywords: ["safe", "güvenli", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Not in danger.",
      "🇹🇷 Tehlikede olmayan."
    ],
    examples: [],
    related_word_ids: [1308]
  },
  {
    id: "vocab-genel-1309",
    category: "vocabulary",
    title: "Expensive — Pahalı",
    keywords: ["expensive", "pahalı", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Costing a lot of money.",
      "🇹🇷 Çok paraya mal olan."
    ],
    examples: [],
    related_word_ids: [1309]
  },
  {
    id: "vocab-genel-1310",
    category: "vocabulary",
    title: "Fantastic — Harika / Şahane",
    keywords: ["fantastic", "harika / şahane", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Very good or beautiful.",
      "🇹🇷 Çok iyi veya güzel."
    ],
    examples: [],
    related_word_ids: [1310]
  },
  {
    id: "vocab-genel-1311",
    category: "vocabulary",
    title: "However — Ancak / Yine de",
    keywords: ["however", "ancak / yine de", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 But.",
      "🇹🇷 Fakat, lakin."
    ],
    examples: [],
    related_word_ids: [1311]
  },
  {
    id: "vocab-genel-1312",
    category: "vocabulary",
    title: "Honour — Onur / Şeref",
    keywords: ["honour", "onur / şeref", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Great respect for someone.",
      "🇹🇷 Birine duyulan büyük saygı."
    ],
    examples: [],
    related_word_ids: [1312]
  },
  {
    id: "vocab-genel-1313",
    category: "vocabulary",
    title: "Privilege — Ayrıcalık",
    keywords: ["privilege", "ayrıcalık", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A special right or advantage for a person.",
      "🇹🇷 Bir kişi için özel hak veya avantaj."
    ],
    examples: [],
    related_word_ids: [1313]
  },
  {
    id: "vocab-genel-1314",
    category: "vocabulary",
    title: "Privileges — Ayrıcalıklar",
    keywords: ["privileges", "ayrıcalıklar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Special rights or advantages.",
      "🇹🇷 Özel haklar veya avantajlar."
    ],
    examples: [],
    related_word_ids: [1314]
  },
  {
    id: "vocab-genel-1315",
    category: "vocabulary",
    title: "Interview — Röportaj / Mülakat",
    keywords: ["interview", "röportaj / mülakat", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A meeting where someone asks you questions.",
      "🇹🇷 Birinin sana sorular sorduğu toplantı."
    ],
    examples: [],
    related_word_ids: [1315]
  },
  {
    id: "vocab-genel-1316",
    category: "vocabulary",
    title: "Interviews — Röportajlar / Mülakatlar",
    keywords: ["interviews", "röportajlar / mülakatlar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Meetings where people ask questions.",
      "🇹🇷 İnsanların sorular sorduğu toplantılar."
    ],
    examples: [],
    related_word_ids: [1316]
  },
  {
    id: "vocab-genel-1317",
    category: "vocabulary",
    title: "Admire — Hayran olmak / Beğenmek",
    keywords: ["admire", "hayran olmak / beğenmek", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To respect and like someone or something.",
      "🇹🇷 Birine veya bir şeye saygı duymak ve beğenmek."
    ],
    examples: [],
    related_word_ids: [1317]
  },
  {
    id: "vocab-genel-1318",
    category: "vocabulary",
    title: "Invaluable — Paha biçilemez",
    keywords: ["invaluable", "paha biçilemez", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Extremely useful or important.",
      "🇹🇷 Son derece yararlı veya önemli."
    ],
    examples: [],
    related_word_ids: [1318]
  },
  {
    id: "vocab-genel-1319",
    category: "vocabulary",
    title: "Significant — Önemli / Anlamlı",
    keywords: ["significant", "önemli / anlamlı", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Important and easy to see.",
      "🇹🇷 Önemli ve görülmesi kolay olan."
    ],
    examples: [],
    related_word_ids: [1319]
  },
  {
    id: "vocab-genel-1320",
    category: "vocabulary",
    title: "Carriage — At arabası / Vagon",
    keywords: ["carriage", "at arabası / vagon", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A vehicle pulled by horses.",
      "🇹🇷 Atlar tarafından çekilen bir araç."
    ],
    examples: [],
    related_word_ids: [1320]
  },
  {
    id: "vocab-genel-1321",
    category: "vocabulary",
    title: "Carriages — At arabaları / Vagonlar",
    keywords: ["carriages", "at arabaları / vagonlar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Vehicles pulled by horses.",
      "🇹🇷 Atlar tarafından çekilen araçlar."
    ],
    examples: [],
    related_word_ids: [1321]
  },
  {
    id: "vocab-genel-1322",
    category: "vocabulary",
    title: "Keep — Tutmak / Saklamak",
    keywords: ["keep", "tutmak / saklamak", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 To have and not give back.",
      "🇹🇷 Sahip olmak ve geri vermemek."
    ],
    examples: [],
    related_word_ids: [1322]
  },
  {
    id: "vocab-genel-1323",
    category: "vocabulary",
    title: "Happy — Mutlu",
    keywords: ["happy", "mutlu", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Feeling good and smiling.",
      "🇹🇷 İyi hissetmek ve gülümsemek."
    ],
    examples: [],
    related_word_ids: [1323]
  },
  {
    id: "vocab-genel-1324",
    category: "vocabulary",
    title: "Happier — Daha mutlu",
    keywords: ["happier", "daha mutlu", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Feeling more good than before.",
      "🇹🇷 Eskisinden daha iyi hissetmek."
    ],
    examples: [],
    related_word_ids: [1324]
  },
  {
    id: "vocab-genel-1325",
    category: "vocabulary",
    title: "Elegant — Zarif / Şık",
    keywords: ["elegant", "zarif / şık", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Beautiful and graceful.",
      "🇹🇷 Güzel ve zarif olan."
    ],
    examples: [],
    related_word_ids: [1325]
  },
  {
    id: "vocab-genel-1326",
    category: "vocabulary",
    title: "National — Ulusal / Milli",
    keywords: ["national", "ulusal / milli", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 About a whole country.",
      "🇹🇷 Bütün bir ülke hakkında olan."
    ],
    examples: [],
    related_word_ids: [1326]
  },
  {
    id: "vocab-genel-1327",
    category: "vocabulary",
    title: "Anthem — Marş",
    keywords: ["anthem", "marş", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A special song for a country or group.",
      "🇹🇷 Bir ülke veya grup için özel bir şarkı."
    ],
    examples: [],
    related_word_ids: [1327]
  },
  {
    id: "vocab-genel-1328",
    category: "vocabulary",
    title: "Anthems — Marşlar",
    keywords: ["anthems", "marşlar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Special songs for countries or groups.",
      "🇹🇷 Ülkeler veya gruplar için özel şarkılar."
    ],
    examples: [],
    related_word_ids: [1328]
  },
  {
    id: "vocab-genel-1329",
    category: "vocabulary",
    title: "Isolated — İzole / Yalıtılmış",
    keywords: ["isolated", "i̇zole / yalıtılmış", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Far away from other things or people.",
      "🇹🇷 Başka şeylerden veya insanlardan çok uzakta olan."
    ],
    examples: [],
    related_word_ids: [1329]
  },
  {
    id: "vocab-genel-1330",
    category: "vocabulary",
    title: "Precious — Değerli / Kıymetli",
    keywords: ["precious", "değerli / kıymetli", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Very expensive or important to you.",
      "🇹🇷 Senin için çok pahalı veya önemli olan."
    ],
    examples: [],
    related_word_ids: [1330]
  },
  {
    id: "vocab-genel-1331",
    category: "vocabulary",
    title: "Ample — Bol / Yeterince",
    keywords: ["ample", "bol / yeterince", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 More than enough.",
      "🇹🇷 Yeterinden daha fazla olan."
    ],
    examples: [],
    related_word_ids: [1331]
  },
  {
    id: "vocab-genel-1332",
    category: "vocabulary",
    title: "Souvenir — Hediyelik eşya / Hatıra",
    keywords: ["souvenir", "hediyelik eşya / hatıra", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A thing you buy to remember a place.",
      "🇹🇷 Bir yeri hatırlamak için satın aldığın şey."
    ],
    examples: [],
    related_word_ids: [1332]
  },
  {
    id: "vocab-genel-1333",
    category: "vocabulary",
    title: "Souvenirs — Hediyelik eşyalar / Hatıralar",
    keywords: ["souvenirs", "hediyelik eşyalar / hatıralar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Things you buy to remember places.",
      "🇹🇷 Yerleri hatırlamak için satın aldığın şeyler."
    ],
    examples: [],
    related_word_ids: [1333]
  },
  {
    id: "vocab-genel-1334",
    category: "vocabulary",
    title: "Mosque — Cami",
    keywords: ["mosque", "cami", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A building for Islamic religious events.",
      "🇹🇷 İslami dini etkinlikler için bir bina."
    ],
    examples: [],
    related_word_ids: [1334]
  },
  {
    id: "vocab-genel-1335",
    category: "vocabulary",
    title: "Mosques — Camiler",
    keywords: ["mosques", "camiler", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Buildings for Islamic religious events.",
      "🇹🇷 İslami dini etkinlikler için binalar."
    ],
    examples: [],
    related_word_ids: [1335]
  },
  {
    id: "vocab-genel-1336",
    category: "vocabulary",
    title: "Empire — İmparatorluk",
    keywords: ["empire", "i̇mparatorluk", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 A large group of countries ruled by one person.",
      "🇹🇷 Bir kişi tarafından yönetilen büyük bir ülke grubu."
    ],
    examples: [],
    related_word_ids: [1336]
  },
  {
    id: "vocab-genel-1337",
    category: "vocabulary",
    title: "Empires — İmparatorluklar",
    keywords: ["empires", "i̇mparatorluklar", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 Large groups of countries ruled by one person.",
      "🇹🇷 Bir kişi tarafından yönetilen büyük ülke grupları."
    ],
    examples: [],
    related_word_ids: [1337]
  },


  // A2 SAATLER OTO-EKLENEN KAVRAMLAR
  {
    id: "vocab-saat-2000",
    category: "vocabulary",
    title: "twelve o'clock a.m. — gece on iki",
    keywords: ["twelve o'clock a.m.", "gece on iki", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:00.",
      "🇹🇷 Saat 00:00."
    ],
    examples: [],
    related_word_ids: [2000]
  },
  {
    id: "vocab-saat-2001",
    category: "vocabulary",
    title: "one minute past twelve a.m. — gece on ikiyi bir geçiyor",
    keywords: ["one minute past twelve a.m.", "gece on ikiyi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:01.",
      "🇹🇷 Saat 00:01."
    ],
    examples: [],
    related_word_ids: [2001]
  },
  {
    id: "vocab-saat-2002",
    category: "vocabulary",
    title: "two minutes past twelve a.m. — gece on ikiyi iki geçiyor",
    keywords: ["two minutes past twelve a.m.", "gece on ikiyi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:02.",
      "🇹🇷 Saat 00:02."
    ],
    examples: [],
    related_word_ids: [2002]
  },
  {
    id: "vocab-saat-2003",
    category: "vocabulary",
    title: "three minutes past twelve a.m. — gece on ikiyi üç geçiyor",
    keywords: ["three minutes past twelve a.m.", "gece on ikiyi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:03.",
      "🇹🇷 Saat 00:03."
    ],
    examples: [],
    related_word_ids: [2003]
  },
  {
    id: "vocab-saat-2004",
    category: "vocabulary",
    title: "four minutes past twelve a.m. — gece on ikiyi dört geçiyor",
    keywords: ["four minutes past twelve a.m.", "gece on ikiyi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:04.",
      "🇹🇷 Saat 00:04."
    ],
    examples: [],
    related_word_ids: [2004]
  },
  {
    id: "vocab-saat-2005",
    category: "vocabulary",
    title: "five past twelve a.m. — gece on ikiyi beş geçiyor",
    keywords: ["five past twelve a.m.", "gece on ikiyi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:05.",
      "🇹🇷 Saat 00:05."
    ],
    examples: [],
    related_word_ids: [2005]
  },
  {
    id: "vocab-saat-2006",
    category: "vocabulary",
    title: "six minutes past twelve a.m. — gece on ikiyi altı geçiyor",
    keywords: ["six minutes past twelve a.m.", "gece on ikiyi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:06.",
      "🇹🇷 Saat 00:06."
    ],
    examples: [],
    related_word_ids: [2006]
  },
  {
    id: "vocab-saat-2007",
    category: "vocabulary",
    title: "seven minutes past twelve a.m. — gece on ikiyi yedi geçiyor",
    keywords: ["seven minutes past twelve a.m.", "gece on ikiyi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:07.",
      "🇹🇷 Saat 00:07."
    ],
    examples: [],
    related_word_ids: [2007]
  },
  {
    id: "vocab-saat-2008",
    category: "vocabulary",
    title: "eight minutes past twelve a.m. — gece on ikiyi sekiz geçiyor",
    keywords: ["eight minutes past twelve a.m.", "gece on ikiyi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:08.",
      "🇹🇷 Saat 00:08."
    ],
    examples: [],
    related_word_ids: [2008]
  },
  {
    id: "vocab-saat-2009",
    category: "vocabulary",
    title: "nine minutes past twelve a.m. — gece on ikiyi dokuz geçiyor",
    keywords: ["nine minutes past twelve a.m.", "gece on ikiyi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:09.",
      "🇹🇷 Saat 00:09."
    ],
    examples: [],
    related_word_ids: [2009]
  },
  {
    id: "vocab-saat-2010",
    category: "vocabulary",
    title: "ten past twelve a.m. — gece on ikiyi on geçiyor",
    keywords: ["ten past twelve a.m.", "gece on ikiyi on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:10.",
      "🇹🇷 Saat 00:10."
    ],
    examples: [],
    related_word_ids: [2010]
  },
  {
    id: "vocab-saat-2011",
    category: "vocabulary",
    title: "eleven minutes past twelve a.m. — gece on ikiyi on bir geçiyor",
    keywords: ["eleven minutes past twelve a.m.", "gece on ikiyi on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:11.",
      "🇹🇷 Saat 00:11."
    ],
    examples: [],
    related_word_ids: [2011]
  },
  {
    id: "vocab-saat-2012",
    category: "vocabulary",
    title: "twelve minutes past twelve a.m. — gece on ikiyi on iki geçiyor",
    keywords: ["twelve minutes past twelve a.m.", "gece on ikiyi on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:12.",
      "🇹🇷 Saat 00:12."
    ],
    examples: [],
    related_word_ids: [2012]
  },
  {
    id: "vocab-saat-2013",
    category: "vocabulary",
    title: "thirteen minutes past twelve a.m. — gece on ikiyi on üç geçiyor",
    keywords: ["thirteen minutes past twelve a.m.", "gece on ikiyi on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:13.",
      "🇹🇷 Saat 00:13."
    ],
    examples: [],
    related_word_ids: [2013]
  },
  {
    id: "vocab-saat-2014",
    category: "vocabulary",
    title: "fourteen minutes past twelve a.m. — gece on ikiyi on dört geçiyor",
    keywords: ["fourteen minutes past twelve a.m.", "gece on ikiyi on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:14.",
      "🇹🇷 Saat 00:14."
    ],
    examples: [],
    related_word_ids: [2014]
  },
  {
    id: "vocab-saat-2015",
    category: "vocabulary",
    title: "a quarter past twelve a.m. — gece on ikiyi çeyrek geçiyor",
    keywords: ["a quarter past twelve a.m.", "gece on ikiyi çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:15.",
      "🇹🇷 Saat 00:15."
    ],
    examples: [],
    related_word_ids: [2015]
  },
  {
    id: "vocab-saat-2016",
    category: "vocabulary",
    title: "sixteen minutes past twelve a.m. — gece on ikiyi on altı geçiyor",
    keywords: ["sixteen minutes past twelve a.m.", "gece on ikiyi on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:16.",
      "🇹🇷 Saat 00:16."
    ],
    examples: [],
    related_word_ids: [2016]
  },
  {
    id: "vocab-saat-2017",
    category: "vocabulary",
    title: "seventeen minutes past twelve a.m. — gece on ikiyi on yedi geçiyor",
    keywords: ["seventeen minutes past twelve a.m.", "gece on ikiyi on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:17.",
      "🇹🇷 Saat 00:17."
    ],
    examples: [],
    related_word_ids: [2017]
  },
  {
    id: "vocab-saat-2018",
    category: "vocabulary",
    title: "eighteen minutes past twelve a.m. — gece on ikiyi on sekiz geçiyor",
    keywords: ["eighteen minutes past twelve a.m.", "gece on ikiyi on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:18.",
      "🇹🇷 Saat 00:18."
    ],
    examples: [],
    related_word_ids: [2018]
  },
  {
    id: "vocab-saat-2019",
    category: "vocabulary",
    title: "nineteen minutes past twelve a.m. — gece on ikiyi on dokuz geçiyor",
    keywords: ["nineteen minutes past twelve a.m.", "gece on ikiyi on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:19.",
      "🇹🇷 Saat 00:19."
    ],
    examples: [],
    related_word_ids: [2019]
  },
  {
    id: "vocab-saat-2020",
    category: "vocabulary",
    title: "twenty past twelve a.m. — gece on ikiyi yirmi geçiyor",
    keywords: ["twenty past twelve a.m.", "gece on ikiyi yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:20.",
      "🇹🇷 Saat 00:20."
    ],
    examples: [],
    related_word_ids: [2020]
  },
  {
    id: "vocab-saat-2021",
    category: "vocabulary",
    title: "twenty-one minutes past twelve a.m. — gece on ikiyi yirmi bir geçiyor",
    keywords: ["twenty-one minutes past twelve a.m.", "gece on ikiyi yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:21.",
      "🇹🇷 Saat 00:21."
    ],
    examples: [],
    related_word_ids: [2021]
  },
  {
    id: "vocab-saat-2022",
    category: "vocabulary",
    title: "twenty-two minutes past twelve a.m. — gece on ikiyi yirmi iki geçiyor",
    keywords: ["twenty-two minutes past twelve a.m.", "gece on ikiyi yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:22.",
      "🇹🇷 Saat 00:22."
    ],
    examples: [],
    related_word_ids: [2022]
  },
  {
    id: "vocab-saat-2023",
    category: "vocabulary",
    title: "twenty-three minutes past twelve a.m. — gece on ikiyi yirmi üç geçiyor",
    keywords: ["twenty-three minutes past twelve a.m.", "gece on ikiyi yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:23.",
      "🇹🇷 Saat 00:23."
    ],
    examples: [],
    related_word_ids: [2023]
  },
  {
    id: "vocab-saat-2024",
    category: "vocabulary",
    title: "twenty-four minutes past twelve a.m. — gece on ikiyi yirmi dört geçiyor",
    keywords: ["twenty-four minutes past twelve a.m.", "gece on ikiyi yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:24.",
      "🇹🇷 Saat 00:24."
    ],
    examples: [],
    related_word_ids: [2024]
  },
  {
    id: "vocab-saat-2025",
    category: "vocabulary",
    title: "twenty-five past twelve a.m. — gece on ikiyi yirmi beş geçiyor",
    keywords: ["twenty-five past twelve a.m.", "gece on ikiyi yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:25.",
      "🇹🇷 Saat 00:25."
    ],
    examples: [],
    related_word_ids: [2025]
  },
  {
    id: "vocab-saat-2026",
    category: "vocabulary",
    title: "twenty-six minutes past twelve a.m. — gece on ikiyi yirmi altı geçiyor",
    keywords: ["twenty-six minutes past twelve a.m.", "gece on ikiyi yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:26.",
      "🇹🇷 Saat 00:26."
    ],
    examples: [],
    related_word_ids: [2026]
  },
  {
    id: "vocab-saat-2027",
    category: "vocabulary",
    title: "twenty-seven minutes past twelve a.m. — gece on ikiyi yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past twelve a.m.", "gece on ikiyi yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:27.",
      "🇹🇷 Saat 00:27."
    ],
    examples: [],
    related_word_ids: [2027]
  },
  {
    id: "vocab-saat-2028",
    category: "vocabulary",
    title: "twenty-eight minutes past twelve a.m. — gece on ikiyi yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past twelve a.m.", "gece on ikiyi yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:28.",
      "🇹🇷 Saat 00:28."
    ],
    examples: [],
    related_word_ids: [2028]
  },
  {
    id: "vocab-saat-2029",
    category: "vocabulary",
    title: "twenty-nine minutes past twelve a.m. — gece on ikiyi yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past twelve a.m.", "gece on ikiyi yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:29.",
      "🇹🇷 Saat 00:29."
    ],
    examples: [],
    related_word_ids: [2029]
  },
  {
    id: "vocab-saat-2030",
    category: "vocabulary",
    title: "half past twelve a.m. — gece on iki buçuk",
    keywords: ["half past twelve a.m.", "gece on iki buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:30.",
      "🇹🇷 Saat 00:30."
    ],
    examples: [],
    related_word_ids: [2030]
  },
  {
    id: "vocab-saat-2031",
    category: "vocabulary",
    title: "twenty-nine minutes to one a.m. — gece bire yirmi dokuz var",
    keywords: ["twenty-nine minutes to one a.m.", "gece bire yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:31.",
      "🇹🇷 Saat 00:31."
    ],
    examples: [],
    related_word_ids: [2031]
  },
  {
    id: "vocab-saat-2032",
    category: "vocabulary",
    title: "twenty-eight minutes to one a.m. — gece bire yirmi sekiz var",
    keywords: ["twenty-eight minutes to one a.m.", "gece bire yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:32.",
      "🇹🇷 Saat 00:32."
    ],
    examples: [],
    related_word_ids: [2032]
  },
  {
    id: "vocab-saat-2033",
    category: "vocabulary",
    title: "twenty-seven minutes to one a.m. — gece bire yirmi yedi var",
    keywords: ["twenty-seven minutes to one a.m.", "gece bire yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:33.",
      "🇹🇷 Saat 00:33."
    ],
    examples: [],
    related_word_ids: [2033]
  },
  {
    id: "vocab-saat-2034",
    category: "vocabulary",
    title: "twenty-six minutes to one a.m. — gece bire yirmi altı var",
    keywords: ["twenty-six minutes to one a.m.", "gece bire yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:34.",
      "🇹🇷 Saat 00:34."
    ],
    examples: [],
    related_word_ids: [2034]
  },
  {
    id: "vocab-saat-2035",
    category: "vocabulary",
    title: "twenty-five to one a.m. — gece bire yirmi beş var",
    keywords: ["twenty-five to one a.m.", "gece bire yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:35.",
      "🇹🇷 Saat 00:35."
    ],
    examples: [],
    related_word_ids: [2035]
  },
  {
    id: "vocab-saat-2036",
    category: "vocabulary",
    title: "twenty-four minutes to one a.m. — gece bire yirmi dört var",
    keywords: ["twenty-four minutes to one a.m.", "gece bire yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:36.",
      "🇹🇷 Saat 00:36."
    ],
    examples: [],
    related_word_ids: [2036]
  },
  {
    id: "vocab-saat-2037",
    category: "vocabulary",
    title: "twenty-three minutes to one a.m. — gece bire yirmi üç var",
    keywords: ["twenty-three minutes to one a.m.", "gece bire yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:37.",
      "🇹🇷 Saat 00:37."
    ],
    examples: [],
    related_word_ids: [2037]
  },
  {
    id: "vocab-saat-2038",
    category: "vocabulary",
    title: "twenty-two minutes to one a.m. — gece bire yirmi iki var",
    keywords: ["twenty-two minutes to one a.m.", "gece bire yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:38.",
      "🇹🇷 Saat 00:38."
    ],
    examples: [],
    related_word_ids: [2038]
  },
  {
    id: "vocab-saat-2039",
    category: "vocabulary",
    title: "twenty-one minutes to one a.m. — gece bire yirmi bir var",
    keywords: ["twenty-one minutes to one a.m.", "gece bire yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:39.",
      "🇹🇷 Saat 00:39."
    ],
    examples: [],
    related_word_ids: [2039]
  },
  {
    id: "vocab-saat-2040",
    category: "vocabulary",
    title: "twenty to one a.m. — gece bire yirmi var",
    keywords: ["twenty to one a.m.", "gece bire yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:40.",
      "🇹🇷 Saat 00:40."
    ],
    examples: [],
    related_word_ids: [2040]
  },
  {
    id: "vocab-saat-2041",
    category: "vocabulary",
    title: "nineteen minutes to one a.m. — gece bire on dokuz var",
    keywords: ["nineteen minutes to one a.m.", "gece bire on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:41.",
      "🇹🇷 Saat 00:41."
    ],
    examples: [],
    related_word_ids: [2041]
  },
  {
    id: "vocab-saat-2042",
    category: "vocabulary",
    title: "eighteen minutes to one a.m. — gece bire on sekiz var",
    keywords: ["eighteen minutes to one a.m.", "gece bire on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:42.",
      "🇹🇷 Saat 00:42."
    ],
    examples: [],
    related_word_ids: [2042]
  },
  {
    id: "vocab-saat-2043",
    category: "vocabulary",
    title: "seventeen minutes to one a.m. — gece bire on yedi var",
    keywords: ["seventeen minutes to one a.m.", "gece bire on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:43.",
      "🇹🇷 Saat 00:43."
    ],
    examples: [],
    related_word_ids: [2043]
  },
  {
    id: "vocab-saat-2044",
    category: "vocabulary",
    title: "sixteen minutes to one a.m. — gece bire on altı var",
    keywords: ["sixteen minutes to one a.m.", "gece bire on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:44.",
      "🇹🇷 Saat 00:44."
    ],
    examples: [],
    related_word_ids: [2044]
  },
  {
    id: "vocab-saat-2045",
    category: "vocabulary",
    title: "a quarter to one a.m. — gece bire çeyrek var",
    keywords: ["a quarter to one a.m.", "gece bire çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:45.",
      "🇹🇷 Saat 00:45."
    ],
    examples: [],
    related_word_ids: [2045]
  },
  {
    id: "vocab-saat-2046",
    category: "vocabulary",
    title: "fourteen minutes to one a.m. — gece bire on dört var",
    keywords: ["fourteen minutes to one a.m.", "gece bire on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:46.",
      "🇹🇷 Saat 00:46."
    ],
    examples: [],
    related_word_ids: [2046]
  },
  {
    id: "vocab-saat-2047",
    category: "vocabulary",
    title: "thirteen minutes to one a.m. — gece bire on üç var",
    keywords: ["thirteen minutes to one a.m.", "gece bire on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:47.",
      "🇹🇷 Saat 00:47."
    ],
    examples: [],
    related_word_ids: [2047]
  },
  {
    id: "vocab-saat-2048",
    category: "vocabulary",
    title: "twelve minutes to one a.m. — gece bire on iki var",
    keywords: ["twelve minutes to one a.m.", "gece bire on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:48.",
      "🇹🇷 Saat 00:48."
    ],
    examples: [],
    related_word_ids: [2048]
  },
  {
    id: "vocab-saat-2049",
    category: "vocabulary",
    title: "eleven minutes to one a.m. — gece bire on bir var",
    keywords: ["eleven minutes to one a.m.", "gece bire on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:49.",
      "🇹🇷 Saat 00:49."
    ],
    examples: [],
    related_word_ids: [2049]
  },
  {
    id: "vocab-saat-2050",
    category: "vocabulary",
    title: "ten to one a.m. — gece bire on var",
    keywords: ["ten to one a.m.", "gece bire on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:50.",
      "🇹🇷 Saat 00:50."
    ],
    examples: [],
    related_word_ids: [2050]
  },
  {
    id: "vocab-saat-2051",
    category: "vocabulary",
    title: "nine minutes to one a.m. — gece bire dokuz var",
    keywords: ["nine minutes to one a.m.", "gece bire dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:51.",
      "🇹🇷 Saat 00:51."
    ],
    examples: [],
    related_word_ids: [2051]
  },
  {
    id: "vocab-saat-2052",
    category: "vocabulary",
    title: "eight minutes to one a.m. — gece bire sekiz var",
    keywords: ["eight minutes to one a.m.", "gece bire sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:52.",
      "🇹🇷 Saat 00:52."
    ],
    examples: [],
    related_word_ids: [2052]
  },
  {
    id: "vocab-saat-2053",
    category: "vocabulary",
    title: "seven minutes to one a.m. — gece bire yedi var",
    keywords: ["seven minutes to one a.m.", "gece bire yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:53.",
      "🇹🇷 Saat 00:53."
    ],
    examples: [],
    related_word_ids: [2053]
  },
  {
    id: "vocab-saat-2054",
    category: "vocabulary",
    title: "six minutes to one a.m. — gece bire altı var",
    keywords: ["six minutes to one a.m.", "gece bire altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:54.",
      "🇹🇷 Saat 00:54."
    ],
    examples: [],
    related_word_ids: [2054]
  },
  {
    id: "vocab-saat-2055",
    category: "vocabulary",
    title: "five to one a.m. — gece bire beş var",
    keywords: ["five to one a.m.", "gece bire beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:55.",
      "🇹🇷 Saat 00:55."
    ],
    examples: [],
    related_word_ids: [2055]
  },
  {
    id: "vocab-saat-2056",
    category: "vocabulary",
    title: "four minutes to one a.m. — gece bire dört var",
    keywords: ["four minutes to one a.m.", "gece bire dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:56.",
      "🇹🇷 Saat 00:56."
    ],
    examples: [],
    related_word_ids: [2056]
  },
  {
    id: "vocab-saat-2057",
    category: "vocabulary",
    title: "three minutes to one a.m. — gece bire üç var",
    keywords: ["three minutes to one a.m.", "gece bire üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:57.",
      "🇹🇷 Saat 00:57."
    ],
    examples: [],
    related_word_ids: [2057]
  },
  {
    id: "vocab-saat-2058",
    category: "vocabulary",
    title: "two minutes to one a.m. — gece bire iki var",
    keywords: ["two minutes to one a.m.", "gece bire iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:58.",
      "🇹🇷 Saat 00:58."
    ],
    examples: [],
    related_word_ids: [2058]
  },
  {
    id: "vocab-saat-2059",
    category: "vocabulary",
    title: "one minute to one a.m. — gece bire bir var",
    keywords: ["one minute to one a.m.", "gece bire bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 00:59.",
      "🇹🇷 Saat 00:59."
    ],
    examples: [],
    related_word_ids: [2059]
  },
  {
    id: "vocab-saat-2060",
    category: "vocabulary",
    title: "one o'clock a.m. — gece bir",
    keywords: ["one o'clock a.m.", "gece bir", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:00.",
      "🇹🇷 Saat 01:00."
    ],
    examples: [],
    related_word_ids: [2060]
  },
  {
    id: "vocab-saat-2061",
    category: "vocabulary",
    title: "one minute past one a.m. — gece biri bir geçiyor",
    keywords: ["one minute past one a.m.", "gece biri bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:01.",
      "🇹🇷 Saat 01:01."
    ],
    examples: [],
    related_word_ids: [2061]
  },
  {
    id: "vocab-saat-2062",
    category: "vocabulary",
    title: "two minutes past one a.m. — gece biri iki geçiyor",
    keywords: ["two minutes past one a.m.", "gece biri iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:02.",
      "🇹🇷 Saat 01:02."
    ],
    examples: [],
    related_word_ids: [2062]
  },
  {
    id: "vocab-saat-2063",
    category: "vocabulary",
    title: "three minutes past one a.m. — gece biri üç geçiyor",
    keywords: ["three minutes past one a.m.", "gece biri üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:03.",
      "🇹🇷 Saat 01:03."
    ],
    examples: [],
    related_word_ids: [2063]
  },
  {
    id: "vocab-saat-2064",
    category: "vocabulary",
    title: "four minutes past one a.m. — gece biri dört geçiyor",
    keywords: ["four minutes past one a.m.", "gece biri dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:04.",
      "🇹🇷 Saat 01:04."
    ],
    examples: [],
    related_word_ids: [2064]
  },
  {
    id: "vocab-saat-2065",
    category: "vocabulary",
    title: "five past one a.m. — gece biri beş geçiyor",
    keywords: ["five past one a.m.", "gece biri beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:05.",
      "🇹🇷 Saat 01:05."
    ],
    examples: [],
    related_word_ids: [2065]
  },
  {
    id: "vocab-saat-2066",
    category: "vocabulary",
    title: "six minutes past one a.m. — gece biri altı geçiyor",
    keywords: ["six minutes past one a.m.", "gece biri altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:06.",
      "🇹🇷 Saat 01:06."
    ],
    examples: [],
    related_word_ids: [2066]
  },
  {
    id: "vocab-saat-2067",
    category: "vocabulary",
    title: "seven minutes past one a.m. — gece biri yedi geçiyor",
    keywords: ["seven minutes past one a.m.", "gece biri yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:07.",
      "🇹🇷 Saat 01:07."
    ],
    examples: [],
    related_word_ids: [2067]
  },
  {
    id: "vocab-saat-2068",
    category: "vocabulary",
    title: "eight minutes past one a.m. — gece biri sekiz geçiyor",
    keywords: ["eight minutes past one a.m.", "gece biri sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:08.",
      "🇹🇷 Saat 01:08."
    ],
    examples: [],
    related_word_ids: [2068]
  },
  {
    id: "vocab-saat-2069",
    category: "vocabulary",
    title: "nine minutes past one a.m. — gece biri dokuz geçiyor",
    keywords: ["nine minutes past one a.m.", "gece biri dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:09.",
      "🇹🇷 Saat 01:09."
    ],
    examples: [],
    related_word_ids: [2069]
  },
  {
    id: "vocab-saat-2070",
    category: "vocabulary",
    title: "ten past one a.m. — gece biri on geçiyor",
    keywords: ["ten past one a.m.", "gece biri on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:10.",
      "🇹🇷 Saat 01:10."
    ],
    examples: [],
    related_word_ids: [2070]
  },
  {
    id: "vocab-saat-2071",
    category: "vocabulary",
    title: "eleven minutes past one a.m. — gece biri on bir geçiyor",
    keywords: ["eleven minutes past one a.m.", "gece biri on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:11.",
      "🇹🇷 Saat 01:11."
    ],
    examples: [],
    related_word_ids: [2071]
  },
  {
    id: "vocab-saat-2072",
    category: "vocabulary",
    title: "twelve minutes past one a.m. — gece biri on iki geçiyor",
    keywords: ["twelve minutes past one a.m.", "gece biri on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:12.",
      "🇹🇷 Saat 01:12."
    ],
    examples: [],
    related_word_ids: [2072]
  },
  {
    id: "vocab-saat-2073",
    category: "vocabulary",
    title: "thirteen minutes past one a.m. — gece biri on üç geçiyor",
    keywords: ["thirteen minutes past one a.m.", "gece biri on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:13.",
      "🇹🇷 Saat 01:13."
    ],
    examples: [],
    related_word_ids: [2073]
  },
  {
    id: "vocab-saat-2074",
    category: "vocabulary",
    title: "fourteen minutes past one a.m. — gece biri on dört geçiyor",
    keywords: ["fourteen minutes past one a.m.", "gece biri on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:14.",
      "🇹🇷 Saat 01:14."
    ],
    examples: [],
    related_word_ids: [2074]
  },
  {
    id: "vocab-saat-2075",
    category: "vocabulary",
    title: "a quarter past one a.m. — gece biri çeyrek geçiyor",
    keywords: ["a quarter past one a.m.", "gece biri çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:15.",
      "🇹🇷 Saat 01:15."
    ],
    examples: [],
    related_word_ids: [2075]
  },
  {
    id: "vocab-saat-2076",
    category: "vocabulary",
    title: "sixteen minutes past one a.m. — gece biri on altı geçiyor",
    keywords: ["sixteen minutes past one a.m.", "gece biri on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:16.",
      "🇹🇷 Saat 01:16."
    ],
    examples: [],
    related_word_ids: [2076]
  },
  {
    id: "vocab-saat-2077",
    category: "vocabulary",
    title: "seventeen minutes past one a.m. — gece biri on yedi geçiyor",
    keywords: ["seventeen minutes past one a.m.", "gece biri on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:17.",
      "🇹🇷 Saat 01:17."
    ],
    examples: [],
    related_word_ids: [2077]
  },
  {
    id: "vocab-saat-2078",
    category: "vocabulary",
    title: "eighteen minutes past one a.m. — gece biri on sekiz geçiyor",
    keywords: ["eighteen minutes past one a.m.", "gece biri on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:18.",
      "🇹🇷 Saat 01:18."
    ],
    examples: [],
    related_word_ids: [2078]
  },
  {
    id: "vocab-saat-2079",
    category: "vocabulary",
    title: "nineteen minutes past one a.m. — gece biri on dokuz geçiyor",
    keywords: ["nineteen minutes past one a.m.", "gece biri on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:19.",
      "🇹🇷 Saat 01:19."
    ],
    examples: [],
    related_word_ids: [2079]
  },
  {
    id: "vocab-saat-2080",
    category: "vocabulary",
    title: "twenty past one a.m. — gece biri yirmi geçiyor",
    keywords: ["twenty past one a.m.", "gece biri yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:20.",
      "🇹🇷 Saat 01:20."
    ],
    examples: [],
    related_word_ids: [2080]
  },
  {
    id: "vocab-saat-2081",
    category: "vocabulary",
    title: "twenty-one minutes past one a.m. — gece biri yirmi bir geçiyor",
    keywords: ["twenty-one minutes past one a.m.", "gece biri yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:21.",
      "🇹🇷 Saat 01:21."
    ],
    examples: [],
    related_word_ids: [2081]
  },
  {
    id: "vocab-saat-2082",
    category: "vocabulary",
    title: "twenty-two minutes past one a.m. — gece biri yirmi iki geçiyor",
    keywords: ["twenty-two minutes past one a.m.", "gece biri yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:22.",
      "🇹🇷 Saat 01:22."
    ],
    examples: [],
    related_word_ids: [2082]
  },
  {
    id: "vocab-saat-2083",
    category: "vocabulary",
    title: "twenty-three minutes past one a.m. — gece biri yirmi üç geçiyor",
    keywords: ["twenty-three minutes past one a.m.", "gece biri yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:23.",
      "🇹🇷 Saat 01:23."
    ],
    examples: [],
    related_word_ids: [2083]
  },
  {
    id: "vocab-saat-2084",
    category: "vocabulary",
    title: "twenty-four minutes past one a.m. — gece biri yirmi dört geçiyor",
    keywords: ["twenty-four minutes past one a.m.", "gece biri yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:24.",
      "🇹🇷 Saat 01:24."
    ],
    examples: [],
    related_word_ids: [2084]
  },
  {
    id: "vocab-saat-2085",
    category: "vocabulary",
    title: "twenty-five past one a.m. — gece biri yirmi beş geçiyor",
    keywords: ["twenty-five past one a.m.", "gece biri yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:25.",
      "🇹🇷 Saat 01:25."
    ],
    examples: [],
    related_word_ids: [2085]
  },
  {
    id: "vocab-saat-2086",
    category: "vocabulary",
    title: "twenty-six minutes past one a.m. — gece biri yirmi altı geçiyor",
    keywords: ["twenty-six minutes past one a.m.", "gece biri yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:26.",
      "🇹🇷 Saat 01:26."
    ],
    examples: [],
    related_word_ids: [2086]
  },
  {
    id: "vocab-saat-2087",
    category: "vocabulary",
    title: "twenty-seven minutes past one a.m. — gece biri yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past one a.m.", "gece biri yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:27.",
      "🇹🇷 Saat 01:27."
    ],
    examples: [],
    related_word_ids: [2087]
  },
  {
    id: "vocab-saat-2088",
    category: "vocabulary",
    title: "twenty-eight minutes past one a.m. — gece biri yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past one a.m.", "gece biri yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:28.",
      "🇹🇷 Saat 01:28."
    ],
    examples: [],
    related_word_ids: [2088]
  },
  {
    id: "vocab-saat-2089",
    category: "vocabulary",
    title: "twenty-nine minutes past one a.m. — gece biri yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past one a.m.", "gece biri yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:29.",
      "🇹🇷 Saat 01:29."
    ],
    examples: [],
    related_word_ids: [2089]
  },
  {
    id: "vocab-saat-2090",
    category: "vocabulary",
    title: "half past one a.m. — gece bir buçuk",
    keywords: ["half past one a.m.", "gece bir buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:30.",
      "🇹🇷 Saat 01:30."
    ],
    examples: [],
    related_word_ids: [2090]
  },
  {
    id: "vocab-saat-2091",
    category: "vocabulary",
    title: "twenty-nine minutes to two a.m. — gece ikiye yirmi dokuz var",
    keywords: ["twenty-nine minutes to two a.m.", "gece ikiye yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:31.",
      "🇹🇷 Saat 01:31."
    ],
    examples: [],
    related_word_ids: [2091]
  },
  {
    id: "vocab-saat-2092",
    category: "vocabulary",
    title: "twenty-eight minutes to two a.m. — gece ikiye yirmi sekiz var",
    keywords: ["twenty-eight minutes to two a.m.", "gece ikiye yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:32.",
      "🇹🇷 Saat 01:32."
    ],
    examples: [],
    related_word_ids: [2092]
  },
  {
    id: "vocab-saat-2093",
    category: "vocabulary",
    title: "twenty-seven minutes to two a.m. — gece ikiye yirmi yedi var",
    keywords: ["twenty-seven minutes to two a.m.", "gece ikiye yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:33.",
      "🇹🇷 Saat 01:33."
    ],
    examples: [],
    related_word_ids: [2093]
  },
  {
    id: "vocab-saat-2094",
    category: "vocabulary",
    title: "twenty-six minutes to two a.m. — gece ikiye yirmi altı var",
    keywords: ["twenty-six minutes to two a.m.", "gece ikiye yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:34.",
      "🇹🇷 Saat 01:34."
    ],
    examples: [],
    related_word_ids: [2094]
  },
  {
    id: "vocab-saat-2095",
    category: "vocabulary",
    title: "twenty-five to two a.m. — gece ikiye yirmi beş var",
    keywords: ["twenty-five to two a.m.", "gece ikiye yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:35.",
      "🇹🇷 Saat 01:35."
    ],
    examples: [],
    related_word_ids: [2095]
  },
  {
    id: "vocab-saat-2096",
    category: "vocabulary",
    title: "twenty-four minutes to two a.m. — gece ikiye yirmi dört var",
    keywords: ["twenty-four minutes to two a.m.", "gece ikiye yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:36.",
      "🇹🇷 Saat 01:36."
    ],
    examples: [],
    related_word_ids: [2096]
  },
  {
    id: "vocab-saat-2097",
    category: "vocabulary",
    title: "twenty-three minutes to two a.m. — gece ikiye yirmi üç var",
    keywords: ["twenty-three minutes to two a.m.", "gece ikiye yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:37.",
      "🇹🇷 Saat 01:37."
    ],
    examples: [],
    related_word_ids: [2097]
  },
  {
    id: "vocab-saat-2098",
    category: "vocabulary",
    title: "twenty-two minutes to two a.m. — gece ikiye yirmi iki var",
    keywords: ["twenty-two minutes to two a.m.", "gece ikiye yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:38.",
      "🇹🇷 Saat 01:38."
    ],
    examples: [],
    related_word_ids: [2098]
  },
  {
    id: "vocab-saat-2099",
    category: "vocabulary",
    title: "twenty-one minutes to two a.m. — gece ikiye yirmi bir var",
    keywords: ["twenty-one minutes to two a.m.", "gece ikiye yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:39.",
      "🇹🇷 Saat 01:39."
    ],
    examples: [],
    related_word_ids: [2099]
  },
  {
    id: "vocab-saat-2100",
    category: "vocabulary",
    title: "twenty to two a.m. — gece ikiye yirmi var",
    keywords: ["twenty to two a.m.", "gece ikiye yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:40.",
      "🇹🇷 Saat 01:40."
    ],
    examples: [],
    related_word_ids: [2100]
  },
  {
    id: "vocab-saat-2101",
    category: "vocabulary",
    title: "nineteen minutes to two a.m. — gece ikiye on dokuz var",
    keywords: ["nineteen minutes to two a.m.", "gece ikiye on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:41.",
      "🇹🇷 Saat 01:41."
    ],
    examples: [],
    related_word_ids: [2101]
  },
  {
    id: "vocab-saat-2102",
    category: "vocabulary",
    title: "eighteen minutes to two a.m. — gece ikiye on sekiz var",
    keywords: ["eighteen minutes to two a.m.", "gece ikiye on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:42.",
      "🇹🇷 Saat 01:42."
    ],
    examples: [],
    related_word_ids: [2102]
  },
  {
    id: "vocab-saat-2103",
    category: "vocabulary",
    title: "seventeen minutes to two a.m. — gece ikiye on yedi var",
    keywords: ["seventeen minutes to two a.m.", "gece ikiye on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:43.",
      "🇹🇷 Saat 01:43."
    ],
    examples: [],
    related_word_ids: [2103]
  },
  {
    id: "vocab-saat-2104",
    category: "vocabulary",
    title: "sixteen minutes to two a.m. — gece ikiye on altı var",
    keywords: ["sixteen minutes to two a.m.", "gece ikiye on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:44.",
      "🇹🇷 Saat 01:44."
    ],
    examples: [],
    related_word_ids: [2104]
  },
  {
    id: "vocab-saat-2105",
    category: "vocabulary",
    title: "a quarter to two a.m. — gece ikiye çeyrek var",
    keywords: ["a quarter to two a.m.", "gece ikiye çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:45.",
      "🇹🇷 Saat 01:45."
    ],
    examples: [],
    related_word_ids: [2105]
  },
  {
    id: "vocab-saat-2106",
    category: "vocabulary",
    title: "fourteen minutes to two a.m. — gece ikiye on dört var",
    keywords: ["fourteen minutes to two a.m.", "gece ikiye on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:46.",
      "🇹🇷 Saat 01:46."
    ],
    examples: [],
    related_word_ids: [2106]
  },
  {
    id: "vocab-saat-2107",
    category: "vocabulary",
    title: "thirteen minutes to two a.m. — gece ikiye on üç var",
    keywords: ["thirteen minutes to two a.m.", "gece ikiye on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:47.",
      "🇹🇷 Saat 01:47."
    ],
    examples: [],
    related_word_ids: [2107]
  },
  {
    id: "vocab-saat-2108",
    category: "vocabulary",
    title: "twelve minutes to two a.m. — gece ikiye on iki var",
    keywords: ["twelve minutes to two a.m.", "gece ikiye on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:48.",
      "🇹🇷 Saat 01:48."
    ],
    examples: [],
    related_word_ids: [2108]
  },
  {
    id: "vocab-saat-2109",
    category: "vocabulary",
    title: "eleven minutes to two a.m. — gece ikiye on bir var",
    keywords: ["eleven minutes to two a.m.", "gece ikiye on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:49.",
      "🇹🇷 Saat 01:49."
    ],
    examples: [],
    related_word_ids: [2109]
  },
  {
    id: "vocab-saat-2110",
    category: "vocabulary",
    title: "ten to two a.m. — gece ikiye on var",
    keywords: ["ten to two a.m.", "gece ikiye on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:50.",
      "🇹🇷 Saat 01:50."
    ],
    examples: [],
    related_word_ids: [2110]
  },
  {
    id: "vocab-saat-2111",
    category: "vocabulary",
    title: "nine minutes to two a.m. — gece ikiye dokuz var",
    keywords: ["nine minutes to two a.m.", "gece ikiye dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:51.",
      "🇹🇷 Saat 01:51."
    ],
    examples: [],
    related_word_ids: [2111]
  },
  {
    id: "vocab-saat-2112",
    category: "vocabulary",
    title: "eight minutes to two a.m. — gece ikiye sekiz var",
    keywords: ["eight minutes to two a.m.", "gece ikiye sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:52.",
      "🇹🇷 Saat 01:52."
    ],
    examples: [],
    related_word_ids: [2112]
  },
  {
    id: "vocab-saat-2113",
    category: "vocabulary",
    title: "seven minutes to two a.m. — gece ikiye yedi var",
    keywords: ["seven minutes to two a.m.", "gece ikiye yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:53.",
      "🇹🇷 Saat 01:53."
    ],
    examples: [],
    related_word_ids: [2113]
  },
  {
    id: "vocab-saat-2114",
    category: "vocabulary",
    title: "six minutes to two a.m. — gece ikiye altı var",
    keywords: ["six minutes to two a.m.", "gece ikiye altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:54.",
      "🇹🇷 Saat 01:54."
    ],
    examples: [],
    related_word_ids: [2114]
  },
  {
    id: "vocab-saat-2115",
    category: "vocabulary",
    title: "five to two a.m. — gece ikiye beş var",
    keywords: ["five to two a.m.", "gece ikiye beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:55.",
      "🇹🇷 Saat 01:55."
    ],
    examples: [],
    related_word_ids: [2115]
  },
  {
    id: "vocab-saat-2116",
    category: "vocabulary",
    title: "four minutes to two a.m. — gece ikiye dört var",
    keywords: ["four minutes to two a.m.", "gece ikiye dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:56.",
      "🇹🇷 Saat 01:56."
    ],
    examples: [],
    related_word_ids: [2116]
  },
  {
    id: "vocab-saat-2117",
    category: "vocabulary",
    title: "three minutes to two a.m. — gece ikiye üç var",
    keywords: ["three minutes to two a.m.", "gece ikiye üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:57.",
      "🇹🇷 Saat 01:57."
    ],
    examples: [],
    related_word_ids: [2117]
  },
  {
    id: "vocab-saat-2118",
    category: "vocabulary",
    title: "two minutes to two a.m. — gece ikiye iki var",
    keywords: ["two minutes to two a.m.", "gece ikiye iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:58.",
      "🇹🇷 Saat 01:58."
    ],
    examples: [],
    related_word_ids: [2118]
  },
  {
    id: "vocab-saat-2119",
    category: "vocabulary",
    title: "one minute to two a.m. — gece ikiye bir var",
    keywords: ["one minute to two a.m.", "gece ikiye bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 01:59.",
      "🇹🇷 Saat 01:59."
    ],
    examples: [],
    related_word_ids: [2119]
  },
  {
    id: "vocab-saat-2120",
    category: "vocabulary",
    title: "two o'clock a.m. — gece iki",
    keywords: ["two o'clock a.m.", "gece iki", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:00.",
      "🇹🇷 Saat 02:00."
    ],
    examples: [],
    related_word_ids: [2120]
  },
  {
    id: "vocab-saat-2121",
    category: "vocabulary",
    title: "one minute past two a.m. — gece ikiyi bir geçiyor",
    keywords: ["one minute past two a.m.", "gece ikiyi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:01.",
      "🇹🇷 Saat 02:01."
    ],
    examples: [],
    related_word_ids: [2121]
  },
  {
    id: "vocab-saat-2122",
    category: "vocabulary",
    title: "two minutes past two a.m. — gece ikiyi iki geçiyor",
    keywords: ["two minutes past two a.m.", "gece ikiyi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:02.",
      "🇹🇷 Saat 02:02."
    ],
    examples: [],
    related_word_ids: [2122]
  },
  {
    id: "vocab-saat-2123",
    category: "vocabulary",
    title: "three minutes past two a.m. — gece ikiyi üç geçiyor",
    keywords: ["three minutes past two a.m.", "gece ikiyi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:03.",
      "🇹🇷 Saat 02:03."
    ],
    examples: [],
    related_word_ids: [2123]
  },
  {
    id: "vocab-saat-2124",
    category: "vocabulary",
    title: "four minutes past two a.m. — gece ikiyi dört geçiyor",
    keywords: ["four minutes past two a.m.", "gece ikiyi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:04.",
      "🇹🇷 Saat 02:04."
    ],
    examples: [],
    related_word_ids: [2124]
  },
  {
    id: "vocab-saat-2125",
    category: "vocabulary",
    title: "five past two a.m. — gece ikiyi beş geçiyor",
    keywords: ["five past two a.m.", "gece ikiyi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:05.",
      "🇹🇷 Saat 02:05."
    ],
    examples: [],
    related_word_ids: [2125]
  },
  {
    id: "vocab-saat-2126",
    category: "vocabulary",
    title: "six minutes past two a.m. — gece ikiyi altı geçiyor",
    keywords: ["six minutes past two a.m.", "gece ikiyi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:06.",
      "🇹🇷 Saat 02:06."
    ],
    examples: [],
    related_word_ids: [2126]
  },
  {
    id: "vocab-saat-2127",
    category: "vocabulary",
    title: "seven minutes past two a.m. — gece ikiyi yedi geçiyor",
    keywords: ["seven minutes past two a.m.", "gece ikiyi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:07.",
      "🇹🇷 Saat 02:07."
    ],
    examples: [],
    related_word_ids: [2127]
  },
  {
    id: "vocab-saat-2128",
    category: "vocabulary",
    title: "eight minutes past two a.m. — gece ikiyi sekiz geçiyor",
    keywords: ["eight minutes past two a.m.", "gece ikiyi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:08.",
      "🇹🇷 Saat 02:08."
    ],
    examples: [],
    related_word_ids: [2128]
  },
  {
    id: "vocab-saat-2129",
    category: "vocabulary",
    title: "nine minutes past two a.m. — gece ikiyi dokuz geçiyor",
    keywords: ["nine minutes past two a.m.", "gece ikiyi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:09.",
      "🇹🇷 Saat 02:09."
    ],
    examples: [],
    related_word_ids: [2129]
  },
  {
    id: "vocab-saat-2130",
    category: "vocabulary",
    title: "ten past two a.m. — gece ikiyi on geçiyor",
    keywords: ["ten past two a.m.", "gece ikiyi on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:10.",
      "🇹🇷 Saat 02:10."
    ],
    examples: [],
    related_word_ids: [2130]
  },
  {
    id: "vocab-saat-2131",
    category: "vocabulary",
    title: "eleven minutes past two a.m. — gece ikiyi on bir geçiyor",
    keywords: ["eleven minutes past two a.m.", "gece ikiyi on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:11.",
      "🇹🇷 Saat 02:11."
    ],
    examples: [],
    related_word_ids: [2131]
  },
  {
    id: "vocab-saat-2132",
    category: "vocabulary",
    title: "twelve minutes past two a.m. — gece ikiyi on iki geçiyor",
    keywords: ["twelve minutes past two a.m.", "gece ikiyi on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:12.",
      "🇹🇷 Saat 02:12."
    ],
    examples: [],
    related_word_ids: [2132]
  },
  {
    id: "vocab-saat-2133",
    category: "vocabulary",
    title: "thirteen minutes past two a.m. — gece ikiyi on üç geçiyor",
    keywords: ["thirteen minutes past two a.m.", "gece ikiyi on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:13.",
      "🇹🇷 Saat 02:13."
    ],
    examples: [],
    related_word_ids: [2133]
  },
  {
    id: "vocab-saat-2134",
    category: "vocabulary",
    title: "fourteen minutes past two a.m. — gece ikiyi on dört geçiyor",
    keywords: ["fourteen minutes past two a.m.", "gece ikiyi on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:14.",
      "🇹🇷 Saat 02:14."
    ],
    examples: [],
    related_word_ids: [2134]
  },
  {
    id: "vocab-saat-2135",
    category: "vocabulary",
    title: "a quarter past two a.m. — gece ikiyi çeyrek geçiyor",
    keywords: ["a quarter past two a.m.", "gece ikiyi çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:15.",
      "🇹🇷 Saat 02:15."
    ],
    examples: [],
    related_word_ids: [2135]
  },
  {
    id: "vocab-saat-2136",
    category: "vocabulary",
    title: "sixteen minutes past two a.m. — gece ikiyi on altı geçiyor",
    keywords: ["sixteen minutes past two a.m.", "gece ikiyi on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:16.",
      "🇹🇷 Saat 02:16."
    ],
    examples: [],
    related_word_ids: [2136]
  },
  {
    id: "vocab-saat-2137",
    category: "vocabulary",
    title: "seventeen minutes past two a.m. — gece ikiyi on yedi geçiyor",
    keywords: ["seventeen minutes past two a.m.", "gece ikiyi on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:17.",
      "🇹🇷 Saat 02:17."
    ],
    examples: [],
    related_word_ids: [2137]
  },
  {
    id: "vocab-saat-2138",
    category: "vocabulary",
    title: "eighteen minutes past two a.m. — gece ikiyi on sekiz geçiyor",
    keywords: ["eighteen minutes past two a.m.", "gece ikiyi on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:18.",
      "🇹🇷 Saat 02:18."
    ],
    examples: [],
    related_word_ids: [2138]
  },
  {
    id: "vocab-saat-2139",
    category: "vocabulary",
    title: "nineteen minutes past two a.m. — gece ikiyi on dokuz geçiyor",
    keywords: ["nineteen minutes past two a.m.", "gece ikiyi on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:19.",
      "🇹🇷 Saat 02:19."
    ],
    examples: [],
    related_word_ids: [2139]
  },
  {
    id: "vocab-saat-2140",
    category: "vocabulary",
    title: "twenty past two a.m. — gece ikiyi yirmi geçiyor",
    keywords: ["twenty past two a.m.", "gece ikiyi yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:20.",
      "🇹🇷 Saat 02:20."
    ],
    examples: [],
    related_word_ids: [2140]
  },
  {
    id: "vocab-saat-2141",
    category: "vocabulary",
    title: "twenty-one minutes past two a.m. — gece ikiyi yirmi bir geçiyor",
    keywords: ["twenty-one minutes past two a.m.", "gece ikiyi yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:21.",
      "🇹🇷 Saat 02:21."
    ],
    examples: [],
    related_word_ids: [2141]
  },
  {
    id: "vocab-saat-2142",
    category: "vocabulary",
    title: "twenty-two minutes past two a.m. — gece ikiyi yirmi iki geçiyor",
    keywords: ["twenty-two minutes past two a.m.", "gece ikiyi yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:22.",
      "🇹🇷 Saat 02:22."
    ],
    examples: [],
    related_word_ids: [2142]
  },
  {
    id: "vocab-saat-2143",
    category: "vocabulary",
    title: "twenty-three minutes past two a.m. — gece ikiyi yirmi üç geçiyor",
    keywords: ["twenty-three minutes past two a.m.", "gece ikiyi yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:23.",
      "🇹🇷 Saat 02:23."
    ],
    examples: [],
    related_word_ids: [2143]
  },
  {
    id: "vocab-saat-2144",
    category: "vocabulary",
    title: "twenty-four minutes past two a.m. — gece ikiyi yirmi dört geçiyor",
    keywords: ["twenty-four minutes past two a.m.", "gece ikiyi yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:24.",
      "🇹🇷 Saat 02:24."
    ],
    examples: [],
    related_word_ids: [2144]
  },
  {
    id: "vocab-saat-2145",
    category: "vocabulary",
    title: "twenty-five past two a.m. — gece ikiyi yirmi beş geçiyor",
    keywords: ["twenty-five past two a.m.", "gece ikiyi yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:25.",
      "🇹🇷 Saat 02:25."
    ],
    examples: [],
    related_word_ids: [2145]
  },
  {
    id: "vocab-saat-2146",
    category: "vocabulary",
    title: "twenty-six minutes past two a.m. — gece ikiyi yirmi altı geçiyor",
    keywords: ["twenty-six minutes past two a.m.", "gece ikiyi yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:26.",
      "🇹🇷 Saat 02:26."
    ],
    examples: [],
    related_word_ids: [2146]
  },
  {
    id: "vocab-saat-2147",
    category: "vocabulary",
    title: "twenty-seven minutes past two a.m. — gece ikiyi yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past two a.m.", "gece ikiyi yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:27.",
      "🇹🇷 Saat 02:27."
    ],
    examples: [],
    related_word_ids: [2147]
  },
  {
    id: "vocab-saat-2148",
    category: "vocabulary",
    title: "twenty-eight minutes past two a.m. — gece ikiyi yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past two a.m.", "gece ikiyi yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:28.",
      "🇹🇷 Saat 02:28."
    ],
    examples: [],
    related_word_ids: [2148]
  },
  {
    id: "vocab-saat-2149",
    category: "vocabulary",
    title: "twenty-nine minutes past two a.m. — gece ikiyi yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past two a.m.", "gece ikiyi yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:29.",
      "🇹🇷 Saat 02:29."
    ],
    examples: [],
    related_word_ids: [2149]
  },
  {
    id: "vocab-saat-2150",
    category: "vocabulary",
    title: "half past two a.m. — gece iki buçuk",
    keywords: ["half past two a.m.", "gece iki buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:30.",
      "🇹🇷 Saat 02:30."
    ],
    examples: [],
    related_word_ids: [2150]
  },
  {
    id: "vocab-saat-2151",
    category: "vocabulary",
    title: "twenty-nine minutes to three a.m. — gece üçe yirmi dokuz var",
    keywords: ["twenty-nine minutes to three a.m.", "gece üçe yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:31.",
      "🇹🇷 Saat 02:31."
    ],
    examples: [],
    related_word_ids: [2151]
  },
  {
    id: "vocab-saat-2152",
    category: "vocabulary",
    title: "twenty-eight minutes to three a.m. — gece üçe yirmi sekiz var",
    keywords: ["twenty-eight minutes to three a.m.", "gece üçe yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:32.",
      "🇹🇷 Saat 02:32."
    ],
    examples: [],
    related_word_ids: [2152]
  },
  {
    id: "vocab-saat-2153",
    category: "vocabulary",
    title: "twenty-seven minutes to three a.m. — gece üçe yirmi yedi var",
    keywords: ["twenty-seven minutes to three a.m.", "gece üçe yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:33.",
      "🇹🇷 Saat 02:33."
    ],
    examples: [],
    related_word_ids: [2153]
  },
  {
    id: "vocab-saat-2154",
    category: "vocabulary",
    title: "twenty-six minutes to three a.m. — gece üçe yirmi altı var",
    keywords: ["twenty-six minutes to three a.m.", "gece üçe yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:34.",
      "🇹🇷 Saat 02:34."
    ],
    examples: [],
    related_word_ids: [2154]
  },
  {
    id: "vocab-saat-2155",
    category: "vocabulary",
    title: "twenty-five to three a.m. — gece üçe yirmi beş var",
    keywords: ["twenty-five to three a.m.", "gece üçe yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:35.",
      "🇹🇷 Saat 02:35."
    ],
    examples: [],
    related_word_ids: [2155]
  },
  {
    id: "vocab-saat-2156",
    category: "vocabulary",
    title: "twenty-four minutes to three a.m. — gece üçe yirmi dört var",
    keywords: ["twenty-four minutes to three a.m.", "gece üçe yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:36.",
      "🇹🇷 Saat 02:36."
    ],
    examples: [],
    related_word_ids: [2156]
  },
  {
    id: "vocab-saat-2157",
    category: "vocabulary",
    title: "twenty-three minutes to three a.m. — gece üçe yirmi üç var",
    keywords: ["twenty-three minutes to three a.m.", "gece üçe yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:37.",
      "🇹🇷 Saat 02:37."
    ],
    examples: [],
    related_word_ids: [2157]
  },
  {
    id: "vocab-saat-2158",
    category: "vocabulary",
    title: "twenty-two minutes to three a.m. — gece üçe yirmi iki var",
    keywords: ["twenty-two minutes to three a.m.", "gece üçe yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:38.",
      "🇹🇷 Saat 02:38."
    ],
    examples: [],
    related_word_ids: [2158]
  },
  {
    id: "vocab-saat-2159",
    category: "vocabulary",
    title: "twenty-one minutes to three a.m. — gece üçe yirmi bir var",
    keywords: ["twenty-one minutes to three a.m.", "gece üçe yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:39.",
      "🇹🇷 Saat 02:39."
    ],
    examples: [],
    related_word_ids: [2159]
  },
  {
    id: "vocab-saat-2160",
    category: "vocabulary",
    title: "twenty to three a.m. — gece üçe yirmi var",
    keywords: ["twenty to three a.m.", "gece üçe yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:40.",
      "🇹🇷 Saat 02:40."
    ],
    examples: [],
    related_word_ids: [2160]
  },
  {
    id: "vocab-saat-2161",
    category: "vocabulary",
    title: "nineteen minutes to three a.m. — gece üçe on dokuz var",
    keywords: ["nineteen minutes to three a.m.", "gece üçe on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:41.",
      "🇹🇷 Saat 02:41."
    ],
    examples: [],
    related_word_ids: [2161]
  },
  {
    id: "vocab-saat-2162",
    category: "vocabulary",
    title: "eighteen minutes to three a.m. — gece üçe on sekiz var",
    keywords: ["eighteen minutes to three a.m.", "gece üçe on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:42.",
      "🇹🇷 Saat 02:42."
    ],
    examples: [],
    related_word_ids: [2162]
  },
  {
    id: "vocab-saat-2163",
    category: "vocabulary",
    title: "seventeen minutes to three a.m. — gece üçe on yedi var",
    keywords: ["seventeen minutes to three a.m.", "gece üçe on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:43.",
      "🇹🇷 Saat 02:43."
    ],
    examples: [],
    related_word_ids: [2163]
  },
  {
    id: "vocab-saat-2164",
    category: "vocabulary",
    title: "sixteen minutes to three a.m. — gece üçe on altı var",
    keywords: ["sixteen minutes to three a.m.", "gece üçe on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:44.",
      "🇹🇷 Saat 02:44."
    ],
    examples: [],
    related_word_ids: [2164]
  },
  {
    id: "vocab-saat-2165",
    category: "vocabulary",
    title: "a quarter to three a.m. — gece üçe çeyrek var",
    keywords: ["a quarter to three a.m.", "gece üçe çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:45.",
      "🇹🇷 Saat 02:45."
    ],
    examples: [],
    related_word_ids: [2165]
  },
  {
    id: "vocab-saat-2166",
    category: "vocabulary",
    title: "fourteen minutes to three a.m. — gece üçe on dört var",
    keywords: ["fourteen minutes to three a.m.", "gece üçe on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:46.",
      "🇹🇷 Saat 02:46."
    ],
    examples: [],
    related_word_ids: [2166]
  },
  {
    id: "vocab-saat-2167",
    category: "vocabulary",
    title: "thirteen minutes to three a.m. — gece üçe on üç var",
    keywords: ["thirteen minutes to three a.m.", "gece üçe on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:47.",
      "🇹🇷 Saat 02:47."
    ],
    examples: [],
    related_word_ids: [2167]
  },
  {
    id: "vocab-saat-2168",
    category: "vocabulary",
    title: "twelve minutes to three a.m. — gece üçe on iki var",
    keywords: ["twelve minutes to three a.m.", "gece üçe on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:48.",
      "🇹🇷 Saat 02:48."
    ],
    examples: [],
    related_word_ids: [2168]
  },
  {
    id: "vocab-saat-2169",
    category: "vocabulary",
    title: "eleven minutes to three a.m. — gece üçe on bir var",
    keywords: ["eleven minutes to three a.m.", "gece üçe on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:49.",
      "🇹🇷 Saat 02:49."
    ],
    examples: [],
    related_word_ids: [2169]
  },
  {
    id: "vocab-saat-2170",
    category: "vocabulary",
    title: "ten to three a.m. — gece üçe on var",
    keywords: ["ten to three a.m.", "gece üçe on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:50.",
      "🇹🇷 Saat 02:50."
    ],
    examples: [],
    related_word_ids: [2170]
  },
  {
    id: "vocab-saat-2171",
    category: "vocabulary",
    title: "nine minutes to three a.m. — gece üçe dokuz var",
    keywords: ["nine minutes to three a.m.", "gece üçe dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:51.",
      "🇹🇷 Saat 02:51."
    ],
    examples: [],
    related_word_ids: [2171]
  },
  {
    id: "vocab-saat-2172",
    category: "vocabulary",
    title: "eight minutes to three a.m. — gece üçe sekiz var",
    keywords: ["eight minutes to three a.m.", "gece üçe sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:52.",
      "🇹🇷 Saat 02:52."
    ],
    examples: [],
    related_word_ids: [2172]
  },
  {
    id: "vocab-saat-2173",
    category: "vocabulary",
    title: "seven minutes to three a.m. — gece üçe yedi var",
    keywords: ["seven minutes to three a.m.", "gece üçe yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:53.",
      "🇹🇷 Saat 02:53."
    ],
    examples: [],
    related_word_ids: [2173]
  },
  {
    id: "vocab-saat-2174",
    category: "vocabulary",
    title: "six minutes to three a.m. — gece üçe altı var",
    keywords: ["six minutes to three a.m.", "gece üçe altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:54.",
      "🇹🇷 Saat 02:54."
    ],
    examples: [],
    related_word_ids: [2174]
  },
  {
    id: "vocab-saat-2175",
    category: "vocabulary",
    title: "five to three a.m. — gece üçe beş var",
    keywords: ["five to three a.m.", "gece üçe beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:55.",
      "🇹🇷 Saat 02:55."
    ],
    examples: [],
    related_word_ids: [2175]
  },
  {
    id: "vocab-saat-2176",
    category: "vocabulary",
    title: "four minutes to three a.m. — gece üçe dört var",
    keywords: ["four minutes to three a.m.", "gece üçe dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:56.",
      "🇹🇷 Saat 02:56."
    ],
    examples: [],
    related_word_ids: [2176]
  },
  {
    id: "vocab-saat-2177",
    category: "vocabulary",
    title: "three minutes to three a.m. — gece üçe üç var",
    keywords: ["three minutes to three a.m.", "gece üçe üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:57.",
      "🇹🇷 Saat 02:57."
    ],
    examples: [],
    related_word_ids: [2177]
  },
  {
    id: "vocab-saat-2178",
    category: "vocabulary",
    title: "two minutes to three a.m. — gece üçe iki var",
    keywords: ["two minutes to three a.m.", "gece üçe iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:58.",
      "🇹🇷 Saat 02:58."
    ],
    examples: [],
    related_word_ids: [2178]
  },
  {
    id: "vocab-saat-2179",
    category: "vocabulary",
    title: "one minute to three a.m. — gece üçe bir var",
    keywords: ["one minute to three a.m.", "gece üçe bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 02:59.",
      "🇹🇷 Saat 02:59."
    ],
    examples: [],
    related_word_ids: [2179]
  },
  {
    id: "vocab-saat-2180",
    category: "vocabulary",
    title: "three o'clock a.m. — gece üç",
    keywords: ["three o'clock a.m.", "gece üç", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:00.",
      "🇹🇷 Saat 03:00."
    ],
    examples: [],
    related_word_ids: [2180]
  },
  {
    id: "vocab-saat-2181",
    category: "vocabulary",
    title: "one minute past three a.m. — gece üçü bir geçiyor",
    keywords: ["one minute past three a.m.", "gece üçü bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:01.",
      "🇹🇷 Saat 03:01."
    ],
    examples: [],
    related_word_ids: [2181]
  },
  {
    id: "vocab-saat-2182",
    category: "vocabulary",
    title: "two minutes past three a.m. — gece üçü iki geçiyor",
    keywords: ["two minutes past three a.m.", "gece üçü iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:02.",
      "🇹🇷 Saat 03:02."
    ],
    examples: [],
    related_word_ids: [2182]
  },
  {
    id: "vocab-saat-2183",
    category: "vocabulary",
    title: "three minutes past three a.m. — gece üçü üç geçiyor",
    keywords: ["three minutes past three a.m.", "gece üçü üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:03.",
      "🇹🇷 Saat 03:03."
    ],
    examples: [],
    related_word_ids: [2183]
  },
  {
    id: "vocab-saat-2184",
    category: "vocabulary",
    title: "four minutes past three a.m. — gece üçü dört geçiyor",
    keywords: ["four minutes past three a.m.", "gece üçü dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:04.",
      "🇹🇷 Saat 03:04."
    ],
    examples: [],
    related_word_ids: [2184]
  },
  {
    id: "vocab-saat-2185",
    category: "vocabulary",
    title: "five past three a.m. — gece üçü beş geçiyor",
    keywords: ["five past three a.m.", "gece üçü beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:05.",
      "🇹🇷 Saat 03:05."
    ],
    examples: [],
    related_word_ids: [2185]
  },
  {
    id: "vocab-saat-2186",
    category: "vocabulary",
    title: "six minutes past three a.m. — gece üçü altı geçiyor",
    keywords: ["six minutes past three a.m.", "gece üçü altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:06.",
      "🇹🇷 Saat 03:06."
    ],
    examples: [],
    related_word_ids: [2186]
  },
  {
    id: "vocab-saat-2187",
    category: "vocabulary",
    title: "seven minutes past three a.m. — gece üçü yedi geçiyor",
    keywords: ["seven minutes past three a.m.", "gece üçü yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:07.",
      "🇹🇷 Saat 03:07."
    ],
    examples: [],
    related_word_ids: [2187]
  },
  {
    id: "vocab-saat-2188",
    category: "vocabulary",
    title: "eight minutes past three a.m. — gece üçü sekiz geçiyor",
    keywords: ["eight minutes past three a.m.", "gece üçü sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:08.",
      "🇹🇷 Saat 03:08."
    ],
    examples: [],
    related_word_ids: [2188]
  },
  {
    id: "vocab-saat-2189",
    category: "vocabulary",
    title: "nine minutes past three a.m. — gece üçü dokuz geçiyor",
    keywords: ["nine minutes past three a.m.", "gece üçü dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:09.",
      "🇹🇷 Saat 03:09."
    ],
    examples: [],
    related_word_ids: [2189]
  },
  {
    id: "vocab-saat-2190",
    category: "vocabulary",
    title: "ten past three a.m. — gece üçü on geçiyor",
    keywords: ["ten past three a.m.", "gece üçü on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:10.",
      "🇹🇷 Saat 03:10."
    ],
    examples: [],
    related_word_ids: [2190]
  },
  {
    id: "vocab-saat-2191",
    category: "vocabulary",
    title: "eleven minutes past three a.m. — gece üçü on bir geçiyor",
    keywords: ["eleven minutes past three a.m.", "gece üçü on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:11.",
      "🇹🇷 Saat 03:11."
    ],
    examples: [],
    related_word_ids: [2191]
  },
  {
    id: "vocab-saat-2192",
    category: "vocabulary",
    title: "twelve minutes past three a.m. — gece üçü on iki geçiyor",
    keywords: ["twelve minutes past three a.m.", "gece üçü on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:12.",
      "🇹🇷 Saat 03:12."
    ],
    examples: [],
    related_word_ids: [2192]
  },
  {
    id: "vocab-saat-2193",
    category: "vocabulary",
    title: "thirteen minutes past three a.m. — gece üçü on üç geçiyor",
    keywords: ["thirteen minutes past three a.m.", "gece üçü on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:13.",
      "🇹🇷 Saat 03:13."
    ],
    examples: [],
    related_word_ids: [2193]
  },
  {
    id: "vocab-saat-2194",
    category: "vocabulary",
    title: "fourteen minutes past three a.m. — gece üçü on dört geçiyor",
    keywords: ["fourteen minutes past three a.m.", "gece üçü on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:14.",
      "🇹🇷 Saat 03:14."
    ],
    examples: [],
    related_word_ids: [2194]
  },
  {
    id: "vocab-saat-2195",
    category: "vocabulary",
    title: "a quarter past three a.m. — gece üçü çeyrek geçiyor",
    keywords: ["a quarter past three a.m.", "gece üçü çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:15.",
      "🇹🇷 Saat 03:15."
    ],
    examples: [],
    related_word_ids: [2195]
  },
  {
    id: "vocab-saat-2196",
    category: "vocabulary",
    title: "sixteen minutes past three a.m. — gece üçü on altı geçiyor",
    keywords: ["sixteen minutes past three a.m.", "gece üçü on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:16.",
      "🇹🇷 Saat 03:16."
    ],
    examples: [],
    related_word_ids: [2196]
  },
  {
    id: "vocab-saat-2197",
    category: "vocabulary",
    title: "seventeen minutes past three a.m. — gece üçü on yedi geçiyor",
    keywords: ["seventeen minutes past three a.m.", "gece üçü on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:17.",
      "🇹🇷 Saat 03:17."
    ],
    examples: [],
    related_word_ids: [2197]
  },
  {
    id: "vocab-saat-2198",
    category: "vocabulary",
    title: "eighteen minutes past three a.m. — gece üçü on sekiz geçiyor",
    keywords: ["eighteen minutes past three a.m.", "gece üçü on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:18.",
      "🇹🇷 Saat 03:18."
    ],
    examples: [],
    related_word_ids: [2198]
  },
  {
    id: "vocab-saat-2199",
    category: "vocabulary",
    title: "nineteen minutes past three a.m. — gece üçü on dokuz geçiyor",
    keywords: ["nineteen minutes past three a.m.", "gece üçü on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:19.",
      "🇹🇷 Saat 03:19."
    ],
    examples: [],
    related_word_ids: [2199]
  },
  {
    id: "vocab-saat-2200",
    category: "vocabulary",
    title: "twenty past three a.m. — gece üçü yirmi geçiyor",
    keywords: ["twenty past three a.m.", "gece üçü yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:20.",
      "🇹🇷 Saat 03:20."
    ],
    examples: [],
    related_word_ids: [2200]
  },
  {
    id: "vocab-saat-2201",
    category: "vocabulary",
    title: "twenty-one minutes past three a.m. — gece üçü yirmi bir geçiyor",
    keywords: ["twenty-one minutes past three a.m.", "gece üçü yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:21.",
      "🇹🇷 Saat 03:21."
    ],
    examples: [],
    related_word_ids: [2201]
  },
  {
    id: "vocab-saat-2202",
    category: "vocabulary",
    title: "twenty-two minutes past three a.m. — gece üçü yirmi iki geçiyor",
    keywords: ["twenty-two minutes past three a.m.", "gece üçü yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:22.",
      "🇹🇷 Saat 03:22."
    ],
    examples: [],
    related_word_ids: [2202]
  },
  {
    id: "vocab-saat-2203",
    category: "vocabulary",
    title: "twenty-three minutes past three a.m. — gece üçü yirmi üç geçiyor",
    keywords: ["twenty-three minutes past three a.m.", "gece üçü yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:23.",
      "🇹🇷 Saat 03:23."
    ],
    examples: [],
    related_word_ids: [2203]
  },
  {
    id: "vocab-saat-2204",
    category: "vocabulary",
    title: "twenty-four minutes past three a.m. — gece üçü yirmi dört geçiyor",
    keywords: ["twenty-four minutes past three a.m.", "gece üçü yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:24.",
      "🇹🇷 Saat 03:24."
    ],
    examples: [],
    related_word_ids: [2204]
  },
  {
    id: "vocab-saat-2205",
    category: "vocabulary",
    title: "twenty-five past three a.m. — gece üçü yirmi beş geçiyor",
    keywords: ["twenty-five past three a.m.", "gece üçü yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:25.",
      "🇹🇷 Saat 03:25."
    ],
    examples: [],
    related_word_ids: [2205]
  },
  {
    id: "vocab-saat-2206",
    category: "vocabulary",
    title: "twenty-six minutes past three a.m. — gece üçü yirmi altı geçiyor",
    keywords: ["twenty-six minutes past three a.m.", "gece üçü yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:26.",
      "🇹🇷 Saat 03:26."
    ],
    examples: [],
    related_word_ids: [2206]
  },
  {
    id: "vocab-saat-2207",
    category: "vocabulary",
    title: "twenty-seven minutes past three a.m. — gece üçü yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past three a.m.", "gece üçü yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:27.",
      "🇹🇷 Saat 03:27."
    ],
    examples: [],
    related_word_ids: [2207]
  },
  {
    id: "vocab-saat-2208",
    category: "vocabulary",
    title: "twenty-eight minutes past three a.m. — gece üçü yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past three a.m.", "gece üçü yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:28.",
      "🇹🇷 Saat 03:28."
    ],
    examples: [],
    related_word_ids: [2208]
  },
  {
    id: "vocab-saat-2209",
    category: "vocabulary",
    title: "twenty-nine minutes past three a.m. — gece üçü yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past three a.m.", "gece üçü yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:29.",
      "🇹🇷 Saat 03:29."
    ],
    examples: [],
    related_word_ids: [2209]
  },
  {
    id: "vocab-saat-2210",
    category: "vocabulary",
    title: "half past three a.m. — gece üç buçuk",
    keywords: ["half past three a.m.", "gece üç buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:30.",
      "🇹🇷 Saat 03:30."
    ],
    examples: [],
    related_word_ids: [2210]
  },
  {
    id: "vocab-saat-2211",
    category: "vocabulary",
    title: "twenty-nine minutes to four a.m. — gece dörde yirmi dokuz var",
    keywords: ["twenty-nine minutes to four a.m.", "gece dörde yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:31.",
      "🇹🇷 Saat 03:31."
    ],
    examples: [],
    related_word_ids: [2211]
  },
  {
    id: "vocab-saat-2212",
    category: "vocabulary",
    title: "twenty-eight minutes to four a.m. — gece dörde yirmi sekiz var",
    keywords: ["twenty-eight minutes to four a.m.", "gece dörde yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:32.",
      "🇹🇷 Saat 03:32."
    ],
    examples: [],
    related_word_ids: [2212]
  },
  {
    id: "vocab-saat-2213",
    category: "vocabulary",
    title: "twenty-seven minutes to four a.m. — gece dörde yirmi yedi var",
    keywords: ["twenty-seven minutes to four a.m.", "gece dörde yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:33.",
      "🇹🇷 Saat 03:33."
    ],
    examples: [],
    related_word_ids: [2213]
  },
  {
    id: "vocab-saat-2214",
    category: "vocabulary",
    title: "twenty-six minutes to four a.m. — gece dörde yirmi altı var",
    keywords: ["twenty-six minutes to four a.m.", "gece dörde yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:34.",
      "🇹🇷 Saat 03:34."
    ],
    examples: [],
    related_word_ids: [2214]
  },
  {
    id: "vocab-saat-2215",
    category: "vocabulary",
    title: "twenty-five to four a.m. — gece dörde yirmi beş var",
    keywords: ["twenty-five to four a.m.", "gece dörde yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:35.",
      "🇹🇷 Saat 03:35."
    ],
    examples: [],
    related_word_ids: [2215]
  },
  {
    id: "vocab-saat-2216",
    category: "vocabulary",
    title: "twenty-four minutes to four a.m. — gece dörde yirmi dört var",
    keywords: ["twenty-four minutes to four a.m.", "gece dörde yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:36.",
      "🇹🇷 Saat 03:36."
    ],
    examples: [],
    related_word_ids: [2216]
  },
  {
    id: "vocab-saat-2217",
    category: "vocabulary",
    title: "twenty-three minutes to four a.m. — gece dörde yirmi üç var",
    keywords: ["twenty-three minutes to four a.m.", "gece dörde yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:37.",
      "🇹🇷 Saat 03:37."
    ],
    examples: [],
    related_word_ids: [2217]
  },
  {
    id: "vocab-saat-2218",
    category: "vocabulary",
    title: "twenty-two minutes to four a.m. — gece dörde yirmi iki var",
    keywords: ["twenty-two minutes to four a.m.", "gece dörde yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:38.",
      "🇹🇷 Saat 03:38."
    ],
    examples: [],
    related_word_ids: [2218]
  },
  {
    id: "vocab-saat-2219",
    category: "vocabulary",
    title: "twenty-one minutes to four a.m. — gece dörde yirmi bir var",
    keywords: ["twenty-one minutes to four a.m.", "gece dörde yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:39.",
      "🇹🇷 Saat 03:39."
    ],
    examples: [],
    related_word_ids: [2219]
  },
  {
    id: "vocab-saat-2220",
    category: "vocabulary",
    title: "twenty to four a.m. — gece dörde yirmi var",
    keywords: ["twenty to four a.m.", "gece dörde yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:40.",
      "🇹🇷 Saat 03:40."
    ],
    examples: [],
    related_word_ids: [2220]
  },
  {
    id: "vocab-saat-2221",
    category: "vocabulary",
    title: "nineteen minutes to four a.m. — gece dörde on dokuz var",
    keywords: ["nineteen minutes to four a.m.", "gece dörde on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:41.",
      "🇹🇷 Saat 03:41."
    ],
    examples: [],
    related_word_ids: [2221]
  },
  {
    id: "vocab-saat-2222",
    category: "vocabulary",
    title: "eighteen minutes to four a.m. — gece dörde on sekiz var",
    keywords: ["eighteen minutes to four a.m.", "gece dörde on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:42.",
      "🇹🇷 Saat 03:42."
    ],
    examples: [],
    related_word_ids: [2222]
  },
  {
    id: "vocab-saat-2223",
    category: "vocabulary",
    title: "seventeen minutes to four a.m. — gece dörde on yedi var",
    keywords: ["seventeen minutes to four a.m.", "gece dörde on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:43.",
      "🇹🇷 Saat 03:43."
    ],
    examples: [],
    related_word_ids: [2223]
  },
  {
    id: "vocab-saat-2224",
    category: "vocabulary",
    title: "sixteen minutes to four a.m. — gece dörde on altı var",
    keywords: ["sixteen minutes to four a.m.", "gece dörde on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:44.",
      "🇹🇷 Saat 03:44."
    ],
    examples: [],
    related_word_ids: [2224]
  },
  {
    id: "vocab-saat-2225",
    category: "vocabulary",
    title: "a quarter to four a.m. — gece dörde çeyrek var",
    keywords: ["a quarter to four a.m.", "gece dörde çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:45.",
      "🇹🇷 Saat 03:45."
    ],
    examples: [],
    related_word_ids: [2225]
  },
  {
    id: "vocab-saat-2226",
    category: "vocabulary",
    title: "fourteen minutes to four a.m. — gece dörde on dört var",
    keywords: ["fourteen minutes to four a.m.", "gece dörde on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:46.",
      "🇹🇷 Saat 03:46."
    ],
    examples: [],
    related_word_ids: [2226]
  },
  {
    id: "vocab-saat-2227",
    category: "vocabulary",
    title: "thirteen minutes to four a.m. — gece dörde on üç var",
    keywords: ["thirteen minutes to four a.m.", "gece dörde on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:47.",
      "🇹🇷 Saat 03:47."
    ],
    examples: [],
    related_word_ids: [2227]
  },
  {
    id: "vocab-saat-2228",
    category: "vocabulary",
    title: "twelve minutes to four a.m. — gece dörde on iki var",
    keywords: ["twelve minutes to four a.m.", "gece dörde on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:48.",
      "🇹🇷 Saat 03:48."
    ],
    examples: [],
    related_word_ids: [2228]
  },
  {
    id: "vocab-saat-2229",
    category: "vocabulary",
    title: "eleven minutes to four a.m. — gece dörde on bir var",
    keywords: ["eleven minutes to four a.m.", "gece dörde on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:49.",
      "🇹🇷 Saat 03:49."
    ],
    examples: [],
    related_word_ids: [2229]
  },
  {
    id: "vocab-saat-2230",
    category: "vocabulary",
    title: "ten to four a.m. — gece dörde on var",
    keywords: ["ten to four a.m.", "gece dörde on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:50.",
      "🇹🇷 Saat 03:50."
    ],
    examples: [],
    related_word_ids: [2230]
  },
  {
    id: "vocab-saat-2231",
    category: "vocabulary",
    title: "nine minutes to four a.m. — gece dörde dokuz var",
    keywords: ["nine minutes to four a.m.", "gece dörde dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:51.",
      "🇹🇷 Saat 03:51."
    ],
    examples: [],
    related_word_ids: [2231]
  },
  {
    id: "vocab-saat-2232",
    category: "vocabulary",
    title: "eight minutes to four a.m. — gece dörde sekiz var",
    keywords: ["eight minutes to four a.m.", "gece dörde sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:52.",
      "🇹🇷 Saat 03:52."
    ],
    examples: [],
    related_word_ids: [2232]
  },
  {
    id: "vocab-saat-2233",
    category: "vocabulary",
    title: "seven minutes to four a.m. — gece dörde yedi var",
    keywords: ["seven minutes to four a.m.", "gece dörde yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:53.",
      "🇹🇷 Saat 03:53."
    ],
    examples: [],
    related_word_ids: [2233]
  },
  {
    id: "vocab-saat-2234",
    category: "vocabulary",
    title: "six minutes to four a.m. — gece dörde altı var",
    keywords: ["six minutes to four a.m.", "gece dörde altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:54.",
      "🇹🇷 Saat 03:54."
    ],
    examples: [],
    related_word_ids: [2234]
  },
  {
    id: "vocab-saat-2235",
    category: "vocabulary",
    title: "five to four a.m. — gece dörde beş var",
    keywords: ["five to four a.m.", "gece dörde beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:55.",
      "🇹🇷 Saat 03:55."
    ],
    examples: [],
    related_word_ids: [2235]
  },
  {
    id: "vocab-saat-2236",
    category: "vocabulary",
    title: "four minutes to four a.m. — gece dörde dört var",
    keywords: ["four minutes to four a.m.", "gece dörde dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:56.",
      "🇹🇷 Saat 03:56."
    ],
    examples: [],
    related_word_ids: [2236]
  },
  {
    id: "vocab-saat-2237",
    category: "vocabulary",
    title: "three minutes to four a.m. — gece dörde üç var",
    keywords: ["three minutes to four a.m.", "gece dörde üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:57.",
      "🇹🇷 Saat 03:57."
    ],
    examples: [],
    related_word_ids: [2237]
  },
  {
    id: "vocab-saat-2238",
    category: "vocabulary",
    title: "two minutes to four a.m. — gece dörde iki var",
    keywords: ["two minutes to four a.m.", "gece dörde iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:58.",
      "🇹🇷 Saat 03:58."
    ],
    examples: [],
    related_word_ids: [2238]
  },
  {
    id: "vocab-saat-2239",
    category: "vocabulary",
    title: "one minute to four a.m. — gece dörde bir var",
    keywords: ["one minute to four a.m.", "gece dörde bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 03:59.",
      "🇹🇷 Saat 03:59."
    ],
    examples: [],
    related_word_ids: [2239]
  },
  {
    id: "vocab-saat-2240",
    category: "vocabulary",
    title: "four o'clock a.m. — gece dört",
    keywords: ["four o'clock a.m.", "gece dört", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:00.",
      "🇹🇷 Saat 04:00."
    ],
    examples: [],
    related_word_ids: [2240]
  },
  {
    id: "vocab-saat-2241",
    category: "vocabulary",
    title: "one minute past four a.m. — gece dördü bir geçiyor",
    keywords: ["one minute past four a.m.", "gece dördü bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:01.",
      "🇹🇷 Saat 04:01."
    ],
    examples: [],
    related_word_ids: [2241]
  },
  {
    id: "vocab-saat-2242",
    category: "vocabulary",
    title: "two minutes past four a.m. — gece dördü iki geçiyor",
    keywords: ["two minutes past four a.m.", "gece dördü iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:02.",
      "🇹🇷 Saat 04:02."
    ],
    examples: [],
    related_word_ids: [2242]
  },
  {
    id: "vocab-saat-2243",
    category: "vocabulary",
    title: "three minutes past four a.m. — gece dördü üç geçiyor",
    keywords: ["three minutes past four a.m.", "gece dördü üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:03.",
      "🇹🇷 Saat 04:03."
    ],
    examples: [],
    related_word_ids: [2243]
  },
  {
    id: "vocab-saat-2244",
    category: "vocabulary",
    title: "four minutes past four a.m. — gece dördü dört geçiyor",
    keywords: ["four minutes past four a.m.", "gece dördü dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:04.",
      "🇹🇷 Saat 04:04."
    ],
    examples: [],
    related_word_ids: [2244]
  },
  {
    id: "vocab-saat-2245",
    category: "vocabulary",
    title: "five past four a.m. — gece dördü beş geçiyor",
    keywords: ["five past four a.m.", "gece dördü beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:05.",
      "🇹🇷 Saat 04:05."
    ],
    examples: [],
    related_word_ids: [2245]
  },
  {
    id: "vocab-saat-2246",
    category: "vocabulary",
    title: "six minutes past four a.m. — gece dördü altı geçiyor",
    keywords: ["six minutes past four a.m.", "gece dördü altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:06.",
      "🇹🇷 Saat 04:06."
    ],
    examples: [],
    related_word_ids: [2246]
  },
  {
    id: "vocab-saat-2247",
    category: "vocabulary",
    title: "seven minutes past four a.m. — gece dördü yedi geçiyor",
    keywords: ["seven minutes past four a.m.", "gece dördü yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:07.",
      "🇹🇷 Saat 04:07."
    ],
    examples: [],
    related_word_ids: [2247]
  },
  {
    id: "vocab-saat-2248",
    category: "vocabulary",
    title: "eight minutes past four a.m. — gece dördü sekiz geçiyor",
    keywords: ["eight minutes past four a.m.", "gece dördü sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:08.",
      "🇹🇷 Saat 04:08."
    ],
    examples: [],
    related_word_ids: [2248]
  },
  {
    id: "vocab-saat-2249",
    category: "vocabulary",
    title: "nine minutes past four a.m. — gece dördü dokuz geçiyor",
    keywords: ["nine minutes past four a.m.", "gece dördü dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:09.",
      "🇹🇷 Saat 04:09."
    ],
    examples: [],
    related_word_ids: [2249]
  },
  {
    id: "vocab-saat-2250",
    category: "vocabulary",
    title: "ten past four a.m. — gece dördü on geçiyor",
    keywords: ["ten past four a.m.", "gece dördü on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:10.",
      "🇹🇷 Saat 04:10."
    ],
    examples: [],
    related_word_ids: [2250]
  },
  {
    id: "vocab-saat-2251",
    category: "vocabulary",
    title: "eleven minutes past four a.m. — gece dördü on bir geçiyor",
    keywords: ["eleven minutes past four a.m.", "gece dördü on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:11.",
      "🇹🇷 Saat 04:11."
    ],
    examples: [],
    related_word_ids: [2251]
  },
  {
    id: "vocab-saat-2252",
    category: "vocabulary",
    title: "twelve minutes past four a.m. — gece dördü on iki geçiyor",
    keywords: ["twelve minutes past four a.m.", "gece dördü on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:12.",
      "🇹🇷 Saat 04:12."
    ],
    examples: [],
    related_word_ids: [2252]
  },
  {
    id: "vocab-saat-2253",
    category: "vocabulary",
    title: "thirteen minutes past four a.m. — gece dördü on üç geçiyor",
    keywords: ["thirteen minutes past four a.m.", "gece dördü on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:13.",
      "🇹🇷 Saat 04:13."
    ],
    examples: [],
    related_word_ids: [2253]
  },
  {
    id: "vocab-saat-2254",
    category: "vocabulary",
    title: "fourteen minutes past four a.m. — gece dördü on dört geçiyor",
    keywords: ["fourteen minutes past four a.m.", "gece dördü on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:14.",
      "🇹🇷 Saat 04:14."
    ],
    examples: [],
    related_word_ids: [2254]
  },
  {
    id: "vocab-saat-2255",
    category: "vocabulary",
    title: "a quarter past four a.m. — gece dördü çeyrek geçiyor",
    keywords: ["a quarter past four a.m.", "gece dördü çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:15.",
      "🇹🇷 Saat 04:15."
    ],
    examples: [],
    related_word_ids: [2255]
  },
  {
    id: "vocab-saat-2256",
    category: "vocabulary",
    title: "sixteen minutes past four a.m. — gece dördü on altı geçiyor",
    keywords: ["sixteen minutes past four a.m.", "gece dördü on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:16.",
      "🇹🇷 Saat 04:16."
    ],
    examples: [],
    related_word_ids: [2256]
  },
  {
    id: "vocab-saat-2257",
    category: "vocabulary",
    title: "seventeen minutes past four a.m. — gece dördü on yedi geçiyor",
    keywords: ["seventeen minutes past four a.m.", "gece dördü on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:17.",
      "🇹🇷 Saat 04:17."
    ],
    examples: [],
    related_word_ids: [2257]
  },
  {
    id: "vocab-saat-2258",
    category: "vocabulary",
    title: "eighteen minutes past four a.m. — gece dördü on sekiz geçiyor",
    keywords: ["eighteen minutes past four a.m.", "gece dördü on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:18.",
      "🇹🇷 Saat 04:18."
    ],
    examples: [],
    related_word_ids: [2258]
  },
  {
    id: "vocab-saat-2259",
    category: "vocabulary",
    title: "nineteen minutes past four a.m. — gece dördü on dokuz geçiyor",
    keywords: ["nineteen minutes past four a.m.", "gece dördü on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:19.",
      "🇹🇷 Saat 04:19."
    ],
    examples: [],
    related_word_ids: [2259]
  },
  {
    id: "vocab-saat-2260",
    category: "vocabulary",
    title: "twenty past four a.m. — gece dördü yirmi geçiyor",
    keywords: ["twenty past four a.m.", "gece dördü yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:20.",
      "🇹🇷 Saat 04:20."
    ],
    examples: [],
    related_word_ids: [2260]
  },
  {
    id: "vocab-saat-2261",
    category: "vocabulary",
    title: "twenty-one minutes past four a.m. — gece dördü yirmi bir geçiyor",
    keywords: ["twenty-one minutes past four a.m.", "gece dördü yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:21.",
      "🇹🇷 Saat 04:21."
    ],
    examples: [],
    related_word_ids: [2261]
  },
  {
    id: "vocab-saat-2262",
    category: "vocabulary",
    title: "twenty-two minutes past four a.m. — gece dördü yirmi iki geçiyor",
    keywords: ["twenty-two minutes past four a.m.", "gece dördü yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:22.",
      "🇹🇷 Saat 04:22."
    ],
    examples: [],
    related_word_ids: [2262]
  },
  {
    id: "vocab-saat-2263",
    category: "vocabulary",
    title: "twenty-three minutes past four a.m. — gece dördü yirmi üç geçiyor",
    keywords: ["twenty-three minutes past four a.m.", "gece dördü yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:23.",
      "🇹🇷 Saat 04:23."
    ],
    examples: [],
    related_word_ids: [2263]
  },
  {
    id: "vocab-saat-2264",
    category: "vocabulary",
    title: "twenty-four minutes past four a.m. — gece dördü yirmi dört geçiyor",
    keywords: ["twenty-four minutes past four a.m.", "gece dördü yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:24.",
      "🇹🇷 Saat 04:24."
    ],
    examples: [],
    related_word_ids: [2264]
  },
  {
    id: "vocab-saat-2265",
    category: "vocabulary",
    title: "twenty-five past four a.m. — gece dördü yirmi beş geçiyor",
    keywords: ["twenty-five past four a.m.", "gece dördü yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:25.",
      "🇹🇷 Saat 04:25."
    ],
    examples: [],
    related_word_ids: [2265]
  },
  {
    id: "vocab-saat-2266",
    category: "vocabulary",
    title: "twenty-six minutes past four a.m. — gece dördü yirmi altı geçiyor",
    keywords: ["twenty-six minutes past four a.m.", "gece dördü yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:26.",
      "🇹🇷 Saat 04:26."
    ],
    examples: [],
    related_word_ids: [2266]
  },
  {
    id: "vocab-saat-2267",
    category: "vocabulary",
    title: "twenty-seven minutes past four a.m. — gece dördü yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past four a.m.", "gece dördü yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:27.",
      "🇹🇷 Saat 04:27."
    ],
    examples: [],
    related_word_ids: [2267]
  },
  {
    id: "vocab-saat-2268",
    category: "vocabulary",
    title: "twenty-eight minutes past four a.m. — gece dördü yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past four a.m.", "gece dördü yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:28.",
      "🇹🇷 Saat 04:28."
    ],
    examples: [],
    related_word_ids: [2268]
  },
  {
    id: "vocab-saat-2269",
    category: "vocabulary",
    title: "twenty-nine minutes past four a.m. — gece dördü yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past four a.m.", "gece dördü yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:29.",
      "🇹🇷 Saat 04:29."
    ],
    examples: [],
    related_word_ids: [2269]
  },
  {
    id: "vocab-saat-2270",
    category: "vocabulary",
    title: "half past four a.m. — gece dört buçuk",
    keywords: ["half past four a.m.", "gece dört buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:30.",
      "🇹🇷 Saat 04:30."
    ],
    examples: [],
    related_word_ids: [2270]
  },
  {
    id: "vocab-saat-2271",
    category: "vocabulary",
    title: "twenty-nine minutes to five a.m. — gece beşe yirmi dokuz var",
    keywords: ["twenty-nine minutes to five a.m.", "gece beşe yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:31.",
      "🇹🇷 Saat 04:31."
    ],
    examples: [],
    related_word_ids: [2271]
  },
  {
    id: "vocab-saat-2272",
    category: "vocabulary",
    title: "twenty-eight minutes to five a.m. — gece beşe yirmi sekiz var",
    keywords: ["twenty-eight minutes to five a.m.", "gece beşe yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:32.",
      "🇹🇷 Saat 04:32."
    ],
    examples: [],
    related_word_ids: [2272]
  },
  {
    id: "vocab-saat-2273",
    category: "vocabulary",
    title: "twenty-seven minutes to five a.m. — gece beşe yirmi yedi var",
    keywords: ["twenty-seven minutes to five a.m.", "gece beşe yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:33.",
      "🇹🇷 Saat 04:33."
    ],
    examples: [],
    related_word_ids: [2273]
  },
  {
    id: "vocab-saat-2274",
    category: "vocabulary",
    title: "twenty-six minutes to five a.m. — gece beşe yirmi altı var",
    keywords: ["twenty-six minutes to five a.m.", "gece beşe yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:34.",
      "🇹🇷 Saat 04:34."
    ],
    examples: [],
    related_word_ids: [2274]
  },
  {
    id: "vocab-saat-2275",
    category: "vocabulary",
    title: "twenty-five to five a.m. — gece beşe yirmi beş var",
    keywords: ["twenty-five to five a.m.", "gece beşe yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:35.",
      "🇹🇷 Saat 04:35."
    ],
    examples: [],
    related_word_ids: [2275]
  },
  {
    id: "vocab-saat-2276",
    category: "vocabulary",
    title: "twenty-four minutes to five a.m. — gece beşe yirmi dört var",
    keywords: ["twenty-four minutes to five a.m.", "gece beşe yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:36.",
      "🇹🇷 Saat 04:36."
    ],
    examples: [],
    related_word_ids: [2276]
  },
  {
    id: "vocab-saat-2277",
    category: "vocabulary",
    title: "twenty-three minutes to five a.m. — gece beşe yirmi üç var",
    keywords: ["twenty-three minutes to five a.m.", "gece beşe yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:37.",
      "🇹🇷 Saat 04:37."
    ],
    examples: [],
    related_word_ids: [2277]
  },
  {
    id: "vocab-saat-2278",
    category: "vocabulary",
    title: "twenty-two minutes to five a.m. — gece beşe yirmi iki var",
    keywords: ["twenty-two minutes to five a.m.", "gece beşe yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:38.",
      "🇹🇷 Saat 04:38."
    ],
    examples: [],
    related_word_ids: [2278]
  },
  {
    id: "vocab-saat-2279",
    category: "vocabulary",
    title: "twenty-one minutes to five a.m. — gece beşe yirmi bir var",
    keywords: ["twenty-one minutes to five a.m.", "gece beşe yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:39.",
      "🇹🇷 Saat 04:39."
    ],
    examples: [],
    related_word_ids: [2279]
  },
  {
    id: "vocab-saat-2280",
    category: "vocabulary",
    title: "twenty to five a.m. — gece beşe yirmi var",
    keywords: ["twenty to five a.m.", "gece beşe yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:40.",
      "🇹🇷 Saat 04:40."
    ],
    examples: [],
    related_word_ids: [2280]
  },
  {
    id: "vocab-saat-2281",
    category: "vocabulary",
    title: "nineteen minutes to five a.m. — gece beşe on dokuz var",
    keywords: ["nineteen minutes to five a.m.", "gece beşe on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:41.",
      "🇹🇷 Saat 04:41."
    ],
    examples: [],
    related_word_ids: [2281]
  },
  {
    id: "vocab-saat-2282",
    category: "vocabulary",
    title: "eighteen minutes to five a.m. — gece beşe on sekiz var",
    keywords: ["eighteen minutes to five a.m.", "gece beşe on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:42.",
      "🇹🇷 Saat 04:42."
    ],
    examples: [],
    related_word_ids: [2282]
  },
  {
    id: "vocab-saat-2283",
    category: "vocabulary",
    title: "seventeen minutes to five a.m. — gece beşe on yedi var",
    keywords: ["seventeen minutes to five a.m.", "gece beşe on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:43.",
      "🇹🇷 Saat 04:43."
    ],
    examples: [],
    related_word_ids: [2283]
  },
  {
    id: "vocab-saat-2284",
    category: "vocabulary",
    title: "sixteen minutes to five a.m. — gece beşe on altı var",
    keywords: ["sixteen minutes to five a.m.", "gece beşe on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:44.",
      "🇹🇷 Saat 04:44."
    ],
    examples: [],
    related_word_ids: [2284]
  },
  {
    id: "vocab-saat-2285",
    category: "vocabulary",
    title: "a quarter to five a.m. — gece beşe çeyrek var",
    keywords: ["a quarter to five a.m.", "gece beşe çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:45.",
      "🇹🇷 Saat 04:45."
    ],
    examples: [],
    related_word_ids: [2285]
  },
  {
    id: "vocab-saat-2286",
    category: "vocabulary",
    title: "fourteen minutes to five a.m. — gece beşe on dört var",
    keywords: ["fourteen minutes to five a.m.", "gece beşe on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:46.",
      "🇹🇷 Saat 04:46."
    ],
    examples: [],
    related_word_ids: [2286]
  },
  {
    id: "vocab-saat-2287",
    category: "vocabulary",
    title: "thirteen minutes to five a.m. — gece beşe on üç var",
    keywords: ["thirteen minutes to five a.m.", "gece beşe on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:47.",
      "🇹🇷 Saat 04:47."
    ],
    examples: [],
    related_word_ids: [2287]
  },
  {
    id: "vocab-saat-2288",
    category: "vocabulary",
    title: "twelve minutes to five a.m. — gece beşe on iki var",
    keywords: ["twelve minutes to five a.m.", "gece beşe on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:48.",
      "🇹🇷 Saat 04:48."
    ],
    examples: [],
    related_word_ids: [2288]
  },
  {
    id: "vocab-saat-2289",
    category: "vocabulary",
    title: "eleven minutes to five a.m. — gece beşe on bir var",
    keywords: ["eleven minutes to five a.m.", "gece beşe on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:49.",
      "🇹🇷 Saat 04:49."
    ],
    examples: [],
    related_word_ids: [2289]
  },
  {
    id: "vocab-saat-2290",
    category: "vocabulary",
    title: "ten to five a.m. — gece beşe on var",
    keywords: ["ten to five a.m.", "gece beşe on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:50.",
      "🇹🇷 Saat 04:50."
    ],
    examples: [],
    related_word_ids: [2290]
  },
  {
    id: "vocab-saat-2291",
    category: "vocabulary",
    title: "nine minutes to five a.m. — gece beşe dokuz var",
    keywords: ["nine minutes to five a.m.", "gece beşe dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:51.",
      "🇹🇷 Saat 04:51."
    ],
    examples: [],
    related_word_ids: [2291]
  },
  {
    id: "vocab-saat-2292",
    category: "vocabulary",
    title: "eight minutes to five a.m. — gece beşe sekiz var",
    keywords: ["eight minutes to five a.m.", "gece beşe sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:52.",
      "🇹🇷 Saat 04:52."
    ],
    examples: [],
    related_word_ids: [2292]
  },
  {
    id: "vocab-saat-2293",
    category: "vocabulary",
    title: "seven minutes to five a.m. — gece beşe yedi var",
    keywords: ["seven minutes to five a.m.", "gece beşe yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:53.",
      "🇹🇷 Saat 04:53."
    ],
    examples: [],
    related_word_ids: [2293]
  },
  {
    id: "vocab-saat-2294",
    category: "vocabulary",
    title: "six minutes to five a.m. — gece beşe altı var",
    keywords: ["six minutes to five a.m.", "gece beşe altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:54.",
      "🇹🇷 Saat 04:54."
    ],
    examples: [],
    related_word_ids: [2294]
  },
  {
    id: "vocab-saat-2295",
    category: "vocabulary",
    title: "five to five a.m. — gece beşe beş var",
    keywords: ["five to five a.m.", "gece beşe beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:55.",
      "🇹🇷 Saat 04:55."
    ],
    examples: [],
    related_word_ids: [2295]
  },
  {
    id: "vocab-saat-2296",
    category: "vocabulary",
    title: "four minutes to five a.m. — gece beşe dört var",
    keywords: ["four minutes to five a.m.", "gece beşe dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:56.",
      "🇹🇷 Saat 04:56."
    ],
    examples: [],
    related_word_ids: [2296]
  },
  {
    id: "vocab-saat-2297",
    category: "vocabulary",
    title: "three minutes to five a.m. — gece beşe üç var",
    keywords: ["three minutes to five a.m.", "gece beşe üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:57.",
      "🇹🇷 Saat 04:57."
    ],
    examples: [],
    related_word_ids: [2297]
  },
  {
    id: "vocab-saat-2298",
    category: "vocabulary",
    title: "two minutes to five a.m. — gece beşe iki var",
    keywords: ["two minutes to five a.m.", "gece beşe iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:58.",
      "🇹🇷 Saat 04:58."
    ],
    examples: [],
    related_word_ids: [2298]
  },
  {
    id: "vocab-saat-2299",
    category: "vocabulary",
    title: "one minute to five a.m. — gece beşe bir var",
    keywords: ["one minute to five a.m.", "gece beşe bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 04:59.",
      "🇹🇷 Saat 04:59."
    ],
    examples: [],
    related_word_ids: [2299]
  },
  {
    id: "vocab-saat-2300",
    category: "vocabulary",
    title: "five o'clock a.m. — sabah beş",
    keywords: ["five o'clock a.m.", "sabah beş", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:00.",
      "🇹🇷 Saat 05:00."
    ],
    examples: [],
    related_word_ids: [2300]
  },
  {
    id: "vocab-saat-2301",
    category: "vocabulary",
    title: "one minute past five a.m. — sabah beşi bir geçiyor",
    keywords: ["one minute past five a.m.", "sabah beşi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:01.",
      "🇹🇷 Saat 05:01."
    ],
    examples: [],
    related_word_ids: [2301]
  },
  {
    id: "vocab-saat-2302",
    category: "vocabulary",
    title: "two minutes past five a.m. — sabah beşi iki geçiyor",
    keywords: ["two minutes past five a.m.", "sabah beşi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:02.",
      "🇹🇷 Saat 05:02."
    ],
    examples: [],
    related_word_ids: [2302]
  },
  {
    id: "vocab-saat-2303",
    category: "vocabulary",
    title: "three minutes past five a.m. — sabah beşi üç geçiyor",
    keywords: ["three minutes past five a.m.", "sabah beşi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:03.",
      "🇹🇷 Saat 05:03."
    ],
    examples: [],
    related_word_ids: [2303]
  },
  {
    id: "vocab-saat-2304",
    category: "vocabulary",
    title: "four minutes past five a.m. — sabah beşi dört geçiyor",
    keywords: ["four minutes past five a.m.", "sabah beşi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:04.",
      "🇹🇷 Saat 05:04."
    ],
    examples: [],
    related_word_ids: [2304]
  },
  {
    id: "vocab-saat-2305",
    category: "vocabulary",
    title: "five past five a.m. — sabah beşi beş geçiyor",
    keywords: ["five past five a.m.", "sabah beşi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:05.",
      "🇹🇷 Saat 05:05."
    ],
    examples: [],
    related_word_ids: [2305]
  },
  {
    id: "vocab-saat-2306",
    category: "vocabulary",
    title: "six minutes past five a.m. — sabah beşi altı geçiyor",
    keywords: ["six minutes past five a.m.", "sabah beşi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:06.",
      "🇹🇷 Saat 05:06."
    ],
    examples: [],
    related_word_ids: [2306]
  },
  {
    id: "vocab-saat-2307",
    category: "vocabulary",
    title: "seven minutes past five a.m. — sabah beşi yedi geçiyor",
    keywords: ["seven minutes past five a.m.", "sabah beşi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:07.",
      "🇹🇷 Saat 05:07."
    ],
    examples: [],
    related_word_ids: [2307]
  },
  {
    id: "vocab-saat-2308",
    category: "vocabulary",
    title: "eight minutes past five a.m. — sabah beşi sekiz geçiyor",
    keywords: ["eight minutes past five a.m.", "sabah beşi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:08.",
      "🇹🇷 Saat 05:08."
    ],
    examples: [],
    related_word_ids: [2308]
  },
  {
    id: "vocab-saat-2309",
    category: "vocabulary",
    title: "nine minutes past five a.m. — sabah beşi dokuz geçiyor",
    keywords: ["nine minutes past five a.m.", "sabah beşi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:09.",
      "🇹🇷 Saat 05:09."
    ],
    examples: [],
    related_word_ids: [2309]
  },
  {
    id: "vocab-saat-2310",
    category: "vocabulary",
    title: "ten past five a.m. — sabah beşi on geçiyor",
    keywords: ["ten past five a.m.", "sabah beşi on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:10.",
      "🇹🇷 Saat 05:10."
    ],
    examples: [],
    related_word_ids: [2310]
  },
  {
    id: "vocab-saat-2311",
    category: "vocabulary",
    title: "eleven minutes past five a.m. — sabah beşi on bir geçiyor",
    keywords: ["eleven minutes past five a.m.", "sabah beşi on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:11.",
      "🇹🇷 Saat 05:11."
    ],
    examples: [],
    related_word_ids: [2311]
  },
  {
    id: "vocab-saat-2312",
    category: "vocabulary",
    title: "twelve minutes past five a.m. — sabah beşi on iki geçiyor",
    keywords: ["twelve minutes past five a.m.", "sabah beşi on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:12.",
      "🇹🇷 Saat 05:12."
    ],
    examples: [],
    related_word_ids: [2312]
  },
  {
    id: "vocab-saat-2313",
    category: "vocabulary",
    title: "thirteen minutes past five a.m. — sabah beşi on üç geçiyor",
    keywords: ["thirteen minutes past five a.m.", "sabah beşi on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:13.",
      "🇹🇷 Saat 05:13."
    ],
    examples: [],
    related_word_ids: [2313]
  },
  {
    id: "vocab-saat-2314",
    category: "vocabulary",
    title: "fourteen minutes past five a.m. — sabah beşi on dört geçiyor",
    keywords: ["fourteen minutes past five a.m.", "sabah beşi on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:14.",
      "🇹🇷 Saat 05:14."
    ],
    examples: [],
    related_word_ids: [2314]
  },
  {
    id: "vocab-saat-2315",
    category: "vocabulary",
    title: "a quarter past five a.m. — sabah beşi çeyrek geçiyor",
    keywords: ["a quarter past five a.m.", "sabah beşi çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:15.",
      "🇹🇷 Saat 05:15."
    ],
    examples: [],
    related_word_ids: [2315]
  },
  {
    id: "vocab-saat-2316",
    category: "vocabulary",
    title: "sixteen minutes past five a.m. — sabah beşi on altı geçiyor",
    keywords: ["sixteen minutes past five a.m.", "sabah beşi on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:16.",
      "🇹🇷 Saat 05:16."
    ],
    examples: [],
    related_word_ids: [2316]
  },
  {
    id: "vocab-saat-2317",
    category: "vocabulary",
    title: "seventeen minutes past five a.m. — sabah beşi on yedi geçiyor",
    keywords: ["seventeen minutes past five a.m.", "sabah beşi on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:17.",
      "🇹🇷 Saat 05:17."
    ],
    examples: [],
    related_word_ids: [2317]
  },
  {
    id: "vocab-saat-2318",
    category: "vocabulary",
    title: "eighteen minutes past five a.m. — sabah beşi on sekiz geçiyor",
    keywords: ["eighteen minutes past five a.m.", "sabah beşi on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:18.",
      "🇹🇷 Saat 05:18."
    ],
    examples: [],
    related_word_ids: [2318]
  },
  {
    id: "vocab-saat-2319",
    category: "vocabulary",
    title: "nineteen minutes past five a.m. — sabah beşi on dokuz geçiyor",
    keywords: ["nineteen minutes past five a.m.", "sabah beşi on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:19.",
      "🇹🇷 Saat 05:19."
    ],
    examples: [],
    related_word_ids: [2319]
  },
  {
    id: "vocab-saat-2320",
    category: "vocabulary",
    title: "twenty past five a.m. — sabah beşi yirmi geçiyor",
    keywords: ["twenty past five a.m.", "sabah beşi yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:20.",
      "🇹🇷 Saat 05:20."
    ],
    examples: [],
    related_word_ids: [2320]
  },
  {
    id: "vocab-saat-2321",
    category: "vocabulary",
    title: "twenty-one minutes past five a.m. — sabah beşi yirmi bir geçiyor",
    keywords: ["twenty-one minutes past five a.m.", "sabah beşi yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:21.",
      "🇹🇷 Saat 05:21."
    ],
    examples: [],
    related_word_ids: [2321]
  },
  {
    id: "vocab-saat-2322",
    category: "vocabulary",
    title: "twenty-two minutes past five a.m. — sabah beşi yirmi iki geçiyor",
    keywords: ["twenty-two minutes past five a.m.", "sabah beşi yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:22.",
      "🇹🇷 Saat 05:22."
    ],
    examples: [],
    related_word_ids: [2322]
  },
  {
    id: "vocab-saat-2323",
    category: "vocabulary",
    title: "twenty-three minutes past five a.m. — sabah beşi yirmi üç geçiyor",
    keywords: ["twenty-three minutes past five a.m.", "sabah beşi yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:23.",
      "🇹🇷 Saat 05:23."
    ],
    examples: [],
    related_word_ids: [2323]
  },
  {
    id: "vocab-saat-2324",
    category: "vocabulary",
    title: "twenty-four minutes past five a.m. — sabah beşi yirmi dört geçiyor",
    keywords: ["twenty-four minutes past five a.m.", "sabah beşi yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:24.",
      "🇹🇷 Saat 05:24."
    ],
    examples: [],
    related_word_ids: [2324]
  },
  {
    id: "vocab-saat-2325",
    category: "vocabulary",
    title: "twenty-five past five a.m. — sabah beşi yirmi beş geçiyor",
    keywords: ["twenty-five past five a.m.", "sabah beşi yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:25.",
      "🇹🇷 Saat 05:25."
    ],
    examples: [],
    related_word_ids: [2325]
  },
  {
    id: "vocab-saat-2326",
    category: "vocabulary",
    title: "twenty-six minutes past five a.m. — sabah beşi yirmi altı geçiyor",
    keywords: ["twenty-six minutes past five a.m.", "sabah beşi yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:26.",
      "🇹🇷 Saat 05:26."
    ],
    examples: [],
    related_word_ids: [2326]
  },
  {
    id: "vocab-saat-2327",
    category: "vocabulary",
    title: "twenty-seven minutes past five a.m. — sabah beşi yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past five a.m.", "sabah beşi yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:27.",
      "🇹🇷 Saat 05:27."
    ],
    examples: [],
    related_word_ids: [2327]
  },
  {
    id: "vocab-saat-2328",
    category: "vocabulary",
    title: "twenty-eight minutes past five a.m. — sabah beşi yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past five a.m.", "sabah beşi yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:28.",
      "🇹🇷 Saat 05:28."
    ],
    examples: [],
    related_word_ids: [2328]
  },
  {
    id: "vocab-saat-2329",
    category: "vocabulary",
    title: "twenty-nine minutes past five a.m. — sabah beşi yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past five a.m.", "sabah beşi yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:29.",
      "🇹🇷 Saat 05:29."
    ],
    examples: [],
    related_word_ids: [2329]
  },
  {
    id: "vocab-saat-2330",
    category: "vocabulary",
    title: "half past five a.m. — sabah beş buçuk",
    keywords: ["half past five a.m.", "sabah beş buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:30.",
      "🇹🇷 Saat 05:30."
    ],
    examples: [],
    related_word_ids: [2330]
  },
  {
    id: "vocab-saat-2331",
    category: "vocabulary",
    title: "twenty-nine minutes to six a.m. — sabah altıya yirmi dokuz var",
    keywords: ["twenty-nine minutes to six a.m.", "sabah altıya yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:31.",
      "🇹🇷 Saat 05:31."
    ],
    examples: [],
    related_word_ids: [2331]
  },
  {
    id: "vocab-saat-2332",
    category: "vocabulary",
    title: "twenty-eight minutes to six a.m. — sabah altıya yirmi sekiz var",
    keywords: ["twenty-eight minutes to six a.m.", "sabah altıya yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:32.",
      "🇹🇷 Saat 05:32."
    ],
    examples: [],
    related_word_ids: [2332]
  },
  {
    id: "vocab-saat-2333",
    category: "vocabulary",
    title: "twenty-seven minutes to six a.m. — sabah altıya yirmi yedi var",
    keywords: ["twenty-seven minutes to six a.m.", "sabah altıya yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:33.",
      "🇹🇷 Saat 05:33."
    ],
    examples: [],
    related_word_ids: [2333]
  },
  {
    id: "vocab-saat-2334",
    category: "vocabulary",
    title: "twenty-six minutes to six a.m. — sabah altıya yirmi altı var",
    keywords: ["twenty-six minutes to six a.m.", "sabah altıya yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:34.",
      "🇹🇷 Saat 05:34."
    ],
    examples: [],
    related_word_ids: [2334]
  },
  {
    id: "vocab-saat-2335",
    category: "vocabulary",
    title: "twenty-five to six a.m. — sabah altıya yirmi beş var",
    keywords: ["twenty-five to six a.m.", "sabah altıya yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:35.",
      "🇹🇷 Saat 05:35."
    ],
    examples: [],
    related_word_ids: [2335]
  },
  {
    id: "vocab-saat-2336",
    category: "vocabulary",
    title: "twenty-four minutes to six a.m. — sabah altıya yirmi dört var",
    keywords: ["twenty-four minutes to six a.m.", "sabah altıya yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:36.",
      "🇹🇷 Saat 05:36."
    ],
    examples: [],
    related_word_ids: [2336]
  },
  {
    id: "vocab-saat-2337",
    category: "vocabulary",
    title: "twenty-three minutes to six a.m. — sabah altıya yirmi üç var",
    keywords: ["twenty-three minutes to six a.m.", "sabah altıya yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:37.",
      "🇹🇷 Saat 05:37."
    ],
    examples: [],
    related_word_ids: [2337]
  },
  {
    id: "vocab-saat-2338",
    category: "vocabulary",
    title: "twenty-two minutes to six a.m. — sabah altıya yirmi iki var",
    keywords: ["twenty-two minutes to six a.m.", "sabah altıya yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:38.",
      "🇹🇷 Saat 05:38."
    ],
    examples: [],
    related_word_ids: [2338]
  },
  {
    id: "vocab-saat-2339",
    category: "vocabulary",
    title: "twenty-one minutes to six a.m. — sabah altıya yirmi bir var",
    keywords: ["twenty-one minutes to six a.m.", "sabah altıya yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:39.",
      "🇹🇷 Saat 05:39."
    ],
    examples: [],
    related_word_ids: [2339]
  },
  {
    id: "vocab-saat-2340",
    category: "vocabulary",
    title: "twenty to six a.m. — sabah altıya yirmi var",
    keywords: ["twenty to six a.m.", "sabah altıya yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:40.",
      "🇹🇷 Saat 05:40."
    ],
    examples: [],
    related_word_ids: [2340]
  },
  {
    id: "vocab-saat-2341",
    category: "vocabulary",
    title: "nineteen minutes to six a.m. — sabah altıya on dokuz var",
    keywords: ["nineteen minutes to six a.m.", "sabah altıya on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:41.",
      "🇹🇷 Saat 05:41."
    ],
    examples: [],
    related_word_ids: [2341]
  },
  {
    id: "vocab-saat-2342",
    category: "vocabulary",
    title: "eighteen minutes to six a.m. — sabah altıya on sekiz var",
    keywords: ["eighteen minutes to six a.m.", "sabah altıya on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:42.",
      "🇹🇷 Saat 05:42."
    ],
    examples: [],
    related_word_ids: [2342]
  },
  {
    id: "vocab-saat-2343",
    category: "vocabulary",
    title: "seventeen minutes to six a.m. — sabah altıya on yedi var",
    keywords: ["seventeen minutes to six a.m.", "sabah altıya on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:43.",
      "🇹🇷 Saat 05:43."
    ],
    examples: [],
    related_word_ids: [2343]
  },
  {
    id: "vocab-saat-2344",
    category: "vocabulary",
    title: "sixteen minutes to six a.m. — sabah altıya on altı var",
    keywords: ["sixteen minutes to six a.m.", "sabah altıya on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:44.",
      "🇹🇷 Saat 05:44."
    ],
    examples: [],
    related_word_ids: [2344]
  },
  {
    id: "vocab-saat-2345",
    category: "vocabulary",
    title: "a quarter to six a.m. — sabah altıya çeyrek var",
    keywords: ["a quarter to six a.m.", "sabah altıya çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:45.",
      "🇹🇷 Saat 05:45."
    ],
    examples: [],
    related_word_ids: [2345]
  },
  {
    id: "vocab-saat-2346",
    category: "vocabulary",
    title: "fourteen minutes to six a.m. — sabah altıya on dört var",
    keywords: ["fourteen minutes to six a.m.", "sabah altıya on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:46.",
      "🇹🇷 Saat 05:46."
    ],
    examples: [],
    related_word_ids: [2346]
  },
  {
    id: "vocab-saat-2347",
    category: "vocabulary",
    title: "thirteen minutes to six a.m. — sabah altıya on üç var",
    keywords: ["thirteen minutes to six a.m.", "sabah altıya on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:47.",
      "🇹🇷 Saat 05:47."
    ],
    examples: [],
    related_word_ids: [2347]
  },
  {
    id: "vocab-saat-2348",
    category: "vocabulary",
    title: "twelve minutes to six a.m. — sabah altıya on iki var",
    keywords: ["twelve minutes to six a.m.", "sabah altıya on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:48.",
      "🇹🇷 Saat 05:48."
    ],
    examples: [],
    related_word_ids: [2348]
  },
  {
    id: "vocab-saat-2349",
    category: "vocabulary",
    title: "eleven minutes to six a.m. — sabah altıya on bir var",
    keywords: ["eleven minutes to six a.m.", "sabah altıya on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:49.",
      "🇹🇷 Saat 05:49."
    ],
    examples: [],
    related_word_ids: [2349]
  },
  {
    id: "vocab-saat-2350",
    category: "vocabulary",
    title: "ten to six a.m. — sabah altıya on var",
    keywords: ["ten to six a.m.", "sabah altıya on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:50.",
      "🇹🇷 Saat 05:50."
    ],
    examples: [],
    related_word_ids: [2350]
  },
  {
    id: "vocab-saat-2351",
    category: "vocabulary",
    title: "nine minutes to six a.m. — sabah altıya dokuz var",
    keywords: ["nine minutes to six a.m.", "sabah altıya dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:51.",
      "🇹🇷 Saat 05:51."
    ],
    examples: [],
    related_word_ids: [2351]
  },
  {
    id: "vocab-saat-2352",
    category: "vocabulary",
    title: "eight minutes to six a.m. — sabah altıya sekiz var",
    keywords: ["eight minutes to six a.m.", "sabah altıya sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:52.",
      "🇹🇷 Saat 05:52."
    ],
    examples: [],
    related_word_ids: [2352]
  },
  {
    id: "vocab-saat-2353",
    category: "vocabulary",
    title: "seven minutes to six a.m. — sabah altıya yedi var",
    keywords: ["seven minutes to six a.m.", "sabah altıya yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:53.",
      "🇹🇷 Saat 05:53."
    ],
    examples: [],
    related_word_ids: [2353]
  },
  {
    id: "vocab-saat-2354",
    category: "vocabulary",
    title: "six minutes to six a.m. — sabah altıya altı var",
    keywords: ["six minutes to six a.m.", "sabah altıya altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:54.",
      "🇹🇷 Saat 05:54."
    ],
    examples: [],
    related_word_ids: [2354]
  },
  {
    id: "vocab-saat-2355",
    category: "vocabulary",
    title: "five to six a.m. — sabah altıya beş var",
    keywords: ["five to six a.m.", "sabah altıya beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:55.",
      "🇹🇷 Saat 05:55."
    ],
    examples: [],
    related_word_ids: [2355]
  },
  {
    id: "vocab-saat-2356",
    category: "vocabulary",
    title: "four minutes to six a.m. — sabah altıya dört var",
    keywords: ["four minutes to six a.m.", "sabah altıya dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:56.",
      "🇹🇷 Saat 05:56."
    ],
    examples: [],
    related_word_ids: [2356]
  },
  {
    id: "vocab-saat-2357",
    category: "vocabulary",
    title: "three minutes to six a.m. — sabah altıya üç var",
    keywords: ["three minutes to six a.m.", "sabah altıya üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:57.",
      "🇹🇷 Saat 05:57."
    ],
    examples: [],
    related_word_ids: [2357]
  },
  {
    id: "vocab-saat-2358",
    category: "vocabulary",
    title: "two minutes to six a.m. — sabah altıya iki var",
    keywords: ["two minutes to six a.m.", "sabah altıya iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:58.",
      "🇹🇷 Saat 05:58."
    ],
    examples: [],
    related_word_ids: [2358]
  },
  {
    id: "vocab-saat-2359",
    category: "vocabulary",
    title: "one minute to six a.m. — sabah altıya bir var",
    keywords: ["one minute to six a.m.", "sabah altıya bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 05:59.",
      "🇹🇷 Saat 05:59."
    ],
    examples: [],
    related_word_ids: [2359]
  },
  {
    id: "vocab-saat-2360",
    category: "vocabulary",
    title: "six o'clock a.m. — sabah altı",
    keywords: ["six o'clock a.m.", "sabah altı", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:00.",
      "🇹🇷 Saat 06:00."
    ],
    examples: [],
    related_word_ids: [2360]
  },
  {
    id: "vocab-saat-2361",
    category: "vocabulary",
    title: "one minute past six a.m. — sabah altıyı bir geçiyor",
    keywords: ["one minute past six a.m.", "sabah altıyı bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:01.",
      "🇹🇷 Saat 06:01."
    ],
    examples: [],
    related_word_ids: [2361]
  },
  {
    id: "vocab-saat-2362",
    category: "vocabulary",
    title: "two minutes past six a.m. — sabah altıyı iki geçiyor",
    keywords: ["two minutes past six a.m.", "sabah altıyı iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:02.",
      "🇹🇷 Saat 06:02."
    ],
    examples: [],
    related_word_ids: [2362]
  },
  {
    id: "vocab-saat-2363",
    category: "vocabulary",
    title: "three minutes past six a.m. — sabah altıyı üç geçiyor",
    keywords: ["three minutes past six a.m.", "sabah altıyı üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:03.",
      "🇹🇷 Saat 06:03."
    ],
    examples: [],
    related_word_ids: [2363]
  },
  {
    id: "vocab-saat-2364",
    category: "vocabulary",
    title: "four minutes past six a.m. — sabah altıyı dört geçiyor",
    keywords: ["four minutes past six a.m.", "sabah altıyı dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:04.",
      "🇹🇷 Saat 06:04."
    ],
    examples: [],
    related_word_ids: [2364]
  },
  {
    id: "vocab-saat-2365",
    category: "vocabulary",
    title: "five past six a.m. — sabah altıyı beş geçiyor",
    keywords: ["five past six a.m.", "sabah altıyı beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:05.",
      "🇹🇷 Saat 06:05."
    ],
    examples: [],
    related_word_ids: [2365]
  },
  {
    id: "vocab-saat-2366",
    category: "vocabulary",
    title: "six minutes past six a.m. — sabah altıyı altı geçiyor",
    keywords: ["six minutes past six a.m.", "sabah altıyı altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:06.",
      "🇹🇷 Saat 06:06."
    ],
    examples: [],
    related_word_ids: [2366]
  },
  {
    id: "vocab-saat-2367",
    category: "vocabulary",
    title: "seven minutes past six a.m. — sabah altıyı yedi geçiyor",
    keywords: ["seven minutes past six a.m.", "sabah altıyı yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:07.",
      "🇹🇷 Saat 06:07."
    ],
    examples: [],
    related_word_ids: [2367]
  },
  {
    id: "vocab-saat-2368",
    category: "vocabulary",
    title: "eight minutes past six a.m. — sabah altıyı sekiz geçiyor",
    keywords: ["eight minutes past six a.m.", "sabah altıyı sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:08.",
      "🇹🇷 Saat 06:08."
    ],
    examples: [],
    related_word_ids: [2368]
  },
  {
    id: "vocab-saat-2369",
    category: "vocabulary",
    title: "nine minutes past six a.m. — sabah altıyı dokuz geçiyor",
    keywords: ["nine minutes past six a.m.", "sabah altıyı dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:09.",
      "🇹🇷 Saat 06:09."
    ],
    examples: [],
    related_word_ids: [2369]
  },
  {
    id: "vocab-saat-2370",
    category: "vocabulary",
    title: "ten past six a.m. — sabah altıyı on geçiyor",
    keywords: ["ten past six a.m.", "sabah altıyı on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:10.",
      "🇹🇷 Saat 06:10."
    ],
    examples: [],
    related_word_ids: [2370]
  },
  {
    id: "vocab-saat-2371",
    category: "vocabulary",
    title: "eleven minutes past six a.m. — sabah altıyı on bir geçiyor",
    keywords: ["eleven minutes past six a.m.", "sabah altıyı on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:11.",
      "🇹🇷 Saat 06:11."
    ],
    examples: [],
    related_word_ids: [2371]
  },
  {
    id: "vocab-saat-2372",
    category: "vocabulary",
    title: "twelve minutes past six a.m. — sabah altıyı on iki geçiyor",
    keywords: ["twelve minutes past six a.m.", "sabah altıyı on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:12.",
      "🇹🇷 Saat 06:12."
    ],
    examples: [],
    related_word_ids: [2372]
  },
  {
    id: "vocab-saat-2373",
    category: "vocabulary",
    title: "thirteen minutes past six a.m. — sabah altıyı on üç geçiyor",
    keywords: ["thirteen minutes past six a.m.", "sabah altıyı on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:13.",
      "🇹🇷 Saat 06:13."
    ],
    examples: [],
    related_word_ids: [2373]
  },
  {
    id: "vocab-saat-2374",
    category: "vocabulary",
    title: "fourteen minutes past six a.m. — sabah altıyı on dört geçiyor",
    keywords: ["fourteen minutes past six a.m.", "sabah altıyı on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:14.",
      "🇹🇷 Saat 06:14."
    ],
    examples: [],
    related_word_ids: [2374]
  },
  {
    id: "vocab-saat-2375",
    category: "vocabulary",
    title: "a quarter past six a.m. — sabah altıyı çeyrek geçiyor",
    keywords: ["a quarter past six a.m.", "sabah altıyı çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:15.",
      "🇹🇷 Saat 06:15."
    ],
    examples: [],
    related_word_ids: [2375]
  },
  {
    id: "vocab-saat-2376",
    category: "vocabulary",
    title: "sixteen minutes past six a.m. — sabah altıyı on altı geçiyor",
    keywords: ["sixteen minutes past six a.m.", "sabah altıyı on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:16.",
      "🇹🇷 Saat 06:16."
    ],
    examples: [],
    related_word_ids: [2376]
  },
  {
    id: "vocab-saat-2377",
    category: "vocabulary",
    title: "seventeen minutes past six a.m. — sabah altıyı on yedi geçiyor",
    keywords: ["seventeen minutes past six a.m.", "sabah altıyı on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:17.",
      "🇹🇷 Saat 06:17."
    ],
    examples: [],
    related_word_ids: [2377]
  },
  {
    id: "vocab-saat-2378",
    category: "vocabulary",
    title: "eighteen minutes past six a.m. — sabah altıyı on sekiz geçiyor",
    keywords: ["eighteen minutes past six a.m.", "sabah altıyı on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:18.",
      "🇹🇷 Saat 06:18."
    ],
    examples: [],
    related_word_ids: [2378]
  },
  {
    id: "vocab-saat-2379",
    category: "vocabulary",
    title: "nineteen minutes past six a.m. — sabah altıyı on dokuz geçiyor",
    keywords: ["nineteen minutes past six a.m.", "sabah altıyı on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:19.",
      "🇹🇷 Saat 06:19."
    ],
    examples: [],
    related_word_ids: [2379]
  },
  {
    id: "vocab-saat-2380",
    category: "vocabulary",
    title: "twenty past six a.m. — sabah altıyı yirmi geçiyor",
    keywords: ["twenty past six a.m.", "sabah altıyı yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:20.",
      "🇹🇷 Saat 06:20."
    ],
    examples: [],
    related_word_ids: [2380]
  },
  {
    id: "vocab-saat-2381",
    category: "vocabulary",
    title: "twenty-one minutes past six a.m. — sabah altıyı yirmi bir geçiyor",
    keywords: ["twenty-one minutes past six a.m.", "sabah altıyı yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:21.",
      "🇹🇷 Saat 06:21."
    ],
    examples: [],
    related_word_ids: [2381]
  },
  {
    id: "vocab-saat-2382",
    category: "vocabulary",
    title: "twenty-two minutes past six a.m. — sabah altıyı yirmi iki geçiyor",
    keywords: ["twenty-two minutes past six a.m.", "sabah altıyı yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:22.",
      "🇹🇷 Saat 06:22."
    ],
    examples: [],
    related_word_ids: [2382]
  },
  {
    id: "vocab-saat-2383",
    category: "vocabulary",
    title: "twenty-three minutes past six a.m. — sabah altıyı yirmi üç geçiyor",
    keywords: ["twenty-three minutes past six a.m.", "sabah altıyı yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:23.",
      "🇹🇷 Saat 06:23."
    ],
    examples: [],
    related_word_ids: [2383]
  },
  {
    id: "vocab-saat-2384",
    category: "vocabulary",
    title: "twenty-four minutes past six a.m. — sabah altıyı yirmi dört geçiyor",
    keywords: ["twenty-four minutes past six a.m.", "sabah altıyı yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:24.",
      "🇹🇷 Saat 06:24."
    ],
    examples: [],
    related_word_ids: [2384]
  },
  {
    id: "vocab-saat-2385",
    category: "vocabulary",
    title: "twenty-five past six a.m. — sabah altıyı yirmi beş geçiyor",
    keywords: ["twenty-five past six a.m.", "sabah altıyı yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:25.",
      "🇹🇷 Saat 06:25."
    ],
    examples: [],
    related_word_ids: [2385]
  },
  {
    id: "vocab-saat-2386",
    category: "vocabulary",
    title: "twenty-six minutes past six a.m. — sabah altıyı yirmi altı geçiyor",
    keywords: ["twenty-six minutes past six a.m.", "sabah altıyı yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:26.",
      "🇹🇷 Saat 06:26."
    ],
    examples: [],
    related_word_ids: [2386]
  },
  {
    id: "vocab-saat-2387",
    category: "vocabulary",
    title: "twenty-seven minutes past six a.m. — sabah altıyı yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past six a.m.", "sabah altıyı yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:27.",
      "🇹🇷 Saat 06:27."
    ],
    examples: [],
    related_word_ids: [2387]
  },
  {
    id: "vocab-saat-2388",
    category: "vocabulary",
    title: "twenty-eight minutes past six a.m. — sabah altıyı yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past six a.m.", "sabah altıyı yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:28.",
      "🇹🇷 Saat 06:28."
    ],
    examples: [],
    related_word_ids: [2388]
  },
  {
    id: "vocab-saat-2389",
    category: "vocabulary",
    title: "twenty-nine minutes past six a.m. — sabah altıyı yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past six a.m.", "sabah altıyı yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:29.",
      "🇹🇷 Saat 06:29."
    ],
    examples: [],
    related_word_ids: [2389]
  },
  {
    id: "vocab-saat-2390",
    category: "vocabulary",
    title: "half past six a.m. — sabah altı buçuk",
    keywords: ["half past six a.m.", "sabah altı buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:30.",
      "🇹🇷 Saat 06:30."
    ],
    examples: [],
    related_word_ids: [2390]
  },
  {
    id: "vocab-saat-2391",
    category: "vocabulary",
    title: "twenty-nine minutes to seven a.m. — sabah yediye yirmi dokuz var",
    keywords: ["twenty-nine minutes to seven a.m.", "sabah yediye yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:31.",
      "🇹🇷 Saat 06:31."
    ],
    examples: [],
    related_word_ids: [2391]
  },
  {
    id: "vocab-saat-2392",
    category: "vocabulary",
    title: "twenty-eight minutes to seven a.m. — sabah yediye yirmi sekiz var",
    keywords: ["twenty-eight minutes to seven a.m.", "sabah yediye yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:32.",
      "🇹🇷 Saat 06:32."
    ],
    examples: [],
    related_word_ids: [2392]
  },
  {
    id: "vocab-saat-2393",
    category: "vocabulary",
    title: "twenty-seven minutes to seven a.m. — sabah yediye yirmi yedi var",
    keywords: ["twenty-seven minutes to seven a.m.", "sabah yediye yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:33.",
      "🇹🇷 Saat 06:33."
    ],
    examples: [],
    related_word_ids: [2393]
  },
  {
    id: "vocab-saat-2394",
    category: "vocabulary",
    title: "twenty-six minutes to seven a.m. — sabah yediye yirmi altı var",
    keywords: ["twenty-six minutes to seven a.m.", "sabah yediye yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:34.",
      "🇹🇷 Saat 06:34."
    ],
    examples: [],
    related_word_ids: [2394]
  },
  {
    id: "vocab-saat-2395",
    category: "vocabulary",
    title: "twenty-five to seven a.m. — sabah yediye yirmi beş var",
    keywords: ["twenty-five to seven a.m.", "sabah yediye yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:35.",
      "🇹🇷 Saat 06:35."
    ],
    examples: [],
    related_word_ids: [2395]
  },
  {
    id: "vocab-saat-2396",
    category: "vocabulary",
    title: "twenty-four minutes to seven a.m. — sabah yediye yirmi dört var",
    keywords: ["twenty-four minutes to seven a.m.", "sabah yediye yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:36.",
      "🇹🇷 Saat 06:36."
    ],
    examples: [],
    related_word_ids: [2396]
  },
  {
    id: "vocab-saat-2397",
    category: "vocabulary",
    title: "twenty-three minutes to seven a.m. — sabah yediye yirmi üç var",
    keywords: ["twenty-three minutes to seven a.m.", "sabah yediye yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:37.",
      "🇹🇷 Saat 06:37."
    ],
    examples: [],
    related_word_ids: [2397]
  },
  {
    id: "vocab-saat-2398",
    category: "vocabulary",
    title: "twenty-two minutes to seven a.m. — sabah yediye yirmi iki var",
    keywords: ["twenty-two minutes to seven a.m.", "sabah yediye yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:38.",
      "🇹🇷 Saat 06:38."
    ],
    examples: [],
    related_word_ids: [2398]
  },
  {
    id: "vocab-saat-2399",
    category: "vocabulary",
    title: "twenty-one minutes to seven a.m. — sabah yediye yirmi bir var",
    keywords: ["twenty-one minutes to seven a.m.", "sabah yediye yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:39.",
      "🇹🇷 Saat 06:39."
    ],
    examples: [],
    related_word_ids: [2399]
  },
  {
    id: "vocab-saat-2400",
    category: "vocabulary",
    title: "twenty to seven a.m. — sabah yediye yirmi var",
    keywords: ["twenty to seven a.m.", "sabah yediye yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:40.",
      "🇹🇷 Saat 06:40."
    ],
    examples: [],
    related_word_ids: [2400]
  },
  {
    id: "vocab-saat-2401",
    category: "vocabulary",
    title: "nineteen minutes to seven a.m. — sabah yediye on dokuz var",
    keywords: ["nineteen minutes to seven a.m.", "sabah yediye on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:41.",
      "🇹🇷 Saat 06:41."
    ],
    examples: [],
    related_word_ids: [2401]
  },
  {
    id: "vocab-saat-2402",
    category: "vocabulary",
    title: "eighteen minutes to seven a.m. — sabah yediye on sekiz var",
    keywords: ["eighteen minutes to seven a.m.", "sabah yediye on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:42.",
      "🇹🇷 Saat 06:42."
    ],
    examples: [],
    related_word_ids: [2402]
  },
  {
    id: "vocab-saat-2403",
    category: "vocabulary",
    title: "seventeen minutes to seven a.m. — sabah yediye on yedi var",
    keywords: ["seventeen minutes to seven a.m.", "sabah yediye on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:43.",
      "🇹🇷 Saat 06:43."
    ],
    examples: [],
    related_word_ids: [2403]
  },
  {
    id: "vocab-saat-2404",
    category: "vocabulary",
    title: "sixteen minutes to seven a.m. — sabah yediye on altı var",
    keywords: ["sixteen minutes to seven a.m.", "sabah yediye on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:44.",
      "🇹🇷 Saat 06:44."
    ],
    examples: [],
    related_word_ids: [2404]
  },
  {
    id: "vocab-saat-2405",
    category: "vocabulary",
    title: "a quarter to seven a.m. — sabah yediye çeyrek var",
    keywords: ["a quarter to seven a.m.", "sabah yediye çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:45.",
      "🇹🇷 Saat 06:45."
    ],
    examples: [],
    related_word_ids: [2405]
  },
  {
    id: "vocab-saat-2406",
    category: "vocabulary",
    title: "fourteen minutes to seven a.m. — sabah yediye on dört var",
    keywords: ["fourteen minutes to seven a.m.", "sabah yediye on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:46.",
      "🇹🇷 Saat 06:46."
    ],
    examples: [],
    related_word_ids: [2406]
  },
  {
    id: "vocab-saat-2407",
    category: "vocabulary",
    title: "thirteen minutes to seven a.m. — sabah yediye on üç var",
    keywords: ["thirteen minutes to seven a.m.", "sabah yediye on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:47.",
      "🇹🇷 Saat 06:47."
    ],
    examples: [],
    related_word_ids: [2407]
  },
  {
    id: "vocab-saat-2408",
    category: "vocabulary",
    title: "twelve minutes to seven a.m. — sabah yediye on iki var",
    keywords: ["twelve minutes to seven a.m.", "sabah yediye on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:48.",
      "🇹🇷 Saat 06:48."
    ],
    examples: [],
    related_word_ids: [2408]
  },
  {
    id: "vocab-saat-2409",
    category: "vocabulary",
    title: "eleven minutes to seven a.m. — sabah yediye on bir var",
    keywords: ["eleven minutes to seven a.m.", "sabah yediye on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:49.",
      "🇹🇷 Saat 06:49."
    ],
    examples: [],
    related_word_ids: [2409]
  },
  {
    id: "vocab-saat-2410",
    category: "vocabulary",
    title: "ten to seven a.m. — sabah yediye on var",
    keywords: ["ten to seven a.m.", "sabah yediye on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:50.",
      "🇹🇷 Saat 06:50."
    ],
    examples: [],
    related_word_ids: [2410]
  },
  {
    id: "vocab-saat-2411",
    category: "vocabulary",
    title: "nine minutes to seven a.m. — sabah yediye dokuz var",
    keywords: ["nine minutes to seven a.m.", "sabah yediye dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:51.",
      "🇹🇷 Saat 06:51."
    ],
    examples: [],
    related_word_ids: [2411]
  },
  {
    id: "vocab-saat-2412",
    category: "vocabulary",
    title: "eight minutes to seven a.m. — sabah yediye sekiz var",
    keywords: ["eight minutes to seven a.m.", "sabah yediye sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:52.",
      "🇹🇷 Saat 06:52."
    ],
    examples: [],
    related_word_ids: [2412]
  },
  {
    id: "vocab-saat-2413",
    category: "vocabulary",
    title: "seven minutes to seven a.m. — sabah yediye yedi var",
    keywords: ["seven minutes to seven a.m.", "sabah yediye yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:53.",
      "🇹🇷 Saat 06:53."
    ],
    examples: [],
    related_word_ids: [2413]
  },
  {
    id: "vocab-saat-2414",
    category: "vocabulary",
    title: "six minutes to seven a.m. — sabah yediye altı var",
    keywords: ["six minutes to seven a.m.", "sabah yediye altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:54.",
      "🇹🇷 Saat 06:54."
    ],
    examples: [],
    related_word_ids: [2414]
  },
  {
    id: "vocab-saat-2415",
    category: "vocabulary",
    title: "five to seven a.m. — sabah yediye beş var",
    keywords: ["five to seven a.m.", "sabah yediye beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:55.",
      "🇹🇷 Saat 06:55."
    ],
    examples: [],
    related_word_ids: [2415]
  },
  {
    id: "vocab-saat-2416",
    category: "vocabulary",
    title: "four minutes to seven a.m. — sabah yediye dört var",
    keywords: ["four minutes to seven a.m.", "sabah yediye dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:56.",
      "🇹🇷 Saat 06:56."
    ],
    examples: [],
    related_word_ids: [2416]
  },
  {
    id: "vocab-saat-2417",
    category: "vocabulary",
    title: "three minutes to seven a.m. — sabah yediye üç var",
    keywords: ["three minutes to seven a.m.", "sabah yediye üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:57.",
      "🇹🇷 Saat 06:57."
    ],
    examples: [],
    related_word_ids: [2417]
  },
  {
    id: "vocab-saat-2418",
    category: "vocabulary",
    title: "two minutes to seven a.m. — sabah yediye iki var",
    keywords: ["two minutes to seven a.m.", "sabah yediye iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:58.",
      "🇹🇷 Saat 06:58."
    ],
    examples: [],
    related_word_ids: [2418]
  },
  {
    id: "vocab-saat-2419",
    category: "vocabulary",
    title: "one minute to seven a.m. — sabah yediye bir var",
    keywords: ["one minute to seven a.m.", "sabah yediye bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 06:59.",
      "🇹🇷 Saat 06:59."
    ],
    examples: [],
    related_word_ids: [2419]
  },
  {
    id: "vocab-saat-2420",
    category: "vocabulary",
    title: "seven o'clock a.m. — sabah yedi",
    keywords: ["seven o'clock a.m.", "sabah yedi", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:00.",
      "🇹🇷 Saat 07:00."
    ],
    examples: [],
    related_word_ids: [2420]
  },
  {
    id: "vocab-saat-2421",
    category: "vocabulary",
    title: "one minute past seven a.m. — sabah yediyi bir geçiyor",
    keywords: ["one minute past seven a.m.", "sabah yediyi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:01.",
      "🇹🇷 Saat 07:01."
    ],
    examples: [],
    related_word_ids: [2421]
  },
  {
    id: "vocab-saat-2422",
    category: "vocabulary",
    title: "two minutes past seven a.m. — sabah yediyi iki geçiyor",
    keywords: ["two minutes past seven a.m.", "sabah yediyi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:02.",
      "🇹🇷 Saat 07:02."
    ],
    examples: [],
    related_word_ids: [2422]
  },
  {
    id: "vocab-saat-2423",
    category: "vocabulary",
    title: "three minutes past seven a.m. — sabah yediyi üç geçiyor",
    keywords: ["three minutes past seven a.m.", "sabah yediyi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:03.",
      "🇹🇷 Saat 07:03."
    ],
    examples: [],
    related_word_ids: [2423]
  },
  {
    id: "vocab-saat-2424",
    category: "vocabulary",
    title: "four minutes past seven a.m. — sabah yediyi dört geçiyor",
    keywords: ["four minutes past seven a.m.", "sabah yediyi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:04.",
      "🇹🇷 Saat 07:04."
    ],
    examples: [],
    related_word_ids: [2424]
  },
  {
    id: "vocab-saat-2425",
    category: "vocabulary",
    title: "five past seven a.m. — sabah yediyi beş geçiyor",
    keywords: ["five past seven a.m.", "sabah yediyi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:05.",
      "🇹🇷 Saat 07:05."
    ],
    examples: [],
    related_word_ids: [2425]
  },
  {
    id: "vocab-saat-2426",
    category: "vocabulary",
    title: "six minutes past seven a.m. — sabah yediyi altı geçiyor",
    keywords: ["six minutes past seven a.m.", "sabah yediyi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:06.",
      "🇹🇷 Saat 07:06."
    ],
    examples: [],
    related_word_ids: [2426]
  },
  {
    id: "vocab-saat-2427",
    category: "vocabulary",
    title: "seven minutes past seven a.m. — sabah yediyi yedi geçiyor",
    keywords: ["seven minutes past seven a.m.", "sabah yediyi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:07.",
      "🇹🇷 Saat 07:07."
    ],
    examples: [],
    related_word_ids: [2427]
  },
  {
    id: "vocab-saat-2428",
    category: "vocabulary",
    title: "eight minutes past seven a.m. — sabah yediyi sekiz geçiyor",
    keywords: ["eight minutes past seven a.m.", "sabah yediyi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:08.",
      "🇹🇷 Saat 07:08."
    ],
    examples: [],
    related_word_ids: [2428]
  },
  {
    id: "vocab-saat-2429",
    category: "vocabulary",
    title: "nine minutes past seven a.m. — sabah yediyi dokuz geçiyor",
    keywords: ["nine minutes past seven a.m.", "sabah yediyi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:09.",
      "🇹🇷 Saat 07:09."
    ],
    examples: [],
    related_word_ids: [2429]
  },
  {
    id: "vocab-saat-2430",
    category: "vocabulary",
    title: "ten past seven a.m. — sabah yediyi on geçiyor",
    keywords: ["ten past seven a.m.", "sabah yediyi on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:10.",
      "🇹🇷 Saat 07:10."
    ],
    examples: [],
    related_word_ids: [2430]
  },
  {
    id: "vocab-saat-2431",
    category: "vocabulary",
    title: "eleven minutes past seven a.m. — sabah yediyi on bir geçiyor",
    keywords: ["eleven minutes past seven a.m.", "sabah yediyi on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:11.",
      "🇹🇷 Saat 07:11."
    ],
    examples: [],
    related_word_ids: [2431]
  },
  {
    id: "vocab-saat-2432",
    category: "vocabulary",
    title: "twelve minutes past seven a.m. — sabah yediyi on iki geçiyor",
    keywords: ["twelve minutes past seven a.m.", "sabah yediyi on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:12.",
      "🇹🇷 Saat 07:12."
    ],
    examples: [],
    related_word_ids: [2432]
  },
  {
    id: "vocab-saat-2433",
    category: "vocabulary",
    title: "thirteen minutes past seven a.m. — sabah yediyi on üç geçiyor",
    keywords: ["thirteen minutes past seven a.m.", "sabah yediyi on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:13.",
      "🇹🇷 Saat 07:13."
    ],
    examples: [],
    related_word_ids: [2433]
  },
  {
    id: "vocab-saat-2434",
    category: "vocabulary",
    title: "fourteen minutes past seven a.m. — sabah yediyi on dört geçiyor",
    keywords: ["fourteen minutes past seven a.m.", "sabah yediyi on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:14.",
      "🇹🇷 Saat 07:14."
    ],
    examples: [],
    related_word_ids: [2434]
  },
  {
    id: "vocab-saat-2435",
    category: "vocabulary",
    title: "a quarter past seven a.m. — sabah yediyi çeyrek geçiyor",
    keywords: ["a quarter past seven a.m.", "sabah yediyi çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:15.",
      "🇹🇷 Saat 07:15."
    ],
    examples: [],
    related_word_ids: [2435]
  },
  {
    id: "vocab-saat-2436",
    category: "vocabulary",
    title: "sixteen minutes past seven a.m. — sabah yediyi on altı geçiyor",
    keywords: ["sixteen minutes past seven a.m.", "sabah yediyi on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:16.",
      "🇹🇷 Saat 07:16."
    ],
    examples: [],
    related_word_ids: [2436]
  },
  {
    id: "vocab-saat-2437",
    category: "vocabulary",
    title: "seventeen minutes past seven a.m. — sabah yediyi on yedi geçiyor",
    keywords: ["seventeen minutes past seven a.m.", "sabah yediyi on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:17.",
      "🇹🇷 Saat 07:17."
    ],
    examples: [],
    related_word_ids: [2437]
  },
  {
    id: "vocab-saat-2438",
    category: "vocabulary",
    title: "eighteen minutes past seven a.m. — sabah yediyi on sekiz geçiyor",
    keywords: ["eighteen minutes past seven a.m.", "sabah yediyi on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:18.",
      "🇹🇷 Saat 07:18."
    ],
    examples: [],
    related_word_ids: [2438]
  },
  {
    id: "vocab-saat-2439",
    category: "vocabulary",
    title: "nineteen minutes past seven a.m. — sabah yediyi on dokuz geçiyor",
    keywords: ["nineteen minutes past seven a.m.", "sabah yediyi on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:19.",
      "🇹🇷 Saat 07:19."
    ],
    examples: [],
    related_word_ids: [2439]
  },
  {
    id: "vocab-saat-2440",
    category: "vocabulary",
    title: "twenty past seven a.m. — sabah yediyi yirmi geçiyor",
    keywords: ["twenty past seven a.m.", "sabah yediyi yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:20.",
      "🇹🇷 Saat 07:20."
    ],
    examples: [],
    related_word_ids: [2440]
  },
  {
    id: "vocab-saat-2441",
    category: "vocabulary",
    title: "twenty-one minutes past seven a.m. — sabah yediyi yirmi bir geçiyor",
    keywords: ["twenty-one minutes past seven a.m.", "sabah yediyi yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:21.",
      "🇹🇷 Saat 07:21."
    ],
    examples: [],
    related_word_ids: [2441]
  },
  {
    id: "vocab-saat-2442",
    category: "vocabulary",
    title: "twenty-two minutes past seven a.m. — sabah yediyi yirmi iki geçiyor",
    keywords: ["twenty-two minutes past seven a.m.", "sabah yediyi yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:22.",
      "🇹🇷 Saat 07:22."
    ],
    examples: [],
    related_word_ids: [2442]
  },
  {
    id: "vocab-saat-2443",
    category: "vocabulary",
    title: "twenty-three minutes past seven a.m. — sabah yediyi yirmi üç geçiyor",
    keywords: ["twenty-three minutes past seven a.m.", "sabah yediyi yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:23.",
      "🇹🇷 Saat 07:23."
    ],
    examples: [],
    related_word_ids: [2443]
  },
  {
    id: "vocab-saat-2444",
    category: "vocabulary",
    title: "twenty-four minutes past seven a.m. — sabah yediyi yirmi dört geçiyor",
    keywords: ["twenty-four minutes past seven a.m.", "sabah yediyi yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:24.",
      "🇹🇷 Saat 07:24."
    ],
    examples: [],
    related_word_ids: [2444]
  },
  {
    id: "vocab-saat-2445",
    category: "vocabulary",
    title: "twenty-five past seven a.m. — sabah yediyi yirmi beş geçiyor",
    keywords: ["twenty-five past seven a.m.", "sabah yediyi yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:25.",
      "🇹🇷 Saat 07:25."
    ],
    examples: [],
    related_word_ids: [2445]
  },
  {
    id: "vocab-saat-2446",
    category: "vocabulary",
    title: "twenty-six minutes past seven a.m. — sabah yediyi yirmi altı geçiyor",
    keywords: ["twenty-six minutes past seven a.m.", "sabah yediyi yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:26.",
      "🇹🇷 Saat 07:26."
    ],
    examples: [],
    related_word_ids: [2446]
  },
  {
    id: "vocab-saat-2447",
    category: "vocabulary",
    title: "twenty-seven minutes past seven a.m. — sabah yediyi yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past seven a.m.", "sabah yediyi yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:27.",
      "🇹🇷 Saat 07:27."
    ],
    examples: [],
    related_word_ids: [2447]
  },
  {
    id: "vocab-saat-2448",
    category: "vocabulary",
    title: "twenty-eight minutes past seven a.m. — sabah yediyi yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past seven a.m.", "sabah yediyi yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:28.",
      "🇹🇷 Saat 07:28."
    ],
    examples: [],
    related_word_ids: [2448]
  },
  {
    id: "vocab-saat-2449",
    category: "vocabulary",
    title: "twenty-nine minutes past seven a.m. — sabah yediyi yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past seven a.m.", "sabah yediyi yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:29.",
      "🇹🇷 Saat 07:29."
    ],
    examples: [],
    related_word_ids: [2449]
  },
  {
    id: "vocab-saat-2450",
    category: "vocabulary",
    title: "half past seven a.m. — sabah yedi buçuk",
    keywords: ["half past seven a.m.", "sabah yedi buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:30.",
      "🇹🇷 Saat 07:30."
    ],
    examples: [],
    related_word_ids: [2450]
  },
  {
    id: "vocab-saat-2451",
    category: "vocabulary",
    title: "twenty-nine minutes to eight a.m. — sabah sekize yirmi dokuz var",
    keywords: ["twenty-nine minutes to eight a.m.", "sabah sekize yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:31.",
      "🇹🇷 Saat 07:31."
    ],
    examples: [],
    related_word_ids: [2451]
  },
  {
    id: "vocab-saat-2452",
    category: "vocabulary",
    title: "twenty-eight minutes to eight a.m. — sabah sekize yirmi sekiz var",
    keywords: ["twenty-eight minutes to eight a.m.", "sabah sekize yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:32.",
      "🇹🇷 Saat 07:32."
    ],
    examples: [],
    related_word_ids: [2452]
  },
  {
    id: "vocab-saat-2453",
    category: "vocabulary",
    title: "twenty-seven minutes to eight a.m. — sabah sekize yirmi yedi var",
    keywords: ["twenty-seven minutes to eight a.m.", "sabah sekize yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:33.",
      "🇹🇷 Saat 07:33."
    ],
    examples: [],
    related_word_ids: [2453]
  },
  {
    id: "vocab-saat-2454",
    category: "vocabulary",
    title: "twenty-six minutes to eight a.m. — sabah sekize yirmi altı var",
    keywords: ["twenty-six minutes to eight a.m.", "sabah sekize yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:34.",
      "🇹🇷 Saat 07:34."
    ],
    examples: [],
    related_word_ids: [2454]
  },
  {
    id: "vocab-saat-2455",
    category: "vocabulary",
    title: "twenty-five to eight a.m. — sabah sekize yirmi beş var",
    keywords: ["twenty-five to eight a.m.", "sabah sekize yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:35.",
      "🇹🇷 Saat 07:35."
    ],
    examples: [],
    related_word_ids: [2455]
  },
  {
    id: "vocab-saat-2456",
    category: "vocabulary",
    title: "twenty-four minutes to eight a.m. — sabah sekize yirmi dört var",
    keywords: ["twenty-four minutes to eight a.m.", "sabah sekize yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:36.",
      "🇹🇷 Saat 07:36."
    ],
    examples: [],
    related_word_ids: [2456]
  },
  {
    id: "vocab-saat-2457",
    category: "vocabulary",
    title: "twenty-three minutes to eight a.m. — sabah sekize yirmi üç var",
    keywords: ["twenty-three minutes to eight a.m.", "sabah sekize yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:37.",
      "🇹🇷 Saat 07:37."
    ],
    examples: [],
    related_word_ids: [2457]
  },
  {
    id: "vocab-saat-2458",
    category: "vocabulary",
    title: "twenty-two minutes to eight a.m. — sabah sekize yirmi iki var",
    keywords: ["twenty-two minutes to eight a.m.", "sabah sekize yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:38.",
      "🇹🇷 Saat 07:38."
    ],
    examples: [],
    related_word_ids: [2458]
  },
  {
    id: "vocab-saat-2459",
    category: "vocabulary",
    title: "twenty-one minutes to eight a.m. — sabah sekize yirmi bir var",
    keywords: ["twenty-one minutes to eight a.m.", "sabah sekize yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:39.",
      "🇹🇷 Saat 07:39."
    ],
    examples: [],
    related_word_ids: [2459]
  },
  {
    id: "vocab-saat-2460",
    category: "vocabulary",
    title: "twenty to eight a.m. — sabah sekize yirmi var",
    keywords: ["twenty to eight a.m.", "sabah sekize yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:40.",
      "🇹🇷 Saat 07:40."
    ],
    examples: [],
    related_word_ids: [2460]
  },
  {
    id: "vocab-saat-2461",
    category: "vocabulary",
    title: "nineteen minutes to eight a.m. — sabah sekize on dokuz var",
    keywords: ["nineteen minutes to eight a.m.", "sabah sekize on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:41.",
      "🇹🇷 Saat 07:41."
    ],
    examples: [],
    related_word_ids: [2461]
  },
  {
    id: "vocab-saat-2462",
    category: "vocabulary",
    title: "eighteen minutes to eight a.m. — sabah sekize on sekiz var",
    keywords: ["eighteen minutes to eight a.m.", "sabah sekize on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:42.",
      "🇹🇷 Saat 07:42."
    ],
    examples: [],
    related_word_ids: [2462]
  },
  {
    id: "vocab-saat-2463",
    category: "vocabulary",
    title: "seventeen minutes to eight a.m. — sabah sekize on yedi var",
    keywords: ["seventeen minutes to eight a.m.", "sabah sekize on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:43.",
      "🇹🇷 Saat 07:43."
    ],
    examples: [],
    related_word_ids: [2463]
  },
  {
    id: "vocab-saat-2464",
    category: "vocabulary",
    title: "sixteen minutes to eight a.m. — sabah sekize on altı var",
    keywords: ["sixteen minutes to eight a.m.", "sabah sekize on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:44.",
      "🇹🇷 Saat 07:44."
    ],
    examples: [],
    related_word_ids: [2464]
  },
  {
    id: "vocab-saat-2465",
    category: "vocabulary",
    title: "a quarter to eight a.m. — sabah sekize çeyrek var",
    keywords: ["a quarter to eight a.m.", "sabah sekize çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:45.",
      "🇹🇷 Saat 07:45."
    ],
    examples: [],
    related_word_ids: [2465]
  },
  {
    id: "vocab-saat-2466",
    category: "vocabulary",
    title: "fourteen minutes to eight a.m. — sabah sekize on dört var",
    keywords: ["fourteen minutes to eight a.m.", "sabah sekize on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:46.",
      "🇹🇷 Saat 07:46."
    ],
    examples: [],
    related_word_ids: [2466]
  },
  {
    id: "vocab-saat-2467",
    category: "vocabulary",
    title: "thirteen minutes to eight a.m. — sabah sekize on üç var",
    keywords: ["thirteen minutes to eight a.m.", "sabah sekize on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:47.",
      "🇹🇷 Saat 07:47."
    ],
    examples: [],
    related_word_ids: [2467]
  },
  {
    id: "vocab-saat-2468",
    category: "vocabulary",
    title: "twelve minutes to eight a.m. — sabah sekize on iki var",
    keywords: ["twelve minutes to eight a.m.", "sabah sekize on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:48.",
      "🇹🇷 Saat 07:48."
    ],
    examples: [],
    related_word_ids: [2468]
  },
  {
    id: "vocab-saat-2469",
    category: "vocabulary",
    title: "eleven minutes to eight a.m. — sabah sekize on bir var",
    keywords: ["eleven minutes to eight a.m.", "sabah sekize on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:49.",
      "🇹🇷 Saat 07:49."
    ],
    examples: [],
    related_word_ids: [2469]
  },
  {
    id: "vocab-saat-2470",
    category: "vocabulary",
    title: "ten to eight a.m. — sabah sekize on var",
    keywords: ["ten to eight a.m.", "sabah sekize on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:50.",
      "🇹🇷 Saat 07:50."
    ],
    examples: [],
    related_word_ids: [2470]
  },
  {
    id: "vocab-saat-2471",
    category: "vocabulary",
    title: "nine minutes to eight a.m. — sabah sekize dokuz var",
    keywords: ["nine minutes to eight a.m.", "sabah sekize dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:51.",
      "🇹🇷 Saat 07:51."
    ],
    examples: [],
    related_word_ids: [2471]
  },
  {
    id: "vocab-saat-2472",
    category: "vocabulary",
    title: "eight minutes to eight a.m. — sabah sekize sekiz var",
    keywords: ["eight minutes to eight a.m.", "sabah sekize sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:52.",
      "🇹🇷 Saat 07:52."
    ],
    examples: [],
    related_word_ids: [2472]
  },
  {
    id: "vocab-saat-2473",
    category: "vocabulary",
    title: "seven minutes to eight a.m. — sabah sekize yedi var",
    keywords: ["seven minutes to eight a.m.", "sabah sekize yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:53.",
      "🇹🇷 Saat 07:53."
    ],
    examples: [],
    related_word_ids: [2473]
  },
  {
    id: "vocab-saat-2474",
    category: "vocabulary",
    title: "six minutes to eight a.m. — sabah sekize altı var",
    keywords: ["six minutes to eight a.m.", "sabah sekize altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:54.",
      "🇹🇷 Saat 07:54."
    ],
    examples: [],
    related_word_ids: [2474]
  },
  {
    id: "vocab-saat-2475",
    category: "vocabulary",
    title: "five to eight a.m. — sabah sekize beş var",
    keywords: ["five to eight a.m.", "sabah sekize beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:55.",
      "🇹🇷 Saat 07:55."
    ],
    examples: [],
    related_word_ids: [2475]
  },
  {
    id: "vocab-saat-2476",
    category: "vocabulary",
    title: "four minutes to eight a.m. — sabah sekize dört var",
    keywords: ["four minutes to eight a.m.", "sabah sekize dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:56.",
      "🇹🇷 Saat 07:56."
    ],
    examples: [],
    related_word_ids: [2476]
  },
  {
    id: "vocab-saat-2477",
    category: "vocabulary",
    title: "three minutes to eight a.m. — sabah sekize üç var",
    keywords: ["three minutes to eight a.m.", "sabah sekize üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:57.",
      "🇹🇷 Saat 07:57."
    ],
    examples: [],
    related_word_ids: [2477]
  },
  {
    id: "vocab-saat-2478",
    category: "vocabulary",
    title: "two minutes to eight a.m. — sabah sekize iki var",
    keywords: ["two minutes to eight a.m.", "sabah sekize iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:58.",
      "🇹🇷 Saat 07:58."
    ],
    examples: [],
    related_word_ids: [2478]
  },
  {
    id: "vocab-saat-2479",
    category: "vocabulary",
    title: "one minute to eight a.m. — sabah sekize bir var",
    keywords: ["one minute to eight a.m.", "sabah sekize bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 07:59.",
      "🇹🇷 Saat 07:59."
    ],
    examples: [],
    related_word_ids: [2479]
  },
  {
    id: "vocab-saat-2480",
    category: "vocabulary",
    title: "eight o'clock a.m. — sabah sekiz",
    keywords: ["eight o'clock a.m.", "sabah sekiz", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:00.",
      "🇹🇷 Saat 08:00."
    ],
    examples: [],
    related_word_ids: [2480]
  },
  {
    id: "vocab-saat-2481",
    category: "vocabulary",
    title: "one minute past eight a.m. — sabah sekizi bir geçiyor",
    keywords: ["one minute past eight a.m.", "sabah sekizi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:01.",
      "🇹🇷 Saat 08:01."
    ],
    examples: [],
    related_word_ids: [2481]
  },
  {
    id: "vocab-saat-2482",
    category: "vocabulary",
    title: "two minutes past eight a.m. — sabah sekizi iki geçiyor",
    keywords: ["two minutes past eight a.m.", "sabah sekizi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:02.",
      "🇹🇷 Saat 08:02."
    ],
    examples: [],
    related_word_ids: [2482]
  },
  {
    id: "vocab-saat-2483",
    category: "vocabulary",
    title: "three minutes past eight a.m. — sabah sekizi üç geçiyor",
    keywords: ["three minutes past eight a.m.", "sabah sekizi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:03.",
      "🇹🇷 Saat 08:03."
    ],
    examples: [],
    related_word_ids: [2483]
  },
  {
    id: "vocab-saat-2484",
    category: "vocabulary",
    title: "four minutes past eight a.m. — sabah sekizi dört geçiyor",
    keywords: ["four minutes past eight a.m.", "sabah sekizi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:04.",
      "🇹🇷 Saat 08:04."
    ],
    examples: [],
    related_word_ids: [2484]
  },
  {
    id: "vocab-saat-2485",
    category: "vocabulary",
    title: "five past eight a.m. — sabah sekizi beş geçiyor",
    keywords: ["five past eight a.m.", "sabah sekizi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:05.",
      "🇹🇷 Saat 08:05."
    ],
    examples: [],
    related_word_ids: [2485]
  },
  {
    id: "vocab-saat-2486",
    category: "vocabulary",
    title: "six minutes past eight a.m. — sabah sekizi altı geçiyor",
    keywords: ["six minutes past eight a.m.", "sabah sekizi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:06.",
      "🇹🇷 Saat 08:06."
    ],
    examples: [],
    related_word_ids: [2486]
  },
  {
    id: "vocab-saat-2487",
    category: "vocabulary",
    title: "seven minutes past eight a.m. — sabah sekizi yedi geçiyor",
    keywords: ["seven minutes past eight a.m.", "sabah sekizi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:07.",
      "🇹🇷 Saat 08:07."
    ],
    examples: [],
    related_word_ids: [2487]
  },
  {
    id: "vocab-saat-2488",
    category: "vocabulary",
    title: "eight minutes past eight a.m. — sabah sekizi sekiz geçiyor",
    keywords: ["eight minutes past eight a.m.", "sabah sekizi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:08.",
      "🇹🇷 Saat 08:08."
    ],
    examples: [],
    related_word_ids: [2488]
  },
  {
    id: "vocab-saat-2489",
    category: "vocabulary",
    title: "nine minutes past eight a.m. — sabah sekizi dokuz geçiyor",
    keywords: ["nine minutes past eight a.m.", "sabah sekizi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:09.",
      "🇹🇷 Saat 08:09."
    ],
    examples: [],
    related_word_ids: [2489]
  },
  {
    id: "vocab-saat-2490",
    category: "vocabulary",
    title: "ten past eight a.m. — sabah sekizi on geçiyor",
    keywords: ["ten past eight a.m.", "sabah sekizi on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:10.",
      "🇹🇷 Saat 08:10."
    ],
    examples: [],
    related_word_ids: [2490]
  },
  {
    id: "vocab-saat-2491",
    category: "vocabulary",
    title: "eleven minutes past eight a.m. — sabah sekizi on bir geçiyor",
    keywords: ["eleven minutes past eight a.m.", "sabah sekizi on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:11.",
      "🇹🇷 Saat 08:11."
    ],
    examples: [],
    related_word_ids: [2491]
  },
  {
    id: "vocab-saat-2492",
    category: "vocabulary",
    title: "twelve minutes past eight a.m. — sabah sekizi on iki geçiyor",
    keywords: ["twelve minutes past eight a.m.", "sabah sekizi on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:12.",
      "🇹🇷 Saat 08:12."
    ],
    examples: [],
    related_word_ids: [2492]
  },
  {
    id: "vocab-saat-2493",
    category: "vocabulary",
    title: "thirteen minutes past eight a.m. — sabah sekizi on üç geçiyor",
    keywords: ["thirteen minutes past eight a.m.", "sabah sekizi on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:13.",
      "🇹🇷 Saat 08:13."
    ],
    examples: [],
    related_word_ids: [2493]
  },
  {
    id: "vocab-saat-2494",
    category: "vocabulary",
    title: "fourteen minutes past eight a.m. — sabah sekizi on dört geçiyor",
    keywords: ["fourteen minutes past eight a.m.", "sabah sekizi on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:14.",
      "🇹🇷 Saat 08:14."
    ],
    examples: [],
    related_word_ids: [2494]
  },
  {
    id: "vocab-saat-2495",
    category: "vocabulary",
    title: "a quarter past eight a.m. — sabah sekizi çeyrek geçiyor",
    keywords: ["a quarter past eight a.m.", "sabah sekizi çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:15.",
      "🇹🇷 Saat 08:15."
    ],
    examples: [],
    related_word_ids: [2495]
  },
  {
    id: "vocab-saat-2496",
    category: "vocabulary",
    title: "sixteen minutes past eight a.m. — sabah sekizi on altı geçiyor",
    keywords: ["sixteen minutes past eight a.m.", "sabah sekizi on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:16.",
      "🇹🇷 Saat 08:16."
    ],
    examples: [],
    related_word_ids: [2496]
  },
  {
    id: "vocab-saat-2497",
    category: "vocabulary",
    title: "seventeen minutes past eight a.m. — sabah sekizi on yedi geçiyor",
    keywords: ["seventeen minutes past eight a.m.", "sabah sekizi on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:17.",
      "🇹🇷 Saat 08:17."
    ],
    examples: [],
    related_word_ids: [2497]
  },
  {
    id: "vocab-saat-2498",
    category: "vocabulary",
    title: "eighteen minutes past eight a.m. — sabah sekizi on sekiz geçiyor",
    keywords: ["eighteen minutes past eight a.m.", "sabah sekizi on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:18.",
      "🇹🇷 Saat 08:18."
    ],
    examples: [],
    related_word_ids: [2498]
  },
  {
    id: "vocab-saat-2499",
    category: "vocabulary",
    title: "nineteen minutes past eight a.m. — sabah sekizi on dokuz geçiyor",
    keywords: ["nineteen minutes past eight a.m.", "sabah sekizi on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:19.",
      "🇹🇷 Saat 08:19."
    ],
    examples: [],
    related_word_ids: [2499]
  },
  {
    id: "vocab-saat-2500",
    category: "vocabulary",
    title: "twenty past eight a.m. — sabah sekizi yirmi geçiyor",
    keywords: ["twenty past eight a.m.", "sabah sekizi yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:20.",
      "🇹🇷 Saat 08:20."
    ],
    examples: [],
    related_word_ids: [2500]
  },
  {
    id: "vocab-saat-2501",
    category: "vocabulary",
    title: "twenty-one minutes past eight a.m. — sabah sekizi yirmi bir geçiyor",
    keywords: ["twenty-one minutes past eight a.m.", "sabah sekizi yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:21.",
      "🇹🇷 Saat 08:21."
    ],
    examples: [],
    related_word_ids: [2501]
  },
  {
    id: "vocab-saat-2502",
    category: "vocabulary",
    title: "twenty-two minutes past eight a.m. — sabah sekizi yirmi iki geçiyor",
    keywords: ["twenty-two minutes past eight a.m.", "sabah sekizi yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:22.",
      "🇹🇷 Saat 08:22."
    ],
    examples: [],
    related_word_ids: [2502]
  },
  {
    id: "vocab-saat-2503",
    category: "vocabulary",
    title: "twenty-three minutes past eight a.m. — sabah sekizi yirmi üç geçiyor",
    keywords: ["twenty-three minutes past eight a.m.", "sabah sekizi yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:23.",
      "🇹🇷 Saat 08:23."
    ],
    examples: [],
    related_word_ids: [2503]
  },
  {
    id: "vocab-saat-2504",
    category: "vocabulary",
    title: "twenty-four minutes past eight a.m. — sabah sekizi yirmi dört geçiyor",
    keywords: ["twenty-four minutes past eight a.m.", "sabah sekizi yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:24.",
      "🇹🇷 Saat 08:24."
    ],
    examples: [],
    related_word_ids: [2504]
  },
  {
    id: "vocab-saat-2505",
    category: "vocabulary",
    title: "twenty-five past eight a.m. — sabah sekizi yirmi beş geçiyor",
    keywords: ["twenty-five past eight a.m.", "sabah sekizi yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:25.",
      "🇹🇷 Saat 08:25."
    ],
    examples: [],
    related_word_ids: [2505]
  },
  {
    id: "vocab-saat-2506",
    category: "vocabulary",
    title: "twenty-six minutes past eight a.m. — sabah sekizi yirmi altı geçiyor",
    keywords: ["twenty-six minutes past eight a.m.", "sabah sekizi yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:26.",
      "🇹🇷 Saat 08:26."
    ],
    examples: [],
    related_word_ids: [2506]
  },
  {
    id: "vocab-saat-2507",
    category: "vocabulary",
    title: "twenty-seven minutes past eight a.m. — sabah sekizi yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past eight a.m.", "sabah sekizi yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:27.",
      "🇹🇷 Saat 08:27."
    ],
    examples: [],
    related_word_ids: [2507]
  },
  {
    id: "vocab-saat-2508",
    category: "vocabulary",
    title: "twenty-eight minutes past eight a.m. — sabah sekizi yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past eight a.m.", "sabah sekizi yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:28.",
      "🇹🇷 Saat 08:28."
    ],
    examples: [],
    related_word_ids: [2508]
  },
  {
    id: "vocab-saat-2509",
    category: "vocabulary",
    title: "twenty-nine minutes past eight a.m. — sabah sekizi yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past eight a.m.", "sabah sekizi yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:29.",
      "🇹🇷 Saat 08:29."
    ],
    examples: [],
    related_word_ids: [2509]
  },
  {
    id: "vocab-saat-2510",
    category: "vocabulary",
    title: "half past eight a.m. — sabah sekiz buçuk",
    keywords: ["half past eight a.m.", "sabah sekiz buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:30.",
      "🇹🇷 Saat 08:30."
    ],
    examples: [],
    related_word_ids: [2510]
  },
  {
    id: "vocab-saat-2511",
    category: "vocabulary",
    title: "twenty-nine minutes to nine a.m. — sabah dokuza yirmi dokuz var",
    keywords: ["twenty-nine minutes to nine a.m.", "sabah dokuza yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:31.",
      "🇹🇷 Saat 08:31."
    ],
    examples: [],
    related_word_ids: [2511]
  },
  {
    id: "vocab-saat-2512",
    category: "vocabulary",
    title: "twenty-eight minutes to nine a.m. — sabah dokuza yirmi sekiz var",
    keywords: ["twenty-eight minutes to nine a.m.", "sabah dokuza yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:32.",
      "🇹🇷 Saat 08:32."
    ],
    examples: [],
    related_word_ids: [2512]
  },
  {
    id: "vocab-saat-2513",
    category: "vocabulary",
    title: "twenty-seven minutes to nine a.m. — sabah dokuza yirmi yedi var",
    keywords: ["twenty-seven minutes to nine a.m.", "sabah dokuza yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:33.",
      "🇹🇷 Saat 08:33."
    ],
    examples: [],
    related_word_ids: [2513]
  },
  {
    id: "vocab-saat-2514",
    category: "vocabulary",
    title: "twenty-six minutes to nine a.m. — sabah dokuza yirmi altı var",
    keywords: ["twenty-six minutes to nine a.m.", "sabah dokuza yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:34.",
      "🇹🇷 Saat 08:34."
    ],
    examples: [],
    related_word_ids: [2514]
  },
  {
    id: "vocab-saat-2515",
    category: "vocabulary",
    title: "twenty-five to nine a.m. — sabah dokuza yirmi beş var",
    keywords: ["twenty-five to nine a.m.", "sabah dokuza yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:35.",
      "🇹🇷 Saat 08:35."
    ],
    examples: [],
    related_word_ids: [2515]
  },
  {
    id: "vocab-saat-2516",
    category: "vocabulary",
    title: "twenty-four minutes to nine a.m. — sabah dokuza yirmi dört var",
    keywords: ["twenty-four minutes to nine a.m.", "sabah dokuza yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:36.",
      "🇹🇷 Saat 08:36."
    ],
    examples: [],
    related_word_ids: [2516]
  },
  {
    id: "vocab-saat-2517",
    category: "vocabulary",
    title: "twenty-three minutes to nine a.m. — sabah dokuza yirmi üç var",
    keywords: ["twenty-three minutes to nine a.m.", "sabah dokuza yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:37.",
      "🇹🇷 Saat 08:37."
    ],
    examples: [],
    related_word_ids: [2517]
  },
  {
    id: "vocab-saat-2518",
    category: "vocabulary",
    title: "twenty-two minutes to nine a.m. — sabah dokuza yirmi iki var",
    keywords: ["twenty-two minutes to nine a.m.", "sabah dokuza yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:38.",
      "🇹🇷 Saat 08:38."
    ],
    examples: [],
    related_word_ids: [2518]
  },
  {
    id: "vocab-saat-2519",
    category: "vocabulary",
    title: "twenty-one minutes to nine a.m. — sabah dokuza yirmi bir var",
    keywords: ["twenty-one minutes to nine a.m.", "sabah dokuza yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:39.",
      "🇹🇷 Saat 08:39."
    ],
    examples: [],
    related_word_ids: [2519]
  },
  {
    id: "vocab-saat-2520",
    category: "vocabulary",
    title: "twenty to nine a.m. — sabah dokuza yirmi var",
    keywords: ["twenty to nine a.m.", "sabah dokuza yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:40.",
      "🇹🇷 Saat 08:40."
    ],
    examples: [],
    related_word_ids: [2520]
  },
  {
    id: "vocab-saat-2521",
    category: "vocabulary",
    title: "nineteen minutes to nine a.m. — sabah dokuza on dokuz var",
    keywords: ["nineteen minutes to nine a.m.", "sabah dokuza on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:41.",
      "🇹🇷 Saat 08:41."
    ],
    examples: [],
    related_word_ids: [2521]
  },
  {
    id: "vocab-saat-2522",
    category: "vocabulary",
    title: "eighteen minutes to nine a.m. — sabah dokuza on sekiz var",
    keywords: ["eighteen minutes to nine a.m.", "sabah dokuza on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:42.",
      "🇹🇷 Saat 08:42."
    ],
    examples: [],
    related_word_ids: [2522]
  },
  {
    id: "vocab-saat-2523",
    category: "vocabulary",
    title: "seventeen minutes to nine a.m. — sabah dokuza on yedi var",
    keywords: ["seventeen minutes to nine a.m.", "sabah dokuza on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:43.",
      "🇹🇷 Saat 08:43."
    ],
    examples: [],
    related_word_ids: [2523]
  },
  {
    id: "vocab-saat-2524",
    category: "vocabulary",
    title: "sixteen minutes to nine a.m. — sabah dokuza on altı var",
    keywords: ["sixteen minutes to nine a.m.", "sabah dokuza on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:44.",
      "🇹🇷 Saat 08:44."
    ],
    examples: [],
    related_word_ids: [2524]
  },
  {
    id: "vocab-saat-2525",
    category: "vocabulary",
    title: "a quarter to nine a.m. — sabah dokuza çeyrek var",
    keywords: ["a quarter to nine a.m.", "sabah dokuza çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:45.",
      "🇹🇷 Saat 08:45."
    ],
    examples: [],
    related_word_ids: [2525]
  },
  {
    id: "vocab-saat-2526",
    category: "vocabulary",
    title: "fourteen minutes to nine a.m. — sabah dokuza on dört var",
    keywords: ["fourteen minutes to nine a.m.", "sabah dokuza on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:46.",
      "🇹🇷 Saat 08:46."
    ],
    examples: [],
    related_word_ids: [2526]
  },
  {
    id: "vocab-saat-2527",
    category: "vocabulary",
    title: "thirteen minutes to nine a.m. — sabah dokuza on üç var",
    keywords: ["thirteen minutes to nine a.m.", "sabah dokuza on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:47.",
      "🇹🇷 Saat 08:47."
    ],
    examples: [],
    related_word_ids: [2527]
  },
  {
    id: "vocab-saat-2528",
    category: "vocabulary",
    title: "twelve minutes to nine a.m. — sabah dokuza on iki var",
    keywords: ["twelve minutes to nine a.m.", "sabah dokuza on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:48.",
      "🇹🇷 Saat 08:48."
    ],
    examples: [],
    related_word_ids: [2528]
  },
  {
    id: "vocab-saat-2529",
    category: "vocabulary",
    title: "eleven minutes to nine a.m. — sabah dokuza on bir var",
    keywords: ["eleven minutes to nine a.m.", "sabah dokuza on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:49.",
      "🇹🇷 Saat 08:49."
    ],
    examples: [],
    related_word_ids: [2529]
  },
  {
    id: "vocab-saat-2530",
    category: "vocabulary",
    title: "ten to nine a.m. — sabah dokuza on var",
    keywords: ["ten to nine a.m.", "sabah dokuza on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:50.",
      "🇹🇷 Saat 08:50."
    ],
    examples: [],
    related_word_ids: [2530]
  },
  {
    id: "vocab-saat-2531",
    category: "vocabulary",
    title: "nine minutes to nine a.m. — sabah dokuza dokuz var",
    keywords: ["nine minutes to nine a.m.", "sabah dokuza dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:51.",
      "🇹🇷 Saat 08:51."
    ],
    examples: [],
    related_word_ids: [2531]
  },
  {
    id: "vocab-saat-2532",
    category: "vocabulary",
    title: "eight minutes to nine a.m. — sabah dokuza sekiz var",
    keywords: ["eight minutes to nine a.m.", "sabah dokuza sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:52.",
      "🇹🇷 Saat 08:52."
    ],
    examples: [],
    related_word_ids: [2532]
  },
  {
    id: "vocab-saat-2533",
    category: "vocabulary",
    title: "seven minutes to nine a.m. — sabah dokuza yedi var",
    keywords: ["seven minutes to nine a.m.", "sabah dokuza yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:53.",
      "🇹🇷 Saat 08:53."
    ],
    examples: [],
    related_word_ids: [2533]
  },
  {
    id: "vocab-saat-2534",
    category: "vocabulary",
    title: "six minutes to nine a.m. — sabah dokuza altı var",
    keywords: ["six minutes to nine a.m.", "sabah dokuza altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:54.",
      "🇹🇷 Saat 08:54."
    ],
    examples: [],
    related_word_ids: [2534]
  },
  {
    id: "vocab-saat-2535",
    category: "vocabulary",
    title: "five to nine a.m. — sabah dokuza beş var",
    keywords: ["five to nine a.m.", "sabah dokuza beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:55.",
      "🇹🇷 Saat 08:55."
    ],
    examples: [],
    related_word_ids: [2535]
  },
  {
    id: "vocab-saat-2536",
    category: "vocabulary",
    title: "four minutes to nine a.m. — sabah dokuza dört var",
    keywords: ["four minutes to nine a.m.", "sabah dokuza dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:56.",
      "🇹🇷 Saat 08:56."
    ],
    examples: [],
    related_word_ids: [2536]
  },
  {
    id: "vocab-saat-2537",
    category: "vocabulary",
    title: "three minutes to nine a.m. — sabah dokuza üç var",
    keywords: ["three minutes to nine a.m.", "sabah dokuza üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:57.",
      "🇹🇷 Saat 08:57."
    ],
    examples: [],
    related_word_ids: [2537]
  },
  {
    id: "vocab-saat-2538",
    category: "vocabulary",
    title: "two minutes to nine a.m. — sabah dokuza iki var",
    keywords: ["two minutes to nine a.m.", "sabah dokuza iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:58.",
      "🇹🇷 Saat 08:58."
    ],
    examples: [],
    related_word_ids: [2538]
  },
  {
    id: "vocab-saat-2539",
    category: "vocabulary",
    title: "one minute to nine a.m. — sabah dokuza bir var",
    keywords: ["one minute to nine a.m.", "sabah dokuza bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 08:59.",
      "🇹🇷 Saat 08:59."
    ],
    examples: [],
    related_word_ids: [2539]
  },
  {
    id: "vocab-saat-2540",
    category: "vocabulary",
    title: "nine o'clock a.m. — sabah dokuz",
    keywords: ["nine o'clock a.m.", "sabah dokuz", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:00.",
      "🇹🇷 Saat 09:00."
    ],
    examples: [],
    related_word_ids: [2540]
  },
  {
    id: "vocab-saat-2541",
    category: "vocabulary",
    title: "one minute past nine a.m. — sabah dokuzu bir geçiyor",
    keywords: ["one minute past nine a.m.", "sabah dokuzu bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:01.",
      "🇹🇷 Saat 09:01."
    ],
    examples: [],
    related_word_ids: [2541]
  },
  {
    id: "vocab-saat-2542",
    category: "vocabulary",
    title: "two minutes past nine a.m. — sabah dokuzu iki geçiyor",
    keywords: ["two minutes past nine a.m.", "sabah dokuzu iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:02.",
      "🇹🇷 Saat 09:02."
    ],
    examples: [],
    related_word_ids: [2542]
  },
  {
    id: "vocab-saat-2543",
    category: "vocabulary",
    title: "three minutes past nine a.m. — sabah dokuzu üç geçiyor",
    keywords: ["three minutes past nine a.m.", "sabah dokuzu üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:03.",
      "🇹🇷 Saat 09:03."
    ],
    examples: [],
    related_word_ids: [2543]
  },
  {
    id: "vocab-saat-2544",
    category: "vocabulary",
    title: "four minutes past nine a.m. — sabah dokuzu dört geçiyor",
    keywords: ["four minutes past nine a.m.", "sabah dokuzu dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:04.",
      "🇹🇷 Saat 09:04."
    ],
    examples: [],
    related_word_ids: [2544]
  },
  {
    id: "vocab-saat-2545",
    category: "vocabulary",
    title: "five past nine a.m. — sabah dokuzu beş geçiyor",
    keywords: ["five past nine a.m.", "sabah dokuzu beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:05.",
      "🇹🇷 Saat 09:05."
    ],
    examples: [],
    related_word_ids: [2545]
  },
  {
    id: "vocab-saat-2546",
    category: "vocabulary",
    title: "six minutes past nine a.m. — sabah dokuzu altı geçiyor",
    keywords: ["six minutes past nine a.m.", "sabah dokuzu altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:06.",
      "🇹🇷 Saat 09:06."
    ],
    examples: [],
    related_word_ids: [2546]
  },
  {
    id: "vocab-saat-2547",
    category: "vocabulary",
    title: "seven minutes past nine a.m. — sabah dokuzu yedi geçiyor",
    keywords: ["seven minutes past nine a.m.", "sabah dokuzu yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:07.",
      "🇹🇷 Saat 09:07."
    ],
    examples: [],
    related_word_ids: [2547]
  },
  {
    id: "vocab-saat-2548",
    category: "vocabulary",
    title: "eight minutes past nine a.m. — sabah dokuzu sekiz geçiyor",
    keywords: ["eight minutes past nine a.m.", "sabah dokuzu sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:08.",
      "🇹🇷 Saat 09:08."
    ],
    examples: [],
    related_word_ids: [2548]
  },
  {
    id: "vocab-saat-2549",
    category: "vocabulary",
    title: "nine minutes past nine a.m. — sabah dokuzu dokuz geçiyor",
    keywords: ["nine minutes past nine a.m.", "sabah dokuzu dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:09.",
      "🇹🇷 Saat 09:09."
    ],
    examples: [],
    related_word_ids: [2549]
  },
  {
    id: "vocab-saat-2550",
    category: "vocabulary",
    title: "ten past nine a.m. — sabah dokuzu on geçiyor",
    keywords: ["ten past nine a.m.", "sabah dokuzu on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:10.",
      "🇹🇷 Saat 09:10."
    ],
    examples: [],
    related_word_ids: [2550]
  },
  {
    id: "vocab-saat-2551",
    category: "vocabulary",
    title: "eleven minutes past nine a.m. — sabah dokuzu on bir geçiyor",
    keywords: ["eleven minutes past nine a.m.", "sabah dokuzu on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:11.",
      "🇹🇷 Saat 09:11."
    ],
    examples: [],
    related_word_ids: [2551]
  },
  {
    id: "vocab-saat-2552",
    category: "vocabulary",
    title: "twelve minutes past nine a.m. — sabah dokuzu on iki geçiyor",
    keywords: ["twelve minutes past nine a.m.", "sabah dokuzu on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:12.",
      "🇹🇷 Saat 09:12."
    ],
    examples: [],
    related_word_ids: [2552]
  },
  {
    id: "vocab-saat-2553",
    category: "vocabulary",
    title: "thirteen minutes past nine a.m. — sabah dokuzu on üç geçiyor",
    keywords: ["thirteen minutes past nine a.m.", "sabah dokuzu on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:13.",
      "🇹🇷 Saat 09:13."
    ],
    examples: [],
    related_word_ids: [2553]
  },
  {
    id: "vocab-saat-2554",
    category: "vocabulary",
    title: "fourteen minutes past nine a.m. — sabah dokuzu on dört geçiyor",
    keywords: ["fourteen minutes past nine a.m.", "sabah dokuzu on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:14.",
      "🇹🇷 Saat 09:14."
    ],
    examples: [],
    related_word_ids: [2554]
  },
  {
    id: "vocab-saat-2555",
    category: "vocabulary",
    title: "a quarter past nine a.m. — sabah dokuzu çeyrek geçiyor",
    keywords: ["a quarter past nine a.m.", "sabah dokuzu çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:15.",
      "🇹🇷 Saat 09:15."
    ],
    examples: [],
    related_word_ids: [2555]
  },
  {
    id: "vocab-saat-2556",
    category: "vocabulary",
    title: "sixteen minutes past nine a.m. — sabah dokuzu on altı geçiyor",
    keywords: ["sixteen minutes past nine a.m.", "sabah dokuzu on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:16.",
      "🇹🇷 Saat 09:16."
    ],
    examples: [],
    related_word_ids: [2556]
  },
  {
    id: "vocab-saat-2557",
    category: "vocabulary",
    title: "seventeen minutes past nine a.m. — sabah dokuzu on yedi geçiyor",
    keywords: ["seventeen minutes past nine a.m.", "sabah dokuzu on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:17.",
      "🇹🇷 Saat 09:17."
    ],
    examples: [],
    related_word_ids: [2557]
  },
  {
    id: "vocab-saat-2558",
    category: "vocabulary",
    title: "eighteen minutes past nine a.m. — sabah dokuzu on sekiz geçiyor",
    keywords: ["eighteen minutes past nine a.m.", "sabah dokuzu on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:18.",
      "🇹🇷 Saat 09:18."
    ],
    examples: [],
    related_word_ids: [2558]
  },
  {
    id: "vocab-saat-2559",
    category: "vocabulary",
    title: "nineteen minutes past nine a.m. — sabah dokuzu on dokuz geçiyor",
    keywords: ["nineteen minutes past nine a.m.", "sabah dokuzu on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:19.",
      "🇹🇷 Saat 09:19."
    ],
    examples: [],
    related_word_ids: [2559]
  },
  {
    id: "vocab-saat-2560",
    category: "vocabulary",
    title: "twenty past nine a.m. — sabah dokuzu yirmi geçiyor",
    keywords: ["twenty past nine a.m.", "sabah dokuzu yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:20.",
      "🇹🇷 Saat 09:20."
    ],
    examples: [],
    related_word_ids: [2560]
  },
  {
    id: "vocab-saat-2561",
    category: "vocabulary",
    title: "twenty-one minutes past nine a.m. — sabah dokuzu yirmi bir geçiyor",
    keywords: ["twenty-one minutes past nine a.m.", "sabah dokuzu yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:21.",
      "🇹🇷 Saat 09:21."
    ],
    examples: [],
    related_word_ids: [2561]
  },
  {
    id: "vocab-saat-2562",
    category: "vocabulary",
    title: "twenty-two minutes past nine a.m. — sabah dokuzu yirmi iki geçiyor",
    keywords: ["twenty-two minutes past nine a.m.", "sabah dokuzu yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:22.",
      "🇹🇷 Saat 09:22."
    ],
    examples: [],
    related_word_ids: [2562]
  },
  {
    id: "vocab-saat-2563",
    category: "vocabulary",
    title: "twenty-three minutes past nine a.m. — sabah dokuzu yirmi üç geçiyor",
    keywords: ["twenty-three minutes past nine a.m.", "sabah dokuzu yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:23.",
      "🇹🇷 Saat 09:23."
    ],
    examples: [],
    related_word_ids: [2563]
  },
  {
    id: "vocab-saat-2564",
    category: "vocabulary",
    title: "twenty-four minutes past nine a.m. — sabah dokuzu yirmi dört geçiyor",
    keywords: ["twenty-four minutes past nine a.m.", "sabah dokuzu yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:24.",
      "🇹🇷 Saat 09:24."
    ],
    examples: [],
    related_word_ids: [2564]
  },
  {
    id: "vocab-saat-2565",
    category: "vocabulary",
    title: "twenty-five past nine a.m. — sabah dokuzu yirmi beş geçiyor",
    keywords: ["twenty-five past nine a.m.", "sabah dokuzu yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:25.",
      "🇹🇷 Saat 09:25."
    ],
    examples: [],
    related_word_ids: [2565]
  },
  {
    id: "vocab-saat-2566",
    category: "vocabulary",
    title: "twenty-six minutes past nine a.m. — sabah dokuzu yirmi altı geçiyor",
    keywords: ["twenty-six minutes past nine a.m.", "sabah dokuzu yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:26.",
      "🇹🇷 Saat 09:26."
    ],
    examples: [],
    related_word_ids: [2566]
  },
  {
    id: "vocab-saat-2567",
    category: "vocabulary",
    title: "twenty-seven minutes past nine a.m. — sabah dokuzu yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past nine a.m.", "sabah dokuzu yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:27.",
      "🇹🇷 Saat 09:27."
    ],
    examples: [],
    related_word_ids: [2567]
  },
  {
    id: "vocab-saat-2568",
    category: "vocabulary",
    title: "twenty-eight minutes past nine a.m. — sabah dokuzu yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past nine a.m.", "sabah dokuzu yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:28.",
      "🇹🇷 Saat 09:28."
    ],
    examples: [],
    related_word_ids: [2568]
  },
  {
    id: "vocab-saat-2569",
    category: "vocabulary",
    title: "twenty-nine minutes past nine a.m. — sabah dokuzu yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past nine a.m.", "sabah dokuzu yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:29.",
      "🇹🇷 Saat 09:29."
    ],
    examples: [],
    related_word_ids: [2569]
  },
  {
    id: "vocab-saat-2570",
    category: "vocabulary",
    title: "half past nine a.m. — sabah dokuz buçuk",
    keywords: ["half past nine a.m.", "sabah dokuz buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:30.",
      "🇹🇷 Saat 09:30."
    ],
    examples: [],
    related_word_ids: [2570]
  },
  {
    id: "vocab-saat-2571",
    category: "vocabulary",
    title: "twenty-nine minutes to ten a.m. — sabah ona yirmi dokuz var",
    keywords: ["twenty-nine minutes to ten a.m.", "sabah ona yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:31.",
      "🇹🇷 Saat 09:31."
    ],
    examples: [],
    related_word_ids: [2571]
  },
  {
    id: "vocab-saat-2572",
    category: "vocabulary",
    title: "twenty-eight minutes to ten a.m. — sabah ona yirmi sekiz var",
    keywords: ["twenty-eight minutes to ten a.m.", "sabah ona yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:32.",
      "🇹🇷 Saat 09:32."
    ],
    examples: [],
    related_word_ids: [2572]
  },
  {
    id: "vocab-saat-2573",
    category: "vocabulary",
    title: "twenty-seven minutes to ten a.m. — sabah ona yirmi yedi var",
    keywords: ["twenty-seven minutes to ten a.m.", "sabah ona yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:33.",
      "🇹🇷 Saat 09:33."
    ],
    examples: [],
    related_word_ids: [2573]
  },
  {
    id: "vocab-saat-2574",
    category: "vocabulary",
    title: "twenty-six minutes to ten a.m. — sabah ona yirmi altı var",
    keywords: ["twenty-six minutes to ten a.m.", "sabah ona yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:34.",
      "🇹🇷 Saat 09:34."
    ],
    examples: [],
    related_word_ids: [2574]
  },
  {
    id: "vocab-saat-2575",
    category: "vocabulary",
    title: "twenty-five to ten a.m. — sabah ona yirmi beş var",
    keywords: ["twenty-five to ten a.m.", "sabah ona yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:35.",
      "🇹🇷 Saat 09:35."
    ],
    examples: [],
    related_word_ids: [2575]
  },
  {
    id: "vocab-saat-2576",
    category: "vocabulary",
    title: "twenty-four minutes to ten a.m. — sabah ona yirmi dört var",
    keywords: ["twenty-four minutes to ten a.m.", "sabah ona yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:36.",
      "🇹🇷 Saat 09:36."
    ],
    examples: [],
    related_word_ids: [2576]
  },
  {
    id: "vocab-saat-2577",
    category: "vocabulary",
    title: "twenty-three minutes to ten a.m. — sabah ona yirmi üç var",
    keywords: ["twenty-three minutes to ten a.m.", "sabah ona yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:37.",
      "🇹🇷 Saat 09:37."
    ],
    examples: [],
    related_word_ids: [2577]
  },
  {
    id: "vocab-saat-2578",
    category: "vocabulary",
    title: "twenty-two minutes to ten a.m. — sabah ona yirmi iki var",
    keywords: ["twenty-two minutes to ten a.m.", "sabah ona yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:38.",
      "🇹🇷 Saat 09:38."
    ],
    examples: [],
    related_word_ids: [2578]
  },
  {
    id: "vocab-saat-2579",
    category: "vocabulary",
    title: "twenty-one minutes to ten a.m. — sabah ona yirmi bir var",
    keywords: ["twenty-one minutes to ten a.m.", "sabah ona yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:39.",
      "🇹🇷 Saat 09:39."
    ],
    examples: [],
    related_word_ids: [2579]
  },
  {
    id: "vocab-saat-2580",
    category: "vocabulary",
    title: "twenty to ten a.m. — sabah ona yirmi var",
    keywords: ["twenty to ten a.m.", "sabah ona yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:40.",
      "🇹🇷 Saat 09:40."
    ],
    examples: [],
    related_word_ids: [2580]
  },
  {
    id: "vocab-saat-2581",
    category: "vocabulary",
    title: "nineteen minutes to ten a.m. — sabah ona on dokuz var",
    keywords: ["nineteen minutes to ten a.m.", "sabah ona on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:41.",
      "🇹🇷 Saat 09:41."
    ],
    examples: [],
    related_word_ids: [2581]
  },
  {
    id: "vocab-saat-2582",
    category: "vocabulary",
    title: "eighteen minutes to ten a.m. — sabah ona on sekiz var",
    keywords: ["eighteen minutes to ten a.m.", "sabah ona on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:42.",
      "🇹🇷 Saat 09:42."
    ],
    examples: [],
    related_word_ids: [2582]
  },
  {
    id: "vocab-saat-2583",
    category: "vocabulary",
    title: "seventeen minutes to ten a.m. — sabah ona on yedi var",
    keywords: ["seventeen minutes to ten a.m.", "sabah ona on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:43.",
      "🇹🇷 Saat 09:43."
    ],
    examples: [],
    related_word_ids: [2583]
  },
  {
    id: "vocab-saat-2584",
    category: "vocabulary",
    title: "sixteen minutes to ten a.m. — sabah ona on altı var",
    keywords: ["sixteen minutes to ten a.m.", "sabah ona on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:44.",
      "🇹🇷 Saat 09:44."
    ],
    examples: [],
    related_word_ids: [2584]
  },
  {
    id: "vocab-saat-2585",
    category: "vocabulary",
    title: "a quarter to ten a.m. — sabah ona çeyrek var",
    keywords: ["a quarter to ten a.m.", "sabah ona çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:45.",
      "🇹🇷 Saat 09:45."
    ],
    examples: [],
    related_word_ids: [2585]
  },
  {
    id: "vocab-saat-2586",
    category: "vocabulary",
    title: "fourteen minutes to ten a.m. — sabah ona on dört var",
    keywords: ["fourteen minutes to ten a.m.", "sabah ona on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:46.",
      "🇹🇷 Saat 09:46."
    ],
    examples: [],
    related_word_ids: [2586]
  },
  {
    id: "vocab-saat-2587",
    category: "vocabulary",
    title: "thirteen minutes to ten a.m. — sabah ona on üç var",
    keywords: ["thirteen minutes to ten a.m.", "sabah ona on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:47.",
      "🇹🇷 Saat 09:47."
    ],
    examples: [],
    related_word_ids: [2587]
  },
  {
    id: "vocab-saat-2588",
    category: "vocabulary",
    title: "twelve minutes to ten a.m. — sabah ona on iki var",
    keywords: ["twelve minutes to ten a.m.", "sabah ona on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:48.",
      "🇹🇷 Saat 09:48."
    ],
    examples: [],
    related_word_ids: [2588]
  },
  {
    id: "vocab-saat-2589",
    category: "vocabulary",
    title: "eleven minutes to ten a.m. — sabah ona on bir var",
    keywords: ["eleven minutes to ten a.m.", "sabah ona on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:49.",
      "🇹🇷 Saat 09:49."
    ],
    examples: [],
    related_word_ids: [2589]
  },
  {
    id: "vocab-saat-2590",
    category: "vocabulary",
    title: "ten to ten a.m. — sabah ona on var",
    keywords: ["ten to ten a.m.", "sabah ona on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:50.",
      "🇹🇷 Saat 09:50."
    ],
    examples: [],
    related_word_ids: [2590]
  },
  {
    id: "vocab-saat-2591",
    category: "vocabulary",
    title: "nine minutes to ten a.m. — sabah ona dokuz var",
    keywords: ["nine minutes to ten a.m.", "sabah ona dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:51.",
      "🇹🇷 Saat 09:51."
    ],
    examples: [],
    related_word_ids: [2591]
  },
  {
    id: "vocab-saat-2592",
    category: "vocabulary",
    title: "eight minutes to ten a.m. — sabah ona sekiz var",
    keywords: ["eight minutes to ten a.m.", "sabah ona sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:52.",
      "🇹🇷 Saat 09:52."
    ],
    examples: [],
    related_word_ids: [2592]
  },
  {
    id: "vocab-saat-2593",
    category: "vocabulary",
    title: "seven minutes to ten a.m. — sabah ona yedi var",
    keywords: ["seven minutes to ten a.m.", "sabah ona yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:53.",
      "🇹🇷 Saat 09:53."
    ],
    examples: [],
    related_word_ids: [2593]
  },
  {
    id: "vocab-saat-2594",
    category: "vocabulary",
    title: "six minutes to ten a.m. — sabah ona altı var",
    keywords: ["six minutes to ten a.m.", "sabah ona altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:54.",
      "🇹🇷 Saat 09:54."
    ],
    examples: [],
    related_word_ids: [2594]
  },
  {
    id: "vocab-saat-2595",
    category: "vocabulary",
    title: "five to ten a.m. — sabah ona beş var",
    keywords: ["five to ten a.m.", "sabah ona beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:55.",
      "🇹🇷 Saat 09:55."
    ],
    examples: [],
    related_word_ids: [2595]
  },
  {
    id: "vocab-saat-2596",
    category: "vocabulary",
    title: "four minutes to ten a.m. — sabah ona dört var",
    keywords: ["four minutes to ten a.m.", "sabah ona dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:56.",
      "🇹🇷 Saat 09:56."
    ],
    examples: [],
    related_word_ids: [2596]
  },
  {
    id: "vocab-saat-2597",
    category: "vocabulary",
    title: "three minutes to ten a.m. — sabah ona üç var",
    keywords: ["three minutes to ten a.m.", "sabah ona üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:57.",
      "🇹🇷 Saat 09:57."
    ],
    examples: [],
    related_word_ids: [2597]
  },
  {
    id: "vocab-saat-2598",
    category: "vocabulary",
    title: "two minutes to ten a.m. — sabah ona iki var",
    keywords: ["two minutes to ten a.m.", "sabah ona iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:58.",
      "🇹🇷 Saat 09:58."
    ],
    examples: [],
    related_word_ids: [2598]
  },
  {
    id: "vocab-saat-2599",
    category: "vocabulary",
    title: "one minute to ten a.m. — sabah ona bir var",
    keywords: ["one minute to ten a.m.", "sabah ona bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 09:59.",
      "🇹🇷 Saat 09:59."
    ],
    examples: [],
    related_word_ids: [2599]
  },
  {
    id: "vocab-saat-2600",
    category: "vocabulary",
    title: "ten o'clock a.m. — sabah on",
    keywords: ["ten o'clock a.m.", "sabah on", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:00.",
      "🇹🇷 Saat 10:00."
    ],
    examples: [],
    related_word_ids: [2600]
  },
  {
    id: "vocab-saat-2601",
    category: "vocabulary",
    title: "one minute past ten a.m. — sabah onu bir geçiyor",
    keywords: ["one minute past ten a.m.", "sabah onu bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:01.",
      "🇹🇷 Saat 10:01."
    ],
    examples: [],
    related_word_ids: [2601]
  },
  {
    id: "vocab-saat-2602",
    category: "vocabulary",
    title: "two minutes past ten a.m. — sabah onu iki geçiyor",
    keywords: ["two minutes past ten a.m.", "sabah onu iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:02.",
      "🇹🇷 Saat 10:02."
    ],
    examples: [],
    related_word_ids: [2602]
  },
  {
    id: "vocab-saat-2603",
    category: "vocabulary",
    title: "three minutes past ten a.m. — sabah onu üç geçiyor",
    keywords: ["three minutes past ten a.m.", "sabah onu üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:03.",
      "🇹🇷 Saat 10:03."
    ],
    examples: [],
    related_word_ids: [2603]
  },
  {
    id: "vocab-saat-2604",
    category: "vocabulary",
    title: "four minutes past ten a.m. — sabah onu dört geçiyor",
    keywords: ["four minutes past ten a.m.", "sabah onu dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:04.",
      "🇹🇷 Saat 10:04."
    ],
    examples: [],
    related_word_ids: [2604]
  },
  {
    id: "vocab-saat-2605",
    category: "vocabulary",
    title: "five past ten a.m. — sabah onu beş geçiyor",
    keywords: ["five past ten a.m.", "sabah onu beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:05.",
      "🇹🇷 Saat 10:05."
    ],
    examples: [],
    related_word_ids: [2605]
  },
  {
    id: "vocab-saat-2606",
    category: "vocabulary",
    title: "six minutes past ten a.m. — sabah onu altı geçiyor",
    keywords: ["six minutes past ten a.m.", "sabah onu altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:06.",
      "🇹🇷 Saat 10:06."
    ],
    examples: [],
    related_word_ids: [2606]
  },
  {
    id: "vocab-saat-2607",
    category: "vocabulary",
    title: "seven minutes past ten a.m. — sabah onu yedi geçiyor",
    keywords: ["seven minutes past ten a.m.", "sabah onu yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:07.",
      "🇹🇷 Saat 10:07."
    ],
    examples: [],
    related_word_ids: [2607]
  },
  {
    id: "vocab-saat-2608",
    category: "vocabulary",
    title: "eight minutes past ten a.m. — sabah onu sekiz geçiyor",
    keywords: ["eight minutes past ten a.m.", "sabah onu sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:08.",
      "🇹🇷 Saat 10:08."
    ],
    examples: [],
    related_word_ids: [2608]
  },
  {
    id: "vocab-saat-2609",
    category: "vocabulary",
    title: "nine minutes past ten a.m. — sabah onu dokuz geçiyor",
    keywords: ["nine minutes past ten a.m.", "sabah onu dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:09.",
      "🇹🇷 Saat 10:09."
    ],
    examples: [],
    related_word_ids: [2609]
  },
  {
    id: "vocab-saat-2610",
    category: "vocabulary",
    title: "ten past ten a.m. — sabah onu on geçiyor",
    keywords: ["ten past ten a.m.", "sabah onu on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:10.",
      "🇹🇷 Saat 10:10."
    ],
    examples: [],
    related_word_ids: [2610]
  },
  {
    id: "vocab-saat-2611",
    category: "vocabulary",
    title: "eleven minutes past ten a.m. — sabah onu on bir geçiyor",
    keywords: ["eleven minutes past ten a.m.", "sabah onu on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:11.",
      "🇹🇷 Saat 10:11."
    ],
    examples: [],
    related_word_ids: [2611]
  },
  {
    id: "vocab-saat-2612",
    category: "vocabulary",
    title: "twelve minutes past ten a.m. — sabah onu on iki geçiyor",
    keywords: ["twelve minutes past ten a.m.", "sabah onu on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:12.",
      "🇹🇷 Saat 10:12."
    ],
    examples: [],
    related_word_ids: [2612]
  },
  {
    id: "vocab-saat-2613",
    category: "vocabulary",
    title: "thirteen minutes past ten a.m. — sabah onu on üç geçiyor",
    keywords: ["thirteen minutes past ten a.m.", "sabah onu on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:13.",
      "🇹🇷 Saat 10:13."
    ],
    examples: [],
    related_word_ids: [2613]
  },
  {
    id: "vocab-saat-2614",
    category: "vocabulary",
    title: "fourteen minutes past ten a.m. — sabah onu on dört geçiyor",
    keywords: ["fourteen minutes past ten a.m.", "sabah onu on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:14.",
      "🇹🇷 Saat 10:14."
    ],
    examples: [],
    related_word_ids: [2614]
  },
  {
    id: "vocab-saat-2615",
    category: "vocabulary",
    title: "a quarter past ten a.m. — sabah onu çeyrek geçiyor",
    keywords: ["a quarter past ten a.m.", "sabah onu çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:15.",
      "🇹🇷 Saat 10:15."
    ],
    examples: [],
    related_word_ids: [2615]
  },
  {
    id: "vocab-saat-2616",
    category: "vocabulary",
    title: "sixteen minutes past ten a.m. — sabah onu on altı geçiyor",
    keywords: ["sixteen minutes past ten a.m.", "sabah onu on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:16.",
      "🇹🇷 Saat 10:16."
    ],
    examples: [],
    related_word_ids: [2616]
  },
  {
    id: "vocab-saat-2617",
    category: "vocabulary",
    title: "seventeen minutes past ten a.m. — sabah onu on yedi geçiyor",
    keywords: ["seventeen minutes past ten a.m.", "sabah onu on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:17.",
      "🇹🇷 Saat 10:17."
    ],
    examples: [],
    related_word_ids: [2617]
  },
  {
    id: "vocab-saat-2618",
    category: "vocabulary",
    title: "eighteen minutes past ten a.m. — sabah onu on sekiz geçiyor",
    keywords: ["eighteen minutes past ten a.m.", "sabah onu on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:18.",
      "🇹🇷 Saat 10:18."
    ],
    examples: [],
    related_word_ids: [2618]
  },
  {
    id: "vocab-saat-2619",
    category: "vocabulary",
    title: "nineteen minutes past ten a.m. — sabah onu on dokuz geçiyor",
    keywords: ["nineteen minutes past ten a.m.", "sabah onu on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:19.",
      "🇹🇷 Saat 10:19."
    ],
    examples: [],
    related_word_ids: [2619]
  },
  {
    id: "vocab-saat-2620",
    category: "vocabulary",
    title: "twenty past ten a.m. — sabah onu yirmi geçiyor",
    keywords: ["twenty past ten a.m.", "sabah onu yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:20.",
      "🇹🇷 Saat 10:20."
    ],
    examples: [],
    related_word_ids: [2620]
  },
  {
    id: "vocab-saat-2621",
    category: "vocabulary",
    title: "twenty-one minutes past ten a.m. — sabah onu yirmi bir geçiyor",
    keywords: ["twenty-one minutes past ten a.m.", "sabah onu yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:21.",
      "🇹🇷 Saat 10:21."
    ],
    examples: [],
    related_word_ids: [2621]
  },
  {
    id: "vocab-saat-2622",
    category: "vocabulary",
    title: "twenty-two minutes past ten a.m. — sabah onu yirmi iki geçiyor",
    keywords: ["twenty-two minutes past ten a.m.", "sabah onu yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:22.",
      "🇹🇷 Saat 10:22."
    ],
    examples: [],
    related_word_ids: [2622]
  },
  {
    id: "vocab-saat-2623",
    category: "vocabulary",
    title: "twenty-three minutes past ten a.m. — sabah onu yirmi üç geçiyor",
    keywords: ["twenty-three minutes past ten a.m.", "sabah onu yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:23.",
      "🇹🇷 Saat 10:23."
    ],
    examples: [],
    related_word_ids: [2623]
  },
  {
    id: "vocab-saat-2624",
    category: "vocabulary",
    title: "twenty-four minutes past ten a.m. — sabah onu yirmi dört geçiyor",
    keywords: ["twenty-four minutes past ten a.m.", "sabah onu yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:24.",
      "🇹🇷 Saat 10:24."
    ],
    examples: [],
    related_word_ids: [2624]
  },
  {
    id: "vocab-saat-2625",
    category: "vocabulary",
    title: "twenty-five past ten a.m. — sabah onu yirmi beş geçiyor",
    keywords: ["twenty-five past ten a.m.", "sabah onu yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:25.",
      "🇹🇷 Saat 10:25."
    ],
    examples: [],
    related_word_ids: [2625]
  },
  {
    id: "vocab-saat-2626",
    category: "vocabulary",
    title: "twenty-six minutes past ten a.m. — sabah onu yirmi altı geçiyor",
    keywords: ["twenty-six minutes past ten a.m.", "sabah onu yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:26.",
      "🇹🇷 Saat 10:26."
    ],
    examples: [],
    related_word_ids: [2626]
  },
  {
    id: "vocab-saat-2627",
    category: "vocabulary",
    title: "twenty-seven minutes past ten a.m. — sabah onu yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past ten a.m.", "sabah onu yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:27.",
      "🇹🇷 Saat 10:27."
    ],
    examples: [],
    related_word_ids: [2627]
  },
  {
    id: "vocab-saat-2628",
    category: "vocabulary",
    title: "twenty-eight minutes past ten a.m. — sabah onu yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past ten a.m.", "sabah onu yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:28.",
      "🇹🇷 Saat 10:28."
    ],
    examples: [],
    related_word_ids: [2628]
  },
  {
    id: "vocab-saat-2629",
    category: "vocabulary",
    title: "twenty-nine minutes past ten a.m. — sabah onu yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past ten a.m.", "sabah onu yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:29.",
      "🇹🇷 Saat 10:29."
    ],
    examples: [],
    related_word_ids: [2629]
  },
  {
    id: "vocab-saat-2630",
    category: "vocabulary",
    title: "half past ten a.m. — sabah on buçuk",
    keywords: ["half past ten a.m.", "sabah on buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:30.",
      "🇹🇷 Saat 10:30."
    ],
    examples: [],
    related_word_ids: [2630]
  },
  {
    id: "vocab-saat-2631",
    category: "vocabulary",
    title: "twenty-nine minutes to eleven a.m. — sabah on bire yirmi dokuz var",
    keywords: ["twenty-nine minutes to eleven a.m.", "sabah on bire yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:31.",
      "🇹🇷 Saat 10:31."
    ],
    examples: [],
    related_word_ids: [2631]
  },
  {
    id: "vocab-saat-2632",
    category: "vocabulary",
    title: "twenty-eight minutes to eleven a.m. — sabah on bire yirmi sekiz var",
    keywords: ["twenty-eight minutes to eleven a.m.", "sabah on bire yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:32.",
      "🇹🇷 Saat 10:32."
    ],
    examples: [],
    related_word_ids: [2632]
  },
  {
    id: "vocab-saat-2633",
    category: "vocabulary",
    title: "twenty-seven minutes to eleven a.m. — sabah on bire yirmi yedi var",
    keywords: ["twenty-seven minutes to eleven a.m.", "sabah on bire yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:33.",
      "🇹🇷 Saat 10:33."
    ],
    examples: [],
    related_word_ids: [2633]
  },
  {
    id: "vocab-saat-2634",
    category: "vocabulary",
    title: "twenty-six minutes to eleven a.m. — sabah on bire yirmi altı var",
    keywords: ["twenty-six minutes to eleven a.m.", "sabah on bire yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:34.",
      "🇹🇷 Saat 10:34."
    ],
    examples: [],
    related_word_ids: [2634]
  },
  {
    id: "vocab-saat-2635",
    category: "vocabulary",
    title: "twenty-five to eleven a.m. — sabah on bire yirmi beş var",
    keywords: ["twenty-five to eleven a.m.", "sabah on bire yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:35.",
      "🇹🇷 Saat 10:35."
    ],
    examples: [],
    related_word_ids: [2635]
  },
  {
    id: "vocab-saat-2636",
    category: "vocabulary",
    title: "twenty-four minutes to eleven a.m. — sabah on bire yirmi dört var",
    keywords: ["twenty-four minutes to eleven a.m.", "sabah on bire yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:36.",
      "🇹🇷 Saat 10:36."
    ],
    examples: [],
    related_word_ids: [2636]
  },
  {
    id: "vocab-saat-2637",
    category: "vocabulary",
    title: "twenty-three minutes to eleven a.m. — sabah on bire yirmi üç var",
    keywords: ["twenty-three minutes to eleven a.m.", "sabah on bire yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:37.",
      "🇹🇷 Saat 10:37."
    ],
    examples: [],
    related_word_ids: [2637]
  },
  {
    id: "vocab-saat-2638",
    category: "vocabulary",
    title: "twenty-two minutes to eleven a.m. — sabah on bire yirmi iki var",
    keywords: ["twenty-two minutes to eleven a.m.", "sabah on bire yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:38.",
      "🇹🇷 Saat 10:38."
    ],
    examples: [],
    related_word_ids: [2638]
  },
  {
    id: "vocab-saat-2639",
    category: "vocabulary",
    title: "twenty-one minutes to eleven a.m. — sabah on bire yirmi bir var",
    keywords: ["twenty-one minutes to eleven a.m.", "sabah on bire yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:39.",
      "🇹🇷 Saat 10:39."
    ],
    examples: [],
    related_word_ids: [2639]
  },
  {
    id: "vocab-saat-2640",
    category: "vocabulary",
    title: "twenty to eleven a.m. — sabah on bire yirmi var",
    keywords: ["twenty to eleven a.m.", "sabah on bire yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:40.",
      "🇹🇷 Saat 10:40."
    ],
    examples: [],
    related_word_ids: [2640]
  },
  {
    id: "vocab-saat-2641",
    category: "vocabulary",
    title: "nineteen minutes to eleven a.m. — sabah on bire on dokuz var",
    keywords: ["nineteen minutes to eleven a.m.", "sabah on bire on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:41.",
      "🇹🇷 Saat 10:41."
    ],
    examples: [],
    related_word_ids: [2641]
  },
  {
    id: "vocab-saat-2642",
    category: "vocabulary",
    title: "eighteen minutes to eleven a.m. — sabah on bire on sekiz var",
    keywords: ["eighteen minutes to eleven a.m.", "sabah on bire on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:42.",
      "🇹🇷 Saat 10:42."
    ],
    examples: [],
    related_word_ids: [2642]
  },
  {
    id: "vocab-saat-2643",
    category: "vocabulary",
    title: "seventeen minutes to eleven a.m. — sabah on bire on yedi var",
    keywords: ["seventeen minutes to eleven a.m.", "sabah on bire on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:43.",
      "🇹🇷 Saat 10:43."
    ],
    examples: [],
    related_word_ids: [2643]
  },
  {
    id: "vocab-saat-2644",
    category: "vocabulary",
    title: "sixteen minutes to eleven a.m. — sabah on bire on altı var",
    keywords: ["sixteen minutes to eleven a.m.", "sabah on bire on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:44.",
      "🇹🇷 Saat 10:44."
    ],
    examples: [],
    related_word_ids: [2644]
  },
  {
    id: "vocab-saat-2645",
    category: "vocabulary",
    title: "a quarter to eleven a.m. — sabah on bire çeyrek var",
    keywords: ["a quarter to eleven a.m.", "sabah on bire çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:45.",
      "🇹🇷 Saat 10:45."
    ],
    examples: [],
    related_word_ids: [2645]
  },
  {
    id: "vocab-saat-2646",
    category: "vocabulary",
    title: "fourteen minutes to eleven a.m. — sabah on bire on dört var",
    keywords: ["fourteen minutes to eleven a.m.", "sabah on bire on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:46.",
      "🇹🇷 Saat 10:46."
    ],
    examples: [],
    related_word_ids: [2646]
  },
  {
    id: "vocab-saat-2647",
    category: "vocabulary",
    title: "thirteen minutes to eleven a.m. — sabah on bire on üç var",
    keywords: ["thirteen minutes to eleven a.m.", "sabah on bire on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:47.",
      "🇹🇷 Saat 10:47."
    ],
    examples: [],
    related_word_ids: [2647]
  },
  {
    id: "vocab-saat-2648",
    category: "vocabulary",
    title: "twelve minutes to eleven a.m. — sabah on bire on iki var",
    keywords: ["twelve minutes to eleven a.m.", "sabah on bire on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:48.",
      "🇹🇷 Saat 10:48."
    ],
    examples: [],
    related_word_ids: [2648]
  },
  {
    id: "vocab-saat-2649",
    category: "vocabulary",
    title: "eleven minutes to eleven a.m. — sabah on bire on bir var",
    keywords: ["eleven minutes to eleven a.m.", "sabah on bire on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:49.",
      "🇹🇷 Saat 10:49."
    ],
    examples: [],
    related_word_ids: [2649]
  },
  {
    id: "vocab-saat-2650",
    category: "vocabulary",
    title: "ten to eleven a.m. — sabah on bire on var",
    keywords: ["ten to eleven a.m.", "sabah on bire on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:50.",
      "🇹🇷 Saat 10:50."
    ],
    examples: [],
    related_word_ids: [2650]
  },
  {
    id: "vocab-saat-2651",
    category: "vocabulary",
    title: "nine minutes to eleven a.m. — sabah on bire dokuz var",
    keywords: ["nine minutes to eleven a.m.", "sabah on bire dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:51.",
      "🇹🇷 Saat 10:51."
    ],
    examples: [],
    related_word_ids: [2651]
  },
  {
    id: "vocab-saat-2652",
    category: "vocabulary",
    title: "eight minutes to eleven a.m. — sabah on bire sekiz var",
    keywords: ["eight minutes to eleven a.m.", "sabah on bire sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:52.",
      "🇹🇷 Saat 10:52."
    ],
    examples: [],
    related_word_ids: [2652]
  },
  {
    id: "vocab-saat-2653",
    category: "vocabulary",
    title: "seven minutes to eleven a.m. — sabah on bire yedi var",
    keywords: ["seven minutes to eleven a.m.", "sabah on bire yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:53.",
      "🇹🇷 Saat 10:53."
    ],
    examples: [],
    related_word_ids: [2653]
  },
  {
    id: "vocab-saat-2654",
    category: "vocabulary",
    title: "six minutes to eleven a.m. — sabah on bire altı var",
    keywords: ["six minutes to eleven a.m.", "sabah on bire altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:54.",
      "🇹🇷 Saat 10:54."
    ],
    examples: [],
    related_word_ids: [2654]
  },
  {
    id: "vocab-saat-2655",
    category: "vocabulary",
    title: "five to eleven a.m. — sabah on bire beş var",
    keywords: ["five to eleven a.m.", "sabah on bire beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:55.",
      "🇹🇷 Saat 10:55."
    ],
    examples: [],
    related_word_ids: [2655]
  },
  {
    id: "vocab-saat-2656",
    category: "vocabulary",
    title: "four minutes to eleven a.m. — sabah on bire dört var",
    keywords: ["four minutes to eleven a.m.", "sabah on bire dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:56.",
      "🇹🇷 Saat 10:56."
    ],
    examples: [],
    related_word_ids: [2656]
  },
  {
    id: "vocab-saat-2657",
    category: "vocabulary",
    title: "three minutes to eleven a.m. — sabah on bire üç var",
    keywords: ["three minutes to eleven a.m.", "sabah on bire üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:57.",
      "🇹🇷 Saat 10:57."
    ],
    examples: [],
    related_word_ids: [2657]
  },
  {
    id: "vocab-saat-2658",
    category: "vocabulary",
    title: "two minutes to eleven a.m. — sabah on bire iki var",
    keywords: ["two minutes to eleven a.m.", "sabah on bire iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:58.",
      "🇹🇷 Saat 10:58."
    ],
    examples: [],
    related_word_ids: [2658]
  },
  {
    id: "vocab-saat-2659",
    category: "vocabulary",
    title: "one minute to eleven a.m. — sabah on bire bir var",
    keywords: ["one minute to eleven a.m.", "sabah on bire bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 10:59.",
      "🇹🇷 Saat 10:59."
    ],
    examples: [],
    related_word_ids: [2659]
  },
  {
    id: "vocab-saat-2660",
    category: "vocabulary",
    title: "eleven o'clock a.m. — sabah on bir",
    keywords: ["eleven o'clock a.m.", "sabah on bir", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:00.",
      "🇹🇷 Saat 11:00."
    ],
    examples: [],
    related_word_ids: [2660]
  },
  {
    id: "vocab-saat-2661",
    category: "vocabulary",
    title: "one minute past eleven a.m. — sabah on biri bir geçiyor",
    keywords: ["one minute past eleven a.m.", "sabah on biri bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:01.",
      "🇹🇷 Saat 11:01."
    ],
    examples: [],
    related_word_ids: [2661]
  },
  {
    id: "vocab-saat-2662",
    category: "vocabulary",
    title: "two minutes past eleven a.m. — sabah on biri iki geçiyor",
    keywords: ["two minutes past eleven a.m.", "sabah on biri iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:02.",
      "🇹🇷 Saat 11:02."
    ],
    examples: [],
    related_word_ids: [2662]
  },
  {
    id: "vocab-saat-2663",
    category: "vocabulary",
    title: "three minutes past eleven a.m. — sabah on biri üç geçiyor",
    keywords: ["three minutes past eleven a.m.", "sabah on biri üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:03.",
      "🇹🇷 Saat 11:03."
    ],
    examples: [],
    related_word_ids: [2663]
  },
  {
    id: "vocab-saat-2664",
    category: "vocabulary",
    title: "four minutes past eleven a.m. — sabah on biri dört geçiyor",
    keywords: ["four minutes past eleven a.m.", "sabah on biri dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:04.",
      "🇹🇷 Saat 11:04."
    ],
    examples: [],
    related_word_ids: [2664]
  },
  {
    id: "vocab-saat-2665",
    category: "vocabulary",
    title: "five past eleven a.m. — sabah on biri beş geçiyor",
    keywords: ["five past eleven a.m.", "sabah on biri beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:05.",
      "🇹🇷 Saat 11:05."
    ],
    examples: [],
    related_word_ids: [2665]
  },
  {
    id: "vocab-saat-2666",
    category: "vocabulary",
    title: "six minutes past eleven a.m. — sabah on biri altı geçiyor",
    keywords: ["six minutes past eleven a.m.", "sabah on biri altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:06.",
      "🇹🇷 Saat 11:06."
    ],
    examples: [],
    related_word_ids: [2666]
  },
  {
    id: "vocab-saat-2667",
    category: "vocabulary",
    title: "seven minutes past eleven a.m. — sabah on biri yedi geçiyor",
    keywords: ["seven minutes past eleven a.m.", "sabah on biri yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:07.",
      "🇹🇷 Saat 11:07."
    ],
    examples: [],
    related_word_ids: [2667]
  },
  {
    id: "vocab-saat-2668",
    category: "vocabulary",
    title: "eight minutes past eleven a.m. — sabah on biri sekiz geçiyor",
    keywords: ["eight minutes past eleven a.m.", "sabah on biri sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:08.",
      "🇹🇷 Saat 11:08."
    ],
    examples: [],
    related_word_ids: [2668]
  },
  {
    id: "vocab-saat-2669",
    category: "vocabulary",
    title: "nine minutes past eleven a.m. — sabah on biri dokuz geçiyor",
    keywords: ["nine minutes past eleven a.m.", "sabah on biri dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:09.",
      "🇹🇷 Saat 11:09."
    ],
    examples: [],
    related_word_ids: [2669]
  },
  {
    id: "vocab-saat-2670",
    category: "vocabulary",
    title: "ten past eleven a.m. — sabah on biri on geçiyor",
    keywords: ["ten past eleven a.m.", "sabah on biri on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:10.",
      "🇹🇷 Saat 11:10."
    ],
    examples: [],
    related_word_ids: [2670]
  },
  {
    id: "vocab-saat-2671",
    category: "vocabulary",
    title: "eleven minutes past eleven a.m. — sabah on biri on bir geçiyor",
    keywords: ["eleven minutes past eleven a.m.", "sabah on biri on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:11.",
      "🇹🇷 Saat 11:11."
    ],
    examples: [],
    related_word_ids: [2671]
  },
  {
    id: "vocab-saat-2672",
    category: "vocabulary",
    title: "twelve minutes past eleven a.m. — sabah on biri on iki geçiyor",
    keywords: ["twelve minutes past eleven a.m.", "sabah on biri on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:12.",
      "🇹🇷 Saat 11:12."
    ],
    examples: [],
    related_word_ids: [2672]
  },
  {
    id: "vocab-saat-2673",
    category: "vocabulary",
    title: "thirteen minutes past eleven a.m. — sabah on biri on üç geçiyor",
    keywords: ["thirteen minutes past eleven a.m.", "sabah on biri on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:13.",
      "🇹🇷 Saat 11:13."
    ],
    examples: [],
    related_word_ids: [2673]
  },
  {
    id: "vocab-saat-2674",
    category: "vocabulary",
    title: "fourteen minutes past eleven a.m. — sabah on biri on dört geçiyor",
    keywords: ["fourteen minutes past eleven a.m.", "sabah on biri on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:14.",
      "🇹🇷 Saat 11:14."
    ],
    examples: [],
    related_word_ids: [2674]
  },
  {
    id: "vocab-saat-2675",
    category: "vocabulary",
    title: "a quarter past eleven a.m. — sabah on biri çeyrek geçiyor",
    keywords: ["a quarter past eleven a.m.", "sabah on biri çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:15.",
      "🇹🇷 Saat 11:15."
    ],
    examples: [],
    related_word_ids: [2675]
  },
  {
    id: "vocab-saat-2676",
    category: "vocabulary",
    title: "sixteen minutes past eleven a.m. — sabah on biri on altı geçiyor",
    keywords: ["sixteen minutes past eleven a.m.", "sabah on biri on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:16.",
      "🇹🇷 Saat 11:16."
    ],
    examples: [],
    related_word_ids: [2676]
  },
  {
    id: "vocab-saat-2677",
    category: "vocabulary",
    title: "seventeen minutes past eleven a.m. — sabah on biri on yedi geçiyor",
    keywords: ["seventeen minutes past eleven a.m.", "sabah on biri on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:17.",
      "🇹🇷 Saat 11:17."
    ],
    examples: [],
    related_word_ids: [2677]
  },
  {
    id: "vocab-saat-2678",
    category: "vocabulary",
    title: "eighteen minutes past eleven a.m. — sabah on biri on sekiz geçiyor",
    keywords: ["eighteen minutes past eleven a.m.", "sabah on biri on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:18.",
      "🇹🇷 Saat 11:18."
    ],
    examples: [],
    related_word_ids: [2678]
  },
  {
    id: "vocab-saat-2679",
    category: "vocabulary",
    title: "nineteen minutes past eleven a.m. — sabah on biri on dokuz geçiyor",
    keywords: ["nineteen minutes past eleven a.m.", "sabah on biri on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:19.",
      "🇹🇷 Saat 11:19."
    ],
    examples: [],
    related_word_ids: [2679]
  },
  {
    id: "vocab-saat-2680",
    category: "vocabulary",
    title: "twenty past eleven a.m. — sabah on biri yirmi geçiyor",
    keywords: ["twenty past eleven a.m.", "sabah on biri yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:20.",
      "🇹🇷 Saat 11:20."
    ],
    examples: [],
    related_word_ids: [2680]
  },
  {
    id: "vocab-saat-2681",
    category: "vocabulary",
    title: "twenty-one minutes past eleven a.m. — sabah on biri yirmi bir geçiyor",
    keywords: ["twenty-one minutes past eleven a.m.", "sabah on biri yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:21.",
      "🇹🇷 Saat 11:21."
    ],
    examples: [],
    related_word_ids: [2681]
  },
  {
    id: "vocab-saat-2682",
    category: "vocabulary",
    title: "twenty-two minutes past eleven a.m. — sabah on biri yirmi iki geçiyor",
    keywords: ["twenty-two minutes past eleven a.m.", "sabah on biri yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:22.",
      "🇹🇷 Saat 11:22."
    ],
    examples: [],
    related_word_ids: [2682]
  },
  {
    id: "vocab-saat-2683",
    category: "vocabulary",
    title: "twenty-three minutes past eleven a.m. — sabah on biri yirmi üç geçiyor",
    keywords: ["twenty-three minutes past eleven a.m.", "sabah on biri yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:23.",
      "🇹🇷 Saat 11:23."
    ],
    examples: [],
    related_word_ids: [2683]
  },
  {
    id: "vocab-saat-2684",
    category: "vocabulary",
    title: "twenty-four minutes past eleven a.m. — sabah on biri yirmi dört geçiyor",
    keywords: ["twenty-four minutes past eleven a.m.", "sabah on biri yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:24.",
      "🇹🇷 Saat 11:24."
    ],
    examples: [],
    related_word_ids: [2684]
  },
  {
    id: "vocab-saat-2685",
    category: "vocabulary",
    title: "twenty-five past eleven a.m. — sabah on biri yirmi beş geçiyor",
    keywords: ["twenty-five past eleven a.m.", "sabah on biri yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:25.",
      "🇹🇷 Saat 11:25."
    ],
    examples: [],
    related_word_ids: [2685]
  },
  {
    id: "vocab-saat-2686",
    category: "vocabulary",
    title: "twenty-six minutes past eleven a.m. — sabah on biri yirmi altı geçiyor",
    keywords: ["twenty-six minutes past eleven a.m.", "sabah on biri yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:26.",
      "🇹🇷 Saat 11:26."
    ],
    examples: [],
    related_word_ids: [2686]
  },
  {
    id: "vocab-saat-2687",
    category: "vocabulary",
    title: "twenty-seven minutes past eleven a.m. — sabah on biri yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past eleven a.m.", "sabah on biri yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:27.",
      "🇹🇷 Saat 11:27."
    ],
    examples: [],
    related_word_ids: [2687]
  },
  {
    id: "vocab-saat-2688",
    category: "vocabulary",
    title: "twenty-eight minutes past eleven a.m. — sabah on biri yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past eleven a.m.", "sabah on biri yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:28.",
      "🇹🇷 Saat 11:28."
    ],
    examples: [],
    related_word_ids: [2688]
  },
  {
    id: "vocab-saat-2689",
    category: "vocabulary",
    title: "twenty-nine minutes past eleven a.m. — sabah on biri yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past eleven a.m.", "sabah on biri yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:29.",
      "🇹🇷 Saat 11:29."
    ],
    examples: [],
    related_word_ids: [2689]
  },
  {
    id: "vocab-saat-2690",
    category: "vocabulary",
    title: "half past eleven a.m. — sabah on bir buçuk",
    keywords: ["half past eleven a.m.", "sabah on bir buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:30.",
      "🇹🇷 Saat 11:30."
    ],
    examples: [],
    related_word_ids: [2690]
  },
  {
    id: "vocab-saat-2691",
    category: "vocabulary",
    title: "twenty-nine minutes to twelve a.m. — öğlen on ikiye yirmi dokuz var",
    keywords: ["twenty-nine minutes to twelve a.m.", "öğlen on ikiye yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:31.",
      "🇹🇷 Saat 11:31."
    ],
    examples: [],
    related_word_ids: [2691]
  },
  {
    id: "vocab-saat-2692",
    category: "vocabulary",
    title: "twenty-eight minutes to twelve a.m. — öğlen on ikiye yirmi sekiz var",
    keywords: ["twenty-eight minutes to twelve a.m.", "öğlen on ikiye yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:32.",
      "🇹🇷 Saat 11:32."
    ],
    examples: [],
    related_word_ids: [2692]
  },
  {
    id: "vocab-saat-2693",
    category: "vocabulary",
    title: "twenty-seven minutes to twelve a.m. — öğlen on ikiye yirmi yedi var",
    keywords: ["twenty-seven minutes to twelve a.m.", "öğlen on ikiye yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:33.",
      "🇹🇷 Saat 11:33."
    ],
    examples: [],
    related_word_ids: [2693]
  },
  {
    id: "vocab-saat-2694",
    category: "vocabulary",
    title: "twenty-six minutes to twelve a.m. — öğlen on ikiye yirmi altı var",
    keywords: ["twenty-six minutes to twelve a.m.", "öğlen on ikiye yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:34.",
      "🇹🇷 Saat 11:34."
    ],
    examples: [],
    related_word_ids: [2694]
  },
  {
    id: "vocab-saat-2695",
    category: "vocabulary",
    title: "twenty-five to twelve a.m. — öğlen on ikiye yirmi beş var",
    keywords: ["twenty-five to twelve a.m.", "öğlen on ikiye yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:35.",
      "🇹🇷 Saat 11:35."
    ],
    examples: [],
    related_word_ids: [2695]
  },
  {
    id: "vocab-saat-2696",
    category: "vocabulary",
    title: "twenty-four minutes to twelve a.m. — öğlen on ikiye yirmi dört var",
    keywords: ["twenty-four minutes to twelve a.m.", "öğlen on ikiye yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:36.",
      "🇹🇷 Saat 11:36."
    ],
    examples: [],
    related_word_ids: [2696]
  },
  {
    id: "vocab-saat-2697",
    category: "vocabulary",
    title: "twenty-three minutes to twelve a.m. — öğlen on ikiye yirmi üç var",
    keywords: ["twenty-three minutes to twelve a.m.", "öğlen on ikiye yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:37.",
      "🇹🇷 Saat 11:37."
    ],
    examples: [],
    related_word_ids: [2697]
  },
  {
    id: "vocab-saat-2698",
    category: "vocabulary",
    title: "twenty-two minutes to twelve a.m. — öğlen on ikiye yirmi iki var",
    keywords: ["twenty-two minutes to twelve a.m.", "öğlen on ikiye yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:38.",
      "🇹🇷 Saat 11:38."
    ],
    examples: [],
    related_word_ids: [2698]
  },
  {
    id: "vocab-saat-2699",
    category: "vocabulary",
    title: "twenty-one minutes to twelve a.m. — öğlen on ikiye yirmi bir var",
    keywords: ["twenty-one minutes to twelve a.m.", "öğlen on ikiye yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:39.",
      "🇹🇷 Saat 11:39."
    ],
    examples: [],
    related_word_ids: [2699]
  },
  {
    id: "vocab-saat-2700",
    category: "vocabulary",
    title: "twenty to twelve a.m. — öğlen on ikiye yirmi var",
    keywords: ["twenty to twelve a.m.", "öğlen on ikiye yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:40.",
      "🇹🇷 Saat 11:40."
    ],
    examples: [],
    related_word_ids: [2700]
  },
  {
    id: "vocab-saat-2701",
    category: "vocabulary",
    title: "nineteen minutes to twelve a.m. — öğlen on ikiye on dokuz var",
    keywords: ["nineteen minutes to twelve a.m.", "öğlen on ikiye on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:41.",
      "🇹🇷 Saat 11:41."
    ],
    examples: [],
    related_word_ids: [2701]
  },
  {
    id: "vocab-saat-2702",
    category: "vocabulary",
    title: "eighteen minutes to twelve a.m. — öğlen on ikiye on sekiz var",
    keywords: ["eighteen minutes to twelve a.m.", "öğlen on ikiye on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:42.",
      "🇹🇷 Saat 11:42."
    ],
    examples: [],
    related_word_ids: [2702]
  },
  {
    id: "vocab-saat-2703",
    category: "vocabulary",
    title: "seventeen minutes to twelve a.m. — öğlen on ikiye on yedi var",
    keywords: ["seventeen minutes to twelve a.m.", "öğlen on ikiye on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:43.",
      "🇹🇷 Saat 11:43."
    ],
    examples: [],
    related_word_ids: [2703]
  },
  {
    id: "vocab-saat-2704",
    category: "vocabulary",
    title: "sixteen minutes to twelve a.m. — öğlen on ikiye on altı var",
    keywords: ["sixteen minutes to twelve a.m.", "öğlen on ikiye on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:44.",
      "🇹🇷 Saat 11:44."
    ],
    examples: [],
    related_word_ids: [2704]
  },
  {
    id: "vocab-saat-2705",
    category: "vocabulary",
    title: "a quarter to twelve a.m. — öğlen on ikiye çeyrek var",
    keywords: ["a quarter to twelve a.m.", "öğlen on ikiye çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:45.",
      "🇹🇷 Saat 11:45."
    ],
    examples: [],
    related_word_ids: [2705]
  },
  {
    id: "vocab-saat-2706",
    category: "vocabulary",
    title: "fourteen minutes to twelve a.m. — öğlen on ikiye on dört var",
    keywords: ["fourteen minutes to twelve a.m.", "öğlen on ikiye on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:46.",
      "🇹🇷 Saat 11:46."
    ],
    examples: [],
    related_word_ids: [2706]
  },
  {
    id: "vocab-saat-2707",
    category: "vocabulary",
    title: "thirteen minutes to twelve a.m. — öğlen on ikiye on üç var",
    keywords: ["thirteen minutes to twelve a.m.", "öğlen on ikiye on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:47.",
      "🇹🇷 Saat 11:47."
    ],
    examples: [],
    related_word_ids: [2707]
  },
  {
    id: "vocab-saat-2708",
    category: "vocabulary",
    title: "twelve minutes to twelve a.m. — öğlen on ikiye on iki var",
    keywords: ["twelve minutes to twelve a.m.", "öğlen on ikiye on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:48.",
      "🇹🇷 Saat 11:48."
    ],
    examples: [],
    related_word_ids: [2708]
  },
  {
    id: "vocab-saat-2709",
    category: "vocabulary",
    title: "eleven minutes to twelve a.m. — öğlen on ikiye on bir var",
    keywords: ["eleven minutes to twelve a.m.", "öğlen on ikiye on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:49.",
      "🇹🇷 Saat 11:49."
    ],
    examples: [],
    related_word_ids: [2709]
  },
  {
    id: "vocab-saat-2710",
    category: "vocabulary",
    title: "ten to twelve a.m. — öğlen on ikiye on var",
    keywords: ["ten to twelve a.m.", "öğlen on ikiye on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:50.",
      "🇹🇷 Saat 11:50."
    ],
    examples: [],
    related_word_ids: [2710]
  },
  {
    id: "vocab-saat-2711",
    category: "vocabulary",
    title: "nine minutes to twelve a.m. — öğlen on ikiye dokuz var",
    keywords: ["nine minutes to twelve a.m.", "öğlen on ikiye dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:51.",
      "🇹🇷 Saat 11:51."
    ],
    examples: [],
    related_word_ids: [2711]
  },
  {
    id: "vocab-saat-2712",
    category: "vocabulary",
    title: "eight minutes to twelve a.m. — öğlen on ikiye sekiz var",
    keywords: ["eight minutes to twelve a.m.", "öğlen on ikiye sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:52.",
      "🇹🇷 Saat 11:52."
    ],
    examples: [],
    related_word_ids: [2712]
  },
  {
    id: "vocab-saat-2713",
    category: "vocabulary",
    title: "seven minutes to twelve a.m. — öğlen on ikiye yedi var",
    keywords: ["seven minutes to twelve a.m.", "öğlen on ikiye yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:53.",
      "🇹🇷 Saat 11:53."
    ],
    examples: [],
    related_word_ids: [2713]
  },
  {
    id: "vocab-saat-2714",
    category: "vocabulary",
    title: "six minutes to twelve a.m. — öğlen on ikiye altı var",
    keywords: ["six minutes to twelve a.m.", "öğlen on ikiye altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:54.",
      "🇹🇷 Saat 11:54."
    ],
    examples: [],
    related_word_ids: [2714]
  },
  {
    id: "vocab-saat-2715",
    category: "vocabulary",
    title: "five to twelve a.m. — öğlen on ikiye beş var",
    keywords: ["five to twelve a.m.", "öğlen on ikiye beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:55.",
      "🇹🇷 Saat 11:55."
    ],
    examples: [],
    related_word_ids: [2715]
  },
  {
    id: "vocab-saat-2716",
    category: "vocabulary",
    title: "four minutes to twelve a.m. — öğlen on ikiye dört var",
    keywords: ["four minutes to twelve a.m.", "öğlen on ikiye dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:56.",
      "🇹🇷 Saat 11:56."
    ],
    examples: [],
    related_word_ids: [2716]
  },
  {
    id: "vocab-saat-2717",
    category: "vocabulary",
    title: "three minutes to twelve a.m. — öğlen on ikiye üç var",
    keywords: ["three minutes to twelve a.m.", "öğlen on ikiye üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:57.",
      "🇹🇷 Saat 11:57."
    ],
    examples: [],
    related_word_ids: [2717]
  },
  {
    id: "vocab-saat-2718",
    category: "vocabulary",
    title: "two minutes to twelve a.m. — öğlen on ikiye iki var",
    keywords: ["two minutes to twelve a.m.", "öğlen on ikiye iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:58.",
      "🇹🇷 Saat 11:58."
    ],
    examples: [],
    related_word_ids: [2718]
  },
  {
    id: "vocab-saat-2719",
    category: "vocabulary",
    title: "one minute to twelve a.m. — öğlen on ikiye bir var",
    keywords: ["one minute to twelve a.m.", "öğlen on ikiye bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 11:59.",
      "🇹🇷 Saat 11:59."
    ],
    examples: [],
    related_word_ids: [2719]
  },
  {
    id: "vocab-saat-2720",
    category: "vocabulary",
    title: "twelve o'clock / noon p.m. — öğlen on iki",
    keywords: ["twelve o'clock / noon p.m.", "öğlen on iki", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:00.",
      "🇹🇷 Saat 12:00."
    ],
    examples: [],
    related_word_ids: [2720]
  },
  {
    id: "vocab-saat-2721",
    category: "vocabulary",
    title: "one minute past twelve p.m. — öğlen on ikiyi bir geçiyor",
    keywords: ["one minute past twelve p.m.", "öğlen on ikiyi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:01.",
      "🇹🇷 Saat 12:01."
    ],
    examples: [],
    related_word_ids: [2721]
  },
  {
    id: "vocab-saat-2722",
    category: "vocabulary",
    title: "two minutes past twelve p.m. — öğlen on ikiyi iki geçiyor",
    keywords: ["two minutes past twelve p.m.", "öğlen on ikiyi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:02.",
      "🇹🇷 Saat 12:02."
    ],
    examples: [],
    related_word_ids: [2722]
  },
  {
    id: "vocab-saat-2723",
    category: "vocabulary",
    title: "three minutes past twelve p.m. — öğlen on ikiyi üç geçiyor",
    keywords: ["three minutes past twelve p.m.", "öğlen on ikiyi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:03.",
      "🇹🇷 Saat 12:03."
    ],
    examples: [],
    related_word_ids: [2723]
  },
  {
    id: "vocab-saat-2724",
    category: "vocabulary",
    title: "four minutes past twelve p.m. — öğlen on ikiyi dört geçiyor",
    keywords: ["four minutes past twelve p.m.", "öğlen on ikiyi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:04.",
      "🇹🇷 Saat 12:04."
    ],
    examples: [],
    related_word_ids: [2724]
  },
  {
    id: "vocab-saat-2725",
    category: "vocabulary",
    title: "five past twelve p.m. — öğlen on ikiyi beş geçiyor",
    keywords: ["five past twelve p.m.", "öğlen on ikiyi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:05.",
      "🇹🇷 Saat 12:05."
    ],
    examples: [],
    related_word_ids: [2725]
  },
  {
    id: "vocab-saat-2726",
    category: "vocabulary",
    title: "six minutes past twelve p.m. — öğlen on ikiyi altı geçiyor",
    keywords: ["six minutes past twelve p.m.", "öğlen on ikiyi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:06.",
      "🇹🇷 Saat 12:06."
    ],
    examples: [],
    related_word_ids: [2726]
  },
  {
    id: "vocab-saat-2727",
    category: "vocabulary",
    title: "seven minutes past twelve p.m. — öğlen on ikiyi yedi geçiyor",
    keywords: ["seven minutes past twelve p.m.", "öğlen on ikiyi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:07.",
      "🇹🇷 Saat 12:07."
    ],
    examples: [],
    related_word_ids: [2727]
  },
  {
    id: "vocab-saat-2728",
    category: "vocabulary",
    title: "eight minutes past twelve p.m. — öğlen on ikiyi sekiz geçiyor",
    keywords: ["eight minutes past twelve p.m.", "öğlen on ikiyi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:08.",
      "🇹🇷 Saat 12:08."
    ],
    examples: [],
    related_word_ids: [2728]
  },
  {
    id: "vocab-saat-2729",
    category: "vocabulary",
    title: "nine minutes past twelve p.m. — öğlen on ikiyi dokuz geçiyor",
    keywords: ["nine minutes past twelve p.m.", "öğlen on ikiyi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:09.",
      "🇹🇷 Saat 12:09."
    ],
    examples: [],
    related_word_ids: [2729]
  },
  {
    id: "vocab-saat-2730",
    category: "vocabulary",
    title: "ten past twelve p.m. — öğlen on ikiyi on geçiyor",
    keywords: ["ten past twelve p.m.", "öğlen on ikiyi on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:10.",
      "🇹🇷 Saat 12:10."
    ],
    examples: [],
    related_word_ids: [2730]
  },
  {
    id: "vocab-saat-2731",
    category: "vocabulary",
    title: "eleven minutes past twelve p.m. — öğlen on ikiyi on bir geçiyor",
    keywords: ["eleven minutes past twelve p.m.", "öğlen on ikiyi on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:11.",
      "🇹🇷 Saat 12:11."
    ],
    examples: [],
    related_word_ids: [2731]
  },
  {
    id: "vocab-saat-2732",
    category: "vocabulary",
    title: "twelve minutes past twelve p.m. — öğlen on ikiyi on iki geçiyor",
    keywords: ["twelve minutes past twelve p.m.", "öğlen on ikiyi on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:12.",
      "🇹🇷 Saat 12:12."
    ],
    examples: [],
    related_word_ids: [2732]
  },
  {
    id: "vocab-saat-2733",
    category: "vocabulary",
    title: "thirteen minutes past twelve p.m. — öğlen on ikiyi on üç geçiyor",
    keywords: ["thirteen minutes past twelve p.m.", "öğlen on ikiyi on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:13.",
      "🇹🇷 Saat 12:13."
    ],
    examples: [],
    related_word_ids: [2733]
  },
  {
    id: "vocab-saat-2734",
    category: "vocabulary",
    title: "fourteen minutes past twelve p.m. — öğlen on ikiyi on dört geçiyor",
    keywords: ["fourteen minutes past twelve p.m.", "öğlen on ikiyi on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:14.",
      "🇹🇷 Saat 12:14."
    ],
    examples: [],
    related_word_ids: [2734]
  },
  {
    id: "vocab-saat-2735",
    category: "vocabulary",
    title: "a quarter past twelve p.m. — öğlen on ikiyi çeyrek geçiyor",
    keywords: ["a quarter past twelve p.m.", "öğlen on ikiyi çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:15.",
      "🇹🇷 Saat 12:15."
    ],
    examples: [],
    related_word_ids: [2735]
  },
  {
    id: "vocab-saat-2736",
    category: "vocabulary",
    title: "sixteen minutes past twelve p.m. — öğlen on ikiyi on altı geçiyor",
    keywords: ["sixteen minutes past twelve p.m.", "öğlen on ikiyi on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:16.",
      "🇹🇷 Saat 12:16."
    ],
    examples: [],
    related_word_ids: [2736]
  },
  {
    id: "vocab-saat-2737",
    category: "vocabulary",
    title: "seventeen minutes past twelve p.m. — öğlen on ikiyi on yedi geçiyor",
    keywords: ["seventeen minutes past twelve p.m.", "öğlen on ikiyi on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:17.",
      "🇹🇷 Saat 12:17."
    ],
    examples: [],
    related_word_ids: [2737]
  },
  {
    id: "vocab-saat-2738",
    category: "vocabulary",
    title: "eighteen minutes past twelve p.m. — öğlen on ikiyi on sekiz geçiyor",
    keywords: ["eighteen minutes past twelve p.m.", "öğlen on ikiyi on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:18.",
      "🇹🇷 Saat 12:18."
    ],
    examples: [],
    related_word_ids: [2738]
  },
  {
    id: "vocab-saat-2739",
    category: "vocabulary",
    title: "nineteen minutes past twelve p.m. — öğlen on ikiyi on dokuz geçiyor",
    keywords: ["nineteen minutes past twelve p.m.", "öğlen on ikiyi on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:19.",
      "🇹🇷 Saat 12:19."
    ],
    examples: [],
    related_word_ids: [2739]
  },
  {
    id: "vocab-saat-2740",
    category: "vocabulary",
    title: "twenty past twelve p.m. — öğlen on ikiyi yirmi geçiyor",
    keywords: ["twenty past twelve p.m.", "öğlen on ikiyi yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:20.",
      "🇹🇷 Saat 12:20."
    ],
    examples: [],
    related_word_ids: [2740]
  },
  {
    id: "vocab-saat-2741",
    category: "vocabulary",
    title: "twenty-one minutes past twelve p.m. — öğlen on ikiyi yirmi bir geçiyor",
    keywords: ["twenty-one minutes past twelve p.m.", "öğlen on ikiyi yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:21.",
      "🇹🇷 Saat 12:21."
    ],
    examples: [],
    related_word_ids: [2741]
  },
  {
    id: "vocab-saat-2742",
    category: "vocabulary",
    title: "twenty-two minutes past twelve p.m. — öğlen on ikiyi yirmi iki geçiyor",
    keywords: ["twenty-two minutes past twelve p.m.", "öğlen on ikiyi yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:22.",
      "🇹🇷 Saat 12:22."
    ],
    examples: [],
    related_word_ids: [2742]
  },
  {
    id: "vocab-saat-2743",
    category: "vocabulary",
    title: "twenty-three minutes past twelve p.m. — öğlen on ikiyi yirmi üç geçiyor",
    keywords: ["twenty-three minutes past twelve p.m.", "öğlen on ikiyi yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:23.",
      "🇹🇷 Saat 12:23."
    ],
    examples: [],
    related_word_ids: [2743]
  },
  {
    id: "vocab-saat-2744",
    category: "vocabulary",
    title: "twenty-four minutes past twelve p.m. — öğlen on ikiyi yirmi dört geçiyor",
    keywords: ["twenty-four minutes past twelve p.m.", "öğlen on ikiyi yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:24.",
      "🇹🇷 Saat 12:24."
    ],
    examples: [],
    related_word_ids: [2744]
  },
  {
    id: "vocab-saat-2745",
    category: "vocabulary",
    title: "twenty-five past twelve p.m. — öğlen on ikiyi yirmi beş geçiyor",
    keywords: ["twenty-five past twelve p.m.", "öğlen on ikiyi yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:25.",
      "🇹🇷 Saat 12:25."
    ],
    examples: [],
    related_word_ids: [2745]
  },
  {
    id: "vocab-saat-2746",
    category: "vocabulary",
    title: "twenty-six minutes past twelve p.m. — öğlen on ikiyi yirmi altı geçiyor",
    keywords: ["twenty-six minutes past twelve p.m.", "öğlen on ikiyi yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:26.",
      "🇹🇷 Saat 12:26."
    ],
    examples: [],
    related_word_ids: [2746]
  },
  {
    id: "vocab-saat-2747",
    category: "vocabulary",
    title: "twenty-seven minutes past twelve p.m. — öğlen on ikiyi yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past twelve p.m.", "öğlen on ikiyi yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:27.",
      "🇹🇷 Saat 12:27."
    ],
    examples: [],
    related_word_ids: [2747]
  },
  {
    id: "vocab-saat-2748",
    category: "vocabulary",
    title: "twenty-eight minutes past twelve p.m. — öğlen on ikiyi yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past twelve p.m.", "öğlen on ikiyi yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:28.",
      "🇹🇷 Saat 12:28."
    ],
    examples: [],
    related_word_ids: [2748]
  },
  {
    id: "vocab-saat-2749",
    category: "vocabulary",
    title: "twenty-nine minutes past twelve p.m. — öğlen on ikiyi yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past twelve p.m.", "öğlen on ikiyi yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:29.",
      "🇹🇷 Saat 12:29."
    ],
    examples: [],
    related_word_ids: [2749]
  },
  {
    id: "vocab-saat-2750",
    category: "vocabulary",
    title: "half past twelve p.m. — öğlen on iki buçuk",
    keywords: ["half past twelve p.m.", "öğlen on iki buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:30.",
      "🇹🇷 Saat 12:30."
    ],
    examples: [],
    related_word_ids: [2750]
  },
  {
    id: "vocab-saat-2751",
    category: "vocabulary",
    title: "twenty-nine minutes to one p.m. — öğleden sonra bire yirmi dokuz var",
    keywords: ["twenty-nine minutes to one p.m.", "öğleden sonra bire yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:31.",
      "🇹🇷 Saat 12:31."
    ],
    examples: [],
    related_word_ids: [2751]
  },
  {
    id: "vocab-saat-2752",
    category: "vocabulary",
    title: "twenty-eight minutes to one p.m. — öğleden sonra bire yirmi sekiz var",
    keywords: ["twenty-eight minutes to one p.m.", "öğleden sonra bire yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:32.",
      "🇹🇷 Saat 12:32."
    ],
    examples: [],
    related_word_ids: [2752]
  },
  {
    id: "vocab-saat-2753",
    category: "vocabulary",
    title: "twenty-seven minutes to one p.m. — öğleden sonra bire yirmi yedi var",
    keywords: ["twenty-seven minutes to one p.m.", "öğleden sonra bire yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:33.",
      "🇹🇷 Saat 12:33."
    ],
    examples: [],
    related_word_ids: [2753]
  },
  {
    id: "vocab-saat-2754",
    category: "vocabulary",
    title: "twenty-six minutes to one p.m. — öğleden sonra bire yirmi altı var",
    keywords: ["twenty-six minutes to one p.m.", "öğleden sonra bire yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:34.",
      "🇹🇷 Saat 12:34."
    ],
    examples: [],
    related_word_ids: [2754]
  },
  {
    id: "vocab-saat-2755",
    category: "vocabulary",
    title: "twenty-five to one p.m. — öğleden sonra bire yirmi beş var",
    keywords: ["twenty-five to one p.m.", "öğleden sonra bire yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:35.",
      "🇹🇷 Saat 12:35."
    ],
    examples: [],
    related_word_ids: [2755]
  },
  {
    id: "vocab-saat-2756",
    category: "vocabulary",
    title: "twenty-four minutes to one p.m. — öğleden sonra bire yirmi dört var",
    keywords: ["twenty-four minutes to one p.m.", "öğleden sonra bire yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:36.",
      "🇹🇷 Saat 12:36."
    ],
    examples: [],
    related_word_ids: [2756]
  },
  {
    id: "vocab-saat-2757",
    category: "vocabulary",
    title: "twenty-three minutes to one p.m. — öğleden sonra bire yirmi üç var",
    keywords: ["twenty-three minutes to one p.m.", "öğleden sonra bire yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:37.",
      "🇹🇷 Saat 12:37."
    ],
    examples: [],
    related_word_ids: [2757]
  },
  {
    id: "vocab-saat-2758",
    category: "vocabulary",
    title: "twenty-two minutes to one p.m. — öğleden sonra bire yirmi iki var",
    keywords: ["twenty-two minutes to one p.m.", "öğleden sonra bire yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:38.",
      "🇹🇷 Saat 12:38."
    ],
    examples: [],
    related_word_ids: [2758]
  },
  {
    id: "vocab-saat-2759",
    category: "vocabulary",
    title: "twenty-one minutes to one p.m. — öğleden sonra bire yirmi bir var",
    keywords: ["twenty-one minutes to one p.m.", "öğleden sonra bire yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:39.",
      "🇹🇷 Saat 12:39."
    ],
    examples: [],
    related_word_ids: [2759]
  },
  {
    id: "vocab-saat-2760",
    category: "vocabulary",
    title: "twenty to one p.m. — öğleden sonra bire yirmi var",
    keywords: ["twenty to one p.m.", "öğleden sonra bire yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:40.",
      "🇹🇷 Saat 12:40."
    ],
    examples: [],
    related_word_ids: [2760]
  },
  {
    id: "vocab-saat-2761",
    category: "vocabulary",
    title: "nineteen minutes to one p.m. — öğleden sonra bire on dokuz var",
    keywords: ["nineteen minutes to one p.m.", "öğleden sonra bire on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:41.",
      "🇹🇷 Saat 12:41."
    ],
    examples: [],
    related_word_ids: [2761]
  },
  {
    id: "vocab-saat-2762",
    category: "vocabulary",
    title: "eighteen minutes to one p.m. — öğleden sonra bire on sekiz var",
    keywords: ["eighteen minutes to one p.m.", "öğleden sonra bire on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:42.",
      "🇹🇷 Saat 12:42."
    ],
    examples: [],
    related_word_ids: [2762]
  },
  {
    id: "vocab-saat-2763",
    category: "vocabulary",
    title: "seventeen minutes to one p.m. — öğleden sonra bire on yedi var",
    keywords: ["seventeen minutes to one p.m.", "öğleden sonra bire on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:43.",
      "🇹🇷 Saat 12:43."
    ],
    examples: [],
    related_word_ids: [2763]
  },
  {
    id: "vocab-saat-2764",
    category: "vocabulary",
    title: "sixteen minutes to one p.m. — öğleden sonra bire on altı var",
    keywords: ["sixteen minutes to one p.m.", "öğleden sonra bire on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:44.",
      "🇹🇷 Saat 12:44."
    ],
    examples: [],
    related_word_ids: [2764]
  },
  {
    id: "vocab-saat-2765",
    category: "vocabulary",
    title: "a quarter to one p.m. — öğleden sonra bire çeyrek var",
    keywords: ["a quarter to one p.m.", "öğleden sonra bire çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:45.",
      "🇹🇷 Saat 12:45."
    ],
    examples: [],
    related_word_ids: [2765]
  },
  {
    id: "vocab-saat-2766",
    category: "vocabulary",
    title: "fourteen minutes to one p.m. — öğleden sonra bire on dört var",
    keywords: ["fourteen minutes to one p.m.", "öğleden sonra bire on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:46.",
      "🇹🇷 Saat 12:46."
    ],
    examples: [],
    related_word_ids: [2766]
  },
  {
    id: "vocab-saat-2767",
    category: "vocabulary",
    title: "thirteen minutes to one p.m. — öğleden sonra bire on üç var",
    keywords: ["thirteen minutes to one p.m.", "öğleden sonra bire on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:47.",
      "🇹🇷 Saat 12:47."
    ],
    examples: [],
    related_word_ids: [2767]
  },
  {
    id: "vocab-saat-2768",
    category: "vocabulary",
    title: "twelve minutes to one p.m. — öğleden sonra bire on iki var",
    keywords: ["twelve minutes to one p.m.", "öğleden sonra bire on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:48.",
      "🇹🇷 Saat 12:48."
    ],
    examples: [],
    related_word_ids: [2768]
  },
  {
    id: "vocab-saat-2769",
    category: "vocabulary",
    title: "eleven minutes to one p.m. — öğleden sonra bire on bir var",
    keywords: ["eleven minutes to one p.m.", "öğleden sonra bire on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:49.",
      "🇹🇷 Saat 12:49."
    ],
    examples: [],
    related_word_ids: [2769]
  },
  {
    id: "vocab-saat-2770",
    category: "vocabulary",
    title: "ten to one p.m. — öğleden sonra bire on var",
    keywords: ["ten to one p.m.", "öğleden sonra bire on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:50.",
      "🇹🇷 Saat 12:50."
    ],
    examples: [],
    related_word_ids: [2770]
  },
  {
    id: "vocab-saat-2771",
    category: "vocabulary",
    title: "nine minutes to one p.m. — öğleden sonra bire dokuz var",
    keywords: ["nine minutes to one p.m.", "öğleden sonra bire dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:51.",
      "🇹🇷 Saat 12:51."
    ],
    examples: [],
    related_word_ids: [2771]
  },
  {
    id: "vocab-saat-2772",
    category: "vocabulary",
    title: "eight minutes to one p.m. — öğleden sonra bire sekiz var",
    keywords: ["eight minutes to one p.m.", "öğleden sonra bire sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:52.",
      "🇹🇷 Saat 12:52."
    ],
    examples: [],
    related_word_ids: [2772]
  },
  {
    id: "vocab-saat-2773",
    category: "vocabulary",
    title: "seven minutes to one p.m. — öğleden sonra bire yedi var",
    keywords: ["seven minutes to one p.m.", "öğleden sonra bire yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:53.",
      "🇹🇷 Saat 12:53."
    ],
    examples: [],
    related_word_ids: [2773]
  },
  {
    id: "vocab-saat-2774",
    category: "vocabulary",
    title: "six minutes to one p.m. — öğleden sonra bire altı var",
    keywords: ["six minutes to one p.m.", "öğleden sonra bire altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:54.",
      "🇹🇷 Saat 12:54."
    ],
    examples: [],
    related_word_ids: [2774]
  },
  {
    id: "vocab-saat-2775",
    category: "vocabulary",
    title: "five to one p.m. — öğleden sonra bire beş var",
    keywords: ["five to one p.m.", "öğleden sonra bire beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:55.",
      "🇹🇷 Saat 12:55."
    ],
    examples: [],
    related_word_ids: [2775]
  },
  {
    id: "vocab-saat-2776",
    category: "vocabulary",
    title: "four minutes to one p.m. — öğleden sonra bire dört var",
    keywords: ["four minutes to one p.m.", "öğleden sonra bire dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:56.",
      "🇹🇷 Saat 12:56."
    ],
    examples: [],
    related_word_ids: [2776]
  },
  {
    id: "vocab-saat-2777",
    category: "vocabulary",
    title: "three minutes to one p.m. — öğleden sonra bire üç var",
    keywords: ["three minutes to one p.m.", "öğleden sonra bire üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:57.",
      "🇹🇷 Saat 12:57."
    ],
    examples: [],
    related_word_ids: [2777]
  },
  {
    id: "vocab-saat-2778",
    category: "vocabulary",
    title: "two minutes to one p.m. — öğleden sonra bire iki var",
    keywords: ["two minutes to one p.m.", "öğleden sonra bire iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:58.",
      "🇹🇷 Saat 12:58."
    ],
    examples: [],
    related_word_ids: [2778]
  },
  {
    id: "vocab-saat-2779",
    category: "vocabulary",
    title: "one minute to one p.m. — öğleden sonra bire bir var",
    keywords: ["one minute to one p.m.", "öğleden sonra bire bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 12:59.",
      "🇹🇷 Saat 12:59."
    ],
    examples: [],
    related_word_ids: [2779]
  },
  {
    id: "vocab-saat-2780",
    category: "vocabulary",
    title: "one o'clock p.m. — öğleden sonra bir",
    keywords: ["one o'clock p.m.", "öğleden sonra bir", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:00.",
      "🇹🇷 Saat 13:00."
    ],
    examples: [],
    related_word_ids: [2780]
  },
  {
    id: "vocab-saat-2781",
    category: "vocabulary",
    title: "one minute past one p.m. — öğleden sonra biri bir geçiyor",
    keywords: ["one minute past one p.m.", "öğleden sonra biri bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:01.",
      "🇹🇷 Saat 13:01."
    ],
    examples: [],
    related_word_ids: [2781]
  },
  {
    id: "vocab-saat-2782",
    category: "vocabulary",
    title: "two minutes past one p.m. — öğleden sonra biri iki geçiyor",
    keywords: ["two minutes past one p.m.", "öğleden sonra biri iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:02.",
      "🇹🇷 Saat 13:02."
    ],
    examples: [],
    related_word_ids: [2782]
  },
  {
    id: "vocab-saat-2783",
    category: "vocabulary",
    title: "three minutes past one p.m. — öğleden sonra biri üç geçiyor",
    keywords: ["three minutes past one p.m.", "öğleden sonra biri üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:03.",
      "🇹🇷 Saat 13:03."
    ],
    examples: [],
    related_word_ids: [2783]
  },
  {
    id: "vocab-saat-2784",
    category: "vocabulary",
    title: "four minutes past one p.m. — öğleden sonra biri dört geçiyor",
    keywords: ["four minutes past one p.m.", "öğleden sonra biri dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:04.",
      "🇹🇷 Saat 13:04."
    ],
    examples: [],
    related_word_ids: [2784]
  },
  {
    id: "vocab-saat-2785",
    category: "vocabulary",
    title: "five past one p.m. — öğleden sonra biri beş geçiyor",
    keywords: ["five past one p.m.", "öğleden sonra biri beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:05.",
      "🇹🇷 Saat 13:05."
    ],
    examples: [],
    related_word_ids: [2785]
  },
  {
    id: "vocab-saat-2786",
    category: "vocabulary",
    title: "six minutes past one p.m. — öğleden sonra biri altı geçiyor",
    keywords: ["six minutes past one p.m.", "öğleden sonra biri altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:06.",
      "🇹🇷 Saat 13:06."
    ],
    examples: [],
    related_word_ids: [2786]
  },
  {
    id: "vocab-saat-2787",
    category: "vocabulary",
    title: "seven minutes past one p.m. — öğleden sonra biri yedi geçiyor",
    keywords: ["seven minutes past one p.m.", "öğleden sonra biri yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:07.",
      "🇹🇷 Saat 13:07."
    ],
    examples: [],
    related_word_ids: [2787]
  },
  {
    id: "vocab-saat-2788",
    category: "vocabulary",
    title: "eight minutes past one p.m. — öğleden sonra biri sekiz geçiyor",
    keywords: ["eight minutes past one p.m.", "öğleden sonra biri sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:08.",
      "🇹🇷 Saat 13:08."
    ],
    examples: [],
    related_word_ids: [2788]
  },
  {
    id: "vocab-saat-2789",
    category: "vocabulary",
    title: "nine minutes past one p.m. — öğleden sonra biri dokuz geçiyor",
    keywords: ["nine minutes past one p.m.", "öğleden sonra biri dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:09.",
      "🇹🇷 Saat 13:09."
    ],
    examples: [],
    related_word_ids: [2789]
  },
  {
    id: "vocab-saat-2790",
    category: "vocabulary",
    title: "ten past one p.m. — öğleden sonra biri on geçiyor",
    keywords: ["ten past one p.m.", "öğleden sonra biri on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:10.",
      "🇹🇷 Saat 13:10."
    ],
    examples: [],
    related_word_ids: [2790]
  },
  {
    id: "vocab-saat-2791",
    category: "vocabulary",
    title: "eleven minutes past one p.m. — öğleden sonra biri on bir geçiyor",
    keywords: ["eleven minutes past one p.m.", "öğleden sonra biri on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:11.",
      "🇹🇷 Saat 13:11."
    ],
    examples: [],
    related_word_ids: [2791]
  },
  {
    id: "vocab-saat-2792",
    category: "vocabulary",
    title: "twelve minutes past one p.m. — öğleden sonra biri on iki geçiyor",
    keywords: ["twelve minutes past one p.m.", "öğleden sonra biri on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:12.",
      "🇹🇷 Saat 13:12."
    ],
    examples: [],
    related_word_ids: [2792]
  },
  {
    id: "vocab-saat-2793",
    category: "vocabulary",
    title: "thirteen minutes past one p.m. — öğleden sonra biri on üç geçiyor",
    keywords: ["thirteen minutes past one p.m.", "öğleden sonra biri on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:13.",
      "🇹🇷 Saat 13:13."
    ],
    examples: [],
    related_word_ids: [2793]
  },
  {
    id: "vocab-saat-2794",
    category: "vocabulary",
    title: "fourteen minutes past one p.m. — öğleden sonra biri on dört geçiyor",
    keywords: ["fourteen minutes past one p.m.", "öğleden sonra biri on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:14.",
      "🇹🇷 Saat 13:14."
    ],
    examples: [],
    related_word_ids: [2794]
  },
  {
    id: "vocab-saat-2795",
    category: "vocabulary",
    title: "a quarter past one p.m. — öğleden sonra biri çeyrek geçiyor",
    keywords: ["a quarter past one p.m.", "öğleden sonra biri çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:15.",
      "🇹🇷 Saat 13:15."
    ],
    examples: [],
    related_word_ids: [2795]
  },
  {
    id: "vocab-saat-2796",
    category: "vocabulary",
    title: "sixteen minutes past one p.m. — öğleden sonra biri on altı geçiyor",
    keywords: ["sixteen minutes past one p.m.", "öğleden sonra biri on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:16.",
      "🇹🇷 Saat 13:16."
    ],
    examples: [],
    related_word_ids: [2796]
  },
  {
    id: "vocab-saat-2797",
    category: "vocabulary",
    title: "seventeen minutes past one p.m. — öğleden sonra biri on yedi geçiyor",
    keywords: ["seventeen minutes past one p.m.", "öğleden sonra biri on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:17.",
      "🇹🇷 Saat 13:17."
    ],
    examples: [],
    related_word_ids: [2797]
  },
  {
    id: "vocab-saat-2798",
    category: "vocabulary",
    title: "eighteen minutes past one p.m. — öğleden sonra biri on sekiz geçiyor",
    keywords: ["eighteen minutes past one p.m.", "öğleden sonra biri on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:18.",
      "🇹🇷 Saat 13:18."
    ],
    examples: [],
    related_word_ids: [2798]
  },
  {
    id: "vocab-saat-2799",
    category: "vocabulary",
    title: "nineteen minutes past one p.m. — öğleden sonra biri on dokuz geçiyor",
    keywords: ["nineteen minutes past one p.m.", "öğleden sonra biri on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:19.",
      "🇹🇷 Saat 13:19."
    ],
    examples: [],
    related_word_ids: [2799]
  },
  {
    id: "vocab-saat-2800",
    category: "vocabulary",
    title: "twenty past one p.m. — öğleden sonra biri yirmi geçiyor",
    keywords: ["twenty past one p.m.", "öğleden sonra biri yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:20.",
      "🇹🇷 Saat 13:20."
    ],
    examples: [],
    related_word_ids: [2800]
  },
  {
    id: "vocab-saat-2801",
    category: "vocabulary",
    title: "twenty-one minutes past one p.m. — öğleden sonra biri yirmi bir geçiyor",
    keywords: ["twenty-one minutes past one p.m.", "öğleden sonra biri yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:21.",
      "🇹🇷 Saat 13:21."
    ],
    examples: [],
    related_word_ids: [2801]
  },
  {
    id: "vocab-saat-2802",
    category: "vocabulary",
    title: "twenty-two minutes past one p.m. — öğleden sonra biri yirmi iki geçiyor",
    keywords: ["twenty-two minutes past one p.m.", "öğleden sonra biri yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:22.",
      "🇹🇷 Saat 13:22."
    ],
    examples: [],
    related_word_ids: [2802]
  },
  {
    id: "vocab-saat-2803",
    category: "vocabulary",
    title: "twenty-three minutes past one p.m. — öğleden sonra biri yirmi üç geçiyor",
    keywords: ["twenty-three minutes past one p.m.", "öğleden sonra biri yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:23.",
      "🇹🇷 Saat 13:23."
    ],
    examples: [],
    related_word_ids: [2803]
  },
  {
    id: "vocab-saat-2804",
    category: "vocabulary",
    title: "twenty-four minutes past one p.m. — öğleden sonra biri yirmi dört geçiyor",
    keywords: ["twenty-four minutes past one p.m.", "öğleden sonra biri yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:24.",
      "🇹🇷 Saat 13:24."
    ],
    examples: [],
    related_word_ids: [2804]
  },
  {
    id: "vocab-saat-2805",
    category: "vocabulary",
    title: "twenty-five past one p.m. — öğleden sonra biri yirmi beş geçiyor",
    keywords: ["twenty-five past one p.m.", "öğleden sonra biri yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:25.",
      "🇹🇷 Saat 13:25."
    ],
    examples: [],
    related_word_ids: [2805]
  },
  {
    id: "vocab-saat-2806",
    category: "vocabulary",
    title: "twenty-six minutes past one p.m. — öğleden sonra biri yirmi altı geçiyor",
    keywords: ["twenty-six minutes past one p.m.", "öğleden sonra biri yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:26.",
      "🇹🇷 Saat 13:26."
    ],
    examples: [],
    related_word_ids: [2806]
  },
  {
    id: "vocab-saat-2807",
    category: "vocabulary",
    title: "twenty-seven minutes past one p.m. — öğleden sonra biri yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past one p.m.", "öğleden sonra biri yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:27.",
      "🇹🇷 Saat 13:27."
    ],
    examples: [],
    related_word_ids: [2807]
  },
  {
    id: "vocab-saat-2808",
    category: "vocabulary",
    title: "twenty-eight minutes past one p.m. — öğleden sonra biri yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past one p.m.", "öğleden sonra biri yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:28.",
      "🇹🇷 Saat 13:28."
    ],
    examples: [],
    related_word_ids: [2808]
  },
  {
    id: "vocab-saat-2809",
    category: "vocabulary",
    title: "twenty-nine minutes past one p.m. — öğleden sonra biri yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past one p.m.", "öğleden sonra biri yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:29.",
      "🇹🇷 Saat 13:29."
    ],
    examples: [],
    related_word_ids: [2809]
  },
  {
    id: "vocab-saat-2810",
    category: "vocabulary",
    title: "half past one p.m. — öğleden sonra bir buçuk",
    keywords: ["half past one p.m.", "öğleden sonra bir buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:30.",
      "🇹🇷 Saat 13:30."
    ],
    examples: [],
    related_word_ids: [2810]
  },
  {
    id: "vocab-saat-2811",
    category: "vocabulary",
    title: "twenty-nine minutes to two p.m. — öğleden sonra ikiye yirmi dokuz var",
    keywords: ["twenty-nine minutes to two p.m.", "öğleden sonra ikiye yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:31.",
      "🇹🇷 Saat 13:31."
    ],
    examples: [],
    related_word_ids: [2811]
  },
  {
    id: "vocab-saat-2812",
    category: "vocabulary",
    title: "twenty-eight minutes to two p.m. — öğleden sonra ikiye yirmi sekiz var",
    keywords: ["twenty-eight minutes to two p.m.", "öğleden sonra ikiye yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:32.",
      "🇹🇷 Saat 13:32."
    ],
    examples: [],
    related_word_ids: [2812]
  },
  {
    id: "vocab-saat-2813",
    category: "vocabulary",
    title: "twenty-seven minutes to two p.m. — öğleden sonra ikiye yirmi yedi var",
    keywords: ["twenty-seven minutes to two p.m.", "öğleden sonra ikiye yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:33.",
      "🇹🇷 Saat 13:33."
    ],
    examples: [],
    related_word_ids: [2813]
  },
  {
    id: "vocab-saat-2814",
    category: "vocabulary",
    title: "twenty-six minutes to two p.m. — öğleden sonra ikiye yirmi altı var",
    keywords: ["twenty-six minutes to two p.m.", "öğleden sonra ikiye yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:34.",
      "🇹🇷 Saat 13:34."
    ],
    examples: [],
    related_word_ids: [2814]
  },
  {
    id: "vocab-saat-2815",
    category: "vocabulary",
    title: "twenty-five to two p.m. — öğleden sonra ikiye yirmi beş var",
    keywords: ["twenty-five to two p.m.", "öğleden sonra ikiye yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:35.",
      "🇹🇷 Saat 13:35."
    ],
    examples: [],
    related_word_ids: [2815]
  },
  {
    id: "vocab-saat-2816",
    category: "vocabulary",
    title: "twenty-four minutes to two p.m. — öğleden sonra ikiye yirmi dört var",
    keywords: ["twenty-four minutes to two p.m.", "öğleden sonra ikiye yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:36.",
      "🇹🇷 Saat 13:36."
    ],
    examples: [],
    related_word_ids: [2816]
  },
  {
    id: "vocab-saat-2817",
    category: "vocabulary",
    title: "twenty-three minutes to two p.m. — öğleden sonra ikiye yirmi üç var",
    keywords: ["twenty-three minutes to two p.m.", "öğleden sonra ikiye yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:37.",
      "🇹🇷 Saat 13:37."
    ],
    examples: [],
    related_word_ids: [2817]
  },
  {
    id: "vocab-saat-2818",
    category: "vocabulary",
    title: "twenty-two minutes to two p.m. — öğleden sonra ikiye yirmi iki var",
    keywords: ["twenty-two minutes to two p.m.", "öğleden sonra ikiye yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:38.",
      "🇹🇷 Saat 13:38."
    ],
    examples: [],
    related_word_ids: [2818]
  },
  {
    id: "vocab-saat-2819",
    category: "vocabulary",
    title: "twenty-one minutes to two p.m. — öğleden sonra ikiye yirmi bir var",
    keywords: ["twenty-one minutes to two p.m.", "öğleden sonra ikiye yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:39.",
      "🇹🇷 Saat 13:39."
    ],
    examples: [],
    related_word_ids: [2819]
  },
  {
    id: "vocab-saat-2820",
    category: "vocabulary",
    title: "twenty to two p.m. — öğleden sonra ikiye yirmi var",
    keywords: ["twenty to two p.m.", "öğleden sonra ikiye yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:40.",
      "🇹🇷 Saat 13:40."
    ],
    examples: [],
    related_word_ids: [2820]
  },
  {
    id: "vocab-saat-2821",
    category: "vocabulary",
    title: "nineteen minutes to two p.m. — öğleden sonra ikiye on dokuz var",
    keywords: ["nineteen minutes to two p.m.", "öğleden sonra ikiye on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:41.",
      "🇹🇷 Saat 13:41."
    ],
    examples: [],
    related_word_ids: [2821]
  },
  {
    id: "vocab-saat-2822",
    category: "vocabulary",
    title: "eighteen minutes to two p.m. — öğleden sonra ikiye on sekiz var",
    keywords: ["eighteen minutes to two p.m.", "öğleden sonra ikiye on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:42.",
      "🇹🇷 Saat 13:42."
    ],
    examples: [],
    related_word_ids: [2822]
  },
  {
    id: "vocab-saat-2823",
    category: "vocabulary",
    title: "seventeen minutes to two p.m. — öğleden sonra ikiye on yedi var",
    keywords: ["seventeen minutes to two p.m.", "öğleden sonra ikiye on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:43.",
      "🇹🇷 Saat 13:43."
    ],
    examples: [],
    related_word_ids: [2823]
  },
  {
    id: "vocab-saat-2824",
    category: "vocabulary",
    title: "sixteen minutes to two p.m. — öğleden sonra ikiye on altı var",
    keywords: ["sixteen minutes to two p.m.", "öğleden sonra ikiye on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:44.",
      "🇹🇷 Saat 13:44."
    ],
    examples: [],
    related_word_ids: [2824]
  },
  {
    id: "vocab-saat-2825",
    category: "vocabulary",
    title: "a quarter to two p.m. — öğleden sonra ikiye çeyrek var",
    keywords: ["a quarter to two p.m.", "öğleden sonra ikiye çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:45.",
      "🇹🇷 Saat 13:45."
    ],
    examples: [],
    related_word_ids: [2825]
  },
  {
    id: "vocab-saat-2826",
    category: "vocabulary",
    title: "fourteen minutes to two p.m. — öğleden sonra ikiye on dört var",
    keywords: ["fourteen minutes to two p.m.", "öğleden sonra ikiye on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:46.",
      "🇹🇷 Saat 13:46."
    ],
    examples: [],
    related_word_ids: [2826]
  },
  {
    id: "vocab-saat-2827",
    category: "vocabulary",
    title: "thirteen minutes to two p.m. — öğleden sonra ikiye on üç var",
    keywords: ["thirteen minutes to two p.m.", "öğleden sonra ikiye on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:47.",
      "🇹🇷 Saat 13:47."
    ],
    examples: [],
    related_word_ids: [2827]
  },
  {
    id: "vocab-saat-2828",
    category: "vocabulary",
    title: "twelve minutes to two p.m. — öğleden sonra ikiye on iki var",
    keywords: ["twelve minutes to two p.m.", "öğleden sonra ikiye on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:48.",
      "🇹🇷 Saat 13:48."
    ],
    examples: [],
    related_word_ids: [2828]
  },
  {
    id: "vocab-saat-2829",
    category: "vocabulary",
    title: "eleven minutes to two p.m. — öğleden sonra ikiye on bir var",
    keywords: ["eleven minutes to two p.m.", "öğleden sonra ikiye on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:49.",
      "🇹🇷 Saat 13:49."
    ],
    examples: [],
    related_word_ids: [2829]
  },
  {
    id: "vocab-saat-2830",
    category: "vocabulary",
    title: "ten to two p.m. — öğleden sonra ikiye on var",
    keywords: ["ten to two p.m.", "öğleden sonra ikiye on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:50.",
      "🇹🇷 Saat 13:50."
    ],
    examples: [],
    related_word_ids: [2830]
  },
  {
    id: "vocab-saat-2831",
    category: "vocabulary",
    title: "nine minutes to two p.m. — öğleden sonra ikiye dokuz var",
    keywords: ["nine minutes to two p.m.", "öğleden sonra ikiye dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:51.",
      "🇹🇷 Saat 13:51."
    ],
    examples: [],
    related_word_ids: [2831]
  },
  {
    id: "vocab-saat-2832",
    category: "vocabulary",
    title: "eight minutes to two p.m. — öğleden sonra ikiye sekiz var",
    keywords: ["eight minutes to two p.m.", "öğleden sonra ikiye sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:52.",
      "🇹🇷 Saat 13:52."
    ],
    examples: [],
    related_word_ids: [2832]
  },
  {
    id: "vocab-saat-2833",
    category: "vocabulary",
    title: "seven minutes to two p.m. — öğleden sonra ikiye yedi var",
    keywords: ["seven minutes to two p.m.", "öğleden sonra ikiye yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:53.",
      "🇹🇷 Saat 13:53."
    ],
    examples: [],
    related_word_ids: [2833]
  },
  {
    id: "vocab-saat-2834",
    category: "vocabulary",
    title: "six minutes to two p.m. — öğleden sonra ikiye altı var",
    keywords: ["six minutes to two p.m.", "öğleden sonra ikiye altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:54.",
      "🇹🇷 Saat 13:54."
    ],
    examples: [],
    related_word_ids: [2834]
  },
  {
    id: "vocab-saat-2835",
    category: "vocabulary",
    title: "five to two p.m. — öğleden sonra ikiye beş var",
    keywords: ["five to two p.m.", "öğleden sonra ikiye beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:55.",
      "🇹🇷 Saat 13:55."
    ],
    examples: [],
    related_word_ids: [2835]
  },
  {
    id: "vocab-saat-2836",
    category: "vocabulary",
    title: "four minutes to two p.m. — öğleden sonra ikiye dört var",
    keywords: ["four minutes to two p.m.", "öğleden sonra ikiye dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:56.",
      "🇹🇷 Saat 13:56."
    ],
    examples: [],
    related_word_ids: [2836]
  },
  {
    id: "vocab-saat-2837",
    category: "vocabulary",
    title: "three minutes to two p.m. — öğleden sonra ikiye üç var",
    keywords: ["three minutes to two p.m.", "öğleden sonra ikiye üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:57.",
      "🇹🇷 Saat 13:57."
    ],
    examples: [],
    related_word_ids: [2837]
  },
  {
    id: "vocab-saat-2838",
    category: "vocabulary",
    title: "two minutes to two p.m. — öğleden sonra ikiye iki var",
    keywords: ["two minutes to two p.m.", "öğleden sonra ikiye iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:58.",
      "🇹🇷 Saat 13:58."
    ],
    examples: [],
    related_word_ids: [2838]
  },
  {
    id: "vocab-saat-2839",
    category: "vocabulary",
    title: "one minute to two p.m. — öğleden sonra ikiye bir var",
    keywords: ["one minute to two p.m.", "öğleden sonra ikiye bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 13:59.",
      "🇹🇷 Saat 13:59."
    ],
    examples: [],
    related_word_ids: [2839]
  },
  {
    id: "vocab-saat-2840",
    category: "vocabulary",
    title: "two o'clock p.m. — öğleden sonra iki",
    keywords: ["two o'clock p.m.", "öğleden sonra iki", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:00.",
      "🇹🇷 Saat 14:00."
    ],
    examples: [],
    related_word_ids: [2840]
  },
  {
    id: "vocab-saat-2841",
    category: "vocabulary",
    title: "one minute past two p.m. — öğleden sonra ikiyi bir geçiyor",
    keywords: ["one minute past two p.m.", "öğleden sonra ikiyi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:01.",
      "🇹🇷 Saat 14:01."
    ],
    examples: [],
    related_word_ids: [2841]
  },
  {
    id: "vocab-saat-2842",
    category: "vocabulary",
    title: "two minutes past two p.m. — öğleden sonra ikiyi iki geçiyor",
    keywords: ["two minutes past two p.m.", "öğleden sonra ikiyi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:02.",
      "🇹🇷 Saat 14:02."
    ],
    examples: [],
    related_word_ids: [2842]
  },
  {
    id: "vocab-saat-2843",
    category: "vocabulary",
    title: "three minutes past two p.m. — öğleden sonra ikiyi üç geçiyor",
    keywords: ["three minutes past two p.m.", "öğleden sonra ikiyi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:03.",
      "🇹🇷 Saat 14:03."
    ],
    examples: [],
    related_word_ids: [2843]
  },
  {
    id: "vocab-saat-2844",
    category: "vocabulary",
    title: "four minutes past two p.m. — öğleden sonra ikiyi dört geçiyor",
    keywords: ["four minutes past two p.m.", "öğleden sonra ikiyi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:04.",
      "🇹🇷 Saat 14:04."
    ],
    examples: [],
    related_word_ids: [2844]
  },
  {
    id: "vocab-saat-2845",
    category: "vocabulary",
    title: "five past two p.m. — öğleden sonra ikiyi beş geçiyor",
    keywords: ["five past two p.m.", "öğleden sonra ikiyi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:05.",
      "🇹🇷 Saat 14:05."
    ],
    examples: [],
    related_word_ids: [2845]
  },
  {
    id: "vocab-saat-2846",
    category: "vocabulary",
    title: "six minutes past two p.m. — öğleden sonra ikiyi altı geçiyor",
    keywords: ["six minutes past two p.m.", "öğleden sonra ikiyi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:06.",
      "🇹🇷 Saat 14:06."
    ],
    examples: [],
    related_word_ids: [2846]
  },
  {
    id: "vocab-saat-2847",
    category: "vocabulary",
    title: "seven minutes past two p.m. — öğleden sonra ikiyi yedi geçiyor",
    keywords: ["seven minutes past two p.m.", "öğleden sonra ikiyi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:07.",
      "🇹🇷 Saat 14:07."
    ],
    examples: [],
    related_word_ids: [2847]
  },
  {
    id: "vocab-saat-2848",
    category: "vocabulary",
    title: "eight minutes past two p.m. — öğleden sonra ikiyi sekiz geçiyor",
    keywords: ["eight minutes past two p.m.", "öğleden sonra ikiyi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:08.",
      "🇹🇷 Saat 14:08."
    ],
    examples: [],
    related_word_ids: [2848]
  },
  {
    id: "vocab-saat-2849",
    category: "vocabulary",
    title: "nine minutes past two p.m. — öğleden sonra ikiyi dokuz geçiyor",
    keywords: ["nine minutes past two p.m.", "öğleden sonra ikiyi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:09.",
      "🇹🇷 Saat 14:09."
    ],
    examples: [],
    related_word_ids: [2849]
  },
  {
    id: "vocab-saat-2850",
    category: "vocabulary",
    title: "ten past two p.m. — öğleden sonra ikiyi on geçiyor",
    keywords: ["ten past two p.m.", "öğleden sonra ikiyi on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:10.",
      "🇹🇷 Saat 14:10."
    ],
    examples: [],
    related_word_ids: [2850]
  },
  {
    id: "vocab-saat-2851",
    category: "vocabulary",
    title: "eleven minutes past two p.m. — öğleden sonra ikiyi on bir geçiyor",
    keywords: ["eleven minutes past two p.m.", "öğleden sonra ikiyi on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:11.",
      "🇹🇷 Saat 14:11."
    ],
    examples: [],
    related_word_ids: [2851]
  },
  {
    id: "vocab-saat-2852",
    category: "vocabulary",
    title: "twelve minutes past two p.m. — öğleden sonra ikiyi on iki geçiyor",
    keywords: ["twelve minutes past two p.m.", "öğleden sonra ikiyi on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:12.",
      "🇹🇷 Saat 14:12."
    ],
    examples: [],
    related_word_ids: [2852]
  },
  {
    id: "vocab-saat-2853",
    category: "vocabulary",
    title: "thirteen minutes past two p.m. — öğleden sonra ikiyi on üç geçiyor",
    keywords: ["thirteen minutes past two p.m.", "öğleden sonra ikiyi on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:13.",
      "🇹🇷 Saat 14:13."
    ],
    examples: [],
    related_word_ids: [2853]
  },
  {
    id: "vocab-saat-2854",
    category: "vocabulary",
    title: "fourteen minutes past two p.m. — öğleden sonra ikiyi on dört geçiyor",
    keywords: ["fourteen minutes past two p.m.", "öğleden sonra ikiyi on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:14.",
      "🇹🇷 Saat 14:14."
    ],
    examples: [],
    related_word_ids: [2854]
  },
  {
    id: "vocab-saat-2855",
    category: "vocabulary",
    title: "a quarter past two p.m. — öğleden sonra ikiyi çeyrek geçiyor",
    keywords: ["a quarter past two p.m.", "öğleden sonra ikiyi çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:15.",
      "🇹🇷 Saat 14:15."
    ],
    examples: [],
    related_word_ids: [2855]
  },
  {
    id: "vocab-saat-2856",
    category: "vocabulary",
    title: "sixteen minutes past two p.m. — öğleden sonra ikiyi on altı geçiyor",
    keywords: ["sixteen minutes past two p.m.", "öğleden sonra ikiyi on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:16.",
      "🇹🇷 Saat 14:16."
    ],
    examples: [],
    related_word_ids: [2856]
  },
  {
    id: "vocab-saat-2857",
    category: "vocabulary",
    title: "seventeen minutes past two p.m. — öğleden sonra ikiyi on yedi geçiyor",
    keywords: ["seventeen minutes past two p.m.", "öğleden sonra ikiyi on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:17.",
      "🇹🇷 Saat 14:17."
    ],
    examples: [],
    related_word_ids: [2857]
  },
  {
    id: "vocab-saat-2858",
    category: "vocabulary",
    title: "eighteen minutes past two p.m. — öğleden sonra ikiyi on sekiz geçiyor",
    keywords: ["eighteen minutes past two p.m.", "öğleden sonra ikiyi on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:18.",
      "🇹🇷 Saat 14:18."
    ],
    examples: [],
    related_word_ids: [2858]
  },
  {
    id: "vocab-saat-2859",
    category: "vocabulary",
    title: "nineteen minutes past two p.m. — öğleden sonra ikiyi on dokuz geçiyor",
    keywords: ["nineteen minutes past two p.m.", "öğleden sonra ikiyi on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:19.",
      "🇹🇷 Saat 14:19."
    ],
    examples: [],
    related_word_ids: [2859]
  },
  {
    id: "vocab-saat-2860",
    category: "vocabulary",
    title: "twenty past two p.m. — öğleden sonra ikiyi yirmi geçiyor",
    keywords: ["twenty past two p.m.", "öğleden sonra ikiyi yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:20.",
      "🇹🇷 Saat 14:20."
    ],
    examples: [],
    related_word_ids: [2860]
  },
  {
    id: "vocab-saat-2861",
    category: "vocabulary",
    title: "twenty-one minutes past two p.m. — öğleden sonra ikiyi yirmi bir geçiyor",
    keywords: ["twenty-one minutes past two p.m.", "öğleden sonra ikiyi yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:21.",
      "🇹🇷 Saat 14:21."
    ],
    examples: [],
    related_word_ids: [2861]
  },
  {
    id: "vocab-saat-2862",
    category: "vocabulary",
    title: "twenty-two minutes past two p.m. — öğleden sonra ikiyi yirmi iki geçiyor",
    keywords: ["twenty-two minutes past two p.m.", "öğleden sonra ikiyi yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:22.",
      "🇹🇷 Saat 14:22."
    ],
    examples: [],
    related_word_ids: [2862]
  },
  {
    id: "vocab-saat-2863",
    category: "vocabulary",
    title: "twenty-three minutes past two p.m. — öğleden sonra ikiyi yirmi üç geçiyor",
    keywords: ["twenty-three minutes past two p.m.", "öğleden sonra ikiyi yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:23.",
      "🇹🇷 Saat 14:23."
    ],
    examples: [],
    related_word_ids: [2863]
  },
  {
    id: "vocab-saat-2864",
    category: "vocabulary",
    title: "twenty-four minutes past two p.m. — öğleden sonra ikiyi yirmi dört geçiyor",
    keywords: ["twenty-four minutes past two p.m.", "öğleden sonra ikiyi yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:24.",
      "🇹🇷 Saat 14:24."
    ],
    examples: [],
    related_word_ids: [2864]
  },
  {
    id: "vocab-saat-2865",
    category: "vocabulary",
    title: "twenty-five past two p.m. — öğleden sonra ikiyi yirmi beş geçiyor",
    keywords: ["twenty-five past two p.m.", "öğleden sonra ikiyi yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:25.",
      "🇹🇷 Saat 14:25."
    ],
    examples: [],
    related_word_ids: [2865]
  },
  {
    id: "vocab-saat-2866",
    category: "vocabulary",
    title: "twenty-six minutes past two p.m. — öğleden sonra ikiyi yirmi altı geçiyor",
    keywords: ["twenty-six minutes past two p.m.", "öğleden sonra ikiyi yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:26.",
      "🇹🇷 Saat 14:26."
    ],
    examples: [],
    related_word_ids: [2866]
  },
  {
    id: "vocab-saat-2867",
    category: "vocabulary",
    title: "twenty-seven minutes past two p.m. — öğleden sonra ikiyi yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past two p.m.", "öğleden sonra ikiyi yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:27.",
      "🇹🇷 Saat 14:27."
    ],
    examples: [],
    related_word_ids: [2867]
  },
  {
    id: "vocab-saat-2868",
    category: "vocabulary",
    title: "twenty-eight minutes past two p.m. — öğleden sonra ikiyi yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past two p.m.", "öğleden sonra ikiyi yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:28.",
      "🇹🇷 Saat 14:28."
    ],
    examples: [],
    related_word_ids: [2868]
  },
  {
    id: "vocab-saat-2869",
    category: "vocabulary",
    title: "twenty-nine minutes past two p.m. — öğleden sonra ikiyi yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past two p.m.", "öğleden sonra ikiyi yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:29.",
      "🇹🇷 Saat 14:29."
    ],
    examples: [],
    related_word_ids: [2869]
  },
  {
    id: "vocab-saat-2870",
    category: "vocabulary",
    title: "half past two p.m. — öğleden sonra iki buçuk",
    keywords: ["half past two p.m.", "öğleden sonra iki buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:30.",
      "🇹🇷 Saat 14:30."
    ],
    examples: [],
    related_word_ids: [2870]
  },
  {
    id: "vocab-saat-2871",
    category: "vocabulary",
    title: "twenty-nine minutes to three p.m. — öğleden sonra üçe yirmi dokuz var",
    keywords: ["twenty-nine minutes to three p.m.", "öğleden sonra üçe yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:31.",
      "🇹🇷 Saat 14:31."
    ],
    examples: [],
    related_word_ids: [2871]
  },
  {
    id: "vocab-saat-2872",
    category: "vocabulary",
    title: "twenty-eight minutes to three p.m. — öğleden sonra üçe yirmi sekiz var",
    keywords: ["twenty-eight minutes to three p.m.", "öğleden sonra üçe yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:32.",
      "🇹🇷 Saat 14:32."
    ],
    examples: [],
    related_word_ids: [2872]
  },
  {
    id: "vocab-saat-2873",
    category: "vocabulary",
    title: "twenty-seven minutes to three p.m. — öğleden sonra üçe yirmi yedi var",
    keywords: ["twenty-seven minutes to three p.m.", "öğleden sonra üçe yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:33.",
      "🇹🇷 Saat 14:33."
    ],
    examples: [],
    related_word_ids: [2873]
  },
  {
    id: "vocab-saat-2874",
    category: "vocabulary",
    title: "twenty-six minutes to three p.m. — öğleden sonra üçe yirmi altı var",
    keywords: ["twenty-six minutes to three p.m.", "öğleden sonra üçe yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:34.",
      "🇹🇷 Saat 14:34."
    ],
    examples: [],
    related_word_ids: [2874]
  },
  {
    id: "vocab-saat-2875",
    category: "vocabulary",
    title: "twenty-five to three p.m. — öğleden sonra üçe yirmi beş var",
    keywords: ["twenty-five to three p.m.", "öğleden sonra üçe yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:35.",
      "🇹🇷 Saat 14:35."
    ],
    examples: [],
    related_word_ids: [2875]
  },
  {
    id: "vocab-saat-2876",
    category: "vocabulary",
    title: "twenty-four minutes to three p.m. — öğleden sonra üçe yirmi dört var",
    keywords: ["twenty-four minutes to three p.m.", "öğleden sonra üçe yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:36.",
      "🇹🇷 Saat 14:36."
    ],
    examples: [],
    related_word_ids: [2876]
  },
  {
    id: "vocab-saat-2877",
    category: "vocabulary",
    title: "twenty-three minutes to three p.m. — öğleden sonra üçe yirmi üç var",
    keywords: ["twenty-three minutes to three p.m.", "öğleden sonra üçe yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:37.",
      "🇹🇷 Saat 14:37."
    ],
    examples: [],
    related_word_ids: [2877]
  },
  {
    id: "vocab-saat-2878",
    category: "vocabulary",
    title: "twenty-two minutes to three p.m. — öğleden sonra üçe yirmi iki var",
    keywords: ["twenty-two minutes to three p.m.", "öğleden sonra üçe yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:38.",
      "🇹🇷 Saat 14:38."
    ],
    examples: [],
    related_word_ids: [2878]
  },
  {
    id: "vocab-saat-2879",
    category: "vocabulary",
    title: "twenty-one minutes to three p.m. — öğleden sonra üçe yirmi bir var",
    keywords: ["twenty-one minutes to three p.m.", "öğleden sonra üçe yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:39.",
      "🇹🇷 Saat 14:39."
    ],
    examples: [],
    related_word_ids: [2879]
  },
  {
    id: "vocab-saat-2880",
    category: "vocabulary",
    title: "twenty to three p.m. — öğleden sonra üçe yirmi var",
    keywords: ["twenty to three p.m.", "öğleden sonra üçe yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:40.",
      "🇹🇷 Saat 14:40."
    ],
    examples: [],
    related_word_ids: [2880]
  },
  {
    id: "vocab-saat-2881",
    category: "vocabulary",
    title: "nineteen minutes to three p.m. — öğleden sonra üçe on dokuz var",
    keywords: ["nineteen minutes to three p.m.", "öğleden sonra üçe on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:41.",
      "🇹🇷 Saat 14:41."
    ],
    examples: [],
    related_word_ids: [2881]
  },
  {
    id: "vocab-saat-2882",
    category: "vocabulary",
    title: "eighteen minutes to three p.m. — öğleden sonra üçe on sekiz var",
    keywords: ["eighteen minutes to three p.m.", "öğleden sonra üçe on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:42.",
      "🇹🇷 Saat 14:42."
    ],
    examples: [],
    related_word_ids: [2882]
  },
  {
    id: "vocab-saat-2883",
    category: "vocabulary",
    title: "seventeen minutes to three p.m. — öğleden sonra üçe on yedi var",
    keywords: ["seventeen minutes to three p.m.", "öğleden sonra üçe on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:43.",
      "🇹🇷 Saat 14:43."
    ],
    examples: [],
    related_word_ids: [2883]
  },
  {
    id: "vocab-saat-2884",
    category: "vocabulary",
    title: "sixteen minutes to three p.m. — öğleden sonra üçe on altı var",
    keywords: ["sixteen minutes to three p.m.", "öğleden sonra üçe on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:44.",
      "🇹🇷 Saat 14:44."
    ],
    examples: [],
    related_word_ids: [2884]
  },
  {
    id: "vocab-saat-2885",
    category: "vocabulary",
    title: "a quarter to three p.m. — öğleden sonra üçe çeyrek var",
    keywords: ["a quarter to three p.m.", "öğleden sonra üçe çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:45.",
      "🇹🇷 Saat 14:45."
    ],
    examples: [],
    related_word_ids: [2885]
  },
  {
    id: "vocab-saat-2886",
    category: "vocabulary",
    title: "fourteen minutes to three p.m. — öğleden sonra üçe on dört var",
    keywords: ["fourteen minutes to three p.m.", "öğleden sonra üçe on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:46.",
      "🇹🇷 Saat 14:46."
    ],
    examples: [],
    related_word_ids: [2886]
  },
  {
    id: "vocab-saat-2887",
    category: "vocabulary",
    title: "thirteen minutes to three p.m. — öğleden sonra üçe on üç var",
    keywords: ["thirteen minutes to three p.m.", "öğleden sonra üçe on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:47.",
      "🇹🇷 Saat 14:47."
    ],
    examples: [],
    related_word_ids: [2887]
  },
  {
    id: "vocab-saat-2888",
    category: "vocabulary",
    title: "twelve minutes to three p.m. — öğleden sonra üçe on iki var",
    keywords: ["twelve minutes to three p.m.", "öğleden sonra üçe on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:48.",
      "🇹🇷 Saat 14:48."
    ],
    examples: [],
    related_word_ids: [2888]
  },
  {
    id: "vocab-saat-2889",
    category: "vocabulary",
    title: "eleven minutes to three p.m. — öğleden sonra üçe on bir var",
    keywords: ["eleven minutes to three p.m.", "öğleden sonra üçe on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:49.",
      "🇹🇷 Saat 14:49."
    ],
    examples: [],
    related_word_ids: [2889]
  },
  {
    id: "vocab-saat-2890",
    category: "vocabulary",
    title: "ten to three p.m. — öğleden sonra üçe on var",
    keywords: ["ten to three p.m.", "öğleden sonra üçe on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:50.",
      "🇹🇷 Saat 14:50."
    ],
    examples: [],
    related_word_ids: [2890]
  },
  {
    id: "vocab-saat-2891",
    category: "vocabulary",
    title: "nine minutes to three p.m. — öğleden sonra üçe dokuz var",
    keywords: ["nine minutes to three p.m.", "öğleden sonra üçe dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:51.",
      "🇹🇷 Saat 14:51."
    ],
    examples: [],
    related_word_ids: [2891]
  },
  {
    id: "vocab-saat-2892",
    category: "vocabulary",
    title: "eight minutes to three p.m. — öğleden sonra üçe sekiz var",
    keywords: ["eight minutes to three p.m.", "öğleden sonra üçe sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:52.",
      "🇹🇷 Saat 14:52."
    ],
    examples: [],
    related_word_ids: [2892]
  },
  {
    id: "vocab-saat-2893",
    category: "vocabulary",
    title: "seven minutes to three p.m. — öğleden sonra üçe yedi var",
    keywords: ["seven minutes to three p.m.", "öğleden sonra üçe yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:53.",
      "🇹🇷 Saat 14:53."
    ],
    examples: [],
    related_word_ids: [2893]
  },
  {
    id: "vocab-saat-2894",
    category: "vocabulary",
    title: "six minutes to three p.m. — öğleden sonra üçe altı var",
    keywords: ["six minutes to three p.m.", "öğleden sonra üçe altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:54.",
      "🇹🇷 Saat 14:54."
    ],
    examples: [],
    related_word_ids: [2894]
  },
  {
    id: "vocab-saat-2895",
    category: "vocabulary",
    title: "five to three p.m. — öğleden sonra üçe beş var",
    keywords: ["five to three p.m.", "öğleden sonra üçe beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:55.",
      "🇹🇷 Saat 14:55."
    ],
    examples: [],
    related_word_ids: [2895]
  },
  {
    id: "vocab-saat-2896",
    category: "vocabulary",
    title: "four minutes to three p.m. — öğleden sonra üçe dört var",
    keywords: ["four minutes to three p.m.", "öğleden sonra üçe dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:56.",
      "🇹🇷 Saat 14:56."
    ],
    examples: [],
    related_word_ids: [2896]
  },
  {
    id: "vocab-saat-2897",
    category: "vocabulary",
    title: "three minutes to three p.m. — öğleden sonra üçe üç var",
    keywords: ["three minutes to three p.m.", "öğleden sonra üçe üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:57.",
      "🇹🇷 Saat 14:57."
    ],
    examples: [],
    related_word_ids: [2897]
  },
  {
    id: "vocab-saat-2898",
    category: "vocabulary",
    title: "two minutes to three p.m. — öğleden sonra üçe iki var",
    keywords: ["two minutes to three p.m.", "öğleden sonra üçe iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:58.",
      "🇹🇷 Saat 14:58."
    ],
    examples: [],
    related_word_ids: [2898]
  },
  {
    id: "vocab-saat-2899",
    category: "vocabulary",
    title: "one minute to three p.m. — öğleden sonra üçe bir var",
    keywords: ["one minute to three p.m.", "öğleden sonra üçe bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 14:59.",
      "🇹🇷 Saat 14:59."
    ],
    examples: [],
    related_word_ids: [2899]
  },
  {
    id: "vocab-saat-2900",
    category: "vocabulary",
    title: "three o'clock p.m. — öğleden sonra üç",
    keywords: ["three o'clock p.m.", "öğleden sonra üç", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:00.",
      "🇹🇷 Saat 15:00."
    ],
    examples: [],
    related_word_ids: [2900]
  },
  {
    id: "vocab-saat-2901",
    category: "vocabulary",
    title: "one minute past three p.m. — öğleden sonra üçü bir geçiyor",
    keywords: ["one minute past three p.m.", "öğleden sonra üçü bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:01.",
      "🇹🇷 Saat 15:01."
    ],
    examples: [],
    related_word_ids: [2901]
  },
  {
    id: "vocab-saat-2902",
    category: "vocabulary",
    title: "two minutes past three p.m. — öğleden sonra üçü iki geçiyor",
    keywords: ["two minutes past three p.m.", "öğleden sonra üçü iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:02.",
      "🇹🇷 Saat 15:02."
    ],
    examples: [],
    related_word_ids: [2902]
  },
  {
    id: "vocab-saat-2903",
    category: "vocabulary",
    title: "three minutes past three p.m. — öğleden sonra üçü üç geçiyor",
    keywords: ["three minutes past three p.m.", "öğleden sonra üçü üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:03.",
      "🇹🇷 Saat 15:03."
    ],
    examples: [],
    related_word_ids: [2903]
  },
  {
    id: "vocab-saat-2904",
    category: "vocabulary",
    title: "four minutes past three p.m. — öğleden sonra üçü dört geçiyor",
    keywords: ["four minutes past three p.m.", "öğleden sonra üçü dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:04.",
      "🇹🇷 Saat 15:04."
    ],
    examples: [],
    related_word_ids: [2904]
  },
  {
    id: "vocab-saat-2905",
    category: "vocabulary",
    title: "five past three p.m. — öğleden sonra üçü beş geçiyor",
    keywords: ["five past three p.m.", "öğleden sonra üçü beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:05.",
      "🇹🇷 Saat 15:05."
    ],
    examples: [],
    related_word_ids: [2905]
  },
  {
    id: "vocab-saat-2906",
    category: "vocabulary",
    title: "six minutes past three p.m. — öğleden sonra üçü altı geçiyor",
    keywords: ["six minutes past three p.m.", "öğleden sonra üçü altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:06.",
      "🇹🇷 Saat 15:06."
    ],
    examples: [],
    related_word_ids: [2906]
  },
  {
    id: "vocab-saat-2907",
    category: "vocabulary",
    title: "seven minutes past three p.m. — öğleden sonra üçü yedi geçiyor",
    keywords: ["seven minutes past three p.m.", "öğleden sonra üçü yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:07.",
      "🇹🇷 Saat 15:07."
    ],
    examples: [],
    related_word_ids: [2907]
  },
  {
    id: "vocab-saat-2908",
    category: "vocabulary",
    title: "eight minutes past three p.m. — öğleden sonra üçü sekiz geçiyor",
    keywords: ["eight minutes past three p.m.", "öğleden sonra üçü sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:08.",
      "🇹🇷 Saat 15:08."
    ],
    examples: [],
    related_word_ids: [2908]
  },
  {
    id: "vocab-saat-2909",
    category: "vocabulary",
    title: "nine minutes past three p.m. — öğleden sonra üçü dokuz geçiyor",
    keywords: ["nine minutes past three p.m.", "öğleden sonra üçü dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:09.",
      "🇹🇷 Saat 15:09."
    ],
    examples: [],
    related_word_ids: [2909]
  },
  {
    id: "vocab-saat-2910",
    category: "vocabulary",
    title: "ten past three p.m. — öğleden sonra üçü on geçiyor",
    keywords: ["ten past three p.m.", "öğleden sonra üçü on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:10.",
      "🇹🇷 Saat 15:10."
    ],
    examples: [],
    related_word_ids: [2910]
  },
  {
    id: "vocab-saat-2911",
    category: "vocabulary",
    title: "eleven minutes past three p.m. — öğleden sonra üçü on bir geçiyor",
    keywords: ["eleven minutes past three p.m.", "öğleden sonra üçü on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:11.",
      "🇹🇷 Saat 15:11."
    ],
    examples: [],
    related_word_ids: [2911]
  },
  {
    id: "vocab-saat-2912",
    category: "vocabulary",
    title: "twelve minutes past three p.m. — öğleden sonra üçü on iki geçiyor",
    keywords: ["twelve minutes past three p.m.", "öğleden sonra üçü on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:12.",
      "🇹🇷 Saat 15:12."
    ],
    examples: [],
    related_word_ids: [2912]
  },
  {
    id: "vocab-saat-2913",
    category: "vocabulary",
    title: "thirteen minutes past three p.m. — öğleden sonra üçü on üç geçiyor",
    keywords: ["thirteen minutes past three p.m.", "öğleden sonra üçü on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:13.",
      "🇹🇷 Saat 15:13."
    ],
    examples: [],
    related_word_ids: [2913]
  },
  {
    id: "vocab-saat-2914",
    category: "vocabulary",
    title: "fourteen minutes past three p.m. — öğleden sonra üçü on dört geçiyor",
    keywords: ["fourteen minutes past three p.m.", "öğleden sonra üçü on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:14.",
      "🇹🇷 Saat 15:14."
    ],
    examples: [],
    related_word_ids: [2914]
  },
  {
    id: "vocab-saat-2915",
    category: "vocabulary",
    title: "a quarter past three p.m. — öğleden sonra üçü çeyrek geçiyor",
    keywords: ["a quarter past three p.m.", "öğleden sonra üçü çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:15.",
      "🇹🇷 Saat 15:15."
    ],
    examples: [],
    related_word_ids: [2915]
  },
  {
    id: "vocab-saat-2916",
    category: "vocabulary",
    title: "sixteen minutes past three p.m. — öğleden sonra üçü on altı geçiyor",
    keywords: ["sixteen minutes past three p.m.", "öğleden sonra üçü on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:16.",
      "🇹🇷 Saat 15:16."
    ],
    examples: [],
    related_word_ids: [2916]
  },
  {
    id: "vocab-saat-2917",
    category: "vocabulary",
    title: "seventeen minutes past three p.m. — öğleden sonra üçü on yedi geçiyor",
    keywords: ["seventeen minutes past three p.m.", "öğleden sonra üçü on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:17.",
      "🇹🇷 Saat 15:17."
    ],
    examples: [],
    related_word_ids: [2917]
  },
  {
    id: "vocab-saat-2918",
    category: "vocabulary",
    title: "eighteen minutes past three p.m. — öğleden sonra üçü on sekiz geçiyor",
    keywords: ["eighteen minutes past three p.m.", "öğleden sonra üçü on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:18.",
      "🇹🇷 Saat 15:18."
    ],
    examples: [],
    related_word_ids: [2918]
  },
  {
    id: "vocab-saat-2919",
    category: "vocabulary",
    title: "nineteen minutes past three p.m. — öğleden sonra üçü on dokuz geçiyor",
    keywords: ["nineteen minutes past three p.m.", "öğleden sonra üçü on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:19.",
      "🇹🇷 Saat 15:19."
    ],
    examples: [],
    related_word_ids: [2919]
  },
  {
    id: "vocab-saat-2920",
    category: "vocabulary",
    title: "twenty past three p.m. — öğleden sonra üçü yirmi geçiyor",
    keywords: ["twenty past three p.m.", "öğleden sonra üçü yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:20.",
      "🇹🇷 Saat 15:20."
    ],
    examples: [],
    related_word_ids: [2920]
  },
  {
    id: "vocab-saat-2921",
    category: "vocabulary",
    title: "twenty-one minutes past three p.m. — öğleden sonra üçü yirmi bir geçiyor",
    keywords: ["twenty-one minutes past three p.m.", "öğleden sonra üçü yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:21.",
      "🇹🇷 Saat 15:21."
    ],
    examples: [],
    related_word_ids: [2921]
  },
  {
    id: "vocab-saat-2922",
    category: "vocabulary",
    title: "twenty-two minutes past three p.m. — öğleden sonra üçü yirmi iki geçiyor",
    keywords: ["twenty-two minutes past three p.m.", "öğleden sonra üçü yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:22.",
      "🇹🇷 Saat 15:22."
    ],
    examples: [],
    related_word_ids: [2922]
  },
  {
    id: "vocab-saat-2923",
    category: "vocabulary",
    title: "twenty-three minutes past three p.m. — öğleden sonra üçü yirmi üç geçiyor",
    keywords: ["twenty-three minutes past three p.m.", "öğleden sonra üçü yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:23.",
      "🇹🇷 Saat 15:23."
    ],
    examples: [],
    related_word_ids: [2923]
  },
  {
    id: "vocab-saat-2924",
    category: "vocabulary",
    title: "twenty-four minutes past three p.m. — öğleden sonra üçü yirmi dört geçiyor",
    keywords: ["twenty-four minutes past three p.m.", "öğleden sonra üçü yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:24.",
      "🇹🇷 Saat 15:24."
    ],
    examples: [],
    related_word_ids: [2924]
  },
  {
    id: "vocab-saat-2925",
    category: "vocabulary",
    title: "twenty-five past three p.m. — öğleden sonra üçü yirmi beş geçiyor",
    keywords: ["twenty-five past three p.m.", "öğleden sonra üçü yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:25.",
      "🇹🇷 Saat 15:25."
    ],
    examples: [],
    related_word_ids: [2925]
  },
  {
    id: "vocab-saat-2926",
    category: "vocabulary",
    title: "twenty-six minutes past three p.m. — öğleden sonra üçü yirmi altı geçiyor",
    keywords: ["twenty-six minutes past three p.m.", "öğleden sonra üçü yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:26.",
      "🇹🇷 Saat 15:26."
    ],
    examples: [],
    related_word_ids: [2926]
  },
  {
    id: "vocab-saat-2927",
    category: "vocabulary",
    title: "twenty-seven minutes past three p.m. — öğleden sonra üçü yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past three p.m.", "öğleden sonra üçü yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:27.",
      "🇹🇷 Saat 15:27."
    ],
    examples: [],
    related_word_ids: [2927]
  },
  {
    id: "vocab-saat-2928",
    category: "vocabulary",
    title: "twenty-eight minutes past three p.m. — öğleden sonra üçü yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past three p.m.", "öğleden sonra üçü yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:28.",
      "🇹🇷 Saat 15:28."
    ],
    examples: [],
    related_word_ids: [2928]
  },
  {
    id: "vocab-saat-2929",
    category: "vocabulary",
    title: "twenty-nine minutes past three p.m. — öğleden sonra üçü yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past three p.m.", "öğleden sonra üçü yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:29.",
      "🇹🇷 Saat 15:29."
    ],
    examples: [],
    related_word_ids: [2929]
  },
  {
    id: "vocab-saat-2930",
    category: "vocabulary",
    title: "half past three p.m. — öğleden sonra üç buçuk",
    keywords: ["half past three p.m.", "öğleden sonra üç buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:30.",
      "🇹🇷 Saat 15:30."
    ],
    examples: [],
    related_word_ids: [2930]
  },
  {
    id: "vocab-saat-2931",
    category: "vocabulary",
    title: "twenty-nine minutes to four p.m. — öğleden sonra dörde yirmi dokuz var",
    keywords: ["twenty-nine minutes to four p.m.", "öğleden sonra dörde yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:31.",
      "🇹🇷 Saat 15:31."
    ],
    examples: [],
    related_word_ids: [2931]
  },
  {
    id: "vocab-saat-2932",
    category: "vocabulary",
    title: "twenty-eight minutes to four p.m. — öğleden sonra dörde yirmi sekiz var",
    keywords: ["twenty-eight minutes to four p.m.", "öğleden sonra dörde yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:32.",
      "🇹🇷 Saat 15:32."
    ],
    examples: [],
    related_word_ids: [2932]
  },
  {
    id: "vocab-saat-2933",
    category: "vocabulary",
    title: "twenty-seven minutes to four p.m. — öğleden sonra dörde yirmi yedi var",
    keywords: ["twenty-seven minutes to four p.m.", "öğleden sonra dörde yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:33.",
      "🇹🇷 Saat 15:33."
    ],
    examples: [],
    related_word_ids: [2933]
  },
  {
    id: "vocab-saat-2934",
    category: "vocabulary",
    title: "twenty-six minutes to four p.m. — öğleden sonra dörde yirmi altı var",
    keywords: ["twenty-six minutes to four p.m.", "öğleden sonra dörde yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:34.",
      "🇹🇷 Saat 15:34."
    ],
    examples: [],
    related_word_ids: [2934]
  },
  {
    id: "vocab-saat-2935",
    category: "vocabulary",
    title: "twenty-five to four p.m. — öğleden sonra dörde yirmi beş var",
    keywords: ["twenty-five to four p.m.", "öğleden sonra dörde yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:35.",
      "🇹🇷 Saat 15:35."
    ],
    examples: [],
    related_word_ids: [2935]
  },
  {
    id: "vocab-saat-2936",
    category: "vocabulary",
    title: "twenty-four minutes to four p.m. — öğleden sonra dörde yirmi dört var",
    keywords: ["twenty-four minutes to four p.m.", "öğleden sonra dörde yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:36.",
      "🇹🇷 Saat 15:36."
    ],
    examples: [],
    related_word_ids: [2936]
  },
  {
    id: "vocab-saat-2937",
    category: "vocabulary",
    title: "twenty-three minutes to four p.m. — öğleden sonra dörde yirmi üç var",
    keywords: ["twenty-three minutes to four p.m.", "öğleden sonra dörde yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:37.",
      "🇹🇷 Saat 15:37."
    ],
    examples: [],
    related_word_ids: [2937]
  },
  {
    id: "vocab-saat-2938",
    category: "vocabulary",
    title: "twenty-two minutes to four p.m. — öğleden sonra dörde yirmi iki var",
    keywords: ["twenty-two minutes to four p.m.", "öğleden sonra dörde yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:38.",
      "🇹🇷 Saat 15:38."
    ],
    examples: [],
    related_word_ids: [2938]
  },
  {
    id: "vocab-saat-2939",
    category: "vocabulary",
    title: "twenty-one minutes to four p.m. — öğleden sonra dörde yirmi bir var",
    keywords: ["twenty-one minutes to four p.m.", "öğleden sonra dörde yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:39.",
      "🇹🇷 Saat 15:39."
    ],
    examples: [],
    related_word_ids: [2939]
  },
  {
    id: "vocab-saat-2940",
    category: "vocabulary",
    title: "twenty to four p.m. — öğleden sonra dörde yirmi var",
    keywords: ["twenty to four p.m.", "öğleden sonra dörde yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:40.",
      "🇹🇷 Saat 15:40."
    ],
    examples: [],
    related_word_ids: [2940]
  },
  {
    id: "vocab-saat-2941",
    category: "vocabulary",
    title: "nineteen minutes to four p.m. — öğleden sonra dörde on dokuz var",
    keywords: ["nineteen minutes to four p.m.", "öğleden sonra dörde on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:41.",
      "🇹🇷 Saat 15:41."
    ],
    examples: [],
    related_word_ids: [2941]
  },
  {
    id: "vocab-saat-2942",
    category: "vocabulary",
    title: "eighteen minutes to four p.m. — öğleden sonra dörde on sekiz var",
    keywords: ["eighteen minutes to four p.m.", "öğleden sonra dörde on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:42.",
      "🇹🇷 Saat 15:42."
    ],
    examples: [],
    related_word_ids: [2942]
  },
  {
    id: "vocab-saat-2943",
    category: "vocabulary",
    title: "seventeen minutes to four p.m. — öğleden sonra dörde on yedi var",
    keywords: ["seventeen minutes to four p.m.", "öğleden sonra dörde on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:43.",
      "🇹🇷 Saat 15:43."
    ],
    examples: [],
    related_word_ids: [2943]
  },
  {
    id: "vocab-saat-2944",
    category: "vocabulary",
    title: "sixteen minutes to four p.m. — öğleden sonra dörde on altı var",
    keywords: ["sixteen minutes to four p.m.", "öğleden sonra dörde on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:44.",
      "🇹🇷 Saat 15:44."
    ],
    examples: [],
    related_word_ids: [2944]
  },
  {
    id: "vocab-saat-2945",
    category: "vocabulary",
    title: "a quarter to four p.m. — öğleden sonra dörde çeyrek var",
    keywords: ["a quarter to four p.m.", "öğleden sonra dörde çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:45.",
      "🇹🇷 Saat 15:45."
    ],
    examples: [],
    related_word_ids: [2945]
  },
  {
    id: "vocab-saat-2946",
    category: "vocabulary",
    title: "fourteen minutes to four p.m. — öğleden sonra dörde on dört var",
    keywords: ["fourteen minutes to four p.m.", "öğleden sonra dörde on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:46.",
      "🇹🇷 Saat 15:46."
    ],
    examples: [],
    related_word_ids: [2946]
  },
  {
    id: "vocab-saat-2947",
    category: "vocabulary",
    title: "thirteen minutes to four p.m. — öğleden sonra dörde on üç var",
    keywords: ["thirteen minutes to four p.m.", "öğleden sonra dörde on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:47.",
      "🇹🇷 Saat 15:47."
    ],
    examples: [],
    related_word_ids: [2947]
  },
  {
    id: "vocab-saat-2948",
    category: "vocabulary",
    title: "twelve minutes to four p.m. — öğleden sonra dörde on iki var",
    keywords: ["twelve minutes to four p.m.", "öğleden sonra dörde on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:48.",
      "🇹🇷 Saat 15:48."
    ],
    examples: [],
    related_word_ids: [2948]
  },
  {
    id: "vocab-saat-2949",
    category: "vocabulary",
    title: "eleven minutes to four p.m. — öğleden sonra dörde on bir var",
    keywords: ["eleven minutes to four p.m.", "öğleden sonra dörde on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:49.",
      "🇹🇷 Saat 15:49."
    ],
    examples: [],
    related_word_ids: [2949]
  },
  {
    id: "vocab-saat-2950",
    category: "vocabulary",
    title: "ten to four p.m. — öğleden sonra dörde on var",
    keywords: ["ten to four p.m.", "öğleden sonra dörde on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:50.",
      "🇹🇷 Saat 15:50."
    ],
    examples: [],
    related_word_ids: [2950]
  },
  {
    id: "vocab-saat-2951",
    category: "vocabulary",
    title: "nine minutes to four p.m. — öğleden sonra dörde dokuz var",
    keywords: ["nine minutes to four p.m.", "öğleden sonra dörde dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:51.",
      "🇹🇷 Saat 15:51."
    ],
    examples: [],
    related_word_ids: [2951]
  },
  {
    id: "vocab-saat-2952",
    category: "vocabulary",
    title: "eight minutes to four p.m. — öğleden sonra dörde sekiz var",
    keywords: ["eight minutes to four p.m.", "öğleden sonra dörde sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:52.",
      "🇹🇷 Saat 15:52."
    ],
    examples: [],
    related_word_ids: [2952]
  },
  {
    id: "vocab-saat-2953",
    category: "vocabulary",
    title: "seven minutes to four p.m. — öğleden sonra dörde yedi var",
    keywords: ["seven minutes to four p.m.", "öğleden sonra dörde yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:53.",
      "🇹🇷 Saat 15:53."
    ],
    examples: [],
    related_word_ids: [2953]
  },
  {
    id: "vocab-saat-2954",
    category: "vocabulary",
    title: "six minutes to four p.m. — öğleden sonra dörde altı var",
    keywords: ["six minutes to four p.m.", "öğleden sonra dörde altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:54.",
      "🇹🇷 Saat 15:54."
    ],
    examples: [],
    related_word_ids: [2954]
  },
  {
    id: "vocab-saat-2955",
    category: "vocabulary",
    title: "five to four p.m. — öğleden sonra dörde beş var",
    keywords: ["five to four p.m.", "öğleden sonra dörde beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:55.",
      "🇹🇷 Saat 15:55."
    ],
    examples: [],
    related_word_ids: [2955]
  },
  {
    id: "vocab-saat-2956",
    category: "vocabulary",
    title: "four minutes to four p.m. — öğleden sonra dörde dört var",
    keywords: ["four minutes to four p.m.", "öğleden sonra dörde dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:56.",
      "🇹🇷 Saat 15:56."
    ],
    examples: [],
    related_word_ids: [2956]
  },
  {
    id: "vocab-saat-2957",
    category: "vocabulary",
    title: "three minutes to four p.m. — öğleden sonra dörde üç var",
    keywords: ["three minutes to four p.m.", "öğleden sonra dörde üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:57.",
      "🇹🇷 Saat 15:57."
    ],
    examples: [],
    related_word_ids: [2957]
  },
  {
    id: "vocab-saat-2958",
    category: "vocabulary",
    title: "two minutes to four p.m. — öğleden sonra dörde iki var",
    keywords: ["two minutes to four p.m.", "öğleden sonra dörde iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:58.",
      "🇹🇷 Saat 15:58."
    ],
    examples: [],
    related_word_ids: [2958]
  },
  {
    id: "vocab-saat-2959",
    category: "vocabulary",
    title: "one minute to four p.m. — öğleden sonra dörde bir var",
    keywords: ["one minute to four p.m.", "öğleden sonra dörde bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 15:59.",
      "🇹🇷 Saat 15:59."
    ],
    examples: [],
    related_word_ids: [2959]
  },
  {
    id: "vocab-saat-2960",
    category: "vocabulary",
    title: "four o'clock p.m. — öğleden sonra dört",
    keywords: ["four o'clock p.m.", "öğleden sonra dört", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:00.",
      "🇹🇷 Saat 16:00."
    ],
    examples: [],
    related_word_ids: [2960]
  },
  {
    id: "vocab-saat-2961",
    category: "vocabulary",
    title: "one minute past four p.m. — öğleden sonra dördü bir geçiyor",
    keywords: ["one minute past four p.m.", "öğleden sonra dördü bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:01.",
      "🇹🇷 Saat 16:01."
    ],
    examples: [],
    related_word_ids: [2961]
  },
  {
    id: "vocab-saat-2962",
    category: "vocabulary",
    title: "two minutes past four p.m. — öğleden sonra dördü iki geçiyor",
    keywords: ["two minutes past four p.m.", "öğleden sonra dördü iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:02.",
      "🇹🇷 Saat 16:02."
    ],
    examples: [],
    related_word_ids: [2962]
  },
  {
    id: "vocab-saat-2963",
    category: "vocabulary",
    title: "three minutes past four p.m. — öğleden sonra dördü üç geçiyor",
    keywords: ["three minutes past four p.m.", "öğleden sonra dördü üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:03.",
      "🇹🇷 Saat 16:03."
    ],
    examples: [],
    related_word_ids: [2963]
  },
  {
    id: "vocab-saat-2964",
    category: "vocabulary",
    title: "four minutes past four p.m. — öğleden sonra dördü dört geçiyor",
    keywords: ["four minutes past four p.m.", "öğleden sonra dördü dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:04.",
      "🇹🇷 Saat 16:04."
    ],
    examples: [],
    related_word_ids: [2964]
  },
  {
    id: "vocab-saat-2965",
    category: "vocabulary",
    title: "five past four p.m. — öğleden sonra dördü beş geçiyor",
    keywords: ["five past four p.m.", "öğleden sonra dördü beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:05.",
      "🇹🇷 Saat 16:05."
    ],
    examples: [],
    related_word_ids: [2965]
  },
  {
    id: "vocab-saat-2966",
    category: "vocabulary",
    title: "six minutes past four p.m. — öğleden sonra dördü altı geçiyor",
    keywords: ["six minutes past four p.m.", "öğleden sonra dördü altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:06.",
      "🇹🇷 Saat 16:06."
    ],
    examples: [],
    related_word_ids: [2966]
  },
  {
    id: "vocab-saat-2967",
    category: "vocabulary",
    title: "seven minutes past four p.m. — öğleden sonra dördü yedi geçiyor",
    keywords: ["seven minutes past four p.m.", "öğleden sonra dördü yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:07.",
      "🇹🇷 Saat 16:07."
    ],
    examples: [],
    related_word_ids: [2967]
  },
  {
    id: "vocab-saat-2968",
    category: "vocabulary",
    title: "eight minutes past four p.m. — öğleden sonra dördü sekiz geçiyor",
    keywords: ["eight minutes past four p.m.", "öğleden sonra dördü sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:08.",
      "🇹🇷 Saat 16:08."
    ],
    examples: [],
    related_word_ids: [2968]
  },
  {
    id: "vocab-saat-2969",
    category: "vocabulary",
    title: "nine minutes past four p.m. — öğleden sonra dördü dokuz geçiyor",
    keywords: ["nine minutes past four p.m.", "öğleden sonra dördü dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:09.",
      "🇹🇷 Saat 16:09."
    ],
    examples: [],
    related_word_ids: [2969]
  },
  {
    id: "vocab-saat-2970",
    category: "vocabulary",
    title: "ten past four p.m. — öğleden sonra dördü on geçiyor",
    keywords: ["ten past four p.m.", "öğleden sonra dördü on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:10.",
      "🇹🇷 Saat 16:10."
    ],
    examples: [],
    related_word_ids: [2970]
  },
  {
    id: "vocab-saat-2971",
    category: "vocabulary",
    title: "eleven minutes past four p.m. — öğleden sonra dördü on bir geçiyor",
    keywords: ["eleven minutes past four p.m.", "öğleden sonra dördü on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:11.",
      "🇹🇷 Saat 16:11."
    ],
    examples: [],
    related_word_ids: [2971]
  },
  {
    id: "vocab-saat-2972",
    category: "vocabulary",
    title: "twelve minutes past four p.m. — öğleden sonra dördü on iki geçiyor",
    keywords: ["twelve minutes past four p.m.", "öğleden sonra dördü on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:12.",
      "🇹🇷 Saat 16:12."
    ],
    examples: [],
    related_word_ids: [2972]
  },
  {
    id: "vocab-saat-2973",
    category: "vocabulary",
    title: "thirteen minutes past four p.m. — öğleden sonra dördü on üç geçiyor",
    keywords: ["thirteen minutes past four p.m.", "öğleden sonra dördü on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:13.",
      "🇹🇷 Saat 16:13."
    ],
    examples: [],
    related_word_ids: [2973]
  },
  {
    id: "vocab-saat-2974",
    category: "vocabulary",
    title: "fourteen minutes past four p.m. — öğleden sonra dördü on dört geçiyor",
    keywords: ["fourteen minutes past four p.m.", "öğleden sonra dördü on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:14.",
      "🇹🇷 Saat 16:14."
    ],
    examples: [],
    related_word_ids: [2974]
  },
  {
    id: "vocab-saat-2975",
    category: "vocabulary",
    title: "a quarter past four p.m. — öğleden sonra dördü çeyrek geçiyor",
    keywords: ["a quarter past four p.m.", "öğleden sonra dördü çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:15.",
      "🇹🇷 Saat 16:15."
    ],
    examples: [],
    related_word_ids: [2975]
  },
  {
    id: "vocab-saat-2976",
    category: "vocabulary",
    title: "sixteen minutes past four p.m. — öğleden sonra dördü on altı geçiyor",
    keywords: ["sixteen minutes past four p.m.", "öğleden sonra dördü on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:16.",
      "🇹🇷 Saat 16:16."
    ],
    examples: [],
    related_word_ids: [2976]
  },
  {
    id: "vocab-saat-2977",
    category: "vocabulary",
    title: "seventeen minutes past four p.m. — öğleden sonra dördü on yedi geçiyor",
    keywords: ["seventeen minutes past four p.m.", "öğleden sonra dördü on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:17.",
      "🇹🇷 Saat 16:17."
    ],
    examples: [],
    related_word_ids: [2977]
  },
  {
    id: "vocab-saat-2978",
    category: "vocabulary",
    title: "eighteen minutes past four p.m. — öğleden sonra dördü on sekiz geçiyor",
    keywords: ["eighteen minutes past four p.m.", "öğleden sonra dördü on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:18.",
      "🇹🇷 Saat 16:18."
    ],
    examples: [],
    related_word_ids: [2978]
  },
  {
    id: "vocab-saat-2979",
    category: "vocabulary",
    title: "nineteen minutes past four p.m. — öğleden sonra dördü on dokuz geçiyor",
    keywords: ["nineteen minutes past four p.m.", "öğleden sonra dördü on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:19.",
      "🇹🇷 Saat 16:19."
    ],
    examples: [],
    related_word_ids: [2979]
  },
  {
    id: "vocab-saat-2980",
    category: "vocabulary",
    title: "twenty past four p.m. — öğleden sonra dördü yirmi geçiyor",
    keywords: ["twenty past four p.m.", "öğleden sonra dördü yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:20.",
      "🇹🇷 Saat 16:20."
    ],
    examples: [],
    related_word_ids: [2980]
  },
  {
    id: "vocab-saat-2981",
    category: "vocabulary",
    title: "twenty-one minutes past four p.m. — öğleden sonra dördü yirmi bir geçiyor",
    keywords: ["twenty-one minutes past four p.m.", "öğleden sonra dördü yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:21.",
      "🇹🇷 Saat 16:21."
    ],
    examples: [],
    related_word_ids: [2981]
  },
  {
    id: "vocab-saat-2982",
    category: "vocabulary",
    title: "twenty-two minutes past four p.m. — öğleden sonra dördü yirmi iki geçiyor",
    keywords: ["twenty-two minutes past four p.m.", "öğleden sonra dördü yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:22.",
      "🇹🇷 Saat 16:22."
    ],
    examples: [],
    related_word_ids: [2982]
  },
  {
    id: "vocab-saat-2983",
    category: "vocabulary",
    title: "twenty-three minutes past four p.m. — öğleden sonra dördü yirmi üç geçiyor",
    keywords: ["twenty-three minutes past four p.m.", "öğleden sonra dördü yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:23.",
      "🇹🇷 Saat 16:23."
    ],
    examples: [],
    related_word_ids: [2983]
  },
  {
    id: "vocab-saat-2984",
    category: "vocabulary",
    title: "twenty-four minutes past four p.m. — öğleden sonra dördü yirmi dört geçiyor",
    keywords: ["twenty-four minutes past four p.m.", "öğleden sonra dördü yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:24.",
      "🇹🇷 Saat 16:24."
    ],
    examples: [],
    related_word_ids: [2984]
  },
  {
    id: "vocab-saat-2985",
    category: "vocabulary",
    title: "twenty-five past four p.m. — öğleden sonra dördü yirmi beş geçiyor",
    keywords: ["twenty-five past four p.m.", "öğleden sonra dördü yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:25.",
      "🇹🇷 Saat 16:25."
    ],
    examples: [],
    related_word_ids: [2985]
  },
  {
    id: "vocab-saat-2986",
    category: "vocabulary",
    title: "twenty-six minutes past four p.m. — öğleden sonra dördü yirmi altı geçiyor",
    keywords: ["twenty-six minutes past four p.m.", "öğleden sonra dördü yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:26.",
      "🇹🇷 Saat 16:26."
    ],
    examples: [],
    related_word_ids: [2986]
  },
  {
    id: "vocab-saat-2987",
    category: "vocabulary",
    title: "twenty-seven minutes past four p.m. — öğleden sonra dördü yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past four p.m.", "öğleden sonra dördü yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:27.",
      "🇹🇷 Saat 16:27."
    ],
    examples: [],
    related_word_ids: [2987]
  },
  {
    id: "vocab-saat-2988",
    category: "vocabulary",
    title: "twenty-eight minutes past four p.m. — öğleden sonra dördü yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past four p.m.", "öğleden sonra dördü yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:28.",
      "🇹🇷 Saat 16:28."
    ],
    examples: [],
    related_word_ids: [2988]
  },
  {
    id: "vocab-saat-2989",
    category: "vocabulary",
    title: "twenty-nine minutes past four p.m. — öğleden sonra dördü yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past four p.m.", "öğleden sonra dördü yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:29.",
      "🇹🇷 Saat 16:29."
    ],
    examples: [],
    related_word_ids: [2989]
  },
  {
    id: "vocab-saat-2990",
    category: "vocabulary",
    title: "half past four p.m. — öğleden sonra dört buçuk",
    keywords: ["half past four p.m.", "öğleden sonra dört buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:30.",
      "🇹🇷 Saat 16:30."
    ],
    examples: [],
    related_word_ids: [2990]
  },
  {
    id: "vocab-saat-2991",
    category: "vocabulary",
    title: "twenty-nine minutes to five p.m. — öğleden sonra beşe yirmi dokuz var",
    keywords: ["twenty-nine minutes to five p.m.", "öğleden sonra beşe yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:31.",
      "🇹🇷 Saat 16:31."
    ],
    examples: [],
    related_word_ids: [2991]
  },
  {
    id: "vocab-saat-2992",
    category: "vocabulary",
    title: "twenty-eight minutes to five p.m. — öğleden sonra beşe yirmi sekiz var",
    keywords: ["twenty-eight minutes to five p.m.", "öğleden sonra beşe yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:32.",
      "🇹🇷 Saat 16:32."
    ],
    examples: [],
    related_word_ids: [2992]
  },
  {
    id: "vocab-saat-2993",
    category: "vocabulary",
    title: "twenty-seven minutes to five p.m. — öğleden sonra beşe yirmi yedi var",
    keywords: ["twenty-seven minutes to five p.m.", "öğleden sonra beşe yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:33.",
      "🇹🇷 Saat 16:33."
    ],
    examples: [],
    related_word_ids: [2993]
  },
  {
    id: "vocab-saat-2994",
    category: "vocabulary",
    title: "twenty-six minutes to five p.m. — öğleden sonra beşe yirmi altı var",
    keywords: ["twenty-six minutes to five p.m.", "öğleden sonra beşe yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:34.",
      "🇹🇷 Saat 16:34."
    ],
    examples: [],
    related_word_ids: [2994]
  },
  {
    id: "vocab-saat-2995",
    category: "vocabulary",
    title: "twenty-five to five p.m. — öğleden sonra beşe yirmi beş var",
    keywords: ["twenty-five to five p.m.", "öğleden sonra beşe yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:35.",
      "🇹🇷 Saat 16:35."
    ],
    examples: [],
    related_word_ids: [2995]
  },
  {
    id: "vocab-saat-2996",
    category: "vocabulary",
    title: "twenty-four minutes to five p.m. — öğleden sonra beşe yirmi dört var",
    keywords: ["twenty-four minutes to five p.m.", "öğleden sonra beşe yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:36.",
      "🇹🇷 Saat 16:36."
    ],
    examples: [],
    related_word_ids: [2996]
  },
  {
    id: "vocab-saat-2997",
    category: "vocabulary",
    title: "twenty-three minutes to five p.m. — öğleden sonra beşe yirmi üç var",
    keywords: ["twenty-three minutes to five p.m.", "öğleden sonra beşe yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:37.",
      "🇹🇷 Saat 16:37."
    ],
    examples: [],
    related_word_ids: [2997]
  },
  {
    id: "vocab-saat-2998",
    category: "vocabulary",
    title: "twenty-two minutes to five p.m. — öğleden sonra beşe yirmi iki var",
    keywords: ["twenty-two minutes to five p.m.", "öğleden sonra beşe yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:38.",
      "🇹🇷 Saat 16:38."
    ],
    examples: [],
    related_word_ids: [2998]
  },
  {
    id: "vocab-saat-2999",
    category: "vocabulary",
    title: "twenty-one minutes to five p.m. — öğleden sonra beşe yirmi bir var",
    keywords: ["twenty-one minutes to five p.m.", "öğleden sonra beşe yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:39.",
      "🇹🇷 Saat 16:39."
    ],
    examples: [],
    related_word_ids: [2999]
  },
  {
    id: "vocab-saat-3000",
    category: "vocabulary",
    title: "twenty to five p.m. — öğleden sonra beşe yirmi var",
    keywords: ["twenty to five p.m.", "öğleden sonra beşe yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:40.",
      "🇹🇷 Saat 16:40."
    ],
    examples: [],
    related_word_ids: [3000]
  },
  {
    id: "vocab-saat-3001",
    category: "vocabulary",
    title: "nineteen minutes to five p.m. — öğleden sonra beşe on dokuz var",
    keywords: ["nineteen minutes to five p.m.", "öğleden sonra beşe on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:41.",
      "🇹🇷 Saat 16:41."
    ],
    examples: [],
    related_word_ids: [3001]
  },
  {
    id: "vocab-saat-3002",
    category: "vocabulary",
    title: "eighteen minutes to five p.m. — öğleden sonra beşe on sekiz var",
    keywords: ["eighteen minutes to five p.m.", "öğleden sonra beşe on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:42.",
      "🇹🇷 Saat 16:42."
    ],
    examples: [],
    related_word_ids: [3002]
  },
  {
    id: "vocab-saat-3003",
    category: "vocabulary",
    title: "seventeen minutes to five p.m. — öğleden sonra beşe on yedi var",
    keywords: ["seventeen minutes to five p.m.", "öğleden sonra beşe on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:43.",
      "🇹🇷 Saat 16:43."
    ],
    examples: [],
    related_word_ids: [3003]
  },
  {
    id: "vocab-saat-3004",
    category: "vocabulary",
    title: "sixteen minutes to five p.m. — öğleden sonra beşe on altı var",
    keywords: ["sixteen minutes to five p.m.", "öğleden sonra beşe on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:44.",
      "🇹🇷 Saat 16:44."
    ],
    examples: [],
    related_word_ids: [3004]
  },
  {
    id: "vocab-saat-3005",
    category: "vocabulary",
    title: "a quarter to five p.m. — öğleden sonra beşe çeyrek var",
    keywords: ["a quarter to five p.m.", "öğleden sonra beşe çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:45.",
      "🇹🇷 Saat 16:45."
    ],
    examples: [],
    related_word_ids: [3005]
  },
  {
    id: "vocab-saat-3006",
    category: "vocabulary",
    title: "fourteen minutes to five p.m. — öğleden sonra beşe on dört var",
    keywords: ["fourteen minutes to five p.m.", "öğleden sonra beşe on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:46.",
      "🇹🇷 Saat 16:46."
    ],
    examples: [],
    related_word_ids: [3006]
  },
  {
    id: "vocab-saat-3007",
    category: "vocabulary",
    title: "thirteen minutes to five p.m. — öğleden sonra beşe on üç var",
    keywords: ["thirteen minutes to five p.m.", "öğleden sonra beşe on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:47.",
      "🇹🇷 Saat 16:47."
    ],
    examples: [],
    related_word_ids: [3007]
  },
  {
    id: "vocab-saat-3008",
    category: "vocabulary",
    title: "twelve minutes to five p.m. — öğleden sonra beşe on iki var",
    keywords: ["twelve minutes to five p.m.", "öğleden sonra beşe on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:48.",
      "🇹🇷 Saat 16:48."
    ],
    examples: [],
    related_word_ids: [3008]
  },
  {
    id: "vocab-saat-3009",
    category: "vocabulary",
    title: "eleven minutes to five p.m. — öğleden sonra beşe on bir var",
    keywords: ["eleven minutes to five p.m.", "öğleden sonra beşe on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:49.",
      "🇹🇷 Saat 16:49."
    ],
    examples: [],
    related_word_ids: [3009]
  },
  {
    id: "vocab-saat-3010",
    category: "vocabulary",
    title: "ten to five p.m. — öğleden sonra beşe on var",
    keywords: ["ten to five p.m.", "öğleden sonra beşe on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:50.",
      "🇹🇷 Saat 16:50."
    ],
    examples: [],
    related_word_ids: [3010]
  },
  {
    id: "vocab-saat-3011",
    category: "vocabulary",
    title: "nine minutes to five p.m. — öğleden sonra beşe dokuz var",
    keywords: ["nine minutes to five p.m.", "öğleden sonra beşe dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:51.",
      "🇹🇷 Saat 16:51."
    ],
    examples: [],
    related_word_ids: [3011]
  },
  {
    id: "vocab-saat-3012",
    category: "vocabulary",
    title: "eight minutes to five p.m. — öğleden sonra beşe sekiz var",
    keywords: ["eight minutes to five p.m.", "öğleden sonra beşe sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:52.",
      "🇹🇷 Saat 16:52."
    ],
    examples: [],
    related_word_ids: [3012]
  },
  {
    id: "vocab-saat-3013",
    category: "vocabulary",
    title: "seven minutes to five p.m. — öğleden sonra beşe yedi var",
    keywords: ["seven minutes to five p.m.", "öğleden sonra beşe yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:53.",
      "🇹🇷 Saat 16:53."
    ],
    examples: [],
    related_word_ids: [3013]
  },
  {
    id: "vocab-saat-3014",
    category: "vocabulary",
    title: "six minutes to five p.m. — öğleden sonra beşe altı var",
    keywords: ["six minutes to five p.m.", "öğleden sonra beşe altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:54.",
      "🇹🇷 Saat 16:54."
    ],
    examples: [],
    related_word_ids: [3014]
  },
  {
    id: "vocab-saat-3015",
    category: "vocabulary",
    title: "five to five p.m. — öğleden sonra beşe beş var",
    keywords: ["five to five p.m.", "öğleden sonra beşe beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:55.",
      "🇹🇷 Saat 16:55."
    ],
    examples: [],
    related_word_ids: [3015]
  },
  {
    id: "vocab-saat-3016",
    category: "vocabulary",
    title: "four minutes to five p.m. — öğleden sonra beşe dört var",
    keywords: ["four minutes to five p.m.", "öğleden sonra beşe dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:56.",
      "🇹🇷 Saat 16:56."
    ],
    examples: [],
    related_word_ids: [3016]
  },
  {
    id: "vocab-saat-3017",
    category: "vocabulary",
    title: "three minutes to five p.m. — öğleden sonra beşe üç var",
    keywords: ["three minutes to five p.m.", "öğleden sonra beşe üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:57.",
      "🇹🇷 Saat 16:57."
    ],
    examples: [],
    related_word_ids: [3017]
  },
  {
    id: "vocab-saat-3018",
    category: "vocabulary",
    title: "two minutes to five p.m. — öğleden sonra beşe iki var",
    keywords: ["two minutes to five p.m.", "öğleden sonra beşe iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:58.",
      "🇹🇷 Saat 16:58."
    ],
    examples: [],
    related_word_ids: [3018]
  },
  {
    id: "vocab-saat-3019",
    category: "vocabulary",
    title: "one minute to five p.m. — öğleden sonra beşe bir var",
    keywords: ["one minute to five p.m.", "öğleden sonra beşe bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 16:59.",
      "🇹🇷 Saat 16:59."
    ],
    examples: [],
    related_word_ids: [3019]
  },
  {
    id: "vocab-saat-3020",
    category: "vocabulary",
    title: "five o'clock p.m. — akşam beş",
    keywords: ["five o'clock p.m.", "akşam beş", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:00.",
      "🇹🇷 Saat 17:00."
    ],
    examples: [],
    related_word_ids: [3020]
  },
  {
    id: "vocab-saat-3021",
    category: "vocabulary",
    title: "one minute past five p.m. — akşam beşi bir geçiyor",
    keywords: ["one minute past five p.m.", "akşam beşi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:01.",
      "🇹🇷 Saat 17:01."
    ],
    examples: [],
    related_word_ids: [3021]
  },
  {
    id: "vocab-saat-3022",
    category: "vocabulary",
    title: "two minutes past five p.m. — akşam beşi iki geçiyor",
    keywords: ["two minutes past five p.m.", "akşam beşi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:02.",
      "🇹🇷 Saat 17:02."
    ],
    examples: [],
    related_word_ids: [3022]
  },
  {
    id: "vocab-saat-3023",
    category: "vocabulary",
    title: "three minutes past five p.m. — akşam beşi üç geçiyor",
    keywords: ["three minutes past five p.m.", "akşam beşi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:03.",
      "🇹🇷 Saat 17:03."
    ],
    examples: [],
    related_word_ids: [3023]
  },
  {
    id: "vocab-saat-3024",
    category: "vocabulary",
    title: "four minutes past five p.m. — akşam beşi dört geçiyor",
    keywords: ["four minutes past five p.m.", "akşam beşi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:04.",
      "🇹🇷 Saat 17:04."
    ],
    examples: [],
    related_word_ids: [3024]
  },
  {
    id: "vocab-saat-3025",
    category: "vocabulary",
    title: "five past five p.m. — akşam beşi beş geçiyor",
    keywords: ["five past five p.m.", "akşam beşi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:05.",
      "🇹🇷 Saat 17:05."
    ],
    examples: [],
    related_word_ids: [3025]
  },
  {
    id: "vocab-saat-3026",
    category: "vocabulary",
    title: "six minutes past five p.m. — akşam beşi altı geçiyor",
    keywords: ["six minutes past five p.m.", "akşam beşi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:06.",
      "🇹🇷 Saat 17:06."
    ],
    examples: [],
    related_word_ids: [3026]
  },
  {
    id: "vocab-saat-3027",
    category: "vocabulary",
    title: "seven minutes past five p.m. — akşam beşi yedi geçiyor",
    keywords: ["seven minutes past five p.m.", "akşam beşi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:07.",
      "🇹🇷 Saat 17:07."
    ],
    examples: [],
    related_word_ids: [3027]
  },
  {
    id: "vocab-saat-3028",
    category: "vocabulary",
    title: "eight minutes past five p.m. — akşam beşi sekiz geçiyor",
    keywords: ["eight minutes past five p.m.", "akşam beşi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:08.",
      "🇹🇷 Saat 17:08."
    ],
    examples: [],
    related_word_ids: [3028]
  },
  {
    id: "vocab-saat-3029",
    category: "vocabulary",
    title: "nine minutes past five p.m. — akşam beşi dokuz geçiyor",
    keywords: ["nine minutes past five p.m.", "akşam beşi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:09.",
      "🇹🇷 Saat 17:09."
    ],
    examples: [],
    related_word_ids: [3029]
  },
  {
    id: "vocab-saat-3030",
    category: "vocabulary",
    title: "ten past five p.m. — akşam beşi on geçiyor",
    keywords: ["ten past five p.m.", "akşam beşi on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:10.",
      "🇹🇷 Saat 17:10."
    ],
    examples: [],
    related_word_ids: [3030]
  },
  {
    id: "vocab-saat-3031",
    category: "vocabulary",
    title: "eleven minutes past five p.m. — akşam beşi on bir geçiyor",
    keywords: ["eleven minutes past five p.m.", "akşam beşi on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:11.",
      "🇹🇷 Saat 17:11."
    ],
    examples: [],
    related_word_ids: [3031]
  },
  {
    id: "vocab-saat-3032",
    category: "vocabulary",
    title: "twelve minutes past five p.m. — akşam beşi on iki geçiyor",
    keywords: ["twelve minutes past five p.m.", "akşam beşi on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:12.",
      "🇹🇷 Saat 17:12."
    ],
    examples: [],
    related_word_ids: [3032]
  },
  {
    id: "vocab-saat-3033",
    category: "vocabulary",
    title: "thirteen minutes past five p.m. — akşam beşi on üç geçiyor",
    keywords: ["thirteen minutes past five p.m.", "akşam beşi on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:13.",
      "🇹🇷 Saat 17:13."
    ],
    examples: [],
    related_word_ids: [3033]
  },
  {
    id: "vocab-saat-3034",
    category: "vocabulary",
    title: "fourteen minutes past five p.m. — akşam beşi on dört geçiyor",
    keywords: ["fourteen minutes past five p.m.", "akşam beşi on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:14.",
      "🇹🇷 Saat 17:14."
    ],
    examples: [],
    related_word_ids: [3034]
  },
  {
    id: "vocab-saat-3035",
    category: "vocabulary",
    title: "a quarter past five p.m. — akşam beşi çeyrek geçiyor",
    keywords: ["a quarter past five p.m.", "akşam beşi çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:15.",
      "🇹🇷 Saat 17:15."
    ],
    examples: [],
    related_word_ids: [3035]
  },
  {
    id: "vocab-saat-3036",
    category: "vocabulary",
    title: "sixteen minutes past five p.m. — akşam beşi on altı geçiyor",
    keywords: ["sixteen minutes past five p.m.", "akşam beşi on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:16.",
      "🇹🇷 Saat 17:16."
    ],
    examples: [],
    related_word_ids: [3036]
  },
  {
    id: "vocab-saat-3037",
    category: "vocabulary",
    title: "seventeen minutes past five p.m. — akşam beşi on yedi geçiyor",
    keywords: ["seventeen minutes past five p.m.", "akşam beşi on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:17.",
      "🇹🇷 Saat 17:17."
    ],
    examples: [],
    related_word_ids: [3037]
  },
  {
    id: "vocab-saat-3038",
    category: "vocabulary",
    title: "eighteen minutes past five p.m. — akşam beşi on sekiz geçiyor",
    keywords: ["eighteen minutes past five p.m.", "akşam beşi on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:18.",
      "🇹🇷 Saat 17:18."
    ],
    examples: [],
    related_word_ids: [3038]
  },
  {
    id: "vocab-saat-3039",
    category: "vocabulary",
    title: "nineteen minutes past five p.m. — akşam beşi on dokuz geçiyor",
    keywords: ["nineteen minutes past five p.m.", "akşam beşi on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:19.",
      "🇹🇷 Saat 17:19."
    ],
    examples: [],
    related_word_ids: [3039]
  },
  {
    id: "vocab-saat-3040",
    category: "vocabulary",
    title: "twenty past five p.m. — akşam beşi yirmi geçiyor",
    keywords: ["twenty past five p.m.", "akşam beşi yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:20.",
      "🇹🇷 Saat 17:20."
    ],
    examples: [],
    related_word_ids: [3040]
  },
  {
    id: "vocab-saat-3041",
    category: "vocabulary",
    title: "twenty-one minutes past five p.m. — akşam beşi yirmi bir geçiyor",
    keywords: ["twenty-one minutes past five p.m.", "akşam beşi yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:21.",
      "🇹🇷 Saat 17:21."
    ],
    examples: [],
    related_word_ids: [3041]
  },
  {
    id: "vocab-saat-3042",
    category: "vocabulary",
    title: "twenty-two minutes past five p.m. — akşam beşi yirmi iki geçiyor",
    keywords: ["twenty-two minutes past five p.m.", "akşam beşi yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:22.",
      "🇹🇷 Saat 17:22."
    ],
    examples: [],
    related_word_ids: [3042]
  },
  {
    id: "vocab-saat-3043",
    category: "vocabulary",
    title: "twenty-three minutes past five p.m. — akşam beşi yirmi üç geçiyor",
    keywords: ["twenty-three minutes past five p.m.", "akşam beşi yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:23.",
      "🇹🇷 Saat 17:23."
    ],
    examples: [],
    related_word_ids: [3043]
  },
  {
    id: "vocab-saat-3044",
    category: "vocabulary",
    title: "twenty-four minutes past five p.m. — akşam beşi yirmi dört geçiyor",
    keywords: ["twenty-four minutes past five p.m.", "akşam beşi yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:24.",
      "🇹🇷 Saat 17:24."
    ],
    examples: [],
    related_word_ids: [3044]
  },
  {
    id: "vocab-saat-3045",
    category: "vocabulary",
    title: "twenty-five past five p.m. — akşam beşi yirmi beş geçiyor",
    keywords: ["twenty-five past five p.m.", "akşam beşi yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:25.",
      "🇹🇷 Saat 17:25."
    ],
    examples: [],
    related_word_ids: [3045]
  },
  {
    id: "vocab-saat-3046",
    category: "vocabulary",
    title: "twenty-six minutes past five p.m. — akşam beşi yirmi altı geçiyor",
    keywords: ["twenty-six minutes past five p.m.", "akşam beşi yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:26.",
      "🇹🇷 Saat 17:26."
    ],
    examples: [],
    related_word_ids: [3046]
  },
  {
    id: "vocab-saat-3047",
    category: "vocabulary",
    title: "twenty-seven minutes past five p.m. — akşam beşi yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past five p.m.", "akşam beşi yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:27.",
      "🇹🇷 Saat 17:27."
    ],
    examples: [],
    related_word_ids: [3047]
  },
  {
    id: "vocab-saat-3048",
    category: "vocabulary",
    title: "twenty-eight minutes past five p.m. — akşam beşi yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past five p.m.", "akşam beşi yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:28.",
      "🇹🇷 Saat 17:28."
    ],
    examples: [],
    related_word_ids: [3048]
  },
  {
    id: "vocab-saat-3049",
    category: "vocabulary",
    title: "twenty-nine minutes past five p.m. — akşam beşi yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past five p.m.", "akşam beşi yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:29.",
      "🇹🇷 Saat 17:29."
    ],
    examples: [],
    related_word_ids: [3049]
  },
  {
    id: "vocab-saat-3050",
    category: "vocabulary",
    title: "half past five p.m. — akşam beş buçuk",
    keywords: ["half past five p.m.", "akşam beş buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:30.",
      "🇹🇷 Saat 17:30."
    ],
    examples: [],
    related_word_ids: [3050]
  },
  {
    id: "vocab-saat-3051",
    category: "vocabulary",
    title: "twenty-nine minutes to six p.m. — akşam altıya yirmi dokuz var",
    keywords: ["twenty-nine minutes to six p.m.", "akşam altıya yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:31.",
      "🇹🇷 Saat 17:31."
    ],
    examples: [],
    related_word_ids: [3051]
  },
  {
    id: "vocab-saat-3052",
    category: "vocabulary",
    title: "twenty-eight minutes to six p.m. — akşam altıya yirmi sekiz var",
    keywords: ["twenty-eight minutes to six p.m.", "akşam altıya yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:32.",
      "🇹🇷 Saat 17:32."
    ],
    examples: [],
    related_word_ids: [3052]
  },
  {
    id: "vocab-saat-3053",
    category: "vocabulary",
    title: "twenty-seven minutes to six p.m. — akşam altıya yirmi yedi var",
    keywords: ["twenty-seven minutes to six p.m.", "akşam altıya yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:33.",
      "🇹🇷 Saat 17:33."
    ],
    examples: [],
    related_word_ids: [3053]
  },
  {
    id: "vocab-saat-3054",
    category: "vocabulary",
    title: "twenty-six minutes to six p.m. — akşam altıya yirmi altı var",
    keywords: ["twenty-six minutes to six p.m.", "akşam altıya yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:34.",
      "🇹🇷 Saat 17:34."
    ],
    examples: [],
    related_word_ids: [3054]
  },
  {
    id: "vocab-saat-3055",
    category: "vocabulary",
    title: "twenty-five to six p.m. — akşam altıya yirmi beş var",
    keywords: ["twenty-five to six p.m.", "akşam altıya yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:35.",
      "🇹🇷 Saat 17:35."
    ],
    examples: [],
    related_word_ids: [3055]
  },
  {
    id: "vocab-saat-3056",
    category: "vocabulary",
    title: "twenty-four minutes to six p.m. — akşam altıya yirmi dört var",
    keywords: ["twenty-four minutes to six p.m.", "akşam altıya yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:36.",
      "🇹🇷 Saat 17:36."
    ],
    examples: [],
    related_word_ids: [3056]
  },
  {
    id: "vocab-saat-3057",
    category: "vocabulary",
    title: "twenty-three minutes to six p.m. — akşam altıya yirmi üç var",
    keywords: ["twenty-three minutes to six p.m.", "akşam altıya yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:37.",
      "🇹🇷 Saat 17:37."
    ],
    examples: [],
    related_word_ids: [3057]
  },
  {
    id: "vocab-saat-3058",
    category: "vocabulary",
    title: "twenty-two minutes to six p.m. — akşam altıya yirmi iki var",
    keywords: ["twenty-two minutes to six p.m.", "akşam altıya yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:38.",
      "🇹🇷 Saat 17:38."
    ],
    examples: [],
    related_word_ids: [3058]
  },
  {
    id: "vocab-saat-3059",
    category: "vocabulary",
    title: "twenty-one minutes to six p.m. — akşam altıya yirmi bir var",
    keywords: ["twenty-one minutes to six p.m.", "akşam altıya yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:39.",
      "🇹🇷 Saat 17:39."
    ],
    examples: [],
    related_word_ids: [3059]
  },
  {
    id: "vocab-saat-3060",
    category: "vocabulary",
    title: "twenty to six p.m. — akşam altıya yirmi var",
    keywords: ["twenty to six p.m.", "akşam altıya yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:40.",
      "🇹🇷 Saat 17:40."
    ],
    examples: [],
    related_word_ids: [3060]
  },
  {
    id: "vocab-saat-3061",
    category: "vocabulary",
    title: "nineteen minutes to six p.m. — akşam altıya on dokuz var",
    keywords: ["nineteen minutes to six p.m.", "akşam altıya on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:41.",
      "🇹🇷 Saat 17:41."
    ],
    examples: [],
    related_word_ids: [3061]
  },
  {
    id: "vocab-saat-3062",
    category: "vocabulary",
    title: "eighteen minutes to six p.m. — akşam altıya on sekiz var",
    keywords: ["eighteen minutes to six p.m.", "akşam altıya on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:42.",
      "🇹🇷 Saat 17:42."
    ],
    examples: [],
    related_word_ids: [3062]
  },
  {
    id: "vocab-saat-3063",
    category: "vocabulary",
    title: "seventeen minutes to six p.m. — akşam altıya on yedi var",
    keywords: ["seventeen minutes to six p.m.", "akşam altıya on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:43.",
      "🇹🇷 Saat 17:43."
    ],
    examples: [],
    related_word_ids: [3063]
  },
  {
    id: "vocab-saat-3064",
    category: "vocabulary",
    title: "sixteen minutes to six p.m. — akşam altıya on altı var",
    keywords: ["sixteen minutes to six p.m.", "akşam altıya on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:44.",
      "🇹🇷 Saat 17:44."
    ],
    examples: [],
    related_word_ids: [3064]
  },
  {
    id: "vocab-saat-3065",
    category: "vocabulary",
    title: "a quarter to six p.m. — akşam altıya çeyrek var",
    keywords: ["a quarter to six p.m.", "akşam altıya çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:45.",
      "🇹🇷 Saat 17:45."
    ],
    examples: [],
    related_word_ids: [3065]
  },
  {
    id: "vocab-saat-3066",
    category: "vocabulary",
    title: "fourteen minutes to six p.m. — akşam altıya on dört var",
    keywords: ["fourteen minutes to six p.m.", "akşam altıya on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:46.",
      "🇹🇷 Saat 17:46."
    ],
    examples: [],
    related_word_ids: [3066]
  },
  {
    id: "vocab-saat-3067",
    category: "vocabulary",
    title: "thirteen minutes to six p.m. — akşam altıya on üç var",
    keywords: ["thirteen minutes to six p.m.", "akşam altıya on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:47.",
      "🇹🇷 Saat 17:47."
    ],
    examples: [],
    related_word_ids: [3067]
  },
  {
    id: "vocab-saat-3068",
    category: "vocabulary",
    title: "twelve minutes to six p.m. — akşam altıya on iki var",
    keywords: ["twelve minutes to six p.m.", "akşam altıya on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:48.",
      "🇹🇷 Saat 17:48."
    ],
    examples: [],
    related_word_ids: [3068]
  },
  {
    id: "vocab-saat-3069",
    category: "vocabulary",
    title: "eleven minutes to six p.m. — akşam altıya on bir var",
    keywords: ["eleven minutes to six p.m.", "akşam altıya on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:49.",
      "🇹🇷 Saat 17:49."
    ],
    examples: [],
    related_word_ids: [3069]
  },
  {
    id: "vocab-saat-3070",
    category: "vocabulary",
    title: "ten to six p.m. — akşam altıya on var",
    keywords: ["ten to six p.m.", "akşam altıya on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:50.",
      "🇹🇷 Saat 17:50."
    ],
    examples: [],
    related_word_ids: [3070]
  },
  {
    id: "vocab-saat-3071",
    category: "vocabulary",
    title: "nine minutes to six p.m. — akşam altıya dokuz var",
    keywords: ["nine minutes to six p.m.", "akşam altıya dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:51.",
      "🇹🇷 Saat 17:51."
    ],
    examples: [],
    related_word_ids: [3071]
  },
  {
    id: "vocab-saat-3072",
    category: "vocabulary",
    title: "eight minutes to six p.m. — akşam altıya sekiz var",
    keywords: ["eight minutes to six p.m.", "akşam altıya sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:52.",
      "🇹🇷 Saat 17:52."
    ],
    examples: [],
    related_word_ids: [3072]
  },
  {
    id: "vocab-saat-3073",
    category: "vocabulary",
    title: "seven minutes to six p.m. — akşam altıya yedi var",
    keywords: ["seven minutes to six p.m.", "akşam altıya yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:53.",
      "🇹🇷 Saat 17:53."
    ],
    examples: [],
    related_word_ids: [3073]
  },
  {
    id: "vocab-saat-3074",
    category: "vocabulary",
    title: "six minutes to six p.m. — akşam altıya altı var",
    keywords: ["six minutes to six p.m.", "akşam altıya altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:54.",
      "🇹🇷 Saat 17:54."
    ],
    examples: [],
    related_word_ids: [3074]
  },
  {
    id: "vocab-saat-3075",
    category: "vocabulary",
    title: "five to six p.m. — akşam altıya beş var",
    keywords: ["five to six p.m.", "akşam altıya beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:55.",
      "🇹🇷 Saat 17:55."
    ],
    examples: [],
    related_word_ids: [3075]
  },
  {
    id: "vocab-saat-3076",
    category: "vocabulary",
    title: "four minutes to six p.m. — akşam altıya dört var",
    keywords: ["four minutes to six p.m.", "akşam altıya dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:56.",
      "🇹🇷 Saat 17:56."
    ],
    examples: [],
    related_word_ids: [3076]
  },
  {
    id: "vocab-saat-3077",
    category: "vocabulary",
    title: "three minutes to six p.m. — akşam altıya üç var",
    keywords: ["three minutes to six p.m.", "akşam altıya üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:57.",
      "🇹🇷 Saat 17:57."
    ],
    examples: [],
    related_word_ids: [3077]
  },
  {
    id: "vocab-saat-3078",
    category: "vocabulary",
    title: "two minutes to six p.m. — akşam altıya iki var",
    keywords: ["two minutes to six p.m.", "akşam altıya iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:58.",
      "🇹🇷 Saat 17:58."
    ],
    examples: [],
    related_word_ids: [3078]
  },
  {
    id: "vocab-saat-3079",
    category: "vocabulary",
    title: "one minute to six p.m. — akşam altıya bir var",
    keywords: ["one minute to six p.m.", "akşam altıya bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 17:59.",
      "🇹🇷 Saat 17:59."
    ],
    examples: [],
    related_word_ids: [3079]
  },
  {
    id: "vocab-saat-3080",
    category: "vocabulary",
    title: "six o'clock p.m. — akşam altı",
    keywords: ["six o'clock p.m.", "akşam altı", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:00.",
      "🇹🇷 Saat 18:00."
    ],
    examples: [],
    related_word_ids: [3080]
  },
  {
    id: "vocab-saat-3081",
    category: "vocabulary",
    title: "one minute past six p.m. — akşam altıyı bir geçiyor",
    keywords: ["one minute past six p.m.", "akşam altıyı bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:01.",
      "🇹🇷 Saat 18:01."
    ],
    examples: [],
    related_word_ids: [3081]
  },
  {
    id: "vocab-saat-3082",
    category: "vocabulary",
    title: "two minutes past six p.m. — akşam altıyı iki geçiyor",
    keywords: ["two minutes past six p.m.", "akşam altıyı iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:02.",
      "🇹🇷 Saat 18:02."
    ],
    examples: [],
    related_word_ids: [3082]
  },
  {
    id: "vocab-saat-3083",
    category: "vocabulary",
    title: "three minutes past six p.m. — akşam altıyı üç geçiyor",
    keywords: ["three minutes past six p.m.", "akşam altıyı üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:03.",
      "🇹🇷 Saat 18:03."
    ],
    examples: [],
    related_word_ids: [3083]
  },
  {
    id: "vocab-saat-3084",
    category: "vocabulary",
    title: "four minutes past six p.m. — akşam altıyı dört geçiyor",
    keywords: ["four minutes past six p.m.", "akşam altıyı dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:04.",
      "🇹🇷 Saat 18:04."
    ],
    examples: [],
    related_word_ids: [3084]
  },
  {
    id: "vocab-saat-3085",
    category: "vocabulary",
    title: "five past six p.m. — akşam altıyı beş geçiyor",
    keywords: ["five past six p.m.", "akşam altıyı beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:05.",
      "🇹🇷 Saat 18:05."
    ],
    examples: [],
    related_word_ids: [3085]
  },
  {
    id: "vocab-saat-3086",
    category: "vocabulary",
    title: "six minutes past six p.m. — akşam altıyı altı geçiyor",
    keywords: ["six minutes past six p.m.", "akşam altıyı altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:06.",
      "🇹🇷 Saat 18:06."
    ],
    examples: [],
    related_word_ids: [3086]
  },
  {
    id: "vocab-saat-3087",
    category: "vocabulary",
    title: "seven minutes past six p.m. — akşam altıyı yedi geçiyor",
    keywords: ["seven minutes past six p.m.", "akşam altıyı yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:07.",
      "🇹🇷 Saat 18:07."
    ],
    examples: [],
    related_word_ids: [3087]
  },
  {
    id: "vocab-saat-3088",
    category: "vocabulary",
    title: "eight minutes past six p.m. — akşam altıyı sekiz geçiyor",
    keywords: ["eight minutes past six p.m.", "akşam altıyı sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:08.",
      "🇹🇷 Saat 18:08."
    ],
    examples: [],
    related_word_ids: [3088]
  },
  {
    id: "vocab-saat-3089",
    category: "vocabulary",
    title: "nine minutes past six p.m. — akşam altıyı dokuz geçiyor",
    keywords: ["nine minutes past six p.m.", "akşam altıyı dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:09.",
      "🇹🇷 Saat 18:09."
    ],
    examples: [],
    related_word_ids: [3089]
  },
  {
    id: "vocab-saat-3090",
    category: "vocabulary",
    title: "ten past six p.m. — akşam altıyı on geçiyor",
    keywords: ["ten past six p.m.", "akşam altıyı on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:10.",
      "🇹🇷 Saat 18:10."
    ],
    examples: [],
    related_word_ids: [3090]
  },
  {
    id: "vocab-saat-3091",
    category: "vocabulary",
    title: "eleven minutes past six p.m. — akşam altıyı on bir geçiyor",
    keywords: ["eleven minutes past six p.m.", "akşam altıyı on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:11.",
      "🇹🇷 Saat 18:11."
    ],
    examples: [],
    related_word_ids: [3091]
  },
  {
    id: "vocab-saat-3092",
    category: "vocabulary",
    title: "twelve minutes past six p.m. — akşam altıyı on iki geçiyor",
    keywords: ["twelve minutes past six p.m.", "akşam altıyı on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:12.",
      "🇹🇷 Saat 18:12."
    ],
    examples: [],
    related_word_ids: [3092]
  },
  {
    id: "vocab-saat-3093",
    category: "vocabulary",
    title: "thirteen minutes past six p.m. — akşam altıyı on üç geçiyor",
    keywords: ["thirteen minutes past six p.m.", "akşam altıyı on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:13.",
      "🇹🇷 Saat 18:13."
    ],
    examples: [],
    related_word_ids: [3093]
  },
  {
    id: "vocab-saat-3094",
    category: "vocabulary",
    title: "fourteen minutes past six p.m. — akşam altıyı on dört geçiyor",
    keywords: ["fourteen minutes past six p.m.", "akşam altıyı on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:14.",
      "🇹🇷 Saat 18:14."
    ],
    examples: [],
    related_word_ids: [3094]
  },
  {
    id: "vocab-saat-3095",
    category: "vocabulary",
    title: "a quarter past six p.m. — akşam altıyı çeyrek geçiyor",
    keywords: ["a quarter past six p.m.", "akşam altıyı çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:15.",
      "🇹🇷 Saat 18:15."
    ],
    examples: [],
    related_word_ids: [3095]
  },
  {
    id: "vocab-saat-3096",
    category: "vocabulary",
    title: "sixteen minutes past six p.m. — akşam altıyı on altı geçiyor",
    keywords: ["sixteen minutes past six p.m.", "akşam altıyı on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:16.",
      "🇹🇷 Saat 18:16."
    ],
    examples: [],
    related_word_ids: [3096]
  },
  {
    id: "vocab-saat-3097",
    category: "vocabulary",
    title: "seventeen minutes past six p.m. — akşam altıyı on yedi geçiyor",
    keywords: ["seventeen minutes past six p.m.", "akşam altıyı on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:17.",
      "🇹🇷 Saat 18:17."
    ],
    examples: [],
    related_word_ids: [3097]
  },
  {
    id: "vocab-saat-3098",
    category: "vocabulary",
    title: "eighteen minutes past six p.m. — akşam altıyı on sekiz geçiyor",
    keywords: ["eighteen minutes past six p.m.", "akşam altıyı on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:18.",
      "🇹🇷 Saat 18:18."
    ],
    examples: [],
    related_word_ids: [3098]
  },
  {
    id: "vocab-saat-3099",
    category: "vocabulary",
    title: "nineteen minutes past six p.m. — akşam altıyı on dokuz geçiyor",
    keywords: ["nineteen minutes past six p.m.", "akşam altıyı on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:19.",
      "🇹🇷 Saat 18:19."
    ],
    examples: [],
    related_word_ids: [3099]
  },
  {
    id: "vocab-saat-3100",
    category: "vocabulary",
    title: "twenty past six p.m. — akşam altıyı yirmi geçiyor",
    keywords: ["twenty past six p.m.", "akşam altıyı yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:20.",
      "🇹🇷 Saat 18:20."
    ],
    examples: [],
    related_word_ids: [3100]
  },
  {
    id: "vocab-saat-3101",
    category: "vocabulary",
    title: "twenty-one minutes past six p.m. — akşam altıyı yirmi bir geçiyor",
    keywords: ["twenty-one minutes past six p.m.", "akşam altıyı yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:21.",
      "🇹🇷 Saat 18:21."
    ],
    examples: [],
    related_word_ids: [3101]
  },
  {
    id: "vocab-saat-3102",
    category: "vocabulary",
    title: "twenty-two minutes past six p.m. — akşam altıyı yirmi iki geçiyor",
    keywords: ["twenty-two minutes past six p.m.", "akşam altıyı yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:22.",
      "🇹🇷 Saat 18:22."
    ],
    examples: [],
    related_word_ids: [3102]
  },
  {
    id: "vocab-saat-3103",
    category: "vocabulary",
    title: "twenty-three minutes past six p.m. — akşam altıyı yirmi üç geçiyor",
    keywords: ["twenty-three minutes past six p.m.", "akşam altıyı yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:23.",
      "🇹🇷 Saat 18:23."
    ],
    examples: [],
    related_word_ids: [3103]
  },
  {
    id: "vocab-saat-3104",
    category: "vocabulary",
    title: "twenty-four minutes past six p.m. — akşam altıyı yirmi dört geçiyor",
    keywords: ["twenty-four minutes past six p.m.", "akşam altıyı yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:24.",
      "🇹🇷 Saat 18:24."
    ],
    examples: [],
    related_word_ids: [3104]
  },
  {
    id: "vocab-saat-3105",
    category: "vocabulary",
    title: "twenty-five past six p.m. — akşam altıyı yirmi beş geçiyor",
    keywords: ["twenty-five past six p.m.", "akşam altıyı yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:25.",
      "🇹🇷 Saat 18:25."
    ],
    examples: [],
    related_word_ids: [3105]
  },
  {
    id: "vocab-saat-3106",
    category: "vocabulary",
    title: "twenty-six minutes past six p.m. — akşam altıyı yirmi altı geçiyor",
    keywords: ["twenty-six minutes past six p.m.", "akşam altıyı yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:26.",
      "🇹🇷 Saat 18:26."
    ],
    examples: [],
    related_word_ids: [3106]
  },
  {
    id: "vocab-saat-3107",
    category: "vocabulary",
    title: "twenty-seven minutes past six p.m. — akşam altıyı yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past six p.m.", "akşam altıyı yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:27.",
      "🇹🇷 Saat 18:27."
    ],
    examples: [],
    related_word_ids: [3107]
  },
  {
    id: "vocab-saat-3108",
    category: "vocabulary",
    title: "twenty-eight minutes past six p.m. — akşam altıyı yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past six p.m.", "akşam altıyı yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:28.",
      "🇹🇷 Saat 18:28."
    ],
    examples: [],
    related_word_ids: [3108]
  },
  {
    id: "vocab-saat-3109",
    category: "vocabulary",
    title: "twenty-nine minutes past six p.m. — akşam altıyı yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past six p.m.", "akşam altıyı yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:29.",
      "🇹🇷 Saat 18:29."
    ],
    examples: [],
    related_word_ids: [3109]
  },
  {
    id: "vocab-saat-3110",
    category: "vocabulary",
    title: "half past six p.m. — akşam altı buçuk",
    keywords: ["half past six p.m.", "akşam altı buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:30.",
      "🇹🇷 Saat 18:30."
    ],
    examples: [],
    related_word_ids: [3110]
  },
  {
    id: "vocab-saat-3111",
    category: "vocabulary",
    title: "twenty-nine minutes to seven p.m. — akşam yediye yirmi dokuz var",
    keywords: ["twenty-nine minutes to seven p.m.", "akşam yediye yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:31.",
      "🇹🇷 Saat 18:31."
    ],
    examples: [],
    related_word_ids: [3111]
  },
  {
    id: "vocab-saat-3112",
    category: "vocabulary",
    title: "twenty-eight minutes to seven p.m. — akşam yediye yirmi sekiz var",
    keywords: ["twenty-eight minutes to seven p.m.", "akşam yediye yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:32.",
      "🇹🇷 Saat 18:32."
    ],
    examples: [],
    related_word_ids: [3112]
  },
  {
    id: "vocab-saat-3113",
    category: "vocabulary",
    title: "twenty-seven minutes to seven p.m. — akşam yediye yirmi yedi var",
    keywords: ["twenty-seven minutes to seven p.m.", "akşam yediye yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:33.",
      "🇹🇷 Saat 18:33."
    ],
    examples: [],
    related_word_ids: [3113]
  },
  {
    id: "vocab-saat-3114",
    category: "vocabulary",
    title: "twenty-six minutes to seven p.m. — akşam yediye yirmi altı var",
    keywords: ["twenty-six minutes to seven p.m.", "akşam yediye yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:34.",
      "🇹🇷 Saat 18:34."
    ],
    examples: [],
    related_word_ids: [3114]
  },
  {
    id: "vocab-saat-3115",
    category: "vocabulary",
    title: "twenty-five to seven p.m. — akşam yediye yirmi beş var",
    keywords: ["twenty-five to seven p.m.", "akşam yediye yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:35.",
      "🇹🇷 Saat 18:35."
    ],
    examples: [],
    related_word_ids: [3115]
  },
  {
    id: "vocab-saat-3116",
    category: "vocabulary",
    title: "twenty-four minutes to seven p.m. — akşam yediye yirmi dört var",
    keywords: ["twenty-four minutes to seven p.m.", "akşam yediye yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:36.",
      "🇹🇷 Saat 18:36."
    ],
    examples: [],
    related_word_ids: [3116]
  },
  {
    id: "vocab-saat-3117",
    category: "vocabulary",
    title: "twenty-three minutes to seven p.m. — akşam yediye yirmi üç var",
    keywords: ["twenty-three minutes to seven p.m.", "akşam yediye yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:37.",
      "🇹🇷 Saat 18:37."
    ],
    examples: [],
    related_word_ids: [3117]
  },
  {
    id: "vocab-saat-3118",
    category: "vocabulary",
    title: "twenty-two minutes to seven p.m. — akşam yediye yirmi iki var",
    keywords: ["twenty-two minutes to seven p.m.", "akşam yediye yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:38.",
      "🇹🇷 Saat 18:38."
    ],
    examples: [],
    related_word_ids: [3118]
  },
  {
    id: "vocab-saat-3119",
    category: "vocabulary",
    title: "twenty-one minutes to seven p.m. — akşam yediye yirmi bir var",
    keywords: ["twenty-one minutes to seven p.m.", "akşam yediye yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:39.",
      "🇹🇷 Saat 18:39."
    ],
    examples: [],
    related_word_ids: [3119]
  },
  {
    id: "vocab-saat-3120",
    category: "vocabulary",
    title: "twenty to seven p.m. — akşam yediye yirmi var",
    keywords: ["twenty to seven p.m.", "akşam yediye yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:40.",
      "🇹🇷 Saat 18:40."
    ],
    examples: [],
    related_word_ids: [3120]
  },
  {
    id: "vocab-saat-3121",
    category: "vocabulary",
    title: "nineteen minutes to seven p.m. — akşam yediye on dokuz var",
    keywords: ["nineteen minutes to seven p.m.", "akşam yediye on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:41.",
      "🇹🇷 Saat 18:41."
    ],
    examples: [],
    related_word_ids: [3121]
  },
  {
    id: "vocab-saat-3122",
    category: "vocabulary",
    title: "eighteen minutes to seven p.m. — akşam yediye on sekiz var",
    keywords: ["eighteen minutes to seven p.m.", "akşam yediye on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:42.",
      "🇹🇷 Saat 18:42."
    ],
    examples: [],
    related_word_ids: [3122]
  },
  {
    id: "vocab-saat-3123",
    category: "vocabulary",
    title: "seventeen minutes to seven p.m. — akşam yediye on yedi var",
    keywords: ["seventeen minutes to seven p.m.", "akşam yediye on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:43.",
      "🇹🇷 Saat 18:43."
    ],
    examples: [],
    related_word_ids: [3123]
  },
  {
    id: "vocab-saat-3124",
    category: "vocabulary",
    title: "sixteen minutes to seven p.m. — akşam yediye on altı var",
    keywords: ["sixteen minutes to seven p.m.", "akşam yediye on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:44.",
      "🇹🇷 Saat 18:44."
    ],
    examples: [],
    related_word_ids: [3124]
  },
  {
    id: "vocab-saat-3125",
    category: "vocabulary",
    title: "a quarter to seven p.m. — akşam yediye çeyrek var",
    keywords: ["a quarter to seven p.m.", "akşam yediye çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:45.",
      "🇹🇷 Saat 18:45."
    ],
    examples: [],
    related_word_ids: [3125]
  },
  {
    id: "vocab-saat-3126",
    category: "vocabulary",
    title: "fourteen minutes to seven p.m. — akşam yediye on dört var",
    keywords: ["fourteen minutes to seven p.m.", "akşam yediye on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:46.",
      "🇹🇷 Saat 18:46."
    ],
    examples: [],
    related_word_ids: [3126]
  },
  {
    id: "vocab-saat-3127",
    category: "vocabulary",
    title: "thirteen minutes to seven p.m. — akşam yediye on üç var",
    keywords: ["thirteen minutes to seven p.m.", "akşam yediye on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:47.",
      "🇹🇷 Saat 18:47."
    ],
    examples: [],
    related_word_ids: [3127]
  },
  {
    id: "vocab-saat-3128",
    category: "vocabulary",
    title: "twelve minutes to seven p.m. — akşam yediye on iki var",
    keywords: ["twelve minutes to seven p.m.", "akşam yediye on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:48.",
      "🇹🇷 Saat 18:48."
    ],
    examples: [],
    related_word_ids: [3128]
  },
  {
    id: "vocab-saat-3129",
    category: "vocabulary",
    title: "eleven minutes to seven p.m. — akşam yediye on bir var",
    keywords: ["eleven minutes to seven p.m.", "akşam yediye on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:49.",
      "🇹🇷 Saat 18:49."
    ],
    examples: [],
    related_word_ids: [3129]
  },
  {
    id: "vocab-saat-3130",
    category: "vocabulary",
    title: "ten to seven p.m. — akşam yediye on var",
    keywords: ["ten to seven p.m.", "akşam yediye on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:50.",
      "🇹🇷 Saat 18:50."
    ],
    examples: [],
    related_word_ids: [3130]
  },
  {
    id: "vocab-saat-3131",
    category: "vocabulary",
    title: "nine minutes to seven p.m. — akşam yediye dokuz var",
    keywords: ["nine minutes to seven p.m.", "akşam yediye dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:51.",
      "🇹🇷 Saat 18:51."
    ],
    examples: [],
    related_word_ids: [3131]
  },
  {
    id: "vocab-saat-3132",
    category: "vocabulary",
    title: "eight minutes to seven p.m. — akşam yediye sekiz var",
    keywords: ["eight minutes to seven p.m.", "akşam yediye sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:52.",
      "🇹🇷 Saat 18:52."
    ],
    examples: [],
    related_word_ids: [3132]
  },
  {
    id: "vocab-saat-3133",
    category: "vocabulary",
    title: "seven minutes to seven p.m. — akşam yediye yedi var",
    keywords: ["seven minutes to seven p.m.", "akşam yediye yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:53.",
      "🇹🇷 Saat 18:53."
    ],
    examples: [],
    related_word_ids: [3133]
  },
  {
    id: "vocab-saat-3134",
    category: "vocabulary",
    title: "six minutes to seven p.m. — akşam yediye altı var",
    keywords: ["six minutes to seven p.m.", "akşam yediye altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:54.",
      "🇹🇷 Saat 18:54."
    ],
    examples: [],
    related_word_ids: [3134]
  },
  {
    id: "vocab-saat-3135",
    category: "vocabulary",
    title: "five to seven p.m. — akşam yediye beş var",
    keywords: ["five to seven p.m.", "akşam yediye beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:55.",
      "🇹🇷 Saat 18:55."
    ],
    examples: [],
    related_word_ids: [3135]
  },
  {
    id: "vocab-saat-3136",
    category: "vocabulary",
    title: "four minutes to seven p.m. — akşam yediye dört var",
    keywords: ["four minutes to seven p.m.", "akşam yediye dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:56.",
      "🇹🇷 Saat 18:56."
    ],
    examples: [],
    related_word_ids: [3136]
  },
  {
    id: "vocab-saat-3137",
    category: "vocabulary",
    title: "three minutes to seven p.m. — akşam yediye üç var",
    keywords: ["three minutes to seven p.m.", "akşam yediye üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:57.",
      "🇹🇷 Saat 18:57."
    ],
    examples: [],
    related_word_ids: [3137]
  },
  {
    id: "vocab-saat-3138",
    category: "vocabulary",
    title: "two minutes to seven p.m. — akşam yediye iki var",
    keywords: ["two minutes to seven p.m.", "akşam yediye iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:58.",
      "🇹🇷 Saat 18:58."
    ],
    examples: [],
    related_word_ids: [3138]
  },
  {
    id: "vocab-saat-3139",
    category: "vocabulary",
    title: "one minute to seven p.m. — akşam yediye bir var",
    keywords: ["one minute to seven p.m.", "akşam yediye bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 18:59.",
      "🇹🇷 Saat 18:59."
    ],
    examples: [],
    related_word_ids: [3139]
  },
  {
    id: "vocab-saat-3140",
    category: "vocabulary",
    title: "seven o'clock p.m. — akşam yedi",
    keywords: ["seven o'clock p.m.", "akşam yedi", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:00.",
      "🇹🇷 Saat 19:00."
    ],
    examples: [],
    related_word_ids: [3140]
  },
  {
    id: "vocab-saat-3141",
    category: "vocabulary",
    title: "one minute past seven p.m. — akşam yediyi bir geçiyor",
    keywords: ["one minute past seven p.m.", "akşam yediyi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:01.",
      "🇹🇷 Saat 19:01."
    ],
    examples: [],
    related_word_ids: [3141]
  },
  {
    id: "vocab-saat-3142",
    category: "vocabulary",
    title: "two minutes past seven p.m. — akşam yediyi iki geçiyor",
    keywords: ["two minutes past seven p.m.", "akşam yediyi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:02.",
      "🇹🇷 Saat 19:02."
    ],
    examples: [],
    related_word_ids: [3142]
  },
  {
    id: "vocab-saat-3143",
    category: "vocabulary",
    title: "three minutes past seven p.m. — akşam yediyi üç geçiyor",
    keywords: ["three minutes past seven p.m.", "akşam yediyi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:03.",
      "🇹🇷 Saat 19:03."
    ],
    examples: [],
    related_word_ids: [3143]
  },
  {
    id: "vocab-saat-3144",
    category: "vocabulary",
    title: "four minutes past seven p.m. — akşam yediyi dört geçiyor",
    keywords: ["four minutes past seven p.m.", "akşam yediyi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:04.",
      "🇹🇷 Saat 19:04."
    ],
    examples: [],
    related_word_ids: [3144]
  },
  {
    id: "vocab-saat-3145",
    category: "vocabulary",
    title: "five past seven p.m. — akşam yediyi beş geçiyor",
    keywords: ["five past seven p.m.", "akşam yediyi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:05.",
      "🇹🇷 Saat 19:05."
    ],
    examples: [],
    related_word_ids: [3145]
  },
  {
    id: "vocab-saat-3146",
    category: "vocabulary",
    title: "six minutes past seven p.m. — akşam yediyi altı geçiyor",
    keywords: ["six minutes past seven p.m.", "akşam yediyi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:06.",
      "🇹🇷 Saat 19:06."
    ],
    examples: [],
    related_word_ids: [3146]
  },
  {
    id: "vocab-saat-3147",
    category: "vocabulary",
    title: "seven minutes past seven p.m. — akşam yediyi yedi geçiyor",
    keywords: ["seven minutes past seven p.m.", "akşam yediyi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:07.",
      "🇹🇷 Saat 19:07."
    ],
    examples: [],
    related_word_ids: [3147]
  },
  {
    id: "vocab-saat-3148",
    category: "vocabulary",
    title: "eight minutes past seven p.m. — akşam yediyi sekiz geçiyor",
    keywords: ["eight minutes past seven p.m.", "akşam yediyi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:08.",
      "🇹🇷 Saat 19:08."
    ],
    examples: [],
    related_word_ids: [3148]
  },
  {
    id: "vocab-saat-3149",
    category: "vocabulary",
    title: "nine minutes past seven p.m. — akşam yediyi dokuz geçiyor",
    keywords: ["nine minutes past seven p.m.", "akşam yediyi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:09.",
      "🇹🇷 Saat 19:09."
    ],
    examples: [],
    related_word_ids: [3149]
  },
  {
    id: "vocab-saat-3150",
    category: "vocabulary",
    title: "ten past seven p.m. — akşam yediyi on geçiyor",
    keywords: ["ten past seven p.m.", "akşam yediyi on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:10.",
      "🇹🇷 Saat 19:10."
    ],
    examples: [],
    related_word_ids: [3150]
  },
  {
    id: "vocab-saat-3151",
    category: "vocabulary",
    title: "eleven minutes past seven p.m. — akşam yediyi on bir geçiyor",
    keywords: ["eleven minutes past seven p.m.", "akşam yediyi on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:11.",
      "🇹🇷 Saat 19:11."
    ],
    examples: [],
    related_word_ids: [3151]
  },
  {
    id: "vocab-saat-3152",
    category: "vocabulary",
    title: "twelve minutes past seven p.m. — akşam yediyi on iki geçiyor",
    keywords: ["twelve minutes past seven p.m.", "akşam yediyi on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:12.",
      "🇹🇷 Saat 19:12."
    ],
    examples: [],
    related_word_ids: [3152]
  },
  {
    id: "vocab-saat-3153",
    category: "vocabulary",
    title: "thirteen minutes past seven p.m. — akşam yediyi on üç geçiyor",
    keywords: ["thirteen minutes past seven p.m.", "akşam yediyi on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:13.",
      "🇹🇷 Saat 19:13."
    ],
    examples: [],
    related_word_ids: [3153]
  },
  {
    id: "vocab-saat-3154",
    category: "vocabulary",
    title: "fourteen minutes past seven p.m. — akşam yediyi on dört geçiyor",
    keywords: ["fourteen minutes past seven p.m.", "akşam yediyi on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:14.",
      "🇹🇷 Saat 19:14."
    ],
    examples: [],
    related_word_ids: [3154]
  },
  {
    id: "vocab-saat-3155",
    category: "vocabulary",
    title: "a quarter past seven p.m. — akşam yediyi çeyrek geçiyor",
    keywords: ["a quarter past seven p.m.", "akşam yediyi çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:15.",
      "🇹🇷 Saat 19:15."
    ],
    examples: [],
    related_word_ids: [3155]
  },
  {
    id: "vocab-saat-3156",
    category: "vocabulary",
    title: "sixteen minutes past seven p.m. — akşam yediyi on altı geçiyor",
    keywords: ["sixteen minutes past seven p.m.", "akşam yediyi on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:16.",
      "🇹🇷 Saat 19:16."
    ],
    examples: [],
    related_word_ids: [3156]
  },
  {
    id: "vocab-saat-3157",
    category: "vocabulary",
    title: "seventeen minutes past seven p.m. — akşam yediyi on yedi geçiyor",
    keywords: ["seventeen minutes past seven p.m.", "akşam yediyi on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:17.",
      "🇹🇷 Saat 19:17."
    ],
    examples: [],
    related_word_ids: [3157]
  },
  {
    id: "vocab-saat-3158",
    category: "vocabulary",
    title: "eighteen minutes past seven p.m. — akşam yediyi on sekiz geçiyor",
    keywords: ["eighteen minutes past seven p.m.", "akşam yediyi on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:18.",
      "🇹🇷 Saat 19:18."
    ],
    examples: [],
    related_word_ids: [3158]
  },
  {
    id: "vocab-saat-3159",
    category: "vocabulary",
    title: "nineteen minutes past seven p.m. — akşam yediyi on dokuz geçiyor",
    keywords: ["nineteen minutes past seven p.m.", "akşam yediyi on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:19.",
      "🇹🇷 Saat 19:19."
    ],
    examples: [],
    related_word_ids: [3159]
  },
  {
    id: "vocab-saat-3160",
    category: "vocabulary",
    title: "twenty past seven p.m. — akşam yediyi yirmi geçiyor",
    keywords: ["twenty past seven p.m.", "akşam yediyi yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:20.",
      "🇹🇷 Saat 19:20."
    ],
    examples: [],
    related_word_ids: [3160]
  },
  {
    id: "vocab-saat-3161",
    category: "vocabulary",
    title: "twenty-one minutes past seven p.m. — akşam yediyi yirmi bir geçiyor",
    keywords: ["twenty-one minutes past seven p.m.", "akşam yediyi yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:21.",
      "🇹🇷 Saat 19:21."
    ],
    examples: [],
    related_word_ids: [3161]
  },
  {
    id: "vocab-saat-3162",
    category: "vocabulary",
    title: "twenty-two minutes past seven p.m. — akşam yediyi yirmi iki geçiyor",
    keywords: ["twenty-two minutes past seven p.m.", "akşam yediyi yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:22.",
      "🇹🇷 Saat 19:22."
    ],
    examples: [],
    related_word_ids: [3162]
  },
  {
    id: "vocab-saat-3163",
    category: "vocabulary",
    title: "twenty-three minutes past seven p.m. — akşam yediyi yirmi üç geçiyor",
    keywords: ["twenty-three minutes past seven p.m.", "akşam yediyi yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:23.",
      "🇹🇷 Saat 19:23."
    ],
    examples: [],
    related_word_ids: [3163]
  },
  {
    id: "vocab-saat-3164",
    category: "vocabulary",
    title: "twenty-four minutes past seven p.m. — akşam yediyi yirmi dört geçiyor",
    keywords: ["twenty-four minutes past seven p.m.", "akşam yediyi yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:24.",
      "🇹🇷 Saat 19:24."
    ],
    examples: [],
    related_word_ids: [3164]
  },
  {
    id: "vocab-saat-3165",
    category: "vocabulary",
    title: "twenty-five past seven p.m. — akşam yediyi yirmi beş geçiyor",
    keywords: ["twenty-five past seven p.m.", "akşam yediyi yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:25.",
      "🇹🇷 Saat 19:25."
    ],
    examples: [],
    related_word_ids: [3165]
  },
  {
    id: "vocab-saat-3166",
    category: "vocabulary",
    title: "twenty-six minutes past seven p.m. — akşam yediyi yirmi altı geçiyor",
    keywords: ["twenty-six minutes past seven p.m.", "akşam yediyi yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:26.",
      "🇹🇷 Saat 19:26."
    ],
    examples: [],
    related_word_ids: [3166]
  },
  {
    id: "vocab-saat-3167",
    category: "vocabulary",
    title: "twenty-seven minutes past seven p.m. — akşam yediyi yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past seven p.m.", "akşam yediyi yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:27.",
      "🇹🇷 Saat 19:27."
    ],
    examples: [],
    related_word_ids: [3167]
  },
  {
    id: "vocab-saat-3168",
    category: "vocabulary",
    title: "twenty-eight minutes past seven p.m. — akşam yediyi yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past seven p.m.", "akşam yediyi yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:28.",
      "🇹🇷 Saat 19:28."
    ],
    examples: [],
    related_word_ids: [3168]
  },
  {
    id: "vocab-saat-3169",
    category: "vocabulary",
    title: "twenty-nine minutes past seven p.m. — akşam yediyi yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past seven p.m.", "akşam yediyi yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:29.",
      "🇹🇷 Saat 19:29."
    ],
    examples: [],
    related_word_ids: [3169]
  },
  {
    id: "vocab-saat-3170",
    category: "vocabulary",
    title: "half past seven p.m. — akşam yedi buçuk",
    keywords: ["half past seven p.m.", "akşam yedi buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:30.",
      "🇹🇷 Saat 19:30."
    ],
    examples: [],
    related_word_ids: [3170]
  },
  {
    id: "vocab-saat-3171",
    category: "vocabulary",
    title: "twenty-nine minutes to eight p.m. — akşam sekize yirmi dokuz var",
    keywords: ["twenty-nine minutes to eight p.m.", "akşam sekize yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:31.",
      "🇹🇷 Saat 19:31."
    ],
    examples: [],
    related_word_ids: [3171]
  },
  {
    id: "vocab-saat-3172",
    category: "vocabulary",
    title: "twenty-eight minutes to eight p.m. — akşam sekize yirmi sekiz var",
    keywords: ["twenty-eight minutes to eight p.m.", "akşam sekize yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:32.",
      "🇹🇷 Saat 19:32."
    ],
    examples: [],
    related_word_ids: [3172]
  },
  {
    id: "vocab-saat-3173",
    category: "vocabulary",
    title: "twenty-seven minutes to eight p.m. — akşam sekize yirmi yedi var",
    keywords: ["twenty-seven minutes to eight p.m.", "akşam sekize yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:33.",
      "🇹🇷 Saat 19:33."
    ],
    examples: [],
    related_word_ids: [3173]
  },
  {
    id: "vocab-saat-3174",
    category: "vocabulary",
    title: "twenty-six minutes to eight p.m. — akşam sekize yirmi altı var",
    keywords: ["twenty-six minutes to eight p.m.", "akşam sekize yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:34.",
      "🇹🇷 Saat 19:34."
    ],
    examples: [],
    related_word_ids: [3174]
  },
  {
    id: "vocab-saat-3175",
    category: "vocabulary",
    title: "twenty-five to eight p.m. — akşam sekize yirmi beş var",
    keywords: ["twenty-five to eight p.m.", "akşam sekize yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:35.",
      "🇹🇷 Saat 19:35."
    ],
    examples: [],
    related_word_ids: [3175]
  },
  {
    id: "vocab-saat-3176",
    category: "vocabulary",
    title: "twenty-four minutes to eight p.m. — akşam sekize yirmi dört var",
    keywords: ["twenty-four minutes to eight p.m.", "akşam sekize yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:36.",
      "🇹🇷 Saat 19:36."
    ],
    examples: [],
    related_word_ids: [3176]
  },
  {
    id: "vocab-saat-3177",
    category: "vocabulary",
    title: "twenty-three minutes to eight p.m. — akşam sekize yirmi üç var",
    keywords: ["twenty-three minutes to eight p.m.", "akşam sekize yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:37.",
      "🇹🇷 Saat 19:37."
    ],
    examples: [],
    related_word_ids: [3177]
  },
  {
    id: "vocab-saat-3178",
    category: "vocabulary",
    title: "twenty-two minutes to eight p.m. — akşam sekize yirmi iki var",
    keywords: ["twenty-two minutes to eight p.m.", "akşam sekize yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:38.",
      "🇹🇷 Saat 19:38."
    ],
    examples: [],
    related_word_ids: [3178]
  },
  {
    id: "vocab-saat-3179",
    category: "vocabulary",
    title: "twenty-one minutes to eight p.m. — akşam sekize yirmi bir var",
    keywords: ["twenty-one minutes to eight p.m.", "akşam sekize yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:39.",
      "🇹🇷 Saat 19:39."
    ],
    examples: [],
    related_word_ids: [3179]
  },
  {
    id: "vocab-saat-3180",
    category: "vocabulary",
    title: "twenty to eight p.m. — akşam sekize yirmi var",
    keywords: ["twenty to eight p.m.", "akşam sekize yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:40.",
      "🇹🇷 Saat 19:40."
    ],
    examples: [],
    related_word_ids: [3180]
  },
  {
    id: "vocab-saat-3181",
    category: "vocabulary",
    title: "nineteen minutes to eight p.m. — akşam sekize on dokuz var",
    keywords: ["nineteen minutes to eight p.m.", "akşam sekize on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:41.",
      "🇹🇷 Saat 19:41."
    ],
    examples: [],
    related_word_ids: [3181]
  },
  {
    id: "vocab-saat-3182",
    category: "vocabulary",
    title: "eighteen minutes to eight p.m. — akşam sekize on sekiz var",
    keywords: ["eighteen minutes to eight p.m.", "akşam sekize on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:42.",
      "🇹🇷 Saat 19:42."
    ],
    examples: [],
    related_word_ids: [3182]
  },
  {
    id: "vocab-saat-3183",
    category: "vocabulary",
    title: "seventeen minutes to eight p.m. — akşam sekize on yedi var",
    keywords: ["seventeen minutes to eight p.m.", "akşam sekize on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:43.",
      "🇹🇷 Saat 19:43."
    ],
    examples: [],
    related_word_ids: [3183]
  },
  {
    id: "vocab-saat-3184",
    category: "vocabulary",
    title: "sixteen minutes to eight p.m. — akşam sekize on altı var",
    keywords: ["sixteen minutes to eight p.m.", "akşam sekize on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:44.",
      "🇹🇷 Saat 19:44."
    ],
    examples: [],
    related_word_ids: [3184]
  },
  {
    id: "vocab-saat-3185",
    category: "vocabulary",
    title: "a quarter to eight p.m. — akşam sekize çeyrek var",
    keywords: ["a quarter to eight p.m.", "akşam sekize çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:45.",
      "🇹🇷 Saat 19:45."
    ],
    examples: [],
    related_word_ids: [3185]
  },
  {
    id: "vocab-saat-3186",
    category: "vocabulary",
    title: "fourteen minutes to eight p.m. — akşam sekize on dört var",
    keywords: ["fourteen minutes to eight p.m.", "akşam sekize on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:46.",
      "🇹🇷 Saat 19:46."
    ],
    examples: [],
    related_word_ids: [3186]
  },
  {
    id: "vocab-saat-3187",
    category: "vocabulary",
    title: "thirteen minutes to eight p.m. — akşam sekize on üç var",
    keywords: ["thirteen minutes to eight p.m.", "akşam sekize on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:47.",
      "🇹🇷 Saat 19:47."
    ],
    examples: [],
    related_word_ids: [3187]
  },
  {
    id: "vocab-saat-3188",
    category: "vocabulary",
    title: "twelve minutes to eight p.m. — akşam sekize on iki var",
    keywords: ["twelve minutes to eight p.m.", "akşam sekize on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:48.",
      "🇹🇷 Saat 19:48."
    ],
    examples: [],
    related_word_ids: [3188]
  },
  {
    id: "vocab-saat-3189",
    category: "vocabulary",
    title: "eleven minutes to eight p.m. — akşam sekize on bir var",
    keywords: ["eleven minutes to eight p.m.", "akşam sekize on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:49.",
      "🇹🇷 Saat 19:49."
    ],
    examples: [],
    related_word_ids: [3189]
  },
  {
    id: "vocab-saat-3190",
    category: "vocabulary",
    title: "ten to eight p.m. — akşam sekize on var",
    keywords: ["ten to eight p.m.", "akşam sekize on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:50.",
      "🇹🇷 Saat 19:50."
    ],
    examples: [],
    related_word_ids: [3190]
  },
  {
    id: "vocab-saat-3191",
    category: "vocabulary",
    title: "nine minutes to eight p.m. — akşam sekize dokuz var",
    keywords: ["nine minutes to eight p.m.", "akşam sekize dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:51.",
      "🇹🇷 Saat 19:51."
    ],
    examples: [],
    related_word_ids: [3191]
  },
  {
    id: "vocab-saat-3192",
    category: "vocabulary",
    title: "eight minutes to eight p.m. — akşam sekize sekiz var",
    keywords: ["eight minutes to eight p.m.", "akşam sekize sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:52.",
      "🇹🇷 Saat 19:52."
    ],
    examples: [],
    related_word_ids: [3192]
  },
  {
    id: "vocab-saat-3193",
    category: "vocabulary",
    title: "seven minutes to eight p.m. — akşam sekize yedi var",
    keywords: ["seven minutes to eight p.m.", "akşam sekize yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:53.",
      "🇹🇷 Saat 19:53."
    ],
    examples: [],
    related_word_ids: [3193]
  },
  {
    id: "vocab-saat-3194",
    category: "vocabulary",
    title: "six minutes to eight p.m. — akşam sekize altı var",
    keywords: ["six minutes to eight p.m.", "akşam sekize altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:54.",
      "🇹🇷 Saat 19:54."
    ],
    examples: [],
    related_word_ids: [3194]
  },
  {
    id: "vocab-saat-3195",
    category: "vocabulary",
    title: "five to eight p.m. — akşam sekize beş var",
    keywords: ["five to eight p.m.", "akşam sekize beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:55.",
      "🇹🇷 Saat 19:55."
    ],
    examples: [],
    related_word_ids: [3195]
  },
  {
    id: "vocab-saat-3196",
    category: "vocabulary",
    title: "four minutes to eight p.m. — akşam sekize dört var",
    keywords: ["four minutes to eight p.m.", "akşam sekize dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:56.",
      "🇹🇷 Saat 19:56."
    ],
    examples: [],
    related_word_ids: [3196]
  },
  {
    id: "vocab-saat-3197",
    category: "vocabulary",
    title: "three minutes to eight p.m. — akşam sekize üç var",
    keywords: ["three minutes to eight p.m.", "akşam sekize üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:57.",
      "🇹🇷 Saat 19:57."
    ],
    examples: [],
    related_word_ids: [3197]
  },
  {
    id: "vocab-saat-3198",
    category: "vocabulary",
    title: "two minutes to eight p.m. — akşam sekize iki var",
    keywords: ["two minutes to eight p.m.", "akşam sekize iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:58.",
      "🇹🇷 Saat 19:58."
    ],
    examples: [],
    related_word_ids: [3198]
  },
  {
    id: "vocab-saat-3199",
    category: "vocabulary",
    title: "one minute to eight p.m. — akşam sekize bir var",
    keywords: ["one minute to eight p.m.", "akşam sekize bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 19:59.",
      "🇹🇷 Saat 19:59."
    ],
    examples: [],
    related_word_ids: [3199]
  },
  {
    id: "vocab-saat-3200",
    category: "vocabulary",
    title: "eight o'clock p.m. — akşam sekiz",
    keywords: ["eight o'clock p.m.", "akşam sekiz", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:00.",
      "🇹🇷 Saat 20:00."
    ],
    examples: [],
    related_word_ids: [3200]
  },
  {
    id: "vocab-saat-3201",
    category: "vocabulary",
    title: "one minute past eight p.m. — akşam sekizi bir geçiyor",
    keywords: ["one minute past eight p.m.", "akşam sekizi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:01.",
      "🇹🇷 Saat 20:01."
    ],
    examples: [],
    related_word_ids: [3201]
  },
  {
    id: "vocab-saat-3202",
    category: "vocabulary",
    title: "two minutes past eight p.m. — akşam sekizi iki geçiyor",
    keywords: ["two minutes past eight p.m.", "akşam sekizi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:02.",
      "🇹🇷 Saat 20:02."
    ],
    examples: [],
    related_word_ids: [3202]
  },
  {
    id: "vocab-saat-3203",
    category: "vocabulary",
    title: "three minutes past eight p.m. — akşam sekizi üç geçiyor",
    keywords: ["three minutes past eight p.m.", "akşam sekizi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:03.",
      "🇹🇷 Saat 20:03."
    ],
    examples: [],
    related_word_ids: [3203]
  },
  {
    id: "vocab-saat-3204",
    category: "vocabulary",
    title: "four minutes past eight p.m. — akşam sekizi dört geçiyor",
    keywords: ["four minutes past eight p.m.", "akşam sekizi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:04.",
      "🇹🇷 Saat 20:04."
    ],
    examples: [],
    related_word_ids: [3204]
  },
  {
    id: "vocab-saat-3205",
    category: "vocabulary",
    title: "five past eight p.m. — akşam sekizi beş geçiyor",
    keywords: ["five past eight p.m.", "akşam sekizi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:05.",
      "🇹🇷 Saat 20:05."
    ],
    examples: [],
    related_word_ids: [3205]
  },
  {
    id: "vocab-saat-3206",
    category: "vocabulary",
    title: "six minutes past eight p.m. — akşam sekizi altı geçiyor",
    keywords: ["six minutes past eight p.m.", "akşam sekizi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:06.",
      "🇹🇷 Saat 20:06."
    ],
    examples: [],
    related_word_ids: [3206]
  },
  {
    id: "vocab-saat-3207",
    category: "vocabulary",
    title: "seven minutes past eight p.m. — akşam sekizi yedi geçiyor",
    keywords: ["seven minutes past eight p.m.", "akşam sekizi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:07.",
      "🇹🇷 Saat 20:07."
    ],
    examples: [],
    related_word_ids: [3207]
  },
  {
    id: "vocab-saat-3208",
    category: "vocabulary",
    title: "eight minutes past eight p.m. — akşam sekizi sekiz geçiyor",
    keywords: ["eight minutes past eight p.m.", "akşam sekizi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:08.",
      "🇹🇷 Saat 20:08."
    ],
    examples: [],
    related_word_ids: [3208]
  },
  {
    id: "vocab-saat-3209",
    category: "vocabulary",
    title: "nine minutes past eight p.m. — akşam sekizi dokuz geçiyor",
    keywords: ["nine minutes past eight p.m.", "akşam sekizi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:09.",
      "🇹🇷 Saat 20:09."
    ],
    examples: [],
    related_word_ids: [3209]
  },
  {
    id: "vocab-saat-3210",
    category: "vocabulary",
    title: "ten past eight p.m. — akşam sekizi on geçiyor",
    keywords: ["ten past eight p.m.", "akşam sekizi on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:10.",
      "🇹🇷 Saat 20:10."
    ],
    examples: [],
    related_word_ids: [3210]
  },
  {
    id: "vocab-saat-3211",
    category: "vocabulary",
    title: "eleven minutes past eight p.m. — akşam sekizi on bir geçiyor",
    keywords: ["eleven minutes past eight p.m.", "akşam sekizi on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:11.",
      "🇹🇷 Saat 20:11."
    ],
    examples: [],
    related_word_ids: [3211]
  },
  {
    id: "vocab-saat-3212",
    category: "vocabulary",
    title: "twelve minutes past eight p.m. — akşam sekizi on iki geçiyor",
    keywords: ["twelve minutes past eight p.m.", "akşam sekizi on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:12.",
      "🇹🇷 Saat 20:12."
    ],
    examples: [],
    related_word_ids: [3212]
  },
  {
    id: "vocab-saat-3213",
    category: "vocabulary",
    title: "thirteen minutes past eight p.m. — akşam sekizi on üç geçiyor",
    keywords: ["thirteen minutes past eight p.m.", "akşam sekizi on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:13.",
      "🇹🇷 Saat 20:13."
    ],
    examples: [],
    related_word_ids: [3213]
  },
  {
    id: "vocab-saat-3214",
    category: "vocabulary",
    title: "fourteen minutes past eight p.m. — akşam sekizi on dört geçiyor",
    keywords: ["fourteen minutes past eight p.m.", "akşam sekizi on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:14.",
      "🇹🇷 Saat 20:14."
    ],
    examples: [],
    related_word_ids: [3214]
  },
  {
    id: "vocab-saat-3215",
    category: "vocabulary",
    title: "a quarter past eight p.m. — akşam sekizi çeyrek geçiyor",
    keywords: ["a quarter past eight p.m.", "akşam sekizi çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:15.",
      "🇹🇷 Saat 20:15."
    ],
    examples: [],
    related_word_ids: [3215]
  },
  {
    id: "vocab-saat-3216",
    category: "vocabulary",
    title: "sixteen minutes past eight p.m. — akşam sekizi on altı geçiyor",
    keywords: ["sixteen minutes past eight p.m.", "akşam sekizi on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:16.",
      "🇹🇷 Saat 20:16."
    ],
    examples: [],
    related_word_ids: [3216]
  },
  {
    id: "vocab-saat-3217",
    category: "vocabulary",
    title: "seventeen minutes past eight p.m. — akşam sekizi on yedi geçiyor",
    keywords: ["seventeen minutes past eight p.m.", "akşam sekizi on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:17.",
      "🇹🇷 Saat 20:17."
    ],
    examples: [],
    related_word_ids: [3217]
  },
  {
    id: "vocab-saat-3218",
    category: "vocabulary",
    title: "eighteen minutes past eight p.m. — akşam sekizi on sekiz geçiyor",
    keywords: ["eighteen minutes past eight p.m.", "akşam sekizi on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:18.",
      "🇹🇷 Saat 20:18."
    ],
    examples: [],
    related_word_ids: [3218]
  },
  {
    id: "vocab-saat-3219",
    category: "vocabulary",
    title: "nineteen minutes past eight p.m. — akşam sekizi on dokuz geçiyor",
    keywords: ["nineteen minutes past eight p.m.", "akşam sekizi on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:19.",
      "🇹🇷 Saat 20:19."
    ],
    examples: [],
    related_word_ids: [3219]
  },
  {
    id: "vocab-saat-3220",
    category: "vocabulary",
    title: "twenty past eight p.m. — akşam sekizi yirmi geçiyor",
    keywords: ["twenty past eight p.m.", "akşam sekizi yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:20.",
      "🇹🇷 Saat 20:20."
    ],
    examples: [],
    related_word_ids: [3220]
  },
  {
    id: "vocab-saat-3221",
    category: "vocabulary",
    title: "twenty-one minutes past eight p.m. — akşam sekizi yirmi bir geçiyor",
    keywords: ["twenty-one minutes past eight p.m.", "akşam sekizi yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:21.",
      "🇹🇷 Saat 20:21."
    ],
    examples: [],
    related_word_ids: [3221]
  },
  {
    id: "vocab-saat-3222",
    category: "vocabulary",
    title: "twenty-two minutes past eight p.m. — akşam sekizi yirmi iki geçiyor",
    keywords: ["twenty-two minutes past eight p.m.", "akşam sekizi yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:22.",
      "🇹🇷 Saat 20:22."
    ],
    examples: [],
    related_word_ids: [3222]
  },
  {
    id: "vocab-saat-3223",
    category: "vocabulary",
    title: "twenty-three minutes past eight p.m. — akşam sekizi yirmi üç geçiyor",
    keywords: ["twenty-three minutes past eight p.m.", "akşam sekizi yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:23.",
      "🇹🇷 Saat 20:23."
    ],
    examples: [],
    related_word_ids: [3223]
  },
  {
    id: "vocab-saat-3224",
    category: "vocabulary",
    title: "twenty-four minutes past eight p.m. — akşam sekizi yirmi dört geçiyor",
    keywords: ["twenty-four minutes past eight p.m.", "akşam sekizi yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:24.",
      "🇹🇷 Saat 20:24."
    ],
    examples: [],
    related_word_ids: [3224]
  },
  {
    id: "vocab-saat-3225",
    category: "vocabulary",
    title: "twenty-five past eight p.m. — akşam sekizi yirmi beş geçiyor",
    keywords: ["twenty-five past eight p.m.", "akşam sekizi yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:25.",
      "🇹🇷 Saat 20:25."
    ],
    examples: [],
    related_word_ids: [3225]
  },
  {
    id: "vocab-saat-3226",
    category: "vocabulary",
    title: "twenty-six minutes past eight p.m. — akşam sekizi yirmi altı geçiyor",
    keywords: ["twenty-six minutes past eight p.m.", "akşam sekizi yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:26.",
      "🇹🇷 Saat 20:26."
    ],
    examples: [],
    related_word_ids: [3226]
  },
  {
    id: "vocab-saat-3227",
    category: "vocabulary",
    title: "twenty-seven minutes past eight p.m. — akşam sekizi yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past eight p.m.", "akşam sekizi yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:27.",
      "🇹🇷 Saat 20:27."
    ],
    examples: [],
    related_word_ids: [3227]
  },
  {
    id: "vocab-saat-3228",
    category: "vocabulary",
    title: "twenty-eight minutes past eight p.m. — akşam sekizi yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past eight p.m.", "akşam sekizi yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:28.",
      "🇹🇷 Saat 20:28."
    ],
    examples: [],
    related_word_ids: [3228]
  },
  {
    id: "vocab-saat-3229",
    category: "vocabulary",
    title: "twenty-nine minutes past eight p.m. — akşam sekizi yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past eight p.m.", "akşam sekizi yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:29.",
      "🇹🇷 Saat 20:29."
    ],
    examples: [],
    related_word_ids: [3229]
  },
  {
    id: "vocab-saat-3230",
    category: "vocabulary",
    title: "half past eight p.m. — akşam sekiz buçuk",
    keywords: ["half past eight p.m.", "akşam sekiz buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:30.",
      "🇹🇷 Saat 20:30."
    ],
    examples: [],
    related_word_ids: [3230]
  },
  {
    id: "vocab-saat-3231",
    category: "vocabulary",
    title: "twenty-nine minutes to nine p.m. — akşam dokuza yirmi dokuz var",
    keywords: ["twenty-nine minutes to nine p.m.", "akşam dokuza yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:31.",
      "🇹🇷 Saat 20:31."
    ],
    examples: [],
    related_word_ids: [3231]
  },
  {
    id: "vocab-saat-3232",
    category: "vocabulary",
    title: "twenty-eight minutes to nine p.m. — akşam dokuza yirmi sekiz var",
    keywords: ["twenty-eight minutes to nine p.m.", "akşam dokuza yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:32.",
      "🇹🇷 Saat 20:32."
    ],
    examples: [],
    related_word_ids: [3232]
  },
  {
    id: "vocab-saat-3233",
    category: "vocabulary",
    title: "twenty-seven minutes to nine p.m. — akşam dokuza yirmi yedi var",
    keywords: ["twenty-seven minutes to nine p.m.", "akşam dokuza yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:33.",
      "🇹🇷 Saat 20:33."
    ],
    examples: [],
    related_word_ids: [3233]
  },
  {
    id: "vocab-saat-3234",
    category: "vocabulary",
    title: "twenty-six minutes to nine p.m. — akşam dokuza yirmi altı var",
    keywords: ["twenty-six minutes to nine p.m.", "akşam dokuza yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:34.",
      "🇹🇷 Saat 20:34."
    ],
    examples: [],
    related_word_ids: [3234]
  },
  {
    id: "vocab-saat-3235",
    category: "vocabulary",
    title: "twenty-five to nine p.m. — akşam dokuza yirmi beş var",
    keywords: ["twenty-five to nine p.m.", "akşam dokuza yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:35.",
      "🇹🇷 Saat 20:35."
    ],
    examples: [],
    related_word_ids: [3235]
  },
  {
    id: "vocab-saat-3236",
    category: "vocabulary",
    title: "twenty-four minutes to nine p.m. — akşam dokuza yirmi dört var",
    keywords: ["twenty-four minutes to nine p.m.", "akşam dokuza yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:36.",
      "🇹🇷 Saat 20:36."
    ],
    examples: [],
    related_word_ids: [3236]
  },
  {
    id: "vocab-saat-3237",
    category: "vocabulary",
    title: "twenty-three minutes to nine p.m. — akşam dokuza yirmi üç var",
    keywords: ["twenty-three minutes to nine p.m.", "akşam dokuza yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:37.",
      "🇹🇷 Saat 20:37."
    ],
    examples: [],
    related_word_ids: [3237]
  },
  {
    id: "vocab-saat-3238",
    category: "vocabulary",
    title: "twenty-two minutes to nine p.m. — akşam dokuza yirmi iki var",
    keywords: ["twenty-two minutes to nine p.m.", "akşam dokuza yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:38.",
      "🇹🇷 Saat 20:38."
    ],
    examples: [],
    related_word_ids: [3238]
  },
  {
    id: "vocab-saat-3239",
    category: "vocabulary",
    title: "twenty-one minutes to nine p.m. — akşam dokuza yirmi bir var",
    keywords: ["twenty-one minutes to nine p.m.", "akşam dokuza yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:39.",
      "🇹🇷 Saat 20:39."
    ],
    examples: [],
    related_word_ids: [3239]
  },
  {
    id: "vocab-saat-3240",
    category: "vocabulary",
    title: "twenty to nine p.m. — akşam dokuza yirmi var",
    keywords: ["twenty to nine p.m.", "akşam dokuza yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:40.",
      "🇹🇷 Saat 20:40."
    ],
    examples: [],
    related_word_ids: [3240]
  },
  {
    id: "vocab-saat-3241",
    category: "vocabulary",
    title: "nineteen minutes to nine p.m. — akşam dokuza on dokuz var",
    keywords: ["nineteen minutes to nine p.m.", "akşam dokuza on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:41.",
      "🇹🇷 Saat 20:41."
    ],
    examples: [],
    related_word_ids: [3241]
  },
  {
    id: "vocab-saat-3242",
    category: "vocabulary",
    title: "eighteen minutes to nine p.m. — akşam dokuza on sekiz var",
    keywords: ["eighteen minutes to nine p.m.", "akşam dokuza on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:42.",
      "🇹🇷 Saat 20:42."
    ],
    examples: [],
    related_word_ids: [3242]
  },
  {
    id: "vocab-saat-3243",
    category: "vocabulary",
    title: "seventeen minutes to nine p.m. — akşam dokuza on yedi var",
    keywords: ["seventeen minutes to nine p.m.", "akşam dokuza on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:43.",
      "🇹🇷 Saat 20:43."
    ],
    examples: [],
    related_word_ids: [3243]
  },
  {
    id: "vocab-saat-3244",
    category: "vocabulary",
    title: "sixteen minutes to nine p.m. — akşam dokuza on altı var",
    keywords: ["sixteen minutes to nine p.m.", "akşam dokuza on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:44.",
      "🇹🇷 Saat 20:44."
    ],
    examples: [],
    related_word_ids: [3244]
  },
  {
    id: "vocab-saat-3245",
    category: "vocabulary",
    title: "a quarter to nine p.m. — akşam dokuza çeyrek var",
    keywords: ["a quarter to nine p.m.", "akşam dokuza çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:45.",
      "🇹🇷 Saat 20:45."
    ],
    examples: [],
    related_word_ids: [3245]
  },
  {
    id: "vocab-saat-3246",
    category: "vocabulary",
    title: "fourteen minutes to nine p.m. — akşam dokuza on dört var",
    keywords: ["fourteen minutes to nine p.m.", "akşam dokuza on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:46.",
      "🇹🇷 Saat 20:46."
    ],
    examples: [],
    related_word_ids: [3246]
  },
  {
    id: "vocab-saat-3247",
    category: "vocabulary",
    title: "thirteen minutes to nine p.m. — akşam dokuza on üç var",
    keywords: ["thirteen minutes to nine p.m.", "akşam dokuza on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:47.",
      "🇹🇷 Saat 20:47."
    ],
    examples: [],
    related_word_ids: [3247]
  },
  {
    id: "vocab-saat-3248",
    category: "vocabulary",
    title: "twelve minutes to nine p.m. — akşam dokuza on iki var",
    keywords: ["twelve minutes to nine p.m.", "akşam dokuza on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:48.",
      "🇹🇷 Saat 20:48."
    ],
    examples: [],
    related_word_ids: [3248]
  },
  {
    id: "vocab-saat-3249",
    category: "vocabulary",
    title: "eleven minutes to nine p.m. — akşam dokuza on bir var",
    keywords: ["eleven minutes to nine p.m.", "akşam dokuza on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:49.",
      "🇹🇷 Saat 20:49."
    ],
    examples: [],
    related_word_ids: [3249]
  },
  {
    id: "vocab-saat-3250",
    category: "vocabulary",
    title: "ten to nine p.m. — akşam dokuza on var",
    keywords: ["ten to nine p.m.", "akşam dokuza on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:50.",
      "🇹🇷 Saat 20:50."
    ],
    examples: [],
    related_word_ids: [3250]
  },
  {
    id: "vocab-saat-3251",
    category: "vocabulary",
    title: "nine minutes to nine p.m. — akşam dokuza dokuz var",
    keywords: ["nine minutes to nine p.m.", "akşam dokuza dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:51.",
      "🇹🇷 Saat 20:51."
    ],
    examples: [],
    related_word_ids: [3251]
  },
  {
    id: "vocab-saat-3252",
    category: "vocabulary",
    title: "eight minutes to nine p.m. — akşam dokuza sekiz var",
    keywords: ["eight minutes to nine p.m.", "akşam dokuza sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:52.",
      "🇹🇷 Saat 20:52."
    ],
    examples: [],
    related_word_ids: [3252]
  },
  {
    id: "vocab-saat-3253",
    category: "vocabulary",
    title: "seven minutes to nine p.m. — akşam dokuza yedi var",
    keywords: ["seven minutes to nine p.m.", "akşam dokuza yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:53.",
      "🇹🇷 Saat 20:53."
    ],
    examples: [],
    related_word_ids: [3253]
  },
  {
    id: "vocab-saat-3254",
    category: "vocabulary",
    title: "six minutes to nine p.m. — akşam dokuza altı var",
    keywords: ["six minutes to nine p.m.", "akşam dokuza altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:54.",
      "🇹🇷 Saat 20:54."
    ],
    examples: [],
    related_word_ids: [3254]
  },
  {
    id: "vocab-saat-3255",
    category: "vocabulary",
    title: "five to nine p.m. — akşam dokuza beş var",
    keywords: ["five to nine p.m.", "akşam dokuza beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:55.",
      "🇹🇷 Saat 20:55."
    ],
    examples: [],
    related_word_ids: [3255]
  },
  {
    id: "vocab-saat-3256",
    category: "vocabulary",
    title: "four minutes to nine p.m. — akşam dokuza dört var",
    keywords: ["four minutes to nine p.m.", "akşam dokuza dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:56.",
      "🇹🇷 Saat 20:56."
    ],
    examples: [],
    related_word_ids: [3256]
  },
  {
    id: "vocab-saat-3257",
    category: "vocabulary",
    title: "three minutes to nine p.m. — akşam dokuza üç var",
    keywords: ["three minutes to nine p.m.", "akşam dokuza üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:57.",
      "🇹🇷 Saat 20:57."
    ],
    examples: [],
    related_word_ids: [3257]
  },
  {
    id: "vocab-saat-3258",
    category: "vocabulary",
    title: "two minutes to nine p.m. — akşam dokuza iki var",
    keywords: ["two minutes to nine p.m.", "akşam dokuza iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:58.",
      "🇹🇷 Saat 20:58."
    ],
    examples: [],
    related_word_ids: [3258]
  },
  {
    id: "vocab-saat-3259",
    category: "vocabulary",
    title: "one minute to nine p.m. — akşam dokuza bir var",
    keywords: ["one minute to nine p.m.", "akşam dokuza bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 20:59.",
      "🇹🇷 Saat 20:59."
    ],
    examples: [],
    related_word_ids: [3259]
  },
  {
    id: "vocab-saat-3260",
    category: "vocabulary",
    title: "nine o'clock p.m. — gece dokuz",
    keywords: ["nine o'clock p.m.", "gece dokuz", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:00.",
      "🇹🇷 Saat 21:00."
    ],
    examples: [],
    related_word_ids: [3260]
  },
  {
    id: "vocab-saat-3261",
    category: "vocabulary",
    title: "one minute past nine p.m. — gece dokuzu bir geçiyor",
    keywords: ["one minute past nine p.m.", "gece dokuzu bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:01.",
      "🇹🇷 Saat 21:01."
    ],
    examples: [],
    related_word_ids: [3261]
  },
  {
    id: "vocab-saat-3262",
    category: "vocabulary",
    title: "two minutes past nine p.m. — gece dokuzu iki geçiyor",
    keywords: ["two minutes past nine p.m.", "gece dokuzu iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:02.",
      "🇹🇷 Saat 21:02."
    ],
    examples: [],
    related_word_ids: [3262]
  },
  {
    id: "vocab-saat-3263",
    category: "vocabulary",
    title: "three minutes past nine p.m. — gece dokuzu üç geçiyor",
    keywords: ["three minutes past nine p.m.", "gece dokuzu üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:03.",
      "🇹🇷 Saat 21:03."
    ],
    examples: [],
    related_word_ids: [3263]
  },
  {
    id: "vocab-saat-3264",
    category: "vocabulary",
    title: "four minutes past nine p.m. — gece dokuzu dört geçiyor",
    keywords: ["four minutes past nine p.m.", "gece dokuzu dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:04.",
      "🇹🇷 Saat 21:04."
    ],
    examples: [],
    related_word_ids: [3264]
  },
  {
    id: "vocab-saat-3265",
    category: "vocabulary",
    title: "five past nine p.m. — gece dokuzu beş geçiyor",
    keywords: ["five past nine p.m.", "gece dokuzu beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:05.",
      "🇹🇷 Saat 21:05."
    ],
    examples: [],
    related_word_ids: [3265]
  },
  {
    id: "vocab-saat-3266",
    category: "vocabulary",
    title: "six minutes past nine p.m. — gece dokuzu altı geçiyor",
    keywords: ["six minutes past nine p.m.", "gece dokuzu altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:06.",
      "🇹🇷 Saat 21:06."
    ],
    examples: [],
    related_word_ids: [3266]
  },
  {
    id: "vocab-saat-3267",
    category: "vocabulary",
    title: "seven minutes past nine p.m. — gece dokuzu yedi geçiyor",
    keywords: ["seven minutes past nine p.m.", "gece dokuzu yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:07.",
      "🇹🇷 Saat 21:07."
    ],
    examples: [],
    related_word_ids: [3267]
  },
  {
    id: "vocab-saat-3268",
    category: "vocabulary",
    title: "eight minutes past nine p.m. — gece dokuzu sekiz geçiyor",
    keywords: ["eight minutes past nine p.m.", "gece dokuzu sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:08.",
      "🇹🇷 Saat 21:08."
    ],
    examples: [],
    related_word_ids: [3268]
  },
  {
    id: "vocab-saat-3269",
    category: "vocabulary",
    title: "nine minutes past nine p.m. — gece dokuzu dokuz geçiyor",
    keywords: ["nine minutes past nine p.m.", "gece dokuzu dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:09.",
      "🇹🇷 Saat 21:09."
    ],
    examples: [],
    related_word_ids: [3269]
  },
  {
    id: "vocab-saat-3270",
    category: "vocabulary",
    title: "ten past nine p.m. — gece dokuzu on geçiyor",
    keywords: ["ten past nine p.m.", "gece dokuzu on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:10.",
      "🇹🇷 Saat 21:10."
    ],
    examples: [],
    related_word_ids: [3270]
  },
  {
    id: "vocab-saat-3271",
    category: "vocabulary",
    title: "eleven minutes past nine p.m. — gece dokuzu on bir geçiyor",
    keywords: ["eleven minutes past nine p.m.", "gece dokuzu on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:11.",
      "🇹🇷 Saat 21:11."
    ],
    examples: [],
    related_word_ids: [3271]
  },
  {
    id: "vocab-saat-3272",
    category: "vocabulary",
    title: "twelve minutes past nine p.m. — gece dokuzu on iki geçiyor",
    keywords: ["twelve minutes past nine p.m.", "gece dokuzu on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:12.",
      "🇹🇷 Saat 21:12."
    ],
    examples: [],
    related_word_ids: [3272]
  },
  {
    id: "vocab-saat-3273",
    category: "vocabulary",
    title: "thirteen minutes past nine p.m. — gece dokuzu on üç geçiyor",
    keywords: ["thirteen minutes past nine p.m.", "gece dokuzu on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:13.",
      "🇹🇷 Saat 21:13."
    ],
    examples: [],
    related_word_ids: [3273]
  },
  {
    id: "vocab-saat-3274",
    category: "vocabulary",
    title: "fourteen minutes past nine p.m. — gece dokuzu on dört geçiyor",
    keywords: ["fourteen minutes past nine p.m.", "gece dokuzu on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:14.",
      "🇹🇷 Saat 21:14."
    ],
    examples: [],
    related_word_ids: [3274]
  },
  {
    id: "vocab-saat-3275",
    category: "vocabulary",
    title: "a quarter past nine p.m. — gece dokuzu çeyrek geçiyor",
    keywords: ["a quarter past nine p.m.", "gece dokuzu çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:15.",
      "🇹🇷 Saat 21:15."
    ],
    examples: [],
    related_word_ids: [3275]
  },
  {
    id: "vocab-saat-3276",
    category: "vocabulary",
    title: "sixteen minutes past nine p.m. — gece dokuzu on altı geçiyor",
    keywords: ["sixteen minutes past nine p.m.", "gece dokuzu on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:16.",
      "🇹🇷 Saat 21:16."
    ],
    examples: [],
    related_word_ids: [3276]
  },
  {
    id: "vocab-saat-3277",
    category: "vocabulary",
    title: "seventeen minutes past nine p.m. — gece dokuzu on yedi geçiyor",
    keywords: ["seventeen minutes past nine p.m.", "gece dokuzu on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:17.",
      "🇹🇷 Saat 21:17."
    ],
    examples: [],
    related_word_ids: [3277]
  },
  {
    id: "vocab-saat-3278",
    category: "vocabulary",
    title: "eighteen minutes past nine p.m. — gece dokuzu on sekiz geçiyor",
    keywords: ["eighteen minutes past nine p.m.", "gece dokuzu on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:18.",
      "🇹🇷 Saat 21:18."
    ],
    examples: [],
    related_word_ids: [3278]
  },
  {
    id: "vocab-saat-3279",
    category: "vocabulary",
    title: "nineteen minutes past nine p.m. — gece dokuzu on dokuz geçiyor",
    keywords: ["nineteen minutes past nine p.m.", "gece dokuzu on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:19.",
      "🇹🇷 Saat 21:19."
    ],
    examples: [],
    related_word_ids: [3279]
  },
  {
    id: "vocab-saat-3280",
    category: "vocabulary",
    title: "twenty past nine p.m. — gece dokuzu yirmi geçiyor",
    keywords: ["twenty past nine p.m.", "gece dokuzu yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:20.",
      "🇹🇷 Saat 21:20."
    ],
    examples: [],
    related_word_ids: [3280]
  },
  {
    id: "vocab-saat-3281",
    category: "vocabulary",
    title: "twenty-one minutes past nine p.m. — gece dokuzu yirmi bir geçiyor",
    keywords: ["twenty-one minutes past nine p.m.", "gece dokuzu yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:21.",
      "🇹🇷 Saat 21:21."
    ],
    examples: [],
    related_word_ids: [3281]
  },
  {
    id: "vocab-saat-3282",
    category: "vocabulary",
    title: "twenty-two minutes past nine p.m. — gece dokuzu yirmi iki geçiyor",
    keywords: ["twenty-two minutes past nine p.m.", "gece dokuzu yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:22.",
      "🇹🇷 Saat 21:22."
    ],
    examples: [],
    related_word_ids: [3282]
  },
  {
    id: "vocab-saat-3283",
    category: "vocabulary",
    title: "twenty-three minutes past nine p.m. — gece dokuzu yirmi üç geçiyor",
    keywords: ["twenty-three minutes past nine p.m.", "gece dokuzu yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:23.",
      "🇹🇷 Saat 21:23."
    ],
    examples: [],
    related_word_ids: [3283]
  },
  {
    id: "vocab-saat-3284",
    category: "vocabulary",
    title: "twenty-four minutes past nine p.m. — gece dokuzu yirmi dört geçiyor",
    keywords: ["twenty-four minutes past nine p.m.", "gece dokuzu yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:24.",
      "🇹🇷 Saat 21:24."
    ],
    examples: [],
    related_word_ids: [3284]
  },
  {
    id: "vocab-saat-3285",
    category: "vocabulary",
    title: "twenty-five past nine p.m. — gece dokuzu yirmi beş geçiyor",
    keywords: ["twenty-five past nine p.m.", "gece dokuzu yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:25.",
      "🇹🇷 Saat 21:25."
    ],
    examples: [],
    related_word_ids: [3285]
  },
  {
    id: "vocab-saat-3286",
    category: "vocabulary",
    title: "twenty-six minutes past nine p.m. — gece dokuzu yirmi altı geçiyor",
    keywords: ["twenty-six minutes past nine p.m.", "gece dokuzu yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:26.",
      "🇹🇷 Saat 21:26."
    ],
    examples: [],
    related_word_ids: [3286]
  },
  {
    id: "vocab-saat-3287",
    category: "vocabulary",
    title: "twenty-seven minutes past nine p.m. — gece dokuzu yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past nine p.m.", "gece dokuzu yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:27.",
      "🇹🇷 Saat 21:27."
    ],
    examples: [],
    related_word_ids: [3287]
  },
  {
    id: "vocab-saat-3288",
    category: "vocabulary",
    title: "twenty-eight minutes past nine p.m. — gece dokuzu yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past nine p.m.", "gece dokuzu yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:28.",
      "🇹🇷 Saat 21:28."
    ],
    examples: [],
    related_word_ids: [3288]
  },
  {
    id: "vocab-saat-3289",
    category: "vocabulary",
    title: "twenty-nine minutes past nine p.m. — gece dokuzu yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past nine p.m.", "gece dokuzu yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:29.",
      "🇹🇷 Saat 21:29."
    ],
    examples: [],
    related_word_ids: [3289]
  },
  {
    id: "vocab-saat-3290",
    category: "vocabulary",
    title: "half past nine p.m. — gece dokuz buçuk",
    keywords: ["half past nine p.m.", "gece dokuz buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:30.",
      "🇹🇷 Saat 21:30."
    ],
    examples: [],
    related_word_ids: [3290]
  },
  {
    id: "vocab-saat-3291",
    category: "vocabulary",
    title: "twenty-nine minutes to ten p.m. — gece ona yirmi dokuz var",
    keywords: ["twenty-nine minutes to ten p.m.", "gece ona yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:31.",
      "🇹🇷 Saat 21:31."
    ],
    examples: [],
    related_word_ids: [3291]
  },
  {
    id: "vocab-saat-3292",
    category: "vocabulary",
    title: "twenty-eight minutes to ten p.m. — gece ona yirmi sekiz var",
    keywords: ["twenty-eight minutes to ten p.m.", "gece ona yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:32.",
      "🇹🇷 Saat 21:32."
    ],
    examples: [],
    related_word_ids: [3292]
  },
  {
    id: "vocab-saat-3293",
    category: "vocabulary",
    title: "twenty-seven minutes to ten p.m. — gece ona yirmi yedi var",
    keywords: ["twenty-seven minutes to ten p.m.", "gece ona yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:33.",
      "🇹🇷 Saat 21:33."
    ],
    examples: [],
    related_word_ids: [3293]
  },
  {
    id: "vocab-saat-3294",
    category: "vocabulary",
    title: "twenty-six minutes to ten p.m. — gece ona yirmi altı var",
    keywords: ["twenty-six minutes to ten p.m.", "gece ona yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:34.",
      "🇹🇷 Saat 21:34."
    ],
    examples: [],
    related_word_ids: [3294]
  },
  {
    id: "vocab-saat-3295",
    category: "vocabulary",
    title: "twenty-five to ten p.m. — gece ona yirmi beş var",
    keywords: ["twenty-five to ten p.m.", "gece ona yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:35.",
      "🇹🇷 Saat 21:35."
    ],
    examples: [],
    related_word_ids: [3295]
  },
  {
    id: "vocab-saat-3296",
    category: "vocabulary",
    title: "twenty-four minutes to ten p.m. — gece ona yirmi dört var",
    keywords: ["twenty-four minutes to ten p.m.", "gece ona yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:36.",
      "🇹🇷 Saat 21:36."
    ],
    examples: [],
    related_word_ids: [3296]
  },
  {
    id: "vocab-saat-3297",
    category: "vocabulary",
    title: "twenty-three minutes to ten p.m. — gece ona yirmi üç var",
    keywords: ["twenty-three minutes to ten p.m.", "gece ona yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:37.",
      "🇹🇷 Saat 21:37."
    ],
    examples: [],
    related_word_ids: [3297]
  },
  {
    id: "vocab-saat-3298",
    category: "vocabulary",
    title: "twenty-two minutes to ten p.m. — gece ona yirmi iki var",
    keywords: ["twenty-two minutes to ten p.m.", "gece ona yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:38.",
      "🇹🇷 Saat 21:38."
    ],
    examples: [],
    related_word_ids: [3298]
  },
  {
    id: "vocab-saat-3299",
    category: "vocabulary",
    title: "twenty-one minutes to ten p.m. — gece ona yirmi bir var",
    keywords: ["twenty-one minutes to ten p.m.", "gece ona yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:39.",
      "🇹🇷 Saat 21:39."
    ],
    examples: [],
    related_word_ids: [3299]
  },
  {
    id: "vocab-saat-3300",
    category: "vocabulary",
    title: "twenty to ten p.m. — gece ona yirmi var",
    keywords: ["twenty to ten p.m.", "gece ona yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:40.",
      "🇹🇷 Saat 21:40."
    ],
    examples: [],
    related_word_ids: [3300]
  },
  {
    id: "vocab-saat-3301",
    category: "vocabulary",
    title: "nineteen minutes to ten p.m. — gece ona on dokuz var",
    keywords: ["nineteen minutes to ten p.m.", "gece ona on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:41.",
      "🇹🇷 Saat 21:41."
    ],
    examples: [],
    related_word_ids: [3301]
  },
  {
    id: "vocab-saat-3302",
    category: "vocabulary",
    title: "eighteen minutes to ten p.m. — gece ona on sekiz var",
    keywords: ["eighteen minutes to ten p.m.", "gece ona on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:42.",
      "🇹🇷 Saat 21:42."
    ],
    examples: [],
    related_word_ids: [3302]
  },
  {
    id: "vocab-saat-3303",
    category: "vocabulary",
    title: "seventeen minutes to ten p.m. — gece ona on yedi var",
    keywords: ["seventeen minutes to ten p.m.", "gece ona on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:43.",
      "🇹🇷 Saat 21:43."
    ],
    examples: [],
    related_word_ids: [3303]
  },
  {
    id: "vocab-saat-3304",
    category: "vocabulary",
    title: "sixteen minutes to ten p.m. — gece ona on altı var",
    keywords: ["sixteen minutes to ten p.m.", "gece ona on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:44.",
      "🇹🇷 Saat 21:44."
    ],
    examples: [],
    related_word_ids: [3304]
  },
  {
    id: "vocab-saat-3305",
    category: "vocabulary",
    title: "a quarter to ten p.m. — gece ona çeyrek var",
    keywords: ["a quarter to ten p.m.", "gece ona çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:45.",
      "🇹🇷 Saat 21:45."
    ],
    examples: [],
    related_word_ids: [3305]
  },
  {
    id: "vocab-saat-3306",
    category: "vocabulary",
    title: "fourteen minutes to ten p.m. — gece ona on dört var",
    keywords: ["fourteen minutes to ten p.m.", "gece ona on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:46.",
      "🇹🇷 Saat 21:46."
    ],
    examples: [],
    related_word_ids: [3306]
  },
  {
    id: "vocab-saat-3307",
    category: "vocabulary",
    title: "thirteen minutes to ten p.m. — gece ona on üç var",
    keywords: ["thirteen minutes to ten p.m.", "gece ona on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:47.",
      "🇹🇷 Saat 21:47."
    ],
    examples: [],
    related_word_ids: [3307]
  },
  {
    id: "vocab-saat-3308",
    category: "vocabulary",
    title: "twelve minutes to ten p.m. — gece ona on iki var",
    keywords: ["twelve minutes to ten p.m.", "gece ona on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:48.",
      "🇹🇷 Saat 21:48."
    ],
    examples: [],
    related_word_ids: [3308]
  },
  {
    id: "vocab-saat-3309",
    category: "vocabulary",
    title: "eleven minutes to ten p.m. — gece ona on bir var",
    keywords: ["eleven minutes to ten p.m.", "gece ona on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:49.",
      "🇹🇷 Saat 21:49."
    ],
    examples: [],
    related_word_ids: [3309]
  },
  {
    id: "vocab-saat-3310",
    category: "vocabulary",
    title: "ten to ten p.m. — gece ona on var",
    keywords: ["ten to ten p.m.", "gece ona on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:50.",
      "🇹🇷 Saat 21:50."
    ],
    examples: [],
    related_word_ids: [3310]
  },
  {
    id: "vocab-saat-3311",
    category: "vocabulary",
    title: "nine minutes to ten p.m. — gece ona dokuz var",
    keywords: ["nine minutes to ten p.m.", "gece ona dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:51.",
      "🇹🇷 Saat 21:51."
    ],
    examples: [],
    related_word_ids: [3311]
  },
  {
    id: "vocab-saat-3312",
    category: "vocabulary",
    title: "eight minutes to ten p.m. — gece ona sekiz var",
    keywords: ["eight minutes to ten p.m.", "gece ona sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:52.",
      "🇹🇷 Saat 21:52."
    ],
    examples: [],
    related_word_ids: [3312]
  },
  {
    id: "vocab-saat-3313",
    category: "vocabulary",
    title: "seven minutes to ten p.m. — gece ona yedi var",
    keywords: ["seven minutes to ten p.m.", "gece ona yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:53.",
      "🇹🇷 Saat 21:53."
    ],
    examples: [],
    related_word_ids: [3313]
  },
  {
    id: "vocab-saat-3314",
    category: "vocabulary",
    title: "six minutes to ten p.m. — gece ona altı var",
    keywords: ["six minutes to ten p.m.", "gece ona altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:54.",
      "🇹🇷 Saat 21:54."
    ],
    examples: [],
    related_word_ids: [3314]
  },
  {
    id: "vocab-saat-3315",
    category: "vocabulary",
    title: "five to ten p.m. — gece ona beş var",
    keywords: ["five to ten p.m.", "gece ona beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:55.",
      "🇹🇷 Saat 21:55."
    ],
    examples: [],
    related_word_ids: [3315]
  },
  {
    id: "vocab-saat-3316",
    category: "vocabulary",
    title: "four minutes to ten p.m. — gece ona dört var",
    keywords: ["four minutes to ten p.m.", "gece ona dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:56.",
      "🇹🇷 Saat 21:56."
    ],
    examples: [],
    related_word_ids: [3316]
  },
  {
    id: "vocab-saat-3317",
    category: "vocabulary",
    title: "three minutes to ten p.m. — gece ona üç var",
    keywords: ["three minutes to ten p.m.", "gece ona üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:57.",
      "🇹🇷 Saat 21:57."
    ],
    examples: [],
    related_word_ids: [3317]
  },
  {
    id: "vocab-saat-3318",
    category: "vocabulary",
    title: "two minutes to ten p.m. — gece ona iki var",
    keywords: ["two minutes to ten p.m.", "gece ona iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:58.",
      "🇹🇷 Saat 21:58."
    ],
    examples: [],
    related_word_ids: [3318]
  },
  {
    id: "vocab-saat-3319",
    category: "vocabulary",
    title: "one minute to ten p.m. — gece ona bir var",
    keywords: ["one minute to ten p.m.", "gece ona bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 21:59.",
      "🇹🇷 Saat 21:59."
    ],
    examples: [],
    related_word_ids: [3319]
  },
  {
    id: "vocab-saat-3320",
    category: "vocabulary",
    title: "ten o'clock p.m. — gece on",
    keywords: ["ten o'clock p.m.", "gece on", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:00.",
      "🇹🇷 Saat 22:00."
    ],
    examples: [],
    related_word_ids: [3320]
  },
  {
    id: "vocab-saat-3321",
    category: "vocabulary",
    title: "one minute past ten p.m. — gece onu bir geçiyor",
    keywords: ["one minute past ten p.m.", "gece onu bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:01.",
      "🇹🇷 Saat 22:01."
    ],
    examples: [],
    related_word_ids: [3321]
  },
  {
    id: "vocab-saat-3322",
    category: "vocabulary",
    title: "two minutes past ten p.m. — gece onu iki geçiyor",
    keywords: ["two minutes past ten p.m.", "gece onu iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:02.",
      "🇹🇷 Saat 22:02."
    ],
    examples: [],
    related_word_ids: [3322]
  },
  {
    id: "vocab-saat-3323",
    category: "vocabulary",
    title: "three minutes past ten p.m. — gece onu üç geçiyor",
    keywords: ["three minutes past ten p.m.", "gece onu üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:03.",
      "🇹🇷 Saat 22:03."
    ],
    examples: [],
    related_word_ids: [3323]
  },
  {
    id: "vocab-saat-3324",
    category: "vocabulary",
    title: "four minutes past ten p.m. — gece onu dört geçiyor",
    keywords: ["four minutes past ten p.m.", "gece onu dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:04.",
      "🇹🇷 Saat 22:04."
    ],
    examples: [],
    related_word_ids: [3324]
  },
  {
    id: "vocab-saat-3325",
    category: "vocabulary",
    title: "five past ten p.m. — gece onu beş geçiyor",
    keywords: ["five past ten p.m.", "gece onu beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:05.",
      "🇹🇷 Saat 22:05."
    ],
    examples: [],
    related_word_ids: [3325]
  },
  {
    id: "vocab-saat-3326",
    category: "vocabulary",
    title: "six minutes past ten p.m. — gece onu altı geçiyor",
    keywords: ["six minutes past ten p.m.", "gece onu altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:06.",
      "🇹🇷 Saat 22:06."
    ],
    examples: [],
    related_word_ids: [3326]
  },
  {
    id: "vocab-saat-3327",
    category: "vocabulary",
    title: "seven minutes past ten p.m. — gece onu yedi geçiyor",
    keywords: ["seven minutes past ten p.m.", "gece onu yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:07.",
      "🇹🇷 Saat 22:07."
    ],
    examples: [],
    related_word_ids: [3327]
  },
  {
    id: "vocab-saat-3328",
    category: "vocabulary",
    title: "eight minutes past ten p.m. — gece onu sekiz geçiyor",
    keywords: ["eight minutes past ten p.m.", "gece onu sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:08.",
      "🇹🇷 Saat 22:08."
    ],
    examples: [],
    related_word_ids: [3328]
  },
  {
    id: "vocab-saat-3329",
    category: "vocabulary",
    title: "nine minutes past ten p.m. — gece onu dokuz geçiyor",
    keywords: ["nine minutes past ten p.m.", "gece onu dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:09.",
      "🇹🇷 Saat 22:09."
    ],
    examples: [],
    related_word_ids: [3329]
  },
  {
    id: "vocab-saat-3330",
    category: "vocabulary",
    title: "ten past ten p.m. — gece onu on geçiyor",
    keywords: ["ten past ten p.m.", "gece onu on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:10.",
      "🇹🇷 Saat 22:10."
    ],
    examples: [],
    related_word_ids: [3330]
  },
  {
    id: "vocab-saat-3331",
    category: "vocabulary",
    title: "eleven minutes past ten p.m. — gece onu on bir geçiyor",
    keywords: ["eleven minutes past ten p.m.", "gece onu on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:11.",
      "🇹🇷 Saat 22:11."
    ],
    examples: [],
    related_word_ids: [3331]
  },
  {
    id: "vocab-saat-3332",
    category: "vocabulary",
    title: "twelve minutes past ten p.m. — gece onu on iki geçiyor",
    keywords: ["twelve minutes past ten p.m.", "gece onu on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:12.",
      "🇹🇷 Saat 22:12."
    ],
    examples: [],
    related_word_ids: [3332]
  },
  {
    id: "vocab-saat-3333",
    category: "vocabulary",
    title: "thirteen minutes past ten p.m. — gece onu on üç geçiyor",
    keywords: ["thirteen minutes past ten p.m.", "gece onu on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:13.",
      "🇹🇷 Saat 22:13."
    ],
    examples: [],
    related_word_ids: [3333]
  },
  {
    id: "vocab-saat-3334",
    category: "vocabulary",
    title: "fourteen minutes past ten p.m. — gece onu on dört geçiyor",
    keywords: ["fourteen minutes past ten p.m.", "gece onu on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:14.",
      "🇹🇷 Saat 22:14."
    ],
    examples: [],
    related_word_ids: [3334]
  },
  {
    id: "vocab-saat-3335",
    category: "vocabulary",
    title: "a quarter past ten p.m. — gece onu çeyrek geçiyor",
    keywords: ["a quarter past ten p.m.", "gece onu çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:15.",
      "🇹🇷 Saat 22:15."
    ],
    examples: [],
    related_word_ids: [3335]
  },
  {
    id: "vocab-saat-3336",
    category: "vocabulary",
    title: "sixteen minutes past ten p.m. — gece onu on altı geçiyor",
    keywords: ["sixteen minutes past ten p.m.", "gece onu on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:16.",
      "🇹🇷 Saat 22:16."
    ],
    examples: [],
    related_word_ids: [3336]
  },
  {
    id: "vocab-saat-3337",
    category: "vocabulary",
    title: "seventeen minutes past ten p.m. — gece onu on yedi geçiyor",
    keywords: ["seventeen minutes past ten p.m.", "gece onu on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:17.",
      "🇹🇷 Saat 22:17."
    ],
    examples: [],
    related_word_ids: [3337]
  },
  {
    id: "vocab-saat-3338",
    category: "vocabulary",
    title: "eighteen minutes past ten p.m. — gece onu on sekiz geçiyor",
    keywords: ["eighteen minutes past ten p.m.", "gece onu on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:18.",
      "🇹🇷 Saat 22:18."
    ],
    examples: [],
    related_word_ids: [3338]
  },
  {
    id: "vocab-saat-3339",
    category: "vocabulary",
    title: "nineteen minutes past ten p.m. — gece onu on dokuz geçiyor",
    keywords: ["nineteen minutes past ten p.m.", "gece onu on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:19.",
      "🇹🇷 Saat 22:19."
    ],
    examples: [],
    related_word_ids: [3339]
  },
  {
    id: "vocab-saat-3340",
    category: "vocabulary",
    title: "twenty past ten p.m. — gece onu yirmi geçiyor",
    keywords: ["twenty past ten p.m.", "gece onu yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:20.",
      "🇹🇷 Saat 22:20."
    ],
    examples: [],
    related_word_ids: [3340]
  },
  {
    id: "vocab-saat-3341",
    category: "vocabulary",
    title: "twenty-one minutes past ten p.m. — gece onu yirmi bir geçiyor",
    keywords: ["twenty-one minutes past ten p.m.", "gece onu yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:21.",
      "🇹🇷 Saat 22:21."
    ],
    examples: [],
    related_word_ids: [3341]
  },
  {
    id: "vocab-saat-3342",
    category: "vocabulary",
    title: "twenty-two minutes past ten p.m. — gece onu yirmi iki geçiyor",
    keywords: ["twenty-two minutes past ten p.m.", "gece onu yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:22.",
      "🇹🇷 Saat 22:22."
    ],
    examples: [],
    related_word_ids: [3342]
  },
  {
    id: "vocab-saat-3343",
    category: "vocabulary",
    title: "twenty-three minutes past ten p.m. — gece onu yirmi üç geçiyor",
    keywords: ["twenty-three minutes past ten p.m.", "gece onu yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:23.",
      "🇹🇷 Saat 22:23."
    ],
    examples: [],
    related_word_ids: [3343]
  },
  {
    id: "vocab-saat-3344",
    category: "vocabulary",
    title: "twenty-four minutes past ten p.m. — gece onu yirmi dört geçiyor",
    keywords: ["twenty-four minutes past ten p.m.", "gece onu yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:24.",
      "🇹🇷 Saat 22:24."
    ],
    examples: [],
    related_word_ids: [3344]
  },
  {
    id: "vocab-saat-3345",
    category: "vocabulary",
    title: "twenty-five past ten p.m. — gece onu yirmi beş geçiyor",
    keywords: ["twenty-five past ten p.m.", "gece onu yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:25.",
      "🇹🇷 Saat 22:25."
    ],
    examples: [],
    related_word_ids: [3345]
  },
  {
    id: "vocab-saat-3346",
    category: "vocabulary",
    title: "twenty-six minutes past ten p.m. — gece onu yirmi altı geçiyor",
    keywords: ["twenty-six minutes past ten p.m.", "gece onu yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:26.",
      "🇹🇷 Saat 22:26."
    ],
    examples: [],
    related_word_ids: [3346]
  },
  {
    id: "vocab-saat-3347",
    category: "vocabulary",
    title: "twenty-seven minutes past ten p.m. — gece onu yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past ten p.m.", "gece onu yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:27.",
      "🇹🇷 Saat 22:27."
    ],
    examples: [],
    related_word_ids: [3347]
  },
  {
    id: "vocab-saat-3348",
    category: "vocabulary",
    title: "twenty-eight minutes past ten p.m. — gece onu yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past ten p.m.", "gece onu yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:28.",
      "🇹🇷 Saat 22:28."
    ],
    examples: [],
    related_word_ids: [3348]
  },
  {
    id: "vocab-saat-3349",
    category: "vocabulary",
    title: "twenty-nine minutes past ten p.m. — gece onu yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past ten p.m.", "gece onu yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:29.",
      "🇹🇷 Saat 22:29."
    ],
    examples: [],
    related_word_ids: [3349]
  },
  {
    id: "vocab-saat-3350",
    category: "vocabulary",
    title: "half past ten p.m. — gece on buçuk",
    keywords: ["half past ten p.m.", "gece on buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:30.",
      "🇹🇷 Saat 22:30."
    ],
    examples: [],
    related_word_ids: [3350]
  },
  {
    id: "vocab-saat-3351",
    category: "vocabulary",
    title: "twenty-nine minutes to eleven p.m. — gece on bire yirmi dokuz var",
    keywords: ["twenty-nine minutes to eleven p.m.", "gece on bire yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:31.",
      "🇹🇷 Saat 22:31."
    ],
    examples: [],
    related_word_ids: [3351]
  },
  {
    id: "vocab-saat-3352",
    category: "vocabulary",
    title: "twenty-eight minutes to eleven p.m. — gece on bire yirmi sekiz var",
    keywords: ["twenty-eight minutes to eleven p.m.", "gece on bire yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:32.",
      "🇹🇷 Saat 22:32."
    ],
    examples: [],
    related_word_ids: [3352]
  },
  {
    id: "vocab-saat-3353",
    category: "vocabulary",
    title: "twenty-seven minutes to eleven p.m. — gece on bire yirmi yedi var",
    keywords: ["twenty-seven minutes to eleven p.m.", "gece on bire yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:33.",
      "🇹🇷 Saat 22:33."
    ],
    examples: [],
    related_word_ids: [3353]
  },
  {
    id: "vocab-saat-3354",
    category: "vocabulary",
    title: "twenty-six minutes to eleven p.m. — gece on bire yirmi altı var",
    keywords: ["twenty-six minutes to eleven p.m.", "gece on bire yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:34.",
      "🇹🇷 Saat 22:34."
    ],
    examples: [],
    related_word_ids: [3354]
  },
  {
    id: "vocab-saat-3355",
    category: "vocabulary",
    title: "twenty-five to eleven p.m. — gece on bire yirmi beş var",
    keywords: ["twenty-five to eleven p.m.", "gece on bire yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:35.",
      "🇹🇷 Saat 22:35."
    ],
    examples: [],
    related_word_ids: [3355]
  },
  {
    id: "vocab-saat-3356",
    category: "vocabulary",
    title: "twenty-four minutes to eleven p.m. — gece on bire yirmi dört var",
    keywords: ["twenty-four minutes to eleven p.m.", "gece on bire yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:36.",
      "🇹🇷 Saat 22:36."
    ],
    examples: [],
    related_word_ids: [3356]
  },
  {
    id: "vocab-saat-3357",
    category: "vocabulary",
    title: "twenty-three minutes to eleven p.m. — gece on bire yirmi üç var",
    keywords: ["twenty-three minutes to eleven p.m.", "gece on bire yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:37.",
      "🇹🇷 Saat 22:37."
    ],
    examples: [],
    related_word_ids: [3357]
  },
  {
    id: "vocab-saat-3358",
    category: "vocabulary",
    title: "twenty-two minutes to eleven p.m. — gece on bire yirmi iki var",
    keywords: ["twenty-two minutes to eleven p.m.", "gece on bire yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:38.",
      "🇹🇷 Saat 22:38."
    ],
    examples: [],
    related_word_ids: [3358]
  },
  {
    id: "vocab-saat-3359",
    category: "vocabulary",
    title: "twenty-one minutes to eleven p.m. — gece on bire yirmi bir var",
    keywords: ["twenty-one minutes to eleven p.m.", "gece on bire yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:39.",
      "🇹🇷 Saat 22:39."
    ],
    examples: [],
    related_word_ids: [3359]
  },
  {
    id: "vocab-saat-3360",
    category: "vocabulary",
    title: "twenty to eleven p.m. — gece on bire yirmi var",
    keywords: ["twenty to eleven p.m.", "gece on bire yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:40.",
      "🇹🇷 Saat 22:40."
    ],
    examples: [],
    related_word_ids: [3360]
  },
  {
    id: "vocab-saat-3361",
    category: "vocabulary",
    title: "nineteen minutes to eleven p.m. — gece on bire on dokuz var",
    keywords: ["nineteen minutes to eleven p.m.", "gece on bire on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:41.",
      "🇹🇷 Saat 22:41."
    ],
    examples: [],
    related_word_ids: [3361]
  },
  {
    id: "vocab-saat-3362",
    category: "vocabulary",
    title: "eighteen minutes to eleven p.m. — gece on bire on sekiz var",
    keywords: ["eighteen minutes to eleven p.m.", "gece on bire on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:42.",
      "🇹🇷 Saat 22:42."
    ],
    examples: [],
    related_word_ids: [3362]
  },
  {
    id: "vocab-saat-3363",
    category: "vocabulary",
    title: "seventeen minutes to eleven p.m. — gece on bire on yedi var",
    keywords: ["seventeen minutes to eleven p.m.", "gece on bire on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:43.",
      "🇹🇷 Saat 22:43."
    ],
    examples: [],
    related_word_ids: [3363]
  },
  {
    id: "vocab-saat-3364",
    category: "vocabulary",
    title: "sixteen minutes to eleven p.m. — gece on bire on altı var",
    keywords: ["sixteen minutes to eleven p.m.", "gece on bire on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:44.",
      "🇹🇷 Saat 22:44."
    ],
    examples: [],
    related_word_ids: [3364]
  },
  {
    id: "vocab-saat-3365",
    category: "vocabulary",
    title: "a quarter to eleven p.m. — gece on bire çeyrek var",
    keywords: ["a quarter to eleven p.m.", "gece on bire çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:45.",
      "🇹🇷 Saat 22:45."
    ],
    examples: [],
    related_word_ids: [3365]
  },
  {
    id: "vocab-saat-3366",
    category: "vocabulary",
    title: "fourteen minutes to eleven p.m. — gece on bire on dört var",
    keywords: ["fourteen minutes to eleven p.m.", "gece on bire on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:46.",
      "🇹🇷 Saat 22:46."
    ],
    examples: [],
    related_word_ids: [3366]
  },
  {
    id: "vocab-saat-3367",
    category: "vocabulary",
    title: "thirteen minutes to eleven p.m. — gece on bire on üç var",
    keywords: ["thirteen minutes to eleven p.m.", "gece on bire on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:47.",
      "🇹🇷 Saat 22:47."
    ],
    examples: [],
    related_word_ids: [3367]
  },
  {
    id: "vocab-saat-3368",
    category: "vocabulary",
    title: "twelve minutes to eleven p.m. — gece on bire on iki var",
    keywords: ["twelve minutes to eleven p.m.", "gece on bire on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:48.",
      "🇹🇷 Saat 22:48."
    ],
    examples: [],
    related_word_ids: [3368]
  },
  {
    id: "vocab-saat-3369",
    category: "vocabulary",
    title: "eleven minutes to eleven p.m. — gece on bire on bir var",
    keywords: ["eleven minutes to eleven p.m.", "gece on bire on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:49.",
      "🇹🇷 Saat 22:49."
    ],
    examples: [],
    related_word_ids: [3369]
  },
  {
    id: "vocab-saat-3370",
    category: "vocabulary",
    title: "ten to eleven p.m. — gece on bire on var",
    keywords: ["ten to eleven p.m.", "gece on bire on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:50.",
      "🇹🇷 Saat 22:50."
    ],
    examples: [],
    related_word_ids: [3370]
  },
  {
    id: "vocab-saat-3371",
    category: "vocabulary",
    title: "nine minutes to eleven p.m. — gece on bire dokuz var",
    keywords: ["nine minutes to eleven p.m.", "gece on bire dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:51.",
      "🇹🇷 Saat 22:51."
    ],
    examples: [],
    related_word_ids: [3371]
  },
  {
    id: "vocab-saat-3372",
    category: "vocabulary",
    title: "eight minutes to eleven p.m. — gece on bire sekiz var",
    keywords: ["eight minutes to eleven p.m.", "gece on bire sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:52.",
      "🇹🇷 Saat 22:52."
    ],
    examples: [],
    related_word_ids: [3372]
  },
  {
    id: "vocab-saat-3373",
    category: "vocabulary",
    title: "seven minutes to eleven p.m. — gece on bire yedi var",
    keywords: ["seven minutes to eleven p.m.", "gece on bire yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:53.",
      "🇹🇷 Saat 22:53."
    ],
    examples: [],
    related_word_ids: [3373]
  },
  {
    id: "vocab-saat-3374",
    category: "vocabulary",
    title: "six minutes to eleven p.m. — gece on bire altı var",
    keywords: ["six minutes to eleven p.m.", "gece on bire altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:54.",
      "🇹🇷 Saat 22:54."
    ],
    examples: [],
    related_word_ids: [3374]
  },
  {
    id: "vocab-saat-3375",
    category: "vocabulary",
    title: "five to eleven p.m. — gece on bire beş var",
    keywords: ["five to eleven p.m.", "gece on bire beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:55.",
      "🇹🇷 Saat 22:55."
    ],
    examples: [],
    related_word_ids: [3375]
  },
  {
    id: "vocab-saat-3376",
    category: "vocabulary",
    title: "four minutes to eleven p.m. — gece on bire dört var",
    keywords: ["four minutes to eleven p.m.", "gece on bire dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:56.",
      "🇹🇷 Saat 22:56."
    ],
    examples: [],
    related_word_ids: [3376]
  },
  {
    id: "vocab-saat-3377",
    category: "vocabulary",
    title: "three minutes to eleven p.m. — gece on bire üç var",
    keywords: ["three minutes to eleven p.m.", "gece on bire üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:57.",
      "🇹🇷 Saat 22:57."
    ],
    examples: [],
    related_word_ids: [3377]
  },
  {
    id: "vocab-saat-3378",
    category: "vocabulary",
    title: "two minutes to eleven p.m. — gece on bire iki var",
    keywords: ["two minutes to eleven p.m.", "gece on bire iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:58.",
      "🇹🇷 Saat 22:58."
    ],
    examples: [],
    related_word_ids: [3378]
  },
  {
    id: "vocab-saat-3379",
    category: "vocabulary",
    title: "one minute to eleven p.m. — gece on bire bir var",
    keywords: ["one minute to eleven p.m.", "gece on bire bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 22:59.",
      "🇹🇷 Saat 22:59."
    ],
    examples: [],
    related_word_ids: [3379]
  },
  {
    id: "vocab-saat-3380",
    category: "vocabulary",
    title: "eleven o'clock p.m. — gece on bir",
    keywords: ["eleven o'clock p.m.", "gece on bir", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:00.",
      "🇹🇷 Saat 23:00."
    ],
    examples: [],
    related_word_ids: [3380]
  },
  {
    id: "vocab-saat-3381",
    category: "vocabulary",
    title: "one minute past eleven p.m. — gece on biri bir geçiyor",
    keywords: ["one minute past eleven p.m.", "gece on biri bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:01.",
      "🇹🇷 Saat 23:01."
    ],
    examples: [],
    related_word_ids: [3381]
  },
  {
    id: "vocab-saat-3382",
    category: "vocabulary",
    title: "two minutes past eleven p.m. — gece on biri iki geçiyor",
    keywords: ["two minutes past eleven p.m.", "gece on biri iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:02.",
      "🇹🇷 Saat 23:02."
    ],
    examples: [],
    related_word_ids: [3382]
  },
  {
    id: "vocab-saat-3383",
    category: "vocabulary",
    title: "three minutes past eleven p.m. — gece on biri üç geçiyor",
    keywords: ["three minutes past eleven p.m.", "gece on biri üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:03.",
      "🇹🇷 Saat 23:03."
    ],
    examples: [],
    related_word_ids: [3383]
  },
  {
    id: "vocab-saat-3384",
    category: "vocabulary",
    title: "four minutes past eleven p.m. — gece on biri dört geçiyor",
    keywords: ["four minutes past eleven p.m.", "gece on biri dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:04.",
      "🇹🇷 Saat 23:04."
    ],
    examples: [],
    related_word_ids: [3384]
  },
  {
    id: "vocab-saat-3385",
    category: "vocabulary",
    title: "five past eleven p.m. — gece on biri beş geçiyor",
    keywords: ["five past eleven p.m.", "gece on biri beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:05.",
      "🇹🇷 Saat 23:05."
    ],
    examples: [],
    related_word_ids: [3385]
  },
  {
    id: "vocab-saat-3386",
    category: "vocabulary",
    title: "six minutes past eleven p.m. — gece on biri altı geçiyor",
    keywords: ["six minutes past eleven p.m.", "gece on biri altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:06.",
      "🇹🇷 Saat 23:06."
    ],
    examples: [],
    related_word_ids: [3386]
  },
  {
    id: "vocab-saat-3387",
    category: "vocabulary",
    title: "seven minutes past eleven p.m. — gece on biri yedi geçiyor",
    keywords: ["seven minutes past eleven p.m.", "gece on biri yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:07.",
      "🇹🇷 Saat 23:07."
    ],
    examples: [],
    related_word_ids: [3387]
  },
  {
    id: "vocab-saat-3388",
    category: "vocabulary",
    title: "eight minutes past eleven p.m. — gece on biri sekiz geçiyor",
    keywords: ["eight minutes past eleven p.m.", "gece on biri sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:08.",
      "🇹🇷 Saat 23:08."
    ],
    examples: [],
    related_word_ids: [3388]
  },
  {
    id: "vocab-saat-3389",
    category: "vocabulary",
    title: "nine minutes past eleven p.m. — gece on biri dokuz geçiyor",
    keywords: ["nine minutes past eleven p.m.", "gece on biri dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:09.",
      "🇹🇷 Saat 23:09."
    ],
    examples: [],
    related_word_ids: [3389]
  },
  {
    id: "vocab-saat-3390",
    category: "vocabulary",
    title: "ten past eleven p.m. — gece on biri on geçiyor",
    keywords: ["ten past eleven p.m.", "gece on biri on geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:10.",
      "🇹🇷 Saat 23:10."
    ],
    examples: [],
    related_word_ids: [3390]
  },
  {
    id: "vocab-saat-3391",
    category: "vocabulary",
    title: "eleven minutes past eleven p.m. — gece on biri on bir geçiyor",
    keywords: ["eleven minutes past eleven p.m.", "gece on biri on bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:11.",
      "🇹🇷 Saat 23:11."
    ],
    examples: [],
    related_word_ids: [3391]
  },
  {
    id: "vocab-saat-3392",
    category: "vocabulary",
    title: "twelve minutes past eleven p.m. — gece on biri on iki geçiyor",
    keywords: ["twelve minutes past eleven p.m.", "gece on biri on iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:12.",
      "🇹🇷 Saat 23:12."
    ],
    examples: [],
    related_word_ids: [3392]
  },
  {
    id: "vocab-saat-3393",
    category: "vocabulary",
    title: "thirteen minutes past eleven p.m. — gece on biri on üç geçiyor",
    keywords: ["thirteen minutes past eleven p.m.", "gece on biri on üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:13.",
      "🇹🇷 Saat 23:13."
    ],
    examples: [],
    related_word_ids: [3393]
  },
  {
    id: "vocab-saat-3394",
    category: "vocabulary",
    title: "fourteen minutes past eleven p.m. — gece on biri on dört geçiyor",
    keywords: ["fourteen minutes past eleven p.m.", "gece on biri on dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:14.",
      "🇹🇷 Saat 23:14."
    ],
    examples: [],
    related_word_ids: [3394]
  },
  {
    id: "vocab-saat-3395",
    category: "vocabulary",
    title: "a quarter past eleven p.m. — gece on biri çeyrek geçiyor",
    keywords: ["a quarter past eleven p.m.", "gece on biri çeyrek geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:15.",
      "🇹🇷 Saat 23:15."
    ],
    examples: [],
    related_word_ids: [3395]
  },
  {
    id: "vocab-saat-3396",
    category: "vocabulary",
    title: "sixteen minutes past eleven p.m. — gece on biri on altı geçiyor",
    keywords: ["sixteen minutes past eleven p.m.", "gece on biri on altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:16.",
      "🇹🇷 Saat 23:16."
    ],
    examples: [],
    related_word_ids: [3396]
  },
  {
    id: "vocab-saat-3397",
    category: "vocabulary",
    title: "seventeen minutes past eleven p.m. — gece on biri on yedi geçiyor",
    keywords: ["seventeen minutes past eleven p.m.", "gece on biri on yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:17.",
      "🇹🇷 Saat 23:17."
    ],
    examples: [],
    related_word_ids: [3397]
  },
  {
    id: "vocab-saat-3398",
    category: "vocabulary",
    title: "eighteen minutes past eleven p.m. — gece on biri on sekiz geçiyor",
    keywords: ["eighteen minutes past eleven p.m.", "gece on biri on sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:18.",
      "🇹🇷 Saat 23:18."
    ],
    examples: [],
    related_word_ids: [3398]
  },
  {
    id: "vocab-saat-3399",
    category: "vocabulary",
    title: "nineteen minutes past eleven p.m. — gece on biri on dokuz geçiyor",
    keywords: ["nineteen minutes past eleven p.m.", "gece on biri on dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:19.",
      "🇹🇷 Saat 23:19."
    ],
    examples: [],
    related_word_ids: [3399]
  },
  {
    id: "vocab-saat-3400",
    category: "vocabulary",
    title: "twenty past eleven p.m. — gece on biri yirmi geçiyor",
    keywords: ["twenty past eleven p.m.", "gece on biri yirmi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:20.",
      "🇹🇷 Saat 23:20."
    ],
    examples: [],
    related_word_ids: [3400]
  },
  {
    id: "vocab-saat-3401",
    category: "vocabulary",
    title: "twenty-one minutes past eleven p.m. — gece on biri yirmi bir geçiyor",
    keywords: ["twenty-one minutes past eleven p.m.", "gece on biri yirmi bir geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:21.",
      "🇹🇷 Saat 23:21."
    ],
    examples: [],
    related_word_ids: [3401]
  },
  {
    id: "vocab-saat-3402",
    category: "vocabulary",
    title: "twenty-two minutes past eleven p.m. — gece on biri yirmi iki geçiyor",
    keywords: ["twenty-two minutes past eleven p.m.", "gece on biri yirmi iki geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:22.",
      "🇹🇷 Saat 23:22."
    ],
    examples: [],
    related_word_ids: [3402]
  },
  {
    id: "vocab-saat-3403",
    category: "vocabulary",
    title: "twenty-three minutes past eleven p.m. — gece on biri yirmi üç geçiyor",
    keywords: ["twenty-three minutes past eleven p.m.", "gece on biri yirmi üç geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:23.",
      "🇹🇷 Saat 23:23."
    ],
    examples: [],
    related_word_ids: [3403]
  },
  {
    id: "vocab-saat-3404",
    category: "vocabulary",
    title: "twenty-four minutes past eleven p.m. — gece on biri yirmi dört geçiyor",
    keywords: ["twenty-four minutes past eleven p.m.", "gece on biri yirmi dört geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:24.",
      "🇹🇷 Saat 23:24."
    ],
    examples: [],
    related_word_ids: [3404]
  },
  {
    id: "vocab-saat-3405",
    category: "vocabulary",
    title: "twenty-five past eleven p.m. — gece on biri yirmi beş geçiyor",
    keywords: ["twenty-five past eleven p.m.", "gece on biri yirmi beş geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:25.",
      "🇹🇷 Saat 23:25."
    ],
    examples: [],
    related_word_ids: [3405]
  },
  {
    id: "vocab-saat-3406",
    category: "vocabulary",
    title: "twenty-six minutes past eleven p.m. — gece on biri yirmi altı geçiyor",
    keywords: ["twenty-six minutes past eleven p.m.", "gece on biri yirmi altı geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:26.",
      "🇹🇷 Saat 23:26."
    ],
    examples: [],
    related_word_ids: [3406]
  },
  {
    id: "vocab-saat-3407",
    category: "vocabulary",
    title: "twenty-seven minutes past eleven p.m. — gece on biri yirmi yedi geçiyor",
    keywords: ["twenty-seven minutes past eleven p.m.", "gece on biri yirmi yedi geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:27.",
      "🇹🇷 Saat 23:27."
    ],
    examples: [],
    related_word_ids: [3407]
  },
  {
    id: "vocab-saat-3408",
    category: "vocabulary",
    title: "twenty-eight minutes past eleven p.m. — gece on biri yirmi sekiz geçiyor",
    keywords: ["twenty-eight minutes past eleven p.m.", "gece on biri yirmi sekiz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:28.",
      "🇹🇷 Saat 23:28."
    ],
    examples: [],
    related_word_ids: [3408]
  },
  {
    id: "vocab-saat-3409",
    category: "vocabulary",
    title: "twenty-nine minutes past eleven p.m. — gece on biri yirmi dokuz geçiyor",
    keywords: ["twenty-nine minutes past eleven p.m.", "gece on biri yirmi dokuz geçiyor", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:29.",
      "🇹🇷 Saat 23:29."
    ],
    examples: [],
    related_word_ids: [3409]
  },
  {
    id: "vocab-saat-3410",
    category: "vocabulary",
    title: "half past eleven p.m. — gece on bir buçuk",
    keywords: ["half past eleven p.m.", "gece on bir buçuk", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:30.",
      "🇹🇷 Saat 23:30."
    ],
    examples: [],
    related_word_ids: [3410]
  },
  {
    id: "vocab-saat-3411",
    category: "vocabulary",
    title: "twenty-nine minutes to twelve p.m. — gece on ikiye yirmi dokuz var",
    keywords: ["twenty-nine minutes to twelve p.m.", "gece on ikiye yirmi dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:31.",
      "🇹🇷 Saat 23:31."
    ],
    examples: [],
    related_word_ids: [3411]
  },
  {
    id: "vocab-saat-3412",
    category: "vocabulary",
    title: "twenty-eight minutes to twelve p.m. — gece on ikiye yirmi sekiz var",
    keywords: ["twenty-eight minutes to twelve p.m.", "gece on ikiye yirmi sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:32.",
      "🇹🇷 Saat 23:32."
    ],
    examples: [],
    related_word_ids: [3412]
  },
  {
    id: "vocab-saat-3413",
    category: "vocabulary",
    title: "twenty-seven minutes to twelve p.m. — gece on ikiye yirmi yedi var",
    keywords: ["twenty-seven minutes to twelve p.m.", "gece on ikiye yirmi yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:33.",
      "🇹🇷 Saat 23:33."
    ],
    examples: [],
    related_word_ids: [3413]
  },
  {
    id: "vocab-saat-3414",
    category: "vocabulary",
    title: "twenty-six minutes to twelve p.m. — gece on ikiye yirmi altı var",
    keywords: ["twenty-six minutes to twelve p.m.", "gece on ikiye yirmi altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:34.",
      "🇹🇷 Saat 23:34."
    ],
    examples: [],
    related_word_ids: [3414]
  },
  {
    id: "vocab-saat-3415",
    category: "vocabulary",
    title: "twenty-five to twelve p.m. — gece on ikiye yirmi beş var",
    keywords: ["twenty-five to twelve p.m.", "gece on ikiye yirmi beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:35.",
      "🇹🇷 Saat 23:35."
    ],
    examples: [],
    related_word_ids: [3415]
  },
  {
    id: "vocab-saat-3416",
    category: "vocabulary",
    title: "twenty-four minutes to twelve p.m. — gece on ikiye yirmi dört var",
    keywords: ["twenty-four minutes to twelve p.m.", "gece on ikiye yirmi dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:36.",
      "🇹🇷 Saat 23:36."
    ],
    examples: [],
    related_word_ids: [3416]
  },
  {
    id: "vocab-saat-3417",
    category: "vocabulary",
    title: "twenty-three minutes to twelve p.m. — gece on ikiye yirmi üç var",
    keywords: ["twenty-three minutes to twelve p.m.", "gece on ikiye yirmi üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:37.",
      "🇹🇷 Saat 23:37."
    ],
    examples: [],
    related_word_ids: [3417]
  },
  {
    id: "vocab-saat-3418",
    category: "vocabulary",
    title: "twenty-two minutes to twelve p.m. — gece on ikiye yirmi iki var",
    keywords: ["twenty-two minutes to twelve p.m.", "gece on ikiye yirmi iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:38.",
      "🇹🇷 Saat 23:38."
    ],
    examples: [],
    related_word_ids: [3418]
  },
  {
    id: "vocab-saat-3419",
    category: "vocabulary",
    title: "twenty-one minutes to twelve p.m. — gece on ikiye yirmi bir var",
    keywords: ["twenty-one minutes to twelve p.m.", "gece on ikiye yirmi bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:39.",
      "🇹🇷 Saat 23:39."
    ],
    examples: [],
    related_word_ids: [3419]
  },
  {
    id: "vocab-saat-3420",
    category: "vocabulary",
    title: "twenty to twelve p.m. — gece on ikiye yirmi var",
    keywords: ["twenty to twelve p.m.", "gece on ikiye yirmi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:40.",
      "🇹🇷 Saat 23:40."
    ],
    examples: [],
    related_word_ids: [3420]
  },
  {
    id: "vocab-saat-3421",
    category: "vocabulary",
    title: "nineteen minutes to twelve p.m. — gece on ikiye on dokuz var",
    keywords: ["nineteen minutes to twelve p.m.", "gece on ikiye on dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:41.",
      "🇹🇷 Saat 23:41."
    ],
    examples: [],
    related_word_ids: [3421]
  },
  {
    id: "vocab-saat-3422",
    category: "vocabulary",
    title: "eighteen minutes to twelve p.m. — gece on ikiye on sekiz var",
    keywords: ["eighteen minutes to twelve p.m.", "gece on ikiye on sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:42.",
      "🇹🇷 Saat 23:42."
    ],
    examples: [],
    related_word_ids: [3422]
  },
  {
    id: "vocab-saat-3423",
    category: "vocabulary",
    title: "seventeen minutes to twelve p.m. — gece on ikiye on yedi var",
    keywords: ["seventeen minutes to twelve p.m.", "gece on ikiye on yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:43.",
      "🇹🇷 Saat 23:43."
    ],
    examples: [],
    related_word_ids: [3423]
  },
  {
    id: "vocab-saat-3424",
    category: "vocabulary",
    title: "sixteen minutes to twelve p.m. — gece on ikiye on altı var",
    keywords: ["sixteen minutes to twelve p.m.", "gece on ikiye on altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:44.",
      "🇹🇷 Saat 23:44."
    ],
    examples: [],
    related_word_ids: [3424]
  },
  {
    id: "vocab-saat-3425",
    category: "vocabulary",
    title: "a quarter to twelve p.m. — gece on ikiye çeyrek var",
    keywords: ["a quarter to twelve p.m.", "gece on ikiye çeyrek var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:45.",
      "🇹🇷 Saat 23:45."
    ],
    examples: [],
    related_word_ids: [3425]
  },
  {
    id: "vocab-saat-3426",
    category: "vocabulary",
    title: "fourteen minutes to twelve p.m. — gece on ikiye on dört var",
    keywords: ["fourteen minutes to twelve p.m.", "gece on ikiye on dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:46.",
      "🇹🇷 Saat 23:46."
    ],
    examples: [],
    related_word_ids: [3426]
  },
  {
    id: "vocab-saat-3427",
    category: "vocabulary",
    title: "thirteen minutes to twelve p.m. — gece on ikiye on üç var",
    keywords: ["thirteen minutes to twelve p.m.", "gece on ikiye on üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:47.",
      "🇹🇷 Saat 23:47."
    ],
    examples: [],
    related_word_ids: [3427]
  },
  {
    id: "vocab-saat-3428",
    category: "vocabulary",
    title: "twelve minutes to twelve p.m. — gece on ikiye on iki var",
    keywords: ["twelve minutes to twelve p.m.", "gece on ikiye on iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:48.",
      "🇹🇷 Saat 23:48."
    ],
    examples: [],
    related_word_ids: [3428]
  },
  {
    id: "vocab-saat-3429",
    category: "vocabulary",
    title: "eleven minutes to twelve p.m. — gece on ikiye on bir var",
    keywords: ["eleven minutes to twelve p.m.", "gece on ikiye on bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:49.",
      "🇹🇷 Saat 23:49."
    ],
    examples: [],
    related_word_ids: [3429]
  },
  {
    id: "vocab-saat-3430",
    category: "vocabulary",
    title: "ten to twelve p.m. — gece on ikiye on var",
    keywords: ["ten to twelve p.m.", "gece on ikiye on var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:50.",
      "🇹🇷 Saat 23:50."
    ],
    examples: [],
    related_word_ids: [3430]
  },
  {
    id: "vocab-saat-3431",
    category: "vocabulary",
    title: "nine minutes to twelve p.m. — gece on ikiye dokuz var",
    keywords: ["nine minutes to twelve p.m.", "gece on ikiye dokuz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:51.",
      "🇹🇷 Saat 23:51."
    ],
    examples: [],
    related_word_ids: [3431]
  },
  {
    id: "vocab-saat-3432",
    category: "vocabulary",
    title: "eight minutes to twelve p.m. — gece on ikiye sekiz var",
    keywords: ["eight minutes to twelve p.m.", "gece on ikiye sekiz var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:52.",
      "🇹🇷 Saat 23:52."
    ],
    examples: [],
    related_word_ids: [3432]
  },
  {
    id: "vocab-saat-3433",
    category: "vocabulary",
    title: "seven minutes to twelve p.m. — gece on ikiye yedi var",
    keywords: ["seven minutes to twelve p.m.", "gece on ikiye yedi var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:53.",
      "🇹🇷 Saat 23:53."
    ],
    examples: [],
    related_word_ids: [3433]
  },
  {
    id: "vocab-saat-3434",
    category: "vocabulary",
    title: "six minutes to twelve p.m. — gece on ikiye altı var",
    keywords: ["six minutes to twelve p.m.", "gece on ikiye altı var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:54.",
      "🇹🇷 Saat 23:54."
    ],
    examples: [],
    related_word_ids: [3434]
  },
  {
    id: "vocab-saat-3435",
    category: "vocabulary",
    title: "five to twelve p.m. — gece on ikiye beş var",
    keywords: ["five to twelve p.m.", "gece on ikiye beş var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:55.",
      "🇹🇷 Saat 23:55."
    ],
    examples: [],
    related_word_ids: [3435]
  },
  {
    id: "vocab-saat-3436",
    category: "vocabulary",
    title: "four minutes to twelve p.m. — gece on ikiye dört var",
    keywords: ["four minutes to twelve p.m.", "gece on ikiye dört var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:56.",
      "🇹🇷 Saat 23:56."
    ],
    examples: [],
    related_word_ids: [3436]
  },
  {
    id: "vocab-saat-3437",
    category: "vocabulary",
    title: "three minutes to twelve p.m. — gece on ikiye üç var",
    keywords: ["three minutes to twelve p.m.", "gece on ikiye üç var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:57.",
      "🇹🇷 Saat 23:57."
    ],
    examples: [],
    related_word_ids: [3437]
  },
  {
    id: "vocab-saat-3438",
    category: "vocabulary",
    title: "two minutes to twelve p.m. — gece on ikiye iki var",
    keywords: ["two minutes to twelve p.m.", "gece on ikiye iki var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:58.",
      "🇹🇷 Saat 23:58."
    ],
    examples: [],
    related_word_ids: [3438]
  },
  {
    id: "vocab-saat-3439",
    category: "vocabulary",
    title: "one minute to twelve p.m. — gece on ikiye bir var",
    keywords: ["one minute to twelve p.m.", "gece on ikiye bir var", "saat", "time", "zaman"],
    content: "Bu kavram A2 Saatler listesinde yer almaktadır.",
    details: [
      "🇬🇧 It is 23:59.",
      "🇹🇷 Saat 23:59."
    ],
    examples: [],
    related_word_ids: [3439]
  },
];
