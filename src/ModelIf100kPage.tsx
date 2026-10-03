import { TableOfContents } from './components/TableOfContents';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Target, DollarSign, TrendingUp, AlertTriangle, Zap, BarChart,
  CheckSquare, Brain, Shield, RefreshCw, List, Star, Columns, Maximize2, PanelTop
} from 'lucide-react';

const ArcadiaLogo = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15.41 3.53H19.78L12.35 18.06H7.98L15.41 3.53Z" />
    <path d="M6.02 12.37H10.39L8.21 16.65H3.84L6.02 12.37Z" />
  </svg>
);

export const ModelIf100kPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {
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
    <div className={`mx-auto w-full pb-20 animate-in fade-in duration-300 ${videoMode === 'side' ? 'max-w-[95%]' : 'max-w-3xl'}`}>
      <TableOfContents sections={[
        {"id":"section-1","title":"Gancho inicial"},
        {"id":"section-2","title":"Validación del playbook (prueba social)"},
        {"id":"section-3","title":"Principio #1: nunca arrancar por lo que querés vender"},
        {"id":"section-4","title":"Principio #2: evitar liderar con el mecanismo único"},
        {"id":"section-5","title":"Principio #3: entender qué temen (no solo qué quieren)"},
        {"id":"section-6","title":"Principio #4: validar el ángulo con dinero, no con tiempo"},
        {"id":"section-7","title":"El negocio como ecuación, no como juego emocional"},
        {"id":"section-8","title":"Cómo convertir llamadas agendadas en dinero"},
        {"id":"section-9","title":"Iterar con datos reales de las llamadas"},
        {"id":"section-10","title":"Los 4 pasos resumidos"},
        {"id":"section-11","title":"Ejemplo final de escalado"},
        {"id":"section-12","title":"Cierre promocional"}
      ]} />

      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
          <ArcadiaLogo />
          <span className="text-zinc-500">Boards</span>
          <span className="text-zinc-700">/</span>
          <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('model_parent')}>Model</span>
        </div>
      </div>

      <div className="flex items-start gap-5 mb-12">
        <div className="border border-[#D5B15B]/30 p-3.5 rounded-2xl text-[#D5B15B] bg-[#1A1A1E] mt-1 shadow-[0_0_20px_rgba(213,177,91,0.15)]">
          <DollarSign size={28} strokeWidth={1.5} />
        </div>
        <div>
          <p className="text-sm text-zinc-500 mb-2 font-medium">Model</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">If I Had NOTHING, Here's How I'd Make $100,000 in 3 Months</h1>
        </div>
      </div>

      <div className={`flex items-start gap-8 ${videoMode === 'side' ? 'flex-row' : 'flex-col'}`}>

        {/* Video */}
        <div
          ref={videoContainerRef}
          style={videoMode === 'side' ? { width: `${videoWidth}px` } : {}}
          className={`relative ${videoMode === 'side' ? 'order-2 shrink-0 sticky top-6' : 'order-1 w-full'} ${videoMode === 'top' ? 'sticky top-6 z-30' : ''} ${!isResizing ? 'transition-all duration-500' : ''}`}
        >
          {videoMode === 'side' && (
            <div
              onMouseDown={startResizing}
              className="absolute -left-4 top-0 bottom-0 w-8 cursor-col-resize z-20 group/resizer flex items-center justify-center"
            >
              <div className={`h-16 w-1 rounded-full transition-colors duration-200 ${isResizing ? 'bg-[#D5B15B]' : 'bg-white/10 group-hover/resizer:bg-white/30'}`} />
            </div>
          )}
          <div className="w-full aspect-video rounded-3xl overflow-hidden border border-[#27272A]/80 shadow-2xl mb-8 bg-[#121214] relative group">
            
            <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
              {videoMode !== 'default' && (
                <button
                  onClick={() => setVideoMode('default')}
                  className="bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-xl backdrop-blur-md border border-white/10 flex items-center gap-2 text-sm font-medium"
                >
                  <Maximize2 size={16} />
                  Desfijar
                </button>
              )}
              {videoMode !== 'side' && (
                <button
                  onClick={() => setVideoMode('side')}
                  className="bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-xl backdrop-blur-md border border-white/10 flex items-center gap-2 text-sm font-medium"
                >
                  <Columns size={16} />
                  Fijar lateral
                </button>
              )}
              {videoMode !== 'top' && (
                <button
                  onClick={() => setVideoMode('top')}
                  className="bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-xl backdrop-blur-md border border-white/10 flex items-center gap-2 text-sm font-medium"
                >
                  <PanelTop size={16} />
                  Fijar arriba
                </button>
              )}
            </div>

            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Ab_6p3dCs6c"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Content */}
        <div className={`${videoMode === 'side' ? 'order-1 flex-1 min-w-0' : 'order-2 w-full'}`}>
          <div className="space-y-16">

            <section id="section-1">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Gancho inicial</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">El creador reacciona a un lead de su CRM que gastó <strong>$26.000 en un programa para lanzar una agencia</strong> y quedó decepcionado. Su punto: no hace falta ese presupuesto para lanzar y escalar una agencia o negocio de consultoría a <strong>$10.000-$30.000/mes en 90 días o menos</strong>.</p>
                <div className="bg-[#1A1A1E] border-l-4 border-[#D5B15B] p-5 rounded-xl">
                  <p className="text-zinc-300">Como prueba, menciona un cliente que consiguió <strong>3 llamadas agendadas en 24 horas a $10 cada una</strong>.</p>
                </div>
              </div>
            </section>

            <section id="section-2">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Star size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Validación del playbook (prueba social)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Afirma haber reservado casi <strong>2.000 llamadas de venta</strong> para clientes en más de 50 nichos distintos, con ejemplos concretos:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { nicho: "Seguros", resultado: "$0 a $25K/mes" },
                    { nicho: "Remodelación de cocinas", resultado: "Deal de $8.000" },
                    { nicho: "Mercado francés", resultado: "$0 a $40K/mes" },
                    { nicho: "Venta a gimnasios", resultado: "$0 a $25K/mes" },
                    { nicho: "Clínicas estéticas", resultado: "$0 a $20K/mes" },
                    { nicho: "Consultorios dentales", resultado: "$0 a $200K/mes" },
                  ].map((item, i) => (
                    <div key={i} className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-4 flex items-center justify-between gap-3">
                      <span className="text-zinc-400 text-sm">{item.nicho}</span>
                      <span className="text-[#D5B15B] font-bold text-sm whitespace-nowrap">{item.resultado}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="section-3">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Principio #1: nunca arrancar por lo que querés vender</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <div className="bg-[#1A1A1E] border border-red-500/30 p-5 rounded-xl">
                  <p className="text-zinc-300"><strong className="text-red-400">El error fatal</strong> es empezar por el producto/servicio ("quiero vender mi herramienta de IA", "mis creativos UGC con IA"). Hay que empezar por <strong>a quién le vas a vender</strong>.</p>
                </div>
                <p className="text-white font-semibold">Criterios para elegir el nicho:</p>
                <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                  <li><strong>TAM (mercado total direccionable) suficientemente grande</strong> — ejemplo dado: 60.000+ negocios potenciales.</li>
                  <li><strong>Fácilmente alcanzable</strong>: por contenido orgánico, grupos de Facebook, o —su preferencia— <strong>ads pagos</strong>, porque la velocidad de validación es mucho mayor que con contenido o outreach manual.</li>
                  <li><strong>Dolor real</strong>: el bajo costo por lead/llamada en su ejemplo se explica porque el nicho elegido "se está muriendo" por no poder adquirir clientes de forma predecible.</li>
                </ul>
              </div>
            </section>

            <section id="section-4">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Shield size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Principio #2: evitar liderar con el "mecanismo único"</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Nunca vender hablando de la tecnología o método (agente de voz con IA, setter con IA, "speed to lead", sitio web, etc.).</p>
                <div className="space-y-4">
                  <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl">
                    <p className="text-zinc-300"><strong className="text-white">Razón:</strong> Los negocios tienen ese dolor precisamente porque <strong>no entienden el mecanismo</strong> que resuelve su problema. Si lo entendieran, no necesitarían un agency owner o consultor.</p>
                  </div>
                  <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl">
                    <p className="text-zinc-300">Hablar del mecanismo en un mercado poco sofisticado solo atrae a gente inteligente que <strong>"hackea tu funnel"</strong> y no termina pagando.</p>
                  </div>
                </div>
                <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-5 rounded-xl">
                  <p className="text-zinc-300">Hay que hablarle a la gente que quiere <strong>resultados aburridos y concretos</strong>: en el ejemplo del nicho usado, el único idioma que hablan es <strong>"más trabajos"</strong> y <strong>"más leads"</strong>.</p>
                </div>
              </div>
            </section>

            <section id="section-5">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Brain size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Principio #3: entender qué temen (no solo qué quieren)</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">En el ejemplo, analizando llamadas de venta reales del nicho, el <strong>miedo principal</strong> era: haber montado un negocio para tener libertad, pero terminar peor que en un empleo — porque como dueños de negocio de servicios no tienen la habilidad de adquirir clientes de forma predecible, y temen no poder sostener a su familia ni estar presentes con ellos.</p>
                <div className="bg-[#1A1A1E] border-l-4 border-[#D5B15B] p-5 rounded-xl">
                  <p className="text-zinc-300">La promesa de venta combina ambos ejes: <strong>darles lo que quieren</strong> (más leads, más trabajos) y <strong>alejarlos lo más posible de lo que temen</strong> (falta de previsibilidad en la adquisición de clientes).</p>
                </div>
              </div>
            </section>

            <section id="section-6">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <DollarSign size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Principio #4: validar el ángulo con dinero, no con tiempo</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Crítica directa al outreach frío tradicional (cold email, cold calls) que la gente sostiene durante 6 meses a 3 años sin feedback real.</p>
                <div className="bg-[#1A1A1E] border border-red-500/20 p-5 rounded-xl">
                  <p className="text-zinc-300 italic">"Si preferís cambiar tu tiempo por atención antes que cambiar dinero, todavía no estás listo para tener un negocio" — la idea central de un negocio es dejar de cambiar tiempo por dinero.</p>
                </div>
                <p className="text-white font-semibold">Método: ir directo a ads con presupuestos chicos ($20-$50/día).</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800 text-center">
                    <p className="text-[#D5B15B] text-2xl font-bold">$5</p>
                    <p className="text-zinc-400 text-sm mt-1">Costo por lead</p>
                  </div>
                  <div className="bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800 text-center">
                    <p className="text-[#D5B15B] text-2xl font-bold">$10</p>
                    <p className="text-zinc-400 text-sm mt-1">Costo por llamada auto-agendada</p>
                  </div>
                  <div className="bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800 text-center">
                    <p className="text-[#D5B15B] text-2xl font-bold">☕</p>
                    <p className="text-zinc-400 text-sm mt-1">"Lo que cuesta un café de Starbucks"</p>
                  </div>
                </div>
                <p className="text-zinc-300">Si no se puede validar que el mercado responde a la oferta con acciones concretas (dejar sus datos, agendar), simplemente se <strong>deja de targetear ese mercado</strong>.</p>
              </div>
            </section>

            <section id="section-7">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <BarChart size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">El negocio como ecuación, no como juego emocional</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Una vez que se "descifra" cómo conseguir que extraños agenden llamadas de venta, el negocio se vuelve una simple ecuación matemática: definís el resultado que querés (ej. $10.000/mes o $10.000/día) y de ahí se derivan las variables necesarias (cantidad de llamadas necesarias).</p>
                <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl">
                  <p className="text-zinc-300">Contrasta esto con la mentalidad emocional típica ("¿cómo voy a hacer dinero?", "¿voy a tener suerte?") — insiste en que no se trata de "estar probado", sino simplemente de poder conseguir atención de extraños y llevarlos a una llamada.</p>
                </div>
              </div>
            </section>

            <section id="section-8">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <AlertTriangle size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Cómo convertir llamadas agendadas en dinero</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-white text-xl">Cuello de botella #1: que no se presenten a la llamada (no-shows)</h4>
                  <h4 className="font-bold text-white text-xl">Cuello de botella #2: que lleguen sin saber nada de lo que se resuelve</h4>
                </div>
                <hr className="border-zinc-800" />
                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg">Solución propuesta:</h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                    <li>Es imperativo contactar al lead <strong>dentro de los primeros 3 minutos</strong> de que se registra.</li>
                    <li>La única solución sostenible es un <strong>agente de IA (AI setter)</strong> que tome la info del formulario/página de aplicación y contacte a cada lead automáticamente ofreciendo valor.</li>
                    <li>Construir <strong>3-5 "mini activos de venta"</strong> (mini sales assets) cuyo objetivo es:
                      <ul className="list-[circle] pl-6 mt-2 space-y-1 text-zinc-400">
                        <li>Remover creencias erróneas que tienen los prospectos.</li>
                        <li>Mostrarles el "playbook" y sistema que usa el 1% top de su nicho.</li>
                        <li>Generar urgencia (llama a este activo específico "manufacturer's urgency" — urgencia fabricada/construida).</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="section-9">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <RefreshCw size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Iterar con datos reales de las llamadas</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Todo lo hecho antes de la primera venta cerrada es <strong>hipótesis</strong>. El momento en que se consiguen las primeras llamadas reales es cuando hay que ajustar todo (mensajes, contenido de nutrición, VSL, pitch de venta) para que coincida con lo que el prospecto realmente dice que quiere.</p>
                <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl">
                  <p className="text-zinc-300"><strong className="text-white">Ejemplo:</strong> si asumías que el cliente quería un "AI setter" para resolver velocidad de respuesta, pero en la llamada te dice que en realidad el problema es falta de flujo de leads, hay que cambiar todo el mensaje, los activos de nutrición, el contenido y el pitch de venta para reflejar eso.</p>
                </div>
                <p className="text-zinc-300">Incluso teniendo data previa de otros nichos, cuando se entra a uno nuevo sin data, <strong>las llamadas de venta se usan como actividad de recolección de datos</strong> para mejorar oferta, ads, VSL y demás activos.</p>
                <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-5 rounded-xl">
                  <p className="text-zinc-300">Cuando el mensaje pre-llamada queda perfectamente alineado con lo que el prospecto realmente quiere y teme, ahí "empieza a imprimir dinero" — describe ese estado como casi volverse un <strong>"pastor"</strong> predicándole al prospecto.</p>
                </div>
              </div>
            </section>

            <section id="section-10">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <List size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Los 4 pasos resumidos</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-4">
                {[
                  { num: "1", title: "Elegir un mercado", desc: "Cualquier nicho, siempre que sea suficientemente grande y alcanzable por ads, contenido u outbound." },
                  { num: "2", title: "Entender qué quieren y qué temen", desc: "Dárselo y alejarlos de lo que temen." },
                  { num: "3", title: "Testear con ads", desc: "Presupuestos chicos ($10-$50/día) — llega a recomendar literalmente sacrificar gastos personales (Uber Eats, café, incluso ayuno) para poder costear el testeo." },
                  { num: "4", title: "Usar el feedback de las llamadas para iterar y escalar", desc: "Convertir hipótesis en certezas con datos reales." },
                ].map((step, i) => (
                  <div key={i} className="flex gap-5 items-start bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl">
                    <div className="w-9 h-9 rounded-lg bg-[#D5B15B]/10 border border-[#D5B15B]/30 flex items-center justify-center text-[#D5B15B] font-bold text-lg shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <p className="font-bold text-white">{step.title}</p>
                      <p className="text-zinc-400 text-sm mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="section-11">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Ejemplo final de escalado</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Con este método, plantea que se puede llegar a gastar <strong>$500 en ads</strong> para conseguir un <strong>cliente de $7.000</strong>, y eventualmente — al entender tan bien el mercado — subir el ticket a <strong>$15.000</strong> manteniendo una tasa de cierre del <strong>20%</strong>.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800 text-center">
                    <p className="text-[#D5B15B] text-2xl font-bold">$500</p>
                    <p className="text-zinc-400 text-sm mt-1">Inversión en ads</p>
                  </div>
                  <div className="bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800 text-center">
                    <p className="text-[#D5B15B] text-2xl font-bold">$7K→$15K</p>
                    <p className="text-zinc-400 text-sm mt-1">Ticket del cliente</p>
                  </div>
                  <div className="bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800 text-center">
                    <p className="text-[#D5B15B] text-2xl font-bold">20%</p>
                    <p className="text-zinc-400 text-sm mt-1">Tasa de cierre</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="section-12">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <CheckSquare size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Cierre promocional</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
                <p className="text-zinc-300">Ofrece ayudar a validar mercado/oferta y lanzar campañas para conseguir llamadas de venta — sin cobrar $26.000, prefiriendo que ese dinero se invierta directamente en ads.</p>
                <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-6 rounded-xl">
                  <p className="text-zinc-300"><strong>Ejemplo de cierre:</strong> un cliente lanzó su campaña a las 5pm con $35/día de presupuesto y ya tenía su primera llamada de venta agendada a las 9pm, en un nicho sin experiencia previa — reforzando que no se necesitan $20.000 para empezar a conseguir llamadas, sino $20-$30 por día.</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
