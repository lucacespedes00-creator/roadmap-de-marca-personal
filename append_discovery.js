import fs from 'fs';
let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const importSearch = "Cpu, FileText, PhoneForwarded, Search, Info, PlayCircle, Video } from 'lucide-react';";
const importReplace = "Cpu, FileText, PhoneForwarded, Search, Info, PlayCircle, Video, Compass, Crosshair, HelpCircle, Lightbulb } from 'lucide-react';";
content = content.replace(importSearch, importReplace);

const oldToc = `{"id":"section-28","title":"Scripts de Llamadas"},{"id":"section-29","title":"Diferentes Variaciones"},{"id":"section-30","title":"Guion Outbound"}]}`;
const newToc = `{"id":"section-28","title":"Scripts de Llamadas"},{"id":"section-29","title":"Diferentes Variaciones"},{"id":"section-30","title":"Guion Outbound"},{"id":"section-31","title":"Discovery:"}]}`;
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

        {/* --- NUEVA SECCIÓN: Discovery --- */}
        <section id="section-31" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400">
              <Compass size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Discovery:</h2>
          </div>

          <div className="space-y-12">
            
            {/* ¿Por qué están aquí? */}
            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <HelpCircle className="text-emerald-400" size={24} />
                ¿Por qué están aquí?
              </h3>
              
              <div className="space-y-6">
                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <p className="text-[15px] text-zinc-300 italic mb-4">
                    ...pero... cuéntame un poco más sobre qué está pasando en tu negocio ahora mismo... que te hizo querer contactarnos.
                  </p>
                  
                  <p className="text-[14.5px] text-zinc-400 mb-4">
                    (Aquí van a responder. Puede que te cuenten su problema, que es lo que buscas, o puede que no. De cualquier forma, normalmente haré algunas preguntas de sondeo:)
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-emerald-400/50">
                    <li>Cuéntame más</li>
                    <li>¿A qué te refieres?</li>
                    <li>Cuando dices ___, ¿a qué te refieres exactamente?</li>
                    <li>Falta de ventas, ¿en qué sentido, específicamente?</li>
                  </ul>
                  
                  <p className="text-[14.5px] text-zinc-400 mt-4 italic border-l-2 border-zinc-700 pl-3">
                    También puedes obtener información vaga y general aquí. "Solo quería ver cómo podemos mejorar".
                  </p>
                </div>

                <div className="bg-[#121214] border border-emerald-500/10 p-6 rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500/20"></div>
                  <p className="text-[16px] text-white font-bold mb-6">
                    Necesitas asegurarte de entender el problema. Tienes dos opciones:
                  </p>
                  
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-lg">
                      <h4 className="text-[16px] font-bold text-emerald-400 mb-3">Opción 1: Aclarar</h4>
                      <div className="space-y-3">
                        <p className="text-[14.5px] text-zinc-300 italic">"Entiendo. Pero en cuanto a lo que está pasando con tu generación de leads ahora... ¿cuál dirías que es el mayor desafío? ¿O qué es lo que no está funcionando tan bien como podría o debería?"</p>
                        <p className="text-[14.5px] text-zinc-300 italic">"Entendido - así que todo está funcionando bien ahora. Solo quieres mejorarlo. Pero acota esto para mí y sé específico - ¿qué es exactamente lo que necesita funcionar mejor? ¿Cuál es la 1-2 cosa que - si se mejorara - llevaría tu generación de leads al siguiente nivel?"</p>
                      </div>
                    </div>
                    
                    <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-lg">
                      <h4 className="text-[16px] font-bold text-emerald-400 mb-3">Opción 2: Descubrirlo a través del Chunking Down</h4>
                      <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-zinc-300 marker:text-emerald-400/50">
                        <li>Esto es lo que hace mi equipo. Simplemente avanzamos en la llamada. Y a medida que entramos en el chunking down sobre generación de leads... se hará obvio cuál es el problema.</li>
                        <li>Lo que deberías hacer depende de la oferta. Sabrás qué tiene sentido para ti.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Información de Fondo */}
            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Layers className="text-blue-400" size={24} />
                Información de Fondo
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <h4 className="text-[17px] font-bold text-white mb-4 border-b border-zinc-800 pb-2">Oferta</h4>
                  <ul className="space-y-3 text-[15px] text-zinc-300">
                    <li>
                      <span className="font-bold text-blue-400 mr-2">1.</span> Entonces, ¿cuál es tu oferta exactamente?
                      <ul className="pl-6 mt-2 space-y-1 text-zinc-400 list-[circle] marker:text-zinc-600">
                        <li>¿Qué problema les resuelves?</li>
                        <li>¿A qué precio?</li>
                        <li>¿Y quién es el cliente perfecto con el que trabajas?
                          <ul className="pl-5 mt-1 list-[square] marker:text-zinc-700">
                            <li>¿Es este el tipo de clientes con los que estás trabajando ahora?</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="pt-2">
                      <span className="font-bold text-blue-400 mr-2">2.</span> (Si es necesario) ¿cómo se entrega esto?
                    </li>
                  </ul>
                </div>
                
                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <h4 className="text-[17px] font-bold text-white mb-4 border-b border-zinc-800 pb-2">Calificación de Socios</h4>
                  <ul className="space-y-3 text-[15px] text-zinc-300">
                    <li>
                      <span className="font-bold text-blue-400 mr-2">1.</span> ¿Cómo funciona tu estructura de liderazgo?
                      <ul className="pl-6 mt-2 space-y-1 text-zinc-400 list-[circle] marker:text-zinc-600">
                        <li>Si hay socio:
                          <ul className="pl-5 mt-1 space-y-1 list-[square] marker:text-zinc-700">
                            <li>¿Cómo se llama?</li>
                            <li>¿Cómo dividen las responsabilidades?</li>
                            <li>¿Entonces son 50/50?</li>
                            <li>¿Están de acuerdo en que XYZ es un problema?
                              <ul className="pl-5 mt-1 list-[disc] marker:text-zinc-700">
                                <li>¿Qué piensan ellos?</li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Puntos Clave Info */}
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-blue-400 mb-5 flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  Puntos Clave:
                </h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-[14.5px] text-zinc-300">
                      <strong className="text-white">Para B2B</strong>, muchas veces entendemos el problema desde el principio, LUEGO obtenemos contexto sobre el negocio, y después volvemos al problema (que es lo que haremos a continuación).
                    </p>
                    <ul className="list-disc pl-5 text-[14.5px] text-zinc-400 marker:text-zinc-600 space-y-1">
                      <li>La razón de esto es que si un cliente dice que su problema es la generación de leads.</li>
                      <li>Ayuda saber si están:
                        <ul className="list-[circle] pl-5 mt-1 space-y-1">
                          <li>Facturando 1M/mes</li>
                          <li>Facturando 10k/mes</li>
                          <li>Así como cuál es el negocio, cuál es el embudo (funnel), etc.</li>
                        </ul>
                      </li>
                      <li>Saber eso de antemano es muy útil para cuando profundizas más en el problema.</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <p className="text-[14.5px] text-zinc-300">
                      <strong className="text-white">Para B2C</strong>, puede que tengas una versión de esto. En algunos casos, lo saltas por completo y vas directo a la siguiente sección.
                    </p>
                    <div className="pl-5 border-l-2 border-zinc-700 mt-2 space-y-2">
                      <p className="text-[14.5px] text-zinc-400">La forma en que deberías pensarlo es la siguiente:</p>
                      <p className="text-[14.5px] text-zinc-300 italic">"Antes de profundizar más en el problema... ¿hay alguna información de contexto que necesite saber que me ayude mejor a encontrar/diagnosticar el problema?"</p>
                      <p className="text-[14.5px] text-zinc-400">Si es así, preguntas eso ahí.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <p className="text-[14.5px] text-zinc-300">
                      La otra razón por la que hacemos este tipo de preguntas primero, es porque son fáciles y no invasivas.
                    </p>
                    <ul className="list-disc pl-5 text-[14.5px] text-zinc-400 marker:text-zinc-600 space-y-1">
                      <li>Cuando profundizamos más en el problema, a veces puede percibirse como invasivo o como si estuviéramos haciendo preguntas demasiado personales de forma agresiva.
                        <ul className="list-[circle] pl-5 mt-1"><li>Se siente como si fuéramos demasiado rápido.</li></ul>
                      </li>
                      <li>Así que empezar con preguntas fáciles como estas pone al prospecto en un patrón de responder nuestras preguntas.</li>
                      <li>La forma en que le enseño a los closers es a construir consistentemente hacia preguntas cada vez más personales (y dolorosas) - que es donde realmente consigues el oro.</li>
                      <li>Para los setters, no necesitaremos llegar tan profundo - pero aun así vale la pena tenerlo.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Aislar - Chunk Down - Justificación */}
            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Crosshair className="text-orange-400" size={24} />
                Aislar - Chunk Down - Justificación de la Necesidad (Need Payoff)
              </h3>
              
              <div className="bg-[#121214] border border-orange-500/20 p-6 md:p-8 rounded-xl relative overflow-hidden mb-8">
                <div className="absolute top-0 left-0 w-1 h-full bg-orange-500/50"></div>
                <div className="space-y-5 text-[15.5px] text-zinc-300 italic font-medium leading-relaxed">
                  <p>"Entendido, así que volviendo... parece que el problema principal es simplemente la generación de leads. ¿Es correcto?"</p>
                  
                  <p>"Entonces, ¿cómo estás consiguiendo clientes ahora?" <span className="not-italic text-zinc-500 text-[14px]">(Que hagan una lista)</span></p>
                  
                  <p>"Entendido. ¿Alguna otra forma en que estés consiguiendo clientes?"</p>
                  
                  <p>"Veamos cómo te está funcionando eso..."</p>
                  
                  <p>"¿En los últimos 30 días, cuánto gastaste en anuncios?"</p>
                  
                  <p>"¿Y cuántas llamadas de ventas te generó eso?"</p>
                  
                  <p>"¿Y cuántas de esas se presentaron?"</p>
                  
                  <p>"Y - antes - mencionaste que (XYZ) era tu prospecto perfecto. ¿Cuántos de esos cumplían con el perfil de ese prospecto perfecto que mencionaste antes?"</p>
                  
                  <p><span className="not-italic text-zinc-500 text-[14px]">(Ninguno de ellos)</span> - "¿Y por qué crees que es así?"</p>
                  
                  <div className="bg-[#1A1A1E] p-4 rounded-lg my-4 not-italic font-normal">
                    <p className="text-white font-bold mb-2">Solo puede haber dos razones:</p>
                    <ul className="list-disc pl-5 space-y-1 text-zinc-400 marker:text-orange-500">
                      <li>¿Podría ser el método o embudo que estás usando para atraer a estas personas?</li>
                      <li>¿O podría ser el mensaje?</li>
                      <li>¿Cuál crees que es? ¿O ambas?</li>
                    </ul>
                  </div>
                  
                  <p>"Entonces bien - tuviste XYZ presentaciones. ¿Cuántas cerraste?"</p>
                  
                  <p>"¿Y a qué precio?"</p>
                  
                  <p>"Entonces hiciste XYZ menos el mes pasado en ingresos?"</p>
                  
                  <p>"Entendido - así que XYZ fue tu ingreso total el mes pasado...?"</p>
                  
                  <p>"Ahora, cerraste el 15% de las llamadas que tomaste. Normalmente vemos 25-30%."</p>
                  
                  <div className="bg-[#1A1A1E] p-4 rounded-lg my-4 not-italic font-normal">
                    <p className="text-white font-bold mb-2">Eso se debe a una de estas dos razones:</p>
                    <ul className="list-disc pl-5 space-y-1 text-zinc-400 marker:text-orange-500">
                      <li>Calidad del lead, o...</li>
                      <li>Proceso de ventas</li>
                    </ul>
                  </div>
                  
                  <p>"¿Cuál crees que es?"</p>
                  
                  <p>"¿Y por qué dirías eso?"</p>
                  
                  <p className="not-italic text-zinc-500 text-[14px]">(Luego vuelve al siguiente problema aislado, si hay alguno).</p>
                  
                  <p>"Ok, genial. Entonces déjame preguntarte esto..."</p>
                  
                  <p className="text-orange-300 font-bold">"Si pudieras (resolver el problema 1: arreglar tu problema de volumen de leads para que tengas más gente con quien hablar)..."</p>
                  
                  <p className="text-orange-300 font-bold">"Y también (resolver el problema 2: ajustar el mensaje para que esas personas sean realmente más calificadas)..."</p>
                  
                  <p className="text-orange-300 font-bold">"¿A qué nivel de ingresos crees que eso te permitiría llegar?"</p>
                </div>
              </div>

              {/* Puntos Clave Aislar */}
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-orange-400 mb-5 flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  Puntos Clave:
                </h4>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <p className="text-[14.5px] text-zinc-300">
                      En el "disparo de advertencia" (shot across the bow) deberíamos haber identificado el problema. Si no, necesitas identificar el problema lo antes posible.
                    </p>
                    <ul className="list-disc pl-5 text-[14.5px] text-zinc-400 marker:text-zinc-600 space-y-1">
                      <li>El negocio se trata de resolver problemas</li>
                      <li>Resolver problemas = crear valor</li>
                      <li>La gente intercambia dinero por valor</li>
                      <li>Las ventas son una demostración de que puedes resolver un problema para alguien más</li>
                      <li>Sin problema = sin ventas</li>
                      <li className="text-orange-300 font-bold mt-2">TODO EL MARCO DE LA CONVERSACIÓN DEBE GIRAR EN TORNO AL PROBLEMA</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <p className="text-[14.5px] text-zinc-300">
                      Una vez que identificas eso, avanzas hacia "desglosarlo" (chunking it down)
                    </p>
                    <ul className="list-disc pl-5 text-[14.5px] text-zinc-400 marker:text-zinc-600 space-y-1">
                      <li>Chunking down es donde llevas lo vago → a lo específico
                        <ul className="list-[circle] pl-5 mt-1"><li>Generación de leads → 2 llamadas el mes pasado</li></ul>
                      </li>
                      <li>La gente tiende a generalizar, eliminar, distorsionar. Y en última instancia, minimizar su situación</li>
                      <li>El chunking down revela la verdad
                        <ul className="list-[circle] pl-5 mt-1"><li>Que usualmente es peor</li></ul>
                      </li>
                      <li>También saca a la superficie el dolor real de la situación - qué tan mal está realmente</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Ajustes y Patrones */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              
              {/* Ajustes para otras ofertas */}
              <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
                <h3 className="text-[20px] font-bold text-white mb-6 flex items-center gap-3">
                  <Settings className="text-[#D5B15B]" size={22} />
                  Ajustes para otras ofertas:
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-[#121214] border border-zinc-800 p-5 rounded-xl">
                    <h4 className="text-[16px] font-bold text-[#D5B15B] mb-3">Citas (Dating):</h4>
                    <ul className="list-disc pl-5 space-y-1 text-[14.5px] text-zinc-300 marker:text-[#D5B15B]/50">
                      <li>¿Cuántas citas?</li>
                      <li>¿Cuántas realmente interesantes? ¿Versus rechazos inmediatos?</li>
                      <li>¿Cuántas pasaron a una segunda cita?</li>
                      <li>¿Por qué terminó? ¿Qué pasó?</li>
                      <li>En general, ¿cuál es el patrón del problema con el que estás lidiando?
                        <ul className="list-[circle] pl-5 mt-1"><li>Dame un ejemplo</li></ul>
                      </li>
                      <li>¿Cuál fue la última cita o experiencia realmente mala que tuviste? ¿Qué pasó?</li>
                    </ul>
                  </div>

                  <div className="bg-[#121214] border border-zinc-800 p-5 rounded-xl">
                    <h4 className="text-[16px] font-bold text-[#D5B15B] mb-3">Pérdida de peso:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-[14.5px] text-zinc-300 marker:text-[#D5B15B]/50">
                      <li>Guíame a través de un día de alimentación.
                        <ul className="list-[circle] pl-5 mt-1">
                          <li>¿Qué desayunaste? ¿Almuerzo?</li>
                          <li>¿Qué tal ayer?</li>
                        </ul>
                      </li>
                      <li>¿Te pesaste esta mañana? ¿Cuánto pesabas?
                        <ul className="list-[circle] pl-5 mt-1"><li>¿Cuándo fue la última vez que te pesaste?</li></ul>
                      </li>
                      <li>¿Cuándo te cuesta más mantenerte en el camino con una alimentación saludable?
                        <ul className="list-[circle] pl-5 mt-1"><li>Dame un ejemplo.</li></ul>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#121214] border border-zinc-800 p-5 rounded-xl">
                    <h4 className="text-[16px] font-bold text-[#D5B15B] mb-3">Oportunidad de negocio (Biz Opp):</h4>
                    <ul className="list-disc pl-5 space-y-1 text-[14.5px] text-zinc-300 marker:text-[#D5B15B]/50">
                      <li>¿A qué te dedicas ahora mismo?</li>
                      <li>¿Te gusta?</li>
                      <li>¿Qué no te gusta de eso?
                        <ul className="list-[circle] pl-5 mt-1">
                          <li>¿Cuándo fue la última vez que pasó eso?</li>
                          <li>Dame un ejemplo.</li>
                        </ul>
                      </li>
                      <li>¿Cuál es la peor parte de eso?</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Patrones Clave */}
              <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
                <h3 className="text-[20px] font-bold text-white mb-6 flex items-center gap-3">
                  <Lightbulb className="text-yellow-400" size={22} />
                  Patrones clave de preguntas que haces:
                </h3>
                
                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <ul className="list-disc pl-5 space-y-3 text-[16px] text-white font-medium marker:text-yellow-400">
                    <li>Dame un ejemplo</li>
                    <li>¿Cuándo fue la última vez que pasó X?</li>
                    <li>Guíame (alguna versión de "un día en la vida")</li>
                    <li>¿Cómo se manifiesta eso exactamente para ti? Dame un ejemplo.</li>
                    <li>¿Qué pasó?</li>
                  </ul>
                  
                  <div className="mt-8 pt-6 border-t border-zinc-800 space-y-4">
                    <p className="text-[15px] text-zinc-300 leading-relaxed">
                      Piensa en usar las preguntas para pintar un retrato en tu mente. Tienes que llenarlo con líneas, colores, etc. De lo vago → a lo específico.
                    </p>
                    <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                      <p className="text-[14.5px] text-yellow-300">
                        Terminamos esta sección con algo sobre sus metas. Puedes indagar un poco aquí, pero es solo para reorientarlos.
                      </p>
                    </div>
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
};`;
content = content.replace(endSearch, newSectionCode);
fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);
