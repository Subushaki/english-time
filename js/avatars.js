// ===== AVATAR LIST =====
// Pinned: Orijinal hayvan avatarları her zaman üstte sabit kalır.
// Geri kalanlar kullanıcı popülerliğine göre sıralanır.

const PINNED_STATIC = [
  'fox.png', 'owl.png', 'cat.png', 'panda.png',
  'wolf.png', 'rabbit.png', 'dragon.png', 'penguin.png'
];

const ALL_STATIC = [
  // Pinned (sabit üst sıra)
  'fox.png', 'owl.png', 'cat.png', 'panda.png',
  'wolf.png', 'rabbit.png', 'dragon.png', 'penguin.png',
  // Diğer statik
  'cool_cat.png', 'glasses.png', 'troll_suit.png', 'awn.png',
  'gizli.png', 'iyi_gibi.png',
  '11621-coolguy.png', '11948-sadhamster.png',
  '14909-cutebunnylilyhat.png', '156329-smug.png',
  '16152-sadhamster-coquette.png', '1722-kirby-has-a-gun.png',
  '240586-sly.png', '2434-pepe-business.png',
  '300314-doakes.png', '3087-cj-smiling-face-with-tear.png',
  '429288-uwu.png', '43712-monikapleading.png',
  '440882-heartburn.png', '4632-ayo-what.png',
  '4649-kanadrinktbwc.png', '4768-kirbykill.png',
  '52284-cat-laughing-at-you.png', '531545-uwuemoji.png',
  '5881-excuse-me.png', '5911-peepowait.png',
  '6136-why.png', '6461-shrug.png',
  '66558-hellokittyplushie.png', '790458-headphones.png',
  '880038-wow.png', '9343-what-in-the-hell.png',
  '935247-ah.png', '946068-adoring.png'
];

const ALL_ANIMATED = [
  // --- Mevcut ---
  'catrave.gif', 'pepesaber.gif', 'pepevroom.gif',
  'pikacool.gif', 'vibingkirby.gif', 'duck.gif',
  'Burn.gif', 'lol.gif', 'crayz dance.gif', 'skeleton dance.gif',
  '1364-dancing-toothless.gif', '294751-craywave.gif',
  '5537_lil_swag.gif', '68736-hellokitty.gif',
  '7121-pinkkitty.gif', '7788-pikaomg.gif',
  '78005-hellokittywithtea.gif', '8730-kiss-you.gif',
  'pocoyo-dance-pocoyo.gif', 'pocoyo-pocoyo-dance.gif',
  'run-pocoyo.gif',
  // --- Yeni eklenenler (25 Nisan 2026) ---
  'WhatsApp Video 2026-04-30 at 22.36.37.mp4',
  '1000-yard-stare-cat-meme.gif',
  'amma-cat-ts-js-pmo-icl.gif',
  'angry-cat.gif',
  'ball-kitten-kitty.gif',
  'betrayal-phone.gif',
  'cat-cute-cat.gif',
  'cat-drinda.gif',
  'cat-kitty.gif',
  'cat-orange-cat.gif',
  'cat-scuba-cat.gif',
  'cat-you-play-like-a-cat.gif',
  'clash-royale-meme.gif',
  'cute-cats.gif',
  'cute-stare.gif',
  'dancing-dance.gif',
  'el-gato.gif',
  'freedom-mountains.gif',
  'gato-cat.gif',
  'gi-hun.gif',
  'hanna-ball-kitten-soft-fluffy-kitty-cat-paws.gif',
  'happy-cat.gif',
  'hello.gif',
  'i-guess-bro-i-guess.gif',
  'kitten-hearts.gif',
  'kitten-kitty.gif',
  'kitten-valcat.gif',
  'kitty-eepy.gif',
  'kitty-kitty-attack.gif',
  'lookup-interesing.gif',
  'meme-pensive.gif',
  'meme-random.gif',
  'mmmm-rico.gif',
  'monkey-monkey-thinking.gif',
  'nick-wilde-zootopia.gif',
  'penguin-penguins.gif',
  'pinguim-fofo.gif',
  'rapidtulip647-rt6.gif',
  'roblox-noob.gif',
  'sad-sad-cat.gif',
  'scoobert-mad-cat.gif',
  'scuba-scuba-dance.gif',
  'skipper-shocked.gif',
  'small-cat-cat-dance.gif',
  'sof-cat-cute.gif',
  'sonic-meme-sonic-looking.gif',
  'sonic-the-hedgehog-floss.gif',
  'sonic.gif',
  'swag-cat-swagbilli-cutecat-cats-cat-swag-ok-yooo-yo.gif',
  'wut-huh.gif'
];

// Geriye uyumluluk
const AVATAR_LIST = [...ALL_STATIC, ...ALL_ANIMATED].map(f => ({ file: f, name: f }));

const DEFAULT_AVATAR = null;

function getAvatarPath(filename) {
  if (!filename) return null;
  return 'avatars/' + filename;
}

window.getAvatarImgTag = function(filename, fallbackMode = 'text', username = '?') {
  const safeFile = filename ? filename.replace(/'/g, "\\'").replace(/"/g, "&quot;") : '';
  const safeName = username ? username.replace(/'/g, "\\'").replace(/"/g, "&quot;").charAt(0).toUpperCase() : '?';
  const onerrorStr = fallbackMode === 'hide' 
    ? `this.parentElement.style.display='none'`
    : `this.parentElement.textContent='${safeName}'`;

  if (safeFile.toLowerCase().endsWith('.mp4') || safeFile.toLowerCase().endsWith('.webm')) {
    return `<video src="avatars/${safeFile}" autoplay loop muted playsinline style="width:100%; height:100%; object-fit:cover; pointer-events:none; border-radius:inherit; background:transparent;"></video>`;
  } else {
    return `<img src="avatars/${safeFile}" loading="lazy" alt="" onerror="${onerrorStr}">`;
  }
};
