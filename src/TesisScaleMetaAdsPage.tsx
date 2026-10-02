import { TableOfContents } from './components/TableOfContents';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Columns, Maximize2, Target, PlayCircle, BarChart, Settings, LineChart, Search, ArrowUpCircle, Crosshair, Users, DollarSign, BookOpen, Globe, RefreshCw, ShoppingCart, Zap, TrendingUp } from 'lucide-react';

const ArcadiaLogo = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15.41 3.53H19.78L12.35 18.06H7.98L15.41 3.53Z" />
    <path d="M6.02 12.37H10.39L8.21 16.65H3.84L6.02 12.37Z" />
  </svg>
);

export const TesisScaleMetaAdsPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {
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
        {"id":"section-0","title":"Premisa central"},
        {"id":"section-1","title":"Caso de estudio inicial"},
        {"id":"section-2","title":"PASO 1 — Encontrar 5 creativos ganadores"},
        {"id":"section-3","title":"PASO 2 — Subir presupuesto hasta que caiga el ROAS"},
        {"id":"section-4","title":"PASO 3 — Identificar la forma más probable de mejorar el ROAS"},
        {"id":"section-5","title":"PASO 4 — Subir presupuesto y buscar nueva audiencia"},
        {"id":"section-6","title":"PASO 5 — Sacar más dinero de la audiencia existente"}
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
          <TrendingUp size={28} strokeWidth={1.5} />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">How to Scale Meta Ads without Wrecking your ROAS (FULL GUIDE)</h2>
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
              src="https://www.youtube.com/embed/PERC6ZMEyNk" 
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
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                 <Target className="text-[#D5B15B]" size={28} /> Premisa central
              </h3>
              <p className="text-[16px] text-zinc-300 leading-relaxed">
                Al aumentar el presupuesto diario, el ROAS casi siempre baja, y llega un punto donde cae "por un precipicio". El video presenta 5 pasos conceptuales para escalar sin destruir la rentabilidad, entendiendo <em>por qué</em> pasa esto para poder tomar siempre la decisión correcta.
              </p>
            </section>

            <section id="section-1">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <LineChart size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Caso de estudio inicial</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
                <p className="text-zinc-300 mb-4">
                  Cliente coach de high ticket: en junio facturó $237.834 con $56.000 de gasto; en julio facturó $290.390 con solo $59.000 de gasto (+$3.000 de presupuesto generaron +$53.000 en ventas).
                </p>
                <div className="bg-[#1A1A1E] border-l-4 border-[#D5B15B] p-5 rounded-xl">
                  <p className="text-zinc-300">
                    <strong>El punto:</strong> escalar no siempre significa gastar más — hay muchas palancas (AOV, tasa de conversión, retención) que ayudan más al ROAS que simplemente aumentar el gasto.
                  </p>
                </div>
              </div>
            </section>

            <section id="section-2">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Search size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">PASO 1 — Encontrar 5 creativos ganadores, presupuesto $25-$50/día por oferta</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                  <li><strong>Error común:</strong> creer que si los resultados no son buenos hay que subir el presupuesto. En realidad, el algoritmo muestra primero a la "fruta más fácil de alcanzar" (lowest hanging fruit) — el <strong>bottom of funnel</strong> (fondo de embudo): gente que ya está buscando activamente comprar ese tipo de producto hoy.</li>
                  <li>El autor se declara mayormente en contra del marketing de <strong>middle</strong> y <strong>top of funnel</strong> porque el bottom of funnel ya es lo más rentable, y además el bottom of funnel igual termina generando algo de awareness/reconocimiento de marca en el camino (así que no hace falta apuntar directamente a esas etapas).</li>
                  <li><strong>No bajar de $25/día:</strong> por debajo de eso no hay suficiente frecuencia ni velocidad de aprendizaje del algoritmo.</li>
                  <li>Mantenerse en el rango $25-$50 hasta lograr el ROAS objetivo antes de escalar, porque al escalar el ROAS inevitablemente baja un poco.</li>
                  <li>Enfocar los creativos en <strong>ángulos de atractivo masivo (mass appeal)</strong>, no en nichos ultra específicos. Ejemplo: para un suplemento de magnesio, el ángulo masivo es "dormir mejor", no beneficios indirectos como dolor articular — eso se deja para más adelante.</li>
                </ul>
                <div className="bg-[#1A1A1E] border border-zinc-800 p-6 rounded-xl space-y-3 mt-6">
                  <p className="text-zinc-300"><strong>Definición de "creativo ganador":</strong> genera <strong>más de 10 ventas por encima del ROAS objetivo</strong>. Para encontrar 5 ganadores, probablemente haya que testear ~20 creativos.</p>
                  <p className="text-zinc-300"><strong>Cómo calcular el ROAS objetivo:</strong> calcular el ROAS de equilibrio (break-even) y sumarle un margen (ej. +0,5 puntos).</p>
                </div>
              </div>
            </section>

            <section id="section-3">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <ArrowUpCircle size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">PASO 2 — Subir presupuesto hasta que caiga el ROAS, y quedarse ahí</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <div className="bg-red-500/10 border border-red-500/30 p-5 rounded-xl">
                  <p className="text-red-400 font-bold mb-1">Regla:</p>
                  <p className="text-zinc-300 text-sm"><strong>No aumentar el presupuesto más del 100% cada 2 días</strong> (ej: de $25 a $50, esperar 2 días, confirmar que el ROAS se mantiene, y recién ahí volver a subir).</p>
                </div>
                
                <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                  <li>Esto revela el techo real del "bottom of funnel": una verdad incómoda es que <strong>el mercado real de bottom of funnel suele ser más chico de lo que el negocio cree</strong>.</li>
                  <li>Por eso recomienda que incluso empresas nuevas corran ads de inmediato: para descubrir rápido el tamaño real de esa audiencia.</li>
                  <li><strong>Indicador clave:</strong> la <strong>frecuencia</strong> (impresiones ÷ alcance). Cuando la frecuencia empieza a estar en 5, 6, 7 en el mes, casi siempre se ve caída significativa de rentabilidad.</li>
                  <li>Regla práctica general (con matices por negocio): el gasto mensual manejable suele rondar 3-4 veces algo (frecuencia como referencia), pero puede ser mucho más chico de lo esperado — ejemplo: un cliente de pickleball al que le cuesta gastar más de $50/día sin sufrir el ROAS.</li>
                </ul>

                <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl">
                  <p className="text-zinc-300 text-sm">Se considera terminado el "bottom of funnel" cuando <strong>el ROAS cae más de 25% en una ventana de 7 días</strong>. Ahí se pasa al paso 3.</p>
                </div>
              </div>
            </section>

            <section id="section-4">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Crosshair size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">PASO 3 — Identificar la forma más probable de mejorar el ROAS (la parte más subjetiva)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-12">
                
                <div>
                  <h4 className="font-bold text-white text-xl mb-3 flex items-center gap-2">
                    <RefreshCw className="text-[#D5B15B]" size={20} /> a) Optimizar creativos continuamente
                  </h4>
                  <p className="text-zinc-300">Apagar los que no funcionan, lanzar nuevos con la mentalidad de "este es mi próximo mejor anuncio" (no solo "hacer anuncios por hacer").</p>
                </div>

                <hr className="border-zinc-800" />

                <div>
                  <h4 className="font-bold text-white text-xl mb-3 flex items-center gap-2">
                    <ShoppingCart className="text-[#D5B15B]" size={20} /> b) Mejorar el CRO (optimización de conversión) del sitio
                  </h4>
                  <p className="text-zinc-300"><strong>Consejo clave:</strong> poner todas las herramientas de decisión y upsells en la <strong>misma página</strong> a la que se envía tráfico. Ejemplo: en vez de tener 6 listados separados de un vestido por color, combinar todo en un único listado con selector de color/talle/videos/guía de talles.</p>
                </div>

                <hr className="border-zinc-800" />

                <div>
                  <h4 className="font-bold text-white text-xl mb-3 flex items-center gap-2">
                    <Users className="text-[#D5B15B]" size={20} /> c) Mejorar el proceso de seguimiento/cierre
                  </h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                    <li><strong>Preguntas clave:</strong> ¿se contacta al lead el mismo día? ¿en la primera hora? ¿al menos 5 veces en la primera semana?</li>
                    <li>No da un número mágico de tasa de cierre, pero insiste en medirla y conseguir ayuda si no es suficiente. Menciona tener otro video sobre cómo hacer la llamada de venta perfecta para ofertas de coaching.</li>
                  </ul>
                </div>

                <hr className="border-zinc-800" />

                <div>
                  <h4 className="font-bold text-white text-xl mb-3 flex items-center gap-2">
                    <DollarSign className="text-[#D5B15B]" size={20} /> d) Mejorar el AOV (valor promedio de orden)
                  </h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                    <li>Su método preferido <strong>no</strong> es suscripciones (generan más problemas de atención al cliente); prefiere vender más cantidad y cobrar ahora.</li>
                    <li>Mejor solución: si hay múltiples productos y uno (Producto A) ya llegó a su techo de bottom of funnel, en vez de subir a middle of funnel con A, conviene ir al <strong>bottom of funnel del Producto B</strong>, y luego C — esto es <strong>escalado horizontal</strong>.</li>
                  </ul>
                </div>

                <div className="bg-[#1A1A1E] border border-zinc-800 p-6 rounded-xl mt-8">
                  <h4 className="font-bold text-white text-lg mb-4">Definiciones: escalado vertical vs. horizontal</h4>
                  <ul className="space-y-4">
                    <li className="text-zinc-300"><strong className="text-white">Vertical</strong> = vender más de <strong>una misma oferta</strong>: subir presupuesto, nuevos ángulos de marketing para el mismo producto, más tipos de creativos (reels, carruseles, collection ads), nuevos países, aumentar AOV en el mismo customer journey, subir precios (solo cuando la demanda lo empuja, para que sea sostenible).</li>
                    <li className="text-zinc-300"><strong className="text-white">Horizontal</strong> = vender <strong>ofertas distintas</strong>: nuevos productos, nuevos customer journeys.</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h4 className="font-bold text-white text-xl">Ejemplo de escalado horizontal con customer journey (caso del coach del inicio)</h4>
                  <p className="text-zinc-300">Vendía un webinar en vivo de 5 días a $49 que llevaba a una oferta de $10K. En vez de buscar más ángulos para vender el $49, agregaron una <strong>oferta de entrada de $17</strong> para quienes no querían pagar $49 todavía, y después un <strong>curso gratuito por email de 5 días</strong>. Clave: el orden importa — nunca empezar gratis y subir, porque así no se genera ingreso; hay que mantener la oferta principal y solo <em>agregar</em> peldaños de entrada más accesibles.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-white text-xl">Más ejemplos de escalado horizontal/customer journey</h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                    <li><strong>E-commerce low ticket (suplementos, 80 productos, ~50 rentables)</strong>: en vez de subir presupuesto en una sola campaña (lo que bajaría el ROAS de forma inevitable), se repartió presupuesto entre múltiples productos, manteniendo el ROAS arriba de 7 en cada uno — escalado horizontal "a la luna".</li>
                    <li><strong>E-commerce high ticket (sillones de $7.000, mesas de $12.000)</strong>: no alcanza con mandar tráfico directo a la web. Se agregó un pop-up para agendar videollamada (FaceTime) con un vendedor, formularios de diseño personalizado, o invitar a llamar directamente — porque la gente con dinero valora más su tiempo que su dinero. Los mejores clientes llegaban por llamada telefónica.</li>
                    <li>Importante: <strong>no poner el botón de "llamar" directamente en el anuncio</strong> para e-commerce high ticket — la gente no está lista para llamar de inmediato desde el anuncio (los "call ads" solo funcionan bien para servicios de emergencia tipo plomería o remolque de autos en Google). Mejor: poner el teléfono bien visible en el sitio web (con alguna animación).</li>
                    <li>Cambiaron de campañas de "ventas" a campañas de <strong>"leads"</strong> para optimizar hacia llamadas entrantes o formularios de diseño personalizado — la clave fue llegar al público correcto sin forzar la venta directa.</li>
                  </ul>
                </div>

              </div>
            </section>

            <section id="section-5">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Globe size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">PASO 4 — Subir presupuesto y buscar la audiencia nueva más fácil de vender</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-12">
                
                <div>
                  <h4 className="font-bold text-white text-xl mb-3">a) Expandirse a nuevos países</h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                    <li>Para ofertas digitales suele ser buena idea (coaching → Reino Unido, Canadá, Australia, Europa).</li>
                    <li>Canadá nunca va a igualar el ROAS de EE.UU. por su tasa de conversión.</li>
                    <li>Australia sí puede competir o incluso superar a EE.UU.</li>
                    <li>Países europeos gastan poco: agregarlos suele sumar solo 1-3% de ingresos totales extra.</li>
                    <li>Para e-commerce, expandirse a otros países suele ser complicado por impuestos, regulaciones, envíos y aduanas — generalmente no es la solución ahí.</li>
                  </ul>
                </div>

                <hr className="border-zinc-800" />

                <div>
                  <h4 className="font-bold text-white text-xl mb-3">b) Ángulos de marketing únicos / raros</h4>
                  <p className="text-zinc-300">Momento de probar esos ángulos "raros" guardados. Contenido UGC (de creadores/influencers) es buena vía: mandarles producto sin dar ninguna directiva creativa y dejar que hagan lo que se les ocurra.</p>
                </div>

                <hr className="border-zinc-800" />

                <div>
                  <h4 className="font-bold text-white text-xl mb-3">c) Probar distintos tipos de campaña (con cautela)</h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                    <li>Su regla general sigue siendo: casi siempre usar campañas de <strong>Leads</strong> y <strong>Ventas</strong> — engagement, tráfico y awareness suelen atraer "gente sin plata".</li>
                    <li><strong>Excepción/hack</strong> cuando de verdad hace falta encontrar audiencias nuevas de middle/top funnel:
                      <ol className="list-decimal pl-5 mt-2 space-y-2">
                        <li>Crear una <strong>conversión personalizada</strong> en Events Manager que dispare cuando alguien visita la página de "gracias por tu compra" (checkout completo).</li>
                        <li>Lanzar una <strong>campaña de engagement</strong> (no de ventas) optimizada para esa conversión personalizada de compra — así el algoritmo busca gente distinta a la habitual, aunque técnicamente sigue siendo una campaña orientada a compra.</li>
                      </ol>
                    </li>
                    <li><strong>Alternativa:</strong> en campaña de ventas, en vez de "maximizar número de conversiones" (su recomendación por defecto), usar <strong>"maximizar valor de conversiones"</strong> — esto sube el CPM porque básicamente le estás pidiendo al algoritmo "buscame gente con más plata". Recomendado solo para productos de <strong>más de $500</strong>; para tickets menores casi nunca es la solución.</li>
                    <li><strong>Otra alternativa:</strong> optimizar por <strong>"maximizar vistas de landing page"</strong> en vez de clics en el link — la diferencia es que la vista de landing page implica que la persona esperó a que cargara el sitio, filtrando mejor a la gente con intención real (hay un drop-off enorme de gente que clickea pero no espera a que cargue la página).</li>
                  </ul>
                  <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl mt-4">
                    <p className="text-zinc-300 text-sm">Advierte que si ya se está targeteando de forma abierta (EE.UU., 21-65 años, todos los géneros e idiomas), agregar nuevos intereses o lookalikes probablemente no sirva mucho más — hay que darle "algo distinto" al algoritmo, como los trucos de arriba.</p>
                  </div>
                </div>

                <hr className="border-zinc-800" />

                <div>
                  <h4 className="font-bold text-white text-xl mb-3">d) Nuevos customer journeys</h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                    <li>Muy recomendable para ofertas de coaching/educativas; casi siempre la vía a seguir para e-commerce también.</li>
                    <li><strong>No</strong> recomienda probar landing pages distintas — no le ha funcionado bien. Prefiere mandar directo a la página de checkout del producto (sobre todo si cuesta menos de $500) — la conveniencia importa más que la educación exhaustiva.</li>
                    <li>Sobre usar webinars o VSLs para vender productos de e-commerce: no es mala idea pero ya no suele ser lo más efectivo en 2026 — la gente no quiere darle tiempo a un pitch largo.</li>
                    <li>Si el negocio usa formularios instantáneos (instant forms), probar cambiar a landing pages (o viceversa).</li>
                  </ul>
                </div>

              </div>
            </section>

            <section id="section-6">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">PASO 5 — Sacar más dinero de la audiencia existente (subir LTV)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Ya con el ROAS lo más bajo posible sin dejar de ser rentable, hay que asegurar la rentabilidad y aumentar el valor de vida del cliente:</p>
                
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <div className="text-[#D5B15B] mt-1"><RefreshCw size={18} /></div>
                    <p className="text-zinc-300"><strong>Ingresos recurrentes:</strong> acá sí reconsiderar suscripciones, membresías o grupos de Facebook pagos con contenido/educación extra — incluso para negocios de producto físico.</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="text-[#D5B15B] mt-1"><Users size={18} /></div>
                    <div className="text-zinc-300">
                      <strong>Marketing de afiliados</strong>, dos formas:
                      <ol className="list-decimal pl-5 mt-2 space-y-1">
                        <li>Crear un programa de afiliados donde clientes actuales o influencers promocionen la marca (TikTok Shop es la mejor vía para negocios de producto).</li>
                        <li>Promocionar como afiliado ofertas de terceros que sean útiles para la propia audiencia pero que uno no quiere desarrollar por su cuenta (ejemplo personal del autor: promociona GoHighLevel en vez de crear su propio software).</li>
                      </ol>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="text-[#D5B15B] mt-1"><DollarSign size={18} /></div>
                    <p className="text-zinc-300"><strong>Ofertas de alto ticket:</strong> crear un paquete de al menos $500-$1.000, incluso para negocios de e-commerce de bajo ticket, aprovechando a los clientes ya fieles.</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="text-[#D5B15B] mt-1"><ArrowUpCircle size={18} /></div>
                    <p className="text-zinc-300"><strong>Subir precios solo cuando la demanda lo empuja</strong> (no antes) — aplica también a negocios de servicios (renovación de hogar, paisajismo). Es la forma sostenible de hacerlo; subir precios antes de tener suficiente demanda "todavía no lo vale".</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="text-[#D5B15B] mt-1"><ShoppingCart size={18} /></div>
                    <p className="text-zinc-300"><strong>Nuevos productos:</strong> la mejor forma de escalar cualquier empresa — se puede avisar a la base de emails sin necesidad de correr ads, y además ayuda al SEO (nuevas palabras clave a posicionar).</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="text-[#D5B15B] mt-1"><Target size={18} /></div>
                    <p className="text-zinc-300"><strong>Mirar otras plataformas en esta etapa:</strong> Amazon, Etsy, Google Ads, Pinterest Ads (rara vez recomendable), TikTok Ads — aunque aclara que consolidar bien Meta Ads sigue siendo la solución correcta para el 95% de los negocios, por ser la de mayor ROI posible.</p>
                  </li>
                </ul>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
