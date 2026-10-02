import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const importReact = "import React, { useState, useEffect, useRef } from 'react';";
if (!content.includes('useCallback')) {
  content = content.replace(importReact, "import React, { useState, useEffect, useRef, useCallback } from 'react';");
}

const componentStart = "const LinkedInAngulosPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {\n  const [isSummary, setIsSummary] = useState(false);\n  return (";
const newComponentStart = `const LinkedInAngulosPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {
  const [isSummary, setIsSummary] = useState(false);
  const [isVideoPinned, setIsVideoPinned] = useState(false);
  const [videoWidth, setVideoWidth] = useState(500);
  const [isResizing, setIsResizing] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const startResizing = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      if (videoContainerRef.current) {
        const rightEdge = videoContainerRef.current.getBoundingClientRect().right;
        const newWidth = rightEdge - e.clientX;
        const maxWidth = Math.min(800, window.innerWidth * 0.7);
        if (newWidth > 300 && newWidth < maxWidth) {
          setVideoWidth(newWidth);
        }
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = 'none';
      document.body.style.cursor = 'col-resize';
    } else {
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };
  }, [isResizing]);

  return (`;
content = content.replace(componentStart, newComponentStart);

const maxW = "className=\"max-w-4xl mx-auto w-full pb-20 animate-in fade-in duration-300\"";
const newMaxW = "className={`mx-auto w-full pb-20 animate-in fade-in duration-300 ${isVideoPinned ? 'max-w-[95%]' : 'max-w-4xl'}`}";
content = content.replace(maxW, newMaxW);

const videoEmbed = `{/* Video Embed */}
    <div className="w-full aspect-video rounded-3xl overflow-hidden border border-[#27272A]/80 shadow-2xl mb-10 bg-[#121214]">
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/zo7Xf2R4Lts" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div>
    <div className="space-y-12">`;

const newVideoEmbed = `<div className={\`flex items-start gap-8 \${isVideoPinned ? 'flex-row' : 'flex-col'}\`}>
      <div 
        ref={videoContainerRef}
        style={isVideoPinned ? { width: \`\${videoWidth}px\` } : {}}
        className={\`\${isVideoPinned ? 'order-2 shrink-0 sticky top-6' : 'order-1 w-full'} \${!isResizing ? 'transition-all duration-500' : ''}\`}
      >
        {isVideoPinned && (
          <div 
            onMouseDown={startResizing}
            className="absolute -left-4 top-0 bottom-0 w-8 cursor-col-resize z-20 group/resizer flex items-center justify-center"
            title="Arrastrar para redimensionar"
          >
            <div className={\`h-16 w-1 rounded-full transition-colors duration-200 \${isResizing ? 'bg-[#D5B15B]' : 'bg-white/10 group-hover/resizer:bg-white/30'}\`} />
          </div>
        )}
        <div className="w-full aspect-video rounded-3xl overflow-hidden border border-[#27272A]/80 shadow-2xl mb-8 bg-[#121214] relative group">
          <button 
            onClick={() => setIsVideoPinned(!isVideoPinned)}
            className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md border border-white/10 z-10 flex items-center gap-2 text-sm font-medium"
            title={isVideoPinned ? "Volver al centro" : "Fijar a la derecha"}
          >
            {isVideoPinned ? <Maximize2 size={16} /> : <Columns size={16} />}
            {isVideoPinned ? "Desfijar" : "Fijar lectura"}
          </button>
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/zo7Xf2R4Lts" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className={\`flex-1 min-w-0 w-full \${isVideoPinned ? 'order-1' : 'order-2'}\`}>
        <div className="space-y-12">`;
content = content.replace(videoEmbed, newVideoEmbed);

const angulosEnd = `</button>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};`;
const newAngulosEnd = `</button>
            </div>
          </div>
        </div>
      )}
    </div>
      </div>
    </div>
  </div>
  );
};`;
content = content.replace(angulosEnd, newAngulosEnd);

fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx updated');
