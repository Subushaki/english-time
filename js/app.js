// Main page - Level & Mode selection logic

function selectLevel(level) {
  if (level !== 'a2') return;

  // Highlight selected level
  document.querySelectorAll('.level-card').forEach(card => card.classList.remove('active'));
  document.getElementById('level-' + level).classList.add('active');

  // Show mode selection
  const modeSection = document.getElementById('mode-section');
  modeSection.classList.add('visible');

  // Smooth scroll to mode section
  setTimeout(() => {
    modeSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}
// Intercept quiz start
async function startQuiz(mode) {
  // Check if user is logged in
  const user = await getCurrentUser();
  if (!user || !user.id) {
    window.location.href = `quiz.html?level=a2&mode=${mode}`;
    return;
  }

  // Fetch word results to see if there are known words
  const sb = getSupabase();
  const { data: wordResults } = await sb
    .from('word_results').select('word_id, result').eq('user_id', user.id);

  if (!wordResults || wordResults.length === 0) {
    window.location.href = `quiz.html?level=a2&mode=${mode}`;
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
      window.location.href = `quiz.html?level=a2&mode=${mode}&exclude=true`;
      return;
    }
  }

  // Regular start
  window.location.href = `quiz.html?level=a2&mode=${mode}`;
}
