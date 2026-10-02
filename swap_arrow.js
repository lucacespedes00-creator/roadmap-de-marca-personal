import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const oldArrowLeft = `<ArrowLeftRight size={16} className="cursor-pointer hover:text-zinc-300 transition-colors" onClick={() => {
                     if (!splitPageId) {
                       setSplitPageId(pages.find(p => p.id !== activePageId)?.id || activePageId);
                     } else {
                       setSplitPageId(null);
                     }
                  }} />`;

const newArrowLeft = `<ArrowLeftRight size={16} className="cursor-pointer hover:text-zinc-300 transition-colors" onClick={() => {
                     if (!splitPageId) {
                       setSplitPageId(pages.find(p => p.id !== activePageId)?.id || activePageId);
                     } else {
                       const currentActive = activePageId;
                       setActivePageId(splitPageId);
                       setSplitPageId(currentActive);
                     }
                  }} />`;

content = content.replace(oldArrowLeft, newArrowLeft);
fs.writeFileSync('src/App.tsx', content);
console.log('Fixed Swap Arrow');
