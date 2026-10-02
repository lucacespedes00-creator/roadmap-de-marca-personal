import fs from 'fs';
let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const oldToc = `{"id":"section-23","title":"Scripts de Mensajes de Texto"}]}`;
const newToc = `{"id":"section-23","title":"Scripts de Mensajes de Texto"},{"id":"section-24","title":"Gran Error"},{"id":"section-25","title":"Leyes TCPA:"},{"id":"section-26","title":"Nota Rápida Sobre IA / Automatización"},{"id":"section-27","title":"Scripts de Email:"},{"id":"section-28","title":"Scripts de Llamadas"}]}`;
content = content.replace(oldToc, newToc);

const oldEnd = `                </div>
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

const newEnd = `                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- NUEVA SECCIÓN: Gran Error --- */}
        <section id="section-24" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-red-500/20 p-2 rounded-lg text-red-500">
              <AlertTriangle size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Gran Error</h2>
          </div>
          <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
            <ul className="list-disc pl-6 space-y-4 text-[15px] text-zinc-300 marker:text-red-500">
              <li>Esta gente aplicó por información.</li>
              <li>No necesitás tener una conversación larga de calificación por texto.</li>
              <li>Ese es el propósito de la llamada de triage del setter.</li>
            </ul>
          </div>
        </section>

        {/* --- NUEVA SECCIÓN: Leyes TCPA --- */}
        <section id="section-25" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#D5B15B]/20 p-2 rounded-lg text-[#D5B15B]">
              <BookOpen size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Leyes TCPA:</h2>
          </div>
          <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
            <ul className="list-disc pl-6 space-y-4 text-[15px] text-zinc-300 marker:text-[#D5B15B]">
              <li>No soy abogado, y si querés tomarte esto en serio (deberías), consultá con uno.</li>
              <li>
                <span className="font-bold text-white">Necesitás incluir la palabra "STOP" en cada texto.</span> Yo típicamente lo hago un poco más personal para que no parezca automatizado. Agregalo al final de cada mensaje, enviado como un mensaje separado.
                <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                  <li>Para appointment setting específicamente, es debatible si necesitás incluirlo en cada mensaje o solo en el primero. Las reglas son muy estrictas cuando estás ofreciendo una oferta "Acá tenés un gran descuento" y un poco más flexibles y ambiguas cuando les estás recordando sobre una cita o el agendamiento de una cita.</li>
                  <li>De todas formas, no soy abogado - esto no es asesoramiento legal. Consultá a un abogado si querés asesoramiento legal.</li>
                </ul>
              </li>
              <li className="italic">"Ah, si no querés que te escriba, simplemente respondé 'STOP' y te saco de mi lista"</li>
            </ul>
          </div>
        </section>

        <hr className="border-zinc-800 my-16" />

        {/* --- NUEVA SECCIÓN: IA / Automatización --- */}
        <section id="section-26" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
              <Cpu size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Nota Rápida Sobre IA / Automatización</h2>
          </div>
          <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
            <ul className="list-disc pl-6 space-y-4 text-[15px] text-zinc-300 marker:text-blue-500">
              <li>
                <span className="font-bold text-white">Yo automatizaría 100% el primer texto para asegurar velocidad de contacto con el lead.</span>
                <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                  <li>Usá uno para horario laboral</li>
                  <li>Usá uno para fuera de horario laboral</li>
                </ul>
              </li>
              <li>
                <span className="font-bold text-white">El segundo y tercer texto también los podés automatizar, lo recomiendo, pero depende de vos.</span>
                <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                  <li>Nosotros automatizamos el segundo y tercer texto también SIEMPRE Y CUANDO NO RESPONDAN.</li>
                  <li>Si responden, la secuencia de textos se desactiva.
                    <ul className="list-[square] pl-6 mt-2 space-y-2 text-zinc-500 marker:text-zinc-700">
                      <li>Y entonces pasa a la lista de "respondidos" del setter.</li>
                      <li>Ahí deberían dejarles su link de agendamiento.</li>
                      <li>Luego insistir 2 veces en incrementos de 24 horas.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold text-white">IA:</span>
                <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                  <li>La secuencia de textos es tan simple que creo que usar IA (y todo el entrenamiento que eso implica) es innecesario.</li>
                  <li>Sin embargo, podés hacerlo si querés. Si lo hacés:
                    <ul className="list-[square] pl-6 mt-2 space-y-2 text-zinc-500 marker:text-zinc-700">
                      <li>Dale al setter la opción de desactivar manualmente la secuencia de IA e intervenir si es necesario (especialmente para preguntas complejas).</li>
                      <li>Asegurate de que todas las respuestas sigan activando que el setter llame lo antes posible.</li>
                      <li>Vas a tener que entrenarla en objeciones, preguntas, etc. - lo cual es fácil, pero igual hay que hacerlo.</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-zinc-800 my-16" />

        {/* --- NUEVA SECCIÓN: Scripts Email --- */}
        <section id="section-27" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-orange-500/20 p-2 rounded-lg text-orange-500">
              <Mail size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Scripts de Email:</h2>
          </div>

          <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
            <div className="mb-10">
              <ul className="list-disc pl-6 space-y-2 text-[15px] text-zinc-300 marker:text-orange-500">
                <li>Todo esto debería suceder automáticamente.
                  <ul className="list-[circle] pl-6 mt-1 space-y-1 text-zinc-400 marker:text-zinc-600">
                    <li>Con 24hs de diferencia entre cada uno.</li>
                  </ul>
                </li>
                <li>Una vez que se asigna el lead, se inscribe automáticamente en el email y se envía de inmediato.</li>
                <li>Deberían venir específicamente del email del setter, no del email de la empresa.
                  <ul className="list-[circle] pl-6 mt-1 space-y-1 text-zinc-400 marker:text-zinc-600">
                    <li>No deberían parecer emails promocionales.</li>
                  </ul>
                </li>
                <li>Cada email va a incluir un link para agendar.
                  <ul className="list-[circle] pl-6 mt-1 space-y-1 text-zinc-400 marker:text-zinc-600">
                    <li>Pero todas las respuestas deberían activar inmediatamente una llamada en la lógica de marcación.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-orange-500">#</span> Email #1
                </h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3 font-medium">
                  <p className="text-[15px] text-zinc-300 italic">Hola John - Soy Sam del equipo de Cole Gordon (Closersio)</p>
                  <p className="text-[15px] text-zinc-300 italic">Vi que respondiste a nuestro anuncio sobre incorporar vendedores a tu negocio (Ej: En qué ayudás a la gente).</p>
                  <p className="text-[15px] text-zinc-300 italic">¿Encontraste a los setters que estabas buscando? ¿O seguís buscando?</p>
                  <p className="text-[15px] text-zinc-300 italic">Si seguís buscando, me encantaría charlar. ¿Me avisás si encontrás un horario acá? LINK</p>
                  <div className="pt-2">
                    <p className="text-[15px] text-zinc-400">- Nombre</p>
                    <p className="text-[15px] text-zinc-400">- Empresa</p>
                    <p className="text-[15px] text-zinc-400">- Puesto</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-orange-500">#</span> Email #2
                </h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3 font-medium">
                  <p className="text-[15px] text-zinc-300 italic">John, te llamé pero no logré comunicarme.</p>
                  <p className="text-[15px] text-zinc-300 italic">¿Seguís considerando incorporar un setter o closer a tu negocio?</p>
                  <p className="text-[15px] text-zinc-300 italic">Si es así, con gusto charlamos. Simplemente buscá un horario acá: LINK</p>
                  <p className="text-[15px] text-zinc-300 italic">O respondeme, si es más fácil.</p>
                  <div className="pt-2">
                    <p className="text-[15px] text-zinc-400">- Nombre</p>
                    <p className="text-[15px] text-zinc-400">- Empresa</p>
                    <p className="text-[15px] text-zinc-400">- Puesto</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-orange-500">#</span> Email #3
                </h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3 font-medium">
                  <p className="text-[15px] text-zinc-300 italic">^^ ¿Esto sigue siendo una prioridad?</p>
                  <p className="text-[15px] text-zinc-300 italic">Avisame. Si no, no hay problema. Te saco de la lista.</p>
                  <p className="text-[15px] text-zinc-300 italic">Si no, sentite libre de responderme o agendar acá: LINK</p>
                  <div className="pt-2">
                    <p className="text-[15px] text-zinc-400">- Nombre</p>
                    <p className="text-[15px] text-zinc-400">- Empresa</p>
                    <p className="text-[15px] text-zinc-400">- Puesto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-zinc-800 my-16" />

        {/* --- NUEVA SECCIÓN: Scripts Llamadas --- */}
        <section id="section-28" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-indigo-500/20 p-2 rounded-lg text-indigo-400">
              <PhoneCall size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Scripts de Llamadas</h2>
          </div>

          <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-8">Dos Tipos De "Llamadas de Setter"</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[18px] font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                  Llamada Outbound
                </h4>
                <ul className="list-disc pl-5 space-y-3 text-[15px] text-zinc-300 marker:text-indigo-400">
                  <li>Hacés la llamada saliente.</li>
                  <li>Atienden.</li>
                  <li>Generás suficiente enganche para llevar la llamada hacia el discovery.</li>
                  <li>Transicionás del discovery y hacés el pitch de la llamada.</li>
                  <li>Calificás al final (si es necesario).</li>
                  <li>Confirmás que puedan asistir.</li>
                </ul>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[18px] font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                  Llamada de Triage
                </h4>
                <ul className="list-disc pl-5 space-y-3 text-[15px] text-zinc-300 marker:text-indigo-400">
                  <li>La cita fue agendada en tu calendario, vía:
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>Texto</li>
                      <li>Agendamiento directo</li>
                      <li>Etc.</li>
                    </ul>
                  </li>
                  <li>Te conectás por Zoom o llamás por teléfono.</li>
                  <li>Ellos están esperando la llamada.</li>
                  <li>Rapport básico / encuadre de la llamada.</li>
                  <li>Entrás en discovery - y el resto es igual.</li>
                </ul>
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
