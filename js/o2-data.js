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
];
