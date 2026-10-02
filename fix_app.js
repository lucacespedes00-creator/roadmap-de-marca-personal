import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf8');
code = code.split(`<AreaItem \n          icon={BarChart} \n          title=\"Arquitectura GTM\" \n          desc=\"Estrategia Go to Market para B2B\" \n          onClick={() => setActivePageId('linkedin_insight_gtm')} \n        />\n        <AreaItem `).join('<AreaItem ');
fs.writeFileSync('src/App.tsx', code);
