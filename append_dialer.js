import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const replacement = `
        {/* Proceso Pesado y Cómo Configurarlo */}
        <section className="bg-gradient-to-br from-[#121214] to-[#1A1A1E] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10 mb-8">
            <p className="text-[15px] text-zinc-300 mb-6 italic">Como puedes ver, este proceso es un poco pesado. Así que para ayudar con esto:</p>
            
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 lg:p-8 space-y-4">
              <div className="flex items-start gap-3">
                <MessageCircle className="text-blue-400 shrink-0 mt-0.5" size={18} />
                <span className="text-[15px] text-zinc-300">Configurábamos un canal de prioridad en Slack para cada setter individual</span>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="text-amber-400 shrink-0 mt-0.5" size={18} />
                <span className="text-[15px] text-zinc-300">Cada vez que entra un nuevo lead de los segmentos top 2-4, aparece en ese canal.</span>
              </div>
              <div className="flex items-start gap-3">
                <MousePointerClick className="text-emerald-400 shrink-0 mt-0.5" size={18} />
                <span className="text-[15px] text-zinc-300">El setter recibe una notificación, hace clic, y automáticamente llama.</span>
              </div>
              <div className="flex items-start gap-3">
                <Users className="text-purple-400 shrink-0 mt-0.5" size={18} />
                <div>
                  <span className="text-[15px] text-zinc-300">También configurábamos un canal para el manager con todos estos leads prioritarios</span>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-[14px] text-zinc-400">
                    <li>De esta forma el manager puede hacer control de calidad (QC) de la velocidad al lead en los leads más calientes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Settings className="text-zinc-400" size={24} /> Cómo Configurarlo:
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#121214] border border-zinc-800 rounded-xl p-6">
                <p className="font-bold text-white mb-3">Si tienes 1-2 setters... y no quieres lidiar con la complejidad...</p>
                <ul className="list-disc pl-5 space-y-2 text-[14px] text-zinc-400">
                  <li>Simplemente puedes enseñarles a tus setters "cómo pensar" esto</li>
                  <li>Configura algunos segmentos básicos y listas de prioridad</li>
                  <li>Y déjalos trabajar.</li>
                  <li className="text-zinc-500 italic mt-4 list-none -ml-5 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">Tener el sistema perfecto no es tan rentable con 1-2 setters, así que por favor no te sobrecargues.</li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="bg-[#121214] border border-blue-500/20 rounded-xl p-6">
                  <p className="font-bold text-white mb-3">Si tienes 3+ setters</p>
                  <p className="text-[14px] text-zinc-300">Recomendaría contratar a <strong className="text-blue-400">Edward Stranks (Genio Moderado)</strong> para que lo configure.</p>
                  <p className="text-[13px] text-zinc-500 mt-2">Link abajo</p>
                </div>

                <div className="bg-[#121214] border border-zinc-800 rounded-xl p-6">
                  <p className="font-bold text-white mb-3 flex items-center gap-2"><Cpu size={16} className="text-zinc-400" /> Tecnología recomendada:</p>
                  <ul className="list-disc pl-5 space-y-2 text-[14px] text-zinc-400">
                    <li>Nosotros solíamos usar <strong className="text-white">Aloware + Hubspot</strong> para nuestra tecnología.</li>
                    <li><strong className="text-white">Aloware + GHL</strong> también funciona.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Forma Nueva: Dialer.io */}
        <section className="bg-gradient-to-br from-[#121214] to-[#1A1A1E] border border-blue-500/30 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10 text-center mb-10">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Forma Nueva: Dialer.io (Configuración Automática)
            </h3>
          </div>

          <div className="relative z-10 space-y-6">
            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-6">
              <p className="text-[15px] text-zinc-300 mb-4 flex items-start gap-3">
                <AlertTriangle className="text-amber-400 shrink-0 mt-0.5" size={20} />
                <span>Como pueden ver, el proceso de arriba no es perfecto. Pero es lo mejor que pudimos hacer como industria durante años.</span>
              </p>
              <p className="text-[15px] text-zinc-300 flex items-start gap-3">
                <CheckCircle2 className="text-blue-400 shrink-0 mt-0.5" size={20} />
                <span>Eventualmente, empaquetamos todo este sistema de lógica de marcado (además de un montón de otras funciones importantes) en un software del cual soy co-dueño llamado <strong className="text-blue-400 text-[16px]">Dialer.io</strong></span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1A1A1E] border border-blue-500/20 rounded-2xl p-6">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Cpu size={20} className="text-blue-400" /> El dialer hace todo por ti:
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 bg-[#121214] p-3 rounded-lg border border-zinc-800">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-[12px] shrink-0">1</div>
                    <span className="text-[14px] text-zinc-300">Los setters inician sesión.</span>
                  </li>
                  <li className="flex items-center gap-3 bg-[#121214] p-3 rounded-lg border border-zinc-800">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-[12px] shrink-0">2</div>
                    <span className="text-[14px] text-zinc-300">Hacen clic en "Marcar" (Dial)</span>
                  </li>
                  <li className="flex items-center gap-3 bg-[#121214] p-3 rounded-lg border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-[12px] shrink-0">3</div>
                    <span className="text-[14px] text-white font-bold">Y ejecuta el algoritmo a la perfección.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-500/10 to-[#1A1A1E] border border-emerald-500/20 rounded-2xl p-6 h-full flex flex-col justify-center">
                  <p className="text-center font-bold text-white text-[16px] mb-2 flex flex-col items-center gap-2">
                    <TrendingUp size={32} className="text-emerald-400" />
                    Resultados probados
                  </p>
                  <p className="text-[15px] text-zinc-300 text-center leading-relaxed">
                    Generalmente hemos visto aumentos del <strong className="text-emerald-400 text-xl">50-100%</strong> en tasas de contestación en clientes que usan el software.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 mt-6">
              <p className="text-[15px] text-zinc-300 italic mb-4 leading-relaxed">
                Obviamente, tengo un interés en que lo uses, pero honestamente lo construimos porque configurar este sistema era muy tedioso, difícil e imperfecto.
              </p>
              <ul className="list-disc pl-5 space-y-3 text-[14px] text-zinc-400">
                <li>Así que incluso si no tuviera un interés en esto, seguiría siendo mi recomendación legítima.</li>
                <li>También tiene un montón de otras funciones importantes, pero no voy a entrar en detalle sobre eso en este video.</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-zinc-800 text-center">
                <p className="font-bold text-blue-400 flex items-center justify-center gap-2 text-[16px]">
                  <CheckCircle2 size={18} /> Muy recomendado. Link para agendar una demo abajo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
`;

content = content.replace("      </div>\n    </div>\n  );\n};", replacement);

const missingIcons = ['MessageCircle', 'Zap', 'MousePointerClick', 'Users', 'Settings', 'Cpu'];
for (const icon of missingIcons) {
  if (!content.includes(` ${icon} `) && !content.includes(` ${icon},`)) {
    content = content.replace(/import \{([^\}]+)\} from 'lucide-react';/, `import {$1, ${icon} } from 'lucide-react';`);
  }
}

fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);

