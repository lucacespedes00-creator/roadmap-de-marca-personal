import fs from 'fs';
let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const oldEnd = `          </div>
        </section>
      </div>
        </div>
      </div>
    </div>
  );
};`;

const newEnd = `          </div>
        </section>

        {/* --- NUEVA SECCIÓN --- */}
        <section id="section-22" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#484B75] p-2 rounded-lg text-white">
              <Settings size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Mejores Prácticas de Lógica de Marcación</h2>
          </div>
          
          <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
            <p className="text-[16px] text-zinc-300 leading-relaxed mb-10">
              Independientemente de la opción que elijas, deberías al menos conocer las mejores prácticas para que cuando alguien te configure esto, estés al tanto.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 size={24} className="text-emerald-500" /> Mejores Prácticas
            </h3>
            
            <div className="space-y-6">
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <ul className="list-disc pl-6 space-y-4 text-[15px] text-zinc-300 marker:text-emerald-500">
                  <li>
                    <span className="font-bold text-white">Los leads nuevos deben ser contactados de inmediato.</span>
                  </li>
                  <li>
                    <span className="font-bold text-white">Los leads nuevos que están más abajo en el embudo tienen mayor prioridad que los que están menos abajo.</span>
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>AOV alto &gt; AOV bajo</li>
                      <li>Apps sin reservas &gt; opt-ins</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold text-white">3 llamadas el primer día</span>
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>1 inmediata</li>
                      <li>Las otras 2 idealmente durante horas pico si es posible</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold text-white">Todo lead nuevo se inscribe automáticamente en una secuencia de emails</span>
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>Esto no debe parecer un "email de marketing"</li>
                      <li>Debe parecer contacto directo del setter</li>
                      <li>Completamente automatizado</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold text-white">Envío de mensajes de texto inmediato a leads nuevos</span>
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>Texto el día 2 y 3 (usualmente automatizado)</li>
                      <li>Cubriré lo de textos en un momento</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold text-white">Los setters siempre deben aprovechar al máximo las horas pico</span>
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>Y deberías saber cuáles son</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold text-white">Cadencia de 5-7 días</span>
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>Podés medir esto. Generalmente después de 5 días, no vale la pena.</li>
                      <li>Después del día 5 → 7: transición a la cadencia de "pipeline setter"</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold text-white">Priorizar los leads más recientes</span>
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>Día 2 &gt; Día 3</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold text-white">Ponderar otros criterios apropiadamente, si aplica</span>
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>Puntaje crediticio, liquidez, etc.</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold text-white">Criterios / etiquetado de desinscripción</span>
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>Si reservan una demo (vía setter / marketing), decir DNC → desinscribir</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-2">
              <MessageCircle size={24} className="text-blue-500" /> Mejores Prácticas - Textos
            </h3>
            
            <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl space-y-6">
              <p className="text-[15px] text-zinc-300 leading-relaxed">
                Para textos, recomiendo automatizar o usar IA para leads nuevos.<br/>
                Vamos a cubrir esto en un momento
              </p>
              
              <div className="bg-blue-500/10 border border-blue-500/20 p-5 rounded-lg">
                <p className="font-bold text-blue-400 mb-3 text-[15px]">Para apps sin reservas:</p>
                <ul className="list-disc pl-5 space-y-2 text-[14px] text-zinc-300 marker:text-blue-500/50">
                  <li>Usamos Saleskick AI SMS para volver a agendarlos automáticamente de inmediato.</li>
                  <li>Esto es muy efectivo, y no tenemos que pagar comisiones al setter.</li>
                  <li>También podrías configurar una automatización básica de SMS para esto si no querés usar Saleskick.</li>
                  <li>Entonces para estos casos, los setters solo llaman.</li>
                </ul>
              </div>
              
              <div className="bg-amber-500/10 border border-amber-500/20 p-5 rounded-lg">
                <p className="text-[15px] text-amber-200/90 leading-relaxed">
                  De nuevo, recomendaría contactar a Edward o Dialer si querés que te configuren esto. Y de nuevo - si sos nuevo y estás contratando a tu primer setter - NO TE ABRUMES. Podés simplemente aprender la teoría y dejar que el setter lo ejecute. No es tan complicado.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-2">
              <Clock size={24} className="text-purple-500" /> Cómo Determinar las Horas Pico de Llamadas
            </h3>
            
            <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl space-y-6">
              <p className="text-[15px] text-zinc-300 leading-relaxed">
                Lo mencioné varias veces:
              </p>
              <ol className="list-decimal pl-5 space-y-3 text-[15px] text-zinc-300 marker:text-purple-500 font-medium">
                <li>Extraé los datos de tasa de respuesta de HubSpot en un CSV</li>
                <li>Pasalos por Claude Code</li>
                <li>Dejá que Claude Code te lo diga</li>
              </ol>
              
              <p className="text-[15px] text-zinc-400 italic">
                Y no quiero insistir demasiado, pero Dialer lo hace automáticamente por vos. La mayoría de los sistemas de marcación no lo hacen.
              </p>
              
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <p className="text-[15px] text-zinc-300 leading-relaxed">
                  Hemos visto empresas descubrir que sus horas pico de llamadas son de 4 a 7pm. Y ajustaron los horarios de trabajo de sus setters en consecuencia - y literalmente vieron un aumento del <strong className="text-emerald-400">50%</strong> en la producción.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-2">
              <Layers size={24} className="text-[#D5B15B]" /> Procesos del Pipeline Setter
            </h3>
            
            <div className="space-y-8">
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">Antecedentes:</h4>
                <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-zinc-600">
                  <li>Con los años hemos acumulado muchísimos leads viejos en nuestro CRM.</li>
                  <li>Siempre supe que deberíamos aprovecharlos, pero nunca lo prioricé realmente.</li>
                  <li>En mi mastermind, uno de mis clientes, Tom, mencionó que había sumado casi 10M/año a su negocio contactando leads viejos.</li>
                  <li>Me puse las pilas y empecé a hacerlo.</li>
                  <li>¿Adivinen qué? Funcionó.</li>
                </ul>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">El Proceso:</h4>
                <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-zinc-600">
                  <li>Después del día 5, transferí todos los leads a una nueva lista que simplemente se llama "pipeline".</li>
                  <li>Podés crear una lógica de marcación similar acá, pero no es tan importante.</li>
                  <li>Generalmente vamos de más reciente → menos reciente.</li>
                  <li>Generalmente llegamos hasta los 90 días de antigüedad.</li>
                  <li>Lo que sí es importante es usar un sistema de marcación que pueda procesar muchos leads rápidamente.</li>
                  <li>Sé que parece que estoy haciendo publicidad, pero Dialer.io es excelente para esto.</li>
                </ul>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">¿Cuántos leads por pipeline setter?</h4>
                <p className="text-[15px] text-zinc-300 mb-4">Es difícil de definir exactamente. Pero lo que encontré:</p>
                <div className="bg-[#1A1A1E] border border-zinc-800 p-4 rounded-lg flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#D5B15B]/20 flex items-center justify-center text-[#D5B15B] font-bold text-lg shrink-0">
                    4:1
                  </div>
                  <p className="text-[15px] text-zinc-300 font-medium">Por cada 4 setters normales que tengas, probá tener 1 pipeline setter.</p>
                </div>
                <p className="text-[14px] text-zinc-400">No es una regla fija, pero probalo y fíjate qué funciona para vos.</p>
              </div>

              <div className="bg-[#2A2110]/30 border border-[#D5B15B]/30 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-[#D5B15B] mb-4 flex items-center gap-2">
                  <AlertTriangle size={20} /> Importante:
                </h4>
                <p className="text-[15px] text-zinc-300 mb-4">Generalmente vas a tener que pagarles de alguna de estas formas:</p>
                <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-[#D5B15B] mb-4">
                  <li>Comisión aumentada</li>
                  <li>Sueldo base aumentado</li>
                </ul>
                <p className="text-[14px] text-zinc-400 italic mb-6">
                  (Recomiendo el sueldo base, porque a veces estos chicos pueden cubrir a un setter inbound que esté enfermo, etc. Entonces el sueldo base funciona un poco mejor).
                </p>
                
                <div className="bg-black/20 p-4 rounded-lg space-y-3">
                  <p className="text-[15px] text-zinc-200">
                    <span className="font-bold text-emerald-400">El OTE debería ser 15-25% más bajo</span> que el de tus setters inbound.
                  </p>
                  <p className="text-[15px] text-zinc-300">
                    Esto funciona como un puesto junior, que es como tu "banco de suplentes" para ascender a setter inbound completo.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-br from-[#1A1A1E] to-[#25252A] border border-zinc-700/50 p-8 rounded-2xl text-center shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 text-white/5 rotate-12">
                <BookOpen size={160} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto bg-[#D5B15B]/20 text-[#D5B15B] flex items-center justify-center rounded-2xl mb-6 shadow-[0_0_20px_rgba(213,177,91,0.2)]">
                  <FileText size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Acá Están Todos los Scripts Que Necesitás</h3>
                <p className="text-[16px] text-zinc-400 font-medium mb-6">Email, SMS y Teléfono</p>
                <p className="text-[15px] text-zinc-500">Revisados según diferentes situaciones, funnels, etc.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
        </div>
      </div>
    </div>
  );
};`;
content = content.replace(oldEnd, newEnd);
fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);
