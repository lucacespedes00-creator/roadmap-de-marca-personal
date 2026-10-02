import fs from 'fs';
let content = fs.readFileSync('src/components/TableOfContents.tsx', 'utf-8');

const oldDiv = `className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex items-center transition-all duration-300 hidden lg:flex"`;
const newDiv = `className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex items-center transition-all duration-300 hidden lg:flex"`;
content = content.replace(oldDiv, newDiv);

fs.writeFileSync('src/components/TableOfContents.tsx', content);
