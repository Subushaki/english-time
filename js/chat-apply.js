// ===== CHAT APPLICATION FORM =====
(function() {
  'use strict';

  const MONTHS = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];

  const AGE_GROUPS = {
    young:  { label: '🟢 Genç (0-17)', color: '#10b981', icon: '🟢' },
    adult:  { label: '🔵 Yetişkin (18-32)', color: '#3b82f6', icon: '🔵' },
    mature: { label: '🟣 Olgun (33+)', color: '#8b5cf6', icon: '🟣' }
  };

  let currentStep = 1;
  let birthYear = null;
  let birthMonth = null;
  let sameAgePref = true;
  let currentUser = null;

  // ===== AGE CALCULATION =====
  function calculateAge(year, month) {
    const now = new Date();
    const cy = now.getFullYear();
    const cm = now.getMonth() + 1;
    let age = cy - year;
    if (cm < month) age--;
    return Math.max(0, age);
  }

  function getAgeGroup(age) {
    if (age <= 17) return 'young';
    if (age <= 32) return 'adult';
    return 'mature';
  }

  // ===== STEP NAVIGATION =====
  window.goStep = function(step) {
    // Validate before advancing
    if (step > currentStep) {
      if (currentStep === 1 && !validateStep1()) return;
      if (currentStep === 3 && !validateStep3()) return;
    }

    // If going to step 4, fill summary
    if (step === 4) fillSummary();

    currentStep = step;

    // Update step dots
    for (let i = 1; i <= 4; i++) {
      const dot = document.getElementById('dot-' + i);
      dot.classList.remove('active', 'done');
      if (i === step) dot.classList.add('active');
      else if (i < step) dot.classList.add('done');
    }

    // Show/hide steps
    document.querySelectorAll('.apply-step').forEach(el => el.classList.remove('active'));
    const target = document.getElementById('step-' + step);
    if (target) target.classList.add('active');
  };

  function validateStep1() {
    const yearEl = document.getElementById('birth-year');
    const y = parseInt(yearEl.value, 10);
    if (!y || y < 1926 || y > 2020) {
      yearEl.style.borderColor = 'var(--accent-red)';
      yearEl.focus();
      return false;
    }
    if (!birthMonth) {
      alert('Lütfen doğum ayınızı seçin.');
      return false;
    }
    return true;
  }

  function validateStep3() {
    const text = document.getElementById('motivation-text').value.trim();
    if (text.length < 20) {
      alert('Motivasyon metniniz en az 20 karakter olmalıdır.');
      return false;
    }
    return true;
  }

  function fillSummary() {
    const age = calculateAge(birthYear, birthMonth);
    const group = getAgeGroup(age);
    const groupInfo = AGE_GROUPS[group];

    document.getElementById('sum-birth').textContent = MONTHS[birthMonth - 1] + ' ' + birthYear;
    document.getElementById('sum-age').textContent = age + ' yaş';
    document.getElementById('sum-group').innerHTML = '<span style="color:' + groupInfo.color + '">' + groupInfo.label + '</span>';
    document.getElementById('sum-pref').textContent = sameAgePref ? 'Yaşıtlarımla' : 'Farketmez';
    document.getElementById('sum-motivation').textContent = document.getElementById('motivation-text').value.trim();
  }

  // ===== AGE PREFERENCE =====
  window.selectPref = function(value) {
    sameAgePref = value;
    document.getElementById('pref-yes').classList.toggle('selected', value);
    document.getElementById('pref-no').classList.toggle('selected', !value);
  };

  // ===== BIRTH YEAR & MONTH HANDLERS =====
  function updateAgePreview() {
    const yearEl = document.getElementById('birth-year');
    const y = parseInt(yearEl.value, 10);
    if (!y || y < 1926 || y > 2020 || !birthMonth) {
      document.getElementById('age-preview').style.display = 'none';
      document.getElementById('btn-step1').disabled = true;
      return;
    }

    birthYear = y;
    const age = calculateAge(birthYear, birthMonth);
    const group = getAgeGroup(age);
    const groupInfo = AGE_GROUPS[group];

    document.getElementById('age-display').textContent = age + ' yaş';
    document.getElementById('age-group-display').textContent = groupInfo.label;
    document.getElementById('age-group-display').style.color = groupInfo.color;
    document.getElementById('age-icon').textContent = groupInfo.icon;
    document.getElementById('age-preview').style.display = 'flex';
    document.getElementById('btn-step1').disabled = false;

    yearEl.style.borderColor = 'var(--glass-border)';
  }

  // ===== SUBMIT APPLICATION =====
  window.submitApplication = async function() {
    const btn = document.getElementById('btn-submit');
    btn.disabled = true;
    btn.textContent = 'Gönderiliyor...';

    try {
      const sb = getSupabase();
      const age = calculateAge(birthYear, birthMonth);
      const group = getAgeGroup(age);
      const motivation = document.getElementById('motivation-text').value.trim();

      // Insert application
      const { error: appErr } = await sb.from('chat_applications').insert({
        user_id: currentUser.id,
        birth_year: birthYear,
        birth_month: birthMonth,
        calculated_age: age,
        age_group: group,
        same_age_preference: sameAgePref,
        motivation: motivation
      });

      if (appErr) {
        if (appErr.code === '23505') {
          alert('Zaten bir başvurunuz mevcut!');
        } else {
          throw appErr;
        }
        btn.disabled = false;
        btn.textContent = '🚀 Başvur';
        return;
      }

      // Update profiles with birth info
      await sb.from('profiles').update({
        birth_year: birthYear,
        birth_month: birthMonth
      }).eq('id', currentUser.id);

      // Show success
      document.querySelectorAll('.apply-step').forEach(el => el.classList.remove('active'));
      document.querySelector('.step-indicator').style.display = 'none';

      const card = document.querySelector('.apply-card');
      const successDiv = document.createElement('div');
      successDiv.className = 'chat-status-screen';
      successDiv.innerHTML = `
        <div class="chat-status-icon">🎉</div>
        <div class="chat-status-title">Başvurun Gönderildi!</div>
        <div class="chat-status-desc">
          Admin ekibimiz başvurunu en kısa sürede değerlendirecek. 
          Onaylandığında bildirim alacaksın.
        </div>
        <a href="settings.html" class="apply-btn apply-btn-primary" style="margin-top: 16px; text-decoration: none; display: inline-block; max-width: 200px;">← Ayarlara Dön</a>
      `;
      card.appendChild(successDiv);

    } catch (e) {
      alert('Başvuru gönderilirken hata oluştu: ' + e.message);
      btn.disabled = false;
      btn.textContent = '🚀 Başvur';
    }
  };

  // ===== RE-APPLY (after rejection) =====
  window.reapply = async function() {
    try {
      const sb = getSupabase();
      await sb.from('chat_applications').delete().eq('user_id', currentUser.id);
      window.location.reload();
    } catch (e) {
      alert('Hata: ' + e.message);
    }
  };

  // ===== INIT =====
  document.addEventListener('DOMContentLoaded', async () => {
    const user = await getCurrentUser();
    if (!user) {
      window.location.href = 'login.html';
      return;
    }
    currentUser = user;

    const loading = document.getElementById('apply-loading');

    // Admin bypass — auto-approve and redirect
    if (user.is_admin) {
      if (!user.chat_approved) {
        try {
          const sb = getSupabase();
          await sb.from('profiles').update({ chat_approved: true }).eq('id', user.id);
        } catch(e) { /* silent */ }
      }
      loading.style.display = 'none';
      document.querySelector('.step-indicator').style.display = 'none';
      document.getElementById('apply-approved').style.display = 'block';
      return;
    }

    // Check if already approved
    if (user.chat_approved) {
      loading.style.display = 'none';
      document.querySelector('.step-indicator').style.display = 'none';
      document.getElementById('apply-approved').style.display = 'block';
      return;
    }

    // Check for existing application
    try {
      const sb = getSupabase();
      const { data } = await sb.from('chat_applications')
        .select('status')
        .eq('user_id', user.id)
        .maybeSingle();

      if (data) {
        loading.style.display = 'none';
        document.querySelector('.step-indicator').style.display = 'none';
        if (data.status === 'approved') {
          document.getElementById('apply-approved').style.display = 'block';
        } else if (data.status === 'rejected') {
          // Reddedilmiş — eski başvuruyu sil ve yeniden başvuru izni ver
          const card = document.querySelector('.apply-card');
          card.innerHTML = `
            <div class="chat-status-screen">
              <div class="chat-status-icon">❌</div>
              <div class="chat-status-title">Başvurunuz Reddedildi</div>
              <div class="chat-status-desc">Başvurunuz admin tarafından reddedildi. Dilersen tekrar başvurabilirsin.</div>
              <button class="apply-btn apply-btn-primary" style="margin-top: 16px; max-width: 240px;" onclick="reapply()">🔄 Tekrar Başvur</button>
              <a href="settings.html" class="apply-btn apply-btn-secondary" style="margin-top: 8px; text-decoration: none; display: inline-block; max-width: 200px;">← Ayarlara Dön</a>
            </div>
          `;
        } else {
          // Pending
          document.getElementById('apply-already').style.display = 'block';
        }
        return;
      }
    } catch (e) {
      // Table might not exist yet — proceed with form
    }

    // Show form
    loading.style.display = 'none';
    document.getElementById('step-1').classList.add('active');

    // Birth year input handler
    const yearInput = document.getElementById('birth-year');
    yearInput.addEventListener('input', updateAgePreview);

    // Month grid handler
    document.querySelectorAll('.month-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.month-btn').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        birthMonth = parseInt(this.getAttribute('data-month'), 10);
        updateAgePreview();
      });
    });

    // Motivation textarea handler
    const motivationEl = document.getElementById('motivation-text');
    const counterEl = document.getElementById('char-counter');
    motivationEl.addEventListener('input', function() {
      const len = this.value.length;
      counterEl.textContent = len + ' / 1000';
      counterEl.className = 'char-counter';
      if (len > 900) counterEl.classList.add('danger');
      else if (len > 700) counterEl.classList.add('warn');

      document.getElementById('btn-step3').disabled = len < 20;
    });
  });

})();
