import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');
const createStr = `<div className="flex items-center justify-between px-3 py-2.5 bg-[#1F1F1F] hover:bg-[#2A2A2A] border border-white/5 rounded-[14px] cursor-pointer transition-colors group">
              <div className="flex items-center gap-3 text-zinc-300">
                <Plus size={18} className="text-zinc-400" />
                <span className="text-[14px] font-medium text-zinc-200">Create or search</span>`;
const newCreateStr = `<div onClick={addPage} className="flex items-center justify-between px-3 py-2.5 bg-[#1F1F1F] hover:bg-[#2A2A2A] border border-white/5 rounded-[14px] cursor-pointer transition-colors group">
              <div className="flex items-center gap-3 text-zinc-300">
                <Plus size={18} className="text-zinc-400" />
                <span className="text-[14px] font-medium text-zinc-200">Create or search</span>`;
content = content.replace(createStr, newCreateStr);
fs.writeFileSync('src/App.tsx', content);
