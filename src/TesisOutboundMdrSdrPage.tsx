import { TableOfContents } from './components/TableOfContents';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Pin, PinOff, Columns, Maximize2, PanelTop, ArrowDown, Layers, UserPlus, Briefcase, PhoneCall, Mail, Megaphone, Target, CheckCircle2, XCircle, AlertTriangle, BarChart, TrendingUp, Users, DollarSign, BookOpen, Calculator , Activity , ListOrdered , MessageSquare , Clock , Filter , ArrowLeft , ArrowRight , MessageCircle , Zap , MousePointerClick , Settings , Cpu, FileText, PhoneForwarded, Search, Info, PlayCircle, Video, Compass, Crosshair, HelpCircle, Lightbulb, ArrowRightLeft, ClipboardCheck, PhoneOff, SlidersHorizontal, Handshake } from 'lucide-react';

const ArcadiaLogo = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15.41 3.53H19.78L12.35 18.06H7.98L15.41 3.53Z" />
    <path d="M6.02 12.37H10.39L8.21 16.65H3.84L6.02 12.37Z" />
  </svg>
);

const FlowStep = ({ title, final = false }: { title: string, final?: boolean }) => (
  <div className={`w-full max-w-[240px] py-3.5 px-4 rounded-xl text-center font-bold text-[14px] shadow-sm
    ${final 
      ? 'bg-[#FFECE1] text-[#9A4B22]' 
      : 'bg-[#ECEEFE] text-[#484B75]'
    }
  `}>
    {title}
  </div>
);

const FlowArrow = () => (
  <div className="flex flex-col items-center my-1.5 opacity-50">
    <ArrowDown size={18} className="text-zinc-500" />
  </div>
);

const OutreachCard = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="bg-[#EBF7EF]/10 border border-[#A6E1BA]/30 rounded-xl p-4 text-center shadow-sm">
    <div className="font-bold text-[#A6E1BA]">{title}</div>
    <div className="text-[13px] text-[#A6E1BA]/80 mt-1">{subtitle}</div>
  </div>
);

export const TesisOutboundMdrSdrPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {
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
        // Restrict between 300px and 800px or up to 70% of screen width
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
      // add a body class to prevent selection while dragging
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
      <TableOfContents sections={[{"id":"section-0","title":"SDRs (Outbound)"},{"id":"section-1","title":"MDRs (Inbound)"},{"id":"section-2","title":"Veredicto: SDR vs MDR"},{"id":"section-3","title":"Aviso: GRAN ERROR antes de continuar"},{"id":"section-4","title":"Modelos de Ingresos MDR"},{"id":"section-5","title":"Modelos MDR Comunes"},{"id":"section-6","title":"Funnel Low Ticket + Setter Outbound"},{"id":"section-7","title":"Funnel Low Ticket + Llamada de Implementación"},{"id":"section-8","title":"Funnel de DM Setting"},{"id":"section-9","title":"Eventos en Vivo"},{"id":"section-10","title":"Encrucijada"},{"id":"section-11","title":"Leads Por Setter Al Mes"},{"id":"section-12","title":"Benchmarks Comunes:"},{"id":"section-13","title":"Si Faltan Leads"},{"id":"section-14","title":"¿Deberían Los Setters Tomar Reservas Directas?"},{"id":"section-15","title":"El Problema de Capacidad de Triage"},{"id":"section-16","title":"KPIs de Setter Para Funnel de Llamada"},{"id":"section-17","title":"Velocidad al Lead"},{"id":"section-18","title":"Buckets de Leads"},{"id":"section-19","title":"Lógica de Marcado Manual"},{"id":"section-20","title":"Dialer.io Automático"},{"id":"section-21","title":"Mejores Prácticas"},{"id":"section-22","title":"Mejores Prácticas de Lógica de Marcación"},{"id":"section-23","title":"Scripts de Mensajes de Texto"},{"id":"section-24","title":"Gran Error"},{"id":"section-25","title":"Leyes TCPA:"},{"id":"section-26","title":"Nota Rápida Sobre IA / Automatización"},{"id":"section-27","title":"Scripts de Email:"},{"id":"section-28","title":"Scripts de Llamadas"},{"id":"section-29","title":"Diferentes Variaciones"},{"id":"section-30","title":"Guion Outbound"},{"id":"section-31","title":"Discovery:"},{"id":"section-32","title":"Transición y Cierre"},{"id":"section-33","title":"Calificar (Opcional)"},{"id":"section-34","title":"Cierre (Ending)"},{"id":"section-35","title":"Llamada de Triage"}]} />
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
          <UserPlus size={28} strokeWidth={1.5} />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">Definiendo Outbound: Modelos MDR vs. SDR</h2>
          <p className="text-zinc-400 text-lg">Hay dos tipos de programación de citas outbound: MDRs (Representantes de Desarrollo de Marketing) y SDRs (Representantes de Desarrollo de Ventas).</p>
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
              src="https://www.youtube.com/embed/oWYKaIULG9Q" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
        ></iframe>
          </div>
        </div>

        {/* Text Content Area */}
        <div className={`flex-1 min-w-0 w-full ${isVideoPinned ? 'order-1' : 'order-2'}`}>

      {/* Introducción BDRs */}
      <div className="border border-[#4A3B18]/60 bg-[#2A2110]/30 rounded-3xl p-8 mb-16 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-10 -right-10 text-[#4A3B18]/20 rotate-12">
          <Briefcase size={180} strokeWidth={1} />
        </div>
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-[#E8CD82] mb-4 flex items-center gap-2">
            <Briefcase size={20}/> A veces se les llama BDRs (Representantes de Desarrollo de Negocios)
          </h3>
          <p className="text-[16px] text-[#E8CD82]/90 leading-relaxed mb-4">
            Para usar la terminología correcta, los BDRs se enfocan más en generar alianzas estratégicas, relaciones de joint venture (JV), etc. De ahí "Desarrollo de Negocios".
          </p>
          <p className="text-[16px] text-[#E8CD82]/90 leading-relaxed font-semibold">
            No vamos a tocar ese tema en este entrenamiento porque es algo completamente distinto.
          </p>
        </div>
      </div>

      <div className="space-y-16">
        {/* SDRs Section */}
        <section id="section-0" >
          <div className="mb-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
              <PhoneCall size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Representantes de Desarrollo de Ventas (SDRs)</h3>
          </div>
          
          <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
            <p className="text-[16px] text-zinc-300 mb-6 font-medium">Esto es lo que tradicionalmente se piensa cuando se habla de "Outbound"</p>
            <h4 className="text-lg font-bold text-white mb-4">Cómo funciona normalmente:</h4>
            
            <ul className="space-y-6 mb-8">
              <li className="flex gap-4">
                <div className="mt-1 text-[#D5B15B]"><Target size={20} /></div>
                <div>
                  <p className="text-[16px] text-white font-medium mb-1">Armas una lista fría</p>
                  <ul className="list-disc pl-5 text-zinc-400 space-y-1">
                    <li>Son personas que no tienen idea de quién eres</li>
                    <li>Puedes comprarla (Zoominfo, Seamless, Apollo, etc.)</li>
                    <li>Puedes construirla (equipo de asistentes virtuales, etc.)</li>
                  </ul>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 text-[#D5B15B]"><Megaphone size={20} /></div>
                <div>
                  <p className="text-[16px] text-white font-medium mb-1">Los reps hacen outbound sobre esa lista fría</p>
                  <p className="text-[15px] text-zinc-400 mb-1">Usualmente es una combinación de:</p>
                  <ul className="list-disc pl-5 text-zinc-400 space-y-1">
                    <li>Outreach por correo frío</li>
                    <li>Outreach por LinkedIn</li>
                    <li>Llamadas en frío reales</li>
                  </ul>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 text-[#D5B15B]"><CheckCircle2 size={20} /></div>
                <div>
                  <p className="text-[16px] text-white font-medium mb-1">Su objetivo es agendar una cita de 15 minutos</p>
                  <ul className="list-disc pl-5 text-zinc-400 space-y-1">
                    <li>Que luego se asigna a un "Account Executive" (AE)</li>
                  </ul>
                </div>
              </li>
            </ul>

            <div className="p-5 bg-[#1A1A1E] rounded-xl border border-zinc-800 mb-8">
              <p className="text-[15px] text-zinc-300">
                No trabajan en conjunto con ningún esfuerzo de marketing inbound (eso es lo que hacen los MDRs).
              </p>
            </div>

            <h4 className="text-lg font-bold text-white mb-4">Los equipos SDR operan dentro de un espectro:</h4>
            <p className="text-[16px] text-zinc-400 mb-6 italic">Bajo volumen, alta personalización, multicanal → Alto volumen, baja personalización, enfocado en un canal</p>
            
            <p className="text-[15px] text-white mb-2 font-medium">Esto generalmente se determina por:</p>
            <ul className="list-disc pl-5 text-zinc-400 space-y-2 mb-8">
              <li>TAM (Tamaño del mercado)</li>
              <li>LTV (Cuánto vale cada cliente)</li>
              <li>Accesibilidad del cliente en ciertos canales</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-6 shadow-md border-t-2 border-t-[#D5B15B]">
                <h5 className="font-bold text-white text-lg mb-3">Ejemplo #1: Empresas Fortune 500. LTV de 100k+</h5>
                <p className="text-[15px] text-zinc-400 mb-3">Aquí los SDRs usan un enfoque de marketing basado en cuentas (ABM), donde básicamente se crea una estrategia de marketing completa para UN cliente específico. Y la campaña dura años.</p>
                <p className="text-[15px] text-zinc-400 mb-4">Piensa en "Dream 100". Ese es el tipo de enfoque.</p>
                <p className="text-[15px] text-white font-medium mb-2">Tu enfoque va a ser:</p>
                <ul className="list-disc pl-5 text-zinc-400 space-y-1">
                  <li>Hiper personalizado</li>
                  <li>Bajo volumen durante un horizonte de tiempo largo</li>
                  <li>Multicanal</li>
                  <li className="list-none pl-0 text-sm mt-2 italic">LinkedIn, correo frío, correo directo, ferias comerciales, llamadas en frío</li>
                </ul>
              </div>

              <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-6 shadow-md border-t-2 border-t-[#D5B15B]">
                <h5 className="font-bold text-white text-lg mb-3">Ejemplo #2: Agentes inmobiliarios que se anuncian en Zillow. LTV de 10k</h5>
                <p className="text-[15px] text-zinc-400 mb-3">Aquí podrías ver un enfoque outbound de mayor volumen. Por ejemplo:</p>
                
                <p className="text-[15px] text-white font-medium mt-4">Campañas de correo frío escaladas y automatizadas con mínima personalización</p>
                <ul className="list-disc pl-5 text-zinc-400 space-y-1 mb-3">
                  <li>Impulsan a agendar citas de 15 minutos con SDRs</li>
                </ul>
                
                <p className="text-[15px] text-white font-medium">Campaña separada, escalada y automatizada para LinkedIn</p>
                <ul className="list-disc pl-5 text-zinc-400 space-y-1 mb-4">
                  <li>O hecha por asistentes virtuales</li>
                  <li>También → cita de 15 minutos</li>
                </ul>

                <p className="text-[15px] text-white font-medium">Los leads que interactúan se envían (vía Zapier) a una lista que los SDRs llaman:</p>
                <ul className="list-disc pl-5 text-zinc-400 space-y-1">
                  <li>Aperturas de correo</li>
                  <li>Respuestas de correo</li>
                  <li>Respuestas de LinkedIn</li>
                  <li className="list-none pl-0 font-medium text-[#D5B15B] mt-1">→ todo esto activa que el SDR haga una "llamada tibia"</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg">
            <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <BarChart className="text-[#D5B15B]" size={24} />
              Modelo SDR: Pros y Contras
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <h5 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2"><CheckCircle2 size={20} /> Pros:</h5>
                <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                  <li>Ideal para empresas con LTV de 100k+ y TAM pequeño</li>
                  <li>
                    <span className="font-medium text-white">Ideal para "subir de mercado" (ir a mercados más grandes)</span>
                    <p className="text-sm text-zinc-400 mt-1">Ej: empresa de 10-20M/año enfocada en PyMEs que quiere subir a mercado medio/empresarial y aumentar drásticamente su precio/AOV/LTV</p>
                  </li>
                  <li>
                    <span className="font-medium text-white">Muy escalable si está validado</span>
                    <p className="text-sm text-zinc-400 mt-1">"Escala lineal"</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 className="text-xl font-bold text-rose-400 mb-4 flex items-center gap-2"><XCircle size={20} /> Contras:</h5>
                <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                  <li>La frecuencia de citas y cierres por rep es menor, lo que implica un salario base más alto</li>
                </ul>
                <div className="mt-4 p-4 bg-[#1A1A1E] rounded-lg border border-zinc-800">
                  <p className="text-sm text-zinc-400 font-bold mb-2">Nota al margen:</p>
                  <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1">
                    <li>Mientras más transaccional/rápido sea tu proceso de ventas, más tiende tu compensación hacia el 100% comisión (Ej: pérdida de peso)</li>
                    <li>Mientras más largo sea tu ciclo de ventas, la compensación tiende hacia un salario base más alto y menos comisión</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1E] rounded-xl p-6 border border-zinc-800">
              <h5 className="text-lg font-bold text-white mb-4">Los modelos SDR deberían usarse para funciones de mercado medio/empresarial, porque:</h5>
              <ul className="list-disc pl-5 text-zinc-300 space-y-2 mb-6">
                <li>Esas empresas son más difíciles de alcanzar por medio de anuncios</li>
                <li>
                  Necesitas un AOV/LTV alto para que la economía del modelo SDR/AE funcione
                  <ul className="list-[circle] pl-5 mt-1 text-zinc-400">
                    <li>Porque, de nuevo, la frecuencia es baja</li>
                    <li>Los salarios son altos</li>
                  </ul>
                </li>
              </ul>
              
              <div className="border-l-4 border-l-[#D5B15B] pl-4 py-2 mt-6">
                <p className="text-[16px] text-white font-medium mb-2">Es MUCHO más difícil de lograr, y aún más difícil de escalar</p>
                <ul className="list-disc pl-5 text-zinc-400 space-y-1">
                  <li>Especialmente para servicios (reclutamiento, etc.)</li>
                  <li>Funciona mejor para tecnología/SaaS con un producto nuevo que apunta a mercado medio en adelante</li>
                  <li>Incluso si vas por PyMEs y logras que funcione (como en LinkedIn) — el 99% de esas personas no puede escalar más allá de 2M/año con este modelo porque la economía se rompe.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MDRs Section */}
        <section id="section-1" >
          <div className="mb-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
              <Mail size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Representantes de Desarrollo de Marketing (MDRs)</h3>
          </div>

          <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8">
            <p className="text-[16px] text-zinc-300 mb-6 font-medium">Estos reps capitalizan los leads inbound generados por marketing.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-[15px] text-white font-medium mb-3">Esto puede ser:</p>
                <ul className="list-disc pl-5 text-zinc-400 space-y-2">
                  <li>Impulsado por pago (VSL, webinar, lead magnet, etc.)</li>
                  <li>Impulsado por contenido (lo mismo pero desde IG/YT, etc.)</li>
                  <li>Impulsado por eventos (patrocinios, charlas, etc.)</li>
                  <li>Etc.</li>
                </ul>
              </div>
              
              <div>
                <p className="text-[15px] text-white font-medium mb-3">Los leads se registran para algún tipo de lead magnet:</p>
                <ul className="list-disc pl-5 text-zinc-400 space-y-2">
                  <li>Se asignan por round robin a los MDRs</li>
                  <li>Los reps los contactan vía:
                    <ul className="list-[circle] pl-5 mt-1 text-zinc-500">
                      <li>Teléfono</li>
                      <li>Texto (Automatizado/IA + intervención humana)</li>
                      <li>Correo (Automatizado/IA) <span className="italic">"Como si viniera del rep"</span></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1A1A1E] rounded-xl p-6 border border-zinc-800 mb-8">
              <p className="text-[16px] text-white font-medium mb-3">Se hace triage (clasificación) del lead:</p>
              <ul className="list-disc pl-5 text-zinc-400 space-y-2 mb-4">
                <li>Ya sea al momento del contacto (tras una llamada fría)</li>
                <li>O una cita de 15 minutos agendada desde texto/correo vía link de reserva</li>
              </ul>
              <p className="text-[16px] text-[#D5B15B] font-bold">Se pasa al closer.</p>
            </div>

            <h4 className="text-lg font-bold text-white mb-4">Los mejores equipos de setting tienen lógica avanzada de marcado (dialing)</h4>
            <p className="text-[15px] text-zinc-300 mb-4">
              Una buena lógica de marcado fuerza la máxima eficiencia lead → cita, obligando a los setters a enfocarse en los leads de forma que se prioricen óptimamente según:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                <p className="font-bold text-white mb-2">Recencia</p>
                <p className="text-sm text-zinc-400">(qué tan nuevo es el lead)</p>
              </div>
              <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                <p className="font-bold text-white mb-2">Frecuencia</p>
                <p className="text-sm text-zinc-400 mb-1">Cuántas veces contactamos al lead</p>
                <p className="text-sm text-zinc-500 italic">Depende del día (más reciente → más contactos ese día)</p>
              </div>
              <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                <p className="font-bold text-white mb-2">Valor</p>
                <p className="text-sm text-zinc-400 mb-1">Factores específicos como:</p>
                <ul className="list-disc pl-4 text-sm text-zinc-500">
                  <li>Score de crédito/liquidez</li>
                  <li>Valor de compra/AOV (si es comprador)</li>
                  <li>Etc.</li>
                </ul>
              </div>
            </div>
            
            <p className="text-[14px] text-zinc-500 italic mb-6">Esto tendrá más sentido después. También — aquí es donde se complica. No te preocupes mucho por esto si eres nuevo.</p>

            <div className="border border-[#D5B15B]/40 bg-[#D5B15B]/10 p-5 rounded-xl text-center">
              <p className="text-lg font-bold text-[#E8CD82]">El 99.99% de los equipos de appointment setting exitosos en nuestra industria son modelos MDR. No SDR.</p>
            </div>
          </div>

          <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg">
            <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <BarChart className="text-[#D5B15B]" size={24} />
              Modelo MDR: Pros y Contras
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2"><CheckCircle2 size={20} /> Pros:</h5>
                <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                  <li>Ideal para PyMEs y B2C</li>
                  <li>Mucho más fácil de hacer funcionar</li>
                  <li>
                    <span className="font-medium text-white">Permite escalar muchísimo más con tu marketing</span>
                    <p className="text-sm text-zinc-400 mt-1">Más ingresos con el mismo gasto en anuncios</p>
                    <p className="text-sm text-emerald-500/80 font-medium mt-1">= más escala</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 className="text-xl font-bold text-rose-400 mb-4 flex items-center gap-2"><XCircle size={20} /> Contras:</h5>
                <ul className="list-disc pl-5 text-zinc-300 space-y-3">
                  <li>Limitado por la escala/capacidad del marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Veredicto */}
        <section id="section-2" className="bg-gradient-to-br from-[#121214] to-[#1A1A1E] border border-[#D5B15B]/40 rounded-[2rem] p-8 lg:p-10 shadow-[0_10px_40px_rgba(213,177,91,0.05)]">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <TrendingUp className="text-[#D5B15B]" size={28} />
            Veredicto: ¿Deberías usar el modelo SDR o el modelo MDR?
          </h3>
          
          <div className="space-y-6 text-[16px] text-zinc-300">
            <p>
              A menos que apuntes ÚNICAMENTE a empresas de 50-100M+ o a un TAM extremadamente pequeño:
            </p>
            <p className="text-2xl font-black text-[#D5B15B] tracking-wide uppercase">
              Usa el modelo MDR.
            </p>
            
            <ul className="list-disc pl-5 space-y-2 mt-4 text-zinc-300">
              <li>Es lo que usa el 99.99% de nuestra industria que logra superar los 10M/año</li>
              <li>Es MUCHO más fácil</li>
              <li>No requiere salarios base altos</li>
              <li>Es mucho más rápido para escalar a 10M, 20M, 30M+</li>
            </ul>

            <div className="mt-8 pt-8 border-t border-zinc-800/80">
              <p className="mb-4">Incluso si apuntas a empresas de 50-100M+, te recomendaría ir a un mercado más bajo, a menos que tengas tracción/conexiones sustanciales en el mercado alto:</p>
              
              <div className="bg-[#1A1A1E] rounded-xl p-6 border border-zinc-800 mb-6">
                <p className="font-medium text-white mb-3">Si corres anuncios a PyMEs en una industria (digamos que es empresas de energía solar):</p>
                <ul className="list-disc pl-5 text-zinc-400 space-y-2">
                  <li>Obtendrás 80-90% de PyMEs (500k → 15M)</li>
                  <li>Pero luego un pequeño porcentaje serán empresas de 15M → 100M+ de todas formas</li>
                  <li>Ese pequeño porcentaje termina siendo el mismo volumen de clientes de nivel empresarial que obtendrías con una función ABM empresarial completa</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-zinc-800/80">
                  <p className="text-zinc-300">Pero en lugar de pagar salarios grandes para lograrlo...</p>
                  <p className="text-white font-bold">Te PAGAN a ti por hacerlo.</p>
                </div>
              </div>
              
              <p className="italic text-zinc-400">Claro, la contrapartida es trabajar con PyMEs. Pero si estás tratando de pasar de 0 → 10M/año: A quién le importa.</p>
            </div>
          </div>
        </section>

        {/* Advertencia Final */}
        <section id="section-3" className="bg-[#3A1414]/30 border border-red-500/30 rounded-[2rem] p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3 relative z-10">
            <AlertTriangle size={28} />
            Aviso: GRAN ERROR antes de continuar
          </h3>
          
          <div className="relative z-10 text-[16px] text-zinc-300 space-y-6">
            <p>
              En el raro caso de que tengas funciones tanto de MDR como de SDR...<br/>
              <span className="text-xl font-bold text-white mt-2 block">NO combines los equipos para que hagan ambas cosas.</span>
            </p>
            
            <ul className="list-disc pl-5 space-y-2 text-red-200/80">
              <li>Deben ser equipos separados</li>
              <li>Con management y sistema operativo (OS) separados</li>
              <li>Con compensaciones separadas</li>
            </ul>

            <div className="bg-red-950/40 rounded-xl p-6 border border-red-900/50 mt-6">
              <p className="font-bold text-red-300 mb-3">Si los combinas:</p>
              <ul className="list-disc pl-5 text-red-200/70 space-y-2">
                <li>Terminarás teniendo solo un equipo MDR. Porque ese trabajo es mucho más fácil.</li>
                <li>Y estarás constantemente molesto con ellos por no hacer el trabajo de SDR.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Modelos de Ingresos MDR */}
        <section id="section-4" className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <TrendingUp className="text-[#D5B15B]" size={28} />
            Los Diferentes Modelos de Ingresos MDR + Requisitos Para Que Funcionen
          </h3>

          <div className="space-y-8 text-[16px] text-zinc-300">
            <p className="font-medium">
              Para contratar setters (MDRs) y lograr que rindan, debes tener un flujo de oportunidades curado.
            </p>
            
            <div className="bg-[#1A1A1E] rounded-xl p-6 border border-zinc-800">
              <p className="font-bold text-white mb-4">Flujo de oportunidades curado significa que tienes un sistema que:</p>
              <ul className="list-disc pl-5 space-y-4 text-zinc-300">
                <li>Genera nuevos leads diariamente</li>
                <li>
                  Los genera de forma consistente
                  <ul className="list-[circle] pl-5 mt-2 space-y-1 text-zinc-400">
                    <li>Mismo contexto</li>
                    <li>El mecanismo que los genera es el mismo, cada vez</li>
                  </ul>
                </li>
                <li>Tiene un SOP (procedimiento operativo estándar) claro sobre cómo convertir esa oportunidad en una cita agendada ("set") para el closer</li>
              </ul>
            </div>

            <div className="border border-[#D5B15B]/30 bg-[#D5B15B]/5 p-6 rounded-xl">
              <p className="font-bold text-[#E8CD82] mb-3">Quieres pensar en esto como una "cinta transportadora":</p>
              <ul className="list-disc pl-5 text-zinc-300 space-y-1">
                <li>Nuevos leads</li>
                <li>Misma fuente</li>
                <li>Mismo contexto</li>
                <li>Mismo proceso de ejecución</li>
                <li>Todos los días</li>
              </ul>
            </div>

            <p className="font-medium text-white">
              El sistema con el que generas el flujo de oportunidades curado va a determinar los SOPs de tu setter.
            </p>

            <div className="bg-[#3A1414]/30 border border-red-500/20 rounded-xl p-6">
              <p className="font-bold text-red-400 mb-4 flex items-center gap-2">
                <XCircle size={20} />
                Esto NO es una cinta transportadora:
              </p>
              
              <ul className="space-y-6 text-zinc-300">
                <li className="flex gap-3">
                  <div className="mt-1 text-red-400/70"><XCircle size={16} /></div>
                  <div>
                    <p className="mb-2">Meter a tu setter a un grupo de Facebook, sin ningún entrenamiento, y decirle que "vaya a buscar leads (farm)"</p>
                    <p className="mb-3">Darle acceso a un CRM lleno de leads viejos y decirle que "vaya a buscar leads (farm)"</p>
                    <div className="bg-[#1A1A1E] p-4 rounded-lg border border-zinc-800 text-sm">
                      <p className="mb-2">Esto puede funcionar en algunos casos, pero debes hacerlo DESPUÉS de haber creado un buen flujo de oportunidades MDR.</p>
                      <p className="mb-2">Esto se llama el "Proceso de Setter de Pipeline", que veremos más adelante.</p>
                      <p className="font-bold text-red-300">Pero no empieces por aquí.</p>
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 text-red-400/70"><XCircle size={16} /></div>
                  <div>
                    <p className="mb-2">Hacer que le manden mensajes directos en frío a la gente por LinkedIn, correo, o grupos random de Facebook.</p>
                    <div className="bg-[#1A1A1E] p-4 rounded-lg border border-zinc-800 text-sm">
                      <p className="font-bold text-red-300">Esto es un proceso de SDR. No de MDR.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#1A1A1E] rounded-xl p-8 border border-zinc-800">
              <p className="text-xl font-bold text-white mb-6">Si haces cualquiera de estas cosas, tu setter va a renunciar, porque TU oportunidad es mala.</p>
              
              <div className="space-y-4 mb-6 text-zinc-300">
                <p>Vas a decir que no hay buen talento disponible</p>
                <p className="font-medium text-white">La verdad es que tú no eres lo suficientemente bueno como para atraer buen talento.</p>
              </div>

              <div className="border-t border-zinc-800/80 pt-6">
                <p className="font-bold text-[#D5B15B] mb-4">En todo reclutamiento... las mejores oportunidades laborales consisten en:</p>
                <ul className="list-disc pl-5 space-y-2 text-zinc-300 mb-6">
                  <li>Excelentes sistemas de leads</li>
                  <li>Excelentes sistemas de entrenamiento</li>
                  <li>Excelente cultura</li>
                  <li>Excelente producto</li>
                  <li>Excelentes OTEs (ingresos objetivo totales)</li>
                </ul>
                <p className="font-bold text-white text-lg">Etc. → Gana en eso, y ganarás fácilmente en talento.</p>
              </div>
            </div>
          </div>
        </section>

                {/* Common MDR Models */}
        <section id="section-5" className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden mt-8">
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Modelos MDR Comunes Que Funcionan.
            </h3>
            <p className="text-[16px] text-zinc-300">
              Aquí tienes algunos de los modelos MDR más comunes que funcionan en nuestra industria.
            </p>
            <p className="text-[14px] text-zinc-500 italic mt-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
              *El mismo flujo exacto que DTA / Webinar / VSL / etc
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-0 items-stretch justify-center relative">
            {/* Flowchart */}
            <div className="flex flex-col items-center w-full lg:w-64 shrink-0 relative z-10 py-6">
              <FlowStep title="Anuncio" />
              <FlowArrow />
              <div className="relative w-full flex justify-center group">
                <FlowStep title="Página de Registro" />
                <div className="hidden lg:flex absolute top-1/2 left-full w-12 items-center -translate-y-1/2">
                  <div className="w-full border-t-2 border-dashed border-zinc-600/50"></div>
                  <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-zinc-600/50 absolute right-0 translate-x-1/2"></div>
                </div>
              </div>
              <FlowArrow />
              <FlowStep title="VSL" />
              <FlowArrow />
              <div className="relative w-full flex justify-center">
                <FlowStep title="Aplicación" />
                <div className="hidden lg:flex absolute top-1/2 left-full w-12 items-center -translate-y-1/2">
                  <div className="w-full border-t-2 border-dashed border-zinc-600/50"></div>
                  <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-zinc-600/50 absolute right-0 translate-x-1/2"></div>
                </div>
              </div>
              <FlowArrow />
              <FlowStep title="Página de Reservas" />
              <FlowArrow />
              <FlowStep title="Página de Gracias" />
              <FlowArrow />
              <div className="relative w-full flex justify-center">
                <FlowStep title="Llamada de Ventas" final />
                <div className="hidden lg:flex absolute top-1/2 right-full w-12 items-center -translate-y-1/2">
                  <div className="w-0 h-0 border-y-4 border-y-transparent border-r-4 border-r-zinc-500/50 absolute left-0"></div>
                </div>
              </div>
            </div>

            {/* Gap and Lines */}
            <div className="hidden lg:block w-12 shrink-0 relative">
               {/* Line pointing to Llamada de Ventas */}
               <div className="absolute top-[280px] bottom-[34px] left-0 right-0 border-l-2 border-b-2 border-zinc-500/50 rounded-bl-xl pointer-events-none"></div>
            </div>

            {/* Setter Outreach */}
            <div className="w-full lg:w-[400px] flex flex-col justify-center relative">
              <div className="bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-2xl p-6 lg:p-8 relative z-10 w-full mt-4 lg:mt-8">
                <h4 className="text-lg font-bold text-[#A6E1BA] mb-6">Outreach del Setter</h4>
                
                <div className="space-y-4 mb-6 relative z-10">
                  <OutreachCard title="Nuevos registros" subtitle="Llamada + texto" />
                  <OutreachCard title="Nueva app, sin reserva" subtitle="Llamada (texto automatizado)" />
                  <OutreachCard title="Apps parciales" subtitle="Llamada + texto" />
                  <OutreachCard title="Aperturas de correo, sin reserva" subtitle="Llamada" />
                </div>

                <div className="pt-5 border-t border-[#A6E1BA]/20 text-sm text-[#A6E1BA]/70 text-center font-medium">
                  Secundario: reagendar no-shows, pipeline de 5+ días
                </div>
              </div>
            </div>
          </div>
        </section>
{/* Curated Opportunities List */}
        <section className="bg-[#1A1A1E] border border-zinc-800 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Primarias */}
            <div>
              <h4 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                <Target size={24} /> Oportunidades Curadas Primarias:
              </h4>
              
              <ul className="space-y-6">
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white mb-2">Nuevos opt-ins</p>
                  <p className="text-[15px] text-zinc-400">Llamada / Texto</p>
                </li>
                
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white mb-2">Nueva app sin reserva</p>
                  <p className="text-[15px] text-zinc-400">Llamada</p>
                  <p className="text-[14px] text-zinc-500 italic mt-1">El texto se hace vía automatización (más sobre esto después)</p>
                </li>
                
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white mb-2">Apps parciales</p>
                  <p className="text-[15px] text-zinc-400">Llamada / Texto</p>
                </li>
                
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-[#D5B15B] mb-2 flex items-center gap-2"><PhoneCall size={16} /> Transferencias en vivo (live transfers)</p>
                  <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1">
                    <li>Solo si haces doble booking</li>
                    <li>Los mejores leads</li>
                    <li>Más sobre esto en mi entrenamiento de sales ops en el portal</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Secundarias & Funnels */}
            <div className="space-y-10">
              <div>
                <h4 className="text-xl font-bold text-zinc-300 mb-6 flex items-center gap-2">
                  <Layers size={24} /> Oportunidades Curadas Secundarias:
                </h4>
                <ul className="list-disc pl-5 text-[15px] text-zinc-400 space-y-3 bg-[#121214] p-6 rounded-xl border border-zinc-800/80">
                  <li>Reagendar no-shows</li>
                  <li>Setting de pipeline (leads de 5+ días de antigüedad)</li>
                  <li>Aperturas de correo, pero no reservaron</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 size={24} className="text-[#D5B15B]" /> Este flujo es EL MISMO con los siguientes funnels:
                </h4>
                
                <ul className="space-y-4">
                  <li className="bg-[#121214] p-4 rounded-xl border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                    <p className="font-medium text-white mb-1">Funnel de webinar que agenda una llamada</p>
                    <p className="text-sm text-zinc-500">(exactamente igual)</p>
                  </li>
                  
                  <li className="bg-[#121214] p-4 rounded-xl border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                    <p className="font-medium text-white mb-1">Funnel de llamada, pero sin opt-in (DTA)</p>
                    <p className="text-sm text-zinc-400">Quitas los opt-ins. Pero todas las demás oportunidades siguen ahí.</p>
                  </li>
                  
                  <li className="bg-[#121214] p-4 rounded-xl border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                    <p className="font-medium text-white mb-1">Funnel de llamada, pero en lugar de "opt-in para el video" es "opt-in para un PDF", y luego agendas una llamada</p>
                    <p className="text-sm text-zinc-400">Exactamente el mismo flujo, solo cambia el lead magnet.</p>
                  </li>
                  
                  <li className="bg-[#121214] p-4 rounded-xl border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                    <p className="font-medium text-white mb-1">Funnel VSL <span className="text-sm text-zinc-500 font-normal">(esto es solo otro nombre para un funnel de llamada)</span></p>
                    <p className="text-sm text-zinc-400">Directo e indirecto — es todo lo mismo</p>
                  </li>
                  
                  <li className="bg-gradient-to-r from-[#121214] to-[#1A1A1E] p-5 rounded-xl border border-[#D5B15B]/30 hover:border-[#D5B15B]/50 transition-colors">
                    <p className="font-bold text-[#E8CD82] mb-2">Pago u orgánico</p>
                    <p className="text-sm text-zinc-300">No hay diferencia de dónde viene el tráfico, en términos de proceso, para los setters</p>
                    <p className="text-[13px] text-zinc-500 italic mt-1">(Aparte de que el orgánico suele ser de mayor calidad)</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

                {/* Low Ticket Funnel */}
        <section id="section-6" className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden mt-8">
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Funnel Low Ticket + Setter Outbound
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-0 items-stretch justify-center relative">
            {/* Flowchart */}
            <div className="flex flex-col items-center w-full lg:w-64 shrink-0 relative z-10 py-6">
              <FlowStep title="Anuncio" />
              <FlowArrow />
              <FlowStep title="Oferta low-ticket" />
              <FlowArrow />
              <div className="relative w-full flex justify-center">
                <FlowStep title="Checkout + bumps" />
                <div className="hidden lg:flex absolute top-1/2 left-full w-12 items-center -translate-y-1/2">
                  <div className="w-full border-t-2 border-dashed border-zinc-600/50"></div>
                  <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-zinc-600/50 absolute right-0 translate-x-1/2"></div>
                </div>
              </div>
              <FlowArrow />
              <FlowStep title="OTO 1 (upsell)" />
              <FlowArrow />
              <FlowStep title="OTO 2 (upsell)" />
              <FlowArrow />
              <div className="relative w-full flex justify-center">
                <FlowStep title="Nuevo comprador" />
                <div className="hidden lg:flex absolute top-1/2 left-full w-12 items-center -translate-y-1/2">
                  <div className="w-full border-t-2 border-dashed border-zinc-600/50"></div>
                  <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-zinc-600/50 absolute right-0 translate-x-1/2"></div>
                </div>
              </div>
              <FlowArrow />
              <div className="relative w-full flex justify-center">
                <FlowStep title="Llamada de Ventas" final />
                <div className="hidden lg:flex absolute top-1/2 right-full w-12 items-center -translate-y-1/2">
                  <div className="w-0 h-0 border-y-4 border-y-transparent border-r-4 border-r-zinc-500/50 absolute left-0"></div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block w-12 shrink-0 relative">
               <div className="absolute top-[350px] bottom-[34px] left-0 right-0 border-l-2 border-b-2 border-zinc-500/50 rounded-bl-xl pointer-events-none"></div>
            </div>

            {/* Setter Outreach */}
            <div className="w-full lg:w-[400px] flex flex-col justify-center relative mt-4 lg:mt-16">
              <div className="bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-2xl p-6 lg:p-8 relative z-10 w-full">
                <h4 className="text-lg font-bold text-[#A6E1BA] mb-6">Outreach del Setter</h4>
                
                <div className="space-y-6 relative z-10">
                  <div>
                    <h5 className="text-sm font-medium text-white mb-3">Primario</h5>
                    <OutreachCard title="Nuevos compradores" subtitle="Llamada + texto, ordenados por AOV" />
                  </div>

                  <div>
                    <h5 className="text-sm font-medium text-white mb-3">Secundario</h5>
                    <div className="space-y-4">
                      <OutreachCard title="Agregados al carrito, no compraron" subtitle="Generalmente de baja calidad" />
                      <OutreachCard title="Reagendar no-shows" subtitle="" />
                      <OutreachCard title="Pipeline (leads de 5+ días)" subtitle="" />
                      <OutreachCard title="Aperturas de correo, sin reserva" subtitle="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
{/* Low Ticket Oportunidades List */}
        <section className="bg-[#1A1A1E] border border-zinc-800 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Primarias */}
            <div>
              <h4 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                <Target size={24} /> Oportunidades Curadas Primarias:
              </h4>
              
              <ul className="space-y-6">
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white mb-2">Nuevos compradores</p>
                  <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1">
                    <li>Se puede priorizar en la lógica por AOV</li>
                    <li>Hablaremos de esto más adelante</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Secundarias */}
            <div>
              <h4 className="text-xl font-bold text-zinc-300 mb-6 flex items-center gap-2">
                <Layers size={24} /> Oportunidades Curadas Secundarias:
              </h4>
              
              <ul className="space-y-6">
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white mb-2">Agregaron al carrito / no compraron</p>
                  <p className="text-[15px] text-zinc-500 italic">Generalmente, estas son una mierda</p>
                </li>
              </ul>

              <div className="mt-6">
                <ul className="list-disc pl-5 text-[15px] text-zinc-400 space-y-3 bg-[#121214] p-6 rounded-xl border border-zinc-800/80">
                  <li>Reagendar no-shows</li>
                  <li>Setting de pipeline (leads de 5+ días de antigüedad)</li>
                  <li>Aperturas de correo, no reservaron</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

                {/* Low Ticket Implementation Funnel */}
        <section id="section-7" className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden mt-8">
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Funnel Low Ticket + Llamada de Implementación
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-0 items-stretch justify-center relative">
            {/* Flowchart */}
            <div className="flex flex-col items-center w-full lg:w-64 shrink-0 relative z-10 py-6">
              <FlowStep title="Anuncio" />
              <FlowArrow />
              <FlowStep title="Oferta low-ticket" />
              <FlowArrow />
              <FlowStep title="Checkout + bumps" />
              <FlowArrow />
              <div className="relative w-full flex justify-center">
                <FlowStep title="OTO 1 (Agendar llamada de implementación)" />
                <div className="hidden lg:flex absolute top-1/2 left-full w-12 items-center -translate-y-1/2">
                  <div className="w-full border-t-2 border-dashed border-zinc-600/50"></div>
                  <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-zinc-600/50 absolute right-0 translate-x-1/2"></div>
                  <span className="absolute -top-5 left-1 text-[11px] text-zinc-500 whitespace-nowrap">No reservó</span>
                </div>
              </div>
              <FlowArrow />
              <FlowStep title="OTO 2 (Upsell de pago)" />
              <FlowArrow />
              <div className="relative w-full flex justify-center">
                <FlowStep title="Página de Gracias" />
                <div className="hidden lg:flex absolute top-1/2 left-full w-12 items-center -translate-y-1/2">
                  <div className="w-full border-t-2 border-dashed border-zinc-600/50"></div>
                  <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-zinc-600/50 absolute right-0 translate-x-1/2"></div>
                </div>
              </div>
              <FlowArrow />
              <div className="w-full max-w-[240px] py-3.5 px-4 rounded-xl text-center font-bold text-[14px] shadow-sm bg-[#EBF7EF] text-[#2A7246]">
                Llamada de implementación
                <div className="text-[12px] font-normal opacity-80">Hecha por setters</div>
              </div>
              <FlowArrow />
              <div className="w-full max-w-[240px] py-3.5 px-4 rounded-xl text-center font-bold text-[14px] shadow-sm bg-[#EBF7EF] text-[#2A7246]">
                Triage de setter
              </div>
              <FlowArrow />
              <div className="relative w-full flex justify-center">
                <FlowStep title="Llamada con closer" final />
                <div className="hidden lg:flex absolute top-1/2 right-full w-12 items-center -translate-y-1/2">
                  <div className="w-0 h-0 border-y-4 border-y-transparent border-r-4 border-r-zinc-500/50 absolute left-0"></div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block w-12 shrink-0 relative">
               <div className="absolute top-[280px] bottom-[34px] left-0 right-0 border-l-2 border-b-2 border-zinc-500/50 rounded-bl-xl pointer-events-none"></div>
               <div className="absolute top-[480px] bottom-[34px] left-[-16px] right-0 border-l-2 border-b-2 border-zinc-500/50 rounded-bl-xl pointer-events-none"></div>
            </div>

            {/* Setter Outreach */}
            <div className="w-full lg:w-[400px] flex flex-col justify-start relative mt-4 lg:mt-32 space-y-8">
              {/* Primary */}
              <div className="bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-2xl p-6 lg:p-8 w-full relative z-10">
                <h4 className="text-lg font-bold text-[#A6E1BA] mb-4">Primario</h4>
                <OutreachCard title="Compradores que no reservaron" subtitle="Llamada inmediata + texto" />
              </div>

              {/* Secondary */}
              <div className="bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-2xl p-6 lg:p-8 w-full relative z-10">
                <h4 className="text-lg font-bold text-[#A6E1BA] mb-4">Secundario</h4>
                <div className="space-y-4">
                  <OutreachCard title="Agregados al carrito, no compraron" subtitle="Generalmente de baja calidad" />
                  <OutreachCard title="Reagendar no-shows" subtitle="" />
                  <OutreachCard title="Pipeline (leads de 5+ días)" subtitle="" />
                  <OutreachCard title="Aperturas de correo, sin reserva" subtitle="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Low Ticket Implementation Oportunidades List */}
        <section className="bg-[#1A1A1E] border border-zinc-800 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Primarias */}
            <div>
              <h4 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                <Target size={24} /> Oportunidades Curadas Primarias:
              </h4>
              
              <ul className="space-y-6">
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white mb-2">Nuevos compradores</p>
                  <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1">
                    <li>Se puede priorizar en la lógica por AOV</li>
                    <li>Hablaremos de esto más adelante</li>
                  </ul>
                </li>
                
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white">Llamadas de implementación</p>
                </li>
              </ul>
            </div>

            {/* Secundarias */}
            <div>
              <h4 className="text-xl font-bold text-zinc-300 mb-6 flex items-center gap-2">
                <Layers size={24} /> Oportunidades Curadas Secundarias:
              </h4>
              
              <ul className="space-y-6">
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white mb-2">Agregaron al carrito / no compraron</p>
                  <p className="text-[15px] text-zinc-500 italic">Generalmente, estas son una mierda</p>
                </li>
              </ul>

              <div className="mt-6">
                <ul className="list-disc pl-5 text-[15px] text-zinc-400 space-y-3 bg-[#121214] p-6 rounded-xl border border-zinc-800/80">
                  <li>Reagendar no-shows</li>
                  <li>Setting de pipeline (leads de 5+ días de antigüedad)</li>
                  <li>Aperturas de correo, no reservaron</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-10 bg-gradient-to-r from-[#121214] to-[#1A1A1E] p-6 lg:p-8 rounded-xl border border-[#D5B15B]/40 hover:border-[#D5B15B]/60 transition-colors shadow-sm">
             <p className="text-[16px] text-zinc-300 leading-relaxed italic">
                <strong className="text-white font-bold">Este proceso es prácticamente el mismo que un autowebinar de 1-2k.</strong> La única diferencia es que los setters también podrán llamar a los opt-ins / registrados al webinar — lo cual es una ventaja enorme. <strong className="text-[#E8CD82] font-bold">Duplicamos el ingreso vendiendo a los opt-ins de nuestro high-ticket, comparado con lo que generamos por ascensiones.</strong>
             </p>
          </div>
        </section>

        {/* DM Setting Funnel */}
        <section id="section-8" className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden mt-8 mb-12">
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Funnel de DM Setting
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center relative w-full">
            {/* Top Inputs */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center w-full mb-2">
              <div className="w-full lg:w-[240px] flex flex-col items-center">
                <FlowStep title="IG orgánico" />
                <div className="text-center text-[12px] text-zinc-400 mt-2">Reels, posts, historias</div>
              </div>
              <div className="w-full lg:w-[240px] flex flex-col items-center">
                <FlowStep title="Posts promocionados" />
                <div className="text-center text-[12px] text-zinc-400 mt-2">Top orgánico, amplificado</div>
              </div>
              <div className="w-full lg:w-[240px] flex flex-col items-center">
                <FlowStep title="Anuncios de DM" />
                <div className="text-center text-[12px] text-zinc-400 mt-2">Campañas click-a-DM</div>
              </div>
            </div>

            {/* Merge Arrows */}
            <div className="hidden lg:flex w-full max-w-[600px] justify-between px-[20px] mb-2 opacity-50">
               <ArrowDown size={18} className="text-zinc-500" />
               <ArrowDown size={18} className="text-zinc-500" />
               <ArrowDown size={18} className="text-zinc-500" />
            </div>
            <div className="flex lg:hidden flex-col items-center mb-2 w-full opacity-50 mt-4">
               <ArrowDown size={18} className="text-zinc-500" />
            </div>

            {/* Triggers */}
            <div className="w-full lg:max-w-[780px] bg-[#ECEEFE] text-[#484B75] py-4 px-6 rounded-xl text-center shadow-sm mb-2">
               <div className="font-bold text-[15px]">Disparadores de DM Inbound</div>
               <div className="text-[13px] opacity-80 mt-1">Palabras clave en comentarios · respuestas a historias · DMs al perfil · CTA de anuncios</div>
            </div>

            <FlowArrow />

            {/* Setter Flow Box */}
            <div className="w-full lg:max-w-[400px] bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-3xl p-6 lg:p-8 flex flex-col items-center">
              <h4 className="text-lg font-bold text-[#A6E1BA] mb-6 w-full text-left">Flujo de DM del Setter</h4>
              
              <div className="w-full flex flex-col items-center">
                <div className="w-full"><OutreachCard title="Apertura" subtitle="Primera respuesta rápida y personal" /></div>
                <FlowArrow />
                <div className="w-full"><OutreachCard title="Calificar" subtitle="Preguntas ligeras de descubrimiento" /></div>
                <FlowArrow />
                <div className="w-full"><OutreachCard title="Transición" subtitle="Pitch de la llamada" /></div>
                <FlowArrow />
                <div className="w-full"><OutreachCard title="Agendar" subtitle="Link de calendario o agendamiento en DM" /></div>
                
                <div className="mt-6 pt-4 border-t border-[#A6E1BA]/20 text-[13px] text-[#A6E1BA]/70 text-center font-medium w-full">
                  Sin respuesta → 3-5 seguimientos en 48 hrs
                </div>
              </div>
            </div>

            <FlowArrow />

            {/* Closer Call */}
            <FlowStep title="Llamada con closer" final />
          </div>
        </section>

        {/* DM Setting Oportunidades List */}
        <section className="bg-[#1A1A1E] border border-zinc-800 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Primarias */}
            <div>
              <h4 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                <Target size={24} /> Oportunidades Curadas Primarias:
              </h4>
              
              <ul className="space-y-6">
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white mb-2">DMs entrantes (de contenido, reels, pago)</p>
                  <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1">
                    <li>Indirecto (Lead Magnet)</li>
                    <li>Directo (Oferta)</li>
                  </ul>
                </li>
                
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white mb-2">Comentarios (de posts impulsados/potenciados o posts orgánicos)</p>
                  <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1">
                    <li>Manychat/DM Outbound
                      <ul className="list-[circle] pl-5 mt-1 space-y-1">
                        <li>Indirecto y Directo</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Secundarias */}
            <div>
              <h4 className="text-xl font-bold text-zinc-300 mb-6 flex items-center gap-2">
                <Layers size={24} /> Oportunidades Curadas Secundarias:
              </h4>
              
              <ul className="space-y-6">
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white mb-2">Nuevos seguidores</p>
                  <p className="text-[14px] text-zinc-400">No puedes depender únicamente de estos a menos que consigas MUCHOS. Pero aun así vale la pena hacerlo.</p>
                </li>
                
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white mb-2">Números de teléfono, generados desde:</p>
                  <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1 mb-3">
                    <li>Opt-in del link en la bio</li>
                    <li>Opt-in de lead magnet</li>
                  </ul>
                  <p className="text-[14px] text-zinc-500 italic">*El DM Setter NO es un setter telefónico (usualmente)*</p>
                </li>
                
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white mb-2">Encuestas, quizzes, cajas de preguntas, sliders</p>
                  <p className="text-[14px] text-zinc-400">Todas son oportunidades de DM outbound. Complementan, no se debe depender de ellas.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Live Events Funnels */}
        <section id="section-9" className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Funnels de Eventos en Vivo:
            </h3>
          </div>

          <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-6 lg:p-8">
            <h4 className="text-xl font-bold text-[#E8CD82] mb-6">
              Funnel de Reto (Challenge) / Evento en Vivo / Webinar en Vivo:
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ul className="list-disc pl-5 text-[15px] text-zinc-300 space-y-3 mb-6">
                  <li className="text-zinc-400 italic">(Todos son similares)</li>
                  <li>Gratis o pago</li>
                  <li>Orgánico o pago</li>
                </ul>

                <div className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80 mt-4">
                  <p className="font-bold text-white mb-2">Este modelo aplica a poca gente, así que no lo voy a cubrir en detalle.</p>
                </div>
              </div>

              <div>
                <p className="font-bold text-[#A6E1BA] mb-4">Los setters pueden:</p>
                <ul className="space-y-4">
                  <li className="bg-[#121214] p-4 rounded-xl border border-zinc-800/80">
                    <p className="font-medium text-white mb-1">Hacer DM a la gente en el grupo <span className="text-zinc-500 font-normal">(si es reto o evento en vivo)</span></p>
                    <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1">
                      <li>Posts de 2 pasos, etc.</li>
                      <li>Puede ser antes, durante, después</li>
                    </ul>
                  </li>
                  
                  <li className="bg-[#121214] p-4 rounded-xl border border-zinc-800/80">
                    <p className="font-medium text-white mb-1">Contactar a la gente cuando se une</p>
                    <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1">
                      <li>Asegurarse de que asistan</li>
                      <li>Agendar una cita después para hacer seguimiento</li>
                      <li>Vender temprano</li>
                    </ul>
                  </li>

                  <li className="bg-[#121214] p-4 rounded-xl border border-zinc-800/80">
                    <p className="text-sm text-zinc-300">Contactar a la gente que no compra (o no agenda) después, y agendarlos con un closer</p>
                  </li>

                  <li className="bg-[#121214] p-4 rounded-xl border border-zinc-800/80">
                    <p className="text-sm text-zinc-300">Hacer llamadas de implementación para un producto de 1-2k vendido vía challenge, para agendar un producto de 10k</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Encrucijada */}
        <section id="section-10" className="bg-gradient-to-br from-[#3A1414]/30 to-[#1A1A1E] border border-red-500/20 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="mb-10 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <Target className="text-red-400" size={32} />
              Estamos Ahora En Una Encrucijada:
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {/* Col 1 */}
            <div className="bg-[#121214]/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-4 border-b border-zinc-800 pb-3">
                De aquí en adelante, vamos a hablar de sistemas de setters en relación a los siguientes funnels:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-[15px] text-zinc-300">Funnel VSL / Llamada</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-[15px] text-zinc-300">Funnel de Webinar con Llamada (en vivo o automático)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-[15px] text-zinc-300">Funnel Directo a Aplicación (DTA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-[15px] text-zinc-300">Funnel de Lead Magnet en PDF → Agendar una llamada</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[15px] text-zinc-300">Funnel de Comprador de Ticket Bajo</span>
                    <p className="text-[13px] text-zinc-500 mt-1">Solo outbound. No llamada de implementación.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Col 2 */}
            <div className="bg-[#121214]/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-[#E8CD82] mb-4 border-b border-zinc-800 pb-3">
                Razón por la que:
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8CD82] shrink-0 mt-2"></div>
                  <span className="text-[15px] text-zinc-300">Estos funnels son los más comunes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8CD82] shrink-0 mt-2"></div>
                  <span className="text-[15px] text-zinc-300">También te dan la mejor y más clara idea de cómo debería funcionar un sistema de setting adecuado</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8CD82] shrink-0 mt-2"></div>
                  <span className="text-[15px] text-zinc-300">Si entiendes estos, puedes aplicarlos fácilmente a todos los demás modelos.</span>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="bg-[#121214]/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-zinc-300 mb-4 border-b border-zinc-800 pb-3">
                Lo siguiente estará todo en entrenamientos separados:
              </h4>
              <ul className="space-y-3">
                <li className="bg-[#1A1A1E] p-3 rounded-lg border border-zinc-800/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                    <PhoneCall size={14} className="text-zinc-400" />
                  </div>
                  <span className="text-[14px] text-zinc-300">Cómo hacer llamadas de implementación (para 2k auto y LT)</span>
                </li>
                <li className="bg-[#1A1A1E] p-3 rounded-lg border border-zinc-800/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                    <Mail size={14} className="text-zinc-400" />
                  </div>
                  <span className="text-[14px] text-zinc-300">DM Setting (sistema completamente diferente)</span>
                </li>
                <li className="bg-[#1A1A1E] p-3 rounded-lg border border-zinc-800/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                    <Target size={14} className="text-zinc-400" />
                  </div>
                  <span className="text-[14px] text-zinc-300">Eventos en vivo / challenges / etc. (sistema diferente)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cuantos Leads Por Setter Al Mes */}
        <section id="section-11" className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <Users className="text-[#A6E1BA]" size={32} />
              ¿Cuántos Leads Por Setter Al Mes?
            </h3>
            <p className="text-[16px] text-zinc-300">
              Ahora que entendemos los diferentes modelos MDR, ¿cuántos leads le deberías dar a cada setter al mes?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#3A1414]/20 border border-red-500/20 rounded-2xl p-6">
              <h4 className="font-bold text-red-400 mb-2">Demasiados leads por setter/mes</h4>
              <p className="text-[15px] text-zinc-300 mb-3">= dinero perdido en la mesa</p>
              <div className="text-[13px] text-zinc-500 italic">Común cuando se está a escala</div>
            </div>
            
            <div className="bg-[#3A1414]/20 border border-red-500/20 rounded-2xl p-6">
              <h4 className="font-bold text-red-400 mb-2">Muy pocos leads/setter</h4>
              <p className="text-[15px] text-zinc-300 mb-3">= todo tu sistema no va a funcionar</p>
              <div className="text-[13px] text-zinc-500 italic">Común al principio</div>
            </div>
          </div>

          {/* La Formula Intro */}
          <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-8 mb-10 relative">
            <div className="absolute top-0 left-0 w-1 bg-[#D5B15B] h-full rounded-l-2xl"></div>
            <h4 className="text-xl font-bold text-[#E8CD82] mb-6 flex items-center gap-2">
              <BookOpen size={24} /> Enseñándote a Pescar (La Fórmula)
            </h4>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                <span className="text-[15px] text-zinc-300">En un momento te voy a dar los benchmarks.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                <span className="text-[15px] text-zinc-300">Pero lo más importante es que sepas cómo <em>pensar</em> esta pregunta.</span>
              </li>
              <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80 mt-4">
                <p className="font-bold text-white mb-3">¿Por qué?</p>
                <ul className="list-disc pl-5 text-[14px] text-zinc-400 space-y-2">
                  <li>Porque cada mercado/industria es diferente</li>
                  <li>Diferentes funnels tienen diferente calidad de lead</li>
                  <li className="text-emerald-400">= diferentes KPIs de leads/setter/mes para diferentes negocios.</li>
                </ul>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                <span className="text-[15px] text-zinc-300">Así que aunque te puedo dar benchmarks, necesitas tener un marco de referencia para pensarlo por ti mismo.</span>
              </li>
            </ul>
          </div>

          {/* La Formula Steps */}
          <div className="mb-10">
            <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Calculator className="text-[#A6E1BA]" size={28} /> La Fórmula:
            </h4>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 lg:p-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EBF7EF]/10 border border-[#A6E1BA]/30 flex items-center justify-center text-[#A6E1BA] font-bold shrink-0">1</div>
                  <div>
                    <h5 className="text-lg font-bold text-white mb-4">Establece el OTE (ingreso objetivo total) target para los setters</h5>
                    <ul className="list-none space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-[#A6E1BA] font-mono text-sm shrink-0">a.</span>
                        <span className="text-[15px] text-zinc-300">Se cubre en la sección de compensación (video separado)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#A6E1BA] font-mono text-sm shrink-0">b.</span>
                        <span className="text-[15px] text-zinc-300">Recomiendo pagar de más (ver errores comunes más adelante)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#A6E1BA] font-mono text-sm shrink-0">c.</span>
                        <span className="text-[15px] text-zinc-300">Digamos que tu target de pago es 10k/mes. (Rango de OTE de 7-12k/mes)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 lg:p-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EBF7EF]/10 border border-[#A6E1BA]/30 flex items-center justify-center text-[#A6E1BA] font-bold shrink-0">2</div>
                  <div>
                    <h5 className="text-lg font-bold text-white mb-4">Empieza con los números de benchmark que tengo</h5>
                    <ul className="list-none space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-[#A6E1BA] font-mono text-sm shrink-0">a.</span>
                        <span className="text-[15px] text-zinc-300">Los cubriremos en un momento</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 lg:p-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EBF7EF]/10 border border-[#A6E1BA]/30 flex items-center justify-center text-[#A6E1BA] font-bold shrink-0">3</div>
                  <div className="w-full">
                    <h5 className="text-lg font-bold text-white mb-6">Agrega setters / disminuye lentamente los leads por setter al mes</h5>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-[#121214] p-6 rounded-xl border border-zinc-800/80">
                        <p className="font-bold text-[#E8CD82] mb-4 flex items-start gap-2">
                          <span className="text-zinc-500 font-mono text-sm mt-0.5">a.</span>
                          Escenario 1: Negocio nuevo
                        </p>
                        <ul className="list-none space-y-2 text-[14px] text-zinc-300">
                          <li><span className="text-zinc-500 mr-2">i.</span> Tienes 800 opt-ins/mes (funnel VSL)</li>
                          <li><span className="text-zinc-500 mr-2">ii.</span> Contratas 1 setter <span className="text-zinc-500 italic">(esto está justo en el benchmark)</span></li>
                          <li><span className="text-zinc-500 mr-2">iii.</span> Aumentas a 1200 opt-ins/mes</li>
                          <li><span className="text-zinc-500 mr-2">iv.</span> Contratas un segundo setter</li>
                          <li className="text-emerald-400 mt-2 font-medium"><span className="text-zinc-500 mr-2">v.</span> Ahora, cada uno tiene 600 opt-ins/mes</li>
                        </ul>
                      </div>

                      <div className="bg-[#121214] p-6 rounded-xl border border-zinc-800/80">
                        <p className="font-bold text-[#E8CD82] mb-4 flex items-start gap-2">
                          <span className="text-zinc-500 font-mono text-sm mt-0.5">b.</span>
                          Escenario 2: Negocio establecido
                        </p>
                        <ul className="list-none space-y-2 text-[14px] text-zinc-300">
                          <li><span className="text-zinc-500 mr-2">i.</span> Tienes 4800 leads al mes</li>
                          <li><span className="text-zinc-500 mr-2">ii.</span> 6 setters</li>
                          <li><span className="text-zinc-500 mr-2">iii.</span> 800 leads por setter <span className="text-zinc-500 italic">(esto está justo en el benchmark)</span></li>
                          <li><span className="text-zinc-500 mr-2">iv.</span> No cambias nada. Agregas 1 setter.</li>
                          <li className="text-emerald-400 mt-2 font-medium"><span className="text-zinc-500 mr-2">v.</span> Ahora, cada uno tiene 685</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 lg:p-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EBF7EF]/10 border border-[#A6E1BA]/30 flex items-center justify-center text-[#A6E1BA] font-bold shrink-0">4</div>
                  <div className="w-full">
                    <h5 className="text-lg font-bold text-white mb-6">Resultado: Tres Escenarios:</h5>
                    
                    <div className="space-y-6">
                      <div className="bg-[#121214] p-6 rounded-xl border border-zinc-800/80">
                        <p className="font-bold text-[#A6E1BA] mb-3 flex items-start gap-2">
                          <span className="text-zinc-500 font-mono text-sm mt-0.5">a.</span>
                          La producción individual del setter existente se mantiene igual. La producción del equipo sube significativamente.
                        </p>
                        <ul className="list-none space-y-2 text-[14px] text-zinc-300 ml-6">
                          <li><span className="text-zinc-500 mr-2">i.</span> Esto solo significa que tenías demasiados leads/setter</li>
                          <li className="text-emerald-400"><span className="text-zinc-500 mr-2">ii.</span> Este es un aumento masivo de eficiencia</li>
                        </ul>
                      </div>

                      <div className="bg-[#121214] p-6 rounded-xl border border-zinc-800/80">
                        <p className="font-bold text-[#E8CD82] mb-3 flex items-start gap-2">
                          <span className="text-zinc-500 font-mono text-sm mt-0.5">b.</span>
                          La producción individual existente baja levemente. La producción del equipo sube moderadamente.
                        </p>
                        <ul className="list-none space-y-2 text-[14px] text-zinc-300 ml-6">
                          <li><span className="text-zinc-500 mr-2">i.</span> Estás bien aquí SIEMPRE Y CUANDO los setters con buen desempeño individual sigan en o cerca del OTE target (aprox: 10k/mes en este ejemplo)</li>
                        </ul>
                      </div>

                      <div className="bg-[#3A1414]/20 p-6 rounded-xl border border-red-500/20">
                        <p className="font-bold text-red-400 mb-3 flex items-start gap-2">
                          <span className="text-red-500/50 font-mono text-sm mt-0.5">c.</span>
                          La producción individual existente baja significativamente. La producción del equipo sube levemente (o nada).
                        </p>
                        <ul className="list-none space-y-3 text-[14px] text-zinc-300 ml-6">
                          <li><span className="text-red-500/50 mr-2">i.</span> Esto usualmente es un problema porque la compensación de tus mejores performers va a caer por debajo del OTE target</li>
                          <li><span className="text-red-500/50 mr-2">ii.</span> En nuestro ejemplo de 10k/mes, esto significa que tu 25% superior ahora bajó a 7-8k/mes.</li>
                          <li><span className="text-red-500/50 mr-2">iii.</span> Esto significa que estás sobrestaffeado (tienes demasiado personal).
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-zinc-400">
                              <li>1. Corta a los performers de bajo rendimiento</li>
                              <li>2. Aumenta los leads</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resumen */}
          <div className="bg-gradient-to-r from-[#121214] to-[#1A1A1E] border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D5B15B]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
            
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-[#A6E1BA]" size={24} /> En resumen:
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  </div>
                  <span className="text-[15px] text-zinc-300">Determina el OTE por encima del promedio</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  </div>
                  <span className="text-[15px] text-zinc-300">Empieza en el benchmark (abajo)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  </div>
                  <div>
                    <span className="text-[15px] text-zinc-300 block mb-2">Aumenta continuamente el número de setters <span className="text-zinc-500">(disminuyendo el conteo de leads por setter/mes)</span></span>
                    <div className="bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
                      <p className="text-[13px] text-zinc-400 mb-2">Para medir la producción general del equipo, simplemente mira:</p>
                      <ul className="list-disc pl-5 text-[14px] text-zinc-300 space-y-1">
                        <li>% de lead a set (cita agendada)</li>
                        <li>Costo por cita agendada del setter <span className="text-zinc-500">(gasto en ads / citas agendadas)</span></li>
                      </ul>
                      <p className="text-[14px] text-emerald-400 mt-2 font-medium">Si mejoran, tu producción está subiendo</p>
                    </div>
                  </div>
                </li>
              </ul>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  </div>
                  <span className="text-[15px] text-zinc-300">Detente cuando el OTE del 25% superior esté por debajo del OTE target.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  </div>
                  <span className="text-[15px] text-zinc-300">Ahora ya conoces tu verdadero KPI para ese funnel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  </div>
                  <span className="text-[15px] text-zinc-300 font-bold text-white">Úsalo de ahí en adelante.</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 bg-[#3A1414]/20 border border-red-500/30 p-5 rounded-xl flex items-start gap-3">
              <AlertTriangle className="text-red-400 shrink-0 mt-0.5" size={20} />
              <p className="text-[15px] text-zinc-300 italic">
                <strong className="text-red-400 font-bold">No quieres que el setter baje del OTE target</strong>, porque te arriesgas a que renuncie (churn). Y sin un buen OTE, no vas a atraer/retener buenos setters.
              </p>
            </div>
          </div>
        </section>

        {/* Benchmarks Comunes */}
        <section id="section-12" className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="mb-10 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <BarChart className="text-blue-400" size={32} />
              Benchmarks Comunes:
            </h3>
            
            <div className="space-y-3">
              <p className="text-[15px] text-zinc-300 italic flex items-start gap-2">
                <span className="text-blue-400 mt-1">*</span>
                Esto depende mucho de la fuente del lead, así que te voy a dar algunas opciones:
              </p>
              <p className="text-[15px] text-zinc-300 italic flex items-start gap-2">
                <span className="text-blue-400 mt-1">*</span>
                Solo nos basamos en la métrica principal (sin contar no-shows, pipeline, etc.)
              </p>
              <div className="bg-[#1A1A1E] border border-blue-500/20 p-4 rounded-xl inline-block mt-2">
                <p className="text-[14px] text-zinc-300 font-medium">
                  Considera estos <strong className="text-blue-400">REQUISITOS</strong> de cuándo estás listo para contratar otro setter. Hasta que conozcas tus propias métricas.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {/* Funnel VSL / Webinar con Llamada con Opt-In */}
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors group">
              <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <Target size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Funnel VSL / Webinar con Llamada <strong className="text-blue-400 font-bold">con Opt-In</strong></span>
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0"></div>
                  <span className="text-[15px] text-zinc-300"><strong className="text-white">800-900</strong> opt-ins por setter al mes</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                  <span className="text-[15px] text-zinc-300"><strong className="text-emerald-400">80-110</strong> citas agendadas por setter al mes</span>
                </li>
              </ul>
            </div>

            {/* Funnel de Lead Magnet en PDF -> Llamada */}
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors group">
              <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <BookOpen size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Funnel de Lead Magnet en PDF → Llamada</span>
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0"></div>
                  <span className="text-[15px] text-zinc-300"><strong className="text-white">1200-1500</strong> citas agendadas por setter al mes</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                  <span className="text-[15px] text-zinc-300"><strong className="text-emerald-400">80-110</strong> citas agendadas por setter al mes</span>
                </li>
              </ul>
            </div>

            {/* Funnel VSL / Webinar con Llamada sin Opt-In */}
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors group">
              <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <Target size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Funnel VSL / Webinar con Llamada <strong className="text-blue-400 font-bold">sin Opt-In</strong> (Solo Directo a Aplicación)</span>
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0"></div>
                  <span className="text-[15px] text-zinc-300">"Funnel DTA"</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0"></div>
                  <span className="text-[15px] text-zinc-300"><strong className="text-white">400-500</strong> aplicaciones (sin reservas) por setter al mes</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                  <span className="text-[15px] text-zinc-300"><strong className="text-emerald-400">80-110</strong> citas agendadas por setter al mes</span>
                </li>
              </ul>
            </div>

            {/* Funnel de Comprador */}
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors group">
              <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <DollarSign size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Funnel de Comprador (Sin Llamada de Implementación)</span>
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0"></div>
                  <span className="text-[15px] text-zinc-300"><strong className="text-white">400-500</strong> compradores por setter al mes</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                  <span className="text-[15px] text-zinc-300"><strong className="text-emerald-400">80-110</strong> citas agendadas por setter al mes</span>
                </li>
              </ul>
              
              <div className="mt-5 bg-[#3A1414]/20 border border-red-500/20 p-4 rounded-xl">
                <p className="font-bold text-red-400 text-[14px] mb-2 flex items-start gap-2">
                  <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                  Este KPI cambia drásticamente si haces una llamada de implementación
                </p>
                <ul className="list-disc pl-8 text-[13px] text-zinc-400 space-y-1">
                  <li>Porque los "compradores que no agendan" suelen ser de calidad mucho más baja.</li>
                  <li>Puede que tengas que aumentar entre un 50-100%</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-10 bg-gradient-to-r from-[#121214] to-[#1A1A1E] border border-blue-500/30 rounded-2xl p-6 lg:p-8 relative z-10 shadow-lg">
             <div className="flex flex-col gap-4">
                <p className="text-[16px] text-zinc-300 leading-relaxed italic">
                  <strong className="text-blue-400 font-bold">*</strong> Como puedes ver con todas estas métricas, terminas en un rango de <strong className="text-emerald-400 font-bold">80-110 citas agendadas.</strong>
                </p>
                <p className="text-[16px] text-zinc-300 leading-relaxed italic">
                  <strong className="text-blue-400 font-bold">*</strong> He tenido setters con hasta <strong className="text-white font-bold">130-140+</strong> citas agendadas al mes. Pero, en general, <strong className="text-emerald-400 font-bold">80-110 es un buen rango.</strong>
                </p>
                <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl mt-2">
                  <p className="text-[15px] text-zinc-300 leading-relaxed italic flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      La forma de pensarlo es: en 80-110, significa que tu setter está teniendo suficientes respuestas y conversaciones calificadas al día como para prácticamente llenar su jornada, si es que van a tener conversaciones de verdadera calidad.
                    </span>
                  </p>
                </div>
             </div>
          </div>
        </section>

        {/* Qué Hacer Si No Tienes Suficientes Leads */}
        <section id="section-13" className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Qué Hacer Si No Tienes Suficientes Leads Para 1 Setter. Pero Aún Tienes Leads Que Necesitan Ser Atendidos:
            </h3>
          </div>
          
          <ul className="space-y-4 text-[15px] text-zinc-300">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
              <span>Esto solo va a pasar cuando contratas a tu primer setter.</span>
            </li>
            
            <li>
              <div className="flex items-start gap-3 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                <span>El escenario:</span>
              </div>
              <ul className="list-disc pl-10 space-y-2 text-[14px] text-zinc-400">
                <li>Puede que tengas 400 opt-ins por setter al mes</li>
                <li>Hay apps de "2da categoría" que necesitan ser re-calificadas, no-shows a los que hay que contactar, apps sin reserva sin llamar, etc.</li>
                <li>Pero no tienes suficientes leads para que lleguen al OTE</li>
              </ul>
            </li>

            <li className="bg-[#1A1A1E] p-6 rounded-xl border border-zinc-800 mt-4">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2"></div>
                <span className="font-medium text-white">Aun así contrataría a un setter. Simplemente vas a tener que pagarle un sueldo garantizado hasta que el flujo de leads aumente.</span>
              </div>
              <ul className="list-disc pl-10 space-y-3 text-[14px] text-zinc-400">
                <li>Ej: Comp regular, pero le garantizas que gane 7k/mes. Entonces terminas pagando la diferencia entre lo que su comp regular le daría y los 7k.
                  <ul className="list-[circle] pl-5 mt-2 space-y-2 text-zinc-500">
                    <li>2500/mes + 3% de citas cerradas = 5k/mes que hubiera ganado.
                      <ul className="list-[square] pl-5 mt-2 text-emerald-400/80">
                        <li>Pagarías 2k extra para llegar a los 7k/mes.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Reservas Directas */}
        <section id="section-14" className="bg-gradient-to-br from-[#121214] to-[#1A1A1E] border border-zinc-800 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="mb-10 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              ¿Deberían Los Setters Tomar Reservas Directas?
            </h3>
            
            <div className="space-y-3">
              <p className="text-[15px] text-zinc-300 italic">
                <strong className="text-[#E8CD82] font-bold">Esto es multifacético. Y la respuesta es sí y no.</strong> Pero MUCHÍSIMA gente comete errores con esto.
              </p>
              <p className="text-[15px] text-zinc-300 italic">
                Lo clave es entender cómo debería funcionar el sales ops, y los factores que entran en esta ecuación.
              </p>
              <div className="bg-[#EBF7EF]/10 border border-[#A6E1BA]/30 p-4 rounded-xl inline-block mt-2">
                <p className="text-[14px] text-zinc-300 font-medium">
                  Tenemos un entrenamiento <strong className="text-[#A6E1BA]">COMPLETO</strong> sobre esto en el portal bajo sales ops. Pero aquí un resumen rápido:
                </p>
              </div>
            </div>
          </div>

          {/* Sales Ops Ideal */}
          <div className="mb-12 relative z-10">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-[#A6E1BA]" size={24} /> Sales Ops Ideal Para Funnels de Llamada
            </h4>
            
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 lg:p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5 text-xs text-zinc-400">1</div>
                  <span className="text-[15px] text-zinc-300 mt-1">Los prospectos aplican y agendan una llamada.</span>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5 text-xs text-zinc-400">2</div>
                  <div className="mt-1 w-full">
                    <span className="text-[15px] text-zinc-300">El coordinador de ventas califica cada una de las aplicaciones según las respuestas</span>
                    <ul className="list-disc pl-5 text-[13px] text-zinc-400 mt-2 space-y-1">
                      <li>Esto está en un entrenamiento separado</li>
                      <li>Saleskick también hace esto automáticamente (entre muchas otras funciones)</li>
                    </ul>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5 text-xs text-zinc-400">3</div>
                  <div className="mt-1 w-full">
                    <span className="text-[15px] text-zinc-300">Califican la aplicación del 1 al 4</span>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-[#121214] p-4 rounded-xl border border-red-500/20">
                        <p className="font-bold text-red-400 mb-1">1: Cancelar</p>
                        <p className="text-[13px] text-zinc-500">(spam, etc.)</p>
                      </div>
                      <div className="bg-[#121214] p-4 rounded-xl border border-[#D5B15B]/30">
                        <p className="font-bold text-[#E8CD82] mb-1">2: Pasar al setter</p>
                        <p className="text-[13px] text-zinc-500">(ver abajo qué es un "2")</p>
                      </div>
                      <div className="bg-[#121214] p-4 rounded-xl border border-[#A6E1BA]/30">
                        <p className="font-bold text-[#A6E1BA] mb-1">3: Directo al closer</p>
                      </div>
                      <div className="bg-[#121214] p-4 rounded-xl border border-emerald-500/30">
                        <p className="font-bold text-emerald-400 mb-1">4: Directo al closer</p>
                        <p className="text-[13px] text-zinc-500">Bueno tenerlo si haces "mejores leads a mejores closers"</p>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="bg-[#121214] p-6 rounded-xl border border-zinc-800/80 mt-6">
                  <p className="font-bold text-[#E8CD82] mb-4">¿Qué es un "2"?</p>
                  <ul className="space-y-3 text-[14px] text-zinc-300">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-1.5"></div>
                      <div>
                        No estás seguro si puedes ayudarlos
                        <p className="text-[13px] text-zinc-500 mt-1">Común en B2B</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-1.5"></div>
                      <div>
                        Basado en su aplicación, y en datos concretos, es poco probable que cierren o que se presenten.
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-[13px] text-zinc-400">
                          <li>Esto tiene que estar basado en datos</li>
                          <li>Ej: Podría ser una respuesta de una sola palabra en cierto campo, o finanzas no ideales</li>
                          <li><strong className="text-white">DEBES</strong> hacer esto basado en datos, no en el instinto, porque usualmente el instinto está equivocado</li>
                          <li className="italic text-zinc-500">(Por favor, revisa el entrenamiento de sales ops, hay mucho más sobre esto)</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-zinc-800/80 text-[14px] text-zinc-300 font-medium">
                    Así que envías estas a un setter para que las califique antes de agendarlas en el calendario del closer.
                  </div>
                </li>
              </ul>
              
              <div className="mt-6 bg-[#3A1414]/20 border border-red-500/30 p-5 rounded-xl space-y-3">
                <p className="text-[15px] text-zinc-300 italic font-medium">
                  <strong className="text-red-400">Las citas calificadas como "2" son las ÚNICAS reservas directas que tus setters deberían tomar.</strong>
                </p>
                <p className="text-[15px] text-zinc-300 italic">
                  Por el amor de Dios... <strong className="text-white">tus setters NO DEBERÍAN estar haciendo triage de CADA cita antes de que el closer la tome.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Por Qué No Deberías Enviar Todas Las Reservas */}
          <div className="mb-12 relative z-10">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <XCircle className="text-red-400" size={24} /> Por Qué No Deberías Enviar Todas Las Reservas Directas Al Setter:
            </h4>
            <p className="text-[15px] text-zinc-400 italic mb-6">La matemática simplemente no funciona:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Ejemplo 1 */}
              <div className="bg-[#1A1A1E] border border-emerald-500/20 rounded-2xl p-6">
                <h5 className="font-bold text-emerald-400 mb-4 border-b border-zinc-800 pb-3">Ejemplo 1: Enviando las llamadas al closer primero</h5>
                <ul className="space-y-3 text-[14px] text-zinc-300 font-mono">
                  <li className="flex justify-between border-b border-zinc-800/50 pb-1"><span>100 reservas</span></li>
                  <li className="flex justify-between border-b border-zinc-800/50 pb-1"><span>70 se presentan</span> <span className="text-zinc-500">(70%)</span></li>
                  <li className="flex justify-between border-b border-zinc-800/50 pb-1"><span>17.5 cierran</span> <span className="text-zinc-500">(25%)</span></li>
                  <li className="flex justify-between text-emerald-400 font-bold mt-2 pt-2 text-[16px]">
                    <span>$175,000</span>
                    <span className="text-[12px] font-normal text-zinc-500 mt-1">en efectivo cobrado (precio de 10k)</span>
                  </li>
                </ul>
              </div>

              {/* Ejemplo 2 */}
              <div className="bg-[#1A1A1E] border border-red-500/20 rounded-2xl p-6">
                <h5 className="font-bold text-red-400 mb-4 border-b border-zinc-800 pb-3">Ejemplo 2: Enviando las llamadas a los setters primero</h5>
                <ul className="space-y-3 text-[14px] text-zinc-300 font-mono">
                  <li className="flex justify-between border-b border-zinc-800/50 pb-1"><span>100 reservas</span></li>
                  <li className="flex justify-between border-b border-zinc-800/50 pb-1"><span>70 se presentan</span> <span className="text-zinc-500">(70%)</span></li>
                  <li className="flex justify-between border-b border-zinc-800/50 pb-1"><span>55 agendan con closer</span> <span className="text-zinc-500">(78% — generoso)</span></li>
                  <li className="flex justify-between border-b border-zinc-800/50 pb-1"><span>38.5 se presentan</span> <span className="text-zinc-500">(70%)</span></li>
                  <li className="flex justify-between border-b border-zinc-800/50 pb-1"><span>15.4 cierran</span> <span className="text-zinc-500">(40% *** una locura)</span></li>
                  <li className="flex justify-between text-red-400 font-bold mt-2 pt-2 text-[16px]">
                    <span>$154,000</span>
                    <span className="text-[12px] font-normal text-zinc-500 mt-1">en efectivo cobrado (precio de 10k)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 mb-8">
              <ul className="space-y-3 text-[15px] text-zinc-300">
                <li className="flex items-start gap-2">
                  <XCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                  <span className="font-bold text-red-400">Ganaste menos dinero</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle size={18} className="text-[#E8CD82] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">El calendario de tu closer ni siquiera está lleno</span>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-[14px] text-zinc-400">
                      <li>Se van a quejar</li>
                      <li>Tal vez renuncien</li>
                      <li>Vas a tener que contratar una tonelada de setters (Pagarles comisión = ganas menos dinero)</li>
                      <li>Etc — es una idiotez</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4 bg-gradient-to-r from-[#3A1414]/20 to-[#121214] border border-red-500/20 p-6 rounded-2xl">
              <p className="text-[15px] text-zinc-300 italic">
                Para que el modelo de "setter primero" siquiera llegue a punto de equilibrio... <strong className="text-white">necesitas que el closer cierre al 45.4%.</strong>
              </p>
              <p className="text-[15px] text-zinc-300 italic">
                Eso es solo para llegar al punto de equilibrio. Para que valga la pena, probablemente necesitarían cerrar al 55% considerando las comisiones del setter y la complejidad adicional que estás manejando.
              </p>
              <p className="text-[16px] text-[#E8CD82] font-bold text-center py-2 border-y border-[#D5B15B]/20">
                Los setters están para generar NUEVAS citas. No para calificar citas ya existentes.
              </p>
              <p className="text-[15px] text-zinc-300 italic">
                El otro problema es que, SI ACOSTUMBRAS a tu equipo a esto, todos van a caer en una rutina enorme, van a renunciar, etc., si intentas cambiarlo.
              </p>
            </div>
            
            <div className="mt-6">
              <p className="font-bold text-white mb-3">Así que no te fijes en este modelo. Y si quieres cambiarlo, ten cuidado:</p>
              <ul className="list-disc pl-5 space-y-2 text-[14px] text-zinc-400">
                <li>Pruébalo contigo mismo o con tu mejor closer
                  <ul className="list-[circle] pl-5 mt-1 text-zinc-500">
                    <li>Los leads van a estar más fríos. Así que van a necesitar "prueba" de que funciona.</li>
                  </ul>
                </li>
                <li>Traza cómo van a ganar más dinero (usualmente por tener más citas)</li>
                <li>Establece la expectativa de una tasa de cierre más baja (pero van a ganar más)</li>
              </ul>
            </div>
          </div>

          {/* Excepciones */}
          <div className="relative z-10">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Layers className="text-blue-400" size={24} /> Excepciones:
            </h4>
            
            <div className="space-y-4">
              <div className="bg-[#121214] border border-zinc-800 rounded-xl p-5">
                <div className="font-bold text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-400"></div>Si eres el dueño/fundador, y estás tratando de conservar tiempo.</div>
                <ul className="list-disc pl-8 text-[14px] text-zinc-400 space-y-1">
                  <li>Obviamente, esto está bien.</li>
                  <li>Pero cambia al otro modelo antes de escalar (ver arriba)</li>
                </ul>
              </div>

              <div className="bg-[#121214] border border-zinc-800 rounded-xl p-5">
                <div className="font-bold text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-400"></div>Si tus prospectos constantemente se presentan a la cita en una situación de no-compra</div>
                <ul className="list-disc pl-8 text-[14px] text-zinc-400 space-y-2">
                  <li>Esto es extremadamente común con contratistas.</li>
                  <li>Están en la camioneta. (Nunca en Zoom, no en una laptop)</li>
                  <li>Aun así haría los números para ver si deberías hacer:
                    <ul className="list-[circle] pl-5 mt-1 text-zinc-500">
                      <li>Closer primero (entonces es un cierre de 2 llamadas)</li>
                      <li>O setter primero (cierre de 15 → 60)</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="bg-[#121214] border border-zinc-800 rounded-xl p-5">
                <div className="font-bold text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-400"></div>Si lo que vendes tiene calificaciones estrictas y la mayoría de la gente no califica</div>
                <p className="text-[14px] text-zinc-400 pl-4 border-l-2 border-zinc-700 ml-2 mt-2">
                  Esto realmente no es una razón. Deberías poder filtrar esto en la aplicación. Pero lo pongo aquí porque es una razón por la que la gente cree que es una excepción.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* El Problema de Capacidad de Triage */}
        <section id="section-15" className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="mb-8 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertTriangle className="text-amber-400" size={32} />
              El Problema de Capacidad de Triage
            </h3>
            
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-6 mt-6">
              <p className="text-[15px] text-zinc-300 mb-3">
                Digamos que eres una oferta B2B (como yo), y el 40-50% de tus reservas totales son MQLs (leads calificados por marketing). Lo cual significa que el 50-60% son "1s y 2s".
              </p>
              <p className="text-[15px] text-zinc-300">
                Si el 25% de todas las aplicaciones que llegan son de "categoría 2" y van a los setters, eso puede terminar generando muchas reservas que caen en el calendario del setter.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {/* Problema */}
            <div className="bg-[#3A1414]/20 border border-red-500/20 rounded-2xl p-6 lg:p-8">
              <h4 className="text-lg font-bold text-red-400 mb-6 flex items-center gap-2">
                <XCircle size={24} /> Así que si no tienes cuidado:
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0 mt-2"></div>
                  <span className="text-[15px] text-zinc-300">Se supone que los setters deberían estar trabajando nuevos opt-ins/leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0 mt-2"></div>
                  <span className="text-[15px] text-zinc-300">Terminan hablando con triages todo el día</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0 mt-2"></div>
                  <span className="text-[15px] text-zinc-300">Tus nuevos leads quedan sin contactar / sin trabajar</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2"></div>
                  <span className="text-[15px] text-red-400 font-bold">Ganas menos dinero</span>
                </li>
              </ul>
            </div>

            {/* Solucion */}
            <div className="bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-2xl p-6 lg:p-8">
              <h4 className="text-lg font-bold text-[#A6E1BA] mb-6 flex items-center gap-2">
                <CheckCircle2 size={24} /> Qué hacer:
              </h4>
              
              <div className="space-y-6">
                <div>
                  <p className="font-bold text-white mb-3">Si solo tienes 1-2 setters en tu equipo:</p>
                  <ul className="list-disc pl-5 text-[14px] text-zinc-400 space-y-1">
                    <li>No te preocupes por esto por ahora</li>
                    <li>Probablemente no sea un problema tan grande</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#A6E1BA]/10">
                  <p className="font-bold text-[#E8CD82] mb-3">A medida que escalas a 3+ setters:</p>
                  <ul className="space-y-4">
                    <li className="bg-[#121214] p-4 rounded-xl border border-zinc-800">
                      <p className="font-medium text-white mb-2">Ten setters designados que solo tomen triages</p>
                      <ul className="list-disc pl-5 text-[13px] text-zinc-400 space-y-2">
                        <li>Si la tasa de asistencia (show rate) en estas es baja, dupla/triplícalas en reservas <span className="text-zinc-500 italic">(y el excedente puede transferirse en vivo a otro pod de setters)</span></li>
                        <li>
                          Si no tienen nada que hacer, pueden:
                          <ul className="list-[circle] pl-5 mt-1 space-y-1">
                            <li>Marcar leads (Pipeline nuevo / Pipeline viejo) <span className="text-zinc-500 italic">- Esto va a tener sentido más adelante</span></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="bg-[#121214] p-4 rounded-xl border border-zinc-800">
                      <p className="font-medium text-white">Tener setters designados que solo hagan outbound / trabajen leads</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KPIs de Setter Para Funnel de Llamada */}
        <section id="section-16" className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="mb-10 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <TrendingUp className="text-emerald-400" size={32} />
              KPIs de Setter Para Funnel de Llamada
            </h3>
            <p className="text-[15px] text-zinc-300 italic">
              <strong className="text-emerald-400 font-bold">*</strong> La actividad del setter + la velocidad de contacto al lead también son muy importantes, las cubriremos en un momento.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
            {/* Main KPIs */}
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 lg:p-8 col-span-1 lg:col-span-2">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-zinc-800 pb-4">
                <Target className="text-emerald-400" size={24} />
                Funnel de Llamada con Opt-In
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Col 1 */}
                <div className="space-y-5">
                  <div className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                    <p className="font-bold text-white mb-2 flex justify-between">
                      <span>Marcado → Conversación:</span>
                      <span className="text-emerald-400">10-15%</span>
                    </p>
                    <ul className="list-disc pl-5 text-[13px] text-zinc-400 space-y-1">
                      <li>La tasa de contestación es un poco más alta que este número</li>
                      <li>Con dialer, hemos tenido tasas de 15-20%</li>
                    </ul>
                  </div>

                  <div className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                    <p className="font-bold text-white mb-2 flex justify-between">
                      <span>Conversación → Cita agendada:</span>
                      <span className="text-emerald-400">65-70%</span>
                    </p>
                    <ul className="list-disc pl-5 text-[13px] text-zinc-400 space-y-1">
                      <li>Puede ser más bajo en B2B por la calificación (40-50%)</li>
                    </ul>
                  </div>

                  <div className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                    <p className="font-bold text-white mb-2 flex justify-between">
                      <span>Lead → Cita agendada:</span>
                      <span className="text-emerald-400">10-20%</span>
                    </p>
                    <ul className="list-disc pl-5 text-[13px] text-zinc-400 space-y-2">
                      <li>Esto puede variar muchísimo según:
                        <ul className="list-[circle] pl-5 mt-1 space-y-1 text-zinc-500">
                          <li>Calidad del lead</li>
                          <li># de triages de reserva directa (Más de esto va a aumentar el ratio)</li>
                          <li>Citas por transferencia en vivo</li>
                        </ul>
                      </li>
                      <li>Ej: Para mi B2B, estamos en 40% de lead a cita. Pero en gran parte es porque:
                        <ul className="list-[circle] pl-5 mt-1 space-y-1 text-zinc-500">
                          <li>Muchas transferencias en vivo (LT)</li>
                          <li>Muchos triages de "2"</li>
                          <li>Eso hace subir este número</li>
                        </ul>
                      </li>
                      <li className="text-emerald-400/80">8-10% es un buen ratio de lead a cita si es PURAMENTE outbound sobre los opt-ins, sin nada de lo anterior.
                        <ul className="list-[circle] pl-5 mt-1 space-y-1 text-zinc-500">
                          <li>Puede ser difícil de delimitar con tu tracking</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Col 2 */}
                <div className="space-y-5">
                  <div className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                    <p className="font-bold text-white mb-2 flex justify-between">
                      <span>Tasa de asistencia (de citas agendadas):</span>
                      <span className="text-emerald-400">70-80%+</span>
                    </p>
                    <ul className="list-disc pl-5 text-[13px] text-zinc-400 space-y-1">
                      <li>70% es una buena meta.</li>
                      <li>Hemos tenido hasta 90% (B2B ayuda un poco)</li>
                    </ul>
                  </div>

                  <div className="bg-[#121214] p-5 rounded-xl border border-[#D5B15B]/20">
                    <p className="font-bold text-[#E8CD82] mb-3">
                      Tasa de cierre de la cita:
                    </p>
                    <p className="text-[14px] text-zinc-300 mb-2">Esto debería ser 20-30% más alto que tu tasa de cierre de llamadas por ads.</p>
                    <ul className="list-disc pl-5 text-[13px] text-zinc-400 space-y-1 mb-3">
                      <li>Cierre de ads = 25%</li>
                      <li>Cierre de setter = 30-33%</li>
                    </ul>
                    <div className="bg-[#3A1414]/30 border border-red-500/20 p-3 rounded-lg">
                      <p className="font-medium text-white text-[13px]">Tus citas agendadas deberían ser tus MEJORES leads.</p>
                      <p className="text-red-400 text-[13px] italic mt-1">Si no, tus setters son malos.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#121214] p-4 rounded-xl border border-emerald-500/20 text-center">
                      <p className="text-[12px] text-zinc-400 uppercase tracking-wider mb-1">Citas/Setter/Mes</p>
                      <p className="text-2xl font-bold text-emerald-400">80-110</p>
                    </div>
                    <div className="bg-[#121214] p-4 rounded-xl border border-zinc-800/80 text-center flex flex-col justify-center">
                      <p className="text-[12px] text-zinc-400 uppercase tracking-wider mb-1">Leads/Setter/Mes</p>
                      <p className="text-[14px] font-bold text-white">Ya lo cubrimos</p>
                      <p className="text-[11px] text-zinc-500">(depende del funnel)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ajustes */}
            <div className="space-y-6">
              <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6">
                <h5 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Briefcase className="text-blue-400" size={20} />
                  Ajustes Para Funnel de Comprador <span className="text-zinc-500 font-normal text-sm">(Sin Llamada)</span>
                </h5>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center bg-[#121214] p-3 rounded-lg border border-zinc-800/50">
                    <span className="text-[14px] text-zinc-300 font-medium">Lead a cita:</span>
                    <span className="text-blue-400 font-bold">20%+</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-1.5"></div>
                    <span className="text-[13px] text-zinc-400">Todas las demás métricas se mantienen relativamente iguales</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6">
                <h5 className="font-bold text-white mb-4 flex items-center gap-2">
                  <BookOpen className="text-[#D5B15B]" size={20} />
                  Ajustes Para Leads de PDF
                </h5>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center bg-[#121214] p-3 rounded-lg border border-zinc-800/50">
                    <span className="text-[14px] text-zinc-300 font-medium">Lead a cita:</span>
                    <span className="text-[#E8CD82] font-bold">6-8%</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Metricas mas importantes */}
            <div className="bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-2xl p-6">
              <h5 className="font-bold text-[#A6E1BA] mb-4 flex items-center gap-2 border-b border-[#A6E1BA]/10 pb-3">
                <BarChart size={20} />
                Métricas Más Importantes:
              </h5>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span className="text-[15px] text-zinc-300">Leads/Setter/Mes: <span className="text-zinc-500 italic">Ya lo cubrimos</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span className="text-[15px] text-zinc-300">Citas/Setter/Mes: <strong className="text-emerald-400">80-110</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span className="text-[15px] text-zinc-300">Velocidad al lead <span className="text-zinc-500 italic">(por cubrir)</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span className="text-[15px] text-zinc-300">Actividad del setter <span className="text-zinc-500 italic">(por cubrir)</span></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-zinc-800 space-y-4">
            <p className="text-[15px] text-zinc-400 italic leading-relaxed">
              Si simplemente te enfocas en lograr que un setter llegue a 80-110, usándolo como base para todas las métricas del mid-funnel, y luego sigues la fórmula para encontrar tu verdadero KPI de leads por setter, el resto va a acomodarse solo.
            </p>
            <p className="text-[15px] text-zinc-400 italic leading-relaxed">
              Es difícil dar métricas exactas porque varía bastante según el negocio, pero esto te va a dar un excelente punto de partida.
            </p>
            <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800/80">
              <p className="text-[15px] text-zinc-300 italic flex items-start gap-3">
                <Target className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                <span>
                  Si no sabes si una métrica como "conversación a cita" es buena o no, <strong className="text-white">simplemente revisa un día completo de llamadas de uno de tus setters.</strong> Lo vas a saber, y va a ser obvio.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Velocidad y Actividad */}
        <section id="section-17" className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          
          {/* Velocidad al Lead */}
          <div className="mb-12 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="text-[#A6E1BA]" size={32} />
              Velocidad al Lead:
            </h3>
            
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 lg:p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 p-4 rounded-xl">
                  <Target size={20} className="text-[#A6E1BA] shrink-0 mt-0.5" />
                  <span className="text-[15px] text-white font-bold">Esta es la métrica #1 más importante.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                  <span className="text-[15px] text-zinc-300">Y el indicador líder más grande de las tasas de contestación, de lead a cita agendada, etc.</span>
                </li>
                
                <li className="pt-4 mt-2 border-t border-zinc-800/80">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#121214] p-5 rounded-xl border border-zinc-800">
                      <p className="font-bold text-white mb-2 flex items-center gap-2">
                        <Mail size={18} className="text-blue-400" /> Para textos
                      </p>
                      <p className="text-[14px] text-zinc-400">Esto debería ser <strong className="text-blue-400">{'<'}5 minutos</strong> para todos los leads, 24/7</p>
                    </div>
                    
                    <div className="bg-[#121214] p-5 rounded-xl border border-zinc-800">
                      <p className="font-bold text-white mb-2 flex items-center gap-2">
                        <PhoneCall size={18} className="text-emerald-400" /> Para llamadas
                      </p>
                      <p className="text-[14px] text-zinc-400 mb-2">Esto debería ser <strong className="text-emerald-400">{'<'}5 minutos</strong> para todos los leads durante horario de oficina</p>
                      <div className="text-[13px] text-zinc-500 italic flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-zinc-600 shrink-0 mt-1.5"></div>
                        Lograr esto depende de tener una buena lógica de marcado, la cual vamos a cubrir en un momento.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Actividad del Setter */}
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Activity className="text-[#D5B15B]" size={32} />
              Actividad del Setter (Y Marcados Por Día)
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* La forma antigua */}
              <div className="bg-[#3A1414]/20 border border-red-500/20 rounded-2xl p-6 lg:p-8">
                <h4 className="text-lg font-bold text-red-400 mb-4 border-b border-red-500/20 pb-3">La forma antigua</h4>
                <p className="text-[15px] text-zinc-300 mb-4">
                  La forma antigua de medir la actividad del setter era monitorear un mínimo de marcados hechos por día
                </p>
                
                <div className="bg-[#121214] p-4 rounded-xl border border-red-500/10 mb-4">
                  <p className="font-bold text-white text-[14px] mb-2">Esto no está mal. Pero tiene limitaciones:</p>
                  <ul className="list-disc pl-5 text-[13px] text-zinc-400 space-y-2">
                    <li>Tu setter no puede marcar mientras está hablando con prospectos en vivo. Que es la forma más rentable en la que pueden usar su tiempo.</li>
                    <li>Así que si tienes un sistema en el que:
                      <ul className="list-[circle] pl-5 mt-1 space-y-1 text-zinc-500">
                        <li>Se dan transferencias en vivo a los setters</li>
                        <li>Se dan apps de triage "2" a los setters</li>
                        <li>Hay una tasa de contestación alta</li>
                        <li>Muchos prospectos agendan vía texto</li>
                        <li>Etc.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                
                <p className="text-[14px] text-zinc-300 italic mb-2">
                  Entonces va a parecer que el setter no está marcando. Aunque sea productivo.
                </p>
                <p className="text-[13px] text-zinc-500">
                  Ej: He tenido setters que hacen 20 marcados en un día, y consiguen 7 citas agendadas. Debido a respuestas, triages, agendar leads por texto, etc.
                </p>
              </div>

              {/* La mejor forma */}
              <div className="bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-2xl p-6 lg:p-8">
                <h4 className="text-lg font-bold text-[#A6E1BA] mb-4 border-b border-[#A6E1BA]/20 pb-3">La mejor forma</h4>
                <p className="text-[15px] text-zinc-300 mb-4">
                  La mejor forma es monitorear la <strong className="text-white">"Actividad del Setter"</strong> como KPI
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#A6E1BA] shrink-0 mt-0.5" />
                    <span className="text-[14px] text-zinc-300">Tienes que usar un Dialer OS (que se conecta a la mayoría de los dialers) o Dialer.io para hacer esto</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#A6E1BA] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[14px] text-zinc-300">Básicamente combina:</span>
                      <p className="font-bold text-[#E8CD82] mt-1 bg-[#121214] p-2 rounded-lg border border-zinc-800 text-center">
                        Tiempo de conversación + tiempo de marcado
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#A6E1BA] shrink-0 mt-0.5" />
                    <span className="text-[14px] text-zinc-300">De esta forma — incluso si tu setter es virtual — puedes literalmente ver cuántas horas trabaja cada día.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">La "Actividad del Setter" debería ser de <strong className="text-[#A6E1BA]">7 horas/día</strong>.</h4>
                  <p className="text-[14px] text-zinc-400 mb-3">Esto contempla:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-[14px] text-zinc-300 bg-[#121214] p-2 rounded-lg border border-zinc-800/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0"></div>
                      Reuniones de ventas/1 a 1s
                    </li>
                    <li className="flex items-center gap-2 text-[14px] text-zinc-300 bg-[#121214] p-2 rounded-lg border border-zinc-800/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0"></div>
                      Descansos
                    </li>
                    <li className="flex items-center gap-2 text-[14px] text-zinc-300 bg-[#121214] p-2 rounded-lg border border-zinc-800/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0"></div>
                      Almuerzo
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#121214] p-5 rounded-xl border border-zinc-800">
                    <p className="text-[14px] text-zinc-300 italic">
                      Si estás contratando a tus primeros 1-2 setters, no necesitas esto y puedes simplemente medirlo por producción <strong className="text-white">(80-110 citas agendadas por día)</strong>
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#121214] to-[#1A1A1E] p-5 rounded-xl border border-[#D5B15B]/30">
                    <p className="text-[14px] text-[#E8CD82] font-bold">
                      Pero a medida que tienes un equipo más grande, esto cambia el juego por completo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buckets de Leads */}
        <section id="section-18" className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="mb-10 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <ListOrdered className="text-purple-400" size={32} />
              Buckets de Leads de Mayor → Menor Valor
            </h3>
            <p className="text-[15px] text-zinc-300 italic mb-2">
              <strong className="text-purple-400 font-bold">*</strong> Este es un ejemplo para un funnel de llamada con opt-in
            </p>
            <p className="text-[16px] text-white font-bold">De mayor → menor:</p>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#1A1A1E] border border-purple-500/30 rounded-2xl p-5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
              <h4 className="text-[16px] font-bold text-white mb-3">1. Llamar a la gente que te acaba de responder por texto</h4>
              <ul className="space-y-2 text-[14px] text-zinc-300 ml-4">
                <li className="flex items-start gap-2"><PhoneCall size={16} className="text-emerald-400 shrink-0 mt-0.5" /> Llamar primero</li>
                <li className="flex items-start gap-2"><MessageSquare size={16} className="text-blue-400 shrink-0 mt-0.5" /> <div>Responder por texto en segundo lugar<p className="text-[13px] text-zinc-500 italic mt-1">- Esto podría hacerse con IA/automatización. Lo cubriremos en un momento.</p></div></li>
              </ul>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <h4 className="text-[16px] font-bold text-white mb-3">2. Nuevas apps sin reserva</h4>
              <ul className="space-y-2 text-[14px] text-zinc-300 ml-4">
                <li className="flex items-start gap-2"><PhoneCall size={16} className="text-emerald-400 shrink-0 mt-0.5" /> Llamar primero</li>
                <li className="flex items-start gap-2"><MessageSquare size={16} className="text-blue-400 shrink-0 mt-0.5" /> Texto en segundo lugar</li>
                <li className="flex items-start gap-2"><Mail size={16} className="text-amber-400 shrink-0 mt-0.5" /> Auto-inscribir en secuencia de correo personalizada</li>
              </ul>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <h4 className="text-[16px] font-bold text-white mb-3">3. Nuevas apps parciales</h4>
              <ul className="space-y-2 text-[14px] text-zinc-300 ml-4">
                <li className="flex items-start gap-2"><PhoneCall size={16} className="text-emerald-400 shrink-0 mt-0.5" /> Llamar primero</li>
                <li className="flex items-start gap-2"><MessageSquare size={16} className="text-blue-400 shrink-0 mt-0.5" /> Texto en segundo lugar</li>
                <li className="flex items-start gap-2"><Mail size={16} className="text-amber-400 shrink-0 mt-0.5" /> Auto-inscribir en secuencia de correo personalizada</li>
              </ul>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <h4 className="text-[16px] font-bold text-white mb-3">4. Nuevos opt-ins</h4>
              <ul className="space-y-2 text-[14px] text-zinc-300 ml-4">
                <li className="flex items-start gap-2"><PhoneCall size={16} className="text-emerald-400 shrink-0 mt-0.5" /> Llamar primero</li>
                <li className="flex items-start gap-2"><MessageSquare size={16} className="text-blue-400 shrink-0 mt-0.5" /> Texto en segundo lugar</li>
                <li className="flex items-start gap-2"><Mail size={16} className="text-amber-400 shrink-0 mt-0.5" /> Auto-inscribir en secuencia de correo personalizada</li>
              </ul>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <h4 className="text-[16px] font-bold text-white mb-3">5. Aperturas de correo recientes</h4>
              <ul className="space-y-2 text-[14px] text-zinc-300 ml-4">
                <li className="flex items-start gap-2"><PhoneCall size={16} className="text-emerald-400 shrink-0 mt-0.5" /> Llamar primero</li>
                <li className="flex items-start gap-2"><MessageSquare size={16} className="text-blue-400 shrink-0 mt-0.5" /> Texto en segundo lugar</li>
              </ul>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <h4 className="text-[16px] font-bold text-white mb-3">6. Respondieron a 1 texto o más. No han recibido seguimiento</h4>
              <ul className="space-y-2 text-[14px] text-zinc-300 ml-4">
                <li className="flex items-start gap-2"><PhoneCall size={16} className="text-emerald-400 shrink-0 mt-0.5" /> Llamar</li>
                <li className="flex items-start gap-2"><MessageSquare size={16} className="text-blue-400 shrink-0 mt-0.5" /> Seguimiento por texto</li>
              </ul>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <h4 className="text-[16px] font-bold text-white mb-3">7. Llamar/textear a los no-shows de hoy</h4>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <h4 className="text-[16px] font-bold text-white mb-3">8. Llamar a los nuevos leads de hoy 2 veces más (3 en total)</h4>
              <ul className="space-y-2 text-[14px] text-zinc-300 ml-4">
                <li className="flex items-start gap-2"><Clock size={16} className="text-zinc-400 shrink-0 mt-0.5" /> Durante horas pico (idealmente)</li>
              </ul>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <h4 className="text-[16px] font-bold text-white mb-3">9. Llamar a leads de 2 días de antigüedad y sus respectivos seguimientos por texto</h4>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <h4 className="text-[16px] font-bold text-white mb-3">10. Llamar a leads de 3 días de antigüedad y sus respectivos seguimientos por texto</h4>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <h4 className="text-[16px] font-bold text-white">Etc.</h4>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <div className="bg-gradient-to-r from-[#3A1414]/20 to-[#121214] border border-[#D5B15B]/30 rounded-2xl p-6 relative z-10 shadow-lg">
              <p className="text-[15px] text-zinc-300 italic mb-4 flex items-start gap-3">
                <Filter className="text-[#E8CD82] shrink-0 mt-0.5" size={20} />
                También puedes separar las listas por ciertos factores como ingresos, industria, score de la aplicación, datos financieros, etc. — para priorizar esas listas también en sub-listas.
              </p>
              <p className="text-[15px] text-zinc-300 italic flex items-start gap-3">
                <Layers className="text-[#E8CD82] shrink-0 mt-0.5" size={20} />
                Esto también puede volverse más complicado si tienes múltiples funnels. Digamos que también tienes un funnel de comprador corriendo. Tu lógica de marcado necesitaría contemplar eso también.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-[#121214] to-[#1A1A1E] border border-emerald-500/20 rounded-2xl p-6 relative z-10 shadow-lg">
              <p className="text-[15px] text-zinc-300 leading-relaxed italic mb-4">
                <strong className="text-emerald-400 font-bold">Esto es MUCHO MÁS efectivo que estar regañando a tus setters de que "no están llamando a cada lead 13 veces".</strong> ¿Por qué les importaría llamar a un lead de 5 días de antigüedad, cuando uno nuevo acaba de llegar? ¿O les acaba de responder por texto?
              </p>
              
              <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800/80">
                <p className="text-[15px] text-zinc-300 leading-relaxed font-medium flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Así que, para recapitular la lógica de marcado: <strong className="text-white">básicamente es un algoritmo para que tus setters trabajen todos los leads disponibles de la forma más productiva posible.</strong>
                  </span>
                </p>
              </div>
            </div>

            <div className="text-center pt-8">
              <p className="text-xl md:text-2xl font-bold text-[#E8CD82]">
                Entonces, ¿cómo hacemos esto?
              </p>
            </div>
          </div>
        </section>

        {/* Forma Antigua Manual */}
        <section id="section-19" className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Forma Antigua: Manera Manual De Configurar La Lógica De Marcado (Aún Funciona)
            </h3>
            <p className="text-[16px] text-zinc-300">Aquí está lo que solíamos hacer:</p>
          </div>

          <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 lg:p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                <span className="text-[15px] text-zinc-300">Configuras el CRM para que todos estos segmentos de leads estén etiquetados correspondientemente.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                <div>
                  <span className="text-[15px] text-zinc-300">Luego configuras listas separadas en tu CRM para cada segmento</span>
                  <p className="text-[14px] text-zinc-500 italic mt-1">- (Ej: Lista separada para todo lo que dije arriba)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                <span className="text-[15px] text-zinc-300">Los setters saben cuáles son sus listas de mayor → menor valor</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                <div>
                  <span className="text-[15px] text-zinc-300">Comienzan cargando la lista inicial en su marcador (dialer), y trabajando a través de ella.</span>
                  <ul className="list-[circle] pl-5 mt-2 space-y-1 text-[14px] text-zinc-400">
                    <li>Refrescando periódicamente por si entran nuevos leads.</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                <span className="text-[15px] text-zinc-300">Una vez que terminan el segmento 1, pasan al segmento 2. Y así sucesivamente.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                <div>
                  <span className="text-[15px] text-zinc-300">Cada 10-15 min o menos, necesitan refrescar el segmento 1, 2, 3 etc. - para asegurarse de que no hayan entrado nuevos leads.</span>
                  <div className="bg-[#121214] p-4 rounded-xl border border-zinc-800/80 mt-3">
                    <p className="text-[14px] text-zinc-300 mb-2">Ej: Si están en el segmento 4, pero nuevos leads han aparecido en el segmento 1, regresan al segmento 1 y reinician el flujo.</p>
                    <ul className="list-disc pl-5 text-[14px] text-zinc-400">
                      <li>De esta manera siempre están atacando de mayor → menor valor</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Setter Flow Visual */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12 flex flex-col items-center">
          
          <div className="w-full flex justify-between text-[13px] text-zinc-500 mb-4 max-w-[600px]">
            <div className="flex items-center gap-2">
              <ArrowDown size={14} />
              <span>El setter trabaja de arriba → abajo, llamando primero y texteando</span>
            </div>
          </div>

          <div className="w-full max-w-[600px] flex flex-col space-y-3 relative">
            
            {/* Arrow connecting middle back to top */}
            <div className="hidden md:block absolute -right-24 top-[30px] bottom-[300px] w-16 border-r-2 border-t-2 border-b-2 border-[#D5B15B]/50 rounded-r-xl opacity-70">
              <div className="absolute -top-[7.5px] -left-[10px] text-[#D5B15B]"><ArrowLeft size={18} /></div>
              <div className="absolute top-1/2 -right-[130px] -translate-y-1/2 text-[12px] text-zinc-400 w-[110px]">
                ¿Nuevo lead caliente? → reiniciar desde arriba
              </div>
            </div>

            {/* Hottest */}
            <div className="w-full bg-[#3A1414]/30 border border-red-500/30 rounded-xl p-4 text-center">
              <p className="font-bold text-red-400 text-[16px]">Te acaban de responder por texto</p>
              <p className="text-[14px] text-red-400/70 mt-1">Llamar al instante, luego texto</p>
            </div>
            
            <div className="w-full bg-[#3A1414]/30 border border-red-500/30 rounded-xl p-4 text-center">
              <p className="font-bold text-red-400 text-[16px]">Nuevas apps · sin reserva</p>
              <p className="text-[14px] text-red-400/70 mt-1">Llamada → texto → auto-email</p>
            </div>

            {/* Warm */}
            <div className="w-full bg-[#D5B15B]/10 border border-[#D5B15B]/30 rounded-xl p-4 text-center">
              <p className="font-bold text-[#E8CD82] text-[16px]">Nuevas apps parciales</p>
              <p className="text-[14px] text-[#E8CD82]/70 mt-1">Llamada → texto → auto-email</p>
            </div>

            <div className="w-full bg-[#D5B15B]/10 border border-[#D5B15B]/30 rounded-xl p-4 text-center">
              <p className="font-bold text-[#E8CD82] text-[16px]">Nuevos opt-ins</p>
              <p className="text-[14px] text-[#E8CD82]/70 mt-1">Llamada → texto → auto-email</p>
            </div>

            <div className="w-full bg-[#D5B15B]/10 border border-[#D5B15B]/30 rounded-xl p-4 text-center relative">
              <p className="font-bold text-[#E8CD82] text-[16px]">Aperturas de correo & respuestas de texto</p>
              <p className="text-[14px] text-[#E8CD82]/70 mt-1">Llamada, luego seguimiento por texto</p>
              {/* Arrow anchor */}
              <div className="absolute right-0 top-1/2 w-4 border-b-2 border-[#D5B15B]/50 -translate-y-1/2 hidden md:block"></div>
            </div>

            {/* Today's leads */}
            <div className="w-full bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-xl p-4 text-center">
              <p className="font-bold text-[#A6E1BA] text-[16px]">No-shows de hoy</p>
              <p className="text-[14px] text-[#A6E1BA]/70 mt-1">Llamada y texto</p>
            </div>

            <div className="w-full bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-xl p-4 text-center">
              <p className="font-bold text-[#A6E1BA] text-[16px]">Leads de hoy · 2do & 3er marcado</p>
              <p className="text-[14px] text-[#A6E1BA]/70 mt-1">Horas pico AM + horas pico PM</p>
            </div>

            {/* Aging -> pipeline */}
            <div className="w-full bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
              <p className="font-bold text-blue-400 text-[16px]">Leads antiguos · más recientes primero</p>
              <p className="text-[14px] text-blue-400/70 mt-1">Día 2 &gt; día 3 &gt; ... día 5</p>
            </div>

            <div className="w-full bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
              <p className="font-bold text-blue-400 text-[16px]">Lista de pipeline (después del día 5)</p>
              <p className="text-[14px] text-blue-400/70 mt-1">Hasta 90 días, más recientes primero</p>
            </div>
            
          </div>

          <div className="w-full max-w-[600px] flex flex-wrap gap-4 mt-8 justify-center text-[13px] text-zinc-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#3A1414]/80 border border-red-500/50"></div>
              <span>Más calientes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#D5B15B]/20 border border-[#D5B15B]/50"></div>
              <span>Tibios</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#EBF7EF]/10 border border-[#A6E1BA]/50"></div>
              <span>Leads de hoy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-blue-500/20 border border-blue-500/50"></div>
              <span>Antiguos → pipeline</span>
            </div>
          </div>

        </section>

        {/* Proceso Pesado y Cómo Configurarlo */}
        <section className="bg-gradient-to-br from-[#121214] to-[#1A1A1E] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10 mb-8">
            <p className="text-[15px] text-zinc-300 mb-6 italic">Como puedes ver, este proceso es un poco pesado. Así que para ayudar con esto:</p>
            
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 lg:p-8 space-y-4">
              <div className="flex items-start gap-3">
                <MessageCircle className="text-blue-400 shrink-0 mt-0.5" size={18} />
                <span className="text-[15px] text-zinc-300">Configurábamos un canal de prioridad en Slack para cada setter individual</span>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="text-amber-400 shrink-0 mt-0.5" size={18} />
                <span className="text-[15px] text-zinc-300">Cada vez que entra un nuevo lead de los segmentos top 2-4, aparece en ese canal.</span>
              </div>
              <div className="flex items-start gap-3">
                <MousePointerClick className="text-emerald-400 shrink-0 mt-0.5" size={18} />
                <span className="text-[15px] text-zinc-300">El setter recibe una notificación, hace clic, y automáticamente llama.</span>
              </div>
              <div className="flex items-start gap-3">
                <Users className="text-purple-400 shrink-0 mt-0.5" size={18} />
                <div>
                  <span className="text-[15px] text-zinc-300">También configurábamos un canal para el manager con todos estos leads prioritarios</span>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-[14px] text-zinc-400">
                    <li>De esta forma el manager puede hacer control de calidad (QC) de la velocidad al lead en los leads más calientes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Settings className="text-zinc-400" size={24} /> Cómo Configurarlo:
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#121214] border border-zinc-800 rounded-xl p-6">
                <p className="font-bold text-white mb-3">Si tienes 1-2 setters... y no quieres lidiar con la complejidad...</p>
                <ul className="list-disc pl-5 space-y-2 text-[14px] text-zinc-400">
                  <li>Simplemente puedes enseñarles a tus setters "cómo pensar" esto</li>
                  <li>Configura algunos segmentos básicos y listas de prioridad</li>
                  <li>Y déjalos trabajar.</li>
                  <li className="text-zinc-500 italic mt-4 list-none -ml-5 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">Tener el sistema perfecto no es tan rentable con 1-2 setters, así que por favor no te sobrecargues.</li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="bg-[#121214] border border-blue-500/20 rounded-xl p-6">
                  <p className="font-bold text-white mb-3">Si tienes 3+ setters</p>
                  <p className="text-[14px] text-zinc-300">Recomendaría contratar a <strong className="text-blue-400">Edward Stranks (Genio Moderado)</strong> para que lo configure.</p>
                  <p className="text-[13px] text-zinc-500 mt-2">Link abajo</p>
                </div>

                <div className="bg-[#121214] border border-zinc-800 rounded-xl p-6">
                  <p className="font-bold text-white mb-3 flex items-center gap-2"><Cpu size={16} className="text-zinc-400" /> Tecnología recomendada:</p>
                  <ul className="list-disc pl-5 space-y-2 text-[14px] text-zinc-400">
                    <li>Nosotros solíamos usar <strong className="text-white">Aloware + Hubspot</strong> para nuestra tecnología.</li>
                    <li><strong className="text-white">Aloware + GHL</strong> también funciona.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Forma Nueva: Dialer.io */}
        <section id="section-20" className="bg-gradient-to-br from-[#121214] to-[#1A1A1E] border border-blue-500/30 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10 text-center mb-10">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Forma Nueva: Dialer.io (Configuración Automática)
            </h3>
          </div>

          <div className="relative z-10 space-y-6">
            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-6">
              <p className="text-[15px] text-zinc-300 mb-4 flex items-start gap-3">
                <AlertTriangle className="text-amber-400 shrink-0 mt-0.5" size={20} />
                <span>Como pueden ver, el proceso de arriba no es perfecto. Pero es lo mejor que pudimos hacer como industria durante años.</span>
              </p>
              <p className="text-[15px] text-zinc-300 flex items-start gap-3">
                <CheckCircle2 className="text-blue-400 shrink-0 mt-0.5" size={20} />
                <span>Eventualmente, empaquetamos todo este sistema de lógica de marcado (además de un montón de otras funciones importantes) en un software del cual soy co-dueño llamado <strong className="text-blue-400 text-[16px]">Dialer.io</strong></span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1A1A1E] border border-blue-500/20 rounded-2xl p-6">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Cpu size={20} className="text-blue-400" /> El dialer hace todo por ti:
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 bg-[#121214] p-3 rounded-lg border border-zinc-800">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-[12px] shrink-0">1</div>
                    <span className="text-[14px] text-zinc-300">Los setters inician sesión.</span>
                  </li>
                  <li className="flex items-center gap-3 bg-[#121214] p-3 rounded-lg border border-zinc-800">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-[12px] shrink-0">2</div>
                    <span className="text-[14px] text-zinc-300">Hacen clic en "Marcar" (Dial)</span>
                  </li>
                  <li className="flex items-center gap-3 bg-[#121214] p-3 rounded-lg border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-[12px] shrink-0">3</div>
                    <span className="text-[14px] text-white font-bold">Y ejecuta el algoritmo a la perfección.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-500/10 to-[#1A1A1E] border border-emerald-500/20 rounded-2xl p-6 h-full flex flex-col justify-center">
                  <p className="text-center font-bold text-white text-[16px] mb-2 flex flex-col items-center gap-2">
                    <TrendingUp size={32} className="text-emerald-400" />
                    Resultados probados
                  </p>
                  <p className="text-[15px] text-zinc-300 text-center leading-relaxed">
                    Generalmente hemos visto aumentos del <strong className="text-emerald-400 text-xl">50-100%</strong> en tasas de contestación en clientes que usan el software.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 mt-6">
              <p className="text-[15px] text-zinc-300 italic mb-4 leading-relaxed">
                Obviamente, tengo un interés en que lo uses, pero honestamente lo construimos porque configurar este sistema era muy tedioso, difícil e imperfecto.
              </p>
              <ul className="list-disc pl-5 space-y-3 text-[14px] text-zinc-400">
                <li>Así que incluso si no tuviera un interés en esto, seguiría siendo mi recomendación legítima.</li>
                <li>También tiene un montón de otras funciones importantes, pero no voy a entrar en detalle sobre eso en este video.</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-zinc-800 text-center">
                <p className="font-bold text-blue-400 flex items-center justify-center gap-2 text-[16px]">
                  <CheckCircle2 size={18} /> Muy recomendado. Link para agendar una demo abajo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- NUEVA SECCIÓN --- */}
        <section id="section-22" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#484B75] p-2 rounded-lg text-white">
              <Settings size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Mejores Prácticas de Lógica de Marcación</h2>
          </div>
          
          <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
            <p className="text-[16px] text-zinc-300 leading-relaxed mb-10">
              Independientemente de la opción que elijas, deberías al menos conocer las mejores prácticas para que cuando alguien te configure esto, estés al tanto.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 size={24} className="text-emerald-500" /> Mejores Prácticas
            </h3>
            
            <div className="space-y-6">
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <ul className="list-disc pl-6 space-y-4 text-[15px] text-zinc-300 marker:text-emerald-500">
                  <li>
                    <span className="font-bold text-white">Los leads nuevos deben ser contactados de inmediato.</span>
                  </li>
                  <li>
                    <span className="font-bold text-white">Los leads nuevos que están más abajo en el embudo tienen mayor prioridad que los que están menos abajo.</span>
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>AOV alto &gt; AOV bajo</li>
                      <li>Apps sin reservas &gt; opt-ins</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold text-white">3 llamadas el primer día</span>
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>1 inmediata</li>
                      <li>Las otras 2 idealmente durante horas pico si es posible</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold text-white">Todo lead nuevo se inscribe automáticamente en una secuencia de emails</span>
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>Esto no debe parecer un "email de marketing"</li>
                      <li>Debe parecer contacto directo del setter</li>
                      <li>Completamente automatizado</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold text-white">Envío de mensajes de texto inmediato a leads nuevos</span>
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>Texto el día 2 y 3 (usualmente automatizado)</li>
                      <li>Cubriré lo de textos en un momento</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold text-white">Los setters siempre deben aprovechar al máximo las horas pico</span>
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>Y deberías saber cuáles son</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold text-white">Cadencia de 5-7 días</span>
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>Podés medir esto. Generalmente después de 5 días, no vale la pena.</li>
                      <li>Después del día 5 → 7: transición a la cadencia de "pipeline setter"</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold text-white">Priorizar los leads más recientes</span>
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>Día 2 &gt; Día 3</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold text-white">Ponderar otros criterios apropiadamente, si aplica</span>
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>Puntaje crediticio, liquidez, etc.</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold text-white">Criterios / etiquetado de desinscripción</span>
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>Si reservan una demo (vía setter / marketing), decir DNC → desinscribir</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-2">
              <MessageCircle size={24} className="text-blue-500" /> Mejores Prácticas - Textos
            </h3>
            
            <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl space-y-6">
              <p className="text-[15px] text-zinc-300 leading-relaxed">
                Para textos, recomiendo automatizar o usar IA para leads nuevos.<br/>
                Vamos a cubrir esto en un momento
              </p>
              
              <div className="bg-blue-500/10 border border-blue-500/20 p-5 rounded-lg">
                <p className="font-bold text-blue-400 mb-3 text-[15px]">Para apps sin reservas:</p>
                <ul className="list-disc pl-5 space-y-2 text-[14px] text-zinc-300 marker:text-blue-500/50">
                  <li>Usamos Saleskick AI SMS para volver a agendarlos automáticamente de inmediato.</li>
                  <li>Esto es muy efectivo, y no tenemos que pagar comisiones al setter.</li>
                  <li>También podrías configurar una automatización básica de SMS para esto si no querés usar Saleskick.</li>
                  <li>Entonces para estos casos, los setters solo llaman.</li>
                </ul>
              </div>
              
              <div className="bg-amber-500/10 border border-amber-500/20 p-5 rounded-lg">
                <p className="text-[15px] text-amber-200/90 leading-relaxed">
                  De nuevo, recomendaría contactar a Edward o Dialer si querés que te configuren esto. Y de nuevo - si sos nuevo y estás contratando a tu primer setter - NO TE ABRUMES. Podés simplemente aprender la teoría y dejar que el setter lo ejecute. No es tan complicado.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-2">
              <Clock size={24} className="text-purple-500" /> Cómo Determinar las Horas Pico de Llamadas
            </h3>
            
            <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl space-y-6">
              <p className="text-[15px] text-zinc-300 leading-relaxed">
                Lo mencioné varias veces:
              </p>
              <ol className="list-decimal pl-5 space-y-3 text-[15px] text-zinc-300 marker:text-purple-500 font-medium">
                <li>Extraé los datos de tasa de respuesta de HubSpot en un CSV</li>
                <li>Pasalos por Claude Code</li>
                <li>Dejá que Claude Code te lo diga</li>
              </ol>
              
              <p className="text-[15px] text-zinc-400 italic">
                Y no quiero insistir demasiado, pero Dialer lo hace automáticamente por vos. La mayoría de los sistemas de marcación no lo hacen.
              </p>
              
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <p className="text-[15px] text-zinc-300 leading-relaxed">
                  Hemos visto empresas descubrir que sus horas pico de llamadas son de 4 a 7pm. Y ajustaron los horarios de trabajo de sus setters en consecuencia - y literalmente vieron un aumento del <strong className="text-emerald-400">50%</strong> en la producción.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-2">
              <Layers size={24} className="text-[#D5B15B]" /> Procesos del Pipeline Setter
            </h3>
            
            <div className="space-y-8">
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">Antecedentes:</h4>
                <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-zinc-600">
                  <li>Con los años hemos acumulado muchísimos leads viejos en nuestro CRM.</li>
                  <li>Siempre supe que deberíamos aprovecharlos, pero nunca lo prioricé realmente.</li>
                  <li>En mi mastermind, uno de mis clientes, Tom, mencionó que había sumado casi 10M/año a su negocio contactando leads viejos.</li>
                  <li>Me puse las pilas y empecé a hacerlo.</li>
                  <li>¿Adivinen qué? Funcionó.</li>
                </ul>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">El Proceso:</h4>
                <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-zinc-600">
                  <li>Después del día 5, transferí todos los leads a una nueva lista que simplemente se llama "pipeline".</li>
                  <li>Podés crear una lógica de marcación similar acá, pero no es tan importante.</li>
                  <li>Generalmente vamos de más reciente → menos reciente.</li>
                  <li>Generalmente llegamos hasta los 90 días de antigüedad.</li>
                  <li>Lo que sí es importante es usar un sistema de marcación que pueda procesar muchos leads rápidamente.</li>
                  <li>Sé que parece que estoy haciendo publicidad, pero Dialer.io es excelente para esto.</li>
                </ul>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">¿Cuántos leads por pipeline setter?</h4>
                <p className="text-[15px] text-zinc-300 mb-4">Es difícil de definir exactamente. Pero lo que encontré:</p>
                <div className="bg-[#1A1A1E] border border-zinc-800 p-4 rounded-lg flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#D5B15B]/20 flex items-center justify-center text-[#D5B15B] font-bold text-lg shrink-0">
                    4:1
                  </div>
                  <p className="text-[15px] text-zinc-300 font-medium">Por cada 4 setters normales que tengas, probá tener 1 pipeline setter.</p>
                </div>
                <p className="text-[14px] text-zinc-400">No es una regla fija, pero probalo y fíjate qué funciona para vos.</p>
              </div>

              <div className="bg-[#2A2110]/30 border border-[#D5B15B]/30 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-[#D5B15B] mb-4 flex items-center gap-2">
                  <AlertTriangle size={20} /> Importante:
                </h4>
                <p className="text-[15px] text-zinc-300 mb-4">Generalmente vas a tener que pagarles de alguna de estas formas:</p>
                <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-[#D5B15B] mb-4">
                  <li>Comisión aumentada</li>
                  <li>Sueldo base aumentado</li>
                </ul>
                <p className="text-[14px] text-zinc-400 italic mb-6">
                  (Recomiendo el sueldo base, porque a veces estos chicos pueden cubrir a un setter inbound que esté enfermo, etc. Entonces el sueldo base funciona un poco mejor).
                </p>
                
                <div className="bg-black/20 p-4 rounded-lg space-y-3">
                  <p className="text-[15px] text-zinc-200">
                    <span className="font-bold text-emerald-400">El OTE debería ser 15-25% más bajo</span> que el de tus setters inbound.
                  </p>
                  <p className="text-[15px] text-zinc-300">
                    Esto funciona como un puesto junior, que es como tu "banco de suplentes" para ascender a setter inbound completo.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-br from-[#1A1A1E] to-[#25252A] border border-zinc-700/50 p-8 rounded-2xl text-center shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 text-white/5 rotate-12">
                <BookOpen size={160} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto bg-[#D5B15B]/20 text-[#D5B15B] flex items-center justify-center rounded-2xl mb-6 shadow-[0_0_20px_rgba(213,177,91,0.2)]">
                  <FileText size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Acá Están Todos los Scripts Que Necesitás</h3>
                <p className="text-[16px] text-zinc-400 font-medium mb-6">Email, SMS y Teléfono</p>
                <p className="text-[15px] text-zinc-500">Revisados según diferentes situaciones, funnels, etc.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- NUEVA SECCIÓN: SCRIPTS --- */}
        <section id="section-23" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#55B467] p-2 rounded-lg text-white">
              <MessageSquare size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Scripts de Mensajes de Texto:</h2>
          </div>

          <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
            {/* Mensaje Inicial */}
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-[#55B467]">#</span> Mensaje Inicial:
            </h3>

            <div className="space-y-6">
              {/* Variación 1 */}
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">Mensaje Inicial - Variación 1: Funnel de Llamada</h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3">
                  <p className="text-[15px] text-zinc-300 italic">Hola John - Soy Sam del equipo de Cole Gordon (Closersio) [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Vi que respondiste a nuestro anuncio sobre incorporar vendedores a tu negocio (Ej: En qué ayudás a la gente). [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">¿Encontraste a los setters que estabas buscando? ¿O seguís buscando? [ENVIAR]</p>
                </div>
              </div>

              {/* Variación 2 */}
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">Mensaje Inicial - Variación 2: Funnel de Llamada</h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3">
                  <p className="text-[15px] text-zinc-300 italic">Hola John - Soy Sam del equipo de Cole Gordon (Closersio) [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Vi que respondiste a un anuncio sobre potencialmente conseguir vendedores para tu negocio. ¿Es así? [ENVIAR]</p>
                </div>
              </div>

              {/* Variación 3 */}
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4 leading-snug">Mensaje Inicial - Variación 3: Funnel de Llamada Pero Específicamente Para Fuera de Horario Laboral <br/><span className="text-zinc-500 font-normal text-[15px]">(Usar Si Es Automatizado. Si Se Usa IA, No Es Necesario)</span></h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3">
                  <p className="text-[15px] text-zinc-300 italic">Hola John - Soy Sam del equipo de Cole Gordon (Closersio) [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Vi que respondiste a un anuncio sobre conseguir ayuda para incorporar vendedores a tu negocio, y quería consultarte para ver si puedo ayudar. [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Técnicamente, ahora estoy fuera de horario, pero si te interesa una charla rápida, agendá un horario para mañana o esta semana. ¡Con gusto te ayudo! LINK DE CALENDARIO [ENVIAR]</p>
                </div>
              </div>

              {/* Funnel Compradores */}
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">Mensaje Inicial - Específicamente Para Funnels de Compradores SIN Llamada de Implementación</h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3">
                  <p className="text-[15px] text-zinc-300 italic">Hola John - Soy Sam del equipo de Cole Gordon (Closersio) [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Te llamaba por [nombre del producto] que acabás de comprar [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Hacemos una llamada 1 a 1 con cada miembro nuevo de [producto]. Te escribí pero no logré comunicarme. ¿Cuándo sería un buen horario para charlar? Puedo dejarte mi link de calendario acá, si es más fácil... [ENVIAR]</p>
                </div>
              </div>
            </div>

            <hr className="border-zinc-800 my-12" />

            {/* Mensaje 2 */}
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-[#55B467]">#</span> Mensaje #2:
            </h3>

            <div className="space-y-6">
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">Segundo Mensaje - Funnel de Llamada (Independiente de la Variación)</h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3 mb-4">
                  <p className="text-[15px] text-zinc-300 italic">Intenté llamarte de nuevo, pero no te encontré. [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Acá te dejo un video rápido que explica más en detalle cómo trabajamos: LINK [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Avisame cuándo sería un buen momento para conectar. Puedo dejarte mi link de calendario acá, si es más fácil... [ENVIAR]</p>
                </div>
                <p className="text-[14px] text-zinc-500 italic">[Eliminar la frase "puedo dejarte mi link de calendario" si este primer mensaje fue el texto de fuera de horario]</p>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">Segundo Mensaje - Funnel de Comprador (Sin Llamada de Implementación)</h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3">
                  <p className="text-[15px] text-zinc-300 italic">Insistiendo con esto ^^ [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Te llamé de nuevo. Si es más fácil, podés reclamar la llamada 1 a 1 que compraste usando este link: LINK [ENVIAR]</p>
                </div>
              </div>
            </div>

            <hr className="border-zinc-800 my-12" />

            {/* Mensaje 3 */}
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-[#55B467]">#</span> Mensaje #3:
            </h3>

            <div className="space-y-6">
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">Tercer Mensaje - Funnel de Llamada (El Mensaje Original Fue En Horario Laboral)</h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3">
                  <p className="text-[15px] text-zinc-300 italic">Última consulta - ¿[lo que hacés: incorporar vendedores a tu negocio?] sigue siendo una prioridad? [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Si no, no hay problema. No quiero saturarte el teléfono. [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">¿Me escribís y me contás? [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">Acá te dejo mi link de calendario, si querés simplemente agendar un horario. Con gusto te doy más información sobre nuestros servicios de reclutamiento: LINK [ENVIAR]</p>
                </div>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">Tercer Mensaje - Funnel de Llamada (Si el Primer Mensaje Fue En Horario Laboral)</h4>
                <p className="text-[15px] text-zinc-300 italic mb-2">Simplemente no les envíes la última línea sobre "Acá te dejo mi link de calendario, si querés..."</p>
                <p className="text-[15px] text-zinc-300 italic">Porque ya se la enviaste</p>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">Tercer Mensaje - Funnel de Comprador Sin Llamada de Implementación</h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3">
                  <p className="text-[15px] text-zinc-300 italic">Consulté con el equipo. Parece que todavía no agendaste tu llamada de inicio 1 a 1. [ENVIAR]</p>
                  <p className="text-[15px] text-zinc-300 italic">¿Me respondés y me contás? Quiero asegurarme de que recibas lo que pagaste :-) [ENVIAR]</p>
                </div>
              </div>
            </div>

            <hr className="border-zinc-800 my-12" />

            {/* Cuando Responden */}
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-[#55B467]">#</span> Cuando Responden
            </h3>

            <div className="space-y-6">
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">#1: Llamar inmediatamente / doble marcación</h4>
                <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-zinc-600">
                  <li>Entonces este lead pasa a ser mayor prioridad (yo lo contactaría 3 veces al día como si fuera un "lead nuevo")</li>
                </ul>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4">#2: Si no responden, enviar lo siguiente</h4>
                <p className="text-[15px] text-zinc-400 font-bold mb-3">Ejemplo:</p>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3 mb-6">
                  <p className="text-[15px] text-zinc-300 italic">Perfecto. Con gusto te ayudo. ¿Cómo tenés la semana? Puedo dejarte mi link de calendario acá, si es más fácil...</p>
                </div>

                <p className="text-[15px] text-zinc-400 font-bold mb-3">Cuando te pidan que les dejes el link de calendario:</p>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3">
                  <p className="text-[15px] text-zinc-300 italic">Podés agendar acá: LINK</p>
                  <p className="text-[15px] text-zinc-300 italic">¿Me avisás si encontrás un horario? A veces mi disponibilidad se pone un poco rara.</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[#1A1A1E] to-[#25252A] border border-zinc-700/50 p-8 rounded-2xl shadow-2xl mt-8">
                <p className="text-[16px] font-bold text-white mb-4 flex items-center gap-2">
                  <Target size={20} className="text-[#55B467]" /> Ver Imagen de Flujo Abajo:
                </p>
                <p className="text-[15px] text-zinc-400 mb-6">
                  O acá: <a href="https://drive.google.com/file/d/1utYca50wfAO6Um8gWFV8E3TDqORtEfxA/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Ver en Google Drive</a>
                </p>
                <div className="rounded-xl overflow-hidden border border-zinc-800 h-[600px]">
                  <iframe 
                    src="https://drive.google.com/file/d/1utYca50wfAO6Um8gWFV8E3TDqORtEfxA/preview" 
                    width="100%" 
                    height="100%" 
                    allow="autoplay"
                    className="w-full h-full bg-zinc-900 border-0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- NUEVA SECCIÓN: Gran Error --- */}
        <section id="section-24" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-red-500/20 p-2 rounded-lg text-red-500">
              <AlertTriangle size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Gran Error</h2>
          </div>
          <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
            <ul className="list-disc pl-6 space-y-4 text-[15px] text-zinc-300 marker:text-red-500">
              <li>Esta gente aplicó por información.</li>
              <li>No necesitás tener una conversación larga de calificación por texto.</li>
              <li>Ese es el propósito de la llamada de triage del setter.</li>
            </ul>
          </div>
        </section>

        {/* --- NUEVA SECCIÓN: Leyes TCPA --- */}
        <section id="section-25" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#D5B15B]/20 p-2 rounded-lg text-[#D5B15B]">
              <BookOpen size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Leyes TCPA:</h2>
          </div>
          <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
            <ul className="list-disc pl-6 space-y-4 text-[15px] text-zinc-300 marker:text-[#D5B15B]">
              <li>No soy abogado, y si querés tomarte esto en serio (deberías), consultá con uno.</li>
              <li>
                <span className="font-bold text-white">Necesitás incluir la palabra "STOP" en cada texto.</span> Yo típicamente lo hago un poco más personal para que no parezca automatizado. Agregalo al final de cada mensaje, enviado como un mensaje separado.
                <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                  <li>Para appointment setting específicamente, es debatible si necesitás incluirlo en cada mensaje o solo en el primero. Las reglas son muy estrictas cuando estás ofreciendo una oferta "Acá tenés un gran descuento" y un poco más flexibles y ambiguas cuando les estás recordando sobre una cita o el agendamiento de una cita.</li>
                  <li>De todas formas, no soy abogado - esto no es asesoramiento legal. Consultá a un abogado si querés asesoramiento legal.</li>
                </ul>
              </li>
              <li className="italic">"Ah, si no querés que te escriba, simplemente respondé 'STOP' y te saco de mi lista"</li>
            </ul>
          </div>
        </section>

        <hr className="border-zinc-800 my-16" />

        {/* --- NUEVA SECCIÓN: IA / Automatización --- */}
        <section id="section-26" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
              <Cpu size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Nota Rápida Sobre IA / Automatización</h2>
          </div>
          <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
            <ul className="list-disc pl-6 space-y-4 text-[15px] text-zinc-300 marker:text-blue-500">
              <li>
                <span className="font-bold text-white">Yo automatizaría 100% el primer texto para asegurar velocidad de contacto con el lead.</span>
                <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                  <li>Usá uno para horario laboral</li>
                  <li>Usá uno para fuera de horario laboral</li>
                </ul>
              </li>
              <li>
                <span className="font-bold text-white">El segundo y tercer texto también los podés automatizar, lo recomiendo, pero depende de vos.</span>
                <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                  <li>Nosotros automatizamos el segundo y tercer texto también SIEMPRE Y CUANDO NO RESPONDAN.</li>
                  <li>Si responden, la secuencia de textos se desactiva.
                    <ul className="list-[square] pl-6 mt-2 space-y-2 text-zinc-500 marker:text-zinc-700">
                      <li>Y entonces pasa a la lista de "respondidos" del setter.</li>
                      <li>Ahí deberían dejarles su link de agendamiento.</li>
                      <li>Luego insistir 2 veces en incrementos de 24 horas.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold text-white">IA:</span>
                <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                  <li>La secuencia de textos es tan simple que creo que usar IA (y todo el entrenamiento que eso implica) es innecesario.</li>
                  <li>Sin embargo, podés hacerlo si querés. Si lo hacés:
                    <ul className="list-[square] pl-6 mt-2 space-y-2 text-zinc-500 marker:text-zinc-700">
                      <li>Dale al setter la opción de desactivar manualmente la secuencia de IA e intervenir si es necesario (especialmente para preguntas complejas).</li>
                      <li>Asegurate de que todas las respuestas sigan activando que el setter llame lo antes posible.</li>
                      <li>Vas a tener que entrenarla en objeciones, preguntas, etc. - lo cual es fácil, pero igual hay que hacerlo.</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-zinc-800 my-16" />

        {/* --- NUEVA SECCIÓN: Scripts Email --- */}
        <section id="section-27" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-orange-500/20 p-2 rounded-lg text-orange-500">
              <Mail size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Scripts de Email:</h2>
          </div>

          <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
            <div className="mb-10">
              <ul className="list-disc pl-6 space-y-2 text-[15px] text-zinc-300 marker:text-orange-500">
                <li>Todo esto debería suceder automáticamente.
                  <ul className="list-[circle] pl-6 mt-1 space-y-1 text-zinc-400 marker:text-zinc-600">
                    <li>Con 24hs de diferencia entre cada uno.</li>
                  </ul>
                </li>
                <li>Una vez que se asigna el lead, se inscribe automáticamente en el email y se envía de inmediato.</li>
                <li>Deberían venir específicamente del email del setter, no del email de la empresa.
                  <ul className="list-[circle] pl-6 mt-1 space-y-1 text-zinc-400 marker:text-zinc-600">
                    <li>No deberían parecer emails promocionales.</li>
                  </ul>
                </li>
                <li>Cada email va a incluir un link para agendar.
                  <ul className="list-[circle] pl-6 mt-1 space-y-1 text-zinc-400 marker:text-zinc-600">
                    <li>Pero todas las respuestas deberían activar inmediatamente una llamada en la lógica de marcación.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-orange-500">#</span> Email #1
                </h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3 font-medium">
                  <p className="text-[15px] text-zinc-300 italic">Hola John - Soy Sam del equipo de Cole Gordon (Closersio)</p>
                  <p className="text-[15px] text-zinc-300 italic">Vi que respondiste a nuestro anuncio sobre incorporar vendedores a tu negocio (Ej: En qué ayudás a la gente).</p>
                  <p className="text-[15px] text-zinc-300 italic">¿Encontraste a los setters que estabas buscando? ¿O seguís buscando?</p>
                  <p className="text-[15px] text-zinc-300 italic">Si seguís buscando, me encantaría charlar. ¿Me avisás si encontrás un horario acá? LINK</p>
                  <div className="pt-2">
                    <p className="text-[15px] text-zinc-400">- Nombre</p>
                    <p className="text-[15px] text-zinc-400">- Empresa</p>
                    <p className="text-[15px] text-zinc-400">- Puesto</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-orange-500">#</span> Email #2
                </h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3 font-medium">
                  <p className="text-[15px] text-zinc-300 italic">John, te llamé pero no logré comunicarme.</p>
                  <p className="text-[15px] text-zinc-300 italic">¿Seguís considerando incorporar un setter o closer a tu negocio?</p>
                  <p className="text-[15px] text-zinc-300 italic">Si es así, con gusto charlamos. Simplemente buscá un horario acá: LINK</p>
                  <p className="text-[15px] text-zinc-300 italic">O respondeme, si es más fácil.</p>
                  <div className="pt-2">
                    <p className="text-[15px] text-zinc-400">- Nombre</p>
                    <p className="text-[15px] text-zinc-400">- Empresa</p>
                    <p className="text-[15px] text-zinc-400">- Puesto</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-orange-500">#</span> Email #3
                </h4>
                <div className="bg-[#27272A]/50 p-4 rounded-lg space-y-3 font-medium">
                  <p className="text-[15px] text-zinc-300 italic">^^ ¿Esto sigue siendo una prioridad?</p>
                  <p className="text-[15px] text-zinc-300 italic">Avisame. Si no, no hay problema. Te saco de la lista.</p>
                  <p className="text-[15px] text-zinc-300 italic">Si no, sentite libre de responderme o agendar acá: LINK</p>
                  <div className="pt-2">
                    <p className="text-[15px] text-zinc-400">- Nombre</p>
                    <p className="text-[15px] text-zinc-400">- Empresa</p>
                    <p className="text-[15px] text-zinc-400">- Puesto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-zinc-800 my-16" />

        {/* --- NUEVA SECCIÓN: Scripts Llamadas --- */}
        <section id="section-28" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-indigo-500/20 p-2 rounded-lg text-indigo-400">
              <PhoneCall size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Scripts de Llamadas</h2>
          </div>

          <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-8">Dos Tipos De "Llamadas de Setter"</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[18px] font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                  Llamada Outbound
                </h4>
                <ul className="list-disc pl-5 space-y-3 text-[15px] text-zinc-300 marker:text-indigo-400">
                  <li>Hacés la llamada saliente.</li>
                  <li>Atienden.</li>
                  <li>Generás suficiente enganche para llevar la llamada hacia el discovery.</li>
                  <li>Transicionás del discovery y hacés el pitch de la llamada.</li>
                  <li>Calificás al final (si es necesario).</li>
                  <li>Confirmás que puedan asistir.</li>
                </ul>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[18px] font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                  Llamada de Triage
                </h4>
                <ul className="list-disc pl-5 space-y-3 text-[15px] text-zinc-300 marker:text-indigo-400">
                  <li>La cita fue agendada en tu calendario, vía:
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>Texto</li>
                      <li>Agendamiento directo</li>
                      <li>Etc.</li>
                    </ul>
                  </li>
                  <li>Te conectás por Zoom o llamás por teléfono.</li>
                  <li>Ellos están esperando la llamada.</li>
                  <li>Rapport básico / encuadre de la llamada.</li>
                  <li>Entrás en discovery - y el resto es igual.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-zinc-800 my-16" />

        {/* --- NUEVA SECCIÓN: Diferentes Variaciones --- */}
        <section id="section-29" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-pink-500/20 p-2 rounded-lg text-pink-400">
              <ListOrdered size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Diferentes Variaciones Que Vamos a Cubrir También:</h2>
          </div>

          <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h3 className="text-[18px] font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-pink-400">#</span> Leads de Compradores
                </h3>
                <ul className="list-disc pl-5 space-y-3 text-[15px] text-zinc-300 marker:text-pink-400">
                  <li>Para compradores, podemos usar un encuadre de servicio al cliente.</li>
                  <li>Esto es muy efectivo.</li>
                  <li>Significa que la introducción va a ser diferente, y el resto es igual.</li>
                </ul>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h3 className="text-[18px] font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-pink-400">#</span> Llamadas a No-Shows
                </h3>
                <ul className="list-disc pl-5 space-y-3 text-[15px] text-zinc-300 marker:text-pink-400">
                  <li>Introducción diferente</li>
                  <li>Mismo script después de eso</li>
                </ul>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h3 className="text-[18px] font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-pink-400">#</span> Pipeline Setting
                </h3>
                <p className="text-[14px] text-zinc-400 italic mb-3">(Estos son leads de 5+ días de antigüedad)</p>
                <ul className="list-disc pl-5 space-y-3 text-[15px] text-zinc-300 marker:text-pink-400">
                  <li>Si tienen más de 21 días de antigüedad, cambiamos la introducción levemente.</li>
                  <li>El resto es igual.</li>
                </ul>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h3 className="text-[18px] font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-pink-400">#</span> Llamada de Implementación (Funnel de Comprador)
                </h3>
                <ul className="list-disc pl-5 space-y-3 text-[15px] text-zinc-300 marker:text-pink-400">
                  <li>Esto es cuando el comprador de bajo ticket hace una llamada de onboarding con tu setter.</li>
                  <li>El setter toma el encuadre inicial de servicio al cliente, y luego hace el pitch de la llamada con el closer.</li>
                  <li>Tengo un entrenamiento separado sobre esto, no lo vamos a cubrir acá.</li>
                </ul>
              </div>

            </div>

            {/* --- DIAGRAMA --- */}
            <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-4 md:p-8 shadow-xl mt-12 overflow-x-auto">
              <div className="flex flex-col xl:flex-row gap-8 items-center xl:items-start justify-center min-w-[320px] xl:min-w-[850px]">
                
                {/* Left Column */}
                <div className="bg-[#F8F6F0] rounded-3xl p-5 md:p-6 w-full max-w-sm">
                  <h4 className="font-bold text-[#202020] text-[19px] mb-5 px-2">The intro — changes by situation</h4>
                  
                  <p className="text-[#555] text-[15px] font-medium mb-3 px-2">The 2 core call types</p>
                  <div className="space-y-3 mb-6">
                    <div className="bg-[#EBF3FC] border border-[#B6D4F1] rounded-xl p-3.5 text-center">
                      <p className="font-bold text-[#14477A] text-[16px] mb-0.5">Outbound call</p>
                      <p className="text-[#326292] text-[14.5px]">You dial → push into discovery</p>
                    </div>
                    <div className="bg-[#EBF3FC] border border-[#B6D4F1] rounded-xl p-3.5 text-center">
                      <p className="font-bold text-[#14477A] text-[16px] mb-0.5">Triage call</p>
                      <p className="text-[#326292] text-[14.5px]">Appt booked → they expect you → frame</p>
                    </div>
                  </div>

                  <p className="text-[#555] text-[15px] font-medium mb-3 px-2">Variations — only the intro changes</p>
                  <div className="space-y-3">
                    <div className="bg-[#EBF3FC] border border-[#B6D4F1] rounded-xl p-3.5 text-center">
                      <p className="font-bold text-[#14477A] text-[16px] mb-0.5">Buyer leads</p>
                      <p className="text-[#326292] text-[14.5px]">Customer-service frame intro</p>
                    </div>
                    <div className="bg-[#EBF3FC] border border-[#B6D4F1] rounded-xl p-3.5 text-center">
                      <p className="font-bold text-[#14477A] text-[16px] mb-0.5">Calling no-shows</p>
                      <p className="text-[#326292] text-[14.5px]">Different intro, same script after</p>
                    </div>
                    <div className="bg-[#EBF3FC] border border-[#B6D4F1] rounded-xl p-3.5 text-center">
                      <p className="font-bold text-[#14477A] text-[16px] mb-0.5">Pipeline setting (5+ days)</p>
                      <p className="text-[#326292] text-[14.5px]">Tweak intro if 21+ days old</p>
                    </div>
                    <div className="bg-[#EBF3FC] border border-[#B6D4F1] rounded-xl p-3.5 text-center">
                      <p className="font-bold text-[#14477A] text-[16px] mb-0.5">Implementation call</p>
                      <p className="text-[#326292] text-[14.5px] leading-tight">Buyer funnel → CS frame → closer<br/>(covered in a separate training)</p>
                    </div>
                  </div>
                </div>

                {/* Center Arrow */}
                <div className="flex xl:flex-col items-center justify-center text-zinc-500 xl:w-24 hidden md:flex xl:mt-48">
                  <ArrowRight className="xl:hidden w-8 h-8" />
                  <div className="hidden xl:block text-center relative -left-4">
                    <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-600">
                      <path d="M0 80 C 40 80, 60 20, 95 20" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path d="M85 10 L 97 20 L 85 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-[13px] text-zinc-500 mt-2 font-medium">all paths merge<br/>at discovery →</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="bg-[#F8F6F0] rounded-3xl p-5 md:p-6 w-full max-w-sm xl:mt-24">
                  <h4 className="font-bold text-[#202020] text-[19px] mb-6 px-2">The core call — identical every time</h4>
                  
                  <div className="space-y-1.5">
                    <div className="bg-[#E8F6ED] border border-[#A6DDB9] rounded-xl p-4 text-center">
                      <p className="font-bold text-[#175E33] text-[17px] mb-0.5">Discovery</p>
                      <p className="text-[#2A7545] text-[15px]">Dig into their situation</p>
                    </div>
                    <div className="flex justify-center text-[#A6DDB9]">
                      <ArrowDown size={24} strokeWidth={2.5} />
                    </div>
                    <div className="bg-[#E8F6ED] border border-[#A6DDB9] rounded-xl p-4 text-center">
                      <p className="font-bold text-[#175E33] text-[17px] mb-0.5">Transition + pitch</p>
                      <p className="text-[#2A7545] text-[15px]">Pitch booking the call</p>
                    </div>
                    <div className="flex justify-center text-[#A6DDB9]">
                      <ArrowDown size={24} strokeWidth={2.5} />
                    </div>
                    <div className="bg-[#E8F6ED] border border-[#A6DDB9] rounded-xl p-4 text-center">
                      <p className="font-bold text-[#175E33] text-[17px] mb-0.5">Qualify (if necessary)</p>
                      <p className="text-[#2A7545] text-[15px]">Only when needed</p>
                    </div>
                    <div className="flex justify-center text-[#A6DDB9]">
                      <ArrowDown size={24} strokeWidth={2.5} />
                    </div>
                    <div className="bg-[#E8F6ED] border border-[#A6DDB9] rounded-xl p-4 text-center">
                      <p className="font-bold text-[#175E33] text-[17px] mb-0.5">Tie down the show-up</p>
                      <p className="text-[#2A7545] text-[15px]">Lock the appointment</p>
                    </div>
                  </div>
                  
                  <p className="text-[#666] text-center text-[15px] mt-6 font-medium">Same backbone for all 6 entry points</p>
                </div>

              </div>
            </div>
          </div>
        </section>

        <hr className="border-zinc-800 my-16" />

        {/* --- NUEVA SECCIÓN: Guion Outbound --- */}
        <section id="section-30" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-teal-500/20 p-2 rounded-lg text-teal-400">
              <PhoneForwarded size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Guion Outbound</h2>
          </div>

          <div className="mb-10 text-[16px] text-zinc-300 leading-relaxed bg-[#121214] border border-zinc-800 p-6 rounded-xl shadow-lg">
            <p className="mb-4">
              Vamos a cubrir primero el guion de llamadas salientes (outbound), porque es la versión más completa del proceso de principio a fin.
            </p>
            <p>
              Después veremos todas las variaciones y ajustes.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* Proceso de Flujo de Llamada Outbound */}
            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Target className="text-teal-400" size={24} />
                Proceso de Flujo de Llamada Outbound
              </h3>
              
              <div className="space-y-6">
                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <h4 className="text-[17px] font-bold text-teal-400 mb-4">Introducción:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-teal-400/50">
                    <li>Gancho (Hook) → Acuerdo para pasar a Discovery (Descubrimiento)</li>
                  </ul>
                </div>

                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <h4 className="text-[17px] font-bold text-teal-400 mb-4">Discovery (Descubrimiento):</h4>
                  <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-teal-400/50">
                    <li>¿Por qué están aquí?</li>
                    <li>Información de fondo</li>
                    <li>Aislar el/los problema(s)</li>
                    <li>Desglosar (Chunk Down)</li>
                    <li>Justificación de la necesidad (Need Pay Off)</li>
                  </ul>
                </div>

                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <h4 className="text-[17px] font-bold text-teal-400 mb-4">Transición:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-teal-400/50">
                    <li>Afirmar que puedes ayudar</li>
                    <li>Referenciar a alguien a quien hayas ayudado</li>
                    <li>Vender el valor de la reunión con el closer</li>
                  </ul>
                </div>

                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <h4 className="text-[17px] font-bold text-teal-400 mb-4">Agendar:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-teal-400/50">
                    <li>Elegir horario</li>
                    <li>Asegurar el compromiso de asistencia</li>
                    <li>Hacer que acepten la invitación de calendario</li>
                  </ul>
                </div>

                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <h4 className="text-[17px] font-bold text-teal-400 mb-4">Calificar (Opcional)</h4>
                  <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-teal-400/50">
                    <li>Hacer aquí las preguntas difíciles, si es necesario</li>
                  </ul>
                </div>

                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <h4 className="text-[17px] font-bold text-teal-400 mb-4">Terminar la llamada</h4>
                  <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-teal-400/50">
                    <li>Comprometerlos a ver el video previo a la llamada (precall)</li>
                    <li>Terminar la llamada</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Discovery Setter vs Closer */}
            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Search className="text-blue-400" size={24} />
                ¿Qué tan profundo debe llegar un Setter en el Discovery... comparado con un Closer?
              </h3>
              
              <p className="text-[15px] text-zinc-400 mb-8 italic">
                Me hacen esta pregunta todo el tiempo. Así que déjame mostrarte el discovery del closer para que puedas comparar/contrastar.
              </p>
              
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[18px] font-bold text-blue-400 mb-6 border-b border-zinc-800 pb-3">
                  Discovery del Closer:
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-3 text-[15px] text-zinc-300">
                      <li className="flex items-start gap-2">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>¿Por qué están aquí?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>¿Información de fondo?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>Aislar el/los problema(s)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>Desglosar (Chunk Down)</span>
                      </li>
                      <li className="flex items-start gap-2 mt-4">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>
                          <strong className="text-white">Estirar el dolor (Stretch Pain)</strong>
                          <ul className="pl-5 mt-2 space-y-1 text-zinc-400">
                            <li>- ¿Hace cuánto tiempo?</li>
                            <li>- Dolor compuesto (B2C)</li>
                            <li>- Conectándolo con otras áreas de su vida</li>
                          </ul>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3 text-[15px] text-zinc-300">
                      <li className="flex items-start gap-2">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>
                          <strong className="text-white">Intentos pasados</strong>
                          <ul className="pl-5 mt-2 space-y-1 text-zinc-400">
                            <li>- ¿Qué han intentado en el pasado?</li>
                            <li>- ¿Qué los ha mantenido estancados? ¿Qué se los impide?</li>
                          </ul>
                        </span>
                      </li>
                      <li className="flex items-start gap-2 mt-4">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>
                          <strong className="text-white">Costo:</strong>
                          <ul className="pl-5 mt-2 space-y-1 text-zinc-400">
                            <li>- ¿Qué pasa si nada cambia?</li>
                          </ul>
                        </span>
                      </li>
                      <li className="flex items-start gap-2 mt-4">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>
                          <strong className="text-white">Deseo</strong>
                          <ul className="pl-5 mt-2 space-y-1 text-zinc-400">
                            <li>- Objetivo</li>
                            <li>- Por qué</li>
                            <li>- Impacto</li>
                          </ul>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Algunas cosas antes de empezar */}
            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Info className="text-[#D5B15B]" size={24} />
                Algunas cosas antes de empezar:
              </h3>
              
              <div className="space-y-6">
                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D5B15B]/20 text-[#D5B15B] flex items-center justify-center font-bold text-lg shrink-0">1</div>
                  <div className="text-[15px] text-zinc-300 space-y-3 pt-1">
                    <p>
                      Te recomiendo mucho también revisar los otros videos de entrenamiento de ventas en mi canal de YouTube y en nuestro portal de Skool. Los entrenamientos de closers profundizan mucho más en la psicología de ventas, y diferentes matices y tácticas que puedes usar durante la llamada.
                    </p>
                    <p>
                      Este entrenamiento es bastante extenso, así que te estoy dando lo esencial en cuanto al proceso de llamada de un setter.
                    </p>
                  </div>
                </div>

                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-[#D5B15B]/20 text-[#D5B15B] flex items-center justify-center font-bold text-lg shrink-0">2</div>
                  <div className="text-[15px] text-zinc-300">
                    Puedes ver un ejemplo mío haciendo una llamada de setter <a href="#" className="text-blue-400 hover:underline">aquí</a>.
                  </div>
                </div>

                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D5B15B]/20 text-[#D5B15B] flex items-center justify-center font-bold text-lg shrink-0">3</div>
                  <div className="text-[15px] text-zinc-300 pt-1">
                    Este ejemplo que te estoy dando es para vender algo relacionado con generación de leads. Pero al final, te daré diferentes ajustes y marcos de trabajo para ofertas tipo B2C.
                  </div>
                </div>
              </div>
            </div>

            {/* Guion - Introducción */}
            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <PlayCircle className="text-purple-400" size={24} />
                Introducción:
              </h3>
              
              <div className="bg-[#121214] border border-purple-500/30 p-6 md:p-8 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.05)] relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-full pointer-events-none"></div>
                
                <div className="space-y-6 relative z-10 text-[16px] text-zinc-300 italic font-medium leading-relaxed">
                  <p>
                    "¿John? John... soy Cole de Closers.io... Parece que respondiste a un anuncio sobre instalar un sistema de generación de leads en tu negocio. ¿Te suena?"
                  </p>
                  
                  <p>
                    "Quería contactarte para ver si encontraste la ayuda que buscabas... o si todavía estás buscando."
                  </p>
                  
                  <p>
                    "Genial. Bueno, mira - estoy MÁS que preparado para contarte todo sobre lo que podríamos ayudarte... pero para ser respetuoso con tu tiempo... ¿te molesta si me tomo unos minutos para entender el contexto de tu negocio? Así solo te comparto las partes de lo que hacemos que te sean útiles a ti específicamente... ¿bien?"
                  </p>
                  
                  <div className="bg-[#27272A]/80 p-3 rounded-lg text-[14px] text-zinc-400 not-italic flex items-center gap-2 w-fit">
                    <Clock size={16} />
                    <span>&lt;pequeña pausa, pero seguir directo a la siguiente pregunta&gt;</span>
                  </div>
                  
                  <p>
                    "Entonces... supongo que el mejor lugar para empezar... obviamente respondiste al anuncio sobre conseguir más leads, y quieres ver qué ofrecemos y obtener toda la información sobre eso... pero cuéntame un poco más sobre qué está pasando en tu negocio ahora mismo... que te hizo querer contactarnos."
                  </p>
                </div>
              </div>

              {/* Puntos Clave */}
              <div className="mt-8 bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-purple-400 mb-5 flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  Puntos Clave:
                </h4>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-[15px] text-zinc-300 font-medium">Escucha mi tonalidad.</p>
                    <ul className="list-disc pl-5 text-[14.5px] text-zinc-400 marker:text-zinc-600 space-y-1">
                      <li>Podría tener un guion terrible - y aun así lograrlo con buena tonalidad.</li>
                      <li>La tonalidad de la mayoría de los setters es 0/10.</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-[15px] text-zinc-300 font-medium">Pregunta inicial:</p>
                    <p className="text-[14.5px] text-zinc-400 mb-2">También puedes usar:</p>
                    <div className="bg-[#27272A]/50 p-3 rounded-lg italic text-[14.5px] text-zinc-300 border-l-2 border-purple-500/50">
                      "¿Alguien de nuestro equipo te contactó y habló contigo ya? ¿O sigues esperando información?"
                    </div>
                    <p className="text-[14.5px] text-zinc-500 mt-2">Cualquiera de las dos está bien.</p>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-[15px] text-zinc-300 font-medium">
                      Nota cómo elimino la objeción de "solo quería ver qué hacen / obtener información" varias veces a lo largo:
                    </p>
                    <div className="space-y-2 pl-4 border-l-2 border-zinc-700">
                      <p className="italic text-[14.5px] text-zinc-400">"Estoy MÁS que preparado para compartir contigo toda la información sobre lo que hacemos..."</p>
                      <p className="italic text-[14.5px] text-zinc-400">"Obviamente respondiste a un anuncio sobre conseguir más leads en tu negocio... y sé que quieres ver qué ofrecemos y obtener toda la información... pero dime..."</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-[15px] text-zinc-300 font-medium">
                      Nota también cómo alineo su objetivo con mi objetivo:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      <div className="bg-zinc-800/50 p-4 rounded-lg text-center">
                        <span className="text-zinc-400 block mb-1 text-sm">Su objetivo:</span>
                        <span className="text-white font-bold">Obtener información</span>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-lg text-center">
                        <span className="text-purple-300 block mb-1 text-sm">Mi objetivo:</span>
                        <span className="text-purple-100 font-bold">Que acepten hacer el discovery conmigo</span>
                      </div>
                    </div>
                    <p className="text-[14.5px] text-zinc-400 mt-3 leading-relaxed">
                      Arriba te muestro cómo alineo ambos para lograr que acepten — para que vean el discovery conmigo como la mejor ruta para llegar a su objetivo (información).
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <hr className="border-zinc-800 my-16" />

        {/* --- NUEVA SECCIÓN: Discovery --- */}
        <section id="section-31" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400">
              <Compass size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Discovery:</h2>
          </div>

          <div className="space-y-12">
            
            {/* ¿Por qué están aquí? */}
            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <HelpCircle className="text-emerald-400" size={24} />
                ¿Por qué están aquí?
              </h3>
              
              <div className="space-y-6">
                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <p className="text-[15px] text-zinc-300 italic mb-4">
                    ...pero... cuéntame un poco más sobre qué está pasando en tu negocio ahora mismo... que te hizo querer contactarnos.
                  </p>
                  
                  <p className="text-[14.5px] text-zinc-400 mb-4">
                    (Aquí van a responder. Puede que te cuenten su problema, que es lo que buscas, o puede que no. De cualquier forma, normalmente haré algunas preguntas de sondeo:)
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 marker:text-emerald-400/50">
                    <li>Cuéntame más</li>
                    <li>¿A qué te refieres?</li>
                    <li>Cuando dices ___, ¿a qué te refieres exactamente?</li>
                    <li>Falta de ventas, ¿en qué sentido, específicamente?</li>
                  </ul>
                  
                  <p className="text-[14.5px] text-zinc-400 mt-4 italic border-l-2 border-zinc-700 pl-3">
                    También puedes obtener información vaga y general aquí. "Solo quería ver cómo podemos mejorar".
                  </p>
                </div>

                <div className="bg-[#121214] border border-emerald-500/10 p-6 rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500/20"></div>
                  <p className="text-[16px] text-white font-bold mb-6">
                    Necesitas asegurarte de entender el problema. Tienes dos opciones:
                  </p>
                  
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-lg">
                      <h4 className="text-[16px] font-bold text-emerald-400 mb-3">Opción 1: Aclarar</h4>
                      <div className="space-y-3">
                        <p className="text-[14.5px] text-zinc-300 italic">"Entiendo. Pero en cuanto a lo que está pasando con tu generación de leads ahora... ¿cuál dirías que es el mayor desafío? ¿O qué es lo que no está funcionando tan bien como podría o debería?"</p>
                        <p className="text-[14.5px] text-zinc-300 italic">"Entendido - así que todo está funcionando bien ahora. Solo quieres mejorarlo. Pero acota esto para mí y sé específico - ¿qué es exactamente lo que necesita funcionar mejor? ¿Cuál es la 1-2 cosa que - si se mejorara - llevaría tu generación de leads al siguiente nivel?"</p>
                      </div>
                    </div>
                    
                    <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-lg">
                      <h4 className="text-[16px] font-bold text-emerald-400 mb-3">Opción 2: Descubrirlo a través del Chunking Down</h4>
                      <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-zinc-300 marker:text-emerald-400/50">
                        <li>Esto es lo que hace mi equipo. Simplemente avanzamos en la llamada. Y a medida que entramos en el chunking down sobre generación de leads... se hará obvio cuál es el problema.</li>
                        <li>Lo que deberías hacer depende de la oferta. Sabrás qué tiene sentido para ti.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Información de Fondo */}
            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Layers className="text-blue-400" size={24} />
                Información de Fondo
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <h4 className="text-[17px] font-bold text-white mb-4 border-b border-zinc-800 pb-2">Oferta</h4>
                  <ul className="space-y-3 text-[15px] text-zinc-300">
                    <li>
                      <span className="font-bold text-blue-400 mr-2">1.</span> Entonces, ¿cuál es tu oferta exactamente?
                      <ul className="pl-6 mt-2 space-y-1 text-zinc-400 list-[circle] marker:text-zinc-600">
                        <li>¿Qué problema les resuelves?</li>
                        <li>¿A qué precio?</li>
                        <li>¿Y quién es el cliente perfecto con el que trabajas?
                          <ul className="pl-5 mt-1 list-[square] marker:text-zinc-700">
                            <li>¿Es este el tipo de clientes con los que estás trabajando ahora?</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="pt-2">
                      <span className="font-bold text-blue-400 mr-2">2.</span> (Si es necesario) ¿cómo se entrega esto?
                    </li>
                  </ul>
                </div>
                
                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <h4 className="text-[17px] font-bold text-white mb-4 border-b border-zinc-800 pb-2">Calificación de Socios</h4>
                  <ul className="space-y-3 text-[15px] text-zinc-300">
                    <li>
                      <span className="font-bold text-blue-400 mr-2">1.</span> ¿Cómo funciona tu estructura de liderazgo?
                      <ul className="pl-6 mt-2 space-y-1 text-zinc-400 list-[circle] marker:text-zinc-600">
                        <li>Si hay socio:
                          <ul className="pl-5 mt-1 space-y-1 list-[square] marker:text-zinc-700">
                            <li>¿Cómo se llama?</li>
                            <li>¿Cómo dividen las responsabilidades?</li>
                            <li>¿Entonces son 50/50?</li>
                            <li>¿Están de acuerdo en que XYZ es un problema?
                              <ul className="pl-5 mt-1 list-[disc] marker:text-zinc-700">
                                <li>¿Qué piensan ellos?</li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Puntos Clave Info */}
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-blue-400 mb-5 flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  Puntos Clave:
                </h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-[14.5px] text-zinc-300">
                      <strong className="text-white">Para B2B</strong>, muchas veces entendemos el problema desde el principio, LUEGO obtenemos contexto sobre el negocio, y después volvemos al problema (que es lo que haremos a continuación).
                    </p>
                    <ul className="list-disc pl-5 text-[14.5px] text-zinc-400 marker:text-zinc-600 space-y-1">
                      <li>La razón de esto es que si un cliente dice que su problema es la generación de leads.</li>
                      <li>Ayuda saber si están:
                        <ul className="list-[circle] pl-5 mt-1 space-y-1">
                          <li>Facturando 1M/mes</li>
                          <li>Facturando 10k/mes</li>
                          <li>Así como cuál es el negocio, cuál es el embudo (funnel), etc.</li>
                        </ul>
                      </li>
                      <li>Saber eso de antemano es muy útil para cuando profundizas más en el problema.</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <p className="text-[14.5px] text-zinc-300">
                      <strong className="text-white">Para B2C</strong>, puede que tengas una versión de esto. En algunos casos, lo saltas por completo y vas directo a la siguiente sección.
                    </p>
                    <div className="pl-5 border-l-2 border-zinc-700 mt-2 space-y-2">
                      <p className="text-[14.5px] text-zinc-400">La forma en que deberías pensarlo es la siguiente:</p>
                      <p className="text-[14.5px] text-zinc-300 italic">"Antes de profundizar más en el problema... ¿hay alguna información de contexto que necesite saber que me ayude mejor a encontrar/diagnosticar el problema?"</p>
                      <p className="text-[14.5px] text-zinc-400">Si es así, preguntas eso ahí.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <p className="text-[14.5px] text-zinc-300">
                      La otra razón por la que hacemos este tipo de preguntas primero, es porque son fáciles y no invasivas.
                    </p>
                    <ul className="list-disc pl-5 text-[14.5px] text-zinc-400 marker:text-zinc-600 space-y-1">
                      <li>Cuando profundizamos más en el problema, a veces puede percibirse como invasivo o como si estuviéramos haciendo preguntas demasiado personales de forma agresiva.
                        <ul className="list-[circle] pl-5 mt-1"><li>Se siente como si fuéramos demasiado rápido.</li></ul>
                      </li>
                      <li>Así que empezar con preguntas fáciles como estas pone al prospecto en un patrón de responder nuestras preguntas.</li>
                      <li>La forma en que le enseño a los closers es a construir consistentemente hacia preguntas cada vez más personales (y dolorosas) - que es donde realmente consigues el oro.</li>
                      <li>Para los setters, no necesitaremos llegar tan profundo - pero aun así vale la pena tenerlo.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Aislar - Chunk Down - Justificación */}
            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Crosshair className="text-orange-400" size={24} />
                Aislar - Chunk Down - Justificación de la Necesidad (Need Payoff)
              </h3>
              
              <div className="bg-[#121214] border border-orange-500/20 p-6 md:p-8 rounded-xl relative overflow-hidden mb-8">
                <div className="absolute top-0 left-0 w-1 h-full bg-orange-500/50"></div>
                <div className="space-y-5 text-[15.5px] text-zinc-300 italic font-medium leading-relaxed">
                  <p>"Entendido, así que volviendo... parece que el problema principal es simplemente la generación de leads. ¿Es correcto?"</p>
                  
                  <p>"Entonces, ¿cómo estás consiguiendo clientes ahora?" <span className="not-italic text-zinc-500 text-[14px]">(Que hagan una lista)</span></p>
                  
                  <p>"Entendido. ¿Alguna otra forma en que estés consiguiendo clientes?"</p>
                  
                  <p>"Veamos cómo te está funcionando eso..."</p>
                  
                  <p>"¿En los últimos 30 días, cuánto gastaste en anuncios?"</p>
                  
                  <p>"¿Y cuántas llamadas de ventas te generó eso?"</p>
                  
                  <p>"¿Y cuántas de esas se presentaron?"</p>
                  
                  <p>"Y - antes - mencionaste que (XYZ) era tu prospecto perfecto. ¿Cuántos de esos cumplían con el perfil de ese prospecto perfecto que mencionaste antes?"</p>
                  
                  <p><span className="not-italic text-zinc-500 text-[14px]">(Ninguno de ellos)</span> - "¿Y por qué crees que es así?"</p>
                  
                  <div className="bg-[#1A1A1E] p-4 rounded-lg my-4 not-italic font-normal">
                    <p className="text-white font-bold mb-2">Solo puede haber dos razones:</p>
                    <ul className="list-disc pl-5 space-y-1 text-zinc-400 marker:text-orange-500">
                      <li>¿Podría ser el método o embudo que estás usando para atraer a estas personas?</li>
                      <li>¿O podría ser el mensaje?</li>
                      <li>¿Cuál crees que es? ¿O ambas?</li>
                    </ul>
                  </div>
                  
                  <p>"Entonces bien - tuviste XYZ presentaciones. ¿Cuántas cerraste?"</p>
                  
                  <p>"¿Y a qué precio?"</p>
                  
                  <p>"Entonces hiciste XYZ menos el mes pasado en ingresos?"</p>
                  
                  <p>"Entendido - así que XYZ fue tu ingreso total el mes pasado...?"</p>
                  
                  <p>"Ahora, cerraste el 15% de las llamadas que tomaste. Normalmente vemos 25-30%."</p>
                  
                  <div className="bg-[#1A1A1E] p-4 rounded-lg my-4 not-italic font-normal">
                    <p className="text-white font-bold mb-2">Eso se debe a una de estas dos razones:</p>
                    <ul className="list-disc pl-5 space-y-1 text-zinc-400 marker:text-orange-500">
                      <li>Calidad del lead, o...</li>
                      <li>Proceso de ventas</li>
                    </ul>
                  </div>
                  
                  <p>"¿Cuál crees que es?"</p>
                  
                  <p>"¿Y por qué dirías eso?"</p>
                  
                  <p className="not-italic text-zinc-500 text-[14px]">(Luego vuelve al siguiente problema aislado, si hay alguno).</p>
                  
                  <p>"Ok, genial. Entonces déjame preguntarte esto..."</p>
                  
                  <p className="text-orange-300 font-bold">"Si pudieras (resolver el problema 1: arreglar tu problema de volumen de leads para que tengas más gente con quien hablar)..."</p>
                  
                  <p className="text-orange-300 font-bold">"Y también (resolver el problema 2: ajustar el mensaje para que esas personas sean realmente más calificadas)..."</p>
                  
                  <p className="text-orange-300 font-bold">"¿A qué nivel de ingresos crees que eso te permitiría llegar?"</p>
                </div>
              </div>

              {/* Puntos Clave Aislar */}
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-orange-400 mb-5 flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  Puntos Clave:
                </h4>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <p className="text-[14.5px] text-zinc-300">
                      En el "disparo de advertencia" (shot across the bow) deberíamos haber identificado el problema. Si no, necesitas identificar el problema lo antes posible.
                    </p>
                    <ul className="list-disc pl-5 text-[14.5px] text-zinc-400 marker:text-zinc-600 space-y-1">
                      <li>El negocio se trata de resolver problemas</li>
                      <li>Resolver problemas = crear valor</li>
                      <li>La gente intercambia dinero por valor</li>
                      <li>Las ventas son una demostración de que puedes resolver un problema para alguien más</li>
                      <li>Sin problema = sin ventas</li>
                      <li className="text-orange-300 font-bold mt-2">TODO EL MARCO DE LA CONVERSACIÓN DEBE GIRAR EN TORNO AL PROBLEMA</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <p className="text-[14.5px] text-zinc-300">
                      Una vez que identificas eso, avanzas hacia "desglosarlo" (chunking it down)
                    </p>
                    <ul className="list-disc pl-5 text-[14.5px] text-zinc-400 marker:text-zinc-600 space-y-1">
                      <li>Chunking down es donde llevas lo vago → a lo específico
                        <ul className="list-[circle] pl-5 mt-1"><li>Generación de leads → 2 llamadas el mes pasado</li></ul>
                      </li>
                      <li>La gente tiende a generalizar, eliminar, distorsionar. Y en última instancia, minimizar su situación</li>
                      <li>El chunking down revela la verdad
                        <ul className="list-[circle] pl-5 mt-1"><li>Que usualmente es peor</li></ul>
                      </li>
                      <li>También saca a la superficie el dolor real de la situación - qué tan mal está realmente</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Ajustes y Patrones */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              
              {/* Ajustes para otras ofertas */}
              <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
                <h3 className="text-[20px] font-bold text-white mb-6 flex items-center gap-3">
                  <Settings className="text-[#D5B15B]" size={22} />
                  Ajustes para otras ofertas:
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-[#121214] border border-zinc-800 p-5 rounded-xl">
                    <h4 className="text-[16px] font-bold text-[#D5B15B] mb-3">Citas (Dating):</h4>
                    <ul className="list-disc pl-5 space-y-1 text-[14.5px] text-zinc-300 marker:text-[#D5B15B]/50">
                      <li>¿Cuántas citas?</li>
                      <li>¿Cuántas realmente interesantes? ¿Versus rechazos inmediatos?</li>
                      <li>¿Cuántas pasaron a una segunda cita?</li>
                      <li>¿Por qué terminó? ¿Qué pasó?</li>
                      <li>En general, ¿cuál es el patrón del problema con el que estás lidiando?
                        <ul className="list-[circle] pl-5 mt-1"><li>Dame un ejemplo</li></ul>
                      </li>
                      <li>¿Cuál fue la última cita o experiencia realmente mala que tuviste? ¿Qué pasó?</li>
                    </ul>
                  </div>

                  <div className="bg-[#121214] border border-zinc-800 p-5 rounded-xl">
                    <h4 className="text-[16px] font-bold text-[#D5B15B] mb-3">Pérdida de peso:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-[14.5px] text-zinc-300 marker:text-[#D5B15B]/50">
                      <li>Guíame a través de un día de alimentación.
                        <ul className="list-[circle] pl-5 mt-1">
                          <li>¿Qué desayunaste? ¿Almuerzo?</li>
                          <li>¿Qué tal ayer?</li>
                        </ul>
                      </li>
                      <li>¿Te pesaste esta mañana? ¿Cuánto pesabas?
                        <ul className="list-[circle] pl-5 mt-1"><li>¿Cuándo fue la última vez que te pesaste?</li></ul>
                      </li>
                      <li>¿Cuándo te cuesta más mantenerte en el camino con una alimentación saludable?
                        <ul className="list-[circle] pl-5 mt-1"><li>Dame un ejemplo.</li></ul>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#121214] border border-zinc-800 p-5 rounded-xl">
                    <h4 className="text-[16px] font-bold text-[#D5B15B] mb-3">Oportunidad de negocio (Biz Opp):</h4>
                    <ul className="list-disc pl-5 space-y-1 text-[14.5px] text-zinc-300 marker:text-[#D5B15B]/50">
                      <li>¿A qué te dedicas ahora mismo?</li>
                      <li>¿Te gusta?</li>
                      <li>¿Qué no te gusta de eso?
                        <ul className="list-[circle] pl-5 mt-1">
                          <li>¿Cuándo fue la última vez que pasó eso?</li>
                          <li>Dame un ejemplo.</li>
                        </ul>
                      </li>
                      <li>¿Cuál es la peor parte de eso?</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Patrones Clave */}
              <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
                <h3 className="text-[20px] font-bold text-white mb-6 flex items-center gap-3">
                  <Lightbulb className="text-yellow-400" size={22} />
                  Patrones clave de preguntas que haces:
                </h3>
                
                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <ul className="list-disc pl-5 space-y-3 text-[16px] text-white font-medium marker:text-yellow-400">
                    <li>Dame un ejemplo</li>
                    <li>¿Cuándo fue la última vez que pasó X?</li>
                    <li>Guíame (alguna versión de "un día en la vida")</li>
                    <li>¿Cómo se manifiesta eso exactamente para ti? Dame un ejemplo.</li>
                    <li>¿Qué pasó?</li>
                  </ul>
                  
                  <div className="mt-8 pt-6 border-t border-zinc-800 space-y-4">
                    <p className="text-[15px] text-zinc-300 leading-relaxed">
                      Piensa en usar las preguntas para pintar un retrato en tu mente. Tienes que llenarlo con líneas, colores, etc. De lo vago → a lo específico.
                    </p>
                    <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                      <p className="text-[14.5px] text-yellow-300">
                        Terminamos esta sección con algo sobre sus metas. Puedes indagar un poco aquí, pero es solo para reorientarlos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>

          </div>
        </section>

        <hr className="border-zinc-800 my-16" />

        {/* --- NUEVA SECCIÓN: Transición y Cierre --- */}
        <section id="section-32" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-fuchsia-500/20 p-2 rounded-lg text-fuchsia-400">
              <ArrowRightLeft size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Transición y Cierre (Tie Down):</h2>
          </div>

          <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
            <div className="bg-[#121214] border border-fuchsia-500/30 p-6 md:p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/5 rounded-bl-full pointer-events-none"></div>
              
              <div className="space-y-6 relative z-10 text-[16px] text-zinc-300 italic font-medium leading-relaxed">
                <p>
                  "Genial - así que definitivamente podemos ayudarte a llegar a tu objetivo XYZ... y de hecho tenemos clientes como John en tu industria - él hace (lo que hace) - logrando (XYZ en ingresos) - y mucho más. Te puedo mandar algunos ejemplos en un momento."
                </p>
                <p>
                  "Pero mirá - independientemente de si querés trabajar con nosotros o no - dejame conectarte con uno de nuestros asesores, Sam. Él puede compartirte más sobre los frameworks y métodos que clientes como (los que mencionaste) y otros en (tu industria) usaron para llegar a (el objetivo que dijeron que querían) y de hecho - mucho más allá de eso."
                </p>
                <p>
                  "Así que... tengo su calendario abierto ahora... ¿te viene mejor mañana a la hora X o Y para que hablen?"
                </p>
                <p>
                  "Genial - y para que quede claro - ¿vas a poder estar 100% seguro a esa hora? ¿O hay alguna chance de que tengas que reprogramar?"
                </p>
                <p>
                  "Entendido, ¿y cuál es tu mejor email?"
                </p>
                <p>
                  "Ok - te acabo de mandar la invitación para ese horario. ¿Podés entrar y aceptarla? Quiero asegurarme de que tengas el mail para que sepas cómo encontrar la información de la llamada."
                </p>
                <p>
                  "Buenísimo - ¿y ves el link de Zoom en la descripción? Perfecto. Y ya está agregado al calendario."
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-zinc-800 my-16" />

        {/* --- NUEVA SECCIÓN: Calificar --- */}
        <section id="section-33" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-rose-500/20 p-2 rounded-lg text-rose-400">
              <ClipboardCheck size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Calificar (Opcional)</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
              <div className="space-y-6 text-[15.5px] text-zinc-300 mb-8">
                <p>
                  En algunas ofertas, típicamente B2B, no necesitamos hacer una calificación pesada porque los ingresos que sacamos en el discovery (además de otras métricas) revelan mucho sobre la calidad del negocio.
                </p>
                <p>
                  Pero en ciertas ofertas, si tenés que calificar - O - si este lead es dudoso y querés chequear dos veces antes de agendarlo - hago eso al final.
                </p>
                
                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl mt-4">
                  <p className="italic text-zinc-300 mb-4 font-medium">
                    "Ah, y a propósito... Sam me hace llenar un formulario corto por cada persona que le pongo en el calendario. Voy a completar la mayor parte yo mismo en base a la conversación - pero, ¿me das un minuto y me ayudás con 2-3 preguntas para que puedan arrancar con todo?"
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-2 text-[15px] text-rose-200/90 italic marker:text-rose-500/50">
                    <li>"¿Hace cuánto tiempo seguís a Closers.io o a Cole Gordo - o recién nos conociste?"</li>
                    <li>"¿Y tu estructura de liderazgo es XYZ, no?"</li>
                    <li>"¿Y tu objetivo era XYZ?"</li>
                    <li>"En una escala del 1 al 10... siendo 1 'las cosas están realmente muy ajustadas ahora' y 10 'tengo los recursos para hacer lo que quiera' - ¿dónde sentís que estás financieramente?"
                      <ul className="list-[circle] pl-5 mt-1">
                        <li>"¿Qué significa X para vos?"</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Puntos Clave Calificar */}
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h4 className="text-[17px] font-bold text-rose-400 mb-5 flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  Puntos clave:
                </h4>
                
                <ul className="list-disc pl-5 space-y-4 text-[14.5px] text-zinc-300 marker:text-rose-500/50">
                  <li>La mayoría de los setters sobre-califican porque los closers les gritan y nadie les explica que hagan otra cosa.</li>
                  <li>La sobre-calificación lleva a bajar:
                    <ul className="list-[circle] pl-5 mt-2 space-y-1 text-zinc-400 marker:text-zinc-600">
                      <li>Leads por set</li>
                      <li>Show rate</li>
                      <li className="text-zinc-300 italic">Esto pasa porque le mete demasiada presión de compra al prospecto antes de que aparezca a la llamada</li>
                    </ul>
                  </li>
                  <li>Idealmente, podés calificar durante el discovery de forma encubierta. Por ejemplo:
                    <ul className="list-[square] pl-5 mt-2 space-y-2 text-zinc-400 marker:text-zinc-600">
                      <li>Preguntando la ocupación en ofertas B2C</li>
                      <li>Preguntando cuánto dinero necesitarían ganar para reemplazar el ingreso que hacen actualmente a tiempo completo (para ofertas de oportunidad de negocio)</li>
                      <li>Evaluando la calidad de su negocio (para ofertas B2B)</li>
                    </ul>
                  </li>
                  <li>Y después - si calificás más fuerte y directo - hacelo solo con los prospectos en los que sea necesario, y solo preguntá las preguntas difíciles que hagan falta.
                    <ul className="list-[circle] pl-5 mt-2 text-zinc-400 marker:text-zinc-600">
                      <li>En el ejemplo de arriba - las primeras 3-4 preguntas son "de relleno". Después termino con lo único que realmente me importa: las finanzas.</li>
                    </ul>
                  </li>
                  <li>Hacemos esto al final, porque si calificás fuerte en lo financiero durante el disco - puede arruinar el discovery y descarrilar el set, salvo que el setter sea muy hábil.
                    <ul className="list-[circle] pl-5 mt-2 text-zinc-400 marker:text-zinc-600">
                      <li>Para que quede claro: los buenos setters lo pueden lograr. Pero en general esto es lo mejor.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-zinc-800 my-16" />

        {/* --- NUEVA SECCIÓN: Cierre --- */}
        <section id="section-34" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-red-500/20 p-2 rounded-lg text-red-400">
              <PhoneOff size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Cierre (Ending):</h2>
          </div>

          <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
            <div className="bg-[#121214] border border-red-500/20 p-6 md:p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50"></div>
              
              <div className="space-y-4 relative z-10 text-[16px] text-zinc-300 italic font-medium leading-relaxed">
                <p>"Ok, genial. Te mando todo eso."</p>
                <p>"Y una última cosa..."</p>
                <p>"También te acabo de mandar un video corto para que veas antes de la llamada. ¿Te llegó?"</p>
                <p>"¿Lo vas a ver también antes de la llamada? Les va a servir para arrancar con todo... y les cuenta sobre (XYZ)..."</p>
                <p>"Genial - ¿alguna pregunta sobre tu llamada con Sam mañana?"</p>
                <p>"Perfecto - te agrego a un grupo con él ahora, por si surge algo."</p>
                <p>"Chau."</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-zinc-800 my-16" />

        {/* --- NUEVA SECCIÓN: Ajustes para Triage --- */}
        <section id="section-35" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-cyan-500/20 p-2 rounded-lg text-cyan-400">
              <SlidersHorizontal size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Ajustes para la Llamada de Triage (Triage Call)</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl mb-8">
                <p className="text-[15.5px] text-zinc-300 mb-3 font-medium">De nuevo, esto es para:</p>
                <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-zinc-400 marker:text-cyan-400/50">
                  <li>Reservas directas. Tipo "2 grade apps"</li>
                  <li>Prospecto que agendó a través del link del setter
                    <ul className="list-[circle] pl-5 mt-1">
                      <li>Texto</li>
                      <li>Email</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="space-y-8">
                {/* Rapport */}
                <div>
                  <h3 className="text-[20px] font-bold text-white mb-4 flex items-center gap-2">
                    <Handshake className="text-cyan-400" size={20} />
                    Rapport
                  </h3>
                  <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                    <div className="space-y-4 text-[15.5px] text-zinc-300 italic">
                      <p>"¡John! Qué bueno verte..."</p>
                      <p>"¿Eso es un XYZ ahí atrás?"</p>
                      <div className="not-italic text-[14px] text-zinc-500 bg-[#27272A]/50 p-3 rounded-lg my-2 border-l-2 border-zinc-600">
                        (Generalmente trato de estar presente y comentar algo divertido acá. Tal vez el tipo tiene una barba increíble. Puedo decir "Che, tener una barba así es una meta de vida para mí". Lo que sea. Si no me sale natural - no lo fuerzo).
                      </div>
                      <p>"Bueno, ¿cómo viene la semana?"</p>
                      <p>"¿Es un 'ocupado bueno' o un 'ocupado malo'?"</p>
                      <p>"Genial, bueno, vamos al grano - ¿tenés una hoja en blanco, algo para tomar notas?"</p>
                      <div className="not-italic text-[14px] text-zinc-500 bg-[#27272A]/50 p-3 rounded-lg my-2 border-l-2 border-zinc-600">
                        (Esto solo lo pregunto si es un triage telefónico, y no es una llamada saliente (outbound). Solo lo hago para evaluar dónde están. Si están manejando, si no están manejando, etc. En este contexto - voy a sostener la llamada de todos modos. Y no necesitan tomar notas - literalmente solo estoy viendo en qué situación están).
                      </div>
                    </div>
                  </div>
                </div>

                {/* Encuadre */}
                <div>
                  <h3 className="text-[20px] font-bold text-white mb-4 flex items-center gap-2">
                    <Layers className="text-cyan-400" size={20} />
                    Encuadre (Frame)
                  </h3>
                  <div className="bg-[#121214] border border-cyan-500/20 p-6 rounded-xl">
                    <div className="space-y-5 text-[15.5px] text-zinc-300 italic font-medium">
                      <p>"Entendido... bueno mirá - sé que originalmente respondiste al anuncio sobre potencialmente conseguir nuevos vendedores para tu negocio..."</p>
                      <p>"Estoy más que preparado para meterme de lleno en todo eso... para que tengas información... veas qué ofrecemos... y demás..."</p>
                      <p>"Pero como lo que hacemos es bastante personalizado... lo que más sentido tiene es que primero me des un poco de contexto sobre tu negocio - así que cuál es tu oferta, cómo funciona, cómo manejás actualmente tu sistema de adquisición y tu proceso de ventas ahora - y después, en base a eso, te voy a compartir las partes de lo que hacemos que sean relevantes y útiles específicamente para vos. ¿Tiene sentido?"</p>
                      <p>"Bien, así que de nuevo - sé que estás buscando potencialmente conseguir nuevos vendedores. ¿Qué está pasando en tu negocio ahora que te está haciendo considerar sumar gente nueva?"</p>
                      
                      <div className="not-italic text-[14px] text-zinc-500 font-normal mt-6 pt-4 border-t border-zinc-800">
                        (De acá en adelante, el resto de la llamada es igual a lo que ya cubrimos arriba).
                      </div>
                    </div>
                  </div>
                </div>

                {/* Puntos Clave Triage */}
                <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                  <h4 className="text-[17px] font-bold text-cyan-400 mb-4 flex items-center gap-2">
                    <CheckCircle2 size={18} />
                    Puntos clave:
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-zinc-300 marker:text-cyan-400/50">
                    <li>Lenguaje levemente distinto.</li>
                    <li>Pero sigo usando la misma psicología que en la intro de la llamada outbound que ya cubrimos.
                      <ul className="list-[circle] pl-5 mt-2 space-y-1 text-zinc-400 marker:text-zinc-600">
                        <li>Alinear interés</li>
                        <li>Sacar de encima posibles objeciones de inmediato</li>
                        <li>Conseguir el "sí" de entrada (buy in)</li>
                        <li>Etc.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        </div>
      </div>
    </div>
  );
};




