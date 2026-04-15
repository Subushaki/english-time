// ===== AVATAR LIST =====
// Bu dosyaya avatars/ klasöründeki dosya isimlerini ekleyin.
// Kullanıcılar bu listeden profil resmi seçebilir.
// Yeni avatar ekledikçe bu listeyi güncellemeyi unutmayın.

const AVATAR_LIST = [
  { file: 'fox.png', name: 'Tilki' },
  { file: 'owl.png', name: 'Baykuş' },
  { file: 'cat.png', name: 'Kedi' },
  { file: 'panda.png', name: 'Panda' },
  { file: 'wolf.png', name: 'Kurt' },
  { file: 'rabbit.png', name: 'Tavşan' },
  { file: 'dragon.png', name: 'Ejderha' },
  { file: 'penguin.png', name: 'Penguen' }
];

// Varsayılan avatar (hiç seçilmediyse)
const DEFAULT_AVATAR = null; // null = emoji harfi gösterilir

// Avatar dosyasının tam yolunu döndür
function getAvatarPath(filename) {
  if (!filename) return null;
  return 'avatars/' + filename;
}
