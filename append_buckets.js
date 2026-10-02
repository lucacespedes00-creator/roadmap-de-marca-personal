import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const replacement = `
        {/* Buckets de Leads */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="mb-10 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <ListOrdered className="text-purple-400" size={32} />
              Buckets de Leads de Mayor → Menor Valor
            </h3>
            <p className="text-[15px] text-zinc-300 italic mb-2">
              <strong className="text-purple-400 font-bold">*</strong> Este es un ejemplo para un funnel de llamada con opt-in
            </p>
            <p className="text-[16px] text-white font-bold">De mayor → menor:</p>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#1A1A1E] border border-purple-500/30 rounded-2xl p-5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
              <h4 className="text-[16px] font-bold text-white mb-3">1. Llamar a la gente que te acaba de responder por texto</h4>
              <ul className="space-y-2 text-[14px] text-zinc-300 ml-4">
                <li className="flex items-start gap-2"><PhoneCall size={16} className="text-emerald-400 shrink-0 mt-0.5" /> Llamar primero</li>
                <li className="flex items-start gap-2"><MessageSquare size={16} className="text-blue-400 shrink-0 mt-0.5" /> <div>Responder por texto en segundo lugar<p className="text-[13px] text-zinc-500 italic mt-1">- Esto podría hacerse con IA/automatización. Lo cubriremos en un momento.</p></div></li>
              </ul>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <h4 className="text-[16px] font-bold text-white mb-3">2. Nuevas apps sin reserva</h4>
              <ul className="space-y-2 text-[14px] text-zinc-300 ml-4">
                <li className="flex items-start gap-2"><PhoneCall size={16} className="text-emerald-400 shrink-0 mt-0.5" /> Llamar primero</li>
                <li className="flex items-start gap-2"><MessageSquare size={16} className="text-blue-400 shrink-0 mt-0.5" /> Texto en segundo lugar</li>
                <li className="flex items-start gap-2"><Mail size={16} className="text-amber-400 shrink-0 mt-0.5" /> Auto-inscribir en secuencia de correo personalizada</li>
              </ul>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <h4 className="text-[16px] font-bold text-white mb-3">3. Nuevas apps parciales</h4>
              <ul className="space-y-2 text-[14px] text-zinc-300 ml-4">
                <li className="flex items-start gap-2"><PhoneCall size={16} className="text-emerald-400 shrink-0 mt-0.5" /> Llamar primero</li>
                <li className="flex items-start gap-2"><MessageSquare size={16} className="text-blue-400 shrink-0 mt-0.5" /> Texto en segundo lugar</li>
                <li className="flex items-start gap-2"><Mail size={16} className="text-amber-400 shrink-0 mt-0.5" /> Auto-inscribir en secuencia de correo personalizada</li>
              </ul>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <h4 className="text-[16px] font-bold text-white mb-3">4. Nuevos opt-ins</h4>
              <ul className="space-y-2 text-[14px] text-zinc-300 ml-4">
                <li className="flex items-start gap-2"><PhoneCall size={16} className="text-emerald-400 shrink-0 mt-0.5" /> Llamar primero</li>
                <li className="flex items-start gap-2"><MessageSquare size={16} className="text-blue-400 shrink-0 mt-0.5" /> Texto en segundo lugar</li>
                <li className="flex items-start gap-2"><Mail size={16} className="text-amber-400 shrink-0 mt-0.5" /> Auto-inscribir en secuencia de correo personalizada</li>
              </ul>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <h4 className="text-[16px] font-bold text-white mb-3">5. Aperturas de correo recientes</h4>
              <ul className="space-y-2 text-[14px] text-zinc-300 ml-4">
                <li className="flex items-start gap-2"><PhoneCall size={16} className="text-emerald-400 shrink-0 mt-0.5" /> Llamar primero</li>
                <li className="flex items-start gap-2"><MessageSquare size={16} className="text-blue-400 shrink-0 mt-0.5" /> Texto en segundo lugar</li>
              </ul>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <h4 className="text-[16px] font-bold text-white mb-3">6. Respondieron a 1 texto o más. No han recibido seguimiento</h4>
              <ul className="space-y-2 text-[14px] text-zinc-300 ml-4">
                <li className="flex items-start gap-2"><PhoneCall size={16} className="text-emerald-400 shrink-0 mt-0.5" /> Llamar</li>
                <li className="flex items-start gap-2"><MessageSquare size={16} className="text-blue-400 shrink-0 mt-0.5" /> Seguimiento por texto</li>
              </ul>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <h4 className="text-[16px] font-bold text-white mb-3">7. Llamar/textear a los no-shows de hoy</h4>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <h4 className="text-[16px] font-bold text-white mb-3">8. Llamar a los nuevos leads de hoy 2 veces más (3 en total)</h4>
              <ul className="space-y-2 text-[14px] text-zinc-300 ml-4">
                <li className="flex items-start gap-2"><Clock size={16} className="text-zinc-400 shrink-0 mt-0.5" /> Durante horas pico (idealmente)</li>
              </ul>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <h4 className="text-[16px] font-bold text-white mb-3">9. Llamar a leads de 2 días de antigüedad y sus respectivos seguimientos por texto</h4>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <h4 className="text-[16px] font-bold text-white mb-3">10. Llamar a leads de 3 días de antigüedad y sus respectivos seguimientos por texto</h4>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <h4 className="text-[16px] font-bold text-white">Etc.</h4>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <div className="bg-gradient-to-r from-[#3A1414]/20 to-[#121214] border border-[#D5B15B]/30 rounded-2xl p-6 relative z-10 shadow-lg">
              <p className="text-[15px] text-zinc-300 italic mb-4 flex items-start gap-3">
                <Filter className="text-[#E8CD82] shrink-0 mt-0.5" size={20} />
                También puedes separar las listas por ciertos factores como ingresos, industria, score de la aplicación, datos financieros, etc. — para priorizar esas listas también en sub-listas.
              </p>
              <p className="text-[15px] text-zinc-300 italic flex items-start gap-3">
                <Layers className="text-[#E8CD82] shrink-0 mt-0.5" size={20} />
                Esto también puede volverse más complicado si tienes múltiples funnels. Digamos que también tienes un funnel de comprador corriendo. Tu lógica de marcado necesitaría contemplar eso también.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-[#121214] to-[#1A1A1E] border border-emerald-500/20 rounded-2xl p-6 relative z-10 shadow-lg">
              <p className="text-[15px] text-zinc-300 leading-relaxed italic mb-4">
                <strong className="text-emerald-400 font-bold">Esto es MUCHO MÁS efectivo que estar regañando a tus setters de que "no están llamando a cada lead 13 veces".</strong> ¿Por qué les importaría llamar a un lead de 5 días de antigüedad, cuando uno nuevo acaba de llegar? ¿O les acaba de responder por texto?
              </p>
              
              <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800/80">
                <p className="text-[15px] text-zinc-300 leading-relaxed font-medium flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Así que, para recapitular la lógica de marcado: <strong className="text-white">básicamente es un algoritmo para que tus setters trabajen todos los leads disponibles de la forma más productiva posible.</strong>
                  </span>
                </p>
              </div>
            </div>

            <div className="text-center pt-8">
              <p className="text-xl md:text-2xl font-bold text-[#E8CD82]">
                Entonces, ¿cómo hacemos esto?
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
`;

content = content.replace("      </div>\n    </div>\n  );\n};", replacement);

// Add missing icons
const missingIcons = ['ListOrdered', 'MessageSquare', 'Clock', 'Filter'];
for (const icon of missingIcons) {
  if (!content.includes(` ${icon} `) && !content.includes(` ${icon},`)) {
    content = content.replace(/import \{([^\}]+)\} from 'lucide-react';/, `import {$1, ${icon} } from 'lucide-react';`);
  }
}

fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);

