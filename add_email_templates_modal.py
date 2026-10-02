import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# Make sure to import emailTemplates
if "import { emailTemplates }" not in content:
    import_idx = content.find("import { ")
    content = content[:import_idx] + "import { emailTemplates } from './emailTemplates';\n" + content[import_idx:]

# Find the Modal structure and replace its content
modal_empty_content = """<div className="p-8 overflow-y-auto flex-1">
              <div className="text-center text-zinc-400 py-20 border-2 border-dashed border-zinc-800 rounded-xl">
                <Mail size={48} className="mx-auto mb-4 text-zinc-600" />
                <p className="text-lg">Esperando las plantillas de email...</p>
                <p className="text-sm mt-2">Pasame los textos y los agrego acá.</p>
              </div>
            </div>"""

modal_new_content = """<div className="p-8 overflow-y-auto flex-1 bg-[#09090b]">
              <div className="space-y-8">
                {emailTemplates.map((template, index) => (
                  <div key={index} className="bg-[#121214] border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-[#D5B15B]/30 transition-colors">
                    <div className="bg-[#1A1A1E] border-b border-zinc-800 p-5">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold bg-[#27272A] text-zinc-300 px-2.5 py-1 rounded-md">{template.date}</span>
                      </div>
                      <h4 className="text-lg font-bold text-white leading-snug">Asunto: {template.subject}</h4>
                    </div>
                    <div className="p-6">
                      <div className="text-[14.5px] text-zinc-300 whitespace-pre-wrap leading-relaxed font-mono bg-[#1A1A1E]/50 p-5 rounded-xl border border-zinc-800/50">
                        {template.body}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>"""

if modal_empty_content in content:
    content = content.replace(modal_empty_content, modal_new_content)
else:
    print("Could not find the modal empty content.")

with open('src/App.tsx', 'w') as f:
    f.write(content)

