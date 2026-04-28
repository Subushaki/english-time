// Main page - Level & Mode selection logic

let currentLevel = '';
let currentDataset = '';

function selectLevel(level) {
  if (level !== 'a2') return;
  currentLevel = level;

  // Highlight selected level
  document.querySelectorAll('.level-card').forEach(card => card.classList.remove('active'));
  document.getElementById('level-' + level).classList.add('active');

  // Hide mode section if it was open
  document.getElementById('mode-section').classList.remove('visible');
  document.getElementById('mode-section').style.display = 'none';

  // Show dataset selection
  const datasetSection = document.getElementById('dataset-section');
  datasetSection.style.display = 'block';
  setTimeout(() => {
    datasetSection.classList.add('visible');
    datasetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 10);
}

let currentTimesFilter = '';

function selectDataset(dataset) {
  currentDataset = dataset;
  currentTimesFilter = ''; // reset filter
  
  if (dataset === 'grammar') {
    startQuiz('en-tr'); // Forced en-tr mapping where en=question tr=answer
    return;
  }

  // Highlight selected dataset card
  document.querySelectorAll('#dataset-section .mode-card').forEach(card => {
    card.classList.remove('active');
    card.style.borderColor = 'var(--glass-border)';
    card.style.background = 'var(--bg-card)';
  });
  const activeCard = document.getElementById('dataset-' + dataset);
  if (activeCard) {
    activeCard.classList.add('active');
    activeCard.style.borderColor = 'var(--accent-blue)';
    activeCard.style.background = 'rgba(59, 130, 246, 0.05)';
  }

  // Hide everything first
  document.getElementById('mode-section').style.display = 'none';
  document.getElementById('times-filter-section').style.display = 'none';
  document.getElementById('hour-filter-section').style.display = 'none';

  if (dataset === 'times') {
    const timesSection = document.getElementById('times-filter-section');
    timesSection.style.display = 'block';
    setTimeout(() => {
      timesSection.classList.add('visible');
      timesSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 10);
  } else {
    showModeSection();
  }
}

function selectTimesFilter(filter) {
  currentTimesFilter = filter;

  // Highlight times filter card (first un-highlight all)
  document.querySelectorAll('#times-filter-section .mode-card, #hour-filter-section .mode-card').forEach(card => {
    card.style.borderColor = 'var(--glass-border)';
    card.style.background = 'var(--bg-card)';
  });
  
  if (filter === 'am' || filter === 'pm') {
    // If AM or PM is selected, hide the hour section
    document.getElementById('hour-filter-section').style.display = 'none';
    
    const cards = document.querySelectorAll('#times-filter-section .mode-card');
    const idx = filter === 'am' ? 0 : 1;
    if(cards[idx]) {
      cards[idx].style.borderColor = 'var(--accent-blue)';
      cards[idx].style.background = 'rgba(59, 130, 246, 0.05)';
    }
  } else {
    // If specific hour is selected, KEEP the hour section visible!
    // But remove selection from am/pm cards
    const card = document.getElementById('hour-card-' + filter);
    if(card) {
      card.style.borderColor = 'var(--accent-blue)';
      card.style.background = 'rgba(59, 130, 246, 0.05)';
    }
  }

  showModeSection();
}

function showHourFilters() {
  const hourSection = document.getElementById('hour-filter-section');
  const hourGrid = document.getElementById('hour-grid');
  
  // Unselect am/pm cards visually
  document.querySelectorAll('#times-filter-section .mode-card').forEach(card => {
    card.style.borderColor = 'var(--glass-border)';
    card.style.background = 'var(--bg-card)';
  });
  
  if (hourGrid.children.length === 0) {
    for (let i = 0; i < 24; i++) {
      const hh = i.toString().padStart(2, '0');
      const nextHh = ((i+1)%24).toString().padStart(2, '0');
      hourGrid.innerHTML += `
        <a class="mode-card" id="hour-card-${hh}" href="#" onclick="selectTimesFilter('${hh}'); return false;" style="padding: 10px; min-height: 70px;">
          <h3 style="font-size: 1.1rem; margin-bottom: 2px;">${hh}:00</h3>
          <p style="font-size: 0.75rem; opacity: 0.8;">${hh}:59'a kadar</p>
        </a>
      `;
    }
  }
  
  hourSection.style.display = 'block';
  setTimeout(() => {
    hourSection.classList.add('visible');
    hourSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 10);
}

function showModeSection() {
  const modeSection = document.getElementById('mode-section');
  modeSection.style.display = 'block';
  setTimeout(() => {
    modeSection.classList.add('visible');
    modeSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 10);
}

// Intercept quiz start
async function startQuiz(mode) {
  // Check if user is logged in
  const user = await getCurrentUser();
  let url = `quiz.html?level=${currentLevel}&dataset=${currentDataset}&mode=${mode}`;
  if (currentDataset === 'times' && currentTimesFilter) {
    url += `&timesFilter=${currentTimesFilter}`;
  }

  if (!user || !user.id) {
    window.location.href = url;
    return;
  }

  // Fetch word results to see if there are known words
  // CHECK CACHE FOR INSTANT LOAD (1ST DEGREE PRIORITY)
  let wordResults = null;
  const cacheKey = 'cachedWordResults_' + user.id;
  const cachedData = sessionStorage.getItem(cacheKey);

  if (cachedData) {
    wordResults = JSON.parse(cachedData);
  } else {
    const sb = getSupabase();
    const res = await sb
      .from('word_results').select('word_id, result').eq('user_id', user.id);
    wordResults = res.data;
    if (wordResults && wordResults.length > 0) {
      sessionStorage.setItem(cacheKey, JSON.stringify(wordResults));
    }
  }

  if (!wordResults || wordResults.length === 0) {
    window.location.href = url;
    return;
  }

  const bestResults = {};
  wordResults.forEach(wr => {
    const priority = { first_try: 1, retry: 2, hard: 3, unknown: 4 };
    if (!bestResults[wr.word_id] || priority[wr.result] < priority[bestResults[wr.word_id]]) {
      bestResults[wr.word_id] = wr.result;
    }
  });

  const knownWordIds = Object.entries(bestResults)
    .filter(([_, r]) => r === 'first_try')
    .map(([id, _]) => parseInt(id));

  if (knownWordIds.length > 0) {
    const includeKnown = confirm(
      `Daha önceki quizlerde "İlk Seferde" bildiğiniz ${knownWordIds.length} kelime var.\n\nDaha önceki bildikleriniz bu quize dahil edilsin mi?\n\n- Tamam: Tüm kelimelerle başlatır\n- İptal: Sadece bilmediğin kelimelerle başlatır`
    );

    if (includeKnown) {
      window.location.href = url;
    } else {
      window.location.href = url + `&excludeKnown=true`;
    }
  } else {
    window.location.href = url;
  }
}
