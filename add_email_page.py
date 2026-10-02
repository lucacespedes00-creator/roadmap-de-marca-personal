import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# 1. Add default page
default_pages_marker = "const defaultPages: Page[] = ["
default_pages_idx = content.find(default_pages_marker)
if default_pages_idx != -1:
    insert_idx = content.find("];", default_pages_idx)
    page_to_add = "  { id: 'linkedin_email', title: 'Sistema de Email', type: 'default_linkedin_email', parentId: 'linkedin_acquisition_parent' },\n"
    content = content[:insert_idx] + page_to_add + content[insert_idx:]

# 2. Add to LinkedInAcquisitionParentPage
parent_page_marker = "const LinkedInAcquisitionParentPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => ("
parent_page_idx = content.find(parent_page_marker)
if parent_page_idx != -1:
    insert_idx = content.find("</div>", content.find("onClick={() => setActivePageId('linkedin_outbound')}", parent_page_idx))
    if insert_idx != -1:
        insert_idx = content.find("/>", content.find("onClick={() => setActivePageId('linkedin_outbound')", parent_page_idx)) + 2
        area_item_to_add = """
        <AreaItem 
          icon={Mail} 
          title="Sistema de Email" 
          desc="Estrategia para convertir listas de correos en clientes" 
          onClick={() => setActivePageId('linkedin_email')} 
        />"""
        content = content[:insert_idx] + area_item_to_add + content[insert_idx:]

# 3. Add to getPageIcon
get_page_icon_marker = "if (type === 'default_linkedin_content') return <PenTool size={16} />;"
get_page_icon_idx = content.find(get_page_icon_marker)
if get_page_icon_idx != -1:
    content = content[:get_page_icon_idx] + "if (type === 'default_linkedin_email') return <Mail size={16} />;\n    " + content[get_page_icon_idx:]

# 4. Add to activePage?.type switch
active_page_switch_marker = "{activePage?.type === 'default_linkedin_content' && <LinkedInContentPage setActivePageId={setActivePageId} />}"
active_page_switch_idx = content.find(active_page_switch_marker)
if active_page_switch_idx != -1:
    insert_idx = active_page_switch_idx + len(active_page_switch_marker)
    content = content[:insert_idx] + "\n          {activePage?.type === 'default_linkedin_email' && <LinkedInEmailPage setActivePageId={setActivePageId} />}" + content[insert_idx:]

# 5. Insert LinkedInEmailPage before CustomPageEditor
custom_page_editor_marker = "const CustomPageEditor ="
custom_page_editor_idx = content.find(custom_page_editor_marker)
if custom_page_editor_idx != -1:
    new_page_code = """
const LinkedInEmailPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {
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
          Estrategia estructurada para convertir listas de correos en clientes de alto valor.
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
          )}

          <div className="grid md:grid-cols-2 gap-4">
             <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-5">
               <h4 className="font-semibold text-white mb-2 text-sm">Objetivo</h4>
               <p className="text-[14px] text-zinc-400">Nutrir leads de forma consistente, convertirlos en clientes y mantener un alto nivel de compromiso sin saturar (spamear) tu lista.</p>
             </div>
             <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-5">
               <h4 className="font-semibold text-white mb-2 text-sm">Beneficios clave</h4>
               <ul className="text-[14px] text-zinc-400 space-y-1 list-disc pl-4">
                 <li>Generar confianza dando valor.</li>
                 <li>Mostrar tu experiencia.</li>
                 <li>Mantenerte top of mind.</li>
                 <li>Hacer ofertas mensuales "invitantes".</li>
               </ul>
             </div>
          </div>
        </div>
      </div>

      {/* Paso 1 */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">1</div> 
          Captar Leads con Lead Magnets
        </h3>
        <p className="text-[15px] text-zinc-300 leading-relaxed mb-6">
          {isSummary 
            ? "Ofrecer contenido gratuito a cambio del email. Promocionarlo en posts de LinkedIn, perfil y DMs. Al suscribirse reciben el recurso y entran a una secuencia de 14 días."
            : "Ofrecer contenido gratuito de valor a cambio de un email. Publicar links al lead magnet en tu contenido de LinkedIn, tu perfil y tus mensajes directos."}
        </p>
        
        {!isSummary && (
          <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6 mb-6">
            <h4 className="font-semibold text-[#D5B15B] mb-4">Ejemplos de lead magnets efectivos:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
               <div className="flex items-center gap-3 bg-[#1A1A1E] p-3 rounded-lg border border-zinc-800/50">
                  <FileText className="text-zinc-400 shrink-0" size={18} />
                  <span className="text-[14px] text-zinc-300">Guías gratuitas</span>
               </div>
               <div className="flex items-center gap-3 bg-[#1A1A1E] p-3 rounded-lg border border-zinc-800/50">
                  <Video className="text-zinc-400 shrink-0" size={18} />
                  <span className="text-[14px] text-zinc-300">Videos de entrenamiento</span>
               </div>
               <div className="flex items-center gap-3 bg-[#1A1A1E] p-3 rounded-lg border border-zinc-800/50">
                  <CheckSquare className="text-zinc-400 shrink-0" size={18} />
                  <span className="text-[14px] text-zinc-300">Checklists de Notion</span>
               </div>
               <div className="flex items-center gap-3 bg-[#1A1A1E] p-3 rounded-lg border border-zinc-800/50">
                  <Mail className="text-zinc-400 shrink-0" size={18} />
                  <span className="text-[14px] text-zinc-300">Archivos de ejemplo de emails</span>
               </div>
               <div className="flex items-center gap-3 bg-[#1A1A1E] p-3 rounded-lg border border-zinc-800/50">
                  <MonitorPlay className="text-zinc-400 shrink-0" size={18} />
                  <span className="text-[14px] text-zinc-300">Clases en vivo/webinars</span>
               </div>
            </div>
          </div>
        )}
      </div>

      {/* Paso 2 */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">2</div> 
          Secuencia de Nutrición de 14 Días
        </h3>
        <p className="text-[15px] text-zinc-300 leading-relaxed mb-6">
          {isSummary 
            ? "Una serie de 6 emails en 14 días para entregar valor, tocar dolores principales e invitar a agendar llamada, ideal para captar al 3% listo para comprar ya."
            : "Vas a enviar una serie de emails a lo largo de 14 días para generar cercanía, abordar los principales dolores (pain points) y ofrecer oportunidades de que respondan o agenden llamadas."}
        </p>

        <div className="space-y-4">
           {/* Email 1 */}
           <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                 <div className="bg-zinc-800 text-white text-xs font-bold px-2.5 py-1 rounded-md">Día 1</div>
                 <h4 className="font-bold text-white">Bienvenida y entrega</h4>
              </div>
              <p className="text-[14.5px] text-zinc-400">
                Agradecer, entregar el recurso y establecer expectativas sobre 3 desafíos clave que tratarás. Incluir CTA suave para que respondan con una palabra.
              </p>
           </div>
           
           {/* Email 2 */}
           <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                 <div className="bg-zinc-800 text-white text-xs font-bold px-2.5 py-1 rounded-md">Día 2</div>
                 <h4 className="font-bold text-white">Identificar su problema</h4>
              </div>
              <p className="text-[14.5px] text-zinc-400">
                Hacer una pregunta súper simple para lograr que respondan. (Ej: "¿Con qué tipo de clientes trabajás?")
              </p>
           </div>

           {/* Emails 3, 4, 5 */}
           <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                 <div className="bg-zinc-800 text-white text-xs font-bold px-2.5 py-1 rounded-md">Días 5, 9 y 12</div>
                 <h4 className="font-bold text-white">Problema → Agitar → Solución</h4>
              </div>
              <p className="text-[14.5px] text-zinc-400 mb-3">
                {isSummary 
                  ? "Tres emails abordando 3 problemas clave distintos. Enfatizar el dolor y ofrecer solución. Añadir P.D. para charla."
                  : "Hablar del problema, por qué importa (y perjudica), y presentar solución rápida. Opcional adjuntar Loom o caso de estudio. Debe ser un problema 'analgésico'. Añadir P.D. suave para charlar."}
              </p>
           </div>

           {/* Email 6 */}
           <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6 border-b-2 border-b-[#D5B15B]">
              <div className="flex items-center gap-3 mb-2">
                 <div className="bg-zinc-800 text-white text-xs font-bold px-2.5 py-1 rounded-md">Día 14</div>
                 <h4 className="font-bold text-white">Última oportunidad (Invitación)</h4>
              </div>
              <p className="text-[14.5px] text-zinc-400">
                {isSummary 
                  ? "Invitación suave a trabajar juntos antes de pasar a emails regulares."
                  : "Invitarlos a trabajar con vos sin vender a la fuerza. Resumir lo aprendido y preguntar si están en serio interesados. Ej: 'El mes que viene voy a trabajar con un pequeño grupo... ¿te sumás?'"}
              </p>
           </div>
        </div>
      </div>

      {/* Paso 3 */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">3</div> 
          Cadencia Regular (3 x Semana)
        </h3>
        <p className="text-[15px] text-zinc-300 leading-relaxed mb-6">
          {isSummary 
            ? "Enviar 3 emails por semana con valor, prueba social y recursos. Si 3 es mucho, reducir, pero mantener consistencia."
            : "El número de oro es 3 emails por semana. Si es mucho, reducilo, pero no superes los 3. Podés cambiar días o el orden."}
        </p>

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
      </div>

      {/* Paso 4 */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">4</div> 
          Campaña de Oferta Mensual
        </h3>
        <p className="text-[15px] text-zinc-300 leading-relaxed mb-6">
          {isSummary 
            ? "Invitar mensualmente a tu lista mediante el método Susurro (CTA suaves), Insinuación (anticipar oferta) y Grito (invitación directa amigable)."
            : "Como sumás gente nueva constantemente, ofreceles trabajar con vos usando el método Susurro, Insinuación, Grito una vez al mes."}
        </p>

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
        
        {!isSummary && (
           <div className="bg-[#1A1A1E] border border-zinc-800 p-6 rounded-xl">
              <h4 className="font-semibold text-white mb-3 text-sm flex items-center gap-2">
                 <RefreshCcw size={16} className="text-blue-400" /> Rotación de Ofertas
              </h4>
              <p className="text-[14px] text-zinc-400 mb-4">Cada mes, rotá la oferta, el avatar o el problema para que la oferta se sienta especial y alineada.</p>
              <div className="overflow-x-auto">
                 <table className="w-full text-left text-sm text-zinc-400 border-collapse">
                    <thead>
                       <tr className="border-b border-zinc-800">
                          <th className="pb-2 font-medium text-zinc-300">Elemento</th>
                          <th className="pb-2 font-medium text-zinc-300">Mes 1</th>
                          <th className="pb-2 font-medium text-zinc-300">Mes 2</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                       <tr>
                          <td className="py-2">Avatar</td>
                          <td className="py-2">Reps. ventas corporativas</td>
                          <td className="py-2">Dueños de negocios 45-55 años</td>
                       </tr>
                       <tr>
                          <td className="py-2">Problema</td>
                          <td className="py-2">Generar leads entrantes</td>
                          <td className="py-2">Agendar más llamadas vía DMs</td>
                       </tr>
                       <tr>
                          <td className="py-2">Evento</td>
                          <td className="py-2">Oferta directa</td>
                          <td className="py-2">Desafío en vivo online</td>
                       </tr>
                    </tbody>
                 </table>
              </div>
           </div>
        )}
      </div>

      {/* Paso 5 */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">5</div> 
          Sistema de Seguimiento
        </h3>
        <p className="text-[15px] text-zinc-300 leading-relaxed mb-6">
          {isSummary 
            ? "Usar AIDA para leads que responden pero no agendan, y hacer seguimientos casuales (hasta 4 en 2 semanas) si dejan de responder."
            : "Cuando alguien responde pero no agenda, usar AIDA (Atención, Interés, Deseo, Acción). Hacer seguimientos casuales si dejan de responder."}
        </p>

        {!isSummary && (
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
        )}
      </div>

    </div>
  </div>
  );
};
"""
    content = content[:custom_page_editor_idx] + new_page_code + content[custom_page_editor_idx:]


with open('src/App.tsx', 'w') as f:
    f.write(content)

