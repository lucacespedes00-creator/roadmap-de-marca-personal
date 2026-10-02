import fs from 'fs';

let code = fs.readFileSync('src/App.tsx', 'utf8');

const targetSection = `          <div className="text-[11px] font-bold text-zinc-500 tracking-[0.15em] mb-3 px-3 mt-4">
            TESIS
          </div>
          <div className="px-3 mb-6">
            <span className="text-[13px] text-zinc-500 italic">No hay páginas</span>
          </div>

          <div className="text-[11px] font-bold text-zinc-500 tracking-[0.15em] mb-3 px-3 mt-4">
            APRENDIZAJES
          </div>
          
          <div className="flex flex-col gap-0.5">
            {pages.filter(p => !p.parentId).map((page) => (
              <React.Fragment key={page.id}>
                <div 
                  onClick={() => {
                    setActivePageId(page.id);
                    if (isMobile) setSidebarOpen(false);
                  }}
                  className={\`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer group transition-colors \${
                    activePageId === page.id ? 'bg-[#27272A]/60 text-white' : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200'
                  }\`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className={\`\${activePageId === page.id ? 'text-zinc-300' : 'text-zinc-500'}\`}>
                      {getPageIcon(page.type)}
                    </div>
                    <span className="text-[14px] font-medium truncate">
                      {page.title || 'Nueva Página'}
                    </span>
                  </div>
                  {page.type === 'custom' && (
                    <button 
                      onClick={(e) => deletePage(e, page.id)}
                      className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded-md transition-all text-zinc-500 hover:text-red-400"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
                {pages.filter(child => child.parentId === page.id).map(child => (
                  <div 
                    key={child.id}
                    onClick={() => {
                      setActivePageId(child.id);
                      if (isMobile) setSidebarOpen(false);
                    }}
                    className={\`flex items-center justify-between pl-9 pr-3 py-1.5 rounded-lg cursor-pointer group transition-colors \${
                      activePageId === child.id ? 'bg-[#27272A]/60 text-white' : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200'
                    }\`}
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <div className={\`\${activePageId === child.id ? 'text-zinc-300' : 'text-zinc-500'}\`}>
                        {getPageIcon(child.type)}
                      </div>
                      <span className="text-[13.5px] font-medium truncate">
                        {child.title || 'Nueva Página'}
                      </span>
                    </div>
                    {child.type === 'custom' && (
                      <button 
                        onClick={(e) => deletePage(e, child.id)}
                        className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded-md transition-all text-zinc-500 hover:text-red-400"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>`;

const replacement = `          <div 
            onClick={() => setTesisExpanded(!tesisExpanded)}
            className="flex items-center justify-between text-[11px] font-bold text-zinc-500 tracking-[0.15em] mb-3 px-3 mt-4 cursor-pointer group hover:text-zinc-300 transition-colors"
          >
            <span>TESIS</span>
            <ChevronDown size={14} className={\`transition-transform duration-200 \${!tesisExpanded ? '-rotate-90' : ''}\`} />
          </div>
          {tesisExpanded && (
            <div className="px-3 mb-6">
              <span className="text-[13px] text-zinc-500 italic">No hay páginas</span>
            </div>
          )}

          <div 
            onClick={() => setAprendizajesExpanded(!aprendizajesExpanded)}
            className="flex items-center justify-between text-[11px] font-bold text-zinc-500 tracking-[0.15em] mb-3 px-3 mt-4 cursor-pointer group hover:text-zinc-300 transition-colors"
          >
            <span>APRENDIZAJES</span>
            <ChevronDown size={14} className={\`transition-transform duration-200 \${!aprendizajesExpanded ? '-rotate-90' : ''}\`} />
          </div>
          
          {aprendizajesExpanded && (
            <div className="flex flex-col gap-0.5">
              {pages.filter(p => !p.parentId).map((page) => {
                const children = pages.filter(child => child.parentId === page.id);
                const hasChildren = children.length > 0;
                const isExpanded = expandedPages[page.id] !== false;
                
                return (
                  <React.Fragment key={page.id}>
                    <div 
                      onClick={() => {
                        setActivePageId(page.id);
                        if (isMobile && !hasChildren) setSidebarOpen(false);
                      }}
                      className={\`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer group transition-colors \${
                        activePageId === page.id ? 'bg-[#27272A]/60 text-white' : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200'
                      }\`}
                    >
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className={\`\${activePageId === page.id ? 'text-zinc-300' : 'text-zinc-500'}\`}>
                          {getPageIcon(page.type)}
                        </div>
                        <span className="text-[14px] font-medium truncate">
                          {page.title || 'Nueva Página'}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        {page.type === 'custom' && (
                          <button 
                            onClick={(e) => { e.stopPropagation(); deletePage(e, page.id); }}
                            className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded-md transition-all text-zinc-500 hover:text-red-400"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                        {hasChildren && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              togglePageExpand(page.id);
                            }}
                            className="p-1 hover:bg-white/10 rounded-md transition-all text-zinc-500 hover:text-zinc-300"
                          >
                            <ChevronDown size={14} className={\`transition-transform duration-200 \${!isExpanded ? '-rotate-90' : ''}\`} />
                          </button>
                        )}
                      </div>
                    </div>
                    {isExpanded && children.map(child => (
                      <div 
                        key={child.id}
                        onClick={() => {
                          setActivePageId(child.id);
                          if (isMobile) setSidebarOpen(false);
                        }}
                        className={\`flex items-center justify-between pl-9 pr-3 py-1.5 rounded-lg cursor-pointer group transition-colors \${
                          activePageId === child.id ? 'bg-[#27272A]/60 text-white' : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200'
                        }\`}
                      >
                        <div className="flex items-center gap-2.5 overflow-hidden">
                          <div className={\`\${activePageId === child.id ? 'text-zinc-300' : 'text-zinc-500'}\`}>
                            {getPageIcon(child.type)}
                          </div>
                          <span className="text-[13.5px] font-medium truncate">
                            {child.title || 'Nueva Página'}
                          </span>
                        </div>
                        {child.type === 'custom' && (
                          <button 
                            onClick={(e) => { e.stopPropagation(); deletePage(e, child.id); }}
                            className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded-md transition-all text-zinc-500 hover:text-red-400"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    ))}
                  </React.Fragment>
                );
              })}
            </div>
          )}`;

if (code.includes(targetSection)) {
  code = code.replace(targetSection, replacement);
  fs.writeFileSync('src/App.tsx', code);
  console.log("Success");
} else {
  console.error("Target section not found");
}

