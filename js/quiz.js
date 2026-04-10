// ===== QUIZ ENGINE =====
// 3-attempt system with retry queue + word tracking

(function () {
  'use strict';

  // ===== STATE =====
  let queue = [];          // Main question queue: { word, attempt }
  let totalWords = 0;      // Total unique words
  let completedWords = 0;  // Words fully resolved (correct or 3x wrong)
  let currentItem = null;  // Current queue item
  let isWaiting = false;   // Waiting for "Continue" click after wrong answer

  // Mode: 'en-tr' or 'tr-en'
  let mode = 'en-tr';

  // Stats
  const stats = {
    firstTry: 0,   // Correct on attempt 1
    retry: 0,      // Correct on attempt 2
    hard: 0,       // Correct on attempt 3
    unknown: 0     // Failed all 3 attempts
  };

  // Word tracking: categorized lists for results screen
  const wordLists = {
    firstTry: [],  // { en, tr }
    retry: [],
    hard: [],
    unknown: []
  };

  // ===== INIT =====
  function init() {
    // Parse URL params
    const params = new URLSearchParams(window.location.search);
    mode = params.get('mode') || 'en-tr';
    const level = params.get('level') || 'a2';

    // Get word list
    let wordList;
    if (level === 'a2') {
      wordList = WORDS_A2;
    } else {
      alert('Bu seviye henüz eklenmedi!');
      window.location.href = 'index.html';
      return;
    }

    totalWords = wordList.length;

    // Set UI labels
    if (mode === 'en-tr') {
      document.getElementById('progress-mode-label').textContent = '🇬🇧 İngilizce → Türkçe 🇹🇷';
      document.getElementById('question-label').textContent = 'İNGİLİZCE';
      document.getElementById('answer-label').textContent = 'TÜRKÇE KARŞILIĞI';
      document.getElementById('answer-input').placeholder = 'Türkçe anlamını yazın...';
    } else {
      document.getElementById('progress-mode-label').textContent = '🇹🇷 Türkçe → İngilizce 🇬🇧';
      document.getElementById('question-label').textContent = 'TÜRKÇE';
      document.getElementById('answer-label').textContent = 'İNGİLİZCE KARŞILIĞI';
      document.getElementById('answer-input').placeholder = 'İngilizce karşılığını yazın...';
    }

    // Build queue with Fisher-Yates shuffle
    queue = wordList.map(w => ({ word: w, attempt: 1 }));
    shuffleArray(queue);

    // Update progress
    updateProgress();

    // Show first word
    showNextWord();

    // Enter key listener
    document.getElementById('answer-input').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        if (isWaiting) {
          nextWord();
        } else {
          checkAnswer();
        }
      }
    });
  }

  // ===== SHUFFLE (Fisher-Yates) =====
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

    // Reset input
    const input = document.getElementById('answer-input');
    input.value = '';
    input.className = 'answer-input';
    input.disabled = false;
    input.focus();

    // Reset feedback
    document.getElementById('feedback-message').className = 'feedback-message';
    document.getElementById('feedback-message').innerHTML = '';
    document.getElementById('continue-btn').className = 'continue-btn';
    document.getElementById('submit-btn').disabled = false;

    // Show attempt badge if retry
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

    // Compare: case-insensitive with proper locale
    const isCorrect = compareAnswers(userAnswer, correctAnswer);

    const feedback = document.getElementById('feedback-message');
    const continueBtn = document.getElementById('continue-btn');

    if (isCorrect) {
      // ✅ CORRECT
      input.className = 'answer-input correct';
      input.disabled = true;
      document.getElementById('submit-btn').disabled = true;

      feedback.className = 'feedback-message correct';
      feedback.innerHTML = '✅ Doğru!';

      // Record stat and word based on attempt number
      if (currentItem.attempt === 1) {
        stats.firstTry++;
        wordLists.firstTry.push(currentItem.word);
      } else if (currentItem.attempt === 2) {
        stats.retry++;
        wordLists.retry.push(currentItem.word);
      } else if (currentItem.attempt === 3) {
        stats.hard++;
        wordLists.hard.push(currentItem.word);
      }

      completedWords++;
      updateProgress();
      updateStats();

      // Auto-advance after 1 second
      setTimeout(() => {
        showNextWord();
      }, 1000);

    } else {
      // ❌ WRONG
      input.className = 'answer-input wrong';
      input.disabled = true;
      document.getElementById('submit-btn').disabled = true;

      feedback.className = 'feedback-message wrong';
      feedback.innerHTML = `
        ❌ Yanlış!
        <span class="correct-answer">Doğru cevap: <strong>${escapeHtml(correctAnswer)}</strong></span>
      `;

      if (currentItem.attempt < 3) {
        // Re-insert into queue at a random position (3-10 words ahead)
        const reinsertItem = {
          word: currentItem.word,
          attempt: currentItem.attempt + 1
        };
        const minPos = Math.min(3, queue.length);
        const maxPos = Math.min(10, queue.length);
        const insertPos = minPos + Math.floor(Math.random() * (maxPos - minPos + 1));
        queue.splice(insertPos, 0, reinsertItem);
      } else {
        // 3rd attempt failed — mark as unknown
        stats.unknown++;
        wordLists.unknown.push(currentItem.word);
        completedWords++;
        updateProgress();
      }

      updateStats();

      // Show continue button
      continueBtn.className = 'continue-btn visible';
      isWaiting = true;
    }
  };

  // ===== COMPARE ANSWERS =====
  function compareAnswers(userAnswer, correctAnswer) {
    if (mode === 'en-tr') {
      // Turkish comparison: use Turkish locale
      return normalizeTurkish(userAnswer) === normalizeTurkish(correctAnswer);
    } else {
      // English comparison: standard lowercase
      return userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
    }
  }

  function normalizeTurkish(str) {
    // Proper Turkish case handling
    return str
      .trim()
      .replace(/İ/g, 'i')
      .replace(/I/g, 'ı')
      .replace(/Ğ/g, 'ğ')
      .replace(/Ü/g, 'ü')
      .replace(/Ş/g, 'ş')
      .replace(/Ö/g, 'ö')
      .replace(/Ç/g, 'ç')
      .toLowerCase();
  }

  // ===== NEXT WORD (after wrong answer) =====
  window.nextWord = function () {
    if (!isWaiting) return;
    showNextWord();
  };

  // ===== FINISH QUIZ EARLY =====
  window.finishQuiz = function () {
    if (completedWords === 0) {
      // Nothing done yet, don't allow
      return;
    }
    // Confirm
    if (!confirm(`${completedWords} kelime çözüldü. Testi sonuçlandırmak istediğinize emin misiniz?`)) {
      return;
    }
    // Clear remaining queue
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
    // Hide quiz elements
    document.getElementById('progress-section').style.display = 'none';
    document.getElementById('quiz-card').style.display = 'none';
    document.getElementById('stats-bar').style.display = 'none';
    document.getElementById('quiz-bottom-actions').style.display = 'none';

    // Populate results
    document.getElementById('result-first').textContent = stats.firstTry;
    document.getElementById('result-retry').textContent = stats.retry;
    document.getElementById('result-hard').textContent = stats.hard;
    document.getElementById('result-unknown').textContent = stats.unknown;

    // Subtitle
    const total = stats.firstTry + stats.retry + stats.hard + stats.unknown;
    const successRate = total > 0 ? Math.round(((stats.firstTry + stats.retry + stats.hard) / total) * 100) : 0;
    document.getElementById('results-subtitle').textContent =
      `${total} kelime çözüldü — %${successRate} başarı oranı`;

    // Build word lists
    buildWordLists();

    // Show results
    document.getElementById('results-screen').classList.add('visible');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ===== BUILD WORD LISTS =====
  function buildWordLists() {
    const container = document.getElementById('results-word-lists');
    container.innerHTML = '';

    const categories = [
      {
        key: 'firstTry',
        icon: '⚡',
        title: 'İlk Seferde Bilinen',
        colorClass: 'wl-first',
        words: wordLists.firstTry
      },
      {
        key: 'retry',
        icon: '🔄',
        title: 'Tekrarda Öğrenilen',
        colorClass: 'wl-retry',
        words: wordLists.retry
      },
      {
        key: 'hard',
        icon: '😓',
        title: 'Yapılamayan',
        colorClass: 'wl-hard',
        words: wordLists.hard
      },
      {
        key: 'unknown',
        icon: '❌',
        title: 'Bilinmiyor',
        colorClass: 'wl-unknown',
        words: wordLists.unknown
      }
    ];

    categories.forEach(cat => {
      if (cat.words.length === 0) return; // Skip empty categories

      const section = document.createElement('div');
      section.className = `word-list-section ${cat.colorClass}`;

      // Header with toggle
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
        if (body.classList.contains('collapsed')) {
          body.classList.remove('collapsed');
          toggle.textContent = '▼';
        } else {
          body.classList.add('collapsed');
          toggle.textContent = '▶';
        }
      });

      // Body (word table)
      const body = document.createElement('div');
      body.className = 'word-list-body';

      cat.words.forEach(word => {
        const row = document.createElement('div');
        row.className = 'word-list-row';
        row.innerHTML = `
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
    // Reset everything
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

    // Show quiz elements again
    document.getElementById('progress-section').style.display = '';
    document.getElementById('quiz-card').style.display = '';
    document.getElementById('stats-bar').style.display = '';
    document.getElementById('quiz-bottom-actions').style.display = '';
    document.getElementById('results-screen').classList.remove('visible');

    // Re-shuffle and start
    const level = new URLSearchParams(window.location.search).get('level') || 'a2';
    let wordList = level === 'a2' ? WORDS_A2 : [];
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
