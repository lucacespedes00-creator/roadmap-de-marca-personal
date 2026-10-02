import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');
if (!content.includes('ArrowLeftRight,')) {
  content = content.replace('Maximize2,', 'Maximize2, ArrowLeftRight,');
  fs.writeFileSync('src/App.tsx', content);
  console.log('Fixed');
}
