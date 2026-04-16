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
  'catrave.gif', 'pepesaber.gif', 'pepevroom.gif',
  'pikacool.gif', 'vibingkirby.gif', 'duck.gif',
  'Burn.gif', 'lol.gif', 'crayz dance.gif', 'skeleton dance.gif',
  '1364-dancing-toothless.gif', '294751-craywave.gif',
  '5537_lil_swag.gif', '68736-hellokitty.gif',
  '7121-pinkkitty.gif', '7788-pikaomg.gif',
  '78005-hellokittywithtea.gif', '8730-kiss-you.gif',
  'pocoyo-dance-pocoyo.gif', 'pocoyo-pocoyo-dance.gif',
  'run-pocoyo.gif'
];

// Geriye uyumluluk
const AVATAR_LIST = [...ALL_STATIC, ...ALL_ANIMATED].map(f => ({ file: f, name: f }));

const DEFAULT_AVATAR = null;

function getAvatarPath(filename) {
  if (!filename) return null;
  return 'avatars/' + filename;
}
