import fs from 'fs';
let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const importSearch = "Cpu, FileText } from 'lucide-react';";
const importReplace = "Cpu, FileText, PhoneForwarded, Search, Info, PlayCircle, Video } from 'lucide-react';";
content = content.replace(importSearch, importReplace);

const oldToc = `{"id":"section-28","title":"Scripts de Llamadas"},{"id":"section-29","title":"Diferentes Variaciones"}]}`;
const newToc = `{"id":"section-28","title":"Scripts de Llamadas"},{"id":"section-29","title":"Diferentes Variaciones"},{"id":"section-30","title":"Guion Outbound"}]}`;
content = content.replace(oldToc, newToc);

const endSearch = `          </div>
        </section>
      </div>
        </div>
      </div>
    </div>
  );
};`;

const newSectionCode = `          </div>
        </section>

        <hr className="border-zinc-800 my-16" />

        {/* --- NUEVA SECCIÓN: Guion Outbound --- */}
        <section id="section-30" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-teal-500/20 p-2 rounded-lg text-teal-400">
              <PhoneForwarded size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Guion Outbound</h2>
          </div>

          <div className="mb-10 text-[16px] text-zinc-300 leading-relaxed bg-[#121214] border border-zinc-800 p-6 rounded-xl shadow-lg">
            <p className="mb-4">
              Vamos a cubrir primero el guion de llamadas salientes (outbound), porque es la versión más completa del proceso de principio a fin.
            </p>
            <p>
              Después veremos todas las variaciones y ajustes.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* Proceso de Flujo de Llamada Outbound */}
            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Target className="text-teal-400" size={24} />
                Proceso de Flujo de Llamada Outbound
              </h3>
              
              <div className="space-y-6">
                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <h4 className="text-[17px] font-bold text-teal-400 mb-4">Introducción:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-teal-400/50">
                    <li>Gancho (Hook) → Acuerdo para pasar a Discovery (Descubrimiento)</li>
                  </ul>
                </div>

                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <h4 className="text-[17px] font-bold text-teal-400 mb-4">Discovery (Descubrimiento):</h4>
                  <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-teal-400/50">
                    <li>¿Por qué están aquí?</li>
                    <li>Información de fondo</li>
                    <li>Aislar el/los problema(s)</li>
                    <li>Desglosar (Chunk Down)</li>
                    <li>Justificación de la necesidad (Need Pay Off)</li>
                  </ul>
                </div>

                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <h4 className="text-[17px] font-bold text-teal-400 mb-4">Transición:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-teal-400/50">
                    <li>Afirmar que puedes ayudar</li>
                    <li>Referenciar a alguien a quien hayas ayudado</li>
                    <li>Vender el valor de la reunión con el closer</li>
                  </ul>
                </div>

                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <h4 className="text-[17px] font-bold text-teal-400 mb-4">Agendar:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-teal-400/50">
                    <li>Elegir horario</li>
                    <li>Asegurar el compromiso de asistencia</li>
                    <li>Hacer que acepten la invitación de calendario</li>
                  </ul>
                </div>

                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <h4 className="text-[17px] font-bold text-teal-400 mb-4">Calificar (Opcional)</h4>
                  <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-teal-400/50">
                    <li>Hacer aquí las preguntas difíciles, si es necesario</li>
                  </ul>
                </div>

                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <h4 className="text-[17px] font-bold text-teal-400 mb-4">Terminar la llamada</h4>
                  <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-teal-400/50">
                    <li>Comprometerlos a ver el video previo a la llamada (precall)</li>
                    <li>Terminar la llamada</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Discovery Setter vs Closer */}
            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Search className="text-blue-400" size={24} />
                ¿Qué tan profundo debe llegar un Setter en el Discovery... comparado con un Closer?
              </h3>
              
              <p className="text-[15px] text-zinc-400 mb-8 italic">
                Me hacen esta pregunta todo el tiempo. Así que déjame mostrarte el discovery del closer para que puedas comparar/contrastar.
              </p>
              
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[18px] font-bold text-blue-400 mb-6 border-b border-zinc-800 pb-3">
                  Discovery del Closer:
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-3 text-[15px] text-zinc-300">
                      <li className="flex items-start gap-2">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>¿Por qué están aquí?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>¿Información de fondo?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>Aislar el/los problema(s)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>Desglosar (Chunk Down)</span>
                      </li>
                      <li className="flex items-start gap-2 mt-4">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>
                          <strong className="text-white">Estirar el dolor (Stretch Pain)</strong>
                          <ul className="pl-5 mt-2 space-y-1 text-zinc-400">
                            <li>- ¿Hace cuánto tiempo?</li>
                            <li>- Dolor compuesto (B2C)</li>
                            <li>- Conectándolo con otras áreas de su vida</li>
                          </ul>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3 text-[15px] text-zinc-300">
                      <li className="flex items-start gap-2">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>
                          <strong className="text-white">Intentos pasados</strong>
                          <ul className="pl-5 mt-2 space-y-1 text-zinc-400">
                            <li>- ¿Qué han intentado en el pasado?</li>
                            <li>- ¿Qué los ha mantenido estancados? ¿Qué se los impide?</li>
                          </ul>
                        </span>
                      </li>
                      <li className="flex items-start gap-2 mt-4">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>
                          <strong className="text-white">Costo:</strong>
                          <ul className="pl-5 mt-2 space-y-1 text-zinc-400">
                            <li>- ¿Qué pasa si nada cambia?</li>
                          </ul>
                        </span>
                      </li>
                      <li className="flex items-start gap-2 mt-4">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>
                          <strong className="text-white">Deseo</strong>
                          <ul className="pl-5 mt-2 space-y-1 text-zinc-400">
                            <li>- Objetivo</li>
                            <li>- Por qué</li>
                            <li>- Impacto</li>
                          </ul>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Algunas cosas antes de empezar */}
            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Info className="text-[#D5B15B]" size={24} />
                Algunas cosas antes de empezar:
              </h3>
              
              <div className="space-y-6">
                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D5B15B]/20 text-[#D5B15B] flex items-center justify-center font-bold text-lg shrink-0">1</div>
                  <div className="text-[15px] text-zinc-300 space-y-3 pt-1">
                    <p>
                      Te recomiendo mucho también revisar los otros videos de entrenamiento de ventas en mi canal de YouTube y en nuestro portal de Skool. Los entrenamientos de closers profundizan mucho más en la psicología de ventas, y diferentes matices y tácticas que puedes usar durante la llamada.
                    </p>
                    <p>
                      Este entrenamiento es bastante extenso, así que te estoy dando lo esencial en cuanto al proceso de llamada de un setter.
                    </p>
                  </div>
                </div>

                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-[#D5B15B]/20 text-[#D5B15B] flex items-center justify-center font-bold text-lg shrink-0">2</div>
                  <div className="text-[15px] text-zinc-300">
                    Puedes ver un ejemplo mío haciendo una llamada de setter <a href="#" className="text-blue-400 hover:underline">aquí</a>.
                  </div>
                </div>

                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D5B15B]/20 text-[#D5B15B] flex items-center justify-center font-bold text-lg shrink-0">3</div>
                  <div className="text-[15px] text-zinc-300 pt-1">
                    Este ejemplo que te estoy dando es para vender algo relacionado con generación de leads. Pero al final, te daré diferentes ajustes y marcos de trabajo para ofertas tipo B2C.
                  </div>
                </div>
              </div>
            </div>

            {/* Guion - Introducción */}
            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <PlayCircle className="text-purple-400" size={24} />
                Introducción:
              </h3>
              
              <div className="bg-[#121214] border border-purple-500/30 p-6 md:p-8 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.05)] relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-full pointer-events-none"></div>
                
                <div className="space-y-6 relative z-10 text-[16px] text-zinc-300 italic font-medium leading-relaxed">
                  <p>
                    "¿John? John... soy Cole de Closers.io... Parece que respondiste a un anuncio sobre instalar un sistema de generación de leads en tu negocio. ¿Te suena?"
                  </p>
                  
                  <p>
                    "Quería contactarte para ver si encontraste la ayuda que buscabas... o si todavía estás buscando."
                  </p>
                  
                  <p>
                    "Genial. Bueno, mira - estoy MÁS que preparado para contarte todo sobre lo que podríamos ayudarte... pero para ser respetuoso con tu tiempo... ¿te molesta si me tomo unos minutos para entender el contexto de tu negocio? Así solo te comparto las partes de lo que hacemos que te sean útiles a ti específicamente... ¿bien?"
                  </p>
                  
                  <div className="bg-[#27272A]/80 p-3 rounded-lg text-[14px] text-zinc-400 not-italic flex items-center gap-2 w-fit">
                    <Clock size={16} />
                    <span>&lt;pequeña pausa, pero seguir directo a la siguiente pregunta&gt;</span>
                  </div>
                  
                  <p>
                    "Entonces... supongo que el mejor lugar para empezar... obviamente respondiste al anuncio sobre conseguir más leads, y quieres ver qué ofrecemos y obtener toda la información sobre eso... pero cuéntame un poco más sobre qué está pasando en tu negocio ahora mismo... que te hizo querer contactarnos."
                  </p>
                </div>
              </div>

              {/* Puntos Clave */}
              <div className="mt-8 bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-purple-400 mb-5 flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  Puntos Clave:
                </h4>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-[15px] text-zinc-300 font-medium">Escucha mi tonalidad.</p>
                    <ul className="list-disc pl-5 text-[14.5px] text-zinc-400 marker:text-zinc-600 space-y-1">
                      <li>Podría tener un guion terrible - y aun así lograrlo con buena tonalidad.</li>
                      <li>La tonalidad de la mayoría de los setters es 0/10.</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-[15px] text-zinc-300 font-medium">Pregunta inicial:</p>
                    <p className="text-[14.5px] text-zinc-400 mb-2">También puedes usar:</p>
                    <div className="bg-[#27272A]/50 p-3 rounded-lg italic text-[14.5px] text-zinc-300 border-l-2 border-purple-500/50">
                      "¿Alguien de nuestro equipo te contactó y habló contigo ya? ¿O sigues esperando información?"
                    </div>
                    <p className="text-[14.5px] text-zinc-500 mt-2">Cualquiera de las dos está bien.</p>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-[15px] text-zinc-300 font-medium">
                      Nota cómo elimino la objeción de "solo quería ver qué hacen / obtener información" varias veces a lo largo:
                    </p>
                    <div className="space-y-2 pl-4 border-l-2 border-zinc-700">
                      <p className="italic text-[14.5px] text-zinc-400">"Estoy MÁS que preparado para compartir contigo toda la información sobre lo que hacemos..."</p>
                      <p className="italic text-[14.5px] text-zinc-400">"Obviamente respondiste a un anuncio sobre conseguir más leads en tu negocio... y sé que quieres ver qué ofrecemos y obtener toda la información... pero dime..."</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-[15px] text-zinc-300 font-medium">
                      Nota también cómo alineo su objetivo con mi objetivo:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      <div className="bg-zinc-800/50 p-4 rounded-lg text-center">
                        <span className="text-zinc-400 block mb-1 text-sm">Su objetivo:</span>
                        <span className="text-white font-bold">Obtener información</span>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-lg text-center">
                        <span className="text-purple-300 block mb-1 text-sm">Mi objetivo:</span>
                        <span className="text-purple-100 font-bold">Que acepten hacer el discovery conmigo</span>
                      </div>
                    </div>
                    <p className="text-[14.5px] text-zinc-400 mt-3 leading-relaxed">
                      Arriba te muestro cómo alineo ambos para lograr que acepten — para que vean el discovery conmigo como la mejor ruta para llegar a su objetivo (información).
                    </p>
                  </div>
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
};`

content = content.replace(endSearch, newSectionCode);
fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);
