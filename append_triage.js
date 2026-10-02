import fs from 'fs';
let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const importSearch = "HelpCircle, Lightbulb } from 'lucide-react';";
const importReplace = "HelpCircle, Lightbulb, ArrowRightLeft, ClipboardCheck, PhoneOff, SlidersHorizontal, Handshake } from 'lucide-react';";
content = content.replace(importSearch, importReplace);

const oldToc = `{"id":"section-30","title":"Guion Outbound"},{"id":"section-31","title":"Discovery:"}]}`;
const newToc = `{"id":"section-30","title":"Guion Outbound"},{"id":"section-31","title":"Discovery:"},{"id":"section-32","title":"Transición y Cierre"},{"id":"section-33","title":"Calificar (Opcional)"},{"id":"section-34","title":"Cierre (Ending)"},{"id":"section-35","title":"Llamada de Triage"}]}`;
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

        {/* --- NUEVA SECCIÓN: Transición y Cierre --- */}
        <section id="section-32" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-fuchsia-500/20 p-2 rounded-lg text-fuchsia-400">
              <ArrowRightLeft size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Transición y Cierre (Tie Down):</h2>
          </div>

          <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
            <div className="bg-[#121214] border border-fuchsia-500/30 p-6 md:p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/5 rounded-bl-full pointer-events-none"></div>
              
              <div className="space-y-6 relative z-10 text-[16px] text-zinc-300 italic font-medium leading-relaxed">
                <p>
                  "Genial - así que definitivamente podemos ayudarte a llegar a tu objetivo XYZ... y de hecho tenemos clientes como John en tu industria - él hace (lo que hace) - logrando (XYZ en ingresos) - y mucho más. Te puedo mandar algunos ejemplos en un momento."
                </p>
                <p>
                  "Pero mirá - independientemente de si querés trabajar con nosotros o no - dejame conectarte con uno de nuestros asesores, Sam. Él puede compartirte más sobre los frameworks y métodos que clientes como (los que mencionaste) y otros en (tu industria) usaron para llegar a (el objetivo que dijeron que querían) y de hecho - mucho más allá de eso."
                </p>
                <p>
                  "Así que... tengo su calendario abierto ahora... ¿te viene mejor mañana a la hora X o Y para que hablen?"
                </p>
                <p>
                  "Genial - y para que quede claro - ¿vas a poder estar 100% seguro a esa hora? ¿O hay alguna chance de que tengas que reprogramar?"
                </p>
                <p>
                  "Entendido, ¿y cuál es tu mejor email?"
                </p>
                <p>
                  "Ok - te acabo de mandar la invitación para ese horario. ¿Podés entrar y aceptarla? Quiero asegurarme de que tengas el mail para que sepas cómo encontrar la información de la llamada."
                </p>
                <p>
                  "Buenísimo - ¿y ves el link de Zoom en la descripción? Perfecto. Y ya está agregado al calendario."
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-zinc-800 my-16" />

        {/* --- NUEVA SECCIÓN: Calificar --- */}
        <section id="section-33" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-rose-500/20 p-2 rounded-lg text-rose-400">
              <ClipboardCheck size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Calificar (Opcional)</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
              <div className="space-y-6 text-[15.5px] text-zinc-300 mb-8">
                <p>
                  En algunas ofertas, típicamente B2B, no necesitamos hacer una calificación pesada porque los ingresos que sacamos en el discovery (además de otras métricas) revelan mucho sobre la calidad del negocio.
                </p>
                <p>
                  Pero en ciertas ofertas, si tenés que calificar - O - si este lead es dudoso y querés chequear dos veces antes de agendarlo - hago eso al final.
                </p>
                
                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl mt-4">
                  <p className="italic text-zinc-300 mb-4 font-medium">
                    "Ah, y a propósito... Sam me hace llenar un formulario corto por cada persona que le pongo en el calendario. Voy a completar la mayor parte yo mismo en base a la conversación - pero, ¿me das un minuto y me ayudás con 2-3 preguntas para que puedan arrancar con todo?"
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-2 text-[15px] text-rose-200/90 italic marker:text-rose-500/50">
                    <li>"¿Hace cuánto tiempo seguís a Closers.io o a Cole Gordo - o recién nos conociste?"</li>
                    <li>"¿Y tu estructura de liderazgo es XYZ, no?"</li>
                    <li>"¿Y tu objetivo era XYZ?"</li>
                    <li>"En una escala del 1 al 10... siendo 1 'las cosas están realmente muy ajustadas ahora' y 10 'tengo los recursos para hacer lo que quiera' - ¿dónde sentís que estás financieramente?"
                      <ul className="list-[circle] pl-5 mt-1">
                        <li>"¿Qué significa X para vos?"</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Puntos Clave Calificar */}
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-rose-400 mb-5 flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  Puntos clave:
                </h4>
                
                <ul className="list-disc pl-5 space-y-4 text-[14.5px] text-zinc-300 marker:text-rose-500/50">
                  <li>La mayoría de los setters sobre-califican porque los closers les gritan y nadie les explica que hagan otra cosa.</li>
                  <li>La sobre-calificación lleva a bajar:
                    <ul className="list-[circle] pl-5 mt-2 space-y-1 text-zinc-400 marker:text-zinc-600">
                      <li>Leads por set</li>
                      <li>Show rate</li>
                      <li className="text-zinc-300 italic">Esto pasa porque le mete demasiada presión de compra al prospecto antes de que aparezca a la llamada</li>
                    </ul>
                  </li>
                  <li>Idealmente, podés calificar durante el discovery de forma encubierta. Por ejemplo:
                    <ul className="list-[square] pl-5 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>Preguntando la ocupación en ofertas B2C</li>
                      <li>Preguntando cuánto dinero necesitarían ganar para reemplazar el ingreso que hacen actualmente a tiempo completo (para ofertas de oportunidad de negocio)</li>
                      <li>Evaluando la calidad de su negocio (para ofertas B2B)</li>
                    </ul>
                  </li>
                  <li>Y después - si calificás más fuerte y directo - hacelo solo con los prospectos en los que sea necesario, y solo preguntá las preguntas difíciles que hagan falta.
                    <ul className="list-[circle] pl-5 mt-2 text-zinc-400 marker:text-zinc-600">
                      <li>En el ejemplo de arriba - las primeras 3-4 preguntas son "de relleno". Después termino con lo único que realmente me importa: las finanzas.</li>
                    </ul>
                  </li>
                  <li>Hacemos esto al final, porque si calificás fuerte en lo financiero durante el disco - puede arruinar el discovery y descarrilar el set, salvo que el setter sea muy hábil.
                    <ul className="list-[circle] pl-5 mt-2 text-zinc-400 marker:text-zinc-600">
                      <li>Para que quede claro: los buenos setters lo pueden lograr. Pero en general esto es lo mejor.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-zinc-800 my-16" />

        {/* --- NUEVA SECCIÓN: Cierre --- */}
        <section id="section-34" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-red-500/20 p-2 rounded-lg text-red-400">
              <PhoneOff size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Cierre (Ending):</h2>
          </div>

          <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
            <div className="bg-[#121214] border border-red-500/20 p-6 md:p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50"></div>
              
              <div className="space-y-4 relative z-10 text-[16px] text-zinc-300 italic font-medium leading-relaxed">
                <p>"Ok, genial. Te mando todo eso."</p>
                <p>"Y una última cosa..."</p>
                <p>"También te acabo de mandar un video corto para que veas antes de la llamada. ¿Te llegó?"</p>
                <p>"¿Lo vas a ver también antes de la llamada? Les va a servir para arrancar con todo... y les cuenta sobre (XYZ)..."</p>
                <p>"Genial - ¿alguna pregunta sobre tu llamada con Sam mañana?"</p>
                <p>"Perfecto - te agrego a un grupo con él ahora, por si surge algo."</p>
                <p>"Chau."</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-zinc-800 my-16" />

        {/* --- NUEVA SECCIÓN: Ajustes para Triage --- */}
        <section id="section-35" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-cyan-500/20 p-2 rounded-lg text-cyan-400">
              <SlidersHorizontal size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Ajustes para la Llamada de Triage (Triage Call)</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl mb-8">
                <p className="text-[15.5px] text-zinc-300 mb-3 font-medium">De nuevo, esto es para:</p>
                <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-zinc-400 marker:text-cyan-400/50">
                  <li>Reservas directas. Tipo "2 grade apps"</li>
                  <li>Prospecto que agendó a través del link del setter
                    <ul className="list-[circle] pl-5 mt-1">
                      <li>Texto</li>
                      <li>Email</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="space-y-8">
                {/* Rapport */}
                <div>
                  <h3 className="text-[20px] font-bold text-white mb-4 flex items-center gap-2">
                    <Handshake className="text-cyan-400" size={20} />
                    Rapport
                  </h3>
                  <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                    <div className="space-y-4 text-[15.5px] text-zinc-300 italic">
                      <p>"¡John! Qué bueno verte..."</p>
                      <p>"¿Eso es un XYZ ahí atrás?"</p>
                      <div className="not-italic text-[14px] text-zinc-500 bg-[#27272A]/50 p-3 rounded-lg my-2 border-l-2 border-zinc-600">
                        (Generalmente trato de estar presente y comentar algo divertido acá. Tal vez el tipo tiene una barba increíble. Puedo decir "Che, tener una barba así es una meta de vida para mí". Lo que sea. Si no me sale natural - no lo fuerzo).
                      </div>
                      <p>"Bueno, ¿cómo viene la semana?"</p>
                      <p>"¿Es un 'ocupado bueno' o un 'ocupado malo'?"</p>
                      <p>"Genial, bueno, vamos al grano - ¿tenés una hoja en blanco, algo para tomar notas?"</p>
                      <div className="not-italic text-[14px] text-zinc-500 bg-[#27272A]/50 p-3 rounded-lg my-2 border-l-2 border-zinc-600">
                        (Esto solo lo pregunto si es un triage telefónico, y no es una llamada saliente (outbound). Solo lo hago para evaluar dónde están. Si están manejando, si no están manejando, etc. En este contexto - voy a sostener la llamada de todos modos. Y no necesitan tomar notas - literalmente solo estoy viendo en qué situación están).
                      </div>
                    </div>
                  </div>
                </div>

                {/* Encuadre */}
                <div>
                  <h3 className="text-[20px] font-bold text-white mb-4 flex items-center gap-2">
                    <Layers className="text-cyan-400" size={20} />
                    Encuadre (Frame)
                  </h3>
                  <div className="bg-[#121214] border border-cyan-500/20 p-6 rounded-xl">
                    <div className="space-y-5 text-[15.5px] text-zinc-300 italic font-medium">
                      <p>"Entendido... bueno mirá - sé que originalmente respondiste al anuncio sobre potencialmente conseguir nuevos vendedores para tu negocio..."</p>
                      <p>"Estoy más que preparado para meterme de lleno en todo eso... para que tengas información... veas qué ofrecemos... y demás..."</p>
                      <p>"Pero como lo que hacemos es bastante personalizado... lo que más sentido tiene es que primero me des un poco de contexto sobre tu negocio - así que cuál es tu oferta, cómo funciona, cómo manejás actualmente tu sistema de adquisición y tu proceso de ventas ahora - y después, en base a eso, te voy a compartir las partes de lo que hacemos que sean relevantes y útiles específicamente para vos. ¿Tiene sentido?"</p>
                      <p>"Bien, así que de nuevo - sé que estás buscando potencialmente conseguir nuevos vendedores. ¿Qué está pasando en tu negocio ahora que te está haciendo considerar sumar gente nueva?"</p>
                      
                      <div className="not-italic text-[14px] text-zinc-500 font-normal mt-6 pt-4 border-t border-zinc-800">
                        (De acá en adelante, el resto de la llamada es igual a lo que ya cubrimos arriba).
                      </div>
                    </div>
                  </div>
                </div>

                {/* Puntos Clave Triage */}
                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <h4 className="text-[17px] font-bold text-cyan-400 mb-4 flex items-center gap-2">
                    <CheckCircle2 size={18} />
                    Puntos clave:
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-zinc-300 marker:text-cyan-400/50">
                    <li>Lenguaje levemente distinto.</li>
                    <li>Pero sigo usando la misma psicología que en la intro de la llamada outbound que ya cubrimos.
                      <ul className="list-[circle] pl-5 mt-2 space-y-1 text-zinc-400 marker:text-zinc-600">
                        <li>Alinear interés</li>
                        <li>Sacar de encima posibles objeciones de inmediato</li>
                        <li>Conseguir el "sí" de entrada (buy in)</li>
                        <li>Etc.</li>
                      </ul>
                    </li>
                  </ul>
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
