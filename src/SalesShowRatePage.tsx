import { TableOfContents } from './components/TableOfContents';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Target, TrendingUp, AlertTriangle, Users, Zap, BarChart,
  CheckSquare, ShieldAlert, Clock, Activity, BookOpen, Columns, Maximize2,
  Phone, Mail, Calendar, Settings, Star, List, ArrowRight, MessageSquare
} from 'lucide-react';

const ArcadiaLogo = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15.41 3.53H19.78L12.35 18.06H7.98L15.41 3.53Z" />
    <path d="M6.02 12.37H10.39L8.21 16.65H3.84L6.02 12.37Z" />
  </svg>
);

export const SalesShowRatePage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {
  const [isVideoPinned, setIsVideoPinned] = useState(false);
  const [videoWidth, setVideoWidth] = useState(500);
  const [isResizing, setIsResizing] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const startResizing = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      if (videoContainerRef.current) {
        const rightEdge = videoContainerRef.current.getBoundingClientRect().right;
        const newWidth = rightEdge - e.clientX;
        const maxWidth = Math.min(800, window.innerWidth * 0.7);
        if (newWidth > 300 && newWidth < maxWidth) setVideoWidth(newWidth);
      }
    };
    const handleMouseUp = () => setIsResizing(false);
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = 'none';
      document.body.style.cursor = 'col-resize';
    } else {
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };
  }, [isResizing]);

  return (
    <div className={`mx-auto w-full pb-20 animate-in fade-in duration-300 ${isVideoPinned ? 'max-w-[95%]' : 'max-w-3xl'}`}>
      <TableOfContents sections={[
        {"id":"section-0","title":"Introducción y marco general"},
        {"id":"section-1","title":"Qué pasó en junio 2023"},
        {"id":"section-2","title":"Qué estás optimizando realmente"},
        {"id":"section-3","title":"Táctica 1: Booking window"},
        {"id":"section-4","title":"Táctica 2: Disponibilidad óptima"},
        {"id":"section-5","title":"Táctica 3: Application grading"},
        {"id":"section-6","title":"Táctica 4: Routing (mejores leads a mejores closers)"},
        {"id":"section-7","title":"Táctica 5: LNS (Lead Nurture Specialist)"},
        {"id":"section-8","title":"Emails de confirmación"},
        {"id":"section-9","title":"Datos financieros (enriquecimiento)"},
        {"id":"section-10","title":"Setter show rate"},
        {"id":"section-11","title":"Mensajería de marketing"},
        {"id":"section-12","title":"Cierre"}
      ]} />

      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
          <ArcadiaLogo />
          <span className="text-zinc-500">Boards</span>
          <span className="text-zinc-700">/</span>
          <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('sales_parent')}>Sales</span>
        </div>
      </div>

      <div className="flex items-start gap-5 mb-12">
        <div className="border border-[#D5B15B]/30 p-3.5 rounded-2xl text-[#D5B15B] bg-[#1A1A1E] mt-1 shadow-[0_0_20px_rgba(213,177,91,0.15)]">
          <Phone size={28} strokeWidth={1.5} />
        </div>
        <div>
          <p className="text-sm text-zinc-500 mb-2 font-medium">Sales</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">Cómo arreglar tu show rate: resumen completo</h1>
        </div>
      </div>

      <div className={`flex items-start gap-8 ${isVideoPinned ? 'flex-row' : 'flex-col'}`}>

        {/* Video */}
        <div
          ref={videoContainerRef}
          style={isVideoPinned ? { width: `${videoWidth}px` } : {}}
          className={`relative ${isVideoPinned ? 'order-2 shrink-0 sticky top-6' : 'order-1 w-full'} ${!isResizing ? 'transition-all duration-500' : ''}`}
        >
          {isVideoPinned && (
            <div
              onMouseDown={startResizing}
              className="absolute -left-4 top-0 bottom-0 w-8 cursor-col-resize z-20 group/resizer flex items-center justify-center"
            >
              <div className={`h-16 w-1 rounded-full transition-colors duration-200 ${isResizing ? 'bg-[#D5B15B]' : 'bg-white/10 group-hover/resizer:bg-white/30'}`} />
            </div>
          )}
          <div className="w-full aspect-video rounded-3xl overflow-hidden border border-[#27272A]/80 shadow-2xl mb-8 bg-[#121214] relative group">
            <button
              onClick={() => setIsVideoPinned(!isVideoPinned)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md border border-white/10 z-10 flex items-center gap-2 text-sm font-medium"
            >
              {isVideoPinned ? <Maximize2 size={16} /> : <Columns size={16} />}
              {isVideoPinned ? 'Desfijar' : 'Fijar lectura'}
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/87xSdKzf940"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Content */}
        <div className={`${isVideoPinned ? 'order-1 flex-1 min-w-0' : 'order-2 w-full'}`}>
          <div className="space-y-16">

            {/* Section 0 */}
            <section id="section-0">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">0. Introducción y marco general</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-6">
                <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                  <li>El show rate es probablemente lo que más ayudan a mejorar a sus clientes, porque más llamadas en vivo significa más revenue.</li>
                  <li>Han llevado a cientos de clientes de 40% a 60% y de 50% a 70%. Algunos están en los 80 altos, algo casi inaudito hoy.</li>
                  <li><strong className="text-white">No hay una bala de plata, sino muchas "balas doradas pequeñas"</strong>: entre 7 y 10 tácticas, de lo más simple a lo más avanzado.</li>
                  <li>Hay tres categorías de cosas para maximizarlo. La primera es <strong className="text-white">no hacer cosas estúpidas</strong>; es la única que desarrollan explícitamente.</li>
                </ul>

                <div className="border-t border-zinc-800 pt-6">
                  <h4 className="text-lg font-bold text-white mb-4">Regla #1: no hagas cosas estúpidas (dos ejemplos reales)</h4>
                  <div className="space-y-4">
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="text-white font-semibold mb-2">1. Cancelar citas por no responder</p>
                      <p className="text-zinc-300">Clientes con show rate "malo" tenían equipos que cancelaban la reunión si el lead no respondía el texto en una hora y la contaban como no-show. Reservaban 100 llamadas y aparecían 30. <strong className="text-[#D5B15B]">Solución: no canceles, dejá la cita en el calendario</strong> (a lo sumo marcala como "free"). Con eso el show rate sube enormemente, "como magia".</p>
                    </div>
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="text-white font-semibold mb-2">2. Incentivos mal diseñados</p>
                      <p className="text-zinc-300">Un cliente tenía show rate del 20% pero close rate del 80%, lo cual es sospechoso. Al revisar las grabaciones, el 70% de las llamadas era: "esto cuesta $10.000, tres meses de compromiso, ¿es un problema?... ok, hablamos luego" y cortaban. El sales manager había dicho que si se descalificaba al lead en menos de 5 minutos no contaba como llamada en vivo. <strong className="text-white">Resultado: los closers sacaban gente de la llamada lo más rápido posible para inflar el close rate.</strong></p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-6 rounded-xl">
                  <p className="text-[#D5B15B] font-semibold mb-2">Lección: corrupción de proxy metrics</p>
                  <p className="text-zinc-300">Un KPI es un proxy de lo que pasa en el frente. Cuando optimizás el proxy en lugar de la cosa real, lo corrompés. Para un closer es más fácil bajar el denominador (llamadas en vivo) que subir las ventas.</p>
                </div>
              </div>
            </section>

            {/* Section 1 */}
            <section id="section-1">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <AlertTriangle size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">1. Qué pasó en junio de 2023</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-4">
                <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                  <li>Con el boom cripto de 2021, estafadores creaban cuentas, bajaban listas de millones de emails de Google e invitaban a todos a un evento. La mayoría lo borraba, pero algunos asistían y los estafaban por cientos de miles o millones.</li>
                  <li>Google respondió con una actualización de Google Calendar (mayo-junio 2023). Si te invitan a un evento desde un email con el que nunca interactuaste, <strong className="text-white">no aparece en el calendario</strong> salvo que pases por un email con texto de alerta y hagas clic en "sí", y a veces ni así aparece.</li>
                  <li>En Closers.io vieron una <strong className="text-[#D5B15B]">caída inmediata de 12-15% del show rate</strong> de un día para otro.</li>
                  <li>Esto obligó a empezar a hacer <strong className="text-white">double booking</strong> incluso en B2B (en B2C ya lo hacían). Hasta 2023 era como un "mercado alcista" en el que todo era fácil. Desde mediados de 2023 y sobre todo en 2024 mucha gente empezó a sufrir.</li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <BarChart size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">2. Qué estás optimizando realmente</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-6">
                <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-6 rounded-xl">
                  <p className="text-[#D5B15B] font-semibold text-lg mb-1">No optimizás el show rate</p>
                  <p className="text-zinc-300">Optimizás <strong className="text-white">ofertas por closer por día</strong> (idealmente <strong className="text-white">3 o más</strong>). También se puede medir como "offers per slot".</p>
                </div>

                <div>
                  <p className="text-zinc-400 text-sm font-semibold uppercase tracking-wider mb-4">Una adquisición tiene tres partes y cada una tiene su KPI:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { label: 'Marketing', value: 'MQLs', icon: <Target size={20} /> },
                      { label: 'Ventas', value: 'Unidades o cash, no close rate', icon: <TrendingUp size={20} /> },
                      { label: 'Sales Ops', value: 'Offers per closer per day', icon: <BarChart size={20} /> },
                    ].map(item => (
                      <div key={item.label} className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                        <div className="text-[#D5B15B] mb-2">{item.icon}</div>
                        <p className="text-white font-semibold">{item.label}</p>
                        <p className="text-zinc-400 text-sm mt-1">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                  <li>El show rate también es un proxy gamificable. Si querés 95%, cancelá todo lo que no sea un fit perfecto y contá solo las llamadas que dejaste.</li>
                  <li>Pensar en offers per slot te obliga a mirar todo: cancel rate, reschedule rate, show rate por fuente de tráfico y offers por fuente. Hasta el <strong className="text-white">tipo de email</strong> con el que reservan puede afectar.</li>
                  <li>Es la métrica controlable más cercana al revenue, que es lo que realmente querés.</li>
                  <li>Sales ops es una disciplina distinta. Los que triunfan en este rubro suelen ser muy buenos marketers y vendedores, y esas habilidades no se trasladan automáticamente a la eficiencia operativa. Es un mindset nuevo.</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Calendar size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">3. Táctica 1: Booking window</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-6">
                <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-6 rounded-xl">
                  <p className="text-zinc-300"><strong className="text-white">Qué es:</strong> cuántos días hacia adelante puede reservar un prospecto.</p>
                  <p className="text-zinc-300 mt-3"><strong className="text-[#D5B15B]">Lo óptimo es máximo 2 días.</strong> Con datos de Sales Kick (300-400k llamadas/mes) más Closers.io, el show rate cae de forma exponencial al pasar a 3, 4 o 5 días.</p>
                  <p className="text-zinc-300 mt-3"><strong className="text-white">Excepción:</strong> si sos fundador y tomás vos las llamadas, quizás necesites abrir más días. Lo ideal es 4 o menos, y aun 4 duele.</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Tipos de disponibilidad en los calendarios</h4>
                  <div className="space-y-3">
                    {[
                      { title: 'Fija (ej. Calendly)', desc: 'Tenés que entrar a mano a cambiar la ventana todo el tiempo. Un viernes, "los próximos 2 días" son sábado y domingo, sin disponibilidad. Muchos lo dejan en 4 días para no tocarlo, y pierden show rate.' },
                      { title: 'Rolling days (ej. OneSub/GHL)', desc: 'Siempre muestra los próximos 2 días. El problema es que si hoy está lleno y mañana queda un solo slot, mostrás solo uno. Igual es mejor que lo fijo.' },
                      { title: 'Rolling slots (Sales Kick)', desc: 'Muestra siempre "los próximos 2 días de slots disponibles", aunque haya días llenos en medio. La mejor opción.' },
                    ].map(item => (
                      <div key={item.title} className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                        <p className="text-white font-semibold mb-1">{item.title}</p>
                        <p className="text-zinc-300 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-xl">
                  <p className="text-red-400 font-semibold mb-2">El "end of month death screen"</p>
                  <p className="text-zinc-300 text-sm">Muchos calendarios se diseñaron cuando predominaba el desktop. El día 30 el lead llega y dice "no hay slots este mes", o "hacé clic para ver el próximo mes", lo que agrega fricción. Estás pagando por ese tráfico y aterriza en un calendario donde no puede reservar. Vigilá especialmente el último día del mes.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Clock size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">4. Táctica 2: Disponibilidad óptima</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-6">
                <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-6 rounded-xl">
                  <p className="text-zinc-300">Cada closer debería tener <strong className="text-[#D5B15B]">6 a 9 slots abiertos por día, idealmente 8</strong> (7 si hay follow-ups). Más disponibilidad significa más opciones, y la gente elige un horario que realmente le sirve en lugar de "reservo cualquiera y veo si llego".</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Fines de semana y feriados</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { day: 'Sábados', detail: '5 slots por closer. Show rate puede bajar un par de puntos (60 → 58), pero vale la pena.', color: 'text-[#D5B15B]' },
                      { day: 'Domingos', detail: 'No valen la pena. Cole vio 60% vs. 35-40%. Algunos confunden el domingo con el lunes.', color: 'text-red-400' },
                      { day: 'Feriados', detail: 'Son malos porque la gente reserva un lunes y después se olvida de que es feriado.', color: 'text-red-400' },
                    ].map(item => (
                      <div key={item.day} className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                        <p className={`font-semibold mb-2 ${item.color}`}>{item.day}</p>
                        <p className="text-zinc-300 text-sm">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Zonas horarias</h4>
                  <div className="space-y-3">
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="text-zinc-300">Cole trackeaba a mano el close rate de cada slot y concluyó que <strong className="text-white">antes de las 8 a.m. EST es malo</strong>. <strong className="text-[#D5B15B]">El horario PST es el mejor a nivel mundial</strong>: primera llamada 8-9 a.m. PST hasta las 5 p.m.</p>
                    </div>
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="text-zinc-300">El horario post-5 p.m. PST tiene de los mejores show rates, pickup rates y close rates. Para equipos grandes: la mayoría en PST y el equipo de UK/Europa en EST+1. Con 3 y 3 se cubre un rango muy amplio.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Cómo gestionar follow-ups sin matar la disponibilidad</h4>
                  <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                    <p className="text-zinc-300">Tu primer objetivo debería ser agendar el follow-up <strong className="text-white">antes de tu primera llamada o después de la última del día</strong> (los "bookends"). Cole tomaba 2 follow-ups antes y 2 después, 4 por día sin afectar disponibilidad. Si no se puede, los apila (como Tetris) en un slot que ya está "quemado".</p>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-xl">
                  <p className="text-red-400 font-semibold mb-3">Cosas que NO funcionan</p>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-2 text-sm">
                    <li><strong className="text-white">Ofrecer slots cada 15 min</strong> (consejo de Hormozi) con llamadas de 45-60 min. Empeoró el show rate y se pierden 1 a 2 slots por día por huecos incómodos.</li>
                    <li><strong className="text-white">Acortar la duración de la llamada</strong> (45 → 30 → 15) para que parezca menos compromiso. Cada vez que se testeó, no hubo diferencia. El prospecto ni mira la duración.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <CheckSquare size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">5. Táctica 3: Application grading</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-6">

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Tipos de preguntas</h4>
                  <div className="space-y-3">
                    {[
                      { num: '1', title: 'Identity qualifier', desc: 'Primera pregunta, sí/no. Ejemplo: "¿Sos un dueño de negocio que quiere mejorar su show rate?". Sirve para que el primer paso del funnel repela a los que no querés. El pixel también aprende.' },
                      { num: '2', title: 'Multiple choice', desc: 'Graduada de 1 a 4. Permite calificar rápido pero la gente puede adivinar la respuesta "correcta".' },
                      { num: '3', title: 'Fill-in-the-blank (respuesta abierta)', desc: 'Son las mejores para calificar. Una palabra es malo. De corto a mediano-largo es bueno. El sweet spot es 50-70 caracteres.' },
                    ].map(item => (
                      <div key={item.num} className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800 flex gap-4">
                        <div className="w-8 h-8 rounded-lg bg-[#D5B15B]/20 border border-[#D5B15B]/30 flex items-center justify-center text-[#D5B15B] font-bold text-sm shrink-0">{item.num}</div>
                        <div>
                          <p className="text-white font-semibold">{item.title}</p>
                          <p className="text-zinc-300 text-sm mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Escala 1-4 de calificación</h4>
                  <div className="space-y-3">
                    {[
                      { score: '1', label: 'DQ instantáneo', desc: 'Spam o industrias que no podés servir. Idealmente no reservan, y si reservan, se cancelan.', color: 'text-red-400 border-red-500/30 bg-red-500/10' },
                      { score: '2', label: 'Dudoso', desc: 'Puede ser un fit o puede ser spam. Van a triage: el calendario de un setter, que califica y recién después los pasa al closer.', color: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10' },
                      { score: '3', label: 'Claramente podemos ayudarlo', desc: 'Aunque no sea el cliente ideal. Va directo a un closer.', color: 'text-blue-400 border-blue-500/30 bg-blue-500/10' },
                      { score: '4', label: 'Lead perfecto', desc: 'El cliente ideal. Califica para single booking, o para routing a tus mejores closers.', color: 'text-[#D5B15B] border-[#D5B15B]/30 bg-[#D5B15B]/10' },
                    ].map(item => (
                      <div key={item.score} className={`p-5 rounded-xl border flex gap-4 ${item.color}`}>
                        <div className="w-8 h-8 rounded-lg border flex items-center justify-center font-bold text-sm shrink-0 border-current bg-black/20">{item.score}</div>
                        <div>
                          <p className="font-semibold">{item.label}</p>
                          <p className="text-zinc-300 text-sm mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Errores comunes en aplicaciones</h4>
                  <div className="space-y-3">
                    {[
                      { num: '1', text: 'Aplicaciones demasiado largas. Usan unas 5 preguntas.' },
                      { num: '2', text: 'Preguntar por presupuesto con multiple choice. En un estudio de ~10.000 aplicaciones, 47% marcó la respuesta objetivamente equivocada.' },
                      { num: '3', text: 'Todo multiple choice: tiene los show rates más bajos. La gente puede deducir qué botón la descalifica.' },
                      { num: '4', text: 'Lógica en la app: no podés calificar respuestas cortas con lógica. Necesitás IA o un humano.' },
                      { num: '5', text: 'VAs baratos ($3-7/h) calificando: no entienden contexto. Un 3% de errores puede costar $20.000/mes en revenue.' },
                      { num: '6', text: 'Preguntas sin sentido (ej. "¿cuál es tu LinkedIn?"): sacan al lead del formulario y esperás que vuelva.' },
                      { num: '7', text: 'Que el sales manager, CMO o un sales rep decidan qué es "calificado". Debe ser un rol independiente de sales ops.' },
                    ].map(item => (
                      <div key={item.num} className="bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800 flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-xs shrink-0 mt-0.5">{item.num}</div>
                        <p className="text-zinc-300 text-sm">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Qué preguntar según BANT</h4>
                  <div className="space-y-3">
                    {[
                      { letter: 'B', name: 'Budget', b2b: 'Preguntá el revenue. Correlaciona fuertemente con la calificación financiera y no agrega presión de venta.', b2c: 'Preguntá la ocupación. O "¿cuánto necesitarías ganar para reemplazar tu ingreso actual?".' },
                      { letter: 'A', name: 'Authority', b2b: 'En vez de "¿sos el decisor?", preguntá "¿cuál es tu puesto?"', b2c: 'No preguntes nada. Agregar frames como "traé a tu esposa" asusta a la gente y baja el show rate.' },
                      { letter: 'N', name: 'Need', b2b: 'Preguntas abiertas ("describí tu negocio").', b2c: '"¿Qué está pasando en tu vida o carrera que te hace considerar X?"' },
                      { letter: 'T', name: 'Timing', b2b: 'No les gusta preguntarlo. El trabajo del closer es comprimir el timeline.', b2c: 'Ídem. Excepto si te sobran leads.' },
                    ].map(item => (
                      <div key={item.letter} className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-[#D5B15B]/20 border border-[#D5B15B]/30 flex items-center justify-center text-[#D5B15B] font-bold">{item.letter}</div>
                          <p className="text-white font-semibold">{item.name}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <p className="text-zinc-500 text-xs font-semibold uppercase mb-1">B2B</p>
                            <p className="text-zinc-300 text-sm">{item.b2b}</p>
                          </div>
                          <div>
                            <p className="text-zinc-500 text-xs font-semibold uppercase mb-1">B2C</p>
                            <p className="text-zinc-300 text-sm">{item.b2c}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Análisis avanzado de la aplicación</h4>
                  <div className="space-y-3">
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="text-zinc-300">Usar <strong className="text-white">notas ponderadas</strong> (2.4, 2.7, 3.3...), agruparlas en rangos y ver close rate, show rate y revenue por aplicación de cada rango. Con eso decidís single vs. double booking, routing e incluso ajustes de marketing.</p>
                    </div>
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="text-zinc-300">Auditorías de clientes: más de una vez la opción "A" (supuestamente la mejor) tenía el peor close y show rate, y la "C" (descartada) era la mejor. Al cambiarlo: <strong className="text-[#D5B15B]">+15% de show rate</strong>.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-6 rounded-xl">
                  <p className="text-[#D5B15B] font-semibold mb-2">La "bomba" de Cole: la hoja de ads</p>
                  <p className="text-zinc-300 text-sm">Importa las campañas de Facebook a una spreadsheet con CPA y métricas en ventanas de 1, 4, 7, 14, 30 días y lifetime: leads, calls, apps, MQLs y TQOs (MQLs + sets atribuidos por campaña = costo por oportunidad calificada total). Hay campañas con llamadas a $100 con el peor MQL de la cuenta, y otras a $500 por llamada donde casi todas son MQL. <strong className="text-white">TQO es el mejor proxy</strong> para decidir antes.</p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">6. Táctica 4: Mejores leads a mejores closers (routing)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                    <p className="text-zinc-400 text-xs font-semibold uppercase mb-2">Escuela A</p>
                    <p className="text-white font-semibold mb-1">Distribución pareja</p>
                    <p className="text-zinc-300 text-sm">Para ver quién rinde mejor sin sesgos ("comunismo/DSA").</p>
                  </div>
                  <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                    <p className="text-zinc-400 text-xs font-semibold uppercase mb-2">Escuela B</p>
                    <p className="text-white font-semibold mb-1">Los mejores reciben los mejores leads</p>
                    <p className="text-zinc-300 text-sm">Los que mejor convierten reciben los mejores leads ("capitalismo").</p>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-xl">
                  <p className="text-red-400 font-semibold mb-2">Problema de hacerlo mal</p>
                  <p className="text-zinc-300 text-sm">Mostrar solo el calendario de "John" para leads calificados. Si John está ocupado o de vacaciones, tu mejor lead no tiene disponibilidad y bajás el show rate.</p>
                </div>

                <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-6 rounded-xl">
                  <p className="text-[#D5B15B] font-semibold mb-2">Solución: blended availability con "routing preference"</p>
                  <p className="text-zinc-300 text-sm">Mostrás toda la disponibilidad del equipo. Si John está libre en ese slot, se queda la llamada (es el más calificado), si no, el segundo mejor, y después round robin. Mantiene la disponibilidad alta y asigna a los mejores cuando pueden.</p>
                </div>

                <div>
                  <p className="text-zinc-400 text-sm font-semibold uppercase tracking-wider mb-3">Dos matices de Cole:</p>
                  <div className="space-y-3">
                    <div className="bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
                      <p className="text-zinc-300 text-sm"><strong className="text-white">1.</strong> Algunos closers son mejores con leads de más revenue o negocios más complejos (algo más permanente y de estilo).</p>
                    </div>
                    <div className="bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
                      <p className="text-zinc-300 text-sm"><strong className="text-white">2.</strong> Para lo general: corré mejores leads a mejores closers 2-3 meses, hacé un <strong className="text-[#D5B15B]">mes de reset</strong> (cancha pareja) y revalidá los datos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-7">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">7. Táctica 5: LNS (Lead Nurture Specialist)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-6">
                <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-6 rounded-xl">
                  <p className="text-[#D5B15B] font-semibold mb-1">Qué es</p>
                  <p className="text-zinc-300">Una persona cuyo único trabajo es <strong className="text-white">confirmar las llamadas por SMS</strong> de quienes reservaron inbound (sin pasar por setter). Recomiendan hacerlo con IA/automatización.</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Por qué no deben hacerlo setters ni closers</h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-2 text-sm">
                    <li>Están ocupados en su tarea principal, así que confirman cuando les conviene, no en el momento óptimo.</li>
                    <li>Si el lead hace una pregunta, nadie le responde.</li>
                    <li>Se pierde el speed to lead. Cole batcheaba las confirmaciones a la mañana y a la noche.</li>
                    <li>No uses VAs: inglés roto, sin contexto, y un solo error al mes puede costar $10-15k.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Cómo debe ser</h4>
                  <div className="space-y-3">
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="text-white font-semibold mb-1">Personal, no genérico</p>
                      <p className="text-zinc-300 text-sm">Un texto automático de GHL con "reply STOP" se archiva mentalmente como spam.</p>
                    </div>
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="text-white font-semibold mb-1">Velocidad crítica</p>
                      <p className="text-zinc-300 text-sm">Si confirmás dentro de <strong className="text-[#D5B15B]">5 minutos</strong> de la reserva, <strong className="text-[#D5B15B]">70-80%</strong> confirman. Confirmar la noche anterior o 24h antes: confirman muchos menos.</p>
                    </div>
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="text-white font-semibold mb-1">Sin lenguaje "STOP"</p>
                      <p className="text-zinc-300 text-sm">Con el "STOP" suena automatizado. Consultá con tu abogado, pero para citas que el usuario mismo agendó es una zona gris regulatoria.</p>
                    </div>
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="text-white font-semibold mb-1">Varios mensajes cortos, como a un amigo</p>
                      <p className="text-zinc-300 text-sm">Ej. "Hola John" / "vi que reservaste" / "¿seguro que podés a esa hora?" / "¿te llegó el link de Zoom?"</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Cadencia de mensajes</h4>
                  <div className="space-y-2">
                    {[
                      'Al confirmar, se manda el video pre-llamada.',
                      'Si no confirma: recordatorio esa noche o mañana, y otro 2 horas antes. Cuando responde, se envía el mismo mensaje con el video.',
                      '15 minutos antes: mensaje con el link de Zoom en tono conversacional ("ah, y acá tenés el link"), dando valor en vez de "¿seguimos en pie?".',
                    ].map((step, i) => (
                      <div key={i} className="flex gap-3 items-start bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
                        <div className="w-6 h-6 rounded-full bg-[#D5B15B]/20 border border-[#D5B15B]/30 flex items-center justify-center text-[#D5B15B] font-bold text-xs shrink-0 mt-0.5">{i + 1}</div>
                        <p className="text-zinc-300 text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-xl">
                  <p className="text-red-400 font-semibold mb-3">Reglas importantes</p>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-2 text-sm">
                    <li><strong className="text-white">No mandes links hasta que respondan.</strong> Los carriers detectan spam por links a gente que no responde, y en iPhone ni podés tocar el link de un desconocido hasta que contestes.</li>
                    <li><strong className="text-white">No veas la confirmación como binaria.</strong> Mirá si la persona sigue interactuando con tus mensajes (un "gracias" al video ya aumenta mucho la chance de que muestre).</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Single vs. Double Booking</h4>
                  <div className="space-y-3">
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="text-zinc-300">Trackeás qué probabilidad de show tiene quien confirma y quien no. Si un dato predice <strong className="text-[#D5B15B]">más de ~65-67% de show</strong>, hacés <strong className="text-white">single booking</strong>. Todo lo demás se double-bookea.</p>
                    </div>
                    <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-5 rounded-xl">
                      <p className="text-[#D5B15B] font-semibold mb-1">Live transfers: +20% de revenue</p>
                      <p className="text-zinc-300 text-sm">Lo testearon en enero 2025. El primer contratado superó a todo el equipo. Ahora hay live transfers entre los top 2-3 del equipo. Ratio ~1 live transfer cada 4 closers. Su revenue subió 20%, un calendario extra sin más ad spend.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">iMessage vs SMS</h4>
                  <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                    <p className="text-zinc-300 text-sm">Estudio interno de Closers.io (mayo-junio 2025): el <strong className="text-[#D5B15B]">SMS tuvo ~19% más confirmación proporcional que iMessage</strong>. Aparecieron shadow bans semanales en iMessage: la confirmación pasaba de 70% a 5% sin aviso. La explicación es de infraestructura, no psicológica.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Mail size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">8. Emails de confirmación</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Emails "custom" (Cole)</h4>
                  <div className="space-y-3">
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="text-zinc-300">Unos <strong className="text-white">6 emails antes de la cita, basados en valor</strong>, no en "por favor aparecé". Al dar valor, se puede subir la frecuencia sin molestar (ej. 24 h, 6 h, 2 h, 1 h antes).</p>
                    </div>
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="text-zinc-300">El contenido debe vender la <strong className="text-white">tesis</strong>, la forma de pensar que lleva al producto, no el producto. Ejemplo: Russell Brunson vendiendo la idea de que "los funnels son la forma más efectiva de crecer", y de ahí sale ClickFunnels.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Emails "básicos" (logística)</h4>
                  <div className="space-y-3">
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="text-zinc-300">Primer email desde Cole presentando al closer (3 oraciones: "vi que reservaste, te presento a X, lleva años con nosotros"). Después, solo logística: hora de la cita, el video de tarea, recordatorios cortos.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-6 rounded-xl">
                  <p className="text-[#D5B15B] font-semibold mb-2">Marco conceptual</p>
                  <p className="text-zinc-300 text-sm">Para mostrarse hace falta (1) logística y (2) venderle por qué debe priorizarlo. Los custom hacen lo segundo, los básicos lo primero. La gente espera SMS y emails automáticos, así que hacelos igual. Los custom dan más frecuencia porque parecen venir de vos.</p>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="section-9">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <ShieldAlert size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">9. Datos financieros (enriquecimiento)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-4">
                <p className="text-zinc-300"><strong className="text-white">Solo sirve si lo usás</strong> (alimentar el pixel, rutear, calificar). Comprarlo para mirarlo no tiene sentido.</p>

                <div>
                  <p className="text-zinc-400 text-sm font-semibold uppercase tracking-wider mb-3">Cumplimiento legal (3 reglas)</p>
                  <div className="space-y-3">
                    {[
                      'No corras listas viejas de leads que se anotaron hace años. Es poco probable que te descubran, pero las consecuencias son enormes.',
                      'Necesitás un permissible business use: reservar una llamada de venta de alto ticket donde el crédito importa es aceptable. Un lead magnet o VSL indirecta generalmente no lo es.',
                      'No guardes los datos para siempre. 30-60-90 días es lo aceptable. En Sales Kick se borran automáticamente, o se convierten a rangos (750 → 700-800), que sí podés conservar.',
                    ].map((rule, i) => (
                      <div key={i} className="flex gap-3 items-start bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
                        <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-xs shrink-0 mt-0.5">{i + 1}</div>
                        <p className="text-zinc-300 text-sm">{rule}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section id="section-10">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Activity size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">10. Setter show rate</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800 text-center">
                    <p className="text-[#D5B15B] text-3xl font-bold">70%+</p>
                    <p className="text-zinc-400 text-sm mt-1">Benchmark B2C</p>
                  </div>
                  <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800 text-center">
                    <p className="text-[#D5B15B] text-3xl font-bold">80%+</p>
                    <p className="text-zinc-400 text-sm mt-1">Benchmark B2B</p>
                  </div>
                </div>

                <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-5 rounded-xl">
                  <p className="text-[#D5B15B] font-semibold mb-1">Oportunidad rápida</p>
                  <p className="text-zinc-300 text-sm">Si tus setters están por debajo, es la oportunidad más rápida: se puede arreglar en ~30 días con mejor entrenamiento y mejores contrataciones.</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Diagnóstico</h4>
                  <div className="space-y-3">
                    {[
                      { num: '1', title: 'Tono', desc: 'Si suenan a call center / boiler room, mal. Es la primera impresión de tu empresa.' },
                      { num: '2', title: 'Ejecución de la llamada', desc: 'Qué tan profundo diagnostican el problema real. Si en la transición al closer dan insight. En RCA: alargaron la llamada del setter de 10 a 30 minutos, con una parte educativa de 5-7 min que repite el video pre-llamada.' },
                      { num: '3', title: 'Tie-downs', desc: 'Posicionar la cita para que el prospecto sepa que va a aprender algo valioso. Usá "will you" en lugar de "can you", que genera más compromiso.' },
                      { num: '4', title: 'Talento', desc: 'Contratá un vendedor, no un "setter". Pagale $80-110k al año. Cole subió el sueldo del equipo de setters $2k/mes cada uno, y eso trajo +$250k/mes de revenue y permitió bajar $200k/mes de ad spend: +$450k/mes.' },
                      { num: '5', title: 'Gestión', desc: 'A partir de 2 setters y 2 closers, necesitás reunión diaria de setters y 5-7 call reviews por setter por semana. El manager de closers no debería manejar a los setters.' },
                    ].map(item => (
                      <div key={item.num} className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800 flex gap-4">
                        <div className="w-8 h-8 rounded-lg bg-[#D5B15B]/20 border border-[#D5B15B]/30 flex items-center justify-center text-[#D5B15B] font-bold text-sm shrink-0">{item.num}</div>
                        <div>
                          <p className="text-white font-semibold">{item.title}</p>
                          <p className="text-zinc-300 text-sm mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 11 */}
            <section id="section-11">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">11. Mensajería de marketing (último recurso)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-6">
                <p className="text-zinc-400 text-sm">Si hiciste todo lo anterior y no funciona, mirá el marketing.</p>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Marketing directo (liderás con la oferta)</h4>
                  <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                    <p className="text-zinc-300">La calidad de la oferta determina mucho del backend, incluido el show rate. Reforzá la CTA a la llamada. Una vez hecha la CTA, agregá una <strong className="text-white">válvula de presión</strong>: "hay garantía, así que no vamos a presionarte". Así la llamada no se ve como un "pitchfest".</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Marketing indirecto (liderás con curiosidad o valor)</h4>
                  <div className="space-y-3">
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="text-zinc-300"><strong className="text-white">1.</strong> Calificá quién debe y quién no debe reservar ("si sos X, reservá; no es para quienes son Y").</p>
                    </div>
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="text-zinc-300"><strong className="text-white">2.</strong> Hacé una CTA fuerte con una válvula: "si tiene sentido, te mostramos lo que hacemos, y si no, igual te llevás consejos de gente que logró X".</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Calidad del marketing</h4>
                  <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800 space-y-3">
                    <p className="text-zinc-300">Cuando alguien jura haber hecho todo, Cole mira sus ads, y 9 de 10 <strong className="text-white">parecen una estafa</strong>: el tipo con un Lamborghini y la ventanilla abajo.</p>
                    <p className="text-zinc-300">Lo que suele faltar: algo nuevo y distinto. Necesitás una <strong className="text-[#D5B15B]">tesis central</strong>, <strong className="text-[#D5B15B]">sub-creencias</strong> y un <strong className="text-[#D5B15B]">mecanismo único</strong> de verdad. Atacar una <strong className="text-white">falsa suposición del mercado</strong> es de las cosas más poderosas (ej. un ad que decía "cancel ClickFunnels").</p>
                    <p className="text-zinc-300">Ejemplo: una oferta de dropshipping con copy de 2019 tenía 25-30% de show rate. Al reposicionarla con IA (algo nuevo), Cole garantiza 60%+.</p>
                  </div>
                  <div className="mt-3 bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                    <p className="text-zinc-400 text-sm font-semibold uppercase mb-2">Referencias para estudiar</p>
                    <p className="text-zinc-300 text-sm">Todd Brown, John Benson, Alex Albuquerque, Kyle Milligan, Mark Ford, los libros de Russell Brunson.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 12 */}
            <section id="section-12">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Star size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">12. Cierre</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-4">
                <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                  <li><strong className="text-white">Sales Kick</strong> (saleskick.com) es el software que hace todo esto de forma automatizada (lo que antes hacían a mano con mucho personal). Aun así recomiendan entender toda la táctica, aunque uses el software.</li>
                  <li>Van a publicar un <strong className="text-white">PDF/checklist</strong> con el SOP completo (el link está en la descripción del video).</li>
                  <li>Durante el video hay publicidad de su calendario de Sales Kick (con claims de +30 a +100% de show rate), de un mastermind de 8 cifras en Nueva York y de otro de Cole. No son parte del contenido táctico.</li>
                </ul>

                <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-6 rounded-xl mt-4 text-center">
                  <p className="text-[#D5B15B] font-medium">No hay una bala de plata. Son muchas "balas doradas pequeñas", apiladas una sobre otra, las que llevan un show rate de 40% a 80%.</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
