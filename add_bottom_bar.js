import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const newEditor = `const CustomPageEditor = ({ page, updatePage }: { page: Page, updatePage: (id: string, updates: Partial<Page>) => void }) => {
  const wordCount = (page.content || '').split(/\\s+/).filter(w => w.length > 0).length;
  const charCount = (page.content || '').length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div className="max-w-3xl mx-auto w-full flex flex-col h-full min-h-[80vh] animate-in fade-in duration-300 pt-10 relative">
      <input 
        type="text" 
        value={page.title} 
        onChange={(e) => updatePage(page.id, { title: e.target.value })}
        className="bg-transparent text-4xl font-bold text-white placeholder-zinc-700 outline-none mb-6 w-full"
        placeholder="Untitled document"
      />
      <textarea 
        value={page.content || ''}
        onChange={(e) => updatePage(page.id, { content: e.target.value })}
        className="bg-transparent text-zinc-300 outline-none flex-1 resize-none text-[15px] leading-relaxed w-full placeholder-zinc-700 pb-20"
        placeholder="Write content, newsletters, scripts, and more..."
      />
      
      {/* Bottom Status Bar */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between text-[11px] font-medium text-zinc-500">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-white/10 bg-[#1A1A1E] cursor-pointer hover:bg-white/5 transition-colors">
            <Brain size={12} className="text-zinc-400" />
            <span className="text-zinc-300">Neural</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-white/10 bg-[#1A1A1E] cursor-pointer hover:bg-white/5 transition-colors">
            <LinkIcon size={12} className="text-zinc-400" />
          </div>
        </div>
        <div className="flex items-center px-3 py-1.5 rounded-md border border-white/10 bg-[#1A1A1E]">
          {readTime} min read · {wordCount}w · {charCount}c
        </div>
      </div>
    </div>
  );
};`;

const oldEditorRegex = /const CustomPageEditor = \(\{ page, updatePage \}: \{ page: Page, updatePage: \(id: string, updates: Partial<Page>\) => void \}\) => \{[\s\S]*?^\};/m;

content = content.replace(oldEditorRegex, newEditor);
fs.writeFileSync('src/App.tsx', content);
console.log('Added bottom bar');
