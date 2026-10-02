import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const replacement = `
        {/* Benchmarks Comunes */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="mb-10 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <BarChart className="text-blue-400" size={32} />
              Benchmarks Comunes:
            </h3>
            
            <div className="space-y-3">
              <p className="text-[15px] text-zinc-300 italic flex items-start gap-2">
                <span className="text-blue-400 mt-1">*</span>
                Esto depende mucho de la fuente del lead, así que te voy a dar algunas opciones:
              </p>
              <p className="text-[15px] text-zinc-300 italic flex items-start gap-2">
                <span className="text-blue-400 mt-1">*</span>
                Solo nos basamos en la métrica principal (sin contar no-shows, pipeline, etc.)
              </p>
              <div className="bg-[#1A1A1E] border border-blue-500/20 p-4 rounded-xl inline-block mt-2">
                <p className="text-[14px] text-zinc-300 font-medium">
                  Considera estos <strong className="text-blue-400">REQUISITOS</strong> de cuándo estás listo para contratar otro setter. Hasta que conozcas tus propias métricas.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {/* Funnel VSL / Webinar con Llamada con Opt-In */}
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors group">
              <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <Target size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Funnel VSL / Webinar con Llamada <strong className="text-blue-400 font-bold">con Opt-In</strong></span>
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0"></div>
                  <span className="text-[15px] text-zinc-300"><strong className="text-white">800-900</strong> opt-ins por setter al mes</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                  <span className="text-[15px] text-zinc-300"><strong className="text-emerald-400">80-110</strong> citas agendadas por setter al mes</span>
                </li>
              </ul>
            </div>

            {/* Funnel de Lead Magnet en PDF -> Llamada */}
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors group">
              <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <BookOpen size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Funnel de Lead Magnet en PDF → Llamada</span>
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0"></div>
                  <span className="text-[15px] text-zinc-300"><strong className="text-white">1200-1500</strong> citas agendadas por setter al mes</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                  <span className="text-[15px] text-zinc-300"><strong className="text-emerald-400">80-110</strong> citas agendadas por setter al mes</span>
                </li>
              </ul>
            </div>

            {/* Funnel VSL / Webinar con Llamada sin Opt-In */}
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors group">
              <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <Target size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Funnel VSL / Webinar con Llamada <strong className="text-blue-400 font-bold">sin Opt-In</strong> (Solo Directo a Aplicación)</span>
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0"></div>
                  <span className="text-[15px] text-zinc-300">"Funnel DTA"</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0"></div>
                  <span className="text-[15px] text-zinc-300"><strong className="text-white">400-500</strong> aplicaciones (sin reservas) por setter al mes</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                  <span className="text-[15px] text-zinc-300"><strong className="text-emerald-400">80-110</strong> citas agendadas por setter al mes</span>
                </li>
              </ul>
            </div>

            {/* Funnel de Comprador */}
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors group">
              <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <DollarSign size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Funnel de Comprador (Sin Llamada de Implementación)</span>
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0"></div>
                  <span className="text-[15px] text-zinc-300"><strong className="text-white">400-500</strong> compradores por setter al mes</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                  <span className="text-[15px] text-zinc-300"><strong className="text-emerald-400">80-110</strong> citas agendadas por setter al mes</span>
                </li>
              </ul>
              
              <div className="mt-5 bg-[#3A1414]/20 border border-red-500/20 p-4 rounded-xl">
                <p className="font-bold text-red-400 text-[14px] mb-2 flex items-start gap-2">
                  <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                  Este KPI cambia drásticamente si haces una llamada de implementación
                </p>
                <ul className="list-disc pl-8 text-[13px] text-zinc-400 space-y-1">
                  <li>Porque los "compradores que no agendan" suelen ser de calidad mucho más baja.</li>
                  <li>Puede que tengas que aumentar entre un 50-100%</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-10 bg-gradient-to-r from-[#121214] to-[#1A1A1E] border border-blue-500/30 rounded-2xl p-6 lg:p-8 relative z-10 shadow-lg">
             <div className="flex flex-col gap-4">
                <p className="text-[16px] text-zinc-300 leading-relaxed italic">
                  <strong className="text-blue-400 font-bold">*</strong> Como puedes ver con todas estas métricas, terminas en un rango de <strong className="text-emerald-400 font-bold">80-110 citas agendadas.</strong>
                </p>
                <p className="text-[16px] text-zinc-300 leading-relaxed italic">
                  <strong className="text-blue-400 font-bold">*</strong> He tenido setters con hasta <strong className="text-white font-bold">130-140+</strong> citas agendadas al mes. Pero, en general, <strong className="text-emerald-400 font-bold">80-110 es un buen rango.</strong>
                </p>
                <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl mt-2">
                  <p className="text-[15px] text-zinc-300 leading-relaxed italic flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      La forma de pensarlo es: en 80-110, significa que tu setter está teniendo suficientes respuestas y conversaciones calificadas al día como para prácticamente llenar su jornada, si es que van a tener conversaciones de verdadera calidad.
                    </span>
                  </p>
                </div>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
};`;

content = content.replace("      </div>\n    </div>\n  );\n};", replacement);

fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);

