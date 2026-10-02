import fs from 'fs';
let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const importReact = "import React, { useState } from 'react';";
const newImportReact = "import React, { useState, useRef, useEffect, useCallback } from 'react';";
content = content.replace(importReact, newImportReact);

const componentStart = "export const TesisOutboundMdrSdrPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {\n  const [isVideoPinned, setIsVideoPinned] = useState(false);\n  return (";
const newComponentStart = `export const TesisOutboundMdrSdrPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {
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
        // Restrict between 300px and 800px or up to 70% of screen width
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
      // add a body class to prevent selection while dragging
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

const videoContainer = `<div className={\`w-full transition-all duration-500 \${isVideoPinned ? 'order-2 w-[450px] xl:w-[500px] shrink-0 sticky top-6' : 'order-1'}\`}>`;
const newVideoContainer = `
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
          )}`;
content = content.replace(videoContainer, newVideoContainer);

fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);
console.log('Video resize added');
