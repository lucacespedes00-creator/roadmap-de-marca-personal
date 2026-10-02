import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace main app background
content = content.replace(/bg-\[\#09090b\]/g, 'bg-[#131313]');

// Replace sidebar background (we know the sidebar parts specifically)
content = content.replace(/bg-\[\#131313\] border border-white\/5 rounded-\[24px\]/g, 'bg-[#171717] border border-white/5 rounded-[24px]');
content = content.replace(/gap-0\.5 bg-\[\#131313\]/g, 'gap-0.5 bg-[#171717]');

fs.writeFileSync('src/App.tsx', content);
console.log('Colors changed');
