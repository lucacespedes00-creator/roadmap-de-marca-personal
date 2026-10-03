import React, { useState } from 'react';
import {
  Bookmark, Lightbulb, Trash2, Plus, FileText, Eye, Edit3,
  BarChart2, AlertCircle, Minus, ChevronDown
} from 'lucide-react';

export type CleanBlock = {
  id: string;
  type: 'heading' | 'callout' | 'stat-grid' | 'highlight' | 'divider';
  data: any;
};

interface CleansEditorPageProps {
  page: {
    id: string;
    title: string;
    content?: string;
    cleanBlocks?: CleanBlock[];
  };
  updatePage: (id: string, updates: any) => void;
}

export const CleansEditorPage: React.FC<CleansEditorPageProps> = ({ page, updatePage }) => {
  const [mode, setMode] = useState<'edit' | 'preview'>('edit');
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [editingBlockId, setEditingBlockId] = useState<string | null>(null);

  const wordCount = (page.content || '').split(/\s+/).filter(w => w.length > 0).length;
  const charCount = (page.content || '').length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

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

  const handleAddBlock = (type: CleanBlock['type']) => {
    let data: any = {};
    if (type === 'heading') data = { text: 'New Section' };
    else if (type === 'callout') data = { text: 'Write your callout here...' };
    else if (type === 'stat-grid') data = { stats: [{ value: '0', label: 'Label' }, { value: '0', label: 'Label' }, { value: '0', label: 'Label' }] };
    else if (type === 'highlight') data = { text: 'Write your highlight here...' };
    else if (type === 'divider') data = {};

    const newBlock: CleanBlock = {
      id: Math.random().toString(36).substring(7),
      type,
      data
    };

    updatePage(page.id, { cleanBlocks: [...(page.cleanBlocks || []), newBlock] });
    setShowAddMenu(false);
  };

  const updateBlock = (blockId: string, newData: any) => {
    const blocks = page.cleanBlocks || [];
    const newBlocks = blocks.map(b => b.id === blockId ? { ...b, data: newData } : b);
    updatePage(page.id, { cleanBlocks: newBlocks });
  };

  const deleteBlock = (blockId: string) => {
    const blocks = page.cleanBlocks || [];
    const newBlocks = blocks.filter(b => b.id !== blockId);
    updatePage(page.id, { cleanBlocks: newBlocks });
  };

  const renderBlock = (block: CleanBlock) => {
    const isEditing = editingBlockId === block.id;

    const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
      <div className="relative group my-4">
        {children}
        <button
          onClick={() => deleteBlock(block.id)}
          className="absolute top-2 right-2 p-1.5 bg-red-500/10 text-red-400 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Trash2 size={14} />
        </button>
      </div>
    );

    if (block.type === 'heading') {
      return (
        <Wrapper key={block.id}>
          <div className="mb-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner shrink-0">
              <Bookmark size={24} />
            </div>
            {isEditing ? (
              <input
                autoFocus
                className="text-2xl md:text-3xl font-bold text-white bg-transparent border-none outline-none w-full"
                value={block.data.text}
                onChange={e => updateBlock(block.id, { ...block.data, text: e.target.value })}
                onBlur={() => setEditingBlockId(null)}
              />
            ) : (
              <h3 
                className="text-2xl md:text-3xl font-bold text-white w-full cursor-text"
                onClick={() => setEditingBlockId(block.id)}
              >
                {block.data.text}
              </h3>
            )}
          </div>
        </Wrapper>
      );
    }

    if (block.type === 'callout') {
      return (
        <Wrapper key={block.id}>
          <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-6 rounded-2xl flex items-start gap-4">
            <div className="text-[#D5B15B] mt-1 shrink-0"><Lightbulb size={24} /></div>
            {isEditing ? (
              <textarea
                autoFocus
                className="text-zinc-300 bg-transparent border-none outline-none w-full resize-none min-h-[60px]"
                value={block.data.text}
                onChange={e => updateBlock(block.id, { ...block.data, text: e.target.value })}
                onBlur={() => setEditingBlockId(null)}
              />
            ) : (
              <p 
                className="text-zinc-300 w-full cursor-text whitespace-pre-wrap"
                onClick={() => setEditingBlockId(block.id)}
              >
                {block.data.text}
              </p>
            )}
          </div>
        </Wrapper>
      );
    }

    if (block.type === 'stat-grid') {
      return (
        <Wrapper key={block.id}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {block.data.stats.map((stat: any, index: number) => (
              <div key={index} className="bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800 text-center">
                {isEditing ? (
                  <>
                    <input
                      className="text-[#D5B15B] text-2xl font-bold bg-transparent border-none outline-none w-full text-center mb-1"
                      value={stat.value}
                      onChange={e => {
                        const newStats = [...block.data.stats];
                        newStats[index] = { ...stat, value: e.target.value };
                        updateBlock(block.id, { ...block.data, stats: newStats });
                      }}
                    />
                    <input
                      className="text-zinc-400 text-sm bg-transparent border-none outline-none w-full text-center"
                      value={stat.label}
                      onChange={e => {
                        const newStats = [...block.data.stats];
                        newStats[index] = { ...stat, label: e.target.value };
                        updateBlock(block.id, { ...block.data, stats: newStats });
                      }}
                      onBlur={() => setEditingBlockId(null)}
                    />
                  </>
                ) : (
                  <div className="cursor-text" onClick={() => setEditingBlockId(block.id)}>
                    <p className="text-[#D5B15B] text-2xl font-bold">{stat.value}</p>
                    <p className="text-zinc-400 text-sm mt-1">{stat.label}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Wrapper>
      );
    }

    if (block.type === 'highlight') {
      return (
        <Wrapper key={block.id}>
          <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-4">
            {isEditing ? (
              <textarea
                autoFocus
                className="text-zinc-300 bg-transparent border-none outline-none w-full resize-none min-h-[100px]"
                value={block.data.text}
                onChange={e => updateBlock(block.id, { ...block.data, text: e.target.value })}
                onBlur={() => setEditingBlockId(null)}
              />
            ) : (
              <p 
                className="text-zinc-300 w-full cursor-text whitespace-pre-wrap"
                onClick={() => setEditingBlockId(block.id)}
              >
                {block.data.text}
              </p>
            )}
          </div>
        </Wrapper>
      );
    }

    if (block.type === 'divider') {
      return (
        <Wrapper key={block.id}>
          <hr className="border-zinc-800 my-8" />
        </Wrapper>
      );
    }

    return null;
  };

  return (
    <div className="relative flex-1 px-8 md:px-16 pt-8 flex flex-col overflow-y-auto custom-scrollbar pb-20">
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
        <div className="flex flex-col flex-1">
          <textarea
            className="text-zinc-300 text-[15px] leading-relaxed resize-none flex-1 bg-transparent border-none outline-none w-full placeholder-zinc-700 mb-8"
            placeholder="Write your markdown content here..."
            value={page.content || ''}
            onChange={(e) => updatePage(page.id, { content: e.target.value })}
          />
          <div className="flex flex-col mt-4">
            {(page.cleanBlocks || []).map(renderBlock)}
          </div>
        </div>
      ) : (
        <div className="flex flex-col flex-1 pb-10">
          {page.content && (
            <div
              className="prose prose-invert max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(page.content) }}
            />
          )}
          <div className="flex flex-col mt-4">
            {(page.cleanBlocks || []).map(renderBlock)}
          </div>
        </div>
      )}

      <div className="relative mt-8 mb-16 self-center">
        <button
          onClick={() => setShowAddMenu(!showAddMenu)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1E] border border-zinc-700 text-zinc-300 hover:text-white transition-colors"
        >
          <Plus size={18} />
          <span className="text-sm font-medium">Add Block</span>
          <ChevronDown size={14} className={`transition-transform ${showAddMenu ? 'rotate-180' : ''}`} />
        </button>

        {showAddMenu && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-[#1A1A1E] border border-zinc-800 rounded-xl shadow-xl overflow-hidden z-10">
            <button onClick={() => handleAddBlock('heading')} className="w-full text-left px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 flex items-center gap-2"><Bookmark size={14} /> Section Header</button>
            <button onClick={() => handleAddBlock('callout')} className="w-full text-left px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 flex items-center gap-2"><Lightbulb size={14} /> Callout</button>
            <button onClick={() => handleAddBlock('stat-grid')} className="w-full text-left px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 flex items-center gap-2"><BarChart2 size={14} /> Stats Grid</button>
            <button onClick={() => handleAddBlock('highlight')} className="w-full text-left px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 flex items-center gap-2"><AlertCircle size={14} /> Highlight Card</button>
            <button onClick={() => handleAddBlock('divider')} className="w-full text-left px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 flex items-center gap-2"><Minus size={14} /> Divider</button>
          </div>
        )}
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between text-[11px] font-medium text-zinc-500 px-8 md:px-16">
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
