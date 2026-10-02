import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const replacement = `
        {/* Cuantos Leads Por Setter Al Mes */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <Users className="text-[#A6E1BA]" size={32} />
              ¿Cuántos Leads Por Setter Al Mes?
            </h3>
            <p className="text-[16px] text-zinc-300">
              Ahora que entendemos los diferentes modelos MDR, ¿cuántos leads le deberías dar a cada setter al mes?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#3A1414]/20 border border-red-500/20 rounded-2xl p-6">
              <h4 className="font-bold text-red-400 mb-2">Demasiados leads por setter/mes</h4>
              <p className="text-[15px] text-zinc-300 mb-3">= dinero perdido en la mesa</p>
              <div className="text-[13px] text-zinc-500 italic">Común cuando se está a escala</div>
            </div>
            
            <div className="bg-[#3A1414]/20 border border-red-500/20 rounded-2xl p-6">
              <h4 className="font-bold text-red-400 mb-2">Muy pocos leads/setter</h4>
              <p className="text-[15px] text-zinc-300 mb-3">= todo tu sistema no va a funcionar</p>
              <div className="text-[13px] text-zinc-500 italic">Común al principio</div>
            </div>
          </div>

          {/* La Formula Intro */}
          <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-8 mb-10 relative">
            <div className="absolute top-0 left-0 w-1 bg-[#D5B15B] h-full rounded-l-2xl"></div>
            <h4 className="text-xl font-bold text-[#E8CD82] mb-6 flex items-center gap-2">
              <BookOpen size={24} /> Enseñándote a Pescar (La Fórmula)
            </h4>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                <span className="text-[15px] text-zinc-300">En un momento te voy a dar los benchmarks.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                <span className="text-[15px] text-zinc-300">Pero lo más importante es que sepas cómo <em>pensar</em> esta pregunta.</span>
              </li>
              <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80 mt-4">
                <p className="font-bold text-white mb-3">¿Por qué?</p>
                <ul className="list-disc pl-5 text-[14px] text-zinc-400 space-y-2">
                  <li>Porque cada mercado/industria es diferente</li>
                  <li>Diferentes funnels tienen diferente calidad de lead</li>
                  <li className="text-emerald-400">= diferentes KPIs de leads/setter/mes para diferentes negocios.</li>
                </ul>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                <span className="text-[15px] text-zinc-300">Así que aunque te puedo dar benchmarks, necesitas tener un marco de referencia para pensarlo por ti mismo.</span>
              </li>
            </ul>
          </div>

          {/* La Formula Steps */}
          <div className="mb-10">
            <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Calculator className="text-[#A6E1BA]" size={28} /> La Fórmula:
            </h4>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 lg:p-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EBF7EF]/10 border border-[#A6E1BA]/30 flex items-center justify-center text-[#A6E1BA] font-bold shrink-0">1</div>
                  <div>
                    <h5 className="text-lg font-bold text-white mb-4">Establece el OTE (ingreso objetivo total) target para los setters</h5>
                    <ul className="list-none space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-[#A6E1BA] font-mono text-sm shrink-0">a.</span>
                        <span className="text-[15px] text-zinc-300">Se cubre en la sección de compensación (video separado)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#A6E1BA] font-mono text-sm shrink-0">b.</span>
                        <span className="text-[15px] text-zinc-300">Recomiendo pagar de más (ver errores comunes más adelante)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#A6E1BA] font-mono text-sm shrink-0">c.</span>
                        <span className="text-[15px] text-zinc-300">Digamos que tu target de pago es 10k/mes. (Rango de OTE de 7-12k/mes)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 lg:p-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EBF7EF]/10 border border-[#A6E1BA]/30 flex items-center justify-center text-[#A6E1BA] font-bold shrink-0">2</div>
                  <div>
                    <h5 className="text-lg font-bold text-white mb-4">Empieza con los números de benchmark que tengo</h5>
                    <ul className="list-none space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-[#A6E1BA] font-mono text-sm shrink-0">a.</span>
                        <span className="text-[15px] text-zinc-300">Los cubriremos en un momento</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 lg:p-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EBF7EF]/10 border border-[#A6E1BA]/30 flex items-center justify-center text-[#A6E1BA] font-bold shrink-0">3</div>
                  <div className="w-full">
                    <h5 className="text-lg font-bold text-white mb-6">Agrega setters / disminuye lentamente los leads por setter al mes</h5>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-[#121214] p-6 rounded-xl border border-zinc-800/80">
                        <p className="font-bold text-[#E8CD82] mb-4 flex items-start gap-2">
                          <span className="text-zinc-500 font-mono text-sm mt-0.5">a.</span>
                          Escenario 1: Negocio nuevo
                        </p>
                        <ul className="list-none space-y-2 text-[14px] text-zinc-300">
                          <li><span className="text-zinc-500 mr-2">i.</span> Tienes 800 opt-ins/mes (funnel VSL)</li>
                          <li><span className="text-zinc-500 mr-2">ii.</span> Contratas 1 setter <span className="text-zinc-500 italic">(esto está justo en el benchmark)</span></li>
                          <li><span className="text-zinc-500 mr-2">iii.</span> Aumentas a 1200 opt-ins/mes</li>
                          <li><span className="text-zinc-500 mr-2">iv.</span> Contratas un segundo setter</li>
                          <li className="text-emerald-400 mt-2 font-medium"><span className="text-zinc-500 mr-2">v.</span> Ahora, cada uno tiene 600 opt-ins/mes</li>
                        </ul>
                      </div>

                      <div className="bg-[#121214] p-6 rounded-xl border border-zinc-800/80">
                        <p className="font-bold text-[#E8CD82] mb-4 flex items-start gap-2">
                          <span className="text-zinc-500 font-mono text-sm mt-0.5">b.</span>
                          Escenario 2: Negocio establecido
                        </p>
                        <ul className="list-none space-y-2 text-[14px] text-zinc-300">
                          <li><span className="text-zinc-500 mr-2">i.</span> Tienes 4800 leads al mes</li>
                          <li><span className="text-zinc-500 mr-2">ii.</span> 6 setters</li>
                          <li><span className="text-zinc-500 mr-2">iii.</span> 800 leads por setter <span className="text-zinc-500 italic">(esto está justo en el benchmark)</span></li>
                          <li><span className="text-zinc-500 mr-2">iv.</span> No cambias nada. Agregas 1 setter.</li>
                          <li className="text-emerald-400 mt-2 font-medium"><span className="text-zinc-500 mr-2">v.</span> Ahora, cada uno tiene 685</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 lg:p-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EBF7EF]/10 border border-[#A6E1BA]/30 flex items-center justify-center text-[#A6E1BA] font-bold shrink-0">4</div>
                  <div className="w-full">
                    <h5 className="text-lg font-bold text-white mb-6">Resultado: Tres Escenarios:</h5>
                    
                    <div className="space-y-6">
                      <div className="bg-[#121214] p-6 rounded-xl border border-zinc-800/80">
                        <p className="font-bold text-[#A6E1BA] mb-3 flex items-start gap-2">
                          <span className="text-zinc-500 font-mono text-sm mt-0.5">a.</span>
                          La producción individual del setter existente se mantiene igual. La producción del equipo sube significativamente.
                        </p>
                        <ul className="list-none space-y-2 text-[14px] text-zinc-300 ml-6">
                          <li><span className="text-zinc-500 mr-2">i.</span> Esto solo significa que tenías demasiados leads/setter</li>
                          <li className="text-emerald-400"><span className="text-zinc-500 mr-2">ii.</span> Este es un aumento masivo de eficiencia</li>
                        </ul>
                      </div>

                      <div className="bg-[#121214] p-6 rounded-xl border border-zinc-800/80">
                        <p className="font-bold text-[#E8CD82] mb-3 flex items-start gap-2">
                          <span className="text-zinc-500 font-mono text-sm mt-0.5">b.</span>
                          La producción individual existente baja levemente. La producción del equipo sube moderadamente.
                        </p>
                        <ul className="list-none space-y-2 text-[14px] text-zinc-300 ml-6">
                          <li><span className="text-zinc-500 mr-2">i.</span> Estás bien aquí SIEMPRE Y CUANDO los setters con buen desempeño individual sigan en o cerca del OTE target (aprox: 10k/mes en este ejemplo)</li>
                        </ul>
                      </div>

                      <div className="bg-[#3A1414]/20 p-6 rounded-xl border border-red-500/20">
                        <p className="font-bold text-red-400 mb-3 flex items-start gap-2">
                          <span className="text-red-500/50 font-mono text-sm mt-0.5">c.</span>
                          La producción individual existente baja significativamente. La producción del equipo sube levemente (o nada).
                        </p>
                        <ul className="list-none space-y-3 text-[14px] text-zinc-300 ml-6">
                          <li><span className="text-red-500/50 mr-2">i.</span> Esto usualmente es un problema porque la compensación de tus mejores performers va a caer por debajo del OTE target</li>
                          <li><span className="text-red-500/50 mr-2">ii.</span> En nuestro ejemplo de 10k/mes, esto significa que tu 25% superior ahora bajó a 7-8k/mes.</li>
                          <li><span className="text-red-500/50 mr-2">iii.</span> Esto significa que estás sobrestaffeado (tienes demasiado personal).
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-zinc-400">
                              <li>1. Corta a los performers de bajo rendimiento</li>
                              <li>2. Aumenta los leads</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resumen */}
          <div className="bg-gradient-to-r from-[#121214] to-[#1A1A1E] border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D5B15B]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
            
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-[#A6E1BA]" size={24} /> En resumen:
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  </div>
                  <span className="text-[15px] text-zinc-300">Determina el OTE por encima del promedio</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  </div>
                  <span className="text-[15px] text-zinc-300">Empieza en el benchmark (abajo)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  </div>
                  <div>
                    <span className="text-[15px] text-zinc-300 block mb-2">Aumenta continuamente el número de setters <span className="text-zinc-500">(disminuyendo el conteo de leads por setter/mes)</span></span>
                    <div className="bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
                      <p className="text-[13px] text-zinc-400 mb-2">Para medir la producción general del equipo, simplemente mira:</p>
                      <ul className="list-disc pl-5 text-[14px] text-zinc-300 space-y-1">
                        <li>% de lead a set (cita agendada)</li>
                        <li>Costo por cita agendada del setter <span className="text-zinc-500">(gasto en ads / citas agendadas)</span></li>
                      </ul>
                      <p className="text-[14px] text-emerald-400 mt-2 font-medium">Si mejoran, tu producción está subiendo</p>
                    </div>
                  </div>
                </li>
              </ul>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  </div>
                  <span className="text-[15px] text-zinc-300">Detente cuando el OTE del 25% superior esté por debajo del OTE target.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  </div>
                  <span className="text-[15px] text-zinc-300">Ahora ya conoces tu verdadero KPI para ese funnel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  </div>
                  <span className="text-[15px] text-zinc-300 font-bold text-white">Úsalo de ahí en adelante.</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 bg-[#3A1414]/20 border border-red-500/30 p-5 rounded-xl flex items-start gap-3">
              <AlertTriangle className="text-red-400 shrink-0 mt-0.5" size={20} />
              <p className="text-[15px] text-zinc-300 italic">
                <strong className="text-red-400 font-bold">No quieres que el setter baje del OTE target</strong>, porque te arriesgas a que renuncie (churn). Y sin un buen OTE, no vas a atraer/retener buenos setters.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};`;

content = content.replace("      </div>\n    </div>\n  );\n};", replacement);

// check and inject missing imports
const missingIcons = ['Users', 'DollarSign', 'BookOpen', 'Calculator', 'AlertTriangle'];
for (const icon of missingIcons) {
  if (!content.includes(` ${icon} `) && !content.includes(` ${icon},`)) {
    content = content.replace("from 'lucide-react';", `, ${icon} } from 'lucide-react';`);
  }
}

fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);

