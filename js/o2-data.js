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
];
