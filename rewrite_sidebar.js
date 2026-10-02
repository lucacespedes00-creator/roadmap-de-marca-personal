import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

const sidebarStart = content.indexOf('{/* Sidebar */}');
const mainContentStart = content.indexOf('{/* Main Content Area */}');

if (sidebarStart !== -1 && mainContentStart !== -1) {
  const beforeSidebar = content.substring(0, sidebarStart);
  const afterSidebar = content.substring(mainContentStart);

  const newSidebar = `{/* Sidebar */}
      <div 
        className={\`fixed md:static inset-y-0 left-0 z-50 flex flex-col transition-transform duration-300 ease-in-out \${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0 md:w-0 md:opacity-0 md:overflow-hidden'
        }\`}
      >
        <div className="flex flex-col w-[260px] h-[calc(100vh-24px)] my-3 ml-3 bg-[#131313] border border-white/5 rounded-[24px] overflow-hidden shadow-2xl">
          <div className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-6">
            
            {/* Create or search */}
            <div className="flex items-center justify-between px-3 py-2.5 bg-[#1F1F1F] hover:bg-[#2A2A2A] border border-white/5 rounded-[14px] cursor-pointer transition-colors group">
              <div className="flex items-center gap-3 text-zinc-300">
                <Plus size={18} className="text-zinc-400" />
                <span className="text-[14px] font-medium text-zinc-200">Create or search</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-semibold text-zinc-500 bg-[#141414] px-1.5 py-0.5 rounded-md border border-white/10">
                <span>Ctrl</span><span>K</span>
              </div>
            </div>

            {/* Main Nav */}
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center justify-between px-3 py-2 text-zinc-400 hover:bg-white/5 hover:text-zinc-200 rounded-xl cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <Home size={18} strokeWidth={2} />
                  <span className="text-[14px] font-medium">Home</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-500">
                  <div className="w-3 h-3 rounded-full border-[2.5px] border-zinc-500/30 border-t-zinc-300"></div>
                  <span className="text-[12px] font-semibold">2/4</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-3 py-2 bg-[#2B2B2B] text-zinc-200 rounded-xl cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <Layers size={18} strokeWidth={2} />
                  <span className="text-[14px] font-medium">Library</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-3 py-2 text-zinc-400 hover:bg-white/5 hover:text-zinc-200 rounded-xl cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <Compass size={18} strokeWidth={2} />
                  <span className="text-[14px] font-medium">Discover</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-3 py-2 text-zinc-400 hover:bg-white/5 hover:text-zinc-200 rounded-xl cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-[18px] flex justify-center"><span className="tracking-widest font-bold text-[14px] -mt-2">...</span></div>
                  <span className="text-[14px] font-medium">More</span>
                </div>
              </div>
            </div>

            {/* Chats Section */}
            <div className="flex flex-col">
              <div 
                onClick={() => setTesisExpanded(!tesisExpanded)}
                className="text-[13px] font-medium text-zinc-500 mb-2 px-3 cursor-pointer hover:text-zinc-300 transition-colors"
              >
                Chats
              </div>
              {tesisExpanded && (
                <div className="flex flex-col gap-0.5">
                  {pages.filter(p => !p.parentId && p.section === 'tesis').length === 0 ? (
                    <div className="px-3 py-1">
                      <span className="text-[13px] text-zinc-600">No chats</span>
                    </div>
                  ) : (
                    pages.filter(p => !p.parentId && p.section === 'tesis').map((page) => (
                      <div 
                        key={page.id}
                        onClick={() => {
                          setActivePageId(page.id);
                          if (isMobile) setSidebarOpen(false);
                        }}
                        className={\`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer group transition-colors \${
                          activePageId === page.id ? 'bg-[#2B2B2B] text-zinc-200' : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200'
                        }\`}
                      >
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 ml-1"></div>
                          <span className="text-[14px] font-medium truncate">
                            {page.title || 'Nueva Página'}
                          </span>
                        </div>
                        <span className="text-[12px] font-medium text-[#C06C5A] opacity-90 group-hover:opacity-100 shrink-0">26 jun</span>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Boards Section */}
            <div className="flex flex-col">
              <div 
                onClick={() => setAprendizajesExpanded(!aprendizajesExpanded)}
                className="text-[13px] font-medium text-zinc-500 mb-2 px-3 cursor-pointer hover:text-zinc-300 transition-colors"
              >
                Boards
              </div>
              {aprendizajesExpanded && (
                <div className="flex flex-col gap-0.5">
                  {pages.filter(p => !p.parentId && p.section !== 'tesis').length === 0 ? (
                    <div className="px-3 py-1">
                      <span className="text-[13px] text-zinc-600">No boards</span>
                    </div>
                  ) : (
                    pages.filter(p => !p.parentId && p.section !== 'tesis').map((page) => (
                      <div 
                        key={page.id}
                        onClick={() => {
                          setActivePageId(page.id);
                          if (isMobile) setSidebarOpen(false);
                        }}
                        className={\`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer group transition-colors \${
                          activePageId === page.id ? 'bg-[#2B2B2B] text-zinc-200' : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200'
                        }\`}
                      >
                        <div className="flex items-center gap-3 overflow-hidden">
                          <LayoutGrid size={16} strokeWidth={2} className="text-zinc-500 ml-0.5" />
                          <span className="text-[14px] font-medium truncate">
                            {page.title || 'Nueva Página'}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="px-3 py-4 border-t border-white/5 flex flex-col gap-0.5 bg-[#131313]">
            <div className="flex items-center justify-between px-3 py-2 text-zinc-400 hover:bg-white/5 hover:text-zinc-200 rounded-xl cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <Compass size={18} strokeWidth={2} />
                <span className="text-[14px] font-medium">More from Eden</span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-500">
                <div className="w-3 h-3 rounded-full border-[2.5px] border-zinc-500/30"></div>
                <span className="text-[12px] font-semibold">0/5</span>
              </div>
            </div>
            <div className="flex items-center justify-between px-3 py-2 text-zinc-400 hover:bg-white/5 hover:text-zinc-200 rounded-xl cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <span className="text-[14px] font-medium">Academy</span>
              </div>
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-1"></div>
            </div>
            
            <div className="flex items-center justify-between px-2 py-2 mt-1 text-zinc-400 hover:bg-white/5 hover:text-zinc-200 rounded-xl cursor-pointer transition-colors group">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div className="w-6 h-6 rounded-full bg-[#2A2A2A] text-zinc-300 flex items-center justify-center text-[11px] font-semibold shrink-0">
                  L
                </div>
                <span className="text-[14px] font-medium truncate">Lucacesped...</span>
                <ChevronDown size={14} className="text-zinc-500" />
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <div className="p-1 hover:text-zinc-300 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/></svg>
                </div>
                <div className="p-1 hover:text-zinc-300 transition-colors">
                  <Trash2 size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      `;

  fs.writeFileSync('src/App.tsx', beforeSidebar + newSidebar + afterSidebar);
  console.log('Sidebar replaced');
} else {
  console.log('Failed to find sidebar boundaries');
}
