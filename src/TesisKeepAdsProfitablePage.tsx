import { TableOfContents } from './components/TableOfContents';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Columns, Maximize2, PanelTop, Target, CheckCircle2, AlertTriangle, PlayCircle, Zap, ShieldAlert, Crosshair, Users, LineChart, MessageSquare, TrendingUp, RefreshCw, Filter, Copy, ArrowDownToLine, MousePointerClick, BarChart } from 'lucide-react';

const ArcadiaLogo = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15.41 3.53H19.78L12.35 18.06H7.98L15.41 3.53Z" />
    <path d="M6.02 12.37H10.39L8.21 16.65H3.84L6.02 12.37Z" />
  </svg>
);

export const TesisKeepAdsProfitablePage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {
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
        {"id":"section-0","title":"Planteamiento del problema"},
        {"id":"section-1","title":"El concepto central: todo es un gráfico de probabilidades"},
        {"id":"section-2","title":"El sistema de \"3 buckets\" (baldes/franjas de audiencia)"},
        {"id":"section-3","title":"Las 4 soluciones, en orden de simplicidad"},
        {"id":"section-4","title":"Resumen del orden de aplicación"}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">The BEST Strategy To Keep Ads Profitable [FOREVER]</h2>
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
              src="https://www.youtube.com/embed/fSmb3vHw0xw" 
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
                 Planteamiento del problema
              </h3>
              <p className="text-[16px] text-zinc-300 leading-relaxed">
                El creador arranca con el problema típico que le plantean alumnos y clientes: al principio de una campaña llega gente muy calificada de forma consistente, y de repente, sin razón aparente, hay una caída fuerte en la calidad. El video explica por qué pasa esto y da una metodología en 4 pasos para revertirlo.
              </p>
            </section>

            <section id="section-1">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <BarChart size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">El concepto central: todo es un gráfico de probabilidades</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
                <p className="text-[16px] text-zinc-300">
                  Cualquier plataforma (Facebook, Instagram, TikTok, Google Ads, LinkedIn) funciona igual: es una "máquina de predicción" que, sin importar si el píxel/cuenta es nuevo o tiene años y millones gastados, <strong>siempre le da al anunciante sus mejores resultados posibles al principio de una campaña</strong>. Esto es simplemente el incentivo del sistema: la plataforma quiere mostrar resultados rápido para que sigas gastando.
                </p>
              </div>
            </section>

            <section id="section-2">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Filter size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">El sistema de "3 buckets" (baldes/franjas de audiencia)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-10">
                
                <div>
                  <h4 className="text-xl font-bold text-[#D5B15B] mb-4 flex items-center gap-2">
                     Bucket 1 — la gente más calificada
                  </h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                    <li>Es aproximadamente el <strong>1-3% del total de la audiencia</strong> targeteada, la que tiene mayor probabilidad de convertir según el algoritmo.</li>
                    <li>Es a la que se llega primero siempre.</li>
                    <li>Esta ventana puede durar <strong>días, semanas o hasta meses</strong>, dependiendo de: (a) el nivel de gasto, y (b) la estructura de campaña (tipo de campaña, cantidad de ad sets, tamaño de audiencia).</li>
                    <li>Regla general: mucho gasto en poco tiempo acorta esta ventana (ej. clientes que gastaron cientos de miles de dólares en 2 semanas comprimieron ciclos de 1-3 meses a solo días/semanas). Audiencias muy nicho (decenas/cientos de miles de personas) también acortan la ventana.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#D5B15B] mb-4 flex items-center gap-2">
                     Bucket 2 — la franja media
                  </h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                    <li>Se entra acá cuando ya se "agotó" el 1-3% más probable.</li>
                    <li>Representa aproximadamente del <strong>3% al 12%</strong> del total de la audiencia.</li>
                    <li>Son personas con menor probabilidad de conversión, pero <strong>no es un balde malo</strong> — se puede seguir siendo muy rentable y escalar agresivamente acá.</li>
                    <li>Suele durar más que el bucket 1: típicamente <strong>3 a 6 meses</strong>.</li>
                    <li>Señales de estar en bucket 2: empiezan a aparecer pequeñas fluctuaciones — el AOV (valor promedio de orden) varía un poco más, el ratio de calificación de leads empieza a tener días irregulares (algunos "turds"/gente floja se cuela), pero el ROAS general sigue bien. Son "grietas en la base" que todavía no preocupan.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                     Bucket 3 — la franja de baja probabilidad
                  </h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-3 mb-6">
                    <li>Es el resto: del <strong>12% al 100%</strong> de la audiencia restante, la de menor probabilidad de conversión según el algoritmo.</li>
                    <li>Acá es donde aparece la meseta (plateau) y después la <strong>caída real</strong>: el ratio de calificación cae fuerte, el AOV y el ROAS "caen como piedra".</li>
                    <li>En este bucket hay dos caminos: dejar correr la ola hasta que se estrelle, o (mejor) aplicar de forma preventiva las soluciones que el video va a dar.</li>
                  </ul>
                  <div className="bg-[#1A1A1E] border-l-4 border-l-[#D5B15B] p-5 rounded-r-xl mt-4">
                    <p className="text-[15px] text-zinc-300">
                      <strong>Nota importante</strong>: el gráfico no es lineal fijo — es dinámico y depende de la combinación específica de tamaño de audiencia, nivel de gasto y objetivo de conversión elegido.
                    </p>
                  </div>
                </div>

              </div>
            </section>

            <section id="section-3">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Las 4 soluciones, en orden de simplicidad (de más simple a más avanzada)</h3>
              </div>
              
              <div className="space-y-6">
                
                <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 shadow-lg">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1A1A1E] border border-[#D5B15B]/50 flex items-center justify-center text-[#D5B15B] text-sm">1</div>
                    1. Relanzamiento simple (Simple Relaunch)
                  </h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-3 ml-2">
                    <li>La solución más básica: duplicar la campaña, publicarla, esperar aprobación, y apagar la campaña vieja.</li>
                    <li>Cada vez que se relanza una campaña, la plataforma vuelve a "apostar a favor" del anunciante con el mismo boost inicial de bucket 1.</li>
                    <li>Es la primera opción a probar siempre.</li>
                  </ul>
                </div>

                <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 shadow-lg">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1A1A1E] border border-[#D5B15B]/50 flex items-center justify-center text-[#D5B15B] text-sm">2</div>
                    2. Protocolo de fatiga de anuncio (Ad Fatigue Protocol)
                  </h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-3 ml-2">
                    <li>Mismo concepto que el relanzamiento, pero además de relanzar, <strong>se cambian los videos/imágenes</strong> (los creativos).</li>
                    <li>Definición de "ad fatigue": el volumen de resultados cae y el costo por resultado sube, y generalmente <strong>no vuelve nunca</strong> a lo que era antes de la fatiga si no se actúa.</li>
                    <li>Como las plataformas no pueden "avisarte por teléfono" que cambies los creativos, te lo comunican a través de las estadísticas (caída de volumen + suba de costo).</li>
                    <li>Solución: relanzar la campaña, ir al nivel de anuncio, sacar los creativos viejos, meter creativos nuevos, publicar, esperar aprobación, y apagar la campaña vieja.</li>
                    <li>El ad fatigue es descripto como <strong>uno de los mayores culpables</strong> de que baje la calidad de la gente que entra al funnel con el tiempo.</li>
                  </ul>
                </div>

                <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 shadow-lg">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1A1A1E] border border-[#D5B15B]/50 flex items-center justify-center text-[#D5B15B] text-sm">3</div>
                    3. Protocolo de fatiga de audiencia (Audience Fatigue Protocol)
                  </h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-3 ml-2">
                    <li>Se prueba <strong>después</strong> de aplicar el protocolo de fatiga de anuncio (por eso está en tercer lugar, no antes) — si tras relanzar con creativos nuevos el costo por resultado y la calidad NO vuelven a los niveles previos, probablemente sea fatiga de audiencia.</li>
                    <li>Definición: la audiencia específica a la que le estás pegando ya se quedó sin gente probable de convertir.</li>
                    <li>Otra señal: si el protocolo de fatiga de anuncio "funciona" pero las campañas mueren mucho más rápido que antes históricamente, también es señal de fatiga de audiencia.</li>
                    <li>Solución: <strong>ampliar la audiencia, agregar a la audiencia, o cambiarla directamente</strong> — en esencia, aumentar la cantidad de gente probable de convertir agregando más personas al pool.</li>
                  </ul>
                </div>

                <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 shadow-lg">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1A1A1E] border border-red-500/50 flex items-center justify-center text-red-400 text-sm">4</div>
                    4. Fatiga de funnel (Funnel Fatigue) — la más rara y la más avanzada
                  </h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-3 ml-2">
                    <li>Concepto de "majority hook" (gancho mayoritario): al testear creativos, el objetivo ideal es encontrar el hook/ángulo que resuena con la <strong>mayor cantidad de gente posible</strong> dentro de la audiencia, en vez de apuntar a ganchos que solo le hablan a fracciones chicas.</li>
                    <li>A medida que uno relanza campañas con creativos nuevos una y otra vez, en la práctica está "probando" distintos hooks. El hook mayoritario eventualmente se "ordeña" del todo (la gente ya vio el funnel demasiadas veces), luego se pasa al segundo hook mayoritario, y así sucesivamente hasta quedar trabajando solo con "hooks minoritarios" — fracciones cada vez más chicas de la audiencia total.</li>
                    <li>Cuando ya se agotaron los hooks y se agotó también la ampliación de audiencia posible, la señal es que <strong>hay que cambiar de tipo de funnel completo</strong>, no solo el headline o el creativo. Ejemplos que da:
                      <ul className="list-circle pl-6 mt-2 space-y-1 text-zinc-400">
                        <li>Si venís corriendo funnel de webinar hace tiempo → pasar a funnel de llamada (call funnel).</li>
                        <li>Si venís con call funnel hace mucho → pasar a webinar en vivo.</li>
                        <li>Si venís con webinar en vivo → pasar a productos de bajo ticket con upsell a producto de alto ticket.</li>
                        <li>Si ya probaste las tres cosas → pasar a una estrategia de anuncios por DM.</li>
                      </ul>
                    </li>
                    <li className="mt-4">Idea de fondo: <strong>evitar ser "un banquito de una sola pata"</strong> (one-legged stool) — es decir, no depender de un solo tipo de funnel para convertir clientes. Idealmente se testean varios tipos de funnel en paralelo desde el principio, para poder rotar hacia el que mejor funcione cuando otro empieza a bajar.</li>
                  </ul>
                </div>

              </div>
            </section>

            <section id="section-4">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Resumen del orden de aplicación</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
                <ol className="list-decimal pl-5 text-white font-medium space-y-3 mb-6">
                  <li>Relanzamiento simple <span className="text-zinc-500 font-normal">(menos tiempo/esfuerzo)</span></li>
                  <li>Protocolo de fatiga de anuncio <span className="text-zinc-500 font-normal">(cambiar creativos)</span></li>
                  <li>Protocolo de fatiga de audiencia <span className="text-zinc-500 font-normal">(ampliar/cambiar audiencia)</span></li>
                  <li>Cambio de funnel <span className="text-zinc-500 font-normal">(más tiempo/esfuerzo, más raro que se necesite)</span></li>
                </ol>
                <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-5">
                  <p className="text-zinc-300 text-sm">
                    Cada paso se prueba en ese orden porque van de menor a mayor complejidad y esfuerzo requerido.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
