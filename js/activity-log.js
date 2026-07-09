// ===== USER ACTIVITY LOGGER =====
// Lightweight activity tracking for admin monitoring
// Usage: logActivity('quiz_completed', { dataset: 'kurs', mode: 'en-tr', score: '15/20' });

(function() {
  'use strict';

  window.logActivity = async function(action, details) {
    try {
      const userRaw = localStorage.getItem('english_time_user');
      if (!userRaw) return;
      const user = JSON.parse(userRaw);
      if (!user || !user.id) return;

      const sb = typeof getSupabase === 'function' ? getSupabase() : null;
      const logData = {
        user_id: user.id,
        action: action,
        details: typeof details === 'object' ? JSON.stringify(details) : (details || null),
        page: window.location.pathname.split('/').pop() || 'unknown'
      };

      if (!navigator.onLine) {
        if (typeof OfflineSync !== 'undefined') {
          OfflineSync.enqueue('user_activity_log', 'insert', logData);
        }
        return;
      }

      if (!sb) return;

      await sb.from('user_activity_log').insert(logData);
    } catch (e) {
      // Silent — activity logging should never break the app
    }
  };

})();
