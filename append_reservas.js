import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const replacement = `
        {/* Qué Hacer Si No Tienes Suficientes Leads */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Qué Hacer Si No Tienes Suficientes Leads Para 1 Setter. Pero Aún Tienes Leads Que Necesitan Ser Atendidos:
            </h3>
          </div>
          
          <ul className="space-y-4 text-[15px] text-zinc-300">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
              <span>Esto solo va a pasar cuando contratas a tu primer setter.</span>
            </li>
            
            <li>
              <div className="flex items-start gap-3 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                <span>El escenario:</span>
              </div>
              <ul className="list-disc pl-10 space-y-2 text-[14px] text-zinc-400">
                <li>Puede que tengas 400 opt-ins por setter al mes</li>
                <li>Hay apps de "2da categoría" que necesitan ser re-calificadas, no-shows a los que hay que contactar, apps sin reserva sin llamar, etc.</li>
                <li>Pero no tienes suficientes leads para que lleguen al OTE</li>
              </ul>
            </li>

            <li className="bg-[#1A1A1E] p-6 rounded-xl border border-zinc-800 mt-4">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2"></div>
                <span className="font-medium text-white">Aun así contrataría a un setter. Simplemente vas a tener que pagarle un sueldo garantizado hasta que el flujo de leads aumente.</span>
              </div>
              <ul className="list-disc pl-10 space-y-3 text-[14px] text-zinc-400">
                <li>Ej: Comp regular, pero le garantizas que gane 7k/mes. Entonces terminas pagando la diferencia entre lo que su comp regular le daría y los 7k.
                  <ul className="list-[circle] pl-5 mt-2 space-y-2 text-zinc-500">
                    <li>2500/mes + 3% de citas cerradas = 5k/mes que hubiera ganado.
                      <ul className="list-[square] pl-5 mt-2 text-emerald-400/80">
                        <li>Pagarías 2k extra para llegar a los 7k/mes.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Reservas Directas */}
        <section className="bg-gradient-to-br from-[#121214] to-[#1A1A1E] border border-zinc-800 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="mb-10 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              ¿Deberían Los Setters Tomar Reservas Directas?
            </h3>
            
            <div className="space-y-3">
              <p className="text-[15px] text-zinc-300 italic">
                <strong className="text-[#E8CD82] font-bold">Esto es multifacético. Y la respuesta es sí y no.</strong> Pero MUCHÍSIMA gente comete errores con esto.
              </p>
              <p className="text-[15px] text-zinc-300 italic">
                Lo clave es entender cómo debería funcionar el sales ops, y los factores que entran en esta ecuación.
              </p>
              <div className="bg-[#EBF7EF]/10 border border-[#A6E1BA]/30 p-4 rounded-xl inline-block mt-2">
                <p className="text-[14px] text-zinc-300 font-medium">
                  Tenemos un entrenamiento <strong className="text-[#A6E1BA]">COMPLETO</strong> sobre esto en el portal bajo sales ops. Pero aquí un resumen rápido:
                </p>
              </div>
            </div>
          </div>

          {/* Sales Ops Ideal */}
          <div className="mb-12 relative z-10">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-[#A6E1BA]" size={24} /> Sales Ops Ideal Para Funnels de Llamada
            </h4>
            
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 lg:p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5 text-xs text-zinc-400">1</div>
                  <span className="text-[15px] text-zinc-300 mt-1">Los prospectos aplican y agendan una llamada.</span>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5 text-xs text-zinc-400">2</div>
                  <div className="mt-1 w-full">
                    <span className="text-[15px] text-zinc-300">El coordinador de ventas califica cada una de las aplicaciones según las respuestas</span>
                    <ul className="list-disc pl-5 text-[13px] text-zinc-400 mt-2 space-y-1">
                      <li>Esto está en un entrenamiento separado</li>
                      <li>Saleskick también hace esto automáticamente (entre muchas otras funciones)</li>
                    </ul>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5 text-xs text-zinc-400">3</div>
                  <div className="mt-1 w-full">
                    <span className="text-[15px] text-zinc-300">Califican la aplicación del 1 al 4</span>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-[#121214] p-4 rounded-xl border border-red-500/20">
                        <p className="font-bold text-red-400 mb-1">1: Cancelar</p>
                        <p className="text-[13px] text-zinc-500">(spam, etc.)</p>
                      </div>
                      <div className="bg-[#121214] p-4 rounded-xl border border-[#D5B15B]/30">
                        <p className="font-bold text-[#E8CD82] mb-1">2: Pasar al setter</p>
                        <p className="text-[13px] text-zinc-500">(ver abajo qué es un "2")</p>
                      </div>
                      <div className="bg-[#121214] p-4 rounded-xl border border-[#A6E1BA]/30">
                        <p className="font-bold text-[#A6E1BA] mb-1">3: Directo al closer</p>
                      </div>
                      <div className="bg-[#121214] p-4 rounded-xl border border-emerald-500/30">
                        <p className="font-bold text-emerald-400 mb-1">4: Directo al closer</p>
                        <p className="text-[13px] text-zinc-500">Bueno tenerlo si haces "mejores leads a mejores closers"</p>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="bg-[#121214] p-6 rounded-xl border border-zinc-800/80 mt-6">
                  <p className="font-bold text-[#E8CD82] mb-4">¿Qué es un "2"?</p>
                  <ul className="space-y-3 text-[14px] text-zinc-300">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-1.5"></div>
                      <div>
                        No estás seguro si puedes ayudarlos
                        <p className="text-[13px] text-zinc-500 mt-1">Común en B2B</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-1.5"></div>
                      <div>
                        Basado en su aplicación, y en datos concretos, es poco probable que cierren o que se presenten.
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-[13px] text-zinc-400">
                          <li>Esto tiene que estar basado en datos</li>
                          <li>Ej: Podría ser una respuesta de una sola palabra en cierto campo, o finanzas no ideales</li>
                          <li><strong className="text-white">DEBES</strong> hacer esto basado en datos, no en el instinto, porque usualmente el instinto está equivocado</li>
                          <li className="italic text-zinc-500">(Por favor, revisa el entrenamiento de sales ops, hay mucho más sobre esto)</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-zinc-800/80 text-[14px] text-zinc-300 font-medium">
                    Así que envías estas a un setter para que las califique antes de agendarlas en el calendario del closer.
                  </div>
                </li>
              </ul>
              
              <div className="mt-6 bg-[#3A1414]/20 border border-red-500/30 p-5 rounded-xl space-y-3">
                <p className="text-[15px] text-zinc-300 italic font-medium">
                  <strong className="text-red-400">Las citas calificadas como "2" son las ÚNICAS reservas directas que tus setters deberían tomar.</strong>
                </p>
                <p className="text-[15px] text-zinc-300 italic">
                  Por el amor de Dios... <strong className="text-white">tus setters NO DEBERÍAN estar haciendo triage de CADA cita antes de que el closer la tome.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Por Qué No Deberías Enviar Todas Las Reservas */}
          <div className="mb-12 relative z-10">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <XCircle className="text-red-400" size={24} /> Por Qué No Deberías Enviar Todas Las Reservas Directas Al Setter:
            </h4>
            <p className="text-[15px] text-zinc-400 italic mb-6">La matemática simplemente no funciona:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Ejemplo 1 */}
              <div className="bg-[#1A1A1E] border border-emerald-500/20 rounded-2xl p-6">
                <h5 className="font-bold text-emerald-400 mb-4 border-b border-zinc-800 pb-3">Ejemplo 1: Enviando las llamadas al closer primero</h5>
                <ul className="space-y-3 text-[14px] text-zinc-300 font-mono">
                  <li className="flex justify-between border-b border-zinc-800/50 pb-1"><span>100 reservas</span></li>
                  <li className="flex justify-between border-b border-zinc-800/50 pb-1"><span>70 se presentan</span> <span className="text-zinc-500">(70%)</span></li>
                  <li className="flex justify-between border-b border-zinc-800/50 pb-1"><span>17.5 cierran</span> <span className="text-zinc-500">(25%)</span></li>
                  <li className="flex justify-between text-emerald-400 font-bold mt-2 pt-2 text-[16px]">
                    <span>$175,000</span>
                    <span className="text-[12px] font-normal text-zinc-500 mt-1">en efectivo cobrado (precio de 10k)</span>
                  </li>
                </ul>
              </div>

              {/* Ejemplo 2 */}
              <div className="bg-[#1A1A1E] border border-red-500/20 rounded-2xl p-6">
                <h5 className="font-bold text-red-400 mb-4 border-b border-zinc-800 pb-3">Ejemplo 2: Enviando las llamadas a los setters primero</h5>
                <ul className="space-y-3 text-[14px] text-zinc-300 font-mono">
                  <li className="flex justify-between border-b border-zinc-800/50 pb-1"><span>100 reservas</span></li>
                  <li className="flex justify-between border-b border-zinc-800/50 pb-1"><span>70 se presentan</span> <span className="text-zinc-500">(70%)</span></li>
                  <li className="flex justify-between border-b border-zinc-800/50 pb-1"><span>55 agendan con closer</span> <span className="text-zinc-500">(78% — generoso)</span></li>
                  <li className="flex justify-between border-b border-zinc-800/50 pb-1"><span>38.5 se presentan</span> <span className="text-zinc-500">(70%)</span></li>
                  <li className="flex justify-between border-b border-zinc-800/50 pb-1"><span>15.4 cierran</span> <span className="text-zinc-500">(40% *** una locura)</span></li>
                  <li className="flex justify-between text-red-400 font-bold mt-2 pt-2 text-[16px]">
                    <span>$154,000</span>
                    <span className="text-[12px] font-normal text-zinc-500 mt-1">en efectivo cobrado (precio de 10k)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 mb-8">
              <ul className="space-y-3 text-[15px] text-zinc-300">
                <li className="flex items-start gap-2">
                  <XCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                  <span className="font-bold text-red-400">Ganaste menos dinero</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle size={18} className="text-[#E8CD82] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">El calendario de tu closer ni siquiera está lleno</span>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-[14px] text-zinc-400">
                      <li>Se van a quejar</li>
                      <li>Tal vez renuncien</li>
                      <li>Vas a tener que contratar una tonelada de setters (Pagarles comisión = ganas menos dinero)</li>
                      <li>Etc — es una idiotez</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4 bg-gradient-to-r from-[#3A1414]/20 to-[#121214] border border-red-500/20 p-6 rounded-2xl">
              <p className="text-[15px] text-zinc-300 italic">
                Para que el modelo de "setter primero" siquiera llegue a punto de equilibrio... <strong className="text-white">necesitas que el closer cierre al 45.4%.</strong>
              </p>
              <p className="text-[15px] text-zinc-300 italic">
                Eso es solo para llegar al punto de equilibrio. Para que valga la pena, probablemente necesitarían cerrar al 55% considerando las comisiones del setter y la complejidad adicional que estás manejando.
              </p>
              <p className="text-[16px] text-[#E8CD82] font-bold text-center py-2 border-y border-[#D5B15B]/20">
                Los setters están para generar NUEVAS citas. No para calificar citas ya existentes.
              </p>
              <p className="text-[15px] text-zinc-300 italic">
                El otro problema es que, SI ACOSTUMBRAS a tu equipo a esto, todos van a caer en una rutina enorme, van a renunciar, etc., si intentas cambiarlo.
              </p>
            </div>
            
            <div className="mt-6">
              <p className="font-bold text-white mb-3">Así que no te fijes en este modelo. Y si quieres cambiarlo, ten cuidado:</p>
              <ul className="list-disc pl-5 space-y-2 text-[14px] text-zinc-400">
                <li>Pruébalo contigo mismo o con tu mejor closer
                  <ul className="list-[circle] pl-5 mt-1 text-zinc-500">
                    <li>Los leads van a estar más fríos. Así que van a necesitar "prueba" de que funciona.</li>
                  </ul>
                </li>
                <li>Traza cómo van a ganar más dinero (usualmente por tener más citas)</li>
                <li>Establece la expectativa de una tasa de cierre más baja (pero van a ganar más)</li>
              </ul>
            </div>
          </div>

          {/* Excepciones */}
          <div className="relative z-10">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Layers className="text-blue-400" size={24} /> Excepciones:
            </h4>
            
            <div className="space-y-4">
              <div className="bg-[#121214] border border-zinc-800 rounded-xl p-5">
                <p className="font-bold text-white mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  Si eres el dueño/fundador, y estás tratando de conservar tiempo.
                </p>
                <ul className="list-disc pl-8 text-[14px] text-zinc-400 space-y-1">
                  <li>Obviamente, esto está bien.</li>
                  <li>Pero cambia al otro modelo antes de escalar (ver arriba)</li>
                </ul>
              </div>

              <div className="bg-[#121214] border border-zinc-800 rounded-xl p-5">
                <p className="font-bold text-white mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  Si tus prospectos constantemente se presentan a la cita en una situación de no-compra
                </p>
                <ul className="list-disc pl-8 text-[14px] text-zinc-400 space-y-2">
                  <li>Esto es extremadamente común con contratistas.</li>
                  <li>Están en la camioneta. (Nunca en Zoom, no en una laptop)</li>
                  <li>Aun así haría los números para ver si deberías hacer:
                    <ul className="list-[circle] pl-5 mt-1 text-zinc-500">
                      <li>Closer primero (entonces es un cierre de 2 llamadas)</li>
                      <li>O setter primero (cierre de 15 → 60)</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="bg-[#121214] border border-zinc-800 rounded-xl p-5">
                <p className="font-bold text-white mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  Si lo que vendes tiene calificaciones estrictas y la mayoría de la gente no califica
                </p>
                <p className="text-[14px] text-zinc-400 pl-4 border-l-2 border-zinc-700 ml-2 mt-2">
                  Esto realmente no es una razón. Deberías poder filtrar esto en la aplicación. Pero lo pongo aquí porque es una razón por la que la gente cree que es una excepción.
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

