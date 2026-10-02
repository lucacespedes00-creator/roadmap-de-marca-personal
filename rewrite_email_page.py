import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

start_marker = "const LinkedInEmailPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {"
start_idx = content.find(start_marker)

end_marker = "const CustomPageEditor ="
end_idx = content.find(end_marker)

new_code = """const LinkedInEmailPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {
  const [isSummary, setIsSummary] = useState(false);

  return (
  <div className="max-w-4xl mx-auto w-full pb-20 animate-in fade-in duration-300">
    <div className="flex items-center justify-between mb-12">
      <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
        <ArcadiaLogo />
        <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('1')}>Arcadia</span>
        <span className="text-zinc-700">/</span>
        <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_acquisition_parent')}>LinkedIn Acquisition</span>
      </div>
      
      <div className="flex items-center bg-[#1A1A1E] rounded-lg p-1 border border-zinc-800">
        <button 
          onClick={() => setIsSummary(false)}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${!isSummary ? 'bg-[#27272A] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          Completo
        </button>
        <button 
          onClick={() => setIsSummary(true)}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${isSummary ? 'bg-[#27272A] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          Resumido
        </button>
      </div>
    </div>
    
    <div className="flex items-start gap-5 mb-10">
      <div className="border border-[#D5B15B]/30 p-3.5 rounded-2xl text-[#D5B15B] bg-[#1A1A1E] mt-1 shadow-[0_0_20px_rgba(213,177,91,0.15)]">
        <Mail size={28} strokeWidth={1.5} />
      </div>
      <div>
        <h1 className="text-4xl font-bold text-white tracking-tight mb-3">El Sistema de Email</h1>
        <p className="text-[17px] text-zinc-400 leading-relaxed max-w-2xl">
          Estrategia estructurada para convertir listas de correos en clientes de alto valor mediante lead magnets, secuencias de email y seguimientos.
        </p>
      </div>
    </div>

    <div className="space-y-12">
      {/* Visión General del Sistema */}
      <div className="bg-[#121214] border border-[#27272A] rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D5B15B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="mb-8 relative z-10">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Layers size={20} className="text-[#D5B15B]"/> Visión General del Sistema
          </h3>
          <div className="text-[15.5px] text-zinc-300 leading-relaxed mb-6">
            {isSummary 
              ? "Un flujo automatizado de nutrición que incluye un Lead Magnet inicial, 14 días de nutrición, correos regulares y campañas mensuales de oferta (Susurro, Insinuación, Grito)."
              : "A continuación se presenta una estrategia estructurada de email marketing diseñada para convertir listas de correos en clientes de alto valor mediante lead magnets, secuencias de email y seguimientos. Esta guía contiene todos los pasos e instrucciones que necesitás. Seguí leyendo para aprender cómo implementarlo y ejecutarlo."}
          </div>
          
          {!isSummary && (
            <>
              <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Flujo del Sistema</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div><span className="text-zinc-300">Oferta de Lead Magnet</span></div>
                  <div className="w-px h-4 bg-zinc-700 ml-1"></div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div><span className="text-zinc-300">El usuario se suscribe (vía post de LinkedIn, perfil o DM)</span></div>
                  <div className="w-px h-4 bg-zinc-700 ml-1"></div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div><span className="text-zinc-300">Entrega inmediata del Lead Magnet</span></div>
                  <div className="w-px h-4 bg-zinc-700 ml-1"></div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div><span className="text-zinc-300">Secuencia de nutrición por email de 14 días</span></div>
                  <div className="w-px h-4 bg-zinc-700 ml-1"></div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div><span className="text-zinc-300">Transición a emails semanales regulares (3 por semana)</span></div>
                  <div className="w-px h-4 bg-zinc-700 ml-1"></div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div><span className="text-zinc-300">Campaña de oferta mensual (Susurro → Insinuación → Grito)</span></div>
                  <div className="w-px h-4 bg-zinc-700 ml-1"></div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div><span className="text-zinc-300">Sistema de seguimiento estructurado para leads interesados</span></div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                 <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-5">
                   <h4 className="font-semibold text-white mb-2 text-sm">Objetivo</h4>
                   <p className="text-[14px] text-zinc-400">Nutrir leads de forma consistente, convertirlos en clientes y mantener un alto nivel de compromiso sin saturar (spamear) tu lista.</p>
                 </div>
                 <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-5">
                   <h4 className="font-semibold text-white mb-2 text-sm">Beneficios clave</h4>
                   <ul className="text-[14px] text-zinc-400 space-y-1 list-disc pl-4">
                     <li>Generar confianza dando valor gratuito por adelantado.</li>
                     <li>Mostrar tu experiencia con emails de nutrición.</li>
                     <li>Mantenerte presente (top of mind) con una cadencia constante.</li>
                     <li>Hacer ofertas mensuales que "invitan" a la gente a trabajar con vos (evitando propuestas que suenen a spam).</li>
                   </ul>
                 </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Paso 1 */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">1</div> 
          Paso 1: Captar Leads con Lead Magnets
        </h3>
        
        {isSummary ? (
          <p className="text-[15px] text-zinc-300 leading-relaxed mb-6">
            Ofrecer contenido gratuito a cambio del email. Promocionarlo en posts de LinkedIn, perfil y DMs. Al suscribirse reciben el recurso y entran a una secuencia de 14 días.
          </p>
        ) : (
          <div className="space-y-6 text-[15.5px] text-zinc-300 leading-relaxed">
            <div>
              <h4 className="font-bold text-white mb-2">Qué hacer:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Ofrecer contenido gratuito de valor a cambio de un email. Consultá el Lead Magnet Playbook para ideas de contenido valioso.</li>
                <li>Publicar links al lead magnet en tu contenido de LinkedIn, tu perfil y tus mensajes directos.</li>
                <li>Ejemplo: Escribí una pieza de contenido donde, si quieren más información, hagan clic en el link del post y dejen sus datos a cambio del contenido gratuito.</li>
                <li>Ejemplo: Agregá un lead magnet directamente en tu perfil de LinkedIn para que quienes vean tu perfil se conviertan en leads.</li>
                <li>Ejemplo: Usá estos lead magnets en tus DMs. Mirá cómo usarlos para generar confianza en el Sell By Chat Playbook.</li>
              </ul>
            </div>

            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <h4 className="font-semibold text-[#D5B15B] mb-2">Ejemplos de lead magnets efectivos:</h4>
              <p className="text-zinc-400 mb-4 text-sm">(Consultá el Lead Magnet Playbook para más ideas de contenido valioso.)</p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Guías gratuitas (ej.: "Cómo arreglar tu perfil de LinkedIn en 5 pasos")</li>
                <li>Videos de entrenamiento (ej.: "La estrategia #1 de DM para conseguir más clientes")</li>
                <li>Checklists de Notion (ej.: "Plantilla de calendario de contenido para LinkedIn")</li>
                <li>Archivos de ejemplo de emails (ej.: "Nuestras plantillas de cold email con mejor rendimiento")</li>
                <li>Clases en vivo/webinars (ej.: "Cómo conseguir 5 clientes en 30 días")</li>
              </ul>
            </div>
            
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-6">
              <h4 className="font-bold text-white mb-2">Una vez que se suscriben:</h4>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Reciben el recurso gratuito de inmediato.</li>
                <li>Son redirigidos a agendar una llamada (opcional).</li>
                <li>Entran en una secuencia de nutrición por email de 14 días.</li>
              </ol>
            </div>
          </div>
        )}
      </div>

      {/* Paso 2 */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">2</div> 
          Paso 2: Secuencia de Nutrición por Email de 14 Días
        </h3>
        <p className="text-[15.5px] text-zinc-300 leading-relaxed mb-6">
          {isSummary 
            ? "Una serie de 6 emails en 14 días para entregar valor, tocar dolores principales e invitar a agendar llamada, ideal para captar al 3% listo para comprar ya."
            : "Vas a enviar una serie de emails a lo largo de 14 días para generar cercanía, abordar los principales dolores (pain points) y ofrecer oportunidades de que respondan o agenden llamadas."}
        </p>

        {isSummary ? (
          <div className="space-y-4">
             <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                   <div className="bg-zinc-800 text-white text-xs font-bold px-2.5 py-1 rounded-md">Día 1</div>
                   <h4 className="font-bold text-white">Bienvenida y entrega</h4>
                </div>
                <p className="text-[14.5px] text-zinc-400">Agradecer, entregar el recurso y establecer expectativas. Incluir CTA suave para que respondan con una palabra.</p>
             </div>
             
             <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                   <div className="bg-zinc-800 text-white text-xs font-bold px-2.5 py-1 rounded-md">Día 2</div>
                   <h4 className="font-bold text-white">Identificar su problema</h4>
                </div>
                <p className="text-[14.5px] text-zinc-400">Hacer una pregunta súper simple para lograr que respondan. (Ej: "¿Con qué tipo de clientes trabajás?")</p>
             </div>

             <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                   <div className="bg-zinc-800 text-white text-xs font-bold px-2.5 py-1 rounded-md">Días 5, 9 y 12</div>
                   <h4 className="font-bold text-white">Problema → Agitar → Solución</h4>
                </div>
                <p className="text-[14.5px] text-zinc-400">Tres emails abordando 3 problemas clave distintos. Enfatizar el dolor y ofrecer solución. Añadir P.D. para charla.</p>
             </div>

             <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6 border-b-2 border-b-[#D5B15B]">
                <div className="flex items-center gap-3 mb-2">
                   <div className="bg-zinc-800 text-white text-xs font-bold px-2.5 py-1 rounded-md">Día 14</div>
                   <h4 className="font-bold text-white">Última oportunidad (Invitación)</h4>
                </div>
                <p className="text-[14.5px] text-zinc-400">Invitación suave a trabajar juntos antes de pasar a emails regulares.</p>
             </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <h4 className="font-bold text-white mb-2">Email 1 (Día 1): Bienvenida y entrega del lead magnet</h4>
              <p className="text-zinc-400 text-[14.5px] mb-3"><strong>Asunto:</strong> Acá tenés tu [Nombre del Lead Magnet]</p>
              <div className="text-[15px] text-zinc-300">
                <strong>Contenido:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Agradecerles por descargarlo.</li>
                  <li>Entregar el lead magnet (incluir link o adjunto).</li>
                  <li>Establecer expectativas: los próximos emails los van a ayudar con 3 desafíos clave (las cosas más importantes que enfrenta tu cliente ideal). La razón de mencionar varios desafíos es despertar el interés en aquel que más les preocupa ahora mismo.</li>
                  <li>CTA suave:
                    <ul className="list-circle pl-5 mt-1">
                      <li>"Si estás buscando ayuda para resolver X, respondé 'INSERTAR PALABRA SIMPLE' y charlemos."</li>
                      <li>Tip: Elegí una única palabra que uses siempre para poder rastrearla y que no aparezca al azar en otros emails.</li>
                      <li>Nota: "Voy a tener algunos guiones de plantilla completados para esto."</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <h4 className="font-bold text-white mb-2">Email 2 (Día 2): Identificar su mayor problema</h4>
              <p className="text-zinc-400 text-[14.5px] mb-3"><strong>Asunto:</strong> Que parezca un email interno – ej. "Cómo…"</p>
              <div className="text-[15px] text-zinc-300">
                <strong>Contenido:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Hacerles una pregunta súper simple y fácil de responder.</li>
                  <li>Objetivo: lograr que respondan.</li>
                  <li>Ejemplo: "¿Con qué tipo de clientes trabajás?"</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <h4 className="font-bold text-white mb-2">Emails 3, 4 y 5 (Días 5, 9 y 12): PROBLEMA 1</h4>
              <p className="text-zinc-400 text-[14.5px] mb-3"><strong>Asunto:</strong> EL PROBLEMA</p>
              <div className="text-[15px] text-zinc-300">
                <strong>Contenido:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Vas a enviar 3 emails con estructura similar en los días 5, 9 y 12, cada uno abordando un problema importante distinto (Problema 1, Problema 2, Problema 3).</li>
                  <li>Usar el framework Problema → Agitar → Solución:
                    <ul className="list-circle pl-5 mt-1">
                      <li>Hablar del problema,</li>
                      <li>Por qué importa y cómo podría perjudicarlos,</li>
                      <li>Presentar una solución rápida.</li>
                    </ul>
                  </li>
                  <li>Opcionalmente, adjuntar un link a un video corto de Loom o YouTube demostrando cómo resolver el problema. Puede ser simplemente una captura de pantalla de 5 minutos; no hay que sobrepensarlo.</li>
                  <li>También podés hacer referencia a un caso de estudio de un cliente que resolvió exactamente ese problema.</li>
                  <li>Punto principal: hacerles sentir que entendés profundamente su problema y por qué importa. Vos conocés el problema mejor de lo que ellos mismos podrían describirlo.</li>
                  <li>Asegurate de que sea un problema "analgésico" (painkiller), no una "vitamina". Algo que NECESITEN resolver.</li>
                  <li>Agregar un P.D. al final con una oferta:
                    <ul className="list-circle pl-5 mt-1">
                      <li>"P.D. Si sos [INSERTAR AVATAR] y querés resolver [PROBLEMA], respondé con 'X' y charlemos."</li>
                      <li>Este P.D. opcional les permite contactarte si el dolor les resuena, sin sentirse presionados.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <h4 className="font-bold text-white mb-2">Email 6 (Día 14): Última oportunidad antes de que empiecen los emails regulares</h4>
              <p className="text-zinc-400 text-[14.5px] mb-3"><strong>Asunto:</strong> ¿Trabajamos juntos?</p>
              <div className="text-[15px] text-zinc-300">
                <strong>Contenido:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>El objetivo es invitarlos a trabajar con vos, no venderles a la fuerza.</li>
                  <li>Recordatorio: resumir lo que aprendieron hasta ahora.</li>
                  <li>Preguntarles si están en serio interesados en mejorar X.</li>
                </ul>
                <div className="mt-4">
                  <strong>Ejemplos:</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>Oferta de coaching grupal:<br/>"El mes que viene voy a trabajar con un pequeño grupo privado de X para lograr RESULTADO sin DOLOR. ¿Te gustaría sumarte?"</li>
                    <li>Oferta de asesor financiero:<br/>"Estoy buscando trabajar con 2 clientes privados más que sean representantes de ventas corporativas ganando entre $300k y $500k al año, con ingresos fluctuantes, que quieran implementar un sistema para construir un patrimonio generacional de múltiples 7 cifras."</li>
                  </ul>
                </div>
                <p className="mt-4"><strong>CTA:</strong> "Respondé 'X' si te podría interesar."</p>
              </div>
            </div>
            
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-5 text-[15px] text-zinc-300 mt-6">
              <p className="mb-2">Después de completar esta secuencia de 14 días, los prospectos pasan a la cadencia regular de emails semanales.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Objetivo de la nutrición de 14 días:</strong> captar ese 3% que podría estar listo para comprar ahora mismo.</li>
                <li>El resto va a seguir recibiendo emails semanales, generando confianza con el tiempo.</li>
                <li><strong>Tip:</strong> Una vez configurado, no tenés que estar reescribiendo esto todo el tiempo. Podés extenderlo o agregar más emails, pero empezá por acá y optimizá después. La implementación le gana a la perfección.</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Paso 3 */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">3</div> 
          Paso 3: Cadencia Regular de Email (3 Emails por Semana)
        </h3>
        
        {isSummary ? (
          <p className="text-[15px] text-zinc-300 leading-relaxed mb-6">
            Enviar 3 emails por semana con valor, prueba social y recursos. Si 3 es mucho, reducir, pero mantener consistencia.
          </p>
        ) : (
          <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-5 text-[15.5px] text-zinc-300 mb-6">
            <p className="mb-2"><strong>Punto clave:</strong> El número de oro es 3 emails por semana. Si eso te resulta estresante, reducilo. Podés enviar solo 1 email por semana o 1 cada dos semanas. Ajustalo según necesites.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>¿Por qué máximo 3?</strong> Nuestras pruebas muestran que superar los 3 por semana puede reducir la efectividad.</li>
              <li>Podés cambiar los días, horarios o el orden. Solo empezá, y después ajustá con los datos.</li>
            </ul>
          </div>
        )}

        {isSummary ? (
          <div className="grid md:grid-cols-3 gap-5">
             <div className="bg-[#1A1A1E] border border-zinc-800 p-6 rounded-2xl">
                <h4 className="font-bold text-white mb-2 text-md flex items-center gap-2">
                   <CalendarDays size={18} className="text-[#D5B15B]" /> Lunes
                </h4>
                <p className="text-[#D5B15B] text-xs font-bold mb-3 uppercase tracking-wider">Historia + Lección</p>
                <p className="text-[14px] text-zinc-400 leading-relaxed">
                   Compartir una experiencia personal. Relacionarla con lo que vendés y por qué importa. Terminar con un CTA suave.
                </p>
             </div>
             <div className="bg-[#1A1A1E] border border-zinc-800 p-6 rounded-2xl">
                <h4 className="font-bold text-white mb-2 text-md flex items-center gap-2">
                   <CalendarDays size={18} className="text-[#D5B15B]" /> Miércoles
                </h4>
                <p className="text-[#D5B15B] text-xs font-bold mb-3 uppercase tracking-wider">Caso de Estudio</p>
                <p className="text-[14px] text-zinc-400 leading-relaxed">
                   Mostrar transformación (antes/después) usando el esquema Problema → Agitar → Solución. Incluir prueba visual o testimonial.
                </p>
             </div>
             <div className="bg-[#1A1A1E] border border-zinc-800 p-6 rounded-2xl">
                <h4 className="font-bold text-white mb-2 text-md flex items-center gap-2">
                   <CalendarDays size={18} className="text-[#D5B15B]" /> Viernes
                </h4>
                <p className="text-[#D5B15B] text-xs font-bold mb-3 uppercase tracking-wider">Recurso Gratuito</p>
                <p className="text-[14px] text-zinc-400 leading-relaxed">
                   Ofrecer plantillas, videos o calculadoras. El objetivo es que respondan al email pidiéndolo para iniciar conversación.
                </p>
             </div>
          </div>
        ) : (
          <div className="space-y-6">
            <h4 className="font-bold text-white mb-2">Cadencia sugerida:</h4>
            
            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <h4 className="font-bold text-[#D5B15B] mb-3">Email 1 (Lunes): Historia + Lección</h4>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300">
                <li>Compartir una experiencia o historia personal. (A veces, cuanto más random, mejor.)</li>
                <li>Relacionarla con lo que vendés y por qué es importante.</li>
                <li>Terminar con un CTA suave:
                  <ul className="list-circle pl-5 mt-1">
                    <li>"Si esto te suena familiar, voy a trabajar con X personas para lograr Y en [PLAZO]. Respondé con 'X' si te podría interesar."</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <h4 className="font-bold text-[#D5B15B] mb-3">Email 2 (Miércoles): Caso de Estudio o Prueba Social</h4>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300">
                <li>Mostrar una transformación (antes/después). No tiene que ser algo enorme; hasta un pequeño logro sirve.</li>
                <li>Usar Problema → Agitar → Solución (PAS):
                  <ul className="list-circle pl-5 mt-1">
                    <li>Problema: ¿cuál era el problema antes de trabajar con vos?</li>
                    <li>Agitar: por qué era doloroso o frustrante.</li>
                    <li>Solución: cómo trabajaron con vos y lo superaron.</li>
                  </ul>
                </li>
                <li>Incluir una captura de pantalla, un link a un video testimonial, o simplemente un testimonio escrito.</li>
                <li>Terminar con un CTA suave:
                  <ul className="list-circle pl-5 mt-1">
                    <li>"Si buscás resolver esto como [PERSONA], respondé con 'X' y charlemos."</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <h4 className="font-bold text-[#D5B15B] mb-3">Email 3 (Viernes): Recurso Gratuito o Valor Extra</h4>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300">
                <li>Con el tiempo, vas a crear recursos (plantillas, calculadoras, videos cortos de Loom, etc.).</li>
                <li>Ofrecer estos recursos en el email.</li>
                <li>Ejemplo:
                  <ul className="list-circle pl-5 mt-1">
                    <li>"Estaba charlando con mi cliente Sean, un asesor financiero de Sydney. Me dijo que estas 5 plantillas de contenido de nuestro programa lo ayudaron a generar 12 leads el mes pasado. ¿Te gustaría que te las comparta?"</li>
                    <li>O: "Acabo de grabar un video de entrenamiento de 15 minutos sobre [PROBLEMA] para que puedas lograr [SOLUCIÓN]. ¿Querés que te lo envíe?"</li>
                  </ul>
                </li>
                <li>Objetivo: lograr que respondan.</li>
                <li>Una vez que responden, podés iniciar una conversación. Ej.: "Acá está [NOMBRE], creo que para vos la plantilla #2 funcionaría muy bien. Por cierto, ¿con qué tipo de clientes trabajás?"</li>
                <li>Opcional: agregar una frase en P.D. invitándolos a charlar, similar a los emails de Historia o Caso de Estudio.</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Paso 4 */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">4</div> 
          Paso 4: Campaña de Oferta Mensual (Método Susurro → Insinuación → Grito)
        </h3>
        <p className="text-[15.5px] text-zinc-300 leading-relaxed mb-6">
          {isSummary 
            ? "Invitar mensualmente a tu lista mediante el método Susurro (CTA suaves), Insinuación (anticipar oferta) y Grito (invitación directa amigable)."
            : "Como vas a ir sumando más gente a tu lista con el tiempo (y sus situaciones de vida pueden cambiar), conviene invitarlos regularmente a trabajar con vos. Usamos el método Susurro, Insinuación, Grito una vez al mes:"}
        </p>

        {isSummary ? (
          <div className="bg-[#121214] border border-[#27272A] rounded-2xl overflow-hidden mb-6">
             <div className="p-5 border-b border-zinc-800 flex flex-col md:flex-row gap-4 md:items-center">
                <div className="w-24 shrink-0 font-bold text-zinc-300 text-sm">Semanas 1-3</div>
                <div>
                   <span className="bg-zinc-800 text-white text-xs font-bold px-2 py-1 rounded mr-2">Susurro</span>
                   <span className="text-[14.5px] text-zinc-400">Hacer ofertas sutiles en los P.D. o CTA de tus correos semanales.</span>
                </div>
             </div>
             <div className="p-5 border-b border-zinc-800 flex flex-col md:flex-row gap-4 md:items-center">
                <div className="w-24 shrink-0 font-bold text-zinc-300 text-sm">Semana 4</div>
                <div>
                   <span className="bg-amber-900/50 text-amber-400 text-xs font-bold px-2 py-1 rounded mr-2 border border-amber-800">Insinuación</span>
                   <span className="text-[14.5px] text-zinc-400">Avisar que algo se viene para generar curiosidad (Ej: "Mañana te mando una invitación a...").</span>
                </div>
             </div>
             <div className="p-5 flex flex-col md:flex-row gap-4 md:items-center bg-[#1A1A1E]">
                <div className="w-24 shrink-0 font-bold text-white text-sm">Fin de mes</div>
                <div>
                   <span className="bg-[#D5B15B]/20 text-[#D5B15B] text-xs font-bold px-2 py-1 rounded mr-2 border border-[#D5B15B]/30">Grito</span>
                   <span className="text-[14.5px] text-zinc-300">Invitación directa pero amigable para unirse a un programa o tomar un lugar disponible.</span>
                </div>
             </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <h4 className="font-bold text-[#D5B15B] mb-2">Susurro (Semanas 1-3)</h4>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300">
                <li>Ya estás haciendo ofertas de forma sutil en cada uno de tus emails semanales (en el CTA o el P.D.).</li>
                <li>La gente no se va a molestar porque es sutil.</li>
              </ul>
            </div>

            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <h4 className="font-bold text-amber-500 mb-2">Insinuación (Semana 4, primer email)</h4>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300">
                <li>Avisarles que algo se viene en unos días. Un email simple, en texto plano, para generar curiosidad.</li>
                <li>Ejemplos:
                  <ul className="list-circle pl-5 mt-1 space-y-1">
                    <li>"Mañana te voy a mandar una invitación a un desafío buenísimo que vamos a hacer la semana que viene para ayudar a [AVATAR] a lograr [RESULTADO]. ¡Estate atento!"</li>
                    <li>"El mes que viene tengo 3 lugares disponibles para trabajar con [AVATAR] y resolver [DOLOR] y lograr [RESULTADO]. Mañana te mando un mensaje para ver si te podría interesar."</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-[#1A1A1E] border border-[#D5B15B]/30 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D5B15B]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <h4 className="font-bold text-[#D5B15B] mb-2 relative z-10">Grito (Último email del mes)</h4>
              <p className="text-zinc-300 text-[15px] mb-3 relative z-10"><strong>Asunto:</strong> ¿Trabajamos juntos?</p>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 relative z-10">
                <li>Hacer una invitación directa pero amigable, sin romper la confianza generada.</li>
                <li>Ejemplos:
                  <ul className="list-circle pl-5 mt-1 space-y-2">
                    <li>"Hola [NOMBRE], voy a trabajar con un grupo privado de dueños de pequeños negocios el mes que viene que quieren implementar un sistema de LinkedIn para conseguir leads de forma constante sin depender de una agencia. ¿Te gustaría sumarte?"</li>
                    <li>"Hola [NOMBRE], puedo sumar 2 clientes privados más el mes que viene, que sean representantes de ventas corporativas en EE.UU. ganando entre $300k y $500k con ingresos irregulares, buscando construir un fondo de múltiples 7 cifras. ¿Te interesa?"</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        )}
        
        {!isSummary && (
           <div className="bg-[#1A1A1E] border border-zinc-800 p-6 rounded-xl mt-6">
              <h4 className="font-semibold text-white mb-3 text-lg flex items-center gap-2">
                 <RefreshCcw size={18} className="text-blue-400" /> Rotá tus ofertas
              </h4>
              <p className="text-[15px] text-zinc-300 mb-4">Cada mes, rotá la oferta, el avatar o el problema en el que te enfocás.</p>
              <p className="text-[15px] text-zinc-300 font-bold mb-3">Ejemplos de rotación:</p>
              
              <div className="overflow-x-auto">
                 <table className="w-full text-left text-[14.5px] text-zinc-300 border-collapse mb-4">
                    <thead>
                       <tr className="border-b border-zinc-700">
                          <th className="pb-3 pt-3 pr-4 font-bold text-white min-w-[150px]">Tipo de Avatar</th>
                          <th className="pb-3 pt-3 pr-4 font-bold text-white">Mes 1</th>
                          <th className="pb-3 pt-3 pr-4 font-bold text-white">Mes 2</th>
                          <th className="pb-3 pt-3 pr-4 font-bold text-white">Mes 3</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                       <tr>
                          <td className="py-3 pr-4 font-semibold">Foco del Avatar</td>
                          <td className="py-3 pr-4">Representantes de ventas corporativas, ingresos de $300k-$500k</td>
                          <td className="py-3 pr-4">Dueños de pequeños negocios de 45-55 años que quieren vender y retirarse en 10-15 años</td>
                          <td className="py-3 pr-4">Socios de estudios jurídicos</td>
                       </tr>
                    </tbody>
                 </table>
                 
                 <table className="w-full text-left text-[14.5px] text-zinc-300 border-collapse mb-4 mt-6">
                    <thead>
                       <tr className="border-b border-zinc-700">
                          <th className="pb-3 pt-3 pr-4 font-bold text-white min-w-[150px]">Tipo de Problema</th>
                          <th className="pb-3 pt-3 pr-4 font-bold text-white">Mes 1</th>
                          <th className="pb-3 pt-3 pr-4 font-bold text-white">Mes 2</th>
                          <th className="pb-3 pt-3 pr-4 font-bold text-white">Mes 3</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                       <tr>
                          <td className="py-3 pr-4 font-semibold">Foco del Problema</td>
                          <td className="py-3 pr-4">Generar leads entrantes vía contenido</td>
                          <td className="py-3 pr-4">Agendar más llamadas vía DMs</td>
                          <td className="py-3 pr-4">Armar un embudo que capture leads automáticamente en LinkedIn</td>
                       </tr>
                    </tbody>
                 </table>
                 
                 <table className="w-full text-left text-[14.5px] text-zinc-300 border-collapse mt-6">
                    <thead>
                       <tr className="border-b border-zinc-700">
                          <th className="pb-3 pt-3 pr-4 font-bold text-white min-w-[150px]">Tipo de Evento</th>
                          <th className="pb-3 pt-3 pr-4 font-bold text-white">Mes 1</th>
                          <th className="pb-3 pt-3 pr-4 font-bold text-white">Mes 2</th>
                          <th className="pb-3 pt-3 pr-4 font-bold text-white">Mes 3</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                       <tr>
                          <td className="py-3 pr-4 font-semibold">Foco de la Oferta/Evento</td>
                          <td className="py-3 pr-4">Oferta directa</td>
                          <td className="py-3 pr-4">Organizar un desafío en vivo online</td>
                          <td className="py-3 pr-4">Llamada de auditoría GRATIS para un número limitado</td>
                       </tr>
                    </tbody>
                 </table>
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-800">
                 <p className="text-[15px] text-zinc-300"><strong>Objetivo:</strong> Hacer que la oferta mensual se sienta especial y perfectamente alineada con un segmento de tu audiencia.</p>
              </div>
           </div>
        )}
      </div>

      {/* Paso 5 */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">5</div> 
          Paso 5: Sistema de Seguimiento Estructurado para Leads Interesados
        </h3>
        <p className="text-[15.5px] text-zinc-300 leading-relaxed mb-6">
          {isSummary 
            ? "Usar AIDA para leads que responden pero no agendan, y hacer seguimientos casuales (hasta 4 en 2 semanas) si dejan de responder."
            : "Cuando alguien responde pero no agenda una llamada, vas a usar AIDA (Atención → Interés → Deseo → Acción):"}
        </p>

        {isSummary ? (
           <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
                 <h4 className="font-bold text-[#D5B15B] mb-4 text-md">Respuestas iniciales (Ejemplos)</h4>
                 <ul className="space-y-4 text-[14px] text-zinc-400">
                    <li className="bg-[#1A1A1E] p-3 rounded-lg">"¿Podrías leer rápido este documento? Si tiene sentido, avisame y coordinamos."</li>
                    <li className="bg-[#1A1A1E] p-3 rounded-lg">"¿Estás disponible mañana a las 9 AM o 11 AM para una llamada rápida de 10 min?"</li>
                    <li className="bg-[#1A1A1E] p-3 rounded-lg">"Antes de agendar, ¿te molesta responder un par de preguntas rápidas?"</li>
                 </ul>
              </div>
              <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
                 <h4 className="font-bold text-[#D5B15B] mb-4 text-md">Seguimientos Casuales</h4>
                 <p className="text-sm text-zinc-500 mb-3">4 veces durante 1-2 semanas si no responden.</p>
                 <ul className="space-y-4 text-[14px] text-zinc-400">
                    <li className="bg-[#1A1A1E] p-3 rounded-lg">"¿Pudiste revisar el documento? Me encantaría agendarte. El viernes me lo tomo para..."</li>
                    <li className="bg-[#1A1A1E] p-3 rounded-lg">"¡Espero no estar siendo pesado! Empiezo la semana que viene y quiero asegurarme de..."</li>
                    <li className="bg-[#1A1A1E] p-3 rounded-lg">"Me da un poco de cosa mandarte esto de nuevo. Está totalmente bien si no te interesa por ahora..."</li>
                 </ul>
              </div>
           </div>
        ) : (
           <div className="space-y-6">
              <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-6">
                 <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300">
                    <li><strong>Atención:</strong> Respondieron a tu email de invitación.</li>
                    <li><strong>Interés:</strong> Muestran interés en la oferta.</li>
                    <li><strong>Deseo:</strong> Les enviás un Documento de Oferta o los derivás a más información.</li>
                    <li><strong>Acción:</strong> Les pedís que confirmen si quieren charlar.</li>
                 </ul>
              </div>

              <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
                 <h4 className="font-bold text-white mb-4 text-md">Opciones de respuesta de ejemplo:</h4>
                 <ul className="space-y-4 text-[15px] text-zinc-300">
                    <li className="bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
                       <span className="block text-zinc-400 text-sm font-semibold mb-2">Respuesta inmediata 1:</span>
                       "Hola [NOMBRE], suena bien. ¿Podrías leer rápido este documento? Es una lectura de 4 minutos sobre cómo podría ayudarte. Si tiene sentido, avisame y coordinamos una charla."
                    </li>
                    <li className="bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
                       <span className="block text-zinc-400 text-sm font-semibold mb-2">Respuesta inmediata 2:</span>
                       "Hola [NOMBRE], suena bien. ¿Estás disponible mañana a las 9 AM o 11 AM para una llamada rápida de 10 minutos para ver si puedo ayudarte?"
                    </li>
                    <li className="bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
                       <span className="block text-zinc-400 text-sm font-semibold mb-2">Respuesta inmediata 3:</span>
                       "Hola [NOMBRE], suena bien. Antes de agendar una llamada, ¿te molesta responder un par de preguntas rápidas? Quiero asegurarme de ser la persona indicada para ayudarte."<br/>
                       <span className="text-zinc-500 text-sm mt-1 block">(Después, listar las preguntas de calificación.)</span>
                    </li>
                 </ul>
                 <p className="mt-4 text-[14.5px] text-zinc-400"><strong>Tip:</strong> Registrá las respuestas en una planilla de Google Sheets para ver qué emails tienen mejor rendimiento.</p>
              </div>

              <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
                 <h4 className="font-bold text-white mb-2 text-md">Seguimientos (si dejan de responder)</h4>
                 <p className="text-[15px] text-zinc-300 mb-4">Sugerencia: hacer seguimiento 4 veces durante 1-2 semanas. Ya mostraron interés inicialmente, así que les estás haciendo un favor al recordarles.</p>
                 
                 <h5 className="font-semibold text-white mb-3">Mensajes de seguimiento de ejemplo:</h5>
                 <ul className="space-y-3 text-[15px] text-zinc-300">
                    <li className="flex gap-3"><div className="mt-1 text-[#D5B15B]">-</div><p>"Hola [NOMBRE], ¿pudiste revisar el documento? Me encantaría agendarte en mi calendario. Voy a tomarme el viernes libre para llevar a mi hija a su recital de baile, ¡está súper emocionada!"</p></li>
                    <li className="flex gap-3"><div className="mt-1 text-[#D5B15B]">-</div><p>"Hola [NOMBRE], el recital de baile estuvo divertidísimo pero también un poco triste. Bailó la mitad, después se tropezó y lloró el resto. De todas formas, ¿pudiste revisar el documento?"</p></li>
                    <li className="flex gap-3"><div className="mt-1 text-[#D5B15B]">-</div><p>"Hola [NOMBRE], ¡espero no estar siendo pesado! Empiezo la semana que viene, y quiero asegurarme de que si te interesa, tengamos la oportunidad de charlar."</p></li>
                    <li className="flex gap-3"><div className="mt-1 text-[#D5B15B]">-</div><p>"Hola [NOMBRE], me da un poco de cosa mandarte esto de nuevo. Está totalmente bien si no te interesa por ahora. Avisame y puedo anotar para hacer seguimiento en unos meses. ¡Sin problema de cualquier forma!"</p></li>
                 </ul>
                 <div className="mt-5 p-4 bg-[#1A1A1E] rounded-xl border border-zinc-800">
                    <p className="text-[14.5px] text-zinc-300"><strong>Importante:</strong> Hacer que estos emails se sientan casuales y espontáneos, no como seguimientos automatizados.</p>
                 </div>
              </div>
           </div>
        )}
      </div>

      {/* Notas Finales */}
      {!isSummary && (
        <div className="mb-10">
          <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#D5B15B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <h3 className="text-xl font-bold text-white mb-5 relative z-10">Notas Finales y Plan de Ejecución</h3>
             
             <ol className="list-decimal pl-5 space-y-3 text-[15.5px] text-zinc-300 relative z-10 mb-6 font-medium">
               <li>Configurar un sistema de suscripción para tu lead magnet.</li>
               <li>Implementar la secuencia de nutrición de 14 días (Emails 1 al 6).</li>
               <li>Enviar tres emails por semana de forma consistente (o ajustar si 3 es demasiado).</li>
               <li>Ejecutar una campaña de oferta mensual (Susurro, Insinuación, Grito).</li>
               <li>Hacer seguimiento estratégico a los leads interesados usando AIDA.</li>
               <li>Ajustar los mensajes según tu audiencia objetivo.</li>
             </ol>
             
             <div className="p-5 bg-[#1A1A1E] rounded-xl border border-zinc-800 relative z-10">
                <p className="text-[15px] text-zinc-300 leading-relaxed">
                   <strong>Recordá:</strong> Este sistema asegura que nutras leads de forma consistente, los conviertas en clientes y mantengas un alto nivel de compromiso sin saturar. Una vez configurado, simplemente hay que mantenerlo y optimizarlo.
                </p>
             </div>
          </div>
        </div>
      )}

    </div>
  </div>
  );
};
"""
content = content[:start_idx] + new_code + content[end_idx:]

with open('src/App.tsx', 'w') as f:
    f.write(content)

