import { TableOfContents } from './components/TableOfContents';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Columns, Maximize2, PanelTop, Target, CheckCircle2, XCircle, AlertTriangle, BarChart, TrendingUp, PlayCircle, Zap, ShieldAlert, Crosshair, Users, LineChart, MessageSquare, Info } from 'lucide-react';

const ArcadiaLogo = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15.41 3.53H19.78L12.35 18.06H7.98L15.41 3.53Z" />
    <path d="M6.02 12.37H10.39L8.21 16.65H3.84L6.02 12.37Z" />
  </svg>
);

export const TesisJeremyAdsPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {
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
        {"id":"section-0","title":"Disclaimer inicial"},
        {"id":"section-1","title":"1. Qué controla el targeting (lo más importante)"},
        {"id":"section-2","title":"2. El mensaje controla el targeting: ejemplo real"},
        {"id":"section-3","title":"3. Sobre el targeting \"Broad\" / Advantage+ Audiences"},
        {"id":"section-4","title":"4. Tasa de ganadores (win rate) y \"Trough of Scaling\""},
        {"id":"section-5","title":"5. Estrategia \"Thunderdome\" (testeo de alto volumen)"},
        {"id":"section-6","title":"6. Filosofía general / objetivo final"}
      ]} />
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
          <ArcadiaLogo />
          <span className="text-zinc-500">Tesis</span>
          <span className="text-zinc-700">/</span>
          <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('tesis_acquisition')}>Acquisition</span>
        </div>
      </div>
      
      <div className="flex items-start gap-5 mb-16">
        <div className="border border-[#D5B15B]/30 p-3.5 rounded-2xl text-[#D5B15B] bg-[#1A1A1E] mt-1 shadow-[0_0_20px_rgba(213,177,91,0.15)]">
          <Target size={28} strokeWidth={1.5} />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">Resumen completo: "The Most Valuable Meta Ads Training" (Jeremy)</h2>
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
              src="https://www.youtube.com/embed/6h-QEKD8vuU" 
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

            <section id="section-0" className="border border-[#4A3B18]/60 bg-[#2A2110]/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 text-[#4A3B18]/20 rotate-12">
                <AlertTriangle size={180} strokeWidth={1} />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#E8CD82] mb-4 flex items-center gap-2">
                  <AlertTriangle size={20}/> Disclaimer inicial
                </h3>
                <p className="text-[16px] text-[#E8CD82]/90 leading-relaxed mb-4">
                  El creador aclara que ver el video no garantiza resultados de "millón de dólares al mes" — según investigaciones, hay menos de 0,1% de probabilidad de facturar $10M al año con publicidad. El video son lecciones de gente (incluido él) que está activamente escalando cuentas en Meta con éxito.
                </p>
              </div>
            </section>

            <section id="section-1">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">1. Qué controla el targeting (lo más importante)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
                <p className="text-[16px] text-zinc-300 mb-6 font-medium">Hay dos factores, en orden de importancia:</p>
                
                <h4 className="text-lg font-bold text-[#D5B15B] mb-4">A) El mensaje (messaging) — el factor #1, subestimado</h4>
                <ul className="list-disc pl-5 text-zinc-300 space-y-3 mb-8">
                  <li>Antes de que exista data del píxel, es el <strong>mensaje</strong> el que determina a quién le vas a llegar.</li>
                  <li>Cada "bolsillo de mensaje" (messaging pocket) tiene una cantidad finita de personas que están dispuestas a convertir con esa combinación específica de mensaje + funnel en un día dado, y tiene una "tasa de reposición" (replenishing rate).</li>
                  <li>Ejemplo: un anuncio de autos que dice "no vayas al concesionario, comprá todo online" solo le va a llegar a la gente dispuesta a comprar así — es un público limitado.</li>
                  <li>Si intentás extraer más personas de las que ese bolsillo puede dar por día, los costos se vuelven ineficientes. A esto lo llama <strong>"scale ceiling" (techo de escala)</strong>: el punto donde cada dólar extra gastado es ineficiente.</li>
                  <li>La solución al llegar al techo no es forzar más gasto, sino testear <strong>nuevos ángulos de mensaje</strong> en nuevos ad sets/campañas.</li>
                  <li>Si el mensaje inicial no es lo suficientemente amplio, vas a pegar contra el techo casi de inmediato.</li>
                </ul>

                <h4 className="text-lg font-bold text-[#D5B15B] mb-4">B) El condicionamiento del píxel (pixel conditioning) — factor #2</h4>
                <ul className="list-disc pl-5 text-zinc-300 space-y-3 mb-6">
                  <li>Mito a desmentir: el píxel <strong>solo retiene 180 días (6 meses)</strong> de data, no "años" como mucha gente cree.</li>
                  <li>Opera con <strong>sesgo de recencia (recency bias)</strong>: aunque tenga 180 días de historial, en la práctica son las últimas ~2 semanas las que más pesan en a quién apunta después.</li>
                  <li>Ejemplo clave: si tuviste 6 meses excelentes pero las últimas 2 semanas atrajiste al "público equivocado" (a los que él llama "donkeys"/burros o "turd pocket"/bolsillo de porquería), el algoritmo va a seguir optimizando hacia ese público malo porque está "chumming the waters" (cebando el agua) con esos datos.</li>
                </ul>

                <div className="bg-[#3A1414]/30 border border-red-500/20 rounded-xl p-6 mb-6">
                  <p className="font-bold text-red-400 mb-2">Error común:</p>
                  <p className="text-zinc-300">la gente cree que el problema es el algoritmo, cuando en realidad es que dejaron que datos de mala calidad condicionen el píxel.</p>
                </div>

                <div className="bg-[#1A1A1E] rounded-xl p-6 border border-zinc-800 mb-8">
                  <p className="font-bold text-white mb-4">Solución cuando estás en el "bolsillo equivocado":</p>
                  <ol className="list-decimal pl-5 text-zinc-300 space-y-3">
                    <li><strong>Retener datos</strong> que le llegan al píxel (dejar de reportar conversiones de mala calidad) para forzar al algoritmo a buscar gente distinta.</li>
                    <li>Cuando volvés a ver que llega la gente correcta, volvés a "abrir las compuertas" y le das toda la data posible.</li>
                    <li>Alternativas: crear un píxel nuevo, duplicar campaña/ad sets sin dejar que el reporting viejo siga entrando, o pasar a Conversion API con reporte <strong>manual</strong> (ej. que el vendedor marque a mano solo cuando habló con un lead calificado real).</li>
                  </ol>
                </div>

                <div className="border-l-4 border-l-[#D5B15B] pl-4 py-2 mt-6">
                  <p className="text-[16px] text-white font-bold mb-2">Regla de la fase de aprendizaje (learning phase)</p>
                  <p className="text-zinc-300">Cada ad set necesita <strong>50 eventos reportados por semana</strong> para salir/mantenerse estable en el aprendizaje. Si no se llega a ese número, la entrega se vuelve errática y el algoritmo "flailea" buscando públicos distintos.</p>
                </div>
              </div>
            </section>

            <section id="section-2">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">2. El mensaje controla el targeting: ejemplo real</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
                <p className="text-[16px] text-zinc-300 mb-6">
                  Un alumno del programa "Jeremy's Inner Circle" (que llegó a $1M/mes) tenía un curso de copywriting, y usó en un anuncio las palabras "escritor" y "JK Rowling" para decir que la IA te ayuda a escribir como grandes autores. Esas dos palabras hicieron que Meta lo pusiera frente a "aspirantes a escritores" en vez de su público real (gente que quiere ser copywriter freelance/agencia). Moraleja: <strong>todo lo que decís en el copy, en los videos y en el funnel (incluidos VSLs) está siendo usado por Meta para targeting</strong>, no solo la segmentación manual.
                </p>
                <p className="text-[16px] text-zinc-300 mb-8">
                  También importa el <strong>evento estándar / conversión personalizada</strong> que elijas optimizar: usar eventos estándar es preferible porque Meta tiene más data histórica sobre esos eventos específicos (mencionan que Meta dice tener ~52.000 puntos de data por usuario actualizándose en tiempo real).
                </p>

                <div className="bg-[#3A1414]/30 border border-red-500/30 rounded-xl p-6 relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center gap-2">
                      <ShieldAlert size={20} />
                      Advertencia sobre depender solo del píxel
                    </h4>
                    <p className="text-zinc-300">
                      Con el tiempo, el condicionamiento del píxel pesa cada vez más, pero es <strong>peligroso depender exclusivamente de él</strong>. Si perdés el píxel (cuenta baneada, business manager caído, etc.) y tu mensaje no es bueno, vas a sufrir mucho para volver a encontrar al público correcto. El mensaje debe ser sólido siempre como red de seguridad.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="section-3">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">3. Sobre el targeting "Broad" / Advantage+ Audiences</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
                <ul className="list-disc pl-5 text-zinc-300 space-y-4">
                  <li>Meta hizo estudios internos y concluyó que dejar que el algoritmo (su "máquina de predicción") elija el público sin restricciones manuales beneficia más a los anunciantes que forzar segmentaciones manuales — de ahí que Advantage+ / broad sea el default hoy.</li>
                  <li>Menciona el modelo interno de Meta llamado <strong>"Triple V2"</strong> (posiblemente mal transcripto/pronunciado): entrenaron una IA con resonancias magnéticas (MRI) de miles de personas mientras scrolleaban su feed, para predecir con +90% de precisión qué parte del cerebro se activa con determinado contenido — y luego validaron el modelo repitiendo el experimento. Esto ilustra el poder predictivo de la "máquina" de Meta.</li>
                  <li>Confiar en el sistema (broad + muchos creativos en un mismo ad set) tiende a funcionar mejor que forzar segmentación si tu mensaje es bueno.</li>
                </ul>
              </div>
            </section>

            <section id="section-4">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">4. Tasa de ganadores (win rate) y "Trough of Scaling"</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
                <ul className="list-disc pl-5 text-zinc-300 space-y-4 mb-8">
                  <li>Con presupuestos de testeo bajos, <strong>las estadísticas no son reales</strong> (CPMs, CTR, conversión de landing, CPA) — todo tiende a cambiar (generalmente empeorar levemente) al escalar. A esto lo llama el <strong>"trough of scaling"</strong> (valle de la escala).</li>
                  <li>Típicamente solo <strong>1-9% de los creativos testeados</strong> llegan a ser "ganadores" reales, y de esos, solo <strong>1-3%</strong> son verdaderos "scaled winners" (ganadores que sostienen rentabilidad al escalar mucho gasto).</li>
                </ul>

                <h4 className="text-lg font-bold text-white mb-4">Analogía campos de petróleo vs. acuíferos:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-6 shadow-md border-t-2 border-t-red-400">
                    <h5 className="font-bold text-white text-lg mb-3">Petróleo (oil field)</h5>
                    <p className="text-[15px] text-zinc-400">Mensaje que "funciona" pero es un recurso finito — al escalarlo, se agota la gente que convierte con ese mensaje y el costo por resultado se dispara. Mucha gente culpa al algoritmo cuando en realidad se quedaron sin público.</p>
                  </div>
                  <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-6 shadow-md border-t-2 border-t-[#D5B15B]">
                    <h5 className="font-bold text-white text-lg mb-3">Acuífero (aquifer)</h5>
                    <p className="text-[15px] text-zinc-400">Un verdadero ganador escalable, que se "repone" (como con una vertiente/spring). Pero incluso ahí, si extraés más rápido de lo que se repone, también se vuelve ineficiente.</p>
                  </div>
                </div>

                <ul className="list-disc pl-5 text-zinc-300 space-y-4">
                  <li>Un verdadero ganador escalado apenas pierde rentabilidad al escalar; un "ganador chico" tiene un techo bajo (puede ser solo $100-$1000/día).</li>
                  <li>Meta define "ganador" no necesariamente como el mejor costo por resultado, sino como el anuncio que <strong>puede absorber más gasto mientras mantiene escala</strong>.</li>
                </ul>
              </div>
            </section>

            <section id="section-5">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">5. Estrategia "Thunderdome" (testeo de alto volumen)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
                <p className="text-[16px] text-zinc-300 mb-8 font-medium">Estrategia para cuando <strong>no confiás</strong> en que Meta reparta bien el gasto entre tus creativos (alternativa a dejarlo todo en manos del algoritmo con Advantage+ campaign budget).</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h4 className="text-lg font-bold text-[#D5B15B] mb-4">Estructura:</h4>
                    <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                      <li><strong>1 anuncio por ad set</strong> (no varios anuncios compitiendo dentro del mismo ad set).</li>
                      <li>Se usa <strong>ABO</strong> (Ad Set Budget Optimization).</li>
                      <li>Se agrega una <strong>exclusión de "3 segundos de visualización"</strong>: si alguien mira el video 3+ segundos, se lo excluye para que no vuelva a ver el mismo anuncio — así rota por todos los creativos.</li>
                      <li>Targeting: preferentemente <strong>broad</strong>, aunque se puede usar intereses/lookalikes/audiencias cálidas si se prefiere.</li>
                      <li>Presupuesto: se divide el presupuesto total diario entre la cantidad de ad sets/creativos (ej: $1.000/día ÷ 30 creativos = ~$33/día por ad set).</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#D5B15B] mb-4">Cómo operarla:</h4>
                    <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                      <li>Vas a tener un costo por resultado "inflado" en las métricas resumen (nivel campaña/ad set agregado), porque estás gastando en muchos perdedores a propósito.</li>
                      <li>Al entrar en cada ad set individual vas a ver que &lt;10% son ganadores con costo por resultado bajo.</li>
                      <li><strong>Cortás a los perdedores rápido</strong> (en ~3 días, dependiendo del gasto) y <strong>redirigís ese presupuesto a los ganadores</strong>, para revelar rápido el "scale ceiling" de cada ganador.</li>
                      <li><strong>Nunca sacás a un ganador de donde está ganando</strong> para meterlo en una "campaña de escalado" separada — eso mata su rendimiento. Dejalo donde ya está funcionando y aumentale el presupuesto ahí mismo.</li>
                      <li>Con el tiempo, borrás los perdedores definitivamente para hacer lugar a nuevos tests, y repetís el ciclo: testear → cortar perdedores → alimentar ganadores → repetir.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-[#1A1A1E] rounded-xl p-6 border border-zinc-800">
                  <p className="text-zinc-300">
                    Es una estrategia deliberadamente "ineficiente" en el corto plazo (gastás en 90%+ de anuncios que probablemente no sirven) a cambio de conocer con certeza el verdadero costo por resultado de cada creativo y encontrar ganadores reales más rápido.
                  </p>
                </div>
              </div>
            </section>

            <section id="section-6">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <LineChart size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">6. Filosofía general / objetivo final</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
                <ul className="list-disc pl-5 text-zinc-300 space-y-4 mb-8">
                  <li>El objetivo no es un solo "gran ganador", sino <strong>acumular la mayor cantidad posible de "scaled winners"</strong> a lo largo del tiempo y dejarlos correr en lo que llama <strong>"campañas fundacionales" (foundational campaigns)</strong> en su techo de escala óptimo.</li>
                  <li>La mayoría de tus ganadores van a tener techos de escala más chicos de lo esperado; solo un puñado va a ser realmente grande.</li>
                  <li>Cierre promocional: menciona su programa "Jeremy's Inner Circle" (llamadas 1:1, masterminds trimestrales), su programa anual "Master Internet Marketing", y "Jeremy AI" (un clon de IA entrenado en su metodología conectable a la cuenta de ads). Aclara que en el video comparte solo 10-20% de lo que enseña en sus programas pagos, pero que es información de "alto impacto".</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
