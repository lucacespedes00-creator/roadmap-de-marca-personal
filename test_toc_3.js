import fs from 'fs';
let content = fs.readFileSync('src/components/TableOfContents.tsx', 'utf-8');

const oldDiv = `className="sticky top-[50%] -translate-y-1/2 float-right right-2 z-50 flex items-center transition-all duration-300 h-0 hidden lg:flex"`;
const newDiv = `className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex items-center transition-all duration-300 hidden lg:flex"`;
content = content.replace(oldDiv, newDiv);

// Also let's fix the popup position so it doesn't get clipped. If it's absolute right-12, it should be fine.
fs.writeFileSync('src/components/TableOfContents.tsx', content);
