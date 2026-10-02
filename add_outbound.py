import re

with open("src/App.tsx", "r") as f:
    content = f.read()

component_str = """
const LinkedInOutboundPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {
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
        <MessageSquare size={28} strokeWidth={1.5} />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Outbound y LinkedIn</h2>
        <p className="text-[15px] text-zinc-400">La Estrategia Completa de Outbound en LinkedIn: Cómo Construí un Negocio de $35K/Mes Enviando 20 DMs por Día</p>
      </div>
    </div>

    {!isSummary ? (
      <div className="space-y-6 text-zinc-300 leading-relaxed text-[15.5px] max-w-[760px]">
        
        <div className="flex items-center gap-4 text-sm text-zinc-500 mb-8 border-b border-zinc-800/50 pb-4">
          <span className="text-white font-medium">Xavier Caffrey</span>
          <span>•</span>
          <span>27 de enero de 2026</span>
          <span>•</span>
          <span>18 min de lectura</span>
        </div>

        <p className="italic text-zinc-400">Dato de portada: $35K/mes de ingresos de agencia construidos en el primer año con 20 DMs de LinkedIn por día y sin publicidad paga.</p>
        
        <p>Los mensajes de LinkedIn tienen una tasa de respuesta del 10,3%. El email frío tiene 5,1%. Eso es el doble de respuestas con el mismo esfuerzo.</p>
        <p>Escalé mi agencia a $35K por mes en el primer año casi enteramente desde LinkedIn. Sin publicidad paga. Sin lista de emails. Solo contenido y 20 DMs por día. Antes de aprender email frío, antes de entender cualquier otro canal, solo LinkedIn construyó mi negocio.</p>
        <p>Esta guía cubre todo: optimización de perfil, estrategia de conexiones, frameworks de mensajería, y la rutina diaria exacta que genera reuniones. Nada de teoría. Esto es lo que hice, respaldado por datos de más de 500.000 mensajes de outreach analizados por Closely, Expandi y Belkins en 2025.</p>

        <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-6 my-8">
          <h4 className="text-white font-semibold mb-2">Respuesta rápida</h4>
          <p className="text-zinc-400 text-sm">El outbound de LinkedIn tiene una tasa de respuesta del 10,3% —el doble que el 5,1% del email frío— porque los prospectos pueden ver tu perfil, tus conexiones en común y tu contenido antes de leer tu mensaje. Las solicitudes de conexión personalizadas obtienen un 72% más de respuestas que las genéricas, y una rutina diaria de 20 DMs bien dirigidos más la publicación constante de contenido puede escalar una agencia a $35K/mes en el primer año.</p>
        </div>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4 pb-2 border-b border-zinc-800/50">Por qué el outbound de LinkedIn funciona mejor que el email</h3>
        <p>El outreach frío en LinkedIn funciona porque los prospectos ven tu cara, tu titular (headline), tus conexiones en común y tu actividad reciente antes de leer una sola palabra. El email no te da esa capa de contexto.</p>
        
        <p>Cuando alguien recibe tu mensaje de LinkedIn, puede verificar instantáneamente:</p>
        <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
          <li>Quién sos (foto de perfil)</li>
          <li>A qué te dedicás (headline)</li>
          <li>A quién conocés (conexiones en común)</li>
          <li>Si sos creíble (contenido, recomendaciones)</li>
        </ul>

        <p>Esta prueba social incorporada hace que el outreach en LinkedIn se sienta menos frío, incluso cuando es el primer contacto.</p>
        <p>La plataforma también tiene una densidad que no podés ignorar. Más de 65 millones de tomadores de decisiones usan LinkedIn. Tus compradores están ahí, scrolleando, posteando, conectando. A diferencia del email, los estás alcanzando en un contexto profesional donde esperan conversaciones de negocios.</p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-[#1A1A1E] text-zinc-300">
              <tr><th className="p-3 border border-zinc-800">Canal</th><th className="p-3 border border-zinc-800">Tasa de respuesta promedio</th><th className="p-3 border border-zinc-800">Contexto disponible</th></tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-zinc-800 font-medium">Mensajes de LinkedIn</td><td className="p-3 border border-zinc-800 text-[#D5B15B]">10,3%</td><td className="p-3 border border-zinc-800 text-zinc-400">Perfil completo, foto, conexiones en común</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Email frío</td><td className="p-3 border border-zinc-800 text-zinc-400">5,1%</td><td className="p-3 border border-zinc-800 text-zinc-400">Solo nombre y empresa</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">InMail de LinkedIn</td><td className="p-3 border border-zinc-800 text-[#D5B15B]">18-25%</td><td className="p-3 border border-zinc-800 text-zinc-400">Perfil completo + evita la conexión previa</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Llamadas en frío</td><td className="p-3 border border-zinc-800 text-zinc-400">2-3%</td><td className="p-3 border border-zinc-800 text-zinc-400">Solo voz</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4 pb-2 border-b border-zinc-800/50">Los números: benchmarks de outreach en LinkedIn para 2025</h3>
        <p>Antes de meterse en tácticas, necesitás saber cómo se ve "bueno". Estos benchmarks vienen de analizar cientos de miles de campañas de outreach en LinkedIn.</p>

        <h4 className="text-xl font-bold text-white mt-8 mb-3">Tasas de respuesta por tipo de mensaje</h4>
        <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
          <li>Solicitud de conexión (personalizada): <strong>9,36%</strong> de tasa de respuesta</li>
          <li>Solicitud de conexión (genérica): <strong>5,44%</strong> de tasa de respuesta</li>
          <li>InMail (personalizado): <strong>18-25%</strong> de tasa de respuesta</li>
          <li>InMail (plantilla fría): <strong>6,38%</strong> de tasa de respuesta</li>
        </ul>
        <div className="bg-[#121214] border-l-2 border-[#D5B15B] p-4 my-4">
          <p className="text-sm"><strong>Dato clave:</strong> las solicitudes de conexión personalizadas obtienen un 72% más de respuestas que las genéricas. Sin embargo, el 87% de los usuarios de LinkedIn no personaliza sus solicitudes. Esa es tu ventaja competitiva.</p>
        </div>

        <h4 className="text-xl font-bold text-white mt-8 mb-3">Tasas de respuesta por industria</h4>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-[#1A1A1E] text-zinc-300">
              <tr><th className="p-3 border border-zinc-800">Industria</th><th className="p-3 border border-zinc-800">Tasa de respuesta</th></tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-zinc-800 font-medium">RRHH y Adquisición de Talento</td><td className="p-3 border border-zinc-800 text-[#D5B15B]">12,08%</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Legal y Servicios Profesionales</td><td className="p-3 border border-zinc-800 text-zinc-400">10,42%</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Salud</td><td className="p-3 border border-zinc-800 text-zinc-400">9,25%</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Retail y Bienes de Consumo</td><td className="p-3 border border-zinc-800 text-zinc-400">9,17%</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Educación</td><td className="p-3 border border-zinc-800 text-zinc-400">7-9%</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Marketing</td><td className="p-3 border border-zinc-800 text-zinc-400">6,40%</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Software y SaaS</td><td className="p-3 border border-zinc-800 text-zinc-400">4,77%</td></tr>
            </tbody>
          </table>
        </div>
        <p>Software y SaaS tienen las tasas de respuesta más bajas porque todo el mundo prospecta ahí. Si estás apuntando a tecnología, necesitás una personalización más ajustada y mejores mensajes para destacar.</p>

        <h4 className="text-xl font-bold text-white mt-8 mb-3">Tasas de respuesta por puesto</h4>
        <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
          <li>Product Managers: 10,24%</li>
          <li>Líderes de Operaciones: 10,02%</li>
          <li>Ejecutivos de nivel C: 6,98%</li>
          <li>Profesionales de Ventas: 6,32%</li>
        </ul>
        <p>Los ejecutivos reciben más mensajes, así que responden menos. Pero también toman decisiones más rápido. Apuntá en función de tu ciclo de venta.</p>

        <h4 className="text-xl font-bold text-white mt-8 mb-3">Mejores días y horarios para enviar</h4>
        <ul className="list-disc pl-6 space-y-1.5 text-zinc-400 mb-4">
          <li><strong>Martes:</strong> 6,90% de tasa de respuesta (la más alta)</li>
          <li><strong>Lunes:</strong> 6,85%</li>
          <li><strong>Miércoles/Jueves:</strong> 6,62-6,63%</li>
          <li><strong>Viernes:</strong> 6,58%</li>
          <li><strong>Sábado:</strong> 6,40% (la más baja)</li>
        </ul>
        <p><strong>Mejores horarios del día:</strong> Mañana temprano (7:30-9:00 AM), Almuerzo (12:00-2:00 PM), Tarde-noche (4:00-6:00 PM).</p>
        <p><strong>Mejores meses:</strong> enero (7,51%), abril (7,26%), julio (7,00%).<br/><strong>Peores meses:</strong> octubre-diciembre (el Q4 es brutal).</p>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4 pb-2 border-b border-zinc-800/50">Optimización de perfil: tu vendedor silencioso</h3>
        <p>Tu perfil vende antes de que tu mensaje llegue. Un mal perfil mata un buen outreach.</p>

        <h4 className="text-xl font-bold text-white mt-6 mb-3">Foto de perfil: el 74% de las primeras impresiones</h4>
        <p>Los perfiles con fotos profesionales reciben 21 veces más vistas que los que no las tienen. Reciben 9 veces más solicitudes de conexión y 36 veces más mensajes.</p>
        <p>La gente forma juicios sobre tu cara en 100 milisegundos, antes de leer una sola palabra. Tu foto genera confianza o dispara rechazo.</p>
        <p><strong>Requisitos de la foto de perfil:</strong></p>
        <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
          <li>Foto profesional (no una selfie, no una foto grupal recortada)</li>
          <li>La cara ocupa el 60% del cuadro (crítico para mobile)</li>
          <li>Contacto visual directo con la cámara</li>
          <li>Luz natural, fondo limpio</li>
        </ul>
        <p><strong>Qué mata la credibilidad:</strong> el 28% de la gente marca las fotos grupales recortadas como poco profesionales. El 38% encuentra poco confiables las imágenes suavizadas con IA.</p>

        <h4 className="text-xl font-bold text-white mt-6 mb-3">Headline: 220 caracteres para vender</h4>
        <p>No desperdicies tu headline en solo un cargo. Usá la fórmula:</p>
        <div className="bg-[#1A1A1E] border border-zinc-800 p-4 rounded-xl my-4 text-center font-mono">
          <span className="text-[#D5B15B]">[Rol] | Ayudo a [Audiencia objetivo] a lograr [Resultado específico]</span>
        </div>
        <p><strong>Ejemplos:</strong></p>
        <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
          <li>"Estratega de Outbound | Ayudo a SaaS B2B a agendar 30+ reuniones/mes con outreach frío"</li>
          <li>"Consultor de Crecimiento | Convierto prospectos fríos en negocios cerrados para startups tecnológicas"</li>
        </ul>
        
        <h4 className="text-xl font-bold text-white mt-6 mb-3">Sección "Acerca de"</h4>
        <p>Solo las primeras 2-3 líneas se muestran antes de "Ver más". Esas líneas tienen que enganchar al lector. Escribí en primera persona, sin palabras de moda vacías.</p>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4 pb-2 border-b border-zinc-800/50">Estrategia de solicitudes de conexión</h3>
        <p>LinkedIn te limita a aproximadamente 200 solicitudes de conexión por semana.</p>
        
        <h4 className="text-xl font-bold text-white mt-6 mb-3">Límites semanales y prácticas seguras</h4>
        <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
          <li><strong>Límite semanal:</strong> ~200 solicitudes de conexión</li>
          <li><strong>Límite diario seguro:</strong> 20-25 solicitudes para cuentas establecidas</li>
          <li><strong>Cuentas nuevas:</strong> empezar con 5-10/día, aumentar un 10-20% semanalmente</li>
        </ul>

        <h4 className="text-xl font-bold text-white mt-6 mb-3">El protocolo de calentamiento para cuentas nuevas</h4>
        <p>No hagas outreach en frío en una cuenta nueva o inactiva.</p>
        <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
          <li><strong>Semana 1-2:</strong> Completá tu perfil. Interactuá de forma orgánica. Conectá con gente que realmente conocés.</li>
          <li><strong>Semana 3-4:</strong> Aumentá gradualmente las solicitudes (10-20% semanal). Empezá con conexiones cálidas.</li>
          <li><strong>Semana 5 en adelante:</strong> Empezá el outreach en frío con solicitudes personalizadas.</li>
        </ul>

        <h4 className="text-xl font-bold text-white mt-6 mb-3">Secuencia de calentamiento previa a la conexión</h4>
        <p>Antes de enviar una solicitud, calentá al prospecto:</p>
        <ol className="list-decimal pl-6 space-y-1.5 text-zinc-400">
          <li>Visitá su perfil</li>
          <li>Esperá 2-6 horas</li>
          <li>Dale like a uno de sus posteos</li>
          <li>Esperá 24 horas</li>
          <li>Enviá la solicitud de conexión</li>
        </ol>

        <h4 className="text-xl font-bold text-white mt-6 mb-3">Plantilla de solicitud de conexión</h4>
        <p>El punto ideal es 200-250 caracteres. Nunca superes los 300. Estructura: Gancho (relevancia), Contexto, Valor, CTA suave.</p>
        <div className="bg-[#1A1A1E] border border-zinc-800 p-4 rounded-xl text-zinc-300 italic mb-4">
          "Hola [Nombre], vi que estás escalando el equipo de SDR en [Empresa]. Vengo trabajando con equipos similares en outbound; me encantaría conectar y compartir ideas. Sin venta, solo interés genuino en lo que están construyendo."
        </div>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4 pb-2 border-b border-zinc-800/50">La estrategia de DMs de LinkedIn que consigue respuestas</h3>
        <h4 className="text-xl font-bold text-white mt-6 mb-3">La regla de los 400 caracteres</h4>
        <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
          <li>Mensajes de menos de 400 caracteres: <strong>22%</strong> de tasa de respuesta</li>
          <li>Mensajes de 400-800 caracteres: <strong>3%</strong> de tasa de respuesta</li>
        </ul>
        <p>Esa es una diferencia de 7 veces. Mantenelo corto. Para los InMails, el punto ideal es de 25-50 palabras.</p>

        <h4 className="text-xl font-bold text-white mt-8 mb-3">El framework INSIGHT-DOLOR-PREGUNTA</h4>
        <p>Para outreach en frío que consigue tasas de respuesta del 15-20%:</p>
        
        <div className="space-y-4 my-6">
          <div className="bg-[#121214] border border-zinc-800 p-4 rounded-xl">
            <div className="text-[#D5B15B] font-bold mb-1">Paso 1: INSIGHT</div>
            <p className="text-sm text-zinc-400 mb-2">Arrancá con algo que no saben sobre su situación.</p>
            <p className="italic text-zinc-300">"La mayoría de los VPs con los que trabajamos no se dan cuenta de que el 60% de su pipeline se estanca porque..."</p>
          </div>
          <div className="bg-[#121214] border border-zinc-800 p-4 rounded-xl">
            <div className="text-[#D5B15B] font-bold mb-1">Paso 2: DOLOR</div>
            <p className="text-sm text-zinc-400 mb-2">Conectá el insight con un problema que podrían tener.</p>
            <p className="italic text-zinc-300">"...lo que significa que probablemente estés lidiando con ciclos de venta más largos y más 'no hay decisión'..."</p>
          </div>
          <div className="bg-[#121214] border border-zinc-800 p-4 rounded-xl">
            <div className="text-[#D5B15B] font-bold mb-1">Paso 3: PREGUNTA</div>
            <p className="text-sm text-zinc-400 mb-2">Preguntá si están viendo algo similar. No si quieren una demo.</p>
            <p className="italic text-zinc-300">"¿Estás viendo patrones similares en tu pipeline?"</p>
          </div>
        </div>

        <h4 className="text-xl font-bold text-white mt-8 mb-3">Secuencias de seguimiento que convierten</h4>
        <p>Un solo mensaje no alcanza. Las tasas de respuesta saltan del 9% al 27% para el sexto seguimiento.</p>
        <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
          <li><strong>Día 1 (post-conexión):</strong> Agradecé, ofrecé valor, hacé una pregunta fácil.</li>
          <li><strong>Día 4-5:</strong> Compartí un insight relevante, referencia a algo actual, pregunta liviana.</li>
          <li><strong>Día 10-14:</strong> Pedido directo pero respetuoso, propuesta de valor clara, CTA específico.</li>
        </ul>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4 pb-2 border-b border-zinc-800/50">Mensajes de voz: el arma secreta</h3>
        <p>Los mensajes de voz generan <strong>3 veces más respuestas</strong> que el texto. Te hacen destacar, añaden tono y calidez.</p>
        <p><strong>Consejos:</strong> Mantenelo bajo 30s (60s máximo). Soná natural, referenciá algo específico, terminá con un próximo paso claro. Usalo para prospectos de alto valor, no escala para todos.</p>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4 pb-2 border-b border-zinc-800/50">La sinergia entre contenido y outbound</h3>
        <p>El contenido establece credibilidad antes de que llegue tu mensaje. Si publicás 3-5 veces por semana (texto, carruseles), pasás de ser un "desconocido pidiendo acceso" a "alguien que reconocen". Interactuá con los que comentan y referenciá tu contenido en el outreach.</p>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4 pb-2 border-b border-zinc-800/50">La rutina diaria en LinkedIn</h3>
        <p>Esto es exactamente lo que hice para construir $35K/mes desde LinkedIn.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-[#1A1A1E] border border-[#27272A] p-5 rounded-xl">
            <h5 className="font-bold text-white mb-3 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div> Bloque de Mañana (30-45 min)</h5>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-zinc-400">
              <li><strong>Revisar notificaciones (5m):</strong> Responder comentarios, aceptar conexiones.</li>
              <li><strong>Interactuar (10-15m):</strong> Comentar en posteos de prospectos.</li>
              <li><strong>Solicitudes (10-15m):</strong> 10-15 solicitudes personalizadas a ICPs.</li>
              <li><strong>Primer contacto (10m):</strong> Mensajes a conexiones nuevas.</li>
            </ol>
          </div>
          <div className="bg-[#1A1A1E] border border-[#27272A] p-5 rounded-xl">
            <h5 className="font-bold text-white mb-3 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div> Bloque de Tarde (15-20 min)</h5>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-zinc-400">
              <li><strong>Seguimientos (10m):</strong> Mensajes que sumen valor a los que no respondieron.</li>
              <li><strong>Mensajes de voz (5-10m):</strong> 3-5 notas a prospectos de alto valor.</li>
            </ol>
          </div>
        </div>

        <div className="bg-[#121214] border border-[#D5B15B]/30 rounded-2xl p-6 mt-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D5B15B]/10 rounded-full blur-2xl"></div>
          <h4 className="text-lg font-bold text-white mb-4 relative z-10">La Matemática</h4>
          <ul className="space-y-2 text-zinc-300 relative z-10 text-[15px]">
            <li className="flex justify-between border-b border-zinc-800 pb-2"><span>20 DMs/día × 10% respuesta</span> <strong>= 2 respuestas/día</strong></li>
            <li className="flex justify-between border-b border-zinc-800 pb-2"><span>2 respuestas × 50% positivas</span> <strong>= 1 conv. calificada/día</strong></li>
            <li className="flex justify-between border-b border-zinc-800 pb-2"><span>5 conv./semana × 25% reunión</span> <strong>= 1,25 reuniones/semana</strong></li>
            <li className="flex justify-between border-b border-zinc-800 pb-2"><span>5 reuniones/mes × 20% cierre</span> <strong>= 1 cliente nuevo/mes</strong></li>
            <li className="flex justify-between pt-2 text-[#D5B15B] font-bold"><span>Con ACV de $5K</span> <span>= $5K/mes en ingresos nuevos</span></li>
          </ul>
        </div>
      </div>
    ) : (
      <div className="space-y-12">
        {/* Resumen de la estrategia */}
        <div className="bg-[#121214] border border-[#27272A] rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D5B15B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="mb-8 relative z-10">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Zap size={20} className="text-[#D5B15B]"/> El poder del Outbound en LinkedIn
            </h3>
            <div className="text-[15.5px] text-zinc-300 leading-relaxed mb-6 space-y-4">
              <p>LinkedIn ofrece una <strong>tasa de respuesta del 10.3%</strong>, el doble que el email frío (5.1%). La clave es la prueba social instantánea: tu foto, titular y contenido valen más que cualquier copy genérico.</p>
              <p>El outbound no requiere grandes inversiones; con solo 20 DMs personalizados por día y una estrategia enfocada de contenido y perfil, podés generar negocios consistentes y de alto valor sin gastar en Ads.</p>
            </div>
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-2`}>
               <div className="bg-[#1A1A1E] border border-[#27272A] rounded-xl p-4 text-center">
                  <div className="text-xs text-zinc-500 mb-1">DMs Diarios</div>
                  <div className="text-lg font-bold text-white">20</div>
               </div>
               <div className="bg-[#1A1A1E] border border-[#27272A] rounded-xl p-4 text-center">
                  <div className="text-xs text-zinc-500 mb-1">Tasa de Respuesta</div>
                  <div className="text-lg font-bold text-[#D5B15B]">10.3%</div>
               </div>
               <div className="bg-[#1A1A1E] border border-[#27272A] rounded-xl p-4 text-center">
                  <div className="text-xs text-zinc-500 mb-1">Largo ideal</div>
                  <div className="text-lg font-bold text-white">&lt;400 chars</div>
               </div>
               <div className="bg-[#1A1A1E] border border-[#D5B15B]/20 rounded-xl p-4 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#D5B15B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-xs text-[#D5B15B] mb-1 relative z-10">Pipeline/Mes</div>
                  <div className="text-lg font-bold text-[#D5B15B] relative z-10">+$5K</div>
               </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Puntos Clave</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1A1A1E] border border-[#27272A]/80 rounded-[1.5rem] p-6 hover:border-[#D5B15B]/30 transition-colors">
               <h4 className="font-semibold text-white mb-3 text-lg flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div> Perfil y Conexiones</h4>
               <p className="text-[14px] text-zinc-400">Una buena foto y un titular orientado a resultados son vitales. Las solicitudes personalizadas (referenciando contenido o conexiones comunes) obtienen <strong>72% más respuestas</strong>. Limitar a 20-25 solicitudes/día para evitar bloqueos.</p>
            </div>
            <div className="bg-[#1A1A1E] border border-[#27272A]/80 rounded-[1.5rem] p-6 hover:border-[#D5B15B]/30 transition-colors">
               <h4 className="font-semibold text-white mb-3 text-lg flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div> La Regla de los 400 Caracteres</h4>
               <p className="text-[14px] text-zinc-400">Los mensajes por debajo de 400 caracteres obtienen <strong>22% de respuesta</strong>; pasarte de largo lo baja al 3%. Usa el framework: <strong>Insight &gt; Dolor &gt; Pregunta</strong> para iniciar una conversación en vez de pedir una demo.</p>
            </div>
            <div className="bg-[#1A1A1E] border border-[#27272A]/80 rounded-[1.5rem] p-6 hover:border-[#D5B15B]/30 transition-colors">
               <h4 className="font-semibold text-white mb-3 text-lg flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div> Notas de Voz y Seguimientos</h4>
               <p className="text-[14px] text-zinc-400">Las secuencias de 3 toques mejoran drásticamente los números. Además, el audio (notas de voz &lt;60s) multiplica la respuesta por 3 al generar rapport real, ideal para reactivar prospectos fríos o de alto valor.</p>
            </div>
            <div className="bg-[#1A1A1E] border border-[#27272A]/80 rounded-[1.5rem] p-6 hover:border-[#D5B15B]/30 transition-colors">
               <h4 className="font-semibold text-[#D5B15B] mb-3 text-lg flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div> Sinergia de Contenido</h4>
               <p className="text-[14px] text-zinc-400">El contenido calienta prospectos. Publicar 3-5 veces por semana, comentar, y usar las interacciones como "pie" para escribirle a la gente reduce la fricción del primer contacto y facilita las reuniones.</p>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  );
};
"""

content = content.replace("const LinkedInIdeasPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {", component_str + "\n\nconst LinkedInIdeasPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {")

with open("src/App.tsx", "w") as f:
    f.write(content)

