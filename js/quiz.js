// ===== QUIZ ENGINE =====
// 3-attempt system with retry queue + word tracking + star system

(function () {
  'use strict';

  // ===== STATE =====
  let queue = [];
  let totalWords = 0;
  let completedWords = 0;
  let currentItem = null;
  let isWaiting = false;
  let isCustomQuiz = false;

  let mode = 'en-tr';

  const stats = {
    firstTry: 0,
    retry: 0,
    hard: 0,
    unknown: 0
  };

  const wordLists = {
    firstTry: [],
    retry: [],
    hard: [],
    unknown: []
  };

  // Supabase state
  let loggedInUser = null;
  let sessionId = null;

  // ===== INIT =====
  function init() {
    const params = new URLSearchParams(window.location.search);
    mode = params.get('mode') || 'en-tr';
    const level = params.get('level') || 'a2';
    const dataset = params.get('dataset') || 'kurs';
    isCustomQuiz = params.get('custom') === 'true';

    // Get word list
    let wordList;
    let selectedData = dataset === 'genel' ? WORDS_A2_GENEL : 
                       (dataset === 'grammar' ? WORDS_A2_GRAMMAR : 
                       (dataset === 'deyimler' ? WORDS_A2_DEYIMLER : WORDS_A2));

    if (isCustomQuiz) {
      // Custom quiz: read word IDs from localStorage
      const customIds = JSON.parse(localStorage.getItem('custom_quiz_ids') || '[]');
      wordList = ALL_WORDS_A2.filter(w => customIds.includes(w.id));
      if (wordList.length === 0) {
        alert('Özel quiz için kelime bulunamadı!');
        window.location.href = 'dashboard.html';
        return;
      }
      document.getElementById('progress-mode-label').textContent =
        (mode === 'en-tr' ? '🇬🇧→🇹🇷' : '🇹🇷→🇬🇧') + ' ⭐ Özel Quiz';
    } else if (level === 'a2') {
      wordList = [...selectedData];
      if (params.get('exclude') === 'true') {
        const excludeIds = JSON.parse(localStorage.getItem('exclude_quiz_ids') || '[]');
        wordList = wordList.filter(w => !excludeIds.includes(w.id));
        if (wordList.length === 0) {
           alert('Çalışacak kelime kalmadı! Tüm kelimeleri biliyorsunuz.');
           window.location.href = 'dashboard.html';
           return;
        }
      }
    } else {
      alert('Bu seviye henüz eklenmedi!');
      window.location.href = 'index.html';
      return;
    }

    totalWords = wordList.length;

    // Set UI labels
    if (dataset === 'grammar') {
      if (!isCustomQuiz) document.getElementById('progress-mode-label').textContent = '📝 Grammar - Boşluk Doldurma';
      document.getElementById('question-label').textContent = 'CÜMLE (Eksik Kısmı Bul)';
      document.getElementById('answer-label').textContent = 'DOĞRU YAPI';
      document.getElementById('answer-input').placeholder = 'Boşluğa gelmesi gereken kelimeyi yazın...';
    } else if (mode === 'en-tr') {
      if (!isCustomQuiz) document.getElementById('progress-mode-label').textContent = '🇬🇧 İngilizce → Türkçe 🇹🇷';
      document.getElementById('question-label').textContent = 'İNGİLİZCE';
      document.getElementById('answer-label').textContent = 'TÜRKÇE KARŞILIĞI';
      document.getElementById('answer-input').placeholder = 'Türkçe anlamını yazın...';
    } else {
      if (!isCustomQuiz) document.getElementById('progress-mode-label').textContent = '🇹🇷 Türkçe → İngilizce 🇬🇧';
      document.getElementById('question-label').textContent = 'TÜRKÇE';
      document.getElementById('answer-label').textContent = 'İNGİLİZCE KARŞILIĞI';
      document.getElementById('answer-input').placeholder = 'İngilizce karşılığını yazın...';
    }

    // Build queue
    queue = wordList.map(w => ({ word: w, attempt: 1 }));
    shuffleArray(queue);

    updateProgress();
    showNextWord();

    document.getElementById('answer-input').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        if (isWaiting) {
          nextWord();
        } else {
          checkAnswer();
        }
      }
    });

    initSupabaseSession();
  }

  // ===== SUPABASE SESSION =====
  async function initSupabaseSession() {
    try {
      const user = await getCurrentUser();
      if (user && user.id) {
        loggedInUser = user;
        const sb = getSupabase();
        const params = new URLSearchParams(window.location.search);
        const { data } = await sb.from('quiz_sessions').insert({
          user_id: user.id,
          level: params.get('level') || 'a2',
          mode: params.get('mode') || 'en-tr',
          status: 'in_progress'
        }).select().single();
        if (data) sessionId = data.id;
      }
    } catch (e) { /* silent */ }
  }

  async function saveWordResult(wordId, result) {
    if (!loggedInUser || !sessionId) return;
    try {
      const sb = getSupabase();
      await sb.from('word_results').insert({
        user_id: loggedInUser.id,
        session_id: sessionId,
        word_id: wordId,
        result: result
      });
      // For unknown words, star them too
      if (result === 'unknown') {
        await sb.from('study_words').upsert({
          user_id: loggedInUser.id,
          word_id: wordId,
          times_failed: 1,
          last_failed_at: new Date().toISOString(),
          mastered: false,
          starred: true
        }, { onConflict: 'user_id,word_id' });
      }
    } catch (e) { /* silent */ }
  }

  // Auto-star word on any wrong answer
  async function starWord(wordId) {
    if (!loggedInUser) return;
    try {
      const sb = getSupabase();
      await sb.from('study_words').upsert({
        user_id: loggedInUser.id,
        word_id: wordId,
        starred: true,
        last_failed_at: new Date().toISOString(),
        mastered: false
      }, { onConflict: 'user_id,word_id' });
    } catch (e) { /* silent */ }
  }

  // Toggle star (for results screen)
  window.toggleStar = async function (wordId, btn) {
    if (!loggedInUser) return;
    const sb = getSupabase();
    const isStarred = btn.classList.contains('starred');

    if (isStarred) {
      // Unstar
      await sb.from('study_words').update({ starred: false })
        .eq('user_id', loggedInUser.id).eq('word_id', wordId);
      btn.classList.remove('starred');
      btn.textContent = '☆';
    } else {
      // Star
      await sb.from('study_words').upsert({
        user_id: loggedInUser.id,
        word_id: wordId,
        starred: true,
        mastered: false
      }, { onConflict: 'user_id,word_id' });
      btn.classList.add('starred');
      btn.textContent = '★';
    }
  };

  async function saveSessionComplete() {
    if (!loggedInUser || !sessionId) return;
    try {
      // CLEAR CACHE TO RE-SYNC WITH DB
      sessionStorage.removeItem('cachedWordResults_' + loggedInUser.id);
      
      const sb = getSupabase();
      await sb.from('quiz_sessions').update({
        status: 'completed',
        first_try_count: stats.firstTry,
        retry_count: stats.retry,
        hard_count: stats.hard,
        unknown_count: stats.unknown,
        completed_at: new Date().toISOString()
      }).eq('id', sessionId);
    } catch (e) { /* silent */ }
  }

  // ===== SHUFFLE =====
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // ===== SHOW NEXT WORD =====
  function showNextWord() {
    if (queue.length === 0) {
      showResults();
      return;
    }

    currentItem = queue.shift();

    const questionWord = mode === 'en-tr' ? currentItem.word.en : currentItem.word.tr;
    document.getElementById('question-word').textContent = questionWord;

    const input = document.getElementById('answer-input');
    input.value = '';
    input.className = 'answer-input';
    input.disabled = false;
    input.focus();

    document.getElementById('feedback-message').className = 'feedback-message';
    document.getElementById('feedback-message').innerHTML = '';
    document.getElementById('continue-btn').className = 'continue-btn';
    document.getElementById('submit-btn').disabled = false;

    const badge = document.getElementById('attempt-badge');
    if (currentItem.attempt === 2) {
      badge.className = 'attempt-badge visible attempt-2';
      badge.textContent = '🔄 2. Deneme';
    } else if (currentItem.attempt === 3) {
      badge.className = 'attempt-badge visible attempt-3';
      badge.textContent = '⚠️ Son Deneme';
    } else {
      badge.className = 'attempt-badge';
      badge.textContent = '';
    }

    isWaiting = false;
  }

  // ===== CHECK ANSWER =====
  window.checkAnswer = function () {
    if (isWaiting || !currentItem) return;

    const input = document.getElementById('answer-input');
    const userAnswer = input.value.trim();

    if (userAnswer === '') {
      input.focus();
      return;
    }

    const correctAnswer = mode === 'en-tr' ? currentItem.word.tr : currentItem.word.en;
    const isCorrect = compareAnswers(userAnswer, correctAnswer);

    const feedback = document.getElementById('feedback-message');
    const continueBtn = document.getElementById('continue-btn');

    if (isCorrect) {
      input.className = 'answer-input correct';
      input.disabled = true;
      document.getElementById('submit-btn').disabled = true;

      feedback.className = 'feedback-message correct';
      feedback.innerHTML = '✅ Doğru!';

      if (currentItem.attempt === 1) {
        stats.firstTry++;
        wordLists.firstTry.push(currentItem.word);
        saveWordResult(currentItem.word.id, 'first_try');
      } else if (currentItem.attempt === 2) {
        stats.retry++;
        wordLists.retry.push(currentItem.word);
        saveWordResult(currentItem.word.id, 'retry');
      } else if (currentItem.attempt === 3) {
        stats.hard++;
        wordLists.hard.push(currentItem.word);
        saveWordResult(currentItem.word.id, 'hard');
      }

      completedWords++;
      updateProgress();
      updateStats();

      setTimeout(() => {
        showNextWord();
      }, 1000);

    } else {
      // ❌ WRONG — auto-star this word
      starWord(currentItem.word.id);

      input.className = 'answer-input wrong';
      input.disabled = true;
      document.getElementById('submit-btn').disabled = true;

      feedback.className = 'feedback-message wrong';
      feedback.innerHTML = `
        ❌ Yanlış!
        <span class="correct-answer">Doğru cevap: <strong>${escapeHtml(correctAnswer)}</strong></span>
      `;

      if (currentItem.attempt < 3) {
        const reinsertItem = {
          word: currentItem.word,
          attempt: currentItem.attempt + 1
        };
        const minPos = Math.min(3, queue.length);
        const maxPos = Math.min(10, queue.length);
        const insertPos = minPos + Math.floor(Math.random() * (maxPos - minPos + 1));
        queue.splice(insertPos, 0, reinsertItem);
      } else {
        stats.unknown++;
        wordLists.unknown.push(currentItem.word);
        saveWordResult(currentItem.word.id, 'unknown');
        completedWords++;
        updateProgress();
      }

      updateStats();
      continueBtn.className = 'continue-btn visible';
      isWaiting = true;
    }
  };

  // ===== COMPARE ANSWERS =====
  function compareAnswers(userAnswer, correctAnswer) {
    const normalize = mode === 'en-tr' ? normalizeTurkish : normalizeEnglish;
    const userNorm = normalize(userAnswer);
    const alternatives = correctAnswer.split(/\s*\/\s*/);
    for (const alt of alternatives) {
      const variants = generateVariants(alt);
      for (const variant of variants) {
        if (userNorm === normalize(variant)) return true;
      }
    }
    return false;
  }

  function generateVariants(text) {
    const variants = new Set();
    const trimmed = text.trim();
    variants.add(trimmed);
    const withoutParens = trimmed.replace(/\s*\([^)]*\)/g, '').replace(/\s+/g, ' ').trim();
    if (withoutParens) variants.add(withoutParens);
    const withContent = trimmed.replace(/\(([^)]*)\)/g, '$1').replace(/\s+/g, ' ').trim();
    variants.add(withContent);
    return [...variants];
  }

  function normalizeTurkish(str) {
    return str.trim()
      .replace(/İ/g, 'i').replace(/I/g, 'ı').replace(/Ğ/g, 'ğ')
      .replace(/Ü/g, 'ü').replace(/Ş/g, 'ş').replace(/Ö/g, 'ö').replace(/Ç/g, 'ç')
      .toLowerCase();
  }

  function normalizeEnglish(str) {
    return str.trim().toLowerCase();
  }

  // ===== NEXT WORD =====
  window.nextWord = function () {
    if (!isWaiting) return;
    showNextWord();
  };

  // ===== FINISH QUIZ EARLY =====
  window.finishQuiz = function () {
    if (completedWords === 0) return;
    if (!confirm(`${completedWords} kelime çözüldü. Testi sonuçlandırmak istediğinize emin misiniz?`)) return;
    queue = [];
    showResults();
  };

  // ===== UPDATE PROGRESS =====
  function updateProgress() {
    document.getElementById('progress-count').textContent = `${completedWords} / ${totalWords}`;
    const pct = (completedWords / totalWords) * 100;
    document.getElementById('progress-bar-fill').style.width = pct + '%';
  }

  // ===== UPDATE STATS =====
  function updateStats() {
    document.getElementById('stat-first').textContent = stats.firstTry;
    document.getElementById('stat-retry').textContent = stats.retry;
    document.getElementById('stat-hard').textContent = stats.hard;
    document.getElementById('stat-unknown').textContent = stats.unknown;
  }

  // ===== SHOW RESULTS =====
  function showResults() {
    document.getElementById('progress-section').style.display = 'none';
    document.getElementById('quiz-card').style.display = 'none';
    document.getElementById('stats-bar').style.display = 'none';
    document.getElementById('quiz-bottom-actions').style.display = 'none';

    document.getElementById('result-first').textContent = stats.firstTry;
    document.getElementById('result-retry').textContent = stats.retry;
    document.getElementById('result-hard').textContent = stats.hard;
    document.getElementById('result-unknown').textContent = stats.unknown;

    const total = stats.firstTry + stats.retry + stats.hard + stats.unknown;
    const successRate = total > 0 ? Math.round(((stats.firstTry + stats.retry + stats.hard) / total) * 100) : 0;
    
    const ds = new URLSearchParams(window.location.search).get('dataset');
    const labelSoru = ds === 'grammar' ? 'soru' : 'kelime';
    document.getElementById('results-subtitle').textContent =
      `${total} ${labelSoru} çözüldü — %${successRate} başarı oranı`;

    buildWordLists();
    saveSessionComplete();

    document.getElementById('results-screen').classList.add('visible');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ===== BUILD WORD LISTS =====
  function buildWordLists() {
    const container = document.getElementById('results-word-lists');
    container.innerHTML = '';

    const categories = [
      { key: 'firstTry', icon: '⚡', title: 'İlk Seferde Bilinen', colorClass: 'wl-first', words: wordLists.firstTry },
      { key: 'retry', icon: '🔄', title: 'Tekrarda Öğrenilen', colorClass: 'wl-retry', words: wordLists.retry },
      { key: 'hard', icon: '😓', title: 'Yapılamayan', colorClass: 'wl-hard', words: wordLists.hard },
      { key: 'unknown', icon: '❌', title: 'Bilinmiyor', colorClass: 'wl-unknown', words: wordLists.unknown }
    ];

    categories.forEach(cat => {
      if (cat.words.length === 0) return;

      const section = document.createElement('div');
      section.className = `word-list-section ${cat.colorClass}`;

      const header = document.createElement('div');
      header.className = 'word-list-header';
      header.innerHTML = `
        <div class="word-list-title">
          <span class="word-list-icon">${cat.icon}</span>
          <span>${escapeHtml(cat.title)}</span>
          <span class="word-list-count">${cat.words.length}</span>
        </div>
        <span class="word-list-toggle">▼</span>
      `;
      header.addEventListener('click', () => {
        const body = section.querySelector('.word-list-body');
        const toggle = header.querySelector('.word-list-toggle');
        body.classList.toggle('collapsed');
        toggle.textContent = body.classList.contains('collapsed') ? '▶' : '▼';
      });

      const body = document.createElement('div');
      body.className = 'word-list-body';

      cat.words.forEach(word => {
        const row = document.createElement('div');
        row.className = 'word-list-row';
        // Star button: auto-starred if not firstTry
        const isAutoStarred = cat.key !== 'firstTry';
        row.innerHTML = `
          <button class="star-btn ${isAutoStarred ? 'starred' : ''}" onclick="toggleStar(${word.id}, this)" title="Yıldızla">
            ${isAutoStarred ? '★' : '☆'}
          </button>
          <span class="word-en">${escapeHtml(word.en)}</span>
          <span class="word-separator">—</span>
          <span class="word-tr">${escapeHtml(word.tr)}</span>
        `;
        body.appendChild(row);
      });

      section.appendChild(header);
      section.appendChild(body);
      container.appendChild(section);
    });
  }

  // ===== RESTART =====
  window.restartQuiz = function () {
    completedWords = 0;
    stats.firstTry = 0;
    stats.retry = 0;
    stats.hard = 0;
    stats.unknown = 0;
    wordLists.firstTry = [];
    wordLists.retry = [];
    wordLists.hard = [];
    wordLists.unknown = [];
    currentItem = null;
    isWaiting = false;

    document.getElementById('progress-section').style.display = '';
    document.getElementById('quiz-card').style.display = '';
    document.getElementById('stats-bar').style.display = '';
    document.getElementById('quiz-bottom-actions').style.display = '';
    document.getElementById('results-screen').classList.remove('visible');

    const params = new URLSearchParams(window.location.search);
    let wordList;
    const dataset = params.get('dataset') || 'kurs';
    let selectedData = dataset === 'genel' ? WORDS_A2_GENEL : (dataset === 'grammar' ? WORDS_A2_GRAMMAR : WORDS_A2);

    if (isCustomQuiz) {
      const customIds = JSON.parse(localStorage.getItem('custom_quiz_ids') || '[]');
      wordList = ALL_WORDS_A2.filter(w => customIds.includes(w.id));
    } else {
      const level = params.get('level') || 'a2';
      wordList = level === 'a2' ? [...selectedData] : [];
      if (params.get('exclude') === 'true') {
        const excludeIds = JSON.parse(localStorage.getItem('exclude_quiz_ids') || '[]');
        wordList = wordList.filter(w => !excludeIds.includes(w.id));
      }
    }

    queue = wordList.map(w => ({ word: w, attempt: 1 }));
    shuffleArray(queue);

    updateProgress();
    updateStats();
    showNextWord();
  };

  // ===== ESCAPE HTML =====
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ===== START =====
  document.addEventListener('DOMContentLoaded', init);

})();
