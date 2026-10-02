import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# Make sure X is imported from lucide-react
import_idx = content.find("import { ")
import_end_idx = content.find(" } from 'lucide-react';", import_idx)
if import_end_idx != -1:
    current_imports = content[import_idx+9:import_end_idx]
    if "X" not in current_imports.split(", "):
        new_imports = current_imports + ", X"
        content = content[:import_idx+9] + new_imports + content[import_end_idx:]

# Find LinkedInEmailPage
start_marker = "const LinkedInEmailPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {"
start_idx = content.find(start_marker)

# Replace the state initialization
old_state = "const [isSummary, setIsSummary] = useState(false);"
new_state = """const [isSummary, setIsSummary] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);"""
content = content.replace(old_state, new_state, 1)

# Find the end of the LinkedInEmailPage return statement
# We can look for the last Notes Finales block and add the button after it.
# Wait, let's just insert before the final `</div>\n  </div>\n  );\n};` of LinkedInEmailPage.
# Let's search for the end of the page block
end_page_marker = """      {/* Notas Finales */}
      {!isSummary && (
        <div className="mb-10">
          <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#D5B15B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <h3 className="text-xl font-bold text-white mb-5 relative z-10">Notas Finales y Plan de Ejecución</h3>
             
             <ol className="list-decimal pl-5 space-y-3 text-[15.5px] text-zinc-300 relative z-10 mb-6 font-medium">
               <li>Configurar un sistema de suscripción para tu lead magnet.</li>
               <li>Implementar la secuencia de nutrición de 14 días (Emails 1 al 6).</li>
               <li>Enviar tres emails por semana de forma consistente (o ajustar si 3 es demasiado).</li>
               <li>Ejecutar una campaña de oferta mensual (Susurro, Insinuación, Grito).</li>
               <li>Hacer seguimiento estratégico a los leads interesados usando AIDA.</li>
               <li>Ajustar los mensajes según tu audiencia objetivo.</li>
             </ol>
             
             <div className="p-5 bg-[#1A1A1E] rounded-xl border border-zinc-800 relative z-10">
                <p className="text-[15px] text-zinc-300 leading-relaxed">
                   <strong>Recordá:</strong> Este sistema asegura que nutras leads de forma consistente, los conviertas en clientes y mantengas un alto nivel de compromiso sin saturar. Una vez configurado, simplemente hay que mantenerlo y optimizarlo.
                </p>
             </div>
          </div>
        </div>
      )}"""

modal_code = """
      {/* Botón de Plantillas */}
      <div className="mt-12 flex justify-center pb-8">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#D5B15B] hover:bg-[#E8CD82] text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(213,177,91,0.3)] flex items-center gap-2"
        >
          <Mail size={20} />
          Ver Plantillas de Email
        </button>
      </div>

      {/* Modal de Plantillas */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#121214] border border-zinc-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-zinc-800 bg-[#1A1A1E]">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Mail className="text-[#D5B15B]" /> Plantillas de Email
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-full"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8 overflow-y-auto flex-1">
              <div className="text-center text-zinc-400 py-20 border-2 border-dashed border-zinc-800 rounded-xl">
                <Mail size={48} className="mx-auto mb-4 text-zinc-600" />
                <p className="text-lg">Esperando las plantillas de email...</p>
                <p className="text-sm mt-2">Pasame los textos y los agrego acá.</p>
              </div>
            </div>
          </div>
        </div>
      )}
"""

if end_page_marker in content:
    content = content.replace(end_page_marker, end_page_marker + modal_code)
else:
    print("Could not find the end page marker.")

with open('src/App.tsx', 'w') as f:
    f.write(content)

