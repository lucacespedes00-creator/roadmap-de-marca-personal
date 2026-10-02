import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// 1. Add state
const stateHook = '  const [isModalOpen, setIsModalOpen] = useState(false);';
const newStateHook = `  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');`;
content = content.replace(stateHook, newStateHook);

// 2. Add Search Modal Component at the end of App component (before closing })
const searchModalCode = `
      {/* Search Modal */}
      {isSearchModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setIsSearchModalOpen(false)}>
          <div 
            className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl w-full max-w-2xl flex flex-col overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-4 border-b border-zinc-800">
              <Search size={20} className="text-zinc-400" />
              <input 
                autoFocus
                type="text" 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search pages..."
                className="flex-1 bg-transparent text-white outline-none placeholder-zinc-500 text-[15px]"
              />
              <div className="text-[10px] font-semibold text-zinc-500 bg-[#141414] px-1.5 py-0.5 rounded-md border border-white/10">ESC</div>
            </div>
            <div className="max-h-[60vh] overflow-y-auto custom-scrollbar p-2">
              {pages.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.id.toLowerCase().includes(searchQuery.toLowerCase())).map(page => (
                <div 
                  key={page.id}
                  onClick={() => {
                    setActivePageId(page.id);
                    setIsSearchModalOpen(false);
                    setSearchQuery('');
                  }}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 cursor-pointer transition-colors"
                >
                  <FileText size={16} className="text-zinc-500" />
                  <span className="text-zinc-300 text-[14px] font-medium">{page.title || 'Untitled'}</span>
                  {page.type !== 'custom' && (
                    <span className="ml-auto text-[11px] text-zinc-500 border border-white/10 px-1.5 py-0.5 rounded">Template</span>
                  )}
                </div>
              ))}
              {pages.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.id.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                <div className="p-8 text-center text-zinc-500 text-[14px]">
                  No pages found
                </div>
              )}
            </div>
          </div>
        </div>
      )}
`;

const modalEnd = `      {/* Modal de Plantillas */}`;
content = content.replace(modalEnd, searchModalCode + '\n      {/* Modal de Plantillas */}');

// 3. Update the search button to open the modal
const oldSearchBtn = `<div onClick={addPage} className="flex items-center justify-between px-3 py-2.5 bg-[#1F1F1F] hover:bg-[#2A2A2A] border border-white/5 rounded-[14px] cursor-pointer transition-colors group">`;
const newSearchBtn = `<div onClick={() => setIsSearchModalOpen(true)} className="flex items-center justify-between px-3 py-2.5 bg-[#1F1F1F] hover:bg-[#2A2A2A] border border-white/5 rounded-[14px] cursor-pointer transition-colors group">`;
content = content.replace(oldSearchBtn, newSearchBtn);

fs.writeFileSync('src/App.tsx', content);
console.log('Added search modal');
