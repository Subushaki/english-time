// ===== TURKISH PROFANITY FILTER =====

const TURKISH_BAD_WORDS = [
  "amk", "aq", "sik", "siker", "sikerim", "sikik", "siktir", "sg", 
  "yarak", "yarrak", "orospu", "pic", "piç", "göt", "götveren", "ibne", 
  "kahpe", "pezevenk", "amcik", "amcık", "sürtük", "yavşak", "yavsak",
  "amına", "amina", "amkoyim", "amq", "oç", "oc", "sokuk"
];

function filterProfanity(text) {
  let hasProfanity = false;
  let filteredText = text;

  // Tüm listeyi kontrol et
  TURKISH_BAD_WORDS.forEach(word => {
    // Kelimenin sınırlarını belirleyen ve büyük/küçük harf duyarsız regex
    // Türkçe karakterleri (ı, i) de kapsayacak şekilde
    const regex = new RegExp('\\b' + word + '\\b', 'gi');
    
    // Eğer cümlede bu kelime geçiyorsa
    if (regex.test(filteredText)) {
      hasProfanity = true;
      // Kelimenin uzunluğu kadar yıldız (*) koy
      filteredText = filteredText.replace(regex, match => '*'.repeat(match.length));
    }
  });

  return { 
    isClean: !hasProfanity, 
    filteredText: filteredText 
  };
}
