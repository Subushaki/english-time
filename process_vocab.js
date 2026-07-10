const fs = require('fs');
const path = require('path');

const txtPath = path.join(__dirname, 'A2', 'A2-GENEL', 'A2-GENEL-ALL.txt');
const oldGrammarFile = path.join(__dirname, 'A2', 'A2-GENEL', 'A2-Grammar-Topics.txt');
const addedGrammarFile = path.join(__dirname, 'A2', 'A2-GENEL', 'New-Grammar-Topics.txt');
const newGrammarFile = path.join(__dirname, 'Grammar', 'Grammar-Topics.txt');
const jsPath = path.join(__dirname, 'js', 'words-a2.js');
const o2DataPath = path.join(__dirname, 'js', 'o2-data.js');

// Custom block grammar parser
function parseGrammarFile(content) {
  const topics = [];
  const blocks = content.split('=== GRAMMAR TOPIC ===');
  const knownFields = ['id', 'title', 'keywords', 'content', 'details', 'examples', 'related_word_ids'];
  
  for (let block of blocks) {
    block = block.trim();
    if (!block) continue;
    
    const blockLines = block.split(/\r?\n/);
    const topic = {
      id: '',
      category: 'grammar',
      title: '',
      keywords: [],
      content: '',
      details: [],
      examples: [],
      related_word_ids: []
    };
    
    let currentField = null;
    
    for (let line of blockLines) {
      const trimmed = line.trim();
      
      const match = line.match(/^([a-zA-Z_]+)\s*:\s*(.*)$/);
      if (match && !trimmed.startsWith('-') && knownFields.includes(match[1].toLowerCase())) {
        const key = match[1].toLowerCase();
        const value = match[2].trim();
        currentField = key;
        
        if (key === 'id') {
          topic.id = value;
        } else if (key === 'title') {
          topic.title = value;
        } else if (key === 'content') {
          topic.content = value;
        } else if (key === 'keywords') {
          topic.keywords = value ? value.split(',').map(k => k.trim()) : [];
        } else if (key === 'related_word_ids') {
          topic.related_word_ids = value ? value.split(',').map(id => parseInt(id.trim(), 10)) : [];
        } else if (key === 'details') {
          if (value) topic.details.push(value);
        } else if (key === 'examples') {
          if (value) topic.examples.push(value);
        }
      } else {
        if (currentField === 'details' || currentField === 'examples') {
          let cleanLine = trimmed;
          if (cleanLine.startsWith('-')) {
            cleanLine = cleanLine.substring(1).trim();
          }
          if (cleanLine) {
            topic[currentField].push(cleanLine);
          }
        }
      }
    }
    
    if (topic.id) {
      topics.push(topic);
    }
  }
  return topics;
}

// Format a topic back to standard human-friendly text format
function formatTopicToTxt(topic) {
  let output = `=== GRAMMAR TOPIC ===\n`;
  output += `id: ${topic.id}\n`;
  output += `title: ${topic.title}\n`;
  output += `keywords: ${topic.keywords.join(', ')}\n`;
  output += `content: ${topic.content}\n`;
  
  output += `details:\n`;
  if (topic.details && topic.details.length > 0) {
    output += topic.details.map(d => `- ${d}`).join('\n') + '\n';
  }
  
  output += `examples:\n`;
  if (topic.examples && topic.examples.length > 0) {
    output += topic.examples.map(e => `- ${e}`).join('\n') + '\n';
  }
  
  output += `related_word_ids: ${topic.related_word_ids.join(', ')}\n`;
  return output;
}

// ============================================================
// 1. MIGRATION & MERGING OF GRAMMAR FILES
// ============================================================
// Ensure general Grammar folder exists
const grammarFolder = path.join(__dirname, 'Grammar');
if (!fs.existsSync(grammarFolder)) {
  fs.mkdirSync(grammarFolder);
  console.log('Created general Grammar folder.');
}

let grammarTopics = [];

if (fs.existsSync(oldGrammarFile) && fs.existsSync(addedGrammarFile)) {
  console.log('Detected unmerged grammar files. Merging A2-Grammar-Topics.txt and New-Grammar-Topics.txt...');
  const oldTopics = parseGrammarFile(fs.readFileSync(oldGrammarFile, 'utf8'));
  const addedTopics = parseGrammarFile(fs.readFileSync(addedGrammarFile, 'utf8'));
  
  const combinedMap = new Map();
  oldTopics.forEach(t => combinedMap.set(t.id, t));
  addedTopics.forEach(t => combinedMap.set(t.id, t));
  
  grammarTopics = Array.from(combinedMap.values());
  
  const mergedContent = grammarTopics.map(formatTopicToTxt).join('\n');
  fs.writeFileSync(newGrammarFile, mergedContent, 'utf8');
  console.log(`Successfully merged ${grammarTopics.length} grammar topics into Grammar/Grammar-Topics.txt.`);
  console.log('NOTE: You can now safely delete the old files in A2/A2-GENEL/ using git rm.');
} else if (fs.existsSync(newGrammarFile)) {
  console.log('Reading grammar topics from Grammar/Grammar-Topics.txt');
  grammarTopics = parseGrammarFile(fs.readFileSync(newGrammarFile, 'utf8'));
} else if (fs.existsSync(oldGrammarFile)) {
  console.log('Moving A2-Grammar-Topics.txt to Grammar/Grammar-Topics.txt...');
  const topics = parseGrammarFile(fs.readFileSync(oldGrammarFile, 'utf8'));
  const content = topics.map(formatTopicToTxt).join('\n');
  fs.writeFileSync(newGrammarFile, content, 'utf8');
  grammarTopics = topics;
} else {
  console.warn('Warning: No grammar topics file found!');
}

// ============================================================
// 2. READ & PARSE A2-GENEL-ALL.txt (Vocabulary)
// ============================================================
let txtContent = fs.readFileSync(txtPath, 'utf8');
let lines = txtContent.split(/\r?\n/);

let items = [];

// Custom CSV parser that handles double quotes
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

// Parse lines
for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;
  
  const match = line.match(/^(\d+)\s*(?:\||,)/);
  if (match) {
    let cols = [];
    if (line.includes('|')) {
      cols = line.split('|').map(c => c.trim());
    } else {
      cols = parseCSVLine(line);
    }
    
    if (cols.length >= 5) {
      items.push({
        no: parseInt(cols[0], 10),
        en: cols[1],
        tr: cols[2],
        hintEn: cols[3],
        hintTr: cols[4]
      });
    } else {
      console.warn(`Warning: line has fewer than 5 columns: ${line}`);
    }
  }
}

console.log(`Parsed ${items.length} vocabulary items from A2-GENEL-ALL.txt.`);

// Determine column widths
let widthNo = 5;
let widthEn = 40;
let widthTr = 40;
let widthHintEn = 60;

items.forEach(item => {
  if (item.no.toString().length > widthNo) widthNo = item.no.toString().length;
  if (item.en.length > widthEn) widthEn = item.en.length;
  if (item.tr.length > widthTr) widthTr = item.tr.length;
  if (item.hintEn.length > widthHintEn) widthHintEn = item.hintEn.length;
});

// Regenerate header
const newHeader = [];
newHeader.push(`Personel Notebook - A2 GENEL BİRLEŞİK LİSTE (${items.length} Kelime)`);
newHeader.push('='.repeat(100));
newHeader.push('');
newHeader.push(
  'No'.padEnd(widthNo) + ' | ' +
  'English'.padEnd(widthEn) + ' | ' +
  'Türkçe'.padEnd(widthTr) + ' | ' +
  'English Hint'.padEnd(widthHintEn) + ' | ' +
  'Türkçe İpucu'
);
newHeader.push(
  '-'.repeat(widthNo) + '|' +
  '-'.repeat(widthEn + 2) + '|' +
  '-'.repeat(widthTr + 2) + '|' +
  '-'.repeat(widthHintEn + 2) + '|' +
  '-'.repeat(55)
);

// Format items to pipe-separated lines
const formattedItems = items.map(item => {
  return (
    item.no.toString().padEnd(widthNo) + ' | ' +
    item.en.padEnd(widthEn) + ' | ' +
    item.tr.padEnd(widthTr) + ' | ' +
    item.hintEn.padEnd(widthHintEn) + ' | ' +
    item.hintTr
  );
});

const newTxtContent = newHeader.concat(formattedItems).join('\n') + '\n';
fs.writeFileSync(txtPath, newTxtContent, 'utf8');
console.log('Successfully updated TXT file.');

// ============================================================
// 3. UPDATE js/words-a2.js (Quiz Database)
// ============================================================
let jsContent = fs.readFileSync(jsPath, 'utf8');

const newGenelJSLines = items.map(item => {
  const id = 1000 + item.no;
  const enEscaped = item.en.replace(/"/g, '\\"');
  const trEscaped = item.tr.replace(/"/g, '\\"');
  const hintEnEscaped = item.hintEn.replace(/"/g, '\\"');
  const hintTrEscaped = item.hintTr.replace(/"/g, '\\"');
  return `  { id: ${id}, en: "${enEscaped}", tr: "${trEscaped}", hintEn: "${hintEnEscaped}", hintTr: "${hintTrEscaped}" }`;
});

const newGenelJSContent = `const WORDS_A2_GENEL = [\n${newGenelJSLines.join(',\n')}\n];`;

const regex = /const\s+WORDS_A2_GENEL\s*=\s*\[[\s\S]*?\];/;
if (jsContent.match(regex)) {
  jsContent = jsContent.replace(regex, newGenelJSContent);
  fs.writeFileSync(jsPath, jsContent, 'utf8');
  console.log('Successfully updated words-a2.js file.');
} else {
  console.error('Error: Could not find WORDS_A2_GENEL array in words-a2.js');
}

// ============================================================
// 4. UPDATE js/o2-data.js (Search Engine Database)
// ============================================================
let o2Content = fs.readFileSync(o2DataPath, 'utf8');

// Generate Grammar entries
const grammarEntries = grammarTopics.map(topic => {
  const keywordsStr = topic.keywords.map(k => `"${k.replace(/"/g, '\\"')}"`).join(', ');
  const detailsStr = topic.details.map(d => `      "${d.replace(/"/g, '\\"')}"`).join(',\n');
  const examplesStr = topic.examples.map(e => `      "${e.replace(/"/g, '\\"')}"`).join(',\n');
  const idsStr = topic.related_word_ids.join(', ');
  
  return `  {\n` +
    `    id: "${topic.id}",\n` +
    `    category: "grammar",\n` +
    `    title: "${topic.title.replace(/"/g, '\\"')}",\n` +
    `    keywords: [${keywordsStr}],\n` +
    `    content: "${topic.content.replace(/"/g, '\\"')}",\n` +
    `    details: [${detailsStr ? '\n' + detailsStr + '\n    ' : ''}],\n` +
    `    examples: [${examplesStr ? '\n' + examplesStr + '\n    ' : ''}],\n` +
    `    related_word_ids: [${idsStr}]\n` +
    `  }`;
}).join(',\n\n');

// Generate Vocabulary entries (Architect, No 130, ID 1130 onwards)
const o2Items = items.filter(item => item.no >= 130);

const o2Entries = o2Items.map(item => {
  const idStr = `vocab-genel-${1000 + item.no}`;
  const title = `${item.en} — ${item.tr}`;
  const keywords = [
    item.en.toLowerCase(),
    item.tr.toLowerCase(),
    "kelime",
    "vocabulary",
    "ipucu",
    "genel"
  ];
  const titleEscaped = title.replace(/"/g, '\\"');
  const keywordsStr = keywords.map(k => `"${k.replace(/"/g, '\\"')}"`).join(', ');
  const hintEnEscaped = item.hintEn.replace(/"/g, '\\"');
  const hintTrEscaped = item.hintTr.replace(/"/g, '\\"');

  return `  {\n` +
    `    id: "${idStr}",\n` +
    `    category: "vocabulary",\n` +
    `    title: "${titleEscaped}",\n` +
    `    keywords: [${keywordsStr}],\n` +
    `    content: "Bu kelime A2 Genel kelime listesinde yer almaktadır.",\n` +
    `    details: [\n` +
    `      "🇬🇧 ${hintEnEscaped}",\n` +
    `      "🇹🇷 ${hintTrEscaped}"\n` +
    `    ],\n` +
    `    examples: [],\n` +
    `    related_word_ids: [${1000 + item.no}]\n` +
    `  }`;
}).join(',\n');

// A. Replace grammar entries block
const regexGrammar = /(const\s+O2_DATABASE\s*=\s*\[\s*)[\s\S]*?(?=\n\s*\/\/\s*=+\s*\n\s*\/\/\s*BÖLÜM:\s*İPUÇLARI)/;
if (o2Content.match(regexGrammar)) {
  o2Content = o2Content.replace(regexGrammar, `$1\n${grammarEntries},\n`);
} else {
  console.error('Error: Could not find grammar section replacement bounds in o2-data.js');
}

// B. Replace vocabulary entries block
const regexO2 = /(\/\/ A2 GENEL OTO-EKLENEN KELİMELER\s*\n)([\s\S]*?)(?=\n\s*\/\/ A2 SAATLER OTO-EKLENEN KAVRAMLAR)/;
if (o2Content.match(regexO2)) {
  o2Content = o2Content.replace(regexO2, `$1${o2Entries},\n`);
} else {
  console.error('Error: Could not find A2 GENEL OTO-EKLENEN KELİMELER block in o2-data.js');
}

fs.writeFileSync(o2DataPath, o2Content, 'utf8');
console.log('Successfully updated o2-data.js file with both vocabulary and grammar changes.');
