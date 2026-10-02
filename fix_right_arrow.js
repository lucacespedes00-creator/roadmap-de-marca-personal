import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');
const oldRightArrow = `<ArrowLeftRight size={16} className="cursor-pointer hover:text-zinc-300 transition-colors" />
                  <X size={18} className="cursor-pointer hover:text-zinc-300 transition-colors ml-2" onClick={() => setSplitPageId(null)} />`;
const newRightArrow = `<ArrowLeftRight size={16} className="cursor-pointer hover:text-zinc-300 transition-colors" onClick={() => {
                    const currentActive = activePageId;
                    setActivePageId(splitPageId!);
                    setSplitPageId(currentActive);
                  }} />
                  <X size={18} className="cursor-pointer hover:text-zinc-300 transition-colors ml-2" onClick={() => setSplitPageId(null)} />`;
content = content.replace(oldRightArrow, newRightArrow);
fs.writeFileSync('src/App.tsx', content);
console.log('Fixed Right Arrow');
