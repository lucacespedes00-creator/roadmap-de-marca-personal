const fs = require('fs');
const code = fs.readFileSync('src/App.tsx', 'utf8');
const newCode = code.replace(
  "const parsedPages = JSON.parse(saved);",
  "let parsedPages = JSON.parse(saved);\n      parsedPages = parsedPages.filter((p: Page) => !['default_plan', 'default_etapa', 'default_contenido'].includes(p.type || ''));"
);
fs.writeFileSync('src/App.tsx', newCode);
