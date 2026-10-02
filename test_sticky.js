import fs from 'fs';
let content = fs.readFileSync('src/components/TableOfContents.tsx', 'utf-8');

const oldDiv = `className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex items-center transition-all duration-300 h-screen hidden lg:flex"`;
const newDiv = `className="sticky top-[50vh] -translate-y-1/2 float-right right-2 z-50 flex items-center transition-all duration-300 h-0 hidden lg:flex"`;

content = content.replace(oldDiv, newDiv);
fs.writeFileSync('src/components/TableOfContents.tsx', content);
