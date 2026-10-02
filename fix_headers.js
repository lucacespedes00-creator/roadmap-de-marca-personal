import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace left pane header
const leftHeaderRegex = /<div className="h-14 flex items-center justify-between px-6 shrink-0 border-b border-transparent">[\s\S]*?<div className="flex items-center gap-4 text-zinc-500">/;
content = content.replace(leftHeaderRegex, `<div className="h-14 flex items-center justify-between px-6 shrink-0 border-b border-transparent">
            <div className="flex items-center gap-2 text-zinc-400">
              {isMobile && (
                <button 
                  onClick={() => setSidebarOpen(true)}
                  className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-zinc-400 hover:text-white mr-2"
                >
                  <Menu size={18} />
                </button>
              )}
              {activePage?.parentId && (
                <button 
                  onClick={() => setActivePageId(activePage.parentId!)}
                  className="p-1.5 hover:bg-white/10 rounded-md transition-colors hover:text-white"
                >
                  <ArrowRight size={16} className="rotate-180" />
                </button>
              )}
              <span className="text-[14px] font-medium ml-1 text-zinc-300">{activePage?.title || 'Document'}</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-500">`);

// Replace right pane header
const rightHeaderRegex = /<div className="h-14 flex items-center justify-between px-6 shrink-0 border-b border-transparent">\s*<div className="flex items-center gap-2 text-zinc-400">\s*<\/div>\s*<div className="flex items-center gap-4 text-zinc-500">/;
content = content.replace(rightHeaderRegex, `<div className="h-14 flex items-center justify-between px-6 shrink-0 border-b border-transparent">
                <div className="flex items-center gap-2 text-zinc-400">
                  {splitPage?.parentId && (
                    <button 
                      onClick={() => setSplitPageId(splitPage.parentId!)}
                      className="p-1.5 hover:bg-white/10 rounded-md transition-colors hover:text-white"
                    >
                      <ArrowRight size={16} className="rotate-180" />
                    </button>
                  )}
                  <span className="text-[14px] font-medium ml-1 text-zinc-300">{splitPage?.title || 'Document'}</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-500">`);

fs.writeFileSync('src/App.tsx', content);
console.log('Headers updated');
