import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const replacement = `
        {/* Velocidad y Actividad */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          
          {/* Velocidad al Lead */}
          <div className="mb-12 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="text-[#A6E1BA]" size={32} />
              Velocidad al Lead:
            </h3>
            
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 lg:p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 p-4 rounded-xl">
                  <Target size={20} className="text-[#A6E1BA] shrink-0 mt-0.5" />
                  <span className="text-[15px] text-white font-bold">Esta es la métrica #1 más importante.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                  <span className="text-[15px] text-zinc-300">Y el indicador líder más grande de las tasas de contestación, de lead a cita agendada, etc.</span>
                </li>
                
                <li className="pt-4 mt-2 border-t border-zinc-800/80">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#121214] p-5 rounded-xl border border-zinc-800">
                      <p className="font-bold text-white mb-2 flex items-center gap-2">
                        <Mail size={18} className="text-blue-400" /> Para textos
                      </p>
                      <p className="text-[14px] text-zinc-400">Esto debería ser <strong className="text-blue-400">{'<'}5 minutos</strong> para todos los leads, 24/7</p>
                    </div>
                    
                    <div className="bg-[#121214] p-5 rounded-xl border border-zinc-800">
                      <p className="font-bold text-white mb-2 flex items-center gap-2">
                        <PhoneCall size={18} className="text-emerald-400" /> Para llamadas
                      </p>
                      <p className="text-[14px] text-zinc-400 mb-2">Esto debería ser <strong className="text-emerald-400">{'<'}5 minutos</strong> para todos los leads durante horario de oficina</p>
                      <div className="text-[13px] text-zinc-500 italic flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-zinc-600 shrink-0 mt-1.5"></div>
                        Lograr esto depende de tener una buena lógica de marcado, la cual vamos a cubrir en un momento.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Actividad del Setter */}
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Activity className="text-[#D5B15B]" size={32} />
              Actividad del Setter (Y Marcados Por Día)
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* La forma antigua */}
              <div className="bg-[#3A1414]/20 border border-red-500/20 rounded-2xl p-6 lg:p-8">
                <h4 className="text-lg font-bold text-red-400 mb-4 border-b border-red-500/20 pb-3">La forma antigua</h4>
                <p className="text-[15px] text-zinc-300 mb-4">
                  La forma antigua de medir la actividad del setter era monitorear un mínimo de marcados hechos por día
                </p>
                
                <div className="bg-[#121214] p-4 rounded-xl border border-red-500/10 mb-4">
                  <p className="font-bold text-white text-[14px] mb-2">Esto no está mal. Pero tiene limitaciones:</p>
                  <ul className="list-disc pl-5 text-[13px] text-zinc-400 space-y-2">
                    <li>Tu setter no puede marcar mientras está hablando con prospectos en vivo. Que es la forma más rentable en la que pueden usar su tiempo.</li>
                    <li>Así que si tienes un sistema en el que:
                      <ul className="list-[circle] pl-5 mt-1 space-y-1 text-zinc-500">
                        <li>Se dan transferencias en vivo a los setters</li>
                        <li>Se dan apps de triage "2" a los setters</li>
                        <li>Hay una tasa de contestación alta</li>
                        <li>Muchos prospectos agendan vía texto</li>
                        <li>Etc.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                
                <p className="text-[14px] text-zinc-300 italic mb-2">
                  Entonces va a parecer que el setter no está marcando. Aunque sea productivo.
                </p>
                <p className="text-[13px] text-zinc-500">
                  Ej: He tenido setters que hacen 20 marcados en un día, y consiguen 7 citas agendadas. Debido a respuestas, triages, agendar leads por texto, etc.
                </p>
              </div>

              {/* La mejor forma */}
              <div className="bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-2xl p-6 lg:p-8">
                <h4 className="text-lg font-bold text-[#A6E1BA] mb-4 border-b border-[#A6E1BA]/20 pb-3">La mejor forma</h4>
                <p className="text-[15px] text-zinc-300 mb-4">
                  La mejor forma es monitorear la <strong className="text-white">"Actividad del Setter"</strong> como KPI
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#A6E1BA] shrink-0 mt-0.5" />
                    <span className="text-[14px] text-zinc-300">Tienes que usar un Dialer OS (que se conecta a la mayoría de los dialers) o Dialer.io para hacer esto</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#A6E1BA] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[14px] text-zinc-300">Básicamente combina:</span>
                      <p className="font-bold text-[#E8CD82] mt-1 bg-[#121214] p-2 rounded-lg border border-zinc-800 text-center">
                        Tiempo de conversación + tiempo de marcado
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#A6E1BA] shrink-0 mt-0.5" />
                    <span className="text-[14px] text-zinc-300">De esta forma — incluso si tu setter es virtual — puedes literalmente ver cuántas horas trabaja cada día.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">La "Actividad del Setter" debería ser de <strong className="text-[#A6E1BA]">7 horas/día</strong>.</h4>
                  <p className="text-[14px] text-zinc-400 mb-3">Esto contempla:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-[14px] text-zinc-300 bg-[#121214] p-2 rounded-lg border border-zinc-800/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0"></div>
                      Reuniones de ventas/1 a 1s
                    </li>
                    <li className="flex items-center gap-2 text-[14px] text-zinc-300 bg-[#121214] p-2 rounded-lg border border-zinc-800/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0"></div>
                      Descansos
                    </li>
                    <li className="flex items-center gap-2 text-[14px] text-zinc-300 bg-[#121214] p-2 rounded-lg border border-zinc-800/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0"></div>
                      Almuerzo
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#121214] p-5 rounded-xl border border-zinc-800">
                    <p className="text-[14px] text-zinc-300 italic">
                      Si estás contratando a tus primeros 1-2 setters, no necesitas esto y puedes simplemente medirlo por producción <strong className="text-white">(80-110 citas agendadas por día)</strong>
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#121214] to-[#1A1A1E] p-5 rounded-xl border border-[#D5B15B]/30">
                    <p className="text-[14px] text-[#E8CD82] font-bold">
                      Pero a medida que tienes un equipo más grande, esto cambia el juego por completo.
                    </p>
                  </div>
                </div>
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

if (!content.includes(' Activity ')) {
  content = content.replace(/import \{([^\}]+)\} from 'lucide-react';/, "import {$1, Activity } from 'lucide-react';");
}

fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);

