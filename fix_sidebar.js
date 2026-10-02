import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// 1. Update imports
const importStr = "import {";
const newImportStr = "import { PanelLeft, PanelLeftClose,";
content = content.replace(importStr, newImportStr);

// 2. Update Topbar
const oldTopbarMenu = `{isMobile && (
                <button 
                  onClick={() => setSidebarOpen(true)}
                  className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-zinc-400 hover:text-white mr-2"
                >
                  <Menu size={18} />
                </button>
              )}`;

const newTopbarMenu = `{(!sidebarOpen || isMobile) && (
                <button 
                  onClick={() => setSidebarOpen(true)}
                  className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-zinc-400 hover:text-white mr-2"
                >
                  <PanelLeft size={18} />
                </button>
              )}
              {sidebarOpen && !isMobile && (
                <button 
                  onClick={() => setSidebarOpen(false)}
                  className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-zinc-400 hover:text-white mr-2"
                >
                  <PanelLeftClose size={18} />
                </button>
              )}`;

content = content.replace(oldTopbarMenu, newTopbarMenu);
fs.writeFileSync('src/App.tsx', content);
console.log('Fixed Sidebar Toggle');
