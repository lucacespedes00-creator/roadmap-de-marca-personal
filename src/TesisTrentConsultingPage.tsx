import { TableOfContents } from './components/TableOfContents';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Columns, Maximize2, Target, PlayCircle, Briefcase, AlertCircle, LineChart, Stethoscope, Lightbulb, Users, DollarSign, ArrowUpCircle, Filter, Activity, MonitorPlay, CheckCircle2 } from 'lucide-react';

const ArcadiaLogo = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15.41 3.53H19.78L12.35 18.06H7.98L15.41 3.53Z" />
    <path d="M6.02 12.37H10.39L8.21 16.65H3.84L6.02 12.37Z" />
  </svg>
);

export const TesisTrentConsultingPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {
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
    <div className={`mx-auto w-full pb-20 animate-in fade-in duration-300 ${isVideoPinned ? 'max-w-[95%]' : 'max-w-4xl'}`}>
      <TableOfContents sections={[
        {"id":"section-0","title":"Contexto del negocio"},
        {"id":"section-1","title":"El problema central"},
        {"id":"section-2","title":"El desglose de números"},
        {"id":"section-3","title":"Diagnóstico: no es un problema de leads"},
        {"id":"section-4","title":"Recomendaciones detalladas"},
        {"id":"section-5","title":"Conclusión del entrevistador"}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">Consultoría de negocio a Trent (Regathered AI)</h2>
        </div>
      </div>

      <div className={`flex items-start gap-8 ${isVideoPinned ? 'flex-row' : 'flex-col'}`}>
        {/* Video Container */}
        <div 
          ref={videoContainerRef}
          style={isVideoPinned ? { width: `${videoWidth}px` } : {}}
          className={`${isVideoPinned ? 'order-2 shrink-0 sticky top-6' : 'order-1 w-full'} ${!isResizing ? 'transition-all duration-500' : ''}`}
        >
          {isVideoPinned && (
            <div 
              onMouseDown={startResizing}
              className="absolute -left-4 top-0 bottom-0 w-8 cursor-col-resize z-20 group/resizer flex items-center justify-center"
              title="Arrastrar para redimensionar"
            >
              <div className={`h-16 w-1 rounded-full transition-colors duration-200 ${isResizing ? 'bg-[#D5B15B]' : 'bg-white/10 group-hover/resizer:bg-white/30'}`} />
            </div>
          )}
          <div className="w-full aspect-video rounded-3xl overflow-hidden border border-[#27272A]/80 shadow-2xl mb-8 bg-[#121214] relative group">
            <button 
              onClick={() => setIsVideoPinned(!isVideoPinned)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md border border-white/10 z-10 flex items-center gap-2 text-sm font-medium"
              title={isVideoPinned ? "Volver al centro" : "Fijar a la derecha"}
            >
              {isVideoPinned ? <Maximize2 size={16} /> : <Columns size={16} />}
              {isVideoPinned ? "Desfijar" : "Fijar lectura"}
            </button>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/_bf1F0aL9-U" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Text Content Area */}
        <div className={`flex-1 min-w-0 w-full ${isVideoPinned ? 'order-1' : 'order-2'}`}>
          <div className="space-y-16">

            <section id="section-0" className="border border-[#27272A]/80 bg-[#121214] rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                 <Briefcase className="text-[#D5B15B]" size={28} /> Contexto del negocio
              </h3>
              
              <div className="space-y-6">
                <p className="text-[16px] text-zinc-300 leading-relaxed">
                  Trent fundó <strong>Regathered AI</strong> hace apenas 3 meses y ya factura <strong>más de 100.000 USD/mes</strong> en ingresos recurrentes. El servicio consiste en IA por SMS (y algo de email) que reactiva, califica y agenda llamadas con los contactos que ya tienen las bases de datos de otros negocios (leads que compraron pauta pero nunca fueron trabajados). No es un producto "set and forget" tipo SaaS: el equipo de Trent (9 personas, mayormente en Australia) gestiona activamente esas conversaciones para conseguir resultados a sus clientes.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl">
                    <p className="text-zinc-400 text-sm mb-1 uppercase tracking-wider font-bold">Precios</p>
                    <p className="text-zinc-300">Entre 495 y 1.000 AUD por semana, según el tamaño del cliente e integraciones. El promedio ronda los <strong>595 AUD/semana</strong>.</p>
                  </div>
                  <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl">
                    <p className="text-zinc-400 text-sm mb-1 uppercase tracking-wider font-bold">Inversión en ads</p>
                    <p className="text-zinc-300">Entre 2.000 y 2.500 AUD/día (todo Meta Ads), es decir, unos <strong>60.000-62.000 AUD al mes</strong>.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="section-1">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 shadow-inner">
                  <AlertCircle size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">El problema central</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
                <p className="text-zinc-300">
                  Trent quiere escalar a un millón de dólares al mes, pero identifica un desbalance: cuando <strong>él mismo</strong> toma las llamadas de venta, cierra un altísimo porcentaje (alrededor del 60-70%). Cuando las toma su <strong>closer</strong> contratado, el cierre cae a menos del 10%. Como Trent quiere salir del calendario de ventas para enfocarse en escalar, este problema se vuelve crítico.
                </p>
              </div>
            </section>

            <section id="section-2">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <LineChart size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">El desglose de números que hace el entrevistador en vivo</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Analizando la cuenta de anuncios junto con Trent, llegan a esta cadena de datos (sobre 62.000 AUD de gasto mensual):</p>
                
                <div className="bg-[#1A1A1E] border border-zinc-800 p-6 rounded-xl">
                  <ul className="space-y-3 font-mono text-[14px]">
                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Costo por llamada agendada:</span>
                      <span className="text-white">~290 AUD</span>
                    </li>
                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Llamadas agendadas:</span>
                      <span className="text-white">~171/mes</span>
                    </li>
                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Show rate:</span>
                      <span className="text-white">~75% (segmento 0-1M) / ~100% (1M+)</span>
                    </li>
                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Llamadas efectivas (shows):</span>
                      <span className="text-white">~128</span>
                    </li>
                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Costo por show:</span>
                      <span className="text-white">~484 AUD</span>
                    </li>
                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Split de llamadas:</span>
                      <span className="text-white">Trent ~7/sem (32/mes) | Closer ~25/sem</span>
                    </li>
                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Cierre de Trent:</span>
                      <span className="text-green-400">~70%</span>
                    </li>
                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Cierre del closer:</span>
                      <span className="text-red-400">~8-10%</span>
                    </li>
                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Clientes nuevos totales:</span>
                      <span className="text-white">~7 por semana (~28/mes)</span>
                    </li>
                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">CAC real (inc. pago a closer):</span>
                      <span className="text-[#D5B15B]">~2.400 AUD por cliente</span>
                    </li>
                    <li className="flex justify-between pt-2 font-bold text-[16px]">
                      <span className="text-white">Valor promedio por cliente:</span>
                      <span className="text-green-400">11.880 AUD</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 p-5 rounded-xl">
                  <p className="text-red-400 font-bold mb-2">Conclusión clave:</p>
                  <p className="text-zinc-300 text-sm">El negocio <strong>no es rentable en el primer mes</strong> (el CAC supera lo que se cobra en las primeras semanas), pero se vuelve muy rentable a partir de la semana 6-8, porque el cliente ya "pagó" el costo de adquisición y sigue generando ingresos varios meses más.</p>
                </div>

                <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-5 rounded-xl">
                  <p className="text-[#D5B15B] font-bold mb-2">Simulación de mejora:</p>
                  <p className="text-zinc-300 text-sm">Si el closer pasara de cerrar 10% a 20%, los clientes mensuales subirían de 28 a 48, y el CAC bajaría de 2.400 a <strong>1.291 AUD</strong>, básicamente resolviendo el problema de flujo de caja solo con esa mejora.</p>
                </div>

              </div>
            </section>

            <section id="section-3">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Stethoscope size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Diagnóstico: no es un problema de leads, es de ejecución</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
                <p className="text-zinc-300 leading-relaxed">
                  El entrevistador insiste en que el negocio <strong>funciona</strong>: buen show rate, buena retención (solo 2 clientes se fueron en 3 meses, por mala relación y por un problema técnico de integración), anuncios con buen rendimiento. El cuello de botella está en tres áreas: <strong className="text-white">ventas (closer), cobro/estructura de pago, y funnel/landing page</strong>.
                </p>
              </div>
            </section>

            <section id="section-4">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Lightbulb size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Recomendaciones detalladas</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-12">
                
                {/* Recommendation 1 */}
                <div>
                  <h4 className="font-bold text-white text-2xl mb-4 flex items-center gap-3">
                    <Users className="text-[#D5B15B]" size={24} /> 1. Arreglar al closer (prioridad inmediata)
                  </h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                    <li><strong>No sacar a Trent del calendario todavía:</strong> seguir tomando llamadas es la actividad de mayor apalancamiento, porque desde ahí se retroalimenta marketing, funnel y contratación.</li>
                    <li><strong>Simplificar al máximo el pitch y la llamada:</strong> Trent cierra en 20-30 minutos, el closer tarda 60-70 minutos con el mismo resultado peor. Menos variables, menos fricción.</li>
                    <li><strong>Plazo limitado para evaluar:</strong> alrededor de 10-20 llamadas. Si no hay ninguna señal de progreso, reemplazarlo rápido (Trent toleró 8 meses a un closer flojo por indecisión en otra ocasión).</li>
                    <li><strong>Sistema de coaching:</strong> revisión diaria de llamadas grabadas (Fathom), documento de fortalezas/debilidades, IA en Slack para seguimiento, formulario de fin de día, curso interno tipo "escuela".</li>
                    <li><strong>Pedir el cierre directamente:</strong> en vez de posponerlo ante una objeción ("quiero ver más testimonios"), responder igual "¿te agendo el kickoff para el jueves?" porque muchas objeciones son excusas.</li>
                  </ul>
                </div>

                <hr className="border-zinc-800" />

                {/* Recommendation 2 */}
                <div>
                  <h4 className="font-bold text-white text-2xl mb-4 flex items-center gap-3">
                    <DollarSign className="text-green-400" size={24} /> 2. Cobrar más cash por adelantado
                  </h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                    <li>Aprovechar la "ventana de victoria" (semana 6-8): ofrecer pagar 3 o 6 meses por adelantado con descuento (ej. pagar 9K de una vez en lugar de 12K).</li>
                    <li>Probar esta oferta primero <strong>el propio Trent</strong>, no delegarla de entrada al closer.</li>
                    <li><strong>Canal recomendado:</strong> mensajes de voz (voice notes) informales por WhatsApp en vez de llamadas formales, para bajar la fricción.</li>
                  </ul>
                  <div className="bg-[#1A1A1E] p-4 rounded-xl mt-4 border border-zinc-800">
                    <p className="text-zinc-300 text-sm"><strong>Beneficio:</strong> Acelera el "payback" del CAC (de 5-6 semanas a 4 semanas) y libera caja para reinvertir en ads.</p>
                  </div>
                </div>

                <hr className="border-zinc-800" />

                {/* Recommendation 3 */}
                <div>
                  <h4 className="font-bold text-white text-2xl mb-4 flex items-center gap-3">
                    <ArrowUpCircle className="text-blue-400" size={24} /> 3. Crear ofertas backend / upsell
                  </h4>
                  <p className="text-zinc-300 mb-3">Trent no tiene ningún upsell actualmente, algo que el entrevistador marca como la mayor oportunidad perdida.</p>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                    <li>Cobrar un extra por cada llamada agendada adicional generada (ej. +19-29 AUD por booking).</li>
                    <li>Modelo de performance: cobrar un % de los ingresos adicionales generados en los primeros meses.</li>
                    <li>Ofrecer un paquete "VIP" con más atención personal para clientes grandes.</li>
                  </ul>
                </div>

                <hr className="border-zinc-800" />

                {/* Recommendation 4 */}
                <div>
                  <h4 className="font-bold text-white text-2xl mb-4 flex items-center gap-3">
                    <Filter className="text-purple-400" size={24} /> 4. Funnel y landing page
                  </h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                    <li>Tasa de aplicación actual: ~6%. Se podría llevar a 8-10%, generando 25% más de llamadas agendadas.</li>
                    <li><strong>Split testing controlado:</strong> empezar 80/20 (no 50/50) y cambiar <strong>una sola variable por vez</strong> para no arriesgar el flujo que ya funciona.</li>
                    <li>Simplificar la página: usar Microsoft Clarity para ver mapas de calor/scroll.</li>
                    <li><strong>"Foundational campaigns":</strong> cada creativo tiene un techo de gasto. Al llegar ahí, no forzar más gasto, sino lanzar nuevos creativos en paralelo.</li>
                  </ul>
                </div>

                <hr className="border-zinc-800" />

                {/* Recommendation 5 */}
                <div>
                  <h4 className="font-bold text-white text-2xl mb-4 flex items-center gap-3">
                    <Activity className="text-orange-400" size={24} /> 5. Calidad de los leads y tracking hacia Meta
                  </h4>
                  <p className="text-zinc-300 mb-3">Enviar a Meta como "lead válido" a negocios de 0-500K "ensucia" el algoritmo. Trent ya había empezado a dejar de reportar estos eventos.</p>
                  <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                    <p className="text-zinc-300"><strong>Recomendación:</strong> no descalificarlos, pero sí segmentarlos. Dirigir los leads de menor calidad a un calendario distinto atendido por closers junior (para que practiquen), y reservar los leads de mayor calidad para los cerradores más experimentados.</p>
                  </div>
                </div>

                <hr className="border-zinc-800" />

                {/* Recommendation 6 */}
                <div>
                  <h4 className="font-bold text-white text-2xl mb-4 flex items-center gap-3">
                    <MonitorPlay className="text-pink-400" size={24} /> 6. Página de agradecimiento y pre-educación
                  </h4>
                  <p className="text-zinc-300 mb-3">Actualmente solo ven un mensaje simple más un SMS/email posterior a la agenda.</p>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                    <li><strong>Propuesta:</strong> página de agradecimiento con un video de Trent explicando los próximos pasos, seguido de mini-videos (2-3 min) respondiendo objeciones y casos de éxito.</li>
                    <li><strong>Objetivo:</strong> que el prospecto llegue a la llamada "precalentado" y convencido, mejorando la tasa de cierre del closer.</li>
                    <li>Trent ya implementó un video de 4 mins y notó que el 100% lo miraban y llegaban con menos objeciones.</li>
                  </ul>
                </div>

              </div>
            </section>

            <section id="section-5">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Conclusión del entrevistador</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">El negocio de Trent <strong>no tiene un problema de generación de leads</strong>: los anuncios funcionan, el show rate es bueno, la retención es excelente y la oferta claramente genera resultados. El verdadero cuello de botella para llegar al millón de dólares mensuales está en:</p>
                
                <ol className="list-decimal pl-5 text-white font-bold space-y-3 text-lg my-6">
                  <li>Elevar el cierre del closer.</li>
                  <li>Cobrar más cash por adelantado aprovechando el momento en que el cliente ya vio resultados.</li>
                  <li>Construir una oferta backend/upsell que hoy no existe.</li>
                  <li>Optimizaciones más finas de funnel (tasa de aplicación, segmentación de leads, página de agradecimiento).</li>
                </ol>

                <div className="bg-[#1A1A1E] border-l-4 border-[#D5B15B] p-5 rounded-xl">
                  <p className="text-zinc-300 italic text-[16px]">
                    Si Trent resuelve estos puntos, el CAC bajaría considerablemente, el negocio pasaría a ser rentable desde el primer mes, y podría entonces sí pisar el acelerador del gasto publicitario sin quemar caja.
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
