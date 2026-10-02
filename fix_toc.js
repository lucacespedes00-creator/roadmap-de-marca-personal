import fs from 'fs';
let content = fs.readFileSync('src/components/TableOfContents.tsx', 'utf-8');

const oldHandleClick = `  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };`;

const newHandleClick = `  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };`;

content = content.replace(oldHandleClick, newHandleClick);
fs.writeFileSync('src/components/TableOfContents.tsx', content);
console.log('Fixed TOC');
