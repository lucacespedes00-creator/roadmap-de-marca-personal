import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

content = content.replace(
  "parentId?: string;\n};",
  "parentId?: string;\n  section?: 'tesis' | 'aprendizajes';\n};"
);

content = content.replace(
  "{ id: 'linkedin_acquisition_parent', title: 'Acquisition', type: 'default_linkedin_acquisition_parent' },",
  "{ id: 'linkedin_acquisition_parent', title: 'Acquisition', type: 'default_linkedin_acquisition_parent', section: 'tesis' },"
);

const oldTesisHtml = `{tesisExpanded && (
            <div className="px-3 mb-6">
              <span className="text-[13px] text-zinc-500 italic">No hay páginas</span>
            </div>
          )}`;

const newTesisHtml = `{tesisExpanded && (
            <div className="flex flex-col gap-0.5 mb-6">
              {pages.filter(p => !p.parentId && p.section === 'tesis').length === 0 ? (
                <div className="px-3">
                  <span className="text-[13px] text-zinc-500 italic">No hay páginas</span>
                </div>
              ) : (
                pages.filter(p => !p.parentId && p.section === 'tesis').map((page) => {
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
                        className={\`flex items-center gap-3 px-3 py-2 ml-4 rounded-lg cursor-pointer group transition-colors \${
                          activePageId === child.id ? 'bg-[#27272A]/60 text-white' : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200'
                        }\`}
                      >
                        <div className={\`\${activePageId === child.id ? 'text-zinc-300' : 'text-zinc-500'}\`}>
                          {getPageIcon(child.type)}
                        </div>
                        <span className="text-[13px] font-medium truncate">
                          {child.title || 'Subpágina'}
                        </span>
                        {child.type === 'custom' && (
                          <button 
                            onClick={(e) => { e.stopPropagation(); deletePage(e, child.id); }}
                            className="ml-auto opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded-md transition-all text-zinc-500 hover:text-red-400"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    ))}
                  </React.Fragment>
                );
              })
              )}
            </div>
          )}`;

content = content.replace(oldTesisHtml, newTesisHtml);

const oldAprendizajesFilter = `{pages.filter(p => !p.parentId).map((page) => {`;
const newAprendizajesFilter = `{pages.filter(p => !p.parentId && p.section !== 'tesis').map((page) => {`;

content = content.replace(oldAprendizajesFilter, newAprendizajesFilter);

// Also we need to make sure the state initialization persists the section property.
// The defaultPages has section on linkedin_acquisition_parent.
// Let's modify the saved page loading logic.
const oldLoadPages = `      const updatedPages = parsedPages.map((p: Page) => {
        const dp = defaultPages.find(d => d.id === p.id);
        if (dp) {
          p.title = dp.title;
        }`;
const newLoadPages = `      const updatedPages = parsedPages.map((p: Page) => {
        const dp = defaultPages.find(d => d.id === p.id);
        if (dp) {
          p.title = dp.title;
          p.section = dp.section;
        }`;

content = content.replace(oldLoadPages, newLoadPages);

// Add custom page support: if someone creates a page in Tesis, it needs a section. But for now the user just wants one page there.

fs.writeFileSync('src/App.tsx', content);
