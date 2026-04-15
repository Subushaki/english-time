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

function selectDataset(dataset) {
  currentDataset = dataset;
  
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
  activeCard.classList.add('active');
  activeCard.style.borderColor = 'var(--accent-blue)';
  activeCard.style.background = 'rgba(59, 130, 246, 0.05)';

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
  if (!user || !user.id) {
    window.location.href = `quiz.html?level=${currentLevel}&dataset=${currentDataset}&mode=${mode}`;
    return;
  }

  // Fetch word results to see if there are known words
  const sb = getSupabase();
  const { data: wordResults } = await sb
    .from('word_results').select('word_id, result').eq('user_id', user.id);

  if (!wordResults || wordResults.length === 0) {
    window.location.href = `quiz.html?level=${currentLevel}&dataset=${currentDataset}&mode=${mode}`;
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

    if (!includeKnown) {
      // Exclude logic
      localStorage.setItem('exclude_quiz_ids', JSON.stringify(knownWordIds));
      window.location.href = `quiz.html?level=${currentLevel}&dataset=${currentDataset}&mode=${mode}&exclude=true`;
      return;
    }
  }

  // Regular start
  window.location.href = `quiz.html?level=${currentLevel}&dataset=${currentDataset}&mode=${mode}`;
}
