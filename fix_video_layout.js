import fs from 'fs';
let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

// 1. Add state for isVideoPinned
const importReact = "import React from 'react';";
const newImportReact = "import React, { useState } from 'react';";
content = content.replace(importReact, newImportReact);

const lucideImport = "import { ArrowDown, Layers";
const newLucideImport = "import { Pin, PinOff, Columns, Maximize2, ArrowDown, Layers";
content = content.replace(lucideImport, newLucideImport);

const componentStart = "export const TesisOutboundMdrSdrPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {\n  return (";
const newComponentStart = "export const TesisOutboundMdrSdrPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {\n  const [isVideoPinned, setIsVideoPinned] = useState(false);\n  return (";
content = content.replace(componentStart, newComponentStart);

// 2. Change max-w-4xl to dynamic
const maxW = "className=\"max-w-4xl mx-auto w-full pb-20 animate-in fade-in duration-300\"";
const newMaxW = "className={`mx-auto w-full pb-20 animate-in fade-in duration-300 ${isVideoPinned ? 'max-w-[95%]' : 'max-w-4xl'}`}";
content = content.replace(maxW, newMaxW);

// 3. Wrap video and content in the flex layout
const videoStart = "{/* Video Embed */}\n      <div className=\"w-full aspect-video rounded-3xl overflow-hidden border border-[#27272A]/80 shadow-2xl mb-16 bg-[#121214]\">";
const videoReplacement = `<div className={\`flex items-start gap-8 \${isVideoPinned ? 'flex-row' : 'flex-col'}\`}>
        {/* Video Container */}
        <div className={\`w-full transition-all duration-500 \${isVideoPinned ? 'order-2 w-[450px] xl:w-[500px] shrink-0 sticky top-6' : 'order-1'}\`}>
          <div className="w-full aspect-video rounded-3xl overflow-hidden border border-[#27272A]/80 shadow-2xl mb-8 bg-[#121214] relative group">
            <button 
              onClick={() => setIsVideoPinned(!isVideoPinned)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md border border-white/10 z-10 flex items-center gap-2 text-sm font-medium"
              title={isVideoPinned ? "Volver al centro" : "Fijar a la derecha"}
            >
              {isVideoPinned ? <Maximize2 size={16} /> : <Columns size={16} />}
              {isVideoPinned ? "Desfijar" : "Fijar lectura"}
            </button>`;
content = content.replace(videoStart, videoReplacement);

const videoEnd = "</iframe>\n      </div>";
const newVideoEnd = "</iframe>\n          </div>\n        </div>\n\n        {/* Text Content Area */}\n        <div className={`flex-1 min-w-0 w-full ${isVideoPinned ? 'order-1' : 'order-2'}`}>";
content = content.replace(videoEnd, newVideoEnd);

// 4. Close the flex container at the end
const endDivs = "</div>\n    </div>\n  );\n};";
const newEndDivs = "</div>\n        </div>\n      </div>\n    </div>\n  );\n};";
content = content.replace(endDivs, newEndDivs);

fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);
console.log('Video Layout Fixed');
