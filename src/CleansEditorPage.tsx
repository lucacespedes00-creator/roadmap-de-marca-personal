import React, { useEffect, useRef, useState } from 'react';
import { FileText, Eye, Edit3 } from 'lucide-react';

interface CleansEditorPageProps {
  page: {
    id: string;
    title: string;
    content?: string;
  };
  updatePage: (id: string, updates: any) => void;
}

export const CleansEditorPage: React.FC<CleansEditorPageProps> = ({ page, updatePage }) => {
  const [mode, setMode] = useState<'edit' | 'preview'>('edit');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const wordCount = (page.content || '').split(/\s+/).filter(w => w.length > 0).length;
  const charCount = (page.content || '').length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.max(el.scrollHeight, 320)}px`;
  }, [page.content, mode]);

  const renderMarkdown = (text: string) => {
    if (!text) return '';
    const lines = text.split('\n');
    let html = '';
    let inList = false;
    let listType = '';

    const parseInline = (str: string) => {
      return str
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
    };

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      const isUl = line.match(/^-\s+(.*)/);
      const isOl = line.match(/^\d+\.\s+(.*)/);

      if (inList && !isUl && !isOl) {
        html += listType === 'ul' ? '</ul>' : '</ol>';
        inList = false;
      }

      if (line.startsWith('### ')) {
        html += `<h3 class="text-xl font-bold text-white mb-2 mt-4">${parseInline(line.substring(4))}</h3>`;
      } else if (line.startsWith('## ')) {
        html += `<h2 class="text-2xl font-bold text-white mb-3 mt-6">${parseInline(line.substring(3))}</h2>`;
      } else if (line.startsWith('# ')) {
        html += `<h1 class="text-3xl font-bold text-white mb-4 mt-8">${parseInline(line.substring(2))}</h1>`;
      } else if (line.startsWith('> ')) {
        html += `<blockquote class="border-l-4 border-[#D5B15B] pl-4 py-2 bg-[#1A1A1E] rounded-r-xl my-4 text-zinc-300">${parseInline(line.substring(2))}</blockquote>`;
      } else if (isUl) {
        if (!inList) {
          html += '<ul class="list-disc pl-5 text-zinc-300 space-y-1 my-2">';
          inList = true;
          listType = 'ul';
        }
        html += `<li>${parseInline(isUl[1])}</li>`;
      } else if (isOl) {
        if (!inList) {
          html += '<ol class="list-decimal pl-5 text-zinc-300 space-y-1 my-2">';
          inList = true;
          listType = 'ol';
        }
        html += `<li>${parseInline(isOl[1])}</li>`;
      } else if (line.trim() === '') {
        html += '<div class="h-4"></div>';
      } else {
        html += `<p class="text-zinc-300 leading-relaxed">${parseInline(line)}</p>`;
      }
    }

    if (inList) {
      html += listType === 'ul' ? '</ul>' : '</ol>';
    }

    return html;
  };

  return (
    <div className="relative max-w-4xl mx-auto w-full min-h-[80vh] pt-8 pb-20 animate-in fade-in duration-300">
      <div className="flex justify-between items-start mb-6">
        <input
          type="text"
          className="text-4xl font-bold text-white bg-transparent border-none outline-none w-full placeholder-zinc-700"
          placeholder="Untitled"
          value={page.title || ''}
          onChange={(e) => updatePage(page.id, { title: e.target.value })}
        />
        <button
          onClick={() => setMode(mode === 'edit' ? 'preview' : 'edit')}
          className="ml-4 shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-700 bg-[#1A1A1E] text-zinc-300 hover:bg-zinc-800 transition-colors"
        >
          {mode === 'edit' ? <Eye size={16} /> : <Edit3 size={16} />}
          <span className="text-sm font-medium">{mode === 'edit' ? 'Preview' : 'Edit'}</span>
        </button>
      </div>

      {mode === 'edit' ? (
        <textarea
          ref={textareaRef}
          className="text-zinc-300 text-[15px] leading-relaxed resize-none overflow-hidden bg-transparent border-none outline-none w-full placeholder-zinc-700 min-h-[320px]"
          placeholder="Write your markdown content here..."
          value={page.content || ''}
          onChange={(e) => updatePage(page.id, { content: e.target.value })}
        />
      ) : (
        page.content && (
          <div
            className="prose prose-invert max-w-none pb-10"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(page.content) }}
          />
        )
      )}

      <div className="mt-16 flex items-center justify-between text-[11px] font-medium text-zinc-500">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-white/10 bg-[#1A1A1E]">
            <FileText size={12} className="text-zinc-400" />
            <span className="text-zinc-300">Clean</span>
          </div>
        </div>
        <div className="flex items-center px-3 py-1.5 rounded-md border border-white/10 bg-[#1A1A1E]">
          {readTime} min read · {wordCount}w · {charCount}c
        </div>
      </div>
    </div>
  );
};
