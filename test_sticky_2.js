import fs from 'fs';
let content = fs.readFileSync('src/components/TableOfContents.tsx', 'utf-8');

const oldDiv = `className="sticky top-[50vh] -translate-y-1/2 float-right right-2 z-50 flex items-center transition-all duration-300 h-0 hidden lg:flex"`;
const newDiv = `className="sticky top-[50%] -translate-y-1/2 float-right right-2 z-50 flex items-center transition-all duration-300 h-0 hidden lg:flex"`;
// Wait, top-[50%] relative to the scrolling container will just be 50% of the container's height. 

content = content.replace(oldDiv, newDiv);
fs.writeFileSync('src/components/TableOfContents.tsx', content);
