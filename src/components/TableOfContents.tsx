import React, { useState, useEffect } from 'react';

interface Section {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: Section[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, current) => {
            return (prev.intersectionRatio > current.intersectionRatio) ? prev : current;
          });
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        rootMargin: '-10% 0px -70% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex items-center transition-all duration-300 hidden lg:flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute right-12 bg-[#1A1A1E] border border-zinc-800/80 rounded-xl p-5 shadow-2xl transition-all duration-300 origin-right min-w-[280px] max-h-[80vh] overflow-y-auto ${
          isHovered ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="space-y-3 text-[13.5px]">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleClick(section.id)}
                className={`text-left w-full transition-colors duration-200 block pr-2 ${
                  activeSection === section.id
                    ? "text-blue-400 font-medium"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-[7px] py-4 px-3 rounded-full hover:bg-zinc-800/50 transition-colors cursor-pointer backdrop-blur-sm h-auto justify-center">
        {sections.map((section) => (
          <div
            key={section.id}
            onClick={(e) => {
              e.stopPropagation();
              handleClick(section.id);
            }}
            className={`h-[2px] rounded-full transition-all duration-300 ${
              activeSection === section.id 
                ? "w-5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" 
                : "w-3 bg-zinc-600 hover:bg-zinc-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
