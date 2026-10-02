import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const replacement = `
        {/* KPIs de Setter Para Funnel de Llamada */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="mb-10 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <TrendingUp className="text-emerald-400" size={32} />
              KPIs de Setter Para Funnel de Llamada
            </h3>
            <p className="text-[15px] text-zinc-300 italic">
              <strong className="text-emerald-400 font-bold">*</strong> La actividad del setter + la velocidad de contacto al lead también son muy importantes, las cubriremos en un momento.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
            {/* Main KPIs */}
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 lg:p-8 col-span-1 lg:col-span-2">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-zinc-800 pb-4">
                <Target className="text-emerald-400" size={24} />
                Funnel de Llamada con Opt-In
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Col 1 */}
                <div className="space-y-5">
                  <div className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                    <p className="font-bold text-white mb-2 flex justify-between">
                      <span>Marcado → Conversación:</span>
                      <span className="text-emerald-400">10-15%</span>
                    </p>
                    <ul className="list-disc pl-5 text-[13px] text-zinc-400 space-y-1">
                      <li>La tasa de contestación es un poco más alta que este número</li>
                      <li>Con dialer, hemos tenido tasas de 15-20%</li>
                    </ul>
                  </div>

                  <div className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                    <p className="font-bold text-white mb-2 flex justify-between">
                      <span>Conversación → Cita agendada:</span>
                      <span className="text-emerald-400">65-70%</span>
                    </p>
                    <ul className="list-disc pl-5 text-[13px] text-zinc-400 space-y-1">
                      <li>Puede ser más bajo en B2B por la calificación (40-50%)</li>
                    </ul>
                  </div>

                  <div className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                    <p className="font-bold text-white mb-2 flex justify-between">
                      <span>Lead → Cita agendada:</span>
                      <span className="text-emerald-400">10-20%</span>
                    </p>
                    <ul className="list-disc pl-5 text-[13px] text-zinc-400 space-y-2">
                      <li>Esto puede variar muchísimo según:
                        <ul className="list-[circle] pl-5 mt-1 space-y-1 text-zinc-500">
                          <li>Calidad del lead</li>
                          <li># de triages de reserva directa (Más de esto va a aumentar el ratio)</li>
                          <li>Citas por transferencia en vivo</li>
                        </ul>
                      </li>
                      <li>Ej: Para mi B2B, estamos en 40% de lead a cita. Pero en gran parte es porque:
                        <ul className="list-[circle] pl-5 mt-1 space-y-1 text-zinc-500">
                          <li>Muchas transferencias en vivo (LT)</li>
                          <li>Muchos triages de "2"</li>
                          <li>Eso hace subir este número</li>
                        </ul>
                      </li>
                      <li className="text-emerald-400/80">8-10% es un buen ratio de lead a cita si es PURAMENTE outbound sobre los opt-ins, sin nada de lo anterior.
                        <ul className="list-[circle] pl-5 mt-1 space-y-1 text-zinc-500">
                          <li>Puede ser difícil de delimitar con tu tracking</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Col 2 */}
                <div className="space-y-5">
                  <div className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                    <p className="font-bold text-white mb-2 flex justify-between">
                      <span>Tasa de asistencia (de citas agendadas):</span>
                      <span className="text-emerald-400">70-80%+</span>
                    </p>
                    <ul className="list-disc pl-5 text-[13px] text-zinc-400 space-y-1">
                      <li>70% es una buena meta.</li>
                      <li>Hemos tenido hasta 90% (B2B ayuda un poco)</li>
                    </ul>
                  </div>

                  <div className="bg-[#121214] p-5 rounded-xl border border-[#D5B15B]/20">
                    <p className="font-bold text-[#E8CD82] mb-3">
                      Tasa de cierre de la cita:
                    </p>
                    <p className="text-[14px] text-zinc-300 mb-2">Esto debería ser 20-30% más alto que tu tasa de cierre de llamadas por ads.</p>
                    <ul className="list-disc pl-5 text-[13px] text-zinc-400 space-y-1 mb-3">
                      <li>Cierre de ads = 25%</li>
                      <li>Cierre de setter = 30-33%</li>
                    </ul>
                    <div className="bg-[#3A1414]/30 border border-red-500/20 p-3 rounded-lg">
                      <p className="font-medium text-white text-[13px]">Tus citas agendadas deberían ser tus MEJORES leads.</p>
                      <p className="text-red-400 text-[13px] italic mt-1">Si no, tus setters son malos.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#121214] p-4 rounded-xl border border-emerald-500/20 text-center">
                      <p className="text-[12px] text-zinc-400 uppercase tracking-wider mb-1">Citas/Setter/Mes</p>
                      <p className="text-2xl font-bold text-emerald-400">80-110</p>
                    </div>
                    <div className="bg-[#121214] p-4 rounded-xl border border-zinc-800/80 text-center flex flex-col justify-center">
                      <p className="text-[12px] text-zinc-400 uppercase tracking-wider mb-1">Leads/Setter/Mes</p>
                      <p className="text-[14px] font-bold text-white">Ya lo cubrimos</p>
                      <p className="text-[11px] text-zinc-500">(depende del funnel)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ajustes */}
            <div className="space-y-6">
              <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6">
                <h5 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Briefcase className="text-blue-400" size={20} />
                  Ajustes Para Funnel de Comprador <span className="text-zinc-500 font-normal text-sm">(Sin Llamada)</span>
                </h5>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center bg-[#121214] p-3 rounded-lg border border-zinc-800/50">
                    <span className="text-[14px] text-zinc-300 font-medium">Lead a cita:</span>
                    <span className="text-blue-400 font-bold">20%+</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-1.5"></div>
                    <span className="text-[13px] text-zinc-400">Todas las demás métricas se mantienen relativamente iguales</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6">
                <h5 className="font-bold text-white mb-4 flex items-center gap-2">
                  <BookOpen className="text-[#D5B15B]" size={20} />
                  Ajustes Para Leads de PDF
                </h5>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center bg-[#121214] p-3 rounded-lg border border-zinc-800/50">
                    <span className="text-[14px] text-zinc-300 font-medium">Lead a cita:</span>
                    <span className="text-[#E8CD82] font-bold">6-8%</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Metricas mas importantes */}
            <div className="bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-2xl p-6">
              <h5 className="font-bold text-[#A6E1BA] mb-4 flex items-center gap-2 border-b border-[#A6E1BA]/10 pb-3">
                <BarChart size={20} />
                Métricas Más Importantes:
              </h5>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span className="text-[15px] text-zinc-300">Leads/Setter/Mes: <span className="text-zinc-500 italic">Ya lo cubrimos</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span className="text-[15px] text-zinc-300">Citas/Setter/Mes: <strong className="text-emerald-400">80-110</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span className="text-[15px] text-zinc-300">Velocidad al lead <span className="text-zinc-500 italic">(por cubrir)</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span className="text-[15px] text-zinc-300">Actividad del setter <span className="text-zinc-500 italic">(por cubrir)</span></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-zinc-800 space-y-4">
            <p className="text-[15px] text-zinc-400 italic leading-relaxed">
              Si simplemente te enfocas en lograr que un setter llegue a 80-110, usándolo como base para todas las métricas del mid-funnel, y luego sigues la fórmula para encontrar tu verdadero KPI de leads por setter, el resto va a acomodarse solo.
            </p>
            <p className="text-[15px] text-zinc-400 italic leading-relaxed">
              Es difícil dar métricas exactas porque varía bastante según el negocio, pero esto te va a dar un excelente punto de partida.
            </p>
            <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800/80">
              <p className="text-[15px] text-zinc-300 italic flex items-start gap-3">
                <Target className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                <span>
                  Si no sabes si una métrica como "conversación a cita" es buena o no, <strong className="text-white">simplemente revisa un día completo de llamadas de uno de tus setters.</strong> Lo vas a saber, y va a ser obvio.
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};`;

content = content.replace("      </div>\n    </div>\n  );\n};", replacement);

fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);
