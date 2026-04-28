// ===== O2 OXYGEN — ARAMA MOTORU =====
// Client-side search engine for English Time platform.
// No external APIs — searches O2_DATABASE defined in o2-data.js.

const O2Engine = {

  // ===== NORMALIZE TEXT =====
  normalize(text) {
    if (!text) return '';
    return text
      .toLowerCase()
      .replace(/ı/g, 'i')
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/â/g, 'a')
      .replace(/î/g, 'i')
      .replace(/û/g, 'u')
      .trim();
  },

  // ===== FUZZY MATCH SCORE =====
  // Returns 0-1 score based on how well needle matches haystack
  fuzzyScore(needle, haystack) {
    const n = this.normalize(needle);
    const h = this.normalize(haystack);

    // Exact match
    if (h === n) return 1.0;

    // Contains match
    if (h.includes(n)) return 0.85;

    // Word-level match (any word in haystack starts with needle)
    const haystackWords = h.split(/\s+/);
    for (const word of haystackWords) {
      if (word.startsWith(n)) return 0.75;
      if (word === n) return 0.8;
    }

    // Levenshtein for short queries (typo tolerance)
    // En az 4 harfli aramalarda yazım hatası toleransı uygulayalım (3 harflilerde çok fazla yanlış eşleşme yapıyor)
    if (n.length <= 12 && n.length >= 4) {
      for (const word of haystackWords) {
        const dist = this.levenshtein(n, word);
        if (dist <= 1 && word.length >= 4) return 0.65;
        if (dist <= 2 && word.length >= 6) return 0.45;
      }
    }

    return 0;
  },

  // ===== LEVENSHTEIN DISTANCE =====
  levenshtein(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b[i - 1] === a[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    return matrix[b.length][a.length];
  },

  // ===== SEARCH =====
  search(query, options = {}) {
    if (!query || query.trim().length < 2) return [];

    const q = query.trim();
    const categoryFilter = options.category || null; // 'grammar', 'idiom', 'tip', or null for all
    const maxResults = options.maxResults || 10;

    const results = [];

    for (const entry of O2_DATABASE) {
      // Category filter
      if (categoryFilter && entry.category !== categoryFilter) continue;

      let score = 0;

      // 1. Title match (highest weight)
      const titleScore = this.fuzzyScore(q, entry.title);
      score += titleScore * 50;

      // 2. Keywords match (high weight)
      let bestKeywordScore = 0;
      for (const keyword of entry.keywords) {
        const ks = this.fuzzyScore(q, keyword);
        if (ks > bestKeywordScore) bestKeywordScore = ks;
      }
      score += bestKeywordScore * 35;

      // 3. Content match (medium weight)
      const contentScore = this.fuzzyScore(q, entry.content);
      score += contentScore * 10;

      // 4. Details match (lower weight)
      if (entry.details) {
        let bestDetailScore = 0;
        for (const detail of entry.details) {
          const ds = this.fuzzyScore(q, detail);
          if (ds > bestDetailScore) bestDetailScore = ds;
        }
        score += bestDetailScore * 5;
      }

      // Require a higher score so words that ONLY match in content/details are not shown
      if (score >= 15) {
        results.push({ entry, score });
      }
    }

    // Sort by score descending
    results.sort((a, b) => b.score - a.score);

    return results.slice(0, maxResults).map(r => r.entry);
  },

  // ===== SEARCH BY WORD ID =====
  // Find entries related to a specific word ID from words-a2.js
  searchByWordId(wordId) {
    const results = [];
    for (const entry of O2_DATABASE) {
      if (entry.related_word_ids && entry.related_word_ids.includes(wordId)) {
        results.push(entry);
      }
    }
    return results;
  },

  // ===== SEARCH FOR QUIZ CONTEXT =====
  // Searches by word en/tr text + id for best quiz-time results
  searchForQuiz(word) {
    if (!word) return [];

    let results = [];

    // 1. Try by word ID first
    if (word.id) {
      results = this.searchByWordId(word.id);
      // 🔥 Optimizasyon: Eğer ID ile sonuç bulunduysa (ki biz özel haritalandırdık), boşuna ağır Fuzzy Search yapıp CPU'yu yorma.
      if (results.length > 0) {
        return results.slice(0, 5); 
      }
    }

    // 2. Search by English text
    const enResults = this.search(word.en, { maxResults: 3 });

    // 3. Search by Turkish text
    const trResults = this.search(word.tr, { maxResults: 3 });

    // Merge and deduplicate
    const seen = new Set(results.map(r => r.id));
    for (const r of [...enResults, ...trResults]) {
      if (!seen.has(r.id)) {
        results.push(r);
        seen.add(r.id);
      }
    }

    return results.slice(0, 5);
  },

  // ===== GET CATEGORY LABEL =====
  getCategoryLabel(category) {
    switch (category) {
      case 'grammar': return '📐 Gramer';
      case 'idiom': return '💬 Deyim';
      case 'vocabulary': return '📖 Kelime';
      case 'tip': return '💡 İpucu';
      default: return '📄 Bilgi';
    }
  },

  // ===== GET CATEGORY COLOR =====
  getCategoryColor(category) {
    switch (category) {
      case 'grammar': return '#8b5cf6';
      case 'idiom': return '#ec4899';
      case 'vocabulary': return '#3b82f6';
      case 'tip': return '#10b981';
      default: return '#9898b8';
    }
  },

  // ===== RENDER RESULT CARD (HTML) =====
  renderCard(entry) {
    const catLabel = this.getCategoryLabel(entry.category);
    const catColor = this.getCategoryColor(entry.category);

    let detailsHtml = '';
    if (entry.details && entry.details.length > 0) {
      detailsHtml = '<div class="o2-card-details">' +
        entry.details.map(d => `<div class="o2-detail-item">${this.escapeHtml(d)}</div>`).join('') +
        '</div>';
    }

    let examplesHtml = '';
    if (entry.examples && entry.examples.length > 0) {
      examplesHtml = '<div class="o2-card-examples">' +
        '<div class="o2-examples-title">📝 Örnekler</div>' +
        entry.examples.map(e => `<div class="o2-example-item">${this.escapeHtml(e)}</div>`).join('') +
        '</div>';
    }

    return `
      <div class="o2-result-card" data-category="${entry.category}">
        <div class="o2-card-header">
          <span class="o2-card-badge" style="background: ${catColor}20; color: ${catColor}; border-color: ${catColor}40">${catLabel}</span>
          <h3 class="o2-card-title">${this.escapeHtml(entry.title)}</h3>
        </div>
        <p class="o2-card-content">${this.escapeHtml(entry.content)}</p>
        ${detailsHtml}
        ${examplesHtml}
      </div>
    `;
  },

  escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
};
