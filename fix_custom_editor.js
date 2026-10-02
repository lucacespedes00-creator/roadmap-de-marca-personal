import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');
const breadcrumbRegex = /<div className="flex items-center gap-2 text-\[13px\] text-zinc-500 mb-8 font-medium">[\s\S]*?<\/div>/;
content = content.replace(breadcrumbRegex, '');
fs.writeFileSync('src/App.tsx', content);
