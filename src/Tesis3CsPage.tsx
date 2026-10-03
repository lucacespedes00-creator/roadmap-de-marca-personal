import { TableOfContents } from './components/TableOfContents';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Columns, Maximize2, PanelTop, Target, CheckCircle2, PlayCircle, MousePointerClick, RefreshCw, Zap, TrendingUp, BarChart, FileText, Table, Calculator, Search, ShieldAlert, Award, AlertTriangle, Crosshair, DollarSign, Activity, Filter, Users, List, Palette, Sliders, MapPin, Eye, Heart, MessageSquare, Footprints, HelpCircle, Dumbbell, ArrowUpCircle, BookOpen, UserCircle, Map, ArrowRight, ArrowLeft, RotateCcw, Link2, CheckSquare } from 'lucide-react';

const ArcadiaLogo = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15.41 3.53H19.78L12.35 18.06H7.98L15.41 3.53Z" />
    <path d="M6.02 12.37H10.39L8.21 16.65H3.84L6.02 12.37Z" />
  </svg>
);

export const Tesis3CsPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {
  const [videoMode, setVideoMode] = useState<'default' | 'side' | 'top'>('default');
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
        if (newWidth > 300 && newWidth < maxWidth) {
          setVideoWidth(newWidth);
        }
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

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
    <div className={`mx-auto w-full pb-20 animate-in fade-in duration-300 ${videoMode === 'side' ? 'max-w-[95%]' : 'max-w-3xl'}`}>
      <TableOfContents sections={[
        {"id":"section-0","title":"¿Qué son las 3 C's?"},
        {"id":"section-1","title":"1. CLICKS — Hacer que la gente correcta haga clic"},
        {"id":"section-2","title":"2. CONVERSIONS — Páginas de destino que convierten"},
        {"id":"section-3","title":"3. CLOSE — Procesos de ventas conversacionales"},
        {"id":"section-4","title":"La Interrelación entre las 3 C's"},
        {"id":"section-5","title":"Meta-lección de la sección"},
        {"id":"section-6","title":"La Sección de Forecasting (La Google Sheet)"},
        {"id":"section-7","title":"El Modelo Base: Variables de Entrada"},
        {"id":"section-8","title":"El Embudo Completo en Números"},
        {"id":"section-9","title":"El Efecto Compuesto de las Mejoras Incrementales"},
        {"id":"section-10","title":"La Historia de Jacob Stella (El Ejemplo Más Importante)"},
        {"id":"section-11","title":"La Curva de Bell y el ROAS Decreciente"},
        {"id":"section-12","title":"El ROAS como Métrica de Vanidad"},
        {"id":"section-13","title":"Dónde Encontrás Cada Métrica en la Práctica"},
        {"id":"section-14","title":"Síntesis y Meta-Lección de la Sección"},
        {"id":"section-15","title":"Los 10 Principios de Advertising"},
        {"id":"section-16","title":"Principio 1: Advertising es Arte vs. Ciencia"},
        {"id":"section-17","title":"Principio 2: Dials, No Switches (Diales, No Interruptores)"},
        {"id":"section-18","title":"Principio 3: Meet Them Where They're At (Conocé Dónde Están)"},
        {"id":"section-19","title":"Principio 4: Set Expectations (Establecé Expectativas)"},
        {"id":"section-20","title":"Principio 5: Winning Hearts and Minds"},
        {"id":"section-21","title":"Principio 6: Constructing Your Argument"},
        {"id":"section-22","title":"Principio 7: Only Selling the Next Step"},
        {"id":"section-23","title":"Principio 8: Curious vs. Committed"},
        {"id":"section-24","title":"Principio 9: Physical and Psychological Resistance"},
        {"id":"section-25","title":"Principio 10: Chasing Problems Upstream"},
        {"id":"section-26","title":"Meta-Lección de los 10 Principios"},
        {"id":"section-27","title":"Contexto y mentalidad previa"},
        {"id":"section-28","title":"Estructura del ejercicio (el dibujo)"},
        {"id":"section-29","title":"Motivadores \"hacia\" (lo que quiere lograr)"},
        {"id":"section-30","title":"Motivadores \"de qué huye\" (away from)"},
        {"id":"section-31","title":"Intentos previos (top arrow)"},
        {"id":"section-32","title":"Otra objeción que surge: la delegación"},
        {"id":"section-33","title":"Técnica adicional mencionada"},
        {"id":"section-34","title":"Cierre de la sección"},
        {"id":"section-35","title":"Introducción y objetivo"},
        {"id":"section-36","title":"Columna 1: La Cosa (Thing)"},
        {"id":"section-37","title":"Columna 2: El Resultado (Result)"},
        {"id":"section-38","title":"Columna 3: El Sentimiento (Feeling)"},
        {"id":"section-39","title":"Construcción del titular (headline)"},
        {"id":"section-40","title":"El sub-headline"},
        {"id":"section-41","title":"Cierre de la sección"}
      ]} />
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
          <ArcadiaLogo />
          <span className="text-zinc-500">Boards</span>
          <span className="text-zinc-700">/</span>
          <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('ads_parent')}>Ads</span>
        </div>
      </div>
      
      <div className="flex items-start gap-5 mb-16">
        <div className="border border-[#D5B15B]/30 p-3.5 rounded-2xl text-[#D5B15B] bg-[#1A1A1E] mt-1 shadow-[0_0_20px_rgba(213,177,91,0.15)]">
          <Target size={28} strokeWidth={1.5} />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">Las 3 C's</h2>
        </div>
      </div>

      <div className={`flex items-start gap-8 ${videoMode === 'side' ? 'flex-row' : 'flex-col'}`}>
        {/* Video Container */}
        <div 
          ref={videoContainerRef}
          style={videoMode === 'side' ? { width: `${videoWidth}px` } : {}}
          className={`${videoMode === 'side' ? 'order-2 shrink-0 sticky top-6' : 'order-1 w-full'} ${videoMode === 'top' ? 'sticky top-6 z-30' : ''} ${!isResizing ? 'transition-all duration-500' : ''}`}
        >
          {videoMode === 'side' && (
            <div 
              onMouseDown={startResizing}
              className="absolute -left-4 top-0 bottom-0 w-8 cursor-col-resize z-20 group/resizer flex items-center justify-center"
              title="Arrastrar para redimensionar"
            >
              <div className={`h-16 w-1 rounded-full transition-colors duration-200 ${isResizing ? 'bg-[#D5B15B]' : 'bg-white/10 group-hover/resizer:bg-white/30'}`} />
            </div>
          )}
          <div className="w-full aspect-video rounded-3xl overflow-hidden border border-[#27272A]/80 shadow-2xl mb-8 bg-[#121214] relative group">
            <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
              {videoMode !== 'default' && (
                <button onClick={() => setVideoMode('default')} className="bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-xl backdrop-blur-md border border-white/10 flex items-center gap-2 text-sm font-medium">
                  <Maximize2 size={16} /> Desfijar
                </button>
              )}
              {videoMode !== 'side' && (
                <button onClick={() => setVideoMode('side')} className="bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-xl backdrop-blur-md border border-white/10 flex items-center gap-2 text-sm font-medium">
                  <Columns size={16} /> Fijar lateral
                </button>
              )}
              {videoMode !== 'top' && (
                <button onClick={() => setVideoMode('top')} className="bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-xl backdrop-blur-md border border-white/10 flex items-center gap-2 text-sm font-medium">
                  <PanelTop size={16} /> Fijar arriba
                </button>
              )}
            </div>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/BiRlATLFEww" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Text Content Area */}
        <div className={`flex-1 min-w-0 w-full ${videoMode === 'side' ? 'order-1' : 'order-2'}`}>
          <div className="space-y-16">

            <section id="section-0" className="border border-[#27272A]/80 bg-[#121214] rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                 ¿Qué son las 3 C's?
              </h3>
              <p className="text-[16px] text-zinc-300 leading-relaxed">
                Brandon introduce las 3 C's como el esqueleto de todo sistema de generación de leads con publicidad paga. Son los tres pilares que conectan la atención de un potencial cliente con dinero en el banco:
              </p>
            </section>

            <section id="section-1">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <MousePointerClick size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">1. CLICKS — Hacer que la gente correcta haga clic</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                
                <p className="text-[16px] text-zinc-300">
                  La primera C no es simplemente conseguir clics. Es conseguir <strong>los clics correctos</strong>, de las personas correctas. Este matiz es fundamental.
                </p>

                <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-6">
                  <h4 className="font-bold text-white mb-3">La plataforma importa:</h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                    <li><strong>Meta (Facebook/Instagram)</strong> es un modelo de pago por impresión (CPM). Pagás cada vez que alguien <strong>ve</strong> tu anuncio, independientemente de si hace clic.</li>
                    <li><strong>Google</strong> es pago por clic. Solo pagás cuando alguien efectivamente hace clic.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-white">¿Cuándo usar cada una?</h4>
                  <p className="text-zinc-300">Brandon lo simplifica con una pregunta clave: <em>¿La gente ya está buscando tu solución activamente, o necesitás crear esa demanda?</em></p>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                    <li>Si hay demanda existente (ej: plomero), usá <strong>Google</strong>. Nadie está esperando ver un anuncio de plomeros en Instagram.</li>
                    <li>Si necesitás crear demanda (ej: un workshop para generar leads propios), usá <strong>Facebook/Meta</strong>. Nadie googlea "workshop de dos días para aprender a hacer mis propios anuncios".</li>
                  </ul>
                  <p className="text-zinc-300 mt-2">Para identificarlo: buscá en Google si tus competidores aparecen con anuncios pagos. Si aparecen, es una señal de que hay demanda buscada activamente → Google. Si no hay ads pagos de competidores, probablemente Meta sea el lugar correcto para crear esa demanda.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-white">Campaña de protección de marca:</h4>
                  <p className="text-zinc-300">A medida que gastás más en Facebook, la gente empieza a buscar tu nombre en Google. Por eso, eventualmente conviene agregar una campaña de Google Ads solo para capturar ese tráfico ya calentado que te busca por nombre.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-white">La métrica clave: Link CTR (Click Through Rate del link)</h4>
                  <p className="text-zinc-300">Es el porcentaje de personas que vieron el anuncio y hicieron clic al link. Ejemplo: 100 personas ven el anuncio → 1 hace clic = 1% Link CTR.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-white">Calidad vs. Cantidad de clics:</h4>
                  <p className="text-zinc-300">Si los clics son baratos pero de personas equivocadas, el sistema se rompe. Brandon ilustra esto con un caso real: un cliente que vendía tecnología de red WiFi industrial cara (25.000 USD/día para operar) tenía una tasa de clics altísima porque la gente lo confundía con un hotspot de iPhone. Resultado: muchos clics, cero conversiones. La solución fue usar lenguaje técnico deliberadamente en los anuncios para que solo los nerds de IT hicieran clic. El CTR bajó, pero la tasa de conversión se disparó, y el costo por lead neto bajó.</p>
                </div>

                <div className="space-y-2 border-l-4 border-[#D5B15B] pl-5">
                  <h4 className="font-bold text-white">El concepto de "Dials, not Switches":</h4>
                  <p className="text-zinc-300">Este concepto aparece por primera vez aquí. No se trata de encender/apagar cosas. Se trata de diales que se ajustan. Podés tener muchos clics baratos (curiosos) o menos clics pero más calificados (comprometidos). No es blanco o negro, sino un equilibrio constante.</p>
                </div>
              </div>
            </section>

            <section id="section-2">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <RefreshCw size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">2. CONVERSIONS — Páginas de destino que convierten</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-8">
                
                <p className="text-[16px] text-zinc-300">
                  La segunda C se refiere a lo que sucede una vez que alguien llega a tu landing page o embudo. Se subdivide en varias métricas según el tipo de embudo:
                </p>

                <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-6">
                  <h4 className="font-bold text-white mb-4">El embudo de dos pasos (Two-Step Funnel):</h4>
                  <p className="text-zinc-300 mb-3">Este es el modelo que Brandon recomienda para negocios de servicios que necesitan hablar con sus clientes:</p>
                  <ol className="list-decimal pl-5 text-zinc-300 space-y-2">
                    <li><strong>Página de aplicación</strong> → El visitante completa un formulario/encuesta</li>
                    <li><strong>Página de reserva</strong> → El lead calificado reserva una llamada</li>
                    <li><strong>Tasa de show</strong> → Qué porcentaje de quienes reservaron efectivamente aparecen</li>
                    <li><strong>Tasa de cierre</strong> → De los que aparecen, cuántos compran</li>
                  </ol>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-[#D5B15B]">El ejemplo matemático con la Google Sheet:</h4>
                  <p className="text-zinc-300">Brandon construye un ejemplo con números simples para mostrar el poder de cada métrica:</p>
                  
                  <ul className="list-disc pl-5 text-zinc-300 space-y-1">
                    <li>Gasto diario: $50 → Mensual: $1,500</li>
                    <li>Precio de venta: $3,000</li>
                    <li>CPM (costo por 1,000 impresiones): variable según industria. B2C ronda $30-40, B2B ~$70, finanzas puede ser $100-200+</li>
                    <li>Con ese gasto → aprox. 50,000 impresiones</li>
                  </ul>

                  <div className="bg-[#1A1A1E]/50 p-4 rounded-lg space-y-2 font-mono text-[14px]">
                    <p className="text-zinc-300">Con un <strong className="text-white">1% de Link CTR</strong> → 500 clics → <strong className="text-[#D5B15B]">CPC = $3</strong> ($1,500 / 500)</p>
                    <p className="text-zinc-300">Con una <strong className="text-white">tasa de opt-in del 5%</strong> → 25 leads → <strong className="text-[#D5B15B]">Costo por lead = $60</strong></p>
                    <p className="text-zinc-300">Con un <strong className="text-white">30% de reservas</strong> → 8 bookings → <strong className="text-[#D5B15B]">Costo por booking = $200</strong></p>
                    <p className="text-zinc-300">Con un <strong className="text-white">60% de show rate</strong> → 5 conversaciones → <strong className="text-[#D5B15B]">Costo por conversación = $333</strong></p>
                    <p className="text-zinc-300">Con un <strong className="text-white">30% de close rate</strong> → ~1.5 ventas ≈ 1 venta real → Gastaste $1,500, ganaste $3,000 = <strong className="text-[#D5B15B]">2x ROAS</strong></p>
                  </div>

                  <p className="text-zinc-300">"No es tan emocionante", dice Brandon. Pero mirá lo que pasa cuando mejorás cada métrica incremetalmente:</p>
                  
                  <div className="overflow-x-auto mt-4 border border-zinc-800 rounded-xl">
                    <table className="w-full text-left text-zinc-300 text-[15px]">
                      <thead className="bg-[#1A1A1E] text-white">
                        <tr>
                          <th className="p-4 border-b border-zinc-800 font-bold">Mejora</th>
                          <th className="p-4 border-b border-zinc-800 font-bold">Resultado</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-zinc-800/50">
                          <td className="p-4 font-mono text-zinc-400">CTR: 1% → 2%</td>
                          <td className="p-4">Todo se duplica → <strong className="text-white">5x ROAS</strong></td>
                        </tr>
                        <tr className="border-b border-zinc-800/50">
                          <td className="p-4 font-mono text-zinc-400">Opt-in: 5% → 10%</td>
                          <td className="p-4">Leads a $15 en lugar de $30 → <strong className="text-white">10x ROAS</strong></td>
                        </tr>
                        <tr className="border-b border-zinc-800/50">
                          <td className="p-4 font-mono text-zinc-400">Reservas: 30% → 50%</td>
                          <td className="p-4">→ <strong className="text-white">15x ROAS</strong></td>
                        </tr>
                        <tr className="border-b border-zinc-800/50">
                          <td className="p-4 font-mono text-zinc-400">Show rate: 60% → 70%</td>
                          <td className="p-4">→ <strong className="text-white">~20x ROAS</strong></td>
                        </tr>
                        <tr>
                          <td className="p-4 font-mono text-zinc-400">Close rate: 30% → 40%</td>
                          <td className="p-4">→ <strong className="text-[#D5B15B]">casi 30x ROAS</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-zinc-300 mt-4">Y todo esto <strong>sin gastar ni un dólar más en publicidad</strong>. Solo siendo más eficiente con las impresiones que ya tenés.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-white">La lección del Jacob Stella:</h4>
                  <p className="text-zinc-300">Brandon cuenta el caso de un miembro que tenía un retorno de 21x con $50/día. Vino al advisory call preguntando qué nuevo embudo crear. Brandon le dijo: "¿Qué carajo? Simplemente gasta más dinero." La semana siguiente volvió con el mismo 21x pero ahora a $100/día. Y siguió volviendo haciendo la misma pregunta. El mensaje es claro: cuando algo funciona, la palanca más obvia y poderosa es simplemente <strong>aumentar el gasto en publicidad</strong>, no agregar complejidad.</p>
                </div>

                <div className="space-y-2 border-l-4 border-red-500 pl-5 bg-red-500/5 py-3 pr-3 rounded-r-lg">
                  <h4 className="font-bold text-red-400">El ROAS como métrica de vanidad:</h4>
                  <p className="text-zinc-300">Este es uno de los puntos más importantes de esta sección. Brandon argumenta que el Retorno sobre el Gasto en Publicidad puede ser engañoso. Un 2.5x ROAS gastando $20,000 al día genera más dinero real que un 21x ROAS gastando $50 al día. La métrica que realmente importa es la <strong>ganancia neta</strong> — la última línea del Estado de Resultados (P&L). Es la única manera honesta de medir si la publicidad funciona.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-white">Show rate y su naturaleza curiosa:</h4>
                  <p className="text-zinc-300">Brandon menciona que incluso los ciclos lunares afectan la tasa de aparición a las llamadas (¡en serio lo mide con su equipo!). Esto ilustra que las métricas fluctúan salvajemente día a día, semana a semana. Por eso siempre hay que mirar promedios de los últimos 30 días.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-white">Equilibrio curioso vs. comprometido:</h4>
                  <p className="text-zinc-300">La primera aparición de este concepto crucial ocurre aquí, en el contexto de las conversiones. Brandon da un ejemplo: un miembro agregó la pregunta "¿Cuánto estás dispuesto a gastar?" en su formulario y sus leads se desplomaron porque esa pregunta estaba demasiado alta en la escala de compromiso. La solución: hacé preguntas de segundo o tercer orden que revelen la misma información indirectamente. Ejemplo: "¿Cuántos empleados tenés?" implica un nivel de ingresos sin preguntarlo directamente.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-white">La pregunta al principio, los datos de contacto al final:</h4>
                  <p className="text-zinc-300">Un error frecuente es pedir nombre, email y teléfono como primera acción. Eso tiene altísima resistencia. La estrategia correcta: empezá con preguntas fáciles de opción múltiple que vayan generando micro-compromisos, y dejá los datos de contacto para el final. Para cuando llegan al campo "teléfono", ya se pusieron pot-committed.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-white">Solo vendés el siguiente paso:</h4>
                  <p className="text-zinc-300">El anuncio no intenta vender el producto. Solo intenta conseguir el clic. La página de aplicación no intenta vender el programa. Solo intenta que completen el formulario. La página de reserva solo intenta que agenden la llamada. La secuencia de nurturing solo intenta que aparezcan. Recién en la llamada de ventas es donde intentás cerrar. Este principio de "solo el próximo paso" reduce la resistencia psicológica en cada etapa.</p>
                </div>

                <div className="space-y-2 bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                  <h4 className="font-bold text-white">Alineación entre marketing y ventas:</h4>
                  <p className="text-zinc-300">Brandon señala un problema estructural en muchas empresas: marketing quiere bajar el costo por lead, ventas dice que los leads son malos. Los KPIs se oponen. Su solución: no tener departamento de marketing y departamento de ventas separados, sino un único <strong>departamento de crecimiento</strong>. La persona que más sabe del cliente es quien habla con él más frecuentemente — el equipo de ventas. Por eso Brandon está presente en todas las reuniones de ventas: si aparece una objeción recurrente, la incorpora en los anuncios, las landing pages o las secuencias de nurturing.</p>
                </div>
              </div>
            </section>

            <section id="section-3">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">3. CLOSE — Procesos de ventas conversacionales</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                
                <p className="text-[16px] text-zinc-300">
                  La tercera C es el proceso mediante el cual convertís una conversación en dinero. Para negocios de servicios (a diferencia del e-commerce), siempre hay que hablar con la gente. No se puede vender un servicio de alto valor sin una conversación.
                </p>

                <div className="space-y-2">
                  <h4 className="font-bold text-white">¿Quién maneja el close?</h4>
                  <p className="text-zinc-300">Puede ser vos mismo, tu equipo de ventas, o incluso el personal de recepción, dependiendo del negocio y el precio de venta. Lo fundamental es que haya un proceso definido.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-white">El impacto del marketing en las ventas:</h4>
                  <p className="text-zinc-300 mb-3">Brandon enfatiza que el marketing de calidad hace que las conversaciones de ventas sean infinitamente más fáciles. Si en el anuncio, la landing page y las secuencias de nurturing se establecen correctamente las expectativas, el prospecto llega a la llamada ya informado, ya convencido en gran medida, y con pocas objeciones pendientes. El marketing no es solo para generar leads; también es soporte para el proceso de ventas.</p>
                  <p className="text-zinc-300">Da un ejemplo concreto: si en la landing page ponés "aplicá para una consulta gratuita", los que lleguen esperarán información gratis y no comprarán. Pero si lo llamás "llamada de aplicación", la expectativa es transaccional desde el inicio. Esto se refleja directamente en el close rate.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-white">Expectativas en el proceso:</h4>
                  <p className="text-zinc-300">Si el prospecto esperaba una consulta gratuita (porque así lo presentó el anuncio) y en la llamada le intentan vender, hay una desconexión total entre expectativas y realidad. Ese es un problema que se resuelve upstream, en el mensaje del anuncio o en el copy de la landing page, no en la propia llamada de ventas.</p>
                </div>

              </div>
            </section>

            <section id="section-4">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">La Interrelación entre las 3 C's</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
                <p className="text-zinc-300 mb-4">
                  Brandon insiste en que las tres C's no son independientes. Están íntimamente relacionadas y cualquier cambio en una afecta a las otras:
                </p>
                <ul className="list-disc pl-5 text-zinc-300 space-y-3 mb-6">
                  <li>Si conseguís muchos clics de personas muy curiosas (baja calificación), tu landing page puede tener un CTR alto pero la tasa de conversión se desploma porque no cumplen expectativas.</li>
                  <li>Si tu landing page promete una consulta gratis, conseguís muchos leads pero el close rate es pésimo.</li>
                  <li>Si filtrás demasiado en el anuncio (lenguaje muy comprometido), podrás tener pocos leads pero muy calificados, y el close rate sube.</li>
                </ul>
                <div className="bg-[#1A1A1E] border-l-4 border-l-[#D5B15B] p-5 rounded-r-xl">
                  <p className="text-[15px] text-zinc-300">
                    El objetivo es encontrar el <strong>equilibrio óptimo</strong> entre las tres, no maximizar ninguna en aislamiento. Todo confluye en la única métrica que realmente importa: <strong>la ganancia neta</strong>.
                  </p>
                </div>
              </div>
            </section>

            <section id="section-5">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Meta-lección de la sección</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
                <p className="text-zinc-300 leading-relaxed">
                  Brandon cierra la explicación de las 3 C's con una reflexión que impregna todo el video: entender este sistema simple — clics + conversiones + cierre — y medir cada paso con números reales, transforma la publicidad de "adivinar" a un <strong>sistema repetible de generación de leads on demand</strong>. El que más sabe del cliente no es la agencia, no es un freelancer. Sos vos. Y por eso, vos sos la persona más calificada para hacer este trabajo.
                </p>
              </div>
            </section>

            <section id="section-6">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Table size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">La Sección de Forecasting (La Google Sheet)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <h4 className="font-bold text-white text-xl">¿Para qué sirve este ejercicio?</h4>
                <p className="text-zinc-300">
                  Luego de explicar las 3 C's de manera conceptual, Brandon hace una transición hacia lo concreto: abre su laptop y muestra la Google Sheet que él mismo usa, y que también usan sus 1,500 miembros activos del programa With You. El objetivo es doble:
                </p>
                <ol className="list-decimal pl-5 text-zinc-300 space-y-2">
                  <li><strong>Calcular cómo el gasto publicitario se convierte en ingresos reales</strong></li>
                  <li><strong>Visualizar el impacto que tienen los cambios incrementales en cada métrica sobre el resultado final</strong></li>
                </ol>
                <p className="text-zinc-300">
                  La premisa central es que la publicidad no es magia ni suerte — es matemática. Y cuando entendés la matemática, podés diagnosticar problemas, identificar palancas y tomar decisiones racionales en lugar de emocionales.
                </p>
              </div>
            </section>

            <section id="section-7">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Calculator size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">El Modelo Base: Variables de Entrada</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-8">
                
                <div className="space-y-4">
                  <h4 className="font-bold text-white text-xl text-[#D5B15B]">Presupuesto Diario</h4>
                  <p className="text-zinc-300">Brandon recomienda que los principiantes comiencen con <strong>$30 a $50 por día</strong>. Esta franja no es arbitraria:</p>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                    <li>Es <strong>lo suficientemente rápida</strong> como para conseguir leads el mismo día o al día siguiente en muchos casos, porque Meta simplemente fuerza el anuncio en los feeds de las personas.</li>
                    <li>Es <strong>lo suficientemente lenta</strong> como para que si pasan unos días o una semana sin resultados espectaculares, no hayas quemado cientos o miles de dólares de manera incómoda.</li>
                  </ul>
                  <p className="text-zinc-300">
                    Hay un segundo punto importante sobre el presupuesto inicial: cuando sos un nuevo anunciante en Meta, Mark Zuckerberg quiere impresionarte. La plataforma te pone en su "cubo de buenas intenciones" y trata de mostrarte resultados rápidos para que sigas gastando. Ese efecto de "luna de miel" con los anuncios nuevos es real, y trabajar con un presupuesto inicial de $30-$50/día te permite aprovecharlo sin arriesgar demasiado.
                  </p>
                  <p className="text-zinc-300">
                    Para quien quiere aprender más rápido y tiene el flujo de caja disponible, Brandon es directo: gastá más. Si alguien gasta $100/día y otro $1,000/día, el segundo aprende en 24 horas lo que el primero va a tardar 10 días en aprender. Con la caveat de que un solo día de la semana todavía es una muestra pequeña de datos, la regla general se sostiene.
                  </p>
                  <div className="bg-[#1A1A1E] p-4 rounded-lg font-mono text-[14px]">
                    <p className="text-zinc-300"><strong>Ejemplo en la Sheet:</strong> $50 diarios → $1,500 al mes</p>
                  </div>
                </div>

                <hr className="border-zinc-800" />

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-xl text-[#D5B15B]">CPM (Costo por Mil Impresiones)</h4>
                  <p className="text-zinc-300">
                    Este es el primer concepto técnico que introduce. <strong>CPM significa "Cost Per Mille"</strong> (costo por mil), y representa cuántos dólares necesitás gastar para que tu anuncio sea visto 1,000 veces.
                  </p>
                  <p className="text-zinc-300">Una impresión = tu anuncio apareció en la pantalla de alguien (no necesariamente que lo vieron conscientemente, solo que apareció).</p>
                  
                  <h5 className="font-bold text-white mt-4">¿De qué depende el CPM?</h5>
                  <p className="text-zinc-300">Brandon explica que el CPM fluctúa según múltiples variables:</p>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                    <li><strong>La audiencia que estás apuntando:</strong> Las audiencias más competidas (ej. dueños de negocios) son más caras porque muchos anunciantes las quieren.</li>
                    <li><strong>La ley de oferta y demanda publicitaria:</strong> Cuántos anunciantes compiten por los ojos de ese grupo de personas en ese momento.</li>
                    <li><strong>El tipo de contenido:</strong> Las imágenes suelen tener un CPM ligeramente menor que los videos.</li>
                    <li><strong>La industria:</strong> El espacio financiero, por ejemplo, tiene CPMs más altos históricamente.</li>
                  </ul>

                  <h5 className="font-bold text-white mt-4">Rangos orientativos que da Brandon:</h5>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                    <li>B2C (Negocio a Consumidor): ~$30 a $40</li>
                    <li>B2B (Negocio a Negocio): ~$70</li>
                    <li>Finanzas / Inversiones: Puede llegar a $100-$200 o más (menciona un cliente de propiedades de inversión donde los videos costaban $200 CPM y bajaron a $90-100 al cambiar a imágenes)</li>
                  </ul>

                  <div className="border-l-4 border-[#D5B15B] pl-5 mt-4">
                    <p className="text-zinc-300">
                      <strong>Punto clave:</strong> El CPM generalmente <strong>no es el principal problema</strong> a resolver. Vale la pena monitorearlo, pero no es la palanca más poderosa del sistema. Hay formas de influir en él (cambiar el mensaje, cambiar la audiencia, cambiar el formato), pero en la mayoría de los casos otros factores tienen más impacto en el resultado final.
                    </p>
                  </div>
                  <div className="bg-[#1A1A1E] p-4 rounded-lg font-mono text-[14px]">
                    <p className="text-zinc-300"><strong>Con $1,500 de gasto mensual y un CPM de $70 (B2B):</strong> Obtenés aproximadamente 50,000 impresiones en un mes (en el ejemplo de la Sheet la cifra varía pero el concepto se mantiene).</p>
                  </div>
                </div>

                <hr className="border-zinc-800" />

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-xl text-[#D5B15B]">Link CTR (Tasa de Clics en el Link)</h4>
                  <p className="text-zinc-300">Esta es la primera métrica de porcentaje verdaderamente importante en el modelo.</p>
                  <p className="text-zinc-300"><strong>Definición:</strong> Del total de personas que vieron el anuncio, ¿qué porcentaje hizo clic en el link y fue al primer paso del embudo?</p>
                  <p className="text-zinc-300"><strong>Ejemplo:</strong> Si 50,000 personas vieron el anuncio y 500 hicieron clic → Link CTR = 1%</p>
                  
                  <p className="text-zinc-300">A partir del Link CTR y el CPM se <strong>calcula el Costo por Clic (CPC)</strong>:<br/>CPC = Gasto total / Cantidad de clics</p>
                  
                  <div className="bg-[#1A1A1E] p-4 rounded-lg font-mono text-[14px] space-y-2">
                    <p className="text-zinc-300">En el ejemplo de la Sheet:</p>
                    <ul className="list-disc pl-5 text-zinc-300 space-y-1">
                      <li>Gasto mensual: $1,500</li>
                      <li>500 clics con 1% de CTR sobre 50,000 impresiones</li>
                      <li>CPC = $1,500 / 500 = <strong className="text-white">$3 por clic</strong></li>
                    </ul>
                  </div>

                  <h5 className="font-bold text-white mt-4">¿Por qué el Link CTR importa tanto?</h5>
                  <p className="text-zinc-300">Porque es la primera palanca que podés mover sin gastar más dinero. Si pasás de 1% a 2% de Link CTR, todo lo que sigue se duplica — conseguís el doble de personas llegando a tu página sin aumentar el presupuesto.</p>
                  
                  <p className="text-zinc-300"><strong>Rango objetivo según Brandon:</strong> Entre 1% y 2% es el punto dulce cuando optimizás para leads o reservas (schedules). Si estás muy por encima del 2% (digamos 3% o más), Brandon empieza a sospechar que los clics son "curiosos" y no "comprometidos" — mucha gente haciendo clic porque algo llamó su atención pero que no tiene la intención real de contratar nada. Eso se traduce en CTR alto pero tasa de conversión miserable en la landing page.</p>
                </div>

              </div>
            </section>

            <section id="section-8">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Filter size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">El Embudo Completo en Números</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-8">
                
                <p className="text-[16px] text-zinc-300">
                  Con el CPM y el Link CTR establecidos, la Sheet construye el resto del embudo paso a paso:
                </p>

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-xl">Tasa de Opt-in (Conversión en la Página de Aplicación)</h4>
                  <p className="text-zinc-300"><strong>Definición:</strong> Del total de personas que llegaron a la landing page (primer paso del embudo), ¿qué porcentaje completó el formulario y se convirtió en lead?</p>
                  <p className="text-zinc-300"><strong>Rango objetivo:</strong> 5% a 10%</p>
                  
                  <div className="bg-[#1A1A1E] p-4 rounded-lg font-mono text-[14px] space-y-1">
                    <p className="text-zinc-300"><strong>Con el ejemplo de la Sheet:</strong></p>
                    <ul className="list-disc pl-5 text-zinc-300">
                      <li>500 visitas a la landing page</li>
                      <li>5% de opt-in rate = 25 leads</li>
                      <li><strong className="text-[#D5B15B]">Costo por lead = $60</strong> ($1,500 / 25)</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-zinc-600 pl-5 bg-white/5 py-3 pr-3 rounded-r-lg">
                    <p className="text-zinc-300"><strong>Caveat importante de Brandon:</strong> Su propia tasa de opt-in es del 3%, pero está gastando $24,000/día y llegando a audiencias cada vez más frías y lejanas de su perfil ideal. Cuando gastás montos pequeños ($50/día), deberías estar en el rango del 5-10% porque estás llegando primero a las audiencias más calientes — las que ya tenían el problema y solo estaban esperando que alguien apareciera.</p>
                  </div>
                </div>

                <hr className="border-zinc-800" />

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-xl">Tasa de Reserva (Booking Rate)</h4>
                  <p className="text-zinc-300"><strong>Definición:</strong> Del total de leads que completaron el formulario (y fueron calificados), ¿qué porcentaje avanzó a reservar una llamada en el calendario?</p>
                  <p className="text-zinc-300"><strong>Rango objetivo:</strong> 30% a 50%</p>
                  <p className="text-zinc-300">Brandon menciona que en su empresa están al 60%, y el récord de un miembro del programa es 85%, algo que admite no entender cómo lograron.</p>
                  
                  <div className="bg-[#1A1A1E] p-4 rounded-lg font-mono text-[14px] space-y-1">
                    <p className="text-zinc-300"><strong>Con el ejemplo de la Sheet:</strong></p>
                    <ul className="list-disc pl-5 text-zinc-300">
                      <li>25 leads calificados</li>
                      <li>30% de booking rate ≈ 8 reservas</li>
                      <li><strong className="text-[#D5B15B]">Costo por reserva = $200</strong> ($1,500 / 7.5, redondeado)</li>
                    </ul>
                  </div>

                  <h5 className="font-bold text-white mt-2">Palancas para mejorar este número:</h5>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                    <li>Ampliar la disponibilidad del calendario (menos buffers entre llamadas, más horarios disponibles)</li>
                    <li>El lenguaje en la página de booking que no "cierre el loop" prematuramente (no uses "gracias", "felicitaciones" o "listo" — el cerebro lo interpreta como que ya terminó y cierra la pestaña sin reservar)</li>
                    <li>Que el Call To Action del formulario lleve naturalmente a esperar una instancia de booking (no prometás un PDF o un recurso descargable si lo que sigue es un calendario)</li>
                  </ul>
                </div>

                <hr className="border-zinc-800" />

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-xl">Show Rate (Tasa de Aparición)</h4>
                  <p className="text-zinc-300"><strong>Definición:</strong> Del total de personas que reservaron una llamada, ¿qué porcentaje efectivamente apareció al encuentro?</p>
                  <p className="text-zinc-300"><strong>Rango objetivo:</strong> Alrededor del 75%</p>
                  
                  <div className="bg-[#1A1A1E] p-4 rounded-lg font-mono text-[14px] space-y-1">
                    <p className="text-zinc-300"><strong>Con el ejemplo de la Sheet:</strong></p>
                    <ul className="list-disc pl-5 text-zinc-300">
                      <li>8 reservas</li>
                      <li>60% de show rate ≈ 5 conversaciones reales</li>
                      <li><strong className="text-[#D5B15B]">Costo por conversación = $333</strong></li>
                    </ul>
                  </div>

                  <p className="text-zinc-300">Este es uno de los números que más fluctúa. Brandon menciona que incluso los ciclos lunares afectan la tasa de aparición (algo que él y su equipo midieron literalmente). También menciona que épocas como Navidad, feriados, fines de semana, el lunes después de un feriado — todo impacta.</p>

                  <h5 className="font-bold text-white mt-2">El show rate depende principalmente de:</h5>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                    <li>Las secuencias de nurturing (emails y SMS de recordatorio)</li>
                    <li>La calidad con que se establecieron las expectativas en todo el proceso previo</li>
                    <li>Si el prospecto se comprometió activamente (respondió mensajes, confirmó la cita)</li>
                    <li>Si consumió el VSSL (Video Sales Letter) antes de la llamada</li>
                  </ul>
                </div>

                <hr className="border-zinc-800" />

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-xl">Close Rate (Tasa de Cierre)</h4>
                  <p className="text-zinc-300"><strong>Definición:</strong> Del total de conversaciones reales que tuviste, ¿en qué porcentaje terminaste vendiendo?</p>
                  <p className="text-zinc-300"><strong>Rango objetivo:</strong> 30% como punto de partida razonable (más adelante en el video habla de 30-45%)</p>
                  
                  <div className="bg-[#1A1A1E] p-4 rounded-lg font-mono text-[14px] space-y-1">
                    <p className="text-zinc-300"><strong>Con el ejemplo de la Sheet:</strong></p>
                    <ul className="list-disc pl-5 text-zinc-300">
                      <li>5 conversaciones</li>
                      <li>30% de close rate = 1.5 ≈ 1 venta real</li>
                      <li><strong className="text-[#D5B15B]">Costo por adquisición (CPA) = $1,500</strong> (en este escenario base "sin optimizar")</li>
                    </ul>
                  </div>
                </div>

                <hr className="border-zinc-800" />

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-xl">Retorno sobre el Gasto Publicitario (ROAS)</h4>
                  <p className="text-zinc-300">Con todos los números anteriores, el cálculo final es:</p>
                  
                  <div className="bg-[#1A1A1E] p-4 rounded-lg font-mono text-[14px] space-y-1">
                    <p className="text-zinc-300"><strong>Si el producto/servicio vale $3,000:</strong></p>
                    <p className="text-zinc-300">$3,000 / $1,500 de CPA = <strong className="text-[#D5B15B]">2x ROAS</strong> (en términos reales, en el ejemplo base con números redondos)</p>
                  </div>

                  <p className="text-zinc-300">Brandon es directo: "No es tan emocionante." 2x significa que por cada $1,500 que gastás, ganás $3,000 de vuelta. Pero hay $1,500 de margen bruto antes de otros gastos.</p>
                </div>

              </div>
            </section>

            <section id="section-9">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">El Efecto Compuesto de las Mejoras Incrementales</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-8">
                <p className="text-zinc-300">
                  Aquí es donde la Sheet se vuelve verdaderamente reveladora. Brandon empieza a modificar cada variable una por una para mostrar cómo cambios aparentemente pequeños tienen un impacto enorme downstream.
                </p>

                <div className="bg-[#1A1A1E] p-4 rounded-lg font-mono text-[15px] border border-zinc-800">
                  <p className="text-white"><strong>Escenario base:</strong> $1,500 gastados → $3,000 ingresos (2x ROAS)</p>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-zinc-600 pl-5">
                    <h5 className="font-bold text-white">Mejora 1: Link CTR de 1% → 2%</h5>
                    <ul className="list-disc pl-5 text-zinc-300 mt-2 space-y-1">
                      <li>Parece pequeño. Es "solo" doblar un porcentaje.</li>
                      <li>Resultado: Todo lo posterior se duplica porque el gasto no cambia pero el doble de personas entran al embudo.</li>
                      <li>Con los demás factores iguales: <strong>$1,500 → $9,000 ≈ <span className="text-[#D5B15B]">5x ROAS</span></strong></li>
                      <li>Esto sin gastar ni un dólar más.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-zinc-600 pl-5">
                    <h5 className="font-bold text-white">Mejora 2: Opt-in de 5% → 10%</h5>
                    <ul className="list-disc pl-5 text-zinc-300 mt-2 space-y-1">
                      <li>Ir del extremo bajo al extremo alto del rango objetivo.</li>
                      <li>El costo por lead baja de $30 a $15.</li>
                      <li>Resultado acumulado: <strong>$1,500 → $15,000 ≈ <span className="text-[#D5B15B]">10x ROAS</span></strong></li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-zinc-600 pl-5">
                    <h5 className="font-bold text-white">Mejora 3: Booking rate de 30% → 50%</h5>
                    <ul className="list-disc pl-5 text-zinc-300 mt-2 space-y-1">
                      <li>Solo abriendo más disponibilidad en el calendario o mejorando el lenguaje de la página de booking.</li>
                      <li>Resultado acumulado: <strong>$1,500 → <span className="text-[#D5B15B]">$27,000</span></strong></li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-zinc-600 pl-5">
                    <h5 className="font-bold text-white">Mejora 4: Show rate de 60% → 70%</h5>
                    <ul className="list-disc pl-5 text-zinc-300 mt-2 space-y-1">
                      <li>Solo mejorando las secuencias de nurturing o siendo más riguroso con los prospectos que no confirman.</li>
                      <li>Resultado acumulado: <strong>$1,500 → <span className="text-[#D5B15B]">$33,000</span></strong></li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-[#D5B15B] pl-5">
                    <h5 className="font-bold text-white">Mejora 5: Close rate de 30% → 40%</h5>
                    <ul className="list-disc pl-5 text-zinc-300 mt-2 space-y-1">
                      <li>Mejorando el proceso de ventas.</li>
                      <li>Resultado acumulado: <strong>$1,500 → $42,000 ≈ <span className="text-[#D5B15B]">casi 30x ROAS</span></strong></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-6 rounded-xl">
                  <p className="text-[#D5B15B] font-bold mb-2">La conclusión que sacude:</p>
                  <p className="text-zinc-300">Con el mismo gasto publicitario, pasaste de ganar $3,000 a ganar $42,000. No cambiaste el presupuesto. No creaste nuevos embudos. No cambiaste el producto. Solo mejoraste cada métrica dentro de rangos razonables y alcanzables.</p>
                </div>

                <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                  <h5 className="font-bold text-white mb-2">Proyectado a un año (dejando el sistema corriendo y haciendo mantenimiento básico):</h5>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-1">
                    <li>Gasto anual: $18,000</li>
                    <li>Ingresos generados: <strong className="text-white">~$500,000</strong> (medio millón agregado a tu negocio)</li>
                  </ul>
                </div>

              </div>
            </section>

            <section id="section-10">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">La Historia de Jacob Stella (El Ejemplo Más Importante)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">
                  Brandon cuenta esta historia en los workshops todo el tiempo porque ilustra el error más común que cometen los anunciantes exitosos.
                </p>
                
                <div className="bg-[#1A1A1E] p-6 rounded-xl border border-zinc-800 space-y-4">
                  <p className="text-zinc-300 italic">Jacob tenía un <strong>retorno de 21x</strong> sobre su gasto publicitario. Vino a una advisory call con Brandon y preguntó: "Brandon, estoy consiguiendo un 21x de ROAS, ¿qué nuevo embudo debería construir ahora?"</p>
                  <p className="text-zinc-300"><strong>Brandon:</strong> "¿Cuánto estás gastando por día?"</p>
                  <p className="text-zinc-300"><strong>Jacob:</strong> "50 dólares."</p>
                  <p className="text-zinc-300"><strong>Brandon:</strong> "Andá a gastar $100 diarios y contame cómo te fue la semana que viene."</p>
                  <p className="text-zinc-300 italic">Jacob volvió la semana siguiente todavía con 21x de retorno, ahora sobre el doble de presupuesto.</p>
                  <p className="text-zinc-300"><strong>Brandon:</strong> "¿Cuánto más querés gastar?"</p>
                  <p className="text-zinc-300"><strong>Jacob:</strong> "No, no quiero gastar más. ¿Qué nuevo embudo debería hacer?"</p>
                  <p className="text-zinc-300"><strong>Brandon:</strong> "¿Qué carajo te dije la semana pasada?"</p>
                </div>

                <p className="text-zinc-300">
                  Esta historia representa un arquetipo que Brandon llama el <strong>"Cautious Calculator" (Calculador Cauteloso)</strong>: alguien que antes de gastar $10 más por día en publicidad quiere exprimir hasta el último punto porcentual de eficiencia. El error está en que cuando el sistema <strong>claramente está funcionando</strong>, la palanca más poderosa no es la optimización fina — es simplemente <strong>aumentar el gasto en publicidad</strong>.
                </p>
                <p className="text-zinc-300">
                  El sistema ya probó que funciona. Cada dólar que ponés genera 21 de vuelta. En ese contexto, el "nuevo embudo" o el "nuevo anuncio" son distracciones. La prioridad es escalar lo que ya funciona.
                </p>
              </div>
            </section>

            <section id="section-11">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Activity size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">La Curva de Bell y el ROAS Decreciente</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Brandon introduce aquí un concepto tomado de Jeremy Haynes (quien a su vez lo tomó de un libro que no recuerda):</p>
                <p className="text-zinc-300">
                  Imaginá que todas las personas en tu audiencia objetivo forman una curva de campana. En los extremos están los que <strong>nunca van a comprar</strong> (no importa qué les digas) y los que <strong>ya están listos para comprar</strong> (solo necesitan que alguien aparezca en su feed).
                </p>
                <p className="text-zinc-300">
                  Cuando recién empezás a gastar en publicidad con presupuestos pequeños, Meta automáticamente busca a las personas más fáciles de convertir — las que ya tienen el problema identificado, ya saben que quieren una solución, y solo estaban esperando a alguien como vos. Esas son las "ventas fáciles", los deals de bandeja.
                </p>
                <p className="text-zinc-300">
                  A medida que aumentás el gasto diario, agotás ese grupo y empezás a llegar a audiencias más frías — personas que tienen el problema pero aún no lo reconocen, o que reconocen el problema pero tienen más objeciones y necesitan más convencimiento.
                </p>
                
                <div className="bg-[#1A1A1E] border-l-4 border-l-[#D5B15B] p-5 rounded-r-xl">
                  <h4 className="font-bold text-white mb-2">Esto explica por qué el ROAS decrece a medida que escalás.</h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-1">
                    <li>Con $50/día podés tener 20x ROAS.</li>
                    <li>Con $1,000/día quizás tengas 10x.</li>
                    <li>Con $20,000/día quizás tengas 2.5x.</li>
                  </ul>
                </div>

                <p className="text-zinc-300">
                  Pero lo que importa no es el múltiplo — es el <strong>monto absoluto de ganancia neta</strong>. Brandon lo dice claramente: prefiere un 2.5x sobre $600,000 mensuales que un 20x sobre $1,500 mensuales. La matemática no tiene discusión.
                </p>
              </div>
            </section>

            <section id="section-12">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <ShieldAlert size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">El ROAS como Métrica de Vanidad</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Este es un punto filosófico importante que Brandon martilla con fuerza.</p>
                <p className="text-zinc-300">
                  Las agencias aman hablar de ROAS porque suena bien. "Te conseguimos un 15x de retorno" se escucha increíble. Pero si el gasto fue de $500 y el ingreso fue de $7,500 con márgenes bajos, el número absoluto es irrelevante para el crecimiento real del negocio.
                </p>
                <p className="text-zinc-300">
                  Del mismo modo, hablar de costo por clic, impresiones, alcance o tasa de engagement son en su mayoría <strong>métricas de vanidad</strong> que no conectan directamente con la ganancia neta.
                </p>
                
                <div className="bg-[#1A1A1E] p-6 rounded-xl border border-zinc-800">
                  <h4 className="font-bold text-white mb-2">La única métrica que importa finalmente:</h4>
                  <p className="text-zinc-300">La última línea del Estado de Resultados (P&L statement). La ganancia neta, ya considerados todos los gastos incluyendo el gasto publicitario, sueldos, y costos operativos.</p>
                </div>
                
                <p className="text-zinc-300">
                  Brandon incluso va más allá: él prefiere tomar más responsabilidad y decir que la ganancia neta es el verdadero indicador del éxito del marketing, aunque haya otros factores que la afecten. Esto lo hace porque prefiere una métrica de accountability clara a una con demasiados asteriscos.
                </p>
              </div>
            </section>

            <section id="section-13">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Search size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Dónde Encontrás Cada Métrica en la Práctica</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Brandon hace una aclaración práctica importante para saber dónde buscar cada número:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#1A1A1E] p-6 rounded-xl border border-zinc-800">
                    <h4 className="font-bold text-white mb-4">En Meta Ads Manager:</h4>
                    <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                      <li>Link CTR</li>
                      <li>CPM</li>
                      <li>Costo por clic</li>
                      <li>Resultados (leads o reservas, según cómo configuraste la conversión)</li>
                    </ul>
                  </div>
                  <div className="bg-[#1A1A1E] p-6 rounded-xl border border-zinc-800">
                    <h4 className="font-bold text-white mb-4">En Go High Level (CRM):</h4>
                    <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                      <li>Tasa de opt-in</li>
                      <li>Tasa de booking</li>
                      <li>Estadísticas del formulario slide por slide (dónde dropea la gente)</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 border-t border-zinc-800 pt-6">
                  <h4 className="font-bold text-white mb-2">Show Rate y Close Rate:</h4>
                  <p className="text-zinc-300 mb-4">No se calculan automáticamente en ningún sistema. Brandon y su equipo de 9-10 personas de ventas <strong>trackean esto manualmente en una Google Sheet compartida</strong> donde cada representante de ventas ingresa:</p>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-2 mb-4">
                    <li>Cuántas llamadas tuvo agendadas</li>
                    <li>Cuántas se realizaron efectivamente (show)</li>
                    <li>Cuántas cerró</li>
                  </ul>
                  
                  <h5 className="font-bold text-white mb-2 mt-6">¿Por qué manual y no automatizado?</h5>
                  <p className="text-zinc-300">Brandon es específico aquí: la acción manual de ingresar los datos hace que el vendedor sea consciente de sus números en tiempo real, no al final de la semana cuando ya pasaron 7 días. Y la posibilidad de ver cómo te comparás con el resto del equipo en la misma hoja genera competencia interna que eleva el rendimiento de todos. "Quiero que sepas en tiempo real cómo te compara con todos los demás, no que te enteres en un reporte automático al final de la semana."</p>
                </div>
              </div>
            </section>

            <section id="section-14">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Síntesis y Meta-Lección de la Sección</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">La Google Sheet de forecasting no es solo una calculadora — es una <strong>herramienta de diagnóstico y toma de decisiones</strong>. Te permite:</p>
                
                <ol className="list-decimal pl-5 text-zinc-300 space-y-3 font-medium mb-6">
                  <li><strong>Proyectar</strong> cuánto necesitás invertir para alcanzar un objetivo de ingresos</li>
                  <li><strong>Diagnosticar</strong> cuál es la métrica con más potencial de mejora</li>
                  <li><strong>Priorizar</strong> dónde poner el esfuerzo (no siempre es en los anuncios — a veces es en el show rate o el close rate)</li>
                  <li><strong>Hacer decisiones</strong> racionales sobre cuándo escalar, cuándo optimizar, y cuándo simplemente esperar más datos</li>
                </ol>

                <div className="bg-[#1A1A1E] border border-zinc-800 p-6 rounded-xl">
                  <p className="text-zinc-300 italic text-[16px]">
                    El mensaje más poderoso que emerge de toda esta sección es que la publicidad paga, bien entendida, no es un gasto — es una <strong>inversión con retorno calculable y predecible</strong>. Cuando entendés cada variable del sistema y cómo se relacionan entre sí, la pregunta deja de ser "¿funciona la publicidad?" y pasa a ser "¿qué ajuste específico me da el mayor retorno en este momento?"
                  </p>
                </div>
              </div>
            </section>

            <section id="section-15">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <List size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Los 10 Principios de Advertising</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <h4 className="font-bold text-white text-xl">Introducción a los Principios</h4>
                <p className="text-zinc-300">
                  Antes de empezar a construir campañas, landing pages o anuncios, Brandon establece que hay un conjunto de <strong>lentes y principios cualitativos</strong> que te permiten diagnosticar tu publicidad, mejorar resultados y entender el ecosistema de manera holística. No son reglas rígidas — son marcos de pensamiento. Algunos ya se mencionaron brevemente en secciones anteriores, pero acá los desarrolla en profundidad uno por uno.
                </p>
              </div>
            </section>

            <section id="section-16">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Palette size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Principio 1: Advertising es Arte vs. Ciencia</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Para introducir este principio, Brandon le muestra a Sev tres piezas de arte y le pide que las califique del 1 al 10.</p>
                
                <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                  <li>La primera (Van Gogh): Sev le da un 7 u 8 <strong>basándose en la familiaridad</strong> con el artista.</li>
                  <li>La segunda (acuarela): Un 6-7 porque le gusta el estilo pero no la elegiría.</li>
                  <li>La tercera (Napoleón a caballo): Un 9 rotundo porque "crea un dream state", le habla emocionalmente.</li>
                </ul>

                <p className="text-zinc-300"><strong>¿Por qué hace esto?</strong> Para demostrar que la publicidad funciona igual que el arte: diferentes personas responden diferente a lo mismo, y no hay una pieza que todo el mundo califique igual. Intentar encontrar el anuncio "perfecto" que funcione para todos es una ilusión.</p>

                <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl space-y-3">
                  <p className="text-zinc-300"><strong className="text-white">El Arte:</strong> Dentro de las leyes y políticas de la plataforma, podés decir o hacer lo que quieras. Es la libertad creativa total.</p>
                  <p className="text-zinc-300"><strong className="text-white">La Ciencia:</strong> Cómo medís eso con un número. El link CTR, la tasa de conversión, el costo por lead — eso es la ciencia.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg">El Efecto de la Mera Exposición:</h4>
                  <p className="text-zinc-300">Brandon menciona un estudio de los años 70 u 80 donde llevaron estudiantes universitarios a una sala, les mostraron formas y símbolos en un proyector. No sabían cuáles habían visto más veces. Luego los llevaron a otra sala y les preguntaron cuál les gustaba más. Consistentemente eligieron la forma que habían visto más veces, sin saberlo conscientemente.</p>
                  
                  <div className="border-l-4 border-[#D5B15B] pl-5 mt-4">
                    <p className="text-zinc-300"><strong>Conclusión práctica: La familiaridad genera preferencia.</strong> Por eso Brandon tiene la broma de que "no querés tanto a tu familia y amigos — solo son los que más impresiones te sirvieron en tu vida."</p>
                  </div>
                  <p className="text-zinc-300">Aplicación directa en publicidad: La frecuencia importa. Aparecer repetidamente en el feed de alguien construye familiaridad, y la familiaridad construye confianza y preferencia, incluso sin interacción consciente.</p>
                </div>

                <hr className="border-zinc-800" />

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg">El Contexto y la Colocación:</h4>
                  <p className="text-zinc-300">Cuando Sev calificó la segunda pintura, Brandon menciona que la misma pieza puede verse completamente diferente en un café que en una galería. Lo mismo pasa con los anuncios — un anuncio en Stories de Instagram se experimenta diferente que en el feed de Facebook o en Reels. El placement importa.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg">Los Ciclos de Moda:</h4>
                  <p className="text-zinc-300">El arte viene y va como la moda. Lo mismo pasa con las estrategias de marketing:</p>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                    <li>2017-2018: Los webinars eran furor. Se sobreutilizaron, se volvieron cliché.</li>
                    <li>Vinieron los lead magnets (funnels de recurso gratuito a cambio de datos). Más inmediatos, más volumen.</li>
                    <li>Las tasas de consumo de los lead magnets se desplomaron — nadie abría el PDF.</li>
                    <li>Llegaron los call funnels (agendar llamadas directamente). Más directos y calificantes.</li>
                    <li>Ahora (2025-2026): Los webinars están <strong>volviendo</strong> porque en un mundo post-pandemia ultra-escéptico, la exposición prolongada a una persona construye confianza. El efecto de mera exposición nuevamente. Ver a alguien durante horas en un webinar en vivo genera el mismo tipo de confianza que se construye viendo a alguien muchas veces.</li>
                  </ul>
                </div>

                <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl space-y-3">
                  <h4 className="font-bold text-white text-lg">El Anuncio "Arruinado":</h4>
                  <p className="text-zinc-300">Brandon cuenta que una vez Sev le mandó un mensaje diciendo que había "cagado" el setup de sus anuncios y pedía ayuda para arreglarlo. Días después, ese mismo anuncio era su mejor performer. La ciencia (los números) dijo que estaba funcionando perfectamente. La intuición artística de Sev decía que estaba roto. <strong>La ciencia gana.</strong> "Arruiná más anuncios," le dijo Brandon.</p>
                </div>

              </div>
            </section>

            <section id="section-17">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Sliders size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Principio 2: Dials, No Switches (Diales, No Interruptores)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Este principio es la antítesis del pensamiento binario en publicidad. Casi todo lo que dice está influenciado por este concepto.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-500/10 border border-red-500/30 p-5 rounded-xl">
                    <p className="text-red-400 font-bold mb-2">El error más común:</p>
                    <p className="text-zinc-300 text-[15px]">Los anunciantes hablan de publicidad como si fuera un interruptor. Funciona o no funciona. Tiene leads o no tiene. Es buena o mala.</p>
                  </div>
                  <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-5 rounded-xl">
                    <p className="text-[#D5B15B] font-bold mb-2">La realidad:</p>
                    <p className="text-zinc-300 text-[15px]">Todo existe en un espectro continuo y puede ajustarse gradualmente, como un dial de volumen. No hay una decisión correcta y una incorrecta — hay decisiones que te dan mejores o peores porcentajes de éxito.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg">Ejemplo práctico del diagnóstico:</h4>
                  <p className="text-zinc-300">Imaginá que alguien está corriendo anuncios y dice "no tengo ventas." Si analizás el embudo:</p>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-1 font-mono text-[14px]">
                    <li>Costo por clic: Razonable ✓</li>
                    <li>Costo por lead: Razonable ✓</li>
                    <li>Tasa de cierre: 1 de cada 20 en lugar de 1 de cada 3 ✗</li>
                  </ul>
                  <p className="text-zinc-300">En ese caso el problema no es la publicidad ni la landing page. Es el proceso de ventas. Podés decir: "Esto funciona bastante bien, esto funciona bastante bien, este es claramente el problema." Hacés zoom específicamente en ese dial.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg">El peligro del extremismo:</h4>
                  <p className="text-zinc-300">Si al mejorar un número (más clics) sacrificás otro (peor calidad de leads), el resultado neto puede ser peor. Por eso el equilibrio constante es más valioso que optimizar cualquier métrica en aislamiento.</p>
                </div>

                <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl space-y-3">
                  <h4 className="font-bold text-white text-lg">La ventana temporal correcta:</h4>
                  <p className="text-zinc-300">Brandon mira el <strong>promedio de los últimos 30 días</strong> como regla general. Día a día las métricas fluctúan salvajemente. Semana a semana también. Incluso mes a mes. Un cuarto financiero completo (90 días) es lo ideal para tener una imagen más estable. Si mirás 3 días y tomás decisiones, estás respondiendo al ruido estadístico, no a la señal.</p>
                </div>
              </div>
            </section>

            <section id="section-18">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <MapPin size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Principio 3: Meet Them Where They're At (Conocé Dónde Están)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <div className="border-l-4 border-[#D5B15B] pl-5">
                  <p className="text-zinc-300"><strong>La idea central:</strong> En cada etapa del proceso de marketing y ventas, tu prospecto está en un estado mental diferente. Tu trabajo es identificar exactamente ese estado y hablarle desde ahí, no desde donde vos querés que esté.</p>
                </div>
                
                <p className="text-zinc-300">Brandon estructura esto por etapa:</p>

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg text-[#D5B15B]">En el anuncio (scroll del feed):</h4>
                  <p className="text-zinc-300">No están pensando en tu oferta. Están pensando en sus propios problemas, sus propias vidas. Son, como se aprende en economía de décimo grado, <strong>racionalmente auto-interesados</strong>. Si podés repetirles sus propios problemas, sus deseos, las cosas que los mantienen despiertos de noche — van a frenar y prestar atención. Si en cambio empezás hablando de vos mismo, están "todo el camino del otro lado."</p>
                  
                  <p className="text-zinc-300">Por eso Brandon siempre dice: <strong>no te presentes en el anuncio.</strong> La duración promedio de visualización en redes sociales es <strong>1.8 segundos</strong>. No tenés tiempo para presentarte. Tenés que estar hablando del prospecto desde el primer segundo.</p>
                  
                  <p className="text-zinc-400 text-[14px] italic">(Facebook llegó a permitir optimizar para vistas de 3 segundos. Las duraciones de atención se volvieron tan cortas que lo redujeron a 2 segundos. Y la realidad medida es 1.8 segundos.)</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg text-[#D5B15B]">En la landing page:</h4>
                  <p className="text-zinc-300">El prospecto llega todavía con 1.8 segundos de span de atención. No recupera mágicamente toda su capacidad cognitiva al llegar a la página. Si instalás Microsoft Clarity (herramienta gratuita de análisis de sesiones), vas a ver a la gente hacer scroll furioso: leen el headline, ven el VSSL (no lo escuchan), ven el formulario, y empiezan a hacerse scroll arriba y abajo para convencerse de dar sus datos o no.</p>
                  <p className="text-zinc-300">Lo que necesitás en la landing page: decirles <strong>a nivel macro qué hacés, qué querés que hagan, y demostrar que funciona</strong> — rápido, porque tienen el tiempo de atención de un goldfish.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg text-[#D5B15B]">En la secuencia de nurturing:</h4>
                  <p className="text-zinc-300">Ya reservaron una llamada. Son "lo suficientemente curiosos como para querer esto y lo suficientemente comprometidos como para agendar" — pero probablemente <strong>tratando de convencerse de no ir</strong>. Acá es donde podés hablar más de vos mismo y de tus credenciales. Y es donde debés anticiparte a sus objeciones antes de que lleguen a la llamada.</p>
                  
                  <div className="bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
                    <p className="text-zinc-300"><strong>La regla de oro:</strong> si alguien trae una objeción al final de una llamada de ventas, no fue la primera vez que lo pensaron — fue la primera vez que lo dijeron en voz alta. Ese pensamiento estuvo en su cabeza todo el tiempo. Metelo en la secuencia de nurturing, respondelo antes de que lleguen a la llamada.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg text-[#D5B15B]">En la llamada de ventas:</h4>
                  <p className="text-zinc-300">Recién acá intentás vender. Todo lo anterior solo estaba preparando el terreno para esta conversación.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg text-[#D5B15B]">Aplicación entre géneros y roles:</h4>
                  <p className="text-zinc-300">Sev cuenta que en su negocio de fotografía de bodas, siempre era la novia quien encontraba y agendaba la llamada. El novio llegaba a la llamada con los brazos cruzados preguntando el precio. La solución: pedir que ambos estuvieran en la llamada, hablarle emocionalmente a la novia, y decirle al novio "podés delegarme todas las preguntas porque vos no vas a saber las respuestas — yo sí." El novio se relajaba y la novia ya estaba vendida. Eso es meet them where they're at en su máxima expresión.</p>
                </div>
              </div>
            </section>

            <section id="section-19">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Eye size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Principio 4: Set Expectations (Establecé Expectativas)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Brandon dice que no va a gastar mucho tiempo en este principio porque ya lo habían tocado bastante, pero es fundamental como filosofía de vida, no solo de marketing.</p>
                
                <div className="bg-[#1A1A1E] border-l-4 border-[#D5B15B] p-5 rounded-xl">
                  <p className="text-zinc-300 italic text-[16px]">
                    "La gente solo se decepciona cuando sus expectativas no coinciden con la realidad."
                  </p>
                </div>

                <p className="text-zinc-300">Su historia personal: Brandon dice que le ha ido bien en la vida porque siempre <strong>manejó bien las expectativas de los demás</strong> — específicamente, siendo conservador al prometer y superando lo prometido. Cuando prometés poco y entregás mucho, la gente queda gratamente sorprendida.</p>

                <hr className="border-zinc-800" />

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg">Aplicado al embudo:</h4>
                  <p className="text-zinc-300">El anuncio establece una expectativa que la landing page <strong>debe</strong> cumplir. Si hay discordancia entre lo que promete el anuncio y lo que muestra la página, la persona rebota — y eso se refleja en la tasa de conversión.</p>
                  <p className="text-zinc-300">Si en el anuncio decís "esto es cómo los chicos que yo entreno pierden grasa abdominal" → la landing page debe ser sobre coaching. Si llegan y ven algo sobre suplementos o dietas, la expectativa no se cumplió.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg">El error clásico de la "consulta gratuita":</h4>
                  <p className="text-zinc-300">Si en algún lugar de tu embudo establecés la expectativa de que la llamada es una consulta gratuita, vas a tener dos problemas:</p>
                  <ol className="list-decimal pl-5 text-zinc-300 space-y-2">
                    <li>Los leads que lleguen van a querer información gratis y no van a comprar nada.</li>
                    <li>Cuando intentes vender en la llamada, van a sentir que los engañaste.</li>
                  </ol>
                  <p className="text-zinc-300">Si en cambio lo llamás "llamada de aplicación" desde el inicio, la expectativa es claramente transaccional. Menos leads, pero infinitamente más calificados.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg">Inocular vs. Sorprender:</h4>
                  <p className="text-zinc-300">"Inocular" significa establecer expectativas sobre algo que podría incomodar antes de que llegue. Si vas a tener un representante de ventas en lugar de ser vos quien hace la llamada, avisalo en la secuencia de nurturing. "Por si acaso la llamada es con uno de mis especialistas — ellos conocen el programa igual que yo." Si no lo avisás y esperaban hablar con Brandon, hay una discordancia de expectativas que puede arruinar la llamada.</p>
                </div>
              </div>
            </section>

            <section id="section-20">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Heart size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Principio 5: Winning Hearts and Minds</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-8">
                <p className="text-zinc-300">Este principio trata sobre el equilibrio entre emoción y lógica en el mensaje publicitario.</p>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg">El modelo de dos sistemas:</h4>
                  <p className="text-zinc-300">Dependiendo del libro que leas, el cerebro tiene dos sistemas de pensamiento:</p>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                    <li><strong>Pensamiento lógico:</strong> Significativamente más lento. Se desarrolló más tarde en la evolución humana. Hay un "lag" natural.</li>
                    <li><strong>Pensamiento emocional:</strong> Significativamente más rápido. Se desarrolló primero en la evolución.</li>
                  </ul>
                  <p className="text-zinc-300">Por eso cuando estás en una discusión acalorada decís algo de lo que te arrepentís antes de que tu cerebro lógico pueda frenar la respuesta emocional.</p>
                </div>

                <div className="bg-[#1A1A1E] border border-zinc-800 p-6 rounded-xl text-center">
                  <p className="text-white text-lg font-bold mb-2">"Los humanos compran emocionalmente y justifican lógicamente."</p>
                  <p className="text-zinc-400">Brandon agrega su propia tercera parte: <strong>"Pero su lógica ya está un poco sesgada si la emoción llegó primero."</strong> Es decir, una vez que la emoción tomó la decisión, la lógica viene a racionalizar esa decisión, no a cuestionarla honestamente.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg">La evolución de la publicidad en tres etapas:</h4>
                  <ol className="list-decimal pl-5 text-zinc-300 space-y-3">
                    <li><strong>"El qué":</strong> Los inicios de la publicidad simplemente anunciaban que el producto existía y cuánto costaba. "Tenemos sillas. $50 cada una."</li>
                    <li><strong>"El resultado":</strong> La publicidad automotriz de los años 30-40 era ultra utilitaria: "Este auto recorre X kilómetros con un litro de combustible." El resultado tangible.</li>
                    <li><strong>"El sentimiento del resultado":</strong> La publicidad moderna vende la emoción que viene después del resultado. No el auto, sino el sentimiento de poder que experimentás al volante. No el perfume (que es solo aceites mezclados en un frasco bonito), sino la sensación de ser el hombre más atractivo en la habitación.</li>
                  </ol>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-[#D5B15B] text-lg">El ejemplo perfecto: publicidad de perfumes y colonias.</h4>
                  <p className="text-zinc-300">No pueden transmitir el olor a través de la televisión. Entonces venden el sentimiento. Los comerciales de perfume son 3-5 minutos de modelos atractivos festejando en Europa y sintiéndose deseables. El frasco aparece en los últimos 3 segundos. Eso es todo — pura emoción, cero información sobre el producto real.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg">El error del contador:</h4>
                  <p className="text-zinc-300">Brandon da el ejemplo de un miembro cuyo headline de landing page era "Stress less, sleep well at night." Hermoso emocionalmente. Pero cuando Brandon le preguntó qué hacía, dijo "soy contador." El outcome era completamente ambiguo — podría haber sido una empresa de colchones, un médico, un coach de mindfulness. <strong>El resultado era claro para nadie.</strong> La emoción sin contexto de resultado falla.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg">El balance correcto:</h4>
                  <p className="text-zinc-300">No es 50/50 para todos. Es un mix que varía según el tipo de persona. Los ingenieros y contadores responden mejor a mensajes más lógicos y directos. Las personas más emocionales responden mejor a mensajes con más sentimiento. Por eso necesitás diferentes anuncios: algunos más emocionales, algunos más lógicos. Andromeda (el algoritmo de Meta) va a encontrar qué tipo de persona responde a qué tipo de mensaje y los va a emparejar automáticamente.</p>
                  <p className="text-zinc-300">Brandon cuenta que históricamente sus mejores anuncios eran muy emocionales (provocadores, peleadores). Cuando empezó a hacer anuncios más lógicos y directos sobre qué hacía exactamente, desbloqueó un segmento de audiencia completamente diferente — personas más analíticas que se repelían de los anuncios emocionales pero necesitaban el mismo servicio.</p>
                </div>

                <div className="border-t border-zinc-800 pt-6">
                  <h4 className="font-bold text-white text-lg mb-2">¿Dónde poner el "sentimiento"?</h4>
                  <p className="text-zinc-300">A lo largo de todo el proceso. No es solo en el anuncio o solo en la landing page. La emoción y el resultado deben estar presentes y alineados desde el primer segundo del anuncio hasta el cierre en la llamada de ventas.</p>
                </div>
              </div>
            </section>

            <section id="section-21">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Principio 6: Constructing Your Argument</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Brandon tiene un tutor de filosofía llamado Malik que viene a su casa cada dos semanas y le enseña pensamiento crítico. Malik también es coach de debates. Esto llevó a Brandon a una epifanía:</p>
                
                <div className="bg-[#1A1A1E] border-l-4 border-[#D5B15B] p-5 rounded-xl">
                  <p className="text-white text-lg font-bold">"Todo el marketing y la publicidad no es más que debatir a escala."</p>
                </div>

                <p className="text-zinc-300">En un debate clásico tenés dos equipos de tres personas. En publicidad tenés:</p>
                <ul className="list-disc pl-5 text-zinc-300 space-y-1">
                  <li><strong>Vos:</strong> Un anunciante feliz con su oferta.</li>
                  <li><strong>Tu audiencia:</strong> Un ejército de oposición de personas que tienen vidas imperfectas y todas las razones para no creer en vos.</li>
                </ul>
                <p className="text-zinc-300">El objetivo: convencerlos de llegar a una conclusión lógica — que deben comprar <strong>esto</strong>, de <strong>esta persona específica</strong>.</p>

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg">Argumento débil vs. Argumento fuerte:</h4>
                  <p className="text-zinc-300">Un argumento débil está respaldado por una sola premisa (una sola razón para comprar). Podés tener campañas enteras construidas sobre una sola idea. Una agencia te diría "necesitamos más presupuesto en ese creative." Lo que realmente necesitás son múltiples razones diferentes que ataquen las distintas objeciones y creencias de tu audiencia.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg">Lo que tu audiencia ya acepta y lo que rechaza:</h4>
                  <p className="text-zinc-300">Usando el ejemplo de Brandon con el programa With You:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="text-green-400 font-bold mb-3">Están de acuerdo con:</p>
                      <ul className="list-disc pl-5 text-zinc-300 space-y-1 text-[14px]">
                        <li>Necesito más leads consistentes</li>
                        <li>Necesito leads más calificados</li>
                        <li>Las agencias no funcionaron para mí</li>
                      </ul>
                    </div>
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="text-red-400 font-bold mb-3">No están de acuerdo con:</p>
                      <ul className="list-disc pl-5 text-zinc-300 space-y-1 text-[14px]">
                        <li>"No soy tech-savvy"</li>
                        <li>"Vos decís muchas malas palabras"</li>
                        <li>"Usás Crocs — parecés poco profesional"</li>
                        <li>"Creo que los testimonios son falsos"</li>
                        <li>"No tengo tiempo para esto"</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-zinc-300 mt-4">Necesitás crear contenido que comunique y ataque <strong>cada uno de estos puntos de desacuerdo</strong>. Y hacerlo en múltiples lugares — en los anuncios, en la landing page, en las secuencias de nurturing, en la llamada de ventas.</p>
                </div>

                <div className="space-y-4 mt-6">
                  <h4 className="font-bold text-white text-lg">La idea de "Naive Realism" (Realismo Ingenuo):</h4>
                  <p className="text-zinc-300">Malik le enseñó este concepto filosófico. Los humanos generalmente tienen que atravesar la vida creyendo que están en lo correcto en sus suposiciones sobre cómo funciona el mundo. Es muy poco común que alguien cuestione activamente todas sus creencias internas.</p>
                  <p className="text-zinc-300">Por eso la persona que comenta en tu anuncio que sos un estafador — en su versión de la realidad, tiene razón. En tu versión, es un idiota. La solución no es convencer a nadie en los comentarios. Es encontrar ese punto medio en el mensaje donde ambas visiones del mundo puedan coexistir.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-[#D5B15B] text-lg">El truco del negativo:</h4>
                  <p className="text-zinc-300">Brandon observa que tiene <strong>más éxito atacando lo que la gente dice mal de él o sobre lo que no está segura</strong>, que reforzando lo positivo. ¿Por qué? Porque cuando hay falta de información, los humanos invetan una historia en su cabeza y la aceptan. Y por el sesgo negativo cognitivo del cerebro humano, esa historia casi siempre va a ser la peor versión posible.</p>
                  <p className="text-zinc-300">Si no hablás de por qué tus testimonios podrían ser falsos, la gente va a asumir que son falsos. Si no hablás de tus credenciales, van a asumir que no las tenés. Si no respondés la objeción del tiempo, van a asumir que lleva demasiado tiempo.</p>
                  <p className="text-zinc-300">Por eso uno de los mejores anuncios de Brandon fue cuando Aiden le preguntó en cámara: "¿Cuáles son las peores cosas del workshop?" Y Brandon respondió honestamente sobre problemas técnicos de setup, cuentas restringidas, etc. Ese anuncio fue uno de los mejores performers — porque atacó directamente la narrativa negativa que la gente construía en su cabeza.</p>
                </div>

                <div className="border-t border-zinc-800 pt-6">
                  <p className="text-zinc-300"><strong>La regla práctica:</strong> Constantemente preguntate: "Si fuera mi prospecto, ¿cuáles serían todas las razones por las que NO haría esto?" Luego hacé anuncios sobre eso. Respondelo en la landing page. Poné la respuesta en las secuencias de nurturing. Preemptiвamente resuélvelo en la llamada de ventas.</p>
                </div>
              </div>
            </section>

            <section id="section-22">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Footprints size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Principio 7: Only Selling the Next Step</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Este principio ya fue mencionado pero Brandon lo formaliza acá como uno de los 10.</p>
                
                <div className="bg-[#1A1A1E] border border-zinc-800 p-6 rounded-xl space-y-2">
                  <h4 className="font-bold text-white mb-2">La secuencia:</h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-1">
                    <li>El anuncio → solo intenta que la persona correcta haga clic</li>
                    <li>La página de opt-in → solo intenta que esa persona complete el formulario</li>
                    <li>La página de booking → solo intenta que agenden una llamada</li>
                    <li>La secuencia de nurturing → solo intenta que aparezcan a la llamada</li>
                    <li>La llamada de ventas → recién acá intentás vender</li>
                  </ul>
                </div>

                <p className="text-zinc-300"><strong>El error clásico:</strong> Intentar vender el producto final desde el anuncio. Es el equivalente a pedirle matrimonio en la primera cita.</p>

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg">Micro-compromisos:</h4>
                  <p className="text-zinc-300">Brandon lo conecta con una técnica de seminarios de ventas en vivo. Los presentadores te hacen levantar la mano, ponerte de pie, aplaudir, hablar con el de al lado — todo antes de pedirte el cheque al final. Cada pequeña acción de cumplimiento se apila y crea momentum hacia el sí grande.</p>
                  <p className="text-zinc-300">En publicidad: click → primera pregunta del formulario → segunda pregunta → octava pregunta → datos de contacto → booking → confirmación → show → venta. Cada paso es un micro-compromiso que hace más probable el siguiente.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-[#D5B15B] text-lg">El experimento del cartel de tránsito:</h4>
                  <p className="text-zinc-300">De Influence de Robert Cialdini. Primer grupo: le piden a gente al azar que pongan un cartel feo de "conduzca con precaución" en su jardín. Casi nadie acepta. Segundo grupo: una semana antes, alguien les pide que firmen una petición de apoyo a la conducción segura. Casi todos firman. Una semana después, cuando viene alguien con el cartel feo, el 84% acepta ponerlo. ¿Por qué? Porque ya se <strong>identificaron</strong> como personas que apoyan la conducción segura. Y los humanos actúan de manera consistente con su identidad.</p>
                  
                  <div className="border-l-4 border-zinc-600 pl-5 mt-4">
                    <p className="text-zinc-300"><strong>Aplicación en publicidad:</strong> Si en alguna parte del proceso lográs que el prospecto se identifique como alguien que haría lo que querés que haga, aumentás dramáticamente la probabilidad de que lo haga.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="section-23">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <HelpCircle size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Principio 8: Curious vs. Committed</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Este es uno de los principios más ricos y con mayor aplicación práctica.</p>
                
                <div className="flex items-center gap-4 text-white font-mono text-sm">
                  <span className="text-zinc-400">0 (Curioso)</span>
                  <div className="flex-1 h-2 bg-gradient-to-r from-zinc-700 via-zinc-500 to-[#D5B15B] rounded-full"></div>
                  <span className="text-[#D5B15B] font-bold">10 (Comprometido)</span>
                </div>

                <p className="text-zinc-300">Todo tu comunicación de marketing existe en algún punto de este espectro.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-white mb-2">¿A qué se aplica?</h4>
                    <ul className="list-disc pl-5 text-zinc-300 space-y-1">
                      <li>El copy de tus anuncios</li>
                      <li>El contenido visual (imagen o video)</li>
                      <li>Los search terms de Google que apuntás</li>
                      <li>Tu estrategia de marketing general</li>
                      <li>Cómo llamás a la reserva ("consulta gratuita" vs. "llamada de aplicación")</li>
                      <li>El CTA de la landing page</li>
                      <li>Cada pregunta de tu formulario</li>
                    </ul>
                  </div>
                  <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                    <h4 className="font-bold text-white mb-2">Lead magnet vs. Call funnel:</h4>
                    <ul className="space-y-3 text-zinc-300 text-[14px]">
                      <li><strong>Lead magnet funnel:</strong> ~3 en la escala. Las personas que llegan son curiosas, quieren información gratis.</li>
                      <li><strong>Call funnel:</strong> ~8-9 en la escala. Los que completan el proceso están mucho más comprometidos.</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 mt-6">
                  <h4 className="font-bold text-white text-lg">El ejemplo de la grasa abdominal:</h4>
                  <p className="text-zinc-300">Un miembro venía con muchos clics pero pésima tasa de conversión en la landing page. Brandon le preguntó cuál era la primera oración de su anuncio. Era: "Esto es cómo los chicos están perdiendo la grasa abdominal."</p>
                  <p className="text-zinc-300">Si solo lees esa frase sin contexto, ¿en qué podrías pensar? Programa de pérdida de peso. Fitness. Dieta. Jugos detox. Suplementos. Péptidos. Decenas de opciones. Solo una fracción pequeña esperaba que fuera coaching. Resultado: CTR altísimo (todos los curiosos) pero tasa de conversión en landing page mínima (casi ninguno esperaba lo que encontró).</p>
                  
                  <div className="bg-[#1A1A1E] p-4 rounded-lg space-y-3">
                    <div>
                      <p className="text-zinc-400 text-sm">Cambio sugerido 1:</p>
                      <p className="text-white">"Esto es cómo los chicos <strong>que yo entreno</strong> están perdiendo la grasa abdominal."</p>
                      <p className="text-zinc-400 text-sm mt-1">Añadir "que yo entreno" reduce el rango a coaching. El CTR baja, la conversión en la landing page se cuadruplica.</p>
                    </div>
                    <div className="border-t border-zinc-800 pt-3">
                      <p className="text-zinc-400 text-sm">Cambio sugerido 2:</p>
                      <p className="text-white">"Esto es cómo los chicos que yo entreno están perdiendo la grasa abdominal <strong>a pesar de tener trabajos de 9 a 5 exigentes</strong>."</p>
                      <p className="text-zinc-400 text-sm mt-1">Filtra a quienes no tienen trabajo de 9 a 5, y asegura que el prospecto tiene ingresos para pagar el servicio.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mt-6">
                  <h4 className="font-bold text-white text-lg">Donde este concepto se aplica en el formulario:</h4>
                  <p className="text-zinc-300">Pedir datos de contacto (nombre, email, teléfono) está en el extremo comprometido del espectro. Si empezás el formulario por ahí, la resistencia es máxima.</p>
                  <p className="text-zinc-300">Si en cambio empezás con "¿Cuál de estas te describe mejor?" con cuatro opciones de problemas comunes, estás empezando en el extremo curioso. Slide a slide, pregunta a pregunta, vas empujando al prospecto hacia arriba en la escala. Para cuando llegan al campo "teléfono", ya respondieron 6-7 preguntas y se sienten "pot-committed" — ya dieron tanta información que dar el teléfono parece razonable.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-[#D5B15B] text-lg">Los loops abiertos:</h4>
                  <p className="text-zinc-300">Los humanos odian los loops abiertos. Hay autores de novelas que terminan el capítulo en medio de una oración — para obligarte a comprar el siguiente libro y cerrar ese loop. Aplicado a publicidad: en tus anuncios y en tu contenido, abrí loops que el prospecto necesite cerrar. Eso es lo que los mantiene enganchados y avanzando por el embudo.</p>
                </div>
              </div>
            </section>

            <section id="section-24">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Dumbbell size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Principio 9: Physical and Psychological Resistance</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-8">
                <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-5 rounded-xl">
                  <p className="text-[#D5B15B] font-bold">El favorito de Brandon. Y el más accionable para mejorar la tasa de conversión en la landing page.</p>
                  <p className="text-zinc-300 mt-2">Hay siempre un balance entre cantidad de leads y calidad de leads. Para ajustar ese balance, ajustás la resistencia física y psicológica.</p>
                </div>
                
                <div className="space-y-6">
                  <h4 className="font-bold text-white text-2xl flex items-center gap-2"><Activity className="text-zinc-500" size={20} /> Resistencia Física</h4>
                  <p className="text-zinc-300">Son las cosas que el prospecto tiene que hacer <strong>físicamente</strong>. Se divide en tres:</p>
                  
                  <div className="space-y-4 pl-4 border-l-2 border-zinc-800">
                    <div>
                      <h5 className="font-bold text-white text-lg">1. Clics:</h5>
                      <p className="text-zinc-300">Cada clic adicional que requerís reduce la tasa de conversión. Si tenés un botón "Aplicar ahora" que abre otra página donde recién aparece el formulario, acabas de agregar un clic innecesario. Embebé el formulario directamente en la página y eliminá ese clic.</p>
                      <p className="text-zinc-400 text-sm mt-2">Micro-detalle: Tener campos separados de "nombre" y "apellido" en lugar de un solo campo "nombre completo" añade un clic extra. El VSSL en la landing page: configurá el autoplay para eliminar el clic de darle play.</p>
                    </div>
                    
                    <div>
                      <h5 className="font-bold text-white text-lg mt-6">2. Keystrokes (Teclas a tipear):</h5>
                      <p className="text-zinc-300">Las preguntas de texto libre tienen mucho más abandono que las preguntas de opción múltiple. La opción múltiple elimina el esfuerzo cognitivo de pensar qué tipear. Convertí preguntas de texto libre en preguntas de opción múltiple siempre que sea posible.</p>
                    </div>
                    
                    <div>
                      <h5 className="font-bold text-white text-lg mt-6">3. Scrolls:</h5>
                      <p className="text-zinc-300"><strong>100% de las personas ven lo que está sobre el fold (pliegue).</strong> A medida que bajás en la página, el porcentaje cae. Quizás solo el 5% llega al final de la página. Si tu formulario está al final de la página, solo el 5% lo encuentra. Solución: movelo encima del fold o justo debajo.</p>
                    </div>
                  </div>
                </div>

                <hr className="border-zinc-800" />

                <div className="space-y-6">
                  <h4 className="font-bold text-white text-2xl flex items-center gap-2"><BookOpen className="text-zinc-500" size={20} /> Resistencia Psicológica</h4>
                  <p className="text-zinc-300">Son las cosas que pasan en la mente del prospecto. Se divide en tres sub-categorías:</p>
                  
                  <div className="space-y-6 pl-4 border-l-2 border-zinc-800">
                    <div>
                      <h5 className="font-bold text-white text-lg">1. Thought (Pensamiento):</h5>
                      <p className="text-zinc-300 mb-2">¿Cuántas calorías necesita quemar mi cerebro para llegar a la conclusión que vos querés?</p>
                      <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                        <li>Los bloques de texto largo en la landing page son un problema. La gente escanea, no lee.</li>
                        <li>Las imágenes son procesar mucho más fácil que el texto. Las imágenes activan el sistema emocional del cerebro más rápido. (Versión B con fotos casi duplicó la conversión).</li>
                        <li><strong>El VSSL:</strong> La curva de atención en un VSSL cae drásticamente. El 50% se va antes de los 30 segundos. El esfuerzo de edición y producción debe ser <strong>desproporcionadamente mayor</strong> en esos primeros 30 segundos.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-bold text-white text-lg mt-6">2. Trust (Confianza):</h5>
                      <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                        <li><strong>Testimonios en texto:</strong> Fáciles de falsificar.</li>
                        <li><strong>Screenshots de mensajes reales:</strong> Mucho más difíciles de dudar. Nombre completo + handle de Instagram lo hace verificable.</li>
                        <li><strong>Google reviews embebidas:</strong> Embebelas de verdad, no copies y pegues.</li>
                        <li><strong>Hablar de lo negativo:</strong> Repasar las peores reseñas genera más confianza que solo hablar maravillas.</li>
                        <li><strong>Imagen de fondo de landing page:</strong> Completamente subestimada. (Fondo negro → Peor; Imágenes de stock → Algo mejor; Fotos reales de vos → Mucho mejor; Fotos reales presentando ante audiencias → Mejor aún).</li>
                        <li><strong>Hacer que los testimonios sean relevantes:</strong> Poné en el thumbnail la industria o sector (ej. "Coach online de fitness masculino"), no el nombre de la persona.</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-bold text-white text-lg mt-6">3. Curious vs. Committed (en el contexto de la página):</h5>
                      <p className="text-zinc-300 mb-2">El lenguaje del CTA (call to action) tiene un impacto enorme:</p>
                      <ul className="list-disc pl-5 text-zinc-300 space-y-1">
                        <li>"Contactanos" → Muy comprometido. Genera fricción.</li>
                        <li>"Inquirir ahora" → Todavía demasiado comprometido.</li>
                        <li>"Empezá tu aplicación" → Mejor, pero puede sentirse formal.</li>
                        <li>"Respondé unas preguntas..." → Comunica proceso paso a paso.</li>
                        <li><strong>"Tomá el próximo paso"</strong> → Simple, orienta hacia adelante.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="section-25">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <ArrowUpCircle size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Principio 10: Chasing Problems Upstream</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                
                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg">La analogía del libro "Profit First":</h4>
                  <p className="text-zinc-300">La contabilidad es un <strong>indicador de retraso (lag indicator)</strong>. No sabés que tuviste un mes malo hasta que reconciliás las cuentas del mes pasado.</p>
                  <p className="text-zinc-300">La publicidad puede caer en el mismo error. Cuando hay un problema en un paso específico del embudo, la tentación es ir directamente a ese paso y cambiar cosas. Pero muchas veces ese problema es el síntoma de un lag indicator de algo que salió mal en un paso anterior.</p>
                </div>

                <div className="space-y-4 mt-6">
                  <h4 className="font-bold text-white text-lg">Ejemplos concretos:</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="font-bold text-white mb-2">Tasa de conversión baja en landing page:</p>
                      <p className="text-zinc-300 text-sm">¿Es la persona correcta? Si tus anuncios son muy "curiosos" y prometieron algo ambiguo, llega gente que no esperaba lo que encontró. El problema real está upstream, en el anuncio.</p>
                    </div>
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="font-bold text-white mb-2">Tasa de show baja:</p>
                      <p className="text-zinc-300 text-sm">¿Qué expectativa se estableció en la página de booking? ¿Quedó claro de qué se trataba la llamada? O la persona reservó sin entender bien qué iba a pasar.</p>
                    </div>
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="font-bold text-white mb-2">Objeciones recurrentes en llamadas:</p>
                      <p className="text-zinc-300 text-sm">Si siempre dicen "necesito preguntarle a mi pareja", esa objeción debería estar resuelta antes de llegar a la llamada, en la secuencia de nurturing o en el anuncio.</p>
                    </div>
                    <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                      <p className="font-bold text-white mb-2">Leads de mala calidad:</p>
                      <p className="text-zinc-300 text-sm">Si consistentemente no pueden pagar, el problema está en los primeros segundos del anuncio — en el lenguaje que no filtra correctamente.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1A1A1E] border-l-4 border-[#D5B15B] p-5 rounded-xl mt-6">
                  <h4 className="font-bold text-white mb-3">El flujo correcto del diagnóstico:</h4>
                  <ol className="list-decimal pl-5 text-zinc-300 space-y-1">
                    <li>Identificá la métrica con peor performance</li>
                    <li>Intentá resolverla directamente (cambios en ese paso)</li>
                    <li>Simultáneamente, preguntate: ¿Podría esto ser un lag indicator de algo anterior?</li>
                    <li>Revisá el paso previo con esa lente</li>
                    <li>Seguí hacia atrás hasta el anuncio si es necesario</li>
                  </ol>
                </div>

              </div>
            </section>

            <section id="section-26">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Meta-Lección de los 10 Principios</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">
                  Brandon cierra esta sección con una reflexión importante: ahora que conocés estos principios, cada vez que mirés un elemento de tu estrategia — un anuncio, una landing page, una pregunta del formulario, una secuencia de emails — podés mirarlo a través de estos lentes y diagnosticar qué está funcionando y qué no.
                </p>
                <p className="text-zinc-300">
                  No son reglas con respuestas correctas. Son <strong>marcos de pensamiento</strong> que te dan estructura para hacer las preguntas correctas. Y la diferencia entre un anunciante que actúa por intuición y uno que entiende estos principios no está en el presupuesto ni en la herramienta — está en la capacidad de ver el problema correcto y saber dónde intervenir.
                </p>
                <div className="bg-[#1A1A1E] border border-zinc-800 p-6 rounded-xl">
                  <p className="text-zinc-300 italic text-[16px]">
                    El objetivo final es dejar de ver la publicidad como un conjunto de partes aisladas sin relación entre sí, y empezar a verla como lo que es: <strong>un sistema holístico e interconectado</strong> donde cada elemento afecta a todos los demás, y donde la clave del éxito no es optimizar uno sino encontrar el equilibrio correcto entre todos.
                  </p>
                </div>
              </div>
            </section>

            <section id="section-27">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <UserCircle size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Contexto y mentalidad previa</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Antes de empezar, Brandon aclara que aunque el ejemplo es el negocio específico de Sev (enseñar a dueños de negocios a crear contenido orgánico), la audiencia debe evitar pensar "esto no aplica a mi rubro" y en cambio preguntarse "¿cómo hago que esto aplique a mí?".</p>
                <p className="text-zinc-300">La lógica de las preguntas es la misma aunque las respuestas cambien según el negocio. Recomienda hacer el ejercicio en papel mientras se sigue el video.</p>
              </div>
            </section>

            <section id="section-28">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Map size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Estructura del ejercicio (el dibujo)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Se dibuja un mono/palito en el centro de la hoja y alrededor:</p>
                <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                  <li><strong>Debajo del personaje:</strong> edad promedio del cliente ideal, ubicación/zona de servicio, y 2-3 descriptores (en el caso de Sev: dueño de negocio, negocio ya establecido, con autoridad/liderazgo en su industria). Brandon aclara que la segmentación por intereses en Meta ya casi no importa; lo que realmente targetea es el contenido del anuncio.</li>
                  <li><strong>Flecha a la derecha:</strong> motivadores "hacia" (towards) — lo que el cliente quiere lograr.</li>
                  <li><strong>Flecha a la izquierda:</strong> motivadores "de qué huye" (away from) — lo que quiere evitar (pasado, presente o futuro).</li>
                  <li><strong>Flecha arriba (por encima de la cabeza):</strong> intentos previos — cosas que ya probó y que no funcionaron o le resultaron frustrantes.</li>
                </ul>
              </div>
            </section>

            <section id="section-29">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <ArrowRight size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Motivadores "hacia" (lo que quiere lograr)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-8">
                <p className="text-zinc-300">Primero surgen tres ideas generales:</p>
                <ol className="list-decimal pl-5 text-zinc-300 space-y-2">
                  <li><strong>Confianza frente a cámara</strong> (para poder grabar contenido).</li>
                  <li><strong>Un sistema para crear</strong> contenido (porque sin uno se pierden y no saben por dónde empezar).</li>
                  <li><strong>Más leads orgánicos</strong>.</li>
                </ol>
                <p className="text-zinc-300">Luego se profundiza cada una con dos preguntas clave: <strong>"¿por qué?"</strong> y <strong>"¿y entonces qué pasa?"</strong> (sin buscar orden lógico, en modo asociación libre):</p>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-white text-xl">Confianza en cámara</h4>
                  <div className="pl-4 border-l-2 border-zinc-800 space-y-3">
                    <p className="text-zinc-300"><strong className="text-white">¿Por qué?</strong> Quieren mostrar lo que hacen a la audiencia que buscan atraer.</p>
                    <p className="text-zinc-300"><strong className="text-white">¿Entonces qué?</strong> Los descubre esa audiencia → genera engagement → genera conversación → atrae gente curiosa que se puede volver cliente.</p>
                  </div>
                  <p className="text-zinc-300 mt-3">También surge una escena concreta: alguien va a grabar, tartamudea, no sabe qué decir, se congela y no termina haciendo nada.</p>
                </div>

                <hr className="border-zinc-800" />

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-xl">Sistema para crear</h4>
                  <div className="pl-4 border-l-2 border-zinc-800 space-y-3">
                    <p className="text-zinc-300"><strong className="text-white">¿Por qué?</strong> Sin sistema no saben ni el primer paso, no saben por dónde arrancar.</p>
                    <p className="text-zinc-300"><strong className="text-white">¿Entonces qué?</strong> Con sistema, el proceso se vuelve sin fricción, pueden encadenar pasos y terminan con una gran cantidad de contenido para publicar. Y yendo un paso más allá: esa cantidad de contenido genera datos, esos datos muestran qué funciona, y eso permite pasar de simple cantidad a calidad (decisiones basadas en números y no en sensaciones).</p>
                  </div>
                  <p className="text-zinc-300 mt-3">También se menciona que al ser nuevos en esto, hay una zona de "no saben lo que no saben", con una relación evitativa hacia el tema.</p>
                </div>

                <hr className="border-zinc-800" />

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-xl">Más leads orgánicos</h4>
                  <div className="pl-4 border-l-2 border-zinc-800 space-y-3">
                    <p className="text-zinc-300"><strong className="text-white">¿Entonces qué?</strong> Se puede gastar menos en ads y agencias (bajar o cortar el retainer) → lo cual se traduce directamente en más ganancia neta (impacto en el estado de resultados).</p>
                  </div>
                  <p className="text-zinc-300 mt-3">Además: los leads orgánicos permiten hacer "A/B testing gratis" con el tiempo, generan abundancia de datos, permiten identificar qué video funcionó orgánicamente para reutilizarlo como anuncio pago (por lo tanto no solo se consiguen más leads orgánicos sino también mejores leads pagos), y generan más confianza/validez (la gente entra a Instagram a "stalkear" antes de comprar, si ven contenido real construyen más confianza). También agregan que cada vez más gente usa herramientas de IA (Claude, Gemini, ChatGPT) en lugar de Google para preguntar "quién es el mejor en mi ciudad para esto", y esas IA rastrean contenido orgánico, así que el contenido orgánico también alimenta ese canal.</p>
                </div>

                <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl space-y-3 mt-6">
                  <p className="text-zinc-300"><strong>Un punto adicional que surge (aportado por Sev):</strong> construir un sistema de marketing interno hace que el negocio en sí mismo valga más a nivel de valuación — se convierte en un activo (asset) propio. Si contratás una agencia y la despedís o se va, te lleva todos los datos y el sistema con ella; si lo construís puertas adentro, podés contratar freelancers para ejecutar tareas puntuales pero el sistema/activo sigue siendo tuyo, lo que reduce la vulnerabilidad del negocio. Esto sirve de puente hacia el lado opuesto del pizarrón.</p>
                </div>
              </div>
            </section>

            <section id="section-30">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <ArrowLeft size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Motivadores "de qué huye" (away from)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Se puede pensar en términos de tiempo (qué ya vivió, qué vive ahora, qué quiere evitar en el futuro) o simplemente como los opuestos de lo anterior:</p>
                
                <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                  <li>Huir de <strong>adivinar</strong> / de pagarle a alguien que "adivina" por vos sin conocer tu negocio tan bien como vos mismo (esto se agrupa bajo la idea de <strong>"dar vueltas en el aire" / estancarse</strong>).</li>
                  <li>Opuesto de confianza en cámara: <strong>ansiedad frente a cámara</strong>.</li>
                  <li>Opuesto de más leads orgánicos: <strong>mayor dependencia del gasto en ads</strong> y también <strong>dependencia del boca en boca</strong>.</li>
                </ul>

                <hr className="border-zinc-800 my-6" />

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-white text-lg">Estancarse/dar vueltas</h4>
                    <p className="text-zinc-300 mt-2"><strong className="text-white">¿Por qué?</strong> No saben qué hacer ni qué no saben, adivinan mal, se frustra y se rinden.<br/><strong className="text-white">¿Entonces qué?</strong> Desperdician tiempo y dinero en tráfico que no sirve, se estancan (plateau) o sienten que su negocio está fracasando o generando menos que antes.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Ansiedad en cámara</h4>
                    <p className="text-zinc-300 mt-2"><strong className="text-white">¿Por qué?</strong> No saben qué decir ni cómo decirlo. Ejemplo concreto: tardan una hora entera en grabar un solo video (el tiempo de creación es demasiado alto). Otro ejemplo es el <strong>miedo al juicio/crítica</strong>.<br/><strong className="text-white">¿Entonces qué?</strong> Directamente no actúan (inacción) → lo que termina en cero ingresos, cero ganancias, cero leads, cero ventas.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Dependencia de ads/boca en boca</h4>
                    <p className="text-zinc-300 mt-2">Se resume como depender de otras personas o de una plataforma para que alguien le cuente a alguien sobre vos — no tener control real sobre nada.</p>
                  </div>
                </div>

                <div className="bg-[#1A1A1E] border-l-4 border-[#D5B15B] p-5 rounded-xl mt-6">
                  <p className="text-zinc-300">Después de mapear ambos lados, se buscan conexiones entre los puntos. Sev resume todo con una frase que se convierte en la <strong>idea central/conclusión</strong> de todo el argumento: si no publicás contenido, tu negocio no crece. A partir de ahí, todos los puntos sueltos que fueron surgiendo pasan a funcionar como <strong>premisas de apoyo</strong> de ese argumento central (conectando con el principio explicado antes en el video de que un argumento fuerte necesita múltiples razones, no solo una).</p>
                </div>
              </div>
            </section>

            <section id="section-31">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <RotateCcw size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Intentos previos (top arrow)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Se le pide a Sev que piense en todo lo que su cliente ideal ya probó antes de llegar a él:</p>
                <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                  <li>Publicar una sola pieza de contenido, no tener vistas, y rendirse.</li>
                  <li>Pedirles referidos a clientes actuales o pasados — funcionó un tiempo pero después se estancó.</li>
                  <li>Pagarle a plataformas para "boostear" contenido orgánico de baja calidad — consiguió vistas pero no ventas.</li>
                  <li>Aprendizaje autodidacta / cursos a su propio ritmo.</li>
                  <li>Consultarle a ChatGPT.</li>
                  <li>Contratar a un creador de UGC.</li>
                  <li>Delegarle la tarea a una recepcionista.</li>
                  <li>Y el más importante: <strong className="text-red-400">contratar una agencia</strong> — quemaron mucho dinero (se menciona la cifra de $15.000) y no consiguieron leads.</li>
                </ul>
                <div className="bg-[#1A1A1E] border border-zinc-800 p-6 rounded-xl mt-6">
                  <p className="text-zinc-300"><strong>La razón por la que esto importa:</strong> el cliente ya tiene ideas preconcebidas y va a intentar meterte en la misma "categoría" de lo que ya probó y no le funcionó (por ejemplo, pensar "este es un course bro más"). Por eso hay que abordar esas experiencias previas directamente en los anuncios, en la landing page y en las secuencias de nutrición, en vez de ignorarlas.</p>
                </div>
              </div>
            </section>

            <section id="section-32">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Otra objeción que surge: la delegación</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Sev plantea una objeción realista: "me encanta el sistema, ya entiendo cómo hacerlo, pero igual quiero delegarlo". Brandon lo usa como ejemplo de cómo se debate una objeción:</p>
                
                <div className="bg-[#1A1A1E] border-l-4 border-[#D5B15B] p-5 rounded-xl">
                  <p className="text-zinc-300">El argumento es que primero hay que entender el proceso antes de delegarlo, porque si delegás a ciegas no vas a saber si la persona a la que le delegaste hizo un buen trabajo. Además, cuando alguien intentó delegar antes sin tener el sistema claro, la persona contratada tampoco sabía lo que no sabía.</p>
                </div>
                
                <p className="text-zinc-300">Su oferta resuelve esto: primero enseña el sistema, y una vez que existe internamente, delegar partes del proceso se vuelve mucho más fácil. Como prueba, menciona el caso de un cliente que aprendió el sistema, contrató a un videógrafo al que Sev entrenó, y tres meses después consiguió dos clientes de $50.000 de forma orgánica.</p>
                <p className="text-zinc-300">También menciona, ya casi al cierre, que uno de los mayores cuellos de botella reales es la <strong>edición</strong>: la gente piensa en todo el proceso completo (incluida la edición) y por eso ni siquiera arranca a grabar o idear contenido; y si llegan a la etapa de edición, muchas veces no saben usar CapCut — algo que también enseña en el programa.</p>
              </div>
            </section>

            <section id="section-33">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Técnica adicional mencionada</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Brandon sugiere revisar si algún cliente o prospecto dijo alguna vez algo que llamó la atención ("eso fue interesante") y usarlo como pista, aplicando el principio de que si una persona lo dijo, probablemente mil personas lo pensaron sin decirlo.</p>
              </div>
            </section>

            <section id="section-34">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <CheckSquare size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Cierre de la sección</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Con esto, el pizarrón —que empezó vacío— termina lleno de una lista sólida de razones por las que alguien debería contratar el servicio, y de razones por las que debería dejar de seguir haciendo lo que ya venía haciendo (porque, según explican, la gente naturalmente tiende a volver a sus viejos hábitos si no se le dan suficientes motivos: el costo de no actuar tiene que superar claramente al costo de cambiar).</p>
                <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-6 rounded-xl text-center">
                  <p className="text-zinc-300 text-lg">A partir de acá, el video pasa a la siguiente etapa: convertir todo este mapeo del avatar en un mensaje concreto usando la fórmula <strong>"cosa / resultado / sentimiento"</strong> para el título de la landing page.</p>
                </div>
              </div>
            </section>

            <section id="section-35">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Introducción y objetivo</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Brandon plantea que, ya definido a quién le hablan (customer avatar), el siguiente paso es que Sev aprenda a comunicar su oferta de forma <strong>no puramente lógica/analítica</strong>. Retoma la idea que había mencionado antes: los publicistas mediocres solo hablan de la <strong>cosa</strong> (features/características); los publicistas algo mejores hablan de <strong>resultados y outcomes</strong>; y los realmente buenos conectan ese resultado con un <strong>sentimiento/emoción</strong> que la persona busca o quiere evitar activamente.</p>
                <p className="text-zinc-300">Para trabajar esto, dividen el pizarrón en tres columnas: <strong>Cosa (Thing) / Resultado (Result) / Sentimiento (Feeling)</strong>. Otra vez insiste en la misma consigna que en el avatar: aunque las respuestas de Sev sean distintas a las de cada oyente, el proceso mental de pensarlo es el mismo, así que cada uno debería hacerse las mismas preguntas para su propio negocio.</p>
              </div>
            </section>

            <section id="section-36">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <FileText size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Columna 1: La Cosa (Thing)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Primero le pide a Sev que explique su oferta en términos simples, sin entrar todavía en resultados: <strong>"enseñar a tu equipo interno de marketing o a vos como dueño de negocio a crear contenido orgánico que venda para tu negocio."</strong></p>
                
                <p className="text-zinc-300">Después arman la lista de features/formato bajo esta columna:</p>
                
                <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                  <li><strong>Formato de entrega</strong>: talleres (workshops), que pueden ser:
                    <ul className="list-[circle] pl-6 mt-2 space-y-1 text-zinc-400">
                      <li>Online en vivo (live stream) — para Sev, ya que su modelo es así.</li>
                      <li>Uno a uno presencial.</li>
                      <li>Uno a muchos (grupal), pensado para negocios más chicos.</li>
                    </ul>
                  </li>
                  <li><strong>Currículum / qué se aprende</strong> (sin hablar todavía de resultados, solo contenido):
                    <ul className="list-[circle] pl-6 mt-2 space-y-1 text-zinc-400">
                      <li><strong>Lenguaje de marca optimizado</strong>: aprender a identificar la identidad de marca y a hablarle al cliente actual o futuro en el lenguaje que ellos quieren escuchar.</li>
                      <li><strong>Ideación</strong>: cómo generar ideas orgánicas que hablen ese lenguaje — Sev menciona que generan más de <strong>100 ideas</strong>, mezclando trabajo manual, brainstorming, scraping de internet y uso de IA.</li>
                    </ul>
                  </li>
                  <li><strong>Quién, qué, dónde, cuándo, cómo</strong> (otra forma de desglosar la "cosa"):
                    <ul className="list-[circle] pl-6 mt-2 space-y-1 text-zinc-400">
                      <li><strong>Quién</strong>: dueños de negocio ya establecidos.</li>
                      <li><strong>Qué</strong>: los talleres y sus variaciones.</li>
                      <li><strong>Dónde</strong>: online (live) o presencial.</li>
                      <li><strong>Cómo</strong>: acceso a un workbook digital de por vida (actualizado vía Notion), repartido en 1-2 días, con una mezcla de teoría pero mayormente práctica.</li>
                    </ul>
                  </li>
                  <li><strong>La parte práctica en concreto</strong>: los asistentes filman entre varios videos y hasta 20, aprenden a editar, y terminan con 7 borradores listos en su canal de redes sociales.</li>
                  <li><strong>Qué pasa después del taller</strong>: se agrega una <strong>estrategia de delegación</strong> (cómo contratar y hacer onboarding a un social media manager interno, o cómo comunicarse correctamente con un videógrafo o un equipo de edición para que no la caguen).</li>
                  <li><strong>6 meses de soporte posteriores</strong>, vía WhatsApp (y eventualmente vía una comunidad tipo "school"). Este soporte incluye: revisar videos antes de publicarlos y dar feedback para tener más confianza al postear; analizar por qué un video funcionó bien; analizar por qué un video (o tanda de videos) no funcionó; cómo responder a un DM; y cómo convertir una nueva oleada de seguidores de curiosos a comprometidos ("curious to committed").</li>
                </ul>
              </div>
            </section>

            <section id="section-37">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Columna 2: El Resultado (Result)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Brandon aclara que acá todavía no se habla de sentimiento, solo de <strong>outcomes tangibles</strong>. Sev tira primero las llamadas "vanity metrics" (por ser la tendencia actual, aunque él mismo reconoce que son secundarias):</p>
                
                <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                  <li>Aumento de <strong>vistas</strong>.</li>
                  <li>Aumento de <strong>engagement</strong>.</li>
                  <li>Aumento de <strong>consultas/inquiries</strong>.</li>
                  <li>Y lo más importante: <strong>aumento de ventas</strong>.</li>
                </ul>

                <p className="text-zinc-300">Brandon empuja a ir más allá de solo "views" o "engagement" (que es lo que suelen vender agencias de contenido o videógrafos —"construir marca"— sin conectar eso con nada concreto) y aplica de nuevo la técnica del <strong>"¿y entonces qué pasa?"</strong>:</p>

                <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                  <li>El resultado de más vistas es entender <strong>por qué</strong> subieron las ventas, lo cual retroalimenta y potencia aún más las futuras vistas (efecto bola de nieve, igual que en la sección del avatar).</li>
                  <li>Se etiquetan dos categorías de resultados: <strong>vanity metrics</strong> y <strong>revenue metrics</strong> (esta última es la que realmente importa).</li>
                  <li>Otro resultado: tener un <strong>sistema de gestión de contenido interno</strong>.</li>
                  <li>Más resultados: <strong>más clientes</strong> y <strong>más reconocimiento de marca</strong> (brand awareness) creciente.</li>
                  <li>Y un resultado adicional muy concreto que Sev trae de su propia experiencia: <strong>creativos de ads optimizados</strong>. Ejemplo real: un video se viralizó, pero la audiencia que lo vio masivamente era de EE.UU. cuando sus clientes reales están en Perth. La solución fue tomar ese mismo video (ya validado orgánicamente) y correrlo como anuncio pago, pero targeteando geográficamente Perth. Resultado: clientes reales.</li>
                </ul>
              </div>
            </section>

            <section id="section-38">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Heart size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Columna 3: El Sentimiento (Feeling)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Se pregunta qué emociones dicen sentir los clientes cuando logran esos resultados:</p>
                <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                  <li><strong>"Overwhelmed" (abrumados) por la cantidad de leads.</strong> Este es el que Brandon y Sev identifican como el más fuerte/compelling de todos.</li>
                  <li><strong>Claridad</strong> — ya no tienen que adivinar.</li>
                  <li><strong>Más predecible</strong> — el marketing se siente más fácil.</li>
                  <li><strong>Entusiasmo</strong> por la próxima pieza de contenido.</li>
                  <li>Y el sentimiento clave que Sev quiere lograr en sus clientes: la <strong>adicción</strong> a seguir creando contenido, tal como le pasó a él mismo cuando consiguió su primer lead orgánico — es el mismo proceso al que quiere llevar a sus propios clientes.</li>
                </ul>
              </div>
            </section>

            <section id="section-39">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Construcción del titular (headline)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Brandon retoma la fórmula que había mencionado antes en el video: <strong>Headline = Resultado + Sentimiento</strong>. La instrucción es mirar todo lo escrito en las tres columnas y elegir <strong>un</strong> sentimiento y <strong>un</strong> resultado, los dos que más se destaquen:</p>
                
                <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                  <li>Sentimiento elegido: "overwhelmed" (abrumado) con leads.</li>
                  <li>Resultado elegido: "más clientes".</li>
                </ul>

                <p className="text-zinc-300">Brandon hace notar que en realidad ambos son la misma cosa expresada distinto ("conseguís tantos clientes que te sentís abrumado por la cantidad"), y que de ahí sale directamente el titular en borrador. Sev lo dice él mismo casi textual y Brandon lo toma como el titular:</p>

                <div className="bg-[#D5B15B]/10 border-l-4 border-[#D5B15B] p-6 rounded-r-xl my-6">
                  <p className="text-[#D5B15B] text-xl italic font-bold">"Creá tanto contenido que te abrume la cantidad de clientes."</p>
                </div>

                <p className="text-zinc-300">En este punto surge una pregunta lateral de Sev sobre integridad/expectativas: ¿qué tan rápido pasa esto en la realidad? Brandon responde que con ads los resultados son instantáneos, pero con contenido orgánico depende, y que esa diferencia se maneja <strong>gestionando expectativas</strong> en otro lugar (secuencias de nutrición, landing page, FAQ, proceso de venta) y no en el titular en sí. A nivel de titular, con que comunique el resultado y el sentimiento alcanza.</p>
              </div>
            </section>

            <section id="section-40">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <List size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">El sub-headline</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Brandon explica que, debajo del titular grande (lo "macro"), la mirada de la persona necesita algo "ligeramente menos macro" que explique <strong>cómo</strong> se logra ese resultado — sin sobrepensarlo, solo una o dos frases. Sev propone un primer borrador:</p>
                
                <div className="bg-[#1A1A1E] p-5 rounded-xl text-center italic border border-zinc-800">
                  <p className="text-zinc-300">"Talleres de dos días para idear más de 100 ideas e implementarlas antes de irte."</p>
                </div>

                <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl space-y-3">
                  <p className="text-zinc-300">Brandon aprovecha para dar un <strong>tip de flujo de trabajo</strong>: en vez de tratar de armar la frase perfecta pensando, conviene escribir primero un borrador feo/crudo, mirarlo, sentir un poco de vergüenza por lo mal redactado que está, y a partir de ahí "remixarlo" hasta algo publicable — es mucho más fácil editar palabras que ya están en la página que estar rebotando versiones en la cabeza.</p>
                </div>

                <p className="text-zinc-300">Luego pulen juntos el sub-headline incorporando el resultado (más clientes / overwhelmed con leads) conectado al mecanismo (los talleres en vivo, presenciales u online). Brandon aclara que en este nivel de la página no hace falta entrar en detalle de si es presencial u online — eso lo van a resolver más abajo con las FAQ y otras secciones — alcanza con que la persona piense "me gusta la idea de los talleres" y siga leyendo o baje a buscar esa información.</p>
              </div>
            </section>

            <section id="section-41">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <CheckSquare size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Cierre de la sección</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Con el titular y el sub-headline definidos, Brandon cierra diciendo que ahora que tienen el mensaje resuelto, el paso siguiente es convertir ese mensaje en una <strong>landing page de alta conversión</strong> (que es exactamente lo que arrancan a construir en la sección siguiente del video).</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
