import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// 1. Remove jhhb and Nueva Página from local storage on next load
// We can just inject a one-time cleanup in the initialization
const oldInit = `      let parsedPages = JSON.parse(saved);`;
const newInit = `      let parsedPages = JSON.parse(saved);
      parsedPages = parsedPages.filter((p: Page) => p.title !== 'jhhb' && p.title !== 'Nueva Página');`;
content = content.replace(oldInit, newInit);

// 2. Add trash icon to custom pages in Tesis
const oldTesisMap = `<span className="text-[12px] font-medium text-[#C06C5A] opacity-90 group-hover:opacity-100 shrink-0">26 jun</span>
                      </div>`;
const newTesisMap = `{page.type === 'custom' ? (
                          <div 
                            className="opacity-0 group-hover:opacity-100 p-1 hover:text-white transition-all text-zinc-500 shrink-0"
                            onClick={(e) => deletePage(e, page.id)}
                          >
                            <Trash2 size={14} />
                          </div>
                        ) : (
                          <span className="text-[12px] font-medium text-[#C06C5A] opacity-90 group-hover:opacity-100 shrink-0">26 jun</span>
                        )}
                      </div>`;
content = content.replace(oldTesisMap, newTesisMap);

// 3. Add trash icon to custom pages in Boards
const oldBoardsMap = `<span className="text-[14px] font-medium truncate">
                            {page.title || 'Nueva Página'}
                          </span>
                        </div>
                      </div>`;
const newBoardsMap = `<span className="text-[14px] font-medium truncate">
                            {page.title || 'Nueva Página'}
                          </span>
                        </div>
                        {page.type === 'custom' && (
                          <div 
                            className="opacity-0 group-hover:opacity-100 p-1 hover:text-white transition-all text-zinc-500 shrink-0"
                            onClick={(e) => deletePage(e, page.id)}
                          >
                            <Trash2 size={14} />
                          </div>
                        )}
                      </div>`;
content = content.replace(oldBoardsMap, newBoardsMap);

// 4. Fix layout crashing
const oldSidebarInner = `w-[260px] h-[calc(100vh-24px)] my-3 ml-3 bg-[#171717]`;
const newSidebarInner = `w-[260px] h-[calc(100vh-24px)] m-3 bg-[#171717]`;
content = content.replace(oldSidebarInner, newSidebarInner);

const oldMainContent = `className="flex-1 flex gap-3 h-screen p-3 overflow-hidden bg-[#131313]"`;
const newMainContent = `className="flex-1 flex gap-3 h-screen py-3 pr-3 pl-0 overflow-hidden bg-[#131313]"`;
content = content.replace(oldMainContent, newMainContent);

fs.writeFileSync('src/App.tsx', content);
console.log('Fixed UI issues');
