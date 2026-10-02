import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const effectHook = `  useEffect(() => {
    localStorage.setItem('pages', JSON.stringify(pages));
  }, [pages]);`;

const newEffectHook = `  useEffect(() => {
    localStorage.setItem('pages', JSON.stringify(pages));
  }, [pages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen(true);
      }
      if (e.key === 'Escape' && isSearchModalOpen) {
        setIsSearchModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchModalOpen]);`;

content = content.replace(effectHook, newEffectHook);
fs.writeFileSync('src/App.tsx', content);
console.log('Added ctrl+k listener');
