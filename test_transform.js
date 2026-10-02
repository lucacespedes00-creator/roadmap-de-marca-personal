import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Pane 1
const pane1 = `className=\`flex-1 flex flex-col bg-[#171717] border border-white/5 rounded-[24px] overflow-hidden shadow-2xl transition-all duration-300 \${splitPageId ? 'hidden md:flex' : 'flex'}\``;
const newPane1 = `className=\`flex-1 flex flex-col bg-[#171717] border border-white/5 rounded-[24px] overflow-hidden shadow-2xl transition-all duration-300 transform-gpu \${splitPageId ? 'hidden md:flex' : 'flex'}\``;
content = content.replace(pane1, newPane1);

// Pane 2
const pane2 = `className="flex-1 flex flex-col bg-[#171717] border border-white/5 rounded-[24px] overflow-hidden shadow-2xl animate-in slide-in-from-right-8 duration-300 hidden md:flex"`;
const newPane2 = `className="flex-1 flex flex-col bg-[#171717] border border-white/5 rounded-[24px] overflow-hidden shadow-2xl animate-in slide-in-from-right-8 duration-300 transform-gpu hidden md:flex"`;
content = content.replace(pane2, newPane2);

fs.writeFileSync('src/App.tsx', content);
