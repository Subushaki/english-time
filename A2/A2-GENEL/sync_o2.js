const fs = require('fs');
const path = require('path');

const wordsJsPath = path.join(__dirname, '..', '..', 'js', 'words-a2.js');
const o2DataPath = path.join(__dirname, '..', '..', 'js', 'o2-data.js');

const jsContent = fs.readFileSync(wordsJsPath, 'utf-8');
let o2Content = fs.readFileSync(o2DataPath, 'utf-8');

// Parse WORDS_A2_GENEL
const match = jsContent.match(/const WORDS_A2_GENEL\s*=\s*\[([\s\S]*?)\];/);
if (!match) {
  console.error("WORDS_A2_GENEL bulunamadı.");
  process.exit(1);
}

const entries = [];
const regex = /\{\s*id:\s*(\d+),\s*en:\s*"([^"]*)",\s*tr:\s*"([^"]*)"(?:,\s*hintEn:\s*"([^"]*)")?(?:,\s*hintTr:\s*"([^"]*)")?\s*\}/g;
let m;
while ((m = regex.exec(match[1])) !== null) {
  entries.push({
    id: parseInt(m[1]),
    en: m[2],
    tr: m[3],
    hintEn: m[4] || '',
    hintTr: m[5] || ''
  });
}

let addedCount = 0;
let newO2Entries = "";

entries.forEach(word => {
  if (!o2Content.includes(`related_word_ids: [${word.id}]`) && !o2Content.includes(`related_word_ids: [ ${word.id} ]`)) {
    newO2Entries += `  {
    id: "vocab-genel-${word.id}",
    category: "vocabulary",
    title: "${word.en} — ${word.tr}",
    keywords: ["${word.en.toLowerCase()}", "${word.tr.toLowerCase()}", "kelime", "vocabulary", "ipucu", "genel"],
    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",
    details: [
      "🇬🇧 ${word.hintEn}",
      "🇹🇷 ${word.hintTr}"
    ],
    examples: [],
    related_word_ids: [${word.id}]
  },
`;
    addedCount++;
  }
});

if (addedCount > 0) {
  // Sondaki ]; işaretini bulup hemen öncesine ekleyelim
  o2Content = o2Content.replace(/\s*\];\s*$/, `,\n\n  // A2 GENEL OTO-EKLENEN KELİMELER\n${newO2Entries}];\n`);
  fs.writeFileSync(o2DataPath, o2Content, 'utf-8');
  console.log(`✅ Başarıyla ${addedCount} yeni kelime O2 Arama Motoru veritabanına (o2-data.js) eklendi!`);
} else {
  console.log(`✅ Tüm kelimeler zaten O2 Arama Motorunda mevcut. Yeni eklenecek kelime yok.`);
}
