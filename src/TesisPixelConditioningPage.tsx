import { TableOfContents } from './components/TableOfContents';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Columns, Maximize2, PanelTop, Target, CheckCircle2, AlertTriangle, PlayCircle, Zap, ShieldAlert, Crosshair, Users, LineChart, MessageSquare, TrendingUp, RefreshCw, Filter, Copy, ArrowDownToLine, MousePointerClick, BarChart, Settings, Info } from 'lucide-react';

const ArcadiaLogo = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15.41 3.53H19.78L12.35 18.06H7.98L15.41 3.53Z" />
    <path d="M6.02 12.37H10.39L8.21 16.65H3.84L6.02 12.37Z" />
  </svg>
);

export const TesisPixelConditioningPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {
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
    <div className={`mx-auto w-full pb-20 animate-in fade-in duration-300 ${videoMode === 'side' ? 'max-w-[95%]' : 'max-w-4xl'}`}>
      <TableOfContents sections={[
        {"id":"section-0","title":"Presentación e intención del video"},
        {"id":"section-1","title":"Por qué importa el condicionamiento del píxel"},
        {"id":"section-2","title":"Eventos estándar vs. conversiones personalizadas"},
        {"id":"section-3","title":"El sistema de \"buckets\" aplicado al píxel"},
        {"id":"section-4","title":"Qué pasa después de superar la fase de condicionamiento"},
        {"id":"section-5","title":"Cómo recondicionar un píxel ya \"sucio\" — la estrategia \"Broky Bait\""},
        {"id":"section-6","title":"Caveat importante: el costo por resultado se va a \"inflar\""},
        {"id":"section-7","title":"Mapeo de eventos por etapa del funnel"},
        {"id":"section-8","title":"Caso real detallado"},
        {"id":"section-9","title":"Mensaje de cierre"}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">How To Turn Paid Ads Into a Money-Printing Machine (Pixel Conditioning)</h2>
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
              src="https://www.youtube.com/embed/KNIJal9GqGY" 
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
                 Presentación e intención del video
              </h3>
              <p className="text-[16px] text-zinc-300 leading-relaxed">
                Jeremy Haynes se presenta como fundador de una agencia con más de una década de experiencia, que llevó a casi 40 negocios a facturar $1M+/mes. Aclara (como siempre) que la probabilidad de lograr esto es baja (~0,1%), pero que las lecciones aumentan las probabilidades. El tema central: cómo condicionar (o <strong>recondicionar</strong>, si ya "ensuciaste" el píxel) el píxel para atraer consistentemente gente calificada.
              </p>
            </section>

            <section id="section-1">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <LineChart size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Por qué importa el condicionamiento del píxel</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
                <ul className="list-disc pl-5 text-zinc-300 space-y-4">
                  <li>Todo algoritmo publicitario usa el píxel para determinar a quién targetear después, y opera con <strong>sesgo de recencia</strong>: usa mucho más los datos recientes que el histórico acumulado.</li>
                  <li>Analogía: sería como si un negocio con meses de buen ROAS de repente tuviera un mes malo y actuara como si la estrategia entera dejara de funcionar, ignorando todo el historial positivo — así de "presente" es el sesgo del píxel.</li>
                  <li>El píxel es, en esencia, un mecanismo de <strong>reporte</strong>: comunica a la plataforma que alguien, fuera de ella, completó una acción (compra, agendó llamada, etc.) gracias al tráfico que se le envió.</li>
                </ul>
              </div>
            </section>

            <section id="section-2">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <ArrowDownToLine size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Eventos estándar vs. conversiones personalizadas</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-6">
                  <h4 className="font-bold text-white mb-2">Standard events (eventos estándar)</h4>
                  <p className="text-zinc-300 text-[15px]">
                    Ejemplos como Schedule, Complete Registration, Lead, Purchase, Add to Cart, Initiate Checkout, View Content, Submit Application, Search, Donate, App Install, etc. Estos aprovechan la base de datos histórica y masiva que ya tiene la plataforma sobre los usuarios.
                  </p>
                </div>
                <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-6">
                  <h4 className="font-bold text-white mb-2">Custom conversions (conversiones personalizadas)</h4>
                  <p className="text-zinc-300 text-[15px]">
                    Eventos definidos por el negocio, que pueden o no estar vinculados a un evento estándar. Ventaja: si el evento estándar históricamente trajo mucha gente no calificada, usar uno personalizado (no vinculado a ningún estándar) puede ser útil en la fase de recondicionamiento, porque la plataforma no tiene sesgo previo sobre ese evento y solo se guía por el targeting/mensaje/landing.
                  </p>
                </div>
                <div className="border-l-4 border-[#D5B15B] pl-5 mt-4">
                  <p className="text-zinc-300">
                    <strong>Preferencia del autor:</strong> usar <strong>eventos estándar</strong> por defecto, porque generalmente logra menor costo por resultado y mayor volumen — al aprovechar la base de datos gigantesca que la plataforma ya tiene sobre esos comportamientos específicos en millones de usuarios.
                  </p>
                </div>
              </div>
            </section>

            <section id="section-3">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Filter size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">El sistema de "buckets" aplicado al píxel</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
                <p className="text-[16px] text-zinc-300 font-medium mb-6">
                  Ejemplo con 100.000 personas: De una audiencia de 100.000 personas, solo un porcentaje (ejemplo hipotético: 10% para "Schedule", 20% para "Lead") es realmente probable que convierta en ese evento específico — cifras que varían mucho y son desconocidas hasta gastar dinero y ver la frecuencia.
                </p>
                <p className="text-[16px] text-zinc-300 mb-4">La plataforma recorre la audiencia en <strong>buckets</strong> (grupos):</p>
                
                <ul className="list-disc pl-5 text-zinc-300 space-y-3 mb-6">
                  <li><strong>Bucket 1</strong>: gente calificada — se muestra primero.</li>
                  <li><strong>Bucket 2</strong>: gente no calificada.</li>
                  <li><strong>Bucket 3</strong>: mezcla de ambos.</li>
                </ul>

                <p className="text-[16px] text-zinc-300 mb-6">
                  Con un píxel/evento <strong>sin historial</strong> (nuevo), el sistema predice quién es más probable de convertir y va rotando por estos buckets. Por eso muchos ven al principio buenos resultados, luego una caída (bucket 2, "turds"/gente floja), y después una recuperación parcial (bucket 3, mezcla) — algo que parece aleatorio pero no lo es.
                </p>

                <div className="bg-[#3A1414]/30 border border-red-500/20 rounded-xl p-6">
                  <p className="text-red-400 font-bold mb-2">Error crítico común:</p>
                  <p className="text-zinc-300 text-[15px]">
                    La mayoría de los anunciantes, al ver la caída del bucket 2, entran en pánico y hacen cambios reactivos sin entender que están en medio del <strong>proceso de condicionamiento</strong>. Los que sí entienden el proceso simplemente dejan correr el gasto.
                  </p>
                </div>
              </div>
            </section>

            <section id="section-4">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Qué pasa después de superar la fase de condicionamiento</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
                <ul className="list-disc pl-5 text-zinc-300 space-y-4">
                  <li>Ejemplo: si se gastaron $2.000 para atravesar la fase de condicionamiento y se acumularon suficientes conversiones calificadas reportadas al píxel, el sistema deja de "adivinar" (randomness) y empieza a buscar activamente <strong>gente similar</strong> a quienes ya convirtieron.</li>
                  <li>Entra en un <strong>cuarto bucket</strong>: gente calificada o altamente probable de serlo, y potencialmente <strong>más de las 100.000 personas originales</strong>, porque el sistema ahora tiene un perfil claro de a quién buscar y expande el pool.</li>
                  <li>Resumen de la lógica: si mandás "turds" (gente mala) al píxel, el sistema va a buscar más "turds". Si solo mandás gente calificada, va a buscar más gente calificada. No es magia, es condicionamiento.</li>
                </ul>
              </div>
            </section>

            <section id="section-5">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Settings size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Cómo recondicionar un píxel ya "sucio" — la estrategia "Broky Bait"</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
                
                <p className="text-[16px] text-zinc-300 mb-8">
                  Concepto clave: <strong>"broky bait"</strong> — una trampa/filtro para separar a la gente no calificada ("brokies" — gente sin plata o no calificada) de la calificada, <strong>antes</strong> de que el evento se reporte al píxel.
                </p>

                <h4 className="text-xl font-bold text-[#D5B15B] mb-4">Cómo implementarlo</h4>
                <ol className="list-decimal pl-5 text-zinc-300 space-y-4 mb-8">
                  <li>Agregar una pregunta de calificación (ej. "¿estás abierto a invertir X monto si la oferta tiene sentido para vos? Sí/No") dentro del funnel (formulario, opt-in, aplicación).</li>
                  <li>Según la respuesta, se dirige al usuario a <strong>páginas de confirmación distintas</strong>:
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>Los <strong>no calificados ("brokies")</strong> van a una página de confirmación que <strong>NO tiene píxel instalado</strong> (o que no dispara el evento estándar) — así el píxel nunca "ve" a esas personas.</li>
                      <li>Los <strong>calificados</strong> van a una página de confirmación que <strong>sí tiene el píxel</strong> y dispara el evento estándar — esta es la única data que el píxel recibe.</li>
                    </ul>
                  </li>
                  <li>Opcionalmente, se puede crear una <strong>conversión personalizada</strong> solo para trackear internamente cuánta gente "broky" llega (sin optimizar campañas por ella), y así medir el ratio de brokies vs. calificados.</li>
                </ol>

                <h4 className="text-xl font-bold text-[#D5B15B] mb-4">Uso avanzado del tráfico "broky" (liquidación de spend)</h4>
                <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-6">
                  <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                    <li>En vez de simplemente descartarlos, se puede usar a los "brokies" como <strong>downsell</strong>: dirigirlos a un equipo de vendedores junior (en entrenamiento) que les ofrece un producto de ticket más bajo.</li>
                    <li>Ejemplo real dado: un cliente cuyo producto principal cuesta $15.000-$25.000, con brokies definidos como quienes ganan &lt;$150.000/año. A esos brokies se les vendía un producto de $5.000. Con un gasto semanal de $10.000-$15.000/día, el funnel de brokies liquidaba entre $30.000-$50.000 de ese gasto — no lo hace rentable en sí mismo, pero <strong>alivia el costo publicitario total</strong> y mejora la rentabilidad de las ventas calificadas.</li>
                    <li>Aclara que esto no debe ser el foco principal (siempre priorizar acciones que generen más ROI), pero es útil cuando aplica.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="section-6">
              <div className="border border-[#4A3B18]/60 bg-[#2A2110]/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden mb-8">
                <div className="absolute -top-10 -right-10 text-[#4A3B18]/20 rotate-12">
                  <AlertTriangle size={180} strokeWidth={1} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[#E8CD82] mb-4 flex items-center gap-2">
                    <AlertTriangle size={20}/> Caveat importante: el costo por resultado se va a "inflar" (aparentemente)
                  </h3>
                  <ul className="list-disc pl-5 text-[#E8CD82]/90 space-y-3">
                    <li>Al implementar broky bait, en el corto plazo vas a ver <strong>muchos menos resultados llegando al píxel</strong>, lo que hace ver el costo por resultado como disparado.</li>
                    <li>Ejemplo numérico: si históricamente tenías 100 resultados/día por $100 de gasto (costo por lead = $1), pero de esos 100 solo 5 eran realmente calificados, tu costo real por lead calificado siempre fue $20 ($100 ÷ 5) — <strong>nunca cambió</strong>, simplemente antes no lo estabas midiendo. Al filtrar con broky bait, el número que ves ahora ($20) refleja la realidad que siempre existió, no un empeoramiento.</li>
                    <li>Insiste en que hay que <strong>aguantar la fase de recondicionamiento</strong> (puede costar unos miles de dólares de gasto) sin abandonar el proceso — la mayoría de los anunciantes nunca llega al otro lado porque se asustan y abortan el proceso antes de tiempo.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="section-7">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Mapeo de eventos por etapa del funnel</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
                <ul className="list-disc pl-5 text-zinc-300 space-y-4">
                  <li>Cada paso del funnel (opt-in → webinar/contenido → checkout → compra, o opt-in → aplicación → llamada agendada → show up → compra) puede tener su propio evento estándar asociado.</li>
                  <li>Advertencia: si en el opt-in solo se capturan datos básicos (nombre, email, teléfono) sin ninguna pregunta de calificación, ese evento sigue siendo vulnerable a atraer brokies y seguir condicionando mal el píxel — la solución más simple es agregar <strong>una sola pregunta de calificación</strong> como broky bait en el opt-in.</li>
                </ul>
              </div>
            </section>

            <section id="section-8">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Caso real detallado</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
                <p className="text-[16px] text-zinc-400 font-medium mb-6 uppercase tracking-wider">Cliente de $400.000/mes en ads</p>
                <ul className="list-disc pl-5 text-zinc-300 space-y-4">
                  <li>Cliente con funnel de webinario directo a checkout (producto de ~$3.500), optimizando dos eventos: <strong>Purchase</strong> (funcionaba bien — ROAS de ~$1.100-$1.500 por cada $3.500 vendido) y <strong>Complete Registration</strong> (sin broky bait) para conseguir volumen semanal de registros al webinario en vivo.</li>
                  <li>Con el tiempo, al no filtrar calidad en el registro, empezó a acumularse gente no calificada en el evento de Complete Registration, y el ROAS del webinario fue cayendo semana a semana — la agencia anterior no entendía por qué.</li>
                  <li>Peor aún: la campaña optimizada para <strong>Purchase directamente dejó de gastar</strong> (sin explicación clara para la agencia).</li>
                  <li>Solución aplicada por Jeremy: agregar <strong>una sola pregunta</strong> de broky bait al registro del webinario ("vamos a ofrecer algo de varios miles de dólares en este webinario, ¿estás abierto a invertir esa cantidad si la oferta tiene sentido?"). Quienes decían que no seguían viendo el webinario igual (y a veces hasta compraban), pero <strong>nunca se reportaban al píxel</strong>.</li>
                  <li>Resultado: el píxel empezó a encontrar más gente que respondía "sí" correctamente a la pregunta. El ROAS pasó de 1,6 (en caída) a <strong>3,4 en la semana siguiente</strong>, y siguió mejorando semana tras semana.</li>
                </ul>
              </div>
            </section>

            <section id="section-9">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Mensaje de cierre</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
                <p className="text-zinc-300 leading-relaxed">
                  Insiste en que esta lección debe aplicarse <strong>en su totalidad</strong>, no seleccionando solo partes ("no hay que hacer cherry-picking"). Cierre promocional habitual: menciona su programa "Inner Circle" (llamadas 1:1 dos veces al mes, llamadas grupales semanales, masterminds trimestrales presenciales en su penthouse de Miami, grupo de chat en Telegram), sus servicios de agencia "hands-on" (por aplicación), y que también publican todos sus videos transcriptos como blogs en su sitio web.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
