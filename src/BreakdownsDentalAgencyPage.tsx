import { TableOfContents } from './components/TableOfContents';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Target, DollarSign, TrendingUp, AlertTriangle, Zap, BarChart,
  Users, Brain, Shield, RefreshCw, Star, Columns, Maximize2, PanelTop,
  Briefcase, AlertCircle, LineChart, Lightbulb, Activity, CheckCircle2,
  ArrowUpCircle, Filter, Bot, Settings, Database, Wrench
} from 'lucide-react';

const ArcadiaLogo = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15.41 3.53H19.78L12.35 18.06H7.98L15.41 3.53Z" />
    <path d="M6.02 12.37H10.39L8.21 16.65H3.84L6.02 12.37Z" />
  </svg>
);

export const BreakdownsDentalAgencyPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {
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
        { "id": "section-0", "title": "Contexto del episodio" },
        { "id": "section-1", "title": "El negocio de Tooth Traffic" },
        { "id": "section-2", "title": "Modelo de precios actual" },
        { "id": "section-3", "title": "Crítica #1: el apalancamiento cambia en cada trato" },
        { "id": "section-4", "title": "Números del negocio" },
        { "id": "section-5", "title": "Crítica #2: sobrecontratación y eficiencia" },
        { "id": "section-6", "title": "Crítica #3: upsell de alto esfuerzo vs. alto apalancamiento" },
        { "id": "section-7", "title": "Adquisición de clientes" },
        { "id": "section-8", "title": "Recomendación central: $12K upfront" },
        { "id": "section-9", "title": "Segunda acción: piloto IA en el CRM" },
        { "id": "section-10", "title": "Advertencia final" },
      ]} />

      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
          <ArcadiaLogo />
          <span className="text-zinc-500">Boards</span>
          <span className="text-zinc-700">/</span>
          <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('breakdowns_parent')}>Breakdowns</span>
        </div>
      </div>

      <div className="flex items-start gap-5 mb-16">
        <div className="border border-[#D5B15B]/30 p-3.5 rounded-2xl text-[#D5B15B] bg-[#1A1A1E] mt-1 shadow-[0_0_20px_rgba(213,177,91,0.15)]">
          <DollarSign size={28} strokeWidth={1.5} />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">I Found The Pricing Leak Keeping This $246K/Month Dental Agency Stuck</h2>
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
              src="https://www.youtube.com/embed/ktIbEa7bRIg"
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

            {/* Section 0 */}
            <section id="section-0" className="border border-[#27272A]/80 bg-[#121214] rounded-[2rem] p-8 lg:p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Briefcase className="text-[#D5B15B]" size={28} /> Contexto del episodio
              </h3>
              <p className="text-[16px] text-zinc-300 leading-relaxed">
                Es un episodio de la serie <strong>"business breakdown"</strong>. El host (dueño del programa Inner Circle, enfocado en llegar al primer millón mensual o al siguiente) analiza el negocio de <strong>Kurosh y Michael, socios de Tooth Traffic</strong>, dos miembros de su comunidad. El host descubre que el problema central es <strong>una fuga de precios</strong>: cobran muy poco para el valor que generan.
              </p>
            </section>

            {/* Section 1 */}
            <section id="section-1">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">El negocio de Tooth Traffic</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl">
                    <p className="text-zinc-400 text-sm mb-1 uppercase tracking-wider font-bold">Facturación</p>
                    <p className="text-white text-2xl font-bold">$246-247K/mes</p>
                    <p className="text-zinc-400 text-sm">brutos</p>
                  </div>
                  <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl">
                    <p className="text-zinc-400 text-sm mb-1 uppercase tracking-wider font-bold">Nicho</p>
                    <p className="text-zinc-300">Generación de leads y appointment setting para <strong className="text-white">clínicas de implantes dentales</strong>. Solo implantes.</p>
                  </div>
                </div>
                <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl">
                  <p className="text-zinc-400 text-sm mb-2 uppercase tracking-wider font-bold">Call center</p>
                  <p className="text-zinc-300">Un equipo con base en EE.UU. (ISRs/SDRs/setters) llama a los leads generados y agenda las citas en las clínicas. Lo sumaron porque los clientes eran malos vendedores y arruinaban los leads, causando altísimo churn. Además vieron que otra agencia lo hacía. Con el call center mejoró el retorno.</p>
                </div>
                <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl">
                  <p className="text-zinc-400 text-sm mb-2 uppercase tracking-wider font-bold">Origen del nicho</p>
                  <p className="text-zinc-300">El padre de uno de ellos coloca implantes. Venían del marketing y buscaban barrera de entrada baja. Probaron antes con HVAC y consolidación de deudas de tarjetas de crédito.</p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <DollarSign size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Modelo de precios actual</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-6">
                <div className="bg-[#1A1A1E] border border-zinc-800 p-6 rounded-xl">
                  <ul className="space-y-3 font-mono text-[14px]">
                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Fee base mensual:</span>
                      <span className="text-white">$3,750/mes</span>
                    </li>
                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Performance (100K–200K bruto):</span>
                      <span className="text-[#D5B15B]">3.75%</span>
                    </li>
                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Performance (200K–300K bruto):</span>
                      <span className="text-[#D5B15B]">4%</span>
                    </li>
                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Performance (+300K bruto):</span>
                      <span className="text-[#D5B15B]">5%</span>
                    </li>
                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Gasto mínimo en ads del cliente:</span>
                      <span className="text-white">$5K/mes</span>
                    </li>
                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Gasto promedio en ads:</span>
                      <span className="text-white">$8–10K/mes</span>
                    </li>
                    <li className="flex justify-between pt-2">
                      <span className="text-zinc-400">ROAS mínimo / buenas cuentas:</span>
                      <span className="text-green-400">6-8x / 8-12x (algunas 20-25x)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 p-5 rounded-xl">
                  <p className="text-red-400 font-bold mb-2">Problema clave:</p>
                  <p className="text-zinc-300 text-sm">El porcentaje de performance <strong>no se suma al fee, lo reemplaza</strong>: cobran $3,750 y solo facturan la diferencia cuando el porcentaje da más. Estos números los fijó el <strong>primer cliente</strong> hace un año, y se aplicaron a todos. Las cuentas recién empiezan a llegar a performance con regularidad ahora.</p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 shadow-inner">
                  <AlertCircle size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Crítica #1: el apalancamiento cambia en cada trato</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-6">
                <p className="text-zinc-300 leading-relaxed">
                  Los precios los fijó <strong>el primer cliente, que tenía más leverage que ellos</strong>. Ese número no puede replicarse en todos los tratos, porque el apalancamiento nunca es estático. A veces entrás con más que la contraparte y a veces con menos.
                </p>
                <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl">
                  <p className="text-[#D5B15B] font-bold mb-3">Ejemplo del host:</p>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-2 text-[15px]">
                    <li>En un negocio de varios millones al mes, si pide su 10% habitual de profit neto, le dirían que se vaya. Pero en un negocio de $100K con DFY, no cobraría 10% neto sino quizás <strong className="text-white">30% del bruto</strong>, para compensar el riesgo de dedicarle tiempo a algo chico.</li>
                    <li>Un trato chico consume el mismo tiempo que uno grande. Hay que cobrar más en los chicos para compensar, y ajustar <strong className="text-white">trato por trato</strong>.</li>
                  </ul>
                </div>
                <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-5 rounded-xl">
                  <p className="text-[#D5B15B] font-bold mb-2">"Money managers modernos"</p>
                  <p className="text-zinc-300 text-[15px]">Si de verdad convierten $1 en $6-8 cada 30 días, ningún inmueble, acción o cripto hace eso de forma controlable. Cobrar menos de un 5% de ese resultado es "que te fumen". Subestiman lo que valen.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <LineChart size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Números del negocio</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl text-center">
                    <p className="text-zinc-400 text-xs mb-1 uppercase tracking-wider font-bold">Margen neto</p>
                    <p className="text-white text-2xl font-bold">25–30%</p>
                    <p className="text-zinc-500 text-xs">(último mes inflado: ~40%)</p>
                  </div>
                  <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl text-center">
                    <p className="text-zinc-400 text-xs mb-1 uppercase tracking-wider font-bold">Clientes</p>
                    <p className="text-white text-2xl font-bold">53–54</p>
                  </div>
                  <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl text-center">
                    <p className="text-zinc-400 text-xs mb-1 uppercase tracking-wider font-bold">Equipo</p>
                    <p className="text-white text-2xl font-bold">~22 personas</p>
                    <p className="text-zinc-500 text-xs">Nómina: $70–90K/mes</p>
                  </div>
                </div>
                <div className="bg-[#1A1A1E] border border-zinc-800 p-6 rounded-xl">
                  <ul className="space-y-3 font-mono text-[14px]">
                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Churn este mes:</span>
                      <span className="text-green-400">2–3%</span>
                    </li>
                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Churn pico (mar–may):</span>
                      <span className="text-red-400">10–11%</span>
                    </li>
                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Promedio anual churn:</span>
                      <span className="text-white">6%</span>
                    </li>
                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Videoshoots (upsell reciente):</span>
                      <span className="text-white">$13,000/paquete</span>
                    </li>
                    <li className="flex justify-between pt-2">
                      <span className="text-zinc-400">Margen performance (bruto):</span>
                      <span className="text-[#D5B15B]">~85% (después de pagar ISRs)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 p-5 rounded-xl">
                  <p className="text-red-400 font-bold mb-2">Causa del pico de churn:</p>
                  <p className="text-zinc-300 text-sm">En mar–may hicieron cambios en la publicidad B2C que afectaron negativamente, y contrataron mal (le dieron control a un marketing helper equivocado, con poco contexto y mala inducción).</p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Crítica #2: sobrecontratación y eficiencia</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-8">
                <div>
                  <h4 className="font-bold text-white text-xl mb-4 flex items-center gap-3">
                    <AlertTriangle className="text-amber-400" size={22} /> El problema del rango $100–300K/mes
                  </h4>
                  <p className="text-zinc-300 leading-relaxed">Los dueños no se sacan del medio. El principio de decisión de ellos es: "contratemos gente cuando aparece un problema". Eso les impide ver soluciones más eficientes. Los clientes <strong className="text-white">no se interesan por tiempo y esfuerzo, solo por resultados</strong>.</p>
                </div>

                <hr className="border-zinc-800" />

                <div>
                  <h4 className="font-bold text-white text-xl mb-4 flex items-center gap-3">
                    <Brain className="text-purple-400" size={22} /> La experiencia del host
                  </h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-3 text-[15px]">
                    <li>Tuvo <strong>27 empleados con ~$300K/mes</strong> y no entendía la eficiencia.</li>
                    <li>Contrataba en planilla cosas que podían ser contratistas por proyecto.</li>
                    <li>Salía a vender más servicios solo para justificar esos sueldos (ej: si sus 3 diseñadores estaban ociosos, vendía cosas con diseño).</li>
                    <li>Se sentía "una niñera bien paga": mucho estrés y complejidad.</li>
                    <li>Hoy tiene <strong>12–14 personas</strong> (con contratistas) y gana mucho más. Un marketing helper hace lo que antes hacían ~6 personas.</li>
                  </ul>
                </div>

                <hr className="border-zinc-800" />

                <div>
                  <h4 className="font-bold text-white text-xl mb-4 flex items-center gap-3">
                    <Zap className="text-[#D5B15B]" size={22} /> Qué hacen sus marketing helpers (jugadores A, multi-skill)
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Copywriting y automatización (Zapier, N8N)',
                      'Uso de IA como "AI engineer"',
                      'Paid ads, imágenes y videos con IA',
                      'Guiones de anuncios',
                      'Hablar con clientes, reporting (CSM)',
                      'Edición de video',
                      'Funnels, sitios web, secuencias de email',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D5B15B] shrink-0 mt-2"></div>
                        <p className="text-[14.5px] text-zinc-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="border-zinc-800" />

                <div>
                  <h4 className="font-bold text-white text-xl mb-4 flex items-center gap-3">
                    <Bot className="text-blue-400" size={22} /> El caso de Tom (AI SDR a $1M/mes)
                  </h4>
                  <p className="text-zinc-300 mb-3">Miembro del Inner Circle que vende cámaras hiperbáricas ($50–100K). No tiene vendedores: tiene un <strong className="text-white">AI SDR</strong> que responde por texto y llamada, hecho con <strong>Claude y ElevenLabs</strong>, conectado a una base de conocimiento en Notion ("war room") con productos, inventario en tiempo real, producción y envíos.</p>
                  <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-5 rounded-xl">
                    <p className="text-[#D5B15B] font-bold mb-2">Regla del host:</p>
                    <p className="text-zinc-300 text-sm">No contrata salvo que el puesto se pague a sí mismo de forma 100% trackeable. Si hay "trabajo ocioso", se pregunta por qué existe. Antes de contratar, mirá al staff actual y preguntales: ¿realmente no tienen capacidad, o lo asumieron ustedes?</p>
                  </div>
                </div>

                <hr className="border-zinc-800" />

                <div>
                  <h4 className="font-bold text-white text-xl mb-4 flex items-center gap-3">
                    <Settings className="text-zinc-400" size={22} /> Propuesta para el call center
                  </h4>
                  <p className="text-zinc-300 mb-3">Contratar un <strong className="text-white">AI engineer</strong> que analice llamadas y actividad de los SDRs y evalúe reemplazar los próximos 10 SDRs por IA, como test.</p>
                  <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl">
                    <p className="text-zinc-400 text-sm"><strong className="text-white">Matemática del riesgo:</strong> con 53 clientes, 3% de churn y $3,750 por cliente, apostaría a perder los próximos ~3 clientes probando IA en lugar de personas.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <ArrowUpCircle size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Crítica #3: upsell de alto esfuerzo vs. alto apalancamiento</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-8">
                <div>
                  <h4 className="font-bold text-white text-xl mb-3">El problema con los videoshoots</h4>
                  <p className="text-zinc-300">Son <strong>intensivos en tiempo y esfuerzo</strong>: gente que viaja, y el equipo de edición se engorda. Alta complejidad operativa por $13K.</p>
                </div>

                <hr className="border-zinc-800" />

                <div>
                  <h4 className="font-bold text-white text-xl mb-4 flex items-center gap-3">
                    <Database className="text-green-400" size={22} /> Alternativa: agente de IA dentro del CRM
                  </h4>

                  <div className="bg-[#1A1A1E] border border-zinc-800 p-6 rounded-xl mb-4">
                    <p className="text-[#D5B15B] font-bold mb-3">Caso K (miembro del Inner Circle, ~$1.5M/mes):</p>
                    <ul className="list-disc pl-5 text-zinc-300 space-y-2 text-[15px]">
                      <li>Exportó <strong>400,000 conversaciones</strong> de DMs y un agente OpenClaw las analizó para encontrar gente que casi compra pero tuvo una objeción.</li>
                      <li>El agente cruzó cada objeción con un testimonio similar de una base en Notion y mandó emails personalizados.</li>
                      <li>Resultado: <strong className="text-green-400">$802,000 extra en un mes (junio)</strong>.</li>
                    </ul>
                  </div>

                  <div className="bg-[#1A1A1E] border border-zinc-800 p-6 rounded-xl mb-4">
                    <p className="text-[#D5B15B] font-bold mb-3">Lo que hizo el host (9 horas un fin de semana):</p>
                    <p className="text-zinc-300 text-[15px] mb-3">Armó su base de conocimiento en Notion con: productos y precios, testimonios, transcripciones de todos los cursos, ofertas, disclaimers, <strong>10 años de datos de ventas</strong> y una sección de "voz" para imitar su estilo.</p>
                    <ul className="list-disc pl-5 text-zinc-300 space-y-2 text-[15px]">
                      <li>~<strong>8,000 emails por día</strong>, 3–4 contactos por semana por persona.</li>
                      <li>Infraestructura: agente <strong>Hermes</strong> en Mac minis (tiene 15 en un rack), conectado a OpenAI. AI engineer a $6K/mes (hoy $10K).</li>
                    </ul>
                  </div>

                  <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-5 rounded-xl">
                    <p className="text-[#D5B15B] font-bold mb-2">Cómo aplicarlo en Tooth Traffic:</p>
                    <ul className="list-disc pl-5 text-zinc-300 space-y-2 text-[15px]">
                      <li>Ofrecerlo a las clínicas por un fee mensual extra ("un par de miles") más el <strong>mismo porcentaje de performance</strong>.</li>
                      <li>Todo es trackeable: UTMs, tags en el CRM cuando se hace clic, scheduler exclusivo para quienes vienen de email.</li>
                      <li>Un humano (SCR) podría gestionar 10–20 cuentas en lugar de 1–5 si la IA hace el 80% del trabajo previo.</li>
                      <li>Casi todos los 53 clientes lo tomarían, según los socios.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-7">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Adquisición de clientes</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl">
                    <p className="text-zinc-400 text-sm mb-1 uppercase tracking-wider font-bold">Origen de clientes</p>
                    <p className="text-white text-xl font-bold">~85% referidos</p>
                    <p className="text-zinc-400 text-sm">Solo 15% de Facebook Ads</p>
                  </div>
                  <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl">
                    <p className="text-zinc-400 text-sm mb-1 uppercase tracking-wider font-bold">CAC</p>
                    <p className="text-white text-xl font-bold">~$11,000</p>
                    <p className="text-zinc-400 text-sm">Costo por llamada agendada: ~$1,000 (15–17/mes)</p>
                  </div>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 p-5 rounded-xl">
                  <p className="text-red-400 font-bold mb-2">El problema:</p>
                  <p className="text-zinc-300 text-sm">Con un CAC de $11,000 y fee de $3,750/mes, <strong>no son rentables hasta ~4 meses después</strong>. El churn viene en gran parte de los clientes referidos: como dependen de ellos, no pueden decir que no a clientes equivocados. Con flujo constante podrían ser selectivos. Con 15–17 llamadas/mes no salen del "learning mode".</p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D5B15B]/20 border border-[#D5B15B]/40 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Star size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Recomendación central: efecto dominó y cobrar $12K upfront</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-8">
                <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-6 rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D5B15B]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                  <p className="text-[#D5B15B] font-bold text-xl mb-2 relative z-10">El efecto dominó</p>
                  <p className="text-zinc-300 text-[15px] relative z-10">Hay que buscar la <strong className="text-white">única acción que hace que todo lo demás encaje</strong>.</p>
                </div>

                <div>
                  <h4 className="font-bold text-white text-xl mb-4">Por qué $12K upfront (setup fee):</h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-3 text-[15px]">
                    <li>Permite ser rentables desde el primer mes y dejar de depender de mejorar el costo por llamada, el show rate y el close rate.</li>
                    <li>Con solo 15–17 llamadas al mes no salen del learning mode. Con más margen pueden mejorar los números con calma.</li>
                    <li>El cliente puede justificarlo: si invierte $5K en ads con un retorno de 6x, son $30K. Un desembolso total de ~$17K se recupera en el primer mes.</li>
                    <li>Si no lo cierran, el problema es de <strong>confianza y prueba</strong>. Tienen que mostrar datos reales: el peor caso, el promedio y el mejor.</li>
                    <li>Después de los $12K el fee mensual puede bajar o ajustarse ($5–6K) según el dinero que generen.</li>
                  </ul>
                </div>

                <hr className="border-zinc-800" />

                <div>
                  <h4 className="font-bold text-white text-xl mb-4 flex items-center gap-3">
                    <Brain className="text-purple-400" size={22} /> Psicología del precio
                  </h4>
                  <p className="text-zinc-300 leading-relaxed text-[15px]">El host cuenta que compró un flipper "Winchester Mystery House" (~$20,000) y que cuida más el Rolls-Royce Cullinan ($552K) que sus otros autos. <strong className="text-white">Lo que más pagamos es lo que más en serio tomamos.</strong> Los clientes que gastan más en ads también toman el sistema más en serio y tienen más probabilidad de éxito. Por eso hay que pedirles más.</p>
                </div>

                <hr className="border-zinc-800" />

                <div>
                  <h4 className="font-bold text-white text-xl mb-3">Cómo implementarlo</h4>
                  <div className="bg-[#1A1A1E] border-l-4 border-[#D5B15B] p-5 rounded-r-xl">
                    <p className="text-zinc-300 text-[15px]">No hacerlo escalonado. <strong className="text-white">Ir directo a $12K.</strong> Como esto afecta solo al ~15% de los tratos (15–17 oportunidades al mes), el riesgo es bajo y el upside enorme. Si fallan, descubrirán los defectos del pitch. Para clientes con unos cientos de miles al mes, $12K es poco. Tono en las llamadas: directo, honesto y sin arrogancia, mostrando datos que generen confianza rápida.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="section-9">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <Bot size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Segunda acción: piloto del agente de IA en el CRM</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-6">
                <ul className="list-disc pl-5 text-zinc-300 space-y-3 text-[15px]">
                  <li>Buscar un cliente actual como <strong className="text-white">test pilot</strong> y construirlo (menos de 10 horas, un poco tedioso al inicio).</li>
                  <li>Lograr ingresos trackeables sin dudas en ese cliente, y luego <strong>replicarlo a otros cobrando más</strong>.</li>
                  <li>Esto abre una fuente de ingresos back-end que permite <strong>subir el fee mensual a los clientes actuales</strong>, algo necesario porque cuando entren clientes nuevos que pagan mucho más, los viejos van a recibir menos atención.</li>
                </ul>
              </div>
            </section>

            {/* Section 10 */}
            <section id="section-10">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Advertencia final</h3>
              </div>
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg space-y-6">
                <p className="text-zinc-300 leading-relaxed text-[15.5px]">
                  Los de $100–300K/mes <strong className="text-white">complican todo de más</strong>. El host quiere que hagan solo estas dos cosas, sin sumar complejidad, y que lo demás se mejore después según qué sea lo más obvio.
                </p>
                <div className="bg-[#1A1A1E] border-l-4 border-[#D5B15B] p-5 rounded-r-xl">
                  <ol className="list-decimal pl-5 text-white font-bold space-y-3 text-lg">
                    <li>Cobrar $12K upfront en las llamadas.</li>
                    <li>Construir el seguimiento por IA en el CRM (piloto con un cliente).</li>
                  </ol>
                </div>
                <p className="text-zinc-400 text-[14px] italic">
                  El host aclara que no hay claims de ingresos (es educación general) y promociona el Inner Circle, el "Jeremy AI" (clon digital agéntico) y una cohorte de Master Internet Marketing de 7 semanas.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
