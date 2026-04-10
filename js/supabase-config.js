// ===== SUPABASE CONFIG =====
const SUPABASE_URL = 'https://oumhweoxhzziufhasxch.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_6-E4OcLYRBTwojZikBm0dQ_15ODz92L';

let _supabaseClient = null;

function getSupabase() {
  if (!_supabaseClient && window.supabase) {
    _supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return _supabaseClient;
}
