import fs from 'fs';
let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

// Update Table of Contents
const oldToc = `{"id":"section-21","title":"Mejores Prácticas"}]}`;
const newToc = `{"id":"section-21","title":"Mejores Prácticas"},{"id":"section-22","title":"Mejores Prácticas de Lógica de Marcación"},{"id":"section-23","title":"Scripts de Mensajes de Texto"}]}`;
content = content.replace(oldToc, newToc);

const oldEnd = `            <div className="mt-16 bg-gradient-to-br from-[#1A1A1E] to-[#25252A] border border-zinc-700/50 p-8 rounded-2xl text-center shadow-2xl relative overflow-hidden">
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

const newEnd = `            <div className="mt-16 bg-gradient-to-br from-[#1A1A1E] to-[#25252A] border border-zinc-700/50 p-8 rounded-2xl text-center shadow-2xl relative overflow-hidden">
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

        {/* --- NUEVA SECCIÓN: SCRIPTS --- */}
        <section id="section-23" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#55B467] p-2 rounded-lg text-white">
              <MessageSquare size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Scripts de Mensajes de Texto:</h2>
          </div>

          <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
            {/* Mensaje Inicial */}
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-[#55B467]">#</span> Mensaje Inicial:
            </h3>

            <div className="space-y-6">
              {/* Variación 1 */}
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">Mensaje Inicial - Variación 1: Funnel de Llamada</h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3">
                  <p className="text-[15px] text-zinc-300 italic">Hola John - Soy Sam del equipo de Cole Gordon (Closersio) [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Vi que respondiste a nuestro anuncio sobre incorporar vendedores a tu negocio (Ej: En qué ayudás a la gente). [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">¿Encontraste a los setters que estabas buscando? ¿O seguís buscando? [ENVIAR]</p>
                </div>
              </div>

              {/* Variación 2 */}
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">Mensaje Inicial - Variación 2: Funnel de Llamada</h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3">
                  <p className="text-[15px] text-zinc-300 italic">Hola John - Soy Sam del equipo de Cole Gordon (Closersio) [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Vi que respondiste a un anuncio sobre potencialmente conseguir vendedores para tu negocio. ¿Es así? [ENVIAR]</p>
                </div>
              </div>

              {/* Variación 3 */}
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4 leading-snug">Mensaje Inicial - Variación 3: Funnel de Llamada Pero Específicamente Para Fuera de Horario Laboral <br/><span className="text-zinc-500 font-normal text-[15px]">(Usar Si Es Automatizado. Si Se Usa IA, No Es Necesario)</span></h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3">
                  <p className="text-[15px] text-zinc-300 italic">Hola John - Soy Sam del equipo de Cole Gordon (Closersio) [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Vi que respondiste a un anuncio sobre conseguir ayuda para incorporar vendedores a tu negocio, y quería consultarte para ver si puedo ayudar. [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Técnicamente, ahora estoy fuera de horario, pero si te interesa una charla rápida, agendá un horario para mañana o esta semana. ¡Con gusto te ayudo! LINK DE CALENDARIO [ENVIAR]</p>
                </div>
              </div>

              {/* Funnel Compradores */}
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">Mensaje Inicial - Específicamente Para Funnels de Compradores SIN Llamada de Implementación</h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3">
                  <p className="text-[15px] text-zinc-300 italic">Hola John - Soy Sam del equipo de Cole Gordon (Closersio) [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Te llamaba por [nombre del producto] que acabás de comprar [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Hacemos una llamada 1 a 1 con cada miembro nuevo de [producto]. Te escribí pero no logré comunicarme. ¿Cuándo sería un buen horario para charlar? Puedo dejarte mi link de calendario acá, si es más fácil... [ENVIAR]</p>
                </div>
              </div>
            </div>

            <hr className="border-zinc-800 my-12" />

            {/* Mensaje 2 */}
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-[#55B467]">#</span> Mensaje #2:
            </h3>

            <div className="space-y-6">
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">Segundo Mensaje - Funnel de Llamada (Independiente de la Variación)</h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3 mb-4">
                  <p className="text-[15px] text-zinc-300 italic">Intenté llamarte de nuevo, pero no te encontré. [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Acá te dejo un video rápido que explica más en detalle cómo trabajamos: LINK [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Avisame cuándo sería un buen momento para conectar. Puedo dejarte mi link de calendario acá, si es más fácil... [ENVIAR]</p>
                </div>
                <p className="text-[14px] text-zinc-500 italic">[Eliminar la frase "puedo dejarte mi link de calendario" si este primer mensaje fue el texto de fuera de horario]</p>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">Segundo Mensaje - Funnel de Comprador (Sin Llamada de Implementación)</h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3">
                  <p className="text-[15px] text-zinc-300 italic">Insistiendo con esto ^^ [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Te llamé de nuevo. Si es más fácil, podés reclamar la llamada 1 a 1 que compraste usando este link: LINK [ENVIAR]</p>
                </div>
              </div>
            </div>

            <hr className="border-zinc-800 my-12" />

            {/* Mensaje 3 */}
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-[#55B467]">#</span> Mensaje #3:
            </h3>

            <div className="space-y-6">
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">Tercer Mensaje - Funnel de Llamada (El Mensaje Original Fue En Horario Laboral)</h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3">
                  <p className="text-[15px] text-zinc-300 italic">Última consulta - ¿[lo que hacés: incorporar vendedores a tu negocio?] sigue siendo una prioridad? [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Si no, no hay problema. No quiero saturarte el teléfono. [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">¿Me escribís y me contás? [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Acá te dejo mi link de calendario, si querés simplemente agendar un horario. Con gusto te doy más información sobre nuestros servicios de reclutamiento: LINK [ENVIAR]</p>
                </div>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">Tercer Mensaje - Funnel de Llamada (Si el Primer Mensaje Fue En Horario Laboral)</h4>
                <p className="text-[15px] text-zinc-300 italic mb-2">Simplemente no les envíes la última línea sobre "Acá te dejo mi link de calendario, si querés..."</p>
                <p className="text-[15px] text-zinc-300 italic">Porque ya se la enviaste</p>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">Tercer Mensaje - Funnel de Comprador Sin Llamada de Implementación</h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3">
                  <p className="text-[15px] text-zinc-300 italic">Consulté con el equipo. Parece que todavía no agendaste tu llamada de inicio 1 a 1. [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">¿Me respondés y me contás? Quiero asegurarme de que recibas lo que pagaste :-) [ENVIAR]</p>
                </div>
              </div>
            </div>

            <hr className="border-zinc-800 my-12" />

            {/* Cuando Responden */}
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-[#55B467]">#</span> Cuando Responden
            </h3>

            <div className="space-y-6">
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">#1: Llamar inmediatamente / doble marcación</h4>
                <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-zinc-600">
                  <li>Entonces este lead pasa a ser mayor prioridad (yo lo contactaría 3 veces al día como si fuera un "lead nuevo")</li>
                </ul>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">#2: Si no responden, enviar lo siguiente</h4>
                <p className="text-[15px] text-zinc-400 font-bold mb-3">Ejemplo:</p>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3 mb-6">
                  <p className="text-[15px] text-zinc-300 italic">Perfecto. Con gusto te ayudo. ¿Cómo tenés la semana? Puedo dejarte mi link de calendario acá, si es más fácil...</p>
                </div>

                <p className="text-[15px] text-zinc-400 font-bold mb-3">Cuando te pidan que les dejes el link de calendario:</p>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3">
                  <p className="text-[15px] text-zinc-300 italic">Podés agendar acá: LINK</p>
                  <p className="text-[15px] text-zinc-300 italic">¿Me avisás si encontrás un horario? A veces mi disponibilidad se pone un poco rara.</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[#1A1A1E] to-[#25252A] border border-zinc-700/50 p-8 rounded-2xl shadow-2xl mt-8">
                <p className="text-[16px] font-bold text-white mb-4 flex items-center gap-2">
                  <Target size={20} className="text-[#55B467]" /> Ver Imagen de Flujo Abajo:
                </p>
                <p className="text-[15px] text-zinc-400 mb-6">
                  O acá: <a href="https://drive.google.com/file/d/1utYca50wfAO6Um8gWFV8E3TDqORtEfxA/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Ver en Google Drive</a>
                </p>
                <div className="rounded-xl overflow-hidden border border-zinc-800 h-[600px]">
                  <iframe 
                    src="https://drive.google.com/file/d/1utYca50wfAO6Um8gWFV8E3TDqORtEfxA/preview" 
                    width="100%" 
                    height="100%" 
                    allow="autoplay"
                    className="w-full h-full bg-zinc-900 border-0"
                  ></iframe>
                </div>
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
