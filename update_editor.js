import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const oldEditor = `const CustomPageEditor = ({ page, updatePage }: { page: Page, updatePage: (id: string, updates: Partial<Page>) => void }) => {
  return (
    <div className="max-w-3xl mx-auto w-full flex flex-col h-full min-h-[80vh] pb-20 animate-in fade-in duration-300">
      
      <input 
        type="text" 
        value={page.title} 
        onChange={(e) => updatePage(page.id, { title: e.target.value })}
        className="bg-transparent text-5xl font-bold text-white placeholder-zinc-700 outline-none mb-10 w-full"
        placeholder="Título de la página"
      />
      <textarea 
        value={page.content || ''}
        onChange={(e) => updatePage(page.id, { content: e.target.value })}
        className="bg-transparent text-zinc-300 outline-none flex-1 resize-none text-[16px] leading-relaxed w-full placeholder-zinc-700"
        placeholder="Escribe algo o presiona '/' para comandos..."
      />
    </div>
  );
};`;

const newEditor = `const CustomPageEditor = ({ page, updatePage }: { page: Page, updatePage: (id: string, updates: Partial<Page>) => void }) => {
  return (
    <div className="max-w-3xl mx-auto w-full flex flex-col h-full min-h-[80vh] pb-20 animate-in fade-in duration-300 pt-10">
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
        className="bg-transparent text-zinc-300 outline-none flex-1 resize-none text-[15px] leading-relaxed w-full placeholder-zinc-700"
        placeholder="Write content, newsletters, scripts, and more..."
      />
    </div>
  );
};`;

content = content.replace(oldEditor, newEditor);
fs.writeFileSync('src/App.tsx', content);
console.log('Updated editor');
