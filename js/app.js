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
