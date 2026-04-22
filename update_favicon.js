const fs = require('fs');
const path = require('path');
const dir = 'c:\\Users\\Scumy\\Desktop\\ENGLISH TIME';

const favicons = `
  <!-- PWA & Favicon -->
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📚</text></svg>">
  <link rel="apple-touch-icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📚</text></svg>">
</head>`;

fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.html')) {
        const p = path.join(dir, file);
        let c = fs.readFileSync(p, 'utf8');
        // If already added, skip it
        if (!c.includes('rel="apple-touch-icon"')) {
            c = c.replace('</head>', favicons);
            fs.writeFileSync(p, c, 'utf8');
            console.log(file + ' updated with favicon');
        }
    }
});
