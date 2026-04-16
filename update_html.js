const fs = require('fs');
const path = require('path');
const dir = 'c:\\Users\\Scumy\\Desktop\\ENGLISH TIME';

const block = `
  <!-- Preconnect & Network Observer -->
  <link rel="preconnect" href="https://oumhweoxhzziufhasxch.supabase.co" crossorigin>
  <link rel="dns-prefetch" href="https://oumhweoxhzziufhasxch.supabase.co">
  <script src="js/optimize.js"></script>
  <!-- Vercel Analytics -->`;

fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.html')) {
        const p = path.join(dir, file);
        let c = fs.readFileSync(p, 'utf8');
        if (!c.includes('js/optimize.js')) {
            c = c.replace('<!-- Vercel Analytics -->', block);
            fs.writeFileSync(p, c, 'utf8');
            console.log(file + ' updated');
        }
    }
});
